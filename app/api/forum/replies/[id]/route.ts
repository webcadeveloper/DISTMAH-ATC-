import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! }
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    const { id } = await params;
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json({ error: 'content es requerido' }, { status: 400 });
    }

    const reply = await prisma.forumReply.findUnique({
      where: { id }
    });

    if (!reply) {
      return NextResponse.json({ error: 'Reply no encontrado' }, { status: 404 });
    }

    if (reply.userId !== user.id) {
      return NextResponse.json({ error: 'Solo el autor puede editar este reply' }, { status: 403 });
    }

    const updatedReply = await (prisma.forumReply.update as any)({
      where: { id },
      data: { content },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        }
      }
    });

    return NextResponse.json(updatedReply);
  } catch (error) {
    console.error('Error al actualizar reply:', error);
    return NextResponse.json({ error: 'Error al actualizar reply' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! }
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    const { id } = await params;

    const reply = await prisma.forumReply.findUnique({
      where: { id }
    });

    if (!reply) {
      return NextResponse.json({ error: 'Reply no encontrado' }, { status: 404 });
    }

    if (reply.userId !== user.id && user.role !== 'INSTRUCTOR' && user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado para eliminar este reply' }, { status: 403 });
    }

    await prisma.forumReply.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Reply eliminado' }, { status: 200 });
  } catch (error) {
    console.error('Error al eliminar reply:', error);
    return NextResponse.json({ error: 'Error al eliminar reply' }, { status: 500 });
  }
}
