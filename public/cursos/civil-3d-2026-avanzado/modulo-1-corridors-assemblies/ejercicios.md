# Ejercicios Prácticos - Módulo 1: Corridors y Assemblies

**Curso:** Autodesk Civil 3D 2026 - Avanzado
**Módulo:** 1 - Corridors y Assemblies - Diseño Avanzado de Carreteras
**Duración total:** 8 horas de práctica
**Nivel:** Avanzado

---

## Descripción General

Este documento contiene los **6 ejercicios prácticos** del Módulo 1, diseñados para reforzar los conceptos avanzados de corridors y assemblies. Los ejercicios son **progresivos** - cada uno construye sobre el anterior, culminando en un proyecto completo de carretera de 5 km con intersección.

**Entregables finales:**
- Drawings (.dwg) de cada ejercicio
- Assemblies personalizados
- Corridor completo con múltiples regions, targets, surfaces
- Feature lines extraídas
- Reportes de cantidades
- Screenshots documentados

**Requisitos previos obligatorios:**
- Civil 3D 2026 instalado
- Dominio de Civil 3D Básico (Módulos 1-6)
- Dataset de proyecto (descargable desde plataforma LMS):
  - `Highway-Project-Base.dwg` - Drawing con alignment, profile, surface EG
  - `Assembly-Library.dwg` - Biblioteca de assemblies de referencia

---

## Dataset del Proyecto

**Archivo base:** `Highway-Project-Base.dwg`

**Contenido:**
- **Alignment:** `Centerline-Highway` (5.0 km, estaciones 0+000 a 5+000)
- **Profile:** `FG-Highway` (finished grade, diseño vertical completo)
- **Surface:** `EG` (Existing Ground, terreno natural con levantamiento topográfico)
- **Coordinate System:** UTM Zone 19N, WGS84 (Venezuela)
- **Units:** Metric (metros)

**Geometría del alignment:**
- 0+000 a 1+500: Tangente inicial
- 1+500 a 2+000: Curva circular R=500m (derecha)
- 2+000 a 3+500: Tangente intermedia
- 3+500 a 4+000: Curva circular R=400m (izquierda)
- 4+000 a 5+000: Tangente final

**Profile characteristics:**
- Elevación inicial (0+000): 120.00 m
- Elevación final (5+000): 135.00 m
- Pendiente promedio: +0.3%
- Curvas verticales en stations 1+250, 2+750, 4+200

---

## Ejercicio 1: Assemblies y Subassemblies Avanzados

**Lección:** 1 - Assemblies y Subassemblies
**Duración:** 90 minutos
**Dificultad:** Intermedia

### Objetivos

- Crear assembly completo de carretera de 2 carriles con subassemblies estándar
- Configurar parámetros de subassemblies (anchos, pendientes, taludes)
- Aplicar code set styles y verificar point codes/link codes
- Crear assembly variations para diferentes secciones (rural vs urbana)

### Instrucciones

#### Parte 1: Assembly Rural de 2 Carriles

**Especificaciones de diseño:**
- Carretera interurbana primaria
- Velocidad de diseño: 80 km/h
- 2 carriles de 3.50 m cada uno
- Bermas pavimentadas de 2.00 m
- Taludes 2:1 (corte y relleno)
- Cuneta en corte: 1.20 m ancho, 0.30 m profundidad

**Tareas:**

1. **Abrir drawing base:**
   - Open `Highway-Project-Base.dwg`
   - Save As: `Ejercicio1-Assemblies.dwg`

2. **Create Assembly:**
   - Command: `CREATEASSEMBLY`
   - **Name:** `Highway-2L-Rural-2mShoulder`
   - **Description:** "Carretera 2 carriles, V=80km/h, bermas 2.0m, taludes 2:1, cuneta en corte"
   - **Code Set Style:** All Codes
   - **Assembly Style:** Basic
   - **Placement:** Click en espacio vacío (coordenadas aproximadas: 1000, 1000)

3. **Añadir subassemblies - Lado Derecho:**

   **a) BasicLane (Carril Derecho):**
   - Tool Palette → **Civil Metric** → **Basic** → **BasicLane**
   - Properties:
     - Side: **Right**
     - Width: **3.50** m
     - Depth: **0.20** m (20 cm pavimento)
     - Slope: **-2.0** % (drena hacia afuera)
   - Attach to: **Baseline point** (centro del assembly)

   **b) BasicShoulder (Berma Derecha):**
   - Tool Palette → **BasicShoulder**
   - Properties:
     - Side: **Right**
     - Width: **2.00** m
     - Depth: **0.15** m (berma pavimentada, espesor reducido)
     - Slope: **-4.0** % (mayor pendiente para drenaje)
   - Attach to: **Edge of right lane** (borde del carril)

   **c) BasicSideSlopeCutDitch (Talud Derecho):**
   - Tool Palette → **BasicSideSlopeCutDitch**
   - Properties:
     - Side: **Right**
     - Cut Slope: **2.00** (2:1)
     - Fill Slope: **2.00** (2:1)
     - Foreslope: **4.00** (cuneta suave 4:1)
     - Backslope: **2.00** (cuneta moderada 2:1)
     - Ditch Width: **1.20** m
     - Ditch Depth: **0.30** m
   - Attach to: **Edge of right shoulder**

4. **Añadir subassemblies - Lado Izquierdo:**

   Repetir pasos 3a, 3b, 3c para lado izquierdo:
   - BasicLane: Side **Left**, Width 3.50m, Depth 0.20m, Slope -2.0%
   - BasicShoulder: Side **Left**, Width 2.00m, Depth 0.15m, Slope -4.0%
   - BasicSideSlopeCutDitch: Side **Left**, Cut/Fill 2:1, Ditch 1.20×0.30m

5. **Verificar Assembly:**
   - Zoom Extents al assembly
   - **Visual check:** Simetría perfecta, sin gaps entre subassemblies
   - Select assembly → **Assembly Properties**
   - **Construction tab:**
     - Debe listar **6 subassemblies** (3 por lado)
   - **Codes tab:**
     - Verifica point codes: Crown, Pave, ETW, Daylight, Datum
     - Verifica link codes: Top, Pave, Base, Datum

