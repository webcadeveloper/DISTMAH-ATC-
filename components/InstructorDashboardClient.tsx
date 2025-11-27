'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, BookOpen, Users, BarChart3, Edit, MoreVertical, Bell, MessageSquare, TrendingUp, Award, Workflow } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { EmptyState } from '@/components/ui/EmptyState';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardStats {
    totalCourses: number;
    totalStudents: number;
    averageRating: number;
    totalRevenue: number;
}

interface Student {
    id: string;
    userId: string;
    name: string;
    email: string;
    avatar?: string;
    course: {
        id: string;
        title: string;
        slug: string;
    };
    progress: number;
    enrolledAt: string;
    lastActivity?: string;
    status: string;
}

interface CourseAnalytic {
    courseId: string;
    courseTitle: string;
    courseSlug: string;
    students: number;
    completionRate: number;
    rating: number;
    reviewsCount: number;
}

interface Analytics {
    courseAnalytics: CourseAnalytic[];
    enrollmentsByMonth: { month: string; enrollments: number }[];
    newEnrollmentsThisMonth: number;
    monthOverMonthChange: number;
    totalActiveStudents: number;
}

interface Notification {
    id: string;
    type: string;
    message: string;
    time: string;
    timeAgo: string;
    read: boolean;
}

export default function InstructorDashboardClient() {
    const router = useRouter();
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [students, setStudents] = useState<Student[]>([]);
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState('all');

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            const [statsRes, studentsRes, analyticsRes, notificationsRes] = await Promise.all([
                fetch('/api/instructor/dashboard'),
                fetch('/api/instructor/students'),
                fetch('/api/instructor/courses/analytics'),
                fetch('/api/instructor/notifications')
            ]);

            if (statsRes.ok) {
                const data = await statsRes.json();
                setStats(data);
            }

            if (studentsRes.ok) {
                const data = await studentsRes.json();
                setStudents(data.students || []);
            }

            if (analyticsRes.ok) {
                const data = await analyticsRes.json();
                setAnalytics(data);
            }

            if (notificationsRes.ok) {
                const data = await notificationsRes.json();
                setNotifications(data.notifications || []);
            }
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    const markAsRead = async (notificationId: string) => {
        try {
            await fetch(`/api/notifications/${notificationId}/read`, {
                method: 'POST'
            });
            setNotifications(prev =>
                prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
            );
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    const unreadNotifications = notifications.filter(n => !n.read).length;

    const filteredStudents = selectedCourse === 'all'
        ? students
        : students.filter(s => s.course.id === selectedCourse);

    const courses = Array.from(new Set(students.map(s => s.course.id)))
        .map(id => students.find(s => s.course.id === id)!.course);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Panel del Instructor</h1>
                    <p className="text-neutral-600">Gestiona tus cursos y estudiantes.</p>
                </div>
                <div className="flex items-center gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="relative">
                                <Bell className="w-5 h-5" />
                                {unreadNotifications > 0 && (
                                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-600">
                                        {unreadNotifications}
                                    </Badge>
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                            <div className="p-3 border-b">
                                <h4 className="font-semibold">Notificaciones</h4>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                                {notifications.length === 0 ? (
                                    <div className="p-4 text-center text-sm text-neutral-500">
                                        No hay notificaciones
                                    </div>
                                ) : (
                                    notifications.map((notif) => (
                                        <DropdownMenuItem
                                            key={notif.id}
                                            className={`p-3 cursor-pointer ${!notif.read ? 'bg-blue-50' : ''}`}
                                            onClick={() => !notif.read && markAsRead(notif.id)}
                                        >
                                            <div className="flex gap-3">
                                                <div className={`w-2 h-2 rounded-full mt-1.5 ${!notif.read ? 'bg-blue-600' : 'bg-neutral-300'}`} />
                                                <div className="flex-1">
                                                    <p className="text-sm text-neutral-900">{notif.message}</p>
                                                    <p className="text-xs text-neutral-500 mt-1">{notif.timeAgo}</p>
                                                </div>
                                            </div>
                                        </DropdownMenuItem>
                                    ))
                                )}
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="/es/instructor/cursos/crear">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            <PlusCircle className="w-4 h-4 mr-2" /> Crear Nuevo Curso
                        </Button>
                    </Link>
                </div>
            </div>

            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <Card>
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-neutral-500">Cursos Activos</p>
                                <h3 className="text-2xl font-bold text-neutral-900">{stats.totalCourses}</h3>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-neutral-500">Estudiantes Totales</p>
                                <h3 className="text-2xl font-bold text-neutral-900">{stats.totalStudents}</h3>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-neutral-500">Calificación Promedio</p>
                                <h3 className="text-2xl font-bold text-neutral-900">
                                    {stats.averageRating > 0 ? `${stats.averageRating.toFixed(1)}/5.0` : 'N/A'}
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-neutral-500">Ingresos Totales</p>
                                <h3 className="text-2xl font-bold text-neutral-900">${stats.totalRevenue.toFixed(2)}</h3>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            <Tabs defaultValue="overview" className="mt-8">
                <TabsList className="grid w-full grid-cols-5 max-w-3xl">
                    <TabsTrigger value="overview">Vista General</TabsTrigger>
                    <TabsTrigger value="students">Estudiantes</TabsTrigger>
                    <TabsTrigger value="grades">Calificaciones</TabsTrigger>
                    <TabsTrigger value="analytics">Analíticas</TabsTrigger>
                    <TabsTrigger value="automations" className="flex items-center gap-1">
                        <Workflow className="w-4 h-4" />
                        Automatizaciones
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-neutral-900">Mis Cursos</h2>

                        {analytics && analytics.courseAnalytics.length > 0 ? (
                            <div className="grid gap-6">
                                {analytics.courseAnalytics.map((course) => (
                                    <Card key={course.courseId} className="overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="w-full md:w-48 h-32 bg-neutral-200 relative">
                                                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-100">
                                                    <BookOpen className="w-8 h-8" />
                                                </div>
                                            </div>
                                            <div className="flex-grow p-6 flex flex-col justify-between">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-neutral-900 mb-1">{course.courseTitle}</h3>
                                                        <p className="text-sm text-neutral-500">
                                                            {course.students} estudiante{course.students !== 1 ? 's' : ''} • {course.completionRate}% completado
                                                        </p>
                                                    </div>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                                <MoreVertical className="w-4 h-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem>
                                                                <Link href={`/instructor/cursos/${course.courseSlug}/contenido`} className="w-full">
                                                                    Editar Contenido
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <MessageSquare className="w-4 h-4 mr-2" />
                                                                Foro del Curso
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>Ver Estudiantes</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>

                                                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-neutral-100">
                                                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                                                        <Users className="w-4 h-4" />
                                                        <span>{course.students} estudiantes</span>
                                                    </div>
                                                    {course.rating > 0 && (
                                                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                                                            <Award className="w-4 h-4" />
                                                            <span>{course.rating.toFixed(1)}/5.0 ({course.reviewsCount} reviews)</span>
                                                        </div>
                                                    )}
                                                    <div className="flex-grow"></div>
                                                    <Link href={`/instructor/cursos/${course.courseSlug}/contenido`}>
                                                        <Button variant="outline" size="sm">
                                                            <Edit className="w-4 h-4 mr-2" /> Gestionar Contenido
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <EmptyState
                                title="No hay cursos publicados"
                                description="Crea tu primer curso para comenzar"
                                actionLabel="Crear Curso"
                                onAction={() => router.push('/instructor/cursos/crear')}
                            />
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="students" className="mt-6">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle>Estudiantes Inscritos</CardTitle>
                                {courses.length > 0 && (
                                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                                        <SelectTrigger className="w-64">
                                            <SelectValue placeholder="Filtrar por curso" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">Todos los cursos</SelectItem>
                                            {courses.map(course => (
                                                <SelectItem key={course.id} value={course.id}>
                                                    {course.title}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            {filteredStudents.length === 0 ? (
                                <EmptyState
                                    title="No hay estudiantes inscritos"
                                    description="Los estudiantes aparecerán aquí cuando se inscriban en tus cursos"
                                />
                            ) : (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Nombre</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Curso</TableHead>
                                            <TableHead>Progreso</TableHead>
                                            <TableHead>Última Actividad</TableHead>
                                            <TableHead>Acciones</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredStudents.map((student) => (
                                            <TableRow key={student.id}>
                                                <TableCell className="font-medium">{student.name}</TableCell>
                                                <TableCell className="text-neutral-600">{student.email}</TableCell>
                                                <TableCell className="text-neutral-600">{student.course.title}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-24 h-2 bg-neutral-200 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-blue-600 rounded-full transition-all"
                                                                style={{ width: `${student.progress}%` }}
                                                            />
                                                        </div>
                                                        <span className="text-sm text-neutral-600">{student.progress}%</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-neutral-600">
                                                    {student.lastActivity
                                                        ? new Date(student.lastActivity).toLocaleDateString()
                                                        : 'N/A'}
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="outline" size="sm">Ver Perfil</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="grades" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sistema de Calificaciones</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <EmptyState
                                title="Sistema de assignments en desarrollo"
                                description="Pronto podrás calificar tareas y exámenes de tus estudiantes"
                            />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="analytics" className="mt-6">
                    {analytics && (
                        <div className="grid gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <TrendingUp className="w-5 h-5 text-blue-600" />
                                            Inscripciones (30 días)
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-3xl font-bold text-neutral-900 mb-2">
                                            +{analytics.newEnrollmentsThisMonth}
                                        </div>
                                        <p className="text-sm text-neutral-600">Nuevos estudiantes este mes</p>
                                        {analytics.monthOverMonthChange !== 0 && (
                                            <div className={`mt-4 flex items-center gap-2 text-sm ${analytics.monthOverMonthChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                <TrendingUp className="w-4 h-4" />
                                                <span>{analytics.monthOverMonthChange > 0 ? '+' : ''}{analytics.monthOverMonthChange}% vs mes anterior</span>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Users className="w-5 h-5 text-green-600" />
                                            Estudiantes Activos
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-3xl font-bold text-neutral-900 mb-2">
                                            {analytics.totalActiveStudents}
                                        </div>
                                        <p className="text-sm text-neutral-600">Estudiantes activos en todos los cursos</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Inscripciones por Mes (últimos 6 meses)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {analytics.enrollmentsByMonth.length > 0 ? (
                                        <ResponsiveContainer width="100%" height={300}>
                                            <BarChart data={analytics.enrollmentsByMonth}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Bar dataKey="enrollments" fill="#2563eb" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    ) : (
                                        <p className="text-center text-neutral-500 py-8">No hay datos de inscripciones</p>
                                    )}
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Estadísticas por Curso</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {analytics.courseAnalytics.length > 0 ? (
                                        <div className="space-y-6">
                                            {analytics.courseAnalytics.map((data, index) => (
                                                <div key={index} className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="font-medium text-neutral-900">{data.courseTitle}</h4>
                                                        <span className="text-sm text-neutral-600">{data.students} estudiantes</span>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex-1">
                                                            <div className="flex justify-between text-sm text-neutral-600 mb-1">
                                                                <span>Tasa de Completitud</span>
                                                                <span className="font-medium">{data.completionRate}%</span>
                                                            </div>
                                                            <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-blue-600 rounded-full transition-all"
                                                                    style={{ width: `${data.completionRate}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <EmptyState
                                            title="No hay datos de analíticas"
                                            description="Los datos aparecerán cuando tengas estudiantes inscritos"
                                        />
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="automations" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Workflow className="w-5 h-5 text-blue-600" />
                                Automatizaciones n8n
                            </CardTitle>
                            <p className="text-sm text-neutral-600">
                                Gestiona workflows automatizados para emails, notificaciones y reportes de tus cursos.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-neutral-900 mb-2">Panel de Automatizaciones</h3>
                                    <p className="text-sm text-neutral-600 mb-4">
                                        Accede al panel de n8n para ver y monitorear los workflows de tus cursos.
                                    </p>
                                    <a
                                        href="https://casa.tailc67ac4.ts.net:9443/home/workflows"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <Workflow className="w-4 h-4" />
                                        Abrir n8n
                                    </a>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="border border-neutral-200 rounded-lg p-4">
                                        <h4 className="font-medium text-neutral-900 mb-1">Notificaciones de Estudiantes</h4>
                                        <p className="text-sm text-neutral-600">Nuevas inscripciones y progreso</p>
                                    </div>
                                    <div className="border border-neutral-200 rounded-lg p-4">
                                        <h4 className="font-medium text-neutral-900 mb-1">Preguntas y Comentarios</h4>
                                        <p className="text-sm text-neutral-600">Alertas de nuevas preguntas en lecciones</p>
                                    </div>
                                    <div className="border border-neutral-200 rounded-lg p-4">
                                        <h4 className="font-medium text-neutral-900 mb-1">Reviews</h4>
                                        <p className="text-sm text-neutral-600">Notificaciones de nuevas reseñas</p>
                                    </div>
                                    <div className="border border-neutral-200 rounded-lg p-4">
                                        <h4 className="font-medium text-neutral-900 mb-1">Certificados</h4>
                                        <p className="text-sm text-neutral-600">Emisión automática al completar curso</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
