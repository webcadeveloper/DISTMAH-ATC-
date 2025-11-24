# Lección 4: Importar/Exportar Datos GIS

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- ✅ Importar Shapefiles (SHP) a AutoCAD como objetos CAD nativos
- ✅ Exportar diseños CAD a formato Shapefile con atributos
- ✅ Trabajar con archivos KML/KMZ para Google Earth
- ✅ Importar/Exportar GeoJSON para aplicaciones web mapping
- ✅ Manejar archivos LandXML para intercambio con software de diseño civil
- ✅ Comprender cuándo usar Import vs FDO Connection

## Introducción

Mientras **FDO connections** (Lección 3) permiten acceso directo a datos externos, hay escenarios donde necesitas **importar datos al DWG** para:
- Edición extensiva de geometría
- Agregar datos al drawing permanentemente
- Trabajar offline sin conexión a la fuente
- Integrar con workflows CAD tradicionales

De igual forma, **exportar** tus diseños CAD a formatos GIS estándar permite:
- Compartir con stakeholders que usan ArcGIS, QGIS u otro software GIS
- Publicar en plataformas web (Google Earth, web maps)
- Cumplir con requisitos de entrega de proyectos
- Integrar con sistemas de gestión de activos

Esta lección cubre los workflows de importación/exportación más comunes en proyectos de ingeniería y planificación.

## 1. Importar Shapefile (SHP) a AutoCAD

### 1.1 ¿Qué es un Shapefile?

**Shapefile** es el formato vectorial más común en GIS, desarrollado por ESRI. En realidad es un conjunto de archivos:

- **.shp** - Geometrías (puntos, líneas, polígonos)
- **.shx** - Index espacial
- **.dbf** - Tabla de atributos
- **.prj** - Información de coordinate system (opcional pero crítico)
- **.sbn, .sbx** - Índices espaciales adicionales (opcional)

**Todos estos archivos deben estar en la misma carpeta** y tener el mismo nombre base.

### 1.2 Comando MAPIMPORT

**Procedimiento:**

1. **Asigna coordinate system al drawing** (si aún no tiene)
   - MAP 3D > Geolocation > Assign Coordinate System
   - Selecciona el apropiado para tu proyecto

2. **Ejecutar MAPIMPORT**
   - Ribbon: MAP 3D tab > Data panel > **Import**
   - O comando: `MAPIMPORT`

3. **Import Dialog**
   - **Files of type:** ESRI Shapefile (*.shp)
   - **Browse** al archivo .shp
   - Ejemplo: `C:\GIS_Data\water_lines.shp`
   - Click **Add**

4. **Import Options**
   - **Coordinate System:** Verifica que sea correcto
     - Map 3D lee el archivo .prj si existe
     - Si no existe .prj, debes asignar manualmente
   - **Import to:**
     - **Current Drawing** (opción común)
     - **New Drawing** (crea DWG nuevo)
   - **Layer mapping:**
     - **Create one layer** (recomendado para inicio)
     - Layer name: Descriptivo (ej: `Water_Lines_GIS`)

5. **Data Conversion**
   - **Object Data:** ✅ **Import as Object Data** (IMPORTANTE)
     - Esto preserva los atributos del .dbf como Object Data tables
   - **Feature Class:** Puedes crear feature class (opcional)

6. **Click OK** para importar

**Resultado:**
- Geometrías del SHP se convierten a objetos AutoCAD (LINE, LWPOLYLINE, etc.)
- Atributos se almacenan como Object Data
- Objetos aparecen en el layer especificado

![MAPIMPORT Dialog](../imagenes/leccion-4-mapimport-dialog.png)

### 1.3 Verificar Import Exitoso

**Verificar geometrías:**
1. Comando: `ZOOM` > `EXTENTS` (o `Z` `E`)
2. Debes ver las geometrías importadas

**Verificar atributos (Object Data):**
1. Selecciona un objeto importado
2. Comando: `ODETABLE`
3. Verifica que los atributos del .dbf aparecen como columnas

**Verificar coordinate system:**
1. Display Manager > Drawing Coordinate System
2. Debe coincidir con el .prj del Shapefile

