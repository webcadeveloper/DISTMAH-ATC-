# Lección 17: TimeLiner Reporting

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Generar y personalizar Gantt chart views desde TimeLiner con filters, grouping y export a PDF/Image
- Crear task reports detallados incluyendo duration, dates, dependencies, resources y custom properties
- Realizar quantity takeoffs por construction phase extrayendo volumes, areas y counts desde el modelo 4D
- Configurar cost loading y generar cashflow analysis con S-curves para earned value management
- Crear resource allocation reports con histograms identificando over-allocation y bottlenecks
- Implementar progress tracking comparando planned vs actual schedule con variance analysis
- Exportar reports profesionales a Excel, PDF y HTML para stakeholders y project documentation
- Integrar reporting data con dashboards externos (Power BI, Tableau) para executive visibility

**Duración**: 60 minutos

---

## 1. Fundamentos de TimeLiner Reporting (8 minutos)

### ¿Por Qué Reporting es Crítico?

**Reality Check**: Crear una simulación 4D espectacular es solo 50% del valor. El otro 50% es **comunicar insights** a stakeholders mediante reports profesionales.

**Audiences para Reports:**

**1. Executives / Owners (C-Suite)**
- **Needs**: High-level summary, cost/schedule performance, risks
- **Format**: 1-page dashboards, S-curves, traffic lights (red/yellow/green)
- **Frequency**: Monthly
- **Depth**: Shallow (no task-level detail)

**2. Project Managers / Construction Managers**
- **Needs**: Schedule performance, critical path, resource allocation, variance analysis
- **Format**: Gantt charts, task lists con dates/durations, milestone tracking
- **Frequency**: Weekly
- **Depth**: Medium (phase-level detail)

**3. Superintendents / Field Teams**
- **Needs**: 2-week lookahead, daily activities, material deliveries, crew assignments
- **Format**: Task lists filtered by week/zone, resource schedules
- **Frequency**: Daily/Weekly
- **Depth**: Deep (task-level, sometimes sub-task level)

**4. Subcontractors / Trade Partners**
- **Needs**: Scope-specific schedule, dependencies con other trades, material delivery windows
- **Format**: Filtered Gantt (solo their tasks), coordination dates
- **Frequency**: Weekly/Biweekly
- **Depth**: Deep para their scope, shallow para others

**5. Finance / Accounting**
- **Needs**: Cost loading, cashflow projections, payment schedule, earned value
- **Format**: Excel tables, S-curves, variance reports
- **Frequency**: Monthly
- **Depth**: Cost-focused (less about physical progress, more about $ spent/earned)

**6. Regulatory / Compliance (Permitting, Inspections)**
- **Needs**: Milestone dates (inspections required), compliance documentation
- **Format**: Milestone list, dates, certifications
- **Frequency**: As needed (permit applications, inspection requests)
- **Depth**: Milestone-level only

### Report Types en TimeLiner

**TimeLiner ofrece 6 categorías de reports:**

**1. Schedule Reports**
- Gantt charts (visual bars + timeline)
- Task lists (tabular, sortable)
- Milestone reports
- Critical path reports

**2. Quantity Reports**
- Volume takeoffs (cubic meters/feet)
- Area takeoffs (square meters/feet)
- Count takeoffs (number of elements)
- Quantity by phase/zone

**3. Cost Reports**
- Cost loading by task
- Cumulative cost over time (S-curve)
- Cost by phase/discipline
- Budget vs actual cost

**4. Resource Reports**
- Resource allocation by task
- Resource histograms (usage over time)
- Over-allocation identification
- Resource cost reports

**5. Progress Reports**
- Planned vs actual comparison
- Variance analysis (schedule variance, cost variance)
- Earned value metrics (SPI, CPI)
- Percent complete by phase

**6. Simulation Reports**
- Attachment reports (which elements attached to which tasks)
- Appearance profile reports
- Validation reports (tasks without attachments, duplicate attachments)

### Export Formats

**Format Options:**

**1. PDF** (Universal, non-editable)
- **Pros**: Professional appearance, no software required to view, print-ready
- **Cons**: Static, no data manipulation
- **Use**: Executive presentations, client deliverables, archival documentation

**2. Excel / CSV** (Tabular data, editable)
- **Pros**: Full data manipulation (pivot tables, charts, formulas), integrate con other systems
- **Cons**: No visual formatting (Gantt bars lost), requires Excel license
- **Use**: Detailed analysis, integration con ERP systems, custom dashboards

**3. HTML** (Web-based, interactive)
- **Pros**: Shareable via web, interactive (expand/collapse hierarchy), no special software
- **Cons**: Limited formatting control
- **Use**: Project websites, intranet portals, client access

