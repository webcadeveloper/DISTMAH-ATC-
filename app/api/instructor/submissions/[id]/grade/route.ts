import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { notifyAssignmentGraded } from '@/lib/notifications';
import { sendAssignmentGradedEmail } from '@/lib/email';

const prisma = new PrismaClient();

// PUT - Calificar entrega
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { score, feedback, instructorId } = body;

    if (score === undefined || score === null) {
      return NextResponse.json({
        error: 'Score is required'
      }, { status: 400 });
    }

    // Verificar que la submission existe
    const existingSubmission = await prisma.assignmentSubmission.findUnique({
      where: { id },
      include: {
        assignment: {
          select: {
            maxScore: true,
            courseId: true,
            title: true
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    if (!existingSubmission) {
      return NextResponse.json({
        error: 'Submission not found'
      }, { status: 404 });
    }

    // Validar score
    if (score < 0 || score > existingSubmission.assignment.maxScore) {
      return NextResponse.json({
        error: `Score must be between 0 and ${existingSubmission.assignment.maxScore}`
      }, { status: 400 });
    }

    // Actualizar submission
    const submission = await prisma.assignmentSubmission.update({
      where: { id },
      data: {
        score,
        feedback: feedback || null,
        status: 'GRADED',
        gradedAt: new Date(),
        gradedBy: instructorId || null
      }
    });

    await Promise.all([
      notifyAssignmentGraded(
        existingSubmission.user.id,
        existingSubmission.assignment.title,
        score,
        existingSubmission.assignment.maxScore
      ),
      sendAssignmentGradedEmail(
        existingSubmission.user.email,
        existingSubmission.user.name,
        existingSubmission.assignment.title,
        score,
        existingSubmission.assignment.maxScore,
        feedback
      )
    ]);

    return NextResponse.json({
      success: true,
      submission,
      message: 'Submission graded successfully'
    });
  } catch (error) {
    console.error('Error grading submission:', error);
    return NextResponse.json({
      error: 'Failed to grade submission',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
