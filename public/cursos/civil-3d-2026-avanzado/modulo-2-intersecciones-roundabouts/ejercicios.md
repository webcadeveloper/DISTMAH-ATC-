# EJERCICIOS PRÁCTICOS - MÓDULO 2

## INTERSECCIONES Y ROUNDABOUTS - CIVIL 3D 2026 AVANZADO

---

## INSTRUCCIONES GENERALES

**Estos ejercicios están diseñados para aplicar todo lo aprendido en el Módulo 2.**

### Requisitos:

1. **Software:** Civil 3D 2026 instalado y funcional
2. **Datos de entrada:** Descarga los archivos de ejercicios desde la plataforma
3. **Tiempo estimado:** 90-120 minutos por ejercicio
4. **Entregables:** Archivos DWG + PDF de plan sheets + reporte técnico (Word/PDF)

### Criterios de Evaluación:

- **Cumplimiento de normas AASHTO:** 30%
- **Calidad técnica del diseño:** 30%
- **Presentación y documentación:** 20%
- **Aplicación correcta de Civil 3D:** 20%

### Formato de Entrega:

```
Carpeta: EJERCICIO-X-APELLIDO/
├── EJERCICIO-X.dwg (archivo Civil 3D)
├── EJERCICIO-X-PLANOS.pdf (plan sheets)
├── EJERCICIO-X-REPORTE.pdf (análisis técnico)
└── EJERCICIO-X-CALCULOS.xlsx (si aplica)
```

---

## EJERCICIO 1: INTERSECCIÓN URBANA DE 4 LEGS CON TURN LANES

### CONTEXTO

Diseña una intersección semaforizada en zona urbana comercial.

**Ubicación:** Intersección de Main Street y Oak Avenue, Downtown District

**Condiciones existentes:**
- Topografía: Relativamente plana (grades < 2%)
- Utilities: Agua, alcantarillado y eléctrico existentes (evitar relocación)
- ROW disponible: 60 ft cada vía desde centerline
- Tráfico actual: 18,000 ADT total (hora pico AM)

### DATOS DE DISEÑO

#### Main Street (North-South):

- **Clasificación:** Urban Collector
- **Design speed:** 35 mph
- **Cross section actual:** 2 lanes (12 ft cada uno) + parking (8 ft cada lado)
- **Volúmenes hora pico:**
  - Northbound through: 650 vph
  - Southbound through: 700 vph
  - Northbound left-turn: 120 vph
  - Southbound left-turn: 150 vph
  - Right-turns: 50 vph cada dirección

#### Oak Avenue (East-West):

- **Clasificación:** Urban Arterial
- **Design speed:** 40 mph
- **Cross section actual:** 4 lanes (12 ft cada uno)
- **Volúmenes hora pico:**
  - Eastbound through: 850 vph
  - Westbound through: 900 vph
  - Eastbound left-turn: 80 vph
  - Westbound left-turn: 100 vph
  - Right-turns: 60 vph cada dirección

#### Parámetros Adicionales:

- **Design vehicle:** WB-50 (semi-trailer)
- **Signal timing:** 90-second cycle (optimizar split)
- **Pedestrian volume:** Alto (100+ ped/hr en todos los crosswalks)
- **Parking:** Eliminar dentro de ± 100 ft de intersección

### REQUERIMIENTOS DEL DISEÑO

#### 1. Geometric Design:

- [ ] Diseñar **left-turn bays** en todos los approaches
  - Calcular storage length según volúmenes
  - Calcular taper length según design speed
  - Aplicar normas AASHTO

- [ ] Diseñar **curb returns**
  - Radio mínimo para WB-50
  - Swept path analysis para verificación

- [ ] Diseñar **median**
  - Raised median (6 inches height)
  - Ancho: 6-8 ft
  - Nose design en transitions

#### 2. Civil 3D Implementation:

- [ ] Crear alignments:
  - Main Street CL
  - Oak Avenue CL
  - Offset alignments para curbs
  - Left-turn lane offsets

- [ ] Crear profiles:
  - Match elevations en PI (tolerance ± 0.05 ft)
  - Vertical curves con K-values apropiados
  - Grade ≤ 2% en zona de intersección (± 50 ft)

- [ ] Usar **Create Intersection Wizard**:
  - Configurar para 4-leg intersection
  - Curb return radius: Calcular según swept path
  - Generar corridor automático

- [ ] Añadir turn lane regions:
  - 4 left-turn bays (NB, SB, EB, WB)
  - Assemblies con transitions
  - Taper regions

