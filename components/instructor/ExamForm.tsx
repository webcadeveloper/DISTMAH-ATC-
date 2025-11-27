'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Save, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

const examFormSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  description: z.string().optional(),
  instructions: z.string().optional(),
  duration: z.number().min(1, 'La duración debe ser al menos 1 minuto'),
  passingScore: z.number().min(0).max(100, 'El puntaje debe estar entre 0 y 100'),
  maxAttempts: z.number().min(1, 'Debe permitir al menos 1 intento'),
  shuffleQuestions: z.boolean(),
  showResults: z.boolean(),
  availableFrom: z.date(),
  availableUntil: z.date().optional(),
});

type ExamFormData = z.infer<typeof examFormSchema>;

interface ExamFormProps {
  courseId: string;
  examId?: string;
  initialData?: Partial<ExamFormData>;
  onSuccess?: (examId: string) => void;
}

export function ExamForm({ courseId, examId, initialData, onSuccess }: ExamFormProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [availableFromOpen, setAvailableFromOpen] = useState(false);
  const [availableUntilOpen, setAvailableUntilOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ExamFormData>({
    resolver: zodResolver(examFormSchema),
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      instructions: initialData?.instructions || '',
      duration: initialData?.duration || 60,
      passingScore: initialData?.passingScore || 70,
      maxAttempts: initialData?.maxAttempts || 3,
      shuffleQuestions: initialData?.shuffleQuestions ?? true,
      showResults: initialData?.showResults ?? true,
      availableFrom: initialData?.availableFrom || new Date(),
      availableUntil: initialData?.availableUntil,
    },
  });

  const availableFrom = watch('availableFrom');
  const availableUntil = watch('availableUntil');
  const shuffleQuestions = watch('shuffleQuestions');
  const showResults = watch('showResults');

  const onSubmit = async (data: ExamFormData) => {
    setIsSaving(true);
    try {
      const url = examId
        ? `/api/instructor/exams/${examId}`
        : `/api/instructor/courses/${courseId}/exams`;

      const response = await fetch(url, {
        method: examId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          availableFrom: data.availableFrom.toISOString(),
          availableUntil: data.availableUntil?.toISOString(),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al guardar el examen');
      }

      const exam = await response.json();
      toast.success(examId ? 'Examen actualizado' : 'Examen creado exitosamente');
      onSuccess?.(exam.id);
    } catch (error) {
      console.error('Error saving exam:', error);
      toast.error(error instanceof Error ? error.message : 'Error al guardar el examen');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Información del Examen</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              {...register('title')}
              placeholder="Examen Final - AutoCAD 2026"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="Descripción breve del examen"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="instructions">Instrucciones</Label>
            <Textarea
              id="instructions"
              {...register('instructions')}
              placeholder="Instrucciones específicas para los estudiantes"
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configuración</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="duration">Duración (minutos) *</Label>
              <Input
                id="duration"
                type="number"
                {...register('duration', { valueAsNumber: true })}
                min={1}
              />
              {errors.duration && (
                <p className="text-sm text-red-500 mt-1">{errors.duration.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="passingScore">Puntaje mínimo (%) *</Label>
              <Input
                id="passingScore"
                type="number"
                {...register('passingScore', { valueAsNumber: true })}
                min={0}
                max={100}
              />
              {errors.passingScore && (
                <p className="text-sm text-red-500 mt-1">{errors.passingScore.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="maxAttempts">Intentos máximos *</Label>
              <Input
                id="maxAttempts"
                type="number"
                {...register('maxAttempts', { valueAsNumber: true })}
                min={1}
              />
              {errors.maxAttempts && (
                <p className="text-sm text-red-500 mt-1">{errors.maxAttempts.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between space-x-2 p-4 bg-neutral-50 rounded">
            <div className="space-y-0.5">
              <Label htmlFor="shuffleQuestions">Mezclar preguntas</Label>
              <p className="text-sm text-neutral-500">
                Las preguntas aparecerán en orden aleatorio para cada estudiante
              </p>
            </div>
            <Switch
              id="shuffleQuestions"
              checked={shuffleQuestions}
              onCheckedChange={(checked) => setValue('shuffleQuestions', checked)}
            />
          </div>

          <div className="flex items-center justify-between space-x-2 p-4 bg-neutral-50 rounded">
            <div className="space-y-0.5">
              <Label htmlFor="showResults">Mostrar resultados al terminar</Label>
              <p className="text-sm text-neutral-500">
                Los estudiantes verán su puntaje y respuestas al finalizar
              </p>
            </div>
            <Switch
              id="showResults"
              checked={showResults}
              onCheckedChange={(checked) => setValue('showResults', checked)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disponibilidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Disponible desde *</Label>
              <Popover open={availableFromOpen} onOpenChange={setAvailableFromOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {availableFrom ? format(availableFrom, 'PPP') : 'Seleccionar fecha'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={availableFrom}
                    onSelect={(date) => {
                      setValue('availableFrom', date || new Date());
                      setAvailableFromOpen(false);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label>Disponible hasta (opcional)</Label>
              <Popover open={availableUntilOpen} onOpenChange={setAvailableUntilOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {availableUntil ? format(availableUntil, 'PPP') : 'Sin fecha límite'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={availableUntil}
                    onSelect={(date) => {
                      setValue('availableUntil', date);
                      setAvailableUntilOpen(false);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button type="submit" disabled={isSaving}>
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Guardando...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              {examId ? 'Actualizar Examen' : 'Crear Examen'}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
