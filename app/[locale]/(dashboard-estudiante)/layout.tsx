import { StudentSidebar } from '@/components/layout/StudentSidebar';

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-50">
            <StudentSidebar />
            <main className="pl-64 min-h-screen">
                {children}
            </main>
        </div>
    );
}
