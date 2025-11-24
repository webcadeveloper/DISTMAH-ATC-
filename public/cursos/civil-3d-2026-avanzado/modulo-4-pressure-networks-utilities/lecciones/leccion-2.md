# Lección 2: Pressure Analysis y Hydraulic Grade

## Introducción

El **análisis hidráulico** de redes de agua potable es fundamental para garantizar que el sistema opere correctamente bajo todas las condiciones de demanda. A diferencia del diseño básico de tuberías, el análisis hidráulico considera las pérdidas de presión por fricción, pérdidas menores en accesorios, variaciones de elevación y condiciones dinámicas del sistema.

En esta lección avanzada, aprenderás a calcular la **Hydraulic Grade Line (HGL)**, analizar presiones estáticas y dinámicas, aplicar ecuaciones de pérdida de fricción (Hazen-Williams y Darcy-Weisbach), y validar tu diseño contra normas profesionales como AWWA y códigos locales.

**Duración estimada:** 100 minutos
**Nivel:** Avanzado

---

## 1. Fundamentos de Análisis Hidráulico

### 1.1 Conceptos Básicos de Energía en Fluidos

**Ecuación de Bernoulli (forma de energía):**

```
E = z + (P/γ) + (V²/2g)

Donde:
E = Energía total (ft o m)
z = Elevación sobre datum (ft o m)
P = Presión (lb/ft² o Pa)
γ = Peso específico del agua (62.4 lb/ft³ o 9810 N/m³)
V = Velocidad (ft/s o m/s)
g = Gravedad (32.2 ft/s² o 9.81 m/s²)
```

**Componentes de energía:**

1. **Elevation Head (z):** Energía potencial debido a elevación
2. **Pressure Head (P/γ):** Energía por presión del fluido
3. **Velocity Head (V²/2g):** Energía cinética del flujo

### 1.2 Hydraulic Grade Line (HGL)

La **HGL** representa la suma de elevación más presión:

```
HGL = z + (P/γ)
```

**Interpretación:**
- La HGL es la altura a la que subiría el agua en un piezómetro
- En un tanque abierto, la HGL es la superficie del agua
- La HGL siempre disminuye en la dirección del flujo (por pérdidas)

**Diferencia con Energy Grade Line (EGL):**

```
EGL = HGL + (V²/2g)
```

La EGL incluye la energía cinética. En tuberías de agua potable, la velocity head es pequeña (típicamente <1 ft), por lo que HGL y EGL son casi idénticas.

### 1.3 Presión Estática vs Dinámica

**Presión Estática:**
- Presión cuando no hay flujo (sistema cerrado)
- Depende solo de elevación relativa
- Cálculo: P_static = γ × (elevation_source - elevation_point)
- Ejemplo: Tanque a 100 ft, punto a 50 ft → P = 62.4 × 50 = 3,120 psf = 21.7 psi

**Presión Dinámica:**
- Presión durante flujo activo
- Menor que estática debido a pérdidas por fricción
- Debe mantenerse sobre mínimo de código (típicamente 20 psi)

**Presión residual en hidrante durante incendio:**
- Mínimo NFPA: 20 psi con flujo de 1,000-1,500 GPM
- Preferible: 40-60 psi en condiciones normales

---

## 2. Pérdidas de Presión por Fricción

### 2.1 Ecuación de Hazen-Williams

La ecuación más usada en diseño de agua potable en Norte América:

```
P_loss = 4.52 × L × (Q^1.85) / (C^1.85 × D^4.87)

Donde:
P_loss = Pérdida de presión (psi)
L = Longitud de tubería (ft) [usar 100 para normalizar]
Q = Caudal (GPM)
C = Coeficiente de rugosidad Hazen-Williams
D = Diámetro interno (inches)
```

**Forma alternativa (pérdida por fricción en ft/ft):**

```
S = 10.67 × (Q^1.85) / (C^1.85 × D^4.87)

S = head loss gradient (ft/100 ft)
```

**Coeficientes C típicos:**

| Material | C (nuevo) | C (20 años) | C (50+ años) |
|----------|-----------|-------------|--------------|
| PVC | 150 | 145 | 140 |
| Ductile Iron (lined) | 130 | 120 | 100 |
| Concrete | 140 | 120 | 100 |
| Steel (lined) | 140 | 110 | 80 |
| Copper | 130 | 120 | 110 |
| HDPE | 150 | 145 | 140 |

**Recomendación profesional:**
- Diseñar con C conservador (10-15% menor que nuevo)
- Considerar envejecimiento en vida útil de 50 años
- Tuberías críticas: usar C más conservador

