# Lección 2: Corridor Modeling Básico - Carretera Simple

**Duración:** 80 minutos
**Módulo:** 1 - Corridors y Assemblies
**Curso:** Autodesk Civil 3D 2026 - Avanzado
**Nivel:** Avanzado

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Identificar los requisitos previos para crear un corridor (alignment, profile, assembly, surface)
✅ Ejecutar el comando Create Corridor y configurar parámetros básicos
✅ Configurar baseline y asignar assembly
✅ Establecer frequency parameters (horizontal geometry, profile geometry, intervalos)
✅ Aplicar target surface (Existing Ground) para taludes adaptativos
✅ Entender el proceso de rebuild automático vs manual
✅ Visualizar corridors en 2D y 3D
✅ Utilizar Corridor Section Editor para inspeccionar secciones transversales
✅ Editar corridor parameters y actualizar el modelo

---

## Introducción

Un **corridor** es el modelo 3D paramétrico resultante de aplicar un **assembly** (sección típica) a lo largo de un **alignment** (alineamiento horizontal) siguiendo un **profile** (perfil vertical). Es el núcleo del diseño de infraestructura en Civil 3D.

El corridor no es simplemente geometría 3D estática - es un modelo **inteligente** que:
- Se adapta automáticamente a cambios en alignment, profile, assembly, o superficie
- Genera secciones transversales en cada estación requerida
- Calcula volúmenes de corte/relleno dinámicamente
- Permite extraer superficies (pavimento, sub-base) y feature lines (bordes)
- Sirve como base para quantity takeoff, mass haul, plan production

**Analogía:** Si el assembly es el "molde" de tu carretera, el corridor es el resultado de "extruir" ese molde a lo largo del alineamiento, adaptándose a la topografía existente.

---

## 1. Requisitos Previos para Crear Corridor

Antes de ejecutar **Create Corridor**, debes tener preparados 4 objetos fundamentales:

### 1.1 Horizontal Alignment (Alineamiento Horizontal)

**Descripción:**
- Define el trazado en planta (centerline de la carretera)
- Compuesto por tangentes, curvas circulares, curvas de transición (espirales)
- Contiene estaciones (stationing): 0+000, 0+100, 0+200, etc.

**Requisitos:**
- Alignment debe estar creado y no contener errores (ej: auto-intersecciones)
- Style: Cualquier alignment style funciona
- Direction: Generalmente de menor estación a mayor (0+000 → 2+000)

**Verificación:**
```
Toolspace → Prospector → Alignments → [Tu Alignment]
Right-click → Properties → Statistics tab
- Total Length: debe mostrar longitud correcta (ej: 2450.50 m)
- Start Station: 0+000
- End Station: 2+450.50
```

![Horizontal Alignment](../imagenes/leccion-2-alignment.png)

### 1.2 Vertical Profile (Perfil Vertical)

**Descripción:**
- Define elevaciones a lo largo del alignment
- Compuesto por tangentes verticales y curvas verticales parabólicas (VCs)
- Asociado a un alignment específico

**Requisitos:**
- Profile debe existir en el **Profile View** del alignment
- Generalmente llamado "FG" (Finished Grade) o "Diseño"
- No debe contener gaps (espacios sin definir elevación)

**Verificación:**
```
Toolspace → Prospector → Alignments → [Alignment] → Profiles → FG
Right-click → Properties
- Profile Style: debe estar asignado
- Elevation range: elevaciones min/max correctas
```

**IMPORTANTE:** El profile cubre todo el alignment desde Start Station hasta End Station. Si el profile es más corto que el alignment, el corridor solo se creará donde hay profile definido.

![Vertical Profile](../imagenes/leccion-2-profile.png)

### 1.3 Assembly (Sección Típica)

**Descripción:**
- Assembly creado en Lección 1 (ej: `Carretera-2C-Tipica`)
- Define geometría de sección transversal

**Requisitos:**
- Assembly debe estar en el mismo drawing o accesible vía data shortcut
- Assembly debe incluir subassemblies adaptativos (ej: LinkToSurface) si requieres taludes a terreno natural

