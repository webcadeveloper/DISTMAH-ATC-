import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || session.user.role !== 'INSTRUCTOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const lessonId = formData.get('lessonId') as string;

    if (!file || !lessonId) {
      return NextResponse.json(
        { error: 'File and lessonId are required' },
        { status: 400 }
      );
    }

    const allowedExtensions = ['.vtt', '.srt'];
    const fileExtension = path.extname(file.name).toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      return NextResponse.json(
        { error: 'Only .vtt and .srt files are allowed' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'public', 'subtitles', lessonId);

    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const timestamp = Date.now();
    const filename = `${timestamp}${fileExtension}`;
    const filepath = path.join(uploadDir, filename);

    await writeFile(filepath, buffer);

    const url = `/subtitles/${lessonId}/${filename}`;

    return NextResponse.json({
      success: true,
      url,
      filename,
    });
  } catch (error) {
    console.error('Error uploading subtitle:', error);
    return NextResponse.json(
      { error: 'Failed to upload subtitle' },
      { status: 500 }
    );
  }
}
