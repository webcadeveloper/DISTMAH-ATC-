# Lección 6: Curvas de Nivel (Contours) y Etiquetado

**Duración:** 60 minutos
**Módulo:** 2 - Puntos y Superficies Topográficas
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Generar contours (curvas de nivel) automáticamente desde superficies
✅ Configurar Contour Styles (major, minor, user-defined intervals)
✅ Aplicar smoothing (suavizado) a contours para presentación
✅ Añadir contour labels con intervalos personalizados
✅ Configurar labeling styles y formatting profesional
✅ Generar contours para superficie propuesta (design)
✅ Exportar contours a AutoCAD para compartir
✅ Aplicar best practices para plotting de planos topográficos

---

## Introducción

Las **curvas de nivel** (contours) son líneas que conectan puntos de igual elevación en una superficie, representando la topografía en formato 2D. Son el estándar universal para comunicar información topográfica en planos de construcción.

En Civil 3D, los contours son objetos dinámicos generados automáticamente desde superficies TIN. Si modificas la superficie (añades puntos, breaklines), los contours se regeneran instantáneamente. Los contour labels (etiquetas) también se actualizan automáticamente.

**Caso real:** Plano topográfico de 10 hectáreas con curvas de nivel cada 1 metro (minor) y cada 5 metros (major) etiquetadas. El dibujante modifica 50 puntos del levantamiento para correcciones. En AutoCAD tradicional, esto requeriría redibujar manualmente todas las curvas afectadas (horas de trabajo). En Civil 3D, los contours se regeneran automáticamente en segundos.

---

## 1. Generar Contours desde Superficie

### 1.1 ¿Cómo se generan Contours?

Civil 3D genera contours **automáticamente** desde cualquier superficie TIN. No necesitas dibujar líneas manualmente.

**Proceso interno:**
1. Civil 3D analiza superficie TIN
2. Calcula intersecciones de planos horizontales a elevaciones específicas con triángulos
3. Conecta esas intersecciones formando polilíneas cerradas
4. Aplica Surface Style para visualización

### 1.2 Surface Styles con Contours

**Surface Style** controla qué se muestra de la superficie: triángulos, contours, elevation banding, etc.

**Acceso a Surface Styles:**

1. Selecciona superficie en Model Space
2. Ribbon → **Surface** contextual tab → **Surface Style** dropdown
3. Lista de estilos predefinidos

**Estilos comunes con contours:**

| Style | Descripción | Uso |
|-------|-------------|-----|
| **Contours 1m and 5m (Background)** | Contours grises sutiles | Contexto, referencia |
| **Contours 1m and 5m (Design)** | Contours negro/marrón | Planos de diseño |
| **Contours 2ft and 10ft (Design)** | Imperial (pies) | Proyectos en EE.UU. |
| **Contours and Triangles** | Muestra ambos | Análisis técnico |

**Aplicar estilo:**
1. Selecciona superficie
2. Ribbon → Surface Style → `Contours 1m and 5m (Design)`
3. Contours aparecen en Model Space

![Contour Styles](../../imagenes/leccion-2-6-contour-styles.png)

### 1.3 Verificar Intervalos de Contours

**Revisar qué intervalos de contours se están generando:**

1. Selecciona superficie
2. Click derecho → **Surface Properties...**
3. Pestaña **Display** tab
4. Revisa componentes:
   - **Major Contour** - Curvas maestras (cada 5m)
   - **Minor Contour** - Curvas intermedias (cada 1m)
   - **User Contour** - Curvas personalizadas

Cada tipo tiene:
- **Visibility** (Visible/Invisible)
- **Layer**
- **Color**
- **Linetype**
- **Lineweight**

---

## 2. Configurar Contour Styles (Major, Minor, User-Defined)

### 2.1 Crear/Modificar Surface Style para Contours

**Objetivo:** Crear Surface Style personalizado con intervalos específicos de contours.

**Procedimiento:**

1. Toolspace → **Settings** tab
2. Expande **Surface**
3. Expande **Surface Styles**
4. Click derecho en espacio vacío → **New...**

