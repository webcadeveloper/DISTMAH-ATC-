import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface ModuloJSON {
    numero: number;
    id?: string;
    nombre?: string;
    titulo?: string;
    descripcion: string;
    duracion: number | string;
    lecciones: number | LeccionJSON[];
    ejercicios?: number;
}

interface LeccionJSON {
    numero: number;
    nombre: string;
    duracion: number;
    archivo?: string;
}

interface CursoJSON {
    id: string;
    nombre?: string;
    titulo?: string;
    modulos: ModuloJSON[];
}

const CURSOS_SIN_CONTENIDO = [
    { dbTitle: 'AutoCAD 3D 2026 - Modelado Tridimensional', jsonPath: 'autocad-3d-2026' },
    { dbTitle: 'Revit Architecture 2026 - Curso Completo Profesional', jsonPath: 'revit-2026-architecture' },
    { dbTitle: 'Revit MEP 2026 - Instalaciones Mecánicas (HVAC)', jsonPath: 'revit-2026-mep-mecanicas' },
    { dbTitle: 'AutoCAD Básico 2D 2026', jsonPath: 'autocad-basico-2d-2026' },
    { dbTitle: 'AutoCAD Tridimensional 3D 2026', jsonPath: 'autocad-3d-2026' },
    { dbTitle: 'Civil 3D 2026 - Diseño de Infraestructura Civil', jsonPath: 'civil-3d-2026-basico' },
];

function generateLessonContent(lessonTitle: string, moduleTitle: string, courseTitle: string): string {
    return `<div class="lesson-content">
<h1>${lessonTitle}</h1>
<p class="intro">Bienvenido a esta lección del curso <strong>${courseTitle}</strong>, módulo <strong>${moduleTitle}</strong>.</p>

<h2>Objetivos de Aprendizaje</h2>
<ul>
<li>Comprender los conceptos fundamentales de ${lessonTitle.toLowerCase()}</li>
<li>Aplicar las herramientas y técnicas presentadas</li>
<li>Desarrollar habilidades prácticas mediante ejercicios</li>
</ul>

<h2>Contenido de la Lección</h2>
<p><em>Este contenido está diseñado para ser editado por el instructor. Agregue aquí el material específico de la lección incluyendo:</em></p>
<ul>
<li>Explicación teórica del tema</li>
<li>Procedimientos paso a paso</li>
<li>Ejemplos prácticos</li>
<li>Capturas de pantalla del software</li>
</ul>

<h2>Ejercicio Práctico</h2>
<p><em>Describa aquí el ejercicio práctico para que los estudiantes apliquen lo aprendido.</em></p>

<h2>Recursos Adicionales</h2>
<ul>
<li><a href="https://help.autodesk.com">Documentación oficial de Autodesk</a></li>
<li>Archivos de práctica (descargables)</li>
</ul>

<p class="note"><strong>Nota:</strong> Este contenido es 100% editable desde el panel de instructor.</p>
</div>`;
}

async function seedCourseContent() {
    console.log('🌱 Iniciando población de contenido de cursos...\n');

    const cursosPath = path.join(process.cwd(), 'public', 'cursos');

    for (const cursoConfig of CURSOS_SIN_CONTENIDO) {
        const jsonFilePath = path.join(cursosPath, cursoConfig.jsonPath, 'curso.json');

        if (!fs.existsSync(jsonFilePath)) {
            console.log(`⚠️  No se encontró: ${jsonFilePath}`);
            continue;
        }

        const cursoData: CursoJSON = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
        const courseTitle = cursoData.titulo || cursoData.nombre || cursoConfig.dbTitle;

        console.log(`\n📚 Procesando: ${courseTitle}`);

        const course = await prisma.course.findFirst({
            where: { title: cursoConfig.dbTitle }
        });

        if (!course) {
            console.log(`   ❌ Curso no encontrado en DB: ${cursoConfig.dbTitle}`);
            continue;
        }

        console.log(`   ✅ Curso encontrado: ${course.title} (ID: ${course.id})`);

        const existingModules = await prisma.module.count({ where: { courseId: course.id } });
        if (existingModules > 0) {
            console.log(`   ⏭️  Ya tiene ${existingModules} módulos, saltando...`);
            continue;
        }

        for (const moduloData of cursoData.modulos) {
            const moduleTitle = moduloData.titulo || moduloData.nombre || `Módulo ${moduloData.numero}`;
            const moduleDuration = typeof moduloData.duracion === 'string'
                ? parseInt(moduloData.duracion) || 4
                : moduloData.duracion;

            const createdModule = await prisma.module.create({
                data: {
                    title: moduleTitle,
                    number: moduloData.numero,
                    order: moduloData.numero - 1,
                    duration: moduleDuration,
                    description: moduloData.descripcion || '',
                    courseId: course.id,
                },
            });

            console.log(`   📁 Módulo ${moduloData.numero}: ${moduleTitle}`);

            const numLecciones = typeof moduloData.lecciones === 'number'
                ? moduloData.lecciones
                : moduloData.lecciones.length;

            if (Array.isArray(moduloData.lecciones)) {
                for (let j = 0; j < moduloData.lecciones.length; j++) {
                    const leccionData = moduloData.lecciones[j];
                    await prisma.lesson.create({
                        data: {
                            title: leccionData.nombre,
                            number: j + 1,
                            order: j,
                            duration: leccionData.duracion * 60,
                            type: 'VIDEO',
                            moduleId: createdModule.id,
                            richText: generateLessonContent(leccionData.nombre, moduleTitle, courseTitle),
                            description: `Lección ${j + 1} del módulo ${moduleTitle}`,
                            published: true,
                        },
                    });
                }
                console.log(`      📝 ${moduloData.lecciones.length} lecciones creadas`);
            } else {
                for (let j = 0; j < numLecciones; j++) {
                    const lessonTitle = `Lección ${j + 1}: ${moduleTitle} - Parte ${j + 1}`;
                    await prisma.lesson.create({
                        data: {
                            title: lessonTitle,
                            number: j + 1,
                            order: j,
                            duration: 45,
                            type: 'VIDEO',
                            moduleId: createdModule.id,
                            richText: generateLessonContent(lessonTitle, moduleTitle, courseTitle),
                            description: `Lección ${j + 1} del módulo ${moduleTitle}`,
                            published: true,
                        },
                    });
                }
                console.log(`      📝 ${numLecciones} lecciones creadas`);
            }
        }
    }

    console.log('\n\n✅ Población de contenido completada!');

    const stats = await prisma.course.findMany({
        include: {
            modules: {
                include: { lessons: true }
            }
        }
    });

    console.log('\n📊 Estado final de cursos:');
    stats.forEach((c) => {
        const totalLessons = c.modules.reduce((sum, m) => sum + m.lessons.length, 0);
        const status = c.modules.length > 0 && totalLessons > 0 ? '✅' : '❌';
        console.log(`   ${status} ${c.title}: ${c.modules.length} módulos, ${totalLessons} lecciones`);
    });
}

seedCourseContent()
    .catch((e) => {
        console.error('Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
