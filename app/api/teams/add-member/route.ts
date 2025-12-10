import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { TeamsService } from '@/lib/microsoft/teams-service';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || session.user.role !== 'INSTRUCTOR') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { courseId, userId, role } = await req.json();

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: { m365TeamId: true },
  });

  if (!course?.m365TeamId) {
    return NextResponse.json({ error: 'Course team not found' }, { status: 404 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { m365UserId: true },
  });

  if (!user?.m365UserId) {
    return NextResponse.json({ error: 'User not linked to M365' }, { status: 400 });
  }

  await TeamsService.addMemberToTeam(course.m365TeamId, user.m365UserId, role);

  return NextResponse.json({ success: true });
}
