'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface WriteReviewButtonProps {
  courseId: string;
  onReviewSubmitted: () => void;
}

export function WriteReviewButton({ courseId, onReviewSubmitted }: WriteReviewButtonProps) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (comment.trim().length < 10) {
      toast.error('El comentario debe tener al menos 10 caracteres');
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch(`/api/courses/${courseId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          title: title.trim() || null,
          comment: comment.trim(),
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Error al enviar reseña');
      }

      toast.success('Reseña publicada exitosamente');
      setOpen(false);
      setRating(5);
      setTitle('');
      setComment('');
      onReviewSubmitted();
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error(error instanceof Error ? error.message : 'Error al enviar reseña');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Escribir Reseña</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Escribe tu Reseña</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="block text-sm font-medium mb-2">Calificación</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i)}
                  onMouseEnter={() => setHoveredRating(i)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      i <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-neutral-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              {rating === 5 && 'Excelente'}
              {rating === 4 && 'Muy bueno'}
              {rating === 3 && 'Bueno'}
              {rating === 2 && 'Regular'}
              {rating === 1 && 'Malo'}
            </p>
          </div>

          <div>
            <Label htmlFor="title">Título (opcional)</Label>
            <Input
              id="title"
              placeholder="Resume tu experiencia en pocas palabras"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={100}
            />
          </div>

          <div>
            <Label htmlFor="comment">Tu comentario *</Label>
            <Textarea
              id="comment"
              placeholder="Comparte tu experiencia con el curso. ¿Qué fue lo que más te gustó? ¿Qué aprendiste?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={6}
              required
              minLength={10}
              maxLength={2000}
            />
            <p className="text-sm text-neutral-500 mt-1">
              {comment.length}/2000 caracteres (mínimo 10)
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={submitting}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={submitting || comment.trim().length < 10}>
              {submitting ? 'Publicando...' : 'Publicar Reseña'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
