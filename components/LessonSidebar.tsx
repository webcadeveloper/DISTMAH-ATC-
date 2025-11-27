'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Lesson {
  id: string;
  moduleId: string;
  moduleNumber: number;
  moduleTitle: string;
  lessonNumber: number;
  title: string;
  duration: number;
  completed: boolean;
}

interface LessonSidebarProps {
  courseSlug: string;
  courseId: string;
  userId: string;
  currentLessonSlug: string;
}

export default function LessonSidebar({
  courseSlug,
  courseId,
  userId,
  currentLessonSlug,
}: LessonSidebarProps) {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progressPercent, setProgressPercent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, userId]);

  const fetchProgress = async () => {
    try {
      const response = await fetch(`/api/progress/${userId}/${courseId}`);
      if (response.ok) {
        const data = await response.json();
        setLessons(data.lessons || []);
        setProgressPercent(data.progressPercent || 0);
      }
    } catch (error) {
      console.error('Error al cargar progreso:', error);
    } finally {
      setLoading(false);
    }
  };

  const getLessonSlug = (lesson: Lesson) => {
    return lesson.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const groupedByModule = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.moduleId]) {
      acc[lesson.moduleId] = {
        moduleNumber: lesson.moduleNumber,
        moduleTitle: lesson.moduleTitle,
        lessons: [],
      };
    }
    acc[lesson.moduleId].lessons.push(lesson);
    return acc;
  }, {} as Record<string, { moduleNumber: number; moduleTitle: string; lessons: Lesson[] }>);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 sticky top-4">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
          <div className="h-2 bg-neutral-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-8 bg-neutral-200 rounded"></div>
            <div className="h-8 bg-neutral-200 rounded"></div>
            <div className="h-8 bg-neutral-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 sticky top-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-neutral-900">Progreso del Curso</h3>
          <span className="text-sm font-semibold text-blue-600">{progressPercent}%</span>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <h3 className="font-bold text-neutral-900 mb-4">Contenido del Curso</h3>
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {Object.values(groupedByModule).map((module) => (
          <div key={module.moduleNumber}>
            <h4 className="text-sm font-semibold text-neutral-900 mb-2">
              {module.moduleNumber}. {module.moduleTitle}
            </h4>
            <div className="space-y-1 ml-4">
              {module.lessons.map((lesson) => {
                const lessonSlug = getLessonSlug(lesson);
                const isCurrentLesson = lessonSlug === currentLessonSlug;

                return (
                  <Link
                    key={lesson.id}
                    href={`/cursos/${courseSlug}/${lesson.moduleId}/${lessonSlug}`}
                    className={`flex items-center gap-2 text-sm py-2 px-2 rounded transition-colors ${
                      isCurrentLesson
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-blue-600'
                    }`}
                  >
                    {lesson.completed ? (
                      <svg className="w-4 h-4 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 flex-shrink-0 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span className="flex-1">
                      {lesson.lessonNumber}. {lesson.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
