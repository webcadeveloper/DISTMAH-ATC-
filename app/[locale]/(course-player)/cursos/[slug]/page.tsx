import { getCourse } from '@/lib/course-loader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Clock, PlayCircle, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CourseOverviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = await getCourse(slug);

    if (!course) {
        notFound();
    }

    const modules = course.modules || [];
    const totalLessons = modules.reduce((acc, m) => acc + (m.lessons?.length || 0), 0);
    const firstLesson = modules[0]?.lessons?.[0];

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">{course.titulo}</h1>
                <p className="text-neutral-600 text-lg">{course.descripcion}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                        <BookOpen className="w-8 h-8 text-primary-600" />
                        <div>
                            <p className="text-2xl font-bold text-neutral-900">{modules.length}</p>
                            <p className="text-sm text-neutral-500">Modulos</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                        <FileText className="w-8 h-8 text-primary-600" />
                        <div>
                            <p className="text-2xl font-bold text-neutral-900">{totalLessons}</p>
                            <p className="text-sm text-neutral-500">Lecciones</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                        <Clock className="w-8 h-8 text-primary-600" />
                        <div>
                            <p className="text-2xl font-bold text-neutral-900">{course.duracion || 'Variable'}</p>
                            <p className="text-sm text-neutral-500">Duracion</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {firstLesson && (
                <div className="mb-8">
                    <Link href={`/es/cursos/${slug}/aprender/${modules[0].id}/${firstLesson.slug}`}>
                        <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                            <PlayCircle className="w-5 h-5 mr-2" />
                            Comenzar Curso
                        </Button>
                    </Link>
                </div>
            )}

            <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-900">Contenido del Curso</h2>

                {modules.map((module, index) => (
                    <Card key={module.id}>
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <p className="text-sm text-neutral-500 mb-1">Modulo {index + 1}</p>
                                    <h3 className="text-lg font-semibold text-neutral-900">{module.title}</h3>
                                </div>
                                <span className="text-sm text-neutral-500">
                                    {module.lessons?.length || 0} lecciones
                                </span>
                            </div>

                            <div className="space-y-2">
                                {module.lessons?.map((lesson, lessonIndex) => (
                                    <Link
                                        key={lesson.id}
                                        href={`/es/cursos/${slug}/aprender/${module.id}/${lesson.slug}`}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-medium text-neutral-600 group-hover:bg-primary-100 group-hover:text-primary-700">
                                            {lessonIndex + 1}
                                        </div>
                                        <div className="flex-grow">
                                            <p className="font-medium text-neutral-900 group-hover:text-primary-700">
                                                {lesson.title}
                                            </p>
                                            {lesson.duration && (
                                                <p className="text-xs text-neutral-500">{lesson.duration} min</p>
                                            )}
                                        </div>
                                        <FileText className="w-4 h-4 text-neutral-400 group-hover:text-primary-600" />
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
