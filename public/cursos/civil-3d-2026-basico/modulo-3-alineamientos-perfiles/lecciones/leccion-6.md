# Lección 6: Diseño de Rasante Vertical (Finished Grade)

**Duración:** 60 minutos
**Módulo:** 3 - Alineamientos y Perfiles
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender el diseño de rasante vertical (finished grade profile)
✅ Diseñar profiles con tangentes verticales (pendientes rectas)
✅ Insertar curvas verticales parabólicas (cóncavas y convexas)
✅ Identificar y trabajar con PVIs (Points of Vertical Intersection)
✅ Aplicar criterios de diseño vertical según AASHTO (K-values)
✅ Diferenciar entre curvas cóncavas (sag) y convexas (crest)
✅ Interpretar design check warnings de pendiente y K-value
✅ Generar reportes de profile con elevaciones y pendientes

---

## Introducción

El **diseño de rasante vertical** (vertical alignment o finished grade profile) es el proceso de definir las elevaciones de proyecto de una carretera a lo largo de su alineamiento horizontal. La rasante debe equilibrar múltiples objetivos:

1. **Seguridad:** Visibilidad adecuada, pendientes controladas
2. **Comodidad:** Cambios suaves de pendiente, curvas verticales amplias
3. **Economía:** Minimizar movimiento de tierras (corte/relleno balanceado)
4. **Drenaje:** Pendientes mínimas para escurrimiento de agua (> 0.5%)
5. **Funcionalidad:** Cumplir con accesos, puentes, intersecciones

Civil 3D permite diseñar la rasante gráficamente con herramientas intuitivas, validando automáticamente contra criterios AASHTO y generando datos de construcción.

**Componentes del diseño vertical:**
- **Tangentes verticales:** Tramos de pendiente constante
- **PVIs:** Puntos de intersección de tangentes verticales
- **Curvas verticales:** Curvas parabólicas para transición suave entre tangentes
- **K-value:** Parámetro de diseño de curvas verticales (distancia de visibilidad)

![Diseño rasante vertical](../imagenes/leccion-6-diseno-rasante.png)

---

## 1. Conceptos de Diseño Vertical

### 1.1 Tangentes Verticales

Una **tangente vertical** es un tramo de rasante con pendiente constante (línea recta en profile view).

**Pendiente (grade):**
Cambio de elevación por unidad de distancia horizontal, expresado en porcentaje.

**g = (Δh / Δd) × 100%**

Donde:
- Δh = Cambio de elevación (metros)
- Δd = Distancia horizontal (metros)

**Ejemplo:**
- Estación 0+000: Elevación 1250.00 m
- Estación 1+000: Elevación 1265.00 m
- Δh = 1265.00 - 1250.00 = 15.00 m
- Δd = 1000.00 m
- g = (15.00 / 1000.00) × 100% = **+1.50%** (subida)

**Signo de pendiente:**
- **Positiva (+):** Subida (elevación aumenta)
- **Negativa (-):** Bajada (elevación disminuye)
- **Cero (0%):** Horizontal (no recomendable, problemas de drenaje)

![Tangentes verticales](../imagenes/leccion-6-tangentes-verticales.png)

### 1.2 Pendientes Máximas según AASHTO

**Criterio:** Pendiente máxima depende de velocidad de diseño y tipo de terreno.

**Tabla AASHTO - Pendientes Máximas:**

| Velocidad | Terreno Plano | Terreno Ondulado | Terreno Montañoso |
|-----------|---------------|------------------|-------------------|
| 30 km/h   | 9%            | 12%              | 14%               |
| 40 km/h   | 9%            | 11%              | 13%               |
| 50 km/h   | 8%            | 10%              | 12%               |
| 60 km/h   | 8%            | 9%               | 11%               |
| 70 km/h   | 7%            | 8%               | 10%               |
| 80 km/h   | 6%            | 7%               | 9%                |
| 90 km/h   | 6%            | 7%               | 8%                |
| 100 km/h  | 5%            | 6%               | 7%                |
| 110 km/h  | 4%            | 5%               | 6%                |
| 120 km/h  | 3%            | 4%               | 5%                |

