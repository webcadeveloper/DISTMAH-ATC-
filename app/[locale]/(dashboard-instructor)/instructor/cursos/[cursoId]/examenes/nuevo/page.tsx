import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ExamForm } from '@/components/instructor/ExamForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Crear Nuevo Examen',
};

export default async function NuevoExamenPage({
  params,
}: {
  params: Promise<{ cursoId: string; locale: string }>;
}) {
  const { cursoId, locale } = await params;

  const handleSuccess = (examId: string) => {
    redirect(`/${locale}/instructor/cursos/${cursoId}/examenes/${examId}/preguntas`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/${locale}/instructor/cursos/${cursoId}/examenes`}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Crear Nuevo Examen</h1>
          <p className="text-gray-500 mt-1">
            Configura los parámetros del examen y luego agrega las preguntas
          </p>
        </div>
      </div>

      <ExamForm courseId={cursoId} onSuccess={handleSuccess} />
    </div>
  );
}
