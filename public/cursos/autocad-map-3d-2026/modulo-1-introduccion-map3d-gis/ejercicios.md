# Ejercicios Prácticos - Módulo 1

## Introducción

Este documento contiene **6 ejercicios integradores** que consolidan todos los conocimientos del Módulo 1. Cada ejercicio simula escenarios profesionales reales que enfrentarás en proyectos de ingeniería civil, topografía y planificación urbana.

**Objetivo:** Aplicar las habilidades de configuración de proyectos GIS/CAD, manejo de coordinate systems, conexión a datos FDO, import/export, y visualización avanzada.

**Tiempo estimado total:** 3-4 horas

---

## Ejercicio 1: Configuración de Proyecto GIS/CAD para Levantamiento Topográfico

### Escenario Profesional

Eres ingeniero topógrafo contratado para un levantamiento de 500 hectáreas para una subdivisión residencial en **Travis County, Texas**. Recibirás datos de múltiples fuentes:
- GPS RTK (WGS84)
- Catastro del condado (State Plane Texas South Central)
- Topografía histórica (coordenadas locales)
- Imágenes aéreas (WGS84)

Necesitas configurar un proyecto Map 3D estandarizado con el coordinate system apropiado.

### Objetivos de Aprendizaje

- Seleccionar coordinate system apropiado según ubicación y regulaciones
- Configurar drawing settings correctamente
- Organizar Display Manager para múltiples fuentes de datos
- Documentar decisiones técnicas

### Datos Necesarios

- Ubicación aproximada: 30.2672° N, 97.7431° W (Austin, Texas)
- Extensión del proyecto: 500 hectáreas (aprox. 2.24 km x 2.24 km)

### Instrucciones Detalladas

#### Parte A: Análisis y Selección de Coordinate System (15 min)

1. **Investigar opciones de CS:**
   - Opción 1: State Plane Texas South Central (requerido por Travis County)
   - Opción 2: UTM Zone 14N (estándar regional)
   - Opción 3: WGS84 Geographic (datos GPS nativos)

2. **Decisión justificada:**
   - Documenta en un archivo de texto tu selección
   - Incluye:
     - CS seleccionado (nombre y código EPSG)
     - Units (feet vs meters)
     - Razones de la selección (regulaciones, extensión, precisión)

3. **Respuesta esperada:**
   - **CS recomendado:** NAD83 / Texas South Central (ftUS) - EPSG:2277
   - **Razones:**
     - Requerido por Travis County para entregas catastrales
     - Máxima precisión local (distorsión < 1:10,000)
     - Units en US Survey Feet (estándar en Texas)
     - Compatibilidad con datos del condado

#### Parte B: Configuración de Drawing (20 min)

1. **Crear nuevo drawing:**
   - Template: `Map3D.dwt`
   - Nombre: `TravisCounty_Subdivision_Master.dwg`

2. **Asignar coordinate system:**
   - MAP 3D > Geolocation > Assign Coordinate System
   - Search por código: `2277`
   - Selecciona: **NAD83 / Texas South Central (ftUS)**
   - Assign

3. **Configurar Drawing Units:**
   - Comando: `UNITS`
   - Type: Decimal
   - Precision: 0.01 (centésimos de pie)
   - Insertion scale: US Survey Feet

4. **Verificar:**
   - Display Manager > Drawing Settings
   - Debe mostrar: "NAD83 / Texas South Central (ftUS)"
   - Screenshot para entregable

#### Parte C: Organización de Display Manager (15 min)

1. **Crear Drawing Layers para diseño:**
   - `00_Reference` (datos de referencia, no editar)
   - `10_Existing_Topo` (topografía existente)
   - `20_Survey_Points` (puntos de levantamiento)
   - `30_Proposed_Design` (diseño propuesto)
   - `90_Annotations` (anotaciones y labels)

2. **Configurar propiedades de layers:**
   - `00_Reference`: Color 8 (gris), linetype Continuous
   - `10_Existing_Topo`: Color 3 (verde), linetype Continuous
   - `20_Survey_Points`: Color 1 (rojo), linetype Continuous
   - `30_Proposed_Design`: Color 5 (azul), linetype Continuous
   - `90_Annotations`: Color 7 (blanco/negro), linetype Continuous

3. **Configurar Layer Standards:**
   - Comando: `LAYER`
   - Configure según tabla anterior
   - Set `30_Proposed_Design` como current layer

#### Parte D: Documentación del Proyecto (10 min)

1. **Crear Text Note en drawing:**
   - Layer: `90_Annotations`
   - Ubicación: Esquina inferior derecha
   - Contenido:
     ```
     PROJECT: Travis County Subdivision Survey
     COORDINATE SYSTEM: NAD83 / Texas South Central (ftUS)
     EPSG CODE: 2277
     DATUM: NAD83
     UNITS: US Survey Feet
     SURVEYOR: [Tu Nombre]
     DATE: [Fecha Actual]
     ```

