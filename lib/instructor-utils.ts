/**
 * Utilidades para el dashboard de instructor
 * Funciones helper para edición de cursos Markdown
 */

export interface LessonFrontmatter {
  titulo: string;
  descripcion?: string;
  duracion?: string;
  objetivos?: string[];
  [key: string]: any;
}

export interface ModuleFrontmatter {
  titulo: string;
  descripcion?: string;
  orden?: number;
  [key: string]: any;
}

export interface CourseData {
  id: string;
  titulo: string;
  slug: string;
  descripcion: string;
  duracion: string;
  nivel: 'basico' | 'intermedio' | 'avanzado';
  precio: number;
  version: string;
  idioma: string;
  software: string;
  categoria: string;
  instructor: string;
  modulos: CourseModule[];
}

export interface CourseModule {
  id: string;
  titulo: string;
  descripcion: string;
  orden: number;
  lecciones: CourseLesson[];
}

export interface CourseLesson {
  id: string;
  titulo: string;
  slug: string;
  descripcion?: string;
  duracion?: string;
  tipo: 'video' | 'lectura' | 'ejercicio' | 'evaluacion';
  orden: number;
}

/**
 * Formatea el frontmatter de una lección para guardar
 */
export function formatLessonFrontmatter(frontmatter: LessonFrontmatter): LessonFrontmatter {
  return {
    titulo: frontmatter.titulo || 'Sin título',
    descripcion: frontmatter.descripcion || '',
    duracion: frontmatter.duracion || '',
    objetivos: frontmatter.objetivos || [],
    ...frontmatter
  };
}

/**
 * Formatea el frontmatter de un módulo para guardar
 */
export function formatModuleFrontmatter(frontmatter: ModuleFrontmatter): ModuleFrontmatter {
  return {
    titulo: frontmatter.titulo || 'Sin título',
    descripcion: frontmatter.descripcion || '',
    orden: frontmatter.orden || 1,
    ...frontmatter
  };
}

/**
 * Valida que los datos del curso sean correctos
 */
export function validateCourseData(courseData: Partial<CourseData>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!courseData.id) errors.push('Falta ID del curso');
  if (!courseData.titulo) errors.push('Falta título del curso');
  if (!courseData.slug) errors.push('Falta slug del curso');
  if (!courseData.descripcion) errors.push('Falta descripción del curso');
  if (!courseData.duracion) errors.push('Falta duración del curso');
  if (!courseData.nivel) errors.push('Falta nivel del curso');
  if (courseData.precio === undefined) errors.push('Falta precio del curso');
  if (!courseData.version) errors.push('Falta versión del curso');
  if (!courseData.idioma) errors.push('Falta idioma del curso');
  if (!courseData.software) errors.push('Falta software del curso');
  if (!courseData.categoria) errors.push('Falta categoría del curso');

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Genera un slug válido a partir de un texto
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .trim()
    .replace(/\s+/g, '-') // Reemplazar espacios por guiones
    .replace(/-+/g, '-'); // Remover guiones múltiples
}

/**
 * Genera el nombre de archivo para una lección
 */
export function generateLessonFileName(titulo: string, orden?: number): string {
  const slug = generateSlug(titulo);
  return orden ? `leccion-${orden}.md` : `${slug}.md`;
}

/**
 * Genera el ID de un módulo
 */
export function generateModuleId(titulo: string, orden?: number): string {
  const slug = generateSlug(titulo);
  return orden ? `modulo-${orden}-${slug}` : `modulo-${slug}`;
}

/**
 * Extrae el número de lección del nombre de archivo
 */
export function extractLessonNumber(fileName: string): number | null {
  const match = fileName.match(/leccion-(\d+)/);
  return match ? parseInt(match[1]) : null;
}

/**
 * Extrae el número de módulo del ID
 */
export function extractModuleNumber(moduleId: string): number | null {
  const match = moduleId.match(/modulo-(\d+)/);
  return match ? parseInt(match[1]) : null;
}

/**
 * Formatea el tamaño de archivo para mostrar
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Valida que una imagen sea válida
 */
export function validateImage(file: File): {
  valid: boolean;
  error?: string;
} {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Tipo de archivo no permitido. Use JPEG, PNG, GIF, WebP o SVG.'
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'El archivo es demasiado grande. Máximo 5MB.'
    };
  }

  return { valid: true };
}

/**
 * Genera el markdown para una imagen
 */
export function generateImageMarkdown(url: string, alt: string = 'Imagen'): string {
  return `![${alt}](${url})`;
}

/**
 * Parsea el contenido Markdown para extraer imágenes
 */
export function extractImagesFromMarkdown(markdown: string): string[] {
  const imageRegex = /!\[.*?\]\((.*?)\)/g;
  const images: string[] = [];
  let match;

  while ((match = imageRegex.exec(markdown)) !== null) {
    images.push(match[1]);
  }

  return images;
}

/**
 * Verifica si un archivo Markdown tiene cambios no guardados
 */
export function hasUnsavedChanges(original: string, current: string): boolean {
  return original.trim() !== current.trim();
}

/**
 * Genera un backup timestamp
 */
export function generateBackupTimestamp(): string {
  const now = new Date();
  return now.toISOString().replace(/[:.]/g, '-').split('.')[0];
}
