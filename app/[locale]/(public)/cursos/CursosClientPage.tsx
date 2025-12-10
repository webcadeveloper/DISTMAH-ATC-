'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CourseMetadata } from '@/lib/course-loader';
import { Search, X, Clock, BookOpen, Star, Award, Users, CheckCircle2 } from 'lucide-react';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CourseCard from '@/components/CourseCard';

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
        return 'bg-amber-500/90 text-white';
      case 'Intermedio':
        return 'bg-orange-500/90 text-white';
      case 'Avanzado':
      case 'Basico a Avanzado':
      case 'Intermedio a Avanzado':
        return 'bg-red-500/90 text-white';
      default:
        return 'bg-neutral-500/90 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header con imagen de fondo */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Image_202511251448.jpeg"
            alt="Catalogo de Cursos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Catalogo de Cursos 2026</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mb-8">
            Todos los cursos de Autodesk 2026 disponibles en DISTMAH ATC
          </p>

          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por titulo, categoria, instructor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-neutral-400 rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-neutral-300 font-semibold">Filtros:</span>

              <Select
                value={selectedCategory || 'all'}
                onValueChange={(value) => setSelectedCategory(value === 'all' ? null : value)}
              >
                <SelectTrigger className="w-[180px] bg-neutral-800 border-neutral-700 text-white">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700">
                  <SelectItem value="all">Todas las categorias</SelectItem>
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
                <SelectTrigger className="w-[180px] bg-neutral-800 border-neutral-700 text-white">
                  <SelectValue placeholder="Nivel" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700">
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
                <SelectTrigger className="w-[180px] bg-neutral-800 border-neutral-700 text-white">
                  <SelectValue placeholder="Precio" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700">
                  <SelectItem value="all">Todos los precios</SelectItem>
                  <SelectItem value="free">Gratis</SelectItem>
                  <SelectItem value="0-100">$0 - $100</SelectItem>
                  <SelectItem value="100-300">$100 - $300</SelectItem>
                  <SelectItem value="300+">$300+</SelectItem>
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters} size="sm" className="border-neutral-600 text-neutral-300 hover:bg-neutral-800">
                  <X className="w-4 h-4 mr-2" />
                  Limpiar filtros
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-sm">Ordenar por:</span>
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[200px] bg-neutral-800 border-neutral-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 border-neutral-700">
                  <SelectItem value="newest">Mas reciente</SelectItem>
                  <SelectItem value="popular">Mas popular</SelectItem>
                  <SelectItem value="rating">Mejor calificado</SelectItem>
                  <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                  <SelectItem value="alphabetical">Alfabetico A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-neutral-400">
              Mostrando <span className="font-semibold text-white">{filteredCourses.length}</span> de{' '}
              <span className="font-semibold text-white">{courses.length}</span> cursos
            </p>

            {hasActiveFilters && (
              <div className="flex gap-2 flex-wrap">
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1 bg-neutral-800 text-neutral-300">
                    Busqueda: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedCategory && (
                  <Badge variant="secondary" className="gap-1 bg-neutral-800 text-neutral-300">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory(null)} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {selectedLevel && (
                  <Badge variant="secondary" className="gap-1 bg-neutral-800 text-neutral-300">
                    {selectedLevel}
                    <button onClick={() => setSelectedLevel(null)} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {priceRange && (
                  <Badge variant="secondary" className="gap-1 bg-neutral-800 text-neutral-300">
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

        {/* Grid de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={(c) => setSelectedCourse(c)}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-400 text-lg mb-4">
              No se encontraron cursos con los filtros seleccionados.
            </p>
            <Button onClick={clearFilters} variant="outline" className="border-neutral-600 text-neutral-300">
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>

      {/* Modal de detalles del curso */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 border-neutral-800 text-white">
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
                      <Badge className="bg-neutral-800 text-neutral-300">{selectedCourse.categoria}</Badge>
                      <Badge className={getLevelBadgeStyle(selectedCourse.nivel)}>{selectedCourse.nivel}</Badge>
                      {selectedCourse.version === '2026' && (
                        <Badge className="bg-twilight text-white">NUEVO 2026</Badge>
                      )}
                    </div>
                    <DialogTitle className="text-2xl font-bold text-white mb-2">
                      {selectedCourse.titulo}
                    </DialogTitle>
                    <p className="text-neutral-400">{selectedCourse.descripcion}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-neutral-800 rounded-lg p-4 text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-twilight" />
                    <p className="text-sm text-neutral-400">Duracion</p>
                    <p className="font-bold text-white">{selectedCourse.duracion}</p>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-4 text-center">
                    <BookOpen className="w-6 h-6 mx-auto mb-2 text-twilight" />
                    <p className="text-sm text-neutral-400">Nivel</p>
                    <p className="font-bold text-white">{selectedCourse.nivel}</p>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-4 text-center">
                    <Star className="w-6 h-6 mx-auto mb-2 text-dawn" />
                    <p className="text-sm text-neutral-400">Rating</p>
                    <p className="font-bold text-white">{selectedCourse.rating || '4.9'}/5</p>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-4 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-morning" />
                    <p className="text-sm text-neutral-400">Estudiantes</p>
                    <p className="font-bold text-white">{selectedCourse.enrollmentCount || '100'}+</p>
                  </div>
                </div>

                {/* Instructor */}
                {selectedCourse.instructor && (
                  <div className="bg-neutral-800 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Instructor</h4>
                    <p className="text-neutral-300">{selectedCourse.instructor}</p>
                  </div>
                )}

                {/* Objetivos */}
                {selectedCourse.objetivos && selectedCourse.objetivos.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-twilight" />
                      Lo que aprenderas
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedCourse.objetivos.map((objetivo, i) => (
                        <div key={i} className="flex items-start gap-2 text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-morning mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{objetivo}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Prerequisitos */}
                {selectedCourse.prerequisitos && selectedCourse.prerequisitos.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-white mb-3">Prerequisitos</h4>
                    <ul className="space-y-1">
                      {selectedCourse.prerequisitos.map((prereq, i) => (
                        <li key={i} className="text-neutral-400 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Novedades 2026 */}
                {selectedCourse.novedades_2026 && selectedCourse.novedades_2026.length > 0 && (
                  <div className="bg-twilight/10 border border-twilight/30 rounded-lg p-4">
                    <h4 className="font-semibold text-twilight-light mb-3">Novedades 2026</h4>
                    <ul className="space-y-1">
                      {selectedCourse.novedades_2026.map((novedad, i) => (
                        <li key={i} className="text-neutral-300 text-sm flex items-center gap-2">
                          <Star className="w-3 h-3 text-twilight" />
                          {novedad}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Precio y CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <div>
                    <span className="text-sm text-neutral-500 line-through">${(selectedCourse.precio * 1.2).toFixed(0)}</span>
                    <span className="text-3xl font-bold text-white ml-2">${selectedCourse.precio}</span>
                    <span className="text-neutral-400 ml-1">{selectedCourse.moneda}</span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-800" onClick={() => setSelectedCourse(null)}>
                      Cerrar
                    </Button>
                    <Link href={`/cursos/${selectedCourse.slug}`}>
                      <Button className="bg-twilight hover:bg-twilight-dark text-white">
                        Inscribirme Ahora
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
