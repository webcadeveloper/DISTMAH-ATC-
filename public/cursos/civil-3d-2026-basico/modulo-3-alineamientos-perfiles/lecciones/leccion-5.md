# Lección 5: Perfiles de Superficie (Existing Ground)

**Duración:** 60 minutos
**Módulo:** 3 - Alineamientos y Perfiles
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué es un perfil (profile) y su función en diseño vial
✅ Diferenciar entre surface profiles y design profiles
✅ Crear surface profiles desde alignments y superficies existentes
✅ Generar profile views (vistas de perfil longitudinal)
✅ Configurar profile view styles (grid, anotación, escalas)
✅ Visualizar múltiples profiles en un mismo view
✅ Aplicar band styles (data bands) para elevaciones y estaciones
✅ Etiquetar profiles con labels dinámicas

---

## Introducción

Un **perfil** (profile) es una vista de corte vertical a lo largo de un alineamiento horizontal, mostrando las elevaciones del terreno y/o del diseño. Es esencial para visualizar las variaciones de altura, planificar la rasante (subidas/bajadas), y calcular movimientos de tierra (corte/relleno).

Hay dos tipos principales de perfiles:

1. **Surface Profile (Perfil de Superficie):** Representa el terreno natural existente (existing ground)
2. **Design Profile (Perfil de Diseño):** Representa la rasante de proyecto (finished grade)

En esta lección nos enfocamos en **surface profiles**, que son la base para diseñar la rasante en la Lección 6.

**Aplicaciones profesionales:**
- Visualización de topografía longitudinal
- Identificación de puntos altos y bajos
- Planificación de drenaje longitudinal
- Cálculo preliminar de corte/relleno
- Base para diseño de rasante vertical

![Profile longitudinal overview](../imagenes/leccion-5-profile-overview.png)

---

## 1. ¿Qué es un Perfil?

### 1.1 Definición Técnica

Un **profile** es una representación gráfica de las elevaciones a lo largo de un alignment horizontal. Muestra:

**Eje Horizontal:** Stationing (estaciones del alignment)
**Eje Vertical:** Elevation (elevaciones en metros o pies)

**Ejemplo:**
En la estación 1+250 del alignment, el terreno existente tiene elevación 1,245.80 metros.

### 1.2 Componentes de un Profile

**Profile Object (objeto profile):**
- Datos de elevación vinculados a un alignment
- Tipo: Surface o Design
- Actualización dinámica si cambia la superficie o alignment

**Profile View (vista de perfil):**
- Visualización gráfica del profile
- Grid con escalas horizontal y vertical
- Puede mostrar múltiples profiles simultáneamente
- Labels y anotaciones

**Relación:**
- Un Alignment puede tener múltiples Profiles
- Un Profile View puede mostrar múltiples Profiles
- Profiles están "amarrados" al Alignment (si mueves alignment, profile se actualiza)

![Profile components](../imagenes/leccion-5-profile-components.png)

### 1.3 Surface Profile vs Design Profile

**Surface Profile (EG - Existing Ground):**
- Elevaciones del terreno natural
- Se crea **automáticamente** desde una superficie existente
- Representa topografía actual
- No se edita (es resultado de la superficie)
- Color típico: Verde o marrón

**Design Profile (FG - Finished Grade):**
- Elevaciones de la rasante de proyecto
- Se diseña **manualmente** con tangentes verticales y curvas parabólicas
- Representa diseño de carretera/calle
- Completamente editable
- Color típico: Rojo

**En un proyecto típico:**
Tienes ambos perfiles en la misma vista para comparar terreno vs diseño y calcular corte/relleno.

![EG vs FG](../imagenes/leccion-5-eg-vs-fg.png)

---

## 2. Crear Surface Profile desde Alignment

### 2.1 Requisitos Previos

Antes de crear surface profile:

1. **Alignment horizontal** ya creado
2. **Surface** existente que cubre el área del alignment
3. Alignment debe intersectar la superficie (no estar fuera de boundaries)

**Verificación:**
En vista 3D, verifica que alignment pasa sobre superficie.

### 2.2 Procedimiento: Create Profile from Surface

**Paso 1:** Selecciona alignment en el drawing

