# Lección 8: Etiquetado y numeración automática de instrumentos

**Duración:** 60 minutos
**Módulo:** 2 - P&ID (Diagramas de Proceso e Instrumentación)

## Objetivos de Aprendizaje
✅ Dominar el estándar ISA S5.1-2009 para identificación de instrumentos
✅ Configurar esquemas de numeración automática por zona, sistema y secuencia
✅ Gestionar lazos de instrumentación y control completos
✅ Implementar etiquetado por lotes para aumentar productividad
✅ Generar reportes de instrumentación para documentación de proyecto

## Introducción

La identificación correcta y consistente de instrumentos es fundamental en cualquier proyecto de proceso industrial. Un sistema de etiquetado bien diseñado no solo facilita la comunicación entre disciplinas de ingeniería, sino que es esencial para operación segura, mantenimiento efectivo y resolución rápida de problemas durante toda la vida útil de la planta.

El estándar ISA S5.1-2009 (Instrumentation Symbols and Identification) es el sistema de identificación de instrumentos más ampliamente adoptado en la industria de proceso. Define convenciones universales para nomenclatura de TAGs, simbolización gráfica y representación de señales de control. AutoCAD Plant 3D 2026 incorpora nativamente este estándar, proporcionando herramientas automáticas para aplicar esquemas de numeración consistentes, validar formatos de TAG, y generar documentación completa de instrumentación.

En esta lección exploraremos en profundidad el sistema de identificación ISA S5.1, aprenderá a configurar esquemas de numeración automática adaptados a metodologías específicas de proyecto (por área, por lazo de control, por sistema de proceso), y dominará las herramientas de Plant 3D para etiquetado masivo y generación de índices de instrumentos profesionales. Al finalizar, podrá implementar estrategias completas de identificación que cumplan estándares internacionales y requisitos corporativos específicos.

## 1. Estándares de formato TAG según ISA S5.1

El estándar ISA S5.1-2009 establece un sistema lógico y estructurado para identificar cada instrumento en una planta de proceso.

### 1.1 Estructura básica del TAG de instrumento

Un TAG de instrumento según ISA S5.1 consta de dos componentes principales:

**Estructura general:**
```
[IDENTIFICATION LETTERS] - [LOOP NUMBER] [SUFFIX]
```

**Ejemplo completo:**
```
FIC-2341A

Donde:
F    = Primera letra: variable medida (Flow)
I    = Segunda letra: función (Indicator)
C    = Tercera letra: función adicional (Controller)
-    = Separador estándar
2341 = Número de lazo (loop number)
A    = Sufijo opcional (múltiples instrumentos en mismo lazo)
```

### 1.2 Primera letra de identificación: Variable medida

La primera letra identifica la variable de proceso que se mide o inicia:

**Variables comunes:**

| Letra | Variable | Descripción | Ejemplo |
|-------|----------|-------------|---------|
| **A** | Analysis | Análisis (composición, pH, conductividad) | AIT-101 (Analyzer Indicator Transmitter - pH) |
| **B** | Burner, Combustion | Quemador, combustión, llama | BIC-201 (Burner Indicator Controller) |
| **C** | User's Choice | Elección del usuario (conductividad común) | CIT-301 (Conductivity Indicator Transmitter) |
| **D** | Density, Specific Gravity | Densidad, gravedad específica | DIT-401 (Density Indicator Transmitter) |
| **E** | Voltage (EMF) | Voltaje, fuerza electromotriz | EIC-501 (Voltage Indicator Controller) |
| **F** | Flow | Flujo, caudal | FT-601 (Flow Transmitter) |
| **G** | User's Choice | Elección del usuario (gauging común) | GIT-701 (Gauging Indicator Transmitter) |
| **H** | Hand | Manual, actuación manual | HIC-801 (Hand Indicator Controller) |
| **I** | Current (Electrical) | Corriente eléctrica | IIT-901 (Current Indicator Transmitter) |
| **J** | Power | Potencia eléctrica | JIT-1001 (Power Indicator Transmitter) |
| **K** | Time, Schedule | Tiempo, programa, secuencia | KIC-1101 (Time Indicator Controller) |
| **L** | Level | Nivel | LT-1201 (Level Transmitter) |
| **M** | User's Choice | Elección del usuario (humedad común) | MIT-1301 (Moisture Indicator Transmitter) |
| **N** | User's Choice | Elección del usuario | NIT-1401 |
| **O** | User's Choice | Elección del usuario (ORP común) | OIT-1501 (ORP Indicator Transmitter) |
| **P** | Pressure, Vacuum | Presión, vacío | PT-1601 (Pressure Transmitter) |
| **Q** | Quantity | Cantidad, totalizador | QIT-1701 (Quantity Indicator Transmitter) |
| **R** | Radiation | Radiación ionizante | RIT-1801 (Radiation Indicator Transmitter) |
| **S** | Speed, Frequency | Velocidad, frecuencia | SIT-1901 (Speed Indicator Transmitter) |
| **T** | Temperature | Temperatura | TT-2001 (Temperature Transmitter) |
| **U** | Multivariable | Multivariable | UIT-2101 (Multivariable Indicator Transmitter) |
| **V** | Vibration, Mechanical Analysis | Vibración, análisis mecánico | VIT-2201 (Vibration Indicator Transmitter) |
| **W** | Weight, Force | Peso, fuerza | WIT-2301 (Weight Indicator Transmitter) |
| **X** | Unclassified | No clasificado, especial | XIT-2401 |
| **Y** | Event, State, Presence | Evento, estado, presencia | YIC-2501 (Event Indicator Controller) |
| **Z** | Position, Dimension | Posición, dimensión | ZIT-2601 (Position Indicator Transmitter) |

### 1.3 Letras subsecuentes: Funciones de instrumento

Las letras después de la primera indican funciones del instrumento:

**Funciones de lectura/pasivas:**

| Letra | Función | Descripción | Ejemplo |
|-------|---------|-------------|---------|
| **I** | Indicate | Indicar - muestra valor en pantalla local o remota | PI-101 (Pressure Indicator) |
| **R** | Record | Registrar - registra valores en papel, disco, memoria | PR-102 (Pressure Recorder) |
| **G** | Glass, Gauge | Visor de vidrio, medidor local directo | LG-103 (Level Glass) |
| **A** | Alarm | Alarma - genera alarma cuando excede límite | LAH-104 (Level Alarm High) |
| **E** | Element | Elemento - elemento primario de medición (sensor) | FE-105 (Flow Element - orificio) |
| **T** | Transmit | Transmitir - convierte señal local a señal estándar | PT-106 (Pressure Transmitter) |

**Funciones de control/activas:**

| Letra | Función | Descripción | Ejemplo |
|-------|---------|-------------|---------|
| **C** | Control | Controlar - controla automáticamente la variable | PIC-201 (Pressure Indicator Controller) |
| **S** | Switch | Interruptor - contacto on/off, switch de límite | PSL-202 (Pressure Switch Low) |
| **V** | Valve | Válvula - válvula de control final, damper | PCV-203 (Pressure Control Valve) |
| **Y** | Compute, Convert | Computar, convertir - función de cálculo | PY-204 (Pressure Computing Relay) |
| **K** | Control Station | Estación de control - estación manual/automático | PK-205 (Pressure Control Station) |

**Modificadores de función:**

| Letra | Modificador | Descripción | Ejemplo |
|-------|-------------|-------------|---------|
| **H** | High | Alto - límite superior, alarma alta | PAH-301 (Pressure Alarm High) |
| **L** | Low | Bajo - límite inferior, alarma baja | PAL-302 (Pressure Alarm Low) |
| **M** | Middle, Intermediate | Medio, intermedio | LAM-303 (Level Alarm Middle) |
| **D** | Differential | Diferencial - diferencia entre dos mediciones | PDIC-304 (Pressure Differential Indicator Controller) |
| **F** | Ratio | Razón, relación - control de relación | FFIC-305 (Flow Ratio Indicator Controller) |

### 1.4 Combinaciones típicas de letras

