import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { approveCertificate, rejectCertificate } from '@/lib/certificates';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    if (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Solo instructores pueden aprobar certificados' }, { status: 403 });
    }

    const body = await request.json();
    const { certificateId, action, reason } = body;

    if (!certificateId || !action) {
      return NextResponse.json({ error: 'certificateId y action son requeridos' }, { status: 400 });
    }

    if (action !== 'approve' && action !== 'reject') {
      return NextResponse.json({ error: 'action debe ser "approve" o "reject"' }, { status: 400 });
    }

    // Verificar que el instructor tiene permiso sobre este curso
    const certificate = await prisma.certificate.findUnique({
      where: { id: certificateId },
      include: { course: true },
    });

    if (!certificate) {
      return NextResponse.json({ error: 'Certificado no encontrado' }, { status: 404 });
    }

    // Admin puede aprobar cualquier certificado, instructor solo sus cursos
    if (session.user.role === 'INSTRUCTOR' && certificate.course.instructorId !== session.user.id) {
      return NextResponse.json({ error: 'No tienes permiso para aprobar este certificado' }, { status: 403 });
    }

    if (action === 'approve') {
      const result = await approveCertificate(certificateId, session.user.id);

      if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 400 });
      }

      return NextResponse.json({
        success: true,
        message: 'Certificado aprobado exitosamente',
        certificate: result.certificate,
      });
    } else {
      if (!reason) {
        return NextResponse.json({ error: 'reason es requerido para rechazar' }, { status: 400 });
      }

      const result = await rejectCertificate(certificateId, session.user.id, reason);

      if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 400 });
      }

      return NextResponse.json({
        success: true,
        message: 'Certificado rechazado',
        certificate: result.certificate,
      });
    }
  } catch (error) {
    console.error('Error en approve certificate:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
