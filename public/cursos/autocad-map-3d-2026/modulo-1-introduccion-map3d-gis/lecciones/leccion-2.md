# Lección 2: Sistemas de Coordenadas y Proyecciones

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- ✅ Diferenciar entre sistemas de coordenadas geográficas y proyectadas
- ✅ Comprender datums y su importancia en precisión geoespacial
- ✅ Seleccionar el sistema de coordenadas apropiado según la ubicación del proyecto
- ✅ Asignar coordinate systems a dibujos de AutoCAD Map 3D
- ✅ Identificar códigos EPSG y utilizarlos para búsqueda de sistemas
- ✅ Comprender transformaciones de datum (WGS84, NAD83, NAD27)

## Introducción

Los **sistemas de coordenadas** son el fundamento de todo trabajo geoespacial. Mientras un dibujo CAD tradicional puede usar coordenadas arbitrarias con origen en (0,0), los proyectos Map 3D deben ubicarse en **posiciones reales del planeta Tierra**.

Para profesionales de ingeniería civil, topografía y planificación urbana, comprender sistemas de coordenadas es crítico para:
- Integrar datos de múltiples fuentes (GPS, catastro, drones, satélites)
- Garantizar precisión en mediciones de área, distancia y volumen
- Cumplir con estándares gubernamentales y regulatorios
- Coordinar con otros profesionales (geodestas, agrimensores, planificadores)

Esta lección te proporcionará el conocimiento teórico y práctico para seleccionar, asignar y trabajar con sistemas de coordenadas en Map 3D.

## 1. Fundamentos de Geodesia

### 1.1 La Tierra No Es Plana (Ni Perfectamente Esférica)

La Tierra es un **elipsoide irregular** (geoide) con:
- Radio ecuatorial: ~6,378 km
- Radio polar: ~6,357 km
- Achatamiento en los polos debido a rotación

Esta forma irregular complica las matemáticas para representar ubicaciones. Por eso se usan **modelos matemáticos** (elipsoides de referencia) que aproximan la forma de la Tierra.

### 1.2 Datum - Punto de Referencia

Un **datum** es un modelo matemático que define:
- El elipsoide de referencia (forma y dimensiones)
- El punto de origen (donde el elipsoide "toca" la Tierra)
- La orientación del sistema de coordenadas

**Datums comunes:**

| Datum | Región | Uso |
|-------|--------|-----|
| WGS84 | Global | GPS, aplicaciones mundiales |
| NAD83 | América del Norte | Proyectos USA/Canadá post-1986 |
| NAD27 | América del Norte | Proyectos USA/Canadá históricos |
| ETRS89 | Europa | Estándar europeo |
| SIRGAS2000 | América Latina | Brasil, países sudamericanos |

**Importante:** Datos con diferentes datums pueden tener **desplazamientos de metros** en la misma ubicación. Por ejemplo, un punto en NAD27 vs NAD83 puede diferir 10-100 metros.

### 1.3 Sistemas de Coordenadas Geográficas

Utilizan **latitud y longitud** para ubicar puntos en la superficie del elipsoide:

- **Latitud** (φ): Ángulo desde el ecuador (0°) hacia los polos (±90°)
  - Norte: positivo (+)
  - Sur: negativo (-)

- **Longitud** (λ): Ángulo desde el meridiano de Greenwich (0°) hacia este/oeste (±180°)
  - Este: positivo (+)
  - Oeste: negativo (-)

**Unidades:** Grados decimales (ej: 25.7617° N, -80.1918° W para Miami)

**Ventaja:** Cobertura global sin distorsión angular
**Desventaja:** Difícil para medir distancias y áreas (la Tierra es curva, no plana)

![Sistema de Coordenadas Geográficas](../imagenes/leccion-2-geographic-coordinates.png)

### 1.4 Sistemas de Coordenadas Proyectadas

Transforman la superficie curva del elipsoide a un **plano cartesiano** (X, Y) mediante una **proyección cartográfica**.

**Ventajas:**
- Mediciones de distancia y área en unidades lineales (metros, pies)
- Geometría euclidiana (ángulos rectos, líneas rectas)
- Compatible con CAD tradicional

