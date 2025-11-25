# Ejercicios Prácticos - Módulo 3: Sistemas de Drenaje

## Ejercicio 1: Sistema de Drenaje Sanitario Completo - Restroom

**Objetivo:** Modelar sistema de drainage sanitario para restroom público con múltiples fixtures, aplicar slopes correctas, dimensionar pipes usando DFU method, y agregar cleanouts según IPC requirements.

**Escenario:**
- Restroom público Level 1
- Fixtures:
  - 4 × WC (flushometer valve)
  - 3 × Urinal (flushometer valve)
  - 6 × Lavabo (lavatory)
  - 2 × Floor drain
- Material: PVC Schedule 40
- Slope objetivo: 1/4" per foot

**Tareas:**

### Parte A: Cálculo de DFU

1. **Crear tabla de fixture units:**
   - Listar cada fixture type con quantity
   - Asignar DFU según IPC Table 703.2
   - Calcular DFU total del restroom

2. **Sizing preliminar:**
   - Branch drain principal: ¿Qué diámetro usando IPC Table 703.2?
   - Connection a soil stack: ¿Qué diámetro de stack si este es el único restroom?

### Parte B: Modelado en Revit

1. **Setup:**
   - Crear proyecto MEP nuevo o usar template
   - Level 1 floor plan

2. **Colocar fixtures:**
   - 4 WC en línea (wall-mounted)
   - 3 Urinal en pared opuesta
   - 6 Lavabos (3 back-to-back configuration)
   - 2 Floor drains en corners

3. **Configurar pipe types:**
   - Duplicate y crear `Sanitary - PVC Schedule 40`
   - Color: Brown
   - Slope settings: 1/4" per foot default

