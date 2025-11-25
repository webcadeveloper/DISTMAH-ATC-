'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, BookOpen, Award, Building2, Users } from 'lucide-react';

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
                        ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/20'
                        : 'bg-black'
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
                            <div className="relative bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-1.5 border border-white/10">
                                <div
                                    ref={indicatorRef}
                                    className="absolute top-0 left-0 w-[20%] h-full transition-transform duration-500 ease-out pointer-events-none"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#1F4E79] rounded-b-full shadow-[0_4px_12px_rgba(31,78,121,0.6)]" />
                                    <div className="absolute inset-1 rounded-xl bg-[#1F4E79]/10" />
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
                                                        ? 'text-[#1F4E79]'
                                                        : 'text-neutral-400 hover:text-white'
                                                }`}
                                            >
                                                <Icon
                                                    className={`w-5 h-5 mb-1 transition-all duration-300 ${
                                                        isActive ? 'fill-[#1F4E79] stroke-[#1F4E79]' : ''
                                                    }`}
                                                    strokeWidth={isActive ? 1.5 : 2}
                                                />
                                                <span className={`text-xs font-semibold transition-colors duration-300 ${
                                                    isActive ? 'text-[#1F4E79]' : ''
                                                }`}>
                                                    {item.label}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link href="/es/login" className="hidden sm:block">
                                <Button
                                    variant="ghost"
                                    className="text-white font-medium hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300"
                                >
                                    Iniciar Sesión
                                </Button>
                            </Link>
                            <Link href="/es/registro" className="hidden sm:block">
                                <Button className="bg-[#1F4E79] hover:bg-[#003366] text-white font-semibold shadow-lg shadow-[#1F4E79]/30 hover:shadow-[#003366]/40 px-6 transition-all duration-300">
                                    Registrarse
                                </Button>
                            </Link>

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
                </div>

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${
                        mobileMenuOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'
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
                                            ? 'bg-[#1F4E79]/20 text-[#1F4E79] border-l-4 border-[#1F4E79]'
                                            : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#1F4E79]' : ''}`} />
                                    <span className="font-semibold">{item.label}</span>
                                </Link>
                            );
                        })}

                        <div className="pt-4 mt-4 border-t border-white/10 flex gap-3">
                            <Link href="/es/login" className="flex-1">
                                <Button
                                    variant="ghost"
                                    className="w-full text-white font-medium hover:bg-white/10 border border-white/20"
                                >
                                    Iniciar Sesión
                                </Button>
                            </Link>
                            <Link href="/es/registro" className="flex-1">
                                <Button className="w-full bg-[#1F4E79] hover:bg-[#003366] text-white font-semibold">
                                    Registrarse
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
