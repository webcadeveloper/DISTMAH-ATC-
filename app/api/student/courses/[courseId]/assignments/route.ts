import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Listar tareas del curso para el estudiante
export async function GET(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const moduleId = searchParams.get('moduleId');

    if (!userId) {
      return NextResponse.json({
        error: 'userId is required'
      }, { status: 400 });
    }

    // Verificar enrollment
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId
        }
      }
    });

    if (!enrollment) {
      return NextResponse.json({
        error: 'Not enrolled in this course'
      }, { status: 403 });
    }

    const whereClause: any = {
      courseId,
      availableFrom: {
        lte: new Date()
      }
    };

    if (moduleId) {
      whereClause.moduleId = moduleId;
    }

    const assignments = await prisma.assignment.findMany({
      where: whereClause,
      include: {
        submissions: {
          where: {
            userId
          },
          orderBy: {
            submittedAt: 'desc'
          },
          take: 1
        }
      },
      orderBy: {
        dueDate: 'asc'
      }
    });

    // Enriquecer con estado para el estudiante
    const now = new Date();
    const assignmentsWithStatus = assignments.map(assignment => {
      const submission = assignment.submissions[0];
      const isOverdue = assignment.dueDate < now;
      const isNearDue = assignment.dueDate.getTime() - now.getTime() < 24 * 60 * 60 * 1000; // 24 horas

      return {
        ...assignment,
        submission: submission || null,
        status: submission
          ? submission.status
          : isOverdue && !assignment.allowLateSubmission
          ? 'CLOSED'
          : 'PENDING',
        isOverdue,
        isNearDue: !isOverdue && isNearDue
      };
    });

    return NextResponse.json({
      assignments: assignmentsWithStatus
    });
  } catch (error) {
    console.error('Error fetching student assignments:', error);
    return NextResponse.json({
      error: 'Failed to fetch assignments',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
