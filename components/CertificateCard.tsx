'use client';

import { Award, Download, Eye, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CertificateCardProps {
  certificate: {
    id: string;
    folio: string;
    status: string;
    issuedAt: Date;
    course: {
      title: string;
      level: string;
      duration: number;
      category: string;
    };
  };
  locale?: string;
}

export default function CertificateCard({
  certificate,
  locale = 'es',
}: CertificateCardProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        `/api/certificates/download/${certificate.id}`
      );

      if (!response.ok) {
        throw new Error('Failed to download certificate');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Certificado-${certificate.folio}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading certificate:', error);
    }
  };

  const formattedDate = new Date(certificate.issuedAt).toLocaleDateString(
    locale === 'es' ? 'es-ES' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Award className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-gray-900">
                {certificate.course.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Folio: {certificate.folio}
              </CardDescription>
            </div>
          </div>
          {certificate.status === 'ACTIVE' && (
            <div className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
              <CheckCircle className="w-3 h-3" />
              <span>Activo</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600 mb-1">Categoría</p>
            <p className="font-semibold text-gray-900">
              {certificate.course.category}
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Nivel</p>
            <p className="font-semibold text-gray-900">
              {certificate.course.level}
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Duración</p>
            <p className="font-semibold text-gray-900">
              {certificate.course.duration} horas
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Fecha de emisión</p>
            <p className="font-semibold text-gray-900">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Link
            href={`/${locale}/certificados/${certificate.folio}`}
            className="flex-1"
          >
            <Button variant="outline" className="w-full" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Ver certificado
            </Button>
          </Link>

          <Button
            onClick={handleDownload}
            disabled={certificate.status !== 'ACTIVE'}
            className="flex-1 bg-blue-900 hover:bg-blue-800"
            size="sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Descargar PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