2. **Guardar drawing**

### Entregables

1. `TravisCounty_Subdivision_Master.dwg` configurado
2. Documento de texto con justificación de selección de CS
3. Screenshot de Display Manager mostrando:
   - Drawing Coordinate System asignado
   - Layers organizados
4. Screenshot del text note con metadatos del proyecto

### Criterios de Evaluación

- ✅ Coordinate system correcto asignado (EPSG:2277)
- ✅ Drawing units configuradas apropiadamente
- ✅ Layers organizados con nomenclatura profesional
- ✅ Documentación completa y precisa
- ✅ Justificación técnica de selección de CS

---

## Ejercicio 2: Importación de Datos GIS Municipales y Asignación de Coordinate System

### Escenario Profesional

El **City of Austin GIS Department** te proporcionó Shapefiles de infraestructura existente para tu proyecto de subdivisión:
- `water_lines.shp` - Red de agua potable
- `sewer_lines.shp` - Red de alcantarillado
- `parcels.shp` - Parcelas catastrales
- `zoning.shp` - Zonificación

Algunos archivos tienen .prj correctos, otros NO. Debes identificar el CS correcto, importar los datos, y verificar alineación.

### Objetivos de Aprendizaje

- Identificar coordinate system de Shapefiles (con y sin .prj)
- Usar MAPIMPORT correctamente
- Preservar Object Data durante import
- Diagnosticar y corregir problemas de georreferenciación

### Datos Necesarios

