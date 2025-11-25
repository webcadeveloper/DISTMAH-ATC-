'use client';

import { useState, useEffect } from 'react';
import { MarkdownEditor } from './MarkdownEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Loader2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export interface ModuleEditorProps {
  courseSlug: string;
  moduleId: string;
  onSave?: () => void;
  onCancel?: () => void;
}

interface ModuleData {
  frontmatter: {
    titulo?: string;
    descripcion?: string;
    orden?: number;
    [key: string]: any;
  };
  content: string;
  lecciones?: string[];
}

export function ModuleEditor({
  courseSlug,
  moduleId,
  onSave,
  onCancel
}: ModuleEditorProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [moduleData, setModuleData] = useState<ModuleData>({
    frontmatter: {},
    content: '',
    lecciones: []
  });

  useEffect(() => {
    loadModule();
  }, [courseSlug, moduleId]);

  const loadModule = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/instructor/cursos/${courseSlug}/modulos/${moduleId}`
      );

      if (!response.ok) {
        throw new Error('Error al cargar el módulo');
      }

      const data = await response.json();
      setModuleData(data);
    } catch (error) {
      console.error('Error loading module:', error);
      toast.error('Error al cargar el módulo');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch(
        `/api/instructor/cursos/${courseSlug}/modulos/${moduleId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            frontmatter: moduleData.frontmatter,
            content: moduleData.content
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || 'Error al guardar el módulo');
      }

      toast.success('Módulo guardado exitosamente');
      if (onSave) {
        onSave();
      }
    } catch (error) {
      console.error('Error saving module:', error);
      toast.error(error instanceof Error ? error.message : 'Error al guardar el módulo');
    } finally {
      setIsSaving(false);
    }
  };

  const updateFrontmatter = (key: string, value: any) => {
    setModuleData(prev => ({
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
          <h2 className="text-2xl font-bold">Editar Módulo</h2>
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
          <CardTitle>Información del Módulo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="titulo">Título</Label>
              <Input
                id="titulo"
                value={moduleData.frontmatter.titulo || ''}
                onChange={(e) => updateFrontmatter('titulo', e.target.value)}
                placeholder="Título del módulo"
              />
            </div>
            <div>
              <Label htmlFor="orden">Orden</Label>
              <Input
                id="orden"
                type="number"
                value={moduleData.frontmatter.orden || ''}
                onChange={(e) => updateFrontmatter('orden', parseInt(e.target.value))}
                placeholder="Orden del módulo"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="descripcion">Descripción</Label>
            <Input
              id="descripcion"
              value={moduleData.frontmatter.descripcion || ''}
              onChange={(e) => updateFrontmatter('descripcion', e.target.value)}
              placeholder="Descripción breve del módulo"
            />
          </div>
        </CardContent>
      </Card>

      {/* Content Editor */}
      <Card>
        <CardHeader>
          <CardTitle>Contenido del Módulo</CardTitle>
        </CardHeader>
        <CardContent>
          <MarkdownEditor
            value={moduleData.content}
            onChange={(newContent) => setModuleData(prev => ({ ...prev, content: newContent }))}
            courseSlug={courseSlug}
            placeholder="Escribe el contenido del módulo en Markdown..."
          />
        </CardContent>
      </Card>

      {/* Lecciones List */}
      {moduleData.lecciones && moduleData.lecciones.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Lecciones en este Módulo</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {moduleData.lecciones.map((leccion) => (
                <li key={leccion} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>{leccion}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
