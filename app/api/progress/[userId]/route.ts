import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;

    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId,
        status: 'ACTIVE',
      },
      include: {
        course: {
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
                },
              },
            },
          },
        },
      },
      orderBy: {
        enrolledAt: 'desc',
      },
    });

    const coursesProgress = enrollments.map((enrollment) => {
      const course = enrollment.course;

      const allLessons = course.modules.flatMap((module) => module.lessons);
      const completedLessons = allLessons.filter(
        (lesson) => lesson.progress[0]?.completed
      );

      const totalTimeSpent = allLessons.reduce(
        (sum, lesson) => sum + (lesson.progress[0]?.timeSpent || 0),
        0
      );

      const lastLesson = allLessons
        .filter((lesson) => lesson.progress[0]?.completedAt)
        .sort((a, b) => {
          const dateA = a.progress[0]?.completedAt?.getTime() || 0;
          const dateB = b.progress[0]?.completedAt?.getTime() || 0;
          return dateB - dateA;
        })[0];

      const nextLesson = allLessons.find(
        (lesson) => !lesson.progress[0]?.completed
      );

      return {
        courseId: course.id,
        courseSlug: course.slug,
        courseTitle: course.title,
        courseThumbnail: course.thumbnail,
        category: course.category,
        level: course.level,
        totalLessons: allLessons.length,
        completedLessons: completedLessons.length,
        progressPercent: enrollment.progressPercent,
        totalTimeSpent,
        enrolledAt: enrollment.enrolledAt,
        startedAt: enrollment.startedAt,
        completedAt: enrollment.completedAt,
        lastLesson: lastLesson
          ? {
              id: lastLesson.id,
              title: lastLesson.title,
              completedAt: lastLesson.progress[0]?.completedAt,
            }
          : null,
        nextLesson: nextLesson
          ? {
              id: nextLesson.id,
              moduleId: nextLesson.moduleId,
              title: nextLesson.title,
            }
          : null,
      };
    });

    const totalCoursesEnrolled = coursesProgress.length;
    const totalCoursesCompleted = coursesProgress.filter(
      (c) => c.progressPercent === 100
    ).length;
    const totalHoursStudied = Math.round(
      coursesProgress.reduce((sum, c) => sum + c.totalTimeSpent, 0) / 3600
    );

    return NextResponse.json({
      summary: {
        totalCoursesEnrolled,
        totalCoursesCompleted,
        totalHoursStudied,
        coursesInProgress: totalCoursesEnrolled - totalCoursesCompleted,
      },
      courses: coursesProgress,
    });
  } catch (error) {
    console.error('Error al obtener progreso general:', error);
    return NextResponse.json(
      { error: 'Error al obtener progreso general' },
      { status: 500 }
    );
  }
}
