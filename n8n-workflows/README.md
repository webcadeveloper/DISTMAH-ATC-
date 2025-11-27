# n8n Workflows - DISTMAH ATC

Colección de workflows de n8n para automatización de la plataforma DISTMAH ATC.

## Workflows Disponibles

### 01 - Nuevo Usuario Registrado
**Archivo:** `01-nuevo-usuario-registrado.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/8bd651b5-c4aa-4cb4-bcd9-4648facd261a`

**Acciones:**
- Envía email de bienvenida al estudiante
- Guarda registro en SharePoint
- Notifica a instructores/admins en la base de datos

**Payload esperado:**
```json
{
  "event": "user_registered",
  "user": {
    "id": "uuid",
    "name": "Nombre",
    "email": "email@example.com",
    "phone": "+1234567890",
    "registeredAt": "2024-01-01T00:00:00.000Z"
  },
  "location": {
    "ip": "1.2.3.4",
    "country": "Venezuela",
    "countryCode": "VE",
    "region": "Distrito Capital",
    "city": "Caracas",
    "zip": "1010",
    "lat": 10.5,
    "lon": -66.9,
    "timezone": "America/Caracas",
    "isp": "Cantv"
  }
}
```

---

### 02 - Inscripción a Curso
**Archivo:** `02-inscripcion-curso.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/enrollment-webhook`

**Acciones:**
- Envía confirmación de inscripción al estudiante
- Notifica al instructor del curso

**Payload esperado:**
```json
{
  "event": "enrollment.created",
  "enrollment": {
    "id": "uuid",
    "enrolledAt": "2024-01-01T00:00:00.000Z"
  },
  "student": {
    "id": "uuid",
    "name": "Nombre",
    "email": "email@example.com"
  },
  "course": {
    "id": "uuid",
    "title": "AutoCAD 2026 Básico",
    "slug": "autocad-2026-basico",
    "instructor": "Ing. Juan Pérez",
    "instructorEmail": "instructor@distmah.com.ve",
    "duration": "40 horas",
    "level": "Básico"
  }
}
```

---

### 03 - Pago Completado (Stripe)
**Archivo:** `03-pago-completado.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/stripe-payment-webhook`

**Acciones:**
- Envía recibo de pago al cliente
- Notifica al administrador de la nueva venta

