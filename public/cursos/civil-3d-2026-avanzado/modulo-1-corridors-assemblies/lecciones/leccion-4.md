# Lección 4: Corridor Surfaces - Pavimento, Sub-Base, Terraplén

**Duración:** 80 minutos
**Módulo:** 1 - Corridors y Assemblies
**Curso:** Autodesk Civil 3D 2026 - Avanzado
**Nivel:** Avanzado

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué son corridor surfaces y su diferencia con TIN surfaces
✅ Diferenciar entre superficies Top, Datum, y Feature Line
✅ Entender code set styles y códigos de puntos/links
✅ Crear corridor surface de pavimento (Top) para cálculos de volumen
✅ Crear corridor surface de sub-base (Datum) para capas inferiores
✅ Especificar links específicos para superficies (Top, Pave, Base, Subbase)
✅ Añadir boundaries automáticos para corridor surfaces
✅ Configurar boundary types: Daylight, Feature Line, Polygon
✅ Usar corridor surfaces para análisis de drenaje (slope, watersheds)
✅ Exportar corridor surfaces a LandXML para intercambio de datos

---

## Introducción

Los **corridor surfaces** son superficies TIN generadas automáticamente desde el modelo 3D del corridor. Representan elementos específicos:
- **Superficie de pavimento** (top of pavement) - Para cálculo de área de asfalto
- **Sub-base** (datum) - Para cálculo de volumen de materiales granulares
- **Daylight** (taludes) - Para análisis de corte/relleno

A diferencia de crear manualmente una superficie TIN desde feature lines o puntos COGO, las corridor surfaces son **dinámicas** - se actualizan automáticamente cuando modificas el corridor (alignment, profile, assembly).

**Aplicación profesional:**
- Quantity takeoff: Calcular m² de pavimento, m³ de base granular
- Análisis de drenaje: Pendientes de pavimento, dirección de escorrentía
- Coordinación BIM: Exportar superficie de diseño a Navisworks, Infraworks
- Intercambio de datos: LandXML a software de construcción (máquinas de control de grado)

---

## 1. ¿Qué son Corridor Surfaces?

### 1.1 Definición

**Corridor Surface:**
Superficie TIN generada desde **códigos de puntos** (point codes) o **códigos de links** (link codes) del corridor.

**Ejemplo:**
- Assembly tiene subassembly BasicLane
- BasicLane genera point code **"Pave"** en sus 4 esquinas
- Corridor aplica assembly en 100 estaciones (0+000, 0+025, 0+050, ... 2+450)
- Total: 400 puntos con código "Pave" (4 puntos × 100 estaciones)
- **Corridor Surface "Pavimento":** TIN creado desde esos 400 puntos

### 1.2 Diferencia con TIN Surfaces Estándar

| Aspecto | TIN Surface (standard) | Corridor Surface |
|---------|------------------------|------------------|
| **Fuente de datos** | Puntos COGO, breaklines, DEM | Point codes / Link codes del corridor |
| **Actualización** | Manual - re-importar datos | **Automática** - sigue cambios del corridor |
| **Uso** | Terreno existente (EG), superficies independientes | Diseño vial (pavimento, sub-base, daylight) |
| **Edición** | Editable (add/delete puntos) | **Read-only** (solo editando corridor) |
| **Boundaries** | Manuales o desde polylines | **Automáticos** desde feature lines del corridor |

**Ventaja clave:** Corridor surfaces son **paramétricas** - cambias el profile vertical 0.50 m, y la superficie de pavimento se actualiza instantáneamente.

![Corridor Surface Concept](../imagenes/leccion-4-corridor-surface-concept.png)

---

## 2. Superficies Top vs Datum

### 2.1 Top Surface

**Definición:**
Superficie generada desde la **cara superior** de elementos del corridor (ej: top of pavement, top of curb).

**Uso típico:**
- Pavimento terminado (asfalto, concreto)
- Top of curb (borde superior de bordillo)
- Aceras (top of sidewalk)

**Point codes comunes:**
- **Pave** - Superficie de pavimento
- **Top_Curb** - Borde superior de bordillo
- **ETW** - Edge of Traveled Way (borde de calzada)

**Ejemplo:**
Corridor surface "Pavimento-Top" usando point code **Pave**:
- Representa la superficie de rodadura (donde circulan vehículos)
- Útil para: Cálculo de m² de asfalto, análisis de drenaje superficial

### 2.2 Datum Surface

