# Ejercicios Prácticos - Módulo 3: 4D Simulation y TimeLiner

Este documento contiene 6 ejercicios prácticos integradores que cubren todo el contenido del Módulo 3 de Navisworks 2026. Cada ejercicio corresponde a una lección del módulo y progresa en complejidad, desde fundamentos de TimeLiner hasta técnicas avanzadas de simulación 4D con earned value management.

---

## Ejercicio 1: Fundamentos de TimeLiner y Simulación 4D Básica (Lección 13)

**Duración:** 45 minutos
**Nivel:** Básico
**Archivos necesarios:** `Office_Building_3Story.nwf` (modelo federado de oficinas de 3 pisos)

### Objetivo

Dominar la interfaz de TimeLiner, crear task hierarchy manualmente, vincular elementos del modelo a tasks, configurar appearance profiles básicos, y reproducir una simulación 4D simple.

### Escenario

Usted ha sido contratado como VDC Coordinator en un proyecto de edificio de oficinas de 3 pisos en Atlanta. El proyecto tiene un cronograma de 16 semanas. Su tarea es crear una simulación 4D básica desde cero para presentar al cliente en la reunión de kick-off del próximo lunes.

**Datos del Proyecto:**
- Área: 45,000 SF (15,000 SF por piso)
- Estructura: Concreto reforzado
- Cronograma: 16 semanas
- Presupuesto: $8.5M USD

### Tareas

**Parte A: Configuración de Workspace y Task Hierarchy (15 min)**

1. Abrir Navisworks Manage 2026
2. Cargar archivo: `Office_Building_3Story.nwf`
3. Verificar que modelo contiene:
   - Arquitectura (paredes, pisos, techos, puertas, ventanas)
   - Estructura (columnas, vigas, losas)
   - MEP básico (ductos, tuberías principales)
4. Configurar workspace óptimo:
   - Abrir TimeLiner panel (F5)
   - Dock TimeLiner a la derecha (30% de pantalla)
   - Scene view a la izquierda (70%)
   - Tomar screenshot del workspace configurado

5. Crear task hierarchy manualmente en TimeLiner:
   - Click en "Add Task" (+)
   - Crear task root: "Office Building 3-Story Project"
   - Add child tasks (click derecho en root > Add Task):
     ```
     Office Building Project
     ├── Site & Foundations (Week 1-4)
     ├── Structure Level 1 (Week 5-6)
     ├── Structure Level 2 (Week 7-8)
     ├── Structure Level 3 (Week 9-10)
     ├── MEP Rough-In All Levels (Week 9-12)
     └── Finishes All Levels (Week 13-16)
     ```
6. Configurar fechas de cada task:
   - Start Date del proyecto: 03-Feb-2026
   - Asignar duraciones según semanas indicadas
   - Verificar que End Date de última task = 26-May-2026 (16 semanas total)

**Parte B: Vincular Elementos del Modelo (Manual Attachment) (20 min)**

7. **Site & Foundations:**
   - Usar Find Items (Ctrl+F)
   - Criterio: Category = "Structural Foundations"
   - Seleccionar todos los resultados (Ctrl+A en Find Items)
   - Click derecho en task "Site & Foundations" > Attach Current Selection
   - Verificar columna "Attached" muestra cantidad (esperado: ~25-35 elementos)

8. **Structure Level 1:**
   - Find Items > Category = "Structural Columns" AND Level = "Level 1"
   - Attach a task "Structure Level 1"
   - Find Items > Category = "Structural Framing" AND Level = "Level 1"
   - Add to Selection (Ctrl+Click)
   - Find Items > Category = "Floors" AND Level = "Level 1"
   - Add to Selection
   - Attach todos a "Structure Level 1"
   - Verificar attached count (esperado: ~80-120 elementos)

9. **Repetir para Structure Level 2:**
   - Mismos criterios pero Level = "Level 2"
   - Attach a task correspondiente
   - Count esperado: ~80-120 elementos

10. **Repetir para Structure Level 3:**
    - Level = "Level 3"
    - Count esperado: ~80-120 elementos

11. **MEP Rough-In All Levels:**
    - Find Items > Category = "Mechanical Equipment"
    - Attach a "MEP Rough-In All Levels"
    - Find Items > Category = "Ducts" AND (Type contains "Supply" OR Type contains "Return")
    - Add to selection y attach
    - Find Items > Category = "Pipes" AND Diameter > 2"
    - Add to selection y attach
    - Count esperado: ~400-600 elementos MEP

12. **Finishes All Levels:**
    - Find Items > Category = "Walls" AND Type contains "Interior"
    - Attach
    - Find Items > Category = "Ceilings"
    - Add to selection y attach
    - Find Items > Category = "Doors"
    - Add to selection y attach
    - Count esperado: ~200-350 elementos

**Parte C: Configurar Appearance Profiles (5 min)**

13. TimeLiner > Settings > Appearance Profiler
14. Crear profile personalizado "Office_Construction":
    - Before Start Date: Hidden (checkbox activado)
    - During Task:
      - Override Color: Blue (RGB: 0, 120, 215)
      - Transparency: 40%
      - Show Edges: Yes, thickness 2
    - After End Date: Use Original Appearance
    - Future (not started): Gray, 85% transparency

15. Aplicar profile a tasks de estructura:
    - Seleccionar tasks "Structure Level 1", "Structure Level 2", "Structure Level 3" (Ctrl+Click)
    - Click derecho > Appearance Profile > "Office_Construction"

16. Crear segundo profile "MEP_Orange" para MEP:
    - During Task: Orange (RGB: 255, 140, 0), 50% transparency
    - Aplicar a task "MEP Rough-In All Levels"

17. Aplicar profile default "Construction" a "Site & Foundations" y "Finishes All Levels"

**Parte D: Simulación y Playback (5 min)**

18. Configurar playback controls:
    - Interval: 1 day
    - Speed: 3x (para ver 16 semanas en ~40 segundos)
    - Enable Simulation: Verificar que checkbox está activado

19. Click en Play button
20. Observar secuencia de construcción:
    - Weeks 1-4: Foundations aparecen y se vuelven grises
    - Weeks 5-6: Level 1 estructura aparece en azul, luego gris
    - Weeks 7-8: Level 2 construye
    - Weeks 9-10: Level 3 construye
    - Weeks 9-12: MEP aparece en naranja (overlap con structure L3)
    - Weeks 13-16: Finishes completan

21. Identificar y documentar:
    - ¿En qué semana se completa toda la estructura? (Semana ____)
    - ¿Hay overlap visible entre Structure L3 y MEP? (Sí/No - Esperado: Sí)
    - ¿Cuál es la fase visualmente más densa? (MEP / Finishes)

22. Pausar simulación en Week 10 (estructura completa, MEP iniciando)
23. Ajustar viewpoint:
    - Orbit modelo a vista isométrica SW (permite ver 3 fachadas)
    - Zoom para encuadrar edificio completo
    - Hide Selection Tree y otros panels (solo modelo + TimeLiner)

24. Export imagen:
    - Home > Output > Export Current View
    - Resolution: 1920x1080 (Full HD)
    - Format: PNG
    - Filename: "Office_Week10_Structure_MEP_Start.png"
    - Anti-aliasing: High

### Entregables

- [ ] Screenshot del workspace configurado (TimeLiner docked correctamente)
- [ ] Archivo NWF guardado: `Exercise_13_Office_4D_Basic.nwf` (con task hierarchy y attachments)
- [ ] Screenshot exportado: `Office_Week10_Structure_MEP_Start.png`
- [ ] Documento PDF (1 página) respondiendo:
  - ¿Cuántos elementos están attachados a cada task? (Tabla: Task Name | Attached Count)
  - ¿En qué semana se completa la estructura?
  - ¿Identificaste algún problema de secuencia lógica? (Ej: MEP antes de estructura)
  - ¿Qué mejorarías en este cronograma simplificado?

---

## Ejercicio 2: Importación de Cronogramas desde MS Project (Lección 14)

**Duración:** 50 minutos
**Nivel:** Intermedio
**Archivos necesarios:** `Hospital_Addition.nwf` (modelo federado), `Hospital_Schedule.mpp` (cronograma MS Project con 523 tasks)

### Objetivo

Importar un cronograma completo desde MS Project preservando dependencies, resources y baseline, validar la importación, identificar critical path, y realizar attachments básicos para simulación 4D.

### Escenario

Hospital Regional está expandiendo su ala este con una adición de 200,000 SF que incluye 100 camas adicionales, 4 quirófanos nuevos, y servicios de emergencia expandidos. El General Contractor ha desarrollado el cronograma en MS Project (523 tasks, 24 meses). Como VDC Manager, necesitas importar el cronograma a Navisworks para crear simulación 4D para presentar al hospital board.

**Datos del Proyecto:**
- Área: 200,000 SF (5 pisos + basement)
- Duración: 24 meses
- Presupuesto: $125M USD
- Inicio: 01-Mar-2026
- Completion: 01-Mar-2028
- General Contractor: AECOM Hunt
- Critical: Hospital operativo durante construcción (phasing crítico)

### Tareas

**Parte A: Import desde MS Project (15 min)**

1. Abrir `Hospital_Addition.nwf` en Navisworks Manage 2026
2. Explorar modelo federado:
   - Arquitectura (5 pisos + basement)
   - Estructura (concreto + steel)
   - MEP completo (HVAC, plumbing, electrical, fire protection, medical gas)
   - Equipos médicos (CT scanners, operating room equipment)
3. Abrir TimeLiner panel (F5)
4. Verificar que está vacío (fresh start)

5. Iniciar import:
   - TimeLiner > Data Sources tab
   - Click "Add..."
   - Type: **Microsoft Project (MPP)**
   - Browse: Seleccionar `Hospital_Schedule.mpp`
   - Click "OK"

