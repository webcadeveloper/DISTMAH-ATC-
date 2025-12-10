import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/courses/[courseId]/modules - List modules
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const modules = await prisma.module.findMany({
      where: { courseId },
      include: {
        lessons: {
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(modules);
  } catch (error) {
    console.error('Error fetching modules:', error);
    return NextResponse.json(
      { error: 'Error fetching modules' },
      { status: 500 }
    );
  }
}

// POST /api/courses/[courseId]/modules - Create module
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const body = await request.json();
    const { title, description, duration } = body;

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    // Get the current max order
    const maxOrderModule = await prisma.module.findFirst({
      where: { courseId },
      orderBy: { order: 'desc' },
      select: { order: true, number: true },
    });

    const nextOrder = (maxOrderModule?.order ?? -1) + 1;
    const nextNumber = (maxOrderModule?.number ?? 0) + 1;

    const module = await prisma.module.create({
      data: {
        title,
        description: description || '',
        duration: duration || 2,
        number: nextNumber,
        order: nextOrder,
        courseId,
      },
      include: {
        lessons: true,
      },
    });

    return NextResponse.json(module, { status: 201 });
  } catch (error: any) {
    console.error('Error creating module:', error);
    return NextResponse.json(
      { error: error.message || 'Error creating module' },
      { status: 500 }
    );
  }
}