**Desventaja:** Toda proyección introduce **distorsiones** en:
- Forma (conformal distortion)
- Área (equal-area distortion)
- Distancia (equidistant distortion)
- Dirección (azimuthal distortion)

**No existe proyección perfecta** - se elige según prioridades del proyecto.

## 2. Proyecciones Cartográficas Comunes

### 2.1 Universal Transverse Mercator (UTM)

**Características:**
- Divide el mundo en **60 zonas** de 6° de longitud cada una
- Cada zona numerada 1-60 (zona 1 inicia en 180°W)
- Subdivisión norte/sur del ecuador
- Unidades: metros
- Proyección: Transverse Mercator (cilindro transversal)

**Zonas UTM en América del Norte:**
- California: Zonas 10N, 11N
- Texas: Zonas 13N, 14N, 15N
- Florida: Zonas 16N, 17N
- Nueva York: Zona 18N

**Formato de coordenadas:**
- Este (Easting): 200,000m - 800,000m dentro de la zona
- Norte (Northing): 0m (ecuador) - 10,000,000m (polo)

**Ejemplo:** Austin, Texas
- Zona UTM: 14N
- Easting: 621,000 m E
- Northing: 3,349,000 m N

**Cuándo usar UTM:**
- Proyectos que abarcan < 6° de longitud
- Trabajos de ingeniería regional
- Estándar para datos GPS y militares
- Compatible internacionalmente

![Zonas UTM](../imagenes/leccion-2-utm-zones.png)

### 2.2 State Plane Coordinate System (SPCS)

**Características:**
- Sistema diseñado específicamente para **USA**
- Cada estado tiene 1-10 zonas propias (según tamaño del estado)
- Mayor precisión que UTM para trabajos locales (distorsión < 1:10,000)
- Unidades: US Survey Feet o Meters (según estado)
- Proyecciones variadas: Lambert Conformal Conic (estados E-W) o Transverse Mercator (estados N-S)

**Ejemplos:**
- California Zone 5 (Sur de California): Lambert, US Feet
- Texas South Central: Lambert, US Feet
- Florida East: Transverse Mercator, US Feet

**Cuándo usar State Plane:**
- Proyectos dentro de un solo estado USA
- Cumplimiento con regulaciones estatales/municipales
- Máxima precisión en trabajos de catastro y topografía
- Coordinar con agencias gubernamentales locales

### 2.3 Lambert Conformal Conic

**Características:**
- Proyección **conformal** (preserva ángulos y formas localmente)
- Ideal para regiones que se extienden **este-oeste** (latitud constante)
- Distorsión mínima a lo largo de los paralelos estándar
- Usada en muchas zonas State Plane

**Cuándo usar Lambert:**
- Proyectos que abarcan grandes extensiones E-W
- Mapas nacionales o estatales (USA, Europa)
- Cartas aeronáuticas

### 2.4 Mercator Transversa

**Características:**
- Proyección **conformal**
- Ideal para regiones que se extienden **norte-sur** (longitud constante)
- Distorsión mínima a lo largo del meridiano central
- Base de UTM y algunas zonas State Plane

**Cuándo usar Transverse Mercator:**
- Proyectos lineales N-S (carreteras, tuberías)
- Zonas UTM
- State Plane zones para estados elongados N-S

## 3. Códigos EPSG

El **European Petroleum Survey Group (EPSG)** creó un registro global de sistemas de coordenadas con códigos numéricos únicos.

### 3.1 Códigos EPSG Comunes

| Código EPSG | Sistema | Descripción |
|-------------|---------|-------------|
| 4326 | WGS84 Geographic | Lat/Lon global (usado por GPS) |
| 3857 | Web Mercator | Mapas web (Google Maps, OpenStreetMap) |
| 32614 | WGS84 UTM 14N | UTM Zona 14 Norte, WGS84 |
| 32615 | WGS84 UTM 15N | UTM Zona 15 Norte, WGS84 |
| 32616 | WGS84 UTM 16N | UTM Zona 16 Norte, WGS84 |
| 2230 | NAD83 California Zone 6 | State Plane California VI |
| 2277 | NAD83 Texas South Central | State Plane Texas S Central |

