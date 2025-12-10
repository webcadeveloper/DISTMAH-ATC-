# Ejercicios Prácticos - Módulo 4: Pressure Networks y Utilities Avanzadas

## Introducción

Estos ejercicios profesionales están diseñados para aplicar todos los conceptos aprendidos en el Módulo 4. Cada ejercicio simula situaciones reales de proyectos de ingeniería y requiere el uso integrado de múltiples herramientas de Civil 3D 2026.

**Requisitos:**
- Civil 3D 2026 instalado
- Archivos base descargables desde plataforma DISTMAH ATC
- Conocimiento completo de las 5 lecciones del módulo

**Criterios de evaluación:**
- Cumplimiento de especificaciones técnicas (40%)
- Cumplimiento de códigos y normas (30%)
- Calidad de documentación (20%)
- Innovación en soluciones (10%)

---

## Ejercicio 1: Diseño Completo de Red de Agua Potable

### Objetivo

Diseñar un sistema completo de distribución de agua potable para un desarrollo residencial de 250 viviendas, incluyendo selección de diámetros, configuración de válvulas, ubicación de hidrantes y validación de presiones.

### Datos del Proyecto

**Ubicación:** Desarrollo residencial "Vista Verde Estates"
- Área: 85 acres
- Topografía: Elevaciones 450-480 ft
- 250 lotes residenciales (promedio 0.3 acres c/u)
- Calles: 6 calles principales (total 12,500 LF)

**Punto de conexión:**
- Conexión a main municipal existente en límite oeste
- Presión disponible: 65 psi @ elevación 455 ft
- Main municipal: 12" ductile iron

**Código aplicable:**
- AWWA Manual M31
- Ten States Standards
- Código local: Presión mínima 30 psi, máxima 80 psi

### Archivos Provistos

```
Ejercicio1-Base.dwg:
- Existing ground surface (EG)
- Property lines y ROW
- Proposed street alignments
- Lot layouts
- Connection point a main municipal
```

### Tareas Requeridas

#### Parte A: Demand Analysis (15 puntos)

1. **Calcular demandas:**
   - Average Day Demand (ADD)
   - Maximum Day Demand (MDD)
   - Peak Hour Demand (PHD)
   - Fire flow requirement (según lotes)

   **Criterios de diseño:**
   - Consumo residencial: 100 gal/persona/día
   - Ocupancy: 3.5 personas/vivienda
   - Peak day factor: 2.0
   - Peak hour factor: 2.5
   - Fire flow: 1,500 GPM por 2 horas

2. **Documentar cálculos en tabla Excel** (incluir en submittal)

#### Parte B: Network Layout (25 puntos)

1. **Crear Pressure Network:**
   - Network name: "Vista Verde Water Distribution"
   - Parts list: Configurar con AWWA C900 PVC pipes y accesorios

2. **Design approach:**
   - Sistema looped (NO ramificado)
   - Loops principales cada 600-800 ft
   - Diámetros iniciales:
     - Arterias principales: 12"
     - Distribución secundaria: 8"
     - Calles locales: 6"

3. **Ubicar appurtenances:**
   - Gate valves: En intersecciones (para aislar loops)
   - Fire hydrants: Espaciamiento máximo 400 ft
   - Connection point: En límite oeste

4. **Configuración de profundidad:**
   - Profundidad típica: 4 ft (cover sobre crown)
   - Ajustar según topografía para mantener cover adecuado

#### Parte C: Hydraulic Analysis (30 puntos)

1. **Configurar análisis:**
   - Demand pattern: Peak Hour Demand en cada junction
   - Hazen-Williams C-factor: 140 (PVC)
   - Static pressure en connection point: 65 psi

2. **Run pressure analysis:**
   - Tools > Pressure Network Analysis
   - Scenario 1: Peak hour demand (normal operation)
   - Scenario 2: Fire flow + peak hour demand simultáneo

3. **Validar resultados:**
   - Verificar que TODAS las junctions tienen:
     - Presión mínima > 30 psi (normal operation)
     - Presión mínima > 20 psi (fire flow scenario)
     - Presión máxima < 80 psi
   - Verificar velocidades:
     - Rango: 2-8 fps en todas las tuberías

4. **Ajustar diseño si necesario:**
   - Si presiones insuficientes: Aumentar diámetros
   - Si velocidades bajas: Reducir diámetros (economía)
   - Iterar hasta cumplir todos los criterios

#### Parte D: Documentation (20 puntos)

1. **Plan sheet:**
   - Scale: 1"=100'
   - Mostrar water network con labels:
     - Pipe diameters
     - Pipe lengths
     - Junction elevations
     - Valve locations (symbology)
     - Hydrant locations (symbology)
   - Title block con nombre de proyecto, diseñador, fecha

