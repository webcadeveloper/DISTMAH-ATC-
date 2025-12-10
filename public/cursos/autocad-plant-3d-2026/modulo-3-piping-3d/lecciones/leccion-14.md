# Lección 14: Soportes de Tubería y Soportería

**Duración:** 60 minutos
**Nivel:** Intermedio-Avanzado
**Módulo:** 3 - Diseño de Tuberías 3D
**Prerequisitos:** Lecciones 11, 12 y 13 completadas

---

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

1. Identificar y seleccionar tipos apropiados de soportes: hangers, shoes, clamps, guides, anchors según función estructural
2. Calcular espaciamiento de soportes conforme a ASME B31.3 y estándares MSS-SP basados en tamaño, material y temperatura
3. Realizar análisis básico de cargas en sistemas de tuberías y diseñar soportes para cargas operacionales y de construcción
4. Crear y configurar soportes personalizados para requisitos específicos de proyecto usando bibliotecas de Plant 3D 2026
5. Implementar sistemas de numeración y tracking de soportes para fabricación y construcción
6. Diseñar soportes para líneas con expansión térmica significativa: spring hangers, constant support hangers, expansion loops
7. Generar Bill of Materials (BOM) completo de soportes para procurement de acero estructural y hardware

---

## Introducción

El sistema de soportes de tuberías es el componente "invisible" pero absolutamente crítico de cualquier planta industrial. Mientras que las tuberías, válvulas y equipos reciben la atención del diseño, son los soportes los que literalmente sostienen todo el sistema, transfiriendo cargas de peso muerto, operacionales, térmicas, sísmicas y de viento a las estructuras de la planta.

En proyectos industriales reales, el costo de soportes de tubería representa típicamente el 15-20% del costo total de instalación de piping - en un proyecto de refinería de $50 millones USD en piping, los supports pueden alcanzar $7.5-$10 millones. Un sistema de soportes mal diseñado resulta en:

**Consecuencias Operacionales:**
- **Fallas de tuberías:** Stress excesivos causan grietas, especialmente en soldaduras ($20,000-$200,000 por repair)
- **Fallas de equipos:** Loads excesivos en nozzles de bombas, compresores, intercambiadores ($50,000-$2M por replacement)
- **Vibración:** Soportes inadecuados permiten vibración que causa fatigue failures
- **Leaks:** Movement excesivo causa fuga en bridas y conexiones

**Consecuencias de Construcción:**
- **Modificaciones en campo:** Rediseño de soportes durante construcción ($2,000-$10,000 por soporte)
- **Delays:** Cambios de soportes retrasan construcción (penalty costs $50,000-$500,000 por día)
- **Safety incidents:** Soportes incorrectos pueden colapsar durante hydro-test o operation

**Estudios de la industria** muestran que el 30-40% de las fallas de tuberías en plantas tienen origen en diseño inadecuado de soportes, no en los pipes mismos. Diseñadores que dominan support design son esenciales en proyectos y pueden alcanzar posiciones de **Pipe Stress Engineer** o **Support Design Specialist** con salarios de $75,000-$105,000 USD en mercados desarrollados.

### Códigos y Estándares Aplicables

El diseño de soportes está regido por múltiples estándares:

**ASME B31.3 - Process Piping:**
- **Chapter V:** Análisis de flexibilidad y loads
- **Appendix S:** Tabla de support spacing recomendado
- **Stress limits:** Maximum allowable stress en pipe debido a loads

**MSS-SP (Manufacturers Standardization Society):**
- **MSS-SP-58:** Pipe Hangers and Supports - Materials, Design, Manufacture
- **MSS-SP-69:** Pipe Hangers and Supports - Selection and Application
- **MSS-SP-89:** Pipe Hangers and Supports - Fabrication and Installation Practices
- **MSS-SP-127:** Bracing for Piping Systems Seismic and Wind Loads

**AISC (American Institute of Steel Construction):**
- Design of structural steel para support structures
- Load combinations y allowable stresses

### Novedades en Support Design - Plant 3D 2026

Plant 3D 2026 introduce mejoras significativas en support design:

- **AI-Assisted Support Placement:** Algoritmos sugieren ubicaciones óptimas basadas en spacing tables
- **Automated Load Calculation:** Cálculo automático de cargas considerando peso de pipe, fluid, insulation, snow/ice
- **Enhanced Support Libraries:** Catálogos expandidos con supports de fabricantes específicos (Anvil, Carpenter & Paterson, Lisega)
- **Structural Interference Checking:** Verificación automática de clearances entre supports y estructura
- **Integration with Stress Analysis:** Export directo a CAESAR II, AutoPIPE para análisis detallado
- **Parametric Custom Supports:** Creación de supports personalizados con dimensiones variables

---

## 1. Tipos de Soportes de Tubería

Los soportes de tubería se clasifican según su función estructural en el sistema.

### 1.1 Hangers (Soportes Colgantes)

Los hangers sostienen tuberías desde arriba, suspendidas de estructuras, vigas o pipe racks.

**Tipos de Hangers:**

**A. Rigid Hanger (Hanger Rígido):**
- **Diseño:** Rod rígido de longitud fija desde estructura a pipe
- **Función:** Soporte vertical sin permitir movimiento vertical
- **Aplicación:** Líneas sin expansión térmica significativa o donde movimiento vertical no es problema
- **Ventaja:** Simple, económico ($50-$200)
- **Limitación:** No acomoda thermal growth vertical

![Rigid hanger típico con rod y clevis](../imagenes/leccion-14-rigid-hanger.png)

**Componentes de Rigid Hanger:**
1. **Top Attachment:** Beam clamp o welded lug en estructura
2. **Hanger Rod:** Threaded rod (typical sizes: 1/2", 5/8", 3/4", 1")
3. **Pipe Attachment:** Clevis hanger, U-bolt, o adjustable ring
4. **Insulation Protection:** Shield cuando pipe está insulated

**B. Spring Hanger (Hanger con Resorte):**
- **Diseño:** Spring mechanism que permite movimiento vertical mientras mantiene carga relativamente constante
- **Función:** Acomoda thermal expansion vertical
- **Aplicación:** Líneas de alta temperatura con significativo thermal growth vertical (ej: steam lines, hot oil)
- **Ventaja:** Mantiene load ~constant durante thermal cycles (±25% variation típico)
- **Costo:** $800-$5,000 (dependiendo de load capacity)

**Tipos de Spring Hangers:**

1. **Variable Spring Hanger:**
   - Spring load varía con movimiento (típicamente ±15-25%)
   - Más económico ($800-$2,000)
   - Uso: Moderate temperature lines (hasta 200°C)

2. **Constant Support Hanger:**
   - Mechanism mantiene load virtualmente constante (±5% variation)
   - Diseño: Spring con lever arm y counterweight o cam system
   - Aplicación crítica: High temperature lines (>300°C), equipment nozzles sensibles
   - Costo: Alto ($2,500-$10,000)
   - **Critical use:** Turbine connections, high-energy piping, donde load variation causa stress problems

![Constant support hanger con mecanismo de compensación](../imagenes/leccion-14-constant-support-hanger.png)

**C. Adjustable Hanger:**
- **Diseño:** Threaded rod con turnbuckle para ajuste de elevación
- **Función:** Permite adjustment durante instalación para achieve correct elevation/slope
- **Uso:** Casi universal en construcción (se convierte en rigid hanger después de adjustment)
- **Ventaja:** Facilita field adjustment sin welding

**Selección de Tipo de Hanger:**

**Decision Criteria:**

```
IF thermal growth vertical > 25mm (1"):
    IF equipment nozzle sensible o high temperature (>300°C):
        USE: Constant Support Hanger
    ELSE IF moderate temperature (100-300°C):
        USE: Variable Spring Hanger
    ELSE:
        USE: Rigid Hanger con pre-set adjustment
ELSE:
    USE: Rigid Hanger
```

