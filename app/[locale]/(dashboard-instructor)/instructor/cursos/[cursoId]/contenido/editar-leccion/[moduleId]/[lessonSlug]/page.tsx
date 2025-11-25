'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, AlertCircle, Link as LinkIcon, Upload, Video } from 'lucide-react';
import Link from 'next/link';
import { Alert, AlertDescription } from '@/components/ui/alert';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function EditLessonPage() {
    const params = useParams();
    const router = useRouter();
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
    const [imageUrl, setImageUrl] = useState('');
    const [showImageModal, setShowImageModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [showVideoModal, setShowVideoModal] = useState(false);

    // Find course slug from cursoId
    const [courseSlug, setCourseSlug] = useState<string>('');

    useEffect(() => {
        // Load course slug from catalog
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
                setError('Error al cargar información del curso');
            });
    }, [cursoId]);

    useEffect(() => {
        if (!courseSlug) return;

        // Load lesson data
        fetch(`/api/instructor/cursos/${courseSlug}/lecciones/${moduleId}/${lessonSlug}`)
            .then(res => {
                if (!res.ok) throw new Error('Error al cargar la lección');
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
                setError('Error al cargar la lección');
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
            setError(err.message || 'Error al guardar la lección');
        } finally {
            setSaving(false);
        }
    };

    const handleImageUpload = async (file: File) => {
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
            return data.url; // Relative path for markdown
        } catch (err) {
            console.error('Image upload error:', err);
            setError('Error al subir la imagen');
            return '';
        }
    };

    const handleImagePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
        const items = e.clipboardData?.items;
        if (!items) return;

        for (const item of Array.from(items)) {
            if (item.type.startsWith('image/')) {
                e.preventDefault();
                const file = item.getAsFile();
                if (file) {
                    const url = await handleImageUpload(file);
                    if (url) {
                        const textarea = e.currentTarget;
                        const start = textarea.selectionStart;
                        const end = textarea.selectionEnd;
                        const newContent = content.substring(0, start) + `\n![Imagen](${url})\n` + content.substring(end);
                        setContent(newContent);
                    }
                }
            }
        }
    };

    const handleInsertImageUrl = () => {
        if (!imageUrl.trim()) {
            setError('Por favor ingresa una URL válida');
            return;
        }

        // Insert image markdown at cursor position or at end
        const imageMarkdown = `\n![Imagen desde SharePoint](${imageUrl})\n`;
        setContent(content + imageMarkdown);
        setImageUrl('');
        setShowImageModal(false);
        setError(null);
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setError('Por favor selecciona un archivo de imagen');
            return;
        }

        const url = await handleImageUpload(file);
        if (url) {
            setContent(content + `\n![Imagen](${url})\n`);
        }
    };

    const getVideoEmbedCode = (url: string): string => {
        // YouTube
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const youtubeMatch = url.match(youtubeRegex);
        if (youtubeMatch) {
            return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeMatch[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }

        // Vimeo
        const vimeoRegex = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
        const vimeoMatch = url.match(vimeoRegex);
        if (vimeoMatch) {
            return `<iframe src="https://player.vimeo.com/video/${vimeoMatch[1]}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
        }

        // Loom
        const loomRegex = /loom\.com\/share\/([a-zA-Z0-9]+)/;
        const loomMatch = url.match(loomRegex);
        if (loomMatch) {
            return `<iframe src="https://www.loom.com/embed/${loomMatch[1]}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen width="640" height="360"></iframe>`;
        }

        // Si no es ninguno reconocido, retornar link simple
        return `[Ver Video](${url})`;
    };

    const handleInsertVideoUrl = () => {
        if (!videoUrl.trim()) {
            setError('Por favor ingresa una URL válida');
            return;
        }

        const embedCode = getVideoEmbedCode(videoUrl);
        setContent(content + `\n\n${embedCode}\n\n`);
        setVideoUrl('');
        setShowVideoModal(false);
        setError(null);
    };

    if (loading) {
        return (
            <div className="p-8 max-w-5xl mx-auto">
                <p className="text-neutral-500">Cargando lección...</p>
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
                        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Editar Lección</h1>
                        <p className="text-neutral-600">Módulo: {moduleId} / Lección: {lessonSlug}</p>
                    </div>
                    <Button
                        onClick={handleSave}
                        disabled={saving}
                        className="bg-primary-600 hover:bg-primary-700"
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
                <Alert className="mb-4 bg-green-50 text-green-900 border-green-200">
                    <AlertDescription>Lección guardada exitosamente</AlertDescription>
                </Alert>
            )}

            <div className="space-y-6">
                {/* Frontmatter Fields */}
                <div className="bg-white border border-neutral-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Información de la Lección</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Título
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                placeholder="Título de la lección"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Duración (minutos)
                            </label>
                            <input
                                type="number"
                                value={duration}
                                onChange={(e) => setDuration(parseInt(e.target.value))}
                                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                placeholder="30"
                            />
                        </div>
                    </div>
                </div>

                {/* Markdown Editor */}
                <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
                    <div className="border-b border-neutral-200 flex items-center justify-between">
                        <div className="flex">
                            <button
                                onClick={() => setShowPreview(false)}
                                className={`px-4 py-2 text-sm font-medium ${
                                    !showPreview
                                        ? 'bg-white text-neutral-900 border-b-2 border-primary-600'
                                        : 'bg-neutral-50 text-neutral-600'
                                }`}
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => setShowPreview(true)}
                                className={`px-4 py-2 text-sm font-medium ${
                                    showPreview
                                        ? 'bg-white text-neutral-900 border-b-2 border-primary-600'
                                        : 'bg-neutral-50 text-neutral-600'
                                }`}
                            >
                                Vista Previa
                            </button>
                        </div>

                        {!showPreview && (
                            <div className="flex items-center gap-2 px-4">
                                <label className="cursor-pointer">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="pointer-events-none"
                                    >
                                        <Upload className="w-4 h-4 mr-2" />
                                        Subir Imagen
                                    </Button>
                                </label>

                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowImageModal(true)}
                                >
                                    <LinkIcon className="w-4 h-4 mr-2" />
                                    URL Imagen
                                </Button>

                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowVideoModal(true)}
                                >
                                    <Video className="w-4 h-4 mr-2" />
                                    Insertar Video
                                </Button>
                            </div>
                        )}
                    </div>

                    {!showPreview ? (
                        <div className="p-4">
                            <div className="bg-blue-50 border border-blue-200 rounded-md p-3 mb-3">
                                <p className="text-xs font-medium text-blue-900 mb-2">💡 Agregar Multimedia:</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-xs font-semibold text-blue-900 mb-1">📸 Imágenes:</p>
                                        <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
                                            <li><strong>Ctrl+V:</strong> Pegar desde portapapeles</li>
                                            <li><strong>Subir:</strong> Desde tu PC</li>
                                            <li><strong>URL:</strong> SharePoint/Postimages</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-blue-900 mb-1">🎥 Videos:</p>
                                        <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
                                            <li><strong>YouTube:</strong> Embed automático</li>
                                            <li><strong>Vimeo:</strong> Embed automático</li>
                                            <li><strong>Loom:</strong> Embed automático</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                onPaste={handleImagePaste}
                                className="w-full h-[500px] px-4 py-3 font-mono text-sm border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                placeholder="Escribe el contenido en Markdown..."
                            />
                        </div>
                    ) : (
                        <div className="p-6 prose prose-neutral max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                            >
                                {content || '*No hay contenido para previsualizar*'}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal para URL de SharePoint */}
            {showImageModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                            Insertar Imagen desde URL
                        </h3>
                        <p className="text-sm text-neutral-600 mb-4">
                            Pega la URL de tu imagen desde SharePoint, Postimages, o cualquier otro servicio de hosting.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="imageUrl" className="text-sm font-medium text-neutral-700">
                                    URL de la Imagen
                                </Label>
                                <Input
                                    id="imageUrl"
                                    type="url"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    placeholder="https://ejemplo.sharepoint.com/imagen.jpg"
                                    className="mt-1"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleInsertImageUrl();
                                        }
                                    }}
                                />
                            </div>

                            <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded">
                                <p className="font-medium mb-1">💡 Consejos:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Asegúrate que la URL sea pública y accesible</li>
                                    <li>Para SharePoint: usa el link directo de la imagen</li>
                                    <li>Formatos soportados: JPG, PNG, GIF, WebP</li>
                                </ul>
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setShowImageModal(false);
                                        setImageUrl('');
                                        setError(null);
                                    }}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    type="button"
                                    onClick={handleInsertImageUrl}
                                    className="bg-primary-600 hover:bg-primary-700"
                                >
                                    Insertar Imagen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para Insertar Video */}
            {showVideoModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                            Insertar Video
                        </h3>
                        <p className="text-sm text-neutral-600 mb-4">
                            Pega la URL de tu video desde YouTube, Vimeo, Loom u otro servicio.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="videoUrl" className="text-sm font-medium text-neutral-700">
                                    URL del Video
                                </Label>
                                <Input
                                    id="videoUrl"
                                    type="url"
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    className="mt-1"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleInsertVideoUrl();
                                        }
                                    }}
                                />
                            </div>

                            <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded">
                                <p className="font-medium mb-2">🎥 Servicios Soportados:</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <p className="font-semibold text-neutral-700">YouTube:</p>
                                        <p className="text-[10px]">youtube.com/watch?v=...</p>
                                        <p className="text-[10px]">youtu.be/...</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-neutral-700">Vimeo:</p>
                                        <p className="text-[10px]">vimeo.com/123456789</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-neutral-700">Loom:</p>
                                        <p className="text-[10px]">loom.com/share/...</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-neutral-700">SharePoint:</p>
                                        <p className="text-[10px]">Videos .mp4 directos</p>
                                    </div>
                                </div>
                                <p className="mt-2 text-[10px]">
                                    💡 El sistema detecta automáticamente el servicio y genera el embed correcto
                                </p>
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setShowVideoModal(false);
                                        setVideoUrl('');
                                        setError(null);
                                    }}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    type="button"
                                    onClick={handleInsertVideoUrl}
                                    className="bg-primary-600 hover:bg-primary-700"
                                >
                                    Insertar Video
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
