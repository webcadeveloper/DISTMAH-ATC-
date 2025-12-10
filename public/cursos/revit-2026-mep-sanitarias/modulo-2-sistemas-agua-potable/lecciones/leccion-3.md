# Lección 3: Bombas y Sistemas de Presión Constante

## Introducción

Cuando la **presión municipal** es insuficiente o el edificio supera cierta altura, se requieren **sistemas de bombeo** para garantizar presión adecuada en todos los fixtures. Los sistemas de presión constante (booster systems) mantienen presión uniforme en todo el edificio usando bombas de velocidad variable (VFD), tanques hidropneumáticos y controles automáticos.

Esta lección cubre tipos de bombas de agua, selección y dimensionamiento, sistemas booster con múltiples bombas, modelado en Revit MEP 2026, cálculos de presión, y mejores prácticas según códigos IPC/UPC.

## Presión de Agua - Conceptos Fundamentales

### Presión Mínima Requerida

**Códigos IPC/UPC especifican:**

**Fixture común (lavabo, WC):**
- Presión mínima: **8 psi** (55 kPa) en fixture más lejano
- Presión óptima: **15-20 psi** (103-138 kPa)

**Fixtures especiales:**
- Flushometer (WC presión): **15-25 psi** (103-172 kPa)
- Shower/regadera: **12-15 psi** (83-103 kPa)
- Dishwasher/lavavajillas: **15-20 psi** (103-138 kPa)

**Presión máxima:**
- Límite: **80 psi** (552 kPa) - IPC 608.2
- Encima de 80 psi → Requiere **pressure reducing valve (PRV)**

### Pérdida de Presión por Altura

**Cada metro de elevación reduce presión:**

```
ΔP_elevation = 0.098 kPa/m = 0.433 psi/ft

Ejemplo - Edificio 30m altura:
ΔP = 30m × 0.098 kPa/m = 2.94 kPa = 0.43 bar = 6.2 psi
```

**Si presión municipal = 40 psi:**
- Piso 1 (ground): 40 psi
- Piso 10 (30m): 40 - 6.2 = **33.8 psi** (aceptable)
- Piso 20 (60m): 40 - 12.4 = **27.6 psi** (marginal)
- Piso 30 (90m): 40 - 18.6 = **21.4 psi** (requiere booster)

**Regla general:**
- Edificios < 30m (10 pisos): Presión municipal suficiente
- Edificios > 30m: **Booster system requerido**

### Pérdidas por Fricción

**Pérdidas en tuberías y accesorios:**

**Hazen-Williams formula:**

```
h_f = (10.67 × L × Q^1.85) / (C^1.85 × D^4.87)

Donde:
h_f = Pérdida de presión (ft)
L = Longitud de tubería (ft)
Q = Caudal (gpm)
C = Coeficiente Hazen-Williams (150 para cobre, 130 para acero)
D = Diámetro interno (pulgadas)
```

**Pérdidas típicas (100 ft de tubería, Q=20 gpm):**
- 1/2" pipe: 15 psi
- 3/4" pipe: 4.5 psi
- 1" pipe: 1.2 psi
- 1-1/4" pipe: 0.4 psi

**Accesorios (equivalent lengths):**
- 90° elbow: 2-3 ft
- Tee branch: 6 ft
- Gate valve: 0.5 ft
- Check valve: 10-15 ft

## Tipos de Bombas de Agua

### 1. Centrifugal Pumps (Centrífugas)

**Más comunes en sistemas de agua potable.**

**Características:**
- Impeller rotativo crea presión por fuerza centrífuga
- Flow continuo
- Eficiencia 60-85%
- Bajo mantenimiento

**Tipos:**
- **End suction:** Succión en un extremo, descarga radial
- **In-line (vertical):** Succión y descarga alineadas verticalmente (ahorra espacio)
- **Horizontal split case:** Alta capacidad, fácil mantenimiento

**Curva de bomba:**
```
Head (ft) vs Flow (gpm)
100 ft ┤      ╲
       │       ╲
       │        ╲
 50 ft ┤         ╲___
       │             ╲___
       └─────────────────
       0    50   100  150 gpm
```

**Operación:**
- Flow alto → Head bajo
- Flow bajo → Head alto
- Best efficiency point (BEP): 60-80 gpm en ejemplo

### 2. Positive Displacement Pumps (Desplazamiento Positivo)

**Raramente usadas en agua potable (más en procesos industriales).**

