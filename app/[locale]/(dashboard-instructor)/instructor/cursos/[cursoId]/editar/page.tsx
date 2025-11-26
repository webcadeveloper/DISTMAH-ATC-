'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Loader2, Save, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';

interface CourseData {
    id: string;
    titulo: string;
    slug: string;
    descripcion: string;
    precio: number;
    moneda: string;
    nivel: string;
    categoria: string;
    version: string;
    duracion: string;
    instructor: string;
    objetivos: string[];
    prerequisitos: string[];
    novedades_2026?: string[];
    certificacion?: {
        nombre: string;
        descripcion: string;
        validez: string;
    };
}

export default function EditCourseInfoPage() {
    const params = useParams();
    const courseSlug = params.cursoId as string;
    const [course, setCourse] = useState<CourseData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadCourse() {
            try {
                const res = await fetch(`/api/instructor/cursos/${courseSlug}/curso-json`);
                if (res.ok) {
                    const data = await res.json();
                    setCourse(data);
                } else {
                    setError('Curso no encontrado');
                }
            } catch (err) {
                console.error('Error loading course:', err);
                setError('Error al cargar el curso');
            } finally {
                setLoading(false);
            }
        }
        loadCourse();
    }, [courseSlug]);

    const handleSave = async () => {
        if (!course) return;

        setSaving(true);
        setError(null);

        try {
            const res = await fetch(`/api/instructor/cursos/${courseSlug}/curso-json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(course),
            });

            if (res.ok) {
                toast.success('Curso actualizado exitosamente');
            } else {
                const data = await res.json();
                throw new Error(data.error || 'Error al guardar');
            }
        } catch (err: any) {
            console.error('Error saving course:', err);
            setError(err.message || 'Error al guardar el curso');
            toast.error('Error al guardar');
        } finally {
            setSaving(false);
        }
    };

    const updateField = (field: keyof CourseData, value: any) => {
        if (!course) return;
        setCourse({ ...course, [field]: value });
    };

    const updateArrayField = (field: 'objetivos' | 'prerequisitos' | 'novedades_2026', index: number, value: string) => {
        if (!course) return;
        const arr = [...(course[field] || [])];
        arr[index] = value;
        setCourse({ ...course, [field]: arr });
    };

    const addArrayItem = (field: 'objetivos' | 'prerequisitos' | 'novedades_2026') => {
        if (!course) return;
        const arr = [...(course[field] || []), ''];
        setCourse({ ...course, [field]: arr });
    };

    const removeArrayItem = (field: 'objetivos' | 'prerequisitos' | 'novedades_2026', index: number) => {
        if (!course) return;
        const arr = [...(course[field] || [])];
        arr.splice(index, 1);
        setCourse({ ...course, [field]: arr });
    };

    if (loading) {
        return (
            <div className="p-8 max-w-4xl mx-auto text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-neutral-400" />
                <p className="mt-2 text-neutral-500">Cargando curso...</p>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="p-8 max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/es/instructor/cursos" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 mb-4">
                        <ArrowLeft className="w-4 h-4" /> Volver a mis cursos
                    </Link>
                </div>
                <div className="p-8 bg-neutral-50 rounded-lg border-2 border-dashed border-neutral-300 text-center">
                    <h2 className="text-xl font-semibold mb-2 text-neutral-700">Curso no encontrado</h2>
                    <p className="text-neutral-500 mb-4">
                        El curso &quot;{courseSlug}&quot; no existe en /public/cursos/
                    </p>
                    <Link href="/es/instructor/cursos">
                        <Button variant="outline">Volver a Mis Cursos</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="mb-8 flex justify-between items-start">
                <div>
                    <Link href="/es/instructor/cursos" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 mb-4">
                        <ArrowLeft className="w-4 h-4" /> Volver a mis cursos
                    </Link>
                    <h1 className="text-3xl font-bold text-neutral-900">Editar Informacion del Curso</h1>
                    <p className="text-neutral-500 mt-1">Slug: {courseSlug}</p>
                </div>
                <Button onClick={handleSave} disabled={saving} className="bg-twilight hover:bg-twilight-dark">
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? 'Guardando...' : 'Guardar Cambios'}
                </Button>
            </div>

            {error && (
                <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="space-y-8">
                {/* Informacion Basica */}
                <section className="bg-white rounded-lg border border-neutral-200 p-6">
                    <h2 className="text-xl font-semibold mb-4 text-neutral-900">Informacion Basica</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Titulo del Curso</label>
                            <Input
                                value={course.titulo}
                                onChange={(e) => updateField('titulo', e.target.value)}
                                placeholder="Titulo del curso"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Descripcion</label>
                            <Textarea
                                value={course.descripcion}
                                onChange={(e) => updateField('descripcion', e.target.value)}
                                placeholder="Descripcion del curso"
                                rows={4}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Instructor</label>
                                <Input
                                    value={course.instructor}
                                    onChange={(e) => updateField('instructor', e.target.value)}
                                    placeholder="Nombre del instructor"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Duracion</label>
                                <Input
                                    value={course.duracion}
                                    onChange={(e) => updateField('duracion', e.target.value)}
                                    placeholder="ej: 40 horas"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categoria y Nivel */}
                <section className="bg-white rounded-lg border border-neutral-200 p-6">
                    <h2 className="text-xl font-semibold mb-4 text-neutral-900">Categoria y Nivel</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Categoria</label>
                            <select
                                value={course.categoria}
                                onChange={(e) => updateField('categoria', e.target.value)}
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-twilight"
                            >
                                <option value="AutoCAD">AutoCAD</option>
                                <option value="Revit">Revit</option>
                                <option value="Civil 3D">Civil 3D</option>
                                <option value="Navisworks">Navisworks</option>
                                <option value="3ds Max">3ds Max</option>
                                <option value="Inventor">Inventor</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Nivel</label>
                            <select
                                value={course.nivel}
                                onChange={(e) => updateField('nivel', e.target.value)}
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-twilight"
                            >
                                <option value="Basico">Basico</option>
                                <option value="Intermedio">Intermedio</option>
                                <option value="Avanzado">Avanzado</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Version</label>
                            <select
                                value={course.version}
                                onChange={(e) => updateField('version', e.target.value)}
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-twilight"
                            >
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Precio */}
                <section className="bg-white rounded-lg border border-neutral-200 p-6">
                    <h2 className="text-xl font-semibold mb-4 text-neutral-900">Precio</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Precio</label>
                            <Input
                                type="number"
                                value={course.precio}
                                onChange={(e) => updateField('precio', parseInt(e.target.value) || 0)}
                                placeholder="390"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Moneda</label>
                            <select
                                value={course.moneda}
                                onChange={(e) => updateField('moneda', e.target.value)}
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-twilight"
                            >
                                <option value="USD">USD</option>
                                <option value="MXN">MXN</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Objetivos */}
                <section className="bg-white rounded-lg border border-neutral-200 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-neutral-900">Objetivos de Aprendizaje</h2>
                        <Button variant="outline" size="sm" onClick={() => addArrayItem('objetivos')}>
                            + Agregar
                        </Button>
                    </div>
                    <div className="space-y-2">
                        {course.objetivos?.map((objetivo, index) => (
                            <div key={index} className="flex gap-2">
                                <Input
                                    value={objetivo}
                                    onChange={(e) => updateArrayField('objetivos', index, e.target.value)}
                                    placeholder={`Objetivo ${index + 1}`}
                                />
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeArrayItem('objetivos', index)}
                                    className="text-dusk hover:text-dusk-dark"
                                >
                                    X
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Prerequisitos */}
                <section className="bg-white rounded-lg border border-neutral-200 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-neutral-900">Prerequisitos</h2>
                        <Button variant="outline" size="sm" onClick={() => addArrayItem('prerequisitos')}>
                            + Agregar
                        </Button>
                    </div>
                    <div className="space-y-2">
                        {course.prerequisitos?.map((prereq, index) => (
                            <div key={index} className="flex gap-2">
                                <Input
                                    value={prereq}
                                    onChange={(e) => updateArrayField('prerequisitos', index, e.target.value)}
                                    placeholder={`Prerequisito ${index + 1}`}
                                />
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeArrayItem('prerequisitos', index)}
                                    className="text-dusk hover:text-dusk-dark"
                                >
                                    X
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Novedades 2026 */}
                {course.version === '2026' && (
                    <section className="bg-twilight/5 rounded-lg border border-twilight/20 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-twilight-dark">Novedades 2026</h2>
                            <Button variant="outline" size="sm" onClick={() => addArrayItem('novedades_2026')}>
                                + Agregar
                            </Button>
                        </div>
                        <div className="space-y-2">
                            {course.novedades_2026?.map((novedad, index) => (
                                <div key={index} className="flex gap-2">
                                    <Input
                                        value={novedad}
                                        onChange={(e) => updateArrayField('novedades_2026', index, e.target.value)}
                                        placeholder={`Novedad ${index + 1}`}
                                    />
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeArrayItem('novedades_2026', index)}
                                        className="text-dusk hover:text-dusk-dark"
                                    >
                                        X
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Certificacion */}
                <section className="bg-white rounded-lg border border-neutral-200 p-6">
                    <h2 className="text-xl font-semibold mb-4 text-neutral-900">Certificacion</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Nombre de la Certificacion</label>
                            <Input
                                value={course.certificacion?.nombre || ''}
                                onChange={(e) => updateField('certificacion', {
                                    ...course.certificacion,
                                    nombre: e.target.value
                                })}
                                placeholder="ej: Autodesk Certified User"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Descripcion</label>
                            <Textarea
                                value={course.certificacion?.descripcion || ''}
                                onChange={(e) => updateField('certificacion', {
                                    ...course.certificacion,
                                    descripcion: e.target.value
                                })}
                                placeholder="Descripcion de la certificacion"
                                rows={2}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Validez</label>
                            <Input
                                value={course.certificacion?.validez || ''}
                                onChange={(e) => updateField('certificacion', {
                                    ...course.certificacion,
                                    validez: e.target.value
                                })}
                                placeholder="ej: 3 anos"
                            />
                        </div>
                    </div>
                </section>

                {/* Boton Final */}
                <div className="flex justify-end gap-4 pt-4">
                    <Link href="/es/instructor/cursos">
                        <Button variant="outline">Cancelar</Button>
                    </Link>
                    <Button onClick={handleSave} disabled={saving} className="bg-twilight hover:bg-twilight-dark">
                        <Save className="w-4 h-4 mr-2" />
                        {saving ? 'Guardando...' : 'Guardar Cambios'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
