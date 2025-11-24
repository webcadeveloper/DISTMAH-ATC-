# Lección 2: Elementos Geométricos - Tangentes, Curvas y Espirales

**Duración:** 60 minutos
**Módulo:** 3 - Alineamientos y Perfiles
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender los elementos geométricos de alineamientos horizontales
✅ Diseñar tangentes (rectas) con criterios de longitud mínima
✅ Calcular y aplicar curvas circulares simples según normas AASHTO
✅ Diseñar curvas compuestas y reversas apropiadamente
✅ Implementar espirales de transición (clothoids) para carreteras
✅ Aplicar criterios de diseño geométrico (radio mínimo, velocidad)
✅ Interpretar design constraints y warnings de Civil 3D
✅ Generar reportes de entidades del alineamiento

---

## Introducción

El diseño geométrico de carreteras se basa en la combinación armoniosa de tres elementos fundamentales: **tangentes** (tramos rectos), **curvas circulares** (arcos de radio constante), y **espirales de transición** (curvas de radio variable). La correcta aplicación de estos elementos según normas de diseño geométrico (AASHTO, SCT) garantiza la seguridad vial, comodidad del conductor, y eficiencia del tránsito.

Civil 3D 2026 incorpora criterios de diseño directamente en el software, validando automáticamente que tu geometría cumpla con las normas seleccionadas. Esto previene errores de diseño y asegura compliance con estándares profesionales.

**Normas aplicadas en esta lección:**
- **AASHTO** (American Association of State Highway and Transportation Officials) - "A Policy on Geometric Design of Highways and Streets" (Green Book)
- **SCT México** - Manual de Proyecto Geométrico de Carreteras
- **Normas locales** de diferentes países latinoamericanos

![Elementos geométricos alignment](../imagenes/leccion-2-elementos-geometricos.png)

---

## 1. Tangentes (Rectas) en Diseño Vial

### 1.1 ¿Qué es una Tangente?

Una **tangente** es un tramo recto del alineamiento horizontal. Conecta dos curvas consecutivas o marca el inicio/fin del alignment.

**Características:**
- Dirección constante (bearing fijo)
- Pendiente lateral nula (en planta)
- Más económica de construir que curvas
- Permite altas velocidades
- Facilita visibilidad y rebase

### 1.2 Longitud Mínima de Tangentes

**Problema:** Tangentes muy cortas entre curvas causan:
- Apariencia de "curva quebrada"
- Dificultad para el conductor (cambios de dirección bruscos)
- Reducción de seguridad vial

**Criterio AASHTO:**
Longitud mínima de tangente entre curvas:

**Lmin = V (metros)**

Donde **V** = velocidad de diseño en km/h

**Ejemplos:**
- V = 60 km/h → Lmin = 60 metros
- V = 80 km/h → Lmin = 80 metros
- V = 100 km/h → Lmin = 100 metros

**Longitud deseable:** 15 × V (metros) para apariencia óptima

**En Civil 3D:**
Si creas tangente menor al mínimo, aparece **warning amarillo** en la geometría.

![Tangente mínima](../imagenes/leccion-2-tangente-minima.png)

### 1.3 Tangentes en Civil 3D

**Propiedades de tangente:**
- **Length** (longitud)
- **Direction** (azimut o bearing)
- **Start Station / End Station** (estaciones de inicio/fin)
- **Grade** (pendiente - solo aplica en perfil vertical)

**Editar tangente:**
1. Alignment Geometry Editor
2. Pick Sub-entity > selecciona tangente
3. Modifica Length o Direction
4. Apply

**Constraint options:**
- Fixed length (longitud fija)
- Pass through point (que pase por punto específico)
- Free (ajustable)

---

## 2. Curvas Circulares Simples

### 2.1 Anatomía de una Curva Circular

**Elementos geométricos:**

- **R** - Radio de la curva (metros)
- **Δ (Delta)** - Ángulo central de la curva (grados)
- **L** - Longitud del arco (metros)
- **T** - Tangente larga (distancia de PI a PC o PT)
- **E** - Externa (distancia de PI al punto medio de curva)
- **M** - Ordenada media (flecha de la curva)
- **LC** - Longitud de cuerda (distancia directa PC a PT)
- **PC** - Point of Curvature (inicio de curva)
- **PT** - Point of Tangency (fin de curva)
- **PI** - Point of Intersection (intersección de tangentes)

