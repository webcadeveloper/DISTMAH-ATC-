# Lección 1: Assemblies y Subassemblies Avanzados

**Duración:** 80 minutos
**Módulo:** 1 - Corridors y Assemblies
**Curso:** Autodesk Civil 3D 2026 - Avanzado
**Nivel:** Avanzado

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender la arquitectura de assemblies y su rol en el diseño de corridors
✅ Utilizar Tool Palettes para acceder a subassemblies estándar de Autodesk
✅ Diferenciar entre subassemblies métricos e imperiales
✅ Aplicar subassemblies fundamentales: BasicLane, BasicShoulder, BasicSideSlopeCutDitch, LinkToSurface
✅ Configurar attachment points y relaciones entre subassemblies
✅ Entender códigos de puntos (point codes) y link codes para corridor surfaces
✅ Crear assembly completo para carretera típica de 2 carriles
✅ Configurar assembly properties: nombre, descripción, code set style

---

## Introducción

Los **assemblies** son la base del modelado paramétrico en Civil 3D. Un assembly es una plantilla de sección transversal que define la geometría típica de tu carretera: carriles, bermas, aceras, taludes, cunetas, y cualquier otro elemento de la sección.

A diferencia de una simple sección dibujada con líneas y polilíneas, un assembly es **inteligente** - contiene reglas de diseño, relaciones geométricas, y comportamiento adaptativo. Cuando aplicas un assembly a lo largo de un alignment (creando un corridor), Civil 3D genera automáticamente un modelo 3D completo que se adapta a la geometría horizontal, vertical, y a las condiciones del terreno existente.

**Analogía profesional:** Si un corridor es un edificio, el assembly es el plano arquitectónico que define cómo debe construirse cada sección. Los subassemblies son los componentes individuales del plano (muros, pisos, techos).

---

## 1. Arquitectura de Assemblies en Civil 3D

### 1.1 Conceptos Fundamentales

**Assembly:**
- Objeto contenedor que agrupa subassemblies
- Define la sección transversal típica
- Se dibuja en el espacio de modelo, pero representa sección (no planta)
- Tiene un **baseline point** central (punto de referencia, generalmente centerline)
- No tiene escala de estación - es una plantilla genérica

**Subassembly:**
- Componente individual del assembly (carril, berma, talud, cuneta)
- Contiene lógica paramétrica (anchos, pendientes, materiales)
- Se conecta mediante **attachment points** (puntos de anclaje)
- Genera **point codes** y **link codes** para identificar elementos

**Baseline Point:**
- Punto de origen del assembly (0,0 en sección)
- Generalmente coincide con el centerline del alignment
- Offset 0.00, Elevation 0.00 (relativo)

![Arquitectura Assembly](../imagenes/leccion-1-assembly-architecture.png)

### 1.2 Attachment Points

Cada subassembly tiene puntos de conexión:

**Tipos de attachment points:**
- **Point 1 (inicio):** Donde se conecta al assembly previo
- **Point 2, 3, 4... (intermedios):** Puntos adicionales para conexiones
- **Top of curb, Back of curb:** Puntos específicos de bordillos
- **Daylight:** Punto de intersección con superficie existente

**Flujo de construcción:**
1. Inicia desde baseline point (centerline)
2. Añade BasicLane → crea attachment point a la derecha (edge of lane)
3. Añade BasicShoulder → conecta desde edge of lane, crea nuevo punto (edge of shoulder)
4. Añade LinkToSurface → conecta desde edge of shoulder, extiende hasta terreno existente (daylight)

**Regla crítica:** Los subassemblies se conectan en secuencia lógica, de adentro hacia afuera (centerline → carril → berma → talud → terreno natural).

---

## 2. Tool Palettes - Biblioteca de Subassemblies

Civil 3D incluye una biblioteca extensa de subassemblies estándar accesibles desde **Tool Palettes**.

### 2.1 Activar Tool Palettes

