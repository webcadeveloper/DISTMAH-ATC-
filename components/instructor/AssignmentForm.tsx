'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useDropzone } from 'react-dropzone';
import {
  Upload,
  X,
  FileText,
  Calendar,
  Save,
  Loader2
} from 'lucide-react';

const assignmentSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  instructions: z.string().min(10, 'Las instrucciones deben tener al menos 10 caracteres'),
  moduleId: z.string().optional(),
  maxScore: z.number().min(1).max(1000),
  allowLateSubmission: z.boolean(),
  maxAttempts: z.number().min(1).max(10),
  availableFrom: z.string(),
  dueDate: z.string()
});

type AssignmentFormData = z.infer<typeof assignmentSchema>;

interface AssignmentFormProps {
  courseId: string;
  assignmentId?: string;
  initialData?: any;
  modules?: Array<{ id: string; number: number; title: string }>;
  onSuccess?: () => void;
}

export default function AssignmentForm({
  courseId,
  assignmentId,
  initialData,
  modules = [],
  onSuccess
}: AssignmentFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>(initialData?.attachments || []);
  const [uploadingFile, setUploadingFile] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AssignmentFormData>({
    resolver: zodResolver(assignmentSchema),
    defaultValues: initialData
      ? {
          title: initialData.title,
          description: initialData.description,
          instructions: initialData.instructions,
          moduleId: initialData.moduleId || '',
          maxScore: initialData.maxScore || 100,
          allowLateSubmission: initialData.allowLateSubmission ?? true,
          maxAttempts: initialData.maxAttempts || 1,
          availableFrom: initialData.availableFrom
            ? new Date(initialData.availableFrom).toISOString().slice(0, 16)
            : new Date().toISOString().slice(0, 16),
          dueDate: initialData.dueDate
            ? new Date(initialData.dueDate).toISOString().slice(0, 16)
            : ''
        }
      : {
          maxScore: 100,
          allowLateSubmission: true,
          maxAttempts: 1,
          availableFrom: new Date().toISOString().slice(0, 16),
          dueDate: ''
        }
  });

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setUploadingFile(true);

    try {
      for (const file of acceptedFiles) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('assignmentId', assignmentId || 'temp');
        formData.append('userId', 'instructor');
        formData.append('type', 'reference');

        const response = await fetch('/api/assignments/upload', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.details || 'Error al subir archivo');
        }

        const data = await response.json();

        setUploadedFiles(prev => [
          ...prev,
          {
            id: data.fileName,
            title: file.name,
            url: data.url,
            type: data.type,
            size: data.size
          }
        ]);
      }

      toast.success('Archivos subidos correctamente');
    } catch (error) {
      console.error('Error uploading files:', error);
      toast.error(error instanceof Error ? error.message : 'Error al subir archivos');
    } finally {
      setUploadingFile(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/zip': ['.zip'],
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxSize: 100 * 1024 * 1024 // 100MB
  });

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const onSubmit = async (data: AssignmentFormData) => {
    setLoading(true);

    try {
      const endpoint = assignmentId
        ? `/api/instructor/assignments/${assignmentId}`
        : `/api/instructor/courses/${courseId}/assignments`;

      const method = assignmentId ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          attachments: uploadedFiles
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || 'Error al guardar la tarea');
      }

      toast.success(
        assignmentId ? 'Tarea actualizada correctamente' : 'Tarea creada correctamente'
      );

      if (onSuccess) {
        onSuccess();
      } else {
        router.push(`/instructor/cursos/${courseId}/assignments`);
      }
    } catch (error) {
      console.error('Error saving assignment:', error);
      toast.error(error instanceof Error ? error.message : 'Error al guardar la tarea');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Título */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Título de la Tarea *
        </label>
        <input
          type="text"
          {...register('title')}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Ej: Diseño de Planta Arquitectónica"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Módulo */}
      {modules.length > 0 && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Módulo Asociado (Opcional)
          </label>
          <select
            {...register('moduleId')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sin módulo específico</option>
            {modules.map(module => (
              <option key={module.id} value={module.id}>
                Módulo {module.number}: {module.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Descripción */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Descripción *
        </label>
        <textarea
          {...register('description')}
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Breve descripción de la tarea..."
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
        )}
      </div>

      {/* Instrucciones */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Instrucciones Detalladas *
        </label>
        <textarea
          {...register('instructions')}
          rows={6}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Describe paso a paso lo que deben hacer los estudiantes..."
        />
        {errors.instructions && (
          <p className="text-red-500 text-sm mt-1">{errors.instructions.message}</p>
        )}
      </div>

      {/* Configuración */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Puntaje Máximo *
          </label>
          <input
            type="number"
            {...register('maxScore', { valueAsNumber: true })}
            min={1}
            max={1000}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.maxScore && (
            <p className="text-red-500 text-sm mt-1">{errors.maxScore.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Máximo de Intentos *
          </label>
          <input
            type="number"
            {...register('maxAttempts', { valueAsNumber: true })}
            min={1}
            max={10}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.maxAttempts && (
            <p className="text-red-500 text-sm mt-1">{errors.maxAttempts.message}</p>
          )}
        </div>
      </div>

      {/* Fechas */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            <Calendar className="inline w-4 h-4 mr-1" />
            Disponible Desde *
          </label>
          <input
            type="datetime-local"
            {...register('availableFrom')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.availableFrom && (
            <p className="text-red-500 text-sm mt-1">{errors.availableFrom.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            <Calendar className="inline w-4 h-4 mr-1" />
            Fecha de Entrega *
          </label>
          <input
            type="datetime-local"
            {...register('dueDate')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.dueDate && (
            <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>
          )}
        </div>
      </div>

      {/* Permitir entregas tardías */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register('allowLateSubmission')}
          id="allowLateSubmission"
          className="w-4 h-4"
        />
        <label htmlFor="allowLateSubmission" className="text-sm">
          Permitir entregas tardías
        </label>
      </div>

      {/* Archivos de referencia */}
      <div>
        <label className="block text-sm font-medium mb-2">
          <FileText className="inline w-4 h-4 mr-1" />
          Archivos de Referencia (Opcional)
        </label>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
            isDragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-neutral-300 hover:border-neutral-400'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-neutral-400 mb-3" />
          {uploadingFile ? (
            <p className="text-sm text-neutral-600">Subiendo archivos...</p>
          ) : (
            <>
              <p className="text-sm text-neutral-600">
                Arrastra archivos aquí o haz clic para seleccionar
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                PDF, DOCX, ZIP, imágenes (máx. 100MB)
              </p>
            </>
          )}
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            {uploadedFiles.map(file => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">{file.title}</p>
                    <p className="text-xs text-neutral-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(file.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botones */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Guardando...
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              {assignmentId ? 'Actualizar Tarea' : 'Crear Tarea'}
            </>
          )}
        </button>

        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
