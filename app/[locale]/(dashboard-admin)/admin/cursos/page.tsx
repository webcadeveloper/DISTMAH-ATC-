'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Filter, MoreVertical, Edit, Eye, Trash2, Download } from 'lucide-react';
import { toast } from 'sonner';

interface Course {
  id: string;
  title: string;
  instructor: {
    name: string;
    email: string;
  };
  enrollmentsCount: number;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  price: number;
  currency: string;
  createdAt: string;
}

export default function CoursesManagementPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });

  useEffect(() => {
    loadCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, statusFilter, search]);

  const loadCourses = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        status: statusFilter,
        ...(search && { search }),
      });

      const response = await fetch(`/api/admin/courses?${params}`);
      if (!response.ok) throw new Error('Error al cargar cursos');

      const data = await response.json();
      setCourses(data.courses);
      setPagination(data.pagination);
    } catch (error: any) {
      toast.error(error.message || 'Error al cargar cursos');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (courseId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/courses/${courseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('Error al actualizar estado del curso');

      toast.success('Estado del curso actualizado');
      loadCourses();
    } catch (error: any) {
      toast.error(error.message || 'Error al actualizar curso');
    }
  };

  const handleDelete = async (courseId: string) => {
    if (!confirm('¿Estás seguro de eliminar este curso? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/courses/${courseId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Error al eliminar curso');

      toast.success('Curso eliminado exitosamente');
      loadCourses();
    } catch (error: any) {
      toast.error(error.message || 'Error al eliminar curso');
    }
  };

  const handleExportCSV = () => {
    const headers = ['Título', 'Instructor', 'Estudiantes', 'Estado', 'Precio', 'Fecha Creación'];
    const rows = courses.map((course) => [
      course.title,
      course.instructor.name,
      course.enrollmentsCount,
      course.status,
      `${course.price} ${course.currency}`,
      new Date(course.createdAt).toLocaleDateString('es-ES'),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cursos-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    toast.success('CSV exportado exitosamente');
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      PUBLISHED: 'bg-green-100 text-green-800',
      DRAFT: 'bg-yellow-100 text-yellow-800',
      ARCHIVED: 'bg-gray-100 text-gray-800',
    };

    const labels = {
      PUBLISHED: 'Publicado',
      DRAFT: 'Borrador',
      ARCHIVED: 'Archivado',
    };

    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Gestión de Cursos</h1>
          <p className="text-gray-600 mt-1">
            Administra todos los cursos de la plataforma DISTMAH ATC
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

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Todos los Cursos ({pagination.total})</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-600" />
              <Input
                placeholder="Buscar por título o instructor..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="flex-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <Select
                value={statusFilter}
                onValueChange={(value) => {
                  setStatusFilter(value);
                  setPage(1);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">Todos los estados</SelectItem>
                  <SelectItem value="PUBLISHED">Publicados</SelectItem>
                  <SelectItem value="DRAFT">Borradores</SelectItem>
                  <SelectItem value="ARCHIVED">Archivados</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
              <p className="text-gray-600">Cargando cursos...</p>
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No se encontraron cursos</p>
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead className="text-center">Estudiantes</TableHead>
                    <TableHead className="text-center">Estado</TableHead>
                    <TableHead className="text-right">Precio</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-black">{course.title}</p>
                          <p className="text-xs text-gray-600">
                            Creado {new Date(course.createdAt).toLocaleDateString('es-ES')}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm text-gray-900">{course.instructor.name}</p>
                          <p className="text-xs text-gray-600">{course.instructor.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="font-medium text-black">{course.enrollmentsCount}</span>
                      </TableCell>
                      <TableCell className="text-center">{getStatusBadge(course.status)}</TableCell>
                      <TableCell className="text-right font-medium text-gray-900">
                        ${course.price} {course.currency}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => window.open(`/cursos/${course.id}`, '_blank')}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Ver curso
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => window.open(`/instructor/cursos/${course.id}`, '_blank')}
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Editar
                            </DropdownMenuItem>
                            {course.status === 'DRAFT' && (
                              <DropdownMenuItem
                                onClick={() => handleStatusChange(course.id, 'PUBLISHED')}
                              >
                                Publicar
                              </DropdownMenuItem>
                            )}
                            {course.status === 'PUBLISHED' && (
                              <DropdownMenuItem
                                onClick={() => handleStatusChange(course.id, 'ARCHIVED')}
                              >
                                Archivar
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              onClick={() => handleDelete(course.id)}
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

              {pagination.totalPages > 1 && (
                <div className="flex items-center justify-between mt-6">
                  <p className="text-sm text-gray-600">
                    Mostrando {(page - 1) * pagination.limit + 1} -{' '}
                    {Math.min(page * pagination.limit, pagination.total)} de {pagination.total}{' '}
                    cursos
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                    >
                      Anterior
                    </Button>
                    <span className="text-sm text-gray-600">
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
