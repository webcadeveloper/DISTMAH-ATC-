import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export async function generateCourseMetadata(slug: string): Promise<Metadata> {
  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      instructor: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!course) {
    return notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://distmah-atc.com';
  const courseUrl = `${baseUrl}/cursos/${slug}`;
  const imageUrl = course.thumbnail || course.image || `${baseUrl}/images/default-course.jpg`;

  return {
    title: `${course.title} | DISTMAH ATC`,
    description: course.description.substring(0, 160),
    keywords: [
      course.title,
      course.category,
      course.level,
      'Autodesk',
      'curso',
      'certificación',
      'Venezuela',
      'DISTMAH',
    ],
    authors: [{ name: course.instructor?.name || 'DISTMAH ATC' }],
    openGraph: {
      title: course.title,
      description: course.description.substring(0, 160),
      url: courseUrl,
      siteName: 'DISTMAH ATC',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      locale: 'es_VE',
      type: 'article',
      publishedTime: course.createdAt.toISOString(),
      modifiedTime: course.updatedAt.toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.description.substring(0, 160),
      images: [imageUrl],
    },
    alternates: {
      canonical: courseUrl,
    },
  };
}
