# Lección 2: Sistemas de Gas y Gases Especiales

## Introducción

Los **sistemas de gas piping** distribuyen combustible gaseoso (natural gas o LP gas) para cocinas, water heaters, boilers, y otros equipos. Los **medical gas systems** en hospitales proveen oxygen, nitrous oxide, vacuum, y compressed air para procedimientos médicos. Ambos sistemas requieren diseño especializado, safety features, y cumplimiento estricto de códigos debido a riesgos de explosión/asfixia.

Esta lección cubre fundamentos de gas piping, códigos NFPA 54/IFGC, sizing según BTU loads, gas appliances, medical gases (conceptual), color coding ASME A13.1, safety requirements, y modelado en Revit MEP 2026.

## Gas Piping Fundamentals

### Tipos de Gas

**1. Natural Gas (NG):**
- **Composición:** Principalmente metano (CH₄)
- **Fuente:** Municipal gas utility (piped desde distribution network)
- **Presión de servicio:** Típica 5-7" w.c. (inches water column) = 0.18-0.25 psi
- **Medición:** Cubic feet per hour (CFH) o BTU/hr
- **Ventajas:** Continuous supply, no storage tanks, económico

**2. Liquefied Petroleum Gas (LP/LPG):**
- **Composición:** Propano (C₃H₈) o butano (C₄H₁₀)
- **Fuente:** Tanques on-site (almacenamiento)
- **Presión:** 10-11" w.c. (0.36-0.40 psi) en gas phase
- **Almacenamiento:** Tanques exteriores (above/underground)
- **Ventajas:** Available en áreas rurales sin gas natural
- **Desventajas:** Requiere refilling, más denso que aire (accumulates bajo si leak)

### Códigos y Normas

**NFPA 54 (ANSI Z223.1):** National Fuel Gas Code
- **Principal código** para gas piping en USA
- Cubre installation, materials, sizing, venting, appliances

**International Fuel Gas Code (IFGC):**
- Alternativa a NFPA 54
- Usado en algunas jurisdicciones

**NFPA 58:** Liquefied Petroleum Gas Code
- Específico para LP gas storage y handling

**ASME B31.8:** Gas Transmission and Distribution Piping Systems
- Para sistemas de distribución municipal (fuera de buildings)

### Safety Considerations

**Riesgos:**

**1. Explosión:**
- Gas acumula en espacio cerrado
- Mezcla con aire (4-15% concentration = explosive)
- Ignition source (spark) → **Explosión**

**2. Asfixia:**
- Gas natural displaces oxygen en espacio cerrado
- NO es tóxico, pero causa asfixia por falta de O₂

**3. Fuego:**
- Leak + ignition = Fire

**Medidas de safety:**
- **Ventilation adecuada** en mechanical rooms
- **Gas detectors** (alarmas si leak)
- **Emergency shutoff valves** accesibles
- **Appliance venting** correcto (exhaust de combustión)
- **No electric switches/outlets** en áreas con riesgo de gas accumulation

## Gas Appliances y BTU Loads

### Common Gas Appliances

**Residencial:**

| Appliance | BTU/hr Input (typical) |
|-----------|------------------------|
| Residential range (cocina) | 30,000 - 60,000 |
| Oven | 15,000 - 25,000 |
| Water heater (tanque 40 gal) | 30,000 - 40,000 |
| Tankless water heater | 150,000 - 200,000 |
| Furnace (calefacción) | 60,000 - 120,000 |
| Boiler | 80,000 - 150,000 |
| Fireplace decorativo | 25,000 - 40,000 |
| Clothes dryer | 20,000 - 35,000 |

**Comercial:**

| Appliance | BTU/hr Input |
|-----------|--------------|
| Commercial range (por burner) | 25,000 - 40,000 |
| Commercial oven | 100,000 - 150,000 |
| Fryer | 80,000 - 120,000 |
| Griddle | 60,000 - 100,000 |
| Commercial water heater | 200,000 - 500,000 |
| Boiler (grande) | 500,000 - 2,000,000+ |

**Nameplate data:** Siempre consultar manufacturer nameplate para BTU rating exacto.

### Calcular Total BTU Load

**Ejemplo - Casa residencial:**

