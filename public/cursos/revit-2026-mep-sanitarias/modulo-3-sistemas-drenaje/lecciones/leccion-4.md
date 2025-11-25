# Lección 4: Dimensionamiento y Documentación de Drenaje

## Introducción

El **dimensionamiento correcto** de drainage systems garantiza capacidad suficiente para manejar flujos pico, evita backups, cumple códigos IPC/UPC, y optimiza costos de materiales. Esta lección integra todos los conceptos previos del módulo: fixture units (DFU), slopes, venting, y storm drainage, cubriendo métodos completos de sizing, tablas de capacidad, schedules profesionales en Revit, coordinación estructural para penetraciones, clash detection, y documentación final.

## Métodos de Dimensionamiento Completo

### Método DFU para Sanitary Drainage

**Proceso sistemático:**

**Paso 1: Inventory de Fixtures**

Crear tabla de todos los fixtures en el edificio con DFU values.

**Ejemplo - Edificio comercial 3 pisos:**

| Piso | Fixture | Cantidad | DFU/unit | DFU Total |
|------|---------|----------|----------|-----------|
| 1 | WC (flush valve) | 6 | 6 | 36 |
| 1 | Urinal (flush valve) | 3 | 4 | 12 |
| 1 | Lavabo | 8 | 1 | 8 |
| 1 | Floor drain | 2 | 2 | 4 |
| 2 | WC (flush valve) | 6 | 6 | 36 |
| 2 | Lavabo | 8 | 1 | 8 |
| 3 | WC (flush valve) | 6 | 6 | 36 |
| 3 | Lavabo | 8 | 1 | 8 |
| **Total** | | **47** | | **148 DFU** |

**Paso 2: Sizing de Branch Drains**

**IPC Table 703.2 - Horizontal Fixture Branches:**

**Para slope 1/4" per foot:**

| Pipe Diameter | Max DFU |
|---------------|---------|
| 1-1/2" | 3 |
| 2" | 6 |
| 2-1/2" | 12 |
| 3" | 20 |
| 4" | 160 |
| 5" | 360 |
| 6" | 620 |

**Ejemplo - Branch drain Piso 1 (Restroom con 6 WC + 3 Urinal + 8 Lavabo):**
```
DFU branch = 36 + 12 + 8 = 56 DFU

Tabla IPC 703.2 (1/4" slope):
4" pipe = max 160 DFU → OK

Branch drain Piso 1: 4"
```

**Paso 3: Sizing de Soil/Waste Stacks**

**IPC Table 710.1(1) - Size of Vertical Stacks:**

| Stack Diameter | Max DFU (más de 3 pisos) |
|----------------|--------------------------|
| 2" | 8 |
| 2-1/2" | 24 |
| 3" | 48 |
| 4" | 240 |
| 5" | 540 |
| 6" | 960 |
| 8" | 2,200 |

**Ejemplo - Stack principal (todos 3 pisos conectados):**
```
DFU stack = 148 DFU total

Tabla IPC 710.1(1):
4" stack = max 240 DFU → OK

Soil stack: 4"
```

**Importante:** Stack diameter **NO puede reducirse** en dirección de flujo (puede mantenerse o crecer hacia abajo).

**Paso 4: Sizing de Building Drain**

**IPC Table 710.1(2) - Size of Building Drains and Sewers:**

**Para slope 1/4" per foot:**

| Pipe Diameter | Max DFU |
|---------------|---------|
| 3" | 42 |
| 4" | 216 |
| 5" | 480 |
| 6" | 840 |
| 8" | 1,920 |
| 10" | 3,500 |

**Ejemplo:**
```
DFU building = 148 DFU

Tabla IPC 710.1(2) (1/4" slope):
4" pipe = max 216 DFU → OK

Building drain: 4"
```

### Slope Impact en Capacity

**Mayor slope → Mayor capacity.**

**IPC Table 710.1(2) - Building Drain @ Different Slopes:**

**4" pipe capacity:**
- @ 1/8" per ft: **180 DFU**
- @ 1/4" per ft: **216 DFU**
- @ 1/2" per ft: **250 DFU**

**Trade-off:**
- Mayor slope requiere más drop vertical (menos clearance)
- Slope excesiva puede separar water de sólidos

