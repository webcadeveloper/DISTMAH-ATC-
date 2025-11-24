# Lección 7: Fundamentos de Clash Detection

**Duración:** 60 minutos
**Nivel:** Avanzado
**Módulo:** 2 - Clash Detection y Coordinación BIM
**Prerequisitos:** Módulo 1 completo, conocimientos básicos de sistemas MEP

## Objetivos de Aprendizaje

✅ Comprender los conceptos fundamentales de clash detection y su impacto económico en proyectos de construcción

✅ Dominar la interfaz de Clash Detective en Navisworks Manage 2026 y navegar eficientemente entre tests, results y reports

✅ Diferenciar entre tipos de clash tests (hard clash, soft clash, clearance/gap clash) y seleccionar el apropiado según la situación

✅ Configurar tolerancias de detección precisas según estándares de la industria para cada tipo de disciplina y sistema

✅ Crear selection sets estratégicos para testing eficiente de combinaciones disciplina vs disciplina

✅ Ejecutar clash tests completos y navegar results utilizando viewpoints automáticos, filters y sorting

✅ Implementar workflow de status management (new, active, reviewed, resolved, approved) para tracking de interferencias

## Introducción

La detección de interferencias mediante Clash Detection representa uno de los retornos de inversión más medibles y significativos de la tecnología BIM en la industria de la construcción. Estudios de la industria AEC documentan que el costo promedio de resolver una interferencia en campo oscila entre $1,500 USD (conflicto menor MEP) hasta $50,000+ USD (interferencia estructural crítica que requiere rediseño). En contraste, identificar y resolver esa misma interferencia durante fase de diseño mediante BIM coordination cuesta aproximadamente $50-200 USD en tiempo de ingeniería.

En un proyecto hospitalario típico de 200,000 SF ($150M USD), un workflow robusto de clash detection identifica entre 3,000-8,000 interferencias antes de construcción. Si solo el 70% de estas se hubieran manifestado en campo (tasa típica sin BIM), el costo de resolución habría sido $3.15M - $8.4M USD adicionales. La inversión en coordinación BIM (típicamente $150K-300K en un proyecto de esta escala) genera un ROI de 10:1 a 30:1.

Más allá del impacto financiero, clash detection reduce dramáticamente delays de cronograma, mejora safety (menos rework en espacios confinados), aumenta quality (instalaciones según diseño), y mejora relaciones entre trades (menos finger-pointing). Los coordinadores BIM que dominan Clash Detective son profesionales altamente demandados con salarios de $70K-120K USD anuales según experiencia y complejidad de proyectos.

Esta lección establece los fundamentos completos: conceptos de interferencias, interfaz de Clash Detective, tipos de tests, configuración de tolerancias, selection strategies, ejecución de tests, navegación de resultados, y status management workflows.

## 1. Conceptos Fundamentales de Clash Detection

### 1.1 ¿Qué es una Interferencia (Clash)?

Una **interferencia** o **clash** ocurre cuando dos o más objetos en el modelo BIM federado ocupan el mismo espacio físico simultáneamente, o violan clearances mínimas requeridas para instalación, operación o mantenimiento.

**Categorías de interferencias:**

**Por severidad:**
- **Crítica**: Imposibilita construcción (viga atraviesa ductwork principal)
- **Mayor**: Requiere rediseño significativo (tubería conflicta con estructura)
- **Moderada**: Requiere ajuste de routing (conduits se cruzan)
- **Menor**: Requiere field adjustment pequeño (colgadores interfieren)

**Por tipo de geometría:**
- **Directa**: Objetos sólidos se penetran físicamente
- **Indirecta**: Objetos violan clearance requerida para acceso/mantenimiento
- **Workflow**: Objetos interfieren temporalmente durante secuencia de instalación

**Por disciplina:**
- **Intra-disciplina**: Dentro de mismo trade (duct vs duct HVAC)
- **Inter-disciplina**: Entre trades diferentes (electrical vs plumbing)
- **Multi-sistema**: Tres o más sistemas (estructura + MEP + arquitectura)

### 1.2 Impacto Económico de Interferencias No Detectadas

**Costos directos en campo:**
- Demolición de trabajo ya instalado: $800-3,000 USD por ocurrencia
- Re-routing de sistemas MEP: $1,500-8,000 USD
- Modificación estructural (si permitida): $5,000-50,000+ USD
- Procurement de materiales replacement: 100-300% costo original
- Labor overtime para recuperar schedule: $150-250 USD/hora

**Costos indirectos:**
- Delays de schedule: $5,000-50,000 USD por día de retraso
- Disruption de otros trades: $2,000-10,000 USD por evento
- Loss of productivity (disrupted workflow): 15-30% efficiency loss
- Extended general conditions: $3,000-15,000 USD por día
- Liquidated damages (en contratos con penalidades): variable

**Costos no-monetarios:**
- Deterioro de relaciones contractor-subcontractor
- Increased risk de claims y litigation
- Reputational damage
- Safety incidents (rework en condiciones subóptimas)
- Quality compromises (soluciones de campo subóptimas)

### 1.3 ROI de Clash Detection

**Inversión típica en coordinación BIM:**
- Coordinador BIM senior: $80-120 USD/hora
- Software licenses (Navisworks Manage): $3,500 USD/año
- Model updates y federation: 10-20 horas/semana
- Coordination meetings: 4-8 horas/semana
- Report generation y tracking: 5-10 horas/semana

