'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, AlertCircle, Eye, Edit3 } from 'lucide-react';
import Link from 'next/link';
import { Alert, AlertDescription } from '@/components/ui/alert';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import dynamic from 'next/dynamic';

const TiptapEditor = dynamic(() => import('@/components/instructor/TiptapEditor').then(mod => mod.TiptapEditor), {
    ssr: false,
    loading: () => <div className="p-4 text-neutral-500">Cargando editor...</div>
});

export default function EditLessonPage() {
    const params = useParams();
    const cursoId = params.cursoId as string;
    const moduleId = params.moduleId as string;
    const lessonSlug = params.lessonSlug as string;

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState(30);
    const [content, setContent] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [editorMode, setEditorMode] = useState<'wysiwyg' | 'markdown'>('wysiwyg');

    const [courseSlug, setCourseSlug] = useState<string>('');

    useEffect(() => {
        fetch('/api/cursos')
            .then(res => res.json())
            .then(courses => {
                const course = courses.find((c: any) => c.id === cursoId);
                if (course) {
                    setCourseSlug(course.slug);
                }
            })
            .catch(err => {
                console.error('Error loading course:', err);
                setError('Error al cargar informacion del curso');
            });
    }, [cursoId]);

    useEffect(() => {
        if (!courseSlug) return;

        fetch(`/api/instructor/cursos/${courseSlug}/lecciones/${moduleId}/${lessonSlug}`)
            .then(res => {
                if (!res.ok) throw new Error('Error al cargar la leccion');
                return res.json();
            })
            .then(data => {
                setTitle(data.frontmatter?.title || '');
                setDuration(data.frontmatter?.duration || 30);
                setContent(data.content || '');
                setLoading(false);
            })
            .catch(err => {
                console.error('Error:', err);
                setError('Error al cargar la leccion');
                setLoading(false);
            });
    }, [courseSlug, moduleId, lessonSlug]);

    const handleSave = async () => {
        if (!courseSlug) {
            setError('No se pudo determinar el curso');
            return;
        }

        setSaving(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch(`/api/instructor/cursos/${courseSlug}/lecciones/${moduleId}/${lessonSlug}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    frontmatter: { title, duration },
                    content,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al guardar');
            }

            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err: any) {
            console.error('Save error:', err);
            setError(err.message || 'Error al guardar la leccion');
        } finally {
            setSaving(false);
        }
    };

    const handleImageUpload = async (file: File): Promise<string> => {
        if (!courseSlug) return '';

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch(`/api/instructor/cursos/${courseSlug}/imagenes/upload`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Error al subir imagen');

            const data = await response.json();
            return data.url;
        } catch (err) {
            console.error('Image upload error:', err);
            setError('Error al subir la imagen');
            return '';
        }
    };

    if (loading) {
        return (
            <div className="p-8 max-w-5xl mx-auto">
                <p className="text-neutral-500">Cargando leccion...</p>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="mb-8">
                <Link
                    href={`/instructor/cursos/${cursoId}/contenido`}
                    className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 mb-4"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver al Contenido
                </Link>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Editar Leccion</h1>
                        <p className="text-neutral-600">Modulo: {moduleId} / Leccion: {lessonSlug}</p>
                    </div>
                    <Button
                        onClick={handleSave}
                        disabled={saving}
                        className="bg-twilight hover:bg-twilight-dark"
                    >
                        <Save className="w-4 h-4 mr-2" />
                        {saving ? 'Guardando...' : 'Guardar Cambios'}
                    </Button>
                </div>
            </div>

            {error && (
                <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {success && (
                <Alert className="mb-4 bg-morning/10 text-morning-dark border-morning/30">
                    <AlertDescription>Leccion guardada exitosamente</AlertDescription>
                </Alert>
            )}

            <div className="space-y-6">
                {/* Frontmatter Fields */}
                <div className="bg-white border border-neutral-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Informacion de la Leccion</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Titulo
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-twilight"
                                placeholder="Titulo de la leccion"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Duracion (minutos)
                            </label>
                            <input
                                type="number"
                                value={duration}
                                onChange={(e) => setDuration(parseInt(e.target.value))}
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-twilight"
                                placeholder="30"
                            />
                        </div>
                    </div>
                </div>

                {/* Editor Toggle */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant={editorMode === 'wysiwyg' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setEditorMode('wysiwyg')}
                        >
                            <Edit3 className="w-4 h-4 mr-2" />
                            Editor Visual
                        </Button>
                        <Button
                            type="button"
                            variant={editorMode === 'markdown' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setEditorMode('markdown')}
                        >
                            Markdown
                        </Button>
                    </div>
                    {editorMode === 'markdown' && (
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowPreview(!showPreview)}
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            {showPreview ? 'Editar' : 'Vista Previa'}
                        </Button>
                    )}
                </div>

                {/* Editor Content */}
                {editorMode === 'wysiwyg' ? (
                    <TiptapEditor
                        content={content}
                        onChange={setContent}
                        onImageUpload={handleImageUpload}
                        placeholder="Escribe el contenido de la leccion..."
                    />
                ) : (
                    <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
                        {!showPreview ? (
                            <div className="p-4">
                                <div className="bg-twilight/5 border border-twilight/20 rounded-md p-3 mb-3">
                                    <p className="text-xs font-medium text-twilight-dark mb-2">Formato Markdown:</p>
                                    <div className="grid grid-cols-3 gap-2 text-xs text-neutral-600">
                                        <div><code># Titulo 1</code></div>
                                        <div><code>## Titulo 2</code></div>
                                        <div><code>**negrita**</code></div>
                                        <div><code>*cursiva*</code></div>
                                        <div><code>- lista</code></div>
                                        <div><code>1. numerada</code></div>
                                        <div><code>`codigo`</code></div>
                                        <div><code>---</code> separador</div>
                                        <div><code>&gt; cita</code></div>
                                    </div>
                                </div>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="w-full h-[500px] px-4 py-3 font-mono text-sm border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-twilight"
                                    placeholder="Escribe el contenido en Markdown..."
                                />
                            </div>
                        ) : (
                            <div className="p-6 lesson-content max-w-none">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                >
                                    {content || '*No hay contenido para previsualizar*'}
                                </ReactMarkdown>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
