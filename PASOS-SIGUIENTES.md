# 🎯 PASOS SIGUIENTES - DISTMAH ATC

## ✅ LO QUE YA ESTÁ HECHO

- ✅ Páginas de Login, Registro, 404 creadas
- ✅ Dashboard de Admin completo
- ✅ Dashboard de Estudiante completo
- ✅ Dashboard de Instructor mejorado
- ✅ Sistema de Checkout con Stripe
- ✅ Editor de lecciones con imágenes y videos (SharePoint URLs)
- ✅ Prisma configurado con schema completo
- ✅ `lib/prisma.ts` creado
- ✅ Script de migración `scripts/migrate-courses.ts`
- ✅ `.env.example` actualizado

---

## 🚀 PRÓXIMOS PASOS (HACER EN ORDEN)

### PASO 1: Crear Cuenta en Neon (5 minutos)

1. Abre tu navegador y ve a: **https://neon.tech**
2. Click en **"Sign Up"**
3. Elige **"Continue with GitHub"** (más fácil)
4. Autoriza Neon en tu cuenta de GitHub

**✅ Resultado**: Tendrás acceso al dashboard de Neon.

---

### PASO 2: Crear Proyecto de Base de Datos (3 minutos)

1. En el dashboard de Neon, click **"Create a project"**
2. Configuración:
   - **Project Name**: `distmah-atc`
   - **PostgreSQL Version**: `16` (la más reciente)
   - **Region**: Elige el más cercano:
     - Si estás en Venezuela/Colombia: `US East (Ohio)`
     - Si estás en Europa: `Europe (Frankfurt)`
3. Click **"Create Project"**

**⏱️ Espera**: 30-60 segundos mientras se crea la base de datos.

---

### PASO 3: Copiar Connection String (1 minuto)

Después de crear el proyecto, verás algo como:

```
Connection Details
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Connection string (Prisma):
postgresql://username:password@ep-xxx-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
```

**🔴 MUY IMPORTANTE**:
1. Click en **"Copy"** para copiar el connection string completo
2. Guárdalo en un lugar seguro (Notepad, archivo temporal)

---

### PASO 4: Configurar `.env` en tu Proyecto (2 minutos)

1. Abre tu proyecto `DISTMAH-ATC-` en VSCode
2. En la raíz del proyecto, busca el archivo `.env`
3. Si no existe, créalo copiando `.env.example`:
   ```bash
   copy .env.example .env
   ```
4. Abre `.env` y busca la línea:
   ```env
   DATABASE_URL="postgresql://username:password@..."
   ```
5. **REEMPLAZA** esa línea con el connection string que copiaste de Neon:
   ```env
   DATABASE_URL="postgresql://tu_user:tu_pass@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require"
   ```
6. **Guarda** el archivo `.env`

**⚠️ IMPORTANTE**: NO subas `.env` a GitHub. Ya está en `.gitignore`.

---

### PASO 5: Instalar Dependencias (si no están instaladas) (1 minuto)

Abre terminal en tu proyecto y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias, incluyendo Prisma.

---

### PASO 6: Generar Prisma Client (30 segundos)

En la terminal:

```bash
npx prisma generate
```

**Resultado**: Se creará el Prisma Client que usarás en tu código.

---

### PASO 7: Ejecutar Migraciones (Crear Tablas) (1 minuto)

En la terminal:

```bash
npx prisma migrate deploy
```

Si esto falla porque no hay migraciones, ejecuta:

```bash
npx prisma db push
```

**✅ Resultado**: Se crearán todas las tablas en tu base de datos Neon:
- users
- courses
- modules
- lessons
- enrollments
- certificates
- forum_posts
- etc.

---

### PASO 8: Verificar Base de Datos (Opcional) (1 minuto)

Para ver tus tablas en una interfaz visual:

```bash
npx prisma studio
```

Esto abrirá **Prisma Studio** en `http://localhost:5555` donde podrás ver y editar datos.

**✅ Deberías ver**: Todas las tablas vacías listas para usar.

---

### PASO 9: Migrar Cursos Existentes a PostgreSQL (2 minutos)

Este paso transferirá todos tus cursos desde archivos `curso.json` y Markdown a la base de datos:

```bash
npx tsx scripts/migrate-courses.ts
```

**📊 Resultado esperado**:
```
🚀 Iniciando migración de cursos a Neon PostgreSQL...

📝 Creando instructor de ejemplo...
✅ Instructor creado: Instructor DISTMAH (instructor@distmah.com)

📁 Se encontraron 16 carpetas de cursos

📚 Procesando: autocad-2026-basico...
  ✅ Curso creado: AutoCAD 2026 - Curso Básico Completo
    ✅ Módulo 1: Introducción a AutoCAD 2026 (5 lecciones)
    ✅ Módulo 2: Dibujo 2D Básico (5 lecciones)
    ...

============================================================
🎉 MIGRACIÓN COMPLETADA
============================================================
✅ Cursos creados: 16
✅ Módulos creados: 96
✅ Lecciones creadas: 480
============================================================
```

---

### PASO 10: Verificar Migración (1 minuto)

Abre Prisma Studio de nuevo:

```bash
npx prisma studio
```

Verifica que:
- ✅ Tabla `courses` tiene 16 cursos
- ✅ Tabla `modules` tiene ~96 módulos
- ✅ Tabla `lessons` tiene ~480 lecciones
- ✅ Cada lección tiene su contenido en `richText`

