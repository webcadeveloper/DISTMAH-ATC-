'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import { validateCoupon, calculateDiscount } from '@/lib/stripe';
import { Course } from '@/lib/types';

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const cursoId = params.cursoId as string;

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    couponCode: '',
    termsAccepted: false,
  });

  const [couponStatus, setCouponStatus] = useState<{
    valid: boolean;
    message: string;
    discount: number;
    finalPrice: number;
  } | null>(null);

  useEffect(() => {
    const foundCourse = COURSES_2026.find((c) => c.id === cursoId);
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      router.push('/');
    }
  }, [cursoId, router]);

  const handleCouponValidation = () => {
    if (!formData.couponCode.trim() || !course) {
      setCouponStatus(null);
      return;
    }

    const coupon = validateCoupon(formData.couponCode);
    if (coupon) {
      const calculation = calculateDiscount(course.price, coupon);
      setCouponStatus({
        valid: true,
        message: `Cupón válido - ${coupon.type === 'percentage' ? `${coupon.discount * 100}% descuento` : `$${coupon.discount} USD descuento`}`,
        discount: calculation.discount,
        finalPrice: calculation.finalPrice,
      });
    } else {
      setCouponStatus({
        valid: false,
        message: 'Cupón inválido o expirado',
        discount: 0,
        finalPrice: course.price,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.termsAccepted) {
      setError('Debes aceptar los términos y condiciones');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Por favor completa todos los campos requeridos');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: cursoId,
          email: formData.email,
          couponCode: formData.couponCode || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear sesión de pago');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Error al procesar el pago');
      setLoading(false);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900">Cargando...</h1>
        </div>
      </div>
    );
  }

  const displayPrice = couponStatus?.valid ? couponStatus.finalPrice : course.price;
  const hasDiscount = couponStatus?.valid && couponStatus.discount > 0;

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                Inscripción al Curso
              </h1>
              <p className="text-neutral-600 mb-8">
                Completa tus datos para proceder al pago seguro con Stripe
              </p>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Cupón de Descuento (opcional)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.couponCode}
                      onChange={(e) =>
                        setFormData({ ...formData, couponCode: e.target.value })
                      }
                      className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="DISTMAH2026"
                    />
                    <button
                      type="button"
                      onClick={handleCouponValidation}
                      className="px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-900 transition-colors font-medium"
                    >
                      Aplicar
                    </button>
                  </div>
                  {couponStatus && (
                    <p
                      className={`mt-2 text-sm font-medium ${
                        couponStatus.valid ? 'text-green-700' : 'text-red-700'
                      }`}
                    >
                      {couponStatus.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.termsAccepted}
                    onChange={(e) =>
                      setFormData({ ...formData, termsAccepted: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="terms" className="text-sm text-neutral-700">
                    Acepto los{' '}
                    <a href="/terminos" className="text-primary-600 hover:underline">
                      términos y condiciones
                    </a>{' '}
                    y las{' '}
                    <a href="/privacidad" className="text-primary-600 hover:underline">
                      políticas de privacidad
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !formData.termsAccepted}
                  className="w-full px-6 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors font-semibold text-lg flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <span>Procesando...</span>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                      </svg>
                      Pagar con Stripe
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-neutral-600 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pago seguro procesado por Stripe
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 sticky top-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                Resumen de Compra
              </h2>

              <div className="mb-6">
                <div className="aspect-video bg-neutral-200 rounded-lg mb-4 overflow-hidden">
                  {course.image && (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-3">{course.subtitle}</p>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                  {course.duration} horas
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-4 space-y-3">
                <div className="flex justify-between text-neutral-700">
                  <span>Subtotal:</span>
                  <span className={hasDiscount ? 'line-through text-neutral-500' : 'font-semibold'}>
                    ${course.price} USD
                  </span>
                </div>

                {hasDiscount && (
                  <div className="flex justify-between text-green-700 font-medium">
                    <span>Descuento:</span>
                    <span>-${couponStatus.discount.toFixed(2)} USD</span>
                  </div>
                )}

                <div className="border-t border-neutral-200 pt-3 flex justify-between text-lg font-bold text-neutral-900">
                  <span>Total:</span>
                  <span className="text-primary-600">${displayPrice.toFixed(2)} USD</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200 space-y-2 text-sm text-neutral-600">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Acceso inmediato al curso</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Certificado digital al finalizar</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Soporte técnico incluido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
