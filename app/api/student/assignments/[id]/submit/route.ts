import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST - Entregar tarea
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { userId, comments, files } = body;

    if (!userId) {
      return NextResponse.json({
        error: 'userId is required'
      }, { status: 400 });
    }

    if (!files || !Array.isArray(files) || files.length === 0) {
      return NextResponse.json({
        error: 'At least one file is required'
      }, { status: 400 });
    }

    // Verificar que la tarea existe
    const assignment = await prisma.assignment.findUnique({
      where: { id }
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

    // Verificar si ya pasó la fecha de entrega
    const now = new Date();
    if (assignment.dueDate < now && !assignment.allowLateSubmission) {
      return NextResponse.json({
        error: 'Assignment submission deadline has passed'
      }, { status: 400 });
    }

    // Contar intentos previos
    const previousAttempts = await prisma.assignmentSubmission.count({
      where: {
        assignmentId: id,
        userId
      }
    });

    if (previousAttempts >= assignment.maxAttempts) {
      return NextResponse.json({
        error: `Maximum number of attempts (${assignment.maxAttempts}) reached`
      }, { status: 400 });
    }

    // Crear submission
    const submission = await prisma.assignmentSubmission.create({
      data: {
        assignmentId: id,
        userId,
        comments: comments || null,
        files,
        status: 'SUBMITTED',
        attemptNumber: previousAttempts + 1
      }
    });

    // TODO: Crear notificación para el instructor
    // await prisma.notification.create({
    //   data: {
    //     userId: assignment.course.instructorId,
    //     type: 'ASSIGNMENT_SUBMITTED',
    //     title: 'Nueva Entrega de Tarea',
    //     message: `${enrollment.user.name} ha entregado la tarea "${assignment.title}"`,
    //     link: `/instructor/assignments/${id}/submissions`,
    //     read: false
    //   }
    // });

    return NextResponse.json({
      success: true,
      submission,
      message: 'Assignment submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting assignment:', error);
    return NextResponse.json({
      error: 'Failed to submit assignment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
