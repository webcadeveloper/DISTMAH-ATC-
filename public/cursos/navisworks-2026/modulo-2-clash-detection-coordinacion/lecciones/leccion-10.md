# Lección 10: Model Coordination Workflows

**Duración:** 60 minutos
**Nivel:** Avanzado
**Módulo:** 2 - Clash Detection y Coordinación BIM
**Prerequisitos:** Lecciones 7-9 completas

## Objetivos de Aprendizaje

✅ Implementar workflows completos de coordinación multi-disciplina (ARQ, STRUCT, HVAC, PLUMB, ELEC, FP, CIVIL) con clear roles y responsibilities

✅ Ejecutar weekly coordination meetings eficientes siguiendo agenda estructurada, documentation protocols y decision-making frameworks

✅ Generar RFIs (Request for Information) directamente desde clash findings con proper documentation y tracking linkage

✅ Aplicar discipline-specific coordination strategies adaptadas a características técnicas de cada sistema (structural constraints, MEP routing flexibility, architectural requirements)

✅ Coordinar proyectos Design-Build y IPD (Integrated Project Delivery) con VDC workflows y early contractor involvement

✅ Establecer communication protocols efectivos para equipos distribuidos (remote design teams, offshore modeling, field coordination)

✅ Crear documentation standards profesionales para submittals, coordination drawings y project close-out

## Introducción

La coordinación BIM efectiva requiere mucho más que ejecutar clash tests y generar reportes. Requiere workflows organizados, meetings estructurados, communication protocols claros, y documentation standards rigurosos. En proyectos complejos con 6-10 disciplinas, 20-50 stakeholders, y design teams distribuidos globalmente, la falta de workflow structure resulta en: coordination chaos, duplicated effort, lost decisions, finger-pointing cuando issues arise, y ultimately, clashes descubiertos en campo.

Proyectos exitosos implementan coordination workflows sistematizados:

**Weekly Coordination Meetings**: Agenda structured, decision tracking, action item follow-up
**RFI Workflows**: Clear linkage entre clashes detectados y formal RFI process
**Discipline-Specific Strategies**: Reconocer que structural coordination es fundamentalmente diferente a MEP coordination
**VDC Integration**: Incorporate 4D sequencing, cost implications, constructability desde coordination temprana
**Communication Protocols**: Define quién comunica qué, cuándo, cómo, especialmente con distributed teams
**Documentation Standards**: Ensure audit trail completo para liability protection y lessons learned

BIM Managers y VDC Coordinators senior son compensation $90K-150K+ porque dominan no solo el software (Navisworks), sino estos workflows organizacionales que transforman coordination de technical exercise a business process que delivers measurable value.

Esta lección desarrolla estas competencias workflow-level que distinguish coordinators competentes de coordinators exceptional.

## 1. Federated Model Best Practices

### 1.1 Model Federation Strategy

**Federation** = combining modelos de múltiples disciplinas en single coordinated environment.

**Approach 1: NWD Federation (Publish-Based)**
- Cada disciplina publica .NWD files (Navisworks cache)
- Coordinator agrega todos los NWDs
- **Ventajas**: Small files, fast loading, locked geometry (no accidental edits)
- **Desventajas**: Requires republish para updates
- **Best for**: Large projects, distributed teams

**Approach 2: NWC Federation (Direct Link)**
- Coordinator links directly to .RVT, .DWG files
- Navisworks auto-creates .NWC cache
- **Ventajas**: Automatic updates when source files change
- **Desventajas**: Requires network access to all source files
- **Best for**: Co-located teams, small projects

**Approach 3: Hybrid**
- Core disciplines (ARQ, STRUCT) as NWD (stable)
- Active disciplines (MEP) as NWC (frequent updates)

**Naming Convention:**
```
[Project]_[Discipline]_[Phase]_[Date]_[Version].nwd
Hospital-Main_Architecture_CD_2024-03-15_v12.nwd
Hospital-Main_HVAC_CD_2024-03-15_v23.nwd
```

### 1.2 Coordinate System Management

