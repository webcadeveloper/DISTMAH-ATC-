# Ejercicios Prácticos - Módulo 2

## Introducción

Este módulo contiene **6 ejercicios integradores** que consolidan análisis espacial, Object Data, conexiones a databases, topology, y network analysis. Estos ejercicios simulan tareas reales de GIS Analysts, ingenieros de utilities, y planificadores urbanos.

**Tiempo estimado total:** 3-4 horas

---

## Ejercicio 1: Gestión de Atributos de Infraestructura con Object Data

### Escenario

Eres responsable del inventario de infraestructura de agua potable municipal. Debes crear sistema de Object Data para tuberías, agregar atributos de campo (inspecciones), y generar reportes.

### Objetivos

- Crear Object Data tables para water mains y valves
- Attach attributes desde datos de campo (CSV)
- Usar ODETABLE para edición masiva
- Exportar a Shapefile para compartir con departamento GIS

### Instrucciones

1. **Create Object Data Tables:**
   - `OD_WaterMains`: Diameter (Real), Material (Char, 20), InstallYear (Integer), Condition (Char, 10)
   - `OD_Valves`: ValveType (Char, 20), Size_inches (Real), Status (Char, 10), LastInspection (Date)

2. **Attach to Existing Features:**
   - Import `water_mains.shp` y `valves.shp`
   - Attach Object Data a features (datos de muestra)

3. **Import Field Data:**
   - CSV con inspection results: `ValveID, Status, LastInspection`
   - Use ODETABLE para update `OD_Valves` desde CSV

4. **Query y Analysis:**
   - ODETABLE: Filter valves donde Status = 'NeedsRepair'
   - Generate report (export to Excel)

5. **Export:**
   - MAPEXPORT `water_mains` a Shapefile con Object Data
   - Verify en QGIS

### Entregables
- Drawing con Object Data attached
- Excel report de valves needing repair
- Shapefiles exportados

**Tiempo:** 40 minutos

---

## Ejercicio 2: Conexión a Base de Datos Corporativa PostgreSQL

### Escenario

Tu compañía mantiene asset database en PostgreSQL/PostGIS. Debes conectar Map 3D, visualizar infrastructure, y update attributes de field inspections.

### Objetivos

- Configure FDO connection a PostgreSQL
- Explore schemas y feature classes
- Edit attributes directamente en database
- Verify changes persisten

### Prerequisitos

- Acceso a PostgreSQL server (instructor proveerá credenciales)

### Instrucciones

1. **Connect to PostgreSQL:**
   - Provider: PostgreSQL
   - Service: `[instructor_server]:5432`
   - Database: `company_assets`
   - Username/Password: [provided]

2. **Explore Data:**
   - Browse schema `infrastructure`
   - Feature classes: `water_mains`, `sewer_mains`, `storm_drains`
   - Right-click > Schema para ver structure

3. **Visualize:**
   - Add todos los feature classes a Display Manager
   - Configure thematic styles:
     - Water mains: Blue, ranged por diameter
     - Sewer: Brown, individual values por material
     - Storm: Gray, default style

4. **Edit Attributes:**
   - Select feature en `water_mains`
   - Task Pane > Object Data
   - Update `Condition` attribute
   - Verify change guardó en database (check en QGIS o pgAdmin)

5. **Query:**
   - Spatial Query: Water mains dentro de 50m de `critical_facilities`
   - Export results to SHP

### Entregables
- Screenshot de conexión PostgreSQL
- Screenshot de thematic display
- Shapefile de query results

**Tiempo:** 35 minutos

---

## Ejercicio 3: Buffer Analysis - Zonas de Protección de Pozos

### Escenario

Regulaciones ambientales requieren buffer zones alrededor de pozos de agua (wells): 300m protección primaria, 1km protección secundaria. Debes identificar parcelas en estas zonas y notificar a propietarios.

### Objetivos

- Create multi-ring buffers
- Overlay con parcelas para identificar afectadas
- Calculate statistics (número de parcelas, área total)
- Generate notification list

### Datos

- `wells.shp` - Puntos de pozos
- `parcels.shp` - Parcelas catastrales con Owner attribute

### Instrucciones

1. **Primary Protection Zone (300m):**
   - Create Buffer > Source: `wells`
   - Distance: 300 (meters)
   - Output: `protection_zone_primary`

2. **Secondary Protection Zone (1km):**
   - Buffer > 1000m
   - Output: `protection_zone_secondary`

3. **Overlay con Parcels:**
   - Intersect `parcels` con `protection_zone_primary`
   - Output: `parcels_primary_zone`
   - Intersect `parcels` con `protection_zone_secondary`
   - Output: `parcels_secondary_zone`

4. **Statistics:**
   - Count parcelas en cada zone
   - Sum total area afectada
   - Use LIST command o export y analyze en Excel

5. **Notification List:**
   - ODETABLE de `parcels_primary_zone`
   - Export Owner names y addresses
   - Generate CSV para mail merge

### Entregables
- Drawing con buffer zones visualizadas
- Statistics report
- CSV notification list

**Tiempo:** 30 minutos

---

## Ejercicio 4: Overlay Analysis - Detección de Conflictos entre Utilities

### Escenario

Proyecto de nueva tubería de gas natural. Debes verificar que NO intersecta con utilities existentes (water, sewer, electric) para evitar conflictos y planear protecciones especiales donde sean inevitables.

### Objetivos

- Intersect proposed gas line con existing utilities
- Identify conflict locations
- Calculate safety buffer zones alrededor de conflicts
- Generate conflict report para engineering team

### Datos

