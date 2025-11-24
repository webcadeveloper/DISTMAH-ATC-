# Lección 5: Análisis de Superficies

**Duración:** 60 minutos
**Módulo:** 2 - Puntos y Superficies Topográficas
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Realizar análisis de elevaciones con rangos de color
✅ Analizar pendientes (slopes) y visualizar áreas críticas
✅ Generar slope arrows para análisis direccional
✅ Calcular watersheds (cuencas hidrográficas)
✅ Añadir contour labels y spot elevations
✅ Calcular volúmenes entre superficies (cut & fill)
✅ Crear quick profiles para análisis rápido
✅ Simplificar superficies para optimizar performance

---

## Introducción

El **análisis de superficies** en Civil 3D transforma modelos digitales de terreno en información visual útil para diseño y toma de decisiones. Mediante códigos de color, flechas de pendiente, y cálculos automáticos, puedes identificar áreas problemáticas, optimizar drenajes, calcular movimientos de tierra, y comunicar diseños efectivamente.

Estos análisis son dinámicos: si modificas la superficie (añades puntos, breaklines, edits), los análisis se actualizan automáticamente.

**Caso real:** En un proyecto de carretera, el análisis de pendientes identifica taludes mayores a 33% (críticos para estabilidad). El análisis de watersheds determina cuencas de drenaje. El cálculo de volúmenes estima 45,000 m³ de corte y 30,000 m³ de relleno, información crítica para presupuesto y programación.

---

## 1. Análisis de Elevaciones

### 1.1 ¿Qué es Elevation Analysis?

**Elevation Analysis** colorea la superficie según rangos de elevación, creando un "mapa de calor" que muestra visualmente zonas altas, medias, y bajas.

**Uso:**
- Identificar puntos altos y bajos del terreno
- Visualizar topografía general rápidamente
- Planear ubicación de edificios (en zonas altas para evitar inundaciones)
- Determinar áreas de corte y relleno inicial

![Elevation Analysis Example](../../imagenes/leccion-2-5-elevation-analysis.png)

### 1.2 Aplicar Elevation Analysis

**Procedimiento:**

1. Selecciona superficie en Model Space
2. Ribbon → **Surface** contextual tab → **Analyze** panel
3. Click en **Elevations** dropdown → **Elevations...**

Aparece **Surface Properties** dialog en pestaña **Analysis**.

4. **Analysis type:** `Elevations` (ya seleccionado)

5. **Número de rangos:** Configura cantidad de bandas de color
   - **Number of ranges:** `5` (5 rangos de elevación)
   - Civil 3D divide automáticamente rango min-max en 5 partes iguales

**Esquema de colores:**

6. **Range Details:** Tabla con rangos
   - Columna **Minimum Elevation** - Elevación mínima del rango
   - Columna **Maximum Elevation** - Elevación máxima del rango
   - Columna **Color** - Color asignado

7. **Scheme:** Desplegable con esquemas predefinidos
   - `Land` - Verde (bajo) → Marrón (alto)
   - `Rainbow` - Espectro de colores
   - `Custom` - Personalizado

8. Selecciona esquema: `Land`

9. Click **OK**

**Resultado:**
- Superficie coloreada según elevaciones
- Leyenda automática (puedes añadir después)
- Análisis dinámico (se actualiza con cambios en superficie)

### 1.3 Personalizar Rangos de Elevación

**Modificar rangos manualmente:**

1. En **Range Details** (tabla de rangos)
2. Click en celda de **Maximum Elevation** del primer rango
3. Cambia valor (ej: de 150.50 a 150.00)
4. Presiona Tab (rangos siguientes se ajustan)

**Definir rangos específicos:**

**Ejemplo:** Proyecto con inundaciones. Quieres identificar áreas bajo elevación 151.00.

1. Range 1: Min=150.00, Max=151.00, Color=Rojo (zona de inundación)
2. Range 2: Min=151.00, Max=152.00, Color=Amarillo (zona media)
3. Range 3: Min=152.00, Max=153.00, Color=Verde (zona alta segura)

---

## 2. Análisis de Pendientes (Slopes)

### 2.1 ¿Qué es Slope Analysis?

**Slope Analysis** colorea la superficie según pendientes (gradientes), identificando áreas planas, moderadas, y empinadas.

**Uso:**
- Identificar taludes críticos (>33% difícil de estabilizar)
- Planear áreas de estacionamiento (max 5% preferible)
- Diseñar drenajes (min 2% necesario para flujo)
- Determinar accesibilidad (rampas ADA max 8.33%)

