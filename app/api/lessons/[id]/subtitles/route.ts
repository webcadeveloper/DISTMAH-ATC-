import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const subtitles = await prisma.videoSubtitle.findMany({
      where: { lessonId: id },
      orderBy: { isDefault: 'desc' },
    });

    return NextResponse.json(subtitles);
  } catch (error) {
    console.error('Error fetching subtitles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subtitles' },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || session.user.role !== 'INSTRUCTOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const { language, label, fileUrl, isDefault } = await req.json();

    if (!language || !label || !fileUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (isDefault) {
      await prisma.videoSubtitle.updateMany({
        where: { lessonId: id },
        data: { isDefault: false },
      });
    }

    const subtitle = await prisma.videoSubtitle.create({
      data: {
        lessonId: id,
        language,
        label,
        fileUrl,
        isDefault: isDefault || false,
      },
    });

    return NextResponse.json(subtitle);
  } catch (error) {
    console.error('Error creating subtitle:', error);
    return NextResponse.json(
      { error: 'Failed to create subtitle' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || session.user.role !== 'INSTRUCTOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const subtitleId = searchParams.get('subtitleId');

    if (!subtitleId) {
      return NextResponse.json(
        { error: 'Subtitle ID required' },
        { status: 400 }
      );
    }

    await prisma.videoSubtitle.delete({
      where: { id: subtitleId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting subtitle:', error);
    return NextResponse.json(
      { error: 'Failed to delete subtitle' },
      { status: 500 }
    );
  }
}
