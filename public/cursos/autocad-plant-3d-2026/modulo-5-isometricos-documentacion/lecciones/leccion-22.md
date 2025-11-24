# Lección 22: Estilos de Isométricos y Configuración de Plantillas

## Información de la Lección

- **Módulo:** 5 - Isométricos y Documentación
- **Lección:** 22 de 30
- **Duración:** 60 minutos
- **Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, usted será capaz de:

✅ Crear plantillas DWG personalizadas para isométricos de fabricación
✅ Configurar archivos PCF (Piping Component File) para exportación de datos
✅ Personalizar cajetines (title blocks) con información técnica empresarial
✅ Establecer estilos de anotación y dimensionamiento para isométricos
✅ Implementar estándares corporativos en documentación de tubería
✅ Configurar layers, colores y pesos de línea según normas industriales
✅ Crear templates reutilizables para proyectos futuros

## Introducción

La estandarización de documentación técnica es fundamental para la eficiencia operativa de empresas de ingeniería, construcción y fabricación de plantas industriales. Un conjunto de isométricos inconsistente, donde cada dibujo utiliza diferentes formatos, estilos de dimensionamiento o presentación de información, genera confusión en taller, errores de fabricación y pérdida de tiempo durante revisión técnica.

AutoCAD Plant 3D 2026 proporciona un sistema robusto de plantillas (templates) y estilos que permite a empresas implementar sus estándares corporativos una sola vez y aplicarlos automáticamente a miles de isométricos. Una inversión inicial de 4-8 horas configurando plantillas correctamente puede ahorrar cientos de horas de trabajo manual a lo largo de un proyecto.

Esta lección cubre la configuración completa del sistema de plantillas de Plant 3D, desde archivos PCF que controlan la extracción de datos del modelo 3D, hasta cajetines personalizados que reflejan la identidad corporativa y requisitos contractuales de cada proyecto. Implementaremos estándares internacionales como ISO 5261 (dibujo de tuberías) e ISO 128 (principios generales de presentación) para crear documentación profesional reconocida globalmente.

La configuración adecuada de plantillas también permite la integración con sistemas empresariales downstream: archivos PCF correctamente configurados pueden alimentar directamente sistemas ERP para procurement, software de fabricación CNC para corte automatizado de tubería, y plataformas de gestión de construcción para tracking de spools en campo.

## 1. Arquitectura del Sistema de Plantillas de Plant 3D

### 1.1 Componentes del Sistema de Plantillas

El sistema de generación de isométricos de Plant 3D se basa en cuatro componentes interrelacionados:

**1. Archivo PCF (Piping Component File):**
- Formato de texto que define la geometría y atributos de tubería
- Generado automáticamente por Plant 3D desde modelo 3D
- Contiene coordenadas 3D, diámetros, materiales, componentes
- Utilizado como entrada para generadores de isométricos de terceros
- Ubicación: `C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\PCF\`

**2. Archivo ISO_CONFIG.XML:**
- Controla qué información se extrae del modelo 3D al PCF
- Define mapeo entre propiedades de Plant 3D y campos PCF
- Configura inclusión/exclusión de componentes específicos
- Establece reglas de generación de isométricos
- Ubicación: `C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\`

**3. Plantilla DWG de Isométrico:**
- Archivo AutoCAD DWG que sirve como base para isométricos generados
- Contiene cajetín, layers, estilos de texto, estilos de dimensión
- Define formato de página, escala de impresión, viewports
- Puede incluir bloques de empresa, logos, tablas estándar
- Ubicación personalizable, típicamente: `C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\Templates\`

**4. Archivo de Estilo de Isométrico (.ISOCONFIG):**
- Define apariencia visual de componentes en isométrico
- Controla simbología: codos, tees, válvulas, bridas
- Establece estilos de línea para tubería principal, ramales, instrumentación
- Configura formato de tabla de materiales (BOM)
- Ubicación: `C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\Styles\`

![Arquitectura del sistema de plantillas](../imagenes/leccion-22-arquitectura-plantillas.png)

### 1.2 Flujo de Generación de Isométricos

Comprender el flujo de datos es crítico para configuración efectiva:

**Paso 1: Modelo 3D → Extracción PCF**
```
Model 3D (DWG)
   ↓ [ISO_CONFIG.XML controla extracción]
Archivo PCF (texto plano)
   - PIPE-LINE-NUMBER 1001-A-6"-CS
   - PIPE-COMPONENT-IDENTIFIER Elbow-90-LR
   - COORDINATE 1000.0 2000.0 3500.0
   - MATERIAL ASTM A234 WPB
```

**Paso 2: PCF → Generación de Isométrico**
```
Archivo PCF
   ↓ [Plantilla DWG + Estilo .ISOCONFIG]
Isométrico DWG
   - Geometría isométrica (30°)
   - Dimensiones automáticas
   - BOM de componentes
   - Cajetín poblado
```

**Paso 3: Isométrico DWG → Revisión/Publicación**
```
Isométrico DWG
   ↓ [Edición manual opcional]
PDF/DWF para construcción
```

### 1.3 Ubicaciones de Archivos Críticos

**Rutas de sistema (compartidas por todos los usuarios):**
```
C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\
├── Iso\
│   ├── ISO_CONFIG.XML (configuración de extracción PCF)
│   ├── Styles\
│   │   ├── ISO_ANSI.isoconfig (estilo americano)
│   │   ├── ISO_DIN.isoconfig (estilo alemán)
│   │   └── ISO_CUSTOM.isoconfig (personalizado)
│   └── Templates\
│       ├── ISO_Template_ANSI_D.dwg (hoja tamaño D)
│       └── ISO_Template_ISO_A0.dwg (hoja A0)
└── PCF\
    └── [Archivos PCF generados temporalmente]
```

**Rutas de proyecto (específicas del proyecto actual):**
```
C:\PlantProjects\MyPlant\
├── Isometrics\
│   └── [Isométricos DWG generados]
├── PCF\
│   └── [Archivos PCF del proyecto]
└── ProjectSetup\
    └── IsoConfig_Project.xml (override de ISO_CONFIG.XML)
```

Para proyectos con múltiples disciplinas o contratistas, se recomienda estructura segregada:

```
C:\PlantProjects\MyPlant\
├── Isometrics\
│   ├── Process\     (tuberías de proceso)
│   ├── Utilities\   (servicios auxiliares)
│   └── Firewater\   (sistema contra incendio)
└── Templates\
    ├── ISO_Process_Template.dwg
    ├── ISO_Utilities_Template.dwg
    └── ISO_Firewater_Template.dwg
```

## 2. Configuración de Archivos PCF

### 2.1 Fundamentos del Formato PCF

El formato PCF (Piping Component File) es un estándar de facto en la industria de plantas de proceso, desarrollado originalmente por AVEVA (anteriormente CADMATIC/Intergraph). Es un archivo de texto ASCII estructurado que describe completamente una línea de tubería.

**Ejemplo de archivo PCF simplificado:**

```pcf
ISOGEN-FILES
  MATERIALS-CATALOGUE C:\ProgramData\Autodesk\ISOGEN\matcat.txt
  OPTION-CATALOGUE C:\ProgramData\Autodesk\ISOGEN\optcat.txt

UNITS-BORE MILLIMETRES
UNITS-CO-ORDS MILLIMETRES
UNITS-BOLTS MILLIMETRES
UNITS-WEIGHT KILOGRAMS

PIPELINE-REFERENCE
  LINE-ID 1001-A-6"-CS-001
  SPEC-REF PS-001

