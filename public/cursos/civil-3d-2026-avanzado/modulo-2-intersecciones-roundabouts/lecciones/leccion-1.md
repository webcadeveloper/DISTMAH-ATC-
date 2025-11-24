# LECCIÓN 1: INTERSECTION DESIGN FUNDAMENTALS

## CIVIL 3D 2026 AVANZADO - MÓDULO 2

**Duración:** 2 horas
**Nivel:** Avanzado
**Prerequisitos:** Conocimiento de alignments, profiles y corridors

---

## OBJETIVOS DE LA LECCIÓN

Al finalizar esta lección serás capaz de:

1. Comprender los fundamentos del diseño geométrico de intersecciones según AASHTO
2. Clasificar tipos de intersecciones y seleccionar el diseño apropiado
3. Aplicar normas de design vehicles y análisis de radios de giro
4. Calcular sight distance triangles para intersecciones seguras
5. Identificar conflictos vehiculares y aplicar principios de seguridad vial
6. Configurar Civil 3D para diseño de intersecciones profesionales
7. Preparar alignments y profiles base para intersecciones complejas

---

## 1. FUNDAMENTOS DEL DISEÑO DE INTERSECCIONES

### 1.1 Definición y Propósito

Una **intersección** es el área donde dos o más vías se encuentran o cruzan. El diseño de intersecciones es crítico porque:

- **Seguridad:** Las intersecciones representan el 40-60% de todos los accidentes viales urbanos
- **Capacidad:** El nivel de servicio de una vía está limitado por sus intersecciones
- **Eficiencia:** Un diseño inadecuado genera congestión y demoras
- **Costo:** Intersecciones mal diseñadas requieren modificaciones costosas

### 1.2 Clasificación de Intersecciones según AASHTO

#### A. Intersecciones At-Grade (a nivel)

**Definición:** Las vías se cruzan en el mismo nivel (elevación similar).

**Tipos principales:**

1. **Three-leg intersections (T-intersections):**
   - T básica (90 grados)
   - Y-intersection (ángulos variables)
   - Offset T (desplazada)

2. **Four-leg intersections (cruz):**
   - Perpendicular (90 grados)
   - Skewed (oblicuas, ángulos < 60° o > 120°)
   - Offset (desplazadas)

3. **Multi-leg intersections:**
   - 5 o más aproximaciones
   - Generalmente requieren soluciones especiales (roundabouts, semáforos)

**Ventajas:**
- Costo inicial bajo
- Fácil construcción
- Buena para volúmenes bajos/medios

**Desventajas:**
- Mayor riesgo de accidentes
- Capacidad limitada
- No aptas para volúmenes altos

#### B. Grade-Separated Intersections (desnivel)

**Definición:** Las vías se cruzan en diferentes elevaciones mediante puentes/túneles.

**Tipos principales:**

1. **Overpasses/Underpasses simples:**
   - Una vía cruza sobre/bajo otra sin intercambio directo

2. **Interchanges (intercambiadores):**
   - Diamond interchange (diamante básico)
   - Partial cloverleaf (PARCLO)
   - Full cloverleaf (trébol completo)
   - Directional interchange (direccional)
   - Single-point urban interchange (SPUI)
   - Diverging diamond interchange (DDI)

**Ventajas:**
- Alta capacidad
- Mayor seguridad (menos puntos de conflicto)
- Flujo continuo en vía principal

**Desventajas:**
- Costo elevado
- Mayor ocupación de terreno
- Mantenimiento complejo

#### C. Roundabouts (Glorietas Modernas)

**Definición:** Intersección circular donde el tráfico circula alrededor de una isla central.

**Tipos según AASHTO:**
- Mini-roundabout (< 45 ft ICD)
- Single-lane roundabout (60-90 ft ICD)
- Multi-lane roundabout (> 90 ft ICD)
- Turbo roundabout (carriles segregados)

**Ventajas:**
- Excelente seguridad (75% reducción de accidentes severos según FHWA)
- Buena capacidad
- Reducción de velocidad natural
- Bajo mantenimiento (sin semáforos)

