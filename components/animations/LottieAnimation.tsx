'use client';

import { CSSProperties } from 'react';
import Lottie, { LottieComponentProps } from 'lottie-react';
import { useLottie, UseLottieOptions } from '@/lib/hooks/useLottie';
import { cn } from '@/lib/utils';

export interface LottieAnimationProps extends UseLottieOptions {
  /**
   * Animation data (JSON object)
   */
  animationData: any;

  /**
   * Width of the animation container
   * @default '100%'
   */
  width?: string | number;

  /**
   * Height of the animation container
   * @default '100%'
   */
  height?: string | number;

  /**
   * Additional CSS classes for the container
   */
  className?: string;

  /**
   * Custom styles for the container
   */
  style?: CSSProperties;

  /**
   * Additional Lottie component props
   */
  lottieProps?: Partial<LottieComponentProps>;
}

/**
 * Lottie Animation Wrapper Component
 *
 * A flexible wrapper around lottie-react with advanced control features.
 *
 * @example Basic usage
 * ```tsx
 * import animationData from '@/public/lottie/loading/loading-spinner.json';
 *
 * <LottieAnimation
 *   animationData={animationData}
 *   width={200}
 *   height={200}
 *   loop={true}
 *   autoplay={true}
 * />
 * ```
 *
 * @example With hover trigger
 * ```tsx
 * <LottieAnimation
 *   animationData={animationData}
 *   playOnHover={true}
 *   autoplay={false}
 *   loop={false}
 * />
 * ```
 *
 * @example With scroll trigger
 * ```tsx
 * <LottieAnimation
 *   animationData={animationData}
 *   playOnScroll={true}
 *   scrollThreshold={0.3}
 *   autoplay={false}
 * />
 * ```
 */
export function LottieAnimation({
  animationData,
  width = '100%',
  height = '100%',
  className,
  style,
  loop = true,
  autoplay = true,
  speed = 1,
  direction = 1,
  delay = 0,
  onComplete,
  onLoopComplete,
  playOnHover = false,
  playOnScroll = false,
  scrollThreshold = 0.5,
  lottieProps = {},
}: LottieAnimationProps) {
  const { lottieRef, containerRef } = useLottie({
    loop,
    autoplay,
    speed,
    direction,
    delay,
    onComplete,
    onLoopComplete,
    playOnHover,
    playOnScroll,
    scrollThreshold,
  });

  const containerStyle: CSSProperties = {
    width,
    height,
    display: 'inline-block',
    ...style,
  };

  return (
    <div
      ref={containerRef}
      className={cn('lottie-animation-container', className)}
      style={containerStyle}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        {...lottieProps}
      />
    </div>
  );
}
