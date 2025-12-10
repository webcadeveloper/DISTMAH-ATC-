# Lección 4: Multi-Utility Coordination

## Introducción

En proyectos de infraestructura urbana modernos, múltiples utilities (servicios públicos) comparten el mismo derecho de vía: **agua potable, alcantarillado sanitario, alcantarillado pluvial, gas natural, electricidad, telecomunicaciones, fibra óptica, y más**. La coordinación efectiva de estas redes es crítica para evitar conflictos durante construcción, facilitar mantenimiento futuro, y cumplir con códigos de separación.

En esta lección avanzada, aprenderás a gestionar múltiples utilities en un mismo proyecto de Civil 3D 2026, aplicar reglas de separación según códigos, utilizar Data Shortcuts para colaboración multidisciplinaria, implementar workflows BIM, y coordinar con software complementario como Autodesk InfraWorks.

**Duración estimada:** 95 minutos
**Nivel:** Avanzado

---

## 1. Gestión de Múltiples Redes en Civil 3D

### 1.1 Tipos de Utilities Comunes

**Underground Utilities (Subterráneas):**

1. **Water Distribution (Agua Potable):**
   - Pressure networks
   - Típicamente 3-6 ft de profundidad
   - Material: PVC, ductile iron, HDPE

2. **Sanitary Sewer (Alcantarillado Sanitario):**
   - Gravity networks (pendiente descendente)
   - 6-15 ft de profundidad (bajo frost line, bajo otras utilities)
   - Material: PVC, concrete, vitrified clay

3. **Storm Sewer (Alcantarillado Pluvial):**
   - Gravity networks (mayores diámetros)
   - 4-12 ft de profundidad
   - Material: RCP (reinforced concrete pipe), HDPE

4. **Natural Gas:**
   - Pressure networks (baja presión: 0.25-60 psi, alta presión: >60 psi)
   - 2-4 ft de profundidad
   - Material: Steel, PE (polyethylene)

5. **Electrical (Power Distribution):**
   - Conduit con cables de medio/bajo voltaje
   - 2-3 ft de profundidad
   - Material: PVC conduit, HDPE conduit

6. **Telecommunications:**
   - Fiber optic, coaxial, copper pairs
   - 1.5-3 ft de profundidad
   - Material: HDPE conduit con innerduct

**Overhead Utilities (Aéreas):**

7. **Electric Power Lines:**
   - Primario: 4.8-34.5 kV
   - Secundario: 120/240V
   - Clearances verticales críticos (18-25 ft sobre calle)

8. **Telecom Lines:**
   - Cable, teléfono
   - Típicamente bajo power lines

### 1.2 Organización de Layers

**Sistema recomendado (basado en NCS - National CAD Standard):**

```
Naming convention: [Discipline]-[Utility Type]-[Component]

Examples:
C-WATR-PIPE         - Water pipes
C-WATR-APPR         - Water appurtenances (valves, hydrants)
C-WATR-ANNO         - Water annotation
C-WATR-SRVC         - Water service connections

C-SSWR-PIPE         - Sanitary sewer pipes
C-SSWR-STRUC        - Sanitary sewer structures (manholes)
C-SSWR-ANNO         - Sanitary sewer annotation

C-STRM-PIPE         - Storm drain pipes
C-STRM-STRUC        - Storm structures (catch basins, manholes)
C-STRM-ANNO         - Storm annotation

U-GAS-PIPE          - Gas pipes
U-GAS-APPR          - Gas appurtenances
U-GAS-ANNO          - Gas annotation

U-ELEC-COND         - Electric conduit
U-ELEC-STRUC        - Electric manholes/handholes
U-ELEC-ANNO         - Electric annotation

U-TCOM-COND         - Telecom conduit
U-TCOM-STRUC        - Telecom manholes/handholes
U-TCOM-ANNO         - Telecom annotation
```

**Layer Properties:**

| Utility | Color | Linetype | Lineweight |
|---------|-------|----------|------------|
| Water | Blue (5) | Continuous | 0.30mm |
| Sanitary | Brown (33) | Dashed | 0.25mm |
| Storm | Cyan (4) | Continuous | 0.40mm |
| Gas | Yellow (2) | Gas (custom) | 0.25mm |
| Electric | Red (1) | Phantom | 0.20mm |
| Telecom | Magenta (6) | Dot | 0.15mm |