**Método 1:**
- Ribbon: **Home tab** → **Create Design panel** → **Assembly dropdown** → **Tool Palettes - Civil Imperial** o **Civil Metric**

**Método 2:**
- Command: `TOOLPALETTES` + Enter
- Presiona Ctrl+3 (toggle on/off)

**Método 3:**
- Menu: **View** → **Palettes** → **Tool Palettes**

### 2.2 Imperial vs Metric Palettes

**Civil Imperial:**
- Unidades: pies (ft), pulgadas (in), pies/s, mph
- Subassemblies optimizados para estándares US (AASHTO, MUTCD)
- Anchos default: 12 ft (carril estándar US)
- Pendientes: porcentaje, ratio (rise:run)

**Civil Metric:**
- Unidades: metros (m), centímetros (cm), m/s, km/h
- Subassemblies optimizados para estándares internacionales (ISO, PIARC)
- Anchos default: 3.50 m (carril estándar internacional)
- Pendientes: porcentaje, ratio

**IMPORTANTE:** Usa la paleta que coincida con las unidades de tu proyecto. Mezclar imperial/metric causa errores de escala y conversión.

![Tool Palettes Civil Metric](../imagenes/leccion-1-tool-palettes-metric.png)

### 2.3 Categorías de Subassemblies

Las Tool Palettes están organizadas por categoría:

**Basic (Básicos):**
- BasicLane - Carril simple
- BasicLaneTransition - Carril con ancho variable
- BasicShoulder - Berma/hombrillo
- BasicSideSlopeCutDitch - Talud con cuneta en corte
- LinkToSurface - Conexión a superficie existente
- LinkWidthAndSlope - Link personalizado (ancho y pendiente fijos)

**Lanes (Carriles):**
- LaneInsideSuper - Carril interior con peralte
- LaneOutsideSuper - Carril exterior con peralte
- TraveledWay - Calzada completa
- UrbanSidewalk - Acera urbana
- BikeLane - Ciclovía

**Curbs (Bordillos):**
- UrbanCurb - Bordillo urbano vertical
- RaisedCurb - Bordillo elevado
- MountableCurb - Bordillo montable (angular)
- CurbAndGutter - Bordillo integral con cuneta

**Shoulders (Bermas):**
- ShoulderExtents - Berma con límites definidos
- DaylightShoulder - Berma que extiende hasta daylight

**Medians (Medianas):**
- MedianDepressed - Mediana deprimida
- MedianRaised - Mediana elevada
- MedianBarrier - Mediana con barrera (Jersey barrier)

**Ditches (Cunetas):**
- DitchBottomWidth - Cuneta con ancho de fondo fijo
- VDitch - Cuneta en V
- ParabolicDitch - Cuneta parabólica

**Daylight (Taludes):**
- DaylightGeneral - Talud general con corte/relleno
- DaylightMaxWidth - Talud con ancho máximo
- BenchingCut - Talud con berma de estabilización

**Rehabilitation (Rehabilitación):**
- MillAndOverlay - Fresado y recarpeteo
- Overlay - Sobrecapa de pavimento
- Widening - Ensanchamiento

---

## 3. Subassemblies Fundamentales

### 3.1 BasicLane

**Descripción:**
Carril simple con ancho y pendiente transversal constantes. Es el subassembly más usado.

**Parámetros principales:**
- **Width (Ancho):** Default 3.50 m (metric) o 12 ft (imperial)
- **Depth (Espesor de pavimento):** Default 0.20 m (ej: 20 cm de concreto asfáltico)
- **Slope (Pendiente transversal):** Default -2.0% (negativo = drena hacia afuera)
  - Carreteras típicas: -2.0% a -2.5%
  - Carreteras alta velocidad: -1.5% a -2.0%
  - Estacionamientos: -1.0% a -3.0%

