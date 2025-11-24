# Lección 5: Feature Lines from Corridors - Grading y Sitework

**Duración:** 80 minutos
**Módulo:** 1 - Corridors y Assemblies
**Curso:** Autodesk Civil 3D 2026 - Avanzado
**Nivel:** Avanzado

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué son feature lines y su diferencia con 3D polylines
✅ Extraer feature lines desde corridors usando point codes
✅ Identificar feature lines clave: ETW, Daylight, Back of Curb, Crown
✅ Aplicar feature lines extraídas para grading y sitework
✅ Editar feature lines: Add/Delete vertices, elevaciones, slopes
✅ Usar feature lines como targets para otros corridors
✅ Crear grading objects desde feature lines
✅ Configurar feature line styles y labels
✅ Workflow de feature line to corridor (inverso)

---

## Introducción

Las **feature lines** son objetos lineales 3D inteligentes con elevaciones, pendientes, y propiedades de ingeniería. A diferencia de simples 3D polylines, las feature lines:
- Tienen **sites** y **elevations** editables
- Pueden usarse como **targets** para corridors
- Generan **grading objects** automáticamente
- Se etiquetan con **labels dinámicos** (estación, elevación, slope)

**Flujo profesional:**
1. Crear corridor 3D desde alignment + profile + assembly
2. **Extraer feature lines** de bordes clave (ETW, Daylight, Back of Curb)
3. Usar esas feature lines para:
   - **Grading** de lotes, estacionamientos, aceras
   - **Targets** para corridors secundarios (ej: sidewalk corridor usa ETW como target)
   - **Sitework** - nivelación de áreas adyacentes a carretera

**Aplicación profesional:**
- Diseño de estacionamientos con pendientes de drenaje
- Aceras y senderos peatonales paralelos a carretera
- Lot grading en urbanizaciones residenciales
- Plataformas industriales con drenaje controlado

---

## 1. ¿Qué son Feature Lines?

### 1.1 Definición

**Feature Line:**
Objeto 3D de Civil 3D compuesto por **segmentos lineales o curvos** con:
- **Elevaciones** en cada vértice (PI - Point of Intersection)
- **Pendientes** entre vértices (grades)
- **Stations** a lo largo de la línea (similar a alignments, pero más simple)
- **Site association** - pertenece a un Site para gestión de topology

**Características clave:**
- **Editable:** Add/delete vertices, cambiar elevaciones, slopes
- **Dynamic labels:** Etiquetas de estación, elevación, slope que se actualizan
- **Grading compatible:** Base para crear grading objects (taludes, transiciones)
- **Target-ready:** Puede usarse como width target, slope target en corridors

![Feature Line Components](../imagenes/leccion-5-feature-line-components.png)

### 1.2 Feature Lines vs 3D Polylines

| Aspecto | Feature Line | 3D Polyline |
|---------|--------------|-------------|
| **Elevación** | Editable por vértice con tools de Civil 3D | Elevación Z fija (requiere AutoCAD PEDIT) |
| **Pendientes** | Calculadas y editables (slope tools) | No calculadas, manual |
| **Labels** | Labels dinámicos (elev, slope, station) | Sin labels nativos |
| **Grading** | ✓ Compatible con grading objects | ✗ No compatible |
| **Targets** | ✓ Usable como target en corridors | ✗ No usable |
| **Site** | Asociada a Site (topology management) | Sin Site |

**Cuándo usar Feature Lines:**
- Bordes de diseño (edge of pavement, daylight)
- Bases para grading
- Targets para corridors
- Elementos de sitework con elevaciones variables

**Cuándo usar 3D Polylines:**
- Geometría simple sin ingeniería
- Referencias visuales
- Export a AutoCAD (feature lines no son compatibles con AutoCAD puro)

---

## 2. Extraer Feature Lines desde Corridors

### 2.1 Concepto

