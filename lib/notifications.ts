import { prisma } from '@/lib/prisma';
import { NotificationType } from '@prisma/client';

interface CreateNotificationParams {
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
}

export async function createNotification({
  userId,
  type,
  title,
  message,
  link,
}: CreateNotificationParams) {
  try {
    return await prisma.notification.create({
      data: {
        userId,
        type,
        title,
        message,
        link,
      },
    });
  } catch (error) {
    console.error('Error creating notification:', error);
    return null;
  }
}

export async function notifyAssignmentCreated(
  userId: string,
  assignmentTitle: string,
  courseId: string
) {
  return await createNotification({
    userId,
    type: 'ASSIGNMENT_CREATED',
    title: 'Nueva Tarea Disponible',
    message: `Se ha creado una nueva tarea: "${assignmentTitle}"`,
    link: `/estudiante/mis-cursos/${courseId}/tareas`,
  });
}

export async function notifyAssignmentGraded(
  userId: string,
  assignmentTitle: string,
  score: number,
  maxScore: number
) {
  return await createNotification({
    userId,
    type: 'ASSIGNMENT_GRADED',
    title: 'Tarea Calificada',
    message: `Tu tarea "${assignmentTitle}" ha sido calificada. Puntuación: ${score}/${maxScore}`,
    link: '/estudiante/tareas',
  });
}

export async function notifyExamAvailable(
  userId: string,
  examTitle: string,
  courseId: string
) {
  return await createNotification({
    userId,
    type: 'EXAM_AVAILABLE',
    title: 'Examen Disponible',
    message: `El examen "${examTitle}" ya está disponible`,
    link: `/estudiante/mis-cursos/${courseId}/examenes`,
  });
}

export async function notifyExamGraded(
  userId: string,
  examTitle: string,
  score: number,
  maxScore: number,
  passed: boolean
) {
  return await createNotification({
    userId,
    type: 'EXAM_GRADED',
    title: passed ? '¡Examen Aprobado!' : 'Examen Calificado',
    message: `Tu examen "${examTitle}" ha sido calificado. Puntuación: ${score}/${maxScore} (${passed ? 'Aprobado' : 'No aprobado'})`,
    link: '/estudiante/examenes',
  });
}

export async function notifyCertificateIssued(
  userId: string,
  courseName: string,
  certificateNumber: string
) {
  return await createNotification({
    userId,
    type: 'CERTIFICATE_ISSUED',
    title: '¡Certificado Disponible!',
    message: `Tu certificado de "${courseName}" está listo para descargar (${certificateNumber})`,
    link: '/estudiante/certificados',
  });
}

export async function notifyCourseEnrollment(
  userId: string,
  courseName: string,
  courseId: string
) {
  return await createNotification({
    userId,
    type: 'COURSE_ENROLLMENT',
    title: 'Inscripción Exitosa',
    message: `Te has inscrito exitosamente en "${courseName}"`,
    link: `/estudiante/mis-cursos/${courseId}`,
  });
}

export async function notifyNewModuleAvailable(
  userId: string,
  moduleName: string,
  courseName: string,
  courseId: string
) {
  return await createNotification({
    userId,
    type: 'NEW_MODULE_AVAILABLE',
    title: 'Nuevo Módulo Disponible',
    message: `"${moduleName}" está ahora disponible en "${courseName}"`,
    link: `/estudiante/mis-cursos/${courseId}`,
  });
}

export async function notifyForumReply(
  userId: string,
  postTitle: string,
  replyAuthor: string,
  postId: string
) {
  return await createNotification({
    userId,
    type: 'FORUM_REPLY',
    title: 'Nueva Respuesta en el Foro',
    message: `${replyAuthor} ha respondido a tu publicación: "${postTitle}"`,
    link: `/foro/post/${postId}`,
  });
}

export async function notifySystemAnnouncement(
  userId: string,
  announcementTitle: string,
  announcementMessage: string,
  link?: string
) {
  return await createNotification({
    userId,
    type: 'SYSTEM_ANNOUNCEMENT',
    title: announcementTitle,
    message: announcementMessage,
    link,
  });
}

export async function notifyAllStudents(
  title: string,
  message: string,
  link?: string
) {
  try {
    const students = await prisma.user.findMany({
      where: { role: 'STUDENT' },
      select: { id: true },
    });

    const notifications = students.map(student =>
      createNotification({
        userId: student.id,
        type: 'SYSTEM_ANNOUNCEMENT',
        title,
        message,
        link,
      })
    );

    await Promise.all(notifications);
    return { success: true, count: students.length };
  } catch (error) {
    console.error('Error notifying all students:', error);
    return { success: false, count: 0 };
  }
}

export async function notifyEnrolledStudents(
  courseId: string,
  title: string,
  message: string,
  link?: string
) {
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: {
        courseId,
        status: 'ACTIVE',
      },
      select: { userId: true },
    });

    const notifications = enrollments.map(enrollment =>
      createNotification({
        userId: enrollment.userId,
        type: 'SYSTEM_ANNOUNCEMENT',
        title,
        message,
        link,
      })
    );

    await Promise.all(notifications);
    return { success: true, count: enrollments.length };
  } catch (error) {
    console.error('Error notifying enrolled students:', error);
    return { success: false, count: 0 };
  }
}
