# Lección 3: Schedules y Dibujos Isométricos

## Introducción

Los **schedules (tablas)** son documentos críticos que listan todos los fixtures, pipes, equipment, y valves del proyecto con sus especificaciones completas. Los **dibujos isométricos** muestran piping en vista 3D (isometric projection) facilitando fabricación e instalación en campo. Ambos son requisitos estándar en documentación profesional de plomería.

Esta lección cubre creación de schedules completos en Revit (fixtures, pipes por sistema, equipment, valves), customización de templates, export a Excel, fundamentos de isometric drawings, generación automática en Revit MEP 2026, annotation, y spool drawings para fabricación.

## Plumbing Fixture Schedules

### Propósito

**Listar todos los plumbing fixtures** con:
- Type y model
- Quantity
- Manufacturer
- Finish/Color
- Mounting type
- Connection sizes
- Special requirements

### Crear Fixture Schedule en Revit

**Paso 1: New Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. **Category:** `Plumbing Fixtures`
3. **Name:** `Plumbing Fixture Schedule`
4. **OK**

**Paso 2: Fields**

**Add campos (Available → Scheduled):**

- **Mark** - Identificador único (FX-1, LAV-1, etc.)
- **Family and Type** - Tipo de fixture
- **Level** - Ubicación
- **Room** - Espacio donde está instalado
- **Manufacturer** - Fabricante (Kohler, American Standard, etc.)
- **Model** - Número de modelo
- **Finish** - Chrome, brushed nickel, white, etc.
- **Mounting** - Wall-hung, floor-mounted, countertop
- **Water Supply Connection** - 1/2", 3/8", compression, etc.
- **Drain Connection** - 1-1/2", 2", P-trap, etc.
- **WSFU** - Water Supply Fixture Units (supply)
- **DFU** - Drainage Fixture Units (drainage)
- **Flow Rate (gpm)** - Caudal requerido
- **Comments** - Notas especiales

**Paso 3: Filter (Optional)**

**Ejemplo - Solo fixtures de baños públicos:**
- **Filter by:** `Room` **contains** `Restroom`

**Paso 4: Sorting/Grouping**

- **Sort by:** `Level` (ascending)
- **Then by:** `Mark` (ascending)
- **Grand totals:** ☑ (Footer)
- **Itemize every instance:** ☑

**Paso 5: Formatting**

- **Mark:** Bold, 3mm
- **Family and Type:** 2.5mm
- **Alignment:** Headers centered, data left-aligned
- **Calculate totals:** Solo para quantity (count)

### Fixture Schedule Output Ejemplo

| Mark | Type | Level | Room | Mfr | Model | Finish | Mount | Supply | Drain | WSFU | DFU |
|------|------|-------|------|-----|-------|--------|-------|--------|-------|------|-----|
| **WC-1** | Water Closet - Wall | 1 | Men's RR | Kohler | K-6299 | White | Wall | - | 3" | 2.5 | 4 |
| **LAV-1** | Lavatory | 1 | Men's RR | American Std | 0614.000 | Chrome | Countertop | 3/8" | 1-1/4" | 1 | 1 |
| **UR-1** | Urinal - Wall | 1 | Men's RR | Sloan | SU-1009 | Stainless | Wall | 3/4" | 2" | 4 | 4 |
| **FD-1** | Floor Drain | 1 | Men's RR | Zurn | Z415 | Nickel bronze | Floor | - | 2" | - | 2 |
| **Total Level 1** | | | | | | | | | | **7.5** | **11** |
| **Grand Total** | | | | | | | | | | **52** | **78** |

**Uso:**
- Procurement (ordering fixtures)
- Verification de specs
- Submittal documentation

### Customizar Fixture Schedule

**Agregar campos custom:**

**Paso 1: Create Shared Parameter**

1. **Manage** → **Shared Parameters**
2. **Create** → New parameter: `ADA Compliant`
3. **Type:** Yes/No
4. **Group:** Plumbing Fixtures

