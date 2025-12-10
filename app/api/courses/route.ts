import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/courses - List all courses
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const instructorId = searchParams.get('instructorId');
    const category = searchParams.get('category');

    const where: any = {};

    if (featured === 'true') {
      where.featured = true;
    }

    if (instructorId) {
      where.instructorId = instructorId;
    }

    if (category) {
      where.category = category;
    }

    const courses = await prisma.course.findMany({
      where,
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        _count: {
          select: {
            modules: true,
            enrollments: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Error fetching courses' },
      { status: 500 }
    );
  }
}

// POST /api/courses - Create new course
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      title,
      slug,
      description,
      category,
      level,
      price,
      software,
      duration,
      sessions,
      instructorId,
      ...rest
    } = body;

    // Validate required fields
    if (!title || !slug || !instructorId) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, instructorId' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existing = await prisma.course.findUnique({
      where: { slug },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'A course with this slug already exists' },
        { status: 400 }
      );
    }

    const course = await prisma.course.create({
      data: {
        title,
        slug,
        description: description || '',
        category: category || 'AUTOCAD',
        level: level || 'BASICO',
        price: price || 0,
        software: software || title,
        duration: duration || 40,
        sessions: sessions || 10,
        status: 'DRAFT',
        instructorId,
        ...rest,
      },
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

    return NextResponse.json(course, { status: 201 });
  } catch (error: any) {
    console.error('Error creating course:', error);
    return NextResponse.json(
      { error: error.message || 'Error creating course' },
      { status: 500 }
    );
  }
}
