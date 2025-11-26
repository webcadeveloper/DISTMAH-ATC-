'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, Video, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const mockEventos = [
  {
    id: '1',
    titulo: 'Clase en Vivo: Alineamientos en Civil 3D',
    tipo: 'clase_vivo',
    fecha: '2025-11-28',
    hora: '16:00',
    duracion: '2 horas',
    instructor: 'Ing. Juan Pérez',
    plataforma: 'Zoom',
    estado: 'próximo',
  },
  {
    id: '2',
    titulo: 'Examen Final - AutoCAD 2026 Avanzado',
    tipo: 'examen',
    fecha: '2025-11-30',
    hora: '10:00',
    duracion: '3 horas',
    instructor: 'Ing. Carlos Rodríguez',
    plataforma: 'Plataforma DISTMAH',
    estado: 'próximo',
  },
  {
    id: '3',
    titulo: 'Webinar: Novedades Revit 2026',
    tipo: 'webinar',
    fecha: '2025-12-05',
    hora: '18:00',
    duracion: '1.5 horas',
    instructor: 'Arq. María González',
    plataforma: 'YouTube Live',
    estado: 'próximo',
  },
  {
    id: '4',
    titulo: 'Sesión de Consultas - Civil 3D',
    tipo: 'consulta',
    fecha: '2025-12-08',
    hora: '15:00',
    duracion: '1 hora',
    instructor: 'Ing. Juan Pérez',
    plataforma: 'Google Meet',
    estado: 'próximo',
  },
];

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export default function CalendarioPage() {
  const [mesActual, setMesActual] = useState(new Date().getMonth());
  const [añoActual, setAñoActual] = useState(new Date().getFullYear());

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

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'clase_vivo':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'examen':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'webinar':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'consulta':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

  const getTipoTexto = (tipo: string) => {
    switch (tipo) {
      case 'clase_vivo':
        return 'Clase en Vivo';
      case 'examen':
        return 'Examen';
      case 'webinar':
        return 'Webinar';
      case 'consulta':
        return 'Consulta';
      default:
        return 'Evento';
    }
  };

  if (mockEventos.length === 0) {
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
                  const hasEvent = mockEventos.some(e => {
                    const eventDate = new Date(e.fecha);
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
            {mockEventos.slice(0, 4).map((evento) => (
              <Card key={evento.id} className="border border-neutral-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded border ${getTipoColor(evento.tipo)}`}>
                      {getTipoTexto(evento.tipo)}
                    </span>
                  </div>

                  <h3 className="font-bold text-neutral-900 mb-2">{evento.titulo}</h3>

                  <div className="space-y-1.5 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      <span>{new Date(evento.fecha).toLocaleDateString('es-ES', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{evento.hora} ({evento.duracion})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-3.5 h-3.5" />
                      <span>{evento.plataforma}</span>
                    </div>
                  </div>

                  <Button size="sm" className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Unirse al Evento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {mockEventos.length > 4 && (
            <Button variant="outline" className="w-full mt-4">
              Ver Todos los Eventos
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
