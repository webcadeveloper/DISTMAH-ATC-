import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { writeFile } from 'fs/promises';

// POST - Subir archivos de assignment
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const assignmentId = formData.get('assignmentId') as string;
    const userId = formData.get('userId') as string;
    const type = formData.get('type') as string; // 'reference' | 'submission'

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!assignmentId || !userId || !type) {
      return NextResponse.json({
        error: 'assignmentId, userId, and type are required'
      }, { status: 400 });
    }

    // Validar tipo de archivo
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
      'application/msword', // .doc
      'application/zip',
      'application/x-zip-compressed',
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      // Archivos CAD
      'application/acad', // .dwg
      'application/x-autocad',
      'image/vnd.dwg',
      'application/x-dwg',
      // Revit
      'application/x-revit'
    ];

    // Extensiones permitidas adicionales
    const allowedExtensions = ['.dwg', '.rvt', '.nwd', '.nwc', '.pdf', '.docx', '.doc', '.zip', '.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const fileExtension = path.extname(file.name).toLowerCase();

    const isValidType = allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension);

    if (!isValidType) {
      return NextResponse.json({
        error: 'Invalid file type',
        details: 'Allowed types: PDF, DOCX, DWG, RVT, ZIP, and images'
      }, { status: 400 });
    }

    // Validar tamaño (máximo 100MB)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      return NextResponse.json({
        error: 'File too large',
        details: 'Maximum file size is 100MB'
      }, { status: 400 });
    }

    // Determinar carpeta de destino
    const uploadDir = type === 'reference'
      ? path.join(process.cwd(), 'public', 'assignments', assignmentId, 'references')
      : path.join(process.cwd(), 'public', 'assignments', assignmentId, 'submissions', userId);

    // Crear carpeta si no existe
    fs.mkdirSync(uploadDir, { recursive: true });

    // Generar nombre único
    const timestamp = Date.now();
    const sanitizedName = file.name
      .replace(/[^a-z0-9.-]/gi, '_')
      .toLowerCase()
      .replace(/_{2,}/g, '_');

    const fileName = `${timestamp}-${sanitizedName}`;
    const filePath = path.join(uploadDir, fileName);

    // Guardar archivo
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Retornar URL
    const publicUrl = type === 'reference'
      ? `/assignments/${assignmentId}/references/${fileName}`
      : `/assignments/${assignmentId}/submissions/${userId}/${fileName}`;

    return NextResponse.json({
      success: true,
      fileName,
      url: publicUrl,
      size: file.size,
      type: file.type || 'application/octet-stream',
      uploadedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({
      error: 'Failed to upload file',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE - Eliminar archivo
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get('fileName');
    const assignmentId = searchParams.get('assignmentId');
    const userId = searchParams.get('userId');
    const type = searchParams.get('type'); // 'reference' | 'submission'

    if (!fileName || !assignmentId || !type) {
      return NextResponse.json({
        error: 'Missing required parameters'
      }, { status: 400 });
    }

    const fileDir = type === 'reference'
      ? path.join(process.cwd(), 'public', 'assignments', assignmentId, 'references')
      : path.join(process.cwd(), 'public', 'assignments', assignmentId, 'submissions', userId!);

    const filePath = path.join(fileDir, fileName);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Mover a papelera en lugar de eliminar
    const trashPath = path.join(
      process.cwd(),
      'public',
      'assignments',
      '.trash',
      assignmentId,
      type,
      userId || ''
    );

    fs.mkdirSync(trashPath, { recursive: true });

    const timestamp = Date.now();
    const targetPath = path.join(trashPath, `${timestamp}-${fileName}`);

    fs.renameSync(filePath, targetPath);

    return NextResponse.json({
      success: true,
      message: 'File moved to trash',
      trashPath: targetPath
    });
  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json({
      error: 'Failed to delete file',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