**Beneficios de layers bien organizados:**
- Fácil visualización selectiva (freeze/thaw)
- Control de plotting
- Coordinación con subconsultores
- Cumplimiento con estándares de agencia

### 1.3 Creación de Networks Separadas

**Recomendación profesional:** Cada utility tipo debe ser una network separada.

**Proceso:**

```
Para Water:
Home tab > Pipe Network > Pressure Network Creation Tools
Network name: "Water Main - Phase 1"
Parts List: "Water Distribution - Municipal"

Para Sanitary Sewer:
Home tab > Pipe Network > Pipe Network Creation Tools
Network name: "Sanitary Sewer - Phase 1"
Parts List: "Sanitary Sewer - PVC"

Para Storm Drain:
Home tab > Pipe Network > Pipe Network Creation Tools
Network name: "Storm Drain - Phase 1"
Parts List: "Storm Drain - RCP"

Para Gas:
Home tab > Pipe Network > Pressure Network Creation Tools
Network name: "Gas Distribution - Phase 1"
Parts List: "Gas Distribution - PE"
```

**Configuración de Object Layers:**

```
Toolspace > Settings > [Network Type] > Commands > CreatePipeNetworkByLayout
Right-click > Edit Command Settings

Object Layers:
- Pipe: C-WATR-PIPE (para water), C-SSWR-PIPE (para sanitary), etc.
- Structure: C-WATR-APPR, C-SSWR-STRUC, etc.
- Labels: C-WATR-ANNO, C-SSWR-ANNO, etc.
```

**Ventajas de networks separadas:**
- Análisis independiente (hydraulic analysis)
- Export/Import selectivo
- Colaboración con equipos diferentes (water team, sewer team, etc.)
- Clash detection más claro

---

## 2. Separaciones Mínimas entre Utilities

### 2.1 Códigos y Normas Aplicables

**Estados Unidos:**

- **APWA (American Public Works Association) - Uniform Color Code**
- **ASCE 38 - Standard Guidelines for Utility Location**
- **Ten States Standards**
- **Local municipality codes** (siempre tienen precedencia)

**Internacional:**

- **BS 5930 (UK)** - Site investigations
- **AS/NZS 5488 (Australia/New Zealand)** - Classification of subsurface utility information
- **Normas nacionales** (varían por país)

### 2.2 Separaciones Horizontales Típicas

**Between utilities (minimum clear distance):**

```
Utility Pair                           Min Horizontal    Preferred
                                       Separation        Separation
─────────────────────────────────────────────────────────────────
Water ↔ Sanitary Sewer                 10 ft (3m)        15 ft (4.5m)
Water ↔ Storm Sewer                    5 ft (1.5m)       10 ft (3m)
Water ↔ Gas                            12 in (30cm)      24 in (60cm)
Water ↔ Electric                       12 in (30cm)      24 in (60cm)
Water ↔ Telecom                        12 in (30cm)      24 in (60cm)

Sanitary ↔ Storm                       5 ft (1.5m)       10 ft (3m)
Sanitary ↔ Gas                         12 in (30cm)      24 in (60cm)
Sanitary ↔ Electric                    12 in (30cm)      24 in (60cm)

Gas ↔ Electric                         24 in (60cm)      36 in (90cm)
Gas ↔ Telecom                          12 in (30cm)      24 in (60cm)

Electric ↔ Telecom                     6 in (15cm)       12 in (30cm)
```

**Notas importantes:**

1. **Water ↔ Sanitary Sewer:** La más crítica
   - 10 ft es MÍNIMO (muchos códigos)
   - Razón: Evitar contaminación de agua potable por rotura de alcantarillado
   - Si no es posible: Special construction (ductile iron water pipe, encasement)

2. **Gas ↔ Electric:** Alta prioridad
   - Evitar ignición de gas por chispa eléctrica
   - Si no es posible: Special insulation, barriers

3. **Telecom ↔ Electric:** Evitar interferencia electromagnética
   - Shielded cables si están muy cercanos

### 2.3 Separaciones Verticales Típicas

**Crossing situations (cuando cruzan en planta):**

