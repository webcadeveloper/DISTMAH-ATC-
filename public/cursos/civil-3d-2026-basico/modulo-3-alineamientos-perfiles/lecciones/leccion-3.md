# Lección 3: Superelevation (Peralte en Curvas)

**Duración:** 60 minutos
**Módulo:** 3 - Alineamientos y Perfiles
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender la física del peralte (superelevación) en curvas horizontales
✅ Calcular superelevación según velocidad y radio de curva (AASHTO)
✅ Aplicar superelevation a alignments usando el Superelevation Wizard
✅ Configurar tablas de peralte según normas AASHTO y SCT
✅ Diseñar transiciones de bombeo normal a peralte total
✅ Editar superelevation con el Tabular Editor
✅ Visualizar superelevation en secciones transversales y corridors
✅ Generar reportes de superelevación para construcción

---

## Introducción

La **superelevación** (superelevation en inglés, también llamada **peralte**) es la inclinación transversal de la calzada en curvas horizontales. Su función es contrarrestar la fuerza centrífuga que experimenta un vehículo al circular por una curva, mejorando la seguridad, comodidad y eficiencia del tránsito.

En tramos rectos, la carretera tiene un **bombeo normal** (crown slope) de 2% hacia los lados para drenaje de agua lluvia. Al entrar en una curva, este bombeo debe transformarse gradualmente en **peralte** inclinando toda la calzada hacia el centro de la curva.

Civil 3D 2026 automatiza el cálculo y aplicación de superelevation según normas AASHTO, generando las transiciones correctas y permitiendo visualización 3D del resultado final.

**Importancia profesional:**
- Requisito obligatorio en diseño de carreteras
- Afecta seguridad vial (reduce deslizamiento lateral)
- Influye en drenaje superficial
- Impacta volúmenes de terracería (corte/relleno)
- Debe diseñarse en espirales de transición

![Superelevation en curva](../imagenes/leccion-3-superelevation-overview.png)

---

## 1. Física del Peralte

### 1.1 Fuerzas en un Vehículo en Curva

Cuando un vehículo circula por una curva horizontal, experimenta:

**1. Fuerza Centrífuga (Fc):**
- Tiende a sacar el vehículo hacia afuera de la curva
- Proporcional a: masa, velocidad², e inversamente al radio
- **Fc = m × V² / R**

**2. Fricción Lateral (Ff):**
- Resistencia entre neumáticos y pavimento
- Limita la velocidad máxima en curva sin deslizar
- Coeficiente de fricción f (típicamente 0.10 - 0.15)

**3. Componente del Peso por Peralte:**
- Al inclinar la calzada, el peso del vehículo ayuda a contrarrestar la fuerza centrífuga
- Permite circular más rápido o con mayor comodidad

![Fuerzas en curva](../imagenes/leccion-3-fuerzas-curva.png)

### 1.2 Ecuación Fundamental de Superelevación

**e + f = V² / (127 × R)**

Donde:
- **e** = tasa de superelevación (decimal: 0.08 = 8%)
- **f** = coeficiente de fricción lateral (0.10 a 0.15)
- **V** = velocidad de diseño (km/h)
- **R** = radio de la curva (metros)

**Interpretación:**
Para una velocidad V y radio R dados, la suma de superelevación y fricción debe equilibrar la fuerza centrífuga.

**Diseño conservador:**
No confiamos toda la resistencia a la fricción (f), sino que aplicamos peralte (e) para que el conductor no dependa de fricción máxima (mayor seguridad en lluvia, hielo, etc.).

### 1.3 Tasas Máximas de Superelevación

**AASHTO recomienda:**

| Condición | e máxima |
|-----------|----------|
| Zona urbana | 4% - 6% |
| Zona rural | 8% |
| Autopista | 8% - 10% |
| Zona hielo/nieve frecuente | 6% |
| Zona montañosa | 10% - 12% |

**Limitaciones:**
- Peraltes muy altos causan incomodidad a vehículos lentos
- Problemas de drenaje en vehículos detenidos
- Dificultad para camiones pesados al detenerse

**México (SCT):**
Típicamente 10% máximo en carreteras tipo A y B.

---

## 2. Tablas de Superelevación AASHTO

### 2.1 Método de Distribución de e y f

AASHTO define 5 métodos para distribuir superelevación:

