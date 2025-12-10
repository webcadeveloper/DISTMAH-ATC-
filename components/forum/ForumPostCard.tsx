import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface ForumPostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    isPinned: boolean;
    createdAt: string;
    author: {
      id: string;
      name: string;
      email: string;
      image: string | null;
    };
    _count?: {
      replies: number;
    };
  };
}

export function ForumPostCard({ post }: ForumPostCardProps) {
  return (
    <Link href={`/estudiante/foro/post/${post.id}`}>
      <div className="border rounded-lg p-4 hover:bg-neutral-50 transition-colors">
        <h3 className="font-bold text-lg mb-2">{post.title}</h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{post.content}</p>

        <div className="flex items-center justify-between text-sm text-neutral-500">
          <div className="flex items-center gap-4">
            <span className="font-medium">{post.author.name}</span>
            <span>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: es })}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              <span>{post._count?.replies || 0}</span>
            </div>
            {post.isPinned && <span className="text-blue-600 font-semibold">Fijado</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}