6. Configurar mapping en dialog "Configure MS Project Import":

   **Section 1: Data Mapping**
   - ID → Task ID
   - Name → Task Name
   - Start → Start Date
   - Finish → End Date
   - Duration → Duration
   - % Complete → Progress
   - Work → Total Work
   - Cost → Cost
   - WBS → WBS Code

   **Section 2: Outline Structure**
   - ☑ Import Outline Structure
   - ☑ Import Summary Tasks (para mantener WBS completo)

   **Section 3: Dependencies**
   - ☑ Import Predecessors
   - ☑ Import Lead/Lag values
   - Map relationship types: FS→FS, SS→SS, FF→FF, SF→SF

   **Section 4: Resources y Cost**
   - ☑ Import Resource Names
   - ☑ Import Resource Work
   - ☑ Import Cost Data

   **Section 5: Baseline**
   - Select Baseline: "Baseline" (el baseline original de bid)

   **Section 6: Filters**
   - Import All Tasks (no filtros)

7. Tomar screenshot del mapping dialog configurado
8. Click "OK" para ejecutar import
9. Esperar progress bar (1-2 minutos para 523 tasks)
10. Verificar confirmación: "Successfully imported XXX tasks"

**Parte B: Validación Post-Import (15 min)**

11. **Verificación de Task Count:**
    - En TimeLiner Tasks Panel, contar total de tasks visibles
    - Documentar: Total imported = _____ tasks
    - Si tienes MS Project instalado: Abrir `Hospital_Schedule.mpp` y comparar
      - MS Project: Ver status bar "Tasks: XXX"
      - Debe coincidir (o ser similar si importaste/no importaste summary tasks)

12. **Verificación de Date Range:**
    - Scroll al primer task del cronograma
    - Start Date = _____ (esperado: ~01-Mar-2026)
    - Scroll al último task
    - End Date = _____ (esperado: ~01-Mar-2028)
    - Total duration = _____ días (~730 días = 24 meses)

13. **Verificación de WBS Hierarchy:**
    - TimeLiner Tasks Panel: ¿Se ve estructura jerárquica con tasks indentadas? (Sí/No)
    - Expandir task root (click en +)
    - ¿Cuántos niveles de WBS hierarchy hay? (Contar niveles de indentación)
    - Documentar estructura principal (nivel 1):
      ```
      Hospital Addition Project
      ├── Preconstruction & Mobilization
      ├── Site Work & Utilities
      ├── Foundations & Below-Grade
      ├── Superstructure
      ├── Building Enclosure
      ├── MEP Rough-In
      ├── Architectural Finishes
      ├── Medical Equipment Installation
      ├── MEP Final & Commissioning
      └── Site Restoration & Close-Out
      ```

14. **Verificación de Dependencies:**
    - Timeline view (parte inferior del panel): ¿Hay líneas conectando tasks? (Sí/No)
    - Seleccionar random task (ej: buscar "Install Structural Steel Level 3")
    - Click en task, ver Properties panel
    - Verify Predecessors: ¿Listed? (Sí/No)
    - Verify Successors: ¿Listed? (Sí/No)
    - Documentar: Task ID _____ tiene _____ predecessors y _____ successors

15. **Verificación de Resources:**
    - TimeLiner > Resources tab
    - ¿Se importaron resources? (Sí/No)
    - Count de resources totales = _____ (esperado: 20-50 resources)
    - Ejemplos de resources: (listar 5 resource names)

16. **Verificación de Cost Data:**
    - TimeLiner > Tasks Panel
    - Add columna "Cost" (click derecho en header > Configure Columns > Add "Cost")
    - Seleccionar random tasks y verificar que tienen $ amounts
    - ¿Se importó cost data? (Sí/No)
    - Total project cost = _____ (suma de todos los tasks)

**Parte C: Critical Path Identification (10 min)**

17. Calcular Critical Path:
    - TimeLiner > Tools > Calculate Critical Path
    - Navisworks analiza dependencies y recalcula critical path
    - Confirmation dialog: "Critical path calculated"

18. Visualizar Critical Path:
    - Add columna "Total Float" a Tasks Panel
    - Click derecho en header > Configure Columns > Add "Total Float"
    - Sort por Total Float ascendente (click en header)
    - Tasks con Total Float = 0.0 days son críticas

19. Contar y documentar:
    - Total tasks críticas (Total Float = 0) = _____ tasks
    - % del total = _____ % (Critical tasks / Total tasks × 100)
    - Típicamente debería ser 15-25% del total

20. Analizar Critical Path sequence:
    - Revisar las primeras 20 tasks críticas
    - Identificar qué disciplinas dominan el critical path:
      - Structural: _____ tasks
      - MEP: _____ tasks
      - Architectural: _____ tasks
      - Medical Equipment: _____ tasks
      - Commissioning: _____ tasks

21. Configurar visual highlighting de critical path:
    - Create Selection Set "Critical_Path_Tasks":
      - Find Items > Properties > Total Float = 0
      - Save Selection Set
    - Apply appearance override:
      - Selection Set "Critical_Path_Tasks"
      - Override Color: Red
      - Transparency: 0% (opaque)
    - En Timeline, barras críticas ahora se muestran en rojo

**Parte D: Attachment Básico para Simulación (10 min)**

22. Vincular elementos a fases principales (manual para este ejercicio):

**Foundations Phase:**
- Find Items > Category = "Structural Foundations"
- Buscar task en TimeLiner: "Foundation Construction" (usar Ctrl+F en panel)
- Select task
- Attach Current Selection
- Attached count = _____

**Structural Steel Superstructure:**
- Find Items > Category = "Structural Framing" AND Material = "Steel"
- Task: "Structural Steel Erection - Levels 1-5"
- Attach
- Count = _____

**MEP Rough-In:**
- Find Items > Category = "Mechanical Equipment" OR "Ducts" OR "Pipes" OR "Cable Trays"
- Task: "MEP Rough-In All Levels"
- Attach
- Count = _____

**Medical Equipment:**
- Find Items > Category contains "Medical" OR "Specialty Equipment"
- Task: "Medical Equipment Installation"
- Attach (si existen en el modelo)
- Count = _____

23. Guardar archivo: `Exercise_14_Hospital_Import.nwf`

24. Simulación básica (quick test):
    - Interval: 1 week (proyecto largo, 24 meses = 104 semanas)
    - Speed: 10x (para ver 2 años en ~10 segundos)
    - Play
    - Verificar que elementos attachados aparecen en sus respectivas fases
    - Pausar en Week 52 (1 año, mid-point)
    - Export snapshot: "Hospital_Year1_Progress.png" (1920x1080, PNG)

### Entregables

- [ ] Screenshot del mapping dialog configurado
- [ ] Archivo NWF guardado: `Exercise_14_Hospital_Import.nwf`
- [ ] Screenshot de simulación: `Hospital_Year1_Progress.png`
- [ ] Validation Report (1-2 páginas PDF) conteniendo:
  - Task count imported: XXX tasks
  - Date range: START to END
  - WBS hierarchy: X levels, structure documented
  - Dependencies: Imported successfully (Yes/No)
  - Resources: X resources imported
  - Cost data: Total project cost $XXX M
  - Critical path: XXX tasks (XX%)
  - Critical path discipline breakdown (table)
  - Issues encountered: (describe problemas y soluciones)
- [ ] Critical Path Analysis (5-10 bullet points):
  - ¿Qué fase del proyecto es más larga en el critical path?
  - ¿El critical path pasa principalmente por estructura, MEP, o medical equipment?
  - ¿Hay tasks con float negativo (Late tasks)? Si sí, ¿cuántas?
  - ¿Identificaste algún bottleneck obvio en la secuencia?

---

## Ejercicio 3: Configuración Avanzada de Simulación 4D (Lección 15)

**Duración:** 60 minutos
**Nivel:** Intermedio-Avanzado
**Archivos necesarios:** `Infrastructure_Bridge.nwf` (puente de 800m), `Bridge_Schedule_P6.xer` (cronograma Primavera P6)

### Objetivo

Importar cronograma desde Primavera P6, configurar task types complejos (construct, demolish, temporary), implementar appearance rules avanzadas por disciplina, usar auto-attach con search sets, y exportar video 4D profesional.

### Escenario

Proyecto de infraestructura: Puente vehicular de 800m sobre río con 5 dovelas prefabricadas. Construcción en sitio con tráfico existente activo (requiere demolición parcial de puente viejo, construcción de desvíos temporales, y fases de trabajo nocturno). Cronograma desarrollado en Primavera P6 por AECOM (1,247 tasks, 18 meses). Como VDC Lead, necesitas crear simulación 4D avanzada para presentar a Department of Transportation (DOT).

**Datos del Proyecto:**
- Longitud: 800m (5 dovelas de 160m c/u)
- Duración: 18 meses
- Presupuesto: $95M USD
- Método constructivo: Balanced cantilever (izaje de dovelas prefabricadas)
- Restricciones: Tráfico existente no puede interrumpirse >4 horas
- Elementos temporales: Shoring towers, trabajo platforms, desvíos de tráfico

### Tareas

**Parte A: Import desde Primavera P6 XER (15 min)**

1. Abrir `Infrastructure_Bridge.nwf` en Navisworks
2. Explorar modelo:
   - Puente nuevo (5 dovelas, piers, abutments, deck)
   - Puente existente (a demoler parcialmente)
   - Temporary shoring towers
   - Traffic detour routes (modelo de contexto)
   - Site logistics (crane locations, laydown areas)

