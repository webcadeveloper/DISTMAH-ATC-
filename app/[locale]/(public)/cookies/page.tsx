import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | DISTMAH ATC',
  description: 'Información sobre el uso de cookies en DISTMAH ATC - Qué cookies usamos y cómo gestionarlas',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Política de Cookies</h1>

        <div className="prose prose-lg max-w-none text-neutral-700">
          <p className="text-neutral-600 mb-6">
            Última actualización: 24 de noviembre de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su navegador o
              dispositivo cuando visita un sitio web. Permiten que el sitio web recuerde sus
              acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras
              preferencias de visualización) durante un período de tiempo, para que no tenga
              que volver a ingresarlas cada vez que regrese al sitio o navegue de una página
              a otra.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. ¿Por qué Usamos Cookies?</h2>
            <p>
              DISTMAH ATC utiliza cookies para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Mantener su sesión activa mientras navega por la Plataforma</li>
              <li>Recordar sus preferencias y configuraciones</li>
              <li>Mejorar la seguridad de su cuenta</li>
              <li>Analizar cómo los usuarios interactúan con la Plataforma</li>
              <li>Optimizar el rendimiento y la experiencia del usuario</li>
              <li>Guardar el progreso de sus cursos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Tipos de Cookies que Usamos</h2>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">3.1 Cookies Estrictamente Necesarias</h3>
            <p>
              Estas cookies son esenciales para que pueda utilizar la Plataforma y sus
              funciones principales. Sin estas cookies, servicios como la autenticación de
              usuario no funcionarían.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full bg-white border border-neutral-300">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-300 px-4 py-2 text-left">Nombre</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Propósito</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">auth-token</td>
                    <td className="border border-neutral-300 px-4 py-2">Autenticación de sesión JWT</td>
                    <td className="border border-neutral-300 px-4 py-2">7 días</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">csrf-token</td>
                    <td className="border border-neutral-300 px-4 py-2">Protección contra ataques CSRF</td>
                    <td className="border border-neutral-300 px-4 py-2">Sesión</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">session-id</td>
                    <td className="border border-neutral-300 px-4 py-2">Identificador de sesión</td>
                    <td className="border border-neutral-300 px-4 py-2">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm italic">
              <strong>No se pueden desactivar:</strong> Estas cookies son estrictamente
              necesarias y no se pueden rechazar sin afectar el funcionamiento de la Plataforma.
            </p>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">3.2 Cookies de Funcionalidad</h3>
            <p>
              Estas cookies permiten que la Plataforma recuerde las opciones que ha elegido
              y proporcionan funciones mejoradas y más personales.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full bg-white border border-neutral-300">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-300 px-4 py-2 text-left">Nombre</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Propósito</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">locale</td>
                    <td className="border border-neutral-300 px-4 py-2">Preferencia de idioma (ES/EN)</td>
                    <td className="border border-neutral-300 px-4 py-2">1 año</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">video-progress</td>
                    <td className="border border-neutral-300 px-4 py-2">Guardar posición de reproducción de videos</td>
                    <td className="border border-neutral-300 px-4 py-2">30 días</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">theme-preference</td>
                    <td className="border border-neutral-300 px-4 py-2">Modo claro/oscuro</td>
                    <td className="border border-neutral-300 px-4 py-2">1 año</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">sidebar-state</td>
                    <td className="border border-neutral-300 px-4 py-2">Estado de menú lateral (expandido/colapsado)</td>
                    <td className="border border-neutral-300 px-4 py-2">30 días</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">3.3 Cookies Analíticas</h3>
            <p>
              Estas cookies nos ayudan a entender cómo los visitantes interactúan con la
              Plataforma, proporcionando información sobre las áreas visitadas, el tiempo
              dedicado y cualquier problema encontrado, como mensajes de error. Esto nos
              ayuda a mejorar el rendimiento de la Plataforma.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full bg-white border border-neutral-300">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-300 px-4 py-2 text-left">Nombre</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Propósito</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">_ga</td>
                    <td className="border border-neutral-300 px-4 py-2">Google Analytics - Distinguir usuarios</td>
                    <td className="border border-neutral-300 px-4 py-2">2 años</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">_gid</td>
                    <td className="border border-neutral-300 px-4 py-2">Google Analytics - Distinguir usuarios</td>
                    <td className="border border-neutral-300 px-4 py-2">24 horas</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">_gat</td>
                    <td className="border border-neutral-300 px-4 py-2">Google Analytics - Limitar tasa de solicitudes</td>
                    <td className="border border-neutral-300 px-4 py-2">1 minuto</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">analytics-consent</td>
                    <td className="border border-neutral-300 px-4 py-2">Guardar consentimiento para cookies analíticas</td>
                    <td className="border border-neutral-300 px-4 py-2">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm italic">
              <strong>Datos anonimizados:</strong> Las cookies analíticas recopilan datos
              de forma agregada y anónima. No identifican personalmente a los usuarios.
            </p>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">3.4 Cookies de Rendimiento</h3>
            <p>
              Estas cookies recopilan información sobre cómo se utiliza la Plataforma, por
              ejemplo, qué páginas se visitan con más frecuencia y si los usuarios reciben
              mensajes de error.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full bg-white border border-neutral-300">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-300 px-4 py-2 text-left">Nombre</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Propósito</th>
                    <th className="border border-neutral-300 px-4 py-2 text-left">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">performance-metrics</td>
                    <td className="border border-neutral-300 px-4 py-2">Métricas de carga de página</td>
                    <td className="border border-neutral-300 px-4 py-2">7 días</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-4 py-2">error-tracking</td>
                    <td className="border border-neutral-300 px-4 py-2">Rastreo de errores JavaScript</td>
                    <td className="border border-neutral-300 px-4 py-2">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Cookies de Terceros</h2>
            <p>
              Algunos de nuestros socios también establecen cookies en su dispositivo cuando
              visita la Plataforma. Estos terceros incluyen:
            </p>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">4.1 Google Analytics</h3>
            <p>
              Utilizamos Google Analytics para analizar el uso de la Plataforma. Google
              Analytics recopila información mediante cookies sobre cómo los usuarios utilizan
              el sitio (páginas visitadas, tiempo en el sitio, fuente de tráfico).
            </p>
            <p className="mt-4">
              <strong>Más información:</strong>{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Política de Privacidad de Google
              </a>
            </p>
            <p className="mt-2">
              <strong>Desactivar:</strong>{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Complemento de inhabilitación para navegadores de Google Analytics
              </a>
            </p>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">4.2 Stripe (Pagos)</h3>
            <p>
              Stripe establece cookies para procesar pagos de forma segura. Estas cookies
              son esenciales para prevenir fraude y garantizar transacciones seguras.
            </p>
            <p className="mt-4">
              <strong>Más información:</strong>{' '}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Política de Privacidad de Stripe
              </a>
            </p>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">4.3 Vercel Analytics</h3>
            <p>
              Vercel Analytics proporciona métricas de rendimiento y velocidad de la Plataforma.
              No recopila información de identificación personal.
            </p>
            <p className="mt-4">
              <strong>Más información:</strong>{' '}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Política de Privacidad de Vercel Analytics
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Cómo Gestionar las Cookies</h2>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">5.1 Banner de Consentimiento</h3>
            <p>
              Al visitar la Plataforma por primera vez, se le mostrará un banner de cookies
              solicitando su consentimiento para cookies no esenciales. Puede:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Aceptar todas las cookies</li>
              <li>Rechazar cookies opcionales (solo se usarán las estrictamente necesarias)</li>
            </ul>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">5.2 Configuración del Navegador</h3>
            <p>
              Todos los navegadores modernos le permiten controlar las cookies mediante la
              configuración de privacidad. Puede:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Bloquear todas las cookies</li>
              <li>Bloquear solo cookies de terceros</li>
              <li>Eliminar cookies existentes</li>
              <li>Configurar el navegador para que solicite permiso antes de aceptar cookies</li>
            </ul>

            <p className="mt-6">
              <strong>Instrucciones por navegador:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Google Chrome:</strong> Configuración → Privacidad y seguridad →
                Cookies y otros datos de sitios
              </li>
              <li>
                <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y
                datos del sitio
              </li>
              <li>
                <strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web
              </li>
              <li>
                <strong>Edge:</strong> Configuración → Cookies y permisos del sitio → Cookies
                y datos del sitio
              </li>
            </ul>

            <p className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
              <strong>Advertencia:</strong> Bloquear o eliminar todas las cookies puede
              afectar la funcionalidad de la Plataforma. Algunas características pueden no
              funcionar correctamente sin cookies esenciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Almacenamiento Local (LocalStorage)</h2>
            <p>
              Además de cookies, utilizamos el almacenamiento local del navegador (LocalStorage)
              para guardar:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Preferencia de consentimiento de cookies</li>
              <li>Progreso de lecciones (sincronizado con el servidor)</li>
              <li>Borradores de comentarios en foros</li>
              <li>Configuraciones de interfaz de usuario</li>
            </ul>
            <p className="mt-4">
              LocalStorage persiste hasta que usted lo elimine manualmente desde la
              configuración del navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Actualizaciones de esta Política</h2>
            <p>
              Podemos actualizar esta Política de Cookies ocasionalmente para reflejar
              cambios en las cookies que utilizamos o por otras razones operativas, legales
              o regulatorias.
            </p>
            <p className="mt-4">
              Le recomendamos que revise esta página periódicamente para estar informado
              sobre nuestro uso de cookies. La fecha de "Última actualización" al inicio
              de esta política indica cuándo fue revisada por última vez.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Contacto</h2>
            <p>
              Si tiene preguntas sobre nuestra Política de Cookies o cómo utilizamos las
              cookies, contáctenos:
            </p>
            <div className="mt-4 p-4 bg-neutral-100 rounded-lg">
              <p><strong>DISTMAH ATC</strong></p>
              <p>Email: privacidad@distmah.com.ve</p>
              <p>Email alternativo: soporte@distmah.com.ve</p>
              <p>Sitio web: https://distmah-atc.com</p>
              <p>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM (GMT-4)</p>
            </div>
          </section>

          <section className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="font-bold text-neutral-900">
              Al continuar navegando en la Plataforma después de ver el banner de cookies,
              usted acepta nuestro uso de cookies según lo descrito en esta política.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
