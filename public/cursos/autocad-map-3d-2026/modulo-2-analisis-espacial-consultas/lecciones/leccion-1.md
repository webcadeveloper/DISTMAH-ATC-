# Lección 1: Object Data y Extended Entity Data

## Objetivos de Aprendizaje

- ✅ Comprender diferencia entre Object Data y Extended Entity Data
- ✅ Crear Object Data tables con campos personalizados
- ✅ Attach Object Data a objetos CAD
- ✅ Editar Object Data masivamente con ODETABLE
- ✅ Exportar Object Data a Shapefile

## Introducción

**Object Data** es el sistema de Map 3D para almacenar atributos alfanuméricos (texto, números, fechas) asociados a objetos CAD. Es esencial para workflows GIS/CAD porque permite que objetos de AutoCAD (líneas, polígonos, puntos) tengan atributos como parcelas GIS (Owner, Area, Zoning) o tuberías (Diameter, Material, InstallDate).

**Aplicaciones profesionales:**
- Tuberías con atributos: diámetro, material, presión, fecha de instalación
- Parcelas catastrales: propietario, área, zonificación, valor fiscal
- Edificios: altura, uso, año de construcción, ocupantes
- Calles: nombre, clasificación, ancho, pavimento

## 1. Object Data vs Extended Entity Data

| Feature | Object Data | Extended Entity Data (XData) |
|---------|-------------|------------------------------|
| **Estructura** | Tablas relacionales (como database) | Datos clave-valor sin estructura |
| **Capacidad** | Sin límite práctico | Limitado a 16 KB por objeto |
| **Edición** | ODETABLE (interface tabular) | Solo programáticamente (LISP/VBA) |
| **Export** | Se exporta a SHP, database | No se exporta fácilmente |
| **Uso recomendado** | GIS attributes, datos estructurados | Metadata técnico interno |

**Recomendación:** Usa **Object Data** para todos los atributos GIS profesionales.

## 2. Crear Object Data Table

### 2.1 Comando ADEDEFINEDATA

1. Comando: `ADEDEFINEDATA`
2. Dialog: **Define Object Data**
3. Click **Define** (crear nueva tabla)

### 2.2 Definir Tabla

**Table Name:** `Pipeline_Attributes` (sin espacios, use underscore)

**Add Fields:**

| Field Name | Data Type | Width/Precision | Example |
|------------|-----------|-----------------|---------|
| Diameter | Real | - | 12.5 |
| Material | Character | 20 | "PVC" |
| InstallDate | Date | - | 2024-01-15 |
| Pressure | Integer | - | 60 |
| Status | Character | 10 | "Active" |

**Tipos de datos:**
- **Character:** Texto (requiere width: longitud máxima)
- **Real:** Números decimales
- **Integer:** Números enteros
- **Date:** Fechas

Click **OK** para crear la tabla.

## 3. Attach Object Data

### 3.1 Comando ADEATTACHDATA

1. **Selecciona objetos** CAD (líneas de tubería)
2. Comando: `ADEATTACHDATA`
3. **Select Object Data Table:** `Pipeline_Attributes`
4. Dialog muestra campos vacíos
5. **Ingresa valores:**
   - Diameter: `12`
   - Material: `PVC`
   - InstallDate: `2024-01-15`
   - Pressure: `60`
   - Status: `Active`
6. Click **OK**

**Resultado:** Object Data ahora está asociado a los objetos seleccionados.

### 3.2 Verificar Object Data

**Selecciona objeto** y comando: `ADEVIEWDATA`
- Muestra todas las tablas de Object Data attachadas
- Edita valores si es necesario

## 4. ODETABLE - Edición Masiva

### 4.1 Abrir Object Data Table

Comando: `ODETABLE`

Dialog muestra:
- **Table:** Selecciona `Pipeline_Attributes`
- **Display:** All records o Query (filtro)

Click **OK** → Abre tabla en ventana spreadsheet

### 4.2 Editar en la Tabla

**Funcionalidad:**
- **Sort:** Click en header de columna
- **Filter:** Define expresiones (ej: `Diameter > 10`)
- **Edit:** Click en celda, modifica valor, ENTER
- **Multi-select:** Selecciona filas, edit applies to all

**Ejemplo workflow:**
1. ODETABLE
2. Sort por "Diameter" (descendente)
3. Selecciona todas las tuberías Diameter > 12
4. Cambia Status = "Priority_Inspection"
5. Save cambios

### 4.3 Add Object Data a Objetos Sin Atributos

En ODETABLE:
1. Click **Add Row**
2. Se abre pick mode en drawing
3. **Selecciona objeto** CAD
4. Ingresa datos en la nueva fila
5. Object Data se attacha automáticamente

## 5. Export Object Data a Shapefile

### 5.1 MAPEXPORT con Object Data

