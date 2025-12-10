# Módulo 1: Corridors y Assemblies - Diseño Avanzado de Carreteras

## Descripción del Módulo

El **Módulo 1** cubre el sistema de Corridors de Autodesk Civil 3D 2026, la herramienta más poderosa para diseño paramétrico de infraestructura vial. Aprenderás a crear assemblies complejos, aplicar targets múltiples, gestionar regiones de corridor, generar superficies de diseño, extraer feature lines, y optimizar modelos 3D de carreteras profesionales.

Los Corridors son el núcleo del diseño vial en Civil 3D, permitiendo modelar desde carreteras simples de 2 carriles hasta intersecciones complejas con múltiples targets, subassemblies condicionales, y transiciones dinámicas. Este módulo es **nivel avanzado** - requiere dominio previo de superficies, alineamientos, y perfiles.

**Duración:** 8 horas
**Lecciones:** 6
**Nivel:** Avanzado

---

## Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

✅ Crear y modificar assemblies con subassemblies estándar y custom
✅ Aplicar assemblies a alineamientos para generar corridors 3D paramétricos
✅ Utilizar targets (surfaces, alignments, feature lines) para diseño adaptativo
✅ Configurar offset alignments para intersecciones y carriles auxiliares
✅ Crear corridor surfaces (pavimento, sub-base, terraplén) con boundaries automáticos
✅ Extraer feature lines para diseño de grading y sitework
✅ Gestionar corridor regions y transitions para geometría variable
✅ Aplicar técnicas de optimización y troubleshooting para modelos complejos
✅ Resolver conflictos de targets y errores de assembly

---

## Contenido del Módulo

### [Lección 1: Assemblies y Subassemblies Avanzados](./lecciones/leccion-1.md)

- Arquitectura de assemblies en Civil 3D
- Tool Palettes: Imperial vs Metric subassemblies
- Subassemblies estándar: BasicLane, BasicShoulder, BasicSideSlopeCutDitch, LinkToSurface
- Subassemblies condicionales: ConditionalHorizontalTarget, ConditionalVerticalTarget
- Attachment points y código de puntos (códigos)
- Crear assembly para carretera típica de 2 carriles
- Assembly properties: nombre, description, code set style
- Subassembly Composer (introducción)

**Duración:** 80 minutos

---

### [Lección 2: Corridor Modeling Básico - Carretera Simple](./lecciones/leccion-2.md)

- Requisitos previos: alignment horizontal, profile vertical, assembly, surface
- Comando Create Corridor (Home tab → Create Design → Corridor)
- Corridor properties: nombre, style, baseline alignment
- Baseline and Region parameters
- Frequency: Horizontal geometry points, Profile geometry points, intervalo de estaciones
- Target mapping: Target surface (EG - Existing Ground)
- Rebuild automático vs manual
- Visualización del corridor (2D/3D)
- Corridor sections (sección transversal dinámica)
- Edición básica de corridor parameters

**Duración:** 80 minutos

---

### [Lección 3: Targets y Offset Alignments - Diseño Adaptativo](./lecciones/leccion-3.md)

- Conceptos de targets: Surface targets, Width/Offset targets, Slope targets
- Surface targets: LinkToSurface para taludes adaptativos
- Width targets: Carriles de ancho variable (ensanchamiento en curvas)
- Offset targets: Alineamientos paralelos para intersecciones
- Crear offset alignment desde centerline (horizontal constraint)
- Profile from surface para offset alignment
- Multi-baseline corridors (intersecciones en T, rotondas)
- Target mapping por region
- Conditional subassemblies con targets (ej: mediana variable)
- Troubleshooting: Target conflicts, out-of-range targets

**Duración:** 80 minutos

---

### [Lección 4: Corridor Surfaces - Pavimento, Sub-Base, Terraplén](./lecciones/leccion-4.md)

- ¿Qué son Corridor Surfaces?
- Superficie top vs datum (pavimento vs sub-base)
- Code set styles y point codes
- Crear Corridor Surface: Top, Datum, Feature Line
- Especificar links: Top, Pave, Base, Datum
- Add surface boundaries automáticamente
- Boundary types: Daylight, Feature Line, Polygon
- Corridor surface para cálculo de volúmenes de pavimento
- Corridor surface para análisis de drenaje (slope, watersheds)
- Export corridor surface a LandXML
- Corridor surface vs TIN surface (diferencias)

