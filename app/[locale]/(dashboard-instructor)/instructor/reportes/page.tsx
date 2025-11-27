'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, TrendingUp, Users, BookOpen, Award, Calendar, BarChart3, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

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

interface DashboardStats {
    totalCourses: number;
    totalStudents: number;
    averageRating: number;
    totalRevenue: number;
}

export default function ReportesInstructorPage() {
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const [analyticsRes, statsRes] = await Promise.all([
                fetch('/api/instructor/courses/analytics'),
                fetch('/api/instructor/dashboard')
            ]);

            if (analyticsRes.ok) {
                const data = await analyticsRes.json();
                setAnalytics(data);
            }

            if (statsRes.ok) {
                const data = await statsRes.json();
                setStats(data);
            }
        } catch {
            toast.error('Error al cargar reportes');
        } finally {
            setLoading(false);
        }
    };

    const getMaxEnrollments = () => {
        if (!analytics?.enrollmentsByMonth) return 1;
        return Math.max(...analytics.enrollmentsByMonth.map(m => m.enrollments), 1);
    };

    if (loading) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900">Reportes y Estadisticas</h1>
                    <p className="text-neutral-600">Analiza el rendimiento de tus cursos y estudiantes.</p>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
                        <p className="text-neutral-600">Cargando reportes...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Reportes y Estadisticas</h1>
                    <p className="text-neutral-600">Analiza el rendimiento de tus cursos y estudiantes.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="border-neutral-300">
                        <Calendar className="w-4 h-4 mr-2" /> Ultimos 30 dias
                    </Button>
                    <Button className="bg-neutral-900 hover:bg-neutral-800">
                        <Download className="w-4 h-4 mr-2" /> Exportar Reporte
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            {analytics && analytics.monthOverMonthChange !== 0 && (
                                <Badge className={`${analytics.monthOverMonthChange > 0 ? 'bg-green-100 text-green-800 border-green-200' : 'bg-red-100 text-red-800 border-red-200'}`}>
                                    {analytics.monthOverMonthChange > 0 ? '+' : ''}{analytics.monthOverMonthChange}%
                                </Badge>
                            )}
                        </div>
                        <p className="text-sm text-neutral-600">Total Estudiantes</p>
                        <p className="text-3xl font-bold text-neutral-900">{stats?.totalStudents || 0}</p>
                        <p className="text-xs text-neutral-500 mt-1">+{analytics?.newEnrollmentsThisMonth || 0} este mes</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                        <p className="text-sm text-neutral-600">Cursos Activos</p>
                        <p className="text-3xl font-bold text-neutral-900">{stats?.totalCourses || 0}</p>
                        <p className="text-xs text-neutral-500 mt-1">Publicados</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                <Award className="w-6 h-6 text-yellow-600" />
                            </div>
                        </div>
                        <p className="text-sm text-neutral-600">Calificacion Promedio</p>
                        <p className="text-3xl font-bold text-neutral-900">
                            {stats?.averageRating ? stats.averageRating.toFixed(1) : 'N/A'}
                        </p>
                        <p className="text-xs text-neutral-500 mt-1">De 5.0 estrellas</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                        <p className="text-sm text-neutral-600">Estudiantes Activos</p>
                        <p className="text-3xl font-bold text-neutral-900">{analytics?.totalActiveStudents || 0}</p>
                        <p className="text-xs text-neutral-500 mt-1">En progreso</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-white border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-neutral-900">Rendimiento por Curso</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {analytics?.courseAnalytics && analytics.courseAnalytics.length > 0 ? (
                            <div className="space-y-4">
                                {analytics.courseAnalytics.map((curso) => (
                                    <div key={curso.courseId} className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-neutral-900">{curso.courseTitle}</h4>
                                            <Badge variant="outline" className="text-neutral-700 border-neutral-300">
                                                {curso.students} estudiantes
                                            </Badge>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 mt-3">
                                            <div>
                                                <p className="text-xs text-neutral-500">Completados</p>
                                                <p className="text-lg font-bold text-green-600">{curso.completionRate}%</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-neutral-500">Calificacion</p>
                                                <p className="text-lg font-bold text-blue-600">
                                                    {curso.rating > 0 ? curso.rating.toFixed(1) : 'N/A'}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-neutral-500">Reviews</p>
                                                <p className="text-lg font-bold text-neutral-600">{curso.reviewsCount}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <BookOpen className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                                <p className="text-neutral-600">No hay cursos publicados</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-neutral-900">Inscripciones Mensuales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {analytics?.enrollmentsByMonth && analytics.enrollmentsByMonth.length > 0 ? (
                            <div className="space-y-3">
                                {analytics.enrollmentsByMonth.map((mes) => (
                                    <div key={mes.month} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 flex-grow">
                                            <span className="text-sm font-medium text-neutral-700 w-24">{mes.month}</span>
                                            <div className="flex-grow bg-neutral-100 rounded-full h-6 relative overflow-hidden">
                                                <div
                                                    className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-2 transition-all"
                                                    style={{ width: `${Math.max((mes.enrollments / getMaxEnrollments()) * 100, 10)}%` }}
                                                >
                                                    {mes.enrollments > 0 && (
                                                        <span className="text-xs font-semibold text-white">{mes.enrollments}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <BarChart3 className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                                <p className="text-neutral-600">No hay datos de inscripciones</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="bg-white border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-neutral-900">Tasa de Completacion</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-center">
                            <div className="relative w-40 h-40">
                                {analytics?.courseAnalytics && analytics.courseAnalytics.length > 0 ? (
                                    <>
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle
                                                cx="80"
                                                cy="80"
                                                r="70"
                                                stroke="#E5E7EB"
                                                strokeWidth="12"
                                                fill="none"
                                            />
                                            <circle
                                                cx="80"
                                                cy="80"
                                                r="70"
                                                stroke="#3B82F6"
                                                strokeWidth="12"
                                                fill="none"
                                                strokeDasharray={`${(analytics.courseAnalytics.reduce((acc, c) => acc + c.completionRate, 0) / analytics.courseAnalytics.length / 100) * 440} 440`}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <p className="text-3xl font-bold text-neutral-900">
                                                    {Math.round(analytics.courseAnalytics.reduce((acc, c) => acc + c.completionRate, 0) / analytics.courseAnalytics.length)}%
                                                </p>
                                                <p className="text-xs text-neutral-500">Promedio</p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-neutral-500">Sin datos</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-neutral-900">Engagement</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-neutral-600">Estudiantes Activos</span>
                                    <span className="text-sm font-semibold text-neutral-900">
                                        {stats?.totalStudents && analytics?.totalActiveStudents
                                            ? Math.round((analytics.totalActiveStudents / stats.totalStudents) * 100)
                                            : 0}%
                                    </span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div
                                        className="bg-green-500 h-2 rounded-full"
                                        style={{
                                            width: `${stats?.totalStudents && analytics?.totalActiveStudents
                                                ? Math.round((analytics.totalActiveStudents / stats.totalStudents) * 100)
                                                : 0}%`
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-neutral-600">Nuevos este Mes</span>
                                    <span className="text-sm font-semibold text-neutral-900">
                                        {analytics?.newEnrollmentsThisMonth || 0}
                                    </span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{
                                            width: `${Math.min((analytics?.newEnrollmentsThisMonth || 0) * 10, 100)}%`
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-neutral-600">Crecimiento MoM</span>
                                    <span className={`text-sm font-semibold ${(analytics?.monthOverMonthChange || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {analytics?.monthOverMonthChange || 0}%
                                    </span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${(analytics?.monthOverMonthChange || 0) >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                                        style={{
                                            width: `${Math.min(Math.abs(analytics?.monthOverMonthChange || 0), 100)}%`
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-neutral-900">Resumen</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                <span className="text-sm text-neutral-600">Total Cursos</span>
                                <span className="font-bold text-neutral-900">{stats?.totalCourses || 0}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                <span className="text-sm text-neutral-600">Total Estudiantes</span>
                                <span className="font-bold text-neutral-900">{stats?.totalStudents || 0}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                <span className="text-sm text-neutral-600">Calificacion</span>
                                <span className="font-bold text-neutral-900">
                                    {stats?.averageRating ? `${stats.averageRating.toFixed(1)}/5.0` : 'N/A'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                <span className="text-sm text-blue-700">Ingresos Totales</span>
                                <span className="font-bold text-blue-900">${stats?.totalRevenue?.toFixed(2) || '0.00'}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-white border-neutral-200">
                <CardHeader>
                    <CardTitle className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5" /> Tendencia de Inscripciones
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {analytics?.enrollmentsByMonth && analytics.enrollmentsByMonth.length > 0 ? (
                        <div className="h-64 flex items-end justify-between gap-4 px-4">
                            {analytics.enrollmentsByMonth.map((mes) => (
                                <div key={mes.month} className="flex-1 flex flex-col items-center">
                                    <div
                                        className="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600"
                                        style={{
                                            height: `${Math.max((mes.enrollments / getMaxEnrollments()) * 200, 20)}px`
                                        }}
                                    />
                                    <p className="text-xs text-neutral-600 mt-2 text-center">{mes.month}</p>
                                    <p className="text-sm font-semibold text-neutral-900">{mes.enrollments}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="h-64 bg-neutral-50 rounded-lg flex items-center justify-center border border-neutral-200">
                            <div className="text-center">
                                <TrendingUp className="w-12 h-12 text-neutral-400 mx-auto mb-2" />
                                <p className="text-neutral-600 font-medium">Sin datos de tendencias</p>
                                <p className="text-sm text-neutral-500">Los datos apareceran cuando tengas inscripciones</p>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
