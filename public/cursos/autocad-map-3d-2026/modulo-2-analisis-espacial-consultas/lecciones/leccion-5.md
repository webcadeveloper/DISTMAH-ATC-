# Lección 5: Análisis de Red (Network Analysis)

## Objetivos de Aprendizaje

- ✅ Crear network topology para infraestructura
- ✅ Realizar trace upstream/downstream
- ✅ Find connected features en networks
- ✅ Shortest path analysis
- ✅ Network validation (isolated features, loops)

## Introducción

**Network Analysis** es crítico para gestión de utilities (water, sewer, gas, electric, telecom). Permite responder preguntas operacionales:
- ¿Qué clientes pierden servicio si cierro esta válvula para mantenimiento?
- ¿Cuál es la ruta más corta para truck de reparación?
- ¿Hay secciones aisladas del network (no conectadas)?
- ¿Qué dirección fluye el agua en este segment?

Map 3D integra network analysis básico. Para análisis avanzado, use ArcGIS Network Analyst o software especializado de utilities.

## 1. Tipos de Networks

### 1.1 Geometric Networks

**Network definido por geometría** (conectividad determinada por coincidencia espacial de endpoints).

**Ejemplos:**
- **Water distribution:** Tuberías conectadas en válvulas/junctions
- **Sewer collection:** Pipes conectadas en manholes
- **Electrical grid:** Lines conectadas en transformers/switches
- **Road network:** Streets conectadas en intersections

### 1.2 Flow Direction

**Networks pueden tener flow direction:**

**Directional flow:**
- Water: Source (treatment plant) → Consumers
- Sewer: Homes → Treatment plant (gravity flow)
- Electrical: Substation → Consumers

**Bidirectional:**
- Roads (traffic en ambas direcciones)
- Some water systems (puede reverse flow en emergencies)

**Flow direction determina:** Upstream vs downstream tracing.

### 1.3 Network Elements

| Element | Type | Example |
|---------|------|---------|
| **Edges** | Lines | Pipes, cables, streets |
| **Junctions** | Points | Valves, manholes, switches, intersections |
| **Sources** | Points | Treatment plants, substations |
| **Sinks** | Points | Consumers, destinations |

## 2. Crear Network Topology

### 2.1 Preparar Datos

**Requirement:** Líneas deben estar **topológicamente correctas**:
- Endpoints coinciden precisamente en junctions
- No gaps (tolerancia < 0.001 units)
- No duplicate lines
- Closed polylines para valves/junctions

**Comandos de limpieza:**
- `OVERKILL` - Remove duplicates
- `JOIN` - Merge line segments
- Object Snap (OSNAP) - Snap endpoints precisamente

### 2.2 Create Network Topology

**Procedimiento (basado en Lección 4):**

1. **Task Pane > Analysis > Topology**
2. **Create Topology:** `Water_Network`
3. **Add Feature Classes:**
   - `water_lines` (edges)
   - `valves` (junctions)
   - `treatment_plant` (source)
4. **Rules:**
   - Lines must be connected (no dangles)
   - Junctions must be at line endpoints
5. **Connectivity tolerance:** 0.001
6. **Build Topology**
7. **Validate**

### 2.3 Define Flow Direction

**Algunos networks requieren flow direction explícita:**

1. **Topology Properties**
2. **Flow Direction:**
   - **Digitized direction:** Flow sigue dirección que fue dibujada la line
   - **Attribute-based:** Flow determinado por atributo (ej: `FlowDir` = "Upstream"/"Downstream")
   - **From source:** Map 3D calcula flow desde source features hacia sinks

3. **Specify Sources:**
   - Select features que son sources (ej: treatment plants)
   - Map 3D marca como sources en topology

**Resultado:** Cada edge tiene flow direction asignado.

## 3. Trace Analysis

### 3.1 Downstream Trace

**Encuentra todos los features "downstream" desde punto inicial.**

**Uso:** ¿Qué área pierde agua si cierro esta válvula?

**Procedimiento:**

1. **Map Explorer > Topologies > Right-click > Trace**
2. **Trace Type:** **Downstream**
3. **Starting Feature:**
   - Click en map para seleccionar válvula/junction
   - O select feature antes de trace
4. **Options:**
   - **Trace all paths:** Sigue todos los branches
   - **Stop at:**barriers (ej: closed valves)
5. **Execute**

**Resultado:**
- Todas las lines y junctions downstream seleccionadas
- Highlighted en map
- List de feature IDs en report

