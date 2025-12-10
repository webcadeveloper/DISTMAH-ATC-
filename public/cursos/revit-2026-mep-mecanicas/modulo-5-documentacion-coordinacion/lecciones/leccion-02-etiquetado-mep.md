# Lección 2: Etiquetado MEP Profesional

## Introducción

El **etiquetado** (tagging) en Revit MEP es esencial para la documentación profesional de planos de construcción. Los **tags** extraen información directamente de las familias BIM y se actualizan automáticamente cuando cambian los parámetros del modelo. En proyectos MEP, se etiquetan equipos, ductos, tuberías, dispositivos terminales, accesorios y elementos de control.

Esta lección cubre estrategias de etiquetado eficiente, personalización de tags, etiquetado masivo y mejores prácticas para planos coordinados.

## Tipos de Tags en MEP

### 1. Tags de Categoría (Category Tags)

**Tags específicos por categoría de elemento:**

| Categoría | Tag Típico | Información Mostrada |
|-----------|------------|----------------------|
| Mechanical Equipment | Equipment Tag | Mark (ej. AHU-01) |
| Air Terminals | Air Terminal Tag | Mark + Flow |
| Ducts | Duct Tag | Size + Flow |
| Pipes | Pipe Tag | Size + System |
| Duct Fittings | Fitting Tag | Size |
| Valves | Valve Tag | Mark + Size |
| Mechanical Controls | Device Tag | Mark |

**Características:**
- Cargan **familias de anotación** específicas (`.rfa`)
- Leen parámetros de instancia o tipo de familia
- Se actualizan automáticamente con cambios del modelo

### 2. Multi-Category Tags

**Tags genéricos** que funcionan con múltiples categorías.

**Ventaja:** Un solo tag puede etiquetar equipos, ductos, tuberías (útil para layouts rápidos).

**Desventaja:** Menos control sobre información específica por categoría.

### 3. Material Tags

Etiquetan **material** de elementos (ej. "Galvanized Steel" en ductos, "Type L Copper" en tuberías).

**Uso:** Especificaciones de materiales en planos de fabricación.

## Etiquetar Equipos Mecánicos

### Procedimiento Básico

**Paso 1: Activar Tag Tool**

1. **Annotate** → **Tag** → **Tag by Category**
2. En **Options Bar:**
   - Orientation: **Horizontal** o **Vertical**
   - ☑ **Leader** (si se necesita línea guía)

**Paso 2: Colocar Tag**

1. Hacer click sobre **equipo mecánico** (ej. manejadora de aire)
2. Tag aparece mostrando **Mark** del equipo (ej. `AHU-01`)
3. Mover cursor para posicionar tag, click para confirmar

**Paso 3: Ajustar Leader (si aplica)**

Si el tag tiene líder:
- Click en extremo de líder para mover punto de anclaje
- Usar grips para ajustar ángulos de quiebre

![Etiquetado de Equipos](../imagenes/mod5-tag-equipos.png)

### Tag con Múltiples Parámetros

**Objetivo:** Mostrar Mark + Caudal en un solo tag.

**Procedimiento:**

**Paso 1: Editar Familia de Tag**

1. En vista de plano, seleccionar tag existente
2. **Edit Family** (botón en ribbon)
3. En **Family Editor:**
   - Agregar nuevo **Label** al lado del existente
   - Label parameters: Click **[...]**
   - Seleccionar parámetro: **Flow**
   - Sample Value: `2500 L/s`
4. **Align** labels horizontalmente
5. Agregar texto estático: `Q =` antes del caudal

**Resultado:**
```
AHU-01
Q = 2500 L/s
```

**Paso 2: Cargar en Proyecto**

1. **Load into Project**
2. Confirmar overwrite si existe versión anterior

**Ahora** todos los tags de esa categoría muestran Mark + Caudal.

## Etiquetado Masivo (Tag All)

Para proyectos grandes, etiquetar elemento por elemento es ineficiente. **Tag All** automatiza el proceso.

### Tag All Not Tagged

**Procedimiento:**

1. **Annotate** → **Tag** → **Tag All**
2. **Tag All Not Tagged** dialog:
   - **Category:** ☑ **Air Terminals** (ejemplo: etiquetar rejillas/difusores)
   - Tag orientation: **Horizontal**
   - ☑ **Leader**
   - Leader length: `6 mm`
