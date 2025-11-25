import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { renderToStream } from '@react-pdf/renderer';
import { CertificatePDF } from '@/components/certificates/CertificatePDF';
import QRCode from 'qrcode';

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

    const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verificar-certificado/${certificate.verificationCode}`;
    const qrCodeDataUrl = await QRCode.toDataURL(verificationUrl);

    const stream = await renderToStream(
      <CertificatePDF
        certificateNumber={certificate.certificateNumber}
        studentName={certificate.studentName}
        courseName={certificate.courseName}
        instructorName={certificate.instructorName}
        completionDate={certificate.completionDate}
        verificationCode={certificate.verificationCode}
        qrCodeDataUrl={qrCodeDataUrl}
      />
    );

    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Certificado-${certificate.certificateNumber}.pdf"`,
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
