import { InstructorSidebar } from '@/components/layout/InstructorSidebar';

export default function InstructorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
            <InstructorSidebar />
            <main className="pl-64 min-h-screen">
                {children}
            </main>
        </div>
    );
}