**Ejemplo de cálculo:**

```
Tubería de 8" PVC (C=140), Q = 500 GPM, L = 1,000 ft

S = 10.67 × (500^1.85) / (140^1.85 × 8^4.87)
S = 10.67 × 157,490 / (19,157 × 7,461)
S = 1,679,999 / 142,926,477
S = 0.01175 ft/ft = 1.175 ft/100 ft

Pérdida total = 1.175 × (1,000/100) = 11.75 ft
En psi: 11.75 × 0.433 = 5.09 psi
```

### 2.2 Ecuación de Darcy-Weisbach

Ecuación más universal, basada en física fundamental:

```
h_f = f × (L/D) × (V²/2g)

Donde:
h_f = Pérdida de carga (ft)
f = Factor de fricción Darcy (adimensional)
L = Longitud (ft)
D = Diámetro (ft)
V = Velocidad (ft/s)
g = 32.2 ft/s²
```

**Determinación de factor f (Ecuación de Colebrook-White):**

```
1/√f = -2 × log₁₀((ε/3.7D) + (2.51/(Re×√f)))

Donde:
ε = Rugosidad absoluta (ft)
Re = Número de Reynolds = (V×D)/ν
ν = Viscosidad cinemática (ft²/s) = 1.21×10⁻⁵ ft²/s a 60°F
```

**Rugosidad absoluta (ε) típica:**

| Material | ε (ft) | ε (mm) |
|----------|--------|--------|
| PVC | 0.000005 | 0.0015 |
| Ductile Iron (nuevo) | 0.00085 | 0.26 |
| Concrete | 0.001-0.01 | 0.3-3.0 |
| Steel (nuevo) | 0.00015 | 0.046 |
| HDPE | 0.000005 | 0.0015 |

**Ventajas de Darcy-Weisbach:**
- Más preciso a bajas velocidades
- Válido para cualquier fluido
- Considera temperatura (viscosidad)
- Preferido en Europa y análisis académico

**Desventajas:**
- Cálculo más complejo (iterativo para f)
- Menos familiar para ingenieros en USA
- Requiere datos de rugosidad absoluta

### 2.3 Comparación: Hazen-Williams vs Darcy-Weisbach

**Hazen-Williams:**
- Pros: Simple, ampliamente usado, tablas disponibles
- Contras: Solo válido para agua, menos preciso a bajas velocidades
- Uso recomendado: Diseño preliminar, sistemas municipales típicos

**Darcy-Weisbach:**
- Pros: Preciso, universal, basado en física
- Contras: Más complejo, requiere iteración
- Uso recomendado: Análisis detallado, validación final, casos especiales

**En Civil 3D 2026:**
Ambas ecuaciones están disponibles. La selección se hace en:
```
Toolspace > Settings > Pressure Network > Analysis Settings
Friction Loss Method: Hazen-Williams / Darcy-Weisbach
```

---

## 3. Pérdidas Menores en Accesorios

### 3.1 Concepto de Pérdidas Menores

Las **pérdidas menores** ocurren en:
- Válvulas
- Codos y tees
- Reducciones y expansiones
- Entradas y salidas

Llamadas "menores" porque individualmente son pequeñas comparadas con fricción en tuberías largas, pero pueden ser significativas en sistemas con muchos accesorios.

### 3.2 Método del Coeficiente K

```
h_m = K × (V²/2g)

Donde:
h_m = Pérdida menor (ft)
K = Coeficiente de pérdida (adimensional)
V = Velocidad (ft/s)
```

**Coeficientes K típicos:**

| Accesorio | K |
|-----------|---|
| Gate Valve (abierta) | 0.2 |
| Gate Valve (75% abierta) | 1.0 |
| Gate Valve (50% abierta) | 5.6 |
| Check Valve | 2.5 |
| Butterfly Valve (abierta) | 0.3 |
| 90° Elbow (threaded) | 1.5 |
| 90° Elbow (flanged) | 0.3 |
| 45° Elbow | 0.4 |
| Tee (flow through run) | 0.6 |
| Tee (flow through branch) | 1.8 |
| Reducer (súbito) | 0.5 |
| Expansion (súbita) | 1.0 |
| Entrance (sharp) | 0.5 |
| Exit | 1.0 |

**Ejemplo:**

