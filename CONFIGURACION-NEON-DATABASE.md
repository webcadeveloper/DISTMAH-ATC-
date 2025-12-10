# 🚀 Configuración Neon PostgreSQL Database - DISTMAH ATC

## ¿Por qué Neon?

**Neon** es la mejor opción para DISTMAH ATC porque:
- ✅ **100% GRATIS** - 0.5GB almacenamiento + 3GB transferencia
- ✅ **Serverless PostgreSQL** - Auto-escala según demanda
- ✅ **Branching de Base de Datos** - Copia completa para dev/test
- ✅ **Compatible con Prisma** - ORM de Next.js
- ✅ **Sin tarjeta de crédito** - Gratis para siempre

---

## PASO 1: Crear Cuenta en Neon

1. Ve a: **https://neon.tech**
2. Click en **"Sign Up"**
3. Elige **"Sign up with GitHub"** (recomendado)
4. Autoriza Neon en tu cuenta de GitHub

---

## PASO 2: Crear Proyecto

Una vez dentro del dashboard de Neon:

1. Click en **"Create a project"**
2. Configuración:
   - **Project Name**: `distmah-atc`
   - **PostgreSQL Version**: `16` (la más reciente)
   - **Region**: `US East (Ohio)` o `Europe (Frankfurt)` (elige el más cercano a Venezuela/Colombia)
3. Click **"Create Project"**

**⏱️ Espera 30 segundos** mientras Neon crea tu base de datos serverless.

---

## PASO 3: Copiar Connection String

Después de crear el proyecto, verás:

```
Connection String (Prisma):
postgresql://username:password@ep-xxx-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
```

**🔴 IMPORTANTE**: Copia este string completo. Lo necesitarás en el siguiente paso.

---

## PASO 4: Configurar Variables de Entorno

En tu proyecto `DISTMAH-ATC-`, crea el archivo `.env`:

```env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://username:password@ep-xxx-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require"

# NextAuth.js v5 (configurar después)
AUTH_SECRET="genera-un-string-aleatorio-aqui"
AUTH_URL="http://localhost:3000"

# Azure AD (configurar cuando DISTMAH obtenga Microsoft 365 Education A1)
AZURE_AD_CLIENT_ID=""
AZURE_AD_CLIENT_SECRET=""
AZURE_AD_TENANT_ID=""

# Stripe (ya configurado)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Microsoft Graph API (configurar después)
MICROSOFT_GRAPH_CLIENT_ID=""
MICROSOFT_GRAPH_CLIENT_SECRET=""
MICROSOFT_GRAPH_TENANT_ID=""

# OneDrive
ONEDRIVE_ROOT_FOLDER_ID=""

# Resend (para emails)
RESEND_API_KEY=""
```

**⚠️ SEGURIDAD**: Agrega `.env` al `.gitignore` para NO subirlo a GitHub.

---

## PASO 5: Instalar Dependencias

Abre terminal en tu proyecto y ejecuta:

```bash
npm install prisma @prisma/client
npm install -D prisma
```

**Tiempo estimado**: 1-2 minutos.

---

## PASO 6: Inicializar Prisma

```bash
npx prisma init
```

Este comando crea:
- `prisma/schema.prisma` - Archivo de schema de base de datos
- `.env` - Archivo de variables de entorno (si no existe)

---

## PASO 7: Configurar Schema de Prisma

Reemplaza el contenido de `prisma/schema.prisma` con:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ========================================
// MODELOS DE USUARIO Y AUTENTICACIÓN
// ========================================

enum UserRole {
  ADMIN
  INSTRUCTOR
  STUDENT
}

model User {
  id                String    @id @default(cuid())
  email             String    @unique
  name              String?
  password          String?   // Solo para usuarios sin Azure AD
  role              UserRole  @default(STUDENT)
  phone             String?
  country           String?
  emailVerified     DateTime?
  image             String?

  // Azure AD Integration
  azureAdId         String?   @unique
  teamsUserId       String?
  oneDriveFolderId  String?

  // Relaciones
  enrollments       Enrollment[]
  certificates      Certificate[]
  instructorCourses Course[]
  forumPosts        ForumPost[]
  forumComments     ForumComment[]
  progress          LessonProgress[]
  grades            Grade[]
  notifications     Notification[]

  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt

  @@index([email])
  @@index([azureAdId])
}

// ========================================
// MODELOS DE CURSOS
// ========================================

