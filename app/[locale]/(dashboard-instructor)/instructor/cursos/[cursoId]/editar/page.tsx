'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseData {
    id: string;
    titulo: string;
    descripcion: string;
    precio: number;
    nivel: string;
    categoria: string;
    version: string;
    duracion: string;
}

export default function EditCourseInfoPage() {
    const params = useParams();
    const courseId = params.cursoId as string;
    const [course, setCourse] = useState<CourseData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCourse() {
            try {
                const res = await fetch(`/api/courses/${courseId}`);
                if (res.ok) {
                    const data = await res.json();
                    setCourse(data);
                }
            } catch (error) {
                console.error('Error loading course:', error);
            } finally {
                setLoading(false);
            }
        }
        loadCourse();
    }, [courseId]);

    if (loading) {
        return (
            <div className="p-8 max-w-4xl mx-auto text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-neutral-400" />
                <p className="mt-2 text-neutral-500">Cargando curso...</p>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="mb-8">
                <Link href="/es/instructor/cursos" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 mb-4">
                    <ArrowLeft className="w-4 h-4" /> Volver a mis cursos
                </Link>
                <h1 className="text-3xl font-bold text-neutral-900">Editar Información del Curso</h1>
            </div>

            {course ? (
                <div className="space-y-6">
                    <div className="p-6 bg-white rounded-lg border border-neutral-200">
                        <h2 className="text-xl font-semibold mb-4">{course.titulo}</h2>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-neutral-500">Nivel:</span>
                                <span className="ml-2 font-medium">{course.nivel}</span>
                            </div>
                            <div>
                                <span className="text-neutral-500">Categoría:</span>
                                <span className="ml-2 font-medium">{course.categoria}</span>
                            </div>
                            <div>
                                <span className="text-neutral-500">Versión:</span>
                                <span className="ml-2 font-medium">{course.version}</span>
                            </div>
                            <div>
                                <span className="text-neutral-500">Duración:</span>
                                <span className="ml-2 font-medium">{course.duracion}</span>
                            </div>
                            <div>
                                <span className="text-neutral-500">Precio:</span>
                                <span className="ml-2 font-medium">${course.precio} USD</span>
                            </div>
                        </div>
                        <p className="mt-4 text-neutral-600">{course.descripcion}</p>
                    </div>

                    <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h3 className="font-semibold text-yellow-800 mb-2">Editor en Desarrollo</h3>
                        <p className="text-sm text-yellow-700">
                            La edición de información del curso se habilitará en la próxima actualización.
                            Por ahora puedes editar el contenido directamente en los archivos JSON en /public/cursos/{courseId}/
                        </p>
                    </div>
                </div>
            ) : (
                <div className="p-8 bg-neutral-50 rounded-lg border-2 border-dashed border-neutral-300 text-center">
                    <h2 className="text-xl font-semibold mb-2 text-neutral-700">Curso no encontrado</h2>
                    <p className="text-neutral-500 mb-4">
                        El curso "{courseId}" no existe en /public/cursos/
                    </p>
                    <Link href="/es/instructor/cursos">
                        <Button variant="outline">Volver a Mis Cursos</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
