# Lección 4: Horizontal Regression Analysis (Nuevo en Civil 3D 2026)

**Duración:** 60 minutos
**Módulo:** 3 - Alineamientos y Perfiles
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué es Horizontal Regression Analysis y sus aplicaciones
✅ Identificar casos de uso apropiados (reconstrucción, ampliación, mejoras)
✅ Crear alignments desde puntos COGO usando análisis de regresión
✅ Configurar tolerancias y parámetros de ajuste (fit)
✅ Optimizar geometría horizontal con best fit curves
✅ Comparar resultados de regresión vs diseño manual tradicional
✅ Exportar datos de regresión para análisis adicional
✅ Aplicar esta nueva funcionalidad de Civil 3D 2026 en proyectos reales

---

## Introducción

**Horizontal Regression Analysis** es una funcionalidad NUEVA en Autodesk Civil 3D 2026 que permite crear alineamientos horizontales mediante **análisis de regresión estadística** de puntos topográficos existentes. Esta herramienta es revolucionaria para proyectos de reconstrucción, ampliación y mejoras de vías existentes.

**Diferencia con Best Fit tradicional:**
- **Best Fit clásico:** Ajusta curvas y tangentes a geometría aproximada que tú defines
- **Regression Analysis 2026:** Calcula automáticamente la geometría óptima (tangentes, curvas, espirales) que mejor se ajusta a un conjunto de puntos, usando algoritmos de regresión avanzados

**Casos de uso profesionales:**
1. **Reconstrucción de carreteras:** Levantamiento topográfico del eje existente → Alignment digital
2. **Ampliación de vías:** Offset paralelo basado en eje actual levantado
3. **Proyectos as-built:** Documentar geometría construida vs diseño original
4. **Mejoras de geometría:** Optimizar curvas existentes con radios mayores
5. **Reverse engineering:** Crear modelo BIM de infraestructura existente

![Horizontal Regression Analysis overview](../imagenes/leccion-4-regression-overview.png)

---

## 1. ¿Qué es Horizontal Regression Analysis?

### 1.1 Conceptos de Regresión Estadística

**Regresión lineal simple:**
Encontrar la línea recta que mejor se ajusta a un conjunto de puntos, minimizando la suma de cuadrados de las distancias verticales (método de mínimos cuadrados).

**Regresión aplicada a alineamientos:**
Civil 3D 2026 extiende este concepto a geometría vial compleja:
- Regresión de tangentes (líneas rectas)
- Regresión de curvas circulares (arcos)
- Regresión de espirales de transición (clothoids)

**Objetivo matemático:**
Minimizar la desviación entre puntos topográficos reales y la geometría calculada del alignment.

![Regresión de puntos](../imagenes/leccion-4-regression-concept.png)

### 1.2 Workflow de Regression Analysis

**Proceso típico:**

1. **Levantamiento topográfico:** Obtener puntos COGO del eje existente
   - Estación total
   - GPS RTK
   - Scan 3D (extracción de centerline)
   - Drones (fotogrametría)

2. **Importar puntos a Civil 3D**
   - CSV, TXT, LandXML
   - Point Groups con código de "CENTERLINE" o similar

3. **Ejecutar Horizontal Regression Analysis**
   - Seleccionar point group o puntos individuales
   - Configurar tolerancias de ajuste
   - Especificar tipo de geometría (tangent-curve, spiral-curve-spiral)

4. **Revisar resultados**
   - Desviación máxima, promedio, RMS
   - Puntos fuera de tolerancia
   - Geometría resultante (radios, longitudes)

5. **Ajustar si es necesario**
   - Cambiar tolerancias
   - Excluir puntos outliers
   - Re-ejecutar análisis

6. **Crear Alignment definitivo**
   - Convertir resultado de regresión a alignment object
   - Aplicar superelevation
   - Continuar diseño (perfiles, corridors)

![Workflow regression](../imagenes/leccion-4-workflow.png)

### 1.3 Ventajas de Regression Analysis

**Precisión:**
- Ajuste matemático óptimo (mínimos cuadrados)
- Cuantificación de desviaciones (estadísticas)
- Identifica puntos con errores de levantamiento

