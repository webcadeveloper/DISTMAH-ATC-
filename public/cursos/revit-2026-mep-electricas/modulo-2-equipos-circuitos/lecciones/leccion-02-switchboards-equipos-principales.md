# Lección 2: Switchboards y Equipos Principales

## Introducción

Los **switchboards** son equipos de distribución primaria que reciben energía desde la acometida principal (utility service) y la distribuyen hacia múltiples **panelboards** o cargas grandes mediante **feeders** (alimentadores). En instalaciones medianas y grandes, los switchboards forman el primer nivel de la jerarquía de distribución eléctrica.

Esta lección cubre el modelado de switchboards, configuración de feeders, diseño de subestaciones eléctricas, equipos principales de medición y protección, y cálculo de capacidades según demanda total del proyecto.

## Jerarquía de Distribución Eléctrica

### Sistema Típico de Edificio Comercial

```
Utility Service (Acometida)
        ↓
Main Switchboard (SWBD-MAIN) - 2000A, 480V
        ├→ Feeder 1: 400A → Transformer 480V/208V → LP-1 (Lighting Panel L1)
        ├→ Feeder 2: 400A → LP-2 (Lighting Panel L2)
        ├→ Feeder 3: 300A → PP-1 (Power Panel L1)
        ├→ Feeder 4: 200A → HVAC Equipment (Chillers, AHUs)
        └→ Feeder 5: 100A → Emergency Panel (EPP-1)
```

**Niveles:**

1. **Utility Service** - Acometida eléctrica (no modelada en Revit típicamente)
2. **Main Switchboard** - Distribución primaria
3. **Feeders** - Cables gruesos (circuitos alimentadores)
4. **Transformers** - Cambio de voltaje (si aplicable)
5. **Panelboards** - Distribución secundaria
6. **Branch Circuits** - Circuitos ramales a cargas finales

## Modelar Switchboard en Revit

### Procedimiento Paso a Paso

**Paso 1: Colocar Switchboard**

1. **Systems** → **Electrical** → **Electrical Equipment**
2. **Type Selector:**
   - `Switchboard - 480V 3PH 4W` (sistema trifásico 480V)

3. **Properties:**
   - **Name:** `SWBD-MAIN`
   - **Load Classification:** `Power` (distribución general)
   - **Distribution System:** `480Y/277V Wye`
   - **Rating:** `2000A` (capacidad del main breaker)
   - **Number of Poles:** `N/A` (switchboards no usan concepto de "poles" como panelboards)

4. En vista de plano **Ground Floor** (o Basement), colocar en **main electrical room**

**Paso 2: Configurar Electrical Properties**

**Electrical - Loads:**
- **Voltage:** `480Y/277V` (línea-línea/línea-neutro)
- **Rating:** `2000A`
- **Number of Circuits:** `0` (inicialmente)
- **Distribution System:** `480Y/277V Wye`

**Electrical - Circuit:**
- **Panel Name:** `SWBD-MAIN`

![Switchboard en Main Electrical Room](../imagenes/mod2-switchboard-main.png)

### Diferencias: Switchboard vs. Panelboard

| Característica | Switchboard | Panelboard |
|----------------|-------------|------------|
| Capacidad | 400A - 4000A+ | 100A - 400A |
| Voltaje típico | 480V, 277V | 208V, 120V |
| Construcción | Secciones modulares grandes | Gabinete compacto |
| Uso | Distribución primaria | Distribución secundaria |
| Circuitos | Feeders a panelboards | Branch circuits a cargas |
| Ubicación | Main electrical room | Distribuidos por pisos |
| Costo | Alto ($$$$) | Moderado ($$) |

## Crear Feeders desde Switchboard

### Feeder = Circuito Alimentador

**Definición:** Circuito que alimenta un panelboard o carga grande desde switchboard.

