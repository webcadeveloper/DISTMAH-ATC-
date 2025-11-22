'use client';

import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/course/CourseCard';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import { ArrowRight, CheckCircle2, Users, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function LandingPage() {
    const t = useTranslations('Landing');
    const featuredCourses = COURSES_2026.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-neutral-900">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-15"
                >
                    <source src="/video/Nov_22__1157_22s_202511221212_7b7br.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-slide-up">
                        {t('heroTitle')}
                    </h1>

                    <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto animate-slide-up delay-100">
                        {t('heroSubtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
                        <Link href="/cursos">
                            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 h-14 text-lg shadow-xl shadow-primary-600/20">
                                {t('ctaStart')} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/catalogo">
                            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-neutral-900 px-8 h-14 text-lg font-semibold shadow-lg">
                                {t('ctaCatalog')}
                            </Button>
                        </Link>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/20 animate-fade-in delay-300">
                        {[
                            { label: t('statsStudents'), value: "5,000+", icon: Users },
                            { label: t('statsCourses'), value: "120+", icon: BookOpen },
                            { label: t('statsInstructors'), value: "35+", icon: Award },
                            { label: "Certificaciones", value: "100%", icon: CheckCircle2 },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="p-5 bg-white/20 backdrop-blur-md rounded-full mb-4 shadow-2xl ring-2 ring-white/30">
                                    <stat.icon className="w-10 h-10 text-white drop-shadow-lg" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-2xl">{stat.value}</div>
                                <div className="text-sm text-white/90 font-bold uppercase tracking-wider drop-shadow-md">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED COURSES */}
            <section className="py-24 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-4">{t('featuredCourses')}</h2>
                            <p className="text-neutral-600 max-w-xl">
                                Explora nuestra selección de cursos más demandados, actualizados a las últimas versiones de Autodesk.
                            </p>
                        </div>
                        <Link href="/cursos">
                            <Button variant="ghost" className="text-primary-600 hover:text-primary-700">
                                {t('viewAllCourses')} <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                                ¿Por qué elegir DISTMAH?
                            </h2>
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Certificación Oficial Autodesk",
                                        desc: "Al finalizar cada curso recibirás un certificado reconocido internacionalmente validando tus habilidades."
                                    },
                                    {
                                        title: "Instructores Expertos",
                                        desc: "Aprende de profesionales certificados con años de experiencia en la industria AEC."
                                    },
                                    {
                                        title: "Aprendizaje Flexible",
                                        desc: "Accede al contenido 24/7 desde cualquier dispositivo y avanza a tu propio ritmo."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                                            <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-neutral-100 overflow-hidden relative z-10">
                                {/* Placeholder for Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-200">
                                    Imagen Promocional
                                </div>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary-100 rounded-full blur-3xl opacity-50 z-0" />
                            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 z-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-primary-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Comienza tu carrera profesional hoy
                    </h2>
                    <p className="text-xl text-primary-100 mb-10">
                        Únete a más de 5,000 estudiantes que ya están transformando su futuro con DISTMAH.
                    </p>
                    <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100 h-14 px-8 text-lg font-bold">
                        Crear Cuenta Gratuita
                    </Button>
                </div>
            </section>
        </div>
    );
}