**Velocidad:**
- Automatización del proceso
- No requiere trazar polyline manual aproximada
- Iteración rápida con diferentes parámetros

**Documentación:**
- Reporte de desviaciones para as-built
- Comparación precisa diseño vs construido
- Trazabilidad del proceso de ajuste

**Optimización:**
- Encuentra radios óptimos para curvas existentes
- Mejora geometría subóptima (curvas muy cerradas)
- Sugiere mejoras con criterios AASHTO

---

## 2. Preparación de Datos - Puntos COGO

### 2.1 Requisitos de Puntos

Para Horizontal Regression Analysis efectivo:

**Densidad de puntos:**
- Tangentes: Cada 20-50 metros
- Curvas: Cada 10-20 metros (mayor densidad)
- Transiciones: Cada 5-10 metros (crítico)

**Calidad:**
- Precisión horizontal: ± 0.05 m (levantamiento de precisión)
- Puntos libres de obstáculos (no sobre vehículos estacionados)
- Filtrado de outliers (puntos erráticos)

**Organización:**
- Point Group específico: "EJE-EXISTENTE"
- Description Key: "CL" (centerline)
- Numeración secuencial en dirección del alineamiento

**Ejemplo de dataset ideal:**

| Punto | Norte    | Este     | Elevación | Descripción |
|-------|----------|----------|-----------|-------------|
| 1001  | 4500000  | 500000   | 1250.50   | CL          |
| 1002  | 4500020  | 500005   | 1250.80   | CL          |
| 1003  | 4500040  | 500012   | 1251.10   | CL          |
| ...   | ...      | ...      | ...       | ...         |

### 2.2 Importar Puntos Topográficos

**Paso 1:** Ribbon > Insert tab > **Import** dropdown > **Points from File**

**Paso 2:** Selecciona archivo CSV o TXT

**Formato esperado:**
```
Point Number, Northing, Easting, Elevation, Description
1001, 4500000.000, 500000.000, 1250.50, CL
1002, 4500020.000, 500005.000, 1250.80, CL
1003, 4500040.000, 500012.000, 1251.10, CL
```

**Paso 3:** Cuadro "Import Points"
- Format: PNEZD (comma delimited)
- Add points to point group: ✓ "EJE-EXISTENTE"

**Import**

**Verificación:**
Toolspace > Prospector > Point Groups > "EJE-EXISTENTE" debe mostrar puntos importados.

![Import points](../imagenes/leccion-4-import-points.png)

### 2.3 Filtrar y Limpiar Datos

**Revisar outliers:**

**Paso 1:** Zoom a los puntos en pantalla

**Paso 2:** Identifica puntos claramente fuera del patrón
- Desviados > 1 metro lateralmente
- Elevaciones anómalas

**Paso 3:** Opciones de limpieza:

**Opción 1: Eliminar puntos**
- Select point > Delete

**Opción 2: Excluir de Point Group**
- Point Group properties > Exclude tab
- Especifica números de puntos a excluir

**Opción 3: Marcar como "Check"**
- Point properties > Status: Check
- Civil 3D puede ignorarlos en análisis

**Resultado:**
Point Group limpio con solo puntos de calidad para regresión.

---

## 3. Ejecutar Horizontal Regression Analysis

### 3.1 Acceso a la Herramienta (Civil 3D 2026)

**Paso 1:** Ribbon > Home tab > Create Design panel > **Alignment** dropdown

**Paso 2:** **Create Alignment from Regression** (NUEVO en 2026)

![Create from Regression menu](../imagenes/leccion-4-create-from-regression.png)

**Nota:** Si no ves esta opción, verifica que tienes Civil 3D 2026 (no versiones anteriores).

### 3.2 Cuadro de Diálogo "Horizontal Regression Analysis"

**Tab 1: Data Source**

**Select Points:**
- Opción 1: **From Point Group** - "EJE-EXISTENTE" (recomendado)
- Opción 2: **Pick Points** - Seleccionar manualmente en pantalla
- Opción 3: **From Object** - Polyline o feature line

