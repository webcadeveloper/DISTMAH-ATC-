import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Contenido específico por software/curso
const courseContent: Record<string, {
  software: string;
  topics: string[];
  tools: string[];
  concepts: string[];
}> = {
  'autocad': {
    software: 'AutoCAD',
    topics: ['dibujo 2D', 'comandos básicos', 'capas', 'bloques', 'cotas', 'layouts', 'impresión', 'anotaciones'],
    tools: ['LINE', 'CIRCLE', 'RECTANGLE', 'TRIM', 'EXTEND', 'OFFSET', 'MIRROR', 'ARRAY', 'HATCH', 'DIMENSION'],
    concepts: ['sistema de coordenadas', 'precisión de dibujo', 'Object Snap', 'referencias a objetos', 'espacio modelo', 'espacio papel']
  },
  'autocad-3d': {
    software: 'AutoCAD 3D',
    topics: ['modelado sólido', 'superficies', 'mallas', 'visualización 3D', 'renderizado', 'materiales', 'iluminación'],
    tools: ['EXTRUDE', 'REVOLVE', 'SWEEP', 'LOFT', 'UNION', 'SUBTRACT', 'INTERSECT', 'SLICE', '3DROTATE', 'RENDER'],
    concepts: ['UCS', 'vistas isométricas', 'ViewCube', 'estilos visuales', 'cámaras', 'secciones 3D']
  },
  'civil-3d': {
    software: 'Civil 3D',
    topics: ['superficies', 'alineamientos', 'perfiles', 'corredores', 'explanaciones', 'redes de tuberías', 'puntos COGO'],
    tools: ['Surface', 'Alignment', 'Profile', 'Corridor', 'Grading', 'Pipe Network', 'COGO Points', 'Feature Lines'],
    concepts: ['modelo digital del terreno', 'diseño geométrico', 'secciones transversales', 'cálculo de volúmenes', 'planos de producción']
  },
  'revit': {
    software: 'Revit',
    topics: ['familias', 'muros', 'pisos', 'techos', 'escaleras', 'vistas', 'planos', 'tablas de planificación'],
    tools: ['Wall', 'Floor', 'Roof', 'Stairs', 'Railing', 'Column', 'Beam', 'Door', 'Window', 'Component'],
    concepts: ['BIM', 'familias paramétricas', 'niveles', 'fases de construcción', 'worksets', 'coordinación']
  },
  'revit-mep': {
    software: 'Revit MEP',
    topics: ['sistemas mecánicos', 'sistemas eléctricos', 'sistemas de plomería', 'ductos', 'tuberías', 'circuitos'],
    tools: ['Duct', 'Pipe', 'Cable Tray', 'Conduit', 'Air Terminal', 'Mechanical Equipment', 'Electrical Equipment'],
    concepts: ['sistemas HVAC', 'cálculos de carga', 'análisis energético', 'coordinación MEP', 'detección de interferencias']
  },
  'navisworks': {
    software: 'Navisworks',
    topics: ['coordinación BIM', 'detección de interferencias', 'simulación 4D', 'revisión de modelos', 'mediciones'],
    tools: ['Clash Detective', 'TimeLiner', 'Animator', 'Scripter', 'Quantification', 'Appearance Profiler'],
    concepts: ['federación de modelos', 'clash detection', 'simulación de construcción', 'revisión de diseño']
  },
  'map-3d': {
    software: 'AutoCAD Map 3D',
    topics: ['GIS', 'datos espaciales', 'topología', 'análisis espacial', 'mapas temáticos', 'conexión a bases de datos'],
    tools: ['Map Tools', 'Feature Class', 'Topology', 'Query', 'Display Manager', 'Data Connect'],
    concepts: ['sistemas de coordenadas geográficas', 'proyecciones', 'geodatabase', 'análisis espacial']
  },
  'plant-3d': {
    software: 'AutoCAD Plant 3D',
    topics: ['P&ID', 'modelado de plantas', 'tuberías industriales', 'equipos', 'isométricos', 'especificaciones'],
    tools: ['P&ID', 'Pipe Routing', 'Equipment', 'Structural', 'Isometric', 'Ortho'],
    concepts: ['diagramas de proceso', 'especificaciones de tuberías', 'generación de isométricos', 'listas de materiales']
  },
  'raster-design': {
    software: 'AutoCAD Raster Design',
    topics: ['imágenes raster', 'vectorización', 'limpieza de imágenes', 'transformaciones', 'correlación'],
    tools: ['Image Insert', 'Vectorization', 'Image Cleanup', 'Rubber Sheet', 'Correlation'],
    concepts: ['conversión raster a vector', 'georreferenciación', 'edición de imágenes', 'reconocimiento de entidades']
  }
};

