# Lección 3: Styles y Templates de Civil 3D

**Duración:** 60 minutos
**Módulo:** 1 - Introducción a Civil 3D 2026
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué son los Styles en Civil 3D y por qué son críticos
✅ Diferenciar entre Object Styles, Label Styles, y Table Styles
✅ Crear y modificar styles básicos
✅ Importar y exportar styles entre proyectos
✅ Comprender la diferencia entre Templates (.dwt) y Style Libraries
✅ Crear un template personalizado con estándares corporativos

---

## Introducción

Los **Styles** son el corazón del sistema de gestión visual de Civil 3D. Controlan cómo se visualizan y anotan todos los objetos: desde superficies topográficas hasta redes de tuberías.

**Analogía:** Los Styles son como "hojas de estilo CSS" en diseño web - defines la apariencia UNA VEZ y se aplica consistentemente a todos los objetos de ese tipo.

**Beneficios de los Styles:**
- **Consistencia visual** - Todos los proyectos de tu empresa lucen igual
- **Eficiencia** - Cambias un style, todos los objetos se actualizan automáticamente
- **Cumplimiento de estándares** - CAD standards, normas corporativas, ISO
- **Productividad** - No formateas manualmente cada etiqueta

**Ejemplo práctico:**
Tienes 50 superficies topográficas en un proyecto. Con styles, puedes cambiar el color de todas las curvas de nivel (de verde a café) editando UN SOLO style. Sin styles, tendrías que editar manualmente cada superficie.

---

## 1. ¿Qué son los Styles en Civil 3D?

### Tipos de Styles

Civil 3D utiliza **tres categorías principales** de styles:

#### 1.1 Object Styles
Controlan la **apariencia visual** de objetos Civil 3D.

**Ejemplos:**
- **Surface Styles** - Cómo se visualiza una superficie (contours, triangulation, elevations)
- **Alignment Styles** - Línea central, curvas, tangentes
- **Profile Styles** - Perfiles longitudinales
- **Pipe Network Styles** - Tuberías y estructuras

**Características:**
- Definen colores, layers, lineweights
- Controlan qué elementos se muestran (contours, triangles, slope arrows)
- Pueden tener múltiples "display configurations" (2D, 3D, Section)

#### 1.2 Label Styles
Controlan la **apariencia de etiquetas** automáticas.

**Ejemplos:**
- **Surface Contour Labels** - Etiquetas de curvas de nivel (elevación)
- **Alignment Station Labels** - Etiquetas de estacionamiento
- **Profile Grade Labels** - Etiquetas de pendiente en perfiles

**Características:**
- Definen texto (font, size, color)
- Contenido (¿qué datos mostrar?)
- Formato (decimales, unidades)
- Comportamiento (orientación, arrastrable, fixed)

#### 1.3 Table Styles
Controlan la **apariencia de tablas** dinámicas.

**Ejemplos:**
- **Curve Tables** - Tablas de curvas horizontales
- **Parcel Tables** - Tablas de parcelas con áreas
- **Volume Tables** - Tablas de volúmenes de corte/relleno

**Características:**
- Definen columnas (¿qué datos incluir?)
- Formato de celdas (alignment, borders)
- Header styles (encabezados)

![Tipos de Styles](../imagenes/leccion-3-tipos-styles.png)

---

## 2. Object Styles - Estilos de Objetos

### 2.1 Surface Styles (Ejemplo Detallado)

Las superficies topográficas son uno de los objetos más utilizados en Civil 3D. Veamos cómo funcionan sus styles.

**Acceso:**
1. Toolspace → **Settings Tab**
2. Expand **Surface**
3. Expand **Surface Styles**
4. Ver lista de styles predefinidos

**Styles comunes incluidos:**
- **Contours 1m and 5m** - Curvas de nivel cada 1m (minor) y 5m (major)
- **Border & Contours** - Muestra el borde de la superficie + curvas
- **Triangulation** - Muestra la red TIN (triángulos)
- **Slope Arrows** - Flechas indicando dirección de drenaje
- **Elevation Banding** - Bandas de color por rangos de elevación

