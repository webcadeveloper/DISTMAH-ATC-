import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { notifyCertificateIssued } from '@/lib/notifications';
import { sendCertificateEmail } from '@/lib/email';

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
          include: {
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

    const certificateCount = await prisma.certificate.count();
    const certificateNumber = `DIST-ATC-2026-${String(certificateCount + 1).padStart(4, '0')}`;
    const verificationCode = crypto.randomUUID();

    const certificate = await prisma.certificate.create({
      data: {
        userId: session.user.id,
        courseId,
        certificateNumber,
        studentName: enrollment.user.name,
        courseName: enrollment.course.title,
        instructorName: enrollment.course.instructor.name,
        completionDate: new Date(),
        verificationCode,
      },
    });

    await Promise.all([
      notifyCertificateIssued(
        session.user.id,
        enrollment.course.title,
        certificateNumber
      ),
      sendCertificateEmail(
        enrollment.user.email,
        enrollment.user.name,
        enrollment.course.title,
        certificateNumber,
        certificate.pdfUrl || undefined
      ),
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
