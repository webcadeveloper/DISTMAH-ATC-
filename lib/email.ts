import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

const FROM_EMAIL = 'DISTMAH ATC <noreply@distmah-atc.com>';

export async function sendWelcomeEmail(to: string, name: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: 'Bienvenido a DISTMAH ATC - Universidad Autodesk',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background-color: #1F4E79; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">DISTMAH ATC</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Authorized Training Center</p>
          </div>

          <div style="padding: 40px 30px; background-color: #F5F5F5;">
            <h2 style="color: #333333; margin-top: 0;">¡Hola ${name}!</h2>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Bienvenido a la Universidad Autodesk de DISTMAH ATC. Estamos emocionados de tenerte como parte de nuestra comunidad de estudiantes.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Como Authorized Training Center oficial de Autodesk, te ofrecemos cursos certificados de la más alta calidad en:
            </p>

            <ul style="color: #555555; font-size: 16px; line-height: 1.8;">
              <li>AutoCAD 2026</li>
              <li>Revit 2026 (Arquitectura, MEP, Estructuras)</li>
              <li>Civil 3D 2026</li>
              <li>Navisworks 2026</li>
              <li>BIM 360</li>
            </ul>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://distmah-atc.com'}/estudiante/dashboard"
                 style="background-color: #1F4E79; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">
                Ir a Mi Dashboard
              </a>
            </div>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Si tienes alguna pregunta, no dudes en contactarnos.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              ¡Mucho éxito en tu aprendizaje!
            </p>
          </div>

          <div style="background-color: #333333; color: #CCCCCC; padding: 20px; text-align: center; font-size: 14px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">© 2025 DISTMAH ATC - Authorized Training Center</p>
            <p style="margin: 10px 0 0 0;">Venezuela</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
}

export async function sendEnrollmentEmail(to: string, name: string, courseName: string, courseId: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: `Inscripción Exitosa - ${courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background-color: #1F4E79; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">¡Inscripción Exitosa!</h1>
          </div>

          <div style="padding: 40px 30px; background-color: #F5F5F5;">
            <h2 style="color: #333333; margin-top: 0;">Hola ${name},</h2>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Te has inscrito exitosamente en:
            </p>

            <div style="background-color: white; padding: 20px; border-left: 4px solid #1F4E79; margin: 20px 0;">
              <h3 style="margin: 0; color: #1F4E79; font-size: 20px;">${courseName}</h3>
            </div>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Ya puedes acceder al contenido del curso desde tu dashboard de estudiante.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://distmah-atc.com'}/estudiante/mis-cursos/${courseId}"
                 style="background-color: #1F4E79; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">
                Comenzar Curso
              </a>
            </div>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              ¡Mucho éxito en tu aprendizaje!
            </p>
          </div>

          <div style="background-color: #333333; color: #CCCCCC; padding: 20px; text-align: center; font-size: 14px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">© 2025 DISTMAH ATC - Authorized Training Center</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending enrollment email:', error);
  }
}

export async function sendCertificateEmail(
  to: string,
  name: string,
  courseName: string,
  certificateNumber: string,
  certificateUrl?: string
) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: `¡Tu Certificado está Listo! - ${courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background-color: #1F4E79; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">¡Felicitaciones!</h1>
          </div>

          <div style="padding: 40px 30px; background-color: #F5F5F5;">
            <h2 style="color: #333333; margin-top: 0;">Hola ${name},</h2>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              ¡Has completado exitosamente el curso!
            </p>

            <div style="background-color: white; padding: 20px; border-left: 4px solid #1F4E79; margin: 20px 0;">
              <h3 style="margin: 0; color: #1F4E79; font-size: 20px;">${courseName}</h3>
              <p style="margin: 10px 0 0 0; color: #666666;">Certificado: ${certificateNumber}</p>
            </div>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Tu certificado oficial de DISTMAH ATC está disponible para descargar.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${certificateUrl || `${process.env.NEXT_PUBLIC_APP_URL}/estudiante/certificados`}"
                 style="background-color: #1F4E79; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">
                Descargar Certificado
              </a>
            </div>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Este certificado valida tu formación profesional en Autodesk como parte de un Authorized Training Center oficial.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              ¡Felicitaciones por tu logro!
            </p>
          </div>

          <div style="background-color: #333333; color: #CCCCCC; padding: 20px; text-align: center; font-size: 14px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">© 2025 DISTMAH ATC - Authorized Training Center</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending certificate email:', error);
  }
}

