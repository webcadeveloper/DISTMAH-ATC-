# LECCIÓN 3: TURN LANES Y ACCELERATION/DECELERATION LANES

## CIVIL 3D 2026 AVANZADO - MÓDULO 2

**Duración:** 2 horas
**Nivel:** Avanzado
**Prerequisitos:** Lecciones 1-2 completadas, conocimiento de corridor modeling

---

## OBJETIVOS DE LA LECCIÓN

Al finalizar esta lección serás capaz de:

1. Diseñar turn lanes (carriles de giro) según normas AASHTO
2. Calcular storage length apropiada para left-turn bays
3. Diseñar taper transitions con longitudes correctas
4. Implementar acceleration lanes para on-ramps de autopistas
5. Diseñar deceleration lanes para off-ramps
6. Aplicar principios de lane balance y continuity
7. Modelar turn lanes en Civil 3D usando corridor regions
8. Generar transitions automáticas con assemblies dinámicos

---

## 1. FUNDAMENTOS DE TURN LANES

### 1.1 Definición y Propósito

Un **turn lane** (carril de giro) es un carril adicional que permite a vehículos girar sin interferir con el flujo directo (through traffic).

#### Beneficios de Turn Lanes:

1. **Capacidad:** Incrementa capacidad de intersección 25-40%
2. **Seguridad:** Reduce rear-end collisions 25-75% (según FHWA)
3. **Level of Service:** Mejora LOS de intersección (típicamente 1-2 niveles)
4. **Reducción de demoras:** 30-60% menos delay para through traffic

#### Tipos Principales:

1. **Left-Turn Lane (LTL):**
   - Carril dedicado para giros a la izquierda
   - Típicamente con median (isla separadora)
   - **Más común** y más crítico para seguridad

2. **Right-Turn Lane (RTL):**
   - Carril dedicado para giros a la derecha
   - Permite giros libres (sin detención)
   - Menos común en áreas urbanas (conflicto con peatones)

3. **Two-Way Left-Turn Lane (TWLTL):**
   - Carril central compartido para giros izquierda en ambas direcciones
   - Común en arteriales urbanas comerciales
   - Requiere diseño especial (marking discontinuo)

### 1.2 Warrants para Turn Lanes (Cuándo son Necesarios)

#### Criterios AASHTO (Green Book):

**Left-Turn Lane Warranted cuando:**

1. **Volumen de giros izquierda:** > 100 vph en hora pico
2. **Through traffic:** > 400 vph por lane
3. **Accidentes:** ≥ 3 rear-end crashes en 12 meses relacionados con giros izquierda

**Tabla de Warrants (AASHTO):**

| Through ADT | Left-Turn ADT | LTL Recomendado |
|-------------|---------------|-----------------|
| < 6,000 | < 100 | No necesario |
| 6,000 - 10,000 | 100 - 200 | Considerar |
| 10,000 - 15,000 | 100 - 200 | Sí |
| 15,000 - 20,000 | > 100 | Sí (mandatory) |
| > 20,000 | > 50 | Sí (mandatory) |

**Right-Turn Lane Warranted cuando:**

1. **Volumen de giros derecha:** > 200 vph en hora pico
2. **Conflicto peatonal:** Alto volumen peatones (> 100 ped/hr)
3. **Design speed > 40 mph** y volumen > 100 vph

---

## 2. LEFT-TURN LANE DESIGN

### 2.1 Componentes de un Left-Turn Bay

**Anatomía completa:**

```
[Through Lane] | [Median] | [Left-Turn Lane] | [Median] | [Through Lane Opuesto]

                           [Taper] → [Storage] → [Taper]
```

**Componentes:**

1. **Taper (Transition):** Zona de transición donde el lane se forma
2. **Storage (Bay):** Zona de almacenamiento de vehículos en espera
3. **Median:** Isla separadora (raised o painted)

### 2.2 Storage Length Calculation

El **storage length** es la longitud del bay necesaria para almacenar vehículos en espera.

#### Fórmula AASHTO:

**Método 1: Basado en Queue (HCM):**

```
L_storage = N × L_veh
```

