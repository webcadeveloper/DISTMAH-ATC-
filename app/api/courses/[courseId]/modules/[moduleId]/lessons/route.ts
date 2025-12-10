import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/courses/[courseId]/modules/[moduleId]/lessons - List lessons
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string; moduleId: string }> }
) {
  try {
    const { moduleId } = await params;
    const lessons = await prisma.lesson.findMany({
      where: { moduleId },
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(lessons);
  } catch (error) {
    console.error('Error fetching lessons:', error);
    return NextResponse.json(
      { error: 'Error fetching lessons' },
      { status: 500 }
    );
  }
}

// POST /api/courses/[courseId]/modules/[moduleId]/lessons - Create lesson
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string; moduleId: string }> }
) {
  try {
    const { moduleId } = await params;
    const body = await request.json();
    const {
      title,
      description,
      type,
      duration,
      richText,
      videoUrl,
      published,
    } = body;

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    // Get the current max order
    const maxOrderLesson = await prisma.lesson.findFirst({
      where: { moduleId },
      orderBy: { order: 'desc' },
      select: { order: true, number: true },
    });

    const nextOrder = (maxOrderLesson?.order ?? -1) + 1;
    const nextNumber = (maxOrderLesson?.number ?? 0) + 1;

    const lesson = await prisma.lesson.create({
      data: {
        title,
        description: description || '',
        type: type || 'VIDEO',
        duration: duration || 30,
        richText: richText || '',
        videoUrl: videoUrl || null,
        published: published ?? true,
        number: nextNumber,
        order: nextOrder,
        moduleId,
      },
    });

    return NextResponse.json(lesson, { status: 201 });
  } catch (error: any) {
    console.error('Error creating lesson:', error);
    return NextResponse.json(
      { error: error.message || 'Error creating lesson' },
      { status: 500 }
    );
  }
}
