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
                    ? 'bg-white/95 backdrop-blur-md border-neutral-200 shadow-lg'
                    : 'bg-white border-neutral-200'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="nav-item">
                    <LogoDistmah variant="horizontal" className="scale-90" />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/cursos" className="nav-item text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
                        {t('courses')}
                    </Link>
                    <Link href="/certificaciones" className="nav-item text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
                        {t('certifications')}
                    </Link>
                    <Link href="/empresas" className="nav-item text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
                        {t('companies')}
                    </Link>
                    <Link href="/nosotros" className="nav-item text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
                        {t('about')}
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <Link href="/instructor/dashboard" className="nav-item">
                        <Button variant="ghost" className="text-neutral-600">
                            {tCommon('login')}
                        </Button>
                    </Link>
                    <Link href="/estudiante/dashboard" className="nav-item">
                        <Button className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20">
                            {tCommon('register')}
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