### 3.2 Estructura de Códigos EPSG

**Formato:** EPSG:XXXX

Ejemplo: **EPSG:32615**
- **326XX** = UTM WGS84 Norte (zonas 1-60)
- **327XX** = UTM WGS84 Sur
- **15** = Zona 15

### 3.3 Búsqueda de Códigos EPSG

**Recursos online:**
- [epsg.io](https://epsg.io) - Buscador interactivo con mapas
- [spatialreference.org](http://spatialreference.org) - Definiciones completas
- [epsg.org](https://epsg.org) - Registro oficial

## 4. Asignar Coordinate System en Map 3D

### 4.1 Método 1: Ribbon (Recomendado)

**Procedimiento:**

1. Ribbon: **MAP 3D** tab > **Geolocation** panel > **Assign Coordinate System**
2. Se abre el diálogo **Drawing Settings**
3. Sección **Coordinate System:**
   - Click en **[…]** (botón browse)
4. **Select Coordinate System** dialog se abre

**Opciones de búsqueda:**

**Por Código EPSG:**
1. Tab: **Code**
2. Category: **EPSG Code**
3. Ingresa código (ej: `32615`)
4. Click **Search**
5. Selecciona el resultado y click **OK**

**Por Ubicación Geográfica:**
1. Tab: **Location**
2. Selecciona **Country** (ej: United States)
3. Selecciona **State/Province** (ej: Texas)
4. Selecciona **County** (opcional)
5. Lista se filtra mostrando sistemas aplicables
6. Selecciona el apropiado y click **OK**

**Por Nombre:**
1. Tab: **Code**
2. Category: **All**
3. En campo de búsqueda escribe parte del nombre (ej: `Texas South Central`)
4. Selecciona de la lista

5. Click **OK** para asignar al drawing

![Assign Coordinate System Dialog](../imagenes/leccion-2-assign-cs-dialog.png)

### 4.2 Método 2: Display Manager

**Procedimiento:**

1. Task Pane > **Display Manager**
2. Sección superior: **Drawing Settings**
3. Campo **Coordinate System:** muestra sistema actual
4. Click en **[…]** para cambiar
5. Selecciona coordinate system (igual que método 1)
6. Click **OK**

### 4.3 Verificar Coordinate System Asignado

Para confirmar qué sistema está asignado:

1. **Display Manager** - Muestra en parte superior
2. **Status Bar** - Puede mostrar código (si configurado)
3. **Comando:** `MAPCSASSIGN` > botón **Current** muestra detalles completos

## 5. Selección de Coordinate System Apropiado

### 5.1 Criterios de Selección

**Pregunta 1: ¿Dónde está ubicado el proyecto?**
- USA → State Plane (máxima precisión local) o UTM
- Internacional → UTM o sistema nacional del país
- Global/multi-región → WGS84 Geographic

**Pregunta 2: ¿Cuál es la extensión del proyecto?**
- < 1 km² → State Plane o UTM (ambos apropiados)
- 1-50 km² → State Plane (si dentro de 1 estado) o UTM
- > 50 km² → UTM
- Multi-zona/región → WGS84 Geographic o proyección nacional

**Pregunta 3: ¿Qué requieren las regulaciones?**
- Catastro/topografía USA → State Plane (requerido por muchos estados)
- Proyectos federales USA → UTM o State Plane
- Proyectos internacionales → UTM

**Pregunta 4: ¿Cuál usan otras fuentes de datos?**
- Si importas SHP del municipio → Usa el mismo CS que ellos
- GPS data → Típicamente WGS84, reproyectar según necesidad

### 5.2 Ejemplos de Selección

**Ejemplo 1: Proyecto de subdivisión residencial en Austin, Texas**
- Extensión: 40 hectáreas
- Ubicación: Travis County, Texas
- **Selección:** Texas South Central Zone (NAD83), US Survey Feet
- **EPSG:** 2277
- **Razón:** Cumple con requisitos del condado, máxima precisión local

**Ejemplo 2: Pipeline regional atravesando múltiples estados**
- Extensión: 500 km, Texas a Louisiana
- **Selección:** UTM Zone 15N, WGS84
- **EPSG:** 32615
- **Razón:** Cobertura multi-estado, estándar de ingeniería regional

**Ejemplo 3: Análisis ambiental cuenca hidrográfica**
- Extensión: 2,000 km², montañas de California
- **Selección:** UTM Zone 11N, WGS84
- **EPSG:** 32611
- **Razón:** Área grande, análisis espacial, estándar ambiental

## 6. Transformaciones de Datum

### 6.1 ¿Por Qué Transformar?

Cuando integras datos de múltiples fuentes, pueden tener **diferentes datums**:
- Datos históricos en **NAD27**
- Datos modernos en **NAD83** o **WGS84**
- Datos GPS en **WGS84**

**Sin transformación correcta**, puntos pueden desplazarse **10-100 metros**.

### 6.2 Transformación Automática en Map 3D

Map 3D realiza **transformaciones on-the-fly** cuando:
- Importas datos con CS diferente al drawing
- Conectas a FDO data con CS diferente
- Realizas spatial queries entre datasets con diferentes CS

**Map 3D usa:**
- Definiciones de transformación de **EPSG**
- Parámetros de transformación de **NADCON** (NAD27 ↔ NAD83)
- Parámetros de transformación **WGS84 ↔ NAD83** (virtualmente idénticos, error < 1m)

### 6.3 Transformaciones Comunes

**WGS84 → NAD83:**
- Diferencia típica: < 1 metro
- Para trabajos de precisión estándar: Considerados equivalentes
- Para trabajos geodésicos precisos: Aplicar transformación oficial

**NAD27 → NAD83:**
- Diferencia: 10-100 metros (varía por ubicación)
- **SIEMPRE transformar** - nunca asumir equivalencia
- Map 3D usa NADCON grids para precisión

**NAD83 → State Plane:**
- Mismo datum, solo cambio de proyección
- Sin pérdida de precisión (dentro de tolerancias de proyección)

## 7. Unidades de Coordinate Systems

### 7.1 Unidades Lineales

Sistemas proyectados usan unidades lineales:

| Unidad | Abreviatura | Uso |
|--------|-------------|-----|
| Meters | m | Internacional, UTM, sistemas métricos |
| US Survey Feet | ft (US) | State Plane USA (mayoría) |
| International Feet | ft | UK, algunos sistemas |
| US Survey Foot | usSF | Precisión catastral USA |

**Diferencia crítica:**
- **International Foot:** 1 ft = 0.3048 m (exacto)
- **US Survey Foot:** 1 ft = 0.30480061 m

**Diferencia:** ~2 mm por kilómetro - significativo en proyectos grandes.

**Importante:** Siempre verifica qué tipo de "feet" usa el coordinate system. State Plane zones típicamente usan **US Survey Feet**.

### 7.2 Configurar Units en AutoCAD

Cuando asignas un coordinate system, las **Drawing Units** deben coincidir:

1. Comando: `UNITS`
2. **Insertion Scale:** Debe coincidir con unidades del CS
   - CS en meters → Insertion scale: Meters
   - CS en US Survey Feet → Insertion scale: US Survey Feet
3. Map 3D **generalmente configura esto automáticamente** al asignar CS

## Ejercicio Práctico

### Ejercicio 2.1: Asignar Coordinate Systems a Proyectos

**Objetivo:** Practicar búsqueda y asignación de coordinate systems apropiados para diferentes escenarios.

**Instrucciones:**

**Parte A: Proyecto en Miami, Florida**

1. Crea nuevo drawing (template Map3D.dwt)
2. Asigna coordinate system apropiado para Miami-Dade County:
   - Ribbon: MAP 3D > Geolocation > Assign Coordinate System
   - Tab: **Location**
   - Country: **United States**
   - State: **Florida**
   - Busca: **Florida East**
   - Selecciona: **NAD83 / Florida East (ftUS)** - EPSG:2236
   - Click OK
3. Verifica en Display Manager que muestra: **NAD83 / Florida East (ftUS)**
4. Guarda como: `Proyecto_Miami_StatePlane.dwg`

**Parte B: Proyecto Regional Multi-Estado**

1. Nuevo drawing
2. Asigna UTM Zone apropiado para región de Chicago (Illinois/Indiana/Wisconsin):
   - Method: **Code**
   - Category: **EPSG Code**
   - Code: `32616` (UTM Zone 16N, WGS84)
   - Click OK
3. Nota las unidades (meters)
4. Guarda como: `Proyecto_Regional_UTM.dwg`

**Parte C: Búsqueda por Nombre**

1. Nuevo drawing
2. Busca coordinate system para Texas South Central:
   - Method: **Code**
   - Category: **All**
   - Search: `Texas South Central`
   - Selecciona: **NAD83 / Texas South Central (ftUS)** - EPSG:2277
3. Guarda como: `Proyecto_Texas_StatePlane.dwg`

**Entregables:**
- 3 archivos DWG con coordinate systems asignados
- Screenshot de cada Display Manager mostrando el CS correcto

**Tiempo estimado:** 20 minutos

## Evaluación

1. **¿Qué es un datum?**
   - a) Un tipo de proyección cartográfica
   - b) Un modelo matemático que define el elipsoide de referencia y su posición
   - c) Un sistema de coordenadas geográficas
   - d) Un código EPSG

