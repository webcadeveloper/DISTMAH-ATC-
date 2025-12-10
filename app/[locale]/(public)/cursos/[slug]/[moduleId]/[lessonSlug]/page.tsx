import { getLesson, getCourse, getAllCourses } from '@/lib/course-loader';
import { notFound } from 'next/navigation';
import LessonPageClient from '@/components/LessonPageClient';

export const revalidate = 3600;

export async function generateStaticParams() {
  const courses = await getAllCourses();

  const paths: { locale: string; slug: string; moduleId: string; lessonSlug: string }[] = [];

  for (const courseMetadata of courses) {
    const course = await getCourse(courseMetadata.slug);
    if (!course) continue;

    for (const module of course.modules) {
      for (const lesson of module.lessons) {
        paths.push({
          locale: 'es',
          slug: course.slug,
          moduleId: module.id,
          lessonSlug: lesson.slug,
        });
      }
    }
  }

  return paths;
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; moduleId: string; lessonSlug: string }>;
}) {
  const { slug, moduleId, lessonSlug } = await params;
  const lesson = await getLesson(slug, moduleId, lessonSlug);
  const course = await getCourse(slug);

  if (!lesson || !course) {
    notFound();
  }

  const userId = 'mock-user-id';
  const courseId = course.id || 'mock-course-id';
  const lessonId = lesson.id || 'mock-lesson-id';

  return (
    <LessonPageClient
      lesson={lesson}
      course={course}
      moduleId={moduleId}
      lessonSlug={lessonSlug}
      userId={userId}
      courseId={courseId}
      lessonId={lessonId}
      initialCompleted={false}
    />
  );
}