**Point Order:**
- Automatic (por numeración de puntos)
- Manual (si puntos no están numerados secuencialmente)

**Direction:**
- Forward (punto menor a mayor)
- Reverse (punto mayor a menor)

**Paso:** Selecciona "From Point Group" > "EJE-EXISTENTE"

![Regression dialog - Data Source](../imagenes/leccion-4-regression-data-source.png)

### 3.3 Tab 2: Regression Parameters

**Geometry Type:**

**1. Tangent only**
- Solo líneas rectas (no curvas)
- Uso: Calles urbanas, caminos rurales rectos

**2. Tangent-Curve**
- Tangentes + curvas circulares simples
- Uso: Mayoría de carreteras existentes

**3. Tangent-Spiral-Curve-Spiral** (recomendado)
- Geometría completa con transiciones
- Uso: Carreteras modernas, autopistas

**Selecciona:** Tangent-Spiral-Curve-Spiral

**Curve Detection:**

**Minimum Curve Radius:**
- Valor mínimo de radio para identificar curva
- Ej: 50 m (curvas menores se ignoran, tratadas como tangente)

**Maximum Curve Radius:**
- Valor máximo de radio
- Ej: 2000 m (radios mayores se consideran tangente)

**Minimum Curve Length:**
- Longitud mínima de arco para ser considerada curva
- Ej: 20 m (evita curvas triviales)

**Spiral Settings:**

**Use Spirals:** ✓ Activado

**Minimum Spiral Length:** 30 m

**Maximum Spiral Length:** 150 m

![Regression Parameters](../imagenes/leccion-4-regression-parameters.png)

### 3.4 Tab 3: Tolerance Settings

**Fit Tolerance:**

Define qué tan "cerca" debe estar el alignment de los puntos.

**Horizontal Offset Tolerance:**
- Desviación lateral máxima permitida
- Ej: 0.15 m (15 cm)

**Maximum RMS (Root Mean Square):**
- Error cuadrático medio máximo
- Ej: 0.10 m

**Point Weighting:**
- Equal weights (todos los puntos tienen mismo peso)
- Custom weights (puntos más confiables tienen mayor peso)

**Outlier Removal:**

**Automatic Outlier Detection:** ✓ Activado

**Outlier Threshold:** 3.0 × standard deviation
- Puntos fuera de 3σ se excluyen automáticamente

![Tolerance Settings](../imagenes/leccion-4-tolerance-settings.png)

### 3.5 Tab 4: Alignment Properties

Configuración del alignment resultante:

**General:**
- Name: Eje Existente - Regresión
- Type: Centerline
- Style: Basic
- Layer: C-ROAD-CNTR

**Design Criteria:**
- Use criteria-based design: ✓
- Criteria file: AASHTO 2011 Metric.xml
- Starting design speed: 60 km/h (velocidad estimada de vía existente)

**Stationing:**
- Starting station: 0+000
- Station indexing: Automatic

**Paso:** Configura nombre y style apropiados.

### 3.6 Ejecutar Análisis

**Click:** **Analyze** button

**Procesamiento:**
Civil 3D ejecuta algoritmo de regresión:
1. Identifica tangentes (segmentos rectos)
2. Detecta curvas (cambios de dirección)
3. Calcula radios óptimos
4. Inserta espirales de transición
5. Calcula estadísticas de ajuste

**Tiempo:** 5-30 segundos según número de puntos

**Resultado:**
Se abre **Regression Analysis Results** dialog.

![Analyzing](../imagenes/leccion-4-analyzing.png)

---

## 4. Revisar Resultados de Regresión

### 4.1 Regression Analysis Results Dialog

**Statistics Summary:**

```
Total Points Analyzed: 245
Points Used: 238
Points Excluded (Outliers): 7
Maximum Deviation: 0.18 m (Station 1+245.50)
Average Deviation: 0.05 m
RMS Error: 0.08 m
Fit Quality: GOOD
```