**Payload esperado:**
```json
{
  "event": "payment.completed",
  "customer": {
    "id": "uuid",
    "name": "Nombre",
    "email": "email@example.com"
  },
  "course": {
    "id": "uuid",
    "title": "Civil 3D 2026 Avanzado"
  },
  "payment": {
    "stripeId": "pi_xxxxx",
    "amount": 390,
    "currency": "USD",
    "paidAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### 04 - Certificado Generado
**Archivo:** `04-certificado-generado.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/certificate-webhook`

**Acciones:**
- Envía email con certificado al estudiante
- Guarda registro del certificado en SharePoint

**Payload esperado:**
```json
{
  "event": "certificate.generated",
  "student": {
    "id": "uuid",
    "name": "Nombre",
    "email": "email@example.com"
  },
  "course": {
    "id": "uuid",
    "title": "Revit 2026 Básico",
    "duration": "40 horas",
    "level": "Básico"
  },
  "certificate": {
    "id": "uuid",
    "verificationCode": "DIST-2024-ABC123",
    "issuedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### 05 - Progreso de Módulo Completado
**Archivo:** `05-progreso-modulo.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/progress-webhook`

**Acciones:**
- Si progreso = 100%: Envía felicitación de curso completado
- Si progreso = 50%: Envía motivación de mitad de curso

**Payload esperado:**
```json
{
  "event": "progress.updated",
  "student": {
    "id": "uuid",
    "name": "Nombre",
    "email": "email@example.com"
  },
  "course": {
    "id": "uuid",
    "title": "AutoCAD 2026 Avanzado",
    "slug": "autocad-2026-avanzado"
  },
  "progress": {
    "percentage": 50,
    "modulesCompleted": 3,
    "totalModules": 6
  }
}
```

---

### 06 - Recordatorio de Inactividad
**Archivo:** `06-recordatorio-inactividad.json`
**Trigger:** Schedule (diario)

**Acciones:**
- Busca estudiantes inactivos por 7 días → Envía recordatorio suave
- Busca estudiantes inactivos por 30 días → Envía recordatorio urgente

**Requiere:** Conexión a PostgreSQL (Neon)

---

### 07 - Reporte Semanal de Ventas
**Archivo:** `07-reporte-semanal-ventas.json`
**Trigger:** Schedule (cada lunes 8AM)

**Acciones:**
- Consulta ventas de la semana
- Consulta nuevos usuarios
- Consulta certificados emitidos
- Envía reporte consolidado al administrador

**Requiere:** Conexión a PostgreSQL (Neon)

---

### 08 - Promoción Curso Avanzado (Upsell)
**Archivo:** `08-promocion-curso-avanzado.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/upsell-webhook`

**Acciones:**
- Detecta si el curso completado es nivel Básico
- Busca el curso Avanzado del mismo software
- Envía email promocional con 15% de descuento

**Payload esperado:**
```json
{
  "event": "upsell.opportunity",
  "student": {
    "id": "uuid",
    "name": "Nombre",
    "email": "email@example.com"
  },
  "course": {
    "id": "uuid",
    "title": "AutoCAD 2026 Básico",
    "level": "Básico",
    "software": "AutoCAD"
  }
}
```

---

### 09 - Encuesta de Satisfacción
**Archivo:** `09-encuesta-satisfaccion.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/survey-webhook`

**Acciones:**
- Envía email solicitando feedback post-certificación
- Incluye sistema de calificación rápida (1-5 estrellas)
- Link a encuesta detallada

**Payload esperado:**
```json
{
  "event": "survey.request",
  "student": {
    "id": "uuid",
    "name": "Nombre",
    "email": "email@example.com"
  },
  "course": {
    "id": "uuid",
    "title": "Civil 3D 2026 Básico"
  },
  "certificate": {
    "id": "uuid"
  }
}
```

---

### 10 - Sincronizar con SharePoint (Microsoft)
**Archivo:** `10-sincronizar-sharepoint.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/sharepoint-sync-webhook`

**Acciones:**
- Guarda venta en lista "Ventas" de SharePoint
- Guarda inscripción en lista "Inscripciones" de SharePoint

**Requiere:** OAuth2 Microsoft SharePoint configurado

**Payload esperado:**
```json
{
  "event": "sharepoint.sync",
  "customer": { "id": "uuid", "name": "Nombre", "email": "email@example.com" },
  "course": { "id": "uuid", "title": "Curso" },
  "payment": { "stripeId": "pi_xxx", "amount": 390, "currency": "USD", "paidAt": "2024-01-01" },
  "enrollment": { "id": "uuid", "enrolledAt": "2024-01-01" },
  "student": { "id": "uuid", "name": "Nombre", "email": "email@example.com" }
}
```

---

### 11 - Pago Fallido (Stripe)
**Archivo:** `11-pago-fallido-stripe.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/payment-failed-webhook`

**Acciones:**
- Envía email al cliente notificando problema de pago
- Alerta al administrador sobre pago fallido

**Payload esperado:**
```json
{
  "event": "payment.failed",
  "customer": { "id": "uuid", "name": "Nombre", "email": "email@example.com" },
  "course": { "id": "uuid", "title": "AutoCAD 2026" },
  "payment": { "stripeId": "pi_xxx", "amount": 390, "currency": "USD", "errorMessage": "Card declined", "failedAt": "2024-01-01" }
}
```

---

### 12 - Email de Cumpleaños
**Archivo:** `12-email-cumpleanos.json`
**Trigger:** Schedule (diario 8AM)

**Acciones:**
- Busca usuarios con cumpleaños hoy
- Envía email de felicitación con cupón de descuento 20% (CUMPLE20)

**Requiere:** Conexión a PostgreSQL (Neon)

---

### 13 - Reporte Mensual de Ingresos
**Archivo:** `13-reporte-mensual-ingresos.json`
**Trigger:** Schedule (primer día del mes 9AM)

**Acciones:**
- Recopila ingresos totales del mes anterior
- Lista top 10 cursos más vendidos
- Cuenta nuevos estudiantes y certificados
- Envía reporte completo al administrador

**Requiere:** Conexión a PostgreSQL (Neon)

---

### 14 - Bienvenida Nuevo Instructor
**Archivo:** `14-nuevo-instructor.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/instructor-webhook`

**Acciones:**
- Envía email de bienvenida al nuevo instructor
- Notifica al administrador del nuevo registro

**Payload esperado:**
```json
{
  "event": "instructor.registered",
  "instructor": { "id": "uuid", "name": "Nombre", "email": "email@example.com", "specialty": "AutoCAD", "registeredAt": "2024-01-01" }
}
```

---

### 15 - Alerta Cursos Sin Actividad
**Archivo:** `15-alerta-curso-sin-actividad.json`
**Trigger:** Schedule (lunes 10AM)

**Acciones:**
- Busca cursos publicados sin inscripciones en 30 días
- Envía alerta al administrador con lista de cursos inactivos

**Requiere:** Conexión a PostgreSQL (Neon)

---

### 16 - Backup Semanal a OneDrive
**Archivo:** `16-backup-onedrive.json`
**Trigger:** Schedule (domingo 3AM)

**Acciones:**
- Exporta usuarios, inscripciones y certificados de la base de datos
- Sube archivo JSON a OneDrive
- Notifica al administrador del backup completado

**Requiere:** Conexión a PostgreSQL (Neon), OAuth2 Microsoft OneDrive

---

### 17 - Nueva Reseña/Testimonio
**Archivo:** `17-nueva-resena.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/review-webhook`

**Acciones:**
- Si rating >= 4: Notifica a marketing para usar en promoción
- Si rating < 4: Alerta al administrador para seguimiento

**Payload esperado:**
```json
{
  "event": "review.created",
  "review": { "rating": 5, "comment": "Excelente curso", "courseName": "AutoCAD 2026", "courseSlug": "autocad-2026", "studentName": "Juan", "studentEmail": "juan@example.com", "createdAt": "2024-01-01" }
}
```

---

### 18 - Acceso a Curso por Expirar
**Archivo:** `18-acceso-curso-expirando.json`
**Trigger:** Schedule (diario 9AM)

**Acciones:**
- Busca estudiantes con acceso expirando en 7 días
- Envía recordatorio para completar el curso

**Requiere:** Conexión a PostgreSQL (Neon)

---

### 19 - Nuevo Comentario/Pregunta
**Archivo:** `19-nuevo-comentario-pregunta.json`
**Trigger:** Webhook POST
**Webhook URL:** `/webhook/comment-webhook`

**Acciones:**
- Si es pregunta: Notifica al instructor con urgencia
- Si es comentario: Notifica al instructor (prioridad normal)

**Payload esperado:**
```json
{
  "event": "comment.created",
  "comment": { "type": "question", "content": "¿Cómo hago...?", "courseName": "AutoCAD 2026", "courseSlug": "autocad-2026", "lessonTitle": "Lección 1", "lessonSlug": "leccion-1", "studentName": "Juan", "instructorEmail": "instructor@example.com", "createdAt": "2024-01-01" }
}
```

---

### 20 - Resumen Diario para Admin
**Archivo:** `20-resumen-diario-admin.json`
**Trigger:** Schedule (diario 6PM)

**Acciones:**
- Cuenta nuevos usuarios, inscripciones, certificados del día
- Calcula ingresos totales
- Lista cursos más vendidos del día
- Envía resumen ejecutivo al administrador

**Requiere:** Conexión a PostgreSQL (Neon)

---

## Configuración Requerida

### Credenciales necesarias en n8n:

1. **SMTP** (ID: 1)
   - Host: smtp-relay.sendinblue.com
   - Port: 587
   - User: tu-api-key
   - Password: tu-smtp-key

2. **Microsoft SharePoint** (ID: 2)
   - OAuth2 configurado con Azure AD

3. **Neon PostgreSQL** (ID: 3)
   - Host: ep-cold-term-a8sl4r3l-pooler.eastus2.azure.neon.tech
   - Database: neondb
   - User: neondb_owner
   - SSL: require

4. **Microsoft OneDrive** (ID: 4)
   - OAuth2 configurado con Azure AD
   - Scopes: Files.ReadWrite

### Variables de entorno:
- `SHAREPOINT_SITE_ID`: ID del sitio de SharePoint
- `N8N_WEBHOOK_URL`: URL base de n8n (default: https://casa.tailc67ac4.ts.net:9443)

---

## Importar Workflows

1. Abre n8n
2. Ve a Settings > Workflows
3. Haz clic en "Import from File"
4. Selecciona el archivo JSON del workflow
5. Configura las credenciales correspondientes
6. Activa el workflow

---

## Testing

### Test de Registro:
```bash
curl -X POST "https://casa.tailc67ac4.ts.net:9443/webhook-test/8bd651b5-c4aa-4cb4-bcd9-4648facd261a" \
  -H "Content-Type: application/json" \
  -d '{"event":"user_registered","user":{"id":"test-123","name":"Test User","email":"test@example.com"},"location":{"country":"Venezuela","city":"Caracas"}}'
```

---

## Mantenimiento

- Los workflows están versionados en este directorio
- Después de modificar un workflow en n8n, exportarlo y actualizar el archivo correspondiente
- Usar prefijo numérico para orden de importancia