![Downstream Trace](../imagenes/leccion-5-downstream-trace.png)

### 3.2 Upstream Trace

**Encuentra features "upstream" (contra flow).**

**Uso:** ¿Dónde se originó contaminación detectada en este punto?

**Procedimiento:**
1. **Trace > Upstream**
2. **Starting point:** Punto donde detectaste contaminación
3. **Execute**

**Resultado:** Trace upstream hasta source, identify potential contamination sources.

### 3.3 Trace con Barriers

**Barriers:** Features que detienen el trace (ej: válvulas cerradas, diques).

**Procedimiento:**
1. **Trace > Downstream**
2. **Barriers:**
   - **Select features** que actúan como barriers
   - O **Attribute query:** `ValveStatus = 'Closed'`
3. **Execute**

**Resultado:** Trace stops at barriers, simula network con válvulas cerradas.

**Aplicación:** Simulate cierre de válvulas para planear mantenimiento.

## 4. Find Connected Features

### 4.1 Find All Connected

**Encuentra todas las features conectadas al network principal.**

**Procedimiento:**
1. **Topology > Find Connected**
2. **Seed feature:** Select 1 feature en main network
3. **Execute**

**Resultado:** Selecciona todo el network conectado al seed.

**Uso:** Verificar que network es continuo (todas las features deben seleccionarse).

### 4.2 Find Isolated Features

**Identifica features NO conectadas al network principal** (potential errors).

**Procedimiento:**
1. **Topology > Find Isolated**
2. **Execute**

**Resultado:** Selecciona features aisladas.

**Posibles causas:**
- Data entry error (line no snapped correctamente)
- Válvula cerrada que separa sección del network
- Abandoned infrastructure (OK estar isolated)

**Fix:**
- Connect isolated features al network principal (si es error)
- O mark como "Abandoned" en attributes (si es correcto)

## 5. Shortest Path Analysis

### 5.1 Dijkstra's Algorithm

**Map 3D usa Dijkstra's algorithm** para find shortest path entre 2 nodes.

**Cost puede ser:**
- **Geometric distance:** Shortest physical path
- **Attribute-based:** Ej: Travel time (speed × distance), cost de mantenimiento

### 5.2 Shortest Path Procedure

**Escenario:** Ruta óptima para service truck desde depot a work site.

**Procedimiento:**

1. **Topology > Shortest Path**
2. **Network:** `Road_Network`
3. **Cost Attribute:**
   - **Geometric** (default, usa length)
   - O select attribute: `TravelTime_min`
4. **Start Point:** Click en depot location
5. **End Point:** Click en work site
6. **Execute**

**Resultado:**
- Shortest path highlighted en map
- Total cost displayed (distance o travel time)
- Can export path como separate feature class

### 5.3 Multiple Stops Routing

**Para route con múltiples stops:**

1. **Shortest Path**
2. **Add Stops:**
   - Stop 1: Depot
   - Stop 2: Site A
   - Stop 3: Site B
   - Return to: Depot
3. **Optimize order:** Map 3D calcula best sequence
4. **Execute**

**Resultado:** Optimal route visitando todos los stops.

**Aplicación:** Optimize service routes, delivery routes, inspection routes.

## 6. Network Validation

### 6.1 Check Network Integrity

**Validation verifica:**
- ✅ All edges conectadas
- ✅ No isolated segments
- ✅ Junctions en intersections
- ✅ Flow direction consistente
- ✅ No loops (para gravity systems como sewer)

**Procedimiento:**
1. **Topology > Validate**
2. Review error report
3. Fix errors (ver Lección 4)

### 6.2 Detect Loops

**Loop:** Circular path en network.

**En water systems:** Loops = OK (redundancy, permite alternate paths)
**En gravity sewer:** Loops = ERROR (gravity flow no puede tener loops)

**Find Loops:**
1. **Topology > Find Loops**
2. **Execute**

**Resultado:** Highlights loop features.

**Fix (for sewer):** Adjust inverts/slopes para ensure unidirectional flow.

### 6.3 Check Flow Direction

**Verify flow direction es consistente:**

**Visual check:**
1. **Display Manager > Topology**
2. **Show flow arrows:** Arrows en edges indican flow direction
3. Verify arrows point downstream (hacia treatment plant para sewer)

**Fix reverse flow:**
1. Select edge con wrong direction
2. Comando: `MAPFLIPFLOW` (reverses flow direction del edge)
3. Re-validate

