# Lección 2: Automated Design Workflows

**Duración:** 1 hora
**Nivel:** Avanzado
**Objetivo:** Automatizar el diseño completo de carreteras desde datos hasta planos finales

---

## Introducción a la Automatización de Diseño

La automatización de workflows de diseño es el verdadero poder de Dynamo for Civil 3D. En esta lección aprenderás a crear scripts que diseñan carreteras completas automáticamente, eliminando días de trabajo manual.

### Beneficios de la Automatización Completa

**Productividad Extrema:**
- Diseño de carreteras en minutos en lugar de días
- Procesamiento de múltiples alternativas simultáneamente
- Iteraciones de diseño instantáneas

**Consistencia Total:**
- Aplicación uniforme de estándares
- Eliminación de errores humanos
- Cumplimiento garantizado de normativas

**Escalabilidad:**
- Mismo script para 1 km o 100 km
- Procesamiento batch de múltiples proyectos
- Reutilización entre proyectos similares

### Workflow Tradicional vs Automatizado

**WORKFLOW TRADICIONAL (Manual):**
```
1. Importar datos topográficos → 2-3 horas
2. Crear superficie → 1 hora
3. Diseñar alineamiento horizontal → 4-6 horas
4. Diseñar perfil vertical → 3-4 horas
5. Crear ensamblajes → 2-3 horas
6. Construir corredor → 2-3 horas
7. Ajustes y refinamiento → 4-6 horas
8. Generar secciones transversales → 1-2 horas
9. Crear planos → 3-4 horas

TOTAL: 22-32 horas (3-4 días laborales)
```

**WORKFLOW AUTOMATIZADO (Dynamo):**
```
1. Preparar datos Excel → 30 minutos
2. Ejecutar script Dynamo → 5-10 minutos
3. Revisión y ajustes finales → 1-2 horas
4. Generar planos automáticamente → 5 minutos

TOTAL: 2-3 horas (reducción del 90%)
```

---

## Automatización de Alineamientos Horizontales

Los alineamientos horizontales son la columna vertebral de cualquier proyecto vial. Automatizaremos su creación desde datos tabulares.

### Datos de Entrada para Alineamientos

**Formato Excel (alignment_data.xlsx):**

```
Hoja: Horizontal_Alignment

| Station | Easting   | Northing  | Element_Type | Value    | Parameter   |
|---------|-----------|-----------|--------------|----------|-------------|
| 0+000   | 1000.000  | 2000.000  | Start        | -        | -           |
| 0+150   | 1150.000  | 2000.000  | Tangent      | 150.000  | Length      |
| 0+150   | -         | -         | Curve        | 250.000  | Radius      |
| 0+228.54| -         | -         | Curve_End    | 50.000   | Delta_Angle |
| 0+228.54| -         | -         | Tangent      | 200.000  | Length      |
| 0+428.54| 1350.000  | 2100.000  | End          | -        | -           |
```

**Datos Mínimos Requeridos:**
- Punto inicial (Easting, Northing)
- Secuencia de elementos (tangentes, curvas, espirales)
- Parámetros geométricos (radio, longitud, delta)
- Punto final

### Script: Alineamiento Automático Completo

**PASO 1: Importar Configuración del Proyecto**

```
[File Path: alignment_data.xlsx]
    ↓
[Excel.ReadFromFile]
    ├── file: File Path
    ├── sheetName: "Horizontal_Alignment"
    └── readAsStrings: False
    ↓
[List.Transpose]
    Output: Columnas como listas
```

**PASO 2: Extraer Parámetros del Alineamiento**

```
[List.GetItemAtIndex]
    Inputs:
    ├── list: Datos transpuestos
    └── index: 0 (Station)
    Output: Lista de estaciones

[List.GetItemAtIndex]
    Inputs:
    ├── list: Datos transpuestos
    └── index: 1 (Easting)
    Output: Lista de coordenadas Este

[List.GetItemAtIndex]
    Inputs:
    ├── list: Datos transpuestos
    └── index: 2 (Northing)
    Output: Lista de coordenadas Norte

[List.GetItemAtIndex]
    Inputs:
    ├── list: Datos transpuestos
    └── index: 3 (Element_Type)
    Output: Lista de tipos de elemento
```

**PASO 3: Crear Punto de Inicio**

```
[Point.ByCoordinates]
    Inputs:
    ├── x: First Easting (List.FirstItem)
    ├── y: First Northing (List.FirstItem)
    └── z: 0
    Output: Punto inicial del alineamiento
```

