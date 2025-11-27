'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Video, Users, Plus, Copy, Trash2, ExternalLink, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface LiveClass {
    id: string;
    title: string;
    description: string;
    meetingUrl: string;
    joinUrl: string;
    scheduledStart: string;
    scheduledEnd: string;
    recordingUrl: string | null;
    attendeesCount: number;
    course: {
        id: string;
        title: string;
    };
}

export default function ClasesInstructorPage() {
    const [clases, setClases] = useState<LiveClass[]>([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        upcoming: 0,
        thisWeek: 0,
        totalAttendees: 0,
        totalHours: 0
    });

    useEffect(() => {
        loadClases();
    }, []);

    const loadClases = async () => {
        try {
            const response = await fetch('/api/live-classes');
            if (!response.ok) throw new Error('Error al cargar clases');
            const data = await response.json();
            setClases(data);

            const now = new Date();
            const weekEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

            setStats({
                upcoming: data.filter((c: LiveClass) => new Date(c.scheduledStart) > now).length,
                thisWeek: data.filter((c: LiveClass) => {
                    const start = new Date(c.scheduledStart);
                    return start > now && start < weekEnd;
                }).length,
                totalAttendees: data.reduce((acc: number, c: LiveClass) => acc + c.attendeesCount, 0),
                totalHours: Math.round(data.reduce((acc: number, c: LiveClass) => {
                    const start = new Date(c.scheduledStart);
                    const end = new Date(c.scheduledEnd);
                    return acc + (end.getTime() - start.getTime()) / (1000 * 60 * 60);
                }, 0))
            });
        } catch {
            toast.error('Error al cargar clases en vivo');
        } finally {
            setLoading(false);
        }
    };

    const getEstado = (clase: LiveClass) => {
        const now = new Date();
        const start = new Date(clase.scheduledStart);
        const end = new Date(clase.scheduledEnd);

        if (now < start) return 'Programada';
        if (now >= start && now <= end) return 'En Curso';
        return 'Finalizada';
    };

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

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const formatTime = (dateStr: string) => {
        return new Date(dateStr).toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getDuration = (start: string, end: string) => {
        const diff = new Date(end).getTime() - new Date(start).getTime();
        const minutes = Math.round(diff / (1000 * 60));
        return `${minutes} min`;
    };

    const copyLink = (url: string) => {
        navigator.clipboard.writeText(url);
        toast.success('Link copiado al portapapeles');
    };

    if (loading) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-neutral-600" />
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Clases en Vivo</h1>
                    <p className="text-neutral-600">Programa y gestiona tus sesiones en Microsoft Teams.</p>
                </div>
                <Button className="bg-neutral-900 hover:bg-neutral-800">
                    <Plus className="w-4 h-4 mr-2" /> Programar Clase
                </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Próximas Clases</p>
                                <p className="text-2xl font-bold text-neutral-900">{stats.upcoming}</p>
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
                                <p className="text-2xl font-bold text-green-600">{stats.thisWeek}</p>
                            </div>
                            <Clock className="w-8 h-8 text-green-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600">Total Asistentes</p>
                                <p className="text-2xl font-bold text-neutral-900">{stats.totalAttendees}</p>
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
                                <p className="text-2xl font-bold text-neutral-900">{stats.totalHours}</p>
                            </div>
                            <Video className="w-8 h-8 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {clases.length === 0 ? (
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-12 text-center">
                        <Video className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">No hay clases programadas</h3>
                        <p className="text-neutral-600 mb-4">Programa tu primera clase en vivo con Microsoft Teams</p>
                        <Button className="bg-neutral-900 hover:bg-neutral-800">
                            <Plus className="w-4 h-4 mr-2" /> Programar Clase
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {clases.map((clase) => {
                        const estado = getEstado(clase);
                        return (
                            <Card key={clase.id} className="bg-white border-neutral-200 hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-neutral-900">{clase.title}</h3>
                                                <Badge variant="outline" className={getEstadoColor(estado)}>
                                                    {estado}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-neutral-600 mb-3">{clase.course.title}</p>

                                            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{formatDate(clase.scheduledStart)}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{formatTime(clase.scheduledStart)} ({getDuration(clase.scheduledStart, clase.scheduledEnd)})</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M19.75 3H4.25A2.25 2.25 0 0 0 2 5.25v13.5A2.25 2.25 0 0 0 4.25 21h15.5A2.25 2.25 0 0 0 22 18.75V5.25A2.25 2.25 0 0 0 19.75 3zM8 17H5V7h3v10zm8-4h-6v-2h6v2zm0-4h-6V7h6v2z"/>
                                                    </svg>
                                                    <span>Microsoft Teams</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="w-4 h-4" />
                                                    <span>{clase.attendeesCount} asistentes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                                        {estado !== 'Finalizada' && (
                                            <>
                                                <Button
                                                    variant="default"
                                                    size="sm"
                                                    className="bg-blue-600 hover:bg-blue-700"
                                                    onClick={() => window.open(clase.joinUrl || clase.meetingUrl, '_blank')}
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2" /> Unirse a Teams
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => copyLink(clase.joinUrl || clase.meetingUrl)}
                                                >
                                                    <Copy className="w-4 h-4 mr-2" /> Copiar Link
                                                </Button>
                                            </>
                                        )}
                                        <Button variant="outline" size="sm">
                                            Editar
                                        </Button>
                                        {estado === 'Finalizada' && clase.recordingUrl && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => window.open(clase.recordingUrl!, '_blank')}
                                            >
                                                <Video className="w-4 h-4 mr-2" /> Ver Grabación
                                            </Button>
                                        )}
                                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                            <Trash2 className="w-4 h-4 mr-2" /> Cancelar
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
