# Lección 1: Drenaje Sanitario y Aguas Negras

## Introducción

Los **sistemas de drenaje sanitario** transportan aguas residuales (waste water) desde plumbing fixtures hacia el alcantarillado municipal o sistema séptico. A diferencia de water supply (presurizado), el drainage funciona por **gravedad**, requiriendo pendientes correctas, sizing apropiado, y ventilación adecuada para operar eficientemente.

Esta lección cubre fundamentos de drainage, tipos de piping (waste, soil, vent), traps, drainage fixture units (DFU), dimensionamiento básico, pendientes según códigos IPC/UPC, y modelado en Revit MEP 2026 con manejo mejorado de slopes.

## Conceptos Fundamentals de Drainage

### Gravedad como Fuerza Motriz

**Sistemas de drenaje NO usan bombas** (excepto casos especiales como basements debajo del sewer level).

**Requisitos para flujo por gravedad:**
1. **Pendiente continua** descendente (slope)
2. **Sizing adecuado** para capacity requerida
3. **Ventilación** para permitir entrada de aire

**Sin pendiente suficiente:**
- Agua se estanca
- Sólidos no arrastran
- Bloqueos frecuentes

**Pendiente excesiva:**
- Agua corre demasiado rápido
- Sólidos se quedan atrás (no arrastran)
- Erosión de tuberías

**Pendiente óptima:** Balance entre velocidad y arrastre de sólidos.

### Tipos de Aguas Residuales

**1. Blackwater (Aguas Negras):**
- Contiene materia fecal
- Proveniente de: WC (water closets/toilets), urinals
- **Requiere tratamiento** antes de descarga

**2. Graywater (Aguas Grises):**
- NO contiene materia fecal
- Proveniente de: Lavabos, showers, tubs, washing machines, kitchen sinks
- **Puede reutilizarse** (irrigation, flush toilets) con tratamiento mínimo
- Códigos varían por jurisdicción (algunos permiten reuso, otros no)

**3. Stormwater (Aguas Pluviales):**
- Lluvia de techos y superficies
- **Debe separarse** de sanitary drainage (IPC requirement)
- Ver Lección 3 de este módulo

## Tipos de Drainage Piping

### 1. Waste Pipes (Tuberías de Residuos)

**Definición:** Conducen **graywater** (sin materia fecal).

**Ejemplos:**
- Lavabo → Waste pipe → Branch drain
- Shower → Waste pipe → Stack
- Kitchen sink → Waste pipe (puede requerir grease trap)

**Material común:** PVC Schedule 40, ABS

### 2. Soil Pipes (Tuberías de Aguas Negras)

**Definición:** Conducen **blackwater** (con materia fecal).

**Ejemplos:**
- WC → Soil pipe → Soil stack → Building drain

**Material común:**
- PVC Schedule 40 (residencial)
- Cast Iron (comercial - menos ruido)

**Diámetro mínimo:** 3" para WC (IPC 709.1)

### 3. Vent Pipes (Tuberías de Ventilación)

**Función:** Permitir entrada de aire al sistema de drainage.

**NO conducen agua** (solo aire), excepto en "wet vents".

**Detalle:** Ver Lección 2 de este módulo.

### 4. Combined Waste and Vent

**Algunos sistemas combinan** (en ciertas configuraciones permitidas por código).

**Wet vent:** Tubería que sirve como vent para un fixture y waste para otro.

## Fixture Traps

### ¿Qué es un Trap?

**Dispositivo con forma de U o S** que retiene agua, creando **sello hidráulico**.

**Función crítica:** Evitar que gases del sewer (metano, H₂S) entren al edificio.

```
Fixture
   ↓
┌──────┐
│      │  ← Agua atrapada (sello)
└──╲╱──┘
   ↓
  Drain
```

**Profundidad de sello típica:** 2-4 pulgadas de agua.

### Tipos de Traps

**1. P-Trap (Más Común):**
```
Fixture
   ↓
   │
   └─╲
      ╲── → Horizontal waste pipe
      ╱
   ┌─╱
   │
  Vent
```

**Características:**
- Salida horizontal
- Vent conecta cerca del trap
- Usado en lavabos, sinks, tubs

**2. S-Trap (Desaprobado en IPC):**
```
Fixture
   ↓
   │
   └─╲
      ╲
      ╱── → Vertical waste pipe (al piso)
   ┌─╱
```

**Problema:**
- Salida vertical
- **Propenso a siphoning** (pérdida de sello por succión)
- **NO permitido** en instalaciones nuevas (IPC 1002.3)

