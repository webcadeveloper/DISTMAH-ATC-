# Lección 5: Geospatial Platform y Task Pane

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- ✅ Dominar el Display Manager para visualización de datos geoespaciales
- ✅ Configurar estilos y simbología temática (by value, by range)
- ✅ Gestionar múltiples fuentes de datos en Data Sources pane
- ✅ Utilizar Map Explorer para navegación jerárquica de proyectos
- ✅ Controlar orden de dibujo, transparencia y scale ranges
- ✅ Crear mapas temáticos profesionales

## Introducción

El **Task Pane** es el "centro de comando" de Map 3D, combinando herramientas de visualización, gestión de datos y análisis en una interfaz integrada. Mientras AutoCAD tradicional usa Layer Manager para organización, Map 3D utiliza el **Display Manager** para control granular de cómo se visualizan datos geoespaciales de múltiples fuentes.

Para profesionales que trabajan con infraestructura compleja, catastro, o planificación urbana, dominar el Task Pane es esencial para:
- Visualizar simultáneamente datos de 10+ fuentes diferentes
- Aplicar estilos temáticos (color por categoría, tamaño por valor)
- Controlar qué datos se muestran según el nivel de zoom
- Crear presentaciones cartográficas profesionales

Esta lección te convertirá en experto del Task Pane para workflows GIS/CAD eficientes.

## 1. Anatomía del Task Pane

### 1.1 Abrir y Anclar Task Pane

**Abrir:**
- Comando: `TASKPANE`
- Ribbon: MAP 3D tab > Tools panel > Task Pane
- Shortcut: Ctrl+3 (si está configurado)

**Anclar/Desanclar:**
- Click en el "pin" icon (esquina superior) para anclar a la ventana
- Desanclado: Task Pane flota como ventana independiente
- Anclado: Se integra al lado derecho (típicamente)

**Resize:**
- Drag el borde para ajustar ancho
- Task Pane puede ocupar 20-40% del ancho de pantalla para trabajo cómodo

![Task Pane Overview](../imagenes/leccion-5-task-pane-overview.png)

### 1.2 Tabs del Task Pane

El Task Pane contiene múltiples tabs (pestañas), cada una con funciones específicas:

#### 1. DISPLAY MANAGER
**Función:** Control de visualización de datos geoespaciales
- Gestión de layers y feature classes
- Configuración de estilos (color, símbolos, transparency)
- Mapas temáticos
- Scale ranges (visibilidad por zoom level)

#### 2. DATA SOURCES
**Función:** Gestión de conexiones a datos externos
- Browse y connect a FDO data sources
- Preview de schemas y datos
- Add feature classes al Display Manager

#### 3. ANALYSIS
**Función:** Herramientas de análisis espacial
- Spatial queries (buffer, overlay, topology)
- Create topologies
- Network analysis (tema avanzado)

#### 4. MAP EXPLORER
**Función:** Vista jerárquica del proyecto Map 3D
- Drawings en el proyecto
- Queries guardadas
- Topologies creadas
- Data sources activas

**En esta lección nos enfocaremos en Display Manager y Data Sources** (Analysis se cubre en Módulo 2).

## 2. Display Manager - Control de Visualización

### 2.1 Estructura Jerárquica

Display Manager organiza datos en una jerarquía:

```
Display Manager
│
├── Drawing Settings
│   └── Drawing Coordinate System: [nombre del CS]
│
├── Drawing Layers (Layers de AutoCAD tradicional)
│   ├── Layer 0
│   ├── Infrastructure
│   └── Topography
│
└── External Data (Datos FDO)
    ├── Data Source: City_Infrastructure
    │   ├── Water_Lines
    │   │   └── Style Rule: Default
    │   └── Valves
    │       └── Style Rule: By Type
    └── Data Source: Cadastre
        └── Parcels
            └── Style Rule: By Zoning
```

### 2.2 Componentes de Display Manager

**Drawing Settings (Superior):**
- Muestra coordinate system del drawing
- Click en [...] para cambiar CS

**Drawing Layers:**
- Layers tradicionales de AutoCAD
- Objetos CAD nativos (LINEs, POLYLINEs, etc.)
- Control básico: On/Off, Color, Linetype

**External Data:**
- Feature classes de conexiones FDO
- Datos de archivos SHP, databases, etc.
- Control avanzado: Style rules, filters, scale ranges

### 2.3 Agregar Feature Class al Display

Para visualizar datos FDO:

