'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function NavbarSimple() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className="w-full border-b border-white/10 sticky top-0 z-50 transition-all duration-300 bg-black backdrop-blur-xl shadow-lg"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/images/foot_logo.png"
                        alt="DISTMAH ATC"
                        width={180}
                        height={50}
                        className="h-12 w-auto brightness-200"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <Link href="/es/cursos" className="text-base font-semibold text-white hover:text-primary-400 transition-colors">
                        Cursos
                    </Link>
                    <Link href="/es/certificaciones" className="text-base font-semibold text-white hover:text-primary-400 transition-colors">
                        Certificaciones
                    </Link>
                    <Link href="/es/empresas" className="text-base font-semibold text-white hover:text-primary-400 transition-colors">
                        Empresas
                    </Link>
                    <Link href="/es/nosotros" className="text-base font-semibold text-white hover:text-primary-400 transition-colors">
                        Nosotros
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/es/login" className="hidden lg:block">
                        <Button variant="ghost" className="text-white font-medium hover:bg-white/10 border border-white/20">
                            Iniciar Sesión
                        </Button>
                    </Link>
                    <Link href="/es/registro">
                        <Button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg px-6">
                            Registrarse
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
