# Lección 1: Alineamientos Horizontales

**Duración:** 60 minutos
**Módulo:** 3 - Alineamientos y Perfiles
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué es un alineamiento horizontal y su función en diseño vial
✅ Identificar los tipos de alineamientos (centerline, offset, curb return)
✅ Crear alignments desde polylines existentes
✅ Diseñar alignments con layout tools (tangent-curve-spiral)
✅ Configurar propiedades de alineamiento (stations, design speed)
✅ Editar geometría de alineamientos con Alignment Editor
✅ Aplicar alignment styles y etiquetas profesionales
✅ Generar reportes de entidades del alineamiento

---

## Introducción

Un **alineamiento horizontal** (horizontal alignment) es el eje geométrico que define la trayectoria de una carretera, calle o vía en el plano horizontal (vista en planta). Es el elemento fundamental del diseño vial, sobre el cual se construyen todos los demás componentes: perfiles longitudinales, secciones transversales, ensamblajes de pavimento, y redes de drenaje.

En Civil 3D, un alignment no es simplemente una polilínea, sino un **objeto inteligente** que:
- Almacena datos de diseño (velocidad, estaciones, geometría)
- Calcula automáticamente longitudes, radios, deltas
- Se actualiza dinámicamente cuando se edita
- Genera perfiles longitudinales asociados
- Sirve como referencia para corridors y pipe networks

**Aplicaciones profesionales:**
- Carreteras y autopistas
- Calles urbanas y avenidas
- Pistas de aeropuertos
- Líneas ferroviarias
- Canales de drenaje
- Trazado de utilities (tuberías, ductos)

![Alineamiento horizontal en planta](../imagenes/leccion-1-alignment-overview.png)

---

## 1. ¿Qué es un Alineamiento?

### 1.1 Definición Técnica

Un alineamiento horizontal es una sucesión de **elementos geométricos** conectados:

1. **Tangentes** (rectas)
2. **Curvas circulares** (arcos de circunferencia)
3. **Espirales de transición** (clothoids, curvas de radio variable)

Estos elementos se conectan de forma continua y suave para crear una trayectoria que cumpla con criterios de diseño geométrico (normas AASHTO, SCT, etc.).

### 1.2 Componentes de un Alignment

**Estacionamiento (Stationing):**
- Sistema de referencia lineal a lo largo del alineamiento
- Inicia en 0+000 (o valor personalizado)
- Se mide en metros o pies
- Ejemplo: estación 2+340.50 = 2340.50 metros desde el inicio

**Elementos geométricos:**
- **PI** (Point of Intersection) - Punto de intersección de tangentes
- **PC** (Point of Curvature) - Inicio de curva circular
- **PT** (Point of Tangency) - Final de curva circular
- **Spiral In/Out** - Espirales de entrada/salida

**Propiedades de diseño:**
- Velocidad de diseño (design speed)
- Radio mínimo permitido
- Longitud total
- Design criteria file (normas aplicadas)

![Componentes de alignment](../imagenes/leccion-1-alignment-components.png)

---

## 2. Tipos de Alineamientos

### 2.1 Centerline Alignment
- Eje central de la carretera o calle
- Referencia principal para diseño
- Genera el profile longitudinal
- Base para corridors y cross sections

**Uso típico:** Eje de carretera, calle principal, canal.

### 2.2 Offset Alignment
- Alineamiento paralelo a un centerline existente
- Distancia fija (offset) lateral
- Útil para bordillos, aceras, carriles adicionales
- Se actualiza automáticamente si el centerline cambia

**Uso típico:** Curb alignment, edge of pavement, carril de servicio.

### 2.3 Curb Return Alignment
- Alineamiento de retorno en intersecciones
- Radio de giro para vehículos
- Típicamente curva simple o espiral-curva-espiral

**Uso típico:** Esquinas de calles urbanas, accesos a predios.

### 2.4 Rail Alignment
- Alineamientos ferroviarios
- Criterios más restrictivos (radios grandes, pendientes suaves)
- Espirales obligatorias para transición

### 2.5 Miscellaneous Alignments
- Pipe centerlines (tuberías)
- Utilities
- Límites de derecho de vía (right-of-way)

