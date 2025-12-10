# Lección 4: Sizing de Tuberías según Caudal

**Duración:** 60 minutos
**Módulo:** 5 - Redes de Tuberías y Utilities
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender los fundamentos de dimensionamiento hidráulico de tuberías
✅ Calcular caudales de diseño para alcantarillado sanitario y pluvial
✅ Utilizar Hydraflow Storm Sewers Extension integrada en Civil 3D
✅ Asignar caudales a structures y pipes en Civil 3D
✅ Aplicar Manning's Equation para verificar capacidad
✅ Usar Design Constraints (restricciones de diseño) para sizing automático
✅ Redimensionar pipes automáticamente con Resize Pipes tool
✅ Verificar velocidad y tirante hidráulico para cumplir normas

---

## Introducción

Crear el layout geométrico de una red de tuberías es solo el primer paso. El **dimensionamiento hidráulico** (sizing) determina el diámetro correcto de cada tubería para transportar el caudal de diseño sin exceder capacidad, con velocidades adecuadas, y cumpliendo normativas.

Un diseño incorrecto resulta en:
- **Subdesign** (diámetro insuficiente): Inundaciones, rebalses, fallas del sistema
- **Overdesign** (diámetro excesivo): Costos innecesarios, velocidades muy bajas (sedimentación en sanitario)

Civil 3D 2026, combinado con **Hydraflow Storm Sewers Extension**, automatiza estos cálculos, permitiendo diseño hidráulico profesional en minutos.

**Normativas aplicables:**
- Alcantarillado sanitario: Ten States Standards, IPC (International Plumbing Code)
- Alcantarillado pluvial: AASHTO Model Drainage Manual, local stormwater ordinances
- Ambos: Manning's Equation, continuity equation

![Hydraulic Sizing Workflow](../../imagenes/modulo-5/leccion-4-sizing-workflow.png)

---

## 1. Fundamentos de Dimensionamiento Hidráulico

### 1.1 Manning's Equation

**Ecuación fundamental** para flujo en tuberías por gravedad (open channel flow):

```
Q = (1.486/n) * A * R^(2/3) * S^(1/2)
```

**Variables:**
- **Q** = Caudal (ft³/s o m³/s)
- **n** = Coeficiente de rugosidad de Manning
- **A** = Área de flujo (ft² o m²)
- **R** = Radio hidráulico (ft o m) = A / P (perímetro mojado)
- **S** = Pendiente de la tubería (ft/ft o m/m)

**Coeficientes de Manning (n) típicos:**
```
PVC:                 0.010
Concreto liso:       0.013
Concreto rugoso:     0.015
HDPE:                0.012
Corrugated Metal:    0.024
```

**Interpretación:**
- A mayor rugosidad (n), menor capacidad
- A mayor pendiente (S), mayor capacidad
- A mayor diámetro, mayor área (A), mayor capacidad

### 1.2 Capacidad a Tubo Lleno vs Flujo Parcial

**Full Flow (tubo lleno):**
- Tubería al 100% de capacidad
- Máximo caudal posible
- Solo ocurre en picos de diseño

**Partial Flow (flujo parcial):**
- Tubería parcialmente llena (típico: 50-80% de profundidad)
- Condición normal de operación
- Permite aire sobre el agua (necesario en sanitario)

**Depth/Diameter Ratio (d/D):**
```
d = Profundidad de agua dentro de tubería
D = Diámetro total de tubería

Ratio típico de diseño:
  Sanitario: d/D = 0.5 a 0.75 (50-75% lleno)
  Pluvial: d/D = 0.8 a 1.0 (80-100% lleno en pico de tormenta)
```

![Full vs Partial Flow](../../imagenes/modulo-5/leccion-4-full-partial-flow.png)

### 1.3 Velocidad de Flujo

**Velocity Equation:**
```
V = Q / A

V = Velocidad (ft/s o m/s)
Q = Caudal
A = Área de flujo
```

**Restricciones de velocidad:**

**Velocidad Mínima (prevenir sedimentación):**
```
Sanitario: 2.0 ft/s (0.6 m/s) mínimo
Pluvial: 3.0 ft/s (0.9 m/s) mínimo

Razón: Velocidades bajas permiten acumulación de sedimentos
```

**Velocidad Máxima (prevenir erosión):**
```
PVC/HDPE: 15 ft/s (4.5 m/s) máximo
Concreto: 10 ft/s (3.0 m/s) máximo

Razón: Velocidades altas erosionan material de tubería
```

