import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const lessons = await prisma.lesson.findMany({
    where: {
      module: {
        course: {
          title: { contains: 'AutoCAD 2D 2026 - Nivel' }
        }
      }
    },
    include: {
      module: { include: { course: true } }
    }
  });

  console.log('Total lecciones:', lessons.length);
  for (const l of lessons) {
    const len = l.richText?.length || 0;
    console.log(`${l.title} - richText length: ${len}`);
  }

  await prisma.$disconnect();
}
main();
