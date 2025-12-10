# LECCIÓN 4: CREATE INTERSECTION WIZARD

## CIVIL 3D 2026 AVANZADO - MÓDULO 2

**Duración:** 2 horas
**Nivel:** Avanzado
**Prerequisitos:** Lecciones 1-3 completadas, conocimiento sólido de corridors

---

## OBJETIVOS DE LA LECCIÓN

Al finalizar esta lección serás capaz de:

1. Dominar el flujo completo del Create Intersection Wizard
2. Configurar intersection objects con parámetros profesionales
3. Seleccionar y customizar curb return assemblies apropiados
4. Generar offset alignments automáticos para intersecciones
5. Ajustar profiles verticales en intersección de manera dinámica
6. Analizar lane slope y cross slope transitions
7. Gestionar intersection corridors con prioridades correctas
8. Customizar assemblies para casos especiales
9. Resolver problemas comunes del wizard (troubleshooting)
10. Optimizar workflow para proyectos con múltiples intersecciones

---

## 1. INTRODUCCIÓN AL INTERSECTION OBJECT

### 1.1 ¿Qué es un Intersection Object?

Un **Intersection Object** en Civil 3D es un contenedor inteligente que agrupa:

- **Alignments:** Centerlines de vías + offset alignments + curb returns
- **Profiles:** Vertical designs de todas las vías
- **Corridors:** Geometric model 3D de toda la intersección
- **Assemblies:** Templates específicos para cada zona
- **Design criteria:** Normas aplicadas automáticamente

**Ventaja clave:** Todos estos elementos están **dinámicamente vinculados**. Un cambio en alignment principal actualiza automáticamente:
- Curb returns
- Offset alignments
- Corridor
- Surfaces

### 1.2 Cuándo Usar Create Intersection Wizard

#### SÍ usar el Wizard cuando:

1. **Intersección estándar:** 3 o 4 legs con geometría convencional
2. **Diseño rápido:** Timeline ajustado, necesitas intersección completa en < 1 hora
3. **ROW definido:** Curb return radii y alignments ya determinados
4. **Cliente espera standards:** Diseño debe seguir templates predefinidos

#### NO usar el Wizard (diseño manual) cuando:

1. **Intersección muy compleja:** > 5 legs, skewed angles < 45°, múltiples turn lanes
2. **Geometría única:** Roundabout turbo, DDI (Diverging Diamond Interchange)
3. **Control total necesario:** Cada detail debe ser personalizado
4. **Diseño iterativo extremo:** Cliente cambia parámetros cada día

**En práctica:** 80% de intersecciones urbanas/suburbanas son candidatas para el Wizard.

### 1.3 Comparación: Wizard vs Manual Design

| Aspecto | Create Intersection Wizard | Manual Design |
|---------|---------------------------|---------------|
| **Tiempo inicial** | 15-30 minutos | 2-4 horas |
| **Curva de aprendizaje** | Media | Alta |
| **Flexibilidad** | Media-Alta (customizable después) | Total |
| **Actualizaciones** | Automáticas (dinámicas) | Manuales (tedioso) |
| **Errores típicos** | Pocos (validación automática) | Muchos (humano) |
| **Documentación** | Consistente | Variable |

**Best Practice:** Iniciar con Wizard, luego customizar manualmente si es necesario.

---

## 2. PREREQUISITOS Y PREPARACIÓN

### 2.1 Elementos Requeridos ANTES de Usar el Wizard

#### 1. Surface (Terreno Existente):

```
Surface Name: EG (Existing Ground)
Estado: Completa, sin triángulos gigantes
```

**Verificación:**
```
Surface Properties > Statistics
- Minimum elevation: Razonable (no -999999)
- Maximum elevation: Razonable (no 999999)
- Número de puntos: > 100 en área de intersección
```

#### 2. Alignments de Vías Principales:

**Mínimo 2 alignments** (para T-intersection) o **2+ alignments** (para cruz o multi-leg).

