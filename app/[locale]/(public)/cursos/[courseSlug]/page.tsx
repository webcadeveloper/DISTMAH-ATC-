import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import CourseDetailClient from './CourseDetailClient';

interface CourseDetailPageProps {
  params: Promise<{
    locale: string;
    courseSlug: string;
  }>;
}

export async function generateStaticParams() {
  return COURSES_2026.map((course) => ({
    courseSlug: course.slug,
  }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const course = COURSES_2026.find((c) => c.slug === resolvedParams.courseSlug);

  if (!course) {
    return {
      title: 'Curso no encontrado | DISTMAH ATC',
      description: 'El curso que buscas no está disponible.',
    };
  }

  return {
    title: `${course.title} | DISTMAH ATC`,
    description: course.description.substring(0, 160),
    keywords: [
      course.title,
      course.software,
      course.category,
      course.level,
      'Autodesk',
      'DISTMAH',
      'ATC',
      'certificación',
      ...course.tags,
    ],
    openGraph: {
      title: course.title,
      description: course.subtitle,
      images: [course.image],
      type: 'website',
    },
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const resolvedParams = await params;
  const course = COURSES_2026.find((c) => c.slug === resolvedParams.courseSlug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