```
Utility Over                           Utility Under          Min Vertical
                                                              Clear Distance
──────────────────────────────────────────────────────────────────────────
Water                                  Sanitary Sewer         18 in (45cm)
Water                                  Storm Sewer            12 in (30cm)
Water                                  Gas                    12 in (30cm)

Storm Sewer                            Sanitary Sewer         6 in (15cm)
Storm Sewer                            Gas                    12 in (30cm)

Telecom/Electric                       Any wet utility        12 in (30cm)
```

**Jerarquía de profundidad típica (shallowest to deepest):**

```
1. Telecom (más superficial):          1.5-3 ft
2. Electric conduit:                   2-3 ft
3. Gas:                                2.5-4 ft
4. Water:                              3-6 ft
5. Storm drain:                        4-10 ft
6. Sanitary sewer (más profundo):      6-15 ft
```

**Razones:**

- **Telecom/Electric superficial:** Fácil acceso para reparaciones frecuentes
- **Water intermedio:** Balance entre protección y acceso
- **Sanitary profundo:** Gravity flow requiere pendiente, recolecta de edificios (basement connections), bajo todas las demás para evitar contaminación

### 2.4 Implementación en Civil 3D

**Método 1: Reglas de Interferencia (Interference Check Rules)**

```
Analyze tab > Interference Check panel > Run Interference Check

1. Select first network: Water Main
2. Select second network: Sanitary Sewer
3. Interference Check Settings:
   - Horizontal tolerance: 10 ft
   - Vertical tolerance: 18 in (when crossing)
   - Apply to: All pipes and structures
4. Run Check
5. Review results table (shows all violations)
```

**Método 2: Clearance Zones (Zonas de Separación)**

```
Para cada pipe, crear "clearance zone" = pipe exterior + código requirement

Ejemplo Water pipe:
- Diámetro exterior: 8.625 in (8" nominal PVC)
- Clearance requerido: 5 ft cada lado (10 ft total a sanitary)
- Clearance zone width: 8.625 in + 2×5 ft = 10.72 ft

En Civil 3D:
Properties > Pressure Network Pipe > Clearance Zone
- Shape: Rectangular
- Width: 10.72 ft
- Height: [basado en profundidad de instalación]
```

**Método 3: Profile Views Superpuestos**

```
Para verificar separaciones verticales en cruces:

1. Crear alignment en punto de cruce
2. Generate Profile View
3. Draw multiple profiles:
   - Water profile
   - Sanitary profile
   - Storm profile
   - Gas profile
4. Visualmente verificar separaciones verticales
5. Anotar separaciones
```

---

## 3. Técnicas de Organización con Data Shortcuts

### 3.1 Concepto de Data Shortcuts

**Data Shortcuts** permiten **compartir objetos de Civil 3D entre dibujos** manteniendo relaciones dinámicas.

**Objetos que pueden ser Data Shortcuts:**
- Surfaces
- Alignments
- Profiles
- Pipe Networks (gravity y pressure)
- Corridors
- Assemblies
- View Frame Groups

**Workflow típico - Multi-utility project:**

```
Master Drawing: Site.dwg
- Contiene existing ground surface
- Alignments de calles
- Proposed grading surface

Utility Drawings:
- Water.dwg → Referencia alignments y surfaces via shortcuts
- Sanitary.dwg → Referencia alignments y surfaces via shortcuts
- Storm.dwg → Referencia alignments y surfaces via shortcuts
- Gas.dwg → Referencia alignments y surfaces via shortcuts
```

### 3.2 Configuración de Data Shortcuts

**Paso 1: Establecer Working Folder**

```
Manage tab > Data Shortcuts panel > Set Working Folder
Browse to: \\Server\Project\Civil3D\Shortcuts\
```

Esta carpeta contendrá archivos XML que definen los shortcuts.

**Paso 2: Crear Shortcuts desde Master Drawing**

```
En Site.dwg:
1. Manage tab > Data Shortcuts panel > Create Data Shortcuts
2. Select objects:
   - EG Surface (existing ground)
   - FG Surface (proposed finish grade)
   - Main St Alignment
   - Oak Ave Alignment
   - [etc. para todos los alignments]
3. OK

Civil 3D crea archivos .XML en la carpeta de shortcuts
```

**Paso 3: Crear References en Utility Drawings**

