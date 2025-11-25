// Shared types for the application
// Single source of truth for type definitions

export type LessonType = 'video' | 'reading' | 'exercise' | 'live-class' | 'quiz';

export type CourseCategory = 'AutoCAD' | 'Revit' | 'Civil3D' | 'Navisworks' | 'BIM360';

export type CourseLevel = 'Básico' | 'Intermedio' | 'Avanzado' | 'Básico a Avanzado' | 'Intermedio a Avanzado' | 'Actualización';

export interface LessonContent {
  type?: 'markdown' | 'video' | 'interactive';
  url?: string;
  videoUrl?: string;
  content?: string;
  richText?: string;
  thumbnail?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'document' | 'video' | 'file' | 'external' | 'pdf';
  url: string;
  description?: string;
  size?: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  description: string;
  duration: number;
  type: LessonType;
  order: number;
  slug?: string;
  content?: LessonContent | string;
  resources?: Resource[];
  exercises?: string[];
  quiz?: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: number;
  order: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  version: string;
  software: string;
  title: string;
  subtitle: string;
  category: CourseCategory;
  level: CourseLevel;
  duration: number;
  sessions: number;
  description: string;
  objectives: string[];
  prerequisites: string[];
  certification: string;
  instructor: string;
  price: number;
  priceVEF?: number;
  image: string;
  thumbnail: string;
  featured: boolean;
  popular: boolean;
  enrollmentCount: number;
  rating: number;
  reviewsCount: number;
  skills: string[];
  tags: string[];
  lastUpdated: string;
  releaseDate: string;
  syllabus: Module[];
  modules?: Module[];
}