**3. Bottle Trap:**
- Compacto, usado en Europa
- **NO aprobado** en IPC/UPC USA

**4. Drum Trap:**
- Cilindro grande con tapa removible
- Histórico (casas antiguas)
- Moderno: Solo para fixtures especiales

### Trap Seal Loss (Pérdida de Sello)

**Causas:**

**1. Siphonage (Succión):**
- Flujo rápido en waste pipe crea vacío
- Succiona agua del trap
- **Solución:** Vent adecuado

**2. Evaporation (Evaporación):**
- Trap no usado por largo tiempo (meses)
- Agua se evapora
- **Solución:** Trap primer (dispositivo que rellena periódicamente)

**3. Capillary Action:**
- Trapo u objeto en trap actúa como mecha
- Agua drena lentamente
- **Solución:** Limpieza

**4. Wind Effect:**
- Viento fuerte en vent termination crea presión negativa
- **Solución:** Vent cap apropiado

### Modelado de Traps en Revit

**Opción 1: Traps integrados en fixture families**

Muchas plumbing fixtures en Revit **ya incluyen trap** en la family.

**Verificar:**
1. Seleccionar fixture (ej. lavabo)
2. **Edit Family**
3. En 3D view, verificar si geometry incluye P-trap

**Opción 2: Traps como componentes separados**

1. **Insert** → **Load Family**
2. `Plumbing\Drainage\P-Trap.rfa`
3. **Place** debajo de fixture
4. Conectar con pipes

## Drainage Fixture Units (DFU)

### Concepto

**DFU = Drainage Fixture Unit**

Similar a WSFU (water supply), pero para **drainage**.

**Representa:**
- Caudal de descarga de un fixture estándar
- 1 DFU ≈ 7.5 gallons/minute (28.4 L/min) - IPC definition

**Uso:** Dimensionar tuberías de drainage según carga acumulada.

### IPC Table 703.2 - Drainage Fixture Unit Values

