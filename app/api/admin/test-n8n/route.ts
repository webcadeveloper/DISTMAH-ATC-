import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

const N8N_BASE_URL = process.env.N8N_WEBHOOK_URL || 'https://casa.tailc67ac4.ts.net:9443';

export async function POST() {
  try {
    const session = await auth();
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    const testPayload = {
      event: 'test.connection',
      timestamp: new Date().toISOString(),
      source: 'DISTMAH-ATC',
      testData: {
        message: 'Prueba de conexión desde Next.js',
        userId: session.user.id,
        userEmail: session.user.email,
      },
    };

    const url = `${N8N_BASE_URL}/webhook/test-conexion`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testPayload),
    });

    if (!response.ok) {
      return NextResponse.json({
        success: false,
        error: `n8n respondió con status ${response.status}`,
        n8nUrl: url,
      }, { status: 500 });
    }

    const n8nResponse = await response.json();

    return NextResponse.json({
      success: true,
      message: 'Conexión exitosa con n8n',
      n8nUrl: url,
      sentPayload: testPayload,
      n8nResponse,
    });
  } catch (error) {
    console.error('Error testing n8n connection:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido',
      hint: 'Verifica que n8n esté corriendo y el workflow 21-test-conexion esté activo',
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    return NextResponse.json({
      n8nUrl: N8N_BASE_URL,
      testEndpoint: `${N8N_BASE_URL}/webhook/test-conexion`,
      instructions: [
        '1. Importa el workflow 21-test-conexion.json en n8n',
        '2. Activa el workflow',
        '3. Haz POST a este endpoint para probar',
      ],
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
