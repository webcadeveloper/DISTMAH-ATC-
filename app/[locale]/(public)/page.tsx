import { prisma } from '@/lib/prisma';
import HomeClient from './HomeClient';

async function getFeaturedCourses() {
  const courses = await prisma.course.findMany({
    where: {
      status: 'PUBLISHED'
    },
    include: {
      _count: {
        select: {
          enrollments: true,
          modules: true,
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 6
  });

  // Convert Prisma Decimal to number for client component
  return courses.map(course => ({
    ...course,
    price: Number(course.price)
  }));
}

async function getStats() {
  const [totalCourses, totalStudents] = await Promise.all([
    prisma.course.count({
      where: { status: 'PUBLISHED' }
    }),
    prisma.enrollment.count()
  ]);

  return {
    totalCourses,
    totalStudents: totalStudents || 500 // Fallback to 500 if no enrollments
  };
}

export default async function Home() {
  const [courses, stats] = await Promise.all([
    getFeaturedCourses(),
    getStats()
  ]);

  return <HomeClient courses={courses} totalCourses={stats.totalCourses} totalStudents={stats.totalStudents} />;
}
