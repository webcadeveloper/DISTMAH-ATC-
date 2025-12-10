import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { renderToStream } from '@react-pdf/renderer';
import { generateCertificatePDFDocument } from '@/lib/certificate-generator';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const certificate = await prisma.certificate.findUnique({
      where: { id },
      include: {
        course: {
          select: {
            title: true,
            level: true,
            duration: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!certificate) {
      return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
    }

    if (
      certificate.user.id !== session.user.id &&
      session.user.role !== 'ADMIN' &&
      session.user.role !== 'INSTRUCTOR'
    ) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    if (certificate.status !== 'ACTIVE') {
      return NextResponse.json(
        { error: `Certificate is ${certificate.status}` },
        { status: 400 }
      );
    }

    const pdfDocument = await generateCertificatePDFDocument({
      studentName: certificate.user.name,
      courseName: certificate.course.title,
      courseLevel: certificate.course.level,
      courseDuration: certificate.course.duration,
      completionDate: certificate.issuedAt,
      folio: certificate.folio,
      verificationUrl: certificate.verificationUrl,
    });

    const stream = await renderToStream(pdfDocument);

    const readableStream = new ReadableStream({
      start(controller) {
        stream.on('data', (chunk) => {
          controller.enqueue(chunk);
        });
        stream.on('end', () => {
          controller.close();
        });
        stream.on('error', (error) => {
          controller.error(error);
        });
      },
    });

    return new NextResponse(readableStream, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Certificado-${certificate.folio}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