**Diseño óptimo:** Velocidad entre mínimo y máximo en flujo de diseño.

---

## 2. Cálculo de Caudales de Diseño

### 2.1 Alcantarillado Sanitario - Método de Contribución

**Fórmula base:**
```
Q = (Población * Dotación * Factor de Retorno) / 86400

Q = Caudal promedio diario (m³/s)
Población = Habitantes servidos
Dotación = Litros/habitante/día (típico: 200-300 L/hab/día)
Factor de Retorno = 0.8 (80% del agua potable va al alcantarillado)
86400 = Segundos en un día
```

**Caudal de Diseño (considera picos):**
```
Q_diseño = Q_promedio * Factor de Pico

Factor de Pico (Harmon):
FP = 1 + (14 / (4 + √P))

P = Población en miles

Ejemplo:
  Población = 500 habitantes = 0.5 (miles)
  FP = 1 + (14 / (4 + √0.5))
  FP = 1 + (14 / 4.707)
  FP = 3.97

  Si Q_promedio = 0.01 m³/s
  Q_diseño = 0.01 * 3.97 = 0.0397 m³/s = 39.7 L/s
```

**Método simplificado (urbano residencial):**
```
Q = 0.0025 L/s por m² de área

Ejemplo:
  Lote de 300 m²
  Q = 300 * 0.0025 = 0.75 L/s (contribución del lote)
```

### 2.2 Alcantarillado Pluvial - Método Racional

**Ecuación Racional:**
```
Q = (C * i * A) / K

Q = Caudal pico (ft³/s o m³/s)
C = Coeficiente de escorrentía (runoff coefficient)
i = Intensidad de lluvia (in/hr o mm/hr)
A = Área de drenaje (acres o hectáreas)
K = Constante de unidades
    US: K = 1.008 (≈ 1)
    Métrico: K = 360
```

**Coeficientes de Escorrentía (C):**
```
Tipo de Superficie                    C
Techos (impermeables)                0.90
Pavimento asfalto/concreto           0.85
Calles adoquinadas                   0.70
Áreas residenciales (promedio)       0.40
Parques y jardines                   0.20
Terreno natural (pasto)              0.15
```

**Intensidad de Lluvia:**
Se obtiene de curvas IDF (Intensity-Duration-Frequency) locales.

**Ejemplo:**
- Tormenta 10 años retorno, 10 min duración
- Intensidad = 100 mm/hr
- Área residencial = 2 hectáreas
- C = 0.40 (residencial)

```
Q = (0.40 * 100 * 2) / 360
Q = 80 / 360
Q = 0.222 m³/s = 222 L/s
```

![Rational Method](../../imagenes/modulo-5/leccion-4-rational-method.png)

### 2.3 Tiempo de Concentración

**Definición:** Tiempo que tarda el agua en viajar desde el punto más lejano del área de drenaje hasta el punto de diseño.

**Ecuación de Kirpich:**
```
Tc = 0.0078 * L^0.77 * S^-0.385

Tc = Tiempo de concentración (minutos)
L = Longitud de recorrido (ft)
S = Pendiente promedio (ft/ft)
```

**Importancia:** Tc determina la duración de lluvia a usar en curvas IDF.
- Tc corto → lluvia intensa → caudales altos
- Tc largo → lluvia menos intensa → caudales menores

---

## 3. Hydraflow Storm Sewers Extension

### 3.1 ¿Qué es Hydraflow?

**Autodesk Hydraflow Storm Sewers Extension** es un software de análisis hidráulico integrado en Civil 3D que:

- Lee automáticamente geometría de Pipe Networks
- Calcula caudales por Método Racional
- Dimensiona tuberías (sizing automático)
- Verifica capacidad hidráulica
- Genera reportes profesionales

**Incluido en Civil 3D 2026** - No requiere licencia adicional.

### 3.2 Acceso a Hydraflow

**Ubicación:**
- **Ribbon:** Analyze Tab → Hydraflow Storm Sewers Panel
- O busca en Windows Start: "Hydraflow Storm Sewers"

**Workflow:**
1. Diseña Pipe Network en Civil 3D (layout geométrico)
2. Exporta a Hydraflow
3. Asigna áreas de drenaje y coeficientes C
4. Hydraflow calcula caudales
5. Hydraflow dimensiona tuberías
6. Importa resultados de vuelta a Civil 3D

