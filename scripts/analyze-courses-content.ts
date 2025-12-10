import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env.local') });
const prisma = new PrismaClient();

async function analyzeCourses() {
  try {
    console.log('📚 ANÁLISIS DETALLADO DE CONTENIDO DE CURSOS\n');
    console.log('='.repeat(80));

    const courses = await prisma.course.findMany({
      include: {
        modules: {
          include: {
            lessons: {
              select: {
                id: true,
                title: true,
                description: true,
                type: true,
                duration: true,
                richText: true,
              },
            },
          },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    for (const course of courses) {
      console.log('\n' + '='.repeat(80));
      console.log(`\n📖 CURSO: ${course.title}`);
      console.log(`   ID: ${course.id}`);
      console.log(`   Slug: ${course.slug}`);
      console.log(`   Categoría: ${course.category}`);
      console.log(`   Nivel: ${course.level}`);
      console.log(`   Software: ${course.software}`);
      console.log(`   Duración: ${course.duration}h | Sesiones: ${course.sessions}`);
      console.log(`   Precio: $${course.price} USD`);
      console.log(`   Creado: ${course.createdAt.toISOString().split('T')[0]}`);

      // Descripción
      console.log(`\n   📄 DESCRIPCIÓN:`);
      const shortDesc = course.description.substring(0, 200);
      console.log(`   ${shortDesc}${course.description.length > 200 ? '...' : ''}`);

      // Objetivos
      if (course.objectives && Array.isArray(course.objectives) && course.objectives.length > 0) {
        console.log(`\n   🎯 OBJETIVOS (${course.objectives.length}):`);
        course.objectives.slice(0, 3).forEach((obj: any) => {
          console.log(`      • ${obj}`);
        });
        if (course.objectives.length > 3) {
          console.log(`      ... y ${course.objectives.length - 3} más`);
        }
      }

      // Prerequisitos
      if (course.prerequisites && Array.isArray(course.prerequisites) && course.prerequisites.length > 0) {
        console.log(`\n   ✅ PREREQUISITOS:`);
        course.prerequisites.forEach((pre: any) => {
          console.log(`      • ${pre}`);
        });
      }

      // Skills
      if (course.skills && Array.isArray(course.skills) && course.skills.length > 0) {
        console.log(`\n   💡 SKILLS: ${course.skills.join(', ')}`);
      }

      // Módulos y Lecciones
      console.log(`\n   📑 ESTRUCTURA DEL CURSO (${course.modules.length} módulos, ${course.modules.reduce((sum, m) => sum + m.lessons.length, 0)} lecciones):`);

      course.modules.forEach((module, idx) => {
        console.log(`\n      Módulo ${module.number}: ${module.title} (${module.lessons.length} lecciones)`);

        // Mostrar primeras 5 lecciones de cada módulo
        module.lessons.slice(0, 5).forEach((lesson) => {
          const contentPreview = lesson.richText
            ? lesson.richText.replace(/<[^>]*>/g, '').substring(0, 60)
            : '(sin contenido)';
          console.log(`         ${lesson.title} [${lesson.type}] - ${lesson.duration}min`);
          console.log(`            └─ ${contentPreview}...`);
        });

        if (module.lessons.length > 5) {
          console.log(`         ... y ${module.lessons.length - 5} lecciones más`);
        }
      });

      // Certificación
      if (course.certification) {
        console.log(`\n   🏆 CERTIFICACIÓN: ${course.certification}`);
      }

      console.log('\n' + '-'.repeat(80));
    }

    // Análisis de similitudes
    console.log('\n' + '='.repeat(80));
    console.log('\n🔍 ANÁLISIS DE POSIBLES DUPLICADOS:\n');

    // Agrupar por software base
    const groups = courses.reduce((acc: any, course) => {
      const baseSoftware = course.software.split(' ')[0]; // "AutoCAD", "Revit", "Civil3D"
      if (!acc[baseSoftware]) acc[baseSoftware] = [];
      acc[baseSoftware].push(course);
      return acc;
    }, {});

    Object.entries(groups).forEach(([software, coursesInGroup]: [string, any]) => {
      if (coursesInGroup.length > 1) {
        console.log(`\n📦 ${software.toUpperCase()} - ${coursesInGroup.length} cursos:`);
        coursesInGroup.forEach((c: any) => {
          console.log(`   • [${c.level}] ${c.title}`);
          console.log(`     Slug: ${c.slug} | ${c.modules.length} mods | ${c.modules.reduce((s: number, m: any) => s + m.lessons.length, 0)} lecciones`);
        });
      }
    });

    console.log('\n' + '='.repeat(80));
    console.log('\n✅ Análisis completado. Revisa el contenido detallado arriba para decidir qué cursos mantener.\n');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

analyzeCourses();
