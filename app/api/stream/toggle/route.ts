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

    let schedule = await (prisma as any).courseSchedule.findFirst({
      where: { courseId },
    });

    if (!schedule) {
      schedule = await (prisma as any).courseSchedule.create({
        data: {
          courseId,
          shift: 'MORNING',
          daysOfWeek: [1, 2, 3, 4, 5],
          startTime: '08:00',
          endTime: '17:00',
          timezone: 'America/Caracas',
          startDate: new Date(),
          endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
          active: false,
          streamUrl: process.env.OWNCAST_EMBED_URL || 'https://casa.tailc67ac4.ts.net:8088/embed/video',
        },
      });
    }

    const updated = await (prisma as any).courseSchedule.update({
      where: { id: schedule.id },
      data: {
        active: isLive,
        streamUrl: isLive ? (process.env.OWNCAST_EMBED_URL || 'https://casa.tailc67ac4.ts.net:8088/embed/video') : schedule.streamUrl,
      },
    });

    if (isLive) {
      try {
        await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/stream/notify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cookie': request.headers.get('cookie') || '',
          },
          body: JSON.stringify({ courseId }),
        });
      } catch (error) {
        console.error('Error sending notifications:', error);
      }
    }

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
