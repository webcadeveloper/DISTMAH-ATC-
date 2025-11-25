'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import {
  ArrowLeft,
  FileText,
  Download,
  Calendar,
  CheckCircle,
  Award,
  MessageSquare,
  Clock
} from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ViewSubmissionProps {
  assignmentId: string;
  userId: string;
  courseSlug: string;
}

export default function ViewSubmission({ assignmentId, userId, courseSlug }: ViewSubmissionProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submission, setSubmission] = useState<any>(null);

  useEffect(() => {
    fetchSubmission();
  }, [assignmentId, userId]);

  const fetchSubmission = async () => {
    try {
      const response = await fetch(`/api/student/assignments/${assignmentId}/submission?userId=${userId}`);
      if (!response.ok) throw new Error('Error al cargar la entrega');

      const data = await response.json();
      setSubmission(data.submission);
    } catch (error) {
      console.error('Error fetching submission:', error);
      toast.error('Error al cargar la entrega');
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'GRADED':
        return (
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Calificada</span>
          </div>
        );
      case 'SUBMITTED':
        return (
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
            <Clock className="w-5 h-5" />
            <span className="font-medium">En Revisión</span>
          </div>
        );
      case 'RETURNED':
        return (
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-lg">
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Devuelta para Corrección</span>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No se encontró tu entrega</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-600 hover:underline"
        >
          Volver
        </button>
      </div>
    );
  }

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

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{submission.assignment.title}</h1>
            <p className="text-gray-600">Intento #{submission.attemptNumber}</p>
          </div>
          {getStatusBadge(submission.status)}
        </div>
      </div>

      {/* Información de la entrega */}
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Información de la Entrega</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Fecha de entrega</p>
              <p className="font-medium">
                {format(new Date(submission.submittedAt), "d 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Fecha límite</p>
              <p className="font-medium">
                {format(new Date(submission.assignment.dueDate), "d 'de' MMMM, yyyy", { locale: es })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calificación */}
      {submission.status === 'GRADED' && submission.score !== null && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Calificación</h2>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-3xl font-bold text-green-600">
                    {submission.score}/{submission.assignment.maxScore}
                  </p>
                  <p className="text-sm text-gray-600">
                    {((submission.score / submission.assignment.maxScore) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>

            {submission.gradedAt && (
              <div className="text-right">
                <p className="text-sm text-gray-600">Calificado el</p>
                <p className="font-medium">
                  {format(new Date(submission.gradedAt), "d 'de' MMMM, yyyy", { locale: es })}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Comentarios del estudiante */}
      {submission.comments && (
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Tus Comentarios</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">{submission.comments}</p>
          </div>
        </div>
      )}

      {/* Archivos entregados */}
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Archivos Entregados</h2>
        <div className="space-y-2">
          {submission.files && submission.files.length > 0 ? (
            submission.files.map((file: any, idx: number) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">{file.title || file.name}</p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => downloadFile(file.url, file.title || file.name)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <Download className="w-4 h-4" />
                  Descargar
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No hay archivos adjuntos</p>
          )}
        </div>
      </div>

      {/* Retroalimentación del instructor */}
      {submission.feedback && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Retroalimentación del Instructor
          </h2>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-gray-700 whitespace-pre-wrap">{submission.feedback}</p>
          </div>
        </div>
      )}
    </div>
  );
}