El corridor genera **feature lines automáticas** desde **point codes**:
- Point code "ETW" (Edge of Traveled Way) → Feature line de borde de calzada
- Point code "Daylight" → Feature line de intersección talud-terreno
- Point code "Back_Curb" → Feature line de atrás de bordillo
- Point code "Crown" → Feature line de centerline (corona)

**Inicialmente estas feature lines son "internas"** al corridor (no editables directamente). Para usarlas fuera del corridor, debes **extraerlas** como feature lines independientes.

### 2.2 View Corridor Feature Lines

**Verificar que existen:**

1. **Prospector → Corridors → [Tu Corridor]**
2. **Expand corridor → Surfaces → [Corridor Surface]**
3. **Expand surface → Feature Lines**

**Lista muestra:**
- `Crown` - Centerline
- `ETW_Right` - Borde derecho de calzada
- `ETW_Left` - Borde izquierdo de calzada
- `Daylight_Right` - Daylight derecho
- `Daylight_Left` - Daylight izquierdo
- (Otros códigos según assembly)

**Estas son feature lines "read-only" dentro del corridor.**

![Corridor Feature Lines in Prospector](../imagenes/leccion-5-corridor-feature-lines.png)

### 2.3 Extract Feature Lines from Corridor

**Comando:**

1. **Home tab → Create Design panel → Feature Line dropdown → Create Feature Lines from Corridor**

**Alternativamente:**
- Select corridor → **Corridor tab → Launch Pad panel → Feature Lines from Corridor**

**Create Feature Lines from Corridor dialog:**

**Corridor:** [Tu Corridor] (auto-seleccionado si pre-seleccionaste)

**Code Set Style:** All Codes (default)

**Feature Line Creation:**

**Select codes to create feature lines:**
- Lista todos los point codes disponibles en el corridor
- ☑ **ETW** (Edge of Traveled Way - SIEMPRE útil)
- ☑ **Daylight** (Borde de talud - crítico para grading)
- ☐ Crown (opcional - solo si necesitas centerline como feature line)
- ☑ **Back_Curb** (si tu assembly tiene bordillos urbanos)

**Ejemplo selección típica:**
```
☑ ETW
☑ Daylight
☐ Crown (uncheck)
☐ Pave (uncheck - generalmente no se necesita como feature line)
```

**Feature Line Style:**
- Dropdown → Selecciona style de visualización
- Default: **Basic Feature Line** (línea continua, color por layer)
- Puedes crear styles custom (ej: línea punteada para daylight)

**Baseline and Region:**
- **Select specific baseline/region** si tienes multi-baseline corridor
- Para corridor simple: Leave default (All baselines, All regions)

**Feature Line Site:**
- **Create new site** o **Use existing site**
- **Recomendación:** Create new site → Name: `Site-Grading-Highway`
  - Agrupa todas las feature lines de este corridor en un site

**Dynamic Link to Corridor:**
- ☐ **Unchecked** (recomendado para extraction)
- Si checked: Feature line mantiene link dinámico con corridor (se actualiza si corridor cambia)
- **Problema:** Feature line linked no es completamente editable
- **Best practice:** Uncheck para feature lines independientes editables

**Layer:**
- Layer donde se crearán feature lines
- Default: `C-ROAD-FTR` (Civil 3D standard)

**OK:**
- Feature lines se crean

![Create Feature Lines from Corridor Dialog](../imagenes/leccion-5-create-from-corridor.png)

### 2.4 Resultado

**Objetos creados:**

1. **Prospector → Sites → Site-Grading-Highway → Feature Lines**
   - Lista:
     - `ETW - (1)` (derecha)
     - `ETW - (2)` (izquierda)
     - `Daylight - (1)` (derecha)
     - `Daylight - (2)` (izquierda)

2. **Visualmente en drawing:**
   - Feature lines aparecen como líneas 3D (color según layer)
   - Seleccionables individualmente
   - **Editables** (a diferencia de las internas del corridor)

