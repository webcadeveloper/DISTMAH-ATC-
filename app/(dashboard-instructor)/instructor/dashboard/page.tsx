import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function InstructorDashboard() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Hola, Instructor</h1>
                    <p className="text-neutral-600">Bienvenido al panel de control de DISTMAH.</p>
                </div>
                <Link href="/instructor/cursos/crear-curso">
                    <Button className="bg-primary-600 hover:bg-primary-700">
                        + Crear Nuevo Curso
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                    title="Estudiantes Activos"
                    value="1,234"
                    icon={<Users className="w-5 h-5 text-blue-600" />}
                    trend="+12% vs mes anterior"
                />
                <StatsCard
                    title="Cursos Publicados"
                    value="8"
                    icon={<BookOpen className="w-5 h-5 text-orange-600" />}
                />
                <StatsCard
                    title="Horas Enseñadas"
                    value="156h"
                    icon={<Clock className="w-5 h-5 text-green-600" />}
                />
                <StatsCard
                    title="Certificados Emitidos"
                    value="450"
                    icon={<Award className="w-5 h-5 text-purple-600" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Cursos Recientes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-neutral-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-neutral-200 rounded-md" />
                                            <div>
                                                <h4 className="font-medium text-neutral-900">AutoCAD 2D 2026 - Grupo {i}</h4>
                                                <p className="text-sm text-neutral-500">Actualizado hace 2 días</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-right">
                                                <p className="text-sm font-medium text-neutral-900">24 Estudiantes</p>
                                                <p className="text-xs text-green-600">Activo</p>
                                            </div>
                                            <Button variant="outline" size="sm">Gestionar</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Próximas Clases</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-3 items-start pb-4 border-b last:border-0 last:pb-0">
                                        <div className="flex flex-col items-center bg-primary-50 text-primary-700 rounded p-2 min-w-[3rem]">
                                            <span className="text-xs font-bold">NOV</span>
                                            <span className="text-lg font-bold">{20 + i}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-neutral-900">Sesión de Preguntas y Respuestas</h4>
                                            <p className="text-xs text-neutral-500 mb-1">AutoCAD 2D 2026</p>
                                            <p className="text-xs text-neutral-400">10:00 AM - 11:30 AM</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="ghost" className="w-full mt-4 text-primary-600">Ver Calendario Completo</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function StatsCard({ title, value, icon, trend }: { title: string; value: string; icon: React.ReactNode; trend?: string }) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-neutral-500">{title}</p>
                    <div className="p-2 bg-neutral-50 rounded-full">{icon}</div>
                </div>
                <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-bold text-neutral-900">{value}</h3>
                    {trend && <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">{trend}</span>}
                </div>
            </CardContent>
        </Card>
    );
}
