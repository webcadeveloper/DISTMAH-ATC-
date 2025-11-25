import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// GET - Obtener información del módulo
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string }> }
) {
  try {
    const { slug, moduleId } = await params;

    const modulePath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId
    );

    if (!fs.existsSync(modulePath)) {
      return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }

    const readmePath = path.join(modulePath, 'README.md');
    let moduleData: any = {
      frontmatter: {},
      content: ''
    };

    if (fs.existsSync(readmePath)) {
      const fileContent = fs.readFileSync(readmePath, 'utf-8');
      const { data, content } = matter(fileContent);
      moduleData = {
        frontmatter: data,
        content: content,
      };
    }

    // Listar lecciones del módulo
    const leccionesPath = path.join(modulePath, 'lecciones');
    let lecciones: string[] = [];

    if (fs.existsSync(leccionesPath)) {
      lecciones = fs.readdirSync(leccionesPath)
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace('.md', ''));
    }

    return NextResponse.json({
      ...moduleData,
      lecciones,
      path: modulePath
    });
  } catch (error) {
    console.error('Error reading module:', error);
    return NextResponse.json({
      error: 'Failed to read module',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// PUT - Actualizar módulo
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string }> }
) {
  try {
    const { slug, moduleId } = await params;
    const body = await request.json();
    const { frontmatter, content } = body;

    const modulePath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId
    );

    if (!fs.existsSync(modulePath)) {
      return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }

    const readmePath = path.join(modulePath, 'README.md');

    // Crear backup antes de editar
    const backupPath = readmePath + '.backup';
    if (fs.existsSync(readmePath)) {
      fs.copyFileSync(readmePath, backupPath);
    }

    // Generar nuevo contenido
    const newContent = matter.stringify(content, frontmatter);
    fs.writeFileSync(readmePath, newContent, 'utf-8');

    // Eliminar backup si todo salió bien
    if (fs.existsSync(backupPath)) {
      fs.unlinkSync(backupPath);
    }

    return NextResponse.json({
      success: true,
      message: 'Módulo actualizado exitosamente'
    });
  } catch (error) {
    console.error('Error updating module:', error);

    // Intentar restaurar backup si algo salió mal
    const { slug, moduleId } = await params;
    const readmePath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId,
      'README.md'
    );
    const backupPath = readmePath + '.backup';

    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, readmePath);
      fs.unlinkSync(backupPath);
    }

    return NextResponse.json({
      error: 'Failed to update module',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Eliminar módulo (mueve a papelera)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string; moduleId: string }> }
) {
  try {
    const { slug, moduleId } = await params;

    const modulePath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId
    );

    if (!fs.existsSync(modulePath)) {
      return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }

    // Mover a papelera en lugar de eliminar permanentemente
    const trashPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      '.trash',
      slug
    );

    fs.mkdirSync(trashPath, { recursive: true });

    const timestamp = Date.now();
    const targetPath = path.join(trashPath, `${timestamp}-${moduleId}`);

    fs.renameSync(modulePath, targetPath);

    return NextResponse.json({
      success: true,
      message: 'Módulo movido a papelera',
      trashPath: targetPath
    });
  } catch (error) {
    console.error('Error deleting module:', error);
    return NextResponse.json({
      error: 'Failed to delete module',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
