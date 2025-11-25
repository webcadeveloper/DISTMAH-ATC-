import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { TeamsService } from '@/lib/microsoft/teams-service';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { subject, startDateTime, endDateTime, participants } = await req.json();

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { m365UserId: true },
  });

  if (!user?.m365UserId) {
    return NextResponse.json({ error: 'User not linked to M365' }, { status: 400 });
  }

  const meeting = await TeamsService.createOnlineMeeting(user.m365UserId, {
    subject,
    startDateTime: new Date(startDateTime),
    endDateTime: new Date(endDateTime),
    participants,
  });

  return NextResponse.json(meeting);
}
