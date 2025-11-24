# Lección 2: Sample Lines y Section Views Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Configurar criterios avanzados de muestreo de sample lines
✅ Ajustar offset widths variables según la geometría del diseño
✅ Crear layouts de múltiples section views organizadas profesionalmente
✅ Aplicar Section View Bands para información adicional
✅ Configurar hatch patterns para áreas de corte y relleno
✅ Ajustar datum elevation y vertical exaggeration
✅ Proyectar pipe networks y utilities en secciones transversales
✅ Entender la actualización automática de secciones al modificar diseño

---

## Introducción

En la lección anterior aprendiste los conceptos fundamentales de secciones transversales. Ahora profundizaremos en técnicas avanzadas para configurar sample lines con criterios específicos, personalizar la presentación de section views, agregar información complementaria mediante bands, y proyectar elementos de infraestructura como tuberías y servicios.

Estas técnicas son esenciales para generar documentación constructiva profesional que cumpla con estándares de la industria y comunique efectivamente toda la información necesaria para construcción y presupuesto.

La capacidad de Civil 3D para actualizar automáticamente las secciones cuando modificas el diseño es uno de sus mayores beneficios en flujos de trabajo BIM, manteniendo la coherencia entre modelo y documentación.

![Section Views avanzado con bands y utilities](../imagenes/section-views-avanzado.png)

---

## 1. Configuración Avanzada de Sample Lines

### 1.1 Criterios de Muestreo Personalizados

Los **Sampling Criteria** controlan dónde y cómo se generan sample lines automáticamente:

**Toolspace > Settings tab > Alignment > Commands > CreateSampleLines**

Click derecho > **Edit Command Settings**

**Sample Line Defaults:**

- **Swath width:** Ancho total de la sección
  - Left: Offset izquierdo desde centerline
  - Right: Offset derecho desde centerline

- **Sample increments:** Intervalos de muestreo
  - Along tangents: Espaciado en rectas
  - Along curves: Espaciado en curvas (generalmente más denso)
  - Along spirals: Espaciado en espirales

- **Sample at:** Estaciones específicas
  - Horizontal geometry points (PC, PT, PRC)
  - Vertical geometry points (PVIs)
  - Superelevation critical stations
  - Profile high/low points

**Ejemplo de configuración para carretera:**

```
Along tangents: 20m
Along curves: 10m (el doble de densidad en curvas)
Along spirals: 5m (máxima densidad en transiciones)
At horizontal geometry points: Yes
At superelevation critical stations: Yes
```

**Resultado:** Secciones densas donde la geometría cambia rápido, espaciadas en tramos rectos uniformes.

### 1.2 Offset Widths Variables

En algunos proyectos el ancho de sección debe variar:

**Casos típicos:**
- **Puentes:** Ancho reducido solo al ancho del tablero
- **Intersecciones:** Ancho ampliado para capturar carriles de giro
- **Zonas urbanas:** Ancho variable según derecho de vía

**Método: Editar Sample Lines Individualmente**

1. Seleccionar sample line específica
2. Click derecho > **Edit Sample Line**
3. Grips de edición permiten ajustar offsets:
   - Grip izquierdo: Left offset
   - Grip derecho: Right offset
   - Grip central: Relocate sample line

4. Especificar nuevo offset en command line o dinámicamente

**Método: Sample Line Properties**

1. Seleccionar sample line
2. Properties palette (Ctrl+1)
3. **Left offset / Right offset:** Ingresar valores exactos

**Tip profesional:** Crea sample lines separadas con offsets específicos para puentes e intersecciones, agrupadas en Sample Line Groups diferentes.

![Offset widths variables en puente](../imagenes/sample-lines-offset-variable.png)

### 1.3 Sample Lines en Intersecciones

Las intersecciones requieren tratamiento especial:

**Estrategia:**

1. **Sample Line Group principal** a lo largo del alignment principal
2. **Sample Line Groups secundarios** para cada ramal de la intersección
3. **Sample lines manuales** en puntos de conflicto

**Ejemplo: Intersección en T**