**Interpretation:**
- **RMS < 0.10 m:** Excelente ajuste ✓
- **RMS 0.10 - 0.20 m:** Buen ajuste ✓
- **RMS 0.20 - 0.50 m:** Ajuste aceptable ⚠
- **RMS > 0.50 m:** Revisar datos o parámetros ✗

**Geometry Summary:**

```
Total Alignment Length: 2,450.50 m
Number of Tangents: 5
Number of Curves: 4
Number of Spirals: 8 (4 in, 4 out)

Curve Details:
Curve 1: R = 250.0 m, Δ = 38.5°, L = 168.2 m
Curve 2: R = 180.0 m, Δ = 52.3°, L = 164.1 m
Curve 3: R = 300.0 m, Δ = 28.9°, L = 151.4 m
Curve 4: R = 220.0 m, Δ = 45.2°, L = 173.5 m
```

![Results Summary](../imagenes/leccion-4-results-summary.png)

### 4.2 Deviation Report

**Tabla de desviaciones:**

| Station | Deviation (m) | Status |
|---------|---------------|--------|
| 0+020   | +0.03         | OK     |
| 0+040   | -0.02         | OK     |
| 0+060   | +0.08         | OK     |
| 1+245   | +0.18         | Warning|
| 2+120   | -0.15         | OK     |

**Código de colores:**
- Verde: Desviación < 0.10 m ✓
- Amarillo: Desviación 0.10 - 0.15 m ⚠
- Rojo: Desviación > 0.15 m (revisar) ✗

**Acciones:**

**Si hay puntos rojos:**
1. Verificar punto topográfico (posible error de levantamiento)
2. Excluir punto manualmente
3. Re-ejecutar regresión

**Si todo está verde/amarillo:**
Proceder a crear alignment.

### 4.3 Visual Preview

**Preview Window:**
Muestra alignment calculado superpuesto sobre puntos topográficos.

**Visualización:**
- Puntos: Color azul
- Alignment: Línea roja
- Desviaciones: Líneas perpendiculares (offset)

**Controles:**
- Zoom in/out
- Pan
- Highlight deviations > 0.10 m

**Uso:**
Verificar visualmente que la geometría tiene sentido (no hay curvas erráticas).

![Visual Preview](../imagenes/leccion-4-visual-preview.png)

---

## 5. Crear Alignment desde Regresión

### 5.1 Aceptar Resultados

**Si resultados son satisfactorios:**

**Click:** **Create Alignment** button en Results dialog

**Proceso:**
Civil 3D crea un Alignment object completo con:
- Tangentes
- Curvas circulares
- Espirales de transición
- Stationing
- Design criteria aplicados

**Ubicación:**
Toolspace > Prospector > Alignments > Centerline Alignments > "Eje Existente - Regresión"

**Visualización:**
Alignment aparece en pantalla con style configurado.

### 5.2 Comparar con Puntos Originales

**Herramienta útil:** Labels de desviación

**Paso 1:** Selecciona alignment creado

**Paso 2:** Ribbon contextual > Labels & Tables > **Add Labels**

**Paso 3:** Type: **Station Offset**

**Paso 4:** Click en puntos topográficos

**Resultado:**
Label muestra:
- Station a lo largo del alignment
- Offset lateral (desviación)

**Ejemplo:**
```
Sta: 1+245.50
Offset: +0.18 m (L)
```

Esto confirma las desviaciones reportadas.

![Station Offset Labels](../imagenes/leccion-4-station-offset-labels.png)

### 5.3 Refinar Geometría Manualmente

**Después de crear alignment por regresión, puedes editar:**

**Paso 1:** Alignment Geometry Editor

**Paso 2:** Ajustes típicos:

**Aumentar radios de curvas:**
- Curva con R = 180 m → Cambiar a 200 m (mejora criterio AASHTO)

**Alargar espirales:**
- Spiral length 40 m → Cambiar a 60 m (mejor transición de peralte)

**Ajustar tangentes:**
- Mover PI ligeramente para optimizar corte/relleno

**Paso 3:** Verificar design criteria warnings

**Paso 4:** Re-calcular desviaciones con puntos originales

**Uso profesional:**
Regresión da geometría base excelente, refinamiento manual optimiza según criterios de diseño.