**Desventajas:**
- Requiere espacio
- Curva de aprendizaje para usuarios
- Puede requerir ROW adicional

---

## 2. NORMAS AASHTO PARA DISEÑO GEOMÉTRICO

### 2.1 Green Book - A Policy on Geometric Design of Highways and Streets

El **AASHTO Green Book** es el estándar principal para diseño geométrico vial en Estados Unidos y es adoptado internacionalmente.

#### Elementos Clave del Capítulo 9 (Intersections):

**1. Design Speed (Velocidad de Diseño):**
- Intersección urbana típica: 15-25 mph en curb returns
- Intersección rural: 25-35 mph en curb returns
- Turn lanes: 40-60% de la velocidad de la vía principal

**2. Sight Distance (Distancia de Visibilidad):**
- **Intersection Sight Distance (ISD):** Distancia necesaria para que un vehículo detenido pueda cruzar o girar de manera segura
- **Stopping Sight Distance (SSD):** Distancia para detenerse completamente

**Fórmula básica ISD:**
```
ISD = 1.47 × V × t
```
Donde:
- V = velocidad de diseño de la vía mayor (mph)
- t = tiempo de gap (típicamente 7.5 segundos para cruces)
- 1.47 = factor de conversión mph a ft/s

**Ejemplo:**
Para una vía a 45 mph:
```
ISD = 1.47 × 45 × 7.5 = 496.125 ft ≈ 500 ft
```

**3. Corner Radii (Radios de Esquina):**

Según diseño y tipo de vehículo:

| Uso del Suelo | Radio Mínimo | Radio Deseable |
|---------------|--------------|----------------|
| Residencial bajo volumen | 15 ft | 25 ft |
| Comercial urbano | 25 ft | 30 ft |
| Industrial / Buses | 40 ft | 50 ft |
| Camiones WB-67 | 50 ft | 75 ft |

**4. Intersection Skew Angle (Ángulo de Oblicuidad):**
- **Preferido:** 75-90 grados
- **Aceptable:** 60-75 grados
- **Problemático:** < 60 grados (requiere soluciones especiales)

Ángulos menores a 60° causan:
- Reduced sight distance
- Mayor área de conflicto
- Confusión para conductores

### 2.2 Design Criteria Files en Civil 3D

Civil 3D permite cargar normas AASHTO mediante **Design Criteria Files (.xml)**.

**Ubicación típica:**
```
C:\ProgramData\Autodesk\C3D 2026\enu\Data\Corridor Design Standards\
```

**Parámetros configurables:**
- Minimum/maximum curve radius
- Superelevation rates
- Lane widths
- Shoulder widths
- Cross slope values

**Cómo aplicar:**

1. **Ribbon > Settings tab > Drawing Settings**
2. **Object Layers > Design Criteria**
3. **Load Design Criteria File > Seleccionar AASHTO.xml**

---

## 3. DESIGN VEHICLES Y TURNING RADIUS ANALYSIS

### 3.1 AASHTO Design Vehicles

Los **design vehicles** son vehículos representativos usados para dimensionar intersecciones.

#### Clasificación AASHTO (dimensiones en pies):

| Código | Descripción | Longitud | Ancho | Radio Min. |
|--------|-------------|----------|-------|------------|
| **P** | Passenger Car (auto) | 19 | 7 | 24 ft |
| **SU-30** | Single Unit Truck (camión simple) | 30 | 8 | 42 ft |
| **SU-40** | City Transit Bus | 40 | 8.5 | 42.3 ft |
| **BUS-40** | Conventional School Bus | 40.5 | 8 | 42.4 ft |
| **WB-40** | Intermediate Semi-Trailer | 45.5 | 8 | 45.9 ft |
| **WB-50** | Interstate Semi-Trailer | 55 | 8.5 | 45 ft |
| **WB-62** | Interstate Semi-Trailer | 68.5 | 8.5 | 45 ft |
| **WB-67** | "Double Bottom" Trailer | 73.5 | 8.5 | 45 ft |

