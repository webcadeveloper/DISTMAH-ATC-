import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user || !['ADMIN', 'INSTRUCTOR'].includes(session.user.role)) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    const owncastUrl = process.env.OWNCAST_ADMIN_URL || process.env.OWNCAST_URL;

    if (!owncastUrl) {
      return NextResponse.json({
        online: false,
        error: 'Owncast no configurado'
      });
    }

    // Owncast API status endpoint
    const statusRes = await fetch(`${owncastUrl}/api/status`, {
      headers: { 'Accept': 'application/json' },
      cache: 'no-store',
    });

    if (!statusRes.ok) {
      return NextResponse.json({
        online: false,
        serverReachable: false,
        error: 'No se pudo conectar al servidor de streaming'
      });
    }

    const status = await statusRes.json();

    return NextResponse.json({
      online: status.online || false,
      serverReachable: true,
      viewerCount: status.viewerCount || 0,
      lastConnectTime: status.lastConnectTime,
      lastDisconnectTime: status.lastDisconnectTime,
      streamTitle: status.streamTitle || '',
      overallPeakViewerCount: status.overallPeakViewerCount || 0,
      sessionPeakViewerCount: status.sessionPeakViewerCount || 0,
    });
  } catch (error) {
    console.error('Error checking Owncast status:', error);
    return NextResponse.json({
      online: false,
      serverReachable: false,
      error: 'Error al verificar estado del stream'
    });
  }
}
