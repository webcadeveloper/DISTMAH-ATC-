'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AssignmentCard from '@/components/student/AssignmentCard';
import { Loader2, FileText } from 'lucide-react';

export default function CourseAssignmentsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [assignments, setAssignments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // TODO: Get user ID from session
  const userId = 'student-id'; // Replace with actual user ID

  // TODO: Get course ID from slug
  const courseId = 'course-id'; // Replace with actual course ID lookup

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await fetch(`/api/student/courses/${courseId}/assignments?userId=${userId}`);
      if (!response.ok) throw new Error('Error al cargar tareas');

      const data = await response.json();
      setAssignments(data.assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tareas del Curso</h1>
        <p className="text-neutral-600">
          {assignments.length} {assignments.length === 1 ? 'tarea' : 'tareas'} disponibles
        </p>
      </div>

      {assignments.length === 0 ? (
        <div className="text-center py-12 bg-neutral-50 rounded-lg">
          <FileText className="mx-auto h-12 w-12 text-neutral-400 mb-3" />
          <p className="text-neutral-600">No hay tareas disponibles en este momento</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {assignments.map(assignment => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              courseSlug={slug}
            />
          ))}
        </div>
      )}
    </div>
  );
}