- Main Road: Sample lines cada 10m
- Cross Street: Sample lines cada 10m en el ramal
- Intersección: Sample line manual en centro de la intersección capturando toda el área

**Resultado:** Documentación completa de toda la geometría de la intersección.

---

## 2. Section Views: Layouts y Organización

### 2.2 Multiple Section Views: Grid Layout

La generación masiva de section views requiere organización estratégica:

**Create Multiple Section Views > Section Placement tab**

**Placement Options:**

**1. Production (Grid):**
- Organiza secciones en filas y columnas
- Template drop-down: Configuraciones predefinidas
  - "5 Sections per Sheet (2x3)"
  - "10 Sections per Sheet (2x5)"
  - Custom: Definir rows × columns

**Settings:**
- **Row spacing:** Distancia vertical entre filas
- **Column spacing:** Distancia horizontal entre columnas
- **Section spacing:** Espacio entre secciones individuales

**2. Draft (Single):**
- Coloca section views individualmente
- Útil para revisión rápida o secciones especiales

**Workflow recomendado:**

1. **Draft mode:** Revisar diseño y verificar cálculos
2. **Production mode:** Generar sheets finales para planos de construcción

### 2.2 Templates de Section View Layout

Crear templates personalizados optimiza productividad:

**Section View Group Properties:**

1. Click derecho en Section View Group (Toolspace > Prospector)
2. **Properties**
3. **Section Views tab:** Lista de todas las vistas

**Template personalizado:**

```
Name: "Company Standard - 5 per Sheet"
Layout: 2 rows × 3 columns
Row spacing: 120mm
Column spacing: 80mm
Max sections per sheet: 5
```

**Guardar template:**

Settings > Section View > Section View Group Templates > New

Civil 3D guarda configuración para reutilizar en futuros proyectos.

![Grid layout de section views](../imagenes/section-views-grid-layout.png)

### 2.3 Alineación y Numeración de Sections

**Best practices:**

- **Station order:** De menor a mayor estación (izquierda a derecha, arriba a abajo)
- **Numeración consecutiva:** 1, 2, 3... o por estación "Sección 0+000", "Sección 0+020"
- **Title blocks:** Incluir station, offset range, elevación

**Section Labels:**

Toolspace > Settings > Section View > Label Styles

**Componentes de label:**
- Station (estación del alignment)
- Offset range (left/right limits)
- Sheet number (número de hoja)

**Formato típico:**
```
SECTION AT STATION 0+245.50
OFFSETS: 30.0m LEFT - 30.0m RIGHT
SHEET C-4.1
```

---

## 3. Section View Bands

Las **Bands** son franjas de información adicional arriba/abajo de la section view:

### 3.1 Tipos de Bands

**Section View Bands disponibles:**

1. **Elevation Bands**
   - Elevaciones de superficie en offsets específicos
   - Útil para verificar elevaciones de borde de pavimento

2. **Offset Elevation Bands**
   - Elevación vs offset (similar a profile view)
   - Muestra gradiente transversal

3. **Grade Bands**
   - Pendientes transversales
   - Importante para drenaje superficial

4. **Section Segment Bands**
   - Información de segmentos del corridor
   - Anchos de carriles, hombros

**Agregar Band a Section View:**

1. Seleccionar section view
2. Click derecho > **Edit Band Set**
3. **Bands tab:**
   - **Add Band:** Seleccionar tipo
   - **Location:** Top o Bottom of section view
   - **Band style:** Estilo visual
   - **Band height:** Altura de la franja
4. **OK**

### 3.2 Configurar Band Styles

**Toolspace > Settings > Section View > Band Styles**

**Ejemplo: Elevation Band personalizado**

1. Duplicar estilo estándar: "Elevation Data - Enhanced"
2. **Band Details tab:**
   - **Title text:** "ELEVATIONS AT EDGE OF PAVEMENT"
   - **Text height:** 2.5mm
   - **Offset increments:** Cada 5m
3. **Display tab:**
   - Labels: Black
   - Lines: Gray, hidden
4. **Apply**

**Resultado:** Band profesional mostrando elevaciones en intervalos regulares.

![Section view bands ejemplo](../imagenes/section-view-bands.png)

### 3.3 Band Sets

