import { getAllCourses, getCourse } from '../lib/course-loader';

async function verifyCourses() {
  console.log('🔍 Verificando sistema de cursos...\n');

  try {
    const courses = await getAllCourses();
    console.log(`✅ Cursos encontrados: ${courses.length}\n`);

    for (const course of courses) {
      console.log(`📚 ${course.titulo}`);
      console.log(`   Slug: ${course.slug}`);
      console.log(`   Precio: $${course.precio} ${course.moneda}`);
      console.log(`   Duración: ${course.duracion}`);
      console.log(`   Nivel: ${course.nivel}`);

      const fullCourse = await getCourse(course.slug);
      if (fullCourse) {
        console.log(`   Módulos: ${fullCourse.modules.length}`);
        const totalLessons = fullCourse.modules.reduce((sum, m) => sum + m.lessons.length, 0);
        console.log(`   Lecciones totales: ${totalLessons}`);

        for (const module of fullCourse.modules) {
          console.log(`     - Módulo ${module.number}: ${module.title} (${module.lessons.length} lecciones)`);
        }
      }
      console.log('');
    }

    console.log('✅ Verificación completada exitosamente!');
  } catch (error) {
    console.error('❌ Error en verificación:', error);
    process.exit(1);
  }
}

verifyCourses();
