'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Download, Calendar, ExternalLink, Loader2, Clock, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

interface Certificate {
  id: string;
  folio: string;
  status: 'PENDING_APPROVAL' | 'ACTIVE' | 'REJECTED' | 'REVOKED';
  issuedAt: string | null;
  createdAt: string;
  verificationUrl: string;
  rejectionReason: string | null;
  course: {
    id: string;
    title: string;
    level: string;
    duration: number;
    slug: string;
    instructor: {
      name: string;
    };
  };
}

export default function CertificadosPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState<string | null>(null);

  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates = async () => {
    try {
      const res = await fetch('/api/student/certificates');
      if (res.ok) {
        const data = await res.json();
        setCertificates(data.certificates || []);
      }
    } catch (error) {
      console.error('Error loading certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async (certificateId: string, folio: string) => {
    setDownloading(certificateId);
    try {
      const res = await fetch(`/api/certificates/download/${certificateId}`);
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Certificado-${folio}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        const error = await res.json();
        alert(`Error: ${error.error || 'No se pudo descargar el certificado'}`);
      }
    } catch (error) {
      console.error('Error downloading certificate:', error);
      alert('Error al descargar el certificado');
    } finally {
      setDownloading(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return <Badge className="bg-green-600"><CheckCircle className="w-3 h-3 mr-1" />Aprobado</Badge>;
      case 'PENDING_APPROVAL':
        return <Badge className="bg-orange-500"><Clock className="w-3 h-3 mr-1" />Pendiente</Badge>;
      case 'REJECTED':
        return <Badge className="bg-red-600"><XCircle className="w-3 h-3 mr-1" />Rechazado</Badge>;
      case 'REVOKED':
        return <Badge className="bg-neutral-600"><XCircle className="w-3 h-3 mr-1" />Revocado</Badge>;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (certificates.length === 0) {
    return (
      <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Mis Certificados</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Aqui encontraras todos tus certificados obtenidos</p>
        </div>

        <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
          <CardContent className="p-12 text-center">
            <Award className="w-16 h-16 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Aun no tienes certificados</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">Completa tus cursos al 100% para obtener certificados oficiales</p>
            <Link href="/es/estudiante/mis-cursos">
              <Button className="bg-blue-600 hover:bg-blue-700">Ver Mis Cursos</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Mis Certificados</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Aqui encontraras todos tus certificados obtenidos</p>
      </div>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900 rounded-xl">
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Certificados Oficiales DISTMAH</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Todos nuestros certificados son verificables con OpenBadges y cuentan con validez oficial como Authorized Training Center de Autodesk.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <Card key={certificate.id} className="hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-neutral-900 dark:from-blue-950 dark:to-neutral-950 relative flex items-center justify-center">
                <div className="absolute top-3 right-3">
                  {getStatusBadge(certificate.status)}
                </div>
                <div className="text-center text-white p-6">
                  <Award className="w-16 h-16 mx-auto mb-3 opacity-80" />
                  <p className="text-xs font-medium opacity-90">CERTIFICADO OFICIAL</p>
                  <p className="text-sm font-bold mt-1">DISTMAH ATC</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">{certificate.course.title}</h3>

                <div className="space-y-2 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {certificate.status === 'ACTIVE' && certificate.issuedAt
                        ? `Emitido: ${new Date(certificate.issuedAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}`
                        : `Solicitado: ${new Date(certificate.createdAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}`
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Instructor: {certificate.course.instructor.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 flex items-center justify-center text-xs">⏱️</span>
                    <span>Duracion: {certificate.course.duration} horas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-neutral-100 dark:bg-neutral-700 px-2 py-0.5 rounded">
                      Folio: {certificate.folio}
                    </span>
                  </div>
                </div>

                {certificate.status === 'REJECTED' && certificate.rejectionReason && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-xs text-red-700 dark:text-red-300">
                      <strong>Motivo de rechazo:</strong> {certificate.rejectionReason}
                    </p>
                  </div>
                )}

                {certificate.status === 'PENDING_APPROVAL' && (
                  <div className="mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <p className="text-xs text-orange-700 dark:text-orange-300">
                      Tu certificado esta pendiente de aprobacion por el instructor.
                    </p>
                  </div>
                )}

                <div className="flex gap-2">
                  {certificate.status === 'ACTIVE' ? (
                    <>
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleDownloadPDF(certificate.id, certificate.folio)}
                        disabled={downloading === certificate.id}
                      >
                        {downloading === certificate.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-1" />
                            Descargar PDF
                          </>
                        )}
                      </Button>
                      <Link href={`/certificados/${certificate.folio}`} target="_blank">
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Button size="sm" variant="outline" className="flex-1" disabled>
                      {certificate.status === 'PENDING_APPROVAL' ? 'Esperando aprobacion' : 'No disponible'}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">¿Necesitas verificar un certificado?</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Cada certificado incluye un codigo unico de verificacion. Puedes validar su autenticidad en nuestro portal de verificacion.
        </p>
        <Link href="/certificados/verificar">
          <Button variant="outline" size="sm" className="border-neutral-300 dark:border-neutral-600">
            Ir a Verificacion de Certificados
          </Button>
        </Link>
      </div>
    </div>
  );
}
