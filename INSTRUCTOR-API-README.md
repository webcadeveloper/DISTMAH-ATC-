# API de Edición de Cursos - Dashboard de Instructor

Sistema completo de APIs para permitir que los profesores editen los archivos Markdown de los cursos directamente desde el dashboard.

## Características

- **Edición completa de lecciones**: GET, PUT, DELETE con backups automáticos
- **Gestión de módulos**: Editar README.md de módulos
- **Edición de curso.json**: Actualizar metadatos del curso
- **Subida de imágenes**: Upload con validación y generación de URLs
- **Sistema de papelera**: Los archivos eliminados se mueven a `.trash/` en lugar de borrarse
- **Backups automáticos**: Cada edición crea un backup antes de guardar
- **Changelog**: Log de todos los cambios para auditoría
- **Validación**: Tipos de archivo, tamaños, y estructura de datos

---

## APIs Disponibles

### 1. Lecciones

#### GET - Obtener lección para editar
```typescript
GET /api/instructor/cursos/[slug]/lecciones/[moduleId]/[lessonSlug]

Response:
{
  frontmatter: {
    titulo: string;
    descripcion?: string;
    duracion?: string;
    objetivos?: string[];
  };
  content: string;
  path: string;
}
```

#### PUT - Actualizar lección
```typescript
PUT /api/instructor/cursos/[slug]/lecciones/[moduleId]/[lessonSlug]

Body:
{
  frontmatter: { ... };
  content: string;
}

Response:
{
  success: true;
  message: "Lección actualizada exitosamente";
}
```

#### DELETE - Eliminar lección (mueve a papelera)
```typescript
DELETE /api/instructor/cursos/[slug]/lecciones/[moduleId]/[lessonSlug]

Response:
{
  success: true;
  message: "Lección movida a papelera";
  trashPath: string;
}
```

#### POST - Crear nueva lección
```typescript
POST /api/instructor/cursos/[slug]/lecciones/[moduleId]/create

Body:
{
  lessonSlug: string;
  titulo: string;
  descripcion?: string;
  duracion?: string;
  tipo?: 'video' | 'lectura' | 'ejercicio' | 'evaluacion';
  orden?: number;
}

Response:
{
  success: true;
  message: "Lección creada exitosamente";
  lessonSlug: string;
  path: string;
}
```

---

### 2. Módulos

#### GET - Obtener módulo
```typescript
GET /api/instructor/cursos/[slug]/modulos/[moduleId]

Response:
{
  frontmatter: {
    titulo: string;
    descripcion?: string;
    orden?: number;
  };
  content: string;
  lecciones: string[];
  path: string;
}
```

#### PUT - Actualizar módulo
```typescript
PUT /api/instructor/cursos/[slug]/modulos/[moduleId]

Body:
{
  frontmatter: { ... };
  content: string;
}

Response:
{
  success: true;
  message: "Módulo actualizado exitosamente";
}
```

#### DELETE - Eliminar módulo (mueve a papelera)
```typescript
DELETE /api/instructor/cursos/[slug]/modulos/[moduleId]

Response:
{
  success: true;
  message: "Módulo movido a papelera";
  trashPath: string;
}
```

---

### 3. Curso JSON

#### GET - Obtener curso.json
```typescript
GET /api/instructor/cursos/[slug]/curso-json

Response: CourseData
```

#### PUT - Actualizar curso.json
```typescript
PUT /api/instructor/cursos/[slug]/curso-json

Body: CourseData

Response:
{
  success: true;
  message: "Curso actualizado exitosamente";
}
```

#### POST - Crear nuevo módulo en el curso
```typescript
POST /api/instructor/cursos/[slug]/curso-json

Body:
{
  moduleId: string;
  moduleTitle: string;
  moduleDescription?: string;
}

Response:
{
  success: true;
  message: "Módulo creado exitosamente";
  moduleId: string;
  path: string;
}
```

---

### 4. Imágenes

#### POST - Subir imagen
```typescript
POST /api/instructor/cursos/[slug]/imagenes/upload

FormData:
- file: File (imagen)
- moduleId?: string (opcional)

Response:
{
  success: true;
  fileName: string;
  url: string;           // URL relativa para Markdown
  fullUrl: string;       // URL completa para preview
  size: number;
  type: string;
}
```

#### GET - Listar imágenes
```typescript
GET /api/instructor/cursos/[slug]/imagenes/upload?moduleId=...

Response:
{
  images: [
    {
      name: string;
      url: string;
      size: number;
      modified: string;
    }
  ];
  count: number;
}
```

#### DELETE - Eliminar imagen
```typescript
DELETE /api/instructor/cursos/[slug]/imagenes/upload?fileName=...&moduleId=...

Response:
{
  success: true;
  message: "Imagen movida a papelera";
  trashPath: string;
}
```

---

## Componentes React

### 1. MarkdownEditor
Editor Markdown con preview en vivo, toolbar, y drag & drop de imágenes.

```tsx
import { MarkdownEditor } from '@/components/instructor/MarkdownEditor';

<MarkdownEditor
  value={content}
  onChange={setContent}
  courseSlug="revit-2026-basico"
  moduleId="modulo-1-introduccion"
  placeholder="Escribe tu contenido..."
/>
```

#### Características:
- Vista previa en tiempo real
- Toolbar con formato rápido (negrita, cursiva, código, etc.)
- Paste de imágenes desde clipboard
- Upload de imágenes con drag & drop
- Contador de caracteres
- Atajos de teclado

