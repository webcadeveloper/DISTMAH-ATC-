# Lección 5: Standards y Plant 3D Project Setup Completo

## Información de la Lección

- **Módulo:** 1 - Introducción a AutoCAD Plant 3D 2026
- **Lección:** 5 de 5
- **Duración:** 60 minutos
- **Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, usted será capaz de:

✅ Establecer estándares completos de proyecto según normas ISO y ASME
✅ Configurar layer standards (AIA, ISO 13567, BS1192)
✅ Crear y gestionar estilos de texto, dimensiones y anotaciones
✅ Configurar símbolos P&ID y bibliotecas de componentes 3D
✅ Desarrollar templates reutilizables para proyectos futuros

## Introducción

Los estándares de proyecto (Project Standards) son las reglas, configuraciones y convenciones que aseguran consistencia, calidad y cumplimiento normativo a lo largo de todo el ciclo de vida del proyecto. En plantas industriales, donde un proyecto típico genera miles de drawings, involucra docenas de disciplinas y puede extenderse por años, los estándares no son opcionales son absolutamente críticos.

La falta de estándares consistentes resulta en:
- **Inconsistencia visual:** Dibujos con diferentes estilos, colores, grosores de línea
- **Errores de comunicación:** Diferentes disciplinas interpretando símbolos de manera diferente
- **Retrabajo:** Dibujos que deben reformatearse para cumplir requisitos del cliente
- **Problemas legales:** Incumplimiento de códigos de construcción y normas contractuales
- **Costos:** Se estima que falta de estandarización aumenta costos de proyecto 10-15%

En la industria internacional, los estándares más utilizados son:

**Para Layer Organization:**
- **ISO 13567** - Organization and naming of layers for CAD (Europa, internacional)
- **AIA CAD Layer Guidelines** - American Institute of Architects (EE.UU.)
- **BS 1192** - British Standard for collaborative production (UK)

**Para Simbología P&ID:**
- **ISA S5.1** - Instrumentation Symbols and Identification (universal)
- **ISO 14617** - Graphical symbols for diagrams (internacional)
- **ISO 10628** - Flow diagrams for process plants (internacional)

**Para Dimensioning y Drafting:**
- **ASME Y14.5** - Dimensioning and Tolerancing (EE.UU., Canada)
- **ISO 129** - Technical drawings - Indication of dimensions and tolerances
- **ISO 128** - Technical drawings - General principles of presentation

**Para Piping y Equipment:**
- **ASME B31.3** - Process Piping (universal en petroquímica)
- **API 650, 610, etc.** - American Petroleum Institute standards
- **EN 13480** - Metallic industrial piping (Europa)

AutoCAD Plant 3D 2026 facilita implementación de estos estándares con:
- Templates predefinidos según múltiples estándares internacionales
- Layer Manager mejorado con import desde CAD standards files
- Symbol libraries ISO, ANSI, DIN, JIS
- Validation tools que verifican cumplimiento de estándares
- Client-specific customization para estándares corporativos

Esta lección final del Módulo 1 consolida todo lo aprendido, guiándole en la creación de un Project Setup completo y profesional que servirá como foundation para todos sus proyectos Plant 3D futuros.

## 1. Layer Standards y Organization

### 1.1 Importancia de Layer Standards

Los layers (capas) organizan elementos de dibujo por función, disciplina y tipo. Una estructura de layers bien diseñada permite:

- **Control de visibilidad:** Mostrar/ocultar disciplinas (Process, Structural, Civil)
- **Control de ploteo:** Plot solo layers necesarios en cada sheet
- **Color coding:** Identificación visual rápida (piping rojo, structure azul)
- **Xref management:** Attach drawings de otras disciplinas sin conflictos
- **Collaboration:** Múltiples disciplinas trabajando en mismo modelo

### 1.2 ISO 13567 Layer Naming Standard

ISO 13567 es el estándar internacional para naming de layers:

**Format:** `AA-BBB-CCC-DD`

- **AA:** Agent code (quien genera: A=Architect, M=Mechanical, E=Electrical, S=Structural, etc.)
- **BBB:** Element code (qué es: PIP=Piping, EQP=Equipment, FLR=Floor, etc.)
- **CCC:** Presentation code (cómo se dibuja: TEXT, DIM, PATT, SYMB, etc.)
- **DD:** Status code (estado: EX=Existing, DM=Demolition, NW=New work)

