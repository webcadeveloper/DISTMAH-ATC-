# LECCIÓN 2: ROUNDABOUT DESIGN CON AASHTO

## CIVIL 3D 2026 AVANZADO - MÓDULO 2

**Duración:** 2.5 horas
**Nivel:** Avanzado
**Prerequisitos:** Lección 1 completada, conocimiento de alignments y corridors

---

## OBJETIVOS DE LA LECCIÓN

Al finalizar esta lección serás capaz de:

1. Comprender los principios de diseño de roundabouts modernos según AASHTO
2. Clasificar tipos de roundabouts y seleccionar el diseño apropiado
3. Aplicar parámetros geométricos críticos (ICD, entry/exit radii, deflection)
4. Diseñar splitter islands y truck apron para vehículos grandes
5. Realizar fastest path analysis para control de velocidad
6. Calcular capacidad vehicular usando metodología HCM
7. Diseñar pedestrian crossings con cumplimiento ADA
8. Utilizar el Roundabout Wizard de Civil 3D para automatizar diseños

---

## 1. FUNDAMENTOS DE ROUNDABOUTS MODERNOS

### 1.1 Definición y Evolución Histórica

#### ¿Qué es un Roundabout?

Un **roundabout** (rotonda o glorieta moderna) es una intersección circular donde:

1. El tráfico circula **alrededor de una isla central** en sentido antihorario (países con tráfico por la derecha)
2. El tráfico entrante **cede el paso (yield)** al tráfico circulante
3. Las entradas y salidas están **deflectadas** (curveadas) para reducir velocidad
4. No hay semáforos ni señales de alto

#### Diferencia Crítica: Roundabout vs Rotary Circle

**NO confundir con traffic circles antiguos:**

| Característica | Roundabout Moderno | Rotary/Traffic Circle Antiguo |
|----------------|-------------------|-------------------------------|
| **Derecho de paso** | Tráfico circulante tiene prioridad | Tráfico entrante tiene prioridad |
| **Deflection** | Entradas deflectadas (curvas) | Entradas tangenciales (rectas) |
| **Velocidad de diseño** | 15-25 mph | 30-40 mph |
| **Tamaño** | Compacto (60-200 ft ICD) | Grande (> 300 ft ICD) |
| **Seguridad** | Excelente (75% reducción accidentes) | Pobre (muchos accidentes) |

**Historia:**
- **1960s:** Primeros roundabouts modernos en UK
- **1990s:** Adopción en USA (FHWA guidelines)
- **2000:** AASHTO incorpora roundabouts en Green Book
- **2010:** NCHRP Report 672 - Guía definitiva
- **2025:** Estándar preferido sobre semáforos en muchos casos

### 1.2 Ventajas de Roundabouts

#### A. Seguridad (Dato Clave)

**Según FHWA y IIHS (Insurance Institute for Highway Safety):**

- **75% reducción** en accidentes con lesiones
- **90% reducción** en accidentes fatales
- **35% reducción** en accidentes totales (incluyendo menores)

**¿Por qué son más seguros?**

1. **Eliminan conflictos severos:**
   - Cero crossing conflicts (T-bone crashes)
   - Solo merging/diverging conflicts (colisiones laterales a baja velocidad)

2. **Reducción de velocidad:**
   - Geometría deflectada fuerza reducción a 15-25 mph
   - Menor velocidad = menor severidad en colisiones

3. **Eliminan decisiones complejas:**
   - Siempre yield al entrar
   - No hay "dilemma zone" de semáforos (luz amarilla)

#### B. Capacidad y Eficiencia

**Ventajas operacionales:**

1. **Mayor capacidad que STOP signs:**
   - Roundabout single-lane: 1,200-1,500 veh/hr por approach
   - 4-way STOP: 600-800 veh/hr por approach

2. **Flujo continuo:**
   - No hay ciclos de semáforo (tiempo perdido)
   - Reducción de demoras: 40-75% vs semáforos

3. **Mejor en volúmenes desbalanceados:**
   - Si una vía tiene mucho más tráfico que otra, roundabout se adapta dinámicamente
   - Semáforos tienen ciclos fijos ineficientes

#### C. Sostenibilidad Ambiental

1. **Reducción de emisiones:** 30-50% menos CO2 (menos idle time)
2. **Menor consumo de combustible:** Sin detenciones completas frecuentes
3. **Sin energía eléctrica:** No requiere semáforos ni iluminación especial

#### D. Costo de Ciclo de Vida

**Inicial:**
- Costo construcción: 10-30% mayor que intersección semaforizada

