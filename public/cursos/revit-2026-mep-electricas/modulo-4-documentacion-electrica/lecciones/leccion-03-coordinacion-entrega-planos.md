# Lección 3: Coordinación y Entrega de Planos

## Introducción

La **coordinación multidisciplinaria** y **preparación de planos** son las etapas finales antes de construcción. Los sistemas eléctricos deben coordinarse con MEP mecánicos, sanitarios, arquitectura y estructura para evitar interferencias. Los planos (sheets) deben ser claros, completos y cumplir estándares de la industria.

Esta lección cubre clash detection para sistemas eléctricos, coordinación con otras disciplinas, creación de sheets profesionales, anotaciones finales, y exportación a AutoCAD/PDF para entrega.

## Clash Detection - Sistemas Eléctricos

### Tipos de Clashes Eléctricos

**1. Cable Tray vs Ductos/Tuberías:**
- Cable tray de 600mm de ancho choca con ducto HVAC
- **Frecuente** en plénums congestionados

**2. Conduit vs Estructura:**
- Conduit eléctrico atraviesa viga de acero sin coordinación
- Requiere perforación estructural (aprobación requerida)

**3. Panelboards vs Arquitectura:**
- Panelboard ubicado donde habrá muro/puerta
- Falta de coordinación 2D/3D

**4. Equipos Eléctricos vs Clearance:**
- Switchboard a menos de 1m de muro (NEC 110.26 violation)
- Insuficiente working clearance

### Ejecutar Interference Check

**Paso 1: Coordination Model (Si Aplicable)**

**Método A - Modelo Único:**
- Arquitectura, estructura y MEP en mismo archivo
- Menos común, pero simplifica clash detection

**Método B - Links (Recomendado):**
1. Modelo eléctrico: `Project_MEP_E.rvt`
2. Vincular otros modelos:
   - **Insert** → **Link Revit** → `Project_MEP_M.rvt` (Mecánicas)
   - **Insert** → **Link Revit** → `Project_MEP_S.rvt` (Sanitarias)
   - **Insert** → **Link Revit** → `Project_STR.rvt` (Estructura)

**Paso 2: Configurar Interference Check**

1. **Collaborate** → **Interference Check** → **Run Interference Check**

**Paso 3: Selection A - Sistemas Eléctricos**

**Categories from:** `Current Project` (modelo eléctrico)

**Selection A:**
- ☑ **Cable Trays**
- ☑ **Conduits**
- ☑ **Electrical Equipment** (panelboards, switchboards)
- ☑ **Lighting Fixtures** (si relevante)

**Paso 4: Selection B - Otras Disciplinas**

**Clash Set 1 - Eléctrico vs Mecánico:**

**Categories from:** `Project_MEP_M.rvt` (link mecánicas)

**Selection B:**
- ☑ **Ducts**
- ☑ **Duct Fittings**
- ☑ **Mechanical Equipment**

**Tolerance:** `50mm` (detectar elementos a menos de 50mm - clearance mínimo)

**Paso 5: Ejecutar Check**

1. Click **OK**
2. Revit analiza (1-3 minutos)
3. **Interference Report** aparece con clashes

### Analizar Resultados

**Interference Report:**

| Element 1 | Element 2 | Status | Assigned To |
|-----------|-----------|--------|-------------|
| Cable Tray 600mm | Supply Duct 800x400 | New | - |
| Conduit 4" | W16x26 Beam | New | - |
| Panelboard LP-1 | Structural Column | New | - |

**Para cada clash:**

1. **Show** - Visualizar en 3D
2. **Asignar responsable:**
   - Cable tray vs duct → Coordinación MEP-E/MEP-M
   - Conduit vs beam → Estructural debe aprobar perforación
3. **Status:**
   - `Active` - Trabajando en solución
   - `Resolved` - Solucionado
   - `Approved` - Clash permanece pero con solución coordinada (ej. sleeve)

### Resolución de Clashes

