# Lección 3: Pump Stations y Booster Pumps

## Introducción

Las **pump stations** (estaciones de bombeo) y **booster pumps** (bombas impulsoras) son componentes críticos en sistemas de agua potable que no pueden depender únicamente de tanques elevados o fuentes de gravedad. Estos sistemas mecánicos proporcionan la energía necesaria para mover el agua desde fuentes de baja elevación, vencer diferencias de elevación significativas, o mantener presión adecuada en redes extensas.

En esta lección avanzada, aprenderás a diseñar pump stations completas, seleccionar bombas basándote en curvas características, calcular el punto de operación del sistema, modelar booster pumps en Civil 3D 2026, y optimizar el consumo energético.

**Duración estimada:** 110 minutos
**Nivel:** Avanzado

---

## 1. Fundamentos de Bombeo

### 1.1 Tipos de Bombas para Agua Potable

**Centrifugal Pumps (Bombas Centrífugas)**

Las más comunes en sistemas municipales de agua potable.

**Características:**
- Impulsor rotativo transfiere energía al fluido
- Flujo continuo y suave
- Eficiencia alta en punto de diseño (70-85%)
- Mantenimiento relativamente bajo

**Subtipos:**

1. **Horizontal Split Case:**
   - Caudales: 500-10,000 GPM
   - Heads: 50-400 ft
   - Uso: Pump stations principales
   - Ventaja: Fácil mantenimiento

2. **Vertical Turbine:**
   - Sumergida en pozo o wet well
   - Caudales: 100-5,000 GPM
   - Heads: hasta 1,000 ft
   - Uso: Pozos profundos

3. **End Suction:**
   - Compacta, single stage
   - Caudales: 25-1,500 GPM
   - Heads: 50-300 ft
   - Uso: Booster pumps, aplicaciones pequeñas

4. **Submersible:**
   - Motor y bomba sellados
   - Instalada completamente bajo agua
   - Uso: Pozos residenciales, lift stations

**Positive Displacement Pumps**

Menos comunes en agua potable, más en químicos o lodos.

**Tipos:**
- Reciprocating (pistón)
- Rotary (gear, screw, lobe)
- Uso limitado: dosificación de químicos, aplicaciones de alta presión

### 1.2 Conceptos Fundamentales

**Head (Altura de Carga):**

La bomba debe vencer:

```
Total Dynamic Head (TDH) = H_static + H_friction + H_pressure

Donde:
H_static = Elevación de descarga - Elevación de succión (ft)
H_friction = Pérdidas por fricción en succión + descarga (ft)
H_pressure = Presión requerida en descarga (ft) = P_required / 0.433

Ejemplo:
- Pozo a elevación 100 ft, nivel de agua a 80 ft (20 ft bajo superficie)
- Tanque elevado a 250 ft
- Pérdidas por fricción: 15 ft
- Presión requerida en tanque: atmosférica (0 psig)

H_static = 250 - 80 = 170 ft
TDH = 170 + 15 + 0 = 185 ft
```

**Flow (Caudal):**

```
Q = Demand × Safety Factor

Demanda máxima diaria (MDD) con factor de seguridad 1.2-1.5
O
Fire flow + MDD simultáneo (peor caso)

Ejemplo:
MDD = 500 GPM
Fire flow = 1,500 GPM
Q_design = 500 + 1,500 = 2,000 GPM
```

**Hydraulic Power (Potencia Hidráulica):**

```
P_hydraulic = (Q × TDH × γ) / 3,960

Donde:
Q = Caudal (GPM)
TDH = Total Dynamic Head (ft)
γ = Peso específico del agua (8.34 lb/gal)
3,960 = Factor de conversión a HP

Ejemplo:
Q = 1,000 GPM, TDH = 150 ft
P_hydraulic = (1,000 × 150 × 8.34) / 3,960 = 316 HP
```

**Brake Horsepower (BHP - Potencia al Freno):**

```
BHP = P_hydraulic / Efficiency_pump

Efficiency típica: 70-85% en punto de diseño

BHP = 316 / 0.75 = 421 HP

Motor selection: Siguiente tamaño comercial estándar
→ 500 HP motor (margen de seguridad)
```

**Motor Power (Potencia Eléctrica):**

```
P_electric (kW) = BHP × 0.746 / Efficiency_motor

Efficiency_motor típica: 92-96%

P_electric = 421 × 0.746 / 0.94 = 334 kW
```