**Unidades de pendiente:**
- **Porcentaje (%)** - Común en ingeniería civil (ej: 10%)
- **Grados (°)** - Común en topografía (ej: 5.71°)
- **Relación (H:V)** - Run:Rise (ej: 10:1)

### 2.2 Aplicar Slope Analysis

**Procedimiento:**

1. Selecciona superficie
2. Ribbon → Surface tab → Analyze panel → **Slopes** dropdown → **Slopes...**

Aparece **Surface Properties - Analysis**.

3. **Analysis type:** `Slopes`

4. **Number of ranges:** `5`

5. **Scheme:** `2D Slope` (esquema de pendientes 2D)
   - Verde = Plano (0-5%)
   - Amarillo = Moderado (5-10%)
   - Naranja = Empinado (10-20%)
   - Rojo = Muy empinado (>20%)

6. Click **OK**

**Resultado:**
- Superficie coloreada según pendientes
- Áreas críticas (rojas) visibles inmediatamente

![Slope Analysis](../../imagenes/leccion-2-5-slope-analysis.png)

### 2.3 Configurar Rangos de Pendiente Críticos

**Ejemplo: Identificar pendientes problemáticas**

**Escenario:** Proyecto de urbanización. Necesitas:
- Áreas planas (<2%): No drenan bien
- Áreas moderadas (2-10%): Ideales para construcción
- Áreas empinadas (>10%): Requieren terraceo

**Configuración:**

1. Slope Analysis → Range Details
2. Range 1: 0% - 2% (Rojo - problema drenaje)
3. Range 2: 2% - 5% (Verde claro - ideal estacionamiento)
4. Range 3: 5% - 10% (Verde oscuro - ideal construcción)
5. Range 4: 10% - 20% (Amarillo - requiere diseño especial)
6. Range 5: >20% (Rojo oscuro - crítico, requiere muros)

---

## 3. Slope Arrows (Flechas de Pendiente)

### 3.1 ¿Qué son Slope Arrows?

**Slope Arrows** son flechas que muestran dirección de máxima pendiente (dirección de flujo de agua) en cada triángulo de la superficie TIN.

**Uso:**
- Análisis de drenaje superficial
- Determinar dirección de escorrentía
- Planear ubicación de zanjas/cunetas
- Identificar puntos de concentración de flujo

### 3.2 Display Slope Arrows

**Procedimiento:**

1. Selecciona superficie
2. Ribbon → Surface tab → Analyze panel → **Directions** dropdown → **Slope Arrows...**

Aparece **Surface Properties - Analysis**.

3. **Analysis type:** `Directions`

4. **Scheme:** `Slope Arrows` (flechas de pendiente)

5. **Arrow spacing:**
   - **Spacing:** `10.0` (metros - distancia entre flechas)
   - Mayor spacing = menos flechas (más limpio)
   - Menor spacing = más flechas (más detalle)

6. **Arrow symbol:**
   - Tamaño de flecha
   - Color (gradiente según pendiente)

7. Click **OK**

**Resultado:**
- Flechas apuntando hacia abajo (dirección de flujo)
- Concentración de flechas indica zonas de drenaje
- Longitud/color de flecha indica magnitud de pendiente

![Slope Arrows](../../imagenes/leccion-2-5-slope-arrows.png)

### 3.3 Interpretar Slope Arrows para Drenaje

**Lectura de flechas:**

- **Flechas convergentes** - Punto bajo, concentración de agua (ubicar boca de tormenta)
- **Flechas divergentes** - Punto alto, divisoria de aguas
- **Flechas paralelas** - Flujo uniforme (ubicar cuneta)
- **Flechas largas/rojas** - Pendiente fuerte (posible erosión)

---

## 4. Watersheds (Cuencas Hidrográficas)

### 4.1 ¿Qué son Watersheds?

**Watersheds** (cuencas o catchments) son áreas del terreno que drenan hacia un mismo punto de salida (outlet point).

**Uso:**
- Determinar área de captación para diseño de drenaje pluvial
- Calcular caudales de escorrentía (área × intensidad de lluvia)
- Planear ubicación de bocas de tormenta
- Subdividir sitio en zonas de drenaje

### 4.2 Calcular Watersheds

**Procedimiento:**

1. Selecciona superficie
2. Ribbon → Surface tab → Analyze panel → **Watersheds** dropdown → **Watersheds...**