**Point codes generados:**
- ETW (Edge of Traveled Way) - Borde del carril
- Pave - Puntos de superficie de pavimento
- Datum - Puntos de sub-base

**Link codes generados:**
- Top - Superficie superior (pavimento)
- Pave - Capa de pavimento
- Base - Capa de base granular (si aplica)

**Attachment:**
- Se conecta desde baseline point (centerline) o desde otro carril (multi-lane)

![BasicLane Subassembly](../imagenes/leccion-1-basiclane.png)

### 3.2 BasicShoulder

**Descripción:**
Berma o hombrillo adyacente al carril. Puede ser pavimentada o granular.

**Parámetros principales:**
- **Width:** Default 2.50 m (berma estándar internacional)
  - Autopistas: 2.50 - 3.00 m
  - Carreteras primarias: 1.50 - 2.50 m
  - Carreteras secundarias: 0.50 - 1.50 m
- **Depth:** Espesor de pavimento (0 = granular sin pavimentar)
- **Slope:** Default -4.0% (más pendiente que carril para drenaje efectivo)
  - Bermas pavimentadas: -3.0% a -4.0%
  - Bermas granulares: -4.0% a -6.0%

**Point codes:**
- Shoulder - Puntos de berma
- Daylight (si no se conecta a otro subassembly)

**Casos de uso:**
- Berma de seguridad en autopistas
- Hombrillo en carreteras rurales
- Berma peatonal en vías urbanas (sin acera formal)

![BasicShoulder Subassembly](../imagenes/leccion-1-basicshoulder.png)

### 3.3 BasicSideSlopeCutDitch

**Descripción:**
Talud adaptativo que cambia pendiente según corte o relleno. Incluye cuneta en corte.

**Parámetros principales:**
- **Cut Slope (Pendiente en corte):** Default 2:1 (2H:1V = 50%)
  - Roca: 0.5:1 a 1:1 (muy empinado)
  - Suelo estable: 2:1 a 3:1
  - Suelo inestable: 3:1 a 4:1
- **Fill Slope (Pendiente en relleno):** Default 2:1 (2H:1V = 50%)
  - Relleno compactado: 2:1 a 3:1
  - Relleno no compactado: 3:1 a 4:1
- **Ditch Width (Ancho de cuneta):** Default 1.20 m
- **Ditch Depth (Profundidad de cuneta):** Default 0.30 m
- **Foreslope (Pendiente frontal de cuneta):** Default 4:1 (suave)
- **Backslope (Pendiente trasera de cuneta):** Default 2:1 (moderada)

**Comportamiento inteligente:**
- **En corte (cut):** Crea cuneta + talud empinado
- **En relleno (fill):** Solo talud (sin cuneta)
- **En terreno plano:** Mínima extensión

**Point codes:**
- Daylight - Punto de intersección con terreno existente
- DitchBottom - Fondo de cuneta (solo en corte)

**IMPORTANTE:** Este subassembly es **adaptativo a la superficie** - requiere surface target en corridor.

![BasicSideSlopeCutDitch](../imagenes/leccion-1-basicsideslopecutditch.png)

### 3.4 LinkToSurface

**Descripción:**
Conecta el último punto del assembly a la superficie existente (EG - Existing Ground). Es esencial para cerrar la sección y calcular corte/relleno.

**Parámetros principales:**
- **Side:** Left o Right (respecto al baseline)
- **Cut Slope:** Pendiente en corte (default 2:1)
- **Fill Slope:** Pendiente en relleno (default 2:1)
- **Maximum Offset:** Límite horizontal máximo (evita taludes infinitos)
- **Maximum Cut Depth / Fill Height:** Límites verticales

**Comportamiento:**
- Proyecta desde el punto de conexión (generalmente edge of shoulder)
- Busca intersección con superficie target (EG)
- Aplica cut slope o fill slope según sea necesario
- Si no encuentra intersección dentro de límites, genera error

**Point codes:**
- Daylight - Punto de contacto con terreno natural