**Método 1:** Toda la resistencia viene de fricción (e = 0) - NO usado
**Método 2:** e y f proporcionales
**Método 3:** f constante, e variable
**Método 4:** e máxima en curvas cerradas, f se reduce
**Método 5:** e proporcional al (V²/R), hasta e máxima (más común)

**Civil 3D usa Método 5 por defecto.**

### 2.2 Tabla de Superelevación para V = 80 km/h, e máx = 8%

**Ejemplo de tabla AASHTO:**

| Radio (m) | Superelevación e (%) | Fricción f |
|-----------|----------------------|------------|
| 1000      | 2.0 (bombeo normal)  | 0.00       |
| 600       | 2.5                  | 0.02       |
| 400       | 4.0                  | 0.05       |
| 300       | 5.5                  | 0.08       |
| 250       | 6.5                  | 0.10       |
| 200       | 8.0 (máximo)         | 0.12       |
| 185       | 8.0                  | 0.14       |
| 150       | 8.0                  | 0.17       |

**Interpretación:**
- Curvas amplias (R > 1000 m): Solo bombeo normal (2%), sin peralte adicional
- Curvas medias: Peralte gradual (3-6%)
- Curvas cerradas: Peralte máximo (8%)

**Civil 3D incluye estas tablas pre-cargadas** en los archivos de design criteria (AASHTO XML).

![Tabla superelevation](../imagenes/leccion-3-tabla-superelevation.png)

---

## 3. Transición de Bombeo a Peralte

### 3.1 Secciones Típicas en Transición

**Tramo recto (antes de curva):**
- Bombeo normal: 2% hacia cada lado desde el eje
- Forma de "V" invertida o "corona" (crown)

**Inicio de transición:**
- Lado exterior de curva: Mantiene -2%
- Lado interior de curva: Comienza a subir desde -2% hacia 0%

**Punto de sección plana (nivel):**
- Toda la calzada a 0% transversal
- Sección completamente horizontal

**Transición a peralte completo:**
- Calzada continúa inclinándose hacia el centro de curva
- Lado exterior: Cambia de -2% a +6%
- Lado interior: Cambia de -2% a +6%
- Sección final: 6% hacia el centro de curva (peralte total)

**Curva circular:**
- Peralte constante (ej: 6%) durante toda la curva circular

**Salida de curva:**
- Transición reversa: Peralte → bombeo normal

![Transición de peralte](../imagenes/leccion-3-transicion-peralte.png)

### 3.2 Longitud de Transición

La transición debe ser lo suficientemente larga para:
1. Comodidad del conductor (cambio gradual)
2. Apariencia estética
3. Drenaje apropiado

**AASHTO recomienda:**

**Ltransición = (ancho de carril × diferencia de pendiente) / tasa de giro**

**Tasa de giro máxima:**
- 1:200 (0.005) - Carreteras alta velocidad
- 1:175 (0.0057) - Carreteras media velocidad
- 1:150 (0.0067) - Calles urbanas

**Ejemplo:**
- Ancho de carril: 3.65 m
- Cambio de pendiente: De -2% a +6% = 8% = 0.08
- Tasa de giro: 1:200 = 0.005

**L = (3.65 × 0.08) / 0.005 = 58.4 m** (redondear a 60 m)

**En Civil 3D con espirales:**
La transición de peralte se aplica a lo largo de la espiral de transición (spiral length), por lo que Ls debe ser ≥ Ltransición.

---

## 4. Superelevation Wizard en Civil 3D

### 4.1 Requisitos Previos

Antes de aplicar superelevation:

1. **Alignment horizontal creado** con curvas y espirales
2. **Assembly** definido (sección transversal típica)
3. **Ancho de carriles** conocido

**Opcional pero recomendado:**
- Profile (perfil longitudinal) ya creado
- Corridor preliminar (para visualización)

### 4.2 Activar Superelevation Wizard

**Paso 1:** Selecciona alignment en el drawing

**Paso 2:** Ribbon contextual: **Alignment** > Modify panel > **Superelevation** dropdown > **Calculate/Edit Superelevation**

![Superelevation Wizard access](../imagenes/leccion-3-superelevation-wizard-access.png)

**Paso 3:** Se abre **Superelevation Wizard** con 5 pasos

### 4.3 Wizard Paso 1: Roadway Type

**Opciones:**