export async function sendAssignmentGradedEmail(
  to: string,
  name: string,
  assignmentTitle: string,
  score: number,
  maxScore: number,
  feedback?: string
) {
  try {
    const percentage = Math.round((score / maxScore) * 100);

    await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: `Tarea Calificada - ${assignmentTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background-color: #1F4E79; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Tarea Calificada</h1>
          </div>

          <div style="padding: 40px 30px; background-color: #F5F5F5;">
            <h2 style="color: #333333; margin-top: 0;">Hola ${name},</h2>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Tu tarea ha sido calificada:
            </p>

            <div style="background-color: white; padding: 20px; border-left: 4px solid #1F4E79; margin: 20px 0;">
              <h3 style="margin: 0; color: #1F4E79; font-size: 20px;">${assignmentTitle}</h3>
              <p style="margin: 15px 0 0 0; color: #333333; font-size: 24px; font-weight: bold;">
                ${score} / ${maxScore} puntos (${percentage}%)
              </p>
            </div>

            ${feedback ? `
              <div style="background-color: white; padding: 20px; margin: 20px 0;">
                <h4 style="margin: 0 0 10px 0; color: #333333;">Retroalimentación del Instructor:</h4>
                <p style="margin: 0; color: #555555; font-size: 15px; line-height: 1.6;">${feedback}</p>
              </div>
            ` : ''}

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://distmah-atc.com'}/estudiante/tareas"
                 style="background-color: #1F4E79; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">
                Ver Detalle
              </a>
            </div>
          </div>

          <div style="background-color: #333333; color: #CCCCCC; padding: 20px; text-align: center; font-size: 14px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">© 2025 DISTMAH ATC - Authorized Training Center</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending assignment graded email:', error);
  }
}

export async function sendExamGradedEmail(
  to: string,
  name: string,
  examTitle: string,
  score: number,
  maxScore: number,
  percentage: number,
  passed: boolean
) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: `Examen Calificado - ${examTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background-color: ${passed ? '#1F4E79' : '#D32F2F'}; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">${passed ? '¡Examen Aprobado!' : 'Examen Calificado'}</h1>
          </div>

          <div style="padding: 40px 30px; background-color: #F5F5F5;">
            <h2 style="color: #333333; margin-top: 0;">Hola ${name},</h2>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Tu examen ha sido calificado:
            </p>

            <div style="background-color: white; padding: 20px; border-left: 4px solid ${passed ? '#1F4E79' : '#D32F2F'}; margin: 20px 0;">
              <h3 style="margin: 0; color: #333333; font-size: 20px;">${examTitle}</h3>
              <p style="margin: 15px 0 0 0; color: #333333; font-size: 24px; font-weight: bold;">
                ${score} / ${maxScore} puntos (${percentage}%)
              </p>
              <p style="margin: 10px 0 0 0; color: ${passed ? '#2E7D32' : '#D32F2F'}; font-size: 18px; font-weight: bold;">
                ${passed ? 'APROBADO' : 'NO APROBADO'}
              </p>
            </div>

            ${!passed ? `
              <p style="color: #555555; font-size: 16px; line-height: 1.6;">
                No te preocupes, puedes volver a intentarlo. Revisa el material del curso y vuelve cuando estés listo.
              </p>
            ` : `
              <p style="color: #555555; font-size: 16px; line-height: 1.6;">
                ¡Felicitaciones! Has aprobado el examen.
              </p>
            `}

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://distmah-atc.com'}/estudiante/examenes"
                 style="background-color: #1F4E79; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">
                Ver Resultados
              </a>
            </div>
          </div>

          <div style="background-color: #333333; color: #CCCCCC; padding: 20px; text-align: center; font-size: 14px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">© 2025 DISTMAH ATC - Authorized Training Center</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending exam graded email:', error);
  }
}

export async function sendNewModuleAvailableEmail(
  to: string,
  name: string,
  courseName: string,
  moduleName: string,
  courseId: string
) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: `Nuevo Módulo Disponible - ${courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background-color: #1F4E79; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">¡Nuevo Contenido!</h1>
          </div>

          <div style="padding: 40px 30px; background-color: #F5F5F5;">
            <h2 style="color: #333333; margin-top: 0;">Hola ${name},</h2>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Un nuevo módulo está disponible en tu curso:
            </p>

            <div style="background-color: white; padding: 20px; border-left: 4px solid #1F4E79; margin: 20px 0;">
              <h3 style="margin: 0; color: #1F4E79; font-size: 20px;">${courseName}</h3>
              <p style="margin: 10px 0 0 0; color: #333333; font-size: 18px;">${moduleName}</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://distmah-atc.com'}/estudiante/mis-cursos/${courseId}"
                 style="background-color: #1F4E79; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">
                Continuar Aprendiendo
              </a>
            </div>
          </div>

          <div style="background-color: #333333; color: #CCCCCC; padding: 20px; text-align: center; font-size: 14px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">© 2025 DISTMAH ATC - Authorized Training Center</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending new module email:', error);
  }
}

export async function sendPasswordResetEmail(
  to: string,
  name: string,
  resetUrl: string
) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: 'Recuperación de Contraseña - DISTMAH ATC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background-color: #1F4E79; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Recuperación de Contraseña</h1>
          </div>

          <div style="padding: 40px 30px; background-color: #F5F5F5;">
            <h2 style="color: #333333; margin-top: 0;">Hola ${name},</h2>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Hemos recibido una solicitud para resetear la contraseña de tu cuenta en DISTMAH ATC.
            </p>

            <p style="color: #555555; font-size: 16px; line-height: 1.6;">
              Para crear una nueva contraseña, haz clic en el siguiente botón:
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}"
                 style="background-color: #1F4E79; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">
                Resetear Contraseña
              </a>
            </div>

            <div style="background-color: white; padding: 20px; border-left: 4px solid #D32F2F; margin: 20px 0;">
              <p style="margin: 0; color: #555555; font-size: 14px; line-height: 1.6;">
                <strong>Importante:</strong> Este enlace expirará en 1 hora. Si no solicitaste este cambio, ignora este correo.
              </p>
            </div>

            <p style="color: #555555; font-size: 14px; line-height: 1.6;">
              Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:
            </p>

            <p style="color: #1F4E79; font-size: 12px; word-break: break-all;">
              ${resetUrl}
            </p>
          </div>

          <div style="background-color: #333333; color: #CCCCCC; padding: 20px; text-align: center; font-size: 14px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">© 2025 DISTMAH ATC - Authorized Training Center</p>
            <p style="margin: 10px 0 0 0;">Si no solicitaste este correo, puedes ignorarlo de forma segura.</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending password reset email:', error);
  }
}