Donde:
- N = número de vehículos en queue (95th percentile)
- L_veh = longitud promedio de vehículo (20 ft para passenger car, 25 ft incluyendo gap)

**Cálculo de N (según HCM):**

```
N = (V_LT × PHF × T) / 3,600
```

Donde:
- V_LT = volumen de left-turns en hora pico (vph)
- PHF = Peak Hour Factor (típicamente 0.85-0.95)
- T = duración de red phase (segundos)

**Ejemplo:**

```
V_LT = 180 vph
PHF = 0.90
T = 45 seg (semáforo con ciclo de 90 seg)

N = (180 × 0.90 × 45) / 3,600
N = 7,290 / 3,600
N = 2.025 ≈ 2 vehículos

L_storage = 2 × 25 = 50 ft
```

**Ajuste por conservadurismo:**
- Agregar 1-2 vehículos adicionales para 95th percentile
- **L_storage final = 75-100 ft** (3-4 vehículos)

#### Método 2: Tabla de Referencia Rápida (AASHTO):

| Left-Turn Volume (vph) | Storage Length |
|------------------------|----------------|
| < 50 | 75 ft (mínimo) |
| 50 - 100 | 100 ft |
| 100 - 150 | 125 ft |
| 150 - 200 | 150 ft |
| 200 - 300 | 200 ft |
| > 300 | Cálculo detallado requerido |

**Mínimo absoluto:** 75 ft (3 vehículos) incluso en volúmenes bajos.

### 2.3 Taper Length Design

El **taper** es la transición desde el through lane hacia el turn lane.

#### Tipos de Taper:

1. **Upstream Taper (Approach Taper):**
   - Formación del turn lane
   - **Más crítico** para diseño

2. **Downstream Taper (Departure Taper):**
   - Regreso del turn lane al through lane
   - Después de la intersección (si aplica)

#### Fórmula de Taper Length (AASHTO):

**Para High-Speed Roads (> 45 mph):**

```
L_taper = W × S
```

Donde:
- W = width offset (ft) - típicamente 12 ft (ancho del turn lane)
- S = taper ratio (según velocidad)

**Taper Ratios (AASHTO Table 9-28):**

| Design Speed | Taper Ratio (S) | L_taper para W=12 ft |
|--------------|-----------------|----------------------|
| 30 mph | 15:1 | 180 ft |
| 35 mph | 20:1 | 240 ft |
| 40 mph | 25:1 | 300 ft |
| 45 mph | 30:1 | 360 ft |
| 50 mph | 40:1 | 480 ft |
| 55 mph | 50:1 | 600 ft |
| 60 mph | 60:1 | 720 ft |

**Para Low-Speed Roads (< 40 mph) - Urban:**

Puede usarse taper ratio más agresivo:
- **10:1 a 15:1** aceptable en áreas urbanas con espacio limitado
- Requiere señalización adicional

**Ejemplo:**

Design speed = 45 mph, W = 12 ft:
```
L_taper = 12 × 30 = 360 ft
```

#### Full-Width Shoulder Taper:

Si hay shoulder (berma):

```
L_taper_total = L_taper_lane + L_taper_shoulder
```

Shoulder taper típicamente usa ratio 8:1 a 10:1.

### 2.4 Total Length del Left-Turn Bay

**Fórmula completa:**

```
L_total = L_taper + L_storage + L_taper (si hay departure taper)
```

**Ejemplo completo:**

```
Design speed: 45 mph
Storage: 150 ft (6 vehículos)
Taper: 360 ft

L_total = 360 + 150 = 510 ft
```

**Nota:** Generalmente no hay departure taper en left-turn bays porque el lane termina en la intersección.

### 2.5 Median Design

La **median** separa los through lanes de los turn lanes.

#### Tipos de Median:

1. **Raised Median (Elevated):**
   - Curb height: 6 inches típico
   - Material: Concrete
   - **Ventaja:** Definición visual clara, previene invasiones
   - **Desventaja:** Costo mayor

2. **Painted Median (Striped):**
   - Marking: Double yellow lines con hatching
   - Width: 4-6 ft
   - **Ventaja:** Bajo costo, fácil modificar
   - **Desventaja:** Vehículos pueden invadir

