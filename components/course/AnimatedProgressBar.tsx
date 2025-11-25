'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface AnimatedProgressBarProps {
  progress: number;
  className?: string;
  barClassName?: string;
  showLabel?: boolean;
  animated?: boolean;
  height?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

const heightConfig = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
};

const colorConfig = {
  blue: 'from-blue-500 to-blue-700',
  green: 'from-green-500 to-green-700',
  purple: 'from-purple-500 to-purple-700',
  orange: 'from-orange-500 to-orange-700',
};

export function AnimatedProgressBar({
  progress,
  className,
  barClassName,
  showLabel = false,
  animated = true,
  height = 'md',
  color = 'blue',
}: AnimatedProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Progreso
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {clampedProgress.toFixed(0)}%
          </span>
        </div>
      )}
      <div
        className={cn(
          'w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden',
          heightConfig[height]
        )}
      >
        {animated ? (
          <motion.div
            className={cn(
              'h-full bg-gradient-to-r rounded-full',
              colorConfig[color],
              barClassName
            )}
            initial={{ width: 0 }}
            animate={{ width: `${clampedProgress}%` }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          />
        ) : (
          <div
            className={cn(
              'h-full bg-gradient-to-r rounded-full transition-all duration-500',
              colorConfig[color],
              barClassName
            )}
            style={{ width: `${clampedProgress}%` }}
          />
        )}
      </div>
    </div>
  );
}