**Requisitos críticos:**

```
✓ Deben estar en el MISMO Site
✓ Deben intersectar (cruzarse) en región común
✓ Station range debe cubrir ≥ 200 ft antes/después del PI
✓ No deben tener geometry errors (gaps, overlaps)
```

**Verificación de Site:**
```
Alignment Properties > Information tab
- Site: [mismo nombre para todos]
```

**Si están en Sites diferentes:**
```
1. Toolspace > Prospector > Sites
2. Right-click alignment > Move to Site
3. Select target site
```

#### 3. Profiles para Cada Alignment:

**Requisitos:**

```
✓ Profile debe existir para TODOS los alignments involucrados
✓ Station range del profile ≥ station range del alignment
✓ Profile debe ser suave (no vertical drops repentinos)
```

**Tipo de profile:**
- **Surface profile:** Mínimo (EG profile)
- **Design profile:** Preferido (FG profile con vertical curves)

**Best Practice:** Tener **finished ground (FG) profiles** diseñados ANTES de usar el wizard.

#### 4. Assemblies Preparados:

Civil 3D incluye assemblies de intersección por defecto, pero profesionales crean **custom assemblies**.

**Assemblies necesarios:**

1. **Primary Road Assembly:** Para main street approach
2. **Secondary Road Assembly:** Para cross street approach
3. **Curb Return Assembly:** Para corners (esquinas)

**Ubicación de assemblies por defecto:**
```
Ribbon > Home > Palettes > Tool Palettes
- Imperial > Corridor Modeling > Intersection
```

### 2.2 Configuración de Design Criteria

#### Cargar AASHTO Design Criteria File:

```
Ribbon > Settings > Drawing Settings > Object Layers tab > Design Criteria
```

**Click: "Load Design Criteria File"**

**Archivo:**
```
C:\ProgramData\Autodesk\C3D 2026\enu\Data\Corridor Design Standards\AASHTO 2011 (Metric).xml
```

O versión Imperial:
```
AASHTO 2011 (US Imperial).xml
```

**Parámetros aplicados automáticamente:**
- Minimum/maximum curve radius
- Superelevation rates
- Stopping sight distance values
- Lane widths standards

### 2.3 Site Configuration

**Todos los alignments deben estar en MISMO Site.**

#### Crear Site dedicado para intersección:

```
Toolspace > Prospector > Sites > Right-click > New Site
```

**Name:** `Intersection - Main St & Elm St`

**Ventaja:** Agrupa todos los elementos de intersección, fácil de gestionar.

#### Mover alignments al Site:

```
Prospector > Alignments > [alignment name] > Right-click > Move to Site
Select Site: "Intersection - Main St & Elm St"
```

Repetir para TODOS los alignments.

---

## 3. CREATE INTERSECTION WIZARD - WORKFLOW COMPLETO

### 3.1 Acceso al Wizard

**Ubicación:**

```
Ribbon > Intersections tab > Create Intersection
```

O:

```
Command line: CREATEINTERSECTION
```

**Diálogo:** "Create Intersection - General" se abre.

### 3.2 PASO 1: General Settings

#### Tab: General

**Intersection Name:**
- Name: `INT-001 Main St & Elm St`
- Description: `4-leg signalized intersection`

**Intersection Marker Style:**
- Style: `Intersection Point` (coloca marker en PI)
- Layer: `C-ROAD-INTR`

**Corridor Regions:**
- **Create corridor regions for curb returns:** ✓ CHECKED (recomendado)
- **Razón:** Automatiza creación de corridor, evita trabajo manual

**Intersection Location (Pick Point):**

**Click: "Pick Point in Drawing"**

- Seleccionar punto aproximado donde se cruzan los alignments
- No necesita ser exacto, wizard encuentra PI real automáticamente

**Geometría detectada automáticamente:**

Wizard analiza:
- Alignments que intersectan en región cercana al pick point
- Angles entre alignments
- Station values de PI en cada alignment

