# 📸 Guía de Imágenes para Cursos AutoCAD 2026
## Para el Equipo de Contenido - DISTMAH Universidad Autodesk

---

## 🎯 **IMPORTANTE - LEER PRIMERO**

Los cursos AutoCAD 2026 Básico y Avanzado **ya están creados** con todo el contenido en markdown.

**LAS IMÁGENES FALTAN** - Están preparadas como placeholders que el equipo debe reemplazar.

**Estos cursos se editarán desde el dashboard del profesor**, donde podrán:
- ✅ Subir imágenes a cada módulo
- ✅ Editar el texto de las lecciones
- ✅ Actualizar comandos cuando cambien versiones
- ✅ Agregar o modificar ejercicios

---

## 📁 **ESTRUCTURA DE IMÁGENES**

Cada módulo tiene una carpeta `imagenes/` vacía:

```
modulo-1-introduccion/
├── imagenes/              ← VACÍA - Subir imágenes aquí
│   ├── (esperando imágenes del equipo)
│   └── (formato: PNG, JPG)
├── leccion-01-....md
├── leccion-02-....md
└── ejercicios.md
```

---

## 🖼️ **PLACEHOLDERS YA PREPARADOS**

En todas las lecciones, las imágenes están referenciadas así:

```markdown
![Descripción de la imagen](./imagenes/nombre-archivo.png)
```

**Cuando el equipo suba la imagen con ese nombre, aparecerá automáticamente.**

---

## 📋 **LISTADO DE IMÁGENES NECESARIAS POR MÓDULO**

---

## 🔵 **CURSO BÁSICO**

### **Módulo 1: Introducción a AutoCAD 2026**
📁 `autocad-2026-basico/modulo-1-introduccion/imagenes/`

**Lección 1 - Interface (8-10 imágenes):**
- `interface-ribbon.png` - Captura del ribbon completo
- `interface-panels.png` - Panels expandidos
- `interface-command-line.png` - Command line activa
- `interface-status-bar.png` - Status bar con opciones
- `interface-quick-access-toolbar.png` - Quick Access Toolbar
- `interface-application-menu.png` - Application menu abierto
- `workspace-drafting.png` - Workspace Drafting & Annotation
- `workspace-3d-modeling.png` - Workspace 3D Modeling
- `mouse-usage.png` - Diagrama de uso del mouse
- `keyboard-shortcuts-table.png` - Tabla de atajos

**Lección 2 - Configuración (6-8 imágenes):**
- `new-drawing-dialog.png` - Cuadro de diálogo New Drawing
- `units-setup.png` - Units configuration dialog
- `drawing-limits.png` - Drawing limits setup
- `grid-snap-settings.png` - Grid and Snap settings
- `drafting-settings-dialog.png` - Drafting Settings
- `template-selection.png` - Template file selection
- `save-preferences.png` - Preferences dialog
- `options-dialog.png` - Options dialog completo

**Lección 3 - Coordenadas (8-10 imágenes):**
- `coordinate-system-diagram.png` - Diagrama del sistema cartesiano
- `absolute-coordinates-example.png` - Ejemplo coordenadas absolutas
- `relative-coordinates-example.png` - Ejemplo coordenadas relativas
- `polar-coordinates-example.png` - Ejemplo coordenadas polares
- `ucs-icon.png` - UCS icon
- `world-coordinate-system.png` - WCS
- `dynamic-input.png` - Dynamic Input activo
- `coordinate-input-methods.png` - Tabla de métodos
- `exercise-coordinates-result.png` - Resultado de ejercicio

**Lección 4 - Gestión Archivos (5-7 imágenes):**
- `new-command-dialog.png` - NEW command
- `open-dialog.png` - OPEN dialog
- `save-as-dialog.png` - Save As dialog
- `file-formats-comparison.png` - Tabla DWG vs DXF vs DWT
- `autosave-settings.png` - AutoSave configuration
- `file-recovery.png` - File recovery dialog
- `drawing-properties.png` - Drawing properties

**Lección 5 - Navegación (6-8 imágenes):**
- `zoom-window.png` - Zoom Window en acción
- `zoom-extents.png` - Zoom Extents result
- `zoom-realtime.png` - Zoom Realtime cursor
- `pan-command.png` - Pan en uso
- `navigation-bar.png` - Navigation bar
- `steering-wheels.png` - SteeringWheels
- `viewcube.png` - ViewCube
- `scroll-wheel-shortcuts.png` - Tabla de shortcuts

---

### **Módulo 2: Construcción Básica**
📁 `autocad-2026-basico/modulo-2-construccion-basica/imagenes/`

**Lección 2 - Capas (8-10 imágenes):**
- `layer-control-dropdown.png` - Layer Control dropdown
- `layer-properties-manager.png` - Layer Properties Manager completo
- `new-layer-dialog.png` - Crear nueva capa
- `layer-color-dialog.png` - Select Color dialog
- `layer-linetype-dialog.png` - Select Linetype
- `layer-visibility-icons.png` - On/Off, Freeze/Thaw, Lock icons
- `layer-states.png` - Layer states saved
- `bylayer-properties.png` - ByLayer concept diagram
- `easements-layer-example.png` - Ejemplo capa EASEMENTS creada
- `layer-tips-diagram.png` - Best practices diagram

**Lección 3 - Arc (10-12 imágenes):**
- `arc-3-points.png` - Arc 3 Points example
- `arc-start-center-end.png` - Arc Start, Center, End
- `arc-start-end-angle.png` - Arc Start, End, Angle
- `arc-start-center-length.png` - Arc Start, Center, Length
- `arc-start-end-radius.png` - Arc Start, End, Radius
- `arc-continue.png` - Arc Continue from line
- `arc-menu-options.png` - Arc command menu
- `arc-subdivision-example.png` - Subdivision con arcos
- `arc-tangent-example.png` - Arcos tangentes
- `arc-comparison-table.png` - Tabla comparativa de métodos
- `arc-exercise-result.png` - Resultado ejercicio

