# Lección 6: Coordinate Systems y Transformaciones Avanzadas

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- ✅ Asignar coordinate system a drawing existente sin georreferencia
- ✅ Realizar transformaciones entre diferentes coordinate systems
- ✅ Usar Bulk Copy para reproyectar datos entre sistemas
- ✅ Realizar queries con transformación on-the-fly
- ✅ Solucionar problemas comunes de georreferenciación
- ✅ Validar precisión de transformaciones de coordinate systems

## Introducción

La **Lección 2** introdujo los fundamentos de coordinate systems (datums, proyecciones, EPSG codes). Ahora aplicaremos ese conocimiento a escenarios profesionales reales que enfrentarás regularmente:

- **Integrar datos de múltiples fuentes** con diferentes coordinate systems
- **Reproyectar** datasets completos a un sistema común
- **Transformar coordenadas de campo** (GPS en WGS84 → State Plane local)
- **Corregir** drawings sin coordinate system asignado
- **Validar** que las transformaciones son precisas

Para ingenieros civiles, topógrafos y planificadores urbanos, estos workflows son **críticos** porque los proyectos modernos siempre involucran datos de múltiples fuentes: gobierno municipal (State Plane), GPS (WGS84), drones (WGS84), CAD histórico (coordenadas arbitrarias), bases de datos corporativas (coordinate system específico).

Esta lección te dará las habilidades para integrar todo eficientemente.

## 1. Diagnosticar Coordinate System de Drawing

### 1.1 Drawing Sin Coordinate System Asignado

**Síntomas:**
- Importas un Shapefile y aparece muy lejos del origen (0,0)
- Datos FDO conectados no se visualizan
- Display Manager muestra: **"No coordinate system assigned"**

**Verificar:**
1. Task Pane > **Display Manager**
2. Parte superior: **Drawing Settings**
3. Si dice **"<None>"** o **"No coordinate system"** → Drawing no está georeferenciado

### 1.2 Drawing Con Coordinate System Incorrecto

**Síntomas:**
- Importas datos y aparecen en ubicación incorrecta
- Distorsión extrema de geometrías
- Datos de múltiples fuentes no se alinean

**Verificar:**
1. Display Manager > Drawing Coordinate System
2. Compara con el CS esperado del proyecto
3. Si no coincide → Necesitas corregir

### 1.3 Identificar Coordinate System de Datos Externos

**Para Shapefile:**
1. Abre la carpeta del .shp
2. Busca archivo **.prj** (mismo nombre que .shp)
3. Abre .prj en Notepad
4. Contiene definición del CS (formato WKT - Well Known Text)

**Ejemplo de contenido .prj:**
```
PROJCS["NAD_1983_StatePlane_Texas_South_Central_FIPS_4204_Feet",
GEOGCS["GCS_North_American_1983",
DATUM["D_North_American_1983",
SPHEROID["GRS_1980",6378137.0,298.257222101]],
PRIMEM["Greenwich",0.0],
UNIT["Degree",0.0174532925199433]],
PROJECTION["Lambert_Conformal_Conic"],
...
```

**Interpretación:**
- Projection: **Lambert Conformal Conic**
- Datum: **NAD 1983**
- Zone: **Texas South Central**
- Units: **Feet** (US Survey Feet)
- **Conclusión:** Este es State Plane Texas South Central (EPSG:2277)

**Para Database (PostGIS, Oracle):**
- La columna geometry tiene un **SRID** (Spatial Reference ID)
- Típicamente es el código EPSG
- Query: `SELECT ST_SRID(geom) FROM table_name LIMIT 1;` (PostGIS)

**Para datos sin .prj (problema común):**
- Contacta la fuente que proveyó los datos
- O busca metadata/documentación del dataset
- O intenta identificar por ubicación (test & error)

## 2. Asignar Coordinate System a Drawing

### 2.1 Drawing Nuevo (Desde Cero)

**Best practice:** Asignar CS **ANTES** de agregar datos.

1. Nuevo drawing (Map3D.dwt template)
2. Inmediatamente: MAP 3D > Geolocation > **Assign Coordinate System**
3. Selecciona el CS apropiado (por código EPSG, ubicación, o nombre)
4. Click OK
5. Guarda el drawing

**Ventaja:** Todos los datos subsecuentes se manejan correctamente.

### 2.2 Drawing Existente Sin CS

**Escenario:** Tienes un drawing CAD antiguo con datos en coordenadas locales (ej: origen arbitrario). Necesitas georeferenciarlo.

**Opciones:**