**Critical**: All disciplines must model in same coordinate system.

**Establish Project Base Point:**
- Survey point (real-world coordinates)
- Project Base Point (0,0,0 internal coordinates)
- Document in BIM Execution Plan

**Revit Settings:**
- Shared Coordinates across all discipline Revit files
- Link models using "Shared Coordinates"

**Validation:**
In Navisworks, verify alignment:
1. Load ARQ model
2. Append STRUCT model
3. Visual check: Columns align with walls?
4. Measure test: Known dimension between grid lines matches?

**Misalignment troubleshooting:**
- Discipline modeled in wrong coordinate system
- Return to Revit, correct shared coordinates
- Republish NWD

### 1.3 Model Update Protocols

**Weekly Update Schedule:**

**Monday AM:**
- Disciplines publish weekend design work
- Upload NWD files to shared location (BIM 360, SharePoint)

**Monday PM:**
- Coordinator refreshes federated model
- Run clash tests (automated overnight)

**Tuesday AM:**
- Clash results ready
- Coordinator triages new clashes
- Distributes reports

**Wednesday:**
- Coordination meeting
- Review clashes, make decisions

**Thursday-Friday:**
- Disciplines implement resolutions
- Update models for next week

**Cycle repeats weekly.**

### 1.4 File Management Structure

**Folder organization:**
```
Project/
├── 00-Coordination/
│   ├── Federated-Models/
│   │   ├── Weekly/
│   │   │   ├── 2024-03-01_Hospital-Coordinated.nwf
│   │   │   ├── 2024-03-08_Hospital-Coordinated.nwf
│   │   ├── Milestones/
│   │   │   ├── DD-Complete_Hospital.nwf
│   │   │   ├── CD-50_Hospital.nwf
│   ├── Clash-Reports/
│   │   ├── 2024-03-01/
│   │   ├── 2024-03-08/
├── 01-Architecture/
│   ├── Models/
│   │   ├── Hospital-Main_Architecture_CD_2024-03-08_v12.nwd
├── 02-Structure/
│   ├── Models/
│   │   ├── Hospital-Main_Structure_CD_2024-03-08_v09.nwd
├── 03-HVAC/
├── 04-Plumbing/
├── 05-Electrical/
├── 06-Fire-Protection/
```

**Access control:**
- Coordination folder: Coordinator read/write, all others read-only
- Discipline folders: That discipline read/write, others read-only

## 2. Weekly Coordination Meetings

### 2.1 Meeting Structure y Agenda

**Standard 2-hour coordination meeting:**

**0:00-0:10 (10 min): Introduction y Status Overview**
- Attendance
- Review action items from last week: completed vs pending
- High-level status: "Last week detected 89 new clashes, resolved 124, net -35"

**0:10-0:30 (20 min): New Clashes Review**
- Present new clashes detected this week
- Triage by severity: Critical first
- Quick assessment: real clash or false positive?
- Assign responsibility

**0:30-1:20 (50 min): Active Clashes Resolution**
- Review clashes in Active status
- Present proposed solutions (sketches, alternatives)
- Discussion y decision-making
- Approve solutions or request alternatives
- Update status to Reviewed

**1:20-1:45 (25 min): Aging y Escalated Clashes**
- Review clashes >30 days old
- Escalation discussion: barriers to resolution?
- Executive decisions if needed
- Re-assign if original assignee blocked

**1:45-1:55 (10 min): RFI Generation**
- Identify clashes requiring formal RFI
- Draft RFI questions
- Assign RFI responsibility

**1:55-2:00 (5 min): Action Items y Next Steps**
- Summarize decisions made
- Confirm action items: who does what by when
- Schedule next meeting

### 2.2 Meeting Participants

**Required Attendees:**
- BIM Coordinator (meeting leader)
- Architect Design Lead
- Structural Engineer Lead
- MEP Coordinator (or separate HVAC, Plumbing, Electrical leads)
- Fire Protection Engineer

**Optional (as needed):**
- General Contractor Representative (if in construction phase)
- Owner Representative (for major decisions)
- Specialty Consultants (facade, AV, security, etc.)