**Lección 4 - Circle (8-10 imágenes):**
- `circle-center-radius.png` - Circle Center, Radius
- `circle-2-point.png` - Circle 2-Point
- `circle-3-point.png` - Circle 3-Point
- `circle-tan-tan-radius.png` - Circle Tan, Tan, Radius
- `circle-tan-tan-tan.png` - Circle Tan, Tan, Tan
- `circle-menu-options.png` - Circle command menu
- `circle-gasket-example.png` - Gasket con círculos
- `circle-flange-example.png` - Flange design
- `circle-comparison-table.png` - Tabla de métodos
- `circle-troubleshooting.png` - Errores comunes

**Lección 5 - Object Snap (10-12 imágenes):**
- `osnap-settings-dialog.png` - Object Snap settings
- `osnap-running-vs-override.png` - Running vs Override diagram
- `osnap-endpoint.png` - Endpoint snap marker
- `osnap-midpoint.png` - Midpoint snap marker
- `osnap-center.png` - Center snap marker
- `osnap-node.png` - Node snap marker
- `osnap-quadrant.png` - Quadrant snap
- `osnap-intersection.png` - Intersection snap
- `osnap-tangent.png` - Tangent snap
- `osnap-perpendicular.png` - Perpendicular snap
- `osnap-markers-table.png` - Tabla de todos los markers
- `osnap-practical-example.png` - Ejemplo práctico

**Lección 6 - Zoom y Pan (8-10 imágenes):**
- `zoom-window-action.png` - Zoom Window en acción
- `zoom-previous.png` - Zoom Previous
- `zoom-realtime-cursor.png` - Zoom Realtime cursor
- `zoom-all-result.png` - Zoom All
- `zoom-dynamic.png` - Zoom Dynamic box
- `pan-realtime.png` - Pan Realtime
- `scroll-wheel-zoom.png` - Scroll wheel usage
- `zoom-shortcuts-table.png` - Tabla de shortcuts
- `navigation-workflow.png` - Workflow diagram
- `zoom-pan-tips.png` - Tips diagram

**Lección 7 - Ellipse (6-8 imágenes):**
- `ellipse-axis-end.png` - Ellipse Axis, End
- `ellipse-center.png` - Ellipse Center method
- `ellipse-rotation.png` - Ellipse with rotation
- `ellipse-arc.png` - Elliptical arc
- `ellipse-methods-comparison.png` - Tabla de métodos
- `ellipse-mechanical-example.png` - Ejemplo mecánico
- `ellipse-architectural-example.png` - Ejemplo arquitectónico
- `ellipse-exercise-result.png` - Resultado ejercicio

---

### **Módulo 3: Comandos de Dibujo**
📁 `autocad-2026-basico/modulo-3-comandos-dibujo/imagenes/`

**Lección 1 - LINE (8-10 imágenes):**
- `line-continuous-drawing.png` - Líneas continuas
- `line-close-option.png` - Close option
- `line-undo-option.png` - Undo option
- `line-ortho-mode.png` - Ortho mode F8
- `line-polar-tracking.png` - Polar tracking
- `line-direct-distance.png` - Direct distance entry
- `line-coordinate-input.png` - Coordinate input examples
- `line-floor-plan-example.png` - Floor plan outline
- `line-shortcuts-table.png` - Tabla shortcuts
- `line-tips.png` - Tips diagram

**Lección 2 - POLYLINE (8-10 imágenes):**
- `pline-vs-line.png` - Polyline vs Line comparison
- `pline-arc-segments.png` - Arc segments in polyline
- `pline-width-example.png` - Width option
- `pline-close-option.png` - Close option
- `pline-pedit-dialog.png` - PEDIT command
- `pline-join-command.png` - JOIN to polyline
- `pline-boundary-example.png` - Boundary usage
- `pline-mechanical-part.png` - Mechanical part example
- `pline-options-table.png` - Tabla de opciones
- `pline-comparison-table.png` - LINE vs PLINE

**Lección 3 - RECTANGLE (6-8 imágenes):**
- `rectangle-by-corners.png` - Rectangle by corners
- `rectangle-with-dimensions.png` - Rectangle @length,width
- `rectangle-chamfer-option.png` - Chamfer option
- `rectangle-fillet-option.png` - Fillet option
- `rectangle-width-option.png` - Width option
- `rectangle-rotation.png` - Rotation option
- `rectangle-room-example.png` - Room drawing
- `rectangle-options-table.png` - Tabla de opciones

**Lección 4 - POLYGON (7-9 imágenes):**
- `polygon-inscribed.png` - Inscribed polygon
- `polygon-circumscribed.png` - Circumscribed polygon
- `polygon-edge-method.png` - Edge method
- `polygon-hexagon-example.png` - Hexagon
- `polygon-octagon-example.png` - Octagon
- `polygon-bolt-head.png` - Bolt head design
- `polygon-comparison-diagram.png` - Inscribed vs Circumscribed
- `polygon-applications.png` - Applications diagram
- `polygon-calculations-table.png` - Tabla de cálculos

**Lección 5 - SPLINE (6-8 imágenes):**
- `spline-fit-points.png` - Fit points method
- `spline-control-vertices.png` - Control vertices
- `spline-close-option.png` - Close spline
- `spline-tolerance.png` - Tolerance settings
- `spline-edit-splinedit.png` - SPLINEDIT command
- `spline-organic-shape.png` - Organic shape example
- `spline-contour-example.png` - Contour line
- `spline-options-table.png` - Tabla de opciones

