import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST - Crear nueva tarea
export async function POST(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
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

    if (!title || !description || !instructions || !dueDate) {
      return NextResponse.json({
        error: 'Missing required fields'
      }, { status: 400 });
    }

    // Verificar que el curso existe
    const course = await prisma.course.findUnique({
      where: { id: courseId }
    });

    if (!course) {
      return NextResponse.json({
        error: 'Course not found'
      }, { status: 404 });
    }

    // Crear assignment
    const assignment = await prisma.assignment.create({
      data: {
        courseId,
        moduleId: moduleId || null,
        title,
        description,
        instructions,
        maxScore: maxScore || 100,
        allowLateSubmission: allowLateSubmission ?? true,
        maxAttempts: maxAttempts || 1,
        availableFrom: availableFrom ? new Date(availableFrom) : new Date(),
        dueDate: new Date(dueDate),
        attachments: attachments || null
      }
    });

    return NextResponse.json({
      success: true,
      assignment
    });
  } catch (error) {
    console.error('Error creating assignment:', error);
    return NextResponse.json({
      error: 'Failed to create assignment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// GET - Listar tareas del curso
export async function GET(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const { searchParams } = new URL(request.url);
    const moduleId = searchParams.get('moduleId');

    const whereClause: any = { courseId };
    if (moduleId) {
      whereClause.moduleId = moduleId;
    }

    const assignments = await prisma.assignment.findMany({
      where: whereClause,
      include: {
        submissions: {
          select: {
            id: true,
            status: true,
            userId: true,
            submittedAt: true
          }
        }
      },
      orderBy: {
        dueDate: 'asc'
      }
    });

    // Calcular estadísticas para cada assignment
    const assignmentsWithStats = assignments.map(assignment => {
      const totalSubmissions = assignment.submissions.length;
      const submittedCount = assignment.submissions.filter(s => s.status !== 'DRAFT').length;
      const gradedCount = assignment.submissions.filter(s => s.status === 'GRADED').length;
      const pendingReview = assignment.submissions.filter(s => s.status === 'SUBMITTED').length;

      return {
        ...assignment,
        stats: {
          totalSubmissions,
          submittedCount,
          gradedCount,
          pendingReview
        }
      };
    });

    return NextResponse.json({
      assignments: assignmentsWithStats
    });
  } catch (error) {
    console.error('Error fetching assignments:', error);
    return NextResponse.json({
      error: 'Failed to fetch assignments',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