**Definición:**
Superficie generada desde **capas inferiores** del corridor (sub-base, subgrade, datum de referencia).

**Uso típico:**
- Base granular (crushed stone, agregado)
- Sub-base (material seleccionado)
- Subgrade (terreno natural mejorado)

**Point codes comunes:**
- **Datum** - Puntos de datum de referencia (generalmente bottom of assembly elements)
- **Base** - Fondo de capa de base

**Ejemplo:**
Corridor surface "SubBase-Datum" usando point code **Datum**:
- Representa el fondo de la estructura de pavimento
- Útil para: Cálculo de volumen de materiales (espesor variable)

**Relación Top-Datum:**
```
[Top Surface - Pavimento]      ← Elevación superior (ej: 125.50 m)
       ↓ (Espesor 0.20 m)
[Datum Surface - Sub-base]     ← Elevación inferior (ej: 125.30 m)
```

Volumen de pavimento = Superficie compuesta entre Top y Datum × área.

![Top vs Datum Surface](../imagenes/leccion-4-top-vs-datum.png)

---

## 3. Code Set Styles y Códigos

### 3.1 Code Set Style

**Recordatorio de Lección 1:**
Code Set Style define qué **point codes** y **link codes** genera el assembly.

**Ubicación:**
- Settings Tab → Assembly → Code Set Styles
- Default: **All Codes** (genera todos los códigos posibles)

**Códigos clave para corridor surfaces:**

**Point Codes:**
| Código | Descripción | Generado por |
|--------|-------------|--------------|
| Crown | Centro de corona (centerline) | Baseline point |
| Pave | Superficie de pavimento | BasicLane, BasicShoulder |
| ETW | Edge of Traveled Way | BasicLane (borde externo) |
| Daylight | Intersección con terreno natural | LinkToSurface, BasicSideSlopeCutDitch |
| Datum | Datum de referencia (fondo) | Todos los subassemblies (punto inferior) |
| Back_Curb | Atrás de bordillo | UrbanCurb |
| Top_Curb | Tope de bordillo | UrbanCurb |

**Link Codes:**
| Código | Descripción | Uso |
|--------|-------------|-----|
| Top | Superficie superior | Top of pavement, top of shoulder |
| Pave | Capa de pavimento | Material de asfalto/concreto |
| Base | Capa de base granular | Crushed stone, agregado |
| Datum | Link de datum | Taludes, relleno estructural |

### 3.2 Verificar Códigos del Assembly

**Antes de crear corridor surfaces, verifica códigos:**

1. **Assembly Properties:**
   - Select assembly → Right-click → **Assembly Properties**
   - **Codes tab**

2. **Point Codes:**
   - Lista todos los point codes (Crown, Pave, ETW, Daylight, Datum, etc.)
   - Verifica que existen los códigos que necesitas para surfaces

3. **Link Codes:**
   - Lista link codes (Top, Pave, Base, Datum)

**Si falta un código:**
- Probablemente el assembly no incluye el subassembly que lo genera
- Ejemplo: Si no ves "Daylight", falta LinkToSurface o similar

![Assembly Codes Tab](../imagenes/leccion-4-assembly-codes.png)

---

## 4. Crear Corridor Surface - Pavimento (Top)

### 4.1 Acceder a Corridor Surfaces

**Pasos:**

1. **Select corridor:**
   - Click en corridor object en drawing

2. **Corridor Properties:**
   - Right-click → **Corridor Properties**
   - O Ribbon: Corridor tab → Modify panel → **Corridor Properties**

3. **Surfaces tab:**
   - Click en tab **Surfaces** (parte superior del dialog)

![Corridor Properties Surfaces Tab](../imagenes/leccion-4-corridor-surfaces-tab.png)

### 4.2 Create Corridor Surface

**Toolbar en Surfaces tab:**

**Botón "Create a corridor surface" (ícono +):**
- Click en el botón

**Create Corridor Surface dialog:**

**Surface Name:**
- Name: `Pavimento-Corridor`
- Description: "Superficie de pavimento terminado desde corridor"

**Surface Style:**
- Style: **Contours 1m and 5m** (o cualquier style apropiado)
- Puedes cambiarlo después

**Add Data:**
- **Aquí defines QUÉ códigos usar para crear la superficie**
- Opciones:
  - **Add as Point:** Usa point codes (puntos individuales)
  - **Add as Link:** Usa link codes (áreas entre puntos)
  - **Add as Feature Line:** Usa feature lines (menos común)

**Para superficie de pavimento TOP:**

