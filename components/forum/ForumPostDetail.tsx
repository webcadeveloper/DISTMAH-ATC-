'use client';

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface ForumPostDetailProps {
  postId: string;
}

interface ForumPost {
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
  category: {
    id: string;
    name: string;
  };
}

export function ForumPostDetail({ postId }: ForumPostDetailProps) {
  const [post, setPost] = useState<ForumPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  async function fetchPost() {
    try {
      const res = await fetch(`/api/forum/posts/${postId}`);
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error('Error al cargar post:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="text-center py-8">Cargando...</div>;
  if (!post) return <div className="text-center py-8 text-red-600">Post no encontrado</div>;

  return (
    <div className="bg-white rounded-lg border p-6 mb-6">
      {post.isPinned && (
        <div className="text-blue-600 font-semibold text-sm mb-2">Fijado</div>
      )}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
        <span className="font-medium">{post.author.name}</span>
        <span>•</span>
        <span>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: es })}</span>
        <span>•</span>
        <span>{post.category.name}</span>
      </div>

      <div className="prose max-w-none">
        <p className="whitespace-pre-wrap">{post.content}</p>
      </div>
    </div>
  );
}
