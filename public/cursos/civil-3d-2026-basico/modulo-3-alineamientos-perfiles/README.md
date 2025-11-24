# Módulo 3: Alineamientos y Perfiles

## Descripción del Módulo

El **Módulo 3** aborda el diseño de alineamientos horizontales y perfiles longitudinales para carreteras, calles y vialidades urbanas. Aprenderás a diseñar con criterios geométricos profesionales (AASHTO, SCT), aplicar superelevación en curvas, crear perfiles de terreno existente, diseñar rasantes verticales, y utilizar la nueva herramienta Horizontal Regression Analysis de Civil 3D 2026.

Los alineamientos y perfiles son el corazón del diseño de infraestructura vial. Un alineamiento define la geometría horizontal de una carretera (su trayectoria en planta), mientras que el perfil define la geometría vertical (elevaciones y pendientes). Ambos deben diseñarse según normas de seguridad vial y confort del conductor.

**Duración:** 6 horas
**Lecciones:** 6

---

## Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

✅ Crear alineamientos horizontales desde objetos AutoCAD o desde cero
✅ Diseñar con elementos geométricos (tangentes, curvas circulares, espirales de transición)
✅ Aplicar superelevación (peralte) en curvas según normas AASHTO
✅ Utilizar Horizontal Regression Analysis para optimizar alineamientos (nuevo 2026)
✅ Crear perfiles de superficie (existing ground) desde alineamientos
✅ Diseñar rasantes verticales con curvas parabólicas
✅ Aplicar criterios de diseño geométrico profesionales
✅ Generar profile views con anotación completa

---

## Contenido del Módulo

### [Lección 1: Alineamientos Horizontales](./lecciones/leccion-1.md)
- ¿Qué es un alineamiento (alignment)?
- Tipos de alineamientos (centerline, offset, curb return)
- Crear alignment desde polyline existente
- Crear alignment desde layout tools (tangent-curve-spiral)
- Alignment properties (stations, design speeds)
- Edición de alineamientos (geometry editor)
- Best fit alignments
- Alignment styles y etiquetas

**Duración:** 60 minutos

---

### [Lección 2: Elementos Geométricos - Tangentes, Curvas y Espirales](./lecciones/leccion-2.md)
- Tangentes (rectas) en diseño vial
- Curvas circulares simples (radio, longitud, delta)
- Curvas compuestas y reversas
- Espirales de transición (clothoids)
- Criterios de diseño AASHTO (radio mínimo, velocidad)
- Design constraints y warnings
- Alignment Entities report
- Stationing y equations

**Duración:** 60 minutos

---

### [Lección 3: Superelevation (Peralte en Curvas)](./lecciones/leccion-3.md)
- ¿Qué es superelevation (peralte)?
- Física del peralte (fuerza centrífuga, fricción lateral)
- Superelevation wizard de Civil 3D
- Tablas de peralte AASHTO/SCT
- Transición de bombeo normal a peralte total
- Superelevation tabular editor
- Visualización de superelevation en corridors
- Reportes de superelevación

**Duración:** 60 minutos

---

### [Lección 4: Horizontal Regression Analysis (Nuevo en Civil 3D 2026)](./lecciones/leccion-4.md)
- ¿Qué es Horizontal Regression Analysis?
- Casos de uso (reconstrucción de vías existentes)
- Crear alignment desde puntos COGO por regresión
- Ajuste de best fit curves
- Tolerance settings para regresión
- Optimización de geometría horizontal
- Comparación regresión vs diseño manual
- Exportar datos de regresión

**Duración:** 60 minutos

---

### [Lección 5: Perfiles de Superficie (Existing Ground)](./lecciones/leccion-5.md)
- ¿Qué es un perfil (profile)?
- Surface profiles vs design profiles
- Crear surface profile desde alignment
- Profile views (vistas de perfil longitudinal)
- Profile view styles (grid, anotación)
- Multiple profiles en un mismo view
- Band styles (data bands: elevations, stations)
- Profile labels y tablas

**Duración:** 60 minutos

---

### [Lección 6: Diseño de Rasante Vertical (Finished Grade)](./lecciones/leccion-6.md)
- Diseño de profile (rasante de proyecto)
- Tangent vertical lines (pendientes rectas)
- Vertical curves (curvas parabólicas verticales)
- PVI (Point of Vertical Intersection)
- K-value y design criteria vertical (AASHTO)
- Curvas cóncavas vs convexas
- Design check warnings (pendiente, K-value)
- Profile report (elevaciones, pendientes)

