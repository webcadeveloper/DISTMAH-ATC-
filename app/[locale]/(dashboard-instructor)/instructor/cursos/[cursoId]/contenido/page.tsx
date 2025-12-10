import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus, Settings } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import CourseContentEditor from './CourseContentEditor';

async function getCourse(courseId: string) {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      modules: {
        include: {
          lessons: {
            orderBy: { order: 'asc' },
          },
        },
        orderBy: { order: 'asc' },
      },
    },
  });

  return course;
}

export default async function CourseContentPage({
  params,
}: {
  params: { cursoId: string };
}) {
  const course = await getCourse(params.cursoId);

  if (!course) {
    notFound();
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <Link
          href="/instructor/cursos"
          className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a mis cursos
        </Link>

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              {course.title}
            </h1>
            <p className="text-neutral-600">
              Gestiona la estructura y contenido del curso.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href={`/instructor/cursos/${params.cursoId}/editar`}>
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" /> Configuración
              </Button>
            </Link>
            <Link href={`/cursos/${course.slug}`} target="_blank">
              <Button>Vista Previa</Button>
            </Link>
          </div>
        </div>
      </div>

      <CourseContentEditor course={course} />
    </div>
  );
}
