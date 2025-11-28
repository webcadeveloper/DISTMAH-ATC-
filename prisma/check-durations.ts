import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const courses = await prisma.course.findMany({
        select: { id: true, title: true, duration: true },
        orderBy: { title: 'asc' }
    });
    console.log('Cursos y duraciones actuales:');
    courses.forEach(c => console.log(`${c.duration}h - ${c.title}`));
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
