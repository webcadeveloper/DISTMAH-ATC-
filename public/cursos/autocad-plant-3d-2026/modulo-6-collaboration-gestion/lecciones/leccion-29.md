# Lección 29: Gestor de Reportes y Reportes Personalizados

**Módulo 6: Colaboración y Gestión de Proyectos**
**Duración:** 60 minutos
**Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, los estudiantes serán capaces de:

✅ **Utilizar el Report Creator de Plant 3D** para generar reportes estándar de líneas, equipos, válvulas y materiales

✅ **Configurar y personalizar reportes** mediante modificación de plantillas y selección de propiedades específicas

✅ **Crear reportes personalizados avanzados** utilizando consultas SQL y extracción de datos del modelo 3D

✅ **Integrar reportes con Microsoft Excel** para análisis avanzado, gráficos y dashboards de proyecto

✅ **Automatizar generación de reportes** mediante plantillas reutilizables y scheduling

✅ **Desarrollar reportes especializados** para diferentes stakeholders: procurement, fabricación, construcción, operaciones

## Introducción

Los reportes son el puente crítico entre el modelo 3D inteligente de AutoCAD Plant 3D y las necesidades de información de los diversos stakeholders del proyecto. Mientras el modelo 3D contiene toda la información de diseño, ingeniería y construcción, los reportes extraen y presentan esta información en formatos utilizables para decisiones de negocio, procurement, fabricación y construcción.

**Importancia de Reportes en Proyectos de Plantas:**

En un proyecto típico de planta de proceso, los reportes se utilizan para:

**Ingeniería:**
- Line Lists completas con datos de servicio, especificación, materiales
- Equipment Lists con detalles técnicos, pesos, dimensiones
- Valve Lists por tipo, clase, operación
- Nozzle Schedules de equipos principales
- Support Lists con cargas y ubicaciones

**Procurement (Compras):**
- Bill of Materials (BOM) para requisiciones de materiales
- Material Take-Off (MTO) por commodity (tuberías, válvulas, bridas)
- Equipment Data Sheets para especificaciones técnicas
- Vendor Data Requirements (VDRs)

**Fabricación:**
- Spool Lists para prefabricación de tuberías
- Cut Lists con longitudes de tubería
- Bolt Lists por tipo y tamaño
- Weld Reports por procedimiento y calificación

**Construcción:**
- Installation Lists por área y disciplina
- Peso Total por área (para grúas)
- Installation Sequence por sistema
- As-Built Documentation

**Operaciones:**
- System Descriptions por servicio
- Maintenance Lists de equipos críticos
- Spare Parts Lists vinculadas al modelo
- As-Built Drawings con datos técnicos

**Datos de Industria:**

Según estudios de la Construction Industry Institute (CII):

- **40-60%** del tiempo de ingeniería se dedica a extracción de información del modelo y generación de documentación
- Reportes **automatizados desde modelo 3D** reducen errores de transcripción en **85-95%**
- **Consistencia** de datos entre modelo y documentación es crítica: discrepancias causan 30% de RFIs en construcción
- Proyectos con **reportes integrados** (modelo → reportes automáticos) reducen tiempo de entrega de documentación en **40-50%**

**Estándares Aplicables:**

- **ISO 15926:** Integración de datos de ciclo de vida para plantas de proceso
- **ISO 19650-1:** Gestión de información usando BIM - conceptos y principios
- **ISO 10303 (STEP):** Representación e intercambio de datos de productos
- **ASME B31.3:** Process Piping - requisitos de documentación
- **API 610, 617, 661:** Estándares de equipos rotativos - requerimientos de data sheets

Esta lección cubre el sistema completo de reportes de Plant 3D, desde reportes estándar predefinidos hasta creación de reportes completamente personalizados mediante consultas avanzadas, preparando a los estudiantes para roles de ingeniería de información (Information Engineering) en proyectos BIM de nivel empresarial.

![Introducción a Reportes Plant 3D](../imagenes/leccion-29-introduccion-reportes.png)

## 1. Report Creator de Plant 3D

### 1.1 Arquitectura del Sistema de Reportes

**Estructura de Datos:**

El sistema de reportes de Plant 3D extrae información de múltiples fuentes:

```
Fuentes de Datos:

1. Archivos DWG del Proyecto:
   - Geometría 3D de componentes
   - Propiedades gráficas (layers, colors)
   - Atributos de bloques

2. Base de Datos del Proyecto (SQL Server):
   - Propiedades de componentes (spec, size, service)
   - Relaciones entre objetos (línea contiene segmentos, válvulas, fittings)
   - Datos de P&ID sincronizados
   - Custom properties agregadas por usuario

3. Catálogos de Especificaciones:
   - Descripciones de componentes
   - Números de parte de fabricantes
   - Dimensiones estándar
   - Materiales y ratings

4. Archivos de Configuración:
   - Plantillas de reportes (.xml)
   - Definiciones de consultas
   - Mapeo de propiedades
   - Formato de salida

Flujo de Generación de Reportes:

Usuario Solicita Reporte
         ↓
Report Creator Lee Configuración
         ↓
Consulta Base de Datos del Proyecto
         ↓
Extrae Propiedades de Archivos DWG
         ↓
Referencia Catálogos de Specs
         ↓
Aplica Filtros y Agrupaciones
         ↓
Formatea Salida (Excel, CSV, HTML)
         ↓
Genera Archivo de Reporte
```

**Componentes del Report Creator:**

```
1. Report Manager:
   - Interface principal para generación de reportes
   - Acceso: Project tab > Report panel > Reports

2. Report Templates:
   - Plantillas predefinidas (.rpt files)
   - Ubicación: C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Reports\
   - Editables para personalización

3. Data Manager Integration:
   - Reportes acceden misma base de datos que Data Manager
   - Consistencia garantizada

4. Export Formats:
   - Microsoft Excel (.xlsx)
   - CSV (Comma Separated Values)
   - HTML (web-based)
   - XML (intercambio de datos)
```

![Arquitectura Sistema de Reportes](../imagenes/leccion-29-arquitectura-reportes.png)

### 1.2 Acceso al Report Creator

**Apertura de Report Creator:**

```
Método 1: Ribbon Interface

1. Project tab > Report panel > Reports
   - Abre diálogo "Reports"

Método 2: Application Menu

1. Application Menu > Project > Reports
   - Acceso alternativo

Método 3: Command Line

1. Command: PLANT3DREPORTS
   - Enter
   - Diálogo se abre
```

**Interface del Report Creator:**

```
Diálogo "Reports":

Secciones Principales:

1. Available Reports (Panel Izquierdo):
   - Lista de reportes predefinidos disponibles
   - Organizados por categoría:
     * Piping Reports
     * Equipment Reports
     * Isometric Reports
     * P&ID Reports
     * Custom Reports

2. Report Configuration (Panel Centro):
   - Settings: Opciones específicas del reporte seleccionado
   - Drawing Selection: Qué archivos DWG incluir
   - Filters: Filtrado de datos
   - Sort: Ordenamiento de resultados
   - Group: Agrupación de datos

3. Output Options (Panel Derecho):
   - Format: Excel, CSV, HTML
   - Location: Carpeta de destino
   - Filename: Nombre del archivo
   - Auto-open: Abrir reporte después de generar

4. Botones de Acción:
   - Generate: Generar reporte
   - Preview: Vista previa de datos
   - Edit Template: Editar plantilla (avanzado)
   - Close: Cerrar diálogo
```

![Interface Report Creator](../imagenes/leccion-29-interface-report-creator.png)

### 1.3 Reportes Estándar Predefinidos

**Categorías de Reportes:**

**1. Piping Reports:**

```
Line List Report:
- Descripción: Lista completa de todas las líneas del proyecto
- Información Incluida:
  * Line Number (ej: 1-P-101-CS6-6)
  * From (origen): Equipment/Nozzle
  * To (destino): Equipment/Nozzle
  * Service: Fluid/gas transportado
  * Specification: Spec de tubería
  * Nominal Diameter: Tamaño nominal
  * Insulation: Tipo y espesor
  * Heat Tracing: Si aplica
  * Total Length: Longitud total de línea
  * Drawing Numbers: DWGs donde aparece

Uso:
✅ Control de líneas de proyecto
✅ Base para engineering line list
✅ Verificación de nomenclatura
✅ Tracking de progreso de diseño

Valve List Report:
- Descripción: Lista de todas las válvulas del proyecto
- Información Incluida:
  * Tag Number: Identificación única (ej: PV-101)
  * Line Number: Línea donde está instalada
  * Valve Type: Gate, Globe, Ball, Check, etc.
  * Size: Tamaño nominal
  * Class/Rating: 150#, 300#, 600#, etc.
  * End Connection: Flanged, Threaded, Welded
  * Operator: Manual, Pneumatic, Electric, etc.
  * Material: Body material (CS, SS, etc.)
  * Drawing Location: DWG y coordenadas

Uso:
✅ Procurement de válvulas
✅ Agrupación por commodity
✅ Maintenance planning
✅ Operator training lists

Piping Material Report (Bill of Materials):
- Descripción: Cantidad de materiales de piping por tipo
- Información Incluida:
  * Item Description: Descripción del componente
  * Part Number: Número de parte de catálogo
  * Size: Tamaño nominal
  * Specification: Spec
  * Material: Material del componente
  * Quantity: Cantidad total en proyecto
  * Unit: Unidad (EA, M, KG)
  * Weight: Peso unitario y total

Categorías:
- Pipes (tuberías por diámetro y schedule)
- Fittings (elbows, tees, reducers, caps)
- Flanges (slip-on, weld neck, blind)
- Valves (por tipo y tamaño)
- Bolts (por tipo y longitud)
- Gaskets (por tipo y tamaño)

Uso:
✅ Material requisitions
✅ Cost estimation
✅ Inventory control
✅ Procurement planning

Pipe Support Report:
- Descripción: Lista de soportes de tubería
- Información Incluida:
  * Support Tag: Identificación
  * Support Type: Hanger, Guide, Anchor, etc.
  * Line Supported: Línea(s) soportada(s)
  * Location: Coordenadas XYZ
  * Load: Carga estimada
  * Support Member: Viga/estructura de soporte
  * Drawing: DWG donde aparece

Uso:
✅ Structural load analysis
✅ Support procurement
✅ Installation planning
✅ As-built documentation
```

