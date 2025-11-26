'use client';

import { useState, useEffect } from 'react';
import { MarkdownEditor } from './MarkdownEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Loader2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export interface LessonEditorProps {
  courseSlug: string;
  moduleId: string;
  lessonSlug: string;
  onSave?: () => void;
  onCancel?: () => void;
}

interface LessonData {
  frontmatter: {
    titulo?: string;
    descripcion?: string;
    duracion?: string;
    objetivos?: string[];
    [key: string]: any;
  };
  content: string;
}

export function LessonEditor({
  courseSlug,
  moduleId,
  lessonSlug,
  onSave,
  onCancel
}: LessonEditorProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [lessonData, setLessonData] = useState<LessonData>({
    frontmatter: {},
    content: ''
  });

  useEffect(() => {
    loadLesson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseSlug, moduleId, lessonSlug]);

  const loadLesson = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/instructor/cursos/${courseSlug}/lecciones/${moduleId}/${lessonSlug}`
      );

      if (!response.ok) {
        throw new Error('Error al cargar la lección');
      }

      const data = await response.json();
      setLessonData(data);
    } catch (error) {
      console.error('Error loading lesson:', error);
      toast.error('Error al cargar la lección');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch(
        `/api/instructor/cursos/${courseSlug}/lecciones/${moduleId}/${lessonSlug}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(lessonData),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || 'Error al guardar la lección');
      }

      toast.success('Lección guardada exitosamente');
      if (onSave) {
        onSave();
      }
    } catch (error) {
      console.error('Error saving lesson:', error);
      toast.error(error instanceof Error ? error.message : 'Error al guardar la lección');
    } finally {
      setIsSaving(false);
    }
  };

  const updateFrontmatter = (key: string, value: any) => {
    setLessonData(prev => ({
      ...prev,
      frontmatter: {
        ...prev.frontmatter,
        [key]: value
      }
    }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onCancel && (
            <Button variant="outline" onClick={onCancel}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
          )}
          <h2 className="text-2xl font-bold">Editar Lección</h2>
        </div>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Guardando...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Guardar Cambios
            </>
          )}
        </Button>
      </div>

      {/* Frontmatter */}
      <Card>
        <CardHeader>
          <CardTitle>Información de la Lección</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="titulo">Título</Label>
              <Input
                id="titulo"
                value={lessonData.frontmatter.titulo || ''}
                onChange={(e) => updateFrontmatter('titulo', e.target.value)}
                placeholder="Título de la lección"
              />
            </div>
            <div>
              <Label htmlFor="duracion">Duración</Label>
              <Input
                id="duracion"
                value={lessonData.frontmatter.duracion || ''}
                onChange={(e) => updateFrontmatter('duracion', e.target.value)}
                placeholder="ej: 45 minutos"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="descripcion">Descripción</Label>
            <Input
              id="descripcion"
              value={lessonData.frontmatter.descripcion || ''}
              onChange={(e) => updateFrontmatter('descripcion', e.target.value)}
              placeholder="Descripción breve de la lección"
            />
          </div>
        </CardContent>
      </Card>

      {/* Content Editor */}
      <Card>
        <CardHeader>
          <CardTitle>Contenido de la Lección</CardTitle>
        </CardHeader>
        <CardContent>
          <MarkdownEditor
            value={lessonData.content}
            onChange={(newContent) => setLessonData(prev => ({ ...prev, content: newContent }))}
            courseSlug={courseSlug}
            moduleId={moduleId}
            placeholder="Escribe el contenido de la lección en Markdown..."
          />
        </CardContent>
      </Card>
    </div>
  );
}
