'use client';

import { useEffect, useRef } from 'react';
import { animate, createScope, spring } from 'animejs';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

export function AnimatedLogo({
  size = 'md',
  className = '',
  animated = true,
}: AnimatedLogoProps) {
  const ref = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  useEffect(() => {
    if (!ref.current || !animated) return;

    const scope = createScope({ root: ref }).add(() => {
      // Animación de entrada
      animate('.logo-text', {
        translateX: [-20, 0],
        opacity: [0, 1],
        duration: 800,
        ease: 'outExpo',
      });

      animate('.logo-icon', {
        rotate: [180, 0],
        scale: [0, 1],
        duration: 1000,
        ease: spring({ bounce: 0.5 }),
      });
    });

    return () => scope.revert();
  }, [animated]);

  return (
    <div ref={ref} className={`flex items-center gap-3 ${className}`}>
      {/* Ícono Autodesk-style */}
      <div className="logo-icon">
        <svg
          className={sizeClasses[size]}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#0696D7" />
          <path
            d="M12 18L24 12L36 18V30L24 36L12 30V18Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M24 12V24M24 24L36 30M24 24L12 30"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Texto DISTMAH */}
      <div className="logo-text flex flex-col">
        <span className="text-xl font-bold text-black dark:text-white">
          DISTMAH
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          Autodesk Training Center
        </span>
      </div>
    </div>
  );
}
