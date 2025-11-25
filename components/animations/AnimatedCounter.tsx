'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import anime from 'animejs';
import { cn } from '@/lib/utils';

export interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  separator?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
  separator = ',',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;

    const obj = { value: from };

    anime({
      targets: obj,
      value: to,
      duration,
      easing: 'easeOutExpo',
      update() {
        setCount(obj.value);
      },
    });
  }, [isInView, from, to, duration]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    return parts.join('.');
  };

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}
