import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const lesson = await prisma.lesson.findFirst({
    where: {
      title: {
        contains: 'Fundamentos de Modelado 3D - Parte 1',
      },
    },
    include: {
      module: {
        include: {
          course: true,
        },
      },
    },
  });

  console.log('=== EJEMPLO DE CONTENIDO GENERADO ===\n');
  console.log('Curso:', lesson?.module.course.title);
  console.log('Software:', lesson?.module.course.software);
  console.log('Categoría:', lesson?.module.course.category);
  console.log('Nivel:', lesson?.module.course.level);
  console.log('\nMódulo:', lesson?.module.title);
  console.log('Lección:', lesson?.title);
  console.log('Duración:', lesson?.duration, 'minutos');
  console.log('\n=== CONTENIDO HTML COMPLETO ===\n');
  console.log(lesson?.richText);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
