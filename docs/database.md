# Documentación de Base de Datos

## Esquema General
La base de datos utiliza PostgreSQL y es gestionada mediante Prisma ORM. El esquema está diseñado para soportar una plataforma LMS completa con roles de usuario, gestión de cursos y seguimiento de progreso.

## Modelos Principales

### User (Usuario)
Representa a todos los usuarios del sistema.
- `role`: Enum (STUDENT, INSTRUCTOR, ADMIN).
- `enrollments`: Relación con los cursos en los que está inscrito.
- `courses`: Relación con los cursos que enseña (si es instructor).

### Course (Curso)
La entidad central del contenido educativo.
- `slug`: Identificador único para URLs amigables.
- `modules`: Colección de módulos que estructuran el curso.
- `instructor`: Usuario que gestiona el curso.
- `software`: El software de Autodesk que se enseña (AutoCAD, Revit, etc.).

### Module (Módulo)
Agrupador lógico de lecciones.
- `order`: Entero para mantener el orden secuencial.

### Lesson (Lección)
Unidad mínima de contenido.
- `type`: Enum (VIDEO, ARTICLE, QUIZ, LIVE).
- `content`: Contenido HTML rico (TipTap).
- `videoUrl`: URL del video (Stream/YouTube).
- `resources`: Archivos adjuntos.

### Enrollment (Inscripción)
Tabla pivote que registra la relación entre Estudiantes y Cursos.
- `progress`: Porcentaje de completitud calculado.
- `completedAt`: Fecha de finalización.

## Seeding (Datos de Prueba)
El proyecto incluye un script de seeding (`prisma/seed.ts`) que puebla la base de datos con:
1. **Usuarios Demo**: Admin, Instructor y Estudiante.
2. **Cursos**: Catálogo completo de Autodesk 2026.
3. **Contenido**: Estructura completa de módulos y lecciones para AutoCAD 2D 2026.

Para ejecutar el seed:
```bash
npx prisma db seed
```
*Nota: Requiere conexión activa a la base de datos.*