**Cálculo de Thermal Growth Vertical:**

En routing con elbows verticales:
- Horizontal pipe @ temperatura alta expande
- Expansion se traduce en vertical displacement en elbows

**Ejemplo:**
- 20m horizontal run @ ΔT=200°C
- Expansion = 0.012 mm/m/°C × 20m × 200°C = 48mm horizontal
- Con 90° elbow, 48mm horizontal → 48mm vertical rise
- **Conclusion:** Spring hanger necesario si soporte cerca de elbow

### 1.2 Shoes (Zapatas de Apoyo)

Las shoes son soportes que apoyan la tubería desde abajo sobre estructuras horizontales.

**Tipos de Shoes:**

**A. Standard Pipe Shoe:**
- **Diseño:** Saddle que cubre ~120-180° de pipe circumference
- **Instalación:** Welded a pipe bottom
- **Ventaja:** Distribución amplia de load (reduce stress concentration)
- **Uso:** Pipes sobre pipe racks, structural steel, concreto
- **Aplicación:** Líneas horizontales en racks (más común en plantas)

![Pipe shoe con saddle de 180 grados](../imagenes/leccion-14-pipe-shoe-standard.png)

**Componentes:**
1. **Saddle:** Curved plate welded a pipe
2. **Base Plate:** Flat plate que descansa en estructura
3. **Anchor Bolts:** Si shoe es anchor point (fixed)
4. **Slide Plate:** Teflon o graphite para allow sliding si expansion esperada

**B. Sliding Shoe:**
- **Diseño:** Shoe con low-friction interface
- **Materiales de Sliding:**
  - PTFE (Teflon): Coefficient of friction ~0.05-0.10
  - Graphited bearing: Para high temperature
  - Stainless steel on stainless: Friction ~0.15
- **Uso:** Líneas con thermal expansion longitudinal significativa
- **Function:** Allow pipe to slide during thermal growth

**C. Anchor Shoe:**
- **Diseño:** Shoe bolted firmemente a estructura
- **Función:** Fixed point - no movement permitido
- **Uso:** Puntos donde pipe debe estar fixed (ej: inicio de expansion loop)
- **Identificación:** Típicamente pintado diferente color (ej: red = anchor)

**D. Guide Shoe:**
- **Diseño:** Shoe con lateral restraints (guides)
- **Función:** Permite movement axial pero restringe lateral
- **Uso:** Guiar direccionalidad de thermal expansion
- **Critical:** En expansion loops para forzar expansion en dirección deseada

**Selección Shoe vs Hanger:**

**Usar Shoes:**
- Pipes sobre pipe racks o structural platforms (natural support desde abajo)
- Heavy pipes donde hanger rod sería muy large/costly
- Líneas con predominantly horizontal routing

**Usar Hangers:**
- Pipes bajo estructuras (no hay surface para shoe)
- Líneas que cruzan áreas sin piso/platform
- Vertical pipe runs

### 1.3 Clamps (Abrazaderas)

Las clamps sujetan el pipe sin soldadura, útil para instalación rápida o líneas small.

**Tipos de Clamps:**