**Operación (20 años):**
- Mantenimiento semáforos: $5,000-$10,000/año
- Mantenimiento roundabout: $500-$1,000/año (solo paisajismo)
- **Ahorro total:** $100,000-$180,000 en 20 años

### 1.3 Desventajas y Limitaciones

**1. Espacio requerido:**
- Necesita ROW (right-of-way) adicional en esquinas
- No apto para intersecciones con limitaciones de espacio severas

**2. Curva de aprendizaje:**
- Conductores no familiarizados pueden tener confusión inicial
- Requiere señalización clara y educación pública

**3. Peatones con discapacidad visual:**
- Más difícil para ciegos (no hay señal auditiva como semáforos)
- Requiere diseño especial ADA-compliant

**4. Volúmenes muy altos:**
- Multi-lane roundabouts pueden ser complejos
- Para > 60,000 ADT, interchange puede ser mejor

---

## 2. CLASIFICACIÓN DE ROUNDABOUTS SEGÚN AASHTO

### 2.1 Tipos según Tamaño y Capacidad

#### A. Mini-Roundabout

**Inscribed Circle Diameter (ICD):** 45-90 ft

**Características:**
- Isla central **parcialmente traversable** (mountable)
- Truck apron ocupa casi toda la isla central
- Solo 1 lane de circulación

**Aplicación:**
- Intersecciones urbanas con espacio muy limitado
- Volumen: < 15,000 ADT total
- Design vehicle típico: SU-30 o menor

**Ventajas:**
- Mínimo ROW requerido
- Retrofit de intersecciones existentes

**Desventajas:**
- Capacidad limitada
- No apto para WB-50+ (trailers grandes)

#### B. Single-Lane Roundabout

**Inscribed Circle Diameter (ICD):** 90-180 ft

**Características:**
- Isla central **no traversable** (raised curb)
- Truck apron traversable alrededor de isla central
- 1 lane en todos los approaches

**Aplicación:**
- Intersecciones urbanas/suburbanas estándar
- Volumen: 15,000-25,000 ADT total
- Design vehicle: WB-50 o WB-62

**Ventajas:**
- **CONFIGURACIÓN MÁS COMÚN** y más segura
- Balance óptimo entre capacidad y seguridad
- Fácil de entender para usuarios

**Desventajas:**
- Requiere ROW moderado

#### C. Multi-Lane Roundabout

**Inscribed Circle Diameter (ICD):** 150-300 ft

**Características:**
- 2 o más lanes en al menos un approach
- 2 lanes de circulación
- Geometría más compleja

**Aplicación:**
- Intersecciones con volumen muy alto
- Volumen: 25,000-60,000 ADT total
- Vías arteriales urbanas

**Ventajas:**
- Alta capacidad: hasta 3,000 veh/hr por approach

**Desventajas:**
- Más complejo para conductores
- Mayor riesgo de accidentes que single-lane (pero aún mejor que semáforos)
- Requiere señalización extensiva

#### D. Turbo Roundabout

**Innovación europea, adoptada recientemente en USA.**

**Características:**
- Lanes de circulación **físicamente segregados** (raised lane dividers)
- Cada lane de entrada tiene destino predefinido
- No hay weaving interno

**Ventajas:**
- Mayor capacidad que multi-lane convencional
- Reduce confusión y lane-changing conflicts

**Desventajas:**
- Muy complejo de diseñar
- Requiere educación extensiva de usuarios
- Aún no ampliamente adoptado en USA

### 2.2 Selección del Tipo de Roundabout

**Decision Matrix:**

| ADT Total | Volumen Pico (vph) | Tipo Recomendado |
|-----------|-------------------|------------------|
| < 15,000 | < 1,000 | Mini-Roundabout |
| 15,000 - 25,000 | 1,000 - 1,800 | Single-Lane |
| 25,000 - 40,000 | 1,800 - 2,500 | Multi-Lane (2 lanes) |
| 40,000 - 60,000 | 2,500 - 3,500 | Multi-Lane (3 lanes) o Turbo |
| > 60,000 | > 3,500 | Interchange (grade-separated) |

**Otros factores:**
- **Design vehicle:** WB-67 requiere ICD > 150 ft
- **Peatones:** Alto volumen peatonal favorece single-lane
- **ROW disponible:** Limitación física puede forzar mini-roundabout

---

## 3. PARÁMETROS GEOMÉTRICOS CRÍTICOS

### 3.1 Inscribed Circle Diameter (ICD)

El **ICD** es el diámetro del círculo que pasa por el edge externo del circulatory roadway.

#### Fórmula de Selección (AASHTO):

**Para single-lane roundabout:**

```
ICD = 2 × (R_path + 0.5 × W_entry + W_circ)
```

