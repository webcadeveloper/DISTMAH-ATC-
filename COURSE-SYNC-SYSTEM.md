# Sistema de Sincronización de Cursos - DISTMAH ATC

## Descripción General

Sistema completo para sincronizar cursos desde archivos Markdown en `public/cursos/` a Next.js con renderizado dinámico, generación estática y API endpoints.

## Estructura de Archivos

```
public/cursos/
├── [curso-slug]/
│   ├── curso.json                    # Metadata del curso
│   ├── modulo-1-nombre/
│   │   ├── README.md                 # Info del módulo (opcional)
│   │   └── lecciones/
│   │       ├── leccion-1.md
│   │       ├── leccion-2.md
│   │       └── ...
│   ├── modulo-2-nombre/
│   │   └── lecciones/
│   │       └── ...
│   └── imagenes/                     # Imágenes del curso
│       ├── portada.png
│       └── ...
```

## Formato de `curso.json`

```json
{
  "id": "curso-id",
  "titulo": "Título del Curso",
  "descripcion": "Descripción completa...",
  "precio": 225,
  "moneda": "USD",
  "duracion": "16 horas",
  "nivel": "Intermedio",
  "categoria": "Revit",
  "subcategoria": "MEP",
  "version": "2026",
  "idioma": "Español",
  "instructor": "Ing. Nombre Apellido",
  "prerequisitos": [
    "Revit Architecture 2026",
    "Conocimientos básicos de..."
  ],
  "objetivos": [
    "Dominar...",
    "Diseñar..."
  ],
  "incluye": [
    "16 lecciones completas",
    "Certificado digital"
  ],
  "certificacion": {
    "nombre": "Certificado Digital - ...",
    "requisitos": [
      "Completar las 16 lecciones",
      "Aprobar ejercicios"
    ],
    "validez": "Permanente",
    "verificable": true
  },
  "actualizacion": "2025-11-22",
  "vigencia": "2026"
}
```

## Formato de Lecciones Markdown

### Archivo: `leccion-1-nombre.md`

```markdown
---
title: "Título de la Lección"
description: "Breve descripción"
duration: 60
---

# Título de la Lección

## Objetivo de Aprendizaje
Descripción del objetivo...

## 1. Sección Principal

Contenido de la lección...

### 1.1 Subsección

Más contenido...

## Resumen

Puntos clave...

---

**Duración:** 3 horas
**Siguiente:** Lección 2 - Título
```

## Archivos Creados

### 1. Core System

- **`lib/course-loader.ts`**: Funciones principales para cargar cursos
  - `getAllCourses()`: Obtiene todos los cursos
  - `getCourse(slug)`: Obtiene un curso específico con módulos
  - `getModules(courseSlug)`: Obtiene módulos de un curso
  - `getLessons(courseSlug, moduleId)`: Obtiene lecciones de un módulo
  - `getLesson(courseSlug, moduleId, lessonSlug)`: Obtiene una lección específica

### 2. API Routes

- **`app/api/cursos/route.ts`**: GET `/api/cursos` - Lista todos los cursos
- **`app/api/cursos/[slug]/route.ts`**: GET `/api/cursos/[slug]` - Detalle de curso
- **`app/api/cursos/[slug]/[moduleId]/[lessonSlug]/route.ts`**: GET de lección específica

### 3. Páginas

- **`app/[locale]/(public)/cursos/page.tsx`**: Catálogo de cursos
- **`app/[locale]/(public)/cursos/[slug]/page.tsx`**: Detalle de curso con módulos
- **`app/[locale]/(public)/cursos/[slug]/[moduleId]/[lessonSlug]/page.tsx`**: Lección individual

### 4. Componentes

- **`components/CourseCard.tsx`**: Tarjeta de curso para listado
- **`components/ModuleList.tsx`**: Lista de módulos y lecciones
- **`components/MarkdownContent.tsx`**: Renderizador de Markdown con estilos

### 5. Types

- **`lib/types/course.ts`**: Tipos TypeScript para CourseMetadata, Module, Lesson

## Características Implementadas

### 1. Detección Automática
- Lee dinámicamente todos los cursos de `public/cursos/`
- Detecta módulos automáticamente (carpetas `modulo-*`)
- Detecta lecciones automáticamente (archivos `.md`)
- Extrae números de módulos y lecciones de nombres de carpetas/archivos

### 2. Parsing de Markdown
- Usa `gray-matter` para frontmatter (metadata)
- Extrae títulos de encabezados `# Título`
- Extrae descripciones del primer párrafo
- Renderiza Markdown con `react-markdown`

### 3. Generación Estática (ISR)
- `generateStaticParams()` para rutas estáticas
- `revalidate = 3600` (1 hora) para ISR
- Pre-renderizado de todas las páginas en build time
- Actualización automática cada hora

### 4. Renderizado de Markdown
- Sintaxis GitHub Flavored Markdown (GFM)
- Tablas, listas, código, citas
- Sanitización HTML con `rehype-sanitize`
- Estilos profesionales aplicados

### 5. Navegación
- Breadcrumbs en todas las páginas
- Navegación anterior/siguiente entre lecciones
- Sidebar con índice del curso
- Destacado de lección actual

