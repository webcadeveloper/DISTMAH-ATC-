'use client';

import { Badge } from '@/components/ui/badge';

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' | 'ACTIVE' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'CANCELLED';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const variants: Record<string, { className: string; label: string }> = {
    active: {
      className: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/40',
      label: 'Activo',
    },
    inactive: {
      className: 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600',
      label: 'Inactivo',
    },
    DRAFT: {
      className: 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600',
      label: 'Borrador',
    },
    PUBLISHED: {
      className: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/40',
      label: 'Publicado',
    },
    ARCHIVED: {
      className: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/40',
      label: 'Archivado',
    },
    ACTIVE: {
      className: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/40',
      label: 'Activo',
    },
    PENDING: {
      className: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/40',
      label: 'Pendiente',
    },
    COMPLETED: {
      className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40',
      label: 'Completado',
    },
    EXPIRED: {
      className: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40',
      label: 'Expirado',
    },
    CANCELLED: {
      className: 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600',
      label: 'Cancelado',
    },
  };

  const variant = variants[status] || variants.inactive;

  return <Badge className={variant.className}>{variant.label}</Badge>;
}
