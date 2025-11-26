'use client';

import { Shield } from 'lucide-react';

export default function ConfiguracionAdminPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Roles y Permisos</h1>
                <p className="text-neutral-400 mt-1">Configura los roles y permisos del sistema</p>
            </div>

            <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-12 text-center">
                <Shield className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">Configuración de Seguridad</h3>
                <p className="text-neutral-500">Administra los roles y permisos de usuarios</p>
            </div>
        </div>
    );
}