6. **Screenshot 1:**
   - Captura assembly completo en vista plana (plan view)

#### Parte 2: Assembly Urbano con Bordillo y Acera

**Especificaciones:**
- Sección urbana de la misma carretera
- 2 carriles de 3.00 m (reducidos, velocidad urbana 50 km/h)
- Bermas de 0.50 m (reducidas)
- Bordillo vertical (UrbanCurb) 15 cm altura
- Acera de 1.50 m
- Talud 3:1 (más suave, zona urbana)

**Tareas:**

7. **Create segundo assembly:**
   - Name: `Highway-2L-Urban-Curb-Sidewalk`
   - Description: "Sección urbana 2 carriles, V=50km/h, bordillo, acera 1.50m, taludes 3:1"
   - Placement: Alejado del primer assembly (coordenadas aprox: 1050, 1000)

8. **Subassemblies - Lado Derecho:**

   **a) BasicLane:**
   - Width: **3.00** m (reducido)
   - Depth: **0.18** m
   - Slope: **-2.0** %

   **b) BasicShoulder:**
   - Width: **0.50** m (berma urbana mínima)
   - Depth: **0.15** m
   - Slope: **-3.0** %

   **c) UrbanCurb:**
   - Tool Palette → **Curbs** → **UrbanCurb**
   - Properties:
     - Side: **Right**
     - Curb Height: **0.15** m (15 cm)
     - Gutter Width: **0.30** m (integral curb and gutter)
     - Gutter Slope: **-4.0** %
   - Attach to: **Edge of shoulder**

   **d) UrbanSidewalk:**
   - Tool Palette → **Lanes** → **UrbanSidewalk**
   - Properties:
     - Side: **Right**
     - Width: **1.50** m
     - Depth: **0.10** m (10 cm concreto de acera)
     - Slope: **-2.0** % (drenaje transversal)
   - Attach to: **Back of curb** (punto de atrás del bordillo)

   **e) LinkToSurface:**
   - Tool Palette → **Basic** → **LinkToSurface**
   - Properties:
     - Side: **Right**
     - Cut Slope: **3.00** (3:1, más suave que rural)
     - Fill Slope: **3.00**
     - Maximum Offset: **20.00** m
   - Attach to: **Edge of sidewalk**

9. **Subassemblies - Lado Izquierdo:**
   - Repetir paso 8 para lado izquierdo (simetría)

10. **Verificar Assembly Urbano:**
    - Assembly Properties → Construction tab → **10 subassemblies** (5 por lado)
    - Codes tab → Verifica códigos adicionales: Back_Curb, Top_Curb

11. **Screenshot 2:**
    - Captura assembly urbano completo

#### Parte 3: Comparación y Documentación

12. **Crear tabla comparativa:**

| Elemento | Assembly Rural | Assembly Urbano |
|----------|----------------|-----------------|
| Ancho de carril | 3.50 m | 3.00 m |
| Ancho de berma | 2.00 m | 0.50 m |
| Pendiente de berma | -4.0% | -3.0% |
| Bordillo | No | Sí (UrbanCurb 15cm) |
| Acera | No | Sí (1.50m) |
| Talud | 2:1 | 3:1 |
| Cuneta | Sí (1.20×0.30m) | No (cuneta integral con bordillo) |
| **Ancho total aprox** | ~15 m (con taludes) | ~18 m (con aceras y taludes) |

13. **Save Assembly Library:**
    - Save drawing as: `Ejercicio1-Assembly-Library.dwg`
    - Este drawing será tu biblioteca de assemblies para ejercicios posteriores

### Entregables Ejercicio 1

- **Drawing:** `Ejercicio1-Assemblies.dwg` y `Ejercicio1-Assembly-Library.dwg`
- **Screenshot 1:** Assembly Rural completo (6 subassemblies)
- **Screenshot 2:** Assembly Urbano completo (10 subassemblies)
- **Screenshot 3:** Assembly Properties - Construction tab de assembly rural
- **Screenshot 4:** Assembly Properties - Codes tab mostrando point codes y link codes
- **Tabla comparativa:** (en documento Word o PDF)

### Criterios de Evaluación

- **Assembly Rural correctamente configurado:** 40 puntos
  - Subassemblies correctos: 20 pts
  - Parámetros según especificaciones: 15 pts
  - Simetría y sin gaps: 5 pts

- **Assembly Urbano correctamente configurado:** 40 puntos
  - Subassemblies correctos (incluyendo UrbanCurb, UrbanSidewalk): 20 pts
  - Parámetros según especificaciones: 15 pts
  - Simetría: 5 pts

- **Documentación:** 20 puntos
  - Screenshots claros y completos: 10 pts
  - Tabla comparativa precisa: 10 pts

**Total:** 100 puntos

---

## Ejercicio 2: Corridor Modeling Básico

**Lección:** 2 - Corridor Modeling Básico
**Duración:** 90 minutos
**Dificultad:** Intermedia

### Objetivos

- Crear corridor aplicando assembly a alignment y profile
- Configurar baseline and region parameters
- Establecer frequency optimization
- Aplicar surface target (EG)
- Visualizar corridor en 2D/3D y usar Section Editor

### Instrucciones

#### Parte 1: Create Corridor Inicial

1. **Abrir proyecto:**
   - Open `Highway-Project-Base.dwg`
   - Save As: `Ejercicio2-Corridor-Basic.dwg`

2. **Verify requisitos previos:**
   - Prospector → Alignments → Debe existir: **Centerline-Highway**
   - Prospector → Alignments → Centerline-Highway → Profiles → Debe existir: **FG-Highway**
   - Prospector → Surfaces → Debe existir: **EG**

3. **Import assembly:**
   - File → **Import** → **Import Assemblies**
   - Browse → Select `Ejercicio1-Assembly-Library.dwg`
   - Select assembly: **Highway-2L-Rural-2mShoulder**
   - **OK**

4. **Create Corridor:**
   - Home tab → Create Design → **Corridor**
   - **Create Corridor dialog:**
     - **Name:** `Corridor-Highway-MainLine`
     - **Description:** "Corridor principal carretera 5 km, sección rural, Ejercicio 2"
     - **Corridor Style:** Basic
     - **Alignment:** Centerline-Highway
     - **Profile:** FG-Highway
     - **Assembly:** Highway-2L-Rural-2mShoulder
     - **Target Surface:** EG
     - **☑ Set Baseline and Region Parameters** (checked)
     - **Corridor Layer:** C-ROAD-CORR
   - **OK**

