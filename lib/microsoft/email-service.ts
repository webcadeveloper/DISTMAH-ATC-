import { MicrosoftGraphService } from './graph-services';

const INSTITUTIONAL_EMAIL = process.env.M365_INSTITUTIONAL_EMAIL || 'noreply@distmah-atc.com';

export class OutlookEmailService {
  static async sendWelcomeEmail(
    toEmail: string,
    userName: string,
    tempPassword: string
  ): Promise<void> {
    const body = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0078D4; margin: 0;">Bienvenido a DISTMAH ATC</h1>
            </div>

            <p style="font-size: 16px;">Hola <strong>${userName}</strong>,</p>

            <p style="font-size: 16px;">
              Tu cuenta de Microsoft 365 ha sido creada exitosamente.
              Ahora tienes acceso a todas las herramientas profesionales de Microsoft.
            </p>

            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #0078D4;">
              <h3 style="margin-top: 0; color: #333;">Credenciales de Acceso</h3>
              <p style="margin: 10px 0;"><strong>Usuario:</strong> ${toEmail}</p>
              <p style="margin: 10px 0;"><strong>Contraseña temporal:</strong> <code style="background: #fff; padding: 4px 8px; border-radius: 4px;">${tempPassword}</code></p>
              <p style="color: #d9534f; font-size: 14px; margin-top: 15px;">
                <strong>Importante:</strong> Debes cambiar tu contraseña en el primer inicio de sesión.
              </p>
            </div>

            <div style="margin: 30px 0;">
              <h3 style="color: #333;">Servicios Disponibles</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 10px 0;">
                  <a href="https://outlook.office.com" style="color: #0078D4; text-decoration: none; font-weight: 500;">
                    Outlook - Correo Electrónico
                  </a>
                </li>
                <li style="margin: 10px 0;">
                  <a href="https://onedrive.live.com" style="color: #0078D4; text-decoration: none; font-weight: 500;">
                    OneDrive - Almacenamiento en la Nube (1TB)
                  </a>
                </li>
                <li style="margin: 10px 0;">
                  <a href="https://teams.microsoft.com" style="color: #0078D4; text-decoration: none; font-weight: 500;">
                    Microsoft Teams - Clases en Vivo
                  </a>
                </li>
                <li style="margin: 10px 0;">
                  <a href="https://office.com" style="color: #0078D4; text-decoration: none; font-weight: 500;">
                    Office Online - Word, Excel, PowerPoint
                  </a>
                </li>
              </ul>
            </div>

            <div style="background: #e7f3ff; padding: 15px; border-radius: 8px; margin: 25px 0;">
              <p style="margin: 0; font-size: 14px;">
                <strong>Tip:</strong> Descarga la aplicación móvil de Microsoft Teams para participar en clases desde tu teléfono.
              </p>
            </div>

            <p style="font-size: 16px; margin-top: 30px;">
              Si tienes alguna duda, no dudes en contactarnos.
            </p>

            <p style="font-size: 16px;">
              Saludos,<br>
              <strong>Equipo DISTMAH ATC</strong>
            </p>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
              <p style="font-size: 12px; color: #666;">
                DISTMAH ATC - Authorized Training Center<br>
                Cursos Profesionales de Autodesk
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    await MicrosoftGraphService.sendEmail(INSTITUTIONAL_EMAIL, {
      to: [toEmail],
      subject: 'Bienvenido a DISTMAH ATC - Cuenta Microsoft 365',
      body,
      bodyType: 'html',
    });
  }

