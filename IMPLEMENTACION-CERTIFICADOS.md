# Guía de Implementación - Sistema de Certificados OpenBadges

## Pasos para Implementar el Sistema Completo

### PASO 1: Backup de la Base de Datos (CRÍTICO)

```bash
# Conectarse a la base de datos y hacer backup
# Opción 1: Con pg_dump
pg_dump -h ep-cold-term-a8sl4r3l-pooler.eastus2.azure.neon.tech \
  -U neondb_owner \
  -d neondb \
  -f backup_certificados_$(date +%Y%m%d).sql

# Opción 2: Desde Neon Dashboard
# 1. Ir a https://console.neon.tech
# 2. Seleccionar tu proyecto
# 3. Ir a "Branches" -> "Create branch" (crear branch de respaldo)
```

**⚠️ IMPORTANTE:** NO continuar sin hacer backup.

---

### PASO 2: Verificar Certificados Existentes

```bash
# Ejecutar en Prisma Studio o SQL
npx prisma studio

# O ejecutar query SQL
SELECT COUNT(*) as total,
       COUNT(CASE WHEN "certificateNumber" IS NOT NULL THEN 1 END) as with_number,
       COUNT(CASE WHEN "verificationCode" IS NOT NULL THEN 1 END) as with_code
FROM certificates;
```

**Si hay certificados existentes:** Necesitarás migrarlos (ver PASO 4).

**Si NO hay certificados:** Puedes aplicar los cambios directamente (ver PASO 3A).

---

### PASO 3A: Implementación SIN Certificados Existentes

```bash
# 1. El schema ya está actualizado en prisma/schema.prisma
# 2. Aplicar cambios a la base de datos
cd "c:\Users\Admin\OneDrive - Nolivos Law\Aplicaciones\DISTMAH-ATC-"
npx prisma db push

# 3. Verificar que se aplicó correctamente
npx prisma studio
```

**Continuar al PASO 5.**

---

### PASO 3B: Implementación CON Certificados Existentes

```bash
# 1. Ejecutar migración SQL manual
cd "c:\Users\Admin\OneDrive - Nolivos Law\Aplicaciones\DISTMAH-ATC-"

# 2. Conectarse a la base de datos
psql "postgresql://neondb_owner@ep-cold-term-a8sl4r3l-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"

# 3. Ejecutar el script de migración
\i prisma/migrations/manual_add_openbadges.sql

# 4. Verificar que las columnas se crearon
\d certificates
```

**Continuar al PASO 4.**

---

### PASO 4: Migrar Certificados Existentes al Nuevo Formato

```bash
# 1. Compilar TypeScript
cd "c:\Users\Admin\OneDrive - Nolivos Law\Aplicaciones\DISTMAH-ATC-"
npm install -D tsx

# 2. Ejecutar script de migración
npx tsx scripts/migrate-certificates.ts

# 3. Verificar resultados
# El script mostrará:
# - Cantidad de certificados migrados
# - Folios generados
# - Errores (si los hay)

# 4. Verificar en base de datos
npx prisma studio
# Revisar que todos los certificados tengan:
# - folio (8 caracteres hex)
# - badgeJson (objeto JSON)
# - verificationUrl (URL completa)
# - status (ACTIVE)
```

**Continuar al PASO 5.**

---

### PASO 5: Probar el Sistema

```bash
# 1. Ejecutar script de pruebas
npx tsx scripts/test-certificates.ts

# Deberías ver:
# ✅ Generación de folios
# ✅ Generación de OpenBadge JSON
# ✅ Estructura OpenBadges v2.0 válida
# ✅ Datos del emisor correctos
# ✅ Integración con base de datos
# ✅ Consultas y estadísticas

# 2. Probar APIs manualmente (usar Postman, Thunder Client, etc.)
```

---

### PASO 6: Probar APIs

#### 6.1. Emitir Certificado

```bash
# POST /api/certificates/issue
curl -X POST http://localhost:3000/api/certificates/issue \
  -H "Content-Type: application/json" \
  -H "Cookie: your-session-cookie" \
  -d '{"courseId":"curso-uuid-aqui"}'

# Response esperado:
# {
#   "message": "Certificate issued successfully",
#   "certificate": {
#     "id": "uuid",
#     "folio": "A1B2C3D4",
#     "verificationUrl": "https://edu.distmah.com/api/certificates/A1B2C3D4"
#   }
# }
```

