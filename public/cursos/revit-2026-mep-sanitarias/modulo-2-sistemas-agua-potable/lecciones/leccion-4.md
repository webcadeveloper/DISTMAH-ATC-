# Lección 4: Dimensionamiento de Tuberías y Accesorios

## Introducción

El **dimensionamiento correcto de tuberías** es crítico para garantizar presión adecuada en todos los fixtures, evitar ruido por velocidades excesivas, y optimizar costos de materiales. Los códigos IPC/UPC establecen métodos específicos basados en **fixture units**, caudales, y velocidades máximas permitidas.

Esta lección cubre métodos de sizing (fixture units, velocity), cálculo de pérdidas de presión, selección de diámetros de tubería, accesorios (fittings), fenómenos de water hammer, y configuración de pipe types en Revit MEP 2026.

## Métodos de Dimensionamiento

### Método 1: Fixture Units (IPC/UPC)

**Más usado en edificios residenciales y comerciales.**

**Proceso:**

**Paso 1: Sumar Fixture Units**

**IPC Table 604.3 - Water Supply Fixture Units (WSFU):**

| Fixture | WSFU (Cold) | WSFU (Hot) | WSFU (Total) |
|---------|-------------|------------|--------------|
| Water Closet (tanque) | 2.5 | - | 2.5 |
| Water Closet (flushometer) | 5.0 | - | 5.0 |
| Lavatory/Lavabo | 0.5 | 0.5 | 1.0 |
| Shower/Regadera | 1.0 | 1.0 | 2.0 |
| Bathtub/Tina | 1.0 | 1.0 | 2.0 |
| Kitchen Sink/Fregadero | 0.75 | 0.75 | 1.5 |
| Dishwasher/Lavavajillas | 1.0 | 1.0 | 1.5 |
| Washing Machine/Lavadora | 1.0 | 1.0 | 2.0 |
| Hose Bibb/Manguera (1/2") | 2.5 | - | 2.5 |

**Ejemplo - Apartamento típico:**
```
1 × WC tanque = 2.5 WSFU
2 × Lavabos = 2 × 1.0 = 2.0 WSFU
1 × Shower = 2.0 WSFU
1 × Kitchen sink = 1.5 WSFU
1 × Dishwasher = 1.5 WSFU
1 × Washing machine = 2.0 WSFU

Total = 11.5 WSFU
```

**Paso 2: Convertir WSFU a GPM (Caudal)**

**IPC Appendix E - Tabla E103.3(3):**

| Total WSFU | Demand (gpm) |
|------------|--------------|
| 1 | 1.5 |
| 5 | 5.0 |
| 10 | 8.5 |
| 15 | 11.5 |
| 20 | 14.0 |
| 30 | 18.5 |
| 50 | 27.0 |
| 100 | 45.0 |
| 200 | 75.0 |

**Ejemplo:**
```
11.5 WSFU → Demand ≈ 9.5 gpm (interpolación entre 10 y 15)
```

**Paso 3: Seleccionar Diámetro de Tubería**

**IPC Table 604.5 - Water Distribution Pipe Sizing:**

**Para Q = 9.5 gpm, velocidad < 8 ft/s:**

| Pipe Size | Max Flow @ 8 ft/s (gpm) |
|-----------|-------------------------|
| 1/2" | 4.5 |
| 3/4" | 10.0 |
| 1" | 18.0 |
| 1-1/4" | 27.0 |
| 1-1/2" | 39.0 |
| 2" | 67.0 |

**9.5 gpm → Requiere 3/4" mínimo** (10.0 gpm capacity).

### Método 2: Velocity Method (Basado en Velocidad)

**Recomendado para sistemas grandes y diseño detallado.**

**Velocidades permitidas:**

**IPC/UPC límites:**
- **Máximo general:** 8 ft/s (2.4 m/s) - Evitar ruido y erosión
- **Máximo cerca de fixtures:** 5 ft/s (1.5 m/s) - Evitar water hammer
- **Óptimo:** 4-6 ft/s (1.2-1.8 m/s) - Balance entre tamaño y pérdidas

**Fórmula de velocidad:**

```
V = (0.408 × Q) / D²

Donde:
V = Velocidad (ft/s)
Q = Caudal (gpm)
D = Diámetro interno (pulgadas)
```

**Ejemplo - Pipe 3/4" (D = 0.824" interno para Type L copper):**
```
Q = 9.5 gpm

V = (0.408 × 9.5) / (0.824)²
V = 3.876 / 0.679
V = 5.7 ft/s

Velocidad OK (< 8 ft/s)
```