**Link codes:**
- Datum - Link de talud

**Casos de uso:**
- Cerrar sección en todos los corridors
- Calcular volúmenes de corte y relleno
- Definir límites de derecho de vía (ROW)

![LinkToSurface Subassembly](../imagenes/leccion-1-linktosurface.png)

---

## 4. Crear Assembly de Carretera Típica de 2 Carriles

Vamos a crear un assembly paso a paso para una carretera interurbana estándar de 2 carriles (1 por sentido).

**Especificaciones de diseño:**
- Carretera primaria interurbana
- Velocidad de diseño: 80 km/h
- 2 carriles de 3.50 m cada uno
- Bermas pavimentadas de 2.00 m
- Taludes 2:1 (corte y relleno)
- Cuneta en corte: 1.20 m ancho, 0.30 m profundidad

### 4.1 Crear Assembly Base

**Paso 1: Comando Create Assembly**

1. Ribbon: **Home tab** → **Create Design panel** → **Assembly dropdown** → **Create Assembly**

2. **Create Assembly dialog:**
   - **Name:** `Carretera-2C-Tipica`
   - **Description:** `Carretera 2 carriles, bermas 2.0m, taludes 2:1`
   - **Assembly Type:** Other (default)
   - **Code Set Style:** All Codes (default - genera todos los códigos)
   - **Assembly Style:** Basic (default - sin visualización especial)
   - **OK**

3. **Especifica punto de inserción:**
   - Click en espacio vacío del modelo (alejado de otros objetos)
   - Este será el **baseline point** del assembly
   - Aparece un círculo azul con cruz (baseline marker)

![Create Assembly Dialog](../imagenes/leccion-1-create-assembly.png)

### 4.2 Añadir Subassemblies - Lado Derecho

**Paso 2: Añadir BasicLane (Carril Derecho)**

1. **Activar Tool Palette Civil Metric:**
   - Ctrl+3 (o Home tab → Assembly → Tool Palettes - Civil Metric)

2. **Pestaña "Basic":**
   - Localiza **BasicLane**
   - Click en BasicLane (se activa el comando)

3. **Command line muestra:**
   ```
   Select marker point within assembly or [Properties]:
   ```
   - Escribe `P` + Enter (Properties)

4. **Properties dialog de BasicLane:**
   - **Parameters tab:**
     - **Side:** Right (lado derecho)
     - **Width:** `3.50` m
     - **Depth:** `0.20` m (20 cm de pavimento)
     - **Slope:** `-2.0` % (drena hacia afuera)
   - **OK**

5. **Select marker point:**
   - Click en el **baseline point** (círculo azul central)
   - El carril se dibuja a la derecha
   - Aparece nuevo attachment point en el borde derecho (edge of lane)

![Add BasicLane Right](../imagenes/leccion-1-add-basiclane-right.png)

**Paso 3: Añadir BasicShoulder (Berma Derecha)**

1. **Tool Palette → Basic → BasicShoulder**
   - Click en BasicShoulder

2. **Properties:**
   - **Side:** Right
   - **Width:** `2.00` m
   - **Depth:** `0.15` m (berma pavimentada, menos espesor que carril)
   - **Slope:** `-4.0` % (más pendiente para drenaje)
   - **OK**

3. **Select marker point:**
   - Click en el **attachment point del borde del carril derecho**
   - La berma se extiende a la derecha
   - Nuevo attachment point en edge of shoulder

**Paso 4: Añadir BasicSideSlopeCutDitch (Talud Derecho)**

1. **Tool Palette → Basic → BasicSideSlopeCutDitch**
   - Click en subassembly

2. **Properties:**
   - **Side:** Right
   - **Cut Slope:** `2.00` (2:1)
   - **Fill Slope:** `2.00` (2:1)
   - **Foreslope:** `4.00` (cuneta suave)
   - **Backslope:** `2.00` (cuneta moderada)
   - **Ditch Width:** `1.20` m
   - **Ditch Depth:** `0.30` m
   - **OK**