**Method 1 - Point Codes (recomendado):**
1. **Add as Point** section → **Click en celda bajo "Specify Code"**
2. **Add Point Code dialog:**
   - Dropdown lista todos los point codes disponibles
   - **Select:** `Pave`
   - **OK**

**Resultado:**
- Tabla muestra: `Point | Pave`
- Superficie se creará desde TODOS los puntos con código "Pave" en el corridor

**Method 2 - Link Codes (alternativo):**
1. **Add as Link** section → **Specify Code**
2. **Select:** `Top`
3. **OK**

**Resultado:**
- Tabla muestra: `Link | Top`
- Superficie se creará desde todos los **links** con código "Top"
- Genera superficie más "completa" (áreas trianguladas entre puntos)

**Recomendación profesional:**
- **Links** son generalmente mejores para corridor surfaces (menos gaps)
- **Point codes** útiles para casos específicos (ej: solo bordes)

![Add Surface Data - Link Top](../imagenes/leccion-4-add-link-top.png)

### 4.3 Finalizar Creación

**Click OK:**
- Dialog se cierra
- Corridor surface "Pavimento-Corridor" creada

**Verificar:**
- **Surfaces tab:** Lista ahora muestra "Pavimento-Corridor"
- **Prospector → Surfaces:** También aparece "Pavimento-Corridor" (es una TIN surface normal ahora)

**Visualización:**
- Zoom to corridor
- La superficie debe mostrar curvas de nivel (según style asignado)
- **PROBLEMA POSIBLE:** Superficie cubre TODO el corridor (incluyendo taludes, bordes) - necesitamos **boundaries**

---

## 5. Boundaries para Corridor Surfaces

### 5.1 ¿Por qué Boundaries?

**Problema:**
Cuando creas corridor surface desde link code "Top", incluye TODOS los links "Top" del corridor:
- Pavimento: ✓ (queremos)
- Bermas: Posiblemente ✓ (queremos)
- Taludes: ✗ (NO queremos - taludes no son "pavimento")

**Solución:**
Añadir **boundary** para limitar la superficie solo al área de pavimento.

### 5.2 Tipos de Boundaries

**1. Daylight:**
- Usa puntos con código "Daylight" como límite externo
- Útil para superficie completa incluyendo taludes

**2. Feature Line:**
- Usa feature line específica como boundary
- Más control, flexible

**3. Polygon:**
- Dibuja polyline manual como boundary
- Útil para casos irregulares

**Para superficie de pavimento:**
Queremos boundary en los **bordes del pavimento** (edge of traveled way).

### 5.3 Add Boundary desde Feature Line

**Paso 1: Identificar Feature Line de Borde**

Corridor genera feature lines automáticamente desde point codes:
- ETW (Edge of Traveled Way) - Borde de calzada
- Daylight - Borde de talud

**Prospector:**
1. Prospector → Corridors → [Tu Corridor] → Surfaces → Pavimento-Corridor
2. Expand → **Feature Lines**
3. Lista muestra feature lines por código:
   - `ETW_Right` (borde derecho de calzada)
   - `ETW_Left` (borde izquierdo de calzada)
   - Etc.

**Paso 2: Add Boundary**

1. **Corridor Properties → Surfaces tab**
2. **Select surface:** Pavimento-Corridor
3. **Expand surface** (click en triángulo a la izquierda)
4. **Boundaries section:** Right-click → **Add...**

**Add Corridor Surface Boundary dialog:**

**Boundary Name:**
- Name: `ETW-Boundary` (descriptivo)

**Boundary Type:**
- **From corridor feature line** (seleccionado)

**Feature Line Selection:**
1. **Right-click en lista vacía → Add...**
2. **Feature Line Code:** Dropdown → Selecciona **ETW**
3. **OK**

**Boundary Added:**
- Lista muestra: `ETW | Right Side | Left Side` (ambos lados)

**OK:**
- Boundary aplicado

![Add Corridor Boundary](../imagenes/leccion-4-add-boundary.png)

### 5.4 Resultado

**Superficie actualizada:**
- Zoom to corridor
- **Pavimento-Corridor** ahora solo cubre área DENTRO de ETW boundaries
- Taludes ya NO están incluidos en la superficie
- Superficie "limpia" de pavimento únicamente

**Verificación:**
- Properties de superficie → Statistics
- **Área:** Debe ser área solo de pavimento (ej: 15,000 m² para corridor de 2 km × 7 m ancho promedio)

