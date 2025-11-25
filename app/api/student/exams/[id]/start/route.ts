import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(
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
          select: { id: true },
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
      return NextResponse.json({ error: 'Not enrolled' }, { status: 403 });
    }

    const attempts = await prisma.examAttempt.findMany({
      where: {
        examId: id,
        userId: session.user.id,
      },
    });

    if (attempts.length >= exam.maxAttempts) {
      return NextResponse.json(
        { error: 'Maximum attempts reached' },
        { status: 403 }
      );
    }

    const totalPoints = exam.questions.reduce((sum, q) => sum + q.points, 0);

    let questions = [...exam.questions];
    if (exam.shuffleQuestions) {
      questions = questions.sort(() => Math.random() - 0.5);
    }

    const attempt = await prisma.examAttempt.create({
      data: {
        examId: id,
        userId: session.user.id,
        attemptNumber: attempts.length + 1,
        answers: [],
        maxScore: totalPoints,
        startedAt: new Date(),
      },
    });

    return NextResponse.json({
      attemptId: attempt.id,
      questions: questions.map((q) => ({
        id: q.id,
        type: q.type,
        question: q.question,
        points: q.points,
        options: q.options,
      })),
      duration: exam.duration,
      maxScore: totalPoints,
    });
  } catch (error) {
    console.error('Error starting exam:', error);
    return NextResponse.json(
      { error: 'Failed to start exam' },
      { status: 500 }
    );
  }
}
