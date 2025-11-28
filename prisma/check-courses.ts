import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({
    include: {
      modules: {
        include: {
          _count: { select: { lessons: true } }
        }
      }
    },
    orderBy: { slug: 'asc' }
  });

  console.log('=== CURSOS EN LA BASE DE DATOS ===\n');
  for (const c of courses) {
    const totalLessons = c.modules.reduce((sum, m) => sum + m._count.lessons, 0);
    console.log(`${c.slug}`);
    console.log(`  Módulos: ${c.modules.length} | Lecciones: ${totalLessons} | Status: ${c.status}`);
  }
  console.log(`\n=== TOTAL: ${courses.length} cursos ===`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