model Course {
  id              String    @id @default(cuid())
  slug            String    @unique
  title           String
  subtitle        String?
  description     String?
  longDescription String?   @db.Text

  // Precios y Versión
  price           Decimal   @db.Decimal(10, 2)
  originalPrice   Decimal?  @db.Decimal(10, 2)
  version         String    @default("2026") // Año de Autodesk
  software        String    // "AutoCAD", "Revit", "Civil 3D", etc.

  // Metadatos
  level           String    // "Básico", "Intermedio", "Avanzado"
  duration        String    // "40 horas", "60 horas"
  category        String    // "CAD", "BIM", "GIS"

  // Imágenes
  thumbnail       String?
  heroImage       String?

  // Estado
  published       Boolean   @default(false)
  featured        Boolean   @default(false)

  // Microsoft Teams Integration
  teamsChannelId  String?
  teamsTabId      String?

  // Instructor
  instructorId    String
  instructor      User      @relation(fields: [instructorId], references: [id])

  // Relaciones
  modules         Module[]
  enrollments     Enrollment[]
  certificates    Certificate[]
  forumPosts      ForumPost[]

  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@index([slug])
  @@index([published])
  @@index([category])
  @@index([software])
}

model Module {
  id              String    @id @default(cuid())
  courseId        String
  course          Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)

  title           String
  slug            String
  description     String?
  order           Int

  // Relaciones
  lessons         Lesson[]

  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@unique([courseId, slug])
  @@index([courseId, order])
}

model Lesson {
  id              String    @id @default(cuid())
  moduleId        String
  module          Module    @relation(fields: [moduleId], references: [id], onDelete: Cascade)

  title           String
  slug            String
  content         String    @db.Text // Markdown content
  videoUrl        String?
  duration        String?   // "15 min"
  order           Int

  // OneDrive Integration (archivos de ejercicios)
  oneDriveFileId  String?
  downloadUrl     String?

  // Relaciones
  progress        LessonProgress[]

  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@unique([moduleId, slug])
  @@index([moduleId, order])
}

// ========================================
// PROGRESO Y CERTIFICADOS
// ========================================

model Enrollment {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  courseId        String
  course          Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)

  // Progreso
  progress        Int       @default(0) // 0-100%
  status          String    @default("active") // "active", "completed", "cancelled"

  // Pago (Stripe)
  stripeSessionId String?
  stripePriceId   String?
  amountPaid      Decimal?  @db.Decimal(10, 2)

  enrolledAt      DateTime  @default(now())
  completedAt     DateTime?

  @@unique([userId, courseId])
  @@index([userId])
  @@index([courseId])
}

model LessonProgress {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  lessonId        String
  lesson          Lesson    @relation(fields: [lessonId], references: [id], onDelete: Cascade)

  completed       Boolean   @default(false)
  timeSpent       Int       @default(0) // Minutos

  startedAt       DateTime  @default(now())
  completedAt     DateTime?

  @@unique([userId, lessonId])
  @@index([userId])
  @@index([lessonId])
}

model Certificate {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  courseId        String
  course          Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)

  certificateUrl  String    // URL del PDF generado
  verificationCode String   @unique // Código para verificar autenticidad

  issuedAt        DateTime  @default(now())

  @@unique([userId, courseId])
  @@index([verificationCode])
}

// ========================================
// FOROS Y COMUNIDAD
// ========================================

model ForumPost {
  id              String    @id @default(cuid())
  courseId        String
  course          Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)

  authorId        String
  author          User      @relation(fields: [authorId], references: [id], onDelete: Cascade)

  title           String
  content         String    @db.Text

  isPinned        Boolean   @default(false)
  isClosed        Boolean   @default(false)

  // Microsoft Teams (sincronización con Teams)
  teamsMessageId  String?

  comments        ForumComment[]

  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@index([courseId])
  @@index([authorId])
}

model ForumComment {
  id              String    @id @default(cuid())
  postId          String
  post            ForumPost @relation(fields: [postId], references: [id], onDelete: Cascade)

  authorId        String
  author          User      @relation(fields: [authorId], references: [id], onDelete: Cascade)

  content         String    @db.Text

  // Microsoft Teams
  teamsReplyId    String?

  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@index([postId])
  @@index([authorId])
}

// ========================================
// CALIFICACIONES Y EVALUACIONES
// ========================================

model Grade {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  courseId        String

  // Tipo de evaluación
  type            String    // "quiz", "exam", "project", "participation"
  title           String

  score           Decimal   @db.Decimal(5, 2) // 0.00 - 100.00
  maxScore        Decimal   @db.Decimal(5, 2) @default(100.00)

  feedback        String?   @db.Text

  gradedAt        DateTime  @default(now())

  @@index([userId])
  @@index([courseId])
}

