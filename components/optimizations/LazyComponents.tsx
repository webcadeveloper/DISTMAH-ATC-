'use client';

import dynamic from 'next/dynamic';
import { Skeleton, ChartSkeleton, TableSkeleton } from '@/components/ui/skeleton';

export const LazyAnalyticsChart = dynamic(
  () =>
    import('@/components/admin/AnalyticsCharts').then((mod) => ({
      default: mod.AnalyticsCharts,
    })),
  {
    loading: () => <ChartSkeleton />,
    ssr: false,
  }
);

export const LazyUsersTable = dynamic(
  () =>
    import('@/components/admin/UsersTable').then((mod) => ({
      default: mod.UsersTable,
    })),
  {
    loading: () => <TableSkeleton rows={10} />,
    ssr: false,
  }
);

export const LazyCoursesTable = dynamic(
  () =>
    import('@/components/admin/CoursesTable').then((mod) => ({
      default: mod.CoursesTable,
    })),
  {
    loading: () => <TableSkeleton rows={8} />,
    ssr: false,
  }
);

export const LazyVideoPlayer = dynamic(
  () => import('@/components/lesson-player/VideoPlayer'),
  {
    loading: () => (
      <div className="w-full aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
        <div className="text-white text-center">
          <Skeleton className="h-16 w-16 mx-auto mb-4 rounded-full" />
          <p>Cargando reproductor...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
);

export const LazyMarkdownEditor = dynamic(
  () =>
    import('@/components/instructor/MarkdownEditor').then((mod) => ({
      default: mod.MarkdownEditor,
    })),
  {
    loading: () => (
      <div className="border border-gray-300 rounded-lg p-4">
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="h-64 w-full" />
      </div>
    ),
    ssr: false,
  }
);

export const LazyTipTapEditor = dynamic(
  () =>
    import('@/components/cms/RichTextEditor/TipTapEditor').then((mod) => ({
      default: mod.TipTapEditor,
    })),
  {
    loading: () => (
      <div className="border border-gray-300 rounded-lg p-4">
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-8 w-8" />
          ))}
        </div>
        <Skeleton className="h-96 w-full" />
      </div>
    ),
    ssr: false,
  }
);

export const LazyExamPlayer = dynamic(
  () =>
    import('@/components/student/ExamPlayer').then((mod) => ({
      default: mod.ExamPlayer,
    })),
  {
    loading: () => (
      <div className="space-y-6">
        <Skeleton className="h-12 w-3/4" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border border-gray-300 rounded-lg p-6">
            <Skeleton className="h-6 w-full mb-4" />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((j) => (
                <Skeleton key={j} className="h-10 w-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
    ssr: false,
  }
);

export const LazyCertificatePDF = dynamic(
  () =>
    import('@/components/certificates/CertificatePDF').then((mod) => ({
      default: mod.CertificatePDF,
    })),
  {
    loading: () => (
      <div className="border border-gray-300 rounded-lg p-8 bg-white">
        <Skeleton className="h-8 w-48 mb-4 mx-auto" />
        <Skeleton className="h-64 w-full" />
      </div>
    ),
    ssr: false,
  }
);

export const LazyForumEditor = dynamic(
  () =>
    import('@/components/forum/CreateReplyForm').then((mod) => ({
      default: mod.CreateReplyForm,
    })),
  {
    loading: () => (
      <div className="space-y-4">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-10 w-24" />
      </div>
    ),
    ssr: false,
  }
);

export const LazyCalendar = dynamic(
  () => import('@/components/ui/calendar').then((mod) => ({ default: mod.Calendar })),
  {
    loading: () => (
      <div className="border border-gray-300 rounded-lg p-4">
        <Skeleton className="h-6 w-32 mb-4 mx-auto" />
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-10" />
          ))}
        </div>
      </div>
    ),
    ssr: false,
  }
);

export const LazyLottieAnimation = dynamic(
  () =>
    import('@/components/animations/LottieAnimation').then((mod) => ({
      default: mod.LottieAnimation,
    })),
  {
    loading: () => <Skeleton className="h-64 w-64 mx-auto" />,
    ssr: false,
  }
);

export const LazyConfetti = dynamic(
  () =>
    import('@/components/ui/CelebrationConfetti').then((mod) => ({
      default: mod.CelebrationConfetti,
    })),
  {
    loading: () => null,
    ssr: false,
  }
);