**Tipos:**
- Rotary pumps (gear, screw)
- Reciprocating pumps (piston)

**Características:**
- Flow constante independiente de presión
- Alta presión posible
- Caudales bajos

### 3. Jet Pumps (Bombas de Chorro)

**Para pozos profundos (well water).**

**Componentes:**
- Bomba centrífuga en superficie
- Jet venturi en pozo
- Recircula parte del agua para crear succión

**Límite:** Pozos hasta 80 ft profundidad.

## Sistemas Booster (Presión Constante)

### Componentes del Sistema

**Sistema booster típico incluye:**

1. **Bombas (2-4 unidades):** Redundancia + capacidad variable
2. **VFD (Variable Frequency Drive):** Control de velocidad para presión constante
3. **Pressure transducer (sensor):** Monitorea presión en sistema
4. **Hydropneumatic tank (optional):** Reduce ciclos de encendido/apagado
5. **Control panel:** Lógica de control, alternación de bombas
6. **Isolation valves:** Permitir mantenimiento sin parar sistema
7. **Check valves:** Evitar backflow

![Booster System Diagram](../imagenes/mod2-booster-system.png)

### Configuración Multi-Bomba

**Ejemplo - 3 bombas de 50 gpm cada una:**

**Demanda baja (0-50 gpm):**
- 1 bomba activa, VFD reduce velocidad (30-100%)

**Demanda media (50-100 gpm):**
- 2 bombas activas (1 a 100%, 2 con VFD)

**Demanda alta (100-150 gpm):**
- 3 bombas activas (2 a 100%, 3 con VFD)

**Ventajas:**
- Eficiencia energética (VFD ajusta a demanda real)
- Redundancia (falla de una bomba → sistema continúa)
- Menos desgaste (alternación automática)

### Control de Presión Constante

**Setpoint típico: 50 psi en discharge de booster**

**Lógica de control:**

```
If P_actual < P_setpoint - 5 psi:
    Increase pump speed or start additional pump

If P_actual > P_setpoint + 5 psi:
    Decrease pump speed or stop pump

Deadband: ±5 psi (evita ciclos rápidos)
```

**Presión en diferentes pisos:**
- Piso 1: 50 psi (setpoint)
- Piso 10 (30m): 50 - 6.2 = **43.8 psi** (suficiente)
- Piso 20 (60m): 50 - 12.4 = **37.6 psi** (suficiente)

## Selección y Dimensionamiento de Bombas

### Paso 1: Calcular Caudal Requerido (Q)

**Usando fixture units method (IPC Table 604.3):**

```
Total fixture units = 150 FU (edificio residencial 50 apartamentos)

IPC Tabla E103.3 (3):
Q_demand = 150 gpm (para 150 FU)

Q_design = Q_demand × Safety factor
Q_design = 150 gpm × 1.2 = 180 gpm
```

**Configuración:** 3 bombas × 60 gpm cada una = 180 gpm total.

### Paso 2: Calcular Total Dynamic Head (TDH)

**TDH = Altura estática + Pérdidas por fricción + Presión residual requerida**

**Ejemplo - Edificio 20 pisos (60m):**

```
1. Altura estática (H_static):
   H_static = 60m = 197 ft

2. Pérdidas por fricción (h_f):
   Pipe: 2" copper, 200 ft equivalent length
   Q = 180 gpm
   h_f ≈ 15 ft (de tablas Hazen-Williams)

3. Presión residual requerida:
   P_residual = 20 psi = 46 ft

TDH = 197 + 15 + 46 = 258 ft
```

**Bomba requerida:**
- Flow: 180 gpm
- Head: 258 ft
- Power: ~15 HP (estimado)

### Paso 3: Seleccionar Bomba

**Consultar curvas de fabricantes (ej. Grundfos, Armstrong, Bell & Gossett).**

**Ejemplo - Grundfos CR 10-6:**
- Max flow: 80 gpm
- Max head: 280 ft @ 60 gpm
- BEP: 60 gpm @ 260 ft (eficiencia 72%)
- Motor: 5 HP

**Configuración:** 3 × Grundfos CR 10-6 = 180 gpm total.

### Paso 4: Verificar NPSH

**NPSH (Net Positive Suction Head) - Evitar cavitación.**

**NPSH Available (NPSHA) debe ser > NPSH Required (NPSHR).**

**NPSHA calculation:**

