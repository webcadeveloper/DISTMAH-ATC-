# Guía Rápida - API de Edición de Cursos

Guía para implementar el editor de cursos en el dashboard de instructor.

## Instalación

Todas las dependencias necesarias ya están instaladas:
- `gray-matter` - Para parsear frontmatter
- `react-markdown` - Para preview
- `remark-gfm` - Para GitHub Flavored Markdown

## Uso Rápido

### 1. Editar una Lección

Crea una página en tu dashboard de instructor:

```tsx
// app/[locale]/(dashboard-instructor)/instructor/cursos/[cursoId]/lecciones/[lessonId]/edit/page.tsx

import { LessonEditor } from '@/components/instructor';

export default function EditLessonPage({
  params
}: {
  params: { cursoId: string; lessonId: string }
}) {
  // Obtener slug del curso y moduleId desde tu base de datos
  const courseSlug = 'revit-2026-basico';
  const moduleId = 'modulo-1-introduccion';
  const lessonSlug = 'leccion-1';

  return (
    <div className="container mx-auto py-8">
      <LessonEditor
        courseSlug={courseSlug}
        moduleId={moduleId}
        lessonSlug={lessonSlug}
      />
    </div>
  );
}
```

### 2. Editar un Módulo

```tsx
// app/[locale]/(dashboard-instructor)/instructor/cursos/[cursoId]/modulos/[moduleId]/edit/page.tsx

import { ModuleEditor } from '@/components/instructor';

export default function EditModulePage({
  params
}: {
  params: { cursoId: string; moduleId: string }
}) {
  const courseSlug = 'revit-2026-basico';
  const moduleId = 'modulo-1-introduccion';

  return (
    <div className="container mx-auto py-8">
      <ModuleEditor
        courseSlug={courseSlug}
        moduleId={moduleId}
      />
    </div>
  );
}
```

### 3. Editor Markdown Standalone

Para usar solo el editor Markdown:

```tsx
import { MarkdownEditor } from '@/components/instructor';
import { useState } from 'react';

export function MyEditor() {
  const [content, setContent] = useState('');

  return (
    <MarkdownEditor
      value={content}
      onChange={setContent}
      courseSlug="revit-2026-basico"
      moduleId="modulo-1-introduccion"
      placeholder="Escribe aquí..."
    />
  );
}
```

## Flujo de Trabajo

### Editar Lección Existente

1. Usuario navega a `/instructor/cursos/123/lecciones/456/edit`
2. `LessonEditor` hace GET a la API
3. Usuario edita contenido en `MarkdownEditor`
4. Usuario sube imágenes (drag & drop o paste)
5. Usuario guarda cambios
6. API crea backup automático
7. API guarda archivo `.md` actualizado
8. Changelog registra el cambio

### Crear Nueva Lección

```tsx
const createLesson = async () => {
  const response = await fetch(
    `/api/instructor/cursos/${courseSlug}/lecciones/${moduleId}/create`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lessonSlug: 'leccion-nueva',
        titulo: 'Nueva Lección',
        descripcion: 'Descripción...',
        duracion: '45 minutos',
        tipo: 'lectura',
        orden: 5
      })
    }
  );

  const data = await response.json();
  console.log('Lección creada:', data.lessonSlug);
};
```

### Subir Imagen Manualmente

```tsx
const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('moduleId', 'modulo-1-introduccion');

  const response = await fetch(
    `/api/instructor/cursos/revit-2026-basico/imagenes/upload`,
    {
      method: 'POST',
      body: formData
    }
  );

  const data = await response.json();
  console.log('Imagen subida:', data.url);
  // => "./imagenes/1732450500-screenshot.png"
};
```

## Características del MarkdownEditor

### Toolbar
- **Negrita**: Ctrl+B o botón B
- **Cursiva**: Ctrl+I o botón I
- **Encabezado**: Botón H2
- **Enlace**: Botón Link
- **Código**: Botón Code
- **Imagen**: Botón Imagen

