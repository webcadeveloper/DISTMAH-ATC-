'use client';

import { CreditCard } from 'lucide-react';

export default function PagosAdminPage() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Pagos</h1>
                <p className="text-neutral-400 mt-1">Gestiona los pagos y transacciones</p>
            </div>

            <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-12 text-center">
                <CreditCard className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">Gestión de Pagos</h3>
                <p className="text-neutral-500">Administra las transacciones y suscripciones</p>
            </div>
        </div>
    );
}
