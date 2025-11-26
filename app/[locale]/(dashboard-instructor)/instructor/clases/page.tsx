'use client';

import { Calendar } from 'lucide-react';

export default function ClasesPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-neutral-900">Clases en Vivo</h1>
                <p className="text-neutral-600 mt-1">Programa y gestiona tus clases en vivo</p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 p-12 text-center">
                <Calendar className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Sin clases programadas</h3>
                <p className="text-neutral-500">Programa una clase en vivo para tus estudiantes</p>
            </div>
        </div>
    );
}
