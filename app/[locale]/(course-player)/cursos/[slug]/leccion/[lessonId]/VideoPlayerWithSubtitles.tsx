'use client';

import { useEffect, useState } from 'react';
import { HLSVideoPlayer } from '@/components/video/HLSVideoPlayer';

interface Subtitle {
  id: string;
  language: string;
  label: string;
  fileUrl: string;
  isDefault: boolean;
}

interface VideoPlayerWithSubtitlesProps {
  lessonId: string;
  videoUrl: string;
  title: string;
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

export function VideoPlayerWithSubtitles({
  lessonId,
  videoUrl,
  title,
  onComplete,
  onProgress,
}: VideoPlayerWithSubtitlesProps) {
  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubtitles = async () => {
      try {
        const res = await fetch(`/api/lessons/${lessonId}/subtitles`);
        if (res.ok) {
          const data = await res.json();
          setSubtitles(data);
        }
      } catch (error) {
        console.error('Error fetching subtitles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubtitles();
  }, [lessonId]);

  if (loading) {
    return (
      <div className="w-full aspect-video bg-black flex items-center justify-center">
        <div className="text-white">Cargando...</div>
      </div>
    );
  }

  return (
    <HLSVideoPlayer
      src={videoUrl}
      poster={undefined}
      subtitles={subtitles.map((sub) => ({
        kind: 'subtitles',
        label: sub.label,
        srclang: sub.language,
        src: sub.fileUrl,
        default: sub.isDefault,
      }))}
      onComplete={onComplete}
      onProgress={onProgress}
    />
  );
}
