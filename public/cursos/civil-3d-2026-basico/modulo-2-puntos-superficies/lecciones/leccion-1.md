# Lección 1: Puntos COGO y Point Groups

**Duración:** 60 minutos
**Módulo:** 2 - Puntos y Superficies Topográficas
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué son los puntos COGO y su importancia en Civil 3D
✅ Crear puntos COGO manualmente usando diferentes métodos
✅ Gestionar puntos con Point Groups (agrupación y clasificación)
✅ Aplicar Point Styles para visualización profesional
✅ Editar puntos (mover, eliminar, renumerar)
✅ Generar Point Tables para documentación
✅ Utilizar mejoras de gestión de puntos de Civil 3D 2026

---

## Introducción

Los **puntos COGO** (Coordinate Geometry) son los elementos fundamentales en Civil 3D para representar levantamientos topográficos. A diferencia de los puntos simples de AutoCAD, los puntos COGO son objetos inteligentes que almacenan múltiple información: coordenadas X, Y, Z (elevación), número de punto, descripción, y pueden asignarse automáticamente a layers, styles, y grupos.

Todo proyecto de infraestructura civil comienza con datos topográficos, y Civil 3D transforma esos datos en un modelo digital preciso del terreno. Los puntos COGO son la materia prima para crear superficies TIN, analizar drenajes, diseñar rasantes, y calcular volúmenes.

**Caso real:** Un levantamiento topográfico típico para una carretera puede contener 5,000 a 50,000 puntos. Civil 3D permite gestionar, visualizar, y clasificar automáticamente estos puntos para generar modelos digitales de terreno precisos en minutos.

---

## 1. ¿Qué son los Puntos COGO?

### 1.1 Definición

**COGO = Coordinate Geometry**

Los puntos COGO son objetos de Civil 3D que representan ubicaciones tridimensionales específicas en un proyecto de ingeniería civil. Cada punto contiene:

- **Point Number** - Número único de identificación
- **Easting (X)** - Coordenada Este (o X en sistema local)
- **Northing (Y)** - Coordenada Norte (o Y en sistema local)
- **Elevation (Z)** - Elevación sobre nivel de referencia
- **Description** - Descripción textual (ej: "EP", "TC", "Árbol")
- **Raw Description** - Descripción original de campo
- **Full Description** - Descripción expandida

### 1.2 Diferencias: Puntos AutoCAD vs Puntos COGO

| Característica | Punto AutoCAD (POINT) | Punto COGO Civil 3D |
|----------------|----------------------|---------------------|
| Coordenadas | Solo X, Y, Z básico | X, Y, Z con elevación precisa |
| Metadata | Ninguna | Number, Description, Style |
| Agrupación | Por layers solamente | Point Groups dinámicos |
| Visualización | Estilo único (PDMODE) | Point Styles personalizables |
| Etiquetas | Texto manual | Label Styles automáticos |
| Gestión | Individual | Masiva (miles de puntos) |
| Uso en superficie | No directamente | Directamente en TIN surfaces |

![Comparación Point AutoCAD vs COGO](../../imagenes/leccion-2-1-point-comparison.png)

### 1.3 Datos que almacena un Punto COGO

**Metadata completa:**
- Point Number (ej: 101, 102, 103)
- Coordinates (Easting, Northing, Elevation)
- Description (ej: "EP" = Edge of Pavement)
- Raw Description (descripción sin procesar desde campo)
- Full Description (descripción expandida por Description Keys)
- Point Name (opcional, nombre textual)
- Point Style (estilo de visualización)
- Point Label Style (estilo de etiqueta)
- Layer assignment (capa asignada)

**Uso profesional:**
En un levantamiento real, el topógrafo captura miles de puntos con estación total o GPS. Cada punto viene con número, coordenadas, elevación, y código de campo (ej: "EP" para edge of pavement, "TC" para top of curb). Civil 3D procesa automáticamente estos códigos usando **Description Keys** (lección 3) para clasificar y visualizar puntos correctamente.

---

## 2. Crear Puntos COGO Manualmente

Existen múltiples métodos para crear puntos COGO en Civil 3D:

### 2.1 Método 1: Create Points Toolbar

**Activar la toolbar:**
1. Ribbon → **Home** tab → **Create Ground Data** panel
2. Click en dropdown de **Points** → **Create Points**
3. Aparece la **Create Points Toolbar** (flotante)