### 2. LessonEditor
Componente completo para editar lecciones con frontmatter.

```tsx
import { LessonEditor } from '@/components/instructor/LessonEditor';

<LessonEditor
  courseSlug="revit-2026-basico"
  moduleId="modulo-1-introduccion"
  lessonSlug="leccion-1"
  onSave={() => console.log('Saved!')}
  onCancel={() => router.back()}
/>
```

### 3. ModuleEditor
Componente completo para editar módulos.

```tsx
import { ModuleEditor } from '@/components/instructor/ModuleEditor';

<ModuleEditor
  courseSlug="revit-2026-basico"
  moduleId="modulo-1-introduccion"
  onSave={() => console.log('Saved!')}
/>
```

---

## Utilidades

### lib/instructor-utils.ts

Funciones helper para trabajar con cursos:

```typescript
import {
  generateSlug,
  generateLessonFileName,
  generateModuleId,
  validateImage,
  formatFileSize,
  extractImagesFromMarkdown,
  hasUnsavedChanges
} from '@/lib/instructor-utils';

// Generar slug válido
const slug = generateSlug('Introducción a Revit 2026');
// => "introduccion-a-revit-2026"

// Validar imagen
const { valid, error } = validateImage(file);

// Extraer imágenes de Markdown
const images = extractImagesFromMarkdown(content);
// => ["./imagenes/img1.png", "./imagenes/img2.jpg"]
```

---

## Sistema de Backups

Todas las operaciones de escritura crean backups automáticos:

### Estructura de backups:
```
public/cursos/revit-2026-basico/
├── curso.json
├── curso.json.backup          # Backup automático
├── modulo-1-introduccion/
│   ├── README.md
│   ├── README.md.backup       # Backup automático
│   └── lecciones/
│       ├── leccion-1.md
│       └── leccion-1.md.backup  # Backup automático
└── .trash/                    # Archivos eliminados
    └── modulo-1-introduccion/
        └── 1732450123-leccion-2.md
```

### Changelog
Todas las operaciones se registran en `.changelog.json`:

```json
[
  {
    "timestamp": "2024-11-24T10:30:00.000Z",
    "action": "update_lesson",
    "moduleId": "modulo-1-introduccion",
    "lessonSlug": "leccion-1"
  },
  {
    "timestamp": "2024-11-24T10:35:00.000Z",
    "action": "upload_image",
    "file": "1732450500-screenshot.png",
    "moduleId": "modulo-1-introduccion",
    "size": 245678,
    "type": "image/png"
  }
]
```

---

## Seguridad

### Validaciones implementadas:

1. **Tipos de archivo**: Solo JPEG, PNG, GIF, WebP, SVG
2. **Tamaño máximo**: 5MB por imagen
3. **Sanitización de nombres**: Caracteres especiales removidos
4. **Paths seguros**: Validación de rutas para evitar directory traversal
5. **Backups**: Restauración automática en caso de error

### Validaciones pendientes (agregar según necesidad):

1. **Autenticación**: Verificar que el usuario sea instructor del curso
2. **Autorización**: Verificar permisos específicos por curso
3. **Rate limiting**: Limitar uploads y ediciones por tiempo
4. **Validación de contenido**: Prevenir XSS en Markdown

---

## Ejemplo de Uso Completo

```tsx
'use client';

import { useState } from 'react';
import { LessonEditor } from '@/components/instructor/LessonEditor';
import { useRouter } from 'next/navigation';

export default function EditLessonPage({
  params
}: {
  params: { slug: string; moduleId: string; lessonSlug: string }
}) {
  const router = useRouter();

  return (
    <div className="container mx-auto py-8">
      <LessonEditor
        courseSlug={params.slug}
        moduleId={params.moduleId}
        lessonSlug={params.lessonSlug}
        onSave={() => {
          router.push(`/instructor/cursos/${params.slug}/contenido`);
        }}
        onCancel={() => {
          router.back();
        }}
      />
    </div>
  );
}
```

---

## Rutas de Archivos

Todas las APIs trabajan con la estructura de archivos existente:

```
public/cursos/
└── [slug]/                           # Ej: revit-2026-basico
    ├── curso.json                    # Metadatos del curso
    ├── .changelog.json               # Log de cambios
    ├── imagenes/                     # Imágenes del curso
    ├── .trash/                       # Archivos eliminados
    └── [moduleId]/                   # Ej: modulo-1-introduccion
        ├── README.md                 # Descripción del módulo
        ├── imagenes/                 # Imágenes del módulo
        └── lecciones/                # Lecciones del módulo
            ├── leccion-1.md
            ├── leccion-2.md
            └── ...
```

---

## Próximos Pasos

1. **Agregar autenticación**: Middleware para verificar que el usuario sea instructor
2. **Versionado**: Sistema de versiones para poder hacer rollback
3. **Preview antes de guardar**: Vista previa del archivo renderizado
4. **Colaboración**: Edición simultánea con locks
5. **Sugerencias IA**: Autocompletado y sugerencias de contenido
6. **Templates**: Plantillas predefinidas para lecciones y módulos
7. **Importar/Exportar**: Importar desde Word/PDF, exportar a diferentes formatos

---

## Soporte

Para reportar bugs o solicitar features:
- GitHub Issues: [repositorio]
- Email: instructor@distmah.com

---

**Creado por:** DISTMAH ATC - Authorized Training Center Autodesk
**Fecha:** Noviembre 2024
**Versión:** 1.0.0
