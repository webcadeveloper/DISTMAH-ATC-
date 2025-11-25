import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { CalendarService } from '@/lib/microsoft/calendar-service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get('courseId');
    const userId = searchParams.get('userId');
    const upcoming = searchParams.get('upcoming') === 'true';

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    if (upcoming) {
      const classes = await CalendarService.getUpcomingLiveClasses(
        userId || undefined
      );
      return NextResponse.json(classes);
    }

    const where: any = {};
    if (courseId) {
      where.courseId = courseId;
    }

    if (userId && user.role === 'INSTRUCTOR') {
      where.instructorId = userId;
    } else if (user.role === 'STUDENT') {
      const enrollments = await prisma.enrollment.findMany({
        where: {
          userId: user.id,
          status: 'ACTIVE',
        },
        select: { courseId: true },
      });
      where.courseId = {
        in: enrollments.map((e) => e.courseId),
      };
    }

    const liveClasses = await (prisma.liveClass.findMany as any)({
      where,
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        course: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: {
        scheduledStart: 'asc',
      },
    });

    return NextResponse.json(liveClasses);
  } catch (error) {
    console.error('Error fetching live classes:', error);
    return NextResponse.json(
      { error: 'Error al obtener clases en vivo' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user || user.role !== 'INSTRUCTOR') {
      return NextResponse.json(
        { error: 'Solo instructores pueden crear clases' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { courseId, title, description, startDate, durationMinutes, moduleId } = body;

    if (!courseId || !title || !description || !startDate || !durationMinutes) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    const result = await CalendarService.createLiveClass({
      courseId,
      title,
      description,
      startDate: new Date(startDate),
      durationMinutes: parseInt(durationMinutes),
      instructorId: user.id,
      moduleId: moduleId || undefined,
    });

    return NextResponse.json(result.liveClass, { status: 201 });
  } catch (error) {
    console.error('Error creating live class:', error);
    return NextResponse.json(
      { error: 'Error al crear clase en vivo' },
      { status: 500 }
    );
  }
}