2. **Profile sheets:**
   - Crear profiles de 3 arterias principales
   - Mostrar:
     - Ground surface
     - Water pipes con inverts
     - Vertical scale: 1"=10' (exageración 10:1)

3. **Hydraulic report:**
   - Export presión en todas las junctions (tabla)
   - Velocidades en todos los pipes (tabla)
   - Summary de compliance con código

4. **Cost estimate:**
   - Calcular quantities:
     - LF de pipe por diámetro
     - Cantidad de válvulas (por tipo y tamaño)
     - Cantidad de hidrantes
   - Aplicar unit costs:
     - 6" PVC: $40/LF
     - 8" PVC: $55/LF
     - 12" PVC: $85/LF
     - Gate valve 6": $800 ea
     - Gate valve 8": $1,200 ea
     - Gate valve 12": $2,500 ea
     - Fire hydrant: $4,500 ea
   - Total estimated cost

#### Parte E: Bonus (10 puntos extra)

1. **Optimize para costo mínimo:**
   - Reducir diámetros donde sea posible sin violar criterios
   - Minimizar longitud total de pipe (routing eficiente)
   - Documentar savings vs diseño inicial

2. **Water quality analysis (EPANET):**
   - Export network a EPANET
   - Run extended period simulation (24 horas)
   - Analizar water age en dead ends
   - Proponer mejoras si water age > 3 días

### Criterios de Aprobación

- Presiones en rango: OBLIGATORIO
- Velocidades en rango: OBLIGATORIO
- Spacing de hidrantes: OBLIGATORIO
- Documentación completa: OBLIGATORIO
- Puntaje mínimo: 70/100 para aprobar

### Entregables

1. `Ejercicio1-[TuNombre].dwg` - Archivo de Civil 3D con diseño completo
2. `Ejercicio1-Calcs.xlsx` - Cálculos de demanda y cost estimate
3. `Ejercicio1-Report.pdf` - Hydraulic analysis report
4. `Ejercicio1-Plans.pdf` - Plan y profile sheets (plotted)

**Fecha de entrega:** [Según calendario del curso]

---

## Ejercicio 2: Análisis Hidráulico con Validación de Presiones

### Objetivo

Realizar análisis hidráulico detallado de una red de agua potable existente que presenta problemas de baja presión, identificar causas, y proponer soluciones validadas mediante simulación.

### Situación

El municipio de "Riverside" tiene una red de agua existente que sirve a 180 viviendas. Residentes en la zona este (elevaciones altas) reportan presión insuficiente, especialmente durante horas pico de la mañana.

**Sistema existente:**
- Source: Tanque elevado (elevación base 520 ft, 30 ft de agua)
- Network: Diseño de 1985, mayormente 6" y 8" PVC
- Zona problema: Elevaciones 480-495 ft (30-45 ft más alto que resto)

### Archivos Provistos

```
Ejercicio2-Existing.dwg:
- Existing water network (as-built)
- Terrain surface
- Conexión a tanque elevado
- Ubicación de complaints (markers rojos)
```

### Tareas Requeridas

#### Parte A: Baseline Analysis (20 puntos)

1. **Verificar modelo existente:**
   - Revisar que todas las pipes tienen:
     - Diámetros correctos
     - Inverts consistentes con terrain
     - Hazen-Williams C-factor apropiado (usar C=100 para pipes viejas)

2. **Configurar demanda actual:**
   - 180 viviendas × 3.5 personas × 100 gpd = 63,000 gpd
   - Peak hour demand: 63,000 × 2.0 × 2.5 / 1440 = 219 GPM
   - Distribuir demand proporcionalmente en junctions

3. **Run baseline analysis:**
   - Scenario: Peak hour demand
   - Document presiones en zona problema
   - Identificar junctions con P < 30 psi (violación de código)

4. **Generate pressure contour map:**
   - Visualización de zonas de presión
   - Identify low pressure zone extent

#### Parte B: Root Cause Analysis (25 puntos)

