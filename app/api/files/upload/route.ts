import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { OneDriveService } from '@/lib/microsoft/onedrive-service';
import { SharePointService } from '@/lib/microsoft/sharepoint-service';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get('file') as File;
  const destination = formData.get('destination') as string;
  const path = formData.get('path') as string;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  let uploadedFile;

  if (destination === 'sharepoint') {
    uploadedFile = await SharePointService.uploadCourseMaterial(
      path,
      file.name,
      buffer
    );
  } else {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { m365UserId: true },
    });

    if (!user?.m365UserId) {
      return NextResponse.json({ error: 'User not linked to M365' }, { status: 400 });
    }

    uploadedFile = await OneDriveService.uploadFile(
      user.m365UserId,
      path,
      file.name,
      buffer
    );
  }

  return NextResponse.json({ success: true, file: uploadedFile });
}
