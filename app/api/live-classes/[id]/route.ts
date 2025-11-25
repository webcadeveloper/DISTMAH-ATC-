import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { CalendarService } from '@/lib/microsoft/calendar-service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const liveClass = await prisma.liveClass.findUnique({
      where: { id: params.id },
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
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
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

    const liveClass = await prisma.liveClass.findUnique({
      where: { id: params.id },
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

    const updatedClass = await CalendarService.updateLiveClass(params.id, updates);

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
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
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

    const liveClass = await prisma.liveClass.findUnique({
      where: { id: params.id },
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

    await CalendarService.deleteLiveClass(params.id);

    return NextResponse.json({ message: 'Clase eliminada exitosamente' });
  } catch (error) {
    console.error('Error deleting live class:', error);
    return NextResponse.json(
      { error: 'Error al eliminar clase en vivo' },
      { status: 500 }
    );
  }
}
