'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import {
  BookOpen,
  Trophy,
  Calendar,
  Clock,
  Award,
  Download,
  TrendingUp,
  GraduationCap,
  BarChart3,
  ChevronRight,
  Users,
} from 'lucide-react';

export default function StudentDashboard() {
  const enrolledCourses = COURSES_2026.slice(0, 3).map((course, idx) => ({
    ...course,
    progress: [65, 42, 88][idx],
    lastLesson: [
      'Módulo 2, Lección 3',
      'Módulo 1, Lección 5',
      'Módulo 4, Lección 2',
    ][idx],
    hoursCompleted: [12, 8, 25][idx],
    totalHours: [30, 30, 30][idx],
  }));

  const stats = {
    completedCourses: 2,
    inProgressCourses: 3,
    totalHours: 127,
    averageGrade: 92,
  };

  const certificates = [
    {
      id: 1,
      courseName: 'AutoCAD 2026 - Nivel Básico',
      date: '2025-10-15',
      grade: 95,
    },
    {
      id: 2,
      courseName: 'Revit Architecture 2026 - Fundamentos',
      date: '2025-09-22',
      grade: 88,
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: 'Sesión en Vivo: Civil 3D - Diseño de Carreteras',
      date: '2025-11-26',
      time: '10:00 AM',
      instructor: 'Ing. Carlos Méndez',
    },
    {
      id: 2,
      title: 'Examen Final: Revit MEP Eléctricas',
      date: '2025-11-28',
      time: '2:00 PM',
      type: 'exam',
    },
    {
      id: 3,
      title: 'Workshop: BIM 360 Collaboration',
      date: '2025-12-01',
      time: '4:00 PM',
      instructor: 'Arq. María Torres',
    },
  ];

  const weeklyProgress = [
    { day: 'Lun', hours: 2 },
    { day: 'Mar', hours: 3 },
    { day: 'Mié', hours: 1.5 },
    { day: 'Jue', hours: 4 },
    { day: 'Vie', hours: 2.5 },
    { day: 'Sáb', hours: 5 },
    { day: 'Dom', hours: 1 },
  ];

  const maxHours = Math.max(...weeklyProgress.map((d) => d.hours));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Panel de Estudiante
          </h1>
          <p className="text-gray-600">
            Bienvenido de nuevo, continúa tu aprendizaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Cursos Completados
                  </p>
                  <p className="text-3xl font-bold text-black">
                    {stats.completedCourses}
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-full">
                  <Trophy className="w-6 h-6 text-gray-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">En Progreso</p>
                  <p className="text-3xl font-bold text-black">
                    {stats.inProgressCourses}
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-gray-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Horas Totales</p>
                  <p className="text-3xl font-bold text-black">
                    {stats.totalHours}
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-gray-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Promedio</p>
                  <p className="text-3xl font-bold text-black">
                    {stats.averageGrade}%
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-gray-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <BookOpen className="w-5 h-5" />
                  Mis Cursos Inscritos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div
                      key={course.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-12 h-12 text-gray-400" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-black mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {course.description.substring(0, 80)}...
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                            <Clock className="w-4 h-4" />
                            <span>
                              {course.hoursCompleted} / {course.totalHours}{' '}
                              horas
                            </span>
                            <span className="mx-2">•</span>
                            <span>{course.lastLesson}</span>
                          </div>
                          <div className="mb-3">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-600">
                                Progreso
                              </span>
                              <span className="text-sm font-semibold text-black">
                                {course.progress}%
                              </span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <div className="flex gap-2">
                            <Button
                              asChild
                              className="bg-[#003366] hover:bg-[#1F4E79] text-white"
                            >
                              <Link href={`/cursos/${course.slug}`}>
                                <span>Continuar Curso</span>
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Link>
                            </Button>
                            <Button variant="outline" className="border-gray-300">
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <BarChart3 className="w-5 h-5" />
                  Progreso Semanal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between gap-2 h-48">
                  {weeklyProgress.map((day, idx) => (
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div className="flex-grow w-full flex items-end">
                        <div
                          className="w-full bg-[#003366] hover:bg-[#1F4E79] transition-colors rounded-t"
                          style={{
                            height: `${(day.hours / maxHours) * 100}%`,
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-semibold text-black">
                          {day.hours}h
                        </p>
                        <p className="text-xs text-gray-600">{day.day}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Total esta semana:{' '}
                    <span className="font-semibold text-black">
                      {weeklyProgress.reduce((sum, d) => sum + d.hours, 0)} horas
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Calendar className="w-5 h-5" />
                  Próximas Clases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingClasses.map((event) => (
                    <div
                      key={event.id}
                      className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        {event.type === 'exam' ? (
                          <Award className="w-4 h-4 text-gray-600 mt-1" />
                        ) : (
                          <Users className="w-4 h-4 text-gray-600 mt-1" />
                        )}
                        <div className="flex-grow">
                          <p className="text-sm font-semibold text-black">
                            {event.title}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            {event.date} • {event.time}
                          </p>
                          {event.instructor && (
                            <p className="text-xs text-gray-600">
                              {event.instructor}
                            </p>
                          )}
                        </div>
                      </div>
                      {event.type === 'exam' && (
                        <Badge className="bg-gray-200 text-black hover:bg-gray-300">
                          Examen
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Award className="w-5 h-5" />
                  Certificados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <div className="bg-gray-100 p-2 rounded-full">
                          <Trophy className="w-4 h-4 text-gray-700" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-sm font-semibold text-black">
                            {cert.courseName}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Obtenido: {cert.date}
                          </p>
                          <p className="text-xs text-gray-600">
                            Calificación: {cert.grade}%
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-gray-300 text-black hover:bg-gray-50"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar PDF
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-gray-50">
              <CardHeader>
                <CardTitle className="text-sm text-black">
                  Acceso Rápido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start border-gray-300 hover:bg-white"
                >
                  <Link href="/cursos">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Explorar más cursos
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start border-gray-300 hover:bg-white"
                >
                  <Link href="/estudiante/perfil">
                    <Users className="w-4 h-4 mr-2" />
                    Mi perfil
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start border-gray-300 hover:bg-white"
                >
                  <Link href="/foro">
                    <Users className="w-4 h-4 mr-2" />
                    Foro comunitario
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
