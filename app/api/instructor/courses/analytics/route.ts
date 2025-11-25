import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { subMonths, startOfMonth, endOfMonth, format } from 'date-fns';

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    if (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Acceso denegado. Se requiere rol de instructor.' }, { status: 403 });
    }

    const instructorId = session.user.id;

    const courses = await prisma.course.findMany({
      where: {
        instructorId,
        status: 'PUBLISHED'
      },
      select: {
        id: true,
        title: true,
        slug: true,
        rating: true,
        reviewsCount: true,
        enrollmentCount: true
      }
    });

    const courseAnalytics = await Promise.all(
      courses.map(async (course) => {
        const totalLessons = await prisma.lesson.count({
          where: {
            module: {
              courseId: course.id
            },
            published: true
          }
        });

        const enrollments = await prisma.enrollment.findMany({
          where: {
            courseId: course.id,
            status: {
              in: ['ACTIVE', 'COMPLETED']
            }
          },
          select: {
            userId: true,
            status: true
          }
        });

        const completedEnrollments = enrollments.filter(e => e.status === 'COMPLETED').length;
        const completionRate = enrollments.length > 0
          ? Math.round((completedEnrollments / enrollments.length) * 100)
          : 0;

        return {
          courseId: course.id,
          courseTitle: course.title,
          courseSlug: course.slug,
          students: enrollments.length,
          completionRate,
          rating: course.rating ? Number(course.rating) : 0,
          reviewsCount: course.reviewsCount
        };
      })
    );

    const last6Months = Array.from({ length: 6 }, (_, i) => {
      const date = subMonths(new Date(), 5 - i);
      return {
        month: format(date, 'MMM yyyy'),
        startDate: startOfMonth(date),
        endDate: endOfMonth(date)
      };
    });

    const enrollmentsByMonth = await Promise.all(
      last6Months.map(async ({ month, startDate, endDate }) => {
        const count = await prisma.enrollment.count({
          where: {
            course: {
              instructorId
            },
            enrolledAt: {
              gte: startDate,
              lte: endDate
            }
          }
        });

        return {
          month,
          enrollments: count
        };
      })
    );

    const thisMonth = new Date();
    const lastMonth = subMonths(thisMonth, 1);

    const [thisMonthEnrollments, lastMonthEnrollments] = await Promise.all([
      prisma.enrollment.count({
        where: {
          course: {
            instructorId
          },
          enrolledAt: {
            gte: startOfMonth(thisMonth),
            lte: endOfMonth(thisMonth)
          }
        }
      }),
      prisma.enrollment.count({
        where: {
          course: {
            instructorId
          },
          enrolledAt: {
            gte: startOfMonth(lastMonth),
            lte: endOfMonth(lastMonth)
          }
        }
      })
    ]);

    const monthOverMonthChange = lastMonthEnrollments > 0
      ? Math.round(((thisMonthEnrollments - lastMonthEnrollments) / lastMonthEnrollments) * 100)
      : 100;

    const totalActiveStudents = await (prisma.enrollment.count as any)({
      where: {
        course: {
          instructorId
        },
        status: 'ACTIVE'
      },
      distinct: ['userId']
    });

    return NextResponse.json({
      courseAnalytics,
      enrollmentsByMonth,
      newEnrollmentsThisMonth: thisMonthEnrollments,
      monthOverMonthChange,
      totalActiveStudents
    });
  } catch (error) {
    console.error('Error fetching course analytics:', error);
    return NextResponse.json(
      { error: 'Error al cargar analíticas' },
      { status: 500 }
    );
  }
}
