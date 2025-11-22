import Link from 'next/link';
import { LogoDistmah } from '@/components/brand/LogoDistmah';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <div className="bg-white/10 p-4 rounded-lg inline-block">
                            <LogoDistmah className="text-white" />
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Centro de Entrenamiento Autorizado Autodesk (ATC). Formando a la próxima generación de arquitectos e ingenieros con tecnología de vanguardia.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Youtube className="w-5 h-5" />} />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Cursos 2026</h3>
                        <ul className="space-y-4 text-neutral-400 text-sm">
                            <li><Link href="/cursos/autocad-2026" className="hover:text-primary-400 transition-colors">AutoCAD 2026</Link></li>
                            <li><Link href="/cursos/revit-architecture-2026" className="hover:text-primary-400 transition-colors">Revit Architecture 2026</Link></li>
                            <li><Link href="/cursos/civil-3d-2026" className="hover:text-primary-400 transition-colors">Civil 3D 2026</Link></li>
                            <li><Link href="/cursos/navisworks-2026" className="hover:text-primary-400 transition-colors">Navisworks Manage 2026</Link></li>
                            <li><Link href="/cursos/revit-mep-2026" className="hover:text-primary-400 transition-colors">Revit MEP 2026</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Comunidad</h3>
                        <ul className="space-y-4 text-neutral-400 text-sm">
                            <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog DISTMAH</Link></li>
                            <li><Link href="/eventos" className="hover:text-primary-400 transition-colors">Eventos y Webinars</Link></li>
                            <li><Link href="/foro" className="hover:text-primary-400 transition-colors">Foro de Estudiantes</Link></li>
                            <li><Link href="/instructores" className="hover:text-primary-400 transition-colors">Nuestros Instructores</Link></li>
                            <li><Link href="/empleo" className="hover:text-primary-400 transition-colors">Bolsa de Trabajo</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Contacto</h3>
                        <ul className="space-y-4 text-neutral-400 text-sm">
                            <li>
                                <span className="block text-white font-medium mb-1">Email</span>
                                <a href="mailto:info@distmah.com" className="hover:text-primary-400">info@distmah.com</a>
                            </li>
                            <li>
                                <span className="block text-white font-medium mb-1">Teléfono</span>
                                <a href="tel:+584121234567" className="hover:text-primary-400">+58 412 123 4567</a>
                            </li>
                            <li>
                                <span className="block text-white font-medium mb-1">Dirección</span>
                                Calle Principal, Edificio DISTMAH, Piso 2<br />
                                Caracas, Venezuela
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-xs">
                        © 2026 DISTMAH. Todos los derechos reservados. Autodesk, AutoCAD, Revit son marcas registradas de Autodesk, Inc.
                    </p>
                    <div className="flex gap-6 text-xs text-neutral-500">
                        <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
                        <Link href="/terminos" className="hover:text-white">Términos</Link>
                        <Link href="/cookies" className="hover:text-white">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-600 hover:text-white transition-all"
        >
            {icon}
        </a>
    );
}
