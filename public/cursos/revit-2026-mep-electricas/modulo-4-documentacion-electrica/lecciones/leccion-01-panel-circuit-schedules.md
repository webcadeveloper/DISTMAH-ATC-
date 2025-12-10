# Lección 1: Panel Schedules y Circuit Schedules

## Introducción

Los **panel schedules** son documentos esenciales que detallan todos los circuitos de un panelboard: cargas, voltajes, fases, breakers y cálculo de capacidad total. Los **circuit schedules** complementan mostrando routing, longitudes y equipos conectados. Revit MEP 2026 genera estos schedules automáticamente desde el modelo BIM, asegurando consistencia y actualizaciones en tiempo real.

Esta lección cubre generación completa de panel schedules, personalización de templates, circuit schedules detallados, y organización mejorada de Revit 2026.

## Panel Schedule - Anatomía

### Componentes Estándar

**Header (Encabezado):**
- Panel Name: `LP-1`
- Voltage: `208Y/120V`
- Main Breaker Rating: `225A`
- Total Connected Load: `48,500 VA`
- Total Demand Load: `38,200 VA`
- Location: `Level 1 - Electrical Closet A`

**Body (Cuerpo - Tabla de Circuitos):**

| Circuit | Load Name | Phase | Breaker | Connected (VA) | Demand Factor | Calculated (VA) |
|---------|-----------|-------|---------|----------------|---------------|-----------------|
| 1 | Office Lighting E | A | 20A 1P | 1,600 | 1.0 | 1,600 |
| 3 | Office Lighting W | B | 20A 1P | 1,800 | 1.0 | 1,800 |
| 5 | Receptacles Zone 1 | C | 20A 1P | 2,160 | 0.5 | 1,080 |
| 2 | Spare | A | 20A 1P | - | - | - |
| ... | ... | ... | ... | ... | ... | ... |

**Footer (Totales):**
- Phase A Total: 15,200 VA
- Phase B Total: 16,800 VA
- Phase C Total: 16,500 VA
- Grand Total Connected: 48,500 VA
- Grand Total Demand: 38,200 VA

## Generar Panel Schedule

### Procedimiento Automático

**Paso 1: Crear Circuitos Primero**

**Prerequisito:** Panel debe tener circuitos creados (conexiones desde cargas → panel).

**Verificar:**
1. **Project Browser** → **Families** → **Electrical Equipment** → Panelboard type
2. Seleccionar panel instance en modelo
3. **Properties** → **Number of Circuits:** Debe mostrar número > 0

**Paso 2: Generate Panel Schedule**

1. En vista de plano, seleccionar panelboard `LP-1`
2. **Modify | Electrical Equipment** → **Create Panel Schedule** (ribbon)
3. **Panel Schedule Template** dialog:
   - Template: **Default Panel Schedule Template** (o custom si existe)
4. Click **OK**

**Resultado:** Panel Schedule generado automáticamente.

**Paso 3: Abrir Panel Schedule**

1. **Project Browser** → **Panel Schedules** → `LP-1`
2. Double-click para abrir

**Panel Schedule aparece** con todos los circuitos poblados automáticamente.

![Panel Schedule Generado](../imagenes/mod4-panel-schedule-generated.png)

### Editar Panel Schedule

**Modificar valores directamente:**

1. Click en celda (ej. **Load Name** de Circuit 1)
2. Editar texto: `Office Lighting - East Wing - 20 Fixtures`
3. Enter para confirmar

**Cambios sincronizan con modelo:**
- Editar **Phase** → Circuito cambia de fase en modelo
- Editar **Breaker** → Rating actualizado
- Editar **Demand Factor** → Calculated Load recalcula

**Agregar circuito manualmente:**

1. Click en fila vacía (ej. Circuit 10)
2. Ingresar datos:
   - Load Name: `Future Expansion`
   - Phase: `A`
   - Breaker: `20A 1P`
   - Connected Load: `0 VA` (spare)

## Revit 2026: Organización Mejorada

### Hierarchical Organization en Project Browser

**Antes de 2026:**
```
📁 Panel Schedules
  └── LP-1
  └── LP-2
  └── PP-1
  └── EPP-1
  └── HP-1
  (Sin organización, lista plana)
```

**Revit 2026 - Organización Jerárquica:**

```
📁 Panel Schedules
  📁 By Load Classification
    📁 Lighting
      └── LP-1 (Level 1)
      └── LP-2 (Level 2)
      └── LP-3 (Level 3)
    📁 Power
      └── PP-1 (Level 1)
      └── PP-2 (Level 2)
    📁 Emergency
      └── EPP-1 (Emergency)
  📁 By Level
    📁 Level 1
      └── LP-1
      └── PP-1
    📁 Level 2
      └── LP-2
      └── PP-2
```

