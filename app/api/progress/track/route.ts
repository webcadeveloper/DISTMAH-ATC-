import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, lessonId, timeSpent = 30 } = body;

    if (!userId || !lessonId) {
      return NextResponse.json(
        { error: 'userId y lessonId son requeridos' },
        { status: 400 }
      );
    }

    const progress = await (prisma.lessonProgress.upsert as any)({
      where: {
        lessonId_userId: {
          lessonId,
          userId,
        },
      },
      update: {
        timeSpent: {
          increment: timeSpent,
        },
        lastAccessedAt: new Date(),
      },
      create: {
        lessonId,
        userId,
        completed: false,
        timeSpent: timeSpent,
        lastAccessedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      totalTimeSpent: progress.timeSpent,
    });
  } catch (error) {
    console.error('Error tracking progress:', error);
    return NextResponse.json(
      { error: 'Error al rastrear progreso' },
      { status: 500 }
    );
  }
}