**Lección 6 - POINT (5-7 imágenes):**
- `point-styles-ddptype.png` - DDPTYPE dialog
- `point-divide-example.png` - DIVIDE command
- `point-measure-example.png` - MEASURE command
- `point-node-snap.png` - Node snap to points
- `point-layout-application.png` - Layout application
- `point-size-settings.png` - Point size
- `point-styles-table.png` - Tabla de estilos

---

### **Módulo 4: Edición Básica**
📁 `autocad-2026-basico/modulo-4-edicion-basica/imagenes/`

**Lección 1 - Selección (7-9 imágenes):**
- `selection-window.png` - Window selection (izq a der)
- `selection-crossing.png` - Crossing selection (der a izq)
- `selection-cycling.png` - Selection cycling
- `selection-qselect-dialog.png` - Quick Select dialog
- `selection-similar.png` - Select Similar
- `selection-methods-comparison.png` - Tabla de métodos
- `selection-tips.png` - Tips diagram
- `selection-filter.png` - Filter selection
- `selection-modes-table.png` - Tabla de modos

**Lección 2 - ERASE (4-5 imágenes):**
- `erase-command.png` - ERASE in action
- `erase-oops-command.png` - OOPS command
- `erase-undo-vs-oops.png` - UNDO vs OOPS diagram
- `erase-shortcuts.png` - Shortcuts table
- `erase-best-practices.png` - Best practices

**Lección 3 - MOVE (6-8 imágenes):**
- `move-base-point.png` - Base point selection
- `move-displacement.png` - Displacement method
- `move-copy-mode.png` - Copy mode within MOVE
- `move-osnap-usage.png` - Object snap with MOVE
- `move-furniture-example.png` - Moving furniture
- `move-precise-movement.png` - Precise movement
- `move-options-table.png` - Tabla de opciones
- `move-workflow.png` - Workflow diagram

**Lección 4 - COPY (6-8 imágenes):**
- `copy-single.png` - Single copy
- `copy-multiple.png` - Multiple copies
- `copy-base-point.png` - Base point selection
- `copy-array-mode.png` - Array mode
- `copy-windows-example.png` - Copying windows
- `copy-doors-example.png` - Copying doors
- `copy-options-table.png` - Tabla de opciones
- `copy-applications.png` - Applications diagram

**Lección 5 - ROTATE (7-9 imágenes):**
- `rotate-base-point.png` - Base point (center of rotation)
- `rotate-angle.png` - Rotation angle
- `rotate-reference-option.png` - Reference angle
- `rotate-copy-option.png` - Copy option
- `rotate-dynamic.png` - Dynamic rotation
- `rotate-precise-example.png` - Precise rotation
- `rotate-furniture-example.png` - Rotating furniture
- `rotate-angle-calculations.png` - Tabla de ángulos
- `rotate-options-table.png` - Tabla de opciones

**Lección 6 - SCALE (6-8 imágenes):**
- `scale-base-point.png` - Base point selection
- `scale-factor.png` - Scale factor example
- `scale-reference-option.png` - Reference option
- `scale-copy-option.png` - Copy option
- `scale-uniform-example.png` - Uniform scaling
- `scale-drawing-example.png` - Scaling drawing
- `scale-factors-table.png` - Tabla de factores
- `scale-applications.png` - Applications

**Lección 7 - MIRROR (6-8 imágenes):**
- `mirror-line-definition.png` - Mirror line
- `mirror-erase-source.png` - Erase source option
- `mirror-mirrtext-variable.png` - MIRRTEXT variable
- `mirror-symmetry-example.png` - Symmetry design
- `mirror-architectural-example.png` - Architectural symmetry
- `mirror-mechanical-example.png` - Mechanical part
- `mirror-options-table.png` - Tabla de opciones
- `mirror-practical-uses.png` - Practical uses

**Lección 8 - TRIM/EXTEND (8-10 imágenes):**
- `trim-cutting-edges.png` - Cutting edges selection
- `trim-objects-to-trim.png` - Objects to trim
- `trim-edge-mode.png` - Edge mode
- `trim-project-mode.png` - Project mode
- `extend-boundary-edges.png` - Boundary edges
- `extend-objects-to-extend.png` - Objects to extend
- `trim-extend-comparison.png` - TRIM vs EXTEND
- `trim-example-floor-plan.png` - Floor plan cleanup
- `extend-example-lines.png` - Extending lines
- `trim-extend-options-table.png` - Tabla de opciones

---

### **Módulo 5: Anotaciones Básicas**
📁 `autocad-2026-basico/modulo-5-anotaciones-basicas/imagenes/`

**Lección 1 - DTEXT (7-9 imágenes):**
- `dtext-justify-options.png` - Justification options
- `dtext-height-rotation.png` - Height and rotation
- `dtext-style-dialog.png` - Text Style dialog
- `dtext-fonts-comparison.png` - TrueType vs SHX fonts
- `dtext-special-characters.png` - Special characters (%%c, %%d, %%p)
- `dtext-unicode.png` - Unicode characters
- `dtext-editing-ddedit.png` - DDEDIT command
- `dtext-title-block-example.png` - Title block text
- `dtext-options-table.png` - Tabla de opciones

**Lección 2 - MTEXT (8-10 imágenes):**
- `mtext-editor.png` - Multiline text editor
- `mtext-formatting-toolbar.png` - Formatting toolbar
- `mtext-columns.png` - Columns option
- `mtext-bullets-numbering.png` - Bullets and numbering
- `mtext-symbols.png` - Symbols and special characters
- `mtext-spell-check.png` - Spell check
- `mtext-import-text.png` - Import text from file
- `mtext-width-boundaries.png` - Text width and boundaries
- `mtext-vs-dtext-comparison.png` - MTEXT vs DTEXT table
- `mtext-notes-example.png` - Notes example

