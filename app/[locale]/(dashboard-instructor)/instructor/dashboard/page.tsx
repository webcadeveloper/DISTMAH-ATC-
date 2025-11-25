import { Suspense } from 'react';
import InstructorDashboardClient from '@/components/InstructorDashboardClient';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function InstructorDashboard() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-[400px]">
                <LoadingSpinner size="lg" />
            </div>
        }>
            <InstructorDashboardClient />
        </Suspense>
    );
}