**2. Equipment Reports:**

```
Equipment List Report:
- Descripción: Lista de todos los equipos del proyecto
- Información Incluida:
  * Equipment Tag: Identificación (ej: P-101, T-201, R-301)
  * Equipment Type: Pump, Tower, Reactor, Exchanger, etc.
  * Description: Descripción funcional
  * Service: Función en proceso
  * Area: Área de planta
  * Dimensions: Length x Width x Height
  * Operating Weight: Peso operando
  * Empty Weight: Peso vacío
  * Design Pressure: Presión de diseño
  * Design Temperature: Temperatura de diseño
  * Material of Construction: Material
  * Nozzle Quantity: Número de nozzles
  * Drawing Location: DWG donde aparece

Uso:
✅ Equipment procurement
✅ Data sheet generation
✅ Foundation design (weights)
✅ Plot plan development

Nozzle Schedule Report:
- Descripción: Lista de nozzles de equipos principales
- Información Incluida:
  * Equipment Tag: Equipo padre
  * Nozzle Mark: Identificación (N1, N2, N3...)
  * Service: Servicio del nozzle (inlet, outlet, drain, vent)
  * Size: Tamaño nominal
  * Rating: Presión rating
  * Facing: RF, FF, RTJ
  * Orientation: Ángulo y elevación
  * Line Connected: Línea de tubería conectada
  * Elevation: Elevación del nozzle

Uso:
✅ Piping tie-in design
✅ Coordination con equipment vendors
✅ Fabrication of equipment
✅ Installation planning

Equipment Data Sheet Report:
- Descripción: Data sheets detallados de equipos
- Información Incluida (variable por tipo de equipo):

  Pumps:
  - Flow rate (capacity)
  - Head (differential pressure)
  - Power requirement
  - Impeller type
  - Seal type
  - Driver specification

  Heat Exchangers:
  - Heat duty
  - Shell side / Tube side conditions
  - Surface area
  - Tube count and arrangement
  - TEMA type

  Towers/Columns:
  - Height (T-T, T-B)
  - Diameter
  - Number of trays/packing height
  - Internals type
  - Operating pressure/temperature

Uso:
✅ Equipment procurement
✅ Vendor quotations
✅ Technical evaluations
✅ As-built documentation
```

**3. Isometric Reports:**

```
Isometric Drawing List:
- Descripción: Lista de isométricos generados
- Información Incluida:
  * ISO Number: Número de isométrico
  * Line Number: Línea representada
  * Revision: Revisión actual
  * Status: Draft, Issued, As-Built
  * Spool Count: Número de spools
  * Total Weight: Peso total de iso
  * Drawing Path: Ubicación de archivo

Uso:
✅ Control de isométricos
✅ Status tracking
✅ Distribution control
✅ Revision management

Spool List Report:
- Descripción: Lista de spools para fabricación
- Información Incluida:
  * Spool Number: Identificación única
  * ISO Number: Isométrico padre
  * Line Number: Línea
  * Spool Weight: Peso del spool
  * Material: Material principal
  * Priority: Critical path, Normal, etc.
  * Fabrication Shop: Asignación de taller
  * Status: Not Started, In Fabrication, Complete

Uso:
✅ Fabrication planning
✅ Shop loading
✅ Progress tracking
✅ Field delivery scheduling

Cut List Report:
- Descripción: Lista de cortes de tubería para fabricación
- Información Incluida:
  * Spool Number: Spool padre
  * Pipe Size: Tamaño nominal
  * Schedule/Thickness: Espesor de pared
  * Material: Material
  * Length: Longitud de corte
  * Quantity: Cantidad
  * End Preparation: Bevel type

Uso:
✅ Material optimization (nesting)
✅ CNC cutting machines
✅ Waste minimization
✅ Fabrication efficiency

Bolt List Report:
- Descripción: Lista de tornillos requeridos
- Información Incluida:
  * Flange Size: Tamaño de brida
  * Flange Rating: Class de brida
  * Bolt Size: Diámetro de tornillo
  * Bolt Length: Longitud requerida
  * Bolt Material: ASTM grade
  * Quantity per Flange: Número de tornillos
  * Total Quantity: Total en proyecto

Uso:
✅ Bolt procurement
✅ Kitting for installation
✅ Field bolt up planning
✅ Torque planning
```

**4. P&ID Reports:**

```
P&ID Drawing List:
- Descripción: Lista de diagramas P&ID del proyecto
- Información Incluida:
  * Drawing Number: Número de P&ID
  * Drawing Title: Título descriptivo
  * Area/System: Área o sistema representado
  * Revision: Revisión actual
  * Date: Fecha de última revisión
  * Status: Draft, Issued, As-Built
  * Line Count: Número de líneas en P&ID
  * Equipment Count: Número de equipos

Uso:
✅ Control documental
✅ Distribution management
✅ Revision tracking
✅ Completeness verification

P&ID Line List:
- Descripción: Líneas de proceso desde P&IDs
- Información Incluida:
  * Line Number: Número de línea
  * From Equipment: Origen
  * To Equipment: Destino
  * Service: Fluido/gas
  * Specification: Spec de línea
  * Size: Tamaño nominal
  * Insulation Req: Requerimiento de aislamiento
  * Heat Trace Req: Requerimiento de tracing
  * Sync Status: Sincronizado con modelo 3D (YES/NO)

Uso:
✅ Verificación P&ID vs 3D Model
✅ Line list master
✅ Synchronization tracking
✅ Design basis documentation

Instrument List:
- Descripción: Instrumentos desde P&IDs
- Información Incluida:
  * Tag Number: Identificación (FT-101, PT-201, etc.)
  * Instrument Type: Flow, Pressure, Temperature, Level, etc.
  * Service: Medición o control
  * Line Number: Línea asociada
  * Range: Rango de medición
  * Alarm/Interlock: Si tiene alarmas o interlocks
  * Location: Field mounted, Panel, DCS
  * P&ID Reference: P&ID donde aparece

Uso:
✅ Instrument procurement
✅ I&C design basis
✅ Loop checking
✅ Commissioning planning
```

![Reportes Estándar](../imagenes/leccion-29-reportes-estandar.png)

## 2. Generación de Reportes Estándar

### 2.1 Proceso Paso a Paso: Line List Report

**Escenario:** Generar Line List completa del proyecto para revisión de ingeniería.

**Paso 1: Abrir Report Creator**

```
1. En AutoCAD Plant 3D con proyecto abierto:
   - Project tab > Report panel > Reports

2. Diálogo "Reports" se abre
```

**Paso 2: Seleccionar Reporte**

```
1. En lista "Available Reports" (panel izquierdo):
   - Expandir carpeta "Piping Reports"
   - Seleccionar "Line List"

2. Configuración aparece en panel central
```

**Paso 3: Configurar Drawing Selection**

```
1. Tab "Drawing Selection":

   Opciones:

   - All Drawings in Project: Incluir todos los DWGs
     * Use: Para line list completa de proyecto

   - Current Drawing Only: Solo DWG abierto actualmente
     * Use: Para line list de área específica

   - Custom Selection: Seleccionar DWGs específicos
     * Click "Select Drawings"
     * Check boxes para DWGs deseados
     * Example: Solo Area-100.dwg, Area-200.dwg

   Para Line List Completa:
   - Seleccionar: "All Drawings in Project"
```

**Paso 4: Configurar Filters (Filtros)**

```
1. Tab "Filters":

   Filtros Disponibles:

   - Line Number:
     * Filter by prefix: "1-" (solo líneas de Area 100)
     * Filter by service: "P" (solo process lines)

   - Specification:
     * Include: CS150, SS150 (solo estas specs)
     * Exclude: Utility lines

   - Size Range:
     * Minimum: 2" (ignorar small bore)
     * Maximum: 24" (líneas hasta 24")

   - Service:
     * Include: Process fluids
     * Exclude: Steam, Instrument Air (utilities)

   Para Line List Completa (sin filtros):
   - Dejar todos los filtros en blanco o "All"
   - Incluir todas las líneas sin restricción
```

