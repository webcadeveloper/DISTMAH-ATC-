# Lección 1: Secciones Transversales y Cálculo de Volúmenes

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender el concepto de secciones transversales (cross sections) en diseño vial
✅ Crear Sample Lines a lo largo de un alineamiento
✅ Configurar Sample Line Groups con criterios de muestreo
✅ Generar Section Views para visualizar las secciones transversales
✅ Personalizar estilos de Section Views
✅ Calcular áreas de corte y relleno en cada sección
✅ Obtener volúmenes totales de movimiento de tierras
✅ Generar Total Volume Tables con reportes de cantidades

---

## Introducción

Las **secciones transversales** (cross sections) son representaciones 2D perpendiculares al eje de un alineamiento que muestran la geometría del terreno natural, el diseño propuesto, y las áreas de corte y relleno necesarias para la construcción. Son fundamentales para:

- **Cálculo de volúmenes** de movimiento de tierras (earthwork)
- **Cuantificación de materiales** para licitación
- **Documentación constructiva** detallada
- **Control de costos** del proyecto
- **Verificación del diseño** geométrico

Civil 3D genera automáticamente secciones transversales a lo largo de un alineamiento utilizando **Sample Lines** que muestrean tanto la superficie natural como las superficies de diseño (corridors o grading). Las **Section Views** despliegan estas secciones en formato estándar para planos de construcción.

En proyectos de carreteras, urbanizaciones, canales, y cualquier infraestructura lineal, las secciones transversales son requisito obligatorio para documentación técnica y cálculos de presupuesto.

![Ejemplo de sección transversal de carretera](../imagenes/seccion-transversal-ejemplo.png)

---

## 1. Conceptos Fundamentales de Secciones Transversales

### 1.1 ¿Qué son las Sample Lines?

Las **Sample Lines** son líneas perpendiculares al alineamiento que definen dónde se tomarán las secciones transversales. Civil 3D utiliza estas líneas para:

- **Muestrear superficies** (terreno natural, diseño propuesto)
- **Capturar geometría** de corridors, feature lines, y pipe networks
- **Definir el ancho** de la sección (offsets izquierdo y derecho)
- **Establecer estaciones** donde se generarán las secciones

**Características de Sample Lines:**
- Son objetos dinámicos de Civil 3D (no simples líneas de AutoCAD)
- Se actualizan automáticamente si el alineamiento cambia
- Pueden colocarse manualmente o automáticamente
- Están organizadas en **Sample Line Groups**

### 1.2 Sample Line Groups

Un **Sample Line Group** es un conjunto de sample lines organizadas con configuración común:

- **Alignment asociado** - Alineamiento al que pertenecen
- **Surfaces a muestrear** - Terreno natural, diseño, etc.
- **Criteria de muestreo** - Intervalos, estaciones específicas
- **Offset widths** - Anchos izquierdo/derecho

Cada alignment puede tener múltiples Sample Line Groups para diferentes propósitos (e.g., diseño preliminar vs. final).

### 1.3 Section Views

Las **Section Views** son representaciones gráficas 2D de las secciones transversales que incluyen:

- **Terreno natural** (existing ground surface)
- **Diseño propuesto** (corridor surfaces, grading)
- **Áreas de corte** (cut) - Material a excavar
- **Áreas de relleno** (fill) - Material a agregar
- **Anotaciones** - Elevaciones, pendientes, áreas
- **Grid de referencia** - Datum y offset

![Section View components](../imagenes/section-view-componentes.png)

---

## 2. Crear Sample Lines

### 2.1 Requisitos Previos

Antes de crear sample lines necesitas:

1. **Alignment** - Alineamiento horizontal definido
2. **Surfaces** - Al menos superficie de terreno natural
3. **Corridor o Grading** (opcional) - Diseño propuesto a documentar

### 2.2 Proceso: Crear Sample Line Group

**Ribbon:** `Home tab > Profile & Section Views panel > Sample Lines`

1. **Seleccionar alignment** al que agregar sample lines
2. Civil 3D abre cuadro de diálogo **Create Sample Line Group**
3. Configurar:
   - **Name:** Nombre descriptivo (e.g., "Main Road - Final Design")
   - **Sample line style:** Estilo visual de las líneas
   - **Sample line label style:** Etiquetas de estación
4. Click **OK**

### 2.3 Definir Sample Lines (Métodos)

Civil 3D ofrece varios métodos para colocar sample lines:

#### Método 1: By Range of Stations (Automático)

Genera sample lines uniformemente espaciadas:

1. Click **By range of stations** en toolbar
2. Especificar:
   - **Start station:** Estación inicial (e.g., 0+000)
   - **End station:** Estación final (e.g., 1+500)
   - **Left/Right offset:** Ancho de sección (e.g., 30m cada lado)
   - **Increment:** Intervalo entre secciones (e.g., cada 20m)
