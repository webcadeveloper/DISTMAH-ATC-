'use client';

interface VideoPlayerProps {
  videoUrl?: string;
  lessonTitle: string;
}

function getVideoEmbedUrl(url: string): { embedUrl: string; platform: string } | null {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();

    if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
      let videoId = '';
      if (hostname.includes('youtube.com')) {
        videoId = urlObj.searchParams.get('v') || '';
      } else if (hostname.includes('youtu.be')) {
        videoId = urlObj.pathname.substring(1);
      }
      if (videoId) {
        return {
          embedUrl: `https://www.youtube.com/embed/${videoId}`,
          platform: 'youtube',
        };
      }
    }

    if (hostname.includes('vimeo.com')) {
      const videoId = urlObj.pathname.split('/').filter(Boolean).pop();
      if (videoId) {
        return {
          embedUrl: `https://player.vimeo.com/video/${videoId}`,
          platform: 'vimeo',
        };
      }
    }

    if (hostname.includes('loom.com')) {
      const videoId = urlObj.pathname.split('/').filter(Boolean).pop();
      if (videoId) {
        return {
          embedUrl: `https://www.loom.com/embed/${videoId}`,
          platform: 'loom',
        };
      }
    }

    if (hostname.includes('stream.microsoft.com') || hostname.includes('microsoftstream.com')) {
      return {
        embedUrl: url,
        platform: 'microsoft-stream',
      };
    }

    return null;
  } catch (error) {
    console.error('Error parsing video URL:', error);
    return null;
  }
}

export default function VideoPlayer({ videoUrl, lessonTitle }: VideoPlayerProps) {
  if (!videoUrl) {
    return null;
  }

  const videoData = getVideoEmbedUrl(videoUrl);

  if (!videoData) {
    return (
      <div className="w-full bg-gray-100 rounded-lg p-8 text-center">
        <div className="text-gray-600">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="text-sm font-medium">No se pudo cargar el video</p>
          <p className="text-xs mt-2">URL del video no válida o no soportada</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden shadow-lg mb-8">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={videoData.embedUrl}
          title={lessonTitle}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}