**Paso 5: Configurar Sort (Ordenamiento)**

```
1. Tab "Sort":

   Opciones de Ordenamiento:

   - Primary Sort: Line Number (alfabético)
   - Secondary Sort: Specification
   - Tertiary Sort: Size (descendente - mayores primero)

   Resultado:
   - Líneas ordenadas alfabéticamente por número
   - Dentro de mismo número, por spec
   - Dentro de misma spec, por tamaño (mayores primero)
```

**Paso 6: Configurar Group (Agrupación)**

```
1. Tab "Group":

   Opciones de Agrupación:

   - Group by Area: Agrupar líneas por área de planta
     * Area-100, Area-200, Area-300

   - Group by Specification: Agrupar por spec
     * CS150, SS150, SS300, etc.

   - Group by Service: Agrupar por servicio
     * Process, Utility, Instrumentation

   - No Grouping: Lista plana sin agrupaciones

   Para Line List Típica:
   - Seleccionar: "Group by Area"
   - Facilita revisión por área de responsabilidad
```

**Paso 7: Configurar Output Options**

```
1. Panel "Output Options":

   Format:
   - Seleccionar: "Microsoft Excel (.xlsx)"
     * Formato más versátil para análisis
     * Permite filtrado y pivot tables

   Output Location:
   - Browse a carpeta de proyecto
   - Example: C:\ProjectName\Reports\LineLists\
   - Crear carpeta si no existe

   Filename:
   - Nombre descriptivo con fecha
   - Example: "LineList_Complete_2024-01-15.xlsx"
   - Convención: Tipo_Descripción_Fecha.ext

   Options:
   - Auto-open after generation: CHECK
     * Excel abrirá automáticamente después de generar
```

**Paso 8: Generate Report**

```
1. Verificar configuración:
   - Drawing Selection: All Drawings ✓
   - Filters: None (completo) ✓
   - Sort: By Line Number ✓
   - Group: By Area ✓
   - Output: Excel, ubicación correcta ✓

2. Click "Generate" button

3. Progreso:
   - Progress bar muestra avance
   - "Processing drawings..."
   - "Extracting data..."
   - "Formatting output..."
   - "Complete"

4. Excel abre automáticamente con reporte
```

**Paso 9: Revisión de Resultados**

```
Excel Line List Structure:

Sheet 1: Line List

Columns (typical):
A: Line Number
B: From Equipment
C: From Nozzle
D: To Equipment
E: To Nozzle
F: Service
G: Specification
H: Nominal Diameter
I: Insulation Type
J: Insulation Thickness
K: Heat Tracing
L: Total Length (m)
M: Drawing Numbers
N: Area

Rows:
- Header row (bold, colored)
- Data rows por línea
- Subtotals por grupo (si grouping aplicado)
- Grand total al final

Ejemplo de Datos:

Line Number  | From    | To      | Service        | Spec  | Size | Length
-------------|---------|---------|----------------|-------|------|--------
1-P-101-CS6-6| P-101   | T-201   | Process Liquid | CS150 | 6"   | 45.3 m
1-P-102-CS8-8| T-201   | P-102   | Process Liquid | CS150 | 8"   | 38.7 m
2-C-201-SS6-6| C-201   | V-301   | Corrosive      | SS300 | 6"   | 52.1 m

Sheet 2: Summary (si configurado)
- Total Lines: 487
- Total Length: 12,548 m
- By Specification: CS150 (234), SS150 (156), SS300 (97)
- By Size: 2" (145), 4" (98), 6" (87), 8" (56), 12" (34), 24" (12)
```

**Paso 10: Post-Processing en Excel**

```
Análisis Adicionales:

1. Filtros Automáticos:
   - Data > Filter
   - Cada columna tiene dropdown de filtrado
   - Example: Filtrar solo líneas de 6" y CS150

2. Pivot Tables:
   - Insert > Pivot Table
   - Análisis: Total length por specification y size
   - Útil para material estimations

3. Conditional Formatting:
   - Highlight líneas >24" (requieren atención especial)
   - Color-code por specification
   - Identificar líneas sin aislamiento (si requerido)

4. Charts:
   - Distribution de líneas por tamaño (bar chart)
   - Total length por área (pie chart)
   - Useful para presentaciones

5. Save y Distribute:
   - Save as: LineList_Complete_Rev0_2024-01-15.xlsx
   - Email to: Lead Piping Engineer, Project Manager
   - Upload to: Project server, BIM 360, Vault
```

![Generación Line List](../imagenes/leccion-29-generacion-line-list.png)

### 2.2 Generación de Equipment List

**Escenario:** Generar Equipment List con datos técnicos para procurement.

**Configuración Específica:**

```
Available Reports:
- Seleccionar: "Equipment Reports" > "Equipment List"

Drawing Selection:
- All Drawings in Project

Filters:
- Equipment Type: All (or specific: Pumps, Towers, Exchangers)
- Area: Specific area or All
- Status: Exclude Deleted/Inactive

Sort:
- Primary: Equipment Tag (alphabetic)
- Secondary: Equipment Type

Group:
- Group by: Equipment Type
  * Pumps
  * Towers/Columns
  * Reactors
  * Heat Exchangers
  * Vessels
  * Compressors
  * Etc.

Output:
- Format: Excel
- Filename: "EquipmentList_2024-01-15.xlsx"
```

**Contenido del Reporte:**

```
Excel Sheet: Equipment List

Columns:
A: Equipment Tag (P-101, T-201, R-301)
B: Equipment Type (Centrifugal Pump, Tower, Reactor)
C: Description (Process Pump for Crude Feed)
D: Service (Crude Oil, Process Water, etc.)
E: Area (Area-100, Area-200)
F: Manufacturer (if known)
G: Model (if known)
H: Operating Weight (kg)
I: Empty Weight (kg)
J: Length (mm)
K: Width (mm)
L: Height (mm)
M: Design Pressure (barg)
N: Design Temperature (°C)
O: Material of Construction (CS, SS316, etc.)
P: Nozzle Count
Q: Drawing Location
R: Status (Design, Purchased, Installed)

Additional Columns por Equipment Type:

Pumps:
- Flow Rate (m³/hr)
- Head (m)
- Power (kW)
- Driver Type (Electric Motor, Turbine)

Heat Exchangers:
- Heat Duty (kW)
- Surface Area (m²)
- TEMA Type (BEM, AES, etc.)

Towers:
- T-T Height (m)
- Diameter (m)
- Number of Trays
- Internals Type

Data Sheet Reference:
- Link to equipment data sheet (if available)
```

**Aplicaciones del Equipment List:**

```
Procurement:
✅ Lista maestra para requisiciones
✅ Vendor quotations
✅ Budget estimates
✅ Long-lead item identification

Structural:
✅ Equipment weights para foundation design
✅ Load analysis por área
✅ Crane capacity requirements
✅ Platform design

Project Control:
✅ Equipment status tracking
✅ Delivery schedule
✅ Installation sequence
✅ Commissioning planning

Operations:
✅ Asset register
✅ Maintenance planning
✅ Spare parts identification
✅ Operating manuals reference
```

![Equipment List](../imagenes/leccion-29-equipment-list.png)

### 2.3 Generación de Bill of Materials (BOM)

**Escenario:** Generar BOM completo de materiales de piping para procurement.

**Configuración Específica:**

```
Available Reports:
- Seleccionar: "Piping Reports" > "Piping Material Report" o "BOM"

Drawing Selection:
- All Drawings in Project (o área específica si BOM parcial)

Filters:
- Specification: Seleccionar specs a incluir (CS150, SS150, etc.)
- Size Range: All sizes
- Material Type: All (or specific: Valves only, Fittings only)

Sort:
- Primary: Item Description
- Secondary: Size (ascending)

Group:
- Group by: Material Category
  * Pipes
  * Fittings
  * Flanges
  * Valves
  * Bolts & Nuts
  * Gaskets
  * Specialty Items

Output:
- Format: Excel
- Filename: "BOM_PipingMaterials_2024-01-15.xlsx"
- Include: Unit weights, Total weights
```

**Contenido del Reporte BOM:**