**Paso 2:** Ribbon contextual: **Alignment** > Create Design panel > **Profile** dropdown > **Create Surface Profile**

![Create Surface Profile menu](../imagenes/leccion-5-create-surface-profile.png)

**Paso 3:** Cuadro de diálogo "Create Profile from Surface"

**General tab:**

**Select Surface:**
- Lista de superficies disponibles en el drawing
- Selecciona: "EG" (existing ground) o el nombre de tu superficie topográfica

**Profile Name:**
- Auto-generated: "EG - Surface Profile"
- Puedes personalizar: "Terreno Natural CR-80"

**Profile Style:**
- Selecciona: "Existing Ground" (línea verde típicamente)

**Profile Label Set:**
- Selecciona: "Complete Label Set" (para etiquetado completo)

![Create Profile dialog](../imagenes/leccion-5-create-profile-dialog.png)

**Sampling tab:**

Define cada cuánto se toman muestras de elevación de la superficie:

**Offset Range:**
- Start offset: 0.00 (en el eje)
- End offset: 0.00 (en el eje)
- Para profile de eje central, usa 0

**Sample Increments:**
- Station increment: 25.00 m (cada 25 metros)
- También samples en:
  - Grade breaks (cambios de pendiente en superficie)
  - Horizontal geometry points (PC, PT, PI del alignment)

**¿Por qué muestrear?**
La superficie TIN tiene millones de triángulos. Profile solo necesita elevaciones a lo largo del alignment, no todos los triángulos.

**Recomendación:**
- Terreno suave: 25-50 m
- Terreno quebrado: 10-25 m
- Montaña: 5-10 m

**Paso 4:** Click **Add** para agregar superficie a la lista

**Paso 5:** Click **OK** (NO crea vista todavía, solo el profile object)

**Resultado:**
Profile object creado pero NO visible aún. Aparece en Toolspace > Prospector > Alignments > [tu alignment] > Profiles.

![Profile in Prospector](../imagenes/leccion-5-profile-prospector.png)

---

## 3. Profile Views - Vistas de Perfil Longitudinal

### 3.1 ¿Qué es un Profile View?

Un **Profile View** es la representación gráfica (plot) del profile en el drawing. Incluye:

- Grid (cuadrícula) con escalas
- Profile lines (líneas del perfil)
- Labels de elevación y estaciones
- Título con información del alignment
- Data bands (bandas de datos)

**Un profile sin profile view es invisible** (existe pero no se ve).

### 3.2 Create Profile View Wizard

**Paso 1:** Selecciona alignment

**Paso 2:** Ribbon contextual: **Alignment** > Create Design > **Profile View**

![Create Profile View menu](../imagenes/leccion-5-create-profile-view.png)

Se abre **Create Profile View** wizard con múltiples páginas.

### 3.3 Wizard - Page 1: General

**Profile View Name:**
- Auto: "Perfil Longitudinal - Carretera CR-80"

**Profile View Style:**
- Selecciona: "Major Grids"
- Define apariencia del grid (líneas mayores, menores, colores)

**Alignment:**
- Ya seleccionado: Tu alignment

**Select Profiles to Display:**
- ✓ "EG - Surface Profile" (terreno existente)
- Puedes agregar otros profiles después

**Station Range:**
- Automatic (todo el alignment)
- O especificar rango: 0+000 a 2+500 (si solo quieres parte)

**Profile View Height:**
- Automatic (Civil 3D calcula según elevaciones)
- O manual: 100 (unidades drawing)

**Next >**

![Wizard Page 1](../imagenes/leccion-5-wizard-page-1.png)

### 3.4 Wizard - Page 2: Station Range

**Opciones:**

**1. Automatic:**
- Civil 3D divide profile view en secciones según tamaño de papel
- Útil para alignments muy largos (> 2 km)

**2. User Specified Range:**
- Especificas inicio y fin manualmente
- Ej: 0+000 a 3+000

**3. Complete Alignment:**
- Un solo profile view continuo (más común para reportes)

**Selecciona:** Complete Alignment

**Next >**

### 3.5 Wizard - Page 3: Profile View Height

**Opciones:**

**1. Automatic:**
- Civil 3D calcula altura según rango de elevaciones
- Ej: Elevación min 1200 m, max 1350 m → Height = 150 units

