'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Upload, Trash2, CheckCircle } from 'lucide-react';

const LANGUAGES = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
];

interface Subtitle {
  id: string;
  language: string;
  label: string;
  fileUrl: string;
  isDefault: boolean;
}

interface SubtitleUploaderProps {
  lessonId: string;
  existingSubtitles?: Subtitle[];
  onSubtitlesChange?: () => void;
}

export function SubtitleUploader({
  lessonId,
  existingSubtitles = [],
  onSubtitlesChange,
}: SubtitleUploaderProps) {
  const [language, setLanguage] = useState('es');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [subtitles, setSubtitles] = useState<Subtitle[]>(existingSubtitles);

  const handleUpload = async () => {
    if (!file) {
      toast.error('Por favor selecciona un archivo');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('lessonId', lessonId);

      const uploadRes = await fetch('/api/upload/subtitle', {
        method: 'POST',
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error('Error al subir archivo');
      }

      const { url } = await uploadRes.json();

      const langData = LANGUAGES.find((l) => l.code === language);

      const createRes = await fetch(`/api/lessons/${lessonId}/subtitles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          label: langData?.label,
          fileUrl: url,
          isDefault: language === 'es' && subtitles.length === 0,
        }),
      });

      if (!createRes.ok) {
        throw new Error('Error al crear subtítulo');
      }

      const newSubtitle = await createRes.json();
      setSubtitles([...subtitles, newSubtitle]);

      toast.success('Subtítulos subidos correctamente');
      setFile(null);
      onSubtitlesChange?.();
    } catch (error) {
      console.error('Error uploading subtitle:', error);
      toast.error('Error al subir subtítulos');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (subtitleId: string) => {
    try {
      const res = await fetch(
        `/api/lessons/${lessonId}/subtitles?subtitleId=${subtitleId}`,
        {
          method: 'DELETE',
        }
      );

      if (!res.ok) {
        throw new Error('Error al eliminar subtítulo');
      }

      setSubtitles(subtitles.filter((s) => s.id !== subtitleId));
      toast.success('Subtítulo eliminado');
      onSubtitlesChange?.();
    } catch (error) {
      console.error('Error deleting subtitle:', error);
      toast.error('Error al eliminar subtítulo');
    }
  };

  return (
    <div className="space-y-4 p-6 border border-border rounded-lg bg-card">
      <h3 className="text-lg font-semibold">Gestión de Subtítulos</h3>

      {subtitles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">
            Subtítulos Actuales
          </h4>
          {subtitles.map((subtitle) => (
            <div
              key={subtitle.id}
              className="flex items-center justify-between p-3 border border-border rounded bg-background"
            >
              <div className="flex items-center gap-2">
                {subtitle.isDefault && (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                )}
                <span className="font-medium">{subtitle.label}</span>
                <span className="text-sm text-muted-foreground">
                  ({subtitle.language})
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDelete(subtitle.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground">
          Agregar Nuevo Subtítulo
        </h4>

        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona idioma" />
          </SelectTrigger>
          <SelectContent>
            {LANGUAGES.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Input
            type="file"
            accept=".vtt,.srt"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            disabled={uploading}
          />
        </div>

        <Button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="w-full"
        >
          {uploading ? (
            'Subiendo...'
          ) : (
            <>
              <Upload className="h-4 w-4 mr-2" />
              Subir Subtítulos
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground">
          Formatos soportados: .vtt, .srt
        </p>
      </div>
    </div>
  );
}