**Opción A: El Drawing Ya Está en un CS Real (Solo Falta Asignar)**

Si el drawing fue creado en un CS específico pero nunca se asignó formalmente:

1. MAP 3D > Geolocation > Assign Coordinate System
2. Selecciona el CS correcto
3. Click OK

**Verificar:** Importa un Shapefile de referencia conocido (ej: límites municipales). Si se alinea correctamente, el CS es correcto.

**Opción B: El Drawing Está en Coordenadas Arbitrarias (Requiere Transformación)**

Si el drawing usa coordenadas locales arbitrarias y necesitas georeferenciarlo:

1. **Identifica puntos de control** (mínimo 4):
   - Puntos en el drawing con ubicaciones conocidas en el mundo real
   - Ejemplos: esquinas de parcelas, monumentos de topografía, edificios conocidos

2. **Rubber Sheet Transformation** (tema avanzado):
   - Comando: `MAPRUBBERSHEET` (Map 3D)
   - Define source points (coordenadas locales) y destination points (coordenadas reales)
   - Map 3D calcula transformación (affine, polynomial)
   - Aplica transformación a todos los objetos

**Nota:** Rubber Sheet está fuera del alcance de este módulo básico. Para proyectos profesionales, considere contratar un geodesta licenciado para georreferenciación precisa.

### 2.3 Cambiar Coordinate System de Drawing

**ADVERTENCIA:** Cambiar el CS de un drawing **NO reproyecta los datos**. Solo cambia cómo Map 3D interpreta las coordenadas.

**Escenario seguro para cambiar CS:**
- El CS asignado es incorrecto (error humano al asignar inicialmente)
- El drawing está vacío o solo tiene datos FDO (que se transforman on-the-fly)

**Escenario NO seguro:**
- El drawing contiene objetos CAD nativos (LINEs, POLYLINEs importados)
- Cambiar CS hará que aparezcan en ubicación incorrecta

**Procedimiento para cambiar CS:**
1. Display Manager > Drawing Settings > Click en [...]
2. Selecciona nuevo CS
3. Click OK
4. **Verifica** que los datos aparecen correctamente

## 3. Transformaciones de Coordinate Systems

### 3.1 Transformación On-the-Fly (Automática)

Map 3D realiza transformación automática cuando:
- **Conectas datos FDO** con CS diferente al drawing
- **Importas Shapefile** con CS diferente
- **Realizas spatial queries** entre datasets con diferentes CS

**Ejemplo:**

**Drawing CS:** UTM Zone 15N WGS84 (EPSG:32615)

**Conectas Shapefile:** State Plane Texas South Central NAD83 (EPSG:2277)

**Resultado:** Map 3D transforma el Shapefile on-the-fly a UTM Zone 15N para visualización. Los datos **originales NO cambian**, solo se transforman en memoria para display.

**Ventaja:** Puedes trabajar con datos de múltiples CS sin conversión manual.

**Limitación:** Transformación on-the-fly puede afectar performance con datasets muy grandes.

### 3.2 Bulk Copy con Transformación

**Bulk Copy** convierte datos de un CS a otro **permanentemente**, creando un nuevo dataset en el CS de destino.

**Escenario:** Tienes 10 Shapefiles en diferentes CS (WGS84, NAD83, State Plane zones variadas). Quieres todos en UTM Zone 15N para un proyecto regional.

**Procedimiento:**

1. **Data Sources** > Conecta al Shapefile origen
2. **Right-click** en feature class > **Bulk Copy**
3. **Bulk Copy Dialog:**

   **Source:**
   - Feature class: (ya seleccionado)
   - Source CS: (detectado automáticamente desde .prj)

   **Destination:**
   - **Type:** Selecciona formato de destino
     - **Shapefile (SHP)** - Crea nuevo Shapefile
     - **SDF** - Crea Spatial Data File de Autodesk
     - **Drawing (DWG)** - Importa al drawing actual
   - **Destination CS:** Selecciona el CS de destino (ej: EPSG:32615)
   - **File path:** Ruta para el archivo de salida

   **Options:**
   - **Filter:** Opcionalmente filtra features (ej: solo parcelas > 1000 m²)
   - **Attribute selection:** Selecciona qué atributos copiar

4. Click **OK** para ejecutar

**Resultado:**
- Nuevo Shapefile creado en el CS de destino
- Geometrías reproyectadas (coordenadas convertidas matemáticamente)
- Atributos preservados

**Verificar:**
1. Abre el nuevo Shapefile en QGIS
2. Verifica que el .prj contiene el CS de destino
3. Verifica que geometrías aparecen en ubicación correcta