```
Excel Sheet: Bill of Materials

Columns:
A: Item Number (sequential)
B: Item Description (Pipe, Seamless, ASTM A106 Gr.B)
C: Part Number (from catalog)
D: Size (Nominal Diameter)
E: Specification (CS150, SS300, etc.)
F: Schedule/Thickness (SCH40, SCH80, etc.)
G: Material (Carbon Steel, SS316, etc.)
H: Unit of Measure (M, EA, KG)
I: Quantity Required
J: Unit Weight (kg)
K: Total Weight (kg)
L: Standard/Reference (ASME B16.9, etc.)
M: Notes/Comments

Ejemplo de Entradas:

PIPES:
Item | Description                          | Part#    | Size | Spec  | Sch  | UOM | Qty   | Total Weight
-----|--------------------------------------|----------|------|-------|------|-----|-------|-------------
001  | Pipe, Seamless, ASTM A106 Gr.B      | P-CS-6   | 6"   | CS150 | 40   | M   | 245.3 | 1,847 kg
002  | Pipe, Seamless, ASTM A106 Gr.B      | P-CS-8   | 8"   | CS150 | 40   | M   | 187.6 | 1,932 kg
003  | Pipe, Seamless, ASTM A312 TP316     | P-SS-6   | 6"   | SS300 | 40   | M   | 98.4  | 856 kg

FITTINGS:
Item | Description                          | Part#    | Size | Spec  |      | UOM | Qty   | Total Weight
-----|--------------------------------------|----------|------|-------|------|-----|-------|-------------
101  | Elbow 90°, LR, BW, ASME B16.9       | E90-CS-6 | 6"   | CS150 | 40   | EA  | 87    | 348 kg
102  | Elbow 90°, LR, BW, ASME B16.9       | E90-CS-8 | 8"   | CS150 | 40   | EA  | 56    | 336 kg
103  | Tee, Equal, BW, ASME B16.9          | T-CS-6   | 6"   | CS150 | 40   | EA  | 34    | 204 kg

FLANGES:
Item | Description                          | Part#    | Size | Class |      | UOM | Qty   | Total Weight
-----|--------------------------------------|----------|------|-------|------|-----|-------|-------------
201  | Flange, WN, RF, ASME B16.5          | F-CS-6   | 6"   | 150   |      | EA  | 176   | 1,144 kg
202  | Flange, WN, RF, ASME B16.5          | F-CS-8   | 8"   | 150   |      | EA  | 112   | 1,008 kg
203  | Flange, Blind, RF, ASME B16.5       | FB-CS-6  | 6"   | 150   |      | EA  | 24    | 120 kg

VALVES:
Item | Description                          | Part#    | Size | Class | Type | UOM | Qty   | Total Weight
-----|--------------------------------------|----------|------|-------|------|-----|-------|-------------
301  | Valve, Gate, OS&Y, Flanged, API 600 | GV-CS-6  | 6"   | 150   | Gate | EA  | 45    | 1,125 kg
302  | Valve, Ball, 2-Piece, Flanged       | BV-CS-4  | 4"   | 150   | Ball | EA  | 67    | 536 kg
303  | Valve, Check, Swing, Flanged        | CV-CS-6  | 6"   | 150   | Check| EA  | 23    | 368 kg

BOLTS & NUTS:
Item | Description                          | Part#    | Size | Length| Qty  | UOM | Total Qty
-----|--------------------------------------|----------|------|-------|------|-----|----------
401  | Bolt, Hex Head, ASTM A193 Gr.B7     | B-M20    | M20  | 75mm  | 8    | SET | 2,816
402  | Nut, Heavy Hex, ASTM A194 Gr.2H     | N-M20    | M20  | -     | 8    | SET | 2,816

GASKETS:
Item | Description                          | Part#    | Size | Rating| Material | UOM | Qty
-----|--------------------------------------|----------|------|-------|----------|-----|-----
501  | Gasket, Spiral Wound, ASME B16.20   | G-6-150  | 6"   | 150   | 316+Graph| EA  | 176
502  | Gasket, Spiral Wound, ASME B16.20   | G-8-150  | 8"   | 150   | 316+Graph| EA  | 112

Summary Sheet:
- Total Items: 487 line items
- Total Weight: 45,678 kg (45.7 tons)
- By Category:
  * Pipes: 15,234 kg (33%)
  * Fittings: 8,956 kg (20%)
  * Flanges: 9,234 kg (20%)
  * Valves: 11,245 kg (25%)
  * Others: 1,009 kg (2%)
```

**Post-Processing para Procurement:**

```
Excel Enhancements:

1. Cost Estimation:
   - Agregar columna "Unit Cost"
   - Agregar columna "Total Cost" = Qty × Unit Cost
   - Calcular total por categoría
   - Grand total de proyecto

2. Vendor Assignment:
   - Columna "Preferred Vendor"
   - Agrupar items por vendor para RFQs
   - Consolidar requisiciones

3. Delivery Schedule:
   - Columna "Required On Site Date"
   - Columna "Lead Time"
   - Calcular "Order By Date" = Required Date - Lead Time
   - Color-code: Red (long-lead), Yellow (medium), Green (short)

4. Commodity Codes:
   - Columna "Commodity Code"
   - Agrupación para procurement tracking
   - Example: P-CS (Carbon Steel Pipe), V-GT (Gate Valves)

5. Material Requisitions (MRs):
   - Dividir BOM en MRs por commodity
   - MR-001: Carbon Steel Pipe (all sizes)
   - MR-002: Stainless Steel Pipe (all sizes)
   - MR-003: Carbon Steel Valves (all types)
   - Cada MR = separate sheet o file

6. Status Tracking:
   - Columna "Status": Not Ordered, Ordered, Received, Installed
   - Columna "PO Number": Purchase Order number
   - Columna "Vendor": Assigned vendor
   - Columna "ETA": Estimated Time of Arrival
   - Dashboard con % complete por categoría
```

**Aplicaciones del BOM:**

```
Procurement:
✅ Material requisitions (MRs)
✅ Request for Quotations (RFQs)
✅ Purchase orders (POs)
✅ Budget vs actual tracking
✅ Vendor negotiations (bulk discounts)

Warehouse:
✅ Receiving documentation
✅ Inventory control
✅ Kitting for installation
✅ Shortage identification

Fabrication:
✅ Material availability verification
✅ Shop loading
✅ Cut optimization
✅ Scrap tracking

Project Control:
✅ Cost tracking
✅ Procurement progress
✅ Critical material identification
✅ Risk analysis (long-lead items)
```

![Bill of Materials](../imagenes/leccion-29-bom.png)

## 3. Personalización de Reportes

### 3.1 Modificación de Plantillas Existentes

**Edición de Report Templates:**

Las plantillas de reportes (.rpt files) son archivos XML editables.

**Ubicación de Plantillas:**

```
Default Location:
C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Reports\

Estructura de Carpetas:
Reports\
├── Piping\
│   ├── LineList.rpt
│   ├── ValveList.rpt
│   ├── PipingBOM.rpt
│   └── SupportList.rpt
├── Equipment\
│   ├── EquipmentList.rpt
│   ├── NozzleSchedule.rpt
│   └── DataSheet.rpt
├── Isometric\
│   ├── IsoList.rpt
│   ├── SpoolList.rpt
│   └── CutList.rpt
└── Custom\
    └── (custom templates creados por usuario)
```

**Backup de Plantillas:**

```
IMPORTANTE: Siempre hacer backup antes de editar

1. Copiar plantilla original:
   - Copy: LineList.rpt
   - Paste as: LineList_ORIGINAL.rpt

2. Editar copia:
   - Rename: LineList.rpt → LineList_Custom.rpt
   - Editar LineList_Custom.rpt

3. Si hay error, restaurar desde backup
```

**Edición de Plantilla (Ejemplo: Line List):**

```
1. Abrir plantilla en editor XML:
   - Notepad++ (recomendado)
   - Visual Studio Code
   - O: Notepad (básico)

2. Estructura XML de Plantilla:

<?xml version="1.0" encoding="utf-8"?>
<Report>
  <ReportHeader>
    <ReportName>Line List</ReportName>
    <ReportDescription>Complete list of piping lines</ReportDescription>
    <Version>1.0</Version>
  </ReportHeader>

  <DataSource>
    <Table>PnPLine</Table>  <!-- Tabla de base de datos -->
    <Join>
      <Table>PnPLineSegment</Table>
      <Key>LineId</Key>
    </Join>
  </DataSource>

  <Columns>
    <Column>
      <Name>LineNumber</Name>
      <DisplayName>Line Number</DisplayName>
      <DataType>String</DataType>
      <Width>150</Width>
      <Visible>True</Visible>
      <Sort>Ascending</Sort>
    </Column>

    <Column>
      <Name>Service</Name>
      <DisplayName>Service</DisplayName>
      <DataType>String</DataType>
      <Width>200</Width>
      <Visible>True</Visible>
    </Column>

    <Column>
      <Name>Spec</Name>
      <DisplayName>Specification</DisplayName>
      <DataType>String</DataType>
      <Width>100</Width>
      <Visible>True</Visible>
    </Column>

    <Column>
      <Name>NominalDiameter</Name>
      <DisplayName>Size</DisplayName>
      <DataType>String</DataType>
      <Width>80</Width>
      <Visible>True</Visible>
      <Format>##" <!-- Display como 6" en lugar de 6 -->
    </Column>

    <Column>
      <Name>TotalLength</Name>
      <DisplayName>Total Length (m)</DisplayName>
      <DataType>Double</DataType>
      <Width>120</Width>
      <Visible>True</Visible>
      <Format>###.## m</Format>
      <Aggregate>Sum</Aggregate>  <!-- Total al final -->
    </Column>

  </Columns>

  <Filters>
    <Filter>
      <Name>AreaFilter</Name>
      <Column>Area</Column>
      <Operator>Contains</Operator>
      <Value></Value>  <!-- Usuario puede ingresar valor -->
      <Enabled>True</Enabled>
    </Filter>
  </Filters>

  <Groups>
    <Group>
      <Name>AreaGroup</Name>
      <Column>Area</Column>
      <ShowSubtotals>True</ShowSubtotals>
    </Group>
  </Groups>

  <OutputFormat>
    <Excel>
      <SheetName>Line List</SheetName>
      <HeaderColor>#0066CC</HeaderColor>
      <HeaderFontColor>#FFFFFF</HeaderFontColor>
      <AlternateRowColor>#F0F0F0</AlternateRowColor>
      <ShowGridlines>True</ShowGridlines>
    </Excel>
  </OutputFormat>

</Report>
```

