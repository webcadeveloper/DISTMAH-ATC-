'use client';

import { useCartStore } from '@/lib/cart-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingCart, CreditCard, BookOpen, ArrowRight } from 'lucide-react';

export default function CarritoPage() {
  const { items, removeItem, clearCart, getTotal } = useCartStore();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="p-8 max-w-4xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white">Mi Carrito</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            Tu carrito de compras
          </p>
        </div>

        <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
          <CardContent className="p-12 text-center">
            <ShoppingCart className="w-16 h-16 mx-auto text-neutral-300 dark:text-neutral-600 mb-4" />
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              Tu carrito esta vacio
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-6">
              Explora nuestro catalogo y agrega cursos a tu carrito
            </p>
            <Link href="/es/estudiante/catalogo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Explorar Cursos
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">Mi Carrito</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            {items.length} {items.length === 1 ? 'curso' : 'cursos'} en tu carrito
          </p>
        </div>
        <Button
          variant="outline"
          onClick={clearCart}
          className="text-red-600 border-red-200 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-900/20"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Vaciar Carrito
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    {item.imagen ? (
                      <Image
                        src={item.imagen}
                        alt={item.titulo}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-white/50" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                          {item.categoria}
                        </p>
                        <h3 className="font-semibold text-black dark:text-white line-clamp-1">
                          {item.titulo}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs">
                            {item.nivel}
                          </Badge>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            {item.duracion}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-black dark:text-white">
                          ${item.precio}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {item.moneda}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 sticky top-8">
            <CardHeader>
              <CardTitle className="text-black dark:text-white">Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400 truncate max-w-[200px]">
                      {item.titulo}
                    </span>
                    <span className="text-black dark:text-white font-medium">
                      ${item.precio}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                  <span className="text-black dark:text-white">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-neutral-600 dark:text-neutral-400">Descuento</span>
                  <span className="text-green-600 dark:text-green-400">-$0.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-neutral-200 dark:border-neutral-700">
                  <span className="text-black dark:text-white">Total</span>
                  <span className="text-black dark:text-white">${total.toFixed(2)} USD</span>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                <CreditCard className="w-4 h-4 mr-2" />
                Proceder al Pago
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
                Pago seguro con Stripe. Acceso inmediato despues del pago.
              </p>

              <Link href="/es/estudiante/catalogo" className="block">
                <Button variant="outline" className="w-full">
                  Seguir Comprando
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