**Verificación:**
```
Toolspace → Prospector → Assemblies → [Tu Assembly]
Select → Vista en pantalla debe mostrar sección completa (no vacía)
```

### 1.4 Surface - Existing Ground (Superficie de Terreno Natural)

**Descripción:**
- Superficie TIN del terreno existente (topografía)
- Utilizada como **target** para que los taludes del corridor se adapten al terreno

**Requisitos:**
- Surface debe existir y tener datos en el área del alignment
- Generalmente llamada "EG" (Existing Ground) o "Terreno Natural"
- Surface debe cubrir completamente el área del alignment + offset suficiente para taludes

**Verificación:**
```
Toolspace → Prospector → Surfaces → EG
Right-click → Properties → Statistics tab
- Minimum Elevation / Maximum Elevation: rango lógico
- Number of Points: >0 (tiene datos)
```

**Check visual:**
- Zoom al alignment
- La superficie EG debe mostrar curvas de nivel o triangulación en todo el corredor

![Surface Check](../imagenes/leccion-2-surface-check.png)

---

## 2. Comando Create Corridor

### 2.1 Ejecutar Comando

**Método 1 - Ribbon:**
1. **Home tab** → **Create Design panel** → **Corridor dropdown** → **Corridor**

**Método 2 - Command line:**
```
Command: CREATECORRIDOR
```

**Método 3 - Tool Palettes:**
- Ctrl+3 → Civil Structures palette → Corridor

### 2.2 Create Corridor Dialog

Al ejecutar el comando, aparece el dialog **Create Corridor**:

![Create Corridor Dialog](../imagenes/leccion-2-create-corridor-dialog.png)

**Campos principales:**

**Name:**
- Nombre descriptivo del corridor
- Convención recomendada: `[Proyecto]-[Alignment]-Corridor`
- Ejemplo: `Highway-MainLine-Corridor`

**Description:**
- Descripción detallada (opcional pero recomendado)
- Ejemplo: "Corridor principal carretera 2 carriles, Km 0+000 a 2+450, assembly típica con bermas 2.0m"

**Corridor Style:**
- Define apariencia visual del corridor (colores, grosor de líneas)
- Default: **Basic** (suficiente para empezar)
- Custom styles pueden asignar colores por feature (carril, berma, talud)

**Alignment:**
- **Dropdown:** Selecciona el alignment horizontal
- Lista todos los alignments del drawing activo
- Selecciona tu alignment (ej: "Centerline-Highway")

**Profile:**
- **Dropdown:** Selecciona el profile vertical
- Solo muestra profiles asociados al alignment seleccionado
- Selecciona "FG" o el profile de diseño correspondiente

**Assembly:**
- **Dropdown:** Selecciona el assembly de sección típica
- Lista todos los assemblies del drawing
- Selecciona el assembly creado en Lección 1 (ej: "Carretera-2C-Tipica")

**Target Surface:**
- **Dropdown:** Selecciona superficie de terreno natural
- Selecciona "EG" o superficie existente correspondiente
- **CRÍTICO:** Esta superficie será el target para subassemblies adaptativos (LinkToSurface, BasicSideSlopeCutDitch)

**Set Baseline and Region Parameters:**
- ✓ **Checked** (default) - Abre dialog adicional para configurar frequency
- ✓ **Recomendado** - Permite configurar densidad de secciones transversales

**Corridor Layer:**
- Layer donde se colocará el corridor object
- Default: `C-ROAD-CORR` (layer estándar de corridors)
- Puede cambiar según template de oficina

**Ejemplo de configuración completa:**
```
Name: Highway-MainLine-Corridor
Description: Carretera principal 2 carriles, Km 0+000 a 2+450
Corridor Style: Basic
Alignment: Centerline-Highway
Profile: FG
Assembly: Carretera-2C-Tipica
Target Surface: EG
☑ Set Baseline and Region Parameters
Corridor Layer: C-ROAD-CORR
```

**Click OK** para continuar.

---

## 3. Baseline and Region Parameters

Al hacer click OK en Create Corridor, aparece el dialog **Baseline and Region Parameters** (si la opción estaba checked).

