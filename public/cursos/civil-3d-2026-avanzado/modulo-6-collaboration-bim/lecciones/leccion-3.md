# Lección 3: Model Coordination con Navisworks

**Duración:** 1 hora
**Nivel:** Avanzado
**Objetivo:** Dominar Navisworks Manage para coordinación avanzada de modelos BIM de infraestructura

---

## Introducción a Navisworks Manage

Navisworks Manage es la herramienta líder para coordinación de modelos BIM, clash detection y revisión virtual de proyectos de construcción e infraestructura.

### Capacidades Principales

**1. Federación de Modelos**
- Combinar modelos de múltiples disciplinas
- Soporta 60+ formatos de archivo
- Sin límite de tamaño de modelo
- Navegación 3D ultrarrápida

**2. Clash Detection**
- Detección automática de interferencias
- Rules-based clash testing
- Reportes detallados
- Tracking de resoluciones

**3. 4D Simulation**
- Simulación de construcción
- Vinculación con schedule (MS Project, Primavera)
- Análisis de secuencia
- Identificación de conflictos logísticos

**4. Quantification**
- Extracción de cantidades desde modelo
- Material takeoff
- Costeo preliminar
- Integración con bases de datos

**5. Clash Avoidance**
- Prevención proactiva
- Workflows de coordinación
- Comunicación efectiva
- Documentación automática

---

## Federación de Modelos Civil 3D

### Exportar Civil 3D a Navisworks

**Método 1: Direct Export (NWC)**

```
En Civil 3D 2026:

1. File > Export > Export to Navisworks
2. Configurar opciones:
   ├── File Type: .nwc (Navisworks Cache)
   ├── Export Scope:
   │   ☑ Model Space
   │   ☐ Paper Space
   │   ☐ External References
   │
   ├── Object Types:
   │   ☑ Civil 3D Objects (Alignments, Surfaces, etc.)
   │   ☑ AutoCAD Entities
   │   ☑ Feature Lines
   │   ☑ Corridors (as solids)
   │
   ├── Geometry Resolution:
   │   ├── Tessellation: Fine (for accuracy)
   │   └── Curve Faceting: High
   │
   └── Properties:
       ☑ Export Object Data
       ☑ Export Layer Information
       ☑ Export Materials

3. Save as: Highway_Model.nwc
```

**Método 2: Publish 3D PDF (para stakeholders)**

```
File > Export > 3D PDF
├── Template: Navisworks Compatible
├── Include: All Civil 3D objects
└── Output: Highway_Review.pdf
```

**Optimización del Export:**

```
Best Practices:
├── Purge DWG antes de exportar
├── Simplificar geometría compleja innecesaria
├── Usar feature lines para corredores (más ligero)
├── Dividir modelos grandes (por segmento)
└── Export solo layers necesarios
```

### Crear Modelo Federado

**En Navisworks Manage:**

```
PASO 1: Append Models

File > Append...
├── Highway-Corridor.nwc (Civil 3D)
├── Bridge-Structure.nwc (Revit)
├── Drainage-Network.nwc (Civil 3D)
└── Utilities.nwc (Revit/Civil 3D)

PASO 2: Coordinar Sistemas

Tools > Options > File Readers
├── DWG/DXF:
│   ├── Units: Meters
│   ├── Convert to Z-up: Yes
│   └── Coordinates: Shared (project base point)
│
└── RVT/NWC:
    ├── Convert: Yes
    ├── Coordinates: Project
    └── Levels: Preserve

PASO 3: Verificar Alineación

View > Orient > Plan
├── Visual inspection
├── Measure distances between known points
└── Compare with survey control points

PASO 4: Guardar Modelo Federado

File > Save As...
├── Format: .nwf (Navisworks File Set)
├── Name: Highway_Project_Federated.nwf
└── Referencias mantienen links a archivos fuente
```

---

## Clash Detection Avanzada

### Configurar Clash Tests

**Clash Detective Tool:**

```
Home > Clash Detective

Test 1: Drainage vs Structural Foundations
├── Selection A:
│   ├── Search Set: "Drainage Pipes"
│   ├── Category: MEP
│   ├── Type: Pipe
│   └── Diameter: All
│
├── Selection B:
│   ├── Search Set: "Structural Foundations"
│   ├── Category: Structural
│   ├── Type: Foundation
│   └── Material: Concrete
│
├── Test Settings:
│   ├── Type: Hard (geometry intersection)
│   ├── Tolerance: 0mm
│   ├── Ignore Self-Intersections: Yes
│   └── Active Level: All Levels
│
└── Run Test
```

**Search Sets Comunes:**

```
Search Sets para Infraestructura:

1. "Drainage Network"
   - Category: MEP, Type: Pipe
   - Property: System Type = "Storm Drainage"

2. "Roadway Structure"
   - Category: Civil, Type: Corridor
   - Layer: C-ROAD-*

3. "Utilities - Existing"
   - Property: Status = "Existing"
   - Property: To Remain = "Yes"

4. "Bridge Beams"
   - Category: Structural
   - Type: Beam
   - Property: Structural Material = "Steel"

5. "Retaining Walls"
   - Type: Wall
   - Property: Function = "Retaining"
```

