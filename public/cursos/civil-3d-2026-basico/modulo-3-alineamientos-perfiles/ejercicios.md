# Ejercicios Prácticos - Módulo 3: Alineamientos y Perfiles

**Duración total:** 6 horas (1 hora por ejercicio)
**Módulo:** 3 - Alineamientos y Perfiles
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Descripción General

Este documento contiene **6 ejercicios prácticos detallados** que cubren todos los temas del Módulo 3. Cada ejercicio está diseñado para reforzar habilidades específicas de diseño de alineamientos horizontales y perfiles verticales en proyectos de infraestructura vial.

**Archivos necesarios:**
Todos los archivos DWG de ejercicios están disponibles en la carpeta del curso:
`archivos-ejercicios/modulo-3/`

**Formato de entrega:**
- Archivos DWG completados
- Screenshots según especificaciones
- Reportes generados (PDF o HTML)
- Documento de respuestas (Word o PDF)

---

## Ejercicio 1: Alineamiento Horizontal de Carretera Rural

**Duración:** 60 minutos
**Lección asociada:** Lección 1 - Alineamientos Horizontales
**Nivel de dificultad:** Básico

### Objetivos

- Crear alineamiento horizontal desde polyline existente
- Diseñar alineamiento nuevo con Alignment Layout Tools
- Aplicar estilos y etiquetas profesionales
- Generar tabla de curvas

### Archivo de trabajo

`Ejercicio-1-Alineamiento-Rural.dwg`

**Contenido del archivo:**
- Superficie topográfica "EG" (existing ground)
- Polyline roja "EJE-PROPUESTO" (diseño preliminar)
- Límites de derecho de vía (ROW)
- Coordenadas en sistema UTM Zona 16N

### Instrucciones Detalladas

#### Parte A: Alineamiento desde Polyline (30 minutos)

**Paso 1: Análisis inicial**

1. Abre `Ejercicio-1-Alineamiento-Rural.dwg`
2. Zoom Extents para ver todo el proyecto
3. Congela layer de superficie para visualizar mejor la polyline
4. Observa:
   - Longitud aproximada del eje (usa `LIST` command en polyline)
   - Número de vértices
   - ¿Tiene arcos o solo líneas rectas?

**Paso 2: Crear Alignment desde Polyline**

5. Selecciona polyline roja "EJE-PROPUESTO"
6. Ribbon > Home > Create Design > Alignment dropdown > **Create Alignment from Objects**
7. Cuadro "Create Alignment from Objects":
   - **Name:** CR-Rural-01
   - **Type:** Centerline
   - **Alignment style:** Layout
   - **Alignment layer:** C-ROAD-CNTR (crear si no existe)
8. **Design Criteria tab:**
   - Starting design speed: 60 km/h
   - Use criteria-based design: ✓
   - Design criteria file: AASHTO 2011 Metric.xml
9. Click **OK**

**Paso 3: Verificar geometría**

10. El alignment debe aparecer en pantalla
11. Toolspace > Prospector > Alignments > Centerline Alignments
12. Verifica que "CR-Rural-01" está en la lista
13. Click derecho > Properties
14. Tab **Station Control:** Verifica Starting Station = 0+000
15. Tab **Design Criteria:** Verifica velocidad = 60 km/h

**Paso 4: Revisar design criteria warnings**

16. Observa el alignment en pantalla:
    - ¿Hay segmentos en amarillo o rojo?
    - Si los hay, anota estaciones aproximadas
17. Ribbon contextual > Analyze > **Design Check Report**
18. Revisa warnings/errors
19. Anota:
    - Tipo de warning (radius, tangent length, etc.)
    - Estación del problema
    - Valor actual vs requerido

**Paso 5: Aplicar labels**

20. Selecciona alignment
21. Ribbon contextual > Labels & Tables > **Add Labels** dropdown > **Add Alignment Labels**
22. Configura labels:
    - **Type:** Major Stations
    - **Major Station Label Style:** Perpendicular with Tick
    - **Increment:** 100.00 m
    - Click **Add**
23. Repite para:
    - Minor Stations (increment 20 m)
    - Geometry Points (PC, PT, PI)
    - Curve Data (radius, length)

**Paso 6: Generar tabla de curvas**

24. Ribbon contextual > Labels & Tables > **Add Tables** > **Add Curve**
25. Cuadro "Alignment Curve Table":
    - **Table Style:** Curve Data
    - **Select by label style:** (todos)
26. Click para colocar tabla en área libre del drawing
27. Revisa tabla generada

#### Parte B: Alineamiento con Layout Tools (30 minutos)

**Paso 7: Nuevo alineamiento desde cero**

28. Zoom a zona norte del proyecto (área vacía)
29. Ribbon > Home > Alignment dropdown > **Alignment Creation Tools**
30. Cuadro "Create Alignment - Layout":
    - **Name:** CR-Rural-02-Alternativa
    - **Type:** Centerline
    - **Alignment style:** Design Style
    - **Design speed:** 60 km/h
    - **Use criteria-based design:** ✓
31. Click **OK**

**Paso 8: Configurar Curve and Spiral Settings**

32. Alignment Layout Tools toolbar > **Curve and Spiral Settings**
33. **Curve Settings:**
    - **Curve radius:** 200 m (recomendable para 60 km/h)
    - **Less than 180°:** ✓
34. **Spiral Settings:**
    - **Use spirals:** ✓ (carretera rural moderna)
    - **Spiral length:** Automatic
35. Click **OK**

**Paso 9: Diseñar geometría**

36. Layout Tools > **Tangent-Tangent (With Curves)**
37. Diseña alignment con 5 PIs (4 curvas):
    - Punto inicial cerca de coordenada (500500, 4500000)
    - PI 1: Aproximadamente 300 m adelante, desviado 30° a la izquierda
    - PI 2: 400 m adelante, desviado 25° a la derecha
    - PI 3: 350 m adelante, desviado 20° a la izquierda
    - PI 4: 400 m adelante, desviado 15° a la derecha
    - Punto final
