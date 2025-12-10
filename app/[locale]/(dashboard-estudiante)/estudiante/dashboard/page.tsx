import StudentDashboardClient from '@/components/StudentDashboardClient';

export default function StudentDashboard() {
    const userId = 'mock-user-id';

    return <StudentDashboardClient userId={userId} />;
}
