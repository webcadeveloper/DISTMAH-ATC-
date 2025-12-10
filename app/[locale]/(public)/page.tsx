import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { prisma } from '@/lib/prisma';
import { ArrowRight, BookOpen, Users, Award, Star } from 'lucide-react';

async function getFeaturedCourses() {
  const courses = await prisma.course.findMany({
    where: {
      status: 'PUBLISHED',
    },
    include: {
      _count: {
        select: {
          enrollments: true,
          modules: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 6,
  });

  return courses;
}

async function getStats() {
  const [totalCourses, totalStudents] = await Promise.all([
    prisma.course.count({ where: { status: 'PUBLISHED' } }),
    prisma.enrollment.count(),
  ]);

  return { totalCourses, totalStudents };
}

export default async function HomePage() {
  const [featuredCourses, stats] = await Promise.all([
    getFeaturedCourses(),
    getStats(),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Centro Autorizado de Formación Autodesk (ATC)
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Aprende software Autodesk
              <br />
              con expertos certificados
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Domina AutoCAD, Revit, Civil 3D y más con cursos profesionales
              diseñados para arquitectos e ingenieros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cursos">
                <Button
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-neutral-100 text-lg px-8"
                >
                  Explorar Cursos <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/registro">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  Comenzar Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-4xl font-bold text-neutral-900 mb-2">
                {stats.totalCourses}+
              </h3>
              <p className="text-neutral-600">Cursos Profesionales</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-neutral-900 mb-2">
                {stats.totalStudents}+
              </h3>
              <p className="text-neutral-600">Estudiantes Activos</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-4xl font-bold text-neutral-900 mb-2">ATC</h3>
              <p className="text-neutral-600">Certificado Autodesk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Cursos Destacados
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Aprende de instructores expertos con experiencia real en la
              industria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-200"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 relative flex items-center justify-center">
                  <span className="text-white text-5xl font-bold">
                    {course.title.substring(0, 2).toUpperCase()}
                  </span>
                  <Badge className="absolute top-4 right-4 bg-white text-primary-700">
                    {course.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course._count.enrollments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course._count.modules} módulos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>5.0</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">
                        ${Number(course.price)}
                      </span>
                      <span className="text-neutral-500 text-sm ml-1">USD</span>
                    </div>
                    <Link href={`/cursos/${course.slug}`}>
                      <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                        Ver Curso
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/cursos">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
              >
                Ver Todos los Cursos <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para impulsar tu carrera?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Únete a miles de profesionales que ya están dominando las
            herramientas de Autodesk
          </p>
          <Link href="/registro">
            <Button
              size="lg"
              className="bg-white text-primary-700 hover:bg-neutral-100 text-lg px-8"
            >
              Comenzar Ahora <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
