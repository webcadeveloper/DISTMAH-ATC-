# LECCIÓN 5: COMPLEX INTERSECTIONS Y ANALYSIS

## CIVIL 3D 2026 AVANZADO - MÓDULO 2

**Duración:** 2.5 horas
**Nivel:** Avanzado
**Prerequisitos:** Lecciones 1-4 completadas, dominio de corridor modeling

---

## OBJETIVOS DE LA LECCIÓN

Al finalizar esta lección serás capaz de:

1. Diseñar intersecciones complejas con 5+ legs (multi-leg intersections)
2. Resolver problemas de intersecciones oblicuas (skewed intersections)
3. Diseñar intersecciones offset (desplazadas)
4. Crear grade-separated intersections (puentes/overpasses)
5. Implementar diamond interchanges básicos
6. Realizar capacity analysis usando metodología HCM
7. Calcular Level of Service (LOS) para intersecciones
8. Analizar queue lengths y delays
9. Realizar conflict point analysis para seguridad
10. Generar documentación técnica profesional completa

---

## 1. MULTI-LEG INTERSECTIONS (5+ LEGS)

### 1.1 Problemas de Multi-Leg Intersections

Intersecciones con **5 o más approaches** presentan desafíos únicos:

#### Problemas de Seguridad:

**Conflict Points aumentan exponencialmente:**

| Número de Legs | Crossing Conflicts | Merging Conflicts | Diverging Conflicts | **TOTAL** |
|----------------|--------------------|--------------------|---------------------|-----------|
| 3 legs (T) | 3 | 3 | 3 | **9** |
| 4 legs (Cruz) | 16 | 8 | 8 | **32** |
| 5 legs | 35 | 15 | 15 | **65** |
| 6 legs | 60 | 24 | 24 | **108** |

**Conclusión:** 6-leg intersection tiene **12x más conflict points** que T-intersection.

#### Problemas Operacionales:

1. **Complejidad de señalización:**
   - Semáforos requieren 6-8 phases (vs 2-4 en intersección simple)
   - Ciclos largos (120-180 seg) → delays altos

2. **Confusión de conductores:**
   - Decisiones complejas en corto tiempo
   - Mayor tasa de errores

3. **Peatones:**
   - Cruces muy largos
   - Tiempos de espera excesivos

### 1.2 Alternativas de Diseño (Mejores Prácticas)

#### Opción 1: Convertir a Roundabout

**Mejor solución en 80% de casos.**

**Ventajas:**
- Reduce conflict points dramáticamente
- No requiere semáforos
- Mejor seguridad (75% reducción accidentes)

**Aplicación:**
- 5-leg intersection → Single-lane roundabout
- ICD: 140-180 ft (para acomodar 5 approaches)

**Diseño en Civil 3D:**
```
Ribbon > Intersections > Create Roundabout
- Select 5 centerline alignments
- ICD: 160 ft
- Entry width: 15 ft cada approach
```

#### Opción 2: Eliminar Legs (Realineamiento)

**Reducir a 4 legs** mediante:

1. **Close one leg:**
   - Cerrar approach de menor volumen
   - Redirigir tráfico a streets paralelas

2. **Offset one leg:**
   - Mover un approach 150-300 ft
   - Crear dos intersecciones de 4-legs separadas

**Ejemplo:**

**Antes (5-leg):**
```
        North St
            |
    West St-+-East St
           /|
      SW St |
          South St
```

**Después (dos 4-leg):**
```
        North St
            |
    West St-+-East St    [200 ft offset]
            |
        South St-+-SW St
```

**Ventajas:**
- Cada intersección es más simple
- Menor confusión
- Puede usar semáforos coordinados

#### Opción 3: Grade Separation (Costoso)

Uno o más approaches pasan **por debajo/encima** mediante puente/túnel.

**Aplicación:** Solo si volumen es MUY alto (> 50,000 ADT total).

