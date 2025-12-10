# Ejercicios Prácticos - Módulo 4

## Introducción

**6 ejercicios finales** que consolidan habilidades de cartografía profesional: map books, legends, coordinate grids, plot styles, y publicación georeferenciada.

**Tiempo total:** 3-4 horas

---

## Ejercicio 1: Create Map Book - Water System Atlas

### Escenario
Create 9-sheet atlas de water distribution system para city engineer.

### Objetivos
- Define tile grid (3×3)
- Setup map template
- Generate 9 sheets automáticamente
- Create index map

### Instrucciones

1. **Define Coverage Area:**
   - Import `city_boundary.shp`
   - Determine bounding box

2. **Create Tile Grid:**
   - Método manual: RECTANGLE + ARRAY
   - 3 rows × 3 columns = 9 tiles
   - Tile size: 2000m × 2000m (adjust según area)
   - Create Object Data: `SheetNumber` (1-9), `SheetName` ("NW", "N", "NE", etc.)

3. **Create Template Layout:**
   - Title block con fields: Project, Sheet #, Date
   - Viewport: Locked scale 1:5000
   - Legend placeholder
   - Scale bar
   - North arrow

4. **Generate Sheets:**
   - Use MAP BOOK tool (o manual: duplicate layout 9 times)
   - Each viewport zooms to tile extent
   - Title block populated con SheetNumber

5. **Index Map:**
   - Create separate layout
   - Show all 9 tiles con labels
   - Highlight which sheet is which

**Entregable:**
- DWG con 10 layouts (9 sheets + index)
- Multi-page PDF

**Tiempo:** 50 min

---

## Ejercicio 2: Professional Map - Complete Cartography

### Escenario
Create single professional map con todos los elementos cartográficos standard.

### Objetivos
- Auto-generate legend
- Dynamic scale bar
- North arrow
- Coordinate grid
- Cartographic text (title, sources, disclaimer)

### Instrucciones

1. **Prepare Data:**
   - Water mains (thematic style por diameter)
   - Valves (individual values por type)
   - Parcels (light gray background)

