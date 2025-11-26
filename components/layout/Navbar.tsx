'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { animate, createScope } from 'animejs';
import { Button } from '@/components/ui/button';
import { LogoDistmah } from '@/components/brand/LogoDistmah';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Navbar() {
    const t = useTranslations('Navbar');
    const tCommon = useTranslations('Common');
    const navRef = useRef<HTMLElement>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!navRef.current) return;

        const scope = createScope({ root: navRef }).add(() => {
            // Animación inicial del navbar
            animate('nav', {
                translateY: [-100, 0],
                opacity: [0, 1],
                duration: 600,
                ease: 'outExpo',
            });

            // Animación de items del menú con stagger
            animate('.nav-item', {
                translateY: [-20, 0],
                opacity: [0, 1],
                duration: 500,
                delay: (el: any, i: number) => 100 * i,
                ease: 'outExpo',
            });
        });

        // Efecto de scroll
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            scope.revert();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            className={`w-full border-b sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/98 backdrop-blur-lg border-neutral-200 shadow-xl'
                    : 'bg-white border-neutral-100'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
                <Link href="/" className="nav-item flex-shrink-0">
                    <LogoDistmah variant="horizontal" />
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <Link href="/cursos" className="nav-item text-base font-semibold text-neutral-700 hover:text-primary-600 transition-colors">
                        {t('courses')}
                    </Link>
                    <Link href="/certificaciones" className="nav-item text-base font-semibold text-neutral-700 hover:text-primary-600 transition-colors">
                        {t('certifications')}
                    </Link>
                    <Link href="/empresas" className="nav-item text-base font-semibold text-neutral-700 hover:text-primary-600 transition-colors">
                        {t('companies')}
                    </Link>
                    <Link href="/nosotros" className="nav-item text-base font-semibold text-neutral-700 hover:text-primary-600 transition-colors">
                        {t('about')}
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <Link href="/es/instructor/dashboard" className="nav-item hidden lg:block">
                        <Button variant="ghost" className="text-neutral-700 font-medium hover:bg-neutral-100">
                            {tCommon('login')}
                        </Button>
                    </Link>
                    <Link href="/es/estudiante/dashboard" className="nav-item">
                        <Button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-600/25 px-6">
                            {tCommon('register')}
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