38. Longitud total aproximada: 1,500-1,800 m

**Paso 10: Verificar y ajustar**

39. Revisa colores de elementos:
    - Verde: OK
    - Amarillo: Warning (revisar)
    - Rojo: Error (corregir)
40. Si hay errores:
    - Selecciona alignment
    - Ribbon > Modify > **Geometry Editor**
    - Usa grips para ajustar radios o posición de PIs
    - Objetivo: Todo verde o amarillo aceptable

**Paso 11: Documentar**

41. Aplica label set completo (stations, geometry points, curves)
42. Genera tabla de curvas y spirals
43. Genera tabla de tangentes (Ribbon > Add Tables > Add Line)

### Entregables

**Archivo DWG:**
- `Ejercicio-1-APELLIDO-Completado.dwg`

**Screenshots:**
1. Vista completa de ambos alignments con labels
2. Tabla de curvas del CR-Rural-01
3. Design Check Report mostrando warnings (si hay)
4. Alignment Grid View del CR-Rural-02-Alternativa

**Documento de respuestas:**

Responde en documento Word/PDF:

1. **¿Cuál es la longitud total del alignment CR-Rural-01?** _______ m
2. **¿Cuántas curvas tiene el CR-Rural-01?** _______
3. **¿Qué warnings de design criteria encontraste en CR-Rural-01?** _______
4. **En CR-Rural-02-Alternativa, ¿cuál es el radio de la curva más cerrada?** _______ m
5. **¿Cumple ese radio con AASHTO para 60 km/h?** (Sí/No) _______
6. **¿Qué longitud de espiral se aplicó en la Curva 1 de CR-Rural-02?** _______ m
7. **Compara ambos alignments: ¿Cuál tiene mejor geometría según AASHTO y por qué?**

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Alignment desde polyline creado correctamente | 20 | Nombre, tipo, design speed apropiados |
| Labels aplicados completamente | 15 | Stations, geometry points, curves |
| Tabla de curvas generada | 10 | Formato correcto, datos legibles |
| Alignment con Layout Tools diseñado | 25 | Geometría coherente, 4 curvas con espirales |
| Design criteria cumplidos | 15 | Sin errores críticos (rojos) |
| Documentación completa | 15 | Screenshots y respuestas correctas |

**Total:** 100 puntos

---

## Ejercicio 2: Elementos Geométricos y Criterios AASHTO

**Duración:** 60 minutos
**Lección asociada:** Lección 2 - Elementos Geométricos
**Nivel de dificultad:** Intermedio

### Objetivos

- Diseñar curvas circulares con radios según AASHTO
- Implementar espirales de transición (spiral-curve-spiral)
- Calcular K-values y longitudes de espirales
- Validar geometría contra normas

### Archivo de trabajo

`Ejercicio-2-Elementos-Geometricos.dwg`

**Contenido:**
- Superficie "EG" terreno lomerío
- Punto inicial de alignment marcado
- Reference lines para guía de diseño

### Instrucciones Detalladas

#### Parte A: Diseño con Criterios AASHTO (40 minutos)

**Paso 1: Configuración inicial**

1. Abre `Ejercicio-2-Elementos-Geometricos.dwg`
2. Verifica existencia de superficie "EG"
3. Crea nuevo alignment:
   - Name: Autopista AP-80
   - Type: Centerline
   - Design speed: 80 km/h
   - Criteria file: AASHTO 2011 Metric.xml

**Paso 2: Calcular radios mínimos**

Antes de diseñar, calcula en papel:

**Para 80 km/h, superelevación máxima 8%:**

4. Consulta tabla AASHTO (Lección 2):
   - Radio mínimo absoluto: _______ m
   - Radio recomendable: _______ m

5. Usarás en tu diseño: Radio mínimo de **250 m** (entre absoluto y recomendable)

**Paso 3: Configurar espirales**

6. Calcula longitud mínima de espiral:
   - Fórmula (Lección 2): **Ls = V³ / (47.2 × R)**
   - Ls = 80³ / (47.2 × 250) = _______ m (redondea a múltiplo de 10)

7. Curve and Spiral Settings:
   - Curve radius: 250 m (mínimo), 300 m (recomendable)
   - Use spirals: ✓
   - Spiral length: (usa el valor calculado arriba)

**Paso 4: Diseñar alignment**

8. Alignment Layout Tools > Tangent-Tangent (With Curves)
9. Diseña con estos parámetros:
   - Punto inicial: Marca roja en drawing
   - PI 1: Aproximadamente estación 0+600, curva a la derecha
   - PI 2: Aproximadamente estación 1+400, curva a la izquierda (reversa controlada)
   - PI 3: Aproximadamente estación 2+200, curva a la derecha
   - Punto final: Aproximadamente estación 3+000

**Paso 5: Verificar tangentes intermedias**

10. Alignment Grid View
11. Para cada tangente entre curvas, verifica:
    - Longitud ≥ 80 m (mínimo para 80 km/h según AASHTO)
12. Si alguna tangente es < 80 m:
    - Ajusta posición de PIs con grips
    - O rediseña geometría

**Paso 6: Editar curva manualmente**

13. Geometry Editor activo
14. Pick Sub-entity > Selecciona Curva 2
15. Sub-entity Editor:
    - Cambia Radius de 250 m a 300 m
    - Observa cómo se recalcula geometría
16. Apply

**Paso 7: Revisar espirales**

17. En Grid View, verifica para cada curva:
    - Spiral In Length: _______ m
    - Curve Length: _______ m
    - Spiral Out Length: _______ m
18. ¿Son simétricas las espirales (In = Out)? _______

#### Parte B: Análisis y Reportes (20 minutos)

**Paso 8: Design Check Report**

19. Genera Design Check Report
20. Identifica:
    - Número de warnings: _______
    - Número de errores críticos: _______