**Ejemplos Plant 3D:**

```
P-EQP-SYMB    Process - Equipment - Symbols
P-PIP-MLIN    Process - Piping - Main Lines
P-PIP-SUPP    Process - Piping - Supports
P-INS-SYMB    Process - Instrumentation - Symbols
P-VAL-SYMB    Process - Valves - Symbols

S-STL-COLS    Structure - Steel - Columns
S-STL-BEAM    Structure - Steel - Beams
S-PLA-DECK    Structure - Platforms - Decking
S-STR-FRAM    Structure - Stairs - Framing

A-ANN-TEXT    Architectural - Annotation - Text
A-ANN-DIMS    Architectural - Annotation - Dimensions
A-ANN-TAGS    Architectural - Annotation - Tags

M-EQP-PUMPS   Mechanical - Equipment - Pumps
M-EQP-TANKS   Mechanical - Equipment - Tanks
M-EQP-EXCH    Mechanical - Equipment - Exchangers
```

![ISO 13567 layer structure](../imagenes/leccion-5-iso-13567-layers.png)

### 1.3 AIA CAD Layer Guidelines

American Institute of Architects format (común en EE.UU.):

**Format:** `A-XXXX-XXXX`

- **A:** Discipline (A=Architectural, M=Mechanical, P=Plumbing, S=Structural, etc.)
- **XXXX:** Major system
- **XXXX:** Minor system/detail

**Ejemplos Plant 3D:**

```
M-PIPING         Mechanical - Piping
M-EQUIP          Mechanical - Equipment
M-EQUIP-PUMPS    Mechanical - Equipment - Pumps
M-EQUIP-TANKS    Mechanical - Equipment - Tanks
M-VALVES         Mechanical - Valves
M-PIPING-SUPP    Mechanical - Piping - Supports

S-COLS           Structural - Columns
S-BEAM           Structural - Beams
S-FRAM           Structural - Framing
S-BRAC           Structural - Bracing

P-PIPING         Plumbing - Piping (process piping en plant context)

A-ANNO-TEXT      Architectural - Annotation - Text
A-ANNO-DIMS      Architectural - Annotation - Dimensions
```

### 1.4 Creating Layer Standards en Plant 3D

**Paso 1: Open Layer Manager**
- Command: `LAYER` o `LA`
- O Ribbon: Home > Layers > Layer Properties

**Paso 2: Create New Layers**

Para proyecto de planta petroquímica con ISO 13567:

**Process Layers:**
```
Layer Name        Color    Linetype    Lineweight  Plot
-------------------------------------------------------
P-EQP-SYMB       Red      Continuous   0.35mm      Yes
P-EQP-TEXT       Red      Continuous   0.18mm      Yes
P-PIP-MLIN       Blue     Continuous   0.50mm      Yes
P-PIP-INSU       Cyan     Continuous   0.25mm      Yes
P-PIP-SUPP       Green    Continuous   0.35mm      Yes
P-VAL-SYMB       Magenta  Continuous   0.40mm      Yes
P-INS-SYMB       Yellow   Continuous   0.35mm      Yes
P-ANN-TEXT       White    Continuous   0.18mm      Yes
P-ANN-DIMS       White    Continuous   0.18mm      Yes
P-ANN-TAGS       White    Continuous   0.25mm      Yes
```

**Structural Layers:**
```
S-STL-COLS       Blue     Continuous   0.50mm      Yes
S-STL-BEAM       Blue     Continuous   0.40mm      Yes
S-PLA-DECK       Cyan     Continuous   0.25mm      Yes
S-STR-HAND       Green    Continuous   0.30mm      Yes
S-ANN-TEXT       White    Continuous   0.18mm      Yes
```

**Reference Layers (non-plot):**
```
REF-GRID         Gray     Dashed       0.13mm      No
REF-DIMS         Gray     Continuous   0.13mm      No
DEFPOINTS        White    Continuous   Default     No
```

**Paso 3: Set Layer Properties**

Para cada layer:
- **Color:** Según disciplina/función
- **Linetype:** Continuous, Dashed, Center, Hidden, etc.
- **Lineweight:** 0.13mm (thin) a 0.70mm (thick)
- **Plot:** Yes/No
- **Description:** Descripción del propósito

