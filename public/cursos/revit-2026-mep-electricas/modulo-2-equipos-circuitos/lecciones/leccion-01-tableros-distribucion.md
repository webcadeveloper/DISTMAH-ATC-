# Lección 1: Tableros de Distribución (Panelboards)

## Introducción

Los **tableros de distribución** (panelboards o distribution boards) son el corazón de cualquier instalación eléctrica, distribuyendo energía desde la acometida principal hacia circuitos ramales que alimentan iluminación, contactos y equipos. En Revit MEP 2026, los panelboards se modelan como **Electrical Equipment** con capacidades especiales para generar **Panel Schedules** automáticos y gestionar circuitos.

Esta lección cubre el modelado completo de panelboards: colocación, configuración de voltaje y fases, dimensionamiento según carga, creación de Panel Schedules, y la nueva organización mejorada en Project Browser de Revit 2026.

## Tipos de Tableros Eléctricos

### 1. Panelboard (Tablero de Distribución)

**Uso:** Distribución a circuitos ramales (branch circuits)

**Características típicas:**
- Voltaje: 120/208V o 277/480V (sistemas trifásicos)
- Capacidad: 100A - 400A (typical)
- Número de polos: 12, 24, 42 polos (modular)
- Circuitos: Iluminación, contactos, equipos pequeños

**Ejemplo - Tablero de piso típico:**
- Modelo: `LP-2` (Lighting Panel - Level 2)
- Voltaje: 120/208V, 3φ, 4W
- Main breaker: 225A
- 42 polos disponibles
- Alimenta: Iluminación y contactos Level 2

### 2. Switchboard (Tablero Principal)

**Uso:** Distribución primaria, alimenta múltiples panelboards

**Características:**
- Voltaje: 277/480V o 120/208V
- Capacidad: 400A - 4000A
- Modular, con secciones
- Incluye main disconnect, feeders, protecciones

**Ejemplo - Switchboard principal:**
- Modelo: `SWBD-MAIN`
- Voltaje: 277/480V, 3φ, 4W
- Main breaker: 2000A
- Feeders: 6× 400A (hacia panelboards de pisos)

### 3. Motor Control Center (MCC)

**Uso:** Control de motores industriales

**Características:**
- Arrancadores, variadores (VFDs)
- Protección de motores
- Típico en aplicaciones industriales/HVAC grandes

## Modelar Panelboard en Revit

### Procedimiento Paso a Paso

**Paso 1: Colocar Panelboard**

1. **Systems** → **Electrical** → **Electrical Equipment**
2. En **Type Selector**, seleccionar:
   - `Panelboard - 208V MCB 3PH 4W`
     (MCB = Main Circuit Breaker, 3PH = 3 fases, 4W = 4 hilos)

3. **Properties** palette:
   - **Name:** `LP-1` (Lighting Panel - Level 1)
   - **Load Classification:** `HVAC` o `Lighting` o `Power` (según uso predominante)
   - **Distribution System:** `208Y/120V Wye` (sistema configurado en Electrical Settings)

4. En vista de plano (Level 1), **click** para colocar panelboard en **electrical room** o closet

**Paso 2: Configurar Propiedades del Panel**

Seleccionar panelboard colocado → **Properties:**

**Identity Data:**
- **Panel Name:** `LP-1`
- **Description:** `Lighting Panel - Level 1 - East Wing`

**Electrical - Loads:**
- **Voltage:** `208Y/120V` (sistema trifásico Y-connected)
- **Number of Poles:** `42` (máximo de polos disponibles en el panel)
- **Rating:** `225A` (capacidad del main breaker)

**Electrical - Circuit:**
- **Distribution System:** `208Y/120V Wye`
- **Number of Circuits:** `0` (inicialmente, se incrementa al crear circuitos)

**Paso 3: Duplicar Type para Panelboards Personalizados**

Si necesitas panel con diferentes características:

