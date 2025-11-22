export interface Course {
  id: string;
  slug: string;
  version: string; // "2026", "2027", etc.
  software: string; // "AutoCAD 2026", "Revit 2026", etc.
  title: string;
  subtitle: string;
  category: 'AutoCAD' | 'Revit' | 'Civil3D' | 'Navisworks' | 'BIM360';
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  duration: number; // horas totales
  sessions: number; // número de sesiones
  description: string;
  objectives: string[];
  prerequisites: string[];
  certification: string;
  price: number; // USD
  priceVEF: number; // Bolívares
  image: string;
  thumbnail: string;
  featured: boolean;
  popular: boolean;
  enrollmentCount: number;
  rating: number;
  reviewsCount: number;
  instructor: string;
  skills: string[];
  tags: string[];
  syllabus: Module[];
  lastUpdated: string; // ISO date
  releaseDate: string; // Fecha lanzamiento Autodesk
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: number; // horas
  lessons: Lesson[];
  order: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  description: string;
  duration: number; // minutos
  type: 'video' | 'reading' | 'exercise' | 'live-class';
  content: LessonContent;
  resources: Resource[];
  order: number;
}

export interface LessonContent {
  videoUrl?: string; // Microsoft Stream URL
  videoStreamId?: string;
  richText?: string; // HTML del editor TipTap
  embedCode?: string;
  files?: string[]; // URLs archivos OneDrive/SharePoint
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'dwg' | 'rvt' | 'zip' | 'image' | 'link';
  url: string;
  size?: number;
}

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
        title: 'Introducción a AutoCAD 2026',
        description: 'Conoce la nueva interfaz y configuración de AutoCAD 2026',
        duration: 3,
        order: 1,
        lessons: [
          {
            id: 'lec-1-1',
            moduleId: 'mod-1',
            number: 1,
            title: 'Novedades AutoCAD 2026',
            description: 'Qué hay de nuevo en AutoCAD 2026 vs versiones anteriores',
            duration: 30,
            type: 'video',
            order: 1,
            content: {
              richText: `<h2>Novedades AutoCAD 2026</h2>
              <p>En esta lección exploraremos las nuevas funcionalidades de AutoCAD 2026:</p>
              <ul>
                <li>Interfaz rediseñada y más intuitiva</li>
                <li>Smart Tools para dibujo inteligente</li>
                <li>Colaboración en tiempo real mejorada</li>
                <li>Performance optimizada (50% más rápido)</li>
                <li>Integración nativa con AutoCAD Web y Mobile</li>
              </ul>`,
            },
            resources: [
              {
                id: 'res-1',
                title: 'Guía de Novedades AutoCAD 2026.pdf',
                type: 'pdf',
                url: '/resources/autocad-2026-whats-new.pdf',
                size: 2500000,
              },
              {
                id: 'res-2',
                title: 'Shortcuts AutoCAD 2026.pdf',
                type: 'pdf',
                url: '/resources/autocad-2026-shortcuts.pdf',
              },
            ],
          },
          {
            id: 'lec-1-2',
            moduleId: 'mod-1',
            number: 2,
            title: 'Instalación y Configuración Inicial',
            description: 'Cómo instalar y configurar AutoCAD 2026 correctamente',
            duration: 45,
            type: 'video',
            order: 2,
            content: {
              richText: `<h2>Instalación AutoCAD 2026</h2>
              <p>Aprenderás a:</p>
              <ol>
                <li>Descargar AutoCAD 2026 desde Autodesk Account</li>
                <li>Requisitos del sistema y compatibilidad</li>
                <li>Proceso de instalación paso a paso</li>
                <li>Activación de licencia educativa</li>
                <li>Configuración inicial recomendada</li>
                <li>Personalizar interfaz y workspace</li>
              </ol>`,
            },
            resources: [
              {
                id: 'res-3',
                title: 'Plantilla Configuración DISTMAH.dwt',
                type: 'dwg',
                url: '/resources/distmah-template-2026.dwt',
              },
            ],
          },
          {
            id: 'lec-1-3',
            moduleId: 'mod-1',
            number: 3,
            title: 'Interfaz y Espacios de Trabajo',
            description: 'Navegación por la interfaz de AutoCAD 2026',
            duration: 45,
            type: 'video',
            order: 3,
            content: {
              richText: `<h2>Interfaz AutoCAD 2026</h2>
              <p>Componentes principales:</p>
              <ul>
                <li><strong>Ribbon:</strong> Nuevo diseño contextual</li>
                <li><strong>Quick Access Toolbar:</strong> Personalización</li>
                <li><strong>Command Line:</strong> Uso eficiente</li>
                <li><strong>ViewCube y Navigation Bar:</strong> Navegación 3D</li>
                <li><strong>Status Bar:</strong> Herramientas de precisión</li>
                <li><strong>Palettes:</strong> Properties, Layers, Tool Palettes</li>
              </ul>`,
            },
            resources: [],
          },
          {
            id: 'lec-1-4',
            moduleId: 'mod-1',
            number: 4,
            title: 'Sistema de Coordenadas y Unidades',
            description: 'Entender el sistema de coordenadas de AutoCAD',
            duration: 30,
            type: 'video',
            order: 4,
            content: {
              richText: `<h2>Coordenadas en AutoCAD</h2>
              <p>Tipos de coordenadas:</p>
              <ul>
                <li>Coordenadas Absolutas (X,Y)</li>
                <li>Coordenadas Relativas (@X,Y)</li>
                <li>Coordenadas Polares (distancia<ángulo)</li>
                <li>Coordenadas Relativas Polares (@distancia<ángulo)</li>
              </ul>
              <p>Configuración de unidades de dibujo y precisión.</p>`,
            },
            resources: [
              {
                id: 'res-4',
                title: 'Ejercicio Práctico - Coordenadas.dwg',
                type: 'dwg',
                url: '/resources/ejercicio-coordenadas.dwg',
              },
            ],
          },
          {
            id: 'lec-1-5',
            moduleId: 'mod-1',
            number: 5,
            title: 'Práctica en Vivo - Primeros Pasos',
            description: 'Clase en vivo por Microsoft Teams',
            duration: 60,
            type: 'live-class',
            order: 5,
            content: {
              richText: `<h2>Clase en Vivo</h2>
              <p>En esta sesión sincrónica repasaremos:</p>
              <ul>
                <li>Dudas sobre instalación</li>
                <li>Práctica con interfaz</li>
                <li>Ejercicios de coordenadas en tiempo real</li>
                <li>Q&A con el instructor</li>
              </ul>
              <p><strong>Importante:</strong> Tener AutoCAD 2026 instalado antes de la clase.</p>`,
            },
            resources: [],
          },
        ],
      },
      
      {
        id: 'mod-2',
        number: 2,
        title: 'Comandos de Dibujo Básicos',
        description: 'Herramientas fundamentales para crear geometría en AutoCAD 2026',
        duration: 3,
        order: 2,
        lessons: [
          {
            id: 'lec-2-1',
            moduleId: 'mod-2',
            number: 1,
            title: 'LINE, PLINE y CIRCLE',
            description: 'Comandos básicos de dibujo lineal y circular',
            duration: 45,
            type: 'video',
            order: 1,
            content: {
              richText: `<h2>Comandos Básicos de Dibujo</h2>
              <h3>LINE (Línea)</h3>
              <p>Comando fundamental para dibujar líneas rectas. Métodos de uso:</p>
              <ul>
                <li>Two points</li>
                <li>Orthogonal mode (F8)</li>
                <li>Dynamic input</li>
              </ul>
              
              <h3>PLINE (Polilínea)</h3>
              <p>Líneas conectadas que forman un solo objeto. Ventajas:</p>
              <ul>
                <li>Objeto único editable</li>
                <li>Grosor variable</li>
                <li>Conversión a región</li>
              </ul>
              
              <h3>CIRCLE (Círculo)</h3>
              <p>Métodos de creación:</p>
              <ul>
                <li>Center, Radius</li>
                <li>Center, Diameter</li>
                <li>2 Points</li>
                <li>3 Points</li>
                <li>Tangent, Tangent, Radius (TTR)</li>
              </ul>`,
            },
            resources: [
              {
                id: 'res-5',
                title: 'Ejercicio LINE PLINE CIRCLE.dwg',
                type: 'dwg',
                url: '/resources/ejercicio-line-pline-circle.dwg',
              },
              {
                id: 'res-6',
                title: 'Guía Comandos de Dibujo.pdf',
                type: 'pdf',
                url: '/resources/guia-comandos-dibujo.pdf',
              },
            ],
          },
        ],
      },
      
      {
        id: 'mod-3',
        number: 3,
        title: 'Comandos de Modificación',
        description: 'Herramientas para editar y transformar objetos',
        duration: 3,
        order: 3,
        lessons: [],
      },
      
      {
        id: 'mod-4',
        number: 4,
        title: 'Layers y Propiedades',
        description: 'Organización del dibujo con capas',
        duration: 3,
        order: 4,
        lessons: [],
      },
      
      {
        id: 'mod-5',
        number: 5,
        title: 'Bloques y Referencias',
        description: 'Reutilización de elementos con bloques dinámicos',
        duration: 3,
        order: 5,
        lessons: [],
      },
      
      {
        id: 'mod-6',
        number: 6,
        title: 'Dimensionamiento y Anotaciones',
        description: 'Cotas, textos y tablas en AutoCAD 2026',
        duration: 3,
        order: 6,
        lessons: [],
      },
      
      {
        id: 'mod-7',
        number: 7,
        title: 'Layouts y Plotting',
        description: 'Impresión profesional de planos',
        duration: 3,
        order: 7,
        lessons: [],
      },
      
      {
        id: 'mod-8',
        number: 8,
        title: 'Proyecto Final - Plano Arquitectónico',
        description: 'Aplicación de todos los conocimientos en proyecto real',
        duration: 3,
        order: 8,
        lessons: [
          {
            id: 'lec-8-1',
            moduleId: 'mod-8',
            number: 1,
            title: 'Especificaciones del Proyecto',
            description: 'Requisitos y entregables del proyecto final',
            duration: 30,
            type: 'reading',
            order: 1,
            content: {
              richText: `<h2>Proyecto Final: Vivienda Unifamiliar</h2>
              <p>Diseñarás un plano arquitectónico completo de una vivienda aplicando todos los conocimientos del curso.</p>
              
              <h3>Entregables:</h3>
              <ol>
                <li>Planta arquitectónica con dimensiones</li>
                <li>Fachada principal</li>
                <li>Corte transversal</li>
                <li>Layout de impresión con cajetín</li>
                <li>Memoria descriptiva</li>
              </ol>
              
              <h3>Especificaciones técnicas:</h3>
              <ul>
                <li>Escala 1:50</li>
                <li>Layers organizados según estándar AIA</li>
                <li>Bloques dinámicos para puertas y ventanas</li>
                <li>Dimensionamiento completo</li>
                <li>Tabla de áreas</li>
              </ul>
              
              <p><strong>Fecha de entrega:</strong> Fin de la sesión 8</p>
              <p><strong>Calificación:</strong> 40% de la nota final</p>`,
            },
            resources: [
              {
                id: 'res-proyecto',
                title: 'Plantilla Proyecto.dwg',
                type: 'dwg',
                url: '/resources/plantilla-proyecto-final.dwg',
              },
              {
                id: 'res-rubrica',
                title: 'Rúbrica de Evaluación.pdf',
                type: 'pdf',
                url: '/resources/rubrica-proyecto-final.pdf',
              },
            ],
          },
        ],
      },
    ],
  },
  
  // AUTOCAD 3D 2026
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
    syllabus: [
      {
        id: 'revit-mod-1',
        number: 1,
        title: 'Introducción a BIM y Revit 2026',
        description: 'Conceptos BIM y novedades de Revit 2026',
        duration: 3,
        order: 1,
        lessons: [
          {
            id: 'revit-lec-1-1',
            moduleId: 'revit-mod-1',
            number: 1,
            title: 'Qué es BIM y por qué Revit',
            description: 'Building Information Modeling explained',
            duration: 45,
            type: 'video',
            order: 1,
            content: {
              richText: `<h2>Metodología BIM</h2>
              <p>BIM (Building Information Modeling) es mucho más que un software...</p>
              <h3>Beneficios BIM:</h3>
              <ul>
                <li>Detección de conflictos automática</li>
                <li>Colaboración multidisciplinaria</li>
                <li>Cuantificación automática</li>
                <li>Visualización 4D/5D (tiempo y costos)</li>
                <li>Menor tiempo de diseño</li>
                <li>Menos errores en obra</li>
              </ul>`,
            },
            resources: [
              {
                id: 'revit-res-1',
                title: 'Guía BIM para Arquitectos.pdf',
                type: 'pdf',
                url: '/resources/guia-bim-arquitectos.pdf',
              },
            ],
          },
        ],
      },
    ],
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
