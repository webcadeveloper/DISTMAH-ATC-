# Lección 3: Targets y Offset Alignments - Diseño Adaptativo

**Duración:** 80 minutos
**Módulo:** 1 - Corridors y Assemblies
**Curso:** Autodesk Civil 3D 2026 - Avanzado
**Nivel:** Avanzado

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender los tipos de targets: Surface, Width/Offset, Slope
✅ Configurar surface targets para taludes adaptativos
✅ Aplicar width targets para carriles de ancho variable (ensanchamiento en curvas)
✅ Utilizar offset targets con alineamientos paralelos (intersecciones)
✅ Crear offset alignments desde centerline con horizontal constraints
✅ Generar profiles from surface para offset alignments
✅ Modelar multi-baseline corridors (intersecciones en T, rotondas)
✅ Configurar target mapping por región
✅ Usar conditional subassemblies con targets (medianas variables)
✅ Resolver target conflicts y errores comunes

---

## Introducción

Los **targets** permiten que el corridor se adapte dinámicamente a condiciones externas:
- **Surface targets:** Taludes que siguen el terreno natural (EG)
- **Width/Offset targets:** Carriles que ensanchan en curvas o siguen alineamientos paralelos
- **Slope targets:** Pendientes transversales variables según criterios de diseño

Este sistema de targets transforma corridors estáticos en modelos **paramétricos inteligentes** que responden a cambios en tiempo real. Modificas un alignment, y el corridor se ajusta automáticamente.

**Aplicación profesional:** Intersecciones complejas con múltiples ramales, carriles auxiliares de aceleración/desaceleración, ensanchamientos urbanos, rotondas - todos requieren targets avanzados.

---

## 1. Conceptos de Targets

### 1.1 ¿Qué es un Target?

**Definición:**
Un target es un objeto de Civil 3D (surface, alignment, feature line, profile) que el corridor utiliza como **referencia externa** para adaptar geometría.

**Tipos principales:**

**1. Surface Targets:**
- Superficie TIN (ej: EG - Existing Ground)
- Subassemblies adaptativos proyectan hasta intersectar la superficie
- Uso: Taludes (daylight), LinkToSurface, BasicSideSlopeCutDitch

**2. Width or Offset Targets:**
- Alignment horizontal (offset alignment)
- Subassemblies extienden hasta el alignment target
- Uso: Carriles de ancho variable, rampas, intersecciones

**3. Slope Targets:**
- Profile vertical
- Subassemblies siguen pendiente del profile target
- Uso: Pendientes transversales variables (raro en práctica estándar)

**4. Feature Line Targets:**
- Feature line 3D
- Similar a offset alignment pero más flexible (puede tener quiebres)
- Uso: Bordes irregulares, grading complejo

![Target Types Overview](../imagenes/leccion-3-target-types.png)

### 1.2 Target Mapping

**Target Mapping** es el proceso de asignar targets específicos a subassemblies del assembly.

**Configuración:**
- Se realiza en **Corridor Properties → Parameters → Region → Targets tab**
- Cada región puede tener targets diferentes
- Targets pueden cambiar por estación (tema avanzado)

**Ejemplo:**
Assembly con:
- BasicLane (carril derecho) → No requiere target
- BasicShoulder (berma derecha) → No requiere target
- LinkToSurface (talud derecho) → **Requiere Surface target** (EG)

Mapping:
```
Surfaces → EG (Existing Ground)
```

---

## 2. Surface Targets - Taludes Adaptativos

### 2.1 Subassemblies que Requieren Surface Target

**LinkToSurface:**
- Conecta desde edge of shoulder hasta superficie EG
- Aplica cut slope o fill slope según elevación relativa
- **Obligatorio:** Requiere surface target

**BasicSideSlopeCutDitch:**
- Similar a LinkToSurface pero con cuneta en corte
- **Obligatorio:** Requiere surface target

**DaylightGeneral, DaylightMaxWidth:**
- Variantes avanzadas de LinkToSurface
- Maximum offset, benching, etc.
- **Obligatorio:** Requiere surface target

### 2.2 Configurar Surface Target

**Ya lo hiciste en Lección 2, pero repaso:**