**Lección 3 - Dimensiones Básicas (9-11 imágenes):**
- `dimension-linear-horizontal.png` - Linear horizontal
- `dimension-linear-vertical.png` - Linear vertical
- `dimension-aligned.png` - Aligned dimension
- `dimension-components.png` - Dimension components diagram
- `dimension-continue.png` - CONTINUE dimension
- `dimension-baseline.png` - BASELINE dimension
- `dimension-quick-dimension.png` - Quick dimensioning
- `dimension-dimscale-example.png` - DIMSCALE effect
- `dimension-annotative-intro.png` - Annotative scaling intro
- `dimension-floor-plan-example.png` - Floor plan dimensioned
- `dimension-best-practices.png` - Best practices

**Lección 4 - Estilos Dimensión (8-10 imágenes):**
- `dimstyle-manager.png` - Dimension Style Manager
- `dimstyle-new-style.png` - Creating new style
- `dimstyle-lines-arrows-tab.png` - Lines and Arrows tab
- `dimstyle-text-tab.png` - Text tab
- `dimstyle-fit-tab.png` - Fit tab
- `dimstyle-primary-units-tab.png` - Primary Units tab
- `dimstyle-alternate-units.png` - Alternate units
- `dimstyle-tolerances.png` - Tolerances
- `dimstyle-iso-ansi-comparison.png` - ISO vs ANSI styles
- `dimstyle-comparison-table.png` - Tabla de estilos

**Lección 5 - Leaders (7-9 imágenes):**
- `leader-legacy-command.png` - LEADER command
- `qleader-dialog.png` - QLEADER dialog
- `mleader-command.png` - MLEADER command
- `mleaderstyle-dialog.png` - Multileader Style dialog
- `mleader-add-remove-lines.png` - Add/remove leader lines
- `mleader-align.png` - Aligning multileaders
- `mleader-collect.png` - Collecting multileaders
- `leader-annotations-example.png` - Annotations example
- `leader-applications-table.png` - Tabla de aplicaciones

---

## 🔴 **CURSO AVANZADO**

### **Módulo 1: Edición Avanzada**
📁 `autocad-2026-avanzado/modulo-1-edicion-avanzada/imagenes/`

**Lección 1 - ARRAY Rectangular (8-10 imágenes):**
- `arrayrect-dialog.png` - ARRAYRECT command ribbon
- `arrayrect-rows-columns.png` - Rows and columns
- `arrayrect-spacing.png` - Spacing options
- `arrayrect-associative.png` - Associative array
- `arrayrect-edit-arrayedit.png` - ARRAYEDIT command
- `arrayrect-mechanical-example.png` - Mechanical holes pattern
- `arrayrect-grid-example.png` - Grid pattern
- `arrayrect-options-table.png` - Tabla de opciones
- `arrayrect-practical-applications.png` - Applications
- `arrayrect-tips.png` - Tips diagram

**Lección 2 - ARRAY Polar (7-9 imágenes):**
- `arraypolar-dialog.png` - ARRAYPOLAR ribbon
- `arraypolar-center-point.png` - Center point selection
- `arraypolar-items-angle.png` - Items and angle to fill
- `arraypolar-rotate-option.png` - Rotate items option
- `arraypolar-bolt-circle-example.png` - Bolt circle
- `arraypolar-wheel-example.png` - Wheel design
- `arraypolar-gear-example.png` - Gear teeth
- `arraypolar-options-table.png` - Tabla de opciones
- `arraypolar-applications.png` - Applications

**Lección 3 - ARRAY Path (7-9 imágenes):**
- `arraypath-dialog.png` - ARRAYPATH ribbon
- `arraypath-path-selection.png` - Path selection (polyline/spline)
- `arraypath-spacing-methods.png` - Spacing methods
- `arraypath-align-option.png` - Align items option
- `arraypath-tangent-direction.png` - Tangent direction
- `arraypath-railing-example.png` - Railing posts example
- `arraypath-road-example.png` - Road markers
- `arraypath-options-table.png` - Tabla de opciones
- `arraypath-applications.png` - Applications

**Lección 4 - OFFSET (6-8 imágenes):**
- `offset-distance.png` - Offset distance
- `offset-through-point.png` - Through point option
- `offset-erase-option.png` - Erase option
- `offset-layer-option.png` - Layer option
- `offset-walls-example.png` - Walls offset
- `offset-borders-example.png` - Borders
- `offset-options-table.png` - Tabla de opciones
- `offset-applications.png` - Applications diagram

**Lección 5 - FILLET (7-9 imágenes):**
- `fillet-radius.png` - Fillet radius
- `fillet-polyline-option.png` - Polyline option
- `fillet-radius-zero.png` - Radius 0 (square corners)
- `fillet-trim-no-trim.png` - Trim vs No trim modes
- `fillet-multiple-option.png` - Multiple option
- `fillet-design-example.png` - Design with fillets
- `fillet-mechanical-part.png` - Mechanical part
- `fillet-options-table.png` - Tabla de opciones
- `fillet-applications.png` - Applications

**Lección 6 - CHAMFER (6-8 imágenes):**
- `chamfer-distance-method.png` - Distance method
- `chamfer-angle-method.png` - Angle method
- `chamfer-polyline-option.png` - Polyline option
- `chamfer-trim-no-trim.png` - Trim modes
- `chamfer-vs-fillet-comparison.png` - CHAMFER vs FILLET
- `chamfer-mechanical-example.png` - Mechanical part
- `chamfer-options-table.png` - Tabla de opciones
- `chamfer-applications.png` - Applications