1. **Analizar pérdidas por fricción:**
   - Calculate head loss en path desde tanque hasta zona problema
   - Identificar pipe segments con highest losses:
     - Small diameters (6" pipes con high flow)
     - Envejecimiento (C-factor bajo)
     - Excessive length

2. **Evaluate elevation impact:**
   - Static pressure loss due to elevation:
     - Tanque HGL: 550 ft
     - Zona problema elevation: 490 ft
     - Static head available: 550 - 490 = 60 ft = 26 psi
   - Dynamic pressure (con pérdidas):
     - Calcular manualmente usando Hazen-Williams
     - Comparar con Civil 3D output

3. **Assess demand distribution:**
   - Verificar si demand está correctamente distribuido
   - Analizar si hay demand concentrations que causen issues

4. **Document findings:**
   - Report identificando 3 causas principales
   - Ranking por impacto (cuantificado)

#### Parte C: Solution Development (30 puntos)

Desarrollar y analizar 3 soluciones alternativas:

**Solution 1: Pipe Upsizing**
- Reemplazar pipes de 6" con 8" en arterias principales hacia zona alta
- Identifica mínimo de pipes a reemplazar
- Run analysis y verificar mejora
- Estimate cost

**Solution 2: Booster Pump Station**
- Ubicar booster pump en límite de zona baja/alta
- Size pump:
  - Flow: 150 GPM (demanda de zona alta)
  - Head: 30 ft (para compensar presión perdida)
- Modelar pump en Civil 3D
- Run analysis y verificar presión en zona alta > 40 psi
- Estimate cost (capital + 20 años operación)

**Solution 3: Elevated Storage Tank**
- Proponer tanque elevado local en zona alta
- Ubicación: Elevación 500 ft, tanque altura 60 ft (HGL = 560 ft)
- Size: 50,000 gallones (1 día de storage para zona alta)
- Connection: 8" pipe desde tanque a zona alta
- Run analysis (tanque como source point)
- Estimate cost

**Solution 4 (Bonus): Pressure Zones**
- Dividir sistema en 2 zonas de presión
- Zona baja: Tanque existente (elevaciones <470 ft)
- Zona alta: Nuevo tanque o booster (elevaciones >470 ft)
- PRV en límite para evitar presión excesiva en zona baja
- Run analysis para ambas zonas
- Estimate cost

#### Parte D: Comparative Analysis (15 puntos)

Crear matriz de decisión:

| Criteria | Weight | Solution 1: Upsizing | Solution 2: Booster | Solution 3: Tank | Solution 4: Zones |
|----------|--------|---------------------|---------------------|------------------|-------------------|
| Capital Cost | 25% | $X | $Y | $Z | $W |
| Operating Cost (20yr) | 20% | $0 | $A | $minimal | $B |
| Reliability | 20% | High | Medium | High | High |
| Compliance (pressure) | 20% | Yes/No | Yes/No | Yes/No | Yes/No |
| Implementation time | 10% | Xwks | Ywks | Zwks | Wwks |
| Maintenance | 5% | Low | Medium | Low | Medium |
| **TOTAL SCORE** | 100% | | | | |

**Recomendación final:** Justificar cuál solución es óptima.

#### Parte E: Validation (10 puntos)

1. **Fire flow test:**
   - Run analysis con demanda normal + 1,500 GPM fire flow en zona problema
   - Verificar presión residual > 20 psi
   - Si no cumple: ajustar solución

2. **Extended Period Simulation (EPANET):**
   - Export recommended solution a EPANET
   - Simulate 24-hour period con diurnal demand pattern
   - Verificar que presiones se mantienen en rango TODO el día
   - Generate plots de presión vs tiempo en junction crítico

### Entregables

1. `Ejercicio2-Analysis.dwg` - Modelo existente con baseline analysis
2. `Ejercicio2-Solutions.dwg` - Modelo con 3-4 soluciones alternativas
3. `Ejercicio2-Report.pdf`:
   - Executive summary (1 página)
   - Baseline analysis results
   - Root cause analysis
   - Solution descriptions con pros/cons
   - Comparative matrix
   - Recommendation con justificación
4. `Ejercicio2-Cost.xlsx` - Cost estimates detallados
5. `Ejercicio2-EPANET.inp` - EPANET model de solución recomendada

---

## Ejercicio 3: Modelado de Estación de Bombeo con Cálculo de Consumo

### Objetivo

Diseñar una pump station completa para servir un desarrollo nuevo en elevación alta, seleccionar bombas apropiadas basándose en curvas características, calcular consumo energético y optimizar con VFDs.

### Escenario

Desarrollo comercial "Commerce Park" requiere nuevo pump station:
- Ubicación: Elevación 350 ft (zona baja)
- Destination: Tanque de almacenamiento elevado a 580 ft
- Demanda: MDD = 800 GPM, Fire flow = 2,500 GPM
- Distancia horizontal: 3,200 ft
- Pipe material: Ductile iron 12" (C=130)

### Archivos Provistos

```
Ejercicio3-Site.dwg:
- Site layout
- Proposed pump station location
- Tank location
- Alignment de force main
- Terrain surface

Ejercicio3-PumpCurves.xlsx:
- Curvas de 5 bombas comerciales disponibles
- Efficiency curves
- NPSH curves
- Pricing
```

### Tareas Requeridas

#### Parte A: System Curve Development (20 puntos)

1. **Calculate Total Dynamic Head (TDH):**

   **Static head:**
   ```
   H_static = Tank elevation - Pump station wet well elevation
   = 580 - 345 (asumiendo wet well 5 ft bajo ground)
   = 235 ft
   ```

   **Friction losses:**
   - Pipe: 3,200 ft de 12" ductile iron, C=130
   - Use Hazen-Williams para calcular @ múltiples flows
   - Calcular para Q = 0, 500, 1000, 1500, 2000, 2500, 3000 GPM

   **Minor losses:**
   - Suction piping: 2 elbows, 1 reducer, 1 foot valve (K_total ≈ 3.5)
   - Discharge piping: 1 check valve, 1 gate valve, 3 elbows (K_total ≈ 4.0)
   - Calculate h_m = K × V²/2g para cada flow

   **Total TDH:**
   ```
   TDH(Q) = H_static + h_friction(Q) + h_minor(Q)
   ```

2. **Plot system curve:**
   - Excel graph: Q (GPM) vs TDH (ft)
   - Show calculation table

#### Parte B: Pump Selection (25 puntos)

1. **Analyze provided pump curves:**
   - 5 opciones en Ejercicio3-PumpCurves.xlsx
   - Para cada bomba, identificar:
     - Shut-off head
     - BEP (Best Efficiency Point): Q, H, Efficiency
     - Maximum flow
     - NPSH required

2. **Determine operating point:**
   - Superponer system curve con cada pump curve
   - Encontrar intersection (operating point)
   - Para diseño correcto, operating point debe estar:
     - Dentro de ±20% del BEP (eficiencia)
     - Dentro de published range de bomba

3. **Select pump:**
   - Criterios:
     - Debe cumplir: Q_operating ≥ 800 GPM (MDD demand)
     - Preferible: Q_operating cerca de 1,000 GPM (margin)
     - Eficiencia > 75% en operating point
     - NPSH_available > NPSH_required + 5 ft (margin)
   - Documentar selección con justificación

4. **Multiple pump configuration:**
   - Para fire flow (2,500 GPM):
     - Necesitas 3 bombas en paralelo (approx)
   - Configuration: 3 duty pumps + 1 standby (3+1)
   - Calcular operating point con 1, 2, 3 bombas operando
   - Verificar que 3 bombas proporcionan ≥ 2,500 GPM

#### Parte C: NPSH Verification (15 puntos)

**Calculate NPSH Available:**

```
Wet well design:
- Ground elevation: 350 ft
- Wet well depth: 15 ft (bottom @ 335 ft)
- Low water level: 340 ft (5 ft sobre bottom)
- Pump centerline: 338 ft (sumergido)

H_static_suction = 340 - 338 = 2 ft (positive - flooded suction)
H_friction_suction = [calcular para suction pipe]
H_atm = 33.9 ft (elevación 350 ft sobre sea level)
H_vapor = 0.59 ft (70°F)

NPSHA = H_atm + H_static_suction - H_friction_suction - H_vapor
```

**Compare con NPSHR:**
- Para bomba seleccionada @ operating flow
- Verificar: NPSHA > NPSHR + 5 ft
- Si no cumple: ajustar wet well levels o seleccionar bomba diferente

#### Parte D: Power and Energy Analysis (25 puntos)

1. **Calculate power requirements:**

   **Hydraulic power:**
   ```
   P_hydraulic = (Q × TDH × 8.34) / 3960
   ```

   **Brake horsepower:**
   ```
   BHP = P_hydraulic / Efficiency_pump
   ```

   **Motor power:**
   ```
   P_motor (kW) = BHP × 0.746 / Efficiency_motor
   ```

   Para operating point (1 bomba):
   - Q = [from analysis] GPM
   - TDH = [from analysis] ft
   - Efficiency = [from pump curve]
   - Motor efficiency = 94% (typical)

2. **Annual energy consumption:**

   **Operating profile:**
   ```
   Scenario 1: Low demand (12am-6am) - 1 bomba @ 40% speed (VFD)
   Scenario 2: Normal demand (6am-10am, 6pm-12am) - 1 bomba @ 80% speed
   Scenario 3: Peak demand (10am-6pm) - 2 bombas @ 60% speed each
   ```

   **Annual hours:**
   - Scenario 1: 6 hrs/day × 365 = 2,190 hrs
   - Scenario 2: 8 hrs/day × 365 = 2,920 hrs
   - Scenario 3: 8 hrs/day × 365 = 2,920 hrs

   **Energy per scenario (using Affinity Laws):**
   - Para cada scenario, calcular kW basado en speed ratio
   - Total kWh/year = Σ(kW × hours)

3. **Operating cost:**
   ```
   Electric rate: $0.13/kWh (average commercial)
   Annual cost = kWh/year × $0.13
   ```

4. **VFD optimization:**
   - Compare:
     - Without VFD: Bombas on/off @ full speed
     - With VFD: Variable speed según demanda
   - Calculate energy savings
   - VFD cost: $25,000 per pump
   - Payback period

#### Parte E: Civil 3D Modeling (15 puntos)

1. **Model pump station en Civil 3D:**
   - Crear pressure network desde wet well hasta tanque
   - Insert pump appurtenance en discharge del wet well
   - Configure pump properties con curva seleccionada
   - Run pressure analysis y verificar resultados match cálculos manuales

2. **Profile view:**
   - Crear profile a lo largo de force main
   - Mostrar:
     - Terrain
     - Force main pipe
     - HGL (Hydraulic Grade Line) - debe estar sobre pipe crown
     - Pressure annotations en key points

3. **Pump station layout drawing:**
   - Plan view mostrando:
     - Wet well (dimensiones)
     - Dry well (pump room)
     - Pipes (suction, discharge)
     - Valves, meters
   - Not to scale (schematic ok), pero profesional

### Entregables

1. `Ejercicio3-Calculations.xlsx`:
   - System curve calculations
   - Pump selection matrix
   - NPSH calculations
   - Power y energy analysis
   - Cost comparison (VFD vs no VFD)

2. `Ejercicio3-Design.dwg`:
   - Civil 3D model con pump station
   - Profile view de force main
   - Pump station layout

3. `Ejercicio3-Report.pdf`:
   - Pump selection justification
   - System curve y pump curve graphs
   - Energy analysis summary
   - Recommendation (VFD o no)

---

## Ejercicio 4: Coordinación Multi-Utility para Proyecto Urbano

### Objetivo

Coordinar 5 utilities diferentes en un corredor urbano congestionado, aplicar códigos de separación, resolver interferencias, y generar planos de coordinación profesionales.

### Proyecto

**Revitalización de Main Street:**
- Longitud: 2,800 LF
- Ancho de ROW: 80 ft (40 ft cada lado desde centerline)
- Existing utilities: Todas deben relocalizarse
- New utilities: Todas nuevas

**Utilities incluidas:**
1. Water distribution (pressure network)
2. Sanitary sewer (gravity network)
3. Storm drain (gravity network)
4. Gas distribution (pressure network)
5. Electric conduit (duct bank)

### Archivos Provistos

```
Ejercicio4-Base.dwg:
- Street alignment (Main Street)
- Existing ground surface
- Proposed finish grade surface
- Building locations
- Property lines y ROW limits

Ejercicio4-ExistingUtilities.dwg:
- As-built de utilities existentes (survey data)
- Utilities están en conflict con new design
```

### Tareas Requeridas

#### Parte A: Layout Planning (20 puntos)

1. **Develop utility placement strategy:**

   **Typical section (to scale):**
   ```

   Property Line          ROW          Centerline         ROW          Property Line
       |                   |                 |                |                   |
       |<---40 ft--------->|<------40 ft---->|<---40 ft------>|<---40 ft--------->|

       [North Side]                    [Street]                    [South Side]

   North utilities (shallow to deep):
   - Telecom conduit: 2 ft depth, 35 ft offset de CL
   - Electric conduit: 3 ft depth, 33 ft offset de CL
   - Gas main: 3.5 ft depth, 30 ft offset de CL
   - Water main: 4 ft depth, 25 ft offset de CL

   South utilities:
   - Storm drain: 6 ft depth, 15 ft offset de CL (bajo crown de calle)
   - Sanitary sewer: 10 ft depth, 20 ft offset de CL (más profundo)
   ```

2. **Verify code compliance:**
   - Horizontal separations:
     - Water ↔ Sanitary: ≥10 ft ✓ (25 ft - (-20 ft) = 45 ft across street)
     - Water ↔ Gas: ≥12 in ✓ (25 - 30 = 5 ft)
     - Gas ↔ Electric: ≥24 in ✓ (30 - 33 = 3 ft)
     - Electric ↔ Telecom: ≥6 in ✓ (33 - 35 = 2 ft)
   - Vertical separations (en cruces):
     - Water over sanitary: ≥18 in
     - Water over storm: ≥12 in
     - Gas over any wet utility: ≥12 in

3. **Service connections:**
   - Water: Servicios a cada building (north y south side)
   - Sanitary: Laterales desde buildings hasta main
   - Gas: Servicios a commercial buildings
   - Electric: Secondary services

#### Parte B: Network Modeling (25 puntos)

1. **Crear 5 networks separadas:**

   **Water:**
   - Pressure network
   - Diámetros: 12" main, 6" servicios
   - Depth: 4 ft típico
   - Appurtenances: Gate valves cada 500 ft, hidrantes cada 400 ft

   **Sanitary:**
   - Gravity network
   - Diámetros: 8" main, 4" laterales
   - Slope: 0.4% mínimo
   - Manholes: Cada 400 ft máximo

   **Storm:**
   - Gravity network
   - Diámetros: 18-36" (dependiendo de drainage area)
   - Slope: 0.5% mínimo
   - Inlets: Cada 300 ft, ambos lados de calle

   **Gas:**
   - Pressure network
   - Diámetro: 6" main, 1" servicios
   - Depth: 3.5 ft típico
   - Valves: En intersecciones

   **Electric:**
   - Model como polyline 3D (Civil 3D no tiene native electric network)
   - 3-duct bank (3 conduits paralelos)
   - Depth: 3 ft típico
   - Manholes: Cada 600 ft

2. **Assign to correct layers:**
   - Usar naming convention: C-WATR-PIPE, C-SSWR-PIPE, etc.
   - Colores según standard (water=blue, sanitary=brown, etc.)

#### Parte C: Interference Checking (30 puntos)

1. **Run systematic clash detection:**

   **Pairwise checks:**
   - Water vs Sanitary
   - Water vs Storm
   - Water vs Gas
   - Sanitary vs Storm
   - Sanitary vs Gas
   - Storm vs Gas
   - [All utilities] vs Proposed surface (cover verification)

2. **Document clashes:**
   - Create tabla:
     ```
     Clash ID | Utility 1 | Utility 2 | Type | Location (Station) | Horiz Dist | Vert Dist | Status
     C-001    | Water    | Sanitary  | Soft | 5+25              | 8.2 ft     | N/A       | Open
     C-002    | Gas      | Electric  | Soft | 12+80             | 1.5 ft     | N/A       | Open
     [etc.]
     ```

3. **Resolve clashes:**
   - Para cada clash:
     - Analizar causa (insufficient separation, crossing conflict)
     - Proponer solución (shift horizontal, adjust depth, reroute)
     - Implementar en modelo
     - Verify resolution (re-run check)
   - Iterar hasta ZERO CLASHES

4. **Special crossings:**
   - En intersecciones de calles, utilities de ambas calles cruzan
   - Crear section views en cada cruce
   - Verificar vertical clearances
   - Documentar stacking order

#### Parte D: Profile Coordination (15 puntos)

1. **Create composite profile:**
   - Profile view a lo largo de Main Street
   - Mostrar TODAS las utilities en mismo profile
   - Color-code por utility type
   - Vertical exaggeration: 10:1

2. **Annotation:**
   - Label pipe types y diámetros
   - Dimensiones de clearances críticas
   - Call-out de crossings especiales

3. **Identify conflicts visually:**
   - Highlight en profile donde utilities están muy cercanas
   - Notas de resolución implementada

#### Parte E: Documentation (10 puntos)

1. **Plan sheet - Utility Coordination:**
   - Scale: 1"=50'
   - Todas las utilities en color
   - Legend (utility types, symbols)
   - Notes generales de separación
   - Table de quantities

2. **Profile sheet - Composite Utility Profile:**
   - Horizontal scale: 1"=50'
   - Vertical scale: 1"=5' (exaggerated)
   - Todas las utilities labeled

3. **Clash report:**
   - Summary: Total clashes found, clashes resolved
   - List de clashes con resolutions
   - Sign-off de coordinación (simulated approval)

4. **Coordination matrix:**
   ```
   | Utility Pair      | Min Separation Required | Min Separation Achieved | Compliant |
   |-------------------|------------------------|-------------------------|-----------|
   | Water-Sanitary    | 10 ft                  | 45 ft                  | Yes       |
   | Water-Gas         | 12 in                  | 5 ft                   | Yes       |
   | Gas-Electric      | 24 in                  | 3 ft                   | Yes       |
   [etc.]
   ```

### Entregables

1. `Ejercicio4-Coordination.dwg`:
   - 5 utilities completas y coordinadas
   - Layers organizados correctamente
   - Zero clashes (validado)

2. `Ejercicio4-Clashes.xlsx`:
   - Clash log con todas las interferencias encontradas y resueltas
   - Coordination matrix

3. `Ejercicio4-Plans.pdf`:
   - Plan sheet con todas las utilities
   - Composite profile sheet
   - Clash resolution notes

4. `Ejercicio4-Report.pdf`:
   - Executive summary de coordinación
   - Methodology
   - Challenges encountered y solutions
   - Final verification de compliance

---

## Ejercicio 5: Interference Checking y Resolución de Conflictos

### Objetivo

Recibir un proyecto con múltiples interferencias pre-existentes, usar herramientas avanzadas de clash detection (Civil 3D + Navisworks), priorizar resoluciones, implementar fixes, y generar documentación profesional de coordinación.

### Escenario

Proyecto de expansión industrial "TechPark Phase 2" está en etapa de coordinación. Diseños preliminares de utilities han sido completados por 3 equipos diferentes (water, sewer, stormwater), pero NO se coordinaron entre sí. Tu rol es BIM Coordinator responsable de clash detection y resolución.

### Archivos Provistos

```
Ejercicio5-Water.dwg:
- Water pressure network (diseñado por Water Team)

Ejercicio5-Sanitary.dwg:
- Sanitary gravity network (diseñado por Sewer Team)

Ejercicio5-Storm.dwg:
- Storm gravity network (diseñado por Drainage Team)

Ejercicio5-Site.dwg:
- Terrain, roads, buildings, retaining walls

Ejercicio5-Structures.rvt (Revit):
- Edificios en 3D (para clash detection con structures)
```

### Tareas Requeridas

#### Parte A: Initial Assessment (15 puntos)

1. **Import all models en Civil 3D:**
   - Usar Data Shortcuts para reference water, sanitary, storm networks
   - Crear `Ejercicio5-Coordination.dwg` que contiene references a los 3

2. **Visual inspection:**
   - En plan view, identify obvious crossings
   - Estimate cantidad de clashes (guess)
   - Identify "hot spots" (áreas con muchas utilities congestionadas)

3. **Run comprehensive interference check:**
   - Water vs Sanitary (tolerance: 10 ft horiz, 18 in vert)
   - Water vs Storm (tolerance: 5 ft horiz, 12 in vert)
   - Sanitary vs Storm (tolerance: 5 ft horiz, 6 in vert)
   - All networks vs Site surface (cover verification)

4. **Generate clash report:**
   - Export to Excel
   - Total count de clashes
   - Breakdown por tipo (hard clash vs soft clash)
   - Breakdown por utility pair

#### Parte B: Clash Classification (20 puntos)

1. **Categorize clashes por severity:**

   **Critical (Priority 1):**
   - Hard clashes (physical overlap)
   - Water-Sanitary separación < 5 ft (major code violation)
   - Insufficient cover (< 2 ft on any utility)
   - Conflicts con structures (buildings, retaining walls)

   **Major (Priority 2):**
   - Soft clashes violating code (e.g., Water-Sanitary 8 ft apart, requiere 10 ft)
   - Utilities crossing con clearance marginal (12-18 in when 18 in required)

   **Minor (Priority 3):**
   - Soft clashes con small violations (<1 ft deficit)
   - Clearances que son tecnicamente suficientes pero no ideales

2. **Create prioritized list:**
   - Sort clashes por severity
   - Assign Clash ID (format: C-[Priority]-[Sequential], e.g., C-1-001, C-2-015)

3. **Assign to responsible parties:**
   - Determina qué utility debe moverse para resolver cada clash
   - Criterios:
     - Utility más fácil de ajustar (shallow mejor que deep)
     - Utility con menos constraints
     - Alternate cual equipo hace cambios (fairness)

#### Parte C: Resolution Implementation (35 puntos)

**Goal: Resolver TODOS los clashes críticos y major, minimizar minor clashes.**

1. **Critical clashes (debe ser CERO):**

   Para cada critical clash:
   - Analizar en detalle (create section view si necesario)
   - Develop 2-3 solution options
   - Evaluate options:
     - Cost (excavation depth, pipe rerouting)
     - Impact (affects other utilities?)
     - Constructability
   - Select best option
   - Implement en modelo
   - Verify resolution (re-run interference check)
   - Document (before/after screenshots, notes)

2. **Major clashes (objetivo: <5 remaining):**

   - Resolver systematically
   - Prioritize water-sanitary clashes (safety)
   - Document soluciones
   - Algunas pueden requerir coordination meeting decision (flag para discussion)

3. **Minor clashes (objetivo: minimize):**

   - Resolver si es "low hanging fruit" (fácil fix)
   - Documentar los que quedan como "accepted variances" (si código permite)

4. **Iterative verification:**

   Después de cada ronda de fixes:
   - Re-run complete interference check
   - Verify no new clashes introduced
   - Update clash count
   - Continue hasta alcanzar targets

5. **Optimization:**

   - Review final design para eficiencia:
     - Minimal total pipe length
     - Logical routing (no zigzag innecesario)
     - Constructability (evita deep excavations donde posible)

#### Parte D: Navisworks Integration (20 puntos)

1. **Export modelos a Navisworks:**
   - Water.dwg → Water.nwc
   - Sanitary.dwg → Sanitary.nwc
   - Storm.dwg → Storm.nwc
   - Site.dwg → Site.nwc
   - Structures.rvt → Structures.nwc (export from Revit)

2. **Append all en Navisworks Manage:**
   - Resultado: Modelo 3D integrado completo

3. **Configure Clash Detective:**
   - Tests:
     - Utilities vs Utilities (varias combinaciones)
     - Utilities vs Structures (buildings)
     - Utilities vs Site (terrain, retaining walls)
   - Tolerances según códigos

4. **Run clash tests:**
   - Navisworks genera clash report
   - Debería match Civil 3D report (verify)
   - Ventaja: 3D visualization de cada clash

5. **3D presentation:**
   - Create saved viewpoints de clashes críticos (before resolution)
   - Create saved viewpoints de resolved clashes (after)
   - Prepare para client presentation

6. **Collaboration workflow simulation:**
   - Assign clashes a usuarios (simulated)
   - Add comments a cada clash ("Will deepen pipe by 2 ft")
   - Mark status (New → Reviewed → Resolved → Approved)

#### Parte E: Final Documentation (10 puntos)

1. **Clash resolution log:**
   ```
   | Clash ID | Severity | Utilities | Location | Issue | Resolution | Status | Date Resolved |
   |----------|----------|-----------|----------|-------|------------|--------|---------------|
   | C-1-001  | Critical | W-S       | Sta 5+25 | Overlap 2 ft | Deepened sanitary by 3 ft | Resolved | 2024-11-20 |
   | C-1-002  | Critical | W-Bldg    | Grid E-3 | Hard clash | Rerouted water 10 ft east | Resolved | 2024-11-21 |
   [etc.]
   ```

2. **Executive summary report:**
   - Project overview
   - Initial clash count
   - Clash resolution approach
   - Final clash count (breakdown por severity)
   - Certification de coordination (all critical resolved)
   - Recommendations para construction

3. **Coordination drawings:**
   - Plan sheet mostrando all utilities
   - Clash markers de remaining minor clashes (if any)
   - Notes de accepted variances
   - Sign-off sheet (simulated approvals)

4. **Presentation slides (PDF):**
   - Para project stakeholders
   - Visual: before/after clash counts (charts)
   - 3D renders de Navisworks mostrando coordinated utilities
   - Key challenges y solutions
   - Confirmation de design readiness

### Criterios de Éxito

**Mandatory (Must achieve):**
- Zero critical clashes
- Major clashes ≤ 5
- All water-sanitary separations ≥ 10 ft
- All utilities have adequate cover (≥ 3 ft)
- Documentation complete

**Bonus (Extra credit):**
- Zero major clashes (100% code compliant)
- Minor clashes ≤ 3
- Innovative solutions (e.g., directional drill bajo existing utility)
- Excellent 3D visualization en Navisworks

### Entregables

1. `Ejercicio5-Water-FINAL.dwg` - Water network (coordinated)
2. `Ejercicio5-Sanitary-FINAL.dwg` - Sanitary network (coordinated)
3. `Ejercicio5-Storm-FINAL.dwg` - Storm network (coordinated)
4. `Ejercicio5-Coordination.dwg` - Composite model con all utilities
5. `Ejercicio5-ClashLog.xlsx` - Complete clash resolution log
6. `Ejercicio5-Navisworks.nwd` - Navisworks model con clash tests
7. `Ejercicio5-Report.pdf` - Executive summary y coordination certification
8. `Ejercicio5-Presentation.pdf` - Stakeholder presentation slides

---

## Criterios Generales de Evaluación

### Rúbrica de Calificación

**Excelencia Técnica (40%):**
- Cumplimiento exacto de especificaciones
- Accuracy de cálculos
- Validación completa de diseño
- Zero errors en implementación

**Cumplimiento de Códigos (30%):**
- Adherencia a AWWA, Ten States Standards
- Separaciones según códigos locales
- Presiones en rango especificado
- Velocidades apropiadas

**Calidad de Documentación (20%):**
- Claridad de planos
- Completeness de reports
- Profesionalismo de presentación
- Organización de archivos

**Innovación y Optimización (10%):**
- Soluciones creativas a problemas
- Optimización de costos
- Consideraciones de constructabilidad
- Uso avanzado de herramientas

### Escala de Calificación

- **90-100:** Excelente - Trabajo profesional listo para construcción
- **80-89:** Bueno - Cumple estándares con minor revisions
- **70-79:** Satisfactorio - Cumple requisitos básicos pero requiere mejoras
- **<70:** Insatisfactorio - No cumple estándares mínimos, requiere resubmittal

---

## Recursos de Apoyo

**Durante los ejercicios, puedes consultar:**
- Lecciones 1-5 del módulo
- Documentación de Autodesk (Help files)
- Códigos y normas (AWWA, etc.)
- Foros del curso (preguntas a instructores y peers)

**NO permitido:**
- Copiar trabajo de otros estudiantes
- Usar soluciones de años anteriores
- Contratar trabajo externo

**Soporte:**
- Office hours: Martes y jueves 6-8 PM
- Foro de Q&A: Respuesta en <24 horas
- Live troubleshooting sessions: Viernes 5-7 PM

---

**¡Buena suerte! Estos ejercicios representan situaciones reales que enfrentarás como ingeniero profesional. El dominio de estas habilidades te diferenciará en el mercado laboral.**

---

**Fin de Ejercicios - Módulo 4**
