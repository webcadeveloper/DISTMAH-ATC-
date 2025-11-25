# Lección 2: Sistemas de Ventilación Sanitaria

## Introducción

La **ventilación sanitaria (venting)** es crítica para el funcionamiento correcto del drainage. Los vent pipes permiten entrada de aire al sistema, previniendo vacíos que causarían **siphonage** (succión) de los trap seals y permitiendo que las aguas residuales fluyan libremente. Sin ventilación adecuada, los traps pierden su sello de agua, permitiendo gases tóxicos del sewer entrar al edificio.

Esta lección cubre la función del venting, tipos de sistemas (individual, common, wet, circuit, stack vents), sizing según IPC Chapter 9, vent termination en roof, air admittance valves (AAV), y modelado completo en Revit MEP 2026.

## ¿Por Qué se Requiere Ventilación?

### Problema 1: Trap Siphonage (Succión del Sello)

**Sin vent:**

```
Fixture drena → Agua corre por waste pipe
   ↓
Crea vacío (presión negativa) detrás del flujo
   ↓
Vacío succiona agua del trap
   ↓
Trap seal perdido → Gases del sewer entran
```

**Con vent adecuado:**

```
Fixture drena → Agua corre
   ↓
Vacío se forma, pero...
   ↓
Aire entra por vent pipe → Iguala presión
   ↓
NO siphonage → Trap seal intacto
```

### Problema 2: Slow Drainage (Drenaje Lento)

**Drainage pipe actúa como siphon** cuando llena completamente.

**Sin aire entrando:**
- Pipe lleno de agua = No space para aire
- Aire debe "burbujar" hacia atrás por fixture
- Resultado: **Gurgling sounds + drenaje lento**

**Con vent:**
- Aire entra por vent → No vacuum
- Agua drena rápidamente y silenciosamente

### Problema 3: Pressure Fluctuations

**En edificios altos:**
- Water falling en soil stack crea presión positiva (aire comprimido)
- Presión puede **forzar agua out of traps** en pisos inferiores

**Vent equaliza presión** en todo el sistema.

## Tipos de Venting Systems

### 1. Individual Vent (Vent Individual)

**Definición:** Cada fixture tiene su propio vent pipe dedicado.

**Configuración:**
```
   Roof
    ↑
    │ Vent pipe (vertical)
    │
Lavabo──┐
        │ Waste pipe
        ↓
      Stack
```

**Características:**
- **Más simple** conceptualmente
- Requiere **muchas tuberías** (costoso)
- Usado cuando fixtures están aislados

**IPC Requirements:**
- Vent debe conectar **above flood level rim** del fixture (mínimo 6" arriba)
- Vent diameter: Mínimo 1-1/4" (tabla IPC 916.1)

### 2. Common Vent (Vent Común)

**Definición:** Un solo vent sirve a **2 fixtures** (back-to-back).

**Configuración típica - Lavabos back-to-back:**
```
      Vent
       ↑
       │
Lavabo ─┴─ Lavabo
   (A)     (B)
    ↓       ↓
  Waste   Waste
     ↘   ↙
      Stack
```

**IPC 912 Requirements:**
- Fixtures deben estar en **mismo piso**
- Drains conectan a **sanitary cross** (no tee)
- Common vent conecta **entre** los dos fixtures

**Ventaja:** Menos piping que 2 individual vents.

### 3. Wet Vent

**Definición:** Una tubería sirve como **waste para un fixture** y **vent para otro**.

**Configuración típica - Restroom:**
```
        Vent Stack
            ↑
            │
   WC ──────┴────── Lavabo
   ↓                  ↓
Stack            Waste (wet vented)
```

El waste pipe del lavabo también ventila el WC.

**IPC 912.2 Wet Vent Requirements:**
- Wet vent pipe debe ser **mínimo 2"** (1 DFU adicional requiere 2")
- Solo fixtures permitidos: Lavatory, shower, bathtub, floor drain, WC
- **Kitchen sinks NO permitidos** en wet vents

**Ventaja:** Ahorra tubing significativamente en restrooms compactos.

### 4. Circuit Vent

**Definición:** Vent único sirve a **múltiples fixtures** en un branch horizontal.

**Configuración - Batería de lavabos (public restroom):**
```
    Vent
     ↑
     │
Lav1─┴─Lav2──Lav3──Lav4──Lav5
 ↓    ↓     ↓     ↓     ↓
 └────┴─────┴─────┴─────┘
          Stack
```