#### Ancho de Median:

**Mínimos AASHTO:**
- **Raised median:** 4 ft (urbano), 6 ft (rural)
- **Painted median:** 4 ft (mínimo absoluto)

**Deseable:**
- **8-12 ft:** Permite landscaping, barrier si es necesario

**Wide Median (> 30 ft):**
- Permite separate profile para cada direction
- Tratamiento como vías independientes

### 2.6 Offset Left-Turn Lane

**Definición:** Turn lane desplazado lateralmente para mejorar sight distance.

#### Problema a Resolver:

En intersecciones con left-turn lanes opuestos:
- Vehículos esperando en left-turn lane obstruyen visión
- Conductor no puede ver tráfico approaching desde dirección opuesta

#### Solución: Offset Design

**Offset distance:**
- **Mínimo:** 2 ft (600 mm)
- **Deseable:** 3-5 ft

**Implementación en Civil 3D:**
- Offset alignment del left-turn lane 2-3 ft hacia la izquierda
- Mantener same profile

---

## 3. RIGHT-TURN LANE DESIGN

### 3.1 Características Especiales

Right-turn lanes tienen consideraciones diferentes:

1. **Free-flow design:** Permite giros sin detenerse
2. **Conflicto peatonal:** Crosswalk en trajectory del turn
3. **Radius design:** Radio más amplio que left-turns

### 3.2 Storage Length

**Generalmente más corto que left-turn lanes:**
- Right-turns son típicamente más rápidos (no esperan tráfico opuesto)
- Menos vehicles en queue

**Tabla de referencia:**

| Right-Turn Volume (vph) | Storage Length |
|-------------------------|----------------|
| < 100 | 50 ft |
| 100 - 200 | 75 ft |
| 200 - 300 | 100 ft |
| > 300 | 125-150 ft |

### 3.3 Deceleration Distance

**Adicional a storage:** Distance necesaria para decelerar de design speed a turn speed.

**Fórmula:**

```
L_decel = (V1² - V2²) / (30 × a)
```

Donde:
- V1 = approach speed (mph)
- V2 = turn speed (mph) - típicamente 15-25 mph
- a = deceleration rate (ft/s²) - típicamente 8-10 ft/s² (confortable)

**Ejemplo:**

```
V1 = 45 mph
V2 = 20 mph
a = 10 ft/s²

L_decel = (45² - 20²) / (30 × 10)
L_decel = (2,025 - 400) / 300
L_decel = 1,625 / 300
L_decel = 5.42 ft/s² equivalente

Conversión correcta con factor 1.47:
L_decel = [(45 × 1.47)² - (20 × 1.47)²] / (2 × 32.2 × (10/32.2))
L_decel ≈ 180 ft
```

**Simplificación con tabla AASHTO:**

| Speed Differential (mph) | Deceleration Distance |
|--------------------------|----------------------|
| 15 | 100 ft |
| 20 | 150 ft |
| 25 | 220 ft |
| 30 | 300 ft |

### 3.4 Radius Design para Right-Turns

**Radio de curb return:**

| Design Speed | Minimum Radius | Desirable Radius |
|--------------|----------------|------------------|
| 15 mph | 25 ft | 40 ft |
| 20 mph | 50 ft | 75 ft |
| 25 mph | 75 ft | 100 ft |

**Free-flow right-turn:**
- Radius > 100 ft permite velocidad 25-30 mph
- Puede requerir "slip lane" (island separating turn from through)

---

## 4. ACCELERATION Y DECELERATION LANES

### 4.1 Contexto: Highway Ramps

**Acceleration lanes** y **deceleration lanes** se usan principalmente en:

1. **On-ramps** (entrada a autopista/freeway)
2. **Off-ramps** (salida de autopista)
3. **Truck climbing lanes** (carriles para camiones en subidas)

#### Diferencia con Turn Lanes:

| Característica | Turn Lanes | Accel/Decel Lanes |
|----------------|------------|-------------------|
| **Uso** | Intersecciones at-grade | Highway interchanges |
| **Velocidad** | 15-35 mph | 45-70 mph |
| **Longitud** | 100-500 ft | 500-1,500 ft |
| **Propósito** | Girar en intersección | Merge/diverge con tráfico de alta velocidad |