**1. Undivided Crowned Road (más común):**
- Carretera de dos sentidos sin separador central
- Bombeo desde el eje hacia ambos lados
- Peralte rota toda la sección

**2. Undivided Planar Road:**
- Calzada plana (sin bombeo)
- Todo a 0% en rectas
- Usado en calles urbanas

**3. Divided Crowned Road:**
- Autopista con separador central
- Cada calzada tiene su propio bombeo
- Peralte se aplica independientemente a cada dirección

**4. Divided Planar Road:**
- Autopista con calzadas planas

**Selecciona:** Undivided Crowned Road

**Configuración adicional:**

- **Normal Crown:** 2% (bombeo normal)
- **Normal Lane Slope:** -2% (pendiente de carriles)
- **Normal Shoulder Slope:** -4% (pendiente de acotamiento)

**Next >**

![Wizard Step 1](../imagenes/leccion-3-wizard-step-1.png)

### 4.4 Wizard Paso 2: Lanes

Definir número y ancho de carriles.

**Left Side (lado izquierdo del alignment):**
- Number of lanes: 1
- Width: 3.65 m

**Right Side (lado derecho):**
- Number of lanes: 1
- Width: 3.65 m

**Shoulders (acotamientos):**
- Left shoulder: 1.50 m
- Right shoulder: 1.50 m

**Total width:** 10.30 m (3.65 + 3.65 + 1.50 + 1.50)

**Next >**

### 4.5 Wizard Paso 3: Attainment

Define DÓNDE ocurre la transición de peralte en relación a la curva.

**Opciones:**

**1. Begin Alignment Transition:**
Dónde comienza la transición desde bombeo normal:
- At start of spiral (TS) - Recomendado
- Before start of curve

**2. End Alignment Transition:**
Dónde termina la transición a peralte completo:
- At end of spiral (SC) - Recomendado
- At start of curve (PC)

**Selecciona:**
- Begin: At start of spiral (TS)
- End: At end of spiral (SC)

**Razón:**
La longitud de espiral Ls se diseñó específicamente para albergar la transición de peralte.

**Next >**

![Wizard Step 3](../imagenes/leccion-3-wizard-step-3.png)

### 4.6 Wizard Paso 4: Transition

Define CÓMO ocurre la transición (qué lado de la carretera gira primero).

**Métodos de transición:**

**1. Shoulder-Shoulder (más común AASHTO):**
- Ambos acotamientos rotan primero a pendiente plana
- Luego carriles rotan a peralte
- Más suave, mejor drenaje

**2. Shoulder-Lane:**
- Acotamiento exterior rota primero
- Luego carril exterior
- Usado en curvas cerradas

**3. Crowned-Crowned:**
- Mantiene bombeo lo más posible
- Transición abrupta al final

**Selecciona:** Shoulder-Shoulder (Toe of Slope)

**Transition Length Calculation:**
- Use design speed: ✓ Activado
- Design speed: 80 km/h (lee del alignment)
- Maximum transition grade: 0.005 (1:200)

Civil 3D calcula automáticamente longitudes de transición apropiadas.

**Next >**

### 4.7 Wizard Paso 5: Superelevation Rate Table

Seleccionar tabla de superelevación según norma.

**Opciones:**

**AASHTO 2011 Tables:**
- AASHTO 2011 eMax 4.0 (urbano)
- AASHTO 2011 eMax 6.0
- AASHTO 2011 eMax 8.0 (rural - más común)
- AASHTO 2011 eMax 10.0 (montaña)

**SCT Mexico Tables** (si instaladas):
- SCT Tipo A eMax 10.0
- SCT Tipo B eMax 8.0

**Selecciona:** AASHTO 2011 eMax 8.0%

**Vista previa:**
Civil 3D muestra tabla con radios y tasas de peralte correspondientes.

**Finish**

**Resultado:**
Civil 3D calcula superelevation para TODAS las curvas del alignment automáticamente.

![Wizard Step 5 Table](../imagenes/leccion-3-wizard-step-5.png)

---

## 5. Superelevation Tabular Editor

### 5.1 Abrir Tabular Editor

Después de ejecutar wizard:

**Alignment > Superelevation > View/Edit Superelevation Data**

Se abre **Superelevation Tabular Editor** con múltiples tabs:

![Tabular Editor](../imagenes/leccion-3-tabular-editor.png)

### 5.2 Tabs del Editor

**1. Roadway Type:**
- Revisa/edita tipo de calzada
- Bombeo normal

