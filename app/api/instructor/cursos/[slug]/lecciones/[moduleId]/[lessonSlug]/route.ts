import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener contenido de lección para editar
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string; lessonSlug: string }> }
) {
  try {
    const { moduleId, lessonSlug } = await params;

    // Extraer número de lección de lessonSlug (ej: "leccion-1" -> 1)
    const lessonNumber = parseInt(lessonSlug.replace('leccion-', ''));

    const lesson = await prisma.lesson.findFirst({
      where: {
        moduleId,
        order: lessonNumber
      }
    });

    if (!lesson) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    return NextResponse.json({
      frontmatter: {
        titulo: lesson.title,
        descripcion: lesson.description || '',
        duracion: lesson.duration || 0
      },
      content: lesson.richText || '',
      lessonId: lesson.id,
    });
  } catch (error) {
    console.error('Error reading lesson:', error);
    return NextResponse.json({
      error: 'Failed to read lesson',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// PUT - Actualizar contenido de lección
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string; lessonSlug: string }> }
) {
  try {
    const { moduleId, lessonSlug } = await params;
    const body = await request.json();
    const { frontmatter, content } = body;

    // Extraer número de lección
    const lessonNumber = parseInt(lessonSlug.replace('leccion-', ''));

    // Actualizar lección en la base de datos
    const lesson = await prisma.lesson.updateMany({
      where: {
        moduleId,
        order: lessonNumber
      },
      data: {
        title: frontmatter.titulo,
        description: frontmatter.descripcion,
        duration: frontmatter.duracion,
        richText: content,
        updatedAt: new Date()
      }
    });

    if (lesson.count === 0) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Lección actualizada exitosamente'
    });
  } catch (error) {
    console.error('Error updating lesson:', error);
    return NextResponse.json({
      error: 'Failed to update lesson',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Eliminar lección (marcar como no publicada)
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string; lessonSlug: string }> }
) {
  try {
    const { moduleId, lessonSlug } = await params;

    // Extraer número de lección
    const lessonNumber = parseInt(lessonSlug.replace('leccion-', ''));

    // Marcar como no publicada en lugar de eliminar
    const lesson = await prisma.lesson.updateMany({
      where: {
        moduleId,
        order: lessonNumber
      },
      data: {
        published: false,
        updatedAt: new Date()
      }
    });

    if (lesson.count === 0) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Lección marcada como no publicada'
    });
  } catch (error) {
    console.error('Error deleting lesson:', error);
    return NextResponse.json({
      error: 'Failed to delete lesson',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
