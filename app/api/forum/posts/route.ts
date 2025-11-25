import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    if (!categoryId) {
      return NextResponse.json({ error: 'categoryId requerido' }, { status: 400 });
    }

    const posts = await (prisma as any).forumPost.findMany({
      where: { categoryId },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        },
        _count: {
          select: { replies: true }
        }
      },
      orderBy: [
        { isPinned: 'desc' },
        { createdAt: 'desc' }
      ],
      take: limit,
      skip: offset
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error al obtener posts:', error);
    return NextResponse.json({ error: 'Error al obtener posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
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

    const { categoryId, title, content } = await request.json();

    if (!categoryId || !title || !content) {
      return NextResponse.json({ error: 'categoryId, title y content son requeridos' }, { status: 400 });
    }

    const post = await (prisma as any).forumPost.create({
      data: {
        categoryId,
        userId: user.id,
        title,
        content,
        pinned: false
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

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error al crear post:', error);
    return NextResponse.json({ error: 'Error al crear post' }, { status: 500 });
  }
}
