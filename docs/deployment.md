# Guía de Despliegue (Deployment)

## Requisitos de Producción
- **Vercel**: Plataforma recomendada para Next.js.
- **Supabase**: Base de datos PostgreSQL gestionada.
- **Azure AD**: Aplicación registrada en Azure Portal para autenticación.
- **Microsoft 365**: Licencia educativa para almacenamiento (OneDrive/Stream).

## Pasos para Desplegar en Vercel

1. **Conectar Repositorio**
   - Importar el repositorio de GitHub en Vercel.

2. **Configurar Variables de Entorno**
   En la configuración del proyecto en Vercel, añadir las siguientes variables (copiar valores de producción):
   - `DATABASE_URL`
   - `NEXTAUTH_URL` (URL de producción, ej: `https://universidad-autodesk.vercel.app`)
   - `NEXTAUTH_SECRET`
   - `AZURE_AD_CLIENT_ID`
   - `AZURE_AD_CLIENT_SECRET`
   - `AZURE_AD_TENANT_ID`

3. **Build & Deploy**
   Vercel detectará automáticamente Next.js y ejecutará:
   - `npm install`
   - `npx prisma generate`
   - `npm run build`

4. **Base de Datos (Producción)**
   Asegúrate de aplicar las migraciones a la base de datos de producción:
   ```bash
   npx prisma migrate deploy
   ```

## Verificación Post-Despliegue
- [ ] Verificar inicio de sesión con Azure AD.
- [ ] Verificar conexión a base de datos (listar cursos).
- [ ] Probar subida de archivos (si está configurado).
- [ ] Verificar envío de correos.

## Monitoreo
- Usar **Vercel Analytics** para métricas de rendimiento.
- Usar **Sentry** (opcional) para rastreo de errores.
