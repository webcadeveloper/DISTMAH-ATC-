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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { StatusBadge } from './StatusBadge';
import { MoreVertical, Edit, Trash2, Star, Archive, Eye } from 'lucide-react';
import { toast } from 'sonner';

interface Course {
  id: string;
  title: string;
  software: string;
  category: string;
  level: string;
  duration: number;
  price: number;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  featured: boolean;
  popular: boolean;
  enrollmentCount: number;
  instructor: {
    id: string;
    name: string;
    email: string;
  };
  modulesCount: number;
  enrollmentsCount: number;
}

interface CoursesTableProps {
  courses: Course[];
  onUpdate: () => void;
}

export function CoursesTable({ courses, onUpdate }: CoursesTableProps) {
  const [editCourse, setEditCourse] = useState<Course | null>(null);
  const [deleteCourse, setDeleteCourse] = useState<Course | null>(null);
  const [newStatus, setNewStatus] = useState<'DRAFT' | 'PUBLISHED' | 'ARCHIVED'>('PUBLISHED');
  const [newFeatured, setNewFeatured] = useState(false);
  const [newPopular, setNewPopular] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEdit = (course: Course) => {
    setEditCourse(course);
    setNewStatus(course.status);
    setNewFeatured(course.featured);
    setNewPopular(course.popular);
  };

  const handleUpdate = async () => {
    if (!editCourse) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/admin/courses/${editCourse.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          featured: newFeatured,
          popular: newPopular,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al actualizar curso');
      }

      toast.success('Curso actualizado exitosamente');
      setEditCourse(null);
      onUpdate();
    } catch (error: any) {
      toast.error(error.message || 'Error al actualizar curso');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteCourse) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/admin/courses/${deleteCourse.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al eliminar curso');
      }

      toast.success('Curso eliminado exitosamente');
      setDeleteCourse(null);
      onUpdate();
    } catch (error: any) {
      toast.error(error.message || 'Error al eliminar curso');
    } finally {
      setLoading(false);
    }
  };

  const getLevelBadge = (level: string) => {
    const variants: Record<string, string> = {
      BASICO: 'bg-green-100 text-green-800 hover:bg-green-100',
      INTERMEDIO: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
      AVANZADO: 'bg-red-100 text-red-800 hover:bg-red-100',
    };
    return <Badge className={variants[level] || variants.BASICO}>{level}</Badge>;
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Curso</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Nivel</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Duración</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Inscripciones</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>
                <div>
                  <p className="font-medium text-black">{course.title}</p>
                  <p className="text-xs text-gray-600">{course.software}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {course.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {course.popular && (
                      <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-100 text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-100">
                  {course.category}
                </Badge>
              </TableCell>
              <TableCell>{getLevelBadge(course.level)}</TableCell>
              <TableCell>
                <div>
                  <p className="text-sm font-medium text-gray-900">{course.instructor.name}</p>
                  <p className="text-xs text-gray-600">{course.instructor.email}</p>
                </div>
              </TableCell>
              <TableCell className="text-gray-700">{course.duration} hrs</TableCell>
              <TableCell className="text-gray-700 font-medium">${course.price}</TableCell>
              <TableCell>
                <StatusBadge status={course.status} />
              </TableCell>
              <TableCell className="text-gray-700">{course.enrollmentsCount}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalles
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEdit(course)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Editar Estado
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => setDeleteCourse(course)}
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

      <Dialog open={!!editCourse} onOpenChange={() => setEditCourse(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Curso</DialogTitle>
            <DialogDescription>{editCourse?.title}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block">Estado</label>
              <Select value={newStatus} onValueChange={(value: any) => setNewStatus(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DRAFT">Borrador</SelectItem>
                  <SelectItem value="PUBLISHED">Publicado</SelectItem>
                  <SelectItem value="ARCHIVED">Archivado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newFeatured}
                  onChange={(e) => setNewFeatured(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm font-medium text-gray-900">Marcar como Featured</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newPopular}
                  onChange={(e) => setNewPopular(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm font-medium text-gray-900">Marcar como Popular</span>
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setEditCourse(null)}>
              Cancelar
            </Button>
            <Button
              onClick={handleUpdate}
              disabled={loading}
              className="bg-blue-900 hover:bg-blue-800 text-white"
            >
              {loading ? 'Actualizando...' : 'Actualizar'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteCourse} onOpenChange={() => setDeleteCourse(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar Curso</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro de eliminar "{deleteCourse?.title}"? Esta acción no se puede deshacer.
              {deleteCourse && deleteCourse.enrollmentsCount > 0 && (
                <span className="block mt-2 text-red-600 font-medium">
                  Advertencia: Este curso tiene {deleteCourse.enrollmentsCount} inscripciones
                  activas. Considera archivarlo en lugar de eliminarlo.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
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
