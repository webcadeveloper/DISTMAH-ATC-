'use client';

import { useParams } from 'next/navigation';
import { LessonEditor } from '@/components/cms/LessonEditor/LessonEditor';

export default function EditLessonPage() {
    const params = useParams();
    const courseId = params.cursoId as string;
    const lessonId = params.lessonId as string;

    // Mock data fetch
    const initialData = {
        title: 'Lección Ejemplo',
        description: 'Descripción de prueba',
        duration: 45,
        type: 'video' as const,
        richText: '<p>Contenido de prueba...</p>',
    };

    return (
        <LessonEditor
            courseId={courseId}
            moduleId="mock-module-id" // In real app, fetch this
            lessonId={lessonId}
            initialData={initialData}
            onSave={(data) => {
                console.log('Lesson updated:', data);
                window.history.back();
            }}
        />
    );
}