Los **Band Sets** agrupan múltiples bands:

**Ejemplo: Set completo para carretera**

- **Top Bands:**
  - Elevation Band (EG surface)
  - Grade Band (finished ground)

- **Bottom Bands:**
  - Offset Elevation Band (design surface)
  - Section Segment Band (corridor segments)

**Ventaja:** Aplica conjunto completo de bands a todas las section views simultáneamente.

---

## 4. Hatch Patterns para Corte y Relleno

Los **hatch patterns** distinguen visualmente áreas de corte y relleno:

### 4.1 Section View Styles: Hatching

**Toolspace > Settings > Section View > Section View Styles**

Seleccionar style > **Display tab**

**Componentes con hatching:**

- **Cut area:** Área de excavación
  - Hatch: ANSI31 (45°)
  - Color: Red o Yellow
  - Transparency: 30%

- **Fill area:** Área de relleno
  - Hatch: EARTH (patrón de tierra)
  - Color: Green o Blue
  - Transparency: 30%

**Configuración típica:**

```
Cut Hatch: ANSI31, Red, 45°, scale 10
Fill Hatch: EARTH, Green, scale 5
```

**Resultado:** Visualización clara de excavación (red/diagonal) vs relleno (green/earth pattern).

### 4.2 Material Section Styles

Para mayor detalle, los **Material Styles** muestran materiales específicos:

**Ejemplo: Sección de pavimento detallado**

- **Subgrade:** EARTH hatch, brown
- **Base:** GRAVEL hatch, gray
- **Asphalt:** SOLID hatch, black

Civil 3D aplica estos hatches automáticamente si el corridor tiene códigos de material configurados.

![Hatch patterns en section views](../imagenes/section-hatch-patterns.png)

---

## 5. Datum y Exageración Vertical

### 5.1 Datum Elevation

El **Datum** es la elevación de referencia de la section view:

**Opciones de datum:**

1. **Automatic:**
   - Civil 3D calcula datum óptimo
   - Generalmente la elevación mínima - buffer

2. **Mean elevation:**
   - Promedio de elevaciones de la sección
   - Centra la vista

3. **User specified:**
   - Datum fijo (e.g., 100.00m)
   - Útil para comparar secciones consistentemente

**Configurar datum:**

Section View Properties > **Elevations tab**
- **Datum:** User specified
- **Value:** 100.00

**Ventaja datum fijo:** Todas las secciones tienen misma referencia, facilitando comparación visual.

### 5.2 Vertical Exaggeration

La **exageración vertical** amplifica cambios de elevación:

**Vertical Scale = Vertical units : Horizontal units**

**Ejemplos:**

- **1:1** (No exaggeration) - Escala real
  - Terreno plano: Secciones casi horizontales
  - Difícil ver cambios sutiles

- **5:1** (Exaggeration 5x) - Recomendado para carreteras
  - Resalta pendientes transversales
  - Clarifica corte/relleno

- **10:1** (Exaggeration 10x) - Terrenos muy planos
  - Máxima amplificación de variaciones
  - Útil en zonas costeras, llanuras

**Configurar exaggeration:**

Section View Style > **Graph tab**
- **Vertical scale:** 5
- Unidades: meters (horizontal) × 5 = display vertical

**Nota:** El texto en la section view debe indicar la exageración:
"VERTICAL EXAGGERATION 5:1"

![Comparación sin vs con exageración vertical](../imagenes/vertical-exaggeration-compare.png)

---

## 6. Proyección de Pipe Networks en Secciones

Las **utilities** (tuberías, cables) deben aparecer en las secciones transversales:

### 6.1 Sample Line Group Settings: Pipe Networks

Para proyectar pipe networks:

1. Sample Line Group Properties
2. **Section Sources tab**
3. **Add** > **Pipe Network**
4. Seleccionar pipe network a proyectar
5. **Project to section view:** Activado
6. **Display style:** Pipe Network Section Style
7. **OK**

**Resultado:** Tuberías aparecen en todas las section views donde intersectan la sample line.

### 6.2 Estilos de Pipe Network en Secciones

