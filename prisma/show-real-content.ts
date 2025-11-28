import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const lessons = await prisma.lesson.findMany({
    take: 5,
    include: {
      module: {
        include: { course: true }
      }
    }
  });

  for (const l of lessons) {
    console.log('========================================');
    console.log('CURSO:', l.module.course.title);
    console.log('LECCION:', l.title);
    console.log('CONTENIDO richText:');
    console.log(l.richText ? l.richText.substring(0, 500) : 'SIN CONTENIDO');
    console.log('');
  }

  await prisma.$disconnect();
}

main();