**Proyecto ejemplo ($100M USD, 150,000 SF):**
- Inversión en BIM coordination: $200,000 USD (0.2% costo proyecto)
- Clashes detectados: 4,500
- Clashes que habrían ocurrido en campo (70%): 3,150
- Costo promedio resolución en campo: $2,500 USD
- Ahorro total: $7,875,000 USD
- **ROI: 39:1**

### 1.4 Timing de Clash Detection en Project Lifecycle

**Clash detection debe ejecutarse en múltiples fases:**

**Design Development (DD):**
- **Frequency**: Bi-weekly
- **Focus**: Major system routing, structural conflicts
- **Tolerance**: Más permisiva (6"-12")
- **Objetivo**: Validar feasibility de concept design

**Construction Documents (CD):**
- **Frequency**: Weekly
- **Focus**: Detailed MEP coordination, penetrations
- **Tolerance**: Standard (2"-6")
- **Objetivo**: Coordinar todos los sistemas completamente

**Pre-Construction:**
- **Frequency**: Twice weekly
- **Focus**: Fabrication-level detail, hanger conflicts
- **Tolerance**: Estricta (1"-3")
- **Objetivo**: Issue for Construction documents limpios

**Construction Phase:**
- **Frequency**: Weekly o por submittal
- **Focus**: As-built verification, RFI validation
- **Tolerance**: Field tolerance (0.5"-2")
- **Objetivo**: Validar constructibility de shop drawings

## 2. Interfaz de Clash Detective

Clash Detective es una herramienta exclusiva de Navisworks Manage (no disponible en Simulate o Freedom).

### 2.1 Acceder a Clash Detective

**Método 1: Ribbon**
- Clash Detective tab (disponible solo en Navisworks Manage)
- El tab completo está dedicado a clash detection

**Método 2: Tools Menu**
- Tools > Clash Detective (método legacy)

**Método 3: Keyboard Shortcut**
- Configurar shortcut personalizado en Options

### 2.2 Ventana Principal de Clash Detective

La interfaz de Clash Detective se organiza en 5 áreas principales:

![Clash Detective Interface](../../imagenes/leccion-7-clash-detective-interface.png)

**1. Tests Tab (Configuración de Tests):**
- Lista de todos los clash tests configurados en el proyecto
- Cada test aparece como row con columnas:
  - Name: Nombre descriptivo del test
  - Status: Running / Stopped / Complete
  - Results: Número de clashes detectados
  - New / Active / Reviewed / Resolved / Approved: Count por status
- Toolbar: Add Test, Copy Test, Delete Test, Run Test

**2. Select Tab (Selección de Objetos para Testing):**
- Define qué objetos se testearán contra qué otros
- **Left side**: Selection Set A (ej: Structural)
- **Right side**: Selection Set B (ej: MEP Systems)
- Self Intersect checkbox: Detectar clashes dentro del mismo set
- Link Model: Opción para testear linked models

**3. Rules Tab (Reglas de Filtrado):**
- Configurar rules para EXCLUIR ciertos tipos de clashes
- Reduce false positives dramáticamente
- Por ejemplo: Ignorar clashes entre objetos del mismo assembly
- Rules por: Category, Object Type, Layer, Status, Discipline

**4. Results Tab (Visualización de Resultados):**
- Lista de todos los clashes detectados por el test activo
- Columns:
  - ID: Identificador único del clash
  - Status: New / Active / Reviewed / Resolved / Approved
  - Found Date: Fecha de detección inicial
  - Distance: Magnitud de penetración (negativo) o gap (positivo)
  - Grid Location: Ubicación en grid del proyecto
  - Item 1 / Item 2: Objetos involucrados
  - Assigned To: Responsable de resolución
  - Description: Notas y comentarios
- Sorting: Clic en cualquier column header para ordenar
- Filtering: Quick filters por status

**5. Report Tab (Generación de Reportes):**
- Current Test: Reporte del test activo
- All Tests: Reporte consolidado de todos los tests
- Format: HTML, XML, Custom templates
- Options: Include images, viewpoints, comments
- Write Report button: Genera el archivo de reporte

### 2.3 Configuración Global de Clash Detective

Antes de crear tests, configurar preferencias globales:

**Options > Clash Detective:**

**Display Settings:**
- Clash sphere size: Tamaño del indicador visual (0.5-5.0)
- Clash sphere color: Color para clashes (default: rojo)
- Highlight color: Color al seleccionar clash (default: amarillo)
- Show clash sphere: ON (visualización 3D de ubicación)

**Tolerance Settings (defaults globales):**
- Hard clash tolerance: 0.00 (detección estricta)
- Soft clash tolerance: 2.00" (clearance default)
- Link tolerance: 3.00" (para linked models con tolerancia mayor)

**Test Settings:**
- Auto-update tests on file refresh: ON (retest al actualizar modelos)
- Auto-assign grid location: ON (calcula ubicación automáticamente)
- Merge tolerance: 0.50" (agrupa clashes muy cercanos)

**Status Settings:**
- Status progression: New → Active → Reviewed → Resolved → Approved
- Require comments on status change: Optional pero recomendado
- Email notifications: Configurar si integrado con sistema

## 3. Tipos de Clash Tests

Navisworks soporta tres tipos fundamentales de clash tests, cada uno diseñado para detectar diferentes condiciones de interferencia.

### 3.1 Hard Clash (Interferencia Dura)

**Definición:**
Un **hard clash** ocurre cuando dos objetos sólidos se penetran físicamente, ocupando el mismo espacio 3D simultáneamente.