### 4.2 Acceleration Lane Design (On-Ramps)

**Función:** Permitir que vehículos aceleren desde ramp speed (25-35 mph) hasta freeway speed (55-70 mph) antes de merge.

#### Componentes:

```
[Ramp] → [Taper] → [Acceleration Lane] → [Merge Taper] → [Freeway Through Lane]
```

1. **Ramp:** Curva de conexión desde surface street
2. **Acceleration lane:** Carril paralelo a freeway
3. **Merge taper:** Zona donde lane se termina y vehículos deben merge

#### Length Calculation (AASHTO):

**Fórmula basada en aceleración:**

```
L_accel = (V2² - V1²) / (30 × a)
```

Donde:
- V1 = ramp speed (mph) - típicamente 25-35 mph
- V2 = freeway speed (mph) - 55-70 mph
- a = acceleration rate (ft/s²)

**Acceleration Rates (AASHTO):**

| Vehicle Type | Acceleration Rate (a) |
|--------------|----------------------|
| Passenger car | 4.5-5.5 ft/s² |
| Truck (SU) | 2.0-2.5 ft/s² |
| Truck (WB) | 1.5-2.0 ft/s² |

**Design vehicle:** Usar truck (WB) para diseño conservador.

**Ejemplo:**

```
V1 = 30 mph → 44 ft/s
V2 = 60 mph → 88 ft/s
a = 2.0 ft/s² (truck)

L_accel = (88² - 44²) / (2 × 2.0)
L_accel = (7,744 - 1,936) / 4
L_accel = 5,808 / 4
L_accel = 1,452 ft
```

**Roundeo:** L_accel = **1,500 ft** (0.28 millas)

#### Tabla de Referencia Rápida (AASHTO Exhibit 10-70):

**Freeway Speed 60 mph:**

| Ramp Speed | Acceleration Length (Passenger) | Acceleration Length (Truck) |
|------------|--------------------------------|----------------------------|
| 20 mph | 790 ft | 1,320 ft |
| 25 mph | 690 ft | 1,160 ft |
| 30 mph | 590 ft | 990 ft |
| 35 mph | 480 ft | 820 ft |

**Freeway Speed 70 mph:**

| Ramp Speed | Acceleration Length (Passenger) | Acceleration Length (Truck) |
|------------|--------------------------------|----------------------------|
| 25 mph | 1,000 ft | 1,680 ft |
| 30 mph | 900 ft | 1,510 ft |
| 35 mph | 790 ft | 1,330 ft |

**Nota:** Usar valores para **Truck** en diseño final.

#### Merge Taper:

Después de acceleration lane:

```
L_taper = W × S
```

Donde:
- S = 50:1 a 70:1 para freeway speeds

**Ejemplo:**
```
W = 12 ft
S = 50:1
L_taper = 12 × 50 = 600 ft
```

### 4.3 Deceleration Lane Design (Off-Ramps)

**Función:** Permitir que vehículos desaceleren desde freeway speed hasta ramp speed sin interferir con through traffic.

#### Componentes:

```
[Freeway] → [Diverge Taper] → [Deceleration Lane] → [Taper] → [Ramp]
```

1. **Diverge taper:** Inicio del deceleration lane
2. **Deceleration lane:** Carril paralelo donde vehículos desaceleran
3. **Ramp:** Curva de salida

#### Length Calculation:

**Fórmula:**

```
L_decel = (V1² - V2²) / (30 × d)
```

Donde:
- V1 = freeway speed (mph)
- V2 = ramp speed (mph)
- d = deceleration rate (ft/s²) - típicamente 10-11 ft/s² (comfortable)

**Ejemplo:**

```
V1 = 60 mph → 88 ft/s
V2 = 30 mph → 44 ft/s
d = 10 ft/s²

L_decel = (88² - 44²) / (2 × 10)
L_decel = (7,744 - 1,936) / 20
L_decel = 5,808 / 20
L_decel = 290 ft
```

**Nota:** Deceleration lanes son **más cortas** que acceleration lanes.

