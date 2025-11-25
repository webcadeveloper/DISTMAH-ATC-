import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { CalendarService } from '@/lib/microsoft/calendar-service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN')) {
      return NextResponse.json(
        { error: 'No autorizado. Solo instructores y administradores pueden crear clases.' },
        { status: 401 }
      );
    }

    const data = await req.json();

    const { courseId, title, description, startDate, durationMinutes, moduleId } = data;

    if (!courseId || !title || !startDate || !durationMinutes) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: courseId, title, startDate, durationMinutes' },
        { status: 400 }
      );
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
      select: { id: true, title: true },
    });

    if (!course) {
      return NextResponse.json(
        { error: 'Curso no encontrado' },
        { status: 404 }
      );
    }

    const result = await CalendarService.createLiveClass({
      courseId,
      title,
      description: description || '',
      startDate: new Date(startDate),
      durationMinutes: parseInt(durationMinutes),
      instructorId: session.user.id,
      moduleId,
    });

    return NextResponse.json({
      success: true,
      message: 'Clase en vivo creada exitosamente',
      data: {
        liveClass: result.liveClass,
        teamsLink: result.event.onlineMeeting?.joinUrl,
      },
    });

  } catch (error: any) {
    console.error('Error creating live class:', error);

    return NextResponse.json(
      {
        error: 'Error al crear clase en vivo',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { error: 'No autenticado' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get('courseId');
    const month = searchParams.get('month');
    const year = searchParams.get('year');
    const upcoming = searchParams.get('upcoming');

    if (upcoming === 'true') {
      const instructorId = session.user.role === 'INSTRUCTOR' || session.user.role === 'ADMIN'
        ? session.user.id
        : undefined;

      const liveClasses = await CalendarService.getUpcomingLiveClasses(instructorId);

      return NextResponse.json({
        success: true,
        data: liveClasses,
      });
    }

    if (courseId) {
      const liveClasses = await CalendarService.getLiveClassesByCourse(courseId);

      return NextResponse.json({
        success: true,
        data: liveClasses,
      });
    }

    if (month && year) {
      const events = await CalendarService.getInstructorCalendar(
        session.user.id,
        parseInt(month),
        parseInt(year)
      );

      return NextResponse.json({
        success: true,
        data: events,
      });
    }

    return NextResponse.json(
      { error: 'Parámetros inválidos. Usa: courseId, upcoming=true, o month+year' },
      { status: 400 }
    );

  } catch (error: any) {
    console.error('Error getting live classes:', error);

    return NextResponse.json(
      {
        error: 'Error al obtener clases en vivo',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN')) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const data = await req.json();
    const { liveClassId, title, description, scheduledStart, durationMinutes } = data;

    if (!liveClassId) {
      return NextResponse.json(
        { error: 'liveClassId es requerido' },
        { status: 400 }
      );
    }

    const liveClass = await prisma.liveClass.findUnique({
      where: { id: liveClassId },
      select: { instructorId: true },
    });

    if (!liveClass) {
      return NextResponse.json(
        { error: 'Clase no encontrada' },
        { status: 404 }
      );
    }

    if (session.user.role === 'INSTRUCTOR' && liveClass.instructorId !== session.user.id) {
      return NextResponse.json(
        { error: 'No autorizado para modificar esta clase' },
        { status: 403 }
      );
    }

    const updates: any = {};
    if (title) updates.title = title;
    if (description !== undefined) updates.description = description;
    if (scheduledStart) updates.scheduledStart = new Date(scheduledStart);
    if (durationMinutes) updates.durationMinutes = parseInt(durationMinutes);

    const updatedClass = await CalendarService.updateLiveClass(liveClassId, updates);

    return NextResponse.json({
      success: true,
      message: 'Clase actualizada exitosamente',
      data: updatedClass,
    });

  } catch (error: any) {
    console.error('Error updating live class:', error);

    return NextResponse.json(
      {
        error: 'Error al actualizar clase',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN')) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const liveClassId = searchParams.get('liveClassId');

    if (!liveClassId) {
      return NextResponse.json(
        { error: 'liveClassId es requerido' },
        { status: 400 }
      );
    }

    const liveClass = await prisma.liveClass.findUnique({
      where: { id: liveClassId },
      select: { instructorId: true },
    });

    if (!liveClass) {
      return NextResponse.json(
        { error: 'Clase no encontrada' },
        { status: 404 }
      );
    }

    if (session.user.role === 'INSTRUCTOR' && liveClass.instructorId !== session.user.id) {
      return NextResponse.json(
        { error: 'No autorizado para eliminar esta clase' },
        { status: 403 }
      );
    }

    await CalendarService.deleteLiveClass(liveClassId);

    return NextResponse.json({
      success: true,
      message: 'Clase eliminada exitosamente',
    });

  } catch (error: any) {
    console.error('Error deleting live class:', error);

    return NextResponse.json(
      {
        error: 'Error al eliminar clase',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