**IPC 913 Requirements:**
- Circuit vent conecta **antes del último fixture** en horizontal branch
- Branch debe tener slope uniforme
- Máximo 8 fixtures por circuit

**Uso común:** Public restrooms con múltiples lavabos en línea.

### 5. Stack Vent

**Definición:** Porción superior de un **soil/waste stack** que extends por encima del highest fixture.

**Configuración:**
```
Roof vent termination
        ↑
        │ Stack vent (solo aire)
        │
    ┌───┴───┐ Highest fixture branch
    │       │
    │ STACK │ Soil stack (agua + aire)
    │       │
    └───┬───┘ Lowest fixture branch
        ↓
   Building drain
```

**Características:**
- **Mismo pipe** que soil stack (sin reducción de diámetro)
- Ventila todo el stack system
- Termina en roof

**IPC 906.1:** Stack vent diameter = Soil stack diameter (sin reducir).

### 6. Vent Stack (Independiente)

**Definición:** Tubería vertical dedicada **solo para venting** (no conduce waste).

**Uso:** Edificios grandes donde soil stack está lejos de algunos fixtures.

**Configuración:**
```
   Roof
    ↑
    │ Vent Stack (solo aire)
    │
    ├── Vent branch (Lavabo Piso 3)
    │
    ├── Vent branch (Lavabo Piso 2)
    │
    └── Vent branch (Lavabo Piso 1)
```

**Conecta:** A horizontal vent branches de múltiples fixtures.

## Sizing de Vent Pipes

### IPC Table 916.1 - Size and Length of Vents

**Método:**

**Paso 1: Conocer DFU del fixture**
- Ejemplo: Lavabo = 1 DFU

**Paso 2: Conocer tamaño de waste pipe**
- Ejemplo: Waste pipe = 1-1/2"

**Paso 3: Consultar tabla IPC 916.1**

**Extracto de tabla:**

| Waste Pipe Size | Max DFU | Vent Diameter | Max Vent Length |
|-----------------|---------|---------------|-----------------|
| 1-1/4" | 1 | 1-1/4" | Sin límite |
| 1-1/2" | 2 | 1-1/4" | 50 ft |
| 1-1/2" | 2 | 1-1/2" | Sin límite |
| 2" | 4 | 1-1/2" | 100 ft |
| 2" | 4 | 2" | Sin límite |
| 3" | 42 | 2" | 75 ft |
| 3" | 42 | 3" | Sin límite |
| 4" | 216 | 3" | 100 ft |
| 4" | 216 | 4" | Sin límite |

**Ejemplo - Lavabo:**
```
Lavabo: 1 DFU
Waste pipe: 1-1/2"

Tabla IPC 916.1:
Vent diameter mínimo = 1-1/4"
Max length = 50 ft (si usa 1-1/4" vent)

Si vent length > 50 ft → Usar 1-1/2" vent (sin límite)
```

**Ejemplo - WC:**
```
WC: 4 DFU
Waste pipe (soil): 3" (mínimo para WC)

Tabla IPC 916.1:
Vent diameter mínimo = 2"
Max length = 75 ft (si usa 2" vent)

Si vent > 75 ft → Usar 3" vent
```

### Reglas Generales de Sizing

**IPC 906.2:**

1. **Individual vent:** Mínimo 1-1/4" (cualquier fixture)
2. **Common vent:** Mínimo = Mayor waste pipe de los 2 fixtures
3. **Wet vent:** Mínimo 2" (si sirve WC)
4. **Stack vent:** Igual a soil stack diameter
5. **Vent stack:** Mínimo 1-1/2"

## Vent Termination (Terminación en Roof)

### IPC 905.5 - Vent Terminal Requirements

**Ubicación:**

1. **Altura mínima sobre roof:**
   - Roof usable (terraza): **7 ft** sobre superficie
   - Roof NO usable: **6 inches** sobre superficie
   - Roof con nieve (snow load areas): **12 inches** mínimo

2. **Distancia de openings (ventanas, puertas):**
   - Mínimo **10 ft** horizontal de cualquier opening
   - O **3 ft** arriba del opening

3. **Distancia de property line:**
   - Mínimo **10 ft** si termination está a **< 3 ft** del property line

**Evitar:**
- Terminación debajo de roof overhangs
- Cerca de air intakes de HVAC
- Donde gases puedan re-entrar al edificio

### Vent Cap

