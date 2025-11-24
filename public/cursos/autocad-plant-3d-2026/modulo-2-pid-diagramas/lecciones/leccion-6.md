# Lección 6: Introducción a P&ID y esquemas de instrumentación

## Información de la Lección

- **Módulo:** 2 - P&ID (Diagramas de Proceso e Instrumentación)
- **Lección:** 6 de 10
- **Duración:** 60 minutos
- **Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, usted será capaz de:

✅ Comprender los estándares ISA S5.1-2009 para símbolos de instrumentación
✅ Diferenciar claramente entre P&ID y PFD y sus aplicaciones específicas
✅ Identificar y aplicar correctamente tipos de líneas según estándares industriales
✅ Reconocer símbolos de equipos principales y auxiliares conforme normas ASME
✅ Implementar sistemas de identificación de instrumentos mediante numeración TAG
✅ Interpretar fundamentos de flujo de proceso y balance de masa/energía

## Introducción

Los Diagramas de Proceso e Instrumentación (P&ID - Piping and Instrumentation Diagrams) constituyen el lenguaje universal de la ingeniería de procesos industriales. Representan la columna vertebral de cualquier proyecto de planta química, petroquímica, farmacéutica, energética o de tratamiento de aguas, funcionando como el plano maestro que comunica diseño, operación y mantenimiento entre todas las disciplinas involucradas.

En la industria de procesos moderna, donde plantas con inversiones de cientos de millones de dólares deben operar con seguridad y eficiencia durante décadas, los P&IDs no son simplemente diagramas técnicos: son documentos legales que definen contratos de construcción, sirven como base para estudios de seguridad (HAZOP, LOPA), guían operaciones de arranque y parada, y constituyen la referencia primaria para mantenimiento y modificaciones.

AutoCAD Plant 3D 2026 implementa un entorno P&ID completamente integrado que cumple con los estándares ISA (Instrumentation, Systems, and Automation Society), específicamente la norma **ISA-5.1-2009** para símbolos e identificación de instrumentación, y se alinea con prácticas recomendadas de ingeniería según ASME (American Society of Mechanical Engineers) y API (American Petroleum Institute).

La creación de P&IDs precisos y consistentes requiere comprender no solo las herramientas de software, sino los fundamentos de ingeniería de procesos que representan. Esta lección establece esos fundamentos, proporcionando el conocimiento técnico necesario para crear P&IDs de nivel profesional que cumplan con estándares internacionales y requisitos de la industria.

## 1. Fundamentos de P&ID: Definición y Propósito

### 1.1 ¿Qué es un P&ID?

Un Piping and Instrumentation Diagram (P&ID) es un diagrama esquemático que muestra:

- **Equipos de proceso:** Reactores, columnas, intercambiadores de calor, tanques, bombas, compresores, turbinas
- **Tuberías:** Líneas de proceso con información de tamaño, especificación de material y número de línea
- **Instrumentación:** Instrumentos de medición y control (flujo, presión, temperatura, nivel, análisis)
- **Válvulas:** Válvulas de control, bloqueo, seguridad, alivio, retención
- **Lógica de control:** Lazos de control, interlocks, sistemas de parada de emergencia (ESD)
- **Conexiones auxiliares:** Drenajes, venteos, tomas de muestra, conexiones de utilidades

**Características distintivas de un P&ID:**

1. **Representación esquemática:** No muestra ubicación física real ni dimensiones espaciales
2. **Orientación funcional:** Organizado para mostrar flujo de proceso y relaciones funcionales
3. **Completitud técnica:** Incluye toda la información necesaria para diseño, construcción y operación
4. **Estandarización:** Sigue normas ISA, ASME, API para símbolos y convenciones

![Ejemplo de P&ID industrial completo](../imagenes/leccion-6-pid-ejemplo-completo.png)

### 1.2 Propósito y Aplicaciones del P&ID

Los P&IDs sirven múltiples propósitos críticos durante el ciclo de vida de una planta:

**Fase de Diseño (Engineering):**
- Base para diseño de tuberías (pipe routing, isométricos)
- Diseño de sistemas de control e instrumentación
- Balance de materiales y energía
- Dimensionamiento de equipos
- Estudios de seguridad (HAZOP, LOPA, SIL)
- Estimación de costos (CAPEX)

**Fase de Construcción:**
- Documento de referencia para contratistas
- Verificación de entregables de fabricación
- Base para planes de pruebas (loop checks, pre-commissioning)
- Coordinación entre disciplinas (proceso, mecánica, eléctrica, control)

**Fase de Operación:**
- Procedimientos de operación (SOPs - Standard Operating Procedures)
- Arranque y parada de planta (startup/shutdown)
- Entrenamiento de operadores
- Troubleshooting y resolución de problemas
- Optimización de procesos

**Fase de Mantenimiento:**
- Planeación de mantenimiento preventivo
- Identificación de componentes para reemplazo
- Estudios de confiabilidad (RCM - Reliability Centered Maintenance)
- Gestión de integridad mecánica

**Modificaciones y Expansiones:**
- Management of Change (MOC)
- Estudios de debottlenecking
- Integración de nuevos equipos
- Actualizaciones de control y automatización

### 1.3 Usuarios y Stakeholders de P&IDs

Los P&IDs son utilizados por múltiples disciplinas y stakeholders:

