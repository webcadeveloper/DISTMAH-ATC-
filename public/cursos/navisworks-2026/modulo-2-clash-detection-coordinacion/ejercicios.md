# Ejercicios Prácticos - Módulo 2: Clash Detection y Coordinación BIM

Este documento contiene 6 ejercicios prácticos integradores que cubren todo el contenido del Módulo 2 de Navisworks 2026. Cada ejercicio corresponde a una lección del módulo y progresa en complejidad.

---

## Ejercicio 1: Fundamentos de Clash Detection (Lección 7)

**Duración:** 45 minutos
**Nivel:** Básico
**Archivos necesarios:** `Hospital_Federated.nwf` (modelo federado de 5 pisos con ARQ, STRUCT, MEP)

### Objetivo

Configurar y ejecutar clash tests básicos entre disciplinas, interpretar resultados, y aplicar status management workflow.

### Escenario

Usted ha sido contratado como BIM Coordinator en un proyecto hospitalario de 150,000 SF. Ha recibido modelos federados en fase de Construction Documents (90% complete). Su primera tarea es ejecutar clash detection inicial entre Estructura y Sistemas MEP.

### Tareas

**Parte A: Preparación del Modelo (10 min)**

1. Abrir Navisworks Manage 2026
2. Cargar archivo federado: `Hospital_Federated.nwf`
3. Verificar que todas las disciplinas estén visibles:
   - Arquitectura (paredes, pisos, techos)
   - Estructura (vigas, columnas, losas)
   - HVAC (ductos, equipos)
   - Plomería (tuberías, accesorios)
   - Eléctrico (conduit, cable tray)
   - Fire Protection (sprinklers)
4. Tomar screenshot del modelo completo

**Parte B: Crear Selection Sets (15 min)**

5. Abrir Selection Sets panel
6. Crear los siguientes search sets:

**SET_Structure_All:**
- Properties: Category = "Structural Framing" OR "Structural Columns" OR "Structural Foundations" OR "Floors"
- Verificar count: ~350 elementos estructurales

**SET_MEP_All:**
- Properties: Category = "Ducts" OR "Pipes" OR "Conduits" OR "Cable Trays" OR "Mechanical Equipment" OR "Plumbing Fixtures" OR "Electrical Equipment"
- Verificar count: ~2,500 elementos MEP

**SET_HVAC_Ductwork:**
- Properties: Category = "Ducts" OR "Duct Fittings" OR "Duct Accessories"
- Verificar count: ~800 elementos

**SET_Structure_Steel:**
- Properties: Category = "Structural Framing" AND Material = "Steel"
- Verificar count: ~180 vigas

7. Tomar screenshot del Selection Sets panel mostrando los 4 sets creados

**Parte C: Configurar Clash Tests (10 min)**

8. Abrir Clash Detective
9. Crear Test #1:
   - Name: "STRUCT-MEP_Hard_02in"
   - Type: Hard (Conservative)
   - Tolerance: 0.02' (2 pulgadas / 1/4")
   - Selection A: SET_Structure_All
   - Selection B: SET_MEP_All
   - Self-Intersect: OFF

10. Crear Test #2:
    - Name: "STRUCT-HVAC_Hard_01in"
    - Type: Hard (Conservative)
    - Tolerance: 0.01' (1 pulgada / 1/8")
    - Selection A: SET_Structure_Steel
    - Selection B: SET_HVAC_Ductwork
    - Self-Intersect: OFF

**Parte D: Ejecutar Tests y Analizar Resultados (10 min)**

11. Run ambos tests (botón Run)
12. Documentar resultados en tabla:

| Test Name | Total Clashes | Tolerance | Execution Time |
|-----------|---------------|-----------|----------------|
| STRUCT-MEP_Hard_02in | __________ | 0.02' | _______ seg |
| STRUCT-HVAC_Hard_01in | __________ | 0.01' | _______ seg |

