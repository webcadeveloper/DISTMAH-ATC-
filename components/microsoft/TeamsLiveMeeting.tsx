'use client';

import { useState } from 'react';
import { Video, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamsLiveMeetingProps {
  courseId: string;
  moduleId?: string;
}

export function TeamsLiveMeeting({ courseId, moduleId }: TeamsLiveMeetingProps) {
  const [creating, setCreating] = useState(false);
  const [meetingUrl, setMeetingUrl] = useState<string | null>(null);

  async function createMeeting() {
    setCreating(true);
    try {
      const res = await fetch('/api/teams/create-meeting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'Clase en Vivo',
          startDateTime: new Date().toISOString(),
          endDateTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
          participants: [],
        }),
      });

      const data = await res.json();
      setMeetingUrl(data.joinUrl);
    } catch (error) {
      console.error('Error creating meeting:', error);
    } finally {
      setCreating(false);
    }
  }

  return (
    <div className="border rounded-lg p-6 bg-white">
      <div className="flex items-center gap-3 mb-4">
        <Video className="w-6 h-6 text-blue-600" />
        <h3 className="font-bold text-lg">Clase en Vivo (Microsoft Teams)</h3>
      </div>

      {!meetingUrl ? (
        <div className="space-y-4">
          <p className="text-gray-600">
            Crea una reunión de Microsoft Teams para tu clase en vivo
          </p>
          <Button
            onClick={createMeeting}
            disabled={creating}
            className="w-full"
          >
            {creating ? 'Creando...' : 'Crear Clase en Vivo'}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="text-sm text-green-800 mb-2">
              Reunión creada exitosamente
            </p>
            <a
              href={meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              {meetingUrl}
            </a>
          </div>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(meetingUrl);
              alert('Link copiado');
            }}
            variant="outline"
            className="w-full"
          >
            Copiar Link
          </Button>
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Grabación automática</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span>Chat habilitado</span>
        </div>
      </div>
    </div>
  );
}