21. Para cada warning/error, anota:
    - Station
    - Tipo de problema
    - Valor actual vs requerido

**Paso 9: Generar reportes completos**

22. Ribbon > Labels & Tables > Add Tables:
    - Add Line (tabla de tangentes)
    - Add Curve (tabla de curvas)
    - Add Spiral (tabla de espirales)
23. Coloca tablas organizadamente en drawing

**Paso 10: Exportar a LandXML**

24. Ribbon > Output > Export > LandXML
25. Cuadro "Export to LandXML":
    - ✓ Alignments (selecciona "Autopista AP-80")
    - ✓ Design Criteria Data
26. Guarda como: `Autopista-AP-80.xml`
27. Abre XML en Notepad y verifica que contiene:
    - Alignment name
    - Spiral elements
    - Design speed

**Paso 11: Análisis comparativo**

28. Crea tabla comparativa en Excel:

| Curva | Radio (m) | Ls In (m) | Curve Length (m) | Ls Out (m) | Cumple AASHTO |
|-------|-----------|-----------|------------------|------------|---------------|
| 1     |           |           |                  |            |               |
| 2     |           |           |                  |            |               |
| 3     |           |           |                  |            |               |

29. Completa con datos de tu diseño

### Entregables

**Archivos:**
- `Ejercicio-2-APELLIDO-Completado.dwg`
- `Autopista-AP-80.xml` (LandXML export)
- `Analisis-Curvas.xlsx` (tabla comparativa)

**Screenshots:**
1. Alignment completo con todas las labels
2. Tablas de Line, Curve, y Spiral
3. Design Check Report
4. Grid View mostrando todas las entidades

**Documento de respuestas:**

1. **Radio mínimo absoluto AASHTO para 80 km/h:** _______ m
2. **Longitud mínima de espiral calculada:** _______ m
3. **¿Todas las tangentes cumplen longitud mínima?** (Sí/No) _______
4. **Curva con radio mayor:** Curva # _____, Radio = _______ m
5. **¿El diseño final cumple AASHTO (sin errores críticos)?** (Sí/No) _______
6. **Longitud total del alignment:** _______ m
7. **Si tuvieras que mejorar una curva, ¿cuál sería y cómo?**

### Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Cálculo correcto de radios y espirales AASHTO | 20 |
| Alignment diseñado con geometría apropiada | 25 |
| Espirales aplicadas correctamente | 15 |
| Tangentes cumplen longitud mínima | 10 |
| Reportes completos (Line, Curve, Spiral tables) | 15 |
| Design Check sin errores críticos | 10 |
| Documentación y análisis | 5 |

**Total:** 100 puntos

---

## Ejercicio 3: Aplicación de Superelevation

**Duración:** 60 minutos
**Lección asociada:** Lección 3 - Superelevation
**Nivel de dificultad:** Intermedio-Avanzado

### Objetivos

- Ejecutar Superelevation Wizard completo
- Configurar tablas de peralte AASHTO
- Editar tasas de superelevación con Tabular Editor
- Generar reportes de superelevation

### Archivo de trabajo

`Ejercicio-3-Superelevation.dwg`

**Contenido:**
- Alignment "Carretera CN-70" (70 km/h design speed)
- 4 curvas horizontales con espirales
- Superficie existente

### Instrucciones Detalladas

#### Parte A: Superelevation Wizard (30 minutos)

**Paso 1: Verificar alignment**

1. Abre `Ejercicio-3-Superelevation.dwg`
2. Toolspace > Prospector > Alignments > "Carretera CN-70"
3. Alignment Properties:
   - Verifica Design Speed: 70 km/h
   - Longitud total: _______ m
   - Número de curvas: _______

**Paso 2: Ejecutar Superelevation Wizard**

4. Selecciona alignment "Carretera CN-70"
5. Ribbon > Superelevation dropdown > **Calculate/Edit Superelevation**

**Wizard Step 1 - Roadway Type:**
6. Configurar:
   - Roadway Type: **Undivided Crowned Road**
   - Normal Crown: **2.00%** (bombeo normal)
   - Normal Lane Slope: **-2.00%**
   - Normal Shoulder Slope: **-4.00%**
7. Next >

**Wizard Step 2 - Lanes:**
8. Configurar:
   - Left Side: 1 lane, width 3.65 m
   - Right Side: 1 lane, width 3.65 m
   - Left Shoulder: 1.50 m
   - Right Shoulder: 1.50 m
9. Total width = _______ m (calcula y anota)
10. Next >

**Wizard Step 3 - Attainment:**
11. Configurar:
   - Begin Alignment Transition: **At start of spiral (TS)**
   - End Alignment Transition: **At end of spiral (SC)**
   - Razón: Transición de peralte dentro de espiral
12. Next >

**Wizard Step 4 - Transition:**
13. Configurar:
   - Transition method: **Shoulder-Shoulder**
   - Use design speed: ✓
   - Design speed: 70 km/h (auto-filled)
   - Maximum transition grade: **0.005** (1:200)
14. Next >

**Wizard Step 5 - Superelevation Rate Table:**
15. Seleccionar:
   - **AASHTO 2011 eMax 8.0%** (rural estándar)
16. Observa tabla preview:
    - Para diferentes radios, diferentes tasas
17. Finish

**Paso 3: Verificar resultados iniciales**

18. Se abre automáticamente Superelevation Tabular Editor
19. Tab **Superelevation Curves:**
20. Completa tabla:

| Curve # | Station | Radius (m) | e Rate (%) | Status |
|---------|---------|------------|------------|--------|
| 1       |         |            |            |        |
| 2       |         |            |            |        |
| 3       |         |            |            |        |
| 4       |         |            |            |        |

#### Parte B: Edición y Análisis (30 minutos)

**Paso 4: Editar tasa de peralte manualmente**

