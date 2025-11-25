'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');

  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState<any>(null);

  useEffect(() => {
    if (!sessionId) {
      router.push('/');
      return;
    }

    setLoading(false);
  }, [sessionId, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-neutral-700">Verificando pago...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Pago Exitoso
          </h1>
          <p className="text-lg text-neutral-700 mb-8">
            Tu inscripción ha sido confirmada. Te hemos enviado un email con los detalles del curso y las instrucciones de acceso.
          </p>

          <div className="bg-neutral-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Próximos Pasos
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Revisa tu email
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Hemos enviado un correo de confirmación con tus credenciales de acceso y los detalles del curso.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Accede a tu curso
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Ya puedes comenzar a ver las lecciones. Inicia sesión en la plataforma con las credenciales enviadas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Obtén tu certificado
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Al completar todas las lecciones y aprobar las evaluaciones, recibirás tu certificado digital.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/mis-cursos"
              className="block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Ir a Mis Cursos
            </Link>
            <Link
              href="/"
              className="block w-full px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors font-semibold"
            >
              Volver al Inicio
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 mb-2">
              Necesitas ayuda?
            </p>
            <Link
              href="/soporte"
              className="text-primary-600 hover:underline font-medium"
            >
              Contacta a Soporte
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-primary-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-primary-900 mb-1">
                Información Importante
              </h3>
              <p className="text-sm text-primary-800">
                Tu número de transacción es: <span className="font-mono font-bold">{sessionId}</span>
                <br />
                Guarda este número para futuras referencias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