**Paso 2: Add to Family**

1. Abrir fixture family (ej. Water Closet)
2. **Family Types** → **Add Parameter**
3. Select shared parameter: `ADA Compliant`
4. **Instance** parameter
5. **Load into Project**

**Paso 3: Populate Data**

1. Seleccionar fixtures en proyecto
2. **Properties:** `ADA Compliant` → ☑

**Paso 4: Add to Schedule**

1. Edit Plumbing Fixture Schedule
2. **Fields:** Add `ADA Compliant`
3. Sort/Filter por ADA compliance si necesario

## Pipe Schedules por Sistema

### Schedule de Sanitary Piping

**Paso 1: Create Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. **Category:** `Pipes`
3. **Name:** `Sanitary Pipe Schedule`

**Paso 2: Filter**

- **Filter by:** `System Type` **equals** `Sanitary`

**Paso 3: Fields**

- **System Type** (Sanitary)
- **Size** (diameter)
- **Material** (PVC Sch 40, Cast Iron, etc.)
- **Slope** (1/4" per ft, 1/8" per ft)
- **Length** (por segment)
- **Level** (ubicación)
- **Insulation** (si aplica)
- **From Connector** (origen)
- **To Connector** (destino)

**Paso 4: Sorting**

- **Sort by:** `Level`
- **Then by:** `Size` (descending - largest first)
- **Calculate totals:** `Length` (material takeoff)

**Output ejemplo:**

| Level | System | Size | Material | Slope | Length (ft) | From | To |
|-------|--------|------|----------|-------|-------------|------|-----|
| **Level 1** | Sanitary | 4" | Cast Iron | 0.0208 | 85.5 | WC-1 | Stack-1 |
| Level 1 | Sanitary | 3" | PVC Sch 40 | 0.0208 | 42.3 | Lav-2 | Branch |
| Level 1 | Sanitary | 2" | PVC | 0.0208 | 28.7 | FD-1 | Branch |
| **Level 1 Total** | | | | | **156.5** | | |
| **Grand Total** | | | | | **687.4** | | |

**Uso:** Material ordering, installation verification.

### Schedules de Otros Sistemas

**Water Supply Pipe Schedule:**
- Filter: `System Type` = `Domestic Cold Water` o `Domestic Hot Water`
- Fields: Size, Material (Copper Type L), Insulation, Pressure rating

**Storm Drainage Pipe Schedule:**
- Filter: `System Type` = `Storm Drainage`
- Fields: Size, Flow (gpm), Material, Slope

**Fire Protection Pipe Schedule:**
- Filter: `System Type` = `Fire Protection`
- Fields: Size, Material (Steel Sch 40), Flow, Sprinkler count

**Gas Piping Schedule:**
- Filter: `System Type` = `Fuel Gas`
- Fields: Size, Material (Black Steel), BTU capacity, Pressure

## Equipment Schedules

### Mechanical Equipment Schedule

**Para pumps, water heaters, tanks, fire pumps:**

**Paso 1: Create**

1. **Category:** `Mechanical Equipment`
2. **Name:** `Plumbing Equipment Schedule`

**Paso 2: Fields**

- **Mark** (P-1, WH-1, FP-1)
- **Family and Type**
- **Level**
- **Room/Location**
- **Manufacturer**
- **Model Number**
- **Capacity** (gpm, gallons, kW, HP)
- **Voltage** (208V, 480V, etc.)
- **Phase** (1-ph, 3-ph)
- **Power** (kW o HP)
- **Efficiency** (%)
- **Fuel Type** (Electric, Gas, Diesel)
- **Service** (Domestic Water, Fire Protection, etc.)
- **Comments**

**Paso 3: Filter (optional)**

**Ejemplo - Solo plumbing equipment (excluir HVAC):**
- **Filter by:** `Service` **contains** `Water` **or** `Fire`

**Output ejemplo:**

