'use client';

import { useState } from 'react';
import { toast } from 'sonner';

interface LessonProgressProps {
  lessonId: string;
  userId: string;
  initialCompleted?: boolean;
  onComplete?: (progressPercent: number) => void;
}

export default function LessonProgress({
  lessonId,
  userId,
  initialCompleted = false,
  onComplete,
}: LessonProgressProps) {
  const [completed, setCompleted] = useState(initialCompleted);
  const [loading, setLoading] = useState(false);

  const handleMarkComplete = async () => {
    if (completed) return;

    setLoading(true);
    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          lessonId,
          timeSpent: 0,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al marcar como completada');
      }

      const data = await response.json();
      setCompleted(true);
      toast.success('Lección completada', {
        description: `Progreso del curso: ${data.progressPercent}%`,
      });

      if (onComplete) {
        onComplete(data.progressPercent);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al marcar la lección como completada');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleMarkComplete}
      disabled={loading || completed}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
        completed
          ? 'bg-green-100 text-green-700 border-2 border-green-400'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {completed ? (
        <>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Completada
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {loading ? 'Guardando...' : 'Marcar como Completada'}
        </>
      )}
    </button>
  );
}
