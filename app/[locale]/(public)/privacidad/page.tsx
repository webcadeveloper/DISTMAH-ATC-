import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | DISTMAH ATC',
  description: 'Política de privacidad y protección de datos de DISTMAH ATC - Información sobre cómo recopilamos, usamos y protegemos sus datos personales',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-gray-600 mb-6">
            Última actualización: 24 de noviembre de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
            <p>
              DISTMAH ATC ("nosotros", "nuestro" o "la Plataforma") se compromete a proteger
              la privacidad y seguridad de la información personal de nuestros usuarios.
              Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y
              protegemos su información personal cuando utiliza nuestra plataforma de cursos
              en línea.
            </p>
            <p className="mt-4">
              Al usar la Plataforma, usted acepta las prácticas descritas en esta política.
              Si no está de acuerdo, por favor no utilice nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">2.1 Información Proporcionada Directamente</h3>
            <p>
              Recopilamos información que usted nos proporciona directamente al:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Crear una cuenta:</strong> Nombre completo, dirección de correo
                electrónico, contraseña (encriptada), país, fotografía de perfil (opcional)
              </li>
              <li>
                <strong>Realizar un pago:</strong> Información de facturación (procesada
                de forma segura por Stripe - no almacenamos datos de tarjetas)
              </li>
              <li>
                <strong>Completar cursos:</strong> Respuestas a ejercicios, evaluaciones,
                proyectos, progreso del curso
              </li>
              <li>
                <strong>Participar en foros:</strong> Comentarios, preguntas, respuestas
              </li>
              <li>
                <strong>Contactarnos:</strong> Mensajes de soporte, consultas, feedback
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">2.2 Información Recopilada Automáticamente</h3>
            <p>
              Cuando utiliza la Plataforma, recopilamos automáticamente:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Datos de uso:</strong> Páginas visitadas, tiempo en cada lección,
                videos visualizados, clics, interacciones
              </li>
              <li>
                <strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, sistema
                operativo, dispositivo, resolución de pantalla
              </li>
              <li>
                <strong>Cookies:</strong> Identificadores únicos para mantener su sesión
                activa y mejorar la experiencia (ver Política de Cookies)
              </li>
              <li>
                <strong>Datos de rendimiento:</strong> Velocidad de carga, errores,
                estadísticas de uso
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">2.3 Información de Terceros</h3>
            <p>
              Podemos recibir información de servicios de terceros:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Stripe:</strong> Confirmaciones de pago, estado de transacciones
              </li>
              <li>
                <strong>Google Analytics:</strong> Estadísticas agregadas de uso
                (anonimizadas)
              </li>
              <li>
                <strong>Autodesk:</strong> Verificación de licencias de software (si aplica)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Usamos su Información</h2>
            <p>
              Utilizamos la información recopilada para los siguientes propósitos:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">3.1 Provisión de Servicios</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Crear y gestionar su cuenta de usuario</li>
              <li>Procesar inscripciones a cursos y pagos</li>
              <li>Proporcionar acceso a contenido educativo</li>
              <li>Rastrear su progreso y emitir certificados</li>
              <li>Responder a consultas de soporte técnico</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">3.2 Comunicación</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enviar confirmaciones de inscripción y recibos</li>
              <li>Notificar sobre actualizaciones de cursos</li>
              <li>Enviar recordatorios de lecciones pendientes</li>
              <li>Comunicar cambios en términos o políticas</li>
              <li>Responder a solicitudes de soporte</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">3.3 Mejora de la Plataforma</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analizar patrones de uso para mejorar contenido</li>
              <li>Identificar y corregir errores técnicos</li>
              <li>Optimizar la experiencia del usuario</li>
              <li>Desarrollar nuevos cursos basados en demanda</li>
              <li>Realizar investigación y análisis de datos agregados</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">3.4 Marketing (con consentimiento)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enviar boletines informativos sobre nuevos cursos</li>
              <li>Notificar sobre promociones y descuentos</li>
              <li>Compartir contenido educativo relevante</li>
            </ul>
            <p className="mt-4 text-sm italic">
              Puede darse de baja de comunicaciones de marketing en cualquier momento
              haciendo clic en "Cancelar suscripción" en los correos electrónicos.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">3.5 Seguridad y Cumplimiento Legal</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prevenir fraude y actividades ilícitas</li>
              <li>Proteger la seguridad de la Plataforma y usuarios</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Responder a solicitudes de autoridades competentes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir Información con Terceros</h2>
            <p>
              NO vendemos, alquilamos ni compartimos su información personal con terceros
              para fines de marketing. Compartimos información únicamente en los siguientes casos:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">4.1 Proveedores de Servicios</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Stripe:</strong> Procesamiento de pagos (PCI-DSS compliant)
              </li>
              <li>
                <strong>Neon Database:</strong> Almacenamiento seguro de datos (PostgreSQL,
                encriptado en reposo y en tránsito)
              </li>
              <li>
                <strong>Vercel:</strong> Hosting de la plataforma (infraestructura segura)
              </li>
              <li>
                <strong>SendGrid/Resend:</strong> Envío de correos electrónicos transaccionales
              </li>
              <li>
                <strong>Google Analytics:</strong> Análisis de uso (datos anonimizados)
              </li>
            </ul>
            <p className="mt-4">
              Todos estos proveedores están obligados contractualmente a proteger su
              información y usarla solo para los fines específicos establecidos.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">4.2 Obligaciones Legales</h3>
            <p>
              Podemos divulgar información si es requerido por ley o para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Cumplir con procesos legales (órdenes judiciales, citaciones)</li>
              <li>Proteger derechos, propiedad o seguridad de DISTMAH o usuarios</li>
              <li>Prevenir fraude o actividades ilegales</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">4.3 Transferencias Comerciales</h3>
            <p>
              En caso de fusión, adquisición o venta de activos, su información puede ser
              transferida al nuevo propietario (se le notificará previamente).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies y Tecnologías Similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar la funcionalidad y
              experiencia de la Plataforma. Los tipos de cookies que usamos incluyen:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">5.1 Cookies Esenciales</h3>
            <p>
              Necesarias para el funcionamiento básico de la Plataforma:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Autenticación de sesión (mantener su sesión activa)</li>
              <li>Seguridad (protección CSRF)</li>
              <li>Balanceo de carga</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">5.2 Cookies de Funcionalidad</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recordar preferencias de idioma</li>
              <li>Guardar progreso de video</li>
              <li>Configuraciones de visualización</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">5.3 Cookies Analíticas</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics (análisis de uso anonimizado)</li>
              <li>Métricas de rendimiento</li>
              <li>Estadísticas de cursos más populares</li>
            </ul>

            <p className="mt-4">
              Para más información, consulte nuestra{' '}
              <a href="/cookies" className="text-blue-600 underline">
                Política de Cookies
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger su
              información personal contra acceso no autorizado, pérdida o destrucción:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Encriptación:</strong> HTTPS/TLS para todas las comunicaciones,
                encriptación de base de datos en reposo
              </li>
              <li>
                <strong>Contraseñas:</strong> Almacenadas usando bcrypt con salt
                (nunca guardamos contraseñas en texto plano)
              </li>
              <li>
                <strong>Autenticación:</strong> Sistema de tokens JWT con expiración
              </li>
              <li>
                <strong>Acceso limitado:</strong> Solo personal autorizado puede acceder
                a datos personales
              </li>
              <li>
                <strong>Auditorías:</strong> Revisiones de seguridad periódicas
              </li>
              <li>
                <strong>Respaldo:</strong> Copias de seguridad automáticas diarias
              </li>
            </ul>
            <p className="mt-4">
              Sin embargo, ningún método de transmisión por Internet o almacenamiento
              electrónico es 100% seguro. No podemos garantizar seguridad absoluta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retención de Datos</h2>
            <p>
              Conservamos su información personal durante el tiempo necesario para cumplir
              los fines descritos en esta política:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Cuentas activas:</strong> Mientras su cuenta esté activa
              </li>
              <li>
                <strong>Cuentas inactivas:</strong> Hasta 3 años después de la última
                actividad (luego anonimizamos o eliminamos)
              </li>
              <li>
                <strong>Datos de pago:</strong> Según requisitos legales y fiscales
                (mínimo 7 años)
              </li>
              <li>
                <strong>Certificados:</strong> Indefinidamente (para verificación futura)
              </li>
              <li>
                <strong>Registros de seguridad:</strong> Hasta 1 año
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sus Derechos (GDPR y Leyes Locales)</h2>
            <p>
              Dependiendo de su ubicación, puede tener los siguientes derechos sobre su
              información personal:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">8.1 Derechos GDPR (Unión Europea)</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Acceso:</strong> Solicitar copia de sus datos personales
              </li>
              <li>
                <strong>Rectificación:</strong> Corregir datos inexactos o incompletos
              </li>
              <li>
                <strong>Eliminación:</strong> Solicitar eliminación de sus datos
                ("derecho al olvido")
              </li>
              <li>
                <strong>Portabilidad:</strong> Recibir sus datos en formato estructurado
              </li>
              <li>
                <strong>Oposición:</strong> Oponerse al procesamiento de sus datos
              </li>
              <li>
                <strong>Restricción:</strong> Limitar cómo usamos sus datos
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">8.2 Cómo Ejercer sus Derechos</h3>
            <p>
              Para ejercer cualquiera de estos derechos, contáctenos en:
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p>Email: privacidad@distmah.com.ve</p>
              <p>Asunto: "Solicitud de Datos Personales"</p>
            </div>
            <p className="mt-4">
              Responderemos a su solicitud dentro de 30 días. Podemos requerir verificación
              de identidad antes de procesar su solicitud.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacidad de Menores</h2>
            <p>
              La Plataforma NO está dirigida a menores de 18 años. No recopilamos
              intencionalmente información de menores de edad.
            </p>
            <p className="mt-4">
              Si descubrimos que hemos recopilado información de un menor sin consentimiento
              parental verificable, eliminaremos esa información inmediatamente. Si cree que
              tenemos información de un menor, contáctenos en privacidad@distmah.com.ve.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Transferencias Internacionales</h2>
            <p>
              Sus datos pueden ser procesados y almacenados en servidores ubicados fuera de
              Venezuela, incluyendo Estados Unidos y la Unión Europea. Al usar la Plataforma,
              usted consiente estas transferencias.
            </p>
            <p className="mt-4">
              Nuestros proveedores de servicios en otras jurisdicciones cumplen con
              estándares de protección de datos equivalentes (como GDPR para proveedores
              en la UE).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cambios a esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente para reflejar
              cambios en nuestras prácticas o requisitos legales. Los cambios significativos
              se notificarán mediante:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Aviso destacado en la Plataforma</li>
              <li>Correo electrónico a su dirección registrada</li>
              <li>Notificación en su panel de estudiante</li>
            </ul>
            <p className="mt-4">
              La fecha de "Última actualización" al inicio de esta política indica cuándo
              entró en vigor la versión actual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
            <p>
              Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política
              de Privacidad o el manejo de sus datos personales, contáctenos:
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p><strong>DISTMAH ATC - Oficial de Privacidad</strong></p>
              <p>Email: privacidad@distmah.com.ve</p>
              <p>Email alternativo: soporte@distmah.com.ve</p>
              <p>Sitio web: https://distmah-atc.com</p>
              <p>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM (GMT-4)</p>
            </div>
          </section>

          <section className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="font-bold text-gray-900">
              Su privacidad es importante para nosotros. Nos comprometemos a proteger sus
              datos personales y usarlos de manera responsable y transparente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