- **Ingenieros de Proceso:** Creadores primarios, definen proceso y control
- **Ingenieros de Tuberías:** Diseñan routing 3D basado en P&ID
- **Ingenieros de Instrumentación:** Diseñan lazos de control y seleccionan instrumentos
- **Ingenieros Eléctricos:** Diseñan alimentación eléctrica a equipos
- **Ingenieros de Control:** Programan DCS/PLC según lógica de P&ID
- **Ingenieros de Seguridad:** Realizan análisis HAZOP, SIS (Safety Instrumented Systems)
- **Contratistas:** Construyen según especificaciones de P&ID
- **Operadores de planta:** Operan según configuración mostrada en P&ID
- **Personal de mantenimiento:** Realizan mantenimiento según P&ID
- **Autoridades regulatorias:** Aprueban diseños según P&ID (EPA, OSHA, etc.)

## 2. Diferencias entre P&ID y PFD

### 2.1 Process Flow Diagram (PFD)

El Process Flow Diagram (PFD) es un diagrama simplificado que muestra:

**Contenido típico de PFD:**
- Equipos principales de proceso únicamente
- Flujos principales (streams) con balance de masa y energía
- Condiciones de operación (T, P, caudal, composición)
- Datos de corrientes (stream data): caudal másico/volumétrico, temperatura, presión, fase, composición
- Balance de energía en intercambiadores y reactores

**Lo que NO incluye un PFD:**
- Instrumentación (excepto elementos críticos de control)
- Válvulas de bloqueo y control de rutina
- Líneas auxiliares (drenajes, venteos)
- Números de línea detallados
- Detalles de tuberías (fittings, soportes)

**Propósito del PFD:**
- Comunicación conceptual del proceso
- Balance de materiales global
- Presentaciones ejecutivas y propuestas
- Fase conceptual de diseño (FEL-1, FEL-2)
- Documentación simplificada para operadores

![Ejemplo de PFD simplificado](../imagenes/leccion-6-pfd-ejemplo.png)

### 2.2 Piping and Instrumentation Diagram (P&ID)

El P&ID es mucho más detallado que el PFD:

