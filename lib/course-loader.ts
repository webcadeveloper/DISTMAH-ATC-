import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
  const cursosDir = path.join(process.cwd(), 'public', 'cursos');

  if (!fs.existsSync(cursosDir)) {
    console.warn('Directorio de cursos no existe:', cursosDir);
    return [];
  }

  const entries = fs.readdirSync(cursosDir, { withFileTypes: true });

  const courses: CourseMetadata[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.endsWith('.md')) {
      const cursoJsonPath = path.join(cursosDir, entry.name, 'curso.json');

      if (fs.existsSync(cursoJsonPath)) {
        try {
          const cursoData = JSON.parse(fs.readFileSync(cursoJsonPath, 'utf-8'));

          const duracion = typeof cursoData.duracion === 'object'
            ? `${cursoData.duracion.horas}h`
            : cursoData.duracion;

          const precio = typeof cursoData.precio === 'object'
            ? cursoData.precio.valor
            : cursoData.precio;

          const moneda = typeof cursoData.precio === 'object'
            ? cursoData.precio.moneda
            : 'USD';

          const instructor = typeof cursoData.instructor === 'object'
            ? (cursoData.instructor?.nombre || 'DISTMAH ATC')
            : (cursoData.instructor || 'DISTMAH ATC');

          const softwareStr = typeof cursoData.software === 'string'
            ? cursoData.software
            : (cursoData.software?.version || cursoData.software?.nombre || '');
          const version = softwareStr.includes('2026') ? '2026' : (cursoData.version || '2025');

          courses.push({
            id: cursoData.id || entry.name,
            titulo: cursoData.titulo || entry.name,
            descripcion: cursoData.descripcion || '',
            precio: precio || 390,
            moneda: moneda,
            duracion: duracion,
            nivel: cursoData.nivel || 'Básico',
            categoria: cursoData.categoria || 'General',
            subcategoria: cursoData.subcategoria,
            version: version,
            idioma: cursoData.idioma || 'Español',
            instructor: instructor,
            prerequisitos: cursoData.prerequisitos || [],
            objetivos: cursoData.objetivos || [],
            incluye: cursoData.materiales || cursoData.incluye || [],
            novedades_2026: cursoData.novedades_2026 || [],
            competencias_profesionales: cursoData.competencias_profesionales || [],
            posiciones_laborales: cursoData.posiciones_laborales || [],
            certificacion: cursoData.certificacion,
            actualizacion: cursoData.fecha_actualizacion || cursoData.actualizacion,
            vigencia: cursoData.vigencia,
            lastUpdated: cursoData.fecha_actualizacion || cursoData.lastUpdated,
            enrollmentCount: cursoData.enrollmentCount,
            rating: cursoData.rating || 4.9,
            reviewsCount: cursoData.reviewsCount,
            imagen: cursoData.imagen || `/cursos/${entry.name}/cover.jpg`,
            slug: entry.name,
          });
        } catch (error) {
          console.error(`Error parsing curso.json for ${entry.name}:`, error);
        }
      }
    }
  }

  return courses;
}

export async function getCourse(slug: string): Promise<(CourseMetadata & { modules: Module[] }) | null> {
  const cursoPath = path.join(process.cwd(), 'public', 'cursos', slug);
  const cursoJsonPath = path.join(cursoPath, 'curso.json');

  if (!fs.existsSync(cursoJsonPath)) {
    return null;
  }

  try {
    const cursoData = JSON.parse(fs.readFileSync(cursoJsonPath, 'utf-8'));

    const modules = await getModules(slug);

    return {
      ...cursoData,
      slug,
      modules,
    };
  } catch (error) {
    console.error(`Error loading course ${slug}:`, error);
    return null;
  }
}

