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

    const [
      totalUsers,
      totalCourses,
      totalEnrollments,
      totalRevenue,
      usersByRole,
      coursesByStatus,
      newUsersThisWeek,
      activeEnrollments,
    ] = await Promise.all([
      prisma.user.count(),

      prisma.course.count(),

      prisma.enrollment.count(),

      prisma.enrollment.aggregate({
        _sum: {
          amount: true,
        },
      }),

      prisma.user.groupBy({
        by: ['role'],
        _count: {
          role: true,
        },
      }),

      prisma.course.groupBy({
        by: ['status'],
        _count: {
          status: true,
        },
      }),

      prisma.user.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      }),

      prisma.enrollment.count({
        where: {
          status: 'ACTIVE',
        },
      }),
    ]);

    const roleStats = {
      STUDENT: 0,
      INSTRUCTOR: 0,
      ADMIN: 0,
    };

    usersByRole.forEach((item) => {
      roleStats[item.role] = item._count.role;
    });

    const statusStats = {
      DRAFT: 0,
      PUBLISHED: 0,
      ARCHIVED: 0,
    };

    coursesByStatus.forEach((item) => {
      statusStats[item.status] = item._count.status;
    });

    const stats = {
      totalUsers,
      totalCourses,
      totalEnrollments,
      totalRevenue: totalRevenue._sum.amount || 0,
      newUsersThisWeek,
      activeEnrollments,
      usersByRole: roleStats,
      coursesByStatus: statusStats,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { error: 'Error al cargar estadísticas' },
      { status: 500 }
    );
  }
}