**Virtual Meeting Best Practices:**
- Use screen share: Navisworks open, navigate clashes real-time
- Record meeting (Teams, Zoom recording)
- Use collaborative tools: Miro board for sketching alternatives

### 2.3 Decision-Making Framework

**Who decides resolution approach?**

**Discipline Coordination (HVAC vs ELEC):**
- Primary: MEP Coordinator facilitates discussion
- Decision: Cost-effectiveness (cheaper system moves)
- Approval: Both discipline leads must agree

**Structural vs MEP:**
- Primary: Structural engineer assesses feasibility of structural modification
- If structural modification not feasible: MEP must re-route
- If structural modification feasible pero expensive: Cost analysis
- Approval: Architect confirms no architectural impact

**Architectural Impact:**
- Any solution affecting ceiling heights, room dimensions, finishes: Architect approval required
- Owner input if program impact

**Code Compliance:**
- Fire Protection Engineer has veto power if solution violates fire/life safety codes
- Electrical Engineer if NEC violation

### 2.4 Documentation Requirements

**Meeting Minutes:**
Template:
```
COORDINATION MEETING MINUTES
Project: Hospital XYZ
Date: 2024-03-13
Attendees: [List]

1. STATUS OVERVIEW
   - New clashes: 89
   - Resolved: 124
   - Net: -35
   - Active remaining: 387

2. NEW CLASHES REVIEWED
   - STRUCT-HVAC-001: W12 beam vs 24" duct at Grid B-3
     - Assignment: HVAC Coordinator
     - Due: 2024-03-27
   - [etc...]

3. RESOLUTIONS APPROVED
   - STRUCT-HVAC-047: Re-route duct north 12"
     - Decision: Approved by ARQ, no ceiling impact
     - Action: HVAC to update model by 2024-03-18
   - [etc...]

4. RFIS TO BE GENERATED
   - RFI-287: Structural penetration approval for 8" duct through beam
     - Assigned to: Structural Engineer
     - Due: 2024-03-15

5. ACTION ITEMS
   - John (HVAC): Update model per 3 approved resolutions - Due 2024-03-18
   - Maria (STRUCT): Generate RFI-287 - Due 2024-03-15
   - Coordinator: Re-run tests after model updates - Due 2024-03-19

Next Meeting: 2024-03-20, 10:00 AM
```

**Distribute within 24 hours** to all attendees.

### 2.5 Virtual Coordination Best Practices

**For distributed teams (offshore design, remote consultants):**

**Time zone challenges:**
- Rotate meeting times to share inconvenience
- Record meetings for those who can't attend live
- Use asynchronous tools: BIM 360 Issues for comments

**Language barriers:**
- Use visual communication: markups, 3D views
- Confirm understanding: "Can you repeat the decision?"
- Provide written summary after verbal discussion

**Technology:**
- High-bandwidth video: Share Navisworks screen smoothly
- Cloud-based collaboration: BIM 360 for real-time access
- Digital whiteboard: Miro, Mural for sketching

## 3. RFI Generation Workflow

### 3.1 When to Generate RFI from Clash

**RFI = Request for Information**

**Scenarios requiring RFI:**

**Scenario 1: Requires Design Decision Outside Coordination Authority**
- Clash between structural beam y MEP, resolution requires significant structural modification
- MEP coordinator can't authorize structural changes
- RFI to Architect/Engineer of Record: "Approve structural beam relocation?"

**Scenario 2: Code Interpretation Needed**
- Clearance clash: Is 4" clearance between gas pipe y electrical acceptable per code?
- RFI to Authority Having Jurisdiction or design professional

**Scenario 3: Owner Input Required**
- Resolution impacts ceiling height in critical space (OR suite)
- RFI to Owner: "Approve 6" ceiling height reduction?"

**Scenario 4: Missing Information**
- Clash detected, but one discipline's design incomplete
- Can't coordinate without complete information
- RFI: "Provide final routing of chilled water piping to coordinate structural penetrations"

