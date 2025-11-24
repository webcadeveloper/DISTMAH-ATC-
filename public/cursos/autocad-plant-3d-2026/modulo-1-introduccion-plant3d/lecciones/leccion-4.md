# Lección 4: Data Manager y Custom Properties

## Información de la Lección

- **Módulo:** 1 - Introducción a AutoCAD Plant 3D 2026
- **Lección:** 4 de 5
- **Duración:** 60 minutos
- **Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, usted será capaz de:

✅ Utilizar el Data Manager para gestionar información de componentes
✅ Crear custom properties (propiedades personalizadas) para componentes
✅ Vincular datos externos desde Excel y bases de datos
✅ Configurar property sets para diferentes disciplinas
✅ Generar reportes personalizados con datos de componentes

## Introducción

El Data Manager es el sistema nervioso central de información en AutoCAD Plant 3D 2026. Mientras que el Spec Editor define QUÉ componentes puede usar, el Data Manager define QUÉ INFORMACIÓN se almacena sobre cada componente insertado en el proyecto.

En proyectos industriales modernos, cada componente (bomba, válvula, equipo, segmento de tubería) debe llevar información técnica completa más allá de su geometría 3D:

**Información Estándar:**
- Tag number (P-101, V-205, E-301)
- Service (Steam, Cooling Water, Crude Oil)
- Material (CS, SS316, Alloy 625)
- Design pressure y temperature
- Line number (para tuberías)
- Manufacturer y model number

**Información Extendida (Custom):**
- Purchase Order number
- Vendor
- Lead time de entrega
- Cost (CAPEX)
- Maintenance schedule (OPEX)
- Criticality rating (A, B, C)
- Spare parts requirements
- Installation zone
- Commissioning status
- As-built verification status

Esta información NO es solo para documentación. Es crítica para:

- **Procurement:** Bill of Materials (BOM) con vendors y PO numbers
- **Construction:** Installation sequence y zone assignments
- **Commissioning:** Tracking de status de equipos
- **Operations:** Maintenance schedules y criticality
- **Asset Management:** Integration con CMMS (Computerized Maintenance Management System)

AutoCAD Plant 3D 2026 introduce mejoras significativas en Data Manager:
- Interfaz rediseñada con búsqueda avanzada multi-criterio
- Import/Export mejorado desde/hacia Excel, Access, SQL Server
- Property validation rules con formatos personalizados
- Auto-population de propiedades basado en reglas
- Integration con sistemas enterprise (SAP, Oracle)

Esta lección le proporcionará dominio completo del Data Manager, permitiéndole gestionar información de proyectos industriales complejos con miles de componentes, asegurando trazabilidad completa desde diseño hasta operación.

## 1. Introducción al Data Manager

### 1.1 ¿Qué es el Data Manager?

El Data Manager es la herramienta de Plant 3D que permite:

1. **Ver y editar propiedades** de componentes insertados en el proyecto
2. **Crear custom properties** específicas para su organización
3. **Import/Export data** desde/hacia sistemas externos
4. **Bulk edit** de propiedades de múltiples componentes
5. **Validate data** con reglas de validación
6. **Generate reports** personalizados

A diferencia del Spec Editor (que trabaja con el catálogo), el Data Manager trabaja con la **instancia** de componentes en el proyecto.

### 1.2 Acceso al Data Manager

**Método 1: Desde Ribbon**
- Home (Plant) Tab > Data > Data Manager

**Método 2: Command Line**
- Comando: `PLANTDATAMANAGER`

**Método 3: Desde Project Manager**
- Right-click en Project > Data Manager

![Data Manager interface 2026](../imagenes/leccion-4-data-manager-interface.png)

### 1.3 Estructura del Data Manager

**Panel Izquierdo: Component Tree**
- Jerarquía de componentes del proyecto
- Agrupados por tipo: Equipment, Piping, Structure, P&ID
- Filtros: Por drawing, por área, por spec