---

## 2. Curvas Características de Bombas

### 2.1 Curva Q-H (Caudal-Altura)

La **pump curve** muestra la relación entre caudal y head que la bomba puede proporcionar.

**Forma típica:**
- Head máximo a Q = 0 (shut-off head)
- Head disminuye conforme Q aumenta
- Pendiente más pronunciada = bomba "steep curve"
- Pendiente suave = bomba "flat curve"

**Ejemplo de curva (bomba centrífuga típica):**

```
Modelo: ABC-1000, 8" discharge, 1750 RPM

Q (GPM)    H (ft)    Efficiency (%)    BHP
0          200       0                 50
200        195       45                70
400        188       65                95
600        180       78                120
800        168       85                145
1000       155       88                168
1200       138       85                190
1400       118       75                210
1600       92        60                225

Best Efficiency Point (BEP): Q=1000 GPM, H=155 ft, Eff=88%
```

**Representación gráfica:**

```
Head (ft)
200 |●
    |  ●
180 |    ●●
    |      ●●●
160 |         ●●●  ← BEP
    |            ●●●
140 |               ●●●
    |                  ●●●
120 |                     ●●
100 |________________________●●
    0   400   800  1200  1600  Q (GPM)
```

### 2.2 Curva del Sistema (System Curve)

La **system curve** representa la resistencia total del sistema:

```
H_system = H_static + K × Q²

Donde:
H_static = Componente constante (elevación)
K = Coeficiente de resistencia del sistema
Q = Caudal

K se calcula de:
K = H_friction_design / Q_design²
```

**Ejemplo:**

```
H_static = 120 ft (diferencia de elevación)
A Q_design = 1,000 GPM, pérdidas por fricción = 35 ft

K = 35 / 1000² = 0.000035

System curve:
Q (GPM)    H_system (ft)
0          120
200        121.4
400        125.6
600        132.6
800        142.4
1000       155.0  ← Operating point
1200       170.4
1400       188.6
1600       209.6
```

### 2.3 Operating Point (Punto de Operación)

El **operating point** es donde la pump curve intersecta la system curve.

**Método gráfico:**

```
Superponer pump curve y system curve:

Head (ft)
200 |
    |  Pump
180 |    ●●
    |      ●●●    System
160 |   ✓     ●●●●●●
    |  /         ●●●
140 | /            ●●●
    |/________________●●
    0   400   800  1200  1600  Q (GPM)
              ↑
         Operating Point:
         Q ≈ 1000 GPM
         H ≈ 155 ft
```

**Validación:**
- Operating point debe estar cerca del BEP (±20%)
- Operar lejos del BEP causa:
  - Baja eficiencia (alto consumo eléctrico)
  - Vibración excesiva
  - Desgaste prematuro

**Método analítico:**

Igualar ecuaciones:

```
H_pump(Q) = H_system(Q)

Para pump curve aproximada:
H_pump = A - B×Q - C×Q²

Para system curve:
H_system = H_static + K×Q²

Resolver:
A - B×Q - C×Q² = H_static + K×Q²
(C + K)×Q² + B×Q + (H_static - A) = 0

Usar fórmula cuadrática para encontrar Q
```

---

## 3. Diseño de Pump Stations

### 3.1 Componentes de una Pump Station

**Wet Well (Cámara Húmeda):**
- Recibe agua de fuente (pozo, río, tanque de almacenamiento bajo)
- Dimensionamiento basado en:
  - Volumen mínimo para evitar ciclado excesivo de bombas
  - Nivel mínimo (evitar vortex y air entrainment)
  - Nivel máximo (capacidad de almacenamiento temporal)

**Cálculo de volumen del wet well:**

```
V_min = (Q_pump × t_min_cycle) / 4

Donde:
Q_pump = Capacidad de bomba (GPM)
t_min_cycle = Tiempo mínimo entre arranques (típicamente 10-15 min)
4 = Factor para permitir 2 niveles (ON y OFF)

Ejemplo:
Q = 500 GPM, t = 10 min
V_min = (500 × 10) / 4 = 1,250 gallones = 167 ft³

Si wet well es circular, diámetro 10 ft:
A = π×5² = 78.5 ft²
Rango ON-OFF = 167/78.5 = 2.1 ft (vertical entre niveles)
```