Aparece **Surface Style** dialog.

**Pestaña Information:**
- **Name:** `Contours-Proyecto-Carretera`
- **Description:** "Contours 0.5m minor, 2.5m major para proyecto"

**Pestaña Contours:**

Aquí configuras intervalos de contours.

**Sección Contour Intervals:**

- **Base Elevation:** `0.00` (elevación de referencia - generalmente 0)
- **Minor Interval:** `0.5` metros (curvas cada 0.5m)
- **Major Interval:** `2.5` metros (curvas cada 2.5m)
- **User-Defined Contours:** (opcional - intervalos adicionales específicos)

**Sección Contour Ranges:**

Define rangos de elevación con diferentes configuraciones.

**Range 1:**
- **Minimum Elevation:** `0`
- **Maximum Elevation:** `200`
- **Minor Interval:** `0.5`
- **Major Interval:** `2.5`

**Ejemplo con múltiples rangos:**

- Range 1: 0-50m → Minor 0.5m, Major 2.5m (detalle fino en zona baja)
- Range 2: 50-150m → Minor 1m, Major 5m (detalle medio en zona media)
- Range 3: 150-300m → Minor 2m, Major 10m (menos detalle en zona alta)

![Contour Intervals Config](../../imagenes/leccion-2-6-contour-intervals.png)

**Pestaña Display:**

Define visualización de cada tipo de contour.

**Major Contour:**
- **Visible:** ✓
- **Layer:** `C-TOPO-MAJR` (capa para major contours)
- **Color:** ByLayer
- **Linetype:** Continuous
- **Lineweight:** 0.35mm (más grueso que minor)

**Minor Contour:**
- **Visible:** ✓
- **Layer:** `C-TOPO-MINR`
- **Color:** ByLayer
- **Linetype:** Continuous
- **Lineweight:** 0.18mm (más delgado)

**User Contour 1, 2, 3...:**
- Configura si necesitas intervalos adicionales

5. Click **OK**

**Aplicar style a superficie:**
6. Selecciona superficie → Surface Style → `Contours-Proyecto-Carretera`

### 2.2 User-Defined Contours

**Uso:** Añadir contours específicos además de major/minor.

**Ejemplo:** Quieres destacar contour a elevación 150.00 (cota de inundación).

**Configuración:**

1. Surface Style → Pestaña **Contours**
2. Sección **User-Defined Contours:**
3. Click **Add** (añadir user contour)
4. **Elevation:** `150.00`
5. Display tab → **User Contour 1:**
   - Color: Rojo (destacar)
   - Lineweight: 0.50mm (más grueso)

**Resultado:** Contour a elevación 150.00 se dibuja en rojo, destacándose del resto.

---

## 3. Smoothing de Contours (Suavizado)

### 3.1 ¿Por qué suavizar Contours?

**Problema:** Contours generados directamente desde TIN pueden tener ángulos agudos (debido a triangulación), creando apariencia "dentada" poco profesional.

**Solución:** **Smoothing** aplica algoritmos de suavizado que redondean curvas, creando contours con apariencia más natural y profesional.

**Tipos de smoothing:**
- **No smoothing** - Líneas directas siguiendo triángulos TIN
- **Spline curve** - Suavizado con curvas spline (más suave)
- **Add vertices** - Añade vértices para suavizar sin cambiar forma

![Smoothing Comparison](../../imagenes/leccion-2-6-smoothing-comparison.png)

### 3.2 Configurar Smoothing

**Procedimiento:**

1. Surface Style editor → Pestaña **Contours**
2. Sección **Contour Smoothing:**

**Opciones:**

- **Smooth contours:** ✓ (activar smoothing)
- **Smoothing type:**
  - `Cubic parabola` - Suavizado moderado (recomendado)
  - `Bezier curve` - Suavizado fuerte
  - `Spline curve` - Suavizado muy fuerte
  - `Add vertices` - Añade puntos sin cambiar mucho la forma
- **Smoothing factor:**
  - Valor: `5` - `10` (típico)
  - Mayor valor = más suavizado
  - Menor valor = menos suavizado, más fiel a TIN original

