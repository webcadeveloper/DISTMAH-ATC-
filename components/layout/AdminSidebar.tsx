'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    Users,
    BookOpen,
    Settings,
    LogOut,
    Shield,
    CreditCard,
    FileText
} from 'lucide-react';
import { LogoDistmah } from '@/components/brand/LogoDistmah';
import { Button } from '@/components/ui/button';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'Usuarios', href: '/admin/usuarios' },
    { icon: BookOpen, label: 'Cursos', href: '/admin/cursos' },
    { icon: CreditCard, label: 'Pagos', href: '/admin/pagos' },
    { icon: FileText, label: 'Reportes', href: '/admin/reportes' },
    { icon: Shield, label: 'Roles y Permisos', href: '/admin/configuracion' },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-neutral-900 text-white border-r border-neutral-800 h-screen flex flex-col fixed left-0 top-0 z-40">
            <div className="p-6 border-b border-neutral-800">
                <Link href="/admin/dashboard">
                    <LogoDistmah variant="horizontal" className="scale-90 origin-left text-white" />
                </Link>
            </div>

            <div className="flex-grow py-6 px-4 overflow-y-auto">
                <div className="mb-6">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 px-2">
                        Administración
                    </p>
                    <nav className="space-y-1">
                        {sidebarItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return (
                                <Link key={item.href} href={item.href}>
                                    <div className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
                                        isActive
                                            ? "bg-primary-600 text-white"
                                            : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                                    )}>
                                        <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-neutral-400")} />
                                        {item.label}
                                    </div>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            <div className="p-4 border-t border-neutral-800">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="w-10 h-10 rounded-full bg-red-900/50 flex items-center justify-center text-red-500 font-bold border border-red-900">
                        AD
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium text-white truncate">Admin Principal</p>
                        <p className="text-xs text-neutral-500 truncate">admin@distmah.com</p>
                    </div>
                </div>
                <Button variant="outline" className="w-full justify-start text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-white" size="sm">
                    <LogOut className="w-4 h-4 mr-2" /> Cerrar Sesión
                </Button>
            </div>
        </aside>
    );
}
