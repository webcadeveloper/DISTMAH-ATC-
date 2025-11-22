'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { animate, createScope, spring } from 'animejs';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
  variant?: 'full' | 'footer';
}

export function AnimatedLogo({
  size = 'md',
  className = '',
  animated = true,
  variant = 'full',
}: AnimatedLogoProps) {
  const ref = useRef<HTMLDivElement>(null);

  const sizeConfig = {
    sm: { height: 32, width: 120 },
    md: { height: 48, width: 180 },
    lg: { height: 64, width: 240 },
  };

  const config = sizeConfig[size];

  useEffect(() => {
    if (!ref.current || !animated) return;

    const scope = createScope({ root: ref }).add(() => {
      // Animación de entrada del logo
      animate('.animated-logo-img', {
        scale: [0, 1],
        opacity: [0, 1],
        duration: 1000,
        ease: spring({ bounce: 0.4 }),
      });
    });

    return () => scope.revert();
  }, [animated]);

  return (
    <div ref={ref} className={`flex items-center ${className}`}>
      <div className="animated-logo-img">
        <Image
          src={variant === 'footer' ? '/images/foot_logo.png' : '/images/logo.png'}
          alt="DISTMAH - Grupo Distribuidora de Materiales de Honduras"
          width={config.width}
          height={config.height}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
