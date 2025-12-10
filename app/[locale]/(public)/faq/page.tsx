'use client';

import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, CreditCard, Monitor, Award } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqs: FAQItem[] = [
    {
        category: 'Cursos',
        question: '¿Qué incluyen los cursos?',
        answer: 'Todos nuestros cursos incluyen: videos HD de alta calidad, materiales descargables (archivos CAD, RVT, DWG de práctica), ejercicios prácticos, evaluaciones, acceso al foro de estudiantes, soporte por chat, y certificado oficial de DISTMAH ATC al completar el curso. Además, tienes acceso de por vida al contenido del curso.',
    },
    {
        category: 'Cursos',
        question: '¿Cuánto dura cada curso?',
        answer: 'La duración varía según el nivel del curso. Los cursos básicos tienen entre 20-30 horas de contenido, los intermedios 30-40 horas, y los avanzados 40-60 horas. Sin embargo, al tener acceso de por vida, puedes aprender a tu propio ritmo sin presiones de tiempo.',
    },
    {
        category: 'Cursos',
        question: '¿Recibiré un certificado?',
        answer: 'Sí, al completar exitosamente un curso (aprobar todas las evaluaciones y exámenes con 70% o más), recibirás un certificado oficial de DISTMAH ATC. Este certificado valida tu formación en software Autodesk y es reconocido por empresas del sector. Puedes descargarlo en PDF y compartirlo en LinkedIn.',
    },
    {
        category: 'Cursos',
        question: '¿Los cursos son en vivo o grabados?',
        answer: 'Los cursos son 100% online y pregrabados, lo que te permite aprender a tu ritmo. Sin embargo, ofrecemos sesiones en vivo mensuales opcionales a través de Microsoft Teams donde puedes hacer preguntas a los instructores y resolver dudas en tiempo real.',
    },
    {
        category: 'Cursos',
        question: '¿Puedo ver las clases a mi ritmo?',
        answer: 'Absolutamente. Tienes acceso de por vida al contenido del curso, por lo que puedes verlo cuando quieras, a la velocidad que prefieras, y repetir las lecciones cuantas veces necesites. No hay límites de tiempo ni fechas de expiración.',
    },
    {
        category: 'Cursos',
        question: '¿Necesito conocimientos previos?',
        answer: 'Depende del nivel del curso. Los cursos marcados como "Básico" están diseñados para principiantes sin experiencia previa. Los cursos "Intermedios" requieren conocimientos básicos del software. Los cursos "Avanzados" asumen que ya manejas las funciones básicas e intermedias. Revisa los prerrequisitos de cada curso en su página de descripción.',
    },
    {
        category: 'Pagos',
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos múltiples métodos de pago: tarjetas de crédito/débito internacionales (Visa, Mastercard, American Express) a través de Stripe, PayPal, transferencias bancarias, Zelle, y pago móvil en Venezuela. Todos los precios se muestran en USD, pero puedes pagar en tu moneda local.',
    },
    {
        category: 'Pagos',
        question: '¿Hay garantía de devolución?',
        answer: 'Sí, ofrecemos garantía de devolución del 100% dentro de los primeros 30 días si no estás satisfecho con el curso. No hacemos preguntas. Simplemente contáctanos y te reembolsaremos tu dinero. Queremos que estés completamente seguro de tu inversión en educación.',
    },
    {
        category: 'Pagos',
        question: '¿Puedo pagar en cuotas?',
        answer: 'Sí, ofrecemos planes de pago en cuotas para cursos de más de $200 USD. Puedes dividir el pago en hasta 3 cuotas mensuales sin intereses. Esta opción está disponible durante el checkout. Para Venezuela, también aceptamos pagos fraccionados en bolívares.',
    },
    {
        category: 'Pagos',
        question: '¿Los precios incluyen IVA?',
        answer: 'Los precios mostrados son finales y ya incluyen todos los impuestos aplicables según tu país. No habrá cargos adicionales al momento del pago. Lo que ves es lo que pagas.',
    },
    {
        category: 'Plataforma',
        question: '¿Cómo accedo al curso después de comprarlo?',
        answer: 'Inmediatamente después de completar tu pago, recibirás un email de confirmación con tus credenciales de acceso. Inicia sesión en distmah-atc.com, ve a "Mis Cursos" en tu dashboard de estudiante, y encontrarás tu curso listo para empezar. El acceso es instantáneo.',
    },
    {
        category: 'Plataforma',
        question: '¿Necesito instalar Autodesk para tomar el curso?',
        answer: 'Sí, para aprovechar al máximo los cursos y realizar los ejercicios prácticos, necesitarás tener instalado el software Autodesk correspondiente (AutoCAD, Revit, Civil 3D, etc.). Puedes descargar versiones de prueba gratuitas de 30 días desde autodesk.com, o usar licencias educativas si eres estudiante. Te proporcionamos una guía de instalación.',
    },
    {
        category: 'Plataforma',
        question: '¿Puedo descargar los videos?',
        answer: 'Los videos no están disponibles para descarga para proteger los derechos de autor y garantizar que siempre tengas acceso a la versión más actualizada del contenido. Sin embargo, puedes verlos en streaming ilimitado desde cualquier dispositivo con internet. Optimizamos los videos para funcionar incluso con conexiones lentas.',
    },
    {
        category: 'Plataforma',
        question: '¿Hay soporte técnico?',
        answer: 'Sí, tenemos soporte técnico disponible de lunes a viernes de 9am a 6pm (hora de Venezuela). Puedes contactarnos por email, chat en vivo, o a través del foro del curso. Respondemos dudas sobre el contenido del curso, problemas técnicos de la plataforma, y preguntas generales. El tiempo promedio de respuesta es de 24 horas.',
    },
    {
        category: 'Plataforma',
        question: '¿Puedo acceder desde mi teléfono o tablet?',
        answer: 'Sí, la plataforma es 100% responsive y funciona perfectamente en computadoras, tablets y smartphones. Sin embargo, para realizar los ejercicios prácticos de Autodesk, necesitarás una computadora con Windows ya que los software Autodesk no están disponibles para móviles.',
    },
    {
        category: 'Certificación',
        question: '¿El certificado es oficial de Autodesk?',
        answer: 'El certificado que emitimos es oficial de DISTMAH ATC como Authorized Training Center de Autodesk. Esto significa que estamos autorizados por Autodesk para impartir capacitación oficial. El certificado valida que completaste formación oficial de Autodesk en un centro autorizado. No es un certificado de certificación profesional de Autodesk (como Autodesk Certified Professional), pero sí acredita tu formación.',
    },
    {
        category: 'Certificación',
        question: '¿Cómo obtengo el certificado?',
        answer: 'Para obtener tu certificado debes: (1) Completar todas las lecciones del curso, (2) Aprobar todas las evaluaciones con mínimo 70%, (3) Completar el examen final con mínimo 70%. Una vez cumplidos estos requisitos, tu certificado se generará automáticamente en formato PDF y estará disponible en tu dashboard para descargar e imprimir.',
    },
    {
        category: 'Certificación',
        question: '¿El certificado tiene validez internacional?',
        answer: 'Sí, como DISTMAH es un Authorized Training Center oficial de Autodesk, nuestros certificados son reconocidos internacionalmente en la industria AEC (Arquitectura, Ingeniería y Construcción). Miles de empresas en más de 100 países reconocen la formación de centros autorizados Autodesk. Puedes incluir tu certificado en tu CV y perfil de LinkedIn.',
    },
    {
        category: 'Certificación',
        question: '¿Puedo tomar el examen de certificación profesional de Autodesk?',
        answer: 'Nuestros cursos te preparan para los exámenes de certificación profesional de Autodesk (Autodesk Certified Professional). Sin embargo, el examen de certificación profesional es independiente y debes registrarte directamente con Autodesk/Certiport para tomarlo (tiene un costo adicional de aproximadamente $150 USD). Te proporcionamos recursos y guías para prepararte para estos exámenes.',
    },
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = [
        { name: 'Cursos', icon: BookOpen, color: 'text-blue-600' },
        { name: 'Pagos', icon: CreditCard, color: 'text-green-600' },
        { name: 'Plataforma', icon: Monitor, color: 'text-purple-600' },
        { name: 'Certificación', icon: Award, color: 'text-yellow-600' },
    ];

    const filteredFaqs = faqs.filter((faq) => {
        const matchesSearch =
            searchQuery === '' ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const groupedFaqs = categories.map((category) => ({
        ...category,
        items: filteredFaqs.filter((faq) => faq.category === category.name),
    }));

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Preguntas Frecuentes
                    </h1>
                    <p className="text-xl text-blue-100 mb-8">
                        Encuentra respuestas rápidas a las preguntas más comunes sobre nuestros cursos
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                            <Input
                                type="text"
                                placeholder="Buscar preguntas..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 pr-4 py-6 text-lg bg-white"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filters */}
            <div className="border-b border-neutral-200 bg-white sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 overflow-x-auto py-4">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                                selectedCategory === null
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }`}
                        >
                            Todas
                        </button>
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.name}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-2 ${
                                        selectedCategory === category.name
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* FAQ Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {filteredFaqs.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-neutral-600 text-lg">
                            No se encontraron preguntas que coincidan con tu búsqueda.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory(null);
                            }}
                            className="text-blue-600 hover:text-blue-700 font-medium mt-4"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {groupedFaqs.map(
                            (category) =>
                                category.items.length > 0 && (
                                    <div key={category.name}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <category.icon className={`w-6 h-6 ${category.color}`} />
                                            <h2 className="text-2xl font-bold text-neutral-900">
                                                {category.name}
                                            </h2>
                                            <span className="text-sm text-neutral-500">
                                                ({category.items.length})
                                            </span>
                                        </div>

                                        <Accordion type="single" collapsible className="space-y-2">
                                            {category.items.map((faq, index) => (
                                                <AccordionItem
                                                    key={`${category.name}-${index}`}
                                                    value={`${category.name}-${index}`}
                                                    className="border border-neutral-200 rounded-lg px-6 bg-neutral-50"
                                                >
                                                    <AccordionTrigger className="text-left font-semibold text-neutral-900 hover:no-underline">
                                                        {faq.question}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-neutral-700 leading-relaxed">
                                                        {faq.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                )
                        )}
                    </div>
                )}
            </div>

            {/* Contact Section */}
            <div className="bg-neutral-50 border-t border-neutral-200 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                        ¿No encuentras lo que buscas?
                    </h3>
                    <p className="text-neutral-600 mb-6">
                        Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
                        >
                            Contactar Soporte
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-neutral-700 border border-neutral-300 rounded-lg hover:bg-neutral-50 font-medium transition-colors"
                        >
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