### 1.4 Opciones Avanzadas de Import

**Import con Query (filtro):**
- En Import dialog > **Query** tab
- Define filtro SQL (ej: `DIAMETER > 12` para importar solo tuberías grandes)
- Solo features que cumplen el criterio se importan

**Import con transformación de coordenadas:**
- Si el .prj del SHP difiere del drawing CS
- Map 3D transforma automáticamente on-the-fly
- Verifica el resultado con ZOOM EXTENTS

**Batch Import (múltiples SHP):**
- MAPIMPORT > Add múltiples archivos .shp
- Todos se importan a diferentes layers
- Útil para datasets relacionados

## 2. Exportar a Shapefile

### 2.1 Comando MAPEXPORT

**Escenario:** Has diseñado infraestructura en AutoCAD y necesitas entregar Shapefile al cliente GIS.

**Procedimiento:**

1. **Preparar datos:**
   - Organiza objetos en layers lógicos
   - Si necesitas atributos, agrega Object Data (ver paso 2.2)

2. **Ejecutar MAPEXPORT**
   - Ribbon: MAP 3D > Data panel > **Export**
   - O comando: `MAPEXPORT`

3. **Export Dialog**
   - **Export to:** ESRI Shapefile (*.shp)
   - **File name:** Especifica ruta y nombre
     - Ejemplo: `C:\Export\Proposed_Water_Lines.shp`

4. **Data Selection**
   - **Selection:**
     - **Use Current Selection** (si ya seleccionaste objetos)
     - **Select by Layer** (recomendado)
       - Selecciona layer(s) a exportar
     - **All Drawing** (exporta todo)

5. **Coordinate System**
   - **Export using:** Coordinate system del Shapefile de salida
     - **Drawing Coordinate System** (usa el del DWG)
     - **Custom** (especifica otro CS, Map 3D transforma)

6. **Attribute Options**
   - Si objetos tienen Object Data:
     - ✅ **Export Object Data as attributes**
     - Selecciona qué tabla(s) de Object Data exportar

7. **Click OK** para exportar

**Resultado:**
- Archivo .shp, .shx, .dbf, .prj creados
- Listo para usar en ArcGIS, QGIS, etc.

### 2.2 Agregar Object Data para Export

Si tus objetos CAD NO tienen atributos, pero necesitas agregarlos para el export:

1. **Define Object Data Table:**
   - Comando: `ADEDEFINEDATA`
   - Click **Define**
   - Table name: `Pipeline_Attributes`
   - Add fields:
     - `Diameter` (Real)
     - `Material` (Character, length 20)
     - `InstallDate` (Date)
   - Click OK

2. **Attach Object Data a objetos:**
   - Selecciona objetos
   - Comando: `ADEATTACHDATA`
   - Selecciona tabla: `Pipeline_Attributes`
   - Ingresa valores para cada feature

3. **Exportar** (MAPEXPORT incluirá estos atributos en el .dbf)

## 3. Trabajar con KML/KMZ (Google Earth)

### 3.1 ¿Qué es KML/KMZ?

- **KML** (Keyhole Markup Language): Formato XML para datos geoespaciales usado por Google Earth
- **KMZ**: Versión comprimida (ZIP) de KML

**Usos comunes:**
- Visualizar diseños en Google Earth para presentaciones
- Compartir ubicaciones de proyectos con stakeholders no técnicos
- Validar coordinate systems (si aparece en el lugar correcto en Google Earth, está bien georeferenciado)

### 3.2 Exportar a KML

**Procedimiento:**

1. **Asegurar que drawing tenga coordinate system** asignado
   - Si no tiene, Google Earth no sabrá dónde ubicar los datos

2. **MAPEXPORT**
   - Export to: **KML (*.kml)** o **KMZ (*.kmz)**
   - File name: `Proyecto_Subdivision.kmz`

3. **Selection:** Selecciona objetos a exportar

4. **KML Options:**
   - **Export 3D features:** Si tienes datos con elevación (Z)
   - **Clamp to ground:** Fuerza geometrías a nivel del terreno de Google Earth
   - **Extrude to ground:** Dibuja líneas verticales desde features al suelo (efecto visual)