**Display:**
```
Detected alignments:
- Main Street CL (Primary)
- Elm Street CL (Secondary)

Intersection angle: 87.5° ✓ Aceptable (75-90° preferred)
```

### 3.3 PASO 2: Geometry Details

#### Tab: Geometry Details

**Intersection Type:**

Opciones:
- **3-leg (T-intersection)**
- **4-leg (Cross intersection)**
- **Multi-leg (Custom)** - 5+ legs

**Selection:** Auto-detected según número de alignments

**Curb Return Radius:**

**Opciones:**

1. **Use single radius for all corners:**
   - Radius: 25 ft (ejemplo urbano)
   - **Uso:** Intersección simple, mismo radio en todos los corners

2. **Specify radius for each corner individually:**
   - NE corner: 30 ft
   - SE corner: 25 ft
   - SW corner: 25 ft
   - NW corner: 30 ft
   - **Uso:** Optimizar según turning radius requirements

**Design Criteria Reference:**

Si AASHTO está cargado, wizard sugiere radios mínimos:

```
Based on design vehicle: WB-50
Minimum radius: 50 ft
Suggested radius: 75 ft
```

**Offset Alignments:**

**Create offset alignments for:**
- ✓ Curb lines (edge of pavement)
- ✓ Right-of-Way (ROW) lines
- ✓ Sidewalk edges (si aplica)

**Offset distances:**

| Offset Type | Distance from CL | Notes |
|-------------|------------------|-------|
| Curb (right) | 12 ft | Half-width de 2-lane road (24 ft) |
| Curb (left) | 12 ft | Same |
| ROW | 30 ft | Típico urbano |
| Sidewalk (outer) | 18 ft | Curb + 6 ft sidewalk |

### 3.4 PASO 3: Corridor Regions

#### Tab: Corridor Regions

**Corridor Name:**
- Name: `Corridor - INT-001`

**Assembly Assignment:**

**Para cada zona de la intersección:**

1. **Primary Road (Main Street):**
   - Assembly: `Urban Collector - 2 Lane with Curb`
   - Station range: Auto (entire approach)

2. **Secondary Road (Elm Street):**
   - Assembly: `Urban Local - 2 Lane with Curb`
   - Station range: Auto

3. **Curb Return (all 4 corners):**
   - Assembly: `Curb Return with Sidewalk`
   - **Importante:** Mismo assembly para todos los corners (consistency)

**Assembly Preview:**

**Click: "Preview Assembly"** para ver cross-section.

Verificar:
- Lane widths correctos
- Curb height (6 inches típico)
- Sidewalk incluido
- Subbase/base layers

**Target Surface:**

- **Existing Surface:** EG (Existing Ground)
- **Uso:** Para grading y earthwork calculations

### 3.5 PASO 4: Lane Slope Analysis

#### Tab: Lane Slope

Civil 3D analiza **cross slopes** en la intersección para evitar:
- Drainage problems (agua estancada)
- Slope reversals (water flowing wrong direction)
- Excessive slopes (incomodidad vehicular)

**Cross Slope Settings:**

**Primary Road:**
- **Normal crown:** 2% (típico)
- **Direction:** Crown at centerline (high point at CL)

**Secondary Road:**
- **Normal crown:** 2%
- **Direction:** Crown at centerline

**Intersection Area:**

**Opciones de slope management:**

1. **Maintain approach crown through intersection:**
   - Ventaja: Simple
   - Desventaja: Puede causar slope reversals

2. **Transition to flat (0% cross slope) at intersection:**
   - Ventaja: Elimina slope issues
   - Desventaja: Puede acumular agua

3. **Transition to single slope across entire intersection:**
   - Ventaja: Mejor drenaje
   - Desventaja: Más complejo

**Recomendación AASHTO:** Opción 3 (single slope) para mejores results.

**Slope Transition Distance:**

