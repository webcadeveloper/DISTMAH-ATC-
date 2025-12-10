# Ejercicios Prácticos - Módulo 2: P&ID (Diagramas de Proceso e Instrumentación)

Este documento contiene 5 ejercicios prácticos completos que integran todas las lecciones del Módulo 2. Cada ejercicio simula un escenario real de proyecto industrial y evalúa competencias específicas desarrolladas en el módulo.

---

## Ejercicio 6: Configuración de biblioteca de símbolos corporativa

**Basado en:** Lección 6 (Introducción a P&ID en Plant 3D) y Lección 7 (Símbolos y grupos de líneas)

**Duración:** 45 minutos

**Nivel de dificultad:** Intermedio

### Escenario

Usted es el líder técnico de Plant 3D en una empresa de ingeniería que acaba de ganar un contrato para diseñar una planta petroquímica. La empresa cliente tiene estándares corporativos específicos para símbolos P&ID que difieren de los símbolos ISA estándar de Autodesk. Debe configurar una biblioteca de símbolos personalizada que cumpla estos requisitos.

**Requisitos del cliente:**
- Bombas: símbolo circular con flecha interna indicando dirección de flujo (diferente del símbolo ISA triangular)
- Intercambiadores de calor: símbolo con designación de tipo (carcasa-tubo, placas, espiral) incorporada visualmente
- Válvulas de control: actuador mostrado gráficamente sobre válvula (neumático = triángulo, eléctrico = cuadrado, manual = círculo)
- Numeración de instrumentos: formato `[PLANTA]-[AREA]-[TIPO][NUMERO]` (ejemplo: P1-20-FIC-001)

### Objetivos del ejercicio

- Crear símbolos personalizados desde cero con geometría específica
- Definir puntos de conexión inteligentes con validación
- Configurar atributos dinámicos según requisitos corporativos
- Implementar esquema de numeración personalizado para instrumentos
- Generar catálogo de símbolos documentado

### Pasos detallados

**Parte A: Crear símbolo personalizado de bomba centrífuga (15 minutos)**

1. **Diseño geométrico:**
   - Inicie nuevo dibujo P&ID o use plantilla corporativa
   - Establezca capa actual: 0 (importante para herencia de propiedades)
   - Dibuje círculo de diámetro 12 unidades, centro en 0,0
   - Dibuje flecha interna usando PLINE: desde (-3,0) → (3,0) con punta en (3,0)
   - Agregue líneas de soporte: base de bomba usando línea horizontal bajo círculo
   - Verifique que todo esté en capa 0

2. **Definir atributos:**
   - Comando: `ATTDEF`
   - **Atributo TAG:**
     - Tag: `TAG`
     - Prompt: "Pump Tag Number"
     - Default: `P-XXX`
     - Modo: Visible, Verify
     - Justification: Middle Center
     - Height: 3.0
     - Position: (0, 14) - encima del símbolo
   - **Atributo DESCRIPTION:**
     - Tag: `DESCRIPTION`
     - Prompt: "Pump Description"
     - Default: "Centrifugal Pump"
     - Modo: Visible
     - Height: 2.5
     - Position: (0, -12) - debajo del símbolo
   - **Atributos adicionales (invisibles):**
     - `SERVICE`: servicio del fluido
     - `FLOW_RATE`: caudal nominal
     - `HEAD`: carga nominal
     - `POWER`: potencia del motor
     - `MATERIAL`: material de carcasa

3. **Definir puntos de conexión:**
   - Comando: `PNPCONNECTIONPOINT`
   - **Connection Point 1 - Succión:**
     - Name: `SUCTION`
     - Type: Process
     - Position: (-6, 0) - lado izquierdo
     - Direction: Input (entrada de flujo)
     - Allowed Services: All
     - Size Range: DN25 to DN300
   - **Connection Point 2 - Descarga:**
     - Name: `DISCHARGE`
     - Type: Process
     - Position: (6, 0) - lado derecho
     - Direction: Output (salida de flujo)
     - Allowed Services: All
     - Size Range: DN25 to DN250

4. **Crear bloque P&ID:**
   - Comando: `PNPCREATEBLOCK`
   - **General Information:**
     - Symbol Name: `Pump_Centrifugal_Custom_Client`
     - Description: "Bomba centrífuga - estándar cliente petroquímico"
     - Symbol Class: `Pumps`
     - Symbol SubClass: `Centrifugal`
   - **Geometry Selection:**
     - Select all: círculo, flecha, líneas base, atributos
     - Insertion Point: 0,0
     - Scale: Uniform
   - **Connection Points:**
     - Verificar que SUCTION y DISCHARGE aparecen listados
     - Validar direcciones (Input/Output)
   - **Attributes:**
     - Map TAG → PnP_TagNumber
     - Map DESCRIPTION → PnP_Description
     - Map SERVICE → PnP_Service
     - Map FLOW_RATE → Custom Property (crear si no existe)
     - Map HEAD → Custom Property
     - Map POWER → Custom Property
   - **Save Location:**
     - Library: Project Symbol Library
     - Category: Equipment/Pumps/Custom
     - Save

5. **Validar símbolo:**
   - Inserte símbolo en dibujo de prueba
   - Verifique que atributos son editables
   - Dibuje línea de proceso hacia connection point SUCTION - debe conectar automáticamente (snap)
   - Dibuje línea desde DISCHARGE - debe conectar
   - Properties palette: verifique que todas las propiedades mapean correctamente

**Parte B: Crear símbolo de válvula de control con actuador visual (10 minutos)**

1. **Diseño geométrico base:**
   - Dibuje válvula de control (símbolo ISA estándar):
     - Dos líneas diagonales formando X (válvula globo simplificada)
     - Tamaño: 10x10 unidades
   - Agregue indicador de actuador:
     - **Neumático:** triángulo apuntando hacia arriba sobre válvula
     - Comando POLYGON: 3 lados, inscrito en círculo radio 4
     - Posición: centro en (0, 8) - encima de válvula

2. **Atributos:**
   - `TAG` (visible): identificador de válvula (FCV, PCV, TCV, LCV)
   - `ACTUATOR_TYPE` (invisible): Pneumatic, Electric, Manual
   - `FAIL_POSITION` (invisible): Fail Close, Fail Open, Fail Last
   - `SIZE` (visible): tamaño nominal

3. **Connection Points:**
   - CP1: entrada (-6, 0), Direction: Input
   - CP2: salida (6, 0), Direction: Output
   - CP3: señal de control (0, -8), Type: Instrument Signal

4. **Crear bloque:** `Control_Valve_Pneumatic_Custom`
   - Clase: Valves, SubClase: Control

5. **Crear variantes (opcional):**
   - `Control_Valve_Electric_Custom`: cuadrado en lugar de triángulo
   - `Control_Valve_Manual_Custom`: círculo en lugar de triángulo

**Parte C: Configurar esquema de numeración personalizado (10 minutos)**

1. **Acceder a configuración:**
   - Comando: `PROJECTSETUP`
   - Navegue: P&ID Settings > Instrument Tagging

2. **Crear esquema de numeración:**
   - New Scheme: `Client_Petrochemical_Standard`
   - Description: "Formato [PLANTA]-[AREA]-[TIPO][NUMERO]"

3. **Definir formato de TAG:**
   - Format Pattern: `{PLANT}-{AREA}-{PREFIX}{SEQUENCE}`
   - Variables:
     - `{PLANT}`: código de planta (P1, P2, P3)
     - `{AREA}`: código de área (10, 20, 30, 40, 50)
     - `{PREFIX}`: tipo de instrumento (FIC, PT, TT, LT, etc.)
     - `{SEQUENCE}`: número secuencial (001-999)

4. **Configurar para Flow Transmitters:**
   - Instrument Type: Flow Transmitter
   - Prefix: `FT-`
   - Plant Code: tomado de Project Properties
   - Area Code: tomado de Drawing Properties
   - Sequence Format: `###` (3 dígitos)
   - Starting Number: `001`
   - Increment: `1`
   - Ejemplo resultante: `P1-20-FT-001`

5. **Repetir para otros tipos:**
   - Pressure Transmitter: `PT-`
   - Temperature Transmitter: `TT-`
   - Level Transmitter: `LT-`
   - Flow Controller: `FIC-`
   - Pressure Controller: `PIC-`

6. **Configurar propiedades de proyecto y dibujo:**
   - Project Properties > Plant Code: `P1`
   - Abra P&ID de área 20
   - Drawing Properties > Area Code: `20`

7. **Validar numeración:**
   - Inserte Flow Transmitter en P&ID área 20
   - TAG debe asignarse automáticamente: `P1-20-FT-001`
   - Inserte otro FT: debe ser `P1-20-FT-002`
   - Inserte Pressure Transmitter: debe ser `P1-20-PT-001` (secuencia independiente)

**Parte D: Generar catálogo de símbolos documentado (10 minutos)**

1. **Generar catálogo automático:**
   - Comando: `PNPGENERATESYMBOLCATALOG`
   - Library: Project Symbol Library
   - Content:
     - ☑ Symbol images (thumbnails)
     - ☑ Symbol properties
     - ☑ Connection point details
     - ☑ Usage guidelines
   - Format: PDF + Excel
   - Output location: `[Project]\Documentation\Symbol_Catalog_Client.pdf`