**Lección 7 - STRETCH/LENGTHEN (8-10 imágenes):**
- `stretch-crossing-selection.png` - Crossing selection requirement
- `stretch-base-displacement.png` - Base point and displacement
- `stretch-example.png` - Stretch in action
- `lengthen-delta-option.png` - Delta option
- `lengthen-percent-option.png` - Percent option
- `lengthen-total-option.png` - Total option
- `lengthen-dynamic-option.png` - Dynamic option
- `stretch-lengthen-comparison.png` - Comparison table
- `stretch-example-floor-plan.png` - Floor plan stretch
- `lengthen-applications.png` - Applications

**Lección 8 - JOIN/BREAK (6-8 imágenes):**
- `join-lines-example.png` - Joining lines
- `join-polylines.png` - Joining polylines
- `join-arcs.png` - Joining arcs
- `join-requirements.png` - Requirements diagram
- `break-at-point.png` - Break at point
- `break-two-points.png` - Break between two points
- `break-at-symbol.png` - BREAK with @
- `join-break-applications.png` - Applications table

---

### **Módulo 2: Bloques y Atributos**
📁 `autocad-2026-avanzado/modulo-2-bloques-atributos/imagenes/`

**Lección 1 - Creación Bloques (7-9 imágenes):**
- `block-command-dialog.png` - BLOCK command dialog
- `block-base-point.png` - Base point selection
- `block-object-selection.png` - Object selection
- `block-options-retain-convert-delete.png` - Retain/Convert/Delete options
- `block-naming-conventions.png` - Naming conventions
- `block-description.png` - Block description
- `block-editor-option.png` - Open in block editor
- `block-furniture-example.png` - Furniture block
- `block-best-practices.png` - Best practices

**Lección 2 - Inserción Bloques (6-8 imágenes):**
- `insert-command-dialog.png` - INSERT dialog
- `insert-block-selection.png` - Block selection
- `insert-insertion-point.png` - Insertion point
- `insert-scale-factors.png` - Scale factors (X, Y, Z)
- `insert-rotation-angle.png` - Rotation angle
- `insert-explode-option.png` - Explode option
- `insert-minsert.png` - MINSERT (multiple insert)
- `insert-floor-plan-example.png` - Inserting in floor plan

**Lección 3 - Bloques Externos (8-10 imágenes):**
- `wblock-command-dialog.png` - WBLOCK dialog
- `wblock-entire-drawing.png` - Entire drawing option
- `wblock-block-vs-objects.png` - Block vs Objects
- `insert-external-blocks.png` - Inserting external blocks
- `designcenter-adcenter.png` - DesignCenter
- `tool-palettes.png` - Tool Palettes
- `block-library-organization.png` - Library organization
- `block-library-folder-structure.png` - Folder structure
- `designcenter-workflow.png` - Workflow diagram
- `block-management-tips.png` - Management tips

**Lección 4 - Atributos (7-9 imágenes):**
- `attdef-dialog.png` - ATTDEF dialog
- `attribute-tag-prompt-value.png` - Tag, Prompt, Default
- `attribute-modes.png` - Mode options (invisible, constant, verify, preset)
- `attribute-text-options.png` - Text options
- `attribute-insertion-point.png` - Insertion point
- `attdisp-command.png` - ATTDISP (attribute display)
- `attribute-title-block-example.png` - Title block with attributes
- `attribute-door-schedule-example.png` - Door schedule
- `attribute-modes-table.png` - Tabla de modos

**Lección 5 - Edición Atributos (7-9 imágenes):**
- `attedit-dialog.png` - ATTEDIT dialog
- `eattedit-enhanced-editor.png` - EATTEDIT (enhanced)
- `attsync-command.png` - ATTSYNC (synchronize)
- `battman-dialog.png` - BATTMAN (block attribute manager)
- `attribute-editing-properties.png` - Editing properties
- `attribute-extraction.png` - Extracting attribute data
- `attribute-extraction-table.png` - Extraction to table
- `attribute-workflow.png` - Workflow diagram
- `attribute-editing-tips.png` - Tips

**Lección 6 - Bloques Dinámicos (10-12 imágenes):**
- `bedit-block-editor.png` - Block Editor interface
- `dynamic-block-parameters.png` - Parameters (Point, Linear, Polar, XY, Rotation, Alignment, Flip, Visibility, Lookup, Base Point)
- `dynamic-block-actions.png` - Actions (Move, Scale, Stretch, Rotate, Flip, Array, Lookup)
- `parameter-sets.png` - Parameter sets
- `visibility-states.png` - Visibility states
- `lookup-tables.png` - Lookup tables
- `testing-dynamic-blocks.png` - Testing blocks
- `dynamic-door-example.png` - Dynamic door block
- `dynamic-window-example.png` - Dynamic window
- `dynamic-block-workflow.png` - Workflow diagram
- `dynamic-block-parameters-table.png` - Tabla de parámetros
- `dynamic-block-actions-table.png` - Tabla de acciones

**Lección 7 - Gestión Bloques (6-8 imágenes):**
- `purge-command-dialog.png` - PURGE dialog
- `rename-command-dialog.png` - RENAME dialog
- `explode-command-example.png` - EXPLODE command
- `redefine-block.png` - Redefining blocks
- `block-editor-advanced.png` - Block editor advanced
- `block-properties.png` - Block properties
- `nested-blocks-diagram.png` - Nested blocks
- `block-management-best-practices.png` - Best practices

---

