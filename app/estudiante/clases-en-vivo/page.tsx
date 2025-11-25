'use client';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Calendar, Clock, Video, ExternalLink } from 'lucide-react';
import { format, isPast, isWithinInterval, addMinutes } from 'date-fns';
import { es } from 'date-fns/locale';

interface LiveClass {
  id: string;
  title: string;
  description: string;
  scheduledStart: string;
  scheduledEnd: string;
  meetingUrl: string;
  joinUrl: string;
  instructor: {
    id: string;
    name: string;
    email: string;
  };
  course: {
    id: string;
    title: string;
  };
}

export default function StudentLiveClassesPage() {
  const { data: session, status } = useSession();
  const [classes, setClasses] = useState<LiveClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<string>('all');

  if (status === 'loading') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        </div>
      </div>
    );
  }

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/live-classes');
      if (!response.ok) throw new Error('Error al cargar clases');
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al cargar clases en vivo');
    } finally {
      setLoading(false);
    }
  };

  const isLiveNow = (clase: LiveClass): boolean => {
    const now = new Date();
    const start = new Date(clase.scheduledStart);
    const end = new Date(clase.scheduledEnd);
    return isWithinInterval(now, { start, end });
  };

  const getStatus = (clase: LiveClass): 'live' | 'upcoming' | 'past' => {
    if (isLiveNow(clase)) return 'live';
    if (isPast(new Date(clase.scheduledEnd))) return 'past';
    return 'upcoming';
  };

  const courses = Array.from(new Set(classes.map((c) => c.course.title)));
  const filteredClasses = classes.filter((clase) => {
    if (selectedCourse === 'all') return true;
    return clase.course.title === selectedCourse;
  });

  const upcomingClasses = filteredClasses.filter((c) => getStatus(c) !== 'past');

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Clases en Vivo</h1>
        <p className="text-gray-600 mt-2">Pr\u00f3ximas clases en vivo de tus cursos inscritos</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Filtrar por curso:</span>
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger className="w-[300px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los cursos</SelectItem>
              {courses.map((course) => (
                <SelectItem key={course} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {upcomingClasses.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No hay clases pr\u00f3ximas programadas
          </h3>
          <p className="text-gray-600">
            Las clases en vivo aparecer\u00e1n aqu\u00ed cuando tu instructor las programe
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingClasses.map((clase) => {
            const status = getStatus(clase);
            return (
              <Card key={clase.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {clase.title}
                      </h3>
                      <p className="text-sm text-gray-500">{clase.course.title}</p>
                    </div>
                    {status === 'live' && (
                      <Badge variant="destructive" className="gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        En vivo
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {clase.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>
                        {format(new Date(clase.scheduledStart), "d 'de' MMMM, yyyy", {
                          locale: es,
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>
                        {format(new Date(clase.scheduledStart), 'HH:mm', { locale: es })} -{' '}
                        {format(new Date(clase.scheduledEnd), 'HH:mm', { locale: es })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Video className="w-4 h-4 text-gray-400" />
                      <span>Instructor: {clase.instructor.name}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild variant={status === 'live' ? 'default' : 'outline'}>
                    <a href={clase.joinUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {status === 'live' ? 'Unirse ahora' : 'Abrir en Teams'}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}

      {filteredClasses.filter((c) => getStatus(c) === 'past').length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Clases Pasadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses
              .filter((c) => getStatus(c) === 'past')
              .map((clase) => (
                <Card key={clase.id} className="opacity-75">
                  <CardHeader>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {clase.title}
                      </h3>
                      <p className="text-sm text-gray-500">{clase.course.title}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>
                        {format(new Date(clase.scheduledStart), "d 'de' MMMM, yyyy 'a las' HH:mm", {
                          locale: es,
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