PIPING-MATERIAL-LIST
  MATL-CODE CS
  MATL-DESC ASTM A106 Gr.B Carbon Steel

PIPELINE-NOMINAL-DIAMETER 150.0
PIPELINE-INSULATION-THICKNESS 50.0

PIPELINE-SEGMENT
  START-OF-LINE
    COORDINATE 1000.0 2000.0 3500.0

  PIPE
    LENGTH 2500.0
    BORE 154.0

  ELBOW
    DIAMETER 150.0
    ANGLE 90.0
    RADIUS LONG

  PIPE
    LENGTH 1800.0
    BORE 154.0

  TEE
    DIAMETER 150.0
    BRANCH-DIAMETER 100.0
    CONNECTION-TYPE REDUCING

  END-OF-LINE
    COORDINATE 3500.0 2000.0 3500.0
```

### 2.2 Configuración de ISO_CONFIG.XML

El archivo `ISO_CONFIG.XML` controla qué propiedades de objetos Plant 3D se escriben al archivo PCF. Este archivo es crítico para personalización.

**Ubicación:** `C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\ISO_CONFIG.XML`

**Estructura básica:**

```xml
<?xml version="1.0" encoding="utf-8"?>
<IsoConfig>
  <!-- Control de extracción de propiedades -->
  <PropertyMappings>
    <PropertyMapping>
      <PlantProperty>LineNumber</PlantProperty>
      <PCFProperty>LINE-ID</PCFProperty>
      <Mandatory>true</Mandatory>
    </PropertyMapping>

    <PropertyMapping>
      <PlantProperty>Spec</PlantProperty>
      <PCFProperty>SPEC-REF</PCFProperty>
      <Mandatory>true</Mandatory>
    </PropertyMapping>

    <PropertyMapping>
      <PlantProperty>Service</PlantProperty>
      <PCFProperty>SERVICE-DESCRIPTION</PCFProperty>
      <Mandatory>false</Mandatory>
    </PropertyMapping>
  </PropertyMappings>

  <!-- Control de componentes a incluir -->
  <ComponentInclusion>
    <Include Type="Pipe" />
    <Include Type="Elbow" />
    <Include Type="Tee" />
    <Include Type="Reducer" />
    <Include Type="Flange" />
    <Include Type="Valve" />
    <Exclude Type="Support" /> <!-- Soportes no van en PCF -->
    <Exclude Type="Hanger" />
  </ComponentInclusion>

  <!-- Configuración de unidades -->
  <Units>
    <Bore>Millimeters</Bore>
    <Coordinates>Millimeters</Coordinates>
    <Weight>Kilograms</Weight>
  </Units>
</IsoConfig>
```

**Personalización de mapeo de propiedades:**

Muchas empresas agregan propiedades personalizadas (custom properties) a objetos Plant 3D que deben exportarse al PCF para downstream processing:

```xml
<PropertyMapping>
  <PlantProperty>HeatTraceRequired</PlantProperty>
  <PCFProperty>ATTRIBUTE-1</PCFProperty>
  <Mandatory>false</Mandatory>
  <DefaultValue>NO</DefaultValue>
</PropertyMapping>

<PropertyMapping>
  <PlantProperty>PaintCode</PlantProperty>
  <PCFProperty>ATTRIBUTE-2</PCFProperty>
  <Mandatory>false</Mandatory>
  <DefaultValue>STD</DefaultValue>
</PropertyMapping>

<PropertyMapping>
  <PlantProperty>TestPressure</PlantProperty>
  <PCFProperty>TEST-PRESSURE</PCFProperty>
  <Mandatory>true</Mandatory>
  <Unit>PSI</Unit>
</PropertyMapping>
```

### 2.3 Validación de Archivos PCF

Antes de generar isométricos masivamente, siempre valide archivos PCF:

**Checklist de validación PCF:**

1. **Completitud de propiedades obligatorias:**
   - LINE-ID presente y formateado correctamente
   - SPEC-REF coincide con spec del proyecto
   - START-OF-LINE y END-OF-LINE definidos
   - Todas las coordenadas son válidas (no NULL)

2. **Consistencia de unidades:**
   - UNITS-BORE coincide con spec database (mm o inches)
   - UNITS-CO-ORDS en escala correcta (típicamente mm)
   - UNITS-WEIGHT apropiada para región (kg o lb)

3. **Integridad de componentes:**
   - Todos los componentes tienen DIAMETER
   - Reducciones tienen DIAMETER y END-DIAMETER
   - Válvulas tienen VALVE-TYPE y RATING
   - No hay componentes duplicados en misma coordenada

4. **Continuidad geométrica:**
   - Coordenadas forman ruta continua sin gaps
   - Cambios de dirección corresponden a elbows/tees
   - Elevaciones correctas (Z coordinate)

**Herramienta de validación manual:**

Abra archivo PCF en editor de texto (Notepad++) y busque patrones erróneos:

```regex
Search: COORDINATE\s+NULL
Resultado: Coordenadas no definidas → ERROR CRÍTICO

Search: PIPE\s+LENGTH\s+0\.0
Resultado: Tuberías con longitud cero → Revisar modelo

Search: DIAMETER\s+-1
Resultado: Diámetros no especificados → Falta spec
```

## 3. Creación de Plantillas DWG Personalizadas

### 3.1 Diseño de Cajetín (Title Block)

El cajetín es el elemento más visible de identidad corporativa en isométricos. Debe cumplir requisitos contractuales y regulatorios mientras mantiene claridad y eficiencia.

**Estándar ISO 7200 (title blocks):**

El estándar ISO 7200 especifica zonas obligatorias y opcionales en cajetines técnicos:

**Zonas obligatorias:**
1. Nombre del propietario legal del dibujo (empresa)
2. Número de identificación del dibujo (número de isométrico)
3. Título del dibujo (número de línea, servicio)
4. Fecha de creación
5. Símbolo del método de proyección (primer o tercer ángulo)

**Zonas opcionales pero recomendadas:**
6. Escala del dibujo
7. Unidades de medida
8. Número de revisión
9. Nombre del dibujante, revisor, aprobador
10. Logos corporativos
11. Información del proyecto (cliente, ubicación, contrato)
12. Códigos y estándares aplicables

**Diseño de cajetín para isométricos de fabricación:**

Para isométricos de tubería, agregue campos específicos de industria:

```
┌──────────────────────────────────────────────────────────────┐
│ LOGO EMPRESA              PROJECT: ABC Refinery Expansion    │
│                           CLIENT: ABC Petroleum Corp         │
│ Engineering & Construction UNIT: Crude Distillation         │
│                           CONTRACT: ABC-CDU-2026             │
├──────────────────────────────────────────────────────────────┤
│ ISOMETRIC DRAWING                                           │
│                                                              │
│ ISO NUMBER:    ISO-1001-A-6"-CS-001                         │
│ LINE NUMBER:   1001-A-6"-CS                                 │
│ SERVICE:       Crude Oil Feed                               │
│ FLUID:         Crude Oil                                    │
│ OPER TEMP:     120°F (49°C)                                 │
│ OPER PRESS:    150 PSIG (10.3 bar)                          │
│ TEST PRESS:    225 PSIG (15.5 bar) Hydro                    │
│ MATERIAL:      Carbon Steel ASTM A106 Gr.B                  │
│ PIPE SPEC:     PS-001 Rev.3                                 │
│ INSULATION:    2" Mineral Wool                              │
├──────────────────────────────────────────────────────────────┤
│ DRAWN: J.SMITH    CHK: R.JONES    APP: M.BROWN             │
│ DATE: 24-NOV-2025 DATE: 25-NOV-25 DATE: 26-NOV-25          │
│                                                              │
│ REV | DESCRIPTION        | DATE       | BY  | CHK | APP    │
│  0  | ISSUED FOR CONSTR  | 26-NOV-25  | JS  | RJ  | MB     │
│  1  | SUPPORT ADDED      | 10-DEC-25  | JS  | RJ  | MB     │
├──────────────────────────────────────────────────────────────┤
│ SHEET 1 OF 1              SCALE: 1:20        SIZE: A1       │
│ DRAWING NO: ISO-1001-A-6"-CS-001             REV: 1         │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 Creación de Bloques Dinámicos para Cajetín