5. **Export**

**Resultado:**
- Archivo .kml o .kmz
- Abre con Google Earth para visualizar

![Export to KML](../imagenes/leccion-4-export-kml.png)

### 3.3 Importar desde KML

Map 3D también puede importar KML:

1. **MAPIMPORT**
2. Files of type: **KML**
3. Browse al archivo .kml/.kmz
4. Import options similares a Shapefile

**Limitaciones:**
- KML puede contener datos 3D, imágenes, y otros elementos no CAD
- Solo geometrías vectoriales se importan
- Atributos limitados (depende de la estructura del KML)

## 4. GeoJSON para Web Mapping

### 4.1 ¿Qué es GeoJSON?

**GeoJSON** es un formato JSON para datos geoespaciales, estándar abierto usado por:
- Mapas web (Leaflet, Mapbox, OpenLayers)
- APIs de mapas (Google Maps API, Mapbox API)
- Aplicaciones JavaScript
- Bases de datos NoSQL (MongoDB con GeoJSON)

**Ventajas:**
- Formato de texto legible
- Nativo en JavaScript
- Lightweight
- Soporta propiedades (atributos) complejas

### 4.2 Exportar a GeoJSON

**Map 3D 2026 soporta export a GeoJSON:**

1. **MAPEXPORT**
2. Export to: **GeoJSON (*.json, *.geojson)**
3. File name: `infrastructure.geojson`
4. Selection y coordinate system (igual que otros exports)
5. Export

**Resultado:**
- Archivo .geojson listo para usar en web maps

