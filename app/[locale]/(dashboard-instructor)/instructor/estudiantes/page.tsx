'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Download, Mail, MoreVertical, User, BookOpen, Clock, Loader2, Users } from 'lucide-react';
import { toast } from 'sonner';

interface Student {
    id: string;
    userId: string;
    name: string;
    email: string;
    avatar?: string;
    course: {
        id: string;
        title: string;
        slug: string;
    };
    progress: number;
    enrolledAt: string;
    lastActivity?: string;
    status: string;
}

export default function EstudiantesInstructorPage() {
    const [estudiantes, setEstudiantes] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [stats, setStats] = useState({
        total: 0,
        activos: 0,
        completados: 0,
        promedioProgreso: 0
    });

    useEffect(() => {
        loadEstudiantes();
    }, []);

    const loadEstudiantes = async () => {
        try {
            const response = await fetch('/api/instructor/students');
            if (!response.ok) throw new Error('Error al cargar estudiantes');
            const data = await response.json();
            setEstudiantes(data.students || []);

            const students = data.students || [];
            const activos = students.filter((s: Student) => s.status === 'ACTIVE').length;
            const completados = students.filter((s: Student) => s.progress >= 100).length;
            const totalProgreso = students.reduce((acc: number, s: Student) => acc + s.progress, 0);

            setStats({
                total: students.length,
                activos,
                completados,
                promedioProgreso: students.length > 0 ? Math.round(totalProgreso / students.length) : 0
            });
        } catch {
            toast.error('Error al cargar estudiantes');
        } finally {
            setLoading(false);
        }
    };

    const courses = Array.from(new Set(estudiantes.map(s => s.course.id)))
        .map(id => estudiantes.find(s => s.course.id === id)!.course);

    const getEstadoColor = (progress: number, status: string) => {
        if (progress >= 100) return 'bg-blue-100 text-blue-800 border-blue-200';
        if (status === 'ACTIVE') return 'bg-green-100 text-green-800 border-green-200';
        return 'bg-neutral-100 text-neutral-600 border-neutral-200';
    };

    const getEstadoLabel = (progress: number, status: string) => {
        if (progress >= 100) return 'Completado';
        if (status === 'ACTIVE') return 'Activo';
        return 'Inactivo';
    };

    const getProgresoColor = (progreso: number) => {
        if (progreso >= 75) return 'bg-green-500';
        if (progreso >= 50) return 'bg-blue-500';
        if (progreso >= 25) return 'bg-yellow-500';
        return 'bg-neutral-300';
    };

    const formatDate = (dateStr: string) => {
        if (!dateStr) return 'N/A';
        return new Date(dateStr).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getLastActivityLabel = (lastActivity?: string) => {
        if (!lastActivity) return 'Sin actividad';
        const date = new Date(lastActivity);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Hoy';
        if (diffDays === 1) return 'Ayer';
        if (diffDays < 7) return `Hace ${diffDays} días`;
        return formatDate(lastActivity);
    };

    const filteredEstudiantes = estudiantes.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             s.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCourse = selectedCourse === 'all' || s.course.id === selectedCourse;
        const matchesStatus = selectedStatus === 'all' ||
                             (selectedStatus === 'activo' && s.status === 'ACTIVE' && s.progress < 100) ||
                             (selectedStatus === 'completado' && s.progress >= 100) ||
                             (selectedStatus === 'inactivo' && s.status !== 'ACTIVE');
        return matchesSearch && matchesCourse && matchesStatus;
    });

    if (loading) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Estudiantes</h1>
                    <p className="text-neutral-600 dark:text-neutral-400">Gestiona y monitorea el progreso de tus estudiantes.</p>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
                        <p className="text-neutral-600 dark:text-neutral-400">Cargando estudiantes...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (estudiantes.length === 0) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Estudiantes</h1>
                    <p className="text-neutral-600 dark:text-neutral-400">Gestiona y monitorea el progreso de tus estudiantes.</p>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <Users className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">No tienes estudiantes inscritos</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">Los estudiantes aparecerán aquí cuando se inscriban en tus cursos</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Estudiantes</h1>
                    <p className="text-neutral-600 dark:text-neutral-400">Gestiona y monitorea el progreso de tus estudiantes.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="border-neutral-300">
                        <Download className="w-4 h-4 mr-2" /> Exportar Lista
                    </Button>
                    <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">
                        <Mail className="w-4 h-4 mr-2" /> Enviar Mensaje
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Estudiantes</p>
                                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{stats.total}</p>
                            </div>
                            <User className="w-8 h-8 text-neutral-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Activos</p>
                                <p className="text-2xl font-bold text-green-600">{stats.activos}</p>
                            </div>
                            <BookOpen className="w-8 h-8 text-green-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Completados</p>
                                <p className="text-2xl font-bold text-blue-600">{stats.completados}</p>
                            </div>
                            <User className="w-8 h-8 text-blue-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Promedio Progreso</p>
                                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{stats.promedioProgreso}%</p>
                            </div>
                            <Clock className="w-8 h-8 text-yellow-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="mb-6 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                        <div className="flex-grow relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                            <Input
                                placeholder="Buscar por nombre o email..."
                                className="pl-10 bg-neutral-50 border-neutral-200"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <select
                            className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-sm text-neutral-900 dark:text-white"
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                        >
                            <option value="all">Todos los cursos</option>
                            {courses.map(course => (
                                <option key={course.id} value={course.id}>{course.title}</option>
                            ))}
                        </select>
                        <select
                            className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-sm text-neutral-900 dark:text-white"
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                            <option value="all">Todos los estados</option>
                            <option value="activo">Activo</option>
                            <option value="completado">Completado</option>
                            <option value="inactivo">Inactivo</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-neutral-50 dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Estudiante</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Curso</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Progreso</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Inscripción</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Última Actividad</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Estado</th>
                                    <th className="text-right px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                                {filteredEstudiantes.map((estudiante) => (
                                    <tr key={estudiante.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-600 flex items-center justify-center overflow-hidden">
                                                    {estudiante.avatar ? (
                                                        <img src={estudiante.avatar} alt={estudiante.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <User className="w-5 h-5 text-neutral-600" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-neutral-900 dark:text-white">{estudiante.name}</p>
                                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{estudiante.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="text-neutral-700 border-neutral-300">
                                                {estudiante.course.title}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-full">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-sm font-medium text-neutral-900 dark:text-white">{estudiante.progress}%</span>
                                                </div>
                                                <div className="w-full bg-neutral-200 dark:bg-neutral-600 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${getProgresoColor(estudiante.progress)}`}
                                                        style={{ width: `${estudiante.progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">
                                            {formatDate(estudiante.enrolledAt)}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">
                                            {getLastActivityLabel(estudiante.lastActivity)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className={getEstadoColor(estudiante.progress, estudiante.status)}>
                                                {getEstadoLabel(estudiante.progress, estudiante.status)}
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
