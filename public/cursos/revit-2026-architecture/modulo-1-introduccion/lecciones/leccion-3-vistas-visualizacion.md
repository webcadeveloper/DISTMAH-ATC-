# Leccion 3: Sistema de Vistas y Visualizacion

![Views System](../imagenes/leccion3-vistas.png)

**Duracion:** 1.5 horas
**Dificultad:** Principiante-Intermedio

---

## Introduccion

El sistema de vistas de Revit es uno de sus componentes mas poderosos. A diferencia de CAD donde cada vista es independiente, en Revit todas las vistas estan vinculadas al mismo modelo 3D parametrico. Cualquier cambio en una vista se refleja automaticamente en todas las demas.

---

## Concepto de Vista en BIM

### Que es una Vista en Revit?

Una **vista** es una representacion especifica del modelo 3D:
- Plantas arquitectonicas
- Elevaciones
- Cortes
- Vistas 3D
- Renders
- Tablas de planificacion

### Principio Fundamental: Modelo Unico

```
          MODELO 3D UNICO
                 |
    +------------+------------+
    |            |            |
 PLANTAS      CORTES      ELEVACIONES
    |            |            |
 Todo conectado - Un cambio afecta todas
```

**Ejemplo:**
Si mueves una puerta en planta, automaticamente se actualiza en:
- Corte
- Elevacion
- Vista 3D
- Tabla de puertas

---

## Tipos de Vistas

### 1. Floor Plans (Plantas)

![Floor Plans](../imagenes/leccion3-floor-plans.png)

**Descripcion:**
Vista superior horizontal del modelo, cortada a cierta altura (usualmente 1.20m).

**Crear nueva planta:**
`View > Plan Views > Floor Plan`

**Tipos de plantas:**
- **Floor Plan:** Planta arquitectonica
- **Ceiling Plan:** Planta de cielo reflejado
- **Structural Plan:** Planta estructural
- **Area Plan:** Planta de areas

**Configuracion de Cut Plane:**
1. Click derecho en vista > Properties
2. View Range > Edit
3. Cut Plane: 1200mm (1.2m tipico)

**Vista tipica:**
```
    Corte horizontal a 1.20m
           ↓
    ===============  (Techo no visible)
    |   🚪    |      (Puerta visible)
    |        |      (Muro en corte)
    ========== ↑    (Piso visible)
         Nivel base
```

---

### 2. Elevations (Elevaciones)

![Elevations](../imagenes/leccion3-elevations.png)

**Descripcion:**
Vista vertical ortogonal del exterior del edificio.

**Elevaciones predeterminadas:**
- North (Norte)
- South (Sur)
- East (Este)
- West (Oeste)

**Crear elevacion adicional:**
`View > Elevations > Elevation`

**Pasos:**
1. Activar comando Elevation
2. Click donde colocar marcador
3. Ajustar direccion de vista
4. Doble click en marcador para abrir vista

**Usos:**
- Diseno de fachadas
- Estudios de alturas
- Documentacion constructiva
- Presentaciones a cliente

---

### 3. Sections (Cortes)

![Sections](../imagenes/leccion3-sections.png)

**Descripcion:**
Vista vertical que corta el edificio, mostrando interior.

**Crear corte:**
`View > Section`

**Pasos:**
1. Activar comando Section
2. Click punto inicial
3. Click punto final
4. Definir profundidad del corte
5. Doble click en marcador para abrir

**Tipos:**
- **Building Section:** Corte completo del edificio
- **Wall Section:** Detalle de muro
- **Detail Section:** Detalles constructivos

**Configuracion:**
- Far Clip Offset: Profundidad de corte
- Detail Level: Nivel de detalle (Coarse/Medium/Fine)

---

### 4. 3D Views (Vistas 3D)

![3D Views](../imagenes/leccion3-3d-views.png)

**Tipos:**

**a) Orthographic 3D:**
Vista isometrica sin perspectiva