3. TimeLiner > Data Sources > Add
4. Type: **Primavera P6 (XER)**
5. Browse: `Bridge_Schedule_P6.xer`
6. Configure Primavera Import:

   **Section 1: Project Selection**
   - Si hay múltiples proyectos, seleccionar "I-75 Bridge Replacement"

   **Section 2: Data Mapping**
   - Activity ID → Task ID
   - Activity Name → Task Name
   - Start Date → Start Date
   - Finish Date → End Date
   - Duration → Duration
   - Activity Type → Task Type (Custom mapping)
   - Activity Status → Status
   - Total Float → Total Float
   - WBS → Task Hierarchy

   **Section 3: Dependency Mapping**
   - ☑ Import Relationships
   - Map: PR→FS, SS→SS, FF→FF, SF→SF
   - ☑ Import Lag Values

   **Section 4: Resource Mapping**
   - ☑ Import Resource Assignments
   - ☑ Import Resource Costs

   **Section 5: Baseline**
   - Import Baseline: "BL01 - Approved Baseline"
   - Import Calendar: "Bridge Project Calendar" (6-day week, night shifts)

   **Section 6: Activity Codes**
   - ☑ Import Activity Codes (importante para filtering)
   - Activity Codes disponibles en este proyecto:
     - Discipline: [DEMO, FOUND, STRUCT, PAVING, ELEC, SAFETY]
     - Phase: [Phase 1A, Phase 1B, Phase 2A, Phase 2B, Phase 3]
     - Work Type: [Permanent, Temporary, Demolition]

7. Execute import
8. Validar: "Successfully imported 1,247 tasks"
9. Verificar task count, date range (18 meses), dependencies visibles

**Parte B: Configurar Task Types Avanzados (15 min)**

P6 importa task types, pero necesitamos refinarlos para simulación 4D correcta.

10. **Identify Demolition Tasks:**
    - Find Items en TimeLiner Tasks Panel
    - Criterio: Task Name contains "Demolish" OR "Remove" OR "Demo"
    - O usar Activity Code: Work Type = "Demolition"
    - Resultado: ~45 tasks de demolición

11. **Configure Demolition Tasks:**
    - Seleccionar todas las demo tasks (Ctrl+Click multiple)
    - Click derecho > Task Type > **Demolish**
    - Esto cambia behavior: Elementos empiezan visibles, desaparecen al final de task

12. **Identify Temporary Works Tasks:**
    - Criterio: Task Name contains "Temporary" OR "Shoring" OR "Formwork" OR "Scaffold"
    - O Activity Code: Work Type = "Temporary"
    - Resultado: ~180 tasks temporales

13. **Configure Temporary Tasks:**
    - Seleccionar temporary tasks
    - Task Type > **Temporary**
    - Behavior: Hidden → Install (visible con appearance temporal) → Remove (hidden)
    - Para temporary tasks, necesitas definir "Remove Date":
      - Properties > End Date (cuando se remueve el elemento temporal)

14. **Permanent Construction Tasks:**
    - Resto de tasks (mayoría, ~1,022 tasks)
    - Task Type > **Construct** (default, ya configurado)

15. **Documentar distribution:**
    - Construct tasks: _____ (~1,022)
    - Demolish tasks: _____ (~45)
    - Temporary tasks: _____ (~180)
    - Total: 1,247

**Parte C: Appearance Rules Avanzadas (15 min)**

16. Crear appearance profiles por disciplina/trabajo:

**Profile 1: Demolition_Red**
- Before: Existing appearance (visible como edificio viejo, color gris)
- During Demolition: Red override, 60% transparency, thick edges (resaltar trabajo peligroso)
- After Demolition: Hidden (desaparece)

**Profile 2: Temporary_Yellow**
- Before: Hidden
- During Install: Orange, 50% transparency
- Temporary State: Yellow, 40% transparency (mientras está en uso)
- During Remove: Red, 70% transparency
- After Remove: Hidden

**Profile 3: Structural_Blue**
- Before: Hidden
- During Construction: Blue, 35% transparency, thick edges
- Constructed: Original material (concrete texture)
- Future: Light blue, 90% transparency

**Profile 4: Foundations_Brown**
- Before: Hidden
- During: Brown/Orange, 40% transparency
- Constructed: Original (concrete gray, rebar visible)

**Profile 5: Deck_Gray**
- Before: Hidden
- During: Dark gray, 30% transparency
- Constructed: Asphalt texture (dark gray realistic)

17. Aplicar profiles a tasks:
    - Demolition tasks → "Demolition_Red"
    - Temporary tasks → "Temporary_Yellow"
    - Foundations tasks (Activity Code: Discipline=FOUND) → "Foundations_Brown"
    - Structural tasks (Discipline=STRUCT) → "Structural_Blue"
    - Paving tasks (Discipline=PAVING) → "Deck_Gray"

18. Tomar screenshots de cada profile configurado (5 screenshots)

**Parte D: Auto-Attach con Search Sets (10 min)**

En lugar de attachment manual, usar search sets inteligentes para vincular automáticamente.

19. **Crear Search Sets por Disciplina:**

**Search Set: "FOUND_Piers_All"**
- Properties > Category = "Structural Foundations" AND Type contains "Pier"
- Resultado: ~10 piers

**Search Set: "STRUCT_Segments_S1"**
- Properties > Category = "Structural Framing" AND (Custom Property "Segment" = "Segment 1")
- Resultado: Dovela 1 (elementos estructurales)

**Repetir para Segments 2, 3, 4, 5** (5 search sets: STRUCT_Segments_S1 a S5)

**Search Set: "DEMO_OldBridge"**
- Properties > Category = "Structural Framing" AND (Custom Property "Status" = "Existing")
- Resultado: Elementos del puente viejo

**Search Set: "TEMP_Shoring_Towers"**
- Properties > Category = "Generic Models" AND Name contains "Shoring"
- Resultado: Torres de soporte temporal

**Search Set: "PAVING_Deck"**
- Properties > Category = "Floors" AND Type = "Bridge Deck"

20. **Auto-Attach Search Sets a Tasks:**
    - Task "Install Foundation Piers" > Attach Search Set > "FOUND_Piers_All"
    - Task "Erect Segment 1" > Attach > "STRUCT_Segments_S1"
    - Task "Erect Segment 2" > Attach > "STRUCT_Segments_S2"
    - ... (repetir para todos los segments)
    - Task "Demolish Old Bridge Section A" > Attach > "DEMO_OldBridge" (con filtering adicional por zona)
    - Task "Install Temporary Shoring - Pier 3" > Attach > "TEMP_Shoring_Towers" (filter por location)
    - Task "Pour Bridge Deck" > Attach > "PAVING_Deck"

21. Ventaja de search sets: Si el modelo se actualiza (agregan elementos), los attachments se actualizan automáticamente.

22. Verificar attachments:
    - Seleccionar cada task importante
    - Columna "Attached" debe mostrar count >0
    - Highlight en modelo para verificar visualmente

**Parte E: Simulación y Export de Video 4D (5 min)**

23. Configurar simulación:
    - Interval: 1 week (18 meses = 78 semanas)
    - Speed: 5x
    - Enable Simulation: ☑

24. Crear saved viewpoints para animación automática:
    - Week 1: Vista aérea general del sitio (muestra tráfico existente)
    - Week 12: Close-up de Pier 3 con shoring towers instalados
    - Week 30: Vista lateral mostrando Segment 1 en cantilever
    - Week 52: Vista isométrica del puente 70% completo
    - Week 78: Vista aérea del puente terminado

25. Configurar animation:
    - TimeLiner > Add Animation
    - Type: Camera Movement
    - Keyframes:
      - 0 weeks → Viewpoint "Week 1"
      - 12 weeks → Viewpoint "Week 12" (transition 2 weeks)
      - 30 weeks → Viewpoint "Week 30" (transition 3 weeks)
      - Etc.

26. Export video 4D:
    - Home > Output > Animation > Export Animation
    - Format: MP4 (H.264 codec)
    - Resolution: 1920x1080 (Full HD)
    - Frame Rate: 30 fps
    - Duration: Calcular based on interval y speed
      - 78 weeks @ 5x speed = ~15 segundos real-time
      - Ajustar speed para video de 2-3 minutos (más presentable)
    - Filename: "Bridge_4D_Simulation_18Months.mp4"
    - Click "Export" (puede tardar 5-15 minutos dependiendo de hardware)

27. Mientras exporta, tomar screenshots de momentos clave:
    - Week 12: Shoring towers visibles (amarillo)
    - Week 24: Demolición en progreso (rojo)
    - Week 40: Segment 3 en cantilever (azul)
    - Week 78: Proyecto completo

### Entregables

- [ ] Archivo NWF guardado: `Exercise_15_Bridge_4D_Advanced.nwf`
- [ ] 5 screenshots de appearance profiles configurados
- [ ] Search Sets documentation (1 página listando 8+ search sets con criterios)
- [ ] Video MP4 exportado: `Bridge_4D_Simulation_18Months.mp4` (2-3 minutos)
- [ ] 4 screenshots de momentos clave (weeks 12, 24, 40, 78)
- [ ] Configuración Report (2 páginas PDF):
  - Task types distribution (tabla)
  - Appearance profiles summary (qué profile para qué tasks)
  - Search sets utilizados (list con criterios)
  - Attachment statistics (tasks attachadas vs no attachadas)
  - Video export settings (resolución, fps, codec, duración)

---

## Ejercicio 4: Análisis de Constructibilidad 4D (Lección 16)

**Duración:** 60 minutos
**Nivel:** Avanzado
**Archivos necesarios:** `HighRise_Tower.nwf` (edificio 45 pisos), `Tower_Schedule.mpp` (cronograma 1,850 tasks)

### Objetivo

Analizar constructibilidad usando simulación 4D, identificar conflictos de secuencia, validar rutas de acceso temporales, simular logística de sitio (laydown areas, crane coverage), detectar problemas de phasing, y generar reporte de constructability.

### Escenario