| Fixture Type | DFU |
|--------------|-----|
| Water Closet (tanque) | 4 |
| Water Closet (flushometer) | 6 |
| Urinal (tanque) | 2 |
| Urinal (flushometer) | 4 |
| Lavatory/Lavabo | 1 |
| Bathtub (con/sin shower) | 2 |
| Shower stall | 2 |
| Kitchen sink (residential) | 2 |
| Kitchen sink (commercial) | 4 |
| Dishwasher (residential) | 2 |
| Washing machine (residential) | 3 |
| Floor drain (2") | 2 |
| Service sink/Slop sink | 3 |

**Ejemplo - Restroom residencial:**
```
1 × WC (tanque) = 4 DFU
1 × Lavabo = 1 DFU
1 × Shower = 2 DFU

Total = 7 DFU
```

### Sizing Preliminar con DFU

**IPC Table 710.1(2) - Size of Building Drains and Sewers**

**Para slope de 1/4" por pie (2% pendiente):**

| Pipe Diameter | Max DFU |
|---------------|---------|
| 2" | - (no permitido para building drain) |
| 3" | 42 |
| 4" | 216 |
| 5" | 480 |
| 6" | 840 |
| 8" | 1,920 |
| 10" | 3,500 |

**Ejemplo:**
- Total DFU del edificio = 150
- Slope = 1/4" por pie
- **Pipe size requerido:** 4" (capacity 216 DFU)

## Componentes del Sistema de Drainage

### Branch Drains (Ramales)

**Definición:** Tubería horizontal que recoge varios fixtures en un área.

**Ejemplo:** Restroom branch drain conecta WC + lavabo + shower → Soil stack.

**Pendiente mínima:** 1/4" por pie (IPC 704.1)

### Soil Stack / Waste Stack (Bajantes Verticales)

**Soil stack:**
- Tubería vertical que conduce **blackwater**
- Recibe branches con WC

**Waste stack:**
- Tubería vertical que conduce **graywater** únicamente
- Recibe branches sin WC

**Características:**
- Diámetro constante o creciente hacia abajo
- **NO reducir** diámetro en dirección de flujo
- Extends desde lowest branch → roof (vent termination)

### Building Drain (Desagüe Principal del Edificio)

**Definición:** Tubería horizontal principal en/debajo del piso más bajo.

**Recibe:** Todas las stacks del edificio.

**Descarga a:** Building sewer → Municipal sewer o septic tank.

**Pendiente:** Típicamente 1/4" por pie (mínimo IPC), puede ser hasta 1/2" por pie.

**Diámetro mínimo:** 3" (residencial), 4"+ (comercial).

### Building Sewer (Alcantarillado del Edificio)

**Definición:** Tubería desde building drain → punto de conexión en property line.

**Diferencia con building drain:**
- Building drain: Dentro del edificio o debajo de él
- Building sewer: Fuera del edificio, en terreno

**Material:** PVC Schedule 40 o SDR-35 (exterior), Cast Iron, Vitrified Clay (histórico).

### Cleanouts (Registros)

**Función:** Acceso para limpieza y desobstrucción.

**IPC 708.3 - Cleanout Requirements:**

**Ubicación requerida:**
- Cada cambio de dirección > 45°
- Cada 100 ft de horizontal pipe (max)
- Base de cada stack
- Terminal de cada horizontal branch > 5 ft

**Características:**
- Mismo diámetro que pipe (hasta 4" pipe → 4" cleanout)
- Cover plate accesible (no permanentemente cubierto)
- Facing en dirección de flujo

**Tipos:**
- Threaded plug cleanout
- Cleanout tee con tapa
- Floor cleanout (flush con piso)

## Pendientes (Slopes) en Tuberías de Drainage

### Código IPC 704.1 - Slope Requirements

**Pipe Diameters 2-1/2" o menos:**
- Slope mínima: **1/4" por pie** (2.08% = 1:48)

**Pipe Diameters 3" o más:**
- Slope mínima: **1/8" por pie** (1.04% = 1:96)
- **Recomendada:** 1/4" por pie (mejor performance)

**Slope máxima (general):**
- No especificada rígidamente, pero **evitar > 45°**
- Excesiva slope → Sólidos no arrastran

### Cálculo de Slope

**Ejemplo:**

**Branch drain de 40 ft, pipe 3", slope 1/4" por pie:**

```
Drop = Longitud × Slope
Drop = 40 ft × 0.25 in/ft = 10 in = 0.833 ft

Si inicio está a elevación 10'-0":
Final está a: 10'-0" - 0'-10" = 9'-2"
```

### Inverts (Cotas de Tubería)

**Invert = Elevación interior del fondo de la tubería.**

**Ejemplo:**
- Center elevation = 10'-0"
- Pipe diameter = 4" (0.333 ft)
- **Invert = 10'-0" - 0.167 ft = 9'-10"**

**En documentación profesional:** Siempre especificar **inverts** (no centers) para drainage.

## Modelado en Revit MEP 2026

### Configurar Sanitary Pipe Type

**Paso 1: Duplicate Pipe Type**

1. **Systems** → **Pipe Types**
2. Seleccionar `Sanitary - Default`
3. **Duplicate** → Name: `Sanitary - PVC Schedule 40`

**Paso 2: Routing Preferences**

1. **Edit Type** → **Routing Preferences**
2. **Segments:**
   - Add sizes: 2", 3", 4", 6", 8"
3. **Settings:**
   - Material: `PVC`
   - Schedule: `Schedule 40`
   - Color: **Brown** (estándar para sanitary)

**Paso 3: Slope Settings**

1. **Piping Settings** (ribbon)
2. **Slopes:**
   - **Sanitary pipe < 3":** `1/4" per foot` (0.02083 rise/run)
   - **Sanitary pipe ≥ 3":** `1/8" per foot` (0.01042 rise/run)
   - **Override to 1/4"** para mejor performance

### Routing de Drainage Pipes con Slope

**Paso 1: Colocar Fixtures**

1. Colocar WC, lavabo, shower en restroom
2. **Properties** de cada fixture:
   - **Drainage Fixture Units:** Asignar según tabla IPC
   - WC = 4 DFU
   - Lavabo = 1 DFU
   - Shower = 2 DFU

**Paso 2: Create Branch Drain**

1. **Systems** → **Pipe**
2. **Type:** `Sanitary - PVC Schedule 40`
3. **Start:** Drain connector de WC
4. Click para crear puntos de routing
5. **Pendiente automática:** Revit aplica slope configurada

**Revit 2026 Improvement - Slope Indicator:**
- Al routing, Revit muestra **slope arrow** en plano
- Verifica dirección de flujo

**Paso 3: Conectar Múltiples Fixtures**

1. Route desde lavabo hacia branch drain existente
2. Revit crea **Sanitary Tee** automáticamente en conexión
3. Repetir para shower

**Paso 4: Connect to Stack**

1. **Place Pipe** desde branch drain → Soil stack (vertical pipe)
2. Revit crea **Wye fitting** (mejor que tee para drainage)

### Revit 2026: Enhanced Slope Management

**Nueva funcionalidad:**

**Slope Override por segmento:**
1. Seleccionar pipe segment
2. **Properties:**
   - **Slope:** Cambiar de `Automatic` a valor custom
   - Ejemplo: `0.03` (3% = 3/8" por pie)

**Slope Verification:**
1. **Analyze** → **Check Slopes**
2. Revit reporta segmentos con slope < mínimo requerido
3. **Highlight** en rojo pipes problemáticos

**Slope Annotation:**
1. **Annotate** → **Slope Tag**
2. Tag automáticamente muestra slope en plans
3. Format: `1/4" PER FT ↓`

### Vertical Stack Routing

**Crear soil stack:**

1. **Systems** → **Pipe**
2. **Type:** `Sanitary - PVC Schedule 40 - 4"`
3. **Start elevation:** Base (ej. Level 0, -10')
4. **End elevation:** Roof (ej. Level 3, +30')
5. **Vertical routing:** Revit mantiene pipe vertical (no slope)

**Conectar branches horizontales:**

1. Route branch desde restroom → Stack
2. **Fitting:** Revit usa **Wye** o **Sanitary Tee** según configuración
3. **Wye preferred** (45° entry, mejor flujo)

## Materiales de Tubería de Drainage

### PVC (Polyvinyl Chloride)

**Más común en instalaciones modernas.**

**Ventajas:**
- Bajo costo
- Lightweight (fácil instalación)
- Resistente a corrosión
- Smooth interior (bajo friction)

**Schedule 40 vs DWV:**
- **Schedule 40:** Pared más gruesa, presión hasta 160 psi
- **DWV (Drain-Waste-Vent):** Pared delgada, **solo para drainage** (0 psi presión)

**Limitación:**
- Ruidoso (agua corriendo audible)
- No apto para altas temperaturas (max 140°F)

### Cast Iron (Hierro Fundido)

**Tradicional en edificios comerciales.**

**Ventajas:**
- **Silencioso** (masa absorbe ruido)
- Durable (50+ años)
- Fire resistant

**Tipos:**
- **Service Weight:** Pared estándar
- **Extra Heavy:** Pared gruesa (subterráneo)

**Joints:**
- **Hub & Spigot** con gasket (moderno)
- **No-hub** con clamps (más rápido)

**Desventaja:**
- Pesado (requiere soporte estructural robusto)
- Costo alto

### ABS (Acrylonitrile Butadiene Styrene)

**Similar a PVC, negro en color.**

**Ventajas:**
- Más impacto-resistente que PVC
- Mejor en climas fríos

**Limitación:**
- **NO permitido** en algunas jurisdicciones (ej. Florida prohíbe ABS)

**Uniones:** Solvent cement (similar a PVC).

## Mejores Prácticas

### 1. Mantener Pendiente Continua

**Evitar:**
- Secciones planas (slope = 0)
- Secciones con slope reverso (flujo hacia arriba)

**Verificar en Revit:**
- Use section views para validar slope continua
- Check invert elevations en cada fitting

### 2. Minimizar Cambios de Dirección

**Cada codo/tee = Resistencia + Potential blockage.**

**Preferir:**
- Runs rectos largos
- Wye fittings (45°) en lugar de tees (90°)

### 3. Sizing Conservador

**Si cálculo da 3" pero cercano al límite:**
- **Usar 4"** para safety margin
- Facilita futuras expansiones

### 4. Cleanouts Accesibles

**No tapar cleanouts** con acabados permanentes.

**Ubicar:**
- En áreas de fácil acceso (no dentro de walls sin access panel)
- Floor cleanouts en áreas transitables

### 5. Soporte Estructural

**Drainage pipes requieren soporte cada:**
- PVC: 4 ft horizontal, 10 ft vertical (max)
- Cast Iron: 5 ft horizontal, 15 ft vertical

**Usar:**
- Pipe hangers, clamps, straps
- **NO soportar peso** de pipe en fixtures

## Ejercicio Aplicado

**Ver:** Ejercicio 1 en `ejercicios.md` - Modelar sistema de drainage para restroom completo con branch drains, soil stack, cleanouts, slopes correctas, y verificación de DFU.

---

**Próxima Lección:** Sistemas de Ventilación Sanitaria - Vent stacks, tipos de venting, sizing, y prevención de trap seal loss.
