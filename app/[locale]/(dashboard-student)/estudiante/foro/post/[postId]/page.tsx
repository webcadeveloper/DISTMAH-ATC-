import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { ForumPostDetail } from '@/components/forum/ForumPostDetail';
import { ForumReplies } from '@/components/forum/ForumReplies';
import { CreateReplyForm } from '@/components/forum/CreateReplyForm';

export default async function PostDetailPage({ params }: { params: Promise<{ postId: string }> }) {
  const session = await auth();
  if (!session) redirect('/login');

  const { postId } = await params;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ForumPostDetail postId={postId} />
      <ForumReplies postId={postId} />
      <CreateReplyForm postId={postId} />
    </div>
  );
}
