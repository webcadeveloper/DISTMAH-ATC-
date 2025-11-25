'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Clock,
  BookOpen,
  Award,
  CheckCircle,
  Star,
  Users,
  Calendar,
  GraduationCap,
  FileText,
  ChevronDown,
  ChevronUp,
  Key,
  Globe,
  Laptop,
} from 'lucide-react';
import { AnimatedElement } from '@/components/animations/AnimatedElement';
import { motion } from 'framer-motion';

interface CourseDetailClientProps {
  course: Course;
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const handleEnrollClick = () => {
    setShowEnrollmentForm(true);
    // Scroll to enrollment form
    setTimeout(() => {
      document.getElementById('enrollment-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Course Info */}
            <div>
              <AnimatedElement animation={{ translateX: [-50, 0], opacity: [0, 1] }}>
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary-600 text-white">
                    {course.version === '2026' ? 'NUEVO 2026' : course.version}
                  </Badge>
                  <Badge variant="secondary">{course.level}</Badge>
                  <Badge variant="outline" className="border-white/30 text-white">
                    {course.category}
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {course.title}
                </h1>

                <p className="text-xl text-neutral-300 mb-6">{course.subtitle}</p>

                <div className="flex items-center gap-6 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                    <span className="font-bold">{course.rating}</span>
                    <span className="text-neutral-400">({course.reviewsCount} reseñas)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-neutral-400" />
                    <span>{course.enrollmentCount}+ estudiantes</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-neutral-400" />
                    <span>{course.duration} horas de contenido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-neutral-400" />
                    <span>{course.sessions} sesiones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-neutral-400" />
                    <span>Actualizado {new Date(course.lastUpdated).toLocaleDateString('es')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-primary-400" />
                  <span className="text-neutral-300">Instructor: {course.instructor}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg h-14"
                    onClick={handleEnrollClick}
                  >
                    Inscribirme Ahora - ${course.price}
                  </Button>
                  <Link href="#curriculum">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 h-14"
                    >
                      Ver Contenido
                    </Button>
                  </Link>
                </div>
              </AnimatedElement>
            </div>

            {/* Right Column - Course Image */}
            <div>
              <AnimatedElement animation={{ translateX: [50, 0], opacity: [0, 1] }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full grid grid-cols-4 h-auto">
                <TabsTrigger value="overview">Descripción</TabsTrigger>
                <TabsTrigger value="curriculum">Contenido</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Descripción del Curso</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p className="text-gray-700 whitespace-pre-line">{course.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Objetivos de Aprendizaje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisitos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.prerequisites.map((prerequisite, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{prerequisite}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Habilidades que Desarrollarás</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-6" id="curriculum">
                <Card>
                  <CardHeader>
                    <CardTitle>Contenido del Curso</CardTitle>
                    <p className="text-sm text-gray-500">
                      {course.syllabus?.length || 0} módulos • {course.duration} horas totales
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {course.syllabus?.map((module, index) => (
                        <div key={module.id} className="border rounded-lg">
                          <button
                            onClick={() => toggleModule(module.id)}
                            className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <span className="font-bold text-gray-900">
                                Módulo {module.number}
                              </span>
                              <h3 className="font-semibold text-left">{module.title}</h3>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-500">
                                {module.lessons.length} lecciones • {module.duration}h
                              </span>
                              {expandedModule === module.id ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5" />
                              )}
                            </div>
                          </button>

                          {expandedModule === module.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="border-t bg-gray-50"
                            >
                              <div className="p-4 space-y-3">
                                <p className="text-gray-600 mb-4">{module.description}</p>
                                {module.lessons.map((lesson) => (
                                  <div
                                    key={lesson.id}
                                    className="flex items-center justify-between py-2 pl-4"
                                  >
                                    <div className="flex items-center gap-3">
                                      <BookOpen className="w-4 h-4 text-gray-400" />
                                      <span className="text-sm text-gray-700">{lesson.title}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <Badge variant="outline" className="text-xs">
                                        {lesson.type}
                                      </Badge>
                                      <span className="text-xs text-gray-500">
                                        {lesson.duration} min
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sobre el Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                        <GraduationCap className="w-10 h-10 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{course.instructor}</h3>
                        <p className="text-gray-600 mb-4">Autodesk Certified Instructor (ACI)</p>
                        <p className="text-gray-700">
                          Instructor certificado por Autodesk con años de experiencia en la
                          industria y la docencia. Especializado en software de diseño y BIM.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Reseñas de Estudiantes</CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-6 h-6 text-amber-400 fill-current" />
                        <span className="text-2xl font-bold">{course.rating}</span>
                      </div>
                      <span className="text-gray-500">
                        Basado en {course.reviewsCount} reseñas
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Las reseñas estarán disponibles próximamente.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Licencia A1 Educacional */}
            <Card className="border-primary-200 bg-primary-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary-900">
                  <Key className="w-6 h-6" />
                  Licencia Educacional Incluida
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-primary-200">
                  <h4 className="font-bold text-primary-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Autodesk Education License (A1)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Acceso completo a {course.software}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Licencia válida por 1 año</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Software 100% legal y actualizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Uso ilimitado para prácticas educativas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>Sin marca de agua educacional</span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600 italic">
                  * La licencia A1 te proporciona acceso completo al software de Autodesk para
                  uso educativo, permitiéndote practicar sin limitaciones.
                </p>
              </CardContent>
            </Card>

            {/* Precio y CTA */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-sm text-gray-500 line-through block">
                    ${(course.price * 1.3).toFixed(0)}
                  </span>
                  <span className="text-4xl font-bold text-gray-900">${course.price}</span>
                  <span className="text-sm text-gray-500 block mt-1">Precio especial 2026</span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold"
                  onClick={handleEnrollClick}
                >
                  Inscribirme Ahora
                </Button>
                <p className="text-xs text-center text-gray-500 mt-3">
                  Garantía de satisfacción de 30 días
                </p>
              </CardContent>
            </Card>

            {/* Incluye */}
            <Card>
              <CardHeader>
                <CardTitle>Este curso incluye:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Acceso 100% online</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{course.duration} horas de video bajo demanda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Laptop className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Licencia educacional A1 de Autodesk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Material descargable y ejercicios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Certificado de finalización: {course.certification}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Soporte del instructor</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enrollment Section */}
        {showEnrollmentForm && (
          <div id="enrollment-section" className="mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Formulario de Inscripción</CardTitle>
                <p className="text-gray-600">
                  Completa tus datos para inscribirte en {course.title}
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Apellido
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      País
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                      <option value="VE">Venezuela</option>
                      <option value="CO">Colombia</option>
                      <option value="MX">México</option>
                      <option value="ES">España</option>
                      <option value="AR">Argentina</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ¿Tienes experiencia previa con {course.software}?
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                      <option value="none">Sin experiencia</option>
                      <option value="basic">Básica</option>
                      <option value="intermediate">Intermedia</option>
                      <option value="advanced">Avanzada</option>
                    </select>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-900 mb-2">Resumen del Pago</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Curso: {course.title}</span>
                        <span className="font-semibold">${course.price}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Incluye licencia Autodesk A1</span>
                        <span>✓</span>
                      </div>
                      <div className="border-t border-primary-200 pt-2 flex justify-between font-bold text-primary-900">
                        <span>Total:</span>
                        <span>${course.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-bold"
                    >
                      Proceder al Pago
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      onClick={() => setShowEnrollmentForm(false)}
                    >
                      Cancelar
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Al inscribirte, aceptas nuestros términos de servicio y política de
                    privacidad.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