---

## 6. Optimización y Best Practices

### 6.1 Ajustar Parámetros de Regresión

**Si RMS error es alto (> 0.20 m):**

**Opción 1: Aumentar tolerancia**
- Horizontal offset tolerance: 0.15 m → 0.25 m
- Permite mayor desviación

**Opción 2: Reducir radios mínimos**
- Minimum curve radius: 100 m → 50 m
- Detecta curvas más cerradas

**Opción 3: Desactivar spirals**
- Si vía existente no tiene espirales, desactiva "Use Spirals"
- Solo tangent-curve

**Opción 4: Excluir más outliers**
- Outlier threshold: 3.0σ → 2.5σ
- Más agresivo en remover puntos anómalos

**Re-ejecutar análisis:**
Cada cambio de parámetros → Re-analyze → Comparar resultados.

### 6.2 Workflow de Múltiples Iteraciones

**Proceso recomendado:**

**Iteración 1: Tolerante**
- Tolerancias amplias (0.25 m)
- Minimum radius bajo (50 m)
- Objetivo: Ver geometría general

**Iteración 2: Refinamiento**
- Tolerancias medias (0.15 m)
- Excluir outliers identificados en Iteración 1
- Objetivo: Mejorar ajuste

**Iteración 3: Final**
- Tolerancias estrictas (0.10 m)
- Dataset limpio
- Objetivo: Geometría definitiva

**Comparar:**
- RMS error de cada iteración
- Geometry summary (radios, longitudes)
- Seleccionar mejor resultado

### 6.3 Validación con Criterios AASHTO

**Después de crear alignment:**

**Paso 1:** Alignment Properties > Design Criteria

**Paso 2:** Activar "Use design check sets"

**Paso 3:** Revisar warnings:

**Problemas típicos en vías existentes:**
- Radios menores a mínimo AASHTO (curvas subóptimas)
- Tangentes muy cortas
- Falta de espirales

**Solución:**
- Documentar "geometría existente no cumple AASHTO"
- Proponer mejoras: Aumentar radios, agregar espirales
- Comparar costo de reconstrucción vs mantener geometría actual

**Entregable profesional:**
Reporte comparativo:
- Geometría actual (regresión)
- Geometría propuesta (mejorada según AASHTO)
- Estimación de costo de mejoras

![Design Check Validation](../imagenes/leccion-4-design-check.png)

---

## 7. Casos de Uso Avanzados

### 7.1 Reconstrucción de Autopista Existente

**Proyecto:** Ampliación de 2 a 4 carriles

**Workflow:**

1. **Levantamiento:** Eje existente con GPS RTK (precisión 2 cm)
2. **Regression:** Crear alignment del eje actual
3. **Offset:** Crear alignment paralelo a 10 m (nuevo eje)
4. **Optimización:** Mejorar curvas con radios mayores
5. **Comparison:** Alineamiento actual vs propuesto
6. **Documentation:** Reporte de mejoras geométricas

**Ventaja de Regression:**
Base precisa para diseño de ampliación sin re-dibujar desde cero.

### 7.2 As-Built vs Diseño Original

**Proyecto:** Verificar construcción

**Workflow:**

1. **Levantamiento:** Eje construido (as-built)
2. **Regression:** Alignment as-built desde puntos
3. **Comparison:** Importar alignment de diseño original (DWG o LandXML)
4. **Analysis:** Calcular desviaciones estación por estación
5. **Report:** Tolerance report (dentro/fuera de especificación ± 5 cm)

**Entregable:**
Reporte de control de calidad de construcción.

### 7.3 Mejora de Curvas Peligrosas

**Proyecto:** Seguridad vial - Rediseño de curva cerrada

**Workflow:**

1. **Regression:** Alignment actual con curva R = 120 m
2. **Analysis:** Curva no cumple AASHTO para V = 80 km/h (Rmin = 185 m)
3. **Redesign:** Aumentar R a 200 m, agregar espirales
4. **Comparison:** Geometría actual vs mejorada
5. **Earthwork:** Cálculo de corte/relleno adicional
6. **ROW:** Verificar si requiere expropiación adicional

