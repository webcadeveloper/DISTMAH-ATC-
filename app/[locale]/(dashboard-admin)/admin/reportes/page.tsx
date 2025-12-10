'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { useTheme } from 'next-themes';

const data = [
    { name: 'Ene', total: 1200 },
    { name: 'Feb', total: 2100 },
    { name: 'Mar', total: 1800 },
    { name: 'Abr', total: 2400 },
    { name: 'May', total: 3200 },
    { name: 'Jun', total: 4500 },
];

const courseData = [
    { name: 'AutoCAD', students: 450 },
    { name: 'Revit', students: 320 },
    { name: 'Civil 3D', students: 210 },
    { name: '3ds Max', students: 150 },
    { name: 'Fusion', students: 80 },
];

export default function AnalyticsPage() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    const chartColors = {
        axis: isDark ? '#9ca3af' : '#888888',
        tooltipBg: isDark ? '#1f2937' : '#fff',
        tooltipBorder: isDark ? '#374151' : '#ccc',
    };

    return (
        <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Reportes y Analítica</h1>
                <p className="text-neutral-600 dark:text-neutral-400">Métricas clave del rendimiento de la plataforma.</p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6 bg-neutral-100 dark:bg-neutral-800">
                    <TabsTrigger value="overview">Visión General</TabsTrigger>
                    <TabsTrigger value="courses">Rendimiento de Cursos</TabsTrigger>
                    <TabsTrigger value="students">Actividad de Estudiantes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                            <CardHeader>
                                <CardTitle className="text-black dark:text-white">Ingresos Mensuales ($)</CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data}>
                                        <XAxis dataKey="name" stroke={chartColors.axis} fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke={chartColors.axis} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: chartColors.tooltipBg,
                                                border: `1px solid ${chartColors.tooltipBorder}`,
                                                borderRadius: '4px',
                                                color: isDark ? '#fff' : '#000',
                                            }}
                                        />
                                        <Bar dataKey="total" fill="#2563eb" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                            <CardHeader>
                                <CardTitle className="text-black dark:text-white">Estudiantes por Curso</CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={courseData} layout="vertical">
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={100} stroke={chartColors.axis} fontSize={12} tickLine={false} axisLine={false} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: chartColors.tooltipBg,
                                                border: `1px solid ${chartColors.tooltipBorder}`,
                                                borderRadius: '4px',
                                                color: isDark ? '#fff' : '#000',
                                            }}
                                        />
                                        <Bar dataKey="students" fill="#ea580c" radius={[0, 4, 4, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="courses">
                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardContent className="p-8 text-center text-neutral-500 dark:text-neutral-400">
                            Reporte detallado de cursos en desarrollo...
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="students">
                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardContent className="p-8 text-center text-neutral-500 dark:text-neutral-400">
                            Reporte de actividad de estudiantes en desarrollo...
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
