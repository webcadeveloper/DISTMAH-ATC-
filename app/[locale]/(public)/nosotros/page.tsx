import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Users, Building2, Trophy, Star, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | DISTMAH ATC Venezuela',
  description: 'Conoce a DISTMAH, Centro de Entrenamiento Autorizado Autodesk en Venezuela. Equipo de instructores certificados liderados por Antonio Nolivos, ganador de premios Autodesk.',
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section con imagen de fondo */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Image_202511251700.jpeg"
            alt="DISTMAH ATC Venezuela"
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
                <span className="text-sm font-semibold text-white">ATC Autorizado Autodesk</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Liderando la Educación Autodesk en Venezuela
              </h1>

              <p className="text-xl text-neutral-300 mb-8">
                Más de 15 años formando profesionales certificados en software Autodesk.
                Reconocidos por Autodesk como el centro de excelencia en capacitación BIM y CAD.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Antonio Nolivos - Destacado */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up">
              <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Imagen */}
                  <div className="h-96 lg:h-auto bg-gradient-to-br from-neutral-800 to-neutral-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="w-32 h-32 text-white opacity-20" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-12 text-white">
                    <div className="flex items-center gap-3 mb-6">
                      <Trophy className="w-8 h-8 text-amber-400" />
                      <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">Instructor del Año</span>
                    </div>

                    <h2 className="text-4xl font-bold mb-4">Antonio Nolivos</h2>
                    <p className="text-xl text-neutral-400 mb-6">Director General & Instructor Certificado ACI</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <p className="text-neutral-300">
                          <strong className="text-white">Premio Autodesk Best Instructor</strong> - Reconocido como el mejor instructor de Latinoamérica (2022)
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <p className="text-neutral-300">
                          <strong className="text-white">Autodesk Certified Instructor (ACI)</strong> - Certificación máxima de Autodesk para docentes
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <p className="text-neutral-300">
                          <strong className="text-white">15+ años de experiencia</strong> en capacitación profesional en software Autodesk
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <p className="text-neutral-300">
                          <strong className="text-white">1,500+ profesionales certificados</strong> en AutoCAD, Revit, Civil 3D y Navisworks
                        </p>
                      </div>
                    </div>

                    <p className="text-neutral-400 italic border-l-2 border-white/20 pl-4">
                      "Mi pasión es formar profesionales que lideren la transformación digital en la industria de la construcción.
                      Cada estudiante certificado es un embajador de la excelencia en BIM y CAD."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Equipo de Instructores */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Nuestro Equipo de Instructores
              </h2>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                Instructores certificados ACI con experiencia real en proyectos de arquitectura, ingeniería y construcción
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Ing. Carlos Méndez',
                role: 'Instructor Revit Architecture',
                cert: 'ACI - Autodesk Certified Instructor',
                experience: '12 años de experiencia BIM',
                specialty: 'Especialista en proyectos residenciales y hospitalarios',
              },
              {
                name: 'Arq. María Rodríguez',
                role: 'Instructora Revit MEP',
                cert: 'ACI - Revit MEP Specialist',
                experience: '10 años en instalaciones MEP',
                specialty: 'Experta en coordinación multidisciplinaria',
              },
              {
                name: 'Ing. José Pérez',
                role: 'Instructor Civil 3D',
                cert: 'ACP - Civil 3D Professional',
                experience: '15 años en infraestructura',
                specialty: 'Vialidades, movimiento de tierras y drenajes',
              },
              {
                name: 'Ing. Ana Fernández',
                role: 'Instructora AutoCAD',
                cert: 'ACI - AutoCAD Specialist',
                experience: '8 años en diseño industrial',
                specialty: 'AutoCAD 2D/3D y personalización con LISP',
              },
              {
                name: 'Arq. Luis Martínez',
                role: 'Instructor Navisworks',
                cert: 'BIM Coordinator Specialist',
                experience: '10 años en coordinación BIM',
                specialty: 'Clash Detection y simulaciones 4D/5D',
              },
              {
                name: 'Ing. Carmen Silva',
                role: 'Instructora Plant 3D',
                cert: 'ACP - Plant Design Professional',
                experience: '12 años en diseño de plantas',
                specialty: 'Industria petroquímica y farmacéutica',
              },
            ].map((instructor, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-black rounded-lg border border-white/10 p-8 hover:border-white/20 transition-all">
                  <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white text-center mb-2">{instructor.name}</h3>
                  <p className="text-neutral-400 font-semibold text-center mb-4">{instructor.role}</p>

                  <div className="space-y-3 text-sm text-neutral-400">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <p>{instructor.cert}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <p>{instructor.experience}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <p>{instructor.specialty}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Oficinas e Instalaciones */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Nuestras Instalaciones
              </h2>
              <p className="text-xl text-neutral-400">
                Equipadas con tecnología de última generación para la mejor experiencia de aprendizaje
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="bg-neutral-900 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-white" />
                    Oficina Principal - Caracas
                  </h3>
                  <div className="space-y-3 text-neutral-400">
                    <p><strong className="text-white">Ubicación:</strong> Av. Principal de Las Mercedes, Torre DISTMAH, Piso 7</p>
                    <p><strong className="text-white">Salas de entrenamiento:</strong> 3 aulas equipadas con 45 estaciones de trabajo</p>
                    <p><strong className="text-white">Equipos:</strong> Workstations HP Z2 con GPUs NVIDIA RTX A2000</p>
                    <p><strong className="text-white">Software:</strong> Suite completa Autodesk 2026 instalada</p>
                    <p><strong className="text-white">Conectividad:</strong> Internet dedicado 100 Mbps</p>
                  </div>
                </div>

                <div className="bg-neutral-900 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 text-white" />
                    Modalidades de Capacitación
                  </h3>
                  <ul className="space-y-2 text-neutral-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                      Presencial en nuestras instalaciones
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                      Virtual en vivo (Zoom/Teams)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                      In-house en oficinas del cliente
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                      Híbrido (presencial + virtual)
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-full bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-lg flex items-center justify-center min-h-[500px] border border-white/10">
                <div className="text-center p-8">
                  <Building2 className="w-24 h-24 text-white/30 mx-auto mb-4" />
                  <p className="text-neutral-300 text-lg">Instalaciones Modernas</p>
                  <p className="text-neutral-500 text-sm mt-2">Foto de oficinas y aulas de capacitación</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Reconocimientos y Certificaciones
              </h2>
              <p className="text-xl text-neutral-400">
                Orgullosamente respaldados por Autodesk
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Autodesk ATC',
                year: '2008 - Presente',
                description: 'Centro de Entrenamiento Autorizado oficial de Autodesk en Venezuela',
              },
              {
                title: 'Best Instructor Award',
                year: '2022',
                description: 'Antonio Nolivos reconocido como Mejor Instructor de Latinoamérica',
              },
              {
                title: 'Partner Excellence',
                year: '2020, 2021, 2023',
                description: 'Reconocimiento anual por excelencia en capacitación y satisfacción de estudiantes',
              },
            ].map((award, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-black rounded-lg border border-white/10 p-8 text-center hover:border-white/20 transition-all">
                  <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                  <p className="text-neutral-400 font-semibold text-sm mb-4">{award.year}</p>
                  <p className="text-neutral-500 text-sm">{award.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Únete a Nuestra Comunidad
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Forma parte de la red de profesionales certificados por DISTMAH ATC
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cursos">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-bold px-8">
                  Ver Cursos Disponibles
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
