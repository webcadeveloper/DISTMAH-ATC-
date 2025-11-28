import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Encontrar una lección de Civil 3D
  const civil3dLesson = await prisma.lesson.findFirst({
    where: {
      module: {
        course: {
          category: 'CIVIL3D',
        },
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

  console.log('=== EJEMPLO: CIVIL 3D 2026 ===\n');
  console.log('Curso:', civil3dLesson?.module.course.title);
  console.log('Software:', civil3dLesson?.module.course.software);
  console.log('Nivel:', civil3dLesson?.module.course.level);
  console.log('\nMódulo:', civil3dLesson?.module.title);
  console.log('Lección:', civil3dLesson?.title);
  console.log('\n--- CONTENIDO HTML ---\n');
  console.log(civil3dLesson?.richText?.substring(0, 1500) + '...\n');

  // Encontrar una lección de Revit
  const revitLesson = await prisma.lesson.findFirst({
    where: {
      module: {
        course: {
          category: 'REVIT',
        },
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

  console.log('\n=== EJEMPLO: REVIT 2026 ===\n');
  console.log('Curso:', revitLesson?.module.course.title);
  console.log('Software:', revitLesson?.module.course.software);
  console.log('Nivel:', revitLesson?.module.course.level);
  console.log('\nMódulo:', revitLesson?.module.title);
  console.log('Lección:', revitLesson?.title);
  console.log('\n--- CONTENIDO HTML ---\n');
  console.log(revitLesson?.richText?.substring(0, 1500) + '...\n');

  // Encontrar una lección de Navisworks
  const navisworksLesson = await prisma.lesson.findFirst({
    where: {
      module: {
        course: {
          category: 'NAVISWORKS',
        },
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

  console.log('\n=== EJEMPLO: NAVISWORKS 2026 ===\n');
  console.log('Curso:', navisworksLesson?.module.course.title);
  console.log('Software:', navisworksLesson?.module.course.software);
  console.log('Nivel:', navisworksLesson?.module.course.level);
  console.log('\nMódulo:', navisworksLesson?.module.title);
  console.log('Lección:', navisworksLesson?.title);
  console.log('\n--- CONTENIDO HTML ---\n');
  console.log(navisworksLesson?.richText?.substring(0, 1500) + '...\n');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