**Recomendación:**
- **Design drawings:** Smoothing moderado (Cubic parabola, factor 7)
- **Construction drawings:** Sin smoothing (fiel a TIN)
- **Presentation drawings:** Smoothing fuerte (Spline curve, factor 10)

3. Click **OK**
4. Contours se regeneran con suavizado aplicado

---

## 4. Contour Labels (Etiquetas)

### 4.1 Tipos de Contour Labels

**Label Styles** controlan cómo se etiquetan los contours:

| Label Type | Descripción | Uso |
|------------|-------------|-----|
| **Surface Elevation** | Solo elevación (ej: 150.00) | Estándar |
| **Surface Slope** | Pendiente de contour | Análisis |
| **Contour - Multiple** | Etiquetas múltiples a lo largo de contour | Planos grandes |
| **Contour - Single** | Una etiqueta por contour | Planos pequeños |

### 4.2 Añadir Contour Labels

**Método 1: Label Individual Contours**

**Procedimiento:**

1. Ribbon → **Annotate** tab → **Labels & Tables** panel
2. **Add Labels** dropdown → **Surface** → **Contour - Single**

3. Command line: `Select a surface:`
4. Click en superficie

5. Command line: `Select a contour:`
6. Click en un contour (curva de nivel)

7. Command line: `Specify label location:`
8. Click donde quieres la etiqueta sobre el contour

**Etiqueta creada** mostrando elevación del contour.

**Método 2: Label Multiple Contours (Automático)**

**Procedimiento:**

1. Ribbon → Annotate → Add Labels → **Surface** → **Contour - Multiple**

2. Command line: `Select a surface:`
3. Click en superficie

4. Aparece **Add Labels** dialog:

**Configuración:**

- **Label type:** `Contour - Multiple`
- **Contour label style:** `Existing Contour Labels` (o custom)
- **Major contour label style:** `Major Contour Label`
- **Minor contour label style:** `Minor Contour Label`

5. Click **Add**

6. Command line: `Specify first point of labeling area:`
7. Dibuja rectángulo rodeando área a etiquetar (similar a ZOOM window)
8. Especifica primer punto
9. Especifica segundo punto diagonal

**Resultado:**
- Civil 3D etiqueta automáticamente contours dentro del área
- Major contours con un estilo (más grande/bold)
- Minor contours con otro estilo (más pequeño)

![Multiple Contour Labels](../../imagenes/leccion-2-6-multiple-labels.png)

### 4.3 Configurar Labeling Intervals

**Controlar frecuencia de etiquetas:**

**Opciones en Add Labels dialog:**

- **Interval:**
  - **Distance:** Etiqueta cada X metros a lo largo del contour (ej: cada 50m)
  - **Percentage:** Etiqueta cada X% de longitud del contour
- **Orientation:**
  - **Perpendicular** - Etiqueta perpendicular al contour
  - **Parallel** - Etiqueta paralela al contour
- **Stagger Label:**
  - Alterna posición de etiquetas (evita amontonamiento)

**Ejemplo:**
- Distance: `100.0` metros
- Orientation: Perpendicular
- Stagger: ✓

**Resultado:** Etiquetas cada 100m a lo largo de cada contour, perpendiculares a la curva, alternando posición.

---

## 5. Label Styles y Formatting

### 5.1 Crear Contour Label Style Personalizado

**Procedimiento:**

1. Toolspace → **Settings** tab → **Surface** → **Label Styles** → **Contour**
2. Click derecho en espacio vacío → **New...**

Aparece **Label Style Composer** dialog.

**Pestaña Information:**
- **Name:** `Contour-Label-Proyecto`
- **Description:** "Etiquetas de contour para planos de proyecto"

**Pestaña General:**

- **Visibility:** Visible en Model, Paper, Profile views (según necesidad)
- **Orientation:** `Object` (orientado al contour)

**Pestaña Layout:**

Aquí defines componentes del texto.

**Component name:** `Elevation`

**Properties:**

