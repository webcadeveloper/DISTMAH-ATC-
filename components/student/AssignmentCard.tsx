'use client';

import { useRouter } from 'next/navigation';
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Award,
  ArrowRight
} from 'lucide-react';
import { format, differenceInDays, differenceInHours } from 'date-fns';
import { es } from 'date-fns/locale';

interface AssignmentCardProps {
  assignment: {
    id: string;
    title: string;
    description: string;
    maxScore: number;
    dueDate: string;
    availableFrom: string;
    isOverdue: boolean;
    isNearDue: boolean;
    submission: {
      id: string;
      status: string;
      score: number | null;
      submittedAt: string;
    } | null;
  };
  courseSlug: string;
}

export default function AssignmentCard({ assignment, courseSlug }: AssignmentCardProps) {
  const router = useRouter();

  const getStatusBadge = () => {
    if (assignment.submission) {
      if (assignment.submission.status === 'GRADED') {
        return (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Calificada
          </div>
        );
      }
      if (assignment.submission.status === 'SUBMITTED') {
        return (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4" />
            En revisión
          </div>
        );
      }
    }

    if (assignment.isOverdue) {
      return (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm font-medium">
          <AlertTriangle className="w-4 h-4" />
          Atrasada
        </div>
      );
    }

    if (assignment.isNearDue) {
      return (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
          <Clock className="w-4 h-4" />
          Próxima a vencer
        </div>
      );
    }

    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
        <FileText className="w-4 h-4" />
        Pendiente
      </div>
    );
  };

  const getTimeRemaining = () => {
    if (assignment.isOverdue) return 'Fecha vencida';

    const now = new Date();
    const dueDate = new Date(assignment.dueDate);
    const days = differenceInDays(dueDate, now);
    const hours = differenceInHours(dueDate, now);

    if (days > 1) {
      return `${days} días restantes`;
    }
    if (hours > 1) {
      return `${hours} horas restantes`;
    }
    return 'Vence hoy';
  };

  const handleClick = () => {
    if (assignment.submission) {
      router.push(`/cursos/${courseSlug}/assignments/${assignment.id}/submission`);
    } else {
      router.push(`/cursos/${courseSlug}/assignments/${assignment.id}/submit`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer bg-white"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{assignment.description}</p>
        </div>
        <div className="ml-4">{getStatusBadge()}</div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>
            Fecha de entrega:{' '}
            {format(new Date(assignment.dueDate), "d 'de' MMMM, yyyy", { locale: es })}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span
            className={
              assignment.isOverdue
                ? 'text-red-600 font-medium'
                : assignment.isNearDue
                ? 'text-orange-600 font-medium'
                : 'text-gray-600'
            }
          >
            {getTimeRemaining()}
          </span>
        </div>

        {assignment.submission?.status === 'GRADED' && assignment.submission.score !== null && (
          <div className="flex items-center gap-2 text-sm">
            <Award className="w-4 h-4 text-green-600" />
            <span className="font-semibold text-green-600">
              Puntaje: {assignment.submission.score}/{assignment.maxScore}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm text-gray-600">
          Puntaje máximo: <span className="font-medium">{assignment.maxScore}</span>
        </div>

        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
          {assignment.submission ? 'Ver entrega' : 'Entregar tarea'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
