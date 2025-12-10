import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { notifyCertificateIssued } from '@/lib/notifications';
import { sendCertificateEmail } from '@/lib/email';
import { notifyCertificateGenerated } from '@/lib/n8n-webhooks';

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { courseId } = body;

    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId,
        },
      },
      include: {
        course: {
          select: {
            title: true,
            description: true,
            level: true,
            duration: true,
            instructor: {
              select: {
                name: true,
              },
            },
          },
        },
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (!enrollment) {
      return NextResponse.json({ error: 'Not enrolled in course' }, { status: 404 });
    }

    if (enrollment.progressPercent < 100) {
      return NextResponse.json(
        { error: 'Course not completed', progress: enrollment.progressPercent },
        { status: 400 }
      );
    }

    const finalExam = await prisma.exam.findFirst({
      where: { courseId },
      orderBy: { createdAt: 'desc' },
    });

    if (finalExam) {
      const passedAttempt = await prisma.examAttempt.findFirst({
        where: {
          examId: finalExam.id,
          userId: session.user.id,
          passed: true,
        },
      });

      if (!passedAttempt) {
        return NextResponse.json(
          { error: 'Final exam not passed' },
          { status: 400 }
        );
      }
    }

    const existingCertificate = await prisma.certificate.findFirst({
      where: {
        userId: session.user.id,
        courseId,
      },
    });

    if (existingCertificate) {
      return NextResponse.json(existingCertificate);
    }

    // Generar folio único OpenBadges
    const { generateFolio, generateOpenBadge, generateVerificationUrl } = await import('@/lib/certificates');

    let folio: string;
    let folioExists = true;

    while (folioExists) {
      folio = generateFolio();
      const existing = await prisma.certificate.findUnique({
        where: { folio },
      });
      folioExists = !!existing;
    }

    const verificationUrl = generateVerificationUrl(folio!);

    const openBadge = generateOpenBadge({
      folio: folio!,
      userEmail: enrollment.user.email,
      courseName: enrollment.course.title,
      courseDescription: enrollment.course.description,
      courseLevel: enrollment.course.level,
      courseDuration: enrollment.course.duration,
      issuedDate: new Date(),
    });

    const certificate = await prisma.certificate.create({
      data: {
        userId: session.user.id,
        courseId,
        folio: folio!,
        verificationUrl,
        badgeJson: openBadge as any,
        status: 'ACTIVE',
      },
    });

    await Promise.all([
      notifyCertificateIssued(
        session.user.id,
        enrollment.course.title,
        folio!
      ),
      sendCertificateEmail(
        enrollment.user.email,
        enrollment.user.name,
        enrollment.course.title,
        folio!,
        certificate.pdfUrl || undefined
      ),
      notifyCertificateGenerated({
        student: {
          id: session.user.id,
          name: enrollment.user.name,
          email: enrollment.user.email,
        },
        course: {
          id: courseId,
          title: enrollment.course.title,
          duration: `${enrollment.course.duration || 40} horas`,
          level: enrollment.course.level || 'Básico',
        },
        certificate: {
          id: certificate.id,
          verificationCode: folio!,
          issuedAt: certificate.issuedAt.toISOString(),
        },
      }),
    ]);

    return NextResponse.json(certificate, { status: 201 });
  } catch (error) {
    console.error('Error generating certificate:', error);
    return NextResponse.json(
      { error: 'Failed to generate certificate' },
      { status: 500 }
    );
  }
}