**Descargar datos de práctica:**
- Opción 1: [City of Austin Open Data Portal](https://data.austintexas.gov/)
  - Busca: "Water Lines", "Parcels", "Zoning"
  - Download como Shapefile

- Opción 2: Usar datos de práctica proporcionados por instructor

### Instrucciones Detalladas

#### Parte A: Análisis de Shapefiles (20 min)

1. **Verificar archivos .prj:**
   - Navega a la carpeta de Shapefiles
   - Para cada .shp, verifica si existe .prj correspondiente
   - Abre .prj en Notepad

2. **Identificar CS de cada Shapefile:**
   - Crea tabla en Excel/Word:

   | Shapefile | .prj Exists? | Coordinate System | EPSG Code | Units |
   |-----------|--------------|-------------------|-----------|-------|
   | water_lines.shp | ✅ | NAD83 Texas South Central | 2277 | Feet |
   | sewer_lines.shp | ❌ | ??? | ??? | ??? |
   | parcels.shp | ✅ | ... | ... | ... |
   | zoning.shp | ✅ | ... | ... | ... |

3. **Para Shapefiles sin .prj:**
   - Contactar fuente de datos (City GIS department)
   - O usar coordinadas de sample feature para identificar
   - O test import con diferentes CS conocidos

#### Parte B: Import con MAPIMPORT (30 min)

1. **Abrir drawing del Ejercicio 1:**
   - `TravisCounty_Subdivision_Master.dwg`
   - Verificar CS: EPSG:2277

2. **Import water_lines.shp:**
   - Comando: `MAPIMPORT`
   - Browse: `water_lines.shp`
   - Import Options:
     - Drawing: Current
     - Layer: `00_Reference_Water` (crear nuevo)
     - Coordinate System: Debe detectar EPSG:2277 automáticamente
     - ✅ **Import Object Data** (CRÍTICO)
   - Click OK

3. **Verificar import exitoso:**
   - Comando: `ZOOM EXTENTS` (Z E)
   - Debes ver líneas de tuberías
   - Selecciona una línea
   - Comando: `ODETABLE`
   - Verifica que atributos aparecen (Diameter, Material, InstallYear, etc.)

4. **Repetir para otros Shapefiles:**
   - `sewer_lines.shp` → Layer: `00_Reference_Sewer`
   - `parcels.shp` → Layer: `00_Reference_Parcels`
   - `zoning.shp` → Layer: `00_Reference_Zoning`

5. **Si un Shapefile no tiene .prj:**
   - En MAPIMPORT, debes asignar CS manualmente:
     - Coordinate System: **Assign manually**
     - Browse: EPSG:2277 (asumiendo es consistente con otros datos de Austin)
   - Import y verificar alineación con otros datasets

#### Parte C: Verificación de Alineación (15 min)

1. **Visual check:**
   - Todas las layers deben estar visibles
   - Water lines deben alinearse con parcels boundaries
   - Sewer lines deben alinearse con streets (si tienes street data)

2. **Si hay desalineación:**
   - Problema posible: CS incorrecto en import
   - Solución: Delete imported objects, re-import con CS correcto

3. **Verificar Object Data:**
   - Selecciona feature de cada layer
   - `ODETABLE` para verificar atributos
   - Anota qué atributos tiene cada feature class:
     - Water lines: `Diameter`, `Material`, `Pressure`
     - Parcels: `ParcelID`, `Owner`, `Area`, `Zoning`

#### Parte D: Configurar Estilos (20 min)

1. **Water lines - Color por Material:**
   - Layer Properties: Color = ByLayer
   - En Display Manager (si quieres usar FDO más adelante):
     - Este ejercicio usa imported data, así que estilos se controlan por layer
   - Configurar layer color:
     - `00_Reference_Water`: Color Cyan (4)

2. **Sewer lines:**
   - Layer: Color Magenta (6)

3. **Parcels:**
   - Layer: Color Yellow (2)
   - Linetype: Continuous
   - Configurar como polígono con fill:
     - Select parcels
     - Properties > General > Fill color: Yellow
     - Transparency: 60%

4. **Zoning:**
   - Usar Hatch patterns para diferentes zonas (opcional avanzado)

### Entregables

1. `TravisCounty_Subdivision_Master.dwg` con 4 Shapefiles importados
2. Tabla de análisis de Shapefiles (Excel/Word)
3. Screenshot de drawing mostrando los 4 datasets alineados
4. Screenshot de ODETABLE mostrando atributos de water_lines

### Criterios de Evaluación

- ✅ Identificación correcta de CS de cada Shapefile
- ✅ Import exitoso con Object Data preservado
- ✅ Alineación correcta de todos los datasets
- ✅ Layers organizados profesionalmente
- ✅ Estilos visuales apropiados

---

## Ejercicio 3: Conexión FDO a Geodatabase de Infraestructura

### Escenario Profesional

La **Travis County Utilities Department** mantiene una geodatabase PostgreSQL/PostGIS con infraestructura actualizada en tiempo real. Te proporcionaron credenciales de acceso read-only para conectar directamente a la base de datos en lugar de usar Shapefiles estáticos.

**Ventaja:** Datos siempre actualizados sin re-import manual.

### Objetivos de Aprendizaje

- Conectar a base de datos PostgreSQL/PostGIS vía FDO
- Explorar schemas y feature classes en database
- Agregar feature classes a Display Manager
- Configurar estilos temáticos para datos FDO

### Prerequisitos

**Opción A (Ideal):** Acceso a servidor PostgreSQL real con PostGIS
- Instructor proporcionará credenciales de servidor de práctica

**Opción B (Simulación):** Convertir Shapefiles a SDF (Autodesk Spatial Data File)
- Usaremos SDF como proxy para simular database
- SDF soporta todas las capacidades FDO

### Instrucciones Detalladas

#### Opción A: PostgreSQL/PostGIS (Si Disponible)

**Parte A: Conexión a Base de Datos (15 min)**

1. **Data Connect:**
   - Ribbon: MAP 3D > Data > Data Connect
   - Provider: **PostgreSQL**

2. **Connection Parameters:**
   - **Service:** `instructor-server.database.com:5432`
   - **Username:** `student_readonly`
   - **Password:** `[proporcionado por instructor]`
   - **Database:** `travis_county_utilities`
   - Click **Test Connection**
   - Debe mostrar: "Connection successful"
   - Click OK

3. **Nombrar conexión:**
   - Name: `TravisCounty_Utilities_DB`
   - Click **Connect**

4. **Verificar en Data Sources:**
   - Task Pane > Data Sources
   - Debe aparecer: `TravisCounty_Utilities_DB`
   - Expande (+)
   - Debe mostrar schemas: `public`, `infrastructure`, `cadastre`

**Parte B: Explorar Feature Classes (15 min)**

1. **Browse schemas:**
   - Expande schema `infrastructure`
   - Debe mostrar feature classes:
     - `water_mains`
     - `sewer_mains`
     - `storm_drains`
     - `valves`
     - `manholes`

2. **Ver schema de feature class:**
   - Right-click en `water_mains` > **Schema**
   - Anota:
     - Geometry type: LineString
     - Geometry column: `geom`
     - Attribute columns: `id`, `diameter`, `material`, `install_date`, `pressure_zone`

3. **Data Preview:**
   - Right-click en `water_mains` > **Data Preview**
   - Examina primeras 20 filas
   - Verifica que hay datos reales

**Parte C: Agregar a Display y Configurar Estilos (30 min)**

1. **Add to Display:**
   - Right-click en `water_mains` > **Add to Display**
   - Repite para: `sewer_mains`, `valves`, `manholes`

2. **Reordenar en Display Manager:**
   - Drag & drop para orden correcto:
     1. `manholes` (puntos, arriba)
     2. `valves` (puntos)
     3. `water_mains` (líneas)
     4. `sewer_mains` (líneas, abajo)

3. **Estilo temático - water_mains por diameter:**
   - Display Manager > Expande `water_mains`
   - Right-click en style rule > **Edit Style**
   - Style Type: **Ranged Theme**
   - Theme Field: `diameter`
   - Number of ranges: 4
   - Method: Natural Breaks (Jenks)
   - Click **Generate Styles**
   - Personalizar colores:
     - Range 1 (menor): Azul claro, Lineweight 0.25mm
     - Range 2: Azul, Lineweight 0.50mm
     - Range 3: Azul oscuro, Lineweight 0.75mm
     - Range 4 (mayor): Azul muy oscuro, Lineweight 1.00mm
   - Click OK

4. **Estilo temático - valves por tipo:**
   - Edit Style de `valves`
   - Style Type: **Individual Values**
   - Theme Field: `type`
   - Generate Styles
   - Resultado: Different colors para "Gate Valve", "Check Valve", "Pressure Reducing", etc.

5. **Scale Ranges:**
   - Right-click en `manholes` > **Scale Ranges**
   - Enable: ✅
   - Minimum scale: `1:5000` (solo visible zoomed in)
   - Click OK

#### Opción B: Simulación con SDF (Si No Hay PostgreSQL)

**Conversión de Shapefiles a SDF:**

1. **Data Connect a Shapefile:**
   - Connect a `water_lines.shp` (del Ejercicio 2)

2. **Bulk Copy a SDF:**
   - Right-click en feature class > **Bulk Copy**
   - Destination Type: **SDF**
   - File path: `C:\GIS_Data\infrastructure.sdf`
   - Destination CS: EPSG:2277
   - Execute

3. **Desconectar SHP, Conectar SDF:**
   - Remove conexión al Shapefile
   - Data Connect:
     - Provider: **SDF**
     - File: `C:\GIS_Data\infrastructure.sdf`
     - Name: `Infrastructure_SDF`
     - Connect

4. **Continuar con Parte C** (Add to Display, estilos, etc.)

### Entregables

1. `TravisCounty_Subdivision_Master.dwg` con conexiones FDO activas
2. Screenshot de Data Sources mostrando conexión y feature classes
3. Screenshot de Display Manager con estilos temáticos aplicados
4. Screenshot del drawing mostrando visualización con estilos

### Criterios de Evaluación

- ✅ Conexión FDO exitosa (PostgreSQL o SDF)
- ✅ Feature classes agregadas a Display correctamente
- ✅ Estilos temáticos aplicados (Ranged para diameter, Individual Values para types)
- ✅ Draw order correcto (puntos arriba, líneas abajo)
- ✅ Scale ranges configurados para features de detalle

---

## Ejercicio 4: Transformación de Coordenadas entre WGS84 y UTM para Proyecto Regional

### Escenario Profesional

Estás trabajando en un proyecto regional de **corredor de transmisión eléctrica** que cruza 3 condados en Texas (300 km de longitud). Recibes:
- **Ruta propuesta** del corredor en WGS84 lat/lon (de estudio ambiental)
- **Torres existentes** en UTM Zone 14N (de compañía eléctrica)
- **Parcelas afectadas** en State Plane Texas South Central (de condados)

Debes integrar todos los datos en un CS común para análisis.

### Objetivos de Aprendizaje

- Decidir CS apropiado para proyecto multi-condado
- Realizar Bulk Copy con transformación de CS
- Verificar precisión de transformaciones
- Trabajar con datasets en múltiples CS simultáneamente

### Datos Necesarios

**Simulación de datos:**
- Crea 3 Shapefiles de prueba en diferentes CS:
  1. `route_wgs84.shp` - LineString en EPSG:4326
  2. `towers_utm14n.shp` - Points en EPSG:32614
  3. `parcels_stateplane.shp` - Polygons en EPSG:2277

O usa datos de práctica proporcionados.

### Instrucciones Detalladas

#### Parte A: Análisis y Selección de CS del Proyecto (15 min)

1. **Evaluar opciones:**

   **Opción 1: State Plane Texas South Central (EPSG:2277)**
   - Pro: Precisión máxima local, estándar condados
   - Con: Proyecto cruza múltiples State Plane zones (distorsión en extremos)

   **Opción 2: UTM Zone 14N (EPSG:32614)**
   - Pro: Cubre todo Texas, estándar internacional, unidades métricas
   - Con: No es el estándar de condados locales

   **Opción 3: WGS84 Geographic (EPSG:4326)**
   - Pro: Sin proyección, sin distorsión
   - Con: Unidades en grados (difícil para mediciones)

2. **Decisión recomendada:**
   - **UTM Zone 14N (EPSG:32614)**
   - Razones:
     - Proyecto regional (300 km) excede recomendación de State Plane
     - Unidades métricas preferidas para proyectos internacionales (transmisión eléctrica)
     - Distorsión < 0.1% en todo Texas
     - Datos de torres ya están en UTM 14N (minimiza conversiones)

3. **Documentar en archivo de texto**

#### Parte B: Configurar Proyecto y Conectar Datos (20 min)

1. **Nuevo drawing:**
   - CS: **UTM Zone 14N WGS84 (EPSG:32614)**
   - Nombre: `TransmissionCorridor_UTM14N.dwg`

2. **Data Connect a los 3 Shapefiles:**
   - `route_wgs84.shp` (EPSG:4326)
   - `towers_utm14n.shp` (EPSG:32614)
   - `parcels_stateplane.shp` (EPSG:2277)

3. **Add to Display:**
   - Add las 3 feature classes al Display Manager

4. **Verificar transformación on-the-fly:**
   - Drawing CS = UTM 14N (EPSG:32614)
   - `route_wgs84` (WGS84) debe transformarse automáticamente
   - `parcels_stateplane` (State Plane) debe transformarse automáticamente
   - `towers_utm14n` (UTM 14N) NO requiere transformación
   - Verificar que todos se visualizan alineados

#### Parte C: Bulk Copy - Reproyección Permanente (30 min)

1. **Reproyectar route_wgs84 a UTM 14N:**
   - Right-click en `route_wgs84` > **Bulk Copy**
   - Destination Type: **Shapefile (SHP)**
   - Destination CS: **EPSG:32614** (UTM 14N)
   - File path: `C:\Export\route_utm14n.shp`
   - Execute

2. **Reproyectar parcels_stateplane a UTM 14N:**
   - Bulk Copy `parcels_stateplane`
   - Destination: SHP
   - Destination CS: EPSG:32614
   - File: `C:\Export\parcels_utm14n.shp`
   - Execute

3. **Verificar archivos creados:**
   - Navega a `C:\Export\`
   - Verifica que existen:
     - `route_utm14n.shp` (+ .shx, .dbf, .prj)
     - `parcels_utm14n.shp` (+ .shx, .dbf, .prj)

4. **Validar .prj files:**
   - Abre `route_utm14n.prj` en Notepad
   - Debe contener definición de UTM Zone 14N (busca "UTM_Zone_14N" o "32614")
   - Repite para `parcels_utm14n.prj`

#### Parte D: Validación de Transformación (25 min)

**Método 1: Verificación Visual en QGIS**

1. Abre QGIS (software GIS gratuito)
2. Add Layer > `route_utm14n.shp`
3. Bottom-right corner muestra CS del proyecto
4. Debe detectar: **EPSG:32614**
5. Add Layer > `parcels_utm14n.shp`
6. Verificar alineación visual
7. Screenshot para entregable

**Método 2: Verificación con Google Earth**

1. En Map 3D, MAPEXPORT:
   - Select `route_utm14n` (desde el Shapefile ya transformado)
   - Export to: **KMZ**
   - File: `route_utm14n.kmz`
   - Export

2. Abre `route_utm14n.kmz` en Google Earth
3. Verifica que la ruta aparece en **Texas** (NO en el océano o polo)
4. Zoom in, verifica que alineación con imagery de Google es correcta
5. Screenshot para entregable

**Método 3: Verificación con Puntos de Control**

1. Identifica punto conocido (ej: una torre específica)
2. En Map 3D, comando `ID` sobre el punto en `towers_utm14n`
3. Anota coordenadas UTM: X (Easting), Y (Northing)
4. Usa convertidor online ([EPSG.io Transform](https://epsg.io/transform)):
   - Input: UTM coordinates
   - Output: Lat/Lon
5. Verifica en Google Earth que esas coordenadas corresponden a la ubicación correcta

### Entregables

1. `TransmissionCorridor_UTM14N.dwg` con 3 datasets conectados
2. Shapefiles transformados:
   - `route_utm14n.shp`
   - `parcels_utm14n.shp`
3. Documento de justificación de selección de UTM Zone 14N
4. Screenshots:
   - QGIS mostrando datos transformados
   - Google Earth mostrando route.kmz en ubicación correcta
   - Map 3D con los 3 datasets alineados

### Criterios de Evaluación

- ✅ Decisión justificada de CS del proyecto
- ✅ Bulk Copy ejecutado correctamente
- ✅ Archivos .prj de outputs son correctos
- ✅ Validación en QGIS y Google Earth exitosa
- ✅ Documentación técnica completa

---

## Ejercicio 5: Exportación de Diseño CAD a KML para Visualización en Google Earth

### Escenario Profesional

Completaste el diseño de la subdivisión residencial (Ejercicio 1-2). Ahora debes presentar el diseño al **City Council** para aprobación. El consejo no tiene conocimientos técnicos CAD/GIS, pero todos usan Google Earth.

**Tarea:** Exportar el diseño a KML para presentación visual impactante en Google Earth.

### Objetivos de Aprendizaje

- Preparar datos CAD para export a KML
- Configurar opciones de export (colors, extrusion, styles)
- Optimizar KML para presentaciones no técnicas
- Validar que KML aparece correctamente en Google Earth

### Datos Necesarios

- `TravisCounty_Subdivision_Master.dwg` (de ejercicios anteriores)
- Diseño propuesto de lotes (si no lo has creado, dibuja polígonos de muestra representando lotes)

### Instrucciones Detalladas

#### Parte A: Preparar Diseño para Export (20 min)

1. **Abrir drawing:**
   - `TravisCounty_Subdivision_Master.dwg`

2. **Crear layer para export:**
   - Nuevo layer: `40_Design_For_Export`
   - Color: Red (para destacar en Google Earth)

3. **Dibujar o copiar diseño propuesto:**
   - Opción 1: Si ya tienes lotes diseñados, cópialos a `40_Design_For_Export`
   - Opción 2: Dibuja polígonos de muestra:
     - Comando: `RECTANGLE` o `PLINE`
     - Crea 10-15 lotes rectangulares
     - Dimensiones típicas: 50 ft x 100 ft (15m x 30m)
     - Organiza en grid de subdivisión

4. **Agregar calles propuestas:**
   - Layer: `41_Proposed_Streets`
   - Comando: `PLINE`
   - Dibuja calles entre lotes (ancho típico: 30 ft = 9m)

5. **Verificar que drawing tiene CS asignado:**
   - Display Manager > Drawing CS debe ser EPSG:2277
   - Si no, asigna ahora

#### Parte B: Export a KML (20 min)

1. **Seleccionar objetos para export:**
   - Comando: `SELECT`
   - Select all polígonos de lotes (layer `40_Design_For_Export`)
   - Select calles (layer `41_Proposed_Streets`)
   - Comando: ` ` (ENTER) para terminar selección

2. **MAPEXPORT:**
   - Comando: `MAPEXPORT`
   - Export to: **KMZ** (comprimido, preferido vs KML)
   - File path: `C:\Export\Subdivision_Design_Presentation.kmz`

3. **KML Options:**

   **General:**
   - ✅ **Export selected objects only**

   **Appearance:**
   - **Altitude Mode:**
     - **Clamp to ground** (geometrías siguen terreno de Google Earth)
     - Alternativa: Absolute (si tienes elevaciones Z)
   - **Extrude to ground:** ☐ (opcional, crea efecto 3D)

   **Colors:**
   - ✅ **Export layer colors** (usa colores de AutoCAD)

   **Labels:**
   - ☐ No labels (por ahora, para presentación limpia)

4. **Execute export**

5. **Verificar archivo creado:**
   - Navega a `C:\Export\`
   - `Subdivision_Design_Presentation.kmz` debe existir
   - Tamaño típico: 10-100 KB (para diseño simple)

#### Parte C: Validación en Google Earth (20 min)

1. **Abrir en Google Earth:**
   - Double-click en `Subdivision_Design_Presentation.kmz`
   - Google Earth debe lanzarse automáticamente
   - Debe volar a la ubicación de Austin, Texas
   - Diseño debe aparecer superpuesto sobre imagery

2. **Verificar georreferenciación:**
   - Zoom in/out
   - Polígonos deben estar en tierra (NO en agua o ubicación incorrecta)
   - Si están en el océano → Problema de CS

3. **Ajustar visualización:**
   - En Google Earth sidebar (izquierda):
     - Expande "Temporary Places"
     - Expande `Subdivision_Design_Presentation.kmz`
     - Verifica que layers aparecen

4. **Configurar transparencia (en Google Earth):**
   - Right-click en el KMZ > Properties
   - Adjust transparency slider
   - Recomendado: 40-50% para ver imagery debajo

5. **Screenshots para presentación:**
   - Vista general (zoomed out mostrando contexto de la ciudad)
   - Vista cercana (zoomed in mostrando lotes individuales)
   - Vista 3D (tilt view con Shift+arrastrar mouse)

#### Parte D: Preparación de Presentación (10 min)

1. **Agregar Placemarks informativos en Google Earth:**
   - Click en "Add Placemark" button
   - Coloca en ubicación clave (ej: entrada de la subdivisión)
   - Name: "Main Entrance"
   - Description:
     ```
     Proposed Subdivision Entrance
     - 150 residential lots
     - Total area: 500 acres
     - Zoning: SF-2 (Single Family Residential)
     ```
   - Click OK

2. **Guardar presentación:**
   - Google Earth > File > Save > Save Place As
   - Name: `Subdivision_Presentation_Full.kmz`
   - Esto incluye el diseño + placemarks

### Entregables

1. `Subdivision_Design_Presentation.kmz` (export desde AutoCAD)
2. `Subdivision_Presentation_Full.kmz` (con placemarks agregados en Google Earth)
3. Screenshots:
   - Vista general en Google Earth
   - Vista cercana mostrando lotes
   - Vista 3D (tilt)
4. (Opcional) Video screen recording de tour en Google Earth (30 segundos)

### Criterios de Evaluación

- ✅ KML export exitoso sin errores
- ✅ Georreferenciación correcta (aparece en Austin, Texas)
- ✅ Colores apropiados para visualización
- ✅ Placemarks informativos agregados
- ✅ Screenshots profesionales para presentación

---

## Ejercicio 6: Integración de Datos Multifuente con Diferentes Sistemas de Coordenadas

### Escenario Profesional

**Proyecto final integrador:** Eres el **Project GIS Manager** para un proyecto de **modernización de red de agua potable municipal**. Recibes datos de 5 fuentes diferentes, cada una con su propio coordinate system:

1. **Red existente de agua** - Shapefile en State Plane Texas South Central (EPSG:2277)
2. **Levantamiento GPS de hidrantes** - CSV con coordenadas WGS84 lat/lon (EPSG:4326)
3. **Parcelas catastrales** - Geodatabase Oracle Spatial en NAD83 State Plane (EPSG:2277)
4. **Imagery aérea** - WMS service en Web Mercator (EPSG:3857)
5. **Diseño propuesto de expansión** - DWG en coordenadas locales arbitrarias (sin CS)

**Tarea:** Integrar los 5 datasets en un proyecto Map 3D cohesivo con visualización profesional.

### Objetivos de Aprendizaje

- Diagnosticar CS de múltiples fuentes
- Conectar a datos mixtos (SHP, CSV, database, WMS, DWG)
- Transformar datasets a CS común
- Configurar Display Manager multi-source
- Crear visualización temática profesional

### Instrucciones Detalladas

#### Parte A: Análisis de Fuentes de Datos (30 min)

1. **Crear tabla de inventario:**

| Dataset | Formato | Coordinate System | EPSG | Action Needed |
|---------|---------|-------------------|------|---------------|
| Water Network | SHP | State Plane TX SC | 2277 | Connect FDO |
| GPS Hydrants | CSV | WGS84 Geographic | 4326 | Import + Transform |
| Parcels | Oracle DB | State Plane TX SC | 2277 | Connect FDO |
| Imagery | WMS | Web Mercator | 3857 | Connect FDO (read-only) |
| Proposed Design | DWG | Arbitrary Local | None | Georeference |

2. **Decisión de CS del proyecto:**
   - **Recomendado:** State Plane Texas South Central (EPSG:2277)
   - **Razón:** Mayoría de datos (Water Network, Parcels) ya están en este CS, es el estándar municipal

3. **Plan de acción documentado**

#### Parte B: Setup del Proyecto (20 min)

1. **Nuevo drawing:**
   - Name: `WaterSystem_Modernization_Master.dwg`
   - Assign CS: EPSG:2277
   - Save

2. **Configurar Display Manager layers:**
   - `00_Imagery` (fondo)
   - `10_Parcels` (contexto)
   - `20_Water_Existing` (red existente)
   - `30_Hydrants_GPS` (levantamiento)
   - `40_Proposed_Expansion` (diseño nuevo)

#### Parte C: Conectar Datos (45 min)

**1. Water Network (Shapefile en EPSG:2277):**
- Data Connect:
  - Provider: SHP
  - Folder: [ruta a shapefiles]
  - Name: `Water_Network_SHP`
  - Connect
- Add to Display: `water_mains` feature class

**2. GPS Hydrants (CSV en WGS84):**

Formato CSV esperado:
```
ID,Latitude,Longitude,Type,Pressure
H001,30.2672,-97.7431,Fire,60
H002,30.2680,-97.7440,Flushing,55
...
```

- MAPIMPORT:
  - File type: **Text/CSV**
  - File: `hydrants_gps.csv`
  - Column mapping:
    - X Column: Longitude
    - Y Column: Latitude
    - Z Column: (none)
  - Coordinate System: **EPSG:4326** (WGS84)
  - Destination CS: EPSG:2277 (transforma automáticamente)
  - Layer: `30_Hydrants_GPS`
  - Import

**3. Parcels (Oracle Spatial):**
- Prerequisito: Oracle Client instalado y configurado
- Data Connect:
  - Provider: Oracle
  - Service: `[TNS name]`
  - Username/Password: [credenciales]
  - Connect
- Browse schema > Add `parcels` feature class to Display

*Nota: Si no tienes acceso a Oracle, simula con Shapefile de parcels en EPSG:2277*

**4. Imagery (WMS):**
- Data Connect:
  - Provider: **WMS** (Web Map Service)
  - URL: Use servidor público, por ejemplo:
    - USGS Imagery: `https://basemap.nationalmap.gov/arcgis/services/USGSImageryOnly/MapServer/WMSServer`
    - O OpenStreetMap WMS
  - Connect
- Add imagery layer to Display
- En Display Manager, move imagery a la **parte inferior** (background)

*Nota: WMS requiere conexión a internet activa*

**5. Proposed Design (DWG sin CS):**

**Escenario:** Recibes `proposed_expansion.dwg` de un contratista, pero está en coordenadas locales arbitrarias (origen 0,0).

**Opciones:**

**Opción A (Simplificada):** Asumir que las coordenadas ya están en State Plane feet, solo falta asignar CS
- Abre `proposed_expansion.dwg` en Map 3D
- Assign CS: EPSG:2277
- Copia objetos a `WaterSystem_Modernization_Master.dwg`

**Opción B (Realista):** Georreferenciación con puntos de control
- Identifica 4+ puntos de control con coordenadas conocidas (ej: hidrantes existentes)
- Usa `MAPRUBBERSHEET` para transformar geometría a coordenadas reales
- Copia resultados a master drawing

Para este ejercicio, usa **Opción A** (simplificada).

#### Parte D: Configurar Visualización Profesional (40 min)

**1. Imagery (fondo):**
- Display Manager > Move a la parte inferior
- Transparency: 0% (opaco)

**2. Parcels:**
- Edit Style:
  - Fill color: Light gray (#CCCCCC)
  - Transparency: 70%
  - Outline: Dark gray, 0.13mm

**3. Water Mains - Temático por Diámetro:**
- Edit Style > Ranged Theme
- Field: `Diameter`
- 4 ranges, Natural Breaks
- Colors: Azul claro → Azul oscuro
- Lineweights: 0.25mm → 1.00mm

**4. Hydrants - Individual Values por Type:**
- Edit Style > Individual Values
- Field: `Type`
- Fire hydrants: Red circle, size 4
- Flushing hydrants: Yellow circle, size 3

**5. Proposed Expansion:**
- Layer color: Cyan (destacar como propuesta)
- Lineweight: 0.70mm

**6. Draw Order (de arriba a abajo en Display Manager):**
1. Hydrants (puntos, arriba)
2. Proposed Expansion
3. Water Mains
4. Parcels
5. Imagery (fondo)

**7. Scale Ranges:**
- Hydrants: Min scale 1:10000 (solo visible zoomed in)
- Parcels: Min scale 1:50000

#### Parte E: Validación y Entrega (15 min)

1. **Verificar alineación:**
   - Hydrants GPS deben caer sobre imagery en ubicaciones correctas
   - Water mains deben alinearse con parcels
   - Proposed expansion debe conectar con existing network

2. **Export a PDF georeferenciado (Módulo 4 cubre en detalle):**
   - Por ahora, simple PDF:
     - PLOT command
     - PDF output
     - Include para presentación

3. **Documentación:**
   - Crear text note en drawing con metadatos:
     - Proyecto, CS usado, fuentes de datos, fecha

### Entregables

1. `WaterSystem_Modernization_Master.dwg` con 5 datasets integrados
2. Tabla de inventario de fuentes de datos
3. Screenshots:
   - Display Manager mostrando jerarquía completa
   - Vista general del proyecto con todos los datasets
   - Vista cercana mostrando estilos temáticos
4. Documento técnico (1-2 páginas):
   - Decisión de CS del proyecto (justificación)
   - Transformaciones realizadas
   - Desafíos encontrados y soluciones

### Criterios de Evaluación

- ✅ Integración exitosa de 5 fuentes de datos heterogéneas
- ✅ Transformaciones de CS correctas (WGS84 → State Plane)
- ✅ Visualización profesional con estilos temáticos
- ✅ Draw order y scale ranges optimizados
- ✅ Documentación técnica completa y profesional
- ✅ Alineación verificada de todos los datasets

---

## Resumen de Ejercicios

Has completado **6 ejercicios integradores** que simulan workflows profesionales reales:

1. ✅ **Configuración de proyecto GIS/CAD** - Selection de CS, setup de drawing, organización
2. ✅ **Import de datos municipales** - MAPIMPORT, Object Data, verificación
3. ✅ **Conexión FDO a geodatabase** - PostgreSQL/PostGIS, estilos temáticos
4. ✅ **Transformación cross-CS** - Bulk Copy, validación con Google Earth
5. ✅ **Export a KML** - Presentación no técnica en Google Earth
6. ✅ **Integración multi-source** - 5 fuentes diferentes, proyecto cohesivo

**Tiempo total:** 3-4 horas de práctica hands-on

**Habilidades dominadas:**
- Selección y asignación de coordinate systems
- Import/Export múltiples formatos (SHP, KML, CSV, GeoJSON)
- Conexiones FDO (Shapefiles, databases, WMS)
- Transformaciones de coordinate systems
- Display Manager y estilos temáticos
- Validación de georreferenciación
- Documentación técnica profesional

---

**DISTMAH ATC - Authorized Training Center**

**Próximo paso:** [Módulo 2 - Análisis Espacial y Consultas](../modulo-2-analisis-espacial-consultas/README.md)

En el Módulo 2 aplicarás estas habilidades fundamentales a análisis geoespaciales avanzados, consultas espaciales, topología y análisis de redes.