**Panel Central: Data Grid**
- Vista tabular de propiedades
- Columnas configurables
- Sorting y filtering
- Bulk edit capabilities

**Panel Derecho: Properties Detail**
- Vista detallada del componente seleccionado
- Edición individual de propiedades
- History de cambios (nuevo en 2026)

**Toolbar Superior:**
- Filter tools
- Import/Export
- Validation
- Reports

![Data Manager panels](../imagenes/leccion-4-data-manager-panels.png)

## 2. Propiedades Estándar de Componentes

### 2.1 Propiedades de Equipment

Cada equipo insertado en Plant 3D tiene propiedades estándar:

**Identification:**
- **Tag Number:** P-101, V-205, E-301, T-401
- **Description:** "Crude Feed Pump", "Flash Drum", etc.
- **Service:** "Crude Oil", "Sour Water", "LP Steam"

**Technical Data:**
- **Equipment Type:** Pump, Vessel, Heat Exchanger, Tank, Compressor
- **Design Pressure:** 300 PSIG
- **Design Temperature:** 650°F
- **Material of Construction:** CS, SS316, Alloy
- **Capacity:** 500 GPM, 1000 BPD, 10 MMSCFD

**Physical Data:**
- **Weight (Empty):** 5,500 lbs
- **Weight (Operating):** 12,000 lbs
- **Weight (Flooded):** 15,000 lbs
- **Dimensions:** Length x Width x Height

**Connection Data:**
- **Nozzles:** Lista de nozzles con size, rating, orientation
- **Inlet/Outlet Sizes:** 6" inlet, 4" outlet
- **Connections:** Flanged, Weld neck, etc.

**Procurement Data:**
- **Manufacturer:** "Sulzer", "Flowserve", "Alfa Laval"
- **Model Number:** "AHLSTAR CPT-53-8"
- **Purchase Order:** "PO-2026-1234"
- **Vendor:** "Houston Pump Supply"
- **Lead Time:** 16 weeks
- **Cost:** $125,000

**Installation Data:**
- **Drawing Number:** "3D-Area100-01"
- **Installation Zone:** "Area 100 - Reactor Section"
- **Foundation Number:** "FND-P101"
- **Elevation:** "+3500mm from grade"

### 2.2 Propiedades de Piping

Cada línea de tubería tiene propiedades:

**Line Identification:**
- **Line Number:** 1001-A-6"-CS-150, 2005-B-4"-SS-300
- **Service:** "HP Steam", "Cooling Water Return"
- **From - To:** "P-101 Discharge to V-201 Inlet"

**Specification:**
- **Spec:** CS-150-GEN
- **Material:** ASTM A106 Grade B
- **Size:** 6" NPS (DN150)
- **Rating:** 150# (PN20)
- **Schedule:** Sch 40

**Design Conditions:**
- **Design Pressure:** 285 PSIG @ 100°F
- **Design Temperature:** -20°F to 650°F
- **Fluid:** "Condensate"
- **Flow Rate:** 250 GPM (design), 200 GPM (normal)

**Insulation:**
- **Insulation Type:** Mineral Wool, Calcium Silicate
- **Insulation Thickness:** 2", 3", 4"
- **Jacketing:** Aluminum, Stainless Steel

**Testing:**
- **Hydrostatic Test Pressure:** 1.5 x Design = 428 PSIG
- **Test Medium:** Water, Air
- **Test Duration:** 10 minutes minimum per ASME B31.3

### 2.3 Propiedades de Valves

Las válvulas tienen propiedades detalladas:

**Valve Identification:**
- **Tag Number:** V-1001-A, V-2005-B
- **Description:** "Block Valve", "Control Valve", "Relief Valve"

**Valve Type:**
- **Type:** Gate, Globe, Ball, Check, Butterfly, Plug, Control, Relief
- **Operation:** Manual, Motorized, Pneumatic, Hydraulic
- **Actuator:** Electric motor, Air cylinder, Hydraulic

