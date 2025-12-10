# Ejercicios Prácticos - Módulo 3: Diseño de Tuberías 3D

**Módulo:** 3 - Diseño de Tuberías 3D (Piping 3D)
**Total de Ejercicios:** 5 (uno por lección 11-15)
**Puntos Totales:** 500 puntos (100 puntos por ejercicio)
**Nivel:** Intermedio a Avanzado

---

## Instrucciones Generales

Estos ejercicios integran los conocimientos adquiridos en las Lecciones 11-15 del Módulo 3. Cada ejercicio simula un escenario real de ingeniería de plantas industriales y debe completarse usando AutoCAD Plant 3D 2026.

**Requisitos para Todos los Ejercicios:**

1. **Software:** AutoCAD Plant 3D 2026 instalado y configurado
2. **Project Setup:** Crear nuevo proyecto Plant 3D para cada ejercicio con configuración apropiada
3. **Estándares:** Usar estándares ASME B31.3 para diseño de tuberías
4. **Unidades:** Sistema métrico (mm, metros) preferido; imperial aceptable si consistente
5. **Documentación:** Cada ejercicio requiere entregables específicos detallados en cada sección

**Criterios de Evaluación:**

Cada ejercicio se evalúa en 100 puntos distribuidos en:
- **Diseño Técnico (40 puntos):** Correctness del diseño según códigos y best practices
- **Calidad de Modelado 3D (25 puntos):** Precisión del modelo 3D, componentes correctos
- **Documentación (20 puntos):** Completeness de drawings, BOM, reportes
- **Constructabilidad (15 puntos):** Diseño facilita fabricación e instalación

**Tiempo Estimado:**
- Ejercicio 11: 35 minutos
- Ejercicio 12: 40 minutos
- Ejercicio 13: 35 minutos
- Ejercicio 14: 45 minutos
- Ejercicio 15: 40 minutos
- **Total:** 195 minutos (3 horas 15 minutos)

---

## Ejercicio 11: Colocación y Configuración de Equipos en Planta Petroquímica

**Lección Relacionada:** Lección 11 - Configuración de Proyecto y Colocación de Equipos
**Duración:** 35 minutos
**Puntos:** 100 puntos
**Nivel:** Intermedio

### Escenario

Usted ha sido contratado como **Piping Designer** en proyecto de expansión de planta petroquímica que procesará 50,000 barriles por día de crudo ligero. Su tarea es colocar y configurar equipos principales en área de proceso designada "Unit 100 - Crude Distillation".

**Contexto del Proyecto:**
- Cliente: PetroMex S.A.
- Ubicación: Golfo de México
- Presupuesto de equipos: $12 millones USD
- Schedule: Fast-track (12 meses construction)
- Códigos aplicables: ASME B31.3, API 650, API 610

### Datos del Proyecto

**Área de Proceso:**
- Dimensiones: 40m (North-South) × 30m (East-West)
- Elevación de piso (grade): 0.0m
- Structural grid: 6m × 6m modules
- Coordenadas de esquina SW (origen): X=0, Y=0, Z=0

**Equipos a Colocar:**

**1. Bomba Centrífuga P-101 (Crude Feed Pump):**
- Tipo: Horizontal centrifugal pump, single stage
- Fabricante: Sulzer o equivalente
- Capacidad: 300 m³/h @ 15 bar discharge
- Motor: 75 kW, 1800 RPM
- Dimensiones (L×W×H): 2.5m × 1.2m × 1.5m
- Peso: 1,850 kg (operando)
- Base: Concrete foundation 3.5m × 2.0m × 0.8m high
- Ubicación propuesta: X=8.0m, Y=12.0m (centerline de bomba)

**Nozzles de P-101:**
- Suction: 10" (DN250), Class 150#, WNRF, Centerline elevation 1.2m, Orientation: West
- Discharge: 8" (DN200), Class 300#, WNRF, Centerline elevation 1.3m, Orientation: East
- Drain: 2" (DN50), NPT, Elevation 0.9m, Orientation: Down
- Vent: 3/4" (DN20), NPT, Elevation 1.6m, Orientation: Up

**2. Intercambiador de Calor E-105 (Crude Preheat Exchanger):**
- Tipo: Shell & Tube heat exchanger, horizontal
- Estándar: TEMA Type BEM
- Fabricante: Alfa Laval o equivalente
- Duty: 8.5 MW (heat transfer)
- Shell side: Crude oil @ 180°C, 12 bar
- Tube side: Hot oil @ 250°C, 8 bar
- Dimensiones (L×W×H): 8.0m × 1.8m × 2.2m (incluyendo channel heads)
- Peso: 12,500 kg (operando con fluidos)
- Soporte: Steel saddles en dos puntos (cada saddle 1.5m × 1.0m footprint)
- Elevación: Centerline @ 3.5m (sobre estructura elevada)
- Ubicación propuesta: X=20.0m, Y=15.0m

**Nozzles de E-105:**

*Shell Side (Crude Oil):*
- Inlet N-1: 8" (DN200), Class 300#, WNRF, Elevation 3.5m, Orientation: North
- Outlet N-2: 8" (DN200), Class 300#, WNRF, Elevation 3.5m, Orientation: South
- Drain N-3: 2" (DN50), Class 150#, WNRF, Elevation 2.8m, Orientation: Down
- Vent N-4: 1" (DN25), Class 150#, WNRF, Elevation 4.2m, Orientation: Up

*Tube Side (Hot Oil):*
- Inlet N-5: 6" (DN150), Class 300#, WNRF, Elevation 3.8m, Orientation: West
- Outlet N-6: 6" (DN150), Class 300#, WNRF, Elevation 3.8m, Orientation: East
- Drain N-7: 1" (DN25), Class 150#, WNRF, Elevation 3.0m, Orientation: Down

**3. Tanque de Almacenamiento TK-102 (Crude Storage Tank):**
- Tipo: Vertical cylindrical storage tank, atmospheric
- Estándar: API 650
- Capacidad: 5,000 m³ (31,447 barrels)
- Dimensiones: Diameter 18.0m, Height 20.0m (shell), Total height 21.5m (con roof)
- Material: Carbon Steel A283 Grade C
- Peso: 185,000 kg (empty), 4,200,000 kg (full)
- Foundation: Concrete ring wall + sand pad
- Ubicación propuesta: X=35.0m, Y=8.0m (center de tank)
- Grade elevation: 0.0m (bottom de tank shell)

**Nozzles de TK-102:**

*Shell Nozzles:*
- Inlet N-101: 12" (DN300), Class 150#, WNRF, Elevation 18.5m (top fill), Orientation: Tangential (30° desde North)
- Outlet N-102: 16" (DN400), Class 150#, WNRF, Elevation 0.5m (bottom outlet), Orientation: East
- Emergency drain N-103: 8" (DN200), Class 150#, WNRF, Elevation 0.3m, Orientation: South

*Roof Nozzles:*
- Vent N-104: 24" (DN600), Open (atmospheric vent con flame arrestor), Elevation 21.5m, Center de roof
- Gauge hatch N-105: 18" (DN450), Manway, Elevation 21.5m, Offset 4m desde center

### Tareas

**Tarea 1: Project Setup (15 puntos)**

1. Crear nuevo proyecto Plant 3D:
   - Project name: "EJERCICIO-11-PetroMex-Unit100"
   - Location: Carpeta de trabajo del estudiante
   - Units: Metric (mm)

2. Configurar Project Properties:
   - Client: PetroMex S.A.
   - Project Number: PM-2024-U100
   - Project Phase: Detailed Design
   - Drawing Standards: ISO

3. Setup Piping Specifications:
   - Crear spec: "ASME-150#-CS-Welded" (Carbon Steel, Class 150, Welded)
   - Crear spec: "ASME-300#-CS-Welded" (Carbon Steel, Class 300, Welded)
   - Incluir en specs: Pipes (Schedule 40), Elbows 90° LR, Tees, Reducers, Flanges WNRF

4. Configurar Grid y Levels:
   - Grid spacing: 6000mm × 6000mm
   - Grid origin: X=0, Y=0
   - Levels: Grade (0.0m), El-1 (3.5m), El-2 (6.0m)

**Criterios de Evaluación Tarea 1:**
- Project creado correctamente: 5 puntos
- Specs configuradas con componentes apropiados: 5 puntos
- Grid y levels según especificaciones: 5 puntos

**Tarea 2: Colocación de Equipos (30 puntos)**

1. **Insertar Bomba P-101:**
   - Use Equipment Library o create custom equipment
   - Dimensions: 2.5m × 1.2m × 1.5m
   - Location: X=8000mm, Y=12000mm, Z=800mm (top de foundation)
   - Tag number: P-101
   - Description: "Crude Feed Pump, 300 m³/h, 15 bar"

2. **Configurar Nozzles de P-101:**
   - Crear 4 nozzles según especificaciones (suction, discharge, drain, vent)
   - Sizes, ratings, orientations correctas
   - Elevations precisas