#### Crear/Editar Surface Style

**Pasos:**

1. **Duplicate Style:**
   - Click derecho en "Contours 1m and 5m" → **Copy**
   - Click derecho en "Surface Styles" → **Paste**
   - Rename: "Contours 1m 5m - Corporativo"

2. **Edit Style:**
   - Click derecho en tu nuevo style → **Edit**

**Dialog: Surface Style**

#### Tab: Information
- **Name:** Contours 1m 5m - Corporativo
- **Description:** "Curvas de nivel para proyectos corporativos - Minor 1m (café), Major 5m (café oscuro)"
- **Created by:** Tu nombre
- **Date created:** Automático

#### Tab: Display
**El tab más importante** - Define qué elementos se muestran y cómo.

**Component Display:**

| Component | Visible | Layer | Color | Linetype | Lineweight |
|-----------|---------|-------|-------|----------|------------|
| **Border** | ✓ | C-TOPO-BORDER | Red | Continuous | 0.35mm |
| **Major Contour** | ✓ | C-TOPO-MAJR | 30 (café oscuro) | Continuous | 0.25mm |
| **Minor Contour** | ✓ | C-TOPO-MINR | 32 (café claro) | Continuous | 0.13mm |
| Triangles | ✗ | C-TOPO-TIN | Cyan | Continuous | Default |
| Grid | ✗ | - | - | - | - |
| Watershed | ✗ | - | - | - | - |

**View Direction:** Plan (2D top view)

**Nota:** Puedes configurar diferentes displays para "Plan", "Model" (3D), y "Section" (cortes).

#### Tab: Contours
Configuración específica de curvas de nivel:

**Contour Intervals:**
- **Base Elevation:** 0.000 (desde qué elevación empezar)
- **Minor Interval:** 1.0 m
- **Major Interval:** 5.0 m (cada 5 curvas minor, una major)

**Contour Ranges:**
Define rangos personalizados si necesitas cambiar el intervalo en ciertas elevaciones.

Ejemplo:
- Elevación 0-50m: Curvas cada 1m
- Elevación 50-200m: Curvas cada 5m

**Contour Smoothing:**
- **Smooth contours:** ✓ (suaviza las curvas)
- **Smoothing type:** Add vertices / Spline fit / B-spline
- **Recommended:** Add vertices (balance entre suavidad y precisión)

#### Tab: Analysis
Configuración de análisis de pendientes, elevaciones, watersheds.

**Elevation Analysis:**
- **Scheme:** By elevation
- **Ranges:** Define rangos de color
  - 0-10m: Verde oscuro
  - 10-50m: Verde claro
  - 50-100m: Amarillo
  - 100+: Rojo

**Slope Analysis:**
- **Scheme:** By slope
- **Ranges:**
  - 0-5%: Verde (plano - apto para construcción)
  - 5-15%: Amarillo (moderado)
  - 15-30%: Naranja (empinado)
  - 30%+: Rojo (muy empinado - taludes)

![Surface Style Editor](../imagenes/leccion-3-surface-style.png)

3. **Apply y OK**

4. **Probar Style:**
   - Crea una superficie de prueba (lo veremos en Módulo 2)
   - Assign el nuevo style
   - Observa las curvas con tus colores corporativos

---

### 2.2 Alignment Styles

Controlan la visualización de alineamientos horizontales (centerlines de carreteras).

**Styles comunes:**
- **Basic** - Línea simple
- **Layout** - Con curvas resaltadas
- **Proposed** - Línea punteada para diseño propuesto

**Display Components:**
- Tangents (rectas)
- Curves (curvas horizontales)
- Spirals (espirales de transición)
- Lines (líneas generales)