1. **Create Corridor o Edit Corridor Properties**
2. **Parameters tab → Region → Targets tab**
3. **Surfaces row:**
   - Click en celda "Object Name"
   - **Pick from drawing** icon → Click
4. **Add surface:**
   - Dropdown: Selecciona **EG**
   - **OK**

**Resultado:**
Tabla muestra: `Surfaces | EG`

### 2.3 Múltiples Surface Targets

**Caso de uso:** Corridor con targets diferentes en cada lado.

**Ejemplo:**
- Talud derecho proyecta a **EG** (terreno natural)
- Talud izquierdo proyecta a **EG-Adjusted** (terreno modificado previo)

**Configuración:**
1. Assembly debe tener subassemblies específicos por lado (LinkToSurface Right, LinkToSurface Left)
2. Targets tab:
   - **Surfaces (Right):** EG
   - **Surfaces (Left):** EG-Adjusted

**Limitación:**
Civil 3D standard target mapping asigna misma superficie a TODOS los subassemblies adaptativos. Para control granular, necesitas:
- **Subassembly Properties override** (manual por subassembly)
- O **Subassembly Composer custom logic**

![Multiple Surface Targets](../imagenes/leccion-3-multiple-surface-targets.png)

---

## 3. Width Targets - Carriles de Ancho Variable

### 3.1 Concepto de Width Targets

**Problema de diseño:**
En curvas horizontales, el carril puede requerir **ensanchamiento** (widening) para acomodar vehículos grandes (camiones, buses) que necesitan más espacio al girar.

**Solución tradicional (sin targets):**
- Crear múltiples regions con assemblies de anchos diferentes
- Manual, tedioso, inflexible

**Solución con Width Targets:**
- Usa subassembly **WidthTarget** o **BasicLaneTransition**
- El ancho del carril se adapta automáticamente según criterio (ej: radios de curva)

### 3.2 Subassemblies con Width Targets

**BasicLaneTransition:**
- Lane que cambia de ancho gradualmente
- Requiere **Width target** (generalmente offset alignment con offset variable)

**WidthTarget (advanced):**
- Subassembly genérico que extiende hasta offset target
- Más flexible que BasicLaneTransition

### 3.3 Crear Width Target con Offset Alignment

**Ejemplo:** Carril derecho ensancha de 3.50 m a 4.00 m en curvas cerradas.

**Paso 1: Crear Offset Alignment (borde del carril)**

1. **Alignment Tools:**
   - Home tab → Create Design → Alignment → **Alignment from Objects** o **Offset Alignment**

2. **Offset Alignment (método recomendado):**
   - Command: `CREATEOFFSETAL IGNMENT`
   - Select parent alignment: **Centerline-Highway**
   - **Offset side:** Right
   - **Offset distance:**
     - En tangentes: `3.50 / 2 = 1.75 m` (la mitad del ancho del carril)
     - En curvas: `4.00 / 2 = 2.00 m` (ensanchado)

**IMPORTANTE:** Offset alignment con offset VARIABLE requiere **Widen command** o **manual station-by-station editing** (complejo).

**Método simplificado para aprendizaje:**
- Offset fijo de 1.75 m (sin ensanchamiento)
- Caso avanzado de ensanchamiento variable: tema de módulos posteriores

**Paso 2: Create Profile from Surface para Offset Alignment**

El offset alignment necesita un profile asociado:

1. **Create Profile View:**
   - Home tab → Create Design → Profile View
   - Select alignment: **Offset-Right-Lane**
   - Create view

2. **Create Profile from Surface:**
   - Profile View contextual ribbon → Create Design → **Profile from Surface**
   - Surface: **EG**
   - Add to profile view
   - Name: `EG-Offset-Right`

**Paso 3: Configurar Assembly con WidthTarget**

En lugar de BasicLane, usa **BasicLaneTransition:**

1. Tool Palette → Lanes → **BasicLaneTransition**
2. Properties:
   - **Side:** Right
   - **Width (start):** 3.50 m
   - **Width (end):** 3.50 m (por ahora fijo)
   - **Offset Target:** (se configurará en Corridor Targets)

**Paso 4: Corridor Target Mapping**

1. Corridor Properties → Region → **Targets tab**
2. **Width or Offset Targets:**
   - Click en celda → **Pick from drawing**
   - Add → Selecciona **Offset-Right-Lane** (alignment)
   - **OK**