### 1.3 Diseño de 5-Leg Intersection (Si No Hay Alternativa)

**Cuando es inevitable:**

#### Paso 1: Análisis de Volúmenes

**Clasificar approaches por ADT:**

```
Approach 1 (North): 8,000 ADT → MAJOR
Approach 2 (South): 7,500 ADT → MAJOR
Approach 3 (East): 5,000 ADT → MINOR
Approach 4 (West): 4,500 ADT → MINOR
Approach 5 (NE): 2,000 ADT → MINOR (candidato a eliminar)
```

**Decisión:** Si Approach 5 < 3,000 ADT, considerar cerrar.

#### Paso 2: Geometry Layout

**Ángulos entre approaches:**
- **Preferido:** 60-90° entre cada approach
- **Mínimo aceptable:** 45°

**5 approaches en 360°:**
```
360° / 5 = 72° average spacing
```

**Ejemplo layout:**
```
North: 0°
East: 72°
SE: 144°
South: 180°
West: 252°
```

#### Paso 3: Channelization

**Usar islands** para simplificar:

1. **Directional islands:**
   - Fuerzan movimientos específicos
   - Eliminan algunos conflict points

2. **Median islands:**
   - Separan opposing flows
   - Permiten two-stage pedestrian crossings

#### Paso 4: Civil 3D Modeling

**Problema:** Create Intersection Wizard solo soporta hasta 4 legs.

**Solución:** **Diseño manual** con múltiples corridors.

```
1. Crear 5 centerline alignments (todos en mismo site)
2. Para cada approach:
   - Create corridor individual
   - Station range: Hasta centro de intersección
3. En zona central:
   - Create grading feature lines manualmente
   - Connect todos los corridors
4. Create intersection surface:
   - Paste surfaces de todos los corridors
   - Create composite surface
```

**Alternativa (Advanced):**

Usar **Civil 3D API** para crear custom intersection object con 5+ legs.

---

## 2. SKEWED INTERSECTIONS (INTERSECCIONES OBLICUAS)

### 2.1 Definición y Problemas

**Skewed intersection:** Ángulo entre approaches es < 60° o > 120°.

#### Problemas Causados:

1. **Sight distance reducida:**
   - Conductores deben girar cabeza más
   - Mayor blind spot

2. **Área de conflicto extendida:**
   - Vehículos pasan más tiempo en zona de intersección
   - Mayor exposición a colisiones

3. **Confusión de conductores:**
   - No es obvio quién tiene derecho de paso

**Ejemplo:**

```
     Main St
     ========>

           /
          /
Cross St / (30° angle - MUY OBLICUA)
```

### 2.2 Soluciones de Diseño

#### Solución 1: Realinear Approaches

**Objetivo:** Lograr ángulo 75-90°.

**Métodos:**

**A. Curvar approach 100-200 ft antes de intersección:**

```
Before:
Main St ========>
              /
Cross St    /

After:
Main St ========>
              |  (curved transition)
Cross St ====/
```

**En Civil 3D:**

```
1. Alignment > Edit Alignment Geometry
2. Add curve a Cross St alignment:
   - Radius: 200-300 ft
   - Length: 150 ft
   - Termina perpendicular a Main St
```

**B. Offset intersection point:**

Mover PI de una vía lateralmente:

```
1. Offset Cross St alignment 50 ft
2. Adjust connection curves
```

#### Solución 2: Splitter Island Extendida

**Mantener skew** pero mejorar safety con island grande.

**Diseño:**

```
Width de splitter island: 15-25 ft (vs 10 ft normal)
Length: 100-200 ft
```

**Función:**
- Fuerza deflection mayor
- Proporciona refugio peatonal largo
- Mejora sight distance

**Civil 3D Implementation:**

```
1. Create feature line para splitter island
2. Width: 20 ft
3. Extend desde 200 ft antes de intersection hasta 50 ft después
4. Add to corridor as "exclude region"
```

