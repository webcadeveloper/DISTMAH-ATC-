'use client';

import { LottieAnimation } from '@/components/animations/LottieAnimation';
import loadingDotsData from '@/public/lottie/loading/loading-dots.json';
import { cn } from '@/lib/utils';

export interface LoadingSpinnerProps {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Message to display below the spinner
   */
  message?: string;

  /**
   * Center the spinner in its container
   * @default false
   */
  centered?: boolean;
}

const sizeConfig = {
  sm: 40,
  md: 80,
  lg: 120,
  xl: 160,
};

/**
 * Loading Spinner Component with Lottie animation
 *
 * @example
 * ```tsx
 * <LoadingSpinner size="md" message="Cargando curso..." centered />
 * ```
 */
export function LoadingSpinner({
  size = 'md',
  className,
  message,
  centered = false,
}: LoadingSpinnerProps) {
  const dimension = sizeConfig[size];

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-3',
        centered && 'justify-center min-h-[200px]',
        className
      )}
    >
      <LottieAnimation
        animationData={loadingDotsData}
        width={dimension}
        height={dimension}
        loop={true}
        autoplay={true}
      />
      {message && (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}