**Dry Well (Cámara Seca) o Outdoor Installation:**
- Contiene bombas, motores, válvulas, controles
- Diseño para acceso de mantenimiento
- Ventilación adecuada (equipos generan calor)

**Suction Piping:**
- Diámetro: 1-2 tamaños mayor que descarga (reducir velocidad)
- Velocidad máxima: 5 fps (evitar cavitación)
- Pendiente continua hacia bomba (evitar air pockets)
- Válvulas de pie (foot valves) si no hay sumergencia positiva

**Discharge Piping:**
- Check valve (inmediatamente después de bomba)
- Gate valve o butterfly valve (aislamiento)
- Flow meter (medición de caudal)
- Pressure gauge (monitoreo)

**Electrical and Controls:**
- Variable Frequency Drives (VFDs) para eficiencia
- Float switches o pressure transducers (nivel)
- SCADA integration para monitoreo remoto
- Backup power (generador o UPS)

### 3.2 Selección de Número de Bombas

**Criterios:**

1. **Redundancy (Redundancia):**
   - Sistemas críticos: N+1 (si necesitas 2, instala 3)
   - Sistemas pequeños: Mínimo 2 bombas

2. **Variable Demand (Demanda Variable):**
   - Demanda baja: 1 bomba operando
   - Demanda media: 2 bombas operando
   - Demanda pico: 3 bombas operando

**Ejemplo de configuración:**

```
Demanda:
- Nocturna (12am-6am): 200 GPM
- Diurna normal: 500 GPM
- Pico (mañana/tarde): 800 GPM
- Fire flow + pico: 2,300 GPM

Selección:
3 bombas × 800 GPM c/u = 2,400 GPM total

Operación:
- Nocturna: 1 bomba al 25% (VFD)
- Normal: 1 bomba al 60%
- Pico: 1 bomba al 100%
- Fire flow: 3 bombas al 100% = 2,400 GPM
- Si 1 bomba falla: 2 bombas × 800 = 1,600 GPM (suficiente para normal)
```

### 3.3 Configuración: Series vs Parallel

**Parallel Operation (Operación en Paralelo):**

Bombas conectadas con suction común y discharge común.

**Efecto:**
- Caudal se SUMA
- Head permanece igual

```
1 bomba: Q=800 GPM, H=150 ft
2 bombas en paralelo: Q≈1,500 GPM (no 1,600 debido a resistencia del sistema), H=150 ft
3 bombas en paralelo: Q≈2,100 GPM, H=150 ft
```

**Curva de múltiples bombas en paralelo:**

```
Para cada valor de H, sumar los Q:

H (ft)    Q_1bomba    Q_2bombas    Q_3bombas
200       0           0            0
180       600         1200         1800
160       800         1600         2400
140       1000        2000         3000
120       1150        2300         3450
```

**Series Operation (Operación en Serie):**

Bomba 1 descarga a bomba 2 (cascada).

**Efecto:**
- Head se SUMA
- Caudal permanece igual

```
1 bomba: Q=500 GPM, H=100 ft
2 bombas en serie: Q=500 GPM, H≈190 ft (no 200 debido a pérdidas)
```

**Uso:**
- Rare en water distribution
- Común en high-head applications (edificios altos, pipeline largo)

### 3.4 Modelado en Civil 3D 2026

**Paso 1: Insertar Pump como Appurtenance**

```
1. Pressure Network Layout Tools > Appurtenance
2. Type: Pump
3. Click para ubicar en discharge del wet well
```

**Paso 2: Definir Pump Curve**

```
Properties > Pressure Network Data > Pump Properties

Method 1 - Single Point:
- Design Flow: 1,000 GPM
- Design Head: 155 ft
- (Civil 3D asume curva estándar)

Method 2 - Multiple Points (RECOMENDADO):
- Pump Curve Table:
  Q1=0, H1=200
  Q2=500, H2=180
  Q3=1000, H3=155
  Q4=1500, H4=120
- Civil 3D interpola curva completa
```

**Paso 3: Configurar Efficiency Curve (Opcional)**

```
Efficiency Curve Table:
Q (GPM)    Eff (%)
0          0
500        65
1000       88
1500       75
2000       50
```

Civil 3D usará esto para calcular energy consumption.

**Paso 4: Power Calculation**

