import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const updateCourseSchema = z.object({
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
  featured: z.boolean().optional(),
  popular: z.boolean().optional(),
});

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth();

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 403 }
      );
    }

    const courseId = id;
    const body = await request.json();
    const validated = updateCourseSchema.parse(body);

    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return NextResponse.json(
        { error: 'Curso no encontrado' },
        { status: 404 }
      );
    }

    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data: validated,
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    console.log(`[ADMIN] Course ${courseId} updated by ${session.user.id}:`, validated);

    return NextResponse.json({
      course: {
        ...updatedCourse,
        price: Number(updatedCourse.price),
        rating: updatedCourse.rating ? Number(updatedCourse.rating) : null,
        createdAt: updatedCourse.createdAt.toISOString(),
        updatedAt: updatedCourse.updatedAt.toISOString(),
      },
    });
  } catch (error) {
    console.error('Error updating course:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.flatten() },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Error al actualizar curso' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth();

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 403 }
      );
    }

    const courseId = id;

    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        _count: {
          select: {
            enrollments: true,
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

    if (course._count.enrollments > 0) {
      return NextResponse.json(
        {
          error: 'No se puede eliminar un curso con inscripciones activas. Considera archivarlo en su lugar.',
          canDelete: false,
          enrollmentsCount: course._count.enrollments,
        },
        { status: 400 }
      );
    }

    await prisma.course.delete({
      where: { id: courseId },
    });

    console.log(`[ADMIN] Course ${courseId} (${course.title}) deleted by ${session.user.id}`);

    return NextResponse.json({
      success: true,
      message: 'Curso eliminado exitosamente',
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json(
      { error: 'Error al eliminar curso' },
      { status: 500 }
    );
  }
}