![Tipos de alignments](../imagenes/leccion-1-alignment-types.png)

---

## 3. Crear Alignment desde Polyline Existente

Método más rápido cuando ya tienes una polilínea trazada en AutoCAD.

### 3.1 Requisitos de la Polyline

**La polyline debe ser:**
- 2D Polyline (comando `PLINE`)
- Continua (sin gaps)
- Puede tener arcos y líneas rectas
- Preferiblemente sin vértices redundantes

**NO funciona con:**
- 3D Polylines
- Splines
- Múltiples polylines separadas

### 3.2 Procedimiento Paso a Paso

**Paso 1:** Selecciona la polyline existente

**Paso 2:** Ribbon > Home tab > Create Design panel > **Alignment dropdown** > Create Alignment from Objects

![Create from Objects](../imagenes/leccion-1-create-from-objects.png)

**Paso 3:** Cuadro de diálogo "Create Alignment from Objects"

**General tab:**
- **Name:** Calle Principal (nombre descriptivo)
- **Alignment type:** Centerline
- **Alignment style:** Basic (o selecciona style personalizado)
- **Alignment layer:** C-ROAD-CNTR (según tu estándar)

**Design Criteria tab:**
- **Starting design speed:** 60 km/h (según diseño)
- **Use criteria-based design:** Activa si quieres validación automática
- **Use design criteria file:** AASHTO 2011.xml

**Paso 4:** Click **OK**

**Resultado:**
- Civil 3D convierte la polyline en un Alignment object
- La polyline original puede eliminarse o congelarse
- El alignment aparece en Toolspace > Prospector > Alignments

![Alignment en Prospector](../imagenes/leccion-1-alignment-prospector.png)

### 3.3 Ventajas y Limitaciones

**Ventajas:**
- Rápido y directo
- Útil para importar diseños de AutoCAD
- Preserva la geometría original

**Limitaciones:**
- No optimiza la geometría automáticamente
- Puede generar warnings si no cumple criterios de diseño
- Arcos de polyline se convierten a curvas circulares simples (sin espirales)

---

## 4. Crear Alignment con Layout Tools (Desde Cero)

Método profesional para diseño completo con control total de geometría.

### 4.1 Iniciar Alignment Layout

**Paso 1:** Ribbon > Home tab > Create Design panel > **Alignment dropdown** > Alignment Creation Tools

**Paso 2:** Cuadro de diálogo "Create Alignment - Layout"

**General tab:**
- **Name:** Carretera Rural CR-01
- **Type:** Centerline
- **Site:** <None> (o selecciona site específico)
- **Alignment style:** Design Style (con visualización de tangentes y curvas)
- **Alignment label set:** Major and Minor Stations

**Design Criteria tab:**
- **Starting design speed:** 80 km/h
- **Use criteria-based design:** ✓ Activado
- **Design criteria file:** AASHTO 2011 Metric.xml

**Paso 3:** Click **OK**

Se abre el **Alignment Layout Tools toolbar**.

![Alignment Layout Tools](../imagenes/leccion-1-layout-tools.png)

### 4.2 Alignment Layout Tools - Toolbar

**Herramientas de trazado:**

1. **Tangent-Tangent (No Curves)** - Solo líneas rectas
2. **Tangent-Tangent (With Curves)** - Tangentes con curvas automáticas
3. **Curve and Spiral Settings** - Configuración de curvas y espirales
4. **Fixed Line (Two Points)** - Línea fija entre dos puntos
5. **Floating Curve (Three Points)** - Curva por tres puntos
6. **Free Spiral-Curve-Spiral** - Espiral-Curva-Espiral libre
7. **Delete Entity** - Eliminar elemento

**Herramientas de edición:**
- **Alignment Grid View** - Vista tabular de geometría
- **Sub-entity Editor** - Editor de componentes individuales
- **Pick Sub-entity** - Seleccionar elemento para editar
- **Alignment Properties** - Propiedades generales

### 4.3 Diseñar con Tangent-Tangent (With Curves)

Método más común para diseño vial.

**Paso 1:** Click en **Tangent-Tangent (With Curves)**

