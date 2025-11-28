import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface LessonData {
  id: string;
  title: string;
  description: string | null;
  richText: string | null;
  module: {
    title: string;
    number: number;
    course: {
      title: string;
      software: string;
      category: string;
      level: string;
    };
  };
}

// Detectar si el contenido es placeholder genérico
function hasPlaceholderContent(richText: string | null): boolean {
  if (!richText) return true;

  const placeholderPhrases = [
    'Este contenido está diseñado para ser editado por el instructor',
    '100% editable desde el panel de instructor',
    'Contenido pendiente',
    'contenido de ejemplo',
    'Lorem ipsum',
    'placeholder',
  ];

  return placeholderPhrases.some(phrase => richText.toLowerCase().includes(phrase.toLowerCase()));
}

// Generar contenido profesional HTML basado en título y contexto
function generateProfessionalContent(lesson: LessonData): string {
  const { title, module, description } = lesson;
  const { software, category, level } = module.course;
  const moduleTitle = module.title;
  const courseTitle = module.course.title;

  // Determinar el área temática y generar contenido específico
  const content = `
    <h2>Objetivos de Aprendizaje</h2>
    <ul>
      <li>Dominar las herramientas y técnicas específicas de ${title}</li>
      <li>Aplicar conceptos avanzados en proyectos reales de ${category}</li>
      <li>Desarrollar flujos de trabajo eficientes siguiendo estándares de la industria</li>
      <li>Integrar las mejoras de ${software} en el proceso de diseño</li>
    </ul>

    <h2>Introducción</h2>
    <p>
      En esta lección exploraremos <strong>${title}</strong>, un componente fundamental
      del módulo "${moduleTitle}". Como parte del curso <em>${courseTitle}</em>,
      esta lección está diseñada para profesionales de nivel ${level.toLowerCase()}
      que buscan maximizar su productividad con ${software}.
    </p>

    ${generateSpecificContent(lesson)}

    <h2>Procedimiento Paso a Paso</h2>
    ${generateStepByStep(lesson)}

    <h2>Mejores Prácticas</h2>
    <ul>
      <li>Mantener organizado el proyecto siguiendo convenciones de nombrado estándar</li>
      <li>Utilizar plantillas personalizadas para optimizar el flujo de trabajo</li>
      <li>Documentar cambios importantes en el historial del proyecto</li>
      <li>Validar resultados continuamente durante el proceso de diseño</li>
      <li>Aplicar estándares BIM cuando sea aplicable</li>
    </ul>

    <h2>Ejercicio Práctico</h2>
    <div class="exercise-box" style="background-color: #f5f5f5; padding: 20px; border-left: 4px solid #003366; margin: 20px 0;">
      <h3>Actividad: Aplicación de ${title}</h3>
      <p><strong>Objetivo:</strong> Practicar los conceptos aprendidos en un escenario real.</p>
      <p><strong>Instrucciones:</strong></p>
      <ol>
        <li>Abrir ${software} y crear un nuevo proyecto</li>
        <li>Aplicar las técnicas demostradas en esta lección</li>
        <li>Experimentar con diferentes configuraciones y opciones</li>
        <li>Documentar los resultados y comparar con las mejores prácticas</li>
        <li>Guardar el archivo con nomenclatura apropiada</li>
      </ol>
      <p><strong>Entregable:</strong> Archivo de proyecto demostrando dominio de ${title}</p>
    </div>

    <h2>Recursos Adicionales</h2>
    <ul>
      <li>Documentación oficial de Autodesk ${software} 2026</li>
      <li>Plantillas y archivos de ejemplo del curso</li>
      <li>Foro de discusión del módulo para consultas</li>
      <li>Videos complementarios en la biblioteca del curso</li>
    </ul>

    <h2>Evaluación</h2>
    <p>
      Al completar esta lección, deberías ser capaz de:
    </p>
    <ul>
      <li>Explicar los conceptos fundamentales de ${title}</li>
      <li>Aplicar las herramientas de manera eficiente en proyectos reales</li>
      <li>Identificar y resolver problemas comunes relacionados con este tema</li>
      <li>Integrar este conocimiento con otras lecciones del módulo</li>
    </ul>

    <div class="info-box" style="background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin-top: 20px;">
      <p><strong>Nota:</strong> Esta lección es completamente editable por el instructor.
      El contenido puede ser actualizado para incluir ejemplos específicos, capturas de pantalla,
      y ejercicios personalizados según las necesidades del curso.</p>
    </div>
  `;

  return content.trim();
}