| Mark | Type | Level | Mfr | Model | Capacity | Power | Voltage | Service | Comments |
|------|------|-------|-----|-------|----------|-------|---------|---------|----------|
| **P-1** | Booster Pump | Basement | Grundfos | CR 10-6 | 60 gpm @ 260 ft | 5 HP | 208V-3ph | Domestic Water | VFD controlled |
| **WH-1** | Water Heater | Basement | A.O. Smith | BTH-300 | 300 gal | 300 kW | 480V-3ph | Hot Water | Electric, 208°F max |
| **FP-1** | Fire Pump | Basement | Peerless | 4AE12 | 500 gpm @ 75 psi | 40 HP | 480V-3ph | Fire Protection | Diesel backup |
| **HT-1** | Expansion Tank | Basement | Amtrol | ST-80 | 80 gal | - | - | Hot Water | Diaphragm type |

## Valve Schedules

### Propósito

**Listar todas las válvulas críticas** para:
- Maintenance planning
- Shutoff procedures
- Emergency response

### Crear Valve Schedule

**Revit NO tiene category "Valves"** → Valves son **Pipe Accessories** o **Mechanical Equipment**.

**Workaround:**

**Opción 1: Tag valves con custom parameter**

1. Create shared parameter: `Valve Type`
2. Add to pipe accessory families (Gate Valve, Ball Valve, etc.)
3. Populate: "Gate", "Ball", "Check", "PRV", etc.

**Opción 2: Use Pipe Accessories Schedule**

1. **Category:** `Pipe Accessories`
2. **Filter by:** `Family` **contains** `Valve`

**Fields:**

- **Mark** (V-1, V-2, etc.)
- **Valve Type** (Gate, Ball, Check, Butterfly, PRV)
- **Size** (pipe size)
- **System** (Sanitary, Water Supply, Fire Protection, Gas)
- **Level**
- **Location/Room**
- **Function** (Isolation, Backflow prevention, Pressure relief)
- **Normally** (Open/Closed)
- **Actuator** (Manual, Electric, Pneumatic)

## Export Schedules a Excel

### Procedimiento

**Paso 1: Export**

1. Abrir schedule en Revit
2. **File** → **Export** → **Reports** → **Schedule**
3. **Format:** `Tab delimited (.txt)` o `Comma separated (.csv)`
4. **Name:** `Plumbing_Fixture_Schedule.txt`
5. **Save**

**Paso 2: Open en Excel**

1. Excel → **Data** → **From Text/CSV**
2. Select archivo exportado
3. **Delimiter:** Tab (o Comma si CSV)
4. **Load**

**Paso 3: Format en Excel**

- Apply conditional formatting
- Create charts (ej. pie chart de fixture types)
- Add custom calculations
- Merge con cost data

**Paso 4: Re-import a Revit (opcional)**

Revit puede re-link schedules modificados en Excel (limited support).

## Dibujos Isométricos - Fundamentos

### ¿Qué es un Isometric Drawing?

**Proyección isométrica 3D** donde:
- Ejes X, Y, Z están a **120°** entre sí
- Mantiene **proporciones reales** (no perspective distortion)
- **NO es perspective** (líneas paralelas permanecen paralelas)

**Ventajas vs planos 2D:**
- Muestra routing 3D claramente
- Fácil entender elevations y offsets
- Ideal para fabricación (spools)
- Instaladores entienden mejor

### Convenciones de Isometric Drawing

**Ejes:**
```
        ╱ Y (vertical)
       ╱
      ╱
     ╱_______ X (horizontal derecha)
    ╱
   ╱ Z (horizontal izquierda)
```

**Líneas:**
- **Solid line:** Visible piping
- **Dashed line:** Hidden piping (behind other elements)
- **Centerline:** Ejes de symmetry

**Símbolos:**
- **Valves:** Standard symbols (triangle para gate, círculo para ball)
- **Fittings:** 90° elbow, 45° elbow, tee, wye
- **Equipment:** Simplified boxes

### Types de Isometric Drawings

**1. System Isometric:**
- Muestra entire system (ej. todo el sanitary drainage)
- Útil para overview

