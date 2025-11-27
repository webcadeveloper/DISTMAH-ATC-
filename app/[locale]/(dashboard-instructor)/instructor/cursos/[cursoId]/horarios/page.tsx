'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Save, Video, ExternalLink, Loader2, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const SHIFTS = [
  { value: 'MANANA', label: 'Mañanas', time: '8:00 AM - 11:00 AM', icon: '🌅' },
  { value: 'TARDE', label: 'Tardes', time: '1:30 PM - 4:30 PM', icon: '☀️' },
  { value: 'NOCHE', label: 'Noches', time: '5:00 PM - 8:00 PM', icon: '🌙' },
  { value: 'SABADO', label: 'Sábados', time: '8:00 AM - 4:30 PM', icon: '📅' },
  { value: 'INTENSIVO', label: 'Intensivo', time: '8:00 AM - 5:00 PM', icon: '⚡' },
];

const DAYS = [
  { value: 1, label: 'Lunes', short: 'Lun' },
  { value: 2, label: 'Martes', short: 'Mar' },
  { value: 3, label: 'Miércoles', short: 'Mié' },
  { value: 4, label: 'Jueves', short: 'Jue' },
  { value: 5, label: 'Viernes', short: 'Vie' },
  { value: 6, label: 'Sábado', short: 'Sáb' },
  { value: 0, label: 'Domingo', short: 'Dom' },
];

interface Schedule {
  id: string;
  shift: string;
  daysOfWeek: number[];
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  teamsUrl: string | null;
  streamUrl: string | null;
  active: boolean;
}