3. Click **OK**

**Resultado:** Todos los air terminals **sin etiqueta** en la vista activa reciben tags automáticamente.

**Importante:** Solo etiqueta elementos **visibles en la vista activa**.

### Tag All en Vista Específica

**Mejores prácticas:**

1. Crear **plan view** dedicado a MEP (ej. `Level 1 - HVAC Plan`)
2. Configurar **View Template** con:
   - Visibility: Solo categorías MEP relevantes
   - Detail Level: **Fine**
   - Visual Style: **Hidden Line**
3. **Tag All** aplicado a esta vista etiqueta solo sistemas HVAC

**Evita:** Tags superpuestos de múltiples disciplinas.

## Etiquetar Ductos y Tuberías

### Duct Tags

**Información típica en duct tags:**
- **Size** - Dimensiones (ej. `600x300` para rectangular, `Ø250` para circular)
- **Flow** - Caudal de aire (ej. `2500 L/s`)
- **System Name** - Sistema al que pertenece (ej. `Supply Air - AHU-01`)

**Procedimiento:**

1. **Annotate** → **Tag** → **Tag by Category**
2. Click sobre **ducto**
3. Tag muestra size + flow automáticamente

**Personalización:**
- Editar familia de tag para agregar/quitar parámetros
- Formato típico: `600x300 / 2500 L/s`

### Pipe Tags

**Información típica:**
- **Size** - Diámetro nominal (ej. `DN 50`, `2"`)
- **System Type** - Hydronic Supply, Hydronic Return, Domestic Cold Water
- **Abbreviation** - Abreviatura del sistema (ej. `HWS` = Hot Water Supply)

**Etiquetado por sistema:**

1. **Tag by Category** → click en tubería
2. Tag lee automáticamente **System Abbreviation**
3. Ejemplo: `HWS - DN 50`

![Duct y Pipe Tags](../imagenes/mod5-tag-ductos-tuberias.png)

## Tags de Accesorios y Válvulas

### Duct Accessories

**Elementos típicos:**
- **Dampers** (dampers de balanceo, fire dampers)
- **VAV boxes**
- **Filtros**

**Tag típico:**
- **Mark** - Identificador único (ej. `D-101`, `VAV-12`)
- **Size** - Dimensiones del accesorio

### Pipe Accessories (Válvulas)

**Válvulas comunes:**
- **Balancing valves** - Control de caudal
- **Isolation valves** - Aislamiento de equipos
- **Check valves** - Prevención de reflujo

**Tag típico:**
- **Mark** - Identificador (ej. `BV-1`, `CV-3`)
- **Size** - Diámetro de conexión
- **Type** - Tipo de válvula

**Procedimiento:**

1. **Tag by Category** → click en válvula
2. Si la familia tiene parámetro **Mark** definido, se muestra automáticamente
3. Si está vacío, click en tag y escribir valor (ej. `BV-1`)

## Personalización de Tags

### Crear Tag Personalizado desde Cero

**Ejemplo:** Tag de manejadora de aire con Mark, Caudal y Capacidad.

**Paso 1: Crear Nueva Familia**

1. **File** → **New** → **Family**
2. Template: `Metric Mechanical Equipment Tag.rfa` (o Imperial según región)
3. **Open**

**Paso 2: Agregar Labels**

En **Family Editor:**

1. **Create** → **Label**
2. Click para colocar label
3. **Edit Label** dialog:
   - Category Parameters: **Mechanical Equipment**
   - Seleccionar: **Mark**
4. Click **OK**

Repetir para agregar:
- **Flow** (caudal)
- **Total Cooling Capacity** (capacidad)

**Paso 3: Formatear Texto**

1. Seleccionar label **Mark**
2. En **Properties:**
   - Text Font: **Arial**
   - Text Size: **3.5 mm**
   - Bold: ☑

2. Labels de **Flow** y **Capacity**:
   - Text Size: **2.5 mm**

**Paso 4: Agregar Gráficos**

Opciones:
- **Rectangle** alrededor de labels (borde)
- **Line** como leader
- **Filled Region** como fondo

**Paso 5: Guardar y Cargar**

1. **Save As:** `M_Mechanical Equipment Tag - Extended.rfa`
2. **Load into Project**

**Uso:** Ahora este tag personalizado aparece en lista de tags disponibles.

