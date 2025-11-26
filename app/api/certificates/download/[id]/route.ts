import React from 'react';
import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { renderToStream, Document, Page } from '@react-pdf/renderer';
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
    await QRCode.toDataURL(verificationUrl);

    // Create a basic PDF document with certificate content
    const PdfDocument = () =>
      React.createElement(
        Document,
        null,
        React.createElement(
          Page,
          { size: 'A4', orientation: 'landscape' },
          React.createElement('View', null,
            React.createElement('Text', null, 'CERTIFICADO DE COMPLETACIÓN'),
            React.createElement('Text', null, certificate.studentName),
            React.createElement('Text', null, certificate.courseName),
            React.createElement('Text', null, `Certificado #: ${certificate.certificateNumber}`)
          )
        )
      );

    const stream = await renderToStream(React.createElement(PdfDocument));

    const chunks: (string | Buffer)[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks.map(c => typeof c === 'string' ? Buffer.from(c) : c));

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