- **Distance:** 50-100 ft antes de PI
- **Razón:** Transición gradual, confortable para vehículos

**Wizard Validation:**

Wizard muestra warnings si detecta:
- ⚠️ Slope reversal en station X
- ⚠️ Cross slope > 4% (excesivo)
- ⚠️ Drainage issue posible

### 3.6 PASO 5: Profile Adjustments

#### Tab: Profile Adjustments

Wizard permite ajustar **vertical alignments** para match en PI.

**Profile Matching:**

**Opciones:**

1. **Automatic elevation matching:**
   - Wizard ajusta profiles para que intersecten en mismo elevation
   - **Método:** Vertical curve adjustment

2. **Manual elevation specification:**
   - User especifica elevation exacta en PI
   - Wizard crea vertical curves para llegar a esa elevation

**Match Point:**

- **Station:** PI station (auto-detected)
- **Elevation:** Average de todos los profiles en PI (default)

**Ejemplo:**

```
Main Street profile @ PI: Elev 100.5 ft
Elm Street profile @ PI: Elev 100.2 ft

Wizard promedio: (100.5 + 100.2) / 2 = 100.35 ft

Ajuste:
- Main Street: Lower 0.15 ft con vertical curve
- Elm Street: Raise 0.15 ft con vertical curve
```

**Vertical Curve Parameters:**

**K-value:** Auto según design speed

| Design Speed | K-value (Crest) | K-value (Sag) |
|--------------|-----------------|---------------|
| 30 mph | 19 | 26 |
| 35 mph | 29 | 37 |
| 40 mph | 44 | 49 |
| 45 mph | 61 | 64 |

**Grade Limits:**

Wizard verifica:
- ✓ Grade ≤ 6% (approach to intersection)
- ✓ Grade ≤ 2% en zona de intersección (± 50 ft)

### 3.7 PASO 6: Review y Create

#### Tab: Review

**Resumen de configuración:**

```
Intersection Name: INT-001 Main St & Elm St
Type: 4-leg cross intersection
Number of curb returns: 4
Corridor regions: 7 (4 approaches + 4 curb returns - overlaps = 7)

Alignments to be created:
- 8 curb offset alignments (4 per road)
- 4 curb return alignments
Total new alignments: 12

Profiles to be created:
- 12 (one per alignment)

Corridors to be created:
- 1 master corridor with 7 regions
```

**Validation Results:**

```
✓ All alignments in same site
✓ Profiles exist for all base alignments
✓ No geometry conflicts detected
✓ Assemblies valid
⚠️ Warning: Grade on Main Street @ Sta 10+50 is 5.8% (acceptable but steep)
```

**Click: "Create Intersection"**

**Processing Time:** 30-90 segundos

**Progress Bar:**
```
Creating offset alignments... [||||||||--] 80%
Creating profiles... [||||||||||] 100%
Creating corridor regions... [||||------] 40%
```

---

## 4. POST-WIZARD CUSTOMIZATION

### 4.1 Intersection Object Browser

Después de crear, el **Intersection Object** aparece en Prospector:

```
Toolspace > Prospector > Intersections > INT-001
```

**Expand tree:**
```
INT-001
├── Alignments (12)
│   ├── Main Street CL
│   ├── Main Street Curb Left
│   ├── Main Street Curb Right
│   ├── Elm Street CL
│   ├── Elm Street Curb Left
│   ├── Elm Street Curb Right
│   ├── Curb Return NE
│   ├── Curb Return SE
│   ├── Curb Return SW
│   └── Curb Return NW
├── Profiles (12)
├── Corridors (1)
│   └── Corridor - INT-001
└── Surfaces (1)
    └── INT-001 Surface
```

### 4.2 Editar Curb Return Radius

**Scenario:** Cliente requiere radio mayor en NE corner para WB-62 truck.

#### Método 1: Intersection Properties

```
Right-click INT-001 > Intersection Properties
```

**Tab: Geometry Details > Curb Returns**

