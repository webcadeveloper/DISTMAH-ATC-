import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, Award, Calendar, User, BookOpen } from 'lucide-react';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'Verificar Certificado - DISTMAH ATC',
  description: 'Verifica la autenticidad de certificados emitidos por DISTMAH Authorized Training Center',
};

async function verifyCertificate(code: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/certificates/verify/${code}`,
      { cache: 'no-store' }
    );
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Error verifying certificate:', error);
    return null;
  }
}

export default async function VerificarCertificadoPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const data = await verifyCertificate(code);

  if (!data || !data.valid) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="border-red-500">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <XCircle className="w-12 h-12 text-red-600" />
                </div>
                <h1 className="text-3xl font-bold text-red-700 mb-4">
                  Certificado No Válido
                </h1>
                <p className="text-gray-600 mb-4">
                  No se encontró ningún certificado con el código de verificación proporcionado.
                </p>
                <p className="text-sm text-gray-500">
                  Código: <span className="font-mono">{code.slice(0, 8).toUpperCase()}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const { certificate } = data;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Verificación de Certificado</h1>
          <p className="text-gray-600">DISTMAH - Authorized Training Center</p>
        </div>

        <Card className="border-green-500 mb-8">
          <CardContent className="pt-6">
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-700 mb-2">
                Certificado Válido
              </h2>
              <p className="text-green-600">
                Este certificado ha sido emitido por DISTMAH ATC y es auténtico
              </p>
            </div>

            <div className="border-t border-b py-6 my-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-8 h-8 text-gray-700" />
                <h3 className="text-2xl font-bold">
                  Certificado: {certificate.certificateNumber}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <h4 className="font-semibold text-gray-700">Estudiante</h4>
                </div>
                <p className="text-xl font-bold">{certificate.studentName}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                  <h4 className="font-semibold text-gray-700">Curso</h4>
                </div>
                <p className="text-xl font-bold">{certificate.courseName}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <h4 className="font-semibold text-gray-700">Instructor</h4>
                </div>
                <p className="text-xl font-bold">{certificate.instructorName}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <h4 className="font-semibold text-gray-700">Fecha de Completación</h4>
                </div>
                <p className="text-xl font-bold">
                  {format(new Date(certificate.completionDate), 'dd/MM/yyyy')}
                </p>
              </div>
            </div>

            {certificate.category && certificate.level && (
              <div className="mt-6 flex gap-2 justify-center">
                <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold">
                  {certificate.category}
                </span>
                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold">
                  Nivel: {certificate.level}
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sobre DISTMAH ATC</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              DISTMAH es un <strong>Authorized Training Center (ATC)</strong> oficial de Autodesk,
              autorizado para ofrecer capacitación certificada en software Autodesk.
            </p>
            <p className="text-gray-700 mb-4">
              Todos los certificados emitidos por DISTMAH ATC cuentan con un código de
              verificación único que puede ser validado en línea para confirmar su autenticidad.
            </p>
            <p className="text-sm text-gray-500">
              Código de verificación: <span className="font-mono">{code.slice(0, 16).toUpperCase()}</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