3. Click **OK**

**Resultado:** Sample lines cada 20m desde estación 0+000 hasta 1+500, con ancho de 60m total (30m cada lado).

#### Método 2: At a Station (Manual)

Coloca sample line en estación específica:

1. Click **At a station**
2. Ingresar estación (e.g., 0+345.50)
3. Definir left/right offset
4. Repetir para cada estación deseada

**Uso típico:** Estaciones críticas como puentes, intersecciones, cambios de sección típica.

#### Método 3: From Corridor Stations (Automático)

Genera sample lines en estaciones clave del corridor:

1. Click **From corridor stations**
2. Seleccionar corridor
3. Civil 3D crea sample lines en:
   - Inicio/fin de corridor
   - Cambios de assembly
   - Puntos de curvatura
   - Transiciones de peralte

**Ventaja:** Captura puntos críticos del diseño automáticamente.

#### Método 4: Pick Points on Screen (Interactivo)

Dibuja sample lines manualmente:

1. Click **Pick points on screen**
2. Click en dos puntos para definir línea transversal
3. Civil 3D proyecta la línea perpendicular al alignment más cercano

**Uso:** Geometrías irregulares o situaciones especiales.

![Métodos de creación de sample lines](../imagenes/sample-lines-metodos.png)

### 2.4 Configurar Superficies a Muestrear

Después de crear sample lines, define qué superficies muestrear:

1. Click derecho en **Sample Line Group** (Toolspace > Prospector)
2. **Properties**
3. Pestaña **Sections**
4. Click **Add** para agregar superficie:
   - **Surface:** Seleccionar superficie (EG, Corridor Top)
   - **Sample:** Activado
   - **Update mode:** Automatic (actualización dinámica)
5. Repetir para cada superficie
6. Click **OK**

**Superficies típicas:**
- **EG (Existing Ground)** - Terreno natural
- **Corridor_Top** - Superficie superior del corridor (pavimento)
- **Corridor_Datum** - Superficie de subrasante

---

## 3. Generar Section Views

### 3.1 Crear Section Views

Una vez configuradas las sample lines y superficies:

**Ribbon:** `Home tab > Profile & Section Views panel > Section Views > Create Multiple Views`

1. Seleccionar **Sample Line Group**
2. Civil 3D abre **Create Multiple Section Views**
3. **General tab:**
   - **Section view style:** Estilo de vista (Road Section, Major Grading)
   - **Select stations:** All, Range, o específicas
4. **Offset Range tab:**
   - **Automatic:** Ajusta ancho automáticamente
   - **User Specified:** Define offset min/max manualmente
5. **Elevation Range tab:**
   - **Automatic:** Calcula elevaciones automáticamente
   - **User Specified:** Rango de elevación fijo
6. **Section Placement tab:**
   - **Production:** Genera grid layout para planos
   - **Draft:** Vista individual para revisión
7. Click **Create Section Views**

### 3.2 Placement: Production Mode

El modo **Production** genera múltiples section views organizadas en grid:

- **Template drop-down list:** Configuración de grid (rows x columns)
- **Spacing:** Espacio entre vistas
- **Along alignment:** Coloca a lo largo del alignment
- **In rows:** Organiza en filas

**Ejemplo típico:** 5 secciones por hoja, 2 filas x 3 columnas.

Click en drawing para colocar el grid. Civil 3D genera todas las section views automáticamente.

![Section Views en modo Production](../imagenes/section-views-production.png)

### 3.3 Personalizar Estilos de Section Views

Los **Section View Styles** controlan la apariencia:

**Toolspace > Settings tab > Section View > Section View Styles**

**Elementos configurables:**

**Graph tab:**
- Grid (horizontal/vertical lines)
- Title y anotaciones
- Vertical scale (exageración vertical)

**Horizontal Axes tab:**
- Datum elevation (elevación de referencia)
- Major/minor increments
- Labels de offset

**Vertical Axes tab:**
- Elevation range
- Major/minor increments
- Labels de elevación

**Display tab:**
- Visibilidad de grid, axes, centerline
- Colors y line types

**Ejemplo: Crear estilo personalizado**

1. Duplicar estilo existente: Click derecho > **Copy**
2. Renombrar: "Company Road Section"
3. **Graph tab:**
   - **Vertical scale:** 5 (exageración 5:1 para resaltar topografía)
   - **Grid vertical spacing:** 5m
4. **Display tab:**
   - **Grid lines:** Gray, hidden
   - **Centerline:** Red, continuous
5. **Apply** y **OK**

---