![Anatomía curva circular](../imagenes/leccion-2-curva-circular-anatomia.png)

**Fórmulas fundamentales:**

```
L = (π × R × Δ) / 180  [Longitud de arco]
T = R × tan(Δ/2)       [Tangente larga]
E = R × [1/cos(Δ/2) - 1] [Externa]
M = R × [1 - cos(Δ/2)] [Ordenada media]
LC = 2 × R × sin(Δ/2)  [Cuerda]
```

**Civil 3D calcula automáticamente** todos estos valores cuando defines R y Δ (o cualquier combinación de parámetros).

### 2.2 Radio Mínimo según Velocidad de Diseño

**Criterio fundamental AASHTO:**

El radio mínimo se calcula para evitar deslizamiento lateral del vehículo en curva:

**Rmin = V² / (127 × (e + f))**

Donde:
- **V** = velocidad de diseño (km/h)
- **e** = peralte máximo (superelevación, típicamente 0.08 = 8%)
- **f** = coeficiente de fricción lateral (varía con velocidad)

**Tabla AASHTO - Radios Mínimos (e = 8%):**

| Velocidad | Radio Mínimo | Radio Recomendable |
|-----------|--------------|-------------------|
| 30 km/h   | 25 m         | 40 m              |
| 40 km/h   | 45 m         | 70 m              |
| 50 km/h   | 70 m         | 110 m             |
| 60 km/h   | 100 m        | 160 m             |
| 70 km/h   | 140 m        | 220 m             |
| 80 km/h   | 185 m        | 280 m             |
| 90 km/h   | 235 m        | 360 m             |
| 100 km/h  | 290 m        | 450 m             |
| 110 km/h  | 355 m        | 540 m             |
| 120 km/h  | 425 m        | 650 m             |

**Uso profesional:**
- Radio mínimo: Solo en situaciones topográficas restrictivas
- Radio recomendable: Diseño estándar para comodidad y seguridad
- Radios mayores: Autopistas y carreteras de alta velocidad

**En Civil 3D:**
Si usas radius menor al mínimo, la curva aparece en **rojo** con warning crítico.

![Radio mínimo warning](../imagenes/leccion-2-radio-minimo-warning.png)

### 2.3 Crear Curva Circular en Civil 3D

**Método 1: Automático con Tangent-Tangent**

Al usar Alignment Layout Tools > Tangent-Tangent (With Curves), Civil 3D inserta curvas automáticamente basadas en:
- Design speed configurada
- Criteria file (AASHTO)
- Curve settings (radius preference)

**Método 2: Curva flotante (Free Curve)**

Alignment Layout Tools > **Free Curve Fillet (Between Two Entities)**

1. Selecciona primera tangente
2. Selecciona segunda tangente
3. Especifica radius o pick punto para definir curva
4. Civil 3D calcula mejor ajuste

**Método 3: Edición manual**

1. Geometry Editor
2. Pick curva existente
3. Sub-entity Editor
4. Modifica Radius, Delta, o Length
5. Apply

### 2.4 Curve Properties en Civil 3D

**Cuadro de diálogo Curve Properties:**

**General tab:**
- Curve type: Circular, Spiral-Curve-Spiral, etc.
- Radius
- Delta angle
- Arc length

**Parameters tab (editable):**
- **Radius** - Cambiar radio (más común)
- **Delta** - Cambiar ángulo central
- **Arc Length** - Cambiar longitud de arco
- **Chord Length** - Cambiar longitud de cuerda

**Al modificar UN parámetro, los demás se recalculan automáticamente.**

**Constraints tab:**
- Lock radius (fijar radio)
- Pass through point (forzar que pase por punto topográfico)

![Curve Properties](../imagenes/leccion-2-curve-properties.png)

---

## 3. Curvas Compuestas

### 3.1 ¿Qué es una Curva Compuesta?

Una curva compuesta consiste en **dos o más curvas circulares de diferente radio** conectadas secuencialmente, sin tangente intermedia.

**Aplicaciones:**
- Adaptar alignment a topografía difícil
- Evitar expropiaciones en zona urbana
- Transición gradual de curva cerrada a curva amplia

**Elementos:**
- Curva 1: Radio R1, Delta Δ1
- Curva 2: Radio R2, Delta Δ2
- PCC (Point of Compound Curvature): Punto de cambio entre curvas

![Curva compuesta](../imagenes/leccion-2-curva-compuesta.png)

### 3.2 Criterios de Diseño para Curvas Compuestas

