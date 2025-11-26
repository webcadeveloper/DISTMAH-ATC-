import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Video, Users, Plus, Copy, Trash2, ExternalLink } from 'lucide-react';

export default function ClasesInstructorPage() {
    const clases = [
        {
            id: 1,
            titulo: 'Introducción a Civil 3D 2026',
            curso: 'Civil 3D 2026 Básico',
            fecha: '2025-11-28',
            hora: '10:00 AM',
            duracion: '90 min',
            plataforma: 'Zoom',
            linkReunion: 'https://zoom.us/j/123456789',
            inscritos: 24,
            estado: 'Programada',
            tipo: 'Clase en Vivo'
        },
        {
            id: 2,
            titulo: 'Superficies y Análisis Topográfico',
            curso: 'Civil 3D 2026 Avanzado',
            fecha: '2025-11-30',
            hora: '3:00 PM',
            duracion: '120 min',
            plataforma: 'Google Meet',
            linkReunion: 'https://meet.google.com/abc-defg-hij',
            inscritos: 18,
            estado: 'Programada',
            tipo: 'Taller Práctico'
        },
        {
            id: 3,
            titulo: 'Sesión de Preguntas y Respuestas',
            curso: 'Civil 3D 2026 Básico',
            fecha: '2025-11-25',
            hora: '2:00 PM',
            duracion: '60 min',
            plataforma: 'Zoom',
            linkReunion: 'https://zoom.us/j/987654321',
            inscritos: 31,
            estado: 'En Curso',
            tipo: 'Q&A'
        },
        {
            id: 4,
            titulo: 'Diseño de Alineamientos Horizontales',
            curso: 'Civil 3D 2026 Básico',
            fecha: '2025-11-22',
            hora: '11:00 AM',
            duracion: '90 min',
            plataforma: 'Zoom',
            linkReunion: 'https://zoom.us/j/456789123',
            inscritos: 28,
            estado: 'Finalizada',
            tipo: 'Clase en Vivo'
        },
        {
            id: 5,
            titulo: 'Ensamblajes y Corredores Avanzados',
            curso: 'Civil 3D 2026 Avanzado',
            fecha: '2025-12-05',
            hora: '4:00 PM',
            duracion: '120 min',
            plataforma: 'Google Meet',
            linkReunion: 'https://meet.google.com/xyz-uvwx-mno',
            inscritos: 15,
            estado: 'Programada',
            tipo: 'Taller Práctico'
        }
    ];

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'Programada':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'En Curso':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'Finalizada':
                return 'bg-neutral-100 text-neutral-600 border-neutral-200';
            default:
                return 'bg-neutral-100 text-neutral-600 border-neutral-200';
        }
    };

    const getPlataformaIcon = (plataforma: string) => {
        return <Video className="w-4 h-4" />;
    };

    return (
        <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Clases en Vivo</h1>
                    <p className="text-neutral-600">Programa y gestiona tus sesiones en vivo con estudiantes.</p>
                </div>
                <Button className="bg-neutral-900 hover:bg-neutral-800">
                    <Plus className="w-4 h-4 mr-2" /> Programar Clase
                </Button>
            </div>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Próximas Clases</p>
                                <p className="text-2xl font-bold text-neutral-900">8</p>
                            </div>
                            <Calendar className="w-8 h-8 text-blue-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Esta Semana</p>
                                <p className="text-2xl font-bold text-green-600">3</p>
                            </div>
                            <Clock className="w-8 h-8 text-green-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Total Inscritos</p>
                                <p className="text-2xl font-bold text-neutral-900">116</p>
                            </div>
                            <Users className="w-8 h-8 text-neutral-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Horas Totales</p>
                                <p className="text-2xl font-bold text-neutral-900">45</p>
                            </div>
                            <Video className="w-8 h-8 text-purple-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Filtros */}
            <Card className="mb-6 bg-white border-neutral-200">
                <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                        <select className="px-4 py-2 border border-neutral-300 rounded-md bg-white text-sm">
                            <option>Todos los estados</option>
                            <option>Programada</option>
                            <option>En Curso</option>
                            <option>Finalizada</option>
                        </select>
                        <select className="px-4 py-2 border border-neutral-300 rounded-md bg-white text-sm">
                            <option>Todos los cursos</option>
                            <option>Civil 3D 2026 Básico</option>
                            <option>Civil 3D 2026 Avanzado</option>
                        </select>
                        <select className="px-4 py-2 border border-neutral-300 rounded-md bg-white text-sm">
                            <option>Todas las plataformas</option>
                            <option>Zoom</option>
                            <option>Google Meet</option>
                            <option>Microsoft Teams</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Lista de clases */}
            <div className="grid gap-4">
                {clases.map((clase) => (
                    <Card key={clase.id} className="bg-white border-neutral-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-neutral-900">{clase.titulo}</h3>
                                        <Badge variant="outline" className={getEstadoColor(clase.estado)}>
                                            {clase.estado}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-neutral-600 mb-3">{clase.curso}</p>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{clase.fecha}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{clase.hora} ({clase.duracion})</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {getPlataformaIcon(clase.plataforma)}
                                            <span>{clase.plataforma}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span>{clase.inscritos} inscritos</span>
                                        </div>
                                        <Badge variant="outline" className="text-neutral-700 border-neutral-300">
                                            {clase.tipo}
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                                {clase.estado !== 'Finalizada' && (
                                    <>
                                        <Button variant="default" size="sm" className="bg-neutral-900 hover:bg-neutral-800">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Unirse a Clase
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Copy className="w-4 h-4 mr-2" /> Copiar Link
                                        </Button>
                                    </>
                                )}
                                <Button variant="outline" size="sm">
                                    Editar
                                </Button>
                                {clase.estado === 'Finalizada' && (
                                    <Button variant="outline" size="sm">
                                        <Video className="w-4 h-4 mr-2" /> Ver Grabación
                                    </Button>
                                )}
                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                    <Trash2 className="w-4 h-4 mr-2" /> Cancelar
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
