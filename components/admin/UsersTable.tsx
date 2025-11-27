'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { RoleSelector } from './RoleSelector';
import { StatusBadge } from './StatusBadge';
import { MoreVertical, Edit, Trash2, UserCheck } from 'lucide-react';
import { toast } from 'sonner';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN';
  emailVerified: boolean;
  createdAt: string;
  lastLoginAt: string | null;
  enrollmentsCount: number;
  coursesCount: number;
  status: 'active' | 'inactive';
}

interface UsersTableProps {
  users: User[];
  onUpdate: () => void;
}

export function UsersTable({ users, onUpdate }: UsersTableProps) {
  const [editUser, setEditUser] = useState<User | null>(null);
  const [deleteUser, setDeleteUser] = useState<User | null>(null);
  const [approveUser, setApproveUser] = useState<User | null>(null);
  const [newRole, setNewRole] = useState<'STUDENT' | 'INSTRUCTOR' | 'ADMIN'>('STUDENT');
  const [loading, setLoading] = useState(false);

  const handleEditRole = (user: User) => {
    setEditUser(user);
    setNewRole(user.role);
  };

  const handleUpdateRole = async () => {
    if (!editUser) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/admin/users/${editUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al actualizar rol');
      }

      toast.success(`Rol actualizado a ${newRole}`);
      setEditUser(null);
      onUpdate();
    } catch (error: any) {
      toast.error(error.message || 'Error al actualizar usuario');
    } finally {
      setLoading(false);
    }
  };

  const handleApproveUser = async () => {
    if (!approveUser) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/admin/users/${approveUser.id}/approve`, {
        method: 'POST',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al aprobar usuario');
      }

      toast.success('Usuario aprobado exitosamente');
      setApproveUser(null);
      onUpdate();
    } catch (error: any) {
      toast.error(error.message || 'Error al aprobar usuario');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteUser) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/admin/users/${deleteUser.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al eliminar usuario');
      }

      toast.success('Usuario eliminado exitosamente');
      setDeleteUser(null);
      onUpdate();
    } catch (error: any) {
      toast.error(error.message || 'Error al eliminar usuario');
    } finally {
      setLoading(false);
    }
  };

  const getRoleBadge = (role: string) => {
    const variants: Record<string, { className: string; label: string }> = {
      ADMIN: { className: 'bg-red-100 text-red-800 hover:bg-red-100', label: 'Admin' },
      INSTRUCTOR: { className: 'bg-blue-100 text-blue-900 hover:bg-blue-100', label: 'Instructor' },
      STUDENT: { className: 'bg-green-100 text-green-800 hover:bg-green-100', label: 'Estudiante' },
    };
    const variant = variants[role] || variants.STUDENT;
    return <Badge className={variant.className}>{variant.label}</Badge>;
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Inscripciones</TableHead>
            <TableHead>Cursos</TableHead>
            <TableHead>Último Login</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium text-black">{user.name}</TableCell>
              <TableCell className="text-neutral-600">{user.email}</TableCell>
              <TableCell>{getRoleBadge(user.role)}</TableCell>
              <TableCell>
                <StatusBadge status={user.status} />
              </TableCell>
              <TableCell className="text-neutral-700">{user.enrollmentsCount}</TableCell>
              <TableCell className="text-neutral-700">{user.coursesCount}</TableCell>
              <TableCell className="text-neutral-600 text-sm">
                {user.lastLoginAt
                  ? new Date(user.lastLoginAt).toLocaleDateString('es-ES')
                  : 'Nunca'}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => handleEditRole(user)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Cambiar Rol
                    </DropdownMenuItem>
                    {!user.emailVerified && (
                      <DropdownMenuItem onClick={() => setApproveUser(user)}>
                        <UserCheck className="w-4 h-4 mr-2" />
                        Aprobar Usuario
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => setDeleteUser(user)}
                      className="text-red-600"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={!!editUser} onOpenChange={() => setEditUser(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cambiar Rol de Usuario</DialogTitle>
            <DialogDescription>
              Actualiza el rol de {editUser?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <RoleSelector value={newRole} onValueChange={setNewRole} />
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setEditUser(null)}>
              Cancelar
            </Button>
            <Button
              onClick={handleUpdateRole}
              disabled={loading || newRole === editUser?.role}
              className="bg-blue-900 hover:bg-blue-800 text-white"
            >
              {loading ? 'Actualizando...' : 'Actualizar Rol'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!approveUser} onOpenChange={() => setApproveUser(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Aprobar Usuario</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro de aprobar a {approveUser?.name} como {approveUser?.role}?
              El usuario podrá acceder a la plataforma.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleApproveUser}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700"
            >
              {loading ? 'Aprobando...' : 'Aprobar'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!deleteUser} onOpenChange={() => setDeleteUser(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar Usuario</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro de eliminar a {deleteUser?.name}? Esta acción no se puede deshacer.
              {deleteUser && (deleteUser.enrollmentsCount > 0 || deleteUser.coursesCount > 0) && (
                <span className="block mt-2 text-red-600 font-medium">
                  Advertencia: Este usuario tiene {deleteUser.enrollmentsCount} inscripciones y{' '}
                  {deleteUser.coursesCount} cursos.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteUser}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700"
            >
              {loading ? 'Eliminando...' : 'Eliminar'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
