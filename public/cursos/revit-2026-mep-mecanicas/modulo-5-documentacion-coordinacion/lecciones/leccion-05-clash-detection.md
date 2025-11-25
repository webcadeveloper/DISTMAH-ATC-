# Lección 5: Clash Detection Avanzado

## Introducción

El **Clash Detection** (Detección de Interferencias) es un proceso crítico en BIM que identifica **conflictos geométricos** entre elementos de diferentes disciplinas antes de la construcción. En proyectos MEP, los clashes más comunes ocurren entre ductos-estructura, tuberías-arquitectura, y sistemas MEP entre sí.

Revit MEP 2026 ofrece la herramienta **Interference Check** integrada, con capacidades avanzadas de filtrado, categorización de clashes, reportes exportables y preparación para coordinación en **Navisworks** o **BIM 360**.

Esta lección cubre el flujo completo de clash detection: configuración de sets, ejecución de análisis, clasificación de interferencias, resolución y documentación.

## Tipos de Clashes

### 1. Hard Clashes (Clashes Duros)

**Definición:** Elementos que **se intersectan físicamente** en el espacio 3D.

**Ejemplos críticos:**
- Ducto rectangular atraviesa viga de acero
- Tubería de agua fría intersecta muro de concreto (sin sleeve)
- Cable tray choca con tubería de drenaje
- Manejadora de aire intersecta columna estructural

**Severidad:** **ALTA** - Imposible construir sin modificaciones.

### 2. Soft Clashes (Clashes Blandos)

**Definición:** Elementos que **violan distancias mínimas** requeridas (clearances).

**Ejemplos:**
- Ducto a menos de 50mm de viga (insuficiente para aislamiento)
- Tubería de agua caliente a 30mm de tubería de gas (código requiere 100mm mínimo)
- Equipo sin clearance para mantenimiento (ASHRAE requiere 1m frente a manejadoras)

**Severidad:** **MEDIA** - Construible pero viola códigos o dificulta mantenimiento.

### 3. Workflow Clashes (Clashes de Secuencia)

**Definición:** Conflictos de **secuencia de construcción** (4D).

**Ejemplo:**
- Sistema MEP modeled para instalar antes que losa (pero losa se construye primero según cronograma)

**Nota:** Revit Interference Check NO detecta este tipo (requiere software 4D como Navisworks con TimeLiner).

## Interference Check en Revit MEP

### Acceso a la Herramienta

**Ubicación:**
1. **Collaborate** → **Interference Check** → **Run Interference Check**

**Prerequisitos:**
- Modelo MEP con elementos modelados
- Links de arquitectura/estructura cargados
- Vista 3D activa (recomendado)

### Configurar Primera Interferencia Check

**Ejemplo:** Detectar clashes entre ductos mecánicos y estructura.

**Paso 1: Abrir Interference Check**

1. **Collaborate** → **Interference Check** → **Run Interference Check**
2. **Interference Check** dialog aparece

**Paso 2: Seleccionar Elementos (Selection A)**

**Selection A:** Elementos MEP (ductos)

1. En section **Categories from:** seleccionar `Current Project`
2. **Selection A:**
   - ☑ **Ducts**
   - ☑ **Duct Fittings**
   - ☑ **Duct Accessories** (dampers, VAV)

**Paso 3: Seleccionar Elementos (Selection B)**

**Selection B:** Estructura

1. **Categories from:** seleccionar link estructural (ej. `Proyecto_STR.rvt`)
2. **Selection B:**
   - ☑ **Structural Framing** (vigas, cerchas)
   - ☑ **Structural Columns**
   - ☑ **Structural Foundations** (si relevante)

**Paso 4: Configurar Tolerancia**

**Tolerance:** `0 mm` (detectar solo hard clashes)

**Para soft clashes:**
- Tolerance: `50 mm` (detecta elementos a menos de 50mm)

**Paso 5: Ejecutar Check**

1. Click **OK**
2. Revit analiza intersecciones (puede tomar 30s - 5min según tamaño de modelo)

**Paso 6: Revisar Resultados**

**Interference Report** dialog muestra lista de interferencias:

| Element 1 | Element 2 | Status | Assigned To |
|-----------|-----------|--------|-------------|
| Rectangular Duct 600x300 | W16x26 Beam | New | - |
| Duct Elbow 90° | Structural Column | New | - |
| VAV Box | W21x44 Beam | New | - |