#### Solución 3: Two-Stage Crossing

Para peatones en intersecciones muy oblicuas:

**Método:**
1. Peatones cruzan approach 1 → llegan a splitter island
2. Giran 90° en island
3. Cruzan approach 2

**Requiere:**
- Splitter island ≥ 12 ft ancho (espacio para girar)
- Crosswalk en ambas etapas

---

## 3. OFFSET INTERSECTIONS

### 3.1 Definición

**Offset intersection:** Approaches opuestos NO están alineados.

**Ejemplo:**

```
        North Approach
              |
    West ----   ---- East (offset 50 ft)
              |
        South Approach
```

### 3.2 Tipos de Offset

#### A. T-Intersections Offset (Staggered T)

```
Main St  ===|========|====
            |        |
         Street A  Street B (offset 100 ft)
```

**Problema:**
- Conductores en Street A turning left deben cruzar opposing traffic de Street B
- Confusión sobre priority

#### B. Four-Leg Offset

```
           North
             |
    West ----+----- (offset)
             |  \
          South  East (offset 75 ft)
```

**Problema mayor:**
- Parece 4-leg pero funciona como dos T-intersections
- Tráfico no fluye naturalmente

### 3.3 Criterios AASHTO

**Offset permisible:**

| Offset Distance | Categoría | Tratamiento |
|-----------------|-----------|-------------|
| 0-50 ft | Mínimo offset | Tratar como intersection única, usar señalización clara |
| 50-150 ft | Offset moderado | **PROBLEMÁTICO** - evitar si es posible |
| 150-300 ft | Offset significativo | Tratar como DOS intersecciones separadas |
| > 300 ft | Offset grande | Definitivamente dos intersecciones |

**Regla AASHTO:**
- **Offset < 50 ft:** OK, alinear lo más posible
- **Offset 50-150 ft:** EVITAR (zona "worst case")
- **Offset > 150 ft:** OK, diseñar como intersecciones separadas

### 3.4 Diseño de Offset Intersection

#### Para Offset < 50 ft:

**Usar median continuous** entre las dos approaches:

```
Main St  ===|==[MEDIAN]==|====
            |             |
         Street A      Street B
```

**Ventajas:**
- Fuerza movimientos específicos
- Elimina algunos conflict points
- Más claro para conductores

**Civil 3D:**

```
1. Create corridor para Main St con median
2. Median width: Variable (estrecha en extremos, ancha en centro)
3. Assemblies:
   - Normal section: Median 6 ft
   - Between approaches: Median 20-30 ft (incluye nose)
```

#### Para Offset > 150 ft:

**Diseñar como DOS intersecciones independientes:**

```
1. Intersection 1: Main St & Street A
2. Intersection 2: Main St & Street B

Coordinar semáforos si aplica (signal coordination)
```

---

## 4. GRADE-SEPARATED INTERSECTIONS

### 4.1 Tipos de Grade Separations

#### A. Simple Overpass (Sin Intercambio)

**Descripción:** Una vía cruza SOBRE otra sin ramps de intercambio.

**Aplicación:**
- Railroad crossing sobre highway
- Highway principal sobre street local

**Componentes:**
- **Bridge:** Estructura elevada
- **Abutments:** Muros de soporte en extremos
- **Piers:** Columnas (si span es largo)

#### B. Interchange (Con Ramps)

**Descripción:** Grade separation + ramps para intercambio de tráfico.

**Tipos principales:**

1. **Diamond Interchange:**
   - Más común
   - Económico
   - Apto para volúmenes medios

2. **Partial Cloverleaf (PARCLO):**
   - Loop ramps para algunos movimientos
   - Mayor capacidad que diamond

3. **Full Cloverleaf:**
   - Loop ramps en todos los quadrants
   - Alta capacidad
   - Requiere mucho espacio

