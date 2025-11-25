import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { id } = await params;

    const post = await (prisma.forumPost.findUnique as any)({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        },
        category: true,
        replies: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true
              }
            }
          },
          orderBy: { createdAt: 'asc' }
        }
      }
    });

    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error al obtener post:', error);
    return NextResponse.json({ error: 'Error al obtener post' }, { status: 500 });
  }
}

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
    const { title, content, isPinned } = await request.json();

    const post = await prisma.forumPost.findUnique({
      where: { id }
    });

    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    if ((post as any).userId !== user.id && user.role !== 'INSTRUCTOR' && user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Solo el autor puede editar este post' }, { status: 403 });
    }

    const updatedPost = await (prisma.forumPost.update as any)({
      where: { id },
      data: {
        ...(title && { title }),
        ...(content && { content }),
        ...(typeof isPinned === 'boolean' && { isPinned })
      },
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

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Error al actualizar post:', error);
    return NextResponse.json({ error: 'Error al actualizar post' }, { status: 500 });
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

    const post = await prisma.forumPost.findUnique({
      where: { id }
    });

    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    if ((post as any).userId !== user.id && user.role !== 'INSTRUCTOR' && user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'No autorizado para eliminar este post' }, { status: 403 });
    }

    await prisma.forumPost.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Post eliminado' }, { status: 200 });
  } catch (error) {
    console.error('Error al eliminar post:', error);
    return NextResponse.json({ error: 'Error al eliminar post' }, { status: 500 });
  }
}