**2. Spool Isometric (Fabrication):**
- Muestra segmento específico de pipe (spool)
- **Dimensioned** (todas las longitudes y offsets)
- Para fabrication shop (pre-fabricate antes de field)

**3. Installation Isometric:**
- Guía para installers
- Muestra connections, supports, penetrations

## Generar Isometric Views en Revit

### Método 1: 3D View Orientada

**Paso 1: Create 3D View**

1. **View** → **3D View** → **Default 3D View**
2. Duplicate: **3D** → Rename `Isometric - Sanitary Stack 1`

**Paso 2: Orient View**

1. **View Cube** → Rotate a orientación isométrica
2. **O** usar **ViewCube** → Click en corner (muestra isometric)

**Paso 3: Visibility/Graphics**

1. **VV** (Visibility/Graphics shortcut)
2. **Show:**
   - Pipes (Sanitary system only)
   - Pipe fittings
   - Pipe accessories (valves)
   - Mechanical equipment (connected)
3. **Hide:**
   - Arquitectura (walls, floors) - o semi-transparent
   - Otros systems (electric, HVAC)
   - Structural

**Paso 4: Crop View**

1. **Crop Region:** Enable
2. **Size Section Box** para focus en stack específico

**Resultado:** Isometric view de sanitary stack.

### Método 2: Generate Isometric Automatically

**Revit 2026 - Enhanced Isometric Tools:**

**Paso 1: Select Piping System**

1. Click en pipe segment del sistema
2. **Tab** para select entire connected system
3. **O** use **Select by System**

**Paso 2: Generate Isometric**

1. **Modify | Pipes** → **Generate Isometric View**
2. Revit crea **new 3D view** con:
   - Solo ese system visible
   - Orientación isométrica automática
   - Crop region ajustado

**Paso 3: Refine**

1. Adjust crop si necesario
2. Add dimensions (ver siguiente sección)

### Annotate Isometric Drawings

**Dimensions:**

1. **Annotate** → **Aligned Dimension**
2. Dimension pipe lengths:
   - Horizontal runs
   - Vertical risers
   - Offsets

**Example annotations:**
```
4" PVC SCH 40
SLOPE 1/4" PER FT
LENGTH: 12'-6"
ELEV: 10'-0" (INVERT)
```

**Tags:**

1. **Tag Pipe**
   - Size, material
2. **Tag Equipment**
   - Mark (P-1, WH-1)
3. **Tag Valves**
   - Type, size

**Notes:**

1. **Text** annotations:
   - "CONNECT TO EXISTING 4\" BUILDING DRAIN"
   - "PROVIDE CLEANOUT"
   - "SLOPE CONTINUOUS TO DRAIN"

**Leader lines:**

Pointing a fittings, valves, special connections.

## Spool Drawings para Fabricación

### ¿Qué es un Spool?

**Spool = Segmento de pipe pre-fabricado** en shop, luego instalado en campo.

**Componentes típicos:**
- Straight pipe sections (cut to length)
- Welded fittings (elbows, tees)
- Flanges en ends (para field connection)

**Ventajas:**
- **Quality control** mejor en shop que en field
- **Faster installation** (spools pre-made)
- **Less field labor** (menos welding en sitio)

### Spool Isometric Requirements

**Debe mostrar:**

1. **Dimensions completas:**
   - Todas las lengths (end-to-end, center-to-center)
   - Offsets (vertical y horizontal)
   - Elevations (inverts si drainage)

2. **Bill of Materials (BOM):**
   - Pipe: Size, material, schedule, lengths
   - Fittings: Type (90° elbow, tee), quantity
   - Flanges, gaskets, bolts

3. **Welding symbols:**
   - Type de weld (butt, socket)
   - Inspection requirements

4. **Spool ID:**
   - Unique identifier (ej. "SP-101")

5. **Orientation:**
   - North arrow o reference

### Crear Spool Drawing en Revit

