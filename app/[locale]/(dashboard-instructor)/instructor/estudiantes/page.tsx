import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Download, Mail, MoreVertical, User, BookOpen, Clock } from 'lucide-react';

export default function EstudiantesInstructorPage() {
    const estudiantes = [
        {
            id: 1,
            nombre: 'Carlos Méndez',
            email: 'carlos.mendez@example.com',
            curso: 'Civil 3D 2026 Básico',
            progreso: 75,
            ultimaActividad: '2025-11-24',
            estado: 'Activo',
            calificacion: 92
        },
        {
            id: 2,
            nombre: 'María González',
            email: 'maria.gonzalez@example.com',
            curso: 'Civil 3D 2026 Avanzado',
            progreso: 45,
            ultimaActividad: '2025-11-23',
            estado: 'Activo',
            calificacion: 88
        },
        {
            id: 3,
            nombre: 'Juan Ramírez',
            email: 'juan.ramirez@example.com',
            curso: 'Civil 3D 2026 Básico',
            progreso: 100,
            ultimaActividad: '2025-11-22',
            estado: 'Completado',
            calificacion: 95
        },
        {
            id: 4,
            nombre: 'Ana Torres',
            email: 'ana.torres@example.com',
            curso: 'Civil 3D 2026 Avanzado',
            progreso: 30,
            ultimaActividad: '2025-11-20',
            estado: 'Activo',
            calificacion: 85
        },
        {
            id: 5,
            nombre: 'Pedro Sánchez',
            email: 'pedro.sanchez@example.com',
            curso: 'Civil 3D 2026 Básico',
            progreso: 15,
            ultimaActividad: '2025-11-15',
            estado: 'Inactivo',
            calificacion: 72
        },
        {
            id: 6,
            nombre: 'Laura Martínez',
            email: 'laura.martinez@example.com',
            curso: 'Civil 3D 2026 Avanzado',
            progreso: 88,
            ultimaActividad: '2025-11-24',
            estado: 'Activo',
            calificacion: 91
        }
    ];

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'Activo':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'Completado':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Inactivo':
                return 'bg-neutral-100 text-neutral-600 border-neutral-200';
            default:
                return 'bg-neutral-100 text-neutral-600 border-neutral-200';
        }
    };

    const getProgresoColor = (progreso: number) => {
        if (progreso >= 75) return 'bg-green-500';
        if (progreso >= 50) return 'bg-blue-500';
        if (progreso >= 25) return 'bg-yellow-500';
        return 'bg-neutral-300';
    };

    return (
        <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Estudiantes</h1>
                    <p className="text-neutral-600">Gestiona y monitorea el progreso de tus estudiantes.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="border-neutral-300">
                        <Download className="w-4 h-4 mr-2" /> Exportar Lista
                    </Button>
                    <Button className="bg-neutral-900 hover:bg-neutral-800">
                        <Mail className="w-4 h-4 mr-2" /> Enviar Mensaje
                    </Button>
                </div>
            </div>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Total Estudiantes</p>
                                <p className="text-2xl font-bold text-neutral-900">127</p>
                            </div>
                            <User className="w-8 h-8 text-neutral-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Activos</p>
                                <p className="text-2xl font-bold text-green-600">98</p>
                            </div>
                            <BookOpen className="w-8 h-8 text-green-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Completados</p>
                                <p className="text-2xl font-bold text-blue-600">23</p>
                            </div>
                            <User className="w-8 h-8 text-blue-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Promedio Progreso</p>
                                <p className="text-2xl font-bold text-neutral-900">68%</p>
                            </div>
                            <Clock className="w-8 h-8 text-yellow-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Filtros y búsqueda */}
            <Card className="mb-6 bg-white border-neutral-200">
                <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                        <div className="flex-grow relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                            <Input
                                placeholder="Buscar por nombre o email..."
                                className="pl-10 bg-neutral-50 border-neutral-200"
                            />
                        </div>
                        <select className="px-4 py-2 border border-neutral-300 rounded-md bg-white text-sm">
                            <option>Todos los cursos</option>
                            <option>Civil 3D 2026 Básico</option>
                            <option>Civil 3D 2026 Avanzado</option>
                        </select>
                        <select className="px-4 py-2 border border-neutral-300 rounded-md bg-white text-sm">
                            <option>Todos los estados</option>
                            <option>Activo</option>
                            <option>Completado</option>
                            <option>Inactivo</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Tabla de estudiantes */}
            <Card className="bg-white border-neutral-200">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-neutral-50 border-b border-neutral-200">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Estudiante</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Curso</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Progreso</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Calificación</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Última Actividad</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700">Estado</th>
                                    <th className="text-right px-6 py-4 text-sm font-semibold text-neutral-700">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200">
                                {estudiantes.map((estudiante) => (
                                    <tr key={estudiante.id} className="hover:bg-neutral-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">
                                                    <User className="w-5 h-5 text-neutral-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-neutral-900">{estudiante.nombre}</p>
                                                    <p className="text-xs text-neutral-500">{estudiante.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="text-neutral-700 border-neutral-300">
                                                {estudiante.curso}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-full">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-sm font-medium text-neutral-900">{estudiante.progreso}%</span>
                                                </div>
                                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${getProgresoColor(estudiante.progreso)}`}
                                                        style={{ width: `${estudiante.progreso}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-semibold text-neutral-900">{estudiante.calificacion}</span>
                                            <span className="text-neutral-500">/100</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-neutral-600">{estudiante.ultimaActividad}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className={getEstadoColor(estudiante.estado)}>
                                                {estudiante.estado}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button variant="ghost" size="sm">
                                                    Ver Detalles
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