#### 6.2. Verificar Certificado

```bash
# GET /api/certificates/[folio]
curl http://localhost:3000/api/certificates/A1B2C3D4

# Response esperado: OpenBadge JSON completo
```

#### 6.3. Descargar PDF

```bash
# GET /api/certificates/[folio]/download
curl http://localhost:3000/api/certificates/A1B2C3D4/download \
  -o certificado.pdf

# Debería descargar un PDF con:
# - Logo Universidad Autodesk
# - Folio en esquina superior
# - Nombre del estudiante
# - Información del curso
# - QR code de verificación
```

---

### PASO 7: Probar Páginas Web

#### 7.1. Página Pública del Certificado

```
http://localhost:3000/es/certificados/A1B2C3D4
```

**Verificar:**
- ✅ Información completa del certificado
- ✅ QR code visible
- ✅ Badge de estado (ACTIVE/REVOKED/EXPIRED)
- ✅ Botón de descarga PDF funcional
- ✅ URL de verificación visible

#### 7.2. Dashboard del Estudiante

```
http://localhost:3000/es/estudiante/certificados
```

**Verificar:**
- ✅ Lista de certificados del estudiante
- ✅ Tarjetas con información resumida
- ✅ Botones de ver y descargar funcionan

---

### PASO 8: Configurar Variables de Entorno (PRODUCCIÓN)

```bash
# En .env o .env.production
NEXT_PUBLIC_APP_URL=https://edu.distmah.com
```

**⚠️ IMPORTANTE:** Esta URL se usa en:
- Generación de URLs de verificación
- OpenBadge JSON
- QR codes del PDF

---

### PASO 9: Integrar con Flujo de Finalización de Curso

Editar el código donde se marca un curso como completado:

```typescript
// En el lugar donde actualizas enrollment.progressPercent = 100
// Ejemplo: app/api/progress/track/route.ts

if (progressPercent === 100) {
  // Actualizar enrollment
  await prisma.enrollment.update({
    where: { id: enrollmentId },
    data: {
      progressPercent: 100,
      completedAt: new Date(),
      status: 'COMPLETED'
    }
  });

  // ¡NUEVO! Emitir certificado automáticamente
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/certificates/issue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseId }),
    });

    if (response.ok) {
      const { certificate } = await response.json();
      console.log('✅ Certificado emitido:', certificate.folio);

      // Opcional: Enviar notificación al estudiante
      await notifyCertificateIssued(userId, certificate.folio);
    }
  } catch (error) {
    console.error('Error emitiendo certificado:', error);
    // No fallar el flujo principal si el certificado falla
  }
}
```

---

### PASO 10: Probar Verificación Externa

#### 10.1. Validador OpenBadges Online

```
1. Ir a: https://openbadges.org/validator/
2. Pegar URL: https://edu.distmah.com/api/certificates/[folio]
3. Click en "Validate"
4. Debería mostrar: ✅ Valid OpenBadge v2.0
```

#### 10.2. Verificar con Badgr

```
1. Ir a: https://badgr.com
2. Crear cuenta gratuita
3. Click en "Import" -> "Import by URL"
4. Pegar URL del certificado
5. Debería importarse correctamente
```

---

### PASO 11: Agregar Enlace en Navegación

Editar el componente de navegación del dashboard del estudiante:

```typescript
// En tu componente de navegación
const navItems = [
  { href: '/estudiante/cursos', label: 'Mis Cursos' },
  { href: '/estudiante/certificados', label: 'Certificados' }, // ¡NUEVO!
  { href: '/estudiante/perfil', label: 'Perfil' },
];
```

---

### PASO 12: Configurar Correos de Notificación (Opcional)

Si quieres enviar emails cuando se emite un certificado:

```typescript
// En lib/email.ts o similar
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendCertificateEmail(
  to: string,
  studentName: string,
  courseName: string,
  folio: string,
  certificateUrl: string
) {
  await resend.emails.send({
    from: 'Universidad Autodesk <certificados@universidad-autodesk.edu>',
    to,
    subject: `¡Felicitaciones! Has obtenido tu certificado de ${courseName}`,
    html: `
      <h1>¡Felicitaciones ${studentName}!</h1>
      <p>Has completado exitosamente el curso <strong>${courseName}</strong>.</p>
      <p>Tu certificado está disponible en:</p>
      <a href="${certificateUrl}">${certificateUrl}</a>
      <p>Folio: <strong>${folio}</strong></p>
      <p>Este certificado es verificable mediante el estándar OpenBadges v2.0</p>
    `
  });
}
```

