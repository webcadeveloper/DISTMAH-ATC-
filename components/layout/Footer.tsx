'use client';

import { LogoDistmah } from '@/components/brand/LogoDistmah';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');
    const tNav = useTranslations('Navbar');

    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="mb-6">
                            <LogoDistmah variant="horizontal" className="text-white" />
                        </div>
                        <p className="text-neutral-400 mb-6">
                            Centro de Entrenamiento Autorizado Autodesk (ATC). Formando a la próxima generación de profesionales AEC.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-4">
                            <li><Link href="/cursos" className="text-neutral-400 hover:text-white transition-colors">{tNav('courses')}</Link></li>
                            <li><Link href="/certificaciones" className="text-neutral-400 hover:text-white transition-colors">{tNav('certifications')}</Link></li>
                            <li><Link href="/empresas" className="text-neutral-400 hover:text-white transition-colors">{tNav('companies')}</Link></li>
                            <li><Link href="/nosotros" className="text-neutral-400 hover:text-white transition-colors">{tNav('about')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">{t('contact')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <span>Av. Principal, Edificio DISTMAH, Piso 3, Caracas, Venezuela</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <span>+58 (212) 555-0123</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                <span>info@distmah.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link href="/privacidad" className="text-neutral-400 hover:text-white transition-colors">{t('privacy')}</Link></li>
                            <li><Link href="/terminos" className="text-neutral-400 hover:text-white transition-colors">{t('terms')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-sm">
                        &copy; {new Date().getFullYear()} DISTMAH ATC. {t('rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