1. Seleccionar panelboard → **Edit Type**
2. **Duplicate...**
3. Name: `Panelboard - 225A 42 Poles Custom`
4. **Type Parameters:**
   - **Rating:** `225A`
   - **Number of Poles:** `42`
   - **Voltage:** `208Y/120V`
5. **OK**

![Panelboard en Electrical Room](../imagenes/mod2-panelboard-placement.png)

## Panel Schedule - Generación Automática

### Crear Panel Schedule

**Paso 1: Generar Schedule**

1. Seleccionar panelboard `LP-1`
2. **Modify | Electrical Equipment** → **Create Panel Schedule**
3. **Panel Schedule Template** dialog:
   - Template: **Default Panel Schedule Template**
   - Click **OK**

**Resultado:** Panel Schedule aparece como vista de tabla.

**Paso 2: Abrir Panel Schedule**

1. **Project Browser** → **Panel Schedules** → `LP-1`
2. Double-click para abrir

**Panel Schedule muestra:**

| Circuit | Load Name | Phase | Breaker | Calculated Load (VA) |
|---------|-----------|-------|---------|---------------------|
| 1 | (vacant) | A | - | - |
| 2 | (vacant) | B | - | - |
| 3 | (vacant) | C | - | - |
| ... | ... | ... | ... | ... |

**Inicialmente vacío** (se llena automáticamente al crear circuitos).

### Revit 2026: Organización Mejorada de Panel Schedules

**Nueva funcionalidad 2026:**

**Panel Schedules organizados jerárquicamente en Project Browser:**

```
📁 Panel Schedules
  📁 Lighting Panels
    └── LP-1 (Level 1 - East Wing)
    └── LP-2 (Level 2 - East Wing)
    └── LP-3 (Level 3 - East Wing)
  📁 Power Panels
    └── PP-1 (Level 1 - Power)
    └── PP-2 (Level 2 - Power)
  📁 Emergency Panels
    └── EPP-1 (Emergency Power Panel)
```

**Configurar organización:**

1. **Project Browser** → Click derecho en **Panel Schedules**
2. **Group and Sort...**
3. **Group by:** `Load Classification` (agrupa por tipo: Lighting, Power, HVAC, etc.)
4. **Then by:** `Level` (sub-agrupa por nivel)
5. **OK**

**Beneficio:** Fácil navegación en proyectos con 20+ panelboards.

## Configurar Circuitos en Panel Schedule

### Agregar Circuito Manualmente (Método 1)

**Paso 1: Editar Panel Schedule**

1. Abrir Panel Schedule `LP-1`
2. Click en celda **Circuit 1** (primera fila, columna Load Name)

**Paso 2: Ingresar Datos**

**Load Name:** `Office Lighting - Zone A`

**Phase:** `A` (dropdown: A, B, C)

**Breaker:** `20A 1P` (20 Amperes, 1 Pole)

**Connected Load (VA):** `1800 VA`
- Cálculo: 12 luminarias × 150W = 1800W = 1800VA

**Demand Factor:** `1.0` (100% - iluminación continua)

**Calculated Load (VA):** `1800 VA` (automático: Connected Load × Demand Factor)

**Paso 3: Agregar Más Circuitos**

Repetir para circuitos 2, 3, etc.

**Ejemplo - Circuito 2:**
- Load Name: `Office Lighting - Zone B`
- Phase: `B`
- Breaker: `20A 1P`
- Connected Load: `2100 VA`

**Ejemplo - Circuito 3:**
- Load Name: `Receptacles - East Wall`
- Phase: `C`
- Breaker: `20A 1P`
- Connected Load: `1800 VA` (NEC: 180 VA/receptacle × 10 receptacles)

### Agregar Circuito desde Modelo (Método 2 - Recomendado)

**Más común:** Crear circuitos en modelo 3D/plano, Panel Schedule se llena automáticamente.

**Ver Lección 4** para procedimiento completo de creación de circuitos.