function getCourseType(courseTitle: string): string {
  const title = courseTitle.toLowerCase();
  if (title.includes('plant 3d')) return 'plant-3d';
  if (title.includes('map 3d')) return 'map-3d';
  if (title.includes('raster')) return 'raster-design';
  if (title.includes('navisworks')) return 'navisworks';
  if (title.includes('civil')) return 'civil-3d';
  if (title.includes('mep') || title.includes('mecánicas') || title.includes('eléctricas') || title.includes('sanitarias')) return 'revit-mep';
  if (title.includes('revit')) return 'revit';
  if (title.includes('3d') || title.includes('tridimensional')) return 'autocad-3d';
  return 'autocad';
}

function generateLessonContent(
  courseTitle: string,
  moduleTitle: string,
  lessonTitle: string,
  lessonOrder: number,
  moduleOrder: number
): string {
  const courseType = getCourseType(courseTitle);
  const content = courseContent[courseType];

  // Extraer tema del módulo
  const moduleTopicMatch = moduleTitle.match(/Módulo \d+:\s*(.+)/i);
  const moduleTopic = moduleTopicMatch ? moduleTopicMatch[1] : moduleTitle;

  // Determinar si es parte 1, 2, etc.
  const partMatch = lessonTitle.match(/Parte\s*(\d+)/i);
  const partNumber = partMatch ? parseInt(partMatch[1]) : 1;

  // Seleccionar herramientas y conceptos relevantes
  const toolIndex = (moduleOrder * 2 + lessonOrder) % content.tools.length;
  const conceptIndex = (moduleOrder + lessonOrder) % content.concepts.length;
  const topicIndex = moduleOrder % content.topics.length;

  const primaryTool = content.tools[toolIndex];
  const secondaryTool = content.tools[(toolIndex + 1) % content.tools.length];
  const concept = content.concepts[conceptIndex];
  const topic = content.topics[topicIndex];

  const html = `
<div class="lesson-content">
  <h2>${lessonTitle}</h2>

  <div class="lesson-intro">
    <p>En esta lección del curso <strong>${courseTitle}</strong>, exploraremos en profundidad los aspectos fundamentales de <strong>${moduleTopic}</strong>. Esta es la parte ${partNumber} donde aprenderás técnicas esenciales que todo profesional de ${content.software} debe dominar.</p>
  </div>

  <h3>Objetivos de Aprendizaje</h3>
  <ul>
    <li>Comprender los fundamentos de ${moduleTopic} en ${content.software}</li>
    <li>Dominar el uso de la herramienta <code>${primaryTool}</code> para tareas profesionales</li>
    <li>Aplicar el concepto de ${concept} en proyectos reales</li>
    <li>Desarrollar flujos de trabajo eficientes para ${topic}</li>
  </ul>

  <h3>Introducción al Tema</h3>
  <p>${content.software} es una herramienta fundamental en la industria del diseño y la ingeniería. En esta lección, nos enfocaremos en ${moduleTopic}, un aspecto crítico que te permitirá crear proyectos profesionales de alta calidad.</p>

  <p>El dominio de estas técnicas te diferenciará como profesional y te permitirá abordar proyectos complejos con confianza. Cada concepto que aprenderás aquí se basa en las mejores prácticas de la industria y en la metodología de los Authorized Training Centers de Autodesk.</p>

  <h3>Conceptos Fundamentales</h3>
  <p>Antes de comenzar con los ejercicios prácticos, es importante comprender los conceptos teóricos que sustentan ${moduleTopic}:</p>

  <div class="concept-box">
    <h4>1. Fundamentos de ${concept}</h4>
    <p>El ${concept} es un elemento central en ${content.software}. Permite a los usuarios trabajar con precisión y eficiencia, garantizando que los diseños cumplan con los estándares profesionales requeridos en la industria.</p>
  </div>

  <div class="concept-box">
    <h4>2. Aplicación de ${primaryTool}</h4>
    <p>La herramienta <code>${primaryTool}</code> es esencial para ${topic}. Su correcto uso permite:</p>
    <ul>
      <li>Crear elementos con precisión milimétrica</li>
      <li>Optimizar el tiempo de diseño</li>
      <li>Mantener la consistencia en todo el proyecto</li>
      <li>Facilitar modificaciones posteriores</li>
    </ul>
  </div>

  <h3>Procedimiento Paso a Paso</h3>
  <p>A continuación, seguiremos un procedimiento estructurado para dominar los conceptos de esta lección:</p>

  <ol>
    <li>
      <strong>Preparación del entorno de trabajo:</strong>
      <p>Antes de comenzar, asegúrate de tener ${content.software} 2026 correctamente instalado y configurado. Verifica que tu espacio de trabajo esté optimizado para ${topic}.</p>
    </li>
    <li>
      <strong>Configuración inicial:</strong>
      <p>Establece las unidades de trabajo apropiadas para tu proyecto. En proyectos profesionales, la precisión en la configuración inicial es fundamental para evitar errores costosos posteriormente.</p>
    </li>
    <li>
      <strong>Aplicación de ${primaryTool}:</strong>
      <p>Utiliza el comando <code>${primaryTool}</code> siguiendo la metodología que aprenderás en el video de esta lección. Presta especial atención a las opciones disponibles en la línea de comandos.</p>
    </li>
    <li>
      <strong>Refinamiento con ${secondaryTool}:</strong>
      <p>Complementa tu trabajo utilizando <code>${secondaryTool}</code> para lograr resultados profesionales. La combinación de estas herramientas es común en flujos de trabajo de la industria.</p>
    </li>
    <li>
      <strong>Verificación y control de calidad:</strong>
      <p>Revisa tu trabajo utilizando las herramientas de verificación de ${content.software}. Asegúrate de que todos los elementos cumplan con los estándares establecidos.</p>
    </li>
  </ol>

  <h3>Mejores Prácticas</h3>
  <div class="best-practices">
    <p>Como estudiante de un Authorized Training Center de Autodesk, es importante que adoptes las mejores prácticas desde el inicio:</p>
    <ul>
      <li><strong>Organización:</strong> Mantén una estructura de capas/niveles organizada y nomenclatura consistente</li>
      <li><strong>Precisión:</strong> Utiliza siempre las herramientas de precisión disponibles en ${content.software}</li>
      <li><strong>Documentación:</strong> Documenta tu trabajo y mantén un registro de las decisiones de diseño</li>
      <li><strong>Respaldo:</strong> Guarda versiones incrementales de tu trabajo para poder volver atrás si es necesario</li>
      <li><strong>Actualización:</strong> Mantente al día con las nuevas funcionalidades de ${content.software} 2026</li>
    </ul>
  </div>

  <h3>Ejercicio Práctico</h3>
  <div class="exercise">
    <p>Para consolidar lo aprendido, realiza el siguiente ejercicio:</p>
    <ol>
      <li>Abre ${content.software} y crea un nuevo proyecto</li>
      <li>Configura las unidades según los estándares de tu región</li>
      <li>Practica utilizando <code>${primaryTool}</code> creando al menos 5 elementos diferentes</li>
      <li>Aplica <code>${secondaryTool}</code> para modificar los elementos creados</li>
      <li>Organiza tu trabajo en capas/categorías apropiadas</li>
      <li>Guarda tu proyecto siguiendo las convenciones de nomenclatura profesional</li>
    </ol>
  </div>

  <h3>Recursos Adicionales</h3>
  <p>Para profundizar en los temas de esta lección, te recomendamos:</p>
  <ul>
    <li>Documentación oficial de Autodesk ${content.software} 2026</li>
    <li>Foros de la comunidad de Autodesk</li>
    <li>Videos complementarios en el canal oficial de Autodesk</li>
    <li>Guías de certificación de Autodesk Certified Professional</li>
  </ul>

  <h3>Evaluación</h3>
  <p>Al finalizar esta lección, deberías ser capaz de:</p>
  <ul>
    <li>Explicar los fundamentos de ${moduleTopic}</li>
    <li>Utilizar correctamente <code>${primaryTool}</code> y <code>${secondaryTool}</code></li>
    <li>Aplicar ${concept} en tus proyectos</li>
    <li>Seguir las mejores prácticas de la industria</li>
  </ul>

  <div class="next-lesson">
    <p><strong>Próximo paso:</strong> En la siguiente lección, continuaremos explorando aspectos más avanzados de ${moduleTopic}. Asegúrate de completar el ejercicio práctico antes de continuar.</p>
  </div>
</div>
`.trim();

  return html;
}