#### Parte 2: Configure Frequency

5. **Baseline and Region Parameters dialog:**

   **Baseline:** (auto-generado)
   - Name: Centerline-Highway

   **Region:** (auto-generado)
   - Name: `RG - Highway-2L-Rural-2mShoulder`
   - Start Station: **0+000**
   - End Station: **5+000** (auto-detectado del alignment)
   - Assembly: Highway-2L-Rural-2mShoulder

6. **Frequency tab (configurar):**
   - **Along Tangents:** `25.00` m
   - **Along Spirals:** `12.50` m (N/A si no hay espirales)
   - **Along Curves:** `12.50` m
   - **☑ Horizontal Geometry Points** (checked)
   - **☑ Profile Geometry Points** (checked)
   - **☑ Profile Curve High/Low Points** (checked)
   - **☐ Superelevation Critical Points** (unchecked, no aplicamos peralte en este ejercicio)
   - **☐ Offset Target Geometry Points** (unchecked)

7. **Targets tab (configurar):**
   - **Surfaces:** Click en celda → **Pick from drawing**
   - **Add** → Select surface: **EG**
   - **OK**
   - Tabla debe mostrar: `Surfaces | EG`

8. **OK (crear corridor):**
   - Civil 3D procesa (15-30 segundos)
   - Command line output: Debe mostrar número de secciones creadas (aprox. 200-250)

#### Parte 3: Visualización y Verificación

9. **Plan View (vista en planta):**
   - Zoom Extents (`Z` `E` Enter)
   - Corridor visible con bordes (daylight lines)
   - Screenshot 1: Plan view del corridor completo

10. **3D View:**
    - View tab → Views → **SW Isometric**
    - View tab → Visual Styles → **Realistic**
    - Orbit para rotar vista (click y arrastra)
    - Observa:
      - Superficie de pavimento
      - Taludes a ambos lados
      - Transiciones entre corte (cut) y relleno (fill)
    - Screenshot 2: Vista 3D isométrica del corridor

11. **Section Editor:**
    - Select corridor → Right-click → **Edit Corridor Section**
    - **Section Editor window:**
      - Navigate a station: Type `0+500` + Enter
      - Observa sección transversal en 0+500
      - Identifica:
        - Carril derecho e izquierdo (3.50 m cada uno)
        - Bermas (2.00 m)
        - Taludes hasta daylight (intersección con EG)
      - Screenshot 3: Section Editor en station 0+500

    - Navigate a station en curva: Type `1+750` + Enter (dentro de curva R=500m)
      - Observa diferencias respecto a 0+500
      - Screenshot 4: Section Editor en station 1+750 (curva)

    - Navigate a station en corte: Type `3+000` + Enter
      - Observa cuneta visible (si la sección está en corte)
      - Si está en relleno, cuneta NO aparece (comportamiento correcto de BasicSideSlopeCutDitch)

#### Parte 4: Edit Frequency y Rebuild

12. **Modify frequency para mayor detalle:**
    - Corridor Properties → Parameters tab
    - Expand baseline → Expand region → Right-click → **Edit Region**
    - **Frequency tab:**
      - Along Tangents: Cambiar de 25 m a **15 m** (más denso)
      - Along Curves: Cambiar de 12.5 m a **8 m** (aún más denso en curvas)
    - **OK**

13. **Rebuild y observar:**
    - Corridor rebuild automáticamente (si Automatic ON)
    - Command line: Número de secciones debe **aumentar** (aprox. 300-350)
    - Observa que corridor se ve "más suave" en curvas (más secciones = mejor definición)

14. **Revertir frequency (optimization):**
    - Edit Region nuevamente
    - Frequency:
      - Along Tangents: **25 m** (revertir)
      - Along Curves: **12.5 m** (revertir)
    - **OK**
    - **Razón:** Balance entre precisión y performance

### Entregables Ejercicio 2

- **Drawing:** `Ejercicio2-Corridor-Basic.dwg`
- **Screenshot 1:** Plan view del corridor completo (0+000 a 5+000)
- **Screenshot 2:** Vista 3D isométrica del corridor (Realistic visual style)
- **Screenshot 3:** Section Editor en station 0+500 (tangente)
- **Screenshot 4:** Section Editor en station 1+750 (curva)
- **Screenshot 5:** Corridor Properties - Frequency tab mostrando configuración final
- **Reporte breve:**
  - Número de secciones generadas (con frequency 25m tangentes)
  - Número de secciones con frequency 15m tangentes (antes de revertir)
  - Observaciones: ¿En qué estaciones está en corte vs relleno?

### Criterios de Evaluación

- **Corridor creado correctamente:** 40 puntos
- **Frequency configurado apropiadamente:** 20 puntos
- **Surface target asignado:** 10 puntos
- **Screenshots claros mostrando 2D, 3D, sections:** 20 puntos
- **Reporte con análisis de frequency y cut/fill:** 10 puntos

**Total:** 100 puntos

---

## Ejercicio 3: Targets y Offset Alignments

**Lección:** 3 - Targets y Offset Alignments
**Duración:** 120 minutos
**Dificultad:** Avanzada

### Objetivos

- Crear offset alignment para intersección o ramal
- Generar profile from surface para offset alignment
- Configurar width/offset targets en corridor
- Modelar multi-baseline corridor (simulación de intersección simple)
- Resolver target conflicts

### Instrucciones

#### Parte 1: Create Offset Alignment

1. **Abrir drawing:**
   - Continue desde `Ejercicio2-Corridor-Basic.dwg`
   - Save As: `Ejercicio3-Corridor-Targets.dwg`

2. **Create Offset Alignment (borde derecho de calzada):**
   - Home tab → Create Design → **Alignment** → **Create Offset Alignment**
   - **Select parent alignment:** Click en `Centerline-Highway` (en plan view)
   - **Create Offset Alignment dialog:**
     - **Alignment Name:** `Offset-Right-ETW`
     - **Description:** "Borde derecho de calzada (ETW), offset +3.50m desde centerline"
     - **Alignment Type:** Offset
     - **Offset Side:** Right
     - **Offset Distance:** `3.50` m (la mitad del ancho de 2 carriles = 7.00 / 2)
     - **Alignment Style:** (default)
     - **Alignment Layer:** C-ROAD-ALGN-OFFSET
   - **OK**