1. **Selecciona objetos** con Object Data
2. Comando: `MAPEXPORT`
3. **Export to:** ESRI Shapefile
4. **Attribute Options:**
   - ✅ **Export Object Data as attributes**
   - Selecciona tabla: `Pipeline_Attributes`
5. **File:** `pipelines_with_attributes.shp`
6. Export

### 5.2 Verificar en QGIS

1. Abre QGIS
2. Add Layer > `pipelines_with_attributes.shp`
3. Right-click > **Attribute Table**
4. Verifica que columnas (Diameter, Material, etc.) aparecen con valores correctos

**Resultado:** Shapefile tiene atributos exportados desde Object Data.

## 6. Mejores Prácticas

### 6.1 Nomenclatura de Tablas

- **Prefijo consistente:** `OD_` para Object Data tables
  - Ejemplo: `OD_Pipelines`, `OD_Parcels`, `OD_Buildings`
- **Sin espacios:** Usa underscores
- **Descriptivo:** Nombre indica contenido

### 6.2 Diseño de Fields

- **Character width:** Suficientemente grande (ej: 50 para nombres, 20 para códigos)
- **Use Integer vs Real:** Integer para IDs, códigos; Real para mediciones
- **Standardize values:** Para campos categóricos (Material: "PVC", "Iron", "Copper" - siempre mismo spelling)

### 6.3 Performance

- **No crear demasiadas tablas:** Consolida atributos relacionados
- **Index importante:** Para queries rápidas (tema avanzado, databases)

## Ejercicio Práctico

### Ejercicio 1.1: Gestión de Atributos de Parcelas

**Objetivo:** Crear Object Data table para parcelas catastrales, attach atributos, editar masivamente.

**Instrucciones:**

1. **Crear tabla:**
   - ADEDEFINEDATA > Define
   - Name: `Parcel_Attributes`
   - Fields:
     - `ParcelID` (Character, 15)
     - `Owner` (Character, 50)
     - `Area_sqft` (Real)
     - `Zoning` (Character, 10)
     - `TaxValue` (Real)

2. **Dibujar parcelas:**
   - Comando: RECTANGLE
   - Dibuja 5 polígonos representando parcelas

3. **Attach Object Data:**
   - Selecciona cada parcela
   - ADEATTACHDATA > `Parcel_Attributes`
   - Ingresa datos ficticios:
     - Parcel 1: ID=001, Owner="John Smith", Area=5000, Zoning="R-1", TaxValue=250000
     - Parcel 2: ID=002, Owner="Jane Doe", Area=7500, Zoning="R-2", TaxValue=350000
     - (etc.)

4. **Editar masivamente:**
   - ODETABLE
   - Selecciona parcelas con Zoning="R-1"
   - Cambia TaxValue += 10% (multiplica valores por 1.1)

5. **Export:**
   - MAPEXPORT > Shapefile
   - Export Object Data
   - File: `parcels_with_attributes.shp`

**Entregable:**
- Drawing con parcelas y Object Data
- Shapefile exportado
- Screenshot de ODETABLE

**Tiempo:** 20 minutos

## Evaluación

1. **¿Qué comando crea Object Data tables?**
   - a) ODETABLE
   - b) ADEDEFINEDATA
   - c) ADEATTACHDATA
   - d) MAPIMPORT

2. **¿Cuál data type usarías para "Diameter" de tubería?**
   - a) Character
   - b) Integer
   - c) Real
   - d) Date

3. **¿Qué comando permite edición masiva de Object Data?**
   - a) ADEVIEWDATA
   - b) ODETABLE
   - c) ADEDEFINEDATA
   - d) Properties

4. **¿Object Data se exporta automáticamente a Shapefile?**
   - a) Sí, siempre
   - b) No, nunca
   - c) Solo si seleccionas "Export Object Data" en MAPEXPORT
   - d) Solo para ciertos field types

5. **¿Cuál es la ventaja de Object Data vs Extended Entity Data?**
   - a) Más rápido
   - b) Estructura tabular, edición fácil, export a GIS
   - c) Ocupa menos espacio
   - d) No hay ventaja

**Respuestas:** 1-b, 2-c, 3-b, 4-c, 5-b

## Recursos Adicionales

- [Object Data Guide - Autodesk](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-object-data)
- [Best Practices for Attribute Management](https://knowledge.autodesk.com/support/autocad-map-3d)

## Resumen

- ✅ **Object Data** = Tablas relacionales para atributos GIS en objetos CAD
- ✅ **ADEDEFINEDATA** crea tablas, **ADEATTACHDATA** asigna datos a objetos
- ✅ **ODETABLE** permite edición masiva tipo spreadsheet
- ✅ **Export a SHP** incluye Object Data como atributos
- ✅ **Use casos:** Infraestructura, catastro, gestión de activos

**Siguiente:** [Lección 2 - Data Connect a Bases de Datos](leccion-2.md)