async function main() {
  console.log('🔄 Generando contenido real para todas las lecciones con placeholder...\n');

  const lessons = await prisma.lesson.findMany({
    where: {
      OR: [
        { richText: { contains: 'Contenido pendiente' } },
        { richText: { contains: 'El instructor agregará' } },
        { richText: { contains: 'Objetivo 1 de la lección' } }
      ]
    },
    include: {
      module: {
        include: {
          course: true
        }
      }
    }
  });

  console.log(`📚 Encontradas ${lessons.length} lecciones para actualizar\n`);

  let updated = 0;
  let errors = 0;

  for (const lesson of lessons) {
    try {
      const newContent = generateLessonContent(
        lesson.module.course.title,
        lesson.module.title,
        lesson.title,
        lesson.order,
        lesson.module.order
      );

      await prisma.lesson.update({
        where: { id: lesson.id },
        data: { richText: newContent }
      });

      updated++;
      if (updated % 50 === 0) {
        console.log(`✅ Actualizadas ${updated}/${lessons.length} lecciones...`);
      }
    } catch (error) {
      errors++;
      console.error(`❌ Error en lección ${lesson.id}: ${error}`);
    }
  }

  console.log('\n=== RESUMEN ===');
  console.log(`✅ Lecciones actualizadas: ${updated}`);
  console.log(`❌ Errores: ${errors}`);
  console.log(`📊 Total procesadas: ${lessons.length}`);

  await prisma.$disconnect();
}

main().catch(console.error);
