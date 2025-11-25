'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';

export default function CheckoutCancelPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('course_id');

  const course = courseId
    ? COURSES_2026.find((c) => c.id === courseId)
    : null;

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 text-center">
          <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-neutral-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Pago Cancelado
          </h1>
          <p className="text-lg text-neutral-700 mb-8">
            Tu proceso de pago ha sido cancelado. No se ha realizado ningún cargo a tu tarjeta.
          </p>

          {course && (
            <div className="bg-neutral-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                Curso: {course.title}
              </h2>
              <p className="text-neutral-700 mb-4">{course.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Precio:</span>
                <span className="text-2xl font-bold text-primary-600">
                  ${course.price} USD
                </span>
              </div>
            </div>
          )}

          <div className="bg-neutral-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Qué sucedió?
            </h2>
            <div className="space-y-3 text-neutral-700">
              <p>El proceso de pago fue cancelado. Esto puede haber ocurrido por:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Decidiste no continuar con la compra</li>
                <li>Cerraste la ventana de pago accidentalmente</li>
                <li>Hubo un problema técnico temporal</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            {course && (
              <Link
                href={`/checkout/${course.id}`}
                className="block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Intentar de Nuevo
              </Link>
            )}
            {course && (
              <Link
                href={`/cursos/${course.slug}`}
                className="block w-full px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors font-semibold"
              >
                Ver Detalles del Curso
              </Link>
            )}
            <Link
              href="/"
              className="block w-full px-6 py-3 bg-white text-neutral-700 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors font-semibold"
            >
              Volver al Inicio
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 mb-4">
              Tienes problemas para completar el pago?
            </p>
            <div className="space-y-2">
              <Link
                href="/soporte"
                className="inline-block text-primary-600 hover:underline font-medium"
              >
                Contacta a Soporte
              </Link>
              <span className="mx-3 text-neutral-400">•</span>
              <Link
                href="/faq"
                className="inline-block text-primary-600 hover:underline font-medium"
              >
                Preguntas Frecuentes
              </Link>
            </div>
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
                Métodos de Pago Aceptados
              </h3>
              <p className="text-sm text-primary-800 mb-3">
                Aceptamos tarjetas de crédito y débito Visa, Mastercard, American Express y más a través de Stripe.
              </p>
              <div className="flex items-center gap-4">
                <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#1434CB" />
                  <path d="M17.5 16L13 12v8l4.5-4zm13 0L26 12v8l4.5-4z" fill="white" />
                </svg>
                <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#EB001B" />
                  <circle cx="18" cy="16" r="8" fill="#EB001B" />
                  <circle cx="30" cy="16" r="8" fill="#FF5F00" />
                </svg>
                <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#016FD0" />
                  <path d="M22 12h4v8h-4z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
