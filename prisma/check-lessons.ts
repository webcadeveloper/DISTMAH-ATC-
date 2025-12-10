import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function check() {
  const courses = await prisma.course.findMany({
    include: {
      modules: {
        include: {
          lessons: true
        }
      }
    }
  });

  console.log('=== RESUMEN DE CURSOS Y LECCIONES ===\n');

  let totalLessons = 0;
  let lessonsWithContent = 0;
  let lessonsWithPlaceholder = 0;

  for (const course of courses) {
    let courseLessons = 0;
    let courseWithContent = 0;

    for (const mod of course.modules) {
      for (const lesson of mod.lessons) {
        totalLessons++;
        courseLessons++;

        const hasRealContent = lesson.richText &&
          lesson.richText.length > 500 &&
          !lesson.richText.includes('Contenido pendiente') &&
          !lesson.richText.includes('El instructor agregará');

        if (hasRealContent) {
          lessonsWithContent++;
          courseWithContent++;
        } else {
          lessonsWithPlaceholder++;
        }
      }
    }

    console.log(`${course.title}: ${courseLessons} lecciones (${courseWithContent} con contenido real)`);
  }

  console.log('\n=== TOTALES ===');
  console.log(`Total lecciones: ${totalLessons}`);
  console.log(`Con contenido real: ${lessonsWithContent}`);
  console.log(`Con placeholder: ${lessonsWithPlaceholder}`);

  // Muestra de contenido placeholder
  console.log('\n=== MUESTRA DE LECCIÓN CON PLACEHOLDER ===');
  const sample = await prisma.lesson.findFirst({
    where: {
      OR: [
        { richText: { contains: 'Contenido pendiente' } },
        { richText: { contains: 'El instructor agregará' } }
      ]
    },
    include: {
      module: {
        include: { course: true }
      }
    }
  });

  if (sample) {
    console.log(`Curso: ${sample.module.course.title}`);
    console.log(`Módulo: ${sample.module.title}`);
    console.log(`Lección: ${sample.title}`);
    console.log(`Contenido (primeros 500 chars):\n${sample.richText?.substring(0, 500)}`);
  }

  await prisma.$disconnect();
}

check().catch(console.error);
