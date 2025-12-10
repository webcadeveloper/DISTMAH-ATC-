import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Certificaciones Autodesk | DISTMAH ATC Venezuela',
  description: 'Certificaciones oficiales Autodesk en Venezuela. Centro de Entrenamiento Autorizado (ATC) con validez internacional. AutoCAD, Revit, Civil 3D certificados.',
};

export default function CertificacionesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section con imagen de fondo */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Image_202511251535.jpeg"
            alt="Certificaciones Autodesk"
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
                <Award className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">Centro Autorizado Autodesk ATC</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Certificaciones Autodesk Oficiales
              </h1>

              <p className="text-xl text-neutral-300 mb-8">
                Obtén certificaciones reconocidas internacionalmente que validan tus habilidades en software Autodesk.
                DISTMAH es un Centro de Entrenamiento Autorizado (ATC) en Venezuela.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cursos">
                  <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-bold px-8">
                    Ver Cursos Certificados
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8">
                    Solicitar Información
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Certificaciones Disponibles */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Certificaciones Disponibles 2026
              </h2>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                Todas nuestras certificaciones son oficiales de Autodesk con validez internacional
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: 'AutoCAD Certified User',
                software: 'AutoCAD 2026',
                level: 'Básico',
                duration: '30 horas',
                image: '/images/cert-autocad-user.jpg',
              },
              {
                title: 'AutoCAD Certified Professional',
                software: 'AutoCAD 2026',
                level: 'Avanzado',
                duration: '40 horas',
                image: '/images/cert-autocad-pro.jpg',
              },
              {
                title: 'Revit Architecture Certified',
                software: 'Revit 2026',
                level: 'Profesional',
                duration: '30 horas',
                image: '/images/cert-revit-arch.jpg',
              },
              {
                title: 'Revit MEP Electrical Specialist',
                software: 'Revit MEP 2026',
                level: 'Especialista',
                duration: '16 horas',
                image: '/images/cert-revit-mep-elec.jpg',
              },
              {
                title: 'Revit MEP Mechanical Specialist',
                software: 'Revit MEP 2026',
                level: 'Especialista',
                duration: '24 horas',
                image: '/images/cert-revit-mep-mech.jpg',
              },
              {
                title: 'Civil 3D Certified Professional',
                software: 'Civil 3D 2026',
                level: 'Profesional',
                duration: '30 horas',
                image: '/images/cert-civil3d.jpg',
              },
            ].map((cert, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-neutral-900 rounded-lg border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-neutral-800 to-neutral-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="w-24 h-24 text-white opacity-20" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-semibold">
                        {cert.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-neutral-400 text-sm mb-4">{cert.software}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-sm text-neutral-500">{cert.duration}</span>
                      <Link href="/cursos">
                        <Button size="sm" variant="ghost" className="text-white hover:text-neutral-300">
                          Ver Curso
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Beneficios de Certificarse
              </h2>
              <p className="text-xl text-neutral-400">
                ¿Por qué obtener una certificación oficial de Autodesk?
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Validez Internacional',
                description: 'Tu certificación es reconocida globalmente por empresas y organizaciones que utilizan software Autodesk.',
              },
              {
                title: 'Ventaja Competitiva',
                description: 'Destácate en el mercado laboral venezolano e internacional con credenciales verificables.',
              },
              {
                title: 'Verificación Digital',
                description: 'Todas las certificaciones son verificables en la base de datos oficial de Autodesk.',
              },
              {
                title: 'Mejora Salarial',
                description: 'Los profesionales certificados ganan en promedio 25% más que sus pares no certificados.',
              },
              {
                title: 'Red Profesional',
                description: 'Únete a la comunidad global de profesionales certificados por Autodesk.',
              },
              {
                title: 'Actualización Continua',
                description: 'Acceso a recursos exclusivos y actualizaciones de software Autodesk.',
              },
            ].map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-neutral-400">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos en Venezuela */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Proyectos Destacados en Venezuela
              </h2>
              <p className="text-xl text-neutral-400">
                Nuestros egresados certificados trabajan en proyectos de infraestructura y construcción en todo Venezuela
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Metro de Caracas - Extensión Línea 5',
                location: 'Caracas, Venezuela',
                software: 'Civil 3D, Revit',
                description: 'Diseño de vialidades y estaciones de metro con BIM.',
              },
              {
                name: 'Torre Financial Center',
                location: 'Valencia, Carabobo',
                software: 'Revit Architecture, Navisworks',
                description: 'Modelado BIM de torre corporativa de 25 pisos.',
              },
              {
                name: 'Complejo Hospitalario',
                location: 'Maracaibo, Zulia',
                software: 'Revit MEP, Civil 3D',
                description: 'Instalaciones MEP completas y urbanismo.',
              },
            ].map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-neutral-900 rounded-lg border border-white/10 p-6 hover:border-white/20 transition-all">
                  <div className="h-48 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg mb-4" />

                  <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-neutral-400 mb-3">{project.location}</p>

                  <p className="text-sm text-neutral-300 mb-4">{project.description}</p>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-neutral-500 font-semibold">Software utilizado:</p>
                    <p className="text-sm text-white font-medium">{project.software}</p>
                  </div>
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
              ¿Listo para Certificarte?
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Inicia tu camino hacia la certificación oficial Autodesk con DISTMAH ATC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cursos">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-bold px-8">
                  Ver Cursos Disponibles
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8">
                  Hablar con un Asesor
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