**2. Lanes:**
- Revisa/edita número de carriles y anchos

**3. Superelevation Curves:**
Lista de TODAS las curvas con superelevation aplicada

**Columnas:**
- Curve # (número de curva)
- Station (estación)
- Radius (radio)
- Superelevation Rate (% calculado)
- Override (permite forzar valor diferente)
- Applied (✓ si está aplicado)

**Ejemplo:**
| Curve | Station | Radius | e Rate | Override |
|-------|---------|--------|--------|----------|
| 1     | 0+523   | 250 m  | 6.5%   | -        |
| 2     | 1+245   | 400 m  | 4.0%   | -        |
| 3     | 2+180   | 180 m  | 8.0%   | -        |

**4. Superelevation Data:**
Vista detallada de CADA estación de transición

**Columnas:**
- Station
- Transition Region (Full Super, Level Crown, etc.)
- Left Outside Slope / Right Outside Slope
- Valores numéricos de pendiente

**5. Transition Details:**
Puntos específicos de transición (TS, SC, CS, ST)

### 5.3 Editar Valores Manualmente

**Override de tasa de peralte:**

**Paso 1:** Tab "Superelevation Curves"

**Paso 2:** Localiza curva que deseas modificar

**Paso 3:** Click en celda "Override"

**Paso 4:** Ingresa nuevo valor (ej: 7.0% en lugar de 6.5% calculado)

**Razón para override:**
- Condiciones especiales (intersección cercana)
- Restricciones de diseño
- Preferencia del ingeniero

**Advertencia:**
Civil 3D mostrará warning si el override viola criterios de seguridad.

### 5.4 Exportar Datos de Superelevation

**Opción 1: Report**

Tabular Editor > **File** > **Export to Report**

Genera archivo TXT o CSV con todos los datos de superelevation.

**Opción 2: LandXML**

Incluye superelevation data en exportación LandXML (para compartir con otros software).

---

## 6. Visualización de Superelevation

### 6.1 Superelevation en Corridor

La mejor forma de visualizar superelevation es en un **corridor** (corredor de carretera).

**Requisitos:**
1. Alignment con superelevation calculada
2. Profile (perfil longitudinal)
3. Assembly (sección transversal típica)

**Crear corridor básico:**

**Paso 1:** Ribbon > Home > Create Design > **Corridor**

**Paso 2:** Cuadro "Create Corridor"
- Name: Carretera CR-80 Corridor
- Alignment: Carretera CR-80
- Profile: FG (finished grade)
- Assembly: Basic Road

**Paso 3:** Set Baseline and Region Parameters
- Start/End station: Completo
- Frequency: 25 m

**Paso 4:** **Target Parameters** > Superelevation
- Specify Superelevation: ✓
- Select superelevation data from alignment

**Create Corridor**

**Resultado:**
Corridor se genera con peralte aplicado. Secciones transversales muestran inclinación.

![Corridor con superelevation](../imagenes/leccion-3-corridor-superelevation.png)

### 6.2 Superelevation en Section Views

**Ver secciones transversales:**

**Paso 1:** Ribbon > Home > Profile & Section Views > **Section Views**

**Paso 2:** Create Multiple Section Views
- Select alignment and sample lines
- Section view style: Road Section

**Paso 3:** Place views en layout

**Resultado:**
Cada sección muestra claramente:
- Bombeo normal (2% en rectas)
- Transición gradual
- Peralte completo en curva (6-8%)

**Anotación automática:**
Labels muestran pendiente transversal (ej: "6.0% LEFT")

![Section views superelevation](../imagenes/leccion-3-section-views.png)

### 6.3 Superelevation en 3D Model

**Paso 1:** Selecciona corridor

**Paso 2:** Ribbon > View tab > **3D Model Viewer** (nuevo 2026)

**Paso 3:** Navega en 3D

**Observa:**
- Inclinación clara de la calzada en curvas
- Transición suave de bombeo a peralte
- Diferencia visual entre rectas y curvas

**Corte dinámico:**
3D Model Viewer permite hacer cortes transversales en tiempo real para ver sección en cualquier estación.

---

## 7. Casos Especiales de Superelevation

### 7.1 Curvas Reversas

**Problema:**
En curva reversa, el peralte cambia de signo (izquierda → derecha).