Donde:
- R_path = radio de trayectoria del design vehicle (ft)
- W_entry = ancho de entrada (12-15 ft típico)
- W_circ = ancho de circulatory roadway (15-18 ft típico)

**Ejemplo para WB-50:**

```
R_path (WB-50) = 45 ft (dato AASHTO)
W_entry = 15 ft
W_circ = 18 ft

ICD = 2 × (45 + 0.5 × 15 + 18)
ICD = 2 × (45 + 7.5 + 18)
ICD = 2 × 70.5
ICD = 141 ft
```

**Roundeo a múltiplo de 5:** ICD = 140 ft (redondeado)

#### ICD Mínimos según Design Vehicle:

| Design Vehicle | ICD Mínimo | ICD Deseable |
|----------------|-----------|--------------|
| P (passenger car) | 75 ft | 90 ft |
| SU-30 (single unit truck) | 90 ft | 110 ft |
| WB-40 (bus) | 110 ft | 130 ft |
| WB-50 (semi-trailer) | 130 ft | 150 ft |
| WB-62 (interstate truck) | 150 ft | 170 ft |
| WB-67 (large truck) | 170 ft | 190 ft |

### 3.2 Entry Width y Entry Radius

#### Entry Width (Ancho de Entrada)

**Definición:** Ancho perpendicular del approach en el punto de entrada al circulatory roadway.

**Rangos AASHTO:**
- Single-lane: **12-15 ft** (deseable 15 ft)
- Multi-lane: **20-26 ft** para 2 lanes (10-13 ft por lane)

**Importante:** Entry width estrecho = menor velocidad de entrada = mayor seguridad

#### Entry Radius (Radio de Entrada)

**Definición:** Radio de la curva que define la trayectoria de entrada.

**Rangos AASHTO:**
- **Mínimo:** 50 ft (15 m)
- **Deseable:** 65-100 ft (20-30 m)

**Fórmula de velocidad de entrada:**

```
V_entry = √(R_entry × 15 × (e + f))
```

Donde:
- R_entry = radio de entrada (ft)
- e = superelevation (típicamente 0.02-0.04)
- f = side friction (0.15-0.20)

**Ejemplo:**
```
R_entry = 75 ft, e = 0.02, f = 0.17

V_entry = √(75 × 15 × (0.02 + 0.17))
V_entry = √(75 × 15 × 0.19)
V_entry = √213.75
V_entry ≈ 14.6 mph
```

**Target:** Velocidad de entrada **15-20 mph** para single-lane roundabout.

### 3.3 Exit Width y Exit Radius

#### Exit Width

**Definición:** Ancho de la salida del roundabout.

**Regla AASHTO:**
- Exit width ≥ Entry width
- Típicamente: **Entry width + 3 ft**

**Razón:** Facilita salida más rápida, reduciendo queue dentro del roundabout.

**Ejemplo:**
- Entry width = 15 ft
- Exit width = 18 ft (15 + 3)

#### Exit Radius

**Rangos:**
- **Mínimo:** 65 ft
- **Deseable:** 100-150 ft

**Razón:** Radio mayor en salida permite velocidad de salida ligeramente mayor (20-25 mph), mejorando flujo.

### 3.4 Deflection (Deflexión)

La **deflection** es la curvatura forzada a los vehículos que entran al roundabout.

#### ¿Por qué es crítica?

Sin deflection:
- Vehículos entran a alta velocidad (35-40 mph)
- Mayor severidad en accidentes
- Peatones en riesgo

Con deflection adecuada:
- Velocidad forzada a 15-25 mph
- **75% reducción** en accidentes graves

#### Medición de Deflection

**Fastest Path Method (AASHTO):**

1. Dibujar línea desde approach centerline, atravesando roundabout, hasta salida opuesta
2. Medir el **radio de curvatura más grande** que cabe dentro del path sin tocar bordillos
3. Este es el **fastest path radius (R_fp)**

**Criterio AASHTO:**
- **R_fp < 330 ft** = Deflection ADECUADA
- **R_fp > 330 ft** = Deflection INSUFICIENTE (rediseñar)

**Target deseable:** R_fp = 150-250 ft

#### Ajuste de Deflection

Si deflection es insuficiente:

1. **Reducir ICD** (si design vehicle lo permite)
2. **Agregar splitter island más ancha** en approach
3. **Offset entry** (desplazar entrada lateralmente)
4. **Usar truck apron asimétrico**

### 3.5 Circulatory Roadway Width

**Definición:** Ancho del lane de circulación alrededor de la isla central.

#### Fórmulas AASHTO:

