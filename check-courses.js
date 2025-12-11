const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({
    select: { id: true, slug: true, title: true }
  });
  
  console.log('\n=== CURSOS EN BD ===');
  courses.forEach(c => {
    console.log(`${c.slug} - ${c.title}`);
  });
  
  console.log(`\nTotal: ${courses.length} cursos`);
}

main().then(() => process.exit(0)).catch(console.error);
