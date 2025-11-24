# Lección 3: Spatial Queries (Buffers, Overlays, Proximity)

## Objetivos de Aprendizaje

- ✅ Crear buffer analysis (fixed y variable distance)
- ✅ Realizar overlay analysis (intersect, union, difference, clip)
- ✅ Ejecutar proximity analysis (nearest neighbor, within distance)
- ✅ Usar Query Builder interface
- ✅ Guardar y reutilizar queries

## Introducción

**Spatial Queries** responden preguntas geoespaciales como:
- ¿Qué parcelas están dentro de 100 metros de una zona de inundación?
- ¿Qué tuberías de agua intersectan con la nueva carretera propuesta?
- ¿Cuál es el hidrante más cercano a cada edificio?
- ¿Qué áreas están dentro de 5 minutos de una estación de bomberos?

Estas son herramientas esenciales de análisis GIS integradas en Map 3D.

## 1. Buffer Analysis

### 1.1 ¿Qué es un Buffer?

**Buffer:** Zona de influencia a distancia específica alrededor de features (punto, línea, polígono).

**Aplicaciones:**
- **Setbacks regulatorios:** 50 ft buffer desde línea de propiedad
- **Zonas de protección:** 300 m buffer alrededor de pozos de agua
- **Análisis de impacto:** 1 km buffer de nueva carretera
- **Emergency response:** 5 min drive-time buffer de estación de bomberos

### 1.2 Fixed Distance Buffer

**Todos los features reciben mismo buffer distance.**

**Procedimiento:**

1. **Task Pane > Analysis tab**
2. **Create Buffer**
3. **Source Data:**
   - Select feature class (ej: `fire_stations`)
   - O select objects en drawing
4. **Buffer Distance:** `500` (meters o feet, según drawing units)
5. **Output:**
   - New feature class
   - O new layer en drawing
6. **Execute**

**Resultado:** Polígonos circulares de 500m alrededor de cada fire station.

![Buffer Analysis](../imagenes/leccion-3-buffer.png)

### 1.3 Variable Distance Buffer

**Cada feature tiene buffer distance diferente** basado en atributo.

**Ejemplo:** Tuberías con buffer = su diámetro × 10 (mayor diámetro = mayor setback).

**Procedimiento:**

1. **Create Buffer**
2. **Buffer Distance:** Selecciona **Attribute**
3. **Attribute Field:** `Diameter`
4. **Multiplier:** `10` (opcional, multiplica valor del atributo)
5. **Execute**

**Resultado:** Buffers de tamaños variados según el diámetro de cada tubería.

### 1.4 Buffer Options

**Dissolve boundaries:**
- ☐ Buffers individuales (pueden overlapearse)
- ✅ **Dissolve:** Merge overlapping buffers en polígono único

**Side (para líneas):**
- **Both sides** (default)
- **Left side only**
- **Right side only**

**Segments (smoothness):**
- Más segments = buffer más suave (circular perfecto)
- Menos segments = buffer angular (más rápido)

## 2. Overlay Analysis

### 2.1 Tipos de Overlay

**Overlay:** Combina features de 2 feature classes basado en relaciones espaciales.

**Tipos:**

| Overlay Type | Descripción | Output | Uso Típico |
|--------------|-------------|--------|------------|
| **Intersect** | Solo áreas donde ambos features se solapan | Polígonos de intersección | Parcelas en zona de inundación |
| **Union** | Todas las áreas de ambos datasets | Polígonos combinados | Merge zonas de planeación |
| **Difference** | Features del layer A que NO están en layer B | Polígonos de A sin B | Parcelas fuera de zona protegida |
| **Clip** | Features de A cortados por boundary de B | Features clipped | Infraestructura dentro de city limits |

### 2.2 Intersect

**Encuentra features que se solapan.**

**Escenario:** ¿Qué parcelas están dentro de zona de inundación 100-year floodplain?

**Procedimiento:**

1. **Task Pane > Analysis**
2. **Overlay Analysis** > **Intersect**
3. **Input Layer A:** `parcels`
4. **Input Layer B:** `floodplain_100yr`
5. **Output:** New feature class `parcels_in_floodplain`
6. **Attributes:** Combine attributes de A y B (opcional)
7. **Execute**

**Resultado:** Solo parcelas (o partes de parcelas) que intersectan floodplain.

