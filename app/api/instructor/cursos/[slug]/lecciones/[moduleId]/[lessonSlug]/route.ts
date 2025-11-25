import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// GET - Obtener contenido de lección para editar
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string; lessonSlug: string }> }
) {
  try {
    const { slug, moduleId, lessonSlug } = await params;

    const lessonPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId,
      'lecciones',
      `${lessonSlug}.md`
    );

    if (!fs.existsSync(lessonPath)) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    const fileContent = fs.readFileSync(lessonPath, 'utf-8');
    const { data, content } = matter(fileContent);

    return NextResponse.json({
      frontmatter: data,
      content: content,
      path: lessonPath,
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
    const { slug, moduleId, lessonSlug } = await params;
    const body = await request.json();
    const { frontmatter, content } = body;

    const lessonPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId,
      'lecciones',
      `${lessonSlug}.md`
    );

    // Crear backup antes de editar
    const backupPath = lessonPath + '.backup';
    if (fs.existsSync(lessonPath)) {
      fs.copyFileSync(lessonPath, backupPath);
    }

    // Generar nuevo archivo Markdown con frontmatter
    const newFileContent = matter.stringify(content, frontmatter);

    // Guardar archivo
    fs.writeFileSync(lessonPath, newFileContent, 'utf-8');

    // Eliminar backup si todo salió bien
    if (fs.existsSync(backupPath)) {
      fs.unlinkSync(backupPath);
    }

    return NextResponse.json({
      success: true,
      message: 'Lección actualizada exitosamente'
    });
  } catch (error) {
    console.error('Error updating lesson:', error);

    // Intentar restaurar backup si algo salió mal
    const { slug, moduleId, lessonSlug } = await params;
    const lessonPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId,
      'lecciones',
      `${lessonSlug}.md`
    );
    const backupPath = lessonPath + '.backup';

    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, lessonPath);
      fs.unlinkSync(backupPath);
    }

    return NextResponse.json({
      error: 'Failed to update lesson',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Eliminar lección
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string; lessonSlug: string }> }
) {
  try {
    const { slug, moduleId, lessonSlug } = await params;

    const lessonPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId,
      'lecciones',
      `${lessonSlug}.md`
    );

    if (!fs.existsSync(lessonPath)) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    // Mover a papelera en lugar de eliminar permanentemente
    const trashPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      '.trash',
      slug,
      moduleId,
      'lecciones'
    );

    fs.mkdirSync(trashPath, { recursive: true });

    const timestamp = Date.now();
    const targetPath = path.join(trashPath, `${timestamp}-${lessonSlug}.md`);

    fs.renameSync(lessonPath, targetPath);

    return NextResponse.json({
      success: true,
      message: 'Lección movida a papelera',
      trashPath: targetPath
    });
  } catch (error) {
    console.error('Error deleting lesson:', error);
    return NextResponse.json({
      error: 'Failed to delete lesson',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
