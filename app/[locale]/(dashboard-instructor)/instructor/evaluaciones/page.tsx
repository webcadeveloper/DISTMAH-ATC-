import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, FileText, CheckCircle, Clock, Users, Edit, Trash2, Eye } from 'lucide-react';

export default function EvaluacionesInstructorPage() {
    const evaluaciones = [
        {
            id: 1,
            titulo: 'Examen Final - Civil 3D Básico',
            tipo: 'Examen',
            curso: 'Civil 3D 2026 Básico',
            fechaCreacion: '2025-11-20',
            fechaLimite: '2025-12-15',
            duracion: '120 min',
            totalPreguntas: 25,
            entregas: 18,
            pendientes: 6,
            calificadas: 12,
            promedioCalificacion: 87,
            estado: 'Activa'
        },
        {
            id: 2,
            titulo: 'Proyecto Práctico - Alineamiento',
            tipo: 'Tarea',
            curso: 'Civil 3D 2026 Básico',
            fechaCreacion: '2025-11-15',
            fechaLimite: '2025-11-30',
            duracion: 'N/A',
            totalPreguntas: null,
            entregas: 22,
            pendientes: 2,
            calificadas: 20,
            promedioCalificacion: 92,
            estado: 'Activa'
        },
        {
            id: 3,
            titulo: 'Quiz - Superficies y Análisis',
            tipo: 'Quiz',
            curso: 'Civil 3D 2026 Avanzado',
            fechaCreacion: '2025-11-18',
            fechaLimite: '2025-11-28',
            duracion: '30 min',
            totalPreguntas: 10,
            entregas: 15,
            pendientes: 3,
            calificadas: 15,
            promedioCalificacion: 85,
            estado: 'Activa'
        },
        {
            id: 4,
            titulo: 'Examen Módulo 3 - Ensamblajes',
            tipo: 'Examen',
            curso: 'Civil 3D 2026 Avanzado',
            fechaCreacion: '2025-11-10',
            fechaLimite: '2025-11-25',
            duracion: '90 min',
            totalPreguntas: 20,
            entregas: 14,
            pendientes: 0,
            calificadas: 14,
            promedioCalificacion: 88,
            estado: 'Cerrada'
        },
        {
            id: 5,
            titulo: 'Tarea - Diseño de Corredor',
            tipo: 'Tarea',
            curso: 'Civil 3D 2026 Avanzado',
            fechaCreacion: '2025-11-22',
            fechaLimite: '2025-12-10',
            duracion: 'N/A',
            totalPreguntas: null,
            entregas: 5,
            pendientes: 13,
            calificadas: 2,
            promedioCalificacion: 90,
            estado: 'Activa'
        },
        {
            id: 6,
            titulo: 'Quiz Rápido - Interfaz Civil 3D',
            tipo: 'Quiz',
            curso: 'Civil 3D 2026 Básico',
            fechaCreacion: '2025-11-05',
            fechaLimite: '2025-11-15',
            duracion: '15 min',
            totalPreguntas: 5,
            entregas: 24,
            pendientes: 0,
            calificadas: 24,
            promedioCalificacion: 94,
            estado: 'Cerrada'
        }
    ];

    const getTipoColor = (tipo: string) => {
        switch (tipo) {
            case 'Examen':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'Tarea':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Quiz':
                return 'bg-green-100 text-green-800 border-green-200';
            default:
                return 'bg-neutral-100 text-neutral-600 border-neutral-200';
        }
    };

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'Activa':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'Cerrada':
                return 'bg-neutral-100 text-neutral-600 border-neutral-200';
            default:
                return 'bg-neutral-100 text-neutral-600 border-neutral-200';
        }
    };

    return (
        <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Evaluaciones</h1>
                    <p className="text-neutral-600">Gestiona tareas, exámenes y calificaciones de tus cursos.</p>
                </div>
                <Button className="bg-neutral-900 hover:bg-neutral-800">
                    <Plus className="w-4 h-4 mr-2" /> Nueva Evaluación
                </Button>
            </div>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Total Evaluaciones</p>
                                <p className="text-2xl font-bold text-neutral-900">32</p>
                            </div>
                            <FileText className="w-8 h-8 text-neutral-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Pendientes Calificar</p>
                                <p className="text-2xl font-bold text-yellow-600">24</p>
                            </div>
                            <Clock className="w-8 h-8 text-yellow-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Calificadas</p>
                                <p className="text-2xl font-bold text-green-600">87</p>
                            </div>
                            <CheckCircle className="w-8 h-8 text-green-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Promedio General</p>
                                <p className="text-2xl font-bold text-neutral-900">89%</p>
                            </div>
                            <Users className="w-8 h-8 text-blue-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Filtros */}
            <Card className="mb-6 bg-white border-neutral-200">
                <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                        <select className="px-4 py-2 border border-neutral-300 rounded-md bg-white text-sm">
                            <option>Todos los tipos</option>
                            <option>Examen</option>
                            <option>Tarea</option>
                            <option>Quiz</option>
                        </select>
                        <select className="px-4 py-2 border border-neutral-300 rounded-md bg-white text-sm">
                            <option>Todos los cursos</option>
                            <option>Civil 3D 2026 Básico</option>
                            <option>Civil 3D 2026 Avanzado</option>
                        </select>
                        <select className="px-4 py-2 border border-neutral-300 rounded-md bg-white text-sm">
                            <option>Todos los estados</option>
                            <option>Activa</option>
                            <option>Cerrada</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Lista de evaluaciones */}
            <div className="grid gap-4">
                {evaluaciones.map((evaluacion) => (
                    <Card key={evaluacion.id} className="bg-white border-neutral-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-neutral-900">{evaluacion.titulo}</h3>
                                        <Badge variant="outline" className={getTipoColor(evaluacion.tipo)}>
                                            {evaluacion.tipo}
                                        </Badge>
                                        <Badge variant="outline" className={getEstadoColor(evaluacion.estado)}>
                                            {evaluacion.estado}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-neutral-600 mb-3">{evaluacion.curso}</p>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-xs text-neutral-500">Fecha Límite</p>
                                            <p className="text-sm font-medium text-neutral-900">{evaluacion.fechaLimite}</p>
                                        </div>
                                        {evaluacion.duracion !== 'N/A' && (
                                            <div>
                                                <p className="text-xs text-neutral-500">Duración</p>
                                                <p className="text-sm font-medium text-neutral-900">{evaluacion.duracion}</p>
                                            </div>
                                        )}
                                        {evaluacion.totalPreguntas && (
                                            <div>
                                                <p className="text-xs text-neutral-500">Preguntas</p>
                                                <p className="text-sm font-medium text-neutral-900">{evaluacion.totalPreguntas}</p>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-xs text-neutral-500">Entregas</p>
                                            <p className="text-sm font-medium text-neutral-900">{evaluacion.entregas}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                <div className="flex items-center gap-6 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-yellow-600" />
                                        <span className="text-neutral-600">
                                            <span className="font-semibold text-yellow-600">{evaluacion.pendientes}</span> pendientes
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span className="text-neutral-600">
                                            <span className="font-semibold text-green-600">{evaluacion.calificadas}</span> calificadas
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-neutral-600">
                                            Promedio: <span className="font-semibold text-neutral-900">{evaluacion.promedioCalificacion}%</span>
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    {evaluacion.pendientes > 0 && (
                                        <Button variant="default" size="sm" className="bg-neutral-900 hover:bg-neutral-800">
                                            <CheckCircle className="w-4 h-4 mr-2" /> Calificar ({evaluacion.pendientes})
                                        </Button>
                                    )}
                                    <Button variant="outline" size="sm">
                                        <Eye className="w-4 h-4 mr-2" /> Ver Detalles
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Edit className="w-4 h-4 mr-2" /> Editar
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
