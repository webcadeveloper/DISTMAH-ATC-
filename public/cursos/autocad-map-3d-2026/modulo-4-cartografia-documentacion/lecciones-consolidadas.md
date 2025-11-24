# Módulo 4: Lecciones Consolidadas - Cartografía y Documentación

**DISTMAH ATC - AutoCAD Map 3D 2026**

Lecciones finales del curso: creación de deliverables cartográficos profesionales.

---

# Lección 1: Map Books y Series de Mapas

## Objetivos
- ✅ Comprender concept de Map Books
- ✅ Definir tile grid (index features)
- ✅ Setup template layout
- ✅ Generate multiple sheets automáticamente

## 1. ¿Qué es un Map Book?

**Map Book:** Serie de mapas a misma escala cubriendo área grande, dividida en tiles (sheets).

**Use Cases:**
- **Atlas municipal:** 50 sheets cubriendo toda la ciudad
- **Utility as-builts:** 100 sheets de water system
- **Cadastral maps:** Parcel maps por township/section
- **Emergency response:** Grid-based maps para first responders

**Components:**
- **Index map:** Overview mostrando todos los tiles
- **Tile sheets:** Individual maps (Sheet 1, Sheet 2...)
- **Template:** Consistent layout (title block, legend, etc.)

## 2. Create Tile Grid

**Tile grid = Index polygons** que definen extent de cada sheet.

**Method 1: Manual Grid**

1. **Define tile size:**
   - Example: 1000m × 1000m tiles (para UTM)
   - Or: 3000ft × 3000ft (para State Plane)

2. **Create grid polygons:**
   - Comando: `RECTANGLE`
   - Draw first tile at origin
   - `ARRAY` comando → Rectangular array (ej: 4 rows × 4 columns)
   - Result: 16 tiles

3. **Add tile attributes:**
   - Create Object Data table: `Tile_Index`
   - Fields: `SheetNumber`, `SheetName`
   - Attach a cada tile polygon
   - Populate: Sheet 1, Sheet 2, ..., Sheet 16

**Method 2: Map 3D Grid Generator** (si disponible)

1. **MAP 3D > Tools > Generate Grid**
2. **Extent:** Define bounding box de area total
3. **Tile Size:** 1000 × 1000m
4. **Output:** Feature class con grid polygons
5. Auto-genera SheetNumber attributes

## 3. Setup Map Book Template

**Template = Layout (PAPER SPACE) con:**
- Title block
- Viewport (model space window)
- Legend
- Scale bar
- North arrow

**Procedure:**

1. **Layout tab (PAPER SPACE)**
2. **Title Block:**
   - Insert company title block (block o xref)
   - Attributes: Project Name, Sheet Number, Date, etc.

3. **Viewport:**
   - `MVIEW` comando
   - Size: Fits dentro de title block margin
   - Lock scale (ej: 1:1000)

4. **Legend, Scale Bar, North Arrow:**
   - Insert como blocks
   - Position outside viewport

5. **Save template:** `MapBook_Template.dwt`

## 4. Generate Map Book Sheets

**Map 3D puede automate sheet generation:**

**Workflow:**

1. **MAP BOOK comando** (o Task Pane > Tools)
2. **Select tile grid:** Feature class con index polygons
3. **Select template:** `MapBook_Template.dwt`
4. **Output:**
   - Create 1 layout per tile
   - Viewport zooms to tile extent
   - Title block populated con SheetNumber attribute
5. **Execute**

**Result:**
- 16 layouts (Sheet 1 - Sheet 16)
- Each viewport shows different area
- Ready to plot

**Batch Plot:**
- PUBLISH comando
- Select all layouts
- Output: Multi-page PDF o individual DWFs

## 5. Index Map

**Index map = Overview mostrando all tiles con labels.**

**Create:**
1. New layout: "Index Map"
2. Viewport: Zoom extents (muestra todo el grid)
3. Label cada tile con SheetNumber
4. Highlight current sheet (para each individual sheet map)

**Use:** Orientation - "You are here on Sheet 5"

---

# Lección 2: Legends, Scale Bars, North Arrows

## Objetivos
- ✅ Auto-generate legend desde Display Manager
- ✅ Dynamic scale bar
- ✅ North arrow placement
- ✅ Cartographic text