3. **Insertar Heat Exchanger E-105:**
   - Dimensions: 8.0m × 1.8m × 2.2m
   - Location: X=20000mm, Y=15000mm, Centerline Z=3500mm
   - Support: Indicar saddle locations (2 saddles, spacing típicamente L/3 desde ends)
   - Tag: E-105
   - Description: "Crude Preheat Exchanger, 8.5 MW"

4. **Configurar Nozzles de E-105:**
   - Crear 7 nozzles (4 shell side + 3 tube side)
   - Verificar orientations según flow direction lógica

5. **Insertar Storage Tank TK-102:**
   - Dimensions: Diameter 18.0m, Height 20.0m shell
   - Location: X=35000mm, Y=8000mm (center), Z=0 (grade)
   - Roof: Cone roof, apex @ 21.5m
   - Tag: TK-102
   - Description: "Crude Storage Tank, 5000 m³, API 650"

6. **Configurar Nozzles de TK-102:**
   - 5 nozzles según specs
   - Nozzle N-101 @ elevation 18.5m (top fill)
   - Nozzle N-102 @ elevation 0.5m (bottom outlet)
   - Roof nozzles @ 21.5m

**Criterios de Evaluación Tarea 2:**
- P-101 correctamente placed y configured: 8 puntos
- E-105 correctamente placed y configured: 10 puntos
- TK-102 correctamente placed y configured: 12 puntos

**Tarea 3: Verificación de Clearances (20 puntos)**

1. **Equipment Spacing Verification:**
   - Verificar spacing entre P-101 y E-105:
     - Minimum clearance: 3.0m (permite mantenimiento de bomba)
   - Verificar spacing entre E-105 y TK-102:
     - Minimum clearance: 8.0m (safety distance desde tank)

2. **Maintenance Access:**
   - Verificar clearance alrededor de P-101:
     - Mínimo 1.5m en todos lados (motor removal, pump maintenance)
   - Verificar acceso a nozzles de E-105:
     - Channel heads: 2.0m clearance para bundle removal

3. **Tank Clearances:**
   - Verify TK-102 está dentro de área designada (40m × 30m)
   - Clearance a property line: Minimum 15m (API 650 requirement)

4. **Generar Clearance Report:**
   - Tools → Clearance Check
   - Report debe mostrar no violations

**Criterios de Evaluación Tarea 3:**
- Equipment spacings correctos: 10 puntos
- Maintenance clearances adecuados: 5 puntos
- Clearance report generado: 5 puntos

**Tarea 4: Equipment Schedule y Documentation (20 puntos)**

1. **Generar Equipment List:**
   - Project Manager → Reports → Equipment List
   - Lista debe incluir:
     - Tag numbers
     - Descriptions
     - Locations (X, Y, Z coordinates)
     - Dimensions
     - Weights (operating)

2. **Nozzle Orientation Drawings:**
   - Para cada equipo, generar nozzle orientation drawing:
     - Plan view mostrando nozzle orientations
     - Elevation view mostrando nozzle heights
     - Nozzle schedule table

3. **Equipment Layout Drawing:**
   - Crear plot plan (top view):
     - All equipment shown con tags
     - Grid lines visible
     - Dimensions key distances
     - North arrow, scale

**Criterios de Evaluación Tarea 4:**
- Equipment list completo y preciso: 8 puntos
- Nozzle orientation drawings (3 equipos): 8 puntos
- Equipment layout drawing: 4 puntos

**Tarea 5: Design Review y Optimization (15 puntos)**

1. **Safety Review:**
   - Verify escape routes (minimum 2 routes desde cada equipo área)
   - Tank dike: TK-102 debe tener containment dike (capacity 110% de tank)
   - Fire water access: Verify accessibility para fire trucks

2. **Constructability Review:**
   - Verify rigging access (crane paths para equipment installation)
   - E-105 @ elevation 3.5m: Verify structural support feasibility
   - Foundation sizes: Reasonable para soil bearing capacity (assume 200 kPa)

3. **Optimization Suggestions:**
   - Identificar potential improvements (si los hay):
     - Equipment relocations para better flow routing
     - Clearance optimization
   - Document suggestions en memo breve (100-200 palabras)

**Criterios de Evaluación Tarea 5:**
- Safety considerations verified: 6 puntos
- Constructability review completado: 5 puntos
- Optimization memo: 4 puntos

### Entregables

1. **Plant 3D Project File:** Carpeta completa del proyecto (DWG files, database)
2. **Equipment List Report:** PDF o Excel export
3. **Nozzle Orientation Drawings:** 3 drawings (uno por equipo)
4. **Equipment Layout Plan:** DWG + PDF export
5. **Design Review Memo:** Word o PDF (breve, 200 palabras)

### Notas Adicionales

- **Assumptions permitidas:** Si algún dato no especificado, documentar assumptions razonables
- **Estándares de referencia:** ASME B31.3, API 650, API 610 (consultar documentación online si necesario)
- **Collaboration:** Ejercicio individual (no team work)

---

## Ejercicio 12: Enrutamiento de Red de Tuberías en Sistema de Cooling Water

**Lección Relacionada:** Lección 12 - Enrutamiento de Tuberías y Creación de Líneas
**Duración:** 40 minutos
**Puntos:** 100 puntos
**Nivel:** Intermedio

### Escenario

Usted es **Senior Piping Designer** en proyecto de planta de generación eléctrica de ciclo combinado (800 MW). Su responsabilidad es diseñar el sistema completo de cooling water (agua de enfriamiento) que suministra 3 heat exchangers en área de condensadores.

**Contexto del Proyecto:**
- Cliente: ElectricGen Internacional
- Ubicación: Planta near coast (abundante agua de mar)
- Cooling water source: Seawater intake structure
- Flow rate total: 15,000 m³/h
- Temperature: 25°C (ambient seawater)
- Pressure: 6 bar @ pump discharge

### Datos del Sistema

**Cooling Water Header Principal:**
- Tag: CW-HEADER-001
- Size: 24" (DN600)
- Spec: ASME-150#-CS-Welded
- Material: Carbon Steel A106 Grade B, Schedule 40
- Service code: CW (Cooling Water)
- Ubicación: Pipe rack @ elevation 4.0m
- Orientation: North-South, 45 metros long
- Starting point (North end): X=10.0m, Y=50.0m, Z=4.0m
- Ending point (South end): X=10.0m, Y=5.0m, Z=4.0m

**Heat Exchangers to Connect:**

**1. Heat Exchanger E-201:**
- Location: X=18.0m, Y=42.0m
- Cooling water inlet nozzle N-1: 10" (DN250), Elevation 5.2m, Orientation: West (toward header)
- Flow requirement: 5,000 m³/h

**2. Heat Exchanger E-202:**
- Location: X=18.0m, Y=28.0m
- Cooling water inlet nozzle N-1: 10" (DN250), Elevation 5.5m, Orientation: West
- Flow requirement: 5,000 m³/h

**3. Heat Exchanger E-203:**
- Location: X=18.0m, Y=14.0m
- Cooling water inlet nozzle N-1: 8" (DN200), Elevation 5.0m, Orientation: West
- Flow requirement: 4,000 m³/h

**Obstáculos en Routing Path:**

**1. Existing Pipe Rack Structure:**
- Beams @ elevations: 2.5m, 4.0m, 5.5m, 7.0m
- Columns @ X=10m, spacing 6m intervals (Y=5m, 11m, 17m, 23m, 29m, 35m, 41m, 47m)
- Available routing elevations: 4.0m (main level), 5.5m (upper level)

**2. Electrical Cable Tray:**
- Route: Parallel a pipe rack, @ elevation 6.5m
- Width: 600mm
- Location: X=9.5m to X=10.5m (centerline X=10.0m)
- Minimum clearance required: 300mm

**3. Existing Steam Line:**
- Tag: ST-101
- Size: 12" (DN300)
- Route: Crosses area @ Y=35m, elevation 4.8m, running East-West
- Temperature: 280°C (hot line)
- Minimum clearance required: 500mm (prevent heat transfer to cold CW lines)

### Tareas

**Tarea 1: Route Planning y Design Strategy (15 puntos)**

1. **Analyze Layout:**
   - Sketch (hand-drawn o CAD) mostrando:
     - CW Header location
     - 3 heat exchangers
     - Obstacles (steam line, cable tray, structural)
   - Identify routing corridors available

2. **Determine Routing Strategy:**
   - Para cada branch line (3 total), definir:
     - Elevation óptima (evitar obstacles)
     - Routing path (direct vs detour alrededor de obstacles)
     - Connection point en header (distribuir branches along header)

3. **Calculate Slopes:**
   - CW lines deben tener slope para drainage
   - Minimum slope: 1:200 (0.5%) recomendado para CW
   - Determine slope direction: ¿Hacia header o hacia exchangers?
   - Justificar decision (considerando drain valve locations)

**Criterios de Evaluación Tarea 1:**
- Layout sketch claro: 5 puntos
- Routing strategy lógica y documentada: 6 puntos
- Slope calculations correctos: 4 puntos