**Decisión:**
Costo de mejora vs beneficio de seguridad (reducción de accidentes).

---

## 8. Exportar y Documentar Resultados

### 8.1 Regression Report

**Generar reporte técnico:**

**Paso 1:** Después de crear alignment, click **Export Report** en Results dialog

**Paso 2:** Selecciona formato:
- HTML (para revisión en navegador)
- PDF (para documentación formal)
- XML (para procesamiento con scripts)

**Contenido del reporte:**

**Sección 1: Project Information**
- Date, analyst, alignment name

**Sección 2: Input Data**
- Number of points, point group, coordinate system

**Sección 3: Regression Parameters**
- Geometry type, tolerances, curve detection settings

**Sección 4: Statistical Results**
- RMS error, max deviation, average deviation
- Number of outliers

**Sección 5: Geometry Table**
- Tangents, curves, spirals (complete data)

**Sección 6: Deviation Table**
- Station-by-station deviations

**Sección 7: Outlier List**
- Points excluded with reasons

![Regression Report](../imagenes/leccion-4-regression-report.png)

### 8.2 Export a LandXML

**Para compartir con otros software:**

**Paso 1:** Selecciona alignment

**Paso 2:** Ribbon > Output tab > **Export** > LandXML

**Paso 3:** Cuadro "Export to LandXML"

**Include:**
- ✓ Alignments
- ✓ Regression metadata (nuevo en 2026)
- ✓ Deviation data

**Export**

**Archivo resultante:**
`Eje-Existente-Regresion.xml` compatible con:
- Trimble Business Center
- Bentley OpenRoads
- 12d Model
- Software GIS

### 8.3 Tablas Comparativas en Drawing

**Crear tabla visual:**

**Paso 1:** Ribbon contextual > Labels & Tables > **Add Tables** > Alignment Segments

**Paso 2:** Style: "Regression Comparison" (custom)

**Tabla incluye:**
- Segment number
- Type (Tangent, Curve, Spiral)
- Design values (Length, Radius, Delta)
- Regression fit quality (RMS per segment)

**Uso:**
Documentación en planos para revisión de diseño.

---

## Ejercicio Práctico 4

**Objetivo:** Usar Horizontal Regression Analysis para crear alignment de carretera existente desde puntos topográficos.

**Archivo:** `Regression-Example.dwg` (contiene point group "CENTERLINE-SURVEY" con 180 puntos)

**Escenario:**
Levantamiento topográfico de carretera rural existente. Se requiere crear alignment digital para proyecto de rehabilitación.

### Tareas:

**Tarea 1: Explorar datos de entrada**

1. Abre `Regression-Example.dwg`
2. Toolspace > Prospector > Point Groups > "CENTERLINE-SURVEY"
3. Verifica número de puntos (debe ser ~180)
4. Zoom Extents (observa distribución de puntos)
5. Identifica visualmente:
   - ¿Cuántas curvas aproximadamente?
   - ¿Longitud aproximada total?

**Tarea 2: Ejecutar Horizontal Regression Analysis**

6. Home > Alignment dropdown > **Create Alignment from Regression**
7. Configura:
   - **Data Source:** Point Group = "CENTERLINE-SURVEY"
   - **Regression Parameters:**
     - Geometry Type: Tangent-Spiral-Curve-Spiral
     - Min Curve Radius: 80 m
     - Max Curve Radius: 1500 m
     - Use Spirals: ✓
     - Min Spiral Length: 40 m
   - **Tolerance Settings:**
     - Horizontal Offset: 0.15 m
     - Max RMS: 0.12 m
     - Outlier Detection: ✓, Threshold 3.0σ
   - **Alignment Properties:**
     - Name: Carretera Existente CR-15
     - Design speed: 60 km/h
     - Criteria file: AASHTO 2011 Metric
8. Click **Analyze**

**Tarea 3: Revisar resultados**

9. Regression Analysis Results dialog:
   - Anota RMS Error: _______ m
   - Anota Max Deviation: _______ m
   - Anota Number of Outliers: _______
