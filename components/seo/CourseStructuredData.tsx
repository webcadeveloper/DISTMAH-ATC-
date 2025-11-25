import { JsonLd } from './JsonLd';
import { generateCourseStructuredData, generateBreadcrumbStructuredData } from '@/lib/seo-metadata';

interface CourseStructuredDataProps {
  course: {
    title: string;
    description: string;
    slug: string;
    price: number;
    currency: string;
    duration: number;
    instructor: { name: string } | null;
    category: string;
    level: string;
    image: string | null;
    rating: number | null;
    reviewsCount: number;
  };
}

export function CourseStructuredData({ course }: CourseStructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://distmah-atc.com';
  const courseUrl = `${baseUrl}/cursos/${course.slug}`;

  const courseData = generateCourseStructuredData({
    name: course.title,
    description: course.description,
    provider: 'DISTMAH ATC',
    image: course.image || `${baseUrl}/images/default-course.jpg`,
    price: course.price,
    currency: course.currency,
    duration: `PT${course.duration}H`,
    instructor: course.instructor?.name || 'DISTMAH ATC',
    category: course.category,
    level: course.level,
    url: courseUrl,
    rating: course.rating || undefined,
    reviewCount: course.reviewsCount || undefined,
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Inicio', url: baseUrl },
    { name: 'Cursos', url: `${baseUrl}/cursos` },
    { name: course.title, url: courseUrl },
  ]);

  return (
    <>
      <JsonLd data={courseData} />
      <JsonLd data={breadcrumbData} />
    </>
  );
}