**Instrumentos de medición básicos:**
- **FT**: Flow Transmitter - Transmisor de flujo
- **PT**: Pressure Transmitter - Transmisor de presión
- **TT**: Temperature Transmitter - Transmisor de temperatura
- **LT**: Level Transmitter - Transmisor de nivel
- **AT**: Analysis Transmitter - Transmisor de análisis (pH, conductividad, etc.)

**Instrumentos indicadores:**
- **FI**: Flow Indicator - Indicador de flujo
- **PI**: Pressure Indicator - Indicador de presión local
- **TI**: Temperature Indicator - Indicador de temperatura
- **LI**: Level Indicator - Indicador de nivel

**Controladores:**
- **FIC**: Flow Indicator Controller - Controlador indicador de flujo
- **PIC**: Pressure Indicator Controller - Controlador indicador de presión
- **TIC**: Temperature Indicator Controller - Controlador indicador de temperatura
- **LIC**: Level Indicator Controller - Controlador indicador de nivel

**Registradores:**
- **FR**: Flow Recorder - Registrador de flujo
- **PR**: Pressure Recorder - Registrador de presión
- **TR**: Temperature Recorder - Registrador de temperatura

**Alarmas:**
- **FAH**: Flow Alarm High - Alarma de flujo alto
- **PAL**: Pressure Alarm Low - Alarma de presión baja
- **TAH**: Temperature Alarm High - Alarma de temperatura alta
- **LAL**: Level Alarm Low - Alarma de nivel bajo
- **LAHH**: Level Alarm High High - Alarma de nivel muy alto (crítico)

**Switches:**
- **FSL**: Flow Switch Low - Switch de flujo bajo
- **PSH**: Pressure Switch High - Switch de presión alta
- **TSH**: Temperature Switch High - Switch de temperatura alta
- **LSL**: Level Switch Low - Switch de nivel bajo

**Válvulas de control:**
- **FCV**: Flow Control Valve - Válvula de control de flujo
- **PCV**: Pressure Control Valve - Válvula de control de presión
- **TCV**: Temperature Control Valve - Válvula de control de temperatura
- **LCV**: Level Control Valve - Válvula de control de nivel

**Elementos primarios:**
- **FE**: Flow Element - Elemento de flujo (placa orificio, venturi, etc.)
- **TE**: Temperature Element - Elemento de temperatura (termopar, RTD)
- **PE**: Pressure Element - Elemento de presión (tubo bourdon, cápsula)
- **LE**: Level Element - Elemento de nivel (flotador, radar, etc.)

### 1.5 Número de lazo (Loop Number)

El número de lazo identifica el lazo de instrumentación específico. Puede estructurarse de varias formas según metodología del proyecto:

**Método 1: Numeración secuencial simple**
```
FIC-001, FIC-002, FIC-003, ...
PT-101, PT-102, PT-103, ...
LT-201, LT-202, LT-203, ...
```
- Ventaja: simple, fácil de asignar
- Desventaja: no contiene información de ubicación o sistema

**Método 2: Numeración por área de planta**
```
Primer(os) dígito(s) = código de área

FIC-1001  = Área 10, instrumento 01
FIC-1002  = Área 10, instrumento 02
FIC-2001  = Área 20, instrumento 01

Donde:
10 = Área de recepción de materia prima
20 = Área de reactores
30 = Área de separación
40 = Área de purificación
50 = Área de almacenamiento producto
```

**Método 3: Numeración por sistema de proceso**
```
Primeros dígitos = código de sistema

FIC-1101  = Sistema 11 (alimentación reactor A), instrumento 01
FIC-1201  = Sistema 12 (enfriamiento reactor A), instrumento 01
FIC-2101  = Sistema 21 (alimentación reactor B), instrumento 01

Donde:
11 = Sistema de alimentación reactor A
12 = Sistema de enfriamiento reactor A
13 = Sistema de calentamiento reactor A
21 = Sistema de alimentación reactor B
...
```

**Método 4: Numeración híbrida (área + sistema + secuencia)**
```
Estructura: [Área][Sistema][Secuencia]

FIC-21-001
     ││  └─ Secuencia dentro del sistema (001-999)
     │└──── Sistema dentro del área (1-9)
     └───── Área de planta (1-9)

Ejemplo:
FIC-21-001 = Área 2, Sistema 1, Instrumento 001
FIC-21-002 = Área 2, Sistema 1, Instrumento 002
FIC-32-001 = Área 3, Sistema 2, Instrumento 001
```

**Consideraciones para elegir método:**
- Tamaño de planta: plantas pequeñas (<500 instrumentos) → secuencial simple
- Plantas grandes (>1000 instrumentos) → por área o sistema
- Plantas modulares: híbrido área + sistema
- Consistencia con estándar corporativo existente

### 1.6 Sufijos opcionales

Los sufijos permiten diferenciar instrumentos múltiples en el mismo lazo:

**Sufijos alfabéticos (más común):**
```
FIC-2341A  = Primer controlador en lazo 2341
FIC-2341B  = Segundo controlador en lazo 2341 (backup, redundante)
FIC-2341C  = Tercer controlador

Uso típico: instrumentos redundantes, múltiples puntos de medición en mismo lazo
```

**Sufijos numéricos (menos común):**
```
PT-1234-1  = Primer transmisor en lazo 1234
PT-1234-2  = Segundo transmisor en lazo 1234

Uso típico: múltiples sensores en mismo lazo (ej: termopares múltiples)
```

**Sufijos descriptivos (para claridad adicional):**
```
TT-3456-INLET    = Termopar en entrada
TT-3456-OUTLET   = Termopar en salida
TT-3456-MID      = Termopar en punto medio

Uso típico: proyectos complejos donde ubicación específica es crítica
```

## 2. Configuración de numeración automática en Plant 3D

AutoCAD Plant 3D 2026 puede asignar automáticamente números de TAG según esquemas configurables, eliminando errores manuales y asegurando consistencia.

### 2.1 Acceso a configuración de numeración de instrumentos

**Ruta de configuración:**

1. **Project Setup** (comando `PROJECTSETUP`)
2. Navegue a: **P&ID Settings > Instrument Tagging**
3. O directamente: comando `PNPINSTRUMENTTAGGING`

![Configuración de numeración de instrumentos](../imagenes/leccion-8-config-tagging.png)

### 2.2 Esquema de numeración secuencial

El esquema más simple: asignar números consecutivos automáticamente.

**Configuración paso a paso:**

**1. Crear esquema de numeración:**
- En **Instrument Tagging Settings**, click **New Scheme**
- Nombre: `Sequential_Simple`
- Description: `Numeración secuencial simple por tipo de instrumento`

**2. Configurar formato de TAG:**
```
Format Pattern: [PREFIX][NUMBER][SUFFIX]

Donde:
PREFIX = letras de identificación ISA (FIC, PT, LT, etc.)
NUMBER = número secuencial
SUFFIX = sufijo opcional (A, B, C)
```

**3. Configurar reglas de numeración:**

**Para Transmisores de Flujo (FT):**
```
Instrument Type: Flow Transmitter
Prefix: FT-
Number Format: ####  (4 dígitos)
Starting Number: 1001
Increment: 1
Suffix: (vacío por defecto)

Resultado: FT-1001, FT-1002, FT-1003, ...
```

**Para Controladores de Presión (PIC):**
```
Instrument Type: Pressure Indicator Controller
Prefix: PIC-
Number Format: ####
Starting Number: 2001
Increment: 1

Resultado: PIC-2001, PIC-2002, PIC-2003, ...
```

**Para Transmisores de Temperatura (TT):**
```
Instrument Type: Temperature Transmitter
Prefix: TT-
Number Format: ####
Starting Number: 3001
Increment: 1

Resultado: TT-3001, TT-3002, TT-3003, ...
```

**4. Asignar esquema a clase de instrumento:**
- En árbol de configuración: **P&ID Classes > Instruments > Flow Transmitter**
- Property: **Tagging Scheme** = `Sequential_Simple`
- Repetir para cada clase de instrumento

**5. Aplicar numeración automática:**

Al insertar instrumento:
- Inserte símbolo de instrumento (ej: Flow Transmitter)
- TAG se asigna automáticamente: `FT-1001`
- Siguiente instrumento del mismo tipo: `FT-1002`
- Contador se incrementa automáticamente

