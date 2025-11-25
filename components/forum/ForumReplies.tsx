'use client';

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface ForumRepliesProps {
  postId: string;
}

interface ForumReply {
  id: string;
  content: string;
  createdAt: string;
  author: {
    id: string;
    name: string;
    email: string;
    image: string | null;
  };
}

export function ForumReplies({ postId }: ForumRepliesProps) {
  const [replies, setReplies] = useState<ForumReply[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReplies();
  }, [postId]);

  async function fetchReplies() {
    try {
      const res = await fetch(`/api/forum/posts/${postId}`);
      const data = await res.json();
      setReplies(data.replies || []);
    } catch (error) {
      console.error('Error al cargar replies:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="text-center py-8">Cargando respuestas...</div>;

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-xl font-bold">Respuestas ({replies.length})</h2>

      {replies.map((reply) => (
        <div key={reply.id} className="bg-gray-50 rounded-lg p-4 border">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            <span className="font-medium">{reply.author.name}</span>
            <span>•</span>
            <span>{formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true, locale: es })}</span>
          </div>

          <p className="whitespace-pre-wrap">{reply.content}</p>
        </div>
      ))}

      {replies.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No hay respuestas aún. Sé el primero en responder.
        </div>
      )}
    </div>
  );
}