**Criterio AASHTO:**
La relación de radios no debe exceder 1.5:1

**R mayor / R menor ≤ 1.5**

**Ejemplo válido:**
- R1 = 150 m
- R2 = 200 m
- Relación = 200/150 = 1.33 ✓ (aceptable)

**Ejemplo NO recomendable:**
- R1 = 100 m
- R2 = 250 m
- Relación = 250/100 = 2.5 ✗ (cambio muy brusco)

**Limitaciones:**
- Evitar en carreteras de alta velocidad
- Preferir espirales de transición en lugar de curvas compuestas
- No usar si es posible diseño con curva simple

### 3.3 Crear Curva Compuesta en Civil 3D

**Paso 1:** Alignment Geometry Editor

**Paso 2:** Layout Tools > **Floating Curve (From Entity End, Radius, Length)**

**Paso 3:** Selecciona curva existente (primera curva)

**Paso 4:** Especifica parámetros de segunda curva:
- Radius: 180 m
- Length: 120 m

**Paso 5:** Civil 3D conecta ambas curvas en el PCC

**Verificación:**
Grid View muestra ambas curvas con radios diferentes consecutivamente.

---

## 4. Curvas Reversas

### 4.1 ¿Qué es una Curva Reversa?

Dos curvas circulares de **curvatura opuesta** (una a la izquierda, otra a la derecha) conectadas directamente sin tangente intermedia.

**Punto PRC** (Point of Reverse Curvature): Cambio de dirección de curvatura.

**Aplicaciones:**
- Calles urbanas sinuosas
- Adaptation a terreno muy irregular
- Calles residenciales (baja velocidad)

![Curva reversa](../imagenes/leccion-2-curva-reversa.png)

### 4.2 Restricciones de Curvas Reversas

**AASHTO NO recomienda curvas reversas** en carreteras y autopistas porque:
- Causan incomodidad al conductor (cambios bruscos de dirección)
- Dificultan aplicación de superelevación (peralte cambia de signo)
- Reducen seguridad vial
- Problemas de drenaje (transición de bombeos)

**Uso permitido:**
- Calles urbanas de baja velocidad (< 40 km/h)
- Estacionamientos
- Caminos rurales de bajo tráfico

**Si se usan, criterio mínimo:**
Tangente intermedia entre curvas ≥ 30 metros (para transición de superelevación)

### 4.3 Crear Curva Reversa en Civil 3D

**Método:**
Similar a curva compuesta, pero segunda curva en dirección opuesta.

**Paso 1:** Geometry Editor

**Paso 2:** Curva existente a la derecha (clockwise)

**Paso 3:** Free Curve > selecciona end of curve

**Paso 4:** Especifica radius y direction opuesta (counterclockwise)

**Warning esperado:**
Civil 3D puede mostrar warning si no hay tangente intermedia y design criteria requiere transición de superelevación.

---

## 5. Espirales de Transición (Clothoids)

### 5.1 ¿Qué es una Espiral de Transición?

Una **espiral** es una curva de **radio variable** que conecta una tangente (radio infinito) con una curva circular (radio finito).

**Función:**
- Transición suave de recta a curva
- Permite aplicar superelevación gradualmente
- Mejora comodidad y seguridad del conductor
- Apariencia estética superior

**Tipo de espiral en carreteras:** Clothoid (o Espiral de Euler)

**Propiedad fundamental:**
Radio de curvatura disminuye linealmente con la distancia recorrida.

![Espiral clothoid](../imagenes/leccion-2-espiral-clothoid.png)

### 5.2 Elementos de Espiral-Curva-Espiral

Configuración completa de curva con transición:

**Espiral de entrada (Spiral In):**
- TS (Tangent to Spiral) - Inicio de espiral
- SC (Spiral to Curve) - Fin de espiral / Inicio de curva circular

**Curva circular central:**
- Radio constante R

**Espiral de salida (Spiral Out):**
- CS (Curve to Spiral) - Fin de curva circular / Inicio de espiral salida
- ST (Spiral to Tangent) - Fin de espiral

**Parámetros:**
- **Ls** - Longitud de espiral (metros)
- **A** - Parámetro de espiral (A² = R × Ls)
- **R** - Radio de curva circular central
- **Δ** - Ángulo central total (incluye espirales)

![Spiral-Curve-Spiral](../imagenes/leccion-2-spiral-curve-spiral.png)

