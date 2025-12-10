import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env.local') });
const prisma = new PrismaClient();

async function compareDuplicates() {
  try {
    console.log('🔍 COMPARANDO CURSOS SOSPECHOSOS DE DUPLICACIÓN\n');
    console.log('='.repeat(100));

    // GRUPO A: AutoCAD Básico 2D
    console.log('\n\n🅰️  GRUPO A: AutoCAD Básico 2D (3 cursos)\n');
    console.log('='.repeat(100));

    const basicCourses = await prisma.course.findMany({
      where: {
        slug: {
          in: ['autocad-2026-basico', 'autocad-2d-2026', 'autocad-basico-2d-2026']
        }
      },
      include: {
        modules: {
          include: {
            lessons: {
              take: 3, // Solo primeras 3 lecciones de cada módulo
              orderBy: { order: 'asc' }
            }
          },
          orderBy: { order: 'asc' },
          take: 2, // Solo primeros 2 módulos
        }
      }
    });

    for (const course of basicCourses) {
      console.log(`\n📘 ${course.title.toUpperCase()}`);
      console.log(`   Slug: ${course.slug}`);
      console.log(`   Duración: ${course.duration}h | Precio: $${course.price}`);
      console.log(`   Total: ${course.modules.length} módulos`);

      console.log('\n   📑 PRIMEROS 2 MÓDULOS:');
      course.modules.slice(0, 2).forEach((mod, idx) => {
        console.log(`\n      ${idx + 1}. ${mod.title}`);
        mod.lessons.forEach((lesson, lidx) => {
          console.log(`         ${lidx + 1}. ${lesson.title} (${lesson.duration}min)`);
          if (lesson.richText) {
            const preview = lesson.richText.replace(/<[^>]*>/g, '').substring(0, 100);
            console.log(`            Contenido: ${preview}...`);
          }
        });
      });
      console.log('\n' + '-'.repeat(100));
    }

    // GRUPO B: AutoCAD 3D
    console.log('\n\n🅱️  GRUPO B: AutoCAD 3D (2 cursos)\n');
    console.log('='.repeat(100));

    const threeDCourses = await prisma.course.findMany({
      where: {
        slug: {
          in: ['autocad-3d-2026', 'autocad-3d-2026-completo']
        }
      },
      include: {
        modules: {
          include: {
            lessons: {
              take: 3,
              orderBy: { order: 'asc' }
            }
          },
          orderBy: { order: 'asc' },
          take: 2,
        }
      }
    });

    for (const course of threeDCourses) {
      console.log(`\n📗 ${course.title.toUpperCase()}`);
      console.log(`   Slug: ${course.slug}`);
      console.log(`   Duración: ${course.duration}h | Precio: $${course.price}`);
      console.log(`   Total: ${course.modules.length} módulos`);

      console.log('\n   📑 PRIMEROS 2 MÓDULOS:');
      course.modules.slice(0, 2).forEach((mod, idx) => {
        console.log(`\n      ${idx + 1}. ${mod.title}`);
        mod.lessons.forEach((lesson, lidx) => {
          console.log(`         ${lidx + 1}. ${lesson.title} (${lesson.duration}min)`);
          if (lesson.richText) {
            const preview = lesson.richText.replace(/<[^>]*>/g, '').substring(0, 100);
            console.log(`            Contenido: ${preview}...`);
          }
        });
      });
      console.log('\n' + '-'.repeat(100));
    }

    // GRUPO C: Civil 3D Avanzado
    console.log('\n\n🅲  GRUPO C: Civil 3D Avanzado (2 cursos)\n');
    console.log('='.repeat(100));

    const civilCourses = await prisma.course.findMany({
      where: {
        slug: {
          in: ['civil-3d-2026-avanzado', 'civil3d-2026']
        }
      },
      include: {
        modules: {
          include: {
            lessons: {
              take: 3,
              orderBy: { order: 'asc' }
            }
          },
          orderBy: { order: 'asc' },
          take: 2,
        }
      }
    });

    for (const course of civilCourses) {
      console.log(`\n📙 ${course.title.toUpperCase()}`);
      console.log(`   Slug: ${course.slug}`);
      console.log(`   Duración: ${course.duration}h | Precio: $${course.price}`);
      console.log(`   Total: ${course.modules.length} módulos`);

      console.log('\n   📑 PRIMEROS 2 MÓDULOS:');
      course.modules.slice(0, 2).forEach((mod, idx) => {
        console.log(`\n      ${idx + 1}. ${mod.title}`);
        mod.lessons.forEach((lesson, lidx) => {
          console.log(`         ${lidx + 1}. ${lesson.title} (${lesson.duration}min)`);
          if (lesson.richText) {
            const preview = lesson.richText.replace(/<[^>]*>/g, '').substring(0, 100);
            console.log(`            Contenido: ${preview}...`);
          }
        });
      });
      console.log('\n' + '-'.repeat(100));
    }

    // ANÁLISIS FINAL
    console.log('\n\n🎯 ANÁLISIS DE SIMILITUD\n');
    console.log('='.repeat(100));

    // Comparar títulos de módulos
    console.log('\n📊 COMPARACIÓN DE ESTRUCTURA:\n');

    console.log('GRUPO A (AutoCAD Básico):');
    for (const course of basicCourses) {
      const moduleTitles = course.modules.map(m => m.title).slice(0, 2);
      console.log(`   ${course.slug}: ${moduleTitles.join(' | ')}`);
    }

    console.log('\nGRUPO B (AutoCAD 3D):');
    for (const course of threeDCourses) {
      const moduleTitles = course.modules.map(m => m.title).slice(0, 2);
      console.log(`   ${course.slug}: ${moduleTitles.join(' | ')}`);
    }

    console.log('\nGRUPO C (Civil 3D):');
    for (const course of civilCourses) {
      const moduleTitles = course.modules.map(m => m.title).slice(0, 2);
      console.log(`   ${course.slug}: ${moduleTitles.join(' | ')}`);
    }

    console.log('\n' + '='.repeat(100));
    console.log('\n✅ Comparación completada. Revisa el contenido arriba para identificar duplicados.\n');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

compareDuplicates();
