import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, TrendingUp, Users, BookOpen, DollarSign, Award, Calendar, BarChart3 } from 'lucide-react';

export default function ReportesInstructorPage() {
    const cursosData = [
        { nombre: 'Civil 3D 2026 Básico', estudiantes: 78, completados: 23, promedio: 87, ingresos: 30420 },
        { nombre: 'Civil 3D 2026 Avanzado', estudiantes: 49, completados: 12, promedio: 91, ingresos: 19110 }
    ];

    const mesData = [
        { mes: 'Junio', inscripciones: 23, ingresos: 8970 },
        { mes: 'Julio', inscripciones: 31, ingresos: 12090 },
        { mes: 'Agosto', inscripciones: 28, ingresos: 10920 },
        { mes: 'Septiembre', inscripciones: 35, ingresos: 13650 },
        { mes: 'Octubre', inscripciones: 42, ingresos: 16380 },
        { mes: 'Noviembre', inscripciones: 38, ingresos: 14820 }
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto bg-neutral-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Reportes y Estadísticas</h1>
                    <p className="text-neutral-600">Analiza el rendimiento de tus cursos y estudiantes.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="border-neutral-300">
                        <Calendar className="w-4 h-4 mr-2" /> Últimos 30 días
                    </Button>
                    <Button className="bg-neutral-900 hover:bg-neutral-800">
                        <Download className="w-4 h-4 mr-2" /> Exportar Reporte
                    </Button>
                </div>
            </div>

            {/* KPIs Principales */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <Badge className="bg-green-100 text-green-800 border-green-200">+12%</Badge>
                        </div>
                        <p className="text-sm text-neutral-600">Total Estudiantes</p>
                        <p className="text-3xl font-bold text-neutral-900">127</p>
                        <p className="text-xs text-neutral-500 mt-1">+14 este mes</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-green-600" />
                            </div>
                            <Badge className="bg-green-100 text-green-800 border-green-200">+8%</Badge>
                        </div>
                        <p className="text-sm text-neutral-600">Cursos Activos</p>
                        <p className="text-3xl font-bold text-neutral-900">2</p>
                        <p className="text-xs text-neutral-500 mt-1">Versión 2026</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                <Award className="w-6 h-6 text-yellow-600" />
                            </div>
                            <Badge className="bg-green-100 text-green-800 border-green-200">+5%</Badge>
                        </div>
                        <p className="text-sm text-neutral-600">Promedio General</p>
                        <p className="text-3xl font-bold text-neutral-900">89%</p>
                        <p className="text-xs text-neutral-500 mt-1">Calificación promedio</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-purple-600" />
                            </div>
                            <Badge className="bg-green-100 text-green-800 border-green-200">+15%</Badge>
                        </div>
                        <p className="text-sm text-neutral-600">Ingresos Totales</p>
                        <p className="text-3xl font-bold text-neutral-900">$49,530</p>
                        <p className="text-xs text-neutral-500 mt-1">USD este año</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Rendimiento por Curso */}
                <Card className="bg-white border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-neutral-900">Rendimiento por Curso</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {cursosData.map((curso, index) => (
                                <div key={index} className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-neutral-900">{curso.nombre}</h4>
                                        <Badge variant="outline" className="text-neutral-700 border-neutral-300">
                                            {curso.estudiantes} estudiantes
                                        </Badge>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-3">
                                        <div>
                                            <p className="text-xs text-neutral-500">Completados</p>
                                            <p className="text-lg font-bold text-green-600">{curso.completados}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-500">Promedio</p>
                                            <p className="text-lg font-bold text-blue-600">{curso.promedio}%</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-500">Ingresos</p>
                                            <p className="text-lg font-bold text-purple-600">${curso.ingresos.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Inscripciones por Mes */}
                <Card className="bg-white border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-neutral-900">Inscripciones Mensuales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {mesData.map((mes, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 flex-grow">
                                        <span className="text-sm font-medium text-neutral-700 w-24">{mes.mes}</span>
                                        <div className="flex-grow bg-neutral-100 rounded-full h-6 relative overflow-hidden">
                                            <div
                                                className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-2"
                                                style={{ width: `${(mes.inscripciones / 50) * 100}%` }}
                                            >
                                                <span className="text-xs font-semibold text-white">{mes.inscripciones}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold text-neutral-900 ml-4 w-20 text-right">
                                        ${mes.ingresos.toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Métricas Adicionales */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="bg-white border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-neutral-900">Tasa de Completación</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-center">
                            <div className="relative w-40 h-40">
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
                                        strokeDasharray={`${(28 / 127) * 440} 440`}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-neutral-900">28%</p>
                                        <p className="text-xs text-neutral-500">35 de 127</p>
                                    </div>
                                </div>
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
                                    <span className="text-sm font-semibold text-neutral-900">77%</span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '77%' }} />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-neutral-600">Promedio Asistencia</span>
                                    <span className="text-sm font-semibold text-neutral-900">82%</span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }} />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-neutral-600">Entrega de Tareas</span>
                                    <span className="text-sm font-semibold text-neutral-900">91%</span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '91%' }} />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-neutral-900">Top Estudiantes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                { nombre: 'Juan Ramírez', calificacion: 95, curso: 'Básico' },
                                { nombre: 'María González', calificacion: 92, curso: 'Avanzado' },
                                { nombre: 'Laura Martínez', calificacion: 91, curso: 'Avanzado' },
                                { nombre: 'Carlos Méndez', calificacion: 90, curso: 'Básico' }
                            ].map((estudiante, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
                                            <span className="text-xs font-bold text-neutral-600">{index + 1}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-neutral-900">{estudiante.nombre}</p>
                                            <p className="text-xs text-neutral-500">{estudiante.curso}</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                                        {estudiante.calificacion}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Gráfico de tendencia placeholder */}
            <Card className="bg-white border-neutral-200">
                <CardHeader>
                    <CardTitle className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5" /> Tendencia de Inscripciones
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 bg-neutral-50 rounded-lg flex items-center justify-center border border-neutral-200">
                        <div className="text-center">
                            <TrendingUp className="w-12 h-12 text-neutral-400 mx-auto mb-2" />
                            <p className="text-neutral-600 font-medium">Gráfico de Tendencias</p>
                            <p className="text-sm text-neutral-500">Visualización de datos históricos</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