### 3.1 Estructura de Baselines y Regions

**Conceptos:**

**Baseline:**
- La línea de referencia del corridor (generalmente el alignment centerline)
- Un corridor puede tener **múltiples baselines** (para intersecciones complejas)
- Cada baseline tiene asociado un alignment y un profile

**Region:**
- Segmento del corridor con assembly y configuración específicos
- Definido por estaciones: Start Station → End Station
- Un corridor puede tener **múltiples regions** (ej: sección urbana vs rural)
- Cada region puede tener assembly diferente

**Para corridor simple:**
- 1 baseline (alignment principal)
- 1 region (de 0+000 hasta el final del alignment)

![Baseline and Region Parameters Dialog](../imagenes/leccion-2-baseline-region-dialog.png)

### 3.2 Baseline Configuration

**Pestaña izquierda - Baselines:**
- Muestra el baseline creado automáticamente:
  - **Name:** Nombre del alignment (ej: "Centerline-Highway")
  - **Type:** Alignment with Profile (baseline estándar)

**Pestaña derecha - Regions:**
Al expandir el baseline, aparece región default:
- **Name:** `RG - Carretera-2C-Tipica` (RG = Region, nombre derivado del assembly)
- **Start Station:** 0+000 (inicio del alignment)
- **End Station:** 2+450.50 (fin del alignment, auto-detectado)
- **Assembly:** `Carretera-2C-Tipica`

**IMPORTANTE:** No modifiques nada aún. Primero entendamos **Frequency**.

---

## 4. Frequency Parameters - Densidad de Secciones

**Frequency** controla cuántas secciones transversales genera el corridor. Más secciones = mayor precisión pero más peso computacional.

### 4.1 Frequency Tab

Click en la **region** en el árbol de la izquierda → **Frequency tab** (derecha).

![Frequency Tab](../imagenes/leccion-2-frequency-tab.png)

**Opciones de Frequency:**

### 4.2 Along Tangents (A lo largo de Tangentes)

**Descripción:**
- Frecuencia en tramos rectos (tangentes) del alignment horizontal

**Opciones:**
- **Use frequency:** Especifica intervalo fijo
  - Default: `25.00` m (metric) o `100.00` ft (imperial)
  - **Recomendación:**
    - Carreteras: 25 m (suficiente para tangentes)
    - Sitework complejo: 10-15 m
    - Proyectos grandes (>10 km): 50 m (optimización)

### 4.3 Along Spirals (A lo largo de Espirales)

**Descripción:**
- Frecuencia en curvas de transición (spiral curves)

**Opciones:**
- **Use frequency:** Default `12.50` m
- **IMPORTANTE:** Espirales requieren mayor densidad que tangentes (geometría cambia rápidamente)
- **Recomendación:** 10-15 m (más denso que tangentes)

### 4.4 Along Curves (A lo largo de Curvas)

**Descripción:**
- Frecuencia en curvas circulares horizontales

**Opciones:**
- **Use frequency:** Default `12.50` m
- **Recomendación:** 10-15 m (mayor densidad para representar curvatura)

### 4.5 Horizontal Geometry Points

**Descripción:**
- ☑ **Checked:** Genera sección transversal en TODOS los puntos críticos de geometría horizontal
  - PI (Point of Intersection)
  - PC (Point of Curvature - inicio de curva)
  - PT (Point of Tangency - fin de curva)
  - SC, CS (Spiral-Curve, Curve-Spiral)

**Recomendación:**
- ✓ **SIEMPRE CHECKED** - Garantiza precisión en cambios de geometría
- Solo uncheck para optimización extrema (proyectos >50 km)

### 4.6 Profile Geometry Points

**Descripción:**
- ☑ **Checked:** Genera sección en todos los puntos críticos de perfil vertical
  - PVI (Point of Vertical Intersection)
  - BVC (Begin Vertical Curve)
  - EVC (End Vertical Curve)
  - Profile high/low points

**Recomendación:**
- ✓ **SIEMPRE CHECKED** - Crítico para cálculo preciso de volúmenes

### 4.7 Profile Curve High/Low Points