**Paso 2:** En línea de comandos:
```
Specify start point: (click punto inicial)
Specify next point: (click segundo punto - define primera tangente)
Specify next point: (click tercer punto - crea PI y curva automática)
Specify next point: (continúa agregando PIs)
[Press Enter para terminar]
```

**Comportamiento:**
- Civil 3D inserta automáticamente curvas circulares en cada PI
- El radio de curva se calcula según design speed y criteria file
- Si el radio es insuficiente, muestra **WARNING** visual (curva roja)

**Paso 3:** Revisa warnings

Si aparecen curvas en rojo:
- Radio menor al mínimo permitido para la velocidad de diseño
- Solución: Aumenta radio, reduce velocidad, o ajusta geometría

**Paso 4:** Click **X** en Layout Tools para finalizar

![Tangent-Tangent design](../imagenes/leccion-1-tangent-tangent.png)

### 4.4 Configurar Curve and Spiral Settings

Antes de trazar, puedes configurar parámetros de curvas:

**Click en Curve and Spiral Settings**

**Curve Settings:**
- **Curve type:** Circular
- **Radius:** 150 m (o dejar "Automatic" para calcular según velocidad)
- **Less than 180°:** (activado para curvas menores a semicircunferencia)

**Spiral Settings:**
- **Use spirals:** ✓ (recomendado para carreteras)
- **Spiral length:** Automatic (calcula según AASHTO)
- **A value:** (parámetro de espiral clothoid)

**Ejemplo para carretera 80 km/h:**
- Radius: 250 m (mínimo recomendable)
- Spiral length: 70 m (transición suave)

---

## 5. Propiedades de Alineamiento

### 5.1 Alignment Properties Dialog

**Acceso:**
1. Selecciona alignment en dibujo
2. Click derecho > **Alignment Properties**
3. O desde Toolspace: Prospector > Alignments > click derecho

**Tabs principales:**

**Information tab:**
- Name, description, object style
- Starting station (puede ser diferente de 0+000)
- Site assignment

**Station Control tab:**
- Reference point (punto de referencia para estacionamiento)
- Station equations (ecuaciones para ajustar kilometraje)
- Ejemplo: Empatar con estacionamiento de proyecto existente

**Design Criteria tab:**
- Design speed (puede variar por tramos)
- Superelevation rate
- Use design check sets

**Profiles tab:**
- Lista de perfiles asociados al alignment
- Surface profiles y design profiles

**Profile Views tab:**
- Vistas de perfil creadas para este alignment

![Alignment Properties](../imagenes/leccion-1-alignment-properties.png)

### 5.2 Design Speed por Tramos

Un alignment puede tener diferentes velocidades de diseño en diferentes secciones:

**Ejemplo:**
- 0+000 a 1+500: 60 km/h (zona urbana)
- 1+500 a 5+000: 80 km/h (zona rural)
- 5+000 a 6+200: 40 km/h (zona montañosa)

**Configurar:**
Design Criteria tab > **Edit design speeds** > Tabla con rangos de estaciones

---

## 6. Edición de Alineamientos - Geometry Editor

### 6.1 Activar Alignment Editor

**Método 1:**
- Selecciona alignment
- Ribbon contextual: Alignment > Modify panel > **Geometry Editor**

**Método 2:**
- Click derecho en alignment > **Edit Alignment Geometry**

Se abre nuevamente el **Alignment Layout Tools toolbar**.

### 6.2 Edición Gráfica

**Grips dinámicos:**
- **Cuadrados azules** en PIs: Mover punto de intersección
- **Círculos azules** en PC/PT: Ajustar longitud de tangente
- **Triángulos azules** en mid-curve: Cambiar radio

**Edición en tiempo real:**
- Arrastra grips y observa cambios instantáneos
- Labels se actualizan automáticamente
- Design criteria warnings aparecen si violas normas

![Alignment Grips](../imagenes/leccion-1-alignment-grips.png)

### 6.3 Edición Tabular - Alignment Grid View

Para edición precisa con valores numéricos:

**Alignment Layout Tools > Alignment Grid View**

**Vista de tabla:**
- Lista todos los elementos (tangentes, curvas, espirales)
- Columnas: Type, Length, Radius, Start Station, End Station, etc.

**Editar valores:**
- Click en celda > Ingresa nuevo valor
- Ejemplo: Cambiar radius de 150 m a 200 m
- Geometría se actualiza instantáneamente en pantalla