**Configurar:**

1. **Project Browser** → Right-click **Panel Schedules**
2. **Properties**
3. **Group and Sort:**
   - **Group by:** `Load Classification`
   - **Then by:** `Level`
4. **OK**

**Beneficio:** Proyectos con 50+ panelboards fácilmente navegables.

## Panel Schedule Templates

### Crear Template Personalizado

**Paso 1: Abrir Panel Schedule Existente**

1. **Project Browser** → **Panel Schedules** → `LP-1`

**Paso 2: Modificar Template Properties**

1. **Modify Panel Schedule** → **Template Properties** (ribbon)
2. **Panel Schedule Template Properties** dialog:

**Columns tab:**

**Columnas estándar:**
- ☑ Circuit Number
- ☑ Load Name
- ☑ Phase
- ☑ Breaker Rating
- ☑ Connected Load (VA)
- ☑ Demand Factor
- ☑ Calculated Load (VA)

**Columnas adicionales (custom):**
- ☑ **Wire Size** (muestra calibre del circuito)
- ☑ **Wire Length** (longitud total del circuito)
- ☑ **Frame Size** (tamaño de marco del breaker)
- ☑ **Trip** (tipo de disparo: thermal, magnetic)
- ☑ **Ground Fault** (indica si tiene GFCI)

**Sorting/Grouping tab:**
- Sort by: `Circuit Number` (Ascending)
- ☑ **Itemize every instance**

**Formatting tab:**

Para cada columna, configurar:
- **Heading:** Texto del encabezado
- **Alignment:** Left, Center, Right
- **Calculate totals:** ☑ (para columnas numéricas)

**Appearance tab:**
- Grid lines: **Thin Lines**
- Outline: **Medium Lines**
- **Bold:** Title, Headers, Totals
- Title text size: **3.5mm**
- Header text size: **3.0mm**
- Body text size: **2.5mm**

**Paso 3: Guardar Template**

1. Click **Save As Template...**
2. **Name:** `DISTMAH Panel Schedule - Extended`
3. **Location:** Project templates folder
4. **Save**

**Paso 4: Aplicar a Otros Panels**

1. Seleccionar otro panelboard (ej. `LP-2`)
2. **Create Panel Schedule** → Template: `DISTMAH Panel Schedule - Extended`
3. Panel Schedule usa configuración personalizada

![Template Personalizado](../imagenes/mod4-panel-schedule-template.png)

## Circuit Schedules

### ¿Qué es un Circuit Schedule?

**Diferencia con Panel Schedule:**

| Panel Schedule | Circuit Schedule |
|----------------|------------------|
| Vista por **panel** | Vista por **circuito** |
| Enfoque: Capacidad de panel | Enfoque: Routing y equipos |
| Columnas: Breaker, loads | Columnas: Length, devices, path |

**Uso:** Complementa panel schedule con información de campo (routing, longitudes).

### Crear Circuit Schedule

**Paso 1: Schedule/Quantities**

1. **View** → **Schedules** → **Schedule/Quantities**
2. **Category:** `Electrical Circuits`
3. **Name:** `Circuit Schedule - Complete`
4. **OK**

**Paso 2: Agregar Campos**

**Available Fields → Scheduled Fields:**

- **Panel** - Panel que alimenta el circuito
- **Circuit Number** - Número de circuito
- **Load Name** - Nombre descriptivo
- **Circuit Type** - Branch, Feeder, etc.
- **Phase** - A, B, C
- **Voltage** - 120V, 208V, 480V
- **Wire Size** - #12 AWG, #10 AWG
- **Wire Material** - Copper, Aluminum
- **Wire Type** - THHN, THWN
- **Number of Conductors** - 2, 3, 4
- **Ground Conductor Size** - #12 AWG
- **Length** - Longitud total del circuito (m o ft)
- **Apparent Load (VA)** - Carga conectada
- **True Load** - Carga calculada con demand factor
- **Rating** - Rating del breaker

**Paso 3: Sorting/Grouping**

- **Sort by:** `Panel` (agrupa circuitos por panel)
- **Then by:** `Circuit Number` (orden numérico)
- ☑ **Grand totals** (totales por panel)

**Paso 4: Formatting**

- **Length:** Calculate totals ☑ (total de conductor usado)
- **Apparent Load:** Calculate totals ☑

**Paso 5: Filter (Opcional)**

**Ejemplo - Solo circuitos de iluminación:**
- Filter by: `Circuit Type`
- Equals: `Branch`
- **And:** `Load Name` **contains** `Lighting`

**Resultado:** Schedule muestra solo circuitos de iluminación.

### Circuit Schedule Output Ejemplo