#### Tabla de Referencia (AASHTO Exhibit 10-71):

**Freeway Speed 60 mph:**

| Ramp Speed | Deceleration Length |
|------------|---------------------|
| 20 mph | 360 ft |
| 25 mph | 310 ft |
| 30 mph | 260 ft |
| 35 mph | 210 ft |

**Freeway Speed 70 mph:**

| Ramp Speed | Deceleration Length |
|------------|---------------------|
| 25 mph | 460 ft |
| 30 mph | 400 ft |
| 35 mph | 350 ft |

#### Diverge Taper:

Similar a acceleration lane:

```
L_taper = 12 × 50 = 600 ft (para 60+ mph)
```

### 4.4 Special Cases: Auxiliary Lanes

**Auxiliary lane** conecta on-ramp con off-ramp próximo.

**Definición:** Lane continuo entre consecutive ramps cuando:
- Distancia entre ramps < 2,500 ft
- Alto porcentaje de weaving traffic (ramp-to-ramp movements)

**Ventajas:**
- Elimina necesidad de merge/diverge
- Mejora safety (menos lane-changing)
- Mejor LOS

**Diseño:**
- Ancho: 12 ft (mismo que through lanes)
- Longitud: Distancia entre ramps + tapers

---

## 5. LANE BALANCE Y CONTINUITY PRINCIPLES

### 5.1 Lane Balance Principle

**Definición:** El número de lanes downstream de una intersección debe ser ≥ número de lanes upstream.

#### Regla AASHTO:

```
N_downstream ≥ N_upstream
```

**Ejemplo CORRECTO:**

```
Approach: 3 lanes (2 through + 1 left-turn)
Downstream: 2 lanes
✓ CUMPLE: 2 ≥ 2 through lanes
```

**Ejemplo INCORRECTO (violación):**

```
Approach: 3 lanes (3 through)
Downstream: 2 lanes
✗ NO CUMPLE: Lane drop sin aviso
```

**Solución:** Agregar "Lane Drop" warning signs 500-1,000 ft antes.

### 5.2 Lane Continuity Principle

**Definición:** Lanes deben continuar de manera lógica a través de intersección.

#### Through Lane Continuity:

**Preferido:**
```
Lane 1 (derecha) → Continúa como Lane 1
Lane 2 → Continúa como Lane 2
```

**Evitar:**
```
Lane 1 → Se convierte en right-turn only
Lane 2 → Se convierte en Lane 1
```

**Razón:** Confusión para conductores, mayor riesgo de accidentes.

### 5.3 Lane Assignment en Intersecciones

**Opciones de lane usage:**

1. **Shared lane:** Through/Right (mediante señalización)
2. **Exclusive lane:** Solo Through o solo Turn
3. **Optional lane:** Through OR Turn (conductor elige)

**Best Practice AASHTO:**

| Configuración | Cuándo Usar |
|---------------|-------------|
| **Exclusive turn lanes** | Volumen turn > 200 vph |
| **Shared through/right** | Volumen right-turn < 100 vph |
| **Optional lanes** | Volúmenes balanceados |

---

## 6. CORRIDOR MODELING DE TURN LANES EN CIVIL 3D

### 6.1 Workflow General

**Proceso en Civil 3D:**

```
1. Crear alignment base (centerline)
2. Crear offset alignments para turn lanes
3. Diseñar assemblies con transitions
4. Crear corridor con multiple regions
5. Aplicar assembly transitions
6. Ajustar frequencies
7. Verificar surfaces
```

### 6.2 Creación de Offset Alignment para Turn Lane

#### Paso 1: Offset desde Centerline

```
Ribbon > Alignment > Create Offset Alignment
```

**Configuración:**
- **Parent alignment:** Main Street CL
- **Offset distance:** 6 ft derecha (si es right-turn) o 6 ft izquierda (left-turn)
  - Razón: Centerline del turn lane = 6 ft offset (la mitad del ancho del lane 12 ft)

**Station range:**
- **Start station:** Inicio del taper
- **End station:** Final del storage

**Ejemplo:**
```
Taper inicia en: Sta 10+00
Storage termina en: Sta 15+00
Offset alignment: Sta 10+00 a 15+00
```

