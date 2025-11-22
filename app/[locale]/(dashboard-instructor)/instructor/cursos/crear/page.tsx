'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function CreateCoursePage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        category: '',
        level: '',
        description: '',
        price: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success('Curso creado exitosamente');
        // In a real app, we would get the ID from the response
        // For now, redirect to the dashboard
        router.push('/instructor/dashboard');
    };

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <div className="mb-8">
                <Link
                    href="/instructor/dashboard"
                    className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 mb-4"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver al Dashboard
                </Link>
                <h1 className="text-3xl font-bold text-neutral-900">Crear Nuevo Curso</h1>
                <p className="text-neutral-600">Define la información básica de tu curso.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Información General</CardTitle>
                        <CardDescription>
                            Estos detalles serán visibles en el catálogo de cursos.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Título del Curso</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Ej. AutoCAD 2D 2026 - Nivel Avanzado"
                                required
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subtitle">Subtítulo Corto</Label>
                            <Input
                                id="subtitle"
                                name="subtitle"
                                placeholder="Breve descripción de una línea"
                                required
                                value={formData.subtitle}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="category">Categoría</Label>
                                <Select
                                    onValueChange={(value) => handleSelectChange('category', value)}
                                    required
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="autocad">AutoCAD</SelectItem>
                                        <SelectItem value="revit">Revit</SelectItem>
                                        <SelectItem value="civil3d">Civil 3D</SelectItem>
                                        <SelectItem value="navisworks">Navisworks</SelectItem>
                                        <SelectItem value="other">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="level">Nivel</Label>
                                <Select
                                    onValueChange={(value) => handleSelectChange('level', value)}
                                    required
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="basic">Básico</SelectItem>
                                        <SelectItem value="intermediate">Intermedio</SelectItem>
                                        <SelectItem value="advanced">Avanzado</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Descripción Completa</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Detalla qué aprenderán los estudiantes..."
                                className="min-h-[150px]"
                                required
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="price">Precio (USD)</Label>
                            <Input
                                id="price"
                                name="price"
                                type="number"
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                required
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="pt-4 flex justify-end gap-4">
                            <Link href="/instructor/dashboard">
                                <Button type="button" variant="outline">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" className="bg-primary-600 hover:bg-primary-700" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Creando...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-4 h-4 mr-2" /> Crear Curso
                                    </>
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}
