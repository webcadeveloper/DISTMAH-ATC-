# Lección 2: Sistemas de Agua Caliente y Recirculación

## Introducción

Los **sistemas de agua caliente** proveen agua a temperatura controlada para uso sanitario (duchas, lavabos, cocinas). Los sistemas de **recirculación** mantienen agua caliente disponible instantáneamente, reduciendo desperdicio de agua y mejorando confort. En Revit MEP 2026, el modelado de estos sistemas incluye calentadores, bombas de recirculación, tuberías de supply y return, y válvulas de control.

Esta lección cubre diseño completo de sistemas de agua caliente, dimensionamiento de calentadores, sistemas de recirculación, aislamiento térmico, cálculos de demanda según fixture units, y mejores prácticas de eficiencia energética.

## Tipos de Sistemas de Agua Caliente

### 1. Sistema Centralizado

**Configuración:**
- **Un calentador** principal (tank o tankless)
- Distribuye agua caliente a todo el edificio
- Tuberías de supply + return (recirculación)

**Uso:** Edificios medianos/grandes (hoteles, hospitales, multi-familiar)

**Ventajas:**
- Eficiencia energética centralizada
- Mantenimiento simplificado
- Control centralizado de temperatura

**Desventajas:**
- Pérdidas térmicas en distribución larga
- Requiere bomba de recirculación
- Tiempo de espera en puntos lejanos (sin recirculación)

### 2. Sistema Descentralizado

**Configuración:**
- **Múltiples calentadores** locales (point-of-use)
- Cerca de fixtures que sirven
- Sin recirculación (no necesaria)

**Uso:** Edificios pequeños, apartamentos individuales

**Ventajas:**
- Agua caliente instantánea (distancias cortas)
- Sin pérdidas térmicas largas
- No requiere bomba de recirculación

**Desventajas:**
- Múltiples equipos (más mantenimiento)
- Menos eficiencia global
- Espacio requerido por equipo

### 3. Sistema Híbrido

**Configuración:**
- Calentador central + calentadores point-of-use en zonas lejanas
- Combina ventajas de ambos

## Calentadores de Agua

### Tank Water Heater (Calentador de Acumulación)

**Características:**
- Tanque de almacenamiento (150-500 litros residencial, 500-5000 L comercial)
- Mantiene agua caliente constantemente
- Recovery rate (tasa de recuperación): 40-100 L/hora

**Combustible:**
- Eléctrico: 3-6 kW (residencial), 12-36 kW (comercial)
- Gas natural/LP: 30,000-75,000 BTU/h
- Bomba de calor: COP 2.5-3.5 (más eficiente)

**Dimensionamiento:**

**Fórmula básica:**
```
Capacidad (L) = Demanda pico (L/min) × Duración pico (min) × Factor de seguridad
```

**Ejemplo - Hotel 20 habitaciones:**
```
Demanda pico: 10 habitaciones simultáneas × 15 L/min (ducha) = 150 L/min
Duración: 10 minutos (ducha típica)
Capacidad = 150 × 10 × 1.25 = 1,875 L

Selección: Tank 2,000 L con recovery 200 L/h
```

### Tankless Water Heater (Calentador Instantáneo)

**Características:**
- Sin almacenamiento (on-demand)
- Calienta agua al pasar por intercambiador
- Flow rate: 8-15 L/min (residencial), 15-40 L/min (comercial)

**Ventajas:**
- Espacio reducido
- Sin pérdidas de standby
- Agua caliente ilimitada (mientras no exceda flow rate)

**Dimensionamiento:**

**Fórmula:**
```
kW requeridos = Flow rate (L/min) × ΔT (°C) × 0.07

Donde:
ΔT = Temperatura deseada - Temperatura entrada
```

**Ejemplo:**
```
Flow rate: 20 L/min (2 duchas simultáneas)
Entrada: 15°C (agua fría)
Salida: 55°C (agua caliente)
ΔT = 55 - 15 = 40°C

kW = 20 × 40 × 0.07 = 56 kW

Selección: Tankless 60 kW
```

### Heat Pump Water Heater