**Descripción:**
- ☑ Genera sección en puntos altos/bajos de curvas verticales

**Recomendación:**
- ✓ **Checked** - Importante para análisis de drenaje

### 4.8 Superelevation Critical Points

**Descripción:**
- Genera secciones en puntos críticos de peralte (superelevation)
- Solo aplica si tienes superelevation asignado al alignment

**Recomendación:**
- ✓ Checked si tu proyecto usa peralte
- ✗ Uncheck si no aplica peralte (carretera plana, estacionamiento)

### 4.9 Offset Target Geometry Points

**Descripción:**
- Genera secciones en puntos de geometría de offset alignments (targets)
- Solo aplica en corridors con offset targets (Lección 3)

**Recomendación:**
- ✗ Uncheck por ahora (tema avanzado)

### 4.10 Configuración Recomendada para Corridor Simple

**Para carretera típica de 2 carriles, 2.5 km:**

```
Along Tangents:          25.00 m
Along Spirals:           12.50 m
Along Curves:            12.50 m
☑ Horizontal Geometry Points
☑ Profile Geometry Points
☑ Profile Curve High/Low Points
☑ Superelevation Critical Points (si aplica)
☐ Offset Target Geometry Points (por ahora no)
```

**Resultado esperado:**
- Aproximadamente 100-150 secciones transversales para 2.5 km
- Balance entre precisión y performance

---

## 5. Target Mapping - Asignar Superficie a Taludes

Los subassemblies adaptativos (LinkToSurface, BasicSideSlopeCutDitch) requieren un **target** de superficie para saber dónde terminar el talud.

### 5.1 Targets Tab

Click en la **region** → **Targets tab** (parte inferior del dialog).

![Targets Tab](../imagenes/leccion-2-targets-tab.png)

**Tabla de Targets:**
- Muestra todos los tipos de targets que el assembly puede requerir
- Tipos comunes:
  - **Surfaces:** Superficie para taludes adaptativos (más común)
  - **Width or Offset Targets:** Alignments para carriles de ancho variable
  - **Slope Targets:** Para pendientes variables (raro)

### 5.2 Surface Target Configuration

**Columna "Object Name":**
- Click en la celda bajo "Surfaces"
- Aparece **Pick from drawing** icon (ícono de flecha)
- Click en el ícono

**Target Surface Dialog:**
1. **Add** button → Click
2. **Select from drawing:** Dropdown con todas las surfaces disponibles
3. Selecciona **EG** (Existing Ground)
4. **OK**

**Resultado:**
- La tabla muestra: `Surfaces → EG`
- Esto asigna la superficie EG como target para TODOS los subassemblies adaptativos del assembly

![Target Surface Assigned](../imagenes/leccion-2-target-surface-assigned.png)

**CRÍTICO:**
- Si NO asignas surface target, los subassemblies adaptativos (LinkToSurface) fallarán
- Error: "No solution for subassembly" - el talud no sabe dónde terminar

---

## 6. Create Corridor - Finalizar

### 6.1 OK to Create

Una vez configurado:
- ✓ Baseline: Centerline-Highway
- ✓ Region: 0+000 a 2+450, Assembly: Carretera-2C-Tipica
- ✓ Frequency: Configurado
- ✓ Target Surface: EG

**Click OK** en el dialog Baseline and Region Parameters.

**Procesamiento:**
Civil 3D procesa el corridor (puede tomar 10-60 segundos según longitud):
- Genera secciones transversales en cada estación requerida
- Aplica assembly en cada sección
- Proyecta taludes hasta surface target (EG)
- Calcula elevaciones de todos los puntos
- Crea geometría 3D

**Command line output:**
```
Processing corridor: Highway-MainLine-Corridor
  Baseline: Centerline-Highway
    Region: RG - Carretera-2C-Tipica
      Stations processed: 0+000 to 2+450.50
      Sections created: 127
Corridor created successfully.
```

### 6.2 Visualización Inicial

Al terminar, el corridor aparece en pantalla:

**Vista en planta (Plan View):**
- Bordes del corridor (daylight lines) visibles
- Color según corridor style (default: cyan)
- Puede verse "denso" (muchas líneas superpuestas)