### 2.3 Union

**Combina todos los features de ambos layers.**

**Escenario:** Merge zonas de zonificación de 2 municipalidades adyacentes.

**Procedimiento:**

1. **Overlay** > **Union**
2. **Layer A:** `city_A_zoning`
3. **Layer B:** `city_B_zoning`
4. **Output:** `combined_zoning`
5. **Execute**

**Resultado:** Feature class con todas las zonas de ambos cities, boundary dissolved donde se juntan.

### 2.4 Difference

**Features de A que NO están en B.**

**Escenario:** Parcelas disponibles para desarrollo (todas las parcelas MINUS parques protegidos).

**Procedimiento:**

1. **Overlay** > **Difference**
2. **Layer A:** `all_parcels`
3. **Layer B:** `protected_parks`
4. **Output:** `developable_parcels`
5. **Execute**

**Resultado:** Parcelas excluye áreas de parques.

### 2.5 Clip

**Corta features de A usando boundary de B como "cookie cutter".**

**Escenario:** Infraestructura de water/sewer solo dentro de city limits.

**Procedimiento:**

1. **Overlay** > **Clip**
2. **Features to Clip:** `water_lines`
3. **Clip Boundary:** `city_boundary`
4. **Output:** `water_lines_city`
5. **Execute**

**Resultado:** Solo partes de water lines dentro del city boundary polygon.

## 3. Proximity Analysis

### 3.1 Within Distance

**Selecciona features dentro de distancia específica de otros features.**

**Escenario:** Edificios dentro de 200 metros de una estación de metro.

**Procedimiento:**

1. **Task Pane > Analysis**
2. **Spatial Query**
3. **Query Type:** **Within Distance**
4. **Source Features:** `buildings`
5. **Target Features:** `metro_stations`
6. **Distance:** `200` (meters)
7. **Output:** Select objects o new feature class
8. **Execute**

**Resultado:** Edificios seleccionados (o nuevo layer) con solo buildings ≤ 200m de metro.

### 3.2 Nearest Neighbor

**Encuentra el feature más cercano para cada feature.**

**Escenario:** Asignar cada edificio al hidrante más cercano.

**Procedimiento:**

1. **Spatial Query** > **Nearest**
2. **Source:** `buildings`
3. **Target:** `fire_hydrants`
4. **Options:**
   - **Find closest feature** (1 nearest)
   - **Find N closest features** (ej: 3 nearest)
5. **Output:** Attribute table con ID del hydrant más cercano
6. **Execute**

**Resultado:** Cada building tiene atributo indicando su nearest hydrant ID + distancia.

### 3.3 Calculate Distance Matrix

**Distancia de todos los features a todos los otros features.**

**Uso:** Routing, optimization, network analysis.

**Nota:** Para datasets grandes (1000+ features) esto genera millones de combinaciones. Use con precaución.

## 4. Query Builder

### 4.1 Crear Query Compleja

**Query Builder** permite combinar:
- **Attribute queries:** SQL WHERE clauses
- **Spatial queries:** Spatial operators

**Ejemplo:** Parcelas que:
1. Tienen Zoning = "Commercial" (attribute query)
2. Y están dentro de 500m de highway (spatial query)

**Procedimiento:**

1. **Task Pane > Analysis** > **Query**
2. **Define Query:**

   **Attribute Filter:**
   - Layer: `parcels`
   - WHERE: `Zoning = 'Commercial'`

   **Spatial Filter:**
   - Spatial Operator: **Within Distance**
   - Target: `highways`
   - Distance: `500`

3. **Execute Query**

**Resultado:** Selecciona solo parcels comerciales cerca de highways.

### 4.2 Guardar Query

**Queries complejas se pueden guardar para reutilizar:**

1. Después de definir query, click **Save Query**
2. Name: `Commercial_Near_Highway`
3. Query se guarda en proyecto

**Reutilizar:**
1. **Map Explorer** > **Queries**
2. Double-click en `Commercial_Near_Highway`
3. Re-ejecuta instantáneamente

### 4.3 Export Query Results

**Query results pueden exportarse:**

1. Ejecuta query (features seleccionados)
2. **MAPEXPORT**
3. Selection: **Use Current Selection**
4. Export a SHP, KML, etc.

**Uso:** Entregar subset de datos al cliente.

## 5. Casos de Uso Profesionales