```
Furnace: 80,000 BTU/hr
Water heater: 40,000 BTU/hr
Range/Oven: 65,000 BTU/hr
Dryer: 30,000 BTU/hr
Fireplace: 35,000 BTU/hr

Total = 250,000 BTU/hr
```

**Diversity factor (NFPA 54):**
- NO todos los appliances operan simultáneamente a full load
- **Residential:** Usar 100% del largest appliance + 50% de remainder (conservador)
- **Comercial:** Depende de tipo de occupancy (restaurant kitchen = 100%)

**Demand load (ejemplo residential):**
```
Largest (Furnace): 80,000 × 100% = 80,000
Remainder: 170,000 × 50% = 85,000

Demand load = 165,000 BTU/hr
```

## Sizing de Gas Piping

### Método de Sizing

**NFPA 54 Appendix B - Sizing Tables:**

Tablas basadas en:
1. **Type de gas:** Natural (0.60 specific gravity) o LP (1.50 specific gravity)
2. **Presión de supply:** Typical 0.5 psi (14" w.c.)
3. **Pressure drop permitido:** Típico 0.3" w.c. (0.5 psi)
4. **Pipe length** (equivalent length con fittings)
5. **BTU load**

**Resultado:** Pipe diameter requerido.

### NFPA 54 Table B.1 - Natural Gas (Schedule 40 Steel Pipe)

**Presión: 0.5 psi, Drop: 0.3" w.c., Specific Gravity: 0.60**

**Capacities (CFH - cubic feet per hour):**

| Pipe Size | 20 ft | 40 ft | 60 ft | 100 ft | 150 ft |
|-----------|-------|-------|-------|--------|--------|
| 1/2" | 172 | 120 | 97 | 73 | 59 |
| 3/4" | 360 | 256 | 208 | 157 | 127 |
| 1" | 678 | 474 | 385 | 291 | 234 |
| 1-1/4" | 1,390 | 973 | 790 | 596 | 480 |
| 1-1/2" | 2,090 | 1,460 | 1,190 | 896 | 721 |
| 2" | 4,020 | 2,810 | 2,280 | 1,720 | 1,380 |
| 2-1/2" | 6,400 | 4,480 | 3,640 | 2,740 | 2,210 |
| 3" | 11,300 | 7,900 | 6,420 | 4,840 | 3,900 |

**Conversion:** 1 CFH ≈ 1,000 BTU/hr (para natural gas típico).

### Ejemplo de Sizing

**Escenario:**
- Casa residencial
- Demand load: 165,000 BTU/hr
- Distance desde meter a appliance más lejano: 80 ft
- Type: Natural gas

**Paso 1: Convert BTU a CFH**
```
CFH = 165,000 BTU/hr / 1,000 = 165 CFH
```

**Paso 2: Consultar tabla (interpolate entre 60 ft y 100 ft):**
- 80 ft ≈ promedio de 60 ft y 100 ft
- 3/4" pipe @ 60 ft = 208 CFH ✓ (> 165 needed)
- 3/4" pipe @ 100 ft = 157 CFH ✗ (< 165)

**Conclusión:** Usar **3/4" pipe** desde meter a main branch (conservador @ 60 ft rating).

**Paso 3: Branches a appliances individuales:**

**Furnace branch (80,000 BTU/hr = 80 CFH, 30 ft run):**
- 1/2" pipe @ 20 ft = 172 CFH ✓
- **Usar 1/2" pipe**

**Water heater branch (40,000 BTU/hr = 40 CFH, 20 ft run):**
- 1/2" pipe @ 20 ft = 172 CFH ✓
- **Usar 1/2" pipe**

**Range branch (65,000 BTU/hr = 65 CFH, 25 ft run):**
- 1/2" pipe @ 20 ft = 172 CFH ✓
- **Usar 1/2" pipe**

### Equivalent Length Method

**Fittings agregan resistance (pérdidas).**

**NFPA 54 Table B.3 - Equivalent Lengths:**

| Fitting | 1/2" | 3/4" | 1" | 1-1/4" | 1-1/2" | 2" |
|---------|------|------|-----|--------|--------|-----|
| 90° Elbow | 1 ft | 2 ft | 2 ft | 3 ft | 3 ft | 4 ft |
| 45° Elbow | 1 ft | 1 ft | 1 ft | 1 ft | 2 ft | 2 ft |
| Tee (flow through run) | 1 ft | 1 ft | 1 ft | 1 ft | 2 ft | 2 ft |
| Tee (flow through branch) | 3 ft | 4 ft | 5 ft | 6 ft | 7 ft | 8 ft |

**Ejemplo:**
```
Physical length = 80 ft
4 × 90° elbows (3/4") = 4 × 2 = 8 ft
2 × Tees (branch, 3/4") = 2 × 4 = 8 ft

Equivalent length = 80 + 8 + 8 = 96 ft ≈ 100 ft (usar tabla @ 100 ft)
```

## Gas Meters y Regulators

### Gas Meter

**Función:** Medir consumo de gas (billing).

**Ubicación:**
- Exterior building (típico)
- Accessible para utility company

**Sizing:** Utility company especifica según demand load del building.

### Gas Pressure Regulator

**Función:** Reducir presión de service line (ej. 2 psi) a presión de appliance (ej. 7" w.c.).

**Tipos:**

**1. Service Regulator (Utility-provided):**
- En gas meter
- Reduce presión de main (60 psi+) a service pressure (0.5-2 psi)

**2. Appliance Regulator:**
- En cada appliance
- Reduce presión de pipe (0.5 psi) a manifold pressure (3.5-7" w.c.)
- Típicamente built-in en appliance

### Shutoff Valves

**NFPA 54 requirements:**

**Main shutoff:**
- Inmediatamente después de meter
- Accessible, labeled
- Typically ball valve o plug valve

**Appliance shutoff:**
- **Within 6 ft** de cada gas appliance
- Upstream de appliance regulator
- Accessible (no behind appliance)

**Emergency shutoff:**
- En mechanical rooms con múltiples appliances
- Near exit (accesible durante emergency)

## Medical Gas Systems (Conceptual)

### Tipos de Medical Gases

**Hospitales requieren múltiples gas systems:**

**1. Oxygen (O₂):**
- **Más crítico** (life support)
- Pureza: 99%+
- Presión: 50-55 psi
- Color code: **Green** (USA), **White** (international)

**2. Nitrous Oxide (N₂O):**
- Anestesia
- Presión: 50-55 psi
- Color: **Blue**

**3. Medical Air (Compressed Air):**
- Breathing, ventilators
- Oil-free compressors
- Presión: 50-55 psi
- Color: **Yellow**

**4. Vacuum (Suction):**
- Surgical suction, drainage
- Presión: -10 to -12" Hg (negative)
- Color: **White**

**5. Nitrogen (N₂):**
- Power surgical tools
- Presión: 160-185 psi
- Color: **Black**

**6. Carbon Dioxide (CO₂):**
- Laparoscopy (insufflation)
- Color: **Gray**

**7. Waste Anesthetic Gas Disposal (WAGD):**
- Evacuate anesthetic gases de operating rooms
- Vacuum system

### NFPA 99 Requirements

**NFPA 99:** Health Care Facilities Code

**Key requirements:**

**Redundancy:**
- **2 sources mínimo** para critical gases (O₂, Medical Air, Vacuum)
- Primary source (bulk tank o manifold)
- Reserve/Backup source (cylinders)

**Alarms:**
- **Master alarm panel** en central location (24/7 staffed)
- Alarms para:
  - Low/high pressure
  - Changeover to reserve source
  - Low liquid level (bulk tanks)
  - Compressor failure

**Zone Valves:**
- **Shutoff valves** por zone (ej. por floor, por department)
- Ubicación: Outside zone en alarmed box
- Permiten isolation para mantenimiento sin afectar todo hospital

**Outlets:**
- **Station outlets** en patient rooms, operating rooms
- Color-coded
- Specific connector types (DISS, CGA) para prevent cross-connection

### Medical Gas Piping Materials

**Copper:**
- **Type K** (pared gruesa) - Most common
- **Medical-grade** (cleaned, capped)
- Brazed joints (soldadura fuerte, NO solder)

**Stainless Steel:**
- Alternative para oxygen (evita oxidation)

**CPVC/Plastic:**
- **PROHIBIDO** para medical gases (risk de contamination)

### Color Coding (ASME A13.1)

**ASME A13.1:** Scheme for Identification of Piping Systems

**Medical gas pipes deben estar color-coded:**

**Método:**
- **Entire pipe** pintado en color del gas
- **O** bandas de color cada 20-25 ft

**Labels:**
- Stencil o etiquetas: "OXYGEN - MED" cada 20 ft
- Arrows indicando dirección de flow

## Modelado en Revit MEP 2026

### Configurar Gas Piping System

**Paso 1: Create System**

1. **Systems** → **Piping Systems** → **New**
2. **Name:** `Fuel Gas - Natural Gas`
3. **System Type:** `Other` (o `Fuel`)
4. **Fluid:** `Natural Gas`

**Paso 2: Pipe Type**

1. **Pipe Types** → Duplicate
2. **Name:** `Gas Piping - Steel Black`
3. **Settings:**
   - Material: `Steel - Black` (standard para gas)
   - Color: **Yellow** (ASME A13.1 - Flammable/Combustible)
   - Sizes: 1/2", 3/4", 1", 1-1/4", 1-1/2", 2"

### Modelar Gas Distribution

**Paso 1: Place Gas Meter**

1. **Insert** → **Load Family** → `Gas Meter.rfa`
2. Place en exterior wall (property line)
3. **Properties:**
   - **Capacity:** Based on demand load
   - **Pressure:** 0.5 psi

**Paso 2: Main Gas Line**

1. **Pipe - Fuel Gas**
2. Route desde meter → Interior (mechanical room o kitchen)
3. **Size:** Según sizing calculations (ej. 3/4" para 165,000 BTU/hr)

**Paso 3: Place Appliances**

1. Load appliance families:
   - `Water Heater - Gas.rfa`
   - `Furnace - Gas.rfa`
   - `Range - Gas.rfa`

2. Place en ubicaciones
3. **Properties:**
   - **BTU Input:** Según nameplate
   - **Fuel Type:** Natural Gas
   - **Connection Size:** 1/2" típico

**Paso 4: Branch Piping**

1. Route branches desde main a cada appliance
2. Revit creates tees automatically
3. **Shutoff valve** antes de cada appliance:
   - Load `Ball Valve.rfa`
   - Place en pipe cerca de appliance

### Color Coding y Tags

**Identificación visual:**

1. **Pipe Graphics Override:**
   - Gas pipes: Yellow
   - Medical O₂: Green
   - Medical Air: Yellow con stripe
   - Vacuum: White

2. **Pipe Tags:**
   - **Annotate** → **Tag** → **Pipe Tag**
   - Custom tag mostrando: `NG - 3/4"` (Natural Gas, size)

3. **Directional Arrows:**
   - **Annotate** → **Symbol** → **Flow Arrow**
   - Indicar dirección de gas flow

## Safety Features en Revit Model

### Gas Detectors

1. **Load Family:** `Gas Detector.rfa`
2. **Place:**
   - Mechanical rooms con gas appliances
   - **Ceiling-mounted** (gas natural rises)
   - **Floor-level** (LP gas accumulates bajo)

3. **Properties:**
   - **Detection Type:** Combustible gas
   - **Alarm Setpoint:** 10% LEL (Lower Explosive Limit)

### Ventilation

**NFPA 54 requiere ventilation en mechanical rooms:**

**Combustion air:**
- 50 CFM per 1,000 BTU/hr input (minimum)

**Example:**
```
Furnace: 80,000 BTU/hr
Combustion air = 80 × 50 / 1,000 = 4,000 CFM

Ventilation grille size: 4,000 CFM / 500 FPM = 8 ft² = 96" × 96"
```

**Modelar:**
1. **Load** `Air Grille.rfa`
2. Place en mechanical room wall
3. Size según calculation

## Ejercicio Aplicado

**Ver:** Ejercicio 2 en `ejercicios.md` - Diseñar gas piping system para restaurant comercial con múltiples appliances (ranges, ovens, fryers, water heater), calcular BTU loads, size piping usando NFPA 54 tables, modelar en Revit con shutoff valves y gas detector.

---

**Próxima Lección:** Schedules y Dibujos Isométricos - Fixture schedules, pipe schedules, equipment schedules, isometric generation en Revit para fabricación.
