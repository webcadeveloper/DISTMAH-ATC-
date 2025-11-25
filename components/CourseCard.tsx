import Link from 'next/link';
import { CourseMetadata } from '@/lib/course-loader';

interface CourseCardProps {
  course: CourseMetadata;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/cursos/${course.slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {course.categoria}
            </span>
            <span className="text-xs text-gray-500">{course.version}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {course.titulo}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {course.descripcion}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.duracion}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.nivel}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                ${course.precio}
              </span>
              <span className="text-sm text-gray-500 ml-1">{course.moneda}</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
