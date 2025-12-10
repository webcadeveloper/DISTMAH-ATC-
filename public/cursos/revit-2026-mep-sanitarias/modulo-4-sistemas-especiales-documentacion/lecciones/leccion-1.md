# Lección 1: Sistemas Contra Incendios (Sprinklers)

## Introducción

Los **sistemas de protección contra incendios (fire protection systems)** son críticos para la seguridad de vida (life safety) en edificios comerciales, residenciales multi-familiares, industriales y hospitales. Los **sprinkler systems automáticos** son el método más efectivo de supresión de incendios, reduciendo pérdidas de vida en 80%+ y daños a propiedad en 70%+ según estadísticas NFPA.

Esta lección cubre fundamentos de fire protection, tipos de sprinkler systems, NFPA 13 standards para spacing y sizing, componentes (sprinkler heads, pipes, fire pumps), modelado completo en Revit MEP 2026, y coordinación con otros sistemas MEP.

## Fundamentos de Fire Protection

### Objetivo del Sprinkler System

**Controlar o suprimir incendio** en etapa temprana mediante descarga automática de agua.

**NO es para:**
- Prevenir incendio (eso es prevención/detección)
- Extinguir incendio completamente (eso es responsabilidad de bomberos)

**SÍ es para:**
- Controlar spread de fuego
- Proteger vías de escape (egress)
- Minimizar daño a propiedad
- Dar tiempo para evacuación segura

### Códigos y Normas

**NFPA 13:** Standard for the Installation of Sprinkler Systems
- **Más importante** para design de sprinklers
- Cubre spacing, sizing, componentes, testing

**NFPA 14:** Standpipe and Hose Systems
- Sistemas de mangueras para bomberos

**NFPA 20:** Fire Pumps
- Sizing y performance de fire pumps

**IBC (International Building Code):**
- Especifica **dónde** sprinklers son requeridos
- Por tipo de ocupancy, altura, área

**Ejemplo IBC 903.2:**
- High-rise buildings (> 75 ft altura): Sprinklers requeridos
- Assembly occupancy (> 300 personas): Sprinklers requeridos
- Hospitales, hoteles, escuelas: Sprinklers requeridos

## Tipos de Sprinkler Systems

### 1. Wet Pipe System (Sistema Húmedo)

**Más común (90% de instalaciones).**

**Características:**
- Pipes **siempre llenos de agua presurizada**
- Sprinkler head abre (por calor) → Agua descarga inmediatamente
- Simple, confiable, bajo mantenimiento

**Ventajas:**
- Respuesta rápida
- Económico
- Fácil mantenimiento

**Limitaciones:**
- **NO usar en áreas con riesgo de congelamiento** (< 40°F)
- Risk de water damage si pipe rompe accidentalmente

**Aplicaciones:**
- Oficinas, hoteles, escuelas
- Áreas climatizadas (heated)

### 2. Dry Pipe System (Sistema Seco)

**Para áreas sin calefacción.**

**Características:**
- Pipes llenos de **aire comprimido o nitrógeno** (40-60 psi)
- Sprinkler head abre → Aire escapa → Dry pipe valve abre → Agua fluye
- **Delay:** 30-60 segundos (aire debe escapar primero)

**Ventajas:**
- Protección contra congelamiento
- No water damage si pipe rompe (solo aire escapa)

**Desventajas:**
- Más complejo (requiere air compressor)
- Delay en descarga de agua
- Mayor mantenimiento

**Aplicaciones:**
- Warehouses sin calefacción
- Parking garages
- Áreas exteriores cubiertas

### 3. Pre-Action System (Sistema de Pre-Acción)

**Doble interlock para áreas sensibles al agua.**

**Características:**
- Pipes normalmente secos (vacíos o con aire supervisado)
- Requiere **2 eventos** para descargar agua:
  1. **Detector de humo/calor** activa y abre pre-action valve → Agua llena pipes
  2. **Sprinkler head** abre por calor → Agua descarga

**Ventajas:**
- Protección contra falsas descargas (accidental pipe damage no causa agua)
- Warning temprano (detectores activan antes de sprinklers)

**Desventajas:**
- Más caro
- Más complejo
- Requiere detección confiable