## 7. Aplicaciones Profesionales

### 7.1 Water System Valve Isolation

**Pregunta:** Si cierro válvula #245 para reparación, ¿cuántos clientes pierden servicio?

**Análisis:**
1. Create barrier en válvula #245
2. Downstream trace desde treatment plant
3. Features NO seleccionadas = áreas sin servicio
4. Count service connections en áreas afectadas

**Output:** Report de clientes afectados → Notificación requerida.

### 7.2 Sewer Capacity Analysis

**Pregunta:** ¿Qué manholes upstream contribuyen flow al manhole #180 (overflowing)?

**Análisis:**
1. Upstream trace desde manhole #180
2. Identify todos los manholes upstream
3. Sum contributing flows (basado en atributo `AvgFlow_GPM`)
4. Compara total flow vs capacity de pipe en manhole #180

**Output:** If total flow > capacity → Requiere upsizing del pipe.

### 7.3 Emergency Response Routing

**Pregunta:** Ruta más rápida para ambulancia desde station a incident?

**Análisis:**
1. Shortest path en road network
2. Cost attribute: `TravelTime` (considera speed limits, traffic)
3. Start: Station location
4. End: Incident location

**Output:** Optimal route → Dispatch instructions.

## Ejercicio Práctico

### Ejercicio 5.1: Water Network Analysis

**Objetivo:** Crear network topology, realizar downstream trace para identificar clientes afectados por cierre de válvula.

**Datos:**
- `water_mains.shp` - Tuberías
- `valves.shp` - Válvulas
- `service_connections.shp` - Conexiones de clientes

**Instrucciones:**

1. **Import data:**
   - MAPIMPORT todos los shapefiles

2. **Create Topology:**
   - Name: `Water_Network`
   - Edges: `water_mains`
   - Junctions: `valves`
   - Rules: Must be connected
   - Build

3. **Validate:**
   - Identify y fix cualquier dangle/gap

4. **Downstream Trace:**
   - Select válvula en centro del network (ej: Valve #10)
   - Topology > Trace > Downstream
   - Barrier: Selected valve (simulando cierre)

5. **Identify Affected Customers:**
   - Areas downstream from barrier = affected
   - Spatial query: Select `service_connections` dentro de affected area
   - Count: Número de clientes afectados

6. **Report:**
   - Valve ID
   - Number of affected customers
   - Length of pipes affected (sum lengths)

**Entregable:**
- Drawing con topology y trace resultado
- Report de análisis

**Tiempo:** 30 minutos

## Evaluación

1. **¿Downstream trace muestra features hacia?**
   - a) Contra flow direction
   - b) En dirección del flow
   - c) En todas direcciones
   - d) Solo junctions

2. **¿Qué algorithm usa Map 3D para shortest path?**
   - a) A* algorithm
   - b) Dijkstra's algorithm
   - c) Bellman-Ford
   - d) Floyd-Warshall

3. **Isolated features son:**
   - a) Features deleted
   - b) Features sin atributos
   - c) Features NO conectadas al network principal
   - d) Features con errors

4. **Para simular cierre de válvula en trace, usas:**
   - a) Delete válvula
   - b) Barriers
   - c) Reverse flow
   - d) Find isolated

5. **En gravity sewer system, loops son:**
   - a) OK, proveen redundancy
   - b) ERROR, gravity flow no puede loop
   - c) Necesarios para performance
   - d) Irrelevantes

**Respuestas:** 1-b, 2-b, 3-c, 4-b, 5-b

## Recursos Adicionales

- [Network Analysis Guide](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-network-analysis)
- [Utility Network Modeling](https://pro.arcgis.com/en/pro-app/latest/help/data/utility-network/what-is-a-utility-network-.htm) - ESRI

## Resumen

- ✅ **Network topology** define connectivity entre edges y junctions
- ✅ **Flow direction:** Upstream vs Downstream
- ✅ **Trace:** Downstream (con flow), Upstream (contra flow)
- ✅ **Barriers:** Simulan válvulas/switches cerradas
- ✅ **Shortest path:** Dijkstra's algorithm, cost-based routing
- ✅ **Validation:** Find isolated, detect loops, check flow direction
- ✅ **Aplicaciones:** Valve isolation, capacity analysis, emergency routing

**Siguiente:** [Lección 6 - Thematic Mapping Avanzado](leccion-6.md)