```
NPSHA = P_atmospheric + P_static - P_vapor - h_f_suction

Donde:
P_atmospheric = 34 ft (presión atmosférica al nivel del mar)
P_static = Altura de agua sobre succión (positivo si tanque arriba de bomba)
P_vapor = 0.8 ft (presión de vapor de agua a 70°F)
h_f_suction = Pérdidas en tubería de succión (minimizar)
```

**Ejemplo:**
```
NPSHA = 34 + 5 - 0.8 - 2 = 36.2 ft

NPSHR (de curva de bomba) = 10 ft

NPSHA > NPSHR → OK (no cavitación)
```

## Modelado en Revit MEP 2026

### Colocar Mechanical Equipment (Bomba)

**Paso 1: Cargar Family**

1. **Insert** → **Load Family**
2. Navegar a: `Mechanical Equipment\Pumps\`
3. Cargar: `In-Line Pump.rfa` o `Booster Pump.rfa`
4. **Open**

**Paso 2: Colocar en Modelo**

1. **Systems** → **Mechanical Equipment**
2. **Type Selector:** `Booster Pump - 60 gpm @ 260 ft`
3. **Properties:**
   - Flow: `60 gpm` (cada bomba)
   - Head: `260 ft`
   - Power: `5 HP`
   - Voltage: `208V - 3 Phase`
4. Click en plano para colocar (ubicación: mechanical room, Level 0)

**Paso 3: Duplicar para Sistema Multi-Bomba**

1. Seleccionar bomba
2. **Array** (AR) → Linear, 3 unidades, spacing 3 ft
3. Resultado: 3 bombas paralelas

### Conectar a Sistema de Tuberías

**Paso 4: Routing de Pipes**

**Suction side (desde tanque de almacenamiento):**

1. **Systems** → **Pipe**
2. **Type:** `Domestic Cold Water - 3"`
3. Conectar desde **Storage Tank** outlet → **Bomba 1 inlet**
4. Repetir para Bomba 2, Bomba 3 (manifold paralelo)

**Discharge side (hacia edificio):**

