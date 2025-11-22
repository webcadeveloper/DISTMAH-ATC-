'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

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
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-900">Reportes y Analítica</h1>
                <p className="text-neutral-600">Métricas clave del rendimiento de la plataforma.</p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                    <TabsTrigger value="overview">Visión General</TabsTrigger>
                    <TabsTrigger value="courses">Rendimiento de Cursos</TabsTrigger>
                    <TabsTrigger value="students">Actividad de Estudiantes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Ingresos Mensuales ($)</CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data}>
                                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                        <Tooltip />
                                        <Bar dataKey="total" fill="#2563eb" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Estudiantes por Curso</CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={courseData} layout="vertical">
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={100} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <Tooltip />
                                        <Bar dataKey="students" fill="#ea580c" radius={[0, 4, 4, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="courses">
                    <Card>
                        <CardContent className="p-8 text-center text-neutral-500">
                            Reporte detallado de cursos en desarrollo...
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="students">
                    <Card>
                        <CardContent className="p-8 text-center text-neutral-500">
                            Reporte de actividad de estudiantes en desarrollo...
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
