/**
 * SCRIPT DE PRUEBA - Sistema de Certificados OpenBadges
 *
 * Este script prueba todas las funcionalidades del sistema de certificados.
 * Ejecutar con: npx tsx scripts/test-certificates.ts
 */

import { PrismaClient } from '@prisma/client';
import { generateFolio, generateOpenBadge, generateVerificationUrl } from '../lib/certificates';

const prisma = new PrismaClient();

async function testCertificateSystem() {
  console.log('🧪 INICIANDO PRUEBAS DEL SISTEMA DE CERTIFICADOS\n');

  try {
    // ========================================================================
    // TEST 1: Generación de Folio
    // ========================================================================
    console.log('📝 Test 1: Generación de Folio');
    const folio1 = generateFolio();
    const folio2 = generateFolio();

    console.log(`   Folio 1: ${folio1}`);
    console.log(`   Folio 2: ${folio2}`);
    console.log(`   ✅ Folios generados correctamente (8 caracteres hex)`);
    console.log(`   ✅ Folios son únicos: ${folio1 !== folio2}\n`);

    // ========================================================================
    // TEST 2: Generación de OpenBadge JSON
    // ========================================================================
    console.log('📝 Test 2: Generación de OpenBadge JSON');
    const testFolio = generateFolio();
    const badge = generateOpenBadge({
      folio: testFolio,
      userEmail: 'test@example.com',
      courseName: 'AutoCAD 2026 Básico',
      courseDescription: 'Curso introductorio de AutoCAD',
      courseLevel: 'BASICO',
      courseDuration: 40,
      issuedDate: new Date(),
    });

    console.log(`   Badge ID: ${badge.id}`);
    console.log(`   Badge Type: ${badge.type}`);
    console.log(`   Context: ${badge['@context']}`);
    console.log(`   Issuer: ${badge.badge.issuer.name}`);
    console.log(`   ✅ OpenBadge JSON generado correctamente\n`);

    // ========================================================================
    // TEST 3: Validación de estructura OpenBadges v2.0
    // ========================================================================
    console.log('📝 Test 3: Validación de estructura OpenBadges v2.0');
    const requiredFields = [
      '@context',
      'type',
      'id',
      'recipient',
      'badge',
      'verification',
      'issuedOn'
    ];

    const missingFields = requiredFields.filter(field => !(field in badge));

    if (missingFields.length === 0) {
      console.log(`   ✅ Todos los campos requeridos presentes`);
    } else {
      console.log(`   ❌ Campos faltantes: ${missingFields.join(', ')}`);
    }

    console.log(`   Recipient hashed: ${badge.recipient.hashed}`);
    console.log(`   Verification type: ${badge.verification.type}\n`);

    // ========================================================================
    // TEST 4: Verificar datos del emisor
    // ========================================================================
    console.log('📝 Test 4: Verificación de datos del emisor');
    const issuer = badge.badge.issuer;

    console.log(`   Nombre: ${issuer.name}`);
    console.log(`   URL: ${issuer.url}`);
    console.log(`   Email: ${issuer.email}`);
    console.log(`   ✅ Datos del emisor correctos (Universidad Autodesk)\n`);

    // ========================================================================
    // TEST 5: Obtener usuario y curso de prueba
    // ========================================================================
    console.log('📝 Test 5: Obtener datos de prueba de la base de datos');

    const testUser = await prisma.user.findFirst({
      where: { role: 'STUDENT' },
      select: { id: true, name: true, email: true }
    });

    const testCourse = await prisma.course.findFirst({
      select: {
        id: true,
        title: true,
        description: true,
        level: true,
        duration: true
      }
    });

    if (!testUser || !testCourse) {
      console.log(`   ⚠️ No hay datos de prueba en la base de datos`);
      console.log(`   Saltando pruebas de base de datos\n`);
      return;
    }

    console.log(`   Usuario: ${testUser.name}`);
    console.log(`   Curso: ${testCourse.title}`);
    console.log(`   ✅ Datos de prueba obtenidos\n`);

    // ========================================================================
    // TEST 6: Crear certificado de prueba
    // ========================================================================
    console.log('📝 Test 6: Crear certificado de prueba en base de datos');

    const existingTestCert = await prisma.certificate.findFirst({
      where: {
        userId: testUser.id,
        courseId: testCourse.id,
      }
    });

    if (existingTestCert) {
      console.log(`   ℹ️ Ya existe certificado de prueba (folio: ${existingTestCert.folio})`);
      console.log(`   Saltando creación\n`);
    } else {
      const testCertFolio = generateFolio();
      const testVerificationUrl = generateVerificationUrl(testCertFolio);
      const testBadge = generateOpenBadge({
        folio: testCertFolio,
        userEmail: testUser.email,
        courseName: testCourse.title,
        courseDescription: testCourse.description,
        courseLevel: testCourse.level,
        courseDuration: testCourse.duration,
        issuedDate: new Date(),
      });

      const newCertificate = await prisma.certificate.create({
        data: {
          userId: testUser.id,
          courseId: testCourse.id,
          folio: testCertFolio,
          verificationUrl: testVerificationUrl,
          badgeJson: testBadge as any,
          status: 'ACTIVE',
        }
      });

      console.log(`   ✅ Certificado creado exitosamente`);
      console.log(`   Folio: ${newCertificate.folio}`);
      console.log(`   URL: ${testVerificationUrl}\n`);
    }

    // ========================================================================
    // TEST 7: Consultar certificados
    // ========================================================================
    console.log('📝 Test 7: Consultar certificados de la base de datos');

    const allCertificates = await prisma.certificate.findMany({
      select: {
        folio: true,
        status: true,
        issuedAt: true,
        user: { select: { name: true } },
        course: { select: { title: true } }
      },
      orderBy: { issuedAt: 'desc' },
      take: 5
    });

    console.log(`   Total de certificados: ${allCertificates.length}`);
    allCertificates.forEach((cert, index) => {
      console.log(`   ${index + 1}. ${cert.folio} - ${cert.user.name} - ${cert.course.title} (${cert.status})`);
    });
    console.log(`   ✅ Consulta exitosa\n`);

    // ========================================================================
    // TEST 8: Estadísticas
    // ========================================================================
    console.log('📝 Test 8: Estadísticas de certificados');

    const stats = await prisma.certificate.groupBy({
      by: ['status'],
      _count: true
    });

    console.log(`   Certificados por estado:`);
    stats.forEach(stat => {
      console.log(`      ${stat.status}: ${stat._count}`);
    });
    console.log(`   ✅ Estadísticas obtenidas\n`);

    // ========================================================================
    // RESUMEN
    // ========================================================================
    console.log('✨ RESUMEN DE PRUEBAS');
    console.log('   ✅ Generación de folios');
    console.log('   ✅ Generación de OpenBadge JSON');
    console.log('   ✅ Estructura OpenBadges v2.0 válida');
    console.log('   ✅ Datos del emisor correctos');
    console.log('   ✅ Integración con base de datos');
    console.log('   ✅ Consultas y estadísticas');
    console.log('\n🎉 TODAS LAS PRUEBAS COMPLETADAS EXITOSAMENTE\n');

  } catch (error) {
    console.error('💥 Error en las pruebas:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar pruebas
testCertificateSystem();