**Ejemplo de configuración:**
```
Tangents: Layer C-ROAD-ALGN, Color Green, Lineweight 0.50mm
Curves: Layer C-ROAD-ALGN, Color Red, Lineweight 0.50mm
Spirals: Layer C-ROAD-ALGN, Color Magenta, Lineweight 0.35mm
```

---

### 2.3 Profile Styles

Controlan perfiles longitudinales (diseño vertical).

**Display Components:**
- Profile line (línea de perfil)
- Vertical curves (curvas verticales)
- Grade breaks (puntos de cambio de pendiente)

---

## 3. Label Styles - Estilos de Etiquetas

### 3.1 Anatomía de un Label Style

**Componentes:**
- **Content:** ¿Qué texto mostrar? (elevación, estación, pendiente)
- **Format:** ¿Cómo formatearlo? (decimales, unidades, prefijos)
- **Text:** Fuente, tamaño, color
- **Border:** Marco alrededor del texto
- **Leader:** Línea apuntando al objeto (arrow, block)
- **Behavior:** Orientación (horizontal, perpendicular, rotated)

### 3.2 Surface Contour Label Style (Ejemplo)

**Propósito:** Etiquetar curvas de nivel con su elevación.

**Crear Label Style:**

1. **Acceso:**
   - Settings Tab → Expand "Surface"
   - Expand "Label Styles" → Expand "Contour"
   - Expand "Single Contour"

2. **Copy Style:**
   - Click derecho en "Existing Contour - Elevation Only" → Copy
   - Paste en "Single Contour"
   - Rename: "Contour - Elevation m"

3. **Edit Style:**
   - Click derecho → Edit

**Dialog: Label Style Composer**

#### Tab: Information
- Name, Description, Created by

#### Tab: General
**Label:**
- **Text Style:** Standard (font, size definido en text styles)
- **Layer:** C-TOPO-LABL
- **Orientation Reference:** Object (sigue la curva)
- **Plan Readability:** ✓ (flip text automáticamente para legibilidad)

**Behavior:**
- **Dragged State Components:** Leader attached (si arrastras la etiqueta, muestra líder)

#### Tab: Layout
**El tab crítico** - Define el contenido del label.

**Text Component:**
1. **Name:** Elevation
2. **General:**
   - **Anchor Component:** (none)
   - **Anchor Point:** Middle Center
3. **Text Contents:** Click en **[...]** para editar

**Text Component Editor:**

**Format:**
```
Elevation: <[Surface Elevation(Um|P3|RN|AP|Sn|OF)]> m
```

**Desglose:**
- `<[...]>` - Property (valor dinámico de la superficie)
- `Surface Elevation` - Propiedad a mostrar
- `Um` - Unit override (Use Drawing Units - Metric)
- `P3` - Precision (3 decimales: 0.000)
- `RN` - Rounding (Round Normal)
- `AP` - Append (nada)
- `Sn` - Sign (mostrar signo + o -)
- `OF` - Output Format

**Resultado visual:**
```
Elevation: 125.430 m
```

**Preview:** Muestra cómo se verá la etiqueta

4. **OK** → **OK**

#### Tab: Dragged State
Configuración cuando el label es arrastrado manualmente.

**Components:**
- **Leader:** Tipo de líder (arrow, block, none)
- **Color, Linetype, Lineweight**

![Label Style Composer](../imagenes/leccion-3-label-style.png)

---

### 3.3 Alignment Station Label Style

Etiqueta de estacionamiento en alineamientos.

**Content típico:**
```
STA <[Station Value(Um|P2|RN|AP|Sn|TP|B2|EN|W0|OF)]>
```

**Resultado visual:**
```
STA 0+325.50
```

**Formato:**
- `TP|B2` - Truncate Precision a 2 decimales, Break digits cada 3 (1+000 en lugar de 1000)
- `W0` - Width (ancho de campo)

---

## 4. Table Styles - Estilos de Tablas

### 4.1 Curve Table Style

Tabla que lista todas las curvas horizontales de un alineamiento.