**Cada fila** representa un clash detectado.

![Interference Report](../imagenes/mod5-interference-report.png)

**Paso 7: Visualizar Clash en Modelo**

1. En **Interference Report**, click en fila de clash
2. Click **Show** button
3. Revit abre vista 3D con elementos del clash **highlighted** (resaltados)
4. **Section Box** automáticamente aísla zona del clash

**Paso 8: Asignar Responsable**

1. Click en campo **Assigned To** del clash
2. Escribir nombre: `Juan Perez - MEP` (responsable de resolver)
3. Repetir para cada clash

**Paso 9: Exportar Reporte**

1. Click **Export...** button
2. **Export Interference Report** dialog:
   - Format: **HTML** (visualizable en navegador)
   - Incluir: ☑ **Images** (capturas de cada clash)
3. Save as: `Clash_Report_MEP-M_vs_STR_2024-11-23.html`

**Reporte HTML** incluye:
- Tabla de clashes
- Imagen 3D de cada clash
- Datos de elementos (ID, categoría, nivel)

## Sets de Clash Detection

### Crear Sets Reutilizables

**Problema:** Reconfigurar categorías cada vez que ejecutas interference check es tedioso.

**Solución:** Guardar **Interference Check Settings**.

**Procedimiento:**

**Paso 1: Configurar Check Completo**

Configurar interference check como antes (ej. MEP-M vs. STR).

**Paso 2: Guardar Settings**