**Características:**
- Ambos objetos deben tener geometría sólida (3D volumes)
- Detección basada en intersección booleana de volúmenes
- No requiere configuración de tolerancia (overlap = clash)
- Es el tipo más crítico de interferencia

**Ejemplos típicos:**
- Viga estructural penetra ductwork HVAC principal
- Tubería de plomería atraviesa columna de concreto
- Conduit eléctrico cruza tubería de gas
- Equipment (chiller, AHU) intersecta con pared o losa
- Cable tray penetra viga metálica

**Configuración en Clash Detective:**
```
Test Type: Hard (Geometry Overlaps)
Tolerance: 0.00" (sin tolerancia)
```

**Severidad:**
La mayoría de hard clashes son CRÍTICOS y deben resolverse obligatoriamente. En muchos casos físicamente imposibilitan construcción.

**Resolución típica:**
- Re-routing completo de sistema MEP
- Relocation de equipment
- Structural coordination (penetrations si permitidas)
- Design revision

### 3.2 Soft Clash (Clearance Clash)

**Definición:**
Un **soft clash** (también llamado **clearance clash**) ocurre cuando dos objetos no se tocan físicamente, pero violan el clearance mínimo requerido para instalación, operación, mantenimiento o código.

**Características:**
- Objetos no se penetran, pero están demasiado cerca
- Requiere configurar tolerancia de clearance
- Tolerance es la distancia mínima permitida
- Si objetos están más cerca que tolerance = clash

**Ejemplos típicos:**
- Tubería a 3" de pared (código requiere 6" clearance)
- Equipo a 18" de pared (mantenimiento requiere 36" clearance)
- Ductwork a 4" de techo (código fire requiere 6" clearance)
- Cable tray a 8" de tubería de gas (NFPA requiere 12" separation)
- Access panel bloqueado por otra pieza de equipo dentro de 24"

**Configuración en Clash Detective:**
```
Test Type: Clearance
Tolerance: Variable (2" - 48" según código y sistema)
```

**Tolerancias típicas por situación:**

| Condición | Clearance Típica | Código/Standard |
|-----------|------------------|-----------------|
| MEP equipment access panel | 36" | Manufacturer + OSHA |
| Electrical panel clearance | 42" depth x 36" width | NEC Article 110.26 |
| Plumbing cleanouts | 24" | IPC 305.4 |
| HVAC ductwork to structure | 6" | Hanger space + code |
| Fire sprinkler to structure | 6" | NFPA 13 |
| Gas pipe to electrical | 12" | NFPA 54 + NEC |
| Plumbing access | 18"-24" | IPC |
| Ceiling access tiles | 24" x 24" clear | IBC |

**Severidad:**
Variable. Algunos soft clashes son críticos (code violations), otros son moderados (constructibility issues).

**Resolución típica:**
- Minor re-routing para ganar clearance
- Relocation de access points
- Coordination de installation sequence
- Field verification si borderline

### 3.3 Clearance Clash (Gap Detection)

**Definición:**
Un **clearance clash** en modo "gap" detecta cuando dos objetos que DEBERÍAN estar conectados tienen un gap inaceptable entre ellos.

**Características:**
- Opuesto a soft clash: detecta GAP excesivo
- Útil para QC de connectivity
- Tolerance define gap máximo permitido
- Si gap > tolerance = clash