**Resultado:**
El carril derecho extiende hasta el offset alignment. Si modificas el offset alignment (mueves puntos), el carril se ajusta dinámicamente.

![Width Target Configuration](../imagenes/leccion-3-width-target.png)

### 3.4 Casos de Uso Profesionales

**Ensanchamiento en curvas:**
- AASHTO recomienda ensanchamiento en curvas con radio <200 m
- Fórmula ensanchamiento: `W = (n * (R - sqrt(R^2 - L^2)) / R) + Z`
  - W = ensanchamiento
  - n = número de carriles
  - R = radio de curva
  - L = longitud de vehículo de diseño (ej: 12 m para WB-20 truck)
  - Z = clearance lateral

**Carriles auxiliares de aceleración/desaceleración:**
- Rampa de entrada/salida en autopista
- Carril adicional que aparece gradualmente (0 m → 3.65 m → 3.65 m → 0 m)

**Tapers (transiciones):**
- Reducción de carriles (ej: 4 lanes → 2 lanes)
- Width target permite transición suave sobre longitud específica

---

## 4. Offset Alignments - Alineamientos Paralelos

### 4.1 ¿Qué es un Offset Alignment?

**Definición:**
Alignment horizontal creado a distancia fija u offset variable desde un alignment "padre" (parent alignment).

**Relación con parent:**
- **Horizontal constraint:** Offset alignment sigue geometría del parent (tangentes, curvas)
- **Offset distance:** Puede ser constante o variable por estación
- **Vertical independence:** El profile del offset es independiente (no hereda profile del parent)

**Usos principales:**
1. **Bordes de carril** (edge of lane) para width targets
2. **Carriles auxiliares** (auxiliary lanes) en autopistas
3. **Intersecciones** - Cada ramal es offset del main alignment
4. **Rampas** de intercambio vial

### 4.2 Crear Offset Alignment

**Método 1 - Offset from Alignment:**

1. **Home tab → Create Design → Alignment dropdown → Offset Alignment**

2. **Command line:**
   ```
   Select parent alignment: [Click en Centerline-Highway]
   ```

3. **Create Offset Alignment dialog:**
   - **Alignment Name:** `Offset-Right-3.50m`
   - **Description:** "Borde derecho de carril, offset +3.50m desde centerline"
   - **Alignment Type:** Offset
   - **Offset Side:** Right
   - **Offset Distance:** `3.50` m (fijo)
   - **Alignment Style:** (default)
   - **Alignment Layer:** C-ROAD-ALGN-OFFSET
   - **OK**

**Resultado:**
- Offset alignment creado a 3.50 m a la derecha del centerline
- Aparece en Prospector → Alignments → Offset-Right-3.50m
- Visualmente: Línea paralela al centerline

![Create Offset Alignment](../imagenes/leccion-3-create-offset-alignment.png)

**Método 2 - Offset with Variable Distance (Avanzado):**

**Widen Offset Alignment:**
1. Select offset alignment → Right-click → **Edit Alignment Geometry**
2. **Widen Alignment** tool (Alignment toolbar)
3. Especifica estaciones y offset amounts:
   - Station 0+000: Offset 3.50 m
   - Station 0+250: Offset 4.00 m (ensanchado)
   - Station 0+500: Offset 3.50 m (vuelve a normal)
4. Transitions lineales o parabólicas

**Uso:** Ensanchamiento progresivo en curvas, tapers.

### 4.3 Profile from Surface para Offset

**CRÍTICO:** Offset alignment necesita profile asociado para usarse en corridor.

**Pasos:**

1. **Create Profile View:**
   - Home tab → Create Design → **Profile View**
   - Select alignment: **Offset-Right-3.50m**
   - Station range: Full (0+000 a fin)
   - **Create Profile View**

2. **Create Profile from Surface:**
   - En el profile view, ribbon contextual → **Profile from Surface**
   - **Surface:** EG
   - **Add to profile view:** ✓
   - **Profile name:** `EG-Offset-Right`
   - **Create**

**Resultado:**
- Profile "EG-Offset-Right" asociado a "Offset-Right-3.50m"
- Este profile representa el terreno natural en el offset (no es el finished grade del carril)

