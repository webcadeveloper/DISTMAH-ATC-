import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// POST - Crear nueva lección
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string }> }
) {
  try {
    const { slug, moduleId } = await params;
    const body = await request.json();
    const { lessonSlug, titulo, descripcion, duracion, tipo, orden } = body;

    if (!lessonSlug) {
      return NextResponse.json({
        error: 'Missing lessonSlug'
      }, { status: 400 });
    }

    const leccionesPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId,
      'lecciones'
    );

    // Crear carpeta de lecciones si no existe
    fs.mkdirSync(leccionesPath, { recursive: true });

    const lessonPath = path.join(leccionesPath, `${lessonSlug}.md`);

    // Verificar que la lección no exista
    if (fs.existsSync(lessonPath)) {
      return NextResponse.json({
        error: 'Lesson already exists',
        details: `Lesson ${lessonSlug} already exists`
      }, { status: 409 });
    }

    // Crear frontmatter
    const frontmatter = {
      titulo: titulo || 'Nueva Lección',
      descripcion: descripcion || '',
      duracion: duracion || '',
      tipo: tipo || 'lectura',
      orden: orden || 1,
      objetivos: []
    };

    // Crear contenido inicial
    const content = `# ${frontmatter.titulo}

${frontmatter.descripcion}

## Objetivos de Aprendizaje

- Objetivo 1
- Objetivo 2
- Objetivo 3

## Contenido

Escribe aquí el contenido de la lección...

## Ejercicios

1. Ejercicio 1
2. Ejercicio 2

## Recursos Adicionales

- [Recurso 1](url)
- [Recurso 2](url)
`;

    // Generar archivo Markdown
    const fileContent = matter.stringify(content, frontmatter);
    fs.writeFileSync(lessonPath, fileContent, 'utf-8');

    // Log de creación para auditoría
    const logPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      '.changelog.json'
    );

    let changelog: any[] = [];
    if (fs.existsSync(logPath)) {
      changelog = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
    }

    changelog.push({
      timestamp: new Date().toISOString(),
      action: 'create_lesson',
      moduleId,
      lessonSlug,
      titulo
    });

    // Mantener solo los últimos 100 cambios
    if (changelog.length > 100) {
      changelog = changelog.slice(-100);
    }

    fs.writeFileSync(logPath, JSON.stringify(changelog, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Lección creada exitosamente',
      lessonSlug,
      path: lessonPath
    });
  } catch (error) {
    console.error('Error creating lesson:', error);
    return NextResponse.json({
      error: 'Failed to create lesson',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