3. **Select marker point:**
   - Click en el **attachment point del borde de la berma derecha**
   - El talud se dibuja con línea punteada (indica que es adaptativo)

![Assembly Right Side Complete](../imagenes/leccion-1-assembly-right-complete.png)

### 4.3 Añadir Subassemblies - Lado Izquierdo

**Paso 5: Simetría Izquierda**

Repite los pasos 2-4 para el lado izquierdo:

**BasicLane (Carril Izquierdo):**
- **Side:** Left
- **Width:** 3.50 m
- **Depth:** 0.20 m
- **Slope:** -2.0% (también drena hacia afuera, lado izquierdo)
- **Connect:** Baseline point

**BasicShoulder (Berma Izquierda):**
- **Side:** Left
- **Width:** 2.00 m
- **Depth:** 0.15 m
- **Slope:** -4.0%
- **Connect:** Edge of left lane

**BasicSideSlopeCutDitch (Talud Izquierdo):**
- **Side:** Left
- **Cut Slope:** 2.00
- **Fill Slope:** 2.00
- **Ditch Width:** 1.20 m
- **Ditch Depth:** 0.30 m
- **Connect:** Edge of left shoulder

**Resultado:**
Assembly simétrico completo con 2 carriles, 2 bermas, y taludes adaptativos en ambos lados.

![Assembly Complete Both Sides](../imagenes/leccion-1-assembly-complete.png)

### 4.4 Verificar Assembly

**Visual Check:**
- Zoom extents al assembly
- Verifica simetría visual
- Confirma que no hay gaps (espacios) entre subassemblies
- Baseline point debe estar en el centro exacto (entre los 2 carriles)

**Properties Check:**
1. Select el assembly object (click en cualquier parte)
2. **Ribbon contextual: Assembly tab** → **Modify panel** → **Assembly Properties**
3. **Assembly Properties dialog:**
   - **Information tab:** Verifica Name, Description
   - **Construction tab:** Lista de todos los subassemblies añadidos (debe mostrar 6)
   - **Codes tab:** Point codes y Link codes generados automáticamente

**Command line verify:**
```
Command: LIST
Select objects: [Click en assembly]
```
Output debe mostrar:
```
ASSEMBLY
  Name: Carretera-2C-Tipica
  Subassembly count: 6
  Total width (right): 5.50 m (aprox, depende de talud)
  Total width (left): 5.50 m (aprox)
```

---

## 5. Point Codes y Link Codes

### 5.1 ¿Qué son los Códigos?

Los **códigos** son identificadores que Civil 3D asigna a puntos y links del assembly. Se usan para:

1. **Crear corridor surfaces** - Definir qué puntos forman la superficie de pavimento, sub-base, etc.
2. **Extraer feature lines** - Identificar bordes de carril, daylight, etc.
3. **Generar reportes** - Calcular cantidades de materiales por código
4. **Visualización** - Aplicar estilos por código (color, grosor de línea)

### 5.2 Point Codes Comunes

**Códigos de Autodesk (estándar):**

| Código | Descripción | Generado por |
|--------|-------------|--------------|
| **Crown** | Centro de corona (centerline) | Baseline point |
| **ETW** | Edge of Traveled Way (borde de calzada) | BasicLane |
| **Pave** | Puntos de pavimento | BasicLane, BasicShoulder |
| **Datum** | Sub-base, datum de referencia | Todos los subassemblies (punto inferior) |
| **Shoulder** | Puntos de berma | BasicShoulder |
| **Daylight** | Punto de contacto con terreno natural | LinkToSurface, BasicSideSlopeCutDitch |
| **DitchBottom** | Fondo de cuneta | BasicSideSlopeCutDitch (en corte) |
| **Back_Curb** | Atrás de bordillo | UrbanCurb, RaisedCurb |
| **Top_Curb** | Tope de bordillo | UrbanCurb |

