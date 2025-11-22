import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/course/CourseCard';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import { ArrowRight, CheckCircle2, PlayCircle, Award } from 'lucide-react';

export default function LandingPage() {
    const featuredCourses = COURSES_2026.filter(c => c.featured).slice(0, 4);

    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-transparent" />

                <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                    <div className="max-w-2xl animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            Nuevos Cursos Autodesk 2026 Disponibles
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Domina el Futuro de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Ingeniería Digital</span>
                        </h1>

                        <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                            Universidad Autodesk Online DISTMAH. Certifícate en AutoCAD, Revit, Civil 3D y BIM con la última tecnología 2026. Clases en vivo, proyectos reales y certificación internacional.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/cursos">
                                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 h-14 text-lg shadow-lg shadow-primary-600/20 w-full sm:w-auto">
                                    Explorar Catálogo 2026
                                </Button>
                            </Link>
                            <Link href="/demo">
                                <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-white/5 text-white px-8 h-14 text-lg w-full sm:w-auto">
                                    <PlayCircle className="mr-2 w-5 h-5" /> Ver Demo Clase
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-sm text-neutral-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary-500" />
                                <span>Certificación Oficial Autodesk</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary-500" />
                                <span>Instructores ACI Expertos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="bg-white border-b border-neutral-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatItem number="15+" label="Años de Experiencia" />
                        <StatItem number="50k+" label="Estudiantes Certificados" />
                        <StatItem number="100+" label="Cursos Especializados" />
                        <StatItem number="4.9/5" label="Calificación Promedio" />
                    </div>
                </div>
            </section>

            {/* FEATURED COURSES */}
            <section className="py-20 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                                Cursos Destacados 2026
                            </h2>
                            <p className="text-neutral-600 max-w-2xl">
                                Actualízate con las últimas versiones de software Autodesk. Aprende las nuevas herramientas y flujos de trabajo de la versión 2026.
                            </p>
                        </div>
                        <Link href="/cursos" className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                            Ver todos los cursos <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link href="/cursos">
                            <Button variant="outline" className="w-full">
                                Ver todos los cursos
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-secondary-100 rounded-2xl transform -rotate-2" />
                            <div className="relative bg-neutral-900 rounded-xl overflow-hidden shadow-2xl aspect-video">
                                {/* Placeholder for video/image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                                    <PlayCircle className="w-20 h-20 text-white/50" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                                ¿Por qué estudiar en DISTMAH?
                            </h2>
                            <p className="text-neutral-600 mb-8 leading-relaxed">
                                Somos el único Centro de Entrenamiento Autorizado (ATC) con una plataforma educativa de última generación diseñada específicamente para la enseñanza de software de ingeniería y arquitectura.
                            </p>

                            <div className="space-y-6">
                                <FeatureItem
                                    title="Plataforma Educativa Propia"
                                    description="Accede a lecciones en video 4K, ejercicios prácticos y material descargable desde cualquier dispositivo."
                                />
                                <FeatureItem
                                    title="Licencias Educativas Incluidas"
                                    description="Te proporcionamos acceso a licencias educativas de Autodesk 2026 durante tu formación."
                                />
                                <FeatureItem
                                    title="Certificación Internacional"
                                    description="Al aprobar, recibes un certificado oficial de Autodesk con validez mundial y código de verificación."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ¿Listo para impulsar tu carrera profesional?
                    </h2>
                    <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-10">
                        Únete a más de 50,000 profesionales que han transformado su futuro con DISTMAH. Inscríbete hoy y obtén acceso inmediato.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/registro">
                            <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100 px-8 h-14 text-lg shadow-lg">
                                Crear Cuenta Gratis
                            </Button>
                        </Link>
                        <Link href="/contacto">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 h-14 text-lg">
                                Contactar Asesor
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function StatItem({ number, label }: { number: string; label: string }) {
    return (
        <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">{number}</div>
            <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">{label}</div>
        </div>
    );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                <Award className="w-6 h-6" />
            </div>
            <div>
                <h3 className="font-bold text-neutral-900 mb-2">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