**Specification:**
- **Size:** 4" (DN100)
- **Rating:** 300# (PN50)
- **End Connection:** Flanged RF, Butt-weld, Socket-weld, Threaded
- **Body Material:** ASTM A216 WCB, SS316, Alloy

**Special Features:**
- **Fire Safe:** Yes/No per API 607
- **Fugitive Emissions:** Low-E per API 622
- **Locking:** Car-sealed open, Car-sealed closed, Locked open
- **Position Indicator:** Yes/No

**Control Valves (if applicable):**
- **Cv:** Valve flow coefficient
- **Trim Type:** Single-seat, Double-seat, Cage
- **Action:** Air-to-open, Air-to-close, Fail-open, Fail-close
- **Positioner:** Smart, Analog
- **Signal:** 4-20mA, HART, Fieldbus

### 2.4 Propiedades de Structural Steel

Para estructuras de acero:

**Member Identification:**
- **Mark Number:** B-101, C-205, BM-301
- **Description:** "Main Beam Level 100", "Column Grid A-1"

**Structural Data:**
- **Section Type:** W-Shape, C-Channel, L-Angle, HSS, Pipe
- **Size:** W12x26, C8x18.75, L4x4x1/2, HSS6x6x3/8
- **Material:** ASTM A992 (beams), A500 (HSS), A36 (plates)
- **Length:** 25'-6" (7772mm)
- **Weight:** 650 lbs (295 kg)

**Connection Data:**
- **Start Connection:** Bolted, Welded
- **End Connection:** Bolted, Welded
- **Connection Type:** Shear tab, Moment, Simple

## 3. Creating Custom Properties

### 3.1 Why Custom Properties?

Cada organización/proyecto tiene necesidades únicas de información:

**Examples de Custom Properties:**

**Para Procurement:**
- `PO_Number`: Purchase Order Number
- `Vendor_Name`: Vendor/Supplier name
- `Delivery_Date`: Expected delivery date
- `Received_Date`: Actual received date
- `Material_Requisition`: MR number

**Para Construction:**
- `Installation_Zone`: A1, A2, B1, B2
- `Installation_Package`: PKG-001, PKG-002
- `Contractor`: Bechtel, Fluor, CB&I
- `Installation_Sequence`: 1, 2, 3...
- `Installation_Status`: Not started, In progress, Completed

**Para Commissioning:**
- `Commissioning_Package`: CSU-A, CSU-B
- `Test_Date`: Hydro test date
- `Test_Result`: Pass, Fail, Pending
- `Punchlist_Items`: Outstanding items
- `Ready_for_Startup`: Yes/No

**Para Operations:**
- `Criticality`: A (critical), B (important), C (routine)
- `Maintenance_Frequency`: Monthly, Quarterly, Annually
- `Spare_Parts_Required`: List of critical spares
- `CMMS_Number`: Asset number in CMMS
- `Maintenance_Contract`: Vendor, In-house

**Para HSE (Health, Safety, Environment):**
- `Hazard_Class`: I, II, III, IV
- `Safety_Critical_Equipment`: Yes/No
- `PSV_Required`: Pressure Safety Valve required
- `SIL_Rating`: SIL 1, SIL 2, SIL 3 (Safety Integrity Level)
- `Inspection_Frequency`: Per RBI (Risk-Based Inspection)

### 3.2 Creating Custom Property Definitions

**Paso 1: Open Data Manager**
- Home (Plant) > Data > Data Manager

**Paso 2: Access Property Definitions**
- Menu: Tools > Property Definitions

**Paso 3: Create New Property**
- Click "New Property"
- Property Definition Dialog abre

**Paso 4: Configure Property**

**Property Name:** `PO_Number`
- Name debe ser único
- No espacios (use underscore)
- Max 64 caracteres

**Display Name:** `Purchase Order Number`
- Nombre amigable para usuarios
- Puede tener espacios

