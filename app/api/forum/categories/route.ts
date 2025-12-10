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
    const courseId = searchParams.get('courseId');

    if (!courseId) {
      return NextResponse.json({ error: 'courseId requerido' }, { status: 400 });
    }

    const categories = await prisma.forumCategory.findMany({
      where: { courseId },
      include: {
        _count: {
          select: { posts: true }
        }
      },
      orderBy: { createdAt: 'asc' }
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return NextResponse.json({ error: 'Error al obtener categorías' }, { status: 500 });
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

    if (user?.role !== 'INSTRUCTOR' && user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Solo instructores pueden crear categorías' }, { status: 403 });
    }

    const { courseId, name, description } = await request.json();

    if (!courseId || !name) {
      return NextResponse.json({ error: 'courseId y name son requeridos' }, { status: 400 });
    }

    const category = await (prisma as any).forumCategory.create({
      data: {
        courseId,
        name,
        description: description || '',
        order: 0
      }
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error('Error al crear categoría:', error);
    return NextResponse.json({ error: 'Error al crear categoría' }, { status: 500 });
  }
}
