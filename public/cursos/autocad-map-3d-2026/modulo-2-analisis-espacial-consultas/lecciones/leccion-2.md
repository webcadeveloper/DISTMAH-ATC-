# Lección 2: Data Connect - Conexión a Bases de Datos

## Objetivos de Aprendizaje

- ✅ Configurar conexión FDO a PostgreSQL/PostGIS
- ✅ Configurar conexión a Oracle Spatial
- ✅ Configurar conexión a SQL Server con tipos espaciales
- ✅ Realizar operaciones Read/Write en databases
- ✅ Optimizar performance con spatial indexes

## Introducción

Las bases de datos empresariales almacenan **millones de features** con atributos complejos, versionamiento, permisos de usuario, y transacciones ACID. Conectar Map 3D directamente a PostgreSQL, Oracle, o SQL Server elimina conversiones a Shapefile y mantiene datos sincronizados en tiempo real.

**Casos de uso profesionales:**
- Municipalidad: Database de infraestructura actualizada por múltiples departamentos
- Utilities: Asset management system con historial de mantenimiento
- Desarrollo inmobiliario: Database de parcelas con transacciones de ventas
- Ambiental: Monitoring data con mediciones temporales

## 1. PostgreSQL/PostGIS

### 1.1 ¿Qué es PostGIS?

**PostgreSQL:** Base de datos relacional open-source
**PostGIS:** Extensión espacial para PostgreSQL (almacena geometrías, spatial indexes, spatial functions)

**Ventajas:**
- Gratuito, open-source
- Performance excelente
- Estándar en GIS open-source (QGIS, GeoServer)
- Soporta todos los tipos de geometría (Point, LineString, Polygon, MultiPolygon, etc.)

### 1.2 Conexión FDO a PostgreSQL

**Prerequisites:**
- PostgreSQL server accesible
- PostGIS extension instalada
- Credenciales de usuario

**Procedimiento:**

1. **Data Connect**
   - Provider: **PostgreSQL**

2. **Connection Parameters:**
   - **Service:** `hostname:port` (ej: `localhost:5432` o `db.company.com:5432`)
   - **Username:** Tu usuario PostgreSQL
   - **Password:** Tu password
   - **Database:** Nombre de la database (ej: `infrastructure_db`)

3. **Test Connection:**
   - Click **Test Connection**
   - Debe mostrar: "Connection successful"
   - Si falla: Verificar firewall, PostgreSQL pg_hba.conf, network

4. **Name:** `Company_Infrastructure_PostGIS`

5. **Connect**

### 1.3 Browse Schemas y Tables

**PostgreSQL organiza en schemas:**
- Schema `public` (default)
- Schemas personalizados (ej: `water`, `sewer`, `electric`)

**Task Pane > Data Sources:**
1. Expande conexión PostgreSQL
2. Expande **Schemas**
3. Expande schema (ej: `public`)
4. Lista muestra **feature classes** (tables con columna geometry)

**Right-click en feature class:**
- **Schema:** Ver estructura (columns, data types, geometry type)
- **Data Preview:** Ver primeras filas
- **Add to Display:** Visualizar en Map 3D

### 1.4 Edit Data en PostGIS

**Map 3D puede editar geometría y atributos:**

1. **Add feature class to Display**
2. **Selecciona feature** en drawing
3. **Editar geometría:** Grips, MOVE, ROTATE, STRETCH
4. **Editar atributos:**
   - Task Pane > **Object Data** (si está sincronizado)
   - O edita directo en database con SQL

**Cambios se guardan en PostgreSQL** (según permisos de usuario).

**Transacciones:**
- Map 3D usa transacciones PostgreSQL
- Ediciones se pueden rollback si hay error

## 2. Oracle Spatial

### 2.1 ¿Qué es Oracle Spatial?

**Oracle Spatial:** Componente de Oracle Database que soporta tipos de datos espaciales (SDO_GEOMETRY) y spatial indexes.

