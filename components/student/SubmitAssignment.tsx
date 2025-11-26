'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useDropzone } from 'react-dropzone';
import {
  Upload,
  X,
  FileText,
  Download,
  Calendar,
  AlertTriangle,
  Send,
  Loader2,
  ArrowLeft
} from 'lucide-react';
import { format, isPast } from 'date-fns';
import { es } from 'date-fns/locale';

interface SubmitAssignmentProps {
  assignmentId: string;
  userId: string;
  courseSlug: string;
}

export default function SubmitAssignment({ assignmentId, userId, courseSlug }: SubmitAssignmentProps) {
  const router = useRouter();
  const [assignment, setAssignment] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [comments, setComments] = useState('');

  useEffect(() => {
    fetchAssignment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assignmentId, userId]);

  const fetchAssignment = async () => {
    try {
      const response = await fetch(`/api/student/assignments/${assignmentId}?userId=${userId}`);
      if (!response.ok) throw new Error('Error al cargar la tarea');

      const data = await response.json();
      setAssignment(data.assignment);

      // Si ya tiene una submission en borrador, cargar archivos
      if (data.submission && data.submission.status === 'DRAFT') {
        setUploadedFiles(data.submission.files || []);
        setComments(data.submission.comments || '');
      }
    } catch (error) {
      console.error('Error fetching assignment:', error);
      toast.error('Error al cargar la tarea');
    } finally {
      setLoading(false);
    }
  };

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setUploadingFile(true);

    try {
      for (const file of acceptedFiles) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('assignmentId', assignmentId);
        formData.append('userId', userId);
        formData.append('type', 'submission');

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
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/acad': ['.dwg'],
      'application/x-revit': ['.rvt']
    },
    maxSize: 100 * 1024 * 1024 // 100MB
  });

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const downloadReferenceFile = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async () => {
    if (uploadedFiles.length === 0) {
      toast.error('Debes subir al menos un archivo');
      return;
    }

    if (!confirm('¿Estás seguro de enviar esta tarea? No podrás modificarla después del envío.')) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`/api/student/assignments/${assignmentId}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          comments,
          files: uploadedFiles
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || error.error || 'Error al enviar la tarea');
      }

      toast.success('Tarea enviada correctamente');
      router.push(`/cursos/${courseSlug}/assignments`);
    } catch (error) {
      console.error('Error submitting assignment:', error);
      toast.error(error instanceof Error ? error.message : 'Error al enviar la tarea');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Tarea no encontrada</p>
      </div>
    );
  }

  const isOverdue = isPast(new Date(assignment.dueDate));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>

        <h1 className="text-3xl font-bold mb-2">{assignment.title}</h1>
        <p className="text-gray-600">{assignment.description}</p>
      </div>

      {/* Información */}
      <div className="bg-white border rounded-lg p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Fecha de entrega</p>
              <p className="font-medium">
                {format(new Date(assignment.dueDate), "d 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Puntaje máximo</p>
              <p className="font-medium">{assignment.maxScore} puntos</p>
            </div>
          </div>
        </div>

        {isOverdue && (
          <div className="mt-4 flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg">
            <AlertTriangle className="w-5 h-5" />
            <p className="text-sm font-medium">
              La fecha de entrega ha pasado. Entregas tardías pueden recibir penalización.
            </p>
          </div>
        )}
      </div>

      {/* Instrucciones */}
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Instrucciones</h2>
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: assignment.instructions }}
        />
      </div>

      {/* Archivos de referencia */}
      {assignment.attachments && assignment.attachments.length > 0 && (
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Archivos de Referencia</h2>
          <div className="space-y-2">
            {assignment.attachments.map((file: any, idx: number) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">{file.title}</p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => downloadReferenceFile(file.url, file.title)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <Download className="w-4 h-4" />
                  Descargar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload de archivos */}
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Tu Entrega</h2>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
            isDragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
          {uploadingFile ? (
            <p className="text-sm text-gray-600">Subiendo archivos...</p>
          ) : (
            <>
              <p className="text-sm text-gray-600">
                Arrastra archivos aquí o haz clic para seleccionar
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PDF, DOCX, DWG, RVT, ZIP, imágenes (máx. 100MB)
              </p>
            </>
          )}
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            {uploadedFiles.map(file => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">{file.title}</p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Comentarios */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">
            Comentarios (Opcional)
          </label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Agrega comentarios sobre tu entrega..."
          />
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          disabled={submitting || uploadedFiles.length === 0}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar Tarea
            </>
          )}
        </button>

        <button
          onClick={() => router.back()}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