**Ejemplos típicos:**
- Tubería no conecta con fitting (gap de 2")
- Duct segment no conecta con siguiente (gap de 4")
- Hanger no contacta con tubería que debería soportar
- Pier no llega a viga que debe soportar
- Wall no conecta con techo (construcción gap inaceptable)

**Configuración en Clash Detective:**
```
Test Type: Clearance
Tolerance: 0.5" - 2.0" (gap máximo)
```

**Uso típico:**
Este tipo de test es menos común pero muy valioso para quality control de connectivity en sistemas MEP donde discontinuidades generan fallas de sistema.

### 3.4 Duplicate Detection

**Definición:**
Aunque no es un tipo oficial de clash, muchos coordinadores configuran tests para detectar **objetos duplicados** (mismo objeto modelado dos veces en el mismo location).

**Configuración:**
```
Test Type: Hard
Selection A: All Model
Selection B: All Model
Self-Intersect: ON
Rules: Filter para solo detectar mismo object type
```

**Utilidad:**
Detecta errores de modelado donde el mismo elemento fue colocado dos veces (common en modelos con múltiples designers).

## 4. Configuración de Tolerancias por Disciplina

Las tolerancias apropiadas varían significativamente según el tipo de sistema, fase del proyecto, y standards aplicables.

### 4.1 Standards de Tolerancias de la Industria

**National CAD Standard (NCS) - Clash Tolerances:**

**Design Development Phase:**
- Structural vs MEP: 12"
- MEP vs MEP: 8"
- Clearance: 18"-24"

**Construction Documents Phase:**
- Structural vs MEP: 6"
- MEP vs MEP: 3"
- Clearance: 12"-18"

**Pre-Construction / Fabrication:**
- Structural vs MEP: 2"
- MEP vs MEP: 1"
- Clearance: 6"-12"

**As-Built / Field Verification:**
- All: 0.5"-1" (field tolerance)

### 4.2 Tolerancias por Sistema MEP

**HVAC (Heating, Ventilation, Air Conditioning):**
- Supply/Return Ductwork (>12" diameter): Hard 2", Clearance 6"
- Small ductwork (<12"): Hard 1", Clearance 4"
- VAV boxes y equipment: Hard 2", Clearance 36" (access)
- Flex duct: Hard 1", Clearance 3" (flexibilidad installation)

**Plumbing:**
- Main distribution (>4"): Hard 2", Clearance 6"
- Branch piping (2"-4"): Hard 1", Clearance 4"
- Domestic water (<2"): Hard 0.5", Clearance 3"
- Sanitary/Vent: Hard 1", Clearance 4"
- Equipment (water heaters, pumps): Hard 2", Clearance 30"

**Electrical:**
- Conduit (>2"): Hard 1", Clearance 4"
- Conduit (<2"): Hard 0.5", Clearance 3"
- Cable tray: Hard 2", Clearance 6"
- Panels y switchgear: Hard 2", Clearance 42" (NEC)
- Light fixtures: Hard 1", Clearance 6"

**Fire Protection:**
- Sprinkler mains (>3"): Hard 2", Clearance 6" (NFPA 13)
- Branch lines (<3"): Hard 1", Clearance 4"
- Sprinkler heads: Hard 0.5", Clearance 18" (deflector clearance)

**Structural:**
- Beams, columns, slabs: Hard 0" (no tolerance)
- Embedments: Hard 0.5"
- Rebar: Hard 0.5" (design tolerance)

**Architectural:**
- Walls, floors, ceilings: Hard 1"
- Doors, windows: Hard 1"
- Casework: Hard 1", Clearance 6"

### 4.3 Tolerancias por Código

**National Electrical Code (NEC):**
- Artículo 110.26: Working space around electrical equipment
  - Depth: 36"-42" depending on voltage
  - Width: 30" minimum (o width of equipment)
  - Height: 6'-6" clear

**International Plumbing Code (IPC):**
- Cleanout access: 24" minimum clearance
- Access to valves: 18" minimum

**International Mechanical Code (IMC):**
- Equipment access: 30"-36" depending on type
- Ductwork clearance to combustibles: 6" (single-wall metal)

**NFPA 13 (Fire Sprinkler):**
- Sprinkler deflector to structure: 6" minimum
- Branch line clearance: 3"

**OSHA (Safety):**
- Walking/working surfaces: 7' overhead clearance
- Access to equipment: Manufacturer requirements minimum

### 4.4 Best Practices para Configuración de Tolerancias

**Principio 1: Stricter tolerances as project progresses**
- DD: Permissive (6"-12")
- CD: Standard (2"-6")
- Pre-Con: Strict (1"-3")
- As-Built: Field (0.5"-1")

**Principio 2: Diferentes tolerancias por zona**
- Core MEP rooms: Strict (alta densidad)
- Perimeter zones: Standard (menor densidad)
- Exterior: Más permissive

**Principio 3: Considera fabrication tolerances**
- Shop fabrication: Tighter (±1/8")
- Field installation: Looser (±1/2")

**Principio 4: Document all tolerance decisions**
- Incluir en BIM Execution Plan
- Justificar con códigos aplicables
- Obtener buy-in de todos los trades

**Principio 5: Review and adjust**
- Primeras corridas pueden revelar tolerancias inapropiadas
- Too strict = demasiados false positives
- Too loose = missing real clashes
- Iteración es normal y esperada

## 5. Selecting Objects para Clash Tests

La configuración de selection sets eficientes es crítica para testing productivo.

### 5.1 Estrategia de Selection Sets

**Opción 1: Test por Disciplina (Grid Testing)**
Crear selection sets separados para cada disciplina y testear todas las combinaciones:
- Architecture
- Structure
- HVAC
- Plumbing
- Electrical
- Fire Protection

**Tests resultantes:**
- Architecture vs Structure
- Architecture vs HVAC
- Architecture vs Plumbing
- Architecture vs Electrical
- Structure vs HVAC
- Structure vs Plumbing
- (etc... 15 combinaciones para 6 disciplinas)

**Ventajas:**
- Comprehensive coverage
- Fácil de asignar responsibility
- Standard en la industria

**Desventajas:**
- Gran número de tests
- Muchos resultados (incluye clashes no-críticos)

**Opción 2: Test por Sistema Crítico**
Crear tests solo para combinaciones de alto riesgo:
- Structural vs All MEP
- MEP Major Systems vs Each Other
- Vertical Systems vs Horizontal Distribution

**Ventajas:**
- Menos tests, más enfocados
- Reduce false positives
- Más rápido de ejecutar

**Desventajas:**
- Puede omitir clashes menos obvios
- Requiere experiencia para saber qué testear

### 5.2 Crear Selection Sets Eficientes

**Método 1: Selection Tree**
1. Selection Tree panel
2. Cambiar a "Properties" mode
3. Expandir hasta "Category" o "Layer"
4. Clic derecho en categoría deseada > Save Search
5. Nombrar: "SET_HVAC" o "SET_Structural"

**Método 2: Search Sets**
1. Home tab > Select & Search > Find Items
2. Configurar criterios (ej: Category = "Mechanical Equipment")
3. Find All
4. Home tab > Save Search
5. Nombrar descriptivamente

**Método 3: Manual Selection**
1. Seleccionar objetos en scene view
2. Home tab > Save Selection
3. Nombrar

**Naming Convention:**
Usar naming estándar para claridad:
- `SET_ARCH_Walls`
- `SET_STRUCT_Concrete`
- `SET_HVAC_Duct_Supply`
- `SET_PLUMB_DomesticWater`
- `SET_ELEC_Conduit_Power`
- `SET_FP_Sprinkler`

### 5.3 Selection Set Best Practices

**1. Exclude non-physical objects:**
- Annotation elements (text, dimensions)
- Reference planes y grids
- Spaces y rooms (depende del objetivo)
- Rebar (a menos que test específico)

**2. Group similar systems:**
- "All HVAC" = Supply + Return + Equipment
- "All Plumbing" = DW + HW + Sanitary + Vent
- Permite tests de alto nivel

**3. Separate critical systems:**
- Para sistemas críticos (main distribution), crear sets separados
- Test con tolerancias más estrictas

**4. Use Sets hierarchy:**
- Parent set: "All MEP"
  - Child: "HVAC"
  - Child: "Plumbing"
  - Child: "Electrical"
  - Child: "Fire Protection"

**5. Verify Sets contents:**
- Después de crear set, Select from set
- Verificar que incluye objetos esperados
- Contar objetos (debe ser reasonable)

## 6. Running Clash Tests y Navigating Results

### 6.1 Crear y Ejecutar un Clash Test

**Paso 1: Add New Test**
1. Clash Detective > Tests tab
2. Add Test button
3. Nombrar descriptivamente: "STRUCT-vs-HVAC-Hard"

**Paso 2: Configure Test Type**
1. Select tab
2. Test Type: Hard / Clearance
3. Tolerance: 2.00" (ejemplo)

**Paso 3: Select Objects**
1. Left side: "Select" > Search Sets > "SET_STRUCT_All"
2. Right side: "Select" > Search Sets > "SET_HVAC_All"
3. Self Intersect: OFF (testing between sets, not within)

**Paso 4: Run Test**
1. Tests tab
2. Seleccionar test
3. Run Test button (o Ctrl+R)
4. Progress bar aparece
5. Esperar completion

**Tiempo de ejecución:**
- Modelos pequeños (<100MB): Segundos
- Modelos medianos (100-500MB): 1-5 minutos
- Modelos grandes (500MB-2GB): 5-20 minutos
- Modelos ultra grandes (>2GB): 20-60+ minutos

**Optimización:**
Run tests overnight para modelos muy grandes.

### 6.2 Interpretar Results

Después de ejecutar test, Results tab muestra todos los clashes detectados.

**Columns clave:**
- **ID**: Identificador único (STRUCT-HVAC-001, etc.)
- **Status**: New (recién detectado)
- **Distance**: Penetración en unidades del proyecto
  - Negativo = overlap (hard clash)
  - Positivo = gap (si clearance test)
  - Ejemplo: -4.25" significa 4.25" de penetración
- **Item 1 / Item 2**: Objetos involucrados
  - Display Name
  - Layer/Category
  - Source File
- **Grid Location**: Ubicación aproximada (ej: "B-3/4, Level 2")

**Total count:**
Top de Results tab muestra:
- Total clashes: 487
- New: 487
- Active: 0
- Reviewed: 0
- Resolved: 0
- Approved: 0

### 6.3 Navigating Clash Viewpoints

**Visualizar clash individual:**
1. Results tab > Seleccionar clash (single click)
2. Scene view automáticamente:
   - Zoom al clash location
   - Highlight los dos objetos involucrados
   - Muestra clash sphere (esfera roja en intersection point)
   - Oculta temporalmente otros objetos (focus mode)

**Controls de visualización:**
- **Show All**: Ver modelo completo contexto
- **Focus**: Solo objetos del clash
- **Zoom**: Ajustar zoom level
- **Highlight**: Toggle highlight de objetos

**Navegar múltiples clashes:**
- Flecha arriba/abajo en Results list
- Cada selección actualiza viewpoint automáticamente
- Permite review rápido de muchos clashes

**Viewpoint Shortcuts:**
- Ctrl+W: Zoom to selected clash
- Ctrl+H: Hide non-clash objects (focus)
- Esc: Show all objects (contexto)

### 6.4 Sorting y Filtering Results

**Sorting:**
- Clic en cualquier column header para sort
- Clic nuevamente para reverse order

**Sorting strategies útiles:**
- **By Distance**: Ver clashes más severos primero (mayor penetración)
- **By Grid Location**: Agrupar por zona del edificio
- **By Status**: Ver todos New juntos, Reviewed juntos, etc.
- **By Item 1**: Agrupar por sistema (todos los clashes con mismo duct)

**Filtering:**
Quick Filter toolbar en Results tab:
- **Show New Only**: Solo clashes nuevos
- **Show Active Only**: Solo clashes activos
- **Show All**: Ver todos

**Advanced Filtering:**
- Results tab > Filter button
- Configurar filtros complejos:
  - Distance range: -6" to -2" (clashes moderados)
  - Grid location: Solo Level 3
  - Status: New OR Active
- Apply filter

**Export filtered results:**
Después de filtrar, Export to Excel para análisis adicional.

## 7. Clash Status Management

El status workflow es critical para tracking progress de resolución de interferencias.

### 7.1 Status Workflow Standard

**Standard status progression:**
```
NEW → ACTIVE → REVIEWED → RESOLVED → APPROVED
```

**NEW (Recién Detectado):**
- Clash detectado por primera vez en test run
- Aún no ha sido revisado por nadie
- Color: Rojo (default)
- Action: Requiere initial review

**ACTIVE (Activo - Requiere Acción):**
- Clash ha sido reviewed y confirmado como real (no false positive)
- Assigned to responsible party
- En proceso de diseño de resolución
- Color: Naranja
- Action: Diseñar y coordinar solución

**REVIEWED (Revisado - En Espera):**
- Clash ha sido reviewed y se determinó plan de acción
- Esperando input adicional, RFI response, o decision
- Temporalmente pausado
- Color: Amarillo
- Action: Pending, esperando información

**RESOLVED (Resuelto - Pendiente Verificación):**
- Diseño de resolución completo
- Modelo será actualizado en próximo refresh
- Esperando re-test para confirmar resolución
- Color: Verde claro
- Action: Verificar en próximo test run

**APPROVED (Aprobado - Cerrado):**
- Clash completamente resuelto y verificado
- Test run posterior confirma no existe interferencia
- Documentado y cerrado
- Color: Verde oscuro
- Action: Ninguna, complete

### 7.2 Cambiar Status de Clashes

**Cambiar status individual:**
1. Results tab > Seleccionar clash
2. Clic derecho > Change Status > Seleccionar nuevo status
3. Dialog box: Agregar comment (recomendado)
4. OK

**Cambiar status múltiples clashes:**
1. Seleccionar múltiples (Ctrl+click o Shift+click)
2. Clic derecho > Change Status
3. Aplica a todos seleccionados

**Best practice:**
SIEMPRE agregar comment al cambiar status:
- NEW → ACTIVE: "Confirmed real clash, assigned to MEP coordinator"
- ACTIVE → REVIEWED: "Proposed to re-route duct north 3 feet, pending ARQ approval"
- REVIEWED → RESOLVED: "Duct re-routed per coordination meeting 2024-03-15, updating model"
- RESOLVED → APPROVED: "Verified resolved in test run 2024-03-20"

### 7.3 Assigning Responsibility

**Assign To field:**
Cada clash puede asignarse a responsible party:
1. Seleccionar clash
2. Properties panel > Assign To field
3. Escribir nombre: "John Smith - HVAC" o email
4. Enter

**Responsibility Matrix:**
Definir matriz de responsabilidad por tipo de clash:

| Clash Type | Primary Responsible | Secondary |
|------------|---------------------|-----------|
| STRUCT vs HVAC | HVAC Coordinator | Structural Engineer (if penetration) |
| STRUCT vs PLUMB | Plumbing Coordinator | Structural |
| HVAC vs ELEC | Coordination Meeting | Decision by location |
| HVAC vs PLUMB | Coordination Meeting | MEP Lead |
| ARCH vs MEP | Architect | MEP (if adjustment needed) |

**Auto-assignment:**
Algunos equipos usan scripts o macros para auto-assign basado en reglas.

### 7.4 Adding Comments y Documentation

**Add Comment:**
1. Seleccionar clash
2. Properties panel > Comments section
3. Add Comment button
4. Escribir comment con:
   - Date
   - Author
   - Description de issue
   - Proposed solution
   - Decision/action taken
5. Save

**Comment history:**
Todos los comments se preservan cronológicamente, creando audit trail completo.

**Attach images:**
Algunos workflows incluyen screenshots o photos:
- Screenshot de viewpoint específico
- Marked-up image con proposed solution
- Field photo (si clash discovered during construction)

**Link to RFI:**
Si clash genera RFI, document RFI number en comments:
"Generated RFI #245 - Structural penetration approval required"

### 7.5 Status Reporting y Tracking

**Generate status reports:**
Report tab > All Tests > Include Status breakdown

**Key metrics:**
- **Total clashes detected**: 1,247
- **New clashes** (this week): 87 (modelo updated con nuevos sistemas)
- **Resolved clashes** (this week): 145
- **Net reduction**: 58 clashes
- **Active clashes remaining**: 412
- **Resolution rate**: 35% (145/412)
- **Average resolution time**: 12 days

**Status charts:**
Export data a Excel, crear charts:
- Pie chart: Distribution por status
- Bar chart: Clashes por discipline
- Line chart: Trend over time (burndown chart)

**Coordination meeting dashboard:**
Preparar dashboard semanal:
- Total clashes: Trend
- New this week: List
- Resolved this week: List
- Top 10 critical: Requiring immediate attention
- Aged clashes: >30 days Active

## Ejercicio Práctico

**Duración:** 20 minutos

**Escenario:**
Usted es coordinador BIM en proyecto de edificio de oficinas de 5 pisos (75,000 SF). Ha recibido modelos federados de Arquitectura, Estructura, y HVAC en fase de Construction Documents. Debe ejecutar clash detection inicial entre Estructura y HVAC.

**Archivos proporcionados:**
- `Office_Architecture.nwd`
- `Office_Structure.nwd`
- `Office_HVAC.nwd`

**Tareas:**

**1. Preparar modelo federado**
- Abrir Navisworks Manage 2026
- Append los tres archivos NWD
- Save As: `Office_Coordinated.nwf`

**2. Crear Selection Sets**
- Crear search set "SET_Structure": Category contains "Structural"
- Crear search set "SET_HVAC": Category contains "Mechanical"
- Verificar counts (Structure ~250 objects, HVAC ~800 objects)

**3. Configurar Clash Test - Hard Clashes**
- Clash Detective > Add Test
- Name: "STRUCT-HVAC-Hard-2inch"
- Type: Hard
- Tolerance: 2.00"
- Left: SET_Structure
- Right: SET_HVAC
- Run Test

**4. Analizar Results**
- Cuántos clashes detectados? _______________
- Sort por Distance (mayor penetración primero)
- Identificar top 3 clashes más severos:
  - Clash 1: Distance ___ , Location ___ , Objects ___________
  - Clash 2: Distance ___ , Location ___ , Objects ___________
  - Clash 3: Distance ___ , Location ___ , Objects ___________

**5. Gestión de Status**
- Seleccionar los 3 clashes más severos
- Change Status: NEW → ACTIVE
- Add Comment: "Critical clash, requires immediate coordination"
- Assign To: "HVAC Coordinator"

**6. Configurar Clash Test - Clearance**
- Add Test
- Name: "STRUCT-HVAC-Clearance-6inch"
- Type: Clearance
- Tolerance: 6.00"
- Same selection sets
- Run Test
- Cuántos clearance clashes detectados? _______________

**7. Generar Reporte**
- Report tab > Current Test
- Type: HTML
- Include: Viewpoints, Comments
- Write Report: `STRUCT-HVAC-Initial-Report.html`
- Abrir en browser y revisar

**Resultado esperado:**
- 2 clash tests configurados y ejecutados
- Results catalogados por severidad
- Top clashes con status Active y assigned
- HTML report generado para coordination meeting

**Preguntas de reflexión:**
1. ¿Cuál es la diferencia en número de clashes entre hard test (2") y clearance test (6")?
2. ¿Por qué es importante configurar ambos tipos de tests?
3. ¿Qué información incluiría en coordination meeting para discutir estos clashes?

## Evaluación

**Pregunta 1:** Explique la diferencia fundamental entre un hard clash y un soft clash (clearance clash), y proporcione un ejemplo de cada uno en un proyecto MEP típico.

**Respuesta:** Un **hard clash** ocurre cuando dos objetos sólidos se penetran físicamente ocupando el mismo espacio 3D simultáneamente (geometría overlap). Ejemplo: Una viga estructural de acero W12x26 atraviesa un duct de suministro de 24" de diámetro con 8" de penetración - esto es físicamente imposible de construir y requiere resolución obligatoria mediante re-routing. Un **soft clash** o **clearance clash** ocurre cuando dos objetos no se tocan pero violan el clearance mínimo requerido para instalación, mantenimiento, o código. Ejemplo: Un equipo HVAC (AHU) está ubicado a 18" de la pared, pero el código y manufacturer requieren 36" de clearance para access panels y mantenimiento - técnicamente se puede construir pero viola código y será deficiente operativamente. La distinción es crítica porque hard clashes siempre requieren resolución de diseño, mientras algunos soft clashes pueden requerir waivers o field verification.

**Pregunta 2:** Un proyecto hospitalario en fase de Construction Documents está ejecutando clash detection entre Estructura y MEP. ¿Qué tolerancia de hard clash y clearance clash recomendaría y por qué? Justifique con standards de la industria.

**Respuesta:** Para un hospital en fase CD, recomendaría:
- **Hard clash tolerance**: 2.00" - Esta tolerancia captura interferencias significativas mientras filtra penetraciones menores que pueden ser field-adjustable o debidas a minor modeling inaccuracies. En hospitales con alta densidad MEP, tolerancia de 0" genera miles de false positives de objetos barely touching.
- **Clearance tolerance**: 6.00" - Hospitales requieren strict code compliance (NFPA, NEC, IPC) y extensive maintenance access. 6" clearance detecta violaciones de espacio críticas mientras permite que objetos nearby pero acceptable no generen clashes innecesarios. En zonas críticas (quirófanos, UTI), aumentaría a 12" para validar sufficient access.
Esta configuración alinea con **National CAD Standard guidelines** para CD phase y **BIM Forum coordination tolerance standards**. A medida que avanza a Pre-Construction, reduciría hard tolerance a 1" y ajustaría clearance por sistema específico.

**Pregunta 3:** Durante un test run de STRUCT vs HVAC, se detectaron 847 clashes. ¿Qué estrategias utilizaría para priorizar cuáles clashes revisar primero? Describa al menos tres criterios de priorización.

**Respuesta:** Estrategias de priorización:

**1. Sort por Distance (Severidad Geométrica):** Clashes con mayor penetración (ej: -12" to -24") son más críticos que penetraciones menores (-1" to -3"). Un duct con 18" de penetración en viga probablemente requiere major re-routing, mientras 2" puede ser field-adjustable. Revisar top 50-100 por severidad primero.

**2. Filter por Grid Location (Zonas Críticas):** Hospitales tienen zonas de diferentes criticidad. Priorizar: (a) Mechanical rooms (core concentration, affect entire system), (b) Operating rooms y UTI (code-critical), (c) Vertical shafts (affect multiple floors), (d) Main distribution corridors. Clashes en perimeter offices son lower priority.

**3. Group por Object Type (Sistemas Críticos):** No todos los systems son equal priority. Jerarquía: (a) Structural elements (no se pueden mover fácilmente), (b) Major HVAC mains (backbone del sistema), (c) Fire protection (life safety), (d) Electrical panels (NEC clearances), (e) Branch distribution (más flexible). Resolver structural clashes primero porque afectan a todos los demás.

**4. Status History:** Si test es re-run, priorizar NEW clashes (agregados desde última versión) sobre existing clashes ya en proceso. New clashes indican cambios recientes de diseño que pueden afectar otras coordinaciones.

Con 847 clashes, es realistic resolver 50-100 high-priority por semana en coordination meetings, achieving complete resolution en 2-3 meses si el equipo es diligent.

**Pregunta 4:** Explique el status workflow completo desde NEW hasta APPROVED. ¿Por qué es importante mantener status actualizado y agregar comments en cada transición?

**Respuesta:** El status workflow estándar es: **NEW → ACTIVE → REVIEWED → RESOLVED → APPROVED**

**NEW**: Clash detectado por primera vez, no ha sido validated. Requiere initial review para determinar si es real clash o false positive.

**ACTIVE**: Confirmado como real clash, assigned a responsible party, en proceso de diseño de solución. Este status indica work in progress.

**REVIEWED**: Plan de resolución ha sido developed y reviewed, pero está pending algo (RFI response, owner decision, additional information). Status de "waiting".

**RESOLVED**: Solución ha sido implemented en modelo, esperando próximo test run para verification. Design work completo.

**APPROVED**: Verificado en test run posterior que clash ya no existe, completamente cerrado.

**Importancia de status tracking y comments:**

1. **Accountability**: Saber quién es responsable de cada clash y qué action se requiere. Sin esto, clashes "fall through cracks".

2. **Audit trail**: Comments documentan decision-making process. Si dispute surge later ("¿por qué se resolvió así?"), hay record completo. Critical para claims prevention.

3. **Progress tracking**: Management puede ver KPIs: "This week resolved 87 clashes, 412 remain active". Sin status, no hay métricas.

4. **Communication**: Equipos distribuidos (diseñadores, contractors, subs) necesitan saber status sin meetings. Status + comments permiten asynchronous coordination.

5. **Historical reference**: Proyectos futuros pueden revisar cómo se resolvieron clashes similares. Organizational learning.

6. **BIM 360 integration**: Status sync con issue tracking systems requiere status well-maintained.

Sin status management disciplinado, clash detection es solo lista de problemas sin progress hacia resolución. Con status management robusto, es coordination workflow productivo con measurable outcomes.

**Pregunta 5:** ¿Qué es un "false positive" en clash detection y qué estrategias se pueden utilizar para reducir false positives en un proyecto grande?

**Respuesta:** Un **false positive** es un clash reportado por Navisworks que no representa una verdadera interferencia constructiva. Ejemplos típicos:
- Rebar dentro de concreto (clash intentional por diseño)
- Hanger rod atravesando ceiling tile (normal, tile es accesible)
- Pipe sleeve en concreto (penetration designed e intentional)
- Wall finish overlapping wall structure (mismo assembly)
- Objetos en diferentes phases de construcción (temporalmente no interfieren)

**Estrategias para reducir false positives:**

**1. Configurar Clash Rules (Rules Tab):**
- Ignorar clashes entre objetos del mismo assembly (wall + wall finish)
- Exclude specific categories (rebar, sleeves diseñados)
- Filter por custom properties (ej: "If Element Type = Hanger, ignore")

**2. Tolerance apropiada:**
- Too strict tolerance (0.00") detecta modeling inaccuracies como clashes
- Appropriate tolerance (1"-2" hard, 4"-6" clearance) reduce noise

**3. Clean selection sets:**
- Exclude annotation, grids, reference planes
- Separate sistemas que no deben testearse (rebar vs concreto)

**4. Time-based testing:**
- Si modelo tiene phasing, test only objects en same phase
- Construction sequence consideration

**5. Grouping inteligente:**
- Group clashes con same characteristics
- Si 40 hangers generan same type clash, es likely systematic false positive

**6. Iterative refinement:**
- First run genera muchos false positives
- Review, identificar patterns
- Add rules para eliminar patterns
- Re-run iteratively hasta clean results

En proyecto grande (5,000+ clashes initial), esperamos 20-40% false positives en first run. Con rules bien configuradas, esto baja a 5-10%. Tiempo invertido en configurar rules (2-4 horas) ahorra weeks de reviewing false positives. Es investment crítico en setup phase.

## Resumen

En esta lección hemos establecido los fundamentos completos de Clash Detection:

- Comprendimos el **impacto económico masivo** de las interferencias no detectadas (ROI de 10:1 a 40:1) y por qué clash detection es una de las aplicaciones BIM de mayor valor.

- Dominamos la **interfaz de Clash Detective** en Navisworks Manage 2026, navegando entre Tests, Select, Rules, Results y Report tabs eficientemente.

- Diferenciamos entre **tipos de clash tests**: Hard clash (penetración física), Soft clash (clearance violations), y Gap detection (connectivity QC), y aprendimos cuándo usar cada tipo.

- Configuramos **tolerancias apropiadas** basadas en standards de la industria (National CAD Standard, códigos IBC/NEC/IPC), fase del proyecto, y tipo de sistema, con tables de reference para MEP disciplines.

- Creamos **selection sets estratégicos** para testing eficiente entre disciplinas, usando naming conventions y organizational hierarchy apropiadas.

- Ejecutamos **clash tests completos**, interpretamos results, y navegamos clash viewpoints automáticos utilizando sorting, filtering y visualization tools.

- Implementamos **status management workflow** (NEW → ACTIVE → REVIEWED → RESOLVED → APPROVED) con responsibility assignment y comment documentation para tracking efectivo.

Con estos fundamentos, estamos preparados para configuraciones avanzadas de test matrix, clash rules, y grouping strategies.

## Próxima Lección

En la **Lección 8: Configuración Avanzada de Clash Tests** aprenderemos sobre test matrix strategies para coordinar múltiples disciplinas eficientemente, clash rules avanzadas para eliminar false positives, grouping de clashes por sistema y ubicación, batch testing de múltiples tests simultáneos, time-based clash tests (4D coordination), y optimization de test performance en proyectos ultra grandes. Trabajaremos con un modelo hospitalario completo (ARQ + STRUCT + HVAC + PLUMB + ELEC + FP) configurando coordination workflow profesional.

---

**Palabras:** ~5,000
**Tiempo estimado de lectura:** 45-60 minutos
**Tiempo de práctica:** 20-30 minutos
