import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string; courseId: string }> }
) {
  try {
    const { userId, courseId } = await params;

    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (!enrollment) {
      return NextResponse.json(
        { error: 'Inscripción no encontrada' },
        { status: 404 }
      );
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        modules: {
          include: {
            lessons: {
              include: {
                progress: {
                  where: {
                    userId,
                  },
                },
              },
              orderBy: {
                order: 'asc',
              },
            },
          },
          orderBy: {
            order: 'asc',
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

    const lessonsWithProgress = course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        id: lesson.id,
        moduleId: module.id,
        moduleNumber: module.number,
        moduleTitle: module.title,
        lessonNumber: lesson.number,
        title: lesson.title,
        duration: lesson.duration,
        completed: lesson.progress[0]?.completed || false,
        completedAt: lesson.progress[0]?.completedAt || null,
        timeSpent: lesson.progress[0]?.timeSpent || 0,
      }))
    );

    const totalLessons = lessonsWithProgress.length;
    const completedLessons = lessonsWithProgress.filter((l) => l.completed).length;
    const totalTimeSpent = lessonsWithProgress.reduce((sum, l) => sum + (l.timeSpent || 0), 0);

    return NextResponse.json({
      progressPercent: enrollment.progressPercent,
      totalLessons,
      completedLessons,
      totalTimeSpent,
      lessons: lessonsWithProgress,
      enrollment: {
        enrolledAt: enrollment.enrolledAt,
        startedAt: enrollment.startedAt,
        completedAt: enrollment.completedAt,
        status: enrollment.status,
      },
    });
  } catch (error) {
    console.error('Error al obtener progreso del curso:', error);
    return NextResponse.json(
      { error: 'Error al obtener progreso del curso' },
      { status: 500 }
    );
  }
}
