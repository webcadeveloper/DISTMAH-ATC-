import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user || !['ADMIN', 'INSTRUCTOR'].includes(session.user.role)) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { courseId } = body;

    if (!courseId) {
      return NextResponse.json(
        { error: 'courseId requerido' },
        { status: 400 }
      );
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
      select: {
        id: true,
        title: true,
        slug: true,
      },
    });

    if (!course) {
      return NextResponse.json(
        { error: 'Curso no encontrado' },
        { status: 404 }
      );
    }

    const enrollments = await prisma.enrollment.findMany({
      where: {
        courseId: courseId,
        status: 'ACTIVE',
      },
      select: {
        userId: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (enrollments.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No hay estudiantes inscritos',
        notificationsCreated: 0,
      });
    }

    const notifications = enrollments.map((enrollment) => ({
      userId: enrollment.userId,
      type: 'SYSTEM_ANNOUNCEMENT' as const,
      title: 'Clase en vivo iniciada',
      message: `La clase en vivo de ${course.title} ha comenzado. ¡Únete ahora!`,
      link: `/cursos/${course.slug}/clase-en-vivo`,
      read: false,
    }));

    await prisma.notification.createMany({
      data: notifications,
    });

    return NextResponse.json({
      success: true,
      message: `Notificaciones enviadas a ${enrollments.length} estudiantes`,
      notificationsCreated: enrollments.length,
      courseTitle: course.title,
    });
  } catch (error) {
    console.error('Error creating notifications:', error);
    return NextResponse.json(
      { error: 'Error al enviar notificaciones' },
      { status: 500 }
    );
  }
}
