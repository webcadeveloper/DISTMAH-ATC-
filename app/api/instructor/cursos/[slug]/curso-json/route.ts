import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET - Obtener curso.json
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const cursoJsonPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      'curso.json'
    );

    if (!fs.existsSync(cursoJsonPath)) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    const cursoData = JSON.parse(fs.readFileSync(cursoJsonPath, 'utf-8'));
    return NextResponse.json(cursoData);
  } catch (error) {
    console.error('Error reading course:', error);
    return NextResponse.json({
      error: 'Failed to read course',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// PUT - Actualizar curso.json
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();

    const cursoJsonPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      'curso.json'
    );

    if (!fs.existsSync(cursoJsonPath)) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    // Crear backup antes de editar
    const backupPath = cursoJsonPath + '.backup';
    fs.copyFileSync(cursoJsonPath, backupPath);

    // Validar estructura básica
    if (!body.id || !body.titulo || !body.slug) {
      return NextResponse.json({
        error: 'Invalid course data',
        details: 'Missing required fields: id, titulo, or slug'
      }, { status: 400 });
    }

    // Guardar nueva versión con formato bonito
    fs.writeFileSync(
      cursoJsonPath,
      JSON.stringify(body, null, 2),
      'utf-8'
    );

    // Eliminar backup si todo salió bien
    if (fs.existsSync(backupPath)) {
      fs.unlinkSync(backupPath);
    }

    // Log de cambios para auditoría
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
      action: 'update_course_json',
      file: 'curso.json'
    });

    // Mantener solo los últimos 100 cambios
    if (changelog.length > 100) {
      changelog = changelog.slice(-100);
    }

    fs.writeFileSync(logPath, JSON.stringify(changelog, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Curso actualizado exitosamente'
    });
  } catch (error) {
    console.error('Error updating course:', error);

    // Intentar restaurar backup si algo salió mal
    const { slug } = await params;
    const cursoJsonPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      'curso.json'
    );
    const backupPath = cursoJsonPath + '.backup';

    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, cursoJsonPath);
      fs.unlinkSync(backupPath);
    }

    return NextResponse.json({
      error: 'Failed to update course',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// POST - Crear nuevo módulo en el curso
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { moduleId, moduleTitle, moduleDescription } = body;

    if (!moduleId) {
      return NextResponse.json({
        error: 'Invalid module data',
        details: 'Missing moduleId'
      }, { status: 400 });
    }

    const modulePath = path.join(
      process.cwd(),
      'public',
      'cursos',
      slug,
      moduleId
    );

    // Verificar que el módulo no exista
    if (fs.existsSync(modulePath)) {
      return NextResponse.json({
        error: 'Module already exists',
        details: `Module ${moduleId} already exists`
      }, { status: 409 });
    }

    // Crear estructura del módulo
    fs.mkdirSync(modulePath, { recursive: true });
    fs.mkdirSync(path.join(modulePath, 'lecciones'), { recursive: true });
    fs.mkdirSync(path.join(modulePath, 'imagenes'), { recursive: true });

    // Crear README.md del módulo
    const readmeContent = `---
titulo: "${moduleTitle || 'Nuevo Módulo'}"
descripcion: "${moduleDescription || 'Descripción del módulo'}"
---

# ${moduleTitle || 'Nuevo Módulo'}

${moduleDescription || 'Descripción del módulo'}
`;

    fs.writeFileSync(
      path.join(modulePath, 'README.md'),
      readmeContent,
      'utf-8'
    );

    return NextResponse.json({
      success: true,
      message: 'Módulo creado exitosamente',
      moduleId,
      path: modulePath
    });
  } catch (error) {
    console.error('Error creating module:', error);
    return NextResponse.json({
      error: 'Failed to create module',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