**Data Type:** Select apropiado
- Text (default): Para nombres, descriptions, tags
- Number: Para cantidades, dimensions, pesos
- Date: Para fechas
- Yes/No (Boolean): Para flags
- List: Para listas predefinidas (dropdown)

**Property Category:** `Procurement`
- Agrupa properties relacionadas
- Categorías: General, Technical, Procurement, Construction, etc.

**Applies To:** Select component types
- Equipment
- Piping
- Valves
- Structure
- All (todas)

**Default Value:** (opcional)
- Valor por defecto para nuevos componentes
- Example: `TBD` (To Be Determined)

**Validation:** (opcional)
- Required: Yes/No (campo obligatorio)
- Format: Regular expression para validar formato
  - Example para PO: `^PO-\d{4}-\d{4}$` valida "PO-2026-1234"

**Formula:** (opcional, nuevo en 2026)
- Auto-calculate basado en otras properties
- Example: `Total_Weight = Empty_Weight + Fluid_Weight`

![Creating custom property](../imagenes/leccion-4-crear-custom-property.png)

**Paso 5: Save Property Definition**
- Click OK
- Property ahora disponible para todos los componentes del tipo seleccionado

### 3.3 List-Type Properties (Dropdowns)

Para properties con valores predefinidos, use tipo List:

**Example: Criticality Rating**

Property Name: `Criticality`
Data Type: `List`

**List Values:**
- `A - Critical` (Failure causes plant shutdown)
- `B - Important` (Failure causes reduced capacity)
- `C - Routine` (Failure causes minor inconvenience)
- `D - Non-critical` (Failure has no impact on production)

**Benefits:**
- Ensures consistency (todos usan mismos valores)
- Evita typos
- Facilita filtering y reporting
- User-friendly (dropdown en lugar de escribir)

**Other Examples de List Properties:**
- `Installation_Status`: Not Started | In Progress | Completed | On Hold
- `Test_Result`: Pass | Fail | Pending | N/A
- `Material_Status`: Ordered | Received | Inspected | Installed
- `Contractor`: Bechtel | Fluor | CB&I | Jacobs | Technip

### 3.4 Calculated Properties (Formulas)

Plant 3D 2026 permite crear properties calculadas automáticamente:

**Example 1: Total Weight**

```
Property: Total_Weight
Formula: Empty_Weight + Operating_Weight_Fluid + Insulation_Weight
```

**Example 2: Pipe Volume**

```
Property: Pipe_Volume
Formula: (PI * (ID/2)^2 * Length) / 1000
Where: ID = Internal Diameter, Length = Pipe length
```

**Example 3: Cost per Foot**

```
Property: Cost_Per_Foot
Formula: Total_Cost / Length
```

**Example 4: Days Until Delivery**

```
Property: Days_Until_Delivery
Formula: DAYS(Delivery_Date, TODAY())
```

Estas formulas se recalculan automáticamente cuando propiedades base cambian.

![Calculated properties](../imagenes/leccion-4-calculated-properties.png)

## 4. Bulk Editing Properties

### 4.1 Editing Multiple Components

En proyectos grandes, editar componentes uno por uno es impráctico. Data Manager ofrece bulk editing:

**Scenario:** Asignar PO Number a 150 válvulas de mismo vendor

**Paso 1: Filter Components**
- Data Manager > Filter
- Component Type: Valves
- Manufacturer: "Flowserve"
- Result: 150 valves displayed

**Paso 2: Select All**
- Ctrl+A para seleccionar todos
- O click en column header checkbox

**Paso 3: Bulk Edit**
- Right-click > Edit Selected
- O toolbar: Edit > Bulk Edit

**Paso 4: Set Value**
- Property: `PO_Number`
- Value: `PO-2026-3456`
- Apply to all selected: ✅

**Paso 5: Confirm**
- Review preview
- Click Apply
- 150 valves actualizadas instantáneamente