21. En Tabular Editor, tab "Superelevation Curves"
22. Localiza Curva 2
23. Columna "Override":
    - Click y cambia valor de calculado a **7.0%** (manual override)
24. Observa si aparece warning
25. Apply

**Paso 5: Revisar transiciones**

26. Tab **Transition Details**
27. Para Curva 1, identifica estaciones de:
    - NC (Normal Crown): Sta _______ (fin de bombeo normal)
    - RC (Remove Crown): Sta _______ (inicio de rotación)
    - FS (Full Super): Sta _______ (peralte total aplicado)
28. Longitud de transición = FS - NC = _______ m

**Paso 6: Análisis de datos tabulares**

29. Tab **Superelevation Data**
30. Navega a Curva 3
31. Observa cómo cambia pendiente transversal:
    - Inicio transición: -2% / -2% (bombeo normal)
    - Punto medio: ___% / ___% (transición)
    - Fin transición (FS): ___% / ___% (peralte total)

**Paso 7: Generar Superelevation Report**

32. Toolspace > Toolbox > Reports Manager
33. Alignment folder > **Superelevation Report**
34. Selecciona "Carretera CN-70"
35. Create Report
36. Guarda como HTML: `Superelevation-Report-CN-70.html`
37. Abre en navegador y revisa:
    - Curve data (radios, tasas)
    - Transition stations
    - Runoff/runout lengths

**Paso 8: Visualización (opcional si tienes tiempo)**

Si tienes assembly y corridor ya creados en el archivo:

38. Crea corridor básico:
    - Alignment: Carretera CN-70
    - Use superelevation: ✓ (from alignment)
39. Genera Section Views en estaciones:
    - Curva 1: Station FS (peralte total)
    - Tangente: Station con bombeo normal
40. Screenshot mostrando diferencia de pendiente transversal

**Paso 9: Comparación de métodos**

41. Crea tabla comparativa:

| Curva | Radio | e AASHTO | e Override | Diferencia | Justificación |
|-------|-------|----------|------------|------------|---------------|
| 1     |       |          | N/A        | N/A        | Auto          |
| 2     |       |          | 7.0%       |            | Manual        |
| 3     |       |          | N/A        | N/A        | Auto          |
| 4     |       |          | N/A        | N/A        | Auto          |

### Entregables

**Archivos:**
- `Ejercicio-3-APELLIDO-Completado.dwg`
- `Superelevation-Report-CN-70.html`
- `Analisis-Peralte.xlsx`

**Screenshots:**
1. Superelevation Tabular Editor - Tab "Superelevation Curves"
2. Superelevation Tabular Editor - Tab "Transition Details" (Curva 1)
3. Superelevation Report (página de Curve Data)
4. (Opcional) Section views mostrando peralte vs bombeo

**Documento de respuestas:**

1. **Ancho total de calzada (carriles + acotamientos):** _______ m
2. **Tasa máxima de peralte aplicada:** _______% en Curva # _______
3. **¿Alguna curva tiene solo bombeo normal (2%)? ¿Cuál y por qué?**
4. **Longitud de transición de Curva 1:** _______ m
5. **Razón del override manual en Curva 2:**
6. **¿El método de transición Shoulder-Shoulder es apropiado para esta carretera? Justifica.**

### Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Superelevation Wizard ejecutado correctamente | 25 |
| Configuración apropiada (roadway type, lanes) | 15 |
| Override manual aplicado con criterio | 10 |
| Análisis de transiciones correcto | 15 |
| Superelevation Report generado | 15 |
| Documentación y justificaciones | 20 |

**Total:** 100 puntos

---

## Ejercicio 4: Horizontal Regression Analysis

**Duración:** 60 minutos
**Lección asociada:** Lección 4 - Horizontal Regression Analysis 2026
**Nivel de dificultad:** Avanzado

### Objetivos

- Importar puntos topográficos de levantamiento
- Ejecutar Horizontal Regression Analysis
- Optimizar parámetros de regresión
- Comparar geometría de regresión vs diseño manual

### Archivo de trabajo

`Ejercicio-4-Regression.dwg`

**Contenido:**
- Point Group "LEVANTAMIENTO-EJE" con 220 puntos COGO
- Superficie "EG"
- Límites de proyecto

### Instrucciones Detalladas

#### Parte A: Preparación de Datos (15 minutos)

**Paso 1: Verificar puntos importados**

1. Abre `Ejercicio-4-Regression.dwg`
2. Toolspace > Prospector > Point Groups > "LEVANTAMIENTO-EJE"
3. Verifica:
   - Number of points: _______ (debe ser ~220)
4. Click derecho en point group > **Zoom To**
5. Observa distribución de puntos:
   - ¿Forman un patrón de eje de carretera? (Sí/No)
   - ¿Hay puntos obviamente fuera de lugar (outliers)?

**Paso 2: Análisis preliminar**

6. Visualmente identifica:
   - Número aproximado de curvas: _______
   - Tramos rectos (tangentes): _______
   - Longitud total aproximada: _______ m

**Paso 3: Filtrar outliers (si hay)**

7. Si identificaste puntos erráticos:
   - Selecciona punto > Properties
   - Anota número de punto: _______
   - Point Group "LEVANTAMIENTO-EJE" > Properties > Exclude tab
   - Agrega números de puntos a excluir

#### Parte B: Regression Analysis (30 minutos)

**Paso 4: Ejecutar Horizontal Regression Analysis**

8. Ribbon > Home > Alignment dropdown > **Create Alignment from Regression**

**Tab 1 - Data Source:**
9. Configurar:
   - Select Points: **From Point Group**
   - Point Group: "LEVANTAMIENTO-EJE"
   - Point Order: Automatic (by point number)
   - Direction: Forward

