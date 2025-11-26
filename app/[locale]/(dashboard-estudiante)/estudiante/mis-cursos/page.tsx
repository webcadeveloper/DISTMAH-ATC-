'use client';

import { BookOpen } from 'lucide-react';

export default function MisCursosPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-neutral-900">Mis Cursos</h1>
                <p className="text-neutral-600 mt-1">Accede a todos tus cursos matriculados</p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 p-12 text-center">
                <BookOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-neutral-900 mb-2">No tienes cursos aún</h3>
                <p className="text-neutral-500">Explora nuestro catálogo y matricúlate en un curso</p>
            </div>
        </div>
    );
}
