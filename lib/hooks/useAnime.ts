'use client';

import { useEffect, useRef } from 'react';
import { animate, createScope, type AnimationOptions } from 'animejs';

interface UseAnimeOptions extends Partial<AnimationOptions> {
  autoplay?: boolean;
}

export function useAnime<T extends HTMLElement = HTMLDivElement>(
  config: UseAnimeOptions,
  deps: any[] = []
) {
  const ref = useRef<T>(null);
  const scopeRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Crear scope para evitar conflictos en Next.js
    scopeRef.current = createScope({ root: ref }).add(() => {
      animate(ref.current!, config as any);
    });

    // Cleanup al desmontar
    return () => {
      if (scopeRef.current?.revert) {
        scopeRef.current.revert();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
