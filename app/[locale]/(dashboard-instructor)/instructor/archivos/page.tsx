'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, File, FileVideo, FileImage, Trash2, Download, Search, Folder, MoreVertical, Loader2, Cloud, X, CheckCircle, Link as LinkIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface DriveFile {
    id: string;
    name: string;
    size: number;
    webUrl: string;
    createdDateTime: string;
    file?: {
        mimeType: string;
    };
    folder?: {
        childCount: number;
    };
}

interface UploadingFile {
    file: File;
    progress: number;
    status: 'pending' | 'uploading' | 'done' | 'error';
    error?: string;
}

export default function ArchivosInstructorPage() {
    const [archivos, setArchivos] = useState<DriveFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [stats, setStats] = useState({
        total: 0,
        videos: 0,
        documentos: 0,
        espacioUsado: '0 MB'
    });
    const [showUploadDialog, setShowUploadDialog] = useState(false);
    const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
    const [externalUrl, setExternalUrl] = useState('');
    const [uploadSource, setUploadSource] = useState<'local' | 'url'>('local');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        loadArchivos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadArchivos = async () => {
        try {
            const response = await fetch('/api/files/list');
            if (!response.ok) {
                if (response.status === 400) {
                    setArchivos([]);
                    toast.info('Conecta tu cuenta de Microsoft 365 para gestionar archivos');
                    return;
                }
                throw new Error('Error al cargar archivos');
            }
            const data = await response.json();
            setArchivos(data || []);

            const videos = data.filter((f: DriveFile) => f.file?.mimeType?.startsWith('video/')).length;
            const docs = data.filter((f: DriveFile) => f.file && !f.file.mimeType?.startsWith('video/') && !f.file.mimeType?.startsWith('image/')).length;
            const totalSize = data.reduce((acc: number, f: DriveFile) => acc + (f.size || 0), 0);

            setStats({
                total: data.length,
                videos,
                documentos: docs,
                espacioUsado: formatSize(totalSize)
            });
        } catch {
            toast.error('Error al cargar archivos de OneDrive');
        } finally {
            setLoading(false);
        }
    };

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    const getFileIcon = (file: DriveFile) => {
        if (file.folder) {
            return <Folder className="w-5 h-5 text-yellow-600" />;
        }
        const mimeType = file.file?.mimeType || '';
        if (mimeType.startsWith('video/')) {
            return <FileVideo className="w-5 h-5 text-blue-600" />;
        }
        if (mimeType.startsWith('image/')) {
            return <FileImage className="w-5 h-5 text-green-600" />;
        }
        return <File className="w-5 h-5 text-neutral-600" />;
    };

    const getFileType = (file: DriveFile) => {
        if (file.folder) return 'Carpeta';
        const ext = file.name.split('.').pop()?.toUpperCase() || 'Archivo';
        return ext;
    };

    const handleDownload = (file: DriveFile) => {
        if (file.webUrl) {
            window.open(file.webUrl, '_blank');
        }
    };

    const handleDelete = async (file: DriveFile) => {
        if (!confirm(`¿Eliminar "${file.name}"?`)) return;
        try {
            const response = await fetch(`/api/files/delete?itemId=${file.id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Error al eliminar');
            toast.success('Archivo eliminado');
            loadArchivos();
        } catch {
            toast.error('Error al eliminar archivo');
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const newFiles: UploadingFile[] = Array.from(files).map(file => ({
            file,
            progress: 0,
            status: 'pending'
        }));

        setUploadingFiles(prev => [...prev, ...newFiles]);
    };

    const uploadFile = async (uploadingFile: UploadingFile, index: number) => {
        setUploadingFiles(prev => prev.map((f, i) =>
            i === index ? { ...f, status: 'uploading', progress: 10 } : f
        ));

        try {
            const formData = new FormData();
            formData.append('file', uploadingFile.file);
            formData.append('destination', 'onedrive');
            formData.append('path', '/DISTMAH-Cursos');

            const response = await fetch('/api/files/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Error al subir archivo');
            }

            setUploadingFiles(prev => prev.map((f, i) =>
                i === index ? { ...f, status: 'done', progress: 100 } : f
            ));

            toast.success(`${uploadingFile.file.name} subido correctamente`);
        } catch (error: any) {
            setUploadingFiles(prev => prev.map((f, i) =>
                i === index ? { ...f, status: 'error', error: error.message } : f
            ));
            toast.error(`Error subiendo ${uploadingFile.file.name}`);
        }
    };

    const startUpload = async () => {
        for (let i = 0; i < uploadingFiles.length; i++) {
            if (uploadingFiles[i].status === 'pending') {
                await uploadFile(uploadingFiles[i], i);
            }
        }
        loadArchivos();
    };

    const removeUploadingFile = (index: number) => {
        setUploadingFiles(prev => prev.filter((_, i) => i !== index));
    };

    const closeUploadDialog = () => {
        setShowUploadDialog(false);
        setUploadingFiles([]);
        setExternalUrl('');
        setUploadSource('local');
    };

    const filteredArchivos = archivos.filter(f =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900">Archivos</h1>
                    <p className="text-neutral-600">Gestiona los archivos y recursos de tus cursos.</p>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
                        <p className="text-neutral-600">Cargando archivos de OneDrive...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (archivos.length === 0) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-900">Archivos</h1>
                        <p className="text-neutral-600">Gestiona los archivos y recursos de tus cursos.</p>
                    </div>
                    <Button onClick={() => setShowUploadDialog(true)} className="bg-neutral-900 hover:bg-neutral-800">
                        <Upload className="w-4 h-4 mr-2" /> Subir Archivo
                    </Button>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <Cloud className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">OneDrive</h3>
                        <p className="text-neutral-600 mb-6">
                            Conecta tu cuenta de Microsoft 365 para gestionar tus archivos desde OneDrive
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            <Cloud className="w-4 h-4 mr-2" /> Conectar OneDrive
                        </Button>
                    </CardContent>
                </Card>

                <UploadDialog
                    open={showUploadDialog}
                    onClose={closeUploadDialog}
                    uploadSource={uploadSource}
                    setUploadSource={setUploadSource}
                    fileInputRef={fileInputRef}
                    handleFileSelect={handleFileSelect}
                    uploadingFiles={uploadingFiles}
                    removeUploadingFile={removeUploadingFile}
                    startUpload={startUpload}
                    externalUrl={externalUrl}
                    setExternalUrl={setExternalUrl}
                    formatSize={formatSize}
                />
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Archivos</h1>
                    <p className="text-neutral-600">Gestiona los archivos y recursos de tus cursos en OneDrive.</p>
                </div>
                <Button onClick={() => setShowUploadDialog(true)} className="bg-neutral-900 hover:bg-neutral-800">
                    <Upload className="w-4 h-4 mr-2" /> Subir Archivo
                </Button>
            </div>

            <Card className="mb-6 bg-white border-neutral-200">
                <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                        <div className="flex-grow relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                            <Input
                                placeholder="Buscar archivos..."
                                className="pl-10 bg-neutral-50 border-neutral-200"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                            <Cloud className="w-3 h-3 mr-1" /> OneDrive
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Total Archivos</p>
                                <p className="text-2xl font-bold text-neutral-900">{stats.total}</p>
                            </div>
                            <File className="w-8 h-8 text-neutral-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Videos</p>
                                <p className="text-2xl font-bold text-neutral-900">{stats.videos}</p>
                            </div>
                            <FileVideo className="w-8 h-8 text-blue-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Documentos</p>
                                <p className="text-2xl font-bold text-neutral-900">{stats.documentos}</p>
                            </div>
                            <File className="w-8 h-8 text-neutral-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Espacio Usado</p>
                                <p className="text-2xl font-bold text-neutral-900">{stats.espacioUsado}</p>
                            </div>
                            <Folder className="w-8 h-8 text-yellow-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-white border-neutral-200">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-neutral-50 border-b border-neutral-200">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Archivo</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Tipo</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Tamano</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Fecha</th>
                                    <th className="text-right px-6 py-4 text-sm font-semibold text-neutral-700">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200">
                                {filteredArchivos.map((archivo) => (
                                    <tr key={archivo.id} className="hover:bg-neutral-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {getFileIcon(archivo)}
                                                <div>
                                                    <p className="font-medium text-neutral-900">{archivo.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="text-neutral-700 border-neutral-300">
                                                {getFileType(archivo)}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-neutral-600">
                                            {archivo.folder ? `${archivo.folder.childCount} items` : formatSize(archivo.size)}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-neutral-600">
                                            {new Date(archivo.createdDateTime).toLocaleDateString('es-ES')}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => handleDownload(archivo)}
                                                >
                                                    <Download className="w-4 h-4 text-neutral-600" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => handleDelete(archivo)}
                                                >
                                                    <Trash2 className="w-4 h-4 text-red-600" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <MoreVertical className="w-4 h-4 text-neutral-400" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            <UploadDialog
                open={showUploadDialog}
                onClose={closeUploadDialog}
                uploadSource={uploadSource}
                setUploadSource={setUploadSource}
                fileInputRef={fileInputRef}
                handleFileSelect={handleFileSelect}
                uploadingFiles={uploadingFiles}
                removeUploadingFile={removeUploadingFile}
                startUpload={startUpload}
                externalUrl={externalUrl}
                setExternalUrl={setExternalUrl}
                formatSize={formatSize}
            />
        </div>
    );
}

function UploadDialog({
    open,
    onClose,
    uploadSource,
    setUploadSource,
    fileInputRef,
    handleFileSelect,
    uploadingFiles,
    removeUploadingFile,
    startUpload,
    externalUrl,
    setExternalUrl,
    formatSize
}: {
    open: boolean;
    onClose: () => void;
    uploadSource: 'local' | 'url';
    setUploadSource: (source: 'local' | 'url') => void;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    uploadingFiles: UploadingFile[];
    removeUploadingFile: (index: number) => void;
    startUpload: () => void;
    externalUrl: string;
    setExternalUrl: (url: string) => void;
    formatSize: (bytes: number) => string;
}) {
    const pendingCount = uploadingFiles.filter(f => f.status === 'pending').length;
    const uploadingCount = uploadingFiles.filter(f => f.status === 'uploading').length;

    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Subir Archivos</DialogTitle>
                    <DialogDescription>
                        Sube archivos a OneDrive o ingresa URL externa (PostImages, Google Drive, etc.)
                    </DialogDescription>
                </DialogHeader>

                <div className="flex gap-2 mb-4">
                    <Button
                        variant={uploadSource === 'local' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setUploadSource('local')}
                        className={uploadSource === 'local' ? 'bg-neutral-900' : ''}
                    >
                        <Upload className="w-4 h-4 mr-2" /> Archivo Local
                    </Button>
                    <Button
                        variant={uploadSource === 'url' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setUploadSource('url')}
                        className={uploadSource === 'url' ? 'bg-neutral-900' : ''}
                    >
                        <LinkIcon className="w-4 h-4 mr-2" /> URL Externa
                    </Button>
                </div>

                {uploadSource === 'local' ? (
                    <div className="space-y-4">
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
                        >
                            <Upload className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
                            <p className="text-sm text-neutral-600">
                                Haz clic para seleccionar archivos
                            </p>
                            <p className="text-xs text-neutral-400 mt-1">
                                Videos, imagenes, documentos (max 100MB)
                            </p>
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            className="hidden"
                            onChange={handleFileSelect}
                            accept="video/*,image/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                        />

                        {uploadingFiles.length > 0 && (
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                {uploadingFiles.map((file, index) => (
                                    <div key={index} className="flex items-center gap-3 p-2 bg-neutral-50 rounded-md">
                                        <File className="w-5 h-5 text-neutral-500" />
                                        <div className="flex-grow min-w-0">
                                            <p className="text-sm font-medium truncate">{file.file.name}</p>
                                            <p className="text-xs text-neutral-400">{formatSize(file.file.size)}</p>
                                        </div>
                                        {file.status === 'pending' && (
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-6 w-6"
                                                onClick={() => removeUploadingFile(index)}
                                            >
                                                <X className="w-4 h-4" />
                                            </Button>
                                        )}
                                        {file.status === 'uploading' && (
                                            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                                        )}
                                        {file.status === 'done' && (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        )}
                                        {file.status === 'error' && (
                                            <span className="text-xs text-red-600">{file.error}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {pendingCount > 0 && (
                            <Button
                                onClick={startUpload}
                                disabled={uploadingCount > 0}
                                className="w-full bg-blue-600 hover:bg-blue-700"
                            >
                                {uploadingCount > 0 ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Subiendo...
                                    </>
                                ) : (
                                    <>
                                        <Upload className="w-4 h-4 mr-2" />
                                        Subir {pendingCount} archivo{pendingCount > 1 ? 's' : ''}
                                    </>
                                )}
                            </Button>
                        )}
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-neutral-700 mb-2 block">
                                URL del archivo
                            </label>
                            <Input
                                placeholder="https://postimages.org/... o https://drive.google.com/..."
                                value={externalUrl}
                                onChange={(e) => setExternalUrl(e.target.value)}
                            />
                            <p className="text-xs text-neutral-500 mt-2">
                                Soporta: PostImages, Google Drive, SharePoint, OneDrive links publicos
                            </p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                            <p className="text-sm text-blue-800">
                                <strong>Tip:</strong> Para videos grandes, sube a OneDrive primero y luego
                                copia el link de compartir aqui.
                            </p>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
