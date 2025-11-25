# Ejemplos de Integración en Homepage

Ejemplos prácticos de cómo integrar los botones de inscripción en la página principal y tarjetas de cursos.

## 1. Hero Section con Curso Destacado

```tsx
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import EnrollButton from '@/components/checkout/EnrollButton';
import PriceDisplay from '@/components/checkout/PriceDisplay';

export default function HeroSection() {
  const featuredCourse = COURSES_2026.find(c => c.featured);

  return (
    <section className="bg-neutral-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-4">
              Curso Destacado
            </span>
            <h1 className="text-5xl font-bold mb-4">
              {featuredCourse?.title}
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              {featuredCourse?.subtitle}
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                </svg>
                <span>{featuredCourse?.duration} horas</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>Nivel {featuredCourse?.level}</span>
              </div>
            </div>

            <PriceDisplay
              price={featuredCourse?.price || 0}
              priceVEF={featuredCourse?.priceVEF}
              className="mb-8"
            />

            {featuredCourse && (
              <div className="flex flex-col sm:flex-row gap-4">
                <EnrollButton
                  course={featuredCourse}
                  variant="primary"
                  className="text-lg px-10 py-4"
                />
                <Link
                  href={`/cursos/${featuredCourse.slug}`}
                  className="px-10 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg text-center"
                >
                  Ver Detalles
                </Link>
              </div>
            )}
          </div>

          <div className="aspect-video bg-neutral-800 rounded-lg overflow-hidden shadow-2xl">
            {featuredCourse?.image && (
              <img
                src={featuredCourse.image}
                alt={featuredCourse.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 2. Grid de Cursos Destacados

```tsx
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import EnrollButton from '@/components/checkout/EnrollButton';
import Link from 'next/link';

export default function FeaturedCoursesGrid() {
  const featuredCourses = COURSES_2026.filter(c => c.featured).slice(0, 6);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Cursos Autodesk 2026
          </h2>
          <p className="text-xl text-neutral-600">
            Certificaciones profesionales con instructores certificados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-neutral-200 overflow-hidden">
                {course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-semibold">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-neutral-600 mb-4 line-clamp-2">
                  {course.subtitle}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-neutral-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                    </svg>
                    <span>{course.duration}h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Certificado</span>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-4 mb-4">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-3xl font-bold text-primary-600">
                      ${course.price}
                    </span>
                    <span className="text-neutral-600">USD</span>
                  </div>
                </div>

                <EnrollButton course={course} variant="primary" className="w-full mb-2" />

                <Link
                  href={`/cursos/${course.slug}`}
                  className="block w-full px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors font-semibold text-center"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 3. Lista de Cursos Populares

```tsx
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import EnrollButton from '@/components/checkout/EnrollButton';
import Link from 'next/link';

export default function PopularCoursesList() {
  const popularCourses = COURSES_2026.filter(c => c.popular).slice(0, 4);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">
          Cursos Más Populares
        </h2>

        <div className="space-y-6">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-neutral-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                <div className="aspect-video md:aspect-square bg-neutral-200 rounded-lg overflow-hidden">
                  {course.image && (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                      {course.software}
                    </span>
                    {course.popular && (
                      <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {course.title}
                  </h3>

                  <p className="text-neutral-600 mb-4">
                    {course.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                      </svg>
                      <span>{course.duration} horas</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                      </svg>
                      <span>{course.sessions} sesiones</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Nivel {course.level}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="text-center md:text-right mb-4">
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      ${course.price}
                    </div>
                    <div className="text-sm text-neutral-600">USD</div>
                  </div>

                  <div className="space-y-2">
                    <EnrollButton course={course} variant="primary" className="w-full" />
                    <Link
                      href={`/cursos/${course.slug}`}
                      className="block w-full px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors font-semibold text-center"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 4. Banner de Promoción con Cupón

```tsx
export default function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Promoción Especial - 10% de Descuento
        </h2>
        <p className="text-xl mb-6">
          Usa el cupón <span className="font-mono bg-white text-primary-600 px-4 py-2 rounded font-bold">DISTMAH2026</span> al momento del checkout
        </p>
        <p className="text-neutral-200 mb-8">
          Válido para todos los cursos Autodesk 2026
        </p>
        <Link
          href="/#cursos"
          className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg"
        >
          Ver Cursos Disponibles
        </Link>
      </div>
    </section>
  );
}
```

## 5. Curso Individual en Homepage

```tsx
import EnrollButton from '@/components/checkout/EnrollButton';

export default function QuickEnrollCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-neutral-200">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-neutral-900 mb-1">
            {course.title}
          </h3>
          <p className="text-sm text-neutral-600 mb-3">
            {course.duration}h • {course.level}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-primary-600">
              ${course.price}
            </span>
            <EnrollButton course={course} variant="outline" className="text-sm px-4 py-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 6. CTA (Call to Action) Global

```tsx
export default function GlobalCTA() {
  return (
    <section className="bg-neutral-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Comienza Tu Carrera en Diseño y Construcción
        </h2>
        <p className="text-xl text-neutral-300 mb-8">
          Únete a miles de profesionales que han transformado su carrera con nuestros cursos certificados por Autodesk
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#cursos"
            className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg"
          >
            Ver Todos los Cursos
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg"
          >
            Hablar con Asesor
          </Link>
        </div>
      </div>
    </section>
  );
}
```

## Notas de Implementación

### 1. Imports Necesarios

```tsx
import Link from 'next/link';
import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import EnrollButton from '@/components/checkout/EnrollButton';
import PriceDisplay from '@/components/checkout/PriceDisplay';
```

### 2. Filtrar Cursos

```tsx
// Cursos destacados
const featuredCourses = COURSES_2026.filter(c => c.featured);

// Cursos populares
const popularCourses = COURSES_2026.filter(c => c.popular);

// Cursos de una categoría específica
const autocadCourses = COURSES_2026.filter(c => c.category === 'AutoCAD');

// Cursos de un nivel específico
const basicCourses = COURSES_2026.filter(c => c.level === 'Básico');
```

### 3. Ordenar Cursos

```tsx
// Por precio (menor a mayor)
const sortedByPrice = [...COURSES_2026].sort((a, b) => a.price - b.price);

// Por duración (mayor a menor)
const sortedByDuration = [...COURSES_2026].sort((a, b) => b.duration - a.duration);

// Por fecha de actualización (más recientes primero)
const sortedByDate = [...COURSES_2026].sort((a, b) =>
  new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
);
```

---

**Todos los ejemplos siguen las reglas de diseño de Nolivos Law:**
- Colores corporativos (blanco, negro, gris, azul)
- Sin colores gay/pride
- Diseño limpio y profesional
- Tipografía seria
