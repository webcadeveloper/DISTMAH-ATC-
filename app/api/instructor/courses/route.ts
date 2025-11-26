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

    const courses = await prisma.course.findMany({
      where: {
        instructorId
      },
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        thumbnail: true,
        category: true,
        level: true,
        status: true,
        price: true,
        version: true,
        enrollmentCount: true,
        rating: true,
        reviewsCount: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({ courses });
  } catch (error) {
    console.error('Error fetching instructor courses:', error);
    return NextResponse.json(
      { error: 'Error al cargar cursos' },
      { status: 500 }
    );
  }
}
