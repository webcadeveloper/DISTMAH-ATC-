'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  Radio,
  Video,
  Users,
  Clock,
  Settings,
  Play,
  Square,
  RefreshCw,
  ExternalLink,
  Copy,
  CheckCircle2,
  AlertCircle,
  Wifi,
  WifiOff,
  Power,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface StreamStatus {
  online: boolean;
  serverReachable: boolean;
  viewerCount: number;
  lastConnectTime?: string;
  lastDisconnectTime?: string;
  streamTitle?: string;
  overallPeakViewerCount: number;
  sessionPeakViewerCount: number;
  error?: string;
}

interface Course {
  id: string;
  title: string;
  slug: string;
  hasSchedule: boolean;
}

interface StreamConfig {
  rtmpUrl: string;
  streamKey: string;
  owncastUrl: string;
  embedUrl: string;
}

export default function StreamingControlPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'es';

  const [status, setStatus] = useState<StreamStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [copied, setCopied] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [classActive, setClassActive] = useState(false);
  const [togglingClass, setTogglingClass] = useState(false);
  const [config, setConfig] = useState<StreamConfig | null>(null);
  const [configLoading, setConfigLoading] = useState(true);

  useEffect(() => {
    loadConfig();
    checkStatus();
    loadCourses();
    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadConfig = async () => {
    try {
      const res = await fetch('/api/stream/config');
      if (res.ok) {
        const data = await res.json();
        setConfig(data);
      }
    } catch (error) {
      console.error('Error loading config:', error);
    } finally {
      setConfigLoading(false);
    }
  };

  const loadCourses = async () => {
    try {
      const res = await fetch('/api/instructor/courses');
      if (res.ok) {
        const data = await res.json();
        setCourses(data.courses || []);
        if (data.courses?.length > 0) {
          setSelectedCourse(data.courses[0].id);
        }
      }
    } catch (error) {
      console.error('Error loading courses:', error);
    }
  };

  const checkStatus = async () => {
    try {
      const res = await fetch('/api/stream/status');
      if (res.ok) {
        const data = await res.json();
        setStatus(data);
        setIsLive(data.online);
      }
    } catch (error) {
      console.error('Error checking status:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success(`${label} copiado al portapapeles`);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTime = (isoString?: string) => {
    if (!isoString) return 'N/A';
    return new Date(isoString).toLocaleString('es', {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'short',
    });
  };

  const toggleClass = async () => {
    if (!selectedCourse) {
      toast.error('Selecciona un curso primero');
      return;
    }

    if (!isLive) {
      toast.error('Primero debes iniciar la transmisión en OBS');
      return;
    }

    setTogglingClass(true);
    try {
      const res = await fetch('/api/stream/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: selectedCourse,
          isLive: !classActive,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setClassActive(data.isLive);
        toast.success(data.message);
      } else {
        const data = await res.json();
        toast.error(data.error || 'Error al cambiar estado');
      }
    } catch (error) {
      console.error('Error toggling class:', error);
      toast.error('Error al cambiar estado de la clase');
    } finally {
      setTogglingClass(false);
    }
  };

  if (configLoading) {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center h-96">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <span className="ml-3 text-neutral-600">Cargando configuración...</span>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center h-96">
          <AlertCircle className="w-8 h-8 text-red-600" />
          <span className="ml-3 text-red-600">Error al cargar configuración del streaming</span>
        </div>
      </div>
    );
  }

  const { rtmpUrl, streamKey, owncastUrl } = config;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Centro de Control de Streaming</h1>
        <p className="text-neutral-500 mt-1">Monitorea y controla tus transmisiones en vivo</p>
      </div>

      {/* Status Banner */}
      <Card className={`mb-6 ${isLive ? 'bg-red-600 text-white' : 'bg-neutral-100'}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {isLive ? (
                <>
                  <Radio className="w-8 h-8 animate-pulse" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">EN VIVO</span>
                      <Badge className="bg-white text-red-600">TRANSMITIENDO</Badge>
                    </div>
                    <p className="text-red-100">Tu señal está llegando al servidor</p>
                  </div>
                </>
              ) : (
                <>
                  <Video className="w-8 h-8 text-neutral-400" />
                  <div>
                    <span className="text-2xl font-bold text-neutral-700">FUERA DE LÍNEA</span>
                    <p className="text-neutral-500">Inicia OBS para comenzar a transmitir</p>
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center gap-4">
              {isLive && (
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5" />
                  <span className="text-xl font-bold">{status?.viewerCount || 0}</span>
                  <span className="text-sm">espectadores</span>
                </div>
              )}
              <Button
                variant="outline"
                onClick={checkStatus}
                className={isLive ? 'border-white text-white hover:bg-white/20' : ''}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Actualizar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Preview del Stream */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                Vista Previa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden relative">
                {isLive ? (
                  <iframe
                    src={`${owncastUrl}/embed/video`}
                    className="w-full h-full"
                    allow="fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400">
                    <Video className="w-16 h-16 mb-4" />
                    <p className="text-lg font-medium">Sin señal</p>
                    <p className="text-sm">Inicia OBS para ver la vista previa</p>
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
            </CardContent>
          </Card>

          {/* Configuración OBS */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Configuración de OBS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="text-sm text-neutral-600 mb-4">
                  Configura estos valores en OBS Studio: <strong>Archivo → Configuración → Emisión</strong>
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-neutral-500 block mb-1">Servicio</label>
                    <p className="font-mono text-sm bg-white p-2 rounded border">Personalizado</p>
                  </div>
                  <div>
                    <label className="text-xs text-neutral-500 block mb-1">Servidor (RTMP URL)</label>
                    <div className="flex gap-2">
                      <p className="font-mono text-sm bg-white p-2 rounded border flex-grow">{rtmpUrl}</p>
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard(rtmpUrl, 'URL RTMP')}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-neutral-500 block mb-1">Clave de transmisión (Stream Key)</label>
                    <div className="flex gap-2">
                      <p className="font-mono text-sm bg-white p-2 rounded border flex-grow">••••••••••••••••</p>
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard(streamKey, 'Stream Key')}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel lateral */}
        <div className="space-y-6">
          {/* Estado del servidor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                {status?.serverReachable ? (
                  <Wifi className="w-5 h-5 text-green-600" />
                ) : (
                  <WifiOff className="w-5 h-5 text-red-600" />
                )}
                Estado del Servidor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">Servidor</span>
                {status?.serverReachable ? (
                  <Badge className="bg-green-100 text-green-700">Conectado</Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-700">Desconectado</Badge>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">Transmisión</span>
                {isLive ? (
                  <Badge className="bg-red-100 text-red-700">En vivo</Badge>
                ) : (
                  <Badge className="bg-neutral-100 text-neutral-700">Inactiva</Badge>
                )}
              </div>
              {status?.lastConnectTime && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">Última conexión</span>
                  <span className="text-sm font-medium">{formatTime(status.lastConnectTime)}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Estadísticas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5" />
                Estadísticas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">Espectadores actuales</span>
                <span className="text-xl font-bold">{status?.viewerCount || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">Pico de sesión</span>
                <span className="font-medium">{status?.sessionPeakViewerCount || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">Pico histórico</span>
                <span className="font-medium">{status?.overallPeakViewerCount || 0}</span>
              </div>
            </CardContent>
          </Card>

          {/* GO LIVE Control */}
          <Card className={classActive ? 'border-2 border-green-500 bg-green-50' : 'border-2 border-neutral-200'}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Power className={`w-5 h-5 ${classActive ? 'text-green-600' : 'text-neutral-500'}`} />
                Control de Clase
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Seleccionar Curso
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full p-2 border rounded-lg text-sm"
                  disabled={classActive}
                >
                  <option value="">-- Selecciona un curso --</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

              {!isLive && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    Inicia la transmisión en OBS primero para activar la clase.
                  </p>
                </div>
              )}

              <Button
                onClick={toggleClass}
                disabled={!isLive || !selectedCourse || togglingClass}
                className={`w-full h-14 text-lg font-bold ${
                  classActive
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {togglingClass ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : classActive ? (
                  <>
                    <Square className="w-6 h-6 mr-2" />
                    TERMINAR CLASE
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6 mr-2" />
                    GO LIVE
                  </>
                )}
              </Button>

              {classActive && (
                <p className="text-center text-sm text-green-700 font-medium">
                  Los estudiantes pueden ver la clase ahora
                </p>
              )}
            </CardContent>
          </Card>

          {/* Acciones rápidas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="w-5 h-5" />
                Acciones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href={owncastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver página pública
                </Button>
              </a>
              <a
                href={`${owncastUrl}/admin`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Panel admin Owncast
                </Button>
              </a>
              <Link href={`/${locale}/instructor/cursos`}>
                <Button variant="outline" className="w-full justify-start">
                  <Video className="w-4 h-4 mr-2" />
                  Configurar horarios
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Instrucciones rápidas */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Cómo transmitir:</h4>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Abre OBS Studio</li>
                <li>Configura el servidor RTMP</li>
                <li>Haz clic en "Iniciar transmisión"</li>
                <li>Verifica que aparezca "EN VIVO" aquí</li>
                <li>Avisa a tus estudiantes</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
