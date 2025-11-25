# Sistema de Enrollments - DISTMAH ATC

## Descripción General

El sistema de enrollments gestiona las inscripciones de estudiantes a cursos después de pagos exitosos mediante Stripe.

## Flujo de Pago y Enrollment

### 1. Checkout (Inicio del Pago)

**Endpoint:** `POST /api/stripe/checkout`

**Request:**
```json
{
  "courseId": "uuid-del-curso",
  "email": "estudiante@ejemplo.com",
  "userId": "uuid-del-usuario-opcional",
  "couponCode": "DISTMAH2026"
}
```

**Proceso:**
1. Valida courseId y email
2. Busca el curso en el catálogo
3. Aplica cupón si existe
4. Crea sesión de Stripe con metadata:
   - courseId
   - courseName
   - userId (puede estar vacío para guests)
   - couponCode
   - originalPrice
   - discountAmount
   - finalPrice

### 2. Webhook (Pago Exitoso)

**Endpoint:** `POST /api/stripe/webhook`

**Evento:** `checkout.session.completed`

**Proceso:**
1. Verifica firma de Stripe
2. Extrae metadata del session
3. Verifica si usuario existe:
   - Si `userId` no existe → busca por email
   - Si email no existe → crea nuevo usuario
4. Verifica que no exista enrollment duplicado
5. Crea enrollment en base de datos con transacción:
   - Crea Enrollment con status ACTIVE
   - Incrementa enrollmentCount en Course
6. Logea resultado completo

**Campos del Enrollment:**
```typescript
{
  userId: string,
  courseId: string,
  status: 'ACTIVE',
  paymentMethod: 'stripe',
  paymentId: string, // Stripe payment_intent ID
  amount: number, // en USD (session.amount_total / 100)
  currency: string, // 'USD'
  progressPercent: 0,
  enrolledAt: Date
}
```

## Endpoints de API

### 1. Listar Enrollments de Usuario

**Endpoint:** `GET /api/enrollments/[userId]`

**Ejemplo:** `GET /api/enrollments/123e4567-e89b-12d3-a456-426614174000`

**Response:**
```json
{
  "success": true,
  "enrollments": [
    {
      "id": "enrollment-uuid",
      "enrolledAt": "2025-11-24T10:00:00.000Z",
      "progressPercent": 0,
      "status": "ACTIVE",
      "course": {
        "id": "course-uuid",
        "slug": "autocad-2026-basico",
        "title": "AutoCAD 2026 - Curso Básico",
        "subtitle": "Fundamentos de diseño CAD",
        "category": "AUTOCAD",
        "level": "BASICO",
        "duration": 40,
        "sessions": 20,
        "image": "/cursos/autocad-2026/hero.jpg",
        "rating": 4.8,
        "reviewsCount": 156,
        "instructor": {
          "id": "instructor-uuid",
          "name": "Ing. Juan Pérez",
          "email": "juan@distmah.com",
          "avatar": "/avatars/juan.jpg"
        },
        "modules": [
          {
            "id": "module-uuid",
            "number": 1,
            "title": "Introducción a AutoCAD",
            "description": "...",
            "duration": 4,
            "order": 1,
            "lessons": [...]
          }
        ]
      }
    }
  ]
}
```

### 2. Verificar Acceso a Curso

**Endpoint:** `GET /api/enrollments/verify?userId=X&courseId=Y`

**Ejemplo:**
```
GET /api/enrollments/verify?userId=123e4567-e89b-12d3-a456-426614174000&courseId=abc-def-ghi
```

**Response (Con Acceso):**
```json
{
  "hasAccess": true,
  "enrollment": {
    "id": "enrollment-uuid",
    "status": "ACTIVE",
    "enrolledAt": "2025-11-24T10:00:00.000Z",
    "expiresAt": null
  }
}
```

**Response (Sin Acceso):**
```json
{
  "hasAccess": false,
  "reason": "No enrollment found"
}
```

