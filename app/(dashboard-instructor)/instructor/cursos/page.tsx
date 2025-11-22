import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit, Users, Eye, MoreVertical, Plus } from 'lucide-react';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';

export default function InstructorCoursesPage() {
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

            <div className="grid gap-6">
                {COURSES_2026.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-64 h-48 md:h-auto bg-neutral-200 relative">
                                {/* Image placeholder */}
                                <div className="absolute inset-0 bg-neutral-300" />
                                <div className="absolute top-2 left-2">
                                    <Badge className="bg-white/90 text-neutral-900 hover:bg-white">
                                        {course.version}
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
                                            <span>{course.enrollmentCount} Estudiantes</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Eye className="w-4 h-4" />
                                            <span>{course.featured ? 'Publicado' : 'Borrador'}</span>
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
            </div>
        </div>
    );
}