**Modificaciones Comunes:**

```
1. Agregar Nueva Columna:

Ejemplo: Agregar "Insulation Specification"

<Column>
  <Name>InsulationSpec</Name>
  <DisplayName>Insulation Specification</DisplayName>
  <DataType>String</DataType>
  <Width>150</Width>
  <Visible>True</Visible>
</Column>

- Insertar entre otras columnas en sección <Columns>
- Name debe coincidir con property name en base de datos
- DisplayName es el header que aparecerá en Excel

2. Cambiar Orden de Columnas:

- Reordenar elementos <Column> en XML
- Primer <Column> = primera columna en reporte
- Útil para priorizar información importante

3. Ocultar Columnas:

<Column>
  <Name>InternalID</Name>
  <Visible>False</Visible>  <!-- No aparece en reporte -->
</Column>

- Columna existe en template pero no se muestra
- Útil para IDs internos no relevantes para usuario

4. Cambiar Formato de Números:

<Column>
  <Name>TotalLength</Name>
  <Format>###,##0.00 m</Format>  <!-- Con separadores de miles -->
</Column>

- ### = dígitos opcionales
- 0 = dígitos obligatorios
- .## = decimales
- , = separador de miles

5. Agregar Aggregates (Totales):

<Column>
  <Name>TotalWeight</Name>
  <Aggregate>Sum</Aggregate>  <!-- Suma total al final -->
</Column>

Opciones:
- Sum: Suma total
- Average: Promedio
- Count: Conteo
- Min/Max: Mínimo/Máximo

6. Modificar Filtros:

<Filter>
  <Name>SizeFilter</Name>
  <Column>NominalDiameter</Column>
  <Operator>GreaterThan</Operator>
  <Value>6</Value>  <!-- Solo líneas > 6" -->
  <Enabled>True</Enabled>
</Filter>

Operators:
- Equals, NotEquals
- GreaterThan, LessThan
- Contains, StartsWith, EndsWith
- In, NotIn (lista de valores)

7. Modificar Grouping:

<Groups>
  <Group>
    <Name>SpecGroup</Name>
    <Column>Spec</Column>
    <ShowSubtotals>True</ShowSubtotals>
    <SubtotalColumns>
      <Column>TotalLength</Column>
      <Column>TotalWeight</Column>
    </SubtotalColumns>
  </Group>
</Groups>

- Agrupar por specification en lugar de área
- Mostrar subtotales de length y weight por spec

8. Cambiar Formato de Salida Excel:

<OutputFormat>
  <Excel>
    <HeaderColor>#1F4E79</HeaderColor>  <!-- Azul oscuro profesional -->
    <HeaderFontColor>#FFFFFF</HeaderFontColor>
    <HeaderFontSize>12</HeaderFontSize>
    <HeaderBold>True</HeaderBold>
    <FreezeHeader>True</FreezeHeader>  <!-- Congelar fila de header -->
    <AutoFilter>True</AutoFilter>  <!-- Agregar filtros automáticos -->
    <AlternateRowColor>#E7E6E6</AlternateRowColor>  <!-- Gris claro -->
  </Excel>
</OutputFormat>
```

**Guardar y Usar Template Personalizado:**

```
1. Guardar Template:
   - Save As: LineList_Custom.rpt
   - Location: C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Reports\Custom\

2. Actualizar Report Creator:
   - Cerrar y reabrir Plant 3D
   - O: En Report Creator, click "Refresh Templates"

3. Usar Template:
   - Report Creator > Available Reports
   - Carpeta "Custom" ahora muestra "Line List Custom"
   - Seleccionar y generar como reporte estándar
```

![Personalización de Plantillas](../imagenes/leccion-29-personalizacion-plantillas.png)

### 3.2 Creación de Reportes Completamente Personalizados

**Escenario:** Crear reporte custom "Valve Procurement List" con información específica para procurement.

**Paso 1: Crear Nueva Plantilla**

```
1. Copiar plantilla base:
   - Copy: ValveList.rpt
   - Rename: ValveProcurementList.rpt

2. Abrir en editor XML
```

**Paso 2: Definir DataSource (Fuente de Datos)**

```
<DataSource>
  <Table>PnPValve</Table>  <!-- Tabla principal: Válvulas -->

  <Joins>
    <!-- Join con tabla de líneas para obtener line data -->
    <Join>
      <Table>PnPLine</Table>
      <Key>LineId</Key>
      <Type>Inner</Type>
    </Join>

    <!-- Join con catálogo para obtener part numbers -->
    <Join>
      <Table>SpecContent</Table>
      <Key>PartId</Key>
      <Type>Left</Type>  <!-- Left join: mantener válvulas aunque no tengan part# -->
    </Join>
  </Joins>

  <Conditions>
    <!-- Condición: Solo válvulas activas (no deleted) -->
    <Condition>
      <Column>Status</Column>
      <Operator>NotEquals</Operator>
      <Value>Deleted</Value>
    </Condition>
  </Conditions>

</DataSource>

Explicación:
- Tabla principal: PnPValve (todas las válvulas del proyecto)
- Join con PnPLine: Para obtener line number, service, spec
- Join con SpecContent: Para obtener part numbers de catálogo
- Condition: Excluir válvulas eliminadas
```

**Paso 3: Definir Columnas Específicas para Procurement**

```
<Columns>

  <!-- Identificación -->
  <Column>
    <Name>TagNumber</Name>
    <DisplayName>Tag Number</DisplayName>
    <DataType>String</DataType>
    <Width>120</Width>
    <Sort>Ascending</Sort>
  </Column>

  <Column>
    <Name>LineNumber</Name>
    <DisplayName>Line Number</DisplayName>
    <DataType>String</DataType>
    <Source>PnPLine.LineNumber</Source>  <!-- De tabla joined -->
    <Width>150</Width>
  </Column>

  <!-- Procurement Data -->
  <Column>
    <Name>PartNumber</Name>
    <DisplayName>Manufacturer Part Number</DisplayName>
    <DataType>String</DataType>
    <Source>SpecContent.PartNumber</Source>
    <Width>180</Width>
  </Column>

  <Column>
    <Name>ShortDescription</Name>
    <DisplayName>Description</DisplayName>
    <DataType>String</DataType>
    <Source>SpecContent.Description</Source>
    <Width>250</Width>
  </Column>

  <!-- Technical Specs -->
  <Column>
    <Name>NominalDiameter</Name>
    <DisplayName>Size</DisplayName>
    <DataType>String</DataType>
    <Width>80</Width>
    <Format>##"</Format>
  </Column>

  <Column>
    <Name>Rating</Name>
    <DisplayName>Class/Rating</DisplayName>
    <DataType>String</DataType>
    <Width>100</Width>
  </Column>

  <Column>
    <Name>EndConnection</Name>
    <DisplayName>End Connection</DisplayName>
    <DataType>String</DataType>
    <Width>120</Width>
  </Column>

  <Column>
    <Name>BodyMaterial</Name>
    <DisplayName>Body Material</DisplayName>
    <DataType>String</DataType>
    <Width>150</Width>
  </Column>

  <Column>
    <Name>OperatorType</Name>
    <DisplayName>Operator</DisplayName>
    <DataType>String</DataType>
    <Width>120</Width>
  </Column>

  <!-- Quantity & Commodity -->
  <Column>
    <Name>Quantity</Name>
    <DisplayName>Quantity</DisplayName>
    <DataType>Integer</DataType>
    <Width>80</Width>
    <DefaultValue>1</DefaultValue>
    <Aggregate>Sum</Aggregate>  <!-- Total quantity -->
  </Column>

  <Column>
    <Name>CommodityCode</Name>
    <DisplayName>Commodity Code</DisplayName>
    <DataType>String</DataType>
    <Width>120</Width>
    <Calculated>True</Calculated>
    <Formula>
      <!-- Formula para generar commodity code -->
      CONCAT(ValveType, "-", Left(BodyMaterial, 2), "-", NominalDiameter)
      <!-- Ejemplo resultado: "GT-CS-6" = Gate Valve, Carbon Steel, 6" -->
    </Formula>
  </Column>

  <!-- Procurement Tracking -->
  <Column>
    <Name>RequiredOnSite</Name>
    <DisplayName>Required On Site</DisplayName>
    <DataType>Date</DataType>
    <Width>120</Width>
    <Format>yyyy-MM-dd</Format>
  </Column>

  <Column>
    <Name>LeadTime</Name>
    <DisplayName>Lead Time (weeks)</DisplayName>
    <DataType>Integer</DataType>
    <Width>100</Width>
  </Column>

  <Column>
    <Name>PreferredVendor</Name>
    <DisplayName>Preferred Vendor</DisplayName>
    <DataType>String</DataType>
    <Width>180</Width>
  </Column>

  <Column>
    <Name>UnitCostEstimate</Name>
    <DisplayName>Unit Cost (USD)</DisplayName>
    <DataType>Double</DataType>
    <Width>120</Width>
    <Format>$ #,##0.00</Format>
  </Column>

  <Column>
    <Name>TotalCostEstimate</Name>
    <DisplayName>Total Cost (USD)</DisplayName>
    <DataType>Double</DataType>
    <Width>140</Width>
    <Calculated>True</Calculated>
    <Formula>Quantity * UnitCostEstimate</Formula>
    <Format>$ #,##0.00</Format>
    <Aggregate>Sum</Aggregate>  <!-- Grand total cost -->
  </Column>

  <!-- Location Reference -->
  <Column>
    <Name>Area</Name>
    <DisplayName>Plant Area</DisplayName>
    <DataType>String</DataType>
    <Width>100</Width>
  </Column>

  <Column>
    <Name>DrawingNumber</Name>
    <DisplayName>Drawing Reference</DisplayName>
    <DataType>String</DataType>
    <Width>150</Width>
  </Column>

</Columns>
```