Aparece **Surface Properties - Analysis**.

3. **Analysis type:** `Watersheds`

4. **Type:** `Multi-Drain` (múltiples puntos de drenaje)
   - **Multi-Drain** - Identifica todas las cuencas automáticamente
   - **Single-Drain** - Define una cuenca específica

5. Click **OK**

6. Civil 3D analiza superficie y identifica watersheds
7. Cada cuenca se colorea diferente
8. Muestra boundary lines entre cuencas (divisorias de aguas)

![Watersheds Analysis](../../imagenes/leccion-2-5-watersheds.png)

### 4.3 Watersheds por Punto Específico

**Determinar cuenca que drena a punto específico (ej: boca de tormenta existente):**

**Procedimiento:**

1. Surface Properties → Analysis
2. **Analysis type:** `Watersheds`
3. **Type:** `Single-Drain`
4. Click **OK**
5. Command line: `Specify drainage target point:`
6. Click en punto de drenaje deseado (ej: boca de tormenta)
7. Civil 3D calcula y colorea solo la cuenca que drena a ese punto

**Datos de Watershed:**
- Área de cuenca (hectáreas o acres)
- Perímetro
- Punto de drenaje (outlet)

---

## 5. Contour Labels y Spot Elevations

### 5.1 Añadir Contour Labels

**Contour Labels** etiquetan curvas de nivel con su elevación.

**Procedimiento:**

1. Ribbon → **Annotate** tab → **Labels & Tables** panel
2. **Add Labels** dropdown → **Surface** → **Contour - Multiple**

3. Command line: `Select a surface:`
4. Click en superficie

5. Command line: `Specify label location:`
6. Click en una curva de nivel (contour)
7. Etiqueta creada mostrando elevación

**Etiquetas dinámicas:**
- Si superficie cambia, etiquetas se actualizan automáticamente
- Label Style controla apariencia (font, tamaño, formato)

![Contour Labels](../../imagenes/leccion-2-5-contour-labels.png)

### 5.2 Spot Elevations

**Spot Elevations** marcan elevación en puntos específicos de superficie.

**Procedimiento:**

1. Ribbon → Annotate → Add Labels → **Surface** → **Spot Elevation**

2. Command line: `Select a surface:`
3. Click en superficie

4. Command line: `Specify label location:`
5. Click en ubicación deseada
6. Civil 3D extrae elevación de superficie en ese punto
7. Etiqueta muestra elevación exacta

**Uso:**
- Marcar elevaciones en esquinas de edificios
- Documentar puntos de control
- Anotar elevaciones críticas en planos

---

## 6. Volúmenes entre Superficies (Cut & Fill)

### 6.1 ¿Qué es Cut & Fill?

**Cut & Fill** compara dos superficies (existente vs propuesta) y calcula:
- **Cut (Corte)** - Volumen de tierra a excavar
- **Fill (Relleno)** - Volumen de tierra a rellenar
- **Net Volume** - Diferencia neta (Cut - Fill)

**Uso crítico:**
- Estimar cantidades para presupuesto
- Balancear movimiento de tierras (objetivo: Net ≈ 0)
- Planear rutas de acarreo de material
- Calcular costos de construcción

![Cut Fill Analysis](../../imagenes/leccion-2-5-cut-fill.png)

### 6.2 Calcular Volúmenes

**Prerequisito:** Necesitas 2 superficies:
- `EG-Existing-Ground` - Terreno existente
- `FG-Proposed-Design` - Terreno propuesto

**Procedimiento:**

1. Ribbon → **Analyze** tab → **Volumes and Materials** panel
2. Click en **Volumes Dashboard**

Aparece **Volumes Dashboard** (Panorama).

3. Click derecho en tabla → **Create New Volume Entry...**

Aparece **Create Volume Entry** dialog.

4. **Name:** `Excavacion-Proyecto`
5. **Base Surface:** `EG-Existing-Ground` (superficie base - existente)
6. **Comparison Surface:** `FG-Proposed-Design` (superficie comparación - propuesta)
7. Click **OK**

**Volumes Dashboard muestra:**

| Surface | Cut (m³) | Fill (m³) | Net (m³) | Cumulative Cut | Cumulative Fill |
|---------|----------|----------|----------|----------------|-----------------|
| Excavacion-Proyecto | 5,234.56 | 3,876.23 | +1,358.33 | 5,234.56 | 3,876.23 |

