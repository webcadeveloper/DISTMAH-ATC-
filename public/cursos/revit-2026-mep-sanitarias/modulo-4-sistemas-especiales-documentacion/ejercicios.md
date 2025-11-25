# Ejercicios Prácticos - Módulo 4: Sistemas Especiales y Documentación

## Ejercicio 1: Diseñar Sprinkler System Completo - Office Building

**Objetivo:** Diseñar sistema completo de fire protection con sprinklers automáticos según NFPA 13, calcular spacing, size pipes usando pipe schedule method, modelar en Revit con 120+ sprinklers, incluir fire pump, riser, y FDC (Fire Department Connection).

**Escenario:**
- Office building 3 pisos
- Cada piso: 15,000 ft² (100 ft × 150 ft)
- Occupancy: Light Hazard (oficinas)
- Design according NFPA 13
- Wet pipe system
- Municipal water pressure: 40 psi (insuficiente para Piso 3)

**Tareas:**

### Parte A: Cálculos de Sprinkler Coverage

**1. Determinar spacing:**
- NFPA 13 Light Hazard max area: 200 ft² per sprinkler
- Proponer grid pattern: 12 ft × 15 ft = 180 ft² ✓
- Calcular número de sprinklers por piso: 15,000 / 180 = ?

**2. Hydraulic demand:**
- Design area: 1,500 ft² (NFPA 13 Light Hazard)
- Density: 0.10 gpm/ft²
- Flow requerido: 0.10 × 1,500 = ? gpm
- Pressure en sprinkler más remoto: 7 psi mínimo

**3. Fire pump requirement:**
- Piso 3 height: 30 ft
- Presión loss por elevación: 30 × 0.433 = ? psi
- Fricción losses (estimate): 15 psi
- Total presión needed @ Piso 3: 7 + 13 + 15 = 35 psi
- Municipal supply: 40 psi
- **Conclusión:** Fire pump required? (Sí/No con justificación)

### Parte B: Sizing de Piping

**Usar NFPA 13 Pipe Schedule Method (Table 23.4.4.2.2):**

**1. Branch lines:**
- Cada branch alimenta 10 sprinklers
- Table: 2" pipe max 10 sprinklers (Light Hazard) ✓
- **Branch pipe size:** 2"

**2. Cross mains:**
- Cross main alimenta 4 branches = 40 sprinklers
- Table: 3" pipe max 60 sprinklers ✓
- **Cross main size:** 3"

**3. Riser (vertical):**
- Total sprinklers: ? (todos 3 pisos)
- **Riser size:** Según table

**4. Main drain:**
- Desde riser → Fire pump → Water supply
- **Size:** Same as riser

### Parte C: Modelado en Revit

**1. Setup:**
- Create fire protection piping system
- Pipe type: `Fire Protection - Steel Schedule 40` (color rojo)
- Load sprinkler head families (pendant, upright)

**2. Piso 1 layout:**
- Place sprinklers en grid 12 ft × 15 ft
- Use Array command (eficiencia)
- Total sprinklers Piso 1: ~83

**3. Branch lines:**
- Route 2" pipes conectando rows de sprinklers
- Automatic tee fittings

**4. Cross mains:**
- 3" pipes perpendicular a branches
- Connect todas las branches

**5. Riser:**
- 4" vertical pipe desde basement → Roof
- Connect cross mains en cada piso (wye fittings)

**6. Repeat Pisos 2 y 3:**
- Duplicate sprinkler layout
- Connect a riser

**7. Fire pump (basement):**
- Load fire pump family
- Properties: 500 gpm @ 50 psi, 40 HP electric
- Jockey pump (10 gpm)
- Connect a riser

**8. Main drain:**
- From fire pump → Water supply connection (property line)

**9. FDC (exterior):**
- Fire Department Connection en exterior wall
- Load family: `Siamese Connection.rfa`
- Connect a main drain (check valve)

### Parte D: Inspector's Test Connection

**1. Identify most remote point:**
- Piso 3, furthest corner desde riser

**2. Install test connection:**
- Test valve
- Sight glass
- Drain pipe

### Parte E: Documentación

**1. Fire Protection Pipe Schedule:**
- Fields: Level, Size, Material, Length, Sprinkler count
- Grand totals: Total pipe length per size

**2. Sprinkler Schedule:**
- Fields: Level, Zone, Type (pendant/upright), Temp rating (155°F), Response (standard)

**3. Equipment Schedule:**
- Fire pump, jockey pump specs

**4. Reflected ceiling plans:**
- Pisos 1-3 showing sprinklers con spacing dimensions

**5. Riser diagram:**
- Drafting view mostrando vertical distribution
- Annotate pipe sizes, pressures

**6. Fire pump room enlarged plan:**
- Detail de pump connections, valves, FDC

**Entregables:**
- Archivo .rvt con sprinkler system completo (3 pisos, 240+ sprinklers)
- NFPA 13 calculations (Excel): Coverage area, hydraulic demand, pump sizing
- Fire Protection Pipe Schedule
- Sprinkler Schedule
- Floor plans (3 sheets)
- Riser diagram (1 sheet)
- Pump room plan (1 sheet)

**Tiempo estimado:** 10-15 horas

---

## Ejercicio 2: Gas Piping System - Restaurant Comercial

