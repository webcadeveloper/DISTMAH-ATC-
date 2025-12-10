# Sistema de Certificados OpenBadges v2.0

Sistema completo de emisión, verificación y gestión de certificados digitales compatible con el estándar OpenBadges v2.0 para la plataforma DISTMAH-ATC.

## Características Principales

- ✅ **Emisión automática** al completar curso al 100%
- ✅ **Estándar OpenBadges v2.0** compatible con validadores externos
- ✅ **Folio único** de 8 caracteres hexadecimales
- ✅ **Verificación pública** mediante URL única
- ✅ **PDF descargable** con QR code embebido
- ✅ **Estados de certificado**: ACTIVE, REVOKED, EXPIRED
- ✅ **Diseño profesional** con colores corporativos (blanco, negro, gris, azul #003366)

## Estructura del Sistema

### 1. Base de Datos (Prisma Schema)

```prisma
model Certificate {
  id              String            @id @default(uuid())
  userId          String
  courseId        String
  folio           String            @unique // 8 caracteres hex
  issuedAt        DateTime          @default(now())
  expiresAt       DateTime?
  status          CertificateStatus @default(ACTIVE)
  badgeJson       Json              // OpenBadges JSON completo
  pdfUrl          String?
  verificationUrl String
}

enum CertificateStatus {
  ACTIVE
  REVOKED
  EXPIRED
}
```

### 2. APIs Disponibles

#### POST `/api/certificates/issue`
Emite un nuevo certificado cuando el estudiante completa un curso al 100%.

**Request:**
```json
{
  "courseId": "uuid"
}
```

**Response:**
```json
{
  "message": "Certificate issued successfully",
  "certificate": {
    "id": "uuid",
    "folio": "A1B2C3D4",
    "verificationUrl": "https://edu.distmah.com/api/certificates/A1B2C3D4",
    "status": "ACTIVE"
  }
}
```

**Validaciones:**
- Usuario autenticado
- Usuario inscrito en el curso
- Progreso del curso al 100%
- No existe certificado previo activo

#### GET `/api/certificates/[folio]`
Retorna el JSON OpenBadges v2.0 para verificación pública.

**Response:**
```json
{
  "@context": "https://w3id.org/openbadges/v2",
  "type": "Assertion",
  "id": "https://edu.distmah.com/api/certificates/A1B2C3D4",
  "recipient": {
    "type": "email",
    "hashed": true,
    "identity": "sha256$..."
  },
  "badge": {
    "type": "BadgeClass",
    "name": "AutoCAD 2026 Básico",
    "description": "...",
    "criteria": {
      "narrative": "Completar exitosamente..."
    },
    "issuer": {
      "id": "https://universidad-autodesk.edu/issuer",
      "type": "Issuer",
      "name": "Universidad Autodesk",
      "url": "https://universidad-autodesk.edu",
      "email": "certificaciones@universidad-autodesk.edu"
    }
  },
  "verification": {
    "type": "hosted"
  },
  "issuedOn": "2025-11-28T00:00:00Z"
}
```

#### GET `/api/certificates/[folio]/download`
Descarga el certificado en formato PDF.

**Response:** Archivo PDF

### 3. Páginas Web

#### `/[locale]/certificados/[folio]`
Página pública del certificado con:
- Información completa del certificado
- QR code de verificación
- Badge de estado (ACTIVE/REVOKED/EXPIRED)
- Botón de descarga PDF
- URL de verificación
- Metadatos OpenGraph para compartir

#### `/[locale]/estudiante/certificados`
Dashboard del estudiante con:
- Lista de todos sus certificados
- Tarjetas con información resumida
- Acceso directo a descarga y visualización

### 4. Componentes React

#### `<CertificateView />`
Vista completa del certificado con toda la información.

**Props:**
```typescript
{
  certificate: {
    folio: string;
    status: string;
    issuedAt: Date;
    verificationUrl: string;
    user: { name: string; email: string };
    course: { title: string; level: string; duration: number };
  }
}
```

#### `<CertificateCard />`
Tarjeta resumida para listados.

**Props:**
```typescript
{
  certificate: {
    folio: string;
    status: string;
    issuedAt: Date;
    course: { title: string; level: string; duration: number; category: string };
  };
  locale?: string;
}
```

### 5. Generador de PDF

El PDF se genera usando `@react-pdf/renderer` con:
- Formato A4 horizontal
- Logo Universidad Autodesk
- Folio en la esquina superior derecha
- Nombre del estudiante destacado
- Información del curso
- QR code para verificación
- Firma digital del director
- Fecha de emisión
- Diseño limpio y profesional

## Instalación y Configuración

### 1. Actualizar Base de Datos

El schema de Prisma ya está actualizado. Para aplicar los cambios:

```bash
# Si NO tienes certificados existentes
npx prisma db push

# Si TIENES certificados existentes y quieres migrarlos
npx tsx scripts/migrate-certificates.ts
npx prisma db push --accept-data-loss
```

### 2. Variables de Entorno

Asegúrate de tener en `.env`:

```env
NEXT_PUBLIC_APP_URL=https://edu.distmah.com
```

### 3. Dependencias

Ya están instaladas en el proyecto:
- `@react-pdf/renderer`: Generación de PDFs
- `qrcode`: Generación de códigos QR

## Uso del Sistema

### Emisión Automática

El certificado se emite automáticamente cuando:
1. El estudiante completa un curso al 100%
2. Se actualiza `enrollment.progressPercent = 100`
3. El sistema llama a `POST /api/certificates/issue`

### Emisión Manual

También puedes emitir certificados manualmente desde tu código:

```typescript
const response = await fetch('/api/certificates/issue', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ courseId: 'curso-uuid' }),
});

const { certificate } = await response.json();
console.log('Certificado emitido:', certificate.folio);
```

### Verificación Externa

Cualquier persona puede verificar un certificado:

1. **Via Web**: `https://edu.distmah.com/certificados/A1B2C3D4`
2. **Via API**: `https://edu.distmah.com/api/certificates/A1B2C3D4`
3. **Via QR**: Escanear el código QR del PDF

### Integración con LinkedIn

Los estudiantes pueden agregar sus certificados a LinkedIn usando:
- URL de certificado: `https://edu.distmah.com/certificados/[folio]`
- URL de verificación: `https://edu.distmah.com/api/certificates/[folio]`

## Validadores OpenBadges Compatibles

El sistema es compatible con validadores externos como:
- [Badgr](https://badgr.com)
- [Open Badge Factory](https://openbadgefactory.com)
- [Credly](https://credly.com)
- [Blockcerts](https://www.blockcerts.org)

Para validar un certificado externamente, usa la URL:
```
https://edu.distmah.com/api/certificates/[folio]
```

## Estructura de Archivos

```
DISTMAH-ATC-/
├── prisma/
│   └── schema.prisma                    # Modelo Certificate actualizado
├── types/
│   └── openbadges.ts                    # Tipos TypeScript OpenBadges
├── lib/
│   ├── certificates.ts                  # Utilidades (folio, badge, hash)
│   └── certificate-generator.tsx        # Generador de PDF
├── app/
│   ├── api/
│   │   └── certificates/
│   │       ├── issue/
│   │       │   └── route.ts             # POST: Emitir certificado
│   │       └── [folio]/
│   │           ├── route.ts             # GET: Verificar (JSON)
│   │           └── download/
│   │               └── route.ts         # GET: Descargar PDF
│   └── [locale]/
│       ├── certificados/
│       │   └── [folio]/
│       │       └── page.tsx             # Página pública del certificado
│       └── (dashboard-student)/
│           └── estudiante/
│               └── certificados/
│                   └── page.tsx         # Dashboard estudiante
├── components/
│   ├── CertificateView.tsx              # Vista completa
│   └── CertificateCard.tsx              # Tarjeta resumida
└── scripts/
    └── migrate-certificates.ts          # Script de migración
```

## Seguridad

### Email Hasheado
Los emails de los estudiantes se hashean usando SHA-256 según el estándar OpenBadges:
```typescript
sha256$[hash_del_email]
```

### Folio Único
Cada certificado tiene un folio único de 8 caracteres hexadecimales (4 bytes random):
```typescript
crypto.randomBytes(4).toString('hex').toUpperCase()
// Ejemplo: A1B2C3D4
```

### Estados de Certificado
- **ACTIVE**: Certificado válido y verificable
- **REVOKED**: Certificado revocado (no válido)
- **EXPIRED**: Certificado expirado (si tiene fecha de expiración)

### Verificación Hosted
El certificado usa verificación tipo `hosted`, lo que significa que la validación se hace consultando directamente la URL del emisor.

## Diseño y Colores

### Colores Corporativos (Nolivos Law)
- **Blanco**: `#FFFFFF` - Fondo principal
- **Negro**: `#000000` - Texto principal
- **Gris oscuro**: `#333333` - Texto secundario
- **Azul corporativo**: `#003366` - Acentos y botones
- **Gris claro**: `#F5F5F5` - Fondos sutiles

### Tipografía
- **Títulos**: Font bold, tamaños grandes (32-42px)
- **Cuerpo**: Font regular, tamaños medianos (12-14px)
- **Etiquetas**: Font small, tamaños pequeños (9-11px)

## Soporte

Para preguntas o problemas:
- Email: certificaciones@universidad-autodesk.edu
- Documentación: Este archivo
- Código fuente: Todos los archivos listados arriba

## Licencia

Propiedad de DISTMAH ATC - Universidad Autodesk
Todos los derechos reservados.