**Comando útil:**
- Zoom Extents: `Z` + `E` + Enter
- Verás todo el corridor

![Corridor Created - Plan View](../imagenes/leccion-2-corridor-plan-view.png)

**Vista 3D (para mejor apreciación):**
1. **View tab** → **Views panel** → **SW Isometric** (Vista isométrica suroeste)
2. **Visual Style:** Realistic (View tab → Visual Styles → Realistic)
3. Orbit (click y arrastra) para rotar la vista

**Resultado 3D:**
- Superficie de pavimento visible
- Taludes a ambos lados
- Transición suave entre corte (cut) y relleno (fill)

![Corridor 3D View](../imagenes/leccion-2-corridor-3d-view.png)

---

## 7. Rebuild Automático vs Manual

Civil 3D puede reconstruir (rebuild) el corridor automáticamente cuando cambias alignment, profile, assembly, o surface.

### 7.1 Rebuild Mode

**Configuración:**
1. Select el corridor object
2. **Ribbon contextual: Corridor tab** → **Modify panel** → **Corridor Properties**
3. **Parameters tab** → **Rebuild - Automatic** (checkbox)

**Opciones:**

**Automatic (✓ Checked):**
- **Ventaja:** Cambios instantáneos - modificas profile, corridor se actualiza automáticamente
- **Desventaja:** Performance lento en corridors grandes (>10 km) - cada cambio recalcula todo

**Manual (✗ Unchecked):**
- **Ventaja:** Performance rápido - haces múltiples cambios sin recalcular
- **Desventaja:** Debes rebuild manualmente cuando termines

**Recomendación profesional:**
- **Automatic:** Proyectos <5 km, fase de diseño inicial (muchos cambios)
- **Manual:** Proyectos grandes (>10 km), fase de documentación (pocos cambios)

### 7.2 Manual Rebuild

Si Automatic está desactivado:

**Método 1 - Corridor Properties:**
1. Select corridor → Right-click → **Corridor Properties**
2. **Parameters tab** → **Rebuild** button (bottom)

**Método 2 - Ribbon:**
1. Select corridor
2. **Corridor tab** → **Modify panel** → **Rebuild Corridor**

**Método 3 - Command:**
```
Command: CORRIDORREBUILD
Select corridor: [Click en corridor]
```

**Rebuild Status:**
- Si corridor está **out of date** (desactualizado), aparece warning icon ⚠ en Prospector
- Prospector → Corridors → Highway-MainLine-Corridor → ícono amarillo = needs rebuild

---

## 8. Visualización del Corridor

### 8.1 Corridor Display Modes

**Corridor Style** controla qué elementos se visualizan:

**Default style: Basic**
- Muestra bordes (feature lines) en plan view
- Solid 3D en isometric view

**Modificar display:**
1. Select corridor → Right-click → **Corridor Properties**
2. **Information tab** → **Corridor Style:** Dropdown
3. Options:
   - **Basic** - Solo bordes
   - **Detailed** - Bordes + links + points
   - **Render Material** - Asigna texturas (asfalto, tierra) para rendering

### 8.2 Feature Lines Visualization

**Feature lines** son las líneas características del corridor (bordes de carril, daylight, etc.).

**Toggle visibility:**
- Select corridor
- **Corridor tab** → **View panel** → **Display Feature Lines** (toggle on/off)

**Color coding:**
- Default: Feature lines en cyan
- Custom: Puedes asignar colores por código (ej: ETW = amarillo, Daylight = verde)

### 8.3 Section View (Secciones Transversales)

Para inspeccionar secciones individuales:

**Método 1 - Section Editor (Rápido):**
1. Select corridor → Right-click
2. **Edit Corridor Section** → Click
3. **Section Editor** window se abre

**Método 2 - Sample Lines + Section Views (Profesional):**
- Crea Sample Lines a lo largo del corridor
- Genera Section Views (vistas de sección transversal)
- Permite labels, tablas de volúmenes (tema de módulo posterior)

![Corridor Section Editor](../imagenes/leccion-2-section-editor.png)