## 1. Leyendas Automáticas

**Legend:** Explica symbology (colors, patterns, symbols).

**Generate desde Display Manager:**

1. **Display Manager** > Right-click en feature class
2. **Create Legend**
3. **Legend dialog:**
   - Title: "Water Infrastructure"
   - Show: All style classes
   - Format: Vertical o Horizontal
4. **Insert en layout**

**Resultado:**
- Block con symbology + labels
- Updates automáticamente si cambias styles (re-generate)

**Manual Legend:**
- Cuando auto-legend no es suficiente
- Create custom blocks con lines/polygons de muestra
- Text labels

**Best Practices:**
- Legend en esquina de map (bottom-left típico)
- Font readable (mínimo 8pt en print)
- Group related items (todas las water features juntas)

## 2. Scale Bar

**Scale bar:** Graphic representation de map scale.

**Dynamic Scale Bar:**
- Updates cuando cambias viewport scale
- AutoCAD/Map 3D tiene tools

**Insert Scale Bar:**

1. **Ribbon: Annotate > Scale Bar** (o comando `SCALEBAR`)
2. **Type:** Bar, alternating, numeric
3. **Units:** Match drawing units (meters, feet)
4. **Intervals:** Ej: 0, 100, 200, 300 (meters)
5. **Place en layout**

**Link to Viewport:**
- Scale bar "knows" viewport scale
- Si cambias scale 1:1000 → 1:2000, bar updates

**Styles:**
- Simple bar (black/white alternating)
- Graduated bar (numbered)
- Dual units (meters + feet)

## 3. North Arrow

**North Arrow:** Indica orientation (norte geográfico).

**Types:**
- **True North:** Geográfico (hacia polo norte)
- **Grid North:** Paralelo a coordinate system grid
- **Magnetic North:** Compass north (varía por ubicación)

**Insert:**

1. **Insert Block:** North arrow block
   - AutoCAD ships con varios styles
   - O create custom

2. **Rotation:**
   - 0° si grid north = page top
   - Adjust si coordinate system rotated

3. **Position:** Típicamente top-right corner

**Declination Note:**
- Si usas Magnetic North: Add text "Magnetic Declination: 5°E (2024)"
- Declination varía por location + time

## 4. Cartographic Text

**Standard text elements:**

**Title:**
- Large, bold: "City Water Distribution System"
- Top-center de map

**Data Sources:**
- "Source: City GIS Department, 2024"
- Small text, bottom

**Disclaimer:**
- "This map is for planning purposes only. Not for legal boundary determination."
- Legal protection

**Date:**
- "Prepared: November 2024"
- Version control

**Coordinate System:**
- "Projection: UTM Zone 15N, WGS84 (EPSG:32615)"
- Critical para georeferencing

**Formatting:**
- Font: Arial, Helvetica (clean, readable)
- Size: Title 16pt, body 8-10pt, fine print 6pt
- Color: Black para print, puede ser color para digital

---

# Lección 3: Coordinate Grids y Graticules

## Objetivos
- ✅ UTM grid con labeling
- ✅ State Plane grid
- ✅ Lat/Lon graticule
- ✅ Grid formatting

## 1. ¿Por Qué Grids?

**Coordinate grids** permiten usuarios:
- Locate features por coordinate (ej: "Falla está en 650000E, 3350000N")
- Orient en maps grandes
- Reference points precisamente

**Types:**
- **Projected grids:** UTM, State Plane (X,Y en meters/feet)
- **Geographic graticules:** Lat/Lon (grados/minutos/segundos)

## 2. UTM Grid

**UTM grid:** Lines en intervals regulares (ej: cada 1000m).

**Create:**

1. **MAP 3D > Grids > Create Grid** (o comando `MAPGRID`)
2. **Grid Type:** UTM
3. **Zone:** 15N (match drawing CS)
4. **Interval:** 1000 (meters)
5. **Extent:** Viewport extent o custom
6. **Labels:**
   - Easting labels: Top + Bottom edges
   - Northing labels: Left + Right edges
   - Format: 650000mE, 3350000mN
7. **Style:**
   - Grid lines: Light gray, thin
   - Tick marks: Black, small
   - Labels: Black, 8pt

**Result:** Grid overlay en viewport.

