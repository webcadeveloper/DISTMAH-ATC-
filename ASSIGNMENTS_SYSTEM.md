# Sistema de Assignments (Tareas) - DISTMAH ATC

Sistema completo de tareas para instructores y estudiantes implementado en DISTMAH ATC.

## Arquitectura

### Base de Datos (Prisma)

**Modelos:**
- `Assignment` - Tareas creadas por instructores
- `AssignmentSubmission` - Entregas de estudiantes

**Campos Importantes:**
- Assignment: `courseId`, `moduleId`, `title`, `description`, `instructions`, `maxScore`, `dueDate`, `attachments`
- AssignmentSubmission: `assignmentId`, `userId`, `comments`, `files`, `score`, `feedback`, `status`

## APIs Implementadas

### APIs de Instructor

#### 1. Crear Tarea
```
POST /api/instructor/courses/[courseId]/assignments
Body: { title, description, instructions, maxScore, dueDate, ... }
```

#### 2. Listar Tareas del Curso
```
GET /api/instructor/courses/[courseId]/assignments?moduleId=...
Response: { assignments: [...] }
```

#### 3. Actualizar Tarea
```
PUT /api/instructor/assignments/[id]
Body: { title, description, ... }
```

#### 4. Eliminar Tarea
```
DELETE /api/instructor/assignments/[id]
```

#### 5. Ver Entregas
```
GET /api/instructor/assignments/[id]/submissions?status=...
Response: { assignment, submissions: [...] }
```

#### 6. Calificar Entrega
```
PUT /api/instructor/submissions/[id]/grade
Body: { score, feedback, instructorId }
```

### APIs de Estudiante

#### 1. Listar Tareas del Curso
```
GET /api/student/courses/[courseId]/assignments?userId=...&moduleId=...
Response: { assignments: [...] }
```

#### 2. Obtener Detalles de Tarea
```
GET /api/student/assignments/[id]?userId=...
Response: { assignment, submission }
```

#### 3. Entregar Tarea
```
POST /api/student/assignments/[id]/submit
Body: { userId, comments, files }
```

#### 4. Obtener Mi Entrega
```
GET /api/student/assignments/[id]/submission?userId=...
Response: { submission }
```

#### 5. Actualizar Entrega
```
PUT /api/student/submissions/[id]
Body: { userId, comments, files }
```

### API de Upload

```
POST /api/assignments/upload
FormData: { file, assignmentId, userId, type: 'reference' | 'submission' }

DELETE /api/assignments/upload?fileName=...&assignmentId=...&type=...
```

**Tipos de archivo permitidos:**
- Documentos: PDF, DOCX, DOC
- CAD: DWG, RVT, NWD, NWC
- Comprimidos: ZIP
- Imágenes: JPG, PNG, GIF, WEBP
- Tamaño máximo: 100MB

## Componentes de UI

### Componentes de Instructor

#### 1. AssignmentForm
**Ubicación:** `components/instructor/AssignmentForm.tsx`

**Props:**
- `courseId` - ID del curso
- `assignmentId?` - ID de la tarea (para editar)
- `initialData?` - Datos iniciales
- `modules?` - Lista de módulos del curso
- `onSuccess?` - Callback al guardar

**Características:**
- Formulario completo con validación Zod
- Upload de archivos de referencia
- Selección de módulo asociado
- Configuración de puntaje, intentos, fechas
- Auto-guardado de borradores cada 30s

#### 2. AssignmentsList
**Ubicación:** `components/instructor/AssignmentsList.tsx`

**Props:**
- `courseId` - ID del curso
- `modules?` - Lista de módulos

**Características:**
- Lista con filtros (todas, activas, vencidas, próximas)
- Filtro por módulo
- Estadísticas de entregas
- Acciones: Ver entregas, Editar, Eliminar
- Badges de estado (activa, vencida, próxima)

#### 3. GradeSubmissions
**Ubicación:** `components/instructor/GradeSubmissions.tsx`

**Props:**
- `assignmentId` - ID de la tarea
- `instructorId` - ID del instructor

**Características:**
- Lista de entregas con filtros (todas, pendientes, calificadas)
- Ver archivos descargables
- Modal de calificación con puntaje y feedback
- Actualizar calificaciones existentes

### Componentes de Estudiante

#### 1. AssignmentCard
**Ubicación:** `components/student/AssignmentCard.tsx`

**Props:**
- `assignment` - Objeto de la tarea
- `courseSlug` - Slug del curso

**Características:**
- Card visual con estado (pendiente, entregada, calificada, atrasada)
- Countdown si está cerca de vencer
- Badge de estado
- Puntaje si está calificada
- Click para entregar o ver entrega

#### 2. SubmitAssignment
**Ubicación:** `components/student/SubmitAssignment.tsx`

**Props:**
- `assignmentId` - ID de la tarea
- `userId` - ID del estudiante
- `courseSlug` - Slug del curso

