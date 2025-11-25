import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { ForumCategories } from '@/components/forum/ForumCategories';

export default async function ForoPage({ params }: { params: Promise<{ courseId: string }> }) {
  const session = await auth();
  if (!session) redirect('/login');

  const { courseId } = await params;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Foro del Curso</h1>
      <ForumCategories courseId={courseId} />
    </div>
  );
}