### Paste de Imágenes
1. Copia una imagen (Ctrl+C)
2. Haz click en el editor
3. Pega (Ctrl+V)
4. La imagen se sube automáticamente y se inserta el markdown

### Drag & Drop
1. Arrastra una imagen al editor
2. Suelta la imagen
3. Se sube automáticamente

### Vista Previa
- Alterna entre "Editar" y "Vista Previa"
- Preview con soporte para GitHub Flavored Markdown
- Tablas, listas de tareas, syntax highlighting, etc.

## Mapear IDs a Slugs

Si tu base de datos usa IDs numéricos pero los archivos usan slugs:

```tsx
// lib/course-mapping.ts
export async function getCourseSlugById(courseId: string): Promise<string> {
  // Consulta tu base de datos
  const course = await db.course.findUnique({
    where: { id: courseId }
  });
  return course.slug; // "revit-2026-basico"
}

// Uso en tu página
const courseSlug = await getCourseSlugById(params.cursoId);
```

## Validaciones Recomendadas

### Middleware de Autenticación

```tsx
// app/api/instructor/cursos/[slug]/middleware.ts
import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function middleware(request: Request) {
  const session = await auth();

  if (!session || session.user.role !== 'INSTRUCTOR') {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // Verificar que el instructor tenga acceso a este curso
  const courseSlug = request.url.split('/')[6];
  const hasAccess = await checkInstructorAccess(session.user.id, courseSlug);

  if (!hasAccess) {
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403 }
    );
  }

  return NextResponse.next();
}
```

## Troubleshooting

### Error: "Failed to read lesson"
- Verifica que el archivo `.md` exista en la ruta correcta
- Revisa que los parámetros `slug`, `moduleId`, `lessonSlug` sean correctos
- Verifica permisos de lectura en el filesystem

### Error: "Failed to upload image"
- Verifica que la carpeta `imagenes/` exista
- Revisa que el archivo sea un tipo válido (JPEG, PNG, GIF, WebP, SVG)
- Verifica que el tamaño sea menor a 5MB

### Preview no renderiza Markdown
- Verifica que `remark-gfm` esté instalado
- Revisa la consola del navegador para errores

### Cambios no se guardan
- Verifica que el backup se esté creando (archivo `.backup`)
- Revisa los logs del servidor
- Verifica permisos de escritura

## Personalización

### Custom Image Upload Handler

```tsx
<MarkdownEditor
  value={content}
  onChange={setContent}
  onImageUpload={async (file) => {
    // Tu lógica custom de upload
    const url = await uploadToS3(file);
    return url;
  }}
/>
```

### Styling Custom

```tsx
<MarkdownEditor
  className="border-2 border-blue-500 rounded-xl"
  placeholder="Escribe tu contenido aquí..."
/>
```

## Testing

### Test Manual - Editar Lección

1. Navega a la página de edición
2. Modifica el título en frontmatter
3. Cambia el contenido
4. Sube una imagen
5. Guarda
6. Verifica que:
   - El archivo `.md` se actualizó
   - Se creó un backup `.md.backup`
   - El changelog tiene una entrada nueva
   - La imagen está en `imagenes/`

### Test Manual - Eliminar Lección

1. Elimina una lección via API
2. Verifica que:
   - El archivo ya no existe en `lecciones/`
   - Aparece en `.trash/[curso]/[modulo]/lecciones/`
   - El nombre tiene timestamp

## Próximos Pasos

1. Integra las APIs en tu dashboard existente
2. Agrega autenticación y autorización
3. Implementa versionado si lo necesitas
4. Personaliza los componentes según tu diseño
5. Agrega tests automatizados

---

**¿Necesitas ayuda?** Revisa [INSTRUCTOR-API-README.md](./INSTRUCTOR-API-README.md) para documentación completa.