### 5.3 Longitud de Espiral según AASHTO

**Criterio 1: Superelevación**

La espiral debe ser lo suficientemente larga para aplicar superelevación gradualmente:

**Ls mín = (e × ancho calzada) / tasa de giro**

Donde:
- e = superelevación (0.08 para 8%)
- ancho calzada = 7.30 m (típico)
- tasa de giro = 0.005 (1:200 longitudinal)

**Ejemplo:**
Ls mín = (0.08 × 7.30) / 0.005 = 116.8 m (redondear a 120 m)

**Criterio 2: Comodidad (Cambio de aceleración centrífuga)**

**Ls = V³ / (47.2 × R)**

Donde V = velocidad (km/h), R = radio (m)

**Tabla AASHTO - Longitudes Mínimas de Espiral:**

| Velocidad | Radio Curva | Ls Mínima | Ls Recomendable |
|-----------|-------------|-----------|-----------------|
| 60 km/h   | 150 m       | 45 m      | 60 m            |
| 80 km/h   | 250 m       | 80 m      | 100 m           |
| 100 km/h  | 400 m       | 100 m     | 125 m           |
| 120 km/h  | 600 m       | 120 m     | 150 m           |

**Criterio 3: Apariencia visual**

**Ls ≥ R / 3** (para apariencia balanceada)

**Civil 3D calcula automáticamente** longitud óptima de espiral según criteria file.

### 5.4 Crear Espiral-Curva-Espiral en Civil 3D

**Método 1: Configuración automática**

**Paso 1:** Alignment Layout Tools > **Curve and Spiral Settings**

**Spiral Settings:**
- Use spirals: ✓ Activado
- Spiral length: Automatic (usa AASHTO criteria)

**Paso 2:** Layout Tools > Tangent-Tangent (With Curves)

**Paso 3:** Traza tangentes

**Resultado:**
Civil 3D inserta automáticamente Spiral-Curve-Spiral en cada PI.

**Método 2: Insertar espiral manualmente**

**Paso 1:** Geometry Editor

**Paso 2:** Pick curva circular existente (sin espirales)

**Paso 3:** Layout Tools > **Free Spiral-Curve-Spiral (Between Two Entities)**

**Paso 4:** Selecciona tangente antes de curva

**Paso 5:** Selecciona tangente después de curva

**Paso 6:** Especifica:
- Spiral length: 80 m (entrada y salida)
- Radius: 200 m (curva central)

**Civil 3D reemplaza** curva simple por espiral-curva-espiral.

![Create Spiral](../imagenes/leccion-2-create-spiral.png)

### 5.5 Editar Espirales

**Sub-entity Editor:**
- Spiral length (cambiar longitud)
- A value (parámetro de espiral)
- Superelevation settings

**Spirals independientes:**
Puedes tener spiral in diferente a spiral out (longitudes asimétricas) en casos especiales.

---

## 6. Criterios de Diseño y Design Checks

### 6.1 Design Criteria Files

Civil 3D incluye archivos XML con normas de diseño:

