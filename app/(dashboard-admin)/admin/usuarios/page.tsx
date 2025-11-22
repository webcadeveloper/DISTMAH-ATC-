'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Trash, Mail, Shield, Download } from 'lucide-react';
import { toast } from 'sonner';

// Mock data
const users = [
    { id: '1', name: 'Juan Pérez', email: 'juan@example.com', role: 'STUDENT', status: 'Active' },
    { id: '2', name: 'Maria Garcia', email: 'maria@example.com', role: 'INSTRUCTOR', status: 'Active' },
    { id: '3', name: 'Carlos Lopez', email: 'carlos@example.com', role: 'STUDENT', status: 'Inactive' },
    { id: '4', name: 'Ana Martinez', email: 'ana@example.com', role: 'STUDENT', status: 'Active' },
    { id: '5', name: 'Luis Rodriguez', email: 'luis@example.com', role: 'ADMIN', status: 'Active' },
];

export default function UsersPage() {
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

    const toggleUser = (userId: string) => {
        setSelectedUsers(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    const toggleAll = () => {
        if (selectedUsers.length === users.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(users.map(u => u.id));
        }
    };

    const handleBulkDelete = () => {
        toast.success(`Eliminando ${selectedUsers.length} usuarios...`);
        setSelectedUsers([]);
    };

    const handleBulkEmail = () => {
        toast.success(`Enviando correo a ${selectedUsers.length} usuarios...`);
    };

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Gestión de Usuarios</h1>
                    <p className="text-neutral-600">Administra estudiantes, instructores y administradores.</p>
                </div>
                <Button>
                    <Download className="w-4 h-4 mr-2" /> Exportar CSV
                </Button>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <Input placeholder="Buscar usuarios..." className="max-w-sm" />

                {selectedUsers.length > 0 && (
                    <div className="flex items-center gap-2 animate-fade-in bg-neutral-100 p-2 rounded-lg">
                        <span className="text-sm font-medium px-2">{selectedUsers.length} seleccionados</span>
                        <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
                            <Trash className="w-4 h-4 mr-2" /> Eliminar
                        </Button>
                        <Button variant="secondary" size="sm" onClick={handleBulkEmail}>
                            <Mail className="w-4 h-4 mr-2" /> Enviar Correo
                        </Button>
                    </div>
                )}
            </div>

            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">
                                <Checkbox
                                    checked={selectedUsers.length === users.length}
                                    onCheckedChange={toggleAll}
                                />
                            </TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Rol</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <Checkbox
                                        checked={selectedUsers.includes(user.id)}
                                        onCheckedChange={() => toggleUser(user.id)}
                                    />
                                </TableCell>
                                <TableCell className="font-medium">{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.role === 'ADMIN' ? 'bg-red-100 text-red-700' :
                                            user.role === 'INSTRUCTOR' ? 'bg-blue-100 text-blue-700' :
                                                'bg-green-100 text-green-700'
                                        }`}>
                                        {user.role}
                                    </span>
                                </TableCell>
                                <TableCell>{user.status}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                            <DropdownMenuItem>Editar Usuario</DropdownMenuItem>
                                            <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-red-600">
                                                <Trash className="w-4 h-4 mr-2" /> Eliminar
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
