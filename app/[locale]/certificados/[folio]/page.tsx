import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import CertificateView from '@/components/CertificateView';

interface PageProps {
  params: Promise<{
    folio: string;
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { folio } = await params;

  const certificate = await prisma.certificate.findUnique({
    where: { folio },
    select: {
      user: {
        select: {
          name: true,
        },
      },
      course: {
        select: {
          title: true,
        },
      },
    },
  });

  if (!certificate) {
    return {
      title: 'Certificado no encontrado',
    };
  }

  return {
    title: `Certificado - ${certificate.user.name}`,
    description: `Certificado de ${certificate.course.title} otorgado a ${certificate.user.name} por la Universidad Autodesk`,
    openGraph: {
      title: `Certificado - ${certificate.user.name}`,
      description: `Certificado de ${certificate.course.title}`,
      type: 'website',
    },
  };
}

export default async function CertificatePage({ params }: PageProps) {
  const { folio } = await params;

  const certificate = await prisma.certificate.findUnique({
    where: { folio },
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
          level: true,
          duration: true,
          category: true,
        },
      },
    },
  });

  if (!certificate) {
    notFound();
  }

  return <CertificateView certificate={certificate} />;
}