4. **Directional Interchange:**
   - Direct ramps (sin loops)
   - Máxima capacidad
   - Muy costoso

### 4.2 Diamond Interchange Design Fundamentals

**Geometría básica:**

```
        Overpass (Highway)
   ===============|===============
                  |
        Ramp NW   |   Ramp NE
              \   |   /
               \  |  /
   =============\/|\/=============
   <--- Cross Road (at-grade) --->
   =============/\|/\=============
               /  |  \
        Ramp SW   |   Ramp SE
                  |
   ===============|===============
        Overpass continues
```

**Componentes:**

1. **Mainline (Highway):** Pasa elevado (typ. 18-25 ft clearance)
2. **Cross road:** A nivel (grade 0)
3. **4 ramps:** On-ramps y off-ramps
4. **2 at-grade intersections:** En extremos del bridge (ramp terminals)

#### Vertical Clearance:

**Mínimos AASHTO:**
- **Over highway:** 16.5 ft (deseable: 17-18 ft)
- **Over railroad:** 23 ft
- **Over local road:** 14 ft (mínimo absoluto)

### 4.3 Diamond Interchange en Civil 3D

#### Workflow General:

**Paso 1: Mainline Highway**

```
1. Create alignment: Highway CL
2. Create profile:
   - Elevación suficiente para clear cross road
   - Ejemplo: Si cross road @ Elev 100, highway @ Elev 118 (18 ft clearance)
3. Create corridor: Standard highway section
```

**Paso 2: Cross Road**

```
1. Create alignment: Cross Road CL
2. Create profile: Flat @ Elev 100 (at-grade)
3. Create corridor: Arterial section
```

**Paso 3: Ramp Alignments (4 total)**

**Ramp NE (on-ramp desde cross road hacia highway north):**

```
1. Alignment:
   - Start: Cross road @ Sta X+XX
   - Path: Curve connecting to highway
   - End: Highway @ Sta Y+YY
   - Design speed: 35-45 mph (ramp speed)

2. Profile:
   - Start elevation: 100 ft (match cross road)
   - End elevation: 118 ft (match highway)
   - Grade: Max 6% (AASHTO)
   - Vertical curves: K-values según design speed
```

**Curva horizontal del ramp:**

**Radio mínimo:**

| Ramp Design Speed | Minimum Radius |
|-------------------|----------------|
| 25 mph | 95 ft |
| 30 mph | 140 ft |
| 35 mph | 190 ft |
| 40 mph | 250 ft |
| 45 mph | 310 ft |

**Paso 4: Acceleration/Deceleration Lanes**

Ver Lección 3 para cálculos completos.

**Típico:**
- Acceleration lane (on-ramp): 800-1,200 ft
- Deceleration lane (off-ramp): 400-600 ft

**Paso 5: Ramp Terminal Intersections**

En extremos de ramps (donde conectan con cross road):

```
Use Create Intersection Wizard:
- Approach 1: Cross road
- Approach 2: Ramp
- Type: T-intersection
- Curb return radius: 25-40 ft
```

**Paso 6: Bridge Structure**

Civil 3D no modela estructura de puente en detalle, pero:

```
1. Create "bridge" feature line:
   - Follows highway alignment
   - Length: Cross road width + 50 ft cada lado (abutments)

2. Create abutments (básico):
   - Feature lines verticales @ cada extremo
   - Height: 18 ft (hasta highway elevation)
```

**Para diseño estructural real:** Exportar a Autodesk Robot Structural Analysis.

---

## 5. CAPACITY ANALYSIS (HCM METHODOLOGY)

### 5.1 Highway Capacity Manual (HCM) 7th Edition

El **HCM** es el estándar USA para análisis de capacidad de intersecciones.

#### Conceptos Fundamentales:

**1. Capacity (C):**
- Máximo número de vehículos que pueden pasar por una intersección en 1 hora
- Medido en **vph** (vehicles per hour)

