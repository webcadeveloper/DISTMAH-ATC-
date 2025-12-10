'use client';

import { LottieAnimation } from '@/components/animations/LottieAnimation';
import celebrationCheckmarkData from '@/public/lottie/success/celebration-checkmark.json';
import { cn } from '@/lib/utils';

export interface SuccessAnimationProps {
  /**
   * Size of the animation
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Title to display
   */
  title?: string;

  /**
   * Message to display below the animation
   */
  message?: string;

  /**
   * Callback when animation completes
   */
  onComplete?: () => void;

  /**
   * Loop the animation
   * @default false
   */
  loop?: boolean;
}

const sizeConfig = {
  sm: 60,
  md: 120,
  lg: 180,
  xl: 240,
};

/**
 * Success Animation Component with celebration checkmark
 *
 * @example
 * ```tsx
 * <SuccessAnimation
 *   size="lg"
 *   title="¡Inscripción exitosa!"
 *   message="Te has inscrito al curso de AutoCAD 2D 2026"
 *   onComplete={() => router.push('/mis-cursos')}
 * />
 * ```
 */
export function SuccessAnimation({
  size = 'md',
  className,
  title,
  message,
  onComplete,
  loop = false,
}: SuccessAnimationProps) {
  const dimension = sizeConfig[size];

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4 text-center',
        className
      )}
    >
      <LottieAnimation
        animationData={celebrationCheckmarkData}
        width={dimension}
        height={dimension}
        loop={loop}
        autoplay={true}
        onComplete={onComplete}
      />
      {title && (
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
          {title}
        </h3>
      )}
      {message && (
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-md">
          {message}
        </p>
      )}
    </div>
  );
}
