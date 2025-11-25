import { NextResponse } from 'next/server';
import { getCourse } from '@/lib/course-loader';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const course = await getCourse(slug);

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error('Error loading course:', error);
    return NextResponse.json({ error: 'Failed to load course' }, { status: 500 });
  }
}
