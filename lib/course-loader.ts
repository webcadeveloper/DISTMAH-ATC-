import { prisma } from '@/lib/prisma';

export interface CourseMetadata {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  precio: number;
  moneda: string;
  duracion: string;
  nivel: string;
  categoria: string;
  subcategoria?: string;
  version: string;
  idioma: string;
  instructor: string;
  prerequisitos: string[];
  objetivos: string[];
  incluye?: string[];
  novedades_2026?: string[];
  competencias_profesionales?: string[];
  posiciones_laborales?: string[];
  certificacion?: {
    nombre: string;
    requisitos: string[];
    validez: string;
    verificable: boolean;
  };
  actualizacion?: string;
  vigencia?: string;
  lastUpdated?: string;
  enrollmentCount?: number;
  rating?: number;
  reviewsCount?: number;
  imagen?: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
  temas?: string[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  slug: string;
  duration?: number;
  content?: string;
  excerpt?: string;
}

export async function getAllCourses(): Promise<CourseMetadata[]> {
  const courses = await prisma.course.findMany({
    where: {
      status: 'PUBLISHED'
    },
    include: {
      instructor: {
        select: {
          name: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return courses.map(course => ({
    id: course.id,
    slug: course.slug,
    titulo: course.title,
    descripcion: course.description || '',
    precio: Number(course.price),
    moneda: 'USD',
    duracion: `${course.duration || 0}h`,
    nivel: course.level,
    categoria: course.category,
    subcategoria: undefined,
    version: course.version,
    idioma: 'Español',
    instructor: course.instructor?.name || 'DISTMAH ATC',
    prerequisitos: course.prerequisites || [],
    objetivos: course.objectives || [],
    incluye: [],
    novedades_2026: [],
    competencias_profesionales: course.skills || [],
    posiciones_laborales: [],
    certificacion: course.certification ? {
      nombre: course.certification,
      requisitos: [],
      validez: 'Permanente',
      verificable: true
    } : undefined,
    actualizacion: course.updatedAt.toISOString(),
    vigencia: undefined,
    lastUpdated: course.updatedAt.toISOString(),
    enrollmentCount: course.enrollmentCount,
    rating: course.rating ? Number(course.rating) : undefined,
    reviewsCount: course.reviewsCount,
    imagen: course.thumbnail || '/images/logodis.PNG',
  }));
}

export async function getCourse(slug: string): Promise<(CourseMetadata & { modules: Module[] }) | null> {
  const course = await prisma.course.findUnique({
    where: {
      slug,
      status: 'PUBLISHED'
    },
    include: {
      instructor: {
        select: {
          name: true
        }
      },
      modules: {
        orderBy: {
          order: 'asc'
        },
        include: {
          lessons: {
            where: {
              published: true
            },
            orderBy: {
              order: 'asc'
            }
          }
        }
      }
    }
  });

  if (!course) {
    return null;
  }

  const modules: Module[] = course.modules.map(module => ({
    id: module.id,
    number: module.order,
    title: module.title,
    description: module.description || '',
    duration: `${module.duration || 0}h`,
    lessons: module.lessons.map(lesson => ({
      id: lesson.id,
      moduleId: module.id,
      number: lesson.order,
      title: lesson.title,
      slug: `leccion-${lesson.order}`,
      duration: lesson.duration || 0,
      content: lesson.richText || undefined,
      excerpt: lesson.description || undefined,
    })),
    temas: []
  }));

  return {
    id: course.id,
    slug: course.slug,
    titulo: course.title,
    descripcion: course.description || '',
    precio: Number(course.price),
    moneda: 'USD',
    duracion: `${course.duration || 0}h`,
    nivel: course.level,
    categoria: course.category,
    subcategoria: undefined,
    version: course.version,
    idioma: 'Español',
    instructor: course.instructor?.name || 'DISTMAH ATC',
    prerequisitos: course.prerequisites || [],
    objetivos: course.objectives || [],
    incluye: [],
    novedades_2026: [],
    competencias_profesionales: course.skills || [],
    posiciones_laborales: [],
    certificacion: course.certification ? {
      nombre: course.certification,
      requisitos: [],
      validez: 'Permanente',
      verificable: true
    } : undefined,
    actualizacion: course.updatedAt.toISOString(),
    vigencia: undefined,
    lastUpdated: course.updatedAt.toISOString(),
    enrollmentCount: course.enrollmentCount,
    rating: course.rating ? Number(course.rating) : undefined,
    reviewsCount: course.reviewsCount,
    imagen: course.thumbnail || '/images/logodis.PNG',
    modules,
  };
}

export async function getModules(courseSlug: string): Promise<Module[]> {
  const course = await prisma.course.findUnique({
    where: { slug: courseSlug },
    include: {
      modules: {
        orderBy: { order: 'asc' },
        include: {
          lessons: {
            where: { published: true },
            orderBy: { order: 'asc' }
          }
        }
      }
    }
  });

  if (!course) return [];

  return course.modules.map(module => ({
    id: module.id,
    number: module.order,
    title: module.title,
    description: module.description || '',
    duration: `${module.duration || 0}h`,
    lessons: module.lessons.map(lesson => ({
      id: lesson.id,
      moduleId: module.id,
      number: lesson.order,
      title: lesson.title,
      slug: `leccion-${lesson.order}`,
      duration: lesson.duration || 0,
      excerpt: lesson.description || undefined,
    })),
  }));
}

export async function getLessons(courseSlug: string, moduleId: string): Promise<Lesson[]> {
  const lessons = await prisma.lesson.findMany({
    where: {
      moduleId,
      published: true
    },
    orderBy: {
      order: 'asc'
    }
  });

  return lessons.map(lesson => ({
    id: lesson.id,
    moduleId: lesson.moduleId,
    number: lesson.order,
    title: lesson.title,
    slug: `leccion-${lesson.order}`,
    duration: lesson.duration || 0,
    excerpt: lesson.description || undefined,
  }));
}

export async function getLesson(courseSlug: string, moduleId: string, lessonSlug: string): Promise<Lesson | null> {
  const lessonNumber = parseInt(lessonSlug.replace('leccion-', ''));

  const lesson = await prisma.lesson.findFirst({
    where: {
      moduleId,
      order: lessonNumber,
      published: true
    }
  });

  if (!lesson) return null;

  return {
    id: lesson.id,
    moduleId: lesson.moduleId,
    number: lesson.order,
    title: lesson.title,
    slug: `leccion-${lesson.order}`,
    duration: lesson.duration || 0,
    content: lesson.richText || undefined,
    excerpt: lesson.description || undefined,
  };
}