**Response (Expirado):**
```json
{
  "hasAccess": false,
  "reason": "Enrollment has expired",
  "enrollment": {
    "id": "enrollment-uuid",
    "status": "ACTIVE",
    "expiresAt": "2025-10-24T10:00:00.000Z"
  }
}
```

## Utilidades Helper

### verifyUserEnrollment

**Ubicación:** `lib/enrollments.ts`

```typescript
import { verifyUserEnrollment } from '@/lib/enrollments';

const { hasAccess, reason } = await verifyUserEnrollment(userId, courseId);

if (!hasAccess) {
  console.log('No access:', reason);
  // Redirigir a página de pago
}
```

### getUserEnrollments

**Ubicación:** `lib/enrollments.ts`

```typescript
import { getUserEnrollments } from '@/lib/enrollments';

const enrollments = await getUserEnrollments(userId);
console.log(`Usuario tiene ${enrollments.length} cursos activos`);
```

## Modelo de Base de Datos

```prisma
model Enrollment {
  id                String   @id @default(uuid())
  userId            String
  user              User     @relation(fields: [userId], references: [id])
  courseId          String
  course            Course   @relation(fields: [courseId], references: [id])

  status            EnrollmentStatus @default(ACTIVE)

  // Payment info
  paymentMethod     String?  // "stripe", "paypal", "zelle", "transferencia"
  paymentId         String?  // Stripe payment intent ID
  amount            Decimal  @db.Decimal(10, 2)
  currency          String   // "USD", "VEF"

  // Progress
  progressPercent   Int      @default(0) // 0-100

  // Dates
  enrolledAt        DateTime @default(now())
  startedAt         DateTime?
  completedAt       DateTime?
  expiresAt         DateTime? // Si curso tiene expiración

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  @@unique([userId, courseId])
  @@index([userId])
  @@index([courseId])
}

enum EnrollmentStatus {
  PENDING     // Pendiente de pago
  ACTIVE      // Activo
  COMPLETED   // Completado
  EXPIRED     // Expirado
  CANCELLED   // Cancelado
}
```

## Seguridad

### Prevención de Duplicados

El webhook verifica enrollments existentes antes de crear uno nuevo:

```typescript
const existingEnrollment = await prisma.enrollment.findUnique({
  where: {
    userId_courseId: {
      userId: enrollmentUserId,
      courseId: courseId,
    },
  },
});

if (existingEnrollment) {
  console.log('Enrollment already exists:', existingEnrollment.id);
  return;
}
```

### Transacciones Atómicas

La creación del enrollment y actualización del contador usan transacciones:

```typescript
await prisma.$transaction([
  prisma.enrollment.create({ ... }),
  prisma.course.update({
    where: { id: courseId },
    data: {
      enrollmentCount: {
        increment: 1,
      },
    },
  }),
]);
```

## Testing

### 1. Test de Webhook con Stripe CLI

```bash
# Iniciar listener de Stripe
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Simular pago exitoso
stripe trigger checkout.session.completed
```

### 2. Test Manual de Verificación

```bash
curl http://localhost:3000/api/enrollments/verify?userId=USER_ID&courseId=COURSE_ID
```

### 3. Test de Listado

```bash
curl http://localhost:3000/api/enrollments/USER_ID
```

## Logs y Debugging

El webhook logea información detallada en cada paso:

```
====================================================
ENROLLMENT CREATED SUCCESSFULLY
====================================================
Enrollment ID: abc-123-def
Course ID: course-xyz
User ID: user-456
Email: estudiante@ejemplo.com
Coupon: DISTMAH2026
Original Price: $390
Discount: $39
Final Price: $351
Payment ID: pi_3AbCdEfGhIjKlMnO
Payment Status: paid
====================================================
```

## Próximos Pasos

1. Agregar sistema de progreso de lecciones
2. Implementar certificados automáticos al 100%
3. Agregar notificaciones por email
4. Dashboard de estudiante con cursos activos
5. Sistema de expiración automática
