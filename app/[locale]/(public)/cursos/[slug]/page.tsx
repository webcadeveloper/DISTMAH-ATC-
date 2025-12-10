import { getCourse, getAllCourses } from '@/lib/course-loader';
import { notFound } from 'next/navigation';
import ModuleList from '@/components/ModuleList';
import Link from 'next/link';

export const revalidate = 3600;

export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CursoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/cursos" className="text-blue-200 hover:text-white transition-colors text-sm">
                ← Volver a Cursos
              </Link>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold">
                {course.categoria}
              </span>
              <span className="px-3 py-1 bg-blue-800 rounded-full text-sm">
                {course.version}
              </span>
              <span className="px-3 py-1 bg-blue-800 rounded-full text-sm">
                {course.nivel}
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-4">{course.titulo}</h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              {course.descripcion}
            </p>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{course.duracion}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{course.instructor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Contenido del Curso</h2>
              <ModuleList modules={course.modules} courseSlug={slug} />
            </div>

            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Objetivos de Aprendizaje</h2>
              <ul className="space-y-3">
                {course.objetivos.map((objetivo, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-neutral-700">{objetivo}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Prerequisitos</h2>
              <ul className="space-y-2">
                {course.prerequisitos.map((prerequisito, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-neutral-700">{prerequisito}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-4">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-neutral-900 mb-2">
                  ${course.precio}
                  <span className="text-xl text-neutral-600 ml-2">{course.moneda}</span>
                </div>
                <p className="text-neutral-600">{course.duracion}</p>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                Inscribirse Ahora
              </button>

              <div className="border-t border-neutral-200 pt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>{course.modules.length} módulos</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Certificado digital incluido</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Acceso de por vida</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Material descargable</span>
                </div>
              </div>

              {course.certificacion && (
                <div className="border-t border-neutral-200 pt-6 mt-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">Certificación</h3>
                  <p className="text-sm text-neutral-600">{course.certificacion.nombre}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