**Crear:**
`View > 3D View > Default 3D View` (Atajo: `3D`)

**b) Perspective 3D:**
Vista con punto de fuga (camara)

**Crear:**
`View > 3D View > Camera`

**Diferencias:**

| Orthographic | Perspective |
|--------------|-------------|
| Lineas paralelas | Punto de fuga |
| Mediciones precisas | Vista realista |
| Para documentacion | Para presentacion |

**Configuracion de vista 3D:**
- Orientation: North, South, East, West, Isometric
- Section Box: Recorte de modelo
- Crop View: Recorte de vista

---

### 5. Schedules (Tablas)

![Schedules](../imagenes/leccion3-schedules.png)

**Descripcion:**
Tablas que extraen informacion del modelo automaticamente.

**Tipos comunes:**
- Door Schedule (Tabla de puertas)
- Window Schedule (Tabla de ventanas)
- Room Schedule (Tabla de habitaciones)
- Material Takeoff (Computo metrico)

**Crear tabla:**
`View > Create > Schedules > Schedule/Quantities`

**Beneficio BIM:**
Las tablas se actualizan automaticamente cuando cambias el modelo.

---

### 6. Sheets (Laminas)

![Sheets](../imagenes/leccion3-sheets.png)

**Descripcion:**
Laminas de presentacion donde se colocan vistas para impresion.

**Crear lamina:**
`View > Sheet Composition > Sheet`

**Componentes:**
- Titleblock (Caratula)
- Viewports (Vistas colocadas)
- Annotations (Anotaciones adicionales)
- Revisions (Revisiones)

**Tamanos estandar:**
- A0: 841 x 1189 mm
- A1: 594 x 841 mm
- A2: 420 x 594 mm
- A3: 297 x 420 mm

---

## View Range (Rango de Vista)

![View Range](../imagenes/leccion3-view-range.png)

**Acceso:**
Properties > Extents > View Range > Edit

**Parametros principales:**

### Top Plane (Plano Superior)
Define hasta donde ve la vista hacia arriba.

**Configuracion tipica:**
- Level: Associated Level (nivel actual)
- Offset: 2400mm (techo tipico)

### Cut Plane (Plano de Corte)
Altura donde se corta el modelo en planta.

**Configuracion tipica:**
- Level: Associated Level
- Offset: 1200mm (altura de corte estandar)

### Bottom Plane (Plano Inferior)
Define hasta donde ve la vista hacia abajo.

**Configuracion tipica:**
- Level: Associated Level
- Offset: 0mm

### View Depth (Profundidad de Vista)
Define limite inferior de visualizacion.

**Configuracion tipica:**
- Level: Level below
- Offset: 0mm

**Diagrama:**
```
    2400mm  ← Top (techo)
    1200mm  ← Cut Plane (corte)
       0mm  ← Bottom (piso)
   -3000mm  ← View Depth (nivel inferior)
```

---

## Estilos Visuales

`View Control Bar > Visual Style`

![Visual Styles](../imagenes/leccion3-visual-styles.png)

### 1. Wireframe

**Descripcion:** Solo lineas, sin superficies.

**Uso:** Modelado rapido, verificacion de geometria.

**Ventajas:** Maximo rendimiento.

### 2. Hidden Line

**Descripcion:** Oculta lineas traseras, superficies blancas.

**Uso:** Dibujos tecnicos, presentaciones limpias.

**Ventajas:** Claridad visual.

### 3. Shaded

**Descripcion:** Superficies con color basico, sin texturas.

**Uso:** Revision de diseno, estudios volumetricos.

**Ventajas:** Balance rendimiento/visualizacion.

### 4. Consistent Colors

**Descripcion:** Colores uniformes por categoria.

**Uso:** Diferenciacion de elementos.

### 5. Realistic

**Descripcion:** Materiales con texturas reales.

**Uso:** Presentaciones, renders previos.

**Requisitos:** Materiales configurados con assets.

### 6. Ray Trace (Rendering)

