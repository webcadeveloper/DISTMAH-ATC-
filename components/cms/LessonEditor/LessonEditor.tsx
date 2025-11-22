'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LessonType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TipTapEditor } from '../RichTextEditor/TipTapEditor';
import { VideoUploader } from '../MediaLibrary/VideoUploader';
import { FileUploader } from '../MediaLibrary/FileUploader';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const lessonSchema = z.object({
    title: z.string().min(1, 'Título requerido'),
    description: z.string().optional(),
    duration: z.coerce.number().min(1, 'Duración mínima 1 minuto'),
    type: z.enum(['video', 'reading', 'exercise', 'live-class', 'quiz'] as const),
    richText: z.string().optional(),
    videoUrl: z.string().url().optional().or(z.literal('')),
    files: z.array(z.object({
        title: z.string(),
        url: z.string(),
        type: z.string(),
        size: z.number().optional(),
    })).optional(),
});

type LessonFormData = z.infer<typeof lessonSchema>;

interface LessonEditorProps {
    lessonId?: string;
    moduleId: string;
    courseId: string;
    initialData?: Partial<LessonFormData>;
    onSave?: (data: LessonFormData) => void;
}

export function LessonEditor({
    lessonId,
    moduleId,
    courseId,
    initialData,
    onSave,
}: LessonEditorProps) {
    const router = useRouter();
    const [saving, setSaving] = useState(false);
    const [richTextContent, setRichTextContent] = useState(initialData?.richText || '');
    const [attachedFiles, setAttachedFiles] = useState<any[]>(initialData?.files || []);

    const form = useForm<LessonFormData>({
        resolver: zodResolver(lessonSchema),
        defaultValues: {
            title: initialData?.title || '',
            description: initialData?.description || '',
            duration: initialData?.duration || 30,
            type: initialData?.type || 'video',
            videoUrl: initialData?.videoUrl || '',
            ...initialData
        },
    });

    const lessonType = form.watch('type');

    const handleSaveLesson = async (data: LessonFormData) => {
        setSaving(true);

        try {
            const lessonData = {
                ...data,
                richText: richTextContent,
                files: attachedFiles,
                moduleId,
            };

            console.log('Saving lesson:', lessonData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            toast.success(lessonId ? 'Lección actualizada' : 'Lección creada exitosamente');

            if (onSave) {
                onSave(lessonData);
            } else {
                // router.push(`/instructor/cursos/${courseId}/contenido`);
            }
        } catch (error) {
            toast.error('Error al guardar la lección');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                    {lessonId ? 'Editar Lección' : 'Crear Nueva Lección'}
                </h1>
                <p className="text-neutral-600">
                    Crea el contenido de tu lección. Puedes incluir videos, texto enriquecido y archivos adjuntos.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSaveLesson)}>
                    <div className="grid gap-6">
                        {/* INFORMACIÓN BÁSICA */}
                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Información Básica</h2>

                            <div className="grid gap-4">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Título de la Lección *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ej: Comandos de Dibujo Básicos" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Descripción Breve</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Breve descripción de lo que aprenderán..." rows={3} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Tipo de Lección *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Selecciona un tipo" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="video">Video Lección</SelectItem>
                                                        <SelectItem value="reading">Lectura/Texto</SelectItem>
                                                        <SelectItem value="exercise">Ejercicio Práctico</SelectItem>
                                                        <SelectItem value="live-class">Clase en Vivo (Teams)</SelectItem>
                                                        <SelectItem value="quiz">Quiz</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="duration"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Duración (minutos) *</FormLabel>
                                                <FormControl>
                                                    <Input type="number" min="1" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </Card>

                        {/* CONTENIDO DE LA LECCIÓN */}
                        <Card className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Contenido de la Lección</h2>

                            <Tabs defaultValue="content" className="w-full">
                                <TabsList className="mb-4">
                                    <TabsTrigger value="content">📝 Contenido</TabsTrigger>
                                    {lessonType === 'video' && (
                                        <TabsTrigger value="video">🎥 Video</TabsTrigger>
                                    )}
                                    <TabsTrigger value="files">📎 Archivos Adjuntos</TabsTrigger>
                                </TabsList>

                                {/* TAB: Contenido (Editor de texto enriquecido) */}
                                <TabsContent value="content" className="space-y-4">
                                    <div>
                                        <FormLabel className="mb-2 block">Contenido de la Lección</FormLabel>
                                        <p className="text-sm text-neutral-600 mb-3">
                                            Escribe el contenido de tu lección. Puedes usar formato de texto,
                                            imágenes, videos, código, etc.
                                        </p>

                                        {/* EDITOR WYSIWYG (TipTap) */}
                                        <div className="border rounded-lg overflow-hidden">
                                            <TipTapEditor
                                                content={richTextContent}
                                                onChange={setRichTextContent}
                                                placeholder="Escribe aquí el contenido de la lección..."
                                            />
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* TAB: Video (si es lección tipo VIDEO) */}
                                {lessonType === 'video' && (
                                    <TabsContent value="video" className="space-y-4">
                                        <div>
                                            <FormLabel className="mb-2 block">Video de la Lección</FormLabel>
                                            <p className="text-sm text-neutral-600 mb-3">
                                                Sube el video a Microsoft Stream o proporciona la URL del video.
                                            </p>

                                            {/* Uploader de video a OneDrive/Stream */}
                                            <VideoUploader
                                                onVideoUploaded={(url, streamId) => {
                                                    form.setValue('videoUrl', url);
                                                    toast.success('Video subido exitosamente');
                                                }}
                                            />

                                            <div className="mt-4">
                                                <FormField
                                                    control={form.control}
                                                    name="videoUrl"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>O pegar URL del video:</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="https://stream.microsoft.com/..." {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                )}

                                {/* TAB: Archivos Adjuntos */}
                                <TabsContent value="files" className="space-y-4">
                                    <div>
                                        <FormLabel className="mb-2 block">Archivos Adjuntos</FormLabel>
                                        <p className="text-sm text-neutral-600 mb-3">
                                            Sube archivos complementarios (PDFs, archivos CAD, imágenes, etc.)
                                        </p>

                                        {/* Uploader de archivos a OneDrive */}
                                        <FileUploader
                                            acceptedTypes={['.pdf', '.dwg', '.rvt', '.zip', '.jpg', '.png']}
                                            multiple
                                            onFilesUploaded={(files) => {
                                                setAttachedFiles([...attachedFiles, ...files]);
                                                toast.success(`${files.length} archivo(s) subido(s)`);
                                            }}
                                        />

                                        {/* Lista de archivos adjuntos */}
                                        {attachedFiles.length > 0 && (
                                            <div className="mt-4 space-y-2">
                                                <h4 className="text-sm font-medium">Archivos adjuntos:</h4>
                                                {attachedFiles.map((file, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-primary-100 rounded flex items-center justify-center">
                                                                <span className="text-primary-600 text-sm font-medium">
                                                                    {file.type.split('/')[1]?.toUpperCase().slice(0, 3) || 'FIL'}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-medium">{file.title}</p>
                                                                <p className="text-xs text-neutral-600">
                                                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => {
                                                                setAttachedFiles(attachedFiles.filter((_, i) => i !== index));
                                                            }}
                                                        >
                                                            ✕ Eliminar
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </Card>

                        {/* BOTONES DE ACCIÓN */}
                        <div className="flex justify-end gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => router.back()}
                                disabled={saving}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                disabled={saving}
                            >
                                {saving ? 'Guardando...' : lessonId ? 'Guardar Cambios' : 'Crear Lección'}
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