**Opcional - Create Finished Grade Profile:**
Si necesitas diseñar elevación específica del borde del carril:
1. **Create Design Profile** (no from surface)
2. Layout tools → Draw tangents con PVIs
3. Profile name: `FG-Offset-Right`

**Para la mayoría de casos:** Profile from surface es suficiente (el corridor calcula elevaciones desde centerline profile + pendiente transversal).

---

## 5. Multi-Baseline Corridors - Intersecciones

### 5.1 Concepto de Multi-Baseline

**Corridor simple (Lección 2):**
- 1 baseline (centerline)
- 1 alignment, 1 profile, 1 assembly

**Multi-baseline corridor:**
- **2+ baselines** (centerline + rampas/ramales)
- Cada baseline tiene alignment y profile independientes
- Uso: Intersecciones en T, intersecciones en X, rotondas, intercambios viales

**Ventaja:**
- Todo el modelo de la intersección en un solo corridor object
- Coordina elevaciones y transiciones entre ramales
- Calcula volúmenes totales (corte/relleno de toda la intersección)

### 5.2 Ejemplo: Intersección en T

**Componentes:**
- **Baseline 1:** Centerline-Highway (carretera principal, pasa recto)
- **Baseline 2:** Ramp-Right (ramal derecho que conecta)

**Geometría:**
- Highway: 2 carriles, continúa recto
- Ramp: 1 carril, sale a la derecha en station 1+250 del highway

**Paso 1: Crear Alignments**

**Ya tienes:**
- `Centerline-Highway` (baseline 1, existente)

**Crear nuevo:**
1. **Ramp alignment:**
   - Home tab → Create Design → Alignment → **Alignment from Objects** (si ya tienes geometría)
   - O **Alignment Creation Tools** (dibujar desde cero)

2. **Dibujar ramp:**
   - Inicia en aproximadamente station 1+200 del highway (offset derecho)
   - Curva de salida (ej: radio 50 m)
   - Tangente de escape (200 m)
   - Name: `Ramp-Right-T-Intersection`

3. **Verify:**
   - Prospector → Alignments → Ramp-Right-T-Intersection

**Paso 2: Crear Profiles**

**Highway profile:** Ya existe (`FG-Highway`)

**Ramp profile:**
1. Create Profile View para `Ramp-Right-T-Intersection`
2. **Profile from Surface** (EG)
3. **Create Design Profile:**
   - Name: `FG-Ramp-Right`
   - Layout tangents:
     - Inicia en elevación del highway en punto de salida (ej: 125.50 m)
     - Desciende con slope -3.0% (ramp descendente)
     - Vertical curves en cambios de pendiente
4. **Create Profile**

**Paso 3: Crear Assembly para Ramp**

**Ramp assembly (diferente del highway):**
1. Create Assembly:
   - Name: `Ramp-1Lane-4m`
   - Description: "Rampa 1 carril 4.0m, bermas 1.5m, taludes 2:1"

2. Subassemblies:
   - BasicLane: Width 4.00 m, Side Right (desde centerline)
   - BasicShoulder: Width 1.50 m (berma reducida para ramp)
   - LinkToSurface: talud derecho
   - Lado izquierdo: Simetría (o solo BasicLane + talud, sin berma si ramp es compacta)

**Paso 4: Add Baseline to Corridor**

**Asumiendo que ya existe corridor del highway:**

1. **Corridor Properties:**
   - Select corridor → Right-click → **Corridor Properties**

2. **Parameters tab:**
   - Right-click en nombre del corridor (top level) → **Add Baseline**

3. **Add Baseline dialog:**
   - **Baseline Type:** Alignment and Profile
   - **Alignment:** `Ramp-Right-T-Intersection`
   - **Profile:** `FG-Ramp-Right`
   - **OK**

4. **Resultado:**
   - Nuevo baseline aparece en árbol: "Ramp-Right-T-Intersection"
   - Automáticamente crea región default

**Paso 5: Assign Assembly a Ramp Baseline**

1. **Expand baseline** "Ramp-Right-T-Intersection"
2. **Region** (generada automáticamente) → Right-click → **Edit Region**
3. **Assembly:** Dropdown → Selecciona `Ramp-1Lane-4m`
4. **Frequency tab:** Configurar (similar a Lección 2)
5. **Targets tab:** Surfaces → EG
6. **OK**