### **Módulo 3: Dimensionamiento Avanzado**
📁 `autocad-2026-avanzado/modulo-3-dimensionamiento-avanzado/imagenes/`

**Lección 1 - Estilos Avanzados (10-12 imágenes):**
- `dimstyle-families.png` - Parent and children styles
- `dimstyle-overrides.png` - Dimension style overrides
- `dimstyle-compare.png` - Comparing dimension styles
- `dimstyle-iso-standard.png` - ISO standard
- `dimstyle-ansi-standard.png` - ANSI standard
- `dimstyle-din-standard.png` - DIN standard
- `dimstyle-annotative-dimensions.png` - Annotative dimensions
- `dimscale-vs-annotative.png` - DIMSCALE vs Annotative
- `dimbreak-command.png` - DIMBREAK command
- `dimjogline-command.png` - DIMJOGLINE command
- `diminspect-command.png` - DIMINSPECT command
- `dimstyle-standards-comparison-table.png` - Tabla de estándares

**Lección 2 - Dimensiones Especiales (9-11 imágenes):**
- `dimension-angular.png` - ANGULAR dimension
- `dimension-radius.png` - RADIUS dimension
- `dimension-diameter.png` - DIAMETER dimension
- `dimension-arc-length.png` - ARC LENGTH dimension
- `dimension-jogged.png` - JOGGED dimension (large radii)
- `dimension-ordinate.png` - ORDINATE dimension
- `dimension-coordinate-dimensioning.png` - Coordinate dimensioning
- `dimension-chain-dimensioning.png` - Chain dimensioning
- `dimension-parallel-dimensioning.png` - Parallel dimensioning
- `dimspace-command.png` - DIMSPACE command
- `dimension-mechanical-drawing.png` - Mechanical drawing example

**Lección 3 - Tolerancias GD&T (8-10 imágenes):**
- `tolerance-command-dialog.png` - TOLERANCE dialog
- `feature-control-frame.png` - Feature control frame
- `datum-symbols.png` - Datum symbols
- `geometric-characteristic-symbols.png` - Geometric symbols (tabla completa)
- `material-condition-modifiers.png` - MMC, LMC, RFS modifiers
- `tolerance-stacking.png` - Tolerance stacking
- `bilateral-unilateral-tolerances.png` - Bilateral vs Unilateral
- `limits-dimensioning.png` - Limits dimensioning
- `iso-tolerance-standards.png` - ISO tolerance standards
- `gdt-manufacturing-example.png` - Manufacturing application

**Lección 4 - Multileaders Avanzado (8-10 imágenes):**
- `mleader-advanced-options.png` - MLEADER advanced
- `mleaderstyle-dialog-advanced.png` - Multileader styles
- `mleader-constraints-landing.png` - Constraints, landing settings
- `mleader-content-types.png` - Content types (text, block, none)
- `mleader-format.png` - Leader format (arrowheads, line types)
- `mleaderedit-add-remove.png` - MLEADEREDIT (add/remove leaders)
- `mleaderalign-command.png` - MLEADERALIGN command
- `mleadercollect-command.png` - MLEADERCOLLECT command
- `mleader-annotative.png` - Annotative multileaders
- `mleader-professional-workflow.png` - Professional workflow

**Lección 5 - Tablas (9-11 imágenes):**
- `table-command-dialog.png` - TABLE dialog
- `tablestyle-dialog.png` - Table Style dialog
- `table-data-formatting.png` - Data formatting
- `table-cell-properties.png` - Cell properties (text height, alignment, borders)
- `table-formulas.png` - Formulas (SUM, AVERAGE, COUNT)
- `table-excel-integration.png` - Excel integration
- `tableexport-command.png` - TABLEEXPORT command
- `datalink-command.png` - DATALINK command
- `table-breaking.png` - Table breaking
- `table-bom-example.png` - Bill of Materials (BOM)
- `table-schedule-example.png` - Schedule creation

**Lección 6 - Campos Variables (7-9 imágenes):**
- `field-command-dialog.png` - FIELD dialog
- `field-types.png` - Field types (Date, Filename, Plot date, etc.)
- `field-object-fields.png` - Object fields (area, length)
- `field-formula-fields.png` - Formula fields
- `field-update.png` - Field update (automatic vs manual)
- `field-in-text-tables.png` - Fields in text and tables
- `field-in-attributes.png` - Fields in attributes
- `field-sheet-set-manager.png` - Sheet Set Manager fields
- `field-dynamic-title-block.png` - Dynamic title block with fields

---

### **Módulo 4: Layouts y Plotting**
📁 `autocad-2026-avanzado/modulo-4-layouts-plotting/imagenes/`

**Lección 1 - Model vs Paper Space (7-9 imágenes):**
- `model-space-tab.png` - MODEL tab
- `layout-tabs.png` - LAYOUT tabs
- `mspace-pspace-diagram.png` - MSPACE vs PSPACE
- `tilemode-concept.png` - Tilemode concept
- `workflow-model-paper.png` - Workflow diagram
- `scale-considerations.png` - Scale considerations
- `annotative-objects-layouts.png` - Annotative objects
- `best-practices-diagram.png` - Best practices
- `model-paper-comparison-table.png` - Comparison table

**Lección 2 - Configuración Layouts (8-10 imágenes):**
- `layout-command.png` - LAYOUT command
- `layout-from-template.png` - Layout from template
- `page-setup-manager.png` - Page Setup Manager
- `paper-size-configuration.png` - Paper size config
- `plot-device-selection.png` - Plot device selection
- `plot-scale-settings.png` - Plot scale settings
- `drawing-orientation.png` - Portrait/Landscape
- `plot-area-options.png` - Plot area options
- `multiple-layouts-example.png` - Multiple layouts
- `layout-templates.png` - Layout templates

