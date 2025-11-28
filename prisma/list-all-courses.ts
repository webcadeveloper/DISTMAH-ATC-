import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({
    include: {
      _count: { select: { modules: true } }
    }
  });

  console.log('=== TODOS LOS CURSOS EN LA BASE DE DATOS ===');
  console.log('Total cursos:', courses.length);
  console.log('');

  for (const c of courses) {
    const lessonCount = await prisma.lesson.count({
      where: { module: { courseId: c.id } }
    });
    console.log(`${c.title} - ${c._count.modules} modulos, ${lessonCount} lecciones`);
  }

  const totalLessons = await prisma.lesson.count();
  console.log('');
  console.log('TOTAL LECCIONES:', totalLessons);

  await prisma.$disconnect();
}
main();