### 2.3 Numeración por zona o área de planta

Para proyectos grandes, incorporar código de área en el número de lazo:

**Configuración avanzada:**

**1. Definir zonas de planta:**
- **Project Setup > P&ID Settings > Areas/Zones**
- Botón **New Area**

Crear áreas:
```
Area 10: Recepción Materia Prima
Area 20: Sección de Reactores
Area 30: Sección de Separación
Area 40: Sección de Purificación
Area 50: Almacenamiento Producto
Area 60: Utilidades (steam, CW, etc.)
```

**2. Asignar códigos numéricos:**
```
Area Code | Area Name                  | Prefix
----------|----------------------------|--------
10        | Recepción Materia Prima    | -10
20        | Sección de Reactores       | -20
30        | Sección de Separación      | -30
40        | Sección de Purificación    | -40
50        | Almacenamiento Producto    | -50
60        | Utilidades                 | -60
```

**3. Configurar formato con área:**

```
Tagging Scheme: Area-Based

Format: [PREFIX][AREA][SEQUENCE]

Ejemplo para Flow Transmitter:
Prefix: FT-
Area Code: {AREA}  (variable, tomada del dibujo)
Sequence: ###  (3 dígitos)
Starting Sequence: 001

Resultado en Área 20:
FT-20-001, FT-20-002, FT-20-003, ...

Resultado en Área 30:
FT-30-001, FT-30-002, FT-30-003, ...
```

**4. Asignar área al dibujo P&ID:**

Cada dibujo P&ID representa un área:
- Abra dibujo P&ID específico (ej: P&ID-Reactor-A.dwg)
- Comando: `PNPDRAWINGPROPERTIES`
- Property: **Area Code** = `20` (Sección de Reactores)
- Guarde dibujo

Todos los instrumentos insertados en ese dibujo heredan Area Code = 20, resultando en TAGs como FT-20-001, PIC-20-015, etc.

**5. Manejo de múltiples dibujos en misma área:**

Si múltiples dibujos representan misma área (ej: Reactor A, Reactor B, ambos en Área 20):
- Ambos dibujos tienen Area Code = 20
- La numeración secuencial continúa entre dibujos
- Si P&ID-Reactor-A termina en FT-20-005, P&ID-Reactor-B empieza en FT-20-006

Contador global por área asegura no duplicados.

### 2.4 Numeración por sistema de proceso

Alternativa: organizar por sistema funcional en lugar de ubicación física.

**Configuración:**

**1. Definir sistemas de proceso:**
- **Project Setup > P&ID Settings > Process Systems**
- Botón **New System**

Ejemplos:
```
System 11: Alimentación Reactor A
System 12: Enfriamiento Reactor A
System 13: Calentamiento Reactor A
System 21: Alimentación Reactor B
System 22: Enfriamiento Reactor B
System 31: Sistema de Destilación Principal
System 32: Sistema de Destilación Secundaria
System 40: Sistema de Neutralización
System 50: Sistema de Almacenamiento
```

**2. Configurar formato con sistema:**

```
Format: [PREFIX][SYSTEM][SEQUENCE]

Ejemplo:
Prefix: FIC-
System Code: {SYSTEM}  (variable)
Sequence: ##  (2 dígitos)
Starting: 01

Resultado en Sistema 11:
FIC-11-01, FIC-11-02, ...

Resultado en Sistema 31:
FIC-31-01, FIC-31-02, ...
```

**3. Asignar sistema a líneas de proceso:**

Los instrumentos heredan sistema de la línea a la que están conectados:
- Dibuje línea de proceso
- Properties: **System** = `11` (Alimentación Reactor A)
- Inserte instrumento en línea (ej: Flow Transmitter)
- TAG se asigna automáticamente: `FT-11-01`

Ventaja: instrumentos se numeran según función, no ubicación física.

### 2.5 Formato personalizado con múltiples variables

Para máxima flexibilidad, combine múltiples variables:

**Formato complejo ejemplo:**
```
[PREFIX][AREA]-[SYSTEM]-[SEQUENCE][SUFFIX]

Variables:
PREFIX: FIC, PT, TT, etc. (tipo de instrumento)
AREA: código de área física (1-9)
SYSTEM: código de sistema (01-99)
SEQUENCE: número secuencial (001-999)
SUFFIX: A, B, C (instrumentos múltiples)

Ejemplo:
FIC-2-11-003A

Interpretación:
FIC = Flow Indicator Controller
2 = Área 2 (Reactores)
11 = Sistema 11 (Alimentación Reactor A)
003 = Tercer instrumento en este sistema
A = Primera instancia (si hubiera redundancia)
```

**Configuración en Plant 3D:**

1. **Tagging Scheme Settings**
2. Format: `{PREFIX}{AREA}-{SYSTEM}-{SEQUENCE}{SUFFIX}`
3. Variables configuration:
   - `{PREFIX}`: tomado de clase de instrumento
   - `{AREA}`: property del dibujo P&ID
   - `{SYSTEM}`: property de línea de proceso conectada
   - `{SEQUENCE}`: contador automático por combinación AREA+SYSTEM
   - `{SUFFIX}`: asignado manualmente si necesario

**Validaciones automáticas:**
- Validar que {AREA} existe en lista de áreas definidas
- Validar que {SYSTEM} existe en lista de sistemas definidos
- Validar que combinación completa sea única en proyecto
- Alerta si TAG duplicado detectado

### 2.6 Renumeración automática y resolución de conflictos

Al reorganizar instrumentos, puede requerir renumeración:

**Herramienta de renumeración:**

Comando: `PNPRENUMBERINSTRUMENTS`

**Opciones:**
1. **Renumber Selected**: renumerar instrumentos seleccionados
2. **Renumber by Type**: renumerar todos de un tipo (ej: todos los FT)
3. **Renumber by Area**: renumerar todos en un área
4. **Renumber by System**: renumerar todos en un sistema
5. **Renumber Entire Project**: renumerar todo el proyecto

**Procedimiento de renumeración por área:**

1. Comando: `PNPRENUMBERINSTRUMENTS`
2. Opción: **By Area**
3. Select Area: `20` (Sección de Reactores)
4. Starting Number: `001`
5. Preserve Order: **By insertion order** / **By X coordinate** / **By Y coordinate**
6. Handle Duplicates:
   - **Skip**: mantener TAGs existentes que no crean conflicto
   - **Overwrite**: sobrescribir todos los TAGs
   - **Prompt**: preguntar por cada conflicto
7. Execute

Resultado: todos los instrumentos en Área 20 renumerados secuencialmente desde 001.

**Resolución de conflictos de TAG duplicados:**

Plant 3D detecta TAGs duplicados automáticamente:

**Detección:**
1. Al insertar instrumento con TAG que ya existe
2. Al importar datos desde Excel
3. Al ejecutar validación de proyecto

**Resolución automática:**
- Opción 1: incrementar sufijo (FT-1001 → FT-1001A)
- Opción 2: incrementar secuencia (FT-1001 → FT-1002)
- Opción 3: solicitar TAG manual

**Configuración de resolución:**
- **Project Setup > Validation Settings > Duplicate TAGs**
- Action: **Auto-resolve with suffix** / **Auto-increment** / **Prompt user**

## 3. Lazos de instrumentación (instrument loops)

Un lazo de instrumentación es el conjunto completo de instrumentos y elementos que trabajan juntos para medir y controlar una variable de proceso.

### 3.1 Componentes típicos de un lazo de control

**Lazo de control de flujo típico:**

```
FE-2301   → Flow Element (placa orificio)
FT-2301   → Flow Transmitter (transmisor 4-20mA)
FIC-2301  → Flow Indicator Controller (controlador en DCS)
FY-2301   → Flow Computing Relay (cálculo de señal)
FCV-2301  → Flow Control Valve (válvula de control)
```