Gate valve de 6" con flujo de 300 GPM:
```
1. Calcular velocidad:
   A = π × (6/12)² / 4 = 0.196 ft²
   Q = 300 GPM = 0.668 ft³/s
   V = Q/A = 0.668/0.196 = 3.41 ft/s

2. Calcular pérdida:
   h_m = 0.2 × (3.41²)/(2×32.2) = 0.2 × 11.63/64.4 = 0.036 ft
   En psi: 0.036 × 0.433 = 0.016 psi (despreciable)
```

**Conclusión:** En tuberías largas, las pérdidas menores son verdaderamente menores. Pero en pump stations con múltiples válvulas y accesorios, pueden sumar varios psi.

### 3.3 Método de Longitud Equivalente

Alternativa: expresar cada accesorio como longitud equivalente de tubería:

```
L_eq = K × (D/f)

Donde:
f ≈ 0.02 (típico para flujo turbulento)
```

**Longitudes equivalentes típicas (en diámetros de tubería):**

| Accesorio | L_eq/D |
|-----------|--------|
| Gate Valve | 8 |
| Check Valve | 100 |
| 90° Elbow | 30 |
| 45° Elbow | 16 |
| Tee (branch) | 60 |

**Ejemplo:**
- Gate valve de 8" → L_eq = 8 × 8" = 64 inches = 5.3 ft
- Check valve de 8" → L_eq = 100 × 8" = 800 inches = 66.7 ft

Este método simplifica el cálculo: sumar longitudes equivalentes a la longitud real de tubería.

---

## 4. Análisis de Presiones Estáticas y Dinámicas

### 4.1 Identificación de Zonas de Presión

En terreno con variación de elevación significativa (>100 ft), es común dividir en **zonas de presión**:

**Criterio de zonificación:**

```
Diferencia de elevación × 0.433 psi/ft < 60 psi (diferencia aceptable)

Ejemplo:
- Tanque a elevación 500 ft
- Zona alta: elevaciones 400-500 ft → presión 0-43 psi (OK)
- Zona media: elevaciones 300-400 ft → presión 43-86 psi (límite)
- Zona baja: elevaciones 200-300 ft → presión 86-130 psi (EXCESIVO)

Solución: Dividir en 2 zonas con PRV o tanque intermedio
```

**Configuración en Civil 3D:**

```
1. Crear networks separadas: "Water Zone 1", "Water Zone 2"
2. Insertar PRV en límite
3. PRV Properties:
   - Inlet Pressure: [de zona alta]
   - Outlet Pressure (setting): 50 psi [zona baja]
```

### 4.2 Análisis de Escenarios de Demanda

**Escenario 1: Demanda Promedio Diaria (Average Day Demand - ADD)**

```
ADD = Población × Consumo per cápita

Ejemplo:
- 1,000 viviendas × 3.5 personas = 3,500 personas
- Consumo: 100 gal/persona/día
- ADD = 3,500 × 100 = 350,000 gal/día = 243 GPM

Uso: Sizing de fuentes, tanques, análisis de calidad de agua
```

**Escenario 2: Demanda Máxima Diaria (Maximum Day Demand - MDD)**

```
MDD = ADD × Peak Day Factor

Peak Day Factor típico: 1.5-2.5
MDD = 243 × 2.0 = 486 GPM

Uso: Sizing de mains principales, análisis de presión normal
```

**Escenario 3: Demanda Máxima Horaria (Peak Hour Demand - PHD)**

```
PHD = MDD × Peak Hour Factor

Peak Hour Factor típico: 1.5-3.0
PHD = 486 × 2.5 = 1,215 GPM

Uso: Sizing de tuberías locales, presión mínima residencial
```

**Escenario 4: Demanda de Incendio (Fire Flow)**

```
Fire Flow = (C × F) / T^0.5

Ecuación ISO (Insurance Services Office):
C = Coefficient (función de construcción)
F = Área de edificio (ft²)
T = % involucrado (típicamente 25%)

Simplificación común:
- Residencial 1-2 pisos: 1,000-1,500 GPM por 2 horas
- Comercial: 2,000-3,500 GPM
- Industrial: >4,000 GPM

Uso: Validación de presión residual en hidrantes (mín 20 psi)
```

**En Civil 3D - Configuración de demandas:**

```
Para cada junction:
Properties > Pressure Network Data > Demand (GPM)

Para análisis automático:
Tools > Pressure Network Analysis > Define Loading Conditions
- Scenario name: "Peak Hour"
- Base demand: [calcular por zona]
- Pattern: Diurnal (varía por hora del día)
```

### 4.3 Cálculo Manual de HGL

**Proceso paso a paso:**

