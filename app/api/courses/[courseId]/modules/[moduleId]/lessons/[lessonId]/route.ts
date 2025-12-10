import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/courses/[courseId]/modules/[moduleId]/lessons/[lessonId] - Get lesson
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string; moduleId: string; lessonId: string }> }
) {
  try {
    const { lessonId } = await params;
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        module: {
          include: {
            course: {
              select: {
                id: true,
                title: true,
                slug: true,
              },
            },
          },
        },
      },
    });

    if (!lesson) {
      return NextResponse.json(
        { error: 'Lesson not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(lesson);
  } catch (error) {
    console.error('Error fetching lesson:', error);
    return NextResponse.json(
      { error: 'Error fetching lesson' },
      { status: 500 }
    );
  }
}

// PUT /api/courses/[courseId]/modules/[moduleId]/lessons/[lessonId] - Update lesson
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string; moduleId: string; lessonId: string }> }
) {
  try {
    const { lessonId } = await params;
    const body = await request.json();
    const { id, moduleId, createdAt, updatedAt, module, ...updateData } = body;

    const lesson = await prisma.lesson.update({
      where: { id: lessonId },
      data: updateData,
    });

    return NextResponse.json(lesson);
  } catch (error: any) {
    console.error('Error updating lesson:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Lesson not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Error updating lesson' },
      { status: 500 }
    );
  }
}

// DELETE /api/courses/[courseId]/modules/[moduleId]/lessons/[lessonId] - Delete lesson
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string; moduleId: string; lessonId: string }> }
) {
  try {
    const { lessonId } = await params;
    // Delete related progress first
    await prisma.lessonProgress.deleteMany({
      where: { lessonId },
    });

    await prisma.lesson.delete({
      where: { id: lessonId },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting lesson:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Lesson not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Error deleting lesson' },
      { status: 500 }
    );
  }
}
