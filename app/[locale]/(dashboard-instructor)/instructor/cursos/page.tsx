'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit, Users, Eye, MoreVertical, Plus, BookOpen, Loader2, Star } from 'lucide-react';
import { toast } from 'sonner';

interface Course {
    courseId: string;
    courseTitle: string;
    courseSlug: string;
    students: number;
    completionRate: number;
    rating: number;
    reviewsCount: number;
}

interface CourseDetails {
    id: string;
    title: string;
    slug: string;
    description: string;
    thumbnail: string | null;
    category: string;
    level: string;
    status: string;
    price: number;
    version: string;
    enrollmentCount: number;
    rating: number;
    reviewsCount: number;
}

export default function InstructorCoursesPage() {
    const [courses, setCourses] = useState<CourseDetails[]>([]);
    const [analytics, setAnalytics] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            const [coursesRes, analyticsRes] = await Promise.all([
                fetch('/api/instructor/courses'),
                fetch('/api/instructor/courses/analytics')
            ]);

            if (coursesRes.ok) {
                const data = await coursesRes.json();
                setCourses(data.courses || []);
            }

            if (analyticsRes.ok) {
                const data = await analyticsRes.json();
                setAnalytics(data.courseAnalytics || []);
            }
        } catch (error) {
            toast.error('Error al cargar cursos');
        } finally {
            setLoading(false);
        }
    };

    const getCourseAnalytics = (courseId: string) => {
        return analytics.find(a => a.courseId === courseId);
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'PUBLISHED':
                return <Badge className="bg-green-100 text-green-800 border-green-200">Publicado</Badge>;
            case 'DRAFT':
                return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Borrador</Badge>;
            case 'ARCHIVED':
                return <Badge className="bg-neutral-100 text-neutral-600 border-neutral-200">Archivado</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    const getLevelBadge = (level: string) => {
        switch (level) {
            case 'BEGINNER':
                return 'Basico';
            case 'INTERMEDIATE':
                return 'Intermedio';
            case 'ADVANCED':
                return 'Avanzado';
            default:
                return level;
        }
    };

    if (loading) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900">Mis Cursos</h1>
                    <p className="text-neutral-600">Gestiona tus cursos y contenido academico.</p>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
                        <p className="text-neutral-600">Cargando cursos...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (courses.length === 0) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-900">Mis Cursos</h1>
                        <p className="text-neutral-600">Gestiona tus cursos y contenido academico.</p>
                    </div>
                    <Link href="/instructor/cursos/crear-curso">
                        <Button className="bg-neutral-900 hover:bg-neutral-800">
                            <Plus className="w-4 h-4 mr-2" /> Crear Nuevo Curso
                        </Button>
                    </Link>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <BookOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">No tienes cursos creados</h3>
                        <p className="text-neutral-600 mb-6">Crea tu primer curso para comenzar a ensenar</p>
                        <Link href="/instructor/cursos/crear-curso">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                <Plus className="w-4 h-4 mr-2" /> Crear Curso
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Mis Cursos</h1>
                    <p className="text-neutral-600">Gestiona tus cursos y contenido academico.</p>
                </div>
                <Link href="/instructor/cursos/crear-curso">
                    <Button className="bg-neutral-900 hover:bg-neutral-800">
                        <Plus className="w-4 h-4 mr-2" /> Crear Nuevo Curso
                    </Button>
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Total Cursos</p>
                                <p className="text-2xl font-bold text-neutral-900">{courses.length}</p>
                            </div>
                            <BookOpen className="w-8 h-8 text-blue-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Publicados</p>
                                <p className="text-2xl font-bold text-green-600">
                                    {courses.filter(c => c.status === 'PUBLISHED').length}
                                </p>
                            </div>
                            <Eye className="w-8 h-8 text-green-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Total Estudiantes</p>
                                <p className="text-2xl font-bold text-neutral-900">
                                    {analytics.reduce((acc, c) => acc + c.students, 0)}
                                </p>
                            </div>
                            <Users className="w-8 h-8 text-neutral-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6">
                {courses.map((course) => {
                    const courseAnalytics = getCourseAnalytics(course.id);
                    return (
                        <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow bg-white border-neutral-200">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-64 h-48 md:h-auto bg-neutral-200 relative">
                                    {course.thumbnail ? (
                                        <Image
                                            src={course.thumbnail}
                                            alt={course.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center">
                                            <BookOpen className="w-12 h-12 text-neutral-400" />
                                        </div>
                                    )}
                                    <div className="absolute top-2 left-2">
                                        <Badge className="bg-white/90 text-neutral-900 hover:bg-white">
                                            {course.version || '2026'}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="flex-grow p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                                                    {course.category || 'Civil 3D'}
                                                </Badge>
                                                <Badge variant="outline" className="text-neutral-600 border-neutral-200">
                                                    {getLevelBadge(course.level)}
                                                </Badge>
                                                {getStatusBadge(course.status)}
                                            </div>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreVertical className="w-4 h-4 text-neutral-400" />
                                            </Button>
                                        </div>

                                        <h3 className="text-xl font-bold text-neutral-900 mb-2">{course.title}</h3>
                                        <p className="text-neutral-500 text-sm line-clamp-2 mb-4">{course.description}</p>

                                        <div className="flex items-center gap-6 text-sm text-neutral-500">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                <span>{courseAnalytics?.students || course.enrollmentCount || 0} Estudiantes</span>
                                            </div>
                                            {(courseAnalytics?.rating || course.rating) > 0 && (
                                                <div className="flex items-center gap-2">
                                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                    <span>{(courseAnalytics?.rating || course.rating).toFixed(1)} ({courseAnalytics?.reviewsCount || course.reviewsCount} reviews)</span>
                                                </div>
                                            )}
                                            {courseAnalytics && (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-green-600 font-medium">{courseAnalytics.completionRate}% completado</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-neutral-100">
                                        <Link href={`/instructor/cursos/${course.slug}/contenido`}>
                                            <Button variant="default" size="sm" className="bg-neutral-900 hover:bg-neutral-800">
                                                <Edit className="w-4 h-4 mr-2" /> Editar Contenido
                                            </Button>
                                        </Link>
                                        <Link href={`/instructor/cursos/${course.slug}/editar`}>
                                            <Button variant="outline" size="sm">
                                                Informacion
                                            </Button>
                                        </Link>
                                        <Link href={`/cursos/${course.slug}`} target="_blank">
                                            <Button variant="ghost" size="sm">
                                                Ver Vista Previa
                                            </Button>
                                        </Link>
                                        <div className="flex-grow" />
                                        <span className="text-lg font-bold text-neutral-900">${course.price} USD</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
