import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Obtener detalles de una tarea para estudiante
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({
        error: 'userId is required'
      }, { status: 400 });
    }

    const assignment = await prisma.assignment.findUnique({
      where: { id },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            slug: true
          }
        }
      }
    });

    if (!assignment) {
      return NextResponse.json({
        error: 'Assignment not found'
      }, { status: 404 });
    }

    // Verificar enrollment
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId: assignment.courseId
        }
      }
    });

    if (!enrollment) {
      return NextResponse.json({
        error: 'Not enrolled in this course'
      }, { status: 403 });
    }

    // Obtener submission del estudiante si existe
    const submission = await prisma.assignmentSubmission.findFirst({
      where: {
        assignmentId: id,
        userId
      },
      orderBy: {
        submittedAt: 'desc'
      }
    });

    return NextResponse.json({
      assignment,
      submission: submission || null
    });
  } catch (error) {
    console.error('Error fetching assignment:', error);
    return NextResponse.json({
      error: 'Failed to fetch assignment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
