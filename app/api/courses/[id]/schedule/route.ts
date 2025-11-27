import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const SHIFT_TIMES = {
  MANANA: { start: '08:00', end: '11:00', label: 'Mañanas (8:00 AM - 11:00 AM)' },
  TARDE: { start: '13:30', end: '16:30', label: 'Tardes (1:30 PM - 4:30 PM)' },
  NOCHE: { start: '17:00', end: '20:00', label: 'Noches (5:00 PM - 8:00 PM)' },
  SABADO: { start: '08:00', end: '16:30', label: 'Sábados (8:00 AM - 4:30 PM)' },
  INTENSIVO: { start: '08:00', end: '17:00', label: 'Intensivo (8:00 AM - 5:00 PM)' },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: courseId } = await params;
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
      select: { instructorId: true },
    });

    if (!course) {
      return NextResponse.json({ error: 'Curso no encontrado' }, { status: 404 });
    }

    const isInstructorOrAdmin = session.user.role === 'ADMIN' || course.instructorId === session.user.id;

    if (!isInstructorOrAdmin && session.user.role === 'STUDENT') {
      const enrollment = await prisma.enrollment.findFirst({
        where: {
          courseId,
          userId: session.user.id,
          status: 'ACTIVE',
        },
      });

      if (!enrollment) {
        return NextResponse.json({ error: 'No estas inscrito en este curso' }, { status: 403 });
      }
    }

    const schedule = await (prisma as any).courseSchedule.findFirst({
      where: { courseId, active: true },
    });

    if (!schedule) {
      return NextResponse.json({ schedule: null, isLive: false, nextClass: null });
    }

    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = now.toTimeString().slice(0, 5);

    const isClassDay = schedule.daysOfWeek.includes(currentDay);
    const isWithinTime = currentTime >= schedule.startTime && currentTime <= schedule.endTime;
    const isLive = isClassDay && isWithinTime && schedule.active;

    let nextClass = null;
    if (!isLive) {
      const daysOfWeek = schedule.daysOfWeek as number[];
      for (let i = 0; i < 7; i++) {
        const checkDay = (currentDay + i) % 7;
        if (daysOfWeek.includes(checkDay)) {
          const nextDate = new Date(now);
          nextDate.setDate(now.getDate() + i);

          if (i === 0 && currentTime >= schedule.endTime) {
            continue;
          }

          const [hours, minutes] = schedule.startTime.split(':');
          nextDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

          if (nextDate > now) {
            nextClass = nextDate.toISOString();
            break;
          }
        }
      }
    }

    return NextResponse.json({
      schedule: {
        ...schedule,
        shiftLabel: SHIFT_TIMES[schedule.shift as keyof typeof SHIFT_TIMES]?.label || schedule.shift,
      },
      isLive,
      nextClass,
      currentModule: await getCurrentModule(courseId, schedule),
    });
  } catch (error) {
    console.error('Error fetching schedule:', error);
    return NextResponse.json({ error: 'Error al obtener horario' }, { status: 500 });
  }
}

async function getCurrentModule(courseId: string, schedule: any) {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      modules: {
        orderBy: { order: 'asc' },
        include: {
          lessons: {
            orderBy: { order: 'asc' },
          },
        },
      },
    },
  });

  if (!course?.modules.length) return null;

  const startDate = new Date(schedule.startDate);
  const now = new Date();
  const daysPassed = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  const classesPerWeek = (schedule.daysOfWeek as number[]).length;
  const weeksCount = Math.floor(daysPassed / 7);
  const currentClassNumber = weeksCount * classesPerWeek;

  const moduleIndex = Math.min(currentClassNumber, course.modules.length - 1);
  return course.modules[moduleIndex] || course.modules[0];
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: courseId } = await params;
    const session = await auth();

    if (!session?.user || !['ADMIN', 'INSTRUCTOR'].includes(session.user.role)) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    const body = await request.json();
    const { shift, daysOfWeek, startDate, endDate, teamsUrl, streamUrl } = body;

    if (!shift || !daysOfWeek?.length || !startDate || !endDate) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }

    const shiftConfig = SHIFT_TIMES[shift as keyof typeof SHIFT_TIMES];
    if (!shiftConfig) {
      return NextResponse.json({ error: 'Turno inválido' }, { status: 400 });
    }

    await (prisma as any).courseSchedule.updateMany({
      where: { courseId },
      data: { active: false },
    });

    const schedule = await (prisma as any).courseSchedule.create({
      data: {
        courseId,
        shift,
        daysOfWeek,
        startTime: shiftConfig.start,
        endTime: shiftConfig.end,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        teamsUrl: teamsUrl || null,
        streamUrl: streamUrl || null,
        active: true,
      },
    });

    return NextResponse.json(schedule, { status: 201 });
  } catch (error) {
    console.error('Error creating schedule:', error);
    return NextResponse.json({ error: 'Error al crear horario' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: courseId } = await params;
    const session = await auth();

    if (!session?.user || !['ADMIN', 'INSTRUCTOR'].includes(session.user.role)) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
    }

    const body = await request.json();
    const { teamsUrl, streamUrl } = body;

    const updateData: any = {};
    if (teamsUrl !== undefined) updateData.teamsUrl = teamsUrl;
    if (streamUrl !== undefined) updateData.streamUrl = streamUrl;

    const schedule = await (prisma as any).courseSchedule.updateMany({
      where: { courseId, active: true },
      data: updateData,
    });

    return NextResponse.json({ success: true, updated: schedule.count });
  } catch (error) {
    console.error('Error updating schedule:', error);
    return NextResponse.json({ error: 'Error al actualizar horario' }, { status: 500 });
  }
}
