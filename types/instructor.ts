/**
 * Type definitions for Instructor API
 */

export interface LessonFrontmatter {
  titulo: string;
  descripcion?: string;
  duracion?: string;
  objetivos?: string[];
  tipo?: 'video' | 'lectura' | 'ejercicio' | 'evaluacion';
  orden?: number;
  [key: string]: any;
}

export interface ModuleFrontmatter {
  titulo: string;
  descripcion?: string;
  orden?: number;
  [key: string]: any;
}

export interface LessonData {
  frontmatter: LessonFrontmatter;
  content: string;
  path?: string;
}

export interface ModuleData {
  frontmatter: ModuleFrontmatter;
  content: string;
  lecciones?: string[];
  path?: string;
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

export interface ImageUploadResponse {
  success: boolean;
  fileName: string;
  url: string;
  fullUrl: string;
  size: number;
  type: string;
}

export interface ImageListItem {
  name: string;
  url: string;
  size: number;
  modified: string;
}

export interface ImageListResponse {
  images: ImageListItem[];
  count: number;
}

export interface ApiSuccessResponse {
  success: true;
  message: string;
  [key: string]: any;
}

export interface ApiErrorResponse {
  error: string;
  details?: string;
}

export interface ChangelogEntry {
  timestamp: string;
  action: 'create_lesson' | 'update_lesson' | 'delete_lesson' |
          'create_module' | 'update_module' | 'delete_module' |
          'update_course_json' | 'upload_image' | 'delete_image';
  file?: string;
  moduleId?: string;
  lessonSlug?: string;
  titulo?: string;
  size?: number;
  type?: string;
}

export interface CreateLessonRequest {
  lessonSlug: string;
  titulo: string;
  descripcion?: string;
  duracion?: string;
  tipo?: 'video' | 'lectura' | 'ejercicio' | 'evaluacion';
  orden?: number;
}

export interface CreateModuleRequest {
  moduleId: string;
  moduleTitle: string;
  moduleDescription?: string;
}

export interface UpdateLessonRequest {
  frontmatter: LessonFrontmatter;
  content: string;
}

export interface UpdateModuleRequest {
  frontmatter: ModuleFrontmatter;
  content: string;
}

export interface UpdateCourseRequest extends CourseData {}

export interface ValidationResult {
  valid: boolean;
  errors?: string[];
  error?: string;
}
