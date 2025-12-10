import crypto from 'crypto';
import type { OpenBadge, OpenBadgeClass, OpenBadgeRecipient } from '@/types/openbadges';
import { UNIVERSIDAD_AUTODESK_ISSUER } from '@/types/openbadges';
import { prisma } from '@/lib/prisma';

export function generateFolio(): string {
  return crypto.randomBytes(4).toString('hex').toUpperCase();
}

export function hashEmail(email: string): string {
  return crypto.createHash('sha256').update(email.toLowerCase()).digest('hex');
}

export function generateVerificationUrl(folio: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://edu.distmah.com';
  return `${baseUrl}/api/certificates/verify/${folio}`;  // El endpoint usa [code] pero funciona con folio
}

export function generateOpenBadge({
  folio,
  userEmail,
  courseName,
  courseDescription,
  courseLevel,
  courseDuration,
  issuedDate,
  expiresDate,
}: {
  folio: string;
  userEmail: string;
  courseName: string;
  courseDescription: string;
  courseLevel: string;
  courseDuration: number;
  issuedDate: Date;
  expiresDate?: Date;
}): OpenBadge {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://edu.distmah.com';
  const verificationUrl = generateVerificationUrl(folio);

  const recipient: OpenBadgeRecipient = {
    type: 'email',
    hashed: true,
    identity: `sha256$${hashEmail(userEmail)}`,
  };

  const badgeClass: OpenBadgeClass = {
    id: `${baseUrl}/badges/${courseName.toLowerCase().replace(/\s+/g, '-')}`,
    type: 'BadgeClass',
    name: courseName,
    description: courseDescription,
    image: {
      id: `${baseUrl}/badges/images/${courseName.toLowerCase().replace(/\s+/g, '-')}.png`,
      type: 'Image',
      caption: `Certificado de ${courseName}`,
    },
    criteria: {
      narrative: `Completar exitosamente el curso ${courseName} de nivel ${courseLevel} con una duración de ${courseDuration} horas, cumpliendo con todos los objetivos de aprendizaje, ejercicios prácticos y evaluaciones establecidas por la Universidad Autodesk.`,
    },
    issuer: UNIVERSIDAD_AUTODESK_ISSUER,
  };

  const badge: OpenBadge = {
    '@context': 'https://w3id.org/openbadges/v2',
    type: 'Assertion',
    id: verificationUrl,
    recipient,
    badge: badgeClass,
    verification: {
      type: 'hosted',
    },
    issuedOn: issuedDate.toISOString(),
  };

  if (expiresDate) {
    badge.expires = expiresDate.toISOString();
  }

  return badge;
}

// ===== FUNCIONES DE GESTIÓN DE CERTIFICADOS =====

export async function checkAndCreateCertificate(userId: string, courseId: string): Promise<{
  created: boolean;
  certificate?: any;
  error?: string;
}> {
  try {
    // Verificar si ya existe un certificado para este usuario y curso
    const existingCertificate = await prisma.certificate.findFirst({
      where: { userId, courseId },
    });

    if (existingCertificate) {
      return { created: false, certificate: existingCertificate };
    }

    // Obtener el enrollment
    const enrollment = await prisma.enrollment.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });

    if (!enrollment) {
      return { created: false, error: 'No enrollment found' };
    }

    // Calcular progreso real
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        modules: {
          include: {
            lessons: true,
          },
        },
      },
    });

    if (!course) {
      return { created: false, error: 'Course not found' };
    }

    const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);

    const completedLessons = await prisma.lessonProgress.count({
      where: {
        lessonId: {
          in: course.modules.flatMap(m => m.lessons.map(l => l.id)),
        },
        userId,
        completed: true,
      },
    });

    const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    // Solo crear certificado si progreso es 100%
    if (progressPercent < 100) {
      return { created: false, error: `Progress is ${progressPercent}%, need 100%` };
    }

    // Generar folio único
    let folio = generateFolio();
    let folioExists = await prisma.certificate.findUnique({ where: { folio } });
    while (folioExists) {
      folio = generateFolio();
      folioExists = await prisma.certificate.findUnique({ where: { folio } });
    }

    const verificationUrl = generateVerificationUrl(folio);

    // Crear certificado en estado PENDING_APPROVAL
    const certificate = await prisma.certificate.create({
      data: {
        userId,
        courseId,
        folio,
        status: 'PENDING_APPROVAL',
        verificationUrl,
      },
    });

    return { created: true, certificate };
  } catch (error) {
    console.error('Error creating certificate:', error);
    return { created: false, error: 'Internal error' };
  }
}

