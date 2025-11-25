import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// PUT - Actualizar entrega (solo si no está calificada)
export async function PUT(
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

    // Verificar que la submission existe y pertenece al usuario
    const existingSubmission = await prisma.assignmentSubmission.findUnique({
      where: { id },
      include: {
        assignment: true
      }
    });

    if (!existingSubmission) {
      return NextResponse.json({
        error: 'Submission not found'
      }, { status: 404 });
    }

    if (existingSubmission.userId !== userId) {
      return NextResponse.json({
        error: 'Unauthorized'
      }, { status: 403 });
    }

    // No permitir editar si ya está calificada
    if (existingSubmission.status === 'GRADED') {
      return NextResponse.json({
        error: 'Cannot edit graded submission'
      }, { status: 400 });
    }

    // Verificar si ya pasó la fecha de entrega
    const now = new Date();
    if (existingSubmission.assignment.dueDate < now && !existingSubmission.assignment.allowLateSubmission) {
      return NextResponse.json({
        error: 'Assignment submission deadline has passed'
      }, { status: 400 });
    }

    // Actualizar submission
    const submission = await prisma.assignmentSubmission.update({
      where: { id },
      data: {
        comments: comments !== undefined ? comments : undefined,
        files: files !== undefined ? files : undefined,
        updatedAt: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      submission,
      message: 'Submission updated successfully'
    });
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json({
      error: 'Failed to update submission',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Eliminar entrega (solo si no está calificada)
export async function DELETE(
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

    // Verificar que la submission existe y pertenece al usuario
    const existingSubmission = await prisma.assignmentSubmission.findUnique({
      where: { id }
    });

    if (!existingSubmission) {
      return NextResponse.json({
        error: 'Submission not found'
      }, { status: 404 });
    }

    if (existingSubmission.userId !== userId) {
      return NextResponse.json({
        error: 'Unauthorized'
      }, { status: 403 });
    }

    // No permitir eliminar si ya está calificada
    if (existingSubmission.status === 'GRADED') {
      return NextResponse.json({
        error: 'Cannot delete graded submission'
      }, { status: 400 });
    }

    // Eliminar submission
    await prisma.assignmentSubmission.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: 'Submission deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json({
      error: 'Failed to delete submission',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
