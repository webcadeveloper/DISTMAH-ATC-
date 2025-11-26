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
import { Search, Filter, Download, DollarSign, CreditCard, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

interface Payment {
  id: string;
  student: {
    name: string;
    email: string;
  };
  course: {
    title: string;
  };
  amount: number;
  currency: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED' | 'REFUNDED';
  paymentMethod: string;
  transactionId: string;
  createdAt: string;
}

interface PaymentStats {
  totalRevenue: number;
  monthlyRevenue: number;
  pendingPayments: number;
  completedPayments: number;
  failedPayments: number;
}

export default function PaymentsManagementPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [stats, setStats] = useState<PaymentStats | null>(null);
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
    loadPayments();
    loadStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, statusFilter, search]);

  const loadPayments = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        status: statusFilter,
        ...(search && { search }),
      });

      const response = await fetch(`/api/admin/payments?${params}`);
      if (!response.ok) throw new Error('Error al cargar pagos');

      const data = await response.json();
      setPayments(data.payments);
      setPagination(data.pagination);
    } catch (error: any) {
      toast.error(error.message || 'Error al cargar pagos');
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const response = await fetch('/api/admin/payments/stats');
      if (!response.ok) throw new Error('Error al cargar estadísticas');

      const data = await response.json();
      setStats(data);
    } catch (error: any) {
      toast.error(error.message || 'Error al cargar estadísticas');
    }
  };

  const handleExportCSV = () => {
    const headers = [
      'ID Transacción',
      'Fecha',
      'Estudiante',
      'Curso',
      'Monto',
      'Estado',
      'Método',
    ];
    const rows = payments.map((payment) => [
      payment.transactionId,
      new Date(payment.createdAt).toLocaleDateString('es-ES'),
      payment.student.name,
      payment.course.title,
      `${payment.amount} ${payment.currency}`,
      payment.status,
      payment.paymentMethod,
    ]);

    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pagos-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    toast.success('CSV exportado exitosamente');
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      COMPLETED: 'bg-green-100 text-green-800',
      PENDING: 'bg-yellow-100 text-yellow-800',
      FAILED: 'bg-red-100 text-red-800',
      REFUNDED: 'bg-gray-100 text-gray-800',
    };

    const labels = {
      COMPLETED: 'Completado',
      PENDING: 'Pendiente',
      FAILED: 'Fallido',
      REFUNDED: 'Reembolsado',
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
          <h1 className="text-3xl font-bold text-black">Gestión de Pagos</h1>
          <p className="text-gray-600 mt-1">Transacciones y facturación de la plataforma</p>
        </div>
        <Button
          onClick={handleExportCSV}
          className="bg-blue-900 hover:bg-blue-800 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Exportar CSV
        </Button>
      </div>

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">Ingresos Totales</p>
                <div className="p-2 bg-green-50 rounded-full">
                  <DollarSign className="w-5 h-5 text-green-700" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-black">
                  ${stats.totalRevenue.toLocaleString()}
                </h3>
                <span className="text-xs text-green-700 font-medium bg-green-50 px-2 py-1 rounded-full">
                  USD
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">Ingresos del Mes</p>
                <div className="p-2 bg-blue-50 rounded-full">
                  <TrendingUp className="w-5 h-5 text-blue-900" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-black">
                  ${stats.monthlyRevenue.toLocaleString()}
                </h3>
                <span className="text-xs text-blue-900 font-medium bg-blue-50 px-2 py-1 rounded-full">
                  Este mes
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">Pagos Completados</p>
                <div className="p-2 bg-green-50 rounded-full">
                  <CreditCard className="w-5 h-5 text-green-700" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-black">{stats.completedPayments}</h3>
                <span className="text-xs text-green-700 font-medium bg-green-50 px-2 py-1 rounded-full">
                  Exitosos
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">Pagos Pendientes</p>
                <div className="p-2 bg-yellow-50 rounded-full">
                  <CreditCard className="w-5 h-5 text-yellow-700" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-black">{stats.pendingPayments}</h3>
                <span className="text-xs text-yellow-700 font-medium bg-yellow-50 px-2 py-1 rounded-full">
                  En proceso
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Transacciones Recientes ({pagination.total})</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-600" />
              <Input
                placeholder="Buscar por estudiante, curso o ID transacción..."
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
                  <SelectItem value="COMPLETED">Completados</SelectItem>
                  <SelectItem value="PENDING">Pendientes</SelectItem>
                  <SelectItem value="FAILED">Fallidos</SelectItem>
                  <SelectItem value="REFUNDED">Reembolsados</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
              <p className="text-gray-600">Cargando pagos...</p>
            </div>
          ) : payments.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No se encontraron pagos</p>
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Estudiante</TableHead>
                    <TableHead>Curso</TableHead>
                    <TableHead className="text-right">Monto</TableHead>
                    <TableHead className="text-center">Estado</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead>ID Transacción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="text-gray-700">
                        {new Date(payment.createdAt).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-black">{payment.student.name}</p>
                          <p className="text-xs text-gray-600">{payment.student.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-900">{payment.course.title}</TableCell>
                      <TableCell className="text-right font-medium text-black">
                        ${payment.amount} {payment.currency}
                      </TableCell>
                      <TableCell className="text-center">{getStatusBadge(payment.status)}</TableCell>
                      <TableCell className="text-gray-700">
                        {payment.paymentMethod === 'STRIPE' && 'Tarjeta de Crédito'}
                        {payment.paymentMethod === 'PAYPAL' && 'PayPal'}
                        {payment.paymentMethod === 'TRANSFER' && 'Transferencia'}
                        {payment.paymentMethod === 'FREE' && 'Gratis'}
                      </TableCell>
                      <TableCell className="font-mono text-xs text-gray-600">
                        {payment.transactionId}
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
                    transacciones
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