**Aplicaciones:**
- Data centers, server rooms
- Museos, bibliotecas (documentos valiosos)
- Áreas con equipos electrónicos sensibles

### 4. Deluge System (Sistema de Diluvio)

**Descarga simultánea de TODOS los sprinklers.**

**Características:**
- Sprinkler heads **abiertos** (no heat-activated fusible link)
- Pipes normalmente secos
- Deluge valve controlado por detector de calor/humo
- **Detector activa → TODOS los sprinklers descargan**

**Ventajas:**
- Supresión rápida de fuegos rápidos/intensos
- Cobertura total inmediata

**Desventajas:**
- Water damage masivo
- Uso de agua enorme

**Aplicaciones:**
- Hangares de aviones
- Áreas con líquidos inflamables (chemical plants)
- Transformadores eléctricos

## Sprinkler Heads

### Tipos por Orientación

**1. Pendant (Colgante):**
```
Ceiling
   ↓
  [═╧═]  ← Sprinkler head (deflector hacia abajo)
   ╱ ╲   ← Water spray pattern
```
- **Más común**
- Montado en ceiling apuntando hacia abajo
- Deflector distribuye agua en patrón circular

**2. Upright (Vertical):**
```
  ╱ ╲   ← Water spray pattern
 [═╤═]  ← Sprinkler head (deflector hacia arriba)
   ↑
  Pipe
```
- Montado en top de pipe branch
- Deflector arriba → Agua rebota hacia abajo
- Uso: Exposed piping (industrial look)

**3. Sidewall (Pared Lateral):**
```
Wall
  ║
  ║═[═>  ← Sprinkler (dispara hacia afuera)
  ║    ╱╱╱ ← Half-circle pattern
```
- Montado en wall
- Spray pattern semicircular
- Uso: Corridors angostos, residencial

### Temperatura Ratings

**Sprinkler head activa cuando temperatura alcanza rating.**

**NFPA 13 Table 6.2.5.1 - Temperature Ratings:**

| Color Code | Temp Rating | Max Ceiling Temp | Application |
|------------|-------------|------------------|-------------|
| Orange (uncolored) | 135°F (57°C) | 100°F | Ordinary (oficinas, residential) |
| White | 155°F (68°C) | 100°F | Ordinary |
| Blue | 175°F (79°C) | 150°F | Áreas cálidas (boiler rooms) |
| Red | 200°F (93°C) | 150°F | High temp areas |
| Yellow | 286°F (141°C) | 225°F | Very high temp (cocinas comerciales) |
| Green | 360°F (182°C) | 300°F | Extra high temp |

**Selección:**
- Temperatura ambiente max + **100°F margin** mínimo
- Cocina comercial (150°F ceiling) → Yellow (286°F rating)

### Response Time

**Standard Response:**
- RTI (Response Time Index) = 80-350
- Activación normal

**Quick Response (QR):**
- RTI < 50
- Activa más rápido (bulb más pequeño)
- **Requerido** en residential occupancies (NFPA 13R)

**Early Suppression Fast Response (ESFR):**
- Diseñados para suprimir (no solo controlar) incendios
- High water discharge (K-factor alto)
- Uso: Warehouses de almacenamiento alto

## Spacing y Cobertura de Sprinklers

### NFPA 13 Spacing Requirements

**Coverage area por sprinkler:**

**Light Hazard Occupancy (oficinas, hoteles, hospitales):**
- Max área por sprinkler: **200 ft²** (standard spacing)
- Max área: **130 ft²** (Extended Coverage - EC sprinklers)
- Max distance entre sprinklers: **15 ft**
- Min distance entre sprinklers: **6 ft**
- Max distance de sprinkler a wall: **7.5 ft**

**Ordinary Hazard (retail, parking garages):**
- Max área: **130 ft²**
- Max spacing: **15 ft**

**High Hazard (industrial, warehouses):**
- Max área: **100 ft²**
- Max spacing: **12 ft**

### Layout Patterns

**Grid pattern (más eficiente):**
```
S    S    S    S

S    S    S    S

S    S    S    S

S = Sprinkler (spacing uniforme tipo ajedrez)
```

