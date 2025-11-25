# Lección 3: Drenaje Pluvial (Aguas de Lluvia)

## Introducción

Los **sistemas de drenaje pluvial (storm drainage)** recolectan y transportan agua de lluvia desde techos y superficies hacia descargas apropiadas (alcantarillado pluvial, áreas de infiltración, o cuerpos de agua). A diferencia del sanitary drainage, el storm water **NO contiene residuos** y debe mantenerse **separado** del sistema sanitario según IPC Chapter 11.

Esta lección cubre fundamentos de rainfall intensity, cálculo de caudales pluviales, roof drains y scuppers, bajadas pluviales (storm leaders), horizontal storm drains con pendiente, sizing completo según IPC, modelado en Revit MEP 2026, y prácticas de sustainable drainage.

## Fundamentos de Storm Drainage

### ¿Por Qué Separar Sanitary de Storm?

**IPC 1101.2:** Storm water (pluvial) y sanitary waste **DEBEN estar separados**.

**Razones:**

1. **Capacidad de treatment plants:**
   - Plantas de tratamiento sanitario diseñadas para cierto volumen
   - Storm water (lluvia intensa) puede sobrepasar capacity
   - Overflow resultante contamina ríos/océanos

2. **Storm water relativamente limpia:**
   - Solo requiere filtración básica
   - Puede descargarse directamente a cuerpos de agua (con permits)
   - Sanitary requiere tratamiento completo

3. **Código requirement:**
   - IPC prohibe conexión combinada (excepto sistemas legacy antiguos)

### Componentes del Storm Drainage System

**Recolección:**
- Roof drains
- Scuppers (overflow drains en parapet walls)
- Area drains (parking lots, patios)
- Catch basins (street drainage)

**Conducción:**
- Storm leaders (bajadas verticales desde roof)
- Horizontal storm drains con pendiente
- Underground storm sewers

**Descarga:**
- Municipal storm sewer
- Retention ponds / Rain gardens
- Permeable surfaces
- Natural drainage (arroyos, ríos)

## Rainfall Intensity y Cálculo de Caudal

### Rainfall Intensity (Intensidad de Lluvia)

**Definición:** Cantidad de lluvia por unidad de tiempo.

**Unidades:**
- **USA:** Inches per hour (in/hr)
- **Métrico:** Millimeters per hour (mm/hr)

**Varies por:**
- **Región geográfica** (Seattle vs Phoenix)
- **Return period** (probabilidad de evento)

### Return Period (Periodo de Retorno)

**Definición:** Probabilidad estadística de que cierta intensidad de lluvia ocurra.

**Ejemplos:**

**100-year storm:**
- 1% probabilidad de ocurrir en cualquier año
- **NO significa** que ocurre cada 100 años exactamente
- Evento muy intenso (diseño conservador)

**25-year storm:**
- 4% probabilidad anual
- Intensidad moderada-alta
- Típico para design de roof drainage comercial

**10-year storm:**
- 10% probabilidad anual
- Común para design residencial

**5-year storm:**
- 20% probabilidad anual
- Mínimo aceptable

### IPC Rainfall Intensity

**IPC Appendix B Table B101.1 - Design Rainfall Rates:**

**Valores típicos para 1-hour storm (different return periods):**

| City | 5-year (in/hr) | 10-year | 25-year | 100-year |
|------|----------------|---------|---------|----------|
| Miami, FL | 6.0 | 7.0 | 8.5 | 11.0 |
| Houston, TX | 5.5 | 6.5 | 7.5 | 9.5 |
| Seattle, WA | 1.5 | 1.7 | 2.0 | 2.5 |
| Phoenix, AZ | 2.5 | 3.0 | 3.5 | 4.5 |
| Chicago, IL | 3.5 | 4.0 | 5.0 | 6.5 |

**Código local puede especificar** return period requerido (verificar con jurisdiction).

### Cálculo de Caudal Pluvial (Rational Method)

**Fórmula:**

```
Q = (C × I × A) / 96.23

Donde:
Q = Caudal (gpm - gallons per minute)
C = Runoff coefficient (0-1, adimensional)
I = Rainfall intensity (in/hr)
A = Área de captación (ft²)
96.23 = Constante de conversión
```

**En sistema métrico:**

```
Q = (C × I × A) / 360

Q = Liters per second (L/s)
I = mm/hr
A = m²
```

