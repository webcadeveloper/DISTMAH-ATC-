import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user || !['ADMIN', 'INSTRUCTOR'].includes(session.user.role)) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    const body = await request.json();
    const { courseId, isLive } = body;

    if (!courseId) {
      return NextResponse.json({ error: 'courseId requerido' }, { status: 400 });
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return NextResponse.json({ error: 'Curso no encontrado' }, { status: 404 });
    }

    const schedule = await (prisma as any).courseSchedule.findFirst({
      where: { courseId },
    });

    if (!schedule) {
      return NextResponse.json({ error: 'No hay horario configurado para este curso' }, { status: 404 });
    }

    const updated = await (prisma as any).courseSchedule.update({
      where: { id: schedule.id },
      data: {
        active: isLive,
        streamUrl: isLive ? process.env.OWNCAST_EMBED_URL : schedule.streamUrl,
      },
    });

    return NextResponse.json({
      success: true,
      isLive: updated.active,
      message: isLive ? 'Clase en vivo activada' : 'Clase en vivo desactivada',
    });
  } catch (error) {
    console.error('Error toggling stream:', error);
    return NextResponse.json({ error: 'Error al cambiar estado del stream' }, { status: 500 });
  }
}
