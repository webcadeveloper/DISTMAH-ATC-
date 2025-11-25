import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { OneDriveService } from '@/lib/microsoft/onedrive-service';
import { SharePointService } from '@/lib/microsoft/sharepoint-service';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const source = searchParams.get('source');
  const path = searchParams.get('path') || '';
  const courseId = searchParams.get('courseId');

  let files;

  if (source === 'sharepoint' && courseId) {
    files = await SharePointService.getCourseMaterials(courseId);
  } else {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { m365UserId: true },
    });

    if (!user?.m365UserId) {
      return NextResponse.json({ error: 'User not linked to M365' }, { status: 400 });
    }

    files = await OneDriveService.listFiles(user.m365UserId, path);
  }

  return NextResponse.json(files);
}