- **Contents:** Click en campo → Aparece **Text Component Editor**
  - **Property:** `Surface Elevation`
  - **Precision:** `0.01` (2 decimales)
  - **Unit:** Meters (o feet según proyecto)
  - **Format:** `150.25` (sin símbolo de unidad)

**Text properties:**

- **Text Height:** `2.5` mm (tamaño del texto)
- **Font:** `Arial` o `Romans` (fuente CAD estándar)
- **Color:** ByLayer
- **Bold:** ✓ (para major contours)

**Border:**
- **Type:** `Rounded Rectangular` (opcional - caja alrededor del texto)
- **Background Mask:** ✓ (fondo blanco para legibilidad)
- **Gap:** `0.5` mm (espacio entre texto y borde)

3. Click **OK**

![Label Style Composer](../../imagenes/leccion-2-6-label-style.png)

### 5.2 Aplicar Label Style a Contours

**Método 1: Al añadir labels**

En **Add Labels** dialog:
- **Contour label style:** Selecciona tu style custom `Contour-Label-Proyecto`

**Método 2: Modificar labels existentes**

1. Selecciona etiquetas en Model Space
2. Properties (Ctrl+1)
3. **Label Style:** Cambia a `Contour-Label-Proyecto`
4. Etiquetas se actualizan con nuevo estilo

---

## 6. Contours para Superficie Propuesta (Design)

### 6.1 Diferenciar Existing vs Proposed Contours

**Estándar profesional:** Contours de terreno existente (EG) y propuesto (FG) deben distinguirse visualmente.

**Método 1: Layers diferentes**

- **EG Surface:** `EG-Existing-Ground`
  - Major Contours → Layer: `C-TOPO-MAJR-EXIST` (línea continua, color marrón)
  - Minor Contours → Layer: `C-TOPO-MINR-EXIST` (línea continua, color marrón claro)

- **FG Surface:** `FG-Proposed-Design`
  - Major Contours → Layer: `C-TOPO-MAJR-PROP` (línea discontinua, color rojo)
  - Minor Contours → Layer: `C-TOPO-MINR-PROP` (línea discontinua, color rojo claro)

**Método 2: Linetypes diferentes**

- **EG Contours:** Linetype `Continuous` (continua)
- **FG Contours:** Linetype `Dashed` o `Phantom` (discontinua)

### 6.2 Overlay Existing y Proposed Contours

**Visualizar ambas superficies simultáneamente:**

**Procedimiento:**

1. Crea Surface Style para EG:
   - Name: `EG-Contours-Brown-Continuous`
   - Contours: Color marrón, continuous

2. Crea Surface Style para FG:
   - Name: `FG-Contours-Red-Dashed`
   - Contours: Color rojo, dashed linetype

3. En mismo drawing:
   - Superficie EG con style EG-Contours-Brown-Continuous
   - Superficie FG con style FG-Contours-Red-Dashed

**Resultado:** Plano mostrando ambos contours (existing en marrón continuo, proposed en rojo discontinuo), permitiendo ver claramente áreas de corte y relleno.

![EG vs FG Contours](../../imagenes/leccion-2-6-eg-fg-contours.png)

---

## 7. Exportar Contours a AutoCAD

### 7.1 ¿Por qué exportar Contours?

**Escenarios:**
- Compartir plano topográfico con cliente que no tiene Civil 3D
- Enviar contours a dibujante en AutoCAD puro
- Crear archivos livianos (sin objetos Civil 3D pesados)

### 7.2 Exportar Contours como Polylines

**Procedimiento:**

1. Toolspace → **Prospector** → Surfaces → (superficie)
2. Click derecho en superficie → **Extract Objects...**

Aparece **Extract Objects from Surface** dialog.

**Sección Select objects to extract:**

- ✓ **Contours** (seleccionar contours)
- ✗ Points (no extraer puntos)
- ✗ Triangles
- ✗ Watersheds

**Sección Settings:**

- **Major contours:** ✓
- **Minor contours:** ✓
- **User contours:** ✓ (si tienes)

**Output:**

