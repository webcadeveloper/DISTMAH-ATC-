'use client';

import { MessageSquare } from 'lucide-react';

export default function ForoPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-neutral-900">Foro</h1>
                <p className="text-neutral-600 mt-1">Participa en discusiones con otros estudiantes</p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 p-12 text-center">
                <MessageSquare className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Foro próximamente</h3>
                <p className="text-neutral-500">Esta funcionalidad estará disponible pronto</p>
            </div>
        </div>
    );
}