### Método 3: Hunter's Curve (Histórico)

**Método antiguo basado en probabilidad de uso simultáneo.**

**Actualmente reemplazado por tablas IPC/UPC**, pero conceptualmente útil:
- Considera que NO todos los fixtures operan simultáneamente
- Demand factor basado en número de fixtures
- Más preciso para edificios grandes (100+ fixtures)

## Pérdidas de Presión

### Hazen-Williams Equation (Más Usado)

**Calcula pérdidas por fricción en tuberías:**

```
h_f = (10.67 × L × Q^1.85) / (C^1.85 × D^4.87)

Donde:
h_f = Pérdida de presión (ft de columna de agua)
L = Longitud de tubería (ft)
Q = Caudal (gpm)
C = Coeficiente Hazen-Williams
    - Copper (cobre): C = 150
    - PVC: C = 150
    - Steel (acero nuevo): C = 140
    - Steel (acero viejo/oxidado): C = 100-120
D = Diámetro interno (pulgadas)
```

**Convertir h_f (ft) a psi:**
```
ΔP (psi) = h_f × 0.433
```

**Ejemplo:**
```
Pipe: 3/4" Type L copper
L = 100 ft
Q = 9.5 gpm
C = 150 (cobre)
D = 0.824"

h_f = (10.67 × 100 × 9.5^1.85) / (150^1.85 × 0.824^4.87)
h_f = (1,067 × 297.5) / (3,534 × 0.434)
h_f = 317,432 / 1,534
h_f = 207 ft

ΔP = 207 × 0.433 = 89.6 psi

¡INACEPTABLE! Tubería muy pequeña para esta longitud y caudal.
```

**Cambiar a 1" pipe (D = 1.025"):**
```
h_f = (1,067 × 297.5) / (3,534 × 1.097)
h_f = 317,432 / 3,876
h_f = 81.9 ft

ΔP = 81.9 × 0.433 = 35.5 psi

Mejor, pero aún alta pérdida. Considerar 1-1/4" para runs largos.
```

### Equivalent Length Method (Accesorios)

**Fittings (codos, tees, válvulas) causan pérdidas adicionales.**

**Método:** Convertir cada fitting a longitud equivalente de tubería recta.

**Tablas estándar (Equivalent Length en ft):**

| Fitting | 1/2" | 3/4" | 1" | 1-1/4" | 1-1/2" | 2" |
|---------|------|------|-----|--------|--------|-----|
| 90° Elbow | 1.5 | 2.0 | 2.5 | 3.0 | 3.5 | 5.0 |
| 45° Elbow | 0.8 | 1.0 | 1.2 | 1.5 | 1.8 | 2.5 |
| Tee (flow through run) | 0.5 | 0.8 | 1.0 | 1.2 | 1.5 | 2.0 |
| Tee (flow through branch) | 3.0 | 4.0 | 5.0 | 6.0 | 7.0 | 10.0 |
| Gate Valve (full open) | 0.3 | 0.4 | 0.5 | 0.6 | 0.8 | 1.0 |
| Ball Valve (full open) | 0.5 | 0.8 | 1.0 | 1.2 | 1.5 | 2.0 |
| Check Valve | 8.0 | 10.0 | 13.0 | 16.0 | 20.0 | 27.0 |
| Water Meter | 15.0 | 20.0 | 25.0 | 30.0 | 35.0 | 50.0 |

**Ejemplo - Calcular L_equivalent:**

**Run de tubería de 100 ft con:**
- 6 × 90° elbows
- 3 × Tees (branch)
- 1 × Ball valve
- Pipe size: 1"

```
L_physical = 100 ft

L_fittings:
6 × 90° elbows = 6 × 2.5 = 15 ft
3 × Tees = 3 × 5.0 = 15 ft
1 × Ball valve = 1 × 1.0 = 1 ft

L_equivalent = 100 + 15 + 15 + 1 = 131 ft

Usar L_equivalent = 131 ft en cálculo de h_f
```