**Tree pattern (branches desde main):**
```
   ───┬───S
      │
   ───┼───S
      │
   ───┼───S
      │
   Main
```

**Typical office spacing:**
- 15 ft × 15 ft grid = 225 ft² (excede 200 max)
- **Usar:** 12 ft × 15 ft = 180 ft² ✓

## Sizing de Fire Protection Piping

### Métodos de Sizing

**NFPA 13 permite 3 métodos:**

1. **Pipe Schedule Method (más simple):**
   - Tabla predefinida de pipe sizes según número de sprinklers
   - Solo para Light/Ordinary Hazard, ≤ 40 sprinklers

2. **Hydraulic Calculation Method (más preciso):**
   - Calcula presión y flow en cada punto del sistema
   - Requerido para sistemas grandes
   - **Más usado profesionalmente**

3. **Density/Area Method:**
   - Basado en densidad de descarga (gpm/ft²) y área de design

### Pipe Schedule Method (Simple)

**NFPA 13 Table 23.4.4.2.2 - Schedule 40 Steel Pipe:**

**Light Hazard:**

| Pipe Size | Max # of Sprinklers |
|-----------|---------------------|
| 1" | 2 |
| 1-1/4" | 3 |
| 1-1/2" | 5 |
| 2" | 10 |
| 2-1/2" | 30 |
| 3" | 60 |
| 4" | 100 |

**Ejemplo:**
- Branch con 8 sprinklers → Requiere **2" pipe**
- Main alimentando 45 sprinklers → Requiere **3" pipe**

### Hydraulic Calculation Basics

**Parámetros key:**

**Density (Densidad de descarga):**
- gpm/ft² que cada sprinkler debe descargar
- Light Hazard: 0.10 gpm/ft²
- Ordinary Hazard Group 1: 0.15 gpm/ft²
- High Hazard: 0.30+ gpm/ft²

**Design Area (Área de diseño):**
- Porción del sistema que se asume operará simultáneamente
- Light Hazard: 1,500 ft²
- Ordinary Hazard: 1,500-3,000 ft²

**Ejemplo - Light Hazard:**
```
Density = 0.10 gpm/ft²
Design Area = 1,500 ft²

Flow requerido = 0.10 × 1,500 = 150 gpm
Presión mínima en sprinkler más remoto = 7 psi (NFPA 13)

Hydraulic calculation determina:
- Pipe sizes necesarios para entregar 150 gpm
- Presión requerida en water supply
```

## Fire Pumps

### Cuándo se Requiere Fire Pump

**Si presión municipal insuficiente:**

**Requerimientos típicos:**
- Presión en sprinkler más remoto: **7-15 psi** mínimo
- Más pérdidas por fricción en pipes
- Más elevación (height)

**Ejemplo:**
```
Sprinkler en Piso 10 (100 ft altura)
Presión requerida = 15 psi
Fricción losses = 20 psi
Pérdida por altura = 100 ft × 0.433 psi/ft = 43.3 psi

Presión total necesaria = 15 + 20 + 43.3 = 78.3 psi

Si presión municipal = 50 psi → INSUFICIENTE
Fire pump requerido para boost adicional 30 psi
```

### Fire Pump Sizing

**NFPA 20 requirements:**

**Capacity:**
- Flow = System demand (ej. 500 gpm)
- Presión = Boost necesario (ej. 50 psi)

**Tipos:**
- **Horizontal split case** (más común)
- **Vertical turbine** (para water tanks)
- **End suction** (pequeños sistemas)

**Power:**
- **Electric motor** (más común)
- Diesel engine (backup si electricidad falla)

**Jockey Pump:**
- Pequeña bomba auxiliar
- Mantiene presión del sistema (compensa leaks menores)
- Evita que fire pump arranque por fluctuaciones mínimas

## Modelado en Revit MEP 2026

### Configurar Fire Protection System

**Paso 1: Create Piping System**

1. **Systems** → **Piping Systems** → **New**
2. **Name:** `Fire Protection`
3. **System Type:** `Fire Protection` (domestic cold water)
4. **Fluid:** `Water`

**Paso 2: Configure Pipe Type**

