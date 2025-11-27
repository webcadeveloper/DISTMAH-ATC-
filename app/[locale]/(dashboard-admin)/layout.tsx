import { AdminSidebar } from '@/components/layout/AdminSidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
            <AdminSidebar />
            <main className="pl-64 min-h-screen">
                {children}
            </main>
        </div>
    );
}