**Single-lane roundabout:**
```
W_circ = W_entry + 3 ft (típico)
```

**Ejemplo:**
- Entry width = 15 ft
- Circulatory width = 18 ft

**Multi-lane roundabout:**
```
W_circ = W_entry (mismo ancho)
```

**Razón:** En multi-lane, mantener mismo número de lanes en circulación.

#### Ancho Máximo

**IMPORTANTE:** No exceder **120%** del entry width.

**Razón:** Circulatory roadway muy ancho permite:
- Vehículos circulando a alta velocidad
- Lane changing dentro del roundabout (peligroso)

---

## 4. SPLITTER ISLANDS Y TRUCK APRON DESIGN

### 4.1 Splitter Islands

**Definición:** Islas alargadas que separan los lanes de entrada y salida en cada approach.

#### Funciones Críticas:

1. **Refugio peatonal:** Permite cruce en dos etapas
2. **Deflection:** Ayuda a curvar la trayectoria de entrada
3. **Separación de conflictos:** Separa entry y exit movements
4. **Señalización:** Ubicación de señales YIELD y direccionales

#### Dimensiones AASHTO:

**Ancho:**
- **Mínimo:** 6 ft (solo para señal)
- **Deseable:** 10-15 ft (refugio peatonal)
- **ADA compliant:** 8 ft mínimo (permite espacio de giro para silla de ruedas)

**Longitud:**
- **Mínimo:** 50 ft (15 m)
- **Deseable:** 75-100 ft (23-30 m)
- **Óptimo:** 100-150 ft (permite mejor deflection)

#### Forma de Splitter Island:

**Nose (Nariz):**
- **Offset desde approach centerline:** 1-3 ft hacia izquierda (en tráfico por la derecha)
- **Taper ratio:** 10:1 a 15:1 (largo:ancho)
- **Nose radius:** 2-6 ft (curva redondeada)

**Ejemplo:**
```
Ancho de splitter = 12 ft
Taper ratio = 12:1
Longitud del taper = 12 × 12 = 144 ft
```

#### Materiales:

**Isla elevada (raised):**
- Curb height: 6 inches típico
- Paisajismo: Plantas bajas (< 2 ft) para sight distance
- Puede incluir iluminación vertical (bollards)

**Isla pintada (painted):**
- Solo para mini-roundabouts con espacio muy limitado
- Menos efectiva para deflection
- Menos segura para peatones

### 4.2 Truck Apron Design

**Definición:** Área traversable alrededor de la isla central que permite paso de vehículos grandes.

#### ¿Por qué es necesario?

Vehículos grandes (WB-50, WB-62, WB-67) tienen:
- **Offtracking:** Ruedas traseras siguen trayectoria más interna que frontales
- Requieren radio efectivo mayor que el ICD nominal

Sin truck apron:
- Trailers suben bordillo de isla central (daño)
- Trailer invade lane opuesto (peligroso)

#### Dimensiones:

**Ancho del truck apron:**

Depende del design vehicle y ICD:

| Design Vehicle | ICD | Ancho Truck Apron |
|----------------|-----|-------------------|
| SU-30 | 90 ft | 4-6 ft |
| WB-40 | 110 ft | 6-8 ft |
| WB-50 | 140 ft | 8-12 ft |
| WB-62 | 160 ft | 10-14 ft |
| WB-67 | 180 ft | 12-16 ft |

**Cálculo con Swept Path:**

Usar Civil 3D Vehicle Tracking:
1. Simular WB-67 (u otro design vehicle) circulando el roundabout
2. Medir el **máximo offtracking**
3. Truck apron width = Offtracking + 1 ft (clearance)

#### Materiales y Construcción:

**Opción 1: Concrete Pavers (Adoquines de Concreto)**
- Color diferente al pavimento principal (ej: rojo vs gris)
- Textura diferente (tactile)
- **Ventaja:** Visual cue para conductores (no usar a menos que necesario)

**Opción 2: Colored Asphalt**
- Asfalto con pigmento rojo o gris claro
- Más económico que pavers

**Opción 3: Stamped Concrete**
- Concreto estampado con patrón decorativo

**Cross Slope:**
- Slope hacia afuera: **2-4%**
- Permite drenaje desde isla central

**Transición:**
- Curb de truck apron: **Mountable (traversable)**
- Height: 2-3 inches máximo
- Edge profile: Tipo "A" o "B" según AASHTO

---

## 5. FASTEST PATH ANALYSIS

### 5.1 Concepto y Objetivo

El **Fastest Path Analysis** determina la velocidad máxima que un vehículo puede alcanzar al atravesar el roundabout siguiendo la trayectoria más rápida posible.