**Paso 4: Save Layer Standard**

- Layer Manager > Export > Save Layer States
- Nombre: "ISO13567_Petrochemical_Standard.las"
- Ubicación: Project Standards folder

Este archivo .las puede importarse a futuros proyectos.

![Layer standards configuration](../imagenes/leccion-5-layer-standards.png)

### 1.5 Layer Management Tools

**Layer Filters:**

Crear filtros para visualización rápida:
- **Process:** Todos los layers P-*
- **Structural:** Todos los layers S-*
- **Annotation:** Todos los layers *-ANN-*
- **Non-Plot:** Todos los layers con Plot=No

**Layer States:**

Guardar combinaciones de layers ON/OFF:
- **Design View:** Todo visible
- **Plot - Process Only:** Solo P-* layers
- **Plot - Structure Only:** Solo S-* layers
- **Plot - No Annotation:** Annotation layers OFF

**Layer Translate:**

Para proyectos que requieren conversión de estándares:
- Convert ISO 13567 → AIA
- Convert client standard A → client standard B
- Command: `LAYTRANS`

## 2. Text Styles y Annotation Standards

### 2.1 Text Style Configuration

Text styles consistentes aseguran legibilidad en drawings impresos y digitales.

**Paso 1: Text Style Manager**
- Command: `STYLE`
- O Ribbon: Annotate > Text > Text Style

**Paso 2: Create Standard Text Styles**

**Para proyectos con ISO standards:**

```
Style Name      Font         Height   Width   Oblique  Notes
-----------------------------------------------------------------
ISO-2.5        ISOCPEUR      2.5mm    1.0     0°       General notes
ISO-3.5        ISOCPEUR      3.5mm    1.0     0°       Tags, labels
ISO-5.0        ISOCPEUR      5.0mm    1.0     0°       Titles
ISO-7.0        ISOCPEUR      7.0mm    1.0     0°       Sheet titles
ISO-10         ISOCPEUR      10mm     1.0     0°       Large titles
```

**Para proyectos con ANSI standards:**

```
Style Name      Font         Height   Width   Oblique  Notes
-----------------------------------------------------------------
ANSI-0.125     romans.shx    3.2mm    1.0     0°       (1/8" @ 1:1)
ANSI-0.156     romans.shx    4.0mm    1.0     0°       (5/32" @ 1:1)
ANSI-0.187     romans.shx    4.7mm    1.0     0°       (3/16" @ 1:1)
ANSI-0.250     romans.shx    6.4mm    1.0     0°       (1/4" @ 1:1)
```

**Para P&ID Diagrams:**

```
P&ID-GENERAL   Arial         2.5mm    0.9     0°       Equipment labels
P&ID-TAGS      Arial Bold    3.0mm    1.0     0°       Tag numbers
P&ID-NOTES     Arial         2.0mm    0.9     0°       Small notes
P&ID-TITLE     Arial Black   7.0mm    1.0     0°       Drawing title
```

**Paso 3: Set Default Text Style**

- Select: ISO-3.5 (o su preferred general style)
- Set Current
- Apply

**Paso 4: Annotative Text (Optional)**

Para text que escala automáticamente según viewport scale:
- ✅ Annotative: ON
- Paper text height: 3.5mm
- Automáticamente ajusta en viewports de diferentes escalas

![Text styles configuration](../imagenes/leccion-5-text-styles.png)

### 2.2 Dimension Styles

Dimension styles controlan appearance de dimensiones.

**Paso 1: Dimension Style Manager**
- Command: `DIMSTYLE`
- O Ribbon: Annotate > Dimensions > Dimension Style

**Paso 2: Create Dimension Styles**

**ISO Dimension Style:**

Según ISO 129-1:

```
Style Name: ISO-METRIC

Lines:
- Dimension line color: ByLayer
- Extension line color: ByLayer
- Lineweight: 0.18mm
- Baseline spacing: 7mm
- Extend beyond dim lines: 2mm
- Offset from origin: 1mm

Symbols and Arrows:
- Arrow type: Closed filled (recommended) or Oblique (ISO)
- Arrow size: 2.5mm
- Center marks: Line, 2.5mm

Text:
- Text style: ISO-2.5
- Text color: ByLayer
- Text height: 2.5mm
- Text placement: Above dimension line, centered
- Text gap: 1mm

Primary Units:
- Unit format: Decimal
- Precision: 0 (integers) or 0.0 (one decimal)
- Decimal separator: Comma (,) for Europe or Period (.) for US
- Measurement scale: 1.0
- Zero suppression: Leading (off), Trailing (on)
- Prefix/Suffix: None (or "mm" if required)

Tolerances: (if required)
- Method: Symmetrical or Deviation
- Precision: 0.0
- Upper/Lower value: ±0.5mm (typical)
```

