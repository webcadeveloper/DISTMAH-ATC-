'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { CheckCircle, PlayCircle, Lock, FileText, ChevronLeft } from 'lucide-react';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function CoursePlayerSidebar() {
    const params = useParams();
    const slug = params.slug as string;
    const lessonId = params.lessonId as string;

    // Mock data retrieval
    const course = COURSES_2026.find(c => c.slug === slug);
    const syllabus = course?.syllabus || [];

    return (
        <aside className="w-80 bg-white border-r border-neutral-200 h-screen flex flex-col fixed left-0 top-0 z-40">
            <div className="p-4 border-b border-neutral-100 flex items-center gap-2">
                <Link href="/estudiante/dashboard" className="text-neutral-500 hover:text-neutral-900">
                    <ChevronLeft className="w-5 h-5" />
                </Link>
                <h2 className="font-bold text-sm line-clamp-1">{course?.title}</h2>
            </div>

            <ScrollArea className="flex-grow">
                <Accordion type="multiple" defaultValue={syllabus.map((m: any) => m.id)} className="w-full">
                    {syllabus.map((module: any, index: number) => (
                        <AccordionItem key={module.id} value={module.id} className="border-b-neutral-100">
                            <AccordionTrigger className="px-4 py-3 hover:bg-neutral-50 text-sm font-semibold text-neutral-900">
                                <div className="text-left">
                                    <div className="text-xs text-neutral-500 font-normal mb-0.5">Módulo {index + 1}</div>
                                    {module.title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-0 pb-0">
                                <div className="flex flex-col">
                                    {module.lessons.map((lesson: any) => {
                                        const isActive = lessonId === lesson.id;
                                        // Mock completion status
                                        const isCompleted = false;
                                        const isLocked = false;

                                        return (
                                            <Link
                                                key={lesson.id}
                                                href={`/cursos/${slug}/leccion/${lesson.id}`}
                                                className={cn(
                                                    "flex items-start gap-3 px-4 py-3 text-sm transition-colors border-l-2",
                                                    isActive
                                                        ? "bg-primary-50 border-primary-500 text-primary-900"
                                                        : "border-transparent hover:bg-neutral-50 text-neutral-600"
                                                )}
                                            >
                                                <div className="mt-0.5">
                                                    {isCompleted ? (
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                    ) : isLocked ? (
                                                        <Lock className="w-4 h-4 text-neutral-300" />
                                                    ) : lesson.type === 'video' ? (
                                                        <PlayCircle className={cn("w-4 h-4", isActive ? "text-primary-600" : "text-neutral-400")} />
                                                    ) : (
                                                        <FileText className={cn("w-4 h-4", isActive ? "text-primary-600" : "text-neutral-400")} />
                                                    )}
                                                </div>
                                                <div className="flex-grow">
                                                    <p className={cn("font-medium mb-0.5", isActive ? "text-primary-900" : "text-neutral-700")}>
                                                        {lesson.title}
                                                    </p>
                                                    <p className="text-xs text-neutral-400">{lesson.duration} min</p>
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
        </aside>
    );
}