- **Polyline type:** `2D polyline` (AutoCAD compatible)
- **Maintain contour elevations:** ✓ (polylines 3D con elevación correcta)
- **Layer:**
  - **Major:** `C-TOPO-MAJR-EXPORT`
  - **Minor:** `C-TOPO-MINR-EXPORT`

3. Click **OK**

**Resultado:**
- Civil 3D crea polylines 2D/3D representando contours
- Polylines son objetos AutoCAD estándar (no dinámicos)
- Pueden guardarse en DWG y abrirse en AutoCAD puro

**IMPORTANTE:** Polylines exportadas NO se actualizan si superficie cambia. Son snapshot estático.

### 7.3 Save As AutoCAD DWG

**Para compatibilidad total:**

1. Command: `SAVEAS`
2. **Files of type:** `AutoCAD 2018 Drawing (*.dwg)`
3. Nombre archivo: `Topografia-Contours-Export.dwg`
4. Click **Save**

Aparece **Export Civil 3D Drawing** dialog:

5. **Export options:**
   - **Export all Civil 3D data as AutoCAD objects:** ✓
   - Surfaces se convierten a polylines
   - Points se convierten a AutoCAD points
   - Alignment se convierten a polylines

6. Click **OK**

**Archivo DWG generado** puede abrirse en AutoCAD sin Civil 3D.

---

## 8. Best Practices para Plotting

### 8.1 Preparar Plano Topográfico para Impresión

**Checklist:**

✅ **Contours con intervalos apropiados**
- Escala 1:500 → Minor 0.5m, Major 2.5m
- Escala 1:1000 → Minor 1m, Major 5m
- Escala 1:2000 → Minor 2m, Major 10m

✅ **Lineweights diferenciados**
- Major contours: 0.35-0.50mm
- Minor contours: 0.18-0.25mm
- Proposed contours: 0.30mm (dashed)

✅ **Labels legibles**
- Text height según escala de plot
- Background mask para evitar superposición con contours
- Major contours etiquetados, minor solo si no causa clutter

✅ **Layers organizados**
- Existentes en layers C-TOPO-*-EXIST
- Propuestos en layers C-TOPO-*-PROP
- Labels en layers C-TOPO-LABL

✅ **Legend/Simbología**
- Nota indicando intervalo de contours
- Diferenciación existing vs proposed
- Norte de proyecto

### 8.2 Plot Styles (CTB/STB)

**Configurar plot styles para contours:**

**En CTB (Color-based):**

- Color 30 (Brown) → 0.25mm lineweight (minor existing)
- Color 31 (Light Brown) → 0.35mm lineweight (major existing)
- Color 1 (Red) → 0.25mm Dashed (minor proposed)
- Color 10 (Light Red) → 0.35mm Dashed (major proposed)

**Verificar plot preview:**

1. Command: `PLOT` o `PREVIEW`
2. Verifica diferenciación de major vs minor
3. Verifica legibilidad de labels
4. Ajusta lineweights si necesario

---

## Ejercicio Práctico 6

**Objetivo:** Generar plano topográfico profesional con contours, labels, y exportación a AutoCAD.

### Escenario

Preparar plano topográfico de terreno existente con curvas de nivel cada 0.5m (minor) y cada 2.5m (major), etiquetado profesional, listo para impresión.

### Parte 1: Crear Surface Style para Contours

1. Toolspace → Settings → Surface → Surface Styles → New
2. Name: `Contours-Plano-Topografico`
3. Pestaña Contours:
   - Base Elevation: `0`
   - Minor Interval: `0.5`
   - Major Interval: `2.5`
4. Contour Smoothing:
   - ✓ Smooth contours
   - Type: `Cubic parabola`
   - Factor: `7`
5. Pestaña Display:
   - **Major Contour:**
     - Layer: `C-TOPO-MAJR`
     - Lineweight: `0.35mm`
     - Color: ByLayer
   - **Minor Contour:**
     - Layer: `C-TOPO-MINR`
     - Lineweight: `0.18mm`
     - Color: ByLayer
6. Click OK

### Parte 2: Aplicar Style a Superficie