**Ubicación:**
`C:\ProgramData\Autodesk\C3D 2026\enu\Data\Corridor Design Standards\`

**Archivos disponibles:**
- AASHTO 2011 Metric.xml
- AASHTO 2011 Imperial.xml
- AASHTO 2018 Metric.xml (actualizado)
- SCT Mexico.xml (si está instalado)

**Contenido:**
- Radios mínimos por velocidad
- Longitudes mínimas de tangentes
- Longitudes de espirales
- Superelevation rates
- K-values para curvas verticales

### 6.2 Aplicar Design Criteria a Alignment

**Paso 1:** Alignment Properties > Design Criteria tab

**Paso 2:** **Use criteria-based design:** ✓ Activado

**Paso 3:** **Use design criteria file:** Selecciona archivo (ej: AASHTO 2011 Metric.xml)

**Paso 4:** **Use design check sets:** ✓ Activado

**Paso 5:** **Starting design speed:** 80 km/h

**Resultado:**
Civil 3D valida geometría contra normas en tiempo real.

![Design Criteria](../imagenes/leccion-2-design-criteria.png)

### 6.3 Interpretar Warnings y Errors

**Colores de elementos:**

**Verde:** Cumple norma ✓
**Amarillo:** Warning (debajo de recomendable, pero sobre mínimo absoluto) ⚠
**Rojo:** Error crítico (viola mínimo absoluto) ✗

**Tipos de warnings comunes:**

1. **Radius below recommended:**
   - Radius menor a recomendable pero mayor a mínimo absoluto
   - Solución: Aumentar radius si es posible

2. **Tangent length below minimum:**
   - Tangente muy corta entre curvas
   - Solución: Alargar tangente o eliminar curva

3. **Spiral length below recommended:**
   - Espiral muy corta para aplicar superelevación
   - Solución: Aumentar Ls

4. **Design speed conflict:**
   - Geometría no soporta velocidad de diseño especificada
   - Solución: Reducir velocidad o mejorar geometría

**Design Check Report:**

Alignment > Ribbon contextual > Analyze panel > **Design Check Report**

Genera tabla con:
- Station de cada violación
- Tipo de error/warning
- Valor actual vs valor requerido
- Severity (critical, warning, info)

![Design Check Report](../imagenes/leccion-2-design-check-report.png)

---

## 7. Stationing y Equations

### 7.1 Sistema de Estacionamiento

**Stationing** es el sistema de referencia lineal del alignment:

**Formato métrico:**
- 0+000.00 (kilómetro 0)
- 0+523.45 (523.45 metros desde inicio)
- 2+340.80 (2340.80 metros)

**Formato imperial:**
- 0+00.00 (estación 0)
- 5+23.45 (523.45 pies)

**Configuración:**
Alignment Properties > Station Control tab

**Station Indexing:**
- Automatic (Civil 3D calcula según longitud)
- Manual override

### 7.2 Station Equations

**¿Qué son?**
Ajustes de estacionamiento para empatar con kilometraje existente o saltar segmentos.

**Casos de uso:**
- Empatar diseño nuevo con carretera existente (Km 5+000)
- Excluir puente de longitud total (no cuenta en estacionamiento)

**Ejemplo:**

Alignment de 3000 m, pero debe iniciar en Km 10+000:

**Paso 1:** Alignment Properties > Station Control tab

**Paso 2:** Click **Station Equations** button

**Paso 3:** Add equation:
- Station Ahead: 10+000.00
- Station Back: 0+000.00
- Type: Increase

**Resultado:**
Estacionamiento cambia de 0+000-3+000 a 10+000-13+000

![Station Equations](../imagenes/leccion-2-station-equations.png)

---

## 8. Alignment Entities Report

### 8.1 Generar Reporte de Geometría

**Paso 1:** Selecciona alignment

**Paso 2:** Ribbon contextual > Labels & Tables > **Add Tables** dropdown

**Opciones:**
- Add Line (tabla de tangentes)
- Add Curve (tabla de curvas)
- Add Spiral (tabla de espirales)
- Add Segments (tabla completa todos los elementos)

**Paso 3:** Selecciona "Add Segments"

**Paso 4:** Cuadro "Alignment Entities Table"

**Table Style:** Segment (muestra tipo, longitud, radius)

**Click OK**

**Resultado:**
Civil 3D genera tabla dinámica en el drawing con:

| No. | Tipo | Longitud | Radio | Delta |
|-----|------|----------|-------|-------|
| 1   | Tangent | 250.00 m | - | - |
| 2   | Spiral In | 80.00 m | - | 8.5° |
| 3   | Curve | 150.50 m | 200.00 m | 43.0° |
| 4   | Spiral Out | 80.00 m | - | 8.5° |
| 5   | Tangent | 180.00 m | - | - |

**Tabla dinámica:** Se actualiza automáticamente si editas alignment.

![Entities Report](../imagenes/leccion-2-entities-report.png)

### 8.2 Exportar a Excel

**Paso 1:** Toolspace > Toolbox tab > Reports Manager

**Paso 2:** Alignment folder > **LandXML Report**

**Paso 3:** Selecciona alignment

**Paso 4:** Genera reporte XML que puede abrirse en Excel

**Contiene:**
- Coordenadas de todos los puntos
- Parámetros de curvas y espirales
- Stationing completo

---

## Ejercicio Práctico 2

**Objetivo:** Diseñar alineamiento horizontal de carretera rural aplicando criterios AASHTO con espirales de transición.

**Archivo:** `Highway-Design.dwg` (proporcionado con superficie existente)

**Requisitos del diseño:**
- Tipo: Carretera rural tipo C
- Velocidad de diseño: 80 km/h
- Longitud aproximada: 2.5 km
- Terreno: Lomerío
- Norma: AASHTO 2011 Metric

### Tareas:

**Tarea 1: Configuración inicial**

1. Abre `Highway-Design.dwg`
2. Verifica que existe superficie "EG" (existing ground)
3. Crea alignment:
   - Name: Carretera CR-80
   - Type: Centerline
   - Starting design speed: 80 km/h
   - Use criteria-based design: ✓
   - Criteria file: AASHTO 2011 Metric.xml

**Tarea 2: Configurar Curve and Spiral Settings**

4. Alignment Layout Tools > Curve and Spiral Settings
5. Configura:
   - Curve radius: 250 m (mínimo recomendable para 80 km/h)
   - Use spirals: ✓
   - Spiral length: Automatic

**Tarea 3: Diseñar geometría**

6. Usa Tangent-Tangent (With Curves)
7. Diseña alignment con:
   - Punto inicial: Coordenada 500000, 4500000 (o según drawing)
   - 4 PIs (formando 4 curvas)
   - Longitud total: ~2500 m

**Tarea 4: Verificar design criteria**

8. Revisa visualmente:
   - ¿Hay elementos en rojo o amarillo?
   - Si hay warnings, anota cuáles son
9. Genera Design Check Report
10. Corrige cualquier error crítico (rojo)

**Tarea 5: Editar geometría**

11. Usa Geometry Editor
12. Aumenta radio de una curva de 250 m a 300 m
13. Observa cómo cambia la geometría automáticamente
14. Verifica que espirales se recalculan

**Tarea 6: Documentación**

15. Aplica label set completo:
    - Major Stations cada 100 m
    - Geometry Points (PC, PT, TS, SC, CS, ST)
    - Curve labels con radius
16. Genera tabla de segmentos (Segments Table)
17. Genera tablas separadas de Curves y Spirals

### Entregable:

Screenshot mostrando:
1. Alignment completo con labels
2. Tablas de Curves y Spirals
3. Design Check Report (sin errores críticos)
4. Grid View mostrando 4 curvas con espirales

**Criterios de evaluación:**
- Geometría cumple AASHTO (sin rojos) ✓
- Espirales aplicadas correctamente ✓
- Labels legibles y apropiados ✓
- Tablas completas ✓

![Ejercicio 2 Resultado](../imagenes/leccion-2-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la longitud mínima de tangente recomendada por AASHTO para una carretera con velocidad de diseño de 100 km/h?

**Pregunta 2:** ¿Qué radio mínimo absoluto se requiere para una curva horizontal en una carretera de 80 km/h con superelevación máxima de 8%?

**Pregunta 3:** ¿Cuál es la función principal de las espirales de transición en el diseño geométrico?

**Pregunta 4:** Si una curva aparece en color rojo en Civil 3D durante el diseño, ¿qué significa y qué debes hacer?

**Pregunta 5:** En una configuración Spiral-Curve-Spiral, ¿qué significan las siglas TS, SC, CS y ST?

---

## Recursos Adicionales

**Documentación oficial:**
- AASHTO Green Book 2018 - Chapter 3: Elements of Design
- Autodesk Civil 3D 2026 Help - "Alignments - Geometric Elements"

**Tablas de diseño:**
- AASHTO Minimum Radius Tables (PDF)
- Spiral Length Calculation Charts

**Normativa mexicana:**
- SCT - Manual de Proyecto Geométrico de Carreteras
- Normas técnicas para proyecto de carreteras

**Videos:**
- Autodesk Civil 3D - Designing with Spirals (YouTube oficial)

---

## Resumen

En esta lección aprendiste:

✅ Elementos geométricos de alignments: tangentes, curvas circulares, espirales
✅ Criterios AASHTO para longitud mínima de tangentes (L = V metros)
✅ Cálculo de radio mínimo según velocidad de diseño (Rmin = V² / 127(e+f))
✅ Curvas compuestas (relación de radios ≤ 1.5) y reversas (evitar en carreteras)
✅ Espirales de transición clothoid para suavizar cambio de tangente a curva
✅ Configuración Spiral-Curve-Spiral completa en Civil 3D
✅ Design criteria files y validación automática contra normas
✅ Interpretación de warnings (amarillo) y errores (rojo) en geometría
✅ Generación de reportes de entidades y tablas dinámicas

**Próxima Lección:** Superelevation (Peralte en Curvas) - Aplicación de inclinación transversal en curvas horizontales según AASHTO

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 60 minutos diseñando diferentes configuraciones de curvas y espirales
