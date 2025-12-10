import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const querySchema = z.object({
  page: z.string().optional().default('1'),
  limit: z.string().optional().default('20'),
  role: z.enum(['STUDENT', 'INSTRUCTOR', 'ADMIN', 'ALL']).optional().default('ALL'),
  search: z.string().optional(),
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
      role: searchParams.get('role') || 'ALL',
      search: searchParams.get('search') || undefined,
    });

    const page = parseInt(validated.page);
    const limit = parseInt(validated.limit);
    const skip = (page - 1) * limit;

    const where: any = {};

    if (validated.role !== 'ALL') {
      where.role = validated.role;
    }

    if (validated.search) {
      where.OR = [
        { name: { contains: validated.search, mode: 'insensitive' } },
        { email: { contains: validated.search, mode: 'insensitive' } },
      ];
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          emailVerified: true,
          createdAt: true,
          lastLoginAt: true,
          _count: {
            select: {
              enrollments: true,
              taughtCourses: true,
            },
          },
        },
      }),
      prisma.user.count({ where }),
    ]);

    const usersWithStats = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      emailVerified: user.emailVerified,
      createdAt: user.createdAt.toISOString(),
      lastLoginAt: user.lastLoginAt?.toISOString() || null,
      enrollmentsCount: user._count.enrollments,
      coursesCount: user._count.taughtCourses,
      status: user.emailVerified ? 'active' : 'inactive',
    }));

    return NextResponse.json({
      users: usersWithStats,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Error al cargar usuarios' },
      { status: 500 }
    );
  }
}