**Características:**
- Usa bomba de calor (refrigeración reversa)
- COP 2.5-3.5 (2.5-3.5 kW calor por 1 kW eléctrico)
- Más eficiente que resistencia eléctrica

**Uso:** Climas cálidos, edificios con carga térmica

## Modelar Sistema en Revit

### Colocar Water Heater

**Paso 1: Cargar Familia**

1. **Insert** → **Load Family**
2. `MEP\Plumbing\Water Heaters\Tank Water Heater - Gas.rfa`
3. **Open**

**Paso 2: Colocar Equipo**

1. **Systems** → **Plumbing & Piping** → **Plumbing Fixture**
2. **Type Selector:** `Tank Water Heater - Gas - 2000L - 150kW`
3. En vista de plano, colocar en **mechanical room**
4. **Properties:**
   - **Flow (L/s):** `3.3` (200 L/min recovery)
   - **Supply Temperature:** `55°C`
   - **Fuel Type:** `Natural Gas`
   - **Input Power:** `150 kW` (thermal)

![Water Heater Placement](../imagenes/mod2-water-heater.png)

### Sistema de Recirculación

**Componentes:**
1. **Hot water supply** - Del calentador hacia fixtures
2. **Hot water return** - De fixtures de regreso a calentador
3. **Circulation pump** - Mueve agua en loop
4. **Check valve** - Previene flujo reverso

**Paso 1: Modelar Supply**

1. **Systems** → **Pipe**
2. **Type:** `Hot Water Supply`
3. Routing: Desde water heater hacia fixtures (baños, cocina)
4. **Pipe Type:** Cobre Type L o PEX
5. **Size:** Según cálculo (ver Lección 1)

**Paso 2: Modelar Return**

1. **Pipe** → **Type:** `Hot Water Return`
2. Routing: Desde fixture más lejano de regreso a water heater
3. **Conectar al inlet del water heater** (connector de return)

**Paso 3: Agregar Circulation Pump**

1. **Plumbing Fixture** → `Circulation Pump - Hot Water`
2. Ubicación: En línea de return, cerca de water heater
3. **Properties:**
   - **Flow:** `1.5 L/s` (suficiente para mantener temperatura)
   - **Head:** `10 m` (overcome friction losses en loop)
   - **Power:** `150 W` (pequeña bomba)

**Paso 4: Agregar Check Valve**

1. **Pipe Accessory** → `Check Valve`
2. Ubicación: En return line, antes de pump
3. Previene flujo reverso cuando pump apaga

**Paso 5: Conectar Sistema**

**Flujo:**
```
Water Heater (supply) → Hot Water Pipe → Fixtures
                          ↓
Fixtures → Return Pipe → Check Valve → Pump → Water Heater (return inlet)
```

![Recirculation System](../imagenes/mod2-recirculation-system.png)

### Control de Recirculación

**Timer Control:**
- Bomba opera solo en horas pico (6AM-10PM)
- Apaga en madrugada (ahorro energético)

**Aquastat Control:**
- Sensor de temperatura en return line
- Bomba enciende si T < 50°C (mantiene temperatura)
- Bomba apaga si T > 52°C

**Modelado:**
1. **Plumbing Fixture** → `Temperature Sensor`
2. Ubicar en return pipe (near fixtures)
3. **Properties:** Set point: `50°C`

*Nota: Revit modela sensor visualmente, control lógico no funcional (solo documentación)*

## Aislamiento Térmico

### Necesidad de Aislamiento

**Sin aislamiento:**
- Pérdida térmica: 10-20 W/m de tubería
- Ejemplo: 100m de tubería sin aislar = 1,000-2,000 W desperdiciados
- Costo energético anual: Significativo

**Con aislamiento:**
- Pérdida reducida: 2-5 W/m
- ROI típico: 1-3 años

### Tipos de Aislamiento

**1. Foam (Espuma):**
- Material: Polietileno expandido
- R-value: R-4 a R-8
- Diámetros: 13mm-100mm (1/2" - 4")
- Uso: Agua caliente residencial