1. **Data Sources tab** > Navega a la feature class
2. **Right-click** > **Add to Display**
3. O **drag & drop** al Display Manager

**Resultado:**
- Feature class aparece en Display Manager bajo su data source
- Datos se visualizan en el drawing con estilo default
- Checkbox para On/Off visibility

### 2.4 Control de Visibilidad

**On/Off feature class:**
- Click en **checkbox** junto al nombre de feature class
- ✅ = Visible
- ☐ = No visible (pero datos siguen conectados)

**On/Off data source completo:**
- Click en checkbox del data source
- Activa/desactiva todas las feature classes bajo ese source

**Diferencia vs Layer Freeze:**
- Display Manager On/Off: Instant, no regenera drawing
- Layer Freeze: Requiere regen
- Para datos FDO, siempre usa Display Manager

## 3. Estilos y Simbología

### 3.1 Style Rules

Cada feature class tiene al menos una **Style Rule** que define cómo se visualizan los features:

**Tipos de Style Rules:**
1. **Default** - Estilo único para todos los features
2. **Individual Values** - Estilo diferente por categoría (ej: tipo de tubería)
3. **Ranged** - Estilo por rango numérico (ej: diámetro)
4. **Expression** - Estilo basado en expresión compleja

### 3.2 Editar Style Rule - Default

**Procedimiento:**

1. Display Manager > Expande la feature class
2. **Right-click** en la style rule (ej: "Default") > **Edit Style**
3. **Style Editor** se abre

**Opciones de estilo:**

**Para LÍNEAS:**
- **Color:** Click en color picker
- **Lineweight:** Grosor en mm o pixels
- **Linetype:** Solid, Dashed, Dotted, etc.
- **Transparency:** 0% (opaco) - 100% (invisible)

**Para POLÍGONOS:**
- **Fill color:** Color de relleno
- **Fill transparency:** Transparencia del relleno
- **Outline color:** Color del contorno
- **Outline weight:** Grosor del contorno

**Para PUNTOS:**
- **Symbol:** Selecciona símbolo (circle, square, custom)
- **Size:** Tamaño en unidades de drawing o pixels
- **Color:** Color del símbolo
- **Rotation:** Ángulo de rotación

4. **Preview** muestra cómo se verá
5. Click **OK** para aplicar

![Style Editor](../imagenes/leccion-5-style-editor.png)

### 3.3 Mapas Temáticos - Individual Values

**Escenario:** Tienes feature class de tuberías con atributo "Material" (PVC, Iron, Copper). Quieres color diferente por material.

**Procedimiento:**

1. Right-click en style rule > **Edit Style**
2. **Style Type:** Cambia a **Individual Values** (también llamado "Unique Values")
3. **Theme Field:** Selecciona la columna de atributos (ej: `Material`)
4. Click **Generate Styles**

**Resultado:**
- Map 3D analiza los valores únicos en la columna
- Crea una style rule por cada valor:
  - Material = "PVC" → Color Azul
  - Material = "Iron" → Color Gris
  - Material = "Copper" → Color Naranja
- Cada tipo se dibuja con su color

**Personalizar colores:**
- Expande la style rule en Display Manager
- Cada valor tiene sub-rule
- Right-click en sub-rule > Edit Style > Cambia color

**Agregar leyenda:**
- Display Manager muestra automáticamente los valores como "leyenda"
- Para leyenda formal en el plot: Módulo 4

![Thematic Map - Individual Values](../imagenes/leccion-5-thematic-individual.png)

### 3.4 Mapas Temáticos - Ranged (Por Rangos)

**Escenario:** Feature class de tuberías con atributo "Diameter" (numérico). Quieres grosor de línea proporcional al diámetro.

**Procedimiento:**

1. Right-click en style rule > **Edit Style**
2. **Style Type:** Selecciona **Ranged Theme**
3. **Theme Field:** Selecciona columna numérica (ej: `Diameter`)
4. **Range Options:**
   - **Number of ranges:** Cuántos rangos crear (ej: 4)
   - **Method:**
     - **Equal Intervals:** Divide rango en intervalos iguales
     - **Quantile:** Cada rango tiene igual número de features
     - **Natural Breaks (Jenks):** Algoritmo que encuentra "quiebres naturales" en los datos
5. Click **Generate Styles**