**ANSI Dimension Style:**

Según ASME Y14.5:

```
Style Name: ANSI-IMPERIAL

Lines:
- Similar to ISO but inches-based

Symbols and Arrows:
- Arrow type: Closed filled
- Arrow size: 1/8" (3.2mm)

Text:
- Text style: ANSI-0.125
- Text height: 1/8" (3.2mm)

Primary Units:
- Unit format: Architectural or Decimal
- Precision: 1/16", 1/8", 0.00", etc.
- Decimal separator: Period (.)
- Prefix/Suffix: None or " (inches symbol)
```

**P&ID Dimension Style:**

```
Style Name: P&ID-DIM

- Simplified style
- No arrowheads (just ticks or none)
- Larger text (3.5mm)
- No tolerances
- Used for reference dimensions only
```

**Paso 3: Set Current Dimension Style**

- Select: ISO-METRIC (o appropriate para su project)
- Set Current

![Dimension styles](../imagenes/leccion-5-dimension-styles.png)

### 2.3 Multileader Styles

Multileaders para tags, notes, callouts.

**Paso 1: Multileader Style Manager**
- Command: `MLEADERSTYLE`
- O Ribbon: Annotate > Leaders > Multileader Style

**Paso 2: Create Multileader Styles**

**Equipment Tag Leader:**

```
Style Name: TAG-EQUIPMENT

Leader Format:
- Type: Straight
- Color: ByLayer
- Linetype: Continuous
- Lineweight: 0.25mm

Leader Structure:
- Maximum leader points: 2
- First segment angle: Any
- Second segment angle: Horizontal (15°)
- Landing distance: 3mm

Content:
- Multileader type: Mtext
- Text style: P&ID-TAGS
- Text color: ByLayer
- Text height: 3.0mm
- Attachment: Middle of top line
- Frame: Circle (for equipment tags)
```

**Note Callout:**

```
Style Name: NOTE-CALLOUT

Content:
- Multileader type: Mtext
- Text style: ISO-2.5
- Frame: None or Rectangle
- Landing gap: 2mm
```

**Paso 3: Use in Drawings**

- Command: `MLEADER`
- Select style from dropdown
- Pick points y enter text

## 3. P&ID Symbol Libraries

### 3.1 ISA S5.1 Symbol Standard

ISA S5.1 "Instrumentation Symbols and Identification" es el estándar universal para P&ID.

**Symbol Categories:**

**Instruments:**
- Discrete instruments: Circle 12mm diameter
- Shared display/control: Circle con línea horizontal
- Computer function: Circle con hexágono interior
- Programmable logic: Circle con diamante interior

**First Letter (Measured/Initiating Variable):**
- A: Analysis (pH, conductivity, composition)
- E: Voltage (electrical)
- F: Flow
- L: Level
- P: Pressure
- Q: Quantity/Event
- T: Temperature
- etc.

**Subsequent Letters (Function):**
- I: Indicate
- C: Control
- R: Record
- S: Switch
- T: Transmit
- A: Alarm
- etc.

**Examples:**
- **FT:** Flow Transmitter
- **PI:** Pressure Indicator
- **LIC:** Level Indicator Controller
- **TICA:** Temperature Indicator Controller with Alarm
- **PSHH:** Pressure Switch High High

![ISA S5.1 symbols](../imagenes/leccion-5-isa-symbols.png)

### 3.2 Equipment Symbols P&ID

**Vessels:**
- Vertical vessel: Rectangle vertical
- Horizontal vessel: Rectangle horizontal
- Sphere: Circle
- Columns: Rectangle with internals

**Rotating Equipment:**
- Centrifugal pump: Circle con inlet/outlet
- Positive displacement pump: Circle con símbolo especial
- Compressor: Circle con símbolo de turbina o motor
- Turbine: Circle con blades símbolo