**Columns típicas:**
- Curve Number (C1, C2, C3...)
- Radius (radio de la curva)
- Delta (ángulo central)
- Length (longitud del arco)
- Tangent (tangente)
- Chord (cuerda)

**Configuración:**

1. **Acceso:**
   - Settings Tab → Expand "Alignment"
   - Expand "Table Styles" → Expand "Curve"

2. **Edit "Alignment Curve":**
   - Click derecho → Edit

**Dialog: Table Style**

#### Tab: Data Properties
Define qué columnas incluir:

**Columns:**
- ✓ Curve Number
- ✓ Radius
- ✓ Delta
- ✓ Length
- ✓ Tangent

**Format per column:**
- Radius: Precision 0.01m, Unit Meter
- Delta: Precision 1", Unit DD.MMSS
- Length: Precision 0.01m

#### Tab: Display
- **Border color, lineweight**
- **Text height** (0.10 units)
- **Header text height** (0.12 units)

![Table Style Editor](../imagenes/leccion-3-table-style.png)

---

## 5. Templates (.dwt) vs Style Libraries

### Templates (.dwt)
**Archivo de dibujo maestro** que contiene:
- Drawing Settings
- **Todos los Styles** (Object, Label, Table)
- Layers predefinidos
- Blocks, Text Styles, Dimension Styles

**Uso:**
- Creas nuevos drawings desde el template
- Hereda TODA la configuración

**Ubicación recomendada:**
`C:\Standards\Templates\Proyecto_Carretera_Corporativo.dwt`

### Style Libraries (.dwg)
**Archivo .dwg normal** que contiene SOLO styles, usado como "biblioteca".

**Uso:**
- Tienes un drawing activo
- Necesitas importar un style específico de otro proyecto
- No quieres crear un drawing nuevo desde template

**Workflow:**
1. Abres "Style Library.dwg" (contiene 50 styles corporativos)
2. Copias el style "Contours Corporativo"
3. Pegas en tu drawing actual

---

## 6. Importar/Exportar Styles entre Proyectos

### 6.1 Método 1: Drag & Drop (Dentro de un Drawing)

**Si tienes DOS drawings abiertos:**

1. Drawing A tiene el style que necesitas
2. Drawing B es tu proyecto actual
3. Toolspace → Settings Tab
4. En Drawing A: Navega al style → Click y arrastra
5. Suelta en Drawing B (en la colección correspondiente)
6. El style se copia

**Limitación:** Ambos drawings deben estar abiertos.

### 6.2 Método 2: Import Styles (Desde Archivo Externo)

**Para importar desde un .dwg o .dwt externo:**

1. **Acceso:**
   - Toolspace → Settings Tab
   - Click derecho en el nombre del drawing (top level)
   - **Import → Import Styles from another drawing...**

2. **Select Drawing:**
   - Browse → Selecciona el .dwg o .dwt fuente
   - Open

3. **Style Import Dialog:**
   - **Muestra todos los styles disponibles** en el archivo fuente
   - **Tree view** por categorías (Surface, Alignment, Profile...)
   - **Check** los styles que deseas importar

**Ejemplo:**
```
☑ Surface Styles
  ☑ Contours 1m 5m - Corporativo
  ☐ Triangulation
☑ Label Styles
  ☑ Surface
    ☑ Contour
      ☑ Single Contour
        ☑ Contour - Elevation m
```

4. **OK** - Los styles se importan

![Import Styles Dialog](../imagenes/leccion-3-import-styles.png)

### 6.3 Método 3: Create Style Library Drawing

**Crear una "biblioteca central" de styles corporativos:**

**Pasos:**

1. **Nuevo Drawing:**
   - Crea un .dwg vacío: `Company_Style_Library.dwg`

2. **Crear/Importar Styles:**
   - Crea todos tus styles corporativos
   - O importa styles de proyectos pasados exitosos