```
En Water.dwg:
1. Manage tab > Data Shortcuts panel > Create Reference
2. Select from list:
   - EG Surface → Create Reference
   - Main St Alignment → Create Reference
3. Opciones:
   - [X] Create profile from surface (genera profile automáticamente)

Resultado:
- Surface aparece en Water.dwg (gris, non-editable)
- Alignment aparece (gris, non-editable)
- Si se actualiza en Site.dwg, se actualiza automáticamente en Water.dwg
```

**Paso 4: Sincronización**

```
Si Site.dwg cambia (alignment editado, surface actualizado):

En Water.dwg:
1. Manage tab > Data Shortcuts panel > Synchronize
2. Civil 3D verifica cambios en shortcuts
3. Si hay updates: "Object [name] has been modified. Update? Yes/No"
4. Yes → Objeto se actualiza en dibujo actual

Automático: Configurar en Settings para sincronización al abrir drawing
```

### 3.3 Ventajas de Data Shortcuts en Multi-Utility

**Coordinación automática:**
- Diseñador de water usa alignment oficial (no copia local que puede desincronizarse)
- Si civil engineer ajusta alignment, TODOS los utility drawings se enteran

**File size management:**
- Utility drawings no contienen copias completas de surfaces/alignments
- Solo referencias livianas

**Trabajo en paralelo:**
- Water team trabaja en Water.dwg
- Sewer team trabaja en Sanitary.dwg
- Simultáneamente, sin lock conflicts

**Clash detection entre teams:**
- Crear Coordination.dwg
- Reference water network, sanitary network, etc. via shortcuts
- Run interference check
- Identificar conflictos sin tocar dibujos originales

### 3.4 Limitaciones y Workarounds

**Limitación 1: Shortcuts son read-only**

No puedes editar un alignment referenciado.

**Workaround:**
- Si necesitas variante local: Promote to full object (rompe link)
- O solicita cambio en master drawing

**Limitación 2: Networks no se actualizan dinámicamente en profiles**

Si creas profile de water network y luego editas pipes, el profile no se regenera automáticamente.

**Workaround:**
- Recrear profile después de ediciones mayores
- Usar "Rebuild Network" command

**Limitación 3: Data Shortcuts requieren network access**

Si trabajas offline, no puedes sincronizar.

**Workaround:**
- Copiar carpeta de shortcuts localmente (temporal)
- Re-sync cuando regreses a network

---

## 4. Reference Objects y External References

### 4.1 XREFs (External References) para Utilities

**Diferencia con Data Shortcuts:**

| Aspecto | Data Shortcuts | XREFs |
|---------|---------------|-------|
| Tipo de objeto | Civil 3D intelligent objects | AutoCAD entities |
| Editabilidad | No (read-only) | No (read-only en host) |
| Actualización | Manual (Synchronize) | Automática (Reload) |
| Overlay vs Attach | N/A | Overlay/Attach options |
| Uso típico | Surfaces, alignments, networks | Basemaps, property lines, topo |

**Workflow típico con XREFs:**

```
Water.dwg:
- XREF: Basemap.dwg (property lines, ROW, easements)
- XREF: Topo.dwg (existing utilities, survey data)
- Data Shortcut: Alignments from Site.dwg
- Native objects: Water network (pressure pipes, valves, etc.)
```

**Ventajas de combinar XREFs + Data Shortcuts:**

- XREF para información estática (basemap, topo)
- Data Shortcuts para objetos dinámicos de Civil 3D (alignments, surfaces)

### 4.2 Organización de XREFs

**Insert XREF:**

```
Insert tab > Reference panel > Attach
1. Select: Basemap.dwg
2. Attachment type: Overlay (recomendado para evitar nested XREFs)
3. Path type: Relative path (portabilidad)
4. Insertion point: 0,0,0
5. Scale: 1
6. Rotation: 0
```

**Layer Management con XREFs:**

Al insertar XREF, sus layers aparecen como:
```
Basemap|C-PROP-LINE
Basemap|C-ROW
Basemap|V-NODE-MAJR
```

**Control de display:**
- Freeze layers no necesarios: `Basemap|*ANNO*` (todas las annotations)
- Mantener solo lo relevante para diseño de utility

**XREF Manager:**