---

## 6. Crear Corridor Surface - Sub-Base (Datum)

### 6.1 Propósito

Calcular volumen de materiales de **base granular** y **sub-base**.

**Estructura típica de pavimento:**
```
[0.00 m]   Top Surface (Pavimento)         ← Superficie de rodadura
[-0.20 m]  Asfalto (20 cm)
[-0.20 m]  Datum 1 - Fondo de asfalto      ← Tope de base granular
[-0.50 m]  Base granular (30 cm)
[-0.50 m]  Datum 2 - Fondo de base         ← Tope de sub-base
[-0.80 m]  Sub-base (30 cm)
[-0.80 m]  Datum 3 - Subgrade              ← Terreno natural mejorado
```

**Objetivo:**
Crear superficie "Base-Datum" que representa el **fondo de la capa de base granular** (Datum 1 en diagrama).

### 6.2 Create Datum Surface

**Pasos:**

1. **Corridor Properties → Surfaces tab**
2. **Create a corridor surface** (botón +)

**Create Corridor Surface dialog:**

**Name:** `Base-Datum-Corridor`
**Description:** "Fondo de capa de base granular (datum)"
**Surface Style:** Contours 1m and 5m

**Add Data:**
- **Add as Link** → **Specify Code**
- **Select:** `Base` (link code de base)
- **OK**

**Alternativo - Add as Point:**
- Si tu assembly genera point code "Datum" específicamente en el fondo de base:
  - **Add as Point** → **Specify Code:** `Datum`

**OK:**
- Superficie "Base-Datum-Corridor" creada

### 6.3 Add Boundary

**Similar a pavimento:**

1. **Expand "Base-Datum-Corridor"**
2. **Boundaries → Add...**
3. **From corridor feature line:**
   - Feature Line Code: **ETW** (mismo boundary que pavimento)
   - **OK**

**Resultado:**
- Superficie de datum limitada a área de calzada

![Datum Surface Created](../imagenes/leccion-4-datum-surface.png)

---

## 7. Calcular Volumen de Pavimento

### 7.1 Concepto

**Volumen de pavimento** = Volumen entre **Top Surface** (Pavimento) y **Datum Surface** (Base).

**Método en Civil 3D:**
- **Surfaces → Composite Volume** (cálculo entre 2 superficies)

### 7.2 Compute Materials

**Pasos:**

1. **Toolspace → Prospector tab**
2. **Surfaces → Pavimento-Corridor** → Right-click → **Surface Properties**

3. **Statistics tab:**
   - **2D Area:** Área en planta del pavimento (m²)
   - Ejemplo: 14,850 m²

**Cálculo manual aproximado:**
```
Volumen pavimento = Área × Espesor promedio
Volumen = 14,850 m² × 0.20 m = 2,970 m³
```

**Cálculo preciso (espesor variable):**

**Method: Composite Surfaces**

1. **Analyze tab → Volumes panel → Composite Volumes**
2. **Create Composite Volume:**
   - **Base Surface:** `Base-Datum-Corridor` (superficie inferior)
   - **Comparison Surface:** `Pavimento-Corridor` (superficie superior)
   - **OK**

**Result:**
- Volumen neto entre las 2 superficies
- Output: `Volume: 2,985 m³` (ligeramente diferente del manual por variación de espesor)

**Usar para quantity takeoff:**
- Reportes de cantidades de asfalto
- Cost estimation (m³ × precio unitario)

![Composite Volume Calculation](../imagenes/leccion-4-composite-volume.png)

---

## 8. Corridor Surface para Análisis de Drenaje

### 8.1 Slope Analysis en Superficie de Pavimento

**Objetivo:**
Verificar que pendientes transversales del pavimento cumplan con diseño (ej: -2.0% para drenaje).

**Pasos:**

1. **Select surface:** Pavimento-Corridor
2. **Surface Properties → Analysis tab**
3. **Analysis Type:** **Slopes**

**Configure Slope Ranges:**
- **Scheme:** Green to Red
- **Ranges:**
  - 0-1.5%: Rojo (pendiente insuficiente, mal drenaje)
  - 1.5-2.5%: Verde (pendiente óptima)
  - 2.5-4.0%: Amarillo (pendiente aceptable)
  - 4.0%+: Naranja (pendiente alta, revisar)
- **OK**

**Resultado:**
- Superficie muestra bandas de color por pendiente
- Identifica zonas con drenaje deficiente (rojo)

### 8.2 Watershed Analysis