![Create Points Toolbar](../../imagenes/leccion-2-1-create-points-toolbar.png)

**Métodos disponibles en la toolbar:**

- **Manual** - Especificar coordenadas manualmente
- **Geodetic Direction and Distance** - Por rumbo y distancia
- **Resection** - Desde dos puntos conocidos
- **Intersection** - Intersección de direcciones
- **Alignment** - Sobre alineamiento
- **Surface** - Sobre superficie existente
- **Polyline/Contour Vertices** - Desde vértices de polilínea
- **Import Points** - Importar desde archivo (lección 2)

### 2.2 Método 2: Manual Point Creation (Paso a Paso)

**Procedimiento:**

1. Ribbon → **Home** → **Create Ground Data** → **Points** dropdown → **Create Points**
2. En **Create Points Toolbar**, selecciona método: **Manual**
3. Command line pide: `Specify location for new point:`
4. Ingresa coordenadas en formato: **X,Y,Z**
   - Ejemplo: `1000,2000,150` (X=1000, Y=2000, Elev=150)
5. Presiona **Enter**
6. Aparece prompt: `Specify point description <current>:`
7. Ingresa descripción: **EP** (Edge of Pavement)
8. Presiona **Enter**
9. El punto se crea con número automático (ej: 1)
10. Repite para más puntos

**Opciones en command line durante creación:**
- **N** - Especificar Point Number manualmente
- **D** - Especificar Description
- **E** - Especificar Elevation separadamente
- **L** - Cambiar Layer
- **Esc** - Cancelar creación

**Ejemplo práctico:**
```
Command: Manual point creation active
Specify location: 1000,2000
[Command prompts: Elevation <0.000>:]
150
[Prompt: Description <.>:]
EP
Point number 1 created.
```

### 2.3 Método 3: Geodetic Direction and Distance

Útil cuando tienes un punto inicial y conoces rumbo y distancia (datos de poligonal topográfica).

**Procedimiento:**
1. Create Points Toolbar → **Geodetic Direction and Distance**
2. Especifica punto base (punto conocido)
3. Ingresa dirección (bearing): **N 45°30'00" E**
4. Ingresa distancia: **25.50** metros
5. Ingresa elevación del nuevo punto
6. Ingresa descripción
7. Punto creado en ubicación calculada

**Formato de direcciones (bearings):**
- `N 45d30'15" E` - Norte 45° 30' 15" Este
- `S 30d00'00" W` - Sur 30° Oeste
- `Azimuth: 135d00'00"` - Azimut 135°

### 2.4 Método 4: Points from Surface

Crear puntos extrayendo elevaciones desde superficie existente:

**Procedimiento:**
1. Create Points Toolbar → **Surface**
2. Selecciona superficie existente
3. Click en ubicaciones deseadas en el modelo
4. Civil 3D extrae automáticamente la elevación desde la superficie
5. Ingresa descripción para cada punto

**Uso común:** Marcar puntos de control a elevaciones específicas de terreno existente.

![Create Points from Surface](../../imagenes/leccion-2-1-points-from-surface.png)

---

## 3. Point Groups (Agrupación de Puntos)

### 3.1 ¿Qué son Point Groups?

**Point Groups** son contenedores lógicos que agrupan puntos según criterios específicos:
- Rangos de números (ej: puntos 1-100)
- Descripciones (ej: todos los puntos "EP")
- Elevaciones (ej: puntos sobre 150m)
- Layers
- Criterios combinados (queries)

**Ventajas de Point Groups:**
- **Organización:** Separar "Terreno Natural" de "Pavimento"
- **Visualización:** Mostrar/ocultar grupos selectivamente
- **Control de estilo:** Aplicar diferentes point styles por grupo
- **Creación de superficies:** Usar solo ciertos grupos de puntos para TIN
- **Exportación selectiva:** Exportar solo puntos específicos

### 3.2 Crear Point Group

**Procedimiento:**

1. **Toolspace** → **Prospector** tab
2. Expande **Point Groups**
3. Click derecho en **Point Groups** → **New...**
4. Aparece **Point Group Properties** dialog

**Pestaña Information:**
- **Name:** `Terreno-Natural` (sin espacios es mejor práctica)
- **Description:** "Puntos del levantamiento topográfico de terreno existente"
- **Point Style:** (seleccionar estilo de visualización)
- **Point Label Style:** (seleccionar estilo de etiqueta)
- **Update automatically:** ✓ (recomendado - actualiza dinámicamente)

