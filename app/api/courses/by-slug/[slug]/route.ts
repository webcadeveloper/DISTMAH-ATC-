import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: 'No autenticado' },
        { status: 401 }
      );
    }

    const course = await prisma.course.findUnique({
      where: { slug },
      include: {
        modules: {
          orderBy: { order: 'asc' },
          include: {
            lessons: {
              orderBy: { order: 'asc' },
              select: {
                id: true,
                number: true,
                title: true,
                description: true,
                duration: true,
                type: true,
                order: true,
                published: true,
              },
            },
          },
        },
        instructor: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            bio: true,
          },
        },
      },
    });

    if (!course) {
      return NextResponse.json(
        { error: 'Curso no encontrado' },
        { status: 404 }
      );
    }

    if (session.user.role === 'STUDENT') {
      const enrollment = await prisma.enrollment.findUnique({
        where: {
          userId_courseId: {
            userId: session.user.id,
            courseId: course.id,
          },
        },
      });

      if (!enrollment || enrollment.status !== 'ACTIVE') {
        return NextResponse.json(
          { error: 'No estás inscrito en este curso' },
          { status: 403 }
        );
      }
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error('Error loading course by slug:', error);
    return NextResponse.json(
      { error: 'Error al cargar curso' },
      { status: 500 }
    );
  }
}