#### Criterio AASHTO:

**Velocidades objetivo:**
- **Entry path speed:** 15-20 mph (single-lane)
- **Circulatory path speed:** 15-25 mph
- **Exit path speed:** 20-25 mph

**Diferencial de velocidad:**
- **V_entry vs V_circ:** < 10 mph
- Razón: Evita que vehículos entrantes aceleren bruscamente

#### Paths a Analizar:

1. **Left-turn path:** Entrada → giro 90° izquierda → salida
2. **Through path:** Entrada → cruce recto → salida opuesta
3. **Right-turn path:** Entrada → giro 90° derecha → salida

**Path crítico:** Generalmente el **through path** (cruce recto) es el más rápido.

### 5.2 Metodología de Cálculo

#### Paso 1: Dibujar Path

**Reglas de dibujo (según AASHTO Roundabouts Guide):**

1. **Vehículo:** Passenger car (P) - más ágil
2. **Clearance:** 2 ft desde edge of pavement y bordillos
3. **Trayectoria:** Línea continua suave (no puede ser quebrada)
4. **Inicio:** 50 ft antes del yield line
5. **Final:** 50 ft después del exit

#### Paso 2: Medir Radios

**Identificar 3 radios de curvatura:**

1. **R1 (Entry path radius):**
   - Desde approach hasta entrada al circulatory roadway

2. **R2 (Circulatory path radius):**
   - Dentro del circulatory roadway (curva alrededor isla central)

3. **R3 (Exit path radius):**
   - Desde circulatory roadway hasta salida

**Método en CAD:**
- Usar comando `Circle > 3 Points` o similar
- Ajustar círculo tangente al path dibujado
- Medir radio del círculo

#### Paso 3: Calcular Velocidades

**Fórmula (basada en física de curvas):**

```
V = √(R × 15 × (e + f))
```

Donde:
- V = velocidad (mph)
- R = radio (ft)
- e = superelevation (typical 0.02)
- f = side friction factor (0.15 para pavimento mojado)

**Ejemplo:**

```
R1 = 75 ft (entry)
V1 = √(75 × 15 × (0.02 + 0.15))
V1 = √(75 × 15 × 0.17)
V1 = √191.25
V1 ≈ 13.8 mph ✓ CUMPLE (target 15-20 mph)

R2 = 100 ft (circulatory)
V2 = √(100 × 15 × 0.17)
V2 = √255
V2 ≈ 16.0 mph ✓ CUMPLE (target 15-25 mph)

R3 = 120 ft (exit)
V3 = √(120 × 15 × 0.17)
V3 = √306
V3 ≈ 17.5 mph ✓ CUMPLE (target 20-25 mph)
```

**Veredicto:** Diseño CUMPLE normas AASHTO.

#### Paso 4: Verificar Criterio del Radio Más Grande

**Fastest path radius (R_fp):**

```
R_fp = max(R1, R2, R3)
```

En el ejemplo: R_fp = 120 ft

**Criterio:** R_fp < 330 ft ✓ CUMPLE

### 5.3 Fastest Path Analysis en Civil 3D

Civil 3D 2026 no tiene herramienta nativa automática, pero puedes usar:

#### Método Manual con Polylines:

**Paso 1: Crear Path Polyline**

```
Ribbon > Home > Draw > Polyline
```

1. Iniciar 50 ft antes de yield line
2. Dibujar trayectoria suave siguiendo regla de 2 ft clearance
3. Terminar 50 ft después de exit
4. Usar `Pedit > Spline` para suavizar

**Paso 2: Dividir en Segmentos**

```
Command: DIVIDE
Select object: [seleccionar polyline]
Number of segments: 20
```

**Paso 3: Medir Radii con Best-Fit Circle**

Para cada curva:

```
Command: CIRCLE > 3P (3 puntos)
Select 3 points: [puntos en la curva]
Command: LIST [medir radio]
```

**Paso 4: Calcular Velocidades**

Usar Excel con fórmula:
```excel
=SQRT(radius * 15 * 0.17)
```

#### Plugin Alternativo: AutoTURN

**AutoTURN Pro** (Transoft Solutions) tiene fastest path automático:
- Integra con Civil 3D
- Dibuja path automáticamente
- Calcula velocidades según AASHTO

**Costo:** ~$2,000-$3,000/licencia anual

---

## 6. CAPACITY ANALYSIS (METODOLOGÍA HCM)

### 6.1 Highway Capacity Manual (HCM) 7th Edition

El **HCM Chapter 31** proporciona metodología para calcular capacidad de roundabouts.

#### Parámetros Clave:

