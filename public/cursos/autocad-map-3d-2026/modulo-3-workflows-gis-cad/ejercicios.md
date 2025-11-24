# Ejercicios Prácticos - Módulo 3

## Introducción

**6 ejercicios integradores** que consolidan workflows profesionales GIS/CAD con ArcGIS, MapInfo, Civil 3D, y técnicas avanzadas de data management.

**Tiempo total:** 3-4 horas

---

## Ejercicio 1: Export a ArcGIS Geodatabase

### Escenario
GIS Analyst requiere datos de water infrastructure en File Geodatabase para enterprise GIS system.

### Objetivos
- Export Map 3D data a Shapefile preservando attributes
- Organize para import a Geodatabase
- Validate en ArcGIS Pro/Desktop

### Instrucciones

1. **Prepare Data:** Water mains, valves, service connections con Object Data
2. **Export cada feature class a Shapefile:**
   - MAPEXPORT > SHP
   - Export Object Data: ✅
   - Coordinate System: Verify same CS para todos
3. **Test en ArcGIS:**
   - Add Shapefiles a ArcGIS
   - Verify geometry + attributes
4. **Create Geodatabase (en ArcGIS):**
   - New File Geodatabase
   - Import Shapefiles a feature classes
5. **Deliverable:** Package .gdb + documentation

**Tiempo:** 40 min

---

## Ejercicio 2: MapInfo TAB Collaboration

### Escenario
Surveyor (MapInfo user) needs updated parcels. You must export TAB file con latest edits.

### Objetivos
- Export parcels a MapInfo TAB
- Verify en MapInfo Professional
- Round-trip: Import surveyor's edits back

### Instrucciones

1. **Export a TAB:**
   - MAPEXPORT > MapInfo TAB
   - Select parcels con Object Data
   - File: `parcels_updated.tab`
2. **Verify en MapInfo:** Open .tab, verify attributes
3. **Simulate Survey Edits:** Edit 3 parcels en MapInfo (cambiar attributes)
4. **Re-import a Map 3D:**
   - MAPIMPORT > TAB
   - Verify edits aparecen
5. **Compare:** Before vs After Object Data

**Tiempo:** 30 min

---

## Ejercicio 3: Civil 3D Surface Exchange

### Escenario
Civil Engineer envía proposed grading surface (LandXML). Import a Map 3D para GIS analysis.

### Objetivos
- Import LandXML surface
- Create contours
- Analyze cut/fill volumes contra existing surface

### Instrucciones

1. **Import LandXML:**
   - MAPIMPORT > LandXML
   - Select Surface
   - Output: 3D faces o TIN
2. **Generate Contours:**
   - Comando: Surface tools (if available)
   - O export points, create contours en QGIS
3. **Analysis:**
   - Compare proposed vs existing elevations
   - Identify cut areas (proposed < existing)
   - Identify fill areas (proposed > existing)
4. **Report:** Volume estimates (cubic yards)

**Tiempo:** 45 min (requiere Civil 3D data)

---

## Ejercicio 4: Batch Bulk Copy - 20 Shapefiles

### Escenario
Received 20 Shapefiles en different coordinate systems. Standardize todo a UTM Zone 15N para project.

### Objetivos
- Batch transform 20 files
- Filter: Solo features con certain attributes
- Organize output

### Instrucciones

1. **Inventory:** List all 20 SHP files + CS de cada uno
2. **Setup:**
   - Data Connect a folder con all SHP
   - Verify all connections
3. **Batch Bulk Copy:**
   - Select all 20 feature classes
   - Destination: SHP
   - Destination CS: EPSG:32615 (UTM 15N)
   - Output folder: `C:\Output_UTM\`
   - Filter (optional): WHERE Diameter > 6 (para pipes)
4. **Execute**
5. **Validate:**
   - Open 5 random outputs en QGIS
   - Verify CS = UTM 15N
   - Verify .prj files correctos

**Tiempo:** 35 min

---

## Ejercicio 5: Parcel Fabric Topology

### Escenario
Cadastral database tiene errors. Create topology, validate, fix errors para ensure data quality.

### Objetivos
- Create parcel fabric topology
- Identify gaps, overlaps, unclosed polygons
- Fix mínimo 10 errors
- Generate clean dataset

### Instrucciones

1. **Import parcels:** `parcels_with_errors.shp`
2. **Create Topology:**
   - Name: `Cadastral_Topology`
   - Feature class: `parcels`
   - Rules:
     - Must not have gaps
     - Must not overlap
     - Must be closed
   - Tolerance: 0.01
3. **Validate:** Anota error counts
4. **Fix Errors:**
   - Gaps: Extend boundaries (shared boundary edit)
   - Overlaps: TRIM excess
   - Unclosed: CLOSE polylines
   - Fix 10 errors
5. **Re-validate:** Verify error count decreased
6. **Export Clean:** MAPEXPORT parcels_clean.shp

**Tiempo:** 45 min

---

## Ejercicio 6: Layer Standardization Project

### Escenario
50-layer drawing con inconsistent naming. Standardize según company standards.

### Objetivos
- Rename layers según [Discipline]-[Type]-[Detail]
- Create layer states (Existing, Proposed, Presentation)
- Create layer filters (by discipline)
- Save as template

### Instrucciones

1. **Audit Existing Layers:** List all 50 layers, identify issues
2. **Rename Layers:**
   - `water lines` → `C-WATR-MAIN`
   - `valves` → `C-WATR-VALV`
   - `parcels` → `S-PROP-BNDRY` (Survey-Property-Boundary)
   - (rename all 50)
3. **Create Layer States:**
   - **Existing_Only:** Freeze proposed layers
   - **Proposed_Only:** Freeze existing
   - **Presentation:** Show key layers only
4. **Create Layer Filters:**
   - `Water_Layers`: Name = `*WATR*`
   - `Sewer_Layers`: Name = `*SEWR*`
   - `Property_Layers`: Name = `*PROP*`
5. **Document:** Create layer standards PDF
6. **Save Template:** `Company_Infrastructure_Template.dwt`

**Tiempo:** 50 min

---

## Resumen

**Habilidades dominadas:**

- ✅ ArcGIS export/import workflows
- ✅ MapInfo TAB file exchange
- ✅ Civil 3D LandXML integration
- ✅ Batch data transformation
- ✅ Topology creation y validation
- ✅ Professional layer organization

**Próximo:** Módulo 4 - Cartografía y Documentación

---

**DISTMAH ATC - Authorized Training Center**