**Protección contra:**
- Lluvia entrando
- Pájaros anidando
- Obstrucción con nieve/hielo

**Tipos:**
- **Flat cap** con screen
- **Mushroom cap**
- **Goose neck**

**Importante:** Cap NO debe reducir vent area (debe ser **same diameter** o mayor).

## Air Admittance Valves (AAV)

### ¿Qué es un AAV?

**Válvula mecánica de una vía** que permite **entrada de aire** cuando hay vacío, pero **sella** cuando presión es neutral/positiva.

**Función:** Reemplaza vent pipe tradicional en ciertas aplicaciones.

```
      AAV
       ↑
    [Valve]
       ↑
   (Permite aire entrar, NO salir)
       ↓
    Waste pipe
```

**Componentes:**
- Spring-loaded diaphragm
- Abre cuando presión negativa (vacío)
- Cierra cuando presión normaliza

### Ventajas de AAV

1. **Ahorro de costo:** No requiere vent pipe hasta roof
2. **Instalación rápida:** Especialmente en remodelaciones
3. **Flexibilidad:** Fixtures en áreas difíciles de vent

### Limitaciones IPC 917.5

**IPC permite AAV PERO con restricciones:**

1. **NO pueden reemplazar vent system completo:**
   - Al menos **un vent tradicional** debe terminar en roof (open to atmosphere)
   - AAV solo para branches o fixtures individuales

2. **Ubicación:**
   - **Mínimo 6 inches** arriba del flood level rim del fixture
   - En espacio **ventilado** (no sellado herméticamente)
   - **Accesible** para inspección/reemplazo

3. **Sizing:**
   - AAV debe tener **same capacity** que vent pipe requerido
   - Sizes: 1-1/2", 2", 3", 4"

4. **Aplicaciones prohibidas:**
   - **NO usar** para vent stacks principals
   - **NO usar** en sistemas de múltiples pisos (solo single floor branches)

**Algunas jurisdicciones NO permiten AAV** (verificar local codes).

### Modelado de AAV en Revit

1. **Insert** → **Load Family** → `Air Admittance Valve.rfa`
2. **Place** en vent pipe location
3. **Properties:**
   - **Size:** 1-1/2" (typical para lavabo)
   - **Standard:** `ASSE 1051` o `CSA B79`
4. Conectar AAV a waste pipe con short vertical vent stub

## Modelado de Venting en Revit MEP 2026

### Configurar Vent Pipe Type

**Paso 1: Duplicate Pipe Type**

1. **Systems** → **Pipe Types**
2. Duplicate: `Sanitary - Default` → Name: `Vent - PVC Schedule 40`

**Paso 2: Configure**

1. **Edit Type** → **Routing Preferences**
2. **Segments:** 1-1/4", 1-1/2", 2", 3", 4"
3. **Settings:**
   - Material: `PVC`
   - Color: **Green** (diferente de waste - brown)

**Identificación visual:**
- Waste pipes: Brown
- Vent pipes: Green

### Routing - Individual Vent

**Ejemplo: Lavabo individual con vent**

**Paso 1: Waste Pipe**

1. **Pipe** → **Type:** `Sanitary - PVC Schedule 40`
2. Connect lavabo → Horizontal branch con slope

**Paso 2: Vent Connection**

1. **Pipe** → **Type:** `Vent - PVC Schedule 40`
2. **Start:** Cerca de lavabo (dentro de distance limit - típicamente 5 ft)
3. **Route vertical** hacia arriba
4. **Height:** Mínimo 6" arriba de lavabo rim
5. **Connect to vent stack** o route hasta roof

**Revit automatically:**
- Crea **sanitary tee** en waste pipe para vent takeoff
- Orienta tee correctamente (vent arriba)

### Routing - Common Vent (Back-to-Back Fixtures)

**Ejemplo: 2 lavabos compartiendo common vent**

**Paso 1: Waste Pipes**

1. Route waste desde **Lavabo A** hacia center
2. Route waste desde **Lavabo B** hacia center
3. Ambos conectan a **sanitary cross** (Revit auto-crea)

**Paso 2: Common Vent**

1. **Vent pipe** desde sanitary cross hacia arriba
2. **Single vent** sirve ambos fixtures
3. Route hasta vent stack o roof

### Routing - Wet Vent (Restroom)

**Configuración típica: WC + Lavabo**

**Paso 1: Lavabo Waste**

1. Route desde lavabo → Horizontal
2. **Este waste pipe también actúa como wet vent para WC**
3. Diameter: Mínimo **2"** (IPC requirement)