**Duración:** 80 minutos

---

### [Lección 5: Feature Lines from Corridors - Grading y Sitework](./lecciones/leccion-5.md)

- ¿Qué son Feature Lines?
- Feature lines vs 3D polylines
- Extraer feature lines desde corridor (códigos de puntos)
- Feature line por código: ETW (edge of traveled way), Daylight, Back of curb
- Aplicaciones: Grading, lot grading, parking lots, sidewalks
- Edit feature line: Add/Delete vertices, elevations, slopes
- Feature line to corridor (workflow inverso)
- Feature line como target para otros corridors
- Grading desde feature lines
- Feature line styles y labels

**Duración:** 80 minutos

---

### [Lección 6: Corridor Optimization y Troubleshooting Avanzado](./lecciones/leccion-6.md)

- Corridor regions: Split corridor por estaciones
- Apply assembly diferente por región (ej: sección urbana vs rural)
- Transitions entre assemblies (gradual vs abrupta)
- Frequency optimization: Balance entre detalle y performance
- Corridor performance con modelos grandes (10+ km)
- Rebuild strategies: Manual vs automático
- Common errors y soluciones:
  - "Assembly is not assigned to baseline"
  - "Target surface not found"
  - "No solution for subassembly"
  - "Corridor out of date"
  - Gaps en corridor (estaciones sin solución)
- Corridor rename/copy/mirror
- Export corridor a Infraworks, Navisworks
- Best practices para proyectos colaborativos

**Duración:** 80 minutos

---

## Ejercicios Prácticos

El archivo [ejercicios.md](./ejercicios.md) contiene ejercicios detallados:

1. **Ejercicio 1:** Crear assembly de carretera 2 carriles con bermas y taludes adaptativos
2. **Ejercicio 2:** Generar corridor simple aplicando assembly a alignment y profile
3. **Ejercicio 3:** Configurar targets múltiples (surface, offset alignment, width variable)
4. **Ejercicio 4:** Crear corridor surfaces de pavimento, sub-base, y calcular volúmenes
5. **Ejercicio 5:** Extraer feature lines de bordes de pavimento y daylight para grading
6. **Ejercicio 6:** Optimizar corridor complejo con regiones, transitions, y troubleshooting

---

## Herramientas de Civil 3D 2026 Utilizadas

- **Assembly Tool Palette** - Biblioteca de subassemblies
- **Assembly Properties** - Configuración de código y attachment
- **Create Corridor** - Generación de modelo 3D paramétrico
- **Corridor Properties** - Baselines, regions, targets, frequency
- **Target Mapping** - Surface, offset, width, slope targets
- **Corridor Surfaces** - Generación automática de superficies de diseño
- **Feature Lines** - Extracción de geometría para grading
- **Corridor Section Editor** - Visualización de secciones transversales
- **Subassembly Composer** - Creación de subassemblies custom (opcional avanzado)

---

## Requisitos Previos

**Conocimientos obligatorios:**
- Civil 3D Básico completo (Módulos 1-6)
- Dominio de Surfaces (creación, edición, análisis)
- Dominio de Alignments horizontales (layout tools, design criteria)
- Dominio de Profiles verticales (PVI, vertical curves, profile views)
- Comprensión de diseño geométrico vial (AASHTO, Green Book)

**Software:**
- Autodesk Civil 3D 2026 (build completo, no LT)
- Mínimo 16GB RAM (recomendado 32GB para corridors complejos)
- GPU dedicada (recomendado para visualización 3D de corridors largos)

---

## Materiales Complementarios

**Archivos de práctica:**
- `Highway-Project.dwg` - Proyecto base con alignment, profile, surface
- `Assembly-Library.dwg` - Biblioteca de assemblies pre-configurados
- `Target-Objects.dwg` - Offset alignments, feature lines de referencia

**Templates:**
- `Highway-Corridor-Template.dwt` - Template con styles de corridor

**Documentación:**
- Autodesk Civil 3D 2026 - Corridor Modeling Guide (PDF)
- AASHTO Green Book - Geometric Design Standards
- Subassembly Reference Guide (todos los subassemblies estándar documentados)

**Datasets:**
- Levantamiento topográfico de 5km de carretera existente
- Diseño horizontal y vertical aprobado
- Normativa local de diseño vial

---

## Evaluación del Módulo