---

## 9. Corridor Section Editor

El **Section Editor** es una herramienta interactiva para inspeccionar secciones del corridor.

### 9.1 Abrir Section Editor

**Pasos:**
1. Select corridor object
2. Right-click → **Edit Corridor Section**
3. Window "Corridor Section Editor" aparece

**Interface:**

**Vista de sección (centro):**
- Muestra sección transversal en la estación actual
- Assembly aplicado (líneas gruesas)
- Terreno natural (EG) en línea punteada
- Corte (cut) en rojo, Relleno (fill) en verde (según style)

**Toolbar superior:**
- **Navigation arrows:** ← → (anterior/siguiente estación)
- **Station box:** Muestra estación actual (ej: `0+125.00`)
- **Zoom tools:** Zoom in, Zoom out, Zoom Extents

**Panel izquierdo:**
- **Baselines:** Lista de baselines y regions
- **Select region:** Click para cambiar región (si hay múltiples)

![Section Editor Interface](../imagenes/leccion-2-section-editor-interface.png)

### 9.2 Navegar Secciones

**Cambiar estación:**

**Método 1 - Flechas:**
- Click en `→` (next section)
- Click en `←` (previous section)
- Avanza/retrocede según frequency configurado (ej: cada 25 m)

**Método 2 - Especificar estación:**
1. Click en **Station box** (muestra estación actual)
2. Type nueva estación: `1+250` + Enter
3. Section Editor salta a esa estación

**Método 3 - Pick en plan view:**
- Click en **Pick Station** button (toolbar)
- Click en el corridor en plan view
- Section Editor muestra sección en ese punto

### 9.3 Analizar Sección

**Información visible:**

**Assembly (líneas gruesas):**
- Carriles, bermas, taludes según assembly configurado
- Colores según layer o code set

**Surface EG (línea punteada):**
- Terreno natural en esa estación
- Permite ver si estás en corte o relleno

**Daylight points:**
- Puntos donde talud intersecta EG
- Left daylight, Right daylight

**Offset y Elevation:**
- Tooltip al pasar mouse sobre cualquier punto
- Muestra: `Offset: 8.50 m, Elevation: 125.30 m`

**Casos de análisis:**

**Estación en corte (cut):**
- Terreno EG está **arriba** del finished grade (FG)
- Taludes suben hasta EG
- Cuneta visible (si assembly tiene BasicSideSlopeCutDitch)

**Estación en relleno (fill):**
- Terreno EG está **abajo** del FG
- Taludes bajan hasta EG
- Sin cuneta (BasicSideSlopeCutDitch solo crea cuneta en corte)

**Estación en transición (cut to fill):**
- Un lado en corte, otro lado en relleno
- Común en terreno irregular

![Section Analysis Cut vs Fill](../imagenes/leccion-2-section-cut-fill.png)

---

## 10. Edición Básica de Corridor Parameters

### 10.1 Corridor Properties

**Acceso:**
1. Select corridor → Right-click → **Corridor Properties**

**Tabs principales:**

### 10.2 Information Tab

**Corridor Name:**
- Cambiar nombre del corridor
- Best practice: Nombres descriptivos (ej: `Highway-MainLine-Corridor-v2`)

**Corridor Style:**
- Cambiar estilo de visualización
- Options: Basic, Detailed, Render Material

**Corridor Layer:**
- Cambiar layer del corridor object
- Default: `C-ROAD-CORR`

### 10.3 Parameters Tab

**Baselines:**
- Lista de baselines (para corridor simple: 1 baseline)
- Expand para ver regions

**Regions:**
- Click derecho en region → Opciones:
  - **Edit Region:** Cambiar Start/End station, Assembly
  - **Split Region:** Dividir región en 2 (para aplicar assemblies diferentes)
  - **Delete Region:** Eliminar región

**Add Baseline:**
- Button para añadir baseline adicional (intersecciones, tema Lección 3)

**Rebuild Options:**
- ☑ **Automatic:** Rebuild automático al cambiar objetos
- **Rebuild** button: Rebuild manual

![Corridor Properties Parameters](../imagenes/leccion-2-corridor-properties-parameters.png)

