'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UsersTable } from '@/components/admin/UsersTable';
import { Download, Search, Filter } from 'lucide-react';
import { toast } from 'sonner';

export default function UsersManagementPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, roleFilter, search]);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        role: roleFilter,
        ...(search && { search }),
      });

      const response = await fetch(`/api/admin/users?${params}`);
      if (!response.ok) throw new Error('Error al cargar usuarios');

      const data = await response.json();
      setUsers(data.users);
      setPagination(data.pagination);
    } catch (error: any) {
      toast.error(error.message || 'Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    const headers = ['Nombre', 'Email', 'Rol', 'Estado', 'Inscripciones', 'Fecha Registro'];
    const rows = users.map((user) => [
      user.name,
      user.email,
      user.role,
      user.status,
      user.enrollmentsCount,
      new Date(user.createdAt).toLocaleDateString('es-ES'),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `usuarios-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    toast.success('CSV exportado exitosamente');
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleRoleFilter = (value: string) => {
    setRoleFilter(value);
    setPage(1);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">Gestión de Usuarios</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            Administra estudiantes, instructores y administradores
          </p>
        </div>
        <Button
          onClick={handleExportCSV}
          className="bg-blue-900 hover:bg-blue-800 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Exportar CSV
        </Button>
      </div>

      <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-black dark:text-white">
              Todos los Usuarios ({pagination.total})
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              <Input
                placeholder="Buscar por nombre o email..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="flex-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              <Select value={roleFilter} onValueChange={handleRoleFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">Todos los roles</SelectItem>
                  <SelectItem value="STUDENT">Estudiantes</SelectItem>
                  <SelectItem value="INSTRUCTOR">Instructores</SelectItem>
                  <SelectItem value="ADMIN">Administradores</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 dark:border-blue-400 mx-auto mb-4"></div>
              <p className="text-neutral-600 dark:text-neutral-400">Cargando usuarios...</p>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-600 dark:text-neutral-400">No se encontraron usuarios</p>
            </div>
          ) : (
            <>
              <UsersTable users={users} onUpdate={loadUsers} />

              {pagination.totalPages > 1 && (
                <div className="flex items-center justify-between mt-6">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Mostrando {(page - 1) * pagination.limit + 1} -{' '}
                    {Math.min(page * pagination.limit, pagination.total)} de{' '}
                    {pagination.total} usuarios
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                    >
                      Anterior
                    </Button>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Página {page} de {pagination.totalPages}
                    </span>
                    <Button
                      variant="outline"
                      onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                      disabled={page === pagination.totalPages}
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