![Bulk Copy Dialog](../imagenes/leccion-6-bulk-copy.png)

### 3.3 Batch Bulk Copy (Múltiples Feature Classes)

Para transformar múltiples feature classes en una operación:

1. **MAP 3D** > **Data** panel > **Bulk Copy** (comando directo)
2. **Add** múltiples feature classes
3. Configure destination CS (mismo para todos)
4. Execute

**Útil para:** Estandarizar todos los datos de un proyecto a un CS común.

## 4. Queries con Transformación

### 4.1 Spatial Query Cross-CS

**Escenario:** Quieres seleccionar parcelas (en State Plane) que intersectan un buffer de 100m alrededor de una tubería propuesta (en UTM).

**Map 3D maneja esto automáticamente:**

1. Define tu query (Módulo 2 cubre spatial queries en detalle)
2. **Source feature class:** Parcels (State Plane Texas, EPSG:2277)
3. **Operator:** Intersect
4. **Query feature class:** Proposed_Pipeline (UTM 15N, EPSG:32615)
5. Execute query

**Resultado:**
- Map 3D transforma Proposed_Pipeline a State Plane (o viceversa) on-the-fly
- Realiza la intersección en un CS común
- Retorna resultados correctos

**Precisión:** Las transformaciones usan parámetros oficiales (EPSG, NADCON grids), precisión típica < 1 metro.

## 5. Validación de Transformaciones

### 5.1 Verificar Resultado de Transformación

**Método 1: Puntos de Control Conocidos**

1. Identifica punto con coordenadas conocidas en ambos CS
   - Ejemplo: Esquina de edificio público
   - Coordenadas en State Plane: (3100000, 10200000) feet
   - Coordenadas en WGS84: (30.2672°, -97.7431°)

2. Realiza transformación (Bulk Copy)

3. Verifica punto transformado:
   - Usa `ID` command en AutoCAD
   - Compara con coordenadas esperadas
   - Diferencia debe ser < 1 metro (para datums modernos)

**Método 2: Superposición Visual**

1. Conecta datos de referencia confiables (ej: USGS basemap, OpenStreetMap)
2. Conecta tu dataset transformado
3. Visualmente verifica alineación:
   - Esquinas de edificios coinciden
   - Calles se alinean
   - Parcelas encajan con lotes reales

**Método 3: Export a Google Earth (KML)**

1. Export tu dataset transformado a KML
2. Abre en Google Earth
3. Verifica que aparece en la ubicación correcta del planeta
4. Si aparece en el océano o polo norte → Transformación fallida

### 5.2 Troubleshooting Transformaciones Incorrectas

**Problema 1: Datos Aparecen Muy Lejos de lo Esperado**

**Causas posibles:**
- CS origen mal identificado (ej: falta archivo .prj)
- Confusión entre Units (feet vs meters)
- CS asignado al drawing es incorrecto

**Solución:**
- Verifica .prj del Shapefile origen
- Confirma Units del CS (feet vs meters)
- Test con CS alternativos

**Problema 2: Pequeño Offset (10-100 metros)**

**Causas posibles:**
- Datum transformation incorrecta (ej: NAD27 vs NAD83)
- Falta definición de transformación entre datums

**Solución:**
- Verifica datum del origen vs destino
- Aplica transformación de datum explícita

**Problema 3: Distorsión de Geometrías**

**Causas posibles:**
- Transformación entre proyecciones incompatibles
- Datos origen en CS incorrecto

**Solución:**
- Revisar definición del CS origen
- Consultar metadata de los datos originales

## 6. Casos Prácticos Avanzados

### 6.1 Caso 1: Integrar Datos GPS (WGS84) a Proyecto State Plane

**Escenario:**
- Proyecto en State Plane Texas South Central (EPSG:2277), US Survey Feet
- Recibes puntos GPS de campo en WGS84 lat/lon (EPSG:4326)

**Workflow:**

1. **Preparar datos GPS:**
   - Export GPS data a CSV con columnas: ID, Latitude, Longitude
   - Ejemplo: `1, 30.2672, -97.7431`

2. **Importar a Map 3D:**
   - MAPIMPORT > **Text File** (*.csv)
   - Define que Latitude = Y, Longitude = X
   - Asigna CS: **WGS84 Geographic (EPSG:4326)**
   - Import

3. **Transformar a State Plane:**
   - Los puntos aparecen correctamente (Map 3D transforma on-the-fly)
   - Para permanentizarlos en State Plane:
     - Select todos los puntos
     - Bulk Copy to Drawing
     - Destination CS: EPSG:2277
     - Los puntos ahora están en State Plane feet

