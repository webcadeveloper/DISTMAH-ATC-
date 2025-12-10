import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/courses/[courseId] - Get single course
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        modules: {
          include: {
            lessons: {
              orderBy: { order: 'asc' },
            },
          },
          orderBy: { order: 'asc' },
        },
        _count: {
          select: {
            enrollments: true,
          },
        },
      },
    });

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json(
      { error: 'Error fetching course' },
      { status: 500 }
    );
  }
}

// PUT /api/courses/[courseId] - Update course
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const body = await request.json();
    const { id, createdAt, updatedAt, ...updateData } = body;

    const course = await prisma.course.update({
      where: { id: courseId },
      data: updateData,
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(course);
  } catch (error: any) {
    console.error('Error updating course:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Error updating course' },
      { status: 500 }
    );
  }
}

// DELETE /api/courses/[courseId] - Delete course
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    // Delete related data first
    await prisma.enrollment.deleteMany({
      where: { courseId },
    });

    await prisma.lessonProgress.deleteMany({
      where: {
        lesson: {
          module: {
            courseId,
          },
        },
      },
    });

    await prisma.lesson.deleteMany({
      where: {
        module: {
          courseId,
        },
      },
    });

    await prisma.module.deleteMany({
      where: { courseId },
    });

    // Finally delete the course
    await prisma.course.delete({
      where: { id: courseId },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting course:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Error deleting course' },
      { status: 500 }
    );
  }
}