## Sizing de Tuberías en Revit MEP 2026

### Pipe Types y Configuración

**Paso 1: Duplicate Pipe Type**

1. **Systems** → **Piping** → **Pipe Types**
2. Seleccionar `Domestic Cold Water - Default`
3. **Duplicate**
4. **Name:** `Domestic Cold Water - Copper Type L`

**Paso 2: Configure Pipe Sizes**

1. **Edit Type** → **Routing Preferences**
2. **Pipe Segments:**
   - Agregar sizes disponibles (IPS - Iron Pipe Size):
     - 1/2", 3/4", 1", 1-1/4", 1-1/2", 2", 2-1/2", 3", 4", 6"

3. **Routing Settings:**
   - Material: `Copper`
   - Specification: `Type L` (wall thickness medio)
   - Schedule: `Type L`
   - Insulation: `1/2" Fiberglass` (si aplica)

**Paso 3: Configure Fittings**

**Routing Preferences → Fittings:**
- 90° Elbow: `Copper Wrought Elbow - 90°`
- 45° Elbow: `Copper Wrought Elbow - 45°`
- Tee: `Copper Wrought Tee`
- Coupling: `Copper Coupling`
- Transition: `Copper Reducer`

### Sizing Automático vs Manual

**Sizing Automático (Revit calcula):**

**Configurar:**
1. **Systems** → **Mechanical Settings** → **Piping Settings**
2. **Pipe Sizing:**
   - Method: `Velocity` o `Fixture Units`
   - Max Velocity: `8.0 ft/s` (IPC limit)
   - Design Velocity: `5.0 ft/s` (óptimo)

3. **Fixture Units:**
   - Asignar WSFU a cada plumbing fixture en **Type Properties**
   - Ejemplo: Lavatory = 1.0 WSFU

**Routing automático:**
- Al crear pipe desde fixture → panel/riser
- Revit calcula WSFU acumulados en cada segmento
- Selecciona pipe size según velocidad y tablas

**Sizing Manual (Override):**

1. Seleccionar pipe segment
2. **Properties:**
   - **Size:** Cambiar de `Automatic` a tamaño específico (ej. `3/4"`)
3. **Apply**

**Uso:** Override cuando:
- Verificación ingenieril requiere tamaño específico
- Compliance con códigos locales
- Futuras expansiones anticipadas

## Materiales de Tubería

### Copper (Cobre)

**Tipos:**
- **Type K:** Pared gruesa, alta presión, subterráneo (C = 150)
- **Type L:** Pared media, **más común** para agua potable interior (C = 150)
- **Type M:** Pared delgada, baja presión, drenaje (C = 140)

**Ventajas:**
- Larga vida útil (50+ años)
- Resiste bacterias
- Soporta agua caliente (hasta 200°F)
- Reciclable

**Desventajas:**
- Costo alto
- Requiere soldadura (skilled labor)
- Corrosión en aguas ácidas (pH < 7)

### PEX (Cross-Linked Polyethylene)

**Características:**
- Flexible, fácil instalación
- Resistente a congelamiento (no revienta)
- No corroe
- Bajo costo

**Tipos:**
- **PEX-A:** Más flexible, mejor calidad
- **PEX-B:** Intermedio
- **PEX-C:** Menos flexible

**Limitaciones:**
- No usar en exterior (UV degrada)
- Algunas jurisdicciones no permiten para agua caliente
- No recyclable

### CPVC (Chlorinated Polyvinyl Chloride)

**Ventajas:**
- Bajo costo
- Fácil instalación (solvent welding)
- Resistente a cloro en agua municipal

**Desventajas:**
- Frágil con el tiempo
- Soporta solo hasta 180°F (limitado para agua caliente)

### PVC (Polyvinyl Chloride)

**Uso:** Solo para agua FRÍA (no caliente).

**Schedule 40 vs Schedule 80:**
- **Schedule 40:** Pared estándar, presión hasta 160 psi @ 73°F
- **Schedule 80:** Pared gruesa, presión hasta 220 psi @ 73°F

## Water Hammer y Control

### ¿Qué es Water Hammer?

**Fenómeno:** Golpe de presión cuando válvula cierra rápidamente.