2. **Create Layout:**
   - ANSI D (24×36") landscape
   - Title block

3. **Generate Legend:**
   - Display Manager > Create Legend
   - Feature classes: Water mains, Valves
   - Position: Bottom-left

4. **Scale Bar:**
   - Insert dynamic scale bar
   - Intervals: 0, 500, 1000, 1500 (meters)
   - Link to viewport

5. **North Arrow:**
   - Insert block
   - Position: Top-right

6. **Coordinate Grid:**
   - UTM Zone 15N grid
   - Interval: 1000m
   - Labels en edges

7. **Cartographic Text:**
   - Title: "City Water Distribution System"
   - Subtitle: "Sheet 1 of 1"
   - Source: "City GIS Dept, 2024"
   - CS: "UTM Zone 15N, WGS84"
   - Disclaimer: "For planning purposes only"
   - Date: Current date

8. **Plot Preview:** Verify todo es legible

**Entregable:**
- Layout screenshot
- PDF export

**Tiempo:** 45 min

---

## Ejercicio 3: Coordinate Grid Mastery

### Escenario
Create map con diferentes grid types para comparar.

### Objetivos
- UTM grid (metric)
- State Plane grid (US Survey Feet)
- Lat/Lon graticule
- Understand cuando usar cada uno

### Instrucciones

1. **Create 3 Layouts:**
   - Layout A: UTM Grid
   - Layout B: State Plane Grid
   - Layout C: Lat/Lon Graticule

2. **Layout A - UTM Grid:**
   - Same data (water system)
   - Grid: UTM Zone 15N
   - Interval: 500m
   - Labels: Easting (650000mE), Northing (3350000mN)
   - Style: Light gray lines, black labels

3. **Layout B - State Plane:**
   - Grid: Texas South Central
   - Interval: 2000ft
   - Labels: Show últimos 4 digits (ej: "5000" for "3105000")
   - Style: Similar a UTM

4. **Layout C - Graticule:**
   - Grid: Lat/Lon
   - Interval: 1' (minute)
   - Labels: DMS format (30°15'30"N)
   - Style: Dashed lines para meridians/parallels

5. **Comparison Table:**
   - Create table comparing:
     - Grid type
     - Units
     - Best use case
     - Precision

**Entregable:**
- 3 layouts
- Comparison table (text o Excel)

**Tiempo:** 40 min

---

## Ejercicio 4: Plot Style Configuration

### Escenario
Configure CTB para B&W printing de infrastructure maps.

### Objetivos
- Create custom CTB
- Map colors to lineweights
- Apply screening
- Test print output

### Instrucciones

1. **Create CTB:**
   - STYLESMANAGER
   - New CTB: `Infrastructure_BW.ctb`

2. **Configure Mapping:**
   - Color 1 (Red - Proposed): Black, 0.70mm, 100%
   - Color 2 (Yellow - Priority): Black, 0.50mm, 100%
   - Color 3 (Green - Good condition): Black, 0.35mm, 100%
   - Color 4 (Cyan - Water): Black, 0.50mm, 100%
   - Color 6 (Magenta - Sewer): Black, 0.50mm, 100%
   - Color 8 (Gray - Existing): Black, 0.25mm, 50% screening
   - Color 9 (Lt Gray - Reference): Black, 0.18mm, 25% screening

3. **Assign to Layouts:**
   - All map book sheets use `Infrastructure_BW.ctb`

4. **Test Plot:**
   - PLOT to PDF
   - Preview: Verify lineweights visible
   - Verify screening creates gray tones

5. **Create Digital Version:**
   - CTB: `Infrastructure_Color.ctb`
   - All colors plot as object color
   - Thinner lineweights (better on screen)

**Entregable:**
- 2 CTB files
- Sample plot (B&W PDF + Color PDF)

**Tiempo:** 35 min

---

## Ejercicio 5: Georeferenced PDF Export

### Escenario
Export map book a georeferenced PDF para field use con GPS tablets.

### Objetivos
- Enable georeferencing en PDF
- Verify coordinates embebidas
- Test en mobile app (Avenza Maps)

### Instrucciones

1. **Verify Drawing CS:**
   - Display Manager > Drawing CS debe estar asignado
   - Example: UTM Zone 15N, WGS84 (EPSG:32615)

2. **Export to PDF:**
   - EXPORTPDF (o PUBLISH)
   - Options:
     - ✅ Include Geospatial Data
     - ✅ Include layer information
   - Output: `Water_System_Georeferenced.pdf`

3. **Verify en Adobe Acrobat Pro:**
   - Open PDF
   - Tools > Measure > Geospatial Location Tool
   - Click en known feature
   - Verify coordinates match expected values

4. **Test en Avenza Maps (opcional):**
   - Install Avenza Maps app (iOS/Android)
   - Import PDF
   - App should recognize georeferencing
   - View current GPS location on map

5. **Multi-Sheet Georeferenced PDF:**
   - PUBLISH todos los 9 sheets
   - Each page georeferenced
   - Output: `Atlas_Georeferenced.pdf`

**Entregable:**
- Georeferenced PDF (single + multi-sheet)
- Screenshot de Acrobat Pro mostrando coordinates
- (Opcional) Screenshot de Avenza Maps

**Tiempo:** 30 min

---

## Ejercicio 6: Proyecto Final Integrador

### Escenario
**Comprehensive deliverable** combinando TODAS las habilidades del curso (Módulos 1-4).

### Objetivos
Complete professional cartographic package para client que incluye:
- Data integration (Módulo 1)
- Spatial analysis (Módulo 2)
- Workflow coordination (Módulo 3)
- Professional cartography (Módulo 4)

### Project Brief

**Client:** City Public Works Department

**Request:** "Analyze proposed water main extension serving new subdivision. Provide maps showing:
1. Existing infrastructure + proposed extension
2. Parcels impacted (construction easements needed)
3. Conflict analysis (crossings con other utilities)
4. Map book (4 sheets) para construction crews"

### Deliverables Required

1. **Analysis Report Map:**
   - Existing water mains (thematic por age)
   - Proposed extension (highlighted)
   - Buffer analysis (50ft construction zone)
   - Parcels within buffer (highlighted)
   - Conflicts con electric/gas utilities (marked)

2. **Construction Map Book (4 Sheets):**
   - Sheet 1-4: Construction sequence
   - Tile grid covering project area
   - Scale: 1:1200 (engineering scale)
   - Coordinate grid (State Plane)

3. **Each Map Includes:**
   - Legend
   - Scale bar
   - North arrow
   - Title block (project name, sheet #, date)
   - Coordinate grid
   - Notes (construction zones, conflicts)

4. **Deliverable Package:**
   - DWG source files
   - Georeferenced PDF (multi-sheet)
   - DWF for markup/review
   - README con metadata

### Workflow

**Phase 1: Data Integration (Módulo 1)**
1. Import existing utilities (SHP files)
2. Import parcels (geodatabase)
3. Assign coordinate system (State Plane Texas SC)
4. Create proposed extension (PLINE)
5. Add Object Data (diameter, material, etc.)

**Phase 2: Analysis (Módulo 2)**
1. Buffer analysis: 50ft around proposed line
2. Overlay: Identify parcels within buffer
3. Spatial query: Find utility conflicts (intersections)
4. Calculate statistics (# parcels, length conflicts)

**Phase 3: Coordination (Módulo 3)**
1. Export analysis results a Shapefile (para GIS analyst)
2. If Civil 3D available: Export surface
3. Bulk copy data a project coordinate system

**Phase 4: Cartography (Módulo 4)**
1. Create map book template
2. Generate 4 construction sheets
3. Add legends, scale bars, north arrows
4. Configure plot style (B&W for field printing)
5. Export georeferenced PDF
6. Package deliverables

### Evaluation Criteria

- ✅ **Analysis correctness** (buffer, overlay, conflicts identified)
- ✅ **Cartographic quality** (professional appearance, complete elements)
- ✅ **Technical accuracy** (coordinate system, measurements)
- ✅ **Documentation** (README, metadata)
- ✅ **Deliverable organization** (folder structure, naming)

**Tiempo:** 2-3 horas

**Peso en evaluación:** 10% de nota final del curso

---

## Resumen Final

**¡FELICITACIONES!**

Has completado **24 horas de training** en AutoCAD Map 3D 2026:

**Módulo 1:** Fundamentos (6h)
**Módulo 2:** Análisis (6h)
**Módulo 3:** Workflows (6h)
**Módulo 4:** Cartografía (6h)

**Total ejercicios prácticos:** 24 ejercicios + 1 proyecto final

**Habilidades dominadas:**
- ✅ GIS/CAD integration
- ✅ Spatial analysis
- ✅ Network topology
- ✅ Professional cartography
- ✅ Data interchange (ArcGIS, Civil 3D)

**Certificación:**
Al completar con 80%+:
- **Certificado DISTMAH ATC - AutoCAD Map 3D 2026**
- Digital badge LinkedIn
- Elegibilidad para Autodesk Certification

**Próximos pasos:**
1. Submit proyecto final
2. Recibir feedback del instructor
3. Obtener certificado
4. ¡Aplicar en proyectos reales!

---

**Gracias por completar este curso intensivo.**

**DISTMAH ATC - Authorized Training Center**
*"Transformando profesionales CAD en expertos GIS/CAD desde 2010"*

**Contacto:**
- Email: soporte@distmah.com
- Web: www.distmah.com
- Tel: [Número de contacto]

**Síguenos:**
- LinkedIn: DISTMAH Training
- YouTube: DISTMAH ATC Tutorials
- Twitter: @DISTMAH_ATC
