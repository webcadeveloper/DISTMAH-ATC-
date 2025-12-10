import { PrismaClient } from '@prisma/client';
import { COURSES_2026 } from '../lib/courses-catalog-2026';

const prisma = new PrismaClient();

function mapCategory(category: string): string {
    const mapping: Record<string, string> = {
        'AutoCAD': 'AUTOCAD',
        'Revit': 'REVIT',
        'Civil3D': 'CIVIL3D',
        'Navisworks': 'NAVISWORKS',
        'BIM360': 'BIM360',
    };
    return mapping[category] || 'AUTOCAD';
}

function mapLevel(level: string): string {
    const mapping: Record<string, string> = {
        'Básico': 'BASICO',
        'Intermedio': 'INTERMEDIO',
        'Avanzado': 'AVANZADO',
        'Básico a Avanzado': 'BASICO',
        'Intermedio a Avanzado': 'INTERMEDIO',
        'Actualización': 'INTERMEDIO',
    };
    return mapping[level] || 'BASICO';
}

async function main() {
    console.log('🔄 Sincronizando TODOS los cursos del catálogo...\n');

    const instructor = await prisma.user.findFirst({
        where: { role: 'INSTRUCTOR' }
    });

    if (!instructor) {
        console.error('❌ No se encontró instructor. Ejecuta seed.ts primero.');
        return;
    }

    for (const courseData of COURSES_2026) {
        console.log(`\n📚 Procesando: ${courseData.title}`);

        // Upsert del curso
        const course = await prisma.course.upsert({
            where: { slug: courseData.slug },
            update: {
                title: courseData.title,
                description: courseData.description,
                category: mapCategory(courseData.category) as any,
                level: mapLevel(courseData.level) as any,
                price: courseData.price,
                version: courseData.version,
                software: courseData.software || `AutoCAD ${courseData.version}`,
                duration: courseData.duration || 40,
                sessions: courseData.sessions || 10,
                status: 'PUBLISHED',
            },
            create: {
                title: courseData.title,
                slug: courseData.slug,
                description: courseData.description,
                category: mapCategory(courseData.category) as any,
                level: mapLevel(courseData.level) as any,
                price: courseData.price,
                version: courseData.version,
                software: courseData.software || `AutoCAD ${courseData.version}`,
                duration: courseData.duration || 40,
                sessions: courseData.sessions || 10,
                status: 'PUBLISHED',
                instructorId: instructor.id,
            },
        });

        // Contar lecciones existentes
        const existingLessons = await prisma.lesson.count({
            where: { module: { courseId: course.id } }
        });

        if (existingLessons > 0) {
            console.log(`  ✅ Ya tiene ${existingLessons} lecciones - SKIP`);
            continue;
        }

        // Eliminar módulos vacíos existentes
        await prisma.module.deleteMany({
            where: { courseId: course.id }
        });
        console.log(`  🗑️ Módulos vacíos eliminados`);

        // Crear módulos y lecciones
        if (courseData.syllabus && courseData.syllabus.length > 0) {
            // Usar syllabus del catálogo
            for (let i = 0; i < courseData.syllabus.length; i++) {
                const moduleData = courseData.syllabus[i];
                const courseModule = await prisma.module.create({
                    data: {
                        title: moduleData.title,
                        number: i + 1,
                        order: i,
                        duration: moduleData.duration || 2,
                        description: moduleData.description || '',
                        courseId: course.id,
                    },
                });

                for (let j = 0; j < moduleData.lessons.length; j++) {
                    const lessonData = moduleData.lessons[j];
                    await prisma.lesson.create({
                        data: {
                            title: lessonData.title,
                            number: j + 1,
                            order: j,
                            duration: lessonData.duration || 45,
                            type: 'VIDEO',
                            moduleId: courseModule.id,
                            richText: typeof lessonData.content === 'object' && lessonData.content?.richText ? lessonData.content.richText : '<p>Contenido pendiente.</p>',
                            description: lessonData.description || '',
                            published: true,
                        },
                    });
                }
                console.log(`  📖 Módulo ${i + 1}: ${moduleData.title} (${moduleData.lessons.length} lecciones)`);
            }
        } else {
            // Crear 6 módulos con 5 lecciones cada uno para cursos sin syllabus
            const moduleCount = 6;
            const lessonsPerModule = 5;
            const moduleTitles = [
                'Introducción y Fundamentos',
                'Herramientas Básicas',
                'Técnicas Intermedias',
                'Funciones Avanzadas',
                'Proyectos Prácticos',
                'Certificación y Evaluación Final'
            ];

            for (let i = 0; i < moduleCount; i++) {
                const courseModule = await prisma.module.create({
                    data: {
                        title: `Módulo ${i + 1}: ${moduleTitles[i]}`,
                        number: i + 1,
                        order: i,
                        duration: Math.ceil((courseData.duration || 30) / moduleCount),
                        description: `${moduleTitles[i]} del curso ${course.title}`,
                        courseId: course.id,
                    },
                });

                for (let j = 0; j < lessonsPerModule; j++) {
                    await prisma.lesson.create({
                        data: {
                            title: `Lección ${j + 1}: ${moduleTitles[i]} - Parte ${j + 1}`,
                            number: j + 1,
                            order: j,
                            duration: 45,
                            type: 'VIDEO',
                            moduleId: courseModule.id,
                            richText: `<h2>Lección ${j + 1}</h2>
<p>Contenido del <strong>Módulo ${i + 1}</strong> - ${moduleTitles[i]}, Lección ${j + 1} del curso <em>${course.title}</em>.</p>
<p>El instructor agregará el contenido detallado próximamente.</p>
<h3>Objetivos de esta lección:</h3>
<ul>
<li>Objetivo 1 de la lección</li>
<li>Objetivo 2 de la lección</li>
<li>Objetivo 3 de la lección</li>
</ul>`,
                            description: `Lección ${j + 1} del módulo ${i + 1}`,
                            published: true,
                        },
                    });
                }
                console.log(`  📖 Módulo ${i + 1}: ${moduleTitles[i]} (${lessonsPerModule} lecciones)`);
            }
        }
    }

    // Verificación final
    console.log('\n\n=== VERIFICACIÓN FINAL ===\n');
    const allCourses = await prisma.course.findMany({
        include: {
            modules: {
                include: {
                    _count: { select: { lessons: true } }
                }
            }
        },
        orderBy: { slug: 'asc' }
    });

    let totalLessons = 0;
    for (const c of allCourses) {
        const courseLessons = c.modules.reduce((sum, m) => sum + m._count.lessons, 0);
        totalLessons += courseLessons;
        const status = courseLessons > 0 ? '✅' : '❌';
        console.log(`${status} ${c.slug}: ${c.modules.length} módulos, ${courseLessons} lecciones`);
    }
    console.log(`\n=== TOTAL: ${allCourses.length} cursos, ${totalLessons} lecciones ===`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