**Causa:**
- Agua en movimiento tiene momentum
- Válvula cierra → Flujo para súbitamente
- Energía cinética → Presión spike (hasta **10× presión normal**)
- Onda de presión viaja por tubería → Ruido fuerte ("hammer")

**Consecuencias:**
- Ruido molesto
- Daño a tuberías y fittings (pueden reventar)
- Fallo de válvulas y fixtures

### Water Hammer Arrestor

**Dispositivo que absorbe el spike de presión.**

**Tipos:**

**1. Air Chamber (Cámara de Aire):**
- Tubería vertical cerrada llena de aire
- Aire comprime y absorbe presión
- **Problema:** Aire se disuelve en agua con el tiempo → Pierde efectividad

**2. Mechanical Arrestor (Piston Type):**
- Cilindro con piston y spring/gas chamber
- Presión comprime piston → Absorbe energía
- **Ventaja:** No pierde efectividad
- **Estándar:** ASSE 1010, PDI-WH 201

**Sizing de Arrestors:**

**PDI-WH 201 tabla:**

| Fixture Units | Arrestor Size |
|---------------|---------------|
| 1-11 | A (small) |
| 12-32 | B (medium) |
| 33-60 | C (large) |
| 61-113 | D (extra large) |

**Ubicación:**
- Cerca de fixtures de cierre rápido (washing machines, dishwashers, solenoid valves)
- Antes de válvulas automáticas
- **NO más de 6 ft** del fixture

### Colocar en Revit

1. **Insert** → **Load Family** → `Water Hammer Arrestor.rfa`
2. **Place** en pipe cerca de washing machine
3. **Properties:**
   - **Size:** `Size B (12-32 WSFU)`
   - **Standard:** `ASSE 1010`

## Accesorios Críticos

### Pressure Reducing Valve (PRV)

**Función:** Reducir presión de agua municipal excesiva.

**IPC 608.2:** Si presión > 80 psi → PRV requerido.

**Ejemplo:**
- Presión municipal = 110 psi
- PRV reduce a 50-60 psi (ajustable)

**Ubicación:** Inmediatamente después de water meter en acometida.

### Backflow Preventer

**Función:** Evitar contaminación de agua potable municipal.

**Tipos:**

**1. Air Gap:**
- Separación física (mínimo 2× diámetro de pipe, min 1")
- Más efectivo, pero requiere espacio

**2. Atmospheric Vacuum Breaker (AVB):**
- Para hose bibbs, lawn irrigation
- No protege contra back-pressure

**3. Pressure Vacuum Breaker (PVB):**
- Para irrigation systems
- Requiere instalación 12" sobre highest downstream outlet

**4. Double Check Valve Assembly (DCVA):**
- Para low hazard applications
- 2 check valves en serie + test cocks

**5. Reduced Pressure Zone (RPZ):**
- **Más efectivo** para high hazard
- Requiere annual testing

**Colocar en Revit:**

1. **Insert** → **Load Family** → `Backflow Preventer - RPZ.rfa`
2. **Place** en main water service entrada
3. Properties: `Size: 2", Type: RPZ, Certified: ASSE 1013`

### Expansion Tank (Tanque de Expansión)

**Para sistemas de agua CALIENTE.**

**Función:** Absorber expansión térmica del agua.

**Agua se expande al calentar:**
- 60°F → 140°F = **2% volumen increase**
- Sistema cerrado (check valve en acometida) → Presión aumenta peligrosamente

**Sizing:**

```
V_expansion = V_system × Expansion factor

V_system = Volumen total de agua caliente (galones)
Expansion factor = 0.02 (para ΔT = 80°F)

Ejemplo:
V_system = 80 gallons (water heater + tuberías)
V_expansion = 80 × 0.02 = 1.6 gallons

Expansion tank capacity: 2 gallons (próximo tamaño)
```

**Ubicación:** En tubería de agua caliente cerca de water heater.

## Ejercicio Aplicado

**Ver:** Ejercicio 4 en `ejercicios.md` - Dimensionar sistema completo de agua potable para edificio residencial (10 apartamentos), calcular WSFU, seleccionar pipe sizes, calcular pérdidas de presión, colocar arrestors y accesorios en Revit.

---

**Próxima Lección (Módulo 3):** Sistemas de Drenaje Sanitario - Waste piping, venting, traps, slopes, y fixture unit method para drainage.
