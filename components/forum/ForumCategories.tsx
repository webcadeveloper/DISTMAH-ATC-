'use client';

import { useState, useEffect } from 'react';
import { ForumCategoryCard } from './ForumCategoryCard';

interface ForumCategory {
  id: string;
  name: string;
  description: string;
  _count?: {
    posts: number;
  };
}

export function ForumCategories({ courseId }: { courseId: string }) {
  const [categories, setCategories] = useState<ForumCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  async function fetchCategories() {
    try {
      const res = await fetch(`/api/forum/categories?courseId=${courseId}`);
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error('Error al cargar categorías:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="text-center py-8">Cargando...</div>;

  return (
    <div className="space-y-4">
      {categories.map((cat) => (
        <ForumCategoryCard key={cat.id} category={cat} />
      ))}
      {categories.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No hay categorías de foro aún.
        </div>
      )}
    </div>
  );
}