**Objetivo:** Diseñar gas piping system completo para restaurant con kitchen comercial, calcular BTU loads de múltiples appliances, size piping usando NFPA 54 tables, modelar en Revit con shutoff valves y gas detector, incluir ventilation requirements.

**Escenario:**
- Restaurant comercial con cocina profesional
- Fuel: Natural Gas (municipal supply)
- Gas meter: Exterior, presión 0.5 psi
- Appliances:
  - 6-burner commercial range: 180,000 BTU/hr
  - Convection oven: 120,000 BTU/hr
  - Char-broiler: 100,000 BTU/hr
  - Fryer (×2): 80,000 BTU/hr cada uno
  - Griddle: 75,000 BTU/hr
  - Commercial water heater: 200,000 BTU/hr
  - Space heater (dining area): 100,000 BTU/hr

**Tareas:**

### Parte A: BTU Load Calculations

**1. Total connected load:**
```
Range: 180,000
Oven: 120,000
Char-broiler: 100,000
Fryer 1: 80,000
Fryer 2: 80,000
Griddle: 75,000
Water heater: 200,000
Space heater: 100,000

Total = ? BTU/hr
```

**2. Diversity factor:**
- Restaurant kitchen (commercial): 100% (sin diversity - todos pueden operar simultáneamente)
- **Demand load = Total load**

**3. Convert BTU a CFH:**
- CFH = BTU/hr / 1,000 (para natural gas)
- CFH requerido = ?

### Parte B: Pipe Sizing (NFPA 54 Appendix B)

**Layout propuesto:**
```
Gas Meter (exterior)
    ↓
Main line → Kitchen (80 ft run)
    ├→ Range (15 ft branch)
    ├→ Oven (20 ft branch)
    ├→ Char-broiler (18 ft branch)
    ├→ Fryer 1 (25 ft branch)
    ├→ Fryer 2 (28 ft branch)
    ├→ Griddle (22 ft branch)
    └→ Water heater (10 ft branch)

Separate line → Dining area
    └→ Space heater (60 ft run)
```

**Sizing tasks:**

**1. Main kitchen line (80 ft):**
- Total kitchen load: Range + Oven + Char + Fryers + Griddle + WH = ? BTU/hr
- CFH = ?
- Fittings: 4 × 90° elbows (1-1/2" = 3 ft each), 6 × Tees branch (1-1/2" = 7 ft each)
- Equivalent length = 80 + (4×3) + (6×7) = ? ft
- Consultar NFPA 54 Table B.1 (Natural Gas, 0.5 psi) @ equivalent length
- **Main line size:** ?

**2. Range branch (15 ft):**
- Load: 180,000 BTU/hr = 180 CFH
- Fittings: 2 elbows
- Equivalent length = ?
- **Branch size:** ?

**3. Repeat para cada appliance branch**

**4. Dining area line (60 ft):**
- Load: 100,000 BTU/hr = 100 CFH
- **Size:** ?

### Parte C: Modelado en Revit

**1. Setup:**
- Create gas piping system: `Fuel Gas - Natural Gas`
- Pipe type: Steel Black, color yellow (ASME A13.1)

**2. Place gas meter:**
- Exterior wall location
- Properties: Capacity según demand load

**3. Main shutoff valve:**
- Immediately after meter
- Ball valve 1-1/2" (ejemplo)

**4. Place appliances:**
- Load families: Commercial Range, Oven, Fryer, etc.
- Arrange en kitchen layout (realistic)
- Properties: BTU Input values

