'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploaderProps {
  destination: 'onedrive' | 'sharepoint';
  path: string;
  onUploadComplete?: () => void;
}

export function FileUploader({ destination, path, onUploadComplete }: FileUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('destination', destination);
    formData.append('path', path);

    try {
      const res = await fetch('/api/files/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setProgress(100);
        onUploadComplete?.();
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
      setTimeout(() => setProgress(0), 1000);
    }
  }

  return (
    <div className="border-2 border-dashed rounded-lg p-6 text-center">
      <Upload className="w-12 h-12 mx-auto mb-4 text-neutral-400" />
      <p className="mb-4 text-sm text-neutral-600">
        Arrastra un archivo aquí o haz clic para seleccionar
      </p>
      <input
        type="file"
        onChange={handleFileChange}
        disabled={uploading}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <Button asChild disabled={uploading}>
          <span>{uploading ? 'Subiendo...' : 'Seleccionar archivo'}</span>
        </Button>
      </label>

      {uploading && (
        <div className="mt-4">
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