**Paso 4: Configurar Grouping para Procurement**

```
<Groups>

  <!-- Group 1: Por Commodity Code -->
  <Group>
    <Name>CommodityGroup</Name>
    <Column>CommodityCode</Column>
    <ShowSubtotals>True</ShowSubtotals>
    <SubtotalColumns>
      <Column>Quantity</Column>
      <Column>TotalCostEstimate</Column>
    </SubtotalColumns>
    <GroupHeader>
      <Text>Commodity: {CommodityCode}</Text>
      <FontBold>True</FontBold>
      <BackgroundColor>#D0CECE</BackgroundColor>
    </GroupHeader>
  </Group>

  <!-- Group 2: Dentro de commodity, por tamaño -->
  <Group>
    <Name>SizeGroup</Name>
    <Column>NominalDiameter</Column>
    <ParentGroup>CommodityGroup</ParentGroup>
    <ShowSubtotals>True</ShowSubtotals>
  </Group>

</Groups>

Resultado:
- Válvulas agrupadas primero por commodity (ej: "GT-CS-6" = Gate, CS, 6")
- Dentro de cada commodity, sub-agrupadas por tamaño
- Subtotales de quantity y cost por grupo
- Fácil crear material requisitions por commodity
```

**Paso 5: Configurar Filtros Avanzados**

```
<Filters>

  <Filter>
    <Name>ValveTypeFilter</Name>
    <DisplayName>Valve Type</DisplayName>
    <Column>ValveType</Column>
    <Operator>In</Operator>
    <Values>
      <Value>Gate</Value>
      <Value>Globe</Value>
      <Value>Ball</Value>
      <Value>Check</Value>
      <Value>Butterfly</Value>
    </Values>
    <AllowMultiple>True</AllowMultiple>  <!-- Usuario puede seleccionar múltiples -->
    <Enabled>True</Enabled>
  </Filter>

  <Filter>
    <Name>SizeRangeFilter</Name>
    <DisplayName>Size Range</DisplayName>
    <Column>NominalDiameter</Column>
    <Operator>Between</Operator>
    <MinValue>2</MinValue>
    <MaxValue>24</MaxValue>
    <Enabled>False</Enabled>  <!-- Opcional, usuario puede activar -->
  </Filter>

  <Filter>
    <Name>AreaFilter</Name>
    <DisplayName>Plant Area</DisplayName>
    <Column>Area</Column>
    <Operator>Contains</Operator>
    <Value></Value>  <!-- Usuario ingresa -->
    <Enabled>True</Enabled>
  </Filter>

  <Filter>
    <Name>CriticalFilter</Name>
    <DisplayName>Critical Items Only</DisplayName>
    <Column>Priority</Column>
    <Operator>Equals</Operator>
    <Value>Critical</Value>
    <Enabled>False</Enabled>  <!-- Checkbox en UI -->
  </Filter>

</Filters>
```

**Paso 6: Configurar Formato de Salida Excel**

```
<OutputFormat>
  <Excel>
    <SheetName>Valve Procurement List</SheetName>

    <!-- Header Styling -->
    <HeaderRow>
      <BackgroundColor>#1F4E79</BackgroundColor>  <!-- Azul corporativo -->
      <FontColor>#FFFFFF</FontColor>
      <FontSize>11</FontSize>
      <FontBold>True</FontBold>
      <Height>30</Height>
      <VerticalAlign>Center</VerticalAlign>
    </HeaderRow>

    <!-- Data Rows -->
    <DataRows>
      <AlternateRowColor>#F2F2F2</AlternateRowColor>
      <FontSize>10</FontSize>
      <Height>20</Height>
    </DataRows>

    <!-- Group Headers -->
    <GroupHeaders>
      <BackgroundColor>#D0CECE</BackgroundColor>
      <FontBold>True</FontBold>
      <FontSize>11</FontSize>
    </GroupHeaders>

    <!-- Subtotal Rows -->
    <SubtotalRows>
      <BackgroundColor>#E7E6E6</BackgroundColor>
      <FontBold>True</FontBold>
      <FontItalic>True</FontItalic>
    </SubtotalRows>

    <!-- Grand Total Row -->
    <GrandTotalRow>
      <BackgroundColor>#1F4E79</BackgroundColor>
      <FontColor>#FFFFFF</FontColor>
      <FontBold>True</FontBold>
      <FontSize>11</FontSize>
    </GrandTotalRow>

    <!-- Features -->
    <FreezeTopRow>True</FreezeTopRow>
    <AutoFilter>True</AutoFilter>
    <AutoFitColumns>True</AutoFitColumns>
    <ShowGridlines>True</ShowGridlines>
    <PrintOrientation>Landscape</PrintOrientation>
    <RepeatHeaderOnEachPage>True</RepeatHeaderOnEachPage>

    <!-- Conditional Formatting -->
    <ConditionalFormatting>
      <Rule>
        <Column>TotalCostEstimate</Column>
        <Condition>GreaterThan</Condition>
        <Value>10000</Value>
        <Format>
          <BackgroundColor>#FFC7CE</BackgroundColor>  <!-- Rojo claro -->
          <FontColor>#9C0006</FontColor>  <!-- Rojo oscuro -->
          <FontBold>True</FontBold>
        </Format>
        <Description>Highlight high-cost items</Description>
      </Rule>
    </ConditionalFormatting>

  </Excel>
</OutputFormat>
```

**Paso 7: Agregar Summary Sheet**

```
<SummarySheet>
  <Enabled>True</Enabled>
  <SheetName>Procurement Summary</SheetName>

  <Sections>

    <Section>
      <Title>Project Information</Title>
      <Items>
        <Item>
          <Label>Project Name:</Label>
          <Value>{ProjectName}</Value>  <!-- Macro -->
        </Item>
        <Item>
          <Label>Report Date:</Label>
          <Value>{CurrentDate}</Value>
        </Item>
        <Item>
          <Label>Generated By:</Label>
          <Value>{UserName}</Value>
        </Item>
      </Items>
    </Section>

    <Section>
      <Title>Valve Statistics</Title>
      <Items>
        <Item>
          <Label>Total Valves:</Label>
          <Value>{Count(TagNumber)}</Value>
        </Item>
        <Item>
          <Label>Total Estimated Cost:</Label>
          <Value>{Sum(TotalCostEstimate)}</Value>
          <Format>$ #,##0.00</Format>
        </Item>
        <Item>
          <Label>Average Unit Cost:</Label>
          <Value>{Average(UnitCostEstimate)}</Value>
          <Format>$ #,##0.00</Format>
        </Item>
      </Items>
    </Section>

    <Section>
      <Title>Breakdown by Type</Title>
      <PivotTable>
        <RowField>ValveType</RowField>
        <DataField>Quantity</DataField>
        <Aggregate>Sum</Aggregate>
        <Chart>
          <Type>Pie</Type>
          <Title>Valve Distribution by Type</Title>
        </Chart>
      </PivotTable>
    </Section>

    <Section>
      <Title>Breakdown by Size</Title>
      <PivotTable>
        <RowField>NominalDiameter</RowField>
        <DataField>Quantity</DataField>
        <Aggregate>Sum</Aggregate>
        <Chart>
          <Type>Column</Type>
          <Title>Valve Distribution by Size</Title>
        </Chart>
      </PivotTable>
    </Section>

    <Section>
      <Title>Top 10 Most Expensive Items</Title>
      <TopN>
        <N>10</N>
        <SortBy>TotalCostEstimate</SortBy>
        <SortOrder>Descending</SortOrder>
        <Columns>
          <Column>TagNumber</Column>
          <Column>Description</Column>
          <Column>Size</Column>
          <Column>TotalCostEstimate</Column>
        </Columns>
      </TopN>
    </Section>

  </Sections>

</SummarySheet>
```

**Paso 8: Guardar y Registrar Template**