---

### PASO 11: Iniciar Aplicación (30 segundos)

```bash
npm run dev
```

Abre: **http://localhost:3000**

---

## 🎨 PÁGINAS DISPONIBLES

Ahora puedes visitar:

### Páginas Públicas:
- **http://localhost:3000** - Homepage
- **http://localhost:3000/cursos** - Catálogo de cursos
- **http://localhost:3000/login** - Login
- **http://localhost:3000/registro** - Registro
- **http://localhost:3000/cualquier-cosa** - 404 page

### Dashboards:
- **http://localhost:3000/admin/dashboard** - Dashboard Admin
- **http://localhost:3000/instructor/dashboard** - Dashboard Instructor
- **http://localhost:3000/estudiante/dashboard** - Dashboard Estudiante

### Checkout:
- **http://localhost:3000/checkout/autocad-2026-basico** - Checkout de ejemplo

---

## 🔧 CONFIGURACIONES PENDIENTES (No urgentes)

### 1. NextAuth (Autenticación) - Cuando lo necesites

Genera un secret:
```bash
openssl rand -base64 32
```

Agrégalo a `.env`:
```env
NEXTAUTH_SECRET="el-secret-generado-aqui"
```

### 2. Azure AD (Microsoft 365) - Cuando DISTMAH obtenga licencia Education A1

1. Ve a: https://portal.azure.com
2. App Registrations → New Registration
3. Copia: Client ID, Client Secret, Tenant ID
4. Agrégalos a `.env`:
   ```env
   AZURE_AD_CLIENT_ID="xxx"
   AZURE_AD_CLIENT_SECRET="xxx"
   AZURE_AD_TENANT_ID="xxx"
   ```

### 3. Stripe (Ya está configurado en `.env.example`)

Si necesitas cambiar las keys de test/live, actualiza:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
```

---

## 📊 MONITOREO DE NEON

### Dashboard de Neon

Ve a: **https://console.neon.tech**

Aquí puedes ver:
- 💾 **Storage usado**: Deberías estar en ~50-100 MB de 500 MB (10-20%)
- 📊 **Data Transfer**: Tráfico de datos
- ⚡ **Compute**: Horas de uso
- 🔄 **Queries**: Queries por segundo

### Límites del Plan Free:

| Recurso | Límite | Tu uso estimado |
|---------|--------|-----------------|
| Storage | 500 MB | ~100 MB (20%) |
| Data Transfer | 5 GB/month | ~500 MB/month (10%) |
| Compute | 191.9 hours/month | Variable |

**Conclusión**: El plan Free es suficiente para 6-12 meses de operación.

---

## 🔄 WORKFLOW DE DESARROLLO

### Hacer cambios en el Schema

1. Edita `prisma/schema.prisma`
2. Ejecuta:
   ```bash
   npx prisma db push
   ```
3. Genera cliente:
   ```bash
   npx prisma generate
   ```

### Ver datos en la base de datos

```bash
npx prisma studio
```

### Backup de Base de Datos (importante)

Neon hace backups automáticos, pero puedes exportar manualmente:

```bash
npx prisma db pull
```

Esto actualiza tu `schema.prisma` con el estado actual de la base de datos.

---

## 🆘 TROUBLESHOOTING

### Error: "Can't reach database server"

**Solución**: Verifica que `DATABASE_URL` en `.env` sea correcto y tenga `?sslmode=require` al final.

### Error: "Prisma Client is not generated"

**Solución**:
```bash
npx prisma generate
```

### Error: "Migration failed"

**Solución**: Usa `db push` en vez de `migrate`:
```bash
npx prisma db push
```

### Los cursos no aparecen después de migrar

**Solución**: Verifica en Prisma Studio que los cursos se crearon:
```bash
npx prisma studio
```

---

## 📝 CHECKLIST FINAL

Antes de ir a producción, verifica:

- [ ] `.env` configurado con DATABASE_URL de Neon
- [ ] Migraciones aplicadas (`npx prisma db push`)
- [ ] Cursos migrados (`npx tsx scripts/migrate-courses.ts`)
- [ ] Aplicación corre sin errores (`npm run dev`)
- [ ] Login/Registro funcionan
- [ ] Dashboards cargan correctamente
- [ ] Stripe configurado (test mode funciona)
- [ ] `.env` está en `.gitignore` (no se sube a GitHub)

---

## 🚀 DEPLOYMENT (Cuando estés listo)

### Opción 1: Vercel (Recomendado para Next.js)

1. Conecta tu repo de GitHub a Vercel
2. En Vercel, agrega las variables de entorno (`.env`)
3. Deploy automático en cada push a `main`

### Opción 2: Railway

1. Conecta tu repo
2. Agrega variables de entorno
3. Deploy

### Opción 3: AWS/DigitalOcean

Más complejo, pero tienes control total.

---

## 📞 SOPORTE

- **Neon Docs**: https://neon.tech/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Next.js Docs**: https://nextjs.org/docs

---

## 🎉 ¡FELICIDADES!

Ahora tienes:
- ✅ Base de datos PostgreSQL en la nube (Neon)
- ✅ 16 cursos migrados
- ✅ Sistema completo de dashboards
- ✅ Login y Registro
- ✅ Sistema de Checkout con Stripe
- ✅ Editor de lecciones con multimedia

**DISTMAH ATC está listo para producción.** 🚀

---

**Última actualización**: Noviembre 24, 2025