**Características:**
- Ver instrucciones de la tarea
- Descargar archivos de referencia
- Upload de archivos (drag & drop)
- Comentarios opcionales
- Confirmación antes de enviar
- Alertas si está vencida

#### 3. ViewSubmission
**Ubicación:** `components/student/ViewSubmission.tsx`

**Props:**
- `assignmentId` - ID de la tarea
- `userId` - ID del estudiante
- `courseSlug` - Slug del curso

**Características:**
- Ver detalles de la entrega
- Descargar archivos entregados
- Ver calificación y puntaje
- Ver retroalimentación del instructor
- Estado visual (en revisión, calificada)

## Rutas Implementadas

### Rutas de Instructor

```
/instructor/cursos/[cursoId]/assignments
  - Lista de tareas del curso

/instructor/cursos/[cursoId]/assignments/new
  - Crear nueva tarea

/instructor/cursos/[cursoId]/assignments/[id]/edit
  - Editar tarea existente

/instructor/assignments/[id]/grade
  - Calificar entregas
```

### Rutas de Estudiante

```
/cursos/[slug]/assignments
  - Lista de tareas del curso

/cursos/[slug]/assignments/[id]/submit
  - Entregar tarea

/cursos/[slug]/assignments/[id]/submission
  - Ver mi entrega
```

## Flujo de Trabajo

### Para Instructores

1. **Crear Tarea:**
   - Ir a `/instructor/cursos/[cursoId]/assignments`
   - Click en "Nueva Tarea"
   - Completar formulario
   - Subir archivos de referencia (opcional)
   - Guardar

2. **Calificar Entregas:**
   - Ver lista de tareas
   - Click en "Ver entregas"
   - Seleccionar estudiante
   - Descargar archivos
   - Asignar puntaje y feedback
   - Guardar calificación

### Para Estudiantes

1. **Entregar Tarea:**
   - Ver lista de tareas del curso
   - Click en "Entregar tarea"
   - Leer instrucciones
   - Descargar archivos de referencia
   - Subir archivos
   - Agregar comentarios (opcional)
   - Enviar

2. **Ver Calificación:**
   - Ver lista de tareas
   - Click en "Ver entrega"
   - Ver puntaje y feedback

## Sistema de Notificaciones

**Eventos que generan notificaciones:**
- Estudiante entrega tarea → Notifica a instructor
- Instructor califica entrega → Notifica a estudiante

**Nota:** Las notificaciones están comentadas en el código. Descomentar cuando el modelo Notification esté implementado.

## Validaciones Implementadas

### Backend

1. **Enrollment:** Verificar que estudiante esté inscrito
2. **Fechas:** No permitir entregas si pasó deadline (y no se permiten tardías)
3. **Intentos:** Verificar número máximo de intentos
4. **Puntaje:** Validar que esté entre 0 y maxScore
5. **Archivos:** Validar tipo y tamaño
6. **Permisos:** Solo instructor del curso puede calificar
7. **Edición:** No permitir editar entregas calificadas

### Frontend

1. **Formularios:** Validación con Zod
2. **Archivos:** Tipos permitidos y tamaño máximo
3. **Confirmación:** Antes de enviar tarea
4. **Auto-guardado:** Borrador cada 30s (opcional)

## Estados de Submission

- `DRAFT` - Borrador (no enviado)
- `SUBMITTED` - Enviado, pendiente de calificación
- `GRADED` - Calificado
- `RETURNED` - Devuelto para corrección (futuro)

## Almacenamiento de Archivos

**Estructura de carpetas:**
```
public/
  assignments/
    [assignmentId]/
      references/        # Archivos del instructor
      submissions/
        [userId]/        # Archivos del estudiante
    .trash/             # Archivos eliminados
```

## TODOs para Integración

1. **Autenticación:**
   - Reemplazar `userId` hardcoded con session real
   - Implementar middleware de auth en APIs

2. **Course Lookup:**
   - Implementar función para obtener courseId desde slug
   - Cargar módulos del curso en formularios

3. **Notificaciones:**
   - Descomentar código de notificaciones
   - Implementar modelo Notification en Prisma
   - Crear componente de notificaciones

4. **Dashboard:**
   - Agregar badge de tareas pendientes
   - Mostrar próximas entregas en home
   - Gráficas de progreso

5. **Email:**
   - Enviar email cuando se califica tarea
   - Recordatorio 24h antes de deadline

6. **Mejoras Futuras:**
   - Rubric de calificación
   - Calificación por pares
   - Plagio detection
   - Comentarios inline en archivos
   - Video feedback

## Testing

**Comandos para testing manual:**

1. Crear tarea
2. Entregar como estudiante
3. Calificar como instructor
4. Verificar notificaciones
5. Probar validaciones (fecha vencida, intentos, etc.)

## Seguridad

- Validación de enrollment en cada request
- Verificación de ownership en updates
- Sanitización de inputs
- Archivos movidos a .trash en lugar de eliminados
- Rate limiting en upload (TODO)

---

**Implementado por:** Claude Code
**Fecha:** 2025-11-24
**Versión:** 1.0.0