1. En **Interference Check** dialog, click **Save Settings...**
2. **Save Interference Check Settings:**
   - Name: `MEP-M vs Structure - Hard Clashes`
   - Location: `C:\BIM\ClashSets\`
3. Click **Save**

**Archivo guardado:** `MEP-M vs Structure - Hard Clashes.interference`

**Paso 3: Cargar Settings en Futuras Sesiones**

1. **Run Interference Check**
2. Click **Load Settings...**
3. Navegar a archivo `.interference`
4. Click **Open**

**Configuración cargada automáticamente** (categorías, tolerance, links).

### Sets Comunes en Proyectos MEP

**Set 1: MEP-M vs. Structure**
- Ducts, Mechanical Equipment vs. Structural Framing, Columns

**Set 2: MEP-M vs. Architecture**
- Ducts, Equipment vs. Walls, Floors, Ceilings

**Set 3: MEP-M vs. MEP-E**
- Ducts vs. Cable Trays, Conduits

**Set 4: MEP-M vs. MEP-S**
- Ducts vs. Pipes (sanitarias)

**Set 5: MEP-M Self-Check**
- Ducts vs. Ducts (detectar overlaps dentro mismo sistema)

**Set 6: Clearance Check (Soft Clash)**
- Equipment vs. Walls (tolerance 1000mm - verificar espacio de mantenimiento)

## Clasificación de Clashes

### Estados de Clash (Status)

En **Interference Report**, cada clash tiene **status**:

| Status | Significado | Acción |
|--------|-------------|--------|
| **New** | Clash recién detectado | Revisar y clasificar |
| **Active** | Clash confirmado, en proceso de resolución | Trabajando en solución |
| **Reviewed** | Clash revisado por coordinador | Pendiente decisión |
| **Approved** | Clash aceptado (ej. sleeve será instalado) | Documentar solución |
| **Resolved** | Clash resuelto en modelo | Verificar en siguiente check |

**Workflow típico:**

1. **New** → Coordinador revisa
2. **Reviewed** → Reunión de coordinación discute
3. **Active** → Diseñador MEP trabaja en ruta alternativa
4. **Resolved** → Modelo actualizado, clash desaparece
5. **Approved** → Clash permanece pero con solución documentada (ej. "Install 150mm sleeve per detail D-101")

### Cambiar Status de Clash

1. En **Interference Report**, click en clash
2. Click en campo **Status**
3. Seleccionar nuevo status del dropdown
4. Agregar **Comments:** "Ducto será reruteado 300mm arriba para pasar bajo viga"

## Reglas de Clash Detection

### Ignorar Clashes Válidos

**Problema:** Algunos "clashes" son **intencionados** y válidos.

**Ejemplos:**
- Rejillas de supply air **deben** penetrar cielo raso arquitectónico (válido)
- Sleeve en muro de concreto **intencionalmente** intersecta muro (válido)
- Tubería atraviesa floor opening modelado (válido)

**Solución: Ignore Rules**

**Paso 1: Identificar Clash Válido**

En **Interference Report**, seleccionar clash de rejilla vs. cielo raso.

**Paso 2: Marcar como Ignored**

1. Click derecho en clash → **Ignore**
2. Clash permanece en reporte pero marcado como **Ignored**
3. NO cuenta en total de clashes activos

**Paso 3: Crear Regla de Ignorar**

Para ignorar **todos** los clashes de rejillas vs. cielos rasos:

1. En **Interference Check** dialog, sección **Ignore Rules**
2. Click **Add...**
3. **Ignore Rule:**
   - Name: `Air Terminals vs Ceilings`
   - Categories A: **Air Terminals**
   - Categories B: **Ceilings**
4. Click **OK**

**Ahora:** Todos los clashes entre air terminals y ceilings se ignoran automáticamente.

### Reglas Avanzadas con Filters

**Ejemplo:** Ignorar clashes de ductos **pequeños** (< 200mm) vs. vigas (ductos pequeños pueden pasar entre almas de vigas).

**Configuración:**

1. **Ignore Rule** → **Add Filter**
2. **Filter:**
   - Parameter: `Size` (de ducto)
   - Condition: `Less than`
   - Value: `200 mm`
3. Apply filter a **Categories A**

**Resultado:** Solo ductos < 200mm vs. vigas se ignoran (ductos grandes siguen reportándose).

## Resolución de Clashes - Estrategias

### 1. Rerouteo de Ductos (Más Común)

**Clash:** Ducto 600x300 intersecta viga W21x44.

**Solución:**
1. Seleccionar ducto en modelo
2. **Modify** → **Move** (vertical)
3. Subir ducto 400mm para pasar **sobre** viga
4. Verificar que no crea nuevo clash con losa superior
5. Re-run interference check → clash resuelto

**Tip:** Usar **3D snapping** con **Tab key** para snap a cara superior de viga.

### 2. Cambio de Tamaño de Ducto

**Clash:** Ducto rectangular 800x400 muy alto, choca con múltiples vigas.

**Solución:**
1. Cambiar a ducto **circular equivalente** (Ø500) - menor altura
2. O usar ducto oval 600x300 (flat oval)
3. Verificar que velocidad y fricción siguen dentro de límites

**Cálculo equivalente:**

Área rectangular: 800mm × 400mm = 320,000 mm²
Diámetro circular equivalente: √(320,000 × 4/π) = 638mm → usar Ø650

### 3. Offset de Tubería

**Clash:** Tubería sanitaria DN 100 choca con ducto de retorno.

**Solución:**
1. Seleccionar tubería
2. **Modify** → **Offset** (horizontal)
3. Offset 300mm hacia muro más cercano
4. Re-route conexiones a fixtures

### 4. Coordinación con Estructura (Beam/Column Relocation)

**Clash crítico:** Shaft de ductos verticales choca con columna estructural.

**Solución:**
1. **Reunión de coordinación** con estructural
2. Opciones:
   - **Opción A:** Mover columna 500mm (si estructural aprueba)
   - **Opción B:** Split shaft en dos shafts más pequeños a ambos lados de columna
3. **Decision:** Estructural confirma que columna NO puede moverse (critical load path)
4. **Final:** MEP modifica diseño con dos shafts

**Documentar:** En comments del clash: "Resolved - Split shaft per SK-MEP-101"

### 5. Sleeves y Penetraciones

**Clash:** Tubería de agua fría DN 50 debe atravesar muro de concreto.

**Solución válida:**
1. **NO resolver** clash moviéndolo (tubería debe pasar ahí)
2. **Modelar sleeve:**
   - **Insert** → **Load Family** → `Pipe Sleeve.rfa`
   - Colocar sleeve DN 100 en punto de penetración (2× tamaño de tubería)
3. Marcar clash como **Approved**
4. Comments: "Install DN 100 sleeve per MEP-S detail 5/A501"

**Coordination drawing:** Crear plano de elevación mostrando sleeve location y size.

## Reportes de Clash Detection

### Reporte HTML Detallado

**Generar reporte profesional:**

**Paso 1: Ejecutar Clash Detection Completo**

Ejecutar todos los sets (MEP-M vs STR, MEP-M vs ARQ, etc.)

**Paso 2: Exportar HTML con Imágenes**

1. **Interference Report** → **Export...**
2. **Export options:**
   - Format: **HTML**
   - ☑ **Include images of interferences**
   - Image size: **800x600 pixels**
   - ☑ **Group by Status** (agrupar por New, Active, Resolved)
3. Save as: `Clash_Report_Full_Building_2024-11-23.html`

**Reporte incluye:**

```html
<h1>Interference Report - Proyecto HVAC</h1>
<h2>Summary</h2>
Total Clashes: 127
  - New: 45
  - Active: 32
  - Reviewed: 28
  - Resolved: 22

