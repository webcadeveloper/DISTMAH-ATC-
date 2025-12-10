# Ejercicios Prácticos - Módulo 2: Sistemas de Agua Potable

## Ejercicio 1: Distribución de Agua Fría - Edificio Residencial

**Objetivo:** Modelar sistema completo de distribución de agua fría para edificio residencial de 3 pisos usando fixture units method y routing manual en Revit MEP 2026.

**Escenario:**
- Edificio residencial 3 pisos
- 4 apartamentos por piso (total 12 apartamentos)
- Cada apartamento tiene:
  - 1 × WC (tanque)
  - 2 × Lavabos
  - 1 × Shower
  - 1 × Kitchen sink
  - 1 × Dishwasher
  - 1 × Washing machine

**Tareas:**

### Parte A: Cálculo de Fixture Units

1. **Calcular WSFU por apartamento** usando IPC Table 604.3
2. **Calcular WSFU totales** del edificio (12 apartamentos)
3. **Convertir a GPM** usando IPC Appendix E Table E103.3(3)
4. **Documentar** en tabla Excel con breakdown por fixture type

### Parte B: Modelado en Revit

1. **Cargar template** de proyecto MEP
2. **Crear 3 levels:** Level 1 (0'-0"), Level 2 (10'-0"), Level 3 (20'-0")
3. **Colocar plumbing fixtures** en cada apartamento:
   - Usar families estándar de Revit
   - Asignar correctamente **WSFU values** en Type Properties
4. **Crear main water service:**
   - Water meter en Level 1 (entrada al edificio)
   - Main riser (vertical pipe) desde Level 1 → Roof
   - Material: Copper Type L
5. **Routing horizontal por piso:**
   - Branch desde main riser hacia cada apartamento
   - Conectar todos los fixtures con pipes
6. **Aplicar sizing automático:**
   - Settings: Max velocity 8 ft/s, Design velocity 5 ft/s
   - Verificar que Revit selecciona tamaños correctos

### Parte C: Documentación

1. **Crear Equipment Schedule:**
   - Incluir todos los plumbing fixtures
   - Columnas: Type, Level, WSFU, Flow (gpm)
2. **Crear isometric view** del main riser
3. **Export to PDF:** Floor plans + Isometric

**Entregables:**
- Archivo .rvt del proyecto completo
- Tabla Excel con cálculos de WSFU
- PDF con documentación (plans + isometric)

**Tiempo estimado:** 3-4 horas

---

## Ejercicio 2: Sistema de Agua Caliente con Recirculación

**Objetivo:** Diseñar sistema de agua caliente centralizado con recirculación para edificio comercial, calcular sizing de water heater, circulation pump, y modelar en Revit con insulation.

**Escenario:**
- Edificio de oficinas 5 pisos
- Cada piso tiene:
  - 4 × Restrooms (cada uno con 3 lavabos + 2 WC)
  - 1 × Break room (kitchen sink + dishwasher)
- Horario: 8 AM - 6 PM, 5 días/semana
- Ocupancy: 200 personas total

**Tareas:**

### Parte A: Sizing de Water Heater

1. **Calcular demanda pico** usando método de fixture units:
   - WSFU total para hot water fixtures
   - Convertir a GPM
2. **Calcular capacidad de tanque:**
   - Usar fórmula: Capacity = Peak demand × Duration × Safety factor
   - Asumir pico de 30 minutos
   - Safety factor = 1.25
3. **Seleccionar water heater comercial:**
   - Tank capacity (gallons)
   - Recovery rate (GPH - gallons per hour)
   - Input (BTU/hr o kW)
   - Fuel type (gas vs electric - comparar)

### Parte B: Sistema de Recirculación

1. **Diseñar recirculation loop:**
   - Supply line desde water heater → pisos superiores → fixtures
   - Return line desde fixtures → water heater
   - Circulation pump en return line
2. **Calcular flow de recirculación:**
   - Usar 10% del peak demand
   - Calcular head losses en loop completo
3. **Seleccionar circulation pump:**
   - Flow (gpm)
   - Head (ft)
   - Power (HP o W)

### Parte C: Modelado en Revit

1. **Colocar water heater** en mechanical room (Level 1)
2. **Routing de supply pipes:**
   - Riser vertical desde water heater → Level 5
   - Horizontal branches en cada piso hacia fixtures
   - Material: Copper Type L
3. **Routing de return pipes:**
   - Desde fixtures más lejanos → return riser
   - Return riser → circulation pump → water heater