4. **Verificar:**
   - Comando `ID` en un punto
   - Coordenadas deben estar en millones (típico de State Plane feet)

### 6.2 Caso 2: Proyecto Multi-Zona (Cruza Zonas UTM)

**Escenario:**
- Pipeline de 200 km que cruza UTM Zone 14N y Zone 15N
- Datos de topografía en ambas zonas

**Problema:** No existe un CS que cubra ambas zonas sin distorsión significativa.

**Solución:**

**Opción A: Proyección Custom (Avanzado)**
- Define Transverse Mercator custom con central meridian en medio del proyecto
- Requiere conocimiento de geodesia

**Opción B: Usar UTM de la zona principal + Aceptar distorsión en bordes**
- Si 80% del proyecto está en Zone 15N, usa Zone 15N
- Transforma datos de Zone 14N a Zone 15N (habrá distorsión < 0.1% en los bordes)

**Opción C: Trabajar en WGS84 Geographic**
- No hay distorsión (es geográfico)
- Desventaja: Difícil medir distancias (coordenadas en grados)

**Recomendación profesional:** Consulta con geodesta para proyección custom óptima.

### 6.3 Caso 3: Reproyectar Proyecto Completo

**Escenario:**
- Proyecto iniciado en State Plane
- Cliente requiere entrega en UTM (estándar internacional)

**Workflow:**

1. **Inventory de datos:**
   - Identifica todos los DWG, SHP, databases en el proyecto
   - Lista el CS actual de cada uno

2. **Bulk Copy all data:**
   - Para cada dataset:
     - Bulk Copy a UTM Zone apropiada
     - Nombra claramente (ej: `water_lines_UTM15N.shp`)

3. **Nuevo Drawing Master:**
   - Crea nuevo DWG con CS: UTM Zone 15N
   - Conecta (FDO) o importa todos los datasets transformados

4. **Validación:**
   - Visual check de alineación
   - Mediciones de distancia (compara con original)
   - Export sample a KML, verificar en Google Earth

5. **Documentación:**
   - Documenta transformación realizada
   - Incluye códigos EPSG de origen y destino
   - Metadata para entrega al cliente

## Ejercicio Práctico

### Ejercicio 6.1: Transformación Multi-Source Integration

**Objetivo:** Integrar datos de 3 fuentes con diferentes coordinate systems en un proyecto común.

**Datos necesarios:**
- **Dataset A:** Parcels en State Plane (EPSG:2277 - Texas South Central)
- **Dataset B:** GPS Points en WGS84 Geographic (EPSG:4326)
- **Dataset C:** Streets en UTM Zone 14N (EPSG:32614)

**Instrucciones:**

**Parte A: Setup**

1. Decide CS del proyecto:
   - Como los datos principales (Parcels) están en State Plane Texas, usa ese CS
   - CS del proyecto: **EPSG:2277**

2. Nuevo drawing:
   - Assign CS: EPSG:2277
   - Guarda como: `Integration_Project.dwg`

**Parte B: Conectar Datasets**

1. **Data Connect:**
   - Connect a Shapefile de Parcels (EPSG:2277)
   - Connect a CSV de GPS Points (asigna EPSG:4326 en import)
   - Connect a Shapefile de Streets (EPSG:32614)

2. **Add to Display** los 3 datasets

**Parte C: Verificar Transformación On-the-Fly**

1. Display Manager:
   - Verifica que Drawing CS = EPSG:2277
   - Los 3 datasets deben visualizarse correctamente alineados
   - Map 3D está transformando GPS Points y Streets on-the-fly

2. Test visual:
   - GPS Points deben aparecer dentro de Parcels apropiadas
   - Streets deben alinearse con límites de Parcels

**Parte D: Reproyectar Permanentemente**

1. **Streets (UTM → State Plane):**
   - Right-click en Streets feature class > Bulk Copy
   - Destination: SHP
   - Destination CS: EPSG:2277
   - File: `streets_state_plane.shp`
   - Execute

2. **GPS Points (WGS84 → State Plane):**
   - Bulk Copy GPS Points
   - Destination: Drawing (importar al DWG)
   - Destination CS: EPSG:2277 (debe ser automático)
   - Execute

**Parte E: Validación**

1. Abre `streets_state_plane.shp` en QGIS
2. Verifica que .prj contiene EPSG:2277
3. Comando `ID` en uno de los GPS Points importados
4. Coordenadas deben estar en millones (feet), NO en grados