**Punto de partida (tanque elevado):**
```
Elevación del tanque: 520 ft
Nivel de agua: 20 ft sobre base
HGL en tanque = 520 + 20 = 540 ft
```

**Punto 1 (1,000 ft aguas abajo, elevación 510 ft, Q=500 GPM, 8" PVC C=140):**

```
1. Pérdida por fricción:
   S = 10.67 × (500^1.85) / (140^1.85 × 8^4.87) = 1.175 ft/100 ft
   h_f = 1.175 × 10 = 11.75 ft

2. Pérdidas menores (1 gate valve):
   V = Q/A = 0.668/(π×(8/24)²/4) = 7.64 ft/s
   h_m = 0.2 × (7.64²)/(2×32.2) = 0.18 ft

3. HGL en Punto 1:
   HGL_1 = HGL_tanque - h_f - h_m
   HGL_1 = 540 - 11.75 - 0.18 = 528.07 ft

4. Presión en Punto 1:
   P_1 = (HGL_1 - elevation_1) × 0.433
   P_1 = (528.07 - 510) × 0.433 = 7.83 psi (BAJA - revisar diseño)
```

**Análisis:** Presión de 7.83 psi está por debajo del mínimo de 20 psi. Soluciones:
- Elevar tanque
- Aumentar diámetro de tubería (reducir pérdidas)
- Agregar booster pump

---

## 5. Validación contra Normas AWWA

### 5.1 AWWA Manual M11 - Steel Pipe Design and Installation

**Criterios de presión:**

```
Presión de trabajo = Presión estática + Surge pressure
Surge pressure (golpe de ariete) ≈ 0.07 × Presión estática (típico)

Presión de diseño = Presión de trabajo × Factor de seguridad (1.5)
```

### 5.2 AWWA Manual M31 - Distribution System Requirements

**Presión residual mínima:**
- Normal operation: 35 psi (240 kPa)
- Durante peak hour: 20 psi (140 kPa)
- Durante fire flow: 20 psi (140 kPa)

**Presión máxima:**
- Static: 100 psi (690 kPa) máximo
- Recomendado: 80 psi (550 kPa) para proteger fixtures

**Velocidad:**
- Máxima recomendada: 5 fps (1.5 m/s) en operación normal
- Máxima absoluta: 10 fps (3 m/s) en emergencias
- Mínima: 2 fps (0.6 m/s) para evitar sedimentación

### 5.3 Ten States Standards (Great Lakes - Upper Mississippi River Board)

**Presión mínima de diseño:**
- Residencial: 40 psi (276 kPa)
- Multi-story: +5 psi por piso adicional

**Fire flow duration:**
- 1,000 GPM: 4 hours (residential)
- 2,500 GPM: 3 hours (commercial)
- >4,000 GPM: 2-3 hours (industrial)

**Looping requirements:**
- Mandatory para systems >50,000 galones/día
- Spacing: loops cada 600-1,200 ft en áreas urbanas

### 5.4 Validación en Civil 3D

**Pressure Analysis Tools:**

```
1. Analyze tab > Pressure Network panel > Pressure Network Analysis
2. Select Network
3. Analysis Type:
   - Steady State (snapshot en tiempo específico)
   - Extended Period Simulation (EPS - 24-72 horas)
4. Define Loading:
   - Demand Patterns (diurnal curves)
   - Fire Flow scenarios
5. Run Analysis
6. Review Results:
   - Pressure Contours (visualización de zonas)
   - Junction Reports (presión en cada nodo)
   - Pipe Reports (velocidad, head loss)
```

**Criterios de aprobación automática:**

```
Settings > Pressure Network > Analysis Settings > Validation Rules

- Minimum Pressure: 20 psi
- Maximum Pressure: 80 psi
- Minimum Velocity: 2 fps
- Maximum Velocity: 8 fps

Pipes y junctions que violen estos criterios se marcarán en rojo
```

---

## 6. Integración con Software Externo

### 6.1 EPANET (EPA - Free Software)

**EPANET** es el estándar de industria para análisis hidráulico detallado.

**Capacidades que Civil 3D no tiene:**
- Water quality analysis (chlorine decay, water age)
- Pump scheduling optimization
- Valve operation sequences
- Leakage modeling

**Workflow de integración:**

```
Civil 3D → EPANET:
1. Export Pressure Network:
   Pressure Network > Right-click > Export to EPANET (.INP file)
2. Abrir en EPANET
3. Definir patrones de demanda complejos
4. Agregar tanks, pumps con curvas
5. Run Extended Period Simulation (24+ horas)
6. Analizar resultados gráficos

EPANET → Civil 3D:
1. Exportar node pressures y pipe flows
2. Importar como reference data
3. Actualizar design en Civil 3D
```

**Ejemplo de archivo EPANET (.INP):**

```
[JUNCTIONS]
;ID    Elev    Demand
J1     510     10.5
J2     505     8.2

[PIPES]
;ID    Node1   Node2   Length  Diameter  Roughness
P1     J1      J2      1000    8         140

[RESERVOIRS]
;ID    Head
R1     540
```

### 6.2 Autodesk Storm and Sanitary Analysis (SSA)

Aunque diseñado principalmente para gravity networks, SSA puede analizar pressure networks exportadas desde Civil 3D.

**Ventajas:**
- Integración nativa con Civil 3D
- Interface familiar
- Resultados importables directamente

**Limitaciones:**
- No tan robusto como EPANET para calidad de agua
- Menos opciones de pump modeling

### 6.3 WaterCAD / WaterGEMS (Bentley)

Software comercial profesional con capacidades avanzadas.

**Capacidades adicionales:**
- Optimization algorithms (least-cost design)
- Fire flow analysis automático
- Regulatory compliance checks
- Energy cost analysis

**Integración con Civil 3D:**
- Import/Export via Shapefile o GIS formats
- Requiere conversión manual de datos

---

## 7. Casos Prácticos de Análisis

### Caso 1: Sistema Residencial Básico

**Datos:**
- 200 viviendas
- Elevación: 100-120 ft (relativamente plano)
- Tanque elevado a 150 ft (30 ft de agua)

**Análisis:**

```
1. Demanda:
   - ADD: 200 × 3.5 × 100 = 70,000 gpd = 49 GPM
   - PHD: 49 × 2.0 × 2.5 = 245 GPM

2. Presión estática (punto más bajo, elev 100):
   HGL = 150 + 30 = 180 ft
   P_static = (180 - 100) × 0.433 = 34.6 psi (OK)

3. Presión dinámica (punto más bajo, PHD):
   Asumir pérdidas totales: 15 ft
   HGL_dynamic = 180 - 15 = 165 ft
   P_dynamic = (165 - 100) × 0.433 = 28.1 psi (OK, >20 psi)

4. Fire flow:
   1,500 GPM requerido
   Presión residual: calcular con todas demand junctions + fire flow
   Si P_residual > 20 psi → APROBADO
```

### Caso 2: Sistema con PRV

**Datos:**
- Zona alta: elev 300-350 ft
- Zona baja: elev 200-250 ft
- Tanque: elev 400 ft

**Sin PRV:**
```
Presión en zona baja (elev 200):
P = (400 - 200) × 0.433 = 86.6 psi (EXCESIVO)
```

**Con PRV:**
```
PRV ubicado en elevación 275 ft (entre zonas)
PRV setting: 50 psi salida

Presión en zona baja (elev 200):
HGL_PRV_outlet = 275 + (50/0.433) = 275 + 115.5 = 390.5 ft
P_zona_baja = (390.5 - 200) × 0.433 = 82.5 psi (AÚN ALTO)

Ajustar PRV setting: 30 psi
HGL_PRV_outlet = 275 + 69.3 = 344.3 ft
P_zona_baja = (344.3 - 200) × 0.433 = 62.5 psi (ACEPTABLE)
```

---

## Resumen

El **análisis hidráulico** de pressure networks requiere:

1. **Entender HGL y EGL** - Representación gráfica de energía
2. **Calcular pérdidas por fricción** - Hazen-Williams o Darcy-Weisbach
3. **Considerar pérdidas menores** - Válvulas y accesorios
4. **Analizar múltiples escenarios** - ADD, MDD, PHD, fire flow
5. **Validar contra normas** - AWWA, Ten States, códigos locales
6. **Usar software especializado** - EPANET para análisis detallado
7. **Optimizar diseño** - Balance entre costo y performance

En la siguiente lección, aprenderás a **diseñar pump stations y booster pumps**, incluyendo cálculo de curvas características, punto de operación y optimización energética.

---

**Recursos:**
- EPANET 2.2: [epanet.es/descargas/](https://epanet.es/descargas/)
- AWWA Manual M11: [awwa.org](https://www.awwa.org)
- Hazen-Williams Calculator: [Civil 3D Analysis Tools]
- ISO Fire Flow Equation: [Insurance Services Office]

**Siguiente:** Lección 3 - Pump Stations y Booster Pumps
