import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoDistmah } from '@/components/brand/LogoDistmah';

export function Navbar() {
    return (
        <nav className="border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="hover:opacity-90 transition-opacity">
                    <LogoDistmah />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/cursos" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">
                        Cursos 2026
                    </Link>
                    <Link href="/certificaciones" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">
                        Certificaciones
                    </Link>
                    <Link href="/empresas" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">
                        Para Empresas
                    </Link>
                    <Link href="/nosotros" className="text-neutral-600 hover:text-primary-600 font-medium transition-colors">
                        Nosotros
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className="font-medium">
                            Iniciar Sesión
                        </Button>
                    </Link>
                    <Link href="/registro">
                        <Button className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/20">
                            Empezar Ahora
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
