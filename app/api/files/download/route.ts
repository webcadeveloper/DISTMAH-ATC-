import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { OneDriveService } from '@/lib/microsoft/onedrive-service';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const fileId = searchParams.get('fileId');

  if (!fileId) {
    return NextResponse.json({ error: 'File ID required' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { m365UserId: true },
  });

  if (!user?.m365UserId) {
    return NextResponse.json({ error: 'User not linked to M365' }, { status: 400 });
  }

  const buffer = await OneDriveService.downloadFile(user.m365UserId, fileId);

  return new NextResponse(buffer as any, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment',
    },
  });
}