**Pendiente mínima:**
**0.5%** para drenaje adecuado (preferible ≥ 1% en zonas lluviosas).

**Excepción:**
0% permitido en secciones urbanas con cordones y cunetas (drenaje por bombeo transversal).

### 1.3 PVI - Point of Vertical Intersection

Un **PVI** es el punto donde dos tangentes verticales se intersectan (si se prolongaran).

**Analogía:**
En diseño horizontal tienes PIs (points of intersection) donde tangentes horizontales se intersectan. En diseño vertical tienes PVIs.

**Elementos del PVI:**
- **Station:** Estación del PVI
- **Elevation:** Elevación del PVI
- **Grade In:** Pendiente de tangente que entra
- **Grade Out:** Pendiente de tangente que sale
- **Grade Change:** Diferencia algebraica (|Grade Out - Grade In|)

**Ejemplo:**
- Station: 1+250.00
- Elevation: 1255.00 m
- Grade In: +2.5%
- Grade Out: -1.5%
- Grade Change: |-1.5 - (+2.5)| = 4.0%

![PVI components](../imagenes/leccion-6-pvi-components.png)

---

## 2. Curvas Verticales Parabólicas

### 2.1 ¿Por Qué Curvas Parabólicas?

Cambios bruscos de pendiente (ángulos agudos en PVIs) causan:
- Incomodidad al conductor (cambio súbito de aceleración vertical)
- Reducción de visibilidad (vehículo "desaparece" tras crest)
- Drenaje deficiente en puntos bajos

**Solución:**
Insertar **curva vertical parabólica** que suaviza la transición entre tangentes.

**¿Por qué parábola?**
- Tasa de cambio de pendiente constante (confort)
- Geometría simple de calcular
- Estándar internacional (AASHTO)

### 2.2 Tipos de Curvas Verticales

**1. Curva Cóncava (Sag Curve):**
- Forma de "U"
- Punto bajo del profile
- Grade In negativa, Grade Out positiva (o menos negativa)
- Ejemplo: Paso deprimido, valle

**Diseño crítico:** Visibilidad nocturna (distancia iluminada por faros)

**2. Curva Convexa (Crest Curve):**
- Forma de "∩" invertida
- Punto alto del profile
- Grade In positiva, Grade Out negativa (o menos positiva)
- Ejemplo: Cima de colina

**Diseño crítico:** Distancia de visibilidad de frenado (ver obstáculo a tiempo)

![Crest vs Sag](../imagenes/leccion-6-crest-vs-sag.png)

### 2.3 Elementos de Curva Vertical

**PVC (Point of Vertical Curvature):**
- Inicio de curva vertical
- Donde tangente de entrada se conecta a curva

**PVI (Point of Vertical Intersection):**
- Intersección teórica de tangentes
- Está en el medio de la curva (horizontalmente)

**PVT (Point of Vertical Tangency):**
- Final de curva vertical
- Donde curva se conecta a tangente de salida

**L (Curve Length):**
- Longitud horizontal de la curva (metros)
- Distancia de PVC a PVT

**K-value:**
- Parámetro de diseño: **K = L / A**
- Donde A = Grade Change (cambio algebraico de pendiente en %)
- Ejemplo: L = 200 m, A = 4% → K = 200/4 = 50

**r (Rate of Change):**
- Tasa de cambio de pendiente: **r = A / L**
- En %/metro

![Curva vertical elements](../imagenes/leccion-6-curva-vertical-elements.png)

---

## 3. K-Value y Criterios de Diseño AASHTO

### 3.1 ¿Qué es el K-Value?

**K-value** es la longitud de curva vertical requerida por cada 1% de cambio de pendiente.

**K = L / A**

**Interpretación:**
- K = 50 significa: Se requieren 50 metros de curva por cada 1% de cambio de pendiente
- Si cambio es 4%, entonces L = 50 × 4 = 200 metros