### 5.1 Análisis de Impacto Ambiental

**Pregunta:** ¿Qué parcelas residenciales están dentro de 1 km de planta de tratamiento de aguas residuales propuesta?

**Query:**
1. **Buffer** de 1 km alrededor de ubicación propuesta
2. **Intersect** buffer con `parcels`
3. **Attribute query:** Zoning = 'Residential'

**Output:** Lista de parcelas afectadas (para notificación pública).

### 5.2 Emergency Response Planning

**Pregunta:** ¿Qué áreas están a más de 5 km de una estación de bomberos (understaffed)?

**Query:**
1. **Buffer** de 5 km alrededor de cada `fire_station`
2. **Union** todos los buffers
3. **Difference:** `city_boundary` MINUS union_buffers

**Output:** Áreas sin cobertura adecuada → Necesitan nueva estación.

### 5.3 Utility Conflict Detection

**Pregunta:** ¿Propuesta de tubería de gas intersecta con líneas eléctricas existentes?

**Query:**
1. **Intersect:** `proposed_gas_line` con `existing_electric_lines`
2. **Buffer:** 3m alrededor de cada intersección (safety zone)

**Output:** Ubicaciones de conflictos → Requieren diseño alternativo o protección especial.

## Ejercicio Práctico

### Ejercicio 3.1: Buffer y Overlay Analysis

**Objetivo:** Identificar parcelas en zona de riesgo de inundación y calcular área afectada.

**Datos:**
- `river.shp` - Río principal (LineString)
- `parcels.shp` - Parcelas catastrales (Polygons)

**Instrucciones:**

1. **Buffer del río:**
   - Create Buffer
   - Source: `river`
   - Distance: `100` (meters, representa zona de inundación)
   - Output: `floodzone_100m`

2. **Intersect parcelas con floodzone:**
   - Overlay > Intersect
   - Layer A: `parcels`
   - Layer B: `floodzone_100m`
   - Output: `parcels_at_risk`

3. **Calculate área afectada:**
   - Select features en `parcels_at_risk`
   - Command: `LIST` o use Properties
   - Sum total area (o export y analiza en Excel)

4. **Thematic map:**
   - Display Manager > `parcels_at_risk`
   - Edit Style > Color: Red
   - Transparency: 50%
   - Visualiza parcelas en riesgo superpuestas sobre todas las parcels

**Entregable:**
- Drawing con visualización
- Tabla: Total de parcelas en riesgo + área total afectada

**Tiempo:** 25 minutos

## Evaluación

1. **¿Qué tipo de buffer usarías si cada tubería debe tener buffer = su diámetro?**
   - a) Fixed Distance
   - b) Variable Distance (attribute-based)
   - c) Dissolved
   - d) Multi-ring

2. **¿Qué overlay type muestra solo áreas donde A y B se solapan?**
   - a) Union
   - b) Difference
   - c) Intersect
   - d) Clip

3. **¿Qué spatial query encuentra el fire hydrant más cercano a cada building?**
   - a) Within Distance
   - b) Intersect
   - c) Nearest Neighbor
   - d) Buffer

4. **Queries guardadas se encuentran en:**
   - a) Data Sources
   - b) Display Manager
   - c) Map Explorer > Queries
   - d) Layer Properties

5. **Para encontrar parcelas FUERA de floodplain, usarías:**
   - a) Intersect
   - b) Union
   - c) Difference (parcels MINUS floodplain)
   - d) Clip

**Respuestas:** 1-b, 2-c, 3-c, 4-c, 5-c

## Recursos Adicionales

- [Spatial Analysis in Map 3D](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-spatial-analysis)
- [Buffer Analysis Best Practices](https://pro.arcgis.com/en/pro-app/latest/tool-reference/analysis/buffer.htm) - ESRI (conceptos aplican a Map 3D)

## Resumen

- ✅ **Buffers** crean zonas de influencia (fixed o variable distance)
- ✅ **Overlays:** Intersect, Union, Difference, Clip
- ✅ **Proximity:** Within Distance, Nearest Neighbor
- ✅ **Query Builder** combina attribute + spatial queries
- ✅ **Guardar queries** para reutilización
- ✅ **Casos de uso:** Impacto ambiental, emergency planning, conflict detection

**Siguiente:** [Lección 4 - Topology y Relaciones Espaciales](leccion-4.md)
