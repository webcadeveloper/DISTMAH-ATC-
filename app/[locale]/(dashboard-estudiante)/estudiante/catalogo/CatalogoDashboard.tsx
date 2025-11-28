'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CourseMetadata } from '@/lib/course-loader';
import { Search, X, Clock, BookOpen, Star, Award, Users, CheckCircle2, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CatalogoDashboardProps {
  courses: CourseMetadata[];
}

type SortOption = 'newest' | 'popular' | 'rating' | 'price-asc' | 'price-desc' | 'alphabetical';

export default function CatalogoDashboard({ courses }: CatalogoDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [selectedCourse, setSelectedCourse] = useState<CourseMetadata | null>(null);

  const categorias = useMemo(
    () => Array.from(new Set(courses.map((c) => c.categoria))),
    [courses]
  );

  const niveles = useMemo(
    () => Array.from(new Set(courses.map((c) => c.nivel))),
    [courses]
  );

  const matchesSearch = (course: CourseMetadata, query: string): boolean => {
    const lowerQuery = query.toLowerCase();
    return (
      course.titulo.toLowerCase().includes(lowerQuery) ||
      course.descripcion.toLowerCase().includes(lowerQuery) ||
      course.categoria.toLowerCase().includes(lowerQuery) ||
      course.nivel.toLowerCase().includes(lowerQuery) ||
      (course.instructor ? course.instructor.toLowerCase().includes(lowerQuery) : false)
    );
  };

  const matchesPriceRange = (price: number, range: string): boolean => {
    switch (range) {
      case 'free':
        return price === 0;
      case '0-100':
        return price > 0 && price <= 100;
      case '100-300':
        return price > 100 && price <= 300;
      case '300+':
        return price > 300;
      default:
        return true;
    }
  };

  const sortCourses = (a: CourseMetadata, b: CourseMetadata, sortOption: SortOption): number => {
    switch (sortOption) {
      case 'newest':
        return new Date(b.lastUpdated || 0).getTime() - new Date(a.lastUpdated || 0).getTime();
      case 'popular':
        return (b.enrollmentCount || 0) - (a.enrollmentCount || 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'price-asc':
        return a.precio - b.precio;
      case 'price-desc':
        return b.precio - a.precio;
      case 'alphabetical':
        return a.titulo.localeCompare(b.titulo);
      default:
        return 0;
    }
  };

  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        if (searchQuery && !matchesSearch(course, searchQuery)) return false;
        if (selectedCategory && course.categoria !== selectedCategory) return false;
        if (selectedLevel && course.nivel !== selectedLevel) return false;
        if (priceRange && !matchesPriceRange(course.precio, priceRange)) return false;
        return true;
      })
      .sort((a, b) => sortCourses(a, b, sortBy));
  }, [courses, searchQuery, selectedCategory, selectedLevel, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedLevel(null);
    setPriceRange(null);
    setSortBy('newest');
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedLevel || priceRange;

  const getLevelBadgeStyle = (level: string) => {
    switch (level) {
      case 'Basico':
        return 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300';
      case 'Intermedio':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300';
      case 'Avanzado':
      case 'Basico a Avanzado':
      case 'Intermedio a Avanzado':
        return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      default:
        return 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto bg-white dark:bg-neutral-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">Explorar Cursos</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          Encuentra y compra cursos de Autodesk 2026 disponibles en DISTMAH ATC
        </p>
      </div>

      <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por titulo, categoria, instructor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-neutral-50 dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600"
              />
            </div>

            <Select
              value={selectedCategory || 'all'}
              onValueChange={(value) => setSelectedCategory(value === 'all' ? null : value)}
            >
              <SelectTrigger className="w-[180px] bg-neutral-50 dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                {categorias.map((categoria) => (
                  <SelectItem key={categoria} value={categoria}>
                    {categoria}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedLevel || 'all'}
              onValueChange={(value) => setSelectedLevel(value === 'all' ? null : value)}
            >
              <SelectTrigger className="w-[180px] bg-neutral-50 dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600">
                <SelectValue placeholder="Nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                {niveles.map((nivel) => (
                  <SelectItem key={nivel} value={nivel}>
                    {nivel}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={priceRange || 'all'}
              onValueChange={(value) => setPriceRange(value === 'all' ? null : value)}
            >
              <SelectTrigger className="w-[180px] bg-neutral-50 dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600">
                <SelectValue placeholder="Precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="free">Gratis</SelectItem>
                <SelectItem value="0-100">$0 - $100</SelectItem>
                <SelectItem value="100-300">$100 - $300</SelectItem>
                <SelectItem value="300+">$300+</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger className="w-[180px] bg-neutral-50 dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mas reciente</SelectItem>
                <SelectItem value="popular">Mas popular</SelectItem>
                <SelectItem value="rating">Mejor calificado</SelectItem>
                <SelectItem value="price-asc">Precio: menor</SelectItem>
                <SelectItem value="price-desc">Precio: mayor</SelectItem>
                <SelectItem value="alphabetical">A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Filtros activos:</span>
              {searchQuery && (
                <Badge variant="secondary" className="gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}><X className="w-3 h-3" /></button>
                </Badge>
              )}
              {selectedCategory && (
                <Badge variant="secondary" className="gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory(null)}><X className="w-3 h-3" /></button>
                </Badge>
              )}
              {selectedLevel && (
                <Badge variant="secondary" className="gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                  {selectedLevel}
                  <button onClick={() => setSelectedLevel(null)}><X className="w-3 h-3" /></button>
                </Badge>
              )}
              {priceRange && (
                <Badge variant="secondary" className="gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                  {priceRange === 'free' ? 'Gratis' : `$${priceRange}`}
                  <button onClick={() => setPriceRange(null)}><X className="w-3 h-3" /></button>
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
                Limpiar todo
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mb-6">
        <p className="text-neutral-600 dark:text-neutral-400">
          Mostrando <span className="font-semibold text-black dark:text-white">{filteredCourses.length}</span> de{' '}
          <span className="font-semibold text-black dark:text-white">{courses.length}</span> cursos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedCourse(course)}
          >
            <div className="relative h-40">
              {course.imagen ? (
                <Image
                  src={course.imagen}
                  alt={course.titulo}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white/50" />
                </div>
              )}
              <div className="absolute top-2 left-2 flex gap-1">
                <Badge className={getLevelBadgeStyle(course.nivel)}>{course.nivel}</Badge>
                {course.version === '2026' && (
                  <Badge className="bg-blue-600 text-white">2026</Badge>
                )}
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{course.categoria}</p>
              <h3 className="font-semibold text-black dark:text-white mb-2 line-clamp-2">{course.titulo}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">{course.descripcion}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <Clock className="w-4 h-4" />
                  <span>{course.duracion}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-black dark:text-white">${course.precio}</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">{course.moneda}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-16">
          <p className="text-neutral-500 dark:text-neutral-400 text-lg mb-4">
            No se encontraron cursos con los filtros seleccionados.
          </p>
          <Button onClick={clearFilters} variant="outline">
            Limpiar filtros
          </Button>
        </div>
      )}

      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
          {selectedCourse && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4">
                  {selectedCourse.imagen && (
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={selectedCourse.imagen}
                        alt={selectedCourse.titulo}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">{selectedCourse.categoria}</Badge>
                      <Badge className={getLevelBadgeStyle(selectedCourse.nivel)}>{selectedCourse.nivel}</Badge>
                      {selectedCourse.version === '2026' && (
                        <Badge className="bg-blue-600 text-white">NUEVO 2026</Badge>
                      )}
                    </div>
                    <DialogTitle className="text-2xl font-bold text-black dark:text-white mb-2">
                      {selectedCourse.titulo}
                    </DialogTitle>
                    <p className="text-neutral-600 dark:text-neutral-400">{selectedCourse.descripcion}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Duracion</p>
                    <p className="font-bold text-black dark:text-white">{selectedCourse.duracion}</p>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 text-center">
                    <BookOpen className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Nivel</p>
                    <p className="font-bold text-black dark:text-white">{selectedCourse.nivel}</p>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 text-center">
                    <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Rating</p>
                    <p className="font-bold text-black dark:text-white">{selectedCourse.rating || '4.9'}/5</p>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-green-600 dark:text-green-400" />
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Estudiantes</p>
                    <p className="font-bold text-black dark:text-white">{selectedCourse.enrollmentCount || '100'}+</p>
                  </div>
                </div>

                {selectedCourse.instructor && (
                  <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
                    <h4 className="font-semibold text-black dark:text-white mb-2">Instructor</h4>
                    <p className="text-neutral-600 dark:text-neutral-300">{selectedCourse.instructor}</p>
                  </div>
                )}

                {selectedCourse.objetivos && selectedCourse.objetivos.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      Lo que aprenderas
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedCourse.objetivos.map((objetivo, i) => (
                        <div key={i} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{objetivo}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCourse.prerequisitos && selectedCourse.prerequisitos.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-3">Prerequisitos</h4>
                    <ul className="space-y-1">
                      {selectedCourse.prerequisitos.map((prereq, i) => (
                        <li key={i} className="text-neutral-500 dark:text-neutral-400 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCourse.novedades_2026 && selectedCourse.novedades_2026.length > 0 && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Novedades 2026</h4>
                    <ul className="space-y-1">
                      {selectedCourse.novedades_2026.map((novedad, i) => (
                        <li key={i} className="text-blue-700 dark:text-blue-300 text-sm flex items-center gap-2">
                          <Star className="w-3 h-3" />
                          {novedad}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <div>
                    <span className="text-sm text-neutral-400 line-through">${(selectedCourse.precio * 1.2).toFixed(0)}</span>
                    <span className="text-3xl font-bold text-black dark:text-white ml-2">${selectedCourse.precio}</span>
                    <span className="text-neutral-500 dark:text-neutral-400 ml-1">{selectedCourse.moneda}</span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setSelectedCourse(null)}>
                      Cerrar
                    </Button>
                    <Link href={`/es/cursos/${selectedCourse.slug}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Comprar Curso
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