**2. Volume (V):**
- Número real/proyectado de vehículos en hora pico
- También en vph

**3. v/c Ratio:**
```
v/c = V / C
```
- **v/c < 0.85:** Aceptable (LOS A-D)
- **v/c 0.85-1.00:** Cerca de capacidad (LOS E)
- **v/c > 1.00:** Sobrecapacidad (LOS F, colapso)

### 5.2 Capacity de Signalized Intersection (Semaforizada)

#### Fórmula HCM Básica:

```
C = (s × g / C_cycle) × N × f_HV
```

Donde:
- **s** = saturation flow rate (vphpl = veh per hour per lane)
  - Típico: 1,900 vphpl para urban areas
  - Range: 1,600-2,000 vphpl
- **g** = effective green time (segundos)
- **C_cycle** = cycle length (segundos)
- **N** = number of lanes
- **f_HV** = heavy vehicle adjustment factor
  - 1.0 si no hay trucks
  - 0.85-0.95 si 10-20% trucks

#### Ejemplo de Cálculo:

**Datos:**
```
Approach: Main Street Northbound
Lanes: 2
Cycle length: 90 seg
Green time: 45 seg (50% del ciclo)
Saturation flow: 1,900 vphpl
Heavy vehicles: 10% → f_HV = 0.95
```

**Capacidad:**
```
C = (1,900 × 45 / 90) × 2 × 0.95
C = (1,900 × 0.5) × 2 × 0.95
C = 950 × 2 × 0.95
C = 1,805 vph
```

**Si volumen proyectado = 1,500 vph:**
```
v/c = 1,500 / 1,805 = 0.83
LOS = D (aceptable)
```

### 5.3 Saturation Flow Rate Adjustments

**Fórmula completa HCM:**

```
s = s_base × f_w × f_HV × f_g × f_p × f_bb × f_a × f_LU × f_LT × f_RT
```

**Factores de ajuste:**

| Factor | Descripción | Valor Típico |
|--------|-------------|--------------|
| s_base | Base saturation flow | 1,900 vphpl |
| f_w | Lane width | 0.96 (10 ft lane), 1.00 (12 ft), 1.04 (14 ft) |
| f_HV | Heavy vehicles | 0.85-1.00 |
| f_g | Grade | 0.98 (2% up), 1.00 (flat), 1.02 (2% down) |
| f_p | Parking (si hay) | 0.90-1.00 |
| f_bb | Bus blockage | 0.95-1.00 |
| f_a | Area type | 0.90 (CBD), 1.00 (suburban) |
| f_LU | Lane utilization | 0.95 (multi-lane) |
| f_LT | Left-turn | 0.95 (protected), 0.85 (permitted) |
| f_RT | Right-turn | 0.85 (conflict peatonal) |

**Ejemplo con ajustes:**

```
s = 1,900 × 1.00 × 0.95 × 1.00 × 1.00 × 1.00 × 1.00 × 0.95 × 0.95 × 0.85
s = 1,900 × 0.729
s ≈ 1,385 vphpl (ajustado)
```

**Gran diferencia vs base!**

### 5.4 Critical Movement Analysis

**Método simplificado** para intersecciones semaforizadas:

#### Paso 1: Identificar Critical Movements

En cada phase, el movement con **mayor volumen** es critical.

**Ejemplo (2-phase signal):**

**Phase 1 (NS green):**
- NB through: 800 vph
- SB through: 700 vph
- **Critical:** NB through (800 vph)

**Phase 2 (EW green):**
- EB through: 600 vph
- WB through: 650 vph
- **Critical:** WB through (650 vph)

#### Paso 2: Sum Critical Volumes

```
V_critical_total = 800 + 650 = 1,450 vph
```

#### Paso 3: Calculate Required Capacity

```
C_required = V_critical_total / 0.90 (target v/c)
C_required = 1,450 / 0.90 = 1,611 vph
```