```
Corner: NE
Current radius: 25 ft
New radius: 50 ft
```

**Click: Apply**

**Resultado:**
- Curb return alignment se regenera automáticamente
- Corridor se actualiza
- Adjacent regions se ajustan

#### Método 2: Direct Alignment Edit

```
Right-click "Curb Return NE" alignment > Alignment Properties
```

**Tab: Geometry**

```
Curve radius: Change from 25 to 50
```

**Click: OK**

**Importante:** Si editas directamente, puede romper dynamic link con Intersection Object. Preferir Método 1.

### 4.3 Ajustar Assembly en Región Específica

**Scenario:** Curb return SW necesita wider sidewalk (8 ft vs 6 ft).

#### Paso 1: Editar Assembly

```
Toolspace > Prospector > Assemblies > Curb Return with Sidewalk
Right-click > Copy (crear copia)
Name: "Curb Return with Wide Sidewalk"
```

**Edit assembly:**
```
Assembly Properties > Construction tab
- Sidewalk subassembly > Width: Change 6 to 8
```

#### Paso 2: Cambiar Assembly en Región

```
Corridor Properties > Parameters tab > Regions
```

**Find region:** `Curb Return SW`

**Change assembly:**
```
Current: Curb Return with Sidewalk
New: Curb Return with Wide Sidewalk
```

**Rebuild corridor:**
```
Corridor > Rebuild
```

### 4.4 Añadir Turn Lane Después de Wizard

**Scenario:** Agregar left-turn lane en Main Street approach.

#### Workflow:

**Paso 1: Crear offset alignment para turn lane**

```
Alignment > Create Offset Alignment
Parent: Main Street CL
Offset: 6 ft left
Station range: 10+00 to 15+00 (taper + storage)
```

**Paso 2: Crear assembly con turn lane**

```
Assembly: Main Street with LTL
- 2 through lanes @ 12 ft
- 1 left-turn lane @ 12 ft
- Median @ 6 ft
```

**Paso 3: Agregar región al corridor**

```
Corridor > Add Region
Name: Main Street Turn Lane
Start: Sta 10+00
End: Sta 15+00
Assembly: Main Street with LTL
```

**Paso 4: Crear transition region**

Entre región normal (2 lanes) y región con turn lane (3 lanes):

```
Corridor > Add Region (between)
Name: Main Street Taper
Start: Sta 10+00
End: Sta 13+60
Assembly: Transition Assembly (widening)
```

---

## 5. CURB RETURN ASSEMBLIES CUSTOMIZATION

### 5.1 Componentes de Curb Return Assembly

**Subassemblies típicos:**

1. **LinkWidthAndSlope:** Pavimento con ancho variable
2. **UrbanCurbGutterGeneral:** Curb and gutter
3. **LinkSlopeToSurface:** Grading hacia EG
4. **UrbanSidewalk:** Acera

**Orden (de centerline hacia afuera):**
```
[CL] → [Pavement] → [Curb] → [Sidewalk] → [Grading to EG]
```

### 5.2 Creating Custom Curb Return Assembly

#### Paso 1: Crear Assembly Base

```
Ribbon > Home > Create Design > Assembly
Name: Custom Curb Return - 20ft Radius
Type: Intersection
```

#### Paso 2: Agregar Subassemblies

**Tool Palettes > Corridor Modeling > Intersection**

**Arrastrar a Assembly:**

1. **LinkWidthAndSlope** (right side):
   - Width: 20 ft (radio interno + offset)
   - Slope: 2% (toward outside)
   - **Advanced Parameters > Targets:**
     - ✓ Use offset alignment target (conecta a curb return alignment)

2. **UrbanCurbGutterGeneral**:
   - Curb height: 6 inches
   - Gutter width: 1.5 ft
   - Gutter slope: 4%

3. **UrbanSidewalk**:
   - Width: 6 ft
   - Thickness: 6 inches
   - Slope: 2% (away from curb)

