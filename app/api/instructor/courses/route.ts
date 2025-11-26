import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { getAllCourses } from '@/lib/course-loader';

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    if (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Acceso denegado. Se requiere rol de instructor.' }, { status: 403 });
    }

    const allCourses = await getAllCourses();

    const courses = allCourses.map(course => ({
      id: course.id,
      title: course.titulo,
      slug: course.slug,
      description: course.descripcion,
      thumbnail: course.imagen || null,
      category: course.categoria,
      level: course.nivel === 'Básico' ? 'BEGINNER' : course.nivel === 'Avanzado' ? 'ADVANCED' : 'INTERMEDIATE',
      status: 'PUBLISHED',
      price: course.precio,
      version: course.version,
      enrollmentCount: course.enrollmentCount || 0,
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