Para automatizar población de cajetín, use bloques con atributos que Plant 3D puede llenar automáticamente:

**Paso a paso - Creación de bloque de cajetín:**

1. **Crear geometría del cajetín:**
   ```
   Command: RECTANG
   First corner: 0,0
   Other corner: 420,297 (para hoja A3)

   Command: LINE
   [Dibujar divisiones internas del cajetín según diseño]
   ```

2. **Insertar campos de texto estáticos:**
   ```
   Command: TEXT
   Texto: "PROJECT:"
   Altura: 3.5mm
   Justificación: Left
   [Repetir para todos los labels]
   ```

3. **Crear atributos para campos variables:**
   ```
   Command: ATTDEF
   Tag: ISO_NUMBER
   Prompt: Enter ISO Number
   Default: ISO-XXXX-X-X"-XX-XXX
   Height: 5mm
   Justification: Left
   Mode: ☐ Invisible ☑ Verify ☐ Preset
   ```

**Atributos estándar para isométricos:**

| Tag | Descripción | Ejemplo | Fuente en Plant 3D |
|-----|-------------|---------|-------------------|
| ISO_NUMBER | Número de isométrico | ISO-1001-A-6"-CS-001 | Generado por esquema de numeración |
| LINE_NUMBER | Número de línea | 1001-A-6"-CS | Propiedad LineNumber |
| SERVICE | Descripción de servicio | Crude Oil Feed | Propiedad Service |
| FLUID | Tipo de fluido | Crude Oil | Propiedad FluidCode |
| OPER_TEMP | Temperatura operación | 120°F | Propiedad OperatingTemp |
| OPER_PRESS | Presión operación | 150 PSIG | Propiedad OperatingPressure |
| TEST_PRESS | Presión de prueba | 225 PSIG | Calculado (1.5 x OperatingPressure) |
| MATERIAL | Material de tubería | CS ASTM A106 Gr.B | Desde Spec |
| PIPE_SPEC | Spec de tubería | PS-001 Rev.3 | Propiedad Spec |
| INSULATION | Tipo de aislamiento | 2" Mineral Wool | Propiedad InsulationType |
| DRAWN_BY | Dibujante | J.SMITH | Variable de sistema USERNAME |
| DRAWN_DATE | Fecha de dibujo | 24-NOV-2025 | Variable de sistema DATE |
| REVISION | Número de revisión | 1 | Control de revisiones |
| SHEET | Número de hoja | 1 OF 1 | Automático |
| SCALE | Escala | 1:20 | Configuración de plotting |

4. **Guardar como bloque:**
   ```
   Command: BLOCK
   Name: TITLE_BLOCK_ISO_A3
   Base point: 0,0 (esquina inferior izquierda)
   Objects: [Seleccionar todo el cajetín]
   ☑ Convert to block
   ☑ Delete
   ☐ Allow exploding
   ```

5. **Insertar en plantilla DWG:**
   ```
   Command: INSERT
   Block: TITLE_BLOCK_ISO_A3
   Insertion point: 0,0
   Scale: 1.0
   Rotation: 0
   [Completar valores por defecto de atributos]
   ```

### 3.3 Configuración de Layers según ISO 128

El estándar ISO 128 especifica principios generales de presentación en dibujos técnicos, incluyendo convenciones de espesor de línea y tipo de línea.

**Estructura de layers para isométricos:**

| Layer Name | Color | Linetype | Lineweight | Uso |
|------------|-------|----------|------------|-----|
| ISO_PIPE_MAIN | 7 (White) | Continuous | 0.50mm | Tubería principal |
| ISO_PIPE_BRANCH | 7 (White) | Continuous | 0.35mm | Ramales |
| ISO_COMPONENTS | 1 (Red) | Continuous | 0.25mm | Válvulas, fittings |
| ISO_DIMENSIONS | 2 (Yellow) | Continuous | 0.18mm | Dimensiones |
| ISO_ANNOTATIONS | 3 (Green) | Continuous | 0.18mm | Notas, callouts |
| ISO_BOM | 4 (Cyan) | Continuous | 0.25mm | Tabla de materiales |
| ISO_CENTERLINES | 5 (Blue) | CENTER | 0.13mm | Líneas de centro |
| ISO_WELD_SYMBOLS | 1 (Red) | Continuous | 0.25mm | Símbolos de soldadura |
| ISO_TITLEBLOCK | 7 (White) | Continuous | 0.35mm | Cajetín |
| ISO_TITLEBLOCK_LOGO | 7 (White) | Continuous | 0.50mm | Logo empresa |
| ISO_GRID | 8 (Gray) | Continuous | 0.13mm | Grilla de referencia |
| ISO_VIEWPORT | 6 (Magenta) | Continuous | 0.25mm | Marco de viewport |
| ISO_DEFPOINTS | DEFPOINTS | Continuous | Default | Puntos de definición |

**Creación de layers en plantilla:**

```lisp
; Script AutoLISP para crear layers de isométricos
(command "._-LAYER"
  "_N" "ISO_PIPE_MAIN"
  "_C" "7" "ISO_PIPE_MAIN"
  "_LT" "Continuous" "ISO_PIPE_MAIN"
  "_LW" "0.50" "ISO_PIPE_MAIN"
  ""
)

(command "._-LAYER"
  "_N" "ISO_DIMENSIONS"
  "_C" "2" "ISO_DIMENSIONS"
  "_LT" "Continuous" "ISO_DIMENSIONS"
  "_LW" "0.18" "ISO_DIMENSIONS"
  ""
)

; [Repetir para todos los layers...]
```

Para crear todos los layers rápidamente:

1. Abra nueva plantilla DWG
2. Copie el script a Notepad y guarde como `ISO_Layers.scr`
3. En AutoCAD: `SCRIPT` → Seleccione archivo `ISO_Layers.scr`

### 3.4 Estilos de Texto según ISO 3098

ISO 3098 especifica escritura en dibujos técnicos para legibilidad óptima.

**Configuración de estilos de texto:**

```
Style Name: ISO_TEXT_MAIN
Font: Romans.shx (AutoCAD single-stroke font)
Height: 0 (variable)
Width Factor: 1.0
Oblique Angle: 0
☑ Annotative
☐ Backwards
☐ Upside down
☐ Vertical
```

**Familia de estilos de texto para isométricos:**

| Style Name | Font | Default Height | Uso |
|------------|------|----------------|-----|
| ISO_TEXT_MAIN | Romans.shx | 3.5mm | Texto general |
| ISO_TEXT_TITLE | Romans.shx | 7.0mm | Títulos principales |
| ISO_TEXT_DIMENSION | Romans.shx | 2.5mm | Cotas y dimensiones |
| ISO_TEXT_NOTE | Romans.shx | 2.5mm | Notas técnicas |
| ISO_TEXT_BOM | Romans.shx | 2.0mm | Tabla de materiales |
| ISO_TEXT_TITLEBLOCK | Romans.shx | 3.0mm | Cajetín |

