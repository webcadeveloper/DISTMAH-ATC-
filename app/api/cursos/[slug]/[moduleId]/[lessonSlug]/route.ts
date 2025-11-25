import { NextResponse } from 'next/server';
import { getLesson } from '@/lib/course-loader';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string; lessonSlug: string }> }
) {
  try {
    const { slug, moduleId, lessonSlug } = await params;
    const lesson = await getLesson(slug, moduleId, lessonSlug);

    if (!lesson) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    return NextResponse.json(lesson);
  } catch (error) {
    console.error('Error loading lesson:', error);
    return NextResponse.json({ error: 'Failed to load lesson' }, { status: 500 });
  }
}