**4. Image (PNG/JPG)** (Visual snapshot)
- **Pros**: Embeddable en PowerPoint, Word, emails
- **Cons**: Static, low resolution if not configured correctly
- **Use**: Presentations, reports, email updates

**5. XML / JSON** (Machine-readable)
- **Pros**: Integrate con custom applications, APIs, databases
- **Cons**: Not human-readable, requires programming
- **Use**: Enterprise integrations, automated dashboards (Power BI, Tableau)

---

## 2. Gantt Chart Views y Export (12 minutos)

### Configurar Gantt Chart View en TimeLiner

**Acceso**: TimeLiner panel muestra Gantt chart by default en la sección Timeline.

**Customization Options:**

**1. Zoom Level (Temporal Scale)**
- **Hours**: Para proyectos muy cortos (< 1 mes)
- **Days**: Para proyectos de meses (más común)
- **Weeks**: Para proyectos de 6-18 meses
- **Months**: Para proyectos multi-año
- **Quarters**: Para programas de 5+ años

**Controls**:
- Zoom buttons: + / - en timeline toolbar
- Mouse wheel: Ctrl + scroll para zoom dinámico
- Keyboard: Ctrl + Plus/Minus keys

**Best Practice**: Ajustar zoom para que entire project duration quepa en pantalla (overview) o zoom in para detailed view de 2-3 meses.

**2. Grouping y Hierarchy**

**By WBS (Default)**:
- Tasks se muestran en tree structure según WBS imported
- Parent tasks (summaries) tienen expand/collapse (+/-)
- Visual hierarchy con indentation

**By Discipline**:
- Group tasks: All structural tasks juntas, all MEP tasks juntas, etc.
- Requiere que tasks tengan property "Discipline" populated
- TimeLiner > Organize > Group By > Discipline

**By Phase**:
- Group por construction phase (Foundation, Superstructure, Finishes, etc.)
- Similar a discipline grouping

**By Responsible Party (Contractor)**:
- Group tasks por subcontractor
- Útil para coordination meetings (cada sub ve su scope)

**3. Filtering**

**Filter by Date Range**:
- Mostrar solo tasks que ocurren en specific time window
- Example: "Show tasks between March 1 - March 31" (monthly view)
- TimeLiner > Filter > Date Range > Set Start/End dates

**Filter by Task Type**:
- Show only Construct tasks (hide Demolish, Temporary, Maintain)
- Or viceversa: Show only Temporary tasks (para temporary works analysis)

**Filter by Property**:
- Example: Show only tasks where "Responsible Party" = "Steel Subcontractor"
- Or: Show only critical tasks (Total Float = 0)
- TimeLiner > Filter > Advanced > Property filters

**Filter by Selection Set**:
- Show only tasks attached to specific elements
- Example: Select architectural elements en modelo → Filter tasks to only those attached to selection

**4. Color Coding**

**By Task Type** (Default):
- Construct: Blue
- Demolish: Red
- Temporary: Yellow
- Maintain: Gray

**By Status**:
- Not Started: Gray
- In Progress: Yellow
- Complete: Green
- Delayed: Red

**By Critical Path**:
- Critical tasks: Red
- Non-critical: Blue/Gray

**Custom Color Rules**:
- TimeLiner > Display > Color Rules
- Define: IF condition THEN color
- Example: IF "% Complete" < 50% AND "End Date" < Today THEN Red (delayed)

**5. Display Columns**

**Default Columns**:
- Task Name
- Start Date
- End Date
- Duration

**Additional Columns Available** (add via Configure Columns):
- Task ID
- Task Type
- Progress (% Complete)
- Total Float (holgura)
- Predecessors
- Successors
- Resources
- Cost
- Custom Properties (any imported from P6/MS Project)

**Best Practice**: Para executive presentations, minimizar columns (solo Task Name + Dates). Para detailed analysis, agregar Duration, Float, Resources, Cost.

### Export Gantt Chart

**Method 1: Export as PDF**

**Workflow:**
1. TimeLiner > Gantt Chart visible en pantalla
2. Ajustar view:
   - Zoom para mostrar desired time range
   - Configure columns (mostrar solo relevant ones)
   - Apply filters si necesario
3. File > Export > Gantt Chart
4. Dialog "Export Gantt Chart"
   - Format: PDF
   - Page Size: Letter (8.5 × 11"), A4, or Tabloid (11 × 17")
   - Orientation: Landscape (recomendado para Gantt charts)
   - Scale: Fit to Page width (or multiple pages if proyecto muy largo)
5. Filename: "Project_Gantt_2026-02-15.pdf"
6. Click "Export"