// ========================================
// NOTIFICACIONES
// ========================================

model Notification {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  type            String    // "new_student", "assignment_submitted", "forum_reply", "certificate_issued"
  title           String
  message         String

  read            Boolean   @default(false)

  // Link opcional
  link            String?

  createdAt       DateTime  @default(now())

  @@index([userId, read])
}

// ========================================
// ANALYTICS
// ========================================

model CourseAnalytics {
  id              String    @id @default(cuid())
  courseId        String

  date            DateTime  @default(now())

  // Métricas
  enrollments     Int       @default(0)
  completions     Int       @default(0)
  revenue         Decimal   @db.Decimal(10, 2) @default(0)
  avgRating       Decimal?  @db.Decimal(3, 2)

  @@unique([courseId, date])
  @@index([courseId])
  @@index([date])
}
```

---

## PASO 8: Generar Migración Inicial

```bash
npx prisma migrate dev --name init
```

Este comando:
1. Crea las tablas en Neon PostgreSQL
2. Genera el Prisma Client
3. Sincroniza tu schema con la base de datos

**Tiempo estimado**: 30-60 segundos.

---

## PASO 9: Verificar Conexión

```bash
npx prisma studio
```

Este comando abre **Prisma Studio** en `http://localhost:5555` - una interfaz visual para ver y editar datos en tu base de datos.

**✅ Si ves las tablas (User, Course, Module, Lesson, etc.)** → ¡Configuración exitosa!

---

## PASO 10: Crear Cliente Prisma (para Next.js)

Crea el archivo `lib/prisma.ts`:

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

**Propósito**: Evita crear múltiples instancias de Prisma Client en desarrollo (Next.js hot reload).

---

## PASO 11: Migrar Contenido Existente

Ahora necesitas migrar los cursos existentes (Markdown files) a PostgreSQL:

### Script de Migración: `scripts/migrate-courses.ts`

