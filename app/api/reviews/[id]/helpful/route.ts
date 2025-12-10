import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'No autenticado' },
        { status: 401 }
      );
    }

    const { id } = await params;

    const review = await (prisma as any).courseReview.findUnique({
      where: { id },
    });

    if (!review) {
      return NextResponse.json(
        { error: 'Review no encontrado' },
        { status: 404 }
      );
    }

    const updatedReview = await (prisma as any).courseReview.update({
      where: { id },
      data: {
        helpful: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      helpful: updatedReview.helpful
    });
  } catch (error) {
    console.error('Error marking review as helpful:', error);
    return NextResponse.json(
      { error: 'Error al marcar review como útil' },
      { status: 500 }
    );
  }
}