![Tag Personalizado](../imagenes/mod5-tag-personalizado.png)

## Estrategias de Visibilidad

### Ocultar Tags en Vistas Específicas

**Problema:** Tags necesarios en planos de construcción, pero estorban en vistas 3D o renderizados.

**Solución: View Templates**

**Paso 1: Crear View Template para 3D**

1. **View** → **3D View** → **Default 3D View**
2. **View Properties:**
   - Visibility/Graphics Overrides: Click **[Edit...]**
3. En **Visibility/Graphics:**
   - **Annotation Categories** tab
   - ☐ **Air Terminal Tags**
   - ☐ **Duct Tags**
   - ☐ **Mechanical Equipment Tags**
   - (desmarcar todos los tags)
4. Click **OK**
5. **View** → **Create Template from Current View...**
6. Name: `3D View - No Tags`

**Paso 2: Aplicar Template**

A cualquier vista 3D:
1. **View Properties** → **View Template:** `3D View - No Tags`
2. Click **Apply**

**Resultado:** Tags ocultos en 3D, visibles en plantas.

### Filtros por Sistema

**Objetivo:** Colorear tags según sistema (ej. Supply Air = azul, Return Air = rojo).

**Procedimiento:**

1. **View** → **Filters** → **Edit/New**
2. **New Filter:**
   - Name: `Supply Air System Tags`
   - Categories: ☑ **Duct Tags**, ☑ **Air Terminal Tags**
   - Filter Rules:
     - System Name **contains** `Supply`
3. **Projection/Surface:**
   - Lines: **Blue** (RGB 0,0,255)
   - Line Weight: **3**
4. Click **OK**

Repetir para **Return Air** (rojo) y **Exhaust Air** (verde).

**Aplicar a vista:**
En **Visibility/Graphics** → **Filters** tab → ☑ ambos filtros.

## Mejores Prácticas de Etiquetado

### 1. Nomenclatura Consistente (Mark)

**Usar prefijos lógicos:**

| Equipo | Prefijo | Ejemplo |
|--------|---------|---------|
| Air Handling Unit | AHU- | AHU-01, AHU-02 |
| Fan Coil Unit | FCU- | FCU-101, FCU-102 |
| Exhaust Fan | EF- | EF-1, EF-2 |
| VAV Box | VAV- | VAV-101, VAV-102 |
| Damper | D- | D-101, D-102 |
| Balancing Valve | BV- | BV-1, BV-2 |

**Ventajas:**
- Fácil identificación en schedules
- Ordenamiento lógico
- Coordinación con planos eléctricos (mismos Mark)

### 2. Tag Placement

**Ubicación clara:**
- **Equipos:** Tag cerca del símbolo, sin obstruir geometría
- **Ductos/tuberías:** Tag en segmentos largos (evitar codos/accesorios)
- **Leaders:** Usar solo cuando necesario (espacios congestionados)

**Alineación:**
- Usar **Align** tool para tags en fila
- Mantener distancia consistente de elementos

### 3. Coordinación con Arquitectura

**Evitar conflictos:**
- Tags MEP **no deben** superponerse con dimensiones arquitectónicas
- Verificar layers de impresión (lineweights)
- Usar **Coordination Review** para detectar tags sobre muros/puertas

### 4. Revisión Final

**Checklist antes de entregar planos:**

- ☐ Todos los equipos principales etiquetados
- ☐ Ductos principales etiquetados (mains, risers)
- ☐ Válvulas de aislamiento etiquetadas
- ☐ Tags alineados y legibles
- ☐ Sin tags superpuestos
- ☐ Mark consistente con schedules

## Revit 2026: Mejoras en Tags

**Nueva funcionalidad en Revit 2026:**

1. **Multi-Leader Tags Mejorados** - Soporte para múltiples leaders desde un solo tag (útil para equipos duplicados)
2. **Tag Visibility Control** - Control individual de visibilidad de tags sin afectar elementos
3. **Tag Style Templates** - Guardar configuraciones de formato de tags para reutilización

## Ejercicio Aplicado

**Ver:** Ejercicio 2 en `ejercicios.md` - Etiquetado masivo de sistema HVAC completo con nomenclatura consistente.

---

**Próxima Lección:** Coordinación con Arquitectura - Copy/Monitor y Coordination Review.