**Uses:**
- Military/emergency maps (MGRS = Military Grid Reference System basado en UTM)
- Large-scale topographic maps

## 3. State Plane Grid

**Similar a UTM pero para State Plane coordinates.**

**Create:**
1. MAPGRID > State Plane
2. Zone: Texas South Central
3. Interval: 5000 feet (common for eng. drawings)
4. Labels: X=3100000ft, Y=10200000ft

**Note:** Labels son largos (millones de feet). Consider:
- Show solo últimos 3 digits: "100000" instead of "3100000"
- Or usar prefix: "X31-100" (zone 31, value 100,000)

## 4. Lat/Lon Graticule

**Graticule:** Grid de lat/lon (parallels + meridians).

**Create:**
1. MAPGRID > Geographic
2. Interval:
   - Large scale (1:50000): 1° intervals
   - Medium (1:100000): 30' (minutes)
   - Small (1:1000000): 5° intervals
3. Labels:
   - Latitude: 30°15'30"N
   - Longitude: 97°45'00"W
   - Format: DMS (degrees-minutes-seconds)

**Uses:**
- Navigation charts
- Atlas maps
- Global/regional maps

## 5. Grid Formatting Best Practices

**Visibility:**
- Grid lines: Subtle (light gray, thin)
- Not overpower map content

**Labeling:**
- Only on edges (no labels en middle de map)
- Readable font (8-10pt)
- Abbreviate large numbers

**Spacing:**
- Match map scale:
  - 1:1000 → 100m grid
  - 1:10000 → 1000m grid
  - 1:100000 → 10km grid

**Layer Management:**
- Grid en separate layer (easy to freeze)
- Plot last (on top) pero subtle color

---

# Lección 4: Plot Styles para Cartografía

## Objetivos
- ✅ CTB vs STB plot styles
- ✅ Lineweight mapping
- ✅ Screening para backgrounds
- ✅ Print vs Digital settings

## 1. CTB vs STB

**CTB (Color-Based Plot Style Table):**
- Basado en color de object
- Color 1 (Red) → Plots como Black, 0.5mm pen
- AutoCAD default

**STB (Named Plot Style Table):**
- Basado en style asignado a object
- Object tiene property "Plot Style = Heavy Line"
- Más flexible pero requiere setup

**For Cartography:** CTB típicamente más simple.

## 2. Create CTB for Mapping

**Workflow:**

1. **Comando:** `STYLESMANAGER`
2. **New CTB:** `Mapping_BW.ctb`
3. **Configure colors:**

| AutoCAD Color | Plot Color | Lineweight | Screening |
|---------------|------------|------------|-----------|
| 1 (Red) | Black | 0.50mm | 100% |
| 2 (Yellow) | Black | 0.35mm | 100% |
| 3 (Green) | Black | 0.25mm | 100% |
| 4 (Cyan) | Black | 0.18mm | 100% |
| 7 (White) | Black | 0.13mm | 100% |
| 8 (Gray) | Black | 0.13mm | 50% (screening) |
| 9 (Light Gray) | Black | 0.13mm | 25% |

4. **Save CTB**

**Assign to Layout:**
1. Layout properties
2. Plot Style Table: `Mapping_BW.ctb`

**Result:** Color drawing plots como black & white con weighted lines.

## 3. Screening (Transparencies)

**Screening = Lightness** of printed color.

**Uses:**
- **Background features:** 50% screening (appear gray)
- **Reference data:** 25% screening (very light)
- **Primary data:** 100% (full black)

**Example:**
- Existing infrastructure: 50% (gray)
- Proposed infrastructure: 100% (black)
- Parcels (context): 25% (light gray)

**Configure en CTB:**
- Color 8 → Screening: 50%
- Assign background features a Color 8

## 4. Print vs Digital Output

**Print (B&W):**
- CTB: Maps all colors to black con varied lineweights
- High contrast
- Pen widths: 0.13mm - 0.70mm

**Digital (Color PDF):**
- Use colors
- STB o CTB with "Plot Color = Use Object Color"
- Lineweights: Thinner (looks better on screen)

**Best Practice:**
- Create 2 CTBs: `Mapping_Print_BW.ctb` + `Mapping_Digital_Color.ctb`
- Switch según output

## 5. Plot Settings

**For professional cartographic output:**

