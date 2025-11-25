import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, FileText, Users, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Exámenes del Curso',
};

async function getExams(courseId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/instructor/courses/${courseId}/exams`,
      { cache: 'no-store' }
    );
    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    console.error('Error fetching exams:', error);
    return [];
  }
}

export default async function ExamenesPage({
  params,
}: {
  params: Promise<{ cursoId: string; locale: string }>;
}) {
  const { cursoId } = await params;
  const exams = await getExams(cursoId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Exámenes</h1>
          <p className="text-gray-500 mt-1">
            Gestiona los exámenes de tu curso
          </p>
        </div>
        <Link href={`/instructor/cursos/${cursoId}/examenes/nuevo`}>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Crear Examen
          </Button>
        </Link>
      </div>

      {exams.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No hay exámenes aún</h3>
            <p className="text-gray-500 mb-6 text-center max-w-md">
              Crea tu primer examen para evaluar el conocimiento de tus estudiantes
            </p>
            <Link href={`/instructor/cursos/${cursoId}/examenes/nuevo`}>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Crear Primer Examen
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {exams.map((exam: any) => (
            <Card key={exam.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{exam.title}</CardTitle>
                    {exam.description && (
                      <p className="text-gray-600 text-sm">{exam.description}</p>
                    )}
                  </div>
                  <Link href={`/instructor/cursos/${cursoId}/examenes/${exam.id}`}>
                    <Button variant="outline" size="sm">
                      Ver Detalles
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Preguntas</p>
                      <p className="font-semibold">{exam.questions?.length || 0}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Intentos</p>
                      <p className="font-semibold">{exam._count?.attempts || 0}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Duración</p>
                      <p className="font-semibold">{exam.duration} min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Puntaje mínimo</p>
                      <p className="font-semibold">{exam.passingScore}%</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/instructor/cursos/${cursoId}/examenes/${exam.id}/editar`}>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </Link>
                  <Link href={`/instructor/cursos/${cursoId}/examenes/${exam.id}/preguntas`}>
                    <Button variant="outline" size="sm">
                      Gestionar Preguntas
                    </Button>
                  </Link>
                  <Link href={`/instructor/cursos/${cursoId}/examenes/${exam.id}/resultados`}>
                    <Button variant="outline" size="sm">
                      Ver Resultados
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
