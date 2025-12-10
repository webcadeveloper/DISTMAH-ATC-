import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Ver todas las entregas de una tarea
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    // Verificar que la tarea existe
    const assignment = await prisma.assignment.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        maxScore: true
      }
    });

    if (!assignment) {
      return NextResponse.json({
        error: 'Assignment not found'
      }, { status: 404 });
    }

    const whereClause: any = { assignmentId: id };
    if (status) {
      whereClause.status = status;
    }

    const submissions = await prisma.assignmentSubmission.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true
          }
        }
      },
      orderBy: {
        submittedAt: 'desc'
      }
    });

    return NextResponse.json({
      assignment,
      submissions
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json({
      error: 'Failed to fetch submissions',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