### 5.3 Link Codes Comunes

| Código | Descripción | Uso |
|--------|-------------|-----|
| **Top** | Superficie superior | Superficie de rodadura (pavimento terminado) |
| **Pave** | Capa de pavimento | Asfalto, concreto (para volúmenes de pavimento) |
| **Base** | Capa de base granular | Base estabilizada, sub-base (para volúmenes de base) |
| **Datum** | Link de datum | Taludes, relleno estructural |
| **Daylighting** | Link de talud a daylight | Corte/relleno hasta terreno natural |

### 5.4 Code Set Style

**Code Set Style** define qué códigos se generan y cómo se organizan.

**Opciones:**
- **All Codes** - Genera todos los códigos posibles (default, recomendado para flexibilidad)
- **Civil 3D Standard** - Solo códigos estándar de Autodesk
- **Custom Code Set** - Códigos personalizados según estándares de oficina

**Editar Code Set Style:**
1. Settings tab → Expand "Assembly"
2. Expand "Code Set Styles"
3. Right-click en style → **Edit...**
4. **Codes tab:**
   - Lista de todos los códigos activos
   - Puedes renombrar (ej: ETW → BordeCalzada)
   - Puedes añadir códigos custom

**Best practice profesional:**
Crea un Code Set Style corporativo con nomenclatura en español si trabajas en Latinoamérica:
- Crown → CoronaCentro
- ETW → BordeCalzada
- Daylight → TaludNatural
- Pave → Pavimento

![Code Set Style](../imagenes/leccion-1-code-set-style.png)

---

## 6. Assembly Properties

### 6.1 Information Tab

**Name:**
- Nombra assemblies descriptivamente
- Ejemplos:
  - `Urban-4Lane-Curb-Gutter` (urbano 4 carriles con bordillo)
  - `Highway-6Lane-Median` (autopista 6 carriles con mediana)
  - `Rural-2Lane-Ditch` (rural 2 carriles con cuneta)

**Description:**
- Detalla especificaciones clave
- Ejemplo: "Autopista 4 carriles (2+2), mediana 6m, bermas 3m, bordillo New Jersey, taludes 3:1"

**Created By / Date:**
- Metadata de autor y fecha (útil en proyectos colaborativos)

### 6.2 Construction Tab

Lista todos los subassemblies del assembly en orden de inserción:

**Información mostrada:**
- **Name:** Nombre del subassembly (ej: BasicLane:1, BasicLane:2)
- **Attachment:** A qué punto se conecta (Baseline, Point 1, etc.)
- **Side:** Left, Right, None (center)

**Funcionalidad:**
- **Add:** Añadir subassembly programáticamente
- **Remove:** Eliminar subassembly del assembly
- **Mirror:** Reflejar subassembly al lado opuesto (útil para simetría)

### 6.3 Codes Tab

Muestra todos los **point codes** y **link codes** generados por el assembly.

**Uso:**
- Verificar que los códigos necesarios existen (ej: Daylight para taludes)
- Renombrar códigos si es necesario
- Identificar códigos duplicados (puede causar conflictos)

**Render Material:**
- Asignar material visual para rendering 3D (ej: asfalto, concreto, tierra)
- Útil para visualizaciones fotorrealistas en Autodesk Viewer

---

## 7. Subassembly Composer (Introducción)

Para casos donde los subassemblies estándar no son suficientes, Autodesk provee **Subassembly Composer** - una herramienta para crear subassemblies 100% personalizados con lógica compleja.

**Casos de uso:**
- Secciones complejas con geometría única (túneles, puentes)
- Subassemblies con lógica condicional avanzada (ej: cambiar geometría según velocidad de diseño)
- Compliance con normativas locales específicas (ej: secciones SCT México, MOP Chile)

**Acceso:**
- Start menu: **Autodesk Subassembly Composer 2026** (aplicación separada)

