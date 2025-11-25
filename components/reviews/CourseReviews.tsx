'use client';

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { ReviewCard } from './ReviewCard';
import { WriteReviewButton } from './WriteReviewButton';

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

interface Stats {
  avgRating: number;
  totalReviews: number;
  distribution: Record<number, number>;
}

interface CourseReviewsProps {
  courseId: string;
  userEnrolled: boolean;
  userReview?: Review | null;
}

export function CourseReviews({ courseId, userEnrolled, userReview: initialUserReview }: CourseReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<Stats>({ avgRating: 0, totalReviews: 0, distribution: {} });
  const [loading, setLoading] = useState(true);
  const [userReview, setUserReview] = useState<Review | null | undefined>(initialUserReview);
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    fetchReviews();
  }, [courseId, sortBy]);

  async function fetchReviews() {
    try {
      setLoading(true);
      const res = await fetch(`/api/courses/${courseId}/reviews?sortBy=${sortBy}&limit=20`);
      if (!res.ok) throw new Error('Error al cargar reviews');

      const data = await res.json();
      setReviews(data.reviews);
      setStats(data.stats);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleReviewSubmitted() {
    await fetchReviews();
  }

  async function handleReviewDeleted(reviewId: string) {
    setReviews(reviews.filter(r => r.id !== reviewId));
    setUserReview(null);
    await fetchReviews();
  }

  if (loading) {
    return <div className="text-center py-8">Cargando reviews...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold">{stats.avgRating.toFixed(1)}</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i <= Math.round(stats.avgRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600">{stats.totalReviews} reseñas</p>
        </div>

        {userEnrolled && !userReview && (
          <WriteReviewButton courseId={courseId} onReviewSubmitted={handleReviewSubmitted} />
        )}
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold mb-3">Distribución de calificaciones</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = stats.distribution[rating] || 0;
            const percentage = stats.totalReviews > 0 ? (count / stats.totalReviews) * 100 : 0;

            return (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-sm font-medium w-12">{rating} ★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Reseñas de estudiantes</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          <option value="recent">Más recientes</option>
          <option value="helpful">Más útiles</option>
          <option value="rating">Mayor calificación</option>
        </select>
      </div>

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No hay reseñas aún. ¡Sé el primero en dejar una!
          </div>
        ) : (
          reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              isOwnReview={userReview?.id === review.id}
              onDeleted={handleReviewDeleted}
            />
          ))
        )}
      </div>
    </div>
  );
}