### Runoff Coefficient (C)

**Representa fracción de lluvia que escurre** (no se absorbe).

**IPC Table 1106.2 - Runoff Coefficients:**

| Surface Type | C |
|--------------|---|
| Flat roof (imperme able) | 0.95 |
| Pitched roof (shingles) | 0.85-0.95 |
| Asphalt pavement | 0.85-0.90 |
| Concrete pavement | 0.80-0.95 |
| Gravel | 0.40-0.60 |
| Grass (lawn) | 0.10-0.35 |
| Landscaped areas | 0.10-0.25 |

**Ejemplo - Roof plano:**
```
Área de roof = 10,000 ft²
Rainfall intensity (10-year, 1-hr) = 4.0 in/hr
C = 0.95 (flat roof)

Q = (0.95 × 4.0 × 10,000) / 96.23
Q = 38,000 / 96.23
Q = 395 gpm
```

**Este caudal debe manejarse por roof drains + storm leaders.**

## Roof Drains

### Tipos de Roof Drains

**1. Primary Roof Drain:**
- **Función:** Drenaje principal del techo
- Ubicación: Points bajos del roof
- **Strainer/Dome:** Protege contra hojas, debris
- Connection: A storm leader

**2. Secondary (Overflow) Roof Drain:**
- **IPC 1106.3:** Requerido para roofs planos
- Set **2 inches** arriba del primary drain
- Actúa si primary se bloquea
- **Descarga independiente** (no al mismo leader que primary)

**3. Scupper:**
- **Opening en parapet wall** (borde del techo)
- Actúa como overflow
- Descarga directamente a exterior (con downspout decorativo)
- Requerido en roofs con parapets

### Sizing de Roof Drains

**IPC Table 1106.3 - Size of Vertical Conductors and Leaders:**

**Flow capacity (gpm) para roof drains y leaders:**

| Drain/Pipe Diameter | Max Flow (gpm) |
|---------------------|----------------|
| 2" | 23 |
| 2-1/2" | 41 |
| 3" | 67 |
| 4" | 144 |
| 5" | 261 |
| 6" | 424 |
| 8" | 913 |

**Ejemplo:**
```
Q requerido = 395 gpm (del cálculo anterior)
Usar 3 roof drains (spacing uniforme en roof)

Q por drain = 395 / 3 = 132 gpm

Tabla IPC 1106.3:
4" drain tiene capacity 144 gpm → OK

Seleccionar: 3 × 4" roof drains
```

### Ubicación de Roof Drains

**Best practices:**

1. **Points bajos del roof:**
   - Donde water accumula naturalmente
   - Crear slight slope (1/8" - 1/4" per foot) hacia drains

2. **Spacing:**
   - Máximo spacing: **50 ft** (evitar large ponding areas)
   - Distribución uniforme

3. **Avoid:**
   - Directamente sobre workspaces críticos (si hay leak)
   - Áreas de difícil access para mantenimiento

4. **Redundancy:**
   - Minimum 2 drains (si uno bloquea, otro funciona)
   - Overflow drains/scuppers adicionales

### Strainers (Coladeras)

**Función:** Evitar hojas, debris, bloqueos.

**Tipos:**

**Flat strainer:**
- Grate plano sobre drain
- Fácil limpieza
- Puede bloquear con hojas

**Dome strainer:**
- Cúpula perforada
- Mayor área de filtración
- Menos bloqueos

**IPC 1106.4:** Strainer area mínimo = **1.5× el area** del drain pipe.

**Mantenimiento:** Limpiar strainers **2×/año mínimo** (antes de temporada de lluvias).

## Storm Leaders (Bajadas Pluviales)

### Definición

**Storm leader (vertical conductor):** Tubería vertical que conduce storm water desde roof drain → ground level / underground storm sewer.

### Sizing de Leaders

**Usar misma tabla IPC 1106.3** que roof drains.

**Regla general:**
- Leader diameter ≥ Roof drain diameter
- **NO reducir** diameter en dirección de flujo

**Ejemplo:**
```
4" roof drain → 4" storm leader (min)

Si múltiples drains conectan a un leader:
Drain 1: 4" (132 gpm)
Drain 2: 4" (132 gpm)

Q total = 264 gpm

Tabla IPC 1106.3:
5" leader capacity = 261 gpm → INSUFICIENTE
6" leader capacity = 424 gpm → OK

Usar 6" leader donde ambos drains conectan
```