**Ejemplo 1 - Cable Tray vs Duct:**

**Clash:** Cable tray 600mm @ elevation 3.2m intersecta supply duct 800x400 @ 3.0m.

**Solución:**
1. **Opción A:** Bajar cable tray a 2.8m (pasa bajo duct)
2. **Opción B:** Offset horizontal del cable tray 800mm (pasa al lado)
3. **Opción C:** MEP-M reroutea duct (coordinar con mecánicas)

**Decisión:** Opción A (más simple).

**Implementar:**
1. Seleccionar cable tray segment
2. **Properties** → **Offset:** `-400mm` (baja 400mm)
3. Verificar que NO crea nuevo clash abajo

**Re-run Interference Check** → Clash resuelto ✓

**Ejemplo 2 - Conduit vs Beam:**

**Clash:** Conduit 4" atraviesa viga W16x26.

**Solución:**
1. **Coordinación con estructural:**
   - Email: "Requiere perforación 4" (100mm) en viga W16x26 @ grid B-3"
   - Estructural verifica si es aceptable (no afecta capacidad)
   - **Aprobado:** Perforación permitida con refuerzo
2. **Documentar:**
   - Status: `Approved`
   - Comments: "4" penetration approved by structural engineer - See SK-STR-045"

**Clash permanece** en modelo, pero está coordinado.

![Clash Resolution](../imagenes/mod4-clash-resolution.png)

### Exportar Clash Report

1. **Interference Report** → **Export...**
2. **Format:** HTML (con imágenes)
3. **Name:** `Electrical_Clash_Report_2024-11-23.html`
4. **Save**

**Distribuir** a equipo de coordinación.

## Coordinación 2D (Plans)

### Overlay de Disciplinas

**Verificar en plantas 2D:**

**Paso 1: Activar Links**

En vista de plano Level 1:
1. **Visibility/Graphics** → **Revit Links** tab
2. ☑ `Project_MEP_M.rvt` (mecánicas)
3. ☑ `Project_MEP_S.rvt` (sanitarias)
4. **Display Settings:** `By host view`
5. **Override:** Halftone o color diferente

**Paso 2: Revisar Superposiciones**

**Buscar:**
- Panelboards en misma ubicación que equipos mecánicos
- Cable trays que cruzan tuberías
- Conduits en conflicto con ductos

**Marcar con Clouds:**
1. **Annotate** → **Revision Cloud**
2. Dibujar cloud alrededor de conflicto
3. **Text:** `Coordinate cable tray routing with MEP-M`

## Sheets (Planos) de Construcción

### Tipos de Sheets Eléctricos

**Set típico de planos eléctricos:**

**E-000 - Cover Sheet & Index**
- Título del proyecto
- Índice de planos
- Leyenda general

**E-001 - General Notes & Symbols**
- Notas generales eléctricas
- Leyenda de símbolos
- Abreviaturas

**E-100 Series - Power Plans**
- E-101: Ground Floor Power Plan
- E-102: Level 1 Power Plan
- E-103: Level 2 Power Plan
- Muestran: Panelboards, receptáculos, equipos

**E-200 Series - Lighting Plans**
- E-201: Ground Floor Lighting Plan
- E-202: Level 1 Lighting Plan
- Muestran: Luminarias, switches, circuitos

**E-300 Series - Single Line Diagrams**
- E-301: Main Distribution Single Line Diagram
- E-302: Emergency Power Single Line Diagram

**E-400 Series - Schedules & Details**
- E-401: Panel Schedules (LP-1, LP-2, PP-1...)
- E-402: Equipment Schedules
- E-403: Details (Panel mounting, conduit details, etc.)

**E-500 Series - Site & Exterior**
- E-501: Site Lighting Plan
- E-502: Exterior Power Plan

### Crear Sheet

**Paso 1: New Sheet**

1. **View** → **Sheets** → **New Sheet**
2. **Select a Titleblock:**
   - Use default o cargar custom titleblock (`.rfa`)
   - Ejemplo: `Titleblock - 24x36 - Electrical.rfa`