### Ejecutar Clash Tests

**Batch Testing:**

```
Configure Multiple Tests:

Test 1: Drainage vs Foundations (Critical)
Test 2: Utilities vs Corridor (High)
Test 3: Proposed vs Existing (Critical)
Test 4: Vertical Clearances (Medium)
Test 5: Horizontal Clearances (Low)

Run All Tests:
├── Clash Detective > Run All Tests
├── Processing time: 5-30 min (depending on model size)
├── Results:
│   ├── Total Clashes: 347
│   ├── Critical: 89
│   ├── High: 156
│   ├── Medium: 78
│   └── Low: 24
│
└── Export Report: clash_report_2024-03-15.html
```

**Resultados de Clash:**

```
Clash ID: CLH-00045
├── Test: Drainage vs Foundations
├── Status: Active
├── Severity: Critical
├── Date Found: 2024-03-15
├── Location: Station 2+450, Offset +3.2m
├── Grid Location: E-5
├── Approved By: [Not Yet]
│
├── Object 1:
│   ├── File: Drainage-Network.nwc
│   ├── Layer: C-STRM-PIPE
│   ├── Type: 600mm Dia Storm Pipe
│   ├── Elevation: -4.50m
│   └── GUID: {A1B2C3D4-E5F6-...}
│
├── Object 2:
│   ├── File: Bridge-Structure.nwc
│   ├── Type: Concrete Footing
│   ├── Dimensions: 3.0m x 2.0m x 1.5m
│   ├── Top Elevation: -3.80m
│   └── GUID: {Z9Y8X7W6-V5U4-...}
│
├── Clash Point:
│   ├── X: 1234.567
│   ├── Y: 5678.901
│   ├── Z: -4.20
│   └── Clash Volume: 0.35 m³
│
└── Comments:
    └── "Pipe conflicts with footing - requires rerouting"
```

### Gestión de Clashes

**Workflow de Resolución:**

```
PASO 1: Review Clashes
├── Filter por severity (Critical primero)
├── Group por location (resolver por zona)
├── Assign a responsables
└── Set due dates

PASO 2: Classify Clashes
├── Approved: Real clash, requires action
├── Reviewed: Clash acknowledged, action planned
├── Resolved: Clash fixed in model
├── Active: Pending review
└── Ignored: False positive or acceptable

PASO 3: Document Resolution
├── Resolution Method:
│   1. Modify Model A
│   2. Modify Model B
│   3. Coordinate both models
│   4. Accept as-is (with justification)
│
├── Responsible Party: Civil Team
├── Target Date: 2024-03-20
├── Cost Impact: $8,500 (pipe rerouting)
└── Schedule Impact: 2 days

PASO 4: Verify Resolution
├── Updated models uploaded
├── Re-run clash test
├── Confirm clash eliminated
└── Close clash
```

**Clash Avoidance Strategies:**

```
Preventive Measures:

1. Early Coordination
   - Federate models desde fase 30%
   - Regular clash tests (weekly)
   - Coordination meetings

2. Clear Coordination Zones
   - Define spatial envelopes
   - Reserve corridors for utilities
   - Minimum clearances established

3. Responsibility Matrix
   - Civil: Primary horizontal alignment
   - Structural: Foundation locations
   - MEP: Flexible routing within constraints

4. Standards and Guidelines
   - Company-specific clash tolerances
   - Priority system for disciplines
   - Resolution protocols
```

---

## 4D Construction Simulation

### Vincular Modelo con Schedule

**Preparar Schedule:**

```
MS Project / Primavera:
├── Import to Navisworks: File > Append > Primavera / MS Project
├── Task List:
│   ├── T001: Site Preparation (Week 1-2)
│   ├── T002: Earthwork Segment A (Week 3-8)
│   ├── T003: Drainage Installation (Week 9-12)
│   ├── T004: Pavement Base (Week 13-16)
│   ├── T005: Pavement Surface (Week 17-18)
│   └── T006: Final Striping (Week 19)
│
└── Cada task tiene:
    ├── Start Date
    ├── End Date
    ├── Duration
    ├── Dependencies
    └── Resources
```

**Linkear Geometría a Tasks:**

```
TimeLiner (Navisworks):

Task T002: Earthwork Segment A
├── Link to Geometry:
│   ├── Search Set: "Segment A Earthwork"
│   ├── Selection: All corridor sections Sta 0+000 to 0+500
│   └── Appearance:
│       ├── Before Start: Hidden (transparent)
│       ├── During Task: Orange (construction)
│       └── After End: Green (completed)
│
└── Dependencies:
    └── Must complete T001 first
```

**Crear Simulación 4D:**

