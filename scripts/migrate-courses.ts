#!/usr/bin/env tsx

import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

interface CursoJSON {
  id?: string;
  titulo: string;
  descripcion: string;
  duracion?: string;
  nivel: string;
  categoria: string;
  software: string;
  prerequisitos?: string[];
  objetivos?: string[];
  publico_objetivo?: string[];
  modulos: ModuleData[];
  certificacion?: any;
  metodologia?: any;
  materiales?: string[];
  preparacion_siguiente_nivel?: string[];
  instructor?: any;
  version?: string;
  fecha_actualizacion?: string;
  institucion?: string;
  // Campos en inglés (fallback)
  title?: string;
  subtitle?: string;
  description?: string;
  duration?: string;
  level?: string;
  category?: string;
  prerequisites?: string[];
  objectives?: string[];
  modules?: ModuleData[];
}

interface ModuleData {
  numero?: number;
  titulo?: string;
  duracion?: string;
  carpeta?: string;
  descripcion?: string;
  // Campos en inglés (fallback)
  title?: string;
  slug?: string;
  description?: string;
  lessons?: any[];
}

interface LessonData {
  title: string;
  slug: string;
  videoUrl?: string;
  duration?: string;
}

async function migrateCourses() {
  console.log('🚀 Iniciando migración de cursos a Neon PostgreSQL...\n');

  // 1. Crear usuario instructor de ejemplo
  console.log('📝 Creando instructor de ejemplo...');
  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@distmah.com' },
    update: {},
    create: {
      email: 'instructor@distmah.com',
      name: 'Instructor DISTMAH',
      role: 'INSTRUCTOR',
      emailVerified: true,
    },
  });
  console.log(`✅ Instructor creado: ${instructor.name} (${instructor.email})\n`);

  // 2. Leer cursos desde public/cursos/
  const coursesDir = path.join(process.cwd(), 'public', 'cursos');

  if (!fs.existsSync(coursesDir)) {
    console.error('❌ Error: No se encontró la carpeta public/cursos/');
    process.exit(1);
  }

  const courseFolders = fs.readdirSync(coursesDir).filter((folder) => {
    const folderPath = path.join(coursesDir, folder);
    return fs.statSync(folderPath).isDirectory();
  });

  console.log(`📁 Se encontraron ${courseFolders.length} carpetas de cursos\n`);

  let cursosCreados = 0;
  let modulosCreados = 0;
  let leccionesCreadas = 0;

  for (const folder of courseFolders) {
    const cursoJsonPath = path.join(coursesDir, folder, 'curso.json');

    if (!fs.existsSync(cursoJsonPath)) {
      console.log(`⚠️  Saltando ${folder} (no tiene curso.json)`);
      continue;
    }

    try {
      console.log(`📚 Procesando: ${folder}...`);

      // Leer datos del curso
      const cursoData: CursoJSON = JSON.parse(fs.readFileSync(cursoJsonPath, 'utf-8'));

      // Mapear categoría al enum
      const categoryMap: { [key: string]: string } = {
        'CAD': 'AUTOCAD',
        'BIM': 'REVIT',
        'GIS': 'CIVIL3D',
        'Coordinación': 'NAVISWORKS',
      };

      const category = categoryMap[cursoData.category] || 'AUTOCAD';

      // Mapear nivel al enum
      const levelMap: { [key: string]: string } = {
        'Básico': 'BASICO',
        'Intermedio': 'INTERMEDIO',
        'Avanzado': 'AVANZADO',
      };

      const level = levelMap[cursoData.level] || 'BASICO';

      // Extraer duración en horas (ej: "40 horas" → 40)
      const durationMatch = cursoData.duration.match(/(\d+)/);
      const duration = durationMatch ? parseInt(durationMatch[1]) : 40;

      // Verificar si el curso ya existe
      const existingCourse = await prisma.course.findUnique({
        where: { slug: folder },
      });

      if (existingCourse) {
        console.log(`  ⚠️  Ya existe, saltando...`);
        continue;
      }

      // Crear curso en Prisma
      const course = await prisma.course.create({
        data: {
          slug: folder,
          title: cursoData.title,
          subtitle: cursoData.subtitle,
          description: cursoData.description,
          category: category as any,
          level: level as any,
          version: cursoData.version,
          software: cursoData.software,
          duration: duration,
          sessions: cursoData.modules.length, // Número de módulos como sesiones
          objectives: cursoData.objectives || [],
          prerequisites: cursoData.prerequisites || [],
          skills: cursoData.skills || [],
          tags: cursoData.tags || [],
          price: cursoData.price,
          priceVEF: null, // Configurar después si es necesario
          image: cursoData.heroImage || cursoData.thumbnail,
          thumbnail: cursoData.thumbnail,
          videoIntro: null, // Configurar después si hay video intro
          status: 'PUBLISHED',
          featured: false,
          popular: false,
          instructorId: instructor.id,
          releaseDate: new Date(),
        },
      });

      cursosCreados++;
      console.log(`  ✅ Curso creado: ${course.title}`);

      // 4. Crear módulos y lecciones
      for (const [moduleIndex, moduleData] of cursoData.modules.entries()) {
        const module = await prisma.module.create({
          data: {
            courseId: course.id,
            number: moduleIndex + 1,
            title: moduleData.title,
            description: moduleData.description,
            duration: 4, // Duración estimada por módulo en horas
            order: moduleIndex + 1,
          },
        });

        modulosCreados++;

        for (const [lessonIndex, lessonData] of moduleData.lessons.entries()) {
          // Leer contenido de archivo Markdown si existe
          const lessonPath = path.join(
            coursesDir,
            folder,
            moduleData.slug,
            'lecciones',
            `${lessonData.slug}.md`
          );

          let content = '';
          if (fs.existsSync(lessonPath)) {
            content = fs.readFileSync(lessonPath, 'utf-8');
          } else {
            content = `# ${lessonData.title}\n\n*Contenido pendiente de agregar por el instructor.*`;
          }

          // Extraer duración en minutos (ej: "15 min" → 15)
          let lessonDuration = 30; // Default 30 min
          if (lessonData.duration) {
            const durationMatch = lessonData.duration.match(/(\d+)/);
            if (durationMatch) {
              lessonDuration = parseInt(durationMatch[1]);
            }
          }

          await prisma.lesson.create({
            data: {
              moduleId: module.id,
              number: lessonIndex + 1,
              title: lessonData.title,
              description: `Lección ${lessonIndex + 1} del ${moduleData.title}`,
              duration: lessonDuration,
              type: lessonData.videoUrl ? 'VIDEO' : 'READING',
              order: lessonIndex + 1,
              richText: content,
              videoUrl: lessonData.videoUrl,
              published: true,
            },
          });

          leccionesCreadas++;
        }

        console.log(`    ✅ Módulo ${moduleIndex + 1}: ${module.title} (${moduleData.lessons.length} lecciones)`);
      }

      console.log('');
    } catch (error) {
      console.error(`❌ Error procesando ${folder}:`, error);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('🎉 MIGRACIÓN COMPLETADA');
  console.log('='.repeat(60));
  console.log(`✅ Cursos creados: ${cursosCreados}`);
  console.log(`✅ Módulos creados: ${modulosCreados}`);
  console.log(`✅ Lecciones creadas: ${leccionesCreadas}`);
  console.log('='.repeat(60) + '\n');
}

// Ejecutar migración
migrateCourses()
  .catch((e) => {
    console.error('\n❌ ERROR FATAL:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