![Bulk edit](../imagenes/leccion-4-bulk-edit.png)

### 4.2 Find and Replace

Similar a Word/Excel:

**Example:** Cambiar vendor name de "Flowserve Inc." a "Flowserve Corporation"

- Edit > Find and Replace
- Find: `Flowserve Inc.`
- Replace with: `Flowserve Corporation`
- Property: `Manufacturer`
- Replace All

**Example 2:** Actualizar installation zone codes

- Find: `ZONE-A`
- Replace: `AREA-100`
- Property: `Installation_Zone`

### 4.3 Formula-Based Updates

Para updates más complejos:

**Example:** Add 10% to all equipment costs (inflation adjustment)

- Select equipment
- Property: `Cost`
- Formula: `Cost * 1.10`
- Apply

**Example 2:** Calculate installation dates basado en delivery date

- Property: `Installation_Date`
- Formula: `Delivery_Date + 14 days`
- Apply to all equipment

## 5. Import/Export Data

### 5.1 Export to Excel

Para reportes, análisis externo, backup:

**Paso 1: Select Components**
- Filter desired components
- O select all

**Paso 2: Export**
- File > Export > Excel
- O toolbar icon

**Paso 3: Configure Export**
- Select columns to export:
  - Tag Number ✅
  - Description ✅
  - Service ✅
  - Size ✅
  - Material ✅
  - PO_Number ✅
  - Vendor ✅
  - Cost ✅
  - Etc.

**Paso 4: Export**
- Choose file location
- Click Export
- Excel file generado

**Uses:**
- Procurement: BOM with PO numbers y vendors
- Analysis: Pivot tables, charts
- Client deliverables: Equipment lists
- Backup: Data backup independiente del modelo

![Export to Excel](../imagenes/leccion-4-export-excel.png)

### 5.2 Import from Excel

Para bulk data entry o integration con sistemas externos:

**Scenario:** Procurement team ha agregado PO numbers, vendors y delivery dates en Excel. Importar de vuelta a Plant 3D.

**Paso 1: Prepare Excel File**

Excel debe tener estructura específica:
- Column A: Tag Number (unique identifier, REQUIRED)
- Column B: PO_Number
- Column C: Vendor
- Column D: Delivery_Date
- Etc.

⚠️ **Critical:** Tag Number column es clave para match con componentes en Plant 3D.

**Paso 2: Import**
- Data Manager > File > Import > From Excel
- Select Excel file

**Paso 3: Map Columns**
- Wizard muestra preview
- Map Excel columns a Plant 3D properties:
  - Excel "PO Number" → Plant 3D `PO_Number`
  - Excel "Vendor" → Plant 3D `Vendor_Name`
  - Excel "Delivery" → Plant 3D `Delivery_Date`

**Paso 4: Validation**
- Wizard valida:
  - ✅ All tags exist en proyecto
  - ✅ Data types match (dates son dates, numbers son numbers)
  - ⚠️ Warning si tags no encontrados

**Paso 5: Import**
- Review summary
- Click Import
- Data actualizada en Plant 3D

**Paso 6: Verify**
- Data Manager refresh
- Spot-check varios componentes
- Verify data correcta

### 5.3 Integration con Databases

Para proyectos enterprise, integración con SQL Server, Oracle, SAP:

**SQL Server Integration:**

Plant 3D puede conectarse a SQL Server para:
- Read data (vendor catalogs, price lists)
- Write data (export project data to corporate DB)
- Real-time sync (advanced)

**Configuration:**
- Data Manager > Tools > External Database Connection
- Connection String: `Server=SQLServer01;Database=PlantDB;User=plantuser;Password=***`
- Map tables y columns
- Test connection
- Enable sync

**SAP Integration (via middleware):**

Para full enterprise integration:
1. Plant 3D exports to XML/CSV
2. Middleware (custom script or ETL tool) procesa
3. Data imported to SAP MM/PM modules
4. Bidirectional sync posible con desarrollo custom