```
Insert tab > Reference panel > External References

Opciones:
- Reload: Actualiza si XREF cambió
- Unload: Oculta temporalmente (libera memoria)
- Detach: Elimina referencia completamente
- Bind: Convierte XREF a bloques internos (rompe link)
```

### 4.3 Best Practices

**1. Path Management:**

Usa **Relative Paths** cuando sea posible:
```
Absolute: C:\Projects\SiteX\Basemap.dwg (breaks si moves folders)
Relative: .\Basemap.dwg (maintains link si moves project folder completo)
```

**2. Naming Convention:**

```
XREF names deben ser descriptivos:
- Basemap.dwg (no Base1.dwg)
- ExistingUtilities.dwg (no EU.dwg)
- SurveyTopo2024.dwg (con fecha si relevante)
```

**3. Layers Freezing:**

Crea **Layer States** para diferentes vistas:
```
Layer State: "Design - Water"
- Freeze: Todo excepto water-related layers

Layer State: "Coordination - All Utilities"
- Thaw: Water, sanitary, storm, gas, electric

Layer State: "Presentation"
- Freeze: Construction details
- Thaw: Solo líneas principales y labels
```

---

## 5. Workflows BIM para Utilities

### 5.1 BIM (Building Information Modeling) para Infrastructure

**BIM Level 2 (UK BIM Framework):**

- **Level 0:** CAD 2D (líneas, no inteligencia)
- **Level 1:** 3D CAD (objetos 3D pero sin data)
- **Level 2:** Objetos inteligentes con metadata, collaboration via common data environment
- **Level 3:** Full integration (single shared model)

Civil 3D opera en **Level 2-3** para infrastructure.

**Componentes de BIM workflow:**

1. **Intelligent Objects:**
   - Pipes en Civil 3D no son simples líneas: tienen diámetro, material, invert elevation, etc.
   - Exportable a formatos BIM: IFC (Industry Foundation Classes)

2. **Common Data Environment (CDE):**
   - Autodesk BIM 360 / Autodesk Construction Cloud
   - Todos los stakeholders acceden a modelos actuales

3. **Clash Detection:**
   - Navisworks para identificar conflictos 3D
   - Entre utilities, estructuras, arquitectura

4. **4D/5D:**
   - 4D: Time (construction sequencing)
   - 5D: Cost (cost estimation from BIM model)

### 5.2 Export a IFC (Industry Foundation Classes)

**IFC** es el estándar abierto para intercambio BIM.

**Proceso en Civil 3D 2026:**

```
1. Output tab > Export panel > Export to IFC
2. IFC Version: IFC4 (latest)
3. Select objects:
   - All pressure networks
   - All gravity networks
   - Surfaces (terrain)
4. Export settings:
   - Coordinate system: Project CRS
   - Units: Metric / Imperial
5. File name: Project_Utilities.ifc
6. Export
```

**Resultado:**

Archivo .IFC contiene:
- Geometría 3D de todas las utilities
- Metadata (diámetro, material, elevación, etc.)
- Importable a:
  - Revit (Autodesk)
  - ArchiCAD (Graphisoft)
  - Tekla Structures (Trimble)
  - Navisworks (clash detection)
  - Solibri (quality checking)

### 5.3 Integración con Autodesk Navisworks

**Navisworks** es la herramienta de Autodesk para:
- Clash detection 3D
- 4D construction simulation
- Model review y coordination

**Workflow:**

```
Civil 3D → NWC (Navisworks Cache) → Navisworks Manage

1. En Civil 3D:
   Output tab > Export panel > Export to Navisworks (NWC)
   - Genera archivo Water.nwc

2. Repetir para cada utility:
   - Sanitary.nwc
   - Storm.nwc
   - Gas.nwc
   - Electric.nwc

3. En Navisworks Manage:
   File > Append
   - Agregar todos los .nwc files
   - Resultado: Modelo 3D combinado de todas las utilities

4. Clash Detective:
   Tools > Clash Detective
   - Test 1: Water vs Sanitary (tolerance: 10 ft horizontal, 18 in vertical)
   - Test 2: Water vs Gas (tolerance: 12 in)
   - Test 3: All utilities vs proposed structures (buildings, retaining walls)
   - Run All Tests

5. Results:
   - Lista de todos los clashes detectados
   - Visualización 3D de cada clash
   - Exportar report (HTML, XML)
   - Asignar clashes a responsables (water team, sanitary team)

6. Resolución:
   - Regresar a Civil 3D
   - Ajustar diseño para eliminar clash
   - Re-export NWC
   - Re-run clash test hasta cero clashes
```