**Result**: PDF multi-page con Gantt chart. Cada page muestra portion del timeline. Professional appearance.

**Tips para Better PDF Output:**
- **Page Breaks**: TimeLiner automáticamente divide en pages. Verify que breaks no cortan tasks awkwardly.
- **Headers/Footers**: Include project name, date, page numbers (configure en Export dialog)
- **Logo**: TimeLiner permite agregar company logo en header (corporate branding)

**Method 2: Export as Image (PNG/JPG)**

**Workflow:**
1. Similar a PDF export
2. Format: PNG (transparency support) o JPEG (smaller file size)
3. Resolution:
   - **Screen Resolution** (96 DPI): Para web, emails (rápido)
   - **Print Resolution** (300 DPI): Para printed reports (mejor calidad, archivos más grandes)
4. Size:
   - Width: 1920 pixels (Full HD) o 3840 pixels (4K)
   - Height: Auto (maintains aspect ratio)
5. Export

**Use Case**: Embed Gantt chart image en PowerPoint slide para presentation.

**Method 3: Copy to Clipboard**

**Quick Method** (no file export):
1. TimeLiner Gantt visible
2. Edit > Copy Gantt Chart (o Ctrl+C)
3. Paste en Word, PowerPoint, email (Ctrl+V)
4. Image se pega directamente

**Pros**: Fast, no need para save file
**Cons**: Lower resolution (screen quality only)

### Customize Gantt Appearance para Presentations

**Professional Gantt Chart Tips:**

**1. Clean Timeline**
- Remove clutter: Hide future work (gray ghosted bars confunden)
- Focus: Show solo current phase + 1 month lookahead
- Simplify: Collapse WBS to summary level (no mostrar every single task)

**2. Highlight Critical Path**
- Color critical tasks en rojo (automatically)
- Bold font para critical task names
- Llamar atención a bottlenecks

**3. Add Milestones Visually**
- Milestones = diamonds en Gantt
- Label key milestones: "Foundation Complete", "Steel Topping Out", "Substantial Completion"
- Position labels para avoid overlap

**4. Annotations**
- Add text boxes: "Weather Delay - 2 weeks" (explaining variances)
- Arrows: Pointing to critical areas
- Use Navisworks redline tools on Gantt screenshot

**5. Legends**
- Include legend explicando color coding
- Example: Red = Critical Path, Blue = Non-Critical, Green = Complete

**Case Real - Monthly Executive Report:**

General contractor en Phoenix genera monthly Gantt chart report para owner (retail chain).

