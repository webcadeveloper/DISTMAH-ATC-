import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Buscar lección específica de Civil 3D Básico
  const lesson = await prisma.lesson.findFirst({
    where: {
      title: { contains: 'Introducción a Civil 3D 2026' },
      module: {
        course: {
          title: { contains: 'Civil 3D 2026' }
        }
      }
    },
    include: {
      module: {
        include: { course: true }
      }
    }
  });

  if (lesson) {
    console.log('=== LECCIÓN ENCONTRADA ===');
    console.log('Curso:', lesson.module.course.title);
    console.log('Módulo:', lesson.module.title);
    console.log('Lección:', lesson.title);
    console.log('richText length:', lesson.richText?.length || 0);
    console.log('\nContenido completo:');
    console.log(lesson.richText || 'SIN CONTENIDO');
  } else {
    console.log('Lección no encontrada');
  }

  // Verificar cuántas lecciones tienen el placeholder genérico
  const placeholderCount = await prisma.lesson.count({
    where: {
      OR: [
        { richText: { contains: 'Este contenido está diseñado para ser editado' } },
        { richText: { contains: '100% editable desde el panel' } }
      ]
    }
  });

  console.log('\n=== LECCIONES CON PLACEHOLDER GENÉRICO ===');
  console.log('Total:', placeholderCount);

  await prisma.$disconnect();
}

main();