**Scenario 5: Cost Implication**
- Resolution has significant cost impact (>$10K)
- Requires formal approval, change order
- RFI documents need

### 3.2 RFI Content Requirements

**Standard RFI format:**

```
RFI NUMBER: 287
PROJECT: Hospital XYZ
DATE: 2024-03-13
FROM: BIM Coordinator
TO: Structural Engineer of Record

SUBJECT: Structural Beam Penetration for HVAC Duct

QUESTION:
During BIM coordination (Clash Test STRUCT-HVAC, Clash ID 047), identified interference between structural beam W12x26 at Grid B-3, Level 2 and 24" diameter HVAC supply duct.

Proposed resolution requires 8" diameter penetration through beam web for duct to pass.

Can beam structural capacity accommodate 8" diameter penetration at this location? If yes, what reinforcement required?

ATTACHMENTS:
- Navisworks viewpoint screenshot showing clash location
- Structural plan highlighting beam location
- HVAC plan showing duct routing
- Clash report excerpt (HTML)

REFERENCE DOCUMENTS:
- Structural Dwg S-201
- HVAC Dwg M-301
- Clash Report STRUCT-HVAC dated 2024-03-12

REQUESTED RESPONSE DATE: 2024-03-20
IMPACT IF NOT RESOLVED: HVAC cannot route main supply duct, affecting entire east wing air distribution. Potential 2-week schedule delay if not resolved by 2024-03-27.
```

**Link RFI to Clash:**
En Navisworks clash comments:
```
"RFI-287 generated 2024-03-13. Awaiting structural engineer response."
```

En RFI tracking system:
Link to clash ID, attach Navisworks viewpoint.

### 3.3 RFI Tracking Integration

**Bidirectional tracking:**

**Navisworks → RFI System:**
1. Clash detected, requires RFI
2. Change status: Active → Reviewed (pending RFI response)
3. Generate RFI en RFI tracking system (Procore, BIM 360, email)
4. Attach clash viewpoint, report excerpt
5. In Navisworks comment: Add RFI number

**RFI System → Navisworks:**
1. RFI response received: "Penetration approved with steel angles reinforcement"
2. Return to Navisworks
3. Update clash comment: "RFI-287 response: Approved with reinforcement. HVAC to proceed with penetration design."
4. Change status: Reviewed → Resolved (awaiting model update)

**Complete audit trail:**
- Clash detected: 2024-03-10
- RFI generated: 2024-03-13
- RFI response: 2024-03-18
- Model updated: 2024-03-20
- Clash verified resolved: 2024-03-21
- Total resolution time: 11 days

### 3.4 RFI Response Time Management

**Contractual RFI response times** (typical):
- Standard RFI: 7-10 business days
- Priority RFI: 3-5 business days
- Critical RFI (schedule impact): 24-48 hours

