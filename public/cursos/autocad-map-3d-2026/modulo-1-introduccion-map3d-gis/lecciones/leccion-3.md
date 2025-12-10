# Lección 3: Feature Data Objects (FDO) - Conexión a Datos GIS

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- ✅ Comprender qué es FDO (Feature Data Objects) y su importancia
- ✅ Conectar a fuentes de datos GIS externas sin importar a DWG
- ✅ Navegar Data Connect y Data Sources en Task Pane
- ✅ Trabajar con FDO Providers (SHP, SDF, Oracle, PostgreSQL)
- ✅ Explorar feature classes y schemas de datos externos
- ✅ Configurar conexiones persistentes a geodatabases

## Introducción

En workflows GIS tradicionales, integrar datos de múltiples fuentes requería **conversión y duplicación** constante: importar Shapefiles a geodatabases, exportar a diferentes formatos, mantener múltiples copias sincronizadas. Esto genera:
- Archivos DWG masivos y lentos
- Problemas de sincronización cuando los datos origen cambian
- Desperdicio de almacenamiento con datos duplicados
- Pérdida de metadata y atributos en conversiones

**FDO (Feature Data Objects)** resuelve estos problemas permitiendo **acceso directo** a datos GIS en sus formatos nativos, sin conversión. Es como "conectar" a un Shapefile o base de datos espacial en lugar de "importar" todo su contenido.

Para profesionales que trabajan con datos municipales, estatales, o de múltiples departamentos, FDO es esencial para workflows eficientes y actualizados.

## 1. ¿Qué es FDO?

### 1.1 Definición Técnica

**Feature Data Objects (FDO)** es una **API (Application Programming Interface)** desarrollada por Autodesk que proporciona acceso estandarizado a datos geoespaciales en múltiples formatos y sistemas de bases de datos.

**Arquitectura FDO:**

```
AutoCAD Map 3D
        ↓
    FDO API (capa de abstracción)
        ↓
    ┌───────┴───────┬────────┬──────────┐
    ↓               ↓        ↓          ↓
FDO Provider    Provider  Provider  Provider
  (SHP)         (SDF)    (Oracle)  (PostGIS)
    ↓               ↓        ↓          ↓
Shapefile        SDF    Oracle DB  PostgreSQL
```

### 1.2 Ventajas de FDO

**1. Acceso Directo (No Conversión)**
- Los datos permanecen en formato origen
- No duplicación de archivos
- Lectura directa desde SHP, database, etc.

**2. Rendimiento**
- Solo carga datos visibles en el viewport actual
- Streaming de geometrías grandes
- Queries ejecutadas en el servidor (databases)

**3. Actualización Automática**
- Si el archivo SHP cambia externamente, Map 3D lo refleja
- Datos siempre sincronizados con la fuente

**4. Capacidades de Edición**
- Editar features directamente en formato origen (según provider)
- Cambios guardan en el archivo SHP o database original

**5. Metadata Preservada**
- Schemas, attribute tables, spatial indexes
- Relaciones y constraints de databases

### 1.3 FDO vs Importación Tradicional

| Aspecto | FDO Connection | Import (MAPIMPORT) |
|---------|----------------|---------------------|
| Datos en DWG | No, referencia externa | Sí, copiados al DWG |
| Tamaño archivo DWG | Pequeño | Grande (contiene todos los datos) |
| Sincronización | Automática | Manual (re-import) |
| Performance | Excelente (streaming) | Puede ser lenta con datos grandes |
| Edición datos origen | Sí (según provider) | No (editas la copia en DWG) |
| Uso típico | Datos de referencia actualizados | Datos que necesitas modificar localmente |

**Regla práctica:**
- **FDO:** Datos que cambian frecuentemente, datos de múltiples fuentes, datasets grandes
- **Import:** Datos estáticos, datos que modificarás extensamente, datos pequeños

## 2. FDO Providers

### 2.1 Providers Incluidos en Map 3D

Map 3D 2026 incluye providers para formatos y bases de datos comunes:

