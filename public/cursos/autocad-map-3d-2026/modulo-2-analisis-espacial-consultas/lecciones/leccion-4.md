# Lección 4: Topology y Relaciones Espaciales

## Objetivos de Aprendizaje

- ✅ Comprender conceptos de topología (nodes, edges, faces)
- ✅ Crear topologías en Map 3D
- ✅ Validar topología (gaps, overlaps, dangles)
- ✅ Realizar topological editing
- ✅ Aplicar topología a redes de infraestructura

## Introducción

**Topology** define relaciones espaciales entre features: conectividad, containment, adjacency. Es fundamental para:
- **Network analysis:** Water/sewer systems, electrical grids, roads
- **Data validation:** Find gaps, overlaps, errors en parcelas catastrales
- **Editing efficiency:** Shared boundaries update automáticamente
- **Spatial integrity:** Guarantee data quality

Sin topología, features son geometrías independientes. Con topología, Map 3D "entiende" que una tubería conecta a otra en válvula específica, o que 2 parcels share un boundary común.

## 1. Conceptos de Topología

### 1.1 Elementos Topológicos

**Nodes:**
- Puntos de inicio/fin de líneas
- Intersecciones
- Ejemplo: Válvulas en network de water

**Edges:**
- Líneas entre nodes
- Ejemplo: Segmentos de tubería entre válvulas

**Faces (Polygons):**
- Áreas enclosed por edges
- Ejemplo: Parcelas catastrales

**Adjacency:**
- Features que comparten boundary (edge común)
- Ejemplo: 2 parcels adyacentes share fence line

**Connectivity:**
- Features conectadas en nodes
- Ejemplo: 3 tuberías conectadas en junction

### 1.2 Reglas Topológicas

**Topological rules** definen lo que es válido/inválido:

| Rule | Descripción | Ejemplo |
|------|-------------|---------|
| **No gaps** | Polygons deben cubrir área completamente sin huecos | Parcelas catastrales |
| **No overlaps** | Polygons no deben solaparse | Zonificación (cada punto en solo 1 zone) |
| **Must not have dangles** | Lines deben conectar en endpoints | Water network (no loose ends) |
| **Must be connected** | Network debe ser continuo | Road network |
| **Containment** | Points deben estar dentro de polygons | Buildings dentro de parcels |

## 2. Crear Topology en Map 3D

### 2.1 Workflow General

1. **Preparar datos:** Clean geometries (remove duplicates, close polylines)
2. **Define topology:** Specify feature classes y rules
3. **Build topology:** Map 3D crea estructura topológica
4. **Validate:** Check for errors
5. **Fix errors:** Edit geometries para compliance

### 2.2 Crear Network Topology (Water System)

**Escenario:** Red de agua potable con tuberías (lines) y válvulas (points).

**Procedimiento:**

1. **Task Pane > Analysis tab**
2. **Topology** > **Create Topology**
3. **Topology Name:** `Water_Network_Topology`

4. **Add Feature Classes:**
   - Click **Add**
   - Select `water_lines` (edges)
   - Select `valves` (nodes)

5. **Define Rules:**
   - `water_lines` **must be connected** (no dangles)
   - `water_lines` **must not overlap**
   - `valves` **must be on** `water_lines` endpoints

6. **Tolerance:**
   - **Snapping tolerance:** 0.001 (units del drawing)
   - Features dentro de tolerance se consideran "connected"

7. **Build Topology**

**Resultado:** Map 3D analiza geometrías y crea topology structure.

### 2.3 Crear Polygon Topology (Parcels)

**Escenario:** Parcelas catastrales que deben cubrir área sin gaps/overlaps.

**Procedimiento:**

1. **Create Topology:** `Parcel_Topology`
2. **Add:** `parcels` (polygons)
3. **Rules:**
   - **Must not have gaps** (debe cubrir área completamente)
   - **Must not overlap** (cada punto en solo 1 parcel)
   - **Must be closed** (polygons cerrados)
