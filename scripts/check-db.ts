import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import { resolve } from 'path';

// Cargar variables de entorno desde .env.local
config({ path: resolve(process.cwd(), '.env.local') });

const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('🔍 REVISANDO BASE DE DATOS NEON...\n');

    // 1. Contar cursos
    const coursesCount = await prisma.course.count();
    console.log(`📚 Total de Cursos: ${coursesCount}`);

    // 2. Listar todos los cursos
    const courses = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        status: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    console.log('\n📋 LISTA DE CURSOS:');
    courses.forEach((course, index) => {
      console.log(`${index + 1}. [${course.status}] ${course.title}`);
      console.log(`   Slug: ${course.slug}`);
      console.log(`   ID: ${course.id}`);
      console.log(`   Creado: ${course.createdAt.toISOString().split('T')[0]}`);
      console.log('');
    });

    // 3. Contar módulos
    const modulesCount = await prisma.module.count();
    console.log(`📑 Total de Módulos: ${modulesCount}`);

    // 4. Contar lecciones
    const lessonsCount = await prisma.lesson.count();
    console.log(`📝 Total de Lecciones: ${lessonsCount}`);

    // 5. Contar usuarios
    const usersCount = await prisma.user.count();
    console.log(`👥 Total de Usuarios: ${usersCount}`);

    // 6. Contar inscripciones
    const enrollmentsCount = await prisma.enrollment.count();
    console.log(`🎓 Total de Inscripciones: ${enrollmentsCount}`);

    // 7. Estadísticas por curso
    console.log('\n📊 ESTADÍSTICAS POR CURSO:');
    for (const course of courses) {
      const modules = await prisma.module.count({
        where: { courseId: course.id },
      });
      const lessons = await prisma.lesson.count({
        where: { module: { courseId: course.id } },
      });
      const enrollments = await prisma.enrollment.count({
        where: { courseId: course.id },
      });

      console.log(`\n${course.title}:`);
      console.log(`  - Módulos: ${modules}`);
      console.log(`  - Lecciones: ${lessons}`);
      console.log(`  - Estudiantes: ${enrollments}`);
    }

    // 8. Tamaño estimado de datos
    console.log('\n💾 ESTIMACIÓN DE USO DE ESPACIO:');

    const mediaFilesCount = await prisma.mediaFile.count().catch(() => 0);
    console.log(`📁 Archivos multimedia: ${mediaFilesCount}`);

    const certificatesCount = await prisma.certificate.count().catch(() => 0);
    console.log(`🏆 Certificados: ${certificatesCount}`);

    const forumPostsCount = await prisma.forumPost.count().catch(() => 0);
    console.log(`💬 Posts de foro: ${forumPostsCount}`);

    // 9. Verificar cursos duplicados
    console.log('\n🔍 VERIFICANDO DUPLICADOS:');
    const duplicateSlugs = await prisma.course.groupBy({
      by: ['slug'],
      _count: {
        slug: true,
      },
      having: {
        slug: {
          _count: {
            gt: 1,
          },
        },
      },
    });

    if (duplicateSlugs.length > 0) {
      console.log('⚠️  CURSOS CON SLUGS DUPLICADOS:');
      duplicateSlugs.forEach(dup => {
        console.log(`   - "${dup.slug}" aparece ${dup._count.slug} veces`);
      });
    } else {
      console.log('✅ No hay slugs duplicados');
    }

    console.log('\n✅ Revisión completada');

  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    if (error instanceof Error) {
      console.error('Detalles:', error.message);
    }
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