// Generar contenido específico según categoría del software
function generateSpecificContent(lesson: LessonData): string {
  const { category } = lesson.module.course;
  const { title } = lesson;

  switch (category) {
    case 'AUTOCAD':
      return `
        <h2>Fundamentos en AutoCAD 2026</h2>
        <p>
          AutoCAD 2026 introduce mejoras significativas en ${title}. Esta versión incluye
          herramientas optimizadas para diseño 2D y 3D, con interfaz renovada y comandos
          más intuitivos.
        </p>
        <p>
          Las nuevas características de AutoCAD 2026 incluyen mejoras en rendimiento,
          colaboración en la nube con Autodesk Drive, y automatización mediante APIs.
          Esta lección se enfoca en aplicar estas herramientas de manera práctica.
        </p>
      `;

    case 'CIVIL3D':
      return `
        <h2>Aplicación en Civil 3D 2026</h2>
        <p>
          Civil 3D 2026 es la herramienta líder para diseño de infraestructura civil.
          En ${title}, exploraremos cómo esta versión mejora los flujos de trabajo para
          proyectos de carreteras, urbanización, drenaje y topografía.
        </p>
        <p>
          Las novedades de Civil 3D 2026 incluyen mejoras en el motor de cálculo de
          corridors, nuevas herramientas para diseño de intersecciones, y mejor integración
          con estándares locales e internacionales como AASHTO y SCT.
        </p>
      `;

    case 'REVIT':
      return `
        <h2>Modelado BIM con Revit 2026</h2>
        <p>
          Revit 2026 establece el estándar en metodología BIM (Building Information Modeling).
          Esta lección de ${title} se centra en aprovechar las capacidades de modelado
          paramétrico y documentación automática de Revit.
        </p>
        <p>
          Las mejoras en Revit 2026 incluyen rendimiento optimizado para modelos grandes,
          nuevas familias paramétricas, y colaboración mejorada con Autodesk Construction Cloud.
          Aprenderemos a aplicar estos avances en proyectos arquitectónicos y de ingeniería.
        </p>
      `;

    case 'NAVISWORKS':
      return `
        <h2>Coordinación BIM con Navisworks 2026</h2>
        <p>
          Navisworks 2026 es esencial para revisión de proyectos, detección de interferencias,
          y simulación 4D/5D. En ${title}, aprenderemos a coordinar modelos multidisciplinarios
          y optimizar la construcción.
        </p>
        <p>
          Esta versión incluye mejoras en el motor de detección de clash, mejor integración
          con Revit y AutoCAD, y herramientas avanzadas de visualización para presentaciones
          profesionales a clientes y stakeholders.
        </p>
      `;

    case 'BIM360':
      return `
        <h2>Colaboración con BIM 360 / Autodesk Construction Cloud</h2>
        <p>
          BIM 360 (ahora Autodesk Construction Cloud) revoluciona la colaboración en proyectos
          de construcción. ${title} explora cómo gestionar documentos, modelos, y flujos de
          trabajo en la nube.
        </p>
        <p>
          Las capacidades incluyen gestión de documentos, coordinación de modelos en tiempo real,
          control de calidad, y seguimiento de problemas (RFIs, issues). Esta lección demuestra
          workflows profesionales para equipos distribuidos globalmente.
        </p>
      `;

    default:
      return `
        <h2>Conceptos Fundamentales</h2>
        <p>
          Esta lección cubre ${title} como parte integral del diseño profesional con software
          Autodesk. Exploraremos las herramientas, comandos, y metodologías que los profesionales
          utilizan en proyectos reales de ingeniería y arquitectura.
        </p>
      `;
  }
}

