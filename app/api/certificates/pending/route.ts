import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { getPendingCertificatesForInstructor, getCertificateStats } from '@/lib/certificates';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    if (session.user.role !== 'INSTRUCTOR' && session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Solo instructores pueden ver certificados pendientes' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'PENDING_APPROVAL';

    let certificates;
    let stats;

    if (session.user.role === 'ADMIN') {
      // Admin ve todos los certificados
      certificates = await prisma.certificate.findMany({
        where: { status: status as any },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              avatar: true,
            },
          },
          course: {
            select: {
              id: true,
              title: true,
              slug: true,
              category: true,
              instructor: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
          approvedBy: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
      stats = await getCertificateStats();
    } else {
      // Instructor ve solo sus cursos
      certificates = await prisma.certificate.findMany({
        where: {
          status: status as any,
          course: {
            instructorId: session.user.id,
          },
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              avatar: true,
            },
          },
          course: {
            select: {
              id: true,
              title: true,
              slug: true,
              category: true,
            },
          },
          approvedBy: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
      stats = await getCertificateStats(session.user.id);
    }

    return NextResponse.json({
      certificates,
      stats,
    });
  } catch (error) {
    console.error('Error fetching pending certificates:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