```typescript
import { prisma } from '../lib/prisma';
import fs from 'fs';
import path from 'path';

async function migrateCourses() {
  // 1. Crear instructor de ejemplo
  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@distmah.com' },
    update: {},
    create: {
      email: 'instructor@distmah.com',
      name: 'Instructor DISTMAH',
      role: 'INSTRUCTOR',
    },
  });

  console.log('✅ Instructor creado:', instructor.email);

  // 2. Leer cursos desde public/cursos/
  const coursesDir = path.join(process.cwd(), 'public', 'cursos');
  const courseFolders = fs.readdirSync(coursesDir);

  for (const folder of courseFolders) {
    const cursoJsonPath = path.join(coursesDir, folder, 'curso.json');

    if (!fs.existsSync(cursoJsonPath)) continue;

    const cursoData = JSON.parse(fs.readFileSync(cursoJsonPath, 'utf-8'));

    // 3. Crear curso en Prisma
    const course = await prisma.course.create({
      data: {
        slug: folder,
        title: cursoData.title,
        subtitle: cursoData.subtitle,
        description: cursoData.description,
        longDescription: cursoData.longDescription,
        price: cursoData.price,
        originalPrice: cursoData.originalPrice || cursoData.price,
        version: cursoData.version,
        software: cursoData.software,
        level: cursoData.level,
        duration: cursoData.duration,
        category: cursoData.category,
        thumbnail: cursoData.thumbnail,
        heroImage: cursoData.heroImage,
        published: true,
        instructorId: instructor.id,
      },
    });

    console.log('✅ Curso creado:', course.title);

    // 4. Crear módulos y lecciones
    for (const [moduleIndex, moduleData] of cursoData.modules.entries()) {
      const module = await prisma.module.create({
        data: {
          courseId: course.id,
          title: moduleData.title,
          slug: moduleData.slug,
          description: moduleData.description,
          order: moduleIndex + 1,
        },
      });

      for (const [lessonIndex, lessonData] of moduleData.lessons.entries()) {
        // Leer contenido de archivo Markdown
        const lessonPath = path.join(
          coursesDir,
          folder,
          moduleData.slug,
          'lecciones',
          `${lessonData.slug}.md`
        );

        let content = '';
        if (fs.existsSync(lessonPath)) {
          content = fs.readFileSync(lessonPath, 'utf-8');
        }

        await prisma.lesson.create({
          data: {
            moduleId: module.id,
            title: lessonData.title,
            slug: lessonData.slug,
            content: content,
            videoUrl: lessonData.videoUrl,
            duration: lessonData.duration,
            order: lessonIndex + 1,
          },
        });
      }

      console.log('  ✅ Módulo:', module.title);
    }
  }

  console.log('\n🎉 Migración completada!');
}

migrateCourses()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### Ejecutar migración:

```bash
npx tsx scripts/migrate-courses.ts
```

---

## PASO 12: Actualizar Next.js API Routes

Ahora puedes usar Prisma en tus API routes:

### Ejemplo: `app/api/cursos/route.ts`

```typescript
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const courses = await prisma.course.findMany({
    where: { published: true },
    include: {
      instructor: {
        select: {
          name: true,
          email: true,
        },
      },
      modules: {
        include: {
          lessons: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(courses);
}
```

---

## PASO 13: Neon Features Útiles

### 1. Database Branching
Crea copias de tu base de datos para desarrollo:

```bash
# En Neon Dashboard → Click "Branches" → "Create Branch"
# Branch name: dev
# Ahora tienes DATABASE_URL_DEV
```

### 2. Autoscaling
Neon escala automáticamente según demanda:
- **Idle**: 0 costos cuando no se usa
- **Active**: Auto-escala hasta tu límite del plan Free

### 3. Monitoring
En Neon Dashboard puedes ver:
- Queries por segundo
- Storage usado
- Conexiones activas

---

## PASO 14: Mejores Prácticas

### 1. Connection Pooling (importante para serverless)

Instala Prisma Accelerate (opcional):

```bash
npm install @prisma/extension-accelerate
```

### 2. Índices Optimizados

El schema ya incluye índices optimizados:
```prisma
@@index([email])
@@index([slug])
@@index([courseId, order])
```

### 3. Migrations en Producción

```bash
npx prisma migrate deploy
```

**Nunca** uses `migrate dev` en producción.

---

## PASO 15: Costo y Límites (Plan Free)

| Recurso | Límite Free |
|---------|-------------|
| Storage | 0.5 GB |
| Data Transfer | 5 GB/month |
| Compute | 191.9 hours/month |
| Branches | 10 |
| Projects | Unlimited |

**Para DISTMAH ATC (estimado)**:
- 50 cursos completos: ~100 MB
- 1,000 estudiantes: ~50 MB
- **Total**: ~150 MB (30% del límite free)

**Conclusión**: Plan Free es suficiente para 6-12 meses de operación.

---

## PASO 16: Upgrade Path (cuando sea necesario)

Cuando superes el plan Free:

**Neon Scale Plan**: $19/month
- 10 GB storage
- 100 GB transfer
- Compute ilimitado

---

## 🎯 RESUMEN DE COMANDOS

```bash
# 1. Instalar Prisma
npm install prisma @prisma/client
npm install -D prisma

# 2. Inicializar
npx prisma init

# 3. Crear migraciones
npx prisma migrate dev --name init

# 4. Generar cliente
npx prisma generate

# 5. Abrir Prisma Studio
npx prisma studio

# 6. Migrar contenido
npx tsx scripts/migrate-courses.ts
```

---

## ✅ CHECKLIST COMPLETO

- [ ] Cuenta de Neon creada
- [ ] Proyecto `distmah-atc` creado
- [ ] Connection string copiado
- [ ] `.env` configurado
- [ ] Prisma instalado
- [ ] Schema configurado
- [ ] Migración inicial ejecutada
- [ ] Prisma Studio funciona
- [ ] `lib/prisma.ts` creado
- [ ] Script de migración ejecutado
- [ ] Cursos migrados a PostgreSQL
- [ ] API routes usando Prisma

---

## 🆘 Troubleshooting

### Error: "Can't reach database server"
**Solución**: Verifica que el `DATABASE_URL` en `.env` sea correcto y tenga `?sslmode=require` al final.

### Error: "Prisma client is not generated"
**Solución**:
```bash
npx prisma generate
```

### Error: "Migration failed"
**Solución**: Elimina carpeta `prisma/migrations` y vuelve a ejecutar:
```bash
npx prisma migrate dev --name init
```

---

## 📞 Soporte

- **Neon Docs**: https://neon.tech/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Discord de Neon**: https://discord.gg/neon

---

**🎉 ¡Configuración Completa! Ahora DISTMAH ATC tiene una base de datos PostgreSQL en la nube, 100% gratis, escalable y lista para producción.**