**Interpretación:**
- **Cut:** 5,234.56 m³ de tierra a excavar
- **Fill:** 3,876.23 m³ de tierra a rellenar
- **Net:** +1,358.33 m³ (sobra tierra - necesitas exportar o disponer)

### 6.3 Visualizar Cut & Fill con Elevation Analysis

**Mostrar áreas de corte y relleno visualmente:**

**Procedimiento:**

1. Crea **Surface de Diferencia:**
   - Ribbon → Home → Create Design → **Surface** → **Create Surface**
   - Name: `DIFF-Cut-Fill`
   - Surface Properties → Definition → **Edits** → **Paste Surface**
   - Base Surface: `EG-Existing-Ground`
   - Operation: **Subtract** (restar)
   - Surface to paste: `FG-Proposed-Design`

2. Aplica **Elevation Analysis** a `DIFF-Cut-Fill`:
   - Rangos positivos (+) = Cut (corte - color rojo)
   - Rangos negativos (-) = Fill (relleno - color azul)
   - Rango 0 = No change (sin cambio - color blanco)

**Resultado:** Mapa visual mostrando zonas de corte (rojas) y relleno (azules).

---

## 7. Quick Profile (Perfil Rápido)

### 7.1 ¿Qué es Quick Profile?

**Quick Profile** genera perfil longitudinal temporal a lo largo de cualquier línea sobre la superficie, sin necesidad de crear alineamiento.

**Uso:**
- Análisis rápido de pendientes
- Verificar elevaciones a lo largo de un eje
- Estudios preliminares antes de diseño formal

### 7.2 Crear Quick Profile

**Procedimiento:**

1. Dibuja **Line** o **Polyline** sobre superficie en la dirección deseada
   - Command: `LINE` o `PLINE`
   - Dibuja línea de inicio a fin del recorrido

2. Ribbon → **Analyze** tab → **Ground Data** panel
3. Click en **Quick Profile**

4. Command line: `Select a line, arc, or polyline:`
5. Selecciona tu línea

6. Aparece **Create Quick Profile** dialog:
   - **Surface:** Selecciona superficie a perfilar
   - **Name:** `Quick-Profile-Analysis`
   - **Profile View Style:** Estilo de vista de perfil

7. Click **OK**

8. Command line: `Specify profile view origin:`
9. Click donde quieres insertar el perfil (generalmente abajo del plan)

**Resultado:**
- Profile View creado mostrando elevaciones a lo largo de la línea
- Perfil temporal (no asociado a alineamiento)
- Útil para análisis rápido

![Quick Profile](../../imagenes/leccion-2-5-quick-profile.png)

---

## 8. Surface Simplification (Optimización)

### 8.1 ¿Por qué simplificar superficies?

**Problema:** Superficies con millones de puntos (DEM, nubes de puntos láser) ralentizan Civil 3D.

**Solución:** **Simplify Surface** reduce triángulos sin perder precisión significativa.

### 8.2 Métodos de Simplificación

**Método 1: Maximum Triangle Length**

Limita longitud máxima de triángulos.

**Procedimiento:**

1. Surface Properties → **Definition** tab
2. **Build Options:**
   - ✓ **Use maximum triangle length**
   - **Maximum triangle length:** `10.0` metros
3. Click **OK**

**Resultado:** Civil 3D elimina triángulos más largos, reduciendo cantidad total.

**Método 2: Simplify Surface (Novedad mejorada 2026)**

**Procedimiento:**

1. Click derecho en superficie (Prospector) → **Simplify Surface...**

Aparece **Simplify Surface** dialog.

2. **Method:** `Edge Contraction` (contracción de aristas)
3. **Maximum change in elevation:** `0.10` metros (tolerancia)
   - Mayor tolerancia = más simplificación, menos precisión
   - Menor tolerancia = menos simplificación, más precisión
4. **Preview** - Muestra resultado antes de aplicar
5. Click **OK**

**Resultado:**
- Superficie simplificada
- Triángulos reducidos (ej: de 500,000 a 50,000)
- Performance mejorado significativamente
- Pérdida de precisión < tolerancia especificada

### 8.3 Comparar Superficies Original vs Simplificada

**Verificar pérdida de precisión:**

1. Crea volumen comparison entre superficie original y simplificada
2. Verifica Net Volume ≈ 0 (diferencia mínima)
3. Si diferencia es aceptable, usa superficie simplificada

---

## Ejercicio Práctico 5

**Objetivo:** Realizar análisis completo de superficie: elevations, slopes, watersheds, y volúmenes.

