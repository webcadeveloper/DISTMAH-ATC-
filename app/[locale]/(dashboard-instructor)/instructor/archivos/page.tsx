import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, File, FileVideo, FileImage, Trash2, Download, Search, Folder, MoreVertical } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function ArchivosInstructorPage() {
    const archivos = [
        {
            id: 1,
            nombre: 'Manual Civil 3D 2026.pdf',
            tipo: 'pdf',
            tamano: '2.4 MB',
            curso: 'Civil 3D 2026 Básico',
            fechaSubida: '2025-11-20',
            descargas: 45
        },
        {
            id: 2,
            nombre: 'Ejercicio Alineamiento Horizontal.dwg',
            tipo: 'dwg',
            tamano: '8.1 MB',
            curso: 'Civil 3D 2026 Básico',
            fechaSubida: '2025-11-18',
            descargas: 32
        },
        {
            id: 3,
            nombre: 'Tutorial Superficies.mp4',
            tipo: 'video',
            tamano: '124 MB',
            curso: 'Civil 3D 2026 Avanzado',
            fechaSubida: '2025-11-15',
            descargas: 67
        },
        {
            id: 4,
            nombre: 'Plantilla Proyecto.dwt',
            tipo: 'dwt',
            tamano: '1.2 MB',
            curso: 'Civil 3D 2026 Básico',
            fechaSubida: '2025-11-12',
            descargas: 89
        },
        {
            id: 5,
            nombre: 'Ejemplo Ensamblaje.png',
            tipo: 'imagen',
            tamano: '456 KB',
            curso: 'Civil 3D 2026 Avanzado',
            fechaSubida: '2025-11-10',
            descargas: 23
        }
    ];

    const getFileIcon = (tipo: string) => {
        switch (tipo) {
            case 'video':
                return <FileVideo className="w-5 h-5 text-blue-600" />;
            case 'imagen':
                return <FileImage className="w-5 h-5 text-green-600" />;
            default:
                return <File className="w-5 h-5 text-neutral-600" />;
        }
    };

    return (
        <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Archivos</h1>
                    <p className="text-neutral-600">Gestiona los archivos y recursos de tus cursos.</p>
                </div>
                <Button className="bg-neutral-900 hover:bg-neutral-800">
                    <Upload className="w-4 h-4 mr-2" /> Subir Archivo
                </Button>
            </div>

            {/* Filtros y búsqueda */}
            <Card className="mb-6 bg-white border-neutral-200">
                <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                        <div className="flex-grow relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                            <Input
                                placeholder="Buscar archivos..."
                                className="pl-10 bg-neutral-50 border-neutral-200"
                            />
                        </div>
                        <Button variant="outline" className="border-neutral-300">
                            <Folder className="w-4 h-4 mr-2" /> Organizar por Curso
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Total Archivos</p>
                                <p className="text-2xl font-bold text-neutral-900">48</p>
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
                                <p className="text-2xl font-bold text-neutral-900">12</p>
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
                                <p className="text-2xl font-bold text-neutral-900">28</p>
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
                                <p className="text-2xl font-bold text-neutral-900">2.4 GB</p>
                            </div>
                            <Folder className="w-8 h-8 text-yellow-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Lista de archivos */}
            <Card className="bg-white border-neutral-200">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-neutral-50 border-b border-neutral-200">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Archivo</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Curso</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Tamaño</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Descargas</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Fecha</th>
                                    <th className="text-right px-6 py-4 text-sm font-semibold text-neutral-700">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200">
                                {archivos.map((archivo) => (
                                    <tr key={archivo.id} className="hover:bg-neutral-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {getFileIcon(archivo.tipo)}
                                                <div>
                                                    <p className="font-medium text-neutral-900">{archivo.nombre}</p>
                                                    <p className="text-xs text-neutral-500">{archivo.tipo.toUpperCase()}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="text-neutral-700 border-neutral-300">
                                                {archivo.curso}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-neutral-600">{archivo.tamano}</td>
                                        <td className="px-6 py-4 text-sm text-neutral-600">{archivo.descargas}</td>
                                        <td className="px-6 py-4 text-sm text-neutral-600">{archivo.fechaSubida}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Download className="w-4 h-4 text-neutral-600" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
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