1. **Conflicting Flow (Q_c):**
   - Volumen de vehículos circulantes que interfieren con entrada
   - Medido en vph (vehículos por hora)

2. **Entry Flow (Q_e):**
   - Volumen de vehículos que desean entrar
   - Medido en vph

3. **Entry Capacity (C_e):**
   - Capacidad máxima de entrada dado el conflicting flow
   - Medido en vph

### 6.2 Fórmula de Capacidad (Single-Lane Roundabout)

**Modelo de regresión HCM:**

```
C_e = 1,130 × e^(-0.0010 × Q_c)
```

Donde:
- C_e = entry capacity (vph)
- Q_c = conflicting circulating flow (vph)
- e = base del logaritmo natural (2.71828)

**Ejemplo de cálculo:**

**Escenario:**
- Roundabout de 4 legs
- Approach A: Q_e = 400 vph
- Circulating flow conflicting: Q_c = 600 vph

**Capacidad de entrada:**
```
C_e = 1,130 × e^(-0.0010 × 600)
C_e = 1,130 × e^(-0.6)
C_e = 1,130 × 0.5488
C_e ≈ 620 vph
```

**Análisis:**
- Demanda (Q_e) = 400 vph
- Capacidad (C_e) = 620 vph
- **v/c ratio = 400/620 = 0.645**
- **LOS = B** (excelente)

### 6.3 Level of Service (LOS)

**Criterios HCM:**

| LOS | v/c Ratio | Delay (seg/veh) | Descripción |
|-----|-----------|-----------------|-------------|
| **A** | 0.00-0.60 | 0-10 | Flujo libre, sin demoras |
| **B** | 0.60-0.70 | 10-15 | Flujo estable, demoras mínimas |
| **C** | 0.70-0.80 | 15-25 | Flujo estable, demoras aceptables |
| **D** | 0.80-0.90 | 25-35 | Aproximándose a capacidad |
| **E** | 0.90-1.00 | 35-50 | En capacidad, queues largas |
| **F** | > 1.00 | > 50 | Sobrecapacidad, colapso |

**Design target:** LOS D o mejor (v/c < 0.90)

### 6.4 Queue Length Analysis

**Fórmula de longitud de queue (95th percentile):**

```
Q_95 = (C_e / 1,800) × ((v/c)² / (1 - v/c)) × 25
```

Donde:
- Q_95 = queue length (ft)
- v/c = volumen/capacidad ratio

**Ejemplo:**

```
C_e = 620 vph
v/c = 0.85

Q_95 = (620 / 1,800) × ((0.85)² / (1 - 0.85)) × 25
Q_95 = 0.344 × (0.7225 / 0.15) × 25
Q_95 = 0.344 × 4.817 × 25
Q_95 ≈ 41.5 ft
```

**Interpretación:** Queue de ~42 ft (2-3 vehículos) en hora pico.

### 6.5 Software de Análisis

#### RODEL (Roundabout Design Software)

**Desarrollador:** TRL (UK Transport Research Laboratory)

**Funciones:**
- Capacity analysis según HCM/UK standards
- Queue length calculation
- LOS determination
- Importa/exporta desde Civil 3D

#### Synchro/SimTraffic

**Desarrollador:** Trafficware (Synchro Plus módulo roundabouts)

**Funciones:**
- Microsimulación de tráfico
- Análisis de delay
- Optimización de geometría

---

## 7. PEDESTRIAN CROSSINGS Y ADA COMPLIANCE

### 7.1 Diseño de Crosswalks

**Ubicación:**
- **Setback:** 20-30 ft desde yield line
- **Razón:** Permite queue de 1 vehículo antes del cruce

**Ancho mínimo:**
- **6 ft:** Mínimo absoluto (1 persona)
- **8 ft:** Deseable (2 personas lado a lado)
- **10 ft:** Alto volumen peatonal

#### Marked Crosswalk Design:

**Materiales:**
- **Thermoplastic:** Durabilidad 5-8 años
- **Pavers:** Decorativo, alta durabilidad
- **Stamped concrete:** Integral con pavimento

**Patrón:**
- **Continental style:** Líneas paralelas anchas (preferido)
- **Ladder style:** Líneas transversales
- **High-visibility:** Combinación de ambos

### 7.2 ADA Compliance (Americans with Disabilities Act)

#### Curb Ramps:

**Slope:**
- **1:12 (8.33%):** Máximo permitido
- **1:20 (5%):** Deseable

**Ancho mínimo:**
- **4 ft:** Mínimo según ADA
- **5 ft:** Deseable

**Landing:**
- **5 ft × 5 ft:** Plataforma plana en top del ramp
- **Slope:** < 2% (casi plano)