**Descripcion:** Renderizado fotorrealista.

**Uso:** Presentaciones finales a cliente.

**Nota:** Consume muchos recursos.

---

## Duplicar Vistas

Click derecho en vista > Duplicate View

![Duplicate View](../imagenes/leccion3-duplicate.png)

### Tipos de Duplicacion

### 1. Duplicate

**Caracteristicas:**
- Copia configuracion de vista
- NO copia anotaciones
- NO copia filtros especificos

**Uso:** Crear variantes de visualizacion.

**Ejemplo:**
- Level 1 - Arquitectura
- Level 1 - Estructura
- Level 1 - Coordinacion

### 2. Duplicate with Detailing

**Caracteristicas:**
- Copia configuracion
- COPIA anotaciones (cotas, textos, etiquetas)
- COPIA filtros

**Uso:** Crear copias exactas para modificar.

**Ejemplo:**
Duplicar planta terminada para crear variante de presentacion.

### 3. Duplicate as Dependent

**Caracteristicas:**
- Crea vista "hija" vinculada a "padre"
- Cambios en padre afectan hijas
- Permite diferentes crop regions

**Uso:** Dividir planta grande en sectores para laminas.

**Ejemplo:**
```
Level 1 (Padre)
  ├── Level 1 - Sector A (Hija)
  ├── Level 1 - Sector B (Hija)
  └── Level 1 - Sector C (Hija)
```

---

## View Templates

`View > View Template`

![View Templates](../imagenes/leccion3-view-templates.png)

### Que son View Templates?

Plantillas que guardan configuraciones de vista para aplicar a multiples vistas.

**Configuraciones que guarda:**
- Visual Style
- Detail Level
- Visibility/Graphics
- View Range
- Filters
- Graphic Display Options

### Crear View Template

**Opcion 1: Desde vista existente**
1. Configurar vista perfectamente
2. Click derecho > Create View Template from View
3. Nombrar template
4. Seleccionar parametros a incluir

**Opcion 2: Nueva**
1. `View > View Templates > Manage View Templates`
2. Click "New"
3. Configurar parametros
4. Guardar

### Aplicar View Template

**Metodo 1:**
1. Seleccionar vista en Project Browser
2. Properties > View Template > Seleccionar

**Metodo 2:**
1. Click derecho en vista
2. Apply View Template
3. Seleccionar de lista

### Ejemplos de Templates Utiles

| Template | Uso |
|----------|-----|
| Working Plan | Plantas para modelado (sin anotaciones) |
| Presentation Plan | Plantas con anotaciones completas |
| Coordination View | Vistas para coordinacion BIM |
| Construction Document | Planos constructivos |
| Structural Plan | Vistas estructurales |

---

## Visibility/Graphics Overrides

`VV` o `VG`

![Visibility Graphics](../imagenes/leccion3-vg.png)

Control fino de que se ve y como se ve en cada vista.

### Pestanas

**Model Categories:**
Control de categorias del modelo (Walls, Doors, Windows, etc.)

**Annotation Categories:**
Control de anotaciones (Dimensions, Text, Tags, etc.)

**Imported Categories:**
Control de CAD importado

**Filters:**
Filtros personalizados por parametros

### Controles por Categoria

**Visibility:** ✓ Visible / ☐ Oculto

**Projection/Surface:**
- Lines: Color, Pattern, Weight
- Patterns: Fill pattern, Color

**Cut:**
- Lines: Como se ve en corte
- Patterns: Patron de corte

**Halftone:** Muestra en gris tenue (50% transparencia)

### Ejemplo Practico

**Ocultar mobiliario en planta estructural:**
1. Abrir vista estructural
2. `VG`
3. Buscar "Furniture"
4. Desmarcar Visibility
5. OK

**Cambiar color de muros demolicion:**
1. `VG`
2. Walls > Projection Lines > Override
3. Color: Red
4. Pattern: Dash
5. OK

---