**Paso 1: Identify Spool**

**Spool típicamente es:**
- Entre field welds (flanges)
- Entre 10-40 ft length (transportable)

**Ejemplo:** Branch de sanitary stack:
```
Stack (flange) ──[Spool SP-101: 25 ft pipe + 3 elbows + 2 tees]── Cleanout (flange)
```

**Paso 2: Create Isometric de ese Spool**

1. Select pipes + fittings del spool
2. **Isolate** (IH) en view
3. Generate isometric view
4. Crop tightly

**Paso 3: Dimension Completamente**

**Dimensionar:**
- End-to-end length: 25'-0"
- Centers de fittings: Tee @ 8'-6" desde start, @ 18'-3" desde start
- Elevations: Invert @ 10'-0" start, 9'-9" end (slope 1/4" per ft)

**Paso 4: Add BOM (Schedule)**

**En mismo sheet:**

| Item | Description | Size | Qty |
|------|-------------|------|-----|
| 1 | Pipe - PVC Sch 40 | 4" | 25 LF |
| 2 | 90° Elbow | 4" | 3 |
| 3 | Sanitary Tee | 4" | 2 |
| 4 | Cleanout | 4" | 1 |

**Paso 5: Title Block**

```
SPOOL ISOMETRIC
SP-101
SANITARY BRANCH - LEVEL 1 - EAST WING
SCALE: NTS (Not To Scale - isométricos no a escala exacta)
```

## Revit 2026: MEP Fabrication Tools (Introduction)

### Fabrication Parts vs Design Pipes

**Design pipes (usado hasta ahora):**
- Schematic representation
- LOD 300 (design development)
- Generic sizes

**Fabrication parts:**
- **LOD 400** (fabrication/construction)
- **Exact manufacturer specs** (Victaulic, Anvil, etc.)
- Include:
  - Exact fittings (no generic elbows)
  - Hangers, supports
  - Gaskets, fasteners

### Convert Design to Fabrication

**Workflow:**

**Paso 1: Load Fabrication Database**

1. **Manage** → **MEP Fabrication Settings**
2. **Load Database:** (ej. "ASHRAE Imperial.mdb")
3. Contiene thousands de fabrication parts (pipes, ductwork, fittings)

**Paso 2: Convert Pipes**

1. Select design pipe system
2. **Modify** → **Convert to Fabrication**
3. Revit reemplaza generic pipes con fabrication parts

**Paso 3: Detailing**

Fabrication parts incluyen:
- Bolt holes
- Gasket grooves
- Weld preps
- Cut lists (flat patterns para CNC cutting)

**Paso 4: Export**

**Export formats:**
- **DWG** (para CAD)
- **MAJ** (Autodesk Fabrication format)
- **STEP/IGES** (para CAM/CNC machines)

**Resultado:** Shop puede fabricate directly desde Revit model.

## Best Practices

### 1. Schedule Consistency

**Usar mismo template** para todos los schedules similares:
- Save schedule as template (.txt file)
- Re-use en futuros proyectos

### 2. Isometric Clarity

**Evitar clutter:**
- NO mostrar demasiados systems en un isometric
- Focus en 1 system o segment a la vez

### 3. Dimensioning

**Isométricos dimensionados:**
- Todas las critical dimensions
- Evitar over-dimensioning (confunde)

### 4. Coordination

**Schedules y drawings deben match:**
- Fixture schedule Mark = Tag en plan
- Equipment schedule Capacity = Properties en model

## Ejercicio Aplicado

**Ver:** Ejercicio 3 en `ejercicios.md` - Crear schedules completos (fixtures, sanitary pipes, water supply pipes, equipment, valves), customizar fields, export a Excel, generar isometric views de soil stack y building drain, crear spool drawing dimensionado con BOM.

---

**Próxima Lección (Final):** Coordinación MEP y Exportación - Coordination models en Revit 2026, clash detection avanzado, Navisworks integration, MEP fabrication export, shop drawing generation, BIM execution plan.
