import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env.local') });
const prisma = new PrismaClient();

async function cleanupCourses() {
  try {
    console.log('🧹 LIMPIEZA DE CURSOS DUPLICADOS Y ACTUALIZACIÓN DE NOMBRES\n');
    console.log('='.repeat(80));

    // PASO 1: ELIMINAR CURSOS DUPLICADOS
    console.log('\n📋 PASO 1: ELIMINANDO CURSOS DUPLICADOS\n');

    const coursesToDelete = [
      { id: '4d063d8e-c8eb-47b8-9863-c88d7a38d9b5', name: 'AutoCAD Tridimensional 3D 2026' },
      { id: '2f9fb399-7ac7-4320-9fdc-b48d486a220b', name: 'AutoCAD 2026 Básico' },
      { id: 'f1a9b859-26d3-445f-a330-e8b760d9e49c', name: 'Civil 3D 2026 - Curso Avanzado' },
    ];

    for (const course of coursesToDelete) {
      try {
        // Primero eliminar módulos y lecciones (cascade debería hacerlo automático pero por seguridad)
        const deletedCourse = await prisma.course.delete({
          where: { id: course.id }
        });
        console.log(`   ✅ Eliminado: ${course.name} (ID: ${course.id})`);
      } catch (error: any) {
        if (error.code === 'P2025') {
          console.log(`   ⚠️  Curso ya eliminado: ${course.name}`);
        } else {
          console.log(`   ❌ Error eliminando ${course.name}: ${error.message}`);
        }
      }
    }

    // PASO 2: QUITAR "2026" DE TODOS LOS TÍTULOS Y SLUGS
    console.log('\n\n📋 PASO 2: ELIMINANDO "2026" DE TÍTULOS Y SLUGS\n');

    const allCourses = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        software: true,
      }
    });

    console.log(`📚 Cursos a actualizar: ${allCourses.length}\n`);

    for (const course of allCourses) {
      // Limpiar título (quitar " 2026", "2026 ", " 2026 - ", etc.)
      let newTitle = course.title
        .replace(/\s*2026\s*/g, ' ')  // Quitar "2026" con espacios
        .replace(/\s+/g, ' ')          // Normalizar espacios múltiples
        .trim();

      // Limpiar slug (quitar "-2026", "2026-", "_2026", etc.)
      let newSlug = course.slug
        .replace(/[-_]?2026[-_]?/g, '-')  // Quitar "2026" con guiones
        .replace(/--+/g, '-')             // Normalizar guiones múltiples
        .replace(/^-|-$/g, '')            // Quitar guiones al inicio/fin
        .toLowerCase();

      // Limpiar software (mantener solo el nombre base)
      let newSoftware = course.software
        .replace(/\s*2026\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      // Verificar si hay cambios
      const hasChanges =
        newTitle !== course.title ||
        newSlug !== course.slug ||
        newSoftware !== course.software;

      if (hasChanges) {
        try {
          await prisma.course.update({
            where: { id: course.id },
            data: {
              title: newTitle,
              slug: newSlug,
              software: newSoftware,
            }
          });

          console.log(`   ✅ Actualizado:`);
          if (course.title !== newTitle) {
            console.log(`      Título: "${course.title}" → "${newTitle}"`);
          }
          if (course.slug !== newSlug) {
            console.log(`      Slug: "${course.slug}" → "${newSlug}"`);
          }
          if (course.software !== newSoftware) {
            console.log(`      Software: "${course.software}" → "${newSoftware}"`);
          }
          console.log('');
        } catch (error: any) {
          if (error.code === 'P2002') {
            console.log(`   ⚠️  Conflicto de slug: ${newSlug} ya existe, agregando sufijo`);
            // Agregar sufijo para evitar conflicto
            const uniqueSlug = `${newSlug}-${course.id.substring(0, 8)}`;
            await prisma.course.update({
              where: { id: course.id },
              data: {
                title: newTitle,
                slug: uniqueSlug,
                software: newSoftware,
              }
            });
            console.log(`   ✅ Actualizado con slug único: ${uniqueSlug}\n`);
          } else {
            console.log(`   ❌ Error: ${error.message}\n`);
          }
        }
      } else {
        console.log(`   ⏭️  Sin cambios: ${course.title}`);
      }
    }

    // PASO 3: VERIFICAR RESULTADO FINAL
    console.log('\n\n📋 PASO 3: VERIFICACIÓN FINAL\n');
    console.log('='.repeat(80));

    const finalCourses = await prisma.course.findMany({
      select: {
        title: true,
        slug: true,
        software: true,
      },
      orderBy: { title: 'asc' }
    });

    console.log(`\n✅ Total de cursos después de limpieza: ${finalCourses.length}\n`);
    console.log('📚 Lista de cursos actualizados:\n');

    finalCourses.forEach((course, idx) => {
      console.log(`${idx + 1}. ${course.title}`);
      console.log(`   Slug: ${course.slug}`);
      console.log(`   Software: ${course.software}`);
      console.log('');
    });

    console.log('='.repeat(80));
    console.log('\n✅ LIMPIEZA COMPLETADA CON ÉXITO\n');

    // Verificar si quedan "2026" en algún lado
    const coursesWithYear = finalCourses.filter(c =>
      c.title.includes('2026') || c.slug.includes('2026')
    );

    if (coursesWithYear.length > 0) {
      console.log('⚠️  ADVERTENCIA: Algunos cursos aún tienen "2026":\n');
      coursesWithYear.forEach(c => {
        console.log(`   - ${c.title} (${c.slug})`);
      });
    } else {
      console.log('✅ Todos los cursos han sido actualizados correctamente.');
      console.log('✅ No se encontraron referencias a "2026" en títulos o slugs.\n');
    }

  } catch (error) {
    console.error('❌ Error durante la limpieza:', error);
  } finally {
    await prisma.$disconnect();
  }
}

cleanupCourses();
