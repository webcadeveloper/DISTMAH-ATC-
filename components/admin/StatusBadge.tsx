'use client';

import { Badge } from '@/components/ui/badge';

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' | 'ACTIVE' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'CANCELLED';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const variants: Record<string, { className: string; label: string }> = {
    active: {
      className: 'bg-green-100 text-green-800 hover:bg-green-100',
      label: 'Activo',
    },
    inactive: {
      className: 'bg-neutral-100 text-neutral-800 hover:bg-neutral-100',
      label: 'Inactivo',
    },
    DRAFT: {
      className: 'bg-neutral-100 text-neutral-800 hover:bg-neutral-100',
      label: 'Borrador',
    },
    PUBLISHED: {
      className: 'bg-green-100 text-green-800 hover:bg-green-100',
      label: 'Publicado',
    },
    ARCHIVED: {
      className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
      label: 'Archivado',
    },
    ACTIVE: {
      className: 'bg-green-100 text-green-800 hover:bg-green-100',
      label: 'Activo',
    },
    PENDING: {
      className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
      label: 'Pendiente',
    },
    COMPLETED: {
      className: 'bg-blue-100 text-blue-900 hover:bg-blue-100',
      label: 'Completado',
    },
    EXPIRED: {
      className: 'bg-red-100 text-red-800 hover:bg-red-100',
      label: 'Expirado',
    },
    CANCELLED: {
      className: 'bg-neutral-100 text-neutral-800 hover:bg-neutral-100',
      label: 'Cancelado',
    },
  };

  const variant = variants[status] || variants.inactive;

  return <Badge className={variant.className}>{variant.label}</Badge>;
}
