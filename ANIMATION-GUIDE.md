# DISTMAH ATC - Guía de Implementación de Animaciones UI/UX

## Componentes de Animación Creados

### 1. Componentes Base

#### LoadingSpinner
```tsx
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

<LoadingSpinner size="md" message="Cargando curso..." centered />
```

#### AnimatedFeedback
```tsx
import { AnimatedFeedback } from '@/components/feedback/AnimatedFeedback';

// Success
<AnimatedFeedback
  type="success"
  title="¡Inscripción exitosa!"
  message="Te has inscrito correctamente al curso"
/>

// Error
<AnimatedFeedback
  type="error"
  title="Error al procesar"
  message="Por favor intenta nuevamente"
/>

// Celebration (certificado obtenido)
<AnimatedFeedback
  type="celebration"
  title="¡Felicidades!"
  message="Has completado el curso y obtenido tu certificado"
  size="lg"
/>
```

#### ScrollReveal
```tsx
import { ScrollReveal } from '@/components/animations/ScrollReveal';

<ScrollReveal direction="up" delay={0.1}>
  <div>Este contenido aparece al hacer scroll</div>
</ScrollReveal>
```

#### AnimatedCounter
```tsx
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';

<AnimatedCounter to={500} suffix="+" duration={2000} />
<AnimatedCounter to={4.9} suffix="/5" decimals={1} />
```

---

### 2. Componentes UI Animados

#### AnimatedButton
```tsx
import { AnimatedButton } from '@/components/ui/animated-button';

<AnimatedButton
  size="lg"
  className="bg-primary-600 text-white"
  withShimmer={true}
  withScale={true}
>
  Explorar Cursos
</AnimatedButton>
```

#### AnimatedProgressBar
```tsx
import { AnimatedProgressBar } from '@/components/course/AnimatedProgressBar';

<AnimatedProgressBar
  progress={75}
  showLabel={true}
  color="blue"
  height="md"
/>
```

#### AnimatedDialog
```tsx
import { AnimatedDialog } from '@/components/ui/animated-dialog';
import { Button } from '@/components/ui/button';

<AnimatedDialog
  trigger={<Button>Abrir Modal</Button>}
  title="Título del Modal"
  description="Descripción opcional"
>
  <p>Contenido del modal</p>
</AnimatedDialog>
```

#### PageTransition
```tsx
import { PageTransition } from '@/components/layout/PageTransition';

// En layout o página
<PageTransition variant="slide" duration={0.3}>
  {children}
</PageTransition>
```

---

## Implementaciones Realizadas

### Landing Page (page.tsx)

#### Hero Section
- Animación de entrada del título con framer-motion
- Botones CTA con AnimatedButton (shimmer effect + scale)
- Stats con AnimatedCounter (números animados)
- Video background con overlay

#### Features Section
- ScrollReveal para título y descripción
- ScrollReveal staggered para features (delay incremental)
- Hover effects en iconos

#### CTA Section
- ScrollReveal para todo el contenido
- AnimatedButton para botón principal

### CourseCard Component
- Animación de entrada staggered (uno por uno)
- Hover effect con elevación 3D (-8px translateY)
- Image zoom on hover (scale 1.1)
- Gradient overlay animado
- Badge "NUEVO 2026" con scale animation
- Botón con micro-interactions

---

## Casos de Uso por Característica

### 1. Loading States

**Usar en:**
- Páginas cargando datos
- Botones procesando acciones
- Skeleton loaders

```tsx
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

{isLoading && <LoadingSpinner size="lg" message="Procesando pago..." centered />}
```

---

### 2. Success/Error Feedback

**Usar en:**
- Inscripción a curso → `celebration`
- Pago exitoso → `success`
- Error de validación → `error`
- Certificado obtenido → `celebration`

```tsx
import { AnimatedFeedback } from '@/components/feedback/AnimatedFeedback';

// Después de inscripción exitosa
<AnimatedFeedback
  type="celebration"
  title="¡Bienvenido al curso!"
  message="Ya puedes empezar a aprender"
/>
```

---

### 3. Scroll Animations

**Usar en:**
- Secciones de landing page
- Features/benefits
- Testimonios
- Estadísticas
- Lista de instructores

```tsx
import { ScrollReveal } from '@/components/animations/ScrollReveal';

<ScrollReveal direction="up" delay={0.2}>
  <FeatureCard />
</ScrollReveal>
```

---

### 4. Animated Counters

**Usar en:**
- Dashboard de estudiante (progreso de curso)
- Dashboard de instructor (estadísticas)
- Landing page stats
- Analytics

```tsx
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';

<div className="stat">
  <AnimatedCounter to={1200} suffix="+" prefix="$" />
  <span>Estudiantes activos</span>
</div>
```

---

### 5. Progress Bars

**Usar en:**
- Progreso de lecciones en curso
- Dashboard de estudiante
- Página de curso individual

```tsx
import { AnimatedProgressBar } from '@/components/course/AnimatedProgressBar';

<AnimatedProgressBar
  progress={course.completionPercentage}
  showLabel={true}
  color="blue"
/>
```

---

### 6. Animated Buttons

**Usar en:**
- CTAs principales
- Botones de inscripción
- Botones de pago
- Botones de dashboard

