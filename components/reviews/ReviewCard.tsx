'use client';

import { useState } from 'react';
import { Star, ThumbsUp, Trash2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Review {
  id: string;
  rating: number;
  title: string | null;
  comment: string;
  helpful: number;
  createdAt: string;
  user: {
    id: string;
    name: string;
    avatar: string | null;
  };
}

interface ReviewCardProps {
  review: Review;
  isOwnReview?: boolean;
  onDeleted?: (reviewId: string) => void;
}

export function ReviewCard({ review, isOwnReview = false, onDeleted }: ReviewCardProps) {
  const [helpful, setHelpful] = useState(review.helpful);
  const [hasMarkedHelpful, setHasMarkedHelpful] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleMarkHelpful() {
    if (hasMarkedHelpful || isOwnReview) return;

    try {
      const res = await fetch(`/api/reviews/${review.id}/helpful`, {
        method: 'POST',
      });

      if (!res.ok) throw new Error('Error al marcar como útil');

      const data = await res.json();
      setHelpful(data.helpful);
      setHasMarkedHelpful(true);
      toast.success('Marcado como útil');
    } catch (error) {
      console.error('Error marking review as helpful:', error);
      toast.error('Error al marcar como útil');
    }
  }

  async function handleDelete() {
    if (!confirm('¿Estás seguro de que deseas eliminar esta reseña?')) return;

    try {
      setDeleting(true);
      const res = await fetch(`/api/reviews/${review.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar review');

      toast.success('Reseña eliminada');
      onDeleted?.(review.id);
    } catch (error) {
      console.error('Error deleting review:', error);
      toast.error('Error al eliminar reseña');
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex items-center gap-2">
              {review.user.avatar ? (
                <img
                  src={review.user.avatar}
                  alt={review.user.name}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-neutral-300 flex items-center justify-center text-white font-semibold">
                  {review.user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="font-semibold">{review.user.name}</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i <= review.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-neutral-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-neutral-500">
            {formatDistanceToNow(new Date(review.createdAt), {
              addSuffix: true,
              locale: es,
            })}
          </p>
        </div>

        {isOwnReview && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            disabled={deleting}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>

      {review.title && <h4 className="font-semibold mb-2">{review.title}</h4>}

      <p className="text-neutral-700 whitespace-pre-wrap">{review.comment}</p>

      <div className="flex items-center gap-4 mt-3">
        <button
          onClick={handleMarkHelpful}
          disabled={hasMarkedHelpful || isOwnReview}
          className={`flex items-center gap-1 text-sm ${
            hasMarkedHelpful || isOwnReview
              ? 'text-neutral-400 cursor-not-allowed'
              : 'text-neutral-600 hover:text-blue-600'
          }`}
        >
          <ThumbsUp className={`w-4 h-4 ${hasMarkedHelpful ? 'fill-blue-600 text-blue-600' : ''}`} />
          <span>Útil ({helpful})</span>
        </button>
      </div>
    </div>
  );
}