### 10.4 Modificar Frequency de Región

**Pasos:**
1. Corridor Properties → **Parameters tab**
2. Expand baseline → Expand region
3. Click derecho en region → **Edit Region...**
4. **Frequency tab:**
   - Modifica intervalos (ej: 25m → 15m para mayor densidad)
   - Toggle checkboxes (Horizontal Geometry Points, etc.)
5. **OK**

**Resultado:**
- Corridor rebuild con nueva frequency
- Más secciones = más precisión, más peso computacional

### 10.5 Modificar Assembly de Región

**Caso de uso:** Cambiar de assembly simple a assembly con bordillo urbano en cierto tramo.

**Pasos:**
1. Parameters tab → Region → **Edit Region**
2. **Assembly:** Dropdown → Selecciona nuevo assembly
3. **OK**

**IMPORTANTE:** El nuevo assembly debe ser compatible (similar estructura de códigos) para evitar errores.

---

## 11. Troubleshooting Inicial

### 11.1 Error: "No solution for subassembly"

**Síntoma:**
- Corridor se crea parcialmente
- Algunas estaciones muestran warning: "No solution"

**Causa:**
- Subassembly adaptativo (LinkToSurface) no encuentra intersección con surface target
- Posibles razones:
  1. Surface target no asignado (olvidaste configurar Targets tab)
  2. Surface no cubre el área (fuera de límites de superficie)
  3. Máximo offset excedido (talud muy largo, sobrepasa límite de subassembly)

**Solución:**
1. Corridor Properties → Parameters tab → Region → Targets tab
2. Verifica que Surface = EG esté asignado
3. Verifica que superficie EG cubra toda el área del corridor
4. Si el problema persiste, aumenta Maximum Offset en subassembly LinkToSurface

### 11.2 Corridor Out of Date (Desactualizado)

**Síntoma:**
- Ícono amarillo ⚠ en Prospector junto al corridor
- Cambios en alignment/profile no se reflejan en corridor

**Causa:**
- Rebuild mode = Manual
- Modificaste alignment, profile, o assembly sin rebuild

**Solución:**
- Select corridor → Rebuild Corridor (comando o button en Corridor tab)

### 11.3 Corridor Demasiado Lento (Performance)

**Síntoma:**
- Rebuild tarda minutos
- Civil 3D se congela al modificar corridor

**Causa:**
- Frequency muy densa (ej: 5m en tangentes para proyecto de 50 km)
- Corridor muy largo con configuración detallada

**Solución:**
1. **Reducir frequency:**
   - Tangents: 50 m (en vez de 25 m)
   - Curves: 25 m (en vez de 12.5 m)
2. **Desactivar Automatic Rebuild:**
   - Corridor Properties → Parameters → ✗ Automatic
3. **Dividir corridor en múltiples corridors:**
   - Km 0-10: Corridor 1
   - Km 10-20: Corridor 2
   - Etc.

---

## Ejercicio Práctico 2

**Objetivo:** Crear corridor completo aplicando assembly a alignment y profile con superficie EG.

**Requisitos previos (deben existir en tu drawing):**
- Alignment: `Centerline-Exercise2` (mínimo 1.5 km)
- Profile: `FG-Exercise2` (asociado al alignment)
- Surface: `EG-Exercise2` (terreno natural con curvas de nivel)
- Assembly: `Rural-2L-Ditch-3to1` (creado en Ejercicio 1 de Lección 1)

**Tareas:**

1. **Create Corridor:**
   - Name: `Corridor-Exercise2-Rural`
   - Description: "Corridor rural 2 carriles, assembly 3:1 taludes, cuneta en corte"
   - Alignment: Centerline-Exercise2
   - Profile: FG-Exercise2
   - Assembly: Rural-2L-Ditch-3to1
   - Target Surface: EG-Exercise2
   - Corridor Style: Basic

2. **Configure Frequency:**
   - Along Tangents: 25.00 m
   - Along Curves: 12.50 m
   - ☑ Horizontal Geometry Points
   - ☑ Profile Geometry Points
   - ☑ Profile Curve High/Low Points

