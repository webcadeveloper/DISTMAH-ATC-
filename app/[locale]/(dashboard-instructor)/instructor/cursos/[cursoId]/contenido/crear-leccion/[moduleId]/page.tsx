'use client';

import { useParams } from 'next/navigation';
import { LessonEditor } from '@/components/cms/LessonEditor/LessonEditor';

export default function CreateLessonPage() {
    const params = useParams();
    const courseId = params.cursoId as string;
    const moduleId = params.moduleId as string;

    return (
        <LessonEditor
            courseId={courseId}
            moduleId={moduleId}
            onSave={(data) => {
                console.log('Lesson created:', data);
                // Redirect handled in component or here
                window.history.back();
            }}
        />
    );
}