export default function CourseSchedulePage() {
  const params = useParams();
  const courseSlug = params.cursoId as string;
  const locale = params.locale as string || 'es';

  const [course, setCourse] = useState<any>(null);
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    shift: 'MANANA',
    daysOfWeek: [1, 3, 5] as number[],
    startDate: '',
    endDate: '',
    teamsUrl: '',
    streamUrl: '',
  });

  useEffect(() => {
    loadData();
  }, [courseSlug]);

  const loadData = async () => {
    try {
      const courseRes = await fetch(`/api/courses/by-slug/${courseSlug}`);
      if (courseRes.ok) {
        const courseData = await courseRes.json();
        setCourse(courseData);

        const scheduleRes = await fetch(`/api/courses/${courseData.id}/schedule`);
        if (scheduleRes.ok) {
          const scheduleData = await scheduleRes.json();
          if (scheduleData.schedule) {
            setSchedule(scheduleData.schedule);
            setFormData({
              shift: scheduleData.schedule.shift,
              daysOfWeek: scheduleData.schedule.daysOfWeek,
              startDate: scheduleData.schedule.startDate.split('T')[0],
              endDate: scheduleData.schedule.endDate.split('T')[0],
              teamsUrl: scheduleData.schedule.teamsUrl || '',
              streamUrl: scheduleData.schedule.streamUrl || '',
            });
          }
        }
      }
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error('Error al cargar datos');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!course?.id) return;

    if (!formData.startDate || !formData.endDate) {
      toast.error('Debes seleccionar las fechas de inicio y fin del curso');
      return;
    }

    if (formData.daysOfWeek.length === 0) {
      toast.error('Debes seleccionar al menos un día de clase');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(`/api/courses/${course.id}/schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Horario guardado exitosamente');
        loadData();
      } else {
        const data = await res.json();
        throw new Error(data.error || 'Error al guardar');
      }
    } catch (error: any) {
      console.error('Error saving:', error);
      toast.error(error.message || 'Error al guardar horario');
    } finally {
      setSaving(false);
    }
  };

  const toggleDay = (day: number) => {
    setFormData((prev) => ({
      ...prev,
      daysOfWeek: prev.daysOfWeek.includes(day)
        ? prev.daysOfWeek.filter((d) => d !== day)
        : [...prev.daysOfWeek, day].sort((a, b) => a - b),
    }));
  };

  if (loading) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-gray-400" />
        <p className="mt-2 text-gray-500">Cargando...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Curso no encontrado</h2>
          <Link href={`/${locale}/instructor/cursos`}>
            <Button variant="outline">Volver a Mis Cursos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href={`/${locale}/instructor/cursos`}
          className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a mis cursos
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Horarios de Clases en Vivo</h1>
        <p className="text-gray-500 mt-1">{course.title}</p>
      </div>

      <div className="space-y-6">
        {/* Turno */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Seleccionar Turno
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {SHIFTS.map((shift) => (
                <button
                  key={shift.value}
                  onClick={() => setFormData({ ...formData, shift: shift.value })}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.shift === shift.value
                      ? 'border-blue-900 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl mb-2 block">{shift.icon}</span>
                  <p className="font-semibold text-gray-900">{shift.label}</p>
                  <p className="text-sm text-gray-500">{shift.time}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Días de clase */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Días de Clase
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {DAYS.map((day) => (
                <button
                  key={day.value}
                  onClick={() => toggleDay(day.value)}
                  className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                    formData.daysOfWeek.includes(day.value)
                      ? 'border-blue-900 bg-blue-900 text-white'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Seleccionados:{' '}
              {formData.daysOfWeek.length > 0
                ? formData.daysOfWeek.map((d) => DAYS.find((day) => day.value === d)?.label).join(', ')
                : 'Ninguno'}
            </p>
          </CardContent>
        </Card>

        {/* Fechas del curso */}
        <Card>
          <CardHeader>
            <CardTitle>Período del Curso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Inicio
                </label>
                <Input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Fin
                </label>
                <Input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  min={formData.startDate}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Streaming con Owncast */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-red-600" />
              Streaming en Vivo (Owncast)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-white rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Owncast</strong> permite transmitir video en vivo que los estudiantes pueden ver embebido en DISTMAH.
                </p>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>Configura tu servidor Owncast (ej: stream.distmah.com)</li>
                  <li>En OBS, configura Stream hacia tu servidor Owncast (RTMP)</li>
                  <li>Pega la URL del embed aquí abajo</li>
                </ol>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL de Owncast Embed
                </label>
                <Input
                  type="url"
                  value={formData.streamUrl}
                  onChange={(e) => setFormData({ ...formData, streamUrl: e.target.value })}
                  placeholder="https://stream.distmah.com/embed/video"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Ejemplo: https://tu-servidor-owncast.com/embed/video
                </p>
              </div>
              {formData.streamUrl && (
                <a
                  href={formData.streamUrl.replace('/embed/video', '')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver página de stream
                </a>
              )}
            </div>
          </CardContent>
        </Card>

        {/* URL de Teams (para chat/interacción) */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="w-5 h-5" />
              Microsoft Teams (Chat/Interacción)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Usa Teams para que los estudiantes puedan hacer preguntas y participar en la clase.
                  El video principal se transmite por Owncast.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL de la reunión de Teams
                </label>
                <Input
                  type="url"
                  value={formData.teamsUrl}
                  onChange={(e) => setFormData({ ...formData, teamsUrl: e.target.value })}
                  placeholder="https://teams.microsoft.com/l/meetup-join/..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Crea una reunión recurrente en Teams y pega el link aquí
                </p>
              </div>
              {formData.teamsUrl && (
                <a
                  href={formData.teamsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Abrir reunión en Teams
                </a>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Resumen */}
        {schedule && (
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Horario Actual Configurado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-green-600">Turno</p>
                  <p className="font-semibold text-green-900">
                    {SHIFTS.find((s) => s.value === schedule.shift)?.label}
                  </p>
                </div>
                <div>
                  <p className="text-green-600">Horario</p>
                  <p className="font-semibold text-green-900">
                    {schedule.startTime} - {schedule.endTime}
                  </p>
                </div>
                <div>
                  <p className="text-green-600">Días</p>
                  <p className="font-semibold text-green-900">
                    {schedule.daysOfWeek.map((d) => DAYS.find((day) => day.value === d)?.short).join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-green-600">Estado</p>
                  <Badge className="bg-green-600">{schedule.active ? 'Activo' : 'Inactivo'}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Botones */}
        <div className="flex justify-end gap-4 pt-4">
          <Link href={`/${locale}/instructor/cursos`}>
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button onClick={handleSave} disabled={saving} className="bg-blue-900 hover:bg-blue-800">
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Guardando...' : schedule ? 'Actualizar Horario' : 'Crear Horario'}
          </Button>
        </div>
      </div>
    </div>
  );
}