**PASO 4: Procesar Elementos Geométricos**

```
[Python Script Node]
Input Code:

import clr
clr.AddReference('AeccDbMgd')
from Autodesk.Civil.DatabaseServices import *

# Inputs
element_types = IN[0]
values = IN[1]
parameters = IN[2]

# Procesar elementos
elements = []
for i, elem_type in enumerate(element_types):
    if elem_type == "Tangent":
        length = values[i]
        elements.append({"type": "Line", "length": length})

    elif elem_type == "Curve":
        radius = values[i]
        delta = parameters[i]
        elements.append({"type": "Arc", "radius": radius, "delta": delta})

    elif elem_type == "Spiral":
        length = values[i]
        elements.append({"type": "Spiral", "length": length})

OUT = elements
```

**PASO 5: Crear Alineamiento en Civil 3D**

```
[Civil3D.Alignment.Create]
    Inputs:
    ├── name: String "Highway-Auto-01"
    ├── startPoint: Punto inicial
    ├── elements: Lista de elementos procesados
    ├── site: Civil3D.Site.Current
    └── style: Alignment Style "Design"
    Output: Alignment object creado
```

### Script Completo - Diagrama de Flujo

```
┌─────────────────┐
│  Excel Import   │
│  alignment_data │
└────────┬────────┘
         │
    ┌────▼─────┐
    │ Transpose│
    │  Columns │
    └────┬─────┘
         │
    ┌────▼────────────────────┐
    │ Extract Parameters      │
    ├─────────────────────────┤
    │ - Stations              │
    │ - Easting/Northing      │
    │ - Element Types         │
    │ - Values                │
    └────┬────────────────────┘
         │
    ┌────▼─────────────────┐
    │ Process Elements     │
    │ (Python Script)      │
    └────┬─────────────────┘
         │
    ┌────▼──────────────────┐
    │ Create Alignment      │
    │ in Civil 3D           │
    └───────────────────────┘
```

---

## Generación Automática de Perfiles

Los perfiles verticales se optimizan automáticamente para minimizar movimiento de tierras.

### Algoritmo de Optimización de Perfil

**Objetivo:** Minimizar volumen de corte + relleno manteniendo restricciones.

**Restricciones:**
- Pendiente máxima: 8%
- Pendiente mínima: 0.5%
- Radio de curva vertical mínimo: 2500m
- Distancia de visibilidad: cumplir normativa

**Inputs Requeridos:**
- Superficie de terreno existente
- Alineamiento horizontal
- Parámetros de diseño

### Script: Perfil Optimizado Automático

**PASO 1: Obtener Superficie y Alineamiento**

```
[Civil3D.Surface.Select]
    Output: Surface "EG Surface"

[Civil3D.Alignment.Select]
    Output: Alignment "Highway-Auto-01"
```

**PASO 2: Crear Perfil de Superficie**

```
[Civil3D.Profile.CreateFromSurface]
    Inputs:
    ├── alignment: Alignment "Highway-Auto-01"
    ├── surface: Surface "EG Surface"
    ├── name: "EG Profile"
    └── style: Profile Style "Existing Ground"
    Output: Profile object
```

**PASO 3: Definir Parámetros de Optimización**

```
[Code Block]
// Parámetros de diseño
max_grade = 0.08;          // 8% pendiente máxima
min_grade = 0.005;         // 0.5% pendiente mínima
min_curve_radius = 2500;   // Radio mínimo curva vertical
target_grade = 0.03;       // Pendiente objetivo 3%
```

**PASO 4: Algoritmo de Optimización (Python)**