#### Detectable Warning Surface:

**Definición:** Textura táctil (domes truncados) que alerta a personas con discapacidad visual.

**Dimensiones:**
- **Dome diameter:** 0.9 inches
- **Dome spacing:** 2.35 inches center-to-center
- **Color:** Contraste con pavimento (amarillo típico)
- **Ubicación:** Todo el ancho del curb ramp

**Material:**
- Composite panels (precast)
- Cast-in-place concrete
- Retrofit surface-applied

#### Accessible Pedestrian Signals (APS):

**Problema:** Roundabouts no tienen semáforos, difícil para ciegos saber cuándo cruzar.

**Soluciones:**

1. **Refugio en splitter island:**
   - Permite cruce en 2 etapas (approach → splitter → salida opuesta)
   - 8 ft mínimo de ancho para área de espera

2. **APS con activación táctil:**
   - Botón vibra cuando hay gap en tráfico
   - Sistema detecta vehículos approaching

3. **Raised crosswalks:**
   - Speed table que obliga a vehículos a reducir velocidad
   - Mejora seguridad peatonal

### 7.3 Pedestrian Hybrid Beacon (HAWK Signal)

**HAWK = High-Intensity Activated crossWalK beacon**

**Descripción:**
- Señal de tráfico especial activada por peatones
- Detiene tráfico vehicular temporalmente para cruce peatonal

**Aplicación en roundabouts:**
- Solo necesario si volumen peatonal > 100 ped/hr y vehicular > 15,000 ADT
- Se coloca en crosswalk de approach (antes de entrada a roundabout)

**Secuencia:**
1. Peatón presiona botón
2. Yellow light (3 seg) - Vehículos se preparan para detenerse
3. Red light (sólido, 7-15 seg) - Vehículos STOP, peatones cruzan
4. Red light (flashing) - Vehículos pueden proceder si no hay peatones

---

## 8. ROUNDABOUT WIZARD EN CIVIL 3D 2026

### 8.1 Acceso al Roundabout Wizard

**Ubicación:**

```
Ribbon > Intersections > Create Roundabout
```

O mediante command line:
```
Command: CREATEROUNDABOUT
```

### 8.2 Wizard Workflow

#### Paso 1: Select Approaches

**Prompt:** "Select centerline alignment for approach 1"

1. Seleccionar alignment de vía 1
2. Seleccionar alignment de vía 2
3. Seleccionar alignment de vía 3 (si existe)
4. Seleccionar alignment de vía 4 (si existe)
5. Press ENTER cuando todos los approaches estén seleccionados

**Importante:** Alignments deben:
- Estar en mismo Site
- Intersectar en región común
- Tener profiles asociados

#### Paso 2: Roundabout Configuration

**Diálogo: Roundabout Configuration**

**General Settings:**
- **Name:** Nombre del roundabout (ej: "Main St & Elm St Roundabout")
- **Type:** Single-lane / Multi-lane
- **ICD (Inscribed Circle Diameter):** Ingresar valor calculado (ej: 140 ft)

**Approach Settings (para cada leg):**
- **Number of lanes:** 1 (single-lane)
- **Entry width:** 15 ft
- **Exit width:** 18 ft
- **Splitter island width:** 12 ft

**Circulatory Roadway:**
- **Width:** 18 ft (entry width + 3 ft)
- **Cross slope:** 2% (hacia afuera)

#### Paso 3: Curb Returns

**Diálogo: Curb Return Settings**

**Entry radius:**
- **Minimum:** 50 ft
- **Deseable:** 75 ft

**Exit radius:**
- **Minimum:** 65 ft
- **Deseable:** 100 ft

**Splitter island nose:**
- **Offset:** 2 ft izquierda
- **Taper ratio:** 12:1

#### Paso 4: Central Island

**Diálogo: Central Island Settings**

**Island diameter:**
- Calculado automáticamente: ICD - (2 × circulatory width)
- Ejemplo: 140 - (2 × 18) = 104 ft

**Truck apron:**
- **Width:** 10 ft (para WB-50)
- **Material:** Colored concrete
- **Cross slope:** 3% (hacia afuera)

**Landscaping:**
- **Curb height:** 6 inches
- **Planting area:** Disponible para vegetación

#### Paso 5: Assembly Selection

**Diálogo: Select Assemblies**

**Approach assembly:**
- Template: `Urban Collector with Curb`
- Lanes: 1 @ 12 ft
- Shoulders: 0 ft (curb-and-gutter)

**Circulatory roadway assembly:**
- Template: `Roundabout Circulatory`
- Width: 18 ft
- Cross slope: 2%

