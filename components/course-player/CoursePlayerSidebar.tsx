'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FileText, ChevronLeft, Loader2, Radio } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Lesson {
    id: string;
    slug: string;
    title: string;
    duration?: number;
}

interface Module {
    id: string;
    title: string;
    lessons: Lesson[];
}

interface CourseData {
    titulo: string;
    modules: Module[];
}

export function CoursePlayerSidebar() {
    const params = useParams();
    const slug = params.slug as string;
    const moduleId = params.moduleId as string;
    const lessonSlug = params.lessonSlug as string;

    const [course, setCourse] = useState<CourseData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        fetch(`/api/courses/${slug}`)
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                setCourse(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return (
            <aside className="w-80 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 h-screen flex flex-col fixed left-0 top-0 z-40">
                <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center gap-2">
                    <Link href="/es/estudiante/mis-cursos" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <span className="text-sm text-neutral-500">Cargando...</span>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <Loader2 className="w-6 h-6 animate-spin text-neutral-400" />
                </div>
            </aside>
        );
    }

    if (!course) {
        return (
            <aside className="w-80 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 h-screen flex flex-col fixed left-0 top-0 z-40">
                <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center gap-2">
                    <Link href="/es/estudiante/mis-cursos" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <span className="text-sm text-neutral-500">Curso no encontrado</span>
                </div>
            </aside>
        );
    }

    const modules = course.modules || [];

    return (
        <aside className="w-80 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 h-screen flex flex-col fixed left-0 top-0 z-40">
            <div className="p-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-3">
                    <Link href="/es/estudiante/mis-cursos" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1">
                        <ChevronLeft className="w-5 h-5" />
                        <span className="text-sm">Mis Cursos</span>
                    </Link>
                    <ThemeToggle />
                </div>
                <h2 className="font-bold text-sm line-clamp-2 text-neutral-900 dark:text-white">{course.titulo}</h2>
            </div>

            {/* Boton Clase en Vivo */}
            <div className="p-3 border-b border-neutral-100 dark:border-neutral-800">
                <Link
                    href={`/es/cursos/${slug}/clase-en-vivo`}
                    className="flex items-center gap-3 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                    <Radio className="w-5 h-5" />
                    <div>
                        <p className="font-semibold text-sm">Clase en Vivo</p>
                        <p className="text-xs text-red-200">Ver streaming del instructor</p>
                    </div>
                </Link>
            </div>

            <ScrollArea className="flex-grow">
                <Accordion type="multiple" defaultValue={modules.map((m: Module) => m.id)} className="w-full">
                    {modules.map((module: Module, index: number) => (
                        <AccordionItem key={module.id} value={module.id} className="border-b-neutral-100">
                            <AccordionTrigger className="px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm font-semibold text-neutral-900 dark:text-white">
                                <div className="text-left">
                                    <div className="text-xs text-neutral-500 font-normal mb-0.5">Modulo {index + 1}</div>
                                    {module.title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-0 pb-0">
                                <div className="flex flex-col">
                                    {module.lessons && module.lessons.map((lesson: Lesson) => {
                                        const isActive = moduleId === module.id && lessonSlug === lesson.slug;

                                        return (
                                            <Link
                                                key={lesson.id}
                                                href={`/es/cursos/${slug}/aprender/${module.id}/${lesson.slug}`}
                                                className={cn(
                                                    "flex items-start gap-3 px-4 py-3 text-sm transition-colors border-l-2",
                                                    isActive
                                                        ? "bg-primary-50 dark:bg-primary-900/30 border-primary-500 text-primary-900 dark:text-primary-400"
                                                        : "border-transparent hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                                )}
                                            >
                                                <div className="mt-0.5">
                                                    <FileText className={cn("w-4 h-4", isActive ? "text-primary-600" : "text-neutral-400")} />
                                                </div>
                                                <div className="flex-grow">
                                                    <p className={cn("font-medium mb-0.5", isActive ? "text-primary-900 dark:text-primary-400" : "text-neutral-700 dark:text-neutral-300")}>
                                                        {lesson.title}
                                                    </p>
                                                    {lesson.duration && (
                                                        <p className="text-xs text-neutral-400">{lesson.duration} min</p>
                                                    )}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </ScrollArea>

            <div className="p-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="text-xs text-neutral-500">
                    {modules.length} modulos - {modules.reduce((acc, m) => acc + (m.lessons?.length || 0), 0)} lecciones
                </div>
            </div>
        </aside>
    );
}
