# Módulo 3: Modelado de Superficies

## Descripción del Módulo

El Módulo 3 introduce el modelado de superficies NURBS (Non-Uniform Rational B-Splines), técnicas avanzadas para crear geometría que no requiere ser sólido cerrado. Las superficies son ideales para formas orgánicas complejas, cascos de barcos, carrocerías automotrices, diseño industrial avanzado y terrenos topográficos.

A diferencia de los sólidos (que deben ser volúmenes cerrados watertight), las superficies pueden ser abiertas, parciales, y editables mediante redes de control points. Este módulo cubre creación de superficies básicas, superficies de red (network), patches, blends, y operaciones de modificación como offset, extend, trim, y conversión entre superficies y sólidos.

## Objetivos de Aprendizaje

Al finalizar este módulo, serás capaz de:

- Crear superficies básicas mediante PLANESURF, extrusión y revolución de perfiles
- Generar superficies de red (SURFNETWORK) interpolando curvas en dos direcciones
- Crear patches (SURFPATCH) para cerrar contornos abiertos
- Generar blends (SURFBLEND) para transiciones suaves entre superficies
- Modificar superficies con SURFOFFSET, SURFEXTEND, SURFTRIM
- Aplicar SURFFILLET para redondeos entre superficies
- Convertir superficies a sólidos (THICKEN) y viceversa
- Analizar y visualizar curvaturas de superficies

## Duración

6 horas distribuidas en 6 lecciones de 1 hora cada una.

## Requisitos Previos

- Módulo 1 y 2 completados
- Dominio de modelado de sólidos y operaciones booleanas
- Conocimiento de SPLINE y curvas complejas 2D/3D
- Comprensión de conceptos de continuidad geométrica (G0, G1, G2)

## Contenido del Módulo

### Lección 13: Surface Creation Básica
**Duración:** 1 hora

Creación de superficies elementales mediante comandos básicos. Extrusión de perfiles abiertos creando superficies en lugar de sólidos. Revolución parcial de perfiles. Conversión de objetos 2D a superficies planas.

**Comandos clave:**
- PLANESURF: Superficies planas desde contornos cerrados
- EXTRUDE: Perfiles abiertos → superficies
- REVOLVE: Perfiles abiertos → superficies de revolución
- SURFNETWORK preliminar

### Lección 14: Planar Surface y Network Surface
**Duración:** 1 hora

Superficies planas complejas y superficies de red interpolando curvas direccionales. SURFNETWORK es fundamental para crear formas complejas desde esqueletos de curvas.

**Comandos clave:**
- PLANESURF avanzado con islas
- SURFNETWORK: Interpolación de curvas U y V
- Control de continuidad en intersecciones
- Superficies desde nubes de puntos (básico)

### Lección 15: Patch y Blend
**Duración:** 1 hora

Cerrar aberturas en superficies con SURFPATCH. Crear transiciones suaves entre superficies con SURFBLEND. Estas técnicas son esenciales para "coser" geometría compleja.

**Comandos clave:**
- SURFPATCH: Parches para cerrar contornos
- SURFBLEND: Transiciones suaves entre superficies
- Control de continuidad (G0, G1, G2)
- SURFSCULPT: Convertir superficie cerrada a sólido

### Lección 16: Offset Surface y Extend Surface
**Duración:** 1 hora

Crear superficies paralelas a existentes (SURFOFFSET) y extender superficies más allá de sus bordes (SURFEXTEND). Modificadores esenciales para ajuste de geometría de superficies.

**Comandos clave:**
- SURFOFFSET: Superficies paralelas con distancia especificada
- SURFEXTEND: Extensión de bordes de superficie
- Opciones de modo (Extend, Stretch, Edge)
- Creación de espesores con offset

### Lección 17: Trim y Fillet Surface
**Duración:** 1 hora

Recorte de superficies (SURFTRIM) y redondeos entre superficies (SURFFILLET). Operaciones de modificación que permiten ajustar geometría compleja sin recrear.