**Objetivo:**
Determinar dirección de escorrentía superficial (hacia dónde drena el agua).

**Pasos:**

1. **Surface Properties → Analysis tab**
2. **Analysis Type:** **Watersheds**
3. **Create watersheds automatically**
4. **OK**

**Resultado:**
- Superficie dividida en cuencas (watersheds) por color
- Identifica puntos bajos (sumps) - potenciales problemas de drenaje
- Útil para diseño de drenaje pluvial (ubicación de sumideros)

![Watershed Analysis on Corridor Surface](../imagenes/leccion-4-watershed-analysis.png)

---

## 9. Exportar Corridor Surface a LandXML

### 9.1 Propósito

**LandXML** es formato estándar de intercambio para datos de Civil 3D:
- Compatible con software de construcción (Trimble, Topcon, Leica)
- Máquinas de control de grado (motor graders, pavers) leen LandXML
- Intercambio con otros CAD (Bentley MicroStation, 12d Model)

### 9.2 Export Corridor Surface

**Pasos:**

1. **Toolspace → Prospector**
2. **Surfaces → Pavimento-Corridor** → Right-click → **Export to LandXML...**

**Export to LandXML dialog:**

**LandXML Version:**
- **Select:** LandXML 1.2 (más compatible)
- LandXML 2.0 (más reciente, no siempre soportado)

**Data to Export:**
- ☑ **Surface** (checked - exporta triangulación TIN)
- ☐ Alignment (uncheck si solo quieres superficie)
- ☐ Profile, Parcel, etc. (uncheck)

