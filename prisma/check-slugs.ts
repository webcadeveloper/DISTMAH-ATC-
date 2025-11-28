import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const courses = await prisma.course.findMany({ select: { title: true, slug: true } });
    console.log('Slugs en DB:');
    courses.forEach(c => console.log(`${c.slug} -> ${c.title}`));
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
