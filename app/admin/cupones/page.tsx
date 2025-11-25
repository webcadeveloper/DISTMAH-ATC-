'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Plus,
  Tag,
  Trash2,
  Edit,
  CheckCircle,
  XCircle,
  AlertCircle,
  Percent,
  DollarSign,
} from 'lucide-react';

interface Coupon {
  id: string;
  code: string;
  type: 'PERCENTAGE' | 'FIXED_AMOUNT';
  value: number;
  minPurchase: number | null;
  maxDiscount: number | null;
  validFrom: string;
  validUntil: string;
  maxUses: number | null;
  currentUses: number;
  active: boolean;
  applicableCourses: string[];
  createdAt: string;
}

export default function CuponesAdminPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    code: '',
    type: 'PERCENTAGE' as 'PERCENTAGE' | 'FIXED_AMOUNT',
    value: '',
    minPurchase: '',
    maxDiscount: '',
    validFrom: '',
    validUntil: '',
    maxUses: '',
  });

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const response = await fetch('/api/admin/coupons');
      const data = await response.json();
      setCoupons(data.coupons || []);
    } catch (err) {
      setError('Error al cargar cupones');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/admin/coupons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: formData.code.toUpperCase(),
          type: formData.type,
          value: parseFloat(formData.value),
          minPurchase: formData.minPurchase ? parseFloat(formData.minPurchase) : undefined,
          maxDiscount: formData.maxDiscount ? parseFloat(formData.maxDiscount) : undefined,
          validFrom: new Date(formData.validFrom).toISOString(),
          validUntil: new Date(formData.validUntil).toISOString(),
          maxUses: formData.maxUses ? parseInt(formData.maxUses) : undefined,
          applicableCourses: [],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Error al crear cupón');
        return;
      }

      setSuccess('Cupón creado exitosamente');
      setShowCreateDialog(false);
      setFormData({
        code: '',
        type: 'PERCENTAGE',
        value: '',
        minPurchase: '',
        maxDiscount: '',
        validFrom: '',
        validUntil: '',
        maxUses: '',
      });
      fetchCoupons();
    } catch (err) {
      setError('Error al crear cupón');
    }
  };

  const handleToggleActive = async (id: string, currentActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/coupons/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: !currentActive }),
      });

      if (!response.ok) {
        setError('Error al actualizar cupón');
        return;
      }

      setSuccess('Cupón actualizado exitosamente');
      fetchCoupons();
    } catch (err) {
      setError('Error al actualizar cupón');
    }
  };

  const handleDeleteCoupon = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este cupón?')) return;

    try {
      const response = await fetch(`/api/admin/coupons/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        setError('Error al eliminar cupón');
        return;
      }

      setSuccess('Cupón eliminado exitosamente');
      fetchCoupons();
    } catch (err) {
      setError('Error al eliminar cupón');
    }
  };

  const isExpired = (validUntil: string) => new Date(validUntil) < new Date();
  const isActive = (validFrom: string, validUntil: string) => {
    const now = new Date();
    return new Date(validFrom) <= now && new Date(validUntil) >= now;
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">Gestión de Cupones</h1>
              <p className="text-neutral-600 mt-2">
                Crea y administra cupones de descuento para tus cursos
              </p>
            </div>

            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Crear Cupón
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Crear Nuevo Cupón</DialogTitle>
                  <DialogDescription>
                    Completa los datos para crear un nuevo cupón de descuento
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleCreateCoupon} className="space-y-4">
                  {/* Código */}
                  <div>
                    <Label htmlFor="code">Código del Cupón *</Label>
                    <Input
                      id="code"
                      value={formData.code}
                      onChange={(e) =>
                        setFormData({ ...formData, code: e.target.value.toUpperCase() })
                      }
                      placeholder="VERANO2026"
                      className="uppercase"
                      required
                    />
                  </div>

                  {/* Tipo y Valor */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="type">Tipo de Descuento *</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value: 'PERCENTAGE' | 'FIXED_AMOUNT') =>
                          setFormData({ ...formData, type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PERCENTAGE">Porcentaje</SelectItem>
                          <SelectItem value="FIXED_AMOUNT">Monto Fijo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="value">
                        {formData.type === 'PERCENTAGE' ? 'Porcentaje (%)' : 'Monto ($)'}
                      </Label>
                      <Input
                        id="value"
                        type="number"
                        step="0.01"
                        min="0"
                        max={formData.type === 'PERCENTAGE' ? '100' : undefined}
                        value={formData.value}
                        onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                        placeholder={formData.type === 'PERCENTAGE' ? '20' : '50'}
                        required
                      />
                    </div>
                  </div>

                  {/* Compra Mínima y Descuento Máximo */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="minPurchase">Compra Mínima ($)</Label>
                      <Input
                        id="minPurchase"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.minPurchase}
                        onChange={(e) =>
                          setFormData({ ...formData, minPurchase: e.target.value })
                        }
                        placeholder="100"
                      />
                    </div>

                    <div>
                      <Label htmlFor="maxDiscount">Descuento Máximo ($)</Label>
                      <Input
                        id="maxDiscount"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.maxDiscount}
                        onChange={(e) =>
                          setFormData({ ...formData, maxDiscount: e.target.value })
                        }
                        placeholder="50"
                      />
                    </div>
                  </div>

                  {/* Fechas */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="validFrom">Válido Desde *</Label>
                      <Input
                        id="validFrom"
                        type="datetime-local"
                        value={formData.validFrom}
                        onChange={(e) =>
                          setFormData({ ...formData, validFrom: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="validUntil">Válido Hasta *</Label>
                      <Input
                        id="validUntil"
                        type="datetime-local"
                        value={formData.validUntil}
                        onChange={(e) =>
                          setFormData({ ...formData, validUntil: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Usos Máximos */}
                  <div>
                    <Label htmlFor="maxUses">Usos Máximos (opcional)</Label>
                    <Input
                      id="maxUses"
                      type="number"
                      min="1"
                      value={formData.maxUses}
                      onChange={(e) => setFormData({ ...formData, maxUses: e.target.value })}
                      placeholder="100"
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                      Dejar vacío para usos ilimitados
                    </p>
                  </div>

                  {/* Botones */}
                  <div className="flex gap-2 justify-end pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowCreateDialog(false)}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Crear Cupón
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 border-green-500 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">{success}</AlertDescription>
          </Alert>
        )}

        {/* Coupons List */}
        <div className="bg-white rounded-lg border border-neutral-200">
          {loading ? (
            <div className="p-8 text-center text-neutral-600">Cargando cupones...</div>
          ) : coupons.length === 0 ? (
            <div className="p-8 text-center text-neutral-600">
              No hay cupones creados. Crea tu primer cupón para comenzar.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase">
                      Código
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase">
                      Descuento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase">
                      Usos
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase">
                      Validez
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {coupons.map((coupon) => (
                    <tr key={coupon.id} className="hover:bg-neutral-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-neutral-400" />
                          <span className="font-mono font-semibold text-neutral-900">
                            {coupon.code}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          {coupon.type === 'PERCENTAGE' ? (
                            <>
                              <Percent className="w-4 h-4 text-blue-600" />
                              <span>{coupon.value}%</span>
                            </>
                          ) : (
                            <>
                              <DollarSign className="w-4 h-4 text-green-600" />
                              <span>${coupon.value}</span>
                            </>
                          )}
                        </div>
                        {coupon.maxDiscount && (
                          <p className="text-xs text-neutral-500 mt-1">
                            Máx: ${coupon.maxDiscount}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-neutral-700">
                          {coupon.currentUses}
                          {coupon.maxUses && ` / ${coupon.maxUses}`}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <p className="text-neutral-700">
                            {new Date(coupon.validFrom).toLocaleDateString('es', {
                              month: 'short',
                              day: 'numeric',
                            })}
                            {' - '}
                            {new Date(coupon.validUntil).toLocaleDateString('es', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {coupon.active ? (
                          isActive(coupon.validFrom, coupon.validUntil) ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              <CheckCircle className="w-3 h-3" />
                              Activo
                            </span>
                          ) : isExpired(coupon.validUntil) ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                              <XCircle className="w-3 h-3" />
                              Expirado
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                              Programado
                            </span>
                          )
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                            <XCircle className="w-3 h-3" />
                            Inactivo
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleToggleActive(coupon.id, coupon.active)}
                          >
                            {coupon.active ? 'Desactivar' : 'Activar'}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteCoupon(coupon.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