13. En Test #1 (STRUCT-MEP), sort results por Distance (mayor penetración primero)
14. Identificar los 3 clashes más severos:
    - Clash #1: Distance = _______, Objects = _______________________, Grid Location = _______
    - Clash #2: Distance = _______, Objects = _______________________, Grid Location = _______
    - Clash #3: Distance = _______, Objects = _______________________, Grid Location = _______

15. Navegar a cada uno de los 3 clashes (click en Results), tomar screenshot del viewpoint automático

### Entregables

- [ ] 4 screenshots: Modelo completo, Selection Sets panel, 3 clash viewpoints
- [ ] Tabla de resultados completada
- [ ] Archivo NWF guardado: `Hospital_Coordinated_Ejercicio1.nwf`

---

## Ejercicio 2: Configuración Avanzada de Clash Tests (Lección 8)

**Duración:** 60 minutos
**Nivel:** Intermedio
**Archivos necesarios:** `DataCenter_Federated.nwf` (data center con alta densidad MEP)

### Objetivo

Implementar test matrix strategy completa, configurar clash rules para eliminar false positives, y aplicar grouping avanzado de clashes.

### Escenario

Data center de 80,000 SF con 6 disciplinas (ARQ, STRUCT, HVAC, PLUMB, ELEC, FP). Alta densidad MEP en server rooms y mechanical spaces. Necesita configurar coordination workflow profesional con múltiples tests y filtering.

### Tareas

**Parte A: Test Matrix Strategy (20 min)**

1. Diseñar test matrix para todas las combinaciones críticas:

| Test Name | Selection A | Selection B | Type | Tolerance |
|-----------|-------------|-------------|------|-----------|
| STRUCT-HVAC | Structure | HVAC | Hard | 0.02' |
| STRUCT-PLUMB | Structure | Plumbing | Hard | 0.02' |
| STRUCT-ELEC | Structure | Electrical | Hard | 0.01' |
| HVAC-PLUMB | HVAC | Plumbing | Hard | 0.02' |
| HVAC-ELEC | HVAC | Electrical | Hard | 0.02' |
| PLUMB-ELEC | Plumbing | Electrical | Hard | 0.01' |
| ALL-FireProt | All MEP | Fire Protection | Hard | 0.01' |

2. Crear selection sets para cada disciplina:
   - SET_Structure, SET_HVAC, SET_Plumbing, SET_Electrical, SET_FireProtection

3. Configurar los 7 tests según matriz

**Parte B: Clash Rules para False Positives (25 min)**

4. Analizar resultados iniciales y identificar false positive patterns
5. Configurar Rules para cada test:

**Regla 1: Excluir penetraciones intencionales**
- IF Item1.Category = "Structural Framing" AND Item2.Category = "Mechanical Equipment" AND Item2.Name contains "Hanger"
- THEN: Ignore clash
- Razón: Hangers se conectan intencionalmente a vigas

**Regla 2: Excluir mismo assembly**
- IF Item1.Assembly_Code = Item2.Assembly_Code
- THEN: Ignore clash
- Razón: Componentes del mismo assembly pueden tocarse

**Regla 3: Excluir objetos pequeños**
- IF Item1.Volume < 0.5 CF OR Item2.Volume < 0.5 CF
- THEN: Ignore clash
- Razón: Componentes muy pequeños (tornillos, soportes) generan ruido

6. Documentar impacto de rules:

| Test Name | Before Rules | After Rules | % Reduction |
|-----------|--------------|-------------|-------------|
| STRUCT-HVAC | __________ | __________ | __________% |
| HVAC-ELEC | __________ | __________ | __________% |

**Parte C: Clash Grouping (15 min)**

7. Agrupar clashes por patrones:
   - Group "Duct-Beam-L3": Todos los clashes entre ductwork y beams en Level 3
   - Group "Pipe-Conduit-MechRoom": Clashes en mechanical room
   - Group "Critical-Structural": Penetraciones >6" en estructura

8. Para cada grupo:
   - Assign responsibility (HVAC Coordinator, Plumbing Lead, etc.)
   - Add group comment explicando resolución strategy
   - Set status: NEW ’ ACTIVE

### Entregables