**Secuencia funcional:**
1. **FE-2301** (elemento primario) genera presión diferencial proporcional al flujo
2. **FT-2301** (transmisor) mide presión diferencial y transmite señal 4-20mA al DCS
3. **FIC-2301** (controlador) compara flujo medido vs. setpoint, calcula salida de control
4. **FY-2301** (relay de cómputo) convierte señal de control a señal para válvula
5. **FCV-2301** (válvula control) modula posición para mantener flujo en setpoint

Todos estos instrumentos comparten el mismo número de lazo: **2301**

### 3.2 Asignación de número de lazo común

En Plant 3D, asignar mismo número de lazo a todos los instrumentos:

**Método 1: Asignación manual consistente**

Al insertar cada instrumento del lazo:
1. Inserte **FE-2301** (Flow Element)
   - TAG: `FE-2301`
   - Loop Number: `2301`
2. Inserte **FT-2301** (Flow Transmitter)
   - TAG: `FT-2301`
   - Loop Number: `2301` (mismo)
3. Inserte **FIC-2301** (Flow Indicator Controller)
   - TAG: `FIC-2301`
   - Loop Number: `2301` (mismo)
4. Inserte **FCV-2301** (Flow Control Valve)
   - TAG: `FCV-2301`
   - Loop Number: `2301` (mismo)

**Método 2: Herramienta de lazo automático**

Comando: `PNPCREATELOOP`

1. Select instrument type: **Control Loop**
2. Loop Number: `2301`
3. Variable: **Flow**
4. Select instruments to include:
   - Flow Element: FE-2301
   - Flow Transmitter: FT-2301
   - Flow Controller: FIC-2301
   - Control Valve: FCV-2301
5. Plant 3D:
   - Valida que todos tengan mismo loop number
   - Crea relaciones de lazo en base de datos
   - Genera documentación de lazo automáticamente

### 3.3 Tipos de lazos de control

**Lazo de control simple (single loop):**
- Un sensor, un controlador, un elemento final
- Ejemplo: control de nivel con LT, LIC, LCV

**Lazo de control cascada (cascade loop):**
- Controlador maestro controla setpoint de controlador esclavo
- Ejemplo: control de temperatura (TIC maestro) con flujo de vapor (FIC esclavo)

```
Lazo Maestro 3401:
TT-3401   → Temperature Transmitter
TIC-3401  → Temperature Indicator Controller (maestro)

Lazo Esclavo 3402:
FT-3402   → Flow Transmitter (vapor)
FIC-3402  → Flow Indicator Controller (esclavo, recibe setpoint de TIC-3401)
FCV-3402  → Flow Control Valve (vapor)
```

**Lazo de control ratio (ratio loop):**
- Controla relación entre dos flujos
- Ejemplo: mezcla de reactivos A:B en proporción 2:1

```
Lazo 4501 (Flow A - wild):
FT-4501   → Flow Transmitter A
FIC-4501  → Flow Indicator Controller A

Lazo 4502 (Flow B - ratio to A):
FT-4502   → Flow Transmitter B
FFIC-4502 → Flow Ratio Indicator Controller B
FY-4502   → Flow Computing Relay (calcula ratio)
FCV-4502  → Flow Control Valve B
```

**Lazo de control split-range:**
- Un controlador modula dos válvulas en rangos diferentes
- Ejemplo: control de temperatura con calentamiento (0-50%) y enfriamiento (50-100%)

```
Lazo 5601:
TT-5601    → Temperature Transmitter
TIC-5601   → Temperature Indicator Controller (salida 0-100%)
TY-5601    → Temperature Computing Relay (split de señal)
TCV-5601A  → Temperature Control Valve A (heating, 0-50%)
TCV-5601B  → Temperature Control Valve B (cooling, 50-100%)
```

### 3.4 Diagramas de lazos de instrumentación

Los diagramas de lazos (Loop Diagrams) son documentos detallados de cada lazo:

**Contenido típico de loop diagram:**
- Representación esquemática del lazo completo
- Todos los instrumentos con TAGs
- Tipo de señales (4-20mA, digital, neumática)
- Rangos de calibración
- Alarmas configuradas
- Setpoints típicos
- Acciones de control (directa/inversa)
- Interlock y enclavamientos

**Generación automática en Plant 3D:**

Comando: `PNPGENERATELOOPDIAGRAM`

1. Select loop: `2301` (ejemplo control de flujo)
2. Template: seleccione plantilla corporativa o estándar
3. Content options:
   - Include all instruments in loop: Yes
   - Show signal types: Yes
   - Show calibration ranges: Yes
   - Show setpoints: Yes
   - Include notes: Yes
4. Output:
   - Drawing: genera nuevo dibujo con diagrama de lazo
   - PDF: exporta directamente a PDF
   - Both: ambos

**Resultado:** documento profesional con todo el lazo documentado según estándar ISA S5.4.

### 3.5 Validación de lazos completos

Plant 3D valida que los lazos estén completos y correctamente configurados:

**Validaciones automáticas:**

1. **Lazo incompleto:**
   - Detecta si lazo tiene controlador pero falta elemento final
   - Ejemplo: FIC-2301 existe pero FCV-2301 falta
   - Advertencia: "Loop 2301 incomplete - missing control valve"

2. **Numeración inconsistente:**
   - Detecta si instrumentos en mismo lazo tienen loop numbers diferentes
   - Ejemplo: FT-2301, FIC-2301, pero FCV-2305
   - Error: "Inconsistent loop numbering - FCV should be FCV-2301"

3. **Falta de conectividad:**
   - Valida que señales conecten instrumentos del lazo
   - Ejemplo: FT-2301 sin línea de señal a FIC-2301
   - Advertencia: "Missing signal connection FT-2301 to FIC-2301"

4. **Tipo de señal incorrecto:**
   - Valida que tipo de señal sea compatible
   - Ejemplo: transmisor 4-20mA conectado a entrada digital
   - Error: "Signal type mismatch - FT-2301 (analog) to DI-2301 (digital)"

**Ejecución de validación:**

Comando: `PNPVALIDATELOOPS`
1. Select scope: **All loops** / **Selected loops** / **By area**
2. Validation level: **Basic** / **Comprehensive**
3. Generate report: Yes
4. Execute

Reporte lista todos los errores y advertencias por lazo, con sugerencias de corrección.

### 3.6 Gestión de interlock y enclavamientos

Los interlocks son lazos de seguridad que desactivan equipos automáticamente:

**Ejemplo: Interlock de nivel bajo en tanque de alimentación**

```
Lazo de proceso normal 6701:
LT-6701   → Level Transmitter (tanque alimentación)
LIC-6701  → Level Indicator Controller
LCV-6701  → Level Control Valve

Interlock de seguridad:
LSL-6702  → Level Switch Low (nivel mínimo crítico)
P-6701    → Bomba de alimentación
```

**Lógica de interlock:**
- Si LSL-6702 activa (nivel < mínimo) → detiene bomba P-6701 automáticamente
- Previene operación en seco que dañaría bomba
- Interlock debe documentarse claramente en P&ID

**Representación en P&ID:**
- Línea de señal de LSL-6702 a P-6701
- Anotación: "INTERLOCK - Low Level Stop"
- Referencia a matriz de causa-efecto (cause and effect matrix)

**Documentación en Plant 3D:**

1. Crear relación de interlock:
   - Properties de LSL-6702 > **Interlock Devices**
   - Add: P-6701
   - Action: **Stop on Activate**
   - Priority: **Critical**

2. Generar matriz de causa-efecto:
   - Comando: `PNPINTERLOCKMATRIX`
   - Genera tabla con todas las causas (sensores) y efectos (paradas)
   - Exporta a Excel para documentación de seguridad

## 4. Etiquetado por lotes (batch tagging)

El etiquetado por lotes permite asignar o modificar TAGs de múltiples instrumentos simultáneamente.

### 4.1 Selección de instrumentos para etiquetado por lotes

**Métodos de selección:**

**Método 1: Window selection**
- Dibuje ventana de selección alrededor de instrumentos
- Todos los instrumentos dentro de ventana se seleccionan
- Útil para área específica del P&ID

**Método 2: Filtro por tipo**
1. Comando: `FILTER` o `QSELECT`
2. Object Type: **P&ID Instrument**
3. Property: **Class** = `Flow Transmitter`
4. Apply: selecciona todos los FT en el dibujo

