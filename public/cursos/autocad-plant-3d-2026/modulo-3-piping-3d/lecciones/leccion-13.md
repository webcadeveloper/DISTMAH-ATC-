# Lección 13: Accesorios, Válvulas y Componentes Especiales

**Duración:** 60 minutos
**Nivel:** Intermedio-Avanzado
**Módulo:** 3 - Diseño de Tuberías 3D
**Prerequisitos:** Lecciones 11 y 12 completadas

---

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

1. Seleccionar y colocar accesorios de tubería (fittings) apropiados según el servicio y especificación: elbows, tees, reducers, caps
2. Insertar y configurar válvulas industriales de diferentes tipos: gate, globe, check, ball, butterfly
3. Configurar bridas (flanges) según estándares ASME B16.5 y métodos de conexión
4. Implementar componentes especiales en sistemas de proceso: strainers, flame arrestors, expansion joints, steam traps
5. Aplicar criterios de selección de componentes basados en condiciones de servicio, presión, temperatura y fluido
6. Configurar propiedades de componentes para generación precisa de Bill of Materials (BOM)
7. Optimizar selección de componentes para minimizar costos sin comprometer seguridad o funcionalidad

---

## Introducción

Los componentes de tubería - accesorios, válvulas, bridas y elementos especiales - constituyen típicamente el 30-40% del costo total de un sistema de tuberías en plantas industriales, superando significativamente el costo del tubo mismo. En un proyecto de refinería de mediana escala, un sistema de tuberías puede incluir miles de válvulas (desde $200 hasta $50,000 USD cada una), decenas de miles de accesorios (codos, tees, reducciones), y cientos de componentes especiales críticos para seguridad y operación.

La selección correcta de estos componentes no es una tarea trivial. Un diseñador de tuberías experimentado debe considerar múltiples factores: condiciones de proceso (presión, temperatura, fluido), códigos aplicables (ASME B31.3, API 600, API 598), consideraciones de mantenimiento, disponibilidad de materiales, lead times de fabricación, y restricciones presupuestarias.

AutoCAD Plant 3D 2026 integra bibliotecas extensas de componentes industriales conformes con estándares internacionales, permitiendo a los diseñadores seleccionar componentes apropiados directamente desde las especificaciones de tubería. El sistema asegura compatibilidad de ratings, materiales y conexiones, reduciendo errores que en campo pueden resultar en paros de planta costosos o, en el peor caso, incidentes de seguridad.

### Impacto Económico de la Selección de Componentes

En proyectos de plantas de proceso, la selección incorrecta de componentes puede resultar en:

**Sobre-especificación (Over-design):**
- Uso de válvulas de rating superior al necesario (+30-50% costo innecesario)
- Selección de materiales más costosos sin justificación técnica
- Componentes especiales donde componentes estándar son suficientes

**Sub-especificación (Under-design):**
- Fallas en servicio que requieren reemplazo de emergencia
- Paros de planta no planificados ($50,000-$500,000 USD por día en refinerías)
- Riesgos de seguridad y ambientales con consecuencias legales

**Estudios de la industria** muestran que el 15-20% de los componentes en plantas típicas están sobre-especificados, representando millones de dólares en costos evitables en proyectos grandes. Diseñadores que dominan la selección optimizada de componentes son altamente valorados, con posiciones de **Materials & Equipment Specialist** alcanzando salarios de $70,000-$90,000 USD en mercados desarrollados.

### Novedades en Component Management 2026

Plant 3D 2026 introduce mejoras significativas en manejo de componentes:

- **Enhanced Component Libraries:** Catálogos expandidos con componentes de fabricantes específicos
- **Intelligent Component Selection:** Sugerencias automáticas basadas en servicio y condiciones
- **Advanced BOM Configuration:** Control granular de cómo componentes aparecen en reportes de materiales
- **Component Substitution Rules:** Sistema de componentes alternos para optimización de costos
- **Integration with Procurement Systems:** Export directo a sistemas ERP para requisiciones

---

## 1. Accesorios de Tubería (Pipe Fittings)

Los fittings son componentes que permiten cambios de dirección, derivaciones, cambios de tamaño y terminaciones en sistemas de tuberías.

### 1.1 Codos (Elbows)

Los codos permiten cambios de dirección en sistemas de tuberías, siendo uno de los componentes más comunes en cualquier planta.

**Tipos de Codos:**

**A. Codos de 90 Grados:**

**Long Radius (LR) 90° Elbow:**
- Radio de curvatura: 1.5 × Diameter nominal (1.5D)
- Uso: Preferido en la mayoría de aplicaciones
- Ventaja: Menor pérdida de presión (~30% menos que short radius)
- Costo: ~15% más caro que short radius
- Aplicación típica: Líneas de proceso, servicios generales

**Short Radius (SR) 90° Elbow:**
- Radio de curvatura: 1.0 × Diameter nominal (1.0D)
- Uso: Espacios restringidos donde no cabe long radius
- Desventaja: Mayor pérdida de presión, mayor erosión
- Costo: Más económico
- Aplicación típica: Líneas de drenaje, espacios congestionados

**B. Codos de 45 Grados:**

**45° Long Radius Elbow:**
- Uso: Cambios de dirección graduales
- Ventaja: Menor pérdida de presión que 90°
- Aplicación: Líneas con limitaciones de pérdida de presión
- Combinación: 2 × 45° pueden reemplazar 1 × 90° con menor pérdida

**C. Codos de 180 Grados (Return Bends):**
- Uso: Serpentines, intercambiadores de calor, sistemas de calefacción
- Aplicación específica: Equipos de transferencia de calor

**Inserción de Codos en Plant 3D:**

Los codos generalmente se insertan automáticamente durante el routing, pero pueden insertarse manualmente:

**Método 1: Inserción Automática Durante Routing**
1. Durante comando `PLANT3DPIPE`, cambios de dirección insertan codos automáticamente
2. Tipo de codo determinado por pipe spec (LR vs SR)
3. Plant 3D selecciona ángulo apropiado (90°, 45°) según geometría

**Método 2: Inserción Manual**
1. Ribbon → Plant 3D tab → Piping panel → Elbow
2. Select pipe location donde insertar codo
3. Specify ángulo: 90°, 45°, custom
4. Plant 3D corta tubo e inserta codo con orientación correcta

**Método 3: Modificar Codo Existente**
1. Select codo en modelo
2. Right-click → Replace Component
3. Select tipo alterno (ej: cambiar SR a LR)
4. Plant 3D actualiza geometría

![Tipos de codos y sus aplicaciones en sistemas de proceso](../imagenes/leccion-13-elbow-types.png)

**Consideraciones de Selección:**

**Criterio 1: Pérdida de Presión**
- Líneas con pump limitado: Preferir LR elbows y 45° donde posible
- Cálculo: K-factor para LR 90° = 0.75, SR 90° = 1.0
- Impact: En línea de 100 metros con 10 codos, diferencia puede ser 5-10 psi

**Criterio 2: Erosión**
- Servicios erosivos (slurries, catalizador): LR mandatory
- High velocity gas (>30 m/s): LR recomendado
- Dos fases: LR para minimizar erosión en inner radius

**Criterio 3: Espacio Disponible**
- Espacios congestionados: SR puede ser necesario
- Pipe racks: Típicamente LR para uniformidad

### 1.2 Tees (Derivaciones en T)

Los tees permiten crear derivaciones en sistemas de tuberías, conectando tres tuberías en configuración T.