2. **Personalizar catálogo (Excel):**
   - Abra archivo Excel generado
   - Agregue columnas:
     - **When to Use**: cuándo usar este símbolo
     - **Client Standard Reference**: referencia a estándar corporativo del cliente
     - **Approved By**: quién aprobó el símbolo
     - **Date**: fecha de creación/aprobación
   - Complete información para cada símbolo

3. **Formatear PDF:**
   - Agregue página de portada con logo de empresa
   - Incluya índice con enlaces
   - Sección por categoría: Bombas, Válvulas, Intercambiadores, Instrumentos

4. **Distribuir catálogo:**
   - Enviar a equipo de diseño P&ID
   - Publicar en repositorio de documentos del proyecto
   - Incluir en paquete de inducción para nuevos diseñadores

### Entregables

1. **Biblioteca de símbolos completa:**
   - Mínimo 3 símbolos personalizados: bomba, válvula control, intercambiador
   - Cada símbolo con connection points funcionales
   - Atributos correctamente mapeados

2. **Dibujo de prueba:**
   - P&ID demostrativo usando símbolos personalizados
   - Mínimo 5 componentes insertados con propiedades completas
   - Conexiones entre componentes validadas

3. **Configuración de numeración:**
   - Esquema personalizado implementado
   - Demostración con 10+ instrumentos numerados automáticamente
   - Documentación de formato en Project Settings

4. **Catálogo de símbolos:**
   - PDF con todos los símbolos documentados
   - Excel con metadata completa
   - Guidelines de uso para cada símbolo

### Criterios de evaluación (100 puntos)

- **Símbolos personalizados (30 puntos):**
  - Geometría correcta según especificaciones (10 pts)
  - Connection points funcionales con validación (10 pts)
  - Atributos completos y correctamente mapeados (10 pts)

- **Esquema de numeración (25 puntos):**
  - Formato correcto implementado (10 pts)
  - Numeración automática funcional (10 pts)
  - Múltiples tipos de instrumentos configurados (5 pts)

- **Validación funcional (25 puntos):**
  - Símbolos insertan correctamente (5 pts)
  - Conexiones automáticas funcionan (snap correcto) (10 pts)
  - Propiedades editables y persisten (10 pts)

- **Documentación (20 puntos):**
  - Catálogo completo y profesional (10 pts)
  - Guidelines claros de uso (5 pts)
  - Distribución a equipo documentada (5 pts)

---

## Ejercicio 7: Diseño completo de sistema de control de temperatura

**Basado en:** Lección 7 (Símbolos y grupos de líneas) y Lección 8 (Etiquetado y numeración de instrumentos)

**Duración:** 60 minutos

**Nivel de dificultad:** Avanzado

### Escenario

Usted está diseñando el sistema de control de temperatura de un reactor químico batch en una planta farmacéutica. El reactor opera en ciclos: calentamiento inicial con vapor, mantenimiento de temperatura durante reacción, y enfriamiento final con agua. El sistema debe incluir instrumentación completa según ISA S5.1 con lazos de control documentados.

**Especificaciones del sistema:**
- **Reactor:** R-201, volumen 5000 litros, diseño 200°C / 10 bar g
- **Calentamiento:** vapor saturado 6 bar, línea 2" (DN50)
- **Enfriamiento:** agua de enfriamiento, línea 2" (DN50)
- **Control:** PLC con control split-range (válvula vapor 0-50%, válvula agua 50-100%)
- **Seguridad:** alarmas TAH (180°C) y TAHH (190°C), interlock de parada en TAHH

### Objetivos del ejercicio

- Diseñar P&ID completo de lazo de control complejo (split-range)
- Aplicar estándar ISA S5.1 correctamente para todos los instrumentos
- Configurar Line Groups para servicios múltiples (vapor, agua, proceso)
- Implementar numeración automática con loop numbers consistentes
- Documentar interlocks de seguridad

### Pasos detallados

**Parte A: Configurar Line Groups para servicios del sistema (10 minutos)**