**Método 3: Filtro por propiedad**
1. Comando: `QSELECT`
2. Property: **Loop Number** = `2301`
3. Apply: selecciona todos instrumentos del lazo 2301

**Método 4: Data Manager**
1. Comando: `PNPDATAMANAGER`
2. Filtre tabla: **Class** = `Transmitter`, **Area** = `20`
3. Select rows: Ctrl+Click para múltiple selección
4. Botones de selección automáticamente resaltan en dibujo

### 4.2 Asignación masiva de propiedades

Una vez seleccionados instrumentos, asigne propiedades en lote:

**Procedimiento:**

1. Seleccione instrumentos (cualquier método anterior)
2. Click derecho > **P&ID Properties**
3. Diálogo muestra propiedades comunes

**Escenario: cambiar área de todos los transmisores de flujo**

```
Selección: 15 Flow Transmitters
Property a cambiar: Area Code

Antes:
FT-1001, FT-1002, ... (sin área definida)

Acción:
Property: Area Code = 20

Después:
FT-20-001, FT-20-002, ... (todos ahora en área 20)
```

**Escenario: asignar servicio a todos los instrumentos de una línea**

```
Selección: todos los instrumentos conectados a línea L-2301
Property a cambiar: Service

Acción:
Property: Service = "Crude Oil"

Resultado: todos los instrumentos (FT, PT, TT) en esa línea ahora muestran Service = "Crude Oil"
```

### 4.3 Renumeración por lotes

Renumerar múltiples instrumentos secuencialmente:

**Escenario:** tiene 20 transmisores de temperatura numerados irregularmente, quiere renumerarlos 3001-3020 en orden de izquierda a derecha en el P&ID.

**Procedimiento:**

1. Seleccione los 20 TT (window selection o filter)
2. Comando: `PNPBATCHRENUMBER`
3. Configuración:
   - Prefix: `TT-`
   - Starting Number: `3001`
   - Increment: `1`
   - Order: **Left to Right** (por coordenada X)
   - Preview: muestra numeración propuesta
4. Confirm: aplica renumeración

**Resultado:**
```
Antes (irregular):
TT-105, TT-3256, TT-1012, TT-87, TT-2309, ...

Después (secuencial L-R):
TT-3001, TT-3002, TT-3003, TT-3004, TT-3005, ...
```

### 4.4 Importación de TAGs desde Excel

Para proyectos grandes, puede preparar TAGs en Excel e importar:

**Formato de Excel:**

| TAG | Description | Class | Area | System | Service |
|-----|-------------|-------|------|--------|---------|
| FT-20-001 | Flow Transmitter - Crude Feed | Flow Transmitter | 20 | 11 | Crude Oil |
| PT-20-001 | Pressure Transmitter - Reactor Inlet | Pressure Transmitter | 20 | 11 | Crude Oil |
| TT-20-001 | Temperature Transmitter - Reactor | Temperature Transmitter | 20 | 11 | Crude Oil |
| ... | ... | ... | ... | ... | ... |

**Procedimiento de importación:**

1. Prepare lista completa en Excel con todas las columnas necesarias
2. Comando: `PNPIMPORTDATA`
3. Source: seleccione archivo Excel
4. Mapping:
   - Column A (TAG) → Property: TagNumber
   - Column B (Description) → Property: Description
   - Column C (Class) → Property: ComponentClass
   - Column D (Area) → Property: AreaCode
   - Column E (System) → Property: SystemCode
   - Column F (Service) → Property: Service
5. Import mode:
   - **Create new**: crea instrumentos nuevos si TAG no existe
   - **Update existing**: actualiza instrumentos si TAG ya existe
   - **Create and Update**: ambos
6. Validation: Plant 3D valida datos antes de importar
7. Execute: aplica importación

**Ventajas:**
- Preparación offline en Excel más rápida para listas grandes
- Revisión y aprobación más fácil en formato tabla
- Copiar/pegar desde otras fuentes (bases de datos, proyectos anteriores)

### 4.5 Exportación y re-importación para edición masiva

Flujo completo de edición masiva:

**Paso 1: Exportar datos actuales**
1. Data Manager > **Export to Excel**
2. Filter: **Class** = `Instrument`
3. Columns: TAG, Description, Area, System, Service, Loop Number
4. Export: guarda `Instruments_Export.xlsx`

**Paso 2: Editar en Excel**
- Abra archivo en Excel
- Edite masivamente (ej: cambiar todos los Area 10 a Area 15)
- Use fórmulas de Excel para manipulaciones complejas
- Agregue filas para instrumentos nuevos
- Elimine filas de instrumentos obsoletos

**Paso 3: Re-importar datos editados**
1. Comando: `PNPIMPORTDATA`
2. Source: `Instruments_Export.xlsx` (editado)
3. Mode: **Create and Update**
4. Validation: revisar advertencias
5. Execute: aplica todos los cambios al P&ID

**Resultado:** todos los cambios masivos aplicados en segundos, en lugar de editar manualmente cientos de instrumentos uno por uno.

### 4.6 Validación post-etiquetado por lotes

Después de operaciones masivas, validar resultados:

**Validaciones recomendadas:**

1. **Verificar TAGs únicos:**
   - Comando: `PNPVALIDATE` > **Duplicate TAGs**
   - Lista cualquier TAG duplicado
   - Resolver manualmente o con auto-incremento

2. **Verificar formato de TAG:**
   - Validar que todos sigan patrón corporativo
   - Ejemplo: todos deben ser XXX-####, no XXX####

3. **Verificar completitud de datos:**
   - Listar instrumentos con Description vacía
   - Listar instrumentos sin Area o System asignado
   - Completar datos faltantes

4. **Reporte de instrumentos:**
   - Generar Instrument Index completo
   - Revisar manualmente para detectar inconsistencias
   - Distribuir para revisión de equipo

Comando: `PNPINSTRUMENTINDEX` genera reporte completo en Excel/PDF.

## 5. Reportes de TAGs y validación

Los reportes de instrumentación son documentos esenciales de proyecto que se generan automáticamente desde el P&ID.

### 5.1 Índice de instrumentos (Instrument Index)

El índice de instrumentos es la lista maestra de todos los instrumentos del proyecto:

**Contenido estándar:**

| Columna | Descripción |
|---------|-------------|
| TAG | Identificador único del instrumento |
| Description | Descripción funcional |
| Service | Fluido o servicio medido/controlado |
| Loop Number | Número de lazo de control |
| Function | Función específica (Indicator, Transmitter, Controller) |
| Type | Tipo físico (Thermocouple, Orifice Plate, etc.) |
| Range | Rango de calibración (0-100°C, 0-10 bar, etc.) |
| Location | Ubicación (Field, Panel, DCS) |
| Signal Type | Tipo de señal (4-20mA, digital, neumática) |
| Area | Área de planta |
| Drawing | Número de dibujo P&ID |
| Remarks | Notas adicionales |

**Generación en Plant 3D:**

Comando: `PNPINSTRUMENTINDEX`

1. **Scope:**
   - Entire Project: todos los P&IDs
   - Selected Drawings: solo dibujos seleccionados
   - By Area: filtro por área específica

2. **Filter:**
   - Include: seleccione clases de instrumentos a incluir
   - Exclude: excluya instrumentos específicos (ej: instrumentos temporales)

3. **Columns:**
   - Select columns to include (orden personalizable)
   - Show/hide columnas según necesidad corporativa

4. **Sorting:**
   - Primary sort: por TAG (alfabético)
   - Secondary sort: por Area, por Loop Number, etc.

5. **Grouping:**
   - Group by Area: agrupa instrumentos por área
   - Group by System: agrupa por sistema
   - Group by Type: agrupa por tipo de instrumento

6. **Output:**
   - Excel (.xlsx): formato editable
   - PDF: formato para distribución/archivo
   - CSV: para importar a otras herramientas

7. **Execute:** genera reporte inmediatamente

![Ejemplo de Instrument Index](../imagenes/leccion-8-instrument-index.png)

### 5.2 Lista de lazos de control (Loop List)

