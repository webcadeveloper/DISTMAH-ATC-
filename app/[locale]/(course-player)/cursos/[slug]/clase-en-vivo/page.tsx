'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Video,
  Calendar,
  Clock,
  BookOpen,
  FileText,
  ExternalLink,
  Radio,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

interface Module {
  id: string;
  number: number;
  title: string;
  description?: string;
  lessons: {
    id: string;
    number: number;
    title: string;
    slug: string;
    duration?: number;
  }[];
}

interface ScheduleData {
  schedule: {
    id: string;
    shift: string;
    shiftLabel: string;
    daysOfWeek: number[];
    startTime: string;
    endTime: string;
    teamsUrl?: string;
    streamUrl?: string;
    startDate: string;
    endDate: string;
  } | null;
  isLive: boolean;
  nextClass: string | null;
  currentModule: Module | null;
}

const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export default function LiveClassPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = params.locale as string || 'es';

  const [data, setData] = useState<ScheduleData | null>(null);
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    fetchData();
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    const dataInterval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => {
      clearInterval(timeInterval);
      clearInterval(dataInterval);
    };
  }, [slug]);

  const fetchData = async () => {
    try {
      const courseRes = await fetch(`/api/courses/by-slug/${slug}`);
      if (courseRes.ok) {
        const courseData = await courseRes.json();
        setCourse(courseData);

        const scheduleRes = await fetch(`/api/courses/${courseData.id}/schedule`);
        if (scheduleRes.ok) {
          setData(await scheduleRes.json());
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatNextClass = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return `Hoy a las ${date.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}`;
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return `Mañana a las ${date.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}`;
    }
    return date.toLocaleDateString('es', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900" />
      </div>
    );
  }

  if (!data?.schedule) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <Calendar className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-neutral-900 mb-2">Sin horario configurado</h2>
            <p className="text-neutral-600 mb-4">
              Este curso aún no tiene un horario de clases en vivo configurado.
            </p>
            <Link href={`/${locale}/cursos/${slug}/overview`}>
              <Button variant="outline">Ver contenido del curso</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { schedule, isLive, nextClass, currentModule } = data;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header con estado de clase */}
      <div className={`${isLive ? 'bg-red-600' : 'bg-blue-900'} text-white py-4 px-6`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {isLive ? (
              <>
                <div className="flex items-center gap-2">
                  <Radio className="w-5 h-5 animate-pulse" />
                  <span className="font-bold text-lg">EN VIVO AHORA</span>
                </div>
                <Badge variant="secondary" className="bg-white/20">
                  {schedule.shiftLabel}
                </Badge>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Próxima clase:</span>
                </div>
                <span className="font-bold">
                  {nextClass ? formatNextClass(nextClass) : 'Por programar'}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            {schedule.daysOfWeek.map((d: number) => DAY_NAMES[d]).join(', ')}
            <span className="mx-2">|</span>
            <Clock className="w-4 h-4" />
            {schedule.startTime} - {schedule.endTime}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Video de Teams / Área principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna principal - Video */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-neutral-900 relative flex items-center justify-center">
                {isLive && schedule.streamUrl ? (
                  <iframe
                    src={schedule.streamUrl}
                    className="w-full h-full"
                    allow="fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <div className="text-center text-white p-8">
                    <Video className="w-24 h-24 mx-auto mb-4 text-neutral-500" />
                    {isLive ? (
                      <>
                        <h3 className="text-xl font-bold mb-2">Clase en progreso</h3>
                        <p className="text-neutral-400 mb-4">
                          {schedule.streamUrl
                            ? 'Cargando transmisión...'
                            : 'El instructor aún no ha iniciado la transmisión'}
                        </p>
                        {schedule.teamsUrl && (
                          <a
                            href={schedule.teamsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Unirse a Teams (Chat)
                          </a>
                        )}
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold mb-2">Fuera de horario</h3>
                        <p className="text-neutral-400 mb-2">
                          La clase comenzará {nextClass ? formatNextClass(nextClass) : 'pronto'}
                        </p>
                        <p className="text-sm text-neutral-500">
                          Mientras tanto, puedes revisar el material del módulo actual
                        </p>
                      </>
                    )}
                  </div>
                )}

                {isLive && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white animate-pulse">
                      <Radio className="w-3 h-3 mr-1" />
                      EN VIVO
                    </Badge>
                  </div>
                )}
              </div>

              {/* Barra inferior con opciones */}
              <div className="p-4 bg-neutral-100 border-t flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Radio className="w-4 h-4 text-red-500" />
                  <span>Transmisión en vivo</span>
                </div>
                <div className="flex gap-2">
                  {schedule.teamsUrl && (
                    <a
                      href={schedule.teamsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Video className="w-4 h-4" />
                      Abrir Teams (Chat)
                    </a>
                  )}
                </div>
              </div>
            </Card>

            {/* Módulo actual */}
            {currentModule && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">
                        Módulo {currentModule.number} - En clase
                      </p>
                      <CardTitle className="text-xl">{currentModule.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {currentModule.lessons.length} lecciones
                    </Badge>
                  </div>
                  {currentModule.description && (
                    <p className="text-neutral-600 mt-2">{currentModule.description}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {currentModule.lessons.map((lesson, index) => (
                      <Link
                        key={lesson.id}
                        href={`/${locale}/cursos/${slug}/aprender/${currentModule.id}/${lesson.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors group border border-transparent hover:border-neutral-200"
                      >
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-medium text-neutral-600 group-hover:bg-blue-100 group-hover:text-blue-700">
                          {index + 1}
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium text-neutral-900 group-hover:text-blue-700">
                            {lesson.title}
                          </p>
                          {lesson.duration && (
                            <p className="text-xs text-neutral-500">{lesson.duration} min</p>
                          )}
                        </div>
                        <FileText className="w-4 h-4 text-neutral-400 group-hover:text-blue-600" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Timeline de módulos */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5" />
                  Programa del Curso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course?.modules?.map((module: Module, index: number) => {
                    const isCurrent = currentModule?.id === module.id;
                    return (
                      <div
                        key={module.id}
                        className={`relative pl-6 pb-4 ${
                          index < (course?.modules?.length || 0) - 1 ? 'border-l-2' : ''
                        } ${isCurrent ? 'border-blue-500' : 'border-neutral-200'}`}
                      >
                        <div
                          className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] ${
                            isCurrent
                              ? 'bg-blue-500 ring-4 ring-blue-100'
                              : 'bg-neutral-300'
                          }`}
                        />
                        <div className={isCurrent ? 'text-blue-900' : 'text-neutral-600'}>
                          <p className="text-xs text-neutral-500 mb-1">Módulo {module.number}</p>
                          <p className={`font-medium ${isCurrent ? 'text-blue-900' : 'text-neutral-900'}`}>
                            {module.title}
                          </p>
                          <p className="text-xs text-neutral-500 mt-1">
                            {module.lessons?.length || 0} lecciones
                          </p>
                          {isCurrent && (
                            <Badge className="mt-2 bg-blue-100 text-blue-700 hover:bg-blue-100">
                              En progreso
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Info del horario */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5" />
                  Horario de Clases
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-500">Turno</p>
                  <p className="font-medium text-neutral-900">{schedule.shiftLabel}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Días</p>
                  <p className="font-medium text-neutral-900">
                    {schedule.daysOfWeek.map((d: number) => DAY_NAMES[d]).join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Horario</p>
                  <p className="font-medium text-neutral-900">
                    {schedule.startTime} - {schedule.endTime}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Período</p>
                  <p className="font-medium text-neutral-900">
                    {new Date(schedule.startDate).toLocaleDateString('es')} -{' '}
                    {new Date(schedule.endDate).toLocaleDateString('es')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