![Hydraflow Integration](../../imagenes/modulo-5/leccion-4-hydraflow-integration.png)

### 3.3 Iniciar Proyecto en Hydraflow

**Pasos:**

1. **Analyze Tab → Hydraflow Storm Sewers → Storm Sewers**
2. Hydraflow se abre en ventana separada
3. **File → New Project**
4. **Project Properties:**
   - Project Name: `Urbanizacion_Norte_Pluvial`
   - Units: US Customary o Metric
   - Rainfall Equation: Selecciona región (o Custom)
   - Click OK

5. **Import from Civil 3D:**
   - Hydraflow: **File → Import → Civil 3D Drawing**
   - Selecciona tu drawing abierto en Civil 3D
   - Selecciona Pipe Network: `Red_Pluvial_Principal`
   - Click Import

**Resultado:** Hydraflow muestra tu red en su interfaz, con todas las structures y pipes importados.

### 3.4 Interfaz de Hydraflow

**Pantalla principal:**

**Spreadsheet View (vista de tabla):**
- Cada fila = una structure
- Columnas: Station, Ground Elev, Inlet Type, Area, C Coefficient, Tc, Flow, etc.

**Profile View:**
- Perfil longitudinal hidráulico
- Muestra HGL (Hydraulic Grade Line) y EGL (Energy Grade Line)

**Plan View:**
- Vista en planta esquemática
- Flechas muestran dirección de flujo

---

## 4. Asignar Caudales en Hydraflow

### 4.1 Método 1: Áreas de Drenaje Directas

**Para cada structure (catch basin):**

1. **En Hydraflow Spreadsheet, doble-click en la fila de un catch basin**

2. **Structure Dialog se abre:**
   - **Inlet Type:** Selecciona tipo de reja (Curb Opening, Grate, Combination)
   - **Drainage Area:** Introduce área tributaria (acres o hectáreas)
     - Ejemplo: `0.5 acres` (área que drena hacia este catch basin)
   - **Runoff Coefficient (C):** Introduce coeficiente
     - Ejemplo: `0.45` (área residencial mixta)
   - **Time of Concentration (Tc):** Minutos
     - Ejemplo: `10 min`

3. **Click Calculate**

**Hydraflow calcula automáticamente:**
- Intensidad de lluvia (desde ecuación IDF configurada)
- Caudal = C * i * A / K
- Muestra en columna "Flow (cfs)" o "Flow (m³/s)"

![Hydraflow Structure Dialog](../../imagenes/modulo-5/leccion-4-hydraflow-structure-dialog.png)

### 4.2 Método 2: Caudales Acumulados

**Caudales se acumulan automáticamente:**
- Cada structure aguas abajo recibe su caudal propio + caudales upstream
- Hydraflow suma automáticamente

**Ejemplo:**
```
CB-01: Área = 0.3 ac, C = 0.5, Q = 2.0 cfs
CB-02: Área = 0.4 ac, C = 0.5, Q = 2.5 cfs
CB-03: Área = 0.0 ac (sin área propia)

Flujo:
CB-01 → CB-02 → CB-03 → Outlet

Caudales en pipes:
Pipe 1-2: 2.0 cfs (solo CB-01)
Pipe 2-3: 4.5 cfs (CB-01 + CB-02)
Pipe 3-Out: 4.5 cfs (acumulado total)
```

### 4.3 Asignar Caudales Directos en Civil 3D (sin Hydraflow)

**Si prefieres trabajar solo en Civil 3D:**

1. **Calcula caudales manualmente** (usando Método Racional u otro)

2. **Selecciona structure en Civil 3D**

3. **Properties (Ctrl+1) → Hydraulic Data**
   - **Flow:** Introduce caudal (ft³/s o m³/s)
   - Ejemplo: `0.05 m³/s`

4. **Repite para cada structure**

**Limitación:** Civil 3D NO suma caudales automáticamente. Debes calcular acumulados manualmente.

**Ventaja de Hydraflow:** Suma automática y cálculo de sizing.

---

## 5. Design Constraints (Restricciones de Diseño)

### 5.1 ¿Qué son Design Constraints?

Son límites de diseño que el software respeta al dimensionar tuberías:

- Diámetro mínimo permitido
- Diámetro máximo permitido
- Pendiente mínima
- Pendiente máxima
- Velocidad mínima
- Velocidad máxima
- Cover mínimo/máximo

