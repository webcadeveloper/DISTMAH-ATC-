'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Calendar,
    FileText,
    Settings,
    LogOut,
    FolderOpen,
    BarChart,
    UserPlus
} from 'lucide-react';
import { LogoDistmah } from '@/components/brand/LogoDistmah';
import { Button } from '@/components/ui/button';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/es/instructor/dashboard' },
    { icon: BookOpen, label: 'Mis Cursos', href: '/es/instructor/cursos' },
    { icon: FolderOpen, label: 'Archivos', href: '/es/instructor/archivos' },
    { icon: Users, label: 'Estudiantes', href: '/es/instructor/estudiantes' },
    { icon: UserPlus, label: 'Usuarios M365', href: '/es/instructor/usuarios' },
    { icon: Calendar, label: 'Clases en Vivo', href: '/es/instructor/clases' },
    { icon: FileText, label: 'Tareas y Examenes', href: '/es/instructor/evaluaciones' },
    { icon: BarChart, label: 'Reportes', href: '/es/instructor/reportes' },
];

export function InstructorSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 h-screen flex flex-col fixed left-0 top-0 z-40">
            <div className="p-6 border-b border-neutral-100 dark:border-neutral-800">
                <Link href="/es/instructor/dashboard">
                    <LogoDistmah variant="horizontal" className="scale-90 origin-left" />
                </Link>
            </div>

            <div className="flex-grow py-6 px-4 overflow-y-auto">
                <div className="mb-6">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 px-2">
                        Instructor Panel
                    </p>
                    <nav className="space-y-1">
                        {sidebarItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return (
                                <Link key={item.href} href={item.href}>
                                    <div className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
                                        isActive
                                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                                            : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
                                    )}>
                                        <item.icon className={cn("w-5 h-5", isActive ? "text-blue-600 dark:text-blue-400" : "text-neutral-400")} />
                                        {item.label}
                                    </div>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 px-2">
                        Configuración
                    </p>
                    <nav className="space-y-1">
                        <Link href="/es/instructor/perfil">
                            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white text-sm font-medium">
                                <Settings className="w-5 h-5 text-neutral-400" />
                                Mi Perfil
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>

            <div className="p-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold">
                        IN
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium text-neutral-900 dark:text-white truncate">Instructor Demo</p>
                        <p className="text-xs text-neutral-500 truncate">instructor@distmah.com</p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="w-full justify-start text-neutral-600 dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-800"
                    size="sm"
                    onClick={() => signOut({ callbackUrl: '/es/login' })}
                >
                    <LogOut className="w-4 h-4 mr-2" /> Cerrar Sesión
                </Button>
            </div>
        </aside>
    );
}
