'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4">
            <div className="max-w-2xl w-full text-center">
                <div className="mb-8">
                    <div className="relative inline-block">
                        <h1 className="text-[180px] font-bold text-neutral-200 leading-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                                <Search className="w-16 h-16 text-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Página no encontrada
                </h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
                    Lo sentimos, la página que buscas no existe o ha sido movida. Verifica la URL o regresa al inicio.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 min-w-[200px]">
                            <Home className="w-5 h-5 mr-2" />
                            Ir al Inicio
                        </Button>
                    </Link>
                    <Link href="/cursos">
                        <Button variant="outline" className="border-2 px-6 py-3 min-w-[200px]">
                            <Search className="w-5 h-5 mr-2" />
                            Ver Cursos
                        </Button>
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600 mb-4">Enlaces útiles:</p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/cursos" className="text-blue-600 hover:text-blue-700 font-medium">
                            Catálogo de Cursos
                        </Link>
                        <span className="text-neutral-300">•</span>
                        <Link href="/nosotros" className="text-blue-600 hover:text-blue-700 font-medium">
                            Sobre Nosotros
                        </Link>
                        <span className="text-neutral-300">•</span>
                        <Link href="/contacto" className="text-blue-600 hover:text-blue-700 font-medium">
                            Contacto
                        </Link>
                        <span className="text-neutral-300">•</span>
                        <Link href="/ayuda" className="text-blue-600 hover:text-blue-700 font-medium">
                            Centro de Ayuda
                        </Link>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-sm text-neutral-600 mb-4">Cursos populares:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Link href="/es/cursos/autocad-basico-2d-2026/overview">
                            <span className="inline-block px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm text-neutral-700 transition-colors">
                                AutoCAD Básico 2D 2026
                            </span>
                        </Link>
                        <Link href="/es/cursos/revit-2026-architecture/overview">
                            <span className="inline-block px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm text-neutral-700 transition-colors">
                                Revit Architecture 2026
                            </span>
                        </Link>
                        <Link href="/es/cursos/civil3d-2026/overview">
                            <span className="inline-block px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm text-neutral-700 transition-colors">
                                Civil 3D 2026
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="mt-12">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver a la página anterior
                    </button>
                </div>
            </div>
        </div>
    );
}