| Panel | Circuit | Load Name | Phase | Wire | Length | VA | Rating |
|-------|---------|-----------|-------|------|--------|-----|--------|
| **LP-1** | 1 | Office Lighting E | A | #12 AWG | 45m | 1,600 | 20A |
| LP-1 | 3 | Office Lighting W | B | #12 AWG | 52m | 1,800 | 20A |
| LP-1 | 5 | Receptacles Z1 | C | #12 AWG | 38m | 2,160 | 20A |
| **LP-1 Total** | | | | | **135m** | **5,560 VA** | |
| **PP-1** | 2 | Receptacles Z2 | A | #12 AWG | 28m | 1,800 | 20A |
| PP-1 | 4 | Kitchen Equipment | B | #10 AWG | 15m | 3,000 | 30A |
| **PP-1 Total** | | | | | **43m** | **4,800 VA** | |
| **Grand Total** | | | | | **178m** | **10,360 VA** | |

**Uso:**
- Estimación de materiales (178m de conductor)
- Verificación de routing
- Documentación para instaladores

## Análisis de Cargas - Equipment Schedule

### Schedule de Todos los Panelboards

**Paso 1: Crear Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. **Category:** `Electrical Equipment`
3. **Name:** `Electrical Panels - Load Summary`

**Paso 2: Agregar Campos**

- **Panel Name**
- **Level**
- **Load Classification** (Lighting, Power, Emergency)
- **Distribution System** (208Y/120V, 480Y/277V)
- **Rating** (capacity del main breaker)
- **Number of Circuits** (cuántos circuitos tiene)
- **Total Connected Load (VA)**
- **Total Demand Load (VA)**
- **Voltage**

**Paso 3: Calculated Field - % Utilization**

1. **Calculated Value** button
2. **Name:** `Utilization %`
3. **Type:** Number
4. **Formula:**
   ```
   (Total Demand Load / (Rating × Voltage × 1.732)) × 100
   ```
   (Para sistemas trifásicos)

**Ejemplo:**
```
Panel LP-1:
Demand Load = 38,200 VA
Rating = 225A
Voltage = 208V (line-to-line)

Capacity (VA) = 225A × 208V × 1.732 = 81,081 VA
Utilization = (38,200 / 81,081) × 100 = 47.1%
```

**47% utilization = BUENO** (permite crecimiento).

**Paso 4: Filtrar por Utilization**

**Highlight panels over 80%:**
- **Formatting** tab → **Conditional Formatting**
- If `Utilization %` **>** `80` → Background color: **Red**

**Resultado:** Panels sobrecargados destacados visualmente.

### Exportar Schedules a Excel

**Paso 1: Exportar**

1. Abrir schedule en Revit
2. **File** → **Export** → **Reports** → **Schedule**
3. **Format:** `Tab delimited` (`.txt`)
4. **Name:** `Panel_Load_Summary.txt`
5. **Save**

**Paso 2: Abrir en Excel**

1. Excel → **Data** → **From Text/CSV**
2. Seleccionar `Panel_Load_Summary.txt`
3. Delimiter: **Tab**
4. **Load**

**Paso 3: Análisis Avanzado**

En Excel:
- Crear **Pivot Tables** (ej. Total VA por nivel)
- **Charts** (gráfico de utilization por panel)
- **Conditional Formatting** adicional
- Fórmulas personalizadas

## Mejores Prácticas

### 1. Consistencia en Load Names

**Nomenclatura estándar:**
- `[Space] - [Load Type] - [Zone] - [Details]`
- Ejemplo: `Office - Lighting - East Wing - 20 Fixtures`

**Evitar:**
- `Circuit 1`
- `Lights`
- Nombres genéricos

### 2. Demand Factors Documentados

**En Load Name o Comments, indicar DF:**
- `Receptacles Zone 1 (50% DF per NEC 220.44)`

**Transparencia** para revisores e inspectores.

### 3. Actualizar Schedules Regularmente

**Durante diseño:**
- Agregar circuitos → Panel Schedule actualiza automáticamente
- **Siempre verificar** Panel Schedule antes de emitir planos

**Evitar:** Panel Schedules desactualizados (discrepancia con modelo).

### 4. Reservar Spare Circuits

**En Panel Schedule:**
- Agregar filas para circuitos spare (vacíos)
- Breaker size definido, pero Load Name = `Spare`

**Beneficio:** Documentar capacidad futura disponible.

## Ejercicio Aplicado

**Ver:** Ejercicio 1 en `ejercicios.md` - Generar panel schedules completos para 5 panelboards, crear circuit schedule de edificio completo y analizar utilization.

---

**Próxima Lección:** Diagramas Unifilares y Símbolos - Single line diagrams según IEEE/ANSI.