**Ventajas:**

- Detección automática (vs manual en profile views)
- 3D visualization (más intuitivo que tablas)
- Reporte para todo el equipo
- Tracking de resolución de conflictos

### 5.4 BIM Execution Plan (BEP)

Para proyectos grandes, se crea un **BEP (BIM Execution Plan):**

**Contenido típico:**

1. **Project Information:**
   - Nombre, ubicación, stakeholders
   - Objetivos BIM (clash detection, 4D simulation, cost estimation)

2. **Roles and Responsibilities:**
   - BIM Manager: Coordina, define estándares
   - Water designer: Mantiene water model
   - Sanitary designer: Mantiene sanitary model
   - Coordination reviewer: Run clash tests semanalmente

3. **Software Platforms:**
   - Design: Civil 3D 2026
   - Coordination: Navisworks Manage 2026
   - Data sharing: BIM 360 Docs
   - Format: IFC 4.0 para intercambio

4. **Level of Development (LOD):**
   - LOD 200: Schematic (diámetros aproximados)
   - LOD 300: Precise geometry (diámetros exactos, ubicaciones precisas)
   - LOD 350: Incluye connections y accesorios
   - LOD 400: Shop drawings (detalle de instalación)

5. **Model Delivery Schedule:**
   - Week 2: Preliminary layouts (LOD 200)
   - Week 4: Design development (LOD 300)
   - Week 6: Clash-free coordination (LOD 350)
   - Week 8: Final construction documents (LOD 400)

6. **Clash Detection Protocol:**
   - Frequency: Semanal (cada viernes)
   - Responsibility: BIM coordinator
   - Resolution deadline: 48 horas para clashes críticos
   - Approval: No se procede a siguiente fase hasta cero clashes

---

## 6. Integración con Autodesk InfraWorks

### 6.1 InfraWorks Overview

**InfraWorks** es software de Autodesk para:
- Conceptual design de infraestructura
- Visualización 3D en contexto (terrain, buildings, vegetation)
- Análisis preliminar (drainage, traffic, utilities)
- Presentaciones a stakeholders (no técnicos)

**Diferencia con Civil 3D:**

| Aspecto | Civil 3D | InfraWorks |
|---------|----------|------------|
| Propósito | Detailed design | Conceptual design |
| Precisión | Milimétrica | Aproximada |
| Usuarios | Ingenieros | Ingenieros + planners + público |
| Output | Construction docs | Renderings, videos, análisis conceptual |

**Workflow típico:**

```
InfraWorks (conceptual) → Civil 3D (detailed design) → InfraWorks (visualization)
```

### 6.2 Export desde Civil 3D a InfraWorks

**IMX (InfraWorks Model Exchange) format:**

```
En Civil 3D:
1. Output tab > Export panel > Export to InfraWorks (IMX)
2. Select objects:
   - Alignments (calles)
   - Surfaces (EG, FG)
   - Pipe Networks (water, sanitary, storm)
3. Export settings:
   - Coordinate system: Match InfraWorks model
4. File: Utilities.IMX

En InfraWorks:
1. Data Sources panel > Add File Data Source
2. Select: Utilities.IMX
3. Import
4. Civil 3D objects aparecen en contexto 3D
```

**Visualización en InfraWorks:**

- Utilities se muestran en 3D bajo terrain
- Secciones transversales muestran profundidades
- Animaciones de "excavation" para visualizar instalación
- Útil para presentaciones a ayuntamiento, público

### 6.3 Roundtrip Workflow

**Scenario: Diseño conceptual en InfraWorks, detalle en Civil 3D**

```
1. InfraWorks:
   - Crear conceptual road alignments
   - Rough utility layout (ubicación aproximada)
   - Export to Civil 3D (IMX → Civil 3D import)

2. Civil 3D:
   - Import alignments desde InfraWorks
   - Precisar geometría (curvas exactas, espirales)
   - Diseñar utilities detalladamente (pipe networks)
   - Análisis hidráulico
   - Export back to InfraWorks (IMX)

3. InfraWorks:
   - Update con diseño detallado
   - Generar visualizaciones finales
   - Video flythrough mostrando utilities bajo calle
```

