'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Filter
} from 'lucide-react';
import { format, isPast, isFuture, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';

interface Assignment {
  id: string;
  title: string;
  description: string;
  maxScore: number;
  dueDate: string;
  availableFrom: string;
  moduleId: string | null;
  stats: {
    totalSubmissions: number;
    submittedCount: number;
    gradedCount: number;
    pendingReview: number;
  };
}

interface AssignmentsListProps {
  courseId: string;
  modules?: Array<{ id: string; number: number; title: string }>;
}

export default function AssignmentsList({ courseId, modules = [] }: AssignmentsListProps) {
  const router = useRouter();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'active' | 'past' | 'upcoming'>('all');
  const [moduleFilter, setModuleFilter] = useState<string>('all');

  useEffect(() => {
    fetchAssignments();
  }, [courseId, moduleFilter]);

  const fetchAssignments = async () => {
    try {
      const url = moduleFilter === 'all'
        ? `/api/instructor/courses/${courseId}/assignments`
        : `/api/instructor/courses/${courseId}/assignments?moduleId=${moduleFilter}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Error al cargar tareas');

      const data = await response.json();
      setAssignments(data.assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
      toast.error('Error al cargar las tareas');
    } finally {
      setLoading(false);
    }
  };

  const deleteAssignment = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar esta tarea? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      const response = await fetch(`/api/instructor/assignments/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Error al eliminar tarea');

      toast.success('Tarea eliminada correctamente');
      fetchAssignments();
    } catch (error) {
      console.error('Error deleting assignment:', error);
      toast.error('Error al eliminar la tarea');
    }
  };

  const getAssignmentStatus = (assignment: Assignment) => {
    const now = new Date();
    const dueDate = new Date(assignment.dueDate);
    const availableFrom = new Date(assignment.availableFrom);

    if (isFuture(availableFrom)) {
      return { label: 'Próximamente', color: 'text-blue-600 bg-blue-50' };
    }
    if (isPast(dueDate)) {
      return { label: 'Vencida', color: 'text-gray-600 bg-gray-100' };
    }

    const daysLeft = differenceInDays(dueDate, now);
    if (daysLeft <= 2) {
      return { label: `Vence en ${daysLeft}d`, color: 'text-orange-600 bg-orange-50' };
    }

    return { label: 'Activa', color: 'text-green-600 bg-green-50' };
  };

  const filteredAssignments = assignments.filter(assignment => {
    const now = new Date();
    const dueDate = new Date(assignment.dueDate);
    const availableFrom = new Date(assignment.availableFrom);

    if (filter === 'active') {
      return !isPast(dueDate) && !isFuture(availableFrom);
    }
    if (filter === 'past') {
      return isPast(dueDate);
    }
    if (filter === 'upcoming') {
      return isFuture(availableFrom);
    }

    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Tareas del Curso</h2>
          <p className="text-gray-600 mt-1">
            {assignments.length} {assignments.length === 1 ? 'tarea' : 'tareas'} en total
          </p>
        </div>

        <button
          onClick={() => router.push(`/instructor/cursos/${courseId}/assignments/new`)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Nueva Tarea
        </button>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-3 py-1.5 border rounded-lg text-sm"
          >
            <option value="all">Todas</option>
            <option value="active">Activas</option>
            <option value="past">Vencidas</option>
            <option value="upcoming">Próximas</option>
          </select>
        </div>

        {modules.length > 0 && (
          <select
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
            className="px-3 py-1.5 border rounded-lg text-sm"
          >
            <option value="all">Todos los módulos</option>
            {modules.map(module => (
              <option key={module.id} value={module.id}>
                Módulo {module.number}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Lista de tareas */}
      {filteredAssignments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <FileText className="mx-auto h-12 w-12 text-gray-400 mb-3" />
          <p className="text-gray-600">No hay tareas {filter !== 'all' && `(${filter})`}</p>
          <button
            onClick={() => router.push(`/instructor/cursos/${courseId}/assignments/new`)}
            className="mt-4 text-blue-600 hover:underline"
          >
            Crear primera tarea
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAssignments.map(assignment => {
            const status = getAssignmentStatus(assignment);
            const pendingCount = assignment.stats.pendingReview;

            return (
              <div
                key={assignment.id}
                className="border rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{assignment.title}</h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${status.color}`}
                      >
                        {status.label}
                      </span>
                      {pendingCount > 0 && (
                        <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded">
                          {pendingCount} pendientes
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {assignment.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        Entrega: {format(new Date(assignment.dueDate), "d 'de' MMMM, yyyy", { locale: es })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4" />
                        {assignment.stats.submittedCount} entregas
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {assignment.stats.gradedCount} calificadas
                      </div>
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4" />
                        Puntaje máx: {assignment.maxScore}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => router.push(`/instructor/assignments/${assignment.id}/grade`)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="Calificar entregas"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => router.push(`/instructor/cursos/${courseId}/assignments/${assignment.id}/edit`)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                      title="Editar"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deleteAssignment(assignment.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Eliminar"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