**Rebuild corridor:**
- Corridor ahora incluye highway + ramp
- Visualización 3D muestra intersección completa

![Multi-Baseline Corridor T-Intersection](../imagenes/leccion-3-multi-baseline-t.png)

### 5.3 Intersection Regions y Transitions

**Problema:** En el punto donde ramp se separa del highway, puede haber **overlap** (superposición) o **gap** (espacio vacío).

**Solución profesional (avanzada):**
1. **Corridor Regions customizadas:**
   - Split highway corridor en región ANTES de intersección, región DE intersección, región DESPUÉS
   - Región de intersección usa assembly especial con "taper" (transición)

2. **Subassemblies condicionales:**
   - `ConditionalHorizontalTarget` - cambia comportamiento según existencia de offset alignment
   - Útil para mediana que desaparece en zona de intersección

**NOTA:** Diseño completo de intersecciones es tema de **Módulo 2: Intersections y Roundabouts Avanzados**. En este módulo aprendes conceptos básicos de multi-baseline.

---

## 6. Target Mapping por Región

### 6.1 Diferentes Targets en Diferentes Regions

**Caso de uso:**
- Km 0+000 a 1+000: Zona rural, taludes a superficie EG
- Km 1+000 a 2+000: Zona urbana, taludes a superficie "EG-Urban-Modified" (terreno nivelado previo)

**Configuración:**

**Paso 1: Split Corridor en Regions**

1. Corridor Properties → **Parameters tab**
2. Expand baseline → Right-click en región existente → **Split Region**
3. **Split Station:** `1+000` + Enter
4. Resultado: 2 regiones:
   - Region 1: 0+000 a 1+000
   - Region 2: 1+000 a 2+000

**Paso 2: Assign Targets por Region**

**Region 1 (rural):**
1. Right-click → **Edit Region**
2. **Targets tab:** Surfaces → **EG**
3. **OK**

**Region 2 (urbana):**
1. Right-click → **Edit Region**
2. **Targets tab:** Surfaces → **EG-Urban-Modified**
3. **OK**

**Resultado:**
- De 0+000 a 1+000: Taludes proyectan a EG
- De 1+000 a 2+000: Taludes proyectan a EG-Urban-Modified

**Rebuild:** Corridor se actualiza con targets diferentes por zona.

![Region-Specific Targets](../imagenes/leccion-3-region-targets.png)

---

## 7. Conditional Subassemblies con Targets

### 7.1 ¿Qué son Conditional Subassemblies?

**Definición:**
Subassemblies que cambian comportamiento según condiciones externas (ej: presencia de target, estación, elevación).

**Ejemplos estándar:**
- **ConditionalHorizontalTarget:** Extiende hasta offset alignment SI existe; si no, usa ancho fijo
- **ConditionalVerticalTarget:** Similar para targets verticales

### 7.2 Caso de Uso: Mediana Variable

**Problema:**
- Carretera autopista con mediana de 6.0 m
- En zona de intersección (station 1+200 a 1+400), mediana se reduce a 0 m (los carriles se juntan para permitir giro)

**Solución sin conditional:**
- Crear 3 regiones:
  - 0+000-1+200: Assembly con mediana 6.0m
  - 1+200-1+400: Assembly con mediana 0m
  - 1+400-fin: Assembly con mediana 6.0m
- **Problema:** Transición abrupta, no suave

**Solución con ConditionalHorizontalTarget:**

**Paso 1: Crear Offset Alignment para borde de mediana**

1. Create offset alignment desde centerline:
   - Offset distance: Normalmente 3.0 m (la mitad de mediana 6.0m)
   - En zona de intersección (1+200-1+400): Offset reduce gradualmente a 0 m (widen tool)

**Paso 2: Assembly con Conditional Subassembly**

1. Tool Palette → **Medians** → **MedianConditional** (o similar)
   - Alternativamente, **Generic** → **ConditionalHorizontalTarget**

2. Properties:
   - **Default Width:** 3.0 m (si no hay target)
   - **Target Alignment:** (se asigna en corridor targets)
   - **Conditional Logic:** Extend to target if exists, else use default