```
TimeLiner > Simulate

Settings:
├── Play Speed: 1 day = 1 second
├── Loop: Yes
├── Camera: Follow construction
└── Overlay: Show date and progress %

Simulate Construction:
├── Week 1-2: Site clearing visible
├── Week 3: Earthwork begins (orange)
├── Week 8: Earthwork completes (green)
├── Week 9: Drainage appears (blue)
└── Week 19: Complete project visible

Export:
├── Format: AVI video
├── Resolution: 1920x1080
├── Duration: 3 minutes
└── Use: Client presentations, planning reviews
```

**Beneficios de 4D:**

```
1. Secuencia Verification
   - Visualizar orden de construcción
   - Identificar conflictos logísticos
   - Optimizar schedule

2. Stakeholder Communication
   - Presentaciones visuales impactantes
   - Easier para no-técnicos entender
   - Client buy-in mejorado

3. Construction Planning
   - Equipment access planning
   - Temporary works visualization
   - Safety planning
```

---

## Quantification Avanzada

### Configurar Quantification

**Quantification Workbook:**

```
Tools > Quantification Workbook

Categories:
├── Earthwork
│   ├── Cut (m³)
│   ├── Fill (m³)
│   └── Balance
│
├── Pavement
│   ├── Subbase (m²)
│   ├── Base Course (m²)
│   └── Surface Course (m²)
│
├── Drainage
│   ├── Storm Pipe (linear m by diameter)
│   ├── Manholes (each)
│   └── Catch Basins (each)
│
└── Structures
    ├── Concrete (m³ by type)
    ├── Rebar (tons)
    └── Structural Steel (tons)
```

**Extract Quantities:**

```
PASO 1: Define Resources
├── Resource Name: "Concrete - Footing"
├── Unit: Cubic Meters (m³)
├── Unit Cost: $250/m³
└── Selection: All footing elements

PASO 2: Run Quantification
├── Calculate volumes
├── Group by type/category
├── Apply unit costs
└── Generate totals

PASO 3: Export Report
├── Format: Excel
├── Include:
│   ├── Item descriptions
│   ├── Quantities
│   ├── Units
│   ├── Unit costs
│   ├── Extended costs
│   └── Location information
│
└── Output: Quantity_Takeoff_Report.xlsx
```

---

## Revisión Virtual de Construcción

### Configurar Viewpoints

**Saved Viewpoints:**

```
View > Save Viewpoint

Viewpoints Típicos:
├── VP01: Overview - Entire Project
├── VP02: Segment A - Detail
├── VP03: Bridge - Structural Detail
├── VP04: Drainage Network - Underground
├── VP05: Utilities Coordination - Critical Zone
└── VP06: As-Built Comparison

Cada viewpoint guarda:
├── Camera position
├── Visibility settings (layers on/off)
├── Sectioning planes
├── Appearance settings
└── Redline markups
```

### Markup y Redline

**Crear Redlines:**

```
Review > Redline Tools

Tools:
├── Arrow - Point to specific element
├── Cloud - Highlight area
├── Text - Add comment
├── Line - Measure/indicate
├── Tag - Label element
└── Stamp - Approved/Rejected

Workflow:
1. Navigate to viewpoint
2. Add redline markup
3. Attach comment
4. Assign to responsible party
5. Save and distribute
```

---

## Exportación de Reportes

### Clash Reports

```
Clash Detective > Reports

HTML Report Contents:
├── Executive Summary
│   ├── Total clashes: 347
│   ├── By severity
│   └── By status
│
├── Detailed Clash List
│   ├── Clash ID
│   ├── Location
│   ├── Objects involved
│   ├── Screenshot
│   └── Comments
│
└── Resolution Tracking
    ├── Resolved: 215 (62%)
    ├── In Progress: 89 (26%)
    └── Active: 43 (12%)

Export: clash_report_final.html
```

---

## Resumen de la Lección

Has aprendido:

✅ **Navisworks Fundamentals**
- Federación de modelos
- Navegación 3D avanzada
- Configuración de proyectos

✅ **Clash Detection**
- Configurar clash tests
- Search sets y rules
- Resolución de clashes

✅ **4D Simulation**
- Vincular modelo con schedule
- Simulación de construcción
- Exportar videos

✅ **Quantification**
- Extraer cantidades
- Costeo preliminar
- Reportes detallados

✅ **Virtual Review**
- Viewpoints guardados
- Markups y redlines
- Comunicación efectiva

---

## Siguiente Paso

En la **Lección 4: Export to IFC/LandXML + Conclusión del Curso**, aprenderás a:
- Exportar modelos a formato IFC
- LandXML para intercambio civil
- Best practices de intercambio BIM
- **CONCLUSIÓN COMPLETA DEL CURSO**

[Continuar a Lección 4 (FINAL) →](./leccion-4.md)

---

**DISTMAH Advanced Technical Center (ATC)**
*Coordinación BIM avanzada desde 2024*
