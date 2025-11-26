'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { UsersTable } from '@/components/admin/UsersTable';
import { CoursesTable } from '@/components/admin/CoursesTable';
import { AnalyticsCharts } from '@/components/admin/AnalyticsCharts';
import {
  Users,
  BookOpen,
  DollarSign,
  GraduationCap,
} from 'lucide-react';
import { toast } from 'sonner';

interface Stats {
  totalUsers: number;
  totalCourses: number;
  totalEnrollments: number;
  totalRevenue: number;
  newUsersThisWeek: number;
  activeEnrollments: number;
  usersByRole: {
    STUDENT: number;
    INSTRUCTOR: number;
    ADMIN: number;
  };
  coursesByStatus: {
    DRAFT: number;
    PUBLISHED: number;
    ARCHIVED: number;
  };
}

interface Analytics {
  enrollmentsByMonth: Array<{
    month: string;
    count: number;
    revenue: number;
  }>;
  topCourses: Array<{
    id: string;
    title: string;
    enrollments: number;
  }>;
  recentEnrollments: Array<{
    id: string;
    studentName: string;
    studentEmail: string;
    courseName: string;
    amount: number;
    currency: string;
    enrolledAt: string;
  }>;
  userGrowth: Array<{
    month: string;
    students: number;
    instructors: number;
  }>;
  growthRate: number;
}

export function AdminDashboardClient() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [statsRes, analyticsRes] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/admin/analytics'),
      ]);

      if (!statsRes.ok || !analyticsRes.ok) {
        throw new Error('Error al cargar datos del dashboard');
      }

      const statsData = await statsRes.json();
      const analyticsData = await analyticsRes.json();

      setStats(statsData);
      setAnalytics(analyticsData);
    } catch (error: any) {
      toast.error(error.message || 'Error al cargar dashboard');
    } finally {
      setLoading(false);
    }
  };

  const loadUsers = async () => {
    try {
      const response = await fetch('/api/admin/users?limit=20');
      if (!response.ok) throw new Error('Error al cargar usuarios');
      const data = await response.json();
      setUsers(data.users);
    } catch (error: any) {
      toast.error(error.message || 'Error al cargar usuarios');
    }
  };

  const loadCourses = async () => {
    try {
      const response = await fetch('/api/admin/courses?limit=20');
      if (!response.ok) throw new Error('Error al cargar cursos');
      const data = await response.json();
      setCourses(data.courses);
    } catch (error: any) {
      toast.error(error.message || 'Error al cargar cursos');
    }
  };

  useEffect(() => {
    if (activeTab === 'users' && users.length === 0) {
      loadUsers();
    } else if (activeTab === 'courses' && courses.length === 0) {
      loadCourses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  if (loading || !stats || !analytics) {
    return (
      <div className="min-h-screen bg-white p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Panel de Administración</h1>
          <p className="text-gray-600 mt-1">
            Gestión completa de DISTMAH ATC - Authorized Training Center
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-100">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="courses">Cursos</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Total Usuarios"
                value={stats.totalUsers.toString()}
                icon={<Users className="w-5 h-5 text-blue-900" />}
                trend={`+${stats.newUsersThisWeek} esta semana`}
              />
              <StatsCard
                title="Total Cursos"
                value={stats.totalCourses.toString()}
                icon={<BookOpen className="w-5 h-5 text-blue-900" />}
                trend={`${stats.coursesByStatus.PUBLISHED} publicados`}
              />
              <StatsCard
                title="Inscripciones"
                value={stats.totalEnrollments.toString()}
                icon={<GraduationCap className="w-5 h-5 text-blue-900" />}
                trend={`${stats.activeEnrollments} activas`}
              />
              <StatsCard
                title="Ingresos Totales"
                value={`$${stats.totalRevenue.toLocaleString()}`}
                icon={<DollarSign className="w-5 h-5 text-blue-900" />}
                trend={`${analytics.growthRate > 0 ? '+' : ''}${analytics.growthRate}% este mes`}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribución por Rol</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Estudiantes</span>
                      <span className="text-sm font-medium text-black">
                        {stats.usersByRole.STUDENT}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Instructores</span>
                      <span className="text-sm font-medium text-black">
                        {stats.usersByRole.INSTRUCTOR}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Administradores</span>
                      <span className="text-sm font-medium text-black">
                        {stats.usersByRole.ADMIN}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cursos por Estado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Publicados</span>
                      <span className="text-sm font-medium text-black">
                        {stats.coursesByStatus.PUBLISHED}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Borradores</span>
                      <span className="text-sm font-medium text-black">
                        {stats.coursesByStatus.DRAFT}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Archivados</span>
                      <span className="text-sm font-medium text-black">
                        {stats.coursesByStatus.ARCHIVED}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cursos Más Vendidos</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Curso</TableHead>
                      <TableHead className="text-right">Inscripciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analytics.topCourses.slice(0, 5).map((course) => (
                      <TableRow key={course.id}>
                        <TableCell className="font-medium text-black">{course.title}</TableCell>
                        <TableCell className="text-right text-gray-700">
                          {course.enrollments}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsCharts
              enrollmentsByMonth={analytics.enrollmentsByMonth}
              userGrowth={analytics.userGrowth}
            />

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Inscripciones Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Estudiante</TableHead>
                      <TableHead>Curso</TableHead>
                      <TableHead>Monto</TableHead>
                      <TableHead>Fecha</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analytics.recentEnrollments.map((enrollment) => (
                      <TableRow key={enrollment.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-black">{enrollment.studentName}</p>
                            <p className="text-xs text-gray-600">{enrollment.studentEmail}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-700">{enrollment.courseName}</TableCell>
                        <TableCell className="font-medium text-gray-900">
                          ${enrollment.amount} {enrollment.currency}
                        </TableCell>
                        <TableCell className="text-gray-600 text-sm">
                          {new Date(enrollment.enrolledAt).toLocaleDateString('es-ES')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <UsersTable users={users} onUpdate={loadUsers} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Cursos</CardTitle>
              </CardHeader>
              <CardContent>
                <CoursesTable courses={courses} onUpdate={loadCourses} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
  trend,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <div className="p-2 bg-gray-100 rounded-full">{icon}</div>
        </div>
        <div className="flex items-end justify-between">
          <h3 className="text-2xl font-bold text-black">{value}</h3>
          {trend && (
            <span className="text-xs text-green-700 font-medium bg-green-50 px-2 py-1 rounded-full">
              {trend}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