1. **Pipe** type: `Domestic Cold Water - 2"`
2. Conectar **Bomba 1 outlet** → **Common discharge manifold**
3. Repetir para todas las bombas
4. **Discharge manifold** → **Main riser** vertical (2" pipe subiendo por edificio)

**Check valves:**

1. **Insert** → **Load Family** → `Check Valve.rfa`
2. Colocar check valve en discharge de cada bomba (evitar backflow)

![Booster Pumps en Revit](../imagenes/mod2-revit-booster-pumps.png)

### Revit 2026: Enhanced Equipment Properties

**Nuevos parámetros disponibles:**

1. Seleccionar bomba
2. **Properties:**
   - **Manufacturer:** `Grundfos`
   - **Model:** `CR 10-6`
   - **Type Mark:** `P-1, P-2, P-3`
   - **Part Type:** `Booster Pump` (nuevo en 2026)
   - **Efficiency:** `72%`
   - **Service:** `Domestic Water` (nuevo en 2026)
   - **Comments:** `VFD controlled, lead/lag rotation`

**Schedules automáticamente reflejan estos datos.**

## Tanques Hidropneumáticos (Hydropneumatic Tanks)

### Función

**Reducir ciclos de encendido/apagado de bombas.**

**Sin tanque:**
- Demanda pequeña (1 grifo abierto) → Bomba enciende
- Grifo cierra → Bomba apaga
- **Ciclos excesivos → Desgaste**

**Con tanque:**
- Tanque pre-cargado con aire comprimido (30-50 psi)
- Bomba llena tanque, luego para
- Demanda pequeña → Tanque suple agua sin arrancar bomba
- Bomba arranca solo cuando presión en tanque baja a setpoint bajo

### Dimensionamiento

**Fórmula básica:**

```
V_tank = (Q × t × P_max × P_min) / (P_max - P_min)

Donde:
V_tank = Volumen útil de agua (galones)
Q = Caudal de bomba (gpm)
t = Tiempo mínimo entre arranques (minutos) - típicamente 1-2 min
P_max = Presión máxima en tanque (psi)
P_min = Presión mínima en tanque (psi)
```

**Ejemplo:**
```
Q = 60 gpm
t = 1.5 min
P_max = 60 psi
P_min = 40 psi

V_tank = (60 × 1.5 × 60 × 40) / (60 - 40)
V_tank = 216,000 / 20 = 10,800 galones

Volumen real de tanque (con aire comprimido):
V_real = V_tank / Drawdown ratio (típicamente 0.33)
V_real = 10,800 / 0.33 = 32,727 galones

Tanque comercial: 35,000 galones (próximo tamaño estándar)
```

**Para sistemas residenciales pequeños:**
- Tanque típico: **20-80 galones**
- Pre-carga de aire: 2 psi menos que presión de arranque de bomba

### Colocar en Revit

1. **Insert** → **Load Family** → `Pressure Tank.rfa`
2. **Place** en mechanical room cercano a bombas
3. **Properties:**
   - **Volume:** `80 gallons`
   - **Max Pressure:** `60 psi`
   - **Pre-charge:** `38 psi`
4. Conectar con pipe entre discharge manifold de bombas y main riser

## Cálculos de Potencia y Energía

### Potencia Requerida (Brake Horsepower)

**Fórmula:**

```
BHP = (Q × TDH × SG) / (3,960 × Efficiency)

Donde:
BHP = Brake Horsepower
Q = Caudal (gpm)
TDH = Total Dynamic Head (ft)
SG = Specific Gravity (1.0 para agua)
Efficiency = Eficiencia de bomba (0.60 - 0.85)
```

**Ejemplo:**
```
Q = 60 gpm
TDH = 260 ft
Efficiency = 0.72

BHP = (60 × 260 × 1.0) / (3,960 × 0.72)
BHP = 15,600 / 2,851 = 5.47 HP

Motor seleccionado: 7.5 HP (próximo tamaño estándar, permite safety margin)
```

### Consumo Energético

**Potencia eléctrica:**

```
kW = (BHP × 0.746) / Motor efficiency

Motor efficiency típica: 0.90 (motores premium)

kW = (5.47 × 0.746) / 0.90 = 4.53 kW
```

**Costo anual (operación continua):**
```
Horas/año = 8,760 (24/7)
Costo electricidad = $0.12/kWh

Costo anual = 4.53 kW × 8,760 h × $0.12/kWh = $4,761

Sistema con 3 bombas (alternadas, operación típica 50% tiempo):
Costo anual = $4,761 × 1.5 = $7,142
```

**Beneficio de VFD:**
- Sin VFD (on/off control): 100% potencia cuando opera
- Con VFD (50% demanda): 50% velocidad → **12.5% potencia** (cube law)
- **Ahorro energético: 50-70%**

## Mejores Prácticas

### 1. Redundancia

**Siempre instalar N+1 bombas:**
- Demanda requiere 2 bombas → Instalar 3
- Una bomba en mantenimiento → Sistema continúa funcionando

### 2. Isolation Valves

**Gate valves antes y después de cada bomba:**
- Permite mantenimiento sin drenar sistema completo
- Facilita reemplazo de bomba

### 3. Strainer en Suction

**Filtro/strainer protege impeller:**
- Mesh 20-40 (evita partículas)
- **Ubicación:** Inmediatamente antes de succión de bomba
- Limpieza regular (cada 6 meses)

### 4. Vibration Isolation

**Flexible connectors en suction y discharge:**
- Reducen transmisión de vibración a tuberías
- Aumentan vida útil de bomba y tuberías
- **Material:** EPDM rubber, acero inoxidable

### 5. Backflow Prevention

**Check valve en discharge de cada bomba:**
- Evita reversión de flujo cuando bomba para
- Protege bomba de daños

### 6. Pressure Relief Valve

**En discharge manifold:**
- Protege contra sobrepresión si todas las válvulas cierran
- Setpoint: 10% encima de presión máxima de operación

## Códigos y Normas

**IPC (International Plumbing Code):**
- Section 608.2: Presión máxima 80 psi
- Section 608.3: Backflow prevention requerido

**ASME (American Society of Mechanical Engineers):**
- Certificación de pressure vessels (tanques hidropneumáticos)

**UL (Underwriters Laboratories):**
- UL 778: Motor-Operated Water Pumps

**NSF/ANSI 61:**
- Materiales en contacto con agua potable deben ser NSF certified

## Ejercicio Aplicado

**Ver:** Ejercicio 3 en `ejercicios.md` - Diseñar sistema booster completo con 3 bombas, tanque hidropneumático, calcular TDH y potencia, modelar en Revit con routing completo.

---

**Próxima Lección:** Dimensionamiento de Tuberías y Accesorios - Métodos de sizing, pérdidas de presión, velocidades permitidas.
