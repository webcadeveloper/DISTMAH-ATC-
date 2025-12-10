# Guía de Integración - Botones de Inscripción

Esta guía muestra cómo agregar botones de inscripción a las páginas de cursos existentes.

## Componentes Disponibles

### 1. EnrollButton

Botón principal de inscripción que redirige al checkout.

```tsx
import EnrollButton from '@/components/checkout/EnrollButton';

<EnrollButton course={course} variant="primary" />
```

**Variantes disponibles:**
- `primary` - Azul corporativo (default)
- `secondary` - Naranja Autodesk
- `outline` - Borde azul, fondo blanco

### 2. PriceDisplay

Componente para mostrar el precio del curso.

```tsx
import PriceDisplay from '@/components/checkout/PriceDisplay';

<PriceDisplay price={course.price} priceVEF={course.priceVEF} />
```

## Ejemplo Completo - Página de Curso

```tsx
'use client';

import { COURSES_2026 } from '@/lib/courses-catalog-2026';
import EnrollButton from '@/components/checkout/EnrollButton';
import PriceDisplay from '@/components/checkout/PriceDisplay';

export default function CoursePage({ params }) {
  const course = COURSES_2026.find(c => c.slug === params.slug);

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Información del Curso */}
            <div>
              <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-neutral-300 mb-6">{course.subtitle}</p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                  <span>{course.duration} horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.001a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.001a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <span>Nivel {course.level}</span>
                </div>
              </div>

              <PriceDisplay
                price={course.price}
                priceVEF={course.priceVEF}
                className="mb-8"
              />

              <EnrollButton course={course} variant="primary" className="w-full lg:w-auto" />
            </div>

            {/* Imagen del Curso */}
            <div className="aspect-video bg-neutral-800 rounded-lg overflow-hidden">
              {course.image && (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detalles del Curso */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contenido Principal */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Descripción del Curso
              </h2>
              <div className="prose max-w-none text-neutral-700">
                {course.description}
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Objetivos de Aprendizaje
                </h2>
                <ul className="space-y-3">
                  {course.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Este Curso Incluye
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-neutral-700">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                    </svg>
                    {course.duration} horas de contenido
                  </li>
                  <li className="flex items-center gap-3 text-neutral-700">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                    Materiales descargables
                  </li>
                  <li className="flex items-center gap-3 text-neutral-700">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Certificado digital
                  </li>
                  <li className="flex items-center gap-3 text-neutral-700">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Soporte del instructor
                  </li>
                </ul>

                <EnrollButton course={course} variant="primary" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## Integración Rápida en Tarjeta de Curso

```tsx
import Link from 'next/link';
import EnrollButton from '@/components/checkout/EnrollButton';

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-neutral-600 mb-4">{course.subtitle}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary-600">${course.price}</span>
          <span className="text-neutral-600">{course.duration}h</span>
        </div>

        <EnrollButton course={course} variant="primary" className="w-full" />
      </div>
    </div>
  );
}
```

## Agregar Link Directo al Checkout

Si prefieres un link simple en lugar de botón:

```tsx
import Link from 'next/link';

<Link
  href={`/checkout/${course.id}`}
  className="text-primary-600 hover:underline font-semibold"
>
  Inscribirse al curso
</Link>
```

## Testing de Integración

1. Navegar a página del curso
2. Verificar que el botón "Inscribirme Ahora" esté visible
3. Click en el botón
4. Verificar redirect a `/checkout/[cursoId]`
5. Formulario debe mostrar datos correctos del curso

## Personalización de Estilos

Los componentes usan Tailwind CSS y respetan el diseño de Nolivos Law:

```tsx
// Botón personalizado
<EnrollButton
  course={course}
  variant="primary"
  className="text-lg px-12 py-5 shadow-2xl hover:scale-105 transform transition-transform"
/>

// Precio personalizado
<PriceDisplay
  price={course.price}
  priceVEF={course.priceVEF}
  className="bg-neutral-50 p-4 rounded-lg"
  showCurrency={true}
/>
```

## Notas Importantes

1. Los componentes son **client-side** ('use client')
2. Requieren que `course` sea un objeto del tipo `Course` de `lib/types.ts`
3. El ID del curso (`course.id`) debe existir en `COURSES_2026`
4. Los estilos siguen las reglas de diseño de Nolivos Law (sin colores gay)

---

Sistema creado para DISTMAH ATC - Universidad Autodesk