- [ ] Test matrix completada (7 tests configurados)
- [ ] Documento de rules con justificaciones
- [ ] Tabla de impacto de rules (before/after counts)
- [ ] 3 grupos de clashes creados con assignments
- [ ] Report HTML exportado: `DataCenter_ClashReport_Grouped.html`

---

## Ejercicio 3: Clash Reporting y Workflow (Lección 9)

**Duración:** 45 minutos
**Nivel:** Intermedio
**Archivos necesarios:** Resultados del Ejercicio 2

### Objetivo

Generar reportes profesionales, implementar status management workflow, y crear tracking system para coordination meetings.

### Escenario

Ha ejecutado clash tests (Ejercicio 2) y tiene 487 clashes activos. Necesita preparar reportes para coordination meeting del miércoles, implementar tracking system, y documentar resoluciones.

### Tareas

**Parte A: Generar Reportes Profesionales (15 min)**

1. **HTML Report - Executive Summary:**
   - Report Tab > Current Test: "All Tests"
   - Type: HTML
   - Options:
     - Include: Comments, Status, Assigned To, Viewpoints (thumbnails)
     - Summary: Executive summary ON
     - Grouping: By Status
   - Customize HTML template:
     - Add project logo
     - Add project name: "Data Center Coordination"
     - Add date y coordinator name
   - Write Report: `ClashReport_Executive_2026-03-15.html`

2. **XML Export - Data Analysis:**
   - Format: XML
   - Include all fields (complete data)
   - Write Report: `ClashData_2026-03-15.xml`

3. **Excel Export - Tracking:**
   - Export to CSV
   - Import to Excel
   - Create pivot table: Clashes by Discipline Pair
   - Create chart: Bar chart de clash distribution

**Parte B: Status Management Workflow (20 min)**

4. Revisar todos los clashes NEW (primer test run)
5. Aplicar status workflow a 20 clashes sample:

**Sample Clashes (seleccionar 20):**
- 5 clashes: NEW ’ ACTIVE (confirmed real clashes)
  - Add comment: "Confirmed clash, assigned to [discipline] for resolution"
  - Assign To: Responsible party
- 5 clashes: NEW ’ APPROVED (false positives)
  - Add comment: "Approved - modeling tolerance, no action required"
- 5 clashes: NEW ’ REVIEWED (require discussion)
  - Add comment: "Requires coordination meeting discussion - architectural impact"
- 5 clashes: Dejar como NEW (pending initial review)

6. Documentar status distribution:

| Status | Count | % of Total |
|--------|-------|------------|
| New | __________ | __________% |
| Active | __________ | __________% |
| Reviewed | __________ | __________% |
| Approved | __________ | __________% |

**Parte C: Coordination Meeting Preparation (10 min)**