### Routing de Leaders

**Configuración típica:**

```
Roof Drain 1 (4")
    ↓
    │ Leader (4")
    │
    └──→ Horizontal collector (6")
           ↓
Roof Drain 2 (4")
    ↓
    │ Leader (4")
    │
    └──→ (Conecta a collector)
           ↓
      Underground storm sewer
```

**Interior leaders (dentro del edificio):**
- Requieren **chase** o **shaft** dedicado
- Material: PVC, cast iron (si ruido es concern)

**Exterior leaders (downspouts):**
- Montados en exterior walls
- Material: Aluminum, copper (architectural), PVC

### Cleanouts en Leaders

**IPC 1108.2:** Cleanouts requeridos en storm leaders:

- Base del leader (donde cambia a horizontal)
- Cada cambio de dirección > 45°
- Cada 100 ft vertical

## Horizontal Storm Drains

### Sizing de Horizontal Storm Drains

**IPC Table 1106.4 - Size of Horizontal Storm Drains:**

**Max flow (gpm) por pipe size a different slopes:**

| Pipe Size | 1/8" per ft | 1/4" per ft | 1/2" per ft |
|-----------|-------------|-------------|-------------|
| 3" | 48 | 68 | 96 |
| 4" | 110 | 157 | 221 |
| 5" | 216 | 307 | 433 |
| 6" | 370 | 525 | 741 |
| 8" | 850 | 1,208 | 1,707 |
| 10" | 1,576 | 2,240 | 3,163 |

**Ejemplo:**
```
Q total de building = 800 gpm
Slope disponible = 1/4" per ft (typical)

Tabla IPC 1106.4 (1/4" per ft):
8" pipe capacity = 1,208 gpm → OK

Usar 8" horizontal storm drain
```

### Pendiente Mínima

**IPC 1106.5:**

**Horizontal storm drains:**
- Mínimo **1/8" per foot** (1%)
- **Recomendado:** 1/4" per foot (2%) - mejor self-cleaning

**Comparación con sanitary:**
- Sanitary: 1/4" per ft (pipes < 3")
- Storm: 1/8" per ft permitido (menos sólidos)

## Modelado en Revit MEP 2026

### Configurar Storm Drainage Pipe Type

**Paso 1: Create System**

1. **Systems** → **Piping Systems** → **New**
2. **Name:** `Storm Drainage`
3. **System Type:** `Storm Drainage`
4. **Flow Configuration:** `Calculated`

**Paso 2: Configure Pipe Type**

1. **Pipe Types** → Duplicate
2. **Name:** `Storm Drainage - PVC Schedule 40`
3. **Routing Preferences:**
   - Segments: 3", 4", 5", 6", 8", 10"
   - Material: `PVC`
   - Color: **Blue** (diferente de sanitary - brown)

**Paso 3: Slope Settings**

1. **Piping Settings** → **Slopes**
2. **Storm Drainage pipes:**
   - Default slope: `1/4" per foot` (0.02083)
   - Minimum: `1/8" per foot` (0.01042)

### Colocar Roof Drains

**Paso 1: Load Family**

1. **Insert** → **Load Family**
2. `Plumbing\Drainage\Roof Drain.rfa`
3. **Types disponibles:**
   - 2" Roof Drain
   - 3" Roof Drain
   - 4" Roof Drain

**Paso 2: Place en Roof Plan**

1. **View:** Roof plan
2. **Systems** → **Plumbing Fixture** (o Mechanical Equipment)
3. **Type:** `4" Roof Drain`
4. Click en ubicaciones estratégicas (low points)
5. **Properties:**
   - **Drainage Flow:** `132 gpm` (del cálculo)
   - **System Type:** `Storm Drainage`

**Paso 3: Set Roof Drain Elevation**

1. Seleccionar roof drain
2. **Properties:**
   - **Offset:** Ajustar para que quede flush con roof surface
   - Típicamente: Offset = -6" (debajo de roof structure)

### Routing de Storm Leaders

**Paso 1: Vertical Leader**

1. **Systems** → **Pipe**
2. **Type:** `Storm Drainage - PVC Schedule 40`
3. **Start:** Drain connector del roof drain
4. **Route verticalmente** hacia abajo hasta ground level
5. **Size:** 4" (match roof drain)

**Revit automáticamente:**
- Crea leader vertical sin slope
- Maintains constant diameter