// Generar pasos procedimentales según el título de la lección
function generateStepByStep(lesson: LessonData): string {
  const { title } = lesson;

  // Detectar palabras clave para generar pasos específicos
  const keywords = title.toLowerCase();

  if (keywords.includes('interfaz') || keywords.includes('interface') || keywords.includes('entorno')) {
    return `
      <ol>
        <li><strong>Iniciar el software:</strong> Abrir Autodesk desde el menú de inicio o acceso directo</li>
        <li><strong>Explorar la interfaz:</strong> Identificar barra de herramientas, panel de propiedades, y área de dibujo</li>
        <li><strong>Personalizar espacio de trabajo:</strong> Ajustar paneles y ribbons según preferencias</li>
        <li><strong>Configurar opciones:</strong> Acceder a Settings y establecer unidades, plantillas, y preferencias</li>
        <li><strong>Crear accesos directos:</strong> Configurar comandos rápidos y atajos de teclado</li>
        <li><strong>Guardar configuración:</strong> Exportar perfil personalizado para uso futuro</li>
      </ol>
    `;
  }

  if (keywords.includes('dibujo') || keywords.includes('drawing') || keywords.includes('línea')) {
    return `
      <ol>
        <li><strong>Activar comando:</strong> Seleccionar herramienta de dibujo desde ribbon o teclear comando</li>
        <li><strong>Establecer punto inicial:</strong> Hacer clic en área de trabajo o ingresar coordenadas</li>
        <li><strong>Definir parámetros:</strong> Especificar longitud, ángulo, o puntos adicionales</li>
        <li><strong>Aplicar restricciones:</strong> Usar ORTHO, POLAR, OSNAP según sea necesario</li>
        <li><strong>Verificar resultado:</strong> Revisar propiedades del objeto creado</li>
        <li><strong>Modificar si necesario:</strong> Usar comandos EDIT para ajustes finales</li>
      </ol>
    `;
  }

  if (keywords.includes('layer') || keywords.includes('capa')) {
    return `
      <ol>
        <li><strong>Abrir administrador de capas:</strong> Comando LAYER o panel de propiedades</li>
        <li><strong>Crear nueva capa:</strong> Botón New Layer y asignar nombre descriptivo</li>
        <li><strong>Configurar propiedades:</strong> Establecer color, tipo de línea, y grosor</li>
        <li><strong>Asignar objetos:</strong> Seleccionar elementos y mover a capa apropiada</li>
        <li><strong>Controlar visibilidad:</strong> Activar/desactivar capas según necesidad</li>
        <li><strong>Guardar estados:</strong> Crear Layer States para diferentes vistas del proyecto</li>
      </ol>
    `;
  }

  if (keywords.includes('3d') || keywords.includes('modelado')) {
    return `
      <ol>
        <li><strong>Cambiar a vista 3D:</strong> Activar viewport isométrico o perspectiva</li>
        <li><strong>Crear geometría base:</strong> Usar primitivas 3D o extruir perfiles 2D</li>
        <li><strong>Aplicar operaciones booleanas:</strong> Union, Subtract, Intersect según diseño</li>
        <li><strong>Editar sólidos:</strong> Modificar caras, aristas, y vértices</li>
        <li><strong>Aplicar materiales:</strong> Asignar texturas y propiedades visuales</li>
        <li><strong>Configurar iluminación:</strong> Añadir luces para renderizado profesional</li>
      </ol>
    `;
  }

  if (keywords.includes('render') || keywords.includes('visualización')) {
    return `
      <ol>
        <li><strong>Preparar modelo:</strong> Verificar que geometría esté completa y limpia</li>
        <li><strong>Asignar materiales:</strong> Aplicar texturas realistas a superficies</li>
        <li><strong>Configurar iluminación:</strong> Colocar luces artificiales y/o naturales</li>
        <li><strong>Ajustar cámara:</strong> Establecer punto de vista óptimo</li>
        <li><strong>Configurar render settings:</strong> Resolución, calidad, y efectos</li>
        <li><strong>Ejecutar render:</strong> Procesar imagen final y exportar resultado</li>
      </ol>
    `;
  }

  // Pasos genéricos si no coincide con palabras clave específicas
  return `
    <ol>
      <li><strong>Preparación:</strong> Abrir archivo de proyecto o crear nuevo desde plantilla</li>
      <li><strong>Configuración inicial:</strong> Establecer unidades, coordenadas, y opciones relevantes</li>
      <li><strong>Aplicar técnica:</strong> Ejecutar comandos y herramientas específicas de ${title}</li>
      <li><strong>Verificación:</strong> Revisar resultados y validar con especificaciones del proyecto</li>
      <li><strong>Optimización:</strong> Ajustar parámetros para mejorar precisión o eficiencia</li>
      <li><strong>Documentación:</strong> Guardar archivo y exportar documentación si es necesario</li>
    </ol>
  `;
}