3. **Verify offset alignment:**
   - Zoom to corridor
   - Offset alignment debe aparecer como línea paralela al centerline, 3.50 m a la derecha

4. **Create Profile from Surface para Offset:**
   - Select offset alignment → Right-click → **Create Profile View**
   - **Profile View Name:** `PV - Offset-Right-ETW`
   - Station range: Full (0+000 a 5+000)
   - **Create Profile View**

5. **Profile from Surface:**
   - En el profile view creado, ribbon contextual → **Profile from Surface**
   - **Surface:** EG
   - **Profile name:** `EG-Offset-Right`
   - **Profile style:** (default)
   - **Add to profile view:** ✓
   - **Create**

#### Parte 2: Configure Offset Target en Corridor

**NOTA:** En ejercicio académico, simularemos uso de offset alignment como target. En proyecto real, esto sería para ensanchamiento variable o carril auxiliar.

6. **Modify Assembly (opcional - para demostrar width target):**

   **Opción A (simplificada):** Usar assembly existente sin modificar (targets aplicarán a LinkToSurface principalmente)

   **Opción B (avanzada - si quieres explorar):**
   - Crear assembly variant con **BasicLaneTransition** (en vez de BasicLane)
   - BasicLaneTransition permite width target
   - Complejo, skip por ahora si es primera vez con targets

7. **Configure Corridor Targets:**
   - Select corridor → **Corridor Properties**
   - **Parameters tab → Expand baseline → Expand region → Right-click → Edit Region**
   - **Targets tab:**

   **Current targets:**
   - Surfaces: EG (ya configurado)

   **Add Offset Target:**
   - **Width or Offset Targets:** Click en celda
   - **Pick from drawing** → **Add**
   - **Select alignment:** `Offset-Right-ETW`
   - **OK**

   **Tabla debe mostrar:**
   ```
   Surfaces           | EG
   Width/Offset       | Offset-Right-ETW
   ```

8. **Rebuild corridor:**
   - **OK** (cierra Edit Region)
   - Corridor rebuild
   - **NOTA:** En este ejercicio académico, el offset target no causará cambio visible (porque assembly no tiene subassembly que lo use activamente). **Propósito:** Aprender configuración de targets.

#### Parte 3: Simular Intersección con Multi-Baseline

**Objetivo:** Crear segundo baseline simulando un ramal (ramp) que sale del corridor principal.

9. **Create Ramp Alignment:**
   - Home tab → Create Design → **Alignment Creation Tools**
   - Toolbar Alignment → **Tangent-Tangent (With Curves)**
   - **Dibuja alignment:**
     - Start point: Aproximadamente en coordenadas cerca de station 2+500 del highway (offset derecho ~10 m)
     - Direction: Hacia la derecha (perpendicular al highway, simulando ramp de salida)
     - Length: ~300 m
   - **Create Alignment dialog:**
     - Name: `Ramp-Right-Exit`
     - Type: Centerline
     - **OK**

10. **Create Profile para Ramp:**
    - Create Profile View para `Ramp-Right-Exit`
    - **Profile from Surface:** EG → Name: `EG-Ramp-Right`
    - **Create Design Profile:**
      - Name: `FG-Ramp-Right`
      - **Layout tools:**
        - Inicia en elevación ~125.00 m (similar al highway en zona de salida)
        - Pendiente descendente -3.0% (ramp típica)
        - Longitud ~300 m
      - **Create Profile**

11. **Create Assembly para Ramp:**
    - **Create Assembly:**
      - Name: `Ramp-1Lane-3.5m`
      - Description: "Rampa 1 carril 3.5m, bermas 1.5m, taludes 2:1"
    - **Subassemblies:**
      - BasicLane: Width 3.50 m, Side Right (desde centerline hacia afuera)
      - BasicShoulder: Width 1.50 m, Side Right
      - LinkToSurface: Side Right, Cut/Fill 2:1
      - **Lado izquierdo:** Solo BasicShoulder (1.00 m) + LinkToSurface (sin carril completo, ramp es 1 sentido)

12. **Add Baseline to Corridor:**
    - **Corridor Properties** (de `Corridor-Highway-MainLine`)
    - **Parameters tab → Right-click en nombre del corridor (top level) → Add Baseline**
    - **Add Baseline dialog:**
      - **Baseline Type:** Alignment and Profile
      - **Alignment:** `Ramp-Right-Exit`
      - **Profile:** `FG-Ramp-Right`
      - **OK**

13. **Configure Ramp Region:**
    - Nuevo baseline aparece: `Ramp-Right-Exit`
    - Expand baseline → Region (auto-creada)
    - **Right-click region → Edit Region:**
      - **Assembly:** `Ramp-1Lane-3.5m`
      - **Frequency:**
        - Along Tangents: 15 m
        - Geometry Points: ✓
      - **Targets:**
        - Surfaces: EG
      - **OK**

14. **Rebuild y verificar:**
    - Corridor rebuild (ahora incluye 2 baselines: Highway + Ramp)
    - **3D View:** Observa ramp saliendo del highway principal
    - Screenshot 5: Vista 3D mostrando multi-baseline corridor (highway + ramp)

### Entregables Ejercicio 3

- **Drawing:** `Ejercicio3-Corridor-Targets.dwg`
- **Screenshot 1:** Plan view mostrando Centerline-Highway + Offset-Right-ETW
- **Screenshot 2:** Profile View de Offset-Right-ETW con EG-Offset-Right
- **Screenshot 3:** Corridor Properties - Targets tab mostrando Surfaces + Width/Offset targets
- **Screenshot 4:** Ramp alignment + profile en plan view
- **Screenshot 5:** Vista 3D isométrica mostrando corridor con 2 baselines (highway + ramp)
- **Reporte:**
  - Descripción de cómo el offset alignment se relaciona con el centerline
  - Explicación de multi-baseline corridor: ¿Cuántas baselines? ¿Cuántas regiones totales?

