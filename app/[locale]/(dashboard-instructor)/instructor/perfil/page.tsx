'use client';

import { Settings } from 'lucide-react';

export default function PerfilPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-neutral-900">Mi Perfil</h1>
                <p className="text-neutral-600 mt-1">Administra tu información de instructor</p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 p-12 text-center">
                <Settings className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Configuración de perfil</h3>
                <p className="text-neutral-500">Próximamente podrás editar tu información</p>
            </div>
        </div>
    );
}