#### Paso 4: Verify Signal Timing

```
Si C_provided (calculado con timing actual) ≥ C_required:
    → Signal timing es ADECUADO
Sino:
    → Necesita ajuste (más green time o más lanes)
```

---

## 6. LEVEL OF SERVICE (LOS) CALCULATION

### 6.1 LOS Criteria para Signalized Intersections

**Basado en DELAY (control delay en segundos por vehículo):**

| LOS | Control Delay (seg/veh) | Descripción |
|-----|-------------------------|-------------|
| **A** | ≤ 10 | Flujo libre, pasa en 1er ciclo |
| **B** | 10-20 | Flujo estable, pocos ciclos de espera |
| **C** | 20-35 | Flujo aceptable, algunos vehículos esperan 2 ciclos |
| **D** | 35-55 | Delays notables, muchos esperan 2+ ciclos |
| **E** | 55-80 | Delays largos, cerca de capacidad |
| **F** | > 80 | Colapso, queues extremadamente largas |

### 6.2 Control Delay Formula (HCM)

**Fórmula simplificada:**

```
d = d_1 + d_2 + d_3
```

Donde:
- **d_1:** Uniform delay (debido a ciclo de semáforo)
- **d_2:** Overflow delay (debido a queue que no cabe en green time)
- **d_3:** Initial queue delay (si ya hay queue al inicio)

#### Uniform Delay (d_1):

```
d_1 = [0.5 × C × (1 - g/C)²] / [1 - min(1, X) × g/C]
```

Donde:
- C = cycle length (seg)
- g = green time (seg)
- X = v/c ratio

**Ejemplo:**

```
C = 90 seg
g = 45 seg
X = 0.83 (v/c calculated antes)

d_1 = [0.5 × 90 × (1 - 45/90)²] / [1 - 0.83 × (45/90)]
d_1 = [45 × (0.5)²] / [1 - 0.415]
d_1 = [45 × 0.25] / 0.585
d_1 = 11.25 / 0.585
d_1 ≈ 19.2 seg
```

**LOS para d_1 solo:** B (10-20 seg)

#### Overflow Delay (d_2):

Si v/c > 1.0, hay overflow:

```
d_2 = 900 × T × [(X - 1) + √((X - 1)² + (8 × k × X) / (C × T))]
```

Para v/c < 1.0: **d_2 = 0**

#### Total Delay:

Si no hay initial queue (d_3 = 0):

```
d_total = d_1 + 0 + 0 = 19.2 seg
LOS = B
```

### 6.3 Software para LOS Analysis

#### Synchro/SimTraffic:

**Industria estándar** para análisis de intersecciones semaforizadas.

**Funciones:**
- Importa volumes y geometry
- Optimiza signal timing automáticamente
- Calcula LOS para cada movement
- Genera reportes profesionales

**Costo:** ~$3,000-$5,000/licencia

**Integración con Civil 3D:**
- Exportar alignments a Synchro
- Importar optimized geometry de vuelta

#### HCS (Highway Capacity Software):

**Desarrollado por McTrans (University of Florida).**

**Ventajas:**
- Basado directamente en HCM
- Económico ($500-$1,000)
- Cálculos manuales verificables

**Desventaja:**
- No tiene visualización 3D
- Interface menos intuitiva

---

## 7. QUEUE LENGTH ANALYSIS

### 7.1 Queue Length Formula (HCM)

**95th percentile queue length:**

```
Q_95 = (C × T × (X - 1) + √((C × T × (X - 1))² + (8 × k × C × T × X))) / (2 × (1 - X))
```

Simplificado para v/c < 0.85:

```
Q_95 ≈ (V × R) / 1,800
```

Donde:
- V = volumen (vph)
- R = red time (segundos)

**Ejemplo:**