```
Properties > Analysis Data
- Motor Efficiency: 94%
- VFD Efficiency (si aplica): 96%

Civil 3D calculará:
- Hydraulic Power (HP)
- Brake Horsepower (BHP)
- Electric Power (kW)
- Energy Cost ($/hr) [si defines tarifa eléctrica]
```

---

## 4. Booster Pumps en Sistemas de Distribución

### 4.1 Cuándo usar Booster Pumps

**Scenarios:**

1. **Área de Elevación Alta:**
   - Sistema principal tiene presión insuficiente
   - Alternativa a zona de presión separada con tanque

2. **Desarrollo Nuevo en Periferia:**
   - Demasiado lejos del tanque principal
   - Pérdidas por fricción excesivas

3. **Edificio Alto:**
   - Requiere más presión que disponible en main
   - Booster pump en basement o roof

4. **Extensión de Red Existente:**
   - Sin capacidad de aumentar source pressure
   - Solución localizada

**Ventajas:**
- Menos costoso que nuevo tanque elevado
- Flexibilidad de ubicación
- Puede ser temporal o permanente

**Desventajas:**
- Requiere energía continua (costo operativo)
- Punto de falla (mantenimiento)
- Requiere backup power para confiabilidad

### 4.2 Sizing de Booster Pump

**Determinar head requerido:**

```
Ejemplo:
- Presión disponible en main: 30 psi
- Presión requerida en desarrollo: 50 psi
- Diferencia de elevación: +20 ft

Head_required = (50 - 30) / 0.433 + 20
              = 46.2 + 20
              = 66.2 ft

Más pérdidas por fricción en tubería de booster a desarrollo: 10 ft

TDH_booster = 66.2 + 10 = 76.2 ft
→ Seleccionar bomba con TDH ≈ 80 ft
```

**Determinar caudal:**

```
Desarrollo: 150 viviendas
Peak Hour Demand: 150 × 3.5 personas × 100 gpd × 2.5 (factor) / 1440 min
                = 91 GPM

Fire flow (1 hidrante): 1,000 GPM

Q_design = 91 + 1,000 = 1,091 GPM
→ Bomba de 1,200 GPM @ 80 ft TDH
```

### 4.3 Booster Pump con Storage Tank

**Configuración recomendada:**

```
Main → Booster Pump → Storage Tank → Elevated Development

Storage tank provee:
- Buffer durante peak demand
- Presión por gravedad si bomba falla
- Reduce ciclado de bomba
```

**Sizing del tanque:**

```
V_tank = Q_peak × t_outage

Donde:
t_outage = Tiempo esperado para reparar bomba o restaurar power

Ejemplo:
Q_peak = 100 GPM
t_outage = 4 horas
V_tank = 100 × 240 = 24,000 galones

Más fire flow reserve:
1,000 GPM × 120 min = 120,000 galones

Total: 144,000 galones (considerar tanque de 150,000 gal)
```

### 4.4 Control Strategies

**Pressure-Based Control:**

```
Pressure switch en discharge:
- Start pump: P < 45 psi
- Stop pump: P > 55 psi

Pros: Simple, confiable
Contras: Ciclado frecuente si no hay tanque
```

**Level-Based Control (con tanque):**

```
Float switches en tanque:
- Start pump: Nivel < 25%
- Stop pump: Nivel > 75%

Pros: Menos ciclado, más eficiente
Contras: Requiere tanque
```

**VFD Constant Pressure:**

```
VFD ajusta velocidad de bomba para mantener presión constante:
- Setpoint: 50 psi
- VFD varía RPM según demanda

Pros: Presión constante, muy eficiente, sin ciclado
Contras: Más costoso, requiere mantenimiento de VFD
```

---

## 5. NPSH y Cavitación

### 5.1 Net Positive Suction Head (NPSH)

**Concepto:**

El **NPSH** es la presión absoluta disponible en la suction de la bomba, menos la presión de vapor del agua. Si NPSH es insuficiente, el agua hierve (cavita) dentro de la bomba, causando daño severo.

**NPSH Available (NPSHA) - del sistema:**

