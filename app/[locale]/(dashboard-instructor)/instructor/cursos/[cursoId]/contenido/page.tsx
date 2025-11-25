import { Button } from '@/components/ui/button';
import { Plus, ArrowLeft, GripVertical, FileText, Video, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { getCourse } from '@/lib/course-loader';

export default async function CourseContentPage({ params }: { params: { cursoId: string } }) {
    const cursoId = params.cursoId;
    const courseMeta = COURSES_2026.find(c => c.id === cursoId);

    if (!courseMeta) return <div className="p-8">Curso no encontrado</div>;

    let courseData;
    try {
        courseData = await getCourse(courseMeta.slug);
    } catch (error) {
        return <div className="p-8">Error cargando contenido del curso</div>;
    }

    const modules = courseData.modules || [];

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8">
                <Link href="/instructor/dashboard" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 mb-4">
                    <ArrowLeft className="w-4 h-4" /> Volver al Dashboard
                </Link>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-900 mb-2">{courseMeta.title}</h1>
                        <p className="text-neutral-600">Gestiona la estructura y contenido del curso.</p>
                    </div>
                    <Button className="bg-primary-600 hover:bg-primary-700">
                        <Plus className="w-4 h-4 mr-2" /> Nuevo Módulo
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <Accordion type="multiple" defaultValue={modules.map((m: any) => m.id)} className="w-full space-y-4">
                    {modules.map((module: any, index: number) => (
                        <AccordionItem key={module.id} value={module.id} className="border border-neutral-200 rounded-lg bg-white px-4">
                            <div className="flex items-center py-4">
                                <GripVertical className="w-5 h-5 text-neutral-400 mr-2 cursor-move" />
                                <AccordionTrigger className="hover:no-underline py-0 flex-grow">
                                    <div className="flex flex-col items-start text-left">
                                        <span className="text-sm font-medium text-neutral-500">Módulo {index + 1}</span>
                                        <span className="text-lg font-semibold text-neutral-900">{module.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <div className="flex items-center gap-2 ml-4">
                                    <Button variant="outline" size="sm">
                                        <Plus className="w-4 h-4 mr-2" /> Lección
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        <MoreVertical className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <AccordionContent className="pt-0 pb-4 pl-10 pr-4">
                                <div className="space-y-2 mt-2">
                                    {module.lessons && module.lessons.length > 0 ? (
                                        module.lessons.map((lesson: any) => (
                                            <div key={lesson.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded border border-neutral-100 group hover:border-neutral-300 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <GripVertical className="w-4 h-4 text-neutral-300 cursor-move opacity-0 group-hover:opacity-100" />
                                                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-neutral-200">
                                                        <FileText className="w-4 h-4 text-orange-500" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-neutral-900">{lesson.title}</p>
                                                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                                                            <span>{lesson.duration} min</span>
                                                            <Badge variant="secondary" className="text-[10px] h-4 px-1">MARKDOWN</Badge>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Link href={`/instructor/cursos/${courseMeta.id}/contenido/editar-leccion/${module.id}/${lesson.slug}`}>
                                                        <Button variant="ghost" size="sm">Editar</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-6 border-2 border-dashed border-neutral-200 rounded bg-neutral-50/50">
                                            <p className="text-sm text-neutral-500 mb-2">Este módulo no tiene lecciones</p>
                                            <Button variant="outline" size="sm">
                                                <Plus className="w-3 h-3 mr-2" /> Agregar primera lección
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {modules.length === 0 && (
                    <div className="text-center py-12 border-2 border-dashed border-neutral-200 rounded-lg bg-neutral-50">
                        <h3 className="text-lg font-medium text-neutral-900 mb-2">El curso está vacío</h3>
                        <p className="text-neutral-500 mb-6">Comienza creando la estructura de módulos basada en el manual.</p>
                        <Button>
                            <Plus className="w-4 h-4 mr-2" /> Crear Primer Módulo
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
