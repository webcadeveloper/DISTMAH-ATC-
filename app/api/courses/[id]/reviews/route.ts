import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';
import { apiLimiter, getClientIp } from '@/lib/rate-limit';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);

    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    const sortBy = searchParams.get('sortBy') || 'recent';

    const orderBy = sortBy === 'helpful'
      ? { helpful: 'desc' as const }
      : sortBy === 'rating'
      ? { rating: 'desc' as const }
      : { createdAt: 'desc' as const };

    const [reviews, totalCount, avgRating, distribution] = await Promise.all([
      prisma.courseReview.findMany({
        where: { courseId: id },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
        orderBy,
        take: limit,
        skip: offset,
      }),
      prisma.courseReview.count({
        where: { courseId: id },
      }),
      prisma.courseReview.aggregate({
        where: { courseId: id },
        _avg: {
          rating: true,
        },
      }),
      prisma.courseReview.groupBy({
        by: ['rating'],
        where: { courseId: id },
        _count: {
          rating: true,
        },
      }),
    ]);

    const ratingDistribution = [1, 2, 3, 4, 5].reduce((acc, rating) => {
      const found = distribution.find(d => d.rating === rating);
      acc[rating] = found ? found._count.rating : 0;
      return acc;
    }, {} as Record<number, number>);

    const stats = {
      avgRating: avgRating._avg.rating || 0,
      totalReviews: totalCount,
      distribution: ratingDistribution,
    };

    return NextResponse.json({
      reviews,
      stats,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: offset + limit < totalCount,
      },
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Error al obtener reviews' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ip = getClientIp(request);
  const rateLimitResult = apiLimiter.check(request, 10, ip);

  if (rateLimitResult) return rateLimitResult;

  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'No autenticado' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();
    const { rating, title, comment } = body;

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating debe estar entre 1 y 5' },
        { status: 400 }
      );
    }

    if (!comment || comment.trim().length < 10) {
      return NextResponse.json(
        { error: 'El comentario debe tener al menos 10 caracteres' },
        { status: 400 }
      );
    }

    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId: id,
        },
      },
    });

    if (!enrollment || enrollment.status !== 'ACTIVE') {
      return NextResponse.json(
        { error: 'Debes estar inscrito en el curso para dejar un review' },
        { status: 403 }
      );
    }

    const existingReview = await prisma.courseReview.findUnique({
      where: {
        courseId_userId: {
          courseId: id,
          userId: session.user.id,
        },
      },
    });

    if (existingReview) {
      return NextResponse.json(
        { error: 'Ya has dejado un review para este curso' },
        { status: 400 }
      );
    }

    const review = await prisma.courseReview.create({
      data: {
        courseId: id,
        userId: session.user.id,
        rating,
        title: title || null,
        comment: comment.trim(),
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

    const [avgRating, totalReviews] = await Promise.all([
      prisma.courseReview.aggregate({
        where: { courseId: id },
        _avg: { rating: true },
      }),
      prisma.courseReview.count({
        where: { courseId: id },
      }),
    ]);

    await prisma.course.update({
      where: { id },
      data: {
        rating: avgRating._avg.rating,
        reviewsCount: totalReviews,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { error: 'Error al crear review' },
      { status: 500 }
    );
  }
}
