# Lección 6: Thematic Mapping y Estilos Avanzados

## Objetivos de Aprendizaje

- ✅ Crear estilos basados en expresiones SQL
- ✅ Mapas temáticos multivariable
- ✅ Graduated symbols (tamaño proporcional a valor)
- ✅ Heat maps (density visualization)
- ✅ Label styles y annotation avanzada

## Introducción

**Thematic maps** visualizan datos espaciales categorizados por atributos. Mientras la Lección 1.5 cubrió tematización básica (Individual Values, Ranged), esta lección explora técnicas avanzadas para crear cartografía analítica profesional que comunica insights complejos visualmente.

**Aplicaciones:**
- Density maps de población
- Choropleth maps de valores económicos por zona
- Graduated symbols proporcionales a valores (ej: círculos sized por población)
- Multi-variable visualization (color + size + transparency)

## 1. Estilos Basados en Expresiones

### 1.1 Expression-Based Styles

**Expresiones SQL** permiten logic complejo en estilos.

**Ejemplo:** Color parcelas según múltiples condiciones:
- Residential + Area > 10000 sqft → Green
- Residential + Area < 10000 sqft → Light Green
- Commercial → Red
- Industrial → Gray

**Procedimiento:**

1. **Display Manager > Edit Style**
2. **Style Type:** **Expression**
3. **Add Expression:**

```sql
WHEN Zoning = 'Residential' AND Area_sqft > 10000 THEN 'Green'
WHEN Zoning = 'Residential' AND Area_sqft <= 10000 THEN 'LightGreen'
WHEN Zoning = 'Commercial' THEN 'Red'
WHEN Zoning = 'Industrial' THEN 'Gray'
ELSE 'Yellow'
```

4. **Define colors** para cada resultado
5. **Apply**

**Resultado:** Styling sofisticado basado en lógica multi-criterio.

### 1.2 Expresiones con Cálculos

**Expresiones pueden incluir calculations:**

**Ejemplo:** Style basado en density (population per sq km):

```sql
WHEN (Population / Area_sqkm) > 1000 THEN 'HighDensity'
WHEN (Population / Area_sqkm) > 500 THEN 'MediumDensity'
ELSE 'LowDensity'
```

**Map 3D calcula expression on-the-fly** para cada feature.

### 1.3 Expresiones de Fecha

**Ejemplo:** Highlight infraestructura instalada hace más de 50 años (requiere replacement):

```sql
WHEN (YEAR(CURRENT_DATE) - YEAR(InstallDate)) > 50 THEN 'Critical'
WHEN (YEAR(CURRENT_DATE) - YEAR(InstallDate)) > 30 THEN 'Priority'
ELSE 'Good'
```

**Critical** → Red, **Priority** → Yellow, **Good** → Green.

## 2. Graduated Symbols

### 2.1 Proportional Symbols

**Symbol size proporcional a attribute value.**

**Ejemplo:** Cities con círculos sized por población.

**Procedimiento:**

1. **Display Manager > Edit Style** de `cities` (points)
2. **Symbol Type:** **Graduated**
3. **Size Attribute:** `Population`
4. **Size Range:**
   - Minimum size: 2 units (para smallest population)
   - Maximum size: 20 units (para largest population)
5. **Symbol Shape:** Circle
6. **Color:** Uniform (ej: Blue) o también graduated
7. **Apply**

**Resultado:** Cities con poblaciones grandes tienen círculos grandes, pequeñas tienen círculos pequeños.

![Graduated Symbols](../imagenes/leccion-6-graduated-symbols.png)

### 2.2 Classification Methods

**Cómo dividir values en size classes:**

| Method | Description | Use Case |
|--------|-------------|----------|
| **Equal Intervals** | Divide range en intervals iguales | Distribución uniform de datos |
| **Quantile** | Cada class tiene igual número de features | Evita que outliers dominen |
| **Natural Breaks (Jenks)** | Minimiza variance dentro de classes | Datos con clustering natural |
| **Manual** | Define breaks personalizados | Control total |

### 2.3 Multi-Variable Symbols

**Combina size + color:**

**Ejemplo:** Cities:
- **Size** = Población
- **Color** = Crecimiento poblacional (Verde = creciendo, Rojo = declinando)

**Procedimiento:**

1. **Graduated Symbols** por Population (size)
2. **Individual Values** por Growth_Rate (color)
3. Map 3D combina ambos styles

**Resultado:** Visualización que muestra 2 variables simultáneamente.

## 3. Heat Maps (Density Visualization)

### 3.1 Point Density Maps

