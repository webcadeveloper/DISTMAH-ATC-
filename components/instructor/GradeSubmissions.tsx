'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import {
  Download,
  FileText,
  User,
  Calendar,
  Save,
  CheckCircle,
  Clock,
  Loader2
} from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Submission {
  id: string;
  userId: string;
  comments: string | null;
  files: any[];
  score: number | null;
  feedback: string | null;
  status: string;
  attemptNumber: number;
  submittedAt: string;
  gradedAt: string | null;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
  };
}

interface Assignment {
  id: string;
  title: string;
  maxScore: number;
}

interface GradeSubmissionsProps {
  assignmentId: string;
  instructorId: string;
}

export default function GradeSubmissions({ assignmentId, instructorId }: GradeSubmissionsProps) {
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [gradingId, setGradingId] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [score, setScore] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'submitted' | 'graded'>('all');

  useEffect(() => {
    fetchSubmissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assignmentId, filter]);

  const fetchSubmissions = async () => {
    try {
      const url = filter === 'all'
        ? `/api/instructor/assignments/${assignmentId}/submissions`
        : `/api/instructor/assignments/${assignmentId}/submissions?status=${filter.toUpperCase()}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Error al cargar entregas');

      const data = await response.json();
      setAssignment(data.assignment);
      setSubmissions(data.submissions);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast.error('Error al cargar las entregas');
    } finally {
      setLoading(false);
    }
  };

  const openGradingModal = (submission: Submission) => {
    setSelectedSubmission(submission);
    setScore(submission.score || 0);
    setFeedback(submission.feedback || '');
  };

  const closeGradingModal = () => {
    setSelectedSubmission(null);
    setScore(0);
    setFeedback('');
  };

  const gradeSubmission = async () => {
    if (!selectedSubmission || !assignment) return;

    if (score < 0 || score > assignment.maxScore) {
      toast.error(`El puntaje debe estar entre 0 y ${assignment.maxScore}`);
      return;
    }

    setGradingId(selectedSubmission.id);

    try {
      const response = await fetch(`/api/instructor/submissions/${selectedSubmission.id}/grade`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          score,
          feedback,
          instructorId
        })
      });

      if (!response.ok) throw new Error('Error al calificar');

      toast.success('Entrega calificada correctamente');
      closeGradingModal();
      fetchSubmissions();
    } catch (error) {
      console.error('Error grading submission:', error);
      toast.error('Error al calificar la entrega');
    } finally {
      setGradingId(null);
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

  const filteredSubmissions = submissions.filter(sub => {
    if (filter === 'submitted') return sub.status === 'SUBMITTED';
    if (filter === 'graded') return sub.status === 'GRADED';
    return true;
  });

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">{assignment.title}</h2>
        <p className="text-gray-600 mt-1">
          {submissions.length} {submissions.length === 1 ? 'entrega' : 'entregas'} en total
        </p>
      </div>

      {/* Filtros */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todas ({submissions.length})
        </button>
        <button
          onClick={() => setFilter('submitted')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'submitted'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Pendientes ({submissions.filter(s => s.status === 'SUBMITTED').length})
        </button>
        <button
          onClick={() => setFilter('graded')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'graded'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Calificadas ({submissions.filter(s => s.status === 'GRADED').length})
        </button>
      </div>

      {/* Lista de entregas */}
      {filteredSubmissions.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <FileText className="mx-auto h-12 w-12 text-gray-400 mb-3" />
          <p className="text-gray-600">No hay entregas para mostrar</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredSubmissions.map(submission => (
            <div
              key={submission.id}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{submission.user.name}</h3>
                    <p className="text-sm text-gray-600">{submission.user.email}</p>
                  </div>
                </div>

                <div className="text-right">
                  {submission.status === 'GRADED' ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">
                        {submission.score}/{assignment.maxScore}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-orange-600">
                      <Clock className="w-5 h-5" />
                      <span>Pendiente</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  Entregado: {format(new Date(submission.submittedAt), "d 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
                </div>

                {submission.comments && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Comentarios del estudiante:</p>
                    <p className="text-sm text-gray-700">{submission.comments}</p>
                  </div>
                )}

                {submission.files && submission.files.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-2">Archivos entregados:</p>
                    <div className="space-y-2">
                      {submission.files.map((file: any, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2 bg-gray-50 rounded"
                        >
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">{file.title || file.name}</span>
                          </div>
                          <button
                            onClick={() => downloadFile(file.url, file.title || file.name)}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {submission.feedback && (
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Retroalimentación:</p>
                    <p className="text-sm text-gray-700">{submission.feedback}</p>
                  </div>
                )}

                <button
                  onClick={() => openGradingModal(submission)}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {submission.status === 'GRADED' ? 'Editar Calificación' : 'Calificar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de calificación */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h3 className="text-xl font-bold mb-4">
              Calificar Entrega - {selectedSubmission.user.name}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Puntaje (0-{assignment.maxScore})
                </label>
                <input
                  type="number"
                  min={0}
                  max={assignment.maxScore}
                  value={score}
                  onChange={(e) => setScore(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Retroalimentación (Opcional)
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Escribe comentarios para el estudiante..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={gradeSubmission}
                  disabled={gradingId === selectedSubmission.id}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {gradingId === selectedSubmission.id ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Guardando...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Guardar Calificación
                    </>
                  )}
                </button>

                <button
                  onClick={closeGradingModal}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
