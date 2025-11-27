'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PlayCircle, Clock, Award, BookOpen, Radio, Video } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

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

interface LiveClassInfo {
  courseId: string;
  courseSlug: string;
  courseTitle: string;
  isLive: boolean;
  nextClass: string | null;
  teamsUrl: string | null;
}

interface StudentDashboardClientProps {
  userId: string;
}

export default function StudentDashboardClient({ userId }: StudentDashboardClientProps) {
  const [data, setData] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(true);
  const [liveClasses, setLiveClasses] = useState<LiveClassInfo[]>([]);

  useEffect(() => {
    fetchProgress();
    const interval = setInterval(fetchLiveClasses, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const fetchProgress = async () => {
    try {
      const response = await fetch(`/api/progress/${userId}`);
      if (response.ok) {
        const progressData = await response.json();
        setData(progressData);
        fetchLiveClassesForCourses(progressData.courses);
      }
    } catch (error) {
      console.error('Error al cargar progreso:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLiveClasses = async () => {
    if (data?.courses) {
      fetchLiveClassesForCourses(data.courses);
    }
  };

  const fetchLiveClassesForCourses = async (courses: CourseProgress[]) => {
    const liveInfo: LiveClassInfo[] = [];
    for (const course of courses) {
      try {
        const res = await fetch(`/api/courses/by-slug/${course.courseSlug}`);
        if (res.ok) {
          const courseData = await res.json();
          const scheduleRes = await fetch(`/api/courses/${courseData.id}/schedule`);
          if (scheduleRes.ok) {
            const scheduleData = await scheduleRes.json();
            if (scheduleData.schedule) {
              liveInfo.push({
                courseId: course.courseId,
                courseSlug: course.courseSlug,
                courseTitle: course.courseTitle,
                isLive: scheduleData.isLive,
                nextClass: scheduleData.nextClass,
                teamsUrl: scheduleData.schedule.teamsUrl,
              });
            }
          }
        }
      } catch (error) {
        console.error('Error checking live status:', error);
      }
    }
    setLiveClasses(liveInfo);
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
      <div className="min-h-screen bg-white dark:bg-neutral-900 p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="h-8 bg-neutral-200 dark:bg-neutral-700 rounded w-64 mb-2 animate-pulse"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-48 animate-pulse"></div>
        </div>
        <div className="space-y-4">
          <div className="h-64 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
          <div className="h-32 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!data || data.courses.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Hola, Estudiante</h1>
          <p className="text-neutral-600 dark:text-neutral-300">Inscríbete en un curso para comenzar tu aprendizaje.</p>
        </div>
        <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
          <CardContent className="p-12 text-center">
            <BookOpen className="w-16 h-16 text-neutral-300 dark:text-neutral-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">No tienes cursos inscritos</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">Explora nuestro catálogo y comienza a aprender hoy</p>
            <Link href="/cursos">
              <Button className="bg-blue-600 hover:bg-blue-700">Ver Cursos Disponibles</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentCourse = data.courses.find((c) => c.progressPercent > 0 && c.progressPercent < 100) || data.courses[0];

  const activeLiveClass = liveClasses.find((lc) => lc.isLive);
  const upcomingClass = liveClasses.find((lc) => !lc.isLive && lc.nextClass);

  const formatNextClass = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return `Hoy a las ${date.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}`;
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return `Mañana a las ${date.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}`;
    }
    return date.toLocaleDateString('es', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Hola, Estudiante</h1>
          <p className="text-neutral-600 dark:text-neutral-300">Continúa donde lo dejaste.</p>
        </div>
        <ThemeToggle />
      </div>

      {activeLiveClass && (
        <div className="mb-6">
          <Card className="bg-red-600 text-white border-none overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Radio className="w-6 h-6 animate-pulse" />
                    <Badge className="bg-white text-red-600 font-bold">EN VIVO</Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{activeLiveClass.courseTitle}</h3>
                    <p className="text-red-100">Tu clase está en progreso ahora mismo</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href={`/cursos/${activeLiveClass.courseSlug}/clase-en-vivo`}>
                    <Button className="bg-white text-red-600 hover:bg-red-50">
                      <Video className="w-4 h-4 mr-2" /> Ver en DISTMAH
                    </Button>
                  </Link>
                  {activeLiveClass.teamsUrl && (
                    <a href={activeLiveClass.teamsUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-white text-white hover:bg-red-700">
                        Abrir en Teams
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!activeLiveClass && upcomingClass && upcomingClass.nextClass && (
        <div className="mb-6">
          <Card className="bg-blue-900 text-white border-none overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6" />
                  <div>
                    <h3 className="text-lg font-bold">Próxima clase: {upcomingClass.courseTitle}</h3>
                    <p className="text-blue-200">{formatNextClass(upcomingClass.nextClass)}</p>
                  </div>
                </div>
                <Link href={`/cursos/${upcomingClass.courseSlug}/clase-en-vivo`}>
                  <Button variant="outline" className="border-white text-white hover:bg-blue-800">
                    Ver horario
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentCourse && (
        <div className="mb-10">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Continuar Aprendiendo</h2>
          <Card className="bg-neutral-900 dark:bg-neutral-800 text-white border-none overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-900 dark:from-blue-950 dark:to-neutral-900 opacity-90" />
            <div className="relative z-10 p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-grow">
                <div className="flex items-center gap-2 text-blue-300 dark:text-blue-400 mb-2 text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Última actividad: {getLastActivity(currentCourse)}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{currentCourse.courseTitle}</h3>
                {currentCourse.lastLesson && (
                  <p className="text-neutral-300 dark:text-neutral-400 mb-6">Última lección: {currentCourse.lastLesson.title}</p>
                )}

                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-medium">Progreso del curso</span>
                  <span className="text-sm font-bold text-blue-400">{currentCourse.progressPercent}%</span>
                </div>
                <Progress value={currentCourse.progressPercent} className="h-2 bg-neutral-200 dark:bg-neutral-700 mb-6" />

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
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Mis Cursos</h2>
            <Link href="/estudiante/mis-cursos" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Ver todos
            </Link>
          </div>

          <div className="grid gap-4">
            {data.courses.slice(0, 3).map((course) => (
              <Card key={course.courseId} className="hover:shadow-md transition-shadow bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                <CardContent className="p-4 flex gap-4">
                  <div className="w-24 h-24 bg-neutral-100 dark:bg-neutral-700 rounded-md flex-shrink-0 overflow-hidden">
                    {course.courseThumbnail ? (
                      <img src={course.courseThumbnail} alt={course.courseTitle} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-400 dark:text-neutral-500">
                        <BookOpen className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-white">{course.courseTitle}</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Nivel {course.level}</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                        <span>Progreso</span>
                        <span>{course.progressPercent}%</span>
                      </div>
                      <Progress value={course.progressPercent} className="h-1.5 bg-neutral-200 dark:bg-neutral-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Mis Logros</h2>
          <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">{data.summary.totalCoursesCompleted}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Certificados Obtenidos</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">{data.summary.totalHoursStudied}h</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Horas de Aprendizaje</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">{data.summary.totalCoursesEnrolled}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Cursos Inscritos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