**2. User Specified:**
- Defines altura manualmente
- Ej: 150 units

**3. Split Profile View:**
- Divide verticalmente si rango es muy grande (> 200 m)

**Selecciona:** Automatic

**Next >**

### 3.6 Wizard - Page 4: Profile Display Options

**Profiles to display:**

Lista de todos los profiles asociados al alignment:
- ✓ EG - Surface Profile (visible)
- (Otros profiles si existen)

**Clip vertical grid:**
- ✓ Activado: Grid solo cubre rango de elevaciones de profiles
- Desactivado: Grid desde cota 0

**Draw Profile View:**
- ✓ Activado (obviamente queremos dibujarlo)

**Next >**

![Wizard Page 4](../imagenes/leccion-5-wizard-page-4.png)

### 3.7 Wizard - Page 5: Data Bands

**Data Bands** son bandas horizontales debajo del profile view con información tabular:

**Opciones de bands:**

**1. Profile Data:**
- Elevaciones del profile cada cierta distancia
- Ej: Sta 0+000 = Elev 1245.50

**2. Vertical Geometry:**
- PVIs (puntos de intersección vertical)
- Pendientes de tangentes verticales
- K-values de curvas verticales

**3. Superelevation Data:**
- Tasas de peralte a lo largo del alignment

**4. Sectional Data:**
- Áreas de corte/relleno

**5. Pipe Data:**
- Elevaciones de tuberías (pipe networks)

**Para surface profile (sin diseño aún):**
Selecciona:
- ✓ Profile Data (elevaciones de terreno existente)

**Band style:** "Elevation and Stations"

**Gap:** 0.50 (espacio entre profile view y band)

**Next >**

![Data Bands](../imagenes/leccion-5-data-bands.png)

### 3.8 Wizard - Page 6: Profile Hatch Options

**Hatch** (sombreado) entre profiles:

**Uso:** Visualizar corte (cut) y relleno (fill) entre EG y FG

**Como aún no tienes FG (design profile), skip esta página.**

**Next >**

### 3.9 Wizard - Finalizar y Colocar

**Page 7: Create Profile View**

**Click:** **Create Profile View**

**Paso final:** Civil 3D pide ubicación en pantalla

**Prompt:** "Select profile view origin:"

**Click en pantalla** donde quieres colocar esquina inferior izquierda del profile view.

**Recomendación:**
- Espacio amplio (profile views son largos)
- Alejado del plan (vista en planta)
- Layout separado si es para impresión

**Resultado:**
Profile view se dibuja mostrando:
- Grid con elevaciones y estaciones
- Línea verde del terreno existente (EG)
- Labels de elevaciones
- Data band con elevaciones tabuladas

![Profile View creado](../imagenes/leccion-5-profile-view-creado.png)

---

## 4. Profile View Styles y Configuración

### 4.1 Componentes del Profile View Style

**Grid:**
- Major grids (líneas principales cada 100 m horizontal, 10 m vertical)
- Minor grids (líneas secundarias cada 20 m horizontal, 2 m vertical)
- Colors, linetypes, lineweights

**Titles:**
- Top title (nombre del alignment)
- Bottom title (usualmente vacío o con nota)

**Axis:**
- Horizontal (Station) axis labels
- Vertical (Elevation) axis labels
- Annotation size y style

**Display:**
- What shows in Plan view vs Profile view vs Section view

### 4.2 Escalas Horizontal y Vertical

**Escala horizontal:**
Típicamente 1:1000 (1 cm = 10 m) o 1:2000

**Escala vertical:**
Típicamente 1:100 (1 cm = 1 m) o 1:200

**Exageración vertical:**
Relación entre escala vertical y horizontal.

**Ejemplo:**
- Horizontal: 1:1000
- Vertical: 1:100
- Exageración: 10:1

**¿Por qué exagerar verticalmente?**
Para visualizar mejor pendientes pequeñas. Si usaras misma escala (1:1000 H y V), una pendiente de 3% sería casi imperceptible.

**Configurar escalas:**

**Paso 1:** Selecciona profile view

**Paso 2:** Click derecho > **Profile View Properties**

**Paso 3:** Tab **Graph**

