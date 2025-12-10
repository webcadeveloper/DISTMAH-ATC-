import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

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

    const [
      totalCourses,
      totalStudents,
      averageRating,
      totalRevenue
    ] = await Promise.all([
      prisma.course.count({
        where: {
          instructorId,
          status: 'PUBLISHED'
        }
      }),

      (prisma.enrollment.count as any)({
        where: {
          course: {
            instructorId
          },
          status: 'ACTIVE'
        },
        distinct: ['userId']
      }),

      prisma.course.aggregate({
        where: {
          instructorId,
          rating: { not: null }
        },
        _avg: {
          rating: true
        }
      }),

      prisma.enrollment.aggregate({
        where: {
          course: {
            instructorId
          },
          status: {
            in: ['ACTIVE', 'COMPLETED']
          }
        },
        _sum: {
          amount: true
        }
      })
    ]);

    return NextResponse.json({
      totalCourses,
      totalStudents,
      averageRating: averageRating._avg.rating ? Number(averageRating._avg.rating) : 0,
      totalRevenue: totalRevenue._sum.amount ? Number(totalRevenue._sum.amount) : 0
    });
  } catch (error) {
    console.error('Error fetching instructor dashboard:', error);
    return NextResponse.json(
      { error: 'Error al cargar datos del dashboard' },
      { status: 500 }
    );
  }
}