**Configuration:**
- Time range: Current month + next 3 months (4-month window)
- Grouping: By phase (Site, Structure, Envelope, MEP, Finishes)
- Columns: Task Name, Start, Finish, % Complete (solo 4 columns, simple)
- Color: By status (Gray = Not started, Yellow = In progress, Green = Complete, Red = Delayed)
- Milestones: Labeled (Permit Approval, TCO, Grand Opening)
- Page: Single-page PDF (fit to Tabloid size, 11×17")
- Branding: Company logo en header, project name, report date

**Frequency**: Generated automáticamente every 1st of month (takes 5 min). Email to owner, architect, consultants.

**Feedback from Owner**: "This is the clearest schedule update I've ever received. I can understand project status in 30 seconds."

---

## 3. Task Reports Detallados (10 minutos)

### Generate Task List Report

**Purpose**: Tabular list de tasks con all relevant data (dates, durations, resources, cost, dependencies, etc.).

**Workflow:**

**Step 1: Acceso**
- TimeLiner > Reports > Task Report

**Step 2: Configure Report**

**Dialog "Task Report Configuration":**

**Section 1: Scope**
- **All Tasks**: Include todas las tasks del cronograma
- **Selected Tasks**: Solo tasks currently selected en TimeLiner
- **Filtered Tasks**: Solo tasks que pasan current filters (ej: critical tasks only)

**Recommendation**: Para comprehensive report, usar "All Tasks". Para specific analysis (ej: critical path report), usar "Filtered Tasks".

**Section 2: Fields to Include**

Checkboxes para columns:
- ☑ Task ID
- ☑ Task Name
- ☑ Task Type (Construct, Demolish, etc.)
- ☑ Start Date
- ☑ End Date
- ☑ Duration (days)
- ☑ Total Float (days)
- ☑ % Complete
- ☑ Predecessors (list de Task IDs)
- ☑ Successors
- ☑ Resources (names)
- ☑ Cost ($)
- ☑ Attached Elements (count)
- ☑ Custom Properties (any imported from P6/MS Project)

**Best Practice**: Include all fields para comprehensive report. Excel permite hide columns later si no necesitas todas.

**Section 3: Sort Order**
- **By Start Date** (chronological, más común)
- **By WBS** (hierarchical, mantiene structure)
- **By Total Float** (ascending = critical tasks first)
- **By % Complete** (descending = most complete first)

**Section 4: Grouping**
- **None**: Flat list
- **By Phase**: Group tasks por construction phase
- **By Discipline**: Group por STR, ARCH, MEP, etc.
- **By Contractor**: Group por responsible party

**Section 5: Export Format**
- **Excel (.xlsx)**: Editable, best para analysis
- **CSV (.csv)**: Universal, pero no formatting
- **PDF (.pdf)**: Static, print-ready
- **HTML (.html)**: Web-viewable

**Step 3: Generate Report**
1. Click "Generate"
2. Progress bar (fast, < 10 seconds para 1,000 tasks)
3. Save file: "Project_Task_Report_2026-02-15.xlsx"

**Result**: Excel file con tabla detallada de todas las tasks.

### Analyze Task Report en Excel

**Common Analyses:**

**1. Critical Path Analysis**
- Filter: Total Float = 0
- Sort by Start Date
- Result: List de critical tasks en orden cronológico
- Highlight en rojo (conditional formatting)
- Management action: Focus resources en estas tasks

**2. Delayed Tasks Identification**
- Filter: % Complete < Expected % (based on dates)
- Example: Task started 10 days ago (duration 20 days), expected 50% complete, actual 30% complete = delayed
- Calculate variance: Expected % - Actual % = -20% (behind)
- Management action: Investigate root cause, add resources, re-sequence

**3. Resource Over-Allocation**
- Pivot Table: Resources (rows) × Weeks (columns) × Count of Tasks (values)
- Identify weeks donde same resource assigned a > 1 concurrent task
- Example: "Steel Crew A" assigned a 3 tasks simultáneas Week 15 = over-allocated
- Management action: Stagger tasks, add second crew, o extend duration

**4. Cost by Phase**
- Pivot Table: Phase (rows) × Sum of Cost (values)
- Result: Total cost por phase
- Compare con budget allocations
- Identify phases over/under budget

**5. Long-Lead Items Tracking**
- Filter: Duration > 60 days
- Sort by Start Date
- Identify items que necesitan early procurement
- Example: "Elevator Equipment - 9 months lead time" debe ordenarse en Month 1 para delivery en Month 10

**Case Real - Infrastructure Project:**

State DOT genera weekly task report para 5-year highway expansion program (8,000+ tasks).

**Configuration:**
- Scope: Filtered tasks (next 8 weeks lookahead + critical path)
- Fields: Task ID, Name, Start, End, Responsible Party, % Complete, Float
- Sort: By Start Date
- Format: Excel

**Usage:**
- Monday morning: PM genera report (5 min)
- Weekly coordination meeting (2 hours): Team reviews report, task by task
- Action items: Assign owners para tasks starting next week, resolve blockers para in-progress tasks
- Result: Zero surprises en campo. Proactive management.

---

## 4. Quantity Takeoffs por Phase (12 minutos)

### Extract Quantities from Model

**Purpose**: Cuantificar volumes, areas, counts de elementos por construction phase para cost estimation, material ordering, y progress tracking.

**Navisworks Quantity Takeoff Workflow:**

**Step 1: Ensure Model Has Quantity Data**

Elementos en modelo (Revit, etc.) deben tener properties con quantities:
- **Volumes**: Concrete (cubic meters/yards), excavation (cubic meters)
- **Areas**: Walls (square meters), roofing (square meters), flooring
- **Lengths**: Piping (linear meters), ductwork, conduit
- **Counts**: Doors (each), windows (each), equipment (each)

**Verify**:
- Select element en Navisworks
- Properties panel: Check si tiene "Volume", "Area", "Length", etc.
- Si properties vacías: Problema en source model (Revit), necesita popularse antes de export

**Step 2: Group Elements by Task (Already Done in 4D)**

Si ya vinculaste elementos a tasks en TimeLiner (via search sets o manual attachment), estás ready para quantity takeoff.

**Step 3: Generate Quantity Report**

**TimeLiner > Reports > Quantity Takeoff**

**Dialog "Quantity Takeoff Configuration":**

**Section 1: Quantity Type**
- ☑ Volume (cubic meters o cubic feet)
- ☑ Area (square meters o square feet)
- ☑ Length (linear meters o linear feet)
- ☑ Count (number of elements)
- ☑ Custom Property (any numeric property, ej: "Weight", "Cost")

**Section 2: Group By**
- **By Task**: Show quantities per task (most common)
- **By Phase**: Aggregate quantities por construction phase (summary level)
- **By Discipline**: Aggregate por STR, ARCH, MEP
- **By Level**: Aggregate por floor/level

**Section 3: Units**
- Metric: Cubic meters, square meters, linear meters
- Imperial: Cubic yards/feet, square feet, linear feet
- Cost: USD, EUR, etc. (si cost data existe)

**Section 4: Export Format**
- Excel (.xlsx): Best para analysis y manipulation
- CSV: Universal
- PDF: Static, documentation

**Step 4: Execute**
1. Click "Generate"
2. Progress: Navisworks calcula quantities de todos los elementos attached (puede tardar 30-60 sec para proyectos grandes)
3. Save: "Project_Quantity_Takeoff_2026-02-15.xlsx"

**Result**: Excel file con tabla:

| Task Name | Volume (m³) | Area (m²) | Length (m) | Count | Total Cost ($) |
|-----------|-------------|-----------|------------|-------|----------------|
| Foundation Concrete Pour L1 | 850 | - | - | - | $127,500 |
| Structural Steel Erection L2 | - | - | 2,400 | 145 | $360,000 |
| Exterior Wall Installation | - | 3,200 | - | - | $480,000 |
| HVAC Duct Installation | - | - | 8,500 | - | $255,000 |
| ...

### Use Cases para Quantity Takeoffs

**1. Cost Estimation / Bidding**

**Scenario**: General contractor bidding en proyecto. Necesita estimar material costs.

**Workflow:**
1. Import modelo 3D a Navisworks
2. Create basic task structure en TimeLiner (no necesitas full schedule, solo phases)
3. Attach elementos a tasks (auto-attach by category/level)
4. Generate quantity takeoff
5. Export to Excel
6. Apply unit costs:
   - Concrete: $150/m³
   - Structural steel: $1,500/ton
   - Ductwork: $30/linear meter
7. Calculate total material cost per phase
8. Add labor, equipment, overhead, profit
9. Result: Detailed bid estimate

**Accuracy**: 4D-based quantity takeoff es más accurate que 2D takeoffs (menos human error, considera toda la 3D geometry).

**2. Material Procurement / Ordering**

**Scenario**: Procurement manager necesita saber cuánto concrete ordenar para próximos 2 meses.

**Workflow:**
1. Filter tasks: Date range = next 2 months
2. Filter tasks: Task Type = Construct AND Category contains "Concrete"
3. Generate quantity takeoff
4. Result: 2,400 m³ concrete needed Weeks 10-18
5. Breakdown by week:
   - Week 10: 300 m³ (foundation zone A)
   - Week 12: 400 m³ (foundation zone B)
   - Week 15: 600 m³ (slab level 1)
   - Week 17: 500 m³ (slab level 2)
   - Week 18: 600 m³ (slab level 3)
6. Contact concrete supplier: Establish delivery schedule (batched orders)

**Benefit**: Avoid over-ordering (excess inventory cost) o under-ordering (delays).

**3. Progress Tracking / Earned Value**

**Scenario**: Project manager tracking monthly progress para earned value reporting.

**Workflow:**
1. Month 1: Generate quantity takeoff (baseline)
   - Total concrete: 8,500 m³
   - Total steel: 1,200 tons
   - Total ductwork: 25,000 linear meters
2. Month 2: Update schedule con % complete por task (based on field reports)
   - Task "Foundation Concrete": 100% complete
   - Task "Steel L1-L3": 60% complete
   - Task "Ductwork": 20% complete
3. Calculate earned quantities:
   - Concrete: 850 m³ (100% of 850 m³ Foundation task)
   - Steel: 432 tons (60% of 720 tons Levels 1-3)
   - Ductwork: 1,700 meters (20% of 8,500 meters)
4. Compare con planned quantities para esa fecha
5. Calculate variance

**Formula**:
- **Quantity Variance** = Actual Quantity Installed - Planned Quantity
- **% Progress** = Actual Quantity / Total Quantity × 100%

**4. Waste Management Planning**

**Scenario**: Sustainability manager calcula waste generation para dumpster sizing y recycling logistics.

**Workflow:**
1. Quantity takeoff de demolition tasks
   - Demolish Concrete: 1,200 m³
   - Demolish Steel: 80 tons
   - Demolish Drywall: 5,000 m²
2. Apply waste factors:
   - Concrete: 5% waste (broken pieces, over-break)
   - Steel: 2% waste (cuts, scraps)
   - Drywall: 15% waste (cuts, damaged sheets)
3. Calculate total waste:
   - Concrete waste: 60 m³
   - Steel waste: 1.6 tons
   - Drywall waste: 750 m²
4. Size dumpsters:
   - Concrete: 3× 20-yard dumpsters
   - Steel: 1× 30-yard dumpster (separate para recycling)
   - Drywall: 2× 20-yard dumpsters
5. Schedule haul-away frequency (weekly, biweekly)

**Benefit**: Proactive waste management = lower disposal costs, better sustainability metrics (LEED credits).

### Integrate Quantity Data con Cost Loading

**Advanced Workflow:**

**Goal**: Link quantities extracted desde 4D model con unit costs para generate cost-loaded schedule.

**Step 1: Export Quantity Takeoff to Excel**

**Step 2: Add Unit Cost Column**

| Task Name | Quantity (m³) | Unit Cost ($/m³) | Total Cost ($) |
|-----------|---------------|------------------|----------------|
| Foundation Pour Zone A | 300 | $150 | $45,000 |
| Foundation Pour Zone B | 400 | $150 | $60,000 |
| Slab Level 1 | 600 | $140 | $84,000 |

**Step 3: Calculate Total Cost per Task**

Formula: `Total Cost = Quantity × Unit Cost`

**Step 4: Import Cost Data Back to TimeLiner**

**Option A: Manual Entry**
- Copiar Total Cost column desde Excel
- En Navisworks TimeLiner, agregar columna "Cost"
- Paste values task by task (tedioso, pero factible para proyectos pequeños)

**Option B: Re-Import Schedule con Cost Data**
- Update original P6/MS Project schedule con calculated costs (desde Excel)
- Re-import schedule a Navisworks
- Costs ahora visibles en TimeLiner

**Result**: Schedule cost-loaded, ready para cashflow analysis y earned value reporting.

---

## 5. Cost Loading y Cashflow Analysis (10 minutos)

### S-Curve Generation

**S-Curve**: Gráfica cumulative cost over time. Forma de "S" porque:
- Inicio del proyecto: Slow ramp-up (mobilization, procurement)
- Medio del proyecto: Steep slope (peak production)
- Fin del proyecto: Slow taper (punch list, commissioning)

**Purpose**:
- Visualizar cashflow (cuánto $ gasta por mes)
- Earned value management (comparar planned vs actual spend)
- Financing planning (cuándo necesitamos draw funds)

**Generate S-Curve en TimeLiner:**

**Step 1: Ensure Tasks Have Cost Data**
- Cada task debe tener "Cost" property populated
- Source: P6/MS Project import, o manual entry, o calculated from quantity takeoff

**Step 2: Generate Cashflow Report**

**TimeLiner > Reports > Cashflow Analysis**

**Dialog "Cashflow Analysis Configuration":**

**Section 1: Time Period**
- **Interval**: Monthly (most common), Weekly (detailed), Quarterly (high-level)
- **Start Date**: Project start
- **End Date**: Project end

**Section 2: Cost Allocation Method**

**Option A: Linear Distribution** (Simple)
- Assume cost distribuye uniformly across task duration
- Example: Task duration 10 days, cost $100k → $10k per day
- Pro: Simple
- Con: Unrealistic (usualmente hay front-loading o back-loading)

**Option B: Custom Distribution** (Advanced)
- Define cost distribution curve (ej: 30% first quarter, 50% middle, 20% last quarter)
- More realistic
- Requiere knowledge de typical cost patterns

**Option C: Actual Cost Input** (Most Accurate)
- Input actual costs spent per period (desde accounting system)
- Compare con planned costs
- Best para progress tracking

**Recommendation**: Start con Linear Distribution (simple). Migrate a Custom/Actual cuando proyecto avanza.

**Section 3: Chart Type**
- **Cumulative** (S-Curve): Suma acumulada de costs over time
- **Period** (Bar Chart): Cost per month (no cumulative)

**Recommendation**: Cumulative para executive presentations (S-curve es iconic). Period para detailed cash management.

**Section 4: Export Format**
- **Excel**: Data + chart (editable)
- **PDF**: Chart only (static)
- **Image**: PNG/JPG (para presentations)

**Step 3: Execute**
1. Click "Generate"
2. Navisworks calcula cumulative costs por period
3. Genera chart automáticamente
4. Save: "Project_Cashflow_SCurve_2026-02-15.xlsx"

**Result**: Excel file con:
- **Sheet 1**: Data table (Month, Period Cost, Cumulative Cost)
- **Sheet 2**: S-Curve chart (X-axis = Time, Y-axis = Cumulative Cost $)

### Analyze S-Curve

**Key Metrics:**

**1. Total Project Cost**
- Top of S-curve (final cumulative value)
- Example: $12.5M USD

**2. Peak Monthly Spend**
- Steepest slope en S-curve
- Example: Month 8-12, spending $800k-$1M per month (peak production)

**3. Cashflow Timing**
- ¿Cuándo necesitamos largest cash infusions?
- Coordinate con owner payment schedule o bank draws

**4. Burn Rate**
- Average $ spent per month
- Formula: Total Cost / Project Duration (months)
- Example: $12.5M / 18 months = $694k per month average

**Comparative Analysis - Planned vs Actual:**

**Scenario**: Month 6 del proyecto. Queremos comparar planned spend vs actual spend.

**Workflow:**
1. Generate S-Curve con planned costs (baseline schedule)
2. Update schedule con actual % complete por task (field data)
3. Generate S-Curve con actual costs (based on % complete)
4. Overlay both curves en same chart (Excel)

**Result**:

| Month | Planned Cumulative Cost ($M) | Actual Cumulative Cost ($M) | Variance ($M) |
|-------|------------------------------|----------------------------|---------------|
| 1 | 0.5 | 0.6 | +0.1 (over) |
| 2 | 1.2 | 1.3 | +0.1 (over) |
| 3 | 2.1 | 2.0 | -0.1 (under) |
| 4 | 3.2 | 3.0 | -0.2 (under) |
| 5 | 4.5 | 4.2 | -0.3 (under) |
| 6 | 6.0 | 5.8 | -0.2 (under) |

**Interpretation**:
- Months 1-2: Over budget (mobilization más costosa de lo planeado)
- Months 3-6: Under budget (efficiency gains, o behind schedule)
- Net: $200k under budget at Month 6
- **Action**: Investigate si "under budget" es porque ahead o behind schedule (critical distinction)

**Earned Value Integration:**

**Formulas**:
- **Planned Value (PV)**: Planned cumulative cost @ current date
- **Earned Value (EV)**: % Complete × Total Budget Cost
- **Actual Cost (AC)**: Actual cumulative spend @ current date

**Example @ Month 6**:
- PV = $6.0M (planned)
- EV = 45% complete × $12.5M = $5.625M (earned)
- AC = $5.8M (actual spent)

**Metrics**:
- **Schedule Performance Index (SPI)** = EV / PV = $5.625M / $6.0M = 0.9375 (behind schedule)
- **Cost Performance Index (CPI)** = EV / AC = $5.625M / $5.8M = 0.970 (slightly over budget per work done)

**Interpretation**:
- SPI < 1.0: Behind schedule (only 93.75% of planned work completed)
- CPI < 1.0: Over budget relative a work completed (spending $1.03 para earn $1.00 of value)

**Management Action**:
- Address schedule delays (SPI): Add resources, optimize sequencing
- Control costs (CPI): Identify inefficiencies, negotiate better rates con subs

---

## 6. Resource Allocation Reports (8 minutos)

### Generate Resource Histogram

**Purpose**: Visualizar resource usage over time, identificar over-allocation y under-utilization.

**Workflow:**

**Step 1: Ensure Tasks Have Resource Assignments**
- Import schedule con resource names (from P6/MS Project)
- Verify: TimeLiner > Columns > Show "Resources" column

**Step 2: Generate Resource Report**

**TimeLiner > Reports > Resource Allocation**

**Dialog Configuration:**

**Section 1: Scope**
- **All Resources**: Show todos los resources en schedule
- **Selected Resources**: Show specific resources (ej: "Steel Crew", "Crane 1")

**Section 2: Time Period**
- Interval: Weekly o Daily
- Range: Entire project, o specific phase

**Section 3: Allocation Metric**
- **Hours**: Total hours allocated per period
- **Count**: Number of concurrent tasks per resource
- **Cost**: Total cost of resource usage per period

**Section 4: Chart Type**
- **Histogram**: Bar chart (X = Time, Y = Resource usage)
- **Table**: Tabular data (Resource × Week matrix)

**Step 3: Execute**
1. Generate report
2. Save: "Project_Resource_Allocation_2026-02-15.xlsx"

**Result**: Excel con histogram chart mostrando resource usage over time.

### Identify Over-Allocation

**Visual Cues en Histogram:**

**Normal Allocation**:
- Bars fluctúan pero stay below capacity line (ej: 8 hours/day × 5 days = 40 hrs/week capacity)
- Ejemplo: Steel Crew allocated 35 hrs Week 10, 38 hrs Week 11, 32 hrs Week 12 (all < 40)

**Over-Allocation**:
- Bars exceed capacity line
- Ejemplo: Steel Crew allocated 65 hrs Week 15 (exceeds 40 hrs = 1 crew)
- Causa: Multiple tasks scheduled concurrently requiriendo same resource

**Action**:
1. Identify over-allocated weeks (red bars above capacity line)
2. Drill down: ¿Qué tasks están concurrentes?
3. Solutions:
   - **Stagger tasks**: Shift una task a week anterior o posterior
   - **Add second crew**: Steel Crew B para absorb overflow
   - **Extend duration**: Spread work over más weeks (reduce intensity)

**Example:**

**Week 15 Over-Allocation:**
- Tasks concurrentes:
  - "Erect Steel Level 3" (20 hrs allocated)
  - "Erect Steel Level 4" (25 hrs allocated)
  - "Install Steel Stairs" (20 hrs allocated)
- Total: 65 hrs (exceeds 40 hrs capacity)

**Solution Implemented:**
- "Install Steel Stairs" shifted a Week 16 (not critical path, tiene float)
- Week 15: 45 hrs (still over, pero manageable con 5 hrs overtime)
- Week 16: 35 hrs (under capacity, no problem)

**Result**: Resource conflict resolved, no need para second crew (cost savings).

### Resource Cost Reports

**Purpose**: Track resource costs vs budget.

**Workflow:**

**Step 1: Ensure Resource Cost Data Exists**
- Resource hourly rates (imported from P6/MS Project, o manual entry)
- Example: Steel Crew = $85/hr, Crane Operator = $120/hr

**Step 2: Generate Resource Cost Report**

**TimeLiner > Reports > Resource Cost Analysis**

**Result**: Table showing:

| Resource | Total Hours | Hourly Rate ($/hr) | Total Cost ($) |
|----------|-------------|-------------------|----------------|
| Steel Crew A | 1,200 | $85 | $102,000 |
| Concrete Crew | 800 | $75 | $60,000 |
| Crane Operator | 400 | $120 | $48,000 |
| MEP Foreman | 600 | $95 | $57,000 |
| **Total** | **3,000** | - | **$267,000** |

**Compare con Budget:**
- Budget allocated para labor: $250,000
- Actual/Planned: $267,000
- Variance: +$17,000 (over budget)

**Action**: Investigate overage (more hours than planned, o higher rates, o inefficiency).

---

## 7. Progress Tracking (5 minutos)

### Update Schedule con Actual Progress

**Workflow:**

**Step 1: Field Data Collection**
- Weekly: Superintendent reports % complete por task
- Example: "Foundation Concrete Zone A: 100% complete", "Steel Erection L2: 60% complete"

**Step 2: Update TimeLiner**
- Option A: Manual entry en Navisworks TimeLiner (% Complete column)
- Option B: Update P6/MS Project schedule, re-import a Navisworks

**Recommendation**: Option B (update en source software). Navisworks es visualization tool, no primary scheduler.

**Step 3: Generate Progress Report**

**TimeLiner > Reports > Progress Report**

**Configuration:**
- Compare: Baseline schedule vs Current schedule
- Metrics: % Complete, Variance (days), Critical Path shifts

**Result**: Table showing:

| Task Name | Planned % (at Today) | Actual % | Variance (%) | Status |
|-----------|----------------------|----------|--------------|--------|
| Foundation Concrete A | 100% | 100% | 0% | On Track |
| Steel Erection L2 | 80% | 60% | -20% | Behind |
| MEP Rough L1 | 50% | 65% | +15% | Ahead |

**Visual**: Traffic light colors (Green = On track, Yellow = Minor variance, Red = Major variance).

---

## Resumen

**Habilidades Clave:**
- Gantt charts, task reports, quantity takeoffs, cost/cashflow analysis, resource reports, progress tracking
- Export profesional a PDF/Excel para stakeholders
- Earned value management con S-curves

**Próxima Lección**: Lección 18 - Advanced 4D Techniques (multi-scenario, what-if analysis, schedule compression, earned value visualization).

---

## Ejercicio Práctico 17

**Duración**: 40 minutos

**Objetivo**: Generar comprehensive report package (Gantt PDF, task list Excel, quantity takeoff, S-curve).

**Archivos**: `CommercialBuilding_Model.nwc`, `Schedule.mpp`

**Instrucciones**:
1. Import schedule (5 min)
2. Generate Gantt chart PDF (10 min)
3. Generate task list Excel con critical path highlighted (10 min)
4. Generate quantity takeoff para concrete (5 min)
5. Generate S-curve cashflow chart (10 min)

**Entregables**: 4 files (Gantt PDF, Task List XLSX, Quantity XLSX, SCurve XLSX) + 1-page summary PDF.

**Criterios**: Completeness (40%), accuracy (30%), professional formatting (30%).

---

**Próxima Lección**: Lección 18 - Advanced 4D Techniques (multi-scenario comparison, what-if analysis, schedule compression strategies, float visualization, look-ahead planning, earned value visualization).
