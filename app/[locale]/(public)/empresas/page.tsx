import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Building2, Users, Trophy, Briefcase, CheckCircle2, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Capacitación Empresarial | DISTMAH ATC Venezuela',
  description: 'Soluciones de capacitación en software Autodesk para empresas. Entrenamiento corporativo en AutoCAD, Revit, Civil 3D para equipos de ingeniería y arquitectura.',
};

export default function EmpresasPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section con imagen de fondo */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Image_202511251543.jpeg"
            alt="Capacitación Empresarial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-10">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Building2 className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">Capacitación Corporativa</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Soluciones de Entrenamiento para Empresas
              </h1>

              <p className="text-xl text-neutral-300 mb-8">
                Mejora la productividad de tu equipo con capacitación especializada en software Autodesk.
                Programas personalizados para empresas de arquitectura, ingeniería y construcción.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-bold px-8">
                    Solicitar Cotización
                  </Button>
                </Link>
                <a href="#beneficios">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8">
                    Ver Beneficios
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Estadísticas */}
      <section className="py-16 bg-neutral-900 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '50+', label: 'Empresas Capacitadas' },
              { number: '1,200+', label: 'Profesionales Entrenados' },
              { number: '98%', label: 'Satisfacción' },
              { number: '15+', label: 'Años de Experiencia' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-neutral-400 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                ¿Por qué Capacitar a tu Equipo con DISTMAH?
              </h2>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                Somos el único Centro de Entrenamiento Autorizado (ATC) de Autodesk en Venezuela
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Trophy,
                title: 'Certificación Oficial',
                description: 'Todos los participantes reciben certificación Autodesk con validez internacional.',
              },
              {
                icon: Users,
                title: 'Instructores Certificados',
                description: 'Equipo de instructores ACI (Autodesk Certified Instructor) con experiencia real en proyectos.',
              },
              {
                icon: TrendingUp,
                title: 'ROI Comprobado',
                description: 'Empresas reportan aumento de productividad del 40% tras la capacitación.',
              },
              {
                icon: Briefcase,
                title: 'Casos Reales',
                description: 'Entrenamiento basado en proyectos y flujos de trabajo de la industria venezolana.',
              },
              {
                icon: Building2,
                title: 'Modalidad Flexible',
                description: 'Capacitación presencial en tu empresa, virtual en vivo, o híbrida según tu necesidad.',
              },
              {
                icon: CheckCircle2,
                title: 'Soporte Post-Curso',
                description: 'Acceso a soporte técnico y consultoría durante 3 meses después del curso.',
              },
            ].map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-neutral-900 rounded-lg border border-white/10 p-8 hover:border-white/20 transition-all group">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programas de Capacitación */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Programas de Capacitación Corporativa
              </h2>
              <p className="text-xl text-neutral-400">
                Soluciones adaptadas a las necesidades de tu empresa
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Capacitación BIM Completa',
                duration: '40 horas',
                participants: '5-15 personas',
                software: ['Revit Architecture', 'Revit MEP', 'Navisworks'],
                description: 'Programa integral para equipos de diseño que desean implementar metodología BIM.',
                price: 'Desde $4,500 USD',
              },
              {
                title: 'AutoCAD para Equipos de Diseño',
                duration: '30 horas',
                participants: '10-20 personas',
                software: ['AutoCAD 2D', 'AutoCAD 3D', 'Standards CAD'],
                description: 'Estandariza el uso de AutoCAD en toda tu empresa con workflows profesionales.',
                price: 'Desde $3,200 USD',
              },
              {
                title: 'Civil 3D para Infraestructura',
                duration: '35 horas',
                participants: '5-12 personas',
                software: ['Civil 3D', 'InfraWorks'],
                description: 'Especialización en diseño vial, topografía y proyectos de obra civil.',
                price: 'Desde $4,800 USD',
              },
              {
                title: 'Programa Personalizado',
                duration: 'Flexible',
                participants: 'Adaptable',
                software: ['A medida'],
                description: 'Diseñamos un programa específico basado en las necesidades de tu empresa.',
                price: 'Cotización personalizada',
              },
            ].map((program, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-black rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 text-sm text-neutral-400">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      {program.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-neutral-400">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      {program.participants}
                    </span>
                  </div>

                  <p className="text-neutral-300 mb-6">{program.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-white mb-2">Software incluido:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.software.map((soft, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">
                          {soft}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{program.price}</div>
                    <Link href="/contacto">
                      <Button variant="default" className="bg-white text-black hover:bg-neutral-200">
                        Cotizar
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Empresas que Confían en Nosotros
              </h2>
              <p className="text-xl text-neutral-400">
                Casos de éxito de capacitación corporativa en Venezuela
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                company: 'Constructora XYZ C.A.',
                sector: 'Construcción',
                program: 'Revit Architecture + MEP',
                result: '+45% productividad en diseño BIM',
                testimonial: 'El entrenamiento de DISTMAH transformó nuestra manera de trabajar. Ahora entregamos proyectos BIM completos.',
              },
              {
                company: 'Ingeniería ABC',
                sector: 'Consultoría de Ingeniería',
                program: 'Civil 3D Avanzado',
                result: 'Reducción del 60% en tiempos de diseño vial',
                testimonial: 'Excelente capacitación, totalmente orientada a proyectos reales de infraestructura en Venezuela.',
              },
              {
                company: 'Arquitectos DEF',
                sector: 'Arquitectura',
                program: 'AutoCAD + Revit',
                result: 'Estandarización de workflows en 3 oficinas',
                testimonial: 'Logramos unificar los estándares CAD en todas nuestras sedes gracias a esta capacitación.',
              },
            ].map((caso, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-neutral-900 rounded-lg border border-white/10 p-8 hover:border-white/20 transition-all">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{caso.company}</h3>
                    <p className="text-sm text-neutral-400">{caso.sector}</p>
                  </div>

                  <div className="mb-4 pb-4 border-b border-white/10">
                    <p className="text-sm text-neutral-300 mb-2">
                      <strong className="text-white">Programa:</strong> {caso.program}
                    </p>
                    <p className="text-white font-semibold">{caso.result}</p>
                  </div>

                  <p className="text-neutral-300 italic">"{caso.testimonial}"</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-neutral-900 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Capacitar a tu Equipo?
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Contáctanos para diseñar un programa de capacitación personalizado para tu empresa
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-bold px-8">
                  Solicitar Cotización
                </Button>
              </Link>
              <a href="mailto:empresas@distmah.com">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8">
                  empresas@distmah.com
                </Button>
              </a>
            </div>

            <p className="mt-8 text-sm text-neutral-500">
              También disponible vía WhatsApp: +58 212-555-0199
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