**Óptimo:** 1/4" per ft (balance).

## Máxima Carga Permitida

### Diversidad en Uso de Fixtures

**NO todos los fixtures operan simultáneamente** (excepto eventos extremos).

**DFU method ya incorpora diversity:**
- Tablas IPC basadas en probabilidad estadística
- 100 fixtures con 1 DFU cada uno ≠ 100 DFU simultáneos
- **Demand factor implícito** en tablas

**Ejemplo:**
```
100 fixtures × 1 DFU = 100 DFU total

Pero demanda real simultánea ≈ 45 DFU (tabla E103.3)
```

**Resultado:** Pipe sizing conservador pero no excesivo.

### Safety Margins

**Best practices:**

1. **Fixture count increase:**
   - Si edificio puede expandirse, agregar 20% DFU extra
   - Ejemplo: 148 DFU → Size para 180 DFU

2. **Avoid maxing out:**
   - Si cálculo da 210 DFU y 4" pipe = 216 max
   - **Considerar 5" pipe** (safety margin)

3. **Critical areas:**
   - Hospitales, laboratorios → Size conservadoramente
   - Residencial típico → Sizing estándar suficiente

## Slopes Mínimas y Máximas

### IPC 704.1 - Slope Requirements (Resumen)

**Sanitary drainage:**

| Pipe Diameter | Min Slope | Recommended Slope | Max Slope |
|---------------|-----------|-------------------|-----------|
| ≤ 2-1/2" | 1/4" per ft | 1/4" per ft | 3" per ft* |
| 3" - 6" | 1/8" per ft | 1/4" per ft | 3" per ft* |
| ≥ 8" | 1/16" per ft** | 1/8" per ft | 3" per ft* |

*No especificado rígidamente, evitar > 45° (100%).
**Pipes grandes pueden usar menos slope por alta capacidad.

**Storm drainage:**
- Mínimo 1/8" per ft (todas sizes)
- Recomendado 1/4" per ft

### Verification de Slope en Revit

**Procedure:**

