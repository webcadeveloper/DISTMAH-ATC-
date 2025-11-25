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
