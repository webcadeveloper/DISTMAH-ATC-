import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { ForumPosts } from '@/components/forum/ForumPosts';
import { CreatePostButton } from '@/components/forum/CreatePostButton';

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const session = await auth();
  if (!session) redirect('/login');

  const { categoryId } = await params;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Discusiones</h1>
        <CreatePostButton categoryId={categoryId} />
      </div>
      <ForumPosts categoryId={categoryId} />
    </div>
  );
}