**Verificación:**
- Select una feature line (ej: ETW derecha)
- **Ribbon contextual: Feature Line tab**
- Tools de edición disponibles: Elevation Editor, Insert PI, Delete PI, etc.

---

## 3. Feature Lines Clave por Código

### 3.1 ETW - Edge of Traveled Way

**Descripción:**
Borde de la calzada (edge of pavement donde termina el área de circulación vehicular).

**Generado por:**
- BasicLane (borde externo del carril)
- BasicShoulder (borde externo de berma pavimentada)

**Uso:**
- **Grading de aceras:** Usa ETW como baseline, grada desde ahí hacia afuera
- **Target para sidewalk corridor:** Corridor de acera inicia desde ETW
- **Límite de áreas:** Separa pavimento de áreas verdes

**Ejemplo:**
```
Carretera → ETW derecha (offset +3.50 m desde centerline)
           → Acera inicia desde ETW, extiende 2.0 m hacia afuera
           → Grading desde acera hacia terreno natural
```

![ETW Feature Line](../imagenes/leccion-5-etw-feature-line.png)

### 3.2 Daylight - Intersección Talud-Terreno

**Descripción:**
Punto donde el talud (cut/fill slope) intersecta el terreno natural (EG).

**Generado por:**
- LinkToSurface
- BasicSideSlopeCutDitch
- DaylightGeneral

**Uso:**
- **Grading de áreas adyacentes:** Desde daylight hacia property lines
- **Right-of-way (ROW) boundaries:** Daylight define límite de perturbación del terreno
- **Cálculo de área de desbroce:** Polígono entre daylights izquierdo y derecho

**Ejemplo:**
```
Carretera → Talud 2:1 → Daylight (offset variable, ej: 8-15 m desde centerline según corte/relleno)
           → Desde daylight, grading suave hacia lotes residenciales
```

![Daylight Feature Line](../imagenes/leccion-5-daylight-feature-line.png)

### 3.3 Back_Curb - Atrás de Bordillo

**Descripción:**
Borde trasero del bordillo urbano (curb). Generalmente marca inicio de acera.

**Generado por:**
- UrbanCurb
- RaisedCurb
- CurbAndGutter

**Uso:**
- **Baseline para aceras:** Acera inicia desde Back_Curb
- **Grading de parkways:** Área verde entre bordillo y property line
- **Drenaje:** Back of curb define borde de cuneta integral (curb and gutter)

**Ejemplo:**
```
Calle urbana → Carril → Bordillo (curb) → Back_Curb
              → Acera 1.50 m ancho desde Back_Curb
              → Grading hacia property line de lotes
```

### 3.4 Crown - Centerline (Corona)

**Descripción:**
Punto central de la corona de la carretera (centerline). Generalmente coincide con el alignment.

**Generado por:**
- Baseline point del assembly

**Uso:**
- **Reference line:** Para verificación de diseño
- **Mediana elevations:** Si necesitas extraer elevaciones del centro de mediana
- **Menos común:** ETW y Daylight son más útiles en práctica

---

## 4. Editar Feature Lines

### 4.1 Elevation Editor

**Herramienta principal para editar elevaciones de feature lines.**

**Activación:**

1. **Select feature line** (ej: ETW derecha)
2. **Ribbon: Feature Line tab → Modify panel → Elevation Editor**

**Elevation Editor Window:**

**Tabla muestra:**
- **Station:** Estación a lo largo de la feature line (0+000, 0+025, etc.)
- **Elevation:** Elevación en cada vértice (ej: 125.50 m)
- **Grade:** Pendiente entre vértices (ej: -2.5%)
- **Length:** Longitud del segmento

**Edición:**

**Cambiar elevación manualmente:**
1. Click en celda "Elevation" (ej: Station 0+100, Elev 125.30)
2. Type nueva elevación: `125.50` + Enter
3. Grade se recalcula automáticamente