High-rise residential tower de 45 pisos en Manhattan, New York. Sitio extremadamente restringido (35m × 50m), rodeado de edificios ocupados. Construcción requiere 2 grúas torre, múltiples phases de trabajo (core-first, floors, enclosure, MEP, finishes), y coordinación compleja de logística. Como Senior VDC Manager de Skanska, necesitas validar la constructibilidad del cronograma antes de movilización.

**Datos del Proyecto:**
- Altura: 165m (45 pisos)
- Área: 280,000 SF
- Duración: 30 meses
- Método: Core-first (concrete core sube primero, steel floors siguen)
- Grúas: 2 tower cranes (TC1 en grid A-3, TC2 en grid F-8)
- Restricción crítica: Calle no puede cerrarse >2 horas/día
- Presupuesto: $420M USD

### Tareas

**Parte A: Import y Setup (10 min)**

1. Abrir `HighRise_Tower.nwf` en Navisworks
2. Modelo contiene:
   - 45 pisos de estructura (concrete core + steel floors)
   - Building enclosure (curtain wall)
   - MEP (vertical risers + horizontal distribution)
   - 2 tower crane models (con coverage areas)
   - Site context (edificios adyacentes, calles)
   - Laydown areas (material staging zones)

3. Import cronograma:
   - `Tower_Schedule.mpp` (1,850 tasks)
   - Configure full mapping (dependencies, resources, cost)
   - Baseline: "Approved Baseline - Bid Schedule"
   - Import

4. Validar import:
   - 1,850 tasks imported
   - Date range: 30 meses
   - Dependencies: Visible
   - Critical path: Calculate (esperado: ~300-400 tasks, 18-22%)

5. Realizar attachments básicos a phases principales:
   - Foundations (usar search sets)
   - Core estructura (por piso, 45 search sets)
   - Steel floors (por piso)
   - Curtain wall (por piso)
   - MEP (por zona vertical)

**Parte B: Construction Sequence Analysis (20 min)**

6. **Validar Secuencia Lógica Core-First:**

Reproducir simulación (interval: 1 week, speed: 5x)

Verificar secuencia de cada piso típico:
- ¿Core sube primero? (Sí/No)
- ¿Steel floor instala DESPUÉS de core del mismo piso? (Sí/No)
- ¿Curtain wall instala DESPUÉS de steel floor? (Sí/No)
- ¿MEP rough-in empieza cuando floors están cerrados? (Sí/No)

7. **Identificar Secuencia Problems:**

**Problema esperado #1: MEP Risers vs Core Construction**
- MEP risers verticales (shafts) necesitan instalarse mientras core sube
- Cronograma muestra: ¿MEP risers están scheduled correctamente? (verificar)
- Pausar simulación en Floor 20
- ¿Hay MEP risers visibles hasta Floor 20? (Sí/No)
- Si No, hay problema de secuencia → Documentar

**Problema esperado #2: Curtain Wall Early Start**
- Curtain wall no puede instalarse hasta que structure esté completa y building esté plumb
- Verificar: ¿Curtain wall empieza demasiado temprano en algunos floors?
- Pausar en Floor 10
- ¿Curtain wall instalada mientras steel floor todavía en construcción? (conflict)
- Documentar conflictos encontrados

**Problema esperado #3: Elevator Installation Timing**
- Elevators requieren core completo hasta roof
- Cronograma muestra: ¿Elevator installation empieza cuando? (semana ____)
- ¿Core está completo en esa fecha? (verificar visualmente)
- Si empieza antes de core completion → Problema de secuencia

8. **Documentar Sequence Issues encontrados:**
   - Issue #1: Descripción, floors afectados, impacto (días de retraso), recomendación
   - Issue #2: ...
   - Issue #3: ...
   - (Mínimo 3 issues, máximo 10)

**Parte C: Crane Coverage Analysis (15 min)**

9. **Modelo de grúas incluye:**
   - TC1 (Tower Crane 1): Grid A-3, altura 180m, radio 60m
   - TC2 (Tower Crane 2): Grid F-8, altura 180m, radio 55m

10. **Crear Crane Coverage Zones:**

En el modelo, las grúas tienen "coverage cones" (geometry mostrando alcance)

Crear search sets:
- "Coverage_TC1": Todos los elementos dentro del radio de TC1
- "Coverage_TC2": Elementos dentro del radio de TC2
- "Coverage_BOTH": Overlap zone (alcanzable por ambas grúas)
- "Coverage_NONE": Elementos fuera de alcance (PROBLEMA)

11. **Analizar Coverage por Fase:**

**Phase 1: Floors 1-15 (Core + Steel)**
- Reproducir simulación hasta Floor 15 completo
- Pause
- Highlight "Coverage_TC1" en color verde
- Highlight "Coverage_TC2" en color azul
- ¿Todos los elementos de Floors 1-15 están cubiertos? (Sí/No)
- Si hay elementos fuera de coverage → Documentar

**Phase 2: Floors 16-30**
- TC1 sube a nueva altura (jump)
- ¿Fecha de jump en cronograma? Semana ____
- ¿Coverage sigue siendo adecuado? (verificar visualmente)

**Phase 3: Floors 31-45**
- TC2 sube
- Coverage en pisos superiores: ¿Adecuado? (Sí/No)

12. **Identificar Coverage Problems:**
- Elementos en esquinas del building que están fuera de radio de ambas grúas
- Solución propuesta: Mobile crane temporal para esos elementos (documentar)

13. **Temporal Crane Conflicts:**
- ¿Hay tasks donde ambas grúas operan simultáneamente en overlap zone? (Sí/No)
- Pausar simulación cuando ambas grúas están activas
- Verificar distancia mínima entre cargas (safe clearance)
- Si < 10m de clearance → Potencial safety issue → Documentar

**Parte D: Site Logistics Simulation (10 min)**

14. **Laydown Areas:**

Modelo incluye laydown zones:
- Laydown A: Steel storage (capacidad: 200 tons)
- Laydown B: Curtain wall panels (30 panels)
- Laydown C: MEP materials
- Delivery zone: Calle con acceso temporal (2 hrs/día permitido)

15. **Validar Material Flow:**

**Steel Delivery Sequence:**
- Tasks en cronograma: "Steel Delivery Floor X"
- Verificar: ¿Steel llega ANTES de erection task? (lead time adecuado)
- Pausar en semana de "Steel Erection Floor 20"
- ¿Steel ya está en Laydown A? (debería estar visible si modelo lo incluye)
- Timing correcto? (Sí/No)

**Curtain Wall Staging:**
- Panels no pueden estar en sitio >1 semana (riesgo de daño)
- Cronograma muestra: "CW Delivery Floor X" y "CW Install Floor X"
- Gap entre delivery e install = _____ días (debería ser <7 días)
- Si >7 días → Problema de logística → Documentar

16. **Access Route Validation:**

Modelo incluye "access path" desde calle a laydown areas

Crear search set: "Access_Path" (elementos que bloquean ruta)

Durante simulación:
- ¿Access path está siempre despejado? (Sí/No)
- ¿Hay tasks que bloquean temporalmente el acceso? (Ej: temporary fence, material stockpile)
- Identificar semanas donde acceso está bloqueado
- Documentar y proponer solución (re-route o re-schedule)

**Parte E: Generar Constructability Report (5 min)**

17. Compilar hallazgos en reporte estructurado:

**Constructability Analysis Report - High-Rise Tower**

