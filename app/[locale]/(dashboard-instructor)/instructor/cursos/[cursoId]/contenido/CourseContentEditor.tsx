'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, GripVertical } from 'lucide-react';
import { toast } from 'sonner';
import { Course, Module, Lesson } from '@prisma/client';

type CourseWithModules = Course & {
  modules: (Module & {
    lessons: Lesson[];
  })[];
};

interface CourseContentEditorProps {
  course: CourseWithModules;
}

export default function CourseContentEditor({ course: initialCourse }: CourseContentEditorProps) {
  const router = useRouter();
  const [course, setCourse] = useState(initialCourse);
  const [isCreatingModule, setIsCreatingModule] = useState(false);

  const handleAddModule = async () => {
    setIsCreatingModule(true);
    try {
      const response = await fetch(`/api/courses/${course.id}/modules`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Nuevo Módulo',
          description: '',
          duration: 2,
        }),
      });

      if (!response.ok) throw new Error('Error al crear módulo');

      const newModule = await response.json();
      setCourse({
        ...course,
        modules: [...course.modules, newModule],
      });
      toast.success('Módulo creado exitosamente');
      router.refresh();
    } catch (error) {
      toast.error('Error al crear módulo');
      console.error(error);
    } finally {
      setIsCreatingModule(false);
    }
  };

  const handleDeleteModule = async (moduleId: string) => {
    if (!confirm('¿Estás seguro de eliminar este módulo y todas sus lecciones?')) {
      return;
    }

    try {
      const response = await fetch(
        `/api/courses/${course.id}/modules/${moduleId}`,
        { method: 'DELETE' }
      );

      if (!response.ok) throw new Error('Error al eliminar módulo');

      setCourse({
        ...course,
        modules: course.modules.filter((m) => m.id !== moduleId),
      });
      toast.success('Módulo eliminado');
      router.refresh();
    } catch (error) {
      toast.error('Error al eliminar módulo');
      console.error(error);
    }
  };

  const handleDeleteLesson = async (moduleId: string, lessonId: string) => {
    if (!confirm('¿Estás seguro de eliminar esta lección?')) {
      return;
    }

    try {
      const response = await fetch(
        `/api/courses/${course.id}/modules/${moduleId}/lessons/${lessonId}`,
        { method: 'DELETE' }
      );

      if (!response.ok) throw new Error('Error al eliminar lección');

      setCourse({
        ...course,
        modules: course.modules.map((m) =>
          m.id === moduleId
            ? { ...m, lessons: m.lessons.filter((l) => l.id !== lessonId) }
            : m
        ),
      });
      toast.success('Lección eliminada');
      router.refresh();
    } catch (error) {
      toast.error('Error al eliminar lección');
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6 pb-6 border-b border-neutral-100">
        <h2 className="text-xl font-semibold">Estructura del Curso</h2>
        <Button
          onClick={handleAddModule}
          disabled={isCreatingModule}
          className="bg-primary-600 hover:bg-primary-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Agregar Módulo
        </Button>
      </div>

      <div className="space-y-6">
        {course.modules.map((module, index) => (
          <div
            key={module.id}
            className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden"
          >
            {/* Module Header */}
            <div className="p-4 bg-white border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <GripVertical className="w-5 h-5 text-neutral-400 cursor-grab" />
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900">
                    Módulo {index + 1}: {module.title}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {module.lessons.length} lecciones · {module.duration}h
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    // TODO: Implementar edición inline o modal
                    toast.info('Funcionalidad de edición próximamente');
                  }}
                >
                  <Edit className="w-4 h-4 text-neutral-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteModule(module.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </div>

            {/* Lessons List */}
            <div className="bg-neutral-50 p-4 pl-12">
              <div className="space-y-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lesson.id}
                    className="bg-white rounded-lg border border-neutral-200 p-3 flex items-center justify-between hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <GripVertical className="w-4 h-4 text-neutral-400 cursor-grab" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-neutral-900">
                          {lessonIndex + 1}. {lesson.title}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {lesson.type} · {lesson.duration} min
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          router.push(
                            `/instructor/cursos/${course.id}/contenido/editar-leccion/${lesson.id}`
                          )
                        }
                      >
                        <Edit className="w-4 h-4 text-neutral-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteLesson(module.id, lesson.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Add Lesson Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() =>
                    router.push(
                      `/instructor/cursos/${course.id}/contenido/crear-leccion/${module.id}`
                    )
                  }
                >
                  <Plus className="w-4 h-4 mr-2" /> Agregar Lección
                </Button>
              </div>
            </div>
          </div>
        ))}

        {course.modules.length === 0 && (
          <div className="text-center py-12 text-neutral-500">
            No hay módulos creados. Comienza agregando uno.
          </div>
        )}
      </div>
    </div>
  );
}