1. **Pipe Types** → Duplicate
2. **Name:** `Fire Protection - Steel Schedule 40`
3. **Routing Preferences:**
   - Segments: 1", 1-1/4", 1-1/2", 2", 2-1/2", 3", 4", 6"
   - Material: `Steel`
   - Color: **Red** (standard fire protection)
   - Schedule: `Schedule 40`

### Colocar Sprinkler Heads

**Paso 1: Load Sprinkler Family**

1. **Insert** → **Load Family**
2. `MEP\Plumbing Fixtures\Fire Protection\Sprinkler Head - Pendant.rfa`
3. Load también: Upright, Sidewall types

**Paso 2: Place en Ceiling Plan**

1. **Reflected Ceiling Plan** view (RCP)
2. **Systems** → **Sprinkler**
3. **Type:** `Pendant Sprinkler - 1/2"`
4. Click para colocar

**Paso 3: Array de Sprinklers**

**Layout típico - Office floor 60 ft × 120 ft:**

1. Spacing: 12 ft × 15 ft (180 ft² per sprinkler)
2. **Array** command:
   - Columns: 5 (60 ft / 12 ft)
   - Rows: 8 (120 ft / 15 ft)
   - Total: 40 sprinklers

**Paso 4: Sprinkler Properties**

1. Seleccionar sprinkler
2. **Properties:**
   - **Flow:** (calculate o usar default)
   - **K-Factor:** 5.6 (standard sprinkler)
   - **Temperature Rating:** 155°F (ordinary)
   - **Response Type:** Standard
   - **System Type:** Fire Protection

### Routing de Fire Protection Piping

**Paso 1: Branch Lines**

1. **Pipe** → Type: `Fire Protection - Steel`
2. Conectar row de sprinklers con horizontal pipe
3. **Size:** 1" para 2 sprinklers, 1-1/4" para 3-5, etc. (pipe schedule method)

**Paso 2: Cross Mains**

1. Pipe perpendicular conectando múltiples branches
2. Size aumenta según número de sprinklers alimentados
3. Route en espacio entre joists/beams

**Paso 3: Riser (Vertical Feed)**

1. Vertical pipe desde fire pump (basement) → Pisos superiores
2. Size: Según total flow (ej. 4" para 100 sprinklers)

**Paso 4: Main Drain**

1. Horizontal pipe en basement
2. Desde riser → Fire pump → Water supply connection

### Revit 2026: Enhanced Sprinkler Tools

**Auto-Layout de Sprinklers:**

1. **Systems** → **Sprinkler Layout**
2. Select room o area boundary
3. **Settings:**
   - Spacing: 12 ft × 15 ft
   - Pattern: Grid
   - Type: Pendant
4. **Generate** → Revit coloca sprinklers automáticamente

**Coverage Analysis:**

1. **Analyze** → **Sprinkler Coverage**
2. Revit muestra color-coded coverage areas
3. Detecta gaps (áreas sin cobertura)

## Componentes Adicionales

### Inspector's Test Connection

**Función:** Test point para verificar sistema funciona.

**Ubicación:** Punto más remoto del sistema (highest elevation, furthest from riser).

**Componentes:**
- Test valve
- Sight glass (ver water flow)
- Drain connection

### Fire Department Connection (FDC)

**Función:** Permite bomberos conectar mangueras para boost pressure.

**Ubicación:** Exterior building, accesible desde calle.

**Típicamente:**
- 2 connections (Siamese)
- Check valve (evitar backflow hacia fire truck)

### Alarm Valve

**Función:** Detecta water flow y activa alarma.

**Tipos:**
- **Wet pipe alarm valve:** En wet systems
- **Dry pipe valve:** En dry systems (incluye alarm)

## Ejercicio Aplicado

**Ver:** Ejercicio 1 en `ejercicios.md` - Diseñar sprinkler system completo para office building de 3 pisos, calcular spacing según NFPA 13, size pipes usando pipe schedule method, modelar en Revit con 120+ sprinklers, incluir fire pump y riser.

---

**Próxima Lección:** Sistemas de Gas y Gases Especiales - Gas LP/natural piping, medical gases, sizing según BTU loads, safety requirements.