### 3.2 K-Values Mínimos según AASHTO

**Para Curvas Crest (Convexas) - Distancia de Visibilidad de Frenado:**

| Velocidad | Distancia Visibilidad (m) | K Mínimo |
|-----------|---------------------------|----------|
| 30 km/h   | 35                        | 3        |
| 40 km/h   | 50                        | 5        |
| 50 km/h   | 65                        | 7        |
| 60 km/h   | 85                        | 11       |
| 70 km/h   | 105                       | 17       |
| 80 km/h   | 130                       | 26       |
| 90 km/h   | 160                       | 39       |
| 100 km/h  | 185                       | 52       |
| 110 km/h  | 220                       | 73       |
| 120 km/h  | 250                       | 95       |

**Para Curvas Sag (Cóncavas) - Distancia de Iluminación Nocturna:**

| Velocidad | K Mínimo |
|-----------|----------|
| 30 km/h   | 7        |
| 40 km/h   | 10       |
| 50 km/h   | 13       |
| 60 km/h   | 17       |
| 70 km/h   | 21       |
| 80 km/h   | 26       |
| 90 km/h   | 31       |
| 100 km/h  | 37       |
| 110 km/h  | 43       |
| 120 km/h  | 50       |

**Uso profesional:**
- K mínimo: Solo en condiciones topográficas muy restrictivas
- K recomendable: 1.5 × K mínimo (mejor comodidad y seguridad)

### 3.3 Cálculo de Longitud de Curva Vertical

**Ejemplo de diseño:**

**Datos:**
- Velocidad de diseño: 80 km/h
- PVI estación: 1+250.00, elevación 1255.00 m
- Grade In: +3.0%
- Grade Out: -2.0%
- Tipo de curva: Crest (convexa)

**Paso 1: Cambio algebraico**
A = |Grade Out - Grade In| = |-2.0 - (+3.0)| = 5.0%

**Paso 2: K mínimo AASHTO**
Para 80 km/h crest: K = 26

**Paso 3: K recomendable**
K = 1.5 × 26 = 39

**Paso 4: Longitud de curva**
L = K × A = 39 × 5.0 = 195 m

**Redondeo profesional:**
L = 200 m (múltiplo de 10 o 20)

**Paso 5: Ubicación de PVC y PVT**
- PVC = PVI Station - (L/2) = 1+250 - 100 = 1+150.00
- PVT = PVI Station + (L/2) = 1+250 + 100 = 1+350.00

---

## 4. Diseñar Profile en Civil 3D

### 4.1 Profile Creation Tools

**Requisitos:**
1. Alignment horizontal creado
2. Profile view ya creado mostrando EG (existing ground)

**Paso 1:** Selecciona profile view

**Paso 2:** Ribbon contextual: **Profile View** > Modify View > **Profile Creation Tools**

![Profile Creation Tools menu](../imagenes/leccion-6-profile-creation-tools.png)

Se abre **Profile Layout Tools** toolbar.

### 4.2 Cuadro "Create Design Profile"

**General tab:**

**Name:** FG - Finished Grade (Rasante de Proyecto)

**Profile Style:** Design Profile (típicamente línea roja)

**Profile Label Set:** Complete Label Set

**Design Criteria tab:**

**Use criteria-based design:** ✓ Activado

**Design criteria file:** AASHTO 2011 Metric.xml

**Starting design speed:** 80 km/h

**Use design check sets:** ✓ Activado

**Click OK**

**Resultado:**
Profile Layout Tools toolbar se activa para diseñar.

![Create Design Profile dialog](../imagenes/leccion-6-create-design-profile-dialog.png)

### 4.3 Profile Layout Tools - Toolbar

**Herramientas de diseño:**

**1. Draw Tangents:**
- Herramienta principal
- Click puntos para crear tangentes verticales
- Civil 3D calcula pendientes automáticamente

**2. Draw Tangents with Curves:**
- Similar, pero inserta curvas verticales automáticamente en PVIs

**3. Insert PVI:**
- Agrega PVI en tangente existente

