import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.enrollment.count();
  console.log('Total enrollments:', count);

  const enrollments = await prisma.enrollment.findMany({
    take: 10,
    include: {
      course: { select: { title: true } },
      user: { select: { name: true, email: true } }
    }
  });

  console.log('\nMuestra de enrollments:');
  enrollments.forEach(e => {
    console.log(`${e.user.email} -> ${e.course.title} (${e.status})`);
  });

  await prisma.$disconnect();
}
main();