**Heat Transfer:**
- Shell & tube exchanger: Rectangle con tubes
- Air cooler: Rectangle con fan symbol
- Fired heater: Rectangle con flame symbol
- Cooling tower: Símbolo específico

**Tanks:**
- Atmospheric tank: Circle con techo cónico
- Pressure tank: Circle
- Sphere: Circle

**Valves:**
- Gate valve: Símbolo específico en línea
- Globe valve: Símbolo específico
- Ball valve: Circle con line
- Check valve: Arrow in line
- Control valve: Símbolo con actuator
- Relief valve: Símbolo safety

### 3.3 Customizing Symbol Libraries

Plant 3D incluye extensive symbol libraries, pero puede requerir customization:

**Paso 1: Locate Symbol Library**
- Default: C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Symbols\
- Organized by standard: ISO, ANSI, DIN, JIS

**Paso 2: Create Custom Symbol**

Para crear símbolo custom de equipment:

1. Draw geometry en separate DWG
2. Define insertion point
3. Add attributes (TAG, SERVICE, etc.)
4. Create block: Command `BLOCK`
5. Save to symbol library folder

**Paso 3: Add to Tool Palette**

- Tool Palettes Manager
- Right-click > New Palette: "Company Symbols"
- Drag symbol from library
- Configure properties

**Paso 4: Map to Plant 3D Classes**

Para integration completa:
- Spec Editor > Symbols
- Map symbol to equipment class
- Define connection points
- Set default properties

## 4. 3D Component Libraries

### 4.1 Standard Component Catalogs

Plant 3D incluye catalogs de fabricantes:

**Pipe Fittings:**
- ASME B16.9 - Factory-made wrought buttwelding fittings
- ASME B16.11 - Forged fittings, socket-welding and threaded
- ASME B16.28 - Wrought steel buttwelding short radius elbows

**Flanges:**
- ASME B16.5 - Pipe flanges and flanged fittings NPS 1/2 to 24
- ASME B16.47 - Large diameter steel flanges NPS 26 to 60

**Valves:**
- API 600 - Steel gate valves flanged and butt-welding ends
- API 602 - Compact steel gate valves
- API 6D - Pipeline valves
- MSS SP-25 - Standard marking system for valves

**Manufacturers:**
- Nibco
- Victaulic
- Bonney Forge
- Crane
- Powell
- Custom libraries pueden agregarse

### 4.2 Equipment Parametric Modeling

Para equipos custom, Plant 3D ofrece parametric equipment:

**Vessel Builder:**
- Vertical/horizontal orientation
- Diameter, length, elliptical/flat heads
- Nozzles: size, quantity, orientation, elevation
- Supports: saddles, legs, skirt
- Internals: trays, baffles (simplified)

**Tank Builder:**
- API 650 atmospheric tanks
- Diameter, height, roof type
- Nozzles y manholes
- Stairs, platforms (puede linkear a Structure)

**Heat Exchanger Builder:**
- Shell & tube configuration
- Tube count, passes
- Nozzles: inlet/outlet shell/tube sides
- TEMA types (AES, BEM, etc.)

**Pump Builder (limited):**
- Centrifugal pump generic model
- Suction/discharge nozzles
- Baseplate

Para equipos más complejos, integration con Inventor o import de vendor 3D models.

### 4.3 Custom 3D Components

**Creating Custom Equipment:**

**Method 1: Parametric Equipment**
1. Ribbon: Equipment Tab > Create > Parametric Equipment
2. Select type (vessel, exchanger, etc.)
3. Input parameters
4. Place in model

**Method 2: From Solid Model**
1. Create solid in AutoCAD (box, cylinder, extrude, etc.)
2. Convert to Plant 3D equipment: Command `CREATEEQUIPMENT`
3. Define nozzles: Command `CREATENOZZLE`
4. Set properties (tag, service, etc.)

**Method 3: Import from Inventor/Other CAD**
1. Create detailed model en Inventor
2. Export to DWG or link via Vault
3. Import to Plant 3D
4. Convert to equipment y add nozzles

## 5. Creating Project Templates

### 5.1 Drawing Templates (.DWT)

Templates aceleran proyecto setup y aseguran consistency.

**P&ID Template:**

