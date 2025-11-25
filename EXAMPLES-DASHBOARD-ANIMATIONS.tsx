/**
 * EJEMPLO COMPLETO: Dashboard Estudiante con Animaciones
 *
 * Este archivo muestra cómo implementar todas las animaciones
 * en un Dashboard de Estudiante real para DISTMAH ATC
 */

'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { AnimatedProgressBar } from '@/components/course/AnimatedProgressBar';
import { AnimatedButton } from '@/components/ui/animated-button';
import { AnimatedFeedback } from '@/components/feedback/AnimatedFeedback';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, Award, TrendingUp, Play } from 'lucide-react';

export default function DashboardEstudianteExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const stats = [
    {
      icon: BookOpen,
      label: 'Cursos Activos',
      value: 5,
      suffix: '',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: TrendingUp,
      label: 'Progreso Promedio',
      value: 75,
      suffix: '%',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Clock,
      label: 'Horas de Estudio',
      value: 32,
      suffix: 'h',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Award,
      label: 'Certificados',
      value: 2,
      suffix: '',
      color: 'from-orange-500 to-orange-700',
    },
  ];

  const courses = [
    {
      id: 1,
      title: 'AutoCAD 2026 - Curso Completo',
      progress: 85,
      totalLessons: 30,
      completedLessons: 26,
      nextLesson: 'Bloques Dinámicos Avanzados',
      image: '/cursos/autocad-2026.jpg',
    },
    {
      id: 2,
      title: 'Revit 2026 - Arquitectura BIM',
      progress: 65,
      totalLessons: 40,
      completedLessons: 26,
      nextLesson: 'Familias Paramétricas',
      image: '/cursos/revit-2026.jpg',
    },
    {
      id: 3,
      title: 'Civil 3D 2026 - Diseño de Carreteras',
      progress: 45,
      totalLessons: 35,
      completedLessons: 16,
      nextLesson: 'Alineamientos Horizontales',
      image: '/cursos/civil3d-2026.jpg',
    },
  ];

  const handleContinueCourse = (courseId: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to course
    }, 1500);
  };

  const handleCompleteCourse = () => {
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <ScrollReveal direction="up">
            <h1 className="text-3xl font-bold text-gray-900">Mi Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Bienvenido de nuevo, continúa tu aprendizaje
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter
                      to={stat.value}
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Cursos en Progreso */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Continúa donde lo dejaste
            </h2>

            <div className="space-y-4">
              {courses.map((course, index) => (
                <ScrollReveal key={course.id} delay={0.5 + index * 0.1}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Course Image */}
                        <div className="w-full md:w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0">
                          {/* Image placeholder */}
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <BookOpen className="w-12 h-12" />
                          </div>
                        </div>

                        {/* Course Info */}
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-1">
                                {course.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Lección {course.completedLessons} de {course.totalLessons}:{' '}
                                {course.nextLesson}
                              </p>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mb-4">
                            <AnimatedProgressBar
                              progress={course.progress}
                              showLabel={true}
                              color="blue"
                              height="md"
                            />
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-3">
                            <AnimatedButton
                              size="sm"
                              className="bg-primary-600 text-white"
                              onClick={() => handleContinueCourse(course.id)}
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                'Cargando...'
                              ) : (
                                <>
                                  <Play className="w-4 h-4 mr-2" />
                                  Continuar
                                </>
                              )}
                            </AnimatedButton>

                            {course.progress >= 80 && (
                              <AnimatedButton
                                size="sm"
                                variant="outline"
                                onClick={handleCompleteCourse}
                              >
                                <Award className="w-4 h-4 mr-2" />
                                Completar Curso
                              </AnimatedButton>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Recommended Courses */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cursos Recomendados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <ScrollReveal key={i} delay={0.9 + i * 0.1}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="h-40 bg-gray-200 rounded-lg mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">
                        Navisworks 2026 - Coordinación BIM
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        25 horas • Nivel Intermedio
                      </p>
                      <AnimatedButton size="sm" variant="outline" className="w-full">
                        Ver Curso
                      </AnimatedButton>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <LoadingSpinner size="lg" message="Cargando lección..." />
          </div>
        </div>
      )}

      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <AnimatedFeedback
              type="celebration"
              title="¡Felicidades!"
              message="Has completado el curso. Tu certificado está listo para descargar."
              size="lg"
            />
            <div className="mt-6 flex gap-3 justify-center">
              <AnimatedButton className="bg-primary-600 text-white">
                Descargar Certificado
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                onClick={() => setShowCelebration(false)}
              >
                Cerrar
              </AnimatedButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * NOTAS DE IMPLEMENTACIÓN:
 *
 * 1. Stats animados con AnimatedCounter
 * 2. ScrollReveal para todas las secciones
 * 3. Delay staggered para crear efecto cascada
 * 4. AnimatedProgressBar para progreso de cursos
 * 5. AnimatedButton para todas las acciones
 * 6. LoadingSpinner para estados de carga
 * 7. AnimatedFeedback para celebración de completar curso
 * 8. Hover effects en Cards
 *
 * PERFORMANCE:
 * - IntersectionObserver automático en ScrollReveal
 * - Animaciones optimizadas con framer-motion
 * - Sin re-renders innecesarios
 *
 * ACCESIBILIDAD:
 * - Respeta prefers-reduced-motion
 * - Focus states preservados
 * - ARIA labels apropiados
 */
