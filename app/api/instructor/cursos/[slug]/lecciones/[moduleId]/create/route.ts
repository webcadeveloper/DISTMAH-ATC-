import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST - Crear nueva lección
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string }> }
) {
  try {
    const { moduleId } = await params;
    const body = await request.json();
    const { titulo, descripcion, duracion, orden } = body;

    // Verificar que el módulo existe
    const module = await prisma.module.findUnique({
      where: { id: moduleId }
    });

    if (!module) {
      return NextResponse.json({
        error: 'Module not found'
      }, { status: 404 });
    }

    // Verificar que no exista una lección con el mismo orden
    const existingLesson = await prisma.lesson.findFirst({
      where: {
        moduleId,
        order: orden || 1
      }
    });

    if (existingLesson) {
      return NextResponse.json({
        error: 'Lesson with this order already exists',
        details: `Lesson order ${orden} already exists in this module`
      }, { status: 409 });
    }

    // Crear contenido inicial
    const content = `<h2>Objetivos de Aprendizaje</h2>
<ul>
  <li>Objetivo 1</li>
  <li>Objetivo 2</li>
  <li>Objetivo 3</li>
</ul>

<h2>Contenido</h2>
<p>Escribe aquí el contenido de la lección...</p>

<h2>Ejercicios</h2>
<ol>
  <li>Ejercicio 1</li>
  <li>Ejercicio 2</li>
</ol>

<h2>Recursos Adicionales</h2>
<ul>
  <li><a href="#">Recurso 1</a></li>
  <li><a href="#">Recurso 2</a></li>
</ul>`;

    // Obtener el siguiente número de lección
    const lastLesson = await prisma.lesson.findFirst({
      where: { moduleId },
      orderBy: { number: 'desc' }
    });

    const nextNumber = (lastLesson?.number || 0) + 1;

    // Crear lección en la base de datos
    const lesson = await prisma.lesson.create({
      data: {
        moduleId,
        number: nextNumber,
        title: titulo || 'Nueva Lección',
        description: descripcion || '',
        duration: duracion || 0,
        order: orden || 1,
        type: 'READING',
        richText: content,
        published: false
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Lección creada exitosamente',
      lessonId: lesson.id,
      lessonSlug: `leccion-${lesson.order}`
    });
  } catch (error) {
    console.error('Error creating lesson:', error);
    return NextResponse.json({
      error: 'Failed to create lesson',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
