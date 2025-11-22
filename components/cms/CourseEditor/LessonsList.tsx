'use client';

import { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Pencil, Trash2, Plus, Video, FileText, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Lesson {
    id: string;
    title: string;
    type: 'VIDEO' | 'READING' | 'EXERCISE' | 'LIVE_CLASS' | 'QUIZ';
    duration: number;
}

interface LessonsListProps {
    moduleId: string;
    lessons: Lesson[];
    onReorder: (lessons: Lesson[]) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onAdd: () => void;
}

export function LessonsList({ moduleId, lessons: initialLessons, onReorder, onEdit, onDelete, onAdd }: LessonsListProps) {
    const [lessons, setLessons] = useState(initialLessons);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setLessons((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                const newItems = arrayMove(items, oldIndex, newIndex);
                onReorder(newItems);
                return newItems;
            });
        }
    }

    return (
        <div className="pl-8 pr-4 py-2 space-y-2 border-l-2 border-neutral-100 ml-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-neutral-500 uppercase">Lecciones</span>
                <Button onClick={onAdd} variant="ghost" size="sm" className="h-6 text-xs gap-1 text-primary-600 hover:text-primary-700 hover:bg-primary-50">
                    <Plus className="w-3 h-3" /> Agregar Lección
                </Button>
            </div>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={lessons.map(l => l.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="space-y-1">
                        {lessons.map((lesson) => (
                            <SortableLessonItem
                                key={lesson.id}
                                lesson={lesson}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
}

function SortableLessonItem({ lesson, onEdit, onDelete }: { lesson: Lesson; onEdit: (id: string) => void; onDelete: (id: string) => void }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: lesson.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : 1,
        opacity: isDragging ? 0.5 : 1,
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'VIDEO': return <Video className="w-4 h-4 text-blue-500" />;
            case 'READING': return <FileText className="w-4 h-4 text-green-500" />;
            case 'EXERCISE': return <Dumbbell className="w-4 h-4 text-orange-500" />;
            default: return <FileText className="w-4 h-4 text-neutral-500" />;
        }
    };

    return (
        <div ref={setNodeRef} style={style} className={cn(
            "flex items-center gap-3 p-2 rounded-md bg-white border border-neutral-200 hover:border-primary-300 transition-colors",
            isDragging && "shadow-md ring-1 ring-primary-500"
        )}>
            <div {...attributes} {...listeners} className="cursor-grab text-neutral-300 hover:text-neutral-500">
                <GripVertical className="w-4 h-4" />
            </div>

            <div className="flex-shrink-0">
                {getIcon(lesson.type)}
            </div>

            <div className="flex-grow min-w-0">
                <p className="text-sm font-medium text-neutral-900 truncate">{lesson.title}</p>
                <p className="text-[10px] text-neutral-500">{lesson.duration} min</p>
            </div>

            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onEdit(lesson.id)}>
                    <Pencil className="w-3 h-3 text-neutral-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onDelete(lesson.id)}>
                    <Trash2 className="w-3 h-3 text-red-500" />
                </Button>
            </div>
        </div>
    );
}
