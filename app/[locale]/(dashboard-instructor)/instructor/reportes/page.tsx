'use client';

import { BarChart } from 'lucide-react';

export default function ReportesPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-neutral-900">Reportes</h1>
                <p className="text-neutral-600 mt-1">Analiza el rendimiento de tus cursos</p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 p-12 text-center">
                <BarChart className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Sin datos</h3>
                <p className="text-neutral-500">Los reportes estarán disponibles cuando tengas estudiantes</p>
            </div>
        </div>
    );
}
