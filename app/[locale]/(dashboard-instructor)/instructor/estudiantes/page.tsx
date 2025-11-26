'use client';

import { Users } from 'lucide-react';

export default function EstudiantesPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-neutral-900">Estudiantes</h1>
                <p className="text-neutral-600 mt-1">Gestiona los estudiantes de tus cursos</p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 p-12 text-center">
                <Users className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Sin estudiantes</h3>
                <p className="text-neutral-500">Aún no tienes estudiantes matriculados</p>
            </div>
        </div>
    );
}