**Uso común:**
- Empresas grandes con infraestructura Oracle existente
- Gobierno (muchos estados/municipios usan Oracle)
- Utilities (electric, water, gas companies)

### 2.2 Conexión FDO a Oracle

**Prerequisites:**
- Oracle Client instalado en PC local
- TNS Names configurado (`tnsnames.ora`)
- Credenciales de usuario con permisos SELECT/INSERT/UPDATE en tablas espaciales

**Procedimiento:**

1. **Verificar Oracle Client:**
   - Command Prompt: `tnsping [service_name]`
   - Debe responder con info del servidor

2. **Data Connect:**
   - Provider: **Oracle**

3. **Connection Parameters:**
   - **Service:** TNS name (ej: `ORCL`, `PROD_GIS`)
   - **Username:** Usuario Oracle
   - **Password:** Password

4. **Test Connection** → Connect

### 2.3 Browse Oracle Spatial Data

**Oracle organiza en schemas = usuarios:**
- Cada user es un schema
- Tables espaciales tienen columna `SDO_GEOMETRY`

**Task Pane > Data Sources:**
1. Expande conexión Oracle
2. Expande **Schemas**
3. Browse tables con columna spatial

## 3. SQL Server con Tipos Espaciales

### 3.1 SQL Server Spatial

**Microsoft SQL Server 2012+** incluye tipos espaciales nativos:
- `geometry` (coordenadas proyectadas, Cartesian)
- `geography` (coordenadas geográficas, lat/lon en elipsoide)

**Uso común:**
- Infraestructura Microsoft (Windows Server environment)
- Integración con SharePoint, .NET applications
- Azure SQL Database (cloud)

### 3.2 Conexión FDO a SQL Server

**Prerequisites:**
- SQL Server accesible en red
- Integrated security o SQL authentication

**Procedimiento:**

1. **Data Connect:**
   - Provider: **SQL Server Spatial**

2. **Connection:**
   - **Server:** `servername\instance` (ej: `SQLSERVER01\MSSQLSERVER`)
   - **Authentication:**
     - **Windows Authentication** (integrated)
     - O **SQL Server Authentication** (username/password)
   - **Database:** Database name

3. **Test Connection** → Connect

### 3.3 Tipos Geometry vs Geography

**En Display Manager:**
- Map 3D detecta automáticamente si columna es `geometry` o `geography`
- `geometry`: Coordenadas proyectadas (UTM, State Plane, etc.)
- `geography`: Coordenadas geográficas (WGS84 lat/lon)

## 4. Performance Optimization

### 4.1 Spatial Indexes

**Spatial indexes** aceleran queries espaciales (intersect, within distance, etc.) en databases.

**PostgreSQL/PostGIS:**
```sql
CREATE INDEX idx_geom ON water_lines USING GIST (geom);
```

**Oracle Spatial:**
```sql
CREATE INDEX idx_sdo_geom ON water_lines(geometry)
INDEXTYPE IS MDSYS.SPATIAL_INDEX;
```

**SQL Server:**
```sql
CREATE SPATIAL INDEX idx_geom ON water_lines(geom);
```

**Efecto:** Queries que antes tomaban minutos ahora toman segundos.

### 4.2 Limitar Extent en Map 3D

**Display Manager > Feature Class > Boundary Template:**
1. Define área de interés (bounding box)
2. Solo carga features dentro del extent
3. Performance mejorado dramáticamente

**Query filters:**
- Apply filtros SQL: `WHERE diameter > 12`
- Reduce features cargados

### 4.3 Scale Ranges

**Use scale ranges** para evitar cargar millones de features cuando estás zoomed out:
- Parcels: Solo visibles < 1:10000
- Hidrantes: Solo visibles < 1:5000

## 5. Workflow Integrado: CAD + Database

### 5.1 Escenario Típico

