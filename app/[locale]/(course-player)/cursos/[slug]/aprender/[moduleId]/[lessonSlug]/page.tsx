import { getCourse, getLesson, getLessons, getModules } from '@/lib/course-loader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Clock, CheckCircle, BookOpen, Target, Lightbulb, FileText, HelpCircle, Award } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React from 'react';

interface PageProps {
    params: Promise<{
        slug: string;
        moduleId: string;
        lessonSlug: string;
    }>;
}

// Custom components for enhanced markdown rendering
const MarkdownComponents = {
    h1: ({ children, ...props }: any) => (
        <div className="relative mb-8 mt-4">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
            <h1 className="text-3xl font-bold text-neutral-900 pl-4" {...props}>{children}</h1>
        </div>
    ),
    h2: ({ children, ...props }: any) => {
        const text = String(children || '');
        let icon = <BookOpen className="w-5 h-5" />;
        let bgColor = 'bg-blue-50';
        let borderColor = 'border-blue-200';
        let iconColor = 'text-blue-600';

        if (text.toLowerCase().includes('objetivo')) {
            icon = <Target className="w-5 h-5" />;
            bgColor = 'bg-green-50';
            borderColor = 'border-green-200';
            iconColor = 'text-green-600';
        } else if (text.toLowerCase().includes('introduccion') || text.toLowerCase().includes('introducción')) {
            icon = <Lightbulb className="w-5 h-5" />;
            bgColor = 'bg-yellow-50';
            borderColor = 'border-yellow-200';
            iconColor = 'text-yellow-600';
        } else if (text.toLowerCase().includes('ejercicio') || text.toLowerCase().includes('practica') || text.toLowerCase().includes('práctica')) {
            icon = <FileText className="w-5 h-5" />;
            bgColor = 'bg-purple-50';
            borderColor = 'border-purple-200';
            iconColor = 'text-purple-600';
        } else if (text.toLowerCase().includes('evaluacion') || text.toLowerCase().includes('evaluación')) {
            icon = <HelpCircle className="w-5 h-5" />;
            bgColor = 'bg-orange-50';
            borderColor = 'border-orange-200';
            iconColor = 'text-orange-600';
        } else if (text.toLowerCase().includes('resumen')) {
            icon = <Award className="w-5 h-5" />;
            bgColor = 'bg-teal-50';
            borderColor = 'border-teal-200';
            iconColor = 'text-teal-600';
        }

        return (
            <div className={`flex items-center gap-3 ${bgColor} ${borderColor} border rounded-lg px-4 py-3 mt-10 mb-6`}>
                <div className={`${iconColor}`}>{icon}</div>
                <h2 className="text-xl font-bold text-neutral-800 m-0" {...props}>{children}</h2>
            </div>
        );
    },
    h3: ({ children, ...props }: any) => (
        <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3 flex items-center gap-2 border-l-4 border-blue-400 pl-3" {...props}>
            {children}
        </h3>
    ),
    h4: ({ children, ...props }: any) => (
        <h4 className="text-base font-semibold text-neutral-700 mt-4 mb-2" {...props}>{children}</h4>
    ),
    p: ({ children, ...props }: any) => (
        <p className="text-neutral-700 leading-relaxed mb-4" {...props}>{children}</p>
    ),
    ul: ({ children, ...props }: any) => (
        <ul className="space-y-2 my-4 pl-0" {...props}>{children}</ul>
    ),
    ol: ({ children, ...props }: any) => (
        <ol className="space-y-2 my-4 pl-0 list-none counter-reset-item" {...props}>{children}</ol>
    ),
    li: ({ children, ordered, ...props }: any) => (
        <li className="flex items-start gap-3 text-neutral-700" {...props}>
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
            <span>{children}</span>
        </li>
    ),
    table: ({ children, ...props }: any) => (
        <div className="overflow-x-auto my-6 rounded-lg border border-neutral-200 shadow-sm">
            <table className="w-full border-collapse" {...props}>{children}</table>
        </div>
    ),
    thead: ({ children, ...props }: any) => (
        <thead className="bg-gradient-to-r from-neutral-100 to-neutral-50" {...props}>{children}</thead>
    ),
    th: ({ children, ...props }: any) => (
        <th className="px-4 py-3 text-left font-semibold text-neutral-800 border-b border-neutral-200" {...props}>{children}</th>
    ),
    td: ({ children, ...props }: any) => (
        <td className="px-4 py-3 text-neutral-700 border-b border-neutral-100" {...props}>{children}</td>
    ),
    tr: ({ children, ...props }: any) => (
        <tr className="hover:bg-neutral-50 transition-colors" {...props}>{children}</tr>
    ),
    blockquote: ({ children, ...props }: any) => (
        <div className="my-6 bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-500 rounded-r-lg p-4" {...props}>
            <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-neutral-700 italic">{children}</div>
            </div>
        </div>
    ),
    code: ({ inline, children, ...props }: any) => {
        if (inline) {
            return (
                <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono border border-neutral-200" {...props}>
                    {children}
                </code>
            );
        }
        return (
            <code className="font-mono text-sm" {...props}>{children}</code>
        );
    },
    pre: ({ children, ...props }: any) => (
        <div className="my-6 rounded-lg overflow-hidden shadow-md">
            <div className="bg-neutral-800 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-neutral-400 text-xs ml-2 font-mono">Comando / Código</span>
            </div>
            <pre className="bg-neutral-900 text-neutral-100 p-4 overflow-x-auto" {...props}>
                {children}
            </pre>
        </div>
    ),
    hr: () => (
        <div className="my-8 flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            <div className="mx-4 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <div className="w-2 h-2 rounded-full bg-blue-300" />
                <div className="w-2 h-2 rounded-full bg-blue-200" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        </div>
    ),
    img: ({ src, alt, ...props }: any) => (
        <div className="my-6">
            <div className="bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-neutral-200 rounded-lg flex items-center justify-center">
                        <FileText className="w-8 h-8 text-neutral-400" />
                    </div>
                    <p className="text-sm text-neutral-500 font-medium">{alt || 'Imagen del curso'}</p>
                    <p className="text-xs text-neutral-400">El profesor agregará la imagen correspondiente</p>
                </div>
            </div>
        </div>
    ),
    strong: ({ children, ...props }: any) => (
        <strong className="font-semibold text-neutral-900" {...props}>{children}</strong>
    ),
};