**Tab 2 - Regression Parameters:**
10. Configurar:
    - Geometry Type: **Tangent-Spiral-Curve-Spiral**
    - **Curve Detection:**
      - Minimum Curve Radius: 100 m
      - Maximum Curve Radius: 1000 m
      - Minimum Curve Length: 30 m
    - **Spiral Settings:**
      - Use Spirals: ✓
      - Min Spiral Length: 40 m
      - Max Spiral Length: 120 m

**Tab 3 - Tolerance Settings:**
11. Configurar (primera iteración - tolerante):
    - Horizontal Offset Tolerance: **0.20 m**
    - Maximum RMS: **0.15 m**
    - Outlier Detection: ✓
    - Outlier Threshold: **3.0 σ**

**Tab 4 - Alignment Properties:**
12. Configurar:
    - Name: Carretera-Existente-Regresion
    - Type: Centerline
    - Design Speed: 60 km/h
    - Criteria file: AASHTO 2011 Metric

13. Click **Analyze**

**Paso 5: Revisar resultados - Iteración 1**

14. Regression Analysis Results dialog:
    - Total Points Analyzed: _______
    - Points Used: _______
    - Points Excluded (Outliers): _______
    - Maximum Deviation: _______ m
    - Average Deviation: _______ m
    - **RMS Error:** _______ m

15. ¿Es aceptable el RMS (< 0.15 m)? _______

16. Geometry Summary:
    - Number of Tangents: _______
    - Number of Curves: _______
    - Number of Spirals: _______

**Paso 6: Iteración 2 - Refinamiento**

17. Si RMS > 0.15 m, ajusta parámetros:
    - Tolerance Settings > Horizontal Offset: **0.15 m** (más estricto)
    - Outlier Threshold: **2.5 σ** (más agresivo)
18. Re-analyze
19. Compara RMS de Iteración 1 vs Iteración 2:
    - Iteración 1 RMS: _______ m
    - Iteración 2 RMS: _______ m
    - ¿Mejoró? _______

**Paso 7: Crear Alignment desde Regresión**

20. Con resultados satisfactorios (RMS < 0.15 m):
21. Click **Create Alignment**
22. Alignment aparece en pantalla
23. Verifica en Prospector que se creó

#### Parte C: Validación y Mejoras (15 minutos)

**Paso 8: Validación AASHTO**

24. Alignment Properties > Design Criteria:
    - Use design check sets: ✓
25. Genera Design Check Report
26. Anota warnings/errors:
    - ¿Curvas con radio menor a mínimo AASHTO? _______
    - ¿Tangentes muy cortas? _______
27. Identifica curva más crítica:
    - Curva # _______
    - Radio actual: _______ m
    - Radio mínimo AASHTO 60 km/h: _______ m

**Paso 9: Proponer mejoras**

28. Geometry Editor en alignment de regresión
29. Identifica curva con radio menor (curva crítica)
30. Aumenta radius a valor AASHTO recomendable
31. Observa:
    - ¿Se aleja mucho de puntos originales? (visual)
    - ¿Vale la pena para seguridad? _______

**Paso 10: Comparar con diseño manual**

32. Crea alignment NUEVO con Layout Tools:
    - Name: Carretera-Existente-Rediseño
    - Design speed: 60 km/h
    - Diseña manualmente siguiendo aproximadamente los puntos
    - Usa radios AASHTO recomendables (160 m para 60 km/h)
33. Compara:
    - Longitud total: Regresión _______ m vs Rediseño _______ m
    - Número de curvas: Regresión _______ vs Rediseño _______
    - RMS (solo regresión): _______ m

**Paso 11: Generar reportes**

34. Genera Regression Report (HTML)
35. Genera LandXML export del alignment de regresión
36. Crea tabla comparativa en Excel:

| Aspecto | Regresión | Rediseño Manual |
|---------|-----------|-----------------|
| Longitud (m) | | |
| Número de curvas | | |
| Radio mínimo (m) | | |
| Cumple AASHTO | | |
| RMS vs puntos (m) | | N/A |
| Tiempo de diseño | Automático | Manual |

### Entregables

**Archivos:**
- `Ejercicio-4-APELLIDO-Completado.dwg` (con ambos alignments)
- `Regression-Report.html`
- `Carretera-Existente-Regresion.xml` (LandXML)
- `Comparacion-Regresion-vs-Manual.xlsx`

**Screenshots:**
1. Regression Analysis Results dialog (Iteración final)
2. Deviation Report (tabla de desviaciones)
3. Alignment de regresión con puntos COGO visibles
4. Design Check Report
5. Comparación visual de ambos alignments (regresión en rojo, rediseño en azul)

**Documento de respuestas:**

1. **RMS error final de regresión:** _______ m
2. **Número de outliers detectados:** _______
3. **Curva con mayor desviación respecto a puntos:** Curva # _____, Desviación = _______ m
4. **¿El alignment de regresión cumple AASHTO sin modificaciones?** (Sí/No) _______
5. **Ventajas de usar Horizontal Regression Analysis en este proyecto:**
6. **Limitaciones encontradas:**
7. **Recomendación final: ¿Usar geometría de regresión o rediseñar manualmente? Justifica.**

### Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Regresión ejecutada correctamente (múltiples iteraciones) | 25 |
| RMS error aceptable (< 0.20 m) | 15 |
| Análisis de resultados (desviaciones, outliers) | 15 |
| Validación AASHTO y propuesta de mejoras | 20 |
| Comparación regresión vs diseño manual | 15 |
| Documentación y reportes | 10 |

**Total:** 100 puntos

---

## Ejercicio 5: Perfiles de Superficie y Profile Views

**Duración:** 60 minutos
**Lección asociada:** Lección 5 - Perfiles de Superficie
**Nivel de dificultad:** Básico-Intermedio

### Objetivos

- Crear surface profiles desde alignments
- Configurar profile views con escalas apropiadas
- Aplicar data bands para elevaciones
- Visualizar múltiples profiles en un view

### Archivo de trabajo

`Ejercicio-5-Profiles.dwg`

