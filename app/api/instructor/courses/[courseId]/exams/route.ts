import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const examSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  instructions: z.string().optional(),
  duration: z.number().min(1),
  passingScore: z.number().min(0).max(100),
  maxAttempts: z.number().min(1).default(3),
  shuffleQuestions: z.boolean().default(true),
  showResults: z.boolean().default(true),
  availableFrom: z.string().transform(str => new Date(str)),
  availableUntil: z.string().transform(str => new Date(str)).optional(),
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user || session.user.role !== 'INSTRUCTOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { courseId } = await params;

    const course = await prisma.course.findUnique({
      where: { id: courseId, instructorId: session.user.id },
    });

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    const exams = await prisma.exam.findMany({
      where: { courseId },
      include: {
        questions: {
          orderBy: { order: 'asc' },
        },
        _count: {
          select: {
            attempts: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(exams);
  } catch (error) {
    console.error('Error fetching exams:', error);
    return NextResponse.json(
      { error: 'Failed to fetch exams' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user || session.user.role !== 'INSTRUCTOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { courseId } = await params;

    const course = await prisma.course.findUnique({
      where: { id: courseId, instructorId: session.user.id },
    });

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    const body = await request.json();
    const validated = examSchema.parse(body);

    const exam = await prisma.exam.create({
      data: {
        courseId,
        ...validated,
      },
      include: {
        questions: true,
      },
    });

    return NextResponse.json(exam, { status: 201 });
  } catch (error) {
    console.error('Error creating exam:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.flatten() },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create exam' },
      { status: 500 }
    );
  }
}