```
1. Guardar archivo:
   - Save As: ValveProcurementList.rpt
   - Location: C:\ProgramData\Autodesk\AutoCAD Plant 3D 2026\Reports\Custom\

2. Validar XML:
   - Verificar sintaxis XML (editor XML con validation)
   - Cerrar todos los tags correctamente
   - Verificar nombres de columnas contra base de datos

3. Registrar en Report Creator:
   - Cerrar Plant 3D
   - Reabrir Plant 3D
   - Report Creator > Refresh Templates
   - "Valve Procurement List" aparece en Custom Reports

4. Test del Report:
   - Generar con proyecto pequeño primero
   - Verificar columnas, datos, formatos
   - Ajustar template si necesario
   - Re-test hasta perfeccionar
```

![Reporte Personalizado](../imagenes/leccion-29-reporte-personalizado.png)

## 4. Integración con Excel y Análisis Avanzado

### 4.1 Templates de Excel para Reportes

**Concepto:** Utilizar plantilla de Excel pre-formateada donde Plant 3D inserta datos.

**Creación de Excel Template:**

```
Paso 1: Crear Plantilla Base en Excel

1. Abrir Excel, crear nuevo workbook

2. Sheet 1: "Cover Page"
   - Logo de compañía
   - Título: "Valve Procurement List"
   - Project name: [placeholder]
   - Date: [placeholder]
   - Prepared by: [placeholder]

3. Sheet 2: "Valve List"
   - Row 1: Headers (formateo profesional)
     * Background: Azul corporativo (#1F4E79)
     * Font: Blanco, Bold, 11pt
     * Columns: Tag, Line, Description, Size, Class, Qty, Unit Cost, Total Cost

   - Rows 2-1000: Data range (donde Plant 3D insertará datos)
     * Alternar color de filas: Blanco / Gris claro
     * Borders: Gridlines sutiles

   - Fórmulas preparadas:
     * Column H (Total Cost): =F2*G2 (Qty * Unit Cost)
     * Row 1001: Grand Totals
       - =SUM(F2:F1000) para Qty
       - =SUM(H2:H1000) para Total Cost

4. Sheet 3: "Summary"
   - Pivot tables (rango de datos: Valve List sheet)
   - Charts (pie chart de distribución por tipo)
   - KPIs (total valves, total cost, average cost)

5. Sheet 4: "Procurement Tracking"
   - Columnas adicionales para tracking:
     * PO Number
     * Vendor Assigned
     * Order Date
     * Expected Delivery
     * Status (Not Ordered / Ordered / Received)
   - Conditional formatting:
     * Green: Received
     * Yellow: Ordered
     * Red: Not Ordered

Paso 2: Definir Named Ranges

1. Seleccionar data range (A2:H1000)
2. Formulas tab > Define Name
3. Name: "ValveDataRange"
4. Scope: Workbook

Purpose: Plant 3D puede referenciar named range para insertar datos

Paso 3: Guardar como Template

1. Save As:
   - File type: Excel Template (.xltx)
   - Location: C:\ProjectName\Templates\
   - Filename: ValveProcurementList_Template.xltx

2. Proteger sheets (opcional):
   - Review tab > Protect Sheet
   - Permitir solo edición de data range
   - Proteger formatting, fórmulas
```

**Configurar Plant 3D para Usar Template:**

```
En archivo de configuración de reporte (.rpt):

<OutputFormat>
  <Excel>
    <UseTemplate>True</UseTemplate>
    <TemplatePath>C:\ProjectName\Templates\ValveProcurementList_Template.xltx</TemplatePath>
    <TemplateSheet>Valve List</TemplateSheet>
    <DataStartCell>A2</DataStartCell>  <!-- Primera celda de datos -->
    <PreserveSummarySheets>True</PreserveSummarySheets>  <!-- No sobrescribir Summary sheet -->
  </Excel>
</OutputFormat>

Resultado:
- Plant 3D genera reporte
- Abre template
- Inserta datos en named range o starting cell
- Fórmulas en template calculan automáticamente
- Pivot tables actualizan
- Charts actualizan
- Formato profesional mantenido
```

![Excel Templates](../imagenes/leccion-29-excel-templates.png)

### 4.2 Análisis Avanzado con Power Query y Power Pivot

**Power Query:** Para transformar y combinar datos de múltiples reportes.

**Escenario:** Combinar Line List, Valve List y Equipment List para análisis integrado.

```
Paso 1: Importar Reportes a Power Query

1. En Excel:
   - Data tab > Get Data > From File > From Workbook
   - Seleccionar: LineList_2024-01-15.xlsx
   - Power Query Editor se abre

2. Transform Data:
   - Remove empty rows
   - Promote first row to headers
   - Change data types (Text, Number, Date)
   - Remove unnecessary columns

3. Load to Excel:
   - Close & Load
   - Data aparece en nueva sheet

4. Repetir para Valve List y Equipment List

Paso 2: Crear Relaciones entre Tablas

1. Data tab > Relationships
2. New Relationship:
   - Table 1: ValveList, Column: LineNumber
   - Table 2: LineList, Column: LineNumber
   - Relationship Type: Many to One

3. Resultado: Valve data puede relacionarse con Line data

Paso 3: Crear Modelo de Datos

1. Insert tab > PivotTable > Use Data Model
2. Add all tables to model:
   - LineList
   - ValveList
   - EquipmentList
3. Define relationships entre tablas

Paso 4: Análisis con Power Pivot

1. Power Pivot tab > Manage Data Model
2. Crear Calculated Columns:

   En tabla ValveList:
   TotalValveCost = [Quantity] * [UnitCost]

   En tabla LineList:
   TotalLineWeight = [TotalLength] * [WeightPerMeter]

3. Crear Measures (métricas):

   Total Project Cost = SUM(ValveList[TotalValveCost]) + SUM(EquipmentList[TotalCost])

   Average Line Size = AVERAGE(LineList[NominalDiameter])

   Valve Count by Service =
     CALCULATE(
       COUNT(ValveList[TagNumber]),
       FILTER(LineList, LineList[Service] = "Process")
     )

4. Crear PivotTables avanzadas:
   - Rows: Area, Service, Spec
   - Values: Sum of Total Cost, Count of Lines, Average Size
   - Filters: Equipment Type, Valve Type
```

**Dashboard de Proyecto:**

```
Crear Dashboard con múltiples visualizaciones:

Sheet: "Project Dashboard"

Sección 1: KPIs (Top)
┌─────────────────────────────────────────────────────────┐
│  Total Lines: 487    Total Valves: 1,234               │
│  Total Equipment: 87  Total Cost: $12.5M               │
│  % Complete: 78%      Issues: 12 Open                  │
└─────────────────────────────────────────────────────────┘

Sección 2: Charts (Middle)
┌────────────────────────┬───────────────────────────────┐
│  Lines by Spec         │  Cost Distribution            │
│  (Pie Chart)           │  (Treemap)                    │
│  - CS150: 45%          │  - Piping: 40%                │
│  - SS150: 30%          │  - Equipment: 35%             │
│  - SS300: 15%          │  - Valves: 15%                │
│  - Others: 10%         │  - Others: 10%                │
└────────────────────────┴───────────────────────────────┘

┌────────────────────────┬───────────────────────────────┐
│  Progress by Area      │  Critical Items               │
│  (Stacked Bar Chart)   │  (Table)                      │
│  Area-100: █████ 85%   │  1. Reactor R-101: $2.5M      │
│  Area-200: ████  70%   │  2. Tower T-201: $1.8M        │
│  Area-300: ███   60%   │  3. Compressor C-301: $1.2M   │
└────────────────────────┴───────────────────────────────┘

Sección 3: Filters (Right Sidebar)
┌─────────────────────┐
│  Slicers:           │
│  □ Area-100         │
│  □ Area-200         │
│  □ Area-300         │
│                     │
│  □ Process          │
│  □ Utility          │
│  □ Instrumentation  │
│                     │
│  □ CS150            │
│  □ SS150            │
│  □ SS300            │
└─────────────────────┘

Interactividad:
- Click en slicer actualiza todos los charts
- Drill-down en charts para detalle
- Export a PDF para distribución
```

![Power Query y Dashboard](../imagenes/leccion-29-power-query-dashboard.png)

## 5. Automatización de Reportes

### 5.1 Batch Reporting

**Concepto:** Generar múltiples reportes automáticamente con un solo comando.

**Creación de Batch Report Script:**

```
Usando AutoLISP para automatización:

1. Crear archivo LISP: GenerateAllReports.lsp

(defun C:GENERATEALLREPORTS ( / reportList report outputPath)

  (setq outputPath "C:\\ProjectName\\Reports\\")

  ;; Lista de reportes a generar
  (setq reportList
    (list
      (list "LineList" "Complete")
      (list "ValveList" "Complete")
      (list "EquipmentList" "Complete")
      (list "PipingBOM" "Complete")
      (list "IsometricList" "Complete")
    )
  )

  (princ "\nGenerando reportes de proyecto...")

  ;; Loop por cada reporte
  (foreach report reportList
    (progn
      (setq reportName (car report))
      (setq reportScope (cadr report))

      (princ (strcat "\n  Generando " reportName "..."))

      ;; Comando de generación de reporte
      (command "PLANT3DREPORTS"
               reportName
               "AllDrawings"
               outputPath
               (strcat reportName "_" (GetDateStamp) ".xlsx")
      )

      (princ " Completo.")
    )
  )

  (princ "\n\nTodos los reportes generados.")
  (princ (strcat "\nUbicación: " outputPath))
  (princ)
)

;; Función helper: obtener timestamp
(defun GetDateStamp ( / date)
  (setq date (rtos (getvar "CDATE") 2 0))
  (substr date 1 8)  ;; YYYYMMDD
)

;; Cargar automáticamente al iniciar
(princ "\nScript de reportes cargado. Tipo: GENERATEALLREPORTS")
(princ)

2. Cargar script en Plant 3D:
   - Command: APPLOAD
   - Seleccionar: GenerateAllReports.lsp
   - Load
   - Add to Startup Suite (auto-load cada vez)

3. Ejecutar:
   - Command: GENERATEALLREPORTS
   - Enter
   - Todos los reportes se generan automáticamente
```

