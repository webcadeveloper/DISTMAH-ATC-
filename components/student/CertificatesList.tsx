'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Download, Share2, ExternalLink, Calendar, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface Certificate {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  instructorName: string;
  completionDate: Date;
  verificationCode: string;
  course: {
    title: string;
    category: string;
    level: string;
  };
}

interface CertificatesListProps {
  userId: string;
}

export function CertificatesList({ userId }: CertificatesListProps) {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCertificates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const loadCertificates = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/certificates/${userId}`);
      if (!response.ok) throw new Error('Error al cargar certificados');
      const data = await response.json();
      setCertificates(data);
    } catch (error) {
      console.error('Error loading certificates:', error);
      toast.error('Error al cargar los certificados');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (certificateId: string, certificateNumber: string) => {
    try {
      const response = await fetch(`/api/certificates/download/${certificateId}`);
      if (!response.ok) throw new Error('Error al descargar certificado');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Certificado-${certificateNumber}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success('Certificado descargado exitosamente');
    } catch (error) {
      console.error('Error downloading certificate:', error);
      toast.error('Error al descargar el certificado');
    }
  };

  const handleShare = async (verificationCode: string, courseName: string) => {
    const url = `${window.location.origin}/verificar-certificado/${verificationCode}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Certificado - ${courseName}`,
          text: `He completado exitosamente el curso ${courseName} en DISTMAH ATC`,
          url: url,
        });
        toast.success('Compartido exitosamente');
      } catch {
        // Error silently ignored
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast.success('Enlace copiado al portapapeles');
      } catch {
        toast.error('Error al copiar el enlace');
      }
    }
  };

  const handleVerify = (verificationCode: string) => {
    window.open(`/verificar-certificado/${verificationCode}`, '_blank');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (certificates.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Award className="w-16 h-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No tienes certificados aún</h3>
          <p className="text-gray-500 text-center max-w-md">
            Completa un curso y aprueba el examen final para obtener tu certificado oficial
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Mis Certificados</h2>
          <p className="text-gray-500">
            {certificates.length} certificado{certificates.length !== 1 ? 's' : ''} obtenido
            {certificates.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((certificate) => (
          <Card
            key={certificate.id}
            className="hover:shadow-lg transition-shadow border-2 border-gray-200"
          >
            <CardHeader className="bg-gradient-to-r from-black to-gray-800 text-white">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-semibold">
                      {certificate.certificateNumber}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{certificate.courseName}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Estudiante</p>
                  <p className="font-semibold">{certificate.studentName}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-semibold">{certificate.instructorName}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Fecha de completación</p>
                    <p className="font-semibold">
                      {format(new Date(certificate.completionDate), 'dd/MM/yyyy')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                    {certificate.course.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-semibold">
                    {certificate.course.level}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleDownload(certificate.id, certificate.certificateNumber)
                    }
                    className="flex flex-col items-center gap-1 h-auto py-2"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-xs">Descargar</span>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare(certificate.verificationCode, certificate.courseName)}
                    className="flex flex-col items-center gap-1 h-auto py-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="text-xs">Compartir</span>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleVerify(certificate.verificationCode)}
                    className="flex flex-col items-center gap-1 h-auto py-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs">Verificar</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