**Contenido:**
- Alignment "Av-Principal" (calle urbana, 2.8 km)
- Superficie "EG" (terreno existente)
- Superficie "PROPUESTA-RELLENO" (propuesta de nivelación)

### Instrucciones Detalladas

#### Parte A: Surface Profiles (25 minutos)

**Paso 1: Verificar datos de entrada**

1. Abre `Ejercicio-5-Profiles.dwg`
2. Toolspace > Prospector:
   - Alignments > "Av-Principal" (longitud _______ m)
   - Surfaces > "EG" (elevación min _______ m, max _______ m)
   - Surfaces > "PROPUESTA-RELLENO"

**Paso 2: Crear Surface Profile - EG**

3. Selecciona alignment "Av-Principal"
4. Ribbon > Profile dropdown > **Create Surface Profile**
5. Cuadro "Create Profile from Surface":
   - **General tab:**
     - Select Surface: **EG**
     - Profile Name: EG - Terreno Natural
     - Profile Style: Existing Ground (línea verde)
   - **Sampling tab:**
     - Offset Range: Start 0.00, End 0.00 (eje central)
     - Station increment: **20.00 m**
     - Sample at grade breaks: ✓
     - Sample at horizontal geometry: ✓
6. Click **Add**
7. Verifica que "EG" aparece en lista de profiles a crear
8. Click **OK**

**Paso 3: Crear Surface Profile - Propuesta**

9. Repite proceso para superficie "PROPUESTA-RELLENO":
   - Profile Name: PROPUESTA - Relleno
   - Profile Style: Design Profile (línea roja)
   - Sampling: Igual que EG (20 m)
10. Add > OK

**Paso 4: Verificar profiles en Prospector**

11. Toolspace > Prospector > Alignments > Av-Principal > **Profiles**
12. Debe mostrar:
    - EG - Terreno Natural
    - PROPUESTA - Relleno
13. Click derecho en "EG - Terreno Natural" > **Profile Properties**
14. Tab **Statistics:**
    - Minimum Elevation: _______ m
    - Maximum Elevation: _______ m
    - Length: _______ m

#### Parte B: Profile Views (35 minutos)

**Paso 5: Crear Profile View principal**

15. Selecciona alignment
16. Ribbon > **Profile View**
17. Create Profile View Wizard:

**Page 1 - General:**
18. Configurar:
    - Profile View Name: Perfil Longitudinal - Av Principal
    - Profile View Style: **Major Grids**
    - Select profiles to display:
      - ✓ EG - Terreno Natural
      - ✓ PROPUESTA - Relleno
    - Station Range: **Complete Alignment**
19. Next >

**Page 2 - Station Range:**
20. Seleccionar: **Complete Alignment** (un solo view continuo)
21. Next >

**Page 3 - Profile View Height:**
22. Seleccionar: **Automatic**
23. Next >

**Page 4 - Profile Display Options:**
24. Perfiles a mostrar:
    - ✓ EG - Terreno Natural (Draw order: 1)
    - ✓ PROPUESTA - Relleno (Draw order: 2)
25. Clip vertical grid: ✓
26. Next >

**Page 5 - Data Bands:**
27. Agregar banda:
    - Click **Add Band**
    - Type: **Profile Data**
    - Band Style: "Elevation and Stations"
    - Profile 1: EG - Terreno Natural
    - Gap: 0.50
28. Agregar segunda banda:
    - Profile Data para PROPUESTA - Relleno
29. Next > Next > (skip hatch)

**Page 7 - Create:**
30. Click **Create Profile View**
31. Coloca en espacio amplio del drawing
32. Profile view se genera

**Paso 6: Configurar escalas**

33. Selecciona profile view
34. Click derecho > **Profile View Properties**
35. Tab **Graph:**
    - Vertical Scale: **1:100** (1 cm = 1 m vertical)
    - Horizontal Scale: **1:2000** (1 cm = 20 m horizontal)
    - Vertical Exaggeration: _______ (calculado = 20:1)
36. Apply > OK

**Paso 7: Agregar labels**

37. Selecciona profile line "EG - Terreno Natural" (línea verde)
38. Ribbon > Add Profile Labels
39. Type: **Station Elevation**
40. Coloca labels en:
    - Punto más alto del perfil
    - Punto más bajo
    - 5 puntos intermedios de interés
41. Repite para "PROPUESTA - Relleno" (línea roja)

**Paso 8: Crear segundo profile view (offset)**

42. Crea nuevo surface profile:
    - Surface: EG
    - Name: EG - Borde Izquierdo
    - Sampling > Offset Range: Start **-5.00**, End **-5.00** (5 m a la izquierda)
43. Agrega este profile al profile view existente:
    - Profile View Properties > Profiles tab
    - Add > EG - Borde Izquierdo
    - Style: Dashed line (diferenciarlo del eje)
44. Apply

**Paso 9: Análisis visual**

45. Observa las 3 líneas en profile view:
    - Verde sólida: EG eje
    - Roja: PROPUESTA
    - Verde punteada: EG borde izquierdo
46. Identifica:
    - Zonas de relleno (PROPUESTA > EG): Estaciones _______ a _______
    - Zonas de corte (EG > PROPUESTA): Estaciones _______ a _______
    - Altura máxima de relleno: _______ m aproximadamente

**Paso 10: Exportar datos**

47. Profile "EG - Terreno Natural" Properties > Elevations tab
48. Export to CSV: `EG-Elevations.csv`
49. Abre en Excel
50. Crea columna adicional calculando diferencia:
    - Diferencia = Elev PROPUESTA - Elev EG
    - Positivo = Relleno
    - Negativo = Corte

### Entregables

**Archivos:**
- `Ejercicio-5-APELLIDO-Completado.dwg`
- `EG-Elevations.csv`
- `Analisis-Corte-Relleno.xlsx` (con columna de diferencias)

