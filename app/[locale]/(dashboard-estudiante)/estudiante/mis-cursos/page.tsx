'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, PlayCircle, Clock, User, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';

interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: string;
  level: string;
  duration?: number;
  image?: string;
  thumbnail?: string;
  instructor: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  modules: Array<{
    id: string;
    lessons: Array<{
      id: string;
      title: string;
      duration?: number;
    }>;
  }>;
}

interface Enrollment {
  id: string;
  enrolledAt: string;
  progressPercent: number;
  status: string;
  course: Course;
}

export default function MisCursosPage() {
  const { data: session } = useSession();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.id) {
      loadEnrollments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.id]);

  const loadEnrollments = async () => {
    try {
      const response = await fetch(`/api/enrollments/${session?.user?.id}`);
      if (!response.ok) throw new Error('Error al cargar cursos');
      const data = await response.json();
      setEnrollments(data.enrollments || []);
    } catch {
      toast.error('Error al cargar tus cursos');
    } finally {
      setLoading(false);
    }
  };

  const getTotalLessons = (course: Course) => {
    return course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
  };

  const getCompletedLessons = (enrollment: Enrollment) => {
    const total = getTotalLessons(enrollment.course);
    return Math.round((enrollment.progressPercent / 100) * total);
  };

  const getLastActivity = (enrolledAt: string) => {
    const date = new Date(enrolledAt);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
    return `Hace ${Math.floor(diffDays / 30)} meses`;
  };

  const cursosEnProgreso = enrollments.filter(e => e.progressPercent > 0 && e.progressPercent < 100);
  const cursosCompletados = enrollments.filter(e => e.progressPercent >= 100);
  const cursosNoIniciados = enrollments.filter(e => e.progressPercent === 0);

  if (loading) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Mis Cursos</h1>
          <p className="text-neutral-600">Gestiona todos tus cursos desde aquí</p>
        </div>
        <Card>
          <CardContent className="p-12 text-center">
            <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
            <p className="text-neutral-600">Cargando tus cursos...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (enrollments.length === 0) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Mis Cursos</h1>
          <p className="text-neutral-600">Gestiona todos tus cursos desde aquí</p>
        </div>

        <Card>
          <CardContent className="p-12 text-center">
            <BookOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-neutral-900 mb-2">No tienes cursos inscritos</h3>
            <p className="text-neutral-600 mb-6">Explora nuestro catálogo y comienza a aprender hoy</p>
            <Link href="/cursos">
              <Button className="bg-blue-600 hover:bg-blue-700">Ver Cursos Disponibles</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderCourseCard = (enrollment: Enrollment, showContinue: boolean = true, isCompleted: boolean = false) => {
    const totalLessons = getTotalLessons(enrollment.course);
    const completedLessons = getCompletedLessons(enrollment);

    return (
      <Card key={enrollment.id} className="hover:shadow-lg transition-all border border-neutral-200">
        <CardContent className="p-0">
          <div className="h-40 bg-neutral-100 flex items-center justify-center relative">
            {enrollment.course.thumbnail || enrollment.course.image ? (
              <img
                src={enrollment.course.thumbnail || enrollment.course.image}
                alt={enrollment.course.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <BookOpen className="w-16 h-16 text-neutral-400" />
            )}
            {isCompleted && (
              <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                Completado
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="mb-2">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {enrollment.course.level}
              </span>
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">{enrollment.course.title}</h3>
            <div className="flex items-center text-sm text-neutral-600 mb-4">
              <User className="w-4 h-4 mr-1" />
              <span>{enrollment.course.instructor.name}</span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs text-neutral-600 mb-1">
                <span>{completedLessons} de {totalLessons} lecciones</span>
                <span className={`font-semibold ${isCompleted ? 'text-green-600' : ''}`}>
                  {enrollment.progressPercent}%
                </span>
              </div>
              <Progress value={enrollment.progressPercent} className={`h-2 ${isCompleted ? 'bg-green-100' : ''}`} />
            </div>

            {isCompleted ? (
              <Link href="/estudiante/certificados">
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                  Ver Certificado
                </Button>
              </Link>
            ) : showContinue ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-neutral-500">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{getLastActivity(enrollment.enrolledAt)}</span>
                </div>
                <Link href={`/cursos/${enrollment.course.slug}`}>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <PlayCircle className="w-4 h-4 mr-1" />
                    Continuar
                  </Button>
                </Link>
              </div>
            ) : (
              <Link href={`/cursos/${enrollment.course.slug}`}>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  Comenzar Curso
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Mis Cursos</h1>
        <p className="text-neutral-600">Gestiona todos tus cursos desde aquí</p>
      </div>

      {cursosEnProgreso.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">En Progreso ({cursosEnProgreso.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosEnProgreso.map((enrollment) => renderCourseCard(enrollment, true, false))}
          </div>
        </div>
      )}

      {cursosCompletados.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Completados ({cursosCompletados.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosCompletados.map((enrollment) => renderCourseCard(enrollment, false, true))}
          </div>
        </div>
      )}

      {cursosNoIniciados.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Por Iniciar ({cursosNoIniciados.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosNoIniciados.map((enrollment) => renderCourseCard(enrollment, false, false))}
          </div>
        </div>
      )}
    </div>
  );
}