**Workflow básico:**
1. Definir geometría (puntos, líneas, arcos)
2. Añadir parámetros variables (Width, Slope, Depth)
3. Crear lógica condicional (if-then-else)
4. Asignar códigos (point codes, link codes)
5. Exportar como .PKT file
6. Importar a Civil 3D Tool Palette

**NOTA:** Subassembly Composer es tema **avanzado** - se cubrirá en módulos posteriores si hay demanda. Para el 95% de proyectos, los subassemblies estándar son suficientes.

![Subassembly Composer Interface](../imagenes/leccion-1-subassembly-composer.png)

---

## 8. Best Practices - Gestión de Assemblies

### 8.1 Organización de Assemblies

**Assembly Library Drawing:**
Crea un .dwg dedicado solo para assemblies:

```
Proyecto-Highway-Assemblies.dwg
  Assembly: Urban-2Lane-Curb
  Assembly: Urban-4Lane-Median
  Assembly: Rural-2Lane-Ditch
  Assembly: Intersection-Taper
  Assembly: Ramp-1Lane
```

**Ventajas:**
- Centraliza todos los assemblies del proyecto
- Facilita copy/paste entre drawings
- Permite control de versiones
- Compatible con data shortcuts (compartir assemblies entre equipo)

### 8.2 Nomenclatura Consistente

**Convención recomendada:**
```
[Tipo]-[Carriles]-[Características]
```

Ejemplos:
- `Highway-6L-Median-3mShoulder` (autopista 6 carriles, mediana, bermas 3m)
- `Urban-4L-CurbGutter-Sidewalk` (urbano 4 carriles, bordillo-cuneta, acera)
- `Rural-2L-Ditch-2to1Slope` (rural 2 carriles, cuneta, taludes 2:1)
- `Parking-1Way-Striped` (estacionamiento 1 sentido, con rayas)

### 8.3 Documentación Interna

**Description field obligatorio:**
Documenta:
- Velocidad de diseño (ej: "Design speed 100 km/h")
- Normativa aplicable (ej: "AASHTO 2018, SCT N-PRY-CAR-1-01-002")
- Anchos de carriles y bermas
- Pendientes transversales
- Taludes de corte/relleno

**Ejemplo completo:**
```
Name: Highway-4L-Median-Barrier
Description: Autopista 4 carriles (2+2), V=120km/h, AASHTO 2018
  - Carriles: 3.65m, slope -2.0%
  - Bermas: 3.00m exterior, 1.20m interior
  - Mediana: 6.00m con barrera New Jersey
  - Taludes: 3:1 corte, 2:1 relleno
  - Pavimento: 25cm asfalto, 30cm base granular
Created By: Ing. [Tu Nombre]
Date: 2025-11-23
```

### 8.4 Versionado

Para proyectos grandes con cambios iterativos:

```
Assembly v1.0: Urban-4L-Initial
Assembly v1.1: Urban-4L-BermaReduced (cambio: berma 3m → 2.5m)
Assembly v2.0: Urban-4L-MedianAdded (cambio mayor: añadió mediana)
```

**Workflow:**
1. Nunca modifiques assembly original si ya lo usaste en corridor
2. Copia el assembly (`CopyAssembly` command)
3. Rename con versión incrementada
4. Modifica la copia
5. Aplica la nueva versión al corridor (Update Assembly)

---

## Ejercicio Práctico 1

**Objetivo:** Crear assembly completo para carretera rural de 2 carriles con cuneta.

**Especificaciones:**
- Carretera secundaria interurbana
- Velocidad de diseño: 60 km/h
- 2 carriles de 3.00 m (reducido, carretera secundaria)
- Bermas granulares (no pavimentadas) de 1.00 m
- Taludes 3:1 (más suaves, suelo inestable)
- Cuneta en corte: 1.00 m ancho, 0.25 m profundidad

