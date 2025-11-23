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
    id: 'revit-2026-architecture',
    slug: 'revit-2026-architecture',
    version: '2026',
    software: 'Revit 2026',
    title: 'Revit Architecture 2026 - Curso Completo Profesional',
    subtitle: 'Domina Autodesk Revit Architecture 2026 desde cero hasta nivel avanzado',
    category: 'Revit',
    level: 'Básico a Avanzado',
    duration: 30,
    sessions: 6,
    description: `Curso profesional completo de Autodesk Revit Architecture 2026 que cubre desde los fundamentos hasta técnicas avanzadas de modelado BIM. Aprende a crear proyectos arquitectónicos completos, generar documentación técnica profesional, y dominar todas las nuevas herramientas de la versión 2026.

    Nuevas características 2026:
    • Accelerated Graphics (Tech Preview) - Navegación 3D mejorada con aceleración GPU
    • Wall Creation Enhancements - Creación automática de muros desde áreas cerradas
    • Toposolid Improvements - Subdivisión y valores negativos para vialidades
    • Save Position for Views on Sheets - Guarda posiciones de vistas en láminas
    • Twinmotion Integration - Sustitución automática de assets
    • Reality Capture Support - Integración de nubes de puntos y mesh
    • Room Tags Auto-center - Etiquetas de habitaciones auto-centradas

    Incluye modelado 3D, visualización con Twinmotion, coordinación BIM, familias paramétricas y flujos de trabajo colaborativos.`,
    objectives: [
      'Dominar la interfaz de Revit Architecture 2026',
      'Crear modelos arquitectónicos completos en 3D',
      'Utilizar herramientas de creación automática de muros',
      'Trabajar con Toposolid para modelado de terrenos',
      'Generar documentación técnica completa',
      'Crear renderizados con Twinmotion',
      'Trabajar con modelos de coordinación',
      'Integrar nubes de puntos y Reality Capture',
      'Crear familias paramétricas personalizadas',
      'Implementar flujos de trabajo BIM colaborativos',
    ],
    prerequisites: [
      'Conocimientos básicos de AutoCAD (recomendado)',
      'Computadora con Revit 2026 instalado',
      'Conocimientos básicos de arquitectura',
      'Windows 10/11 con mínimo 16GB RAM',
      'Tarjeta gráfica DirectX 11 compatible',
    ],
    certification: 'Certificado Digital - Revit Architecture 2026',
    instructor: 'A definir - Arquitecto BIM Manager',
    price: 390,
    priceVEF: 14300,
    image: '/cursos/revit-2026-architecture/imagenes/portada-revit-2026.png',
    thumbnail: '/cursos/revit-2026-architecture/imagenes/promo-revit-2026.png',
    featured: true,
    popular: true,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['Revit', 'BIM', 'Arquitectura', 'Modelado BIM', 'Twinmotion', 'Toposolid', 'Reality Capture'],
    tags: ['Revit', '2026', 'BIM', 'Arquitectura', 'Twinmotion', 'Toposolid', 'Familias', 'Nuevo'],
    lastUpdated: '2025-11-22T00:00:00Z',
    releaseDate: '2025-11-22T00:00:00Z',
    syllabus: [],
  },

  // REVIT MEP - INSTALACIONES MECÁNICAS (HVAC) 2026
  {
    id: 'revit-2026-mep-mecanicas',
    slug: 'revit-2026-mep-mecanicas',
    version: '2026',
    software: 'Revit 2026',
    title: 'Revit MEP 2026 - Instalaciones Mecánicas (HVAC)',
    subtitle: 'Especialización en sistemas mecánicos, climatización y ventilación',
    category: 'Revit',
    level: 'Intermedio a Avanzado',
    duration: 24,
    sessions: 5,
    description: `Curso especializado en sistemas mecánicos (HVAC) con Revit MEP 2026. Cubre climatización, ventilación, análisis de cargas térmicas y coordinación MEP.

    Nuevas características 2026:
    • Enhanced System Zones - Límites por sketch o espacios
    • HVAC Zones mejoradas - Fusión con System Zones
    • Color schemes y scheduling para zonas
    • Modelos de coordinación mejorados
    • Mejores capacidades de modelo analítico

    Aprende a diseñar sistemas de climatización completos, realizar análisis de cargas térmicas, dimensionar ductos, y coordinar con otras disciplinas MEP. Incluye sistemas de difusores, rejillas, UMA, cajas VAV, y fundamentos de fabricación MEP.`,
    objectives: [
      'Dominar la interfaz MEP para sistemas mecánicos',
      'Diseñar sistemas de climatización (HVAC) completos',
      'Realizar análisis de cargas térmicas con System Zones',
      'Dimensionar ductos y seleccionar equipos',
      'Diseñar sistemas de ventilación mecánica',
      'Coordinar instalaciones mecánicas con otras disciplinas',
      'Generar documentación técnica de sistemas HVAC',
      'Aplicar fundamentos de fabricación MEP',
    ],
    prerequisites: [
      'Revit Architecture 2026 (recomendado)',
      'Conocimientos básicos de HVAC',
      'Comprensión de sistemas mecánicos',
      'Windows 10/11 con mínimo 16GB RAM',
    ],
    certification: 'Certificado Digital - Revit MEP Mechanical Systems 2026 Specialist',
    instructor: 'Ing. MEP - Especialista en Sistemas Mecánicos',
    price: 415,
    priceVEF: 15200,
    image: '/cursos/revit-2026-mep-mecanicas/imagenes/portada-mep-mecanicas.png',
    thumbnail: '/cursos/revit-2026-mep-mecanicas/imagenes/promo-mep-mecanicas.png',
    featured: true,
    popular: true,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['Revit', 'BIM', 'MEP', 'HVAC', 'Climatización', 'System Zones', 'Ductos'],
    tags: ['Revit', '2026', 'MEP', 'HVAC', 'Mecánicas', 'Climatización', 'Nuevo'],
    lastUpdated: '2025-11-22T00:00:00Z',
    releaseDate: '2025-11-22T00:00:00Z',
    syllabus: [],
  },

  // REVIT MEP - INSTALACIONES ELÉCTRICAS 2026
  {
    id: 'revit-2026-mep-electricas',
    slug: 'revit-2026-mep-electricas',
    version: '2026',
    software: 'Revit 2026',
    title: 'Revit MEP 2026 - Instalaciones Eléctricas',
    subtitle: 'Especialización en sistemas eléctricos, circuitos y paneles',
    category: 'Revit',
    level: 'Intermedio',
    duration: 16,
    sessions: 4,
    description: `Curso enfocado en sistemas eléctricos con Revit MEP 2026. Incluye circuitos, paneles, iluminación y todas las nuevas características eléctricas de 2026.

    Nuevas características 2026:
    • Conductores y cables personalizables - Materiales, diámetros, aislamiento
    • Organización de Panel Schedules en Project Browser
    • Routing mejorado de circuitos para sistemas complejos
    • Nuevos campos en Equipment Schedules (Part Type, Distribution System)
    • Mejor soporte internacional (no solo AWG)
    • Modelado de distribución de carga mejorado

    Aprende a diseñar instalaciones eléctricas completas, crear circuitos, balancear cargas, diseñar sistemas de iluminación y generar documentación técnica profesional.`,
    objectives: [
      'Dominar electrical settings y configuraciones',
      'Diseñar tableros y switchboards con panel schedules organizados',
      'Crear y enrutar circuitos eléctricos complejos',
      'Utilizar conductores personalizables',
      'Diseñar sistemas de iluminación con análisis',
      'Balancear cargas y calcular demandas',
      'Generar diagramas unifilares y documentación',
      'Coordinar instalaciones eléctricas con otras disciplinas',
    ],
    prerequisites: [
      'Revit Architecture 2026 (recomendado)',
      'Conocimientos básicos de electricidad',
      'Comprensión de circuitos eléctricos',
      'Windows 10/11 con mínimo 16GB RAM',
    ],
    certification: 'Certificado Digital - Revit MEP Electrical Systems 2026 Specialist',
    instructor: 'Ing. Eléctrico - Especialista en Sistemas Eléctricos',
    price: 225,
    priceVEF: 8250,
    image: '/cursos/revit-2026-mep-electricas/imagenes/portada-mep-electricas.png',
    thumbnail: '/cursos/revit-2026-mep-electricas/imagenes/promo-mep-electricas.png',
    featured: false,
    popular: false,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['Revit', 'BIM', 'MEP', 'Eléctrico', 'Circuitos', 'Paneles', 'Iluminación'],
    tags: ['Revit', '2026', 'MEP', 'Eléctrico', 'Circuitos', 'Paneles', 'Nuevo'],
    lastUpdated: '2025-11-22T00:00:00Z',
    releaseDate: '2025-11-22T00:00:00Z',
    syllabus: [],
  },

  // REVIT MEP - INSTALACIONES SANITARIAS 2026
  {
    id: 'revit-2026-mep-sanitarias',
    slug: 'revit-2026-mep-sanitarias',
    version: '2026',
    software: 'Revit 2026',
    title: 'Revit MEP 2026 - Instalaciones Sanitarias',
    subtitle: 'Especialización en plomería, agua potable y drenaje',
    category: 'Revit',
    level: 'Intermedio',
    duration: 16,
    sessions: 4,
    description: `Curso especializado en sistemas de plomería (sanitarios, agua potable, drenaje) con Revit MEP 2026. Incluye sistemas de agua, drenaje y protección contra incendios.

    Características 2026:
    • Accelerated Graphics para navegación rápida
    • Controles mejorados de Coordination Model
    • Routing mejorado de tuberías
    • Mejores familias de fixtures
    • Manejo mejorado de tuberías con pendiente
    • Mejores capacidades analíticas

    Aprende a diseñar sistemas de agua potable, drenaje sanitario, drenaje pluvial, sistemas contra incendios y coordinar con otras disciplinas MEP. Incluye dimensionamiento de tuberías, cálculos hidráulicos y generación de dibujos isométricos.`,
    objectives: [
      'Dominar plumbing settings y configuración de tuberías',
      'Diseñar sistemas de agua potable (fría y caliente)',
      'Diseñar sistemas de drenaje sanitario y pluvial',
      'Dimensionar tuberías y calcular demandas hidráulicas',
      'Diseñar sistemas contra incendios (sprinklers)',
      'Trabajar con tuberías de gas y gases medicinales',
      'Generar dibujos isométricos de plomería',
      'Coordinar instalaciones sanitarias con otras disciplinas',
    ],
    prerequisites: [
      'Revit Architecture 2026 (recomendado)',
      'Conocimientos básicos de plomería',
      'Comprensión de sistemas hidráulicos',
      'Windows 10/11 con mínimo 16GB RAM',
    ],
    certification: 'Certificado Digital - Revit MEP Plumbing Systems 2026 Specialist',
    instructor: 'Ing. Sanitario - Especialista en Sistemas de Plomería',
    price: 225,
    priceVEF: 8250,
    image: '/cursos/revit-2026-mep-sanitarias/imagenes/portada-mep-sanitarias.png',
    thumbnail: '/cursos/revit-2026-mep-sanitarias/imagenes/promo-mep-sanitarias.png',
    featured: false,
    popular: false,
    enrollmentCount: 0,
    rating: 0,
    reviewsCount: 0,
    skills: ['Revit', 'BIM', 'MEP', 'Plomería', 'Agua', 'Drenaje', 'Sprinklers'],
    tags: ['Revit', '2026', 'MEP', 'Plomería', 'Sanitarias', 'Drenaje', 'Nuevo'],
    lastUpdated: '2025-11-22T00:00:00Z',
    releaseDate: '2025-11-22T00:00:00Z',
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