**Paso 3: Corridor Target Mapping**

1. Corridor → Region → **Targets tab**
2. **Width or Offset Targets:** Add → Offset alignment de borde de mediana
3. **OK**

**Resultado:**
- De 0+000-1+200: Mediana 6.0 m (offset alignment a 3.0 m de cada lado)
- De 1+200-1+400: Mediana reduce gradualmente según offset alignment
- De 1+400-fin: Mediana 6.0 m nuevamente

**Transición suave automática.**

![Conditional Median Target](../imagenes/leccion-3-conditional-median.png)

---

## 8. Troubleshooting - Target Conflicts

### 8.1 Error: "Target Not Found"

**Síntoma:**
- Corridor no se genera en ciertas estaciones
- Warning: "Target [nombre] not found at station X+XXX"

**Causa:**
- Target object (alignment, surface) no cubre todo el rango de estaciones del corridor
- Ejemplo: Offset alignment termina en station 1+500, pero corridor va hasta 2+000

**Solución:**
1. **Extend target object:**
   - Si es alignment: Edit alignment geometry, extend tangent
   - Si es surface: Add data (points, breaklines) para cubrir área

2. **Split corridor en regiones:**
   - Región 1 (0+000-1+500): Usa offset target
   - Región 2 (1+500-2+000): No usa offset target (assembly sin subassembly que lo requiera)

### 8.2 Error: "No Solution for Subassembly with Target"

**Síntoma:**
- Subassembly con target genera "No solution"
- Posibles subassemblies: WidthTarget, ConditionalHorizontalTarget

**Causa:**
- Target está demasiado lejos (excede maximum offset del subassembly)
- Target intersecta otros elementos del assembly (conflicto geométrico)

**Solución:**
1. **Check target proximity:**
   - Verifica que offset alignment esté a distancia razonable (no 500 m del centerline)

2. **Edit subassembly properties:**
   - Increase Maximum Offset (si aplicable)

3. **Review assembly logic:**
   - Puede haber conflicto en orden de subassemblies (ej: target está "adentro" de otro elemento)

### 8.3 Error: "Target Surface Outside Boundary"

**Síntoma:**
- Surface target (EG) genera errores en bordes del proyecto

**Causa:**
- Corridor extiende fuera de los límites de la superficie TIN
- Common en taludes muy largos (terreno plano con fill alto)

**Solución:**
1. **Extend surface:**
   - Add boundary a la superficie EG (larger border)
   - Add "fake" points en bordes (elevación estimada) para extender TIN

2. **Limit corridor extension:**
   - Subassembly LinkToSurface → Properties → **Maximum Offset:** 50 m (limita extensión)
   - Evita taludes infinitos

### 8.4 Performance con Múltiples Targets

**Síntoma:**
- Corridor rebuild muy lento con targets complejos

**Causa:**
- Cada target requiere cálculos de intersección (computacionalmente costoso)
- Múltiples offset alignments, surfaces detalladas, conditional logic

**Solución:**
1. **Optimize frequency:**
   - Reduce density en tangentes (50 m en vez de 25 m)

2. **Simplify targets:**
   - Surface target: Reduce triangle count (Simplify Surface command)
   - Offset alignments: Simplify geometry (menos PIs, curvas más suaves)

3. **Manual rebuild:**
   - Desactiva Automatic Rebuild
   - Haz cambios batch, rebuild una vez al final

---

## Ejercicio Práctico 3

**Objetivo:** Configurar corridor con múltiples targets (surface, offset alignment).

**Requisitos:**
- Corridor existente: `Corridor-Exercise2-Rural` (de Ejercicio 2, Lección 2)
- Alignment: `Centerline-Exercise2`
- Profile: `FG-Exercise2`
- Surface: `EG-Exercise2`

**Tareas:**

1. **Create Offset Alignment (borde derecho de carril):**
   - Name: `Offset-Right-Lane-Edge`
   - Parent: Centerline-Exercise2
   - Offset: 1.50 m (la mitad de ancho de carril 3.00 m)
   - Side: Right

2. **Create Profile from Surface para Offset:**
   - Profile View para Offset-Right-Lane-Edge
   - Profile from Surface: EG-Exercise2
   - Name: `EG-Offset-Right`