**2. Fiberglass:**
- R-value: R-6 a R-12
- Con jacket de aluminio o PVC
- Uso: Comercial, alta temperatura

**3. Mineral Wool:**
- Temperaturas altas (hasta 650°C)
- Uso: Sistemas industriales

### Modelar Aislamiento en Revit

**Paso 1: Pipe Type Properties**

1. Seleccionar hot water pipe
2. **Edit Type**
3. **Type Parameters:**
   - **Insulation Thickness:** `25mm` (1")
   - **Insulation Material:** `Foam`
   - **Insulation Lining:** `None` (externo)

**Paso 2: Visualizar Aislamiento**

1. **View** → **Visibility/Graphics**
2. **Pipes** category → **Insulation** subcategory: ☑ Visible
3. **Override:** Color diferente (ej. amarillo para insulation)

**Paso 3: Schedule de Aislamiento**

1. **View** → **Schedules** → **Material Takeoff**
2. **Category:** `Pipes`
3. **Fields:**
   - Pipe Type
   - Size
   - Length
   - **Insulation Thickness**
   - **Insulation Area** (calculated: Length × Perimeter)

**Cálculo de área:**
```
Area = Length × π × (Diameter + 2 × Insulation Thickness)
```

**Ejemplo:**
```
Tubería: 50mm diameter, 100m length
Insulation: 25mm thickness

Diameter exterior = 50 + 2×25 = 100mm = 0.1m
Area = 100m × π × 0.1m = 31.4 m²

Costo @ $15/m²: 31.4 × 15 = $471
```

## Cálculos de Demanda

### Fixture Units Method

**IPC (International Plumbing Code) Tabla de Hot Water Demand:**

| Fixture | Hot Water Demand (L/min) | Fixture Units (HW) |
|---------|-------------------------|-------------------|
| Lavabo (Lavatory) | 2 | 0.75 |
| Ducha (Shower) | 8-12 | 2.0 |
| Bañera (Bathtub) | 15 | 3.0 |
| Kitchen sink (Residential) | 6 | 1.5 |
| Kitchen sink (Commercial) | 10 | 3.0 |
| Lavaplatos (Dishwasher) | 4 | 1.5 |
| Lavadora (Clothes washer) | 8 | 2.0 |

**Demanda total NO es suma directa** (no todos fixtures operan simultáneamente).

**Usar tabla IPC/UPC de diversity:**

| Total Fixture Units (HW) | Demanda (L/min) |
|--------------------------|----------------|
| 1-5 | Sum individual |
| 10 | 25 |
| 15 | 32 |
| 20 | 38 |
| 30 | 48 |
| 50 | 65 |
| 100 | 95 |

**Ejemplo - Edificio Residencial:**

**Fixtures:**
- 20 apartamentos
- Cada apartamento: 1 kitchen sink (1.5 FU), 2 lavabos (0.75 FU), 1 ducha (2 FU), 1 lavadora (2 FU)

**FU por apartamento:**
```
FU = 1.5 + 2×0.75 + 2 + 2 = 7.0 FU
```

**Total building:**
```
Total FU = 20 apartamentos × 7 FU = 140 FU
```

**Demanda (según tabla IPC para 140 FU):**
```
Demanda ≈ 110 L/min (interpolación)
```

**Dimensionar water heater:**
```
Tank capacity = 110 L/min × 10 min × 1.25 = 1,375 L
Recovery = 110 L/min × 60 = 6,600 L/h (mínimo)

Selección: Tank 1,500L con recovery 7,000 L/h
```

### Temperatura y Mezcla

**Temperatura de almacenamiento:** 60°C (evita legionella bacteria)

**Temperatura de uso:** 40-45°C (confort, seguridad)

**Válvula mezcladora termostática (TMV):**
- Mezcla agua caliente (60°C) + fría (15°C) → salida 43°C
- Previene quemaduras
- **Obligatoria** en hospitales, escuelas, guarderías

**Modelado:**
1. **Pipe Accessory** → `Thermostatic Mixing Valve`
2. Ubicación: Salida de water heater (antes de distribution)
3. **Properties:** Set point: `43°C`

## Eficiencia Energética

### Pérdidas de Standby

**Tank water heaters:**
- Pérdida standby: 1-3% por hora (agua almacenada pierde calor)
- Para tank 2,000L @ 60°C con pérdida 2%/h:
  ```
  Pérdida = 2,000L × 4.18 kJ/(L·°C) × (60-20)°C × 0.02 = 6,688 kJ/h = 1.86 kW

  Costo diario @ $0.12/kWh: 1.86 kW × 24h × 0.12 = $5.36/día = $1,956/año
  ```

**Solución:**
- Aislar tank (R-16 mínimo)
- Reducir temperatura si posible (55°C vs 60°C)
- Usar tankless en aplicaciones de bajo uso

### Schedule de Recirculación

**Optimizar horario de bomba:**

**Malo:** Bomba 24/7
- Consumo: 150W × 24h × 365 días = 1,314 kWh/año
- Costo @ $0.12/kWh: $158/año

**Bueno:** Bomba con timer (6AM-10PM)
- Consumo: 150W × 16h × 365 = 876 kWh/año
- Costo: $105/año
- **Ahorro: $53/año** (33%)

**Mejor:** Bomba con aquastat (on-demand)
- Opera solo cuando T < 50°C
- Consumo: ~40% del tiempo → 525 kWh/año
- Costo: $63/año
- **Ahorro: $95/año** (60%)

### Solar Water Heating (Integración)

**Para proyectos con paneles solares térmicos:**

**Sistema híbrido:**
1. **Solar collectors** (en techo) precalientan agua (30-40°C)
2. **Water heater convencional** eleva a 60°C (menor energía requerida)

**Ahorro típico:** 40-60% de energía térmica

**Modelado en Revit:**
1. Modelar **Solar Collector** (family custom)
2. Conectar a **Preheat Tank** (200-500L)
3. Preheat tank → Water heater principal

## Mejores Prácticas

### 1. Diseño de Recirculación

**Loop balanceado:**
- Return desde fixture más lejano (end of line)
- Balancing valves en branches para flow uniforme
- Evitar "dead legs" (tuberías sin recirculación > 6m)

### 2. Expansion Tank

**Necesidad:**
- Agua caliente expande (~3% de 15°C a 60°C)
- Sin expansion tank → presión excesiva, válvulas de alivio disparan

**Dimensionamiento:**
```
Tank size (L) = 0.03 × System volume (L)

Ejemplo: Sistema 500L
Expansion tank = 0.03 × 500 = 15L mínimo
```

**Modelado:**
1. **Plumbing Fixture** → `Expansion Tank`
2. Ubicación: Cerca de water heater, en supply line
3. **Properties:** Size: `20L` (18L + margin)

### 3. Pressure Relief Valve

**Obligatorio (código):**
- Tank water heaters requieren **T&P valve** (Temperature & Pressure relief)
- Set point: 99°C o 150 PSI (1,034 kPa)
- Descarga a drain

**Modelado:**
1. **Pipe Accessory** → `Relief Valve`
2. Ubicación: Top del tank (connector dedicado)
3. **Drain pipe** desde valve al piso (indirect connection a drenaje)

### 4. Legionella Prevention

**Bacteria legionella:**
- Crece en agua 20-45°C
- Causa enfermedad respiratoria (Legionnaires' disease)

**Prevención:**
- Mantener agua caliente > 55°C (bacterias mueren)
- Recirculación activa (evita agua estancada)
- Flush periódico de fixtures poco usados

**Nota en planos:**
```
HOT WATER SYSTEM NOTES:
1. Maintain supply temperature ≥ 55°C at fixtures.
2. Circulation pump with aquastat control.
3. Flush all fixtures weekly in low-use areas.
4. Annual system disinfection per ASHRAE 188.
```

## Ejercicio Aplicado

**Ver:** Ejercicio 2 en `ejercicios.md` - Diseñar sistema completo de agua caliente con recirculación para hotel 40 habitaciones, dimensionar calentador y bomba.

---

**Próxima Lección:** Bombas y Sistemas de Presión Constante - Booster pumps, pressurizadores, tanques hidroneumáticos.
