'use client';

import { useState, useMemo } from 'react';
import CourseCard from '@/components/CourseCard';
import { CourseMetadata } from '@/lib/course-loader';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';

interface CursosClientPageProps {
  courses: CourseMetadata[];
}

type SortOption = 'newest' | 'popular' | 'rating' | 'price-asc' | 'price-desc' | 'alphabetical';

export default function CursosClientPage({ courses }: CursosClientPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('newest');

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Catálogo de Cursos 2026</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Todos los cursos de Autodesk 2026 disponibles en DISTMAH ATC
          </p>

          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por título, categoría, instructor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-12 bg-white text-gray-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-gray-700 font-semibold">Filtros:</span>

              <Select
                value={selectedCategory || 'all'}
                onValueChange={(value) => setSelectedCategory(value === 'all' ? null : value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
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
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los niveles</SelectItem>
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
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los precios</SelectItem>
                  <SelectItem value="free">Gratis</SelectItem>
                  <SelectItem value="0-100">$0 - $100</SelectItem>
                  <SelectItem value="100-300">$100 - $300</SelectItem>
                  <SelectItem value="300+">$300+</SelectItem>
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters} size="sm">
                  <X className="w-4 h-4 mr-2" />
                  Limpiar filtros
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-sm">Ordenar por:</span>
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Más reciente</SelectItem>
                  <SelectItem value="popular">Más popular</SelectItem>
                  <SelectItem value="rating">Mejor calificado</SelectItem>
                  <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                  <SelectItem value="alphabetical">Alfabético A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Mostrando <span className="font-semibold">{filteredCourses.length}</span> de{' '}
              <span className="font-semibold">{courses.length}</span> cursos
            </p>

            {hasActiveFilters && (
              <div className="flex gap-2 flex-wrap">
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Búsqueda: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedCategory && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory(null)} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedLevel && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedLevel}
                    <button onClick={() => setSelectedLevel(null)} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {priceRange && (
                  <Badge variant="secondary" className="gap-1">
                    Precio: {priceRange === 'free' ? 'Gratis' : `$${priceRange}`}
                    <button onClick={() => setPriceRange(null)} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">
              No se encontraron cursos con los filtros seleccionados.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