## 6. Data Validation y Quality Control

### 6.1 Validation Rules

Ensure data quality con validation rules:

**Example 1: Tag Number Format**

Rule: Tag numbers must follow format: `[EPCVTFH]-\d{3}[A-Z]?`
- E-301 (Equipment)
- P-101A (Pump)
- V-205 (Valve)
- Invalid: "PUMP1", "V205", "E-1"

**Example 2: Required Fields**

For equipment, require:
- Tag Number (always required)
- Description
- Service
- Design Pressure
- Design Temperature

Validation prevents saving until all required fields completed.

**Example 3: Numeric Ranges**

Design Pressure: Must be > 0 and < 5000 PSIG
Design Temperature: Must be > -450°F and < 1500°F

**Example 4: Date Logic**

Installation_Date must be >= Delivery_Date
(Can't install before it arrives!)

### 6.2 Data Quality Reports

Generate reports highlighting issues:

**Missing Data Report:**
- Components with blank required fields
- Example: 25 pumps sin PO_Number

**Invalid Data Report:**
- Components with invalid values
- Example: 3 vessels con design pressure = 0

**Duplicate Tag Report:**
- Tags usados más de una vez
- Critical error, must resolve

**Orphaned Data Report:**
- Data en database sin componente en modelo
- Cleanup required

### 6.3 Data Cleanup

Periodic cleanup mantiene database healthy:

**Remove Orphaned Data:**
- Tools > Cleanup > Remove Orphaned Records
- Remove data de componentes deleted

**Compact Database:**
- Tools > Compact Database
- Reduces database file size
- Improves performance

**Audit Trail:**
- Tools > Audit Report
- Shows who changed what, when
- Importante para ISO/quality management

## 7. Reporting con Custom Properties

### 7.1 Standard Reports con Custom Data

Plant 3D reports automáticamente incluyen custom properties:

**Equipment List:**
- Columns: Tag, Description, Service, Manufacturer, Model, PO_Number, Vendor, Cost
- Sorted by: Tag Number
- Grouped by: Area

**Valve List:**
- Columns: Tag, Line Number, Size, Type, Actuator, Criticality, Maintenance_Frequency
- Sorted by: Line Number
- Filtered: Only critical valves (Criticality = A)

**Material Requisition:**
- Grouped by: PO_Number
- Columns: Tag, Description, Quantity, Unit_Price, Total_Cost, Vendor, Delivery_Date
- Totals: Sum of Total_Cost by PO

### 7.2 Custom Report Templates

Create report templates específicos:

**Example: Procurement Status Report**

Purpose: Track procurement status de todos los equipos

**Columns:**
- Tag Number
- Description
- Manufacturer
- Model
- PO_Number
- Vendor
- Order_Date
- Delivery_Date
- Received_Date
- Status (calculated: Ordered, In Transit, Received)
- Days_Late (calculated: if Received_Date > Delivery_Date)

**Grouping:** By Vendor
**Sorting:** By Delivery_Date
**Filters:** Only equipment (no piping)
**Totals:** Count by Status

**Example 2: Construction Progress Report**

**Columns:**
- Tag Number
- Description
- Installation_Zone
- Installation_Package
- Contractor
- Installation_Status
- Planned_Install_Date
- Actual_Install_Date
- Days_Variance

**Grouping:** By Installation_Zone, then by Contractor
**Chart:** Progress by zone (pie chart)
**KPIs:**
- % Complete
- % On Schedule
- % Late

### 7.3 Exporting Reports

Reports pueden exportarse a múltiples formatos:

- **Excel:** Para análisis, pivot tables
- **PDF:** Para distribución, archivo
- **CSV:** Para import a otros sistemas
- **HTML:** Para web publishing
- **XML:** Para integration con otros softwares

## Ejercicio Práctico

### Ejercicio 4: Configuración de Custom Properties y Data Management

**Objetivo:** Crear custom properties para gestión de procurement y construction, populate data via Excel import, y generar reportes.

**Escenario:** Su proyecto de planta petroquímica tiene 50 equipos principales. El equipo de procurement ha preparado información en Excel que debe integrarse al modelo Plant 3D para tracking.

**Instrucciones:**

**Parte 1: Create Custom Properties (10 min)**

1. Abrir Data Manager
2. Crear las siguientes custom properties:

   **Property 1:**
   - Name: `PO_Number`
   - Display Name: `Purchase Order Number`
   - Data Type: Text
   - Category: Procurement
   - Applies To: Equipment
   - Required: Yes
   - Format: `^PO-\d{4}-\d{4}$`

   **Property 2:**
   - Name: `Vendor_Name`
   - Display Name: `Vendor/Supplier`
   - Data Type: List
   - Values: Flowserve | Sulzer | Alfa Laval | Shell & Tube Inc | TBD
   - Category: Procurement
   - Applies To: Equipment

   **Property 3:**
   - Name: `Delivery_Date`
   - Display Name: `Expected Delivery Date`
   - Data Type: Date
   - Category: Procurement
   - Applies To: Equipment

   **Property 4:**
   - Name: `Installation_Zone`
   - Display Name: `Installation Zone`
   - Data Type: List
   - Values: Area-100 | Area-200 | Area-300 | Area-400
   - Category: Construction
   - Applies To: Equipment

   **Property 5:**
   - Name: `Criticality`
   - Display Name: `Equipment Criticality`
   - Data Type: List
   - Values: A-Critical | B-Important | C-Routine
   - Category: Operations
   - Applies To: Equipment
   - Required: Yes

**Parte 2: Manual Data Entry (5 min)**

3. En Data Manager, localizar equipment E-301 (Heat Exchanger)
4. Manually populate:
   - PO_Number: PO-2026-1001
   - Vendor_Name: Shell & Tube Inc
   - Delivery_Date: 2026-06-15
   - Installation_Zone: Area-200
   - Criticality: A-Critical

**Parte 3: Prepare Excel Import File (5 min)**

5. Crear Excel file: `Equipment_Data_Import.xlsx`
6. Structure:
   ```
   | Tag Number | PO_Number      | Vendor_Name  | Delivery_Date | Installation_Zone | Criticality  |
   |------------|----------------|--------------|---------------|-------------------|--------------|
   | P-101      | PO-2026-1002   | Flowserve    | 2026-05-20    | Area-100          | A-Critical   |
   | P-102      | PO-2026-1002   | Flowserve    | 2026-05-20    | Area-100          | B-Important  |
   | V-201      | PO-2026-1003   | TBD          | 2026-07-01    | Area-200          | C-Routine    |
   | E-302      | PO-2026-1004   | Alfa Laval   | 2026-06-10    | Area-200          | A-Critical   |
   | T-401      | PO-2026-1005   | TBD          | 2026-08-15    | Area-300          | B-Important  |
   ```

**Parte 4: Import Data from Excel (5 min)**

7. Data Manager > Import > From Excel
8. Select `Equipment_Data_Import.xlsx`
9. Map columns
10. Validate
11. Import
12. Verify data imported correctamente

**Parte 5: Bulk Edit (3 min)**

13. Filter all equipment where `Vendor_Name` = "TBD"
14. Bulk edit: Change to "Pending Award"

**Parte 6: Generate Reports (7 min)**

15. Create report: "Procurement Status Report"
    - Columns: Tag, Description, PO_Number, Vendor_Name, Delivery_Date, Criticality
    - Grouped by: Vendor_Name
    - Sorted by: Delivery_Date
    - Export to Excel

16. Create report: "Critical Equipment List"
    - Filter: Criticality = "A-Critical"
    - Columns: Tag, Description, Installation_Zone, Vendor_Name, Delivery_Date
    - Export to PDF

**Tiempo estimado:** 35 minutos

**Entregables:**
- 5 custom properties creadas
- Excel import file
- Equipment data populated
- 2 reports generated (Excel y PDF)

**Criterios de evaluación:**
- Custom properties correctamente configuradas con validation (30%)
- Excel import exitoso sin errores (25%)
- Bulk edit ejecutado correctamente (15%)
- Reports generados con formato profesional (30%)

## Evaluación

### Preguntas de Evaluación

**Pregunta 1:** ¿Cuál es la principal diferencia entre el Spec Editor y el Data Manager?

a) Spec Editor es para 3D, Data Manager es para P&ID
b) Spec Editor define componentes disponibles, Data Manager gestiona datos de componentes insertados
c) Son la misma herramienta con diferente nombre
d) Spec Editor es solo para tuberías, Data Manager para equipos

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Spec Editor define componentes disponibles, Data Manager gestiona datos de componentes insertados

