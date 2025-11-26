'use client';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Calendar, Clock, Copy, Plus, Trash2, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
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

export default function LiveClassesPage() {
  const params = useParams();
  const courseId = params.id as string;

  const [classes, setClasses] = useState<LiveClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    startTime: '',
    durationMinutes: '60',
  });

  useEffect(() => {
    fetchClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/live-classes?courseId=${courseId}`);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const startDateTime = new Date(`${formData.startDate}T${formData.startTime}`);

      const response = await fetch('/api/live-classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId,
          title: formData.title,
          description: formData.description,
          startDate: startDateTime.toISOString(),
          durationMinutes: parseInt(formData.durationMinutes),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al crear clase');
      }

      toast.success('Clase programada exitosamente');
      setDialogOpen(false);
      setFormData({
        title: '',
        description: '',
        startDate: '',
        startTime: '',
        durationMinutes: '60',
      });
      fetchClasses();
    } catch (error: any) {
      console.error('Error:', error);
      toast.error(error.message || 'Error al programar clase');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (classId: string) => {
    if (!confirm('\u00bfEst\u00e1s seguro de eliminar esta clase?')) return;

    try {
      const response = await fetch(`/api/live-classes/${classId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Error al eliminar clase');

      toast.success('Clase eliminada exitosamente');
      fetchClasses();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al eliminar clase');
    }
  };

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copiado al portapapeles');
    } catch {
      toast.error('Error al copiar link');
    }
  };

  const getDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diff = endDate.getTime() - startDate.getTime();
    return Math.round(diff / (1000 * 60));
  };

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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Clases en Vivo</h1>
            <p className="text-gray-600 mt-2">Programa y gestiona clases en vivo para tu curso</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Programar nueva clase
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Programar Clase en Vivo</DialogTitle>
                <DialogDescription>
                  Crea una nueva clase en vivo con Teams. Los estudiantes recibir\u00e1n una invitaci\u00f3n autom\u00e1ticamente.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">T\u00edtulo de la clase *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Ej: Introducci\u00f3n a AutoCAD 2026"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Descripci\u00f3n *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe los temas que se cubrir\u00e1n en esta clase..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Fecha *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="startTime">Hora *</Label>
                    <Input
                      id="startTime"
                      type="time"
                      value={formData.startTime}
                      onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="duration">Duraci\u00f3n (minutos) *</Label>
                  <Select
                    value={formData.durationMinutes}
                    onValueChange={(value) => setFormData({ ...formData, durationMinutes: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="60">1 hora</SelectItem>
                      <SelectItem value="90">1.5 horas</SelectItem>
                      <SelectItem value="120">2 horas</SelectItem>
                      <SelectItem value="180">3 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                    disabled={submitting}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={submitting}>
                    {submitting ? 'Programando...' : 'Programar clase'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {classes.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No hay clases programadas</h3>
          <p className="text-gray-600 mb-4">Comienza programando tu primera clase en vivo</p>
          <Button onClick={() => setDialogOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Programar clase
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>T\u00edtulo</TableHead>
                <TableHead>Fecha y Hora</TableHead>
                <TableHead>Duraci\u00f3n</TableHead>
                <TableHead>Link de Teams</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.map((clase) => (
                <TableRow key={clase.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900">{clase.title}</div>
                      <div className="text-sm text-gray-500 line-clamp-1">{clase.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>
                        {format(new Date(clase.scheduledStart), "d 'de' MMMM, yyyy 'a las' HH:mm", {
                          locale: es,
                        })}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{getDuration(clase.scheduledStart, clase.scheduledEnd)} min</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyLink(clase.joinUrl)}
                        title="Copiar link"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        title="Abrir en Teams"
                      >
                        <a href={clase.joinUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(clase.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