**Duración:** 60 minutos

---

## Ejercicios Prácticos

El archivo [ejercicios.md](./ejercicios.md) contiene ejercicios detallados:

1. **Ejercicio 1:** Crear alineamiento horizontal de carretera rural (2.5 km)
2. **Ejercicio 2:** Diseñar curva horizontal con espirales de transición
3. **Ejercicio 3:** Aplicar superelevation según AASHTO (velocidad 80 km/h)
4. **Ejercicio 4:** Usar Horizontal Regression Analysis para alineamiento existente
5. **Ejercicio 5:** Crear profile view con bandas de elevación y estaciones
6. **Ejercicio 6:** Diseñar rasante vertical con curvas parabólicas según AASHTO

---

## Herramientas de Civil 3D 2026 Utilizadas

- **Alignment Creation Tools** - Tangent-Curve-Spiral layout
- **Geometry Editor** - Edición de alineamientos
- **Superelevation Wizard** - Aplicación de peralte
- **Horizontal Regression Analysis** - Nuevo en 2026
- **Profile Creation Tools** - Perfiles de superficie y diseño
- **Profile View Wizard** - Vistas de perfil longitudinal
- **Design Criteria Editor** - Normas AASHTO/SCT
- **Alignment Labels** - Etiquetado automático

---

## Requisitos Previos

- **Módulo 1:** Introducción a Civil 3D 2026 (interface, styles, templates)
- **Módulo 2:** Puntos y Superficies Topográficas (surfaces existentes)
- Conocimientos básicos de diseño geométrico de carreteras
- Conceptos de topografía (estaciones, elevaciones)
- Manejo de proyecciones y coordenadas

---

## Materiales Complementarios

**Archivos DWG de práctica:**
- `Highway-Alignment.dwg` - Carretera rural con superficie existente
- `Urban-Street.dwg` - Calle urbana para diseño
- `Regression-Example.dwg` - Datos para Horizontal Regression Analysis

**Normas de diseño:**
- AASHTO Green Book 2018 - Geometric Design Standards (PDF)
- Manual SCT (Secretaría de Comunicaciones y Transportes México)
- Criterios de Diseño Geométrico (extractos)

**Templates:**
- Alignment styles library
- Profile view styles library

---

## Evaluación del Módulo

- **Ejercicios prácticos:** 60%
- **Quiz de criterios de diseño AASHTO:** 20%
- **Proyecto de alineamiento y perfil completo:** 20%

**Criterios:**
- Aplicación correcta de normas de diseño geométrico
- Uso apropiado de espirales de transición
- Cálculo correcto de superelevación
- Diseño vertical con K-values adecuados

---

## Normas de Diseño Aplicadas

### AASHTO (American Association of State Highway and Transportation Officials)
- Radio mínimo de curvas horizontales según velocidad de diseño
- Superelevation máxima (typically 8-12%)
- K-values para curvas verticales (distancia de visibilidad)
- Pendientes máximas longitudinales

### SCT México (Secretaría de Comunicaciones y Transportes)
- Normas para carreteras tipo A, B, C, D, E
- Velocidad de proyecto según tipo de terreno
- Radios mínimos y peraltes
- Alineamiento vertical según clasificación

### Criterios Generales
- Velocidad de diseño: 30-120 km/h según tipo de vía
- Radio mínimo absoluto vs radio mínimo recomendable
- Longitud mínima de tangentes entre curvas
- Visibilidad de frenado y rebase

---

## Siguientes Pasos

Después de completar este módulo, continuarás con:

**Módulo 4: Parcelas y Grading**
- Creación de parcelas para subdivisiones
- Feature lines
- Grading tools
- Cálculo de corte y relleno

---

## Soporte y Recursos

- **Instructor:** Disponible para consultas sobre diseño geométrico
- **Foros del curso:** Discusión de normas AASHTO y casos reales
- **Autodesk Help:** https://help.autodesk.com/view/CIV3D/2026/ENU/
- **AASHTO Resources:** Extractos del Green Book incluidos

**¡Comencemos con la Lección 1!**
