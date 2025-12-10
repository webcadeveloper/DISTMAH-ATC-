import { prisma } from '@/lib/prisma';

export async function verifyUserEnrollment(
  userId: string,
  courseId: string
): Promise<{ hasAccess: boolean; reason?: string }> {
  try {
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
      select: {
        status: true,
        expiresAt: true,
      },
    });

    if (!enrollment) {
      return { hasAccess: false, reason: 'No enrollment found' };
    }

    if (enrollment.status !== 'ACTIVE') {
      return {
        hasAccess: false,
        reason: `Enrollment status is ${enrollment.status}`,
      };
    }

    if (enrollment.expiresAt && new Date() > enrollment.expiresAt) {
      return { hasAccess: false, reason: 'Enrollment has expired' };
    }

    return { hasAccess: true };
  } catch (error) {
    console.error('Error verifying enrollment:', error);
    return { hasAccess: false, reason: 'Error verifying enrollment' };
  }
}

export async function getUserEnrollments(userId: string) {
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId,
        status: 'ACTIVE',
      },
      include: {
        course: {
          select: {
            id: true,
            slug: true,
            title: true,
            subtitle: true,
            category: true,
            level: true,
            duration: true,
            image: true,
            thumbnail: true,
            rating: true,
            reviewsCount: true,
            instructor: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
      orderBy: {
        enrolledAt: 'desc',
      },
    });

    return enrollments;
  } catch (error) {
    console.error('Error fetching user enrollments:', error);
    throw new Error('Failed to fetch enrollments');
  }
}
