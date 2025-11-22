'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';

interface AnimatedElementProps {
  children: ReactNode;
  animation: any;
  className?: string;
  delay?: number;
  trigger?: 'mount' | 'hover' | 'scroll';
}

export function AnimatedElement({
  children,
  animation,
  className = '',
  delay = 0,
  trigger = 'mount',
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) return;

    scopeRef.current = createScope({ root: ref });

    const runAnimation = () => {
      scopeRef.current.add(() => {
        const animConfig: any = {
          ...animation,
          delay: (animation as any).delay || delay,
        };
        animate(ref.current!, animConfig);
      });
    };

    if (trigger === 'mount') {
      runAnimation();
    } else if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }

    return () => {
      if (scopeRef.current?.revert) {
        scopeRef.current.revert();
      }
    };
  }, [animation, delay, trigger]);

  const handleMouseEnter = () => {
    if (trigger === 'hover' && scopeRef.current) {
      scopeRef.current.add(() => {
        animate(ref.current!, animation);
      });
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
    >
      {children}
    </div>
  );
}