**Selección del design vehicle:**

Depende del **uso del suelo** y **tráfico esperado**:

- **Residencial:** Passenger Car (P) + SU-30 (basura)
- **Comercial:** SU-40 (delivery trucks)
- **Industrial:** WB-50 o WB-62
- **Autopista:** WB-67 (tractor-trailers)
- **Buses:** BUS-40 o SU-40

### 3.2 Turning Radius Analysis en Civil 3D

**Swept Path Analysis** verifica que los vehículos puedan girar sin invadir carriles opuestos o aceras.

#### Proceso en Civil 3D 2026:

**Paso 1: Cargar Vehicle Library**

```
Ribbon > Vehicle Tracking > Vehicle Library Manager
```

Vehículos incluidos:
- AASHTO design vehicles (P, SU, WB series)
- International vehicles (ISO standards)
- Custom vehicles (crear propios)

**Paso 2: Crear Swept Path**

```
Ribbon > Vehicle Tracking > Create Swept Path
```

1. Seleccionar vehículo (ej: WB-50)
2. Dibujar trayectoria del vehículo
3. Ajustar steering angle y velocidad
4. Verificar offtracking (arrastre trasero)

**Paso 3: Análisis**

Verificar:
- **Body clearance:** ≥ 1 ft mínimo
- **Tire clearance:** No invade bordillos
- **Offtracking:** Máximo permitido según norma

**Critical Points:**
- Right turns: Mayor offtracking, verificar bordillo interno
- Left turns: Verificar invasión a carriles opuestos
- U-turns: Requiere mayor radio

---

## 4. SIGHT DISTANCE TRIANGLES

### 4.1 Conceptos Fundamentales

**Sight Distance** es la longitud de vía adelante visible para el conductor.

#### Tipos de Sight Distance:

1. **Stopping Sight Distance (SSD):**
   - Distancia para detenerse ante un obstáculo
   - **MÍNIMO OBLIGATORIO**

2. **Intersection Sight Distance (ISD):**
   - Distancia para cruzar/girar de manera segura
   - Usa "sight triangle" approach

3. **Decision Sight Distance (DSD):**
   - Distancia para tomar decisiones complejas
   - Mayor que SSD, usada en áreas urbanas complejas

### 4.2 Sight Triangle Methodology (AASHTO)

El **sight triangle** define el área que debe estar libre de obstrucciones.

#### Componentes:

1. **Leg a (Approach Leg):**
   - Distancia desde la línea de stop hasta el driver's eye
   - Típicamente: **10-15 ft** desde edge of pavement

2. **Leg b (Departure Leg):**
   - Distancia a lo largo de la vía principal
   - **Calculated based on approach speed**

#### Fórmula Leg b:

**Para cruces (through movement):**
```
Leg b = 1.47 × V × t_g
```

**Para giros (turning movement):**
```
Leg b = 1.47 × V × t_t
```

Donde:
- V = velocidad vía principal (mph)
- t_g = gap time para cruzar (7.5-9.5 s)
- t_t = gap time para girar (6.5-8.5 s)

#### Tabla de Referencia AASHTO (Green Book Table 9-7):

| Velocidad Vía Principal | Leg b (Cruzar) | Leg b (Girar Izq) | Leg b (Girar Der) |
|-------------------------|----------------|-------------------|-------------------|
| 25 mph | 280 ft | 240 ft | 215 ft |
| 35 mph | 390 ft | 335 ft | 300 ft |
| 45 mph | 500 ft | 430 ft | 385 ft |
| 55 mph | 610 ft | 525 ft | 470 ft |

### 4.3 Obstrucciones Comunes

Elementos que interfieren con sight distance:

**1. Vegetación:**
- Arbustos > 2.5 ft altura en sight triangle
- Árboles con ramas bajas

**2. Estructuras:**
- Edificios en esquinas
- Muros de privacidad
- Postes de luz/señales

