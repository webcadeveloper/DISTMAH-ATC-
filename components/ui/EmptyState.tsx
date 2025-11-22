'use client';

import { LottieAnimation } from '@/components/animations/LottieAnimation';
import emptyDataAnimation from '@/public/lottie/empty/empty-data.json';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface EmptyStateProps {
  /**
   * Title for the empty state
   */
  title: string;

  /**
   * Description message
   */
  description?: string;

  /**
   * Primary action button text
   */
  actionLabel?: string;

  /**
   * Primary action callback
   */
  onAction?: () => void;

  /**
   * Secondary action button text
   */
  secondaryActionLabel?: string;

  /**
   * Secondary action callback
   */
  onSecondaryAction?: () => void;

  /**
   * Size of the animation
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Additional CSS classes
   */
  className?: string;
}

const sizeConfig = {
  sm: 120,
  md: 180,
  lg: 240,
};

/**
 * Empty State Component
 *
 * Displays when there's no data to show with optional actions.
 *
 * @example
 * ```tsx
 * <EmptyState
 *   title="No tienes cursos inscritos"
 *   description="Explora nuestro catálogo y comienza tu aprendizaje hoy"
 *   actionLabel="Ver Cursos"
 *   onAction={() => router.push('/cursos')}
 * />
 * ```
 */
export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  size = 'md',
  className,
}: EmptyStateProps) {
  const dimension = sizeConfig[size];

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center py-12 px-4',
        className
      )}
    >
      <LottieAnimation
        animationData={emptyDataAnimation}
        width={dimension}
        height={dimension}
        loop={true}
        autoplay={true}
      />

      <div className="mt-6 space-y-3 max-w-md">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}

        {(actionLabel || secondaryActionLabel) && (
          <div className="flex items-center gap-3 justify-center mt-6">
            {actionLabel && onAction && (
              <Button onClick={onAction} size="default">
                {actionLabel}
              </Button>
            )}

            {secondaryActionLabel && onSecondaryAction && (
              <Button onClick={onSecondaryAction} variant="outline" size="default">
                {secondaryActionLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