**4. Delete PVI:**
- Elimina PVI y curva asociada

**5. More Free Vertical Curve:**
- Insertar curva manualmente entre dos tangentes

**6. Profile Grid View:**
- Vista tabular de PVIs y curvas

**7. Profile Report:**
- Generar reporte de elevaciones

![Profile Layout Tools](../imagenes/leccion-6-profile-layout-tools.png)

### 4.4 Diseñar con Draw Tangents

**Método básico sin curvas (luego las agregamos):**

**Paso 1:** Profile Layout Tools > **Draw Tangents**

**Paso 2:** Civil 3D pide puntos:

**Prompt:** "Specify start point:"

**Click en profile view** en la estación de inicio (ej: 0+000)

Civil 3D muestra elevation en ese punto (puedes ajustar).

**Paso 3:** "Specify grade or next point:"

**Opciones:**

**Opción A: Click siguiente punto** (Civil 3D calcula grade automáticamente)

**Opción B: Type grade:** Escribe "2.5" para +2.5% pendiente

**Paso 4:** Continúa agregando puntos (PVIs)

**Typical workflow:**
1. Click punto inicial (0+000, elev 1245.00)
2. Type "2.0" (pendiente +2.0%)
3. Click punto en estación 1+200 (elev se calcula)
4. Type "-1.5" (pendiente -1.5%)
5. Click punto final (2+500)
6. Press Enter para terminar

**Resultado:**
Tangentes verticales creadas, PVIs visibles (pero sin curvas todavía).

![Draw Tangents](../imagenes/leccion-6-draw-tangents.png)

### 4.5 Insertar Curvas Verticales

**Método 1: Automático con K-value**

**Paso 1:** Profile Layout Tools > **Vertical Curve Settings** (ícono de engranaje)

**Curve Settings:**

**Curve Type:** Parabolic

**K Value Method:**
- Automatic (usa design criteria file AASHTO)
- O especifica K manualmente (ej: 40)

**Paso 2:** Profile Layout Tools > **Insert PVI and Curves** (si no usaste "Draw Tangents with Curves")

**Paso 3:** Click en PVI existente

**Paso 4:** Civil 3D calcula:
- Tipo de curva (crest vs sag según grades)
- K-value según AASHTO para velocidad de diseño
- Longitud de curva: L = K × A
- Inserta curva parabólica

**Resultado:**
Curva vertical visible en profile view con PVC y PVT marcados.

**Método 2: Curva de longitud específica**

**Paso 1:** Profile Layout Tools > **More Free Vertical Curve** > **Free Vertical Curve (PVI based)**

**Paso 2:** Click en PVI

**Paso 3:** Cuadro "Free Vertical Curve"

**Curve Length:** 200.00 m (especificas longitud directamente)

**OK**

**Uso:**
Cuando quieres control total de la longitud (independiente de K-value).

![Insert Vertical Curve](../imagenes/leccion-6-insert-vertical-curve.png)

---

## 5. Edición de Profile con Grips

### 5.1 Grips Dinámicos

Después de crear design profile, aparecen **grips** (puntos de control) en:

**Grips circulares azules en PVIs:**
- Arrastra verticalmente: Cambia elevación del PVI
- Arrastra horizontalmente: Cambia station del PVI (mueve PVI lateralmente)

**Grips cuadrados en PVC/PVT:**
- Arrastra: Cambia longitud de curva vertical

**Grips triangulares en tangentes:**
- Arrastra: Cambia pendiente de tangente

**Edición en tiempo real:**
- Cambios instantáneos
- Labels se actualizan automáticamente
- Design criteria warnings aparecen si violas normas

![Profile Grips](../imagenes/leccion-6-profile-grips.png)

### 5.2 Profile Grid View - Edición Tabular

**Para edición precisa con valores numéricos:**

**Paso 1:** Profile Layout Tools > **Profile Grid View**

**Vista de tabla:**