**Características:**
- Conductores gruesos (típicamente #2 AWG a 500 kcmil)
- Alta capacidad (100A - 800A)
- Protección con breaker en switchboard
- Enrutado mediante cable tray o conduit grande

### Procedimiento: Crear Feeder

**Paso 1: Seleccionar Panelboard Destino**

Ejemplo: Crear feeder desde `SWBD-MAIN` hacia `LP-1` (Lighting Panel Level 1).

1. En vista de plano, seleccionar panelboard `LP-1`

**Paso 2: Crear Circuit (Feeder)**

1. **Modify | Electrical Equipment** → **Power**
2. **Select Panel** dialog aparece
3. Seleccionar `SWBD-MAIN` (switchboard que alimentará este panel)
4. Click **OK**

**Paso 3: Routing del Feeder**

**Revit dibuja path automáticamente:**
- Línea desde `SWBD-MAIN` hasta `LP-1`
- Color según voltage (rojo = 480V típico)

**Si routing automático no es satisfactorio:**

1. Seleccionar circuit (feeder)
2. **Edit Circuit** (ribbon)
3. Hacer click para agregar **puntos de ruta** (waypoints)
   - Click 1: Salida vertical de SWBD
   - Click 2: Horizontal en ceiling del Ground Floor
   - Click 3: Sube a Level 1
   - Click 4: Horizontal hacia LP-1
   - Click 5: Entra a LP-1
4. **Finish** (checkmark verde)

![Feeder Routing](../imagenes/mod2-feeder-routing.png)

**Paso 4: Configurar Propiedades del Feeder**

Seleccionar feeder → **Properties:**

**Electrical - Circuiting:**
- **Circuit Number:** `F1` (Feeder 1)
- **Panel:** `SWBD-MAIN`
- **Circuit Type:** `Feeder` (automático si destino es panelboard)

**Electrical - Loads:**
- **Calculated Load (VA):** `48,000 VA` (lee del panelboard destino automáticamente)
- **Demand Factor:** `1.0` (100% - feeders típicamente no aplican factor)

**Electrical - Wire:**
- **Wire Size:** `#2/0 AWG` (00 AWG)
- **Number of Conductors:** `4` (3 fases + neutro)
- **Ground Conductor Size:** `#6 AWG`
- **Wire Material:** `Copper`
- **Insulation:** `THHN` (90°C rating)

**Electrical - Protection:**
- **Rating:** `250A` (breaker en switchboard)
- **Poles:** `3` (breaker trifásico)

### Calcular Tamaño de Conductor de Feeder

**Ejemplo:** Feeder hacia `LP-1` con 48,000 VA total.

**Paso 1: Calcular Corriente**

**Fórmula trifásica:**
```
I = P / (√3 × V_LL)
I = 48,000 VA / (1.732 × 480V)
I = 48,000 / 831.4
I = 57.7 A
```

**Paso 2: Aplicar Factor de Seguridad (NEC 215.2)**

Feeder debe soportar **125%** de carga continua:
```
I_required = 57.7 A × 1.25 = 72.1 A
```

**Paso 3: Seleccionar Conductor**

**NEC Table 310.16** (THHN Copper, 75°C):

| AWG | Ampacity |
|-----|----------|
| #6 | 65A |
| #4 | 85A ✓ |
| #3 | 100A |

**Selección:** **#4 AWG Copper THHN** (85A > 72.1A)

**Paso 4: Verificar Caída de Voltaje**

**NEC recomienda:** Máximo **3%** voltage drop en feeders.

**Fórmula (monofásica aproximada):**
```
V_drop = (2 × I × L × R) / 1000

Donde:
I = 57.7 A
L = 50 m (longitud del feeder)
R = Resistencia del conductor (Ω/km)
```

**Resistencia #4 AWG Copper:** 0.808 Ω/km (a 75°C)

```
V_drop = (2 × 57.7 × 50 × 0.808) / 1000
V_drop = 4.67 V
```

**Porcentaje de caída:**
```
%V_drop = (4.67 V / 480 V) × 100 = 0.97% ✓
```

**Cumple** con NEC (<3%).

## Subestaciones Eléctricas

### Componentes de Subestación

**Subestación típica en edificio:**

```
Utility Service (13.2 kV media tensión)
        ↓
Transformer (13.2kV / 480V) - 1000 kVA
        ↓
Main Switchboard (480V, 2000A)
        ↓
[Distribución secundaria...]
```

**Elementos modelados:**

1. **Service Point** - Punto de conexión utility (símbolo)
2. **Transformer** - Transformación de voltaje
3. **Main Switchboard** - Distribución
4. **Protective Devices** - Interruptores, fusibles

### Modelar Transformer

**Paso 1: Colocar Transformer**

1. **Systems** → **Electrical** → **Electrical Equipment**
2. **Type Selector:**
   - `Transformer - 480V Delta to 208V Wye - 112.5 kVA`

3. **Properties:**
   - **Name:** `XFMR-1` (Transformer 1)
   - **Primary Voltage:** `480V`
   - **Secondary Voltage:** `208Y/120V`
   - **kVA Rating:** `112.5 kVA`

4. Colocar en **transformer room** o **main electrical room**

**Paso 2: Configurar Relación de Transformación**

**Type Properties** (Edit Type):

**Electrical:**
- **Primary Voltage:** `480V` (Delta o Wye según diseño)
- **Secondary Voltage:** `208Y/120V` (Wye grounded)
- **kVA Rating:** `112.5 kVA`

**Relación de transformación:**
```
Ratio = V_primary / V_secondary
Ratio = 480V / 208V = 2.31:1
```

**Paso 3: Conectar Transformer en Sistema**

**Upstream (primario):**
- Crear feeder desde `SWBD-MAIN` (480V) hacia **primary** del transformer
- Configurar como circuito de 480V

**Downstream (secundario):**
- Crear feeder desde **secondary** del transformer hacia `LP-1` (208V panel)
- Configurar como circuito de 208V

**Flujo:**
```
SWBD-MAIN (480V) ─[Feeder 480V]→ XFMR-1 Primary
XFMR-1 Secondary ─[Feeder 208V]→ LP-1 (208V panel)
```

### Dimensionar Transformer

**Paso 1: Calcular Carga Total Downstream**

Ejemplo: Transformer alimenta 3 panelboards:
- LP-1: 48 kVA
- LP-2: 52 kVA
- PP-1: 35 kVA

**Total:** 48 + 52 + 35 = **135 kVA**

**Paso 2: Aplicar Demand Factor**

**Demand factor según NEC 220.87:**
- Primeros 10 kVA: 100%
- Siguientes 125 kVA: 50%
- Exceso sobre 135 kVA: 25%

```
Demand Load = (10 × 1.0) + (125 × 0.5) + (0 × 0.25)
Demand Load = 10 + 62.5 + 0
Demand Load = 72.5 kVA
```

**Paso 3: Aplicar Factor de Seguridad**

**125%** para crecimiento futuro:
```
Transformer size = 72.5 kVA × 1.25 = 90.6 kVA
```

**Paso 4: Seleccionar Transformer Estándar**

**Tamaños estándar:** 45, 75, **112.5**, 150, 225, 300 kVA

**Selección:** **112.5 kVA** (siguiente tamaño estándar arriba de 90.6 kVA)

**Verificación:**
- 112.5 kVA > 90.6 kVA ✓
- Permite 22 kVA de crecimiento futuro

## Equipos de Medición y Protección

### Meter (Medidor)

**Función:** Medir consumo eléctrico (kWh).

**Modelado en Revit:**

1. **Systems** → **Electrical** → **Electrical Equipment**
2. Type: `Meter - 3 Phase - 480V`
3. Ubicación: Entre utility service y main switchboard
4. **Properties:**
   - Name: `MTR-MAIN`
   - Voltage: `480V`
   - Type: `Revenue Meter` (para facturación)

**No afecta cálculos eléctricos**, solo documentación.

### Main Disconnect

**Función:** Interruptor principal de desconexión (seguridad).

**NEC 230.71:** Requerido a la entrada del servicio.

**Modelado:**

Típicamente **integrado en switchboard** como main breaker.

**Si es separado:**
1. Equipment: `Disconnect Switch - 2000A - 480V - 3P`
2. Ubicar entre meter y switchboard

### Generator (Planta Eléctrica)

**Función:** Respaldo de emergencia.

**Modelado:**

1. **Electrical Equipment** → `Generator - Diesel - 500 kW - 480V`
2. **Properties:**
   - Name: `GEN-1`
   - kW Rating: `500 kW`
   - Voltage: `480V`
   - Fuel: `Diesel`

**Conexión:**
- Generator alimenta **Emergency Switchboard** (`SWBD-EM`)
- Emergency Switchboard alimenta **Emergency Panels** (`EPP-1`, `EPP-2`)

**Automatic Transfer Switch (ATS):**

Equipment que conmuta entre utility y generator automáticamente:

1. Equipment: `ATS - 400A - 480V`
2. Ubicar entre utility/generator y emergency switchboard

## Revit 2026: Distribution System Fields

### Nuevo Campo: Distribution System

**En Equipment Schedule:**

**Agregar campo:**
- `Distribution System` - Muestra sistema asignado (ej. "480Y/277V Wye")

**Beneficio:** Agrupar equipos por sistema de voltaje.

**Schedule output:**

| Equipment | Type | Distribution System | Rating | Voltage |
|-----------|------|---------------------|--------|---------|
| SWBD-MAIN | Switchboard | 480Y/277V Wye | 2000A | 480V |
| XFMR-1 | Transformer | 480V Delta to 208Y/120V Wye | 112.5 kVA | 480V→208V |
| LP-1 | Panelboard | 208Y/120V Wye | 225A | 208V |
| LP-2 | Panelboard | 208Y/120V Wye | 225A | 208V |

**Filtro por sistema:**
```
Distribution System contains "208Y/120V"
```
→ Muestra solo equipos de 208V.

## Mejores Prácticas

### 1. Ubicación de Switchboards

**Criterios:**

**Centralizado:**
- Main switchboard cerca del **punto de entrada** del servicio (minimiza conductor de acometida)

**Accesibilidad:**
- **NEC 110.26:** Mínimo **1.0m** working clearance
- Puertas de electrical room **mínimo 0.9m** ancho (equipos grandes)

**Ventilación:**
- Switchboards generan calor
- Ventilación adecuada o A/C en electrical room

### 2. Feeder Routing

**Usar cable trays:**
- Múltiples feeders en mismo tray (organizado)
- Fácil identificación

**Minimizar longitud:**
- Routing directo reduce voltage drop
- Ahorro en cobre

**Protección física:**
- Conduit metálico en áreas de tránsito
- Cable tray en ceilings/technical spaces

### 3. Redundancia

**Proyectos críticos:**

**Dual feeders:**
- Dos feeders independientes a panelboards críticos
- Conmutación automática con ATS

**Generator backup:**
- Generator para cargas esenciales
- Dimensionar según carga de emergencia (no total)

### 4. Coordinación de Protecciones

**Selectividad:**
- Breakers coordinados para que solo el más cercano a falla dispare
- Main breaker: 2000A (tiempo de disparo lento)
- Feeder breakers: 400A (tiempo medio)
- Branch breakers: 20A (tiempo rápido - instantáneo)

**Curvas de tiempo-corriente:** Analizar en software especializado (SKM PowerTools, ETAP).

## Ejercicio Aplicado

**Ver:** Ejercicio 2 en `ejercicios.md` - Diseñar switchboard principal con 5 feeders, transformer y cálculo de capacidades.

---

**Próxima Lección:** Transformadores y Subestaciones - Cálculos detallados de transformación.
