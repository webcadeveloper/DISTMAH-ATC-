-- MIGRACIÓN MANUAL: OpenBadges Certificates
-- Este script actualiza la tabla certificates al nuevo formato OpenBadges
-- EJECUTAR MANUALMENTE después de hacer backup de la base de datos

-- Paso 1: Crear el nuevo enum CertificateStatus
CREATE TYPE "CertificateStatus" AS ENUM ('ACTIVE', 'REVOKED', 'EXPIRED');

-- Paso 2: Agregar nuevas columnas (sin eliminar las antiguas todavía)
ALTER TABLE "certificates" ADD COLUMN IF NOT EXISTS "folio" TEXT;
ALTER TABLE "certificates" ADD COLUMN IF NOT EXISTS "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "certificates" ADD COLUMN IF NOT EXISTS "expiresAt" TIMESTAMP(3);
ALTER TABLE "certificates" ADD COLUMN IF NOT EXISTS "status" "CertificateStatus" NOT NULL DEFAULT 'ACTIVE';
ALTER TABLE "certificates" ADD COLUMN IF NOT EXISTS "badgeJson" JSONB;
ALTER TABLE "certificates" ADD COLUMN IF NOT EXISTS "verificationUrl" TEXT;
ALTER TABLE "certificates" ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Paso 3: Copiar datos de columnas antiguas a nuevas (si existen)
-- Ejecutar el script TypeScript migrate-certificates.ts para generar folios y badgeJson

-- Paso 4: Crear índices
CREATE UNIQUE INDEX IF NOT EXISTS "certificates_folio_key" ON "certificates"("folio");
CREATE INDEX IF NOT EXISTS "certificates_folio_idx" ON "certificates"("folio");
CREATE INDEX IF NOT EXISTS "certificates_status_idx" ON "certificates"("status");

-- Paso 5: Después de verificar que la migración funcionó, eliminar columnas antiguas (OPCIONAL)
-- ALTER TABLE "certificates" DROP COLUMN IF EXISTS "certificateNumber";
-- ALTER TABLE "certificates" DROP COLUMN IF EXISTS "studentName";
-- ALTER TABLE "certificates" DROP COLUMN IF EXISTS "courseName";
-- ALTER TABLE "certificates" DROP COLUMN IF EXISTS "instructorName";
-- ALTER TABLE "certificates" DROP COLUMN IF EXISTS "completionDate";
-- ALTER TABLE "certificates" DROP COLUMN IF EXISTS "verificationCode";
-- ALTER TABLE "certificates" DROP COLUMN IF EXISTS "verified";

-- NOTA IMPORTANTE:
-- 1. NO ejecutar el Paso 5 hasta confirmar que todo funciona correctamente
-- 2. Hacer backup completo de la base de datos ANTES de ejecutar este script
-- 3. Ejecutar migrate-certificates.ts ANTES del Paso 5 para migrar los datos
