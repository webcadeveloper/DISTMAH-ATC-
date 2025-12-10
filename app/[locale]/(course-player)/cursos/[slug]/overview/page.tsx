'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, PlayCircle, FileText, Video, Radio, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Lesson {
    id: string;
    number: number;
    title: string;
    duration: number;
    type: string;
    order: number;
}

interface Module {
    id: string;
    number: number;
    title: string;
    description: string | null;
    duration: number;
    order: number;
    lessons: Lesson[];
}

interface Course {
    id: string;
    slug: string;
    title: string;
    subtitle: string | null;
    description: string;
    duration: number;
    level: string;
    modules: Module[];
}

interface ScheduleData {
    schedule: {
        id: string;
        shift: string;
        shiftLabel: string;
        daysOfWeek: number[];
        startTime: string;
        endTime: string;
        teamsUrl?: string;
        streamUrl?: string;
    } | null;
    isLive: boolean;
    nextClass: string | null;
}

const DAY_NAMES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export default function CourseOverviewPage() {
    const params = useParams();
    const slug = params.slug as string;
    const locale = params.locale as string || 'es';

    const [course, setCourse] = useState<Course | null>(null);
    const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;
        fetchCourseData();
        const interval = setInterval(fetchSchedule, 10000);
        return () => clearInterval(interval);
    }, [slug]);

    const fetchCourseData = async () => {
        try {
            const courseRes = await fetch(`/api/courses/by-slug/${slug}`);
            if (!courseRes.ok) {
                setError('Curso no encontrado');
                setLoading(false);
                return;
            }
            const courseData = await courseRes.json();
            setCourse(courseData);
            await fetchSchedule(courseData.id);
        } catch (err) {
            console.error('Error:', err);
            setError('Error al cargar el curso');
        } finally {
            setLoading(false);
        }
    };

    const fetchSchedule = async (courseId?: string) => {
        const id = courseId || course?.id;
        if (!id) return;

        try {
            const scheduleRes = await fetch(`/api/courses/${id}/schedule`);
            if (scheduleRes.ok) {
                setScheduleData(await scheduleRes.json());
            }
        } catch (err) {
            console.error('Error fetching schedule:', err);
        }
    };

    const formatNextClass = (dateStr: string) => {
        const date = new Date(dateStr);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (date.toDateString() === today.toDateString()) {
            return `Hoy a las ${date.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}`;
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return `Mañana a las ${date.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}`;
        }
        return date.toLocaleDateString('es', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const getLessonSlug = (lesson: Lesson) => {
        return `leccion-${lesson.number.toString().padStart(2, '0')}`;
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    if (error || !course) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8">
                <Card className="max-w-md w-full text-center">
                    <CardContent className="p-8">
                        <BookOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                            {error || 'Curso no encontrado'}
                        </h2>
                        <Link href={`/${locale}/estudiante/mis-cursos`}>
                            <Button variant="outline">Volver a Mis Cursos</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const modules = course.modules || [];
    const totalLessons = modules.reduce((acc, m) => acc + (m.lessons?.length || 0), 0);
    const firstModule = modules[0];
    const firstLesson = firstModule?.lessons?.[0];
    const isLive = scheduleData?.isLive;
    const schedule = scheduleData?.schedule;

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
            {/* Banner de Clase en Vivo */}
            {schedule && (
                <div className={`${isLive ? 'bg-red-600' : 'bg-blue-900'} text-white py-3 px-6`}>
                    <div className="max-w-5xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {isLive ? (
                                <>
                                    <Radio className="w-5 h-5 animate-pulse" />
                                    <span className="font-bold">EN VIVO AHORA</span>
                                    <Badge variant="secondary" className="bg-white/20 text-white">
                                        {schedule.shiftLabel}
                                    </Badge>
                                </>
                            ) : (
                                <>
                                    <Clock className="w-5 h-5" />
                                    <span>Próxima clase:</span>
                                    <span className="font-bold">
                                        {scheduleData?.nextClass ? formatNextClass(scheduleData.nextClass) : 'Por programar'}
                                    </span>
                                </>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4" />
                            {schedule.daysOfWeek.map(d => DAY_NAMES[d]).join(', ')}
                            <span className="mx-1">|</span>
                            {schedule.startTime} - {schedule.endTime}
                        </div>
                    </div>
                </div>
            )}

            <div className="p-8 max-w-5xl mx-auto">
                {/* Stream de Owncast cuando está en vivo */}
                {isLive && schedule?.streamUrl && (
                    <Card className="mb-8 overflow-hidden">
                        <div className="aspect-video bg-neutral-900 relative">
                            <iframe
                                src={schedule.streamUrl}
                                className="w-full h-full"
                                allow="fullscreen"
                                allowFullScreen
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-red-600 text-white animate-pulse">
                                    <Radio className="w-3 h-3 mr-1" />
                                    EN VIVO
                                </Badge>
                            </div>
                        </div>
                        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                <Video className="w-4 h-4" />
                                <span>Transmisión en vivo del instructor</span>
                            </div>
                            {schedule.teamsUrl && (
                                <a
                                    href={schedule.teamsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Abrir Teams (Chat)
                                </a>
                            )}
                        </div>
                    </Card>
                )}

                {/* Header del curso */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{course.title}</h1>
                    {course.subtitle && (
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">{course.subtitle}</p>
                    )}
                    <p className="text-neutral-600 dark:text-neutral-400">{course.description}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <Card className="dark:bg-neutral-800 dark:border-neutral-700">
                        <CardContent className="p-4 flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-blue-600" />
                            <div>
                                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{modules.length}</p>
                                <p className="text-sm text-neutral-500">Módulos</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="dark:bg-neutral-800 dark:border-neutral-700">
                        <CardContent className="p-4 flex items-center gap-3">
                            <FileText className="w-8 h-8 text-blue-600" />
                            <div>
                                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{totalLessons}</p>
                                <p className="text-sm text-neutral-500">Lecciones</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="dark:bg-neutral-800 dark:border-neutral-700">
                        <CardContent className="p-4 flex items-center gap-3">
                            <Clock className="w-8 h-8 text-blue-600" />
                            <div>
                                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{course.duration}h</p>
                                <p className="text-sm text-neutral-500">Duración</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Botón comenzar */}
                {firstLesson && !isLive && (
                    <div className="mb-8">
                        <Link href={`/${locale}/cursos/${slug}/aprender/${firstModule.id}/${getLessonSlug(firstLesson)}`}>
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                <PlayCircle className="w-5 h-5 mr-2" />
                                Comenzar Curso
                            </Button>
                        </Link>
                    </div>
                )}

                {/* Lista de módulos */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Contenido del Curso</h2>

                    {modules.map((module, index) => (
                        <Card key={module.id} className="dark:bg-neutral-800 dark:border-neutral-700">
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <p className="text-sm text-neutral-500 mb-1">Módulo {module.number || index + 1}</p>
                                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{module.title}</h3>
                                        {module.description && (
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{module.description}</p>
                                        )}
                                    </div>
                                    <span className="text-sm text-neutral-500">
                                        {module.lessons?.length || 0} lecciones
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    {module.lessons?.map((lesson, lessonIndex) => (
                                        <Link
                                            key={lesson.id}
                                            href={`/${locale}/cursos/${slug}/aprender/${module.id}/${getLessonSlug(lesson)}`}
                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-600 flex items-center justify-center text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                                                {lesson.number || lessonIndex + 1}
                                            </div>
                                            <div className="flex-grow">
                                                <p className="font-medium text-neutral-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400">
                                                    {lesson.title}
                                                </p>
                                                {lesson.duration && (
                                                    <p className="text-xs text-neutral-500">{lesson.duration} min</p>
                                                )}
                                            </div>
                                            <FileText className="w-4 h-4 text-neutral-400 group-hover:text-blue-600" />
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
