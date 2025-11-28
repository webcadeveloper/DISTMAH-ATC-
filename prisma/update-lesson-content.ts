import { PrismaClient } from '@prisma/client';
import { COURSES_2026 } from '../lib/courses-catalog-2026';

const prisma = new PrismaClient();

async function main() {
    console.log('🔄 Actualizando contenido de lecciones desde el catálogo...\n');

    let updatedCount = 0;
    let skippedCount = 0;

    for (const courseData of COURSES_2026) {
        console.log(`\n📚 Procesando: ${courseData.title}`);

        const course = await prisma.course.findUnique({
            where: { slug: courseData.slug },
            include: {
                modules: {
                    orderBy: { order: 'asc' },
                    include: {
                        lessons: {
                            orderBy: { order: 'asc' },
                        },
                    },
                },
            },
        });

        if (!course) {
            console.log(`  ⚠️ Curso no encontrado en BD: ${courseData.slug}`);
            continue;
        }

        if (!courseData.syllabus || courseData.syllabus.length === 0) {
            console.log(`  ⚠️ Sin syllabus en catálogo`);
            continue;
        }

        for (let i = 0; i < courseData.syllabus.length; i++) {
            const catalogModule = courseData.syllabus[i];
            const dbModule = course.modules[i];

            if (!dbModule) {
                console.log(`  ⚠️ Módulo ${i + 1} no existe en BD`);
                continue;
            }

            for (let j = 0; j < catalogModule.lessons.length; j++) {
                const catalogLesson = catalogModule.lessons[j];
                const dbLesson = dbModule.lessons[j];

                if (!dbLesson) {
                    console.log(`    ⚠️ Lección ${j + 1} no existe en BD`);
                    continue;
                }

                const richText = typeof catalogLesson.content === 'object' && catalogLesson.content?.richText
                    ? catalogLesson.content.richText
                    : null;

                if (!richText) {
                    skippedCount++;
                    continue;
                }

                // Verificar si ya tiene contenido real (no placeholder)
                const isPlaceholder = dbLesson.richText?.includes('Contenido pendiente') ||
                    dbLesson.richText?.includes('Objetivos de Aprendizaje') ||
                    dbLesson.richText?.includes('El instructor agregará');

                if (!isPlaceholder && dbLesson.richText && dbLesson.richText.length > 100) {
                    console.log(`    ✅ ${dbLesson.title} - ya tiene contenido real`);
                    skippedCount++;
                    continue;
                }

                await prisma.lesson.update({
                    where: { id: dbLesson.id },
                    data: {
                        richText: richText,
                        description: catalogLesson.description || dbLesson.description,
                    },
                });

                console.log(`    📝 ${dbLesson.title} - contenido actualizado`);
                updatedCount++;
            }
        }
    }

    console.log(`\n\n=== RESUMEN ===`);
    console.log(`✅ Lecciones actualizadas: ${updatedCount}`);
    console.log(`⏭️ Lecciones sin cambios: ${skippedCount}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
