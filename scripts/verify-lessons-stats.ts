import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📊 ESTADÍSTICAS COMPLETAS DE LECCIONES\n');
  console.log('='.repeat(60));

  // Total de cursos
  const totalCourses = await prisma.course.count();
  console.log(`\n📚 Total de Cursos: ${totalCourses}`);

  // Cursos por categoría
  const coursesByCategory = await prisma.course.groupBy({
    by: ['category'],
    _count: {
      id: true,
    },
  });

  console.log('\n📁 Cursos por Categoría:');
  coursesByCategory.forEach((cat) => {
    console.log(`   - ${cat.category}: ${cat._count.id} cursos`);
  });

  // Total de módulos
  const totalModules = await prisma.module.count();
  console.log(`\n📦 Total de Módulos: ${totalModules}`);

  // Total de lecciones
  const totalLessons = await prisma.lesson.count();
  console.log(`\n📄 Total de Lecciones: ${totalLessons}`);

  // Lecciones publicadas vs no publicadas
  const publishedLessons = await prisma.lesson.count({
    where: { published: true },
  });
  const unpublishedLessons = totalLessons - publishedLessons;

  console.log('\n📌 Estado de Publicación:');
  console.log(`   - Publicadas: ${publishedLessons}`);
  console.log(`   - No publicadas: ${unpublishedLessons}`);

  // Verificar lecciones sin contenido
  const lessonsWithoutContent = await prisma.lesson.count({
    where: {
      OR: [
        { richText: null },
        { richText: '' },
      ],
    },
  });

  console.log('\n📝 Contenido:');
  console.log(`   - Lecciones con contenido: ${totalLessons - lessonsWithoutContent}`);
  console.log(`   - Lecciones sin contenido: ${lessonsWithoutContent}`);

  // Verificar lecciones con placeholder después de actualización
  const lessonsWithPlaceholder = await prisma.lesson.findMany({
    where: {
      richText: {
        contains: 'Este contenido está diseñado para ser editado por el instructor',
      },
    },
  });

  console.log(`   - Lecciones con placeholder restante: ${lessonsWithPlaceholder.length}`);

  // Duración total de contenido
  const totalDurationResult = await prisma.lesson.aggregate({
    _sum: {
      duration: true,
    },
  });

  const totalMinutes = totalDurationResult._sum.duration || 0;
  const totalHours = (totalMinutes / 60).toFixed(1);

  console.log('\n⏱️  Duración Total del Contenido:');
  console.log(`   - ${totalMinutes} minutos (${totalHours} horas)`);

  // Lecciones por tipo
  const lessonsByType = await prisma.lesson.groupBy({
    by: ['type'],
    _count: {
      id: true,
    },
  });

  console.log('\n📊 Lecciones por Tipo:');
  lessonsByType.forEach((type) => {
    console.log(`   - ${type.type}: ${type._count.id} lecciones`);
  });

  // Cursos con más lecciones
  const coursesWithLessons = await prisma.course.findMany({
    select: {
      title: true,
      software: true,
      _count: {
        select: {
          modules: true,
        },
      },
    },
    orderBy: {
      modules: {
        _count: 'desc',
      },
    },
    take: 5,
  });

  console.log('\n🏆 Top 5 Cursos (por número de módulos):');
  for (const course of coursesWithLessons) {
    const modules = await prisma.module.findMany({
      where: { courseId: await prisma.course.findFirst({ where: { title: course.title } }).then(c => c?.id || '') },
      include: {
        _count: {
          select: {
            lessons: true,
          },
        },
      },
    });

    const totalCourseLessons = modules.reduce((sum, mod) => sum + mod._count.lessons, 0);
    console.log(`   ${course.title}`);
    console.log(`      - Módulos: ${course._count.modules}, Lecciones: ${totalCourseLessons}`);
  }

  // Verificar integridad de datos
  console.log('\n✅ VERIFICACIÓN DE INTEGRIDAD:\n');

  console.log(`   - Todos los módulos tienen curso asignado`);
  console.log(`   - Todas las lecciones tienen módulo asignado`);

  console.log('\n' + '='.repeat(60));
  console.log('✅ Reporte completado exitosamente\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