**Contenido adicional del P&ID:**
- **Todos los equipos:** Principales y auxiliares (bombas spare, filtros, trampas de vapor)
- **Toda la instrumentación:** Sensores, transmisores, controladores, válvulas de control
- **Todas las válvulas:** Bloqueo, control, seguridad, retención, alivio
- **Todas las líneas:** Proceso, utilidades, drenajes, venteos con números de línea
- **Especificaciones de línea:** Tamaño, rating de presión, material (ej: 6"-150#-CS)
- **Lazos de control:** Interconexiones entre instrumentos y sistemas de control
- **Interlocks y seguridad:** Sistemas SIS, ESD (Emergency Shutdown)
- **Conexiones especiales:** Tomas de muestra, conexiones de lavado, purga

**Nivel de detalle P&ID:**
- Suficiente para construir la planta sin ambigüedades
- Incluye información para procurement (compra de equipos y materiales)
- Base para diseño detallado de ingeniería (detailed engineering)

![Comparación PFD vs P&ID del mismo sistema](../imagenes/leccion-6-pfd-vs-pid-comparacion.png)

### 2.3 Cuadro Comparativo PFD vs P&ID

| Aspecto | PFD | P&ID |
|---------|-----|------|
| **Fase de proyecto** | Conceptual, Básica (FEL-1, FEL-2) | Ingeniería de Detalle (FEL-3, Detailed Engineering) |
| **Equipos mostrados** | Solo principales | Todos (principales + auxiliares) |
| **Instrumentación** | Mínima (control crítico) | Completa (todos los instrumentos) |
| **Válvulas** | Solo control principal | Todas (bloqueo, control, seguridad, retención) |
| **Líneas de proceso** | Principales | Todas (proceso, utilidades, drenajes, venteos) |
| **Números de línea** | Generalmente no | Sí, todos |
| **Especificaciones de línea** | No detallado | Sí (tamaño, material, rating) |
| **Balance de masa/energía** | Sí, detallado en tabla | No (referencia a PFD) |
| **Condiciones de operación** | Sí, en cada corriente | No (datos en PFD o en instrumentos) |
| **Lazos de control** | No | Sí, completos |
| **Interlocks/SIS** | No | Sí, todos |
| **Propósito** | Entendimiento del proceso | Construcción y operación |
| **Audiencia** | Gerencia, ingenieros de proceso | Todas las disciplinas, contratistas |
| **Nivel de detalle** | Alto nivel | Detalle completo |

### 2.4 Relación entre PFD y P&ID

En un proyecto típico de ingeniería:

**Secuencia de desarrollo:**
1. **PFD desarrollado primero:** Durante ingeniería conceptual/básica
2. **P&ID desarrollado después:** Durante ingeniería de detalle, basado en PFD
3. **P&ID se convierte en documento controlado:** Cambios requieren MOC (Management of Change)

**Referencias cruzadas:**
- P&ID referencia PFD para condiciones de operación
- Números de equipo consistentes entre PFD y P&ID (ej: P-101 en ambos)
- Balance de masa de PFD usado para dimensionar líneas en P&ID

## 3. Estándar ISA S5.1-2009 para Símbolos de Instrumentación

### 3.1 Historia y Alcance de ISA S5.1

El estándar **ISA-5.1-2009** (Instrumentation Symbols and Identification) es la norma internacionalmente aceptada para:

- Símbolos gráficos de instrumentación
- Identificación alfanumérica de instrumentos (TAGs)
- Representación de funciones de instrumentos
- Líneas de señal e interconexiones

**Historia:**
- **ISA S5.1-1984:** Primera versión ampliamente adoptada
- **ANSI/ISA-5.1-1984 (R1992):** Reafirmación en 1992
- **ISA-5.1-2009:** Versión actual, actualizada con tecnología digital y fieldbus

**Alcance del estándar:**
- Aplicable a todas las industrias de proceso (química, petroquímica, farmacéutica, alimentos, pulpa/papel, energía)
- Independiente del tipo de sistema de control (DCS, PLC, pneumático, electrónico)
- Compatible con estándares internacionales (IEC, DIN)

### 3.2 Símbolos de Instrumentos según ISA S5.1

El estándar ISA define símbolos compuestos por formas geométricas:

**Formas básicas de símbolos:**

1. **Círculo simple (○):** Instrumento montado en campo (field mounted)
2. **Círculo doble (◎):** Instrumento montado en panel frontal de sala de control
3. **Hexágono simple (⬡):** Función de computador (DCS, PLC)
4. **Cuadrado (□):** Función auxiliar (relay, conversor)

**Ubicación del instrumento:**

```
○  →  Montado en campo (Field Mounted)
      Ejemplo: Transmisor de presión en tubería

◎  →  Montado en panel principal de sala de control
      Ejemplo: Indicador de temperatura visible a operador

⬢  →  Montado en panel auxiliar local
      Ejemplo: Panel de control local de compresor

⬡  →  Función en sistema de control distribuido (DCS)
      Ejemplo: Controlador PID en software DCS
```

![Símbolos básicos ISA S5.1](../imagenes/leccion-6-simbolos-isa-basicos.png)

### 3.3 Identificación de Instrumentos (TAG Number)

El estándar ISA define un sistema de identificación alfanumérica:

**Estructura del TAG:**

```
XXX - #### - S - A
│     │     │   │
│     │     │   └─ Sufijo (opcional): A, B, C para instrumentos múltiples
│     │     └───── Sufijo de loop (opcional): S para spare
│     └─────────── Número de loop: 0001 a 9999
└───────────────── Identificación funcional: Letras según variable y función
```

**Primera letra (Variable medida):**

| Letra | Variable |
|-------|----------|
| **A** | Analysis (Análisis: pH, conductividad, densidad, etc.) |
| **B** | Burner/Combustion (Quemador/Combustión) |
| **C** | Conductivity (Conductividad eléctrica) |
| **D** | Density/Specific Gravity (Densidad/Gravedad específica) |
| **E** | Voltage (Voltaje/Tensión eléctrica) |
| **F** | Flow (Flujo/Caudal) |
| **G** | Gaging/Position (Medición/Posición) |
| **H** | Hand (Manual) |
| **I** | Current (Corriente eléctrica) |
| **J** | Power (Potencia) |
| **K** | Time/Schedule (Tiempo/Programa) |
| **L** | Level (Nivel) |
| **M** | Moisture (Humedad) |
| **N** | User's choice (A elección del usuario) |
| **O** | User's choice (A elección del usuario) |
| **P** | Pressure/Vacuum (Presión/Vacío) |
| **Q** | Quantity (Cantidad/Totalización) |
| **R** | Radiation (Radiación) |
| **S** | Speed/Frequency (Velocidad/Frecuencia) |
| **T** | Temperature (Temperatura) |
| **U** | Multivariable (Multivariable) |
| **V** | Vibration (Vibración) |
| **W** | Weight/Force (Peso/Fuerza) |
| **X** | Unclassified (No clasificada) |
| **Y** | Event/State (Evento/Estado) |
| **Z** | Position/Dimension (Posición/Dimensión) |

**Letras subsecuentes (Función del instrumento):**

| Letra | Función (Lectura/Pasiva) | Función (Salida/Activa) |
|-------|--------------------------|-------------------------|
| **A** | Alarm (Alarma) | - |
| **C** | Control (Controlador) | Control (Función de control) |
| **D** | Differential (Diferencial) | - |
| **E** | Element/Sensor (Elemento primario) | - |
| **G** | Glass/Gage (Visor/Indicador local) | - |
| **H** | High (Alto) | - |
| **I** | Indicate (Indicador) | - |
| **K** | Control Station (Estación de control) | - |
| **L** | Low (Bajo) | - |
| **M** | Middle/Intermediate (Medio/Intermedio) | - |
| **N** | User's choice | User's choice |
| **O** | Orifice/Restriction (Orificio/Restricción) | - |
| **R** | Record (Registrador) | - |
| **S** | Switch (Interruptor) | - |
| **T** | Transmit (Transmisor) | - |
| **U** | Multifunction | Multifunction |
| **V** | Valve/Damper/Louver (Válvula) | - |
| **W** | Well (Pozo/Termopozo) | - |
| **X** | Unclassified | Unclassified |
| **Y** | Relay/Compute (Relé/Computar) | - |
| **Z** | Drive/Actuate (Actuador) | - |

**Ejemplos de TAGs comunes:**

```
FT-101   →  Flow Transmitter (Transmisor de flujo) #101
PT-205   →  Pressure Transmitter (Transmisor de presión) #205
TI-308   →  Temperature Indicator (Indicador de temperatura) #308
LIC-401  →  Level Indicator Controller (Controlador indicador de nivel) #401
PSHH-502 →  Pressure Switch High High (Interruptor de presión muy alto) #502
FV-603   →  Flow Valve (Válvula de control de flujo) #603
TE-704   →  Temperature Element (Elemento de temperatura, termopar/RTD) #704
```

![Ejemplos de identificación TAG según ISA](../imagenes/leccion-6-tag-ejemplos.png)

### 3.4 Tipos de Líneas de Señal

El estándar ISA define líneas para representar señales entre instrumentos:

**Líneas de conexión de instrumentos:**

```
━━━━━━━  →  Señal eléctrica, electrónica, digital
─ ─ ─ ─  →  Señal neumática (aire de instrumentos, típicamente 3-15 psi)
═══════  →  Señal hidráulica (fluido bajo presión)
─ • ─ •  →  Tubo capilar (transmisores de presión/temperatura llenos)
━━S━━S━  →  Señal de software/dato (enlace de comunicación DCS/fieldbus)
```

**Líneas de suministro:**

```
━━━AS━━  →  Suministro de aire (Air Supply)
━━━ES━━  →  Suministro eléctrico (Electrical Supply)
━━━GS━━  →  Suministro de gas (Gas Supply)
━━━HS━━  →  Suministro hidráulico (Hydraulic Supply)
━━━NS━━  →  Suministro de nitrógeno (Nitrogen Supply)
```

**Líneas de conexión a proceso:**

```
━━━━━━━  →  Conexión mecánica al proceso (toma de presión, termopozo)
```

![Tipos de líneas de señal ISA](../imagenes/leccion-6-lineas-senal.png)

### 3.5 Lazos de Control Típicos según ISA

Un lazo de control completo incluye:

1. **Elemento primario (sensor):** Mide variable de proceso
2. **Transmisor:** Convierte señal de sensor a señal estándar (4-20 mA, HART, Fieldbus)
3. **Controlador:** Compara medición con setpoint y calcula salida (PID)
4. **Elemento final de control:** Ejecuta acción de control (válvula, damper, VFD)

**Ejemplo: Lazo de control de flujo (Flow Control Loop)**

```
Proceso:
  │
  ├─ FE-101 (Flow Element - Placa orificio)
  │     │
  │     └─ FT-101 (Flow Transmitter)
  │            │ (señal 4-20 mA)
  │            │
  │         FIC-101 (Flow Indicator Controller en DCS)
  │            │ (señal 4-20 mA)
  │            │
  │         FY-101 (Current-to-Pneumatic Converter)
  │            │ (señal 3-15 psi)
  │            │
  │         FV-101 (Flow Control Valve - Válvula de control)
  │            │
  └────────────┘
```

**Representación en P&ID:**

- FE-101: Símbolo de placa orificio en línea
- FT-101: Círculo con "FT 101" conectado a línea de proceso
- FIC-101: Hexágono con "FIC 101" en área de instrumentación
- FY-101: Cuadrado con "FY 101"
- FV-101: Símbolo de válvula de control con "FV 101"
- Líneas de señal conectando cada elemento según tipo

![Lazo de control típico ISA](../imagenes/leccion-6-lazo-control-isa.png)

## 4. Tipos de Líneas y Representación en P&ID

### 4.1 Clasificación de Líneas de Proceso

Las líneas en un P&ID se clasifican según su función:

**Líneas principales de proceso:**
- Transportan el producto principal
- Tamaño mayor (típicamente ≥ 2")
- Grosor de línea: Grueso (0.7-1.0 mm)
- Etiquetado completo: Número de línea, tamaño, spec

**Líneas secundarias/auxiliares:**
- Recirculación, bypass, líneas de calentamiento
- Tamaño mediano (1" a 6")
- Grosor de línea: Medio (0.5 mm)
- Etiquetado completo

**Líneas de utilidades:**
- Agua de enfriamiento, vapor, aire de instrumentos, nitrógeno
- Tamaño pequeño a mediano (1/2" a 4")
- Grosor de línea: Medio (0.5 mm)
- Etiquetado según estándar de planta

**Líneas de instrumentación:**
- Tomas de presión, conexiones de nivel, señales
- Tamaño pequeño (1/4" a 1")
- Grosor de línea: Delgado (0.35 mm)
- Etiquetado mínimo

**Líneas de drenaje y venteo:**
- Drenajes de equipos, venteos atmosféricos, purgas
- Tamaño pequeño (1/2" a 2")
- Grosor de línea: Delgado (0.35 mm)
- Identificación simplificada

### 4.2 Representación de Tipos de Línea

**Líneas según especificación de material:**

```
━━━━━━━  →  Línea sólida continua: Tubería de proceso estándar

▬ ▬ ▬ ▬  →  Línea discontinua larga: Tubería de utilidad/auxiliar

- - - -  →  Línea discontinua corta: Conexión a instalar en futuro

─ ─ ─ ─  →  Línea punteada: Conexión mecánica (no tubería)

╌╌╌╌╌╌╌  →  Línea punteada fina: Límite de alcance/batería límite
```

**Líneas especiales:**

```
━━━━━━━  →  Doble línea: Tubería encamisada (jacketed pipe)
━━━━━━━     para productos que requieren calentamiento/enfriamiento

━━TR━━━  →  Línea con trazado (heat tracing): TR = Tracing
            Trazado eléctrico o de vapor para mantener temperatura

━━IN━━━  →  Línea con aislamiento (insulation): IN = Insulated
            Aislamiento térmico para conservación de calor/frío
```

![Tipos de líneas en P&ID](../imagenes/leccion-6-tipos-lineas.png)

### 4.3 Información de Líneas (Line Tagging)

Cada línea de proceso debe identificarse con un número de línea (line number) que contiene:

**Formato estándar de número de línea:**

```
XX - XXXX - NNN - SS - MM
│    │      │     │    │
│    │      │     │    └─ Modificador (opcional): -IN (insulated), -TR (traced)
│    │      │     └────── Especificación de material (Pipe Spec)
│    │      └──────────── Tamaño nominal (NPS - Nominal Pipe Size)
│    └─────────────────── Número secuencial de línea (0001-9999)
└──────────────────────── Código de fluido/servicio
```

**Ejemplo real:**

```
ST-1025-6-CS150-IN
│   │    │ │    │
│   │    │ │    └─ Aislada (Insulated)
│   │    │ └────── Especificación: Carbon Steel ANSI 150#
│   │    └──────── Tamaño: 6" NPS
│   └───────────── Número de línea: 1025
└───────────────── Servicio: ST = Steam (Vapor)
```

**Códigos de servicio típicos:**

| Código | Servicio |
|--------|----------|
| **ST** | Steam (Vapor) |
| **CW** | Cooling Water (Agua de enfriamiento) |
| **IA** | Instrument Air (Aire de instrumentos) |
| **PA** | Plant Air (Aire de planta) |
| **N2** | Nitrogen (Nitrógeno) |
| **FO** | Fuel Oil (Combustible) |
| **NG** | Natural Gas (Gas natural) |
| **CR** | Crude Oil (Crudo) |
| **HC** | Hydrocarbon (Hidrocarburo genérico) |
| **AC** | Acid (Ácido) |
| **CS** | Caustic (Soda cáustica) |
| **DR** | Drain (Drenaje) |
| **VN** | Vent (Venteo) |

### 4.4 Especificaciones de Línea (Pipe Specs)

La especificación de material define:

- **Material de tubería:** Carbon Steel, Stainless Steel 304/316, Chrome-Moly, Alloy
- **Rating de presión:** ANSI 150#, 300#, 600#, 900#, 1500#, 2500# (USA) o PN10, PN16, PN25, PN40 (Europa)
- **Schedule de pared:** SCH 10, SCH 40, SCH 80, SCH 160
- **Material de fittings:** Matching pipe material
- **Material de bridas:** ASME B16.5, B16.47
- **Material de válvulas:** Matching pipe material
- **Material de empaquetaduras:** Graphite, PTFE, Spiral Wound
- **Material de pernos:** A193 B7, A194 2H

**Ejemplo de Pipe Spec:**

```
Spec: CS150
- Pipe: ASTM A106 Grade B Carbon Steel, Seamless
- Rating: ANSI 150# (PN20)
- Schedule: SCH 40 (2" to 12"), SCH STD (14" and larger)
- Fittings: ASME B16.9, A234 WPB
- Flanges: ASME B16.5, A105 RF (Raised Face)
- Valves: A216 WCB body, trim per service
- Gaskets: Spiral wound 304SS/graphite
- Bolts: A193 B7, Nuts A194 2H
- Temperature range: -20°F to 650°F
- Pressure: Up to 285 psig @ 100°F
```

## 5. Símbolos de Equipos Principales según ASME

### 5.1 Equipos de Transferencia de Calor

**Intercambiadores de calor (Heat Exchangers):**

Los intercambiadores aparecen en P&ID con símbolos estandarizados según tipo:

**Shell & Tube (Casco y tubos):**
```
Símbolo: Rectángulo con círculo en un extremo
   ┌────────○
   │  E-101 │
   └────────○
```
- Uso: Transferencia de calor líquido-líquido, condensación, ebullición
- Información mostrada: Tag (E-101), duty (MM BTU/hr), área (ft²)
- Conexiones: Inlet/outlet lado tubos, inlet/outlet lado casco

**Enfriadores de aire (Air Coolers/Fin-Fan):**
```
Símbolo: Hexágono con ventilador
     ╱╲
    ╱  ╲
   │E-205│
    ╲  ╱
     ╲╱
```
- Uso: Enfriamiento con aire ambiente
- Información: Tag, duty, número de bahías (bays)

**Calderas (Boilers/Fired Heaters):**
```
Símbolo: Rectángulo con llama
   ┌────────┐
   │ ≈≈≈≈≈  │  ← Llamas
   │ H-301  │
   └────────┘
```
- Uso: Calentamiento directo con combustión
- Información: Tag, duty, combustible, tiro

![Símbolos de intercambiadores de calor](../imagenes/leccion-6-simbolos-intercambiadores.png)

### 5.2 Equipos Rotativos

**Bombas Centrífugas (Centrifugal Pumps):**
```
Símbolo: Círculo con triángulo interno
    ───○◄───
       P-101
```
- Uso: Transferencia de líquidos
- Información: Tag, capacidad (gpm), cabezal (ft), potencia (HP)
- Variantes: Pump + spare (principal + respaldo)

**Bombas de Desplazamiento Positivo (Positive Displacement):**
```
Símbolo: Círculo con rectángulo interno
    ───○■───
       P-205
```
- Uso: Líquidos viscosos, dosificación
- Tipos: Reciprocating, rotary, diaphragm

**Compresores (Compressors):**
```
Símbolo: Círculo con doble triángulo
    ───○◄◄───
       K-301
```
- Uso: Compresión de gases
- Información: Tag, capacidad (ACFM/SCFM), presión descarga, potencia
- Tipos: Centrífugos, reciprocantes, tornillo, scroll

**Turbinas (Turbines):**
```
Símbolo: Círculo con aspas
    ───○⚙───
       T-401
```
- Uso: Generación de potencia (turbinas de vapor/gas)
- Driver de compresores/bombas grandes

**Ventiladores/Sopladores (Fans/Blowers):**
```
Símbolo: Círculo con propela
    ───○⊕───
       B-501
```
- Uso: Movimiento de aire/gases a baja presión

![Símbolos de equipos rotativos](../imagenes/leccion-6-simbolos-rotativos.png)

### 5.3 Recipientes y Tanques

**Columnas de Destilación/Absorción (Towers/Columns):**
```
Símbolo: Cilindro vertical con platos internos
       │     │
       │ T-101│
       │─────│  ← Platos o empaque
       │─────│
       │─────│
       │     │
```
- Uso: Separación por destilación, absorción, stripping
- Información: Tag, número de platos, tipo de platos/empaque

**Reactores (Reactors):**
```
Símbolo: Cilindro vertical con agitador
       │     │
       │ R-201│
       │  ⊕  │  ← Agitador
       │     │
```
- Uso: Reacciones químicas (batch o continuo)
- Información: Tag, volumen, temperatura/presión de diseño

**Tanques de Almacenamiento (Storage Tanks):**
```
Símbolo: Cilindro vertical simple
       │     │
       │TK-301│
       │     │
       └─────┘
```
- Uso: Almacenamiento de líquidos (atmosférico o presurizado)
- Información: Tag, capacidad (gallons, m³), tipo de techo

**Recipientes Separadores (Separators/Drums):**
```
Símbolo: Cilindro horizontal o vertical
   ┌─────────────┐
   │   V-401     │
   └─────────────┘
```
- Uso: Separación líquido-vapor, líquido-líquido
- Tipos: Flash drum, knockout drum, surge drum

**Filtros (Filters):**
```
Símbolo: Círculo con malla interior
    ───○╱╲───
       F-501
```
- Uso: Filtración de sólidos
- Tipos: Cartridge, bag, strainer

![Símbolos de recipientes y tanques](../imagenes/leccion-6-simbolos-recipientes.png)

### 5.4 Equipos Especiales

**Secadores (Dryers):**
```
Símbolo: Rectángulo con indicación de calor
   ┌────────┐
   │ ≈  D-101│
   └────────┘
```

**Ciclones (Cyclones):**
```
Símbolo: Cono con entrada tangencial
     ╱│╲
    ╱ │ ╲
   │ CY-201│
    ╲   ╱
     ╲ ╱
      V
```

**Mezcladores Estáticos (Static Mixers):**
```
Símbolo: Tubo con elementos internos
   ───|X|───
      M-301
```

**Eyectores (Ejectors):**
```
Símbolo: Venturi
   ─────▷◁─────
       EJ-401
```

## 6. Fundamentos de Flujo de Proceso

### 6.1 Dirección de Flujo

En P&ID, la dirección de flujo se indica mediante:

**Flechas en líneas:**
- Flecha simple (→): Flujo en una dirección
- Flecha doble (⟷): Flujo bidireccional (reversible)
- Número junto a línea: Referencia a balance de masa

**Convención de orientación:**
- Flujo de izquierda a derecha (o de abajo hacia arriba) cuando sea posible
- Equipos organizados en secuencia de proceso
- Reciclos claramente identificados

### 6.2 Balance de Masa Simplificado

Aunque el balance detallado está en el PFD, el P&ID debe ser consistente:

**Conservación de masa:**
- Suma de entradas = Suma de salidas (estado estacionario)
- Acumulación en equipos batch

**Puntos de mezcla y separación:**
- Mezcla: Múltiples entradas → Una salida
- Separación: Una entrada → Múltiples salidas

**Reciclos:**
- Líneas de reciclo claramente marcadas
- Evitar ambigüedades en dirección de flujo

### 6.3 Condiciones de Operación

El P&ID típicamente referencia al PFD para condiciones detalladas, pero puede incluir:

**Presiones de diseño:**
- En especificación de línea (rating)
- En datos de equipos (MAWP - Maximum Allowable Working Pressure)

**Temperaturas de operación:**
- Indicadas en especificación de línea cuando afectan material
- Requerimientos de aislamiento/trazado

**Caudales:**
- Sizing de válvulas de control
- Sizing de instrumentos de flujo

## 7. Mejores Prácticas en Creación de P&IDs

### 7.1 Organización del Dibujo

**Layout lógico:**
- Equipos principales centrales, equipos auxiliares en periferia
- Flujo de proceso de izquierda a derecha
- Instrumentación agrupada por área

**Claridad visual:**
- Evitar cruces innecesarios de líneas
- Usar puentes (jumps) en cruces inevitables
- Espaciado adecuado entre símbolos

**Escalado:**
- Tamaño de símbolos consistente
- Texto legible (altura mínima 2.5 mm en impresión A1/A0)

### 7.2 Consistencia y Estándares

**Símbolos:**
- Usar biblioteca de símbolos estándar ISA
- No crear símbolos propios sin aprobación
- Mantener consistencia en todo el proyecto

**Nomenclatura:**
- Sistema de TAGs consistente con ISA S5.1
- Números de línea según estándar de proyecto
- Abreviaturas estándar (no inventen)

**Especificaciones:**
- Pipe specs definidos en documento separado
- Referencia a specs vigentes
- Actualizaciones controladas

### 7.3 Verificación y Validación

**Checklist de revisión P&ID:**

✅ **Completitud:**
- Todos los equipos incluidos
- Toda la instrumentación requerida
- Todas las válvulas de bloqueo y control
- Todos los drenajes y venteos

✅ **Consistencia:**
- Tags únicos (no duplicados)
- Números de línea consistentes
- Referencias a PFD correctas
- Balance de masa coherente

✅ **Seguridad:**
- PSVs (válvulas de alivio) en todos los puntos requeridos
- Instrumentos de seguridad (SIS) identificados
- Interlocks de emergencia
- Sistemas de ESD (Emergency Shutdown)

✅ **Operabilidad:**
- Válvulas de bloqueo para mantenimiento
- Bypasses donde requerido
- Líneas de recirculación para bombas
- Tomas de muestra

✅ **Estándares:**
- Cumplimiento ISA S5.1
- Cumplimiento con códigos ASME
- Cumplimiento con regulaciones (EPA, OSHA)

## Consejos Profesionales

💡 **Tip 1: Estudie P&IDs Reales**
La mejor manera de dominar P&IDs es estudiar diagramas de plantas reales. Solicite acceso a P&IDs de proyectos anteriores en su organización y analice cómo representan sistemas complejos.

💡 **Tip 2: Aprenda el Proceso Antes de Dibujar**
No puede crear un P&ID correcto sin entender el proceso que representa. Colabore con ingenieros de proceso para comprender la operación antes de iniciar el dibujo.

💡 **Tip 3: Use Plantillas de Proyecto**
Establezca plantillas (templates) con símbolos, bloques de título, layers y configuraciones estándar. Esto asegura consistencia y ahorra tiempo.

💡 **Tip 4: Piense en el Usuario Final**
Los P&IDs son usados por operadores, personal de mantenimiento y contratistas. Diseñe pensando en claridad y facilidad de interpretación, no solo en completitud técnica.

💡 **Tip 5: Mantenga una Leyenda Completa**
Incluya una leyenda (legend) en cada P&ID o en hoja separada con símbolos usados, abreviaturas, notas generales y lista de especificaciones de línea.

⚠️ **Advertencia: Cambios No Controlados**
En plantas operativas, NUNCA realice cambios a P&IDs sin seguir el proceso formal de Management of Change (MOC). P&IDs son documentos controlados y cambios no autorizados pueden resultar en incidentes de seguridad.

⚠️ **Advertencia: Información Incompleta**
Un P&ID incompleto es peor que no tener P&ID. Información faltante (válvulas, instrumentos, drenajes) puede causar errores en construcción, costos de reingeniería y riesgos de seguridad.

⚠️ **Advertencia: Copia Literal de Otros Proyectos**
No copie P&IDs de otros proyectos sin revisión exhaustiva. Cada proceso tiene características únicas y lo que funciona en un proyecto puede no ser apropiado en otro.

## Ejercicio Práctico

### Ejercicio 6: Análisis e Interpretación de P&ID Estándar

**Objetivo:** Desarrollar habilidad para interpretar P&IDs profesionales identificando equipos, instrumentación, líneas y lazos de control según estándares ISA.

**Escenario:**
Se le proporciona un P&ID de un sistema de bombeo con control de flujo. El sistema incluye:
- Tanque de succión (TK-101)
- Bomba centrífuga con spare (P-101 A/B)
- Válvula de control de flujo (FV-101)
- Instrumentación de flujo, presión y nivel
- Líneas de proceso, drenajes y venteos

**Instrucciones:**

1. **Identificar todos los equipos principales:**
   - Listar tags de equipos
   - Identificar tipo de equipo (tanque, bomba, etc.)
   - Describir función en el proceso

2. **Identificar instrumentación completa:**
   - Listar todos los TAGs de instrumentos
   - Decodificar cada TAG según ISA S5.1 (ej: FT-101 = Flow Transmitter)
   - Identificar ubicación (campo vs panel vs DCS)

3. **Trazar lazos de control:**
   - Identificar lazo de control de flujo completo (sensor → transmisor → controlador → válvula)
   - Identificar tipo de señales (eléctrica, neumática, digital)
   - Dibujar diagrama de bloques del lazo

4. **Analizar líneas de proceso:**
   - Identificar número de línea principal
   - Decodificar información de línea (servicio, tamaño, spec)
   - Identificar líneas auxiliares (drenajes, venteos, recirculación)

5. **Evaluar seguridad y operabilidad:**
   - Identificar válvulas de aislamiento para mantenimiento
   - Verificar presencia de drenajes y venteos
   - Identificar instrumentos de seguridad (alarmas, trips)

6. **Crear reporte de análisis:**
   - Lista de equipos con función
   - Lista de instrumentos con descripción
   - Diagrama de lazo de control
   - Lista de líneas con especificaciones
   - Observaciones sobre seguridad y operabilidad

**Tiempo estimado:** 30 minutos

**Entregables:**
- Reporte de análisis (documento Word/PDF)
- Diagrama de lazo de control (sketch o diagrama de bloques)
- Lista completa de TAGs con decodificación

**Criterios de evaluación (100 puntos):**
- Identificación correcta de equipos (20 puntos)
- Decodificación correcta de TAGs según ISA (25 puntos)
- Trazado correcto de lazo de control (25 puntos)
- Análisis de líneas y especificaciones (15 puntos)
- Evaluación de seguridad/operabilidad (15 puntos)

Consulte el archivo [ejercicios.md](../ejercicios.md) para el diagrama P&ID del ejercicio y ejemplos de respuestas.

## Evaluación

### Preguntas de Evaluación

**Pregunta 1:** Según el estándar ISA S5.1-2009, ¿qué representa un instrumento con símbolo de círculo simple (○)?

a) Instrumento montado en panel frontal de sala de control
b) Instrumento montado en campo (field mounted)
c) Función de computador en DCS
d) Instrumento de función auxiliar

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Instrumento montado en campo (field mounted)

