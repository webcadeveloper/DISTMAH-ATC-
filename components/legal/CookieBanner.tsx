'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShow(false);
  }

  function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm md:text-base">
              Usamos cookies para mejorar tu experiencia en DISTMAH ATC. Las cookies nos
              ayudan a mantener tu sesión activa, guardar tu progreso y analizar el uso
              de la plataforma.{' '}
              <Link href="/cookies" className="underline hover:text-gray-300">
                Más información sobre cookies
              </Link>
              {' | '}
              <Link href="/privacidad" className="underline hover:text-gray-300">
                Política de Privacidad
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors text-sm md:text-base"
            >
              Rechazar opcionales
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm md:text-base font-semibold"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
