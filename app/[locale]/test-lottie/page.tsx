'use client';

import { useState } from 'react';
import { LottieAnimation } from '@/components/animations/LottieAnimation';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { SuccessAnimation } from '@/components/ui/SuccessAnimation';
import { EmptyState } from '@/components/ui/EmptyState';
import { CelebrationConfetti } from '@/components/ui/CelebrationConfetti';
import { Button } from '@/components/ui/button';

// Import JSON animations
import loadingDotsData from '@/public/lottie/loading/loading-dots.json';
import celebrationCheckmarkData from '@/public/lottie/success/celebration-checkmark.json';
import emptyDataAnimation from '@/public/lottie/empty/empty-data.json';
import confettiData from '@/public/lottie/celebration/confetti-celebration.json';
import awardBadgeData from '@/public/lottie/certificates/award-badge.json';
import diplomaCertificateData from '@/public/lottie/certificates/diploma-certificate.json';
import bookReadingData from '@/public/lottie/icons/book-reading.json';
import videoIconData from '@/public/lottie/icons/video-icon.json';
import userProfileData from '@/public/lottie/icons/user-profile.json';
import settingsGearData from '@/public/lottie/icons/settings-gear.json';
import documentFileData from '@/public/lottie/icons/document-file.json';

export default function TestLottiePage() {
  const [celebrate, setCelebrate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lottie Animations Test Page
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Testing all Lottie animations for DISTMAH Universidad Autodesk
          </p>
        </div>

        {/* 1. LoadingSpinner Component */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            1. LoadingSpinner Component
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-sm text-gray-500 mb-2 text-center">Small</p>
              <LoadingSpinner size="sm" message="Cargando..." centered />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2 text-center">Medium</p>
              <LoadingSpinner size="md" message="Procesando..." centered />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2 text-center">Large</p>
              <LoadingSpinner size="lg" message="Espere..." centered />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2 text-center">XL</p>
              <LoadingSpinner size="xl" centered />
            </div>
          </div>
        </section>

        {/* 2. SuccessAnimation Component */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            2. SuccessAnimation Component
          </h2>
          <div className="flex justify-center mb-6">
            <Button onClick={() => setShowSuccess(!showSuccess)}>
              {showSuccess ? 'Ocultar' : 'Mostrar'} Success Animation
            </Button>
          </div>
          {showSuccess && (
            <SuccessAnimation
              size="lg"
              title="¡Inscripción Exitosa!"
              message="Te has inscrito al curso de AutoCAD 2D 2026. Comienza tu aprendizaje ahora."
            />
          )}
        </section>

        {/* 3. EmptyState Component */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            3. EmptyState Component
          </h2>
          <EmptyState
            title="No tienes cursos inscritos"
            description="Explora nuestro catálogo de cursos Autodesk y comienza tu aprendizaje profesional hoy."
            actionLabel="Ver Cursos"
            onAction={() => alert('Navegando a /cursos')}
            secondaryActionLabel="Contactar Soporte"
            onSecondaryAction={() => alert('Abriendo chat de soporte')}
          />
        </section>

        {/* 4. CelebrationConfetti Component */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            4. CelebrationConfetti Component
          </h2>
          <div className="text-center">
            <Button
              onClick={() => setCelebrate(true)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              🎉 Lanzar Confeti de Celebración
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Click para celebrar completar un curso o logro importante
            </p>
          </div>
          <CelebrationConfetti
            trigger={celebrate}
            onComplete={() => setCelebrate(false)}
          />
        </section>

        {/* 5. Raw Lottie Animations - Loading */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            5. Loading Animations (Raw JSON)
          </h2>
          <div className="flex items-center justify-center gap-12">
            <div className="text-center">
              <LottieAnimation
                animationData={loadingDotsData}
                width={100}
                height={100}
                loop={true}
                autoplay={true}
              />
              <p className="text-sm text-gray-500 mt-2">Loading Dots</p>
            </div>
          </div>
        </section>

        {/* 6. Success & Celebration */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            6. Success & Celebration Animations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <LottieAnimation
                animationData={celebrationCheckmarkData}
                width={150}
                height={150}
                loop={false}
                autoplay={true}
              />
              <p className="text-sm text-gray-500 mt-2">Celebration Checkmark</p>
            </div>
            <div className="text-center">
              <LottieAnimation
                animationData={confettiData}
                width={200}
                height={200}
                loop={false}
                autoplay={true}
              />
              <p className="text-sm text-gray-500 mt-2">Confetti Celebration</p>
            </div>
          </div>
        </section>

        {/* 7. Certificate & Awards */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            7. Certificate & Award Animations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <LottieAnimation
                animationData={awardBadgeData}
                width={150}
                height={150}
                loop={true}
                autoplay={true}
              />
              <p className="text-sm text-gray-500 mt-2">Award Badge</p>
            </div>
            <div className="text-center">
              <LottieAnimation
                animationData={diplomaCertificateData}
                width={150}
                height={150}
                loop={true}
                autoplay={true}
              />
              <p className="text-sm text-gray-500 mt-2">Diploma Certificate</p>
            </div>
          </div>
        </section>

        {/* 8. Empty State */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            8. Empty State Animation
          </h2>
          <div className="flex justify-center">
            <LottieAnimation
              animationData={emptyDataAnimation}
              width={200}
              height={200}
              loop={true}
              autoplay={true}
            />
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">Empty Data Animation</p>
        </section>

        {/* 9. Animated Icons */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            9. Animated Icons (Hover to Play)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <LottieAnimation
                animationData={bookReadingData}
                width={80}
                height={80}
                loop={false}
                autoplay={false}
                playOnHover={true}
              />
              <p className="text-xs text-gray-500 mt-2">Book Reading</p>
            </div>

            <div className="text-center">
              <LottieAnimation
                animationData={videoIconData}
                width={80}
                height={80}
                loop={false}
                autoplay={false}
                playOnHover={true}
              />
              <p className="text-xs text-gray-500 mt-2">Video Icon</p>
            </div>

            <div className="text-center">
              <LottieAnimation
                animationData={userProfileData}
                width={80}
                height={80}
                loop={false}
                autoplay={false}
                playOnHover={true}
              />
              <p className="text-xs text-gray-500 mt-2">User Profile</p>
            </div>

            <div className="text-center">
              <LottieAnimation
                animationData={settingsGearData}
                width={80}
                height={80}
                loop={false}
                autoplay={false}
                playOnHover={true}
              />
              <p className="text-xs text-gray-500 mt-2">Settings Gear</p>
            </div>

            <div className="text-center">
              <LottieAnimation
                animationData={documentFileData}
                width={80}
                height={80}
                loop={false}
                autoplay={false}
                playOnHover={true}
              />
              <p className="text-xs text-gray-500 mt-2">Document File</p>
            </div>
          </div>
        </section>

        {/* 10. Scroll Trigger Test */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            10. Scroll Trigger Animations
          </h2>
          <p className="text-gray-500 mb-8 text-center">
            Scroll down to see these animations activate
          </p>

          <div className="space-y-32">
            {[awardBadgeData, diplomaCertificateData, celebrationCheckmarkData].map(
              (data, i) => (
                <div key={i} className="flex justify-center">
                  <LottieAnimation
                    animationData={data}
                    width={180}
                    height={180}
                    loop={false}
                    autoplay={false}
                    playOnScroll={true}
                    scrollThreshold={0.3}
                  />
                </div>
              )
            )}
          </div>
        </section>

        {/* Spacer for scroll testing */}
        <div className="h-64"></div>

        {/* Footer */}
        <footer className="text-center text-gray-500 dark:text-gray-400 pb-8">
          <p>
            ✅ 12 animaciones JSON descargadas • 5 componentes UI creados • lottie-react v2.4.1
          </p>
          <p className="text-sm mt-2">
            DISTMAH Universidad Autodesk • Lottie Animation Testing
          </p>
        </footer>
      </div>
    </div>
  );
}