| PVI | Station | Elevation | Grade In | Grade Out | Curve Type | Curve Length | K-value |
|-----|---------|-----------|----------|-----------|------------|--------------|---------|
| 1   | 0+000   | 1245.00   | N/A      | +2.00%    | N/A        | N/A          | N/A     |
| 2   | 1+250   | 1270.00   | +2.00%   | -1.50%    | Crest      | 200.00       | 57      |
| 3   | 2+500   | 1251.25   | -1.50%   | N/A       | N/A        | N/A          | N/A     |

**Editar valores:**
- Click en celda "Elevation" de PVI 2 > Cambia a 1268.00
- Click en celda "Curve Length" > Cambia a 220.00
- Geometry se actualiza instantáneamente

**Agregar/eliminar PVIs:**
- Click derecho en fila > Insert PVI Before/After
- Click derecho > Delete PVI

![Profile Grid View](../imagenes/leccion-6-profile-grid-view.png)

### 5.3 Profile Properties - Entity Editor

**Para editar PVI o curva individual:**

**Paso 1:** Profile Layout Tools > **Pick** tool

**Paso 2:** Click en PVI o curva específica

**Paso 3:** Se abre **Profile Vertical Curve Properties** (si es curva)

**Editable:**
- Curve Length
- K-value (si cambias K, length se recalcula)
- Pass-through points (forzar que curve pase por elevación específica)

**Constraints:**
- Lock length (fijar longitud)
- Lock K-value (fijar K)

**Apply** > **OK**

---

## 6. Design Criteria Warnings - Validación

### 6.1 Interpretación de Warnings

**Colores en profile:**

**Verde:** Cumple norma AASHTO ✓
**Amarillo:** Warning (debajo de recomendable, pero sobre mínimo) ⚠
**Rojo:** Error crítico (viola mínimo absoluto) ✗

**Tipos de warnings comunes:**

**1. Grade exceeds maximum:**
- Pendiente mayor a máxima permitida para velocidad
- Ejemplo: 7% en carretera de 100 km/h (max 5%)
- Solución: Reducir pendiente o justificar excepción

**2. K-value below minimum:**
- Curva vertical muy corta para velocidad
- Ejemplo: K = 20 en crest de 80 km/h (min = 26)
- Solución: Aumentar longitud de curva

**3. Curve length below recommended:**
- Curva cumple mínimo pero es menor a recomendable
- Warning amarillo, no crítico

**4. Grade less than minimum:**
- Pendiente < 0.5% (drenaje insuficiente)
- Solución: Aumentar pendiente o justificar (zona urbana con cunetas)

### 6.2 Design Check Report para Profiles

**Generar reporte:**

**Paso 1:** Selecciona design profile (FG)

**Paso 2:** Ribbon contextual: **Profile** > Analyze > **Design Check Report**

**Paso 3:** Civil 3D genera tabla:

| Station | Item         | Severity | Actual Value | Required Value |
|---------|--------------|----------|--------------|----------------|
| 1+250   | Crest K-val  | Warning  | 45           | 52 (recom)     |
| 1+850   | Grade        | Critical | 7.5%         | 6.0% (max)     |

**Color coding:**
- Rojo: Critical (debe corregirse)
- Amarillo: Warning (revisar)
- Verde: OK

**Acción:**
Corregir errores críticos, revisar warnings con criterio profesional.

![Design Check Report](../imagenes/leccion-6-design-check-report.png)

---

## 7. Profile Labels y Anotación

### 7.1 Tipos de Profile Labels para Design

**1. PVI Labels:**
- Station, elevation, grades in/out

**2. Curve Labels:**
- Curve type (crest/sag), length, K-value

**3. Grade Break Labels:**
- Cambios de pendiente

**4. Station Elevation Labels:**
- Elevación de proyecto en estaciones específicas

**5. Vertical Geometry Labels:**
- PVC, PVI, PVT con datos completos

### 7.2 Agregar Labels Completas

**Paso 1:** Selecciona design profile (línea roja FG)

**Paso 2:** Ribbon > **Profile** > Labels & Tables > **Add Profile Labels**

**Paso 3:** Cuadro "Add Labels"