### Criterios de Evaluación

- **Offset alignment creado correctamente:** 20 puntos
- **Profile from surface para offset:** 15 puntos
- **Targets configurados en corridor:** 20 puntos
- **Multi-baseline corridor (highway + ramp):** 30 puntos
- **Screenshots y documentación:** 15 puntos

**Total:** 100 puntos

---

## Ejercicio 4: Corridor Surfaces

**Lección:** 4 - Corridor Surfaces
**Duración:** 90 minutos
**Dificultad:** Intermedia-Avanzada

### Objetivos

- Crear corridor surface de pavimento (Top)
- Crear corridor surface de sub-base (Datum)
- Aplicar boundaries automáticos (ETW, Daylight)
- Calcular volúmenes de materiales
- Aplicar slope analysis y watershed analysis
- Exportar corridor surface a LandXML

### Instrucciones

#### Parte 1: Create Corridor Surface - Pavimento

1. **Continue desde Ejercicio 3:**
   - Save As: `Ejercicio4-Corridor-Surfaces.dwg`

2. **Corridor Properties → Surfaces tab:**
   - Click en tab **Surfaces**

3. **Create Corridor Surface:**
   - Toolbar → **Create a corridor surface** (botón +)
   - **Create Corridor Surface dialog:**
     - **Name:** `Pavimento-Highway-Top`
     - **Description:** "Superficie de pavimento terminado (top) - Highway MainLine"
     - **Surface Style:** Contours 1m and 5m
   - **Add Data:**
     - **Add as Link:**
       - Click en celda "Specify Code"
       - **Link Code:** Selecciona `Top`
       - **OK**
     - Tabla muestra: `Link | Top`
   - **OK**

4. **Add Boundary a Pavimento:**
   - **Surfaces tab → Expand surface `Pavimento-Highway-Top`**
   - **Boundaries section → Right-click → Add...**
   - **Add Corridor Surface Boundary dialog:**
     - **Boundary Name:** `ETW-Boundary`
     - **Boundary Type:** From corridor feature line (seleccionado)
     - **Feature Line Code:**
       - Right-click en lista → **Add**
       - Dropdown → Selecciona **ETW** (Edge of Traveled Way)
       - **OK**
     - Lista muestra: `ETW | Right Side | Left Side`
   - **OK**

5. **Verify Pavimento Surface:**
   - Zoom to corridor
   - Superficie `Pavimento-Highway-Top` debe cubrir **solo área de pavimento** (dentro de ETW boundaries)
   - Taludes NO incluidos
   - Screenshot 1: Plan view mostrando corridor surface limitada a pavimento

#### Parte 2: Create Corridor Surface - Sub-Base Datum

6. **Create Datum Surface:**
   - Surfaces tab → **Create a corridor surface** (+)
   - **Name:** `SubBase-Highway-Datum`
   - **Description:** "Superficie datum - fondo de capa de pavimento"
   - **Surface Style:** Contours 1m and 5m
   - **Add Data:**
     - **Add as Link:**
       - Link Code: `Datum` (o `Base` si disponible)
       - **OK**
   - **OK**

7. **Add Boundary a Datum:**
   - Expand `SubBase-Highway-Datum`
   - Boundaries → Add
   - Boundary Type: From corridor feature line
   - Feature Line Code: **ETW**
   - **OK**

#### Parte 3: Calculate Volume de Pavimento

8. **Surface Properties - Pavimento:**
   - Prospector → Surfaces → `Pavimento-Highway-Top` → Right-click → **Surface Properties**
   - **Statistics tab:**
     - **2D Area:** Anotar valor (ej: 35,500 m²)
     - **Min Elevation / Max Elevation:** Anotar rango

9. **Cálculo manual de volumen:**
   - Espesor de pavimento: **0.20 m** (según assembly)
   - **Volumen aproximado = Área × Espesor**
   - Ejemplo: 35,500 m² × 0.20 m = **7,100 m³**
   - **Anotar resultado**

10. **Cálculo preciso con Composite Volumes (opcional avanzado):**
    - Analyze tab → Volumes → **Composite Volumes**
    - **Base Surface:** `SubBase-Highway-Datum`
    - **Comparison Surface:** `Pavimento-Highway-Top`
    - **OK**
    - Resultado: Volumen neto entre superficies (más preciso que manual)

#### Parte 4: Slope Analysis

11. **Slope Analysis en Pavimento:**
    - Select surface `Pavimento-Highway-Top`
    - **Surface Properties → Analysis tab**
    - **Analysis Type:** Slopes
    - **Scheme:** Green to Red
    - **Ranges:**
      - 0.0 - 1.5%: Rojo (insuficiente drenaje)
      - 1.5 - 2.5%: Verde (óptimo)
      - 2.5 - 4.0%: Amarillo (aceptable)
      - 4.0% +: Naranja (revisar)
    - **Create Ranges:** Automatic
    - **OK**

12. **Observe slope analysis:**
    - Superficie muestra bandas de color
    - Mayoría debe ser **verde** (2.0% según assembly)
    - Screenshot 2: Slope analysis en corridor surface

#### Parte 5: Export to LandXML

13. **Export Pavimento Surface:**
    - Prospector → Surfaces → `Pavimento-Highway-Top` → Right-click → **Export to LandXML...**
    - **LandXML Version:** 1.2
    - **Data to Export:**
      - ☑ Surface
      - ☐ Alignment, Profile, etc. (uncheck)
    - **File location:** Carpeta del proyecto
    - **File name:** `Pavimento-Highway-Design.xml`
    - **OK**

14. **Verify XML:**
    - Navega a carpeta
    - Verifica que archivo `.xml` existe
    - (Opcional) Abre con Notepad - verás XML con triangulación

### Entregables Ejercicio 4

- **Drawing:** `Ejercicio4-Corridor-Surfaces.dwg`
- **Screenshot 1:** Corridor surface `Pavimento-Highway-Top` en plan view (con boundary ETW)
- **Screenshot 2:** Slope analysis aplicado a superficie de pavimento
- **Screenshot 3:** Surface Properties - Statistics tab mostrando 2D Area
- **Archivo:** `Pavimento-Highway-Design.xml` (LandXML export)
- **Reporte:**
  - Área total de pavimento (m²)
  - Volumen de pavimento calculado (m³)
  - Observaciones de slope analysis: ¿Hay zonas con pendiente insuficiente (rojo)?