#### Paso 2: Crear Profile del Turn Lane

```
Ribbon > Profile > Create Profile from Surface
```

**Opciones:**
1. **Mismo profile que main road:** Si elevación es idéntica
2. **Offset profile:** Si hay cross slope diferente

**Best Practice:**
- Match profile de main road en intersección
- Aplicar 2% cross slope hacia afuera en turn lane

### 6.3 Assembly Design para Turn Lane

#### Assembly Components Necesarios:

**Assembly 1: Through Section (Before Taper)**
- 2 lanes @ 12 ft cada uno
- Shoulders: 4-8 ft
- Curb/gutter (si urbano)

**Assembly 2: Transition (During Taper)**
- **Width varies** from 24 ft a 36 ft (2 lanes → 3 lanes)
- Subassembly: `LinkWidthAndSlope` (parámetro: Target Width)

**Assembly 3: Full Turn Lane Section**
- 3 lanes @ 12 ft (2 through + 1 turn)
- Median entre through y turn
- Curb/gutter

#### Subassemblies Clave:

1. **`LinkWidthAndSlope`:**
   - Permite ancho variable
   - Se conecta a offset alignment
   - Parámetro: Target

2. **`UrbanCurbGutterGeneral`:**
   - Bordillo y cuneta
   - Include gutter width (1.5-2 ft)

3. **`BasicLane`:**
   - Lane simple con width y slope parameters

### 6.4 Corridor Regions

**Definir 3 regiones:**

#### Region 1: Approach (Before Turn Lane)

```
Ribbon > Corridor > Add Region
```

- **Start station:** Inicio del corridor (ej: Sta 5+00)
- **End station:** Inicio del taper (ej: Sta 10+00)
- **Assembly:** Through Section (2 lanes)
- **Frequency:** Apply assembly at 25 ft intervals

#### Region 2: Taper (Transition)

- **Start station:** Inicio taper (Sta 10+00)
- **End station:** Final taper (Sta 13+60 si taper = 360 ft)
- **Assembly:** Transition Assembly (widening)
- **Frequency:** 10 ft (más denso para suavidad)

**Target Settings:**
```
Corridor Properties > Parameters > Targets
- Width target: Offset alignment del turn lane
- Slope target: Surface (existing ground)
```

#### Region 3: Full Turn Lane

- **Start station:** Final taper (Sta 13+60)
- **End station:** Final storage (Sta 15+00)
- **Assembly:** Full Turn Lane Assembly (3 lanes)
- **Frequency:** 25 ft

### 6.5 Assembly Transitions (Automated)

Civil 3D puede automatizar transitions entre assemblies.

#### Paso 1: Define Transition

```
Corridor Properties > Parameters > Assembly Transitions
```

**Add transition:**
- **From Region:** Region 1 (2 lanes)
- **To Region:** Region 3 (3 lanes)
- **Transition Region:** Region 2
- **Method:** Linear width change

**Parámetros:**
- **Transition start offset:** 0.00 (inicio de Region 2)
- **Transition end offset:** 360 ft (final de taper)

#### Paso 2: Verificar Transition

```
Corridor > Rebuild Corridor
```

Vista 3D:
- Verificar que pavement se expande suavemente
- No debe haber "jumps" o discontinuidades

### 6.6 Frequency Management

**Critical Stations:**

Agregar frecuencias adicionales en:
1. **Inicio/final de cada region**
2. **PI (point of intersection) en alignments**
3. **Cambios de assembly**

```
Corridor Properties > Parameters > Frequency
- Add Critical Station: Sta 10+00 (inicio taper)
- Add Critical Station: Sta 13+60 (final taper)
```

**Razón:** Asegura que el corridor calcule correctamente en puntos de cambio.

---

## 7. MEDIAN DESIGN EN CIVIL 3D

### 7.1 Raised Median con Feature Lines

#### Paso 1: Crear Feature Line de Median Edge

```
Ribbon > Feature Line > Create Feature Line from Alignment
```

**Alignments:**
- Median edge izquierda (offset desde CL)
- Median edge derecha (offset desde CL)

