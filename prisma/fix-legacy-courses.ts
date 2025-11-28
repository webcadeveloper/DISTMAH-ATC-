import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🔧 Arreglando cursos legacy sin lecciones...\n');

    // Buscar cursos con módulos pero sin lecciones
    const coursesWithEmptyModules = await prisma.course.findMany({
        where: {
            modules: {
                some: {}
            }
        },
        include: {
            modules: {
                include: {
                    _count: { select: { lessons: true } }
                }
            }
        }
    });

    const emptyCourseSlugs: string[] = [];
    for (const course of coursesWithEmptyModules) {
        const totalLessons = course.modules.reduce((sum, m) => sum + m._count.lessons, 0);
        if (totalLessons === 0) {
            emptyCourseSlugs.push(course.slug);
        }
    }

    console.log(`Cursos con 0 lecciones: ${emptyCourseSlugs.join(', ')}\n`);

    const moduleTitles = [
        'Introducción y Fundamentos',
        'Herramientas Básicas',
        'Técnicas Intermedias',
        'Funciones Avanzadas',
        'Proyectos Prácticos',
        'Certificación y Evaluación Final'
    ];

    for (const slug of emptyCourseSlugs) {
        const course = await prisma.course.findUnique({
            where: { slug },
            include: { modules: true }
        });

        if (!course) continue;

        console.log(`\n📚 Procesando: ${course.title} (${slug})`);

        // Eliminar módulos vacíos
        await prisma.module.deleteMany({
            where: { courseId: course.id }
        });
        console.log(`  🗑️ Módulos vacíos eliminados`);

        // Crear 6 módulos con 5 lecciones cada uno
        const moduleCount = 6;
        const lessonsPerModule = 5;

        for (let i = 0; i < moduleCount; i++) {
            const courseModule = await prisma.module.create({
                data: {
                    title: `Módulo ${i + 1}: ${moduleTitles[i]}`,
                    number: i + 1,
                    order: i,
                    duration: Math.ceil((course.duration || 30) / moduleCount),
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
    let coursesWithLessons = 0;
    for (const c of allCourses) {
        const courseLessons = c.modules.reduce((sum, m) => sum + m._count.lessons, 0);
        totalLessons += courseLessons;
        if (courseLessons > 0) coursesWithLessons++;
        const status = courseLessons > 0 ? '✅' : '❌';
        console.log(`${status} ${c.slug}: ${c.modules.length} módulos, ${courseLessons} lecciones`);
    }
    console.log(`\n=== TOTAL: ${coursesWithLessons}/${allCourses.length} cursos completos, ${totalLessons} lecciones ===`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