**Agregar/eliminar elementos:**
- Click derecho en fila > Insert PI Before/After
- Click derecho > Delete Entity

![Grid View](../imagenes/leccion-1-grid-view.png)

### 6.4 Sub-entity Editor

Para edición detallada de un elemento individual:

**Paso 1:** Alignment Layout Tools > **Pick Sub-entity**

**Paso 2:** Click en curva o tangente específica

**Paso 3:** Se abre **Sub-entity Editor** con parámetros:

**Para curva circular:**
- Radius
- Arc length
- Chord length
- Delta angle
- Pass-through points (forzar que pase por punto específico)

**Para tangente:**
- Length
- Direction (bearing)
- Constrain to PI (fijar a punto de intersección)

**Aplicar cambios:** Click **OK** - geometría se recalcula

---

## 7. Best Fit Alignments

Crear alignment que mejor se ajuste a puntos existentes (topografía, GPS).

### 7.1 Cuándo Usar Best Fit

**Escenarios:**
- Levantamiento de eje de carretera existente
- Datos de GPS de vehículo
- Puntos COGO del centerline actual
- Reconstrucción de vía para mejoras

### 7.2 Procedimiento Best Fit

**Paso 1:** Tener puntos COGO o entidades existentes

**Paso 2:** Ribbon > Alignment dropdown > **Create Best Fit Alignment**

**Paso 3:** Selecciona entidades:
- Points (puntos COGO)
- Polyline
- Feature line
- Spline

**Paso 4:** Cuadro de diálogo "Create Best Fit Alignment"

**Regression Data tab:**
- **Fit type:** Tangent-Curve, Spiral-Curve-Spiral, etc.
- **Mid-ordinate distance:** Tolerancia de ajuste (0.50 m típico)

**Paso 5:** Click **OK**

**Resultado:**
Civil 3D calcula el alignment que minimiza la desviación a los puntos seleccionados. Muestra reporte de desviación máxima.

**Nota:** En Civil 3D 2026, esta funcionalidad se mejora con **Horizontal Regression Analysis** (ver Lección 4).

![Best Fit Alignment](../imagenes/leccion-1-best-fit.png)

---

## 8. Alignment Styles y Visualización

### 8.1 Alignment Object Styles

Controlan la apariencia del alignment en pantalla.

**Acceso:**
Toolspace > Settings > Alignment > Object Styles

**Componentes del style:**

**Design tab:**
- Tangent display (color, linetype, lineweight)
- Curve display (diferente color para identificar curvas)
- Spiral display

**Ejemplo profesional:**
- Tangentes: Línea continua verde, grosor 0.35 mm
- Curvas: Línea continua roja, grosor 0.50 mm
- Espirales: Línea punteada amarilla

**Display tab:**
- View direction: Plan, Model, Section
- Component display on/off por view

### 8.2 Alignment Label Styles

Etiquetas automáticas para alineamientos.

**Tipos de labels:**

1. **Major Station Labels** - Estaciones principales (cada 100 m)
2. **Minor Station Labels** - Estaciones menores (cada 20 m)
3. **Geometry Point Labels** - PC, PT, PI
4. **Design Speed Labels** - Velocidad de diseño en tramos
5. **Tangent Labels** - Longitud y bearing de tangentes
6. **Curve Labels** - Radio, longitud, delta de curvas

**Aplicar label set completo:**

**Paso 1:** Selecciona alignment

**Paso 2:** Ribbon contextual > Labels & Tables panel > **Add Labels** dropdown > **Add Alignment Labels**

**Paso 3:** Cuadro "Alignment Labels"

**Station Labels:**
- Type: Major Stations
- Style: Perpendicular with Line
- Increment: 100 m

**Click Add**

Repite para cada tipo de label deseado.

![Alignment Labels](../imagenes/leccion-1-alignment-labels.png)

### 8.3 Alignment Tables

Tablas dinámicas con datos de geometría.

**Tipos de tables:**
- **Line Table** - Tangentes (bearing, length)
- **Curve Table** - Curvas (radius, delta, arc length)
- **Spiral Table** - Espirales (A value, length)

**Crear table:**