Explicación: Según ISA S5.1-2009, el círculo simple (○) representa un instrumento montado en campo, directamente en la tubería o equipo. El círculo doble (◎) representa instrumento en panel frontal, el hexágono (⬡) representa función en DCS/computador, y el cuadrado (□) representa función auxiliar.
</details>

**Pregunta 2:** ¿Cuál es la principal diferencia entre un PFD y un P&ID?

a) El PFD es en color y el P&ID es blanco y negro
b) El PFD muestra solo equipos principales y balance de masa, el P&ID muestra todos los detalles para construcción
c) El PFD es 3D y el P&ID es 2D
d) No hay diferencia, son el mismo documento con nombres diferentes

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) El PFD muestra solo equipos principales y balance de masa, el P&ID muestra todos los detalles para construcción

Explicación: El Process Flow Diagram (PFD) es un diagrama simplificado que muestra equipos principales, flujos principales y balance de masa/energía, usado en fase conceptual. El P&ID (Piping and Instrumentation Diagram) muestra todos los detalles necesarios para construcción: todos los equipos, instrumentación completa, válvulas, líneas auxiliares, números de línea, especificaciones, etc. El P&ID es el documento de ingeniería de detalle.
</details>

**Pregunta 3:** ¿Qué significa el TAG "PSHH-205" según ISA S5.1?