**Page Setup:**
- Paper size: ANSI D (24×36"), A0 (841×1189mm)
- Orientation: Landscape típico para maps
- Plot area: Layout
- Scale: 1:1 (layout already scaled)

**Quality:**
- Resolution: 600 DPI (for print)
- Raster/vector: Vector preferred (crisp lines)
- Merge control: Yes (for overlapping lines)

**Output:**
- PDF: Adobe PDF (high quality)
- DWF: Autodesk Design Web Format
- Plotter: Configure for specific device

---

# Lección 5: Export to PDF/DWF con Georeferencing

## Objetivos
- ✅ Georeferenced PDF
- ✅ DWF export
- ✅ Multi-sheet PDF
- ✅ Optimization

## 1. Georeferenced PDF

**Georeferenced PDF:** Embed coordinate system info en PDF.

**Benefits:**
- Users can measure coordinates en PDF readers (Adobe, Avenza Maps)
- GPS apps puede import y display en correct location
- GIS software puede georeference automáticamente

**Export:**

1. **EXPORTPDF** comando (o PLOT to PDF)
2. **PDF Options:**
   - ✅ **Include Geospatial Data** (critical!)
   - Format: PDF/A (archival) o standard
3. **Coordinate System:**
   - Detected from drawing CS
   - Verify es correcto
4. **Execute**

**Verify Georeferencing:**
1. Open PDF en Adobe Acrobat Pro
2. Tools > Measure > Geospatial Location Tool
3. Click en map → Debe mostrar coordinates correctas

**Use Case:**
- Field workers con tablets/phones
- Import to Avenza Maps app
- Offline GPS navigation

## 2. DWF Export

**DWF (Design Web Format):** Autodesk format para viewing/markup (no editing).

**Benefits:**
- Smaller file size que PDF
- 3D support
- Markup tools (comments, redlines)
- Free viewer: Autodesk Design Review

**Export:**

1. **EXPORTDWF** comando
2. **Select layouts:** All o specific sheets
3. **Options:**
   - Include layer info: ✅
   - Include hyperlinks: ✅
4. **Output:** Single DWF o multi-sheet DWFx

**Use:**
- Internal review (engineering team)
- Markup/comments (Design Review software)
- Lightweight distribution

## 3. Multi-Sheet PDF

**Map Book → Single PDF con múltiples pages.**

**Method 1: PUBLISH Command**

1. **PUBLISH** comando
2. **Add layouts:** Sheet 1 - Sheet 16
3. **Publish to:** PDF
4. **Multi-sheet PDF:** ✅
5. **File:** `Water_System_Atlas.pdf`
6. **Publish**

**Result:** 16-page PDF, cada page = 1 sheet.

**Method 2: Batch Plot**

1. Select all layouts
2. PLOT each to separate PDF
3. Use Adobe Acrobat: Combine Files → Merge PDFs

## 4. File Size Optimization

**Problem:** Large maps con imagery/rasters → huge PDFs (100+ MB).

**Solutions:**

**Compress Rasters:**
- Before export, optimize images
- Comando: `JPGOUT` para compress raster attachments

**Vector vs Raster:**
- Export as vector cuando posible (crisp, small)
- Rasters (imagery) → Compress to JPEG (lossy but smaller)

**Simplify:**
- Remove unnecessary details (zoom-dependent visibility)
- Simplify polylines (PEDIT > Spline to fewer vertices)

**PDF Settings:**
- Resolution: 300 DPI (sufficient for most)
- Not 600 DPI unless high-quality print

**Target:** < 10 MB per sheet (for email distribution).

## 5. Deliverable Package

**Complete deliverable:**

```
Project_Name_Maps/
├── PDF/
│   ├── Index_Map.pdf
│   ├── Sheet_01.pdf
│   ├── Sheet_02.pdf
│   └── ... Sheet_16.pdf
├── DWF/
│   └── Complete_Atlas.dwfx (multi-sheet)
├── DWG/
│   └── Source_Drawings/ (if requested)
└── Metadata/
    ├── Coordinate_System_Info.txt
    └── README.txt (instructions)
```

**README.txt:**
- Project description
- Coordinate system
- Date prepared
- Contact info

---

# Lección 6: Publish to Autodesk Infrastructure Map Server

## Objetivos
- ✅ Infrastructure Map Server overview
- ✅ Publish drawing as web map
- ✅ Configure feature services
- ✅ Access control

## 1. Infrastructure Map Server Overview

**Autodesk Infrastructure Map Server (AIMS):**
- Enterprise GIS server (similar a ArcGIS Server)
- Publish Map 3D drawings as web maps/services
- Browser-based access (no CAD software required)

**Components:**
- **Server:** Hosts data + services
- **Web client:** Browser interface para viewing/editing
- **Services:** Feature services, map services

**Use Cases:**
- Enterprise asset management
- Web-based GIS access para field workers
- Collaboration entre departments

**Note:** AIMS es enterprise product, requiere licencia separada + IT infrastructure.

## 2. Publish Drawing

**Workflow (conceptual, requiere AIMS configurado):**

1. **Prepare Drawing:**
   - Organize en feature classes
   - Assign coordinate system
   - Create Display Manager styles

2. **MAP 3D > Publish to Server:**
   - Server URL
   - Credentials
   - Select feature classes to publish

3. **Configure Service:**
   - Name: "City_Water_System"
   - Access: Public, Restricted, Private
   - Operations: View-only o Edit enabled

4. **Publish**

**Result:** Web map accesible via URL.

## 3. Web Map Interface

**Users pueden:**
- **View:** Pan, zoom, query features
- **Identify:** Click feature → See attributes
- **Search:** Find features por attribute
- **Measure:** Distances, areas
- **Edit (if enabled):** Update attributes, add features

**Mobile Access:**
- Responsive web interface
- Tablets/phones
- Offline capabilities (some configs)

## 4. Feature Services

**Feature Service:** REST API expone features para programmatic access.

**Clients:**
- Custom web apps (JavaScript API)
- Mobile apps (iOS/Android SDKs)
- ArcGIS (consume AIMS services)
- QGIS (via WFS)

**API Endpoints:**
```
GET /services/Water_System/features
POST /services/Water_System/features (create new)
PUT /services/Water_System/features/{id} (update)
DELETE /services/Water_System/features/{id}
```

## 5. Access Control

**Security:**
- **Authentication:** Username/password, Active Directory, SSO
- **Authorization:** Role-based (Viewer, Editor, Admin)
- **Layer-level security:** Some users see parcels, others don't

**Audit:**
- Log all edits (who, when, what changed)
- Version history
- Rollback capabilities

## 6. Alternatives

**Si no tienes AIMS:**

**Option 1: ArcGIS Online**
- Export Map 3D → Shapefile → Upload a ArcGIS Online
- Create web maps
- Share con organization

**Option 2: QGIS Server**
- Open-source
- Export Map 3D → PostGIS
- Publish via QGIS Server
- WMS/WFS services

**Option 3: Mapbox / Leaflet**
- Export a GeoJSON
- Create custom web map
- Host en web server

---

# Resumen Módulo 4

**Cartografía profesional dominada:**

- ✅ **Map Books:** Automated multi-sheet generation
- ✅ **Legends:** Auto-generate desde styles
- ✅ **Scale bars + North arrows:** Standard cartographic elements
- ✅ **Coordinate grids:** UTM, State Plane, Lat/Lon
- ✅ **Plot styles:** CTB para B&W printing, screening
- ✅ **Georeferenced PDF:** Embed coordinate systems
- ✅ **Publishing:** Overview de AIMS, web maps

---

# FIN DEL CURSO

**¡FELICITACIONES!**

Has completado **AutoCAD Map 3D 2026 - Curso Completo** (24 horas).

**Habilidades adquiridas:**
- ✅ Fundamentos Map 3D y coordinate systems
- ✅ Análisis espacial profesional (buffers, overlays, topology)
- ✅ Workflows GIS/CAD integrados (ArcGIS, Civil 3D)
- ✅ Cartografía y documentación de calidad profesional

**Próximos pasos:**
1. Complete ejercicio final integrador
2. Recibe certificado DISTMAH ATC
3. Aplica habilidades en proyectos reales
4. Consider Autodesk Certification exam

**Gracias por tu dedicación y esfuerzo!**

---

**DISTMAH ATC - Authorized Training Center**
*Excelencia en capacitación Autodesk desde 2010*