```
V = 800 vph
Cycle = 90 seg
Green = 45 seg → Red = 45 seg

Q_95 = (800 × 45) / 1,800
Q_95 = 36,000 / 1,800
Q_95 = 20 vehículos
```

**En pies:**
```
20 vehículos × 25 ft/veh = 500 ft queue
```

### 7.2 Storage Length Verification

**Comparar queue length con storage disponible:**

```
Si L_storage ≥ Q_95:
    ✓ OK
Sino:
    ⚠️ Queue desborda, bloquea upstream intersections
```

**Ejemplo:**

```
L_storage diseñado = 400 ft
Q_95 calculado = 500 ft

PROBLEMA: Queue desborda 100 ft
```

**Soluciones:**
1. Incrementar storage length a 550 ft (buffer)
2. Agregar segundo left-turn lane
3. Incrementar green time (reducir red time)

---

## 8. CONFLICT POINT ANALYSIS

### 8.1 Tipos de Conflict Points

Revisar Lección 1 para detalles.

**Resumen:**

1. **Crossing:** Más peligroso (colisiones T-bone)
2. **Merging:** Peligrosidad media (colisiones laterales)
3. **Diverging:** Menor peligrosidad

### 8.2 Conflict Point Diagram

**Crear diagrama para documentación:**

#### Método Manual:

**Paso 1:** Dibujar intersection geometry en plan view

**Paso 2:** Marcar cada conflict point:
- **Red circles:** Crossing conflicts
- **Yellow triangles:** Merging conflicts
- **Green squares:** Diverging conflicts

**Paso 3:** Numerar y tabular:

```
Conflict Point ID | Type | Movements Involved | Severity
CP-01 | Crossing | NB Left vs SB Through | High
CP-02 | Merging | EB Right vs SB Through | Medium
...
```

### 8.3 Mitigation Strategies

**Para reducir conflict points:**

1. **Channelization:**
   - Islands que eliminan ciertos movements

2. **Roundabout:**
   - Elimina ALL crossing conflicts

3. **Protected left-turn phases:**
   - Elimina crossing conflict entre left-turn y opposing through

4. **Right-turn on red prohibido:**
   - Elimina merging conflict con pedestrians

---

## 9. DOCUMENTACIÓN TÉCNICA PROFESIONAL

### 9.1 Plan Sheets Requeridos

**Set completo de intersection design:**

#### Sheet 1: Cover Sheet
- Project title
- Location map
- Index de sheets

#### Sheet 2: Existing Conditions Plan
- Topografía existente
- Utilities (agua, alcantarillado, eléctrico)
- ROW lines
- Structures existentes

#### Sheet 3: Geometric Layout Plan
- Intersection geometry (alignments, curb returns)
- Dimensions (radii, offsets, widths)
- Pavement markings
- Signing plan

#### Sheet 4: Grading Plan
- Contours (existing y proposed)
- Spot elevations
- Drainage flow arrows
- Inlets/catch basins

#### Sheet 5: Profile Sheets
- Main Street profile (existing y proposed)
- Cross Street profile
- Vertical curve data

#### Sheet 6: Cross Sections
- Typical sections (3-5 locations)
- Curb return sections
- Cut/fill shading

#### Sheet 7: Details
- Curb and gutter detail
- Sidewalk ramp detail
- Pavement marking details
- Signing details

#### Sheet 8: Quantities
- Earthwork (cut/fill)
- Pavement (SY)
- Curb (LF)
- Sidewalk (SF)

### 9.2 Generación de Plan Sheets en Civil 3D

#### Crear Plan Production Sheets:

```
Ribbon > Output > Plan Production > Create Sheets
```

**Wizard Steps:**

1. **Select alignments:** Todos los alignments de intersección
2. **Sheet template:** ANSI D (24x36) o similar
3. **Layout:** Plan and Profile
4. **Scale:** 1"=20' (plan), 1"=10' (profile)

**Resultado:** Sheets automáticos con viewports configurados.