**Tareas:**

1. **Crear Assembly:**
   - Name: `Rural-2L-Ditch-3to1`
   - Description: "Carretera rural 2 carriles, V=60km/h, bermas granulares 1.0m, taludes 3:1, cuneta en corte"

2. **Lado Derecho:**
   - BasicLane: Width 3.00m, Depth 0.18m, Slope -2.0%
   - BasicShoulder: Width 1.00m, Depth 0.00m (granular), Slope -4.0%
   - BasicSideSlopeCutDitch: Cut/Fill 3:1, Ditch Width 1.00m, Depth 0.25m

3. **Lado Izquierdo:**
   - Simetría exacta del lado derecho

4. **Verificar:**
   - Assembly Properties → Construction tab → 6 subassemblies
   - Assembly Properties → Codes tab → Códigos: Crown, ETW, Daylight, Pave, Datum

**Entregable:**
- Screenshot del assembly completo en Civil 3D
- Screenshot de Assembly Properties - Construction tab
- Drawing guardado: `Ejercicio1-Rural-2L-Assembly.dwg`

![Ejercicio 1 Result](../imagenes/leccion-1-ejercicio1-result.png)

---

## Evaluación

**Pregunta 1:**
¿Cuál es la diferencia entre un assembly y un corridor en Civil 3D?

**Pregunta 2:**
¿Qué subassembly usarías para conectar el borde de la berma con la superficie del terreno natural, considerando pendientes diferentes en corte y relleno?

**Pregunta 3:**
Un carril con pendiente transversal de -2.5% drena hacia _______ (adentro/afuera) del centerline.

**Pregunta 4:**
¿Qué código de punto (point code) identifica el borde de la calzada (edge of traveled way)?

**Pregunta 5:**
Si tu proyecto usa unidades métricas, ¿qué Tool Palette debes utilizar para los subassemblies?

**Pregunta 6:**
¿Cuál es el propósito del "Code Set Style" en un assembly?

**Pregunta 7:**
Menciona 3 parámetros configurables del subassembly BasicLane.

**Pregunta 8:**
¿Qué es un "attachment point" en el contexto de assemblies?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "About Assemblies"
- Autodesk Civil 3D 2026 - Subassembly Reference Guide (PDF)
- AASHTO Green Book - "Elements of Design" (Chapter 4 - Cross Section Elements)

**Videos tutoriales:**
- Autodesk Civil 3D - Creating Assemblies from Subassemblies
- Deep Dive: Subassembly Parameters and Codes
- Subassembly Composer - Getting Started

**Autodesk Knowledge Network:**
- Civil 3D Subassembly Catalog (todos los subassemblies documentados)
- Custom Subassemblies (library de subassemblies creados por comunidad)

---

## Resumen

En esta lección aprendiste:

✅ La arquitectura de assemblies: contenedor de subassemblies con baseline point central
✅ Uso de Tool Palettes para acceder a subassemblies estándar (Imperial vs Metric)
✅ Subassemblies fundamentales:
  - **BasicLane** - Carriles con ancho, espesor, pendiente
  - **BasicShoulder** - Bermas pavimentadas o granulares
  - **BasicSideSlopeCutDitch** - Taludes adaptativos con cuneta en corte
  - **LinkToSurface** - Conexión a terreno natural (daylight)
✅ Creación paso a paso de assembly de carretera típica de 2 carriles
✅ Conceptos de **point codes** y **link codes** para corridor surfaces
✅ Configuración de assembly properties: Name, Description, Code Set Style
✅ Best practices: nomenclatura, documentación, versionado

**Próxima Lección:** Corridor Modeling Básico - Aplicarás este assembly a un alignment y profile para crear tu primer corridor 3D paramétrico.

---

**Tiempo de estudio recomendado:** 80 minutos
**Práctica adicional:** 60 minutos creando assemblies variantes (4 carriles, con mediana, con bordillo)