**Crear estilos de texto:**

```
Command: STYLE
[Aparece diálogo Text Style]

1. Click "New"
2. Style Name: ISO_TEXT_MAIN
3. Font: Romans.shx
4. Height: 0 (para permitir altura variable)
5. Width Factor: 1.0
6. ☑ Annotative (para escala automática)
7. Click "Apply"

[Repetir para cada estilo]
```

### 3.5 Estilos de Dimensión según ISO 129

ISO 129-1:2018 especifica indicación de dimensiones y tolerancias.

**Configuración de estilo de dimensión para isométricos:**

```
Dimension Style: ISO_DIM_STANDARD

Lines:
├─ Dimension Lines
│  ├─ Color: ByLayer
│  ├─ Linetype: ByLayer
│  ├─ Lineweight: ByLayer
│  └─ Extend beyond ticks: 1.5mm
│
├─ Extension Lines
│  ├─ Color: ByLayer
│  ├─ Linetype: ByLayer
│  ├─ Lineweight: ByLayer
│  ├─ Extend beyond dim lines: 1.5mm
│  ├─ Offset from origin: 1.0mm
│  └─ Suppress: ☐ Ext line 1  ☐ Ext line 2

Symbols and Arrows:
├─ Arrowheads
│  ├─ First: Closed filled
│  ├─ Second: Closed filled
│  └─ Arrow size: 2.5mm
│
└─ Center Marks: Mark (2.5mm)

Text:
├─ Text style: ISO_TEXT_DIMENSION
├─ Text color: ByLayer
├─ Fill color: Background
├─ Text height: 2.5mm
├─ Fraction height scale: 1.0
├─ Draw frame around text: No
├─ Text placement: Above, Centered
└─ Text alignment: Aligned with dimension line

Fit:
├─ Fit options: Either text or arrows
├─ Text placement: Beside the dimension line
└─ Scale for dimension features: Use overall scale of 1.0

Primary Units:
├─ Unit format: Decimal
├─ Precision: 0 (enteros) o 0.0 (un decimal)
├─ Decimal separator: . (punto)
├─ Suffix: (blank para mm, " para inches)
├─ Measurement scale: 1.0
└─ Zero suppression: ☑ Leading  ☐ Trailing

Alternate Units: Off

Tolerances: Off (para isométricos nominales)
```

**Crear estilo de dimensión:**

```
Command: DIMSTYLE
Click "New..."
New Style Name: ISO_DIM_STANDARD
Start With: ISO-25
☑ Annotative
Click "Continue"

[Configurar todas las pestañas según especificaciones arriba]

Click "OK"
Click "Set Current"
Click "Close"
```

## 4. Estilos de Isométricos (.ISOCONFIG)

### 4.1 Anatomía de Archivo .ISOCONFIG

Los archivos `.isoconfig` controlan la apariencia visual de componentes en isométricos generados. Son archivos XML complejos que definen simbología.

**Ubicación:** `C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\Styles\`

**Estructura básica:**

```xml
<?xml version="1.0" encoding="utf-8"?>
<IsoStyle name="ISO_CUSTOM_FABRICATION" version="2.0">

  <!-- Configuración general -->
  <GeneralSettings>
    <PipelineDisplayStyle>SingleLine</PipelineDisplayStyle>
    <ShowComponentSymbols>true</ShowComponentSymbols>
    <ShowDimensions>true</ShowDimensions>
    <ShowBOM>true</ShowBOM>
    <BOMLocation>BottomRight</BOMLocation>
    <DimensionUnits>Millimeters</DimensionUnits>
  </GeneralSettings>

  <!-- Estilos de línea para tubería -->
  <PipelineStyles>
    <PipeStyle name="MainPipe">
      <Layer>ISO_PIPE_MAIN</Layer>
      <Color>ByLayer</Color>
      <Lineweight>0.50mm</Lineweight>
      <Linetype>Continuous</Linetype>
    </PipeStyle>

    <PipeStyle name="BranchPipe">
      <Layer>ISO_PIPE_BRANCH</Layer>
      <Color>ByLayer</Color>
      <Lineweight>0.35mm</Lineweight>
      <Linetype>Continuous</Linetype>
    </PipeStyle>
  </PipelineStyles>

  <!-- Símbolos de componentes -->
  <ComponentSymbols>
    <Symbol type="Elbow90">
      <BlockName>ISO_SYM_ELBOW_90</BlockName>
      <Layer>ISO_COMPONENTS</Layer>
      <ScaleFactor>1.0</ScaleFactor>
    </Symbol>

    <Symbol type="Tee">
      <BlockName>ISO_SYM_TEE</BlockName>
      <Layer>ISO_COMPONENTS</Layer>
      <ScaleFactor>1.0</ScaleFactor>
    </Symbol>

    <Symbol type="GateValve">
      <BlockName>ISO_SYM_VALVE_GATE</BlockName>
      <Layer>ISO_COMPONENTS</Layer>
      <ScaleFactor>1.5</ScaleFactor>
    </Symbol>
  </ComponentSymbols>

  <!-- Formato de BOM -->
  <BOMFormat>
    <TableStyle>ISO_TABLE_BOM</TableStyle>
    <Columns>
      <Column name="ItemNo" width="15mm" header="ITEM"/>
      <Column name="Qty" width="15mm" header="QTY"/>
      <Column name="Description" width="80mm" header="DESCRIPTION"/>
      <Column name="Material" width="50mm" header="MATERIAL"/>
      <Column name="Weight" width="25mm" header="WEIGHT (kg)"/>
    </Columns>
    <SortBy>ItemNumber</SortBy>
  </BOMFormat>

</IsoStyle>
```

### 4.2 Personalización de Simbología de Componentes

Para máxima claridad en taller, cada tipo de componente debe tener símbolo distintivo:

**Símbolos estándar según ISO 10628 (diagramas de plantas de proceso):**

| Componente | Símbolo Descripción | Bloque DWG |
|------------|---------------------|------------|
| Codo 90° | Línea con esquina redondeada | ISO_SYM_ELBOW_90 |
| Codo 45° | Línea con esquina 45° | ISO_SYM_ELBOW_45 |
| Tee recta | T con tres salidas iguales | ISO_SYM_TEE |
| Tee reductora | T con salida reducida | ISO_SYM_TEE_RED |
| Reductor concéntrico | Línea con cambio de grosor simétrico | ISO_SYM_REDUCER_CONC |
| Reductor excéntrico | Línea con cambio de grosor asimétrico | ISO_SYM_REDUCER_ECC |
| Brida | Doble línea perpendicular | ISO_SYM_FLANGE |
| Válvula de compuerta | Cuadrado con línea diagonal | ISO_SYM_VALVE_GATE |
| Válvula de globo | Círculo con línea | ISO_SYM_VALVE_GLOBE |
| Válvula de bola | Círculo con esfera interior | ISO_SYM_VALVE_BALL |
| Válvula de retención | Triángulo dentro de cuerpo | ISO_SYM_VALVE_CHECK |

**Crear biblioteca de símbolos:**

1. Crear archivo `ISO_SYMBOLS.dwg` que contendrá todos los bloques de símbolos
2. Dibujar cada símbolo a escala 1:1 (tamaño real del componente)
3. Crear bloques con punto de inserción en centro de conexión
4. Agregar atributos para información variable (tag, tamaño, material)

**Ejemplo - Bloque para válvula de compuerta:**

```
1. Dibujar geometría del símbolo:
   - Rectángulo 20mm x 10mm (cuerpo de válvula)
   - Línea diagonal de esquina a esquina (indica compuerta)
   - Líneas de conexión de 5mm a cada lado