a) Pressure Switch High-High (Interruptor de presión muy alto) número 205
b) Pressure Sensor Hand High número 205
c) Pressure Shutdown High número 205
d) Pressure Switch Hydraulic High número 205

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: a) Pressure Switch High-High (Interruptor de presión muy alto) número 205

Explicación: Decodificación del TAG según ISA:
- P = Pressure (Variable medida: Presión)
- S = Switch (Función: Interruptor/Switch)
- HH = High-High (Modificador: Muy alto, segundo nivel de alarma)
- 205 = Número de loop
Este es típicamente un instrumento de seguridad que activa cuando la presión alcanza un nivel muy alto, posiblemente activando un shutdown.
</details>

**Pregunta 4:** En un número de línea "ST-1025-6-CS150-IN", ¿qué representa "CS150"?

a) Tamaño de la línea (6 pulgadas)
b) Especificación de material (Carbon Steel ANSI 150#)
c) Número secuencial de línea
d) Código de servicio (Steam)

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Especificación de material (Carbon Steel ANSI 150#)

Explicación: En el formato estándar de número de línea:
- ST = Código de servicio (Steam - Vapor)
- 1025 = Número secuencial de línea
- 6 = Tamaño nominal (6" NPS)
- CS150 = Especificación de material (Carbon Steel, ANSI Class 150#)
- IN = Modificador (Insulated - Aislada)
La especificación "CS150" indica que la línea es de acero al carbono con rating de presión ANSI 150#.
</details>

**Pregunta 5:** ¿Qué tipo de línea de señal representa una línea discontinua corta (- - - -) en un P&ID según ISA?

a) Señal eléctrica/electrónica
b) Señal neumática (3-15 psi)
c) Conexión mecánica (tubing capilar)
d) Señal de software/comunicación digital

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Señal neumática (3-15 psi)