**File Location:**
- Browse → Selecciona carpeta (ej: `C:\Proyecto\Export\`)
- **File name:** `Pavimento-Corridor-Design.xml`

**OK:**
- Archivo LandXML generado

**Verificar:**
- Abre `Pavimento-Corridor-Design.xml` en Notepad
- Verás XML con datos de triangulación (puntos, elevaciones, triangles)

![Export LandXML](../imagenes/leccion-4-export-landxml.png)

### 9.3 Usar LandXML

**Flujo profesional:**
1. Exportar corridor surface desde Civil 3D → LandXML
2. Transferir archivo a contratista
3. Contratista carga LandXML en sistema de control de máquina
4. Motor grader / paver utiliza superficie como referencia para nivelación automática (GPS + sistema de control)

**Resultado:**
- Construcción precisa según diseño digital
- Reduce errores de interpretación de planos
- Aumenta productividad en campo

---

## 10. Corridor Surface vs TIN Surface

### 10.1 Diferencias Clave

| Aspecto | Corridor Surface | TIN Surface (standard) |
|---------|------------------|------------------------|
| **Editable** | ✗ Read-only (solo vía corridor) | ✓ Editable (add/delete puntos) |
| **Dinámica** | ✓ Actualización automática | ✗ Manual |
| **Fuente** | Códigos del corridor | Puntos COGO, breaklines, contours |
| **Uso** | Diseño vial paramétrico | Terreno existente, topografía |
| **Performance** | Ligera (deriva de corridor) | Puede ser pesada (millones de puntos) |

### 10.2 Cuándo Convertir a TIN Standard

**Caso:** Necesitas editar corridor surface manualmente (ej: añadir puntos extras en zona irregular).

**Solución:** Export corridor surface como TIN standard.

**Pasos:**

1. **Prospector → Surfaces → Pavimento-Corridor**
2. **Right-click → Surface Properties**
3. **Definition tab → Export**
4. **Export as:** New TIN Surface
5. **New Surface Name:** `Pavimento-Edited-TIN`
6. **OK**

**Resultado:**
- Nueva superficie TIN independiente del corridor
- Editable (add points, delete triangles, etc.)
- **Pierde conexión dinámica** - NO se actualiza si cambias corridor

---

## Ejercicio Práctico 4

**Objetivo:** Crear corridor surfaces de pavimento y sub-base, aplicar boundaries, calcular volúmenes.

**Requisitos:**
- Corridor: `Corridor-Exercise2-Rural` (de ejercicios previos)

**Tareas:**

1. **Create Corridor Surface - Pavimento:**
   - Name: `Pavimento-Exercise4`
   - Add Data: **Link Code "Top"**
   - Surface Style: Contours 1m and 5m

2. **Add Boundary a Pavimento:**
   - Boundary Type: From corridor feature line
   - Feature Line Code: **ETW** (Edge of Traveled Way)

3. **Verify Pavimento Surface:**
   - Zoom to corridor
   - Captura screenshot mostrando superficie limitada a área de pavimento (sin taludes)

4. **Create Corridor Surface - Sub-Base Datum:**
   - Name: `SubBase-Datum-Exercise4`
   - Add Data: **Link Code "Datum"** (o "Base" si disponible)
   - Add Boundary: ETW (mismo que pavimento)

5. **Calculate Volume de Pavimento:**
   - Method manual: Área × Espesor promedio
     - Pavimento-Exercise4 → Properties → Statistics → 2D Area
     - Espesor pavimento: 0.18 m (del assembly Rural-2L)
     - Volumen = Área × 0.18
   - **Reporte:** Volumen calculado (m³)

6. **Slope Analysis:**
   - Pavimento-Exercise4 → Surface Properties → Analysis → Slopes
   - Ranges: 0-1.5% (rojo), 1.5-3.0% (verde), 3.0%+ (amarillo)
   - Captura screenshot de superficie con slope analysis

7. **Export to LandXML:**
   - Pavimento-Exercise4 → Export to LandXML
   - File name: `Pavimento-Exercise4-Design.xml`
   - Verifica archivo generado en carpeta

**Entregables:**
- Drawing: `Ejercicio4-Corridor-Surfaces.dwg`
- Screenshot 1: Superficie Pavimento con boundary ETW
- Screenshot 2: Slope analysis en pavimento
- Archivo: `Pavimento-Exercise4-Design.xml`
- Reporte: Área de pavimento (m²), Volumen de pavimento (m³)

![Ejercicio 4 Result](../imagenes/leccion-4-ejercicio4-result.png)

---

## Evaluación

**Pregunta 1:**
¿Qué diferencia hay entre una corridor surface y una TIN surface estándar en términos de edición?

**Pregunta 2:**
¿Qué códigos (point codes o link codes) usarías para crear una superficie de pavimento TOP?

**Pregunta 3:**
¿Por qué es importante añadir boundaries a corridor surfaces?

**Pregunta 4:**
Si quieres calcular el volumen de material de base granular, ¿qué 2 superficies necesitas?

**Pregunta 5:**
Menciona 2 tipos de boundaries que puedes usar en corridor surfaces.

**Pregunta 6:**
¿Qué análisis aplicarías a una superficie de pavimento para verificar que las pendientes transversales cumplen con diseño de drenaje?

**Pregunta 7:**
¿Para qué se usa un archivo LandXML exportado desde una corridor surface?

**Pregunta 8:**
Si una corridor surface incluye áreas que NO quieres (ej: taludes en superficie de pavimento), ¿cómo lo solucionas?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "Creating Corridor Surfaces"
- Autodesk Civil 3D 2026 - Quantity Takeoff Guide
- LandXML Export/Import Best Practices

**Videos tutoriales:**
- Autodesk Civil 3D - Corridor Surfaces Deep Dive
- Boundaries for Corridor Surfaces
- Quantity Takeoff from Corridor Surfaces

**Estándares:**
- AASHTO - Pavement Design Guide (espesores de capas)
- Local standards de estructura de pavimento

---

## Resumen

En esta lección aprendiste:

✅ Qué son **corridor surfaces** y su diferencia con TIN surfaces estándar (dinámicas vs estáticas)
✅ Diferencia entre **Top surfaces** (pavimento terminado) y **Datum surfaces** (sub-base, datum)
✅ Uso de **code set styles** y verificación de point codes / link codes
✅ Crear corridor surface de **pavimento** usando link code "Top" o point code "Pave"
✅ Crear corridor surface de **sub-base** usando link code "Datum" o "Base"
✅ Añadir **boundaries** automáticos desde feature lines (ETW, Daylight)
✅ Tipos de boundaries: From feature line, Daylight, Polygon
✅ Calcular **volúmenes** de materiales (pavimento, base) con composite volumes
✅ Aplicar **análisis de drenaje** (slopes, watersheds) a corridor surfaces
✅ **Exportar** corridor surfaces a LandXML para intercambio con software de construcción

**Próxima Lección:** Feature Lines from Corridors - Aprenderás a extraer feature lines desde el corridor usando códigos de puntos, editar feature lines, y utilizarlas para grading, lot grading, y sitework.

---

**Tiempo de estudio recomendado:** 80 minutos
**Práctica adicional:** 60 minutos creando múltiples corridor surfaces (pavimento, base, sub-base), aplicando boundaries, y calculando volúmenes
