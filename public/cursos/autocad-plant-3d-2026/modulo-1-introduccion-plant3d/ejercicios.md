# Ejercicios Prácticos - Módulo 1

## Introducción a AutoCAD Plant 3D 2026

Este documento contiene los 5 ejercicios prácticos completos del Módulo 1, diseñados para reforzar los conceptos aprendidos en cada lección mediante escenarios reales de la industria.

**Requerimientos generales:**
- AutoCAD Plant 3D 2026 instalado y activado
- Permisos para crear proyectos en disco local
- Mínimo 2 horas disponibles para completar todos los ejercicios
- Carpeta de trabajo: `C:\PlantProjects\Modulo1_Ejercicios\`

**Criterios de evaluación general:**
- Precisión técnica: 40%
- Cumplimiento de especificaciones: 30%
- Organización y metodología: 20%
- Documentación de resultados: 10%

---

## Ejercicio 1: Exploración de Interfaz y Configuración de Workspace

**Lección relacionada:** Lección 1 - Interfaz de Plant 3D 2026 y Project Manager

### Objetivo

Familiarizarse completamente con la interfaz de AutoCAD Plant 3D 2026, configurar un espacio de trabajo profesional optimizado y dominar la navegación en el Project Manager.

### Escenario

Usted ha sido contratado como Plant Designer Senior en una empresa de ingeniería internacional. Antes de comenzar proyectos reales, debe configurar su entorno de trabajo Plant 3D siguiendo los estándares corporativos de eficiencia.

### Duración estimada

30 minutos

### Instrucciones detalladas

#### Parte A: Exploración de Ribbons (10 min)

1. **Inicie AutoCAD Plant 3D 2026**
   - Desde Start Menu > Autodesk > AutoCAD Plant 3D 2026
   - Espere a que cargue completamente

2. **Explore cada ribbon tab:**
   - **Home (Plant) Tab:**
     - Identifique secciones: Project, Data, Settings, Utilities
     - Localice comandos: New Project, Data Manager, Spec Editor
     - Screenshot de Home tab completo

   - **P&ID Tab:**
     - Identifique secciones: Insert, Line Groups, Annotate, Validate
     - Localice tools de símbolos y líneas de proceso
     - Screenshot de P&ID tab

   - **Piping Tab:**
     - Secciones: Equipment, Pipe, Components, Supports, Modify
     - Identifique comandos de routing: Route Pipe, Add Component
     - Screenshot de Piping tab

   - **Equipment Tab:**
     - Comandos de creación: Parametric Equipment, Custom Equipment
     - Nozzle tools
     - Screenshot de Equipment tab

   - **Structure Tab:**
     - Structural Members, Platforms, Stairs, Handrails
     - Screenshot de Structure tab

   - **Isometric Tab:**
     - Generate, Configure, Export
     - Screenshot de Isometric tab

   - **Output Tab:**
     - Reports, Drawings, Publish
     - Screenshot de Output tab

3. **Documente:**
   - Cree documento Word: "Ejercicio1_Ribbons_Exploration.docx"
   - Incluya todos los screenshots
   - Para cada tab, liste 5 comandos principales y su propósito

#### Parte B: Configuración de Workspace Optimizado (15 min)

4. **Configure Project Manager:**
   - Localice Project Manager (panel lateral izquierdo)
   - Si no visible: Home tab > Project > Project Manager
   - Click y drag barra de título del Project Manager
   - Ancle (dock) a la izquierda de la pantalla
   - Right-click barra de título > Auto-hide: OFF
   - Resize panel a ~350 px de ancho
   - Screenshot: Project Manager anclado

5. **Configure Properties Palette:**
   - Command: `PROPERTIES` o `PR`
   - Click y drag barra de título
   - Ancle a la derecha de la pantalla
   - Resize a ~300 px de ancho
   - Screenshot: Properties Palette anclada

6. **Configure Tool Palettes:**
   - Command: `TOOLPALETTES` o `Ctrl+3`
   - Click barra de título > Auto-hide: ON
   - Posicione a la derecha (se ocultará automáticamente)
   - Pruebe: pase mouse sobre borde derecho (debe aparecer)
   - Screenshot: Tool Palettes en modo auto-hide

7. **Configure Quick Access Toolbar:**
   - Localice Quick Access Toolbar (arriba, esquina superior izquierda)
   - Click dropdown arrow
   - Agregue comandos frecuentes:
     - Save
     - Undo
     - Redo
     - Print
     - Layer Properties
   - Screenshot: Quick Access Toolbar customizado

8. **Minimize Ribbon (opcional para pantallas pequeñas):**
   - Right-click en ribbon > Minimize Options
   - Seleccione opción preferida:
     - Show Full Ribbon (recomendado para training)
     - Minimize to Panel Titles
     - Minimize to Panel Buttons
     - Minimize to Tabs

9. **Save Workspace:**
   - Command: `WSSAVE`
   - Workspace name: `MyPlantWorkspace_[SuNombre]`
   - Click OK
   - Verify: Workspace guardado en dropdown (Quick Access Toolbar área)

10. **Test Workspace:**
    - Cierre Plant 3D completamente
    - Reabra Plant 3D
    - Load workspace: `MyPlantWorkspace_[SuNombre]`
    - Verifique que Project Manager, Properties, Tool Palettes están como configuró
    - Screenshot: Workspace completo cargado

#### Parte C: Exploración de Herramientas Principales (5 min)

11. **Abrir Spec Editor:**
    - Home tab > Data > Spec Editor
    - Explore interfaz brevemente (sin modificar nada)
    - Screenshot de Spec Editor interface
    - Cierre Spec Editor

12. **Abrir Data Manager:**
    - Home tab > Data > Data Manager
    - Explore interfaz
    - Screenshot de Data Manager interface
    - Cierre Data Manager

13. **Explorar Display Configurations:**
    - Home tab > Settings > Display Configurations
    - Observe opciones: Design Mode, Review Mode, Performance Mode
    - Screenshot de Display Configurations dialog
    - Cierre sin cambios

### Entregables

1. **Documento Word:** "Ejercicio1_Ribbons_Exploration.docx"
   - Screenshots de todos los 7 ribbon tabs
   - Lista de comandos principales por tab

2. **Documento Word:** "Ejercicio1_Workspace_Configuration.docx"
   - Screenshots de:
     - Project Manager anclado
     - Properties Palette anclada
     - Tool Palettes auto-hide
     - Quick Access Toolbar customizado
     - Workspace completo guardado y reloadado
     - Spec Editor interface
     - Data Manager interface
     - Display Configurations dialog

3. **Workspace guardado:** `MyPlantWorkspace_[SuNombre]`

### Criterios de evaluación

- **Documentación completa con screenshots (40 puntos)**
  - Todos los ribbons documentados: 20 pts
  - Workspace configuration documentada: 20 pts

- **Workspace configurado correctamente (30 puntos)**
  - Project Manager anclado izquierda: 10 pts
  - Properties Palette anclada derecha: 10 pts
  - Tool Palettes auto-hide: 5 pts
  - Quick Access Toolbar customizado: 5 pts

- **Workspace funcional y guardado (20 puntos)**
  - Workspace guardado correctamente: 10 pts
  - Workspace reloadable (test exitoso): 10 pts

- **Comprensión de herramientas (10 puntos)**
  - Identificación correcta de Spec Editor, Data Manager, Display Configs: 10 pts

**Total: 100 puntos**

**Aprobación: 80 puntos mínimo**

---

## Ejercicio 2: Creación y Configuración de Proyecto Completo

**Lección relacionada:** Lección 2 - Configuración de Plant Project y Plant Settings

### Objetivo

Crear un proyecto Plant 3D profesional completo con todas las configuraciones necesarias para una planta de procesamiento de gas natural, aplicando best practices de la industria.

### Escenario

Usted es el Lead Designer de un proyecto de planta de procesamiento de gas natural con capacidad de 50 MMSCFD (Million Standard Cubic Feet per Day). El cliente (Energy Corp International) requiere diseño según estándares ASME B31.3 y el proyecto se ejecutará en sistema métrico. La planta se ubicará en Alberta, Canada.

### Duración estimada

40 minutos

### Requisitos del cliente

- **Estándares:** ASME B31.3, API 610, ISO 15926
- **Unidades:** Sistema métrico (mm, bar, °C)
- **Template:** Petrochemical
- **Áreas de planta:**
  - Area 100: Inlet Separation
  - Area 200: Dehydration
  - Area 300: NGL Recovery
  - Area 400: Compression
  - Area 500: Utilities

### Instrucciones detalladas

#### Parte A: Creación de Proyecto (15 min)

1. **Inicie Project Setup Wizard:**
   - AutoCAD Plant 3D 2026 > Start Screen > New Project
   - O Home (Plant) tab > Project > New Project

2. **Project Information (Wizard Step 1):**
   ```
   Project Name: GasPlant_Processing_2026
   Project Number: GP-2026-001
   Description: Natural Gas Processing Plant - 50 MMSCFD Capacity
   Client: Energy Corp International
   Location: Alberta, Canada
   ```
   - Screenshot: Project Information filled

3. **Project Template Selection (Step 2):**
   - Select: **Petrochemical**
   - Rationale: Gas processing es parte de industria petroquímica
   - Screenshot: Template selection

4. **Units of Measurement (Step 3):**
   - **System:** Métrico (SI)
   - **Linear Units:** Millimeters
   - **Precision:** 0.0 (one decimal)
   - **Pressure Units:** Bar
   - **Pressure Precision:** 2 decimals
   - **Temperature:** Celsius (°C)
   - **Pipe Sizing Display:** NPS primary, DN secondary
   - Screenshot: Units configuration

5. **Project Location (Step 4):**
   ```
   Primary Location: C:\PlantProjects\GasPlant_Processing_2026\
   Backup Location: C:\PlantProjects\Backups\
   Shared Resources: C:\PlantProjects\SharedResources\
   ```
   - Cree estas carpetas primero si no existen
   - Screenshot: Project locations

6. **Drawing Organization (Step 5):**
   - Select: **By Area**
   - Esto creará subcarpetas para cada área
   - Screenshot: Drawing organization selection

7. **Review and Create (Step 6):**
   - Revise resumen completo
   - Screenshot: Summary screen
   - Click: **Create Project**
   - Espere a que wizard complete (30-60 seg)

8. **Verificación de proyecto creado:**
   - Project Manager debe mostrar proyecto creado
   - Carpetas: P&ID, 3D, Iso, Sheets deben existir
   - Screenshot: Project Manager con proyecto creado

#### Parte B: Configuración de Plant Settings (15 min)

9. **Abrir Plant Settings:**
   - Home (Plant) tab > Settings > Plant Settings
   - O Command: `PLANTSETTINGS`

10. **General Settings:**
    ```
    Multi-User Settings:
    - Enable Multi-User: ON
    - File Locking: Automatic
    - Sync Interval: 10 minutes

    Logging:
    - Error Logging: ON
    - Log Level: Warning
    - Log File Location: [default]

    Database:
    - Database Backup: Automatic
    - Backup Frequency: Daily
    - Backup Retention: 7 days
    ```
    - Screenshot: General Settings configured

11. **Units Settings (verify/refine):**
    ```
    Linear Units:
    - Drawing Units: Millimeters
    - Precision: 0.0
    - Display Format: Decimal

    Angular Units:
    - Degrees
    - Precision: 0.01°

    Pressure Units:
    - Unit: Bar
    - Precision: 0.00
    - Rating Display: Both (ANSI Class y PN)

    Temperature Units:
    - Celsius (°C)

    Flow Units:
    - Volumetric: m³/h
    - Mass: kg/h

    Pipe Sizing:
    - Primary: NPS (inches)
    - Secondary: DN (metric)
    ```
    - Screenshot: Units Settings

12. **Display Settings:**
    ```
    Component Display:
    - Mode: Detailed
    - LOD (Level of Detail): Automatic

    Line Display:
    - Line Color: By Service
    - Line Width: By Rating
    - Center Lines: ON for pipes

    Text Display:
    - Tag Display: On hover
    - Tag Size: 3mm
    - Font: Arial

    Symbol Scale:
    - P&ID Symbol Scale: 1:100
    - 3D Symbol Scale: 1:1 (real size)

    Performance:
    - Max Components Before Simplification: 5000
    - Automatic Regeneration: ON
    ```
    - Screenshot: Display Settings

13. **Piping Settings:**
    ```
    Routing:
    - Ortho Mode: ON (enforce orthogonal routing)
    - Snap Angle: 90°
    - Auto-routing: AI-assisted (new in 2026): ON

    Fittings:
    - Auto-insert Fittings: ON
    - Fitting Selection: Optimal
    - Elbow Radius: 1.5D (long radius)

    Slope:
    - Default Slope: 1:100
    - Slope Direction: Auto
    ```
    - Screenshot: Piping Settings

14. **Isometric Settings:**
    ```
    Generation:
    - Auto-generate: OFF (manual for control)
    - Split Method: By spec change

    Style:
    - Default Iso Style: ISO-Standard
    - Sheet Size: A1
    - Scale: 1:50

    BOM:
    - BOM Format: Table
    - Sort By: Line number
    - Include: Fittings, Valves, Flanges, Bolts, Gaskets
    ```
    - Screenshot: Isometric Settings

15. **Apply and Close:**
    - Click: Apply
    - Click: OK
    - Settings guardados

#### Parte C: Estructura de Áreas y Documentación (10 min)

16. **Crear estructura de áreas en 3D folder:**
    - En Project Manager, navigate a carpeta "3D"
    - Right-click > New Folder
    - Crear 5 subcarpetas:
      ```
      Area-100-Inlet-Separation
      Area-200-Dehydration
      Area-300-NGL-Recovery
      Area-400-Compression
      Area-500-Utilities
      ```
    - Screenshot: Folder structure creada

17. **Crear estructura en P&ID folder:**
    - En Project Manager, navigate a carpeta "P&ID"
    - Right-click > New Folder
    - Crear subcarpetas correspondientes:
      ```
      Area-100-PID
      Area-200-PID
      Area-300-PID
      Area-400-PID
      Area-500-PID
      ```
    - Screenshot: P&ID folder structure

18. **Configurar Grid System (para modelos 3D):**
    - Crear nuevo drawing en 3D > Area-100-Inlet-Separation
    - Right-click > New Drawing: "Area100-GridSetup.dwg"
    - Abrir drawing
    - Command: `UCS` > Origin: 0,0,0
    - Create grid reference:
      - Grid spacing: 7500mm (7.5m typical para plants)
      - Grid lines: A-M (13 lines @ 7.5m = 90m width)
      - Grid lines: 1-20 (20 lines @ 7.5m = 142.5m length)
    - Save drawing
    - Screenshot: Grid system

19. **Documentar configuración del proyecto:**
    - Crear documento Word: "GasPlant_Project_Configuration.docx"
    - Incluir secciones:
      - **Project Information Summary**
      - **Units Configuration**
      - **Plant Settings Summary**
      - **Area Structure**
      - **Grid System Configuration**
      - **Decisions Log** (documentar por qué se seleccionó cada opción)
    - Incluir todos los screenshots tomados

### Entregables

1. **Proyecto Plant 3D creado:** `GasPlant_Processing_2026`
   - Ubicación: `C:\PlantProjects\GasPlant_Processing_2026\`
   - Completamente configurado

2. **Documento de configuración:** "GasPlant_Project_Configuration.docx"
   - Mínimo 5 páginas
   - Screenshots de todos los pasos
   - Decisions log documentado

3. **Folder structure:**
   - 5 subcarpetas en 3D
   - 5 subcarpetas en P&ID
   - Grid setup drawing

### Criterios de evaluación

- **Proyecto creado correctamente (40 puntos)**
  - Project information completa y correcta: 10 pts
  - Template seleccionado apropiadamente: 5 pts
  - Units configuradas correctamente (métrico): 15 pts
  - Project location apropiada: 5 pts
  - Drawing organization lógica: 5 pts

- **Plant Settings configurados (30 puntos)**
  - General settings (multi-user, logging, backup): 10 pts
  - Display settings apropiadas: 7 pts
  - Piping settings (ortho, auto-fittings, slope): 8 pts
  - Isometric settings: 5 pts

- **Estructura de proyecto (20 puntos)**
  - Folder structure lógica y completa: 10 pts
  - Grid system configurado: 5 pts
  - Naming conventions consistentes: 5 pts

- **Documentación (10 puntos)**
  - Document completo con screenshots: 7 pts
  - Decisions log documentado: 3 pts

**Total: 100 puntos**

**Aprobación: 80 puntos mínimo**

---

## Ejercicio 3: Creación de Pipe Spec Profesional

**Lección relacionada:** Lección 3 - Spec Editor y Pipeline Specifications

### Objetivo

Crear una especificación completa de tubería (Pipe Spec) para servicio de agua de enfriamiento siguiendo norma ASME B31.3, incluyendo todos los componentes necesarios y exportando documentación profesional.

### Escenario

Una planta de energía requiere una Pipe Spec para su sistema de cooling water. Usted es el Piping Engineer responsable de crear esta especificación según los siguientes criterios técnicos.

### Duración estimada

35 minutos

### Condiciones de Diseño

```
Service: Cooling Water (treated, closed loop)
Fluid: Water + corrosion inhibitors
Design Pressure: 150 PSIG @ 100°F (10.3 bar @ 38°C)
Design Temperature: 40°F to 120°F (4°C to 49°C)
Material: Carbon Steel ASTM A53 Grade B
Corrosion Allowance: 1/8" (3.2mm)
Rating: ANSI Class 150# (PN20)
End Connection: Butt-Weld (sizes ≥ 2"), Threaded (sizes < 2" if required)
Size Range: 2" to 24" NPS (DN50 to DN600)
Code: ASME B31.3 Category D (non-flammable, non-toxic, ≤150 PSIG)
```

### Instrucciones detalladas

#### Parte A: Preparación y Creación de Spec (10 min)

1. **Abrir proyecto (o crear nuevo para práctica):**
   - Use proyecto del Ejercicio 2, O
   - Cree proyecto nuevo: "CoolingWater_Spec_Practice"

2. **Abrir Spec Editor:**
   - Home (Plant) tab > Data > Spec Editor
   - O Command: `SPECEDIT`

3. **Crear nueva spec:**
   - Toolbar: Click "New Spec" button
   - O Right-click en Spec List panel > New Spec

4. **Configurar Spec Properties:**
   ```
   Spec Name: CS-150-CW
   Description: Carbon Steel 150# Cooling Water Service
   Long Description: ASTM A53 Grade B, Sch 40, ANSI 150#, Cooling Water, Butt-Weld
   Rating: 150# (ANSI Class 150)
   End Type: Butt-Weld
   Primary Size Range: 2" to 24" NPS
   Secondary Size: DN50 to DN600

   Design Conditions:
   - Design Pressure: 150 PSIG @ 100°F
   - Design Temperature: 40°F to 120°F
   - Service: Non-corrosive, cooling water
   - Code: ASME B31.3 Category D

   Materials:
   - Pipe: ASTM A53 Grade B, Seamless, Schedule 40
   - Fittings: ASTM A234 WPB, Butt-Weld, Long Radius
   - Flanges: ASTM A105 Forged, Raised Face
   - Valves: ASTM A216 WCB Cast, Bolted Bonnet
   - Gaskets: Full Face Rubber (water service, low temp)
   - Bolts: ASTM A307 Grade B (low temp service OK)
   ```
   - Screenshot: Spec Properties dialog filled

5. **Seleccionar template base (si disponible):**
   - Option: Start from existing spec (CS-150-GEN si existe)
   - O Start from blank
   - Click OK

#### Parte B: Agregar Componentes para Size 4" (15 min)

6. **Navigate al Catalog Browser (panel inferior):**
   - Expand: Pipes > Carbon Steel > ASTM A53 Grade B
   - Filter: Size = 4", Schedule = 40, End = Butt-Weld

7. **Agregar Pipe:**
   - Component: Straight Pipe
   - Part Number: A53B-4-SCH40-BW
   - Description: 4" A53 Grade B Sch 40 BW Pipe
   - Drag to Component Grid O Click "Add to Spec"
   - Verify en grid

8. **Agregar Fittings - Elbows:**
   - Catalog > Fittings > Elbows > 90° Long Radius
   - Filter: Size = 4", Material = A234 WPB, End = BW
   - Part Number: A234WPB-4-90LR-BW
   - Description: 4" A234 WPB 90° LR Elbow BW
   - Add to spec

   - Similarly add:
   - 45° Elbow: A234WPB-4-45-BW
   - 90° Short Radius (if needed): A234WPB-4-90SR-BW

9. **Agregar Fittings - Tees:**
   - Catalog > Fittings > Tees > Straight Tee
   - Part Number: A234WPB-4-TEE-BW
   - Description: 4" A234 WPB Straight Tee BW
   - Add to spec

   - Reducing Tee (common reducing sizes):
   - A234WPB-4x3-TEE-BW (4"x3" reducing tee)
   - A234WPB-4x2-TEE-BW (4"x2" reducing tee)

10. **Agregar Fittings - Reducers:**
    - Concentric Reducers:
      - A234WPB-4x3-REDC-BW (4"x3")
      - A234WPB-4x2-REDC-BW (4"x2")

    - Eccentric Reducers:
      - A234WPB-4x3-REDE-BW (4"x3")
      - A234WPB-4x2-REDE-BW (4"x2")

11. **Agregar Cap:**
    - A234WPB-4-CAP-BW

12. **Agregar Flanges:**
    - Weld Neck Raised Face:
      - A105-4-150-WNRF-BW
      - Description: 4" A105 150# WN RF Flange BW

    - Slip-On Raised Face (backup option):
      - A105-4-150-SORF

    - Blind Raised Face:
      - A105-4-150-BRF
      - Description: 4" A105 150# Blind RF Flange

13. **Agregar Valves:**
    - Gate Valve:
      - Part: A216WCB-4-150-GATE-OS&Y-FL
      - Description: 4" WCB 150# Gate Valve OS&Y Flanged
      - Features: Outside Screw & Yoke, Bolted Bonnet

    - Butterfly Valve (common para CW large sizes):
      - CI-4-150-BFLY-WAFER
      - Description: 4" CI 150# Butterfly Valve Wafer Type

    - Check Valve (Swing):
      - A216WCB-4-150-CHECK-SWING-FL
      - Description: 4" WCB 150# Swing Check Valve Flanged

14. **Agregar Gaskets:**
    - Part: GASKET-FF-RUBBER-4-150
    - Description: 4" 150# Full Face Rubber Gasket
    - Material: Neoprene or EPDM (water service)

15. **Agregar Bolt Sets:**
    - Part: BOLT-A307B-4-150
    - Description: 4" 150# Bolt Set, A307 Grade B, 3/4" x 3"
    - Quantity per flange: 8 bolts
    - Includes: Bolts, nuts, washers

16. **Verificar componentes 4" completos:**
    - Component Grid debe mostrar ~20-25 items para size 4"
    - Screenshot: Component Grid con 4" components

#### Parte C: Replicar para Otros Tamaños (5 min)

17. **Copiar componentes a otros sizes:**

    **Method 1: Copy/Paste within Spec Editor**
    - Select all 4" components en grid (Ctrl+Click cada uno)
    - Right-click > Copy
    - Change filter to Size: 6"
    - Right-click > Paste
    - System copia componentes, ajustando size a 6"
    - Verify y adjust part numbers si necesario

    **Repeat para sizes:** 8", 10", 12", 16", 20", 24"

18. **Ajustar cantidades de bolts por size:**
    ```
    Size    Bolt Quantity
    2"      4
    3"      4
    4"      8
    6"      8
    8"      8
    10"     12
    12"     12
    16"     16
    20"     20
    24"     24
    ```
    - Edit bolt entries para cada size

19. **Verificación final:**
    - All sizes (2" to 24") populated
    - Each size tiene: pipe, elbows, tees, reducers, cap, flanges, valves, gaskets, bolts
    - Screenshot: Spec completa en Spec Editor

#### Parte D: Documentación y Export (5 min)

20. **Export to Excel:**
    - Select spec: CS-150-CW
    - Right-click > Export > Excel
    - Save location: Project folder
    - Filename: "CS-150-CW_Specification.xlsx"
    - Click Export
    - Abrir Excel file para verify
    - Screenshot: Excel file

21. **Create Specification Sheet (manual, Word/PDF):**
    - Crear documento: "CS-150-CW_Specification_Sheet.docx"
    - Include:
      - **Cover Page:** Spec name, project, date, engineer
      - **Design Conditions:** Pressure, temp, service, code
      - **Materials Summary:** List all materials (pipe, fittings, flanges, valves, gaskets, bolts)
      - **Size Range:** 2" to 24" NPS (DN50 to DN600)
      - **Component Table:** Excerpt from Excel (at least size 4")
      - **Notes:**
        - All welding per ASME B31.3 and approved WPS
        - Hydrostatic test: 1.5 x Design Pressure = 225 PSIG
        - Gaskets: Rubber full face suitable for water service
        - Valves > 10" may require gear operators
      - **Approvals:** Signature blocks (Prepared by, Reviewed by, Approved by)
    - Export to PDF: "CS-150-CW_Specification_Sheet.pdf"

### Entregables

1. **Spec en Plant 3D:** CS-150-CW completa
   - Todos los sizes 2" to 24" populated
   - Todos los componentes incluidos

2. **Excel export:** "CS-150-CW_Specification.xlsx"

3. **Specification Sheet PDF:** "CS-150-CW_Specification_Sheet.pdf"
   - Profesional, ready for client submittal

### Criterios de evaluación

- **Spec completa y correcta (50 puntos)**
  - Spec properties correctas: 10 pts
  - Size 4" completo con todos componentes: 20 pts
  - Otros sizes (6" a 24") completos: 15 pts
  - Bolt quantities correctas por size: 5 pts

- **Materiales apropiados para servicio (25 puntos)**
  - Pipe material (A53 Grade B, Sch 40): 7 pts
  - Fittings material (A234 WPB): 6 pts
  - Flanges material (A105 RF): 6 pts
  - Gaskets apropiadas (Rubber FF para water): 3 pts
  - Bolts apropiados (A307B para low temp): 3 pts

- **Export y documentación (25 puntos)**
  - Excel export correcto: 10 pts
  - Specification Sheet completo: 10 pts
  - Formato profesional: 5 pts

**Total: 100 puntos**

**Aprobación: 80 puntos mínimo**

---

## Ejercicio 4: Data Manager y Custom Properties

**Lección relacionada:** Lección 4 - Data Manager y Custom Properties

### Objetivo

Configurar custom properties para gestión de procurement y construction, importar datos desde Excel, realizar bulk editing y generar reportes profesionales.

### Escenario

Su proyecto de planta petroquímica tiene 50 equipos principales. El equipo de procurement ha preparado información de Purchase Orders, vendors y delivery dates en Excel que debe integrarse al modelo Plant 3D. Adicionalmente, construcción requiere tracking de installation zones y criticality.

### Duración estimada

40 minutos

### Instrucciones detalladas

#### Parte A: Crear Custom Properties (15 min)

1. **Abrir Data Manager:**
   - Home (Plant) tab > Data > Data Manager
   - O Command: `PLANTDATAMANAGER`

2. **Access Property Definitions:**
   - Menu: Tools > Property Definitions
   - Property Definitions dialog abre

3. **Crear Property 1: PO_Number**
   ```
   Property Name: PO_Number
   Display Name: Purchase Order Number
   Data Type: Text
   Category: Procurement
   Applies To: Equipment
   Required: Yes
   Default Value: [blank]
   Validation Format: ^PO-\d{4}-\d{4}$
   (validates format: PO-2026-1234)
   Description: Purchase Order tracking number
   ```
   - Click OK
   - Screenshot: PO_Number property definition

4. **Crear Property 2: Vendor_Name**
   ```
   Property Name: Vendor_Name
   Display Name: Vendor/Supplier Name
   Data Type: List
   Category: Procurement
   Applies To: Equipment
   Required: No
   List Values:
   - Flowserve
   - Sulzer
   - Alfa Laval
   - Shell & Tube Inc
   - Bechtel Equipment
   - TBD
   Default Value: TBD
   Description: Equipment vendor/manufacturer
   ```
   - Click OK
   - Screenshot: Vendor_Name property

5. **Crear Property 3: Delivery_Date**
   ```
   Property Name: Delivery_Date
   Display Name: Expected Delivery Date
   Data Type: Date
   Category: Procurement
   Applies To: Equipment
   Required: No
   Default Value: [blank]
   Description: Expected delivery date to site
   ```
   - Click OK

6. **Crear Property 4: Installation_Zone**
   ```
   Property Name: Installation_Zone
   Display Name: Installation Zone
   Data Type: List
   Category: Construction
   Applies To: Equipment
   Required: Yes
   List Values:
   - Area-100
   - Area-200
   - Area-300
   - Area-400
   - TBD
   Default Value: TBD
   Description: Installation area/zone assignment
   ```
   - Click OK

7. **Crear Property 5: Criticality**
   ```
   Property Name: Criticality
   Display Name: Equipment Criticality Rating
   Data Type: List
   Category: Operations
   Applies To: Equipment
   Required: Yes
   List Values:
   - A-Critical (Plant shutdown if fails)
   - B-Important (Reduced capacity if fails)
   - C-Routine (Minor impact if fails)
   Default Value: C-Routine
   Description: Criticality for maintenance prioritization
   ```
   - Click OK
   - Screenshot: All 5 properties created (list view)

8. **Close Property Definitions dialog**

#### Parte B: Manual Data Entry Test (5 min)

9. **En Data Manager, create/locate test equipment:**
   - Si proyecto tiene equipment, select uno existente
   - Si no, cree uno temporalmente:
     - En 3D model, insert simple equipment
     - Equipment tab > Create > Parametric Equipment
     - Type: Vertical Vessel
     - Tag: E-301
     - Description: Heat Exchanger Test
     - Place in model

10. **Populate properties manually:**
    - En Data Manager, localice E-301
    - En Data Grid o Properties Detail panel:
      ```
      PO_Number: PO-2026-1001
      Vendor_Name: Shell & Tube Inc (select from dropdown)
      Delivery_Date: 2026-06-15 (use date picker)
      Installation_Zone: Area-200 (select from dropdown)
      Criticality: A-Critical (select from dropdown)
      ```
    - Screenshot: E-301 con properties populated

#### Parte C: Preparar y Import Excel Data (12 min)

11. **Crear Excel file:**
    - Excel: New workbook
    - Filename: "Equipment_Procurement_Data.xlsx"
    - Sheet name: "Equipment Data"

12. **Create column structure:**
    ```
    Column Headers (Row 1):
    A: Tag Number
    B: PO_Number
    C: Vendor_Name
    D: Delivery_Date
    E: Installation_Zone
    F: Criticality
    ```

13. **Fill sample data (mínimo 10 rows):**
    ```
    | Tag    | PO_Number    | Vendor_Name   | Delivery_Date | Installation_Zone | Criticality   |
    |--------|--------------|---------------|---------------|-------------------|---------------|
    | P-101  | PO-2026-1002 | Flowserve     | 2026-05-20    | Area-100          | A-Critical    |
    | P-102  | PO-2026-1002 | Flowserve     | 2026-05-20    | Area-100          | B-Important   |
    | P-103  | PO-2026-1002 | Flowserve     | 2026-05-25    | Area-100          | B-Important   |
    | V-201  | PO-2026-1003 | TBD           | 2026-07-01    | Area-200          | C-Routine     |
    | V-202  | PO-2026-1003 | TBD           | 2026-07-01    | Area-200          | B-Important   |
    | E-302  | PO-2026-1004 | Alfa Laval    | 2026-06-10    | Area-200          | A-Critical    |
    | E-303  | PO-2026-1004 | Alfa Laval    | 2026-06-10    | Area-200          | A-Critical    |
    | T-401  | PO-2026-1005 | Bechtel Equip | 2026-08-15    | Area-300          | B-Important   |
    | T-402  | PO-2026-1006 | TBD           | 2026-09-01    | Area-300          | C-Routine     |
    | C-501  | PO-2026-1007 | Sulzer        | 2026-07-20    | Area-400          | A-Critical    |
    ```
    - Save Excel file
    - Screenshot: Excel data table

14. **Import to Plant 3D:**
    - Data Manager > File > Import > From Excel
    - Select: "Equipment_Procurement_Data.xlsx"
    - Import Wizard abre

15. **Map columns (Wizard):**
    ```
    Excel Column          Plant 3D Property
    ------------          ------------------
    Tag Number       →    Tag
    PO_Number        →    PO_Number
    Vendor_Name      →    Vendor_Name
    Delivery_Date    →    Delivery_Date
    Installation_Zone →   Installation_Zone
    Criticality      →    Criticality
    ```
    - Wizard shows preview
    - Verify mappings correct
    - Screenshot: Column mapping

16. **Validate y Import:**
    - Wizard validates:
      - ✅ Tag numbers exist? (may show warnings si tags no existen en project)
      - ✅ Data types match?
      - ✅ Date formats valid?
      - ⚠️ Nota: Si tags no existen, wizard puede skip O puede create placeholders (depends on settings)

    - For this exercise: OK to have warnings (datos de ejemplo)
    - Click: Import
    - System imports data
    - Summary dialog muestra results
    - Screenshot: Import summary

17. **Verify imported data:**
    - Data Manager > Filter: Equipment
    - Verify properties populated
    - Spot-check varios equipment tags
    - Screenshot: Data grid mostrando imported data

#### Parte D: Bulk Editing (3 min)

18. **Filter equipment con vendor TBD:**
    - Data Manager > Filter
    - Property: Vendor_Name
    - Value: TBD
    - Apply filter
    - Result: Shows equipment donde vendor = TBD

19. **Bulk edit vendor:**
    - Select all filtered equipment (Ctrl+A)
    - Right-click > Edit Selected
    - Property: Vendor_Name
    - New Value: Pending Award
    - Apply
    - Verify: All TBD changed to "Pending Award"
    - Screenshot: Bulk edit result

#### Parte E: Generate Reports (5 min)

20. **Report 1: Procurement Status Report**
    - Data Manager > Reports > New Report
    - Report name: "Procurement Status Report"
    - Columns:
      - Tag
      - Description
      - PO_Number
      - Vendor_Name
      - Delivery_Date
      - Criticality
    - Grouping: Group by Vendor_Name
    - Sorting: Sort by Delivery_Date (ascending)
    - Filter: Equipment only
    - Generate
    - Export to Excel: "Procurement_Status_Report.xlsx"
    - Screenshot: Report in Excel

21. **Report 2: Critical Equipment List**
    - New Report
    - Report name: "Critical Equipment List"
    - Columns:
      - Tag
      - Description
      - Installation_Zone
      - Vendor_Name
      - Delivery_Date
    - Filter: Criticality = "A-Critical" only
    - Grouping: Group by Installation_Zone
    - Sorting: Sort by Tag
    - Generate
    - Export to PDF: "Critical_Equipment_List.pdf"
    - Screenshot: Report in PDF

### Entregables

1. **5 Custom Properties creadas en Data Manager:**
   - PO_Number
   - Vendor_Name
   - Delivery_Date
   - Installation_Zone
   - Criticality

2. **Excel import file:** "Equipment_Procurement_Data.xlsx"

3. **Imported data en Plant 3D:**
   - Mínimo 10 equipment con properties populated

4. **Bulk edit ejecutado:**
   - Vendor TBD → Pending Award

5. **2 Reports generados:**
   - "Procurement_Status_Report.xlsx"
   - "Critical_Equipment_List.pdf"

6. **Screenshots documentados** (mínimo 8):
   - Property definitions
   - Manual data entry test
   - Excel data table
   - Column mapping
   - Import summary
   - Bulk edit result
   - Report 1 (Excel)
   - Report 2 (PDF)

### Criterios de evaluación

- **Custom Properties (30 puntos)**
  - 5 properties creadas correctamente: 20 pts
  - Properties con data types apropiados: 5 pts
  - Validation rules configured (PO_Number format): 5 pts

- **Excel Import (25 puntos)**
  - Excel file structure correcta: 8 pts
  - Import wizard ejecutado exitosamente: 10 pts
  - Data imported sin errores críticos: 7 pts

- **Bulk Edit (15 puntos)**
  - Filter aplicado correctamente: 5 pts
  - Bulk edit ejecutado exitosamente: 10 pts

- **Reports (20 puntos)**
  - Procurement Status Report correcto: 10 pts
  - Critical Equipment List correcto: 10 pts

- **Documentación (10 puntos)**
  - Screenshots completos: 10 pts

**Total: 100 puntos**

**Aprobación: 80 puntos mínimo**

---

## Ejercicio 5: Creación de Project Template Completo

**Lección relacionada:** Lección 5 - Standards y Plant 3D Project Setup completo

### Objetivo

Crear un project template profesional completo con layers ISO 13567, text/dimension styles ISO 129, drawing templates y documentación, listo para deployment en proyectos reales de plantas de gas natural.

### Escenario

Su empresa de ingeniería ha ganado contratos para diseñar múltiples plantas de procesamiento de gas natural en los próximos 3 años. Management requiere un template corporativo estandarizado que asegure consistency, quality y compliance con estándares internacionales (ISO 13567, ISA S5.1, ASME B31.3, ISO 129) en todos los proyectos.

### Duración estimada

60 minutos

### Estándares corporativos requeridos

- **Layers:** ISO 13567 (internacional standard)
- **P&ID Symbols:** ISA S5.1 (universal instrumentation)
- **Dimensioning:** ISO 129-1 (technical drawings)
- **Piping Code:** ASME B31.3 (process piping)
- **Units:** Métrico (mm, bar, °C) - mayoría de proyectos internacionales
- **Drawing Sizes:** A1, A3 (ISO 216)

### Instrucciones detalladas

#### Parte A: Layer Standards ISO 13567 (15 min)

1. **Crear nuevo proyecto template base:**
   - New Project: "GasPlant_Corporate_Template_2026"
   - Location: C:\PlantProjects\Templates\
   - Template: Petrochemical
   - Units: Métrico

2. **Abrir Layer Manager:**
   - Command: `LAYER` o `LA`

3. **Crear Process Layers:**
   ```
   Layer Name         Color    Linetype     Lineweight  Plot  Description
   ------------------------------------------------------------------------------
   P-EQP-SYMB        Red      Continuous   0.35mm      Yes   Process Equipment Symbols
   P-EQP-TEXT        Red      Continuous   0.18mm      Yes   Equipment Text/Labels
   P-PIP-MLIN        Blue     Continuous   0.50mm      Yes   Piping Main Lines
   P-PIP-INSU        Cyan     Continuous   0.25mm      Yes   Piping Insulation
   P-PIP-SUPP        Green    Continuous   0.35mm      Yes   Piping Supports
   P-VAL-SYMB        Magenta  Continuous   0.40mm      Yes   Valve Symbols
   P-INS-SYMB        Yellow   Continuous   0.35mm      Yes   Instrument Symbols
   P-ANN-TEXT        White    Continuous   0.18mm      Yes   Annotation Text
   P-ANN-DIMS        White    Continuous   0.18mm      Yes   Annotation Dimensions
   P-ANN-TAGS        White    Continuous   0.25mm      Yes   Annotation Tags
   P-ANN-NOTE        White    Continuous   0.18mm      Yes   Annotation Notes
   ```

4. **Crear Structural Layers:**
   ```
   S-STL-COLS        Blue     Continuous   0.50mm      Yes   Structural Steel Columns
   S-STL-BEAM        Blue     Continuous   0.40mm      Yes   Structural Steel Beams
   S-STL-BRAC        Blue     Continuous   0.30mm      Yes   Structural Bracing
   S-PLA-DECK        Cyan     Continuous   0.25mm      Yes   Platform Decking
   S-PLA-HAND        Green    Continuous   0.30mm      Yes   Platform Handrails
   S-STR-FRAM        Green    Continuous   0.35mm      Yes   Stairs Framing
   S-ANN-TEXT        White    Continuous   0.18mm      Yes   Structural Annotation
   ```

5. **Crear Reference Layers (non-plot):**
   ```
   REF-GRID          8 (Gray) Center       0.13mm      No    Reference Grid
   REF-DIMS          8 (Gray) Continuous   0.13mm      No    Reference Dimensions
   REF-NORD          8 (Gray) Continuous   0.18mm      No    North Arrow
   DEFPOINTS         White    Continuous   Default     No    Dimension Def Points
   ```

6. **Configurar layer properties:**
   - Para CADA layer:
     - Set Color (use color number or true color)
     - Set Linetype (load if necessary: Linetype Manager > Load)
     - Set Lineweight (0.13mm to 0.70mm range)
     - Set Plot (Yes/No)
     - Description field: Enter description

7. **Crear Layer Filters:**
   - Layer Properties Manager > New Property Filter
   - Filter 1: "Process" - Name: P-*
   - Filter 2: "Structural" - Name: S-*
   - Filter 3: "Annotation" - Name: *-ANN-*
   - Filter 4: "Non-Plot" - Plot: No
   - Screenshot: Layer Manager con filters

8. **Guardar Layer Standard:**
   - Layer Properties Manager > Export Layer States
   - Filename: "ISO13567_GasPlant_Standard.las"
   - Location: Templates folder
   - Include: Layer properties, states
   - Screenshot: Saved layer state file

#### Parte B: Text y Dimension Styles ISO 129 (10 min)

9. **Crear Text Styles:**
   - Command: `STYLE`
   - Create following styles:
     ```
     Style Name   Font        Height  Width  Oblique  Usage
     -------------------------------------------------------------
     ISO-2.5      ISOCPEUR    2.5mm   1.0    0°       General notes, small text
     ISO-3.5      ISOCPEUR    3.5mm   1.0    0°       Standard text, tags
     ISO-5.0      ISOCPEUR    5.0mm   1.0    0°       Titles, important labels
     ISO-7.0      ISOCPEUR    7.0mm   1.0    0°       Drawing titles
     ```
   - Set ISO-3.5 as Current (default)
   - Screenshot: Text Style Manager

10. **Crear Dimension Style ISO-METRIC:**
    - Command: `DIMSTYLE`
    - New: "ISO-METRIC"
    - Configure:
      ```
      Lines Tab:
      - Dimension line color: ByLayer
      - Extension line color: ByLayer
      - Lineweight: 0.18mm
      - Baseline spacing: 7mm
      - Extend beyond dim lines: 2mm
      - Offset from origin: 1mm

      Symbols and Arrows Tab:
      - Arrow type: Closed filled
      - Arrow size: 2.5mm
      - Center marks: Line, size 2.5mm

      Text Tab:
      - Text style: ISO-2.5
      - Text color: ByLayer
      - Text height: 2.5mm (fixed)
      - Text placement: Above, Centered
      - Text alignment: Aligned with dimension line
      - Text gap: 1mm

      Primary Units Tab:
      - Unit format: Decimal
      - Precision: 0.0 (one decimal)
      - Decimal separator: Period (.) [or Comma (,) for Europe]
      - Measurement scale: 1.0
      - Zero suppression: Trailing ON, Leading OFF
      - Prefix/Suffix: [blank] (or "mm" if required by client)

      Tolerances Tab: (si required)
      - Method: Symmetrical
      - Precision: 0.0
      - Upper value: 0.5mm (typical general tolerance)
      ```
    - Set as Current
    - Screenshot: Dimension Style Manager

11. **Crear Multileader Style:**
    - Command: `MLEADERSTYLE`
    - New: "TAG-EQUIPMENT"
    - Configure:
      ```
      Leader Format:
      - Type: Straight
      - Color: ByLayer
      - Lineweight: 0.25mm

      Leader Structure:
      - Maximum points: 2
      - Landing distance: 3mm

      Content:
      - Type: Mtext
      - Text style: ISO-3.5
      - Text color: ByLayer
      - Text height: 3.0mm
      - Frame: Circle
      - Landing gap: 2mm
      ```
    - Set as Current
    - Screenshot: Multileader Style Manager

#### Parte C: Drawing Templates (20 min)

12. **Create P&ID Template A1:**
    - New drawing: Command `NEW`
    - Template: acad.dwt (clean start)
    - Units: Millimeters
    - Command: `LIMITS`
    - Lower left: 0,0
    - Upper right: 841,594 (A1 landscape: 841mm x 594mm)

13. **Create border y title block:**
    - Draw border:
      - Rectangle: 10mm margin from limits
      - Coordinates: 10,10 to 831,584
      - Layer: REF-GRID (or create BORDER layer)

    - Draw title block (bottom right corner):
      - Size: 297mm wide x 60mm high (typical)
      - Location: Bottom right corner
      - Divide into zones:
        ```
        Project Information (left section):
        - Project Name
        - Project Number
        - Client

        Drawing Information (middle):
        - Drawing Title
        - Drawing Number
        - Scale

        Revision/Approval (right):
        - Revision
        - Date
        - Drawn By
        - Checked By
        - Approved By
        ```

    - Create Attributes:
      - Command: `ATTDEF`
      - Create attributes for cada field:
        ```
        Tag: PROJECT_NAME, Prompt: "Project Name:", Default: "Enter Project"
        Tag: PROJECT_NO, Prompt: "Project Number:", Default: "PP-0000"
        Tag: CLIENT, Prompt: "Client:", Default: "Client Name"
        Tag: DWG_TITLE, Prompt: "Drawing Title:", Default: "Title"
        Tag: DWG_NUMBER, Prompt: "Drawing Number:", Default: "P&ID-001"
        Tag: SCALE, Prompt: "Scale:", Default: "1:100"
        Tag: REVISION, Prompt: "Revision:", Default: "0"
        Tag: DATE, Prompt: "Date:", Default: "2026-01-01"
        Tag: DRAWN_BY, Prompt: "Drawn By:", Default: "Initials"
        Tag: CHECKED_BY, Prompt: "Checked:", Default: "Initials"
        Tag: APPROVED_BY, Prompt: "Approved:", Default: "Initials"
        ```
      - Text height: 3.5mm (readable)
      - Text style: ISO-3.5

14. **Load layers:**
    - Import layer state: "ISO13567_GasPlant_Standard.las"
    - Command: `LAYMCUR` > Select: P-EQP-SYMB (set current for P&ID work)

15. **Create viewport (Layout space):**
    - Tab: Layout1
    - Rename tab: "P&ID Sheet"
    - Delete default viewport
    - Command: `MVIEW`
    - Create viewport: Inside border area (con margin para title block)
    - Set viewport scale: 1:100 (typical P&ID scale)
      - Command: Select viewport border
      - Properties Palette > Standard Scale > 1:100

16. **Save as P&ID Template:**
    - File > Save As
    - File type: AutoCAD Drawing Template (*.dwt)
    - Filename: "P&ID_ISO_A1_Template.dwt"
    - Location: Templates folder
    - Description: "P&ID Template, ISO 13567 layers, A1 size, 1:100 scale"
    - Save

17. **Create 3D Model Template:**
    - New drawing
    - Units: Millimeters
    - Limits: 0,0 to 1000000,1000000 (large, working in meters scale)
    - Load layers: Import "ISO13567_GasPlant_Standard.las"
    - Set current layer: P-PIP-MLIN
    - UCS configuration:
      - Command: `UCS` > Origin: 0,0,0
      - Save: Command `UCS` > Named > Save Current: "PROJECT-BASE"
    - Grid reference:
      - Crear grid lines usando XLINE o CONSTRUCTION lines
      - Grid spacing: 7500mm
      - Grid labels: A-M, 1-20
      - Layer: REF-GRID
    - Save as template: "3D_Model_ISO_Template.dwt"
    - Screenshot: 3D template con grid

#### Parte D: Project Template y Specs (10 min)

18. **Return to project: GasPlant_Corporate_Template_2026**

19. **Configure Plant Settings:**
    - Home (Plant) > Settings > Plant Settings
    - General:
      - Multi-User: ON
      - Logging: ON, Level Warning
    - Units: Métrico (verify)
    - Display: Detailed
    - Piping:
      - Ortho: ON
      - Snap angle: 90°
      - Auto-fittings: ON
      - Default slope: 1:100
    - Screenshot: Plant Settings configured

20. **Create minimum specs (si no existen):**
    - Open Spec Editor
    - Create o verify estas specs existen:
      - CS-150-GEN (carbon steel general)
      - SS316-300-CW (stainless corrosive/wet)
      - CS-PN40-UTL (utilities)
    - Si necesita crearlas: Follow Ejercicio 3 guidelines (simplified para template)

21. **Create custom properties (si no existen):**
    - Data Manager > Property Definitions
    - Create:
      - PO_Number (text)
      - Vendor_Name (list)
      - Criticality (list)
      - Installation_Zone (list)
    - Follow Ejercicio 4 guidelines

22. **Export Project Template:**
    - Project Manager > Right-click project > Export Project Template
    - Filename: "GasPlant_ISO_Corporate_Template_v1.0.ptp"
    - Location: Templates folder
    - Include:
      - ✅ Project structure
      - ✅ Plant settings
      - ✅ Specs
      - ✅ Custom properties
      - ✅ Layer standards
      - ❌ Drawings (empty template)
    - Description: "Corporate template for gas processing plants, ISO standards, metric units, v1.0 dated 2026-MM-DD"
    - Export
    - Screenshot: Export dialog

#### Parte E: Documentation (5 min)

23. **Create Project Setup Guide (Word/PDF):**
    - Filename: "GasPlant_Template_Setup_Guide_v1.0.docx"
    - Structure:
      ```
      COVER PAGE:
      - Title: Gas Plant Corporate Template Setup Guide
      - Version: 1.0
      - Date: 2026-MM-DD
      - Company: [Your Company]

      1. INTRODUCTION
         - Purpose of template
         - Scope of application

      2. STANDARDS REFERENCE
         - ISO 13567 (Layers)
         - ISA S5.1 (P&ID Symbols)
         - ISO 129-1 (Dimensioning)
         - ASME B31.3 (Piping)
         - ISO 216 (Drawing sizes)

      3. LAYER STANDARDS
         - Table: Layer name, Color, Lineweight, Description
         - Include all P-*, S-*, REF-* layers

      4. TEXT AND DIMENSION STYLES
         - Text styles table
         - Dimension style settings summary
         - Usage guidelines

      5. DRAWING TEMPLATES
         - P&ID Template A1 (when to use, scale)
         - 3D Model Template (grid system, UCS)

      6. PIPE SPECIFICATIONS
         - List of specs included in template
         - Spec selection guidelines (when to use each)

      7. CUSTOM PROPERTIES
         - Table: Property name, Type, Usage

      8. TEMPLATE USAGE INSTRUCTIONS
         - How to start new project from template
         - Step-by-step for engineers

      9. VERSION CONTROL
         - Version history
         - Change log

      10. SUPPORT
         - Contact information
         - Training resources

      APPENDICES:
      - A: Layer list complete
      - B: Spec details
      - C: Screenshots of configured settings
      ```
    - Minimum 8-10 pages
    - Professional formatting
    - Include screenshots de key configurations
    - Export to PDF: "GasPlant_Template_Setup_Guide_v1.0.pdf"

### Entregables

1. **Layer Standard file:**
   - "ISO13567_GasPlant_Standard.las"

2. **Drawing Templates:**
   - "P&ID_ISO_A1_Template.dwt"
   - "3D_Model_ISO_Template.dwt"

3. **Project Template:**
   - "GasPlant_ISO_Corporate_Template_v1.0.ptp"

4. **Documentation:**
   - "GasPlant_Template_Setup_Guide_v1.0.pdf" (minimum 8 pages)

5. **Screenshots folder** con minimum 10 screenshots:
   - Layer Manager con ISO 13567 layers
   - Layer filters
   - Text Style Manager
   - Dimension Style Manager (ISO-METRIC)
   - Multileader Style
   - P&ID Template con title block
   - 3D Template con grid
   - Plant Settings configured
   - Project Template export dialog
   - Any other relevant configurations

### Criterios de evaluación

- **Layer Standards ISO 13567 (25 puntos)**
  - Process layers completos (P-*): 8 pts
  - Structural layers completos (S-*): 7 pts
  - Reference layers (REF-*): 3 pts
  - Layer properties correctas (colors, lineweights, plot): 5 pts
  - Layer state file (.las) guardado: 2 pts

- **Text/Dimension Styles ISO 129 (20 puntos)**
  - Text styles (ISO-2.5, 3.5, 5.0, 7.0) correctos: 8 pts
  - Dimension style ISO-METRIC compliant: 10 pts
  - Multileader style configured: 2 pts

- **Drawing Templates (25 puntos)**
  - P&ID Template A1 functional: 15 pts
    - Border y title block: 7 pts
    - Attributes working: 5 pts
    - Layers loaded: 3 pts
  - 3D Model Template functional: 10 pts
    - Grid system: 5 pts
    - UCS configured: 3 pts
    - Layers loaded: 2 pts

- **Project Template (20 puntos)**
  - Project template (.ptp) exportado correctamente: 10 pts
  - Specs included: 5 pts
  - Custom properties included: 5 pts

- **Documentation (10 puntos)**
  - Setup Guide complete (8+ pages): 7 pts
  - Professional formatting: 3 pts

**Total: 100 puntos**

**Aprobación: 80 puntos mínimo**

---

## Conclusión de Ejercicios - Módulo 1

Ha completado exitosamente los 5 ejercicios prácticos del Módulo 1. Estos ejercicios le han proporcionado experiencia hands-on en:

1. **Configuración de workspace** optimizado para productivity
2. **Creación de proyectos** profesionales con configuraciones completas
3. **Desarrollo de pipe specs** siguiendo ASME B31.3
4. **Gestión de datos** con custom properties y Excel integration
5. **Establecimiento de estándares** corporativos con templates reutilizables

Con esta experiencia práctica, está preparado para aplicar estos conocimientos en proyectos reales de plantas industriales.

**Próximo paso:** Módulo 2 - P&ID (Process & Instrumentation Diagrams)

---

**DISTMAH ATC - Authorized Training Center**
AutoCAD Plant 3D 2026 - Curso Avanzado
Ejercicios Prácticos - Módulo 1 de 6