4. **Agregar insulation:**
   - Todas las tuberías de agua caliente
   - Insulation thickness: 1" fiberglass
5. **Colocar expansion tank** cerca de water heater

### Parte D: Eficiencia Energética

1. **Calcular standby losses** sin/con insulation
2. **Proponer timer schedule** para circulation pump (ej. 7 AM - 7 PM)
3. **Calcular ROI** de insulation térmica

**Entregables:**
- Cálculos de sizing (Excel o PDF)
- Archivo .rvt con sistema completo
- Schedule de equipment (water heater, pump, expansion tank)
- Reporte de eficiencia energética (1-2 páginas)

**Tiempo estimado:** 4-5 horas

---

## Ejercicio 3: Sistema Booster con Presión Constante

**Objetivo:** Diseñar sistema booster multi-bomba para edificio alto, calcular TDH (Total Dynamic Head), seleccionar bombas, y modelar con control VFD en Revit.

**Escenario:**
- Edificio residencial torre 25 pisos
- Altura total: 75m (246 ft)
- 8 apartamentos por piso (total 200 apartamentos)
- Presión municipal disponible: 40 psi
- Cada apartamento (fixture units):
  - Total WSFU = 12.0

**Tareas:**

### Parte A: Análisis de Presión

1. **Calcular presión en pisos sin booster:**
   - Piso 1: Presión disponible
   - Piso 10, 15, 20, 25: Calcular pérdida por elevación
   - Identificar en qué piso presión < 15 psi (insuficiente)
2. **Determinar ubicación de booster:**
   - Level 1 (basement) o Level intermedio
3. **Calcular presión requerida** en discharge de booster para garantizar 20 psi en Piso 25

### Parte B: Sizing de Bombas

1. **Calcular caudal total:**
   - WSFU totales del edificio (200 apartamentos)
   - Convertir a GPM usando tablas IPC
   - Aplicar diversity factor (no todos usan agua simultáneamente)
2. **Calcular Total Dynamic Head (TDH):**
   - Elevación estática (75m)
   - Pérdidas por fricción (estimar usando Hazen-Williams)
   - Presión residual requerida en top (20 psi)
3. **Configuración multi-bomba:**
   - Seleccionar 3 bombas (N+1 redundancy)
   - Cada bomba: 1/3 del caudal total
   - Duty point: Q (gpm) × TDH (ft)
4. **Seleccionar bombas comerciales:**
   - Consultar catálogos (Grundfos, Bell & Gossett, Armstrong)
   - Verificar BEP (best efficiency point)
   - Calcular BHP y motor size (HP)

### Parte C: Sistema de Control

1. **Diseñar control sequence:**
   - Lead/lag/standby pump rotation
   - VFD control para presión constante (setpoint 60 psi)
   - Deadband ±5 psi
2. **Sizing de hydropneumatic tank:**
   - Reducir ciclos de arranque/paro
   - Calcular volumen usando fórmula estándar
3. **Calcular consumo energético:**
   - kW por bomba
   - Operación estimada: 16 horas/día
   - Costo anual (asumir $0.12/kWh)

### Parte D: Modelado en Revit

1. **Colocar 3 bombas en mechanical room:**
   - Parallel configuration
   - Spacing adecuado para mantenimiento
2. **Modelar piping:**
   - Suction manifold (desde storage tank o municipal supply)
   - Discharge manifold (hacia main riser)
   - Check valves en discharge de cada bomba
   - Gate valves para isolation
3. **Colocar hydropneumatic tank** conectado a discharge manifold
4. **Routing del main riser:**
   - Desde booster → Piso 25
   - Branches horizontales en cada piso
5. **Crear system diagram** (drafting view) mostrando:
   - Bombas
   - Tank
   - Valves
   - Control logic (esquemático)

### Parte E: Análisis de Beneficios

1. **Comparar con/sin VFD:**
   - Energía consumida
   - Costo de equipos
   - Payback period
2. **Analizar fallo de bomba:**
   - ¿Sistema puede operar con 2 de 3 bombas?
   - Presión resultante en caso de fallo

**Entregables:**
- Cálculos completos de TDH y sizing (Excel)
- Selection sheets de bombas (PDF de fabricante)
- Archivo .rvt con booster system completo
- Equipment Schedule (bombas, tank, valves)
- System diagram (single-line)
- Reporte de análisis energético (2-3 páginas)

**Tiempo estimado:** 6-8 horas