1. **Select drainage pipe segment**
2. **Properties:**
   - **Slope:** Verificar valor (ej. 0.02083 = 1/4" per ft)
3. Si slope < mínimo → **Adjust routing**

**Section View Check:**
1. Create section cutting through drainage pipes
2. Visually verify **continuous downward slope**
3. NO flat sections, NO reverse slopes

**Revit 2026 - Slope Checker Tool:**
1. **Analyze** → **Check Slopes**
2. Revit highlights pipes con slope below code minimum
3. **Report** lists violaciones con ubicaciones

## Materiales de Tubería - Selección

### Comparación de Materiales

| Material | Ventajas | Desventajas | Aplicación Típica |
|----------|----------|-------------|-------------------|
| **PVC Schedule 40** | Bajo costo, ligero, no corroe, smooth | Ruidoso, max temp 140°F | Residencial, comercial bajo-ruido OK |
| **PVC DWV** | Muy económico | Muy ruidoso, solo 0 psi | Residencial budget |
| **Cast Iron** | Silencioso, fire resistant, durable | Pesado, caro, instalación lenta | Comercial, multi-family, hospitales |
| **ABS** | Impact resistant, frío OK | NO permitido en algunas áreas | Residencial (donde legal) |
| **Copper DWV** | Durable, no ruido | MUY caro | Histórico/premium |

### Cuando Usar Cast Iron

**Recomendado para:**

1. **Multi-family buildings:**
   - Sound transmission concern
   - Cast iron absorbe ruido de agua drenando

2. **Comercial buildings:**
   - Hospitales (crítico silencio)
   - Hoteles, condominios

3. **Stacks dentro de walls:**
   - Entre unidades residenciales
   - Áreas ocupadas

**PVC aceptable:**
- Single-family homes
- Industrial buildings
- Budget projects
- Exterior piping (downspouts)

### Transiciones de Material

**Cast iron stack + PVC branches:**

**Común:** Stack principal en cast iron (silencio), branches en PVC (costo).

**Fittings de transición:**
- No-hub coupling adapters (cast iron to PVC)
- Fernco couplings (flexible rubber)

**IPC permite** transiciones si properly joined.

## Schedules de Sanitary Piping en Revit

### Crear Sanitary Pipe Schedule

**Paso 1: New Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. **Category:** `Pipes`
3. **Name:** `Sanitary Pipe Schedule`
4. **OK**

**Paso 2: Filter por System**

1. **Filter** tab
2. **Filter by:** `System Type` **equals** `Sanitary`
3. Esto excluye storm, water supply, etc.

**Paso 3: Agregar Fields**

**Available Fields → Scheduled Fields:**

- **System Type** (Sanitary)
- **Size** (diameter)
- **Length** (por segment)
- **Material** (PVC, Cast Iron)
- **Slope** (1/4" per ft, etc.)
- **Level** (ubicación vertical)
- **From Fixture** (inicio)
- **To Fixture/Equipment** (destino)

**Paso 4: Sorting/Grouping**

- **Sort by:** `System Type`, luego `Level`, luego `Size`
- **Grand totals:** ☑ (para Length - material takeoff)
- **Itemize every instance:** ☑

**Paso 5: Formatting**

- **Length:** Calculate totals ☑
- **Size:** Header text: `Pipe Diameter`
- **Slope:** Format: Number, precision 4 decimals

**Resultado:**

| Level | System | Size | Slope | Material | Length (ft) | From | To |
|-------|--------|------|-------|----------|-------------|------|-----|
| **Level 1** | Sanitary | 4" | 0.0208 | PVC Sch 40 | 85.5 | WC-1 | Stack-1 |
| Level 1 | Sanitary | 3" | 0.0208 | PVC | 42.3 | Lav-2 | Branch-1 |
| **Level 1 Total** | | | | | **127.8** | | |
| **Level 2** | Sanitary | 4" | 0.0208 | Cast Iron | 90.2 | WC-10 | Stack-1 |
| **Grand Total** | | | | | **745.3** | | |

**Uso:**
- Material takeoff (ordering pipes)
- Verification de sizes
- Documentación para submittal

### Storm Drainage Schedule

**Similar process:**

1. **Filter by:** `System Type` **equals** `Storm Drainage`
2. **Additional Fields:**
   - **Flow (gpm)** - Revit calcula si configurado
   - **Rainfall Intensity** - Custom parameter
3. **Sorting:** Por descending flow (largest first)

## Coordinación con Structural

### Penetraciones de Drainage Pipes

**Drainage pipes atraviesan:**
- Floors (vertical stacks)
- Beams (horizontal branches)
- Foundations (building drain exit)

### Sleeves y Core Drilling

**Sleeve = Tubería protectora** alrededor de pipe donde atraviesa estructura.

**Función:**
- Protege pipe de movimiento estructural
- Permite reemplazo de pipe sin demoler concrete
- Fireproofing (en algunos casos)

**Sizing:**
```
Sleeve diameter = Pipe diameter + 2" (mínimo)

Ejemplo:
4" waste pipe → 6" sleeve mínimo
```

**Materiales:**
- PVC pipe (sleeve)
- Steel pipe (más robusto)
- Fernco sleeves (con rubber gasket)

### Beam Penetrations - Limitaciones

**Structural beams NO pueden perforarse en cualquier ubicación.**

**Zonas críticas (evitar):**
- Top/bottom flanges (esfuerzo máximo)
- Cerca de apoyos

**Zonas permitidas:**
- Centro del web (alma)
- Limitado a **1/3 beam depth** (hole diameter)

**Coordinación:**
1. Structural engineer especifica **allowable penetration zones**
2. MEP routing respeta restricciones
3. **Clash detection** en Revit verifica

### Revit Coordination - Copy/Monitor

**Proceso:**

**Paso 1: Link Structural Model**

1. **Insert** → **Link Revit**
2. Select structural .rvt file
3. **Positioning:** Auto - Origin to Origin

**Paso 2: Copy/Monitor Structural Elements**

1. **Collaborate** → **Copy/Monitor** → **Select Link**
2. **Copy:** Floors, beams críticos
3. **Monitor:** Cambios en structural model

**Paso 3: Coordination Review**

1. **Collaborate** → **Coordination Review**
2. **Run Interference Check:**
   - Categories: Pipes vs Structural Framing
   - Tolerance: 0" (hard clashes)
3. **Results:** Lista de intersecciones

**Paso 4: Resolver Clashes**

**Opciones:**

1. **Re-route pipe** (evitar beam)
2. **Coordinate penetration location** con structural engineer
3. **Use sleeves** en penetraciones aprobadas

### Clash Detection - Sanitary vs Other Systems

**Common clashes:**

**Sanitary vs Ductwork:**
- Ambos requieren large clearances
- Ductwork más flexible en routing

**Resolución:** Priorizar drainage (gravity-fed, requiere slope), route duct alrededor.

**Sanitary vs Electrical conduit:**
- Conduit puede re-route fácilmente

**Resolución:** Move conduit.

**Sanitary vs Water Supply:**
- Ambos pipes

**Resolución:** Offset water supply (más pequeño, más flexible).

## Documentación Final

### Plumbing Plans

**Floor Plans - Sanitary:**

**Contenido:**
- Drainage pipes con sizes
- Fixtures con tags (W-1, LAV-2, etc.)
- Cleanouts
- Stacks (shown en cada floor)
- Slopes indicadas con arrows
- Notes: "4\" PVC SCH 40 @ 1/4\" PER FT SLOPE"

**Enlarged Plans:**
- Restrooms (scale 1/4" = 1'-0")
- Mechanical rooms
- Detalle de connections

### Riser Diagrams

**Definición:** Diagramas verticales mostrando stacks y connections por piso.

**Crear en Revit:**

1. **View** → **Drafting View**
2. **Name:** `Sanitary Riser Diagram - Stack 1`
3. **Dibujar schematically:**
   ```
   Roof (vent termination)
        ↑
        │ 4" Stack Vent
        │
   Piso 3 ──┤ 4" Branch (60 DFU)
        │
   Piso 2 ──┤ 4" Branch (56 DFU)
        │
   Piso 1 ──┤ 4" Branch (56 DFU)
        │
        ↓
   Building Drain (4", 148 DFU total)
   ```

**Annotate:**
- Pipe sizes en cada segmento
- DFU acumulados
- Elevations (inverts)
- Floor levels

### Isometric Drawings

**Función:** Mostrar 3D routing de piping.

**Revit puede generar:**

1. **View** → **Isometric View**
2. **Orient:** Hacia stack o branch específico
3. **Visibility/Graphics:**
   - Show solo Sanitary system
   - Hide otros systems
4. **Export to Sheet**

**Útil para:**
- Fabrication en shop
- Field installation reference
- Clarity en routing complejo

### Specifications

**Document escrito (además de drawings).**

**Contenido típico:**

**Section 22 40 00 - Plumbing Fixtures:**
- Fixture types, manufacturers
- Performance specs

**Section 22 10 00 - Plumbing Piping:**
- Materials (PVC Schedule 40, Cast Iron Service Weight)
- Joining methods (solvent weld, no-hub)
- Insulation (si aplica)
- Testing requirements (water test, air test)

**Section 22 05 00 - General Plumbing:**
- Codes referenced (IPC 2021)
- Submittals required
- Warranties

### Submittals

**Documentos entregados para approval:**

1. **Product Data:**
   - Cut sheets de fixtures
   - Pipe manufacturer specs

2. **Shop Drawings:**
   - Fabrication drawings de custom assemblies

3. **Schedules:**
   - Fixture schedule
   - Pipe schedule

4. **Calculations:**
   - DFU sizing calculations
   - Storm drainage rainfall calculations

5. **Test Reports:**
   - Pressure/leak tests
   - Inspections

## Ejercicio Aplicado

**Ver:** Ejercicio 4 en `ejercicios.md` - Dimensionar sistema completo de drainage (sanitary + storm) para edificio comercial de 4 pisos, calcular DFU acumulados, size todos los pipes, crear schedules, coordinate con structural model, detectar clashes, generar documentación final (plans, riser diagrams, isometrics, specs).

---

**Próxima Lección (Módulo 4):** Sistemas Especiales y Documentación - Fire protection systems (sprinklers), gas piping, coordinación multidisciplinaria MEP, exportación para fabricación.