**Tarea 2: Route Main CW Header (20 puntos)**

1. **Create CW Header Line:**
   - Tag: CW-HEADER-001
   - Size: 24" (DN600)
   - Spec: ASME-150#-CS-Welded
   - Service: CW
   - Start: X=10.0m, Y=50.0m, Z=4.0m (North end)
   - End: X=10.0m, Y=5.0m, Z=4.0m (South end)
   - Route: Straight North-South, 45m long

2. **Support Header:**
   - Supports @ structural beam locations (every 6m)
   - Type: Pipe shoes (header en rack horizontal)
   - Spacing verification:
     - ASME B31.3 max spacing para 24" SCH 40: ~10.4m
     - Actual spacing: 6m ✓ (adequate)
   - Insert supports en model @ Y=5m, 11m, 17m, 23m, 29m, 35m, 41m, 47m

3. **End Connections:**
   - North end: Cap o connection a pump discharge (assume cap para este ejercicio)
   - South end: Cap o future connection

**Criterios de Evaluación Tarea 2:**
- Header correctly routed: 10 puntos
- Supports correctly placed: 8 puntos
- End connections: 2 puntos

**Tarea 3: Route Branch Line CW-201 to E-201 (25 puntos)**

**Branch CW-201:**
- From: CW-HEADER-001 @ Y=42.0m
- To: E-201 nozzle N-1 @ X=18.0m, Y=42.0m, Z=5.2m
- Size: 10" (DN250)
- Spec: ASME-150#-CS-Welded

**Routing:**

1. **Branch Takeoff desde Header:**
   - Location @ Y=42.0m (alineado con E-201)
   - Insert reducing tee: 24"×24"×10"
   - Branch direction: East (toward exchanger)
   - Orientation: Horizontal initially

2. **Horizontal Run:**
   - From header @ X=10.0m, Z=4.0m
   - Route East toward exchanger
   - Must avoid obstacles:
     - No conflict con cable tray @ Z=6.5m (branch @ Z=4.0m ✓)
     - No conflict con steam line @ Y=35m (branch @ Y=42m ✓)

3. **Elevation Change:**
   - Header @ Z=4.0m
   - Exchanger nozzle @ Z=5.2m
   - ΔZ = 1.2m (need to rise)
   - Options:
     - **Option A:** Rise verticalmente near header, then horizontal run
     - **Option B:** Horizontal run majority, rise near exchanger
   - Select Option B (minimiza vertical pipe, easier support)

4. **Routing Sequence:**
   - Horizontal from header: 6.0m East (X=10m → X=16m)
   - 90° elbow up (vertical rise)
   - Vertical segment: 1.2m (Z=4.0m → Z=5.2m)
   - 90° elbow East (toward exchanger)
   - Horizontal final: 2.0m (X=16m → X=18m)
   - Connect to nozzle N-1

5. **Apply Slope:**
   - Horizontal segments con slope 1:200 draining toward header (para maintenance drainage)
   - Vertical segment: No slope (vertical)

6. **Supports:**
   - Support @ header tee (within 0.5m de branch point)
   - Support @ base de vertical rise (guide type)
   - Support @ exchanger nozzle area (within 1m de nozzle)

**Criterios de Evaluación Tarea 3:**
- Branch takeoff correcto: 5 puntos
- Routing path evita obstacles: 8 puntos
- Elevation change ejecutado correctamente: 6 puntos
- Slope aplicada: 3 puntos
- Supports placed appropriately: 3 puntos

**Tarea 4: Route Branch Lines CW-202 y CW-203 (30 puntos)**

**Branch CW-202 to E-202:**
- Similar a CW-201 pero:
  - Takeoff location: Y=28.0m
  - Exchanger @ Y=28.0m, elevation 5.5m (ΔZ=1.5m)
- Execute complete routing siguiendo same strategy

**Branch CW-203 to E-203:**
- Similar pero:
  - Size: 8" (DN200) (menor flow)
  - Takeoff location: Y=14.0m
  - Exchanger @ Y=14.0m, elevation 5.0m (ΔZ=1.0m)

**Instructions:**

1. Route ambas branch lines usando orthogonal routing mode
2. Apply slopes 1:200 draining toward header
3. Avoid obstacles (steam line @ Y=35m es crítico - verificar clearance)
4. Insert supports según ASME B31.3 spacing

**Special Consideration - Steam Line Clearance:**

Branch CW-202 @ Y=28m está clear de steam line @ Y=35m (7m separation ✓)

Branch CW-203 @ Y=14m también clear (21m separation ✓)

**Criterios de Evaluación Tarea 4:**
- CW-202 routed correctly: 15 puntos
- CW-203 routed correctly: 15 puntos

**Tarea 5: Verification y Documentation (10 puntos)**

1. **Interference Check:**
   - Tools → Interference Check
   - Scope: All CW lines + obstacles
   - Verify zero clashes
   - Generate clash report (should show 0 clashes)

2. **Slope Verification:**
   - Para cada branch line, verify slope:
     - Tools → Slope Annotation
     - Verify slope indicators show correct direction (toward header)

3. **Generate Isometrics:**
   - Select each branch line (CW-201, CW-202, CW-203)
   - Tools → Generate Isometric
   - Produces 3 isometric drawings para fabrication

4. **Bill of Materials:**
   - Generate BOM para complete CW system
   - Should include:
     - Pipe: 24" header, 10" branches (2), 8" branch (1)
     - Fittings: Tees, elbows, caps
     - Flanges (if used)
     - Quantities de cada item

**Criterios de Evaluación Tarea 5:**
- Interference check executed, 0 clashes: 3 puntos
- Slope verification: 2 puntos
- Isometrics generated (3): 3 puntos
- BOM complete: 2 puntos

### Entregables

1. **Plant 3D Model:** Complete project con header y 3 branch lines routed
2. **Layout Drawing:** Plan view y section view showing routing
3. **Isometric Drawings:** 3 isos (CW-201-ISO, CW-202-ISO, CW-203-ISO)
4. **Bill of Materials:** Excel o PDF export
5. **Clash Report:** Verification de zero interferences
6. **Design Memo:** Breve explanation de routing strategy y key decisions (200 palabras)

### Evaluation Summary

- Tarea 1 (Planning): 15 puntos
- Tarea 2 (Header): 20 puntos
- Tarea 3 (CW-201): 25 puntos
- Tarea 4 (CW-202, CW-203): 30 puntos
- Tarea 5 (Verification): 10 puntos
- **Total:** 100 puntos

---

## Ejercicio 13: Sistema Completo con Válvulas y Accesorios - Línea de Proceso Químico

**Lección Relacionada:** Lección 13 - Accesorios, Válvulas y Componentes Especiales
**Duración:** 35 minutos
**Puntos:** 100 puntos
**Nivel:** Intermedio-Avanzado

### Escenario

Usted es **Lead Piping Designer** en planta química que produce polietileno. Debe diseñar línea completa de proceso que transporta etileno líquido desde reactor hasta tanque de almacenamiento, incluyendo todas válvulas de control, seguridad, y accesorios especiales requeridos por el proceso.

**Contexto del Proyecto:**
- Cliente: PolyChem Industries
- Proceso: Polymerization de ethylene
- Servicio: Ethylene líquido (C₂H₄)
- Peligrosidad: Flammable, extremadamente cold (-104°C)
- Código aplicable: ASME B31.3 (Severe Cyclic Conditions)

### Datos de la Línea

**Line Tag:** ET-301-6"-300#-SS
- Service: Ethylene liquid
- Fluid: Ethylene (C₂H₄)
- Phase: Liquid
- Temperature: -104°C (cryogenic)
- Operating Pressure: 45 bar (650 psig)
- Design Pressure: 60 bar (870 psig) - Class 300 rating
- Design Temperature: -120°C to +50°C
- Flow rate: 25,000 kg/h
- Size: 6" (DN150)
- Material: Stainless Steel 304L (cryogenic service)
- Spec: ASME-300#-SS-Welded
- Insulation: 100mm polyurethane foam (cryogenic insulation)

**Start Point:** Reactor R-301 outlet nozzle
- Location: X=25.0m, Y=40.0m, Z=8.5m
- Nozzle: 6", Class 300#, WNRF, Orientation: South

**End Point:** Storage Tank TK-305 inlet nozzle
- Location: X=25.0m, Y=10.0m, Z=12.0m
- Nozzle: 6", Class 300#, WNRF, Orientation: North

**Distance:** 30 meters (Y-direction)

### Componentes Requeridos

**Válvulas Obligatorias:**

**1. Block Valve @ Reactor (V-301A):**
- Type: Gate valve
- Size: 6"
- Rating: Class 300#
- Material: SS 304L, cryogenic trim
- Ends: Flanged WNRF
- Operator: Gear operator (manual)
- Purpose: Isolation de reactor para maintenance
- Location: 2m downstream de reactor nozzle

**2. Check Valve (CV-301):**
- Type: Swing check valve
- Size: 6"
- Rating: Class 300#
- Material: SS 304L
- Purpose: Prevent backflow hacia reactor
- Location: 1m downstream de block valve V-301A

