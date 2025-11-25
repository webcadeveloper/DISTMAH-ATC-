'use client';

import { useState, useEffect } from 'react';
import { ForumPostCard } from './ForumPostCard';

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
  _count?: {
    replies: number;
  };
}

export function ForumPosts({ categoryId }: { categoryId: string }) {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [categoryId]);

  async function fetchPosts() {
    try {
      const res = await fetch(`/api/forum/posts?categoryId=${categoryId}`);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error('Error al cargar posts:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="text-center py-8">Cargando...</div>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <ForumPostCard key={post.id} post={post} />
      ))}
      {posts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No hay discusiones aún. Sé el primero en crear una.
        </div>
      )}
    </div>
  );
}
