'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function CreateReplyForm({ postId }: { postId: string }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(`/api/forum/posts/${postId}/replies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      setContent('');
      window.location.reload();
    } catch (error) {
      console.error('Error al crear reply:', error);
      alert('Error al publicar la respuesta');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-bold mb-4">Escribe tu respuesta</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Escribe tu respuesta aquí..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? 'Publicando...' : 'Publicar Respuesta'}
        </Button>
      </form>
    </div>
  );
}