export async function getModules(courseSlug: string): Promise<Module[]> {
  const cursoPath = path.join(process.cwd(), 'public', 'cursos', courseSlug);

  if (!fs.existsSync(cursoPath)) {
    return [];
  }

  const entries = fs.readdirSync(cursoPath, { withFileTypes: true });

  const modules: Module[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name.startsWith('modulo-')) {
      const modulePath = path.join(cursoPath, entry.name);
      const readmePath = path.join(modulePath, 'README.md');

      let moduleData: any = {
        title: entry.name,
        description: '',
        duration: '0 horas',
      };

      if (fs.existsSync(readmePath)) {
        try {
          const readmeContent = fs.readFileSync(readmePath, 'utf-8');
          const { data, content } = matter(readmeContent);
          moduleData = {
            title: data.title || extractTitleFromMarkdown(content) || entry.name,
            description: data.description || extractFirstParagraph(content) || '',
            duration: data.duration || '0 horas',
          };
        } catch (error) {
          console.error(`Error reading README for module ${entry.name}:`, error);
        }
      }

      const moduleNumber = parseInt(entry.name.match(/modulo-(\d+)/)?.[1] || '0');

      const lessons = await getLessons(courseSlug, entry.name);

      modules.push({
        id: entry.name,
        number: moduleNumber,
        title: moduleData.title,
        description: moduleData.description,
        duration: moduleData.duration,
        lessons,
      });
    }
  }

  return modules.sort((a, b) => a.number - b.number);
}

export async function getLessons(courseSlug: string, moduleId: string): Promise<Lesson[]> {
  const leccionesPath = path.join(process.cwd(), 'public', 'cursos', courseSlug, moduleId, 'lecciones');

  if (!fs.existsSync(leccionesPath)) {
    return [];
  }

  const files = fs.readdirSync(leccionesPath).filter(f => f.endsWith('.md'));

  const lessons: Lesson[] = [];

  for (const file of files) {
    try {
      const filePath = path.join(leccionesPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: markdown } = matter(content);

      const lessonNumberMatch = file.match(/leccion-(\d+)/) || file.match(/leccion-\d+-(\d+)/);
      const lessonNumber = parseInt(lessonNumberMatch?.[1] || '0');

      const title = data.title || extractTitleFromMarkdown(markdown) || file.replace('.md', '');

      lessons.push({
        id: file.replace('.md', ''),
        moduleId,
        number: lessonNumber,
        title,
        slug: file.replace('.md', ''),
        duration: data.duration || 60,
        excerpt: data.description || extractFirstParagraph(markdown) || '',
      });
    } catch (error) {
      console.error(`Error reading lesson ${file}:`, error);
    }
  }

  return lessons.sort((a, b) => a.number - b.number);
}

export async function getLesson(courseSlug: string, moduleId: string, lessonSlug: string): Promise<Lesson | null> {
  const leccionesPath = path.join(process.cwd(), 'public', 'cursos', courseSlug, moduleId, 'lecciones');

  if (!fs.existsSync(leccionesPath)) {
    return null;
  }

  const files = fs.readdirSync(leccionesPath);
  const lessonFile = files.find(f => f.replace('.md', '') === lessonSlug);

  if (!lessonFile) {
    return null;
  }

  try {
    const lessonPath = path.join(leccionesPath, lessonFile);
    const fileContent = fs.readFileSync(lessonPath, 'utf-8');
    const { data, content } = matter(fileContent);

    const lessonNumberMatch = lessonFile.match(/leccion-(\d+)/) || lessonFile.match(/leccion-\d+-(\d+)/);
    const lessonNumber = parseInt(lessonNumberMatch?.[1] || '0');

    return {
      id: lessonSlug,
      moduleId,
      number: lessonNumber,
      title: data.title || extractTitleFromMarkdown(content) || lessonSlug,
      slug: lessonSlug,
      duration: data.duration || 60,
      content: content,
      excerpt: data.description || extractFirstParagraph(content) || '',
    };
  } catch (error) {
    console.error(`Error loading lesson ${lessonSlug}:`, error);
    return null;
  }
}

function extractTitleFromMarkdown(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function extractFirstParagraph(markdown: string): string {
  const lines = markdown.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('**') && !trimmed.startsWith('---')) {
      return trimmed.substring(0, 200);
    }
  }
  return '';
}
