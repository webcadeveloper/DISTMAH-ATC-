# 🏗️ ARQUITECTURA COMPLETA - DISTMAH ATC
## Universidad Autodesk - Plataforma Educativa Integrada

**Fecha:** 2025-11-24
**Estado:** En Desarrollo
**Objetivo:** Sistema completo de gestión de aprendizaje con Microsoft 365 Education A1

---

## 📋 ÍNDICE

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Stack Tecnológico Actual](#stack-tecnológico-actual)
3. [Arquitectura Microsoft 365](#arquitectura-microsoft-365)
4. [Integración Microsoft Graph API](#integración-microsoft-graph-api)
5. [Base de Datos PostgreSQL](#base-de-datos-postgresql)
6. [Sistema de Autenticación](#sistema-de-autenticación)
7. [Flujo Completo del Usuario](#flujo-completo-del-usuario)
8. [Roadmap de Implementación](#roadmap-de-implementación)
9. [Costos y Licencias](#costos-y-licencias)
10. [Plan de Migración](#plan-de-migración)

---

## 🎯 RESUMEN EJECUTIVO

DISTMAH ATC está construyendo una plataforma educativa de clase mundial para enseñar software de Autodesk (AutoCAD, Revit, Civil 3D, Navisworks) con integración completa de Microsoft 365 Education A1.

### Lo que YA tenemos (✅ Completado):

1. **Plataforma Web Next.js 15**
   - 16 cursos completos de Autodesk 2026
   - Sistema de carga dinámica de cursos desde Markdown
   - Dashboard de Instructor con edición de contenido
   - Dashboard de Admin completo
   - Dashboard de Estudiante completo
   - Sistema de checkout con Stripe
   - Editor de lecciones con imágenes y videos

2. **Sistema de Contenidos**
   - Markdown-based CMS
   - Upload de imágenes (3 métodos)
   - Embed de videos (YouTube, Vimeo, Loom)
   - Vista previa en tiempo real
   - Estructura modular (cursos → módulos → lecciones)

### Lo que FALTA (🔴 Pendiente):

1. **Base de Datos PostgreSQL**
   - Esquema completo con Prisma
   - Migración de datos desde archivos Markdown
   - Sistema de progreso de estudiantes

2. **Microsoft 365 Integration**
   - Azure AD authentication
   - Microsoft Graph API
   - Teams, SharePoint, OneDrive, Stream, Forms, Outlook

3. **Automatización**
   - Inscripción automática en Teams
   - Creación de carpetas en OneDrive
   - Emails de bienvenida
   - Sincronización de progreso

---

## 💻 STACK TECNOLÓGICO ACTUAL

### Frontend (✅ Implementado)
```typescript
// Framework
Next.js 15.1.3 (App Router)
React 19
TypeScript 5.7.2

// UI/UX
Tailwind CSS 3.4.17
shadcn/ui components
Lucide React icons
Framer Motion (para animaciones - agregar)

// Markdown & Content
ReactMarkdown + remark-gfm + rehype-raw
gray-matter (frontmatter parsing)
```

### Backend (🔴 Pendiente)
```typescript
// Base de Datos
PostgreSQL 16
Prisma ORM 6.x

// Autenticación
NextAuth.js v5 (Auth.js)
Azure AD Provider
Microsoft Graph SDK

// APIs
Microsoft Graph API
Stripe API (✅ implementado)

// Storage
Microsoft OneDrive API
Azure Blob Storage (opcional para videos grandes)
```

### Hosting & DevOps
```
Vercel (Frontend - Next.js)
Railway (PostgreSQL)
Microsoft Azure (Microsoft 365 services)
GitHub (version control)
```

---

## ☁️ ARQUITECTURA MICROSOFT 365

### Microsoft 365 Education A1 (GRATUITO)

**Incluye:**

| Servicio | Propósito | Capacidad | Estado |
|----------|-----------|-----------|--------|
| **Azure AD** | Autenticación SSO | Usuarios ilimitados | 🔴 Por configurar |
| **Teams** | Clases en vivo | 100 personas/clase | 🔴 Por configurar |
| **SharePoint** | Gestión de documentos | 1TB/organización | 🔴 Por configurar |
| **OneDrive** | Almacenamiento personal | 1TB/usuario | 🔴 Por configurar |
| **Stream** | Videos educativos | Almacenamiento ilimitado | 🔴 Por configurar |
| **Forms** | Exámenes/quizzes | Formularios ilimitados | 🔴 Por configurar |
| **Outlook** | Email institucional | 50GB/usuario | 🔴 Por configurar |

**Costo:** $0 USD (Education A1 es GRATUITO para instituciones educativas verificadas)

### Proceso de Aplicación Microsoft 365 Education

**Requisitos:**
1. ✅ Dominio educativo propio (universidadautodesk.com)
2. ✅ Ser Autodesk ATC (Authorized Training Center) - DISTMAH ya es ATC
3. 📄 Documentos de registro institucional
4. 📧 Email de contacto institucional
5. 🌐 Sitio web institucional (este proyecto)

**Pasos:**
1. Ir a: https://www.microsoft.com/en-us/education/products/office
2. Click "Sign up for Office 365 Education"
3. Ingresar email institucional: admin@distmah.com
4. Subir documentos de verificación:
   - Certificado ATC de Autodesk
   - Registro de empresa DISTMAH
   - Prueba de actividad educativa
5. Esperar aprobación (2-4 semanas)
6. Configurar tenant de Azure AD

---

## 🔌 INTEGRACIÓN MICROSOFT GRAPH API

### ¿Qué es Microsoft Graph?

Microsoft Graph es una API unificada que permite acceder a TODOS los servicios de Microsoft 365 desde un solo endpoint:

```
https://graph.microsoft.com/v1.0/
```

**Con Graph API podemos:**
- Crear usuarios automáticamente
- Inscribir estudiantes en Teams
- Crear carpetas en OneDrive
- Enviar emails desde Outlook
- Publicar videos en Stream
- Crear exámenes en Forms
- TODO DESDE NUESTRA WEB

### Configuración Inicial

**1. Registrar aplicación en Azure AD**

```bash
# Ir a: https://portal.azure.com
# Azure Active Directory → App registrations → New registration

Nombre: DISTMAH ATC Learning Platform
Redirect URI: https://edu.distmah.com/api/auth/callback/azure-ad
```

**2. Permisos necesarios (Microsoft Graph API)**

```
User.Read.All          # Leer usuarios
User.ReadWrite.All     # Crear/modificar usuarios
Team.Create            # Crear teams
Team.ReadWriteAll      # Gestionar teams
Files.ReadWrite.All    # Gestionar OneDrive
Mail.Send              # Enviar emails
Sites.ReadWrite.All    # Gestionar SharePoint
```

**3. Variables de entorno**

```env
# Azure AD
AZURE_AD_CLIENT_ID=your-client-id
AZURE_AD_CLIENT_SECRET=your-client-secret
AZURE_AD_TENANT_ID=your-tenant-id

# Microsoft Graph
MICROSOFT_GRAPH_API_ENDPOINT=https://graph.microsoft.com/v1.0
MICROSOFT_GRAPH_SCOPES=User.Read Team.Create Files.ReadWrite.All Mail.Send

# NextAuth
NEXTAUTH_URL=https://edu.distmah.com
NEXTAUTH_SECRET=your-secret-key-here

# PostgreSQL (Railway)
DATABASE_URL=postgresql://user:password@railway.app:5432/distmah

# Stripe (✅ ya configurado)
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Instalación de Dependencias

```bash
npm install @azure/msal-node @microsoft/microsoft-graph-client next-auth prisma @prisma/client
npm install -D @types/node
```

---

## 📊 BASE DE DATOS POSTGRESQL

### Esquema Prisma Completo

**Archivo:** `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================
// USUARIOS Y AUTENTICACIÓN
// ============================================

model User {
  id                String    @id @default(cuid())
  email             String    @unique
  name              String?
  password          String?   // Solo para usuarios sin Azure AD
  role              UserRole  @default(STUDENT)

  // Azure AD Integration
  azureAdId         String?   @unique
  azureAdEmail      String?
  microsoftTenantId String?

  // Profile
  avatar            String?
  phone             String?
  country           String?
  bio               String?

  // Status
  isActive          Boolean   @default(true)
  isVerified        Boolean   @default(false)
  lastLoginAt       DateTime?

  // Microsoft 365
  teamsUserId       String?   // ID en Microsoft Teams
  oneDriveFolderId  String?   // ID de carpeta personal en OneDrive

  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt

  // Relations
  enrollments       Enrollment[]
  certificates      Certificate[]
  progress          LessonProgress[]
  assignments       Assignment[]
  instructorCourses Course[]        @relation("InstructorCourses")

  @@index([email])
  @@index([azureAdId])
}

enum UserRole {
  STUDENT
  INSTRUCTOR
  ADMIN
}

// ============================================
// CURSOS Y CONTENIDO
// ============================================

model Course {
  id              String    @id @default(cuid())
  slug            String    @unique
  title           String
  subtitle        String?
  description     String?

  // Metadata
  category        String
  subcategory     String?
  level           CourseLevel
  version         String    // "2026", "2025", etc.

  // Pricing
  price           Decimal   @db.Decimal(10, 2)
  priceVEF        Decimal?  @db.Decimal(15, 2)
  currency        String    @default("USD")

  // Content
  duration        Int       // Total minutes
  totalModules    Int       @default(0)
  totalLessons    Int       @default(0)

  // Media
  thumbnail       String?
  heroImage       String?
  videoIntro      String?   // URL del video de introducción

  // SEO
  metaTitle       String?
  metaDescription String?
  keywords        String[]

  // Autodesk
  autodeskCourseId String?  // ID oficial de Autodesk si aplica
  isAutodeskCertified Boolean @default(false)

  // Status
  isPublished     Boolean   @default(false)
  isActive        Boolean   @default(true)

  // Microsoft Teams Integration
  teamsChannelId  String?   // ID del canal de Teams del curso
  teamsTeamId     String?   // ID del equipo de Teams

  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  publishedAt     DateTime?

  // Relations
  instructorId    String
  instructor      User      @relation("InstructorCourses", fields: [instructorId], references: [id])
  modules         Module[]
  enrollments     Enrollment[]
  certificates    Certificate[]

  @@index([slug])
  @@index([category])
  @@index([isPublished])
}

enum CourseLevel {
  BASICO
  INTERMEDIO
  AVANZADO
}

model Module {
  id              String    @id @default(cuid())
  courseId        String

  title           String
  description     String?
  order           Int       // 1, 2, 3...
  duration        Int       // Total minutes

  // Status
  isPublished     Boolean   @default(false)

  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  // Relations
  course          Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)
  lessons         Lesson[]

  @@unique([courseId, order])
  @@index([courseId])
}

model Lesson {
  id              String    @id @default(cuid())
  moduleId        String
  slug            String    // "leccion-1-introduccion"

  title           String
  content         String    @db.Text // Markdown content
  order           Int       // 1, 2, 3...
  duration        Int       // Minutes

  // Media
  videoUrl        String?   // YouTube, Vimeo, Stream
  videoProvider   String?   // "youtube", "vimeo", "stream"

  // Files
  downloadableFiles String[] // URLs de archivos .dwg, .rvt, etc.

  // Microsoft Integration
  streamVideoId   String?   // ID del video en Microsoft Stream
  oneDriveFolderId String?  // Carpeta de archivos en OneDrive

  // Status
  isPublished     Boolean   @default(false)
  isFree          Boolean   @default(false) // Lección gratis para preview

  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  // Relations
  module          Module    @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  progress        LessonProgress[]

  @@unique([moduleId, slug])
  @@index([moduleId])
}

// ============================================
// PROGRESO Y SEGUIMIENTO
// ============================================

model Enrollment {
  id              String    @id @default(cuid())
  userId          String
  courseId        String

  // Status
  status          EnrollmentStatus @default(ACTIVE)
  progress        Int       @default(0) // 0-100%

  // Dates
  enrolledAt      DateTime  @default(now())
  startedAt       DateTime?
  completedAt     DateTime?
  expiresAt       DateTime? // Si el curso tiene fecha de expiración

  // Payment
  stripeSessionId String?   // ID de sesión de Stripe
  paidAmount      Decimal   @db.Decimal(10, 2)
  currency        String    @default("USD")

  // Microsoft Teams
  teamsChannelMembershipId String? // ID de membresía en el canal de Teams

  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  // Relations
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  course          Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)

  @@unique([userId, courseId])
  @@index([userId])
  @@index([courseId])
}

enum EnrollmentStatus {
  ACTIVE
  COMPLETED
  EXPIRED
  CANCELLED
}

model LessonProgress {
  id              String    @id @default(cuid())
  userId          String
  lessonId        String

  // Progress
  isCompleted     Boolean   @default(false)
  watchedDuration Int       @default(0) // Seconds watched
  totalDuration   Int       // Total seconds of lesson
  progressPercent Int       @default(0) // 0-100%

  // Timestamps
  startedAt       DateTime  @default(now())
  completedAt     DateTime?
  lastWatchedAt   DateTime  @default(now())

  // Relations
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  lesson          Lesson    @relation(fields: [lessonId], references: [id], onDelete: Cascade)

  @@unique([userId, lessonId])
  @@index([userId])
  @@index([lessonId])
}

// ============================================
// CERTIFICADOS
// ============================================

model Certificate {
  id              String    @id @default(cuid())
  userId          String
  courseId        String

  certificateNumber String  @unique // DISTMAH-2026-001234

  // Details
  issuedAt        DateTime  @default(now())
  expiresAt       DateTime? // Algunos certificados expiran

  // PDF
  pdfUrl          String?   // URL del PDF generado
  pdfGeneratedAt  DateTime?

  // Verification
  verificationCode String   @unique // Código para verificar autenticidad
  isVerified      Boolean   @default(true)

  // Grade
  finalGrade      Decimal?  @db.Decimal(5, 2) // 0.00 - 100.00

  // Relations
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  course          Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([courseId])
  @@index([certificateNumber])
}

// ============================================
// EVALUACIONES
// ============================================

model Assignment {
  id              String    @id @default(cuid())
  userId          String
  title           String
  description     String?

  // Files
  filesUrls       String[]  // URLs de archivos entregados
  oneDriveFolderId String?  // Carpeta en OneDrive del estudiante

  // Grading
  grade           Decimal?  @db.Decimal(5, 2)
  feedback        String?   @db.Text

  // Status
  status          AssignmentStatus @default(PENDING)

  // Timestamps
  submittedAt     DateTime  @default(now())
  gradedAt        DateTime?

  // Relations
  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
}

enum AssignmentStatus {
  PENDING
  GRADED
  LATE
}

// ============================================
// MICROSOFT FORMS INTEGRATION
// ============================================

model Exam {
  id              String    @id @default(cuid())
  title           String
  description     String?

  // Microsoft Forms
  formsId         String?   @unique // ID del formulario en Microsoft Forms
  formsUrl        String?   // URL pública del examen

  // Settings
  passingScore    Int       @default(70) // 0-100
  timeLimit       Int?      // Minutes
  maxAttempts     Int       @default(3)

  // Status
  isActive        Boolean   @default(true)

  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

// ============================================
// CUPONES Y DESCUENTOS
// ============================================

model Coupon {
  id              String    @id @default(cuid())
  code            String    @unique

  // Discount
  discountType    DiscountType
  discountValue   Decimal   @db.Decimal(10, 2) // 10.00 (%) o 50.00 (USD)

  // Usage
  maxUses         Int?      // null = ilimitado
  currentUses     Int       @default(0)

  // Validity
  validFrom       DateTime  @default(now())
  validUntil      DateTime?
  isActive        Boolean   @default(true)

  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@index([code])
}

enum DiscountType {
  PERCENTAGE
  FIXED
}

// ============================================
// SISTEMA DE NOTIFICACIONES
// ============================================

model Notification {
  id              String    @id @default(cuid())
  userId          String

  type            NotificationType
  title           String
  message         String    @db.Text

  // Link
  actionUrl       String?
  actionText      String?

  // Status
  isRead          Boolean   @default(false)
  readAt          DateTime?

  // Timestamps
  createdAt       DateTime  @default(now())

  @@index([userId])
  @@index([isRead])
}

enum NotificationType {
  COURSE_ENROLLED
  LESSON_COMPLETED
  CERTIFICATE_ISSUED
  ASSIGNMENT_GRADED
  NEW_ANNOUNCEMENT
  LIVE_CLASS_REMINDER
}
```

### Comandos Prisma

```bash
# Inicializar Prisma
npx prisma init

# Crear migraciones
npx prisma migrate dev --name init

# Generar cliente
npx prisma generate

# Abrir Prisma Studio (GUI)
npx prisma studio

# Reset de base de datos (desarrollo)
npx prisma migrate reset

# Push a producción
npx prisma migrate deploy
```

---

## 🔐 SISTEMA DE AUTENTICACIÓN

### NextAuth.js v5 con Azure AD

**Archivo:** `lib/auth.ts`

```typescript
import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // Azure AD Provider (Principal)
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: {
        params: {
          scope: "openid profile email User.Read",
        },
      },
    }),

    // Credentials Provider (Fallback)
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email y contraseña son requeridos");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Usuario no encontrado");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Contraseña incorrecta");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      // Si es login con Azure AD
      if (account?.provider === "azure-ad") {
        // Actualizar o crear usuario con datos de Azure AD
        await prisma.user.upsert({
          where: { email: user.email! },
          update: {
            azureAdId: account.providerAccountId,
            azureAdEmail: user.email,
            microsoftTenantId: account.tenantId,
            name: user.name,
            avatar: user.image,
            lastLoginAt: new Date(),
          },
          create: {
            email: user.email!,
            name: user.name,
            azureAdId: account.providerAccountId,
            azureAdEmail: user.email,
            microsoftTenantId: account.tenantId,
            avatar: user.image,
            role: "STUDENT",
            isActive: true,
            isVerified: true,
          },
        });
      }
      return true;
    },

    async session({ session, user }) {
      if (session.user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email! },
        });

        if (dbUser) {
          session.user.id = dbUser.id;
          session.user.role = dbUser.role;
        }
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login/error",
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
});
```

**Archivo:** `app/api/auth/[...nextauth]/route.ts`

```typescript
import { handlers } from "@/lib/auth";

export const { GET, POST } = handlers;
```

---

## 🎯 FLUJO COMPLETO DEL USUARIO

### 1. Registro e Inscripción

```
Estudiante visita edu.distmah.com
    ↓
Explora catálogo de cursos (16 cursos Autodesk 2026)
    ↓
Selecciona "AutoCAD Básico 2D 2026" ($390 USD)
    ↓
Click "Inscribirme Ahora"
    ↓
Checkout con Stripe (pago con tarjeta)
    ↓
[WEBHOOK DE STRIPE]
    ↓
Sistema automáticamente:
    1. Crea usuario en PostgreSQL
    2. Crea usuario en Azure AD (Microsoft Graph API)
    3. Genera email institucional: juan.perez@universidadautodesk.com
    4. Crea carpeta personal en OneDrive (1TB)
    5. Inscribe en Team del curso en Teams
    6. Envía email de bienvenida con credenciales
    7. Registra enrollment en BD
    ↓
Estudiante recibe email:
    "¡Bienvenido a AutoCAD Básico 2D 2026!"
    - Email: juan.perez@universidadautodesk.com
    - Contraseña temporal: [generada]
    - Link: edu.distmah.com/login
```

### 2. Primer Login (Single Sign-On)

```
Estudiante va a edu.distmah.com/login
    ↓
Click "Iniciar sesión con Microsoft"
    ↓
Redirect a login.microsoftonline.com
    ↓
Ingresa email institucional y contraseña
    ↓
Microsoft verifica credenciales
    ↓
Redirect a edu.distmah.com con token
    ↓
Sistema carga:
    - Cursos inscritos
    - Progreso actual
    - Próximas clases en vivo
```

### 3. Acceso al Curso

```
Estudiante en Dashboard
    ↓
Ve "AutoCAD Básico 2D 2026" (Progreso: 0%)
    ↓
Click "Continuar Curso"
    ↓
Página del curso:
    - Módulo 1: Introducción a AutoCAD
      - ✅ Lección 1: ¿Qué es AutoCAD? (5 min)
      - ⚪ Lección 2: Instalación y requisitos (8 min)
      - ⚪ Lección 3: Interfaz de usuario (12 min)
    ↓
Click "Lección 1"
    ↓
Página de lección:
    - Video embebido (Microsoft Stream)
    - Transcripción
    - Archivos de práctica (botón "Descargar .dwg")
    - Siguiente lección
    ↓
Sistema registra progreso:
    - LessonProgress: watchedDuration actualizado cada 10 segundos
    - Al completar 90% → isCompleted = true
    - Enrollment.progress actualizado
```

### 4. Clase en Vivo (Microsoft Teams)

```
Instructor programa clase en vivo:
    Dashboard → Calendario → "Nueva Clase"
    Fecha: 2025-11-26, 7:00 PM
    Tema: "Comandos básicos de dibujo"
    ↓
Sistema automáticamente:
    1. Crea evento en Teams
    2. Invita a todos los estudiantes inscritos
    3. Envía notificación email (Outlook)
    4. Crea recordatorio 1 hora antes
    ↓
Estudiante recibe notificación:
    "Clase en vivo en 1 hora: Comandos básicos de dibujo"
    Click → Abre Teams automáticamente
    ↓
Clase en vivo:
    - Video HD
    - Instructor comparte pantalla (AutoCAD)
    - Chat en tiempo real
    - Preguntas y respuestas
    - Grabación automática
    ↓
Después de la clase:
    - Video sube a Stream
    - Link agregado a lección correspondiente
    - Notificación: "Grabación disponible"
```

### 5. Entrega de Proyecto

```
Estudiante completa "Proyecto Final - Casa Habitación"
    ↓
Dashboard → Mis Cursos → Entregas
    ↓
Click "Subir Proyecto Final"
    ↓
Selecciona archivos .dwg desde PC
    ↓
Sistema:
    1. Sube a OneDrive del estudiante
    2. Comparte carpeta con instructor
    3. Crea Assignment en BD
    4. Notifica a instructor
    ↓
Instructor recibe notificación:
    "Juan Pérez entregó Proyecto Final"
    ↓
Dashboard Instructor → Calificaciones
    ↓
Click "Calificar"
    ↓
Descarga .dwg desde OneDrive
    ↓
Revisa en AutoCAD
    ↓
Ingresa calificación: 95/100
    Feedback: "Excelente trabajo, solo mejorar las cotas"
    ↓
Sistema:
    1. Actualiza Assignment (grade, feedback)
    2. Notifica a estudiante
    3. Actualiza progreso
```

### 6. Finalización y Certificado

```
Estudiante completa todas las lecciones (100%)
    ↓
Sistema verifica:
    - Todas las lecciones completadas ✅
    - Examen final aprobado (≥70%) ✅
    - Proyecto entregado y calificado ✅
    ↓
Sistema automáticamente:
    1. Enrollment.status = COMPLETED
    2. Genera Certificate en BD
        - certificateNumber: DISTMAH-2026-001234
        - verificationCode: ABC123XYZ
    3. Genera PDF del certificado
    4. Sube PDF a OneDrive del estudiante
    5. Envía email con certificado adjunto
    ↓
Estudiante recibe email:
    "¡Felicitaciones! Has completado AutoCAD Básico 2D 2026"
    Adjunto: Certificado_DISTMAH_AutoCAD_Juan_Perez.pdf
    Link de verificación: edu.distmah.com/verificar/ABC123XYZ
```

---

## 🗺️ ROADMAP DE IMPLEMENTACIÓN

### FASE 1: Base de Datos (2 semanas)

**Semana 1:**
- [x] Diseñar esquema Prisma completo
- [ ] Configurar Railway para PostgreSQL
- [ ] Ejecutar migraciones iniciales
- [ ] Crear seeds (datos de prueba)

**Semana 2:**
- [ ] Migrar cursos desde Markdown a PostgreSQL
- [ ] Script de migración automática
- [ ] Validar integridad de datos
- [ ] Testing de queries

### FASE 2: Autenticación Microsoft (2 semanas)

**Semana 1:**
- [ ] Aplicar a Microsoft 365 Education A1
- [ ] Configurar Azure AD tenant
- [ ] Registrar aplicación en Azure
- [ ] Configurar NextAuth.js

**Semana 2:**
- [ ] Implementar login con Azure AD
- [ ] Implementar login con credenciales (fallback)
- [ ] Proteger rutas con middleware
- [ ] Testing de autenticación

### FASE 3: Microsoft Graph Integration (3 semanas)

**Semana 1: Usuarios y OneDrive**
- [ ] Crear usuarios en Azure AD automáticamente
- [ ] Generar emails institucionales
- [ ] Crear carpetas personales en OneDrive
- [ ] Testing de creación de usuarios

**Semana 2: Teams**
- [ ] Crear Team por cada curso
- [ ] Inscribir estudiantes automáticamente
- [ ] Crear canales (General, Anuncios, Entregas)
- [ ] Testing de Teams

**Semana 3: Stream, Forms, Outlook**
- [ ] Integrar Microsoft Stream para videos
- [ ] Crear exámenes en Forms
- [ ] Enviar emails automáticos (Outlook)
- [ ] Testing completo

### FASE 4: Sistema de Progreso (2 semanas)

**Semana 1:**
- [ ] Tracking de progreso de lecciones
- [ ] Cálculo de progreso por curso
- [ ] Dashboard de estudiante con progreso
- [ ] Testing de progreso

**Semana 2:**
- [ ] Sistema de entregas (Assignments)
- [ ] Calificación de entregas
- [ ] Notificaciones automáticas
- [ ] Testing de entregas

### FASE 5: Certificados (1 semana)

- [ ] Generación automática de certificados
- [ ] Diseño de PDF profesional
- [ ] Sistema de verificación
- [ ] Almacenamiento en OneDrive
- [ ] Email automático con certificado

### FASE 6: Testing y Deployment (2 semanas)

**Semana 1: Testing**
- [ ] Testing end-to-end
- [ ] Testing de carga (performance)
- [ ] Testing de seguridad
- [ ] Corrección de bugs

**Semana 2: Deployment**
- [ ] Deploy a Vercel (producción)
- [ ] Configurar Railway (producción)
- [ ] Configurar DNS (edu.distmah.com)
- [ ] Monitoreo y analytics

---

## 💰 COSTOS Y LICENCIAS

### Costos Mensuales Estimados

| Servicio | Costo | Notas |
|----------|-------|-------|
| **Microsoft 365 Education A1** | $0/mes | ✅ GRATUITO para instituciones educativas |
| **Vercel Pro** | $20/mes | Hosting Next.js (100GB bandwidth) |
| **Railway** | $5-20/mes | PostgreSQL según uso |
| **Stripe** | 2.9% + $0.30/transacción | Solo cuando hay ventas |
| **Dominio (universidadautodesk.com)** | $12/año | GoDaddy o Namecheap |

**TOTAL:** ~$30-45/mes + comisiones de Stripe

### Ingresos Proyectados

**Escenario Conservador:**
- 10 inscripciones/mes × $390 USD = $3,900 USD/mes
- Comisión Stripe (3%): -$117 USD
- Costos operativos: -$40 USD
- **Ganancia neta:** $3,743 USD/mes

**Escenario Moderado:**
- 50 inscripciones/mes × $390 USD = $19,500 USD/mes
- Comisión Stripe (3%): -$585 USD
- Costos operativos: -$50 USD
- **Ganancia neta:** $18,865 USD/mes

**Escenario Optimista:**
- 100 inscripciones/mes × $390 USD = $39,000 USD/mes
- Comisión Stripe (3%): -$1,170 USD
- Costos operativos: -$70 USD
- **Ganancia neta:** $37,760 USD/mes

---

## 🚀 PLAN DE MIGRACIÓN

### Desde Sistema Actual a Nueva Arquitectura

**Sistema Actual:**
- ✅ Next.js con archivos Markdown
- ✅ Catálogo de 16 cursos
- ✅ Dashboards (Admin, Instructor, Estudiante)
- ✅ Checkout con Stripe

**Migración:**

```typescript
// scripts/migrate-to-database.ts

import { prisma } from '@/lib/prisma';
import { getCourses } from '@/lib/course-loader';
import fs from 'fs';
import path from 'path';

async function migrateCoursesToDatabase() {
  console.log('🚀 Iniciando migración de cursos a PostgreSQL...');

  // 1. Cargar todos los cursos desde archivos
  const courses = await getCourses();

  for (const course of courses) {
    console.log(`📚 Migrando curso: ${course.title}...`);

    // 2. Crear curso en BD
    const dbCourse = await prisma.course.create({
      data: {
        slug: course.slug,
        title: course.title,
        subtitle: course.subtitle,
        description: course.description,
        category: course.category,
        level: course.level,
        version: course.version,
        price: course.price,
        priceVEF: course.priceVEF,
        duration: course.totalDuration,
        instructorId: 'INSTRUCTOR_ID', // Reemplazar con ID real
        isPublished: true,
      },
    });

    // 3. Crear módulos
    for (const [moduleIndex, module] of course.modules.entries()) {
      const dbModule = await prisma.module.create({
        data: {
          courseId: dbCourse.id,
          title: module.title,
          description: module.description,
          order: moduleIndex + 1,
          duration: module.totalDuration,
          isPublished: true,
        },
      });

      // 4. Crear lecciones
      for (const [lessonIndex, lesson] of module.lessons.entries()) {
        await prisma.lesson.create({
          data: {
            moduleId: dbModule.id,
            slug: lesson.slug,
            title: lesson.title,
            content: lesson.content,
            order: lessonIndex + 1,
            duration: lesson.duration,
            isPublished: true,
          },
        });
      }
    }

    console.log(`✅ Curso migrado: ${course.title}`);
  }

  console.log('🎉 Migración completada!');
}

// Ejecutar
migrateCoursesToDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

**Ejecutar migración:**

```bash
npx tsx scripts/migrate-to-database.ts
```

---

## 📊 MÉTRICAS Y ANALYTICS

### Google Analytics 4

**Eventos a trackear:**

```typescript
// lib/analytics.ts

export const trackEvent = (eventName: string, params?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Eventos clave:
trackEvent('course_view', { course_id: 'autocad-2026' });
trackEvent('course_enroll', { course_id: 'autocad-2026', price: 390 });
trackEvent('lesson_start', { lesson_id: 'leccion-1' });
trackEvent('lesson_complete', { lesson_id: 'leccion-1' });
trackEvent('course_complete', { course_id: 'autocad-2026' });
trackEvent('certificate_download', { certificate_id: 'DISTMAH-2026-001234' });
```

### Dashboard de Métricas (Admin)

**KPIs principales:**
- Total de estudiantes activos
- Inscripciones por mes
- Ingresos mensuales
- Tasa de completitud por curso
- Cursos más populares
- Tiempo promedio de finalización
- Calificación promedio de instructores

---

## 🔒 SEGURIDAD Y PRIVACIDAD

### Mejores Prácticas Implementadas

1. **Autenticación:**
   - Azure AD con SSO
   - Tokens JWT seguros
   - Sesiones con expiración
   - 2FA (opcional)

2. **Autorización:**
   - Roles: ADMIN, INSTRUCTOR, STUDENT
   - Middleware de protección de rutas
   - Verificación de permisos en APIs

3. **Datos:**
   - Encriptación en tránsito (HTTPS)
   - Encriptación en reposo (PostgreSQL)
   - Contraseñas hasheadas (bcrypt)
   - Variables de entorno protegidas

4. **Privacidad:**
   - GDPR compliant
   - Política de privacidad
   - Términos y condiciones
   - Consentimiento de cookies

---

## 📞 SOPORTE TÉCNICO

### Canales de Soporte

1. **Email:** soporte@distmah.com
2. **WhatsApp:** +58 XXX-XXXXXXX
3. **Teams:** Canal de soporte técnico
4. **FAQ:** edu.distmah.com/faq

### SLA (Service Level Agreement)

- **Tiempo de respuesta:** < 24 horas
- **Tiempo de resolución:** < 72 horas
- **Disponibilidad:** 99.9% uptime

---

## 🎓 CONCLUSIÓN

Esta arquitectura combina lo mejor de:
- ✅ **Next.js 15** - Plataforma web moderna y rápida
- ✅ **PostgreSQL** - Base de datos robusta y escalable
- ✅ **Microsoft 365** - Suite completa educativa GRATUITA
- ✅ **Azure AD** - Autenticación empresarial
- ✅ **Stripe** - Pagos seguros y profesionales
- ✅ **Vercel** - Hosting de clase mundial

**Resultado:** Una plataforma educativa de nivel internacional para DISTMAH ATC que rivaliza con Coursera, Udemy y Platzi, pero especializada en software de Autodesk.

---

**Fecha de actualización:** 2025-11-24
**Versión:** 1.0
**Autor:** Claude Code + DISTMAH Team
**Estado:** En Desarrollo Activo

---

## 📎 ANEXOS

### Anexo A: Links Útiles

- Microsoft 365 Education: https://www.microsoft.com/en-us/education/products/office
- Azure Portal: https://portal.azure.com
- Microsoft Graph Explorer: https://developer.microsoft.com/en-us/graph/graph-explorer
- Prisma Docs: https://www.prisma.io/docs
- NextAuth.js: https://authjs.dev
- Stripe Dashboard: https://dashboard.stripe.com

### Anexo B: Contactos Microsoft

- Microsoft Partner Network: https://partner.microsoft.com
- Azure Support: https://azure.microsoft.com/en-us/support
- Education Support: education@microsoft.com

### Anexo C: Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Prisma
npx prisma studio
npx prisma migrate dev
npx prisma generate

# Testing
npm run test
npm run test:e2e

# Deploy
vercel --prod
```

---

**¡La Universidad Autodesk está lista para revolucionar la educación en software de ingeniería y arquitectura!** 🚀
