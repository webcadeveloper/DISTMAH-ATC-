import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const exam = await prisma.exam.findUnique({
      where: { id },
      include: {
        course: {
          select: {
            id: true,
            title: true,
          },
        },
        questions: {
          select: {
            id: true,
            type: true,
            question: true,
            points: true,
            order: true,
            options: true,
          },
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    }

    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId: exam.course.id,
        },
      },
    });

    if (!enrollment) {
      return NextResponse.json({ error: 'Not enrolled in course' }, { status: 403 });
    }

    const now = new Date();
    if (now < exam.availableFrom) {
      return NextResponse.json(
        { error: 'Exam not available yet' },
        { status: 403 }
      );
    }

    if (exam.availableUntil && now > exam.availableUntil) {
      return NextResponse.json(
        { error: 'Exam no longer available' },
        { status: 403 }
      );
    }

    const attempts = await prisma.examAttempt.findMany({
      where: {
        examId: id,
        userId: session.user.id,
      },
      orderBy: { attemptNumber: 'desc' },
    });

    if (attempts.length >= exam.maxAttempts) {
      return NextResponse.json(
        { error: 'Maximum attempts reached' },
        { status: 403 }
      );
    }

    return NextResponse.json({
      exam,
      attemptsUsed: attempts.length,
      attemptsRemaining: exam.maxAttempts - attempts.length,
      lastAttempt: attempts[0] || null,
    });
  } catch (error) {
    console.error('Error fetching exam:', error);
    return NextResponse.json(
      { error: 'Failed to fetch exam' },
      { status: 500 }
    );
  }
}
