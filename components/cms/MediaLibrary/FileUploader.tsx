'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface FileUploaderProps {
    onFilesUploaded: (files: any[]) => void;
    acceptedTypes?: string[];
    multiple?: boolean;
    maxSize?: number; // bytes
}

// Helper to map extensions to MIME types for react-dropzone
const getAcceptMap = (extensions: string[]) => {
    const map: Record<string, string[]> = {};
    extensions.forEach(ext => {
        const cleanExt = ext.startsWith('.') ? ext : `.${ext}`;
        // Simple mapping for common types
        if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(cleanExt)) {
            if (!map['image/*']) map['image/*'] = [];
            map['image/*'].push(cleanExt);
        } else if (['.pdf'].includes(cleanExt)) {
            map['application/pdf'] = [cleanExt];
        } else if (['.doc', '.docx'].includes(cleanExt)) {
            map['application/msword'] = [cleanExt];
            map['application/vnd.openxmlformats-officedocument.wordprocessingml.document'] = [cleanExt];
        } else if (['.xls', '.xlsx'].includes(cleanExt)) {
            map['application/vnd.ms-excel'] = [cleanExt];
            map['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'] = [cleanExt];
        } else if (['.zip', '.rar'].includes(cleanExt)) {
            map['application/zip'] = [cleanExt];
            map['application/x-rar-compressed'] = [cleanExt];
        } else if (['.dwg'].includes(cleanExt)) {
            map['application/acad'] = [cleanExt]; // Common for DWG
            map['image/vnd.dwg'] = [cleanExt];
            map['application/x-dwg'] = [cleanExt];
        } else if (['.rvt'].includes(cleanExt)) {
            map['application/octet-stream'] = [cleanExt]; // Revit files often generic
        } else {
            // Fallback for others
            if (!map['application/octet-stream']) map['application/octet-stream'] = [];
            map['application/octet-stream'].push(cleanExt);
        }
    });
    return map;
};

export function FileUploader({
    onFilesUploaded,
    acceptedTypes = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.zip', '.rar', '.dwg', '.rvt'],
    multiple = true,
    maxSize = 50 * 1024 * 1024 // 50MB
}: FileUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) return;

        // If not auto-uploading immediately, we could just set state.
        // But for this mock, let's simulate the process.
        setFilesToUpload(acceptedFiles);
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
                    setFilesToUpload([]);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    }, [onFilesUploaded]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: getAcceptMap(acceptedTypes),
        multiple,
        maxSize,
    });

    return (
        <div className="w-full space-y-4">
            <div
                {...getRootProps()}
                className={cn(
                    "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                    isDragActive ? "border-primary-500 bg-primary-50" : "border-neutral-200 hover:border-primary-400 hover:bg-neutral-50",
                    uploading && "pointer-events-none opacity-50"
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

            {/* File List during upload */}
            {filesToUpload.length > 0 && (
                <div className="space-y-2">
                    {filesToUpload.map((file, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-neutral-600 bg-neutral-50 p-2 rounded">
                            <FileIcon className="w-4 h-4" />
                            <span className="truncate flex-1">{file.name}</span>
                            <span className="text-xs text-neutral-400">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                    ))}
                </div>
            )}

            {uploading && (
                <div className="space-y-2">
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
