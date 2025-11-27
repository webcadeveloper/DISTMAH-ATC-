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
  MapPin,
  Workflow,
} from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
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

interface RecentRegistration {
  id: string;
  name: string;
  email: string;
  country: string | null;
  city: string | null;
  countryCode: string | null;
  createdAt: string;
}

export function AdminDashboardClient() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [recentRegistrations, setRecentRegistrations] = useState<RecentRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [statsRes, analyticsRes, registrationsRes] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/admin/analytics'),
        fetch('/api/admin/recent-registrations'),
      ]);

      if (!statsRes.ok || !analyticsRes.ok) {
        throw new Error('Error al cargar datos del dashboard');
      }

      const statsData = await statsRes.json();
      const analyticsData = await analyticsRes.json();

      setStats(statsData);
      setAnalytics(analyticsData);

      if (registrationsRes.ok) {
        const registrationsData = await registrationsRes.json();
        setRecentRegistrations(registrationsData.users || []);
      }
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
      <div className="min-h-screen bg-white dark:bg-neutral-900 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black dark:text-white">Panel de Administración</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">
              Gestión completa de DISTMAH ATC - Authorized Training Center
            </p>
          </div>
          <ThemeToggle />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-neutral-100 dark:bg-neutral-800">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="courses">Cursos</TabsTrigger>
            <TabsTrigger value="automations" className="flex items-center gap-1">
              <Workflow className="w-4 h-4" />
              Automatizaciones
            </TabsTrigger>
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
              <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-black dark:text-white">Distribución por Rol</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Estudiantes</span>
                      <span className="text-sm font-medium text-black dark:text-white">
                        {stats.usersByRole.STUDENT}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Instructores</span>
                      <span className="text-sm font-medium text-black dark:text-white">
                        {stats.usersByRole.INSTRUCTOR}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Administradores</span>
                      <span className="text-sm font-medium text-black dark:text-white">
                        {stats.usersByRole.ADMIN}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-black dark:text-white">Cursos por Estado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Publicados</span>
                      <span className="text-sm font-medium text-black dark:text-white">
                        {stats.coursesByStatus.PUBLISHED}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Borradores</span>
                      <span className="text-sm font-medium text-black dark:text-white">
                        {stats.coursesByStatus.DRAFT}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Archivados</span>
                      <span className="text-sm font-medium text-black dark:text-white">
                        {stats.coursesByStatus.ARCHIVED}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-black dark:text-white">Cursos Más Vendidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200 dark:border-gray-700">
                        <TableHead className="text-gray-700 dark:text-gray-300">Curso</TableHead>
                        <TableHead className="text-right text-gray-700 dark:text-gray-300">Inscripciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {analytics.topCourses.slice(0, 5).map((course) => (
                        <TableRow key={course.id} className="border-gray-200 dark:border-gray-700">
                          <TableCell className="font-medium text-black dark:text-white">{course.title}</TableCell>
                          <TableCell className="text-right text-gray-700 dark:text-gray-300">
                            {course.enrollments}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black dark:text-white">
                    <MapPin className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                    Últimos Registros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {recentRegistrations.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">No hay registros recientes</p>
                  ) : (
                    <div className="space-y-3">
                      {recentRegistrations.slice(0, 5).map((user) => (
                        <div key={user.id} className="flex items-start justify-between border-b border-gray-100 dark:border-gray-700 pb-3 last:border-0">
                          <div>
                            <p className="font-medium text-black dark:text-white text-sm">{user.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                            {(user.city || user.country) && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3" />
                                {[user.city, user.country].filter(Boolean).join(', ')}
                              </p>
                            )}
                          </div>
                          <span className="text-xs text-gray-400 dark:text-gray-500">
                            {new Date(user.createdAt).toLocaleDateString('es-ES', {
                              day: '2-digit',
                              month: 'short',
                            })}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsCharts
              enrollmentsByMonth={analytics.enrollmentsByMonth}
              userGrowth={analytics.userGrowth}
            />

            <Card className="mt-6 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">Inscripciones Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200 dark:border-gray-700">
                      <TableHead className="text-gray-700 dark:text-gray-300">Estudiante</TableHead>
                      <TableHead className="text-gray-700 dark:text-gray-300">Curso</TableHead>
                      <TableHead className="text-gray-700 dark:text-gray-300">Monto</TableHead>
                      <TableHead className="text-gray-700 dark:text-gray-300">Fecha</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analytics.recentEnrollments.map((enrollment) => (
                      <TableRow key={enrollment.id} className="border-gray-200 dark:border-gray-700">
                        <TableCell>
                          <div>
                            <p className="font-medium text-black dark:text-white">{enrollment.studentName}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{enrollment.studentEmail}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-700 dark:text-gray-300">{enrollment.courseName}</TableCell>
                        <TableCell className="font-medium text-gray-900 dark:text-white">
                          ${enrollment.amount} {enrollment.currency}
                        </TableCell>
                        <TableCell className="text-gray-600 dark:text-gray-400 text-sm">
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
            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">Gestión de Usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <UsersTable users={users} onUpdate={loadUsers} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">Gestión de Cursos</CardTitle>
              </CardHeader>
              <CardContent>
                <CoursesTable courses={courses} onUpdate={loadCourses} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automations">
            <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black dark:text-white">
                  <Workflow className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                  Automatizaciones n8n
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Gestiona workflows automatizados para emails, notificaciones y reportes.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="font-semibold text-black dark:text-white mb-2">Panel de Automatizaciones</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Accede al panel de n8n para crear, editar y monitorear los workflows de automatización.
                    </p>
                    <a
                      href="https://casa.tailc67ac4.ts.net:9443/home/workflows"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <Workflow className="w-4 h-4" />
                      Abrir n8n
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-neutral-900">
                      <h4 className="font-medium text-black dark:text-white mb-1">Emails Automáticos</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Bienvenida, certificados, recordatorios</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-neutral-900">
                      <h4 className="font-medium text-black dark:text-white mb-1">Notificaciones</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Pagos, inscripciones, reviews</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-neutral-900">
                      <h4 className="font-medium text-black dark:text-white mb-1">Reportes</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Diarios, semanales, mensuales</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-neutral-900">
                      <h4 className="font-medium text-black dark:text-white mb-1">Integraciones</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Stripe, SharePoint, OneDrive</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-neutral-900">
                      <h4 className="font-medium text-black dark:text-white mb-1">Backups</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Respaldos automáticos semanales</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-neutral-900">
                      <h4 className="font-medium text-black dark:text-white mb-1">Alertas</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Pagos fallidos, cursos inactivos</p>
                    </div>
                  </div>
                </div>
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
    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">{icon}</div>
        </div>
        <div className="flex items-end justify-between">
          <h3 className="text-2xl font-bold text-black dark:text-white">{value}</h3>
          {trend && (
            <span className="text-xs text-green-700 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
              {trend}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
