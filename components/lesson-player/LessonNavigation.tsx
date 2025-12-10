'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Lesson } from '@/lib/types/course';

interface LessonNavigationProps {
  courseSlug: string;
  moduleId: string;
  previousLesson: Lesson | null;
  nextLesson: Lesson | null;
  onNavigate?: (direction: 'prev' | 'next') => void;
}

export default function LessonNavigation({
  courseSlug,
  moduleId,
  previousLesson,
  nextLesson,
  onNavigate,
}: LessonNavigationProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (event.key === 'ArrowLeft' && previousLesson) {
        window.location.href = `/cursos/${courseSlug}/${moduleId}/${previousLesson.slug}`;
        onNavigate?.('prev');
      } else if (event.key === 'ArrowRight' && nextLesson) {
        window.location.href = `/cursos/${courseSlug}/${moduleId}/${nextLesson.slug}`;
        onNavigate?.('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [courseSlug, moduleId, previousLesson, nextLesson, onNavigate]);

  return (
    <div className="flex items-center justify-between mt-8 gap-4">
      {previousLesson ? (
        <Link
          href={`/cursos/${courseSlug}/${moduleId}/${previousLesson.slug}`}
          className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-neutral-300 rounded-lg hover:border-blue-600 hover:bg-neutral-50 transition-all group flex-1 max-w-md"
        >
          <div className="flex-shrink-0">
            <svg
              className="w-6 h-6 text-neutral-400 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="text-left min-w-0">
            <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide mb-1">
              Lección Anterior
            </div>
            <div className="font-semibold text-neutral-900 truncate group-hover:text-blue-600 transition-colors">
              {previousLesson.title}
            </div>
            {previousLesson.duration && (
              <div className="text-xs text-neutral-500 mt-1">
                {previousLesson.duration} min
              </div>
            )}
          </div>
        </Link>
      ) : (
        <div className="flex-1 max-w-md" />
      )}

      {nextLesson ? (
        <Link
          href={`/cursos/${courseSlug}/${moduleId}/${nextLesson.slug}`}
          className="flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all group flex-1 max-w-md"
        >
          <div className="text-right min-w-0 flex-1">
            <div className="text-xs text-blue-100 font-medium uppercase tracking-wide mb-1">
              Lección Siguiente
            </div>
            <div className="font-semibold truncate">
              {nextLesson.title}
            </div>
            {nextLesson.duration && (
              <div className="text-xs text-blue-100 mt-1">
                {nextLesson.duration} min
              </div>
            )}
          </div>
          <div className="flex-shrink-0">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      ) : (
        <Link
          href={`/cursos/${courseSlug}`}
          className="flex items-center gap-2 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold flex-1 max-w-md justify-center"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Finalizar Curso
        </Link>
      )}
    </div>
  );
}