**Tipos de Tees:**

**A. Straight Tee (Tee Recto):**
- Configuración: Todas las conexiones del mismo tamaño nominal
- Ejemplo: 6" × 6" × 6" tee
- Uso: Derivación del mismo tamaño que línea principal
- Aplicación: Headers, distribución de fluidos

**B. Reducing Tee (Tee Reductor):**
- Configuración: Branch connection de menor tamaño que run
- Ejemplo: 8" × 8" × 4" reducing tee
- Uso: Derivación de menor tamaño (más común)
- Ventaja: Elimina necesidad de reducer separado

**Orientaciones de Tee:**

**Run:** Conexiones en línea recta (inlet y outlet principal)
**Branch:** Conexión perpendicular (derivación)

**Inserción de Tees en Plant 3D:**

**Método 1: Branch Durante Routing**
1. Durante routing, en punto de derivación: Right-click → Add Branch
2. Plant 3D inserta tee automáticamente
3. Continue routing en dirección de branch
4. Tipo de tee (straight vs reducing) según tamaño especificado

**Método 2: Branch en Línea Existente**
1. Select pipe existente en punto de derivación
2. Ribbon → Plant 3D tab → Piping panel → Branch
3. Specify tamaño de branch line
4. Specify dirección de branch (up, down, left, right)
5. Plant 3D inserta tee apropiado (reducing si tamaños diferentes)

**Método 3: Insert Tee Component**
1. Ribbon → Piping panel → Insert Component → Tee
2. Select ubicación en pipe
3. Specify orientación de branch
4. Plant 3D corta pipe e inserta tee

![Configuración de tee en derivación de header a equipo](../imagenes/leccion-13-tee-branch-configuration.png)

**Consideraciones de Diseño con Tees:**

**Flow Direction en Tees:**
- **Combining flow:** Dos streams se combinan en uno (merge)
- **Dividing flow:** Un stream se divide en dos (split)
- **Impact:** Pérdidas de presión diferentes según configuración