## Crop Region

![Crop Region](../imagenes/leccion3-crop.png)

Limite de visualizacion de la vista.

**Activar/Desactivar:**
View Control Bar > Crop View (icono recorte)

**Modificar:**
1. Activar Crop View
2. Seleccionar borde de recorte (linea azul)
3. Usar grips para ajustar
4. O: Properties > Size Crop para dimensiones exactas

**Annotation Crop:**
Controla limite de anotaciones (puede ser diferente a Crop Region).

**Usos:**
- Enfocar area especifica
- Preparar vistas para laminas
- Ocultar areas no terminadas

---

## Section Box (Recorte 3D)

![Section Box](../imagenes/leccion3-section-box.png)

**Solo en vistas 3D**

Caja de recorte que permite "cortar" el modelo en 3D.

**Activar:**
1. Abrir vista 3D
2. Properties > Extents > Section Box ✓
3. Aparece caja azul alrededor del modelo

**Manipular:**
- Seleccionar Section Box
- Usar grips (flechas azules) para ajustar
- Cada cara se puede mover independientemente

**Usos:**
- Ver interior de edificio
- Estudiar detalles especificos
- Crear vistas isometricas de sectores
- Presentaciones arquitectonicas

**Ejemplo:**
Cortar edificio por la mitad para mostrar distribucion interior.

---

## Detail Level (Nivel de Detalle)

`View Control Bar > Detail Level`

![Detail Level](../imagenes/leccion3-detail-level.png)

### Coarse (Tosco)

**Descripcion:**
Minimo detalle, solo forma basica.

**Uso:**
- Vistas generales
- Esquematicos
- Modelado conceptual

**Ejemplo:**
Muro se ve como linea doble simple.

### Medium (Medio)

**Descripcion:**
Detalle medio, muestra capas principales.

**Uso:**
- Plantas arquitectonicas
- Elevaciones
- Mayoría de documentacion

**Ejemplo:**
Muro muestra capas principales.

### Fine (Fino)

**Descripcion:**
Maximo detalle, todas las capas y componentes.

**Uso:**
- Detalles constructivos
- Cortes de muro
- Documentacion tecnica detallada

**Ejemplo:**
Muro muestra todas las capas, aislamiento, juntas, etc.

**Impacto en rendimiento:**

| Nivel | Rendimiento |
|-------|-------------|
| Coarse | Rapido |
| Medium | Normal |
| Fine | Lento (modelos grandes) |

---

## Temporary Hide/Isolate

![Hide Isolate](../imagenes/leccion3-hide-isolate.png)

Control temporal de visibilidad (no afecta View Template).

**Accesos:**
- View Control Bar > Temporary Hide/Isolate
- Seleccionar elementos > `HH` (Hide) o `HI` (Isolate)

### Opciones

**Hide Element:**
Oculta elemento seleccionado temporalmente.

**Hide Category:**
Oculta toda la categoria del elemento.

**Isolate Element:**
Muestra SOLO elemento seleccionado.

**Isolate Category:**
Muestra SOLO categoria seleccionada.

**Reset Temporary Hide/Isolate:**
Volver a vista normal.

**Aplicar:**
Hacer permanente el hide/isolate temporal.

**Uso practico:**
1. Seleccionar varios muros
2. `HI` > Isolate Category
3. Trabajar solo con muros
4. Reset cuando termines

---

## Graphics Display Options

`View > Graphics Display Options`

![Graphics Options](../imagenes/leccion3-graphics-options.png)

Opciones avanzadas de visualizacion:

**Silhouettes:**
Lineas de contorno en vistas 3D.

**Smooth lines with anti-aliasing:**
Suavizado de lineas (mejor apariencia).

**Ambient shadows:**
Sombras ambientales suaves.

**Sketchy lines:**
Lineas con estilo sketch/bosquejo.

**Lighting:**
- Scheme: Interior Sun, Exterior Sun, etc.
- Sun settings: Posicion solar

