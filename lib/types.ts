// Shared types for the application
// Single source of truth for type definitions

export type LessonType = 'video' | 'reading' | 'exercise' | 'live-class' | 'quiz';

export type CourseCategory = 'AutoCAD' | 'Revit' | 'Civil3D' | 'Navisworks' | 'BIM360' | 'Plant3D' | 'Inventor' | 'Other';

export type CourseLevel = 'Básico' | 'Intermedio' | 'Avanzado' | 'Especializado';

export interface Resource {
    id: string;
    title: string;
    type: 'pdf' | 'dwg' | 'rvt' | 'zip' | 'video' | 'link';
    url: string;
    size?: number;
}

export interface LessonContent {
    videoUrl?: string;
    videoStreamId?: string;
    richText?: string;
    embedCode?: string;
    files?: string[];
}

export interface Lesson {
    id: string;
    moduleId: string;
    number: number;
    title: string;
    description: string;
    duration: number; // minutes
    type: LessonType;
    order: number;
    content?: LessonContent;
    resources?: Resource[];
    isCompleted?: boolean; // For student progress
}

export interface Module {
    id: string;
    number: number;
    title: string;
    description: string;
    duration: number; // hours
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
    category: string;
    level: CourseLevel;
    duration: number; // hours
    sessions: number;
    description: string;
    objectives: string[];
    prerequisites: string[];
    certification: string;
    instructor: string;
    price: number;
    priceVEF: number;
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
}