## Dimensionamiento de Panelboards

### Cálculo de Capacidad Requerida

**Paso 1: Sumar Cargas Calculadas**

Ejemplo - Panel `LP-1` con circuitos:

| Circuit | Load | Phase | VA |
|---------|------|-------|-----|
| 1 | Lighting Zone A | A | 1800 |
| 3 | Lighting Zone B | B | 2100 |
| 5 | Lighting Zone C | C | 1950 |
| 2 | Receptacles East | A | 1800 |
| 4 | Receptacles West | B | 1800 |
| 6 | HVAC Controls | C | 500 |
| 7-8 | Kitchen Equipment | A-B (2P) | 5000 |
| **Total por fase** | | A: 8600 VA<br>B: 8900 VA<br>C: 4450 VA |

**Paso 2: Calcular Corriente por Fase**

**Fórmula monofásica (120V):**
```
I = P / V
I_A = 8600 VA / 120V = 71.7 A
I_B = 8900 VA / 120V = 74.2 A
I_C = 4450 VA / 120V = 37.1 A
```

**Fase crítica:** Fase B = **74.2 A**

**Paso 3: Aplicar Factor de Seguridad**

**NEC 215.2(A):** Feeder debe ser dimensionado mínimo al **125%** de carga continua.

```
I_required = 74.2 A × 1.25 = 92.75 A
```

**Paso 4: Seleccionar Rating de Panel**

**Breaker estándar siguiente:** **100A**

**Selección final:** `Panelboard - 100A Main Breaker`

**Verificación:**
- 100A > 92.75A ✓
- Permite crecimiento futuro (100A - 92.75A = 7.25A disponible)

### Balanceo de Fases

**Objetivo:** Distribuir cargas equitativamente entre fases A, B, C.

**Desbalanceo actual:**
- Fase A: 71.7 A
- Fase B: 74.2 A (máxima)
- Fase C: 37.1 A (mínima)

**Desbalanceo:** (74.2 - 37.1) / 74.2 = **50%** (ALTO - no aceptable)

**Solución: Re-asignar circuitos**

**Mover circuito Kitchen Equipment (5000 VA) de A-B a B-C:**

**Nuevo balance:**
- Fase A: 3600 VA / 120V = 30 A
- Fase B: 8900 VA / 120V = 74.2 A
- Fase C: 9450 VA / 120V = 78.75 A

**Desbalanceo mejorado:** (78.75 - 30) / 78.75 = **62%** (aún alto)

**Mejor solución:** Distribuir iluminación uniformemente.

**Balance final ideal:**
- Fase A: ~65 A
- Fase B: ~67 A
- Fase C: ~68 A

**Desbalanceo final:** <5% (ACEPTABLE)

## Panel Schedule Template Personalizado

### Crear Template Propio

**Paso 1: Configurar Panel Schedule**

1. Abrir Panel Schedule existente
2. **Modify Panel Schedule** tab → **Template Properties**

**Paso 2: Personalizar Columnas**

**Template Properties** dialog:

**Columns visibles:**
- ☑ Circuit Number
- ☑ Load Name
- ☑ Phase
- ☑ Breaker Rating
- ☑ Connected Load (VA)
- ☑ Demand Factor
- ☑ Calculated Load (VA)
- ☑ **Frame Size** (nuevo - tamaño de marco del breaker)
- ☑ **Trip** (tipo de disparo: thermal, magnetic)

**Opciones de totales:**
- ☑ Show **Total Connected Load** por fase
- ☑ Show **Total Calculated Load** por fase
- ☑ Show **Grand Total VA**

**Paso 3: Formateo**

**Text appearance:**
- Header text: **Bold**, 3mm
- Body text: 2.5mm
- Grid lines: Thin

**Paso 4: Guardar Template**

1. **Save As Template...**
2. Name: `DISTMAH Panel Schedule - Detailed`
3. Save location: Project templates folder

