'use client';

interface CourseProgressBarProps {
  completedLessons: number;
  totalLessons: number;
  courseTitle: string;
}

export default function CourseProgressBar({
  completedLessons,
  totalLessons,
  courseTitle,
}: CourseProgressBarProps) {
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div>
            <h2 className="font-semibold text-gray-900 text-sm">{courseTitle}</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {completedLessons} de {totalLessons} lecciones completadas
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(progressPercentage)}%
            </div>
            <div className="text-xs text-gray-500">Progreso</div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-500 ease-out relative overflow-hidden"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