**Aplicar slope entre 2 puntos:**
1. Select rango de estaciones (ej: 0+100 a 0+500)
2. **Toolbar:** Grade/Slope tool
3. **Specify slope:** `-1.5%` (negativo = desciende)
4. **Apply**
5. Elevaciones se ajustan para mantener slope constante

![Elevation Editor](../imagenes/leccion-5-elevation-editor.png)

### 4.2 Insert / Delete Vertices

**Add Vertex (PI):**

1. **Select feature line**
2. **Feature Line tab → Modify panel → Insert PI**
3. **Command line:**
   ```
   Specify point on feature line: [Click en feature line donde quieres añadir vértice]
   ```
4. **Specify elevation:**
   - Opción 1: Type elevación: `125.75` + Enter
   - Opción 2: `S` (Surface) - extrae elevación de superficie en ese punto
5. **New vertex added**

**Delete Vertex:**

1. **Select feature line**
2. **Feature Line tab → Modify panel → Delete PI**
3. **Select PI to delete:** Click en vértice (aparece grip rojo)
4. Enter
5. **Vertex deleted**, segmentos adyacentes se reconectan

### 4.3 Grips Editing

**Método rápido:**

1. **Select feature line**
2. **Grips aparecen** en cada vértice (cuadrados azules)

**Move grip (cambiar posición XY):**
- Click en grip → Arrastra → Click para colocar
- **NOTA:** Solo mueve XY (planta), elevación no cambia
- Para cambiar elevación: Usa Elevation Editor

**Add vertex con grips:**
- Hover sobre línea entre 2 vértices (no en vértice)
- Grip triangular aparece
- Click y arrastra → Añade nuevo vértice

**Delete vertex con grips:**
- Select grip de vértice
- **Delete** key
- Vértice eliminado

---

## 5. Feature Lines como Targets para Corridors

### 5.1 Concepto

Feature line extraída de un corridor puede usarse como **target** para otro corridor.

**Ejemplo:**
1. Corridor de carretera principal → Extrae feature line **ETW** (borde de calzada)
2. Crear corridor de **acera** (sidewalk) → Usa ETW como **offset target**
3. Acera inicia desde ETW, extiende 2.0 m hacia afuera con pendiente transversal

### 5.2 Workflow: Sidewalk Corridor usando ETW Target

**Paso 1: Extraer ETW**

Ya hiciste esto en sección 2.3:
- Feature line `ETW - (1)` (derecha) extraída

**Paso 2: Crear Assembly de Acera**

1. **Create Assembly:**
   - Name: `Sidewalk-2m-Urban`
   - Description: "Acera 2.0 m ancho, slope 2% transversal"

2. **Subassemblies:**
   - **BasicLane** (usa para acera):
     - Width: 2.00 m
     - Depth: 0.10 m (10 cm de concreto)
     - Slope: -2.0% (drena hacia afuera)
   - **LinkToSurface** (talud desde borde exterior de acera a terreno):
     - Cut/Fill slopes: 3:1 (suave)

**Paso 3: Crear Alignment desde Feature Line ETW**

**IMPORTANTE:** Corridors requieren alignment como baseline. La feature line ETW NO es alignment, necesitas convertirla.

**Opción 1 - Create Alignment from Objects:**
1. **Home tab → Create Design → Alignment → Alignment from Objects**
2. **Select objects:** Click en feature line ETW
3. **Create Alignment dialog:**
   - Name: `Alignment-Sidewalk-Right`
   - Type: Centerline
   - **OK**

**Opción 2 - Usar feature line directamente como baseline (avanzado):**
- Civil 3D 2026 permite feature lines como baselines en algunos casos
- Menos común, más complejo

**Paso 4: Create Profile from Feature Line**

1. **Create Profile View** para `Alignment-Sidewalk-Right`
2. **Create Design Profile:**
   - Name: `FG-Sidewalk-Right`
   - **Sample from feature line:**
     - Extract elevations from ETW feature line
     - Method: Use **"Create Profile from Surface"** pero selecciona **corridor surface** que incluye ETW

