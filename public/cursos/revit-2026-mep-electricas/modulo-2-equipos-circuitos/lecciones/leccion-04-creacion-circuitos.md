# Lección 4: Creación de Circuitos Eléctricos

## Introducción

La **creación de circuitos eléctricos** en Revit MEP conecta cargas (luminarias, contactos, equipos) con panelboards mediante conductores, permitiendo análisis de cargas, balanceo de fases y generación automática de Panel Schedules. Revit 2026 introduce **routing mejorado** con mayor control sobre path of travel y **conductores personalizables** con materiales, diámetros y aislamientos definidos por usuario.

Esta lección cubre creación de circuitos paso a paso, routing automático vs manual, conductores personalizables 2026, numeración de circuitos, y path editing avanzado.

## Tipos de Circuitos

### 1. Branch Circuit (Circuito Ramal)

**Definición:** Circuito desde panelboard hasta cargas finales.

**Características:**
- Protección: 15A, 20A, 30A típico
- Conductores: #12 AWG, #10 AWG
- Longitud: Limitada por voltage drop (<3%)

**Ejemplos:**
- Circuito de iluminación: 120V, 20A, #12 AWG
- Circuito de contactos: 120V, 20A, #12 AWG
- Circuito de equipo: 208V, 30A, #10 AWG (trifásico)

### 2. Feeder Circuit (Circuito Alimentador)

**Definición:** Circuito desde switchboard/panelboard principal hacia panelboards secundarios.

**Características:**
- Protección: 100A - 800A
- Conductores: #2 AWG - 500 kcmil
- Alta capacidad

**Ver Lección 2** para detalles de feeders.

### 3. Equipment Circuit (Circuito de Equipo)

**Definición:** Circuito dedicado a equipo específico (motor, HVAC, elevador).

**Características:**
- Sizing según motor/equipo (NEC Article 430)
- Protección contra sobrecarga
- Típicamente circuito individual (no compartido)

## Crear Circuito - Método Básico

### Procedimiento Paso a Paso

**Escenario:** Conectar 8 luminarias de oficina a panel `LP-1`.

**Paso 1: Colocar Luminarias**

1. **Systems** → **Electrical** → **Lighting Fixture**
2. Type: `2x4 LED Troffer - 40W - 120V`
3. Colocar 8 luminarias en layout de oficina (grid 2.4m × 2.4m)

**Paso 2: Seleccionar Cargas**

1. En vista de plano, **Shift+Click** para seleccionar las 8 luminarias
2. Todas las luminarias seleccionadas

**Paso 3: Crear Circuito (Power)**

1. **Modify | Lighting Fixtures** → **Power** (ribbon)
2. **Select Panel** dialog aparece
3. Seleccionar panel: `LP-1`
4. Click **OK**

**Paso 4: Configurar Circuit Properties**

**Circuit Properties** dialog aparece automáticamente:

**Circuiting:**
- **Circuit Number:** `1` (Revit asigna siguiente número disponible)
- **Panel:** `LP-1`
- **Circuit Type:** `Branch` (automático para luminarias)

**Loads:**
- **Calculated Load (VA):** `320 VA` (8 luminarias × 40W)
- **Demand Factor:** `1.0` (100% - iluminación continua)

**Wire:**
- **Wire Size:** `#12 AWG` (automático según load)
- **Number of Hot Conductors:** `1` (monofásico 120V)
- **Number of Neutral Conductors:** `1`
- **Number of Ground Conductors:** `1`
- **Wire Type:** `THHN/THWN` (Revit default)

**Protection:**
- **Rating:** `20A` (breaker)
- **Poles:** `1` (monofásico)

5. Click **OK**

**Resultado:**
- Circuito creado
- Líneas rojas/azules aparecen conectando luminarias → panel
- Panel Schedule actualizado automáticamente con Circuit 1

![Circuito de Iluminación Creado](../imagenes/mod2-circuit-created.png)

## Routing Automático vs Manual

### Routing Automático (Por Defecto)

**Comportamiento:**
- Revit dibuja **línea directa** desde cada carga hasta panel
- Ignora muros, obstáculos (solo representación esquemática)
- **No representa path real** de conducción

**Uso:** Diseño preliminar, cálculos de carga.

**Limitación:** No sirve para coordinación 3D o fabrication.

### Routing Manual (Path Editing)

**Para circuitos críticos** o coordinación detallada.

**Paso 1: Seleccionar Circuito**

1. Click en línea de circuito
2. Circuito se resalta (todas las conexiones)

**Paso 2: Edit Circuit (Path)**

1. **Modify | Electrical Circuits** → **Edit Circuit**
2. Modo de edición activado (puntos editables aparecen)

**Paso 3: Agregar Waypoints (Puntos de Ruta)**

1. **Add Wire** button (ribbon)
2. Click para agregar puntos en path deseado:
   - Click 1: Desde luminaria hacia ceiling
   - Click 2: Horizontal en ceiling hacia pared
   - Click 3: Baja por pared hacia panel
   - Click 4: Horizontal a panel
