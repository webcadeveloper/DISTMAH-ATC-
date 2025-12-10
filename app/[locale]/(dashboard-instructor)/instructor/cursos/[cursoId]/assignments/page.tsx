import AssignmentsList from '@/components/instructor/AssignmentsList';

interface PageProps {
  params: Promise<{
    locale: string;
    cursoId: string;
  }>;
}

export default async function AssignmentsPage({ params }: PageProps) {
  const { cursoId } = await params;

  // TODO: Fetch modules from API or database
  const modules: any[] = []; // Replace with actual modules fetch

  return (
    <div className="container mx-auto px-4 py-8">
      <AssignmentsList courseId={cursoId} modules={modules} />
    </div>
  );
}