**Lección 3 - Viewports Flotantes (9-11 imágenes):**
- `mview-command.png` - MVIEW command
- `viewport-rectangular.png` - Rectangular viewports
- `viewport-polygonal.png` - Polygonal viewports
- `viewport-object-based.png` - Object-based viewports
- `viewport-scale-standard.png` - Standard scales
- `viewport-lock-scale.png` - Locking viewport scale
- `viewport-layers-vplayer.png` - Viewport layers (VPLAYER)
- `viewport-freeze-layers.png` - Freezing layers in viewports
- `viewport-specific-properties.png` - Viewport-specific layer properties
- `viewport-maximize-vpmax.png` - VPMAX (maximize viewport)
- `viewport-alignment.png` - Aligning viewports
- `viewport-multiple-strategies.png` - Multiple viewport strategies

**Lección 4 - Estilos Plot (8-10 imágenes):**
- `plot-styles-introduction.png` - Plot styles intro
- `ctb-color-dependent.png` - Color-dependent (.CTB)
- `stb-named-plot-styles.png` - Named plot styles (.STB)
- `plot-style-tables.png` - Plot style tables
- `plot-style-manager.png` - Plot Style Manager
- `plot-style-editor.png` - Editing plot styles
- `assign-plot-styles-objects.png` - Assigning to objects
- `assign-plot-styles-layers.png` - Assigning to layers
- `monochrome-ctb.png` - Monochrome.ctb
- `grayscale-ctb.png` - Grayscale.ctb
- `ctb-stb-conversion.png` - CTB to STB conversion

**Lección 5 - Impresión (8-10 imágenes):**
- `plot-dialog-box.png` - PLOT dialog box complete
- `plot-printer-configuration.png` - Printer/plotter config
- `plot-to-pdf.png` - Plot to PDF
- `plot-to-dwf.png` - Plot to DWF/DWFx
- `publish-command-batch.png` - PUBLISH (batch plotting)
- `plot-stamps.png` - Plot stamps
- `plot-preview.png` - Plot preview
- `plot-settings-validation.png` - Settings validation
- `plot-background-plotting.png` - Background plotting
- `pc3-files.png` - PC3 plotter configuration files

**Lección 6 - Sheet Sets (10-12 imágenes):**
- `sheet-set-manager.png` - Sheet Set Manager
- `new-sheet-set-wizard.png` - New sheet set wizard
- `sheet-organization.png` - Sheet organization
- `sheet-subsets.png` - Subsets
- `sheet-properties.png` - Sheet properties
- `sheet-views.png` - Sheet views
- `callout-blocks.png` - Callout blocks
- `view-labels.png` - View labels
- `sheet-list-tables.png` - Sheet list tables
- `publish-sheet-sets.png` - Publishing sheet sets
- `archive-sheet-sets.png` - Archiving sheet sets
- `sheet-set-templates.png` - Sheet set templates
- `project-collaboration-workflow.png` - Project collaboration

---

### **Módulo 5: Features AI 2026**
📁 `autocad-2026-avanzado/modulo-5-features-ai-2026/imagenes/`

**Lección 1 - Smart Blocks Detect (8-10 imágenes):**
- `smart-blocks-overview.png` - Smart Blocks overview
- `smartblocksdetect-command.png` - SMARTBLOCKSDETECT command
- `ai-automatic-recognition.png` - Automatic object recognition
- `ai-repetitive-objects.png` - Repetitive objects detected
- `ai-conversion-to-blocks.png` - Conversion process
- `ai-detection-algorithms.png` - AI algorithms diagram
- `efficiency-improvements.png` - Efficiency improvements stats
- `drawing-cleanup-workflow.png` - Cleanup workflow
- `smart-blocks-limitations.png` - Limitations and requirements
- `smart-blocks-best-practices.png` - Best practices

**Lección 2 - Smart Blocks Search (8-10 imágenes):**
- `smartblockssearch-command.png` - SMARTBLOCKSSEARCH command
- `ai-search-similar-objects.png` - Searching similar objects
- `ai-block-suggestions.png` - AI-powered suggestions
- `ai-convert-existing-blocks.png` - Converting to existing blocks
- `block-library-integration.png` - Library integration
- `recently-used-blocks.png` - Recently used blocks
- `batch-conversion.png` - Batch conversion
- `object-similarity-criteria.png` - Similarity criteria
- `optimization-workflows.png` - Optimization workflows
- `search-convert-examples.png` - Examples

**Lección 3 - Smart Blocks Replace/Place (8-10 imágenes):**
- `smartblocksreplace-command.png` - SMARTBLOCKSREPLACE command
- `ai-suggested-replacements.png` - AI-suggested replacements
- `recently-used-history.png` - Recently used history
- `manual-block-substitution.png` - Manual substitution
- `smartblocksplacement-command.png` - SMARTBLOCKSPLACEMENT command
- `automatic-placement-patterns.png` - Pattern-based placement
- `learning-previous-insertions.png` - Learning from insertions
- `reducing-clicks-time.png` - Time savings diagram
- `placement-predictions.png` - Placement predictions
- `productivity-statistics.png` - Productivity stats

**Lección 4 - Connected Support Files (7-9 imágenes):**
- `connected-support-files-overview.png` - Overview
- `autodesk-docs-integration.png` - Autodesk Docs integration
- `project-aware-support-files.png` - Project-aware files
- `centralized-configuration.png` - Centralized config
- `no-individual-setup.png` - No user setup required
- `cloud-synchronization.png` - Cloud sync
- `collaboration-benefits.png` - Collaboration benefits
- `setting-up-connected-projects.png` - Setup process
- `team-collaboration-workflow.png` - Team workflow

