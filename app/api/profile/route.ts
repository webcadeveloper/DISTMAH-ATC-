import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      country: true,
      city: true,
      bio: true,
      avatar: true,
      linkedIn: true,
      github: true,
      institution: true,
      profession: true,
      yearsExperience: true,
      language: true,
      timezone: true,
      notifications: true,
      newsletter: true,
      createdAt: true,
      _count: {
        select: {
          enrollments: true,
          certificates: true,
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  const allowedFields = [
    'name',
    'phoneNumber',
    'country',
    'city',
    'bio',
    'linkedIn',
    'github',
    'institution',
    'profession',
    'yearsExperience',
    'language',
    'timezone',
    'notifications',
    'newsletter',
  ];

  const updateData: Record<string, any> = {};
  for (const field of allowedFields) {
    if (body[field] !== undefined) {
      updateData[field] = body[field];
    }
  }

  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: updateData,
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      country: true,
      city: true,
      bio: true,
      avatar: true,
      linkedIn: true,
      github: true,
      institution: true,
      profession: true,
      yearsExperience: true,
      language: true,
      timezone: true,
      notifications: true,
      newsletter: true,
    },
  });

  return NextResponse.json(user);
}