- **Ejercicios prácticos:** 70%
- **Quiz técnico (corridors, targets, troubleshooting):** 15%
- **Proyecto final: Corridor completo de 2km con intersección:** 15%

**Criterios:**
- Aplicación correcta de assemblies y subassemblies
- Configuración apropiada de targets (surface, offset, width)
- Generación exitosa de corridor surfaces
- Extracción y uso de feature lines
- Optimización y resolución de errores

**Proyecto final requisitos:**
- Carretera de 2 carriles, 2km longitud
- Mínimo 1 intersección en T con offset alignments
- Corridor surfaces de pavimento y sub-base
- Feature lines extraídas para daylight
- Cálculo de volúmenes de corte/relleno
- Documentación: Plan-profile sheets

---

## Casos de Uso Profesionales

Este módulo prepara para proyectos reales:

**Carreteras interurbanas:**
- Autopistas de 4-6 carriles con mediana variable
- Rampas de intercambio con targets complejos
- Carriles auxiliares (aceleración/desaceleración)

**Vialidad urbana:**
- Calles con aceras, bordillos, mediana
- Ciclovías integradas (bike lanes)
- Intersecciones semaforizadas

**Rehabilitación vial:**
- Recarpeteo (overlay) con corridor sobre pavimento existente
- Ensanchamiento de carretera existente
- Mejoramiento geométrico

**Sitework:**
- Estacionamientos con pendientes de drenaje
- Accesos vehiculares y peatonales
- Plataformas industriales

---

## Estándares de la Industria

**Normativas cubiertas:**
- AASHTO - A Policy on Geometric Design of Highways and Streets (Green Book)
- AASHTO - Roadside Design Guide
- Local standards: SCT México, MOP Chile, INVIAS Colombia, etc.

**Códigos de diseño:**
- Velocidad de diseño vs velocidad operativa
- Peralte (superelevation) en curvas horizontales
- Distancias de visibilidad (stopping sight distance)
- Anchos de carril y berma según clasificación

**Entregables profesionales:**
- Plan-profile sheets con corridor sections
- Tablas de cantidades (volúmenes de pavimento, base, sub-base)
- Modelos 3D para coordinación (export a Navisworks)
- LandXML para intercambio con software de construcción

---

## Siguientes Pasos

Después de completar este módulo, continuarás con:

**Módulo 2: Intersections y Roundabouts Avanzados**
- Intersecciones de 3 y 4 ramas
- Rotondas (traffic circles, modern roundabouts)
- Multi-baseline corridor modeling
- Curb return assemblies

**Módulo 3: Quantity Takeoff y Mass Haul**
- Cálculo de volúmenes de corte/relleno
- Material extraction (pavimento, base, sub-base por separado)
- Mass haul diagrams
- Optimización de balance de tierras

---

## Soporte y Recursos

- **Instructor:** Disponible para consultas técnicas de corridors y assemblies
- **Foros del curso:** Discusión de casos complejos, troubleshooting colaborativo
- **Autodesk Help:** https://help.autodesk.com/view/CIV3D/2026/ENU/
- **Autodesk Community:** https://forums.autodesk.com/t5/civil-3d-forum/bd-p/115
- **Autodesk University:** Recursos adicionales y clases grabadas

**Video tutoriales recomendados:**
- Autodesk Civil 3D 2026 - Corridor Fundamentals
- Subassembly Deep Dive Series
- Multi-Baseline Corridor Workflows

---

## Glosario Técnico

**Assembly:** Plantilla de sección transversal compuesta por subassemblies (carriles, bermas, taludes)

**Baseline:** Línea de referencia del corridor (generalmente el alignment centerline)

**Corridor:** Modelo 3D paramétrico generado al aplicar assembly a lo largo de baseline

**Subassembly:** Componente individual de assembly (ej: BasicLane = carril)

**Target:** Objeto de referencia para diseño adaptativo (surface, alignment, feature line)

**Offset Alignment:** Alignment paralelo al centerline (para carriles auxiliares, intersecciones)

**Feature Line:** Línea 3D con elevaciones, generalmente extraída de corridor (ej: borde de pavimento)

**Code Set Style:** Define qué códigos de puntos/links se usan para crear corridor surfaces

**Daylight:** Punto donde el talud del corridor intersecta la superficie natural (EG)

**Region:** Segmento del corridor con assembly y targets específicos (estación inicial - final)

---

**¡Comencemos con la Lección 1: Assemblies y Subassemblies Avanzados!**
