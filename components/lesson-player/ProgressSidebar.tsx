'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Module } from '@/lib/types/course';

interface ProgressSidebarProps {
  courseSlug: string;
  modules: Module[];
  currentModuleId: string;
  currentLessonSlug: string;
  completedLessons?: Set<string>;
}

export default function ProgressSidebar({
  courseSlug,
  modules,
  currentModuleId,
  currentLessonSlug,
  completedLessons = new Set(),
}: ProgressSidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set([currentModuleId])
  );

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) {
        next.delete(moduleId);
      } else {
        next.add(moduleId);
      }
      return next;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="p-6 border-b border-neutral-200">
        <h3 className="font-bold text-neutral-900 text-lg">Contenido del Curso</h3>
      </div>

      <div className="p-4">
        {modules.map((module) => {
          const isExpanded = expandedModules.has(module.id);
          const isCurrentModule = module.id === currentModuleId;
          const completedCount = module.lessons.filter((l) =>
            completedLessons.has(`${module.id}-${l.slug}`)
          ).length;
          const totalLessons = module.lessons.length;
          const progressPercentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

          return (
            <div key={module.id} className="mb-4 last:mb-0">
              <button
                onClick={() => toggleModule(module.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  isCurrentModule
                    ? 'bg-blue-50 border-2 border-blue-200'
                    : 'hover:bg-neutral-50 border-2 border-transparent'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-neutral-500">
                        MÓDULO {module.number}
                      </span>
                      {progressPercentage === 100 && (
                        <svg
                          className="w-4 h-4 text-green-600 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-neutral-900 mt-1 line-clamp-2">
                      {module.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="text-xs text-neutral-500">
                        {completedCount}/{totalLessons} lecciones
                      </div>
                      <div className="text-xs text-neutral-500">
                        {module.duration}
                      </div>
                    </div>
                    {progressPercentage > 0 && progressPercentage < 100 && (
                      <div className="mt-2 bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-blue-600 h-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    )}
                  </div>
                  <svg
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${
                      isExpanded ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="mt-2 ml-3 space-y-1">
                  {module.lessons.map((lesson, index) => {
                    const isCompleted = completedLessons.has(`${module.id}-${lesson.slug}`);
                    const isCurrent = lesson.slug === currentLessonSlug && isCurrentModule;

                    return (
                      <Link
                        key={lesson.id}
                        href={`/cursos/${courseSlug}/${module.id}/${lesson.slug}`}
                        className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                          isCurrent
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                          {isCompleted ? (
                            <svg
                              className={`w-5 h-5 ${isCurrent ? 'text-white' : 'text-green-600'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-medium ${
                                isCurrent
                                  ? 'border-white text-white'
                                  : 'border-neutral-300 text-neutral-500'
                              }`}
                            >
                              {index + 1}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-medium line-clamp-2 ${
                            isCurrent ? 'text-white' : 'text-neutral-900'
                          }`}>
                            {lesson.title}
                          </div>
                          {lesson.duration && (
                            <div className={`text-xs mt-1 ${
                              isCurrent ? 'text-blue-100' : 'text-neutral-500'
                            }`}>
                              {lesson.duration} min
                            </div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