4. **LinkSlopeToSurface**:
   - Slope: 2:1 (2H:1V)
   - **Target:** EG surface

#### Paso 3: Mirror para Left Side

```
Assembly > Mirror subassemblies
```

#### Paso 4: Save Assembly

```
File > Save
```

**Uso:** Asignar este assembly a curb return regions en corridor.

### 5.3 Handling Curb Return Transitions

**Problema:** Curb return alignment tiene radius variable (entry radius ≠ exit radius).

**Solución:** Assembly con **parametric width**.

#### Assembly con Width Target:

**Subassembly:** `LinkWidthAndSlope`

**Parameters:**
- **Width:**
  - Type: **Target** (no fixed value)
  - Target: Curb Return Alignment offset

**Resultado:** Ancho del pavement se ajusta automáticamente siguiendo el alignment radius.

---

## 6. INTERSECTION CORRIDORS Y PRIORIDADES

### 6.1 Corridor Priority Management

Cuando múltiples corridor regions se **overlap**, Civil 3D necesita saber cuál tiene prioridad.

#### Ejemplo de Overlap:

```
Main Street corridor: Sta 5+00 to 15+00
Curb Return NE corridor: Sta 12+00 to 14+00 (en Main Street stations)

Overlap zone: Sta 12+00 to 14+00
```

**¿Qué corridor se renderiza?**

Depende de **priority setting**.

### 6.2 Setting Corridor Priority

```
Corridor Properties > Parameters tab > Regions
```

**Priority column:**
- Lower number = Higher priority
- **Default:** All regions = Priority 0

**Example configuration:**

| Region Name | Priority | Reason |
|-------------|----------|--------|
| Main Street Approach | 1 | Lower priority |
| Elm Street Approach | 1 | Lower priority |
| Curb Return NE | 0 | **Higher priority** (renders on top) |
| Curb Return SE | 0 | Higher priority |
| Curb Return SW | 0 | Higher priority |
| Curb Return NW | 0 | Higher priority |

**Regla general:**
- **Curb returns = Priority 0** (highest)
- **Approaches = Priority 1** (lower)

**Razón:** Curb returns definen las esquinas críticas, deben "win" en overlaps.

### 6.3 Rebuild Corridor Strategies

Cada vez que cambias geometry, debes **rebuild corridor**.

#### Opciones de Rebuild:

**Automatic Rebuild:**
```
Corridor Properties > Parameters > Rebuild
- ✓ Rebuild Automatic
```

**Ventaja:** Actualización inmediata
**Desventaja:** Puede ser lento en corridors muy largos

**Manual Rebuild:**
```
Right-click Corridor > Rebuild Corridor
```

**Ventaja:** Control total de cuándo rebuild
**Desventaja:** Fácil olvidar, ver geometry desactualizado

**Best Practice:** Automatic durante diseño inicial, Manual durante tweaking fino.

---

## 7. LANE SLOPE Y CROSS SLOPE TRANSITIONS

### 7.1 Normal Crown vs Superelevation

**En approaches (fuera de intersección):**
- **Normal crown:** 2% slope desde centerline hacia ambos lados
- **Superelevation:** En curvas, slope hacia inside del curve

**En intersección:**
- **Transition a single slope** para evitar drainage issues

### 7.2 Cross Slope Transition Methods

#### Método 1: Pivot About Centerline

**Descripción:** Centerline mantiene elevation, edges suben/bajan.

**Ventaja:** Centerline profile no cambia
**Desventaja:** Edges pueden tener grades empinadas

#### Método 2: Pivot About Edge

**Descripción:** Un edge mantiene elevation, el opuesto y centerline ajustan.

**Ventaja:** Control de drainage hacia un lado específico
**Desventaja:** Centerline profile cambia

#### Método 3: Raise/Lower Entire Section

**Descripción:** Toda la sección sube/baja uniformemente.