3. **OK**

**Paso 2: Configurar Titleblock**

**Editar parámetros del titleblock:**
- **Project Name:** `Commercial Building - Electrical Systems`
- **Sheet Number:** `E-101`
- **Sheet Name:** `Ground Floor - Power Plan`
- **Drawn By:** Tus iniciales
- **Checked By:** Supervisor
- **Date:** `2024-11-23`
- **Project Number:** `2024-045`

**Paso 3: Agregar View al Sheet**

1. **Project Browser** → **Floor Plans** → `Ground Floor - Power Plan` (vista preparada)
2. **Drag & drop** vista sobre sheet
3. Posicionar vista en área de dibujo
4. **Adjust scale** si necesario (típicamente 1:100 o 1:50 para plantas)

**Paso 4: Agregar Schedules**

1. **Project Browser** → **Panel Schedules** → `LP-1`
2. **Drag & drop** sobre sheet (típicamente en lado derecho)
3. Posicionar
4. Agregar más schedules si caben (LP-2, PP-1)

**Paso 5: Agregar Leyenda**

1. **Project Browser** → **Legends** → `Electrical Symbols Legend`
2. Drag & drop (típicamente esquina inferior derecha)

**Paso 6: Agregar Notas Generales**

1. **Annotate** → **Text**
2. Ubicación: Abajo del área de dibujo
3. **General Notes:**
   ```
   GENERAL NOTES:
   1. All work shall comply with NEC 2020 and local codes.
   2. Verify all dimensions and conditions in field before installation.
   3. Coordinate all penetrations with other trades.
   4. Provide 1m (3ft) minimum working clearance per NEC 110.26.
   5. All circuits 20A unless noted otherwise.
   6. Wire: #12 AWG Copper THHN minimum.
   7. See panel schedules for circuit details (Sheet E-401).
   ```

![Sheet Completo](../imagenes/mod4-sheet-complete.png)

### Viewport Control

**Ajustar vista en sheet:**

1. Double-click en viewport (área de vista en sheet)
2. **Pan/Zoom** para ajustar encuadre
3. **Crop Region** para limitar área visible
4. **Annotation Crop** para controlar anotaciones
5. **Activate View** → Editar vista sin salir del sheet

**Desactivar:** Click fuera del viewport

### Sheet Organization

**Browser Organization:**

**Sheets node en Project Browser:**
```
📁 Sheets (All)
  📁 E - Electrical
    📁 E-000 Series (General)
      └── E-001 - Notes & Symbols
    📁 E-100 Series (Power)
      └── E-101 - Ground Floor Power Plan
      └── E-102 - Level 1 Power Plan
    📁 E-200 Series (Lighting)
      └── E-201 - Ground Floor Lighting Plan
    📁 E-300 Series (Diagrams)
      └── E-301 - Main Single Line Diagram
```

**Configurar agrupación:**
1. **Project Browser** → Right-click **Sheets**
2. **Browser Organization...**
3. **Group by:** `Sheet Number` (agrupa por prefijo E-100, E-200)

## Anotaciones Finales

### Keynotes

**Uso:** Anotar detalles con números de referencia a especificaciones.

**Ejemplo:**
```
(1) Panelboard - 208Y/120V - 225A - See spec 16140
(2) Cable Tray - Ladder type - 600mm width - Galvanized
(3) GFCI Receptacle - 20A - Per NEC 210.8
```

**Procedimiento:**
1. **Annotate** → **Keynote**
2. Click en elemento
3. Seleccionar keynote de lista (cargada desde archivo `.txt`)
4. Keynote aparece con número

### Dimensiones Eléctricas

**Dimensionar:**
- Distancia entre panelboards y muros (clearance)
- Altura de montaje de switches (1.2m típico)
- Spacing entre receptáculos (verificar 1.8m)

