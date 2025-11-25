import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, lessonId, timeSpent = 0 } = body;

    if (!userId || !lessonId) {
      return NextResponse.json(
        { error: 'userId y lessonId son requeridos' },
        { status: 400 }
      );
    }

    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        module: {
          include: {
            course: {
              include: {
                modules: {
                  include: {
                    lessons: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!lesson) {
      return NextResponse.json(
        { error: 'Lección no encontrada' },
        { status: 404 }
      );
    }

    const courseId = lesson.module.course.id;

    const result = await prisma.$transaction(async (tx) => {
      const progress = await tx.lessonProgress.upsert({
        where: {
          lessonId_userId: {
            lessonId,
            userId,
          },
        },
        update: {
          completed: true,
          completedAt: new Date(),
          timeSpent: timeSpent,
        },
        create: {
          lessonId,
          userId,
          completed: true,
          completedAt: new Date(),
          timeSpent: timeSpent,
        },
      });

      const totalLessons = lesson.module.course.modules.reduce(
        (sum, module) => sum + module.lessons.length,
        0
      );

      const completedLessons = await tx.lessonProgress.count({
        where: {
          userId,
          completed: true,
          lesson: {
            module: {
              courseId,
            },
          },
        },
      });

      const progressPercent = Math.round((completedLessons / totalLessons) * 100);

      await tx.enrollment.updateMany({
        where: {
          userId,
          courseId,
        },
        data: {
          progressPercent,
          startedAt: {
            set: new Date(),
          },
        },
      });

      return {
        progress,
        progressPercent,
        completedLessons,
        totalLessons,
      };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error al actualizar progreso:', error);
    return NextResponse.json(
      { error: 'Error al actualizar progreso' },
      { status: 500 }
    );
  }
}