**Comandos clave:**
- SURFTRIM: Recorte de superficies con curvas o superficies
- SURFUNTRIM: Restaurar áreas recortadas
- SURFFILLET: Redondeos entre superficies
- Análisis de continuidad de fillets

### Lección 18: Thicken y Convert to Solid
**Duración:** 1 hora

Conversión entre superficies y sólidos. THICKEN agrega grosor a superficies abiertas. SURFSCULPT y CONVTOSURFACE/CONVTOSOLID manejan conversiones bidireccionales.

**Comandos clave:**
- THICKEN: Agregar grosor a superficie (crear sólido)
- SURFSCULPT: Convertir red de superficies cerrada a sólido
- CONVTOSURFACE: Sólidos → superficies
- CONVTOSOLID: Superficies cerradas → sólidos
- Análisis de validez de conversión

## Metodología

Cada lección combina:
1. Explicación teórica (20%): Conceptos de superficies NURBS
2. Demostración práctica (30%): Ejemplos del instructor
3. Ejercicios guiados (30%): Modelado supervisado
4. Ejercicios independientes (20%): Aplicación autónoma

## Evaluación

- **Ejercicios por lección:** 6 ejercicios prácticos
- **Proyecto integrador:** Carrocería automotriz simplificada
- **Criterios:**
  - Correcta aplicación de comandos de superficies (30%)
  - Continuidad geométrica (G0, G1, G2) (25%)
  - Limpieza de modelo (sin gaps, intersecciones indeseadas) (20%)
  - Conversión exitosa a sólidos (25%)

## Conceptos Clave

### Continuidad Geométrica

**G0 (Positional):** Superficies se tocan en borde (pueden tener ángulo)
**G1 (Tangent):** Superficies se tocan y son tangentes (sin ángulo agudo)
**G2 (Curvature):** Superficies comparten curvatura (transición perfectamente suave)

### Superficies vs Sólidos

| Aspecto | Superficies | Sólidos |
|---|---|---|
| Cerrado | No requerido | Obligatorio (watertight) |
| Grosor | Sin grosor (2D en 3D) | Volumen |
| Edición | Control points, red de curvas | Parámetros geométricos |
| Conversión | → Sólido con THICKEN/SCULPT | → Superficie con CONVTOSURFACE |
| Aplicación | Formas orgánicas, diseño industrial | Piezas mecánicas, arquitectura |
| Operaciones booleanas | Limitadas | Completas |

## Aplicaciones Profesionales

**Diseño Automotriz:**
- Carrocerías de vehículos
- Capós, techos, guardafangos
- Superficies aerodinámicas

**Diseño Naval:**
- Cascos de barcos
- Superficies hidrodinámicas
- Cubiertas curvas

**Diseño Industrial:**
- Productos de consumo con formas orgánicas
- Electrodomésticos
- Dispositivos ergonómicos

**Arquitectura:**
- Fachadas curvas complejas
- Techos orgánicos
- Estructuras paramétricas

## Diferencias con Módulos Anteriores

| Módulo | Enfoque | Resultado |
|---|---|---|
| Módulo 1 | Primitivas básicas | Sólidos simples |
| Módulo 2 | Operaciones de sólidos | Sólidos complejos |
| **Módulo 3** | **Superficies NURBS** | **Superficies editables** |
| Módulo 4 | Visualización | Renders y materiales |

## Preparación para Módulo 4

Este módulo establece geometría compleja que se visualizará en el Módulo 4 (Visualización y Renderizado). Las superficies suaves NURBS son ideales para aplicar materiales realistas y generar renders fotorrealistas.

## Recursos Adicionales

- Archivos de práctica: Curvas de control para SURFNETWORK
- Modelos de referencia: Ejemplos de superficies automotrices
- Biblioteca de superficies: Patches y blends comunes
- Videos demostrativos: Técnicas avanzadas de continuidad

---

**Duración total:** 6 horas
**Lecciones:** 6
**Ejercicios:** 6 + proyecto integrador
**Nivel:** Avanzado
**Prerrequisito:** Módulos 1 y 2 completados