### 5.2 Configurar Constraints en Hydraflow

**Pasos:**

1. **Hydraflow: Project → Project Settings**

2. **Design Tab:**
   - **Minimum Pipe Size:** `12 in` (sanitario) o `18 in` (pluvial)
   - **Maximum Pipe Size:** `60 in` (o el mayor disponible)
   - **Minimum Velocity:** `2.0 ft/s` (sanitario) o `3.0 ft/s` (pluvial)
   - **Maximum Velocity:** `15 ft/s`
   - **Minimum Slope:** `0.40%` (sanitario) o `0.50%` (pluvial)
   - **Maximum Slope:** `10.0%`
   - **Minimum Cover:** `3.0 ft`
   - **Maximum Cover:** `15.0 ft`

3. **Click OK**

**Hydraflow usará estos límites** al calcular sizing.

![Design Constraints](../../imagenes/modulo-5/leccion-4-design-constraints.png)

### 5.3 Constraints en Civil 3D (Pipe Rules)

**Alternativa/complemento:**

Settings Tab → Pipe Network → Pipe → [Part Family] → Rules

- Cover (min/max)
- Slope (min/max)

Estas rules se aplican durante layout. Hydraflow usa sus propias constraints durante sizing.

---

## 6. Resize Pipes (Redimensionamiento Automático)

### 6.1 Sizing Automático en Hydraflow

**Proceso:**

1. **Asegúrate de haber asignado caudales** a todas las structures (Paso 4)

2. **Hydraflow: Design → Size Pipes**
   - Dialog se abre con opciones

3. **Sizing Options:**
   - **Method:**
     - **HGL Below Rim:** Diseña para que línea de energía no alcance superficie (evita inundaciones)
     - **Normal Depth:** Diseña para flujo normal (más conservador)
   - **Apply Constraints:** ✅ Enabled (usa constraints configurados)

4. **Click OK**

**Hydraflow procesa:**
- Calcula para cada pipe el diámetro mínimo necesario para transportar el caudal acumulado
- Verifica velocidad y profundidad
- Asigna el siguiente diámetro disponible en Parts List que cumple todos los constraints

5. **Revisar resultados:**
   - Columna "Size" muestra diámetros calculados
   - Pipes insuficientes se marcan en **rojo**
   - Pipes OK en **negro**

![Hydraflow Sizing Results](../../imagenes/modulo-5/leccion-4-hydraflow-sizing.png)

### 6.2 Exportar Sizing a Civil 3D

**Pasos:**

1. **Hydraflow: File → Export → Update Civil 3D Drawing**

2. **Export Options Dialog:**
   - ✅ Update Pipe Sizes (diámetros)
   - ✅ Update Invert Elevations (si ajustaste inverts)
   - ✅ Update Flow Data (caudales)
   - Click OK

3. **Regresar a Civil 3D**
   - Los pipes se actualizan automáticamente con nuevos diámetros
   - Verifica: Selecciona pipe → Properties → Size = nuevo diámetro

### 6.3 Resize Manual en Civil 3D (sin Hydraflow)

**Si NO usas Hydraflow:**

1. **Calcula diámetro requerido manualmente:**
   - Usa Manning's Equation
   - O tablas de capacidad de tuberías

2. **Selecciona pipe**

3. **Click grip central → Swap Part**

4. **Selecciona nuevo diámetro** de Parts List

5. **Repite para cada pipe**

**Tedioso pero factible en redes pequeñas.**

---

## 7. Verificación de Velocidad y Tirante

### 7.1 Verificar Velocidad en Hydraflow

**Spreadsheet columns:**
- **Velocity (ft/s):** Velocidad de flujo en cada pipe
- **Depth/Diameter Ratio (d/D):** Profundidad relativa del agua

**Revisar:**
- Velocidad entre mínimo y máximo (2-15 ft/s típicamente)
- d/D entre 0.5 - 0.8 (sanitario) o 0.8 - 1.0 (pluvial)

**Si velocity muy baja:**
- Aumentar pendiente del pipe (si posible)
- O reducir diámetro (si capacidad lo permite)

**Si velocity muy alta:**
- Reducir pendiente (difícil si terreno es inclinado)
- O aumentar diámetro (reduce velocidad)
- O usar drop manholes para disipar energía

### 7.2 HGL y EGL (Hydraulic Grade Line y Energy Grade Line)

**Definiciones:**