```
[Python Script Node]

import clr
clr.AddReference('AeccDbMgd')
clr.AddReference('AcMgd')
clr.AddReference('AcDbMgd')

from Autodesk.Civil.DatabaseServices import *
from Autodesk.AutoCAD.Geometry import *
import math

# Inputs
alignment = IN[0]
surface_profile = IN[1]
max_grade = IN[2]
min_grade = IN[3]
min_radius = IN[4]

# Obtener elevaciones del terreno
stations = []
elevations = []

start_station = alignment.StartingStation
end_station = alignment.EndingStation
interval = 20.0  # Muestra cada 20m

station = start_station
while station <= end_station:
    stations.append(station)
    # Obtener elevación del perfil de superficie
    elevation = surface_profile.ElevationAt(station)
    elevations.append(elevation)
    station += interval

# Algoritmo de optimización
# Objetivo: Balance de corte/relleno con pendientes suaves

optimized_elevations = []
start_elev = elevations[0]
current_elev = start_elev

for i, station in enumerate(stations):
    if i == 0:
        optimized_elevations.append(start_elev)
        continue

    # Calcular pendiente natural del terreno
    natural_grade = (elevations[i] - elevations[i-1]) / interval

    # Ajustar pendiente a restricciones
    if abs(natural_grade) > max_grade:
        adjusted_grade = max_grade if natural_grade > 0 else -max_grade
    elif abs(natural_grade) < min_grade:
        adjusted_grade = min_grade if natural_grade > 0 else -min_grade
    else:
        adjusted_grade = natural_grade

    # Calcular nueva elevación
    new_elev = current_elev + (adjusted_grade * interval)

    # Balance cut/fill: acercar a terreno natural
    diff = elevations[i] - new_elev
    adjustment = diff * 0.3  # Factor de suavizado
    new_elev += adjustment

    optimized_elevations.append(new_elev)
    current_elev = new_elev

OUT = [stations, optimized_elevations]
```

**PASO 5: Crear Perfil de Diseño**

```
[Civil3D.Profile.CreateByLayout]
    Inputs:
    ├── alignment: Alignment
    ├── name: "Design Profile Optimized"
    ├── stations: Lista de estaciones
    ├── elevations: Elevaciones optimizadas
    └── style: Profile Style "Design"
    Output: Profile de diseño creado
```

**PASO 6: Aplicar Curvas Verticales Automáticas**

```
[Civil3D.Profile.AddVerticalCurves]
    Inputs:
    ├── profile: Profile de diseño
    ├── min_radius: 2500
    └── curve_type: "Parabolic"
    Output: Profile con curvas aplicadas
```

### Validación de Resultados

**Checks Automáticos:**

```
[Python Script - Validation]

# Validar pendientes
max_grade_actual = max([abs(g) for g in grades])
if max_grade_actual > max_grade:
    OUT = ["ERROR: Pendiente excede máximo permitido"]
else:
    OUT = ["OK: Pendientes dentro de límites"]

# Validar radios de curva
min_radius_actual = min(curve_radii)
if min_radius_actual < min_radius:
    OUT.append("WARNING: Radio de curva menor al mínimo")
else:
    OUT.append("OK: Radios de curva adecuados")

# Calcular volumen de movimiento de tierras
total_cut = sum([c for c in cut_volumes if c > 0])
total_fill = sum([f for f in fill_volumes if f > 0])
balance = total_cut - total_fill

OUT.append(f"Corte total: {total_cut:.2f} m³")
OUT.append(f"Relleno total: {total_fill:.2f} m³")
OUT.append(f"Balance: {balance:.2f} m³")
```

---

## Creación Automática de Ensamblajes

Los ensamblajes (assemblies) definen la sección transversal típica de la carretera.

### Tipos de Ensamblajes Parametricos

**1. Carretera 2 Carriles**
```
Configuración:
├── Lane Width: 3.65m
├── Shoulder Width: 1.50m
├── Crown Slope: 2%
├── Shoulder Slope: 4%
└── Cut/Fill Slopes: 2:1 / 1.5:1
```

**2. Autopista 4 Carriles**
```
Configuración:
├── Lane Width: 3.65m
├── Lanes per Direction: 2
├── Median Width: 10.00m
├── Shoulder Width: 2.50m
└── Barriers: Incluir
```

**3. Calle Urbana**
```
Configuración:
├── Lane Width: 3.00m
├── Parking Lane: 2.50m
├── Sidewalk Width: 2.00m
├── Curb & Gutter: Incluir
└── Utilities: Conduit para servicios
```

### Script: Assembly Generator

**PASO 1: Definir Parámetros del Proyecto**

```
[Code Block - Design Parameters]

// Parámetros geométricos
lane_width = 3.65;
num_lanes_left = 1;
num_lanes_right = 1;
shoulder_width = 1.50;
crown_slope = -0.02;      // -2%
shoulder_slope = -0.04;   // -4%

// Pendientes de talud
cut_slope = 0.5;          // 2:1 (H:V)
fill_slope = 0.67;        // 1.5:1 (H:V)

// Capas del pavimento
surface_thickness = 0.05;
base_thickness = 0.15;
subbase_thickness = 0.20;
```

**PASO 2: Crear Assembly Base**

```
[Civil3D.Assembly.Create]
    Inputs:
    ├── name: "Assembly-Highway-2Lane"
    └── assembly_style: "Standard"
    Output: Assembly object
```

