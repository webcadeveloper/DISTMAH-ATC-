import GradeSubmissions from '@/components/instructor/GradeSubmissions';

interface PageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default async function GradeAssignmentPage({ params }: PageProps) {
  const { id } = await params;

  // TODO: Get instructor ID from session
  const instructorId = 'instructor-id'; // Replace with actual instructor ID from session

  return (
    <div className="container mx-auto px-4 py-8">
      <GradeSubmissions assignmentId={id} instructorId={instructorId} />
    </div>
  );
}