2. **¿Cuántas zonas UTM cubre el mundo?**
   - a) 30 zonas
   - b) 60 zonas
   - c) 120 zonas (60N + 60S)
   - d) 180 zonas

3. **¿Cuál sistema es más apropiado para un proyecto de topografía de 2 hectáreas en California?**
   - a) WGS84 Geographic (EPSG:4326)
   - b) Web Mercator (EPSG:3857)
   - c) California State Plane Zone apropiada
   - d) UTM Zone 10N

4. **¿Qué significa EPSG:32615?**
   - a) State Plane Texas Zone 15
   - b) UTM Zone 15 Norte, WGS84
   - c) NAD83 Zone 15
   - d) Geographic WGS84

5. **¿Cuál es la diferencia aproximada entre NAD27 y NAD83 en la misma ubicación?**
   - a) < 1 metro (prácticamente igual)
   - b) 10-100 metros
   - c) > 1 kilómetro
   - d) No hay diferencia

**Respuestas:** 1-b, 2-b, 3-c, 4-b, 5-b

## Recursos Adicionales

### Herramientas Online
- [EPSG.io](https://epsg.io) - Búsqueda interactiva de coordinate systems
- [Projection Wizard](https://projectionwizard.org) - Recomienda proyecciones según extent
- [EPSG Registry](https://epsg.org/home.html) - Registro oficial

### Documentación
- [Map 3D Coordinate Systems Guide](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-coordinate-systems) - Autodesk
- [Understanding Coordinate Systems](https://desktop.arcgis.com/en/arcmap/latest/map/projections/what-are-map-projections.htm) - ESRI
- [State Plane Coordinate System](https://www.ngs.noaa.gov/SPCS/) - NOAA

### Referencias Técnicas
- Snyder, J.P. (1987). *Map Projections - A Working Manual*. USGS Professional Paper 1395
- Iliffe, J. & Lott, R. (2008). *Datums and Map Projections for Remote Sensing, GIS and Surveying*

## Resumen

En esta lección has aprendido:

- ✅ **Datum** define el elipsoide de referencia y su posición (WGS84, NAD83, NAD27)
- ✅ **Coordenadas geográficas** (lat/lon) vs **proyectadas** (X,Y en metros/pies)
- ✅ **UTM** divide el mundo en 60 zonas de 6° longitud cada una
- ✅ **State Plane** es sistema USA de alta precisión para cada estado
- ✅ **Códigos EPSG** identifican uniquely cada coordinate system (ej: EPSG:32615 = UTM 15N WGS84)
- ✅ **Selección de CS** basada en ubicación, extensión, regulaciones y compatibilidad de datos
- ✅ **Transformaciones de datum** son críticas al integrar datos de múltiples fuentes
- ✅ Map 3D realiza **transformaciones on-the-fly** automáticamente

En la **Lección 3** aprenderemos sobre **Feature Data Objects (FDO)**, la tecnología que permite conectar a datos GIS externos sin conversión.

---

**Siguiente:** [Lección 3 - Feature Data Objects (FDO)](leccion-3.md)
