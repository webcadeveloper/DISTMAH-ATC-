'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PlayCircle, Clock, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface CourseProgress {
  courseId: string;
  courseSlug: string;
  courseTitle: string;
  courseThumbnail: string | null;
  category: string;
  level: string;
  totalLessons: number;
  completedLessons: number;
  progressPercent: number;
  totalTimeSpent: number;
  enrolledAt: Date;
  startedAt: Date | null;
  completedAt: Date | null;
  lastLesson: {
    id: string;
    title: string;
    completedAt: Date | null;
  } | null;
  nextLesson: {
    id: string;
    moduleId: string;
    title: string;
  } | null;
}

interface ProgressData {
  summary: {
    totalCoursesEnrolled: number;
    totalCoursesCompleted: number;
    totalHoursStudied: number;
    coursesInProgress: number;
  };
  courses: CourseProgress[];
}

interface StudentDashboardClientProps {
  userId: string;
}

export default function StudentDashboardClient({ userId }: StudentDashboardClientProps) {
  const [data, setData] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProgress();
  }, [userId]);

  const fetchProgress = async () => {
    try {
      const response = await fetch(`/api/progress/${userId}`);
      if (response.ok) {
        const progressData = await response.json();
        setData(progressData);
      }
    } catch (error) {
      console.error('Error al cargar progreso:', error);
    } finally {
      setLoading(false);
    }
  };

  const getLastActivity = (course: CourseProgress) => {
    if (!course.lastLesson?.completedAt) return 'Sin actividad';
    const date = new Date(course.lastLesson.completedAt);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `Hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;
    if (diffHours > 0) return `Hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
    return 'Hace menos de 1 hora';
  };

  const getNextLessonSlug = (lesson: { id: string; title: string }) => {
    return lesson.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  if (loading) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
        </div>
        <div className="space-y-4">
          <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!data || data.courses.length === 0) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">Hola, Estudiante</h1>
          <p className="text-neutral-600">Inscríbete en un curso para comenzar tu aprendizaje.</p>
        </div>
        <Card>
          <CardContent className="p-12 text-center">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No tienes cursos inscritos</h3>
            <p className="text-gray-600 mb-6">Explora nuestro catálogo y comienza a aprender hoy</p>
            <Link href="/cursos">
              <Button className="bg-blue-600 hover:bg-blue-700">Ver Cursos Disponibles</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentCourse = data.courses.find((c) => c.progressPercent > 0 && c.progressPercent < 100) || data.courses[0];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Hola, Estudiante</h1>
        <p className="text-neutral-600">Continúa donde lo dejaste.</p>
      </div>

      {currentCourse && (
        <div className="mb-10">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Continuar Aprendiendo</h2>
          <Card className="bg-neutral-900 text-white border-none overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-900 opacity-90" />
            <div className="relative z-10 p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-grow">
                <div className="flex items-center gap-2 text-blue-300 mb-2 text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Última actividad: {getLastActivity(currentCourse)}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{currentCourse.courseTitle}</h3>
                {currentCourse.lastLesson && (
                  <p className="text-neutral-300 mb-6">Última lección: {currentCourse.lastLesson.title}</p>
                )}

                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-medium">Progreso del curso</span>
                  <span className="text-sm font-bold text-blue-400">{currentCourse.progressPercent}%</span>
                </div>
                <Progress value={currentCourse.progressPercent} className="h-2 bg-neutral-700 mb-6" />

                {currentCourse.nextLesson ? (
                  <Link
                    href={`/cursos/${currentCourse.courseSlug}/${currentCourse.nextLesson.moduleId}/${getNextLessonSlug(currentCourse.nextLesson)}`}
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                      <PlayCircle className="w-4 h-4 mr-2" /> Continuar Lección
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/cursos/${currentCourse.courseSlug}`}>
                    <Button className="bg-green-600 hover:bg-green-700 text-white border-none">
                      <Award className="w-4 h-4 mr-2" /> Ver Certificado
                    </Button>
                  </Link>
                )}
              </div>

              {currentCourse.courseThumbnail && (
                <div className="w-full md:w-64 aspect-video bg-neutral-800 rounded-lg overflow-hidden">
                  <img
                    src={currentCourse.courseThumbnail}
                    alt={currentCourse.courseTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-neutral-900">Mis Cursos</h2>
            <Link href="/estudiante/mis-cursos" className="text-sm text-blue-600 hover:underline">
              Ver todos
            </Link>
          </div>

          <div className="grid gap-4">
            {data.courses.slice(0, 3).map((course) => (
              <Card key={course.courseId} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex gap-4">
                  <div className="w-24 h-24 bg-neutral-100 rounded-md flex-shrink-0 overflow-hidden">
                    {course.courseThumbnail ? (
                      <img src={course.courseThumbnail} alt={course.courseTitle} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <BookOpen className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-neutral-900">{course.courseTitle}</h4>
                      <p className="text-sm text-neutral-500">Nivel {course.level}</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-neutral-500 mb-1">
                        <span>Progreso</span>
                        <span>{course.progressPercent}%</span>
                      </div>
                      <Progress value={course.progressPercent} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Mis Logros</h2>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">{data.summary.totalCoursesCompleted}</p>
                  <p className="text-sm text-neutral-500">Certificados Obtenidos</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">{data.summary.totalHoursStudied}h</p>
                  <p className="text-sm text-neutral-500">Horas de Aprendizaje</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">{data.summary.totalCoursesEnrolled}</p>
                  <p className="text-sm text-neutral-500">Cursos Inscritos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
