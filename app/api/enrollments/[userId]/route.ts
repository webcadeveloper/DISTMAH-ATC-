import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: userId,
        status: 'ACTIVE',
      },
      include: {
        course: {
          include: {
            instructor: {
              select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
              },
            },
            modules: {
              include: {
                lessons: {
                  select: {
                    id: true,
                    number: true,
                    title: true,
                    duration: true,
                    type: true,
                    published: true,
                  },
                },
              },
              orderBy: {
                order: 'asc',
              },
            },
          },
        },
      },
      orderBy: {
        enrolledAt: 'desc',
      },
    });

    const enrollmentsWithProgress = enrollments.map((enrollment) => ({
      id: enrollment.id,
      enrolledAt: enrollment.enrolledAt,
      progressPercent: enrollment.progressPercent,
      status: enrollment.status,
      course: {
        id: enrollment.course.id,
        slug: enrollment.course.slug,
        title: enrollment.course.title,
        subtitle: enrollment.course.subtitle,
        description: enrollment.course.description,
        category: enrollment.course.category,
        level: enrollment.course.level,
        duration: enrollment.course.duration,
        sessions: enrollment.course.sessions,
        image: enrollment.course.image,
        thumbnail: enrollment.course.thumbnail,
        videoIntro: enrollment.course.videoIntro,
        rating: enrollment.course.rating,
        reviewsCount: enrollment.course.reviewsCount,
        instructor: enrollment.course.instructor,
        modules: enrollment.course.modules,
      },
    }));

    return NextResponse.json({
      success: true,
      enrollments: enrollmentsWithProgress,
    });
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch enrollments' },
      { status: 500 }
    );
  }
}
