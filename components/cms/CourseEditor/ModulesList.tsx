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
import { GripVertical, Pencil, Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Module {
    id: string;
    title: string;
    lessonsCount: number;
}

interface ModulesListProps {
    modules: Module[];
    onReorder: (modules: Module[]) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onAdd: () => void;
}

export function ModulesList({ modules: initialModules, onReorder, onEdit, onDelete, onAdd }: ModulesListProps) {
    const [modules, setModules] = useState(initialModules);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setModules((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                const newItems = arrayMove(items, oldIndex, newIndex);
                onReorder(newItems);
                return newItems;
            });
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Módulos del Curso</h3>
                <Button onClick={onAdd} size="sm" className="gap-2">
                    <Plus className="w-4 h-4" /> Nuevo Módulo
                </Button>
            </div>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={modules.map(m => m.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="space-y-2">
                        {modules.map((module) => (
                            <SortableModuleItem
                                key={module.id}
                                module={module}
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

function SortableModuleItem({ module, onEdit, onDelete }: { module: Module; onEdit: (id: string) => void; onDelete: (id: string) => void }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: module.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : 1,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} className="relative">
            <Card className={cn("p-4 flex items-center gap-4 hover:shadow-md transition-shadow", isDragging && "shadow-lg ring-2 ring-primary-500")}>
                <div {...attributes} {...listeners} className="cursor-grab text-neutral-400 hover:text-neutral-600">
                    <GripVertical className="w-5 h-5" />
                </div>

                <div className="flex-grow">
                    <h4 className="font-medium text-neutral-900">{module.title}</h4>
                    <p className="text-xs text-neutral-500">{module.lessonsCount} lecciones</p>
                </div>

                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => onEdit(module.id)}>
                        <Pencil className="w-4 h-4 text-neutral-500" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => onDelete(module.id)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                </div>
            </Card>
        </div>
    );
}
