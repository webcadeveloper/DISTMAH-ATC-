import { PrismaClient } from '@prisma/client';
import { generateFolio, generateOpenBadge, generateVerificationUrl } from '../lib/certificates';

const prisma = new PrismaClient();

async function migrateCertificates() {
  console.log('🚀 Iniciando migración de certificados a OpenBadges...\n');

  try {
    const oldCertificates = await prisma.$queryRaw<any[]>`
      SELECT * FROM certificates
      WHERE folio IS NULL OR "badgeJson" IS NULL
    `;

    console.log(`📋 Encontrados ${oldCertificates.length} certificados para migrar\n`);

    let migrated = 0;
    let errors = 0;

    for (const cert of oldCertificates) {
      try {
        console.log(`Migrando certificado ID: ${cert.id}...`);

        const user = await prisma.user.findUnique({
          where: { id: cert.userId },
          select: { email: true },
        });

        const course = await prisma.course.findUnique({
          where: { id: cert.courseId },
          select: {
            title: true,
            description: true,
            level: true,
            duration: true,
          },
        });

        if (!user || !course) {
          console.log(`❌ Usuario o curso no encontrado para certificado ${cert.id}`);
          errors++;
          continue;
        }

        let folio = generateFolio();
        let folioExists = await prisma.certificate.findUnique({ where: { folio } });

        while (folioExists) {
          folio = generateFolio();
          folioExists = await prisma.certificate.findUnique({ where: { folio } });
        }

        const verificationUrl = generateVerificationUrl(folio);

        const openBadge = generateOpenBadge({
          folio,
          userEmail: user.email,
          courseName: course.title,
          courseDescription: course.description,
          courseLevel: course.level,
          courseDuration: course.duration,
          issuedDate: cert.completionDate || cert.createdAt,
        });

        await prisma.certificate.update({
          where: { id: cert.id },
          data: {
            folio,
            verificationUrl,
            badgeJson: openBadge as any,
            status: 'ACTIVE',
            issuedAt: cert.completionDate || cert.createdAt,
          },
        });

        console.log(`✅ Migrado: ${folio} - ${course.title}`);
        migrated++;
      } catch (error) {
        console.error(`❌ Error migrando certificado ${cert.id}:`, error);
        errors++;
      }
    }

    console.log(`\n✨ Migración completada:`);
    console.log(`   ✅ Exitosos: ${migrated}`);
    console.log(`   ❌ Errores: ${errors}`);
  } catch (error) {
    console.error('💥 Error en migración:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

migrateCertificates();