---

### PASO 13: Deploy a Producción

```bash
# 1. Hacer commit de todos los cambios
git add .
git commit -m "feat: Add OpenBadges certificate system"

# 2. Push a producción
git push origin main

# 3. En Vercel/Netlify, la migración de DB debe ejecutarse automáticamente
# Si no, ejecutar manualmente:
npx prisma db push

# 4. Verificar que todo funciona en producción
curl https://edu.distmah.com/api/certificates/[folio-de-prueba]
```

---

### PASO 14: Monitoreo y Mantenimiento

#### 14.1. Crear Cron Job para Expiración

Si usas certificados con fecha de expiración:

```typescript
// app/api/cron/expire-certificates/route.ts
import { prisma } from '@/lib/prisma';

export async function GET() {
  const now = new Date();

  const expired = await prisma.certificate.updateMany({
    where: {
      expiresAt: { lte: now },
      status: 'ACTIVE'
    },
    data: { status: 'EXPIRED' }
  });

  return Response.json({
    message: `${expired.count} certificates expired`
  });
}
```

Configurar en Vercel Cron:

```json
// vercel.json
{
  "crons": [{
    "path": "/api/cron/expire-certificates",
    "schedule": "0 0 * * *"
  }]
}
```

#### 14.2. Dashboard de Estadísticas (Opcional)

Agregar en dashboard de admin:

```typescript
// Estadísticas de certificados
const stats = await prisma.certificate.groupBy({
  by: ['status'],
  _count: true
});

// Top cursos por certificados
const topCourses = await prisma.certificate.groupBy({
  by: ['courseId'],
  _count: true,
  orderBy: { _count: { courseId: 'desc' } },
  take: 10
});
```

---

## Checklist Final

Antes de marcar como completado, verificar:

- [ ] Backup de base de datos realizado
- [ ] Schema de Prisma actualizado
- [ ] Migración aplicada exitosamente
- [ ] Certificados existentes migrados (si aplica)
- [ ] Pruebas ejecutadas exitosamente
- [ ] API de emisión funciona correctamente
- [ ] API de verificación funciona correctamente
- [ ] Descarga de PDF funciona
- [ ] Página pública del certificado carga correctamente
- [ ] Dashboard del estudiante muestra certificados
- [ ] QR codes se generan correctamente
- [ ] OpenBadge JSON es válido según estándar v2.0
- [ ] Verificación externa funciona (openbadges.org validator)
- [ ] Variables de entorno configuradas en producción
- [ ] Sistema integrado con flujo de finalización de curso
- [ ] Navegación actualizada con enlace a certificados
- [ ] Deploy a producción exitoso
- [ ] Pruebas en producción exitosas

---

## Troubleshooting

### Error: "folio is required"

**Problema:** El certificado no tiene folio.

**Solución:**
```bash
npx tsx scripts/migrate-certificates.ts
```

### Error: "badgeJson is required"

**Problema:** El certificado no tiene OpenBadge JSON.

**Solución:**
```bash
npx tsx scripts/migrate-certificates.ts
```

### Error: "Certificate not found"

**Problema:** El folio no existe en la base de datos.

**Solución:** Verificar que el folio es correcto (8 caracteres hexadecimales).

### PDF no se genera

**Problema:** Error al generar PDF.

**Solución:**
1. Verificar que `@react-pdf/renderer` está instalado
2. Verificar que `qrcode` está instalado
3. Revisar logs del servidor

### OpenBadge no pasa validación

**Problema:** El JSON no cumple con estándar OpenBadges v2.0.

**Solución:**
1. Verificar estructura en `lib/certificates.ts`
2. Verificar que todos los campos requeridos están presentes
3. Usar validador online: https://openbadges.org/validator/

---

## Soporte

Si encuentras problemas durante la implementación:

1. Revisar logs del servidor
2. Ejecutar script de pruebas: `npx tsx scripts/test-certificates.ts`
3. Verificar en Prisma Studio: `npx prisma studio`
4. Revisar documentación: `CERTIFICADOS-OPENBADGES.md`
5. Revisar ejemplos: `examples/certificate-usage-example.ts`

---

**¡El sistema está listo para producción!** 🎉