#### 3. Analysis:

- [ ] **Capacity Analysis** (HCM methodology):
  - Calcular capacity para cada approach
  - Determinar v/c ratios
  - Calcular LOS (target: LOS D o mejor)

- [ ] **Queue Length Analysis**:
  - Calcular Q_95 para cada left-turn bay
  - Verificar que storage length ≥ Q_95 + 25 ft buffer

- [ ] **Sight Distance Verification**:
  - Crear sight triangles
  - Verificar que no hay obstrucciones (buildings, trees)

#### 4. Documentation:

- [ ] **Plan Sheets** (mínimo 5 sheets):
  1. Cover Sheet + Location Map
  2. Geometric Layout Plan (1"=20')
  3. Grading Plan con spot elevations
  4. Profile Sheets (Main St y Oak Ave)
  5. Cross Sections (5 locations)

- [ ] **Technical Report** (formato profesional):
  - Executive summary
  - Design criteria (AASHTO standards aplicados)
  - Capacity analysis results
  - Recommendations

- [ ] **Quantity Takeoff**:
  - Earthwork (CY cut/fill)
  - Pavement (SY)
  - Curb and gutter (LF)

### ENTREGABLES

1. **EJERCICIO-1.dwg:** Civil 3D drawing completo
2. **EJERCICIO-1-PLANOS.pdf:** Plan sheets (5 páginas)
3. **EJERCICIO-1-REPORTE.pdf:** Technical report (5-10 páginas)
4. **EJERCICIO-1-CALCULOS.xlsx:** Capacity analysis spreadsheet

### TIPS Y RECOMENDACIONES

- **Storage length:** Usar método HCM (N = V × PHF × T / 3,600), luego multiplicar × 25 ft/veh
- **Swept path:** Run vehicle tracking para WB-50 en todos los turn movements
- **Median nose:** Usar taper ratio 15:1 mínimo
- **Cross slope:** Transicionar de 2% crown a single slope (-2% hacia un lado) en intersección

---

## EJERCICIO 2: ROUNDABOUT SINGLE-LANE COMPLETO CON ANÁLISIS DE CAPACIDAD

### CONTEXTO

Reemplazar una intersección peligrosa (8 accidentes en 2 años) con un roundabout moderno.

**Ubicación:** Intersección de Highway 45 y County Road 12, zona suburbana/rural

**Problema actual:**
- Intersección con 4-way STOP
- Accidentes frecuentes (T-bone crashes)
- Delays excesivos en hora pico
- Confusión de conductores

### DATOS DE DISEÑO

#### Highway 45 (North-South):

- **Clasificación:** Minor Arterial
- **Design speed:** 45 mph (reducir a 25 mph en roundabout)
- **ADT:** 12,000 (proyección a 10 años: 15,000)
- **Cross section:** 2 lanes @ 12 ft + shoulders 4 ft

#### County Road 12 (East-West):

- **Clasificación:** Major Collector
- **Design speed:** 40 mph (reducir a 20 mph en roundabout)
- **ADT:** 6,500 (proyección a 10 años: 8,000)
- **Cross section:** 2 lanes @ 11 ft + shoulders 3 ft

#### Volúmenes Hora Pico (actual):

| Movement | Volume (vph) |
|----------|-------------|
| NB through | 450 |
| NB right | 80 |
| NB left | 120 |
| SB through | 480 |
| SB right | 90 |
| SB left | 100 |
| EB through | 280 |
| EB right | 60 |
| EB left | 70 |
| WB through | 300 |
| WB right | 55 |
| WB left | 85 |

#### Parámetros Adicionales:

- **Design vehicle:** WB-62 (ocasional WB-67 en Highway 45)
- **Pedestrian volume:** Bajo (< 20 ped/hr)
- **Bicycles:** Moderado (50 bikes/day)

### REQUERIMIENTOS DEL DISEÑO

#### 1. Roundabout Geometry (AASHTO compliant):

- [ ] **Calcular ICD** (Inscribed Circle Diameter):
  - Basado en design vehicle WB-62
  - Usar fórmula: ICD = 2 × (R_path + 0.5 × W_entry + W_circ)
  - Target: 150-170 ft

- [ ] **Entry width y Exit width**:
  - Entry: 15 ft (single-lane)
  - Exit: 18 ft (entry + 3 ft)

- [ ] **Circulatory roadway width**:
  - 18 ft (entry + 3 ft)
  - Verificar que no excede 120% de entry width

- [ ] **Entry radius y Exit radius**:
  - Entry radius: 65-85 ft (target V_entry = 15-20 mph)
  - Exit radius: 100-130 ft (permite salida más rápida)

- [ ] **Splitter islands**:
  - Width: 12 ft (refugio peatonal)
  - Length: 100-150 ft
  - Nose offset: 2 ft hacia izquierda
  - Taper ratio: 12:1

- [ ] **Central island**:
  - Diameter: ICD - (2 × circulatory width)
  - Raised curb: 6 inches height
  - Truck apron: 10-14 ft ancho (traversable)

#### 2. Fastest Path Analysis:

- [ ] Dibujar **3 paths** (through movement):
  - NB → SB
  - EB → WB
  - (uno más crítico)

- [ ] Medir **radii** (R1, R2, R3) para cada path

- [ ] Calcular **velocidades**:
  - V = √(R × 15 × 0.17)
  - Target: V_entry 15-20 mph, V_circ 15-25 mph

- [ ] Verificar **R_fastest < 330 ft** (criterio AASHTO)

#### 3. Swept Path Analysis:

- [ ] **WB-62** circulando roundabout:
  - Verificar que no sube bordillo de central island (solo truck apron)
  - Clearance mínimo: 1 ft desde edge

- [ ] **WB-67** (verificación adicional):
  - Si NO cabe: Advertir que WB-67 debe tomar ruta alternativa
  - Si SÍ cabe: Documentar que roundabout acomoda WB-67

#### 4. Capacity Analysis (HCM):

- [ ] Calcular **conflicting flows** para cada entry:
  - Q_c = vehículos circulantes que interfieren con entrada

- [ ] Calcular **entry capacity**:
  - C_e = 1,130 × e^(-0.0010 × Q_c)

- [ ] Determinar **v/c ratios**:
  - v/c = V_entry / C_e
  - Target: v/c < 0.85 (LOS D o mejor)

- [ ] Calcular **LOS** según delay:
  - Usar software (RODEL, Synchro) o método manual

- [ ] **Proyectar a 10 años**:
  - Incrementar volúmenes 25%
  - Recalcular v/c
  - Verificar que roundabout aún funciona (v/c < 0.90)

#### 5. Civil 3D Implementation:

- [ ] **Roundabout Wizard**:
  - Select 4 centerline alignments (Highway 45 NB/SB, County Rd EB/WB)
  - ICD: [valor calculado]
  - Entry width: 15 ft
  - Circulatory width: 18 ft

- [ ] **Post-wizard adjustments**:
  - Ajustar deflection si R_fp > 330 ft
  - Modificar truck apron width según swept path

- [ ] **Landscaping (básico)**:
  - Central island: Feature line @ elev = crown + 0.5 ft
  - Splitter islands: Grading 2:1 desde curb

#### 6. Safety Analysis:

- [ ] **Conflict point diagram**:
  - Dibujar 8 conflict points (4 merging + 4 diverging)
  - Comparar con 32 de intersección anterior
  - **Demostrar 75% reducción**

- [ ] **Speed reduction verification**:
  - Approach speed: 45 mph
  - Entry speed: < 20 mph (calculado con fastest path)
  - **Demostrar reducción de 55%**

### ENTREGABLES

1. **EJERCICIO-2.dwg:** Roundabout completo en Civil 3D
2. **EJERCICIO-2-PLANOS.pdf:** Plan sheets (6 páginas):
   - Geometric layout (1"=30')
   - Grading plan
   - Profile sheets
   - Cross sections
   - Landscaping plan
   - Signing and pavement marking plan
3. **EJERCICIO-2-REPORTE.pdf:** Technical report (10-15 páginas):
   - Design criteria
   - Fastest path analysis results
   - Swept path analysis
   - Capacity analysis (actual + 10-year projection)
   - Safety comparison (before/after)
   - Recommendations
4. **EJERCICIO-2-CALCULOS.xlsx:** Capacity analysis spreadsheet

### TIPS Y RECOMENDACIONES

- **ICD:** Si WB-67 debe acomodarse frecuentemente, usar ICD ≥ 180 ft
- **Deflection:** Si R_fp es muy grande, incrementar width de splitter island a 15-18 ft
- **Truck apron:** Usar swept path para determinar width exacto, luego agregar 1 ft buffer
- **Cross slope:** Circulatory roadway: 2% hacia afuera; Truck apron: 3-4% hacia afuera

---

## EJERCICIO 3: ACCELERATION/DECELERATION LANES PARA AUTOPISTA

### CONTEXTO

Diseña on-ramp y off-ramp para nueva conexión entre Interstate Highway y arterial urbana.

**Ubicación:** Interstate 70 Exit 145, nuevo interchange

**Justificación:**
- Desarrollo comercial nuevo (shopping center 500,000 SF)
- Tráfico proyectado: 8,000 ADT adicional
- Conexión actual inadecuada (ramp muy corto, accidentes frecuentes)

### DATOS DE DISEÑO

#### Interstate 70 (Mainline):

- **Clasificación:** Interstate Highway
- **Design speed:** 70 mph
- **Lanes:** 3 each direction @ 12 ft
- **Shoulders:** 10 ft outside, 4 ft inside
- **ADT actual:** 45,000 (proyección: 52,000)

#### Arterial Road (Ramp Connection):

- **Clasificación:** Principal Arterial
- **Design speed:** 45 mph
- **Lanes:** 2 each direction @ 12 ft
- **ADT:** 12,000

#### Ramp Design Speeds:

- **On-ramp:** 35 mph (ramp curve)
- **Off-ramp:** 40 mph (ramp curve)

### REQUERIMIENTOS DEL DISEÑO

#### 1. On-Ramp Design (Eastbound):

**Geometry:**

- [ ] **Ramp alignment**:
  - Start: Arterial @ Sta X+XX
  - Path: Curve connecting to Interstate
  - End: Interstate @ Sta Y+YY
  - Curve radius: ≥ 190 ft (para 35 mph)

- [ ] **Ramp profile**:
  - Start elevation: Match arterial
  - End elevation: Match Interstate
  - Grade: ≤ 6% (AASHTO max)
  - Vertical curve: K-value para 35 mph

- [ ] **Acceleration lane**:
  - Length calculation:
    - V1 = 35 mph (ramp speed)
    - V2 = 70 mph (Interstate speed)
    - a = 2.0 ft/s² (truck acceleration)
    - L_accel = (V2² - V1²) / (30 × a)
  - **Target: 1,300-1,500 ft**

- [ ] **Merge taper**:
  - Length: W × 50 (para 70 mph)
  - W = 12 ft
  - L_taper = 600 ft

**Civil 3D:**

- [ ] Alignment para on-ramp
- [ ] Profile con grade ≤ 6%
- [ ] Corridor para acceleration lane:
  - Assembly: Interstate section con auxiliary lane
  - Región: Desde gore hasta merge taper end

#### 2. Off-Ramp Design (Westbound):

**Geometry:**

- [ ] **Deceleration lane**:
  - Length calculation:
    - V1 = 70 mph (Interstate speed)
    - V2 = 40 mph (ramp speed)
    - d = 10 ft/s² (comfortable deceleration)
    - L_decel = (V1² - V2²) / (30 × d)
  - **Target: 400-500 ft**

- [ ] **Diverge taper**:
  - Length: 600 ft (similar a on-ramp)

- [ ] **Ramp curve**:
  - Radius: ≥ 250 ft (para 40 mph)
  - Superelevation: 4-6% (towards inside)

**Civil 3D:**

- [ ] Alignment para off-ramp
- [ ] Profile descendente (Interstate → Arterial elevation)
- [ ] Corridor con deceleration lane

#### 3. Gore Areas:

**On-ramp gore:**

- [ ] Nose: Offset 2 ft desde edge of shoulder
- [ ] Taper ratio: 50:1
- [ ] Paved area mínimo: 50 ft × 10 ft

**Off-ramp gore:**

- [ ] Similar design
- [ ] Striping: Diagonal lines @ 45°

#### 4. Signing and Pavement Markings:

- [ ] **Exit sign** (off-ramp):
  - Location: 1 mile antes, 0.5 mile antes, at gore
  - Content: "EXIT 145 / Main Street / 1 MILE"

- [ ] **Speed advisory** (ramp curve):
  - "RAMP 40 MPH"

- [ ] **Pavement markings**:
  - White dashed line (acceleration/deceleration lane separation)
  - Yellow line (ramp edge)

#### 5. Sight Distance Verification:

- [ ] **Stopping sight distance** en ramp curve:
  - SSD para 40 mph = 305 ft (AASHTO)
  - Verificar que no hay obstrucciones (barriers, slopes)

- [ ] **Acceleration lane visibility**:
  - Drivers en Interstate deben ver merging traffic ≥ 600 ft antes

### ENTREGABLES

1. **EJERCICIO-3.dwg:** On-ramp y off-ramp completos
2. **EJERCICIO-3-PLANOS.pdf:** Plan sheets (8 páginas):
   - Overall plan (1"=100')
   - On-ramp plan/profile (1"=50'/1"=10')
   - Off-ramp plan/profile
   - Cross sections (10 locations)
   - Signing plan
   - Pavement marking plan
3. **EJERCICIO-3-REPORTE.pdf:** Design report con cálculos de L_accel, L_decel
4. **EJERCICIO-3-CALCULOS.xlsx:** Acceleration/deceleration length calculations

### TIPS Y RECOMENDACIONES

- **Acceleration length:** Usar valores para TRUCK (conservador), no passenger car
- **Grade en ramp:** Si supera 4%, agregar 10-15% a acceleration length
- **Superelevation transition:** Comenzar 200 ft antes del curve, terminar 100 ft después
- **Merge taper:** Verificar que hay ≥ 600 ft de acceleration lane ANTES del taper

---

## EJERCICIO 4: CREATE INTERSECTION WIZARD - AUTOMATIZACIÓN COMPLETA

### CONTEXTO

Utiliza el Create Intersection Wizard para generar una intersección completa en < 30 minutos.

**Ubicación:** New Development Area, Master Plan Community

**Objetivo:** Demostrar eficiencia del workflow automatizado de Civil 3D para diseño de intersecciones estándar.

### DATOS DE DISEÑO

#### Primary Road (Parkway Boulevard - NS):

- **Design speed:** 40 mph
- **Cross section:** 4 lanes divided (2 each direction) @ 12 ft
- **Median:** 16 ft raised median con landscaping
- **Sidewalks:** 6 ft cada lado

#### Secondary Road (Residential Drive - EW):

- **Design speed:** 30 mph
- **Cross section:** 2 lanes @ 11 ft
- **Parking:** 8 ft parallel parking cada lado
- **Sidewalks:** 5 ft cada lado

#### Design Vehicle:

- **Primary Road:** WB-50
- **Secondary Road:** SU-30

### REQUERIMIENTOS DEL DISEÑO

#### 1. Preparación (Pre-Wizard):

- [ ] **Surface:** EG (Existing Ground) completa
- [ ] **Alignments:**
  - Parkway Blvd CL (NS)
  - Residential Dr CL (EW)
  - Ambos en **mismo Site**
- [ ] **Profiles:**
  - FG profiles para ambas vías
  - Match elevation @ PI (tolerance ± 0.1 ft)

#### 2. Wizard Execution (Documentar tiempo):

- [ ] **Inicio:** Anotar hora de inicio

- [ ] **Create Intersection Wizard:**

  **Step 1: General**
  - Name: `INT-PKY-RES`
  - Description: `Parkway & Residential Intersection`
  - Pick point: En PI

  **Step 2: Geometry Details**
  - Type: 4-leg
  - Curb return radius: 30 ft (all corners)
  - Offset alignments:
    - ✓ Curb lines (12 ft offset desde CL)
    - ✓ ROW lines (40 ft offset)
    - ✓ Sidewalk edges

  **Step 3: Corridor Regions**
  - Primary Road Assembly: `Urban Arterial - Divided 4-Lane`
  - Secondary Road Assembly: `Urban Local - 2-Lane with Parking`
  - Curb Return Assembly: `Curb Return with 6-ft Sidewalk`

  **Step 4: Lane Slope**
  - Transition method: Single slope across intersection
  - Cross slope: 2% (toward southeast)

  **Step 5: Profile Adjustments**
  - Automatic elevation matching: ✓ Enabled
  - K-values: Auto (based on design speed)

  **Step 6: Review & Create**
  - Verify: No warnings
  - **Click: Create Intersection**

- [ ] **Final:** Anotar hora de finalización
  - **TARGET: < 15 minutos**

#### 3. Post-Wizard Customization:

- [ ] **Modificar NE corner**:
  - Incrementar radius de 30 ft a 45 ft (truck access)
  - Method: Intersection Properties > Geometry Details

- [ ] **Agregar left-turn bay** (Northbound on Parkway):
  - Storage length: 100 ft (4 vehículos)
  - Taper length: 300 ft (40 mph → taper ratio 25:1)
  - Median: 6 ft ancho

- [ ] **Pedestrian enhancements**:
  - Curb ramps: 1:12 slope (ADA compliant)
  - Detectable warning surfaces: All ramps
  - Crosswalk setback: 20 ft from curb return

#### 4. Verification (Quality Control):

- [ ] **Corridor surface check**:
  - No triángulos gigantes
  - Transitions suaves
  - No gaps en surface

- [ ] **Grading check**:
  - Slope analysis: 0-6% en toda la intersección
  - Drainage hacia inlets (marcar con arrows)

- [ ] **Swept path analysis**:
  - WB-50 en all turning movements (NE, SE, SW, NW corners)
  - Clearance ≥ 1 ft

#### 5. Documentation:

- [ ] **Plan Production**:
  - Use Civil 3D Plan Production tools
  - Generate 4 sheets automáticamente:
    1. Layout plan
    2. Grading plan
    3. Profile sheets
    4. Cross sections

- [ ] **Annotation**:
  - Station/offset labels en curb lines
  - Spot elevations @ PI, corners
  - Curve data tables

### ENTREGABLES

1. **EJERCICIO-4.dwg:** Intersección generada con Wizard + customizations
2. **EJERCICIO-4-PLANOS.pdf:** 4 plan sheets (auto-generated)
3. **EJERCICIO-4-REPORTE.pdf:** Breve reporte (3-5 páginas):
   - Workflow description
   - Tiempo total (objetivo: < 30 min total incluyendo customization)
   - Pros/cons del Wizard vs manual design
   - Recommendations para proyectos futuros

### CRITERIO ESPECIAL DE EVALUACIÓN

**Eficiencia de workflow:**
- < 20 min (Wizard + customization): **Excelente**
- 20-30 min: **Bueno**
- 30-45 min: **Aceptable**
- > 45 min: **Necesita práctica adicional**

---

## EJERCICIO 5: INTERSECCIÓN COMPLEJA - ANÁLISIS Y DOCUMENTACIÓN PROFESIONAL

### CONTEXTO

Diseña una intersección compleja de 5-leg con análisis completo de capacidad y documentación lista para construcción.

**Ubicación:** Downtown Business District, High-Traffic Area

**Problema:** Intersección existente de 5 legs con:
- LOS F en hora pico (colapso)
- 12 accidentes en último año
- Quejas de ciudadanos y comercios

**Solución requerida:** Rediseño completo con análisis que justifique la inversión ($2.5 millones estimados).

### DATOS DE DISEÑO

#### Five Approaches:

1. **Main Street North:** 4 lanes (2 each direction), ADT 15,000
2. **Main Street South:** 4 lanes (2 each direction), ADT 14,500
3. **Oak Avenue East:** 4 lanes (2 each direction), ADT 12,000
4. **Oak Avenue West:** 4 lanes (2 each direction), ADT 11,500
5. **Pine Street NE:** 2 lanes (1 each direction), ADT 4,500

#### Volúmenes Hora Pico (actual):

**Matriz de movimientos (demasiado compleja para semáforo):**
- Total entering: 3,250 vph
- 15 turning movements diferentes
- LOS actual: F (delay promedio > 120 seg/veh)

### REQUERIMIENTOS DEL DISEÑO

#### ALTERNATIVA A: ROUNDABOUT MULTI-LANE

**Diseñar:**

- [ ] **2-lane roundabout**:
  - ICD: 200-240 ft
  - Entry width: 24 ft (2 lanes @ 12 ft)
  - Circulatory width: 24-26 ft
  - Exit width: 26 ft

- [ ] **Capacity analysis**:
  - Entry capacity para cada approach (HCM)
  - v/c ratios
  - LOS (target: LOS C o mejor)

**O:**

#### ALTERNATIVA B: CERRAR PINE STREET + REDISEÑAR COMO 4-LEG

**Diseñar:**

- [ ] **Close Pine Street NE** (redirigir 4,500 ADT a calles paralelas)

- [ ] **4-leg signalized intersection**:
  - Left-turn bays en todos los approaches
  - Protected left-turn phases
  - Optimized signal timing (Synchro software)

- [ ] **Capacity analysis**:
  - Compare con condición actual
  - Calcular improvement en LOS
  - Justificar cierre de Pine Street

#### ANÁLISIS REQUERIDO (Ambas Alternativas):

1. **Traffic Analysis:**
   - [ ] Existing conditions (LOS F documentation)
   - [ ] Projected future conditions (10-year, 20-year)
   - [ ] Comparison: Alt A vs Alt B
   - [ ] Recommendation (cuál alternativa es mejor)

2. **Safety Analysis:**
   - [ ] Conflict point comparison:
     - Existing 5-leg: 65 conflict points
     - Alt A (roundabout): 10 conflict points
     - Alt B (4-leg): 32 conflict points
   - [ ] Crash reduction estimation (FHWA methodologies)

3. **Cost-Benefit Analysis:**
   - [ ] Construction cost estimate:
     - Earthwork (CY × $15/CY)
     - Pavement (SY × $45/SY)
     - Curb (LF × $25/LF)
     - Drainage (LS $150,000)
     - Traffic signals (LS $250,000 si aplica)
   - [ ] Lifecycle cost (20 years):
     - Maintenance
     - Operations
   - [ ] Benefit calculation:
     - Crash reduction ($ saved)
     - Delay reduction ($ saved)
     - Fuel savings

4. **Environmental Impact:**
   - [ ] CO2 emissions reduction (debido a menos idling)
   - [ ] ROW impact (cuánta propiedad privada se necesita adquirir)

### ENTREGABLES

**1. Technical Design Package:**

- [ ] **EJERCICIO-5-ALTERNATIVA-A.dwg** (si diseñas roundabout)
- [ ] **EJERCICIO-5-ALTERNATIVA-B.dwg** (si diseñas 4-leg)
- [ ] **EJERCICIO-5-PLANOS.pdf:** Plan set completo (12-15 sheets):
  1. Cover sheet + Index
  2. Existing conditions plan
  3. Demolition plan
  4. Geometric layout plan (proposed)
  5. Grading plan
  6. Drainage plan
  7. Profile sheets (3 sheets)
  8. Cross sections (2 sheets)
  9. Details sheet (curb, sidewalk, etc.)
  10. Signing and pavement marking plan
  11. Traffic signal plan (si aplica)
  12. Landscaping plan

**2. Technical Report (Professional Format, 25-40 páginas):**

- [ ] **Executive Summary** (1-2 páginas):
  - Problem statement
  - Recommended solution
  - Cost estimate
  - Timeline

- [ ] **Chapter 1: Introduction** (2-3 páginas):
  - Project background
  - Purpose and need
  - Study area description

- [ ] **Chapter 2: Existing Conditions** (3-5 páginas):
  - Traffic volumes
  - Crash history (12 crashes/year)
  - LOS analysis (LOS F)
  - Identified deficiencies

- [ ] **Chapter 3: Design Criteria** (2-3 páginas):
  - AASHTO standards
  - Local jurisdiction requirements
  - Design vehicle
  - Design speed

- [ ] **Chapter 4: Alternatives Analysis** (8-12 páginas):
  - Alternative A: Roundabout design
    - Geometry description
    - Capacity analysis
    - Safety analysis
    - Cost estimate
  - Alternative B: 4-leg intersection
    - Geometry description
    - Capacity analysis
    - Safety analysis
    - Cost estimate
  - Comparison matrix
  - **Recommendation**

- [ ] **Chapter 5: Recommended Design** (5-8 páginas):
  - Detailed geometry description
  - Grading and drainage
  - Utilities (relocations if needed)
  - Phasing and staging (construction)
  - MOT (Maintenance of Traffic during construction)

- [ ] **Chapter 6: Cost Estimate** (2-3 páginas):
  - Itemized quantities
  - Unit prices
  - Total construction cost
  - Engineering/contingency (25%)
  - **Total project cost**

- [ ] **Chapter 7: Conclusion** (1 página):
  - Summary
  - Next steps (final design, ROW acquisition, construction)

- [ ] **Appendices**:
  - A: Traffic volume data
  - B: Capacity analysis calculations
  - C: Cost estimate spreadsheet
  - D: Public outreach summary (si aplica)

**3. Presentation (PowerPoint/PDF, 15-20 slides):**

- [ ] Para presentar a City Council / Public
- [ ] Incluir:
  - Visualizations (3D renderings si es posible)
  - Before/after comparisons
  - Benefits summary
  - Q&A anticipation

### CRITERIOS DE EVALUACIÓN ESPECIALES

**Este ejercicio es COMPREHENSIVE - simula proyecto real profesional.**

**Evaluación:**
- Technical design quality: 30%
- Analysis thoroughness: 25%
- Documentation completeness: 25%
- Presentation clarity: 20%

**Puntaje mínimo para aprobar: 80%**

---

## RÚBRICA DE EVALUACIÓN GENERAL (TODOS LOS EJERCICIOS)

### CRITERIOS TÉCNICOS (60%)

#### Diseño Geométrico (20%)

| Criterio | Excelente (18-20) | Bueno (15-17) | Aceptable (12-14) | Deficiente (< 12) |
|----------|-------------------|---------------|-------------------|-------------------|
| Cumplimiento AASHTO | 100% normas aplicadas correctamente | 90% cumplimiento | 75% cumplimiento | < 75% cumplimiento |
| Cálculos de storage, taper, radii | Todos correctos con justificación | Correctos, justificación mínima | Algunos errores menores | Errores significativos |
| Swept path verification | Verificado con Civil 3D vehicle tracking | Verificado manualmente | No verificado pero parece OK | No verificado, problemas evidentes |

#### Modelado Civil 3D (20%)

| Criterio | Excelente (18-20) | Bueno (15-17) | Aceptable (12-14) | Deficiente (< 12) |
|----------|-------------------|---------------|-------------------|-------------------|
| Alignments & Profiles | Perfectos, dinámicos, labels completos | Correctos, algunos labels faltantes | Funcionan pero no optimizados | Errores, no dinámicos |
| Corridors | Regions bien definidos, transitions suaves | Corridors OK, transitions aceptables | Corridors básicos, algunos gaps | Corridors con errores mayores |
| Surfaces | Sin triángulos extraños, bien bounded | Algunas irregularidades menores | Surface funcional pero tosca | Surface con errores significativos |

#### Análisis Técnico (20%)

| Criterio | Excelente (18-20) | Bueno (15-17) | Aceptable (12-14) | Deficiente (< 12) |
|----------|-------------------|---------------|-------------------|-------------------|
| Capacity Analysis | HCM aplicado correctamente, todos los factores | HCM aplicado, algunos factores omitidos | Método simplificado aceptable | Cálculos incorrectos |
| LOS determination | Correcto con justificación clara | Correcto sin justificación | Aproximado | Incorrecto |

### DOCUMENTACIÓN (40%)

#### Plan Sheets (20%)

| Criterio | Excelente (18-20) | Bueno (15-17) | Aceptable (12-14) | Deficiente (< 12) |
|----------|-------------------|---------------|-------------------|-------------------|
| Completitud | Todas las sheets requeridas + adicionales útiles | Todas requeridas | Faltan 1-2 sheets | Faltan > 2 sheets |
| Calidad gráfica | Profesional, listo para construcción | Buena presentación | Aceptable pero mejorable | Pobre calidad |
| Annotations | Completas, claras, standards consistentes | Mayoría completas | Algunas faltantes | Muchas faltantes |

#### Reporte Técnico (20%)

| Criterio | Excelente (18-20) | Bueno (15-17) | Aceptable (12-14) | Deficiente (< 12) |
|----------|-------------------|---------------|-------------------|-------------------|
| Estructura | Profesional, sigue formato estándar (AASHTO/local) | Bien organizado | Organización básica | Desorganizado |
| Contenido técnico | Completo, preciso, bien explicado | Completo, explicación adecuada | Completo pero superficial | Incompleto |
| Gramática y estilo | Sin errores, profesional | Pocos errores menores | Algunos errores | Muchos errores |

---

## RECURSOS DE APOYO

### Software Requerido:

- **Autodesk Civil 3D 2026:** Diseño geométrico
- **Microsoft Excel:** Cálculos de capacidad
- **Adobe Acrobat:** Generación de PDFs
- **Microsoft Word:** Reportes técnicos

### Software Recomendado (Opcional):

- **Synchro Studio:** Capacity analysis automático
- **AutoTURN:** Vehicle swept path analysis
- **Bluebeam Revu:** Markup de PDFs

### Referencias:

- **AASHTO Green Book 7th Edition:** Chapters 3, 9, 10
- **HCM 7th Edition:** Chapters 19, 31
- **MUTCD 2009:** Parts 2, 3 (signing and pavement markings)

---

## PREGUNTAS FRECUENTES (FAQ)

**P: ¿Puedo usar unidades métricas en lugar de imperiales?**
R: Sí, pero debe ser consistente en TODO el ejercicio. Convertir todos los valores de referencia.

**P: ¿Qué pasa si mi diseño no cumple 100% con AASHTO?**
R: Documentar la desviación como "design exception" con justificación técnica. En proyectos reales, esto requiere aprobación de FHWA.

**P: ¿Cuánto tiempo debo dedicar a cada ejercicio?**
R: 90-120 minutos es realista para ejercicios 1-4. Ejercicio 5 puede requerir 4-6 horas (es comprensivo).

**P: ¿Puedo colaborar con otros estudiantes?**
R: Discusión de conceptos: SÍ. Compartir archivos DWG: NO. Cada estudiante debe entregar trabajo original.

---

**¡ÉXITO EN TUS EJERCICIOS!**

*DISTMAH ATC - Universidad Autodesk*
*Civil 3D 2026 Avanzado - Módulo 2*