**Toolspace > Settings > Pipe Network > Pipe/Structure Styles**

**Display en Section View:**

- **Pipes:** Círculos representando diámetro
  - Color por material (PVC=white, concrete=gray)
  - Anotación de diámetro e invert elevation

- **Structures:** Rectángulos o símbolos
  - Pozos de visita (manholes)
  - Catch basins

**Labels:**

**Annotate tab > Labels & Tables > Add Labels > Pipe Network**

- **Type:** Pipe (section view)
- **Label style:** Pipe diameter and invert
- **Add:** Seleccionar pipe en section view

**Formato típico:**
```
Ø300mm CONC
INV: 98.45m
```

### 6.3 Detección de Interferencias

Las secciones transversales revelan conflictos entre utilities:

**Ejemplo:** Tubería de agua potable cruza por encima de alcantarillado
- **Clearance requerido:** 0.50m mínimo
- **Section view muestra:** Solo 0.20m de separación
- **Acción:** Rediseñar profundidad de una de las tuberías

**Civil 3D Interference Check:**

Analyze tab > Design panel > Interference Check

Detecta conflictos 3D y genera reporte.

![Pipe networks proyectados en section view](../imagenes/pipes-section-view.png)

---

## 7. Actualización Dinámica de Secciones

### 7.1 Dynamic Update Behavior

Las section views de Civil 3D están **dinámicamente vinculadas** al modelo:

**Escenario:**
1. Diseñas corridor con assembly de 10m de ancho
2. Generas 50 section views
3. Cliente requiere ampliar a 12m de ancho
4. Modificas assembly y regeneras corridor
5. **Todas las 50 section views se actualizan automáticamente**

**Sin Civil 3D:** Tendrías que redibujar manualmente 50 secciones.

**Con Civil 3D:** Actualización instantánea, garantizando coherencia.

### 7.2 Configurar Update Mode

**Sample Line Group Properties > Sections tab**

Para cada superficie/source:

- **Update mode:**
  - **Automatic:** Actualiza inmediatamente al cambiar diseño
  - **Manual:** Actualiza solo cuando ejecutas "Rebuild"

**Recomendación:**

- **Durante diseño activo:** Manual (evita regeneraciones constantes)
- **Diseño final:** Automatic (mantiene sincronización)

### 7.3 Rebuild All

Forzar actualización manual:

**Toolspace > Prospector > Section Views > [grupo]**

Click derecho > **Rebuild All**

Civil 3D recalcula todas las secciones, volúmenes, y vistas.

**Cuándo usar:**

- Después de cambios mayores al diseño
- Antes de imprimir planos finales
- Al abrir archivo después de trabajo colaborativo

### 7.4 Out-of-Date Indicators

Civil 3D marca objetos desactualizados:

**Indicadores visuales:**

- **Icono de advertencia** en Toolspace (triángulo amarillo)
- **Tooltip:** "This object is out of date"
- **Command line message:** "Section view requires rebuild"

**Acción:** Click derecho > **Rebuild** para actualizar.

![Out-of-date indicator](../imagenes/out-of-date-indicator.png)

---

## Ejercicio Práctico 2: Section Views Avanzadas con Utilities

**Objetivo:** Configurar section views profesionales con bands, hatching, y proyección de pipe network.

**Archivo:** `Road-Design-Complete.dwg`

**Instrucciones:**

1. **Agregar Pipe Network a Sample Lines:**
   - Abrir Sample Line Group Properties
   - Section Sources tab > Add > Pipe Network
   - Seleccionar "Storm Network"
   - Project to section view: Activado

2. **Configurar Section View Style con Hatching:**
   - Duplicar estilo "Road Section"
   - Nombre: "Road Section - Enhanced"
   - Display tab:
     - Cut area: ANSI31, Red, 30% transparent
     - Fill area: EARTH, Green, 30% transparent
   - Aplicar a todas las section views

3. **Agregar Band Set:**
   - Editar Band Set de section views
   - Top band: Elevation Data (EG surface)
   - Bottom band: Offset Elevation (Design surface)
   - Band height: 20mm cada uno