async function main() {
  console.log('🔍 Auditando lecciones con contenido placeholder...\n');

  // Obtener todas las lecciones con sus relaciones
  const lessons = await prisma.lesson.findMany({
    include: {
      module: {
        include: {
          course: {
            select: {
              title: true,
              software: true,
              category: true,
              level: true,
            },
          },
        },
      },
    },
    orderBy: [
      { module: { course: { title: 'asc' } } },
      { module: { number: 'asc' } },
      { number: 'asc' },
    ],
  });

  console.log(`📊 Total de lecciones en base de datos: ${lessons.length}\n`);

  // Detectar lecciones con placeholder
  const placeholderLessons = lessons.filter((lesson) =>
    hasPlaceholderContent(lesson.richText)
  );

  console.log(`⚠️  Lecciones con contenido placeholder: ${placeholderLessons.length}\n`);

  if (placeholderLessons.length === 0) {
    console.log('✅ Todas las lecciones tienen contenido profesional. No se requiere actualización.\n');
    return;
  }

  // Mostrar muestra de lecciones a actualizar
  console.log('📋 Muestra de lecciones a actualizar:\n');
  placeholderLessons.slice(0, 5).forEach((lesson) => {
    console.log(`   - ${lesson.module.course.title} > ${lesson.module.title} > ${lesson.title}`);
  });
  console.log(`   ... y ${placeholderLessons.length - 5} más\n`);

  console.log('🚀 Iniciando actualización masiva de contenido...\n');

  let updatedCount = 0;
  let errorCount = 0;

  for (const lesson of placeholderLessons) {
    try {
      const newContent = generateProfessionalContent(lesson as LessonData);

      await prisma.lesson.update({
        where: { id: lesson.id },
        data: {
          richText: newContent,
          updatedAt: new Date(),
        },
      });

      updatedCount++;

      if (updatedCount % 50 === 0) {
        console.log(`   ✓ ${updatedCount} lecciones actualizadas...`);
      }
    } catch (error) {
      console.error(`   ✗ Error actualizando lección ${lesson.id}:`, error);
      errorCount++;
    }
  }

  console.log(`\n✅ ACTUALIZACIÓN COMPLETADA\n`);
  console.log(`📊 Resumen:`);
  console.log(`   - Total de lecciones: ${lessons.length}`);
  console.log(`   - Lecciones con placeholder: ${placeholderLessons.length}`);
  console.log(`   - Lecciones actualizadas: ${updatedCount}`);
  console.log(`   - Errores: ${errorCount}`);

  // Mostrar ejemplo de contenido generado
  if (updatedCount > 0) {
    const exampleLesson = await prisma.lesson.findFirst({
      where: { id: placeholderLessons[0].id },
      include: {
        module: {
          include: {
            course: true,
          },
        },
      },
    });

    console.log(`\n📝 Ejemplo de contenido generado:\n`);
    console.log(`Curso: ${exampleLesson?.module.course.title}`);
    console.log(`Módulo: ${exampleLesson?.module.title}`);
    console.log(`Lección: ${exampleLesson?.title}`);
    console.log(`\nContenido HTML (primeros 500 caracteres):`);
    console.log(exampleLesson?.richText?.substring(0, 500) + '...\n');
  }
}

main()
  .catch((e) => {
    console.error('❌ Error crítico:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
