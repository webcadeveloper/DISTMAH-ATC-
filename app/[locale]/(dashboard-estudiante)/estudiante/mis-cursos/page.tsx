'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, PlayCircle, Clock, User } from 'lucide-react';
import Link from 'next/link';

const mockCourses = [
  {
    id: '1',
    slug: 'civil-3d-2026-basico',
    title: 'Civil 3D 2026 - Curso Básico',
    instructor: 'Ing. Juan Pérez',
    thumbnail: null,
    category: 'AutoCAD Civil 3D',
    level: 'Básico',
    progress: 65,
    totalLessons: 30,
    completedLessons: 20,
    lastActivity: 'Hace 2 días',
  },
  {
    id: '2',
    slug: 'revit-2026-arquitectura',
    title: 'Revit 2026 - Arquitectura',
    instructor: 'Arq. María González',
    thumbnail: null,
    category: 'Revit',
    level: 'Intermedio',
    progress: 30,
    totalLessons: 25,
    completedLessons: 8,
    lastActivity: 'Hace 1 semana',
  },
  {
    id: '3',
    slug: 'autocad-2026-avanzado',
    title: 'AutoCAD 2026 - Nivel Avanzado',
    instructor: 'Ing. Carlos Rodríguez',
    thumbnail: null,
    category: 'AutoCAD',
    level: 'Avanzado',
    progress: 100,
    totalLessons: 20,
    completedLessons: 20,
    lastActivity: 'Completado',
  },
  {
    id: '4',
    slug: 'civil-3d-2026-avanzado',
    title: 'Civil 3D 2026 - Curso Avanzado',
    instructor: 'Ing. Juan Pérez',
    thumbnail: null,
    category: 'AutoCAD Civil 3D',
    level: 'Avanzado',
    progress: 15,
    totalLessons: 30,
    completedLessons: 5,
    lastActivity: 'Hace 3 días',
  },
];

export default function MisCursosPage() {
  const cursosEnProgreso = mockCourses.filter(c => c.progress > 0 && c.progress < 100);
  const cursosCompletados = mockCourses.filter(c => c.progress === 100);
  const cursosNoIniciados = mockCourses.filter(c => c.progress === 0);

  if (mockCourses.length === 0) {
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
            {cursosEnProgreso.map((curso) => (
              <Card key={curso.id} className="hover:shadow-lg transition-all border border-neutral-200">
                <CardContent className="p-0">
                  <div className="h-40 bg-neutral-100 flex items-center justify-center">
                    {curso.thumbnail ? (
                      <img src={curso.thumbnail} alt={curso.title} className="w-full h-full object-cover" />
                    ) : (
                      <BookOpen className="w-16 h-16 text-neutral-400" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {curso.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{curso.title}</h3>
                    <div className="flex items-center text-sm text-neutral-600 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span>{curso.instructor}</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-neutral-600 mb-1">
                        <span>{curso.completedLessons} de {curso.totalLessons} lecciones</span>
                        <span className="font-semibold">{curso.progress}%</span>
                      </div>
                      <Progress value={curso.progress} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-neutral-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{curso.lastActivity}</span>
                      </div>
                      <Link href={`/cursos/${curso.slug}`}>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <PlayCircle className="w-4 h-4 mr-1" />
                          Continuar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {cursosCompletados.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Completados ({cursosCompletados.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosCompletados.map((curso) => (
              <Card key={curso.id} className="hover:shadow-lg transition-all border border-neutral-200">
                <CardContent className="p-0">
                  <div className="h-40 bg-neutral-100 flex items-center justify-center relative">
                    {curso.thumbnail ? (
                      <img src={curso.thumbnail} alt={curso.title} className="w-full h-full object-cover" />
                    ) : (
                      <BookOpen className="w-16 h-16 text-neutral-400" />
                    )}
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      ✓ Completado
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {curso.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{curso.title}</h3>
                    <div className="flex items-center text-sm text-neutral-600 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span>{curso.instructor}</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-neutral-600 mb-1">
                        <span>{curso.totalLessons} lecciones</span>
                        <span className="font-semibold text-green-600">100%</span>
                      </div>
                      <Progress value={100} className="h-2 bg-green-100" />
                    </div>

                    <Link href={`/estudiante/certificados`}>
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        Ver Certificado
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {cursosNoIniciados.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Por Iniciar ({cursosNoIniciados.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosNoIniciados.map((curso) => (
              <Card key={curso.id} className="hover:shadow-lg transition-all border border-neutral-200">
                <CardContent className="p-0">
                  <div className="h-40 bg-neutral-100 flex items-center justify-center">
                    {curso.thumbnail ? (
                      <img src={curso.thumbnail} alt={curso.title} className="w-full h-full object-cover" />
                    ) : (
                      <BookOpen className="w-16 h-16 text-neutral-400" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {curso.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{curso.title}</h3>
                    <div className="flex items-center text-sm text-neutral-600 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span>{curso.instructor}</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-neutral-600 mb-1">
                        <span>{curso.totalLessons} lecciones</span>
                        <span className="font-semibold">0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>

                    <Link href={`/cursos/${curso.slug}`}>
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        Comenzar Curso
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