Explicación: Spec Editor trabaja con el CATÁLOGO (qué componentes puede usar), mientras Data Manager trabaja con INSTANCIAS (datos de componentes ya insertados en el proyecto).
</details>

**Pregunta 2:** Al crear una custom property tipo "List", ¿cuál es el principal beneficio?

a) Ocupa menos espacio en disco
b) Asegura consistencia de datos mediante valores predefinidos
c) Es más rápido de crear
d) No tiene ningún beneficio especial

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Asegura consistencia de datos mediante valores predefinidos

Explicación: Properties tipo List ofrecen dropdown con valores predefinidos, eliminando typos, asegurando consistencia, facilitando filtering y mejorando calidad de datos.
</details>

**Pregunta 3:** Al importar datos desde Excel al Data Manager, ¿qué columna es absolutamente crítica para el matching correcto?

a) Description
b) Tag Number
c) Drawing Number
d) Date Created

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Tag Number

Explicación: Tag Number es el unique identifier que Plant 3D usa para match filas de Excel con componentes en el proyecto. Sin Tag Number correcto, el import fallará.
</details>

**Pregunta 4:** ¿Qué característica nueva de Plant 3D 2026 permite auto-calcular valores de properties?

a) Bulk Edit
b) Calculated Properties (Formulas)
c) Data Validation
d) Excel Export

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Calculated Properties (Formulas)