**Paso 2: WC Connection**

1. Route WC waste pipe hacia lavabo waste pipe
2. Connection point **aguas abajo del lavabo**
3. Revit crea **wye** fitting

**Paso 3: Vent Stack**

1. Desde lavabo waste (aguas arriba), route vent vertical
2. Este vent sirve **ambos fixtures** (lavabo directamente, WC via wet vent)

### Stack Vent Modeling

**Soil stack con stack vent:**

**Paso 1: Create Soil Stack**

1. **Pipe - Sanitary** (ej. 4")
2. **Vertical** desde lowest floor → highest floor
3. Conectar branches horizontales de fixtures en cada piso

**Paso 2: Extend as Stack Vent**

1. Continuar **mismo pipe** por encima del highest branch
2. **NO reducir diameter**
3. Extend hasta roof + 12" mínimo

**Paso 3: Vent Termination**

1. **Load Family:** `Vent Cap.rfa`
2. Place en top de stack vent (en roof)

**Revit 2026:** Stack vent automáticamente mantiene diameter sin reducción.

### Vent Stack (Independiente) Modeling

**Para edificio con múltiples fixtures alejados de soil stack:**

**Paso 1: Create Vent Stack**

1. **Pipe - Vent** (ej. 2")
2. Vertical desde Level 1 → Roof
3. Ubicación: Cerca de fixtures que requieren venting

**Paso 2: Horizontal Vent Branches**

1. En cada piso, route **horizontal vent** desde fixture → Vent stack
2. Connection: **Wye** o **sanitary tee** en vent stack

**Paso 3: Termination**

1. Vent stack extends hasta roof
2. Vent cap en termination

## Best Practices para Venting

### 1. Vent Within Distance Limit

**IPC Table 1002.2 - Maximum Distance of Fixture Trap from Vent:**

| Trap Size | Slope | Max Distance to Vent |
|-----------|-------|----------------------|
| 1-1/4" | 1/4" per ft | 5 ft |
| 1-1/2" | 1/4" per ft | 6 ft |
| 2" | 1/4" per ft | 8 ft |
| 3" | 1/8" per ft | 10 ft |
| 4" | 1/8" per ft | 12 ft |

**Importante:** Vent debe conectar **dentro de esta distancia** del trap.

### 2. Vent Above Flood Level

**Vent connection mínimo 6" arriba del flood level rim** del fixture.

**Flood level rim = Top edge** donde agua desborda.

**Evita:** Agua waste entrando al vent pipe.

### 3. Avoid Vent Sagging

**Vent pipes horizontales** deben tener **slight upward slope** (hacia vent stack/termination).

**Slope recomendada:** 1/4" per foot **hacia arriba**.

**Evita:** Agua condensada estancarse en vent.

### 4. Combine Vents When Possible

**Usar common vents, wet vents, circuit vents** reduce piping.

**Balance:** Ahorro vs complejidad de diseño.

### 5. Label Clearly en Plans

**Color coding en Revit:**
- Waste: Brown
- Vent: Green
- Combinado: Intermediate color

**Tags:**
- "V" para vent pipes
- "WV" para wet vents
- "CV" para common vents

## Troubleshooting Venting Issues

### Síntoma: Gurgling Sounds

**Causa:** Venting insuficiente → Aire burbujeando por fixture drain.

**Solución:**
- Verificar vent no obstruido (nest, ice)
- Aumentar vent diameter
- Reducir vent length

### Síntoma: Slow Drainage

**Causa:** Trap siphonage parcial + aire insuficiente.

**Solución:**
- Añadir AAV si vent tradicional no factible
- Verificar vent slope (no agua acumulada)

### Síntoma: Foul Odors (Olores)

**Causa:** Trap seal perdido → Gases del sewer.

**Solución:**
- Verificar trap tiene agua (rellenar si evaporado)
- Verificar vent está conectado y funcional
- Inspeccionar cracks en trap

## Ejercicio Aplicado

**Ver:** Ejercicio 2 en `ejercicios.md` - Diseñar sistema de ventilación completo para restroom multi-fixture, calcular vent sizes, modelar individual vents, common vent, y wet vent en Revit, verificar compliance con IPC Chapter 9.

---

**Próxima Lección:** Drenaje Pluvial (Aguas de Lluvia) - Roof drains, storm leaders, sizing por rainfall intensity, separación de sanitary/storm systems.
