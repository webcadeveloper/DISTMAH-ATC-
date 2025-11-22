import { Course, Module, Lesson, LessonContent, Resource } from './types';

// CATÁLOGO 2026
export const COURSES_2026: Course[] = [
  {
    id: 'autocad-2d-2026',
    slug: 'autocad-2d-2026',
    version: '2026',
    software: 'AutoCAD 2026',
    title: 'AutoCAD 2D 2026 - Nivel Básico',
    subtitle: 'Domina el diseño técnico 2D con la última versión de AutoCAD',
    category: 'AutoCAD',
    level: 'Básico',
    duration: 24,
    sessions: 8,
    description: `Curso completo de AutoCAD 2D 2026 desde cero. Aprende todas las novedades de la versión 2026 incluyendo:
    
    • Nuevas herramientas de dibujo inteligente
    • Interfaz optimizada AutoCAD 2026
    • Integración mejorada con AutoCAD Web
    • Nuevos comandos de productividad
    • Smart dimensioning mejorado
    • Colaboración en tiempo real
    
    Certificación Autodesk oficial al finalizar.`,

    objectives: [
      'Dominar la interfaz de AutoCAD 2026 y sus nuevas funcionalidades',
      'Crear dibujos 2D precisos con herramientas avanzadas',
      'Aplicar las nuevas características de layers y bloques dinámicos',
      'Generar layouts profesionales y plotear con calidad de impresión',
      'Utilizar las herramientas de colaboración de AutoCAD 2026',
      'Prepararse para certificación Autodesk Certified User',
    ],

    prerequisites: [
      'Conocimientos básicos de Windows 10/11',
      'Conceptos fundamentales de dibujo técnico',
      'Computadora con 8GB RAM mínimo (AutoCAD 2026 requirements)',
    ],

    certification: 'Autodesk Certified User - AutoCAD 2026',
    instructor: 'Ing. [Nombre] - Autodesk Certified Instructor',

    price: 299,
    priceVEF: 11000,

    image: '/images/courses/autocad-2d-2026-hero.jpg',
    thumbnail: '/images/courses/autocad-2d-2026-thumb.jpg',

    featured: true,
    popular: true,
    enrollmentCount: 0, // Curso nuevo 2026
    rating: 0,
    reviewsCount: 0,

    skills: ['AutoCAD 2D', 'Dibujo Técnico', 'CAD 2026', 'Planos', 'Drafting'],
    tags: ['AutoCAD', '2026', '2D', 'Diseño', 'Certificación', 'Básico', 'Nuevo'],

    lastUpdated: '2026-01-15T00:00:00Z',
    releaseDate: '2025-11-01T00:00:00Z', // Fecha lanzamiento AutoCAD 2026
    syllabus: [
      {
        id: 'mod-1',
        number: 1,
        title: 'Módulo 1: Introducción e Interfaz 2026',
        description: 'Navegación, gestión de archivos y novedades de la interfaz 2026.',
        duration: 3,
        order: 1,
        lessons: [
          {
            id: 'lec-1-1',
            moduleId: 'mod-1',
            number: 1,
            title: 'Interfaz y Espacio de Trabajo 2026',
            description: 'Exploración de la nueva interfaz optimizada y personalización.',
            duration: 30,
            type: 'video',
            order: 1,
            content: {
              videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              richText: `<h2>Interfaz AutoCAD 2026</h2>
              <p>La nueva interfaz de AutoCAD 2026 está diseñada para maximizar el área de dibujo y facilitar el acceso a herramientas inteligentes.</p>
              <ul>
                <li><strong>Start Tab:</strong> Acceso rápido a proyectos recientes y Docs.</li>
                <li><strong>Ribbon Simplificado:</strong> Pestañas contextuales mejoradas.</li>
                <li><strong>Dark Theme:</strong> Contraste optimizado para reducir fatiga visual.</li>
              </ul>`,
            },
            resources: [
              {
                id: 'res-1',
                title: 'Guía de Interfaz 2026.pdf',
                type: 'pdf',
                url: '/resources/interface-guide-2026.pdf',
                size: 1024000,
              },
            ],
          },
          {
            id: 'lec-1-2',
            moduleId: 'mod-1',
            number: 2,
            title: 'Gestión de Archivos y Nube',
            description: 'Abrir, guardar y gestionar versiones con Autodesk Docs.',
            duration: 25,
            type: 'video',
            order: 2,
            content: {
              richText: `<p>Aprende a conectar AutoCAD con la nube para trabajar desde cualquier lugar.</p>`,
            },
          },
        ],
      },
      {
        id: 'mod-2',
        number: 2,
        title: 'Módulo 2: Dibujo y Precisión',
        description: 'Herramientas fundamentales de dibujo y ayudas de precisión.',
        duration: 4,
        order: 2,
        lessons: [
          {
            id: 'lec-2-1',
            moduleId: 'mod-2',
            number: 1,
            title: 'Comandos de Dibujo Básicos',
            description: 'Línea, Polilínea, Círculo, Arco y Rectángulo.',
            duration: 45,
            type: 'video',
            order: 1,
            content: { richText: '<p>Dominio de las entidades geométricas fundamentales.</p>' },
          },
          {
            id: 'lec-2-2',
            moduleId: 'mod-2',
            number: 2,
            title: 'Herramientas de Precisión',
            description: 'Object Snaps, Polar Tracking y Grid Snap.',
            duration: 40,
            type: 'exercise',
            order: 2,
            content: { richText: '<p>Ejercicio práctico de precisión.</p>' },
          },
        ],
      },
      {
        id: 'mod-3',
        number: 3,
        title: 'Módulo 3: Edición y Organización',
        description: 'Modificación de geometría y organización por capas.',
        duration: 5,
        order: 3,
        lessons: [
          {
            id: 'lec-3-1',
            moduleId: 'mod-3',
            number: 1,
            title: 'Herramientas de Modificación',
            description: 'Move, Copy, Rotate, Scale, Trim, Extend.',
            duration: 50,
            type: 'video',
            order: 1,
            content: { richText: '<p>Técnicas de edición eficiente.</p>' },
          },
          {
            id: 'lec-3-2',
            moduleId: 'mod-3',
            number: 2,
            title: 'Gestión de Capas (Layers)',
            description: 'Creación, propiedades y estados de capas.',
            duration: 45,
            type: 'video',
            order: 2,
            content: { richText: '<p>Organización profesional de planos mediante capas.</p>' },
          },
        ],
      },
      {
        id: 'mod-4',
        number: 4,
        title: 'Módulo 4: Bloques Inteligentes e IA',
        description: 'Uso de Smart Blocks y asistentes de IA en AutoCAD 2026.',
        duration: 4,
        order: 4,
        lessons: [
          {
            id: 'lec-4-1',
            moduleId: 'mod-4',
            number: 1,
            title: 'Smart Blocks: Search & Convert',
            description: 'Conversión automática de geometría repetitiva en bloques.',
            duration: 35,
            type: 'video',
            order: 1,
            content: {
              richText: `<h2>Smart Blocks</h2>
              <p>La función estrella de 2026. Selecciona geometría y deja que la IA encuentre patrones similares para convertirlos en bloques automáticamente.</p>`,
            },
          },
          {
            id: 'lec-4-2',
            moduleId: 'mod-4',
            number: 2,
            title: 'Autodesk Assistant (IA)',
            description: 'Uso del asistente generativo para consultas y ayuda.',
            duration: 20,
            type: 'video',
            order: 2,
            content: { richText: '<p>Cómo interactuar con el asistente de IA integrado.</p>' },
          },
        ],
      },
      {
        id: 'mod-5',
        number: 5,
        title: 'Módulo 5: Anotación y Documentación',
        description: 'Textos, cotas, directrices y tablas.',
        duration: 4,
        order: 5,
        lessons: [
          {
            id: 'lec-5-1',
            moduleId: 'mod-5',
            number: 1,
            title: 'Textos y Estilos',
            description: 'MText, Single Line Text y campos automáticos.',
            duration: 40,
            type: 'video',
            order: 1,
            content: { richText: '<p>Anotación profesional de planos.</p>' },
          },
          {
            id: 'lec-5-2',
            moduleId: 'mod-5',
            number: 2,
            title: 'Dimensionamiento Inteligente',
            description: 'Cotas lineales, angulares y estilos anotativos.',
            duration: 45,
            type: 'exercise',
            order: 2,
            content: { richText: '<p>Ejercicio de acotado de planta arquitectónica.</p>' },
          },
        ],
      },
      {
        id: 'mod-6',
        number: 6,
        title: 'Módulo 6: Layouts e Impresión',
        description: 'Espacio papel, viewports y publicación PDF.',
        duration: 3,
        order: 6,
        lessons: [
          {
            id: 'lec-6-1',
            moduleId: 'mod-6',
            number: 1,
            title: 'Configuración de Layouts',
            description: 'Page Setup Manager y escalas de viewport.',
            duration: 40,
            type: 'video',
            order: 1,
            content: { richText: '<p>Preparación de láminas para impresión.</p>' },
          },
          {
            id: 'lec-6-2',
            moduleId: 'mod-6',
            number: 2,
            title: 'Publicación y Trazado',
            description: 'Plot to PDF y publicación por lotes.',
            duration: 30,
            type: 'video',
            order: 2,
            content: { richText: '<p>Generación de entregables finales.</p>' },
          },
        ],
      },
      {
        id: 'mod-7',
        number: 7,
        title: 'Módulo 7: Colaboración y Flujos Web',
        description: 'Activity Insights, Trace y AutoCAD Web.',
        duration: 3,
        order: 7,
        lessons: [
          {
            id: 'lec-7-1',
            moduleId: 'mod-7',
            number: 1,
            title: 'Activity Insights',
            description: 'Rastreo de cambios y actividad del dibujo.',
            duration: 25,
            type: 'video',
            order: 1,
            content: { richText: '<p>Monitoreo de la evolución del proyecto.</p>' },
          },
          {
            id: 'lec-7-2',
            moduleId: 'mod-7',
            number: 2,
            title: 'AutoCAD Web & Mobile',
            description: 'Edición de planos desde el navegador o tablet.',
            duration: 30,
            type: 'video',
            order: 2,
            content: { richText: '<p>Flujos de trabajo híbridos oficina-campo.</p>' },
          },
        ],
      },
    ],
  },
  {
    id: 'autocad-3d-2026',
    slug: 'autocad-3d-2026',
    version: '2026',
    software: 'AutoCAD 2026',
    title: 'AutoCAD 3D 2026 - Modelado Tridimensional',
    subtitle: 'Domina el modelado 3D con las nuevas herramientas de AutoCAD 2026',
    category: 'AutoCAD',
    level: 'Intermedio',
    duration: 8,
    sessions: 3,
    description: `Modelado 3D avanzado con AutoCAD 2026. Nuevas funcionalidades:
    • Modelado paramétrico mejorado
    • Nuevos materiales y renders
    • Integración con Autodesk Rendering
    • Export optimizado para Revit
    • Herramientas de visualización avanzadas`,
    objectives: [
      'Dominar comandos de modelado 3D de AutoCAD 2026',
      'Crear sólidos y superficies complejas',
      'Aplicar las nuevas herramientas de rendering',
      'Generar presentaciones fotorrealistas',
    ],
    prerequisites: ['AutoCAD 2D Básico o experiencia equivalente'],
    certification: 'Autodesk Certified Professional - AutoCAD 3D',
    instructor: 'Ing. [Nombre] - ACI',
    price: 199,
    priceVEF: 7000,
    image: '/images/courses/autocad-3d-2026.jpg',
    thumbnail: '/images/courses/autocad-3d-2026-thumb.jpg',
    featured: true,
    popular: false,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['AutoCAD 3D', 'Modelado 3D', 'Rendering', '3D Modeling'],
    tags: ['AutoCAD', '2026', '3D', 'Modelado', 'Rendering'],
    lastUpdated: '2026-01-15T00:00:00Z',
    releaseDate: '2025-11-01T00:00:00Z',
    syllabus: [],
  },

  // REVIT ARCHITECTURE 2026
  {
    id: 'revit-architecture-2026',
    slug: 'revit-architecture-2026',
    version: '2026',
    software: 'Revit 2026',
    title: 'Revit Architecture 2026 - BIM Avanzado',
    subtitle: 'Metodología BIM con las últimas innovaciones de Revit 2026',
    category: 'Revit',
    level: 'Intermedio',
    duration: 30,
    sessions: 10,
    description: `Curso completo de Revit Architecture 2026. Novedades principales:
    • Generative Design integrado
    • Nuevas familias paramétricas inteligentes
    • Colaboración en tiempo real mejorada
    • Performance optimizada (2x más rápido)
    • Integración nativa con ACC (Autodesk Construction Cloud)
    • AI-powered automation tools
    • Enhanced rendering con Autodesk Cloud`,
    objectives: [
      'Dominar metodología BIM con Revit 2026',
      'Utilizar nuevas herramientas de Generative Design',
      'Crear familias paramétricas avanzadas',
      'Colaborar en proyectos con Autodesk Construction Cloud',
      'Producir documentación BIM completa',
      'Prepararse para certificación Revit Architecture Professional',
    ],
    prerequisites: [
      'Conocimientos de arquitectura',
      'AutoCAD básico (recomendado)',
      'Computadora con 16GB RAM mínimo',
    ],
    certification: 'Autodesk Certified Professional - Revit Architecture 2026',
    instructor: 'Arq. [Nombre] - Revit Expert',
    price: 499,
    priceVEF: 18000,
    image: '/images/courses/revit-2026-architecture.jpg',
    thumbnail: '/images/courses/revit-2026-arch-thumb.jpg',
    featured: true,
    popular: true,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['Revit', 'BIM', 'Arquitectura', 'Modelado BIM', 'ACC'],
    tags: ['Revit', '2026', 'BIM', 'Arquitectura', 'Certificación', 'Nuevo'],
    lastUpdated: '2026-01-15T00:00:00Z',
    releaseDate: '2025-11-01T00:00:00Z',
    syllabus: [],
  },

  // REVIT STRUCTURE 2026
  {
    id: 'revit-structure-2026',
    slug: 'revit-structure-2026',
    version: '2026',
    software: 'Revit 2026',
    title: 'Revit Structure 2026 - BIM Estructural',
    subtitle: 'Diseño estructural BIM con Revit 2026',
    category: 'Revit',
    level: 'Avanzado',
    duration: 30,
    sessions: 10,
    description: `Modelado estructural con Revit 2026. Incluye:
    • Nuevas herramientas de análisis estructural
    • Integración directa con Robot Structural Analysis
    • Detallado de conexiones mejorado
    • Cuantificación automática de acero`,
    objectives: [
      'Modelar sistemas estructurales completos',
      'Analizar estructuras con herramientas integradas',
      'Generar planos estructurales',
      'Coordinar con modelo arquitectónico',
    ],
    prerequisites: ['Conocimientos de ingeniería estructural', 'Revit básico'],
    certification: 'Autodesk Certified Professional - Revit Structure',
    instructor: 'Ing. [Nombre] - Structural Engineer',
    price: 499,
    priceVEF: 18000,
    image: '/images/courses/revit-2026-structure.jpg',
    thumbnail: '/images/courses/revit-2026-struct-thumb.jpg',
    featured: true,
    popular: false,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['Revit', 'BIM', 'Estructuras', 'Ingeniería'],
    tags: ['Revit', '2026', 'BIM', 'Estructuras', 'Ingeniería'],
    lastUpdated: '2026-01-15T00:00:00Z',
    releaseDate: '2025-11-01T00:00:00Z',
    syllabus: [],
  },

  // REVIT MEP 2026
  {
    id: 'revit-mep-2026',
    slug: 'revit-mep-2026',
    version: '2026',
    software: 'Revit 2026',
    title: 'Revit MEP 2026 - Instalaciones BIM',
    subtitle: 'Diseño de instalaciones mecánicas, eléctricas y sanitarias',
    category: 'Revit',
    level: 'Avanzado',
    duration: 30,
    sessions: 10,
    description: `Instalaciones MEP con Revit 2026. Novedades:
    • Cálculo hidráulico automatizado
    • Routing de ductos inteligente
    • Análisis energético mejorado
    • Integración con fabricación (MEP Fabrication)`,
    objectives: [
      'Modelar sistemas MEP completos',
      'Realizar cálculos de instalaciones',
      'Coordinar sistemas con arquitectura y estructura',
      'Generar documentación de construcción',
    ],
    prerequisites: ['Conocimientos de instalaciones', 'Revit básico'],
    certification: 'Autodesk Certified Professional - Revit MEP',
    instructor: 'Ing. [Nombre] - MEP Specialist',
    price: 499,
    priceVEF: 18000,
    image: '/images/courses/revit-2026-mep.jpg',
    thumbnail: '/images/courses/revit-2026-mep-thumb.jpg',
    featured: false,
    popular: false,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['Revit', 'BIM', 'MEP', 'Instalaciones'],
    tags: ['Revit', '2026', 'MEP', 'Instalaciones'],
    lastUpdated: '2026-01-15T00:00:00Z',
    releaseDate: '2025-11-01T00:00:00Z',
    syllabus: [],
  },

  // CIVIL 3D 2026
  {
    id: 'civil3d-2026',
    slug: 'civil3d-2026',
    version: '2026',
    software: 'Civil 3D 2026',
    title: 'Civil 3D 2026 - Diseño de Infraestructura Civil',
    subtitle: 'Diseño civil y topografía con Civil 3D 2026',
    category: 'Civil3D',
    level: 'Avanzado',
    duration: 30,
    sessions: 10,
    description: `Civil 3D 2026 para ingeniería civil. Incluye:
    • Nuevas herramientas de diseño vial
    • Análisis hidrológico mejorado
    • Integración con drones (Reality Capture)
    • Cuantificación automática de movimiento de tierras
    • Integración con InfraWorks y BIM 360`,
    objectives: [
      'Diseñar carreteras y vialidades',
      'Modelar terrenos y superficies',
      'Diseñar redes sanitarias y pluviales',
      'Generar perfiles y secciones',
      'Cuantificar volúmenes de obra',
    ],
    prerequisites: ['AutoCAD 2D', 'Conocimientos de topografía e ingeniería civil'],
    certification: 'Autodesk Certified Professional - Civil 3D',
    instructor: 'Ing. [Nombre] - Civil Engineer',
    price: 499,
    priceVEF: 18000,
    image: '/images/courses/civil3d-2026.jpg',
    thumbnail: '/images/courses/civil3d-2026-thumb.jpg',
    featured: true,
    popular: true,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['Civil 3D', 'Ingeniería Civil', 'Topografía', 'Vialidad'],
    tags: ['Civil3D', '2026', 'Civil', 'Topografía', 'Carreteras'],
    lastUpdated: '2026-01-15T00:00:00Z',
    releaseDate: '2025-11-01T00:00:00Z',
    syllabus: [],
  },

  // NAVISWORKS 2026
  {
    id: 'navisworks-2026',
    slug: 'navisworks-2026',
    version: '2026',
    software: 'Navisworks Manage 2026',
    title: 'Navisworks 2026 - Coordinación BIM',
    subtitle: 'Coordinación y análisis de proyectos BIM multidisciplinarios',
    category: 'Navisworks',
    level: 'Avanzado',
    duration: 16,
    sessions: 6,
    description: `Coordinación BIM con Navisworks 2026:
    • Detección de interferencias avanzada
    • Simulaciones 4D (timeline de construcción)
    • Cuantificación 5D (costos)
    • Realidad virtual integrada`,
    objectives: [
      'Coordinar modelos multidisciplinarios',
      'Detectar y resolver conflictos',
      'Crear simulaciones 4D de construcción',
      'Generar reportes de coordinación',
    ],
    prerequisites: ['Revit intermedio o AutoCAD avanzado', 'Conceptos BIM'],
    certification: 'Navisworks Coordination Specialist',
    instructor: 'Ing. [Nombre] - BIM Coordinator',
    price: 299,
    priceVEF: 11000,
    image: '/images/courses/navisworks-2026.jpg',
    thumbnail: '/images/courses/navisworks-2026-thumb.jpg',
    featured: false,
    popular: false,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['Navisworks', 'BIM', 'Coordinación', '4D', '5D'],
    tags: ['Navisworks', '2026', 'BIM', 'Coordinación'],
    lastUpdated: '2026-01-15T00:00:00Z',
    releaseDate: '2025-11-01T00:00:00Z',
    syllabus: [],
  },
];