---

## Ejercicio 4: Dimensionamiento Completo y Control de Water Hammer

**Objetivo:** Dimensionar sistema de agua potable completo para edificio mixto usando múltiples métodos (fixture units, velocity), calcular pérdidas de presión detalladas con equivalent lengths, y agregar dispositivos de protección.

**Escenario:**
- Edificio mixto 4 pisos:
  - Piso 1-2: Retail (tiendas)
  - Piso 3-4: Residential (apartamentos)
- Water supply:
  - Presión municipal: 55 psi
  - Water meter: 2" (pérdida ≈ 5 psi @ 80 gpm)
- Fixtures totales:
  - 60 WSFU (retail)
  - 120 WSFU (residential)

**Tareas:**

### Parte A: Dimensionamiento por Fixture Units

1. **Calcular demanda total:** 180 WSFU → GPM
2. **Sizing del main service pipe** (desde meter → edificio):
   - Longitud: 50 ft
   - Max velocity: 8 ft/s
   - Seleccionar diámetro
3. **Sizing del main riser:**
   - Desde Level 1 → Level 4 (40 ft)
   - Considerar WSFU acumulados en cada piso

### Parte B: Cálculo de Pérdidas de Presión

1. **Inventario de fittings** en main service pipe:
   - Water meter
   - 4 × 90° elbows
   - 2 × Tees (branch)
   - 1 × Gate valve
   - 1 × Backflow preventer (RPZ - equivalent 50 ft)
2. **Calcular equivalent length total**
3. **Aplicar Hazen-Williams equation:**
   - Material: Copper Type L (C=150)
   - Calcular h_f y convertir a psi
4. **Presión disponible en Level 4:**
   ```
   P_available = P_municipal - ΔP_meter - ΔP_friction - ΔP_elevation
   ```
5. **Verificar presión mínima** (debe ser > 15 psi)

### Parte C: Dimensionamiento por Velocity Method

1. **Re-diseñar usando velocity method:**
   - Design velocity target: 5 ft/s
   - Calcular diámetro requerido para main, riser, branches
2. **Comparar con sizing por fixture units:**
   - ¿Coinciden los diámetros?
   - ¿Cuál método da tuberías más grandes?

### Parte D: Protección contra Water Hammer

1. **Identificar fixtures críticos:**
   - Washing machines (residential floors)
   - Dishwashers (residential)
   - Solenoid valves (retail restrooms)
2. **Calcular WSFU por zona** para sizing de arrestors
3. **Seleccionar water hammer arrestors:**
   - Size A, B, C, D según PDI-WH 201
   - Ubicación: < 6 ft de cada fixture crítico
4. **Colocar en Revit:**
   - Load family de arrestor
   - Ubicar en pipes cercanos a fixtures

### Parte E: Accesorios de Protección

1. **Backflow preventer:**
   - Ubicación: Después de water meter
   - Type: RPZ (Reduced Pressure Zone)
   - Size: 2"
2. **Pressure Reducing Valve (PRV):**
   - ¿Es necesario? (verificar si P > 80 psi en algún punto)
   - Si sí, calcular setpoint
3. **Thermal expansion tank:**
   - Para sistema de agua caliente (si aplica)
   - Sizing basado en volumen de water heater

### Parte F: Modelado Completo en Revit

1. **Main service pipe:**
   - Desde property line → building entry
   - Water meter, backflow preventer, PRV (si aplica)
2. **Main riser y distribution:**
   - Riser vertical Level 1 → 4
   - Horizontal branches en cada piso
3. **Agregar water hammer arrestors** en ubicaciones calculadas
4. **Asignar pipe sizes manualmente:**
   - Override automatic sizing
   - Usar diámetros calculados en Parte C
5. **Aplicar materiales correctos:**
   - Copper Type L para supply
   - Insulación en agua caliente (si aplica)

### Parte G: Documentación Técnica

1. **Crear Pipe Schedule:**
   - Campos: System, Size, Length, Material, Insulation
   - Group by: Level
   - Calculate totals (total pipe length por size)
2. **Crear Equipment Schedule:**
   - Water meter, backflow preventer, PRV, arrestors
   - Incluir manufacturer, model, size
3. **Annotate plans:**
   - Etiquetar pipe sizes
   - Tags en equipos
4. **Create isometric views:**
   - Main riser isometric
   - Typical floor isometric