2. Crear atributos:
   Tag: VALVE_TAG
   Prompt: Valve Tag Number
   Default: GV-101
   Height: 3.5mm
   Position: Arriba del símbolo

3. Guardar como bloque:
   Command: BLOCK
   Name: ISO_SYM_VALVE_GATE
   Base point: Centro de conexión izquierda
   Objects: [Seleccionar todo]
```

### 4.3 Configuración de Dimensionamiento Automático

Plant 3D puede dimensionar isométricos automáticamente, pero requiere configuración de reglas:

**Reglas de dimensionamiento según ASME Y14.5:**

1. **Dimensiones de centro a centro (C-L to C-L):**
   - Entre cambios de dirección (elbows, tees)
   - Desde nozzles de equipo a primer componente
   - Entre ramales

2. **Dimensiones de longitud de corte (cut length):**
   - Longitud física de cada tramo de tubería recta
   - Incluye allowances para soldadura (típicamente 3mm por extremo)

3. **Elevaciones:**
   - Altura de puntos críticos sobre datum establecido
   - Coordenada Z en relación a Floor Level 0

4. **Coordenadas de ubicación:**
   - Northing/Easting de inicio y fin de línea
   - Referenciadas a Grid Line

**Configuración en .ISOCONFIG:**

```xml
<DimensioningRules>
  <!-- Dimensiones de centro a centro -->
  <Rule type="CenterToCenter">
    <Apply>
      <Between>Elbow</Between>
      <And>Elbow</And>
    </Apply>
    <Apply>
      <Between>Elbow</Between>
      <And>Tee</And>
    </Apply>
    <Apply>
      <Between>Nozzle</Between>
      <And>FirstComponent</And>
    </Apply>
    <Style>ISO_DIM_STANDARD</Style>
    <Layer>ISO_DIMENSIONS</Layer>
    <Precision>0</Precision> <!-- Enteros en mm -->
  </Rule>

  <!-- Dimensiones de longitud de corte -->
  <Rule type="CutLength">
    <Apply>
      <To>Pipe</To>
    </Apply>
    <IncludeWeldAllowance>true</IncludeWeldAllowance>
    <WeldAllowancePerEnd>3mm</WeldAllowancePerEnd>
    <Style>ISO_DIM_STANDARD</Style>
    <Layer>ISO_DIMENSIONS</Layer>
    <Prefix>CL=</Prefix> <!-- Muestra "CL=2500" -->
  </Rule>

  <!-- Elevaciones -->
  <Rule type="Elevation">
    <Apply>
      <To>Nozzle</To>
      <To>BranchConnection</To>
      <To>HighPoint</To>
      <To>LowPoint</To>
    </Apply>
    <Datum>FloorLevel0</Datum>
    <Style>ISO_DIM_STANDARD</Style>
    <Layer>ISO_DIMENSIONS</Layer>
    <Prefix>EL </Prefix> <!-- Muestra "EL 3500" -->
  </Rule>
</DimensioningRules>
```

## 5. Implementación de Estándares Corporativos

### 5.1 Definición de Estándares de Empresa

Para implementar estándares consistentes en toda la organización, documente especificaciones:

**Documento: Estándar de Isométricos de Fabricación**

```markdown
# Estándar de Isométricos - ABC Engineering & Construction
## Revisión 3.0 - Diciembre 2025

### 1. ALCANCE
Este estándar aplica a todos los isométricos de tubería generados para
proyectos de plantas de proceso, refinerías y petroquímica.

### 2. TAMAÑO DE HOJA
- Preferido: ISO A1 (594 x 841 mm)
- Alternativo: ANSI D (22 x 34 inches) para proyectos USA
- Múltiples hojas si línea es muy compleja

