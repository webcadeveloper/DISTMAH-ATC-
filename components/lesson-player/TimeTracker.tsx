'use client';

import { useEffect, useRef } from 'react';

interface TimeTrackerProps {
  userId?: string;
  lessonId?: string;
  enabled?: boolean;
}

export default function TimeTracker({ userId, lessonId, enabled = true }: TimeTrackerProps) {
  const timeSpentRef = useRef(0);

  useEffect(() => {
    if (!enabled || !userId || !lessonId) {
      return;
    }

    const interval = setInterval(async () => {
      timeSpentRef.current += 30;

      try {
        await fetch('/api/progress/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            lessonId,
            timeSpent: 30,
          }),
        });
      } catch (error) {
        console.error('Error tracking time:', error);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [userId, lessonId, enabled]);

  return null;
}