Ribbon contextual > Labels & Tables > **Add Tables** > Add Curve

Civil 3D genera tabla automática con numeración de curvas y datos.

**Ventaja:** Tabla se actualiza automáticamente si editas el alignment.

---

## 9. Alignment en Toolspace Prospector

### 9.1 Navegación

**Toolspace > Prospector tab > Alignments > Centerline Alignments**

**Vista de lista:**
- Todos los alignments del drawing
- Columnas: Name, Description, Style, Length

**Preview:**
- Al pasar mouse sobre alignment, muestra preview miniatura

### 9.2 Operaciones desde Prospector

**Click derecho en alignment:**
- Edit Alignment Geometry
- Alignment Properties
- Create Profile View
- Export to LandXML
- Zoom To
- Delete

**Create Data Shortcut:**
Para proyectos colaborativos (múltiples usuarios trabajando en el mismo alignment).

---

## Ejercicio Práctico 1

**Objetivo:** Crear un alineamiento horizontal para calle urbana usando ambos métodos.

**Archivo:** `Urban-Street.dwg` (proporcionado)

### Parte A: Alignment desde Polyline

**Paso 1:** Abre `Urban-Street.dwg`

**Paso 2:** Observa la polyline roja (eje existente de calle)

**Paso 3:** Crea alignment desde esta polyline:
- Name: Calle Reforma
- Type: Centerline
- Starting design speed: 50 km/h
- Criteria file: AASHTO 2011 Metric

**Paso 4:** Aplica label set "All Labels"

**Paso 5:** Genera Curve Table

### Parte B: Alignment con Layout Tools

**Paso 6:** Zoom a la zona norte del dibujo (área vacía)

**Paso 7:** Usa Alignment Creation Tools

**Paso 8:** Diseña nuevo alignment:
- Name: Calle Hidalgo
- Starting point: Coordenada 5000, 5000
- 4 tangentes con 3 PIs (formando curvas)
- Design speed: 40 km/h
- Longitud total aproximada: 600 m

**Paso 9:** Configura:
- Curve type: Circular
- Use spirals: No (calle urbana baja velocidad)
- Radius: 60 m (típico urbano)

**Paso 10:** Etiqueta con Major Stations cada 50 m

### Entregable

Screenshot mostrando:
1. Ambos alignments visibles
2. Labels de estaciones
3. Curve table del Calle Reforma
4. Toolspace Prospector con ambos alignments listados

![Ejercicio 1 Completado](../imagenes/leccion-1-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia principal entre un alignment de Civil 3D y una polyline de AutoCAD?

**Pregunta 2:** ¿Qué método de creación de alignment usarías para importar un diseño existente de AutoCAD? ¿Y para diseñar una carretera nueva desde cero?

**Pregunta 3:** ¿Qué significa cuando una curva de tu alignment aparece en color rojo durante el diseño?

**Pregunta 4:** Nombra tres tipos de labels que puedes aplicar a un alignment.

**Pregunta 5:** ¿Cómo editarías el radio de una curva específica en un alignment ya creado?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "Alignments Overview"
- AASHTO Green Book - Chapter 3: Elements of Design

**Tutoriales:**
- Autodesk Civil 3D Alignment Tutorial (video oficial)
- Creating Alignments from Objects (Knowledge Network)

**Archivos de muestra:**
- Alignment Design Standards.dwg (styles library)
- Horizontal Alignment Examples.dwg

---

## Resumen

En esta lección aprendiste:

✅ Qué es un alineamiento horizontal y sus componentes (tangentes, curvas, PIs, estaciones)
✅ Tipos de alignments: centerline, offset, curb return
✅ Crear alignments desde polylines existentes (método rápido)
✅ Diseñar alignments con Layout Tools tangent-tangent (método profesional)
✅ Configurar propiedades: design speed, criteria file, starting station
✅ Editar geometría con grips, Grid View, y Sub-entity Editor
✅ Aplicar styles y labels para presentación profesional
✅ Generar tablas dinámicas de curvas y tangentes

**Próxima Lección:** Elementos Geométricos - Tangentes, Curvas y Espirales (profundización en diseño con criterios AASHTO)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos diseñando alignments de diferentes tipos (urbano, rural, autopista)
