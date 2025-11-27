import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface ForumCategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    _count?: {
      posts: number;
    };
  };
}

export function ForumCategoryCard({ category }: ForumCategoryCardProps) {
  return (
    <Link href={`/estudiante/foro/${category.id}`}>
      <div className="border rounded-lg p-4 hover:bg-neutral-50 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">{category.name}</h3>
            <p className="text-neutral-600 text-sm">{category.description}</p>
          </div>
          <div className="flex items-center gap-2 text-neutral-500">
            <MessageSquare className="w-5 h-5" />
            <span>{category._count?.posts || 0} posts</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