### 6. UI/UX Profesional
- Diseño limpio y corporativo (Nolivos Law style)
- Colores: Blanco, Negro, Gris, Azul corporativo
- Responsive design
- Transiciones suaves

## Dependencias Instaladas

```bash
npm install gray-matter react-markdown remark-gfm rehype-raw rehype-sanitize
```

- **gray-matter**: Parse frontmatter de Markdown
- **react-markdown**: Renderizar Markdown a React
- **remark-gfm**: GitHub Flavored Markdown
- **rehype-raw**: Permitir HTML en Markdown
- **rehype-sanitize**: Sanitizar HTML por seguridad

## Cómo Agregar un Nuevo Curso

1. **Crear carpeta en `public/cursos/`**:
   ```
   public/cursos/nuevo-curso-2026/
   ```

2. **Crear `curso.json`**:
   ```json
   {
     "id": "nuevo-curso-2026",
     "titulo": "Nuevo Curso 2026",
     ...
   }
   ```

3. **Crear módulos**:
   ```
   public/cursos/nuevo-curso-2026/modulo-1-introduccion/
   public/cursos/nuevo-curso-2026/modulo-2-avanzado/
   ```

4. **Crear lecciones**:
   ```
   modulo-1-introduccion/lecciones/leccion-1.md
   modulo-1-introduccion/lecciones/leccion-2.md
   ```

5. **Escribir contenido Markdown**:
   ```markdown
   # Lección 1: Introducción

   Contenido de la lección...
   ```

6. **¡Listo!** El sistema detectará automáticamente el nuevo curso

## API Endpoints

### GET `/api/cursos`
Retorna array de todos los cursos:
```json
[
  {
    "id": "revit-2026-mep-electricas",
    "titulo": "Revit MEP 2026 - Instalaciones Eléctricas",
    "slug": "revit-2026-mep-electricas",
    ...
  }
]
```

### GET `/api/cursos/[slug]`
Retorna curso con módulos completos:
```json
{
  "id": "revit-2026-mep-electricas",
  "titulo": "...",
  "modules": [
    {
      "id": "modulo-1-fundamentos-electricos",
      "number": 1,
      "title": "Fundamentos Eléctricos",
      "lessons": [...]
    }
  ]
}
```

### GET `/api/cursos/[slug]/[moduleId]/[lessonSlug]`
Retorna lección específica con contenido completo:
```json
{
  "id": "leccion-1-1-principios-basicos",
  "title": "Principios Básicos de Electricidad",
  "content": "# Lección 1.1...",
  "duration": 60,
  ...
}
```

## Rutas del Frontend

- `/cursos` - Catálogo completo de cursos
- `/cursos/[slug]` - Detalle de curso con módulos y lecciones
- `/cursos/[slug]/[moduleId]/[lessonSlug]` - Lección individual con contenido

## Performance

- **ISR**: Páginas generadas estáticamente, revalidadas cada hora
- **Lazy Loading**: Imágenes y contenido cargado on-demand
- **Edge-Ready**: Compatible con Vercel Edge Functions
- **Fast Navigation**: Client-side routing de Next.js

## Seguridad

- **HTML Sanitization**: `rehype-sanitize` previene XSS
- **No Server-Side Execution**: Markdown parseado server-side, sin eval()
- **Type Safety**: TypeScript en todo el sistema
- **Validated Inputs**: Slugs y IDs validados en runtime

## Mantenimiento

### Actualizar Contenido
1. Editar archivos `.md` en `public/cursos/`
2. Guardar cambios
3. Esperar revalidación (1 hora) o rebuild

### Actualizar Metadata
1. Editar `curso.json` del curso
2. Guardar cambios
3. Sistema detecta automáticamente

### Agregar Módulo
1. Crear carpeta `modulo-X-nombre/`
2. Crear subcarpeta `lecciones/`
3. Agregar archivos `.md`
4. Sistema detecta automáticamente

## Ventajas del Sistema

1. **100% Dinámico**: No hay hardcoding de cursos
2. **Fácil Mantenimiento**: Profesores editan Markdown directamente
3. **Escalable**: Soporta infinitos cursos, módulos y lecciones
4. **Performance**: ISR combina estático + dinámico
5. **SEO Friendly**: Páginas pre-renderizadas
6. **Type Safe**: TypeScript en todo el stack
7. **Profesional**: UI/UX de calidad ATC

## Próximas Mejoras Opcionales

- [ ] Búsqueda de cursos con Algolia
- [ ] Filtros avanzados por categoría/nivel/precio
- [ ] Sistema de progreso del estudiante
- [ ] Bookmarks de lecciones
- [ ] Notas del estudiante en lecciones
- [ ] Descargas de recursos por lección
- [ ] Videos embebidos en lecciones
- [ ] Ejercicios interactivos
- [ ] Evaluaciones automáticas
- [ ] Certificados generados automáticamente

---

**Sistema creado para DISTMAH ATC - Autodesk Authorized Training Center**
**Fecha:** 2025-11-24
**Versión:** 1.0.0