4. **Configurar Vertical Exaggeration:**
   - Section View Style > Graph tab
   - Vertical scale: 5
   - Agregar nota "VERTICAL EXAGGERATION 5:1" al title

5. **Datum Elevation Consistente:**
   - Todas las section views con datum fijo: 95.00m
   - Section Views Properties > Elevations tab
   - User specified datum: 95.00

6. **Labels de Pipe Network:**
   - Agregar labels a pipes en section views
   - Label style: "Pipe Diameter and Invert"
   - Verificar clearances de tuberías vs superficie

7. **Verificar Update:**
   - Modificar levemente el corridor (cambiar slope de lane)
   - Observar section views actualizándose
   - Rebuild All si es necesario

**Resultado esperado:**
- Section views profesionales con hatching color-coded
- Pipes proyectados con labels de diámetro e invert
- Bands mostrando elevaciones y offsets
- Exageración vertical 5:1 para claridad
- Datum consistente en todas las secciones

---

## Evaluación

1. **¿Cuál es la ventaja de usar criterios de muestreo más densos en curvas que en tangentes?**
   - a) Reduce el tamaño del archivo
   - b) Captura mejor los cambios geométricos donde la curvatura varía
   - c) Solo es requisito estético
   - d) No hay diferencia técnica

2. **¿Qué son las Section View Bands?**
   - a) Bordes decorativos de las vistas
   - b) Franjas de información adicional arriba/abajo de la section view
   - c) Líneas de grid horizontal
   - d) Symbols de materiales

3. **¿Para qué sirve la Vertical Exaggeration en section views?**
   - a) Corregir errores de elevación
   - b) Amplificar cambios verticales para mejor visualización
   - c) Ajustar por proyecciones cartográficas
   - d) Calibrar el datum

4. **¿Cómo se proyectan pipe networks en section views?**
   - a) Dibujándolos manualmente en cada sección
   - b) Importando desde software de utilities
   - c) Configurando Sample Line Group para incluir pipe network como section source
   - d) No es posible proyectar pipes

5. **¿Qué significa "Update Mode: Automatic" en Sample Line Groups?**
   - a) Las sample lines se crean automáticamente
   - b) Las section views se actualizan inmediatamente cuando cambia el diseño
   - c) El software calcula volúmenes automáticamente
   - d) Los estilos se aplican automáticamente

**Respuestas:** 1-b, 2-b, 3-b, 4-c, 5-b

---

## Recursos Adicionales

**Autodesk Documentation:**
- [Section View Bands User Guide](https://help.autodesk.com/view/CIV3D/2026/ENU/?guid=GUID-SectionBands)
- [Projecting Objects to Section Views](https://help.autodesk.com/view/CIV3D/2026/ENU/?guid=GUID-ProjectToSections)
- [Dynamic Update Behavior](https://help.autodesk.com/view/CIV3D/2026/ENU/?guid=GUID-DynamicUpdate)

**Videos:**
- "Advanced Section View Configuration" (18 min)
- "Utilities in Cross Sections" (12 min)

**Templates:**
- Company section view standards (.dwt con styles predefinidos)
- Band set templates para diferentes tipos de proyectos

---

## Resumen

En esta lección aprendiste técnicas avanzadas de secciones transversales:

✅ **Sampling criteria personalizados** para densidad variable según geometría
✅ **Offset widths variables** para puentes, intersecciones, zonas especiales
✅ **Grid layouts** para organizar múltiples section views profesionalmente
✅ **Section view bands** para información complementaria (elevations, grades)
✅ **Hatch patterns** para distinguir visualmente cut vs fill
✅ **Datum y vertical exaggeration** para presentación consistente
✅ **Proyección de pipe networks** en secciones transversales
✅ **Dynamic update** para mantener coherencia modelo-documentación

Estas herramientas transforman las secciones transversales básicas en documentación técnica completa y profesional, cumpliendo estándares de la industria y optimizando comunicación con constructores, clientes, y autoridades.

**Próxima lección:** Completaremos el módulo con tables dinámicas, labels automáticas, plan production tools, layouts, y exportación final de planos. Además, concluiremos el curso Civil 3D 2026 Básico con resumen de competencias adquiridas.
