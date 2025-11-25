import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'No autenticado' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();
    const { rating, title, comment } = body;

    const review = await prisma.courseReview.findUnique({
      where: { id },
    });

    if (!review) {
      return NextResponse.json(
        { error: 'Review no encontrado' },
        { status: 404 }
      );
    }

    if (review.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'No tienes permiso para editar este review' },
        { status: 403 }
      );
    }

    if (rating && (rating < 1 || rating > 5)) {
      return NextResponse.json(
        { error: 'Rating debe estar entre 1 y 5' },
        { status: 400 }
      );
    }

    if (comment && comment.trim().length < 10) {
      return NextResponse.json(
        { error: 'El comentario debe tener al menos 10 caracteres' },
        { status: 400 }
      );
    }

    const updatedReview = await prisma.courseReview.update({
      where: { id },
      data: {
        rating: rating || review.rating,
        title: title !== undefined ? title : review.title,
        comment: comment ? comment.trim() : review.comment,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    const avgRating = await prisma.courseReview.aggregate({
      where: { courseId: review.courseId },
      _avg: { rating: true },
    });

    await prisma.course.update({
      where: { id: review.courseId },
      data: {
        rating: avgRating._avg.rating,
      },
    });

    return NextResponse.json(updatedReview);
  } catch (error) {
    console.error('Error updating review:', error);
    return NextResponse.json(
      { error: 'Error al actualizar review' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'No autenticado' },
        { status: 401 }
      );
    }

    const { id } = await params;

    const review = await prisma.courseReview.findUnique({
      where: { id },
    });

    if (!review) {
      return NextResponse.json(
        { error: 'Review no encontrado' },
        { status: 404 }
      );
    }

    if (review.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'No tienes permiso para eliminar este review' },
        { status: 403 }
      );
    }

    await prisma.courseReview.delete({
      where: { id },
    });

    const [avgRating, totalReviews] = await Promise.all([
      prisma.courseReview.aggregate({
        where: { courseId: review.courseId },
        _avg: { rating: true },
      }),
      prisma.courseReview.count({
        where: { courseId: review.courseId },
      }),
    ]);

    await prisma.course.update({
      where: { id: review.courseId },
      data: {
        rating: avgRating._avg.rating,
        reviewsCount: totalReviews,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json(
      { error: 'Error al eliminar review' },
      { status: 500 }
    );
  }
}