**Ejemplo de GeoJSON generado:**

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [[100.0, 0.0], [101.0, 1.0]]
      },
      "properties": {
        "Diameter": 12,
        "Material": "PVC"
      }
    }
  ]
}
```

### 4.3 Importar desde GeoJSON

1. **MAPIMPORT**
2. Files of type: **GeoJSON**
3. Browse al archivo
4. Import (properties se convierten en Object Data)

## 5. LandXML para Diseño Civil

### 5.1 ¿Qué es LandXML?

**LandXML** es un estándar XML para intercambio de datos de diseño civil entre software:
- AutoCAD Civil 3D
- Bentley OpenRoads
- Trimble Business Center
- Software de topografía (Leica, Trimble)

**Datos que puede contener:**
- Alignments (alineamientos horizontales/verticales)
- Surfaces (modelos de terreno)
- Parcels (parcelas)
- Points (puntos topográficos)
- Pipe networks (redes de tuberías)

### 5.2 Importar LandXML

**Escenario:** Recibes puntos topográficos de un levantamiento en formato LandXML.

**Procedimiento:**

1. **MAPIMPORT**
2. Files of type: **LandXML (*.xml)**
3. Browse al archivo .xml
4. **Import Options:**
   - Selecciona qué elementos importar:
     - ✅ Points
     - ✅ Alignments
     - ☐ Surfaces (si es solo Map 3D, limitado; Civil 3D es mejor para surfaces)
     - ✅ Parcels

5. **Layer mapping:** Asigna layers para cada tipo de dato

6. **Import**

**Resultado:**
- Points como POINT entities con elevación (Z)
- Alignments como polylines
- Attributes como Object Data

### 5.3 Exportar a LandXML

**Map 3D tiene capacidades limitadas de export a LandXML** comparado con Civil 3D. Para export completo de surfaces, alignments complejos, use Civil 3D.

**Para export básico:**
1. MAPEXPORT
2. LandXML
3. Selecciona datos
4. Export

**Nota:** Para workflows profesionales de Civil 3D ↔ LandXML, recomendamos usar Civil 3D directamente.

## 6. Import vs FDO Connection - Decisiones

### 6.1 Tabla Comparativa

| Criterio | Use FDO Connection | Use Import |
|----------|-------------------|-----------|
| **Datos cambian frecuentemente** | ✅ Sí (se actualiza automático) | ❌ No (requiere re-import) |
| **Dataset muy grande** | ✅ Sí (streaming, mejor performance) | ❌ No (DWG se vuelve pesado) |
| **Edición extensiva de geometría** | ❌ Limitada | ✅ Sí (objetos CAD nativos) |
| **Trabajo offline** | ❌ Requiere acceso a fuente | ✅ Sí (datos en DWG) |
| **Múltiples fuentes de datos** | ✅ Sí (conecta a varias) | 😐 Posible pero complejo |
| **Deliverable final (entrega)** | ❌ Requiere incluir fuentes | ✅ Sí (todo en 1 DWG) |
| **Preservar metadata compleja** | ✅ Sí | 😐 Limitada (Object Data tiene límites) |

### 6.2 Workflow Híbrido (Recomendado)

**Mejor práctica:**
1. **Datos de referencia/base** → FDO Connection
   - Catastro municipal
   - Infraestructura existente
   - Topografía base
   - Imagery

2. **Datos de diseño/trabajo** → Import o crear nativo en CAD
   - Nuevo diseño de subdivisión
   - Propuesta de tubería
   - Modificaciones a infrastructure

**Ventaja:**
- DWG ligero (solo tu diseño)
- Contexto actualizado (datos de referencia vía FDO)
- Flexibilidad total para editar tu diseño

## 7. Mejores Prácticas de Import/Export

### 7.1 Antes de Importar

✅ **Verifica coordinate system:**
- Del Shapefile (.prj file)
- Del drawing de destino
- Deben coincidir o Map 3D transformará (verifica resultado)

✅ **Inspecciona datos en QGIS o ArcGIS** antes de importar:
- Verifica que se ven correctos
- Identifica atributos importantes
- Detecta problemas (geometrías inválidas)

✅ **Limpia datos si es posible:**
- Remove features irrelevantes
- Fix topology errors
- Simplify geometries si son muy complejas

### 7.2 Antes de Exportar

✅ **Organiza en layers:**
- Un layer por feature type (ej: `Water_Lines`, `Valves`, `Hydrants`)
- Export cada layer como Shapefile separado

✅ **Agrega Object Data** si necesitas atributos:
- Define tablas con campos apropiados
- Attach a objetos
- Verifica valores antes de export

✅ **Verifica geometrías:**
- Comando: `OVERKILL` para remove duplicates
- Close polylines si deben ser polígonos
- No 2D/3D mixing (Shapefile no soporta mezcla)

### 7.3 Post-Export Validation

✅ **Abre el Shapefile exportado en QGIS/ArcGIS:**
- Verifica que geometrías son correctas
- Verifica coordinate system (.prj es correcto)
- Verifica atributos en attribute table

✅ **Chequea el .prj file:**
- Debe existir
- Abre en text editor, verifica que tiene contenido

## Ejercicio Práctico

### Ejercicio 4.1: Import/Export Workflow Completo

**Objetivo:** Importar Shapefile, editar en AutoCAD, exportar de vuelta, y validar en Google Earth.

**Datos:**
Usa Shapefile de parques urbanos (descarga de datos abiertos municipales o usa sample data).

**Parte A: Import Shapefile**

1. Nuevo drawing, coordinate system: **UTM Zone apropiada** para tu ciudad
2. MAPIMPORT:
   - File: `city_parks.shp`
   - Import as Object Data: ✅
   - Layer: `Parks_Original`
3. Comando: `Z` `E` para ver extent
4. ODETABLE para ver atributos

**Parte B: Editar y Agregar Features**

1. Dibuja un nuevo polígono representando un parque propuesto:
   - Comando: `PLINE`
   - Dibuja área del parque
   - Close polyline
2. Mueve a layer: `Parks_Proposed`
3. Agrega Object Data:
   - ADEDEFINEDATA > Define tabla `Park_Info`:
     - `Name` (Character, 50)
     - `Area_sqm` (Real)
     - `Type` (Character, 20)
   - ADEATTACHDATA al nuevo polígono:
     - Name: "New Community Park"
     - Area_sqm: (usar AREA command para calcular)
     - Type: "Community"

**Parte C: Export a Shapefile**

1. MAPEXPORT:
   - Format: ESRI Shapefile
   - File: `C:\Export\parks_proposed.shp`
   - Selection: Layer `Parks_Proposed`
   - Export Object Data: ✅
2. Export

**Parte D: Export a KML para Google Earth**

1. Selecciona todos los polígonos (originales + propuestos)
2. MAPEXPORT:
   - Format: KMZ
   - File: `parks_all.kmz`
   - Options: Clamp to ground ✅
3. Export
4. Abre `parks_all.kmz` en Google Earth
5. Verifica que aparecen en la ubicación correcta

**Entregables:**
- `parks_proposed.shp` (+ .shx, .dbf, .prj)
- `parks_all.kmz`
- Screenshot de Google Earth mostrando los parques
- Drawing con import y diseño

**Tiempo estimado:** 30 minutos

## Evaluación

1. **¿Qué comando se usa para importar Shapefiles a AutoCAD?**
   - a) IMPORT
   - b) MAPIMPORT
   - c) SHPIMPORT
   - d) FDOIMPORT

2. **¿Cuál archivo de un Shapefile contiene los atributos?**
   - a) .shp
   - b) .shx
   - c) .dbf
   - d) .prj

3. **¿Qué formato se usa típicamente para visualización en Google Earth?**
   - a) SHP
   - b) GeoJSON
   - c) KML/KMZ
   - d) LandXML

4. **Para exportar objetos CAD con atributos a Shapefile, ¿qué debes hacer?**
   - a) Los atributos se exportan automáticamente
   - b) Agregar Object Data a los objetos antes de exportar
   - c) No es posible exportar atributos
   - d) Usar Extended Entity Data

5. **¿Cuándo es preferible usar FDO Connection en lugar de Import?**
   - a) Cuando necesitas edición extensiva
   - b) Cuando los datos cambian frecuentemente y quieres updates automáticos
   - c) Cuando trabajas offline
   - d) Siempre es mejor importar

**Respuestas:** 1-b, 2-c, 3-c, 4-b, 5-b

## Recursos Adicionales

### Documentación
- [Import/Export Data in Map 3D](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-import-export) - Autodesk Help
- [Working with Shapefiles](https://knowledge.autodesk.com/support/autocad-map-3d/learn-explore/caas/CloudHelp/cloudhelp/2026/ENU/MAP3D-Use/files/GUID-shapefiles.htm)
- [KML Reference](https://developers.google.com/kml/documentation) - Google Developers

### Herramientas de Validación
- [QGIS](https://qgis.org) - Software GIS gratuito para validar exports
- [Google Earth Pro](https://www.google.com/earth/versions/) - Validar KML exports
- [GeoJSON.io](http://geojson.io) - Visualizar/validar GeoJSON

### Datos de Práctica
- [US Census TIGER/Line](https://www.census.gov/geographies/mapping-files.html) - Shapefiles gratuitos USA
- [Natural Earth](https://www.naturalearthdata.com/) - Datos globales
- [OpenStreetMap](https://download.geofabrik.de/) - Datos OSM en múltiples formatos

## Resumen

En esta lección has aprendido:

- ✅ **MAPIMPORT** importa Shapefiles a AutoCAD como objetos CAD con Object Data
- ✅ **MAPEXPORT** exporta objetos CAD a SHP, KML, GeoJSON y otros formatos
- ✅ **Shapefile** requiere múltiples archivos (.shp, .shx, .dbf, .prj)
- ✅ **KML/KMZ** para Google Earth - excelente para presentaciones y validación
- ✅ **GeoJSON** para web mapping - formato JSON nativo en JavaScript
- ✅ **LandXML** para intercambio con software de diseño civil
- ✅ **Import vs FDO:** Import para edición extensiva y trabajo offline, FDO para datos que cambian y performance
- ✅ **Object Data** es crítico para exportar atributos a formatos GIS

En la **Lección 5** exploraremos el **Geospatial Platform y Task Pane** en profundidad, dominando Display Manager y herramientas de análisis.

---

**Siguiente:** [Lección 5 - Geospatial Platform y Task Pane](leccion-5.md)
