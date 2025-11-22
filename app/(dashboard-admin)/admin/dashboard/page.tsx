import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, DollarSign, Activity } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-900">Panel de Administración</h1>
                <p className="text-neutral-600">Visión general del sistema DISTMAH.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                    title="Usuarios Totales"
                    value="5,678"
                    icon={<Users className="w-5 h-5 text-blue-600" />}
                    trend="+8% este mes"
                />
                <StatsCard
                    title="Cursos Activos"
                    value="24"
                    icon={<BookOpen className="w-5 h-5 text-orange-600" />}
                />
                <StatsCard
                    title="Ingresos Mensuales"
                    value="$45,200"
                    icon={<DollarSign className="w-5 h-5 text-green-600" />}
                    trend="+15% vs mes anterior"
                />
                <StatsCard
                    title="Tasa de Finalización"
                    value="78%"
                    icon={<Activity className="w-5 h-5 text-purple-600" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Usuarios Recientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-neutral-200" />
                                        <div>
                                            <p className="text-sm font-medium">Usuario Nuevo {i}</p>
                                            <p className="text-xs text-neutral-500">usuario{i}@email.com</p>
                                        </div>
                                    </div>
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Estudiante</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Actividad del Sistema</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex gap-3 text-sm">
                                    <div className="w-2 h-2 mt-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-neutral-900">Nuevo curso publicado: <span className="font-medium">AutoCAD {2020 + i}</span></p>
                                        <p className="text-xs text-neutral-500">Hace {i} horas</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
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
