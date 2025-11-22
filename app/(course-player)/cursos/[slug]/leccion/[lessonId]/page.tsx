'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, Download, MessageSquare, ThumbsUp } from 'lucide-react';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';

export default function LessonPage() {
    const params = useParams();
    const slug = params.slug as string;
    const lessonId = params.lessonId as string;

    const course = COURSES_2026.find(c => c.slug === slug);
    // Find lesson in syllabus
    let lesson = null;
    let moduleTitle = '';

    course?.syllabus.forEach(m => {
        const found = m.lessons.find(l => l.id === lessonId);
        if (found) {
            lesson = found;
            moduleTitle = m.title;
        }
    });

    if (!lesson) {
        return <div className="p-8">Lección no encontrada</div>;
    }

    return (
        <div className="flex flex-col h-screen">
            {/* Video Player Area */}
            <div className="bg-black w-full aspect-video max-h-[60vh] flex items-center justify-center relative">
                {/* Placeholder for Video Player */}
                <div className="text-white text-center">
                    <p className="text-lg font-medium mb-2">Reproductor de Video</p>
                    <p className="text-neutral-400 text-sm">Aquí se cargará el video de Microsoft Stream</p>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto bg-white">
                <div className="max-w-5xl mx-auto p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-neutral-900 mb-2">{lesson.title}</h1>
                            <p className="text-neutral-500">{moduleTitle}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                                <ThumbsUp className="w-4 h-4 mr-2" /> Me gusta
                            </Button>
                            <Button variant="outline" size="sm">
                                <MessageSquare className="w-4 h-4 mr-2" /> Dudas
                            </Button>
                        </div>
                    </div>

                    <Tabs defaultValue="description" className="w-full">
                        <TabsList className="mb-6">
                            <TabsTrigger value="description">Descripción</TabsTrigger>
                            <TabsTrigger value="resources">Recursos</TabsTrigger>
                            <TabsTrigger value="notes">Mis Notas</TabsTrigger>
                        </TabsList>

                        <TabsContent value="description" className="animate-fade-in">
                            <div className="prose max-w-none text-neutral-600">
                                <p>
                                    En esta lección aprenderemos los conceptos fundamentales necesarios para dominar
                                    las herramientas de {course?.title}. Cubriremos los siguientes puntos:
                                </p>
                                <ul>
                                    <li>Configuración inicial del entorno de trabajo.</li>
                                    <li>Navegación por la interfaz de usuario.</li>
                                    <li>Uso de herramientas básicas de dibujo y edición.</li>
                                </ul>
                                <p>
                                    Recuerda descargar los archivos de ejercicio adjuntos en la pestaña de Recursos
                                    para seguir la práctica paso a paso.
                                </p>
                            </div>
                        </TabsContent>

                        <TabsContent value="resources">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-neutral-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center text-red-600 font-bold text-xs">PDF</div>
                                        <div>
                                            <p className="font-medium text-neutral-900">Guía de Comandos Rápidos.pdf</p>
                                            <p className="text-xs text-neutral-500">2.4 MB</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                </div>

                                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-neutral-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-xs">DWG</div>
                                        <div>
                                            <p className="font-medium text-neutral-900">Ejercicio_Practica_01.dwg</p>
                                            <p className="text-xs text-neutral-500">5.1 MB</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="notes">
                            <div className="p-8 text-center text-neutral-500 border-2 border-dashed rounded-lg">
                                <p>Tus notas personales para esta lección aparecerán aquí.</p>
                                <Button variant="link" className="mt-2">Crear nueva nota</Button>
                            </div>
                        </TabsContent>
                    </Tabs>

                    <div className="flex justify-between items-center mt-12 pt-8 border-t border-neutral-100">
                        <Button variant="ghost">
                            <ChevronLeft className="w-4 h-4 mr-2" /> Lección Anterior
                        </Button>
                        <Button className="bg-primary-600 hover:bg-primary-700">
                            Siguiente Lección <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