4. **Routing de waste pipes:**
   - Conectar cada WC → Branch drain horizontal (4")
   - Conectar cada urinal → Branch drain
   - Conectar lavabos → Separate branch (2")
   - Floor drains → Branches

5. **Main branch drain:**
   - Combine todos los branches en un main branch
   - Route hacia soil stack location
   - Verificar slope continua hacia stack

6. **Crear soil stack:**
   - Vertical pipe (4") desde Level 1 → Roof
   - Connect main branch usando wye fitting
   - Extend stack arriba de roof 12" (vent termination)

### Parte C: Cleanouts

1. **Identify required cleanout locations** (IPC 708.3):
   - Base de soil stack
   - Cada cambio de dirección > 45°
   - Cada 100 ft de horizontal pipe
   - Terminal de cada branch > 5 ft

2. **Place cleanouts:**
   - Load family `Cleanout.rfa`
   - Install en ubicaciones requeridas
   - Size = Pipe size (hasta 4" max)

3. **Annotate:**
   - Tag cleanouts: "CO-1", "CO-2", etc.
   - Note en plan: "4\" CLEANOUT - FLOOR TYPE"

### Parte D: Verification

1. **Check slopes:**
   - Usar section view para verificar continuous downward slope
   - Revit 2026: Use Slope Checker tool

2. **Create schedule:**
   - Sanitary Pipe Schedule
   - Fields: System, Size, Slope, Length, Material
   - Verify todos los segments tienen slope ≥ 1/4" per ft

3. **Isometric view:**
   - Generate isometric de main branch + stack
   - Export to sheet

**Entregables:**
- Archivo .rvt del restroom completo
- Floor plan annotated (pipe sizes, slopes, cleanouts)
- Sanitary Pipe Schedule
- Isometric view drawing
- DFU calculation table (Excel o PDF)

**Tiempo estimado:** 4-5 horas

---

## Ejercicio 2: Sistema de Ventilación Sanitaria

**Objetivo:** Diseñar sistema de venting completo para edificio residencial de 2 pisos, aplicar different venting methods (individual, common, wet vent), calcular vent sizes según IPC Chapter 9, y modelar en Revit.

**Escenario:**
- Casa residencial 2 pisos
- **Piso 1:** Kitchen + Powder room
  - Kitchen: Sink, dishwasher
  - Powder room: WC + Lavabo
- **Piso 2:** 2 Bathrooms completos
  - Bathroom 1: WC + Lavabo + Shower
  - Bathroom 2: WC + Lavabo + Tub

**Tareas:**

### Parte A: Análisis de Venting Requirements

1. **Para cada fixture, determinar:**
   - DFU value
   - Waste pipe size
   - Vent size mínimo (IPC Table 916.1)
   - Max vent length permitido

2. **Identificar oportunidades de venting eficiente:**
   - ¿Qué fixtures pueden usar common vent?
   - ¿Dónde aplicar wet venting?
   - ¿Qué fixtures requieren individual vents?

### Parte B: Diseño de Venting System

1. **Piso 1 - Powder Room:**
   - **Método:** Wet vent (WC + Lavabo)
   - Design:
     - Lavabo waste (2") actúa como wet vent para WC
     - Individual vent desde lavabo waste → Roof
   - **Calcular:** Vent diameter

2. **Piso 1 - Kitchen:**
   - **Método:** Individual vent para sink
   - Dishwasher drena a sink waste
   - Vent desde sink → Vent stack o roof

3. **Piso 2 - Bathrooms:**
   - **Método:** Stack vent (vent stack común para ambos bathrooms)
   - Each bathroom:
     - WC + Lavabo: Wet vent configuration
     - Shower/Tub: Individual vent → Vent stack
   - Vent stack vertical → Roof

### Parte C: Modelado en Revit

1. **Waste pipes (ya modelados en ejercicio anterior):**
   - Route waste pipes desde cada fixture hacia soil stack

2. **Vent pipes:**
   - Create pipe type: `Vent - PVC Schedule 40` (color verde)
   - Route individual vents:
     - Horizontal desde fixture (6" arriba de flood level)
     - Vertical hacia arriba → Vent stack o roof
   - Route common vents donde aplique

3. **Vent stack:**
   - Create vertical vent stack (2" o 3" según cálculos)
   - Connect horizontal vent branches de cada piso
   - Extend hasta roof + 12"
   - Vent cap en termination

4. **Wet vents:**
   - Waste pipe de lavabo configurado como wet vent
   - Annotation: Tag como "WV" (wet vent)

### Parte D: Compliance Verification

1. **Check distance from trap to vent:**
   - Measure en plan horizontal distance
   - Compare con IPC Table 1002.2 max distances
   - Verify todos dentro de limits

2. **Check vent lengths:**
   - Measure vent pipe lengths
   - Compare con IPC Table 916.1
   - Si excede → Increase vent diameter

3. **Verify vent terminations:**
   - All vents terminate minimum 6" arriba de roof
   - Minimum 10 ft desde windows/openings

### Parte E: Documentación

1. **Venting Schedule:**
   - Create schedule de vent pipes
   - Fields: Fixture served, Vent type, Size, Length, Termination

2. **Riser diagram:**
   - Drafting view mostrando vent stack con branches
   - Annotate vent sizes y fixture connections

3. **Floor plans:**
   - Color-code: Waste (brown), Vent (green)
   - Tag vents con type (IV = individual, CV = common, WV = wet)

**Entregables:**
- Archivo .rvt con venting completo
- Venting analysis table (Excel) con sizing calculations
- Annotated floor plans (Piso 1 + Piso 2)
- Vent riser diagram
- Venting Schedule

**Tiempo estimado:** 5-6 horas

---

## Ejercicio 3: Drenaje Pluvial de Techo

**Objetivo:** Diseñar sistema de storm drainage para edificio comercial, calcular caudal usando Rational Method, size roof drains y storm leaders, modelar en Revit, y descargar a rain garden (sustainable drainage).

**Escenario:**
- Edificio comercial 2 pisos
- Roof area: 15,000 ft² (flat roof)
- Location: Chicago, IL
- Design storm: 10-year, 1-hour
- Roof type: Built-up roof (imperme able)
- Sustainable goal: Discharge a rain garden (on-site infiltration)

**Tareas:**

### Parte A: Cálculo de Caudal Pluvial

1. **Rainfall intensity:**
   - Consultar IPC Appendix B Table B101.1 para Chicago
   - 10-year storm intensity = **4.0 in/hr**

2. **Runoff coefficient:**
   - Roof type: Flat, impermeable
   - C = **0.95** (IPC Table 1106.2)

3. **Calcular caudal total:**
   ```
   Q = (C × I × A) / 96.23
   Q = (0.95 × 4.0 × 15,000) / 96.23
   Q = ?
   ```

4. **Determinar número de roof drains:**
   - Target: Spacing < 50 ft entre drains
   - Roof dimensions: 100 ft × 150 ft
   - Proponer layout con **6 roof drains** (2 rows × 3)

5. **Flow por drain:**
   - Q_drain = Q_total / 6

### Parte B: Sizing de Roof Drains y Leaders

1. **Roof drain size:**
   - Q per drain = ? gpm
   - Consultar IPC Table 1106.3
   - Seleccionar diameter

2. **Storm leader size:**
   - Each leader desde 1 roof drain → Ground
   - Size = Same como roof drain (minimum)

3. **Horizontal storm drain sizing:**
   - Dos configuraciones:
     - **Config A:** 3 leaders (west side) → Horizontal collector 1
     - **Config B:** 3 leaders (east side) → Horizontal collector 2
   - Q per collector = 3 × Q_drain
   - Slope = 1/4" per ft
   - Consultar IPC Table 1106.4 → Diameter

4. **Main storm drain:**
   - Combina Collector 1 + Collector 2
   - Q_main = Q_total
   - Size según tabla

### Parte C: Modelado en Revit

1. **Configurar storm drainage system:**
   - Create pipe type: `Storm Drainage - PVC Schedule 40`
   - Color: Blue
   - Slope: 1/4" per ft

2. **Roof plan view:**
   - Place 6 roof drains (4" según cálculos)
   - Distribute uniformly en roof surface
   - Properties: Drainage Flow = Q_drain (gpm)

3. **Storm leaders:**
   - Route vertical pipes desde cada roof drain → Ground level
   - Material: PVC 4"

4. **Horizontal collectors:**
   - Level 0 o basement: Route horizontal pipes con slope
   - Connect 3 leaders → Collector pipe (size calculated)
   - Repeat para second collector

5. **Main storm drain:**
   - Combine collectors en main drain
   - Route hacia property line → Rain garden location

### Parte D: Rain Garden Design (Conceptual)

1. **Size rain garden:**
   ```
   Rain garden area = (Roof area × C) / Infiltration rate

   Infiltration rate (typical soil) = 0.5 in/hr

   Area = (15,000 × 0.95) / 0.5 = ?
   ```

2. **Depth:**
   - Típico: 6-12 inches deep
   - Calculate volume capacity

3. **Overflow:**
   - Si rain garden llena → Overflow a municipal storm sewer
   - Design overflow drain (pipe desde rain garden)

4. **Modelar en Revit (simple representation):**
   - Create floor en sitio con depression (rain garden shape)
   - Storm drain termination discharge a rain garden

### Parte E: Secondary (Overflow) Drains

**IPC 1106.3 requirement:** Flat roofs requieren overflow drains.

1. **Place secondary roof drains:**
   - Same locations como primary
   - Set 2" arriba del primary drain invert
   - Size: Same como primary (4")

2. **Separate discharge:**
   - Secondary drains → Different storm leaders
   - Discharge a **separate location** (no combinar con primary)
   - Termination: Visible discharge (outside building) o separate sewer

3. **Modelar:**
   - Create second set de storm leaders (6 adicionales)
   - Route hacia exterior wall → Downspouts visibles
   - Tag: "OVERFLOW DRAIN - SECONDARY"

### Parte F: Documentación

1. **Storm Drainage Schedule:**
   - Roof drains: Size, Flow (gpm), Type (primary/secondary)
   - Storm leaders: Size, Length
   - Horizontal drains: Size, Slope, Flow

2. **Roof plan:**
   - Show roof drains con tags
   - Annotate flows (gpm)
   - Show roof slopes (arrows hacia drains)

3. **Site plan:**
   - Show storm leader discharge points
   - Rain garden location y size
   - Overflow routing

**Entregables:**
- Rainfall y runoff calculations (Excel o PDF)
- Archivo .rvt con storm drainage system completo
- Storm Drainage Schedule
- Roof plan annotated
- Site plan con rain garden
- Sustainability report (1 página): Beneficios del rain garden

**Tiempo estimado:** 6-8 horas

---

## Ejercicio 4: Dimensionamiento Completo y Coordinación Estructural

**Objetivo:** Diseñar sistema integrado de drainage (sanitary + storm) para edificio completo de 4 pisos, calcular DFU acumulados, size todas las pipes, coordinate con structural model para penetraciones, detectar clashes, y generar documentación profesional completa.

**Escenario:**
- Edificio de oficinas 4 pisos
- **Cada piso:**
  - 2 Restrooms (Men + Women)
    - Men: 3 WC, 2 urinal, 4 lavabo
    - Women: 6 WC, 6 lavabo
  - 1 Break room: Kitchen sink, dishwasher
  - 2 Floor drains (mechanical closets)
- **Roof:** 20,000 ft²
- Presión municipal sewer: Suficiente para drainage por gravedad
- Material: Cast Iron stacks, PVC branches
- Location: Houston, TX (rainfall intensity = 6.5 in/hr @ 10-year)

**Tareas:**

### Parte A: Cálculo Completo de DFU

1. **Inventory completo:**
   - Create tabla Excel con:
     - Todos los fixtures por piso
     - DFU por fixture type (IPC Table 703.2)
     - DFU subtotal por piso
     - DFU total acumulado

2. **DFU por sistema:**
   - **Stack 1 (Men's restrooms):** DFU total
   - **Stack 2 (Women's restrooms):** DFU total
   - **Stack 3 (Break rooms + floor drains):** DFU total

### Parte B: Sizing de Todo el Sistema

**Branch Drains (horizontal por piso):**

1. Men's restroom branch: Size usando IPC Table 703.2
2. Women's restroom branch: Size
3. Break room branch: Size

**Soil/Waste Stacks (vertical):**

1. Stack 1, 2, 3: Size usando IPC Table 710.1(1)
   - Consider DFU acumulados de todos los pisos
   - Diameter **NO reduce** hacia abajo

**Building Drain (underground):**

1. Combine stacks en building drain horizontal
2. DFU total = Sum of all stacks
3. Size usando IPC Table 710.1(2)
4. Slope: 1/4" per ft

**Storm Drainage:**

1. Calculate Q usando Rational Method
   - A = 20,000 ft², C = 0.95, I = 6.5 in/hr
2. Number de roof drains: 8 (spacing)
3. Size roof drains, leaders, horizontal storm drains
4. **Separate system** de sanitary

### Parte C: Modelado Completo en Revit

**Setup:**

1. Create proyecto MEP con 4 pisos + basement + roof
2. Link structural model (beams, columns, floors)

**Sanitary System:**

1. Place fixtures en cada piso (todos los restrooms + break rooms)
2. Route waste pipes horizontales con slopes
3. Create 3 soil stacks (cast iron 4")
   - Vertical desde Piso 1 → Roof (vent termination)
4. Connect branch drains a stacks (wye fittings)
5. Route building drain en basement
   - Combine 3 stacks → Main drain (6")
   - Exit a municipal sewer

**Storm System:**

1. Place 8 roof drains en roof
2. Route 8 storm leaders verticales → Ground
3. Horizontal storm drains combine leaders
4. Main storm drain → Separate exit de sanitary

**Venting:**

1. Stack vents: Extend sanitary stacks arriba de highest fixture
2. Individual/wet vents donde requerido

**Cleanouts:**

1. Base de cada stack
2. Building drain cada cambio de dirección
3. Typical cleanout spacing (100 ft)

### Parte D: Coordinación Estructural

**Copy/Monitor:**

1. Link structural .rvt (si disponible, o crear mockup structural elements)
2. Copy floors, beams principales
3. Monitor changes

**Clash Detection:**

1. **Collaborate** → **Interference Check**
2. Run check:
   - Sanitary pipes vs Structural Framing
   - Storm pipes vs Structural Framing
   - Tolerance: 0"

3. **Resolve clashes:**
   - Document cada clash (screenshot + location)
   - Proponer soluciones:
     - Re-route pipe
     - Core drill beam web (coordinate con structural)
     - Lower/raise pipe elevation

4. **Add sleeves:**
   - En penetraciones de floors: Place sleeves (6" para 4" pipes)
   - Tag sleeves con size

### Parte E: Schedules Completos

**Sanitary Pipe Schedule:**
- Filter: System Type = Sanitary
- Fields: Level, Size, Slope, Material, Length
- Sort: Level, then Size
- Grand totals: Length (material takeoff)

**Storm Drainage Schedule:**
- Filter: System Type = Storm Drainage
- Fields: Size, Flow (gpm), Slope, Length

**Plumbing Fixture Schedule:**
- All fixtures
- Fields: Type, Level, Room, DFU, Model/Manufacturer

**Cleanout Schedule:**
- All cleanouts
- Fields: Size, Type (floor/wall), Location

### Parte F: Documentación Final

**Plans:**

1. Floor plans (Pisos 1-4):
   - Show waste pipes con sizes
   - Fixture tags
   - Cleanout locations
   - Slopes indicated

2. Enlarged restroom plans (scale 1/4" = 1'-0"):
   - Detailed routing
   - All annotations

3. Basement/Foundation plan:
   - Building drain routing
   - Inverts (elevations)
   - Exit points

4. Roof plan:
   - Roof drains con flows
   - Storm leader locations

**Riser Diagrams:**

1. Sanitary Stack 1 riser
2. Sanitary Stack 2 riser
3. Sanitary Stack 3 riser
4. Storm drainage riser

**Sections:**

1. Building section cutting through Stack 1:
   - Show vertical routing
   - Connections por piso
   - Inverts y elevations

**Isometrics:**

1. Typical restroom isometric (waste + vent)
2. Main building drain isometric

**Clash Detection Report:**

1. Export interference report de Revit
2. Annotate resolutions proposed
3. Summary: Total clashes found, resolved, pending coordination

**Specifications (outline):**

1. Section 22 10 00 - Plumbing Piping:
   - Materials: Cast Iron stacks (Service Weight), PVC branches (Schedule 40)
   - Joining: No-hub couplings (cast iron), solvent weld (PVC)
   - Testing: Hydrostatic test @ 10 psi, 15 minutes

2. Section 22 40 00 - Plumbing Fixtures:
   - Manufacturers: List 3 acceptable brands
   - Flush valves: Sloan, Zurn equivalents
   - Lavatories: Kohler, American Standard equivalents

**Calculations Package:**

1. DFU calculations (all stacks + building drain)
2. Storm drainage calculations (Rational Method)
3. Pipe sizing tables con IPC references
4. Vent sizing calculations

### Parte G: Presentation

1. **Create sheet set en Revit:**
   - Title sheet
   - Floor plans (4 sheets)
   - Enlarged plans (2 sheets)
   - Basement/Roof plans (1 sheet)
   - Riser diagrams (1 sheet)
   - Sections + Isometrics (1 sheet)
   - Schedules (1 sheet)

2. **Export to PDF** (set completo)

3. **Create submittal package:**
   - Calculations (PDF)
   - Drawings (PDF)
   - Specifications (Word/PDF)
   - Clash report (PDF)

**Entregables:**
- Archivo .rvt del edificio completo (sanitary + storm)
- Linked structural model (si creado)
- Excel calculations (DFU, storm drainage)
- Sheet set (PDF - 10+ páginas)
- Specifications document (2-3 páginas)
- Clash detection report con resolutions
- Presentation summary (PowerPoint - 5-10 slides)

**Tiempo estimado:** 20-30 horas

**Criterios de Evaluación:**
- Exactitud de DFU calculations (25%)
- Sizing correcto según IPC tables (25%)
- Calidad de modelado en Revit (20%)
- Coordinación estructural y clash resolution (15%)
- Documentación profesional completa (15%)

---

## Ejercicio Integrador Final: Sistema Completo MEP - Sanitarias

**Objetivo:** Proyecto integrador combinando TODOS los módulos del curso - water supply, hot water, drainage, storm drainage, venting - para edificio residencial completo.

**Escenario:**
- Edificio residencial 6 pisos (apartamentos)
- 8 apartamentos por piso (total 48 apartamentos)
- Cada apartamento:
  - 2 Bathrooms (WC, lavabo, shower/tub)
  - 1 Kitchen (sink, dishwasher, washing machine)
- Piso 1: Lobby + 2 apartamentos
- Basement: Mechanical room, storage
- Roof: Mechanical equipment + drainage

**Sistemas requeridos:**

1. **Water Supply (Módulo 2):**
   - Booster system (presión insuficiente @ Piso 6)
   - Cold water distribution (risers + branches)
   - Hot water system con recirculación
   - Expansion tanks, backflow preventers

2. **Sanitary Drainage (Módulo 3):**
   - Waste/soil stacks (múltiples)
   - Branch drains por piso
   - Venting system completo
   - Building drain → Municipal sewer

3. **Storm Drainage (Módulo 3):**
   - Roof drains (primary + secondary)
   - Storm leaders
   - Separate discharge

4. **Coordination:**
   - Structural (beam penetrations)
   - Clash detection
   - Space allocation para pipes en shafts

**Entregables:**
- Modelo Revit completo (todos los sistemas)
- Calculations package (water supply + drainage)
- Full drawing set (20+ sheets)
- Specifications (10+ páginas)
- BIM coordination report
- Final presentation

**Tiempo estimado:** 40-60 horas

**Este proyecto final sirve como portfolio piece profesional.**

---

## Recursos Adicionales

**Códigos:**
- IPC 2021 Chapters 7, 9, 11
- Tablas de sizing

**Software:**
- Revit MEP 2026
- Excel para cálculos

**Families:**
- Roof drains, cleanouts, AAVs
- Fixtures completos

**Templates:**
- Plumbing template con sanitary/storm systems