**Ejemplo de uso real:**

Proyecto de expansión urbana:
- InfraWorks: Presentación a comunidad (video de desarrollo futuro)
- Civil 3D: Ingeniería detallada (cálculos, planos de construcción)
- Navisworks: Clash detection entre utilities
- BIM 360: Compartir con constructor

---

## 7. Casos Prácticos de Coordinación

### Caso 1: Desarrollo Residencial Completo

**Utilities requeridas:**
- Water distribution (pressure network)
- Sanitary sewer (gravity network)
- Storm drain (gravity network)
- Electric conduit
- Telecom conduit

**Enfoque de diseño:**

```
1. Layout inicial en planta:
   - Water: North side de calle (3 ft depth)
   - Electric: North side de calle (2 ft depth, 2 ft offset de water)
   - Telecom: North side de calle (1.5 ft depth, 1 ft offset de electric)
   - Storm: South side de calle (centerline de calle en realidad) (4 ft depth)
   - Sanitary: South side de calle (8 ft depth mínimo)

2. Verificar separaciones:
   - Water ↔ Sanitary: >10 ft (across street = 28 ft) ✓
   - Electric ↔ Water: 2 ft > 12 in ✓
   - Telecom ↔ Electric: 1 ft = 12 in ✓

3. Cruces de calle:
   - Minimizar cruces (costosos de instalar)
   - En intersections: verificar separaciones verticales
   - Profile view en cada cruce mostrando todas las utilities

4. Servicios a lotes:
   - Water service: 3/4" desde main hasta meter en property line
   - Sanitary lateral: 4" desde main hasta building
   - Electric service: Secondary desde transformer
   - Storm: Típicamente no hay servicio individual (solo roof drains si aplica)
```

### Caso 2: Corredor Urbano Existente (Retrofit)

**Desafío:** Agregar fiber optic a calle con utilities existentes muy congestionadas.

**Approach:**

```
1. Survey de utilities existentes:
   - Utility locate (llamar 811 en USA, servicio gratuito)
   - Potholing en puntos críticos (excavación de prueba)
   - GPR (Ground Penetrating Radar) para utilities no metálicas

2. Modelar en Civil 3D:
   - Crear networks de todas las utilities existentes (basado en survey)
   - Verificar espacio disponible

3. Opciones para fiber:
   - Opción A: Shallow (1.5 ft), entre electric y telecom existente
   - Opción B: Directional drill bajo todas las utilities (evita excavación de calle)
   - Opción C: Aerial (postes) si no hay espacio subterráneo

4. Análisis de costo-beneficio:
   - Open trench: $50/ft (requiere cierre de calle)
   - Directional drill: $120/ft (mínima interrupción de tráfico)
   - Aerial: $30/ft (pero estética negativa)

5. Decisión: Directional drill en secciones congestionadas, open trench en áreas con espacio
```

---

## Resumen

La **coordinación de múltiples utilities** requiere:

1. **Organización sistemática** - Layers, networks separadas, naming conventions
2. **Conocimiento de códigos** - Separaciones mínimas horizontales y verticales
3. **Herramientas de colaboración** - Data Shortcuts, XREFs
4. **BIM workflows** - IFC export, Navisworks clash detection
5. **Visualización contextual** - InfraWorks para stakeholders
6. **Verificación rigurosa** - Interference checking en plan y profile
7. **Documentación clara** - Planos de coordinación, matrices de separación

En la siguiente lección (final del módulo), aprenderás **Interference Checking Avanzado**, profundizando en técnicas de clash detection, configuración de clearance zones personalizadas, y workflows de resolución de conflictos.

---

**Recursos:**
- APWA Uniform Color Code: [apwa.net](https://www.apwa.net/resources/uniform-color-code)
- Autodesk BIM 360: [Construction Cloud](https://construction.autodesk.com)
- Navisworks Tutorials: [Autodesk Knowledge Network](https://knowledge.autodesk.com/support/navisworks)
- InfraWorks Learn: [Autodesk Learn InfraWorks](https://www.autodesk.com/products/infraworks)

**Siguiente:** Lección 5 - Interference Checking Avanzado