```
NPSHA = H_atm + H_static_suction - H_friction_suction - H_vapor

Donde:
H_atm = Presión atmosférica (34 ft a nivel del mar, 33.9 ft @ 1,000 ft elevación)
H_static_suction = Nivel de agua sobre centerline de bomba (positivo si sobre, negativo si bajo)
H_friction_suction = Pérdidas en tubería de suction
H_vapor = Presión de vapor del agua (0.28 ft @ 50°F, 0.59 ft @ 70°F, 1.17 ft @ 90°F)

Ejemplo (favorable - flooded suction):
Elevación: 500 ft sobre nivel del mar (H_atm ≈ 33 ft)
Nivel de agua en wet well: 10 ft SOBRE centerline de bomba
Pérdidas en suction: 2 ft
Temperatura agua: 70°F (H_vapor = 0.59 ft)

NPSHA = 33 + 10 - 2 - 0.59 = 40.41 ft

Ejemplo (desfavorable - suction lift):
Nivel de agua: 10 ft BAJO centerline de bomba
Pérdidas en suction: 3 ft

NPSHA = 33 - 10 - 3 - 0.59 = 19.41 ft
```

**NPSH Required (NPSHR) - de la bomba:**

Proporcionado por fabricante en curva de bomba:

```
Típicamente:
- NPSHR aumenta con caudal
- NPSHR mayor en bombas de alta velocidad (RPM)

Ejemplo:
Q (GPM)    NPSHR (ft)
0          8
500        10
1000       15
1500       22
2000       32
```

**Criterio de diseño:**

```
NPSHA > NPSHR + Safety Margin

Safety margin típico: 3-5 ft

En ejemplo favorable:
NPSHA = 40.41 ft
NPSHR @ 1000 GPM = 15 ft
Margin = 40.41 - 15 = 25.41 ft (EXCELENTE)

En ejemplo desfavorable:
NPSHA = 19.41 ft
NPSHR @ 1000 GPM = 15 ft
Margin = 19.41 - 15 = 4.41 ft (MARGINAL - considerar bomba con menor NPSHR)
```

### 5.2 Prevención de Cavitación

**Strategies:**

1. **Aumentar NPSHA:**
   - Elevar nivel de wet well (más sumergencia)
   - Reducir pérdidas en suction (diámetro mayor, menos accesorios)
   - Enfriar agua (reduce presión de vapor)
   - Instalar en elevación menor (mayor presión atmosférica)

2. **Reducir NPSHR:**
   - Seleccionar bomba de menor RPM (1,150 RPM vs 1,750 RPM)
   - Bomba de doble suction (reduce velocidad de entrada)
   - Inducer en bomba (pre-compression)

3. **Configuración de succión óptima:**
   - Tubería de suction con pendiente continua hacia arriba (evitar air pockets)
   - Reducer excéntrico (top flat) antes de bomba
   - Longitud recta mínima: 5-10 diámetros antes de bomba
   - Evitar codos o válvulas cerca de suction flange

**Síntomas de cavitación:**
- Ruido (crackling, popcorn sound)
- Vibración excesiva
- Desempeño errático
- Daño visible en impeller (pitting)

---

## 6. Cálculo de Consumo Energético

### 6.1 Energy Cost Analysis

**Costo operativo anual:**

```
Cost_annual = (BHP × 0.746 × Hours_per_year × Cost_per_kWh) / Efficiency_motor

Ejemplo:
BHP = 150 HP (promedio durante operación)
Horas de operación: 6,000 hrs/año (68% duty cycle)
Tarifa eléctrica: $0.12/kWh
Eficiencia de motor: 94%

Cost_annual = (150 × 0.746 × 6,000 × 0.12) / 0.94
            = 80,748 / 0.94
            = $85,902 /año
```

**Comparación con tanque elevado:**

```
Tanque elevado de 500,000 galones: $800,000 capital cost
Pump station + storage bajo: $400,000 capital cost

Ahorro inicial: $400,000
Costo operativo extra: $85,900/año

Payback period = 400,000 / 85,900 = 4.7 años

Si vida útil > 20 años:
Total cost pump = $400k + $85.9k × 20 = $2,118,000
Total cost tanque = $800k + minimal energy = ~$850,000

→ Tanque elevado es más económico a largo plazo
Pero: considerar factores no monetarios (estética, terreno disponible, etc.)
```

### 6.2 Optimization con VFDs

**Variable Frequency Drives (VFDs)** ajustan velocidad de bomba para match demand.

**Affinity Laws:**

