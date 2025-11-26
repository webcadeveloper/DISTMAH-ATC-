'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, Video, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface LiveClass {
  id: string;
  title: string;
  description: string;
  meetingUrl: string;
  joinUrl: string;
  scheduledStart: string;
  scheduledEnd: string;
  instructor: {
    name: string;
  };
  course: {
    title: string;
  };
}

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export default function CalendarioPage() {
  const [eventos, setEventos] = useState<LiveClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [mesActual, setMesActual] = useState(new Date().getMonth());
  const [añoActual, setAñoActual] = useState(new Date().getFullYear());

  useEffect(() => {
    loadEventos();
  }, []);

  const loadEventos = async () => {
    try {
      const response = await fetch('/api/live-classes?upcoming=true');
      if (!response.ok) throw new Error('Error al cargar eventos');
      const data = await response.json();
      setEventos(data);
    } catch {
      toast.error('Error al cargar el calendario');
    } finally {
      setLoading(false);
    }
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    if (mesActual === 0) {
      setMesActual(11);
      setAñoActual(añoActual - 1);
    } else {
      setMesActual(mesActual - 1);
    }
  };

  const nextMonth = () => {
    if (mesActual === 11) {
      setMesActual(0);
      setAñoActual(añoActual + 1);
    } else {
      setMesActual(mesActual + 1);
    }
  };

  const daysInMonth = getDaysInMonth(mesActual, añoActual);
  const firstDay = getFirstDayOfMonth(mesActual, añoActual);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);


  if (loading) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Calendario</h1>
          <p className="text-neutral-600">Gestiona tus clases y eventos programados</p>
        </div>
        <Card>
          <CardContent className="p-12 text-center">
            <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
            <p className="text-neutral-600">Cargando calendario...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (eventos.length === 0) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Calendario</h1>
          <p className="text-neutral-600">Gestiona tus clases y eventos programados</p>
        </div>

        <Card>
          <CardContent className="p-12 text-center">
            <CalendarIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-neutral-900 mb-2">No tienes eventos programados</h3>
            <p className="text-neutral-600 mb-6">Tus clases en vivo y eventos aparecerán aquí</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Calendario</h1>
        <p className="text-neutral-600">Gestiona tus clases y eventos programados</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border border-neutral-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">
                  {meses[mesActual]} {añoActual}
                </h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={prevMonth}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextMonth}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((dia) => (
                  <div key={dia} className="text-center text-sm font-semibold text-neutral-600 py-2">
                    {dia}
                  </div>
                ))}

                {emptyDays.map((i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {days.map((dia) => {
                  const isToday = dia === new Date().getDate() &&
                                  mesActual === new Date().getMonth() &&
                                  añoActual === new Date().getFullYear();
                  const hasEvent = eventos.some(e => {
                    const eventDate = new Date(e.scheduledStart);
                    return eventDate.getDate() === dia &&
                           eventDate.getMonth() === mesActual &&
                           eventDate.getFullYear() === añoActual;
                  });

                  return (
                    <div
                      key={dia}
                      className={`aspect-square border rounded-lg flex items-center justify-center text-sm cursor-pointer hover:bg-neutral-50 transition-colors relative
                        ${isToday ? 'bg-blue-600 text-white font-bold hover:bg-blue-700' : 'border-neutral-200'}
                      `}
                    >
                      {dia}
                      {hasEvent && !isToday && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Próximos Eventos</h2>
          <div className="space-y-4">
            {eventos.slice(0, 4).map((evento) => {
              const startDate = new Date(evento.scheduledStart);
              const endDate = new Date(evento.scheduledEnd);
              const duration = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60));

              return (
                <Card key={evento.id} className="border border-neutral-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <span className="text-xs font-semibold px-2 py-1 rounded border bg-blue-100 text-blue-700 border-blue-200">
                        Clase en Vivo
                      </span>
                    </div>

                    <h3 className="font-bold text-neutral-900 mb-2">{evento.title}</h3>
                    <p className="text-sm text-neutral-500 mb-2">{evento.course.title}</p>

                    <div className="space-y-1.5 text-sm text-neutral-600">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        <span>{startDate.toLocaleDateString('es-ES', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{startDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })} ({duration} min)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-3.5 h-3.5" />
                        <span>Microsoft Teams</span>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                      onClick={() => evento.joinUrl && window.open(evento.joinUrl, '_blank')}
                    >
                      Unirse a Teams
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {eventos.length > 4 && (
            <Button variant="outline" className="w-full mt-4">
              Ver Todos los Eventos
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