**Solución AASHTO:**
Requiere tangente intermedia ≥ longitud de transición completa (runoff + runout).

**Típicamente:** 60-80 metros entre curvas reversas.

**En Civil 3D:**
Si tangente es muy corta, Superelevation Wizard muestra **ERROR** y no permite aplicar peralte.

**Corrección:**
- Alargar tangente intermedia
- Reducir radios de curvas (menos peralte requerido)
- Rediseñar geometría

### 7.2 Curvas Compuestas

**Escenario:**
Dos curvas de diferente radio consecutivas (sin tangente).

**Superelevation:**
Cada curva puede tener diferente tasa de peralte.

**Transición:**
Civil 3D crea transición entre e1 y e2 en el PCC (Point of Compound Curvature).

**Limitación:**
Cambio de peralte debe ser gradual (diferencia ≤ 2% preferible).

### 7.3 Intersecciones en Curva

**Problema:**
Intersección ubicada dentro de zona de transición o curva con peralte.

**Solución 1:** Rediseñar alineamiento (mover intersección a tangente)

**Solución 2:** Override de superelevation
- Reducir peralte localmente a ≤ 4%
- Extender zona de peralte reducido 30 m antes/después de intersección

**En Civil 3D:**
Usa Tabular Editor para crear "superelevation override region" en estaciones específicas.

### 7.4 Superelevation en Calles Urbanas

**Criterio urbano:**

En calles de baja velocidad (≤ 50 km/h) con curvas cerradas:

**Opción 1:** Peralte reducido (4% máximo)
- Evita problemas de drenaje en vehículos estacionados
- Reduce incomodidad a peatones

**Opción 2:** Sin peralte (remove crown)
- Calzada completamente plana
- Solo dependemos de fricción
- Velocidad muy baja requerida (≤ 30 km/h)

**En Civil 3D:**
Selecciona tabla "AASHTO eMax 4.0%" para diseño urbano.

---

## 8. Reportes de Superelevation

### 8.1 Superelevation Report

**Generar reporte:**

**Paso 1:** Toolspace > Toolbox tab > **Reports Manager**

**Paso 2:** Alignment folder > **Superelevation Report**

**Paso 3:** Selecciona alignment

**Paso 4:** Click **Create Report**

**Contenido del reporte:**

**Sección 1: General Information**
- Alignment name
- Roadway type
- Normal crown slope
- Maximum superelevation

**Sección 2: Curve Data**
| Curve | Station | Radius | e Rate | Runoff Length | Runout Length |
|-------|---------|--------|--------|---------------|---------------|
| 1     | 0+523   | 250 m  | 6.5%   | 58 m          | 35 m          |
| 2     | 1+245   | 400 m  | 4.0%   | 48 m          | 29 m          |

**Sección 3: Transition Stations**
Lista detallada de cada punto de transición (NC, RC, FS, etc.)

**Exportación:**
- HTML (ver en navegador)
- PDF (para documentación de proyecto)
- XML (para procesamiento externo)

![Superelevation Report](../imagenes/leccion-3-superelevation-report.png)

### 8.2 Superelevation Diagrams

**Crear diagrama visual:**

**Opción 1: Superelevation View**

Civil 3D puede generar un "Superelevation View" (gráfico de peralte vs estación):

- Eje X: Stations
- Eje Y: Superelevation rate (%)
- Líneas: Left edge, Right edge, Crown

**Uso:**
Verificación visual de transiciones suaves.

**Opción 2: Export to AutoCAD**

Puedes exportar datos a AutoCAD y crear diagrama personalizado con polylines.

---

## Ejercicio Práctico 3

**Objetivo:** Aplicar superelevation a alineamiento de carretera rural según AASHTO.

**Archivo:** `Highway-Superelevation.dwg` (incluye alignment con espirales ya diseñado)

**Datos del proyecto:**
- Alignment: Carretera Rural CR-80
- Velocidad de diseño: 80 km/h
- Tipo: Undivided crowned road
- Ancho de carriles: 3.65 m (2 carriles)
- Acotamientos: 1.50 m cada lado
- Norma: AASHTO 2011 eMax 8%

### Tareas:

**Tarea 1: Ejecutar Superelevation Wizard**

