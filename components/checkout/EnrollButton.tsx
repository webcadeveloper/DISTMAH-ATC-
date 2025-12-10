'use client';

import { useRouter } from 'next/navigation';
import { Course } from '@/lib/types';

interface EnrollButtonProps {
  course: Course;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function EnrollButton({
  course,
  className = '',
  variant = 'primary',
}: EnrollButtonProps) {
  const router = useRouter();

  const handleEnroll = () => {
    router.push(`/checkout/${course.id}`);
  };

  const baseStyles = 'px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-lg hover:shadow-xl',
    outline: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
  };

  return (
    <button
      onClick={handleEnroll}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      Inscribirme Ahora
    </button>
  );
}
