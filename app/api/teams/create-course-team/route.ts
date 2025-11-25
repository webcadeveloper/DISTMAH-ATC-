import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { TeamsService } from '@/lib/microsoft/teams-service';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || session.user.role !== 'INSTRUCTOR') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { courseId } = await req.json();

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      instructor: { select: { m365UserId: true } },
      enrollments: {
        where: { status: 'ACTIVE' },
        include: { user: { select: { m365UserId: true } } },
      },
    },
  });

  if (!course || !course.instructor.m365UserId) {
    return NextResponse.json({ error: 'Course or instructor not found' }, { status: 404 });
  }

  const studentIds = course.enrollments
    .map(e => e.user.m365UserId)
    .filter(Boolean) as string[];

  const team = await TeamsService.createCourseTeam({
    courseName: course.title,
    description: course.description,
    instructorId: course.instructor.m365UserId,
    studentIds,
  });

  await prisma.course.update({
    where: { id: courseId },
    data: { m365TeamId: team.id },
  });

  return NextResponse.json({ success: true, team });
}
