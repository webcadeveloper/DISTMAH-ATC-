'use client';

import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

export interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
  courseSlug?: string;
  moduleId?: string;
  className?: string;
  placeholder?: string;
}

export function MarkdownEditor({
  value,
  onChange,
  onImageUpload,
  courseSlug,
  moduleId,
  className = '',
  placeholder = 'Escribe tu contenido en Markdown aquí...'
}: MarkdownEditorProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleImagePaste = async (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (const item of items) {
      if (item.type.startsWith('image/')) {
        e.preventDefault();
        const file = item.getAsFile();
        if (file) {
          await uploadImage(file);
        }
      }
    }
  };

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadImage(file);
    }
  };

  const uploadImage = async (file: File) => {
    if (!courseSlug) {
      toast.error('No se puede subir imagen: falta courseSlug');
      return;
    }

    setIsUploading(true);

    try {
      let imageUrl: string;

      if (onImageUpload) {
        // Usar callback personalizado
        imageUrl = await onImageUpload(file);
      } else {
        // Usar API por defecto
        const formData = new FormData();
        formData.append('file', file);
        if (moduleId) {
          formData.append('moduleId', moduleId);
        }

        const response = await fetch(`/api/instructor/cursos/${courseSlug}/imagenes/upload`, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.details || 'Error al subir imagen');
        }

        const data = await response.json();
        imageUrl = data.url;
      }

      // Insertar markdown de imagen en la posición del cursor
      const textarea = textareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const imageMarkdown = `\n![Imagen](${imageUrl})\n`;
        const newValue = value.substring(0, start) + imageMarkdown + value.substring(end);
        onChange(newValue);

        // Mover cursor después de la imagen insertada
        setTimeout(() => {
          textarea.focus();
          const newPosition = start + imageMarkdown.length;
          textarea.setSelectionRange(newPosition, newPosition);
        }, 0);
      } else {
        // Fallback: agregar al final
        const imageMarkdown = `\n![Imagen](${imageUrl})\n`;
        onChange(value + imageMarkdown);
      }

      toast.success('Imagen subida exitosamente');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error(error instanceof Error ? error.message : 'Error al subir imagen');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const insertMarkdown = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = before + selectedText + after;
    const newValue = value.substring(0, start) + newText + value.substring(end);

    onChange(newValue);

    setTimeout(() => {
      textarea.focus();
      if (selectedText) {
        textarea.setSelectionRange(start + before.length, end + before.length);
      } else {
        const newPosition = start + before.length;
        textarea.setSelectionRange(newPosition, newPosition);
      }
    }, 0);
  };

  return (
    <div className={`border rounded-lg overflow-hidden ${className}`}>
      {/* Toolbar */}
      <div className="bg-neutral-50 border-b p-2 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex gap-2">
          <Button
            type="button"
            variant={!showPreview ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowPreview(false)}
          >
            <Edit className="w-4 h-4 mr-2" />
            Editar
          </Button>
          <Button
            type="button"
            variant={showPreview ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowPreview(true)}
          >
            <Eye className="w-4 h-4 mr-2" />
            Vista Previa
          </Button>
        </div>

        {!showPreview && (
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertMarkdown('**', '**')}
              title="Negrita"
            >
              <strong>B</strong>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertMarkdown('*', '*')}
              title="Cursiva"
            >
              <em>I</em>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertMarkdown('## ', '')}
              title="Encabezado"
            >
              H2
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertMarkdown('[', '](url)')}
              title="Enlace"
            >
              Link
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => insertMarkdown('```\n', '\n```')}
              title="Código"
            >
              Code
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading || !courseSlug}
              title="Subir imagen"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              {isUploading ? 'Subiendo...' : 'Imagen'}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
          </div>
        )}
      </div>

      {/* Content */}
      {!showPreview ? (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onPaste={handleImagePaste}
          className="w-full h-96 p-4 font-mono text-sm focus:outline-none resize-y"
          placeholder={placeholder}
        />
      ) : (
        <div className="p-4 prose max-w-none h-96 overflow-y-auto">
          {value ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {value}
            </ReactMarkdown>
          ) : (
            <p className="text-neutral-400 italic">No hay contenido para previsualizar</p>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="bg-neutral-50 border-t p-2 text-xs text-neutral-500">
        <div className="flex justify-between items-center">
          <span>Markdown soportado</span>
          <span>{value.length} caracteres</span>
        </div>
      </div>
    </div>
  );
}
