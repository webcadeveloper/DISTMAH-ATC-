import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { writeFile } from 'fs/promises';

// POST - Subir imagen
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const moduleId = formData.get('moduleId') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validar tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({
        error: 'Invalid file type',
        details: 'Only JPEG, PNG, GIF, WebP, and SVG images are allowed'
      }, { status: 400 });
    }

    // Validar tamaño (máximo 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({
        error: 'File too large',
        details: 'Maximum file size is 5MB'
      }, { status: 400 });
    }

    // Determinar carpeta de imágenes
    const imageDir = moduleId
      ? path.join(process.cwd(), 'public', 'cursos', slug, moduleId, 'imagenes')
      : path.join(process.cwd(), 'public', 'cursos', slug, 'imagenes');

    // Crear carpeta si no existe
    fs.mkdirSync(imageDir, { recursive: true });

    // Generar nombre único para evitar colisiones
    const timestamp = Date.now();
    const sanitizedName = file.name
      .replace(/[^a-z0-9.-]/gi, '_')
      .toLowerCase()
      .replace(/_{2,}/g, '_'); // Reemplazar múltiples guiones bajos por uno solo

    const fileName = `${timestamp}-${sanitizedName}`;
    const filePath = path.join(imageDir, fileName);

    // Guardar archivo
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Retornar URLs
    const relativeUrl = moduleId
      ? `./imagenes/${fileName}`
      : `../imagenes/${fileName}`;

    const fullUrl = moduleId
      ? `/cursos/${slug}/${moduleId}/imagenes/${fileName}`
      : `/cursos/${slug}/imagenes/${fileName}`;

    // Log de subida para auditoría
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
      action: 'upload_image',
      file: fileName,
      moduleId: moduleId || null,
      size: file.size,
      type: file.type
    });

    // Mantener solo los últimos 100 cambios
    if (changelog.length > 100) {
      changelog = changelog.slice(-100);
    }

    fs.writeFileSync(logPath, JSON.stringify(changelog, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      fileName: fileName,
      url: relativeUrl,
      fullUrl: fullUrl,
      size: file.size,
      type: file.type
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({
      error: 'Failed to upload image',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// GET - Listar imágenes del curso/módulo
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const moduleId = searchParams.get('moduleId');

    const imageDir = moduleId
      ? path.join(process.cwd(), 'public', 'cursos', slug, moduleId, 'imagenes')
      : path.join(process.cwd(), 'public', 'cursos', slug, 'imagenes');

    if (!fs.existsSync(imageDir)) {
      return NextResponse.json({
        images: []
      });
    }

    const files = fs.readdirSync(imageDir);
    const images = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext);
      })
      .map(file => {
        const filePath = path.join(imageDir, file);
        const stats = fs.statSync(filePath);

        const fullUrl = moduleId
          ? `/cursos/${slug}/${moduleId}/imagenes/${file}`
          : `/cursos/${slug}/imagenes/${file}`;

        return {
          name: file,
          url: fullUrl,
          size: stats.size,
          modified: stats.mtime.toISOString()
        };
      })
      .sort((a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime());

    return NextResponse.json({
      images,
      count: images.length
    });
  } catch (error) {
    console.error('Error listing images:', error);
    return NextResponse.json({
      error: 'Failed to list images',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Eliminar imagen
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get('fileName');
    const moduleId = searchParams.get('moduleId');

    if (!fileName) {
      return NextResponse.json({
        error: 'Missing fileName parameter'
      }, { status: 400 });
    }

    const imageDir = moduleId
      ? path.join(process.cwd(), 'public', 'cursos', slug, moduleId, 'imagenes')
      : path.join(process.cwd(), 'public', 'cursos', slug, 'imagenes');

    const filePath = path.join(imageDir, fileName);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    // Mover a papelera en lugar de eliminar
    const trashPath = path.join(
      process.cwd(),
      'public',
      'cursos',
      '.trash',
      slug,
      moduleId || '',
      'imagenes'
    );

    fs.mkdirSync(trashPath, { recursive: true });

    const timestamp = Date.now();
    const targetPath = path.join(trashPath, `${timestamp}-${fileName}`);

    fs.renameSync(filePath, targetPath);

    return NextResponse.json({
      success: true,
      message: 'Imagen movida a papelera',
      trashPath: targetPath
    });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json({
      error: 'Failed to delete image',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
