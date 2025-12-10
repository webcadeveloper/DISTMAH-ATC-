import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit, Users, Eye, MoreVertical, Plus } from 'lucide-react';
import { prisma } from '@/lib/prisma';

async function getCourses() {
  const courses = await prisma.course.findMany({
    include: {
      _count: {
        select: {
          modules: true,
          enrollments: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return courses;
}

export default async function InstructorCoursesPage() {
    const courses = await getCourses();

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Mis Cursos</h1>
                    <p className="text-neutral-600">Gestiona tus cursos y contenido académico.</p>
                </div>
                <Link href="/instructor/cursos/crear-curso">
                    <Button className="bg-primary-600 hover:bg-primary-700">
                        <Plus className="w-4 h-4 mr-2" /> Crear Nuevo Curso
                    </Button>
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-500 mb-1">Total Cursos</p>
                                <h3 className="text-3xl font-bold text-neutral-900">{courses.length}</h3>
                            </div>
                            <div className="p-3 bg-primary-50 rounded-full">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-500 mb-1">Publicados</p>
                                <h3 className="text-3xl font-bold text-neutral-900">
                                    {courses.filter(c => c.status === 'PUBLISHED').length}
                                </h3>
                            </div>
                            <div className="p-3 bg-green-50 rounded-full">
                                <Eye className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-500 mb-1">Total Estudiantes</p>
                                <h3 className="text-3xl font-bold text-neutral-900">
                                    {courses.reduce((sum, c) => sum + c._count.enrollments, 0)}
                                </h3>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-full">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Courses List */}
            <div className="grid gap-6">
                {courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-64 h-48 md:h-auto bg-neutral-200 relative">
                                {/* Image placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                                    <span className="text-white text-4xl font-bold">
                                        {course.title.substring(0, 2).toUpperCase()}
                                    </span>
                                </div>
                                <div className="absolute top-2 left-2">
                                    <Badge className="bg-white/90 text-neutral-900 hover:bg-white">
                                        {course.software}
                                    </Badge>
                                </div>
                                <div className="absolute top-2 right-2">
                                    <Badge
                                        className={
                                            course.status === 'PUBLISHED'
                                                ? 'bg-green-500 text-white'
                                                : 'bg-yellow-500 text-white'
                                        }
                                    >
                                        {course.status === 'PUBLISHED' ? 'Publicado' : 'Borrador'}
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex-grow p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="outline" className="text-primary-600 border-primary-200 bg-primary-50">
                                            {course.category}
                                        </Badge>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <MoreVertical className="w-4 h-4 text-neutral-400" />
                                        </Button>
                                    </div>

                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{course.title}</h3>
                                    <p className="text-neutral-500 text-sm line-clamp-2 mb-4">{course.description}</p>

                                    <div className="flex items-center gap-6 text-sm text-neutral-500">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span>{course._count.enrollments} Estudiantes</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                            <span>{course._count.modules} Módulos</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{course.duration}h</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-neutral-100">
                                    <Link href={`/instructor/cursos/${course.id}/contenido`}>
                                        <Button variant="default" size="sm" className="bg-neutral-900 hover:bg-neutral-800">
                                            <Edit className="w-4 h-4 mr-2" /> Editar Contenido
                                        </Button>
                                    </Link>
                                    <Link href={`/instructor/cursos/${course.id}/editar`}>
                                        <Button variant="outline" size="sm">
                                            Información
                                        </Button>
                                    </Link>
                                    <Link href={`/cursos/${course.slug}`} target="_blank">
                                        <Button variant="ghost" size="sm">
                                            Ver Vista Previa
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}

                {courses.length === 0 && (
                    <Card className="p-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">No tienes cursos creados</h3>
                            <p className="text-neutral-600 mb-6">Comienza creando tu primer curso para compartir tu conocimiento.</p>
                            <Link href="/instructor/cursos/crear-curso">
                                <Button className="bg-primary-600 hover:bg-primary-700">
                                    <Plus className="w-4 h-4 mr-2" /> Crear Mi Primer Curso
                                </Button>
                            </Link>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
}
