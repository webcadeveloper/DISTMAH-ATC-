'use client';

import Link from 'next/link';
import MarkdownContent from '@/components/MarkdownContent';
import LessonProgress from '@/components/LessonProgress';
import VideoPlayer from '@/components/lesson-player/VideoPlayer';
import LessonNavigation from '@/components/lesson-player/LessonNavigation';
import ProgressSidebar from '@/components/lesson-player/ProgressSidebar';
import CourseProgressBar from '@/components/lesson-player/CourseProgressBar';
import TimeTracker from '@/components/lesson-player/TimeTracker';
import { useState } from 'react';

interface Lesson {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  slug: string;
  duration?: number;
  content?: string;
  excerpt?: string;
  videoUrl?: string;
}

interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
}

interface Course {
  id: string;
  slug: string;
  titulo: string;
  modules: Module[];
}

interface LessonPageClientProps {
  lesson: Lesson;
  course: Course;
  moduleId: string;
  lessonSlug: string;
  userId: string;
  courseId: string;
  lessonId: string;
  initialCompleted?: boolean;
}

export default function LessonPageClient({
  lesson,
  course,
  moduleId,
  lessonSlug,
  userId,
  lessonId,
  initialCompleted = false,
}: LessonPageClientProps) {

  const currentModule = course.modules.find((m) => m.id === moduleId);
  const currentLessonIndex = currentModule?.lessons.findIndex((l) => l.slug === lessonSlug) ?? -1;
  const previousLesson = currentModule && currentLessonIndex > 0 ? currentModule.lessons[currentLessonIndex - 1] || null : null;
  const nextLesson = currentModule && currentLessonIndex < currentModule.lessons.length - 1 ? currentModule.lessons[currentLessonIndex + 1] || null : null;

  const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedLessons = 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseProgressBar
        completedLessons={completedLessons}
        totalLessons={totalLessons}
        courseTitle={course.titulo}
      />

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/cursos" className="hover:text-blue-600 transition-colors">
              Cursos
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/cursos/${course.slug}`} className="hover:text-blue-600 transition-colors">
              {course.titulo}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/cursos/${course.slug}/${moduleId}/${lessonSlug}`} className="hover:text-blue-600 transition-colors">
              {currentModule?.title}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{lesson.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <ProgressSidebar
              courseSlug={course.slug}
              modules={course.modules}
              currentModuleId={moduleId}
              currentLessonSlug={lessonSlug}
              completedLessons={new Set()}
            />
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Módulo {currentModule?.number}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    Lección {lesson.number}
                  </span>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">{lesson.title}</h1>

                {lesson.excerpt && (
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{lesson.excerpt}</p>
                )}

                {lesson.duration && (
                  <div className="flex items-center gap-2 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">Duración estimada: {lesson.duration} minutos</span>
                  </div>
                )}
              </div>

              {lesson.content && (
                <div className="px-8 pb-8">
                  <VideoPlayer
                    videoUrl={lesson.videoUrl}
                    lessonTitle={lesson.title}
                  />

                  <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
                    <MarkdownContent content={lesson.content} />
                  </div>
                </div>
              )}

              <div className="px-8 pb-8">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Archivos de Ejercicio</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Descarga los archivos necesarios para completar los ejercicios de esta lección.
                      </p>
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                      >
                        Próximamente disponible
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <LessonProgress
                    lessonId={lessonId}
                    userId={userId}
                    initialCompleted={initialCompleted}
                  />
                </div>
              </div>
            </div>

            <LessonNavigation
              courseSlug={course.slug}
              moduleId={moduleId}
              previousLesson={previousLesson}
              nextLesson={nextLesson}
            />
          </div>
        </div>
      </div>

      <TimeTracker
        userId={userId}
        lessonId={lessonId}
        enabled={true}
      />
    </div>
  );
}