**Heat map** muestra densidad de points en área, útil para visualizar clusters.

**Aplicaciones:**
- Crime hotspots
- Disease outbreak clusters
- Customer location density
- Accident locations

**Conceptual workflow (Map 3D tiene capacidades limitadas, mejor en ArcGIS/QGIS):**

1. **Create grid** de polygons sobre área de estudio
2. **Count points** dentro de cada grid cell (spatial query)
3. **Thematic style** grid cells por count
   - High count → Red (hot)
   - Low count → Blue (cold)

### 3.2 Simulación de Heat Map en Map 3D

**Usando buffers + dissolve:**

1. **Buffer** cada point con small radius
2. **Union** todos los buffers
3. Areas con **overlaps múltiples** = high density
4. **Color** por número de overlaps

**Resultado aproximado:** Heat map effect.

**Para heat maps profesionales:** Export a QGIS y use Heatmap plugin.

## 4. Choropleth Maps

### 4.1 ¿Qué es Choropleth?

**Choropleth map:** Polygons coloreados según attribute value.

**Ejemplo clásico:** States/countries coloreados por GDP, población, election results.

**Best practices:**
- Use **sequential color scheme** para datos numéricos (light → dark)
- Use **diverging scheme** para datos con punto medio (ej: growth rate: Red negative, White zero, Blue positive)
- **Normalize data** si polygons tienen áreas muy diferentes (ej: use density, not absolute values)

### 4.2 Crear Choropleth en Map 3D

**Escenario:** Parcelas coloreadas por valor fiscal.

**Procedimiento:**

1. **Display Manager > Edit Style** de `parcels`
2. **Style Type:** **Ranged Theme**
3. **Attribute:** `TaxValue`
4. **Número de ranges:** 5
5. **Classification:** Natural Breaks
6. **Color Scheme:** Sequential
   - Light Yellow (low value) → Dark Red (high value)
7. **Apply**

**Resultado:** Mapa que muestra visualmente distribución de valores fiscales.

### 4.3 Color Theory para Choropleth

**Sequential (ordenados low → high):**
- Use 1 color, variando lightness (ej: Light Blue → Dark Blue)
- **ColorBrewer:** Tool online con color schemes científicamente optimizados

**Diverging (datos con punto medio):**
- 2 colors en extremos, neutral en medio
- Ejemplo: Red (negative) ← White (zero) → Blue (positive)

**Categorical (no ordenados):**
- Colores distintivos para cada categoría
- Evita colores muy similares

**Accesibilidad:**
- Consider color-blind friendly palettes
- Avoid red-green combinations (8% hombres son red-green color blind)

## 5. Labels y Annotation

### 5.1 Dynamic Labels

**Labels se generan automáticamente desde attributes.**

**Procedimiento:**

1. **Display Manager > Right-click en feature class**
2. **Labels** > **Enable Labels**
3. **Label Attribute:** Select field (ej: `ParcelID`)
4. **Label Style:**
   - Font: Arial, Size 10
   - Color: Black
   - Halo (background): White, opaco
5. **Label Placement:**
   - **Points:** Above, Below, Right, Left
   - **Lines:** Along line, Above line
   - **Polygons:** Centroid, Inside

**Resultado:** Labels appear dinámicamente, update si data changes.

### 5.2 Expression-Based Labels

**Labels con múltiples fields o calculations:**

**Ejemplo:** Label parcelas con "ID: {ParcelID} | Owner: {OwnerName}"

**Expression:**
```sql
'ID: ' + ParcelID + ' | Owner: ' + OwnerName
```

**Otro ejemplo:** Label con calculated value:
```sql
'Area: ' + CAST(Area_sqft AS VARCHAR) + ' sqft'
```

### 5.3 Label Conflict Detection

**Problem:** En áreas densas, labels se solapan (ilegible).

**Soluciones en Map 3D:**
1. **Scale-dependent labels:** Solo show labels cuando zoomed in
2. **Label placement rules:** Prioriza certain labels sobre otros
3. **Reduce label density:** Label solo features que cumplen criteria (ej: solo parcels > 5000 sqft)

**Para cartografía profesional avanzada:** Export a Adobe Illustrator o use ArcGIS Maplex labeling.

### 5.4 Annotation (Static Labels)

**Annotation:** Labels convertidos a objetos CAD estáticos (TEXT entities).

**Uso:** Cuando necesitas control total, editar posición manualmente.

**Create annotation:**
1. Select dynamic labels que quieres convertir
2. Comando: `MAPLABELTOANNOTATION`
3. Annotation se crea como TEXT objects
4. Edit con comandos CAD (MOVE, ROTATE, SCALE)