1. **Line Group para vapor:**
   - Name: `Steam_6bar_Process`
   - Description: "Vapor saturado 6 bar para calentamiento de reactores"
   - Visual Properties:
     - Color: Rojo (color 1)
     - Linetype: Continua (CONTINUOUS)
     - Lineweight: 0.50 mm
   - Numbering:
     - Prefix: `ST-`
     - Format: `##-###` (área-secuencia)
     - Area: `20` (área de reactores)
     - Starting: `001`
   - Specification: `SS-300-B2` (acero inoxidable 300# para vapor)
   - Process Properties:
     - Service: `Steam 6 bar`
     - Design Pressure: `10 bar g`
     - Design Temperature: `200°C`
     - Insulation: `Calcium Silicate 50mm`

2. **Line Group para agua de enfriamiento:**
   - Name: `Cooling_Water_Supply`
   - Description: "Agua de enfriamiento suministro a equipos"
   - Visual Properties:
     - Color: Azul (color 5)
     - Linetype: Continua
     - Lineweight: 0.50 mm
   - Numbering:
     - Prefix: `CW-`
     - Format: `##-###`
     - Area: `20`
     - Starting: `001`
   - Specification: `CS-150-A1` (acero al carbono 150# para agua)
   - Process Properties:
     - Service: `Cooling Water`
     - Design Pressure: `6 bar g`
     - Design Temperature: `60°C`
     - Insulation: `None`

3. **Line Group para condensado:**
   - Name: `Condensate_Return`
   - Color: Rojo punteado (linetype DASHED)
   - Prefix: `CN-`
   - Specification: `CS-150-A1`
   - Service: `Condensate`

**Parte B: Dibujar P&ID del reactor con conexiones de proceso (15 minutos)**

1. **Insertar reactor:**
   - Symbol: Reactor vertical con agitador
   - TAG: `R-201`
   - Description: "Reactor químico batch"
   - Service: "Chemical Reaction"
   - Volume: "5000 L"
   - Design Pressure: "10 bar g"
   - Design Temperature: "200°C"
   - Position: centro del dibujo (100, 100)

2. **Dibujar línea de vapor:**
   - Line Group: `Steam_6bar_Process`
   - Origen: header de vapor (izquierda superior) - insertar símbolo de off-page connector: "FROM STEAM HEADER"
   - Dibuje línea horizontal hacia reactor
   - Size: `DN50` (2")
   - Line Number se asigna automáticamente: `ST-20-001`
   - Insertar válvula de aislamiento manual: `V-2001` antes de llegar a jacket de reactor
   - Conexión final: nozzle de vapor en jacket del reactor (N1)

3. **Dibujar línea de agua de enfriamiento:**
   - Line Group: `Cooling_Water_Supply`
   - Origen: header de CW (izquierda inferior) - off-page connector: "FROM CW SUPPLY HEADER"
   - Dibuje línea hacia reactor
   - Size: `DN50`
   - Line Number: `CW-20-001`
   - Válvula de aislamiento: `V-2005`
   - Conexión: nozzle de CW en jacket (N2)

4. **Dibujar línea de retorno de condensado:**
   - Line Group: `Condensate_Return`
   - Origen: nozzle de salida de jacket (N3)
   - Válvula de aislamiento: `V-2002`
   - Insertar trampa de vapor: `ST-2001`
   - Destino: off-page connector "TO CONDENSATE HEADER"
   - Line Number: `CN-20-001`

5. **Dibujar línea de retorno de CW:**
   - Similar a condensado
   - Line Number: `CW-20-002`
   - Destino: "TO CW RETURN HEADER"

**Parte C: Agregar instrumentación de temperatura (20 minutos)**

1. **Termopar (elemento primario):**
   - Symbol: Temperature Element (círculo con línea horizontal)
   - TAG: `TE-2301` (elemento primario del lazo 2301)
   - Type: "Thermocouple Type K"
   - Location: "Reactor vessel interior"
   - Range: "0-250°C"
   - Posición: dentro del reactor (indicar con línea punteada penetrando vessel)

2. **Transmisor de temperatura:**
   - Symbol: Temperature Transmitter (círculo TT en campo - círculo con línea)
   - TAG: `TT-2301` (mismo loop number que TE)
   - Description: "Temperature Transmitter - Reactor R-201"
   - Type: "4-20mA HART"
   - Range: "0-250°C"
   - Location: "Field mounted on reactor"
   - Posición: adyacente al reactor, conectado a TE con línea de señal eléctrica (discontinua)

3. **Controlador de temperatura:**
   - Symbol: Temperature Indicator Controller (círculo TIC sin línea - montado en panel/DCS)
   - TAG: `TIC-2301` (mismo loop number)
   - Description: "Temperature Indicator Controller - Reactor R-201"
   - Control Mode: "PID"
   - Location: "DCS"
   - Posición: parte superior del dibujo (área de instrumentos de panel)
   - Señal de entrada: línea discontinua desde TT-2301 a TIC-2301

4. **Relay de cómputo (para split-range):**
   - Symbol: Computing Relay (círculo TY)
   - TAG: `TY-2301` (mismo loop number)
   - Description: "Temperature Computing Relay - Split Range"
   - Function: "Split range: 0-50% to TCV-2301A (steam), 50-100% to TCV-2301B (CW)"
   - Posición: debajo de TIC-2301
   - Señal de entrada: línea discontinua desde TIC-2301

5. **Válvula de control de vapor:**
   - Symbol: Temperature Control Valve (TCV con actuador)
   - TAG: `TCV-2301A` (sufijo A = primera válvula del split range)
   - Description: "Temperature Control Valve - Steam"
   - Size: `DN50` (debe coincidir con línea ST-20-001)
   - Type: "Globe"
   - Actuator: "Pneumatic"
   - Fail Position: "Fail Close" (seguridad: cerrar vapor si falla aire)
   - Control Range: "0-50% controller output"
   - Posición: en línea ST-20-001, entre V-2001 y reactor
   - Señal de control: línea discontinua desde TY-2301

6. **Válvula de control de agua:**
   - Symbol: Temperature Control Valve
   - TAG: `TCV-2301B` (sufijo B = segunda válvula del split range)
   - Description: "Temperature Control Valve - Cooling Water"
   - Size: `DN50`
   - Type: "Globe"
   - Actuator: "Pneumatic"
   - Fail Position: "Fail Close" (seguridad: cerrar agua si falla)
   - Control Range: "50-100% controller output"
   - Posición: en línea CW-20-001, entre V-2005 y reactor
   - Señal de control: línea discontinua desde TY-2301

**Parte D: Agregar instrumentación de seguridad y alarmas (10 minutos)**

1. **Alarma de temperatura alta (TAH):**
   - Symbol: Temperature Alarm High (círculo TAH en panel)
   - TAG: `TAH-2302` (loop number diferente = alarma independiente)
   - Description: "Temperature Alarm High - Reactor R-201"
   - Input: desde TT-2301 (compartir transmisor)
   - Setpoint: "180°C"
   - Priority: "High"
   - Action: "Visual + Audible alarm"
   - Posición: junto a TIC-2301 en área de panel
   - Señal: línea discontinua desde TT-2301 (múltiple salida del transmisor)

2. **Alarma de temperatura muy alta (TAHH):**
   - Symbol: Temperature Alarm High High
   - TAG: `TAHH-2303` (loop number independiente)
   - Description: "Temperature Alarm High High - Reactor R-201"
   - Input: desde TT-2301
   - Setpoint: "190°C"
   - Priority: "Critical"
   - Action: "Visual + Audible alarm + Interlock trip"
   - Posición: junto a TAH-2302

3. **Interlock de parada:**
   - Dibujar línea de señal discontinua desde TAHH-2303 a:
     - TCV-2301A (cerrar vapor inmediatamente)
     - TCV-2301B (abrir agua enfriamiento al máximo)
   - Agregar nota en dibujo: "INTERLOCK: TAHH-2303 trips TCV-2301A closed and TCV-2301B full open"
   - Opcional: agregar símbolo de interlock (rombo o hexágono) para claridad

4. **Thermowell (opcional pero recomendado):**
   - Symbol: línea mostrando thermowell en vessel
   - TAG: `TW-2301` (asociado a TE-2301)
   - Material: "SS316L"
   - Length: "300mm"

**Parte E: Documentar lazos y generar reportes (5 minutos)**

1. **Asignar Loop Numbers consistentes:**
   - Verificar que todos los instrumentos del lazo principal tengan Loop Number = `2301`:
     - TE-2301, TT-2301, TIC-2301, TY-2301, TCV-2301A, TCV-2301B
   - Alarmas tienen loop numbers independientes:
     - TAH-2302 (loop 2302)
     - TAHH-2303 (loop 2303)

2. **Agregar notas al P&ID:**
   - "Control strategy: Split-range temperature control. TIC-2301 output 0-50% modulates steam valve TCV-2301A for heating. Output 50-100% modulates cooling water valve TCV-2301B for cooling."
   - "Safety: Temperature alarm TAHH-2303 at 190°C initiates interlock to close steam and open cooling water."
   - "All instruments in Area 20 (Reactors) must be explosion-proof certified (Zone 1)."

3. **Generar Instrument Index:**
   - Comando: `PNPINSTRUMENTINDEX`
   - Scope: Current Drawing
   - Incluir columnas: TAG, Description, Type, Loop Number, Range, Signal Type, Location
   - Output: Excel
   - Verificar que todos los instrumentos aparecen con datos completos

4. **Generar Loop Diagram:**
   - Comando: `PNPGENERATELOOPDIAGRAM`
   - Loop Number: `2301`
   - Debe mostrar: TE-2301, TT-2301, TIC-2301, TY-2301, TCV-2301A, TCV-2301B con señales
   - Output: PDF para documentación de lazo

### Entregables

1. **P&ID completo de sistema de control de temperatura:**
   - Reactor con jacket de calentamiento/enfriamiento
   - Líneas de vapor, agua, condensado con Line Numbers
   - Instrumentación completa (elemento, transmisor, controlador, relays, válvulas)
   - Alarmas y interlocks documentados
   - Notas de operación y seguridad

2. **Instrument Index:**
   - Lista de todos los instrumentos con propiedades completas
   - Loop numbers asignados correctamente
   - Rangos, tipos de señal, ubicaciones especificadas

3. **Loop Diagram del lazo 2301:**
   - Diagrama detallado generado automáticamente
   - Muestra todos los componentes del lazo y señales

4. **Documentación de interlocks:**
   - Matriz causa-efecto: TAHH-2303 → TCV-2301A close + TCV-2301B open
   - Lógica de seguridad documentada

### Criterios de evaluación (100 puntos)

- **Diseño de P&ID (30 puntos):**
  - Reactor correctamente representado con conexiones (5 pts)
  - Líneas de proceso completas con Line Numbers (10 pts)
  - Line Groups aplicados correctamente (5 pts)
  - Layout claro y profesional (10 pts)

- **Instrumentación según ISA S5.1 (35 puntos):**
  - TAGs correctos según estándar (TE, TT, TIC, TY, TCV, TAH, TAHH) (10 pts)
  - Loop numbers consistentes (2301 para lazo principal) (10 pts)
  - Símbolos correctos (campo vs. panel) (5 pts)
  - Señales correctamente representadas (discontinuas) (5 pts)
  - Split-range correctamente implementado (TY con dos válvulas) (5 pts)

- **Interlocks y seguridad (20 puntos):**
  - Alarmas con setpoints definidos (5 pts)
  - Interlock TAHH correctamente documentado (10 pts)
  - Acciones de seguridad claras (cerrar vapor, abrir agua) (5 pts)

- **Documentación y reportes (15 puntos):**
  - Instrument Index completo y correcto (5 pts)
  - Loop Diagram generado (5 pts)
  - Notas de proceso y seguridad en P&ID (5 pts)

---

## Ejercicio 8: Generación y validación de reportes de proyecto

**Basado en:** Lección 9 (Reportes y verificación de P&ID)

**Duración:** 45 minutos

**Nivel de dificultad:** Intermedio

### Escenario

Su proyecto de planta de tratamiento de agua está en etapa de 60% de diseño. El gerente de proyecto solicita reportes completos de todos los P&IDs para revisión con el cliente y para iniciar proceso de adquisiciones. Además, debe ejecutar validaciones exhaustivas para asegurar calidad de datos antes de la reunión de revisión en 2 días.

**Alcance del proyecto:**
- 8 dibujos P&ID completados (Áreas 10, 20, 30)
- 142 líneas de tubería
- 28 equipos (bombas, tanques, filtros)
- 89 válvulas (aislamiento y control)
- 67 instrumentos

### Objetivos del ejercicio

- Generar Line List completa con múltiples formatos (Excel, PDF)
- Crear reportes especializados (Equipment List, Valve List, Instrument Index)
- Ejecutar validaciones completas (conectividad, propiedades, numeración)
- Identificar y corregir errores detectados
- Personalizar reportes según formato corporativo

### Pasos detallados

**Parte A: Generación de Line List (15 minutos)**

1. **Generar Line List completa:**
   - Comando: `PNPLINELIST`
   - Scope: `All Drawings in Project` (8 dibujos)
   - Columnas a incluir:
     - ☑ Line Number
     - ☑ From Equipment
     - ☑ To Equipment
     - ☑ Service
     - ☑ Size
     - ☑ Specification
     - ☑ Material
     - ☑ Schedule
     - ☑ Rating
     - ☑ Insulation Type
     - ☑ Design Pressure
     - ☑ Design Temperature
     - ☑ Operating Pressure
     - ☑ Operating Temperature
     - ☑ P&ID Drawing
     - ☑ Remarks
   - Sorting:
     - Primary: Line Number (alfabético)
     - Secondary: Drawing
   - Grouping: `Group by Area`
   - Output: Excel + PDF
   - Location: `[Project]\Reports\LineList_60percent_20250124.xlsx`

2. **Revisar Line List en Excel:**
   - Abra archivo generado
   - Verifique estructura:
     - Sheet 1: Cover (portada con info de proyecto)
     - Sheet 2: Line List (datos principales)
     - Sheet 3: Summary (estadísticas)
   - En Sheet "Line List":
     - Verifique que encabezados están congelados (freeze panes)
     - Verifique filtros automáticos activos
     - Verifique agrupación por área (subtotales por área 10, 20, 30)

3. **Agregar análisis en Excel:**
   - En Sheet "Line List", agregar columna calculada:
     - Column Header: "Pressure Class"
     - Formula: `=IF(Design_Pressure<=10,"Low",IF(Design_Pressure<=25,"Medium","High"))`
     - Categoriza líneas por clase de presión
   - Crear Pivot Table:
     - Insert > PivotTable
     - Rows: Size (tamaño de línea)
     - Columns: Specification
     - Values: Count of Line Number
     - Resultado: tabla de cantidades de líneas por tamaño y spec
   - Crear gráfico de barras:
     - Chart type: Column
     - Data: cantidad de líneas por tamaño (DN25, DN50, DN80, DN100, etc.)
     - Title: "Distribution of Line Sizes - Water Treatment Plant"

4. **Validar completitud de datos en Line List:**
   - Filtrar columna "Specification": buscar blanks
     - Si hay líneas sin spec: anotar Line Numbers para corrección
   - Filtrar "Design Pressure": buscar valores = 0 o blanks
     - Líneas sin design pressure: anotar para completar
   - Filtrar "Service": buscar blanks o "Unknown"
     - Líneas sin servicio definido: anotar
   - Crear sheet "Data Issues" con lista de líneas a corregir

**Parte B: Reportes especializados (15 minutos)**

1. **Equipment List:**
   - Comando: `PNPEQUIPMENTLIST`
   - Scope: All Drawings
   - Filter: todas las clases de equipos
   - Columns:
     - TAG, Description, Type, Service, Quantity, Design Pressure, Design Temperature, Material, Vendor (si disponible), Drawing
   - Sort: por TAG (alfabético)
   - Group: por Type (Pumps, Tanks, Filters, etc.)
   - Output: `EquipmentList_60percent.xlsx`

2. **Valve List:**
   - Comando: `PNPVALVELIST`
   - Scope: All Drawings
   - Columns:
     - TAG, Type, Line Number, Size, Rating, Material, Actuator, Fail Position (para válvulas de control), Service, Drawing
   - Sort: por Line Number (agrupa válvulas por línea)
   - Output: `ValveList_60percent.xlsx`

3. **Valve Summary (estadístico):**
   - Comando: `PNPVALVESUMMARY`
   - Genera tabla resumen:
     - Gate Valves: por tamaño (DN25: 12 ea, DN50: 18 ea, etc.)
     - Ball Valves: por tamaño
     - Control Valves: por tamaño y actuator type
     - Check Valves: por tamaño
     - Total count por tipo
   - Utilidad: estimación de compras, identificación de tamaños más comunes para compra en lote
   - Output: incluido en `ValveList_60percent.xlsx` como Sheet "Summary"

4. **Instrument Index:**
   - Comando: `PNPINSTRUMENTINDEX`
   - Scope: All Drawings
   - Columns:
     - TAG, Description, Function, Measured Variable, Loop Number, Range, Signal Type, Location (Field/Panel), Service, Drawing, Remarks
   - Sort: por TAG (alfabético)
   - Group: por Measured Variable (Flow, Pressure, Temperature, Level, Analysis)
   - Output: `InstrumentIndex_60percent.xlsx`

5. **I/O List (para sistema de control):**
   - Comando: `PNPIOLIST`
   - Genera lista de señales de entrada/salida para diseño de DCS/PLC:
     - TAG, Signal Type (4-20mA, Digital, etc.), I/O Type (AI, AO, DI, DO), Range, Engineering Units, Terminal Assignment (si configurado)
   - Útil para dimensionamiento de tarjetas I/O
   - Output: `IOList_60percent.xlsx`

**Parte C: Validaciones exhaustivas (10 minutos)**

1. **Validación de conectividad:**
   - Comando: `PNPVALIDATECONNECTIVITY`
   - Scope: All Drawings
   - Level: Comprehensive
   - Generate report: Yes
   - Output: `ValidationReport_Connectivity.xlsx`
   - Revisar reporte:
     - Sheet "Summary": resumen de errores por tipo
     - Sheet "Critical Errors": lista de extremos abiertos, símbolos huérfanos, near misses
     - Para cada error: anotar ubicación (Drawing, X/Y) para corrección

2. **Validación de completitud de datos:**
   - Comando: `PNPCHECKCOMPLETENESS`
   - Check: Lines, Equipment, Valves, Instruments
   - Required properties:
     - Lines: Line Number, Service, Size, Specification
     - Equipment: TAG, Description, Class
     - Valves: TAG, Type, Size
     - Instruments: TAG, Function, Range
   - Output: `ValidationReport_Completeness.xlsx`
   - Revisar:
     - Componentes con required properties faltantes
     - Priorizar corrección antes de emisión a cliente

3. **Validación de numeración:**
   - Comando: `PNPVALIDATENUMBERING`
   - Check: TAGs duplicados, formato incorrecto, saltos de secuencia
   - Output: `ValidationReport_Numbering.xlsx`
   - Errores críticos:
     - TAGs duplicados (mismo TAG en dos componentes diferentes) - DEBE corregirse
     - Formato incorrecto (no sigue patrón configurado) - corregir
   - Warnings:
     - Saltos de secuencia (P-101, P-102, P-105 - falta P-103, P-104) - revisar si intencional

4. **Validación de propiedades:**
   - Comando: `PNPVALIDATEPROPERTIES`
   - Check: Design Pressure < Operating Pressure (imposible), servicios incompatibles con materiales, cambios de tamaño sin reducción
   - Output: `ValidationReport_Properties.xlsx`
   - Revisar discrepancias lógicas y corregir

5. **Reporte consolidado de validación:**
   - Comando: `PNPVALIDATIONREPORT`
   - Ejecuta todas las validaciones en un solo comando
   - Output: `ValidationReport_Consolidated.xlsx`
   - Estructura:
     - Sheet "Executive Summary": resumen con conteo de errores por categoría (Critical: X, Error: Y, Warning: Z)
     - Sheets individuales por tipo de validación
     - Sheet "Action Items": lista consolidada de correcciones requeridas

**Parte D: Corrección de errores y re-validación (5 minutos)**

1. **Corregir errores críticos:**
   - Abra dibujos con errores críticos (usar lista de ValidationReport)
   - **Extremos abiertos de líneas:**
     - Use coordenadas del reporte para localizar (comando ZOOM)
     - Conecte a equipo apropiado o agregue válvula de aislamiento
   - **Símbolos huérfanos:**
     - Conecte líneas a equipos sin conexiones
     - O elimine si símbolos son erróneos
   - **TAGs duplicados:**
     - Renumere uno de los componentes duplicados
   - **Datos faltantes:**
     - Complete Line Numbers, Services, Sizes faltantes
     - Use Data Manager para edición por lotes si muchos

2. **Re-ejecutar validación:**
   - Después de correcciones, re-ejecutar: `PNPVALIDATIONREPORT`
   - Verificar que Critical Errors = 0
   - Objetivo: Errors y Warnings minimizados
   - Comparar con reporte anterior: mostrar mejora

3. **Documentar correcciones:**
   - Crear documento "Validation_Corrections_Log.xlsx"
   - Columns: Error Type, Drawing, Component, Issue Description, Correction Applied, Corrected By, Date
   - Registrar todas las correcciones para trazabilidad

### Entregables

1. **Paquete completo de reportes:**
   - Line List (Excel + PDF)
   - Equipment List (Excel)
   - Valve List con Summary (Excel)
   - Instrument Index (Excel)
   - I/O List (Excel)
   - Todos con formato profesional y portadas

2. **Reportes de validación:**
   - Validation Report consolidado (antes de correcciones)
   - Validation Report final (después de correcciones)
   - Log de correcciones aplicadas

3. **Análisis adicionales en Excel:**
   - Pivot tables de distribución (tamaños, specs, tipos)
   - Gráficos de visualización
   - Columnas calculadas (clasificaciones, categorías)

4. **Presentación ejecutiva:**
   - PowerPoint con highlights de reportes
   - Estadísticas del proyecto (cantidad de líneas, equipos, válvulas, instrumentos)
   - Status de validación (X% completitud, Y errores corregidos)
   - Ready for 60% review meeting

### Criterios de evaluación (100 puntos)

- **Generación de reportes (40 puntos):**
  - Line List completa con todas las columnas requeridas (10 pts)
  - Reportes especializados generados correctamente (15 pts)
  - Formato profesional y organización clara (10 pts)
  - Análisis adicionales (pivot tables, gráficos) (5 pts)

- **Validaciones (30 puntos):**
  - Todas las validaciones ejecutadas (10 pts)
  - Errores identificados y documentados (10 pts)
  - Priorización correcta (Critical vs. Warning) (10 pts)

- **Corrección de errores (20 puntos):**
  - Errores críticos corregidos (15 pts)
  - Re-validación ejecutada mostrando mejora (5 pts)

- **Documentación (10 puntos):**
  - Log de correcciones completo (5 pts)
  - Presentación ejecutiva profesional (5 pts)

---

## Ejercicio 9: Sincronización P&ID a modelo 3D

**Basado en:** Lección 10 (Validación de datos y conexión P&ID a 3D)

**Duración:** 60 minutos

**Nivel de dificultad:** Avanzado

### Escenario

Ha completado el diseño P&ID de la sección de destilación de una refinería (Área 30). Los P&IDs están validados y aprobados para IFC (Issued For Construction). Ahora debe sincronizar los P&IDs con el modelo 3D para que el equipo de diseño de tuberías inicie el routing detallado. Posteriormente, después de que 3D detecta problemas de routing, debe aplicar cambios bidireccionales.

**Componentes del sistema:**
- Columna de destilación: C-301
- Reboiler: HX-305
- Condensador: HX-310
- Reflux drum: D-315
- Bombas de reflujo: P-320A/B
- 18 líneas de proceso (feeds, products, reflux, reboiler, condensador)
- 35 válvulas
- 22 instrumentos

### Objetivos del ejercicio

- Validar completamente P&IDs antes de sincronización
- Ejecutar sincronización inicial P&ID→3D
- Verificar objetos creados en modelo 3D
- Implementar cambios bidireccionales (3D→P&ID)
- Detectar y resolver discrepancias P&ID vs. 3D
- Mantener trazabilidad bidireccional

### Pasos detallados

**Parte A: Pre-validación completa antes de sincronización (10 minutos)**

1. **Ejecutar validación de conectividad:**
   - Comando: `PNPVALIDATECONNECTIVITY`
   - Scope: Drawings del Área 30 (P&ID-3001, P&ID-3002, P&ID-3003)
   - Level: Comprehensive
   - **Resultado esperado:** 0 errores críticos
   - Si hay errores: DETENER y corregir antes de proceder

2. **Ejecutar validación de completitud:**
   - Comando: `PNPCHECKCOMPLETENESS`
   - **Verificar propiedades REQUERIDAS para sincronización:**
     - **Líneas:** Line Number, Service, Size, Specification
     - **Equipos:** TAG, Class/SubClass, Nozzle Definitions
     - **Válvulas:** TAG, Type, Size, Line Number
     - **Instrumentos:** TAG, Function
   - **Resultado esperado:** 100% completitud en propiedades requeridas
   - Si datos faltantes: completar usando Data Manager

3. **Verificar configuración de Project:**
   - **Project Setup > P&ID-3D Synchronization**
   - Verificar **Class Mapping** configurado:
     - PnPLine → PipeRun
     - PnPPump → Equipment (Type=Pump)
     - PnPHeatExchanger → Equipment (Type=HeatExchanger)
     - PnPValve → Valve
     - PnPInstrument → Instrument
   - Verificar **Property Mapping** para cada clase:
     - Line: PnP_LineNumber → PipeRun.LineNumber, PnP_Service → PipeRun.Service, etc.
   - **Conflict Resolution:** P&ID takes precedence (inicial sync)

4. **Crear backup:**
   - Antes de sincronizar, crear backup completo:
   - Backup de P&IDs: copiar carpeta `P&ID\` a `P&ID_Backup_PreSync_20250124\`
   - Backup de modelo 3D (si existe): copiar `Model\` a `Model_Backup_PreSync_20250124\`
   - Seguridad: si sync falla catastróficamente, puede revertir

**Parte B: Sincronización inicial P&ID→3D (15 minutos)**

1. **Ejecutar sincronización:**
   - Comando: `PNPSYNCTO3D`
   - **Scope:** Selected Drawings: P&ID-3001, P&ID-3002, P&ID-3003 (Área 30 completa)
   - **Mode:** P&ID to 3D (one-way inicial)
   - **Options:**
     - ☑ Create 3D objects for P&ID components
     - ☐ Delete 3D objects not in P&ID (NO marcar en inicial sync)
     - ☑ Generate sync report
   - **Preview Changes:**
     - Click "Preview" para ver qué se creará
     - Debe mostrar:
       ```
       Objects to CREATE in 3D:
         Lines: 18
         Equipment: 5 (C-301, HX-305, HX-310, D-315, P-320A/B)
         Valves: 35
         Instruments: 22
         Total: 80 objects

       Objects to UPDATE: 0 (initial sync)
       Objects to DELETE: 0
       ```
   - Si números parecen incorrectos: revisar scope y P&IDs

2. **Ejecutar sincronización:**
   - Click **Execute**
   - Progress bar muestra avance
   - Tiempo estimado: 2-4 minutos para 80 objetos
   - **No interrumpir durante sincronización**

3. **Revisar Sync Report:**
   - Al completar, se genera: `SyncReport_PIDto3D_Area30_20250124.xlsx`
   - **Sheet "Summary":**
     ```
     Synchronization Summary:
       Date: 2025-01-24 14:35:22
       Direction: P&ID → 3D
       Scope: Area 30 (3 drawings)

       Results:
         Created: 80 objects
         Updated: 0
         Failed: 0
         Warnings: 3

       Status: SUCCESS
     ```
   - **Sheet "Created Objects":**
     - Lista de todos los objetos creados con P&ID reference y 3D GUID
   - **Sheet "Warnings":**
     - Revisar warnings (ej: "Piperun 4-HC-3015-A1 created without geometry - routing required")
     - Warnings son normales en inicial sync (objetos creados pero sin ubicación física aún)
   - **Sheet "Failed" (si aplicable):**
     - Si algún objeto falló creación, investigar razón (ej: spec no existe en catálogo 3D)

**Parte C: Verificación en modelo 3D (10 minutos)**

1. **Abrir modelo 3D:**
   - Abra archivo 3D del proyecto: `Model\Distillation_Unit_Area30.dwg`
   - Vista inicial: modelo probablemente vacío o con objetos en origen (0,0,0)

2. **Verificar objetos en Data Manager 3D:**
   - Comando: `DATAMANAGER` (en 3D)
   - Filter: Service = "Distillation" o Area = "30"
   - Debe mostrar:
     - **Piperuns:** 18 líneas con Line Numbers correctos (4-HC-3015-A1, etc.)
     - **Equipment:** 5 equipos con TAGs correctos (C-301, HX-305, etc.)
     - **Valves:** 35 válvulas
     - **Instruments:** 22 instrumentos
   - Para cada objeto, verificar propiedades heredadas de P&ID:
     - Seleccione piperun en tabla
     - Properties panel: verificar LineNumber, Service, Size, Spec correctos

3. **Verificar trazabilidad bidireccional:**
   - **Desde P&ID a 3D:**
     - Abra P&ID-3001
     - Seleccione línea de proceso (ej: 4"-HC-3015-A1)
     - Click derecho > **Locate in 3D Model**
     - Plant 3D: abre modelo 3D, selecciona piperun correspondiente, hace zoom
   - **Desde 3D a P&ID:**
     - En modelo 3D, seleccione piperun
     - Click derecho > **Locate in P&ID**
     - Plant 3D: abre dibujo P&ID correcto, selecciona línea, hace zoom
   - **Trazabilidad exitosa:** navegación funciona en ambas direcciones

4. **Entender estado inicial de 3D:**
   - **Piperuns:** creados pero sin routing (geometría placeholder en origen)
   - **Equipment:** creados en posiciones default (0,0,0) esperando layout
   - **Válvulas:** vinculadas a piperuns pero posición pending routing
   - **Instrumentos:** creados con propiedades pero ubicación pending
   - **Esto es normal:** modelo 3D inicial es "esqueleto" esperando diseño físico detallado

**Parte D: Layout 3D y detección de problemas (10 minutos)**

1. **Simular layout de equipos principales:**
   - **Columna C-301:**
     - Ubicación: X=5000, Y=5000, Z=0 (ground level)
     - Altura: 30000 mm (30 metros)
     - Orientación: vertical
   - **Reboiler HX-305:**
     - Ubicación: X=8000, Y=5000, Z=0
     - Orientación: horizontal
   - **Condensador HX-310:**
     - Ubicación: X=2000, Y=5000, Z=28000 (elevación alta, tope de columna)
     - Orientación: horizontal
   - **Reflux Drum D-315:**
     - Ubicación: X=2000, Y=7000, Z=26000 (debajo de condensador)
     - Orientación: horizontal
   - **Bombas P-320A/B:**
     - Ubicación: X=2000, Y=8000, Z=0 (ground, debajo de drum)
     - Spacing: 2000 mm entre bombas

2. **Simular routing preliminar:**
   - Use herramienta de auto-routing preliminar (si disponible)
   - O dibuje routing manual básico para 2-3 piperuns críticos:
     - **Línea de feed:** de header externo a entrada de columna C-301 (N1)
     - **Línea de tope:** de salida tope C-301 (N5) a condensador HX-310
     - **Línea de reflujo:** de reflux drum D-315 a bomba P-320A

3. **Detectar problema de routing (simulado):**
   - **Problema:** Routing de línea de tope (C-301 salida a HX-310) muestra headloss excesivo
   - **Análisis hidráulico:** headloss = 1.5 bar, pero presión disponible = 1.0 bar
   - **Causa:** línea 2" (DN50) es demasiado pequeña para caudal de 80 m³/h
   - **Solución:** aumentar a 3" (DN80)
   - **Impacto:** cambio mayor, afecta P&ID, especificación de válvulas, equipos
   - **Decisión:** requiere Engineering Change Notice (ECN) y actualizar P&ID

**Parte E: Cambio bidireccional 3D→P&ID (10 minutos)**

1. **Documentar cambio requerido:**
   - Crear ECN (Engineering Change Notice):
     ```
     ECN-105: Increase size of overhead vapor line

     Current: Line 2"-HC-3020-A1, Size DN50
     Proposed: Change to Size DN80 (3")

     Reason: Hydraulic calculation shows headloss 1.5 bar with DN50,
             exceeds available pressure drop 1.0 bar.
             DN80 reduces headloss to 0.6 bar, acceptable.

     Impact:
       - Update P&ID line size
       - Update connected valves (V-3025, FCV-3028) to DN80
       - Update spec if needed (verify DN80 available in current spec)
       - Re-route piperun in 3D with larger diameter

     Approval: Process Engineer [signature], Project Manager [signature]
     ```

2. **Aplicar cambio en 3D:**
   - En modelo 3D, seleccione piperun: `2"-HC-3020-A1`
   - Properties: cambiar Size de DN50 a DN80
   - Guardar cambio

3. **Sincronización 3D→P&ID:**
   - Comando: `PNPSYNCFROMPID` (sincronización inversa)
   - O usar: `PNPSYNCBIDIRECTIONAL` (bidireccional inteligente)
   - **Scope:** Selected components: piperun 2"-HC-3020-A1 (ahora 3"-HC-3020-A1)
   - **Direction:** 3D to P&ID
   - **Conflict resolution:** 3D takes precedence (cambio intencional en 3D)
   - **Preview:**
     ```
     Changes to apply to P&ID:
       Line 2"-HC-3020-A1:
         Property: Size
         P&ID Value: DN50 (2")
         3D Value: DN80 (3")
         Action: Update P&ID to match 3D
     ```
   - **Execute**

4. **Verificar actualización en P&ID:**
   - Abra P&ID-3002 (donde está línea 3020)
   - Seleccione línea
   - Properties: Size debe mostrar ahora DN80 (3")
   - Texto de Line Number debe actualizarse: `3"-HC-3020-A1` (prefijo cambió de 2" a 3")
   - **Nota:** válvulas en la línea también deben actualizarse a DN80 manualmente si no se actualizaron automáticamente

5. **Documentar cambio en P&ID:**
   - Agregue nota en P&ID: "Line size increased to 3" per ECN-105 (hydraulic calculation)"
   - Agregue cloud/revision symbol alrededor de línea modificada
   - Update drawing revision: de Rev. B a Rev. C
   - Update revision table: "Rev C: Increased line 3020 size to 3\" per ECN-105"

**Parte F: Detección y resolución de discrepancias (5 minutos)**

1. **Ejecutar comparación P&ID vs. 3D:**
   - Comando: `PNPCOMPARE3D`
   - Scope: Area 30 complete
   - **Genera reporte de discrepancias**

2. **Revisar reporte de discrepancias:**
   - **Sheet "Summary":**
     ```
     P&ID vs. 3D Comparison:
       Components in P&ID: 80
       Components in 3D: 82
       Matched: 78
       In P&ID only: 2
       In 3D only: 4
       Property Discrepancies: 3
     ```
   - **In P&ID only (componentes en P&ID sin equivalente 3D):**
     ```
     1. Valve V-3045: en P&ID-3003, no encontrado en 3D
        Reason: posiblemente no sincronizado en inicial sync (error)
        Action: Sync P&ID→3D para crear

     2. Instrument FT-3201: en P&ID-3002, no en 3D
        Reason: agregado a P&ID después de inicial sync
        Action: Sync P&ID→3D para crear
     ```
   - **In 3D only (componentes en 3D sin equivalente P&ID):**
     ```
     1. Valve V-3048: en 3D model, no en P&ID
        Reason: válvula de aislamiento agregada por diseñador 3D para mantenimiento
        Action: Determine si debe documentarse en P&ID (válvulas mayores sí, menores no)

     2-4. Válvulas V-3049, V-3050, V-3051: válvulas de venteo y drenaje agregadas en 3D
        Reason: detail valves no mostradas en P&ID esquemático
        Action: No requiere actualizar P&ID (aceptable)
     ```
   - **Property Discrepancies (propiedades diferentes):**
     ```
     1. Line 3"-HC-3020-A1:
        Property: Size
        P&ID: DN80 (3") ← actualizado
        3D: DN80 (3")
        Status: RESOLVED (era discrepancia, ahora sincronizado)

     2. Pump P-320A:
        Property: Service
        P&ID: "Reflux"
        3D: "Naphtha Reflux"
        Reason: 3D tiene descripción más específica
        Action: Determinar cuál es correcto, sincronizar

     3. Valve FCV-3028:
        Property: Size
        P&ID: DN50 (2") ← NO actualizado aún
        3D: DN80 (3") ← actualizado para coincidir con línea
        Status: DISCREPANCY - update P&ID to DN80
     ```

3. **Resolver discrepancias:**
   - **V-3045 y FT-3201 (en P&ID only):**
     - Sync P&ID→3D para crear objetos faltantes en 3D
   - **V-3048 (en 3D only):**
     - Revisar con diseñador 3D: ¿es válvula mayor que debe estar en P&ID?
     - Si sí: agregar a P&ID y sync
     - Si no (válvula de detalle): marcar en 3D con property "DetailValve=Yes, NotInPID=Yes"
   - **Pump P-320A service discrepancy:**
     - Revisar con proceso: ¿cuál descripción es correcta?
     - Actualizar en fuente correcta y sync
   - **FCV-3028 size discrepancy:**
     - Actualizar P&ID: cambiar válvula a DN80 para coincidir con línea
     - Re-sync para confirmar

4. **Re-ejecutar comparación:**
   - Después de resolver discrepancias, re-ejecutar `PNPCOMPARE3D`
   - **Objetivo:** 0 discrepancias críticas
   - Resultado esperado:
     ```
     Matched: 80
     In P&ID only: 0
     In 3D only: 3 (detail valves, marked as acceptable)
     Property Discrepancies: 0

     Status: P&ID and 3D are SYNCHRONIZED
     ```

### Entregables

1. **Reportes de sincronización:**
   - Sync Report inicial P&ID→3D
   - Sync Report cambio 3D→P&ID (ECN-105)
   - Comparison Report (antes y después de resolver discrepancias)

2. **P&IDs actualizados:**
   - P&ID-3002 con línea 3020 actualizada a 3" (Rev. C)
   - Notas de cambios documentadas
   - Revision clouds en elementos modificados

3. **Modelo 3D sincronizado:**
   - Objetos creados desde P&ID (80 componentes)
   - Layout preliminar de equipos principales
   - Routing preliminar de líneas críticas
   - Propiedades correctas heredadas de P&ID

4. **Documentación de cambios:**
   - ECN-105 completo (razón, impacto, aprobaciones)
   - Log de discrepancias resueltas
   - Trazabilidad bidireccional validada

### Criterios de evaluación (100 puntos)

- **Pre-validación (15 puntos):**
  - Validaciones completas ejecutadas (5 pts)
  - 0 errores críticos antes de sync (5 pts)
  - Backup creado (5 pts)

- **Sincronización inicial P&ID→3D (25 puntos):**
  - Sincronización exitosa (10 pts)
  - Todos los objetos creados correctamente (10 pts)
  - Sync report completo y revisado (5 pts)

- **Trazabilidad bidireccional (15 puntos):**
  - Locate P&ID→3D funciona (5 pts)
  - Locate 3D→P&ID funciona (5 pts)
  - Propiedades correctamente vinculadas (5 pts)

- **Cambio bidireccional 3D→P&ID (25 puntos):**
  - ECN documentado correctamente (5 pts)
  - Cambio aplicado en 3D (5 pts)
  - Sincronización 3D→P&ID exitosa (10 pts)
  - P&ID actualizado correctamente (5 pts)

- **Resolución de discrepancias (20 puntos):**
  - Discrepancias detectadas con PNPCOMPARE3D (5 pts)
  - Discrepancias clasificadas correctamente (5 pts)
  - Resoluciones aplicadas apropiadamente (5 pts)
  - Re-comparación muestra sincronización (5 pts)

---

## Ejercicio 10: Proyecto integrado completo - Planta de producción química

**Basado en:** Todas las lecciones del Módulo 2 (integración completa)

**Duración:** 120 minutos (2 horas)

**Nivel de dificultad:** Experto

### Escenario

Usted es el líder de P&ID de un proyecto greenfield: planta de producción de ácido acético con capacidad 100,000 ton/año. Debe configurar el proyecto desde cero, desarrollar P&IDs completos para área de reacción, implementar instrumentación según ISA S5.1, generar documentación completa, y sincronizar con modelo 3D. El cliente es una empresa farmacéutica con estándares estrictos de calidad y documentación.

**Alcance del proyecto - Área 20: Sección de Reacción**

**Equipos principales:**
- **R-201:** Reactor principal (tanque agitado, 10,000 L, jacket para calentamiento/enfriamiento)
- **HX-205:** Intercambiador de calor feed preheater
- **TK-210:** Tanque de alimentación de reactivo A (5,000 L)
- **TK-211:** Tanque de alimentación de reactivo B (3,000 L)
- **P-215A/B:** Bombas dosificadoras de reactivo A (duty/standby)
- **P-216A/B:** Bombas dosificadoras de reactivo B (duty/standby)
- **P-220:** Bomba de descarga de producto
- **V-225:** Separador gas-líquido (venteo de reacción)

**Servicios de utilidades:**
- Vapor 6 bar para calentamiento
- Agua de enfriamiento para cooling
- Nitrógeno para inertización
- Aire de instrumentos

**Sistemas de control:**
- Control de temperatura reactor (split-range: vapor/agua)
- Control de flujo de reactivos A y B (ratio control 2:1)
- Control de nivel reactor
- Control de presión reactor (con PSV)
- Interlocks de seguridad

### Objetivos del ejercicio integrado

Este ejercicio integra TODAS las competencias del Módulo 2:
- Configuración completa de proyecto Plant 3D P&ID
- Creación de símbolos personalizados
- Configuración de Line Groups para múltiples servicios
- Diseño de P&IDs con topología compleja
- Implementación de instrumentación ISA S5.1 completa
- Configuración de lazos de control avanzados (split-range, ratio)
- Generación de reportes completos (Line List, Equipment, Valve, Instrument Index)
- Validación exhaustiva (conectividad, propiedades, numeración)
- Sincronización P&ID a 3D
- Manejo de cambios bidireccionales
- Documentación profesional completa

### Pasos detallados

**Fase 1: Configuración de proyecto (15 minutos)**

1. **Crear nuevo proyecto Plant 3D:**
   - Nombre: `Acetic_Acid_Plant_100kt`
   - Client: `PharmaChem Industries`
   - Project Number: `PA-2025-001`
   - Location: `[YourComputer]\Projects\AceticAcid\`

2. **Configurar propiedades de proyecto:**
   - Plant Code: `PA` (Planta de Ácido Acético)
   - Units: Metric (mm, bar, °C, kg/h)
   - Drawing Standards: ISO 10628 / ISA S5.1
   - Piping Code: ASME B31.3 (Process Piping)

3. **Definir áreas de planta:**
   - Area 10: Recepción y almacenamiento de materias primas
   - **Area 20: Sección de Reacción** (foco de este ejercicio)
   - Area 30: Separación y purificación
   - Area 40: Almacenamiento de producto
   - Area 50: Utilidades

4. **Configurar especificaciones de tubería (Piping Specs):**
   - **CS-150-A1:** Carbon Steel, 150#, ASME B16.5, para servicios generales <100°C
   - **SS316-300-B1:** Stainless Steel 316L, 300#, para ácido acético y servicios corrosivos
   - **ST-300-C1:** Stainless Steel 304, 300#, para vapor 6 bar
   - **CW-150-A1:** Carbon Steel, 150#, para agua de enfriamiento

5. **Crear plantilla de dibujo P&ID:**
   - Formato: ISO A1 (594mm × 841mm)
   - Title block personalizado con logo cliente
   - Layers: P&ID-Lines, P&ID-Equipment, P&ID-Valves, P&ID-Instruments, P&ID-Notes
   - Escalas de texto: Title 7.0, Main 3.5, Notes 2.5

**Fase 2: Configuración de símbolos y Line Groups (20 minutos)**

1. **Crear/configurar símbolos personalizados específicos:**
   - **Reactor agitado con jacket:** símbolo showing vessel + agitator + jacket coil
   - **Bomba dosificadora:** símbolo distinto de bombas centrífugas estándar
   - **Separador gas-líquido:** vessel horizontal con outlet top (gas) y bottom (liquid)

2. **Configurar Line Groups:**

   **Process lines:**
   - Name: `Process_Acetic_Acid`
   - Prefix: `AC-20-` (Acetic Acid, Area 20)
   - Color: Amarillo (color 2)
   - Spec: SS316-300-B1
   - Service: "Acetic Acid"
   - Insulation: Calcium Silicate 50mm (alta temperatura)

   - Name: `Process_Reactant_A`
   - Prefix: `RA-20-`
   - Spec: SS316-300-B1
   - Service: "Reactant A"

   - Name: `Process_Reactant_B`
   - Prefix: `RB-20-`
   - Spec: SS316-300-B1
   - Service: "Reactant B"

   **Utility lines:**
   - Name: `Steam_6bar`
   - Prefix: `ST-20-`
   - Color: Rojo
   - Spec: ST-300-C1
   - Service: "Steam 6 bar"
   - Insulation: Yes

   - Name: `Cooling_Water`
   - Prefix: `CW-20-`
   - Color: Azul
   - Spec: CW-150-A1
   - Service: "Cooling Water"

   - Name: `Nitrogen`
   - Prefix: `N2-20-`
   - Color: Gris
   - Spec: CS-150-A1
   - Service: "Nitrogen"

   - Name: `Instrument_Air`
   - Prefix: `IA-20-`
   - Spec: CS-150-A1
   - Service: "Instrument Air"

3. **Configurar esquema de numeración de instrumentos:**
   - Format: `{PLANT}-{AREA}-{PREFIX}{SEQUENCE}`
   - Ejemplo: `PA-20-FIC-001`
   - Configure para todos los tipos: FT, PT, TT, LT, FIC, PIC, TIC, LIC, etc.

**Fase 3: Diseño de P&IDs (40 minutos)**

1. **P&ID-2001: Feed and Reaction System**

   **Equipos:**
   - TK-210 (Reactant A tank): superior izquierda
   - TK-211 (Reactant B tank): superior derecha
   - P-215A/B (Pumps A): debajo de TK-210
   - P-216A/B (Pumps B): debajo de TK-211
   - HX-205 (Preheater): centro, entre pumps y reactor
   - R-201 (Reactor): centro-derecha
   - V-225 (Gas-Liquid Separator): superior derecha de reactor

   **Líneas de proceso principales:**
   - Reactant A: TK-210 → P-215A → HX-205 → R-201 (Line: RA-20-001)
   - Reactant B: TK-211 → P-216A → HX-205 → R-201 (Line: RB-20-002)
   - Product: R-201 bottom → P-220 → off-page "TO SEPARATION" (Line: AC-20-003)
   - Vent Gas: R-201 top → V-225 → off-page "TO VENT HEADER" (Line: VG-20-004)

   **Válvulas de aislamiento:**
   - Cada equipo: válvulas de aislamiento en succión y descarga de bombas
   - Bypass lines en bombas duty/standby con válvulas de 3 vías

   **Instrumentación de flujo:**
   - **FE-2001, FT-2001, FIC-2001, FCV-2001:** Control de flujo Reactant A
     - FE: placa orificio en línea RA-20-001
     - FT: transmisor 4-20mA HART
     - FIC: controlador en DCS
     - FCV: válvula control neumática Fail Close, en línea RA-20-001
   - **FE-2002, FT-2002, FFIC-2002, FCV-2002:** Control de flujo Reactant B (ratio to A)
     - FFIC = Flow Ratio Indicator Controller (calcula ratio vs. FT-2001)
     - FY-2002: Computing Relay (calcula setpoint de FFIC basado en FIC-2001)
     - Ratio: 2:1 (A:B)

2. **P&ID-2002: Reactor Temperature and Pressure Control**

   **Sistema de temperatura (split-range):**
   - **TE-2301, TT-2301:** Temperatura reactor (termopar + transmisor)
   - **TIC-2301:** Temperature Indicator Controller en DCS
   - **TY-2301:** Computing Relay para split-range
   - **TCV-2301A:** Válvula control vapor (heating), 0-50% output, Fail Close
   - **TCV-2301B:** Válvula control agua (cooling), 50-100% output, Fail Close
   - **Líneas de utilities:**
     - Steam: header → TCV-2301A → Reactor jacket inlet (Line: ST-20-010)
     - Condensate: Reactor jacket outlet → steam trap → return header (Line: CN-20-011)
     - CW: header → TCV-2301B → Reactor jacket inlet (Line: CW-20-012)
     - CW return: Reactor jacket outlet → return header (Line: CW-20-013)

   **Alarmas de temperatura:**
   - **TAH-2302:** Temp Alarm High, 180°C, High priority
   - **TAHH-2303:** Temp Alarm High High, 190°C, Critical priority + Interlock

   **Sistema de presión:**
   - **PT-2401:** Pressure Transmitter reactor
   - **PIC-2401:** Pressure Indicator Controller (controls back pressure via vent)
   - **PCV-2401:** Pressure Control Valve en línea de venteo (modula back pressure)
   - **PSV-2405:** Pressure Safety Valve, set 8 bar, relieving to flare
   - **PAH-2402:** Pressure Alarm High, 7 bar

3. **P&ID-2003: Reactor Level and Agitation**

   **Sistema de nivel:**
   - **LE-2501, LT-2501:** Level Element (radar) + Transmitter
   - **LIC-2501:** Level Indicator Controller
   - **LCV-2501:** Level Control Valve en descarga de producto (Line: AC-20-003)
   - **LG-2502:** Level Glass (visor local) para operadores
   - **LAH-2502:** Level Alarm High, 85%
   - **LAL-2503:** Level Alarm Low, 15%
   - **LAHH-2504:** Level Alarm High High, 95%, Interlock trip

   **Sistema de agitación:**
   - **Agitator:** motor eléctrico + reductor + agitador
   - **M-201:** Motor del agitador, 15 kW
   - **SIC-2601:** Speed Indicator Controller (control de velocidad)
   - **Interlock:** si LAHH-2504 activa → detener agitador M-201 (prevenir overflow por vórtex)

   **Sistema de inertización:**
   - **Nitrogen line:** header N2 → PCV-2701 → Reactor top (Line: N2-20-020)
   - **PCV-2701:** Pressure Control Valve N2 (mantiene blanket de N2)
   - **Purge inicial:** antes de startup, purgar reactor con N2 para eliminar O2 (procedural, anotado)

**Fase 4: Generación de reportes (15 minutos)**

1. **Line List completa:**
   - Scope: All drawings (P&ID-2001, 2002, 2003)
   - Group by: Service
   - Debe incluir:
     - Process lines: AC-20-xxx, RA-20-xxx, RB-20-xxx
     - Utility lines: ST-20-xxx, CW-20-xxx, N2-20-xxx, IA-20-xxx
   - Output: `LineList_Area20_IFC.xlsx`

2. **Equipment List:**
   - Equipos: R-201, HX-205, TK-210, TK-211, P-215A/B, P-216A/B, P-220, V-225
   - Properties: TAG, Description, Type, Service, Volume/Capacity, Design P/T, Material
   - Output: `EquipmentList_Area20_IFC.xlsx`

3. **Valve List:**
   - Todas las válvulas: aislamiento manual, control, safety
   - Include: TAG, Type, Line Number, Size, Actuator, Fail Position
   - Valve Summary: conteo por tipo y tamaño
   - Output: `ValveList_Area20_IFC.xlsx`

4. **Instrument Index:**
   - Todos los instrumentos: elementos, transmisores, controladores, alarmas, válvulas control
   - Group by: Measured Variable (Flow, Pressure, Temperature, Level, Speed)
   - Include: TAG, Description, Loop Number, Range, Signal Type, Location
   - Output: `InstrumentIndex_Area20_IFC.xlsx`

5. **Loop Diagrams:**
   - Generar loop diagrams para lazos críticos:
     - Loop 2001: Flow control Reactant A
     - Loop 2002: Flow ratio control Reactant B
     - Loop 2301: Temperature split-range control
     - Loop 2401: Pressure control
     - Loop 2501: Level control
   - Output: `LoopDiagrams_Area20_IFC.pdf`

**Fase 5: Validación completa (10 minutos)**

1. **Validación de conectividad:**
   - Ejecutar `PNPVALIDATECONNECTIVITY`
   - Scope: All Area 20 drawings
   - Level: Comprehensive
   - **Target:** 0 critical errors
   - Si errores: corregir inmediatamente

2. **Validación de completitud de datos:**
   - Ejecutar `PNPCHECKCOMPLETENESS`
   - Verificar 100% completitud en:
     - Lines: Line Number, Service, Size, Spec
     - Equipment: TAG, Description, Class, Service
     - Valves: TAG, Type, Size, Line Number
     - Instruments: TAG, Function, Range
   - Completar datos faltantes

3. **Validación de numeración:**
   - Ejecutar `PNPVALIDATENUMBERING`
   - Verificar:
     - No TAGs duplicados
     - Formato correcto (PA-20-XXX-###)
     - Loop numbers consistentes
   - Corregir discrepancias

4. **Validación de propiedades:**
   - Ejecutar `PNPVALIDATEPROPERTIES`
   - Verificar coherencia lógica:
     - Design P > Operating P
     - Design T > Operating T
     - Materiales compatibles con servicios
   - Corregir errores

5. **Reporte consolidado de validación:**
   - Ejecutar `PNPVALIDATIONREPORT`
   - **Target:** Critical Errors = 0, Errors < 5, Warnings < 20
   - Output: `ValidationReport_Area20_IFC.xlsx`

**Fase 6: Sincronización a 3D (15 minutos)**

1. **Pre-sync checklist:**
   - ☑ Validación completa ejecutada con 0 critical errors
   - ☑ Completitud de datos 100%
   - ☑ Class mapping configurado
   - ☑ Property mapping verificado
   - ☑ Backup de P&IDs creado

2. **Sincronización inicial P&ID→3D:**
   - Comando: `PNPSYNCTO3D`
   - Scope: Area 20 complete (3 drawings)
   - Mode: P&ID to 3D
   - Execute
   - **Resultado esperado:**
     - Lines: ~20 piperuns creados
     - Equipment: 8 equipos creados
     - Valves: ~40 válvulas creadas
     - Instruments: ~35 instrumentos creados
   - Revisar Sync Report: verificar success

3. **Verificación en modelo 3D:**
   - Abrir modelo 3D Area 20
   - Data Manager: verificar objetos creados
   - Verificar propiedades heredadas correctamente
   - Probar trazabilidad: Locate P&ID↔3D en ambas direcciones

4. **Simular cambio y sync bidireccional:**
   - **Cambio simulado:** aumentar tamaño línea RA-20-001 de DN50 a DN80 (cálculo hidráulico)
   - Aplicar en 3D
   - Ejecutar `PNPSYNCBIDIRECTIONAL`
   - Verificar P&ID se actualiza con nuevo tamaño
   - Documentar cambio con ECN

**Fase 7: Documentación final (5 minutos)**

1. **Compilar paquete de documentación:**
   - **Folder 1: P&ID Drawings**
     - P&ID-2001 Rev. A (PDF + DWG)
     - P&ID-2002 Rev. A (PDF + DWG)
     - P&ID-2003 Rev. A (PDF + DWG)
   - **Folder 2: Reports**
     - Line List (Excel + PDF)
     - Equipment List (Excel)
     - Valve List (Excel)
     - Instrument Index (Excel)
     - Loop Diagrams (PDF)
   - **Folder 3: Validation**
     - Validation Report Consolidated (Excel)
     - Sync Report P&ID→3D (Excel)
   - **Folder 4: Standards**
     - Symbol Catalog (PDF)
     - Line Group Standards (PDF)
     - Tagging Conventions (PDF)

2. **Crear Design Basis document:**
   - Resumen de filosofía de control
   - Interlocks de seguridad documentados
   - Matriz causa-efecto
   - Filosofía de numeración
   - Especificaciones de materiales

3. **Preparar presentación ejecutiva:**
   - PowerPoint con:
     - Overview del proyecto
     - Screenshots de P&IDs key
     - Estadísticas (X líneas, Y equipos, Z instrumentos)
     - Status de validación (100% complete, 0 critical errors)
     - Next steps (3D routing, detailed engineering)

### Entregables completos del proyecto integrado

1. **Proyecto Plant 3D completo:**
   - Configuración de proyecto
   - 3 dibujos P&ID profesionales y completos
   - Biblioteca de símbolos personalizada
   - Line Groups configurados

2. **P&IDs con instrumentación ISA S5.1:**
   - Reactor system con control completo
   - Lazos de control complejos (split-range, ratio)
   - Interlocks de seguridad documentados
   - Notas de proceso y operación

3. **Suite completa de reportes:**
   - Line List con análisis
   - Equipment List
   - Valve List con summary
   - Instrument Index completo
   - Loop Diagrams de lazos críticos

4. **Validación y QA/QC:**
   - Validation Report consolidado
   - 0 critical errors
   - Correcciones documentadas

5. **Sincronización P&ID-3D:**
   - Modelo 3D inicial creado desde P&IDs
   - Trazabilidad bidireccional funcional
   - Sync reports
   - Ejemplo de cambio bidireccional

6. **Documentación profesional:**
   - Paquete de documentos organizado
   - Design Basis document
   - Standards documentation
   - Presentación ejecutiva

### Criterios de evaluación (200 puntos totales)

**Configuración de proyecto (20 puntos):**
- Proyecto Plant 3D correctamente configurado (5 pts)
- Piping specs definidas apropiadamente (5 pts)
- Áreas definidas (5 pts)
- Plantilla de dibujo profesional (5 pts)

**Símbolos y Line Groups (20 puntos):**
- Símbolos personalizados funcionales (10 pts)
- Line Groups configurados para todos los servicios (10 pts)

**Diseño de P&IDs (60 puntos):**
- P&ID-2001 completo y correcto (15 pts)
- P&ID-2002 completo con control split-range (20 pts)
- P&ID-2003 completo con interlocks (15 pts)
- Layout profesional y legibilidad (10 pts)

**Instrumentación ISA S5.1 (30 puntos):**
- TAGs correctos según estándar (10 pts)
- Loop numbers consistentes (10 pts)
- Lazos complejos implementados correctamente (split-range, ratio) (10 pts)

**Reportes (20 puntos):**
- Line List completa (5 pts)
- Equipment, Valve, Instrument Lists (10 pts)
- Loop Diagrams (5 pts)

**Validación (20 puntos):**
- Todas las validaciones ejecutadas (10 pts)
- 0 critical errors alcanzado (10 pts)

**Sincronización P&ID-3D (20 puntos):**
- Sync inicial exitoso (10 pts)
- Trazabilidad bidireccional funcional (5 pts)
- Cambio bidireccional demostrado (5 pts)

**Documentación profesional (10 puntos):**
- Paquete de documentos completo y organizado (5 pts)
- Design Basis y Standards docs (5 pts)

---

## Conclusión del módulo de ejercicios

Estos 5 ejercicios prácticos cubren progresivamente todas las competencias del Módulo 2: P&ID en AutoCAD Plant 3D 2026:

- **Ejercicio 6:** Fundamentos de símbolos y configuración
- **Ejercicio 7:** Diseño de sistemas de control complejos
- **Ejercicio 8:** Generación y validación de reportes
- **Ejercicio 9:** Sincronización P&ID-3D
- **Ejercicio 10:** Proyecto integrado completo

Al completar estos ejercicios, habrá demostrado dominio completo de diseño P&ID profesional, desde configuración inicial hasta sincronización con modelo 3D, cumpliendo estándares internacionales (ISA S5.1, ASME B31.3, ISO 10628) y mejores prácticas de la industria.

**Total de tiempo de ejercicios:** ~5 horas
**Puntos totales disponibles:** 600 puntos

**Certificación de competencia:** Al lograr ≥480 puntos (80%), habrá alcanzado nivel de competencia profesional en diseño P&ID con AutoCAD Plant 3D 2026.
