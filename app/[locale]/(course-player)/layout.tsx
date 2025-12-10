import { CoursePlayerSidebar } from '@/components/course-player/CoursePlayerSidebar';

export default function CoursePlayerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
            <CoursePlayerSidebar />
            <main className="pl-80 min-h-screen">
                {children}
            </main>
        </div>
    );
}