```tsx
import { AnimatedButton } from '@/components/ui/animated-button';

<AnimatedButton
  size="lg"
  className="bg-primary-600"
  onClick={handleEnroll}
>
  Inscribirme Ahora
</AnimatedButton>
```

---

### 7. Modals/Dialogs Animados

**Usar en:**
- Confirmaciones de acciones
- Formularios de inscripción
- Detalles de curso
- Configuraciones

```tsx
import { AnimatedDialog } from '@/components/ui/animated-dialog';

<AnimatedDialog
  open={isOpen}
  onOpenChange={setIsOpen}
  title="Confirmar inscripción"
>
  <EnrollmentForm />
</AnimatedDialog>
```

---

## Performance Tips

### 1. Reducir Motion para Accesibilidad
```tsx
import { useReducedMotion } from 'framer-motion';

const prefersReducedMotion = useReducedMotion();

<motion.div
  animate={prefersReducedMotion ? {} : { scale: 1.1 }}
>
```

### 2. Lazy Loading de Animaciones Lottie
```tsx
import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(
  () => import('@/components/animations/LottieAnimation'),
  { ssr: false }
);
```

### 3. Usar will-change en CSS para elementos animados
```css
.animated-card {
  will-change: transform;
}
```

### 4. Throttle de Scroll Events
Los componentes ScrollReveal ya usan IntersectionObserver que es performante.

---

## Timing Guidelines

### Duraciones Recomendadas
- **Micro-interactions (buttons)**: 150-200ms
- **Transiciones de página**: 300-400ms
- **Scroll reveals**: 600ms
- **Counters**: 2000-2500ms
- **Celebrations**: 2000ms (loop si es necesario)

### Easing Functions
- **Entrada**: `easeOut`, `[0.25, 0.4, 0.25, 1]`
- **Salida**: `easeIn`
- **Ambos**: `easeInOut`
- **Spring**: `{ type: 'spring', stiffness: 300, damping: 25 }`

---

## Páginas Pendientes por Mejorar

### 1. Catálogo de Cursos
- ✅ Importar ScrollReveal
- ⏳ Aplicar a header
- ⏳ Aplicar a filtros
- ⏳ Stagger en grid de cursos

### 2. Dashboard Estudiante
- Agregar AnimatedCounter para progreso
- AnimatedProgressBar para cursos
- ScrollReveal para secciones
- AnimatedButton para acciones principales

### 3. Página de Curso Individual
- Hero section con animaciones
- ScrollReveal para módulos
- AnimatedProgressBar para progreso
- AnimatedButton para "Iniciar Lección"

### 4. Checkout Page
- AnimatedProgressBar para pasos de compra
- LoadingSpinner durante procesamiento
- AnimatedFeedback para confirmación
- AnimatedButton para "Completar Compra"

---

## Ejemplo Completo: Dashboard Estudiante

```tsx
'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { AnimatedProgressBar } from '@/components/course/AnimatedProgressBar';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function DashboardEstudiante() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats Section */}
      <ScrollReveal direction="up">
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="stat-card">
            <AnimatedCounter to={5} suffix=" cursos" />
            <p>Activos</p>
          </div>
          <div className="stat-card">
            <AnimatedCounter to={75} suffix="%" />
            <p>Progreso promedio</p>
          </div>
          <div className="stat-card">
            <AnimatedCounter to={32} suffix=" horas" />
            <p>Tiempo de estudio</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Cursos en Progreso */}
      <ScrollReveal direction="up" delay={0.2}>
        <h2 className="text-2xl font-bold mb-6">Mis Cursos</h2>
        <div className="space-y-4">
          {courses.map((course, i) => (
            <ScrollReveal key={course.id} delay={i * 0.1}>
              <div className="course-card">
                <h3>{course.title}</h3>
                <AnimatedProgressBar
                  progress={course.progress}
                  showLabel={true}
                  color="blue"
                />
                <AnimatedButton size="sm">
                  Continuar
                </AnimatedButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
```

---

## Recursos Lottie Disponibles

### Ubicación
`/public/lottie/`

### Animaciones
1. **celebration/confetti-celebration.json** - Celebración con confetti
2. **loading/loading-spinner.json** - Spinner de carga
3. **success/success-checkmark.json** - Checkmark de éxito
4. **error/error-animation.json** - Animación de error

### Video
`/public/video/hero-video.mp4` - Video para hero section

---

## Checklist de Implementación

- [x] Crear componentes de animación base
- [x] Crear componentes UI animados
- [x] Mejorar Landing Page
- [x] Mejorar CourseCard
- [ ] Mejorar Catálogo de Cursos
- [ ] Mejorar Dashboard Estudiante
- [ ] Mejorar Página de Curso Individual
- [ ] Mejorar Checkout Page
- [ ] Testing de performance
- [ ] Testing de accesibilidad (reduced motion)

---

## Mantenimiento

### Agregar Nueva Animación Lottie
1. Colocar archivo JSON en `/public/lottie/{categoria}/`
2. Crear constante de importación
3. Agregar a `animations` object en AnimatedFeedback
4. Documentar en esta guía

### Agregar Nuevo Tipo de Animación
1. Crear componente en `/components/animations/`
2. Usar framer-motion o animejs según sea necesario
3. Exportar con TypeScript types
4. Documentar casos de uso
5. Agregar ejemplos en esta guía

---

*Última actualización: 2025-11-24*
*Versión: 1.0*
