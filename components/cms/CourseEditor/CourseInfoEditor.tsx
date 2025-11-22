'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';

const courseSchema = z.object({
    title: z.string().min(5, 'El título debe tener al menos 5 caracteres'),
    slug: z.string().min(3, 'El slug debe tener al menos 3 caracteres'),
    description: z.string().min(20, 'La descripción debe ser más detallada'),
    category: z.enum(['AUTOCAD', 'REVIT', 'CIVIL3D', 'NAVISWORKS', 'BIM360']),
    level: z.enum(['BASICO', 'INTERMEDIO', 'AVANZADO']),
    version: z.string().default('2026'),
    software: z.string(),
    price: z.coerce.number().min(0),
});

type CourseFormData = z.infer<typeof courseSchema>;

interface CourseInfoEditorProps {
    initialData?: Partial<CourseFormData>;
    onSave: (data: CourseFormData) => void;
}

export function CourseInfoEditor({ initialData, onSave }: CourseInfoEditorProps) {
    const form = useForm<CourseFormData>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            title: initialData?.title || '',
            slug: initialData?.slug || '',
            description: initialData?.description || '',
            category: initialData?.category || 'AUTOCAD',
            level: initialData?.level || 'BASICO',
            version: initialData?.version || '2026',
            software: initialData?.software || 'AutoCAD 2026',
            price: initialData?.price || 0,
        },
    });

    const onSubmit = (data: CourseFormData) => {
        onSave(data);
        toast.success('Información del curso guardada');
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Información del Curso</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Título del Curso</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ej: AutoCAD 2D 2026 - Nivel Básico" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Slug (URL)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="autocad-2d-2026" {...field} />
                                        </FormControl>
                                        <FormDescription>Identificador único para la URL del curso.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Descripción</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Descripción detallada del curso..." rows={4} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Categoría</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona categoría" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="AUTOCAD">AutoCAD</SelectItem>
                                                <SelectItem value="REVIT">Revit</SelectItem>
                                                <SelectItem value="CIVIL3D">Civil 3D</SelectItem>
                                                <SelectItem value="NAVISWORKS">Navisworks</SelectItem>
                                                <SelectItem value="BIM360">BIM 360</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="level"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nivel</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona nivel" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="BASICO">Básico</SelectItem>
                                                <SelectItem value="INTERMEDIO">Intermedio</SelectItem>
                                                <SelectItem value="AVANZADO">Avanzado</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Precio (USD)</FormLabel>
                                        <FormControl>
                                            <Input type="number" min="0" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="software"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Software</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ej: AutoCAD 2026" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="version"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Versión</FormLabel>
                                        <FormControl>
                                            <Input placeholder="2026" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit">Guardar Información</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
