import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(
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

    const { id: postId } = await params;
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json({ error: 'content es requerido' }, { status: 400 });
    }

    const post = await prisma.forumPost.findUnique({
      where: { id: postId }
    });

    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 });
    }

    const reply = await (prisma.forumReply.create as any)({
      data: {
        postId,
        authorId: user.id,
        content
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

    return NextResponse.json(reply, { status: 201 });
  } catch (error) {
    console.error('Error al crear reply:', error);
    return NextResponse.json({ error: 'Error al crear reply' }, { status: 500 });
  }
}