**Coordination strategy:**
- Generate RFIs early (don't wait until critical)
- Mark RFIs with clash-related schedule impact as Priority
- Escalate to PM if response overdue

**Tracking dashboard:**
```
RFI-287: Struct beam penetration | Status: Awaiting response | Sent: 3/13 | Due: 3/20 | Days elapsed: 5
RFI-291: Ceiling height reduction | Status: Awaiting response | Sent: 3/15 | Due: 3/22 | Days elapsed: 3
RFI-294: Fire sprinkler clearance | Status: OVERDUE | Sent: 3/01 | Due: 3/08 | Days elapsed: 12 (ESCALATED)
```

## 4. Discipline-Specific Coordination Strategies

Different disciplines have different coordination characteristics y constraints.

### 4.1 Architectural Coordination

**Characteristics:**
- Typically established first (program, massing, floor plans)
- Less flexible (client requirements, aesthetics)
- Coordination focuses on: MEP penetrations through walls/floors, ceiling heights, equipment locations visible to occupants

**Coordination approach:**
- ARQ typically does not move to accommodate MEP
- MEP coordinates around architectural constraints
- Exception: Early design phase, architectural elements not finalized

**Common clashes:**
- MEP equipment in occupied spaces (unsightly, noise)
- Ductwork lowering ceiling heights below program requirements
- Penetrations through fire-rated walls (firestopping coordination)

**Resolution strategy:**
- Relocate MEP to concealed spaces (above ceilings, in shafts)
- Use smaller diameter systems if space constrained
- Coordinate equipment locations early con architect (room layouts)

### 4.2 Structural Coordination

**Characteristics:**
- Least flexible discipline (structural integrity non-negotiable)
- Changes expensive (engineering calcs, rebar, formwork)
- Coordination critical: avoid costly rework

**Coordination approach:**
- Structural typically does NOT move to accommodate MEP
- Exception: Early DD phase, structural sizing preliminary
- MEP routes around structural elements
- Penetrations through structural elements: require engineering approval (RFI)

**Common clashes:**
- Beams conflicting with ductwork/piping (horizontal)
- Slabs conflicting with vertical MEP risers
- Columns in MEP equipment rooms (clearance issues)

**Resolution strategy:**
- MEP re-routes around beams/columns
- Structural sleeve coordination: identify required penetrations early, structural designs sleeves
- In mechanical rooms: coordinate column locations con equipment layouts during DD

### 4.3 HVAC Coordination

**Characteristics:**
- Large diameter ductwork (12"-48")
- Requires significant vertical space
- Some routing flexibility (elbows, transitions)
- But: excessive routing = pressure drop, energy penalty

**Coordination approach:**
- HVAC often "coordinator" of all MEP systems (largest)
- Establishes main routes first
- Other MEP systems coordinate around HVAC

**Common clashes:**
- HVAC vs structure (most frequent, size conflict)
- HVAC vs ceiling height (too low)
- HVAC equipment access clearances (code-required maintenance space)

**Resolution strategy:**
- Utilize vertical space above corridors (lower ceiling acceptable)
- Transition duct sizes (48" to 36" to fit through constricted areas)
- Vertical offsets (raise duct 6" to clear beam)
- Equipment locations: coordinate early, ensure 36" maintenance clearance

### 4.4 Plumbing Coordination

**Characteristics:**
- Smaller diameter (2"-6" típico, up to 12" for sanitary mains)
- Gravity-dependent (sanitary, storm): slope required
- More routing flexibility than HVAC

**Coordination approach:**
- Coordinates around HVAC (HVAC established first)
- Sanitary: must maintain slope, limits flexibility
- Domestic water: pressure system, more flexible

**Common clashes:**
- Plumbing vs structure (penetrations through slabs)
- Plumbing vs HVAC (sharing ceiling space)
- Fixture rough-ins vs architectural (toilets, sinks locations)

**Resolution strategy:**
- Route below HVAC (smaller, easier to maneuver)
- Consolidate vertical risers in shafts
- Coordinate fixture locations con architect early (avoid relocation clashes)

### 4.5 Electrical Coordination

**Characteristics:**
- Smallest systems (conduit 1"-4", cable tray 6"-24")
- Most flexible routing
- But: NEC clearance requirements (electrical vs plumbing, gas)

**Coordination approach:**
- Coordinates last (after HVAC, Plumbing established)
- Routes in remaining space
- Code clearances: 12" from gas piping (NFPA 54), 6" from plumbing (best practice)

**Common clashes:**
- Electrical panels: NEC clearance 36"x42" (difficult in tight rooms)
- Cable tray vs structure (hangs from structure, congestion)
- Conduit vs plumbing (crossing conflicts)

**Resolution strategy:**
- Utilize wall space (surface-mounted conduit)
- Cable tray under ductwork (bottommost layer)
- Panel locations: coordinate early, ensure clearances

### 4.6 Fire Protection Coordination

**Characteristics:**
- Code-driven (NFPA 13): clearances non-negotiable
- Sprinkler spacing: 15' typical (affects coverage)
- Head clearance below structure: 6" minimum

**Coordination approach:**
- Coordinates after HVAC/Plumbing mains established
- Branch lines flexible, but heads fixed by spacing
- Code clearances: priority over all other systems

**Common clashes:**
- Sprinkler heads vs HVAC diffusers (coverage obstruction)
- Branch lines vs ductwork, cable tray
- Clearance to structural (6" minimum)

**Resolution strategy:**
- Coordinate head locations con HVAC diffuser layout (integrated ceiling plan)
- Branch lines route around HVAC
- If clearance violations: HVAC/Electrical must move (fire code priority)

## 5. VDC Coordination Workflows

**VDC = Virtual Design & Construction**

### 5.1 Design-Build Coordination

**Difference from Design-Bid-Build:**
- Contractor involved during design (early coordination)
- Constructability input from day 1
- Cost implications visible real-time

**Coordination workflow:**
1. **DD Phase**: Architect/Engineer develop concept
2. **Contractor Review**: GC reviews design for constructability, cost
3. **Coordination Session**: GC, design team, trades
   - Clash detection
   - Constructability issues
   - Cost-saving alternates (value engineering)
4. **Design Refinement**: Incorporate feedback
5. **CD Phase**: Final coordination, clash resolution
6. **Construction**: Minimal clashes (already coordinated)

**Benefits:**
- Earlier clash detection (DD phase vs CD phase)
- Constructability input (field expertise)
- Cost optimization (value engineering)

**Coordinator role:**
- Facilitate contractor-designer collaboration
- Present clash findings con cost implications
- Track value engineering proposals

### 5.2 IPD (Integrated Project Delivery) Coordination

**IPD Characteristics:**
- All parties (owner, architect, engineer, contractor) share risk/reward
- Collaborative from project inception
- Co-location (all teams in same office)

**Coordination workflow:**
- **Daily coordination** (not weekly): Big Room meetings
- Real-time clash resolution (teams co-located, immediate decisions)
- Shared models (all disciplines work in same federated model real-time)

**Tools:**
- Cloud collaboration (BIM 360, ACC)
- Real-time clash detection (automated tests nightly)
- Shared dashboards (all stakeholders see same metrics)

**Benefits:**
- Fastest clash resolution (immediate decisions)
- Highest collaboration (aligned incentives)
- Best project outcomes (typically lowest cost, shortest schedule)

**Coordinator role:**
- Facilitate Big Room sessions
- Maintain shared federated model
- Real-time metrics dashboard

### 5.3 4D Coordination (Time Dimension)

**Integrate schedule con spatial coordination:**

**Process:**
1. Link 3D model elements to construction schedule (TimeLiner)
2. Simulate construction sequence
3. Identify temporal clashes:
   - Equipment delivery path obstructed by prior work
   - Installation sequence conflicts (need to install A before B, but A's space occupied)

**Example:**
- HVAC equipment (AHU) scheduled to crane into mechanical room Month 3
- But: Structural steel for roof not installed until Month 4
- Can't install AHU (no roof access)
- **Resolution**: Delay AHU installation to Month 4, or change to modular AHU (smaller pieces, no crane)

**Coordinator role:**
- Run time-based clash tests (Lección 12)
- Present temporal conflicts en coordination meeting
- Collaborate con scheduler to adjust sequence

## 6. Communication Protocols

### 6.1 Internal Team Communication

**Daily:**
- BIM Coordinator checks for model updates
- Quick Slack/Teams messages for minor clarifications

**Weekly:**
- Coordination meeting (structured, as described above)
- Email summary of decisions

**Bi-weekly:**
- Progress report to PM/Owner: clash metrics, trends

**Monthly:**
- Comprehensive status report
- Lessons learned session

### 6.2 External Stakeholder Communication

**Owner:**
- Monthly high-level summary (not technical details)
- Focus on: progress, budget implications, schedule
- Visual: charts, trends, photos

**Subcontractors:**
- Share relevant clash reports (filtered to their scope)
- Field coordination sessions (review clashes on-site)

**Consultants (specialty):**
- As-needed basis (when their systems involved)
- Provide context: "Your curtain wall conflicts with structural at 15 locations"

### 6.3 Distributed Team Protocols

**Time zones:**
- Document decisions in writing (not just verbal)
- Record meetings
- Asynchronous communication: BIM 360 comments

**Language:**
- Use visual communication (markups, 3D views)
- Confirm understanding

**Cloud collaboration:**
- All files on cloud (BIM 360, SharePoint)
- Version control critical

## 7. Documentation Standards

### 7.1 Coordination Drawings

**Coordination drawings** = composite drawings showing all disciplines overlaid.

**Purpose:**
- Submittal to authority having jurisdiction (permit)
- Fabrication (MEP shop drawings)
- Field installation reference

**Content:**
- All disciplines visible
- Clash-resolved design
- Dimensions, elevations
- Details at congested areas

**Creation:**
- Export from Navisworks: 2D views
- Annotate in AutoCAD/Revit
- Or: Create directly en Revit (coordinated model)

**Deliverable:**
- PDF set: "Coordinated MEP Plans - Level 2"

### 7.2 Submittal Documentation

**Shop Drawing Submittal:**
Include clash reports demonstrating coordination.

**Package contents:**
- Shop drawings (fabrication-level detail)
- Coordination report: "All clashes resolved per attached clash report"
- Clash report (HTML): Zero active clashes for this scope

**Approval process:**
- Contractor submits
- Design team reviews: "Clashes resolved, approved for fabrication"

### 7.3 Close-Out Documentation

**Project completion:**
Compile coordination archive:
- All federated models (milestone versions)
- All clash reports (chronological)
- Meeting minutes (all coordination meetings)
- RFIs generated from clashes
- Lessons learned document

**Archive:**
- Project server (7-10 year retention)
- Deliverable to owner (as-built documentation)

## Ejercicio Práctico

**Duración:** 30 minutos

**Escenario:**
Eres BIM Coordinator en proyecto hospital 8 pisos. Debes ejecutar weekly coordination meeting workflow completo.

**Tareas:**

**Parte 1: Preparación Pre-Meeting (10 min)**
1. Open federated model: `Hospital_Coordinated_2024-03-20.nwf`
2. Review clash test results:
   - New clashes this week: ____
   - Active clashes: ____
   - Resolved this week: ____
3. Generate HTML report: All tests, grouped by Status
4. Identify top 5 critical new clashes (by distance)
5. Draft meeting agenda:
   - New clashes section: List top 5
   - Active clashes section: Select 10 clashes for discussion
   - Aging clashes: Filter >30 days, list ____

**Parte 2: Simulated Meeting Decisions (10 min)**
6. For top 3 clashes, propose resolution:
   - Clash 1: _____ (solution: __________)
   - Clash 2: _____ (solution: __________)
   - Clash 3: _____ (solution: __________)
7. Identify clashes requiring RFI:
   - List 2 clashes that need RFI: ______, ______
   - Draft RFI question for first one

**Parte 3: Post-Meeting Documentation (10 min)**
8. Update clash statuses:
   - Top 3 clashes: Change to "Reviewed" (decision made)
   - Add comments documenting decisions
9. Create action item list:
   - Who, What, When format
10. Generate meeting minutes document

**Resultado esperado:**
- Complete meeting preparation
- Documented decisions
- Action items assigned
- RFI drafted

**Deliverables:**
1. Meeting agenda (1 page)
2. HTML clash report
3. RFI draft
4. Meeting minutes document
5. Action item tracker

## Evaluación

**Pregunta 1:** Describa el workflow completo de una weekly coordination meeting típica (2 horas). Incluya agenda detallada, participants roles, decision-making process, y post-meeting documentation requirements.

**Respuesta:** [Ver sección 2 para respuesta completa - estructura de 2 horas con 6 secciones: Intro/Status (10min), New Clashes (20min), Active Resolution (50min), Aging (25min), RFIs (10min), Action Items (5min). Participants incluyen BIM Coordinator (leader), discipline leads (ARQ, STRUCT, MEP), contractor rep. Decision-making via cost-effectiveness, code compliance, architectural impact hierarchy. Post-meeting: distribute minutes within 24hrs con decisions, action items, next meeting schedule.]

**Pregunta 2:** Explique las diferencias fundamentales en coordination approach entre structural vs MEP disciplines. ¿Por qué structural es "least flexible" y cómo afecta esto clash resolution strategies?

**Respuesta:** Structural es least flexible porque: (1) Structural integrity non-negotiable (safety, code, liability), (2) Modificaciones expensive (engineering calcs, rebar modifications, formwork changes, potential permit amendments), (3) Timing (structural typically first trade, installed early, difficult to modify later). En contraste, MEP systems tienen routing flexibility (elbows, offsets, transitions), cambios menos expensive, y instalan later (can accommodate earlier trades).

Coordination strategy result: 95% de structural-MEP clashes se resuelven via MEP re-routing. Structural solo se modifica si: (1) Early DD phase (preliminary design), (2) Penetrations designadas desde inicio (sleeves incorporated en structural design), (3) Critical situations donde MEP re-routing physically impossible Y structural modification feasible Y cost justified.

Resolution workflow: HVAC duct conflicts with W12 beam → Default: HVAC re-routes. Only generate RFI para structural modification si HVAC exhausted todas las routing alternatives. RFI response típicamente: "Structural modification not approved, MEP must coordinate around existing structure."

**Pregunta 3:** Describa el proceso completo de generar un RFI desde un clash detected en Navisworks. Incluya: cuándo es necesario RFI, contenido requirements, attachments, tracking integration, y follow-up workflow hasta clash closure.

**Respuesta:** [Ver sección 3 para respuesta detallada]

RFI necesario cuando: (1) Resolution requires authority outside coordination team (structural modification), (2) Code interpretation needed, (3) Owner input required (program impact), (4) Missing design information, (5) Significant cost implication (>$10K).

RFI Content: Number, Project, Date, From/To, Subject, Question (detailed clash description), Attachments (Navisworks viewpoint screenshot, discipline plan sheets, clash report excerpt), Reference documents, Requested response date, Impact statement.

Tracking integration bidirectional: Navisworks clash comment add "RFI-287 generated", status change Active→Reviewed (pending RFI). RFI system link back to clash ID. When RFI response received, update Navisworks comment with decision, change status Reviewed→Resolved.

Complete audit trail: Clash detected (date), RFI generated (date), RFI response (date), Model updated (date), Clash verified resolved (date). Total resolution time tracked. Example: 11 days detection to resolution.

## Resumen

En esta lección hemos dominado workflows completos de coordinación profesional:

- **Federated Model Best Practices**: Federation strategies (NWD vs NWC), coordinate system management, weekly update protocols, file management structures

- **Weekly Coordination Meetings**: Structured 2-hour agenda, participant roles, decision-making frameworks, documentation requirements, virtual meeting best practices para distributed teams

- **RFI Generation Workflow**: When RFIs necessary, content requirements, attachments, tracking integration bidirectional Navisworks↔RFI system, response time management

- **Discipline-Specific Strategies**: Architectural (least flexible aesthetically), Structural (least flexible structurally), HVAC (largest, establishes main routes), Plumbing (gravity-dependent), Electrical (most flexible, smallest), Fire Protection (code-driven priority)

- **VDC Coordination**: Design-Build workflows con early contractor involvement, IPD collaborative approaches con Big Room sessions, 4D temporal coordination

- **Communication Protocols**: Internal team (daily/weekly/monthly cadence), external stakeholders (owner, subs, consultants), distributed teams (time zones, language, cloud collaboration)

- **Documentation Standards**: Coordination drawings, submittal packages, close-out documentation archives

Estos workflows transforman clash detection de technical task a orchestrated business process.

## Próxima Lección

En la **Lección 11: Clash Avoidance Strategies** aprenderemos estrategias proactive para PREVENIR clashes before they occur: design rules, clearance requirements, coordination zones, LOD requirements, constructability reviews, prefabrication coordination, BIM standards enforcement. Shift de reactive (detecting clashes) a proactive (avoiding clashes).

---

**Palabras:** ~5,000
**Tiempo estimado de lectura:** 50-60 minutos
**Tiempo de práctica:** 30-40 minutos