7. Selecciona superficie `EG-Existing-Ground`
8. Surface Style → `Contours-Plano-Topografico`
9. Contours aparecen suavizados

### Parte 3: Crear Contour Label Style

10. Settings → Surface → Label Styles → Contour → New
11. Name: `Contour-Label-Standard`
12. Layout tab:
    - Component: Elevation
    - Text Height: `2.5mm`
    - Precision: `0.00` (2 decimales)
    - Background Mask: ✓
13. Click OK

### Parte 4: Añadir Labels a Major Contours

14. Annotate → Add Labels → Surface → Contour - Multiple
15. Select surface: `EG-Existing-Ground`
16. Add Labels dialog:
    - Major contour label style: `Contour-Label-Standard`
    - Minor contour label style: `<none>` (no etiquetar minor)
    - Interval: Distance `50.0` metros
    - Orientation: Perpendicular
17. Click Add
18. Dibuja rectángulo rodeando área a etiquetar
19. Major contours etiquetados cada 50m

### Parte 5: Verificar en Plot Preview

20. Command: `PREVIEW`
21. Verifica:
    - Major contours más gruesos que minor
    - Labels legibles
    - Sin superposición excesiva
22. Close preview

### Parte 6: Exportar Contours a AutoCAD

23. Prospector → Surfaces → EG-Existing-Ground → Extract Objects
24. ✓ Contours (Major, Minor)
25. Polyline type: `2D polyline`
26. ✓ Maintain contour elevations
27. Layer Major: `C-TOPO-MAJR-EXPORT`
28. Layer Minor: `C-TOPO-MINR-EXPORT`
29. Click OK
30. Polylines creadas

### Parte 7: Save As AutoCAD DWG

31. Command: `SAVEAS`
32. Files of type: `AutoCAD 2018 Drawing`
33. Filename: `Topografia-Export.dwg`
34. Export options: ✓ Export all Civil 3D data as AutoCAD objects
35. Save

**Entregables:**
- Archivo DWG con contours estilizados y etiquetados
- Screenshot de plot preview mostrando diferenciación major/minor
- Archivo `Topografia-Export.dwg` compatible con AutoCAD
- PDF plotted a escala 1:500

![Ejercicio 6 - Plano Topográfico](../../imagenes/leccion-2-6-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia entre Major Contour y Minor Contour?

**Pregunta 2:** ¿Qué hace el smoothing en contours y cuándo usarlo?

**Pregunta 3:** ¿Cómo diferenciarías visualmente contours de terreno existente vs propuesto en un plano?

**Pregunta 4:** ¿Qué significa "Extract Objects" cuando exportas contours?

**Pregunta 5:** ¿Qué interval de contours usarías para plano a escala 1:1000?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 - Contours and Grading User Guide
- Label Styles Best Practices
- Plotting Civil 3D Drawings Guide

**Templates descargables:**
- Surface Styles with contours (1m/5m, 2ft/10ft)
- Contour Label Styles library
- Plot styles (CTB) for topographic drawings

**Estándares:**
- USGS Topographic Map Standards
- CAD Layer Naming (NCS - National CAD Standard)

---

## Resumen

En esta lección aprendiste:

✅ Contours se generan automáticamente desde superficies TIN usando Surface Styles
✅ Configurar intervalos de contours (Major, Minor, User-Defined) según escala de proyecto
✅ Smoothing suaviza contours para presentación profesional (Cubic parabola, Spline)
✅ Contour Labels etiquetan curvas de nivel con elevaciones, configurables por intervalo y orientación
✅ Label Styles controlan apariencia de texto (font, tamaño, precisión, background mask)
✅ Diferenciar contours de existing vs proposed usando layers, colors, y linetypes
✅ Exportar contours como polylines AutoCAD para compatibilidad universal
✅ Best practices de plotting: lineweights diferenciados, labels legibles, layers organizados

**Siguiente Módulo:** Alineamientos y Perfiles - Diseño geométrico de carreteras y vías.

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos creando planos topográficos a diferentes escalas y experimentando con estilos

**FIN DEL MÓDULO 2**