7. Crear agenda de coordination meeting:
   - Top 10 critical clashes (>6" penetration)
   - 20 high priority clashes (4"-6" penetration)
   - Summary statistics (total, by discipline, by status)

8. Preparar tracking spreadsheet:
   - Columns: Clash ID, Description, Discipline, Status, Assigned To, Due Date, Resolution Notes
   - Populate con top 30 clashes

### Entregables

- [ ] HTML Report profesional con branding
- [ ] XML data file para analytics
- [ ] Excel workbook con pivot table y charts
- [ ] Coordination meeting agenda (1 page)
- [ ] Tracking spreadsheet con 30 clashes prioritized
- [ ] Screenshots de 5 clashes con comments añadidos

---

## Ejercicio 4: Model Coordination Workflows (Lección 10)

**Duración:** 60 minutos
**Nivel:** Avanzado
**Archivos necesarios:** Modelos actualizados post-coordination

### Objetivo

Simular coordination meeting completo, generar RFIs desde clashes, y documentar resolution workflow.

### Escenario

Es miércoles 9:00 AM - Coordination meeting semanal. Tiene 487 clashes activos de ejercicios anteriores. Necesita facilitar meeting, asignar responsabilidades, generar RFIs, y tracking follow-up.

### Tareas

**Parte A: Coordination Meeting Simulation (30 min)**

1. **Meeting Setup:**
   - Proyectar Navisworks en pantalla
   - Abrir tracking spreadsheet
   - Tener agenda lista

2. **Review Top 10 Critical Clashes (20 min):**

Para cada clash:
- Navigate to clash viewpoint en Navisworks
- Discuss con "team" (simulado):
  - ¿Quién es responsable de resolverlo?
  - ¿Cuál es estrategia de resolución? (re-route, relocate, structural penetration)
  - ¿Cuánto tiempo tomará?
  - ¿Hay architectural o owner approval requerido?
- Update status:
  - Si resolution clara ’ ACTIVE, assign, add comment con strategy
  - Si requiere más info ’ REVIEWED, generate RFI
  - Si aceptable ’ APPROVED con justification
- Set due date (típicamente 1-2 semanas)

**Documentar resoluciones:**

| Clash ID | Objects | Resolution Strategy | Assigned To | Due Date | RFI Required |
|----------|---------|---------------------|-------------|----------|--------------|
| 0042 | Duct vs Beam | Re-route duct 18" north | HVAC Coord | 2026-03-29 | No |
| 0087 | Pipe vs Column | Structural penetration | Structural Eng | 2026-04-05 | Yes - RFI #145 |
| 0123 | Conduit vs Duct | Lower conduit 6" | Electrical | 2026-03-22 | No |
| (continuar para 10 clashes) |

**Parte B: Generar RFIs desde Clashes (15 min)**

3. Para clashes que requieren RFI (típicamente 2-3 de cada 10):

**RFI Template:**
```
RFI #: 145
Date: 2026-03-15
Project: Data Center
From: BIM Coordinator
To: Structural Engineer

Subject: Structural Penetration Approval Required - Pipe through Column

Description:
Clash ID 0087 - 6" plumbing main (domestic water supply) conflicts with
concrete column C-12 at Level 2, Grid Location D-4.

Proposed Solution:
Core drill 8" diameter penetration through column at elevation 112'-6"
to accommodate 6" pipe + 1" sleeve clearance.

Penetration Details:
- Column size: 24" x 24" reinforced concrete
- Penetration location: 12" from column face (centerline)
- Pipe diameter: 6"
- Sleeve diameter: 8"
- Elevation: 112'-6" (mid-height of column)

Question:
Is proposed penetration structurally acceptable? If not, what alternative
solutions are recommended?

Attachments:
- Navisworks clash viewpoint screenshot
- Structural plan showing column location
- MEP plan showing pipe routing

Response Required By: 2026-03-29
```

4. Crear RFIs para 3 clashes críticos

**Parte C: Post-Meeting Follow-up (15 min)**

5. Update tracking spreadsheet con todas las decisiones del meeting
6. Export lista de assignments:
   - HVAC: 15 clashes assigned
   - Plumbing: 12 clashes assigned
   - Electrical: 8 clashes assigned
   - Structural: 3 RFIs pending response

7. Crear follow-up email template:
```
Subject: Coordination Meeting Minutes - 2026-03-15

Attendees: [List]

Summary:
- Reviewed 30 clashes (10 critical, 20 high priority)
- 28 clashes assigned for resolution (see attached spreadsheet)
- 3 RFIs generated (RFI #145, #146, #147)
- 2 clashes approved as acceptable tolerance

Action Items:
- HVAC: Resolve 15 assigned clashes by 2026-03-29
- Plumbing: Resolve 12 assigned clashes by 2026-03-29
- Electrical: Resolve 8 assigned clashes by 2026-03-22
- Structural: Respond to RFIs #145-147 by 2026-03-22

Next Meeting: Wednesday, March 22, 2026 at 9:00 AM

Attachments:
- Clash tracking spreadsheet (updated)
- RFI packages (3)
- Clash report HTML
```

### Entregables

- [ ] Tabla de resoluciones completada (10 clashes documentados)
- [ ] 3 RFIs generados con screenshots y details
- [ ] Tracking spreadsheet actualizado
- [ ] Meeting minutes email template
- [ ] Assignment summary por discipline

---

## Ejercicio 5: Clash Avoidance Strategies (Lección 11)

**Duración:** 60 minutos
**Nivel:** Avanzado
**Archivos necesarios:** Nuevo proyecto en fase DD

### Objetivo

Implementar estrategias proactivas de clash avoidance: design rules, coordination zones, LOD requirements, y BIM Execution Plan.

### Escenario

Nuevo proyecto de edificio de oficinas (200,000 SF, 12 pisos) en fase Design Development (40% complete). En lugar de enfoque reactivo (clash detection después), implementar clash avoidance strategies desde el inicio.

### Tareas

**Parte A: Definir Coordination Zones (20 min)**

1. Analizar planta típica del edificio
2. Identificar y mapear coordination zones:

**Zone A - Core / High Density (15% area):**
- Mechanical rooms (pisos 1, 6, roof)
- Electrical rooms
- Vertical shafts (MEP risers)
- Elevator machine rooms
- Tolerance: 1.0" hard, 6.0" clearance
- LOD: 400 (fabrication)
- Coordination frequency: Weekly

**Zone B - Typical Floor / Medium Density (60% area):**
- Office ceiling spaces
- Corridors
- Conference rooms
- Tolerance: 2.0" hard, 8.0" clearance
- LOD: 350 (design coordination)
- Coordination frequency: Bi-weekly

**Zone C - Perimeter / Low Density (25% area):**
- Perimeter offices con exterior walls
- Storage, restrooms (minimal MEP)
- Tolerance: 3.0" hard, 12.0" clearance
- LOD: 300 (schematic)
- Coordination frequency: Monthly

3. Crear zone map:
   - Overlay colored zones sobre planta arquitectónica
   - Legend mostrando tolerance y LOD requirements
   - Export como PDF

**Parte B: Establecer Design Rules (25 min)**

4. Documentar design rules por sistema:

**MEP Routing Hierarchy:**
```
1. Structure (no se mueve)
2. HVAC ductwork (voluminoso, primera prioridad MEP)
3. Fire protection (código-driven)
4. Plumbing (flexible)
5. Electrical (más flexible)
```

**Elevation Assignment Strategy (Ceiling Space):**
```
Top level (deck - 6"): HVAC supply ductwork
Mid level (deck - 18"): Plumbing mains, fire protection
Lower level (deck - 30"): Electrical conduit, HVAC return
```

**Standard Clearances:**
```
- Structure to MEP: 6" minimum (hanger space)
- MEP system to system: 4" minimum (installation tolerance)
- Equipment maintenance: 36"-48" per manufacturer spec
- NEC working space: 36"-42" per voltage (Article 110.26)
```

**Código Compliance Requirements:**
```
- NEC 110.26: Electrical panel working space
- IPC 305.4: Plumbing cleanout access 24"
- NFPA 13: Sprinkler deflector to structure 6"
- OSHA 1910.22: Overhead clearance 7'-0"
```

5. Crear design rules document (2-3 páginas)

**Parte C: LOD Requirements Matrix (15 min)**

6. Definir LOD requirements por fase:

| Phase | Architectural | Structural | HVAC | Plumbing | Electrical | Fire Prot |
|-------|---------------|-----------|------|----------|-----------|----------|
| DD (60%) | 300 | 300 | 300 | 200 | 200 | 200 |
| CD (90%) | 350 | 350 | 350 | 350 | 350 | 350 |
| Pre-Con | 350 | 400 (shop dwg) | 400 | 400 | 400 | 400 |

7. Para cada LOD level, documentar expectations:
   - LOD 300: Geometry precisa, size/location/orientation
   - LOD 350: LOD 300 + connections, penetrations, supports
   - LOD 400: Fabrication-ready, all assembly details

### Entregables

- [ ] Coordination zone map (planta con colored zones)
- [ ] Design rules document (2-3 páginas)
- [ ] LOD requirements matrix con definitions
- [ ] Clearance requirements summary table
- [ ] Routing hierarchy diagram

---

## Ejercicio 6: Advanced Clash Techniques (Lección 12)

**Duración:** 90 minutos
**Nivel:** Experto
**Archivos necesarios:** Proyecto completo con schedule 4D

### Objetivo

Aplicar técnicas avanzadas: 4D clash detection, vertical clearance testing, code compliance automation, y analytics dashboard.

### Escenario

Hospital project (300,000 SF) en pre-construction phase. Requiere: 4D coordination para construction sequencing, vertical clearance validation para ceiling heights, NEC compliance checking, y executive dashboard para project management.

### Tareas

**Parte A: 4D Time-Based Clash Detection (30 min)**

1. **Setup 4D Simulation:**
   - Import construction schedule (Primavera P6 o MS Project)
   - Link model objects a schedule tasks:
     - Phase 1 (Weeks 1-8): Foundations
     - Phase 2 (Weeks 9-16): Structure Level 1-2
     - Phase 3 (Weeks 17-24): MEP Rough-in Level 1
     - Phase 4 (Weeks 25-32): Structure Level 3-4
   - Simulate construction sequence en TimeLiner

2. **Configure 4D Clash Tests:**

**Test 1: Temporary Shoring vs Permanent MEP**
- Selection A: SET_Temporary_Shoring (posts para concrete formwork)
- Selection B: SET_MEP_RoughIn_L1
- Time Range: Weeks 10-14 (overlap period)
- Type: Hard, Tolerance: 0.0'

**Test 2: Prefab Rigging Path vs Installed Systems**
- Selection A: SET_Prefab_MEP_Racks (60' long assemblies)
- Selection B: SET_Structure_Installed (beams erected Weeks 9-16)
- Time Range: Week 18 (prefab installation date)
- Type: Hard, Tolerance: 0.0'

3. Run 4D tests, document temporal clashes detected
4. Propose sequencing adjustments para avoid conflicts

**Parte B: Vertical Clearance Testing (20 min)**

5. **Model Clearance Planes:**
   - En Revit (o en Navisworks via Generic Model):
     - Create "Clearance_Plane_9ft" en office spaces
     - Elevation: Finished Floor + 9'-0"
     - Create "Clearance_Plane_8ft" en corridors
     - Elevation: Finished Floor + 8'-0"

6. **Configure Clearance Test:**
   - Name: "Vertical-Clearance-9ft-Offices"
   - Type: Hard
   - Tolerance: 0.00"
   - Selection A: SET_ClearancePlanes_9ft
   - Selection B: SET_AllOverheadSystems (ductwork, piping, structure, lighting)

7. Run test, identify clearance violations
8. For each violation, calculate actual available height:
   - Actual Height = Finished Ceiling Elevation - Finished Floor
   - Shortfall = 9'-0" - Actual Height

**Parte C: NEC Code Compliance Testing (20 min)**

9. **Model NEC Working Spaces:**
   - Identify all electrical panels (45 panels total)
   - For each panel, model working space zone:
     - Depth: 42" (208/480V típico)
     - Width: 30" o panel width (mayor)
     - Height: 6'-6"
   - Place zones delante de each panel

10. **Configure Compliance Test:**
    - Name: "NEC-110.26-WorkingSpace-Compliance"
    - Type: Hard
    - Tolerance: 0.00"
    - Selection A: SET_NEC_WorkingSpaces
    - Selection B: SET_AllObstructions (walls, equipment, piping, ductwork)

11. Run test, document violations:
    - Panel ID, Obstruction type, Penetration depth
    - Generate compliance report HTML

**Parte D: Analytics Dashboard Creation (20 min)**

12. **Export Clash Data:**
    - Export all clash data to XML
    - Import to Excel

13. **Create Dashboard:**

**KPI Cards:**
- Total Active Clashes: ______
- Resolution Rate this week: ______%
- Average Clash Age: ______ days
- Estimated Weeks to Zero: ______

**Charts:**
- Burndown chart (total clashes over time) - line chart
- Status distribution (stacked bar) - shows New/Active/Reviewed/Resolved
- Clashes by Discipline Pair (pie chart) - HVAC-STRUCT, PLUMB-ELEC, etc.
- Resolution velocity (bar chart) - clashes resolved per week

14. Format dashboard professionally:
    - Project logo
    - Traffic light indicator (Green/Yellow/Red project health)
    - Executive summary text box

### Entregables

- [ ] 4D clash report con temporal conflicts identified
- [ ] Sequencing adjustment recommendations
- [ ] Vertical clearance test results con violations list
- [ ] NEC compliance report HTML
- [ ] Excel analytics dashboard (with charts and KPIs)
- [ ] Executive summary (1 page) del overall coordination status

---

## Proyecto Integrador Final

**Duración:** 4-6 horas
**Nivel:** Experto

### Escenario

Data center de 150,000 SF, $200M USD budget, 18 meses construction schedule. Usted es Senior BIM Coordinator responsable por entire coordination workflow desde DD phase hasta closeout.

### Deliverables Completos

1. **BIM Execution Plan** (10-15 páginas):
   - Project information
   - BIM goals y uses
   - Roles y responsibilities matrix
   - LOD requirements matrix
   - Clash detection protocol (test matrix, tolerances, meeting schedule)
   - Deliverables timeline

2. **Clash Detection Setup:**
   - 20+ clash tests configurados (full test matrix)
   - Rules implementadas para false positive reduction
   - Selection sets organizados
   - Grouping strategy

3. **Coordination Workflow:**
   - Weekly coordination meeting templates
   - RFI generation workflow
   - Status management procedures
   - Escalation protocols

4. **Clash Avoidance Strategy:**
   - Coordination zones map
   - Design rules document
   - Clearance requirements
   - Code compliance checklist

5. **Analytics y Reporting:**
   - Weekly HTML clash reports (4 weeks)
   - Excel dashboard con KPIs tracking
   - Executive summary presentations
   - Lessons learned document

6. **Advanced Techniques:**
   - 4D clash detection setup
   - Vertical clearance testing
   - Code compliance automation
   - Predictive analytics (weeks to zero calculation)

### Criterios de Evaluación

- **Completeness** (30%): Todos los deliverables incluidos
- **Technical Accuracy** (25%): Tests configurados correctamente, tolerances apropiadas
- **Professional Quality** (20%): Reportes formateados profesionalmente, clear documentation
- **Workflow Efficiency** (15%): Automation implementada, batch processing utilizado
- **Strategic Thinking** (10%): Clash avoidance strategies bien diseñadas, proactive approach

**Calificación mínima para aprobación:** 85%

---

## Recursos Adicionales

**Archivos de Muestra:**
- `Hospital_Federated.nwf` - 150,000 SF hospital, 5 pisos
- `DataCenter_Federated.nwf` - 80,000 SF data center, high MEP density
- `Office_Building.nwf` - 200,000 SF office building, 12 pisos
- `Construction_Schedule.xml` - Schedule con 500+ activities

**Templates:**
- `BIM_Execution_Plan_Template.docx`
- `Clash_Tracking_Spreadsheet.xlsx`
- `RFI_Template.docx`
- `Coordination_Meeting_Minutes.docx`
- `Dashboard_Template.xlsx`

**Standards de Referencia:**
- National CAD Standard (NCS) - Clash tolerances guidelines
- BIM Forum LOD Specification
- ISO 19650 - BIM Information Management
- Autodesk Navisworks 2026 User Guide

---

**Módulo completado exitosamente cuando:**
-  Todos los 6 ejercicios completados con entregables
-  Proyecto integrador aprobado (85%+)
-  Comprensión demostrada de clash detection workflow completo
-  Capaz de configurar y ejecutar coordination profesional en proyectos reales

---

**Próximo paso:** Módulo 3 - 4D Simulation con TimeLiner

Aprenderás a vincular construction schedules con modelos BIM para planning visual, logistics coordination, y construction sequencing optimization - expandiendo las técnicas 4D introducidas en Lección 12.
