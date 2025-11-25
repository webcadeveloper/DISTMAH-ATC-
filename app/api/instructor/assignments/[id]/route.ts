import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Obtener detalles de una tarea
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const assignment = await prisma.assignment.findUnique({
      where: { id },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            slug: true
          }
        },
        submissions: {
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
        }
      }
    });

    if (!assignment) {
      return NextResponse.json({
        error: 'Assignment not found'
      }, { status: 404 });
    }

    return NextResponse.json({ assignment });
  } catch (error) {
    console.error('Error fetching assignment:', error);
    return NextResponse.json({
      error: 'Failed to fetch assignment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// PUT - Actualizar tarea
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const {
      moduleId,
      title,
      description,
      instructions,
      maxScore,
      allowLateSubmission,
      maxAttempts,
      availableFrom,
      dueDate,
      attachments
    } = body;

    // Verificar que la tarea existe
    const existingAssignment = await prisma.assignment.findUnique({
      where: { id }
    });

    if (!existingAssignment) {
      return NextResponse.json({
        error: 'Assignment not found'
      }, { status: 404 });
    }

    // Actualizar assignment
    const assignment = await prisma.assignment.update({
      where: { id },
      data: {
        moduleId: moduleId !== undefined ? moduleId : undefined,
        title: title || undefined,
        description: description || undefined,
        instructions: instructions || undefined,
        maxScore: maxScore !== undefined ? maxScore : undefined,
        allowLateSubmission: allowLateSubmission !== undefined ? allowLateSubmission : undefined,
        maxAttempts: maxAttempts !== undefined ? maxAttempts : undefined,
        availableFrom: availableFrom ? new Date(availableFrom) : undefined,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        attachments: attachments !== undefined ? attachments : undefined
      }
    });

    return NextResponse.json({
      success: true,
      assignment
    });
  } catch (error) {
    console.error('Error updating assignment:', error);
    return NextResponse.json({
      error: 'Failed to update assignment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Eliminar tarea
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Verificar que la tarea existe
    const existingAssignment = await prisma.assignment.findUnique({
      where: { id }
    });

    if (!existingAssignment) {
      return NextResponse.json({
        error: 'Assignment not found'
      }, { status: 404 });
    }

    // Eliminar assignment (cascade elimina submissions)
    await prisma.assignment.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: 'Assignment deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting assignment:', error);
    return NextResponse.json({
      error: 'Failed to delete assignment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
