import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user || !['ADMIN', 'INSTRUCTOR'].includes(session.user.role)) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    return NextResponse.json({
      rtmpUrl: process.env.OWNCAST_RTMP_URL || 'rtmp://casa.tailc67ac4.ts.net:1935/live',
      streamKey: process.env.OWNCAST_STREAM_KEY || '9VvfiAApPWU#06KUpyI6R3f3Por*@r',
      owncastUrl: process.env.OWNCAST_URL || 'https://casa.tailc67ac4.ts.net:8088',
      embedUrl: process.env.OWNCAST_EMBED_URL || 'https://casa.tailc67ac4.ts.net:8088/embed/video',
    });
  } catch (error) {
    console.error('Error getting stream config:', error);
    return NextResponse.json({ error: 'Error al obtener configuracion' }, { status: 500 });
  }
}