**Pestaña Point List:**
- Muestra lista de todos los puntos en el drawing
- Puedes seleccionar puntos individualmente (poco práctico para muchos puntos)

**Pestaña Include:**
Criterios para **incluir** puntos en el grupo:

- **With numbers matching:** `1-500` (puntos del 1 al 500)
- **With elevations matching:** `100-200` (elevaciones entre 100 y 200)
- **With raw descriptions matching:** `EP*` (todas las descripciones que empiecen con "EP")
- **With full descriptions matching:** `Edge of Pavement*`
- **On layers matching:** `V-NODE-TOPO` (puntos en layer específico)

**Pestaña Exclude:**
Criterios para **excluir** puntos (sobrescribe Include):

- Útil para refinar el grupo
- Ejemplo: Include todos del 1-1000, Exclude 50-100

**Pestaña Query Builder:**
Constructor de queries complejas:
- Combina múltiples criterios con AND/OR
- Ejemplo: `(Number >= 1 AND Number <= 500) AND (Elevation > 150)`

![Point Group Properties](../../imagenes/leccion-2-1-point-group-properties.png)

### 3.3 Ejemplo: Crear Point Groups por Tipo

**Escenario:** Levantamiento topográfico con diferentes tipos de puntos.

**Point Group 1: Terreno Natural**
- Name: `TN-Terreno-Natural`
- Include raw descriptions matching: `TN*` (todos los códigos "TN")
- Point Style: `Ground Point`
- Color: Verde

**Point Group 2: Edge of Pavement**
- Name: `EP-Edge-Pavement`
- Include raw descriptions matching: `EP*`
- Point Style: `Pavement Point`
- Color: Negro

**Point Group 3: Top of Curb**
- Name: `TC-Top-Curb`
- Include raw descriptions matching: `TC*`
- Point Style: `Curb Point`
- Color: Amarillo

**Point Group 4: Árboles**
- Name: `ARB-Arboles`
- Include raw descriptions matching: `ARB*, TREE*`
- Point Style: `Tree Point` (con símbolo de árbol)
- Color: Verde oscuro

### 3.4 Orden de Prioridad de Point Groups

**IMPORTANTE:** Los Point Groups tienen orden de prioridad (arriba = mayor prioridad).

**¿Por qué importa?**
Si un punto pertenece a múltiples grupos, el estilo aplicado será el del grupo con mayor prioridad.

**Gestionar prioridad:**
1. Toolspace → Prospector → Point Groups
2. Lista de grupos en orden de prioridad
3. Click derecho en un grupo → **Move Up** / **Move Down**
4. O arrastra grupos para reordenar

**Best practice:**
- Grupos específicos arriba (mayor prioridad)
- Grupos generales abajo (menor prioridad)
- Ejemplo de orden:
  1. `Control-Points` (puntos de control GPS - alta prioridad)
  2. `Edge-Pavement`
  3. `Top-Curb`
  4. `Terreno-Natural`
  5. `_All Points` (grupo general - menor prioridad)

![Point Groups Priority](../../imagenes/leccion-2-1-point-groups-priority.png)

---

## 4. Point Styles y Visualización

### 4.1 ¿Qué son Point Styles?

**Point Styles** controlan la apariencia visual de los puntos COGO:
- Símbolo del marcador (círculo, cruz, cuadrado, custom)
- Tamaño del marcador
- Color
- 3D Geometry (visualización 3D)

### 4.2 Acceder a Point Styles

**Ubicación:**
1. **Toolspace** → **Settings** tab
2. Expande **Point**
3. Expande **Point Styles**
4. Lista de estilos disponibles en el template

**Estilos comunes por defecto:**
- `Basic Point` - Cruz simple
- `Ground Elevation Point` - Con elevación visible
- `Benchmark` - Punto de control (BM)
- `Tree Point` - Símbolo de árbol
- `Light Pole` - Poste de luz
- `Manhole` - Pozo de visita

### 4.3 Crear Point Style Personalizado

**Procedimiento:**

1. Toolspace → Settings → Point → Point Styles
2. Click derecho en espacio vacío → **New...**
3. Aparece **Point Style Properties** dialog

**Pestaña Information:**
- **Name:** `Punto-Terreno-Natural`
- **Description:** "Estilo para puntos de terreno natural"
- **Created by:** Tu nombre
- **Date created:** Automático