```
Q₂/Q₁ = N₂/N₁
H₂/H₁ = (N₂/N₁)²
P₂/P₁ = (N₂/N₁)³

Donde:
N = RPM
Q = Flow
H = Head
P = Power
```

**Ejemplo:**

```
Bomba operando a 100% speed (1,750 RPM):
Q = 1,000 GPM, H = 155 ft, BHP = 168 HP

Durante demanda baja, solo necesitas 500 GPM:

N₂/N₁ = Q₂/Q₁ = 500/1,000 = 0.5
N₂ = 0.5 × 1,750 = 875 RPM

H₂ = H₁ × (0.5)² = 155 × 0.25 = 38.75 ft
P₂ = P₁ × (0.5)³ = 168 × 0.125 = 21 HP

Power savings: 168 - 21 = 147 HP (87% reducción!)
```

**ROI de VFD:**

```
VFD cost: $15,000 (para 200 HP motor)
Energy savings: 50 HP average × 0.746 × 8,000 hrs × $0.12 / 0.94 = $37,936/año

Payback: 15,000 / 37,936 = 0.4 años (5 meses)
→ Excelente inversión
```

---

## 7. Redundancia y Sistemas de Respaldo

### 7.1 Backup Power

**Opciones:**

1. **Diesel Generator:**
   - Auto-start en power failure
   - Sizing: 125% de total connected load
   - Fuel tank: 24-48 horas de autonomía
   - Mantenimiento: Monthly testing, annual service

2. **UPS (Uninterruptible Power Supply):**
   - Instantáneo (no transition time)
   - Limitado a equipos críticos (controles, instrumentación)
   - No práctico para bombas grandes (muy costoso)

3. **Grid Connection Redundancy:**
   - Dual feeds desde subestaciones diferentes
   - Automatic transfer switch
   - Más confiable pero no protege contra blackout regional

**Sizing del generador:**

```
Load:
- 3 bombas × 200 HP × 0.746 = 447.6 kW
- HVAC, luces, controles: 20 kW
- Total connected: 467.6 kW

Generator sizing:
467.6 × 1.25 (factor de seguridad) = 584.5 kW
→ Generador de 600 kW (estándar comercial)

Fuel consumption (diesel):
≈ 0.06 gal/kW-hr @ 75% load
0.06 × 450 kW = 27 gal/hr

Autonomía de 48 horas:
27 × 48 = 1,296 galones
→ Tanque de 1,500 galones
```

### 7.2 Pump Redundancy Configuration

**Duty/Standby:**

```
2 bombas al 100% capacity c/u:
- 1 en operación (duty)
- 1 en standby (ready to start)

Pros: Simple, económico
Contras: No escalabilidad para demandas variables
```

**Lead/Lag/Standby:**

```
3 bombas al 50-60% capacity c/u:
- Lead: Runs primero
- Lag: Arranca si lead no suficiente
- Standby: Backup si alguna falla

Pros: Mejor eficiencia, alternancia reduce desgaste
Contras: Lógica de control más compleja
```

**Multiple Duty + Standby:**

```
4 bombas al 33% capacity c/u:
- 3 en servicio (100% combined)
- 1 standby

Pros: Máxima redundancia y escalabilidad
Contras: Más costoso, más espacio
```

---

## Resumen

El diseño de **pump stations y booster pumps** requiere:

1. **Entender curvas Q-H** - Punto de operación óptimo en BEP
2. **Calcular TDH correctamente** - Static + friction + pressure head
3. **Seleccionar configuración apropiada** - Parallel para más Q, series para más H
4. **Validar NPSH** - Evitar cavitación con margen suficiente
5. **Optimizar energía** - VFDs para demanda variable
6. **Planificar redundancia** - Backup power y bombas redundantes
7. **Modelar en Civil 3D** - Pump curves y análisis integrado

En la siguiente lección, aprenderás **Multi-Utility Coordination**, gestionando múltiples redes (agua, alcantarillado, gas, eléctrico, telecom) en un mismo proyecto con Civil 3D.

---

**Recursos:**
- Hydraulic Institute: [www.pumps.org](https://www.pumps.org)
- Pump Curve Selection: Fabricante (Goulds, Grundfos, Xylem, etc.)
- VFD Savings Calculator: [ABB, Siemens online tools]
- AWWA Manual M11: Steel Pipe (incluye pump station design)

**Siguiente:** Lección 4 - Multi-Utility Coordination