**HGL (Hydraulic Grade Line):**
- Línea que representa la energía de presión + elevación
- En tuberías por gravedad, HGL = nivel de agua dentro de tubería
- **Crítico:** HGL debe estar BAJO rim de structures (sino inundación)

**EGL (Energy Grade Line):**
- HGL + energía cinética (velocity head)
- EGL = HGL + V²/2g

**Visualización en Hydraflow:**
- Profile View muestra HGL y EGL como líneas
- Compara con Ground Line (superficie)

**Diseño correcto:**
```
Ground Elevation > Rim > HGL > Invert

Si HGL > Rim → PROBLEMA: Sistema inunda
```

![HGL and EGL](../../imagenes/modulo-5/leccion-4-hgl-egl.png)

### 7.3 Corregir Problemas Hidráulicos

**Problema: HGL excede Rim**

**Soluciones:**
1. **Aumentar diámetro** de pipes upstream (reduce HGL)
2. **Aumentar pendiente** (mejora capacidad)
3. **Adicionar pipes paralelos** (divide flujo)
4. **Reducir caudal** (si posible - ej: añadir más catch basins upstream)

**Problema: Velocity muy baja (sedimentación)**

**Soluciones:**
1. **Reducir diámetro** (aumenta velocidad)
2. **Aumentar pendiente**
3. **Flush manholes:** Añadir conexiones de limpieza

---

## 8. Workflow Completo de Sizing

### 8.1 Proceso Paso a Paso

**1. Diseño Geométrico en Civil 3D:**
- Crear Pipe Network
- Layout de structures y pipes
- Ajustar elevaciones preliminares

**2. Cálculo de Caudales:**
- **Sanitario:** Calcular población servida, aplicar Factor de Pico
- **Pluvial:** Determinar áreas de drenaje, coeficientes C, intensidad de lluvia

**3. Sizing en Hydraflow:**
- Importar red de Civil 3D
- Asignar caudales a structures
- Configurar Design Constraints
- Ejecutar Size Pipes
- Revisar resultados (velocity, HGL, d/D)

**4. Verificación:**
- Confirmar que HGL < Rim en todas las structures
- Confirmar velocidades dentro de rango
- Confirmar no hay warnings/errors

**5. Exportar a Civil 3D:**
- Update Civil 3D Drawing
- Verificar que diámetros se actualizaron

**6. Documentación:**
- Generar tablas de tuberías (diámetros, longitudes, pendientes)
- Profile views
- Reportes de Hydraflow (cantidades, HGL tables)

![Complete Sizing Workflow](../../imagenes/modulo-5/leccion-4-complete-workflow.png)

---

## Ejercicio Práctico 4

**Objetivo:** Dimensionar hidráulicamente una red de alcantarillado pluvial usando Hydraflow Storm Sewers.

**Preparación:**
- Red de alcantarillado pluvial ya creada (de Lección 3)
- Con al menos 5 catch basins y 1 manhole outlet

**Datos de diseño:**
- Tormenta: 10 años retorno
- Intensidad de lluvia: 4.0 in/hr (o 100 mm/hr si métrico)
- Área promedio por catch basin: 0.5 acres (0.2 hectáreas)
- Coeficiente C: 0.50 (área residencial)
- Tiempo de concentración: 10 minutos

**Tareas:**

**Parte A: Abrir Hydraflow**

1. **Analyze Tab → Hydraflow Storm Sewers → Storm Sewers**
2. **File → New Project**
3. Project Name: `Ejercicio_4_Sizing`
4. Units: (tu preferencia)
5. OK

**Parte B: Importar Red**

1. **File → Import → Civil 3D Drawing**
2. Selecciona tu drawing y Pipe Network
3. Click Import
4. **Verifica:** Spreadsheet muestra todas tus structures

**Parte C: Asignar Caudales**

1. **Doble-click en cada catch basin** (uno por uno)
2. **Structure Dialog:**
   - Drainage Area: `0.5 ac` (o 0.2 ha)
   - C Coefficient: `0.50`
   - Tc: `10 min`
3. Click OK
4. **Repite para todos los catch basins**
5. **Manhole final:** Area = 0 (no tiene área propia, solo recibe acumulado)

**Parte D: Configurar Constraints**