**Procedimiento:**
1. **Annotate** → **Aligned Dimension**
2. Click puntos a dimensionar
3. **Text Override:** Agregar nota si necesario

### Etiquetas Finales (Tags)

**Verificar que todos los elementos estén etiquetados:**

**Checklist:**
- ☐ Todos los panelboards tagged con name
- ☐ Luminarias tagged con type
- ☐ Receptáculos tagged (opcional, según estándar)
- ☐ Equipos principales tagged (transformers, switchboards)

**Tag All Not Tagged:**
1. **Annotate** → **Tag All**
2. Category: **Electrical Equipment**
3. **OK** → Revit etiqueta automáticamente faltantes

## Exportación

### Export a AutoCAD (DWG)

**Paso 1: Configurar Export Settings**

1. **File** → **Export** → **CAD Formats** → **DWG**
2. **Export CAD Formats** dialog:

**Layers:**
- **Mapping:** Seleccionar `AIA CAD Layer Standards` (layers estándar)
  - Panelboards → Layer `E-PANL`
  - Lighting → Layer `E-LITE`
  - Power → Layer `E-POWR`

**Coordinate System:**
- **Shared Coordinates** (si proyecto usa coordenadas compartidas)

**Export Options:**
- **Export views on sheets:** ☑ (exportar sheets completos)
- **One DWG per sheet:** ☑ (un archivo `.dwg` por plano)
- **Export room/area as polyline:** ☐ (no necesario para eléctrico)

3. Click **Next**

**Paso 2: Seleccionar Sheets**

- ☑ Seleccionar todos los sheets E-series
- Or: Select all

**Paso 3: Export**

1. Click **OK**
2. **Save location:** Seleccionar carpeta `Exports/DWG/`
3. Revit genera archivos:
   - `E-101 - Ground Floor Power Plan.dwg`
   - `E-102 - Level 1 Power Plan.dwg`
   - etc.

**Resultado:** Archivos DWG compatibles con AutoCAD.

### Export a PDF

**Para distribución a contractors:**

**Paso 1: Publish**

1. **File** → **Print**
2. **Print** dialog:
   - Printer: **Adobe PDF** o **Microsoft Print to PDF**
   - **Print Range:** Selected views/sheets
   - **Combine multiple files:** ☑ (un PDF con todos los sheets)

**Paso 2: Seleccionar Sheets**

- Seleccionar todos E-series sheets

**Paso 3: Print Setup**

- **Paper Size:** Match sheet size (24"×36" típico)
- **Zoom:** `Fit to Page`
- **Quality:** `High` (300-600 DPI)

**Paso 4: Print/Save**

1. Click **OK**
2. Save as: `Electrical_Drawings_Set_2024-11-23.pdf`

**Resultado:** PDF de múltiples páginas con todos los planos.

## Revisiones y Submittals

### Revision Tracking

**Cuando se modifica proyecto después de emisión inicial:**

**Paso 1: Create Revision**

1. **View** → **Sheet Composition** → **Revisions**
2. **Sheet Issues/Revisions** dialog:
   - Click **Add**
   - **Revision Number:** `1`
   - **Date:** `2024-12-01`
   - **Description:** `Added receptacles per client request`
3. **OK**

**Paso 2: Revision Cloud en Sheet**

1. Abrir sheet afectado (ej. E-101)
2. **Annotate** → **Revision Cloud**
3. Dibujar cloud alrededor de área modificada
4. **Properties:** Assign **Revision:** `1`

**Paso 3: Update Titleblock**

Titleblock muestra automáticamente:
```
REV   DATE        DESCRIPTION
1     2024-12-01  Added receptacles
```

### Submittal Package

**Documentos típicos en submittal eléctrico:**

1. **Drawings (Planos):**
   - PDF set completo (E-001 a E-500)
   - DWG files (si requerido por cliente)

2. **Schedules:**
   - Panel schedules (todas)
   - Equipment schedules
   - Circuit schedules
   - Lighting fixture schedule