## 4. Cálculo de Volúmenes de Movimiento de Tierras

### 4.1 Compute Materials

Para calcular volúmenes de corte/relleno:

**Ribbon:** `Analyze tab > Volumes and Materials panel > Compute Materials`

1. Seleccionar **Sample Line Group**
2. Civil 3D abre **Compute Materials** dialog
3. **Quantity Takeoff Criteria:** Define método de cálculo
   - Seleccionar criteria predefinido o crear nuevo
4. Click **OK**

### 4.2 Quantity Takeoff Criteria

Los **Criteria** definen cómo calcular volúmenes:

**Material List:**
- **Name:** Nombre del material (e.g., "Cut", "Fill", "Topsoil")
- **Condition:** Condición lógica (e.g., EG above Datum = Cut)
- **Surface 1:** Superficie superior (e.g., Corridor_Top)
- **Surface 2:** Superficie inferior (e.g., EG)

**Fórmulas de cálculo:**

- **Cut (Corte):** Área donde EG está ARRIBA del diseño
  - Material a excavar
  - Volumen = Área × distancia entre secciones

- **Fill (Relleno):** Área donde EG está DEBAJO del diseño
  - Material a agregar
  - Volumen = Área × distancia entre secciones

**Métodos de cálculo de volumen entre secciones:**

1. **Average End Area** (más común)
   - V = (A1 + A2) / 2 × L
   - Promedio de áreas de dos secciones consecutivas

2. **Prismoidal Formula** (más preciso)
   - V = (A1 + 4Am + A2) / 6 × L
   - Considera sección media

![Cálculo de volúmenes por Average End Area](../imagenes/volumen-average-end-area.png)

### 4.3 Ver Resultados de Volúmenes

Después de **Compute Materials**:

**Toolspace > Prospector > Alignments > Sample Line Groups > [tu grupo]**

- Click derecho > **Properties**
- Pestaña **Sections** muestra volúmenes calculados:
  - **Cut** (excavación)
  - **Fill** (relleno)
  - **Net** (neto = fill - cut)
  - **Cumulative** (acumulado)

**Interpretación:**
- **Net positivo:** Más relleno que corte (falta material)
- **Net negativo:** Más corte que relleno (sobra material)
- **Net cero:** Proyecto balanceado (ideal para minimizar acarreos)

---

## 5. Total Volume Tables

### 5.1 Crear Tabla de Volúmenes Totales

Para documentar volúmenes en el plano:

**Ribbon:** `Annotate tab > Labels & Tables panel > Add Tables > Add Total Volume Table`

1. Seleccionar **Sample Line Group**
2. Seleccionar **Table Style:** Total Volume Table (standard)
3. Click en drawing para colocar tabla

Civil 3D genera tabla dinámica con:
- Volumen total de corte
- Volumen total de relleno
- Volumen neto
- Factor de ajuste (shrinkage/swell)

### 5.2 Tabla de Volúmenes por Estación

Para tabla detallada por sección:

**Add Tables > Add Material Volume Table**

Muestra volúmenes en cada estación:

| Station | Cut (m³) | Fill (m³) | Net (m³) | Cumulative Net (m³) |
|---------|----------|-----------|----------|---------------------|
| 0+000   | 125.5    | 0.0       | -125.5   | -125.5              |
| 0+020   | 243.8    | 12.3      | -231.5   | -357.0              |
| 0+040   | 189.2    | 78.9      | -110.3   | -467.3              |

**Cumulative Net:** Volumen acumulado (útil para diagramas de masas)

![Tabla de volúmenes totales](../imagenes/total-volume-table.png)

### 5.3 Factores de Ajuste

Los materiales cambian de volumen al excavarse o compactarse:

**Shrinkage (contracción):** Material se compacta al rellenarse
- Factor típico: 0.90 (material ocupa 90% del volumen original)

**Swell (expansión):** Material aumenta volumen al excavarse
- Factor típico: 1.25 (material excavado ocupa 125% del volumen in-situ)

**Configurar en Quantity Takeoff Criteria:**
- **Cut Factor:** 1.25 (swell)
- **Fill Factor:** 0.90 (shrinkage)

**Resultado:** Volúmenes ajustados para cálculos reales de transporte y presupuesto.

---

## Ejercicio Práctico 1: Secciones y Volúmenes de Carretera

**Objetivo:** Crear sample lines, section views, y calcular volúmenes para proyecto de carretera.

**Archivo:** `Road-Design.dwg` (proyecto con superficie EG y corridor creado en módulos anteriores)

**Instrucciones:**

1. **Crear Sample Line Group:**
   - Alignment: "Main Road CL"
   - Name: "Final Design Sections"
   - Sample line style: "Road Section - Major"