3. **Organizar:**
   - Renombra con prefijo corporativo: "CORP - Contours 1m 5m"
   - Añade descripciones claras

4. **Guardar:**
   - Save en ubicación de red compartida: `\\Server\Standards\`

5. **Uso:**
   - Todos los proyectos importan styles desde este archivo central
   - Cuando actualizas un style, todos los proyectos nuevos usan la versión actualizada

**Ventaja:** Centralización de estándares corporativos.

---

## 7. Crear Template Personalizado con Styles de Empresa

### Workflow Completo

**Objetivo:** Crear un template .dwt que todos los proyectos de carreteras de tu empresa usarán.

#### Paso 1: Base Template
1. New → Drawing
2. Select: `_AutoCAD Civil 3D (Metric) NCS.dwt`
3. Open

#### Paso 2: Configure Drawing Settings
1. Settings Tab → Edit Drawing Settings
2. **Units:** Meters
3. **Zone:** UTM Zone [TuZona], WGS84
4. **Object Layers:** Customize según estándares
5. OK

#### Paso 3: Configure Ambient Settings
1. Distance: 0.001m precision
2. Elevation: 0.01m precision
3. Angle: 1" precision
4. Slope: 0.01% precision

#### Paso 4: Create/Import Object Styles

**Surface Styles:**
1. Create: "CORP - Contours 1m 5m" (curvas café)
2. Create: "CORP - Triangulation" (TIN para análisis)
3. Create: "CORP - Slope Analysis" (análisis de pendientes)

**Alignment Styles:**
1. Create: "CORP - Centerline Proposed" (verde, 0.50mm)
2. Create: "CORP - Centerline Existing" (rojo punteado)

**Profile Styles:**
1. Create: "CORP - Profile Design" (diseño vertical)

#### Paso 5: Create/Import Label Styles

**Surface Labels:**
1. "CORP - Contour Elevation m" (formato: XXX.XX m)
2. "CORP - Spot Elevation" (puntos de elevación)
3. "CORP - Slope" (pendiente %)

**Alignment Labels:**
1. "CORP - Station Major 100m" (cada 100m)
2. "CORP - Station Minor 20m" (cada 20m)

**Profile Labels:**
1. "CORP - Grade" (pendiente longitudinal)
2. "CORP - Station Elevation" (estación + elevación)

#### Paso 6: Create Table Styles
1. "CORP - Curve Table" (tabla de curvas)
2. "CORP - Volume Table" (tabla de volúmenes)
3. "CORP - Parcel Table" (tabla de parcelas)

#### Paso 7: Configure Layers
1. Create layers según estándar corporativo:
   - `C-TOPO-MAJR` (Contours major - Color 30 café)
   - `C-TOPO-MINR` (Contours minor - Color 32 café claro)
   - `C-ROAD-ALGN` (Alignment centerline - Color 3 green)
   - `C-ROAD-PROF` (Profile - Color 1 red)
   - `C-SSWR-PIPE` (Sanitary sewer pipe - Color 6 magenta)

#### Paso 8: Add Blocks
1. Importa blocks comunes:
   - Señalización vial
   - Mobiliario urbano
   - Simbología de alcantarillas
   - Norte geográfico

#### Paso 9: Save as Template
1. **Save As:**
   - File Type: **AutoCAD Drawing Template (.dwt)**
   - Name: `CORP_Carretera_Metrico_UTMZone19N.dwt`
   - Description: "Template corporativo para proyectos de carreteras - Métrico - UTM Zone 19N, WGS84 - [TuEmpresa]"
   - Location: `\\Server\Standards\Templates\`
   - **Measurement:** Metric
   - Save

![Template Personalizado](../imagenes/leccion-3-template-custom.png)

#### Paso 10: Set as Default Template (Opcional)
1. Options (command: `OPTIONS`)
2. Files Tab
3. Expand "Template Settings"
4. Expand "Default Template File Name for QNEW"
5. Browse → Select tu template
6. OK

**Resultado:** Ahora cuando presionas Ctrl+N (QNEW), se crea automáticamente un drawing desde tu template corporativo.

---

## Ejercicio Práctico 3

**Objetivo:** Crear un Surface Style personalizado y un Label Style para curvas de nivel.

### Parte A: Crear Surface Style

**Tareas:**

1. **Acceso:**
   - Toolspace → Settings Tab
   - Surface → Surface Styles
   - Click derecho en "Contours 1m and 5m" → Copy
   - Paste
   - Rename: "Curvas_[TuNombre]"

2. **Edit Style:**
   - Click derecho → Edit
   - **Display Tab:**
     - Major Contour: Color café oscuro (30), Lineweight 0.25mm
     - Minor Contour: Color café claro (32), Lineweight 0.13mm
   - **Contours Tab:**
     - Minor Interval: 1.0m
     - Major Interval: 5.0m
     - Smooth contours: ✓
   - OK

### Parte B: Crear Label Style para Curvas de Nivel

**Tareas:**

3. **Acceso:**
   - Surface → Label Styles → Contour → Single Contour
   - Copy "Existing Contour - Elevation Only"
   - Paste
   - Rename: "Elevation_[TuNombre]"

4. **Edit Label Style:**
   - **Layout Tab:**
     - Text Component: Elevation
     - Click [...] para editar content
     - Format: `<[Surface Elevation(Um|P2|RN|AP|Sn|OF)]> m`
   - **General Tab:**
     - Layer: C-TOPO-LABL
     - Plan Readability: ✓
   - OK

### Parte C: Export Styles

**Tareas:**

5. **Crear Style Library:**
   - Nuevo drawing en blanco
   - Save As: `Mis_Styles_[TuNombre].dwg`

6. **Import tus Styles:**
   - En el drawing nuevo
   - Import Styles from another drawing
   - Browse → Select el drawing donde creaste los styles
   - Select: "Curvas_[TuNombre]" y "Elevation_[TuNombre]"
   - Import

7. **Save:**
   - Save el Style Library drawing

**Entregable:**
- Screenshot del Surface Style editor mostrando configuración Display
- Screenshot del Label Style composer mostrando el content format
- Archivo `Mis_Styles_[TuNombre].dwg`

![Ejercicio 3 - Styles Personalizados](../imagenes/leccion-3-ejercicio-styles.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia entre un Object Style y un Label Style?

**Pregunta 2:** Si tienes 20 superficies topográficas y quieres cambiar el color de todas las curvas de nivel, ¿cuál es la manera más eficiente de hacerlo?

**Pregunta 3:** ¿Qué método usarías para compartir styles entre 10 proyectos diferentes?

**Pregunta 4:** En un Label Style para curvas de nivel, ¿qué significa el código `<[Surface Elevation(Um|P3)]>`?

**Pregunta 5:** ¿Cuál es la ventaja de crear un template corporativo (.dwt) en lugar de configurar cada proyecto manualmente?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "Styles"
- Civil 3D 2026 - Label Style Composer Reference

**Style Libraries descargables:**
- Autodesk Civil 3D Content Browser (incluido con instalación)
- Community styles en Autodesk Forums

---

## Resumen

En esta lección aprendiste:

✅ Los tres tipos de Styles: Object (apariencia), Label (etiquetas), Table (tablas)
✅ Cómo crear y editar Surface Styles (contours, triangulation, analysis)
✅ Cómo crear Label Styles con contenido dinámico (property fields)
✅ Métodos para importar/exportar styles entre proyectos (drag & drop, import dialog)
✅ Diferencia entre Templates (.dwt - configuración completa) y Style Libraries (.dwg - solo styles)
✅ Workflow completo para crear template corporativo con estándares de empresa

**Próxima Lección:** Project Explorer y Data Shortcuts (Civil 3D 2026) - Trabajo colaborativo

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos creando un set completo de styles corporativos