**Vertical Scale:** 1:100
**Horizontal Scale:** 1:1000
**Vertical Exaggeration:** (calculado automáticamente = 10)

![Escalas](../imagenes/leccion-5-escalas.png)

### 4.3 Editar Profile View Style

**Acceso:**
Toolspace > Settings > Profile View > Profile View Styles > [tu style] > Edit

**Tabs principales:**

**Graph tab:**
- Grid styles (major/minor)
- Title styles
- Axis styles

**Grid Padding tab:**
- Espacio adicional arriba/abajo del profile
- Útil si tienes labels que sobresalen

**Display tab:**
- View direction (perfil, plan, 3D)
- Component display on/off

**Uso profesional:**
Crear style corporativo con logo de empresa en title, colores de marca, etc.

---

## 5. Múltiples Profiles en un Profile View

### 5.1 Agregar Profile Adicional

**Escenario:**
Tienes EG (terreno existente) y quieres agregar otro surface profile (ej: propuesta de relleno).

**Paso 1:** Create Surface Profile para segunda superficie

**Paso 2:** Selecciona profile view existente

**Paso 3:** Click derecho > **Profile View Properties**

**Paso 4:** Tab **Profiles**

**Paso 5:** Lista muestra profiles actuales:
- ✓ EG - Surface Profile (ya visible)

**Paso 6:** Click **Add** > Selecciona nuevo profile

**Paso 7:** Configura draw order (orden de dibujo):
- EG: Draw order 1 (dibuja primero, atrás)
- Segundo profile: Draw order 2 (dibuja encima)

**Apply** > **OK**

**Resultado:**
Ambos profiles visibles en el mismo view con diferentes colores.

![Multiple profiles](../imagenes/leccion-5-multiple-profiles.png)

### 5.2 Profiles de Offset

**Uso:** Visualizar elevaciones a los lados del eje

**Ejemplo:**
- Profile en eje (offset 0)
- Profile a 10 m izquierda (offset -10)
- Profile a 10 m derecha (offset +10)

**Crear:**

**Paso 1:** Create Profile from Surface

**Paso 2:** Sampling tab > Offset Range:
- Start offset: -10.00
- End offset: -10.00

**Paso 3:** Profile name: "EG Left Edge"

**Paso 4:** Add to profile view

**Uso profesional:**
Verificar elevaciones de bordes de calzada, cunetas, taludes.

---

## 6. Band Styles - Data Bands

### 6.1 Tipos de Data Bands

**1. Profile Data Bands:**
- Elevations (elevaciones)
- Stations (estaciones)
- Grades (pendientes)

**2. Vertical Geometry Bands:**
- PVI stations y elevations
- Curve lengths y K-values

**3. Superelevation Bands:**
- Left/Right superelevation rates

**4. Sectional Data Bands:**
- Cut/Fill areas
- Cumulative volumes

### 6.2 Agregar/Editar Bands

**Paso 1:** Selecciona profile view

**Paso 2:** Click derecho > **Profile View Properties**

**Paso 3:** Tab **Bands**

**Paso 4:** Lista de bands actuales (si hay)

**Paso 5:** Click **Add** > Selecciona tipo:

**Profile Data:**
- Band Style: "Elevation and Stations"
- Profile 1: EG - Surface Profile
- Gap: 0.50

**Paso 6:** Configurar banda:

**Columns:**
- Station (cada 25 m)
- Elevation (precisión 0.01 m)

**Text Height:** 2.5 mm

**Apply** > **OK**

**Resultado:**
Banda aparece debajo del profile view con tabla de datos.

![Data Band](../imagenes/leccion-5-data-band.png)

### 6.3 Band Styles Personalizados

**Crear custom band style:**

**Paso 1:** Toolspace > Settings > Profile View > Band Styles > Profile Data

**Paso 2:** Click derecho > **New**

**Paso 3:** Name: "Elevaciones cada 50 m"

**Paso 4:** Tab **Band Details**

**Major Interval:** 50.00 (estaciones mayores cada 50 m)
**Minor Interval:** 10.00

**Paso 5:** Tab **Labels**

**Title Text:** "ELEVACIONES TERRENO NATURAL"

**Station Label:** Formato "0+000"
**Elevation Label:** Formato "1234.56 m"