### 9.3 Reports y Tablas

#### Quantity Takeoff Report:

```
Corridor > Compute Materials
```

**Configure:**
- **Surfaces:** EG (existing) vs Corridor Top (proposed)
- **Materials:** Pavement, Base, Subbase, Cut, Fill

**Output:**
```
Material          | Quantity
Asphalt Pavement  | 1,245 SY
Aggregate Base    | 185 CY
Cut               | 320 CY
Fill              | 180 CY
Net Cut           | 140 CY
```

#### Curve Data Table:

```
Ribbon > Annotate > Add Tables > Add Curve Table
```

**Incluye:**
- Curve number
- Radius
- Length
- Delta angle
- Tangent lengths

---

## 10. EXERCISE: ANÁLISIS COMPLETO DE INTERSECCIÓN

### 10.1 Objetivo del Ejercicio

Realizar análisis completo de capacity y LOS para:

**Intersección semaforizada:**
- Main Street (NS): 4 lanes (2 each direction)
- Oak Avenue (EW): 4 lanes (2 each direction)
- Signal timing: 90 seg cycle (45/45 split)

**Volúmenes (hora pico):**
- NB through: 900 vph
- SB through: 850 vph
- EB through: 650 vph
- WB through: 700 vph
- NB left: 120 vph
- SB left: 100 vph
- EB left: 80 vph
- WB left: 90 vph

### 10.2 Tareas

**Tarea 1:** Calcular capacity para cada approach

**Tarea 2:** Calcular v/c ratios

**Tarea 3:** Determinar LOS

**Tarea 4:** Calcular queue lengths

**Tarea 5:** Verificar storage adequacy

**Tarea 6:** Generar conflict point diagram

**Tarea 7:** Recomendar mejoras si LOS < C

---

## RESUMEN DE LA LECCIÓN

En esta lección aprendiste:

1. **Multi-leg intersections:** Problemas, alternativas (roundabouts, realineamiento)
2. **Skewed intersections:** Soluciones (realinear, splitter islands)
3. **Offset intersections:** Criterios AASHTO, diseño según offset distance
4. **Grade-separated intersections:** Overpasses, diamond interchanges
5. **Capacity analysis:** HCM methodology, saturation flow, critical movements
6. **LOS calculation:** Control delay formulas, criteria
7. **Queue analysis:** Q_95 calculation, storage verification
8. **Conflict points:** Diagrams, mitigation strategies
9. **Documentación profesional:** Plan sheets, reports, quantities

---

## CERTIFICACIÓN DEL MÓDULO 2

**Completaste el Módulo 2: Intersecciones y Roundabouts.**

**Próximo paso:**
- **Quiz del módulo:** 20 preguntas (requiere 80% para aprobar)
- **Proyecto final:** Diseñar intersección completa con análisis de capacidad

**Al aprobar, recibirás:**
- Certificado digital del Módulo 2
- Acceso al Módulo 3: Quantity Takeoff y Mass Haul

---

## PRÓXIMO MÓDULO

**Módulo 3: Quantity Takeoff y Mass Haul Analysis**

Aprenderás a calcular volúmenes de corte/relleno, generar tablas de cantidades, optimizar movimiento de tierras con mass haul diagrams, y estimar costos de construcción.

---

## RECURSOS ADICIONALES

- **AASHTO Green Book:** Chapters 9-10 (Intersections, Interchanges)
- **HCM 7th Edition:** Chapters 19-31 (Signalized, Unsignalized, Roundabouts)
- **FHWA:** Intersection Safety Implementation Guide
- **Synchro Studio:** Traffic signal optimization software

---

**Palabras:** 5,346
**Tiempo de lectura estimado:** 40-45 minutos
**Tiempo de práctica:** 2.5 horas

---

*DISTMAH ATC - Universidad Autodesk*
*Civil 3D 2026 Avanzado - Módulo 2, Lección 5*