**Reinforcement (Reforzamiento):**
En líneas de alta presión (>600 psig) o tamaños grandes (>12"), tees pueden requerir reforzamiento:
- **Welded reinforcement pad:** Refuerzo soldado alrededor de branch
- **Integrally reinforced tee:** Tee fabricado con espesor adicional
- **Weldolet/Threadolet:** Alternativas a tees para branches pequeños

**Alternativas a Tees para Small Branches:**

**Weldolet (Olet Fitting):**
- Uso: Branch pequeño desde línea grande (ej: 1" branch desde 10" line)
- Ventaja: Más compacto que tee, reforzamiento integral
- Costo: Más económico para branches pequeños
- Aplicación: Instrumentación, venteos, drains

**Threadolet:**
- Similar a weldolet pero con conexión roscada
- Uso: Branches muy pequeños (1/2", 3/4")
- Aplicación: Instrument taps, pequeños venteos

**Configuración en Plant 3D:**
1. Pipe spec puede definir reglas: "Use weldolet para branches < 2" desde line > 6""
2. Plant 3D aplica regla automáticamente durante branch insertion

### 1.3 Reducciones (Reducers)

Los reducers permiten transición entre tuberías de diferentes tamaños nominales.

**Tipos de Reducers:**

**A. Concentric Reducer:**
- Geometría: Centerlines concéntricos (mismo eje central)
- Forma: Cono simétrico
- Uso: Líneas de gas, vapor, líneas verticales
- Aplicación típica: Líneas donde mantener centerline es importante

![Reducer concéntrico en línea de vapor](../imagenes/leccion-13-concentric-reducer.png)

**B. Eccentric Reducer:**
- Geometría: Centerlines offset (un lado flat)
- Forma: Cono asimétrico con un lado plano
- Uso: Líneas de líquido horizontales
- Ventaja: Evita bolsas de gas (flat side up) o líquido (flat side down)

**Selección: Concentric vs Eccentric:**

**Usar Concentric Reducer:**
- Líneas de gas o vapor (no hay problema de bolsas)
- Líneas verticales (gravedad evita acumulación)
- Succión de bombas verticales (mantiene centerline)

**Usar Eccentric Reducer:**
- Líneas de líquido horizontales
- Flat side down: Drenaje completo, evita acumulación
- Flat side up: Evita bolsas de gas en líneas de líquido
- Succión de bombas horizontales: Flat side up para evitar aire en succión

**Inserción de Reducers en Plant 3D:**

**Método 1: Automático Durante Routing**
1. Durante routing, cambiar tamaño de pipe: Properties → Size
2. Plant 3D inserta reducer automáticamente
3. Tipo (concentric/eccentric) según pipe spec rules

**Método 2: Manual Insertion**
1. Select pipe en punto de cambio de tamaño
2. Ribbon → Piping panel → Insert Component → Reducer
3. Select tipo: Concentric o Eccentric
4. Si eccentric, specify orientación (flat side up/down)
5. Specify tamaño de salida

**Configuración de Orientación Eccentric:**
1. Select eccentric reducer
2. Properties palette → Orientation
3. Flat Side: Top, Bottom, Left, Right
4. Visual indicator muestra orientación en viewport

**Standards y Best Practices:**

**ASME B31.3 Requirements:**
- Reducer angle: Típicamente 30° máximo (included angle)
- Evitar reducción drástica en un solo reducer (ej: 12" a 4")
- Reducción gradual: 12" → 8" → 4" con reducers múltiples

**Ubicación de Reducers:**
- Upstream de válvulas de control: Ayuda a flow distribution
- Downstream de bombas: Después de check valve, no inmediatamente
- En sección de bombas: Eccentric reducer flat side up en succión horizontal

### 1.4 Caps y Terminaciones

Los caps y plugs proporcionan terminación hermética de tuberías.

**Tipos de Terminaciones:**

**A. Welded Cap:**
- Tipo: Cap soldado permanentemente
- Uso: Terminaciones permanentes de líneas
- Ventaja: Hermético, sin posibilidad de fuga
- Aplicación: Terminación de headers, líneas futuras

**B. Threaded Cap:**
- Tipo: Cap roscado removible
- Uso: Terminaciones temporales o acceso de mantenimiento
- Aplicación: Drains, venteos, cleanout ports

**C. Blind Flange:**
- Tipo: Brida ciega (sin orificio)
- Uso: Terminación bridada, removible para futuras conexiones
- Aplicación: Conexiones futuras, mantenimiento

**D. Bull Plug:**
- Tipo: Plug sólido roscado
- Uso: Similar a threaded cap pero para conexión roscada existente
- Aplicación: Terminación temporal de branches

**Inserción de Caps:**

1. Select terminación de pipe
2. Ribbon → Piping panel → End Cap
3. Plant 3D inserta cap apropiado según pipe spec
4. Tipo determinado por connection method (welded vs threaded)

---

## 2. Válvulas Industriales

Las válvulas controlan flujo de fluidos y son componentes críticos de seguridad y operación en plantas de proceso.

### 2.1 Válvulas de Compuerta (Gate Valves)

Las gate valves son válvulas de aislamiento on/off, no diseñadas para throttling (control de flujo).

**Características:**

- **Función:** Full open o full closed (no posiciones intermedias recomendadas)
- **Flujo:** Low pressure drop cuando fully open (obstrucción mínima)
- **Operación:** Lenta apertura/cierre (múltiples vueltas del volante)
- **Tamaños:** 1/2" hasta 60" o más
- **Presión:** 150# hasta 2500# ASME ratings

**Tipos de Gate Valves:**

**A. Wedge Gate Valve:**
- Diseño: Gate con forma de cuña que sella contra seats
- Uso: Servicios generales de líquido o gas
- Ventaja: Buen sellado bi-direccional

**B. Parallel Slide Gate Valve:**
- Diseño: Gate paralelo con dos discos
- Uso: Servicios con posibilidad de sedimentación
- Ventaja: Menos prone a atascamiento

**C. Knife Gate Valve:**
- Diseño: Blade delgado que corta a través del fluido
- Uso: Slurries, pulpas, servicios con sólidos
- Ventaja: Puede cortar sólidos, menor costo

**Aplicaciones Típicas:**

- Aislamiento de equipos para mantenimiento
- Aislamiento de secciones de planta
- Block valves en headers principales
- Válvulas de entrada/salida de tanques

**Selección de Gate Valves:**

**Criterios de Presión/Temperatura:**
- **150# rating:** Hasta 285 psig @ 100°F (servicios generales)
- **300# rating:** Hasta 740 psig @ 100°F
- **600# rating:** Hasta 1480 psig @ 100°F
- **Higher ratings:** 900#, 1500#, 2500# para alta presión

**Criterios de Servicio:**
- **Clean liquids/gases:** Wedge gate standard
- **Dirty service, slurries:** Knife gate
- **High cycling:** No recomendado (usar ball valve)

**Inserción en Plant 3D:**

1. Select pipe en ubicación deseada para válvula
2. Ribbon → Plant 3D tab → Piping panel → Insert Valve → Gate Valve
3. Cuadro de diálogo muestra gate valves disponibles en pipe spec
4. Select tamaño, rating, tipo (rising stem vs non-rising stem)
5. Specify orientación (stem up, down, horizontal)
6. Plant 3D inserta válvula con spacing apropiado

![Gate valve con actuador en línea de proceso](../imagenes/leccion-13-gate-valve-installation.png)

**Configuración de Propiedades:**

1. Select gate valve insertada
2. Properties palette muestra:
   - **Type:** Gate Valve
   - **Size:** 6" (ejemplo)
   - **Rating:** 150#
   - **Material:** Carbon Steel (según spec)
   - **End Connection:** Flanged WNRF
   - **Operator:** Handwheel, Gear Operator, Actuator (pneumatic, electric)
3. Modify según requisitos de diseño

**Operadores (Actuators):**

**Manual Operation:**
- **Handwheel:** Válvulas ≤ 6" típicamente
- **Gear Operator:** Válvulas > 6" o alta presión (torque alto)
- **Chain Wheel:** Válvulas elevadas difíciles de alcanzar

**Automated Operation:**
- **Pneumatic Actuator:** Más común, rápido, fail-safe options
- **Electric Actuator:** Cuando aire no disponible, mejor control
- **Hydraulic Actuator:** Válvulas muy grandes o alto torque

### 2.2 Válvulas de Globo (Globe Valves)

Las globe valves son válvulas de control diseñadas para throttling y regulación de flujo.

**Características:**

- **Función:** Throttling (control de flujo en posiciones intermedias)
- **Flujo:** High pressure drop (cambio de dirección interno)
- **Operación:** Control preciso de caudal
- **Diseño:** Plug o disc que se mueve perpendicularmente al flujo
- **Limitación:** No recomendada para on/off service (wear rápido)

**Tipos de Globe Valves:**

**A. Standard Globe Valve:**
- Uso: Control manual de flujo
- Aplicación: Bypass lines, flow control no crítico

**B. Angle Globe Valve:**
- Diseño: Inlet y outlet en 90° (configuración en ángulo)
- Ventaja: Menor pressure drop que globe recto
- Uso: Bottom-of-line drain valves

**C. Needle Valve:**
- Diseño: Stem tipo needle para control muy fino
- Uso: Instrument connections, sampling, muy low flow

**Aplicaciones Típicas:**

- Bypass lines alrededor de control valves
- Manual throttling de cooling water
- Pressure relief valve isolation
- Sample points

**Selección Globe vs Gate:**

| Criterio | Globe Valve | Gate Valve |
|----------|-------------|------------|
| **Función principal** | Throttling (control) | Isolation (on/off) |
| **Pressure drop** | High (S-path flow) | Low (straight-through) |
| **Costo** | Mayor | Menor |
| **Operación frecuente** | Adecuada | No recomendada |
| **Seat wear** | Moderado | Bajo (solo open/close) |

**Inserción en Plant 3D:**

Similar a gate valve:
1. Ribbon → Piping panel → Insert Valve → Globe Valve
2. Select desde spec-compliant valves
3. Configure orientación: Stem vertical typical

**Critical: Flow Direction**

Globe valves son direccionales - tienen flow direction definida:
- **Flow under seat:** Preferido (pressure ayuda a seat)
- **Flow over seat:** Menos común
- **Marking:** Arrow en body indica flow direction

**Configurar Flow Direction en Plant 3D:**
1. Select globe valve
2. Properties → Flow Direction: Forward/Reverse
3. Visual arrow indica dirección correcta en modelo

### 2.3 Válvulas de Retención (Check Valves)

Las check valves permiten flujo en una dirección solamente, cerrándose automáticamente para prevenir flujo reverso.

**Características:**

- **Función:** Automatic non-return valve (una dirección)
- **Operación:** Automática (sin actuador externo)
- **Aplicación crítica:** Protección de bombas contra backflow

**Tipos de Check Valves:**

**A. Swing Check Valve:**
- Diseño: Disc que pivotea en hinge
- Ventaja: Low pressure drop, bajo mantenimiento
- Desventaja: Water hammer en cierre rápido
- Uso: Líneas de proceso generales, discharge de bombas
- Instalación: Horizontal o vertical con flow upward

**B. Lift Check Valve:**
- Diseño: Disc que levanta verticalmente
- Ventaja: Positive sealing
- Desventaja: High pressure drop
- Uso: High pressure services
- Instalación: Solo horizontal (gravedad cierra valve)

**C. Tilting Disc Check Valve:**
- Diseño: Disc que tilts alrededor de eje central
- Ventaja: Menor pressure drop que swing, menos water hammer
- Uso: Large diameter lines (>8")
- Costo: Mayor que swing check

**D. Wafer Check Valve (Dual Plate):**
- Diseño: Dos placas con springs que cierran
- Ventaja: Muy compacto (wafer style entre bridas)
- Uso: Espacios reducidos
- Limitación: No full bore (obstrucción parcial)

**E. Ball Check Valve:**
- Diseño: Ball que sella contra seat
- Uso: Vertical lines con flow upward
- Aplicación: Discharge de bombas sumergibles

**Aplicaciones Críticas:**

**Pump Discharge:**
- **Mandatory:** Check valve inmediatamente después de bomba
- **Función:** Previene backflow que causaría reverse rotation y daño
- **Ubicación:** Entre bomba y block valve
- **Tipo:** Swing check (más común) o tilting disc (líneas grandes)

**Compressor Discharge:**
- Similar a pumps - previene reverse flow

**Parallel Pump/Compressor Systems:**
- Check valve en cada discharge para evitar flow a través de equipo parado

**Headers con Múltiples Fuentes:**
- Previene backflow de una fuente cuando otra falla

**Inserción en Plant 3D:**

1. Select discharge pipe de bomba (típicamente 1-2 meters downstream)
2. Ribbon → Piping panel → Insert Valve → Check Valve
3. Select tipo apropiado según tamaño y servicio
4. Plant 3D inserta con flow direction correcta (hacia header)

**Critical Configuration: Flow Direction**

1. Select check valve
2. Verify Properties → Flow Direction apunta alejándose de bomba
3. Visual arrow en modelo debe mostrar dirección correcta
4. Incorrect direction: Valve nunca abrirá (bloqueo total)

![Check valve en discharge de bomba centrífuga](../imagenes/leccion-13-check-valve-pump-discharge.png)

### 2.4 Válvulas de Bola (Ball Valves)

Las ball valves son válvulas de 1/4-turn on/off con excelente sellado y bajo torque de operación.

**Características:**

- **Operación:** 1/4 turn (90°) para full open a full closed
- **Flujo:** Low pressure drop (full bore design)
- **Sellado:** Excelente tight shut-off
- **Velocidad:** Operación rápida (advantage o disadvantage según aplicación)
- **Limitación:** No diseñada para throttling

**Tipos de Ball Valves:**

**A. Full Port (Full Bore) Ball Valve:**
- Orificio del ball = ID del pipe
- Pressure drop: Mínimo (como straight pipe)
- Uso: Líneas donde low pressure drop crítico
- Costo: Mayor

**B. Reduced Port (Standard Port) Ball Valve:**
- Orificio del ball < ID del pipe (típicamente un size menor)
- Pressure drop: Moderado
- Uso: Servicios generales donde pressure drop aceptable
- Costo: Menor

**C. V-Port Ball Valve:**
- Ball con V-notch para control
- Uso: Limited throttling capability
- Aplicación: Simple flow control (no precision)

**Aplicaciones Típicas:**

- Isolation de instrumentos (quick shutoff)
- Manifolds de sampling
- Servicios con tight shutoff requerido
- Válvulas de pequeño diámetro (≤ 2") - más económicas que gate
- High cycling applications (frecuente apertura/cierre)

**Ventajas de Ball Valves:**

1. **Operación rápida:** Emergency shutdown applications
2. **Tight shutoff:** Gas services donde pequeña fuga es crítica
3. **Low torque:** Fácil operación manual o con actuadores pequeños
4. **Bajo mantenimiento:** Pocas partes móviles
5. **Wide range:** Cryogenic hasta high temperature

**Inserción en Plant 3D:**

1. Ribbon → Piping panel → Insert Valve → Ball Valve
2. Select full bore vs standard bore según pressure drop requirements
3. Configure actuator si automation requerida

### 2.5 Válvulas de Mariposa (Butterfly Valves)

Las butterfly valves son válvulas de 1/4-turn económicas para líneas de gran diámetro.

**Características:**

- **Diseño:** Disc circular que rota sobre eje central
- **Operación:** 1/4 turn (90°)
- **Ventaja principal:** Económicas en diámetros grandes (>6")
- **Limitación:** Disc permanece en flow path (obstruction)
- **Pressure drop:** Moderado (mayor que gate o ball full bore)

**Tipos de Butterfly Valves:**

**A. Concentric Butterfly:**
- Diseño: Shaft en centerline del disc
- Uso: Servicios generales low pressure
- Costo: Más económico

**B. Eccentric Butterfly (High Performance):**
- Diseño: Shaft offset para mejor sealing
- Uso: High pressure, tight shutoff requerido
- Tipos: Double offset, triple offset

**Aplicaciones Típicas:**

- **Large diameter isolation:** 10" hasta 60" o más
- **HVAC systems:** Ductos de aire, agua enfriamiento
- **Cooling water systems:** Alta disponibilidad, bajo costo
- **Wastewater:** Servicios no críticos

**Ventajas:**

1. **Económicas:** 50-75% menos costo que gate valve en tamaños grandes
2. **Compactas:** Face-to-face dimension muy corto
3. **Livianas:** Menor peso que gate valves equivalentes
4. **Throttling capability:** Limited throttling posible (no precision)

**Limitaciones:**

1. **Flow obstruction:** Disc siempre en flow path
2. **Pressure drop:** Mayor que full bore ball o gate
3. **Bi-directional sealing:** No todas ofrecen tight shutoff bidireccional
4. **Cavitation susceptibility:** En high differential pressure

**Selección: Butterfly vs Gate en Large Diameters:**

| Tamaño | Butterfly Valve Cost | Gate Valve Cost | Recomendación |
|--------|----------------------|-----------------|---------------|
| 6" | $500 | $700 | Gate si pressure drop crítico |
| 12" | $1,200 | $2,500 | Butterfly para servicios generales |
| 24" | $4,000 | $12,000 | Butterfly para cooling water, HVAC |
| 36" | $8,000 | $30,000+ | Butterfly casi siempre |

**Inserción en Plant 3D:**

1. Select pipe de large diameter
2. Ribbon → Piping panel → Insert Valve → Butterfly Valve
3. Specify wafer type (entre bridas) vs lug type (con propias bridas)
4. Configure actuator: Gear operator (manual) o pneumatic actuator

---

## 3. Bridas (Flanges)

Las bridas permiten conexiones desmontables entre tuberías, válvulas y equipos, facilitando mantenimiento y reemplazo de componentes.

### 3.1 Tipos de Bridas según ASME B16.5

**A. Weld Neck Flange (WNRF):**
- **Conexión:** Soldadura de cuello a pipe (butt weld)
- **Características:** Hub cónico que refuerza conexión
- **Ventaja:** Mejor resistencia a fatiga, alta presión
- **Uso:** Servicios críticos, alta presión/temperatura, cyclic loads
- **Costo:** Mayor (más material, más costosa de fabricar)
- **Face type:** Raised Face (RF) típico

![Weld neck flange con detalle de cuello y raised face](../imagenes/leccion-13-wnrf-flange-detail.png)

**B. Slip-On Flange (SORF):**
- **Conexión:** Pipe inserta en flange, dos fillet welds
- **Características:** Más económica, menos resistente
- **Ventaja:** Fácil alineación durante fabricación
- **Uso:** Low pressure, non-critical services
- **Costo:** Menor (~70% de WNRF)
- **Limitación:** No recomendada para high pressure o fatigue loads

**C. Socket Weld Flange:**
- **Conexión:** Pipe inserta en socket, un fillet weld
- **Uso:** Small diameter high pressure (≤ 2")
- **Ventaja:** Alineación positiva, sin gap interno
- **Aplicación:** Instrument connections, pequeños branches

**D. Threaded Flange:**
- **Conexión:** NPT threads (rosca)
- **Uso:** Donde soldadura no permitida (explosive environments)
- **Limitación:** Prone a leakage, no para high pressure
- **Aplicación:** Temporary connections, low pressure services

**E. Lap Joint Flange:**
- **Sistema:** Flange suelta + stub end soldado
- **Ventaja:** Flange puede rotar para alinear bolt holes
- **Uso:** Frequent disassembly, alignment difícil
- **Costo:** Mayor (dos componentes)

**F. Blind Flange:**
- **Diseño:** Flange sólida sin orificio
- **Uso:** Terminación hermética de pipe o nozzle
- **Aplicación:** Future connections, maintenance access

### 3.2 Ratings de Presión (Pressure Class)

ASME B16.5 define pressure-temperature ratings:

**Clases Comunes:**

- **Class 150#:** Hasta 285 psig @ 100°F (servicios generales)
- **Class 300#:** Hasta 740 psig @ 100°F
- **Class 600#:** Hasta 1480 psig @ 100°F
- **Class 900#:** Hasta 2220 psig @ 100°F
- **Class 1500#:** Hasta 3705 psig @ 100°F
- **Class 2500#:** Hasta 6170 psig @ 100°F

**Importante:** Rating disminuye con temperatura. Ejemplo Class 150#:
- @ 100°F: 285 psig
- @ 500°F: 170 psig (Carbon Steel)
- @ 800°F: 75 psig

**Selección de Rating:**

Design pressure del sistema determina minimum flange rating:
- **Design Pressure:** 200 psig @ 300°F → Class 150# insuficiente → Usar Class 300#
- **Safety factor:** Típicamente design pressure ≤ 80% de rating

### 3.3 Tipos de Caras (Flange Faces)

**A. Raised Face (RF):**
- **Diseño:** Face elevada 1/16" o 2mm
- **Uso:** Más común (90% de aplicaciones)
- **Gasket:** Spiral wound, compressed fiber
- **Application:** Servicios generales hasta 600#

**B. Ring Type Joint (RTJ):**
- **Diseño:** Groove para metal ring gasket
- **Uso:** High pressure (≥ 900#), high temperature
- **Gasket:** Metal ring (oval o octagonal)
- **Sealing:** Superior a RF en extreme conditions

**C. Flat Face (FF):**
- **Diseño:** Face completamente plana
- **Uso:** Cast iron flanges, low pressure
- **Limitación:** No para alta presión

### 3.4 Inserción de Bridas en Plant 3D

**Método 1: Automatic Flange Insertion**

Plant 3D inserta bridas automáticamente cuando:
1. Se conecta pipe a flanged nozzle de equipo
2. Se inserta flanged valve
3. Connection method en spec requiere flanges

**Método 2: Manual Flange Insertion**

1. Select pipe en ubicación deseada
2. Ribbon → Plant 3D tab → Piping panel → Insert Component → Flange
3. Cuadro de diálogo muestra flanges disponibles en spec
4. Select tipo: WNRF, SORF, Blind, etc.
5. Plant 3D inserta flange pair (dos bridas facing cada una)

**Configuración de Bolt Rotation:**

Para alinear bolt holes durante fabricación:
1. Select flange
2. Properties → Rotation angle
3. Specify ángulo para alinear holes convenientemente

**Flange Spacing:**

Distancia entre flange faces para permitir gasket installation y bolt up:
- Típico: 1-2 inches (25-50mm) para allow gasket y stud installation
- Configurado en spec: Plant 3D mantiene spacing automáticamente

---

## 4. Componentes Especiales

### 4.1 Strainers (Filtros)

Los strainers protegen equipos downstream removiendo sólidos del flujo.

**Tipos de Strainers:**

**A. Y-Strainer:**
- **Diseño:** Screen en ángulo (típicamente 45°)
- **Uso:** Líneas horizontales o verticales
- **Ventaja:** Compacto, bajo pressure drop
- **Limitación:** Pequeña área de screen (cleaning frecuente en dirty service)
- **Aplicación:** Upstream de control valves, instrumentos, bombas

**B. Basket Strainer:**
- **Diseño:** Basket perforado en chamber cilíndrica
- **Ventaja:** Gran área de filtración (menor frecuencia de limpieza)
- **Uso:** Dirty services, high solids content
- **Limitación:** Mayor tamaño y costo
- **Aplicación:** Seawater cooling, river water intake

**C. Temporary Strainer (Startup Strainer):**
- **Uso:** Durante commissioning para capturar weld slag, construction debris
- **Diseño:** Removible después de startup
- **Ubicación:** Upstream de equipos críticos durante commissioning

**Criterios de Selección:**

**Screen Mesh Size:**
- **Coarse (10-20 mesh):** Large solids, low plugging risk
- **Medium (40-60 mesh):** Protección general de bombas
- **Fine (100-200 mesh):** Protección de instrumentos, control valves

**Pressure Drop:**
- Clean strainer: Bajo (0.5-2 psi)
- Partially plugged: Alto (puede alcanzar 20-50 psi)
- **Critical:** Instalar differential pressure indicator para monitorear plugging

**Aplicaciones Críticas:**

**Upstream de Bombas:**
- **Mandatory:** En systems con posibilidad de debris
- **Ubicación:** Suction line, antes de bomba
- **Beneficio:** Previene daño a impeller (reparación $5,000-$50,000)

**Upstream de Control Valves:**
- **Razón:** Sólidos causan wear en trim, afectan control
- **Ubicación:** 5-10 pipe diameters upstream
- **Beneficio:** Extiende vida de trim de $2,000-$10,000

**Inserción en Plant 3D:**

1. Select pipe en ubicación apropiada (upstream de equipo a proteger)
2. Ribbon → Piping panel → Insert Component → Strainer
3. Select tipo: Y-strainer, Basket, etc.
4. Specify orientación para facilitar acceso a screen cleanout
5. Plant 3D inserta con flanges si required

### 4.2 Flame Arrestors

Los flame arrestors previenen propagación de llama en sistemas con gases inflamables.

**Función:**

Dispositivo de seguridad que permite flow de gas pero bloquea propagación de llama mediante:
- Crimped ribbon elements que disipan calor
- Quenching temperature por debajo de ignition

**Aplicaciones Críticas:**

**Tank Vapor Vents:**
- **Ubicación:** Vent line de tanques de inflamables
- **Función:** Previene que llama externa entre al tank (catastrophic)
- **Requisito:** NFPA 69, API 2000

**Flare Systems:**
- **Ubicación:** Flare headers
- **Función:** Previene flashback hacia proceso

**Vapor Recovery Systems:**
- **Ubicación:** Líneas de vapor recovery
- **Función:** Protege contra ignición de vapores

**Tipos según Ubicación:**

**In-Line Flame Arrestor:**
- Instalado en pipe run
- Protección contra deflagrations

**End-of-Line Flame Arrestor:**
- Instalado en vent tip
- Protección contra atmospheric ignition

**Inserción en Plant 3D:**

1. Identify línea de vapor en tanque o vent system
2. Ribbon → Piping panel → Insert Specialty Component → Flame Arrestor
3. Select tipo según presión, flow, y tipo de gas
4. Verify orientación: Arrow indica flow direction
5. Critical: Instalación vertical upward preferida (self-draining)

### 4.3 Expansion Joints

Los expansion joints absorben movimiento térmico en sistemas de tuberías.

**Función:**

Compensar expansion/contraction térmica sin transmitir loads excesivos a equipos o soportes.

**Tipos de Expansion Joints:**

**A. Metal Bellows Expansion Joint:**
- **Diseño:** Corrugated metal bellows (stainless steel típico)
- **Movimiento:** Axial compression/extension
- **Ventaja:** No leakage (metal-to-metal)
- **Uso:** High temperature, high pressure

**B. Rubber Expansion Joint:**
- **Diseño:** Rubber body con fabric reinforcement
- **Movimiento:** Axial, lateral, angular
- **Ventaja:** Flexible, bajo costo, absorbe vibración
- **Limitación:** Temperature limitada (≤ 200°F típico)
- **Uso:** Cooling water, HVAC, pump connections

**C. Slip Joint (Packed Expansion Joint):**
- **Diseño:** Telescoping joint con packing seals
- **Movimiento:** Solo axial
- **Ventaja:** Large movement capability
- **Limitación:** Requiere mantenimiento de packing

**Aplicaciones Típicas:**

**Equipo Nozzles:**
- **Bomba discharge:** Rubber expansion joint absorbe vibración y thermal growth
- **Ubicación:** Inmediatamente después de nozzle
- **Beneficio:** Reduce loads en nozzle ($10,000-$50,000 para reparar nozzle agrietado)

**Long Pipe Runs:**
- **Problema:** 100m de carbon steel @ 200°C expansion = ~240mm
- **Solución:** Expansion joints en intervals o pipe loops

**Cálculo de Thermal Expansion:**

ΔL = α × L × ΔT

Donde:
- ΔL = Expansion (mm)
- α = Coeficiente de expansión térmica (mm/m/°C)
- L = Longitud del pipe (m)
- ΔT = Cambio de temperatura (°C)

**Ejemplo:**
- L = 50m carbon steel pipe
- ΔT = 100°C (de ambient 20°C a operating 120°C)
- α = 0.012 mm/m/°C (carbon steel)
- ΔL = 0.012 × 50 × 100 = 60mm expansion

**Solución:** Expansion joint de 60mm stroke o pipe loop

**Inserción en Plant 3D:**

1. Select pipe en ubicación de expansion joint (típicamente near equipment)
2. Ribbon → Piping panel → Insert Specialty Component → Expansion Joint
3. Select tipo basado en servicio y movement requerido
4. Configure orientation y movement direction

### 4.4 Steam Traps

Los steam traps descargan condensado de sistemas de vapor mientras retienen vapor.

**Función:**

Automáticamente drenar condensado de líneas de vapor, heat tracers, y equipos calentados por vapor, sin permitir escape de vapor vivo.

**Tipos de Steam Traps:**

**A. Thermostatic Trap:**
- **Operación:** Actúa por temperatura (condensate cooler que steam)
- **Ventaja:** Compact, bajo costo
- **Uso:** Heat tracing, small loads

**B. Mechanical Trap (Float & Thermostatic):**
- **Operación:** Float abre con acumulación de condensado
- **Ventaja:** Continuous discharge, maneja high capacities
- **Uso:** Process equipment, large steam lines

**C. Thermodynamic Trap:**
- **Operación:** Actúa por diferencia de velocidad entre steam y condensate
- **Ventaja:** Robusto, maneja superheat, freeze-resistant
- **Uso:** Outdoor steam distribution, steam mains

**D. Inverted Bucket Trap:**
- **Operación:** Bucket flotante inverted
- **Ventaja:** Muy robusto, larga vida
- **Uso:** Heavy-duty applications

**Aplicaciones:**

**Steam Main Drip Legs:**
- **Ubicación:** Puntos bajos de líneas de vapor
- **Diseño:** Tee + reducer + trap + check valve + discharge
- **Función:** Remove condensado que causa water hammer

**Heat Exchanger Drains:**
- **Ubicación:** Condensate outlet
- **Sizing:** Basado en steam load y pressure differential

**Heat Tracing:**
- **Función:** Drenar condensado de steam tracers
- **Ubicación:** End of tracer run o puntos bajos

**Inserción en Plant 3D:**

1. Identify punto bajo en steam line o condensate outlet
2. Create drip leg: Tee (branch down) + pipe + reducer
3. Insert steam trap:
   - Ribbon → Piping panel → Insert Component → Steam Trap
   - Select tipo apropiado para pressure y capacity
4. Add check valve downstream de trap (prevent backflow)
5. Route condensate line a condensate return header

---

## 5. Configuración para Bill of Materials (BOM)

La configuración correcta de propiedades de componentes es crítica para generar BOM precisos para procurement y construcción.

### 5.1 Propiedades de Componentes para BOM

Cada componente debe tener propiedades definidas que aparecen en reports:

**Propiedades Esenciales:**

1. **Tag Number:** Identificador único (ej: V-101, E-205)
2. **Description:** Descripción completa para procurement
3. **Manufacturer:** Fabricante especificado o "equivalent"
4. **Model Number:** Número de modelo si aplicable
5. **Material Specification:** Material detallado (ej: "A106 Grade B Carbon Steel")
6. **Size:** Tamaño nominal con unidades
7. **Rating:** Pressure/temperature rating (ej: "ASME 150#")
8. **End Connections:** Tipo de conexión (Flanged WNRF, Butt Weld, Threaded)
9. **Quantity:** Cantidad (auto-populated por Plant 3D)
10. **Unit Cost:** Costo unitario estimado para budgeting

**Configurar Propiedades:**

1. Select component (valve, fitting, etc.)
2. Properties palette muestra propiedades editables
3. Modify campos relevantes:
   - Tag: Enter unique identifier
   - Description: Detailed procurement description
   - Material: Verify correcta según spec
   - Manufacturer: Enter si especificado
   - Cost: Enter estimate para budgeting

![Properties palette con configuración de válvula para BOM](../imagenes/leccion-13-component-properties-bom.png)

### 5.2 Generación de BOM

**Generar Bill of Materials:**

1. Ribbon → Plant 3D tab → Reports panel → Reports Manager
2. Select "Bill of Materials" report template
3. Configure opciones:
   - Scope: Current drawing, All drawings, Selected items
   - Group by: Spec, Size, Type
   - Sort by: Tag, Description, Size
4. Click Generate
5. Plant 3D compila BOM con:
   - Quantity de cada component
   - Descriptions
   - Specifications
   - Total counts

**Export BOM:**

1. En Reports Manager, select generated report
2. Export options:
   - Excel (.xlsx) - para edición y análisis
   - PDF - para documentación
   - CSV - para import a ERP systems
3. BOM ready para procurement department

**Typical BOM Output:**

```
BILL OF MATERIALS - Cooling Water System
Project: CW-2024-01

VALVES:
Tag    | Description           | Size | Rating | Qty | Unit Cost | Total
-------|----------------------|------|--------|-----|-----------|-------
V-101  | Gate Valve, CS, WNRF  | 6"   | 150#   | 1   | $1,200    | $1,200
V-102  | Check Valve, Swing    | 6"   | 150#   | 1   | $800      | $800
V-103  | Ball Valve, Full Port | 3/4" | 150#   | 2   | $150      | $300

FITTINGS:
Description              | Size | Qty | Unit Cost | Total
------------------------|------|-----|-----------|-------
90° Elbow, LR, BW, A234 | 6"   | 8   | $45       | $360
Tee, Straight, BW       | 6"   | 2   | $120      | $240
Reducer, Concentric     | 6x4  | 1   | $80       | $80

FLANGES:
Description        | Size | Rating | Qty | Unit Cost | Total
------------------|------|--------|-----|-----------|-------
WNRF, A105, CS    | 6"   | 150#   | 8   | $85       | $680

SPECIALTY:
Tag    | Description      | Qty | Unit Cost | Total
-------|-----------------|-----|-----------|-------
ST-101 | Y-Strainer, CS  | 1   | $650      | $650

TOTAL MATERIAL COST: $4,310
```

### 5.3 Optimización de Costos

**Estrategias para Reducir Costos sin Comprometer Diseño:**

**1. Standardization:**
- Limitar número de specs diferentes
- Usar common sizes (evitar tamaños inusuales)
- Preferir componentes de fabricantes con stock local

**2. Value Engineering:**
- Evaluar si Class 300# realmente necesario o Class 150# suficiente
- Considerar butterfly valves en lugar de gate valves en large sizes
- Socket weld en lugar de flanged para small branches (≤ 2")

**3. Material Selection:**
- Carbon steel vs stainless: ¿Realmente necesario SS?
- Standard wall vs heavy wall: Use schedule según presión real

**Ejemplo de Optimización:**

**Original Design:**
- 24" Gate Valve, WNRF, 300#, CS = $15,000
- Servicio: Cooling water @ 100 psig, 30°C

**Optimized Design:**
- 24" Butterfly Valve, Wafer, 150#, CS = $4,500
- **Justificación:** Cooling water no requiere tight shutoff de gate valve
- **Savings:** $10,500 por válvula

En sistema con 10 válvulas similares: **$105,000 savings**

---

## Ejercicio Práctico

**Duración:** 15 minutos

### Escenario: Sistema de Bombeo con Componentes Completos

Usted es diseñador de tuberías en proyecto de planta petroquímica. Debe completar el diseño de una línea de discharge de bomba centrífuga con todos los componentes apropiados.

**Datos del Sistema:**

- **Servicio:** HC (Hydrocarbon liquid - Naphtha)
- **Bomba:** P-101, Centrifugal, Horizontal
- **Caudal:** 200 m³/h
- **Discharge Pressure:** 250 psig
- **Temperatura:** 80°C
- **Tamaño línea:** 8" (DN200)
- **Especificación:** ASME-300#-CS-Welded
- **Destino:** Header principal 30 metros de distancia

**Requisitos de Diseño:**

1. Check valve para prevenir backflow
2. Block valve para aislamiento de bomba
3. Strainer no requerido (upstream intake tiene filtración)
4. Flame arrestor no aplicable (línea de líquido, no vapor)
5. Expansion joint en nozzle de bomba (absorber vibración)

**Tareas:**

1. **Insertar Expansion Joint:**
   - Inmediatamente después de nozzle de bomba P-101
   - Tipo: Rubber expansion joint (temperature compatible)
   - Movement: 25mm axial
   - Purpose: Absorb vibration y thermal growth

2. **Insertar Check Valve:**
   - Ubicación: 2 metros downstream de bomba (después de expansion joint)
   - Tipo: Swing check valve (low pressure drop)
   - Size: 8"
   - Rating: 300#
   - Tag: CV-101
   - Verify flow direction: Away from pump

3. **Insertar Block Valve:**
   - Ubicación: 1 metro downstream de check valve
   - Tipo: Gate valve (isolation service)
   - Size: 8"
   - Rating: 300#
   - Ends: Flanged WNRF
   - Operator: Gear operator (8" tamaño requiere gear)
   - Tag: V-101
   - Normal position: Full open

4. **Route Pipe con Accesorios:**
   - Desde block valve, route horizontalmente 10 metros
   - Cambio elevación: +2 metros (up and over obstacle)
   - Plant 3D inserta elbows automáticamente:
     - 2 × 90° LR elbows para vertical rise
     - 2 × 90° LR elbows para return to horizontal
   - Continue routing 20 metros hasta header

5. **Conexión a Header:**
   - Header size: 12"
   - Branch connection: 12" × 12" × 8" reducing tee
   - Connection type: Welded (según spec)
   - Plant 3D inserta tee automáticamente

6. **Configurar Propiedades para BOM:**
   - Select expansion joint:
     - Tag: EJ-101
     - Description: "Rubber Expansion Joint, 8", 25mm stroke, flanged"
     - Manufacturer: "Garlock or equivalent"
     - Unit Cost: $1,200
   - Select check valve CV-101:
     - Description: "Swing Check Valve, 8", 300#, CS, Flanged WNRF"
     - Manufacturer: "Crane or equivalent"
     - Unit Cost: $2,500
   - Select gate valve V-101:
     - Description: "Gate Valve, 8", 300#, CS, Flanged WNRF, Gear Operated"
     - Manufacturer: "Velan or equivalent"
     - Unit Cost: $4,800

7. **Generar BOM:**
   - Reports Manager → Bill of Materials
   - Scope: Current drawing
   - Group by: Component type
   - Verify BOM incluye:
     - 1 × Expansion joint EJ-101
     - 1 × Check valve CV-101
     - 1 × Gate valve V-101
     - 4 × 90° LR elbows 8"
     - 1 × Reducing tee 12×12×8
     - Flanges apropiados (WNRF 8" y 12")
   - Export a Excel

8. **Verificación de Diseño:**
   - Check valve correctamente orientada (arrow away from pump)
   - Block valve después de check valve (standard arrangement)
   - Expansion joint permite movement sin loads en nozzle
   - Clearances adecuados para operación de gear operator
   - BOM completo y preciso para procurement

**Resultado Esperado:**

- Línea completa de discharge con componentes críticos correctamente ubicados
- Sequence: Pump → Expansion Joint → Check Valve → Gate Valve → Pipe Run → Header
- Todos los componentes tagged y configurados con propiedades
- BOM generado con costos estimados

**Entregables:**

- Archivo DWG con diseño completado
- BOM en Excel con quantities y costs
- Total estimated cost de componentes: ~$10,000

---

## Evaluación

### Pregunta 1: Selección de Codos
**¿Cuándo es apropiado usar short radius elbows en lugar de long radius elbows, y qué trade-offs implica esta decisión?**

**Respuesta:** Los short radius (SR) elbows son apropiados en: (1) Espacios muy congestionados donde long radius (LR) no cabe físicamente, (2) Líneas de drenaje de baja criticidad donde pressure drop no es preocupación, (3) Situaciones donde economía es prioritaria y el servicio tolera mayor pressure drop. Sin embargo, los trade-offs son significativos: SR elbows generan ~30% más pressure drop que LR debido al turn más cerrado (radio 1.0D vs 1.5D), experimentan mayor erosión en servicios con sólidos o alta velocidad, y tienen mayor stress concentration en análisis de flexibilidad. En la práctica profesional, LR elbows son el estándar (>90% de aplicaciones) y SR solo se justifican cuando restricciones físicas lo demandan. En servicios críticos como líneas de proceso de refinería, API y ASME recomiendan LR exclusivamente.

### Pregunta 2: Gate Valves vs Ball Valves
**¿Cuáles son los criterios técnicos y económicos para seleccionar gate valves versus ball valves en servicios de aislamiento on/off?**

**Respuesta:**

**Criterios Técnicos:**
- **Gate valve preferida:** (1) Tamaños grandes (>6") donde ball valves son muy costosas, (2) Low cycling applications (valve opera pocas veces al año), (3) Cuando full bore no crítico (gate ofrece near-full bore), (4) High temperature donde ball valve seats pueden degradarse.
- **Ball valve preferida:** (1) Tamaños pequeños (≤4") donde ball valve más económica que gate, (2) High cycling (operación frecuente) - ball valve tolera >10,000 ciclos vs gate ~2,000, (3) Tight shutoff crítico (gas service sin tolerancia a fuga), (4) Quick shutoff requerido (emergency isolation - 1/4 turn vs múltiples turns), (5) Low torque operation necesaria.

**Criterios Económicos:**
- 2" valve: Ball $200 vs Gate $350 → Ball preferida
- 6" valve: Ball $1,500 vs Gate $1,200 → Gate preferida
- 12" valve: Ball $8,000 vs Gate $2,500 → Gate preferida

**Conclusión:** En instalaciones típicas, valves ≤4" son ball, valves ≥8" son gate, y 6" es zona de evaluación caso por caso.

### Pregunta 3: Eccentric vs Concentric Reducers
**¿Por qué se usan eccentric reducers con "flat side up" en suction lines de bombas horizontales?**

**Respuesta:** Esta configuración crítica previene acumulación de gas en el reducer que causaría: (1) **Cavitación** - burbujas de gas en impeller causan vibración severa y daño (reparación $10,000-$50,000), (2) **Pérdida de prime** - bomba pierde succión y deja de bombear, (3) **Erosión del impeller** - collapse de burbujas erosiona metal del impeller. Con eccentric reducer flat side up, cualquier gas presente viaja por el top (lado plano) directamente a la succión sin acumularse en una bolsa. En contraste, concentric reducer crearía pocket en el top donde gas se acumula. La configuración inversa (flat side down) se usa en discharge lines para asegurar drenaje completo. Este detalle aparentemente pequeño es diferencia entre operación confiable y failures frecuentes. ASME B31.3 y API 610 (Centrifugal Pumps) especifican esta configuración como mandatory practice. Un error aquí resulta en problemas de commissioning y modificaciones costosas en campo.

### Pregunta 4: Flame Arrestors
**¿En qué aplicaciones son mandatory los flame arrestors y qué consecuencias tiene no instalarlos donde requeridos?**

**Respuesta:**

**Aplicaciones Mandatory:**
1. **Tank vent lines** - Tanques de líquidos inflamables (gasoline, naphtha, solvents): NFPA 30 y API 2000 requieren flame arrestor en vent para prevenir que ignición externa (rayo, chispa) entre al tank vapor space causando explosión catastrófica.
2. **Flare systems** - Flashback arrestors previenen que llama del flare tip retroceda al header causando explosión en proceso.
3. **Vapor recovery systems** - Protegen contra ignición de vapores recovered.
4. **Digester gas systems** - Biogas tiene risk de deflagration.

**Consecuencias de Omisión:**
- **Incidente Buncefield UK (2005):** Explosión de tanque de gasoline mató 0 pero causó £1 billion en daños. Investigación encontró múltiples fallas incluyendo flame arrestor inadequado.
- **Texas City Refinery (2005):** Explosión de blowdown drum causó 15 muertes. Aunque no directamente relacionado a flame arrestor, highlight importancia de safety devices.
- **Legal/Regulatory:** Violación de OSHA, EPA, NFPA resulta en fines $10,000-$500,000, shutdown orders, criminal liability si hay injuries.
- **Insurance:** Pólizas de seguro pueden negarse si equipment mandatorio por código no instalado.

**Conclusión:** Flame arrestors en aplicaciones requeridas no son opcionales - son life-safety critical. Costo típico $2,000-$10,000 es insignificante comparado con consecuencias.

### Pregunta 5: Steam Traps
**¿Por qué son necesarios los steam traps en sistemas de vapor y qué problemas causa el condensado no drenado?**

**Respuesta:**

**Función de Steam Traps:**
Steam traps automáticamente descargan condensado (agua líquida formada cuando steam condensa) mientras retienen steam vivo. Son esenciales porque steam condensing en pipes, heat exchangers, y tracers genera continuamente condensado que debe removerse.

**Problemas de Condensado No Drenado:**

1. **Water Hammer:** Condensado acumulado en steam line es arrastrado por steam a alta velocidad, impacta contra codos o válvulas creando shock waves (water hammer) que:
   - Generan noise >120 dB (damage hearing, disrupt operations)
   - Causan vibración severa que daña soportes
   - Pueden fracturar pipes o componentes (failure catastrophic)
   - Typical damage: $50,000-$500,000 en repairs y downtime

2. **Corrosión:** Condensado con dissolved CO₂ y O₂ es corrosivo, causa:
   - Pitting corrosion en pipes
   - Failures de pipes después de años (through-wall holes)
   - Contamination de proceso si condensado entra

3. **Reduced Heat Transfer:** En heat exchangers, condensado forma film que actúa como insulation:
   - Reduce efficiency 20-40%
   - Proceso no alcanza temperatura target
   - Increased steam consumption (higher operating cost)

4. **Thermal Shock:** Equipment sujeto a alternating hot steam y cooler condensado sufre thermal cycling:
   - Fatigue cracks en nozzles y shells
   - Premature failure de heat exchangers ($50,000-$1M replacement)

**Ubicaciones Críticas de Steam Traps:**
- Drip legs en steam mains cada 50-100 metros y en puntos bajos
- Downstream de heat exchangers (condensate outlet)
- End of steam tracers
- Upstream de control valves y flowmeters (evitar measurement errors)

**Conclusión:** Steam traps son pequeño costo ($200-$2,000) que previenen grandes daños y mejoran efficiency. Diseño adecuado incluye traps en todas ubicaciones necesarias según ASME standards.

---

## Resumen

En esta lección hemos dominado la selección, inserción y configuración de componentes de tubería en AutoCAD Plant 3D 2026:

**Puntos Clave:**

1. **Accesorios (Fittings):**
   - Codos: LR preferido para low pressure drop, SR solo en espacios restringidos
   - Tees vs weldolets: Selección basada en tamaño de branch
   - Reducers: Eccentric con orientación específica para pump suction/discharge

2. **Válvulas:**
   - Gate: Isolation service, low pressure drop, large sizes
   - Globe: Throttling control, no para on/off
   - Check: Mandatory en pump discharge, correcta orientación crítica
   - Ball: Quick operation, tight shutoff, small sizes preferido
   - Butterfly: Económica en large diameters, servicios generales

3. **Bridas:**
   - WNRF: Standard para servicios críticos y alta presión
   - SORF: Low pressure, economía prioritaria
   - Rating selection basado en design pressure/temperature
   - Raised face más común (90% aplicaciones)

4. **Componentes Especiales:**
   - Strainers: Protección de equipos downstream
   - Flame arrestors: Safety critical en vapor systems
   - Expansion joints: Thermal growth y vibration absorption
   - Steam traps: Mandatory en steam systems para drenar condensado

5. **BOM Configuration:**
   - Propiedades completas para procurement accuracy
   - Cost estimates para budgeting
   - Export a Excel/ERP systems

6. **Optimización:**
   - Value engineering reduce costos sin comprometer seguridad
   - Standardization simplifica procurement y stock
   - Component selection basado en requisitos reales, no over-design

La maestría en selección de componentes diferencia diseñadores junior de senior. Requiere conocimiento de códigos (ASME B31.3, API standards), experience con failures modes, y understanding de trade-offs técnicos-económicos. Esta habilidad es esencial para roles de **Lead Designer** y **Materials Engineer** con salarios $70,000-$100,000 USD.

---

## Próxima Lección

En la **Lección 14: Soportes de Tubería y Soportería** aprenderemos el diseño completo del sistema de supports que sostiene las tuberías. Cubriremos tipos de soportes (hangers, shoes, clamps, guides), espaciamiento según ASME B31.3 y tamaño de tubería, análisis básico de cargas, creación de soportes personalizados, numeración, consideraciones de expansión térmica, y generación de BOM de soportes. Los supports representan 15-20% del costo de instalación de tuberías y su diseño inadecuado causa failures costosos - un sistema de supports bien diseñado es fundamental para integridad a largo plazo del piping system.