**Paso 2: Connect Multiple Roof Drains**

Si 2 drains en mismo roof area:

1. Route leader desde Drain 1 → Base
2. Route leader desde Drain 2 → Base
3. **Horizontal connector pipe** en base conecta ambos leaders
4. Revit auto-sizes según Q acumulado (ej. 6" para 2×132 gpm)

### Routing de Horizontal Storm Drain

**Paso 1: Underground Collector**

1. **View:** Ground floor plan o basement plan
2. **Pipe - Storm Drainage**
3. **Start:** Base de storm leader
4. **Route hacia:** Descarga (property line, storm sewer connection)
5. **Slope:** 1/4" per ft (automático según settings)

**Paso 2: Connect Leaders**

Conectar múltiples leaders al horizontal collector:

1. Route desde cada leader base → Collector
2. Revit crea **Wye fittings** en connections

**Paso 3: Descarga Final**

1. Horizontal drain termina en property line
2. **Tag:** "TO MUNICIPAL STORM SEWER"
3. O descarga a retention pond, rain garden, etc.

### Revit 2026: Storm Analysis Tools

**Nueva funcionalidad:**

**Flow Analysis:**
1. **Analyze** → **Storm Drainage Analysis**
2. Revit calcula flows acumulados en cada pipe segment
3. **Color-codes** pipes por utilization percentage

**Oversizing Detection:**
- Pipes con < 50% capacity → Highlighted
- Recomendación de size reduction (optimizar costo)

**Schedule Generation:**
1. **View** → **Schedules** → **Storm Drainage Schedule**
2. Auto-populate con:
   - Pipe sizes
   - Flows (gpm)
   - Slopes
   - Materials

## Sustainable Drainage (Green Infrastructure)

### Low Impact Development (LID)

**Filosofía:** Manejar storm water **on-site** en lugar de descargar rápidamente.

**Beneficios:**
- Reduce flood risk
- Filtra contaminantes
- Recarga groundwater
- Reduces stress en municipal storm sewers

### Rain Gardens

**Definición:** Depresión landscaped que captura y filtra storm water.

**Componentes:**
- Plantas nativas tolerantes a agua
- Suelo permeable (sand/gravel mix)
- Undercargas (optional - si infiltración insuficiente)

**Sizing:**
```
Rain garden area = (Roof area × Runoff coefficient) / Infiltration rate

Ejemplo:
Roof area = 5,000 ft²
C = 0.95
Infiltration rate = 0.5 in/hr (typical soil)

Rain garden area = (5,000 × 0.95) / 0.5 = 9,500 ft²

Ajustar por profundidad de rain garden (típicamente 6-12")
```

### Permeable Pavement

**Materiales:**
- Permeable concrete
- Porous asphalt
- Interlocking pavers con gaps

**Función:** Permite infiltración directa en lugar de runoff.

**Aplicaciones:** Parking lots, pathways, plazas.

### Rainwater Harvesting

**Recolectar storm water para reuso:**

**Usos:**
- Irrigation (landscaping)
- Toilet flushing (graywater substitution)
- Cooling tower makeup water

**Sistema típico:**
```
Roof → Roof Drain → First Flush Diverter → Storage Tank → Filtration → Reuse
```

**Beneficios:**
- Reduce water bill
- Reduce storm sewer load
- Sustainable water source

**Códigos:** Varies por jurisdiction (algunos encourage, otros restrict).

## Códigos y Normas

**IPC 2021 Chapter 11 - Storm Drainage:**
- 1101.2: Separate storm from sanitary
- 1106.3: Roof drain sizing
- 1106.4: Horizontal drain sizing
- 1106.5: Slopes
- 1108: Cleanouts

**ASCE 7 - Minimum Design Loads:**
- Rainfall intensities por región
- Return periods

**Local Codes:**
- Pueden especificar return period (ej. 25-year min)
- Permitting para storm sewer connections

## Ejercicio Aplicado

**Ver:** Ejercicio 3 en `ejercicios.md` - Calcular rainfall intensity para región específica, diseñar roof drainage con múltiples drains, size leaders y horizontal storm drains, modelar sistema completo en Revit con descarga a rain garden.

---

**Próxima Lección:** Dimensionamiento y Documentación de Drenaje - Métodos completos de sizing, schedules de sanitary/storm piping, clash detection, documentación final.