**PASO 3: Agregar Subassemblies (Componentes)**

```
[Python Script - Build Assembly]

import clr
clr.AddReference('AeccDbMgd')
from Autodesk.Civil.DatabaseServices import *

# Inputs
assembly = IN[0]
lane_width = IN[1]
shoulder_width = IN[2]
crown_slope = IN[3]

# Obtener catálogo de subassemblies
catalog = Autodesk.Civil.DatabaseServices.SubassemblyCatalog

# LADO IZQUIERDO (LEFT)

# 1. Lane izquierda
lane_left = catalog.GetSubassembly("BasicLane")
lane_left.Width = lane_width
lane_left.Slope = crown_slope
lane_left.Side = SideType.Left
assembly.AddSubassembly(lane_left)

# 2. Shoulder izquierdo
shoulder_left = catalog.GetSubassembly("BasicShoulder")
shoulder_left.Width = shoulder_width
shoulder_left.Slope = shoulder_slope
shoulder_left.Side = SideType.Left
assembly.AddSubassembly(shoulder_left)

# 3. Daylight izquierdo (talud)
daylight_left = catalog.GetSubassembly("BasicSideSlopeCutDitch")
daylight_left.CutSlope = cut_slope
daylight_left.FillSlope = fill_slope
daylight_left.Side = SideType.Left
assembly.AddSubassembly(daylight_left)

# LADO DERECHO (RIGHT)

# 1. Lane derecha
lane_right = catalog.GetSubassembly("BasicLane")
lane_right.Width = lane_width
lane_right.Slope = crown_slope
lane_right.Side = SideType.Right
assembly.AddSubassembly(lane_right)

# 2. Shoulder derecho
shoulder_right = catalog.GetSubassembly("BasicShoulder")
shoulder_right.Width = shoulder_width
shoulder_right.Slope = shoulder_slope
shoulder_right.Side = SideType.Right
assembly.AddSubassembly(shoulder_right)

# 3. Daylight derecho (talud)
daylight_right = catalog.GetSubassembly("BasicSideSlopeCutDitch")
daylight_right.CutSlope = cut_slope
daylight_right.FillSlope = fill_slope
daylight_right.Side = SideType.Right
assembly.AddSubassembly(daylight_right)

OUT = assembly
```

**PASO 4: Agregar Capas de Pavimento**

```
[Civil3D.Assembly.AddShapeLinks]
    Inputs:
    ├── assembly: Assembly creado
    ├── layer_type: "Pavement"
    ├── material: "Asphalt"
    ├── thickness: 0.05
    └── width: lane_width
    Output: Assembly con capas
```

**PASO 5: Configurar Targets**

```
[Civil3D.Assembly.SetTargets]
    Inputs:
    ├── assembly: Assembly
    ├── surface_target: "EG Surface"
    ├── width_target: None
    └── offset_target: None
    Output: Assembly configurado
```

---

## Corredores Parametricos Completos

El corredor es la combinación del alineamiento, perfil y assembly.

### Script: Corridor Builder Automático

**PASO 1: Obtener Objetos Base**

```
[Civil3D.Alignment.Select]
    Output: Alignment

[Civil3D.Profile.Select]
    Output: Profile de diseño

[Civil3D.Assembly.Select]
    Output: Assembly creado anteriormente

[Civil3D.Surface.Select]
    Output: Surface "EG Surface"
```

**PASO 2: Definir Regiones del Corredor**

```
[Code Block - Corridor Regions]

// Región 1: Tangente inicial
region_1_start = 0+000;
region_1_end = 0+150;
region_1_assembly = "Assembly-Highway-2Lane";
region_1_frequency = 10;  // Cada 10m

// Región 2: Curva
region_2_start = 0+150;
region_2_end = 0+228.54;
region_2_assembly = "Assembly-Highway-2Lane-Widened";
region_2_frequency = 5;  // Cada 5m en curvas

// Región 3: Tangente final
region_3_start = 0+228.54;
region_3_end = 0+428.54;
region_3_assembly = "Assembly-Highway-2Lane";
region_3_frequency = 10;
```

**PASO 3: Crear Corredor**

```
[Civil3D.Corridor.Create]
    Inputs:
    ├── name: "Corridor-Highway-Auto"
    ├── alignment: Alignment
    ├── profile: Profile de diseño
    ├── assembly: Assembly principal
    ├── target_surface: "EG Surface"
    └── corridor_style: "Design"
    Output: Corridor object
```