**Scheduled Reporting (Windows Task Scheduler):**

```
Paso 1: Crear Script Batch (.bat)

Archivo: GenerateWeeklyReports.bat

@echo off
echo Generando Reportes Semanales de Proyecto...

REM Abrir AutoCAD Plant 3D
"C:\Program Files\Autodesk\AutoCAD 2026\acad.exe" ^
  /product "Plant3D" ^
  /b "C:\Scripts\GenerateReportsScript.scr" ^
  "C:\ProjectName\ProjectMain.dwg"

echo Reportes Generados.
pause

Paso 2: Crear Script File (.scr)

Archivo: GenerateReportsScript.scr

GENERATEALLREPORTS
QUIT
Y

(Ejecuta comando LISP y cierra AutoCAD)

Paso 3: Configurar Windows Task Scheduler

1. Abrir Task Scheduler
2. Create Basic Task:
   - Name: "Weekly Plant 3D Reports"
   - Trigger: Weekly, Fridays, 18:00
   - Action: Start a Program
     * Program: C:\Scripts\GenerateWeeklyReports.bat
3. Configurar opciones:
   - Run whether user is logged on or not
   - Run with highest privileges
4. Save

Resultado:
✅ Reportes generan automáticamente cada viernes a las 6 PM
✅ Sin intervención manual
✅ Archivos guardados con timestamp
✅ Disponibles para revisión semanal de equipo
```

![Automatización de Reportes](../imagenes/leccion-29-automatizacion-reportes.png)

### 5.2 Integración con Sistema de Gestión Documental

**Escenario:** Auto-upload de reportes a SharePoint/BIM 360/Vault.

**PowerShell Script para Upload a SharePoint:**

```powershell
# UploadReportsToSharePoint.ps1

# Configuración
$siteUrl = "https://company.sharepoint.com/sites/ProjectXYZ"
$libraryName = "Reports"
$localPath = "C:\ProjectName\Reports\"
$reportDate = Get-Date -Format "yyyy-MM-dd"

# Conectar a SharePoint
Connect-PnPOnline -Url $siteUrl -Interactive

# Obtener archivos generados hoy
$reportsToUpload = Get-ChildItem -Path $localPath -Filter "*$reportDate*.xlsx"

# Upload cada reporte
foreach ($report in $reportsToUpload) {
    Write-Host "Uploading $($report.Name)..."

    Add-PnPFile -Path $report.FullName `
                -Folder $libraryName `
                -Values @{
                    "ReportType" = $report.BaseName.Split("_")[0]
                    "ReportDate" = $reportDate
                    "GeneratedBy" = $env:USERNAME
                }

    Write-Host "  Uploaded successfully."
}

Write-Host "`nAll reports uploaded to SharePoint."
Disconnect-PnPOnline

Ejecución:
- Ejecutar después de generación de reportes
- O: Incluir en Task Scheduler después de batch report
- Equipo recibe notificación automática de SharePoint
```

## Resumen de la Lección

En esta lección hemos cubierto el sistema completo de reportes de AutoCAD Plant 3D:

**Puntos Clave:**

1. **Report Creator:** Sistema central de generación de reportes con acceso a base de datos del proyecto y catálogos de especificaciones

2. **Reportes Estándar:** Line List, Equipment List, Valve List, BOM, Isometric Lists - cubren necesidades comunes de ingeniería, procurement y construcción

3. **Personalización:** Modificación de plantillas XML para agregar columnas, filtros, agrupaciones y formato personalizado

4. **Reportes Custom:** Creación de reportes completamente personalizados con consultas SQL, joins de tablas, columnas calculadas y formato avanzado

5. **Integración Excel:** Templates de Excel, Power Query para combinar datos, Power Pivot para análisis avanzado, dashboards interactivos

6. **Automatización:** Scripts LISP para batch reporting, Windows Task Scheduler para reportes programados, integración con sistemas documentales

**Aplicación Práctica:**

Los reportes automáticos desde modelo 3D:

- **Eliminan transcripción manual:** Reduce errores en 85-95%
- **Garantizan consistencia:** Datos siempre reflejan estado actual del modelo
- **Aceleran entrega:** 40-50% reducción en tiempo de documentación
- **Facilitan decisiones:** Información actualizada para stakeholders
- **Soportan todo el ciclo:** Desde diseño hasta operación

**Próximos Pasos:**

En la próxima lección (Lección 30 - FINAL), completaremos el curso con finalización de proyecto, paquete de entregables, y cierre profesional del curso completo de AutoCAD Plant 3D 2026.

## Preguntas de Evaluación

**Pregunta 1:** ¿Cuál es la principal ventaja de generar reportes automáticamente desde el modelo 3D de Plant 3D en comparación con creación manual de listas?

a) Los reportes automáticos son más rápidos de generar
b) Garantizan consistencia entre modelo y documentación, eliminando errores de transcripción
c) Los reportes automáticos tienen mejor formato visual
d) Permiten usar Microsoft Excel para análisis

**Respuesta Correcta:** b) La principal ventaja es garantizar consistencia absoluta entre el modelo 3D y la documentación, ya que los datos se extraen directamente del modelo, eliminando errores de transcripción manual (reducción de 85-95% en errores según estudios de industria).

---

**Pregunta 2:** En el Report Creator de Plant 3D, ¿qué archivo define la estructura, columnas y formato de un reporte?

a) Archivo de base de datos del proyecto (.mdb)
b) Archivo de plantilla de reporte (.rpt en formato XML)
c) Archivo de catálogo de especificaciones (.spec)
d) Archivo de configuración de proyecto (.xml)

**Respuesta Correcta:** b) Los reportes se definen mediante archivos de plantilla .rpt en formato XML que especifican qué datos extraer (DataSource), qué columnas mostrar (Columns), cómo filtrar y agrupar (Filters, Groups), y el formato de salida (OutputFormat).

---

**Pregunta 3:** Para crear un reporte personalizado que combine información de válvulas con información de las líneas donde están instaladas, ¿qué técnica se debe utilizar en la configuración de DataSource?

a) Filtrado avanzado por múltiples propiedades
b) JOIN de la tabla PnPValve con la tabla PnPLine
c) Agrupación por Line Number
d) Ordenamiento por múltiples columnas

**Respuesta Correcta:** b) Se debe utilizar un JOIN (unión) entre la tabla PnPValve (válvulas) y la tabla PnPLine (líneas) usando una clave común (LineId), permitiendo que el reporte incluya tanto propiedades de válvulas como propiedades de las líneas donde están instaladas.

---

**Pregunta 4:** ¿Qué herramienta de Microsoft Excel es más adecuada para combinar datos de múltiples reportes de Plant 3D (Line List, Valve List, Equipment List) y crear relaciones entre ellos para análisis integrado?

a) VLOOKUP functions
b) Conditional Formatting
c) Power Query y Power Pivot con Data Model
d) Macros VBA

**Respuesta Correcta:** c) Power Query permite importar y transformar múltiples reportes, mientras que Power Pivot con Data Model permite crear relaciones entre tablas y realizar análisis integrado con measures calculadas, ideal para análisis multidimensional de datos de proyecto.

---

**Pregunta 5:** Para automatizar la generación semanal de todos los reportes de proyecto sin intervención manual, ¿qué combinación de herramientas es más efectiva?

a) Configurar recordatorios en Outlook para generar reportes manualmente
b) Script AutoLISP para batch reporting + Windows Task Scheduler para ejecución programada
c) Macros de Excel con auto-save activado
d) Report Creator con opción "Auto-Generate" activada

**Respuesta Correcta:** b) Un script AutoLISP (o .NET) puede automatizar la generación de múltiples reportes en secuencia, y Windows Task Scheduler puede ejecutar este script automáticamente en días/horas específicos, eliminando completamente la intervención manual y garantizando reportes actualizados regularmente.

## Ejercicio Práctico

Ver archivo `ejercicios.md` para el Ejercicio 29: Generación de reportes personalizados de proyecto.

**Duración estimada:** 40 minutos

---

*Nota: Los ejemplos de código XML, AutoLISP y PowerShell en esta lección son simplificados para propósitos educativos. Implementaciones de producción pueden requerir manejo de errores adicional, validación de datos y configuraciones específicas de entorno empresarial.*

*Para información detallada sobre la estructura de la base de datos de Plant 3D y nombres de tablas/columnas disponibles para reportes personalizados, consultar la documentación de desarrollador de Autodesk Plant 3D 2026 SDK.*
