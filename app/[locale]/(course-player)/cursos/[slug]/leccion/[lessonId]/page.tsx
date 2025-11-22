'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, Download, MessageSquare, ThumbsUp, CheckCircle, Circle } from 'lucide-react';
import { COURSES_2026, type Lesson } from '@/lib/courses-catalog-2026';
import { VideoPlayer } from '@/components/course-player/VideoPlayer';
import { AssignmentSubmission } from '@/components/course-player/AssignmentSubmission';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function LessonPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const lessonId = params.lessonId as string;
    const [isCompleted, setIsCompleted] = useState(false);

    const course = COURSES_2026.find(c => c.slug === slug);

    // Find lesson in syllabus using flatMap for better type inference
    const allLessons = course?.syllabus.flatMap(m =>
        m.lessons.map(l => ({ ...l, moduleTitle: m.title }))
    ) || [];

    const lessonIndex = allLessons.findIndex(l => l.id === lessonId);
    const lessonWithModule = allLessons[lessonIndex];
    const nextLesson = allLessons[lessonIndex + 1];
    const prevLesson = allLessons[lessonIndex - 1];

    if (!lessonWithModule) {
        return <div className="p-8">Lección no encontrada</div>;
    }

    const { moduleTitle, ...lesson } = lessonWithModule;

    const handleComplete = () => {
        setIsCompleted(true);
        toast.success('¡Lección completada!');

        // If there is a next lesson, we could auto-redirect or just show the button
    };

    const handleNext = () => {
        if (nextLesson) {
            router.push(`/cursos/${slug}/leccion/${nextLesson.id}`);
        }
    };

    const handlePrev = () => {
        if (prevLesson) {
            router.push(`/cursos/${slug}/leccion/${prevLesson.id}`);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Video Player Area - Only for video lessons */}
            {lesson.type === 'video' && (
                <div className="w-full bg-black flex justify-center">
                    <div className="w-full max-w-6xl">
                        <VideoPlayer
                            src={lesson.content.videoUrl}
                            title={lesson.title}
                            autoPlay={false}
                            onComplete={() => {
                                if (!isCompleted) {
                                    handleComplete();
                                }
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto bg-white">
                <div className="max-w-5xl mx-auto p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-2xl font-bold text-neutral-900">{lesson.title}</h1>
                                {isCompleted && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        <CheckCircle className="w-3 h-3 mr-1" /> Completado
                                    </span>
                                )}
                            </div>
                            <p className="text-neutral-500">{moduleTitle}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant={isCompleted ? "outline" : "default"}
                                className={cn(isCompleted ? "border-green-500 text-green-600 hover:bg-green-50" : "bg-primary-600 hover:bg-primary-700")}
                                onClick={handleComplete}
                                disabled={isCompleted}
                            >
                                {isCompleted ? (
                                    <><CheckCircle className="w-4 h-4 mr-2" /> Completada</>
                                ) : (
                                    <><Circle className="w-4 h-4 mr-2" /> Marcar como Completada</>
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Assignment Submission for Exercises */}
                    {lesson.type === 'exercise' && (
                        <div className="mb-8 animate-fade-in">
                            <AssignmentSubmission lessonId={lesson.id} />
                        </div>
                    )}

                    <Tabs defaultValue="description" className="w-full">
                        <TabsList className="mb-6">
                            <TabsTrigger value="description">Descripción</TabsTrigger>
                            <TabsTrigger value="resources">Recursos</TabsTrigger>
                            <TabsTrigger value="notes">Mis Notas</TabsTrigger>
                        </TabsList>

                        <TabsContent value="description" className="animate-fade-in">
                            <div className="prose max-w-none text-neutral-600" dangerouslySetInnerHTML={{ __html: lesson.content.richText || '' }} />

                            {!lesson.content.richText && (
                                <div className="prose max-w-none text-neutral-600">
                                    <p>{lesson.description}</p>
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="resources">
                            <div className="space-y-3">
                                {lesson.resources && lesson.resources.length > 0 ? (
                                    lesson.resources.map((resource) => (
                                        <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-neutral-50 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-xs">
                                                    {resource.type.toUpperCase().slice(0, 3)}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-neutral-900">{resource.title}</p>
                                                    {resource.size && (
                                                        <p className="text-xs text-neutral-500">{(resource.size / 1024 / 1024).toFixed(2)} MB</p>
                                                    )}
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm">
                                                <Download className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-neutral-500">
                                        No hay recursos adjuntos para esta lección.
                                    </div>
                                )}
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
                        <Button
                            variant="ghost"
                            onClick={handlePrev}
                            disabled={!prevLesson}
                        >
                            <ChevronLeft className="w-4 h-4 mr-2" /> Lección Anterior
                        </Button>
                        <Button
                            className="bg-primary-600 hover:bg-primary-700"
                            onClick={handleNext}
                            disabled={!nextLesson}
                        >
                            Siguiente Lección <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