**Alternativa simplificada:**
- **Profile from Surface:** Usa EG (terreno natural) como base
- Offset elevaciones +0.15 m (acera 15 cm elevada sobre terreno)

**Paso 5: Create Sidewalk Corridor**

1. **Create Corridor:**
   - Name: `Corridor-Sidewalk-Right`
   - Alignment: `Alignment-Sidewalk-Right`
   - Profile: `FG-Sidewalk-Right`
   - Assembly: `Sidewalk-2m-Urban`
   - Target Surface: EG

2. **Targets tab:**
   - Surfaces: EG (para LinkToSurface de borde exterior de acera)

**Rebuild:**
- Sidewalk corridor generado paralelo a la carretera principal
- Inicia desde ETW (borde de calzada), extiende 2.0 m hacia afuera

![Sidewalk Corridor from ETW](../imagenes/leccion-5-sidewalk-corridor.png)

---

## 6. Grading desde Feature Lines

### 6.1 ¿Qué es Grading?

**Grading object:**
Herramienta de Civil 3D para crear **taludes** o **transiciones de elevación** desde una feature line hacia:
- Otra feature line (ej: desde borde de acera hacia property line)
- Una superficie (ej: desde parking lot edge hacia terreno natural)
- Elevación fija (ej: desde borde de plataforma hacia nivel 0.00)
- Distancia u offset fijo (ej: talud 3:1 por 15 m)

**Diferencia con corridors:**
- **Corridors:** Diseño paramétrico complejo (carreteras, assemblies)
- **Grading:** Transiciones simples (taludes, sitework, lot grading)

### 6.2 Create Grading desde Daylight Feature Line

**Ejemplo:** Crear talud suave desde daylight de carretera hacia property line de lotes residenciales.

**Paso 1: Preparar Feature Lines**

**Ya tienes:**
- `Daylight - (1)` (derecha) extraída del corridor

**Crear:**
- **Property Line** feature line (límite de lotes):
  - Dibuja como 3D polyline o feature line paralela a daylight (ej: 20 m offset)
  - Elevación constante (ej: 125.00 m - terreno natural promedio de lotes)
  - Convert to feature line si dibujaste como polyline

**Paso 2: Create Grading**

1. **Home tab → Create Design panel → Grading dropdown → Grading Creation Tools**

**Grading Creation Tools Toolbar:**

2. **Set the grading group:**
   - **Grading Group:** Create new → Name: `Grading-Highway-to-Lots`
   - **OK**

3. **Select feature line:**
   - Click en `Daylight - (1)` (feature line de inicio)

4. **Grading Creation Tools → Create Grading:**
   - **Criteria:** Dropdown → Selecciona **"Surface"**
     - Grada hacia superficie target (ej: EG o superficie de lotes)
   - Alternativo: **"Slope"** (define slope fijo, ej: 3:1)

5. **Specify parameters:**
   - **Grading Side:** Right (hacia afuera de daylight)
   - **Slope:** `3:1` (suave, residencial)
   - **Format:** Slope (o Grade, Percentage según preferencia)

6. **Target:**
   - **Grade to surface:** Selecciona superficie de lotes o **EG**
   - Click en superficie

**Resultado:**
- Grading object creado
- Talud 3:1 desde daylight hacia superficie target
- Visualización 3D muestra transición suave

![Grading from Daylight](../imagenes/leccion-5-grading-daylight.png)

### 6.3 Grading Applications

**Lot Grading (Nivelación de Lotes):**
- Desde building pad edge (borde de plataforma de casa) hacia property line
- Ensures drenaje positivo (away from building)

**Parking Lots:**
- Desde edge of parking stalls hacia property line o landscape areas
- Slope 2-5% para drenaje

**Industrial Platforms:**
- Desde edge of platform hacia rampas de acceso o terreno natural
- Controlled slopes para seguridad vehicular