**Save**

**Aplicar:**
Profile View Properties > Bands > Add > Selecciona tu custom style.

---

## 7. Profile Labels y Anotación

### 7.1 Tipos de Profile Labels

**1. Station Elevation Labels:**
- Muestra estación y elevación en puntos específicos

**2. Grade Labels:**
- Muestra pendiente (%) en segmentos

**3. Crest/Sag Labels:**
- Puntos altos (crest) y bajos (sag) del profile

**4. Profile Geometry Point Labels:**
- PVIs, VPCs, VPTs (en design profiles)

**5. Depth Labels:**
- Profundidad de corte/relleno entre dos profiles

### 7.2 Agregar Labels a Profile

**Paso 1:** Selecciona profile line (línea verde de EG)

**Paso 2:** Ribbon contextual: **Profile** > Labels & Tables > **Add Profile Labels**

**Paso 3:** Cuadro "Add Labels"

**Label Type:** Station Elevation

**Station Elevation Label Style:** "Station and Elevation"

**Marker Style:** Circle

**Paso 4:** **Add**

**Paso 5:** Civil 3D pide ubicaciones:

**Prompt:** "Select point on profile:"

**Click en puntos de interés** a lo largo del profile (puntos altos, bajos, intersecciones).

**Press Enter** para terminar.

**Resultado:**
Labels dinámicas en puntos seleccionados mostrando:
```
Sta: 1+245.00
Elev: 1,250.35
```

![Profile Labels](../imagenes/leccion-5-profile-labels.png)

### 7.3 Label Styles - Edición

**Editar style de label:**

**Paso 1:** Toolspace > Settings > Profile > Label Styles > Station Elevation

**Paso 2:** Click derecho en style > **Edit**

**Paso 3:** Tab **Layout**

**Contents:**
Define qué texto se muestra.

**Ejemplo de contenido:**
```
Estación: <[Station(Uft|FS|P2|RN|AP|Sn|OF)]>
Elevación: <[Profile Elevation(Uft|P3|RN|AP)]> m
```

**Component Properties:**
- Text height: 2.5 mm
- Color: ByBlock
- Anchor: Middle center

**Save**

**Resultado:**
Todos los labels con este style se actualizan automáticamente.

---

## 8. Profile Data en Toolspace

### 8.1 Prospector - Profiles

**Navegación:**

Toolspace > Prospector > Alignments > [tu alignment] > **Profiles**

**Vista de lista:**
- EG - Surface Profile
- (Otros profiles asociados al alignment)

**Click derecho en profile:**
- Edit Profile Geometry (solo design profiles)
- Profile Properties
- Delete
- Export to LandXML

### 8.2 Profile Properties Dialog

**Tabs:**

**Information tab:**
- Name, description, object style
- Profile type (Surface vs Layout)

**Geometry tab:**
- Lista de elementos (solo design profiles tienen PVIs, curves)
- Surface profiles: "Sampled from surface"

**Elevations tab:**
- Tabla estación-elevación completa
- Exportable a CSV

**Statistics tab:**
- Longitud total
- Elevación mínima/máxima
- Pendiente promedio, máxima

**Paso útil:**
Elevations tab > Export to CSV > Analizar en Excel.

![Profile Properties](../imagenes/leccion-5-profile-properties.png)

---

## Ejercicio Práctico 5

**Objetivo:** Crear surface profile y profile view para carretera rural.

**Archivo:** `Highway-Profile.dwg` (contiene alignment "Carretera CR-80" y superficie "EG")

**Datos:**
- Alignment length: 2,500 m
- Superficie: Terreno natural vallado, elevaciones 1200-1280 m
- Proyecto: Visualizar perfil longitudinal para planificar rasante

### Tareas:

**Tarea 1: Verificar datos de entrada**

1. Abre `Highway-Profile.dwg`
2. Verifica que existe:
   - Alignment "Carretera CR-80" (vista en planta)
   - Surface "EG" (visible con contours)
3. Zoom extents para ver ambos

**Tarea 2: Crear Surface Profile**

4. Selecciona alignment "Carretera CR-80"
5. Create Surface Profile:
   - Surface: EG
   - Profile name: EG - Terreno Natural
   - Profile style: Existing Ground
   - Sampling: Station increment 25 m