Reporte de todos los lazos de control con sus componentes:

**Formato típico:**

**Loop 2301 - Flow Control Crude Feed**
- FE-2301: Flow Element - Orifice Plate DN100
- FT-2301: Flow Transmitter - 4-20mA Output, Range 0-150 m³/h
- FIC-2301: Flow Indicator Controller - DCS, PID Control
- FCV-2301: Flow Control Valve - DN100, Pneumatic Actuator

**Loop 2302 - Pressure Control Reactor**
- PT-2302: Pressure Transmitter - 4-20mA Output, Range 0-25 bar
- PIC-2302: Pressure Indicator Controller - DCS, PID Control
- PCV-2302: Pressure Control Valve - DN50, Pneumatic Actuator

**Generación:**

Comando: `PNPLOOPLIST`

1. Scope: All loops / By area / By system
2. Detail level: Summary / Detailed (con especificaciones técnicas)
3. Include: señales, interlocks, alarmas
4. Output: Excel / PDF
5. Execute

### 5.3 Reporte de alarmas (Alarm List)

Lista todos los instrumentos con función de alarma:

**Contenido:**

| TAG | Type | Service | Setpoint | Priority | Action | Acknowledment |
|-----|------|---------|----------|----------|--------|---------------|
| LAH-2501 | Level Alarm High | Water Tank TK-250 | 8.5 m | High | Visual + Audible | Required |
| PAH-2601 | Pressure Alarm High | Reactor R-260 | 22 bar | Critical | Visual + Audible + Interlock | Required |
| TAH-2701 | Temp Alarm High | Distillation Column C-270 | 185°C | High | Visual + Audible | Required |
| LAHH-2501 | Level Alarm High High | Water Tank TK-250 | 9.2 m | Critical | Visual + Audible + Trip | Required |

**Generación:**

Comando: `PNPALARMLIST`

1. Filter: instrumentos con función de alarma (LAH, PAL, TAH, etc.)
2. Include: setpoints, prioridades, acciones
3. Sort: por prioridad (Critical > High > Medium > Low)
4. Output: Excel/PDF

### 5.4 Reporte de válvulas de control (Control Valve List)

Lista todas las válvulas de control con especificaciones:

**Contenido:**

| TAG | Service | Size | Type | Cv | Actuator | Fail Position | Signal |
|-----|---------|------|------|----|----|--------------|--------|
| FCV-2301 | Crude Oil | DN100 | Globe | 120 | Pneumatic | Fail Close | 4-20mA |
| PCV-2302 | Steam | DN50 | Globe | 45 | Pneumatic | Fail Open | 4-20mA |
| LCV-2401 | Water | DN80 | Butterfly | 250 | Electric | Fail Last | 4-20mA |

**Generación:**

Comando: `PNPCONTROLVALVELIST`

### 5.5 Reporte de elementos primarios (Primary Element List)

Lista todos los elementos de medición primarios:

**Contenido:**

| TAG | Type | Service | Size | Range | Material | Beta Ratio | K Factor |
|-----|------|---------|------|-------|----------|------------|----------|
| FE-2301 | Orifice Plate | Crude Oil | DN100 | 0-150 m³/h | SS316 | 0.65 | - |
| FE-2305 | Venturi | Natural Gas | DN150 | 0-5000 Nm³/h | CS | - | - |
| TE-2401 | Thermocouple Type K | Reactor | - | 0-400°C | Inconel | - | - |
| LE-2501 | Radar Level | Water Tank | - | 0-10 m | PVC | - | - |

**Generación:**

Comando: `PNPPRIMARYELEMENTLIST`

### 5.6 Validación cruzada con especificaciones

Plant 3D valida que los instrumentos cumplan especificaciones del proyecto:

**Validaciones típicas:**

1. **Rango de calibración vs. condiciones de proceso:**
   - Ejemplo: TT-2301 tiene rango 0-200°C, pero proceso opera a 250°C
   - Error: "Transmitter range insufficient for process conditions"

2. **Material compatible con servicio:**
   - Ejemplo: instrumento de acero al carbono en servicio de ácido sulfúrico
   - Error: "Material incompatible with corrosive service"

3. **Clasificación de área (hazardous area):**
   - Ejemplo: instrumento no certificado Ex instalado en área Zona 1
   - Error: "Instrument not rated for hazardous area Zone 1"

4. **Señal compatible con sistema de control:**
   - Ejemplo: transmisor con salida HART conectado a entrada 4-20mA básica
   - Advertencia: "HART functionality not supported by receiving system"

**Configuración de validaciones:**

1. **Project Setup > Instrument Specifications**
2. Defina reglas de validación:
   - Rango mínimo/máximo permitido por tipo de instrumento
   - Materiales aceptables por servicio
   - Certificaciones requeridas por área
3. Execute: `PNPVALIDATEINSTRUMENTS`
4. Review report: corregir discrepancias

## 6. Prefijos y sufijos de instrumentos

La estructura completa de TAGs puede incluir prefijos adicionales y sufijos descriptivos según estándares corporativos.

### 6.1 Prefijos de planta o unidad

En proyectos multi-planta o multi-unidad, agregar prefijo de identificación de planta:

**Formato:**
```
[PLANT][UNIT]-[TAG]

Ejemplo:
P1-U2-FIC-2301

Donde:
P1 = Planta 1
U2 = Unidad 2 de Planta 1
FIC-2301 = TAG del instrumento
```

**Configuración en Plant 3D:**

1. **Project Properties**
   - Plant Code: `P1`
   - Unit Code: `U2`

2. **Tagging Scheme**
   - Format: `{PLANT}-{UNIT}-{PREFIX}{NUMBER}{SUFFIX}`
   - Apply to: todos los instrumentos del proyecto

**Resultado:**
- Al insertar Flow Controller, TAG automático: `P1-U2-FIC-0001`
- Claridad total sobre qué planta y unidad pertenece

### 6.2 Sufijos descriptivos de ubicación

Agregar sufijos para distinguir ubicación específica:

**Ejemplos comunes:**

```
TT-2301-TOP    = Termopar en tope de columna
TT-2301-BOT    = Termopar en fondo de columna
TT-2301-MID    = Termopar en sección media

PT-2401-INL    = Transmisor presión en inlet
PT-2401-OUT    = Transmisor presión en outlet

LT-2501-N      = Transmisor nivel - lado norte de tanque
LT-2501-S      = Transmisor nivel - lado sur de tanque
```

**Configuración de sufijos permitidos:**

1. **Project Setup > Tagging Settings > Allowed Suffixes**
2. Define lista de sufijos válidos:
   ```
   TOP, BOT, MID
   INL, OUT
   N, S, E, W (norte, sur, este, oeste)
   A, B, C (primario, secundario, terciario)
   1, 2, 3 (numéricos)
   ```

3. Validación: Plant 3D valida que sufijos usados estén en lista permitida

### 6.3 Nomenclatura para instrumentos redundantes

Instrumentos redundantes críticos requieren nomenclatura clara:

**Método 1: Sufijos alfabéticos**
```
PT-2301A  = Transmisor de presión primario
PT-2301B  = Transmisor de presión backup (redundante)
PT-2301C  = Transmisor de presión terciario (triple redundancia)
```

**Método 2: Nomenclatura descriptiva**
```
PT-2301-PRI    = Primary transmitter
PT-2301-SEC    = Secondary transmitter (backup)
PT-2301-TER    = Tertiary transmitter (triple redundancia)
```

**Método 3: Combinación numérica-descriptiva**
```
PT-2301-1      = Primer transmisor
PT-2301-2      = Segundo transmisor (redundante)
PT-2301-3      = Tercer transmisor
```

**Documentación de redundancia:**

En Properties de instrumento:
- Property: **Redundancy Type** = `Primary` / `Secondary` / `Tertiary`
- Property: **Redundant With** = TAG del instrumento redundante relacionado
  - Ejemplo: PT-2301B tiene Redundant With = `PT-2301A`

Reportes de instrumentación muestran relaciones de redundancia automáticamente.

### 6.4 Nomenclatura para instrumentos de seguridad (SIS)