Explicación: Plant 3D 2026 introdujo Calculated Properties que permiten crear formulas (ej: Total_Weight = Empty_Weight + Fluid_Weight) que se recalculan automáticamente.
</details>

**Pregunta 5:** ¿Por qué es importante realizar "Database Cleanup" periódicamente?

a) Para cambiar colores de componentes
b) Para eliminar datos huérfanos y mejorar performance
c) Para crear backups automáticos
d) Para validar pipe specs

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Para eliminar datos huérfanos y mejorar performance

Explicación: Database Cleanup elimina records de componentes deleted (datos huérfanos), compacta la database, mejora performance y mantiene integridad de datos.
</details>

## Resumen

En esta lección ha aprendido:

- ✅ Gestionar datos de componentes con Data Manager de Plant 3D 2026
- ✅ Crear custom properties adaptadas a necesidades específicas de proyecto
- ✅ Import/Export data desde/hacia Excel para integration con workflows
- ✅ Bulk editing para efficiency en proyectos grandes
- ✅ Data validation y quality control para integridad de información

El Data Manager transforma Plant 3D de una herramienta de diseño 3D a una plataforma de gestión de información de activos, permitiendo tracking completo desde procurement hasta operations.

## Próxima Lección

En la **Lección 5: Standards y Plant 3D Project Setup completo**, integrará todo lo aprendido para establecer estándares completos de proyecto, configurar layers, estilos, símbolos y crear templates reutilizables según normas ISO y ASME.

---

**Lección 4 de 30 - Módulo 1 de 6**
AutoCAD Plant 3D 2026 - Curso Avanzado
DISTMAH ATC - Authorized Training Center