**PASO 4: Agregar Regiones**

```
[Python Script - Add Regions]

import clr
clr.AddReference('AeccDbMgd')
from Autodesk.Civil.DatabaseServices import *

# Inputs
corridor = IN[0]
regions_data = IN[1]  # Lista de regiones

# Agregar cada región
for region in regions_data:
    baseline = corridor.Baselines[0]

    new_region = baseline.AddRegion(
        region['start_station'],
        region['end_station'],
        region['assembly'],
        region['frequency']
    )

    new_region.Name = region['name']

OUT = corridor
```

**PASO 5: Aplicar Targets a Regiones**

```
[Civil3D.Corridor.ApplyTargets]
    Inputs:
    ├── corridor: Corridor
    ├── surface_targets: ["EG Surface"]
    ├── width_targets: []
    └── offset_targets: []
    Output: Corridor con targets aplicados
```

**PASO 6: Rebuild y Validación**

```
[Civil3D.Corridor.Rebuild]
    Input: corridor
    Output: Corridor reconstruido

[Python Script - Validation]

# Verificar construcción completa
corridor = IN[0]

errors = []
warnings = []

# Check 1: Todas las regiones construidas
for baseline in corridor.Baselines:
    for region in baseline.Regions:
        if not region.IsValid:
            errors.append(f"Región {region.Name} inválida")

# Check 2: Applied Assemblies
total_assemblies = corridor.AppliedAssembliesCount
if total_assemblies == 0:
    errors.append("No se aplicaron assemblies")

# Check 3: Feature Lines generadas
feature_lines = corridor.FeatureLines
if len(feature_lines) == 0:
    warnings.append("No se generaron feature lines")

OUT = {
    "status": "OK" if len(errors) == 0 else "ERROR",
    "errors": errors,
    "warnings": warnings,
    "total_assemblies": total_assemblies
}
```

---

## Automatización de Intersecciones

Las intersecciones son complejas pero pueden automatizarse completamente.

### Script: Intersection Creator

**PASO 1: Definir Geometría de Intersección**

```
[Code Block - Intersection Parameters]

// Carretera principal
main_road_alignment = "Highway-01";
main_road_station = 0+250;

// Carretera secundaria
secondary_road_alignment = "Local-Road-01";
secondary_road_station = 0+000;

// Parámetros de intersección
intersection_type = "T-Intersection";  // T, Cross, Roundabout
curb_radius = 10.0;  // Radio de esquina
lane_taper_length = 50.0;  // Longitud de transición
```

**PASO 2: Crear Intersection Object**

```
[Civil3D.Intersection.Create]
    Inputs:
    ├── type: "T-Intersection"
    ├── main_alignment: Alignment principal
    ├── main_station: Estación de intersección
    ├── secondary_alignment: Alignment secundario
    ├── secondary_station: Estación secundaria
    └── curb_radius: 10.0
    Output: Intersection object
```

**PASO 3: Generar Corredores de Intersección**

```
[Civil3D.Intersection.CreateCorridors]
    Inputs:
    ├── intersection: Intersection object
    ├── assembly_curb: "Assembly-Curb-Return"
    ├── assembly_taper: "Assembly-Lane-Taper"
    └── target_surface: "EG Surface"
    Output: Lista de corredores de intersección
```

---

## Producción Automática de Planos

El paso final es generar planos listos para imprimir automáticamente.

### Script: Sheet Generator

**PASO 1: Definir Template y Configuración**

```
[File Path]
    Path: "C:\Standards\Templates\Plan-Profile-Sheet.dwt"

[Code Block - Sheet Configuration]

// Configuración de hojas
sheet_size = "ANSI D (34x22)";
scale_horizontal = "1:1000";
scale_vertical = "1:100";
station_range = 100;  // 100m por hoja
```

**PASO 2: Crear Layout Views**

```
[Python Script - Generate Sheets]

import clr
clr.AddReference('AeccDbMgd')
clr.AddReference('AcMgd')

from Autodesk.Civil.DatabaseServices import *
from Autodesk.AutoCAD.DatabaseServices import *

# Inputs
alignment = IN[0]
profile = IN[1]
template_path = IN[2]
station_range = IN[3]

# Calcular número de hojas
start_station = alignment.StartingStation
end_station = alignment.EndingStation
num_sheets = int((end_station - start_station) / station_range) + 1

sheets_created = []

for i in range(num_sheets):
    sheet_start = start_station + (i * station_range)
    sheet_end = min(sheet_start + station_range, end_station)

    # Crear nuevo layout
    layout_name = f"Sheet-{i+1:03d}"

    # Crear vista de planta-perfil
    view = ProfileView.Create(
        alignment,
        profile,
        sheet_start,
        sheet_end,
        layout_name
    )

    sheets_created.append(layout_name)

OUT = sheets_created
```

