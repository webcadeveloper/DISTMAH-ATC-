'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
// POSTPONED: CourseInfoEditor - Phase 6 (CMS Development)
// import { CourseInfoEditor } from '@/components/cms/CourseEditor/CourseInfoEditor';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';

export default function EditCourseInfoPage() {
    const params = useParams();
    const courseId = params.cursoId as string;
    const course = COURSES_2026.find(c => c.id === courseId);

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="mb-8">
                <Link href="/instructor/cursos" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 mb-4">
                    <ArrowLeft className="w-4 h-4" /> Volver a mis cursos
                </Link>
                <h1 className="text-3xl font-bold text-neutral-900">Editar Información del Curso</h1>
            </div>

            {/* POSTPONED: CourseInfoEditor - Phase 6 (CMS Development) */}
            <div className="p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <h2 className="text-xl font-semibold mb-2">Editor de Curso - En Desarrollo</h2>
                <p className="text-gray-600">
                    Esta funcionalidad será implementada en Phase 6 (CMS Development).
                </p>
                <p className="text-sm text-gray-500 mt-4">
                    Curso seleccionado: <strong>{course?.title}</strong>
                </p>
            </div>

            {/*
            <CourseInfoEditor
                initialData={{
                    title: course?.title,
                    slug: course?.slug,
                    description: course?.description,
                    category: course?.category,
                    level: course?.level,
                    version: course?.version,
                    price: course?.price,
                }}
                onSave={(data) => {
                    console.log('Course info updated:', data);
                    window.history.back();
                }}
            />
            */}
        </div>
    );
}