**Resultado:**
- 4 rangos creados automáticamente:
  - 0 - 6 inches → Lineweight 0.25mm, Color Verde
  - 6 - 12 inches → Lineweight 0.50mm, Color Amarillo
  - 12 - 18 inches → Lineweight 0.75mm, Color Naranja
  - 18+ inches → Lineweight 1.00mm, Color Rojo

**Personalizar:**
- Edita cada sub-rule para ajustar color, lineweight
- Cambia valores de rango manualmente si es necesario

### 3.5 Transparency (Transparencia)

**Uso:** Superponer múltiples datasets sin ocultar información subyacente.

**Configurar:**
1. Edit Style de la feature class
2. **Transparency:** Slider de 0% (opaco) a 100% (invisible)
3. Típico: 40-60% para overlays de contexto

**Ejemplo:**
- Parcels (polígonos) con 50% transparency
- Permite ver topografía, imagery, o infrastructure debajo
- Sin transparency, parcels ocultan todo debajo

## 4. Scale Ranges - Visibilidad por Zoom

### 4.1 ¿Qué son Scale Ranges?

**Scale Ranges** permiten que feature classes solo sean visibles en ciertos niveles de zoom. Esto es crítico para:
- **Performance:** No cargar millones de features cuando estás zoomed out
- **Claridad:** Evitar "clutter" visual (ej: no mostrar hidrantes cuando ves toda la ciudad)
- **Cartografía profesional:** Diferente nivel de detalle según escala

### 4.2 Configurar Scale Ranges

**Procedimiento:**

1. Display Manager > Right-click en feature class > **Scale Ranges**
2. **Scale Range dialog** se abre

**Opciones:**

**Enable scale ranges:** ✅ Activar

**Minimum scale (most zoomed out):**
- Define escala mínima para visibilidad
- Ejemplo: `1:50000` (si estás más zoomed out que esto, NO se muestra)

**Maximum scale (most zoomed in):**
- Define escala máxima
- Ejemplo: `1:500` (si estás más zoomed in que esto, NO se muestra)

**Ejemplo práctico:**

**Feature class: City Streets**
- Min scale: 1:100000 (se muestra hasta vista de ciudad completa)
- Max scale: Sin límite (se muestra en todos los zooms cercanos)

**Feature class: Fire Hydrants**
- Min scale: 1:5000 (solo se muestra cuando estás zoomed in a nivel de vecindario)
- Max scale: Sin límite

**Resultado:**
- Zoomed out viendo toda la ciudad → Solo ves streets
- Zoom in a un barrio → Ves streets + hydrants
- Performance mejorado (no carga hydrants si no son visibles)

![Scale Ranges](../imagenes/leccion-5-scale-ranges.png)

## 5. Order de Dibujo (Draw Order)

### 5.1 Importancia de Draw Order

En mapas con múltiples layers superpuestos, el **orden importa**:
- Parcels (polígonos) deben estar abajo
- Streets (líneas) en medio
- Points (símbolos) arriba

De lo contrario, polígonos ocultan líneas y puntos.

### 5.2 Cambiar Draw Order

**En Display Manager:**

1. Las feature classes se dibujan de **arriba hacia abajo** en la lista
2. Feature class en la **parte superior** de Display Manager se dibuja **arriba** (encima de las demás)
3. Para reordenar:
   - **Drag & drop** feature classes hacia arriba/abajo en Display Manager

**Ejemplo:**

**Orden incorrecto (desde arriba):**
```
1. Parcels (polígonos) ← Se dibuja encima, oculta todo
2. Streets (líneas)
3. Points (puntos)
```

**Orden correcto:**
```
1. Points (puntos) ← Se dibuja último, visible arriba
2. Streets (líneas)
3. Parcels (polígonos) ← Se dibuja primero, fondo
```

**Tip:** Regla general es:
- Polígonos → Abajo
- Líneas → Medio
- Puntos/Símbolos → Arriba

## 6. Data Sources Pane

### 6.1 Gestionar Conexiones

**Data Sources pane** (segunda tab del Task Pane) lista todas las conexiones FDO activas.

**Ver conexiones:**
1. Task Pane > **Data Sources** tab
2. Lista muestra todas las conexiones (ej: `City_Infrastructure`, `Cadastre_DB`)

**Agregar nueva conexión:**
- Right-click en espacio vacío > **Add New Data Source**
- O Ribbon: MAP 3D > Data > Data Connect

**Editar conexión:**
- Right-click en data source > **Edit**
- Cambia parámetros (password, ruta, etc.)

**Remover conexión:**
- Right-click > **Remove**
- Datos dejan de visualizarse (pero no se borran de la fuente)

