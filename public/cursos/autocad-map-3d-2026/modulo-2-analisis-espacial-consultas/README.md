# Módulo 2: Análisis Espacial y Consultas

## Descripción del Módulo

Este módulo eleva tus habilidades de Map 3D desde visualización básica a **análisis geoespacial profesional**. Aprenderás a realizar consultas espaciales complejas, gestionar atributos con Object Data, conectar a bases de datos empresariales, crear topologías, y realizar análisis de redes. Estas son las herramientas que diferencian un usuario CAD de un profesional GIS/CAD integrado.

## Objetivos de Aprendizaje

Al completar este módulo, serás capaz de:

- Crear y gestionar Object Data tables para atributos alfanuméricos
- Conectar AutoCAD Map 3D a bases de datos empresariales (Oracle, PostgreSQL, SQL Server)
- Realizar consultas espaciales (buffers, overlays, proximity analysis)
- Crear y validar topologías para análisis de relaciones espaciales
- Realizar análisis de redes (network analysis) básico
- Crear mapas temáticos avanzados con estilos basados en consultas

## Duración

**6 horas** (6 lecciones de 1 hora cada una)

## Requisitos Previos

- Módulo 1 completado (fundamentos de Map 3D, coordinate systems, FDO)
- Conocimiento de SQL básico (SELECT, WHERE) - recomendado
- Comprensión de conceptos de base de datos relacionales - recomendado

## Contenido del Módulo

### Lección 1: Object Data y Extended Entity Data
**Duración:** 1 hora

Gestión de atributos alfanuméricos en objetos CAD mediante Object Data tables. Crear, attach, edit y query object data para workflows GIS/CAD profesionales.

**Temas clave:**
- Object Data vs Extended Entity Data (XData)
- Crear Object Data tables y definir campos
- Attach Object Data a objetos CAD
- ODETABLE para edición masiva
- Export Object Data a Shapefile

### Lección 2: Data Connect - Conexión a Bases de Datos
**Duración:** 1 hora

Conectar Map 3D a bases de datos empresariales (Oracle Spatial, PostgreSQL/PostGIS, SQL Server) para acceso directo a datos corporativos sin duplicación.

**Temas clave:**
- Configurar conexión a PostgreSQL/PostGIS
- Configurar conexión a Oracle Spatial
- Configurar conexión a SQL Server con tipos espaciales
- Read/Write operations en databases
- Performance optimization con spatial indexes

### Lección 3: Spatial Queries (Buffers, Overlays, Proximity)
**Duración:** 1 hora

Realizar análisis espaciales: crear buffers, overlays (intersect, union, difference), proximity analysis para responder preguntas geoespaciales complejas.

**Temas clave:**
- Buffer analysis (fixed distance, variable distance)
- Overlay analysis (intersect, union, difference, clip)
- Proximity analysis (nearest neighbor, within distance)
- Query Builder interface
- Save y reutilizar queries

### Lección 4: Topology y Relaciones Espaciales
**Duración:** 1 hora

Crear topologías para definir y validar relaciones espaciales entre features (conectividad, containment, adjacency). Esencial para análisis de redes y validación de datos.

**Temas clave:**
- Conceptos de topología (nodes, edges, faces)
- Crear topologías en Map 3D
- Validar topología (find gaps, overlaps, dangles)
- Topological editing
- Topology para redes (water, sewer, electrical)

### Lección 5: Análisis de Red (Network Analysis)
**Duración:** 1 hora

Análisis de redes de infraestructura (agua, alcantarillado, electricidad): tracing, shortest path, network connectivity, flow direction.

**Temas clave:**
- Crear network topology
- Trace upstream/downstream
- Find connected features
- Shortest path analysis
- Network validation (isolated features, loops)

### Lección 6: Thematic Mapping y Estilos Avanzados
**Duración:** 1 hora

Crear mapas temáticos profesionales con estilos basados en consultas, expresiones complejas, y visualización de resultados de análisis.

**Temas clave:**
- Estilos basados en expresiones SQL
- Mapas temáticos multivariable
- Graduated symbols (tamaño proporcional a valor)
- Heat maps (density visualization)
- Label styles y annotation

## Estructura de Cada Lección

Cada lección incluye:

1. **Objetivos de Aprendizaje** - Metas específicas y medibles
2. **Introducción** - Contexto profesional y aplicaciones
3. **Contenido Técnico** - Explicación detallada con procedimientos
4. **Ejemplos Prácticos** - Casos de uso reales
5. **Ejercicio Práctico** - Actividad hands-on
6. **Evaluación** - 5 preguntas de verificación
7. **Recursos Adicionales** - Enlaces y referencias
8. **Resumen** - Puntos clave

## Ejercicios Prácticos

Al final del módulo encontrarás **6 ejercicios integradores** que combinan los conocimientos adquiridos en escenarios profesionales reales:

1. Gestión de atributos de infraestructura con Object Data
2. Conexión a base de datos corporativa PostgreSQL para análisis de activos
3. Buffer analysis para determinar parcelas en zona de inundación
4. Overlay analysis para identificar conflictos entre utilities
5. Crear y validar topología de red de agua potable
6. Network tracing para identificar áreas afectadas por cierre de válvula

## Evaluación del Módulo

- **Ejercicios prácticos:** 60%
- **Evaluaciones de lección:** 30%
- **Proyecto integrador:** 10%

**Criterio de aprobación:** 80% o superior

## Recursos Necesarios

### Software
- AutoCAD 2026 con Map 3D Toolset
- PostgreSQL 14+ con PostGIS 3+ (para ejercicios de database)
  - O acceso a servidor PostgreSQL de instructor
- QGIS (para validación de resultados)

### Datos de Práctica
- Red de agua potable con topología (proporcionado)
- Base de datos de parcelas e infraestructura (proporcionado)
- Shapefiles de utilities múltiples (proporcionado)

### Material de Referencia
- AutoCAD Map 3D Analysis Guide
- PostGIS documentation
- Spatial SQL reference

## Preparación para el Módulo 3

Una vez completado este módulo, estarás preparado para el **Módulo 3: Workflows Profesionales GIS/CAD**, donde integrarás Map 3D con ArcGIS, Civil 3D, y otros sistemas empresariales.

## Soporte

Si tienes dudas durante el módulo:
- Consulta con el instructor durante las sesiones
- Revisa los recursos adicionales en cada lección
- Utiliza el foro del curso (disponible en plataforma DISTMAH)
- Soporte técnico: soporte@distmah.com

---

**DISTMAH ATC - Authorized Training Center**
*Excelencia en capacitación Autodesk desde 2010*