**PASO 3: Agregar Anotaciones Automáticas**

```
[Civil3D.ProfileView.AddLabels]
    Inputs:
    ├── profile_view: Vista creada
    ├── major_stations: True
    ├── minor_stations: True
    ├── grade_breaks: True
    └── vertical_curves: True
    Output: Vista con labels
```

**PASO 4: Exportar a PDF**

```
[Civil3D.Layout.PublishToPDF]
    Inputs:
    ├── layouts: Lista de layouts creados
    ├── output_path: "C:\Projects\Output\Sheets.pdf"
    ├── multi_sheet: True
    └── layer_control: "Plot"
    Output: PDF multi-página generado
```

---

## Proyecto Práctico: Carretera Completa Automatizada

### Objetivo del Proyecto

Crear un script maestro que diseñe una carretera completa desde datos tabulares hasta planos finales.

### Inputs del Proyecto

**1. alignment_data.xlsx** - Geometría horizontal
**2. design_parameters.xlsx** - Parámetros de diseño
**3. surface.dwg** - Superficie topográfica
**4. template.dwt** - Template de planos

### Outputs Esperados

1. Alineamiento horizontal creado
2. Perfil vertical optimizado
3. Assembly parametrico
4. Corredor completo construido
5. Superficies de corredor
6. Planos PDF generados automáticamente

### Workflow Integrado

```
┌──────────────┐
│ Excel Import │
│ - Alignment  │
│ - Parameters │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ Create Alignment │
│ (Horizontal)     │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Create Profile   │
│ (Optimized)      │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Create Assembly  │
│ (Parametric)     │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Build Corridor   │
│ (Complete)       │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Generate Sheets  │
│ (Automatic)      │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Export to PDF    │
│ (Ready to Print) │
└──────────────────┘
```

### Tiempo de Ejecución

- Manual: 3-4 días
- Automatizado: 15-20 minutos
- Ahorro: 95%+

---

## Best Practices para Workflows Automatizados

### 1. Modularidad

Divide scripts grandes en módulos reutilizables:

```
Modules:
├── ImportData.dyn
├── CreateAlignment.dyn
├── OptimizeProfile.dyn
├── BuildAssembly.dyn
├── CreateCorridor.dyn
└── GenerateSheets.dyn
```

### 2. Error Handling

Implementa validación en cada paso:

```python
try:
    alignment = create_alignment(data)
    if alignment is None:
        raise Exception("Failed to create alignment")
except Exception as e:
    OUT = f"ERROR: {str(e)}"
```

### 3. Logging

Registra progreso y resultados:

```python
log = []
log.append(f"Started: {datetime.now()}")
log.append(f"Alignment created: {alignment.Name}")
log.append(f"Profile optimized: {profile.Name}")
log.append(f"Completed: {datetime.now()}")
OUT = log
```

### 4. Parametrización

Todo debe ser configurable:

```
Parameters:
├── Design Standards
├── Material Properties
├── Geometric Constraints
└── Output Preferences
```

---

## Resumen de la Lección

Has aprendido a automatizar:

✅ **Alineamientos Horizontales**
- Creación desde datos Excel
- Elementos geométricos automáticos
- Validación de diseño

✅ **Perfiles Verticales**
- Optimización de corte/relleno
- Restricciones de pendiente
- Curvas verticales automáticas

✅ **Ensamblajes Parametricos**
- Configuración flexible
- Múltiples tipos de carretera
- Subassemblies dinámicos

✅ **Corredores Completos**
- Construcción automática
- Regiones múltiples
- Validación integrada

✅ **Producción de Planos**
- Generación automática de hojas
- Anotaciones completas
- Export to PDF

---

## Siguiente Paso

En la **Lección 3: Python Scripting in Civil 3D**, aprenderás a:
- Programar en Python para Civil 3D
- Acceder a la API completa
- Crear scripts batch avanzados
- Integrar con bases de datos

[Continuar a Lección 3 →](./leccion-3.md)

---

**DISTMAH Advanced Technical Center (ATC)**
*Automatización extrema de workflows BIM desde 2024*
