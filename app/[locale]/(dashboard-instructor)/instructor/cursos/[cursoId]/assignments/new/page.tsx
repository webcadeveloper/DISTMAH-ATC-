import AssignmentForm from '@/components/instructor/AssignmentForm';

interface PageProps {
  params: Promise<{
    locale: string;
    cursoId: string;
  }>;
}

export default async function NewAssignmentPage({ params }: PageProps) {
  const { cursoId } = await params;

  // TODO: Fetch modules from API or database
  const modules: any[] = []; // Replace with actual modules fetch

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Crear Nueva Tarea</h1>
        <AssignmentForm courseId={cursoId} modules={modules} />
      </div>
    </div>
  );
}