**Infrastructure asset management:**
1. **Database PostgreSQL** mantiene inventario completo de assets (tuberías, válvulas, hidrantes)
2. **Multiple users** editan via QGIS, web apps, mobile apps
3. **Ingeniero CAD** en Map 3D:
   - Conecta FDO a PostgreSQL (read-only o read-write)
   - Visualiza infraestructura existente
   - Diseña expansión nueva en CAD
   - Cuando aprobado, INSERT nuevo diseño a database

### 5.2 Versioning y Concurrency

**PostgreSQL:**
- Transactions automáticas
- Row-level locking (múltiples users pueden editar diferentes features simultáneamente)

**Oracle Spatial:**
- Workspace Manager para versioning complejo (branches, merges)

**Best practice:**
- Coordinación de equipo para evitar conflictos
- Use read-only connections para reference data

## Ejercicio Práctico

### Ejercicio 2.1: Conexión a PostgreSQL/PostGIS

**Objetivo:** Conectar a database PostgreSQL, explorar datos, agregar features.

**Prerequisito:**
- Acceso a PostgreSQL server (instructor proveerá credenciales)
- O instala PostgreSQL localmente (Docker)

**Instrucciones:**

1. **Conectar:**
   - Data Connect > PostgreSQL
   - Service: `[instructor_server]:5432`
   - Username: `student`
   - Password: `[provided]`
   - Database: `gis_training`
   - Name: `Training_PostGIS`
   - Connect

2. **Explorar:**
   - Data Sources > Expande Training_PostGIS
   - Expande schema `public`
   - Right-click en `city_parcels` > **Schema**
   - Anota: Geometry type, columns

3. **Visualizar:**
   - Add `city_parcels` to Display
   - Add `water_lines` to Display
   - Verificar alineación

4. **Edit (si permisos write):**
   - Selecciona un parcel
   - Edita atributo (ej: Zoning)
   - Cambio se guarda en PostgreSQL
   - Verifica en QGIS

**Entregable:**
- Screenshot de Data Sources con conexión
- Screenshot de features visualizadas
- Notas de schema de `city_parcels`

**Tiempo:** 25 minutos

## Evaluación

1. **¿Qué extensión se requiere en PostgreSQL para datos espaciales?**
   - a) PostSQL
   - b) PostGIS
   - c) GeoSQL
   - d) SpatialDB

2. **¿Qué parámetro especifica el servidor en conexión PostgreSQL?**
   - a) Hostname
   - b) Service
   - c) Connection String
   - d) URL

3. **¿Qué tipo de index acelera queries espaciales en databases?**
   - a) B-Tree Index
   - b) Hash Index
   - c) Spatial Index (GIST/R-Tree)
   - d) Unique Index

4. **En SQL Server, ¿qué tipo de dato usarías para coordenadas proyectadas?**
   - a) geography
   - b) geometry
   - c) spatial
   - d) coordinate

5. **¿Ediciones en Map 3D a datos FDO de database se guardan?**
   - a) No, solo lectura
   - b) Sí, si provider soporta write y tienes permisos
   - c) Solo al exportar
   - d) Solo con MAPIMPORT

**Respuestas:** 1-b, 2-b, 3-c, 4-b, 5-b

## Recursos Adicionales

- [PostGIS Documentation](https://postgis.net/documentation/)
- [Oracle Spatial Developer Guide](https://docs.oracle.com/en/database/oracle/oracle-database/21/spatl/)
- [SQL Server Spatial Reference](https://learn.microsoft.com/en-us/sql/relational-databases/spatial/spatial-data-sql-server)

## Resumen

- ✅ **PostgreSQL/PostGIS** = Open-source, excelente performance, estándar GIS
- ✅ **Oracle Spatial** = Enterprise, infraestructura Oracle existente
- ✅ **SQL Server** = Microsoft ecosystem, geometry/geography types
- ✅ **FDO providers** conectan directamente sin conversión
- ✅ **Spatial indexes** críticos para performance
- ✅ **Edit capabilities** según permisos y provider

**Siguiente:** [Lección 3 - Spatial Queries](leccion-3.md)