### 6.2 Browse Feature Classes

1. Data Sources > **Expande** el data source (click en +)
2. Navega carpetas/schemas
3. **Right-click** en feature class:
   - **Add to Display** - Visualizar
   - **Data Preview** - Ver tabla de atributos
   - **Schema** - Ver estructura

### 6.3 Refresh Data Sources

Si los datos externos cambian (ej: alguien edita el Shapefile):

1. Right-click en data source > **Refresh**
2. O Right-click en feature class > **Refresh**
3. Map 3D recarga los datos actualizados

**Automatic refresh:**
- Algunas conexiones (databases) se actualizan automáticamente
- Shapefiles pueden requerir refresh manual

## 7. Map Explorer

### 7.1 Vista Jerárquica del Proyecto

**Map Explorer** (tercera o cuarta tab del Task Pane) muestra la estructura completa del proyecto:

```
Map Explorer
│
├── Drawings
│   ├── Current Drawing (Proyecto_Main.dwg)
│   └── Source Drawings (si hay external references)
│
├── Queries
│   ├── Spatial Query 1: Buffer 100m
│   └── Attribute Query: Diameter > 12
│
├── Topologies
│   └── Network Topology: Water System
│
└── Data Sources
    ├── City_Infrastructure
    └── Cadastre_DB
```

### 7.2 Usos de Map Explorer

**Navigate to elements:**
- Double-click en un query → Re-ejecuta el query
- Double-click en drawing → Cambia al drawing (si es multi-drawing project)

**Context menus:**
- Right-click en elementos para opciones de edición, delete, rename

**Project overview:**
- Vista rápida de todos los componentes del proyecto GIS/CAD

## 8. Workflow Integrado - Ejemplo Práctico

### 8.1 Escenario: Mapa de Infraestructura Municipal

**Objetivo:** Crear mapa con múltiples datasets, estilos temáticos, y visibilidad controlada.

**Datos:**
- Parcels (polígonos de parcelas catastrales)
- Streets (líneas de calles)
- Water Lines (líneas de tuberías de agua)
- Fire Hydrants (puntos de hidrantes)

**Workflow:**

**1. Setup**
- Nuevo drawing, CS: State Plane apropiado
- Data Connect a los 4 Shapefiles

**2. Agregar a Display**
- Data Sources > Add to Display cada feature class
- Orden de abajo hacia arriba:
  1. Parcels
  2. Streets
  3. Water_Lines
  4. Fire_Hydrants

**3. Configurar Estilos**

**Parcels:**
- Edit Style > Individual Values
- Theme Field: `Zoning` (categoría de zonificación)
- Generate Styles
- Resultado: Residential = Amarillo, Commercial = Rojo, Industrial = Gris

**Streets:**
- Edit Style > Default
- Color: Gris oscuro (#333333)
- Lineweight: 0.50mm

**Water Lines:**
- Edit Style > Ranged Theme
- Theme Field: `Diameter`
- 3 rangos: 0-8", 8-16", 16"+
- Lineweights: 0.30mm, 0.60mm, 1.00mm
- Colors: Azul claro → Azul oscuro

**Fire Hydrants:**
- Edit Style > Default
- Symbol: Circle
- Color: Rojo
- Size: 5 units

**4. Configurar Transparencia**
- Parcels: 60% transparency (permite ver streets debajo)

**5. Scale Ranges**
- Fire_Hydrants: Min scale 1:5000 (solo visible zoomed in)

**6. Verificar**
- Zoom out: Ves parcels, streets, water lines (NO hydrants)
- Zoom in: Todo visible con estilos temáticos aplicados

**Resultado:** Mapa profesional multi-layer con visualización optimizada.

![Completed Thematic Map](../imagenes/leccion-5-completed-map.png)

## Ejercicio Práctico

### Ejercicio 5.1: Crear Mapa Temático Multi-Source

**Objetivo:** Dominar Display Manager creando mapa con estilos temáticos y scale ranges.

**Datos necesarios:**
- Shapefile de calles con atributo `Type` (Residential, Commercial, Highway)
- Shapefile de edificios con atributo `BuildingHeight` (numérico)
- Shapefile de árboles (puntos)

**Instrucciones:**

**Parte A: Setup y Conexión**

1. Nuevo drawing, CS apropiado
2. Data Connect a los 3 Shapefiles
3. Add to Display en orden:
   - Buildings (abajo)
   - Streets (medio)
   - Trees (arriba)

**Parte B: Estilos Temáticos**

1. **Buildings - Ranged by Height:**
   - Edit Style > Ranged Theme
   - Field: `BuildingHeight`
   - 4 rangos (Equal Intervals)
   - Colors: Amarillo (bajo) → Rojo (alto)
   - Transparency: 40%

2. **Streets - Individual Values by Type:**
   - Edit Style > Individual Values
   - Field: `Type`
   - Residential: Gris claro, 0.25mm
   - Commercial: Gris medio, 0.50mm
   - Highway: Negro, 1.00mm

3. **Trees:**
   - Edit Style > Default
   - Symbol: Circle, Color Verde, Size: 3 units

**Parte C: Scale Ranges**

1. Trees:
   - Scale Ranges: Min 1:2000 (solo visible muy zoomed in)

**Parte D: Ajustes Finales**

1. Verifica draw order (Trees arriba, Buildings abajo)
2. Ajusta transparency de Buildings si es necesario
3. Test zoom in/out para verificar scale ranges

**Entregables:**
- Drawing con display configurado
- Screenshot zoomed out (sin trees)
- Screenshot zoomed in (con trees)
- Screenshot de Display Manager mostrando la jerarquía

**Tiempo estimado:** 30 minutos

## Evaluación

1. **¿Qué tab del Task Pane se usa para controlar estilos y visibilidad de datos?**
   - a) Data Sources
   - b) Display Manager
   - c) Map Explorer
   - d) Analysis