**Pestaña Marker:**
- **Marker Style:**
  - `Custom Marker` - Para crear símbolo personalizado
  - `Use AutoCAD POINT for Marker` - Usar punto de AutoCAD
  - `X` - Cruz
  - `Circle` - Círculo
  - `Square` - Cuadrado
  - `Triangle` - Triángulo
- **Size:**
  - `Use size in absolute units` - Tamaño fijo (ej: 1.0 mm)
  - `Use size relative to screen` - Tamaño relativo (ej: 5%)
- **Color:** `ByLayer` o color específico
- **Orientation:** Rotación del marcador

**Pestaña Display:**
Control de visibilidad por vista:
- **Model View:** ✓ Marker, ✓ Label (visible en Model Space)
- **Plan View:** Configuración para plan production
- **Profile View:** Para puntos en perfiles
- **Section View:** Para secciones

**Pestaña Summary:**
Resumen de configuración del estilo.

![Point Style Editor](../../imagenes/leccion-2-1-point-style-editor.png)

### 4.4 Point Label Styles

**Point Label Styles** controlan las etiquetas de texto sobre los puntos:
- Número de punto
- Elevación
- Descripción
- Coordenadas X, Y

**Acceder:**
1. Toolspace → Settings → Point → Label Styles → Point
2. Lista de estilos de etiquetas

**Estilos comunes:**
- `Point Elevation Description` - Muestra elevación y descripción
- `Point Number Elevation Description` - Número, elevación, y descripción
- `Point Number Only` - Solo número
- `Elevation Only` - Solo elevación

**Crear Label Style personalizado:**
1. Click derecho en Label Styles → Point → **New...**
2. Configura componentes de texto (número, elevación, descripción)
3. Define formato (font, tamaño, color)
4. Establece posición relativa al punto

---

## 5. Edición de Puntos COGO

### 5.1 Editar Propiedades de Punto Individual

**Método 1: Properties Palette**
1. Selecciona un punto en el drawing
2. Presiona **Ctrl+1** (Properties)
3. Edita valores:
   - Point Number
   - Easting, Northing, Elevation
   - Raw Description
   - Point Name
   - Layer

**Método 2: Panorama - Point Editor**
1. Toolspace → Prospector → Point Groups → (grupo) → **Points**
2. Click derecho en la lista de puntos → **Edit Points...**
3. Aparece **Panorama** grid con todos los puntos
4. Edita directamente en la tabla (como Excel)
5. Columnas: Number, Easting, Northing, Elevation, Description, Name

**Ventaja de Panorama:** Edición masiva de múltiples puntos en tabla.

![Panorama Point Editor](../../imagenes/leccion-2-1-panorama-point-editor.png)

### 5.2 Mover Puntos

**Método 1: Move (Comando AutoCAD)**
1. Command: `MOVE`
2. Selecciona puntos
3. Especifica base point
4. Especifica destination point
5. **IMPORTANTE:** La elevación (Z) se mantiene si mueves en 2D

**Método 2: 3D Move (Mover en 3D)**
1. Command: `3DMOVE`
2. Selecciona puntos
3. Usa gizmo 3D para mover en X, Y, o Z independientemente

**Método 3: Editar coordenadas en Panorama**
1. Point Editor (Panorama)
2. Cambia valores de Easting, Northing, Elevation directamente

### 5.3 Eliminar Puntos

**Método 1: Delete individual**
1. Selecciona punto(s)
2. Presiona **Delete** key

**Método 2: Delete desde Prospector**
1. Toolspace → Prospector → Point Groups → Points
2. Click derecho en punto(s) → **Delete...**

**Método 3: Remove from drawing**
1. Ribbon → Home → Create Ground Data → Points dropdown
2. **Point Editor** button
3. Selecciona puntos en Panorama
4. Click derecho → **Delete Points**

**ADVERTENCIA:** Eliminar puntos que están siendo usados en una superficie causará que la superficie se recalcule automáticamente.

### 5.4 Renumerar Puntos

**Scenario:** Importaste puntos con números incorrectos o quieres reorganizar numeración.

**Procedimiento:**

1. Ribbon → **Home** → **Create Ground Data** → **Points** dropdown
2. **Edit Points** → **Renumber...**
3. Aparece **Renumber Points** dialog