### 3. ESCALA
- Preferida: 1:20 (para tuberías 2"-12")
- Alternativa: 1:30 (para tuberías >12" o líneas largas)
- Nunca usar escalas menores que 1:50

### 4. UNIDADES
- Dimensiones: Milímetros (proyectos internacionales)
- Dimensiones: Inches (proyectos USA solamente)
- Pesos: Kilogramos
- Presión: Bar (PSIG entre paréntesis)
- Temperatura: °C (°F entre paréntesis)

### 5. CAJETÍN
- Ubicación: Esquina inferior derecha
- Logo ABC: Esquina superior izquierda (50x50mm)
- Información obligatoria: [Lista de campos obligatorios]

### 6. COLORES (para plotting a color)
- Tubería principal: Negro
- Ramales: Negro
- Válvulas: Rojo
- Instrumentación: Azul
- Dimensiones: Verde oscuro
- Anotaciones: Verde oscuro

### 7. NUMERACIÓN DE ISOMÉTRICOS
Formato: ISO-[Area]-[Service]-[Size]-[Material]-[Seq]
Ejemplo: ISO-1001-A-6"-CS-001
  ISO = Prefijo estándar
  1001 = Área de planta
  A = Código de servicio (A=Process, U=Utilities, F=Firewater)
  6" = Diámetro nominal
  CS = Material (CS=Carbon Steel, SS=Stainless, etc.)
  001 = Secuencial

### 8. REVISIONES
- Rev 0: Issued for Design (IFD)
- Rev 1: Issued for Construction (IFC)
- Rev 2+: Cambios específicos documentados
- Control de revisiones en cajetín

### 9. TABLA DE MATERIALES (BOM)
- Ubicación: Esquina inferior derecha, arriba de cajetín
- Columnas obligatorias: Item, Qty, Description, Material, Weight
- Ordenamiento: Por tipo de componente, luego por tamaño
- Totales: Peso total al final de tabla
```

### 5.2 Creación de Paquete de Plantillas Corporativas

Organice todos los archivos de configuración en estructura reutilizable:

```
ABC_Engineering_ISO_Templates\
├── README.txt (instrucciones de instalación)
├── CONFIG\
│   ├── ISO_CONFIG_ABC.xml
│   └── ProjectSetup_Template.xml
├── STYLES\
│   ├── ISO_ABC_Metric.isoconfig
│   ├── ISO_ABC_Imperial.isoconfig
│   └── ISO_ABC_Offshore.isoconfig
├── TEMPLATES\
│   ├── ISO_Template_A1_Metric.dwg
│   ├── ISO_Template_D_Imperial.dwg
│   └── ISO_Template_A0_Large.dwg
├── BLOCKS\
│   └── ISO_Symbols_ABC.dwg (biblioteca de símbolos)
├── LINETYPES\
│   └── ABC_Linetypes.lin
├── FONTS\
│   └── ABC_Romans.shx
└── DOCUMENTATION\
    ├── ABC_ISO_Standard_Rev3.pdf
    └── Installation_Instructions.pdf
```

### 5.3 Script de Instalación de Plantillas

Para facilitar implementación en estaciones de trabajo, cree script de instalación:

**install_templates.bat:**

```batch
@echo off
echo ============================================
echo ABC Engineering - Instalacion de Templates
echo AutoCAD Plant 3D 2026
echo ============================================
echo.

REM Verificar que Plant 3D esta instalado
if not exist "C:\Program Files\Autodesk\AutoCAD Plant 3D 2026" (
    echo ERROR: AutoCAD Plant 3D 2026 no encontrado
    echo Por favor instale Plant 3D 2026 antes de continuar
    pause
    exit /b 1
)

REM Copiar archivos de configuracion
echo Copiando archivos de configuracion...
xcopy /Y /I CONFIG\*.xml "C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\"

REM Copiar estilos
echo Copiando estilos de isometricos...
xcopy /Y /I STYLES\*.isoconfig "C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\Styles\"

REM Copiar plantillas
echo Copiando plantillas DWG...
xcopy /Y /I TEMPLATES\*.dwg "C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\Templates\"

REM Copiar bloques
echo Copiando biblioteca de simbolos...
xcopy /Y /I BLOCKS\*.dwg "C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Blocks\"

REM Hacer backup de configuracion anterior
echo.
echo Creando backup de configuracion anterior...
if exist "C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\ISO_CONFIG.XML" (
    copy "C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\ISO_CONFIG.XML" ^
         "C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\ISO_CONFIG.XML.backup"
)

REM Activar nueva configuracion
echo Activando configuracion ABC...
copy /Y CONFIG\ISO_CONFIG_ABC.xml "C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\ISO_CONFIG.XML"

echo.
echo ============================================
echo Instalacion completada exitosamente
echo ============================================
echo.
echo Por favor reinicie AutoCAD Plant 3D 2026
echo para que los cambios tomen efecto.
echo.
pause
```

### 5.4 Validación y Testing de Plantillas

Antes de implementar plantillas corporativas en producción, valide exhaustivamente:

**Checklist de validación:**

✅ **Generación de isométricos de prueba:**
- Generar isométricos de líneas simples (recta con 2 elbows)
- Generar isométricos de líneas complejas (múltiples ramales)
- Generar isométricos de líneas con múltiples diámetros
- Generar batch de 10+ isométricos simultáneamente

✅ **Verificación de cajetín:**
- Todos los atributos se populan correctamente
- Logos corporativos se muestran correctamente
- Formato de fecha coincide con estándar regional
- Información de revisión funciona correctamente

✅ **Verificación de dimensionamiento:**
- Dimensiones de centro a centro son correctas (comparar con modelo 3D)
- Longitudes de corte incluyen allowances configuradas
- Elevaciones referencian datum correcto
- Precisión decimal es apropiada (enteros para mm, un decimal para inches)

✅ **Verificación de BOM:**
- Todos los componentes de línea aparecen en BOM
- Cantidades son correctas
- Pesos son correctos (comparar con catálogo de fabricante)
- Formato de tabla es legible

✅ **Verificación de plotting:**
- Plotear a PDF desde layout (no desde model space)
- Verificar que lineweights se visualizan correctamente
- Verificar que texto es legible a escala de impresión
- Verificar que cajetín está completo en hoja impresa

✅ **Verificación de estándares:**
- Cumplimiento de ISO 5261 (dibujo de tuberías)
- Cumplimiento de ISO 129 (dimensionamiento)
- Cumplimiento de estándares corporativos internos

## 6. Configuración de Layers y Colores según ISO 128

### 6.1 Jerarquía Visual según ISO 128-24

ISO 128-24 especifica líneas en dibujos técnicos - tipos y anchos.

**Jerarquía de grosor de línea:**

| Grupo | Tipo de línea | Relación de grosor | Lineweight | Uso |
|-------|---------------|-------------------|------------|-----|
| A | Línea gruesa | 1.0 | 0.70mm | Contornos visibles principales |
| B | Línea media | 0.7 | 0.50mm | Tubería principal, cajetín |
| C | Línea fina | 0.5 | 0.35mm | Ramales, componentes |
| D | Línea muy fina | 0.35 | 0.25mm | Dimensiones, anotaciones |

**Aplicación a isométricos:**

```
Layer: ISO_PIPE_MAIN
Purpose: Tubería principal (línea en evaluación)
Lineweight: 0.50mm (Grupo B)
Reason: Debe destacar como elemento principal

Layer: ISO_PIPE_BRANCH
Purpose: Ramales secundarios
Lineweight: 0.35mm (Grupo C)
Reason: Visibles pero subordinados a línea principal

Layer: ISO_COMPONENTS
Purpose: Válvulas, fittings, instrumentos
Lineweight: 0.25mm (Grupo D)
Reason: Simbología complementaria

Layer: ISO_DIMENSIONS
Purpose: Cotas y dimensiones
Lineweight: 0.18mm (Línea fina)
Reason: Información de medición, no debe competir con geometría
```

### 6.2 Configuración de Plot Styles

Para reproducir correctamente lineweights en plots, configure plot style table (CTB o STB):

**Opción 1: Color-Dependent Plot Style (CTB) - Tradicional**

Archivo: `ISO_PlotStyle.ctb`

| Color | Plot Color | Lineweight | Screening |
|-------|------------|------------|-----------|
| 1 (Red) | Black | 0.25mm | 100% |
| 2 (Yellow) | Black | 0.18mm | 100% |
| 3 (Green) | Black | 0.18mm | 100% |
| 4 (Cyan) | Black | 0.25mm | 100% |
| 5 (Blue) | Black | 0.13mm | 100% |
| 7 (White) | Black | 0.50mm | 100% |
| 8 (Gray) | Black | 0.13mm | 50% |

**Opción 2: Named Plot Style (STB) - Moderno**

Archivo: `ISO_PlotStyle.stb`

| Plot Style Name | Color | Lineweight | Screening |
|-----------------|-------|------------|-----------|
| ISO_Pipe_Main | Black | 0.50mm | 100% |
| ISO_Pipe_Branch | Black | 0.35mm | 100% |
| ISO_Components | Black | 0.25mm | 100% |
| ISO_Dimensions | Black | 0.18mm | 100% |
| ISO_Annotations | Black | 0.18mm | 100% |
| ISO_Centerlines | Black | 0.13mm | 100% |
| ISO_Grid | Gray | 0.13mm | 30% |

**Asignar plot style a plantilla:**

```
Command: PAGESETUP
[En Page Setup Manager]
  Page setup: ISO_A1_Layout
  Printer/plotter: Adobe PDF o DWG To PDF.pc3
  Plot style table: ISO_PlotStyle.stb
  ☑ Display plot styles
  Plot area: Layout
  Scale: 1:1 (escala real del layout)
  ☑ Center the plot

Click "OK"
```

## 7. Creación de Templates Reutilizables

### 7.1 Template Master para Familia de Isométricos

En lugar de crear plantilla individual para cada proyecto, cree "master template" que sirva de base:

**ISO_Master_Template.dwg:**

Contenido:
1. **Múltiples layouts para diferentes tamaños de hoja:**
   - Layout_A1 (594 x 841mm)
   - Layout_A0 (841 x 1189mm)
   - Layout_D (559 x 864mm - 22"x34")
   - Layout_E (864 x 1118mm - 34"x44")

2. **Bloques de cajetín con atributos:**
   - TITLE_BLOCK_A1 (para layout A1)
   - TITLE_BLOCK_A0 (para layout A0)
   - TITLE_BLOCK_D (para layout D)

3. **Bloques de BOM con atributos:**
   - BOM_TABLE_STANDARD (tabla de materiales estándar)
   - BOM_TABLE_EXTENDED (con columnas adicionales)

4. **Biblioteca de símbolos:**
   - Todos los símbolos de componentes como bloques internos

5. **Estilos pre-configurados:**
   - Estilos de texto (ISO_TEXT_*)
   - Estilos de dimensión (ISO_DIM_*)
   - Estilos de tabla (ISO_TABLE_*)
   - Estilos de multileader (ISO_LEADER_*)

6. **Layers organizados:**
   - Estructura completa de layers según sección 6.1

7. **Page setups guardados:**
   - Configuración de plotting para cada layout

### 7.2 Derivación de Templates Específicos de Proyecto

Para cada proyecto nuevo, derive template específico desde master:

**Paso a paso:**

1. **Abrir master template:**
   ```
   Command: OPEN
   File: ISO_Master_Template.dwg
   ```

2. **Modificar cajetín para proyecto específico:**
   ```
   Command: BEDIT
   Block: TITLE_BLOCK_A1

   [Modificar campos específicos del proyecto:]
   - PROJECT: ABC Refinery Expansion
   - CLIENT: ABC Petroleum Corp
   - CONTRACT: ABC-CDU-2026
   - LOGO: [Insertar logo del cliente si requerido]

   Close Block Editor, Save changes
   ```

3. **Configurar variables de proyecto:**
   ```
   Command: SETVAR
   Variable: PROJECTNAME
   Value: ABC Refinery Expansion

   Command: SETVAR
   Variable: LOGINNAME
   Value: ABC Engineering
   ```

4. **Guardar como template de proyecto:**
   ```
   Command: SAVEAS
   File type: AutoCAD Drawing Template (*.dwt)
   File name: ISO_ABC_Refinery_2026.dwt
   Location: C:\PlantProjects\ABC_Refinery\Templates\
   ```

5. **Configurar Plant 3D para usar nueva plantilla:**
   ```
   En Plant 3D:
   Project Setup → Isometric DWG Settings
   ├─ Isometric Drawing Template:
   │  C:\PlantProjects\ABC_Refinery\Templates\ISO_ABC_Refinery_2026.dwt
   ├─ Isometric Style:
   │  ISO_ABC_Metric.isoconfig
   └─ Output Folder:
      C:\PlantProjects\ABC_Refinery\Isometrics\
   ```

### 7.3 Control de Versiones de Templates

Templates evolucionan durante ciclo de vida del proyecto. Implemente control de versiones:

**Nomenclatura con versionado:**

```
ISO_ABC_Refinery_2026_v1.0.dwt   (versión inicial)
ISO_ABC_Refinery_2026_v1.1.dwt   (corrección menor)
ISO_ABC_Refinery_2026_v2.0.dwt   (cambio significativo)
```

**Log de cambios (CHANGELOG.txt):**

```
# Template Change Log - ISO_ABC_Refinery_2026

## Version 2.0 (2025-12-15)
### Changed
- Actualizado cajetín para incluir campo "Heat Trace Required"
- Modificado BOM table para agregar columna "Paint Code"
- Cambiado lineweight de ISO_PIPE_MAIN de 0.50mm a 0.60mm

### Fixed
- Corregido error en atributo TEST_PRESS (mostraba valor incorrecto)
- Solucionado problema de escala en símbolo de válvula de control

## Version 1.1 (2025-11-28)
### Added
- Agregado layout para hoja A0 (líneas muy largas)

### Fixed
- Corregido espacio insuficiente en BOM table

## Version 1.0 (2025-11-20)
### Added
- Versión inicial basada en ISO_Master_Template v3.0
- Cajetín personalizado para proyecto ABC Refinery
- Configuración específica de numeración de isométricos
```

**Procedimiento de actualización de templates:**

1. **Nunca modificar templates en uso activo**
2. **Crear copia versionada antes de hacer cambios**
3. **Probar nueva versión con isométricos de prueba**
4. **Documentar cambios en changelog**
5. **Comunicar actualización al equipo**
6. **Re-generar isométricos existentes si cambios son críticos**

## Ejercicio Práctico: Creación de Template Corporativo Personalizado

### Escenario

Usted es el CAD Manager de "Pacific Engineering & Construction", empresa especializada en plantas de LNG (Gas Natural Licuado). Debe crear template de isométricos que cumpla:

- Estándares ISO 15926, ISO 5261, ISO 129
- Requisitos de cliente "Pacific Energy Corp"
- Formato de hoja A1 (594 x 841mm) métrico
- Numeración específica: ISO-[Plant]-[Line]-[Rev]
- BOM con columna adicional para "Trace Heating"

### Datos del Proyecto

```
Project: Pacific LNG Terminal Phase 2
Client: Pacific Energy Corp
Location: Buenaventura, Colombia
Contract: PEC-LNG-PH2-2026
Engineer: Pacific Engineering & Construction
Piping Spec: LNG-PS-001 (Stainless Steel Cryogenic)
Design Codes: ASME B31.3, EN 13458
```

### Tareas

**Tarea 1: Crear estructura de layers (10 min)**

Cree conjunto completo de layers para isométricos siguiendo estándar ISO 128-24.

**Tarea 2: Diseñar cajetín personalizado (15 min)**

Diseñe cajetín que incluya:
- Logo de Pacific Engineering (use rectángulo placeholder)
- Logo de Pacific Energy Corp (cliente)
- Información del proyecto
- Tabla de revisiones (3 filas)
- Aprobaciones (Drawn, Checked, Approved)
- Información de línea (número, servicio, material, presión, temperatura)

**Tarea 3: Crear estilos de texto y dimensión (5 min)**

Configure estilos según ISO 3098 e ISO 129.

**Tarea 4: Crear bloque de cajetín con atributos (10 min)**

Convierta cajetín a bloque con atributos para auto-población.

**Tarea 5: Guardar como template y documentar (5 min)**

Guarde como `.dwt` y cree documento README con instrucciones de uso.

### Criterios de Evaluación

- ✅ Layers siguen convención de nomenclatura ISO_*
- ✅ Lineweights cumplen jerarquía ISO 128-24
- ✅ Cajetín incluye todos los campos obligatorios
- ✅ Atributos tienen tags descriptivos y defaults apropiados
- ✅ Estilos de texto y dimensión cumplen ISO 3098 e ISO 129
- ✅ Template se puede usar inmediatamente para generar isométricos

### Tiempo Estimado

⏱️ **40 minutos**

## Preguntas de Evaluación

### Pregunta 1
¿Cuál es el propósito del archivo PCF (Piping Component File) en el proceso de generación de isométricos en Plant 3D?

A) Almacenar configuración de colores y layers
B) Exportar geometría y atributos del modelo 3D en formato texto estándar de industria
C) Controlar versiones de isométricos generados
D) Gestionar revisiones de documentos técnicos

**Respuesta correcta: B**

**Explicación:** El archivo PCF es un formato de texto ASCII estándar que describe completamente una línea de tubería (geometría, componentes, materiales, coordenadas). Es generado automáticamente por Plant 3D desde el modelo 3D y puede ser utilizado por generadores de isométricos de terceros o sistemas downstream como ERP y software de fabricación CNC. El formato PCF fue desarrollado por AVEVA y se ha convertido en estándar de facto en la industria de plantas de proceso para intercambio de datos de tubería.

---

### Pregunta 2
Según el estándar ISO 128-24, ¿cuál debe ser la relación de grosor entre la línea de tubería principal y las líneas de dimensionamiento en un isométrico?

A) Mismo grosor (1:1)
B) Tubería principal 2x más gruesa que dimensiones
C) Tubería principal aproximadamente 3x más gruesa que dimensiones
D) Dimensiones más gruesas que tubería para mejor legibilidad

**Respuesta correcta: C**

**Explicación:** ISO 128-24 establece jerarquía de grosores de línea donde líneas principales (tubería) deben usar lineweight de 0.50mm (Grupo B) mientras que líneas de dimensionamiento usan 0.18mm (Grupo D), resultando en relación aproximada de 3:1. Esta jerarquía visual asegura que el elemento principal (geometría de tubería) destaque sobre información complementaria (dimensiones, anotaciones). Usar grosores similares resultaría en dibujo confuso donde no se distingue claramente qué es tubería y qué es anotación.

---

### Pregunta 3
En un bloque de cajetín con atributos para isométricos, ¿cuál es la ventaja principal de usar atributos en lugar de texto estático?

A) Los atributos permiten que Plant 3D llene automáticamente información desde el modelo 3D
B) Los atributos ocupan menos espacio en el archivo DWG
C) Los atributos son más fáciles de editar manualmente
D) Los atributos mejoran la velocidad de plotting

**Respuesta correcta: A**

**Explicación:** La función primaria de atributos en bloques de cajetín es permitir auto-población de campos. Cuando Plant 3D genera un isométrico, puede extraer propiedades del modelo 3D (número de línea, servicio, material, presión, temperatura, etc.) y automáticamente llenar los atributos correspondientes en el cajetín. Esto elimina trabajo manual de completar cajetines, reduce errores de transcripción, y asegura consistencia entre modelo 3D y documentación 2D. Sin atributos, cada cajetín tendría que llenarse manualmente, proceso tedioso y propenso a errores en proyectos con cientos o miles de isométricos.

---

### Pregunta 4
¿Cuál es la ubicación correcta en el sistema de archivos de Windows para almacenar plantillas DWG de isométricos que serán compartidas por todos los usuarios en una organización?

A) `C:\Users\[Usuario]\Documents\`
B) `C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\Templates\`
C) `C:\Program Files\Autodesk\AutoCAD Plant 3D 2026\`
D) En la carpeta del proyecto actual

**Respuesta correcta: B**

**Explicación:** La ruta `C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Iso\Templates\` es la ubicación estándar de sistema para plantillas de isométricos compartidas por todos los usuarios en la misma máquina. La carpeta `ProgramData` es accesible por todos los usuarios (a diferencia de carpetas de usuario individual) y persiste entre reinstalaciones de software. Plant 3D busca templates en esta ubicación por defecto. Almacenar templates en `Program Files` no es recomendado (carpeta de solo lectura) y almacenarlas en carpeta de proyecto individual limitaría reutilización en futuros proyectos.

---

### Pregunta 5
Al implementar estándares corporativos de isométricos, ¿qué archivo XML controla el mapeo entre propiedades de objetos de Plant 3D y campos del archivo PCF exportado?

A) DWG_SETTINGS.XML
B) ISO_CONFIG.XML
C) PROJECT_SETUP.XML
D) SPEC_MAPPING.XML

**Respuesta correcta: B**

**Explicación:** El archivo `ISO_CONFIG.XML` es el archivo de configuración central que controla cómo Plant 3D extrae datos del modelo 3D y los escribe al archivo PCF. Define mapeos entre propiedades de Plant 3D (como LineNumber, Spec, Service, OperatingPressure) y campos PCF estándar (LINE-ID, SPEC-REF, SERVICE-DESCRIPTION, etc.). También controla qué tipos de componentes se incluyen/excluyen del PCF, configuración de unidades, y reglas de extracción. Personalizar este archivo es esencial para integrar Plant 3D con sistemas downstream (ERP, fabricación CNC) que requieren campos específicos en formato PCF.

## Resumen de la Lección

En esta lección exhaustiva sobre configuración de estilos y plantillas de isométricos, ha adquirido capacidades críticas para estandarización de documentación técnica en proyectos de plantas industriales:

### Conceptos Clave Cubiertos

1. **Arquitectura del Sistema de Plantillas**
   - Comprendió los cuatro componentes fundamentales: archivos PCF, ISO_CONFIG.XML, plantillas DWG y estilos .ISOCONFIG
   - Dominó el flujo de datos desde modelo 3D hasta isométrico final PDF
   - Identificó ubicaciones correctas de archivos de configuración en sistema Windows

2. **Configuración de Archivos PCF**
   - Entendió el formato PCF como estándar de industria para intercambio de datos de tubería
   - Aprendió a personalizar ISO_CONFIG.XML para mapear propiedades empresariales
   - Desarrolló habilidades de validación de archivos PCF para asegurar integridad de datos

3. **Creación de Plantillas DWG Personalizadas**
   - Diseñó cajetines profesionales cumpliendo ISO 7200 con información técnica completa
   - Creó bloques dinámicos con atributos para auto-población desde modelo 3D
   - Configuró layers, estilos de texto y estilos de dimensión según ISO 128, ISO 3098 e ISO 129
   - Implementó plot styles para reproducción correcta de lineweights en documentos impresos

4. **Estilos de Isométricos (.ISOCONFIG)**
   - Personalizó simbología de componentes según ISO 10628
   - Configuró reglas de dimensionamiento automático según ASME Y14.5
   - Estableció formato de tabla de materiales (BOM) con columnas empresariales

5. **Implementación de Estándares Corporativos**
   - Desarrolló documentación formal de estándares de isométricos empresariales
   - Creó paquetes de plantillas reutilizables con estructura organizada
   - Implementó scripts de instalación automatizada para despliegue en organización
   - Estableció procedimientos de validación y testing de plantillas

6. **Templates Reutilizables**
   - Diseñó master template que sirve de base para múltiples proyectos
   - Implementó control de versiones y changelog para tracking de evolución
   - Estableció procedimiento de derivación de templates específicos de proyecto

### Aplicación Práctica

La configuración correcta de plantillas tiene impacto directo en eficiencia operativa:

- **Ahorro de tiempo:** Template bien configurado elimina 95% del trabajo manual de formateo de isométricos
- **Consistencia:** Estandarización asegura que todos los isométricos sigan mismo formato, reduciendo confusión en taller
- **Cumplimiento:** Templates basados en estándares ISO y ASME aseguran aceptación por clientes y autoridades regulatorias
- **Integración:** Archivos PCF correctamente configurados alimentan sistemas ERP y fabricación CNC sin intervención manual
- **Escalabilidad:** Inversión inicial en templates se amortiza en cientos o miles de isométricos generados durante vida del proyecto

### Conexión con Industria Real

En proyectos de plantas de proceso de gran escala (refinerías, petroquímica, LNG), la generación de documentación de fabricación puede representar 20-30% del esfuerzo total de ingeniería de tubería. Empresas líderes en ingeniería invierten significativamente en desarrollo de templates y estándares robustos, reconociendo que:

- Un isométrico mal dimensionado puede resultar en $5,000-$50,000 de material desperdiciado y retrabajo
- Inconsistencia en documentación genera demoras durante revisión técnica, comisionamiento y startup
- Templates profesionales son diferenciador competitivo en licitaciones de proyectos EPCM

La habilidad de configurar y mantener sistemas de plantillas de clase mundial es altamente valorada en industria de ingeniería de plantas.

### Preparación para Próxima Lección

En la **Lección 23: Lista de Materiales (BOM) y Cantidades**, aplicará las plantillas configuradas en esta lección para:

- Generar listas de materiales precisas desde modelo 3D
- Calcular longitudes de corte, pesos y cantidades para procurement
- Exportar BOMs a Excel para integración con sistemas ERP
- Producir reportes de material takeoff (MTO) para estimación de costos

Las plantillas de BOM que configuró en esta lección serán fundamentales para extracción automatizada de cantidades en la siguiente.

---

**Próxima Lección:** [Lección 23 - Lista de Materiales (BOM) y Cantidades](./leccion-23.md)

---

**DISTMAH ATC - Authorized Training Center**
AutoCAD Plant 3D 2026 - Curso Avanzado
Módulo 5, Lección 22 de 30