4. **Build**

## 3. Validar Topology

### 3.1 Topology Validation

**Validation** ejecuta checks contra las rules:

1. **Map Explorer** > **Topologies**
2. **Right-click** en topology > **Validate**
3. Map 3D analiza y genera **error report**

**Error report muestra:**
- **Error type:** Gap, Overlap, Dangle, etc.
- **Location:** Coordinates del error
- **Severity:** Critical, Warning

### 3.2 Visualizar Errors

**Topology errors se muestran en Display Manager:**

1. **Display Manager** > Expande topology
2. **Error layers:**
   - `Errors_Gaps` (red)
   - `Errors_Overlaps` (yellow)
   - `Errors_Dangles` (purple)

3. **Zoom to error:**
   - Right-click en error > **Zoom To**

![Topology Errors](../imagenes/leccion-4-topology-errors.png)

### 3.3 Tipos de Errors Comunes

**Dangles (loose ends):**
- Línea no conecta a nada en endpoint
- **Causa:** Data entry error, línea no snapped correctamente
- **Fix:** Extend línea para conectar, o delete si es error

**Gaps (huecos):**
- Área sin coverage entre polygons
- **Causa:** Polygons no alineados precisamente
- **Fix:** Extend polygon boundaries para cerrar gap

**Overlaps:**
- Polygons se solapan
- **Causa:** Digitizing error
- **Fix:** Trim uno de los polygons

**Pseudonodes:**
- Node con solo 2 edges conectadas (debería ser 1 edge continua)
- **Causa:** Línea dibujada en 2 segmentos
- **Fix:** Merge los 2 segments

## 4. Topological Editing

### 4.1 Shared Boundary Editing

**Ventaja de topology:** Cuando editas shared boundary entre 2 parcels, AMBOS parcels update automáticamente.

**Sin topology:**
- Editas boundary de Parcel A
- Boundary de Parcel B NO actualiza
- Resultado: Gap o overlap entre parcels

**Con topology:**
- Editas shared boundary
- Ambos parcels actualizan simultáneamente
- Resultado: Boundary shared se mantiene

### 4.2 Fix Topology Errors

**Ejemplo: Fix Dangle en Water Network**

1. **Identify dangle:**
   - Topology validation muestra dangle error
   - Zoom to error location

2. **Analyze:**
   - ¿Es dangle válido? (ej: dead-end pipe = OK)
   - ¿O debe conectar? (error)

3. **Fix:**
   - Comando: `EXTEND` o `TRIM`
   - Snap línea al nearest node/line
   - Use **Object Snap** (OSNAP) con mode "Node" activo

4. **Re-validate:**
   - Topology > Validate
   - Error debe desaparecer

**Ejemplo: Fix Gap entre Parcels**

1. **Zoom to gap**
2. **Select parcel** boundary edge
3. **Edit with grips:**
   - Drag vertex para close gap
   - Snap a boundary del parcel adyacente
4. **Re-validate**

## 5. Network Analysis con Topology

### 5.1 Trace Connectivity

**Con topology creada, puedes trace networks:**

**Upstream trace (aguas arriba):**
- Desde punto en network, find all connected features "upstream" (contra flow direction)
- **Uso:** Identificar source de contaminación en water system

**Downstream trace:**
- Find all connected features "downstream" (con flow direction)
- **Uso:** ¿Qué áreas pierden servicio si cierro esta válvula?

**Procedimiento:**

1. **Map Explorer** > **Topologies** > Right-click en topology
2. **Trace** > **Downstream** (o Upstream)
3. **Start point:** Click en feature
4. Map 3D selecciona todas las features conectadas siguiendo flow

### 5.2 Find Isolated Features

**Isolated features:** Features que NO conectan al resto del network.

**Procedimiento:**

1. **Topology** > **Find Isolated**
2. Map 3D identifica features aisladas
3. **Resultado:** Potential errors (lines que deben conectar pero no lo hacen)

