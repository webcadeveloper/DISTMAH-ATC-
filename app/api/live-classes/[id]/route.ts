import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { CalendarService } from '@/lib/microsoft/calendar-service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const liveClass = await (prisma.liveClass.findUnique as any)({
      where: { id },
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
    });

    if (!liveClass) {
      return NextResponse.json({ error: 'Clase no encontrada' }, { status: 404 });
    }

    return NextResponse.json(liveClass);
  } catch (error) {
    console.error('Error fetching live class:', error);
    return NextResponse.json(
      { error: 'Error al obtener clase en vivo' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user || user.role !== 'INSTRUCTOR') {
      return NextResponse.json(
        { error: 'Solo instructores pueden actualizar clases' },
        { status: 403 }
      );
    }

    const liveClass = await (prisma.liveClass.findUnique as any)({
      where: { id },
    });

    if (!liveClass) {
      return NextResponse.json({ error: 'Clase no encontrada' }, { status: 404 });
    }

    if (liveClass.instructorId !== user.id) {
      return NextResponse.json(
        { error: 'No tienes permiso para actualizar esta clase' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { title, description, scheduledStart, durationMinutes } = body;

    const updates: any = {};
    if (title) updates.title = title;
    if (description) updates.description = description;
    if (scheduledStart) updates.scheduledStart = new Date(scheduledStart);
    if (durationMinutes) updates.durationMinutes = parseInt(durationMinutes);

    const updatedClass = await CalendarService.updateLiveClass(id, updates);

    return NextResponse.json(updatedClass);
  } catch (error) {
    console.error('Error updating live class:', error);
    return NextResponse.json(
      { error: 'Error al actualizar clase en vivo' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user || user.role !== 'INSTRUCTOR') {
      return NextResponse.json(
        { error: 'Solo instructores pueden eliminar clases' },
        { status: 403 }
      );
    }

    const liveClass = await (prisma.liveClass.findUnique as any)({
      where: { id },
    });

    if (!liveClass) {
      return NextResponse.json({ error: 'Clase no encontrada' }, { status: 404 });
    }

    if (liveClass.instructorId !== user.id) {
      return NextResponse.json(
        { error: 'No tienes permiso para eliminar esta clase' },
        { status: 403 }
      );
    }

    await CalendarService.deleteLiveClass(id);

    return NextResponse.json({ message: 'Clase eliminada exitosamente' });
  } catch (error) {
    console.error('Error deleting live class:', error);
    return NextResponse.json(
      { error: 'Error al eliminar clase en vivo' },
      { status: 500 }
    );
  }
}