**Screenshots:**
1. Profile view completo mostrando EG, PROPUESTA, y EG borde
2. Data bands de elevaciones (ambos profiles)
3. Profile view con labels de station-elevation
4. Excel con gráfica de Elevaciones vs Estaciones

**Documento de respuestas:**

1. **Elevación mínima de EG:** _______ m en estación _______
2. **Elevación máxima de EG:** _______ m en estación _______
3. **Rango de elevaciones (max - min):** _______ m
4. **Exageración vertical del profile view:** _______ :1
5. **Estaciones con mayor relleno:** Aproximadamente _______ a _______
6. **Altura máxima de relleno:** _______ m
7. **Estaciones con mayor corte:** Aproximadamente _______ a _______
8. **Profundidad máxima de corte:** _______ m
9. **Diferencia entre EG eje y EG borde izquierdo:** ¿Significativa? ¿Por qué?

### Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Surface profiles creados correctamente (EG y PROPUESTA) | 20 |
| Profile view configurado con escalas apropiadas | 20 |
| Data bands aplicadas correctamente | 15 |
| Multiple profiles en un view | 15 |
| Labels aplicadas apropiadamente | 10 |
| Análisis de corte/relleno correcto | 15 |
| Documentación | 5 |

**Total:** 100 puntos

---

## Ejercicio 6: Diseño de Rasante Vertical Completo

**Duración:** 60 minutos
**Lección asociada:** Lección 6 - Diseño de Rasante Vertical
**Nivel de dificultad:** Avanzado

### Objetivos

- Diseñar rasante vertical (finished grade profile)
- Aplicar curvas verticales parabólicas con K-values AASHTO
- Optimizar corte/relleno
- Generar documentación completa de construcción

### Archivo de trabajo

`Ejercicio-6-Diseno-Rasante.dwg`

**Contenido:**
- Alignment "Carretera Regional CR-100" (velocidad 100 km/h)
- Surface profile "EG" ya creado
- Profile view mostrando terreno existente
- Superficie con elevaciones 1180-1260 m
- Longitud alignment: 3.5 km

### Instrucciones Detalladas

#### Parte A: Estrategia de Diseño (10 minutos)

**Paso 1: Análisis preliminar**

1. Abre `Ejercicio-6-Diseno-Rasante.dwg`
2. Observa profile view con EG (terreno verde)
3. Identifica:
   - Puntos altos (crests) del terreno: Estaciones aprox. _______
   - Puntos bajos (sags) del terreno: Estaciones aprox. _______
   - Pendiente general (¿sube o baja de inicio a fin?): _______

**Paso 2: Criterios de diseño**

Anota criterios AASHTO para 100 km/h:

4. Pendiente máxima (terreno ondulado): _______% (Tabla Lección 6)
5. K-value mínimo para curvas crest: _______ (Tabla Lección 6)
6. K-value mínimo para curvas sag: _______ (Tabla Lección 6)
7. Pendiente mínima (drenaje): 0.5%

**Paso 3: Estrategia**

8. Objetivo principal: **Balance de corte/relleno** (volúmenes similares)
9. Método: Rasante lo más cercana posible a terreno existente, respetando AASHTO

#### Parte B: Diseñar Rasante (30 minutos)

**Paso 4: Create Design Profile**

10. Selecciona profile view
11. Ribbon > Profile Creation Tools
12. Cuadro "Create Design Profile":
    - Name: **FG - Rasante de Proyecto**
    - Profile Style: Design Profile (rojo)
    - Design Speed: 100 km/h
    - Criteria file: AASHTO 2011 Metric
    - Use design checks: ✓
13. OK

**Paso 5: Configurar Vertical Curve Settings**

14. Profile Layout Tools > **Vertical Curve Settings**
15. Curve Settings:
    - Curve Type: Parabolic
    - K Value Method: **Automatic** (usa AASHTO)
16. OK

**Paso 6: Diseñar tangentes verticales**

17. Profile Layout Tools > **Draw Tangents** (sin curvas inicialmente)
18. Diseña con esta estrategia:

**PVI 1 (inicio):**
- Station: 0+000
- Elevation: 1190.00 m (ligeramente sobre EG para evitar corte inicial)

**PVI 2:**
- Station: ~1+000
- Grade: +2.0% (subida moderada)
- Objetivo: Seguir tendencia del terreno

**PVI 3:**
- Station: ~2+000
- Grade: -1.0% (bajada suave)
- Objetivo: Punto alto cerca de crest del terreno

**PVI 4:**
- Station: ~3+000
- Grade: +1.5% (subida final)

**Fin:**
- Station: 3+500
- Elevation calculada por última pendiente

19. Press Enter al terminar

**Paso 7: Verificar pendientes**

20. Profile Grid View
21. Verifica para cada tangente:
    - Grade ≤ 6% (máximo para 100 km/h terreno ondulado)
22. Si alguna pendiente > 6%:
    - Ajusta elevaciones de PVIs con grips
    - O modifica en Grid View (celda "Grade Out")

**Paso 8: Insertar curvas verticales**

23. Para cada PVI intermedio (2, 3, 4):
    - Profile Layout Tools > **Insert PVI** (si usaste Draw Tangents sin curvas)
    - O directamente con grips, insertar curva

24. Civil 3D calcula K-values automáticos según AASHTO

25. Verifica en Grid View para cada curva:

| PVI | Station | Type | Grade In | Grade Out | K-value | Cumple AASHTO |
|-----|---------|------|----------|-----------|---------|---------------|
| 2   |         |      |          |           |         |               |
| 3   |         |      |          |           |         |               |
| 4   |         |      |          |           |         |               |

**Paso 9: Validación de diseño**

26. Observa colores:
    - ¿Hay elementos en rojo (error crítico)? _______
27. Genera **Design Check Report**
28. Corrige errores:
    - Pendiente > 6%: Reduce pendiente
    - K-value insuficiente: Aumenta longitud de curva

#### Parte C: Optimización y Documentación (20 minutos)