export default async function LessonPage({ params }: PageProps) {
    const { slug, moduleId, lessonSlug } = await params;

    const course = await getCourse(slug);
    if (!course) {
        notFound();
    }

    const lesson = await getLesson(slug, moduleId, lessonSlug);
    if (!lesson) {
        notFound();
    }

    const modules = course.modules || [];

    // Find current position and navigation
    let prevLesson: { moduleId: string; slug: string } | null = null;
    let nextLesson: { moduleId: string; slug: string } | null = null;

    // Build flat list of all lessons for navigation
    const allLessons: { moduleId: string; lessonSlug: string; moduleIndex: number; lessonIndex: number }[] = [];
    modules.forEach((mod, mIdx) => {
        mod.lessons?.forEach((les, lIdx) => {
            allLessons.push({
                moduleId: mod.id,
                lessonSlug: les.slug,
                moduleIndex: mIdx,
                lessonIndex: lIdx
            });
        });
    });

    const currentIndex = allLessons.findIndex(
        l => l.moduleId === moduleId && l.lessonSlug === lessonSlug
    );

    if (currentIndex > 0) {
        const prev = allLessons[currentIndex - 1];
        prevLesson = { moduleId: prev.moduleId, slug: prev.lessonSlug };
    }
    if (currentIndex < allLessons.length - 1) {
        const next = allLessons[currentIndex + 1];
        nextLesson = { moduleId: next.moduleId, slug: next.lessonSlug };
    }

    const currentModule = modules.find(m => m.id === moduleId);

    // Calculate progress
    const progress = Math.round(((currentIndex + 1) / allLessons.length) * 100);

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white sticky top-0 z-30 shadow-lg">
                <div className="max-w-5xl mx-auto px-8 py-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 text-blue-200 text-sm mb-1">
                                <BookOpen className="w-4 h-4" />
                                <span>{currentModule?.title}</span>
                            </div>
                            <h1 className="text-2xl font-bold">{lesson.title}</h1>
                        </div>
                        <div className="flex items-center gap-6">
                            {lesson.duration && (
                                <div className="flex items-center gap-2 text-blue-100">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-medium">{lesson.duration} min</span>
                                </div>
                            )}
                            <div className="hidden md:flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">
                                <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white rounded-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <span className="text-sm font-medium">{progress}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-neutral-100">
                <div className="max-w-5xl mx-auto px-8 py-3">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Link href={`/es/cursos/${slug}`} className="hover:text-blue-600 transition-colors">
                            {course.title}
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-neutral-400">{currentModule?.title}</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-neutral-700 font-medium">Lección {currentIndex + 1}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-8 py-10">
                {/* Lesson Info Card */}
                <Card className="mb-8 p-6 bg-gradient-to-br from-white to-neutral-50 border-neutral-200 shadow-sm">
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Lección</p>
                                <p className="font-bold text-neutral-900">{currentIndex + 1} de {allLessons.length}</p>
                            </div>
                        </div>
                        {lesson.duration && (
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500">Duración</p>
                                    <p className="font-bold text-neutral-900">{lesson.duration} minutos</p>
                                </div>
                            </div>
                        )}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Target className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Módulo</p>
                                <p className="font-bold text-neutral-900">{currentModule?.title?.split('-')[0]?.trim() || 'Módulo'}</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Main Content */}
                <article
                    className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 md:p-12"
                    style={{ maxWidth: '100%' }}
                >
                    <div className="lesson-content">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={MarkdownComponents}
                        >
                            {lesson.content || '*Esta lección no tiene contenido todavía.*'}
                        </ReactMarkdown>
                    </div>
                </article>

                {/* Tips Card */}
                <Card className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-amber-900 mb-1">Consejo de estudio</h3>
                            <p className="text-amber-800 text-sm">
                                Practica los comandos en AutoCAD mientras estudias. La mejor forma de aprender es haciendo.
                                Toma notas de los comandos más importantes y crea tu propia biblioteca de referencia rápida.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Navigation Footer */}
            <div className="bg-white border-t border-neutral-200 sticky bottom-0 shadow-lg">
                <div className="max-w-5xl mx-auto px-8 py-4">
                    <div className="flex items-center justify-between">
                        {prevLesson ? (
                            <Link href={`/es/cursos/${slug}/aprender/${prevLesson.moduleId}/${prevLesson.slug}`}>
                                <Button variant="outline" className="gap-2 hover:bg-neutral-50">
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="hidden sm:inline">Lección Anterior</span>
                                    <span className="sm:hidden">Anterior</span>
                                </Button>
                            </Link>
                        ) : (
                            <div />
                        )}

                        <div className="text-center hidden md:block">
                            <div className="flex items-center gap-2">
                                {allLessons.slice(Math.max(0, currentIndex - 2), Math.min(allLessons.length, currentIndex + 3)).map((_, idx) => {
                                    const actualIdx = Math.max(0, currentIndex - 2) + idx;
                                    return (
                                        <div
                                            key={actualIdx}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                actualIdx === currentIndex
                                                    ? 'w-6 bg-blue-600'
                                                    : actualIdx < currentIndex
                                                        ? 'bg-green-500'
                                                        : 'bg-neutral-300'
                                            }`}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        {nextLesson ? (
                            <Link href={`/es/cursos/${slug}/aprender/${nextLesson.moduleId}/${nextLesson.slug}`}>
                                <Button className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-md">
                                    <span className="hidden sm:inline">Siguiente Lección</span>
                                    <span className="sm:hidden">Siguiente</span>
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        ) : (
                            <Link href={`/es/cursos/${slug}`}>
                                <Button className="gap-2 bg-green-600 hover:bg-green-700 shadow-md">
                                    <CheckCircle className="w-4 h-4" />
                                    <span className="hidden sm:inline">Finalizar Curso</span>
                                    <span className="sm:hidden">Finalizar</span>
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
