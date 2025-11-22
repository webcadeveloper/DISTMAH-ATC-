# Documentación de API

## Endpoints Principales

### Autenticación (NextAuth)
- `POST /api/auth/signin`: Iniciar sesión
- `POST /api/auth/signout`: Cerrar sesión
- `GET /api/auth/session`: Obtener sesión actual

### Cursos
- `GET /api/courses`: Listar todos los cursos (público)
- `GET /api/courses/:slug`: Obtener detalles de un curso
- `POST /api/courses`: Crear curso (Instructor/Admin)
- `PUT /api/courses/:id`: Actualizar curso
- `DELETE /api/courses/:id`: Eliminar curso

### Lecciones
- `GET /api/modules/:moduleId/lessons`: Listar lecciones de un módulo
- `POST /api/modules/:moduleId/lessons`: Crear lección
- `PUT /api/lessons/:id`: Actualizar lección
- `POST /api/lessons/:id/complete`: Marcar lección como completada

### Archivos (Microsoft Graph Integration)
- `POST /api/upload/session`: Crear sesión de subida (OneDrive)
- `PUT /api/upload/:sessionId`: Subir fragmento de archivo
- `GET /api/files/:fileId`: Obtener URL de descarga/visualización

## Modelos de Datos (Prisma)

### User
```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  role          Role      @default(STUDENT)
  enrollments   Enrollment[]
}
```

### Course
```prisma
model Course {
  id          String    @id @default(cuid())
  title       String
  slug        String    @unique
  modules     Module[]
  instructor  User      @relation(fields: [instructorId], references: [id])
}
```

## Códigos de Error
- `401 Unauthorized`: No autenticado
- `403 Forbidden`: No tiene permisos (ej. Estudiante intentando crear curso)
- `404 Not Found`: Recurso no encontrado
- `422 Unprocessable Entity`: Datos de entrada inválidos
