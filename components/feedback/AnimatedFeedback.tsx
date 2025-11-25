'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import successAnimation from '@/public/lottie/success/celebration-checkmark.json';
import confettiAnimation from '@/public/lottie/celebration/confetti-celebration.json';
import { cn } from '@/lib/utils';

export type FeedbackType = 'success' | 'error' | 'celebration';

export interface AnimatedFeedbackProps {
  type: FeedbackType;
  message?: string;
  title?: string;
  visible?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onComplete?: () => void;
}

const sizeConfig = {
  sm: 80,
  md: 120,
  lg: 200,
};

const animations = {
  success: successAnimation,
  error: successAnimation,
  celebration: confettiAnimation,
};

export function AnimatedFeedback({
  type,
  message,
  title,
  visible = true,
  size = 'md',
  className,
  onComplete,
}: AnimatedFeedbackProps) {
  const dimension = sizeConfig[size];
  const animationData = animations[type];

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          className={cn(
            'flex flex-col items-center justify-center gap-4',
            className
          )}
        >
          <Lottie
            animationData={animationData}
            loop={type === 'celebration'}
            style={{ width: dimension, height: dimension }}
            onComplete={onComplete}
          />

          {title && (
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-gray-900 dark:text-white text-center"
            >
              {title}
            </motion.h3>
          )}

          {message && (
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-md"
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