### Escenario

Proyecto de explanación. Tienes superficie de terreno existente y propuesta. Debes analizar pendientes, identificar cuencas, y calcular volúmenes de movimiento de tierras.

### Parte 1: Preparar Superficies

(Asume que ya tienes superficie `EG-Existing-Ground` del ejercicio 4)

1. Crea segunda superficie para terreno propuesto:
   - Name: `FG-Proposed-Design`
   - Copia puntos de EG pero añade +1.0 metro a todas las elevaciones (terreno propuesto es 1m más alto)

### Parte 2: Elevation Analysis

2. Selecciona `EG-Existing-Ground`
3. Ribbon → Surface → Analyze → Elevations
4. Number of ranges: `5`
5. Scheme: `Land`
6. Click OK
7. Screenshot de superficie con elevation banding

### Parte 3: Slope Analysis

8. Selecciona `EG-Existing-Ground`
9. Ribbon → Surface → Analyze → Slopes
10. Number of ranges: `4`
11. Configura rangos:
    - 0-5%: Verde (plano)
    - 5-10%: Amarillo (moderado)
    - 10-20%: Naranja (empinado)
    - >20%: Rojo (muy empinado)
12. Click OK
13. Screenshot identificando áreas empinadas (rojas)

### Parte 4: Slope Arrows

14. Surface → Analyze → Directions → Slope Arrows
15. Spacing: `15.0` metros
16. Click OK
17. Observa dirección de flujo
18. Identifica puntos de concentración (flechas convergentes)

### Parte 5: Watersheds

19. Surface → Analyze → Watersheds
20. Type: `Multi-Drain`
21. Click OK
22. Civil 3D calcula cuencas
23. Screenshot mostrando cuencas en diferentes colores
24. Identifica cuántas cuencas principales existen

### Parte 6: Volúmenes Cut & Fill

25. Analyze tab → Volumes Dashboard
26. Create New Volume Entry:
    - Name: `Cut-Fill-Analysis`
    - Base: `EG-Existing-Ground`
    - Comparison: `FG-Proposed-Design`
27. Click OK
28. Anota resultados:
    - Cut: ________ m³
    - Fill: ________ m³
    - Net: ________ m³

### Parte 7: Quick Profile

29. Dibuja línea atravesando sitio de norte a sur
30. Analyze → Quick Profile
31. Selecciona línea
32. Selecciona superficie `EG-Existing-Ground`
33. Inserta Profile View
34. Screenshot del perfil

**Entregables:**
- 4 screenshots (Elevation, Slope, Watersheds, Quick Profile)
- Reporte de volúmenes (Cut, Fill, Net)
- Interpretación: ¿El proyecto está balanceado? ¿Sobra o falta material?

![Ejercicio 5 - Análisis](../../imagenes/leccion-2-5-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Qué información proporciona un Slope Analysis que un Elevation Analysis no da?

**Pregunta 2:** ¿Qué indican las slope arrows convergentes en un área de superficie?

**Pregunta 3:** ¿Cuál es la diferencia entre Cut volume y Net volume?

**Pregunta 4:** ¿Qué representa un watershed en análisis de superficie?

**Pregunta 5:** ¿Por qué simplificarías una superficie con millones de puntos?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 - Surface Analysis Guide
- Watersheds and Drainage Analysis Tutorial
- Volumes Calculation Best Practices

**Herramientas complementarias:**
- Hydraflow Express (drenaje pluvial integrado con Civil 3D)
- AutoCAD Raster Design (procesamiento de DEM files)

---

## Resumen

En esta lección aprendiste:

✅ Elevation Analysis visualiza rangos de elevación con códigos de color
✅ Slope Analysis identifica pendientes críticas para diseño y construcción
✅ Slope Arrows muestran dirección de flujo de agua para análisis de drenaje
✅ Watersheds calculan cuencas hidrográficas y áreas de captación
✅ Contour Labels y Spot Elevations anotan elevaciones en planos
✅ Cut & Fill calcula volúmenes de corte y relleno entre superficies (existente vs propuesta)
✅ Quick Profile genera perfiles longitudinales rápidos para análisis preliminar
✅ Surface Simplification optimiza superficies grandes para mejor performance

**Próxima Lección:** Curvas de Nivel (Contours) y Etiquetado - Generación profesional de planos topográficos.

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos realizando análisis en diferentes tipos de terreno (plano, montañoso, urbano)
