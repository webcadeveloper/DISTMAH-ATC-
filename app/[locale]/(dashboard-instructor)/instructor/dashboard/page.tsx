'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, BookOpen, Users, BarChart3, Edit, MoreVertical } from 'lucide-react';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function InstructorDashboard() {
    // Mock data for instructor's courses (filtering from catalog)
    const myCourses = COURSES_2026.slice(0, 3); // Showing first 3 as example

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Panel del Instructor</h1>
                    <p className="text-neutral-600">Gestiona tus cursos y estudiantes.</p>
                </div>
                <Link href="/instructor/cursos/crear">
                    <Button className="bg-primary-600 hover:bg-primary-700">
                        <PlusCircle className="w-4 h-4 mr-2" /> Crear Nuevo Curso
                    </Button>
                </Link>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-neutral-500">Cursos Activos</p>
                            <h3 className="text-2xl font-bold text-neutral-900">{myCourses.length}</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-neutral-500">Estudiantes Totales</p>
                            <h3 className="text-2xl font-bold text-neutral-900">1,245</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-neutral-500">Calificación Promedio</p>
                            <h3 className="text-2xl font-bold text-neutral-900">4.8/5.0</h3>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Courses List */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-900">Mis Cursos</h2>

                <div className="grid gap-6">
                    {myCourses.map((course) => (
                        <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-48 h-32 bg-neutral-200 relative">
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-100">
                                        <BookOpen className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="flex-grow p-6 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                                                    {course.version}
                                                </span>
                                                <span className="text-xs font-medium text-neutral-500">
                                                    {course.category}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-neutral-900 mb-1">{course.title}</h3>
                                            <p className="text-sm text-neutral-500 line-clamp-1">{course.subtitle}</p>
                                        </div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <MoreVertical className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <Link href={`/instructor/cursos/${course.id}/contenido`} className="w-full">
                                                        Editar Contenido
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>Ver Estudiantes</DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-600">Archivar Curso</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-neutral-100">
                                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                                            <Users className="w-4 h-4" />
                                            <span>0 estudiantes</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                                            <BookOpen className="w-4 h-4" />
                                            <span>{course.syllabus?.length || 0} módulos</span>
                                        </div>
                                        <div className="flex-grow"></div>
                                        <Link href={`/instructor/cursos/${course.id}/contenido`}>
                                            <Button variant="outline" size="sm">
                                                <Edit className="w-4 h-4 mr-2" /> Gestionar Contenido
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
