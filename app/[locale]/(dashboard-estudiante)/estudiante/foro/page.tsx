'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, TrendingUp, Plus, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mockCategorias = [
  {
    id: '1',
    nombre: 'Civil 3D - Básico',
    descripcion: 'Dudas y discusiones sobre el curso básico',
    totalTemas: 45,
    totalMensajes: 234,
    ultimaActividad: 'Hace 2 horas',
    color: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    id: '2',
    nombre: 'Civil 3D - Avanzado',
    descripcion: 'Temas avanzados y casos especiales',
    totalTemas: 32,
    totalMensajes: 189,
    ultimaActividad: 'Hace 5 horas',
    color: 'bg-purple-100 text-purple-700 border-purple-200',
  },
  {
    id: '3',
    nombre: 'Revit Architecture',
    descripcion: 'Comunidad de estudiantes de Revit',
    totalTemas: 28,
    totalMensajes: 156,
    ultimaActividad: 'Hace 1 día',
    color: 'bg-green-100 text-green-700 border-green-200',
  },
  {
    id: '4',
    nombre: 'General',
    descripcion: 'Discusiones generales y anuncios',
    totalTemas: 67,
    totalMensajes: 421,
    ultimaActividad: 'Hace 30 minutos',
    color: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  },
];

const mockTemasRecientes = [
  {
    id: '1',
    titulo: '¿Cómo importar puntos topográficos desde Excel?',
    autor: 'Carlos M.',
    categoria: 'Civil 3D - Básico',
    respuestas: 12,
    vistas: 89,
    ultimaActividad: 'Hace 2 horas',
    esPopular: true,
  },
  {
    id: '2',
    titulo: 'Error al crear superficie de volumen',
    autor: 'Ana García',
    categoria: 'Civil 3D - Avanzado',
    respuestas: 5,
    vistas: 34,
    ultimaActividad: 'Hace 3 horas',
    esPopular: false,
  },
  {
    id: '3',
    titulo: 'Mejores prácticas para modelar escaleras en Revit',
    autor: 'Roberto S.',
    categoria: 'Revit Architecture',
    respuestas: 18,
    vistas: 156,
    ultimaActividad: 'Hace 5 horas',
    esPopular: true,
  },
  {
    id: '4',
    titulo: 'Compartir templates personalizados',
    autor: 'María López',
    categoria: 'General',
    respuestas: 8,
    vistas: 67,
    ultimaActividad: 'Hace 1 día',
    esPopular: false,
  },
];

export default function ForoPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Foro de la Comunidad</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Comparte conocimiento y resuelve dudas con otros estudiantes</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Tema
        </Button>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <Input
            placeholder="Buscar en el foro..."
            className="pl-10 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white"
          />
        </div>
        <Button variant="outline" className="border-neutral-200 dark:border-neutral-600">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Categorías</h2>
            <div className="space-y-4">
              {mockCategorias.map((categoria) => (
                <Card key={categoria.id} className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${categoria.color} border flex items-center justify-center flex-shrink-0`}>
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{categoria.nombre}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{categoria.descripcion}</p>
                        <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                          <span>{categoria.totalTemas} temas</span>
                          <span>•</span>
                          <span>{categoria.totalMensajes} mensajes</span>
                          <span>•</span>
                          <span>{categoria.ultimaActividad}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Temas Recientes</h2>
            <div className="space-y-3">
              {mockTemasRecientes.map((tema) => (
                <Card key={tema.id} className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-neutral-900 dark:text-white">{tema.titulo}</h3>
                          {tema.esPopular && (
                            <TrendingUp className="w-4 h-4 text-orange-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
                          <span className="font-medium">{tema.autor}</span>
                          <span>•</span>
                          <span className="text-blue-600 dark:text-blue-400">{tema.categoria}</span>
                          <span>•</span>
                          <span>{tema.ultimaActividad}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{tema.respuestas}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>👁️</span>
                          <span>{tema.vistas}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4 border-neutral-200 dark:border-neutral-600">
              Ver Más Temas
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
            <CardContent className="p-6">
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Estadísticas</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Tus Publicaciones</span>
                    <span className="text-lg font-bold text-neutral-900 dark:text-white">23</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Respuestas Dadas</span>
                    <span className="text-lg font-bold text-neutral-900 dark:text-white">47</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Puntos de Reputación</span>
                    <span className="text-lg font-bold text-neutral-900 dark:text-white">156</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
            <CardContent className="p-6">
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Usuarios Activos</h3>
              <div className="space-y-3">
                {[
                  { nombre: 'Carlos M.', puntos: 234, avatar: 'CM' },
                  { nombre: 'Ana García', puntos: 189, avatar: 'AG' },
                  { nombre: 'Roberto S.', puntos: 156, avatar: 'RS' },
                  { nombre: 'María López', puntos: 142, avatar: 'ML' },
                ].map((usuario, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      {usuario.avatar}
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-neutral-900 dark:text-white">{usuario.nombre}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{usuario.puntos} puntos</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Reglas de la Comunidad</h3>
                  <p className="text-xs text-blue-700 dark:text-blue-300 mb-3">
                    Mantén un ambiente respetuoso y colaborativo. Lee nuestras reglas antes de publicar.
                  </p>
                  <Button size="sm" variant="outline" className="border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900">
                    Ver Reglas
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