**Executive Summary:**
- Proyecto: High-Rise Residential Tower, 45 pisos
- Análisis realizado: 4D Simulation con Navisworks TimeLiner
- Fecha: [Today's date]
- Analista: [Your name], Senior VDC Manager

**Issues Identificados:**

**Category: Construction Sequence**
1. Issue #1: MEP Risers vs Core (descripción, impacto, recomendación)
2. Issue #2: Curtain Wall Early Start (descripción, etc.)
3. ...

**Category: Crane Coverage**
1. Issue #4: Corner elements fuera de crane reach (descripción, solución: mobile crane)
2. Issue #5: Crane overlap conflicts at Floor 28 (descripción, re-schedule recomendado)

**Category: Site Logistics**
1. Issue #6: Curtain wall staging >7 días (riesgo, solución: JIT delivery)
2. Issue #7: Access path bloqueado Weeks 45-48 (conflicto, solución: temporary reroute)

**Recommendations:**
- Priority 1 (Critical - debe corregirse antes de mobilización): Issues #X, #Y
- Priority 2 (Important - corregir en primeras 4 semanas): Issues #A, #B
- Priority 3 (Nice to have - optimización): Issues #C, #D

**Cost Impact:**
- Estimated cost to resolve all issues: $XXX,XXX USD
- Estimated schedule impact if not resolved: X weeks delay

18. Export reporte a PDF
19. Anexar screenshots de issues clave (5-10 imágenes con annotations)

### Entregables

- [ ] Archivo NWF guardado: `Exercise_16_HighRise_Constructability.nwf`
- [ ] Constructability Analysis Report (PDF, 8-12 páginas):
  - Executive summary
  - Sequence issues (mínimo 3)
  - Crane coverage analysis (con diagrams/screenshots)
  - Site logistics findings (mínimo 2)
  - Recommendations prioritizadas
  - Cost/schedule impact estimate
- [ ] Screenshots anotados (8-10 imágenes mostrando issues específicos)
- [ ] Crane coverage diagrams (2-3 plan views mostrando coverage zones)
- [ ] Video corto (1-2 min) mostrando issue crítico en simulación 4D

---

## Ejercicio 5: TimeLiner Reporting y Earned Value (Lección 17)

**Duración:** 50 minutos
**Nivel:** Avanzado
**Archivos necesarios:** Resultados del Ejercicio 4 (High-Rise Tower con cronograma importado y simulación configurada)

### Objetivo

Generar reportes profesionales de TimeLiner incluyendo Gantt charts, quantity takeoffs por fase, cost loading, cashflow analysis, resource histograms, progress tracking, earned value metrics, y executive dashboards.

### Escenario

Mes 12 del proyecto High-Rise Tower (30 meses total). Project Management Office (PMO) requiere reporting mensual comprehensivo para stakeholders: Owner (developer), CFO, Construction Manager, y City Planning Department. Como VDC Manager, debes generar suite completa de reportes 4D que muestran progress, cost performance, schedule adherence, y forecast to completion.

**Contexto (Simulated Progress Data):**
- Fecha actual: 12 meses desde start (40% timeline)
- Progress real: 35% complete (5% behind baseline)
- Costo planificado (PV): $168M USD (40% de $420M)
- Costo real (AC): $155M USD (under budget)
- Valor ganado (EV): $147M USD (35% de $420M)

### Tareas

**Parte A: Gantt Chart Reports (12 min)**

1. Abrir archivo del Ejercicio 4: `Exercise_16_HighRise_Constructability.nwf`
2. TimeLiner > Reports tab > Gantt Chart

3. **Generar Executive Gantt (Summary Level):**
   - Filter: Show only Level 1 WBS tasks (summary tasks)
   - Resultado: ~10-15 major phases visible
   - Customize Gantt:
     - Show Critical Path: Highlight en rojo
     - Show Baseline: Comparación planned vs actual
     - Show Milestones: Diamantes en major deliverables
     - Date Range: Full project (30 meses)
     - Zoom: Fit to page
   - Export:
     - Format: PDF
     - Filename: "Gantt_Executive_Summary_Month12.pdf"
     - Page size: 11x17 (Tabloid - para mejor readability)

4. **Generar Detailed Gantt (Estructura Level 1-5):**
   - Filter: Show all levels, pero collapsed a Level 2-3
   - Customize:
     - Columns visible: Task Name, Duration, Start, Finish, % Complete, Total Float
     - Grouping: By WBS Phase
     - Color coding: By discipline (STRUCT=blue, MEP=orange, ARCH=green)
   - Export:
     - Format: PDF
     - Filename: "Gantt_Detailed_All_Phases_Month12.pdf"
     - Multi-page: Allow overflow a múltiples páginas (esperado: 15-25 páginas)

5. **Generar 3-Week Look-Ahead Gantt:**
   - Filter: Tasks con Start Date entre "Today" y "Today + 21 days"
   - Resultado: ~50-80 tasks (próximas 3 semanas)
   - Customize:
     - Zoom: Daily scale
     - Show Resource Names: Columna visible
     - Show Predecessors: Para verificar dependencies
   - Export:
     - Format: PDF
     - Filename: "Gantt_3Week_Lookahead_Month12.pdf"
   - Uso: Este reporte va a field supervisors para planning de corto plazo

**Parte B: Quantity Takeoff Reports por Fase (10 min)**

6. TimeLiner > Reports > Quantity Takeoff

7. **Structural Steel Quantity por Mes:**
   - Filter tasks: Discipline = "STRUCT" AND Material = "Steel"
   - Group By: Start Month
   - Quantity Column: Si modelo tiene "Weight" property, usar esa. Si no, usar "Count"
   - Generate report:
     - Table mostrando:
       | Month | Task Count | Total Steel Weight (Tons) | % of Total |
       |-------|------------|---------------------------|------------|
       | Month 3 | 45 tasks | 850 tons | 12% |
       | Month 4 | 62 tasks | 1,200 tons | 17% |
       | ... | ... | ... | ... |
   - Export a Excel: "QTO_Steel_By_Month.xlsx"

8. **Concrete Quantity por Fase:**
   - Filter: Category = "Structural Foundations" OR "Floors" (concrete elements)
   - Group By: WBS Phase (Foundations, Core L1-15, Core L16-30, Core L31-45)
   - Quantity: Volume (Cubic Yards)
   - Generate report table
   - Export: "QTO_Concrete_By_Phase.xlsx"

9. **Curtain Wall Quantity por Piso:**
   - Filter: Category = "Curtain Wall"
   - Group By: Level (Floor 1, Floor 2, ..., Floor 45)
   - Quantity: Area (SF)
   - Generate report
   - Export: "QTO_CurtainWall_By_Floor.xlsx"

10. **Uso de estos reportes:**
    - Procurement: Ordenar materiales con lead time adecuado
    - Subcontractors: Validar quantities en bids
    - Cost control: Verificar installed quantities vs budget

**Parte C: Cost Loading y Cashflow Analysis (12 min)**

11. TimeLiner > Reports > Cost Analysis

**Prerequisito:** Cronograma debe tener Cost data en tasks (importado desde MS Project)

12. **S-Curve de Costo Acumulado:**
    - Type: Cumulative Cost over Time
    - X-axis: Timeline (30 meses)
    - Y-axis: Cumulative Cost ($USD millions)
    - Curves:
      - Planned Value (PV): Baseline cost curve (azul)
      - Actual Cost (AC): Costo real gastado (rojo)
      - Earned Value (EV): Valor del trabajo completado (verde)
    - Generate chart
    - Export: PNG (1920x1080) "SCurve_Cost_Month12.png"

13. **Cashflow por Mes:**
    - Type: Cost per Period (monthly)
    - Table:
      | Month | Planned Cost | Actual Cost | Earned Value | Variance |
      |-------|--------------|-------------|--------------|----------|
      | Month 1 | $3.2M | $2.8M | $2.9M | +$0.1M (under) |
      | Month 2 | $5.5M | $5.1M | $4.8M | -$0.3M (behind) |
      | ... | ... | ... | ... | ... |
      | Month 12 | $18.2M | $17.5M | $16.8M | -$0.7M |
    - Export a Excel: "Cashflow_Monthly_Month12.xlsx"

14. **Cost by Discipline (Breakdown):**
    - Filter By: Discipline (Activity Code)
    - Pie chart:
      - Structural: 35% ($147M)
      - MEP: 28% ($118M)
      - Architectural: 22% ($92M)
      - Site Work: 8% ($34M)
      - Commissioning: 7% ($29M)
    - Export: "Cost_By_Discipline.png"

15. **Earned Value Metrics:**

Calcular (manualmente o con Excel si TimeLiner no auto-calcula):

**En Month 12 (current date):**
- Planned Value (PV) = $168M (40% timeline × $420M budget)
- Earned Value (EV) = $147M (35% complete × $420M)
- Actual Cost (AC) = $155M (real spent)

**Performance Indices:**
- Schedule Performance Index (SPI) = EV / PV = $147M / $168M = **0.875**
  - SPI < 1.0 → **Behind schedule** (12.5% atrasado)
- Cost Performance Index (CPI) = EV / AC = $147M / $155M = **0.948**
  - CPI < 1.0 → **Over budget** (5.2% sobre costo por unidad de trabajo)

**Variances:**
- Schedule Variance (SV) = EV - PV = $147M - $168M = **-$21M** (behind)
- Cost Variance (CV) = EV - AC = $147M - $155M = **-$8M** (over budget)

**Forecast:**
- Estimate at Completion (EAC) = Budget / CPI = $420M / 0.948 = **$443M**
  - Forecast overrun: $23M (5.5%)
- Estimate to Complete (ETC) = EAC - AC = $443M - $155M = $288M

**Completion Date Forecast:**
- Original duration: 30 meses
- SPI = 0.875 → Velocity es 87.5% de planeado
- Forecasted duration = 30 / 0.875 = **34.3 meses** (~4 meses de retraso)

16. Documentar estas métricas en tabla:
    - Export como "Earned_Value_Report_Month12.pdf" (1 página con todas las métricas)

**Parte D: Resource Histograms (8 min)**

17. TimeLiner > Reports > Resource Allocation

18. **Labor Histogram (Workforce por Semana):**
    - Resource Type: Labor (workers)
    - X-axis: Timeline (semanas)
    - Y-axis: Total Workers on Site
    - Show:
      - Planned allocation (baseline)
      - Current allocation (actual)
      - Peak: Identificar semana con máximo workforce
    - Identify:
      - Peak workforce: Semana ____, _____ workers
      - Average workforce: _____ workers
      - Under-allocated periods: Semanas donde workforce < 50% de peak (inefficiency)
    - Export chart: "Histogram_Labor_Weekly.png"

19. **Equipment Histogram (Crane Usage):**
    - Resource: "Tower Crane 1", "Tower Crane 2"
    - Show allocation over time
    - Identify:
      - Weeks where crane is idle (0% utilization)
      - Weeks where crane is over-allocated (>100%, conflict)
    - Export: "Histogram_Cranes.png"

20. **Over-Allocation Analysis:**
    - TimeLiner > Tools > Check Resource Over-Allocation
    - Report genera lista de resources over-allocated:
      - Ejemplo: "Steel Erection Crew" assigned a 2 tasks simultáneamente en Week 18
    - Export: "Resource_Conflicts_Report.pdf"

**Parte E: Progress Tracking Report (8 min)**

21. **Baseline vs Actual Comparison:**
    - TimeLiner permite comparar cronograma actual vs baseline
    - Generar reporte mostrando:
      - Tasks completadas on-time: _____ tasks (green)
      - Tasks completadas late: _____ tasks (yellow/red)
      - Tasks en progreso on-track: _____ tasks
      - Tasks en progreso behind: _____ tasks

22. **Progress Photography (4D Snapshots):**
    - Export snapshots de simulación 4D mostrando progress:
      - Month 3: Foundations complete
      - Month 6: Core @ Floor 15
      - Month 9: Core @ Floor 30
      - Month 12: Core @ Floor 40, Steel floors @ Floor 35 (current state)
    - 4 imágenes: "Progress_Month_03.png", "Progress_Month_06.png", etc.

23. **Progress Summary Table:**
    | Phase | Planned % Complete | Actual % Complete | Variance | Status |
    |-------|-------------------|-------------------|----------|--------|
    | Foundations | 100% | 100% | 0% | Complete ✓ |
    | Core L1-L15 | 100% | 100% | 0% | Complete ✓ |
    | Core L16-L30 | 100% | 95% | -5% | Delayed ⚠ |
    | Core L31-L45 | 60% | 45% | -15% | Behind ⚠ |
    | Steel Floors | 55% | 40% | -15% | Behind ⚠ |
    | Curtain Wall | 30% | 20% | -10% | Behind ⚠ |
    | MEP Rough-In | 25% | 18% | -7% | Behind ⚠ |

    Export: "Progress_Summary_Month12.xlsx"

### Entregables

- [ ] 3 Gantt Chart PDFs:
  - Executive Summary Gantt
  - Detailed All Phases Gantt
  - 3-Week Look-Ahead Gantt
- [ ] 3 Quantity Takeoff Excel files:
  - Steel by Month
  - Concrete by Phase
  - Curtain Wall by Floor
- [ ] Cost Analysis deliverables:
  - S-Curve PNG
  - Cashflow Monthly Excel
  - Cost by Discipline PNG
  - Earned Value Report PDF (1 página)
- [ ] Resource Histograms:
  - Labor Weekly PNG
  - Cranes PNG
  - Over-Allocation Report PDF
- [ ] Progress Tracking:
  - 4 Progress Snapshots (Months 3, 6, 9, 12)
  - Progress Summary Table (Excel)
- [ ] Executive Summary Report (PDF, 2-3 páginas) conteniendo:
  - Project status overview
  - Schedule performance (SPI, behind/ahead)
  - Cost performance (CPI, over/under budget)
  - Key issues y risks
  - Forecast to completion (EAC, duration forecast)
  - Recommendations para recovery

**Total: 15-20 archivos**

---

## Ejercicio 6: Técnicas Avanzadas de 4D Simulation (Lección 18)

**Duración:** 70 minutos
**Nivel:** Experto
**Archivos necesarios:** `DataCenter_Complex.nwf` (data center 80,000 SF), `DataCenter_Baseline.mpp`, `DataCenter_Actual.mpp` (2 cronogramas)

### Objetivo

Aplicar técnicas avanzadas de simulación 4D: multi-scenario comparison (baseline vs actual), what-if analysis para schedule alternatives, schedule compression strategies (crashing, fast-tracking), float visualization, look-ahead planning, y earned value visualization en 4D.

### Escenario

Data center de 80,000 SF para cliente Fortune 100 (tech company). Proyecto critical: Cada día de retraso cuesta $500k USD en revenue perdido. Mes 6 de construcción (12 meses total), proyecto está 3 semanas atrasado. CFO requiere análisis de recovery options:
1. Baseline scenario (plan original)
2. Current scenario (actual progress)
3. Recovery scenario 1: Crash critical activities (add crews, overtime)
4. Recovery scenario 2: Fast-track MEP (overlap con structural)

Como VDC Director, debes simular los 4 escenarios en 4D y recomendar mejor path forward.

**Datos del Proyecto:**
- Área: 80,000 SF (single story, alta densidad MEP)
- Presupuesto: $95M USD
- Duración baseline: 12 meses
- Duración actual (forecast): 12.75 meses (+3 semanas de retraso)
- Revenue impact: $500k USD por día de retraso
- Client: Tech Fortune 100 (Amazon, Google, Meta - type)

### Tareas

**Parte A: Setup Multi-Scenario (15 min)**

1. Abrir `DataCenter_Complex.nwf` en Navisworks
2. Modelo incluye:
   - Estructura (tilt-up concrete walls, steel roof)
   - MEP ultra-denso (10,000+ elementos)
     - HVAC (chillers, CRAC units, ductos masivos)
     - Electrical (2.5 MW capacity, switchgear, UPS, generators)
     - Fire protection (pre-action systems)
     - Plumbing (cooling water, condensate)
   - IT Equipment (server racks, networking - to be installed)
   - Site context (existing data center wing en operación)

3. **Import 3 cronogramas como scenarios separados:**

**Scenario 1: Baseline (Plan Original)**
- TimeLiner > Data Sources > Add
- Import `DataCenter_Baseline.mpp`
- Configure mapping (full import)
- Name data source: "Baseline_Original_Plan"
- Import → 847 tasks

**Scenario 2: Current Actual (Progress Real a Month 6)**
- Add new data source
- Import `DataCenter_Actual.mpp`
- Este cronograma tiene:
  - % Complete actualizado (real progress)
  - Algunas tasks delayed (new finish dates)
  - Algunas tasks completadas early
- Name: "Actual_Progress_Month6"
- Import → 847 tasks (mismo número, pero dates y % diferentes)

**Scenario 3: Recovery Scenario 1 - Crash**
- Duplicate "Actual_Progress_Month6" data source (dentro de Navisworks)
- Rename: "Recovery_Crash_Critical"
- Modificar tasks críticas manualmente en TimeLiner:
  - Identificar tasks en critical path que están delayed
  - Reducir duration en 25-40% (simula add crews/overtime)
  - Ejemplo:
    - Task "Install Electrical Switchgear": 14 days → 10 days (add crew)
    - Task "Install HVAC Chillers": 21 days → 15 days (overtime)
    - Task "Fire Protection Testing": 10 days → 7 days (weekend work)
  - Modificar ~15-20 tasks críticas
  - TimeLiner > Tools > Recalculate Schedule (actualiza dependencies)

**Scenario 4: Recovery Scenario 2 - Fast-Track**
- Duplicate "Actual_Progress_Month6"
- Rename: "Recovery_FastTrack_MEP"
- Modificar dependencies para permitir overlap:
  - Cambiar algunas dependencies FS (Finish-to-Start) a SS (Start-to-Start) con lag
  - Ejemplo:
    - Original: "Structural Complete" FS → "MEP Rough-In Start"
    - Fast-track: "Structural 50% Complete" SS → "MEP Rough-In Start" (overlap)
  - Permite MEP crew empezar en áreas donde estructura ya está completa (no esperar 100%)
  - Modificar ~8-12 dependencies estratégicas
  - Recalculate Schedule

4. Ahora TimeLiner tiene 4 data sources (scenarios)
5. Documentar:
   - Baseline completion date: _____ (esperado: 12 meses desde start)
   - Actual forecast date: _____ (esperado: ~13 semanas adicionales)
   - Recovery Crash date: _____ (debería recuperar ~2 semanas)
   - Recovery Fast-Track date: _____ (debería recuperar ~3 semanas)

**Parte B: Multi-Scenario Comparison (15 min)**

6. **Gantt Comparison de 4 Scenarios:**
   - TimeLiner > Tools > Compare Data Sources
   - Select:
     - Primary: "Baseline_Original_Plan"
     - Compare with: "Actual_Progress_Month6", "Recovery_Crash", "Recovery_FastTrack"
   - Generate comparison Gantt showing all 4 scenarios side-by-side:
     - Barras azules: Baseline
     - Barras rojas: Actual (mostrando delays)
     - Barras verdes: Recovery Crash
     - Barras naranjas: Recovery Fast-Track
   - Export: "Gantt_4Scenarios_Comparison.pdf" (11x17 size)

7. **4D Visual Comparison:**
   - Reproducir simulación con Scenario "Baseline":
     - TimeLiner > Data Sources > Set Active: "Baseline_Original_Plan"
     - Play simulation (interval: 1 week)
     - Pausar en Month 6
     - Export snapshot: "Scenario_Baseline_Month6.png"

   - Reproducir con Scenario "Actual":
     - Set Active: "Actual_Progress_Month6"
     - Play hasta Month 6
     - Export snapshot: "Scenario_Actual_Month6.png"

   - Comparar visualmente:
     - Lado a lado (Photoshop o PowerPoint)
     - ¿Qué áreas están menos completas en Actual vs Baseline?
     - Identificar: Electrical switchgear área (ejemplo) está delayed

8. **Simulación de Recovery Scenarios:**
   - Set Active: "Recovery_Crash_Critical"
   - Play hasta completion
   - Documentar:
     - Completion date con crash: _____
     - Time saved vs Actual: _____ semanas
     - Visual: ¿Se ve realista el acceleration? (crews trabajando simultáneamente)

   - Set Active: "Recovery_FastTrack_MEP"
   - Play hasta completion
   - Documentar:
     - Completion date: _____
     - Time saved: _____ semanas
     - Visual: ¿Se ve overlap MEP/Structural? (Sí, MEP empieza antes en simulación)

9. **Cost-Benefit Analysis de Recovery:**

**Recovery Option 1: Crash Critical Path**
- Cost to crash:
  - Labor overtime premium: 15 tasks × $25k avg = $375k
  - Equipment rental acceleration: $150k
  - Total cost: **$525k**
- Schedule recovery: 2 semanas = 14 días
- Revenue recovery: 14 days × $500k/day = **$7M USD**
- Net benefit: $7M - $0.525M = **$6.475M USD**
- ROI: 1,233%

**Recovery Option 2: Fast-Track MEP Overlap**
- Cost to fast-track:
  - Additional MEP crew mobilization: $200k
  - Potential rework risk (MEP interfiere con structural): $100k contingencia
  - Total cost: **$300k**
- Schedule recovery: 3 semanas = 21 días
- Revenue recovery: 21 days × $500k = **$10.5M USD**
- Net benefit: $10.5M - $0.3M = **$10.2M USD**
- ROI: 3,400%

**Recommendation:** Fast-Track MEP (mejor ROI, mayor recovery)

**Parte C: Float Analysis y Visualization (12 min)**

10. **Total Float Visualization:**
    - TimeLiner > Set Active: "Actual_Progress_Month6"
    - Tasks Panel > Add Column "Total Float"
    - Sort by Total Float ascending
    - Color code tasks by float:
      - Float = 0 days (Critical): Red
      - Float 1-7 days (Near-Critical): Orange
      - Float 8-21 days (Moderate float): Yellow
      - Float >21 days (High float): Green

11. **Create Float Bands Search Sets:**
    - Search Set "Critical_Float_0": Total Float = 0.0
    - Search Set "NearCritical_Float_1to7": Total Float 1.0-7.0
    - Search Set "Moderate_Float_8to21": Total Float 8.0-21.0
    - Search Set "High_Float_21plus": Total Float >21.0

12. **Apply Float-Based Appearance:**
    - Selection Set "Critical_Float_0" → Appearance: Red, 0% transparency
    - "NearCritical_Float_1to7" → Orange, 20% transparency
    - "Moderate_Float_8to21" → Yellow, 40% transparency
    - "High_Float_21plus" → Green, 60% transparency

13. **Reproducir simulación con Float Visualization:**
    - Play simulation
    - Elementos se colorean según su float disponible
    - Tasks críticas (red) son donde el equipo debe focus efforts
    - Tasks con high float (green) pueden postergarse si necesario
    - Export video: "Float_Visualization_Simulation.mp4" (1-2 min)

14. **Float Consumption Analysis:**
    - Compare Baseline vs Actual:
      - Task "Install HVAC Chillers":
        - Baseline Float: 5 días
        - Actual Float: 0 días (ahora es crítico, consumió todo el float)
      - Identificar 5-10 tasks que consumieron float significativo
      - Documentar en tabla:
        | Task Name | Baseline Float | Actual Float | Float Consumed | Now Critical? |
        |-----------|----------------|--------------|----------------|---------------|
        | Install Chillers | 5 days | 0 days | 5 days | Yes ⚠ |
        | Fire Alarm Install | 12 days | 3 days | 9 days | No |
        | ... | ... | ... | ... | ... |

**Parte D: Look-Ahead Planning (2-Week Detailed) (10 min)**

15. **Generate 2-Week Look-Ahead:**
    - Current date: Month 6 (simulated)
    - Filter tasks:
      - Start Date >= Today
      - Start Date <= Today + 14 days
    - Resultado: ~25-40 tasks en próximas 2 semanas

16. **Detailed Look-Ahead Report:**
    - Para cada task en look-ahead window, documentar:
      - Task Name
      - Start Date
      - Duration
      - Resource Requirements (crews, equipment)
      - Predecessors (are they complete?)
      - Material Requirements (is material on-site?)
      - Constraints/Risks
    - Export: "LookAhead_2Week_Detailed.xlsx"

17. **Look-Ahead 4D Simulation:**
    - Configure simulation:
      - Start Date: Today (Month 6)
      - End Date: Today + 14 days
      - Interval: 1 day (daily detail)
      - Speed: 1x (slow para review detallado)
    - Play simulation mostrando solo próximas 2 semanas
    - Supervisors pueden ver exactamente qué se instala cada día
    - Export video: "LookAhead_2Week_Daily.mp4"

18. **Constraint Analysis en Look-Ahead:**
    - Identificar tasks en look-ahead que tienen:
      - **Constraint 1**: Predecessor no completado todavía (risk de delay)
      - **Constraint 2**: Resource conflict (misma crew needed en 2 places)
      - **Constraint 3**: Material not on-site yet (procurement issue)
      - **Constraint 4**: Area access blocked by otra trade
    - Documentar constraints encontrados (mínimo 3-5)
    - Proponer mitigación para cada constraint

**Parte E: Earned Value 4D Visualization (18 min)**

19. **Setup Cost-Loaded Simulation:**
    - Verify tasks tienen cost data (imported desde MS Project)
    - TimeLiner > Settings > Enable Cost Visualization

20. **Configurar Color by Cost Performance:**
    - Tasks se colorean según Cost Performance Index (CPI):
      - CPI > 1.1 (significativamente under budget): Dark Green
      - CPI 1.0-1.1 (slightly under budget): Light Green
      - CPI 0.9-1.0 (on budget): Yellow
      - CPI 0.8-0.9 (over budget): Orange
      - CPI < 0.8 (significativamente over budget): Red

21. **Reproducir EVM Simulation:**
    - Play simulation desde start hasta Month 6 (current)
    - Tasks se colorean dinámicamente según cost performance
    - Export snapshots:
      - Month 2: Early stage cost performance
      - Month 4: Mid-point
      - Month 6: Current state
    - 3 imágenes mostrando cost performance evolution

22. **EVM Metrics Dashboard:**

**Calcular métricas globales (Month 6):**
- Budget at Completion (BAC): $95M USD
- Planned Value (PV) @ 50% timeline: $47.5M
- Earned Value (EV) @ 45% complete: $42.75M
- Actual Cost (AC): $44.5M

**Performance Indices:**
- SPI = EV/PV = $42.75M / $47.5M = **0.90** (10% behind schedule)
- CPI = EV/AC = $42.75M / $44.5M = **0.96** (4% over budget per unit work)

**Forecasts:**
- EAC = BAC / CPI = $95M / 0.96 = **$98.96M** (forecasted $4M overrun)
- ETC = EAC - AC = $98.96M - $44.5M = $54.46M (remaining budget needed)
- VAC = BAC - EAC = $95M - $98.96M = **-$3.96M** (variance at completion)

**Schedule Forecast:**
- Original: 12 meses
- SPI = 0.90 → Velocity 90% de planificado
- Forecasted duration = 12 / 0.90 = **13.33 meses** (~6 semanas de retraso)

23. **Create EVM Dashboard Visual:**
    - Excel o PowerPoint dashboard con:
      - S-Curve chart (PV, EV, AC)
      - KPI cards: SPI, CPI, VAC, Forecasted Completion
      - Traffic lights:
        - Schedule: Red (behind)
        - Cost: Yellow (slightly over)
        - Quality: Green (no issues)
      - Top 10 cost overrun tasks (table)
      - Recommendations section
    - Export: "EVM_Dashboard_Month6.pdf"

24. **Integrate EVM con 4D Simulation para Executive Presentation:**
    - Create presentation-quality video:
      - Intro slide: Project overview, current status
      - 4D simulation playback (30 seconds, accelerated)
      - Pause at Month 6: Show EVM dashboard overlay
      - Narration (text overlays):
        - "Project is 45% complete, 10% behind schedule"
        - "Cost performance: 4% over budget per unit of work"
        - "Forecast: $4M overrun, 6 weeks delay"
        - "Recovery plan: Fast-track MEP, save 3 weeks, cost $300k"
      - Show Recovery scenario simulation (30 seconds)
      - Conclusion slide: Recommendation to proceed with fast-track
    - Total video: 2-3 minutos
    - Export: "Executive_Presentation_EVM_4D.mp4" (1080p, high quality)

### Entregables

- [ ] Archivo NWF con 4 scenarios configurados: `Exercise_18_DataCenter_MultiScenario.nwf`
- [ ] Gantt Comparison PDF (4 scenarios lado a lado)
- [ ] Scenario Comparison Screenshots (4 imágenes: Baseline, Actual, Crash, Fast-Track @ Month 6)
- [ ] Cost-Benefit Analysis Report (1-2 páginas) comparando recovery options
- [ ] Float Visualization Video: "Float_Visualization_Simulation.mp4"
- [ ] Float Consumption Analysis Table (Excel)
- [ ] 2-Week Look-Ahead Report (Excel) + Video "LookAhead_2Week_Daily.mp4"
- [ ] Look-Ahead Constraint Analysis (1 página PDF)
- [ ] EVM Snapshots (3 imágenes: Months 2, 4, 6)
- [ ] EVM Dashboard PDF
- [ ] Executive Presentation Video: "Executive_Presentation_EVM_4D.mp4" (2-3 min, alta calidad)
- [ ] Final Recommendation Memo (1 página) para CFO:
  - Current status summary
  - Recovery options analyzed (Crash vs Fast-Track)
  - Cost-benefit de cada option
  - Recommendation: Fast-Track MEP (rationale)
  - Implementation plan (próximos pasos)

**Total: 15-18 archivos + comprehensive report package**

---

## Proyecto Integrador Final - Módulo 3

**Duración:** 6-8 horas
**Nivel:** Experto

### Escenario

Mixed-Use Development de $850M USD en centro urbano de Chicago:
- **Tower A**: Residential (50 pisos, 400 units)
- **Tower B**: Office (35 pisos, 500,000 SF)
- **Podium**: Retail (3 pisos, 150,000 SF) + Parking (5 niveles, 800 spaces)
- **Cronograma**: 42 meses
- **Complejidad**: Site ultra-restringido, 2 tower cranes por tower (4 total), construcción en sitio con edificios adyacentes ocupados, fases críticas coordinadas con city permits

Usted es **Director of VDC** para el General Contractor (Turner Construction, Skanska, o similar). Owner (developer) requiere presentación comprehensiva de 4D simulation para securing financing ($850M construction loan). Presentación es ante: Bank consortium, City Planning Department, Community Board, y Developer's Board of Directors.

### Deliverables Completos

**1. Cronograma Completo Importado (P6 o MS Project)**
- Import schedule de 2,500+ tasks
- 42 meses duration
- Full WBS hierarchy (6 niveles)
- Dependencies completas (FS, SS, FF con lags)
- Resources assigned (50+ resource types)
- Cost loaded ($850M distributed)
- Baseline establecido
- Critical path identificado

**2. Modelo Federado BIM Completo**
- Arquitectura (ambas towers + podium)
- Estructura (foundations, core, steel, parking structure)
- MEP (HVAC, plumbing, electrical, fire protection para 3 programas)
- Site (context buildings, streets, utilities)
- Temporary elements (4 tower cranes, shoring, scaffolding, desvíos)
- Total elementos: 80,000+ objects

**3. 4D Simulation Configuration Comprehensiva**
- **Task Types:** Construct (2,200), Demolish (100), Temporary (200)
- **Appearance Profiles:** Mínimo 8 profiles customizados:
  - Demolition (existing elements)
  - Foundations
  - Structural (separate profiles por tower)
  - MEP por discipline (HVAC, Plumb, Elec, FP)
  - Architectural finishes
  - Temporary works
- **Attachments:** 100% de tasks con model elements vinculados
  - Usar search sets inteligentes (mínimo 50 search sets creados)
  - Auto-attach para updates efficiency

**4. Constructability Analysis Report (15-20 páginas PDF)**
- Executive Summary
- Sequence validation (10+ sequence issues identificados y resueltos)
- Crane coverage analysis (4 cranes, coverage maps por phase)
- Site logistics plan (laydown areas, access routes, material flow)
- Phasing plan (Tower A vs Tower B, podium sequencing)
- Conflict resolution documentation (conflicts encontrados + soluciones)
- Risk analysis (top 10 construction risks identificados en simulación)
- Recommendations (mejoras al plan constructivo)

**5. Multi-Scenario Analysis**
- **Scenario 1:** Baseline (plan original, 42 meses)
- **Scenario 2:** Accelerated (client wants 38 meses, crash schedule)
- **Scenario 3:** Budget-Optimized (reduce costs, extend to 45 meses)
- **Scenario 4:** Phased Delivery (Tower A completa 6 meses antes de Tower B para early occupancy)
- Comparison Gantt de 4 scenarios
- Cost-benefit analysis de cada scenario
- Recommendation de optimal scenario

**6. Reporting Package Completo**
- **Gantt Charts:**
  - Executive Summary Gantt (1 página)
  - Detailed Master Schedule (25-40 páginas)
  - 6-Week Look-Ahead (updated bi-weekly, 12 iterations para 6 meses)
  - Critical Path Gantt (solo critical tasks)
- **Quantity Takeoffs:**
  - Concrete (by pour, by level, by tower)
  - Structural steel (by tonnage, by level)
  - MEP (by system, by SF)
  - Curtain wall (by SF, by level)
- **Cost Reports:**
  - S-Curve (PV, EV, AC)
  - Cashflow analysis (monthly for 42 meses)
  - Cost breakdown by discipline (pie chart)
  - Earned Value Dashboard (SPI, CPI, VAC, EAC forecasts)
- **Resource Reports:**
  - Labor histogram (workforce over time)
  - Equipment utilization (cranes, hoists, concrete pumps)
  - Over-allocation analysis
- **Progress Reports:**
  - Baseline vs Actual comparison (simulated para Month 12)
  - Progress photography (4D snapshots: Months 3, 6, 9, 12, 18, 24, 30, 36, 42)
  - Milestone tracking (20+ major milestones)

**7. Video 4D Profesional para Presentación (8-12 minutos)**
- **Intro** (30 seg): Project overview, site context, statistics
- **Full Construction Simulation** (5-6 min):
  - Time-lapse de 42 meses
  - Interval: 1 week
  - Camera animations (10+ viewpoints estratégicos)
  - Transiciones suaves entre vistas
  - Annotations (text overlays mostrando milestones)
- **Phasing Detail** (2-3 min):
  - Close-up de fases críticas:
    - Foundation excavation (deep shoring)
    - Tower crane erection (4 cranes, secuencia)
    - Core climbing (both towers en parallel)
    - Podium construction (mientras towers suben)
    - MEP coordination (high-density zones)
    - Curtain wall installation (both towers)
- **Conclusion** (30 seg): Completion state, final building con context
- **Technical Specs:**
  - Resolution: 4K (3840×2160) mínimo
  - Format: MP4 (H.264)
  - Frame rate: 30 fps
  - Audio: Background music (profesional, no copyright)
  - Narration: Text overlays O voice-over (opcional)
  - Branding: Company logo, project title card

**8. Executive Presentation Deck (PowerPoint, 25-35 slides)**
- Project Overview (stats, location, program)
- Team & Methodology (VDC approach, tools used)
- Schedule Overview (duration, phases, critical path)
- 4D Simulation Highlights (screenshots de simulación)
- Constructability Findings (issues resolved)
- Multi-Scenario Analysis (comparison, recommendation)
- Cost & Schedule Performance (EVM metrics)
- Risk Management (4D-identified risks + mitigation)
- Logistics Plan (site plan, crane locations, access)
- Quality Assurance (4D validation process)
- Stakeholder Benefits (owner, city, community)
- Conclusion & Next Steps

**9. Interactive 4D Presentation (Navisworks Presenter)**
- Setup Presenter viewpoints (20+ saved views)
- Sections configuradas para navegación:
  - Overall Project
  - Tower A Detail
  - Tower B Detail
  - Podium & Parking
  - Site Logistics
  - MEP Coordination
  - Critical Path Visualization
- Redlining tools enabled para Q&A session
- Measurements enabled
- Section boxes para cortes dinámicos

**10. Lessons Learned Document (3-5 páginas)**
- Qué funcionó bien en este proyecto 4D
- Challenges encontrados (técnicos, data, coordination)
- Soluciones implementadas
- Best practices identificadas
- Recommendations para futuros proyectos similares
- Tool limitations encontradas (Navisworks, P6, MS Project)
- Workflow improvements propuestos

### Criterios de Evaluación

**Technical Execution (40%)**
- Cronograma importado correctamente (dependencies, resources, cost)
- Model attachments completos y lógicos
- Appearance profiles bien configurados
- Simulación reproduce secuencia realista
- No errores técnicos (missing attachments, broken links)

**Constructability Analysis (25%)**
- Issues identificados son reales y significativos
- Análisis de crane coverage es correcto
- Site logistics plan es viable
- Soluciones propuestas son prácticas
- Risk analysis es comprehensivo

**Reporting Quality (20%)**
- Reportes son profesionales (formatting, clarity)
- Data es accurate (no inconsistencias)
- Charts y graphs son clear y útiles
- Documentation es completa

**Presentation Quality (10%)**
- Video 4D es visualmente impactante
- Narration/annotations son claras
- Camera work es profesional (no mareante)
- Pacing es adecuado (no muy rápido/lento)
- Executive deck es compelling

**Strategic Thinking (5%)**
- Multi-scenario analysis es insightful
- Recommendation está bien fundamentada
- Considerations de stakeholder needs
- Innovative solutions propuestas

**Calificación mínima para aprobación:** 90% (proyecto integrador requiere excelencia)

---

## Recursos Adicionales para Todos los Ejercicios

**Archivos de Muestra (proporcionados):**
- Modelos NWF/NWC federados (6 proyectos diferentes)
- Cronogramas P6 XER (3 proyectos)
- Cronogramas MS Project MPP (3 proyectos)
- Cronogramas Excel CSV (2 proyectos)
- Templates de appearance profiles
- Sample reports (Gantt, QTO, Cost, EVM)

**Templates Reusables:**
- Appearance Profile Library (15 profiles listos para usar)
- Search Set Templates (50+ criterios comunes)
- Report Templates (Excel, PDF formats)
- Presentation Deck Template (PowerPoint)
- Constructability Report Template (Word)
- EVM Dashboard Template (Excel con macros)

**Video Tutorials de Referencia:**
- "TimeLiner Fundamentals" (30 min)
- "P6 to Navisworks Workflow" (40 min)
- "Advanced 4D Techniques" (50 min)
- "Professional Video Export" (25 min)
- "Multi-Scenario Analysis" (35 min)

**Standards de Referencia:**
- AGC BIM Guide (4D Simulation chapter)
- Autodesk Navisworks 2026 User Guide (TimeLiner section)
- BIM Forum LOD Specification (para QTO requirements)
- PMI Earned Value Management Guide
- Primavera P6 Best Practices Guide

**Software Requirements:**
- Autodesk Navisworks Manage 2026 (Simulate no tiene TimeLiner)
- MS Project 2019+ o Primavera P6 (para import exercises)
- Excel 2019+ (para reportes)
- PowerPoint (para presentations)
- Video editing software opcional (Premiere, Camtasia - para post-processing de videos 4D)

**Keyboard Shortcuts Reference:**
- `F5`: Abrir/cerrar TimeLiner
- `Space`: Play/Pause simulation
- `→`: Step forward (un intervalo)
- `←`: Step backward
- `Home`: Ir al inicio del proyecto
- `End`: Ir al final del proyecto
- `Ctrl+T`: Add new task (TimeLiner)
- `Del`: Delete selected task
- `Ctrl+D`: Duplicate task
- `Ctrl+Shift+A`: Auto-attach (con search set selected)

---

**Módulo completado exitosamente cuando:**
- ✅ Todos los 6 ejercicios completados con entregables
- ✅ Proyecto integrador aprobado (90%+)
- ✅ Demostración de comprensión profunda de 4D simulation workflow
- ✅ Capaz de importar cronogramas reales desde P6/MS Project
- ✅ Capaz de configurar simulaciones 4D complejas con multi-scenarios
- ✅ Capaz de generar reportes profesionales (Gantt, QTO, Cost, EVM)
- ✅ Capaz de realizar constructability analysis avanzado
- ✅ Capaz de crear videos 4D profesionales para presentaciones ejecutivas

---

**Próximo paso:** Módulo 4 - Visualización y Presentación Avanzada

Aprenderás rendering fotorrealista, animaciones de cámara cinematográficas, Presenter para navegación interactiva, export a formatos externos (3D PDF, FBX, IFC), integración con realidad virtual (VR), y comunicación visual avanzada para stakeholders no-técnicos. Llevarás tus simulaciones 4D al siguiente nivel de calidad visual para presentaciones de alto impacto.