**A. U-Bolt Clamp:**
- **Diseño:** U-shaped bolt que rodea pipe
- **Uso:** Small pipes (≤4") en hangers
- **Ventaja:** No requiere soldadura a pipe (importante si pipe es stainless o high-alloy)
- **Limitación:** Load capacity menor que welded attachment

**B. Riser Clamp:**
- **Diseño:** Clamp en pipe vertical con ledge que soporta peso
- **Función:** Support vertical pipes sin welding
- **Uso:** Vertical risers, especialmente en servicios donde welding a pipe no permitido

**C. Split Clamp:**
- **Diseño:** Two-piece clamp con bolts
- **Ventaja:** Instalable sin disassembly de pipe
- **Uso:** Retrofit de supports en líneas existentes

**Limitaciones de Clamps:**
- **No para high temperature:** Differential expansion entre clamp y pipe puede causar slippage
- **Load capacity limitada:** Típicamente ≤ 1000 lb (450 kg)
- **Vibration service:** Pueden aflojarse con vibración

### 1.4 Guides (Guías Direccionales)

Los guides restringen movimiento en ciertas direcciones mientras permiten movimiento en otras.

**Función de Guides:**

En sistemas con thermal expansion, guides controlan la dirección del movement para:
1. Proteger equipos de lateral loads
2. Forzar expansion en dirección planificada (expansion loops)
3. Prevenir buckling lateral de pipes largos

**Tipos de Guides:**

**A. Four-Way Guide (Guía 4-direcciones):**
- **Restringe:** Movimiento lateral en ambas direcciones horizontales
- **Permite:** Movimiento axial (longitudinal)
- **Diseño:** Frame alrededor de pipe con clearance mínimo (3-6mm)
- **Uso:** Forzar movement longitudinal en expansion loops

**B. Single-Plane Guide:**
- **Restringe:** Movimiento en una dirección
- **Permite:** Movimiento en plane perpendicular
- **Uso:** Specific directional control

**C. Guide Shoe (mencionado arriba):**
- Shoe con lateral guides integrados

**Ubicación de Guides:**

**Reglas de Diseño:**
- **Guides near equipment nozzles:** 1-2 soportes cerca de equipo deben ser guides para prevenir lateral load en nozzle
- **Guides en expansion loops:** En inicio y fin de loop para forzar expansion en loop direction
- **Spacing de guides:** Típicamente cada 3-5 supports para controlar lateral movement

![Sistema de guides en expansion loop](../imagenes/leccion-14-guide-system-expansion-loop.png)

### 1.5 Anchors (Anclajes)

Los anchors son puntos fijos que no permiten movimiento en ninguna dirección.

**Función de Anchors:**

1. **Define expansion zones:** Anchors dividen sistema en segments independientes
2. **Absorb thermal forces:** Anchor structure debe resistir fuerzas de thermal expansion
3. **Protect equipment:** Equipos no deben ser anchors (usualmente son guides)

**Tipos de Anchors:**

**A. Structural Anchor:**
- **Diseño:** Pipe welded o bolted rígidamente a estructura masiva
- **Estructura requerida:** Heavy steel frame o concrete structure
- **Loads:** Puede ser >10,000 lb (45 kN) en large high-temp lines

**B. Anchor Chair:**
- **Diseño:** Heavy support frame que clamps pipe y está bolted a foundation
- **Uso:** Large diameter pipes (>12")
- **Costo:** Alto ($5,000-$20,000) debido a structural steel y foundation

**Ubicación de Anchors:**

**Estrategia de Diseño:**
- **Minimize número de anchors:** Cada anchor requiere heavy/costly structure
- **Typical spacing:** 50-100 metros entre anchors en long pipe runs
- **Equipment connections:** Generalmente NO anchor en equipment nozzle (use guide)

**Cálculo de Anchor Loads:**

Anchor debe resistir thermal expansion force:

**F = E × A × α × ΔT**

Donde:
- E = Young's modulus (207,000 MPa para carbon steel)
- A = Cross-sectional area of pipe wall (mm²)
- α = Coefficient of thermal expansion (0.012 mm/m/°C para CS)
- ΔT = Temperature change (°C)

**Ejemplo:**
- 8" Schedule 40 pipe (wall area ≈ 2,900 mm²)
- ΔT = 250°C
- F = 207,000 × 2,900 × 0.000012 × 250 = ~1,800,000 N = 180 metric tons

**Conclusion:** Anchors en high-temperature large pipes requieren structural design significativo.

---

## 2. Espaciamiento de Soportes según ASME B31.3

El correcto spacing de supports previene excessive sagging y stress en pipes.

### 2.1 Tablas de Espaciamiento ASME B31.3

ASME B31.3 Appendix S proporciona tablas de maximum support spacing basadas en:
- Pipe size
- Schedule (wall thickness)
- Material (carbon steel, stainless, otros)
- Contenido (water-filled como worst case)

**Tabla Resumida - Maximum Support Spacing (metros):**

**Carbon Steel - Water Filled Service:**

| Nominal Size | Schedule 40 | Schedule 80 | Schedule 160 |
|--------------|-------------|-------------|--------------|
| 1" (DN25) | 2.1 m | 2.1 m | 2.4 m |
| 2" (DN50) | 3.0 m | 3.0 m | 3.4 m |
| 3" (DN80) | 3.7 m | 3.7 m | 4.0 m |
| 4" (DN100) | 4.3 m | 4.3 m | 4.6 m |
| 6" (DN150) | 5.2 m | 5.2 m | 5.5 m |
| 8" (DN200) | 6.1 m | 6.4 m | 6.7 m |
| 10" (DN250) | 6.7 m | 7.0 m | 7.3 m |
| 12" (DN300) | 7.3 m | 7.6 m | 8.2 m |
| 16" (DN400) | 8.5 m | 8.8 m | 9.4 m |
| 20" (DN500) | 9.4 m | 9.8 m | 10.4 m |
| 24" (DN600) | 10.4 m | 10.7 m | 11.3 m |

**Notas Importantes:**

1. **Valores son MAXIMUM:** Best practice es usar 80-90% de estos valores para margin
2. **Water-filled worst case:** Si línea contiene gas o vacía, spacing puede aumentarse
3. **Concentrated loads:** Válvulas pesadas, flanges requieren supports adicionales cerca
4. **Insulated pipes:** Weight aumenta, reduce spacing permisible

### 2.2 Factores de Corrección

**A. Temperatura Elevada:**

High temperature reduce material strength, requiere closer spacing:

**Correction Factors:**
- **≤ 200°C:** No correction
- **300°C:** Reducir spacing 10%
- **400°C:** Reducir spacing 20%
- **500°C:** Reducir spacing 30%

**B. Contenido del Pipe:**

**Servicios con Menor Densidad:**
- **Gas service:** Spacing puede aumentarse 20-30% (pipe weight domina vs fluid weight)
- **Vapor service:** Spacing puede aumentarse 15-25%

**Servicios con Mayor Densidad:**
- **Dense liquids (ej: mercury, heavy oils):** Reducir spacing proporcionalmente a densidad

**C. Insulation:**

Insulation añade peso significativo:

**Typical Insulation Weights:**
- 2" thickness mineral wool: ~15 kg/m² de pipe surface
- 4" thickness: ~30 kg/m²

**Cálculo de Peso Adicional:**

**Ejemplo: 12" pipe con 4" insulation:**
- Pipe OD = 12.75" = 324mm
- Insulated OD = 324mm + 2×100mm = 524mm
- Surface area = π × 0.524 m × 1m = 1.65 m²/meter
- Weight = 1.65 × 30 = ~50 kg/m adicional

**Compare con:**
- 12" Sch 40 pipe weight = ~50 kg/m
- Water content = π × (0.305m)² / 4 × 1000 kg/m³ = ~73 kg/m

**Total = 50 + 73 + 50 = 173 kg/m (insulated) vs 123 kg/m (bare)**

**Conclusion:** Reducir spacing ~30% para heavily insulated lines.

### 2.3 Consideraciones de Diseño Práctico

**A. Alignment con Estructura:**

En diseño real, spacing exacto según tabla raramente es posible:
- Supports deben ubicarse en structural members (vigas, columnas)
- Structural module típicamente 6m o 7.5m en plantas
- **Práctica:** Adjust support spacing para alinear con structural grid

**Ejemplo:**
- ASME permite 7.3m para 12" pipe
- Structural grid es 6m modules
- **Solución:** Soportes cada 6m (dentro de allowable)

**B. Supports Adicionales en Concentrated Loads:**

**Mandatory Additional Supports:**
- **Near válvulas grandes (>300 lb / 135 kg):** Support dentro de 0.5m de válvula
- **Near flanged connections:** Support cerca para prevenir flange stress
- **Branch connections:** Support en main line cerca de branch para resistir branch weight

**C. Vertical Pipes:**

Vertical pipes requieren consideración diferente:
- **Riser clamp en bottom:** Soporta todo weight del riser
- **Guides en intervals:** Prevenir lateral deflection por wind/seismic
- **Typical guide spacing en risers:** Cada 6-9 metros

---

## 3. Análisis de Cargas y Diseño de Soportes

### 3.1 Tipos de Cargas en Sistemas de Tuberías

Los soportes deben diseñarse para múltiples condiciones de carga:

**A. Dead Loads (Cargas Muertas):**
- **Pipe weight:** Peso del tubo mismo
- **Fluid/content weight:** Peso del fluido contenido
- **Insulation weight:** Peso de aislamiento y jacketing
- **Component weight:** Válvulas, flanges, fittings

**B. Live Loads (Cargas Vivas):**
- **Hydro-test loads:** Durante testing, pipe lleno de agua (worst case para many systems)
- **Operating loads:** Condición normal de operación
- **Maintenance loads:** Personnel walking en pipe racks (typically 300 kg/m² live load)

**C. Thermal Loads:**
- **Expansion forces:** Fuerzas generadas por thermal expansion restringida
- **Thermal displacement:** Movimiento del pipe durante thermal cycles

**D. Dynamic Loads:**
- **Vibration:** Pumps, compressors transmiten vibración
- **Water hammer:** Sudden valve closure causa pressure surge
- **Pulsation:** Reciprocating equipment (pumps, compressors)

**E. Environmental Loads:**
- **Wind:** Especialmente en pipe racks elevados
- **Seismic:** Earthquake loads según zona sísmica
- **Snow/Ice:** Acumulación en pipes exteriores

### 3.2 Cálculo de Cargas en Soporte

**Procedimiento de Cálculo:**

**Paso 1: Determinar Load per Unit Length**

**W_total = W_pipe + W_fluid + W_insulation + W_components**

**Ejemplo: 8" Schedule 40 CS Pipe**

**W_pipe:**
- 8" Sch 40 = 28.6 kg/m (de pipe tables)

**W_fluid:**
- ID = 202.7 mm
- Area = π × (0.2027m)² / 4 = 0.0323 m²
- Water density = 1000 kg/m³
- W_fluid = 0.0323 × 1000 = 32.3 kg/m

**W_insulation:**
- 3" (75mm) mineral wool
- OD with insulation = 219mm + 2×75mm = 369mm
- Surface area = π × 0.369 × 1 = 1.16 m²/meter
- Insulation density = 150 kg/m³, thickness 75mm
- Volume per meter = 1.16 × 0.075 = 0.087 m³/m
- W_insulation = 0.087 × 150 = 13 kg/m

**W_components (distributed):**
- Estimate based on fittings/flanges per 10m: ~5 kg/m

**Total: W_total = 28.6 + 32.3 + 13 + 5 = 78.9 kg/m ≈ 80 kg/m**

**Paso 2: Calcular Load en Each Support**

Para simple span entre dos soportes:

**P = W_total × L**

Donde L = spacing entre soportes

**Continuando ejemplo:**
- W_total = 80 kg/m
- L = 6m (spacing)
- **P = 80 × 6 = 480 kg = 4.7 kN**

**Paso 3: Add Concentrated Loads**

Si hay válvula cerca de soporte:

**Example: Gate valve 8" Class 150**
- Valve weight ≈ 85 kg
- **Total load en soporte = 480 + 85 = 565 kg = 5.5 kN**

**Paso 4: Apply Safety Factor**

**Design Load = Operating Load × Safety Factor**

Typical safety factors:
- **Normal operating:** 1.5
- **Hydro-test:** 1.25 (ya es extreme loading)
- **Seismic/Wind:** Per building code (typically 1.0-1.5)

**Design Load = 5.5 kN × 1.5 = 8.25 kN**

### 3.3 Selección de Componentes de Soporte

**A. Hanger Rod Size Selection:**

Hanger rod debe resistir design load con adequate margin.

**Allowable Tensile Stress para Hanger Rods:**
- ASTM A36 steel rod: 140 MPa allowable
- High-strength rod (A193 B7): 240 MPa allowable

**Required Rod Area:**

**A_required = Design Load / Allowable Stress**

**Ejemplo:**
- Design load = 8.25 kN = 8,250 N
- Using A36 rod: Allowable = 140 MPa = 140 N/mm²
- A_required = 8,250 / 140 = 59 mm²

**Standard Rod Sizes:**
- 1/2" (12.7mm) diameter: Area = 127 mm² ✓ ADEQUATE
- 5/8" (15.9mm) diameter: Area = 198 mm² (mayor margin)

**Decision:** Use 1/2" rod (tiene margin >2× load)

**B. Structural Steel para Shoes:**

Shoe base plate y saddle deben diseñarse para:
1. Bearing stress en pipe (no exceder pipe yield)
2. Bearing stress en structural member supporting shoe
3. Bending stress en base plate

**Typical Designs:**
- **Small pipes (≤4"):** Standard catalog shoes (Anvil, Carpenter & Paterson)
- **Large pipes (>8"):** Custom-designed shoes con structural calculation

---

## 4. Creación de Soportes Personalizados en Plant 3D

### 4.1 Biblioteca de Soportes Standard

Plant 3D 2026 incluye bibliotecas extensas de supports:

**Accessing Support Library:**

1. Ribbon → Plant 3D tab → Piping panel → Support
2. Support Browser muestra categorías:
   - **Hangers:** Rigid, adjustable, spring, constant support
   - **Shoes:** Standard, sliding, anchor
   - **Clamps:** U-bolt, riser, beam
   - **Guides:** 4-way, single-plane
   - **Anchors:** Structural anchors, anchor chairs
   - **Bracing:** Lateral braces, sway braces

**Manufacturers Included:**
- Anvil International
- Carpenter & Paterson
- Lisega
- PHD Manufacturing
- Bergen-Power Pipe Supports

### 4.2 Inserción de Soportes Standard

**Procedimiento:**

1. **Select Pipe:** Click en pipe donde support será ubicado
2. **Insert Support Command:**
   - Ribbon → Plant 3D → Piping → Support
   - O Command: `PLANT3DSUPPORT`
3. **Select Support Type:**
   - Browser muestra supports filtrados por pipe size
   - Select tipo apropiado (ej: Adjustable Hanger)
4. **Specify Location:**
   - Click en punto exacto en pipe
   - Or enter distance desde endpoint
5. **Configure Orientation:**
   - Rotation angle para hanger rod direction
   - Elevation a estructura superior
6. **Place Support:**
   - Plant 3D inserta support 3D model
   - Automatically attached a pipe

![Inserción de hanger con configuración de elevación](../imagenes/leccion-14-support-insertion.png)

### 4.3 Soportes Personalizados (Custom Supports)

Para requisitos únicos no cubiertos por catalog:

**Creating Custom Support:**

**Método 1: Modify Existing Support**

1. Select support similar de biblioteca
2. Right-click → Edit Support Assembly
3. Modify componentes:
   - Change rod length
   - Add/remove plates
   - Adjust dimensions
4. Save as new custom support

**Método 2: Build from Structural Steel**

1. Use structural steel shapes:
   - I-beams (W-shapes)
   - Channels (C-shapes)
   - Angles (L-shapes)
   - Plates
2. Model support frame usando structural modeling tools
3. Attach to pipe con clamps o welded lugs
4. Save assembly como reusable support

**Componentes para Custom Supports:**

**Structural Shapes:**
- **W-shapes (I-beams):** Main load-bearing members
- **C-channels:** Secondary framing
- **Angles:** Bracing, stiffeners
- **Plates:** Base plates, gussets, caps

**Hardware:**
- **Bolts:** A325, A490 high-strength bolts
- **Anchors:** Expansion anchors, embed plates
- **Welded studs:** Para attachment a concrete

**Example: Custom Anchor Chair para 24" Pipe**

**Design:**
1. **Base:** W12×53 beam, 1.5m long
2. **Vertical posts:** 2 × W8×24, height to pipe centerline
3. **Top beam:** W10×30 spanning between posts
4. **Pipe saddle:** 1/2" plate curved to fit 24" pipe, welded to top beam
5. **Base plate:** 1" plate, 1.5m × 0.8m
6. **Anchor bolts:** 4 × 1-1/4" diameter A490 bolts

**Load Capacity:** >50 kN vertical, >30 kN horizontal (thermal)

**Cost:** ~$3,500 (materials) + $2,000 (fabrication) = $5,500 total

### 4.4 Parametric Supports

Plant 3D 2026 permite crear supports paramétricos:

**Parametric Variables:**
- **Rod length:** Ajustable según elevación
- **Beam span:** Variable según distance entre attachment points
- **Plate dimensions:** Parametric basado en pipe size

**Benefit:**
- Un diseño paramétrico sirve para múltiples ubicaciones
- Reduce diseño repetitivo
- Standardization mejora constructibility

**Creating Parametric Support:**

1. Model support con dimensions como parameters
2. Define variables:
   - RodLength = elevation_structure - elevation_pipe - clamp_height
   - PlateWidth = pipe_OD + 100mm clearance
3. Save with parameters
4. En insertion, Plant 3D calcula parameters basado en geometry actual

---

## 5. Numeración y Tracking de Soportes

### 5.1 Sistema de Numeración

Soportes requieren identificación única para fabricación, construcción y mantenimiento.

**Typical Support Numbering System:**

**Format: [Area]-[Type][Sequential Number]**

**Ejemplo:**
- **100-H-001:** Area 100, Hanger, número 001
- **200-S-045:** Area 200, Shoe, número 045
- **100-A-003:** Area 100, Anchor, número 003

**Nomenclature de Tipos:**
- **H:** Hanger (rigid o adjustable)
- **SH:** Spring Hanger
- **CSH:** Constant Support Hanger
- **S:** Shoe (sliding)
- **AS:** Anchor Shoe
- **G:** Guide
- **A:** Anchor
- **B:** Brace

**Alternative System - Line-Based:**

**Format: [Line Number]-[Type][Sequential]**

**Ejemplo:**
- **CW-001-H-001:** Soporte en línea CW-001, Hanger 001
- **ST-105-SH-003:** Soporte en línea ST-105, Spring Hanger 003

**Advantage:** Asocia soporte con specific pipe line

### 5.2 Configurar Support Tags en Plant 3D

**Assign Tag Numbers:**

1. Select support
2. Properties palette → Support Information section
3. **Tag Number:** Enter unique ID (ej: 100-H-001)
4. **Description:** Enter descriptive text (ej: "Adjustable Hanger, 8" Pipe, Rod 3/4"")
5. **Additional Properties:**
   - Support Type: Hanger, Shoe, Guide, Anchor
   - Load Capacity: Design load en kN
   - Elevation: Elevation of support point
   - Structure Reference: Cual viga o columna soporta

**Auto-Numbering:**

Plant 3D puede auto-number supports:

1. Tools → Support Numbering
2. Configure scheme:
   - Prefix: Area code
   - Type codes: H, S, G, A
   - Starting number: 001
   - Increment: 1
3. Select scope: Current drawing, all drawings, selected supports
4. Execute → Plant 3D asigna tags secuencialmente

### 5.3 Support Tracking y Databases

**Support Database:**

Plant 3D mantiene database de todos supports:

**Database Fields:**
- Tag Number
- Type
- Location (coordinates)
- Associated Pipe Line
- Load (design load)
- Rod Size / Beam Size
- Status (design, fabricated, installed)
- Comments

**Accessing Database:**

1. Project Manager → Supports tab
2. View list de todos supports en proyecto
3. Filter por type, area, status
4. Export to Excel para tracking

**Construction Tracking:**

Durante construcción, use database para track:
- **Design complete:** Support diseñado, en drawings
- **BOM issued:** Material requisition enviada
- **Fabricated:** Support fabricado en shop
- **Delivered:** Material en site
- **Installed:** Support installed y inspected

---

## 6. Soportes para Expansión Térmica

### 6.1 Thermal Expansion Fundamentals

**Thermal Expansion Calculation:**

**ΔL = α × L × ΔT**

**Ejemplo: 100m Carbon Steel Pipe**
- Operating temperature: 300°C
- Installation temperature: 20°C
- ΔT = 280°C
- α (CS) = 0.012 mm/m/°C
- **ΔL = 0.012 × 100 × 280 = 336 mm = 33.6 cm**

**Implication:** Pipe grows 33.6 cm - supports must accommodate!

### 6.2 Strategies para Accommodate Expansion

**A. Expansion Loops:**

**Diseño:**
- Pipe routed en U-shape o L-shape loop
- Loop flexes para absorb expansion
- Supports configured para allow/guide movement

**Support Configuration en Loop:**
- **Anchors:** En inicio y fin de loop section (fixed points)
- **Guides:** At loop ends para force expansion into loop
- **Sliding shoes:** Along straight sections para allow movement
- **No rigid restraints:** Inside loop (prevenir expansion causaría high stress)

![Expansion loop con configuración de soportes](../imagenes/leccion-14-expansion-loop-supports.png)

**Example Design:**
- 100m straight run con 33.6cm expansion
- **Solution:** Insert 15m × 10m expansion loop
- Loop flexibility absorbs expansion
- Supports: Anchors at A & B, Guides at C & D, Sliding shoes along straights

**B. Expansion Joints (mencionado en Lección 13):**

Expansion joint absorbs movement, pero soportes adyacentes críticos:

**Support Requirements cerca Expansion Joint:**
- **Anchor o guide inmediatamente adjacent:** Prevenir movement que causaría falla del joint
- **No support en joint mismo:** Joint debe poder move
- **Main anchors:** Within 4× pipe diameters de expansion joint

**C. Flexible Supports (Spring Hangers):**

Para vertical movement por thermal expansion:

**When to Use Springs:**
- Vertical displacement > 25mm (1")
- Equipment nozzles sensibles a load variation
- High-temperature lines (>250°C)

**Spring Selection:**

**Variable Spring:**
- Load variation: Operating load ±15-25%
- Costo: $800-$2,000
- Application: General high-temp lines

**Constant Support:**
- Load variation: Operating load ±5%
- Costo: $2,500-$10,000
- Application: Critical equipment connections, very high temp (>400°C)

### 6.3 Diseño de Soporte System para Thermal Expansion

**Design Process:**

**Step 1: Calculate Thermal Growth**
- Determine ΔT para cada segment
- Calculate ΔL = α × L × ΔT
- Identify direction of movement (longitudinal, lateral, vertical)

**Step 2: Define Anchor Points**
- Minimize número de anchors (costly, high loads)
- Typical spacing: 50-100m
- Equipment connections: Usually guide, not anchor

**Step 3: Design Expansion Accommodation**
- IF ΔL < 50mm: Flexible supports (springs) may be sufficient
- IF ΔL > 50mm: Expansion loops, joints, o long flexible runs
- Verify stress analysis (CAESAR II, AutoPIPE)

**Step 4: Configure Intermediate Supports**
- Between anchors: Use sliding shoes o adjustable hangers
- Add guides para control direction
- Spacing per ASME B31.3 tables

**Step 5: Specify Support Types:**

**Example: 80m High-Temp Steam Line**
- ΔT = 350°C, ΔL = 33.6 cm
- **Support Plan:**
  - Anchor at position 0m (fixed)
  - Sliding shoe @ 8m, 16m, 24m (allow longitudinal slide)
  - Guide @ 32m (direct expansion)
  - Expansion loop @ 40-60m (absorb expansion)
  - Guides @ 60m, 68m (post-loop direction control)
  - Sliding shoe @ 76m
  - Anchor @ 80m (fixed end)

**Step 6: Specify Spring Hangers if Vertical Movement**
- Calculate vertical displacement at each hanger location
- IF displacement > 25mm: Spring hanger
- Specify spring type: Variable vs Constant based on criticality

---

## 7. BOM de Soportes

### 7.1 Componentes en Support BOM

Un BOM completo de soportes incluye:

**Structural Steel:**
- I-beams (W-shapes): List size, length, quantity
- Channels, angles, plates
- Total weight para procurement

**Hardware:**
- Hanger rods: Diameter, length, quantity
- Bolts: Size, grade (A325, A490), quantity
- Nuts, washers
- Anchor bolts

**Manufactured Components:**
- Clamps: Type, size
- Beam clamps
- Saddles, shoes
- Spring cans (para spring hangers)

**Specialty Items:**
- Spring hangers: Manufacturer, model, load rating
- Constant supports: Manufacturer, model, load, travel
- Slide plates: PTFE, graphite, size

### 7.2 Generar Support BOM en Plant 3D

**Procedure:**

1. **Ribbon → Plant 3D → Reports → Support Bill of Materials**
2. **Configure Report Options:**
   - Scope: All supports, selected area, specific drawing
   - Group by: Type, Size, Manufacturer
   - Include: Materials, hardware, labor hours (estimate)
3. **Generate Report**
4. **Review BOM:**
   - Verify quantities
   - Check for missing information (rod sizes, etc.)
   - Add unit costs para budget estimate
5. **Export:**
   - Excel: Para análisis y ordering
   - PDF: Para documentation
   - CSV: Para ERP system import

**Example Support BOM Output:**

```
SUPPORT BILL OF MATERIALS
Project: Cooling Water System CW-2024
Area: 100 - Pump House

STRUCTURAL STEEL:
Description          | Size      | Length | Qty | Weight | Unit Cost | Total
---------------------|-----------|--------|-----|--------|-----------|-------
I-Beam               | W8×24     | 2.5m   | 12  | 720kg  | $1.20/kg  | $864
Channel              | C6×8.2    | 1.8m   | 8   | 118kg  | $1.15/kg  | $136
Angle                | L4×4×3/8  | 1.2m   | 24  | 195kg  | $1.10/kg  | $215
Plate 1/2"           | Various   | -      | -   | 340kg  | $1.25/kg  | $425

HANGERS:
Tag      | Type              | Rod Size | Load  | Qty | Unit Cost | Total
---------|-------------------|----------|-------|-----|-----------|-------
100-H-001 to 015 | Adj Hanger | 3/4"    | 5kN   | 15  | $125      | $1,875
100-SH-001 to 003 | Spring    | 1"      | 12kN  | 3   | $1,800    | $5,400

SHOES:
Tag      | Type        | Pipe Size | Qty | Unit Cost | Total
---------|-------------|-----------|-----|-----------|-------
100-S-001 to 020 | Std Shoe | 8"   | 20  | $180      | $3,600
100-AS-001 to 002 | Anchor  | 8"   | 2   | $850      | $1,700

HARDWARE:
Description              | Size    | Qty  | Unit Cost | Total
------------------------|---------|------|-----------|-------
High-Strength Bolt A325 | 3/4"    | 240  | $2.50     | $600
Hanger Rod A36          | 3/4"×3m | 15   | $18       | $270
Anchor Bolt A490        | 1"×18"  | 16   | $12       | $192

SPECIALTY:
Description                    | Manufacturer | Model | Qty | Unit Cost | Total
-------------------------------|--------------|-------|-----|-----------|-------
Variable Spring Hanger 12kN    | Lisega      | VS-12 | 3   | $1,800    | $5,400
PTFE Slide Plate 200×200mm     | -           | -     | 20  | $45       | $900

SUMMARY:
Structural Steel: $1,640
Standard Hangers/Shoes: $11,575
Hardware: $1,062
Specialty Items: $6,300
------------------------
TOTAL MATERIAL COST: $20,577

Estimated Fabrication Labor: 320 hours @ $55/hr = $17,600
Estimated Installation Labor: 180 hours @ $65/hr = $11,700

TOTAL ESTIMATED COST: $49,877
```

### 7.3 Cost Estimation

**Support Cost Breakdown:**

**Materials: 40-45%**
- Structural steel: Largest component
- Specialty items (springs): Expensive per unit
- Hardware: Small individual cost, adds up

**Fabrication: 30-35%**
- Shop labor para cutting, welding, painting
- Equipment: $50-$80/hour shop rate
- Complex supports (custom anchors) más labor-intensive

**Installation: 25-30%**
- Field labor para installation
- Rigging, welding, bolting
- Rate: $60-$80/hour típico

**Typical Support Costs (Installed):**

| Support Type | Material | Fab+Install | Total |
|--------------|----------|-------------|-------|
| Simple Hanger (rigid) | $150 | $200 | $350 |
| Adjustable Hanger | $200 | $250 | $450 |
| Standard Shoe | $250 | $300 | $550 |
| Spring Hanger (variable) | $1,800 | $800 | $2,600 |
| Constant Support | $4,000 | $1,500 | $5,500 |
| Custom Anchor | $2,500 | $3,500 | $6,000 |

**Cost Optimization:**

1. **Standardize:** Reducir variedad de support types reduce fabrication cost
2. **Catalog vs Custom:** Use catalog supports cuando posible (70-80% cheaper)
3. **Material selection:** A36 steel vs stainless (use A36 donde permisible)
4. **Anchors:** Minimize número - muy costosos

---

## Ejercicio Práctico

**Duración:** 15 minutos

### Escenario: Diseño de Sistema de Soportes para Pipe Rack

Usted es diseñador de soportes en proyecto de expansión de refinería. Debe diseñar el sistema completo de supports para una línea de 10" en pipe rack.

**Datos del Sistema:**

- **Line:** HC-205-10"-300#-CS (Hydrocarbon liquid - Hot Naphtha)
- **Size:** 10" (DN250), Schedule 40
- **Service Temperature:** 180°C (operating), 20°C (installation)
- **Routing:** 48 metros en pipe rack horizontal, elevación constante 8.5m
- **Pipe Rack Structure:** Steel beams cada 6 metros (structural grid)
- **Insulation:** 3" (75mm) mineral wool
- **Componentes:** 2 × gate valves 10" Class 300 (cada ~180 kg) en posiciones 12m y 36m

**Requisitos de Diseño:**

1. Calcular spacing apropiado de soportes
2. Determinar tipo de soporte (shoes en pipe rack)
3. Calcular loads en cada soporte
4. Configurar para thermal expansion
5. Numerar soportes
6. Generar BOM estimado

**Tareas:**

**1. Determinar Support Spacing:**
- ASME B31.3 para 10" Schedule 40: Max spacing = 6.7m
- Structural grid: 6m intervals
- **Decision:** Soportes cada 6m (dentro de allowable, alinea con structure)
- **Quantity:** 48m / 6m = 8 spans = 9 soportes (incluyendo endpoints)

**2. Calcular Thermal Expansion:**
- ΔT = 180 - 20 = 160°C
- L = 48m
- α = 0.012 mm/m/°C
- **ΔL = 0.012 × 48 × 160 = 92 mm**
- **Conclusion:** Significant expansion - necesita accommodation

**3. Calcular Loads:**

**Load per Meter:**
- Pipe 10" Sch 40: 40.5 kg/m
- Fluid (naphtha, SG≈0.75): π×(0.254m)²/4 × 750 kg/m³ = 38 kg/m
- Insulation 3": Surface area π×0.324m = 1.02 m²/m, weight 1.02×0.075m×150kg/m³ = 11.5 kg/m
- **Total: W = 40.5 + 38 + 11.5 = 90 kg/m**

**Load per Support (typical):**
- Spacing = 6m
- **P = 90 kg/m × 6m = 540 kg ≈ 5.3 kN**

**Support con Valve:**
- Valve weight = 180 kg
- Pipe load = 540 kg
- **Total = 720 kg ≈ 7.1 kN**

**Design Load (con safety factor 1.5):**
- Typical support: 5.3 × 1.5 = **8.0 kN**
- Support con valve: 7.1 × 1.5 = **10.7 kN**

**4. Configurar Support System para Thermal Expansion:**

**Strategy:**
- **Anchor en un end:** Position 0m (inicio)
- **Sliding shoes:** Posiciones 6m, 12m, 18m, 24m, 30m, 36m, 42m
- **Anchor en otro end:** Position 48m
- Expansion de 92mm será dividida: ~46mm hacia cada anchor

**Sliding Interface:**
- PTFE slide plates en todas sliding shoes
- Coefficient of friction: 0.08
- Friction force per support: 5.3 kN × 0.08 = 0.42 kN (low)

**5. Insertar Soportes en Plant 3D:**

**Support at 0m (Anchor):**
1. Select pipe en position 0m
2. Insert Support → Anchor Shoe
3. Properties:
   - Tag: 200-AS-001
   - Type: Anchor Shoe
   - Load: 8.0 kN design
   - Anchor bolts: 4 × 3/4" A490
4. Verify bolted firmemente a pipe rack beam

**Supports at 6m, 18m, 24m, 30m, 42m (Sliding Shoes):**
1. Select pipe en cada posición
2. Insert Support → Sliding Shoe
3. Properties:
   - Tags: 200-S-001, 200-S-003, 200-S-004, 200-S-005, 200-S-007
   - Type: Sliding Shoe con PTFE plate
   - Load: 8.0 kN design
   - Slide direction: Longitudinal (parallel a pipe)
4. Configure PTFE slide plate 200×200mm

**Support at 12m (Sliding Shoe con Valve):**
1. Insert Sliding Shoe
2. Properties:
   - Tag: 200-S-002
   - Type: Sliding Shoe (heavy-duty)
   - Load: 10.7 kN design (incluye valve weight)
   - Reinforced design para higher load

**Support at 36m (Sliding Shoe con Valve):**
- Similar a 12m
- Tag: 200-S-006

**Support at 48m (Anchor):**
- Tag: 200-AS-002
- Similar a anchor @ 0m

**6. Generar BOM:**

Reports → Support BOM

**Expected BOM:**

**SOPORTES:**
- 2 × Anchor Shoe 10" (AS-001, AS-002): @ $850 ea = $1,700
- 7 × Sliding Shoe 10" con PTFE (S-001 to S-007): @ $320 ea = $2,240

**STRUCTURAL STEEL (per shoe approx):**
- Saddle plate 1/2" × 400mm × 300mm: 9 units
- Base plate 3/4" × 500mm × 400mm: 9 units
- Total steel weight: ~450 kg @ $1.20/kg = $540

**HARDWARE:**
- Anchor bolts 3/4" × 12": 8 units (for 2 anchors) @ $8 = $64
- PTFE plates 200×200×10mm: 7 units @ $45 = $315
- Misc bolts, washers: $150

**SUMMARY:**
- Materials: $5,009
- Fabrication (est 60 hrs @ $55/hr): $3,300
- Installation (est 36 hrs @ $65/hr): $2,340
- **TOTAL SUPPORT SYSTEM COST: $10,649**

**Cost per meter de pipe: $10,649 / 48m = $222/m**

(Typical para heavy insulated lines con valves)

**7. Verificación Final:**

- [ ] Spacing ≤ ASME B31.3 allowable (6m < 6.7m ✓)
- [ ] Loads calculadas con fluid + insulation + components ✓
- [ ] Thermal expansion accommodated con sliding shoes ✓
- [ ] Anchors en endpoints para control expansion ✓
- [ ] Supports at valves para heavy loads ✓
- [ ] All supports numbered uniquely ✓
- [ ] BOM completo para procurement ✓

**Entregables:**

- Plant 3D model con 9 soportes placed y configured
- Support schedule (tabla con tags, types, loads, locations)
- BOM con material quantities y cost estimate
- Support installation drawings (exportados de Plant 3D)

---

## Evaluación

### Pregunta 1: Spring Hangers vs Rigid Hangers
**¿En qué condiciones son mandatory los spring hangers en lugar de rigid hangers, y qué consecuencias tiene usar rigid hanger donde spring es requerido?**

**Respuesta:** Spring hangers son mandatory cuando: (1) **Thermal expansion vertical > 25mm (1")** - Si rigid hanger restringe este movimiento, pipe experimenta high bending stress que puede causar fatigue cracking especialmente en soldaduras, (2) **Equipment nozzles sensibles** - Bombas, turbinas, compresores tienen load limits en nozzles; variación de carga por thermal expansion puede exceder allowable causando nozzle cracking ($50,000-$500,000 repair), (3) **High-temperature lines >300°C** - Thermal cycles repetidos con load variations causan low-cycle fatigue. Las consecuencias de usar rigid hanger donde spring es necesario incluyen: **Overstress del pipe** cuando cold - al instalar, pipe está suspended; cuando calienta y expande, rigid hanger impide vertical movement, creando upward force que bends pipe; **Understress cuando hot** - load shifts a otros soportes de manera no uniforme; **Equipment damage** - nozzle loads exceden design limits; **Fatigue failures** - después de cientos de thermal cycles (startups/shutdowns), cracks aparecen típicamente cerca de soportes rígidos. API 610 y ASME B31.3 requieren stress analysis (CAESAR II) que identifica donde springs son mandatory.

### Pregunta 2: Support Spacing y Consequences de Over-Spacing
**¿Por qué las tablas ASME B31.3 especifican maximum support spacing y qué failures pueden ocurrir si se excede este spacing?**

**Respuesta:**

**Razones para Maximum Spacing:**
ASME B31.3 Appendix S basa spacing en: (1) **Deflection limit** - Sagging entre soportes no debe exceder L/360 (donde L=spacing) para apariencia aceptable y evitar bolsas de líquido, (2) **Bending stress** - Pipe actúa como beam entre soportes; spacing excesivo causa bending stress que sumado a pressure stress puede exceder allowable, (3) **Vibration** - Long unsupported spans son prone a vibration y resonance.

**Failures por Over-Spacing:**

1. **Excessive Sagging:** Pipe sags visibly entre soportes, creando:
   - Bolsas de líquido en líneas que deben drenar
   - Trampas de gas en líneas de líquido
   - Poor appearance (client complaints en plantas visibles)

2. **Overstress:** Combined stress (pressure + bending + thermal) excede ASME allowable:
   - **Yielding:** Permanent deformation del pipe
   - **Cracking:** Cracks en longitudinal welds (manufacturing seams)
   - **Leak:** Through-wall cracks causan release de proceso (safety, environmental incidents)

3. **Vibration Failures:** Unsupported span vibra debido a flow turbulence o equipment vibration:
   - **Fatigue cracking:** High-cycle fatigue en welds o branches
   - **Loosening:** Bolted connections aflojan
   - **Noise:** Vibration transmite a estructura (>80 dB)

**Example Real:** Refinería instaló 12" cooling water line con supports cada 12 metros (exceeding ASME 7.3m limit para schedule 40). Después de 6 meses, sagging era visible (~100mm mid-span), bolsas de aire causaron flow problems, y bending stress analysis reveló stress 140% de allowable. Solución: instalar soportes adicionales ($8,000) más downtime para installation ($25,000). **Costo total de error: $33,000** vs costo de diseñar correctamente inicial: $2,000 extra en supports.

### Pregunta 3: Anchor vs Guide en Equipment Nozzles
**¿Por qué los equipment nozzles típicamente deben tener guide support cerca en lugar de anchor, y qué problemas causa anchor en nozzle?**

**Respuesta:**

**Razón para Guide (No Anchor):**
Equipment como bombas, compresores, heat exchangers están diseñados para allowable loads en nozzles especificados por fabricante (API 610, API 661, TEMA). Estos allowables incluyen:
- **Force limits:** Fx, Fy, Fz (típicamente 5-20 kN dependiendo de equipo size)
- **Moment limits:** Mx, My, Mz (típicamente 2-10 kN-m)

**Guide Support:**
- **Permite:** Movimiento longitudinal (axial) del pipe debido a thermal expansion
- **Restringe:** Movimiento lateral que aplicaría shear force/moment en nozzle
- **Resultado:** Pipe puede expand/contract sin generar fuerzas excesivas en nozzle

**Anchor en Nozzle - Problemas:**

Si pipe está anchored en o muy cerca de nozzle:

1. **Thermal Expansion Forces:** Cuando pipe calienta y quiere expandir, anchor lo previene, generando:
   - **Thermal force:** F = E × A × α × ΔT (puede ser >100 kN en large pipes)
   - Esta fuerza es transmitida directamente al nozzle
   - **Excede allowables:** Typical nozzle allowable es 10-30 kN; thermal force puede ser 5-10× esto

2. **Nozzle Damage:**
   - **Cracking:** Weld entre nozzle y vessel shell cracks (typical failure mode)
   - **Deformation:** Nozzle bends permanentemente
   - **Seal damage:** Flanged connection leaks porque faces no son parallel

3. **Equipment Damage:**
   - **Misalignment:** En rotating equipment (pumps, compressors), nozzle loads causan shaft misalignment → vibration → bearing failure ($20,000-$200,000)
   - **Shell stress:** En pressure vessels, local stress en nozzle area puede propagate cracks

**Best Practice:**
- **First support @ 2-3 meters de nozzle:** Type = Guide
- **Second support @ 5-8 metros:** Type = Guide o Sliding Shoe
- **Anchor:** 10-20+ metros de nozzle, nunca adjacent

**Example:** Pump manufacturer (API 610) specifies nozzle allowable = 12 kN force, 5 kN-m moment. Thermal expansion de 50m pipe @ ΔT=150°C genera 50 kN si restrained. Si pipe anchored @ nozzle, **50 kN >> 12 kN allowable** → nozzle failure inevitable. Con guides que permiten expansion, force en nozzle < 5 kN (solo weight + friction) → safe.

### Pregunta 4: Constant Support vs Variable Spring Hangers
**¿En qué aplicaciones justifica el alto costo de constant support hangers versus variable spring hangers, y cuál es el impact de usar variable donde constant es apropiado?**

**Respuesta:**

**Constant Support Hanger:**
- **Función:** Mantiene load virtualmente constante (±5% variation) durante todo thermal travel
- **Mecanismo:** Spring con lever arm system, cam mechanism, o counterweight que compensa cambio de spring force
- **Costo:** $2,500-$10,000 (dependiendo de capacity)

**Variable Spring Hanger:**
- **Función:** Partially mantiene load pero permite variation ±15-25%
- **Mecanismo:** Simple spring - load varía según Hooke's Law (F = k × x)
- **Costo:** $800-$2,000

**Applications Donde Constant Support es Justified:**

1. **Equipment Nozzles Sensibles:**
   - **Turbines:** Steam turbine nozzles tienen allowable ±2-5 kN load variation
   - **High-speed rotating equipment:** Pumps >3600 RPM sensibles a load changes
   - Variable spring con 20% variation puede exceder allowable
   - **Cost of failure:** Turbine nozzle crack = $500,000-$2M repair + months downtime
   - **Justification:** $10,000 constant support << potential failure cost

2. **Very High Temperature (>400°C):**
   - **Thermal travel:** Puede ser >100mm vertical
   - **Variable spring:** Load variation = k × 100mm puede ser ±30-40%
   - **Stress implications:** Load redistribution causa high stress en adjacent supports
   - **Constant support:** Maintains design load throughout temperature range

3. **Critical Process Lines:**
   - **High-energy piping:** ASME B31.1 high-energy lines donde failure es catastrophic
   - **Codes:** May require constant supports explicitly

4. **Multiple Supports en Span:**
   - Si 4-5 supports en span largo todos variable springs, load redistribution during thermal cycles es complex y puede cause overstress
   - Constant supports mantienen load distribution predictable

**Impact de Usar Variable Donde Constant Apropiado:**

**Scenario:** Steam line @ 450°C, 100m long, 4 supports, thermal growth vertical = 80mm

**Con Variable Springs (20% variation):**
- **Cold condition:** Support 1 carga = 12 kN, Support 2 = 12 kN, etc.
- **Hot condition:** Debido a 80mm growth, loads shift:
  - Support 1: 12 kN → 15 kN (+25%)
  - Support 2: 12 kN → 9 kN (-25%)
  - Stress analysis muestra pipe stress increased 40% en spans entre supports
  - **After 500 thermal cycles:** Fatigue cracks appear near Support 1

**Con Constant Supports:**
- **Cold:** 12 kN each
- **Hot:** 12.5 kN each (+4%)
- Load distribution remains uniform → stress within allowable

**Economic Justification:**
- 4 × Constant supports @ $8,000 = $32,000
- 4 × Variable springs @ $1,500 = $6,000
- **Extra cost:** $26,000
- **Avoided:** Pipe failure repair $150,000 + downtime $500,000 = $650,000
- **ROI:** $26,000 investment avoids $650,000 risk → Clearly justified

**Conclusion:** Constant supports son expensive pero mandatory en applications sensibles. Using variable spring en estas applications es false economy - saves $5-10K initial pero risks $100K-$1M+ failures.

### Pregunta 5: Sliding Shoes y Friction Forces
**¿Cómo afectan las friction forces en sliding shoes al diseño de anchors y loads en soportes, y por qué se usan PTFE slide plates?**

**Respuesta:**

**Friction Force Basics:**

Cuando pipe sobre sliding shoe se expande térmicamente y slide:

**F_friction = μ × N**

Donde:
- μ = Coefficient of friction entre shoe y support surface
- N = Normal force (weight del pipe en support)

**Sin Slide Plates (Steel on Steel):**
- μ ≈ 0.3-0.5
- Example: N = 10 kN → F_friction = 0.4 × 10 = 4 kN

**Con PTFE (Teflon) Slide Plates:**
- μ ≈ 0.05-0.10
- Same example: F_friction = 0.08 × 10 = 0.8 kN

**Impact en Anchor Design:**

**Consider:** 100m pipe con 10 sliding supports, cada support N=10kN

**Total Friction Force en Anchors:**

**Steel-on-steel:** 10 supports × 4 kN/support = **40 kN** friction force que anchor debe resistir

**PTFE slide plates:** 10 supports × 0.8 kN = **8 kN** friction force

**Anchor Structure Cost:**
- **40 kN anchor:** Requiere heavy structural frame: W12 beams, large base plate, 6-8 anchor bolts 1-1/4" → Cost $12,000
- **8 kN anchor:** Smaller structure: W8 beams, 4 bolts 3/4" → Cost $4,000

**Savings from PTFE:** $8,000 per anchor × 2 anchors (inicio/fin) = **$16,000**

**PTFE Slide Plate Cost:** 10 plates @ $45 each = $450

**Net Benefit:** $16,000 - $450 = **$15,550 savings** plus better performance

**Impact en Pipe Stress:**

Friction forces actúan como restraints durante thermal expansion:

**High Friction (steel-on-steel):**
- Pipe quiere expand 100mm
- Friction forces resist movement
- **Result:** Thermal stress aumenta en pipe cerca de sliding supports
- Stress analysis puede mostrar localized overstress (>ASME allowable)

**Low Friction (PTFE):**
- Pipe puede slide easily
- Minimal friction resistance
- Thermal stress remains within design limits

**Why PTFE Performs Well:**

1. **Low friction:** μ = 0.05-0.10 (best of common materials)
2. **Self-lubricating:** No requiere grease (importante en high-temp o clean services)
3. **Wide temperature range:** -200°C to +260°C continuous
4. **Corrosion resistant:** No corrosion products que increase friction
5. **Longevity:** 20-30 years service life sin replacement

**Alternative Materials:**

**Graphited Bearings:**
- μ ≈ 0.08-0.12
- Temperature: Up to 450°C (superior a PTFE para very high temp)
- Costo: 2-3× PTFE
- Use: Steam lines >300°C

**Stainless Steel on Stainless:**
- μ ≈ 0.15-0.20
- No separate plate needed (both surfaces SS)
- Use: Where PTFE incompatible (some chemical services)

**Conclusion:**
PTFE slide plates son industry standard porque:
- Dramatically reduce friction (factor 4-5× vs steel)
- Enable economical anchor design
- Reduce pipe stress
- Long service life
- Low cost ($45 vs thousands en anchor structure savings)

Diseñador que omite PTFE plates "para ahorrar $45" causa:
- Higher anchor costs (+$8,000)
- Potential pipe overstress (risk de failure)
- **False economy** - saves pennies, costs thousands

---

## Resumen

En esta lección hemos dominado el diseño completo de sistemas de soportes de tubería en AutoCAD Plant 3D 2026:

**Puntos Clave:**

1. **Tipos de Soportes:**
   - Hangers: Rigid, spring, constant support - selección basada en thermal movement
   - Shoes: Standard, sliding (con PTFE), anchor - para pipes sobre estructuras
   - Guides: Control direccional de expansion
   - Anchors: Fixed points, requieren structural design robusto

2. **Espaciamiento:**
   - ASME B31.3 Appendix S tables - maximum spacing basado en size, schedule, material
   - Corrections para temperatura, insulation, contenido
   - Alignment con structural grid en diseño práctico

3. **Análisis de Cargas:**
   - Calcular weight: Pipe + fluid + insulation + components
   - Safety factors: 1.5× operating loads típico
   - Component selection (rod size, beam size) basado en design loads

4. **Thermal Expansion:**
   - Calculate ΔL = α × L × ΔT
   - Strategies: Expansion loops, sliding shoes, spring hangers
   - Anchor placement: Minimize número, never en equipment nozzles
   - Guide configuration: Control direction de expansion

5. **Soportes Personalizados:**
   - Plant 3D extensive libraries (Anvil, Lisega, etc.)
   - Custom design para aplicaciones especiales
   - Parametric supports para flexibility

6. **BOM y Costos:**
   - Support costs: 15-20% de total piping installation
   - Material + fabrication + installation
   - Optimization: Standardize, use catalog supports, minimize anchors

7. **Best Practices:**
   - Guide (not anchor) near equipment nozzles
   - PTFE slide plates reduce friction and costs
   - Spring hangers donde vertical thermal movement > 25mm
   - Constant supports para critical/high-temp applications
   - Support spacing aligned con structural grid

El diseño de soportes es crítico pero often neglected hasta construction - diseñadores que dominan support engineering previenen costly field modifications y equipment failures. Esta expertise es pathway a roles de **Pipe Stress Analyst** ($80,000-$110,000 USD) usando CAESAR II, AutoPIPE para stress analysis avanzado de sistemas complejos.

---

## Próxima Lección

En la **Lección 15: Modo Ortogonal y Enrutamiento Avanzado** profundizaremos en técnicas avanzadas de routing para maximizar eficiencia y calidad de diseño. Cubriremos configuración avanzada de orthogonal routing, preferencias de routing automático, branch connections y derivaciones complejas, routing en espacios altamente congestionados, routing a través de estructuras con clearances mínimos, cambios complejos de elevación con múltiples offsets, routing con pendientes variables, troubleshooting de problemas comunes de routing, y best practices de routing profesional usadas en proyectos EPC internacionales. Estas técnicas avanzadas son lo que diferencia diseñadores senior capaces de ejecutar proyectos complejos de diseñadores junior.