---

## 7. Feature Line Styles y Labels

### 7.1 Feature Line Styles

**Modificar visualización:**

1. **Settings Tab → Feature Line → Feature Line Styles**
2. **Right-click en style → Edit...**

**Display Tab:**
- **Component Display:**
  - Feature Line: Color, Linetype, Lineweight
  - PIs (vertices): Marker style, size

**Ejemplo custom style:**
- **Daylight Feature Lines:** Línea punteada, color verde (indicate talud)
- **ETW Feature Lines:** Línea continua gruesa, color amarillo (pavement edge)

### 7.2 Feature Line Labels

**Add labels:**

1. **Select feature line**
2. **Feature Line tab → Labels & Tables panel → Add Feature Line Labels**

**Add Labels dialog:**

**Label Type:**
- **Station Elevation:** Muestra estación + elevación en cada vértice
- **Grade Breaks:** Solo en cambios de pendiente
- **Slope:** Pendiente entre vértices

**Label Style:**
- Dropdown → Selecciona style (ej: `Station and Elevation`)

**Marker Style:**
- Marker en cada punto etiquetado (círculo, cuadrado, etc.)

**Weeding:**
- **Interval:** Frecuencia de labels (ej: cada 25 m)
- Evita saturación de labels

**OK:**
- Labels añadidos a feature line

**Ejemplo resultado:**
```
0+125.00
Elev: 125.50 m

0+150.00
Elev: 125.25 m
Slope: -1.0%
```

![Feature Line Labels](../imagenes/leccion-5-feature-line-labels.png)

---

## 8. Workflow Feature Line to Corridor (Inverso)

### 8.1 Concepto

**Flujo normal:**
Alignment + Profile → Corridor → Extract Feature Lines

**Flujo inverso:**
Feature Line (existente) → Convert to Alignment + Profile → Create Corridor

**Caso de uso:**
Tienes feature line de un **edge of pavement existente** (levantamiento de carretera existing). Quieres crear corridor desde esa feature line para diseño de rehabilitación.

### 8.2 Steps

**Paso 1: Feature Line Existente**

- Ejemplo: `ExistingEdge-Pavement` (levantada con GPS, tiene elevaciones)

**Paso 2: Create Alignment from Feature Line**

1. **Home tab → Create Design → Alignment → Alignment from Objects**
2. **Select:** ExistingEdge-Pavement (feature line)
3. **Create Alignment**

**Paso 3: Create Profile from Feature Line**

1. **Profile View** para nuevo alignment
2. **Create Design Profile:**
   - Sample elevations from feature line
   - Method: Export feature line elevations to profile

**Paso 4: Create Corridor**

- Ahora tienes alignment + profile → Crea corridor normalmente

**Aplicación:**
- Rehabilitación vial: Corridor overlay sobre pavimento existente
- Mejoramiento: Ampliación de carretera existente

---

## Ejercicio Práctico 5

**Objetivo:** Extraer feature lines de corridor, editar elevaciones, usar como target para sidewalk corridor.

**Requisitos:**
- Corridor: `Corridor-Exercise2-Rural` (de ejercicios previos)

**Tareas:**

1. **Extract Feature Lines:**
   - From: `Corridor-Exercise2-Rural`
   - Codes: ☑ ETW, ☑ Daylight
   - Site: Create new → `Site-Exercise5-Grading`
   - Dynamic Link: ✗ Unchecked

2. **Verify Extraction:**
   - Prospector → Sites → Site-Exercise5-Grading → Feature Lines
   - Lista debe mostrar: ETW - (1), ETW - (2), Daylight - (1), Daylight - (2)

3. **Edit ETW Right Feature Line:**
   - Select `ETW - (1)` (derecha)
   - **Elevation Editor:**
     - Station 0+500: Cambiar elevación +0.20 m (simula elevation adjustment)
     - Station 0+500 a 0+700: Aplicar slope -1.0%
   - **Insert PI:**
     - Station aproximado 0+250: Añadir vértice, elevación from surface EG