- `proposed_gas_line.shp` - Propuesta (LineString)
- `existing_water.shp`, `existing_sewer.shp`, `existing_electric.shp`

### Instrucciones

1. **Detect Intersections:**
   - Overlay > Intersect `proposed_gas_line` con `existing_water`
   - Output: `conflicts_water` (puntos de intersección)
   - Repeat para sewer y electric

2. **Safety Buffers:**
   - Buffer `conflicts_water` por 5m (safety clearance)
   - Repeat para otros conflicts

3. **Combine All Conflicts:**
   - Union todos los conflict points
   - Output: `all_conflicts`

4. **Analysis:**
   - Count total conflicts
   - Classify por utility type
   - Measure length de proposed line dentro de safety buffers

5. **Report:**
   - Create table:
     - Conflict Location (chainage)
     - Utility Type
     - Required Action (relocate/protect)

### Entregables
- Drawing mostrando proposed line + existing utilities + conflicts
- Conflict report table

**Tiempo:** 35 minutos

---

## Ejercicio 5: Crear y Validar Topología de Red de Agua

### Escenario

Database de water system tiene errors de digitizing (gaps, dangles, overlaps). Debes crear topology, validate, fix errors para ensure data integrity antes de usar en hydraulic modeling.

### Objetivos

- Create network topology (lines + junctions)
- Validate y identify errors
- Fix errors (gaps, dangles, overlaps)
- Generate clean dataset

### Datos

- `water_mains_with_errors.shp` - Lines con intentional errors
- `junctions.shp` - Válvulas y connections

### Instrucciones

1. **Create Topology:**
   - Name: `Water_Network_Topology`
   - Edges: `water_mains_with_errors`
   - Junctions: `junctions`
   - Rules:
     - Lines must be connected (no dangles)
     - Lines must not overlap
     - Junctions must be at endpoints

2. **Validate:**
   - Topology > Validate
   - Anota: Número de each error type (dangles, gaps, overlaps)

3. **Fix Errors (mínimo 5):**
   - **Dangle:** Extend line para conectar al nearest junction
   - **Gap:** Snap endpoints juntos (tolerance 0.01)
   - **Overlap:** TRIM duplicate segment

4. **Re-Validate:**
   - Validate again
   - Verify errors disminuyeron

5. **Export Clean Data:**
   - MAPEXPORT cleaned water_mains
   - File: `water_mains_clean.shp`

### Entregables
- Before/After error count comparison
- Drawing con topology errors visualizados
- Clean Shapefile

**Tiempo:** 40 minutos

---

## Ejercicio 6: Network Tracing - Análisis de Impacto de Cierre de Válvula

### Escenario

Válvula #345 requiere reparación urgente (8 horas de cierre). Debes determinar qué customers pierden servicio para coordinar notificaciones y water tanker deployment.

### Objetivos

- Create network topology con flow direction
- Perform downstream trace desde válvula #345
- Identify service connections afectadas
- Calculate número de customers y demand (GPM) afectado
- Generate emergency response plan

### Datos

- `water_mains.shp` - Network con FlowDirection attribute
- `valves.shp` - Valves
- `service_connections.shp` - Customer connections con Demand_GPM attribute
- `treatment_plant.shp` - Source

### Instrucciones

1. **Create Network Topology:**
   - Name: `Water_Distribution_Network`
   - Edges: `water_mains`
   - Junctions: `valves`
   - Source: `treatment_plant`
   - Flow Direction: Attribute-based (`FlowDirection`)

2. **Validate:**
   - Ensure network es continuo
   - Fix cualquier isolated segment

3. **Simulate Valve Closure:**
   - Identify Valve #345 en map
   - Downstream Trace:
     - Start: Treatment plant
     - Barrier: Valve #345 (simula cierre)

4. **Identify Affected Area:**
   - Features downstream from Valve #345 = affected
   - Highlight en map

5. **Identify Affected Customers:**
   - Spatial Query: Select `service_connections` that intersect affected water mains
   - Count: Number of connections
   - Sum: Total Demand_GPM

6. **Emergency Plan:**
   - Create report:
     - Affected area (map)
     - Number of customers
     - Total demand (GPM)
     - Recommended water tanker locations (near high-density areas)

### Entregables
- Drawing con trace results
- Emergency Response Plan (1-page document)
- Statistics: # customers, total GPM
- Screenshot de downstream trace

**Tiempo:** 45 minutos

---

## Resumen de Ejercicios

Has completado **6 ejercicios integradores** cubriendo:

1. ✅ **Object Data** - Attribute management, ODETABLE, export
2. ✅ **Database connectivity** - PostgreSQL/PostGIS, FDO, edit en database
3. ✅ **Buffer analysis** - Multi-ring buffers, overlay con parcelas
4. ✅ **Overlay analysis** - Intersect, conflict detection, safety zones
5. ✅ **Topology** - Create, validate, fix errors
6. ✅ **Network analysis** - Trace, valve isolation, impact analysis

**Tiempo total:** ~3.5 horas de práctica hands-on

**Habilidades dominadas:**
- Análisis espacial profesional (buffers, overlays, proximity)
- Gestión de atributos corporativos
- Validación de data quality con topology
- Network analysis para utilities
- Workflows integrados GIS/CAD

---

**DISTMAH ATC - Authorized Training Center**

**Próximo:** [Módulo 3 - Workflows Profesionales GIS/CAD](../modulo-3-workflows-gis-cad/README.md)

En el Módulo 3 aplicarás estas habilidades a workflows de integración con ArcGIS, Civil 3D, y sistemas empresariales.
