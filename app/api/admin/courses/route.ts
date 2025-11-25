import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const querySchema = z.object({
  page: z.string().optional().default('1'),
  limit: z.string().optional().default('20'),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED', 'ALL']).optional().default('ALL'),
  category: z.string().optional(),
  search: z.string().optional(),
  instructorId: z.string().optional(),
});

export async function GET(request: Request) {
  try {
    const session = await auth();

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const validated = querySchema.parse({
      page: searchParams.get('page') || '1',
      limit: searchParams.get('limit') || '20',
      status: searchParams.get('status') || 'ALL',
      category: searchParams.get('category') || undefined,
      search: searchParams.get('search') || undefined,
      instructorId: searchParams.get('instructorId') || undefined,
    });

    const page = parseInt(validated.page);
    const limit = parseInt(validated.limit);
    const skip = (page - 1) * limit;

    const where: any = {};

    if (validated.status !== 'ALL') {
      where.status = validated.status;
    }

    if (validated.category) {
      where.category = validated.category;
    }

    if (validated.instructorId) {
      where.instructorId = validated.instructorId;
    }

    if (validated.search) {
      where.OR = [
        { title: { contains: validated.search, mode: 'insensitive' } },
        { subtitle: { contains: validated.search, mode: 'insensitive' } },
      ];
    }

    const [courses, total] = await Promise.all([
      prisma.course.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
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
              enrollments: true,
              modules: true,
            },
          },
        },
      }),
      prisma.course.count({ where }),
    ]);

    const coursesFormatted = courses.map(course => ({
      id: course.id,
      slug: course.slug,
      title: course.title,
      subtitle: course.subtitle,
      software: course.software,
      version: course.version,
      category: course.category,
      level: course.level,
      duration: course.duration,
      sessions: course.sessions,
      price: Number(course.price),
      status: course.status,
      featured: course.featured,
      popular: course.popular,
      enrollmentCount: course.enrollmentCount,
      rating: course.rating ? Number(course.rating) : null,
      instructor: course.instructor,
      modulesCount: course._count.modules,
      enrollmentsCount: course._count.enrollments,
      createdAt: course.createdAt.toISOString(),
      updatedAt: course.updatedAt.toISOString(),
    }));

    return NextResponse.json({
      courses: coursesFormatted,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Error al cargar cursos' },
      { status: 500 }
    );
  }
}