Los instrumentos de Sistemas Instrumentados de Seguridad (SIS) requieren identificación especial:

**Estándar IEC 61511:**
- Instrumentos SIS deben distinguirse claramente de instrumentos de control normal
- Separación física y lógica es crítica

**Nomenclatura recomendada:**

**Método 1: Prefijo SIS**
```
SIS-PSH-2301   = Pressure Switch High (función de seguridad)
SIS-LSL-2401   = Level Switch Low (función de seguridad)
SIS-TAHH-2501  = Temperature Alarm High High (función de seguridad)
```

**Método 2: Serie numérica dedicada**
```
Instrumentos de control normal: 1000-8999
Instrumentos SIS: 9000-9999

Ejemplo:
PIC-2301       = Controlador de presión normal
PSH-9201       = Switch de presión SIS (serie 9xxx)
```

**Método 3: Sufijo SIS**
```
PSH-2301-SIS   = Pressure Switch High (función de seguridad)
LSL-2401-SIS   = Level Switch Low (función de seguridad)
```

**Configuración en Plant 3D:**

1. **Project Setup > Tagging Settings > SIS Instruments**
2. Define nomenclatura SIS:
   - Prefix: `SIS-`
   - Number Range: `9000-9999`
   - Suffix: `-SIS`
3. Property adicional: **SIL Level** (Safety Integrity Level)
   - SIL 1, SIL 2, SIL 3, SIL 4

**Validaciones especiales para SIS:**
- Verificar separación de instrumentos SIS y control normal
- Validar certificación SIL de cada instrumento
- Reportes separados para documentación SIS

### 6.5 Nomenclatura para instrumentos de campo vs. panel

Distinguir claramente ubicación de instrumentos:

**Simbología ISA S5.1:**
- Círculo simple: instrumento montado en panel/sala de control
- Círculo con línea horizontal: instrumento montado en campo, accesible al operador
- Círculo sin línea: función de software/DCS

**Nomenclatura complementaria (opcional):**

**Método 1: Sufijo de ubicación**
```
TIC-2301-P     = Temperature Controller en Panel
TI-2302-F      = Temperature Indicator en Field (campo)
TIC-2303-DCS   = Temperature Controller en DCS (software)
```

**Método 2: Property de ubicación**
- Property: **Location** = `Field` / `Panel` / `DCS` / `Cabinet`
- Símbolo automáticamente se ajusta según property

**Configuración en Plant 3D:**

Al insertar instrumento, diálogo pregunta:
- Location: Field / Panel / DCS
- Plant 3D selecciona símbolo correcto automáticamente (círculo simple vs. línea horizontal)

### 6.6 Convenciones especiales corporativas

Cada empresa puede tener convenciones adicionales:

**Ejemplo 1: Prefijo de proyecto**
```
Formato: [PROJECT]-[TAG]

XYZ-FIC-2301   = Proyecto XYZ, Flow Controller 2301
ABC-PT-1501    = Proyecto ABC, Pressure Transmitter 1501
```

**Ejemplo 2: Código de disciplina**
```
Formato: [DISCIPLINE]-[TAG]

I-FIC-2301     = Instrumento, Flow Controller (I = Instrumentation)
E-MOT-1001     = Eléctrico, Motor (E = Electrical)
P-P-101        = Proceso, Bomba (P = Process)
```

**Ejemplo 3: Código de cliente**
```
Formato: [CLIENT]-[PLANT]-[TAG]

CLI-P1-FIC-2301  = Cliente CLI, Planta 1, Flow Controller 2301
```

**Implementación en Plant 3D:**

1. **Project Setup > Tagging Settings > Custom Format**
2. Define formato completo con todas las variables corporativas
3. Cree template de proyecto con configuración estándar corporativa
4. Todos los proyectos nuevos heredan configuración

## Ejercicio Práctico

**Duración:** 15 minutos

**Escenario:** Está configurando el sistema de identificación de instrumentos para una nueva planta de tratamiento de agua. La planta tiene 3 áreas principales: Área 10 (Pretratamiento), Área 20 (Osmosis Inversa), Área 30 (Post-tratamiento). Implementará numeración por área según estándar ISA S5.1.

**Pasos:**

1. **Configurar esquema de numeración por área:**
   - Project Setup > Instrument Tagging
   - Crear scheme: `Area-Based Water Treatment`
   - Format: `{PREFIX}-{AREA}{SEQUENCE}`
   - Definir áreas: 10 (Pretratamiento), 20 (Osmosis Inversa), 30 (Post-tratamiento)

