import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    if (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Acceso denegado. Se requiere rol de instructor.' }, { status: 403 });
    }

    const instructorId = session.user.id;
    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get('courseId');

    const whereClause: any = {
      course: {
        instructorId
      },
      status: 'ACTIVE'
    };

    if (courseId) {
      whereClause.courseId = courseId;
    }

    const enrollments = await prisma.enrollment.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            lastLoginAt: true
          }
        },
        course: {
          select: {
            id: true,
            title: true,
            slug: true
          }
        }
      },
      orderBy: {
        enrolledAt: 'desc'
      }
    });

    const studentsWithProgress = await Promise.all(
      enrollments.map(async (enrollment) => {
        const totalLessons = await prisma.lesson.count({
          where: {
            module: {
              courseId: enrollment.courseId
            },
            published: true
          }
        });

        const completedLessons = await prisma.lessonProgress.count({
          where: {
            lesson: {
              module: {
                courseId: enrollment.courseId
              }
            },
            userId: enrollment.userId,
            completed: true
          }
        });

        const progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

        return {
          id: enrollment.id,
          userId: enrollment.user.id,
          name: enrollment.user.name,
          email: enrollment.user.email,
          avatar: enrollment.user.avatar,
          course: {
            id: enrollment.course.id,
            title: enrollment.course.title,
            slug: enrollment.course.slug
          },
          progress,
          enrolledAt: enrollment.enrolledAt,
          lastActivity: enrollment.user.lastLoginAt,
          status: enrollment.status
        };
      })
    );

    return NextResponse.json({ students: studentsWithProgress });
  } catch (error) {
    console.error('Error fetching students:', error);
    return NextResponse.json(
      { error: 'Error al cargar estudiantes' },
      { status: 500 }
    );
  }
}