**Lección 5 - Activity Insights (8-10 imágenes):**
- `activity-insights-panel.png` - Activity Insights panel
- `session-change-summary.png` - Session-by-session summary
- `object-modification-tracking.png` - Object tracking
- `command-based-workflow-analysis.png` - Command analysis
- `file-size-change-tracking.png` - File size tracking
- `total-editing-time.png` - Editing time stats
- `multi-user-change-tracking.png` - Multi-user tracking
- `data-driven-decisions.png` - Decision making with data
- `project-history-review.png` - Project history
- `audit-trail-drawings.png` - Audit trail

**Lección 6 - Markup Import (8-10 imágenes):**
- `markup-import-dialog.png` - Markup Import dialog
- `import-jpg-png-pdf.png` - JPG, PNG, PDF import
- `connected-markups-autodesk-docs.png` - Connected markups
- `bidirectional-synchronization.png` - Bi-directional sync
- `markup-assist-features.png` - Markup Assist features
- `incorporating-feedback.png` - Incorporating feedback
- `autodesk-docs-issues-integration.png` - Issues integration
- `review-approval-workflows.png` - Review workflows
- `mobile-markup-integration.png` - Mobile integration
- `review-cycle-optimization.png` - Cycle optimization

**Lección 7 - Autodesk Assistant (7-9 imágenes):**
- `autodesk-assistant-interface.png` - Assistant interface
- `ai-powered-help.png` - AI-powered help
- `natural-language-questions.png` - Natural language
- `generated-guides-summaries.png` - Generated guides
- `learning-resources-recommendations.png` - Resources
- `contextual-assistance.png` - Contextual help
- `real-time-problem-solving.png` - Real-time solving
- `feature-discovery.png` - Feature discovery
- `productivity-ai-assistant.png` - Productivity with AI

**Lección 8 - Otras Features 2026 (10-12 imágenes):**
- `arcgis-basemaps-integration.png` - ArcGIS integration
- `satellite-imagery-high-res.png` - Satellite imagery
- `aerial-imagery.png` - Aerial imagery
- `openstreetmaps.png` - OpenStreetMaps
- `streets-maps.png` - Streets maps
- `monochromatic-styles.png` - Light/dark styles
- `geolocation-drawings.png` - Geolocation
- `hatch-improvements.png` - Hatch improvements
- `patterns-without-boundaries.png` - Patterns without boundaries
- `flexible-fills.png` - Flexible fills
- `performance-improvements.png` - Performance stats
- `multi-platform-access.png` - Desktop, Web, Mobile

---

## 📊 **RESUMEN DE IMÁGENES NECESARIAS**

| Curso | Módulo | Imágenes Aprox. |
|-------|--------|-----------------|
| **BÁSICO** | Módulo 1 | 35-45 |
| **BÁSICO** | Módulo 2 | 55-65 |
| **BÁSICO** | Módulo 3 | 45-55 |
| **BÁSICO** | Módulo 4 | 55-65 |
| **BÁSICO** | Módulo 5 | 40-50 |
| **AVANZADO** | Módulo 1 | 55-65 |
| **AVANZADO** | Módulo 2 | 60-70 |
| **AVANZADO** | Módulo 3 | 60-70 |
| **AVANZADO** | Módulo 4 | 65-75 |
| **AVANZADO** | Módulo 5 | 70-80 |
| **TOTAL** | | **~540-640 imágenes** |

---

## 📝 **ESPECIFICACIONES TÉCNICAS**

### Formato de Imágenes:
- **Formato:** PNG (preferido) o JPG
- **Resolución:** 1920x1080px o menor
- **Peso:** Máximo 500KB por imagen
- **Nombrado:** Descriptivo en minúsculas con guiones
  - ✅ Correcto: `interface-ribbon-autocad.png`
  - ❌ Incorrecto: `IMG001.PNG`

### Tipo de Contenido:
1. **Screenshots de AutoCAD** (70%)
   - Interface completa
   - Diálogos de comandos
   - Ejemplos en proceso

2. **Diagramas y Tablas** (20%)
   - Tablas comparativas
   - Diagramas de flujo
   - Esquemas conceptuales

3. **Resultados Finales** (10%)
   - Ejercicios completados
   - Ejemplos prácticos
   - Before/After

---

## ✅ **PROCESO DE SUBIDA (Dashboard Profesor)**

1. Login al dashboard de profesor
2. Ir a "Cursos" → Seleccionar curso
3. Seleccionar módulo
4. Click en "Gestionar Imágenes"
5. Subir imágenes con los nombres exactos del listado
6. Las imágenes se referencian automáticamente en el markdown
7. Vista previa para verificar
8. Guardar cambios

---

## 🚨 **SI NO TENEMOS LA IMAGEN**

**Dejar el placeholder tal como está:**
```markdown
![Descripción](./imagenes/nombre-archivo.png)
```

**El sistema mostrará:**
- Un placeholder visual genérico
- O el alt text: "Descripción"
- **NO romperá el contenido**

**Ventajas:**
- ✅ El curso sigue funcionando
- ✅ Podemos agregar imágenes gradualmente
- ✅ Profesores pueden actualizar cuando tengan screenshots
- ✅ Fácil identificar qué imágenes faltan

---

## 📞 **CONTACTO EQUIPO DE CONTENIDO**

Para coordinar la creación de imágenes:
- Email: contenido@distmah.com.ve
- Slack: #autocad-2026-imagenes
- Trello: Board "AutoCAD 2026 - Imágenes Pendientes"

---

**Creado:** 2025-11-22
**Responsable:** Equipo de Contenido DISTMAH
**Versión:** 1.0