**Entregables:**
- Cálculos de sizing completos (Excel con múltiples métodos)
- Tabla de equivalent lengths con breakdown de fittings
- Cálculos de pérdidas de presión paso a paso
- Archivo .rvt del proyecto completo
- Pipe Schedule y Equipment Schedule
- Annotated floor plans (PDF)
- Isometric drawings (PDF)
- Reporte técnico (3-4 páginas) explicando metodología y resultados

**Tiempo estimado:** 8-10 horas

---

## Ejercicio Integrador: Sistema Completo de Agua Potable y Caliente

**Objetivo:** Proyecto final integrando TODOS los conceptos del Módulo 2 - diseñar sistema completo para edificio real con water supply, hot water, recirculation, booster, sizing detallado, y documentación profesional.

**Escenario:**
- Hotel boutique 8 pisos
- Piso 1: Lobby, restaurant, kitchen
- Pisos 2-8: Habitaciones (10 por piso = 70 habitaciones)
- Cada habitación: Bathroom completo (WC, lavabo, shower/tub)
- Restaurant kitchen: Dishwasher comercial, sinks, pre-rinse spray
- Laundry facility (Piso basement): 6 washing machines

**Requisitos del Cliente:**
- Presión mínima 20 psi en todos los fixtures
- Agua caliente instantánea (< 10 segundos de espera)
- Sistema redundante (no puede fallar)
- Eficiencia energética (LEED Silver target)
- Cumplimiento IPC/UPC completo

**Tareas Completas:**

1. **Análisis y Cálculos:**
   - Fixture units totales (cold + hot water)
   - Demanda de caudal (gpm)
   - Presión disponible/requerida por piso
   - TDH para booster system
   - Water heater sizing (múltiples units vs centralizado)
   - Circulation pump sizing
   - Pipe sizing por velocity y fixture units
   - Pérdidas de presión completas
   - Consumo energético y costo operativo

2. **Diseño de Sistemas:**
   - Cold water distribution con booster
   - Hot water supply con 2 water heaters (redundancia)
   - Recirculation loop con timer control
   - Backflow prevention
   - Water hammer protection
   - Thermal expansion protection
   - PRVs si necesario

3. **Modelado en Revit:**
   - 8 pisos completos con fixtures
   - Main risers (cold, hot, return)
   - Horizontal distribution en cada piso
   - Mechanical room con booster pumps, water heaters, tanks
   - Todos los accesorios y protecciones
   - Insulation en tuberías de agua caliente
   - Color coding: Blue (cold), Red (hot), Purple (return)

4. **Documentación Profesional:**
   - Equipment Schedules (todos los equipos)
   - Pipe Schedules por sistema
   - Plumbing plans (todos los pisos)
   - Enlarged plans (mechanical room)
   - Riser diagrams
   - Isometric drawings (key areas)
   - Details (connections, typical fixtures)
   - Specifications (1-2 páginas por equipo)
   - Reporte técnico completo (10+ páginas)

**Entregables Finales:**
- Memoria de cálculo completa (Excel - 10+ hojas)
- Archivo .rvt del hotel completo
- Set de planos profesionales (PDF - 15+ sheets)
- Specifications document (PDF - 10+ páginas)
- Reporte técnico con análisis de eficiencia y costos

**Tiempo estimado:** 20-30 horas

**Criterios de Evaluación:**
- Exactitud de cálculos (30%)
- Cumplimiento de códigos IPC/UPC (20%)
- Calidad de modelado en Revit (25%)
- Documentación profesional (15%)
- Eficiencia energética y costos (10%)

---

## Recursos Adicionales para Ejercicios

**Códigos y Tablas:**
- IPC 2021 Chapter 6 (Water Supply & Distribution)
- IPC Appendix E (Sizing Tables)
- ASPE Data Book Volume 1 (Plumbing Engineering)

**Catálogos de Fabricantes:**
- Grundfos (bombas): www.grundfos.com
- A.O. Smith (water heaters): www.hotwater.com
- Watts (válvulas, arrestors): www.watts.com
- Sioux Chief (arrestors): www.siouxchief.com

**Software de Soporte:**
- Revit MEP 2026
- Excel para cálculos
- AutoCAD (opcional - para details)

**Families de Revit:**
- Plumbing Fixtures: Revit library estándar
- Mechanical Equipment: Descargar de fabricantes o BIMobject.com
- Pipe Fittings: Incluidos en Revit

**Templates:**
- Usar template "Mechanical-Default.rte" de Revit 2026
- Customizar pipe types según ejercicio
