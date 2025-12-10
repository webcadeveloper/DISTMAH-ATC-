import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'full' | 'icon';
}

const sizeConfig = {
  sm: { width: 120, height: 32, fontSize: 'text-lg', iconSize: 24 },
  md: { width: 180, height: 48, fontSize: 'text-2xl', iconSize: 36 },
  lg: { width: 240, height: 64, fontSize: 'text-4xl', iconSize: 48 },
};

export function Logo({ size = 'md', className, variant = 'full' }: LogoProps) {
  const config = sizeConfig[size];

  if (variant === 'icon') {
    return (
      <svg
        width={config.iconSize}
        height={config.iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('flex-shrink-0', className)}
        aria-label="DISTMAH Logo"
      >
        {/* Cubo Autodesk isométrico */}
        <path
          d="M24 4L40 14V30L24 40L8 30V14L24 4Z"
          fill="#003366"
          stroke="#000000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 4L40 14L24 24L8 14L24 4Z"
          fill="#1F4E79"
          stroke="#000000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 24V40L40 30V14L24 24Z"
          fill="#2C2C2C"
          stroke="#000000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Letra D central */}
        <text
          x="24"
          y="28"
          fontSize="16"
          fontWeight="bold"
          fill="#FFFFFF"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          D
        </text>
      </svg>
    );
  }

  return (
    <div
      className={cn('flex items-center gap-3', className)}
      style={{ height: config.height }}
    >
      {/* Icono */}
      <svg
        width={config.iconSize}
        height={config.iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-label="DISTMAH Icon"
      >
        {/* Cubo Autodesk isométrico */}
        <path
          d="M24 4L40 14V30L24 40L8 30V14L24 4Z"
          fill="#003366"
          stroke="#000000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 4L40 14L24 24L8 14L24 4Z"
          fill="#1F4E79"
          stroke="#000000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 24V40L40 30V14L24 24Z"
          fill="#2C2C2C"
          stroke="#000000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Letra D central */}
        <text
          x="24"
          y="28"
          fontSize="16"
          fontWeight="bold"
          fill="#FFFFFF"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          D
        </text>
      </svg>

      {/* Texto DISTMAH */}
      <div className="flex flex-col justify-center">
        <span
          className={cn(
            'font-bold leading-none text-black',
            config.fontSize
          )}
          style={{ letterSpacing: '0.02em' }}
        >
          DISTMAH
        </span>
        <span
          className="text-xs font-medium text-neutral-600 leading-none mt-1"
          style={{ letterSpacing: '0.1em' }}
        >
          AUTODESK TRAINING
        </span>
      </div>
    </div>
  );
}
