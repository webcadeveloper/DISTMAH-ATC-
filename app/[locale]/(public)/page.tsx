import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course/CourseCard";
import { COURSES_2026 } from "@/lib/courses-catalog-2026";
import { ArrowRight, CheckCircle2, Globe, Award, Users, Zap } from "lucide-react";
import Link from "next/link";
import { AnimatedElement } from "@/components/animations/AnimatedElement";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { AnimatedButton } from "@/components/ui/animated-button";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationStructuredData } from "@/lib/seo-metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'DISTMAH ATC - Universidad Autodesk | Cursos de AutoCAD, Revit, Civil 3D 2026',
  description: 'Centro de Entrenamiento Autorizado (ATC) de Autodesk en Venezuela. Cursos certificados de AutoCAD, Revit, Civil 3D, Navisworks 2026. Instructores certificados, metodología práctica, certificación internacional.',
  keywords: [
    'Autodesk',
    'AutoCAD 2026',
    'Revit 2026',
    'Civil 3D 2026',
    'Navisworks',
    'BIM',
    'CAD',
    'cursos Autodesk',
    'certificación Autodesk',
    'ATC Venezuela',
    'Universidad Autodesk',
    'DISTMAH',
  ],
  openGraph: {
    title: 'DISTMAH ATC - Universidad Autodesk',
    description: 'Cursos certificados de AutoCAD, Revit, Civil 3D 2026 con instructores expertos',
    url: 'https://distmah-atc.com',
    siteName: 'DISTMAH ATC',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DISTMAH ATC - Universidad Autodesk',
      },
    ],
    locale: 'es_VE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DISTMAH ATC - Universidad Autodesk',
    description: 'Cursos certificados de AutoCAD, Revit, Civil 3D 2026',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
    const orgData = generateOrganizationStructuredData({
      name: 'DISTMAH ATC - Universidad Autodesk',
      url: 'https://distmah-atc.com',
      logo: 'https://distmah-atc.com/images/logo.png',
      description: 'Centro de Entrenamiento Autorizado (ATC) de Autodesk en Venezuela. Ofrecemos cursos certificados de AutoCAD, Revit, Civil 3D y Navisworks con instructores certificados.',
      contactEmail: 'soporte@distmah.com.ve',
      socialMedia: {
        facebook: 'https://facebook.com/DISTMAH',
        twitter: 'https://twitter.com/DISTMAH_ATC',
        linkedin: 'https://linkedin.com/company/distmah',
      },
    });
    const featuredCourses = COURSES_2026.filter(course => course.level === 'Básico' || course.title.includes('Revit'));

    return (
        <>
            <JsonLd data={orgData} />
            <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section - Autodesk Style (Dark, Immersive) */}
            <section className="relative bg-neutral-900 text-white overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        key="hero-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-100"
                    >
                        <source src="/video/hero-video.mp4" type="video/mp4" />
                    </video>
                    {/* Dark overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
                    <div className="max-w-4xl mx-auto text-center">
                        <AnimatedElement animation={{ translateY: [20, 0], opacity: [0, 1] }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-primary-400 animate-pulse"></span>
                                <span className="text-sm font-medium tracking-wide text-primary-100">Catálogo 2026 Disponible</span>
                            </div>
                        </AnimatedElement>

                        <AnimatedElement animation={{ translateY: [30, 0], opacity: [0, 1] }} delay={100}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                                Diseña el Futuro <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                    Construye tu Carrera
                                </span>
                            </h1>
                        </AnimatedElement>

                        <AnimatedElement animation={{ translateY: [40, 0], opacity: [0, 1] }} delay={200}>
                            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                                Domina las herramientas líderes de la industria como AutoCAD, Revit y Civil 3D con certificación oficial y metodología profesional.
                            </p>
                        </AnimatedElement>

                        <AnimatedElement animation={{ translateY: [50, 0], opacity: [0, 1] }} delay={300}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link href="/cursos">
                                    <AnimatedButton size="lg" className="h-14 px-8 text-lg bg-primary-600 hover:bg-primary-500 text-white border-0 rounded-sm shadow-[0_0_20px_rgba(6,150,215,0.3)]">
                                        Explorar Cursos
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </AnimatedButton>
                                </Link>
                                <Link href="/contacto">
                                    <AnimatedButton variant="outline" size="lg" className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white rounded-sm backdrop-blur-sm">
                                        Hablar con un Asesor
                                    </AnimatedButton>
                                </Link>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>

                {/* Stats Strip */}
                <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { label: "Cursos Especializados", value: 12, suffix: "+" },
                                { label: "Estudiantes Certificados", value: 500, suffix: "+" },
                                { label: "Instructores Expertos", value: 10, suffix: "+" },
                                { label: "Satisfacción", value: 4.9, suffix: "/5", decimals: 1 }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                                        <AnimatedCounter to={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} duration={2500} />
                                    </span>
                                    <span className="text-sm text-neutral-400 uppercase tracking-wider font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Courses Section */}
            <section className="py-24 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">Cursos Destacados</h2>
                            <p className="text-lg text-neutral-600 max-w-2xl">
                                Inicia tu camino profesional con nuestros cursos más demandados. Actualizados a la versión 2026.
                            </p>
                        </div>
                        <Link href="/cursos">
                            <Button variant="ghost" className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 font-medium group">
                                Ver todos los cursos
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.slice(0, 6).map((course, index) => (
                            <CourseCard key={course.id} course={course} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition / Features */}
            <section className="py-24 bg-white border-t border-neutral-100">
                <div className="container mx-auto px-4">
                    <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                            ¿Por qué elegir DISTMAH?
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Somos un Centro de Entrenamiento Autorizado (ATC) de Autodesk. Tu certificación tiene validez internacional.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Award,
                                title: "Certificación Oficial",
                                description: "Al finalizar, recibes un certificado oficial de Autodesk con validez internacional, verificable en su base de datos global."
                            },
                            {
                                icon: Users,
                                title: "Instructores Certificados",
                                description: "Aprende de profesionales certificados por Autodesk (ACI) con años de experiencia en la industria y la docencia."
                            },
                            {
                                icon: Zap,
                                title: "Aprendizaje Práctico",
                                description: "Metodología basada en proyectos reales. No solo aprendes los comandos, aprendes a aplicar el software en flujos de trabajo profesionales."
                            }
                        ].map((feature, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} direction="up">
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <ScrollReveal direction="up" className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">¿Listo para empezar?</h2>
                        <p className="text-xl text-neutral-300 mb-10">
                            Únete a más de 500 profesionales que han impulsado su carrera con nosotros.
                        </p>
                        <Link href="/cursos">
                            <AnimatedButton size="lg" className="h-14 px-10 text-lg bg-white text-neutral-900 hover:bg-neutral-100 border-0 rounded-sm shadow-lg font-bold">
                                Ver Catálogo Completo
                            </AnimatedButton>
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
            </div>
        </>
    );
}