3. **Finish** (checkmark verde)

**Path mejorado:**
- Sigue geometría real (ceiling → wall → panel)
- Útil para coordinación con cable trays

![Path Editing](../imagenes/mod2-path-editing.png)

## Revit 2026: Conductores Personalizables

### Nueva Funcionalidad 2026

**Customizable Conductors** permite definir:
- **Material:** Copper, Aluminum, custom alloys
- **Insulation:** THHN, THWN, XHHW, custom
- **Diameter:** Cualquier calibre (no limitado a AWG estándar)
- **Ampacity:** Definir tabla de ampacidades personalizada

### Configurar Conductor Personalizado

**Paso 1: Electrical Settings**

1. **Manage** → **MEP Settings** → **Electrical Settings**
2. **Wires** tab

**Paso 2: Crear Nuevo Wire Type**

1. Click **New** (bajo Wire Types)
2. **Wire Type Properties:**

   **General:**
   - Name: `Custom Copper THHN - Metric`
   - Material: `Copper`
   - Insulation: `THHN (90°C)`

   **Sizing:**
   - Standard: `Custom` (no AWG ni mm²)
   - Sizes: Agregar calibres personalizados

**Paso 3: Definir Calibres (Sizes)**

Click **Add Size:**

| Size Name | Diameter (mm) | Ampacity (A) | Application |
|-----------|---------------|--------------|-------------|
| 1.5mm² | 1.38 | 15 | Lighting |
| 2.5mm² | 1.78 | 20 | Receptacles |
| 4mm² | 2.25 | 25 | Equipment |
| 6mm² | 2.76 | 32 | Sub-feeders |
| 10mm² | 3.57 | 44 | Feeders |

**Ampacity basada en:** Tablas IEC o código local (no NEC).

**Paso 4: Asignar a Distribution System**

En **Distribution Systems** tab:

1. Seleccionar sistema: `208Y/120V Wye`
2. **Available Conductor Types:** Agregar `Custom Copper THHN - Metric` a lista
3. Click **OK**

**Paso 5: Usar en Circuitos**

Al crear nuevo circuito:
- **Wire Type:** Dropdown ahora incluye `Custom Copper THHN - Metric`
- **Wire Size:** Dropdown muestra `1.5mm²`, `2.5mm²`, etc.

**Beneficio:** Soporte para estándares internacionales no-AWG.

## Numeración de Circuitos

### Numeración Automática

**Por defecto:** Revit asigna números secuenciales (1, 2, 3, 4...).

**En sistemas trifásicos:**
- Circuitos monofásicos: 1, 3, 5, 7... (impares en fase A)
- Circuitos monofásicos: 2, 4, 6, 8... (pares en fases B y C)
- Circuitos bifásicos: 1-2, 3-4, 5-6 (usan dos números consecutivos)
- Circuitos trifásicos: 1-3, 4-6, 7-9 (usan tres números)

### Numeración Manual (Renumbering)

**Paso 1: Abrir Panel Schedule**

1. **Project Browser** → **Panel Schedules** → `LP-1`
2. Double-click

**Paso 2: Modificar Números**

1. Click en celda **Circuit Number** del circuito deseado
2. Escribir nuevo número: `10` (ejemplo)
3. Enter

**Revit verifica duplicados:**
- Si número ya existe → Warning
- Debe ser número único en el panel

**Paso 3: Renom brar Batch**

Para renumerar múltiples circuitos:

1. **Modify Panel Schedule** → **Renumber Circuits**
2. **Renumber Circuits** dialog:
   - Start numbering at: `1`
   - ☑ **Consecutive numbering** (1, 2, 3, 4...)
   - ☐ **Alternate numbering** (1, 3, 5 para fase A; 2, 4, 6 para fase B)
3. Click **OK**

**Circuitos renumerados** según configuración.

## Revit 2026: Enhanced Circuit Routing

### Path of Travel Improvements

**Nuevas opciones de routing:**

**Modo 1: Shortest Path (Default)**
- Línea directa, ignora geometría

**Modo 2: Follow Cable Tray**
- Circuito sigue cable trays existentes automáticamente
- **Nuevo 2026:** Detección automática de trays en ruta

**Modo 3: Follow Conduit Run**
- Circuito sigue conduits modelados
- Múltiples circuitos pueden compartir conduit

**Modo 4: Manual Waypoints**
- Control total (método tradicional)

### Configurar Auto-Routing con Cable Tray

**Paso 1: Modelar Cable Tray**

1. **Systems** → **Electrical** → **Cable Tray**
2. Dibujar tray desde electrical room hacia área de cargas
3. Type: `Ladder Cable Tray - 300mm Width`

**Paso 2: Activar Auto-Follow**

1. **Electrical Settings** → **Circuit Routing** tab (nuevo 2026)
2. ☑ **Automatically follow cable trays when available**
3. **Snap tolerance:** `500mm` (circuitos a menos de 500mm del tray lo siguen)
4. Click **OK**

