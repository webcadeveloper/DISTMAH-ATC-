'use client';

import { useState } from 'react';
import { Upload, Video, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface VideoUploaderProps {
    onVideoUploaded: (url: string, streamId?: string) => void;
}

export function VideoUploader({ onVideoUploaded }: VideoUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        setUploading(true);
        setProgress(0);

        // Simulate upload to Microsoft Stream / OneDrive
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploading(false);

                    // Mock response
                    onVideoUploaded(URL.createObjectURL(file), 'mock-stream-id-' + Date.now());
                    return 100;
                }
                return prev + 5;
            });
        }, 300);
    };

    return (
        <div className="border rounded-lg p-6 bg-neutral-50">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Video className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-medium text-neutral-900">Subir Video a Microsoft Stream</h3>
                        <p className="text-sm text-neutral-500">Los videos se procesarán automáticamente y estarán disponibles en alta calidad.</p>
                    </div>
                </div>

                {!uploading && progress === 0 && (
                    <div className="mt-2">
                        <Label htmlFor="video-upload" className="cursor-pointer">
                            <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-neutral-300 rounded-lg hover:bg-white hover:border-primary-500 transition-colors">
                                <div className="flex flex-col items-center gap-2">
                                    <Upload className="w-6 h-6 text-neutral-400" />
                                    <span className="text-sm text-neutral-600">Seleccionar archivo de video</span>
                                </div>
                            </div>
                            <Input
                                id="video-upload"
                                type="file"
                                accept="video/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </Label>
                    </div>
                )}

                {uploading && (
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                            <span>Subiendo {fileName}...</span>
                            <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                        <p className="text-xs text-neutral-500 text-center">No cierres esta ventana mientras se sube el video.</p>
                    </div>
                )}

                {progress === 100 && !uploading && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-100">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Video subido exitosamente</span>
                    </div>
                )}
            </div>
        </div>
    );
}