1. Abre `Highway-Superelevation.dwg`
2. Selecciona alignment "Carretera Rural CR-80"
3. Calculate/Edit Superelevation
4. Configura wizard:
   - **Step 1:** Undivided Crowned, Crown = 2%, Shoulder slope = -4%
   - **Step 2:** 2 lanes de 3.65 m, shoulders 1.50 m
   - **Step 3:** Begin transition at TS, End at SC
   - **Step 4:** Shoulder-Shoulder transition, Max grade 0.005
   - **Step 5:** AASHTO 2011 eMax 8.0%
5. Finish

**Tarea 2: Revisar resultados en Tabular Editor**

6. View/Edit Superelevation Data
7. Tab "Superelevation Curves":
   - ¿Cuántas curvas tienen superelevation?
   - ¿Cuál es la tasa máxima aplicada?
   - ¿Alguna curva tiene tasa = bombeo normal (2%)?
8. Tab "Transition Details":
   - Identifica estaciones de transición para Curva 1
   - Anota: TS, SC, CS, ST

**Tarea 3: Override manual**

9. En Tabular Editor, localiza Curva 2
10. Cambia tasa de superelevation de calculado a 7.0% (override)
11. Observa warning (si aparece)
12. Acepta cambio

**Tarea 4: Crear Corridor (si hay tiempo)**

13. Crea profile FG básico (finished grade)
14. Crea assembly "Basic Road" (2 lanes, 3.65 m width)
15. Crea corridor:
    - Alignment: Carretera Rural CR-80
    - Profile: FG
    - Assembly: Basic Road
    - Target superelevation: ✓
16. Visualiza corridor en 3D

**Tarea 5: Generar reporte**

17. Toolspace > Toolbox > Reports Manager
18. Superelevation Report
19. Crea reporte HTML
20. Abre en navegador y revisa datos

### Entregable:

1. Screenshot del Tabular Editor mostrando curvas con tasas de peralte
2. Screenshot de sección transversal mostrando peralte aplicado (si creaste corridor)
3. Superelevation Report exportado (PDF o HTML)
4. Responde:
   - ¿Cuál es la curva con mayor peralte y cuánto es?
   - ¿Qué longitud de transición se usó para Curva 1?

**Criterios de evaluación:**
- Superelevation correctamente aplicada ✓
- Tabular Editor completo ✓
- Reporte generado ✓
- Comprensión de transiciones ✓

![Ejercicio 3 Resultado](../imagenes/leccion-3-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la función principal de la superelevación en curvas horizontales?

**Pregunta 2:** ¿Qué tasa máxima de superelevación recomienda AASHTO para carreteras rurales típicas?

**Pregunta 3:** En el Superelevation Wizard, ¿qué significa "Undivided Crowned Road"?

**Pregunta 4:** ¿Dónde debe comenzar y terminar la transición de peralte en un alineamiento con espirales de transición?

**Pregunta 5:** ¿Qué herramienta de Civil 3D usas para modificar manualmente la tasa de peralte de una curva específica?

---

## Recursos Adicionales

**Documentación oficial:**
- AASHTO Green Book 2018 - Chapter 3: Superelevation
- Autodesk Civil 3D 2026 Help - "Superelevation"

**Normativa:**
- SCT México - Normas de Proyecto Geométrico (Capítulo de Peralte)
- Manual Centroamericano de Normas de Diseño Geométrico (SIECA)

**Tutoriales:**
- Autodesk Civil 3D - Applying Superelevation (video oficial)
- Superelevation Workflow Best Practices

**Tablas de diseño:**
- AASHTO Superelevation Tables (todas las velocidades)

---

## Resumen

En esta lección aprendiste:

✅ Física del peralte: Contrarrestar fuerza centrífuga con inclinación transversal
✅ Ecuación fundamental: e + f = V² / (127 × R)
✅ Tasas máximas de superelevación: 4-8% según tipo de vía
✅ Transición de bombeo normal (2%) a peralte total (6-8%)
✅ Superelevation Wizard de 5 pasos para aplicar peralte automáticamente
✅ Tablas AASHTO pre-cargadas en Civil 3D (eMax 4%, 6%, 8%, 10%)
✅ Tabular Editor para revisar/editar tasas de peralte
✅ Visualización de superelevation en corridors y secciones transversales
✅ Generación de reportes de superelevation para construcción

**Próxima Lección:** Horizontal Regression Analysis (Nuevo en Civil 3D 2026) - Crear alineamientos por análisis de regresión de puntos topográficos

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos aplicando superelevation a diferentes tipos de carreteras
