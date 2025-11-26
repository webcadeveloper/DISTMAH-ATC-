'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, File, FileVideo, FileImage, Trash2, Download, Search, Folder, MoreVertical, Loader2, Cloud } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

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

    useEffect(() => {
        loadArchivos();
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
        } catch (error) {
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
        } catch (error) {
            toast.error('Error al eliminar archivo');
        }
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
                <Button className="bg-neutral-900 hover:bg-neutral-800">
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
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Tamaño</th>
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
        </div>
    );
}
