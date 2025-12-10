import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT /api/courses/[courseId]/modules/[moduleId] - Update module
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string; moduleId: string }> }
) {
  try {
    const { moduleId } = await params;
    const body = await request.json();
    const { id, courseId, createdAt, updatedAt, lessons, ...updateData } = body;

    const module = await prisma.module.update({
      where: { id: moduleId },
      data: updateData,
      include: {
        lessons: {
          orderBy: { order: 'asc' },
        },
      },
    });

    return NextResponse.json(module);
  } catch (error: any) {
    console.error('Error updating module:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Module not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Error updating module' },
      { status: 500 }
    );
  }
}

// DELETE /api/courses/[courseId]/modules/[moduleId] - Delete module
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string; moduleId: string }> }
) {
  try {
    const { moduleId } = await params;
    // Delete related lessons first
    await prisma.lessonProgress.deleteMany({
      where: {
        lesson: {
          moduleId,
        },
      },
    });

    await prisma.lesson.deleteMany({
      where: { moduleId },
    });

    await prisma.module.delete({
      where: { id: moduleId },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting module:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Module not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Error deleting module' },
      { status: 500 }
    );
  }
}