### Criterios de Evaluación

- **Corridor surface de pavimento creada correctamente:** 25 puntos
- **Boundary aplicado (ETW):** 15 puntos
- **Corridor surface de datum creada:** 20 puntos
- **Cálculo de volumen de pavimento:** 15 puntos
- **Slope analysis aplicado:** 10 puntos
- **Export a LandXML exitoso:** 10 puntos
- **Documentación:** 5 puntos

**Total:** 100 puntos

---

## Ejercicio 5: Feature Lines from Corridors

**Lección:** 5 - Feature Lines from Corridors
**Duración:** 90 minutos
**Dificultad:** Intermedia

### Objetivos

- Extraer feature lines desde corridor (ETW, Daylight, Crown)
- Editar feature lines con Elevation Editor
- Crear grading objects desde feature lines
- Usar feature lines como targets (simulación)
- Añadir labels a feature lines

### Instrucciones

#### Parte 1: Extract Feature Lines

1. **Continue desde Ejercicio 4:**
   - Save As: `Ejercicio5-Feature-Lines.dwg`

2. **Create Feature Lines from Corridor:**
   - Select corridor → **Corridor tab → Launch Pad → Feature Lines from Corridor**
   - **Create Feature Lines from Corridor dialog:**

   **Corridor:** `Corridor-Highway-MainLine`

   **Code Set Style:** All Codes

   **Select codes to create feature lines:**
   - ☑ **ETW** (Edge of Traveled Way)
   - ☑ **Daylight** (borde de talud)
   - ☐ Crown (uncheck)
   - ☐ Pave (uncheck)

   **Feature Line Style:** Basic Feature Line

   **Site:**
   - **Create new site:** ✓
   - **Site Name:** `Site-Highway-Grading`

   **Dynamic Link to Corridor:**
   - ☐ **Unchecked** (feature lines independientes, editables)

   **Layer:** C-ROAD-FTR

   - **OK**

3. **Verify Feature Lines:**
   - Prospector → Sites → `Site-Highway-Grading` → Feature Lines
   - Lista debe mostrar:
     - `ETW - (1)` (derecha)
     - `ETW - (2)` (izquierda)
     - `Daylight - (1)` (derecha)
     - `Daylight - (2)` (izquierda)
   - Screenshot 1: Plan view mostrando feature lines extraídas (diferentes colores según layer)

#### Parte 2: Edit Feature Lines

4. **Select ETW Right:**
   - Click en feature line `ETW - (1)` (derecha)

5. **Elevation Editor:**
   - **Feature Line tab → Modify → Elevation Editor**
   - **Elevation Editor window:**
     - Tabla muestra estaciones y elevaciones
     - Ejemplo:
       ```
       Station    | Elevation  | Grade     | Length
       0+000.00   | 120.50     | -        | -
       0+025.00   | 120.48     | -0.08%   | 25.00
       0+050.00   | 120.45     | -0.12%   | 25.00
       ...
       ```

6. **Edit elevación en station específica:**
   - Scroll a **station 1+000**
   - Click en celda "Elevation" de station 1+000
   - Type nueva elevación: `[Elevación actual] + 0.30` (añade 30 cm)
     - Ejemplo: Si elevation es 122.50, type `122.80`
   - Enter
   - **Grade se recalcula automáticamente** entre estaciones adyacentes

7. **Apply slope entre 2 estaciones:**
   - Select rango: Station 2+000 a 2+500
     - Click en celda de 2+000, Shift+Click en celda de 2+500
   - **Toolbar → Grade/Slope tool**
   - **Specify slope:** `-1.0%` (descendente)
   - **Apply**
   - Elevaciones se ajustan para mantener slope constante de -1.0%

8. **Close Elevation Editor**

9. **Screenshot 2:** Elevation Editor mostrando ediciones (con grades recalculados)

#### Parte 3: Create Grading desde Daylight

10. **Grading Creation Tools:**
    - Home tab → Create Design → **Grading dropdown → Grading Creation Tools**

11. **Toolbar Grading Creation Tools:**
    - **Set Grading Group:**
      - Dropdown → **Create Grading Group**
      - Name: `Grading-Highway-to-ROW`
      - **OK**

12. **Select Feature Line:**
    - Click en `Daylight - (1)` (derecha)

13. **Create Grading:**
    - Toolbar → **Create Grading** (ícono talud)
    - **Criteria:** Dropdown → **Slope**
    - **Parameters:**
      - **Grading Side:** Right (hacia afuera de daylight)
      - **Slope:** `4:1` (suave, 4H:1V = 25%)
      - **Format:** Slope
      - **Distance:** `15.00` m (límite horizontal)
    - **Apply**

14. **Verify Grading:**
    - Grading object creado
    - Vista 3D: Observa talud suave desde daylight hacia afuera (15 m)
    - Screenshot 3: Vista 3D isométrica mostrando grading desde daylight

#### Parte 4: Add Labels to Feature Lines

15. **Select ETW Right:**
    - Click en `ETW - (1)`

16. **Add Feature Line Labels:**
    - **Feature Line tab → Labels & Tables → Add Feature Line Labels**
    - **Add Labels dialog:**
      - **Label Type:** Station Elevation
      - **Label Style:** Station and Elevation (default)
      - **Marker Style:** (circle o square)
      - **Weeding:**
        - ☑ Apply Weeding
        - **Interval:** 100 m (label cada 100 m)
      - **OK**

17. **Verify Labels:**
    - Labels aparecen cada 100 m a lo largo de ETW
    - Formato aproximado:
      ```
      0+100.00
      Elev: 120.35 m
      ```
    - Screenshot 4: Plan view mostrando ETW con labels de station-elevation

### Entregables Ejercicio 5

- **Drawing:** `Ejercicio5-Feature-Lines.dwg`
- **Screenshot 1:** Feature lines extraídas (ETW, Daylight) en plan view
- **Screenshot 2:** Elevation Editor mostrando ediciones en ETW (elevación modificada, slope aplicado)
- **Screenshot 3:** Vista 3D isométrica con grading object desde Daylight
- **Screenshot 4:** ETW con labels de station-elevation cada 100 m
- **Reporte:**
  - Descripción de ediciones realizadas en feature line ETW (¿en qué station?, ¿qué slope aplicaste?)
  - Parámetros del grading (slope, distancia)