3. **Modify Assembly (añadir width target capability):**
   - **Opción 1:** Modifica assembly existente - reemplaza BasicLane con BasicLaneTransition
   - **Opción 2:** Crea nuevo assembly `Rural-2L-WidthTarget` con BasicLaneTransition

4. **Configure Corridor Targets:**
   - Corridor Properties → Region → Targets tab
   - **Surfaces:** EG-Exercise2 (ya configurado)
   - **Width or Offset Targets:** Add → Offset-Right-Lane-Edge

5. **Rebuild y verificar:**
   - Rebuild corridor
   - Section Editor: Verifica que carril derecho extiende hasta offset alignment

6. **Modify Offset Alignment (test dynamic behavior):**
   - Edit Offset-Right-Lane-Edge geometry
   - Mover un PI (Point of Intersection) 0.50 m hacia afuera
   - Rebuild corridor
   - **Observa:** Carril derecho se ensancha dinámicamente en esa zona

**Entregables:**
- Drawing: `Ejercicio3-Corridor-Targets.dwg`
- Screenshot 1: Plan view mostrando Centerline + Offset alignment
- Screenshot 2: Section Editor en estación donde offset es diferente (ensanchado)
- Screenshot 3: Corridor Properties - Targets tab mostrando Surface y Offset targets configurados
- Reporte: Descripción de cómo el corridor respondió al cambio en offset alignment

![Ejercicio 3 Expected Result](../imagenes/leccion-3-ejercicio3-result.png)

---

## Evaluación

**Pregunta 1:**
¿Cuáles son los 3 tipos principales de targets en Civil 3D corridors?

**Pregunta 2:**
¿Qué diferencia hay entre un "width target" y un "offset target"?

**Pregunta 3:**
¿Por qué un offset alignment necesita un profile asociado para usarse en corridors?

**Pregunta 4:**
En un multi-baseline corridor (ej: intersección en T), ¿cuántos baselines requieres mínimo? ¿Por qué?

**Pregunta 5:**
Si tienes un corridor de 0+000 a 2+000, y quieres que de 0+000 a 1+000 use surface "EG" como target, y de 1+000 a 2+000 use "EG-Urban" como target, ¿qué debes hacer?

**Pregunta 6:**
¿Qué es un "conditional subassembly" y en qué casos es útil?

**Pregunta 7:**
Si un offset alignment termina en station 1+500 pero tu corridor va hasta 2+000, ¿qué error probablemente recibirás y cómo lo solucionas?

**Pregunta 8:**
Menciona 2 razones por las que un corridor con múltiples targets puede tener performance lento.

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "Working with Corridor Targets"
- Autodesk Civil 3D 2026 - Offset Alignments Guide
- Multi-Baseline Corridor Workflows (PDF)

**Videos tutoriales:**
- Autodesk Civil 3D - Corridor Targets Deep Dive
- Creating Offset Alignments for Intersections
- Conditional Subassemblies Best Practices

**AASHTO Green Book:**
- Chapter 3: Cross Section Elements - Traveled Way Widening
- Chapter 9: Intersections - Geometric Design

---

## Resumen

En esta lección aprendiste:

✅ Tipos de targets: **Surface** (taludes), **Width/Offset** (carriles variables), **Slope** (pendientes)
✅ Configurar **surface targets** para subassemblies adaptativos (LinkToSurface, BasicSideSlopeCutDitch)
✅ Aplicar **width targets** usando offset alignments para carriles de ancho variable
✅ Crear **offset alignments** con horizontal constraints y profiles from surface
✅ Modelar **multi-baseline corridors** para intersecciones (2+ baselines)
✅ Configurar **target mapping por región** (diferentes targets en diferentes zonas)
✅ Usar **conditional subassemblies** para comportamiento adaptativo (medianas variables)
✅ Troubleshooting de targets: "Target not found", "No solution", performance issues

**Próxima Lección:** Corridor Surfaces - Aprenderás a generar superficies automáticas de pavimento, sub-base, y terraplén desde el corridor, configurar boundaries, y calcular volúmenes de materiales.

---

**Tiempo de estudio recomendado:** 80 minutos
**Práctica adicional:** 60 minutos creando corridors con offset alignments, multi-baseline, y conditional subassemblies