**Uso futuro:**
Al crear nuevo Panel Schedule, seleccionar `DISTMAH Panel Schedule - Detailed` como template.

## Mejores Prácticas

### 1. Nomenclatura de Panels

**Usar sistema consistente:**

| Tipo de Panel | Prefijo | Ejemplo |
|---------------|---------|---------|
| Lighting Panel | LP- | LP-1, LP-2, LP-3 |
| Power Panel | PP- | PP-1, PP-2 |
| Emergency Panel | EPP- | EPP-1 |
| HVAC Panel | HP- | HP-1 |
| Receptacle Panel | RP- | RP-1 |

**Incluir nivel:**
- `LP-1-L2` = Lighting Panel #1, Level 2
- `PP-2-L3` = Power Panel #2, Level 3

### 2. Load Classification

**Asignar Load Classification correctamente:**

**Purpose:** Revit agrupa panels por classification en schedules y Project Browser.

**Classifications estándar:**
- **Lighting** - Paneles dedicados a iluminación
- **Power** - Paneles de fuerza (receptacles, equipment)
- **HVAC** - Paneles para equipos mecánicos
- **Data/Comm** - Equipos de telecomunicaciones (raro en Revit Electrical)

### 3. Ubicación de Panels

**Consideraciones:**

**Centralized:**
- Colocar panelboards **centralmente** en área que sirven (minimiza longitud de circuitos)
- Reducción de caída de voltaje
- Ahorro en cobre

**Accesibilidad:**
- **NEC 110.26:** Mínimo 1.0m (3 ft) de working clearance frente a panel
- Modelar clearance en Revit con **Room** o **Area**

**Electrical Rooms:**
- Proyectos grandes: Dedicar cuartos eléctricos (electrical rooms)
- Múltiples panelboards agrupados
- Facilita mantenimiento

### 4. Spare Circuits

**Reservar circuitos de reserva:**

**NEC recomendación:** 20% de circuitos spare (no asignados).

**Ejemplo:**
- Panel con 42 polos
- Circuitos activos: 30
- Spares: 12 (28% - suficiente)

**Beneficio:** Futuras expansiones sin cambiar panel.

## Revit 2026: Nuevos Campos en Schedules

### Equipment Schedule con Nuevos Campos

**Paso 1: Crear Equipment Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. Category: **Electrical Equipment**
3. Name: `Electrical Panels Schedule`

**Paso 2: Agregar Nuevos Campos 2026**

**Campos tradicionales:**
- Family and Type
- Panel Name
- Voltage
- Rating
- Number of Poles

**NUEVOS en 2026:**
- **Part Type** - Tipo de equipo (Panelboard, Switchboard, Transformer, etc.)
- **Distribution System** - Sistema de distribución asignado (208Y/120V Wye, etc.)
- **Load Classification** - Clasificación de carga (Lighting, Power, HVAC)

**Paso 3: Filtrar por Part Type**

**Filter:**
- Part Type **equals** `Panelboard`

**Resultado:** Schedule muestra solo panelboards (excluye transformers, switchboards).

**Paso 4: Agrupar por Distribution System**

**Sorting/Grouping:**
- Group by: `Distribution System`
- Then by: `Level`

**Output:**

```
208Y/120V Wye
  Level 1
    LP-1-L1 | 225A | 42 Poles
    PP-1-L1 | 150A | 30 Poles
  Level 2
    LP-1-L2 | 225A | 42 Poles

277/480V Wye
  Level 1
    HP-1-L1 | 100A | 24 Poles (HVAC Panel)
```

**Beneficio:** Clara separación de sistemas de voltaje.

## Ejercicio Aplicado

**Ver:** Ejercicio 1 en `ejercicios.md` - Configurar 3 panelboards con circuitos balanceados y generar Panel Schedules.

---

**Próxima Lección:** Switchboards y Equipos Principales - Distribución primaria y subestaciones.