**Paso 1: Create Base Drawing**
- Start new drawing
- Set units: mm o inches
- Set limits: A1 size (594 x 841mm) o A0 (841 x 1189mm)

**Paso 2: Create Title Block**
- Draw border (10mm margin)
- Draw title block (según company/client standard)
- Add attributes:
  - PROJECT_NAME
  - PROJECT_NUMBER
  - DRAWING_TITLE
  - DRAWING_NUMBER
  - REVISION
  - DRAWN_BY
  - CHECKED_BY
  - DATE
  - SCALE

**Paso 3: Set Standards**
- Load layers: P-EQP-SYMB, P-PIP-MLIN, P-VAL-SYMB, etc.
- Set text styles: P&ID-GENERAL, P&ID-TAGS
- Set dimension style: P&ID-DIM
- Load symbol library en Tool Palette

**Paso 4: Create Viewport (for model space work)**
- Layout tab
- Create viewport
- Set scale (typically 1:50 or 1:100 for P&ID)

**Paso 5: Save as Template**
- File > Save As > AutoCAD Drawing Template (*.dwt)
- Location: Project templates folder
- Name: "P&ID_Template_ISO_A1.dwt"

**3D Model Template:**

Similar process:
- Units, limits (typically larger, working in meters)
- Layers: P-PIP-MLIN, P-EQP-*, S-STL-*, etc.
- UCS configuration
- Grid reference
- Viewports: Plan, elevations
- Save as: "3D_Model_Template_ISO.dwt"

**Isometric Template:**

- Sheet size: A1, A3 según client standard
- Title block con BOM table
- North arrow, scale indicator
- Layers for iso line, annotations
- Text/dim styles
- Save as: "ISO_Template_A1.dwt"

![Drawing templates](../imagenes/leccion-5-drawing-templates.png)

### 5.2 Project Templates

Beyond drawing templates, complete project templates:

**Paso 1: Create Master Project**

Create un proyecto "template" completo con:
- Todas las specs (CS-150-GEN, CS-300-HC, SS316-300-CW, etc.)
- Todas las custom properties configuradas
- Layer standards
- Symbol libraries
- Drawing templates
- Folder structure

**Paso 2: Configure Project Settings**

- Plant Settings óptimas
- Display configurations
- Report templates
- Iso styles

**Paso 3: Document Everything**

Create "Project Setup Guide.pdf":
- Standards used (ISO 13567, ISA S5.1, ASME B31.3)
- Layer list con descriptions
- Text/dim style usage guidelines
- Spec selection guide
- Custom property definitions
- Naming conventions

**Paso 4: Save as Project Template**

- Project Manager > Export Project Template
- Includes: Structure, settings, specs, NO drawings (empty)
- Name: "Petrochemical_ISO_Template_2026.ptp"

**Paso 5: Deploy**

- Store en network location accessible a todo el team
- Version control (Template_v1.0, Template_v1.1, etc.)
- Training para team sobre uso del template

### 5.3 Version Control y Maintenance

**Template Versioning:**

```
Petrochemical_ISO_Template_v1.0_2026-01-15
Petrochemical_ISO_Template_v1.1_2026-03-20
Petrochemical_ISO_Template_v2.0_2026-06-10
```

**Change Log:**

```
Version 1.1 (2026-03-20):
- Added CS-600-TOX spec para toxic service
- Updated P&ID symbols to latest ISA S5.1-2024
- Added custom property: Environmental_Permit_Required
- Fixed layer color for S-STL-BEAM (was blue, now cyan)

Version 2.0 (2026-06-10):
- Major update: ISO 13567-3:2026 compliance
- Redesigned title block per client feedback
- Added 15 new equipment parametric templates
- Integration with Vault Professional
```

**Maintenance Schedule:**

- **Minor updates:** As needed (fixes, small additions)
- **Major review:** Annually
- **Standards compliance check:** Every 2 years (when standards updated)

## 6. Compliance y Quality Assurance

### 6.1 Standards Compliance Checklist

Antes de finalizar project setup:

✅ **Layers:**
- All layers follow naming standard (ISO 13567 / AIA)
- Colors consistent con company standard
- Lineweights appropriate para plotting
- Plot/No-plot configurado correctamente

✅ **Text/Dimensions:**
- Text styles compliant con ISO 129 / ASME Y14.5
- Heights appropriate (legible @ intended plot scale)
- Dimension styles compliant
- Annotative scaling if required

