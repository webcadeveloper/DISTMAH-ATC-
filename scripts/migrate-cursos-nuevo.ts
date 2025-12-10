#!/usr/bin/env tsx

import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

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

  for (const folder of courseFolders) {
    const cursoJsonPath = path.join(coursesDir, folder, 'curso.json');

    if (!fs.existsSync(cursoJsonPath)) {
      console.log(`⚠️  Saltando ${folder} (no tiene curso.json)`);
      continue;
    }

    try {
      console.log(`📚 Procesando: ${folder}...`);

      // Leer datos del curso
      const cursoData: any = JSON.parse(fs.readFileSync(cursoJsonPath, 'utf-8'));

      // Mapear categoría al enum
      const categoryMap: { [key: string]: string } = {
        'CAD': 'AUTOCAD',
        'BIM': 'REVIT',
        'GIS': 'CIVIL3D',
        'Coordinación': 'NAVISWORKS',
      };

      const categoria = cursoData.categoria || cursoData.category || 'CAD';
      const category = categoryMap[categoria] || 'AUTOCAD';

      // Mapear nivel al enum
      const levelMap: { [key: string]: string } = {
        'Básico': 'BASICO',
        'Intermedio': 'INTERMEDIO',
        'Avanzado': 'AVANZADO',
      };

      const nivel = cursoData.nivel || cursoData.level || 'Básico';
      const level = levelMap[nivel] || 'BASICO';

      // Extraer duración en horas (ej: "40 horas" → 40)
      const durationString = cursoData.duracion || cursoData.duration || '40 horas';
      const durationMatch = durationString.match(/(\d+)/);
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
          title: cursoData.titulo || cursoData.title || folder,
          subtitle: null,
          description: cursoData.descripcion || cursoData.description || 'Sin descripción',
          category: category as any,
          level: level as any,
          version: cursoData.version || '2026',
          software: cursoData.software || 'AutoCAD 2026',
          duration: duration,
          sessions: (cursoData.modulos || cursoData.modules || []).length,
          objectives: cursoData.objetivos || cursoData.objectives || [],
          prerequisites: cursoData.prerequisitos || cursoData.prerequisites || [],
          skills: [],
          tags: [cursoData.software || 'AutoCAD', cursoData.nivel || 'Básico'],
          price: 390.00, // Precio default
          priceVEF: null,
          image: null,
          thumbnail: null,
          videoIntro: null,
          status: 'PUBLISHED',
          featured: false,
          popular: false,
          instructorId: instructor.id,
          releaseDate: new Date(),
        },
      });

      cursosCreados++;
      console.log(`  ✅ Curso creado: ${course.title}`);

      // 4. Crear módulos
      const modulos = cursoData.modulos || cursoData.modules || [];

      for (const [moduleIndex, moduleData] of modulos.entries()) {
        const moduloTitulo = moduleData.titulo || moduleData.title || `Módulo ${moduleIndex + 1}`;
        const moduloSlug = moduleData.carpeta || moduleData.slug || `modulo-${moduleIndex + 1}`;
        const moduloDescripcion = moduleData.descripcion || moduleData.description || '';

        const module = await prisma.module.create({
          data: {
            courseId: course.id,
            number: moduleData.numero || moduleIndex + 1,
            title: moduloTitulo,
            description: moduloDescripcion,
            duration: 4, // Duración estimada por módulo en horas
            order: moduleIndex + 1,
          },
        });

        modulosCreados++;
        console.log(`    ✅ Módulo ${moduleIndex + 1}: ${module.title}`);
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
