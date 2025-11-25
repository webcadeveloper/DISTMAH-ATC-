import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { OneDriveService } from '@/lib/microsoft/onedrive-service';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { fileId, type } = await req.json();

  if (!fileId) {
    return NextResponse.json({ error: 'File ID required' }, { status: 400 });
  }

  const user = await (prisma as any).user.findUnique({
    where: { id: session.user.id },
    select: { m365UserId: true },
  });

  if (!user?.m365UserId) {
    return NextResponse.json({ error: 'User not linked to M365' }, { status: 400 });
  }

  const link = await OneDriveService.createSharingLink(
    user.m365UserId,
    fileId,
    type || 'view'
  );

  return NextResponse.json({ link });
}
