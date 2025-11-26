import { NextRequest, NextResponse } from 'next/server';
import { getCourse } from '@/lib/course-loader';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const course = await getCourse(id);

    if (!course) {
      return NextResponse.json(
        { error: 'Curso no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error('Error loading course:', error);
    return NextResponse.json(
      { error: 'Error al cargar curso' },
      { status: 500 }
    );
  }
}