**Paso 10: Optimizar corte/relleno**

29. Observa distancia vertical entre EG (verde) y FG (rojo):
    - Rojo arriba = Relleno
    - Verde arriba = Corte
30. Ajusta elevaciones de PVIs para minimizar volúmenes:
    - Usa grips verticales en PVIs
    - Objetivo: FG lo más cercana posible a EG
    - Restricción: Mantener criterios AASHTO

31. Iteración:
    - Ajusta PVI 2 elevación: ±2 m
    - Observa efecto en corte/relleno
    - Revisa design check (debe seguir verde)
    - Repite para PVI 3 y 4

**Paso 11: Cálculo estimado de volúmenes**

32. En Excel, usando datos de elevations export:
    - Columna A: Station (cada 25 m)
    - Columna B: Elev EG
    - Columna C: Elev FG
    - Columna D: Diferencia (FG - EG)
    - Columna E: Corte (si D < 0, abs(D), sino 0)
    - Columna F: Relleno (si D > 0, D, sino 0)
33. Suma total:
    - Total Corte: _______ m (suma columna E × 25 m × área típica)
    - Total Relleno: _______ m
    - Balance: _______%

**Paso 12: Labels completas**

34. Selecciona profile FG (línea roja)
35. Add Profile Labels:
    - **PVI Labels:** Station, Elevation, Grades In/Out
    - **Crest Curve Labels:** K-value, Length
    - **Sag Curve Labels:** K-value, Length
36. Aplica label set completo

**Paso 13: Data Bands adicionales**

37. Profile View Properties > Bands tab
38. Agrega banda:
    - Type: **Vertical Geometry**
    - Band Style: "Geometry Points"
    - Profile: FG - Rasante de Proyecto
39. Muestra PVIs, PVCs, PVTs con datos

**Paso 14: Profile Report**

40. Profile Layout Tools > **Profile Report**
41. Configurar:
    - Station Range: 0+000 to 3+500
    - Increment: **25.00 m**
    - Include PVIs: ✓
    - Include vertical curves: ✓
42. Genera report TXT: `Rasante-CR-100.txt`
43. Revisa formato (tabla de estacado para construcción)

**Paso 15: Comparación de alternativas**

44. Crea segundo design profile (alternativa):
    - Name: FG - Alternativa 2
    - Diseño con pendientes más conservadoras (≤ 4%)
    - K-values mayores (1.5 × mínimo AASHTO)
45. Compara:
    - Volumen de corte/relleno
    - Longitudes de curvas verticales
    - Comodidad (cambios de pendiente más suaves)

### Entregables

**Archivos:**
- `Ejercicio-6-APELLIDO-Completado.dwg` (con ambos designs)
- `Rasante-CR-100.txt` (Profile Report)
- `Balance-Corte-Relleno.xlsx` (análisis de volúmenes)

**Screenshots:**
1. Profile view mostrando EG y FG con todas las labels
2. Profile Grid View con datos de PVIs y curvas
3. Design Check Report (sin errores críticos)
4. Data bands de Vertical Geometry
5. (Opcional) Comparación visual FG vs FG-Alternativa 2

**Documento de respuestas:**

1. **Número de PVIs en diseño final:** _______
2. **Pendiente máxima en diseño:** _______% en estación _______
3. **¿Cumple con máximo AASHTO 6% para 100 km/h terreno ondulado?** (Sí/No) _______
4. **Curva vertical con K-value mínimo:** PVI # _____, K = _______
5. **¿Ese K cumple AASHTO mínimo?** (Sí/No) _______
6. **Volumen estimado de corte:** _______ m³
7. **Volumen estimado de relleno:** _______ m³
8. **Balance (corte/relleno ratio):** _______ (ideal ≈ 1.0)
9. **Estación con mayor altura de relleno:** _______, Altura ≈ _______ m
10. **Estación con mayor profundidad de corte:** _______, Profundidad ≈ _______ m
11. **Justifica tu diseño: ¿Por qué elegiste esas elevaciones de PVIs?**
12. **Si tuvieras presupuesto ilimitado, ¿qué mejorarías en la rasante y por qué?**

### Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Diseño de rasante con criterios AASHTO | 25 |
| Curvas verticales con K-values correctos | 20 |
| Optimización de corte/relleno | 20 |
| Labels y anotación completa | 15 |
| Profile Report generado | 10 |
| Análisis de volúmenes (Excel) | 10 |

**Total:** 100 puntos

---

## Resumen de Ejercicios

| Ejercicio | Lección | Duración | Dificultad | Habilidad Principal |
|-----------|---------|----------|------------|---------------------|
| 1 | Lección 1 | 60 min | Básico | Creación de alignments |
| 2 | Lección 2 | 60 min | Intermedio | Elementos geométricos y AASHTO |
| 3 | Lección 3 | 60 min | Intermedio-Avanzado | Superelevation |
| 4 | Lección 4 | 60 min | Avanzado | Horizontal Regression Analysis |
| 5 | Lección 5 | 60 min | Básico-Intermedio | Surface profiles y views |
| 6 | Lección 6 | 60 min | Avanzado | Diseño de rasante vertical |

**Total tiempo de práctica:** 6 horas

---

## Evaluación Final del Módulo 3

Al completar los 6 ejercicios, el estudiante debe presentar:

**Proyecto Integrador Final (opcional):**
Diseño completo de carretera rural de 5 km:
- Alineamiento horizontal con espirales
- Superelevation aplicada
- Profile view con EG
- Diseño de rasante FG optimizada
- Balance de corte/relleno < 10% diferencia
- Documentación completa (planos, reportes, tablas)

**Criterio de aprobación del módulo:**
- Promedio de ejercicios ≥ 80/100
- Proyecto integrador (si aplica) ≥ 85/100
- Comprensión demostrada de criterios AASHTO

---

**FIN DE EJERCICIOS - MÓDULO 3**
