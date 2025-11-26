'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, BookOpen, Award, Building2, Users, LogIn, UserPlus } from 'lucide-react';

const navItems = [
    { id: 'home', href: '/es', label: 'Inicio', icon: Home },
    { id: 'cursos', href: '/es/cursos', label: 'Cursos', icon: BookOpen },
    { id: 'certificaciones', href: '/es/certificaciones', label: 'Certificaciones', icon: Award },
    { id: 'empresas', href: '/es/empresas', label: 'Empresas', icon: Building2 },
    { id: 'nosotros', href: '/es/nosotros', label: 'Nosotros', icon: Users },
];

export function NavbarSimple() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const pathname = usePathname();
    const indicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const currentIndex = navItems.findIndex(item => {
            if (item.href === '/es' && (pathname === '/es' || pathname === '/')) {
                return true;
            }
            return pathname?.startsWith(item.href) && item.href !== '/es';
        });
        setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
    }, [pathname]);

    useEffect(() => {
        if (indicatorRef.current) {
            const offset = activeIndex * 100;
            indicatorRef.current.style.transform = `translateX(${offset}%)`;
        }
    }, [activeIndex]);

    return (
        <>
            <nav
                className={`w-full sticky top-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? 'bg-neutral-900/70 backdrop-blur-2xl shadow-2xl shadow-black/30 border-b border-white/5'
                        : 'bg-neutral-900/50 backdrop-blur-xl border-b border-white/5'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-20 flex items-center justify-between">
                        <Link href="/es" className="flex-shrink-0 group">
                            <Image
                                src="/images/foot_logo.png"
                                alt="DISTMAH ATC"
                                width={180}
                                height={50}
                                className="h-12 w-auto brightness-200 transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </Link>

                        <div className="hidden lg:block">
                            <div className="relative bg-neutral-800/60 backdrop-blur-md rounded-2xl p-1.5 border border-white/10">
                                <div
                                    ref={indicatorRef}
                                    className="absolute top-0 left-0 w-[20%] h-full transition-transform duration-500 ease-out pointer-events-none"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-twilight rounded-b-full shadow-[0_4px_12px_rgba(29,145,208,0.6)]" />
                                    <div className="absolute inset-1 rounded-xl bg-twilight/10" />
                                </div>

                                <div className="relative flex">
                                    {navItems.map((item, index) => {
                                        const Icon = item.icon;
                                        const isActive = index === activeIndex;
                                        return (
                                            <Link
                                                key={item.id}
                                                href={item.href}
                                                onClick={() => setActiveIndex(index)}
                                                className={`relative flex flex-col items-center justify-center px-5 py-2.5 rounded-xl transition-all duration-300 min-w-[90px] ${
                                                    isActive
                                                        ? 'text-twilight-light'
                                                        : 'text-neutral-400 hover:text-white'
                                                }`}
                                            >
                                                <Icon
                                                    className={`w-5 h-5 mb-1 transition-all duration-300 ${
                                                        isActive ? 'fill-twilight/20 stroke-twilight-light' : ''
                                                    }`}
                                                    strokeWidth={isActive ? 1.5 : 2}
                                                />
                                                <span className={`text-xs font-semibold transition-colors duration-300 ${
                                                    isActive ? 'text-twilight-light' : ''
                                                }`}>
                                                    {item.label}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:flex items-center gap-2">
                            <div className="relative bg-neutral-800/60 backdrop-blur-md rounded-2xl p-1.5 border border-white/10 flex">
                                <Link
                                    href="/es/login"
                                    className="relative flex flex-col items-center justify-center px-5 py-2.5 rounded-xl transition-all duration-300 min-w-[90px] text-neutral-400 hover:text-white hover:bg-white/5"
                                >
                                    <LogIn className="w-5 h-5 mb-1" strokeWidth={2} />
                                    <span className="text-xs font-semibold">Iniciar Sesion</span>
                                </Link>
                                <Link
                                    href="/es/registro"
                                    className="relative flex flex-col items-center justify-center px-5 py-2.5 rounded-xl transition-all duration-300 min-w-[90px] bg-twilight/20 text-twilight-light hover:bg-twilight/30"
                                >
                                    <UserPlus className="w-5 h-5 mb-1 fill-twilight/20 stroke-twilight-light" strokeWidth={1.5} />
                                    <span className="text-xs font-semibold">Registrarse</span>
                                </Link>
                            </div>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${
                        mobileMenuOpen ? 'max-h-[500px] border-t border-white/10' : 'max-h-0'
                    }`}
                >
                    <div className="px-4 py-4 space-y-2 bg-neutral-900/95 backdrop-blur-xl">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = index === activeIndex;
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                        isActive
                                            ? 'bg-twilight/20 text-twilight-light border-l-4 border-twilight'
                                            : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? 'text-twilight-light' : ''}`} />
                                    <span className="font-semibold">{item.label}</span>
                                </Link>
                            );
                        })}

                        <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                            <Link
                                href="/es/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-neutral-400 hover:text-white hover:bg-white/5"
                            >
                                <LogIn className="w-5 h-5" />
                                <span className="font-semibold">Iniciar Sesion</span>
                            </Link>
                            <Link
                                href="/es/registro"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 bg-twilight/20 text-twilight-light"
                            >
                                <UserPlus className="w-5 h-5" />
                                <span className="font-semibold">Registrarse</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
