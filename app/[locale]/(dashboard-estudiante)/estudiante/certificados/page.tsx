'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Download, Calendar, ExternalLink } from 'lucide-react';

const mockCertificados = [
  {
    id: '1',
    cursoTitle: 'AutoCAD 2026 - Nivel Avanzado',
    fechaObtencion: '2025-11-15',
    instructor: 'Ing. Carlos Rodríguez',
    duracion: '40 horas',
    thumbnail: null,
  },
  {
    id: '2',
    cursoTitle: 'Revit 2025 - Arquitectura Básica',
    fechaObtencion: '2025-10-20',
    instructor: 'Arq. María González',
    duracion: '35 horas',
    thumbnail: null,
  },
  {
    id: '3',
    cursoTitle: 'BIM Manager - Gestión de Proyectos',
    fechaObtencion: '2025-09-05',
    instructor: 'Ing. Roberto Silva',
    duracion: '50 horas',
    thumbnail: null,
  },
];

export default function CertificadosPage() {
  const handleDownloadPDF = (certificadoId: string, cursoTitle: string) => {
    alert(`Descargando certificado: ${cursoTitle}`);
  };

  const handleViewOnline = (certificadoId: string) => {
    alert(`Abriendo certificado en nueva pestaña...`);
  };

  if (mockCertificados.length === 0) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Mis Certificados</h1>
          <p className="text-neutral-600">Aquí encontrarás todos tus certificados obtenidos</p>
        </div>

        <Card>
          <CardContent className="p-12 text-center">
            <Award className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Aún no tienes certificados</h3>
            <p className="text-neutral-600 mb-6">Completa tus cursos para obtener certificados oficiales</p>
            <Button className="bg-blue-600 hover:bg-blue-700">Ver Mis Cursos</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Mis Certificados</h1>
        <p className="text-neutral-600">Aquí encontrarás todos tus certificados obtenidos</p>
      </div>

      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Certificados Oficiales DISTMAH</h3>
            <p className="text-sm text-blue-700">
              Todos nuestros certificados son verificables y cuentan con validez oficial como Authorized Training Center de Autodesk.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCertificados.map((certificado) => (
          <Card key={certificado.id} className="hover:shadow-lg transition-all border border-neutral-200">
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-neutral-900 relative flex items-center justify-center">
                {certificado.thumbnail ? (
                  <img src={certificado.thumbnail} alt={certificado.cursoTitle} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center text-white p-6">
                    <Award className="w-16 h-16 mx-auto mb-3 opacity-80" />
                    <p className="text-xs font-medium opacity-90">CERTIFICADO OFICIAL</p>
                    <p className="text-sm font-bold mt-1">DISTMAH ATC</p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{certificado.cursoTitle}</h3>

                <div className="space-y-2 mb-4 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Obtenido: {new Date(certificado.fechaObtencion).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Instructor: {certificado.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 flex items-center justify-center text-xs">⏱️</span>
                    <span>Duración: {certificado.duracion}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleDownloadPDF(certificado.id, certificado.cursoTitle)}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Descargar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleViewOnline(certificado.id)}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl border border-neutral-200">
        <h3 className="font-semibold text-neutral-900 mb-2">¿Necesitas verificar un certificado?</h3>
        <p className="text-sm text-neutral-600 mb-4">
          Cada certificado incluye un código único de verificación. Puedes validar su autenticidad en nuestro portal de verificación.
        </p>
        <Button variant="outline" size="sm">
          Ir a Verificación de Certificados
        </Button>
      </div>
    </div>
  );
}