2. **Para crear colores diferentes por categoría (ej: tipo de edificio), ¿qué tipo de estilo usas?**
   - a) Default
   - b) Ranged Theme
   - c) Individual Values
   - d) Scale Range

3. **¿Qué define un Scale Range?**
   - a) El tamaño de los símbolos
   - b) En qué niveles de zoom se visualiza una feature class
   - c) El rango de valores numéricos
   - d) La transparencia

4. **En Display Manager, ¿cómo cambias el draw order?**
   - a) Edit Style > Draw Order
   - b) Drag & drop feature classes hacia arriba/abajo
   - c) Right-click > Send to Back
   - d) No se puede cambiar

5. **¿Qué porcentaje de transparency hace un objeto completamente transparente (invisible)?**
   - a) 0%
   - b) 50%
   - c) 100%
   - d) Depende del objeto

**Respuestas:** 1-b, 2-c, 3-b, 4-b, 5-c

## Recursos Adicionales

### Documentación
- [Display Manager Guide](https://help.autodesk.com/view/MAP3D/2026/ENU/?guid=GUID-display-manager) - Autodesk
- [Thematic Maps in Map 3D](https://knowledge.autodesk.com/support/autocad-map-3d/learn-explore/caas/CloudHelp/cloudhelp/2026/ENU/MAP3D-Use/files/GUID-thematic-maps.htm)
- [Scale Ranges Best Practices](https://knowledge.autodesk.com/support/autocad-map-3d) - Autodesk Knowledge

### Tutoriales Video
- "Display Manager Deep Dive" - YouTube Autodesk Channel
- "Creating Thematic Maps in Map 3D" - LinkedIn Learning

### Color Theory para Cartografía
- [ColorBrewer](https://colorbrewer2.org/) - Color schemes para mapas
- [Cartographic Design Principles](https://www.axismaps.com/guide/visual-hierarchy) - Axis Maps Guide

## Resumen

En esta lección has aprendido:

- ✅ **Task Pane** contiene Display Manager, Data Sources, Analysis, y Map Explorer
- ✅ **Display Manager** controla visualización de datos geoespaciales con jerarquía de feature classes
- ✅ **Style Rules:** Default (único), Individual Values (por categoría), Ranged (por rango numérico)
- ✅ **Transparency** permite superponer datasets sin ocultar información
- ✅ **Scale Ranges** controlan visibilidad según nivel de zoom (critical para performance)
- ✅ **Draw Order** se controla con drag & drop en Display Manager (puntos arriba, polígonos abajo)
- ✅ **Data Sources pane** gestiona conexiones FDO (add, edit, remove, refresh)
- ✅ **Map Explorer** proporciona vista jerárquica del proyecto completo

En la **Lección 6** consolidaremos todo lo aprendido sobre **Coordinate Systems y Transformaciones** con casos prácticos avanzados.

---

**Siguiente:** [Lección 6 - Coordinate Systems y Transformaciones](leccion-6.md)