**Profile Geometry Points:**
- Type: PVI
- Style: Station, Elevation, and Grades
- Add

**Crest/Sag Curves:**
- Type: Crest Curves
- Style: Curve Length and K-value
- Add

**Paso 4:** Labels se aplican automáticamente a todos los PVIs y curvas

**Resultado:**
Anotación completa del profile con datos de diseño.

![Profile Labels Complete](../imagenes/leccion-6-profile-labels-complete.png)

### 7.3 Profile Report - Tabla de Elevaciones

**Generar tabla de construcción:**

**Paso 1:** Profile Layout Tools > **Profile Report**

**Paso 2:** Cuadro "Profile Report"

**Station Range:** 0+000 to 2+500

**Increment:** 20.00 m (elevaciones cada 20 m)

**Paso 3:** Click **OK**

**Resultado:**
Archivo TXT o tabla en drawing con:

```
PROFILE REPORT
Alignment: Carretera CR-80
Profile: FG - Finished Grade

Station    Elevation    Grade
0+000      1245.00      N/A
0+020      1245.40      +2.00%
0+040      1245.80      +2.00%
...
1+250      1270.00      +2.00% → -1.50% (PVI)
...
2+500      1251.25      -1.50%
```

**Uso:**
Tabla de replanteo para construcción (estacado de rasante).

---

## Ejercicio Práctico 6

**Objetivo:** Diseñar rasante vertical completa con curvas verticales según AASHTO.

**Archivo:** `Highway-Vertical-Design.dwg` (contiene alignment, superficie EG, y profile view con EG profile ya creado)

**Requisitos del diseño:**
- Velocidad de diseño: 80 km/h
- Terreno: Ondulado
- Pendiente máxima: 7% (AASHTO terreno ondulado 80 km/h)
- Pendiente mínima: 0.5%
- K-values según AASHTO 2011

### Tareas:

**Tarea 1: Análisis del terreno existente**

1. Abre `Highway-Vertical-Design.dwg`
2. Observa profile view con EG (terreno natural en verde)
3. Identifica visualmente:
   - Puntos altos (crests)
   - Puntos bajos (sags)
   - Zonas de pendiente pronunciada

**Tarea 2: Crear Design Profile**

4. Con profile view seleccionado, Profile Creation Tools
5. Create Design Profile:
   - Name: FG - Rasante de Proyecto
   - Style: Design Profile (rojo)
   - Design speed: 80 km/h
   - Criteria file: AASHTO 2011 Metric
   - Use design checks: ✓

**Tarea 3: Diseñar tangentes verticales**

6. Draw Tangents (sin curvas inicialmente)
7. Diseña con estos parámetros:
   - **PVI 1:** Station 0+000, Elevation 1245.00 (inicio)
   - **PVI 2:** Station 0+800, Grade +2.5% (subida moderada)
   - **PVI 3:** Station 1+600, Grade -1.0% (bajada suave)
   - **PVI 4:** Station 2+400, Grade +1.5% (subida final)
   - **End:** Station 3+000 (fin)
8. Verifica visualmente que FG (rojo) se acerca razonablemente a EG (verde)

**Tarea 4: Insertar curvas verticales**

9. Vertical Curve Settings:
   - K Value Method: Automatic (AASHTO)
10. Para cada PVI intermedio (2, 3, 4):
    - Identifica tipo de curva (crest o sag)
    - Inserta curva vertical automática
11. Civil 3D calcula K-values apropiados

**Tarea 5: Verificar design criteria**

12. Revisa colores:
    - ¿Hay tangentes o curvas en rojo? (error)
    - ¿Hay amarillos? (warning)
13. Genera Design Check Report
14. Si hay errores críticos:
    - Pendiente > 7%: Reduce pendiente
    - K-value insuficiente: Aumenta longitud de curva
15. Corrige hasta tener solo verdes o amarillos (aceptables)

**Tarea 6: Refinar diseño**

16. Profile Grid View
17. Ajusta elevaciones de PVIs para:
    - Minimizar corte/relleno (FG cerca de EG)
    - Mantener criterios AASHTO