**3. Vehículos estacionados:**
- Parallel parking cerca de intersecciones
- Debe estar prohibido dentro del sight triangle

**4. Topografía:**
- Colinas que obstruyen visión
- Curvas verticales cóncavas

### 4.4 Creación de Sight Triangles en Civil 3D

Civil 3D 2026 no tiene herramienta nativa de sight triangles, pero puedes crearlos con **Feature Lines** y **Transparency Visualization**.

#### Método Manual:

**Paso 1: Definir puntos clave**

```
1. Punto A: Driver's eye position (10-15 ft desde edge)
2. Punto B: Extremo leg b en vía principal
3. Punto C: Edge of pavement en vía secundaria
```

**Paso 2: Crear Feature Line**

```
Ribbon > Home > Create Design > Feature Line
```

1. Conectar puntos A-B-C-A (triángulo cerrado)
2. Asignar elevación: **2.5 ft** (driver's eye height)

**Paso 3: Crear superficie de sight analysis**

```
Ribbon > Surface > Create Surface
```

1. Agregar feature line como breakline
2. Comparar con terreno existente
3. Identificar obstrucciones (elevación > 2.5 ft)

**Paso 4: Visualización**

```
Surface Properties > Analysis > Elevation Analysis
```

1. Rango: 0 - 2.5 ft (verde) = CLEAR
2. Rango: > 2.5 ft (rojo) = OBSTRUCCIÓN

---

## 5. CONFLICTOS VEHICULARES Y SEGURIDAD

### 5.1 Conflict Points Analysis

Los **conflict points** son ubicaciones donde las trayectorias de vehículos se cruzan, divergen o convergen.

#### Tipos de Conflictos:

1. **Crossing Conflicts (Cruzamiento):**
   - Más peligrosos (ángulo recto)
   - Riesgo de accidentes tipo "T-bone"

2. **Merging Conflicts (Convergencia):**
   - Vehículos se unen desde diferentes direcciones
   - Riesgo de colisión lateral

3. **Diverging Conflicts (Divergencia):**
   - Vehículos se separan
   - Menor riesgo relativo

#### Conteo de Conflictos:

**Intersección 4-leg sin control:**
- **32 conflict points:**
  - 16 crossing
  - 8 merging
  - 8 diverging

**Roundabout single-lane:**
- **8 conflict points:**
  - 0 crossing (ELIMINADOS)
  - 4 merging
  - 4 diverging

**Reducción:** 75% menos conflictos = **Mayor seguridad**

### 5.2 Countermeasures (Medidas de Seguridad)

#### A. Geométricas:

1. **Corner sight distance improvement:**
   - Ampliar radios de esquina
   - Eliminar obstrucciones

2. **Channelization:**
   - Splitter islands
   - Median islands
   - Directional islands

3. **Angle optimization:**
   - Realinear vías para ángulos 75-90°

4. **Turn lane addition:**
   - Left-turn bays
   - Right-turn lanes
   - Deceleration lanes

#### B. Control de Tráfico:

1. **STOP signs (alto):**
   - 2-way stop (minor street)
   - 4-way stop (all approaches)

2. **Traffic signals (semáforos):**
   - Warranted según volúmenes (MUTCD)
   - Reducen crossing conflicts

3. **Roundabouts:**
   - Máxima reducción de conflictos severos

---

## 6. CIVIL 3D INTERSECTION OBJECTS

### 6.1 Intersection Object Overview

Civil 3D 2026 ofrece **Intersection Objects** dedicados que combinan:

- Multiple alignments
- Curb return geometry
- Corridor regions
- Grading objects

#### Ventajas del Intersection Object:

1. **Automatización:** Crea geometría completa automáticamente
2. **Actualización dinámica:** Cambios en alignments actualizan intersección
3. **Assemblies dedicados:** Templates específicos para intersecciones
4. **Quantity takeoff:** Calcula materiales automáticamente

### 6.2 Intersection Assemblies

Los **assemblies para intersecciones** tienen características especiales:

#### Componentes Típicos:

1. **Main Lane Assembly:**
   - Carril principal de aproximación
   - Include curb, gutter, sidewalk

2. **Curb Return Assembly:**
   - Geometría de la esquina
   - Radius variable
   - Transition entre vías

3. **Turn Lane Assembly:**
   - Left-turn bay
   - Right-turn lane
   - Deceleration zones

#### Assembly Composer:

```
Ribbon > Home > Palettes > Assembly Composer
```

**Funciones:**
- Arrastrar/soltar subassemblies
- Configurar parameters
- Preview 3D en tiempo real

**Subassemblies clave para intersecciones:**
- `LinkWidthAndSlope` - Pavimento variable
- `UrbanCurbGutterGeneral` - Bordillo/cuneta
- `UrbanSidewalk` - Acera
- `TurnLane` - Carril de giro

---

## 7. PREPARACIÓN DE ALIGNMENTS Y PROFILES

### 7.1 Intersection Design Workflow

**Workflow general en Civil 3D:**

```
1. Crear alignments principales (vías que se cruzan)
   ↓
2. Crear profiles para cada alignment
   ↓
3. Definir punto de intersección (PI)
   ↓
4. Crear curb return alignments
   ↓
5. Crear assemblies para intersección
   ↓
6. Generar corridor de intersección
   ↓
7. Grading y drenaje
   ↓
8. Quantity takeoff y plan production
```

### 7.2 Creación de Alignments Base

#### Paso 1: Alignment de Vía Principal

```
Ribbon > Home > Create Design > Alignment > Create Alignment from Objects
```

**Configuración:**
- Name: `Main Street CL`
- Type: `Centerline`
- Site: `Intersection Site 01`
- Alignment style: `Major Road`

**Geometría:**
- Tangents rectas de aproximación
- PI en centro de intersección
- Mínimo 500 ft de aproximación antes del PI

#### Paso 2: Alignment de Vía Secundaria

```
Ribbon > Home > Create Design > Alignment > Create Alignment from Objects
```

**Configuración:**
- Name: `Cross Street CL`
- Type: `Centerline`
- Site: `Intersection Site 01` (MISMO SITE)
- Alignment style: `Minor Road`

**Importante:** Ambos alignments deben estar en el **mismo Site** para crear intersección.

### 7.3 Creación de Profiles

#### Profile de Vía Principal:

```
Ribbon > Profile > Create Surface Profile
```

1. Select alignment: `Main Street CL`
2. Select surface: `EG (Existing Ground)`
3. Create profile view
4. Design vertical alignment:
   - Grade: 0.5% - 6% según norma
   - K-values según design speed
   - Evitar dips en intersección

**Best Practice:**
- Mantener **grade < 2%** en zona de intersección (± 100 ft del PI)
- Facilita drenaje y seguridad

#### Profile de Vía Secundaria:

Similar proceso, pero:
- **Ajustar elevación** para match con vía principal en el PI
- Usar `Profile Grid View` para verificar match exacto

### 7.4 Intersection Point (PI) Definition

El **punto de intersección** debe estar claramente definido:

#### Método 1: Station Equation

```
Alignment Properties > Stations > Add Station Equation
```

Define station específica como "Intersection PI"

#### Método 2: COGO Point

```
Ribbon > Home > Create Ground Data > COGO Points > Create Point
```

1. Colocar COGO point en PI
2. Label: `INTERSECTION PI`
3. Description: `Main St & Cross St`

**Coordinates:** Anotar Northing/Easting exactas para referencia.

---

## 8. CORNER RADIUS DESIGN

### 8.1 Métodos de Diseño de Esquinas

#### A. Simple Curve (Curva Simple):

**Ventajas:**
- Fácil construcción
- Bajo costo

**Desventajas:**
- No optimizado para vehículos grandes
- Radio constante puede ser ineficiente

#### B. Three-Centered Curve (Curva de 3 Centros):

Combinación de 3 radios:
- R1: Radio entrada (menor)
- R2: Radio central (mayor)
- R3: Radio salida (menor)

**Ventajas:**
- Optimiza trayectoria vehicular
- Reduce ROW necesario

**Desventajas:**
- Construcción más compleja
- Cálculo manual complicado (Civil 3D facilita esto)

#### C. Taper Design (Diseño Ahusado):

Transición recta + curva para turn lanes.

### 8.2 Cálculo de Radio Mínimo

**Fórmula AASHTO para radio mínimo:**

```
R_min = V² / (15 × (e + f))
```

Donde:
- V = design speed (mph)
- e = superelevation rate (decimal, ej: 0.04 = 4%)
- f = side friction factor (tabla AASHTO, ej: 0.15)

**Ejemplo:**
Para V = 15 mph, e = 0.02, f = 0.28:
```
R_min = 15² / (15 × (0.02 + 0.28))
R_min = 225 / 4.5
R_min = 50 ft
```

**Nota:** En intersecciones urbanas, típicamente e ≈ 0 (sin peralte), por lo que R depende principalmente de f.

### 8.3 Creación de Curb Returns en Civil 3D

#### Método Manual con Alignments:

**Paso 1: Crear alignment de curb return**

```
Ribbon > Alignment > Create Alignment > Alignment Creation Tools
```

1. Start point: Final de sidewalk vía 1
2. End point: Inicio de sidewalk vía 2
3. Insert fillet: Radio calculado (ej: 25 ft)

**Paso 2: Offset alignments**

```
Alignment > Create Offset Alignment
```

- Offset distance: Ancho de bordillo (típicamente 0.5 ft)
- Side: Ambos lados

**Paso 3: Crear assembly de curb return**

```
Assembly Composer > Curb Return Template
```

Incluye:
- Curb and gutter
- Sidewalk
- Planting strip (si aplica)

---

## 9. EXERCISE: DISEÑO DE INTERSECCIÓN BÁSICA

### 9.1 Objetivo del Ejercicio

Diseñar una intersección T básica con:
- Main Street: 2 lanes, 12 ft cada uno
- Side Street: 1 lane, 12 ft
- Design vehicle: SU-30 (camión basura)
- Design speed: 35 mph (main), 25 mph (side)

### 9.2 Pasos del Ejercicio

**Paso 1:** Crear alignments de ambas vías
**Paso 2:** Calcular sight distance requerida
**Paso 3:** Verificar swept path para SU-30
**Paso 4:** Diseñar corner radius (mínimo 25 ft)
**Paso 5:** Crear curb return alignment
**Paso 6:** Generar corridor básico

---

## RESUMEN DE LA LECCIÓN

En esta lección aprendiste:

1. **Clasificación de intersecciones:** At-grade, grade-separated, roundabouts
2. **Normas AASHTO:** Green Book, design criteria files
3. **Design vehicles:** Selección y turning radius analysis
4. **Sight distance:** ISD calculation, sight triangles
5. **Análisis de conflictos:** 32 vs 8 conflict points
6. **Civil 3D objects:** Intersection assemblies y workflows
7. **Corner radius design:** Cálculos y creación de curb returns

---

## PRÓXIMA LECCIÓN

**Lección 2: Roundabout Design con AASHTO**

Aprenderás a diseñar roundabouts modernos (glorietas) siguiendo las mejores prácticas internacionales, incluyendo análisis de capacidad y safety performance.

---

## RECURSOS ADICIONALES

- **AASHTO Green Book Chapter 9:** Intersections (PDF en biblioteca del curso)
- **Civil 3D Help:** Intersection Design Workflows
- **FHWA:** Intersection Safety Analysis Tools

---

**Palabras:** 3,847
**Tiempo de lectura estimado:** 25-30 minutos
**Tiempo de práctica:** 90 minutos

---

*DISTMAH ATC - Universidad Autodesk*
*Civil 3D 2026 Avanzado - Módulo 2, Lección 1*