**Ventaja:** Mantiene cross slope constante
**Desventaja:** Puede requerir más earthwork

**En Civil 3D Intersection Wizard:**

Wizard usa **Método 1** (Pivot About Centerline) por defecto.

### 7.3 Verificación de Slope con Analysis

```
Corridor Surface Properties > Analysis tab
```

**Analysis Type:** Slopes

**Display:**
- Green: 0-2% (excellent drainage)
- Yellow: 2-4% (acceptable)
- Orange: 4-6% (steep but OK for short distances)
- Red: > 6% (problematic, verify)

**Zoom a intersection area:**

Verificar:
- ✓ No hay áreas rojas (> 6%)
- ✓ No hay áreas planas (0%) que acumulen agua
- ✓ Transiciones graduales (no jumps de green a red)

---

## 8. TROUBLESHOOTING COMMON ISSUES

### 8.1 "Alignments not in same site" Error

**Error message:**
```
Cannot create intersection. Selected alignments must be in the same site.
```

**Solución:**

```
1. Toolspace > Prospector > Sites
2. Expand cada site, encontrar alignments
3. Right-click alignment > Move to Site
4. Select common site
5. Retry Create Intersection
```

### 8.2 Corridor Regions No Se Generan

**Síntoma:** Wizard completa, pero corridor está vacío.

**Causa común:** Profiles no existen para offset alignments creados por wizard.

**Solución:**

```
1. Toolspace > Prospector > Intersections > INT-001 > Alignments
2. Para cada offset alignment:
   - Right-click > Create Profile from Surface
   - Surface: EG
   - Profile: Create
3. Corridor > Rebuild
```

### 8.3 Curb Return Alignment Tiene Gaps

**Síntoma:** Curb return alignment no es continuo.

**Causa:** Radius muy pequeño o muy grande para la geometry.

**Solución:**

```
1. Intersection Properties > Geometry Details
2. Adjust curb return radius:
   - Si muy pequeño (< 15 ft): Increase a 20-25 ft
   - Si muy grande (> 100 ft): Decrease a 50-75 ft
3. Apply
```

### 8.4 Corridor Surface Tiene Triángulos Gigantes

**Síntoma:** Corridor surface muestra triángulos que cruzan toda la intersección.

**Causa:** Insufficient frequency (assembly application points).

**Solución:**

```
Corridor Properties > Parameters tab > Frequency
```

**Add critical stations:**
- At inicio/final de cada region
- At cada PI en alignments
- At cada change en cross slope

**Frequency settings:**
```
- Along tangents: 25 ft
- Along curves: 10 ft
- Along spirals: 5 ft
```

### 8.5 Assembly No Encuentra Target

**Error message:**
```
Assembly target not found for region [name]
```

**Causa:** Subassembly está configurado para usar target que no existe.

**Solución:**

```
1. Assembly Properties > Construction tab
2. Select subassembly con target (ej: LinkWidthAndSlope)
3. Subassembly Properties > Parameters
4. Target settings:
   - ✓ Verify target alignment/surface exists
   - Update target name si cambió
5. Rebuild corridor
```

---

## 9. OPTIMIZATION PARA MÚLTIPLES INTERSECCIONES

### 9.1 Template Workflow

**Proyecto con 10+ intersecciones similares:**

#### Paso 1: Crear Template Drawing

```
File > New > Template
Name: Intersection_Template_Urban.dwt
```

**Incluir:**
- Assemblies estándar (primary road, secondary road, curb returns)
- Design criteria files precargados
- Layers configurados
- Styles predefinidos

#### Paso 2: Save Assemblies a Tool Palette

```
Assembly > Right-click > Add to Tool Palette
Tool Palette: Custom - Urban Intersections
```

**Resultado:** Drag-and-drop assemblies a nuevos drawings.

#### Paso 3: Use Template en Nuevos Proyectos

```
File > New > Select Template
Template: Intersection_Template_Urban.dwt
```

**Time saved:** 15-20 minutos por intersección.