**5. Route main gas line:**
- From meter → Kitchen mechanical space
- Size según calculations (ej. 1-1/2")

**6. Route branches:**
- From main line → Each appliance
- Sizes según branch calculations
- Shutoff valve **before each appliance** (within 6 ft - NFPA 54 requirement)

**7. Dining area line:**
- Separate run → Space heater
- Size calculated

**8. Gas detector:**
- Load family: `Gas Detector.rfa`
- Place en kitchen ceiling (natural gas rises)
- Properties: Combustible gas type, 10% LEL setpoint

### Parte D: Ventilation

**NFPA 54 requirement: 50 CFM per 1,000 BTU/hr**

**1. Calculate ventilation:**
```
Total kitchen BTU = ?
Ventilation CFM = (Total BTU / 1,000) × 50 = ?
```

**2. Size ventilation grille:**
```
Grille area = CFM / Velocity
Assume velocity = 500 FPM
Area = ? CFM / 500 = ? ft²
```

**3. Model:**
- Load `Air Grille.rfa`
- Place en kitchen wall (exterior)
- Size según calculation

### Parte E: Safety Features

**1. Emergency shutoff:**
- Additional shutoff valve near kitchen exit
- Labeled: "GAS EMERGENCY SHUTOFF"

**2. Gas line identification:**
- Tag gas pipes con: "NG - [SIZE]"
- Direction arrows showing flow

**3. Appliance clearances:**
- Verify appliances have proper clearances per manufacturer specs

### Parte F: Documentación

**1. Gas Pipe Schedule:**
- Fields: System, Size, Material, BTU Capacity, Length
- Sort by descending size
- Grand totals: Pipe length per size

**2. Gas Appliance Schedule:**
- Fields: Mark, Type, BTU Input, Gas Connection Size, Manufacturer, Model
- Location

**3. Kitchen plan:**
- Show gas piping
- Appliances with tags
- Shutoff valves
- Gas detector
- Ventilation grille

**4. Gas riser diagram (if multi-floor):**
- Schematic vertical distribution

**5. Calculations package:**
- BTU loads
- NFPA 54 pipe sizing tables con highlighted values
- Equivalent length calculations

**Entregables:**
- Archivo .rvt del restaurant completo
- BTU load calculations (Excel)
- NFPA 54 pipe sizing calculations
- Gas Pipe Schedule
- Gas Appliance Schedule
- Kitchen plan annotated
- Safety compliance checklist

**Tiempo estimado:** 8-12 horas

---

## Ejercicio 3: Schedules Completos e Isométricos

**Objetivo:** Crear schedules profesionales completos de todos los plumbing systems (fixtures, sanitary pipes, water supply pipes, storm pipes, fire protection, equipment, valves), customizar fields, export a Excel, generar isometric views de soil stack y building drain, crear spool drawing dimensionado con BOM.

**Escenario:**
- Usar proyecto existente de ejercicios anteriores (edificio con water supply, drainage, fire protection)
- **O** usar proyecto de muestra provisto

**Tareas:**

### Parte A: Plumbing Fixture Schedule

**1. Create schedule:**
- Category: Plumbing Fixtures
- Name: `Plumbing Fixture Schedule - Complete`

**2. Add fields:**
- Mark, Family and Type, Level, Room, Manufacturer, Model, Finish, Mounting, Water Supply Connection, Drain Connection, WSFU, DFU, Flow Rate (gpm), ADA Compliant (custom), Comments

**3. Sort:**
- By Level, then by Mark

**4. Formatting:**
- Bold headers
- Calculate totals: WSFU, DFU (grand totals en footer)

**5. Populate custom fields:**
- Edit fixture instances: Agregar Manufacturer, Model (realistic data - Kohler, American Standard, etc.)
- ADA Compliant: Mark fixtures que cumplen ADA

### Parte B: Pipe Schedules por Sistema

**Create 5 schedules separados:**

**1. Sanitary Pipe Schedule:**
- Filter: System Type = Sanitary
- Fields: Level, Size, Material, Slope, Length, Insulation, From, To
- Sort: Level, Size (descending)
- Calculate totals: Length

**2. Water Supply Pipe Schedule:**
- Filter: System = Domestic Cold Water OR Domestic Hot Water
- Fields: System, Size, Material, Insulation Thickness, Pressure Rating, Length
- Separate rows: Cold vs Hot
- Calculate totals per system

**3. Storm Drainage Pipe Schedule:**
- Filter: System = Storm Drainage
- Fields: Size, Flow (gpm), Slope, Material, Length
- Calculate totals

**4. Fire Protection Pipe Schedule:**
- Filter: System = Fire Protection
- Fields: Size, Material, Sprinkler Count, Flow (gpm), Length
- Calculate totals

**5. Gas Piping Schedule:**
- Filter: System = Fuel Gas
- Fields: Size, Material, BTU Capacity, Pressure, Length
- Calculate totals

### Parte C: Equipment Schedule

**1. Create schedule:**
- Category: Mechanical Equipment
- Name: `Plumbing Equipment Schedule`

**2. Fields:**
- Mark, Family and Type, Level, Manufacturer, Model Number, Capacity, Power, Voltage, Phase, Fuel Type, Service, Efficiency (%), Weight, Comments

**3. Filter:**
- Only plumbing equipment (exclude HVAC)
- Example filter: Service contains "Water" OR "Fire" OR "Gas"

**4. Populate:**
- Edit equipment instances con realistic data
- Pumps: Grundfos models
- Water heaters: A.O. Smith, Rheem
- Fire pumps: Peerless, Aurora

### Parte D: Valve Schedule

**1. Create Pipe Accessories Schedule:**
- Name: `Valve Schedule`

**2. Filter:**
- Family contains "Valve"

**3. Fields:**
- Mark, Valve Type (custom parameter: Gate, Ball, Check, PRV, etc.), Size, System, Level, Location, Function, Normally (Open/Closed), Actuator (Manual/Electric)

**4. Add custom parameter:**
- Create shared parameter: `Valve Type`
- Add to valve families
- Populate: Gate, Ball, Check, Butterfly, etc.

### Parte E: Export a Excel

**1. Export cada schedule:**
- File → Export → Reports → Schedule
- Format: CSV o Tab delimited

**2. Open en Excel:**
- Import data
- Apply formatting (colors, borders)

**3. Create dashboard en Excel:**
- **Sheet 1:** Fixture Schedule
- **Sheet 2:** Pipe Schedules (5 systems combinados con tabs)
- **Sheet 3:** Equipment Schedule
- **Sheet 4:** Summary Dashboard:
  - Pie chart: Fixture types distribution
  - Bar chart: Pipe lengths por system
  - Table: Equipment count por type

**4. Link cost data (optional):**
- Add column: Unit Cost
- Calculate: Total Cost = Length × Unit Cost
- Grand total material cost

### Parte F: Isometric View - Soil Stack

**1. Select sanitary stack system:**
- Tab through stack pipes hasta select entire connected system

**2. Generate isometric:**
- Modify | Pipes → Generate Isometric View (Revit 2026)
- **O** manually: 3D view → Orient isometric → VG show solo sanitary

**3. Crop view:**
- Focus en soil stack vertical + connections
- Hide otros systems

**4. Dimension isometric:**
- Annotate → Aligned Dimension
- Dimension:
  - Vertical riser lengths por floor
  - Horizontal branch offsets
  - Elevations (inverts de branches)

**5. Annotate:**
- Pipe tags: Sizes (4" stack, 3" branches)
- Text: "SOIL STACK #1", "SLOPE 1/4\" PER FT"
- Level references: "LEVEL 1", "LEVEL 2", etc.

### Parte G: Spool Drawing - Building Drain Segment

**1. Identify spool:**
- Building drain segment: From stack base → Cleanout → Building exit
- Example length: 40 ft
- Include: 2 wye fittings, 1 cleanout, 1 90° elbow

**2. Create isometric de ese segment:**
- Isolate solo ese spool
- Generate isometric view
- Crop tightly

**3. Dimension completamente:**
- **End-to-end:** 40'-0"
- **Fitting locations:**
  - Wye #1 @ 12'-6" from start
  - Wye #2 @ 28'-3" from start
  - Cleanout @ 35'-0"
  - 90° elbow @ 38'-6"
- **Elevations:**
  - Start invert: 5'-0"
  - End invert: 4'-10" (slope 1/4" per ft over 40 ft = 10" drop)

**4. Create BOM table en same sheet:**

| Item | Description | Size | Material | Qty | Notes |
|------|-------------|------|----------|-----|-------|
| 1 | Pipe | 4" | PVC Sch 40 | 40 LF | Cut to lengths per drawing |
| 2 | Wye Fitting | 4" | PVC | 2 | - |
| 3 | Cleanout | 4" | PVC | 1 | Floor type |
| 4 | 90° Elbow | 4" | PVC | 1 | Long radius |

**5. Title block:**
```
SPOOL DRAWING
SPOOL ID: SP-BD-01
BUILDING DRAIN SEGMENT
SCALE: NTS
DRAWING: SD-101
DATE: 2025-11-22
```

**6. Notes:**
```
NOTES:
1. ALL PIPING PVC SCHEDULE 40 UNLESS NOTED
2. SLOPE 1/4" PER FOOT CONTINUOUS TO DRAIN
3. PRESSURE TEST @ 10 PSI FOR 15 MINUTES
4. INSTALL PER IPC 2021 CHAPTER 7
```

### Parte H: Place Schedules en Sheets

**1. Create sheets:**
- Sheet S-1: Plumbing Fixture Schedule
- Sheet S-2: Pipe Schedules (5 systems)
- Sheet S-3: Equipment Schedule + Valve Schedule
- Sheet S-4: Soil Stack Isometric
- Sheet S-5: Spool Drawing (Building Drain)

**2. Drag schedules onto sheets:**
- Arrange professionally
- Title blocks completos

**Entregables:**
- Archivo .rvt con 5+ schedules completos
- Excel workbook con schedules exported + dashboard
- 5 sheets con schedules placed
- Soil stack isometric (dimensioned)
- Spool drawing con BOM
- PDF export del sheet set completo

**Tiempo estimado:** 8-10 horas

---

## Ejercicio 4: Coordinación Multidisciplinaria Completa

**Objetivo:** Ejecutar coordination workflow completo para proyecto multidisciplinario: link architectural y structural models, Copy/Monitor elements, run interference check (clash detection), analyze clashes, propose resolutions, document en clash report, coordinate penetrations, generate coordination sheets.

**Escenario:**
- Edificio comercial 4 pisos
- **Plumbing model:** (tu modelo) - Water supply, sanitary drainage, fire protection
- **Architectural model:** (provisto o crear mockup) - Walls, floors, ceilings
- **Structural model:** (provisto o crear mockup) - Columns, beams, slabs

**Tareas:**

### Parte A: Link Models

**1. Organize files:**
```
Project Folder/
  Models/
    Building-Plumbing.rvt (tu modelo)
    Building-Architectural.rvt
    Building-Structural.rvt
```

**2. En Plumbing model, link otros:**
- Insert → Link Revit
- Link: `Building-Architectural.rvt` (positioning: Origin to Origin)
- Link: `Building-Structural.rvt`

**3. Visibility control:**
- VV → Revit Links tab
- Architectural: Show walls/floors (halftone)
- Structural: Show columns/beams (halftone)

### Parte B: Copy/Monitor

**1. Copy structural grids:**
- Collaborate → Copy/Monitor → Select Link (Structural)
- Copy → Grids (all)
- Finish

**2. Copy levels:**
- Same process: Copy → Levels
- Verifica consistency

**3. Monitor walls (selective):**
- Copy/Monitor → Architectural link
- Monitor critical walls (restroom walls donde pipes penetran)

### Parte C: Run Interference Check

**1. Plumbing vs Structural:**
- Collaborate → Interference Check → Run Check
- **Current model categories:**
  - ☑ Pipes (all systems)
  - ☑ Mechanical Equipment (pumps, water heaters)
  - ☑ Plumbing Fixtures
- **Link:** `Building-Structural.rvt`
  - ☑ Structural Columns
  - ☑ Structural Framing (beams)
  - ☑ Floors
- **Tolerance:** 0" (hard clashes only)
- **Run**

**Resultado:** Lista de clashes (estimate 20-50 clashes para proyecto típico).

**2. Plumbing vs Architecture:**
- Repeat clash detection
- Categories: Pipes vs Walls, Floors, Ceilings
- Identify penetrations que requieren coordination

### Parte D: Analyze Clashes

**Para cada clash en report:**

**1. Review en 3D:**
- Click clash → Revit muestra 3D view
- Inspect geometry

**2. Classify:**

**Type A - Critical Hard Clash:**
- Ejemplo: 4" sanitary pipe atraviesa structural beam flange
- **Severity:** HIGH
- **Action required:** IMMEDIATE

**Type B - Penetration (Coordinable):**
- Ejemplo: 2" water supply pipe atraviesa floor slab
- **Severity:** MEDIUM
- **Action:** Coordinate sleeve

**Type C - Soft Clash (Clearance Issue):**
- Ejemplo: Pipe within 2" de beam (tolerance 3")
- **Severity:** LOW
- **Action:** Verify clearance acceptable