✅ **Symbols:**
- P&ID symbols compliant con ISA S5.1
- Equipment symbols match industry standard (ISO 10628)
- Custom symbols reviewed y approved

✅ **Specs:**
- All specs reviewed contra ASME B31.3
- Materials appropriate para services
- Client approval obtained (if contractual requirement)

✅ **Templates:**
- Title blocks match client requirements
- All attributes functional
- Viewports/layouts configured correctly

✅ **Documentation:**
- Project Setup Guide complete
- All standards referenced (ISO, ASME, API, etc.)
- Training materials prepared

### 6.2 Validation Tools

**Layer Validation:**
- Run `LAYWALK` to review all layers
- Check for layers with zero objects (cleanup)
- Verify no objects on layer 0

**Text Validation:**
- `QSELECT` to find non-standard text styles
- Bulk change if needed

**Symbol Validation:**
- Verify all symbols have correct attributes
- Test insertion in sample drawing

**Spec Validation:**
- Generate sample BOM from each spec
- Verify all components populate correctly

## Ejercicio Práctico

### Ejercicio 5: Creación de Project Template Completo

**Objetivo:** Crear un project template profesional completo con todos los estándares, listo para deployment en proyectos reales.

**Escenario:** Su empresa ha ganado un contrato para diseñar múltiples plantas de procesamiento de gas natural. Requiere un template estandarizado que asegure consistency en todos los proyectos.

**Estándares requeridos:**
- Layers: ISO 13567
- P&ID Symbols: ISA S5.1
- Dimensioning: ISO 129
- Piping: ASME B31.3
- Units: Métrico (mm, bar, °C)

**Instrucciones:**

**Parte 1: Layer Standards (10 min)**

1. Crear layer structure completa ISO 13567:
   - Process layers (P-*)
   - Structural layers (S-*)
   - Annotation layers (A-*)
   - Reference layers (REF-*)

2. Configurar properties:
   - Colors por disciplina
   - Lineweights: 0.13mm to 0.70mm
   - Plot settings

3. Export layer state: "ISO13567_GasPlant_Standard.las"

**Parte 2: Text y Dimension Styles (8 min)**

4. Crear text styles:
   - ISO-2.5 (ISOCPEUR, 2.5mm)
   - ISO-3.5 (ISOCPEUR, 3.5mm)
   - ISO-5.0 (ISOCPEUR, 5.0mm)

5. Crear dimension style:
   - ISO-METRIC (según ISO 129-1)
   - Arrow size: 2.5mm
   - Text height: 2.5mm
   - Decimal precision: 0.0

6. Crear multileader style:
   - TAG-EQUIPMENT (circle frame, 3mm text)

**Parte 3: Drawing Templates (12 min)**

7. Create P&ID Template:
   - Size: A1 (594 x 841mm)
   - Border: 10mm margin
   - Title block con attributes
   - Load layers
   - Set text/dim styles
   - Save as: "P&ID_ISO_A1.dwt"

8. Create 3D Model Template:
   - Units: mm
   - UCS configured
   - Grid 7500mm spacing
   - Load layers
   - Save as: "3D_Model_ISO.dwt"

**Parte 4: Project Template (15 min)**

9. Create nuevo proyecto: "GasPlant_Template_2026"

10. Configure Plant Settings:
    - Units: Métrico
    - Display: Detailed
    - Piping: Ortho ON

11. Create specs (minimum):
    - CS-150-GEN (carbon steel general)
    - SS316-300-CW (stainless corrosive)
    - CS-PN40-UTL (utilities)

12. Create custom properties:
    - PO_Number
    - Vendor_Name
    - Criticality
    - Installation_Zone

13. Export project template: "GasPlant_ISO_Template_v1.0.ptp"

**Parte 5: Documentation (10 min)**

14. Create "Project Setup Guide.pdf" including:
    - Standards reference list
    - Layer list con descriptions
    - Text/dimension style usage
    - Spec selection guidelines
    - Custom property definitions
    - Template usage instructions

**Tiempo estimado:** 55 minutos

**Entregables:**
- Layer state file (.las)
- 2 Drawing templates (.dwt)
- Project template (.ptp)
- Project Setup Guide (PDF)