### Criterios de Evaluación

- **Feature lines extraídas correctamente:** 25 puntos
- **Edición de feature lines con Elevation Editor:** 25 puntos
- **Grading object creado desde Daylight:** 30 puntos
- **Labels añadidos a ETW:** 10 puntos
- **Documentación:** 10 puntos

**Total:** 100 puntos

---

## Ejercicio 6: Corridor Optimization y Troubleshooting

**Lección:** 6 - Corridor Optimization y Troubleshooting
**Duración:** 120 minutos
**Dificultad:** Avanzada

### Objetivos

- Dividir corridor en múltiples regions (split region)
- Asignar assemblies diferentes por región
- Optimizar frequency para performance
- Introducir y resolver errores comunes
- Aplicar rebuild strategies (manual vs automático)
- Documentar configuración de regiones

### Instrucciones

#### Parte 1: Split Corridor en Regions

1. **Continue desde Ejercicio 5:**
   - Save As: `Ejercicio6-Corridor-Optimization.dwg`

2. **Verificar corridor actual:**
   - Corridor Properties → Parameters tab
   - Actualmente: 1 baseline, 1 región (0+000 a 5+000)

3. **Split Region en Station 2+500:**
   - Expand baseline `Centerline-Highway`
   - Right-click en región existente → **Split Region**
   - **Split Station:** Type `2+500` + Enter
   - Resultado: 2 regiones:
     - Region 1: 0+000 a 2+500
     - Region 2: 2+500 a 5+000

4. **Split Region 2 en Station 3+500:**
   - Right-click en Region 2 → **Split Region**
   - **Split Station:** `3+500`
   - Resultado final: 3 regiones:
     - Region 1: 0+000 a 2+500
     - Region 2: 2+500 a 3+500
     - Region 3: 3+500 a 5+000

5. **Rename Regions:**
   - Region 1: Right-click → **Rename** → `Rural Section 0+000-2+500`
   - Region 2: Rename → `Urban Section 2+500-3+500`
   - Region 3: Rename → `Rural Section 3+500-5+000`

#### Parte 2: Assign Different Assembly a Urban Section

6. **Import Urban Assembly:**
   - File → Import Assemblies → `Ejercicio1-Assembly-Library.dwg`
   - Select: `Highway-2L-Urban-Curb-Sidewalk`
   - **OK**

7. **Assign Urban Assembly a Region 2:**
   - Right-click en `Urban Section 2+500-3+500` → **Edit Region**
   - **Assembly:** Dropdown → `Highway-2L-Urban-Curb-Sidewalk`
   - **Frequency:** (mantener default por ahora)
   - **Targets:** Surfaces = EG (mantener)
   - **OK**

8. **Rebuild y verificar:**
   - Corridor rebuild
   - **3D View:** Observa cambio de sección en station 2+500:
     - Antes de 2+500: Rural (cuneta)
     - 2+500 a 3+500: Urbano (bordillo + acera)
     - Después de 3+500: Rural (cuneta) nuevamente
   - Screenshot 1: Vista 3D mostrando transición entre secciones rural-urbana-rural

#### Parte 3: Optimize Frequency por Region

9. **Region 1 (Rural 0+000-2+500) - Optimizada:**
   - Right-click → Edit Region → **Frequency tab:**
     - Along Tangents: **50 m** (reducido, optimización)
     - Along Curves: **25 m**
     - Geometry Points: ✓
   - **OK**

10. **Region 2 (Urban 2+500-3+500) - Detallada:**
    - Edit Region → Frequency:
      - Along Tangents: **10 m** (muy detallado, zona crítica urbana)
      - Along Curves: **5 m** (máximo detalle)
      - Geometry Points: ✓
    - **OK**

11. **Region 3 (Rural 3+500-5+000) - Optimizada:**
    - Edit Region → Frequency:
      - Along Tangents: **50 m** (igual que Region 1)
      - Along Curves: **25 m**
      - Geometry Points: ✓
    - **OK**

12. **Rebuild y anotar:**
    - Command line output: Total de secciones generadas (debe ser menor que antes, por optimización en regiones 1 y 3)
    - Ejemplo: 200 secciones (vs 300 originales)
    - Screenshot 2: Corridor Properties - Parameters mostrando 3 regiones con nombres y assemblies

#### Parte 4: Troubleshooting - Introducir y Resolver Errores

**SIMULACIÓN DE ERROR 1: Target Surface Not Found**

13. **Introducir error:**
    - Region 2 (`Urban Section`) → Edit Region → **Targets tab**
    - **Surfaces:** Select EG → **Remove** (eliminar surface target)
    - **OK**

14. **Rebuild y observar error:**
    - Corridor rebuild
    - **Warning:** "Target surface not found at station X+XXX" (múltiples estaciones en región 2)
    - **Visual:** Region 2 tiene gaps o geometría incompleta
    - Screenshot 3: Command line mostrando warnings de "Target not found"

15. **Resolver error:**
    - Region 2 → Edit Region → Targets tab
    - **Surfaces:** Add → **EG**
    - **OK**
    - Rebuild
    - **Verify:** Warnings desaparecen, región 2 completa nuevamente

**SIMULACIÓN DE ERROR 2: Corridor Out of Date**

16. **Desactivar Automatic Rebuild:**
    - Corridor Properties → Parameters tab → **☐ Rebuild - Automatic** (uncheck)
    - **OK**

17. **Modificar Profile sin rebuild:**
    - Prospector → Alignments → Centerline-Highway → Profiles → FG-Highway
    - **Profile View:** Double-click para abrir
    - **Edit profile:**
      - Select un PVI (Point of Vertical Intersection) en station ~1+500
      - **Grip editing:** Move PVI verticalmente +0.50 m (hacia arriba)
    - **Observa:** Corridor NO se actualiza (porque Automatic Rebuild = OFF)

18. **Verify Out-of-Date:**
    - Prospector → Corridors → `Corridor-Highway-MainLine`
    - **Ícono amarillo ⚠** aparece (out of date)
    - Screenshot 4: Prospector mostrando corridor con warning icon