**Ejemplo:**
```
Median width = 6 ft
CL offset left: 3 ft → Median edge izquierda
CL offset right: 3 ft → Median edge derecha
```

#### Paso 2: Asignar Elevación

```
Feature Line Properties > Elevation
```

**Opciones:**
1. **Surface elevation + offset:** EG surface + 0.5 ft (curb height)
2. **From profile:** Usar profile de main road + 0.5 ft

#### Paso 3: Crear Superficie de Median

```
Ribbon > Surface > Create Surface
```

**Add breaklines:**
- Median edge izquierda (feature line)
- Median edge derecha (feature line)
- Centerline (feature line a elevación crown)

**Resultado:** Superficie 3D de median elevada.

### 7.2 Painted Median

**Más simple:**

1. No crear superficie física
2. Solo agregar **pavement markings** en plan view
3. Usar `Corridor top links` para definir edge of pavement

**Marking:**
- Double yellow lines (each 4 inches wide)
- Spacing: 4-6 ft entre yellow lines
- Hatching: Diagonal lines @ 45° (optional)

---

## 8. EXERCISE: DISEÑO COMPLETO DE LEFT-TURN BAY

### 8.1 Objetivo del Ejercicio

Diseñar un left-turn bay para:

**Datos:**
- Main Street: 2 lanes, 45 mph design speed
- Left-turn volume: 180 vph (hora pico)
- Semáforo: Red phase = 45 segundos

**Requerimientos:**
- Calcular storage length
- Calcular taper length
- Diseñar median (raised, 6 ft ancho)
- Modelar en Civil 3D

### 8.2 Cálculos

**Storage Length:**
```
N = (180 × 0.90 × 45) / 3,600 = 2.025 vehículos
Ajuste: +2 vehículos (95th percentile)
N_total = 4 vehículos
L_storage = 4 × 25 = 100 ft
```

**Taper Length:**
```
Design speed = 45 mph
Taper ratio = 30:1
W = 12 ft
L_taper = 12 × 30 = 360 ft
```

**Total Length:**
```
L_total = 360 + 100 = 460 ft
```

### 8.3 Civil 3D Implementation

**Paso 1:** Crear offset alignment @ 6 ft izquierda, Sta 20+00 a 24+60

**Paso 2:** Crear assemblies:
- Assembly 1: 2 through lanes (24 ft total)
- Assembly 2: 2 through + 1 left-turn + median (42 ft total)

**Paso 3:** Crear corridor con 3 regiones:
- Region 1: Sta 20+00 a 23+60 (taper)
- Region 2: Sta 23+60 a 24+60 (storage)

**Paso 4:** Aplicar transitions

**Paso 5:** Verificar en 3D

---

## RESUMEN DE LA LECCIÓN

En esta lección aprendiste:

1. **Turn lanes fundamentals:** LTL, RTL, TWLTL, warrants
2. **Storage length calculation:** Método HCM, tablas de referencia
3. **Taper design:** Ratios según velocidad, longitudes AASHTO
4. **Acceleration lanes:** Fórmulas, tablas para on-ramps
5. **Deceleration lanes:** Diseño para off-ramps
6. **Lane balance:** Principios de continuity
7. **Civil 3D corridor modeling:** Regions, assemblies, transitions
8. **Median design:** Raised vs painted

---

## PRÓXIMA LECCIÓN

**Lección 4: Create Intersection Wizard**

Aprenderás a utilizar el asistente automático de Civil 3D para generar intersecciones completas en minutos, incluyendo curb returns, profiles y corridors.

---

## RECURSOS ADICIONALES

- **AASHTO Green Book:** Chapters 9-10 (Intersections, Grade Separations)
- **HCM 7th Edition:** Chapter 31 (Signalized Intersections)
- **MUTCD:** Part 3 (Markings), Part 9 (Traffic Controls for Highway Construction)
- **Civil 3D Help:** Corridor Regions and Assemblies

---

**Palabras:** 4,986
**Tiempo de lectura estimado:** 30-35 minutos
**Tiempo de práctica:** 90 minutos

---

*DISTMAH ATC - Universidad Autodesk*
*Civil 3D 2026 Avanzado - Módulo 2, Lección 3*
