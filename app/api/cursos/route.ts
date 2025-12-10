import { NextResponse } from 'next/server';
import { getAllCourses } from '@/lib/course-loader';

export async function GET() {
  try {
    const courses = await getAllCourses();
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error loading courses:', error);
    return NextResponse.json({ error: 'Failed to load courses' }, { status: 500 });
  }
}
