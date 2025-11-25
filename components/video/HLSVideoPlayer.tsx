'use client';

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

interface Subtitle {
  kind: 'captions' | 'subtitles';
  label: string;
  srclang: string;
  src: string;
  default?: boolean;
}

interface HLSVideoPlayerProps {
  src: string;
  poster?: string;
  subtitles?: Subtitle[];
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

export function HLSVideoPlayer({
  src,
  poster,
  subtitles = [],
  onComplete,
  onProgress
}: HLSVideoPlayerProps) {
  const playerRef = useRef<any>(null);
  const hlsRef = useRef<Hls | null>(null);

  const plyrOptions = {
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'captions',
      'settings',
      'pip',
      'airplay',
      'fullscreen',
    ],
    settings: ['captions', 'quality', 'speed'],
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
    quality: {
      default: 720,
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    },
    captions: { active: true, update: true },
  };

  useEffect(() => {
    const video = document.querySelector('video');
    if (!video) return;

    if (src.includes('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90,
        });

        hls.loadSource(src);
        hls.attachMedia(video);
        hlsRef.current = hls;

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log('HLS manifest loaded');
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error('HLS error:', data);
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.log('Fatal network error, trying to recover');
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.log('Fatal media error, trying to recover');
                hls.recoverMediaError();
                break;
              default:
                console.log('Cannot recover from fatal error');
                hls.destroy();
                break;
            }
          }
        });

        return () => {
          if (hlsRef.current) {
            hlsRef.current.destroy();
            hlsRef.current = null;
          }
        };
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }
    }
  }, [src]);

  const videoSrc = {
    type: 'video' as const,
    sources: [
      {
        src: src,
        type: src.includes('.m3u8') ? 'application/x-mpegURL' : 'video/mp4',
      },
    ],
    poster: poster,
    tracks: subtitles.map(sub => ({
      kind: sub.kind,
      label: sub.label,
      srclang: sub.srclang,
      src: sub.src,
      default: sub.default,
    })),
  };

  const handleTimeUpdate = (event: any) => {
    const video = event.target as HTMLVideoElement;
    if (video.duration) {
      const progress = (video.currentTime / video.duration) * 100;
      onProgress?.(progress);
    }
  };

  const handleEnded = () => {
    onComplete?.();
  };

  return (
    <div className="relative w-full">
      <Plyr
        ref={playerRef}
        source={videoSrc}
        options={plyrOptions}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
    </div>
  );
}