**Entregables:**
- `Integration_Project.dwg` con 3 datasets conectados
- `streets_state_plane.shp` transformado
- Screenshot mostrando los 3 datasets alineados
- Screenshot de Display Manager mostrando Drawing CS

**Tiempo estimado:** 35 minutos

## Evaluación

1. **¿Qué hace Map 3D cuando conectas datos FDO con CS diferente al drawing?**
   - a) Rechaza la conexión
   - b) Transforma on-the-fly para display
   - c) Cambia el CS del drawing automáticamente
   - d) Los datos aparecen en ubicación incorrecta

2. **¿Qué herramienta usas para reproyectar un Shapefile a un nuevo CS permanentemente?**
   - a) MAPIMPORT
   - b) Assign Coordinate System
   - c) Bulk Copy
   - d) MAPEXPORT

3. **Si un archivo .prj de Shapefile indica NAD83 pero el drawing está en WGS84, ¿cuál es la diferencia esperada?**
   - a) > 1 km
   - b) 10-100 metros
   - c) < 1 metro (prácticamente idénticos)
   - d) No hay diferencia

4. **¿Cómo verificas que una transformación fue exitosa?**
   - a) Export a KML y abrir en Google Earth
   - b) Comparar con puntos de control conocidos
   - c) Superposición visual con datos de referencia confiables
   - d) Todas las anteriores

5. **¿Cambiar el CS de un drawing automáticamente reproyecta los objetos CAD existentes?**
   - a) Sí, siempre
   - b) Solo si son objetos importados
   - c) No, solo cambia la interpretación del CS
   - d) Depende del tipo de objeto

**Respuestas:** 1-b, 2-c, 3-c, 4-d, 5-c

## Recursos Adicionales

### Herramientas de Transformación
- [EPSG.io](https://epsg.io/transform) - Calculadora de transformación de coordenadas online
- [NOAA NADCON](https://www.ngs.noaa.gov/TOOLS/Nadcon/Nadcon.shtml) - Transformación NAD27 ↔ NAD83
- [PROJ](https://proj.org/) - Biblioteca open-source de proyecciones

### Documentación Técnica
- [Coordinate System Transformations in Map 3D](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-transformations) - Autodesk
- [Datum Transformations](https://epsg.org/guidance-notes.html) - EPSG Guidance Notes
- [Understanding Coordinate System Transformations](https://desktop.arcgis.com/en/arcmap/latest/map/projections/about-geographic-transformation.htm) - ESRI

### Validación
- [QGIS](https://qgis.org) - Validar transformaciones
- [CS2CS](https://proj.org/apps/cs2cs.html) - Command-line coordinate transformation
- [NGS Coordinate Conversion Tool](https://www.ngs.noaa.gov/NCAT/) - NOAA

## Resumen

En esta lección has aprendido:

- ✅ **Diagnosticar CS** de drawings (verificar en Display Manager) y datos externos (.prj files)
- ✅ **Asignar CS** a drawings nuevos y existentes
- ✅ **Transformación on-the-fly** ocurre automáticamente con datos FDO de diferentes CS
- ✅ **Bulk Copy** reproyecta datasets permanentemente a nuevo CS
- ✅ **Queries cross-CS** funcionan automáticamente (Map 3D transforma en background)
- ✅ **Validación:** Puntos de control, superposición visual, export a Google Earth
- ✅ **Troubleshooting:** Identificar problemas de CS, units, datum transformations
- ✅ **Casos prácticos:** GPS (WGS84) → State Plane, proyectos multi-zona, reproyección completa

---

## Fin del Módulo 1

¡Felicidades! Has completado el **Módulo 1: Introducción a Map 3D y Datos GIS**.

**Lo que has dominado:**
- Interface de Map 3D y diferencias con AutoCAD
- Sistemas de coordenadas y proyecciones (WGS84, UTM, State Plane)
- Tecnología FDO para conexión a datos GIS
- Import/Export de formatos GIS (SHP, KML, GeoJSON, LandXML)
- Geospatial Platform y Task Pane (Display Manager, Data Sources)
- Transformaciones de coordinate systems y reproyección de datos

**Próximo paso:** [Módulo 2 - Análisis Espacial y Consultas](../../modulo-2-analisis-espacial-consultas/README.md)

En el Módulo 2 aprenderás a realizar análisis geoespaciales avanzados: Object Data, consultas espaciales (buffer, overlay), topología, y análisis de redes.

---

**DISTMAH ATC - Authorized Training Center**
*Excelencia en capacitación Autodesk desde 2010*