**Opciones:**
- **Starting point number:** Número inicial (ej: 1000)
- **Increment:** Incremento (ej: 1, 10, 100)
- **Renumber entire project** o **Selection set** (puntos seleccionados)

**Ejemplo:**
- Puntos actuales: 1, 5, 10, 22, 33
- Renumerar empezando en 100, incremento 1
- Resultado: 100, 101, 102, 103, 104

![Renumber Points](../../imagenes/leccion-2-1-renumber-points.png)

---

## 6. Point Tables (Tablas de Puntos)

### 6.1 ¿Qué son Point Tables?

**Point Tables** son tablas dinámicas que listan puntos con sus propiedades:
- Point Number
- Easting (X)
- Northing (Y)
- Elevation (Z)
- Description

**Uso:** Documentación en planos de topografía, cuadros de construcción.

### 6.2 Crear Point Table

**Procedimiento:**

1. Ribbon → **Annotate** tab → **Labels & Tables** panel
2. **Add Tables** dropdown → **Add Point Table...**
3. Aparece **Point Table Creation** dialog

**Configuración:**

- **Table Style:** `PENZD (Point-Easting-Northing-Elevation-Description)` (estilo de tabla)
- **Point Group:** Selecciona el grupo de puntos a incluir (ej: `Terreno-Natural`)
- **Layer:** Layer donde se insertará la tabla
- **Behavior:** `Dynamic` (se actualiza automáticamente si puntos cambian)

4. Click **OK**
5. Especifica punto de inserción en el drawing
6. Tabla creada con todos los puntos del grupo

![Point Table Example](../../imagenes/leccion-2-1-point-table.png)

### 6.3 Exportar Puntos a Archivo

**Exportar a CSV, TXT, o LandXML:**

1. Toolspace → Prospector → Point Groups
2. Click derecho en Point Group → **Export Points...**
3. Aparece **Export Points** dialog

**Configuración:**
- **Output file:** `C:\Proyecto\Puntos-Export.csv`
- **File format:** `PNEZD (space delimited)` (o CSV, TXT, LandXML)
- **Point Group:** Grupo a exportar
- **Coordinate zone transform:** Si necesitas transformar coordenadas

4. Click **OK**
5. Archivo generado en ubicación especificada

**Formatos de exportación:**
- **PNEZD** - Point Number, Easting, Northing, Elevation, Description
- **PENZD** - Variante del anterior
- **CSV** - Delimitado por comas
- **LandXML** - Formato de intercambio estándar de ingeniería civil

---

## 7. Mejoras de Civil 3D 2026 en Gestión de Puntos

### 7.1 Point Groups con Queries Mejorados

**Novedad 2026:** Query Builder con mayor flexibilidad.

**Nuevas opciones:**
- Queries con múltiples condiciones AND/OR más intuitivas
- Preview de resultados antes de crear grupo
- Filtros por propiedades extendidas

### 7.2 Performance con Miles de Puntos

**Mejora 2026:** Mejor rendimiento con proyectos grandes.

**Optimizaciones:**
- Visualización más rápida de 10,000+ puntos
- Point Editor (Panorama) más responsivo con datasets grandes
- Regeneración de point groups más eficiente

### 7.3 Point Styles con 3D Symbols

**Novedad 2026:** Soporte mejorado para símbolos 3D personalizados.

**Aplicación:**
- Bloques 3D como marcadores de puntos (ej: árbol 3D, poste de luz 3D)
- Mejor visualización en 3D Model Viewer
- Exportación mejorada a Autodesk Viewer

---

## Ejercicio Práctico 1

**Objetivo:** Crear puntos COGO manualmente, agruparlos en Point Groups, y generar tabla de puntos.

### Escenario

Eres el topógrafo en un proyecto de carretera. Debes ingresar 10 puntos de control del levantamiento y organizarlos en grupos.

### Tareas

**Parte 1: Crear Puntos Manualmente**

1. Abre nuevo drawing desde template métrico
2. Activa Create Points Toolbar
3. Crea los siguientes puntos usando método **Manual**:

| Point # | Easting | Northing | Elevation | Description |
|---------|---------|----------|-----------|-------------|
| 100 | 1000.00 | 2000.00 | 150.00 | EP |
| 101 | 1025.50 | 2000.00 | 150.25 | EP |
| 102 | 1050.00 | 2000.00 | 150.50 | EP |
| 103 | 1000.00 | 2020.00 | 150.80 | TC |
| 104 | 1025.50 | 2020.00 | 151.00 | TC |
| 105 | 1050.00 | 2020.00 | 151.20 | TC |
| 106 | 1075.00 | 2000.00 | 149.50 | TN |
| 107 | 1075.00 | 2020.00 | 150.00 | TN |
| 108 | 1100.00 | 2000.00 | 148.75 | TN |
| 109 | 1100.00 | 2020.00 | 149.25 | TN |

4. Verifica que los 10 puntos estén creados en Model Space

**Parte 2: Crear Point Groups**

5. Crea **Point Group 1:**
   - Name: `Edge-Pavement`
   - Include raw descriptions matching: `EP*`
   - Point Style: `Basic Point` (color rojo)
   - Point Label Style: `Point Elevation Description`

6. Crea **Point Group 2:**
   - Name: `Top-Curb`
   - Include raw descriptions matching: `TC*`
   - Point Style: `Basic Point` (color amarillo)
   - Point Label Style: `Point Elevation Description`

7. Crea **Point Group 3:**
   - Name: `Terreno-Natural`
   - Include raw descriptions matching: `TN*`
   - Point Style: `Basic Point` (color verde)
   - Point Label Style: `Point Number Elevation Description`

**Parte 3: Verificar Point Groups**

8. Toolspace → Prospector → Point Groups → Expande cada grupo
9. Verifica que los puntos estén correctamente clasificados:
   - Edge-Pavement: 3 puntos (100, 101, 102)
   - Top-Curb: 3 puntos (103, 104, 105)
   - Terreno-Natural: 4 puntos (106, 107, 108, 109)

**Parte 4: Editar Puntos**

10. Abre Point Editor (Panorama)
11. Cambia la elevación del punto 100 a **150.10**
12. Cambia la descripción del punto 109 a **TN-Control**
13. Cierra Panorama

**Parte 5: Crear Point Table**

14. Ribbon → Annotate → Add Tables → Add Point Table
15. Selecciona Point Group: `_All Points`
16. Table Style: `PENZD`
17. Inserta tabla en el drawing
18. Verifica que muestra los 10 puntos con sus coordenadas

**Entregable:**
- Screenshot mostrando los 10 puntos en Model Space con diferentes colores por grupo
- Screenshot de la Point Table generada
- Archivo DWG guardado como `Ejercicio-2-1-Puntos-COGO.dwg`

![Ejercicio 1 - Puntos y Grupos](../../imagenes/leccion-2-1-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Qué información almacena un punto COGO que un punto AutoCAD no tiene?

**Pregunta 2:** ¿Cuál es la diferencia entre "Raw Description" y "Full Description" en un punto COGO?

**Pregunta 3:** ¿Qué sucede si un punto pertenece a múltiples Point Groups con diferentes estilos?

**Pregunta 4:** Menciona 3 métodos para crear puntos COGO en Civil 3D.

**Pregunta 5:** ¿Qué ventaja tiene una Point Table con "Dynamic Behavior" activado?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 - Points User Guide
- Points and Point Groups Best Practices
- Point Styles and Label Styles Tutorial

**Comandos útiles:**
- `CREATEPOINT` - Crear puntos
- `POINTEDITOR` - Editar puntos en Panorama
- `TOOLSPACE` - Abrir Toolspace
- `POINTGROUP` - Gestionar point groups

**Atajos de teclado:**
- **Ctrl+1** - Properties de punto seleccionado
- **F2** - Command line expandida (ver historial de creación)

---

## Resumen

En esta lección aprendiste:

✅ Los puntos COGO son objetos inteligentes con coordenadas, elevación, número, y descripción
✅ Crear puntos manualmente usando Create Points Toolbar con múltiples métodos
✅ Point Groups permiten organizar y clasificar miles de puntos dinámicamente
✅ Point Styles controlan la visualización (símbolo, color, tamaño)
✅ Editar puntos con Properties, Panorama Point Editor, o comandos de modificación
✅ Generar Point Tables dinámicas para documentación en planos
✅ Civil 3D 2026 mejora performance y queries de Point Groups

**Próxima Lección:** Importar Puntos desde Archivos Externos (CSV, TXT, LandXML) - workflows para levantamientos reales con miles de puntos.

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 30 minutos creando puntos con diferentes métodos y experimentando con Point Groups