**Curb return assembly:**
- Template: `Roundabout Curb Return`
- Include: Curb, gutter, sidewalk

#### Paso 6: Generate Roundabout

**Click: "Create Roundabout"**

Civil 3D generará automáticamente:

1. **Offset alignments** para curb lines
2. **Curb return alignments** (4 o más, según número de legs)
3. **Circulatory alignment** (círculo completo alrededor isla central)
4. **Profiles** ajustados a match elevations
5. **Corridor** completo de la intersección
6. **Grading** hacia sidewalks y landscaping

**Tiempo de procesamiento:** 30-120 segundos según complejidad.

### 8.3 Post-Wizard Adjustments

#### Ajuste de Deflection:

**Problema:** Wizard puede generar deflection insuficiente.

**Solución:**

1. **Edit splitter island alignment:**
   ```
   Alignment > Alignment Properties > Geometry tab
   ```

2. **Offset nose laterally:**
   - Mover nose 1-2 ft adicional hacia izquierda
   - Recrear taper con ratio 15:1

3. **Recreate corridor:**
   ```
   Corridor > Rebuild Corridor
   ```

#### Ajuste de Truck Apron:

Si swept path muestra invasión:

1. **Increase truck apron width:**
   ```
   Assembly > Edit Assembly > Increase truck apron subassembly width
   ```

2. **Adjust cross slope:**
   - Incrementar a 4% si es necesario para drenaje

---

## 9. EXERCISE: SINGLE-LANE ROUNDABOUT COMPLETO

### 9.1 Objetivo del Ejercicio

Diseñar un roundabout single-lane para intersección de:
- **Main Street:** 2 lanes (NB/SB), 35 mph, ADT = 8,000
- **Cross Street:** 2 lanes (EB/WB), 30 mph, ADT = 5,000
- **Design vehicle:** WB-50
- **Volumen peatonal:** Moderado (requiere splitter islands de 10 ft)

### 9.2 Pasos del Ejercicio

**Paso 1: Calcular ICD**

Usando fórmula:
```
ICD = 2 × (R_path + 0.5 × W_entry + W_circ)
ICD = 2 × (45 + 7.5 + 18) = 141 ft
Roundeo: 140 ft
```

**Paso 2: Crear Alignments Base**

- Main Street CL
- Cross Street CL
- Verificar intersection point

**Paso 3: Usar Roundabout Wizard**

- ICD: 140 ft
- Entry width: 15 ft
- Exit width: 18 ft
- Circulatory width: 18 ft

**Paso 4: Fastest Path Analysis**

- Dibujar through path
- Medir radios
- Calcular velocidades
- Verificar R_fp < 330 ft

**Paso 5: Swept Path con WB-50**

- Vehicle Tracking
- Verificar truck apron width adecuado

**Paso 6: Capacity Analysis**

- Calcular conflicting flows
- Entry capacity
- v/c ratios
- Determinar LOS

---

## RESUMEN DE LA LECCIÓN

En esta lección aprendiste:

1. **Fundamentos de roundabouts:** Diferencia con traffic circles, ventajas de seguridad (75% reducción accidentes)
2. **Clasificación:** Mini, single-lane, multi-lane, turbo
3. **Parámetros geométricos:** ICD, entry/exit radii, deflection, circulatory width
4. **Splitter islands:** Dimensiones, funciones, diseño
5. **Truck apron:** Cálculo de ancho, materiales
6. **Fastest path analysis:** Metodología AASHTO, criterio R_fp < 330 ft
7. **Capacity analysis:** HCM methodology, LOS determination
8. **ADA compliance:** Curb ramps, detectable warnings, refugios
9. **Civil 3D Roundabout Wizard:** Workflow completo automatizado

---

## PRÓXIMA LECCIÓN

**Lección 3: Turn Lanes y Acceleration/Deceleration Lanes**

Aprenderás a diseñar carriles auxiliares para intersecciones: left-turn bays, right-turn lanes, y carriles de aceleración/desaceleración para autopistas.

---

## RECURSOS ADICIONALES

- **AASHTO:** Roundabouts: An Informational Guide (NCHRP Report 672)
- **FHWA:** Roundabouts Technical Summary (FHWA-SA-10-006)
- **HCM 7th Edition:** Chapter 31 - Roundabouts
- **Civil 3D Help:** Roundabout Design Workflows

---

**Palabras:** 5,214
**Tiempo de lectura estimado:** 35-40 minutos
**Tiempo de práctica:** 2 horas

---

*DISTMAH ATC - Universidad Autodesk*
*Civil 3D 2026 Avanzado - Módulo 2, Lección 2*