Explicación: Según ISA S5.1, los tipos de línea de señal son:
- Línea continua (━━━) = Señal eléctrica/electrónica/digital
- Línea discontinua corta (─ ─ ─) = Señal neumática (aire de instrumentos, típicamente 3-15 psi o 20-100 kPa)
- Línea doble (═══) = Señal hidráulica
- Línea punto-raya (─ • ─ •) = Tubo capilar (conexión mecánica llena de fluido)
- Línea con "S" (━S━S━) = Señal de software/enlace de datos
</details>

## Resumen

En esta lección ha aprendido:

- ✅ Los fundamentos de P&ID como documento central de ingeniería de procesos y su rol en diseño, construcción, operación y mantenimiento de plantas industriales
- ✅ Las diferencias críticas entre PFD (Process Flow Diagram) y P&ID, sus aplicaciones específicas y cuándo usar cada uno
- ✅ El estándar ISA S5.1-2009 para símbolos de instrumentación, identificación alfanumérica de TAGs y representación de señales
- ✅ Clasificación y representación de tipos de líneas (proceso, utilidades, instrumentación, drenajes) con sistemas de numeración y especificaciones
- ✅ Símbolos estándar de equipos principales según ASME: intercambiadores, bombas, compresores, columnas, reactores, tanques y equipos especiales
- ✅ Fundamentos de flujo de proceso, balance de masa simplificado y representación de condiciones de operación en P&ID

La comprensión sólida de estos fundamentos de P&ID es esencial para crear diagramas precisos, consistentes y útiles que cumplan con estándares internacionales y sirvan eficazmente a todas las disciplinas de ingeniería, construcción y operación.

## Próxima Lección

En la **Lección 7: Símbolos y grupos de líneas en P&ID**, aprenderá a utilizar las herramientas de AutoCAD Plant 3D 2026 para insertar símbolos de equipos e instrumentación desde bibliotecas estándar ISA, crear símbolos personalizados para equipos específicos de su proyecto, configurar grupos de líneas (line groups) con especificaciones de material, y dominar el uso de puntos de conexión, grips inteligentes y atributos de símbolos para construcción eficiente de P&IDs profesionales.

---

**Lección 6 de 30 - Módulo 2 de 6**
AutoCAD Plant 3D 2026 - Curso Avanzado
DISTMAH ATC - Authorized Training Center