**3. Document en Excel:**

| Clash # | Category 1 | Category 2 | Location | Type | Severity | Proposed Resolution | Responsible | Status |
|---------|------------|------------|----------|------|----------|---------------------|-------------|--------|
| 14 | Pipe (4" sanitary) | Beam (W12×26) | L2, Grid B/3 | Hard | HIGH | Core drill beam web (6" sleeve) | Structural Eng | Open |
| 15 | Pipe (2" water) | Floor slab | L3, Grid C/4 | Penetration | MEDIUM | Install 4" sleeve | Plumbing | Open |
| 27 | Pipe (3" vent) | Wall | L1, Grid A/2 | Penetration | LOW | Wall opening (coordinate) | Architect | Open |

### Parte E: Propose Clash Resolutions

**For each critical clash, propose solutions:**

**Clash #14 (Pipe vs Beam):**

**Option 1: Re-route pipe**
- Offset pipe 12" to side (avoid beam)
- Pros: No structural modification
- Cons: May impact other systems, more fittings

**Option 2: Core drill beam web**
- 6" dia hole in beam web (center of web, no flanges)
- Install sleeve
- Structural engineer approval required
- Pros: Pipe path optimal
- Cons: Requires structural calc, fireproofing

**Recommendation:** Option 2 (coordinate with structural)

**Clash #15 (Pipe through floor):**

**Resolution:**
- Standard penetration (common)
- Install 4" dia sleeve (2" pipe + 2" clearance)
- Firesafing sealant around pipe
- Per IPC penetration requirements

**Action:** Add sleeve family to model at clash location

### Parte F: Coordination Meeting Simulation

**1. Prepare presentation:**
- PowerPoint con:
  - Clash summary (total count, by severity)
  - Top 10 critical clashes (screenshots)
  - Proposed resolutions
  - Required actions por discipline

**2. Clash resolution log:**
- Track status: Open, In Progress, Resolved, Closed

**3. Action items:**
```
ACTION ITEMS - Coordination Meeting 2025-11-22

1. Structural Engineer (John Doe):
   - Review beam penetration proposals (Clashes #14, #18, #22)
   - Provide approval or alternate solution by 2025-11-25

2. Architect (Jane Smith):
   - Coordinate wall openings (Clashes #27, #31)
   - Update architectural plans with sleeve locations

3. Plumbing (You):
   - Re-route pipes per agreed resolutions
   - Add sleeves to model
   - Update plumbing model by 2025-11-27
   - Run re-check for new clashes

4. All:
   - Next coordination meeting: 2025-11-29, 10:00 AM
```

### Parte G: Resolve Clashes en Model

**1. Re-route pipes:**
- Clash #14: Offset pipe 12" (per meeting decision)
- Use section view para verify clearances

**2. Add sleeves:**
- Load family: `Sleeve - Round.rfa`
- Place at cada penetration location
- Size: Pipe diameter + 2" clearance
- Tag sleeves: "SL-1", "SL-2", etc.

**3. Update linked models:**
- Coordinate con otros disciplines
- Reload linked models cuando actualizado

**4. Re-run interference check:**
- Verify clashes resolved
- Check for new clashes introduced por re-routing

### Parte H: Documentation

**1. Clash report (PDF):**
```
CLASH DETECTION REPORT
Project: Commercial Building - 4 Floors
Date: 2025-11-22
Run by: [Your name]

SUMMARY:
- Total clashes found: 42
- Hard clashes: 12
- Penetrations: 23
- Soft clashes: 7

CRITICAL CLASHES (Resolved):
[Screenshots + descriptions + resolutions para top 10]

PENETRATIONS (Coordinated):
[Table listing all floor/wall penetrations con sleeve sizes]

RECOMMENDATIONS:
1. Structural review required for 3 beam penetrations
2. Architect to add 15 wall openings to plans
3. Re-run clash detection after model updates

NEXT STEPS:
- Coordination meeting: 2025-11-29
- Model update deadline: 2025-11-27
- Final clash-free model target: 2025-12-05
```

**2. Coordination sheets:**
- Sheet C-1: Clash locations plan (Level 1-4)
- Sheet C-2: Critical clash details (enlarged 3D views)
- Sheet C-3: Penetration schedule

**3. Penetration schedule:**

| Penetration # | Type | Level | Location | Pipe Size | Sleeve Size | Firesafing | Status |
|---------------|------|-------|----------|-----------|-------------|------------|--------|
| P-01 | Floor | 2 | Grid B/3 | 4" sanitary | 6" steel | 2-hr rated | Coordinated |
| P-02 | Floor | 3 | Grid C/4 | 2" water | 4" PVC | 1-hr rated | Coordinated |
| P-03 | Beam | 2 | Grid B/3 | 4" sanitary | 6" steel | Fireproof | Pending approval |

### Parte I: Navisworks Export (Optional)

**Si Navisworks available:**

**1. Export Revit models:**
- File → Export → NWC (Navisworks Cache)
- Export: Plumbing.nwc, Architectural.nwc, Structural.nwc

**2. Combine en Navisworks:**
- Navisworks Manage → Append files
- Federated model completo

**3. Clash Detective:**
- Tools → Clash Detective
- Setup tests (automated batch testing)
- Run all
- Generate HTML report

**4. Compare con Revit results:**
- Verify consistency
- Navisworks may find additional clashes (more sensitive)

**Entregables:**
- Archivo .rvt Plumbing model con linked Arch/Struct models
- Excel clash log (42 clashes documented)
- Clash report PDF (15+ páginas con screenshots)
- Coordination sheets (3 sheets)
- Penetration schedule
- Action items log
- Updated Plumbing model post-resolution
- Re-check interference report (showing resolved clashes)
- (Optional) Navisworks federated model + clash report

**Tiempo estimado:** 12-18 horas

---

## EJERCICIO FINAL INTEGRADOR - PROYECTO COMPLETO

### Proyecto: Edificio Comercial Mixto - Sistema MEP Plombing Completo

**Objetivo:** Integrar TODOS los módulos del curso (1, 2, 3, 4) en un proyecto final comprehensivo que demuestra dominio completo de Revit MEP Plumbing Systems. Este proyecto sirve como **portfolio piece profesional** para certificación y oportunidades laborales.

**Escenario:**
- **Edificio:** Mixto (retail + oficinas + restaurant) - 5 pisos + basement
  - **Basement:** Mechanical room, storage, parking
  - **Piso 1:** Retail (2 tiendas) + Restaurant (cocina comercial)
  - **Pisos 2-5:** Oficinas (8 suites por piso)
- **Área total:** 80,000 ft² (16,000 ft² por piso)
- **Ocupantes:** 400 personas total
- **Ubicación:** Houston, TX (para rainfall intensity)
- **Códigos:** IPC 2021, NFPA 13, NFPA 54

**Sistemas requeridos (TODOS):**
1. ✅ Water Supply (cold + hot + recirculation + booster system)
2. ✅ Sanitary Drainage (waste + soil + venting)
3. ✅ Storm Drainage (roof drains + leaders)
4. ✅ Fire Protection (sprinklers + standpipe)
5. ✅ Gas Piping (restaurant kitchen + water heaters)
6. ✅ Coordination (architectural + structural models)

---

### TAREAS COMPLETAS (100-150 horas de trabajo)

### FASE 1: ANÁLISIS Y CÁLCULOS (15 horas)

**1.1 Water Supply (Módulo 2):**
- Calculate fixture units (WSFU) para todo el edificio
- Determine demand flow (gpm)
- Analyze municipal pressure (assume 45 psi)
- Design booster system:
  - Pressure required @ Piso 5: 15 psi + elevation loss + friction
  - Size 3 booster pumps (N+1 redundancy)
  - Calculate TDH (Total Dynamic Head)
  - Select commercial pumps (Grundfos catalogs)

**1.2 Hot Water System (Módulo 2):**
- Calculate hot water demand (fixture units método)
- Size water heaters: 2 × commercial units (redundancy)
- Design recirculation loop (calculate flow, pump size)
- Expansion tank sizing

**1.3 Sanitary Drainage (Módulo 3):**
- Calculate DFU (Drainage Fixture Units) por piso
- Size soil stacks (4 stacks - each serving 1 quadrant)
- Size building drain (combine all stacks)
- Design venting system

**1.4 Storm Drainage (Módulo 3):**
- Rainfall intensity Houston: 6.5 in/hr (10-year storm)
- Roof area: 16,000 ft²
- Calculate flow usando Rational Method
- Size roof drains (8 drains), leaders, horizontal storm drains

**1.5 Fire Protection (Módulo 4):**
- Sprinkler coverage: Light Hazard (oficinas), Ordinary Hazard (retail/restaurant)
- Number de sprinklers: ~500 total
- Hydraulic demand calculation
- Fire pump sizing (500 gpm @ 75 psi)

**1.6 Gas Piping (Módulo 4):**
- Restaurant kitchen: 6 appliances (total 800,000 BTU/hr)
- Water heaters: 2 × 200,000 BTU/hr
- Total demand: 1,200,000 BTU/hr
- Size gas piping usando NFPA 54 tables

**Deliverable Fase 1:**
- Calculations package completo (Excel workbook 15+ sheets)
- All sizing tables con IPC/NFPA references highlighted
- Equipment selection sheets (pumps, water heaters, fire pump)

---

### FASE 2: MODELADO EN REVIT (60 horas)

**2.1 Project Setup:**
- Template: MEP Professional
- Levels: Basement, 1-5, Roof
- Grids: 8 × 8 (40 ft spacing típico)
- Link architectural model (walls, floors)
- Link structural model (columns, beams)

**2.2 Plumbing Fixtures (Módulo 1):**
- Place 200+ fixtures:
  - Restrooms cada piso (WC, urinals, lavabos)
  - Restaurant (kitchen sinks, dishwashers, mop sinks)
  - Retail (restrooms + service sinks)
  - Break rooms (kitchen sinks)
- Properties: WSFU, DFU, manufacturer/model

**2.3 Water Supply System (Módulo 2):**
- **Basement:**
  - Water meter (entrada al building)
  - Backflow preventer (RPZ)
  - 3 booster pumps con VFD control
  - Hydropneumatic tank
  - 2 water heaters (commercial 300 gal each)
  - Expansion tanks
- **Vertical distribution:**
  - 4 cold water risers (1" - 2" sizes)
  - 4 hot water supply risers
  - 4 hot water return risers (recirculation)
  - Circulation pump
- **Horizontal distribution (cada piso):**
  - Branch pipes a cada fixture
  - Insulation en hot water pipes
  - Shutoff valves strategic locations
  - Water hammer arrestors (washing machines, dishwashers)

**2.4 Sanitary Drainage System (Módulo 3):**
- **Fixtures drains:** P-traps, waste connections
- **Branch drains:** Horizontal con slope 1/4" per ft
- **4 soil stacks:** Vertical 4" (cast iron para noise control)
- **Venting:**
  - Stack vents (extend arriba de roof)
  - Wet vents (restrooms)
  - Individual vents donde requerido
  - AAVs (strategic locations)
- **Building drain (basement):**
  - Combine 4 stacks
  - Size 6" (148+ DFU total)
  - Slope hacia exit point
  - Cleanouts every change de direction
- **Basement floor drains**

**2.5 Storm Drainage System (Módulo 3):**
- **Roof (Piso 5 roof):**
  - 8 primary roof drains (4" each)
  - 8 secondary overflow drains (2" arriba de primary)
  - Spacing: 50 ft max
- **Storm leaders:**
  - 8 vertical 4" pipes (primary)
  - 8 vertical 3" pipes (secondary/overflow)
- **Horizontal storm drains (basement):**
  - Combine primary leaders → 8" main storm drain
  - Separate secondary system → Exterior discharge visible
- **Discharge:**
  - Primary → Municipal storm sewer
  - Secondary → Exterior scuppers/downspouts

**2.6 Fire Protection System (Módulo 4):**
- **Sprinklers (todos los pisos):**
  - 500+ sprinkler heads (pendant type)
  - Spacing: 12 ft × 15 ft (Light Hazard)
  - Temp rating: 155°F (ordinary)
- **Piping:**
  - Branch lines: 1-1/4" - 2"
  - Cross mains: 2-1/2" - 3"
  - Risers: 4" vertical (each quadrant)
  - Main: 6" underground
- **Fire pump room (basement):**
  - Fire pump 500 gpm @ 75 psi (electric + diesel backup)
  - Jockey pump
  - Fire water storage tank (10,000 gal)
  - Controllers, alarms
- **FDC:** Fire Department Connection (exterior - Siamese)
- **Standpipe:** Vertical pipe con hose connections cada piso

**2.7 Gas Piping System (Módulo 4):**
- **Gas meter:** Exterior (property line)
- **Main line:** 2" steel black pipe → Building
- **Restaurant kitchen:**
  - Branches a 6 appliances (ranges, ovens, fryers, etc.)
  - Sizes: 1/2" - 1-1/4" per calculations
  - Shutoff valves each appliance
  - Gas detector (ceiling-mounted)
- **Water heaters:**
  - Gas lines a 2 water heaters (basement)
  - Sizes per BTU load
- **Emergency shutoff:** Near exit

**2.8 MEP Fabrication Conversion (Módulo 4):**
- Convert sanitary stack pipes a fabrication parts (LOD 400)
- Fire protection main a fabrication (exact Victaulic fittings)

**Deliverable Fase 2:**
- Archivo Revit completo: `Building-Plumbing-FINAL.rvt` (500 MB+)
- Modelo con 1,000+ elements
- All systems modeled per calculations

---

### FASE 3: COORDINACIÓN (20 horas)

**3.1 Copy/Monitor:**
- Copy structural grids y levels
- Monitor critical walls

**3.2 Clash Detection:**
- Run interference check:
  - Plumbing vs Structural (expect 80+ clashes)
  - Plumbing vs Architecture (penetrations)
- Document cada clash

**3.3 Clash Resolution:**
- Re-route 30+ pipes
- Coordinate 50+ penetrations (add sleeves)
- Core drill locations (coordinate con structural)

**3.4 Re-check:**
- Run interference check again
- Target: < 5 minor clashes remaining

**Deliverable Fase 3:**
- Clash report (PDF 40+ páginas)
- Clash log Excel (100+ rows)
- Coordination sheets (10 sheets)
- Penetration schedule

---

### FASE 4: DOCUMENTACIÓN (30 horas)

**4.1 Schedules (Módulo 4):**
- Plumbing Fixture Schedule (200+ fixtures)
- Sanitary Pipe Schedule
- Water Supply Pipe Schedule (cold + hot)
- Storm Drainage Pipe Schedule
- Fire Protection Pipe Schedule
- Gas Piping Schedule
- Equipment Schedule (pumps, water heaters, fire pump, tanks)
- Valve Schedule (100+ valves)

**4.2 Floor Plans (10 sheets):**
- Basement plan (equipment room layout)
- Pisos 1-5 plans (fixtures, pipes visible)
- Roof plan (roof drains, storm system)
- Enlarged plans (restrooms, mechanical room, kitchen) - 3 sheets

**4.3 Riser Diagrams (5 sheets):**
- Water supply riser (cold + hot + recirc)
- Sanitary drainage riser (4 stacks)
- Storm drainage riser
- Fire protection riser
- Gas piping riser

**4.4 Isometric Drawings (5 sheets):**
- Sanitary soil stack #1 (dimensioned)
- Building drain (dimensioned)
- Hot water recirculation loop
- Fire protection main distribution
- Spool drawings (3 spools con BOM)

**4.5 Details (5 sheets):**
- Typical fixture connections (WC, lavabo, shower)
- Booster pump room layout
- Fire pump room layout
- Water heater connections
- Pipe penetration details (floor, wall, beam)

**4.6 Schedules Sheets (5 sheets):**
- All schedules placed professionally

**4.7 Specifications (20 páginas Word document):**
- Section 22 00 00 - General Plumbing
- Section 22 10 00 - Plumbing Piping
- Section 22 40 00 - Plumbing Fixtures
- Section 21 00 00 - Fire Suppression (sprinklers)
- Section 23 50 00 - Booster Systems

**4.8 Cover Sheet:**
- Project title, location, owner
- Index of drawings (40+ sheets)
- General notes
- Abbreviations, symbols legend

**Deliverable Fase 4:**
- Drawing set completo: **40+ sheets** (PDF)
- Specifications: 20 páginas (Word + PDF)
- All schedules exported a Excel

---

### FASE 5: BIM COORDINATION REPORT (10 horas)

**5.1 BIM Execution Plan Summary (5 páginas):**
- Project overview
- BIM goals achieved
- Software used
- Modeling standards applied
- LOD levels per phase

**5.2 Coordination Report (15 páginas):**
- Clash detection summary (stats, graphs)
- Resolutions implemented
- Penetrations coordinated (50+ documented)
- Lessons learned
- Recommendations

**5.3 Final Presentation (PowerPoint 30 slides):**
- Project overview
- Systems designed (con screenshots)
- Key calculations
- 3D renderings del modelo
- Clash resolution examples
- Final deliverables summary

**Deliverable Fase 5:**
- BIM Execution Plan (PDF)
- Coordination Report (PDF)
- Presentation (PPT + PDF)

---

### ENTREGABLES FINALES DEL PROYECTO

**Al completar, entregar:**

1. ✅ **Revit Model:** `Building-Plumbing-FINAL.rvt`
2. ✅ **Calculations Package:** Excel workbook (15+ sheets)
3. ✅ **Drawing Set:** PDF (40+ sheets)
4. ✅ **Specifications:** Word + PDF (20 páginas)
5. ✅ **Schedules:** Excel export (8 schedules)
6. ✅ **Clash Report:** PDF (40 páginas)
7. ✅ **BIM Coordination Report:** PDF (20 páginas)
8. ✅ **Presentation:** PowerPoint (30 slides)
9. ✅ **Portfolio PDF:** Combined document (100+ páginas) showcasing proyecto completo

**Total horas:** 100-150 horas (proyecto profesional completo)

---

### CRITERIOS DE EVALUACIÓN (Proyecto Final)

**1. Modelado (30%):**
- Completeness (todos los systems modelados)
- Accuracy (sizing correcto)
- Detail level (LOD 300-400 apropiado)
- Best practices (naming, organization)

**2. Calculations (25%):**
- Correctness (IPC/NFPA compliance)
- Documentation (show work, references)
- Clarity (organized, professional)

**3. Coordination (20%):**
- Clash detection ejecutado
- Resolutions implemented
- Penetrations coordinated
- Structural coordination

**4. Documentation (20%):**
- Drawing quality (clarity, completeness)
- Schedule accuracy
- Specs thoroughness
- Professional presentation

**5. Innovation/Quality (5%):**
- Going beyond requirements
- Creative solutions
- Professional polish

**Passing:** ≥ 80% (Certificación otorgada)

---

### DESPUÉS DEL PROYECTO FINAL

**Certificación:**
- Submit proyecto para review
- Instructor feedback (2 semanas)
- **Certificado digital:** *Revit MEP Plumbing Systems 2026 Specialist*

**Portfolio:**
- Use este proyecto en job applications
- Showcase en LinkedIn, personal website
- Demonstrate professional BIM MEP skills

**Oportunidades:**
- BIM Modeler MEP (Plumbing) - $60k-$90k USD/año
- MEP Coordinator - $70k-$100k USD/año
- MEP Engineer - $80k-$120k USD/año

**¡ÉXITO EN TU PROYECTO FINAL Y CARRERA PROFESIONAL!** 🎓🚀
