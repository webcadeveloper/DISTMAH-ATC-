import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | DISTMAH ATC',
  description: 'Términos y condiciones de uso de la plataforma DISTMAH ATC - Centro de Entrenamiento Autorizado de Autodesk',
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Términos y Condiciones</h1>

        <div className="prose prose-lg max-w-none text-neutral-700">
          <p className="text-neutral-600 mb-6">
            Última actualización: 24 de noviembre de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar la plataforma DISTMAH ATC (en adelante, "la Plataforma"),
              usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo
              con alguna parte de estos términos, no podrá acceder a la Plataforma.
            </p>
            <p className="mt-4">
              DISTMAH es un Centro de Entrenamiento Autorizado (ATC) oficial de Autodesk,
              comprometido con la excelencia en la formación de profesionales en software
              de diseño, ingeniería y construcción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Descripción del Servicio</h2>
            <p>
              DISTMAH ATC es un Centro de Entrenamiento Autorizado (ATC) de Autodesk que
              proporciona cursos en línea profesionales de software de Autodesk, incluyendo
              pero no limitándose a:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>AutoCAD (versiones 2025, 2026 y posteriores)</li>
              <li>Revit (Arquitectura, Estructuras, MEP)</li>
              <li>Civil 3D (Infraestructura y obra civil)</li>
              <li>Navisworks (Gestión de proyectos BIM)</li>
              <li>AutoCAD Plant 3D (Diseño de plantas industriales)</li>
              <li>AutoCAD Map 3D (Sistemas GIS/CAD)</li>
            </ul>
            <p className="mt-4">
              Los servicios incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceso a contenido educativo digital basado en documentación oficial de Autodesk</li>
              <li>Certificación oficial al completar cursos</li>
              <li>Soporte técnico de instructores certificados por Autodesk</li>
              <li>Materiales descargables en formato Markdown editable</li>
              <li>Ejercicios prácticos basados en casos reales de la industria</li>
              <li>Acceso a foros de discusión con otros estudiantes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Registro y Cuenta de Usuario</h2>
            <p>
              Para acceder a los cursos, debe crear una cuenta proporcionando información
              precisa, actual y completa. La información requerida incluye:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico válida</li>
              <li>Contraseña segura (mínimo 8 caracteres)</li>
              <li>País de residencia</li>
            </ul>
            <p className="mt-4">
              <strong>Usted es responsable de:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mantener la confidencialidad de su contraseña</li>
              <li>Todas las actividades que ocurran bajo su cuenta</li>
              <li>Notificar inmediatamente cualquier uso no autorizado a soporte@distmah.com.ve</li>
              <li>Actualizar su información personal cuando sea necesario</li>
            </ul>
            <p className="mt-4">
              DISTMAH se reserva el derecho de suspender o cancelar cuentas que violen
              estos términos o muestren actividad fraudulenta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Pagos y Reembolsos</h2>
            <p>
              Los precios de los cursos están expresados en dólares estadounidenses (USD)
              y bolívares venezolanos (VEF). Los precios pueden variar según:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Duración del curso (20, 30, 40 horas)</li>
              <li>Nivel del curso (Básico, Intermedio, Avanzado)</li>
              <li>Promociones especiales vigentes</li>
            </ul>
            <p className="mt-4">
              <strong>Métodos de Pago:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tarjetas de crédito/débito (Visa, MasterCard, American Express)</li>
              <li>Procesamiento seguro a través de Stripe</li>
              <li>Pago móvil en Venezuela (Pago Móvil, transferencias bancarias)</li>
            </ul>
            <p className="mt-4">
              <strong>Política de Reembolso:</strong>
            </p>
            <p>
              Los reembolsos se procesarán dentro de los primeros 7 días calendario de la
              inscripción, siempre que se cumplan las siguientes condiciones:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>No se haya completado más del 20% del contenido del curso</li>
              <li>No se hayan descargado certificados ni materiales protegidos</li>
              <li>Se presente una solicitud formal a soporte@distmah.com.ve</li>
            </ul>
            <p className="mt-4">
              Los reembolsos se procesarán al método de pago original en un plazo de
              10-15 días hábiles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de la Plataforma, incluyendo pero no limitado a textos,
              gráficos, videos, ejercicios, archivos descargables, y materiales educativos,
              es propiedad de DISTMAH ATC o sus licenciantes (Autodesk Inc.) y está
              protegido por las leyes de propiedad intelectual de Venezuela e internacionales.
            </p>
            <p className="mt-4">
              <strong>Licencia de Uso:</strong>
            </p>
            <p>
              Al inscribirse en un curso, se le otorga una licencia personal, no exclusiva,
              no transferible e intransferible para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Acceder y visualizar el contenido del curso</li>
              <li>Descargar materiales para uso personal y educativo</li>
              <li>Completar ejercicios y evaluaciones</li>
            </ul>
            <p className="mt-4">
              <strong>Está ESTRICTAMENTE PROHIBIDO:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Distribuir, vender o comercializar el contenido del curso</li>
              <li>Compartir credenciales de acceso con terceros</li>
              <li>Realizar copias no autorizadas de videos, PDFs o materiales</li>
              <li>Publicar contenido del curso en plataformas externas (YouTube, Udemy, etc.)</li>
              <li>Usar el contenido con fines comerciales sin autorización escrita</li>
              <li>Modificar, reproducir o crear obras derivadas sin permiso</li>
            </ul>
            <p className="mt-4">
              La violación de estas restricciones resultará en la cancelación inmediata
              de su cuenta sin derecho a reembolso y posibles acciones legales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Certificación</h2>
            <p>
              Los certificados de finalización se emiten exclusivamente al completar
              exitosamente un curso, cumpliendo con los siguientes requisitos:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Completar el 100% de las lecciones del curso</li>
              <li>Aprobar todos los exámenes con puntuación mínima del 70%</li>
              <li>Completar todas las tareas y ejercicios prácticos asignados</li>
              <li>Cumplir con el tiempo mínimo de estudio establecido</li>
            </ul>
            <p className="mt-4">
              <strong>Características del Certificado:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Certificado digital descargable en formato PDF</li>
              <li>Código de verificación único</li>
              <li>Firma digital de DISTMAH ATC</li>
              <li>Válido como prueba de capacitación profesional</li>
            </ul>
            <p className="mt-4">
              Los certificados NO garantizan certificación oficial de Autodesk. Para
              certificaciones profesionales de Autodesk, consulte los programas específicos
              en autodesk.com/certification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Conducta del Usuario</h2>
            <p>
              Al utilizar la Plataforma, usted se compromete a mantener una conducta
              profesional y respetuosa. Está PROHIBIDO:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Publicar contenido ofensivo, discriminatorio o inapropiado en los foros</li>
              <li>Acosar, amenazar o intimidar a otros usuarios o instructores</li>
              <li>Realizar actividades fraudulentas o engañosas</li>
              <li>Intentar acceder a cuentas de otros usuarios</li>
              <li>Interferir con el funcionamiento de la Plataforma</li>
              <li>Realizar ataques de denegación de servicio (DDoS)</li>
              <li>Inyectar código malicioso o virus</li>
              <li>Realizar ingeniería inversa del software de la plataforma</li>
              <li>Usar bots o scripts automatizados sin autorización</li>
            </ul>
            <p className="mt-4">
              La violación de estas normas puede resultar en suspensión o cancelación
              permanente de la cuenta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Acceso y Disponibilidad</h2>
            <p>
              DISTMAH ATC se esfuerza por mantener la Plataforma disponible 24/7, sin embargo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Pueden ocurrir interrupciones por mantenimiento programado (notificado con anticipación)</li>
              <li>La plataforma puede estar temporalmente no disponible por causas técnicas</li>
              <li>El acceso a cursos individuales expira según el plazo contratado</li>
              <li>Nos reservamos el derecho de modificar o discontinuar cursos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Limitación de Responsabilidad</h2>
            <p>
              DISTMAH ATC proporciona la Plataforma "tal cual" y "según disponibilidad".
              En la máxima medida permitida por la ley:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                NO seremos responsables de daños indirectos, incidentales, especiales o
                consecuentes derivados del uso de la Plataforma
              </li>
              <li>
                NO garantizamos que la Plataforma esté libre de errores o interrupciones
              </li>
              <li>
                NO somos responsables de pérdida de datos, beneficios o oportunidades
              </li>
              <li>
                La responsabilidad total de DISTMAH no excederá el monto pagado por el
                curso en cuestión
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Privacidad y Protección de Datos</h2>
            <p>
              El uso de datos personales está regido por nuestra Política de Privacidad.
              Al usar la Plataforma, usted consiente la recopilación y uso de información
              según lo establecido en dicha política.
            </p>
            <p className="mt-4">
              Datos recopilados incluyen: información de registro, progreso del curso,
              interacciones en foros, y datos de pago (procesados de forma segura por Stripe).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Modificaciones de los Términos</h2>
            <p>
              DISTMAH ATC se reserva el derecho de modificar estos Términos y Condiciones
              en cualquier momento. Los cambios significativos serán notificados mediante:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Correo electrónico a la dirección registrada</li>
              <li>Aviso destacado en la página de inicio de la Plataforma</li>
              <li>Notificación en el panel del estudiante</li>
            </ul>
            <p className="mt-4">
              El uso continuado de la Plataforma después de la publicación de cambios
              constituye su aceptación de los nuevos términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Rescisión</h2>
            <p>
              DISTMAH ATC puede rescindir o suspender su acceso inmediatamente, sin previo
              aviso, por cualquier motivo, incluyendo pero no limitándose a:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Violación de estos Términos y Condiciones</li>
              <li>Actividad fraudulenta o ilegal</li>
              <li>Falta de pago</li>
              <li>Conducta inapropiada</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">13. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes
              de la República Bolivariana de Venezuela, sin dar efecto a ningún principio
              de conflictos de leyes.
            </p>
            <p className="mt-4">
              Cualquier disputa relacionada con estos términos será sometida a la jurisdicción
              exclusiva de los tribunales competentes de Caracas, Venezuela.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">14. Disposiciones Generales</h2>
            <p>
              <strong>Divisibilidad:</strong> Si alguna disposición de estos términos es
              declarada inválida, las demás disposiciones permanecerán en pleno vigor.
            </p>
            <p className="mt-4">
              <strong>Renuncia:</strong> La falta de ejercicio de cualquier derecho no
              constituye una renuncia a dicho derecho.
            </p>
            <p className="mt-4">
              <strong>Cesión:</strong> Usted no puede ceder estos términos sin nuestro
              consentimiento previo por escrito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">15. Contacto</h2>
            <p>
              Para preguntas, comentarios o inquietudes sobre estos Términos y Condiciones,
              contáctenos en:
            </p>
            <div className="mt-4 p-4 bg-neutral-100 rounded-lg">
              <p><strong>DISTMAH ATC</strong></p>
              <p>Email: soporte@distmah.com.ve</p>
              <p>Sitio web: https://distmah-atc.com</p>
              <p>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM (GMT-4)</p>
            </div>
          </section>

          <section className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="font-bold text-neutral-900">
              Al hacer clic en "Aceptar" durante el registro, usted reconoce que ha leído,
              entendido y acepta estar sujeto a estos Términos y Condiciones.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
