import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const course = await prisma.course.findUnique({
      where: { slug },
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
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
                published: true,
              },
            },
          },
        },
      },
    });

    if (!course) {
      return NextResponse.json({ error: 'Curso no encontrado' }, { status: 404 });
    }

    const modulesWithSlugs = course.modules.map((module) => ({
      ...module,
      lessons: module.lessons.map((lesson) => ({
        ...lesson,
        slug: `leccion-${lesson.number}`,
      })),
    }));

    return NextResponse.json({
      ...course,
      modules: modulesWithSlugs,
    });
  } catch (error) {
    console.error('Error fetching course by slug:', error);
    return NextResponse.json({ error: 'Error al obtener curso' }, { status: 500 });
  }
}