3. **Calculations:**
   - Load calculations (exportar desde Revit schedules)
   - Voltage drop calculations (Excel basado en circuit lengths)
   - Short circuit analysis (software externo - ETAP/SKM)

4. **Reports:**
   - Clash detection report (HTML con imágenes)
   - Coordination meeting minutes

5. **Specifications:**
   - Division 26 - Electrical (texto, típicamente Word/PDF separado)

**Organizar en carpeta:**
```
/Submittal_Package_Electrical_2024-11-23/
  /01_Drawings/
    E-000_Series.pdf
    E-100_Series.pdf
    E-200_Series.pdf
    ...
  /02_Schedules/
    Panel_Schedules_All.pdf
    Equipment_Schedule.xlsx
  /03_Calculations/
    Load_Calculations.xlsx
    Voltage_Drop_Analysis.xlsx
  /04_Reports/
    Clash_Detection_Report.html
  /05_Specifications/
    Div26_Electrical_Specifications.pdf
  README.txt (índice del package)
```

## Mejores Prácticas

### 1. Consistent Sheet Numbering

**Usar sistema estándar de numeración:**
- E-001 a E-099: General
- E-100 a E-199: Power
- E-200 a E-299: Lighting
- E-300 a E-399: Diagrams
- E-400 a E-499: Schedules/Details

**NO saltar números** arbitrariamente.

### 2. View Templates para Sheets

**Crear view templates dedicados para cada tipo de sheet:**
- `Sheet View - Power Plan` (muestra solo equipos de fuerza)
- `Sheet View - Lighting Plan` (muestra solo iluminación)

**Aplicar antes de colocar en sheet:**
- Vista consistente entre sheets
- Menos ajustes manuales

### 3. Quality Control Checklist

**Antes de emitir planos:**

- ☐ Panel schedules actualizados (match model)
- ☐ Single line diagrams actualizados
- ☐ Clash detection ejecutado y clashes críticos resueltos
- ☐ Todos los sheets tienen titleblock completo
- ☐ General notes presentes en Sheet E-001
- ☐ Leyendas completas
- ☐ Tags verificados (no faltantes)
- ☐ Dimensiones críticas verificadas
- ☐ Revisión por ingeniero senior (QC stamp)

### 4. Backup y Versioning

**Antes de exportar/emitir:**
1. **Save As:** `Project_Electrical_v2.5_ISSUED.rvt`
2. Backup en servidor/cloud
3. **NO modificar** versión issued (crear v2.6 para cambios futuros)

## Ejercicio Aplicado

**Ver:** Ejercicio 3 en `ejercicios.md` - Ejecutar clash detection completo, crear set de 8 sheets eléctricos profesionales, exportar a PDF/DWG.

---

## Conclusión del Módulo 4

Este módulo completó la **documentación eléctrica profesional**:

1. ✅ Panel schedules y circuit schedules completos
2. ✅ Diagramas unifilares según IEEE/ANSI
3. ✅ Coordinación multidisciplinaria con clash detection
4. ✅ Sheets de construcción profesionales
5. ✅ Exportación a CAD y PDF para entrega

---

## Conclusión del Curso MEP Eléctricas

**¡Felicitaciones!** Has completado el curso **Revit MEP 2026 - Instalaciones Eléctricas**.

**Habilidades adquiridas:**
- Diseño completo de sistemas de distribución eléctrica
- Circuitos de iluminación y fuerza según NEC
- Balanceo de cargas y cálculo de capacidades
- Sistemas de emergencia y respaldo
- Documentación técnica profesional
- Coordinación BIM multidisciplinaria

**Próximos pasos:**
- Aplicar conocimientos en proyectos reales
- Certificación Autodesk Revit MEP (Electrical)
- Explorar software complementario (ETAP, SKM PowerTools)
- Continuar con curso **MEP Sanitarias** para completar formación MEP integral

---

**DISTMAH Universidad Autodesk - Revit MEP 2026 Eléctricas - CURSO COMPLETO**