2. **Configurar numeración para diferentes tipos de instrumentos:**
   - Flow Transmitters: FT-{AREA}{###}, starting 001
   - Pressure Transmitters: PT-{AREA}{###}, starting 001
   - Level Transmitters: LT-{AREA}{###}, starting 001
   - Conductivity Transmitters: CIT-{AREA}{###}, starting 001

3. **Insertar instrumentos en P&ID del Área 10:**
   - Abra dibujo P&ID-Pretratamiento.dwg
   - Asigne Area Code = 10 al dibujo
   - Inserte: 1 Flow Transmitter (entrada agua cruda)
   - Inserte: 1 Pressure Transmitter (presión de filtros)
   - Inserte: 1 Level Transmitter (tanque de químicos)
   - Verifique TAGs automáticos: FT-10001, PT-10001, LT-10001

4. **Crear lazo de control de dosificación de cloro:**
   - Inserte Flow Element: FE-10005
   - Inserte Flow Transmitter: FT-10005
   - Inserte Flow Controller: FIC-10005
   - Inserte Control Valve: FCV-10005
   - Asigne Loop Number = 10005 a todos
   - Conecte señales entre instrumentos

5. **Generar Instrument Index:**
   - Comando: PNPINSTRUMENTINDEX
   - Scope: Entire Project
   - Columns: TAG, Description, Type, Area, Loop Number, Signal Type
   - Output: Excel
   - Verifique reporte contiene todos los instrumentos numerados correctamente

**Resultado esperado:**
- Esquema de numeración configurado y funcional
- Instrumentos insertados con TAGs automáticos correctos por área
- Lazo de control completo con Loop Number consistente
- Instrument Index profesional en Excel con todos los datos

## Evaluación

1. **Explique la estructura completa de un TAG de instrumento según ISA S5.1 usando el ejemplo "PDIC-2341A".**

   **Respuesta:** Estructura completa de PDIC-2341A según ISA S5.1: (1) **P** = Primera letra, variable medida: Pressure (presión), (2) **D** = Segunda letra, modificador: Differential (presión diferencial, no presión absoluta), (3) **I** = Tercera letra, función de lectura: Indicator (indicador, muestra valor visualmente), (4) **C** = Cuarta letra, función de control: Controller (controlador, controla automáticamente la variable), (5) **-** = Separador estándar entre letras de identificación y número de lazo, (6) **2341** = Loop Number (número de lazo), identifica el lazo de instrumentación completo, todos los instrumentos en el mismo lazo comparten este número, (7) **A** = Sufijo alfabético opcional, indica que hay múltiples instrumentos similares en el mismo lazo (primario, backup, etc.). Interpretación completa: "Controlador indicador de presión diferencial, lazo 2341, instrumento A (primario)". Típicamente usado para control de flujo mediante placa orificio donde la presión diferencial a través del orificio es proporcional al flujo.

2. **¿Cuáles son las ventajas de implementar numeración por área o sistema en lugar de numeración secuencial simple?**

   **Respuesta:** Ventajas principales: (1) **Identificación inmediata de ubicación** - solo viendo el TAG (FT-20-001) se conoce que está en Área 20, facilita localización física durante construcción, startup y mantenimiento, (2) **Organización lógica de documentación** - reportes y dibujos se organizan naturalmente por área/sistema, facilitando navegación y búsqueda, (3) **Escalabilidad controlada** - cada área tiene su propio rango numérico, expansiones futuras en un área no afectan numeración de otras áreas, previene agotamiento de números, (4) **Facilitación de trabajo en paralelo** - diferentes equipos de ingeniería pueden trabajar en diferentes áreas simultáneamente sin conflictos de numeración, (5) **Alineación con organización de operación** - plantas generalmente se operan por áreas/unidades, instrumentos numerados por área facilitan procedimientos de operación y mantenimiento, (6) **Rastreabilidad de cambios** - modificaciones en un área se identifican claramente, impacto de cambios se limita a área específica, (7) **Compatibilidad con sistemas de control** - sistemas DCS/PLC frecuentemente se organizan por área, numeración alineada facilita configuración de control. Desventaja única: requiere planificación inicial más cuidadosa y definición clara de límites de áreas/sistemas.

3. **Describa los componentes típicos de un lazo de control de nivel y explique por qué todos comparten el mismo Loop Number.**

   **Respuesta:** Componentes típicos de lazo de control de nivel: (1) **LE-3201** (Level Element) - elemento primario de medición, puede ser flotador, radar, ultrasonido, presión diferencial, dispositivo físico que detecta nivel del líquido, (2) **LT-3201** (Level Transmitter) - transmisor que convierte señal del elemento primario a señal estándar (4-20mA, HART, digital), transmite al sistema de control, (3) **LIC-3201** (Level Indicator Controller) - controlador en DCS/PLC que muestra nivel actual, compara con setpoint, ejecuta algoritmo PID, genera señal de salida de control, (4) **LY-3201** (Level Computing Relay) opcional - relay de cómputo si se necesita conversión o cálculo adicional de señal, (5) **LCV-3201** (Level Control Valve) - válvula de control final que modula flujo de entrada o salida para mantener nivel en setpoint. Todos comparten Loop Number **3201** porque: (1) **Funcionalidad unificada** - todos trabajan juntos para lograr un único objetivo (controlar el nivel), ninguno funciona independientemente, (2) **Documentación integrada** - loop diagrams, hojas de datos, procedimientos de calibración se generan por lazo completo, (3) **Troubleshooting** - problemas de control se diagnostican analizando el lazo completo, no instrumentos aislados, (4) **Mantenimiento coordinado** - calibración y pruebas se planifican para el lazo completo, (5) **Estándar ISA** - ISA S5.1 define explícitamente que instrumentos funcionalmente relacionados en misma estrategia de control comparten loop number, facilitando comunicación universal en industria.

4. **¿Qué es el etiquetado por lotes (batch tagging) y cuándo es más útil?**

   **Respuesta:** Etiquetado por lotes es la asignación o modificación de TAGs y propiedades de múltiples instrumentos simultáneamente en una sola operación, en lugar de editar cada instrumento individualmente. Más útil en: (1) **Renumeración de proyectos** - cuando se reorganiza numeración de área completa o todo el proyecto, ej: cambiar todos los instrumentos de Área 10 a Área 15 (50+ instrumentos en segundos vs. horas manualmente), (2) **Proyectos nuevos grandes** - al iniciar proyecto con cientos de instrumentos, preparar lista completa en Excel offline e importar en lote asegura consistencia y acelera dramáticamente el proceso inicial, (3) **Cambios de estándar corporativo** - cuando empresa cambia convención de nomenclatura (ej: agregar prefijo de planta), actualizar todos los instrumentos existentes mediante batch operation, (4) **Asignación masiva de propiedades** - cuando se determina tarde en proyecto que todos los instrumentos en área específica requieren certificación Ex (hazardous area), asignar property "Ex Certified" a todos simultáneamente, (5) **Importación desde otros sistemas** - migrando desde otro software de P&ID o importando lista de instrumentos desde sistema de control, batch import es esencial, (6) **Corrección de errores sistemáticos** - si se descubre que un grupo de instrumentos tiene service incorrecto o área incorrecta, corregir todos en lote previene errores individuales. Ventajas clave: (1) velocidad (100x más rápido que edición individual), (2) consistencia (elimina errores de transcripción manual), (3) validación masiva (detecta problemas antes de aplicar cambios), (4) auditoría (cambios en lote se registran como operación única rastreable).

5. **¿Qué información esencial debe contener un Instrument Index y por qué es un documento crítico del proyecto?**

   **Respuesta:** Información esencial del Instrument Index: (1) **TAG** - identificador único, columna primaria de búsqueda, (2) **Description** - descripción funcional clara, ej: "Temperature Transmitter - Reactor Outlet", (3) **Service** - fluido/proceso medido, crítico para selección de materiales, (4) **Loop Number** - vincula instrumento a lazo de control completo, (5) **Function** - tipo de instrumento (Transmitter, Controller, Indicator, Switch, etc.), (6) **Range** - rango de calibración (0-200°C, 0-25 bar), esencial para especificación y calibración, (7) **Location** - ubicación física (Field/Panel/DCS), determina diseño de gabinetes y cableado, (8) **Signal Type** - tipo de señal (4-20mA, HART, Foundation Fieldbus, Profibus, etc.), determina compatibilidad con sistema de control, (9) **Area** - área de planta, organiza documentación y responsabilidades de operación/mantenimiento, (10) **Drawing** - número de dibujo P&ID donde aparece, permite localizar rápidamente en documentación, (11) **Manufacturer/Model** - fabricante y modelo específico (fase de detalle), (12) **Remarks** - notas especiales (instrumentos críticos, redundancia, SIS, etc.). Es documento crítico porque: (1) **Documento maestro** - única fuente de verdad para todos los instrumentos del proyecto, base para presupuesto, adquisiciones, construcción, (2) **Coordinación multidisciplinaria** - instrumentación lo usa para especificación, eléctrica para diseño de cableado, control para configuración DCS, construcción para instalación, (3) **Base de adquisiciones** - departamento de compras genera requisiciones directamente desde el índice, (4) **Entregable contractual** - requerido por clientes y autoridades regulatorias, (5) **Base de CMMS** - se importa a sistemas de gestión de mantenimiento para toda la vida de la planta (20-30 años), (6) **Auditoría y compliance** - autoridades revisan para verificar cumplimiento de normas de seguridad, (7) **Startup y commissioning** - equipo de puesta en marcha usa el índice para planificar calibración y pruebas loop-by-loop. Errores o incompletitud en el Instrument Index generan retrabajos costosos y retrasos de proyecto.

## Resumen

En esta lección ha dominado el sistema completo de identificación de instrumentos según estándar ISA S5.1:

- **Estándar ISA S5.1-2009** define estructura universal de TAGs mediante letras de identificación (primera letra = variable medida, subsecuentes = funciones), loop number (identifica lazo completo), y sufijos opcionales (múltiples instrumentos en mismo lazo).

- **Configuración de numeración automática** en Plant 3D permite implementar esquemas secuenciales simples, numeración por área de planta, numeración por sistema de proceso, o formatos híbridos personalizados que aseguran consistencia y eliminan errores manuales.

- **Lazos de instrumentación** agrupan elementos primarios, transmisores, controladores y elementos finales bajo un loop number común, facilitando documentación, troubleshooting y mantenimiento coordinado del sistema de control completo.

- **Etiquetado por lotes** acelera dramáticamente asignación y modificación de TAGs mediante selección múltiple, aplicación masiva de propiedades, renumeración automática, e importación/exportación Excel para edición offline de cientos de instrumentos.

- **Reportes automáticos** (Instrument Index, Loop List, Alarm List, Control Valve List) se generan directamente desde propiedades de instrumentos en P&ID, proporcionando documentación completa y siempre actualizada sin transcripción manual.

- **Nomenclaturas especializadas** para instrumentos redundantes, sistemas instrumentados de seguridad (SIS), ubicaciones específicas (field vs. panel), y convenciones corporativas se configuran mediante prefijos, sufijos y propiedades personalizadas.

El dominio de sistemas de identificación de instrumentos según ISA S5.1 implementados en Plant 3D asegura comunicación clara universal, documentación consistente, coordinación eficiente entre disciplinas, y conformidad con estándares internacionales reconocidos en toda la industria de proceso.

## Próxima Lección

En la Lección 9 aprenderemos sobre **Reportes y verificación de P&ID**, donde exploraremos generación automática de listas de líneas, reportes de equipos y válvulas, verificaciones de validación de datos, exportación a Excel y bases de datos, y personalización de reportes según estándares corporativos para documentación profesional de proyectos industriales.
