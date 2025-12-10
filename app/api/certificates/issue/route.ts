import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { generateFolio, generateOpenBadge, generateVerificationUrl } from '@/lib/certificates';

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { courseId } = body;

    if (!courseId) {
      return NextResponse.json({ error: 'courseId is required' }, { status: 400 });
    }

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
            id: true,
            title: true,
            description: true,
            level: true,
            duration: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!enrollment) {
      return NextResponse.json({ error: 'No enrollment found' }, { status: 404 });
    }

    if (enrollment.progressPercent < 100) {
      return NextResponse.json(
        {
          error: 'Course not completed',
          progress: enrollment.progressPercent,
          required: 100,
        },
        { status: 400 }
      );
    }

    const existingCertificate = await prisma.certificate.findFirst({
      where: {
        userId: session.user.id,
        courseId,
        status: 'ACTIVE',
      },
    });

    if (existingCertificate) {
      return NextResponse.json({
        message: 'Certificate already exists',
        certificate: existingCertificate,
      });
    }

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
            level: true,
            duration: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: 'Certificate issued successfully',
        certificate,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error issuing certificate:', error);
    return NextResponse.json(
      { error: 'Failed to issue certificate' },
      { status: 500 }
    );
  }
}
