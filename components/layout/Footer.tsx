'use client';

import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {

    return (
        <footer className="text-white pt-20 pb-10 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="mb-6">
                            <Image
                                src="/images/foot_logo.png"
                                alt="GRUPO DISTMAH"
                                width={180}
                                height={60}
                                className="h-16 w-auto brightness-200"
                            />
                        </div>
                        <p className="text-white mb-6">
                            Centro de Entrenamiento Autorizado Autodesk (ATC). Formando a la próxima generación de profesionales AEC.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-white/70 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-4">
                            <li><Link href="/cursos" className="text-white/70 hover:text-white transition-colors">Cursos</Link></li>
                            <li><Link href="/certificaciones" className="text-white/70 hover:text-white transition-colors">Certificaciones</Link></li>
                            <li><Link href="/empresas" className="text-white/70 hover:text-white transition-colors">Empresas</Link></li>
                            <li><Link href="/nosotros" className="text-white/70 hover:text-white transition-colors">Nosotros</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/70">
                                <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                                <span>Av. Principal, Edificio DISTMAH, Piso 3, Caracas, Venezuela</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/70">
                                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                                <span>+58 (212) 555-0123</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/70">
                                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                                <span>info@distmah.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link href="/privacidad" className="text-white/70 hover:text-white transition-colors">Privacidad</Link></li>
                            <li><Link href="/terminos" className="text-white/70 hover:text-white transition-colors">Términos y Condiciones</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/70 text-sm">
                        &copy; {new Date().getFullYear()} DISTMAH ATC. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
