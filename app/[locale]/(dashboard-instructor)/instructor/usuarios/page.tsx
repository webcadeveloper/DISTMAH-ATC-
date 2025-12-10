'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Users, Search, Cloud, CloudOff, CheckCircle, AlertTriangle,
    Loader2, HardDrive, Mail, UserPlus, Shield
} from 'lucide-react';
import { toast } from 'sonner';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface Student {
    id: string;
    name: string;
    email: string;
    m365UserId: string | null;
    m365Email: string | null;
    createdAt: string;
    enrollments: {
        course: {
            title: string;
        };
        enrolledAt: string;
        status: string;
    }[];
}

export default function InstructorUsuariosPage() {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<'all' | 'pending' | 'activated'>('all');
    const [activatingUser, setActivatingUser] = useState<Student | null>(null);
    const [isActivating, setIsActivating] = useState(false);
    const [confirmText, setConfirmText] = useState('');

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const response = await fetch('/api/instructor/students');
            if (!response.ok) throw new Error('Error al cargar estudiantes');
            const data = await response.json();
            setStudents(data.students || []);
        } catch {
            toast.error('Error al cargar estudiantes');
        } finally {
            setLoading(false);
        }
    };

    const activateM365 = async () => {
        if (!activatingUser || confirmText !== 'ACTIVAR') return;

        setIsActivating(true);
        try {
            const response = await fetch('/api/microsoft/users/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: activatingUser.id }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al activar cuenta M365');
            }

            toast.success(`Cuenta M365 activada para ${activatingUser.name}`, {
                description: `Email: ${data.data.m365Email} - Licencia: ${data.data.licenseType}`,
            });

            setStudents(students.map(s =>
                s.id === activatingUser.id
                    ? { ...s, m365UserId: data.data.m365UserId, m365Email: data.data.m365Email }
                    : s
            ));

            setActivatingUser(null);
            setConfirmText('');
        } catch (error: any) {
            toast.error('Error al activar cuenta M365', {
                description: error.message,
            });
        } finally {
            setIsActivating(false);
        }
    };

    const filteredStudents = students.filter(student => {
        const matchesSearch =
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase());

        if (filter === 'pending') return matchesSearch && !student.m365UserId;
        if (filter === 'activated') return matchesSearch && student.m365UserId;
        return matchesSearch;
    });

    const pendingCount = students.filter(s => !s.m365UserId).length;
    const activatedCount = students.filter(s => s.m365UserId).length;

    if (loading) {
        return (
            <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Gestion de Usuarios M365</h1>
                    <p className="text-neutral-600 dark:text-neutral-400">Activa cuentas Microsoft 365 Education A1 para tus estudiantes.</p>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <Loader2 className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
                        <p className="text-neutral-600 dark:text-neutral-400">Cargando estudiantes...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Gestion de Usuarios M365</h1>
                <p className="text-neutral-600 dark:text-neutral-400">Activa cuentas Microsoft 365 Education A1 para tus estudiantes.</p>
            </div>

            <Card className="mb-6 bg-yellow-50 border-yellow-200">
                <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-bold text-yellow-800">Importante: Activacion Irreversible</h3>
                            <p className="text-sm text-yellow-700 mt-1">
                                Al activar una cuenta Microsoft 365 Education A1, se asigna <strong>1 TB de OneDrive</strong> y
                                una <strong>licencia permanente</strong>. Esta accion <strong>NO se puede deshacer</strong> y consume
                                una licencia de tu pool de Microsoft Education. Solo activa cuentas para estudiantes que hayan
                                completado su pago y esten listos para comenzar el curso.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Estudiantes</p>
                                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{students.length}</p>
                            </div>
                            <Users className="w-8 h-8 text-neutral-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Pendientes Activar</p>
                                <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
                            </div>
                            <CloudOff className="w-8 h-8 text-yellow-400" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">M365 Activados</p>
                                <p className="text-2xl font-bold text-green-600">{activatedCount}</p>
                            </div>
                            <Cloud className="w-8 h-8 text-green-400" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="mb-6 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                        <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                            <Input
                                placeholder="Buscar por nombre o email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value as any)}
                            className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-sm text-neutral-900 dark:text-white"
                        >
                            <option value="all">Todos</option>
                            <option value="pending">Pendientes Activar</option>
                            <option value="activated">M365 Activados</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-4">
                {filteredStudents.length === 0 ? (
                    <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                        <CardContent className="p-12 text-center">
                            <Users className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                {searchTerm || filter !== 'all' ? 'No se encontraron estudiantes' : 'Sin estudiantes'}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                {searchTerm || filter !== 'all'
                                    ? 'Intenta con otros criterios de busqueda'
                                    : 'Los estudiantes apareceran aqui cuando se inscriban a tus cursos'}
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                    filteredStudents.map((student) => (
                        <Card key={student.id} className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{student.name}</h3>
                                            {student.m365UserId ? (
                                                <Badge className="bg-green-100 text-green-800 border-green-200">
                                                    <Cloud className="w-3 h-3 mr-1" /> M365 Activo
                                                </Badge>
                                            ) : (
                                                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                                                    <CloudOff className="w-3 h-3 mr-1" /> Pendiente
                                                </Badge>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Mail className="w-4 h-4" />
                                                {student.email}
                                            </div>
                                            {student.m365Email && (
                                                <div className="flex items-center gap-1 text-blue-600">
                                                    <Shield className="w-4 h-4" />
                                                    {student.m365Email}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {student.enrollments.map((enrollment, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    {enrollment.course.title}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 ml-4">
                                        {student.m365UserId ? (
                                            <div className="text-center">
                                                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-1" />
                                                <p className="text-xs text-neutral-500">Activado</p>
                                            </div>
                                        ) : (
                                            <Button
                                                onClick={() => setActivatingUser(student)}
                                                className="bg-blue-600 hover:bg-blue-700"
                                            >
                                                <UserPlus className="w-4 h-4 mr-2" />
                                                Activar M365
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                {student.m365UserId && (
                                    <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                        <div className="flex items-center gap-6 text-sm">
                                            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                                                <HardDrive className="w-4 h-4 text-blue-500" />
                                                <span>1 TB OneDrive</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                                                <Shield className="w-4 h-4 text-green-500" />
                                                <span>Licencia A1 for Students</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>

            <Dialog open={!!activatingUser} onOpenChange={(open) => !open && setActivatingUser(null)}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-red-600">
                            <AlertTriangle className="w-5 h-5" />
                            Confirmar Activacion M365
                        </DialogTitle>
                        <DialogDescription className="text-left">
                            <div className="mt-4 space-y-3">
                                <p>
                                    Estas a punto de activar una cuenta Microsoft 365 Education A1 para:
                                </p>
                                <div className="bg-neutral-100 dark:bg-neutral-700 p-3 rounded-md">
                                    <p className="font-bold text-neutral-900 dark:text-white">{activatingUser?.name}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{activatingUser?.email}</p>
                                </div>
                                <div className="bg-red-50 border border-red-200 p-3 rounded-md">
                                    <p className="text-red-800 font-bold text-sm">Esta accion es IRREVERSIBLE:</p>
                                    <ul className="text-sm text-red-700 mt-2 space-y-1">
                                        <li>- Se asignara 1 TB de OneDrive</li>
                                        <li>- Se consumira una licencia A1 permanente</li>
                                        <li>- Se creara email @distmah-atc.com</li>
                                        <li>- NO se puede revertir</li>
                                    </ul>
                                </div>
                                <div className="pt-2">
                                    <p className="text-sm font-medium mb-2">
                                        Escribe <strong>ACTIVAR</strong> para confirmar:
                                    </p>
                                    <Input
                                        value={confirmText}
                                        onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
                                        placeholder="Escribe ACTIVAR"
                                        className="font-mono"
                                    />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setActivatingUser(null);
                                setConfirmText('');
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            onClick={activateM365}
                            disabled={confirmText !== 'ACTIVAR' || isActivating}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            {isActivating ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Activando...
                                </>
                            ) : (
                                <>
                                    <Cloud className="w-4 h-4 mr-2" />
                                    Confirmar Activacion
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