  static async sendClassInvitation(
    toEmail: string,
    className: string,
    startDate: Date,
    teamsLink: string,
    instructorName: string
  ): Promise<void> {
    const body = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0078D4; margin: 0;">Nueva Clase Programada</h1>
            </div>

            <div style="background: linear-gradient(135deg, #0078D4 0%, #005a9e 100%); color: white; padding: 25px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin: 0 0 15px 0;">${className}</h2>
              <p style="margin: 5px 0; font-size: 16px;">
                <strong>Fecha:</strong> ${startDate.toLocaleDateString('es-VE', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p style="margin: 5px 0; font-size: 16px;">
                <strong>Hora:</strong> ${startDate.toLocaleTimeString('es-VE', {
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: 'America/Caracas'
                })} (Hora de Venezuela)
              </p>
              <p style="margin: 5px 0; font-size: 16px;">
                <strong>Instructor:</strong> ${instructorName}
              </p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${teamsLink}"
                 style="display: inline-block; background: #0078D4; color: white; padding: 15px 40px;
                        text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                Unirse a la Clase
              </a>
            </div>

            <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 6px; margin: 25px 0;">
              <p style="margin: 0; font-size: 14px; color: #856404;">
                <strong>Recordatorio:</strong> Únete 5 minutos antes del inicio de la clase para verificar tu conexión.
              </p>
            </div>

            <div style="margin: 30px 0;">
              <h3 style="color: #333;">Requisitos Técnicos</h3>
              <ul style="color: #666; line-height: 1.8;">
                <li>Conexión estable a internet</li>
                <li>Microsoft Teams instalado o acceso vía navegador</li>
                <li>Micrófono y cámara (opcional pero recomendado)</li>
                <li>Tener el software Autodesk instalado si es sesión práctica</li>
              </ul>
            </div>

            <p style="font-size: 16px; margin-top: 30px;">
              Nos vemos en clase,<br>
              <strong>Equipo DISTMAH ATC</strong>
            </p>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
              <p style="font-size: 12px; color: #666;">
                DISTMAH ATC - Authorized Training Center<br>
                Si no puedes asistir, por favor notifica con anticipación
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    await MicrosoftGraphService.sendEmail(INSTITUTIONAL_EMAIL, {
      to: [toEmail],
      subject: `Clase: ${className} - ${startDate.toLocaleDateString('es-VE')}`,
      body,
      bodyType: 'html',
    });
  }

  static async sendBulkEmail(
    recipients: string[],
    subject: string,
    body: string
  ): Promise<void> {
    const batchSize = 50;

    for (let i = 0; i < recipients.length; i += batchSize) {
      const batch = recipients.slice(i, i + batchSize);

      await MicrosoftGraphService.sendEmail(INSTITUTIONAL_EMAIL, {
        to: batch,
        subject,
        body,
        bodyType: 'html',
      });

      if (i + batchSize < recipients.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  static async sendCourseCompletionEmail(
    toEmail: string,
    userName: string,
    courseName: string,
    completionDate: Date,
    certificateUrl?: string
  ): Promise<void> {
    const body = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #28a745; margin: 0;">¡Felicitaciones!</h1>
            </div>

            <p style="font-size: 16px;">Hola <strong>${userName}</strong>,</p>

            <p style="font-size: 16px;">
              Has completado exitosamente el curso:
            </p>

            <div style="background: linear-gradient(135deg, #28a745 0%, #20893a 100%); color: white; padding: 25px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h2 style="margin: 0;">${courseName}</h2>
              <p style="margin: 15px 0 0 0; font-size: 14px;">
                Fecha de Finalización: ${completionDate.toLocaleDateString('es-VE')}
              </p>
            </div>

            ${certificateUrl ? `
              <div style="text-align: center; margin: 30px 0;">
                <a href="${certificateUrl}"
                   style="display: inline-block; background: #0078D4; color: white; padding: 15px 40px;
                          text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                  Descargar Certificado
                </a>
              </div>
            ` : ''}

            <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #0078D4;">Próximos Pasos</h3>
              <ul style="color: #333; line-height: 1.8;">
                <li>Aplica lo aprendido en tus proyectos profesionales</li>
                <li>Explora nuestros cursos avanzados relacionados</li>
                <li>Únete a nuestra comunidad de profesionales certificados</li>
              </ul>
            </div>

            <p style="font-size: 16px; margin-top: 30px;">
              Gracias por confiar en DISTMAH ATC,<br>
              <strong>Equipo Académico</strong>
            </p>
          </div>
        </body>
      </html>
    `;

    await MicrosoftGraphService.sendEmail(INSTITUTIONAL_EMAIL, {
      to: [toEmail],
      subject: `¡Felicitaciones! Has completado: ${courseName}`,
      body,
      bodyType: 'html',
    });
  }

  static async sendPasswordResetEmail(
    toEmail: string,
    userName: string,
    resetLink: string
  ): Promise<void> {
    const body = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
            <h1 style="color: #0078D4;">Restablecer Contraseña</h1>

            <p style="font-size: 16px;">Hola <strong>${userName}</strong>,</p>

            <p style="font-size: 16px;">
              Recibimos una solicitud para restablecer tu contraseña de Microsoft 365.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetLink}"
                 style="display: inline-block; background: #0078D4; color: white; padding: 15px 40px;
                        text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                Restablecer Contraseña
              </a>
            </div>

            <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 6px; margin: 25px 0;">
              <p style="margin: 0; font-size: 14px; color: #856404;">
                <strong>Seguridad:</strong> Este enlace expira en 24 horas.
                Si no solicitaste este cambio, ignora este correo.
              </p>
            </div>

            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              Si tienes problemas con el botón, copia y pega este enlace en tu navegador:<br>
              <span style="word-break: break-all;">${resetLink}</span>
            </p>
          </div>
        </body>
      </html>
    `;

    await MicrosoftGraphService.sendEmail(INSTITUTIONAL_EMAIL, {
      to: [toEmail],
      subject: 'Restablecer Contraseña - DISTMAH ATC',
      body,
      bodyType: 'html',
    });
  }
}