2. **Generar Sample Lines by Range:**
   - Start station: 0+000
   - End station: 1+200
   - Increment: 20m (sección cada 20 metros)
   - Left offset: 40m
   - Right offset: 40m

3. **Agregar Superficies a Muestrear:**
   - Surface 1: "EG" (Existing Ground)
   - Surface 2: "Corridor_Top" (superficie del corridor)
   - Update mode: Automatic

4. **Crear Section Views (Production Mode):**
   - Style: "Road Section"
   - Station range: All
   - Layout: 2 rows × 3 columns
   - Spacing: 50mm × 50mm
   - Colocar grid en layout

5. **Compute Materials:**
   - Select Sample Line Group: "Final Design Sections"
   - Quantity Takeoff Criteria: "Earthworks"
   - Surfaces:
     - EG (terreno natural)
     - Corridor_Top (diseño)
   - Compute

6. **Analizar Resultados:**
   - Ver volúmenes en Properties del Sample Line Group
   - Total Cut volume: _______m³
   - Total Fill volume: _______m³
   - Net volume: _______m³

7. **Crear Total Volume Table:**
   - Add Total Volume Table
   - Colocar en layout junto a las secciones

**Resultado esperado:**
- 61 sample lines (cada 20m en 1200m)
- Grid de section views organizadas profesionalmente
- Cálculo preciso de volúmenes de movimiento de tierras
- Tabla de volúmenes totales

---

## Evaluación

Responde las siguientes preguntas:

1. **¿Cuál es la diferencia entre Sample Lines y Section Views?**
   - a) Son lo mismo, solo diferente nomenclatura
   - b) Sample Lines definen dónde muestrear; Section Views muestran las secciones gráficamente
   - c) Sample Lines son 2D; Section Views son 3D
   - d) No hay diferencia funcional

2. **¿Qué método de Sample Lines usarías para capturar automáticamente puntos críticos del diseño?**
   - a) By range of stations
   - b) At a station
   - c) From corridor stations
   - d) Pick points on screen

3. **En cálculo de volúmenes, ¿qué significa "Net Volume"?**
   - a) Volumen total de corte
   - b) Volumen total de relleno
   - c) Diferencia entre fill y cut (relleno - corte)
   - d) Volumen acumulado

4. **¿Qué es el "Shrinkage Factor" en cálculo de volúmenes?**
   - a) Error de medición en las secciones
   - b) Reducción de volumen al compactar material de relleno
   - c) Pérdida de material durante transporte
   - d) Ajuste por humedad del suelo

5. **¿Cuál es la ventaja de usar "Production Mode" para Section Views?**
   - a) Mayor precisión en cálculos
   - b) Organiza múltiples secciones en grid para planos
   - c) Permite edición individual de secciones
   - d) Reduce tamaño del archivo

**Respuestas:** 1-b, 2-c, 3-c, 4-b, 5-b

---

## Recursos Adicionales

**Documentación de Autodesk:**
- [Sample Lines User Guide (Civil 3D 2026)](https://help.autodesk.com/view/CIV3D/2026/ENU/?guid=GUID-SampleLines)
- [Section Views Documentation](https://help.autodesk.com/view/CIV3D/2026/ENU/?guid=GUID-SectionViews)
- [Compute Materials and Quantities](https://help.autodesk.com/view/CIV3D/2026/ENU/?guid=GUID-ComputeMaterials)

**Videos de Autodesk:**
- "Creating Sample Lines and Section Views" (15 min)
- "Earthwork Volume Calculations in Civil 3D" (20 min)

**Artículos técnicos:**
- "Average End Area vs Prismoidal Formula" - Comparación de métodos
- "Earthwork Balancing Strategies" - Optimización de corte/relleno

---

## Resumen

En esta lección aprendiste:

✅ **Sample Lines** son líneas perpendiculares que definen dónde muestrear el diseño
✅ **Sample Line Groups** organizan conjuntos de sample lines con configuración común
✅ **Section Views** son representaciones gráficas 2D de las secciones transversales
✅ **Compute Materials** calcula volúmenes de corte y relleno entre superficies
✅ **Volume Tables** documentan cantidades de movimiento de tierras
✅ Métodos de cálculo: Average End Area vs Prismoidal Formula
✅ Factores de ajuste: Shrinkage (compactación) y Swell (expansión)

Las secciones transversales son fundamentales para cuantificar obra, presupuestar, y documentar proyectos de infraestructura lineal. Civil 3D automatiza la generación y cálculo, ahorrando tiempo y reduciendo errores.

**Próxima lección:** Profundizaremos en configuración avanzada de Sample Lines, Section View Bands, proyección de utilities, y actualización dinámica de secciones.