10. Revisa Deviation Report:
    - ¿Hay puntos en rojo (desviación > 0.15 m)?
    - Si hay, anota estaciones: _____________
11. Visual Preview:
    - ¿La geometría parece razonable?
    - ¿Hay curvas erráticas?

**Tarea 4: Crear alignment**

12. Si RMS < 0.15 m, click **Create Alignment**
13. Si RMS > 0.15 m:
    - Ajusta tolerancia a 0.20 m
    - Re-analyze
    - Luego Create Alignment

**Tarea 5: Validar con AASHTO**

14. Alignment Properties > Design Criteria
15. Use design check sets: ✓
16. Genera Design Check Report
17. Anota warnings:
    - ¿Cuántas curvas tienen radio menor a mínimo?
    - ¿Qué curva es la más crítica?

**Tarea 6: Proponer mejoras**

18. Geometry Editor
19. Identifica curva con radio mínimo
20. Aumenta radio a valor recomendable según AASHTO (tabla de Lección 2)
21. Observa cómo cambia geometría
22. Calcula desviación del nuevo alignment vs puntos originales (visualmente)

**Tarea 7: Documentar**

23. Genera Regression Report (HTML)
24. Genera tabla de Alignment Segments
25. Aplica labels de Major Stations y Curve Data

### Entregable:

1. Screenshot de Regression Analysis Results dialog
2. Screenshot de alignment creado con labels
3. Design Check Report
4. Regression Report (HTML o PDF)
5. Responde:
   - ¿El RMS error fue aceptable (< 0.15 m)?
   - ¿Cuántas curvas se detectaron?
   - ¿Qué mejoras geométricas propones?

**Criterios de evaluación:**
- Regresión ejecutada correctamente ✓
- RMS error razonable (< 0.20 m) ✓
- Validación AASHTO completa ✓
- Propuestas de mejora justificadas ✓

![Ejercicio 4 Resultado](../imagenes/leccion-4-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia principal entre Horizontal Regression Analysis (2026) y la función Best Fit Alignment clásica de Civil 3D?

**Pregunta 2:** ¿Qué significa un RMS error de 0.08 m en los resultados de una regresión, y es aceptable para un proyecto de reconstrucción de carretera?

**Pregunta 3:** Nombra tres casos de uso profesionales donde Horizontal Regression Analysis es especialmente útil.

**Pregunta 4:** Si en los resultados de regresión tienes 15 puntos marcados como "outliers", ¿qué posibles razones explican esto?

**Pregunta 5:** ¿Qué parámetro de tolerancia ajustarías si el alignment calculado tiene desviaciones muy grandes (> 0.30 m) respecto a los puntos topográficos?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 What's New - "Horizontal Regression Analysis"
- Civil 3D 2026 Help - "Creating Alignments from Regression"

**Tutoriales:**
- Autodesk University 2025 - "Horizontal Regression Analysis Workflows" (video)
- Civil 3D 2026 - Regression Analysis Best Practices (PDF)

**Casos de estudio:**
- Highway Reconstruction with Regression Analysis
- As-Built Verification using Civil 3D 2026

**Papers técnicos:**
- Least Squares Regression for Road Alignment Optimization
- Statistical Methods in Highway Engineering

---

## Resumen

En esta lección aprendiste:

✅ Horizontal Regression Analysis es una funcionalidad NUEVA en Civil 3D 2026
✅ Usa algoritmos de regresión estadística (mínimos cuadrados) para crear alignments
✅ Aplicaciones principales: Reconstrucción, as-built, mejoras de vías existentes
✅ Workflow: Puntos COGO → Regression Analysis → Alignment optimizado
✅ Parámetros clave: Tolerancias, curve detection, spiral settings
✅ Resultados: RMS error, desviaciones, outliers, geometría óptima
✅ Validación con AASHTO para identificar mejoras necesarias
✅ Exportación a LandXML con metadata de regresión

**Próxima Lección:** Perfiles de Superficie (Existing Ground) - Crear perfiles longitudinales desde alineamientos para visualización de terreno existente

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 60 minutos con diferentes datasets de puntos topográficos
