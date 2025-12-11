import { NextResponse } from 'next/server';

// POST - Subir imagen a PostImages.org
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await params; // Validar que params existe
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validar tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({
        error: 'Invalid file type',
        details: 'Only JPEG, PNG, GIF, and WebP images are allowed'
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

    // Subir a PostImages.org
    const uploadFormData = new FormData();
    uploadFormData.append('upload', file);
    uploadFormData.append('token', process.env.POSTIMAGES_API_KEY || '');

    const postImagesResponse = await fetch('https://postimages.org/json/rr', {
      method: 'POST',
      body: uploadFormData,
    });

    if (!postImagesResponse.ok) {
      throw new Error('Failed to upload to PostImages');
    }

    const data = await postImagesResponse.json();

    if (data.status !== 'OK') {
      throw new Error(data.error || 'Upload failed');
    }

    // Retornar URL de PostImages
    const imageUrl = data.url;

    return NextResponse.json({
      success: true,
      url: imageUrl,
      fullUrl: imageUrl,
      size: file.size,
      type: file.type,
      provider: 'postimages'
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({
      error: 'Failed to upload image',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