export async function approveCertificate(
  certificateId: string,
  approvedById: string
): Promise<{ success: boolean; certificate?: any; error?: string }> {
  try {
    const certificate = await prisma.certificate.findUnique({
      where: { id: certificateId },
      include: {
        user: true,
        course: true,
      },
    });

    if (!certificate) {
      return { success: false, error: 'Certificate not found' };
    }

    if (certificate.status !== 'PENDING_APPROVAL') {
      return { success: false, error: `Certificate status is ${certificate.status}, cannot approve` };
    }

    // Generar OpenBadge JSON
    const badgeJson = generateOpenBadge({
      folio: certificate.folio,
      userEmail: certificate.user.email,
      courseName: certificate.course.title,
      courseDescription: certificate.course.description,
      courseLevel: certificate.course.level,
      courseDuration: certificate.course.duration,
      issuedDate: new Date(),
    });

    // Actualizar certificado
    const updatedCertificate = await prisma.certificate.update({
      where: { id: certificateId },
      data: {
        status: 'ACTIVE',
        approvedById,
        approvedAt: new Date(),
        badgeJson: badgeJson as any,
        issuedAt: new Date(),
      },
      include: {
        user: true,
        course: true,
      },
    });

    return { success: true, certificate: updatedCertificate };
  } catch (error) {
    console.error('Error approving certificate:', error);
    return { success: false, error: 'Internal error' };
  }
}

export async function rejectCertificate(
  certificateId: string,
  rejectedById: string,
  reason: string
): Promise<{ success: boolean; certificate?: any; error?: string }> {
  try {
    const certificate = await prisma.certificate.findUnique({
      where: { id: certificateId },
    });

    if (!certificate) {
      return { success: false, error: 'Certificate not found' };
    }

    if (certificate.status !== 'PENDING_APPROVAL') {
      return { success: false, error: `Certificate status is ${certificate.status}, cannot reject` };
    }

    const updatedCertificate = await prisma.certificate.update({
      where: { id: certificateId },
      data: {
        status: 'REJECTED',
        approvedById: rejectedById,
        rejectedAt: new Date(),
        rejectionReason: reason,
      },
      include: {
        user: true,
        course: true,
      },
    });

    return { success: true, certificate: updatedCertificate };
  } catch (error) {
    console.error('Error rejecting certificate:', error);
    return { success: false, error: 'Internal error' };
  }
}

export async function revokeCertificate(
  certificateId: string,
  reason: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const certificate = await prisma.certificate.findUnique({
      where: { id: certificateId },
    });

    if (!certificate) {
      return { success: false, error: 'Certificate not found' };
    }

    if (certificate.status !== 'ACTIVE') {
      return { success: false, error: `Certificate status is ${certificate.status}, cannot revoke` };
    }

    await prisma.certificate.update({
      where: { id: certificateId },
      data: {
        status: 'REVOKED',
        rejectionReason: reason,
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error revoking certificate:', error);
    return { success: false, error: 'Internal error' };
  }
}

export async function getPendingCertificatesForInstructor(instructorId: string) {
  return prisma.certificate.findMany({
    where: {
      status: 'PENDING_APPROVAL',
      course: {
        instructorId,
      },
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
        },
      },
      course: {
        select: {
          id: true,
          title: true,
          slug: true,
          category: true,
        },
      },
    },
    orderBy: {
      createdAt: 'asc',
    },
  });
}

export async function getCertificateStats(instructorId?: string) {
  const where = instructorId ? { course: { instructorId } } : {};

  const [pending, approved, rejected, revoked] = await Promise.all([
    prisma.certificate.count({ where: { ...where, status: 'PENDING_APPROVAL' } }),
    prisma.certificate.count({ where: { ...where, status: 'ACTIVE' } }),
    prisma.certificate.count({ where: { ...where, status: 'REJECTED' } }),
    prisma.certificate.count({ where: { ...where, status: 'REVOKED' } }),
  ]);

  return { pending, approved, rejected, revoked, total: pending + approved + rejected + revoked };
}