**Photographic Exposure:**
Control de exposicion para renders.

---

## Ejercicios Practicos

### Ejercicio 3.1: Crear Sistema Completo de Vistas (30 min)

**Objetivo:** Dominar creacion de vistas

**Tareas:**
1. Crear 4 Floor Plans (niveles 0, 1, 2, RF)
2. Crear 4 Elevations (N, S, E, W)
3. Crear 2 Sections (AA y BB transversales)
4. Crear 2 vistas 3D (Isometric SW y NE)
5. Crear 1 Ceiling Plan (Level 1)
6. Organizar en Project Browser

### Ejercicio 3.2: View Range Configuration (20 min)

**Objetivo:** Comprender View Range

**Configurar View Range para:**
1. Planta Level 1:
   - Top: +2400mm
   - Cut: +1200mm
   - Bottom: 0mm
   - Depth: Level 0 -3000mm

2. Verificar que puertas se ven
3. Verificar que ventanas altas NO se ven (arriba de corte)
4. Ajustar si es necesario

### Ejercicio 3.3: Duplicar Vistas (15 min)

**Objetivo:** Usar 3 tipos de duplicacion

1. Level 1: Duplicate > "Level 1 - Estructura"
2. Level 1: Duplicate with Detailing > "Level 1 - Presentacion"
3. Level 1: Duplicate as Dependent > "Level 1 - Sector A"

Explicar diferencias encontradas.

### Ejercicio 3.4: View Templates (25 min)

**Objetivo:** Crear y aplicar View Templates

**Crear 3 templates:**
1. "Working Plan"
   - Visual Style: Hidden Line
   - Detail Level: Medium
   - Annotations: OFF

2. "Presentation Plan"
   - Visual Style: Shaded
   - Detail Level: Fine
   - Annotations: ON

3. "Coordination 3D"
   - Visual Style: Shaded
   - Section Box: ON
   - Detail Level: Coarse

**Aplicar a vistas correspondientes**

---

## Tips y Mejores Practicas

### Organizacion de Vistas

✅ **Nomenclatura consistente:**
```
Level 1 - Arquitectura
Level 1 - Estructura
Level 1 - Coordinacion
```

✅ **Usar Browser Organization** para agrupar por disciplina

✅ **No crear vistas innecesarias** (consumen recursos)

✅ **Cerrar vistas no usadas** para mejor rendimiento

### View Templates

✅ **Crear templates estandar** para cada tipo de plano

✅ **Aplicar templates ANTES de anotar** (evita rehacer trabajo)

✅ **Versionar templates** en plantillas corporativas

### Rendimiento

✅ **Usar Detail Level apropiado** (no siempre Fine)

✅ **Desactivar Shadows** en vistas de trabajo

✅ **Usar Crop Region** para limitar visualizacion

---

## Atajos de Teclado

| Atajo | Comando |
|-------|---------|
| `3D` | Default 3D View |
| `VV` / `VG` | Visibility/Graphics |
| `HH` | Hide Element |
| `HI` | Isolate Element |
| `HR` | Reveal Hidden Elements |
| `TL` | Thin Lines |
| `WT` | Tile Windows |
| `WC` | Close Hidden Windows |

---

## Navegacion

[← Leccion 2](./leccion-2-configuracion-proyecto.md) | [Volver al Modulo](../README.md) | [Leccion 4 →](./leccion-4-niveles-grillas.md)

---

## Resumen

✅ Comprendes tipos de vistas en Revit
✅ Sabes configurar View Range
✅ Dominas estilos visuales
✅ Puedes duplicar vistas (3 metodos)
✅ Conoces View Templates
✅ Controlas Visibility/Graphics
✅ Usas Crop Region y Section Box

**Proxima leccion:** Niveles y Grillas

---

**Tiempo:** 1.5 horas
**Dificultad:** ⭐⭐ Intermedio
**Importancia:** ⭐⭐⭐⭐⭐ Fundamental
