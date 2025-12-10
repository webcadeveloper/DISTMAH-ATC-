'use client';

import { useParams } from 'next/navigation';
import SubmitAssignment from '@/components/student/SubmitAssignment';

export default function SubmitAssignmentPage() {
  const params = useParams();
  const slug = params.slug as string;
  const assignmentId = params.id as string;

  // TODO: Get user ID from session
  const userId = 'student-id'; // Replace with actual user ID

  return (
    <div className="container mx-auto px-4 py-8">
      <SubmitAssignment
        assignmentId={assignmentId}
        userId={userId}
        courseSlug={slug}
      />
    </div>
  );
}
