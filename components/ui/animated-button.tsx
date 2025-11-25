'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { VariantProps } from 'class-variance-authority';

export interface AnimatedButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withShimmer?: boolean;
  withScale?: boolean;
}

const MotionButton = motion.button;

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      className,
      variant,
      size,
      withShimmer = true,
      withScale = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <MotionButton
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          'relative overflow-hidden'
        )}
        whileHover={
          withScale
            ? {
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              }
            : undefined
        }
        whileTap={withScale ? { scale: 0.95 } : undefined}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17,
        }}
        {...(props as any)}
      >
        {withShimmer && (
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          />
        )}
        <span className="relative z-10">{children}</span>
      </MotionButton>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';
