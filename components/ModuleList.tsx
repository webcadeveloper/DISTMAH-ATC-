import Link from 'next/link';
import { Module } from '@/lib/course-loader';

interface ModuleListProps {
  modules: Module[];
  courseSlug: string;
}

export default function ModuleList({ modules, courseSlug }: ModuleListProps) {
  return (
    <div className="space-y-6">
      {modules.map((module) => (
        <div key={module.id} className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
          <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Módulo {module.number}: {module.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-1">{module.description}</p>
              </div>
              <div className="text-sm text-neutral-500">
                {module.duration}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-3">
              {module.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/cursos/${courseSlug}/${module.id}/${lesson.slug}`}
                  className="flex items-center justify-between p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {lesson.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                        {lesson.title}
                      </h4>
                      {lesson.excerpt && (
                        <p className="text-sm text-neutral-600 mt-1 line-clamp-1">
                          {lesson.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {lesson.duration && (
                      <span className="text-sm text-neutral-500">{lesson.duration} min</span>
                    )}
                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
