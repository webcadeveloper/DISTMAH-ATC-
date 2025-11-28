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

    const dbCourses = await prisma.course.findMany({
      where: session.user.role === 'ADMIN' ? {} : { instructorId },
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        image: true,
        thumbnail: true,
        category: true,
        level: true,
        status: true,
        price: true,
        rating: true,
        reviewsCount: true,
        _count: {
          select: {
            enrollments: true
          }
        }
      },
      orderBy: { title: 'asc' }
    });

    const courses = dbCourses.map(course => ({
      id: course.id,
      title: course.title,
      slug: course.slug,
      description: course.description,
      thumbnail: course.thumbnail || course.image || null,
      category: course.category,
      level: course.level,
      status: course.status,
      price: course.price,
      enrollmentCount: course._count.enrollments,
      rating: course.rating || 4.9,
      reviewsCount: course.reviewsCount || 0,
    }));

    return NextResponse.json({ courses });
  } catch (error) {
    console.error('Error fetching instructor courses:', error);
    return NextResponse.json(
      { error: 'Error al cargar cursos' },
      { status: 500 }
    );
  }
}
