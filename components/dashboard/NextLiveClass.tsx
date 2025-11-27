'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Countdown } from '@/components/ui/countdown';
import { Calendar, Clock, Video, ExternalLink } from 'lucide-react';
import { format, isWithinInterval } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';

interface LiveClass {
  id: string;
  title: string;
  description: string;
  scheduledStart: string;
  scheduledEnd: string;
  joinUrl: string;
  instructor: {
    name: string;
  };
  course: {
    id: string;
    title: string;
  };
}

export function NextLiveClass() {
  const [nextClass, setNextClass] = useState<LiveClass | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNextClass();
  }, []);

  const fetchNextClass = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/live-classes?upcoming=true');
      if (!response.ok) throw new Error('Error al cargar clase');
      const data = await response.json();
      setNextClass(data[0] || null);
    } catch (error) {
      console.error('Error:', error);
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

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            Pr\u00f3xima Clase en Vivo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!nextClass) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            Pr\u00f3xima Clase en Vivo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
            <p className="text-neutral-500 text-sm">No hay clases programadas</p>
            <Button variant="link" asChild className="mt-2">
              <Link href="/estudiante/clases-en-vivo">Ver todas las clases</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const live = isLiveNow(nextClass);

  return (
    <Card className={live ? 'border-green-500 border-2' : ''}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            Pr\u00f3xima Clase en Vivo
          </CardTitle>
          {live && (
            <Badge variant="destructive" className="gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              En vivo
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-neutral-900 mb-1">{nextClass.title}</h4>
          <p className="text-sm text-neutral-500">{nextClass.course.title}</p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-neutral-700">
            <Calendar className="w-4 h-4 text-neutral-400" />
            <span>
              {format(new Date(nextClass.scheduledStart), "d 'de' MMMM, yyyy", {
                locale: es,
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-neutral-700">
            <Clock className="w-4 h-4 text-neutral-400" />
            <span>
              {format(new Date(nextClass.scheduledStart), 'HH:mm', { locale: es })} -{' '}
              {format(new Date(nextClass.scheduledEnd), 'HH:mm', { locale: es })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-neutral-700">
            <Video className="w-4 h-4 text-neutral-400" />
            <span>Instructor: {nextClass.instructor.name}</span>
          </div>
        </div>

        {!live && (
          <div className="bg-neutral-50 rounded-lg p-4">
            <p className="text-xs text-neutral-600 mb-3 text-center">Comienza en:</p>
            <Countdown targetDate={new Date(nextClass.scheduledStart)} />
          </div>
        )}

        <Button className="w-full" asChild>
          <a href={nextClass.joinUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            {live ? 'Unirse ahora' : 'Abrir en Teams'}
          </a>
        </Button>

        <Button variant="link" asChild className="w-full">
          <Link href="/estudiante/clases-en-vivo">Ver todas las clases</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
