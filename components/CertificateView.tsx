'use client';

import { useState, useEffect } from 'react';
import { Download, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CertificateViewProps {
  certificate: {
    id: string;
    folio: string;
    status: string;
    issuedAt: Date;
    expiresAt: Date | null;
    verificationUrl: string;
    user: {
      name: string;
      email: string;
    };
    course: {
      title: string;
      description: string;
      level: string;
      duration: number;
      category: string;
    };
  };
}

export default function CertificateView({ certificate }: CertificateViewProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    generateQRCode();
  }, [certificate.verificationUrl]);

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(certificate.verificationUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#003366',
          light: '#FFFFFF',
        },
      });
      setQrCodeUrl(url);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const handleDownloadPDF = async () => {
    setDownloading(true);
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
      console.error('Error downloading PDF:', error);
      alert('Error al descargar el certificado. Por favor, inténtelo de nuevo.');
    } finally {
      setDownloading(false);
    }
  };

  const StatusBadge = () => {
    const statusConfig = {
      ACTIVE: {
        icon: CheckCircle,
        text: 'Activo',
        className: 'text-green-600 bg-green-50',
      },
      REVOKED: {
        icon: XCircle,
        text: 'Revocado',
        className: 'text-red-600 bg-red-50',
      },
      EXPIRED: {
        icon: AlertCircle,
        text: 'Expirado',
        className: 'text-yellow-600 bg-yellow-50',
      },
    };

    const config = statusConfig[certificate.status as keyof typeof statusConfig];
    const Icon = config.icon;

    return (
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${config.className}`}
      >
        <Icon className="w-5 h-5" />
        <span className="font-medium">{config.text}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Certificado de Finalización
          </h1>
          <p className="text-lg text-gray-600">
            Universidad Autodesk - Authorized Training Center
          </p>
        </div>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm text-gray-600 mb-1">Folio</p>
                <p className="text-2xl font-bold text-blue-900">
                  {certificate.folio}
                </p>
              </div>
              <StatusBadge />
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-sm font-semibold text-gray-600 uppercase mb-4">
                    Estudiante
                  </h2>
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    {certificate.user.name}
                  </p>
                  <p className="text-gray-600">{certificate.user.email}</p>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-gray-600 uppercase mb-4">
                    Curso
                  </h2>
                  <p className="text-xl font-bold text-gray-900 mb-2">
                    {certificate.course.title}
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>Nivel: {certificate.course.level}</span>
                    <span>•</span>
                    <span>{certificate.course.duration} horas</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                  Descripción del Curso
                </h2>
                <p className="text-gray-700">{certificate.course.description}</p>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Categoría</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {certificate.course.category}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Fecha de Emisión</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {new Date(certificate.issuedAt).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                {certificate.expiresAt && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Fecha de Expiración</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {new Date(certificate.expiresAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    {qrCodeUrl && (
                      <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-lg">
                        <img
                          src={qrCodeUrl}
                          alt="QR Code de verificación"
                          className="w-48 h-48"
                        />
                      </div>
                    )}
                    <p className="mt-4 text-sm text-gray-600">
                      Escanea para verificar la autenticidad
                    </p>
                  </div>

                  <div className="flex flex-col justify-center space-y-4">
                    <Button
                      onClick={handleDownloadPDF}
                      disabled={
                        downloading || certificate.status !== 'ACTIVE'
                      }
                      size="lg"
                      className="w-full bg-blue-900 hover:bg-blue-800"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {downloading ? 'Descargando...' : 'Descargar PDF'}
                    </Button>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-2">
                        URL de Verificación
                      </p>
                      <a
                        href={certificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-900 hover:underline break-all"
                      >
                        {certificate.verificationUrl}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Este certificado es verificable mediante el estándar OpenBadges v2.0
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Emitido por Universidad Autodesk - DISTMAH ATC
          </p>
        </div>
      </div>
    </div>
  );
}
