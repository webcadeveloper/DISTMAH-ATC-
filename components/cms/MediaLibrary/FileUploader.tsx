'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface FileUploaderProps {
    onFilesUploaded: (files: any[]) => void;
    acceptedTypes?: string[];
    multiple?: boolean;
    maxSize?: number; // bytes
}

export function FileUploader({
    onFilesUploaded,
    acceptedTypes = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.zip', '.rar', '.dwg', '.rvt'],
    multiple = true,
    maxSize = 50 * 1024 * 1024 // 50MB
}: FileUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) return;

        setUploading(true);
        setProgress(0);

        // Simulate upload
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploading(false);

                    // Mock response
                    const uploadedFiles = acceptedFiles.map(file => ({
                        title: file.name,
                        url: URL.createObjectURL(file), // Mock URL
                        type: file.type || 'application/octet-stream',
                        size: file.size,
                    }));

                    onFilesUploaded(uploadedFiles);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    }, [onFilesUploaded]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: acceptedTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
        multiple,
        maxSize,
    });

    return (
        <div className="w-full">
            <div
                {...getRootProps()}
                className={cn(
                    "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                    isDragActive ? "border-primary-500 bg-primary-50" : "border-neutral-200 hover:border-primary-400 hover:bg-neutral-50"
                )}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-2">
                        <Upload className="w-6 h-6 text-neutral-500" />
                    </div>
                    <p className="text-sm font-medium text-neutral-900">
                        {isDragActive ? "Suelta los archivos aquí" : "Haz clic o arrastra archivos aquí"}
                    </p>
                    <p className="text-xs text-neutral-500">
                        Soporta: {acceptedTypes.join(', ')} (Máx {maxSize / 1024 / 1024}MB)
                    </p>
                </div>
            </div>

            {uploading && (
                <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs text-neutral-600">
                        <span>Subiendo archivos...</span>
                        <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>
            )}
        </div>
    );
}
