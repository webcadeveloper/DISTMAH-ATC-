import { NavbarSimple } from '@/components/layout/NavbarSimple';
import { Footer } from '@/components/layout/Footer';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarSimple />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
