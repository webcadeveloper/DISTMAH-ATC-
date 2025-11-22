'use client';

import { useEffect, useState } from 'react';
import { LottieAnimation } from '@/components/animations/LottieAnimation';
import confettiData from '@/public/lottie/celebration/confetti-celebration.json';
import { cn } from '@/lib/utils';

export interface CelebrationConfettiProps {
  /**
   * Trigger the confetti animation
   */
  trigger: boolean;

  /**
   * Duration before auto-hiding (ms)
   * @default 3000
   */
  duration?: number;

  /**
   * Callback when animation completes
   */
  onComplete?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Position overlay
   * @default 'fixed'
   */
  position?: 'fixed' | 'absolute';
}

/**
 * Celebration Confetti Overlay
 *
 * Full-screen confetti animation for celebrating achievements.
 *
 * @example
 * ```tsx
 * const [celebrate, setCelebrate] = useState(false);
 *
 * // Trigger celebration
 * setCelebrate(true);
 *
 * <CelebrationConfetti
 *   trigger={celebrate}
 *   onComplete={() => setCelebrate(false)}
 * />
 * ```
 */
export function CelebrationConfetti({
  trigger,
  duration = 3000,
  onComplete,
  className,
  position = 'fixed',
}: CelebrationConfettiProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        if (onComplete) {
          onComplete();
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [trigger, duration, onComplete]);

  if (!show) return null;

  return (
    <div
      className={cn(
        'inset-0 z-50 pointer-events-none flex items-center justify-center',
        position === 'fixed' ? 'fixed' : 'absolute',
        className
      )}
    >
      <LottieAnimation
        animationData={confettiData}
        width="100%"
        height="100%"
        loop={false}
        autoplay={true}
        style={{
          maxWidth: '800px',
          maxHeight: '800px',
        }}
      />
    </div>
  );
}
