import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const courses = await prisma.course.findMany({
        include: { modules: { include: { lessons: true } } },
        orderBy: { title: 'asc' }
    });

    console.log(`\n📊 TOTAL CURSOS: ${courses.length}\n`);
    console.log('Hrs | Mód | Lec | Título');
    console.log('----+-----+-----+------------------------------------------');

    let totalModules = 0;
    let totalLessons = 0;

    courses.forEach(c => {
        const lessons = c.modules.reduce((sum, m) => sum + m.lessons.length, 0);
        totalModules += c.modules.length;
        totalLessons += lessons;
        console.log(`${String(c.duration).padStart(3)}h | ${String(c.modules.length).padStart(3)} | ${String(lessons).padStart(3)} | ${c.title}`);
    });

    console.log('----+-----+-----+------------------------------------------');
    console.log(`\n📈 RESUMEN:`);
    console.log(`   Cursos: ${courses.length}`);
    console.log(`   Módulos: ${totalModules}`);
    console.log(`   Lecciones: ${totalLessons}`);
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