**Criterios de evaluación:**
- Layers compliant con ISO 13567 (25%)
- Text/dim styles compliant con ISO 129 (20%)
- Drawing templates functional y completos (25%)
- Project template ready-to-use (20%)
- Documentation clara y completa (10%)

## Evaluación

### Preguntas de Evaluación

**Pregunta 1:** ¿Qué formato de layer naming sigue el estándar ISO 13567?

a) A-XXXX-XXXX
b) AA-BBB-CCC-DD
c) DISCIPLINE_SYSTEM_TYPE
d) LAYER_01, LAYER_02, etc.

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) AA-BBB-CCC-DD

Explicación: ISO 13567 usa formato: Agent code (AA) - Element code (BBB) - Presentation code (CCC) - Status code (DD). Ejemplo: P-EQP-SYMB-NW (Process - Equipment - Symbols - New work).
</details>

**Pregunta 2:** Según ISA S5.1, ¿qué significa el tag "FIC"?

a) Flow Indicator Controller
b) Filter Inlet Control
c) Fire Inspection Check
d) Fluid In Container

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: a) Flow Indicator Controller

Explicación: ISA S5.1: Primera letra = variable medida (F = Flow), letras subsiguientes = funciones (I = Indicate, C = Control). FIC = Flow Indicator Controller.
</details>

**Pregunta 3:** ¿Cuál es el principal beneficio de crear project templates reutilizables?

a) Los archivos son más pequeños
b) Aseguran consistency y aceleran setup de nuevos proyectos
c) Los dibujos se ven más bonitos
d) Se requiere menos RAM

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Aseguran consistency y aceleran setup de nuevos proyectos

Explicación: Project templates preconfigurados con layers, styles, specs y settings correctos aseguran que todos los proyectos sigan mismos estándares y reducen setup time de semanas a horas.
</details>

**Pregunta 4:** ¿Qué comando de AutoCAD se usa para crear un block (símbolo)?

a) SYMBOL
b) BLOCK
c) INSERT
d) MAKEBLOCK

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) BLOCK

Explicación: El comando BLOCK (o B) se usa para crear blocks (símbolos reutilizables) en AutoCAD. INSERT se usa para colocar blocks existentes.
</details>

**Pregunta 5:** Para cumplir con ISO 129-1 en dimensioning, ¿dónde debe colocarse el texto de dimensión?

a) Dentro de la línea de dimensión
b) Encima de la línea de dimensión, centrado
c) Debajo de la línea de dimensión
d) A la izquierda de la línea de dimensión

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Encima de la línea de dimensión, centrado

Explicación: ISO 129-1 especifica que el texto de dimensión debe estar encima (above) de la línea de dimensión y centrado horizontalmente para máxima legibilidad.
</details>

## Resumen

En esta lección ha aprendido:

- ✅ Establecer layer standards según ISO 13567, AIA, BS1192
- ✅ Configurar text styles, dimension styles y annotation standards
- ✅ Gestionar symbol libraries P&ID (ISA S5.1) y 3D components
- ✅ Crear drawing templates (.dwt) profesionales y reutilizables
- ✅ Desarrollar project templates completos (.ptp) para deployment

La implementación rigurosa de estándares transforma Plant 3D de una herramienta de dibujo a una plataforma de diseño profesional que produce documentación consistente, compliant y de alta calidad.

## Conclusión del Módulo 1

Ha completado exitosamente el **Módulo 1: Introducción a AutoCAD Plant 3D 2026**. Ahora tiene una base sólida en:

- Navegación de interfaz y Project Manager
- Configuración profesional de proyectos
- Gestión de especificaciones de tuberías (Specs)
- Manejo de datos con Data Manager y custom properties
- Establecimiento de estándares completos de proyecto

Con estos fundamentos, está preparado para avanzar al **Módulo 2: P&ID (Process & Instrumentation Diagrams)**, donde aplicará estos conocimientos creando diagramas de instrumentación profesionales.

## Próximo Módulo

**Módulo 2: P&ID (Process & Instrumentation Diagrams)**

Aprenderá a crear P&IDs completos con símbolos ISA S5.1, line groups, tagging automático, validación de datos y sincronización con modelos 3D.

---

**Lección 5 de 30 - Módulo 1 de 6**
AutoCAD Plant 3D 2026 - Curso Avanzado
DISTMAH ATC - Authorized Training Center