**Fix:** Connect isolated features al network principal.

### 5.3 Shortest Path Analysis

**Con topology, Map 3D puede calcular shortest path entre 2 nodes.**

**Aplicación:**
- Routing de vehículos de mantenimiento
- Emergency response path planning
- Optimización de service routes

**Procedimiento:**

1. **Topology** > **Shortest Path**
2. **Start node:** Click en point
3. **End node:** Click en destination
4. Map 3D calcula shortest path siguiendo network topology
5. **Output:** Highlight path, export como separate feature

## Ejercicio Práctico

### Ejercicio 4.1: Crear y Validar Topology de Parcels

**Objetivo:** Crear polygon topology para parcels, validar, y fix errors.

**Datos:**
- `parcels_with_errors.shp` (shapefile con gaps y overlaps intencionales)

**Instrucciones:**

1. **Import shapefile:**
   - MAPIMPORT > `parcels_with_errors.shp`
   - Layer: `Parcels`

2. **Create Topology:**
   - Task Pane > Analysis > Topology
   - Create > Name: `Parcel_Topology`
   - Add: `Parcels` (polygons)
   - Rules:
     - Must not have gaps
     - Must not overlap
   - Tolerance: 0.01
   - Build

3. **Validate:**
   - Map Explorer > Topologies > `Parcel_Topology`
   - Right-click > Validate
   - Anota: Cuántos gaps, cuántos overlaps

4. **Visualizar errors:**
   - Display Manager > Expande `Parcel_Topology`
   - Errors layers visible
   - Zoom to first gap error

5. **Fix 1 gap:**
   - Select parcel boundary edge
   - Edit con grips para close gap
   - Snap precisamente al adjacent parcel

6. **Fix 1 overlap:**
   - Identify overlapping area
   - Comando: TRIM
   - Trim uno de los parcels para remove overlap

7. **Re-validate:**
   - Topology > Validate
   - Verify errors disminuyeron

**Entregable:**
- Drawing con topology creada
- Report: Número inicial de errors vs final
- Screenshot de error visualizado

**Tiempo:** 30 minutos

## Evaluación

1. **¿Qué elemento topológico representa intersecciones en un network?**
   - a) Edges
   - b) Faces
   - c) Nodes
   - d) Boundaries

2. **¿Qué topology rule verifica que parcels no se solapan?**
   - a) Must be connected
   - b) Must not overlap
   - c) Must not have dangles
   - d) Containment

3. **Un "dangle" en water network es:**
   - a) Válvula cerrada
   - b) Endpoint de line que no conecta a nada
   - c) Intersección de 3 pipes
   - d) Polygon gap

4. **¿Qué ventaja tiene topological editing de shared boundaries?**
   - a) Más rápido
   - b) Ambos polygons actualizan automáticamente
   - c) No requiere snapping
   - d) Funciona sin topology

5. **Para trazar qué areas pierden agua si cierras una válvula, usarías:**
   - a) Upstream trace
   - b) Downstream trace
   - c) Shortest path
   - d) Find isolated

**Respuestas:** 1-c, 2-b, 3-b, 4-b, 5-b

## Recursos Adicionales

- [Topology in GIS](https://desktop.arcgis.com/en/arcmap/latest/manage-data/topologies/what-is-a-topology.htm) - ESRI
- [Network Topology Guide](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-topology)

## Resumen

- ✅ **Topology** define relaciones espaciales (connectivity, adjacency)
- ✅ **Elements:** Nodes (intersections), Edges (lines), Faces (polygons)
- ✅ **Rules:** No gaps, no overlaps, must be connected, etc.
- ✅ **Validation** identifica errors (dangles, gaps, overlaps)
- ✅ **Topological editing:** Shared boundaries update automáticamente
- ✅ **Network analysis:** Trace, shortest path, find isolated

**Siguiente:** [Lección 5 - Network Analysis](leccion-5.md)