**Trade-off:**
- **Dynamic labels:** Update automáticamente si data changes
- **Annotation:** Control manual, pero NO update automáticamente

## 6. Map Layout y Composition

### 6.1 Multiple Thematic Maps en 1 Drawing

**Viewports:** Create múltiples vistas del mismo drawing con different styles.

**Procedimiento:**

1. Layout tab (PAPER SPACE)
2. Create múltiples viewports (MVIEW)
3. Cada viewport muestra mismo drawing pero con:
   - Different layer visibility
   - Different Display Manager styles
   - Different zoom level

**Ejemplo:**
- Viewport 1: Choropleth de población
- Viewport 2: Graduated symbols de growth rate
- Viewport 3: Network topology

### 6.2 Legend Generation

**Legend muestra símbolos y labels para cada style class.**

**Map 3D puede generate legends automáticamente** (Módulo 4 cubre en detalle).

**Preview:**
1. **Display Manager > Right-click en feature class**
2. **Create Legend**
3. Legend se genera con symbology + labels

## Ejercicio Práctico

### Ejercicio 6.1: Multi-Variable Thematic Map

**Objetivo:** Crear mapa que visualiza población (size) y densidad (color) simultáneamente.

**Datos:**
- `census_tracts.shp` con attributes: `Population`, `Area_sqkm`

**Instrucciones:**

1. **Calculate Density:**
   - Add field: `Density` (Real)
   - Calculate: `Population / Area_sqkm`
   - (Use ODETABLE para calculate, o do en QGIS antes de import)

2. **Graduated Symbols por Population:**
   - Display Manager > Edit Style de `census_tracts`
   - Type: Graduated
   - Size Attribute: `Population`
   - Range: 5 - 20 units
   - Shape: Circle

3. **Choropleth por Density:**
   - También en Edit Style (Map 3D permite combinar)
   - Add Ranged Theme
   - Attribute: `Density`
   - 5 classes, Natural Breaks
   - Color: Light Yellow → Dark Red

4. **Combine:**
   - Circles sized por Population
   - Circles colored por Density

5. **Labels:**
   - Enable labels
   - Expression: `'Pop: ' + CAST(Population AS VARCHAR)`

6. **Export:**
   - PLOT to PDF para presentación

**Entregable:**
- Drawing con thematic map
- Screenshot
- Brief interpretation (ej: "High population but low density in Tract 5 suggests suburban sprawl")

**Tiempo:** 25 minutos

## Evaluación

1. **¿Expression-based styles usan qué lenguaje?**
   - a) Python
   - b) JavaScript
   - c) SQL/Expression syntax
   - d) LISP

2. **Graduated symbols varían según:**
   - a) Solo color
   - b) Solo size
   - c) Size basado en attribute value
   - d) Random

3. **Choropleth maps son mejores para:**
   - a) Point data
   - b) Polygon data con attribute values
   - c) Line data
   - d) Annotation

4. **Para labels que update automáticamente si data changes, usa:**
   - a) Annotation
   - b) TEXT entities
   - c) Dynamic labels
   - d) MTEXT

5. **Sequential color schemes son mejores para:**
   - a) Categorical data (no ordenado)
   - b) Data con punto medio (positive/negative)
   - c) Numerical data ordenado (low → high)
   - d) Random data

**Respuestas:** 1-c, 2-c, 3-b, 4-c, 5-c

## Recursos Adicionales

- [ColorBrewer](https://colorbrewer2.org/) - Scientific color schemes
- [Thematic Mapping Guide](https://www.axismaps.com/guide/thematic-mapping) - Axis Maps
- [Cartographic Design Principles](https://gistbok.ucgis.org/bok-topics/cartographic-design)

## Resumen

- ✅ **Expression-based styles:** Logic complejo (SQL expressions)
- ✅ **Graduated symbols:** Size proporcional a value
- ✅ **Heat maps:** Density visualization (limited en Map 3D, mejor en QGIS/ArcGIS)
- ✅ **Choropleth:** Polygons coloreados por attribute value
- ✅ **Color theory:** Sequential, Diverging, Categorical schemes
- ✅ **Dynamic labels:** Auto-update, expression-based
- ✅ **Annotation:** Static labels, manual control

**Fin del Módulo 2**

---

**Próximo:** [Módulo 3 - Workflows Profesionales GIS/CAD](../../modulo-3-workflows-gis-cad/README.md)

En el Módulo 3 aprenderás integración con ArcGIS, MapInfo, Civil 3D, y workflows profesionales de conversión y edición de datos GIS/CAD.
