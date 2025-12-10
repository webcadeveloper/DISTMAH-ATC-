'use client';

import { LottieAnimation } from '@/components/animations/LottieAnimation';
import loadingDotsData from '@/public/lottie/loading/loading-dots.json';

export interface PageLoadingProps {
  /**
   * Message to display
   * @default 'Cargando...'
   */
  message?: string;

  /**
   * Full screen overlay
   * @default true
   */
  fullScreen?: boolean;
}

/**
 * Full Page Loading Component
 *
 * Displays a centered loading animation with optional message.
 * Can be used as a full screen overlay or inline component.
 *
 * @example Full screen loading
 * ```tsx
 * <PageLoading message="Cargando curso..." />
 * ```
 *
 * @example Inline loading
 * ```tsx
 * <PageLoading fullScreen={false} message="Procesando..." />
 * ```
 */
export function PageLoading({
  message = 'Cargando...',
  fullScreen = true,
}: PageLoadingProps) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <LottieAnimation
            animationData={loadingDotsData}
            width={120}
            height={120}
            loop={true}
            autoplay={true}
          />
          <p className="text-lg text-neutral-700 dark:text-neutral-300 font-medium animate-pulse">
            {message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center gap-4">
        <LottieAnimation
          animationData={loadingDotsData}
          width={120}
          height={120}
          loop={true}
          autoplay={true}
        />
        <p className="text-lg text-neutral-700 dark:text-neutral-300 font-medium animate-pulse">
          {message}
        </p>
      </div>
    </div>
  );
}