4. **Create Grading desde Daylight:**
   - Grading Creation Tools
   - Select `Daylight - (1)` (derecha)
   - Criteria: **Slope**
   - Slope: 4:1 (suave)
   - Side: Hacia afuera (away from corridor)
   - Distance: 15.00 m (límite de grading)
   - Create

5. **Add Labels to ETW:**
   - Feature Line Labels → Station Elevation
   - Interval: 50 m
   - Verify labels muestran estaciones y elevaciones

**Entregables:**
- Drawing: `Ejercicio5-Feature-Lines.dwg`
- Screenshot 1: Feature lines extraídas (ETW y Daylight) en plan view
- Screenshot 2: Elevation Editor mostrando ediciones en ETW
- Screenshot 3: Grading object creado desde Daylight (vista 3D isométrica)
- Screenshot 4: Feature line ETW con labels de station-elevation

![Ejercicio 5 Result](../imagenes/leccion-5-ejercicio5-result.png)

---

## Evaluación

**Pregunta 1:**
¿Qué diferencia hay entre una feature line y una 3D polyline en términos de funcionalidad en Civil 3D?

**Pregunta 2:**
¿Qué point codes extraerías desde un corridor para obtener: (a) borde de calzada, (b) intersección talud-terreno, (c) atrás de bordillo?

**Pregunta 3:**
¿Por qué es recomendable **no** activar "Dynamic Link to Corridor" al extraer feature lines?

**Pregunta 4:**
¿Qué herramienta usas para editar elevaciones de una feature line de manera tabular (estación vs elevación)?

**Pregunta 5:**
Si quieres crear un corridor de acera que inicie desde el borde de calzada (ETW), ¿qué pasos debes seguir para usar ETW como referencia?

**Pregunta 6:**
¿Qué es un grading object y en qué se diferencia de un corridor?

**Pregunta 7:**
Menciona 2 aplicaciones profesionales de feature lines extraídas de corridors.

**Pregunta 8:**
¿Cómo añades labels de estación y elevación a una feature line?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "Working with Feature Lines"
- Feature Lines from Corridors - Best Practices
- Grading Objects Guide

**Videos tutoriales:**
- Autodesk Civil 3D - Feature Lines Deep Dive
- Extracting Feature Lines for Sitework
- Grading with Feature Lines

**Aplicaciones:**
- AASHTO Roadside Design Guide - Grading for safety
- Urban Street Design Guide - Sidewalks and curbs

---

## Resumen

En esta lección aprendiste:

✅ Qué son **feature lines** y su diferencia con 3D polylines (elevaciones editables, grading-ready, target-compatible)
✅ **Extraer feature lines** desde corridors usando point codes (ETW, Daylight, Back_Curb, Crown)
✅ Feature lines clave:
  - **ETW** - Borde de calzada (base para aceras, targets)
  - **Daylight** - Intersección talud-terreno (ROW, grading)
  - **Back_Curb** - Atrás de bordillo (inicio de acera)
✅ **Editar feature lines:** Elevation Editor, Insert/Delete PIs, grips editing
✅ Usar feature lines como **targets** para otros corridors (sidewalk corridor desde ETW)
✅ Crear **grading objects** desde feature lines (taludes, sitework)
✅ Configurar **feature line styles** y añadir **labels** dinámicos (station-elevation)
✅ Workflow inverso: **Feature line to corridor** (rehabilitación vial)

**Próxima Lección:** Corridor Optimization y Troubleshooting Avanzado - Aprenderás a gestionar corridor regions, transitions entre assemblies, optimizar frequency para performance, y resolver errores comunes en corridors complejos.

---

**Tiempo de estudio recomendado:** 80 minutos
**Práctica adicional:** 60 minutos extrayendo feature lines, creando grading objects, y usando feature lines como targets