<h2>New Clashes (45)</h2>
[Tabla con clashes nuevos + imágenes]

<h2>Active Clashes (32)</h2>
[Tabla con clashes en progreso + imágenes]
...
```

**Distribuir:** Enviar HTML a equipo de coordinación via email o cargar a BIM 360 Docs.

### Integración con BIM 360

**Para proyectos en BIM 360:**

1. Publicar modelo a BIM 360 Docs
2. Ejecutar clash detection en **BIM 360 Model Coordination** (interfaz web)
3. Clashes sincronizados entre Revit y BIM 360
4. **Asignar clashes** a miembros del equipo directamente en BIM 360
5. **Tracking:** Dashboard muestra progreso de resolución

**Ventaja:** Equipo remoto revisa clashes sin abrir Revit.

## Mejores Prácticas

### 1. Frecuencia de Clash Detection

**Recomendaciones:**

| Fase de Proyecto | Frecuencia |
|------------------|------------|
| Diseño Esquemático | Mensual (routing preliminar) |
| Desarrollo de Diseño | Semanal (coordinar zonas complejas) |
| Documentos de Construcción | **Diaria** (antes de publicar planos) |
| Construcción | Antes de cada RFI o submittal |

### 2. Priorización de Clashes

**Clasificar por severidad:**

**Priority 1 (Crítico):**
- Equipos principales vs. estructura
- Clashes en zonas de difícil acceso (post-construcción)

**Priority 2 (Alto):**
- Ductos/tuberías mains vs. estructura
- Clearance violations en mechanical rooms

**Priority 3 (Medio):**
- Branch ducts vs. arquitectura
- Soft clashes menores

**Priority 4 (Bajo):**
- Clashes fácilmente resueltos en obra (ej. small pipe offset)

**Enfocarse en P1 y P2 primero.**

### 3. Zona de Responsabilidad (Clash Ownership)

**Regla general:**

| Clash Type | Responsable de Resolver |
|------------|-------------------------|
| MEP-M vs STR | **MEP** (ductos flexibles, estructura rígida) |
| MEP-M vs ARQ | **Coordinación** (ambos ajustan) |
| MEP-M vs MEP-E | **Reunión conjunta** (quien tenga más flexibilidad) |
| MEP Equipment vs any | **MEP** (reubicar equipo) |

**Excepciones:** Documentar en matriz RACI del proyecto.

### 4. Documentación de Soluciones

**Para cada clash resuelto, documentar:**

1. **Clash ID** - Número de reporte
2. **Solución implementada** - Descripción breve
3. **Plano de referencia** - Ej. "Ver detalle 3/M-401"
4. **Aprobación** - Quién aprobó la solución

**Template de comments:**
```
Resolved 2024-11-23 by J.Perez
Solution: Duct rerouted 400mm up, passes over W21 beam
Verified clearance to slab above: 250mm (sufficient)
See coordination sketch SK-HVAC-023
```

## Revit 2026: Mejoras en Clash Detection

**Nuevas funcionalidades:**

1. **Clash Grouping** - Agrupar clashes similares automáticamente (ej. todos los clashes de un ducto main agrupados)
2. **Clash Heatmap** - Vista 3D color-coded mostrando zonas con más clashes (rojo = alta densidad)
3. **Automated Clash Re-check** - Al guardar modelo, Revit re-ejecuta clash detection automáticamente en background y notifica si clashes aumentaron

## Ejercicio Aplicado

**Ver:** Ejercicio 5 en `ejercicios.md` - Ejecutar clash detection completo, clasificar clashes, resolver 5 clashes críticos y generar reporte HTML.

---

**Próxima Lección:** Fabricación MEP Fundamentals - Preparación de modelos para fabricación CAM.
