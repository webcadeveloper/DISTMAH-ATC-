import AssignmentForm from '@/components/instructor/AssignmentForm';

interface PageProps {
  params: Promise<{
    locale: string;
    cursoId: string;
    id: string;
  }>;
}

async function getAssignment(id: string) {
  // TODO: Fetch assignment from API
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/instructor/assignments/${id}`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch assignment');
  }

  const data = await response.json();
  return data.assignment;
}

export default async function EditAssignmentPage({ params }: PageProps) {
  const { cursoId, id } = await params;

  // TODO: Fetch assignment and modules
  let assignment = null;
  try {
    assignment = await getAssignment(id);
  } catch (error) {
    console.error('Error fetching assignment:', error);
  }

  const modules: any[] = []; // Replace with actual modules fetch

  if (!assignment) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600">Tarea no encontrada</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Editar Tarea</h1>
        <AssignmentForm
          courseId={cursoId}
          assignmentId={id}
          initialData={assignment}
          modules={modules}
        />
      </div>
    </div>
  );
}