**3. Control Valve (FCV-301):**
- Type: Globe valve, pneumatic actuated
- Size: 4" (reduced from 6" line)
- Rating: Class 300#
- Trim: Characterized V-port (linear flow)
- Actuator: Pneumatic fail-close (FC)
- Purpose: Flow control to tank
- Location: Mid-point de routing (~15m from reactor)
- **Requires:** 6"×4" reducer before valve, 4"×6" reducer after valve

**4. Block Valve @ Tank (V-301B):**
- Type: Ball valve (quick shutoff)
- Size: 6"
- Rating: Class 300#
- Material: SS 304L
- Ends: Flanged WNRF
- Operator: Electric actuator con ESD (Emergency Shutdown) capability
- Purpose: Emergency isolation de tank
- Location: 2m upstream de tank nozzle

**Componentes Especiales:**

**1. Strainer (ST-301):**
- Type: Y-strainer, cryogenic service
- Size: 6"
- Rating: Class 300#
- Screen: 40 mesh (protect control valve downstream)
- Location: 1m upstream de control valve FCV-301
- **Includes:** Flanged blowdown connection 2"

**2. Flame Arrestor (FA-301):**
- Type: In-line detonation flame arrestor
- Size: 6"
- Rating: Class 300#
- Purpose: Prevent flame propagation en ethylene vapor space
- Location: Vapor return line desde tank (separate small line 2")
- **Note:** Este componente va en separate vapor line, no en main liquid line

**3. Expansion Joint (EJ-301):**
- Type: Metal bellows expansion joint, cryogenic
- Size: 6"
- Rating: Class 300#
- Movement: Axial 50mm (thermal contraction @ -104°C)
- Location: Immediately after reactor nozzle (before V-301A)
- Purpose: Absorb thermal contraction, protect reactor nozzle

**Accesorios de Tubería:**

- **Elbows:** Long radius 90° elbows únicamente (minimize pressure drop)
- **Tees:** Para vent y drain connections
- **Reducers:** Eccentric reducers (flat side up para avoid gas pockets)
- **Flanges:** WNRF (weld neck raised face) todas connections

**Venteos y Drenajes:**

**Vent High Point (VH-301):**
- Location: Highest point en routing
- Connection: 3/4" threaded nipple + valve
- Purpose: Purging durante startup

**Drain Low Point (DL-301):**
- Location: Lowest point en routing
- Connection: 2" flanged tee + drain valve
- Purpose: Drainage para maintenance (debe drenar a safe disposal)

### Tareas

**Tarea 1: Routing de Línea Principal (25 puntos)**

1. **Route Line ET-301:**
   - From: Reactor R-301 @ Z=8.5m
   - To: Tank TK-305 @ Z=12.0m
   - Elevation change: +3.5m (upward)
   - Horizontal distance: 30m (South)

2. **Routing Strategy:**
   - Option A: Route South horizontally @ Z=8.5m, then rise vertically near tank
   - Option B: Rise vertically near reactor, then route horizontally @ Z=12.0m
   - **Select Option B** (reasoning: liquid line, prefer high point near tank end para venteo)

3. **Execute Routing:**
   - Start @ reactor nozzle
   - Vertical rise: 3.5m (use 2 × 90° LR elbows + vertical segment)
   - Horizontal run @ Z=12.0m: 30m South
   - Connect to tank nozzle
   - Use orthogonal routing mode

4. **Apply Slope:**
   - Horizontal segment: Slope 1:100 toward reactor (para drainage)
   - **Rationale:** In maintenance scenario, line drains back toward reactor side

**Criterios de Evaluación Tarea 1:**
- Routing path correct: 10 puntos
- Elevation handling: 8 puntos
- Slope applied: 7 puntos

**Tarea 2: Insert Expansion Joint y Block Valve @ Reactor (15 puntos)**

1. **Expansion Joint EJ-301:**
   - Insert immediately after reactor nozzle (within 0.5m)
   - Type: Metal bellows, axial movement 50mm
   - Configure properties:
     - Tag: EJ-301
     - Movement capability: 50mm
     - Temperature: -120°C to +50°C

2. **Block Valve V-301A:**
   - Insert 2m downstream de reactor (after expansion joint)
   - Type: Gate valve, 6", Class 300#
   - Flanged WNRF both ends
   - Gear operator
   - Configure:
     - Tag: V-301A
     - Description: "Gate Valve, 6", 300#, SS, Cryogenic, Gear Op"
     - Normal position: Open
     - Stem orientation: Vertical up (accessibility)

**Criterios de Evaluación Tarea 2:**
- Expansion joint correctly placed y configured: 8 puntos
- Block valve V-301A correctly inserted: 7 puntos

**Tarea 3: Insert Check Valve, Strainer, y Control Valve (30 puntos)**

1. **Check Valve CV-301:**
   - Location: 1m downstream de V-301A
   - Type: Swing check, 6", Class 300#
   - **Critical:** Verify flow direction arrow points away from reactor
   - Configure tag: CV-301

2. **Strainer ST-301:**
   - Location: Mid-point de línea (~15m from reactor)
   - Before control valve FCV-301
   - Type: Y-strainer, 6", 40 mesh
   - **Includes:** 2" blowdown connection
     - Add tee for blowdown
     - 2" drain valve en blowdown line
   - Configure:
     - Tag: ST-301
     - Screen size: 40 mesh
     - Blowdown valve tag: DV-301A

3. **Control Valve FCV-301 con Reducers:**
   - Location: 1m downstream de strainer

   **Insert Sequence:**
   a. **Eccentric Reducer 6"×4":**
      - Flat side UP (avoid gas pocket)
      - Reduces line from 6" to 4"

   b. **Control Valve FCV-301:**
      - Size: 4"
      - Type: Globe valve, V-port trim
      - Actuator: Pneumatic, fail-close (FC)
      - Flanged ends
      - Configure:
        - Tag: FCV-301
        - Function: Flow control
        - Actuator type: Pneumatic FC
        - Control signal: 4-20mA

   c. **Eccentric Reducer 4"×6":**
      - Flat side UP
      - Expands line back to 6"

4. **Verify Component Spacing:**
   - Between CV-301 y ST-301: Minimum 3m (straight run para check valve performance)
   - Between ST-301 y FCV-301: 1m (adequate)
   - After FCV-301: Minimum 5× pipe diameter (5×150mm = 750mm) straight run

**Criterios de Evaluación Tarea 3:**
- Check valve correct: 7 puntos
- Strainer con blowdown: 10 puntos
- Control valve con reducers: 13 puntos

**Tarea 4: Insert Block Valve @ Tank y Vent/Drain Connections (20 puntos)**

1. **Block Valve V-301B:**
   - Location: 2m upstream de tank nozzle
   - Type: Ball valve, 6", Class 300#
   - Electric actuator con ESD (Emergency Shutdown) interlock
   - Flanged ends
   - Configure:
     - Tag: V-301B
     - Description: "Ball Valve, 6", 300#, SS, Electric Act, ESD"
     - Normal position: Open
     - ESD function: Closes on high-level alarm @ tank

2. **Vent Connection VH-301:**
   - Identify highest point en routing
   - Typically: Top de vertical rise near tank (Z=12.0m)
   - Insert:
     - Tee branch UP
     - 3/4" nipple
     - 3/4" threaded gate valve
     - Cap
   - Configure:
     - Tag: VH-301
     - Purpose: Startup purge, venting

3. **Drain Connection DL-301:**
   - Identify lowest point en routing
   - Typically: Bottom de horizontal run near reactor side
   - Insert:
     - Tee branch DOWN
     - 2" × 3/4" reducer (transition to smaller drain line)
     - 2" gate valve
     - Cap o connection a drain header
   - Configure:
     - Tag: DL-301
     - Purpose: Maintenance drainage

**Criterios de Evaluación Tarea 4:**
- Block valve V-301B correct: 10 puntos
- Vent VH-301: 5 puntos
- Drain DL-301: 5 puntos

**Tarea 5: Configure Properties para BOM y Documentation (10 puntos)**

1. **Component Properties:**
   - Para cada component (válvulas, strainer, expansion joint):
     - Verify tag numbers assigned
     - Descriptions complete
     - Material = Stainless Steel 304L
     - Rating = Class 300#
     - Operating temp = -104°C
     - Add unit cost estimates:
       - Expansion joint: $3,500
       - Gate valve 6": $2,800
       - Check valve 6": $1,900
       - Y-strainer 6": $1,200
       - Control valve 4" actuated: $8,500
       - Ball valve 6" actuated: $4,200

2. **Generate BOM:**
   - Tools → Reports → Bill of Materials
   - Scope: Line ET-301 complete
   - BOM debe incluir:
     - Pipe: 6" SS 304L SCH 40, total length
     - Elbows: Quantity, size
     - Tees: Quantity (para vent, drain, strainer blowdown)
     - Reducers: 2 eccentric 6×4, 2 eccentric 4×6
     - Valves: 5 total (2 gate, 1 check, 1 globe control, 1 ball)
     - Strainer: 1
     - Expansion joint: 1
     - Flanges: Total quantity WNRF 6" y 4"
     - Bolting: Bolt sets for all flanges
     - Total estimated cost

3. **Generate Isometric:**
   - Select complete line ET-301
   - Generate isometric drawing
   - ISO debe mostrar:
     - All components con tags
     - Dimensions end-to-end
     - Bill of materials
     - Weld map (field welds vs shop welds)

**Criterios de Evaluación Tarea 5:**
- Component properties configured: 4 puntos
- BOM generated y complete: 4 puntos
- Isometric drawing: 2 puntos

### Entregables

1. **Plant 3D Model:** Line ET-301 completa con todos componentes
2. **Isometric Drawing:** ET-301-ISO-001 (PDF)
3. **Bill of Materials:** Excel export con costs
4. **Component Data Sheets:** Brief specs para critical components (expansion joint, control valve)
5. **Design Narrative:** 300 palabras explaining key design decisions (material selection SS, expansion joint necessity, control valve sizing)

### Evaluation Summary

- Tarea 1 (Routing): 25 puntos
- Tarea 2 (EJ + V-301A): 15 puntos
- Tarea 3 (CV, Strainer, FCV): 30 puntos
- Tarea 4 (V-301B, Vent, Drain): 20 puntos
- Tarea 5 (BOM): 10 puntos
- **Total:** 100 puntos

---

## Ejercicio 14: Diseño de Sistema de Soportes - Pipe Rack de 20 Metros

**Lección Relacionada:** Lección 14 - Soportes de Tubería y Soportería
**Duración:** 45 minutos
**Puntos:** 100 puntos
**Nivel:** Avanzado

### Escenario

Usted es **Pipe Support Design Specialist** en proyecto de refinería que procesa 150,000 barriles por día. Su responsabilidad es diseñar el sistema completo de soportes para sección de pipe rack de 20 metros que contiene 5 líneas de diferentes tamaños y servicios.

**Contexto del Proyecto:**
- Cliente: Refinery Expansion Project - Gulf Coast
- Location: High seismic zone (Zona 4)
- Temperature range: -20°C winter to +45°C summer
- Wind load: 120 km/h design wind
- Código: ASME B31.3, AISC Steel Construction Manual, MSS-SP-58

### Datos del Pipe Rack

**Rack Geometry:**
- Length: 20 metros (North-South direction)
- Width: 4 metros (East-West)
- Elevation: 6.0m above grade (top de rack beams)
- Structural grid: Columns every 5m (@ 0m, 5m, 10m, 15m, 20m positions)
- Beams: W12×53 (wide flange) @ elevation 6.0m, spanning North-South

**Lines to Support:**

**1. Line HC-401 (Heavy Crude):**
- Size: 16" (DN400)
- Spec: ASME-150#-CS-Welded
- Schedule: 40 (wall thickness 12.7mm)
- Service: Heavy crude oil @ 120°C
- Operating pressure: 15 bar
- Insulation: 75mm mineral wool
- Route: Entire 20m length, centerline @ X=1.0m
- Weight:
  - Pipe: 78 kg/m
  - Crude (SG=0.95): π×(0.387m)²/4 × 950 kg/m³ = 112 kg/m
  - Insulation: 35 kg/m
  - **Total: 225 kg/m**

**2. Line ST-205 (High Pressure Steam):**
- Size: 10" (DN250)
- Spec: ASME-600#-CS-Welded
- Schedule: 80 (high pressure)
- Service: Superheated steam @ 450°C, 80 bar
- Insulation: 100mm calcium silicate
- Route: Entire 20m length, centerline @ X=1.8m
- Weight:
  - Pipe: 55 kg/m
  - Steam (low density): ~5 kg/m (negligible)
  - Insulation: 40 kg/m
  - **Total: 100 kg/m**
- **Special:** Requiere spring hangers (significant thermal expansion)

**3. Line CW-302 (Cooling Water):**
- Size: 12" (DN300)
- Spec: ASME-150#-CS-Welded
- Schedule: 40
- Service: Cooling water @ 30°C
- No insulation
- Route: Entire 20m length, centerline @ X=2.5m
- Weight:
  - Pipe: 50 kg/m
  - Water: π×(0.305m)²/4 × 1000 kg/m³ = 73 kg/m
  - **Total: 123 kg/m**

**4. Line FG-108 (Fuel Gas):**
- Size: 6" (DN150)
- Spec: ASME-300#-CS-Welded
- Schedule: 40
- Service: Fuel gas @ 35°C, 25 bar
- No insulation
- Route: Entire 20m length, centerline @ X=3.2m
- Weight:
  - Pipe: 28 kg/m
  - Gas (low density): ~2 kg/m (negligible)
  - **Total: 30 kg/m**

**5. Line IA-115 (Instrument Air):**
- Size: 3" (DN80)
- Spec: ASME-150#-CS-Welded
- Schedule: 40
- Service: Dry instrument air @ 25°C, 7 bar
- No insulation
- Route: Entire 20m length, centerline @ X=3.8m
- Weight:
  - Pipe: 11 kg/m
  - Air: negligible
  - **Total: 11 kg/m**

**Heavy Concentrated Loads:**

**Gate Valve V-401:**
- Location: Line HC-401 @ position 12m
- Size: 16", Class 150#, Flanged, Gear operated
- Weight: 380 kg

**Control Valve FCV-205:**
- Location: Line ST-205 @ position 8m
- Size: 10", Class 600#, Actuated
- Weight: 220 kg

### Tareas

**Tarea 1: Calculate Support Spacing y Locations (20 puntos)**

**Para Cada Línea:**

1. **Determine ASME B31.3 Maximum Spacing:**

Consultar ASME B31.3 Appendix S o usar values de Lección 14:

- 16" Schedule 40: Max ~8.5m
- 10" Schedule 80: Max ~7.0m (reduced por high temp)
- 12" Schedule 40: Max ~7.3m
- 6" Schedule 40: Max ~5.2m
- 3" Schedule 40: Max ~3.7m

2. **Design Spacing (Align con Structural Grid):**

Structural columns @ 0m, 5m, 10m, 15m, 20m (spacing = 5m)

**HC-401 (16"):**
- Max allowable: 8.5m
- Structural: 5m ✓ (adequate)
- **Supports @ 0m, 5m, 10m, 15m, 20m** (5 supports)

**ST-205 (10"):**
- Max allowable: 7.0m (con correction para 450°C: reduce 20% = 5.6m)
- Structural: 5m ✓ (adequate)
- **Supports @ 0m, 5m, 10m, 15m, 20m** (5 supports)
- **Type:** Spring hangers (thermal expansion)

**CW-302 (12"):**
- Max allowable: 7.3m
- Structural: 5m ✓
- **Supports @ 0m, 5m, 10m, 15m, 20m** (5 supports)

**FG-108 (6"):**
- Max allowable: 5.2m
- Structural: 5m ✓ (barely adequate)
- **Supports @ 0m, 5m, 10m, 15m, 20m** (5 supports)

**IA-115 (3"):**
- Max allowable: 3.7m
- Structural: 5m ✗ (exceeds allowable!)
- **Solution:** Intermediate supports needed
- **Supports @ 0m, 2.5m, 5m, 7.5m, 10m, 12.5m, 15m, 17.5m, 20m** (9 supports @ 2.5m spacing)

3. **Document Support Schedule:**

Crear tabla:

| Line | Size | Spacing Design | Max Allowable | Support Locations | Qty |
|------|------|----------------|---------------|-------------------|-----|
| HC-401 | 16" | 5m | 8.5m | 0,5,10,15,20m | 5 |
| ST-205 | 10" | 5m | 5.6m | 0,5,10,15,20m | 5 |
| CW-302 | 12" | 5m | 7.3m | 0,5,10,15,20m | 5 |
| FG-108 | 6" | 5m | 5.2m | 0,5,10,15,20m | 5 |
| IA-115 | 3" | 2.5m | 3.7m | 0,2.5,5,...,20m | 9 |

**Criterios de Evaluación Tarea 1:**
- ASME spacing correctamente determined: 8 puntos
- Design spacing aligned con structure: 6 puntos
- Support schedule documented: 6 puntos

**Tarea 2: Calculate Loads en Each Support (25 puntos)**

**For Each Line, Calculate Typical Support Load:**

**Formula:** P = W × L

Donde:
- W = Weight per meter (kg/m)
- L = Spacing between supports (m)

**HC-401:**
- W = 225 kg/m
- L = 5m
- **P_typical = 225 × 5 = 1,125 kg = 11.0 kN**

**Support @ 12m (con valve V-401):**
- Pipe load: 1,125 kg
- Valve load: 380 kg
- **P_total = 1,505 kg = 14.8 kN**

**ST-205:**
- W = 100 kg/m
- L = 5m
- **P_typical = 500 kg = 4.9 kN**

**Support @ 8m (con valve FCV-205):**
- Pipe load: 500 kg
- Valve load: 220 kg
- **P_total = 720 kg = 7.1 kN**

**CW-302:**
- W = 123 kg/m
- L = 5m
- **P = 615 kg = 6.0 kN**

**FG-108:**
- W = 30 kg/m
- L = 5m
- **P = 150 kg = 1.5 kN**

**IA-115:**
- W = 11 kg/m
- L = 2.5m
- **P = 27.5 kg = 0.27 kN**

**Apply Safety Factor (1.5×):**

Design loads = Operating loads × 1.5

**Design Loads:**
- HC-401 typical: 11.0 × 1.5 = **16.5 kN**
- HC-401 @ valve: 14.8 × 1.5 = **22.2 kN**
- ST-205 typical: 4.9 × 1.5 = **7.4 kN**
- ST-205 @ valve: 7.1 × 1.5 = **10.7 kN**
- CW-302: 6.0 × 1.5 = **9.0 kN**
- FG-108: 1.5 × 1.5 = **2.3 kN**
- IA-115: 0.27 × 1.5 = **0.4 kN**

**Criterios de Evaluación Tarea 2:**
- Operating loads correctly calculated: 10 puntos
- Concentrated loads (valves) included: 8 puntos
- Design loads con safety factor: 7 puntos

**Tarea 3: Select Support Types y Insert en Model (30 puntos)**

**Support Type Selection:**

**HC-401 (16" Heavy Crude @ 120°C):**
- Type: **Pipe Shoes** (heavy line, resting en rack beams)
- Design: Sliding shoes (allow thermal expansion)
- Slide interface: PTFE slide plates
- Material: Carbon steel saddle + base plate
- **Insert:**
  - 5 shoes @ 0m, 5m, 10m, 15m, 20m
  - Shoe @ 12m: Heavy-duty (extra load de valve)
  - Tags: 100-S-001 through 100-S-005

**ST-205 (10" Steam @ 450°C):**
- Type: **Spring Hangers** (high temperature, significant thermal expansion)
- Calculate thermal growth:
  - ΔT = 450°C - 20°C = 430°C
  - α (CS) = 0.012 mm/m/°C
  - Vertical movement estimate: ~30-50mm (depends en routing geometry)
- Spring type: Variable spring hangers (load variation ±20% acceptable)
- **Insert:**
  - 5 spring hangers @ 0m, 5m, 10m, 15m, 20m
  - Spring @ 8m: Higher capacity (valve load)
  - Load capacity: Typical 7.4 kN, @ valve 10.7 kN
  - Tags: 100-SH-001 through 100-SH-005

**CW-302 (12" Cooling Water):**
- Type: **Pipe Shoes** (standard, low temp)
- Design: Fixed shoes (minimal thermal expansion @ 30°C)
- **Insert:**
  - 5 shoes @ 0m, 5m, 10m, 15m, 20m
  - Tags: 100-S-006 through 100-S-010

**FG-108 (6" Fuel Gas):**
- Type: **Pipe Shoes** o **Adjustable Hangers**
- Decision: Use shoes (rack-mounted)
- **Insert:**
  - 5 shoes @ 0m, 5m, 10m, 15m, 20m
  - Tags: 100-S-011 through 100-S-015

**IA-115 (3" Instrument Air):**
- Type: **U-bolt Clamps** (small line, no welding)
- Mount: Attached to structural members o clamped to larger pipes
- **Insert:**
  - 9 clamps @ 0m, 2.5m, 5m, ..., 20m
  - Tags: 100-C-001 through 100-C-009

**Execution en Plant 3D:**

1. Select each pipe line
2. Insert supports @ calculated locations
3. Configure support properties:
   - Tag numbers
   - Type (shoe, spring hanger, clamp)
   - Load capacity
   - Material specifications

**Special Supports:**

**Anchor Points:**
- **Anchor @ 0m:** Fixed point (inicio de rack section)
  - All lines anchored here (prevents longitudinal movement)
  - Heavy structural frame required
  - Tag: 100-A-001

**Guides:**
- **Guide @ 5m, 15m:** Control lateral movement
  - Especially para ST-205 (steam line) - guide thermal expansion direction
  - Tags: 100-G-001, 100-G-002

**Criterios de Evaluación Tarea 3:**
- Support types appropriately selected: 10 puntos
- Supports inserted @ correct locations: 12 puntos
- Tags y properties configured: 8 puntos

**Tarea 4: Calculate Thermal Expansion y Verify Spring Hanger Design (15 puntos)**

**Focus: Steam Line ST-205**

**1. Calculate Thermal Expansion:**

- Line length: 20m
- Operating temp: 450°C
- Installation temp: 20°C
- ΔT = 430°C
- α (CS) = 0.012 mm/m/°C

**Longitudinal expansion:**
ΔL = α × L × ΔT = 0.012 × 20 × 430 = **103.2 mm = 10.3 cm**

**Vertical expansion (depends en routing):**
Assume routing has vertical elbows que translate horizontal expansion to vertical movement.
Estimate vertical movement @ support: ~40mm

**2. Spring Hanger Sizing:**

**For Support @ 10m (mid-span, typical):**

- Operating load: 4.9 kN
- Design load: 7.4 kN
- Vertical travel: 40mm
- **Spring selection:**
  - Variable spring hanger
  - Capacity: 8 kN (covers 7.4 kN design)
  - Travel: 50mm (covers 40mm movement)
  - Load variation: ±18% (acceptable)

**Manufacturer selection:** Lisega Type 25 o equivalent

**3. Verify All Spring Hangers:**

Create table:

| Location | Operating Load | Design Load | Travel | Spring Model | Cost Estimate |
|----------|----------------|-------------|---------|--------------|---------------|
| 0m | 4.9 kN | 7.4 kN | 40mm | Lisega-25-8kN | $1,800 |
| 5m | 4.9 kN | 7.4 kN | 40mm | Lisega-25-8kN | $1,800 |
| 8m | 7.1 kN | 10.7 kN | 40mm | Lisega-25-12kN | $2,200 |
| 10m | 4.9 kN | 7.4 kN | 40mm | Lisega-25-8kN | $1,800 |
| 15m | 4.9 kN | 7.4 kN | 40mm | Lisega-25-8kN | $1,800 |
| 20m | 4.9 kN | 7.4 kN | 40mm | Lisega-25-8kN | $1,800 |

**Total spring hanger cost: $11,200**

**Criterios de Evaluación Tarea 4:**
- Thermal expansion calculated: 6 puntos
- Spring hanger sizing: 6 puntos
- Verification table: 3 puntos

**Tarea 5: Generate Support BOM y Cost Estimate (10 puntos)**

**Generate Bill of Materials:**

Tools → Reports → Support Bill of Materials

**BOM Should Include:**

**Structural Steel:**
- Saddles para pipe shoes (various sizes)
- Base plates
- Stiffeners, gussets
- Total weight estimate: ~2,500 kg @ $1.20/kg = $3,000

**Hardware:**
- Anchor bolts: 3/4" × 24 units = $192
- U-bolts para clamps: 1/2" × 18 units = $90
- Slide plates PTFE: 200×200mm × 15 units = $675

**Manufactured Components:**
- Spring hangers: 5 units, $11,200 (calculated above)
- Pipe shoes (standard): 15 units @ $280 avg = $4,200
- U-bolt clamps: 9 units @ $45 = $405
- Anchor frame: 1 unit custom = $3,500

**Labor Estimates:**
- Fabrication: 180 hours @ $55/hr = $9,900
- Installation: 120 hours @ $65/hr = $7,800

**Total Project Cost:**

| Category | Cost |
|----------|------|
| Structural Steel | $3,000 |
| Hardware | $957 |
| Spring Hangers | $11,200 |
| Shoes y Clamps | $4,605 |
| Anchor | $3,500 |
| Fabrication | $9,900 |
| Installation | $7,800 |
| **TOTAL** | **$40,962** |

**Cost per meter:** $40,962 / 20m = **$2,048/m**

(Typical para rack con hot lines y spring hangers)

**Criterios de Evaluación Tarea 5:**
- BOM generated y complete: 5 puntos
- Cost estimate realistic: 5 puntos

### Entregables

1. **Plant 3D Model:** Complete pipe rack con 5 lines y all supports placed
2. **Support Schedule:** Table listing all supports con locations, types, loads
3. **Spring Hanger Calculation Sheet:** Thermal expansion calcs, spring sizing
4. **Support Bill of Materials:** Excel export con quantities y costs
5. **Support Drawings:** Plan y elevation views showing support locations
6. **Cost Summary:** Total project cost breakdown

### Evaluation Summary

- Tarea 1 (Spacing): 20 puntos
- Tarea 2 (Loads): 25 puntos
- Tarea 3 (Insert supports): 30 puntos
- Tarea 4 (Thermal/springs): 15 puntos
- Tarea 5 (BOM): 10 puntos
- **Total:** 100 puntos

---

## Ejercicio 15: Proyecto Integrador - Routing Complejo en Módulo de Proceso

**Lección Relacionada:** Lección 15 - Modo Ortogonal y Enrutamiento Avanzado
**Duración:** 40 minutos
**Puntos:** 100 puntos
**Nivel:** Avanzado

### Escenario

Usted es **Lead Piping Designer** en proyecto EPC (Engineering, Procurement, Construction) de $800 millones USD para planta de gas natural licuado (LNG). Su responsabilidad es diseñar routing completo de 5 líneas de diferentes servicios en módulo de proceso altamente congestionado, aplicando todas las técnicas avanzadas de routing.

**Contexto del Proyecto:**
- Cliente: Global LNG Corporation
- Capacity: 5 MTPA (Million Tonnes Per Annum) LNG
- Location: Offshore platform (space extremely limited)
- Module dimensions: 15m × 12m × 10m high (congested)
- Construction: Modular (module fabricated onshore, shipped to offshore platform)
- Schedule: Fast-track (18 meses total)

### Module Geometry

**Module 300 - Heat Exchange Section:**
- Dimensions: 15m (North-South) × 12m (East-West) × 10m (Height)
- Grade elevation: 0.0m
- Structural grid: 3m × 3m (tight grid debido a space constraints)
- Structural levels:
  - El-0: Grade (0.0m)
  - El-1: Lower deck (2.5m)
  - El-2: Main deck (5.0m) - primary working level
  - El-3: Upper deck (7.5m)
  - El-4: Roof structure (10.0m)

**Equipment in Module:**

**Heat Exchanger E-301:**
- Type: Shell & tube, horizontal
- Dimensions: 6m × 2m × 2.5m
- Location: X=4.0m, Y=6.0m, Centerline Z=6.5m (@ El-3)
- Nozzles:
  - Process inlet N-1: 8", Z=6.5m, Orientation: West
  - Process outlet N-2: 8", Z=6.5m, Orientation: East
  - Cooling inlet N-3: 10", Z=6.2m, Orientation: South
  - Cooling outlet N-4: 10", Z=6.8m, Orientation: North

**Heat Exchanger E-302:**
- Similar dimensions: 6m × 2m × 2.5m
- Location: X=10.0m, Y=6.0m, Z=6.5m
- Nozzles: Similar configuration

**Pump P-301:**
- Type: Centrifugal, horizontal
- Location: X=7.0m, Y=2.0m, Z=0.8m (@ grade level)
- Nozzles:
  - Suction: 12", Z=1.2m, Orientation: South
  - Discharge: 10", Z=1.3m, Orientation: North

**Vessel V-301:**
- Type: Vertical separator
- Dimensions: Diameter 2.5m, Height 8.0m
- Location: X=2.0m, Y=10.0m, Center @ grade
- Nozzles:
  - Feed inlet: 10", Z=7.5m, Orientation: West
  - Liquid outlet: 8", Z=1.0m, Orientation: East
  - Vapor outlet: 12", Z=8.5m, Orientation: North

**Obstacles:**

**Electrical Cable Tray CT-301:**
- Route: North-South along X=8.0m
- Elevation: Z=8.0m to Z=8.6m (600mm high)
- Length: Entire module (Y=0 to Y=12m)
- Clearance required: 300mm minimum

**Structural Columns:**
- Grid locations: X=0,3,6,9,12,15m × Y=0,3,6,9,12m
- Size: HSS 300×300mm (hollow structural section)
- Clearance required: 150mm

**HVAC Duct:**
- Route: East-West along Y=9.0m
- Elevation: Z=5.5m to Z=6.3m (800mm high duct)
- Width: 1.0m
- Clearance required: 200mm

### Lines to Route

**1. Line NG-301 (Natural Gas Feed to V-301):**
- From: Module boundary @ X=0, Y=10.0m, Z=7.0m (header connection)
- To: Vessel V-301 nozzle (feed inlet) @ Z=7.5m
- Size: 10" (DN250)
- Service: Natural gas @ -20°C, 50 bar
- Spec: ASME-600#-CS-Welded
- Insulation: 75mm
- **Challenges:**
  - Must avoid HVAC duct @ Y=9.0m
  - Must avoid cable tray @ X=8.0m
  - Minimal space near vessel

**2. Line LQ-302 (Liquid from V-301 to P-301 Suction):**
- From: V-301 liquid outlet @ Z=1.0m
- To: P-301 suction @ Z=1.2m
- Size: 12" (DN300)
- Service: LNG liquid @ -162°C, 2 bar (low pressure)
- Spec: ASME-150#-SS316-Welded (stainless steel, cryogenic)
- Insulation: 150mm cryogenic insulation
- **Challenges:**
  - Cryogenic service (thermal contraction)
  - Low pressure (minimize pressure drop)
  - Must have eccentric reducer flat side UP @ pump suction
  - NPSH critical (minimize elevation loss)

**3. Line PR-303 (Process from P-301 to E-301):**
- From: P-301 discharge @ Z=1.3m
- To: E-301 process inlet N-1 @ Z=6.5m
- Size: 10" (DN250)
- Service: LNG liquid @ -160°C, 25 bar
- Spec: ASME-300#-SS316-Welded
- Insulation: 100mm
- **Challenges:**
  - Large elevation change: 5.2m (need vertical riser)
  - High pressure (must verify stress)
  - Congested path (multiple obstacles)

**4. Line CW-304 (Cooling Water to E-301 y E-302):**
- From: Module boundary @ X=15.0m, Y=3.0m, Z=5.0m (CW header)
- To: E-301 cooling inlet N-3, then continue to E-302 cooling inlet
- Size: Main header 14" → Branches 10" to each exchanger
- Service: Cooling seawater @ 25°C, 5 bar
- Spec: ASME-150#-CS-Welded
- No insulation
- **Challenges:**
  - Must serve 2 exchangers (branch routing)
  - Coordinate elevations (E-301 @ Z=6.2m, E-302 @ Z=6.2m)
  - Space optimization

**5. Line VP-305 (Vapor from V-301 to Module Boundary):**
- From: V-301 vapor outlet @ Z=8.5m
- To: Module boundary @ X=15.0m, Y=12.0m, Z=9.0m (vapor header connection)
- Size: 12" (DN300)
- Service: Natural gas vapor @ -25°C, 3 bar
- Spec: ASME-150#-CS-Welded
- Insulation: 50mm
- **Challenges:**
  - High elevation routing (@ El-4 level)
  - Must avoid cable tray @ Z=8.0-8.6m
  - Slope 1:100 para drainage de condensate

### Tareas

**Tarea 1: Pre-Routing Planning y 3D Analysis (15 puntos)**

1. **Import Module Geometry:**
   - Structural steel (columns, beams, decks)
   - Equipment (E-301, E-302, P-301, V-301)
   - Obstacles (cable tray, HVAC duct)

2. **3D Space Analysis:**
   - Identify routing corridors:
     - Corridor A: Lower level (Z=0-2.5m) - pumps area
     - Corridor B: Main level (Z=5.0-7.0m) - exchangers area
     - Corridor C: Upper level (Z=7.5-9.5m) - vapor lines area
   - Mark no-go zones (cable tray, HVAC)
   - Create routing priority list (critical lines first)

3. **Routing Strategy Document:**
   - For each line, outline:
     - Preferred routing corridor
     - Key elevation changes
     - Obstacles to avoid
     - Support strategy
   - 400-500 palabras

**Criterios de Evaluación Tarea 1:**
- Module geometry imported: 5 puntos
- 3D analysis y corridors identified: 6 puntos
- Routing strategy documented: 4 puntos

**Tarea 2: Route Critical Line LQ-302 (Cryogenic, NPSH-Critical) (25 puntos)**

**Priority 1:** This line is most critical (cryogenic, low pressure, NPSH-sensitive)

**Routing Requirements:**
- **Minimize elevation loss:** Any drop reduces NPSH available
- **Minimize fittings:** Each elbow = pressure drop
- **Eccentric reducer @ pump suction:** Flat side UP

**Routing Steps:**

1. **From V-301 Liquid Outlet (X=2.0m, Y=10.0m, Z=1.0m):**
   - Route South toward pump

2. **Path Selection:**
   - **Option A:** Direct horizontal route, slight rise to pump
   - **Option B:** Detour around obstacles
   - **Select Option A** (shortest path, minimal elevation change)

3. **Horizontal Run:**
   - Route from Y=10.0m to Y=2.0m (8m distance)
   - Elevation: Maintain Z=1.0m initially, gentle rise toward pump

4. **Elevation Adjustment:**
   - Pump suction @ Z=1.2m
   - ΔZ = +0.2m (slight rise - acceptable)
   - Use gentle slope (not abrupt elbow)

5. **Approach to Pump:**
   - Final 2m: Insert eccentric reducer 12"×12" (if needed para alignment)
   - **Critical:** Flat side UP (avoid gas pocket @ suction)
   - Straight run minimum 5D (5×300mm = 1.5m) before pump

6. **Special Components:**
   - Insert expansion joint immediately after V-301 nozzle (thermal contraction @ -162°C)
   - Strainer upstream de pump (protect impeller)

7. **Slope:**
   - Slope 1:200 draining toward V-301 (para maintenance)

**Criterios de Evaluación Tarea 2:**
- Routing path optimal (minimal elevation loss): 10 puntos
- Eccentric reducer correct orientation: 5 puntos
- Expansion joint y strainer included: 5 puntos
- Slope applied: 3 puntos
- Straight run @ pump suction: 2 puntos

**Tarea 3: Route Line PR-303 con Complex Elevation Change (20 puntos)**

**From:** P-301 discharge (Z=1.3m) → **To:** E-301 inlet (Z=6.5m)
**ΔZ:** 5.2m vertical rise

**Routing:**

1. **Immediate Post-Pump Components:**
   - Check valve (1m downstream de pump)
   - Block valve (1m downstream de check valve)

2. **Horizontal Run @ Lower Level:**
   - Route from pump area (X=7.0m, Y=2.0m) toward exchanger area
   - Distance: ~3m East (X=7m → X=4m, toward E-301)
   - Maintain Z=1.3m elevation

3. **Vertical Riser:**
   - @ X=4.0m, Y=4.0m: Insert vertical riser
   - Rise: 5.2m (Z=1.3m → Z=6.5m)
   - Use 2 × 90° LR elbows (one @ bottom, one @ top)
   - **Support:** Guide @ bottom, guide @ top (control direction)

4. **Upper Level Horizontal Run:**
   - @ Z=6.5m, route North toward E-301
   - Distance: 2m (Y=4m → Y=6m)
   - Connect to E-301 nozzle N-1

5. **Obstacle Avoidance:**
   - Verify vertical riser does NOT interfere con HVAC duct @ Y=9.0m ✓ (riser @ Y=4.0m)
   - Clearance to structural columns: 150mm minimum

6. **Slope:**
   - Upper horizontal segment: Slope 1:100 toward riser (drainage)

**Criterios de Evaluación Tarea 3:**
- Post-pump components (check, block valve): 5 puntos
- Vertical riser correctly executed: 8 puntos
- Upper level routing: 4 puntos
- Obstacle clearances verified: 3 puntos

**Tarea 4: Route CW Header con Multiple Branches (25 puntos)**

**Challenge:** Header alimenta 2 exchangers con branches optimizadas.

**Main Header:**
- From: Module boundary (X=15.0m, Y=3.0m, Z=5.0m)
- Size: 14" (DN350)
- Route: West toward exchangers

**Routing:**

1. **Header Horizontal Run:**
   - Route West from X=15m toward X=10m (5m length)
   - Elevation: Z=5.0m (main deck level)
   - Orthogonal routing

2. **Branch 1 to E-301:**
   - Location: @ X=10m (aligned con E-301)
   - Insert reducing tee: 14"×14"×10"
   - Branch direction: North toward E-301 cooling inlet (Y=6m)
   - Elevation change: Z=5.0m → Z=6.2m (rise 1.2m)
   - Route:
     - Horizontal 1m North
     - 90° elbow up
     - Vertical rise 1.2m
     - 90° elbow North
     - Final approach to E-301 nozzle N-3

3. **Continue Header:**
   - From branch point, continue West
   - Reducer 14" → 12" (flow reduced after first branch)
   - Route to X=4m (aligned con E-302)

4. **Branch 2 to E-302:**
   - Similar configuration:
   - Tee: 12"×12"×10"
   - Branch North to E-302 cooling inlet
   - Same elevation handling

5. **End Header:**
   - Cap o future connection @ X=4m

6. **Optimization:**
   - Branches aligned vertically (consistent elevation changes)
   - Spacing between branches: 6m (adequate para welding access)
   - Spool breaks planned: @ branch points (facilitate shop fabrication)

**Criterios de Evaluación Tarea 4:**
- Main header routed: 6 puntos
- Branch 1 to E-301: 8 puntos
- Branch 2 to E-302: 8 puntos
- Optimization (alignment, spool breaks): 3 puntos

**Tarea 5: Route Remaining Lines y Final Verification (15 puntos)**

**Route NG-301 (Gas Feed to V-301):**
- From module boundary (X=0, Y=10.0m, Z=7.0m)
- To V-301 feed inlet (Z=7.5m)
- Distance: 2m (short run)
- Elevation change: +0.5m
- **Execute:** Simple horizontal + slight rise, connect to nozzle

**Route VP-305 (Vapor from V-301 to Boundary):**
- From V-301 vapor outlet (Z=8.5m)
- To module boundary (X=15m, Y=12m, Z=9.0m)
- **Routing:**
  - Elevation @ Z=8.5-9.0m (upper level, above cable tray)
  - Route North then East
  - Slope 1:100 draining toward V-301 (condensate drainage)
  - Drip leg @ low point before boundary (steam trap si condensate expected)

**Final Verification:**

1. **Global Interference Check:**
   - Tools → Interference Check
   - Scope: All 5 lines + structure + equipment + obstacles
   - **Target:** Zero clashes
   - If clashes detected: Resolve by adjusting routing

2. **Clearance Verification:**
   - Pipe-to-pipe: ≥100mm
   - Pipe-to-structure: ≥150mm
   - Pipe-to-cable tray: ≥300mm
   - Pipe-to-HVAC: ≥200mm
   - Verify all clearances meet requirements

3. **Code Compliance:**
   - Support spacing per ASME B31.3
   - Slopes applied correctly
   - Eccentric reducers oriented correctly
   - Expansion joints en cryogenic lines

**Criterios de Evaluación Tarea 5:**
- NG-301 routed: 4 puntos
- VP-305 routed: 5 puntos
- Interference check (0 clashes): 4 puntos
- Clearance verification: 2 puntos

### Entregables

1. **Plant 3D Model Completo:** Module 300 con 5 líneas fully routed
2. **Routing Strategy Document:** 400-500 palabras outlining approach
3. **Layout Drawings:**
   - Plan view @ El-2 (main deck)
   - Section view A-A (North-South cut)
   - Section view B-B (East-West cut)
4. **Isometric Drawings:** 5 isos (uno por línea)
5. **Interference Report:** Clash detection results (target: 0 clashes)
6. **Bill of Materials:** Consolidated BOM for all 5 lines
7. **Design Review Memo:** 500 palabras discussing:
   - Key challenges encountered
   - Solutions implemented
   - Optimization achieved
   - Constructability considerations

### Evaluation Summary

- Tarea 1 (Planning): 15 puntos
- Tarea 2 (LQ-302 cryogenic): 25 puntos
- Tarea 3 (PR-303 elevation change): 20 puntos
- Tarea 4 (CW header branches): 25 puntos
- Tarea 5 (Remaining + verification): 15 puntos
- **Total:** 100 puntos

### Notes

Este ejercicio integra TODAS las habilidades del Módulo 3:
- Equipment placement y nozzle configuration (Lección 11)
- Routing techniques y slope application (Lección 12)
- Valves, fittings, special components (Lección 13)
- Support design considerations (Lección 14)
- Advanced routing: orthogonal mode, congested spaces, multi-offset, branch optimization (Lección 15)

**Success Criteria:**
- Zero clashes
- All code requirements met
- Constructible design (shop fabrication maximized)
- Optimized routing (minimal material, efficient paths)
- Complete documentation

**Time Management:**
- Planning: 8 minutes
- Routing (5 lines): 25 minutes
- Verification: 5 minutes
- Documentation: 2 minutes
- **Total:** 40 minutes

---

## Resumen de Ejercicios

**Total de Ejercicios:** 5
**Total de Puntos:** 500 puntos
**Tiempo Total:** 195 minutos (~3.25 horas)

**Distribution:**
- Ejercicio 11 (Equipos): 100 puntos
- Ejercicio 12 (Routing básico): 100 puntos
- Ejercicio 13 (Componentes): 100 puntos
- Ejercicio 14 (Soportes): 100 puntos
- Ejercicio 15 (Integrador avanzado): 100 puntos

**Niveles de Competencia:**
- 450-500 puntos (90-100%): **Excelente** - Expertise avanzado
- 400-449 puntos (80-89%): **Muy Bueno** - Competencia profesional
- 350-399 puntos (70-79%): **Bueno** - Competencia satisfactoria
- 300-349 puntos (60-69%): **Aprobado** - Competencia básica
- <300 puntos (<60%): **Insuficiente** - Requiere reforzamiento

**Skills Evaluated:**
1. Project setup y configuration
2. Equipment placement y nozzle configuration
3. Routing techniques (orthogonal, manual, auto)
4. Component selection y insertion
5. Support design y load calculations
6. Thermal expansion analysis
7. BOM generation
8. Clearance verification
9. Code compliance (ASME B31.3)
10. Documentation production

Completar estos 5 ejercicios demuestra **competencia profesional completa** en diseño de tuberías 3D con AutoCAD Plant 3D 2026, preparando al estudiante para roles de **Piping Designer**, **Lead Designer**, o **Piping Engineer** en industria EPC internacional.
