'use client';

import { useRef, useEffect } from 'react';
import { LottieRefCurrentProps } from 'lottie-react';

export interface UseLottieOptions {
  /**
   * Loop the animation
   * @default true
   */
  loop?: boolean;

  /**
   * Autoplay the animation on mount
   * @default true
   */
  autoplay?: boolean;

  /**
   * Animation speed multiplier
   * @default 1
   */
  speed?: number;

  /**
   * Direction: 1 = forward, -1 = reverse
   * @default 1
   */
  direction?: 1 | -1;

  /**
   * Delay before starting animation (ms)
   * @default 0
   */
  delay?: number;

  /**
   * Callback when animation completes
   */
  onComplete?: () => void;

  /**
   * Callback when animation loops
   */
  onLoopComplete?: () => void;

  /**
   * Play animation on hover
   * @default false
   */
  playOnHover?: boolean;

  /**
   * Play animation on scroll into view
   * @default false
   */
  playOnScroll?: boolean;

  /**
   * Intersection observer threshold for scroll trigger
   * @default 0.5
   */
  scrollThreshold?: number;
}

export interface UseLottieReturn {
  lottieRef: React.RefObject<LottieRefCurrentProps | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  play: () => void;
  pause: () => void;
  stop: () => void;
  setSpeed: (speed: number) => void;
  setDirection: (direction: 1 | -1) => void;
  goToAndPlay: (value: number, isFrame?: boolean) => void;
  goToAndStop: (value: number, isFrame?: boolean) => void;
}

/**
 * Custom hook for controlling Lottie animations with advanced features
 *
 * @example
 * ```tsx
 * const { lottieRef, containerRef, play, pause } = useLottie({
 *   loop: true,
 *   autoplay: false,
 *   playOnHover: true
 * });
 *
 * <div ref={containerRef}>
 *   <Lottie lottieRef={lottieRef} animationData={animationData} />
 * </div>
 * ```
 */
export function useLottie(options: UseLottieOptions = {}): UseLottieReturn {
  const {
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
  } = options;

  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasPlayedOnScroll = useRef(false);

  // Control functions
  const play = () => {
    lottieRef.current?.play();
  };

  const pause = () => {
    lottieRef.current?.pause();
  };

  const stop = () => {
    lottieRef.current?.stop();
  };

  const setSpeed = (newSpeed: number) => {
    lottieRef.current?.setSpeed(newSpeed);
  };

  const setDirection = (newDirection: 1 | -1) => {
    lottieRef.current?.setDirection(newDirection);
  };

  const goToAndPlay = (value: number, isFrame = false) => {
    lottieRef.current?.goToAndPlay(value, isFrame);
  };

  const goToAndStop = (value: number, isFrame = false) => {
    lottieRef.current?.goToAndStop(value, isFrame);
  };

  // Set initial speed and direction
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
      lottieRef.current.setDirection(direction);
    }
  }, [speed, direction]);

  // Delay autoplay
  useEffect(() => {
    if (autoplay && delay > 0 && lottieRef.current) {
      lottieRef.current.pause();
      const timer = setTimeout(() => {
        lottieRef.current?.play();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [autoplay, delay]);

  // Play on hover
  useEffect(() => {
    if (!playOnHover || !containerRef.current) return;

    const container = containerRef.current;

    const handleMouseEnter = () => {
      lottieRef.current?.play();
    };

    const handleMouseLeave = () => {
      if (!loop) {
        lottieRef.current?.stop();
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [playOnHover, loop]);

  // Play on scroll into view
  useEffect(() => {
    if (!playOnScroll || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedOnScroll.current) {
            lottieRef.current?.play();
            hasPlayedOnScroll.current = true;

            // If not looping, disconnect observer after first play
            if (!loop) {
              observer.disconnect();
            }
          }
        });
      },
      { threshold: scrollThreshold }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [playOnScroll, loop, scrollThreshold]);

  // Event listeners
  useEffect(() => {
    const lottie = lottieRef.current;
    if (!lottie) return;

    const handleComplete = () => {
      if (onComplete) {
        onComplete();
      }
    };

    const handleLoopComplete = () => {
      if (onLoopComplete) {
        onLoopComplete();
      }
    };

    // Add event listeners (Lottie uses addEventListener internally)
    // @ts-ignore - Lottie types don't expose addEventListener but it exists
    lottie.addEventListener?.('complete', handleComplete);
    // @ts-ignore
    lottie.addEventListener?.('loopComplete', handleLoopComplete);

    return () => {
      // @ts-ignore
      lottie.removeEventListener?.('complete', handleComplete);
      // @ts-ignore
      lottie.removeEventListener?.('loopComplete', handleLoopComplete);
    };
  }, [onComplete, onLoopComplete]);

  return {
    lottieRef,
    containerRef,
    play,
    pause,
    stop,
    setSpeed,
    setDirection,
    goToAndPlay,
    goToAndStop,
  };
}