18. Observa distancia vertical entre EG y FG:
    - Rojo arriba de verde: Relleno (fill)
    - Verde arriba de rojo: Corte (cut)
19. Objetivo: Balance aproximado de corte/relleno

**Tarea 7: Documentar**

20. Add Profile Labels:
    - PVI labels (station, elevation, grades)
    - Curve labels (length, K-value)
21. Genera Profile Report (elevaciones cada 25 m)
22. Exporta a TXT

**Tarea 8: Análisis**

23. Calcula aproximadamente:
    - Volumen de corte total (zonas donde EG > FG)
    - Volumen de relleno total (zonas donde FG > EG)
    - ¿Está balanceado? (Corte ≈ Relleno ideal)

### Entregable:

1. Screenshot de profile view mostrando:
   - EG (verde) y FG (rojo)
   - Curvas verticales con labels
   - PVI labels completos
2. Design Check Report (sin errores críticos)
3. Profile Report (elevaciones cada 25 m)
4. Responde:
   - ¿Cuántos PVIs tiene tu diseño?
   - ¿Cuántas curvas crest y sag?
   - ¿Cuál es la pendiente máxima en tu diseño?
   - ¿Cuál es el K-value mínimo usado?

**Criterios de evaluación:**
- Rasante cumple AASHTO (sin rojos) ✓
- Curvas verticales apropiadas (K-values correctos) ✓
- Balance razonable de corte/relleno ✓
- Documentación completa (labels, reportes) ✓

![Ejercicio 6 Resultado](../imagenes/leccion-6-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia entre una curva vertical crest (convexa) y una curva sag (cóncava)? Da un ejemplo de cada una.

**Pregunta 2:** ¿Qué significa un K-value de 50 en una curva vertical, y cómo calculas la longitud de curva si el cambio de pendiente es 6%?

**Pregunta 3:** Según AASHTO, ¿cuál es la pendiente máxima permitida en terreno ondulado para una carretera de 80 km/h?

**Pregunta 4:** Si tienes un PVI con Grade In = +3% y Grade Out = -2%, ¿qué tipo de curva vertical insertarías (crest o sag) y por qué?

**Pregunta 5:** ¿Por qué AASHTO requiere K-values mayores para curvas crest que para curvas sag a la misma velocidad de diseño?

---

## Recursos Adicionales

**Documentación oficial:**
- AASHTO Green Book 2018 - Chapter 3: Vertical Alignment
- Autodesk Civil 3D 2026 Help - "Profiles - Design"

**Normativa:**
- AASHTO - Exhibit 3-70: Design Controls for Crest Vertical Curves
- AASHTO - Exhibit 3-74: Design Controls for Sag Vertical Curves

**Tutoriales:**
- Autodesk Civil 3D - Designing Vertical Profiles (video oficial)
- Vertical Curve Design Best Practices

**Calculadoras:**
- K-value Calculator (online tools)
- Vertical Curve Elevation Calculator

---

## Resumen

En esta lección aprendiste:

✅ Diseño de rasante vertical con tangentes de pendiente constante
✅ PVIs (Points of Vertical Intersection) conectan tangentes verticales
✅ Curvas verticales parabólicas suavizan cambios de pendiente
✅ Curvas crest (convexas) vs sag (cóncavas) con criterios diferentes
✅ K-value = L / A define longitud de curva por cambio de pendiente
✅ AASHTO especifica K mínimos según velocidad (crest > sag)
✅ Profile Layout Tools para diseñar gráficamente en Civil 3D
✅ Design criteria warnings validan pendientes y K-values
✅ Profile reports generan tablas de elevaciones para construcción

**Siguiente Módulo:** Módulo 4 - Parcelas y Grading (diseño de subdivisiones, feature lines, movimiento de tierras)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 60 minutos diseñando rasantes en diferentes tipos de terreno (plano, ondulado, montañoso)

**FELICIDADES - Has completado el Módulo 3: Alineamientos y Perfiles**