1. **Project → Project Settings → Design Tab**
2. **Configuración:**
   - Minimum Pipe Size: `18 in` (o 450 mm)
   - Minimum Velocity: `3.0 ft/s` (0.9 m/s)
   - Maximum Velocity: `15 ft/s` (4.5 m/s)
   - Minimum Slope: `0.50%`
   - Minimum Cover: `3.0 ft` (0.9 m)
3. OK

**Parte E: Size Pipes**

1. **Design → Size Pipes**
2. Method: `HGL Below Rim`
3. Apply Constraints: ✅
4. OK
5. **Espera cálculo** (pocos segundos)

**Parte F: Revisar Resultados**

1. **En Spreadsheet, revisa columnas:**
   - Size (diámetros asignados - anota el rango)
   - Velocity (velocidades - verifica que cumplan 3-15 ft/s)
   - Flow (caudales acumulados)
2. **Profile View:**
   - Verifica que HGL (línea azul) esté bajo Ground (línea verde)
   - Si alguna sección HGL > Ground = problema

**Parte G: Exportar a Civil 3D**

1. **File → Export → Update Civil 3D Drawing**
2. ✅ Update Pipe Sizes
3. ✅ Update Flow Data
4. OK
5. **Regresar a Civil 3D**

**Parte H: Verificar en Civil 3D**

1. **Selecciona cada pipe**
2. **Properties → Part Data → Size**
3. **Verifica que diámetros cambiaron** según sizing de Hydraflow

**Entregable:**
- Screenshot de Hydraflow Spreadsheet mostrando columnas: Structure, Size, Velocity, Flow
- Screenshot de Hydraflow Profile View mostrando HGL
- Tabla manual:
  ```
  Diámetro mínimo usado: X in
  Diámetro máximo usado: Y in
  Velocidad mínima: Z ft/s
  Velocidad máxima: W ft/s
  Caudal total en outlet: Q cfs (o m³/s)
  HGL máximo vs Ground: (OK / PROBLEMA)
  ```

![Ejercicio 4 Hydraflow](../../imagenes/modulo-5/leccion-4-ejercicio-hydraflow.png)

---

## Evaluación

**Pregunta 1:** ¿Qué variable de Manning's Equation representa el coeficiente de rugosidad del material de la tubería?

**Pregunta 2:** Para alcantarillado sanitario, ¿cuál es la velocidad mínima recomendada para prevenir sedimentación?

**Pregunta 3:** En el Método Racional, ¿qué representa el coeficiente C? Menciona un valor típico para pavimento de asfalto.

**Pregunta 4:** ¿Qué significa que HGL (Hydraulic Grade Line) exceda el Rim Elevation de una structure? ¿Es aceptable?

**Pregunta 5:** Menciona 2 Design Constraints que Hydraflow usa para dimensionar tuberías automáticamente.

---

## Recursos Adicionales

**Documentación oficial:**
- Hydraflow Storm Sewers Extension User Guide
- Civil 3D 2026 Help - "Hydraulic Analysis"
- AASHTO Model Drainage Manual

**Videos recomendados:**
- Hydraflow Storm Sewers Tutorial (YouTube Autodesk)
- Manning's Equation Explained for Engineers
- Rational Method for Stormwater Design

**Herramientas online:**
- Manning's Equation Calculator
- Rational Method Spreadsheet Templates

**Estándares descargables:**
- `Ten_States_Standards_Wastewater.pdf`
- `IDF_Curves_Sample_City.pdf` (curvas IDF locales)

---

## Resumen

En esta lección aprendiste:

✅ **Manning's Equation:** Fórmula fundamental para capacidad de tuberías por gravedad
✅ **Cálculo de Caudales:** Método Racional (pluvial) y método de contribución (sanitario)
✅ **Hydraflow Storm Sewers:** Herramienta integrada para sizing hidráulico automático
✅ **Asignación de Caudales:** Áreas de drenaje, coeficientes C, y caudales acumulados
✅ **Design Constraints:** Límites de diseño (diámetros, velocidades, pendientes)
✅ **Resize Pipes:** Dimensionamiento automático basado en capacidad hidráulica
✅ **Verificación:** HGL, EGL, velocidades, tirante hidráulico
✅ **Workflow Completo:** Desde geometría hasta sizing final con Hydraflow

**Próxima Lección:** Autodesk Drainage Analysis Tools 2026 (NUEVA característica de Civil 3D 2026 para análisis de drenaje integrado sin software externo)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 90 minutos dimensionando redes en diferentes escenarios (sanitario vs pluvial, terrenos planos vs inclinados)
