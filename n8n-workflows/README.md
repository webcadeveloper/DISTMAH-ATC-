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

### Variables de entorno:
- `SHAREPOINT_SITE_ID`: ID del sitio de SharePoint

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