### 9.2 Batch Processing (Advanced)

**Para proyectos MASIVOS (50+ intersecciones):**

Civil 3D API (Autodesk .NET API) permite **scripting**.

**Ejemplo (pseudocode):**
```csharp
For each intersection in list:
    SelectAlignments(intersection.primary, intersection.secondary)
    CreateIntersection(name: intersection.name, radius: 25)
    AssignAssemblies(primary: "Urban", curb: "Standard")
    CreateCorridor()
    ExportSurface()
Next
```

**Beneficio:** 100 intersecciones en 1 hora (vs 50 horas manual).

**Limitación:** Requiere conocimiento de programación (.NET/C#).

---

## 10. EXERCISE: INTERSECCIÓN COMPLETA CON WIZARD

### 10.1 Objetivo del Ejercicio

Crear una intersección completa usando Create Intersection Wizard:

**Datos:**
- **Main Street:** 2-lane collector, 35 mph
- **Oak Avenue:** 2-lane local, 25 mph
- **Intersection type:** 4-leg cross, 85° angle
- **Curb return radius:** 25 ft (todos los corners)
- **Design vehicle:** SU-30 (single unit truck)

### 10.2 Deliverables

1. **Intersection object** completo
2. **12 alignments** (2 centerlines + 8 curb offsets + 4 curb returns)
3. **Corridor** con 7 regions
4. **Surface** de intersección
5. **Plan view** con labeling
6. **Profile views** de ambas vías

### 10.3 Pasos del Ejercicio

**Paso 1: Preparación (15 min)**
- Verificar EG surface
- Verificar alignments en mismo site
- Crear FG profiles para ambas vías

**Paso 2: Run Wizard (10 min)**
- General settings: Name, pick point
- Geometry: 4-leg, radius 25 ft
- Assemblies: Urban collector / local
- Create intersection

**Paso 3: Verificación (10 min)**
- Revisar corridor en 3D
- Verificar slope analysis
- Check curb return geometry

**Paso 4: Customization (15 min)**
- Cambiar radius en NE corner a 30 ft (truck access)
- Agregar wider sidewalk en SW corner
- Adjust profile match elevation

**Paso 5: Documentation (10 min)**
- Create plan sheets
- Add labels (station/elevation)
- Export surface to LandXML

---

## RESUMEN DE LA LECCIÓN

En esta lección aprendiste:

1. **Intersection Object:** Contenedor dinámico de alignments, profiles, corridors
2. **Prerequisitos:** Surface, alignments en mismo site, profiles
3. **Wizard workflow:** 6 pasos desde General hasta Review
4. **Customization:** Editar radios, assemblies, añadir turn lanes
5. **Curb return assemblies:** Componentes, width targets, transitions
6. **Corridor priorities:** Overlap management, rebuild strategies
7. **Slope analysis:** Cross slope transitions, drainage verification
8. **Troubleshooting:** Errores comunes y soluciones
9. **Optimization:** Templates, batch processing para proyectos grandes

---

## PRÓXIMA LECCIÓN

**Lección 5: Complex Intersections y Analysis**

Aprenderás a diseñar intersecciones complejas (5+ legs, skewed, grade-separated), realizar análisis de capacidad vehicular, y generar documentación técnica profesional.

---

## RECURSOS ADICIONALES

- **Autodesk Civil 3D Help:** Create Intersection Wizard Reference
- **Autodesk University:** "Mastering Corridor-Based Intersections" (class recording)
- **YouTube:** Autodesk Civil 3D Channel - Intersection tutorials
- **AASHTO Green Book:** Chapter 9 (Intersection Design Standards)

---

**Palabras:** 5,127
**Tiempo de lectura estimado:** 35-40 minutos
**Tiempo de práctica:** 90 minutos

---

*DISTMAH ATC - Universidad Autodesk*
*Civil 3D 2026 Avanzado - Módulo 2, Lección 4*