3. **Assign Surface Target:**
   - Targets tab → Surfaces → EG-Exercise2

4. **Create y verificar:**
   - Click OK → Corridor se genera
   - Verifica que no hay errores "No solution"

5. **View en 3D:**
   - SW Isometric view
   - Visual Style: Realistic
   - Captura screenshot del corridor 3D

6. **Section Editor:**
   - Open Section Editor
   - Navega a estación 0+500
   - Identifica si está en corte o relleno
   - Captura screenshot de sección en 0+500

7. **Edit Frequency:**
   - Corridor Properties → Parameters → Edit Region
   - Cambia Along Tangents a `15.00 m` (más denso)
   - Rebuild
   - Observa aumento de secciones transversales

**Entregables:**
- Drawing guardado: `Ejercicio2-Corridor-Rural.dwg`
- Screenshot 1: Corridor en plan view (vista en planta)
- Screenshot 2: Corridor en 3D isometric view
- Screenshot 3: Section Editor mostrando estación 0+500
- Reporte breve:
  - Número de secciones generadas (Command line output)
  - Frequency inicial vs final
  - Observaciones de corte/relleno en estación 0+500

![Ejercicio 2 Expected Result](../imagenes/leccion-2-ejercicio2-result.png)

---

## Evaluación

**Pregunta 1:**
¿Cuáles son los 4 objetos obligatorios para crear un corridor en Civil 3D?

**Pregunta 2:**
¿Qué controla el parámetro "Frequency - Along Tangents" en la configuración de región?

**Pregunta 3:**
Si un subassembly LinkToSurface genera error "No solution", ¿cuál es la causa más probable?

**Pregunta 4:**
¿Qué diferencia hay entre Rebuild Mode "Automatic" y "Manual"?

**Pregunta 5:**
En el Section Editor, ¿cómo identificas visualmente si una sección está en corte (cut) o relleno (fill)?

**Pregunta 6:**
¿Por qué es recomendable activar "Horizontal Geometry Points" en frequency configuration?

**Pregunta 7:**
¿Qué pestaña del Corridor Properties usas para asignar la superficie target (EG)?

**Pregunta 8:**
Si tienes un corridor de 10 km con frequency de 10m en tangentes, aproximadamente cuántas secciones transversales se generarán solo en tangentes? (asumiendo 70% del alignment son tangentes)

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "Creating Corridors"
- Autodesk Civil 3D 2026 - Corridor Modeling Guide (PDF)
- Autodesk Knowledge Network - Corridor Troubleshooting

**Videos tutoriales:**
- Autodesk Civil 3D - Corridor Basics
- Frequency Configuration Best Practices
- Section Editor Deep Dive

**AASHTO Green Book:**
- Chapter 3: Elements of Design - Cross Section (fundamentos teóricos de secciones)

---

## Resumen

En esta lección aprendiste:

✅ Los 4 requisitos previos para crear corridor: alignment, profile, assembly, surface
✅ Ejecutar comando **Create Corridor** y configurar dialog inicial
✅ Entender estructura de **baselines** y **regions**
✅ Configurar **frequency parameters** para controlar densidad de secciones:
  - Along Tangents, Curves, Spirals
  - Horizontal/Profile Geometry Points
  - Balance entre precisión y performance
✅ Asignar **target surface** (EG) para subassemblies adaptativos (taludes)
✅ Diferenciar entre **Rebuild Automático** vs **Manual**
✅ Visualizar corridors en **2D** (plan view) y **3D** (isometric)
✅ Usar **Section Editor** para inspeccionar secciones transversales
✅ Editar corridor parameters (frequency, assembly, targets)
✅ Troubleshooting básico: "No solution", corridor out of date, performance

**Próxima Lección:** Targets y Offset Alignments - Diseño Adaptativo. Aprenderás a configurar targets múltiples (surfaces, width, offset alignments) para corridors complejos con carriles de ancho variable e intersecciones.

---

**Tiempo de estudio recomendado:** 80 minutos
**Práctica adicional:** 60 minutos creando corridors variantes (diferentes assemblies, frequencies, longitudes)