**Paso 3: Crear Circuito**

Al crear circuito normalmente, **Revit automáticamente:**
- Detecta cable tray en ruta hacia panel
- Routing sigue el tray
- Path más realista

![Auto-Routing con Cable Tray](../imagenes/mod2-auto-routing-tray.png)

**Beneficio:** Coordinación 3D mejorada sin edición manual.

## Circuitos Multi-Carga

### Home Run vs Daisy Chain

**Home Run:**
- Cada carga tiene circuito individual al panel
- Ejemplo: 8 luminarias → 8 circuitos (ineficiente)

**Daisy Chain (Recomendado):**
- Múltiples cargas en mismo circuito
- Ejemplo: 8 luminarias → 1 circuito compartido

### Crear Circuito con Múltiples Cargas

**Paso 1: Seleccionar Todas las Cargas**

1. Shift+Click para seleccionar 8 luminarias (40W cada una)

**Paso 2: Create Power**

1. **Power** button → Select panel `LP-1`

**Paso 3: Verificar Load**

**Circuit Properties:**
- Calculated Load: `320 VA` (8 × 40W)
- Wire Size: **#12 AWG** (suficiente para 320VA @ 120V = 2.67A)
- Breaker: **20A**

**NEC 210.23(A):** Circuito 20A puede alimentar múltiples cargas.

**Paso 4: Configurar Path**

**Opción A - Daisy Chain Manual:**
1. **Edit Circuit**
2. Conectar luminarias en serie:
   - Panel → Luminaria 1 → Luminaria 2 → ... → Luminaria 8
3. **Finish**

**Opción B - Tree Configuration:**
- Panel → Junction box central → Se ramifica a luminarias
- Más eficiente en longitud de conductor

## Análisis de Circuitos

### Voltage Drop Calculation

**Revit NO calcula voltage drop automáticamente**, pero proporciona datos para cálculo manual.

**Fórmula (monofásica):**
```
V_drop = (2 × I × L × R) / 1000

Donde:
I = Corriente (A)
L = Longitud del conductor (m)
R = Resistencia del conductor (Ω/km)
```

**Ejemplo:**
- Circuito: 8 luminarias, 320 VA
- Voltaje: 120V
- Corriente: I = 320 / 120 = 2.67 A
- Longitud: 45m (desde panel hasta última luminaria)
- Conductor: #12 AWG Copper, R = 5.21 Ω/km

```
V_drop = (2 × 2.67 × 45 × 5.21) / 1000
V_drop = 1.25 V
```

**Porcentaje:**
```
%V_drop = (1.25 / 120) × 100 = 1.04% ✓
```

**Cumple** NEC (< 3% para branch circuits).

### Circuit Length Report

**Generar reporte de longitudes:**

**Paso 1: Circuit Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. Category: **Electrical Circuits**
3. Name: `Circuit Length Analysis`

**Paso 2: Agregar Campos**

- Panel
- Circuit Number
- Load Name
- Wire Size
- **Length** (longitud total del circuito)
- Calculated Load (VA)

**Paso 3: Calcular Voltage Drop en Excel**

1. Exportar schedule a Excel
2. Agregar columna: `Voltage Drop (V)`
3. Fórmula: `= (2 × Current × Length × Resistance) / 1000`
4. Identificar circuitos con > 3% drop

**Acción:** Aumentar calibre de conductor en circuitos críticos.

## Mejores Prácticas

### 1. Circuit Loading

**NEC 210.20(A):** Breaker no debe exceder **80%** de rating para cargas continuas.

**Ejemplo:**
- Breaker: 20A
- Carga máxima continua: 20A × 0.8 = **16A máximo**

**Para 120V circuito:**
- VA máximo = 120V × 16A = **1920 VA**

**No sobrecargar circuitos** agregando más luminarias que la capacidad.

### 2. Dedicated Circuits

**Equipos que requieren circuito dedicado:**
- Refrigeradores comerciales
- Microondas (> 1000W)
- Equipos médicos
- Servidores/IT equipment

**No conectar otras cargas** en estos circuitos.

### 3. GFCI/AFCI Protection

**Locations requiring GFCI:**
- Baños
- Cocinas (contactos cerca de agua)
- Exteriores
- Garages

**Modelado en Revit:**
- Circuit Properties → **Ground Fault:** `Yes`
- Aparece en Panel Schedule

### 4. Identificación de Circuitos

**Load Name descriptivo:**
- ✅ `Office Lighting - East Zone - Rooms 201-208`
- ❌ `Circuit 1`

**Beneficio:** Troubleshooting rápido en campo.

## Ejercicio Aplicado

**Ver:** Ejercicio 4 en `ejercicios.md` - Crear 12 circuitos de iluminación y contactos con routing mejorado y conductores personalizables.

---

**Próxima Lección:** Cálculo de Cargas y Factores de Demanda - NEC Article 220 aplicado.