19. **Manual Rebuild:**
    - Select corridor → **Corridor tab → Modify → Rebuild Corridor**
    - Corridor se actualiza (refleja cambio de profile)
    - Warning icon ⚠ desaparece

20. **Reactivar Automatic Rebuild:**
    - Corridor Properties → Parameters → **☑ Automatic** (check)
    - **OK**

#### Parte 5: Documentación Final

21. **Create tabla de configuración de regiones:**

| Region | Station Range | Assembly | Frequency Tangents | Frequency Curves | Observations |
|--------|---------------|----------|-------------------|------------------|--------------|
| Rural 1 | 0+000 - 2+500 | Highway-2L-Rural-2mShoulder | 50 m (optimized) | 25 m | Sección rural standard |
| Urban | 2+500 - 3+500 | Highway-2L-Urban-Curb-Sidewalk | 10 m (detailed) | 5 m | Zona urbana con bordillos y aceras |
| Rural 2 | 3+500 - 5+000 | Highway-2L-Rural-2mShoulder | 50 m (optimized) | 25 m | Sección rural standard |

22. **Estadísticas del corridor:**
    - Command line: Total sections generated (después de optimización)
    - Ejemplo: ~180 secciones (vs 300 originales sin optimización)
    - **Performance gain:** ~40% reducción en secciones = rebuild más rápido

### Entregables Ejercicio 6

- **Drawing:** `Ejercicio6-Corridor-Optimization.dwg`
- **Screenshot 1:** Vista 3D mostrando transición rural-urbana-rural (3 secciones visibles)
- **Screenshot 2:** Corridor Properties - Parameters tab con 3 regiones configuradas
- **Screenshot 3:** Command line con warnings "Target surface not found" (antes de resolver)
- **Screenshot 4:** Prospector mostrando corridor con ícono ⚠ (out of date)
- **Screenshot 5:** Frequency configuration de Region 2 (urban, detallada 10m/5m)
- **Tabla de configuración de regiones** (documento Word/PDF)
- **Reporte final:**
  - Número total de secciones: Original vs Optimizado
  - Descripción de errores introducidos y cómo se resolvieron
  - Estrategia de frequency optimization aplicada

### Criterios de Evaluación

- **Split corridor en 3 regiones correctamente:** 20 puntos
- **Assemblies diferentes asignados (rural vs urbano):** 20 puntos
- **Frequency optimizada por región (balance detalle/performance):** 20 puntos
- **Troubleshooting - introducir y resolver errores:** 20 puntos
- **Rebuild strategies (automatic vs manual):** 10 puntos
- **Documentación completa (tabla, reportes, screenshots):** 10 puntos

**Total:** 100 puntos

---

## Proyecto Integrador Final del Módulo

**Objetivo:** Aplicar TODOS los conceptos del Módulo 1 en un proyecto completo.

**Requisitos:** Completar Ejercicios 1-6 previos.

**Especificaciones:**

Crear corridor completo de carretera de 5 km con:
- **3 regiones:**
  - 0+000 a 2+500: Rural (assembly con cuneta)
  - 2+500 a 3+500: Urbana (assembly con bordillo y acera)
  - 3+500 a 5+000: Rural
- **1 ramal (ramp)** en station ~2+500 (multi-baseline)
- **Corridor surfaces:**
  - Pavimento (Top) con boundary ETW
  - Sub-base (Datum) con boundary ETW
  - Cálculo de volúmenes
- **Feature lines extraídas:**
  - ETW (ambos lados)
  - Daylight (ambos lados)
  - Editadas con Elevation Editor
- **Grading objects** desde daylights
- **Frequency optimizada** según tipo de región
- **Export:**
  - LandXML de superficie de pavimento
  - Navisworks (.nwc) del corridor completo (opcional)

**Entregables:**
- Drawing completo: `Proyecto-Final-Modulo1-[TuNombre].dwg`
- Screenshots (mínimo 10):
  - Plan view general
  - Vista 3D isométrica completa
  - Sección en cada región (rural, urbana, transición)
  - Corridor surfaces
  - Feature lines con labels
  - Grading objects
- Reportes:
  - Tabla de regiones (station range, assembly, frequency)
  - Área y volumen de pavimento
  - Número total de secciones generadas
- Archivos export:
  - `Pavimento-Design.xml` (LandXML)

**Evaluación:**
- Completitud: 40%
- Corrección técnica: 30%
- Optimización (frequency, performance): 15%
- Documentación profesional: 15%

**Puntuación:** 200 puntos total

---

## Resumen de Evaluación del Módulo 1

| Ejercicio | Puntos | Peso |
|-----------|--------|------|
| Ejercicio 1: Assemblies | 100 | 10% |
| Ejercicio 2: Corridor Básico | 100 | 15% |
| Ejercicio 3: Targets y Offsets | 100 | 15% |
| Ejercicio 4: Corridor Surfaces | 100 | 15% |
| Ejercicio 5: Feature Lines | 100 | 15% |
| Ejercicio 6: Optimization | 100 | 15% |
| **Proyecto Final** | **200** | **25%** |
| **TOTAL** | **800** | **100%** |

**Aprobación:** 560 puntos mínimo (70%)

**Excelencia:** 720 puntos (90%+)

---

## Soporte y Recursos

**Instructor:**
- Disponible para consultas vía foro del curso
- Sesiones de Q&A semanales (schedule en plataforma LMS)

**Autodesk Help:**
- https://help.autodesk.com/view/CIV3D/2026/ENU/
- Búsqueda: "Corridors", "Assemblies", "Feature Lines", etc.

**Comunidad:**
- Autodesk Community Forums: https://forums.autodesk.com/t5/civil-3d-forum/bd-p/115
- LinkedIn Group: Civil 3D Professionals

**Datasets:**
- Descargables desde plataforma LMS (sección "Módulo 1 - Archivos de Práctica")

---

**¡Éxito en los ejercicios!**

Este módulo es el más importante del curso avanzado. Dominar corridors y assemblies es **esencial** para proyectos de infraestructura vial profesionales. Dedica el tiempo necesario a cada ejercicio - la práctica es la clave del dominio.