6. Add > OK
7. Verifica en Prospector que profile fue creado

**Tarea 3: Crear Profile View**

8. Con alignment seleccionado, Create Profile View
9. Wizard configuración:
   - **Page 1:** Profile View style "Major Grids", Select profile "EG - Terreno Natural"
   - **Page 2:** Complete Alignment
   - **Page 3:** Automatic height
   - **Page 4:** Profiles to display ✓ EG
   - **Page 5:** Data Band "Elevation and Stations", gap 0.50
   - **Page 6:** Skip (no hatch)
10. Create Profile View
11. Coloca en espacio amplio abajo del plan

**Tarea 4: Revisar escalas**

12. Selecciona profile view
13. Profile View Properties > Graph tab
14. Anota:
    - Vertical scale: ______
    - Horizontal scale: ______
    - Vertical exaggeration: ______
15. Si exageración < 5, cambia vertical scale a 1:100

**Tarea 5: Agregar labels**

16. Selecciona profile line (EG - Terreno Natural)
17. Add Profile Labels > Station Elevation
18. Coloca labels en:
    - Punto más alto del profile (visualmente)
    - Punto más bajo
    - 3 puntos intermedios de interés
19. Total: 5 labels

**Tarea 6: Análisis visual**

20. Observa el profile view y responde:
    - ¿Cuál es la elevación aproximada máxima? _______ m
    - ¿Cuál es la elevación aproximada mínima? _______ m
    - ¿Hay zonas con pendiente muy pronunciada? ¿Dónde? _______
    - ¿El terreno es mayormente plano, ondulado, o montañoso? _______

**Tarea 7: Exportar datos**

21. Profile Properties (EG - Terreno Natural)
22. Elevations tab
23. Exporta a CSV: "EG-Elevations.csv"
24. Abre en Excel
25. Crea gráfica de Estación vs Elevación (verifica que coincide con profile view)

### Entregable:

1. Screenshot del profile view completo con:
   - Grid visible
   - Profile line (EG)
   - 5 labels de station-elevation
   - Data band de elevaciones
2. Archivo CSV exportado
3. Respuestas a preguntas de análisis visual

**Criterios de evaluación:**
- Profile creado correctamente desde superficie ✓
- Profile view bien configurado (escalas, grid) ✓
- Labels aplicados apropiadamente ✓
- Análisis visual preciso ✓

![Ejercicio 5 Resultado](../imagenes/leccion-5-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia entre un Surface Profile y un Design Profile?

**Pregunta 2:** ¿Para qué se usa la exageración vertical en un profile view y qué relación es típica (ej: 5:1, 10:1)?

**Pregunta 3:** ¿Qué información muestran los Data Bands en un profile view?

**Pregunta 4:** Si cambias la elevación de puntos en la superficie EG después de crear el surface profile, ¿qué sucede con el profile? ¿Se actualiza automáticamente?

**Pregunta 5:** ¿Cómo agregarías un segundo profile (ej: profile a 5 m de offset del eje) al mismo profile view?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "Profiles Overview"
- Civil 3D 2026 Help - "Profile Views"

**Tutoriales:**
- Autodesk Civil 3D - Creating Surface Profiles (video oficial)
- Profile View Configuration Best Practices

**Templates:**
- Profile View Styles Library (corporativo)
- Band Styles Collection

---

## Resumen

En esta lección aprendiste:

✅ Qué es un profile: Vista de corte vertical a lo largo de un alignment
✅ Surface profiles representan terreno existente (EG - Existing Ground)
✅ Crear surface profiles desde superficies con sampling configurado
✅ Profile views visualizan profiles con grid, escalas y anotación
✅ Escalas horizontal (1:1000) y vertical (1:100) con exageración típica 10:1
✅ Múltiples profiles pueden mostrarse en un mismo view
✅ Data bands muestran información tabular (elevaciones, estaciones)
✅ Labels dinámicas para anotar puntos de interés en profiles

**Próxima Lección:** Diseño de Rasante Vertical (Finished Grade) - Crear design profiles con tangentes verticales y curvas parabólicas para diseño de carreteras

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 30 minutos creando profile views con diferentes configuraciones de styles y bands