#### SHP (ESRI Shapefile)
- **Formato:** Archivo vectorial ESRI (.shp, .shx, .dbf)
- **Capacidades:** Lectura/Escritura
- **Geometrías:** Point, LineString, Polygon
- **Atributos:** DBF table
- **Uso común:** Datos municipales, estatales, gobierno

#### SDF (Spatial Data File)
- **Formato:** Formato Autodesk propietario
- **Capacidades:** Lectura/Escritura, rendimiento optimizado
- **Geometrías:** Todas
- **Uso común:** Datos intermedios, performance crítica

#### SQLite
- **Formato:** Base de datos SQLite con extensión SpatiaLite
- **Capacidades:** Lectura/Escritura
- **Uso común:** Datos portables, aplicaciones móviles

#### Oracle
- **Formato:** Oracle Spatial / Oracle Locator
- **Capacidades:** Lectura/Escritura (requiere Oracle Client)
- **Uso común:** Empresas con infraestructura Oracle

#### PostgreSQL/PostGIS
- **Formato:** PostgreSQL con extensión PostGIS
- **Capacidades:** Lectura/Escritura
- **Uso común:** Infraestructura open-source, municipal, corporativa

#### SQL Server
- **Formato:** Microsoft SQL Server con tipos espaciales
- **Capacidades:** Lectura/Escritura
- **Uso común:** Infraestructura Microsoft, gobierno

#### MySQL
- **Formato:** MySQL con tipos espaciales
- **Capacidades:** Lectura/Escritura
- **Uso común:** Aplicaciones web, menor uso en GIS empresarial

#### WMS (Web Map Service)
- **Formato:** Servicio web OGC WMS
- **Capacidades:** Solo lectura (imágenes raster)
- **Uso común:** Imagery de fondo, mapas base

#### WFS (Web Feature Service)
- **Formato:** Servicio web OGC WFS
- **Capacidades:** Lectura (y escritura si WFS-T)
- **Uso común:** Datos vectoriales desde servidores web

![FDO Providers](../imagenes/leccion-3-fdo-providers.png)

### 2.2 Limitaciones por Provider

| Provider | Lectura | Escritura | Topología | Joins | Performance |
|----------|---------|-----------|-----------|-------|-------------|
| SHP | ✅ | ✅ | ❌ | ❌ | Buena |
| SDF | ✅ | ✅ | ✅ | ✅ | Excelente |
| Oracle | ✅ | ✅ | ✅ | ✅ | Excelente |
| PostGIS | ✅ | ✅ | ✅ | ✅ | Excelente |
| WMS | ✅ | ❌ | ❌ | ❌ | Varía |
| WFS | ✅ | Limitada | ❌ | ❌ | Varía |

## 3. Conectar a Datos FDO

### 3.1 Conectar a Shapefile (SHP)

**Procedimiento paso a paso:**

1. **Abrir Data Connect**
   - Ribbon: **MAP 3D** tab > **Data** panel > **Data Connect**
   - O Task Pane > **Data Sources** > Click derecho en espacio vacío > **Add New Data Source**

2. **Data Connect Dialog**
   - Provider: Selecciona **SHP** de la lista
   - Click **[…]** (browse) junto a **Connection**

