import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await auth();

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 403 }
      );
    }

    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    const enrollmentsByMonth = await prisma.$queryRaw<Array<{
      month: string;
      count: bigint;
      revenue: number;
    }>>`
      SELECT
        TO_CHAR(DATE_TRUNC('month', "enrolledAt"), 'YYYY-MM') as month,
        COUNT(*)::bigint as count,
        COALESCE(SUM(amount), 0)::decimal as revenue
      FROM enrollments
      WHERE "enrolledAt" >= ${twelveMonthsAgo}
      GROUP BY DATE_TRUNC('month', "enrolledAt")
      ORDER BY month DESC
      LIMIT 12
    `;

    const topCourses = await prisma.course.findMany({
      where: {
        status: 'PUBLISHED',
      },
      select: {
        id: true,
        title: true,
        enrollmentCount: true,
        _count: {
          select: {
            enrollments: true,
          },
        },
      },
      orderBy: {
        enrollmentCount: 'desc',
      },
      take: 10,
    });

    const recentEnrollments = await prisma.enrollment.findMany({
      take: 10,
      orderBy: {
        enrolledAt: 'desc',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        course: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    const userGrowth = await prisma.$queryRaw<Array<{
      month: string;
      students: bigint;
      instructors: bigint;
    }>>`
      SELECT
        TO_CHAR(DATE_TRUNC('month', "createdAt"), 'YYYY-MM') as month,
        COUNT(*) FILTER (WHERE role = 'STUDENT')::bigint as students,
        COUNT(*) FILTER (WHERE role = 'INSTRUCTOR')::bigint as instructors
      FROM users
      WHERE "createdAt" >= ${twelveMonthsAgo}
      GROUP BY DATE_TRUNC('month', "createdAt")
      ORDER BY month DESC
      LIMIT 12
    `;

    const previousMonthRevenue = await prisma.$queryRaw<Array<{
      revenue: number;
    }>>`
      SELECT
        COALESCE(SUM(amount), 0)::decimal as revenue
      FROM enrollments
      WHERE "enrolledAt" >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
        AND "enrolledAt" < DATE_TRUNC('month', CURRENT_DATE)
    `;

    const currentMonthRevenue = await prisma.$queryRaw<Array<{
      revenue: number;
    }>>`
      SELECT
        COALESCE(SUM(amount), 0)::decimal as revenue
      FROM enrollments
      WHERE "enrolledAt" >= DATE_TRUNC('month', CURRENT_DATE)
    `;

    const prevRevenue = previousMonthRevenue[0]?.revenue || 0;
    const currRevenue = currentMonthRevenue[0]?.revenue || 0;
    const growthRate = prevRevenue > 0
      ? ((Number(currRevenue) - Number(prevRevenue)) / Number(prevRevenue)) * 100
      : 0;

    const analytics = {
      enrollmentsByMonth: enrollmentsByMonth.map(item => ({
        month: item.month,
        count: Number(item.count),
        revenue: Number(item.revenue),
      })),
      topCourses: topCourses.map(course => ({
        id: course.id,
        title: course.title,
        enrollments: course._count.enrollments,
      })),
      recentEnrollments: recentEnrollments.map(enrollment => ({
        id: enrollment.id,
        studentName: enrollment.user.name,
        studentEmail: enrollment.user.email,
        courseName: enrollment.course.title,
        amount: Number(enrollment.amount),
        currency: enrollment.currency,
        enrolledAt: enrollment.enrolledAt.toISOString(),
      })),
      userGrowth: userGrowth.map(item => ({
        month: item.month,
        students: Number(item.students),
        instructors: Number(item.instructors),
      })),
      growthRate: Math.round(growthRate * 10) / 10,
    };

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Error fetching admin analytics:', error);
    return NextResponse.json(
      { error: 'Error al cargar analytics' },
      { status: 500 }
    );
  }
}
