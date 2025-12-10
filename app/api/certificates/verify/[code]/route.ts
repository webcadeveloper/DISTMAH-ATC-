import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code } = await params;

    // Intentar buscar por folio primero (nuevo sistema OpenBadges)
    let certificate = await prisma.certificate.findUnique({
      where: { folio: code },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        course: {
          select: {
            title: true,
            description: true,
            category: true,
            level: true,
            duration: true,
          },
        },
      },
    });

    // Si no se encuentra por folio, intentar por verificationCode (sistema antiguo - compatibilidad hacia atrás)
    if (!certificate) {
      certificate = await prisma.certificate.findFirst({
        where: { verificationUrl: { contains: code } },
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
          course: {
            select: {
              title: true,
              description: true,
              category: true,
              level: true,
              duration: true,
            },
          },
        },
      });
    }

    if (!certificate) {
      return NextResponse.json(
        {
          error: 'Certificate not found',
          valid: false,
        },
        { status: 404 }
      );
    }

    // Verificar estado del certificado
    if (certificate.status !== 'ACTIVE') {
      return NextResponse.json(
        {
          error: `Certificate status is ${certificate.status}`,
          valid: false,
          status: certificate.status,
        },
        { status: 200 }
      );
    }

    // Verificar expiración
    if (certificate.expiresAt && new Date() > certificate.expiresAt) {
      await prisma.certificate.update({
        where: { id: certificate.id },
        data: { status: 'EXPIRED' },
      });

      return NextResponse.json(
        {
          error: 'Certificate has expired',
          valid: false,
          status: 'EXPIRED',
          expiresAt: certificate.expiresAt,
        },
        { status: 200 }
      );
    }

    // Si hay badgeJson (nuevo sistema OpenBadges), retornar eso
    if (certificate.badgeJson) {
      return NextResponse.json(certificate.badgeJson, {
        headers: {
          'Content-Type': 'application/ld+json',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // Fallback: retornar formato antiguo (compatibilidad)
    return NextResponse.json({
      valid: true,
      certificate: {
        folio: certificate.folio,
        studentName: certificate.user.name,
        courseName: certificate.course.title,
        completionDate: certificate.issuedAt,
        category: certificate.course.category,
        level: certificate.course.level,
      },
    });
  } catch (error) {
    console.error('Error verifying certificate:', error);
    return NextResponse.json(
      {
        error: 'Failed to verify certificate',
        valid: false,
      },
      { status: 500 }
    );
  }
}