3. **SHP Connection**
   - **Data Source Folder:** Browse a la carpeta que contiene los archivos .shp
   - Ejemplo: `C:\GIS_Data\City_Infrastructure\`
   - Click **OK**

4. **Nombrar Conexión**
   - **Name:** Asigna nombre descriptivo (ej: `City_Infrastructure_SHP`)
   - Click **Connect**

5. **Verificar Conexión**
   - Task Pane > **Data Sources**
   - La nueva conexión aparece con icono de carpeta
   - Expande (click en +) para ver feature classes (archivos .shp en la carpeta)

![Data Connect SHP](../imagenes/leccion-3-data-connect-shp.png)

### 3.2 Conectar a Base de Datos (PostgreSQL/PostGIS)

**Prerequisitos:**
- PostgreSQL server accesible en red
- PostGIS extension instalada en la base de datos
- Credenciales de acceso (usuario/password)

**Procedimiento:**

1. **Data Connect**
   - Provider: Selecciona **PostgreSQL**
   - Click **[…]** para configurar conexión

2. **PostgreSQL Connection Parameters**
   - **Service:** (nombre del servidor o IP)
   - **Username:** (tu usuario PostgreSQL)
   - **Password:** (tu password)
   - **Database:** (nombre de la base de datos)
   - Click **Test Connection** para verificar
   - Click **OK**

3. **Nombrar y Conectar**
   - Name: `InfrastructureDB_PostGIS`
   - Click **Connect**

4. **Explorar Schemas y Tables**
   - Task Pane > Data Sources > Expande la conexión
   - Expande **Schemas** (ej: `public`, `infrastructure`)
   - Expande cada schema para ver feature classes (tables con geometría)

### 3.3 Conectar a Oracle Spatial

**Prerequisitos:**
- Oracle Client instalado en la máquina local
- TNS Names configurado (tnsnames.ora)
- Credenciales de acceso

**Procedimiento:**

1. **Data Connect**
   - Provider: **Oracle**

2. **Oracle Connection**
   - **Service:** (TNS name del servidor Oracle)
   - **Username:** usuario
   - **Password:** password
   - Click **OK**

3. **Nombrar:** `Enterprise_Oracle_Spatial`

4. **Connect**

**Nota:** Conexiones a Oracle requieren configuración de red y permisos. Consulta con el administrador de base de datos si tienes problemas.

## 4. Trabajar con Feature Classes

### 4.1 Explorar Feature Classes

Una vez conectado, puedes explorar la estructura de datos:

1. **Task Pane > Data Sources**
2. Expande la conexión
3. Expande carpetas/schemas
4. **Click derecho en una feature class** > Opciones:
   - **Add to Display** - Agrega al Display Manager para visualización
   - **Data Preview** - Muestra tabla de atributos
   - **Schema** - Muestra estructura (columnas, tipos de datos)

![Feature Class Explorer](../imagenes/leccion-3-feature-class-explorer.png)

### 4.2 Schema de Feature Class

El **schema** define la estructura de una feature class:

- **Geometry column:** Nombre de la columna que contiene geometría
- **Geometry type:** Point, LineString, Polygon, etc.
- **Attribute columns:** Nombre, tipo de dato (string, int, float, date)
- **Primary key:** Identificador único (si existe)

**Ver Schema:**
1. Data Sources > Click derecho en feature class
2. **Schema**
3. Dialog muestra:
   - **Properties:** Geometry column, type
   - **Columns:** Lista de atributos con tipo de dato

### 4.3 Data Preview

Muestra los datos en formato tabular (como attribute table en ArcGIS):

1. Data Sources > Click derecho en feature class
2. **Data Preview**
3. Ventana muestra:
   - Filas (features)
   - Columnas (atributos)
   - Geometría (típicamente en formato WKT o binario)

**Funcionalidad:**
- **Sort:** Click en header de columna
- **Filter:** Puede filtrar valores (funcionalidad limitada en preview)
- **Export:** Puede exportar a CSV (según versión)

## 5. Display Manager y FDO Data

### 5.1 Agregar Feature Class a Display

Para visualizar datos FDO en el drawing:

1. **Data Sources** > Navega a la feature class
2. **Click derecho** > **Add to Display**
3. O **drag & drop** la feature class al **Display Manager**

**Resultado:**
- Feature class aparece en Display Manager como layer
- Datos se visualizan en el drawing
- NO se importan al DWG (solo referencia)

### 5.2 Estilos y Simbología

En Display Manager, puedes configurar cómo se visualizan los datos FDO:

1. **Display Manager** > Expande la feature class
2. **Right-click en la regla de estilo** > **Edit Style**
3. Configurar:
   - **Color** (por valor, por rango, único)
   - **Lineweight**
   - **Linetype**
   - **Transparency**

**Estilos temáticos:**
- **Individual Values:** Color diferente por categoría (ej: tipo de tubería)
- **Ranged:** Color por rango numérico (ej: diámetro de tubería)
- **Scale-dependent:** Estilo cambia según zoom level

### 5.3 Performance Tips

Para mejorar performance con datasets grandes:

**1. Limitar Extent**
- Display Manager > Click derecho en feature class > **Boundary Template**
- Define área de interés (solo carga datos dentro)

**2. Filtros**
- Display Manager > Feature class > **Filter**
- Define query para cargar solo features que cumplen criterio
- Ejemplo: `Diameter > 12` (solo tuberías > 12")

**3. Scale Ranges**
- Configura para que ciertos datos solo se muestren en ciertos zoom levels
- Evita cargar millones de features cuando estás zoomed out

## 6. Edición de Datos FDO

### 6.1 Capacidades de Edición

Según el provider, puedes editar datos FDO directamente:

**Editable (con limitaciones):**
- SHP
- SDF
- Oracle Spatial
- PostGIS
- SQL Server

**Read-only:**
- WMS
- WFS (excepto WFS-T)

### 6.2 Editar Geometría

Para editar la forma de un feature FDO:

1. **Selecciona** el objeto en el drawing
2. Usa **grips** (puntos de control) para modificar
3. O comandos CAD: MOVE, ROTATE, SCALE, STRETCH
4. Cambios se guardan automáticamente en la fuente FDO

**Nota:** Algunos providers requieren "checkout" o locks para edición concurrente.

### 6.3 Editar Atributos (Object Data)

Para editar atributos alfanuméricos:

1. **Selecciona** el objeto
2. Task Pane > **Object Data**
3. Modifica valores en la tabla
4. Cambios se reflejan en el archivo/database origen

**Alternativa:**
- Comando: `ODETABLE`
- Abre tabla completa de object data
- Edita múltiples features a la vez

## 7. Conexiones Persistentes

### 7.1 Guardar Conexiones en Drawing

Las conexiones FDO se pueden guardar con el drawing:

1. Conecta a las fuentes de datos necesarias
2. Guarda el drawing (Ctrl+S)
3. Las conexiones se guardan en el DWG

**Al reabrir el drawing:**
- Map 3D intenta reconectar automáticamente
- Si las rutas son relativas o la fuente está disponible, funciona transparentemente
- Si la fuente no está disponible (ej: red desconectada), muestra warning

### 7.2 Rutas Relativas vs Absolutas

**Rutas absolutas:**
- Ejemplo: `C:\GIS_Data\Infrastructure\water_lines.shp`
- Problema: Si mueves el proyecto, la ruta ya no es válida

**Rutas relativas:**
- Ejemplo: `..\GIS_Data\water_lines.shp` (relativa al DWG)
- Ventaja: Proyecto portable (mueves toda la carpeta y funciona)

**Configurar:**
- Data Connect > Advanced Options > **Use Relative Paths** (si disponible)
- O mantén los datos en subcarpeta del proyecto

### 7.3 Gestión de Conexiones

**Remover conexión:**
1. Task Pane > Data Sources
2. Right-click en conexión > **Remove**
3. Datos ya no se visualizan (pero no se borran de la fuente)

**Editar conexión:**
1. Right-click > **Edit**
2. Modificar parámetros (ej: password, ruta)
3. Reconectar

## Ejercicio Práctico

### Ejercicio 3.1: Conectar a Shapefile y Visualizar

**Objetivo:** Crear conexión FDO a Shapefile, explorar schema, y visualizar en Display Manager.

**Datos de práctica:**
Descarga sample Shapefiles de: [Natural Earth Data](https://www.naturalearthdata.com/downloads/)
- `ne_10m_admin_0_countries.shp` (países del mundo)
- `ne_10m_populated_places.shp` (ciudades)

**Instrucciones:**

**Parte A: Configurar Proyecto**

1. Crea nuevo drawing con template Map3D.dwt
2. Asigna coordinate system: **WGS84 Geographic** (EPSG:4326)
3. Guarda como: `Ejercicio_FDO_Countries.dwg`

**Parte B: Conectar a Shapefile**

1. Descarga y extrae Natural Earth Data a: `C:\Temp\NE_Data\`
2. Data Connect:
   - Provider: **SHP**
   - Data Source Folder: `C:\Temp\NE_Data\`
   - Name: `Natural_Earth_SHP`
   - Click **Connect**

**Parte C: Explorar Schema**

1. Task Pane > Data Sources > Expande `Natural_Earth_SHP`
2. Right-click en `ne_10m_admin_0_countries` > **Schema**
3. Identifica:
   - Geometry type (debe ser Polygon)
   - Attribute columns (NAME, POP_EST, GDP_MD_EST, etc.)
4. Screenshot del schema

**Parte D: Visualizar Datos**

1. Right-click en `ne_10m_admin_0_countries` > **Add to Display**
2. Display Manager > Edita estilo:
   - Color: Green
   - Transparency: 50%
3. Right-click en `ne_10m_populated_places` > **Add to Display**
4. Edita estilo de ciudades:
   - Color: Red
   - Point style: Circle

**Parte E: Data Preview**

1. Right-click en `ne_10m_admin_0_countries` > **Data Preview**
2. Examina atributos de varios países
3. Sort por columna `POP_EST` (población) - descendente

**Entregables:**
- Archivo `Ejercicio_FDO_Countries.dwg` con conexiones FDO
- Screenshot del schema de countries
- Screenshot del display con países y ciudades visualizadas

**Tiempo estimado:** 25 minutos

## Evaluación

1. **¿Qué es FDO?**
   - a) Un formato de archivo GIS
   - b) Una API para acceso estandarizado a datos geoespaciales
   - c) Un tipo de database
   - d) Un comando de AutoCAD

2. **¿Cuál es la ventaja principal de usar FDO Connection vs Import?**
   - a) Importar es más rápido
   - b) FDO no duplica datos, mantiene referencia a fuente externa
   - c) FDO solo funciona con Shapefiles
   - d) Import permite edición, FDO no

3. **¿Qué provider FDO usarías para conectar a PostgreSQL con PostGIS?**
   - a) SHP
   - b) SDF
   - c) PostgreSQL
   - d) SQL Server

4. **¿Dónde se visualizan las conexiones FDO activas?**
   - a) Properties Palette
   - b) Task Pane > Data Sources
   - c) Ribbon > Data panel
   - d) Command Line

5. **¿Los datos FDO se guardan dentro del archivo DWG?**
   - a) Sí, siempre
   - b) No, solo se guarda la referencia/conexión
   - c) Solo si usas Import
   - d) Depende del provider

**Respuestas:** 1-b, 2-b, 3-c, 4-b, 5-b

## Recursos Adicionales

### Documentación
- [FDO Technology Overview](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-fdo-overview) - Autodesk
- [Supported FDO Providers](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-fdo-providers) - Autodesk Help
- [Working with External Data](https://knowledge.autodesk.com/support/autocad-map-3d/learn-explore/caas/CloudHelp/cloudhelp/2026/ENU/MAP3D-Use/files/GUID-external-data.htm)

### Datos de Práctica
- [Natural Earth Data](https://www.naturalearthdata.com/) - Datos geográficos globales gratuitos
- [US Census TIGER/Line Shapefiles](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html)
- [OpenStreetMap Extracts](https://download.geofabrik.de/) - Datos OSM en múltiples formatos

### Tutoriales
- "Connecting to SHP Data in Map 3D" - YouTube Autodesk Channel
- "Working with PostGIS in Map 3D" - Autodesk Knowledge Network

## Resumen

En esta lección has aprendido:

- ✅ **FDO (Feature Data Objects)** es una API para acceso directo a datos GIS sin conversión
- ✅ **Ventajas de FDO:** No duplicación, sincronización automática, mejor performance, metadata preservada
- ✅ **FDO Providers:** SHP, SDF, Oracle, PostGIS, SQL Server, WMS, WFS
- ✅ **Data Connect** workflow: Provider > Connection parameters > Name > Connect
- ✅ **Task Pane > Data Sources** muestra conexiones y permite explorar feature classes
- ✅ **Schema y Data Preview** para entender estructura y contenido de datos
- ✅ **Display Manager** para visualizar datos FDO con estilos personalizados
- ✅ **Edición limitada** de geometría y atributos según el provider

En la **Lección 4** aprenderemos workflows de **Importación y Exportación** de datos GIS en formatos estándar (SHP, KML, GeoJSON, LandXML).

---

**Siguiente:** [Lección 4 - Importar/Exportar Datos GIS](leccion-4.md)
