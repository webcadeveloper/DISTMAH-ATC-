import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env.local') });
const prisma = new PrismaClient();

async function deleteDuplicatesForce() {
  try {
    console.log('🗑️  ELIMINACIÓN FORZADA DE CURSOS DUPLICADOS\n');
    console.log('='.repeat(80));

    const coursesToDelete = [
      { id: '4d063d8e-c8eb-47b8-9863-c88d7a38d9b5', name: 'AutoCAD Tridimensional 3D' },
      { id: '2f9fb399-7ac7-4320-9fdc-b48d486a220b', name: 'AutoCAD Básico' },
      { id: 'f1a9b859-26d3-445f-a330-e8b760d9e49c', name: 'Autodesk Civil 3D - Curso Avanzado' },
    ];

    for (const course of coursesToDelete) {
      console.log(`\n📦 Procesando: ${course.name}`);
      console.log(`   ID: ${course.id}\n`);

      try {
        // 1. Eliminar inscripciones (enrollments)
        const deletedEnrollments = await prisma.enrollment.deleteMany({
          where: { courseId: course.id }
        });
        console.log(`   ✅ Enrollments eliminados: ${deletedEnrollments.count}`);

        // 2. Eliminar progreso de lecciones
        const deletedProgress = await prisma.lessonProgress.deleteMany({
          where: {
            lesson: {
              module: {
                courseId: course.id
              }
            }
          }
        });
        console.log(`   ✅ Progreso de lecciones eliminado: ${deletedProgress.count}`);

        // 3. Eliminar lecciones
        const deletedLessons = await prisma.lesson.deleteMany({
          where: {
            module: {
              courseId: course.id
            }
          }
        });
        console.log(`   ✅ Lecciones eliminadas: ${deletedLessons.count}`);

        // 4. Eliminar módulos
        const deletedModules = await prisma.module.deleteMany({
          where: { courseId: course.id }
        });
        console.log(`   ✅ Módulos eliminados: ${deletedModules.count}`);

        // 5. Eliminar el curso
        const deletedCourse = await prisma.course.delete({
          where: { id: course.id }
        });
        console.log(`   ✅ Curso eliminado: ${deletedCourse.title}`);
        console.log(`   ✨ Eliminación completa exitosa\n`);

      } catch (error: any) {
        console.log(`   ❌ Error eliminando ${course.name}: ${error.message}\n`);
      }
    }

    // Verificación final
    console.log('='.repeat(80));
    console.log('\n📊 VERIFICACIÓN FINAL\n');

    const remainingCourses = await prisma.course.count();
    console.log(`✅ Total de cursos restantes: ${remainingCourses}`);

    const coursesList = await prisma.course.findMany({
      select: {
        title: true,
        slug: true,
      },
      orderBy: { title: 'asc' }
    });

    console.log('\n📚 Lista de cursos finales:\n');
    coursesList.forEach((c, idx) => {
      console.log(`${idx + 1}. ${c.title} (${c.slug})`);
    });

    console.log('\n' + '='.repeat(80));
    console.log('✅ ELIMINACIÓN COMPLETADA\n');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteDuplicatesForce();
