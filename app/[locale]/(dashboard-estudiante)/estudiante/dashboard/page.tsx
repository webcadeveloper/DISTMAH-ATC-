import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PlayCircle, Clock, Award } from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboard() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-900">Hola, Estudiante</h1>
                <p className="text-neutral-600">Continúa donde lo dejaste.</p>
            </div>

            {/* CONTINUE LEARNING */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Continuar Aprendiendo</h2>
                <Card className="bg-neutral-900 text-white border-none overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-neutral-900 opacity-90" />
                    <div className="relative z-10 p-8 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-grow">
                            <div className="flex items-center gap-2 text-blue-300 mb-2 text-sm font-medium">
                                <Clock className="w-4 h-4" />
                                <span>Última actividad: Hace 2 horas</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">AutoCAD 2D 2026 - Nivel Intermedio</h3>
                            <p className="text-neutral-300 mb-6">Módulo 3: Comandos de Edición Avanzados</p>

                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-sm font-medium">Progreso del curso</span>
                                <span className="text-sm font-bold text-blue-400">45%</span>
                            </div>
                            <Progress value={45} className="h-2 bg-neutral-700 mb-6" />

                            <Link href="/cursos/autocad-2d-2026/leccion/lec-1-1">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                                    <PlayCircle className="w-4 h-4 mr-2" /> Continuar Lección
                                </Button>
                            </Link>
                        </div>

                        <div className="w-full md:w-64 aspect-video bg-neutral-800 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* MY COURSES */}
                <div className="lg:col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-neutral-900">Mis Cursos</h2>
                        <Link href="/estudiante/mis-cursos" className="text-sm text-primary-600 hover:underline">Ver todos</Link>
                    </div>

                    <div className="grid gap-4">
                        {[1, 2].map((i) => (
                            <Card key={i} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4 flex gap-4">
                                    <div className="w-24 h-24 bg-neutral-100 rounded-md flex-shrink-0" />
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-bold text-neutral-900">Revit Architecture 2026</h4>
                                            <p className="text-sm text-neutral-500">Nivel Básico</p>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs text-neutral-500 mb-1">
                                                <span>Progreso</span>
                                                <span>12%</span>
                                            </div>
                                            <Progress value={12} className="h-1.5" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* ACHIEVEMENTS / STATS */}
                <div>
                    <h2 className="text-xl font-bold text-neutral-900 mb-4">Mis Logros</h2>
                    <Card>
                        <CardContent className="p-6 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-neutral-900">2</p>
                                    <p className="text-sm text-neutral-500">Certificados Obtenidos</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-neutral-900">48h</p>
                                    <p className="text-sm text-neutral-500">Horas de Aprendizaje</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
