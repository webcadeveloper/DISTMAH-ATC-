'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CourseMetadata } from './course-loader';

export interface CartItem {
  id: string;
  titulo: string;
  slug: string;
  precio: number;
  moneda: string;
  imagen?: string;
  categoria: string;
  nivel: string;
  duracion: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (course: CourseMetadata) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (course: CourseMetadata) => {
        const { items } = get();
        if (items.find(item => item.id === course.id)) return;

        set({
          items: [...items, {
            id: course.id,
            titulo: course.titulo,
            slug: course.slug,
            precio: course.precio,
            moneda: course.moneda,
            imagen: course.imagen,
            categoria: course.categoria,
            nivel: course.nivel,
            duracion: course.duracion,
          }]
        });
      },

      removeItem: (id: string) => {
        set({ items: get().items.filter(item => item.id !== id) });
      },

      clearCart: () => set({ items: [] }),

      isInCart: (id: string) => get().items.some(item => item.id === id),

      getTotal: () => get().items.reduce((sum, item) => sum + item.precio, 0),

      getItemCount: () => get().items.length,
    }),
    {
      name: 'distmah-cart',
    }
  )
);
