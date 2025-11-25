'use client';

import { useState, useEffect } from 'react';
import { File, Folder, Download, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DriveItem {
  id: string;
  name: string;
  folder?: any;
  size?: number;
  webUrl?: string;
}

export function OneDriveFileBrowser({ userId }: { userId: string }) {
  const [files, setFiles] = useState<DriveItem[]>([]);
  const [currentPath, setCurrentPath] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFiles();
  }, [currentPath]);

  async function fetchFiles() {
    setLoading(true);
    try {
      const res = await fetch(`/api/files/list?source=onedrive&path=${currentPath}`);
      const data = await res.json();
      setFiles(data);
    } catch (error) {
      console.error('Error fetching files:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDownload(fileId: string, fileName: string) {
    const res = await fetch(`/api/files/download?fileId=${fileId}`);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
  }

  async function handleShare(fileId: string) {
    const res = await fetch('/api/files/share', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileId }),
    });
    const { link } = await res.json();
    navigator.clipboard.writeText(link);
    alert('Link copiado al portapapeles');
  }

  return (
    <div className="border rounded-lg p-4 bg-white">
      <h3 className="font-bold mb-4 text-lg">Mis Archivos (OneDrive)</h3>

      {loading ? (
        <div className="text-center py-8">Cargando...</div>
      ) : (
        <div className="space-y-2">
          {files.map((file) => (
            <div key={file.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded border">
              <div className="flex items-center gap-3">
                {file.folder ? (
                  <Folder className="w-5 h-5 text-blue-500" />
                ) : (
                  <File className="w-5 h-5 text-gray-500" />
                )}
                <div>
                  <span className="font-medium">{file.name}</span>
                  {file.size && (
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>
              </div>

              {!file.folder && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDownload(file.id, file.name)}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleShare(file.id)}
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
