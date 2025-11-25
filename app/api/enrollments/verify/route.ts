import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const courseId = searchParams.get('courseId');

    if (!userId || !courseId) {
      return NextResponse.json(
        { error: 'userId and courseId are required' },
        { status: 400 }
      );
    }

    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: userId,
          courseId: courseId,
        },
      },
      select: {
        id: true,
        status: true,
        enrolledAt: true,
        expiresAt: true,
      },
    });

    if (!enrollment) {
      return NextResponse.json({
        hasAccess: false,
        reason: 'No enrollment found',
      });
    }

    if (enrollment.status !== 'ACTIVE') {
      return NextResponse.json({
        hasAccess: false,
        reason: `Enrollment status is ${enrollment.status}`,
        enrollment: {
          id: enrollment.id,
          status: enrollment.status,
        },
      });
    }

    if (enrollment.expiresAt && new Date() > enrollment.expiresAt) {
      return NextResponse.json({
        hasAccess: false,
        reason: 'Enrollment has expired',
        enrollment: {
          id: enrollment.id,
          status: enrollment.status,
          expiresAt: enrollment.expiresAt,
        },
      });
    }

    return NextResponse.json({
      hasAccess: true,
      enrollment: {
        id: enrollment.id,
        status: enrollment.status,
        enrolledAt: enrollment.enrolledAt,
        expiresAt: enrollment.expiresAt,
      },
    });
  } catch (error) {
    console.error('Error verifying enrollment:', error);
    return NextResponse.json(
      { error: 'Failed to verify enrollment' },
      { status: 500 }
    );
  }
}
