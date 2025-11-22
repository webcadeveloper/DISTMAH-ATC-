# Guía de Instalación y Configuración

## Requisitos Previos
- Node.js 18+
- npm o pnpm
- Git
- Cuenta de Microsoft Azure (para autenticación)
- Cuenta de Supabase (para base de datos)

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/universidad-autodesk.git
   cd universidad-autodesk
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Copia el archivo de ejemplo y renómbralo a `.env.local`:
   ```bash
   cp env.example .env.local
   ```
   Rellena las variables con tus credenciales reales.

4. **Base de Datos**
   Asegúrate de tener la URL de conexión a tu base de datos PostgreSQL en `.env.local`.
   Luego, sincroniza el esquema de Prisma:
   ```bash
   npx prisma db push
   ```

5. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

## Estructura del Proyecto
- `/app`: Rutas de la aplicación (Next.js App Router)
  - `(public)`: Páginas públicas (Landing, Catálogo)
  - `(dashboard-estudiante)`: Panel del estudiante
  - `(dashboard-instructor)`: Panel del instructor
  - `(dashboard-admin)`: Panel de administración
  - `(course-player)`: Reproductor de cursos
- `/components`: Componentes reutilizables (UI, CMS, Layouts)
- `/lib`: Utilidades y configuración
- `/prisma`: Esquema de base de datos

## Comandos Útiles
- `npm run dev`: Inicia servidor de desarrollo
- `npm run build`: Construye para producción
- `npx prisma studio`: Interfaz visual para la base de datos
