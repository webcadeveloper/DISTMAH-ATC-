# Ejercicios Prácticos - Módulo 1: Introducción a Civil 3D 2026

**Curso:** Autodesk Civil 3D 2026 - Básico
**Módulo:** 1 - Introducción a Civil 3D 2026
**Duración total:** 3 horas de práctica

---

## Descripción General

Este documento contiene los 5 ejercicios prácticos del Módulo 1, diseñados para reforzar los conceptos aprendidos en cada lección. Los ejercicios son **progresivos** - cada uno construye sobre el anterior.

**Entregables:**
- Screenshots específicos de cada ejercicio
- Archivos .dwg y .dwt creados
- Carpeta de Data Shortcuts configurada

---

## Ejercicio 1: Explorar Interface y Crear Workspace Personalizado

**Lección:** 1 - Interfaz de Civil 3D 2026 y Workspace
**Duración:** 30 minutos
**Dificultad:** Básica

### Objetivos

- Familiarizarse con la interfaz de Civil 3D 2026
- Explorar Ribbon tabs (Home, Insert, Annotate, Analyze, View, Output)
- Trabajar con Toolspace (Prospector, Settings, Survey, Toolbox)
- Personalizar Quick Access Toolbar
- Crear y guardar workspace personalizado

### Instrucciones

#### Parte 1: Explorar el Ribbon

1. **Abrir Civil 3D 2026:**
   - Inicia Autodesk Civil 3D 2026
   - Create New Drawing from template: `_AutoCAD Civil 3D (Metric) NCS.dwt`

2. **Ribbon Navigation:**
   - Click en cada tab del Ribbon (Home, Insert, Annotate, Analyze, View, Output)
   - Identifica dónde están los siguientes comandos:
     - `Create Surface` (Home tab)
     - `Create Alignment` (Home tab)
     - `Import Points` (Insert tab)
     - `Add Labels` (Annotate tab)
     - `Object Viewer` (View tab)
     - `Plan Production` (Output tab)

3. **Screenshot 1:**
   - Captura el **Home tab** del Ribbon mostrando el panel "Create Design"

#### Parte 2: Explorar Toolspace

4. **Abrir Toolspace** (si no está visible):
   - Command: `TOOLSPACE` + Enter

5. **Prospector Tab:**
   - Click en Prospector tab
   - Expand "Master View"
   - Observa las colecciones vacías:
     - Point Groups
     - Surfaces
     - Alignments
     - Profiles
     - Pipe Networks

6. **Settings Tab:**
   - Click en Settings tab
   - Expand "Drawing" (nombre del drawing actual)
   - Expand "Drawing Settings"
   - **NO EDITES NADA AÚN** - Solo observa la estructura

7. **Survey Tab:**
   - Click en Survey tab
   - Observa las herramientas disponibles (Survey Databases, Import Survey Data)

8. **Toolbox Tab:**
   - Click en Toolbox tab
   - Observa las herramientas (Reports Manager, Data Shortcuts)

9. **Screenshot 2:**
   - Captura el Toolspace mostrando el **Prospector tab** con Master View expandido

#### Parte 3: Customizar Quick Access Toolbar

10. **Add Commands:**
    - En Ribbon → **Home tab** → **Create Ground Data panel**
    - Click derecho en "Points" → **Add to Quick Access Toolbar**
    - Repite para:
      - "Surfaces" (Home tab → Create Design panel)
      - "Alignments" (Home tab → Create Design panel)

11. **Verify:**
    - Quick Access Toolbar (barra superior) debe mostrar los 3 comandos añadidos

12. **Screenshot 3:**
    - Captura Quick Access Toolbar mostrando los comandos personalizados añadidos

#### Parte 4: Crear Workspace Personalizado

13. **Posicionar Toolspace:**
    - Arrastra Toolspace al lado **izquierdo** (dock left)
    - Ajusta ancho para que ocupe ~25% de la pantalla

14. **Ribbon Display:**
    - Verifica que el Ribbon esté visible en la parte superior

15. **Save Workspace:**
    - Command line: `WSSAVE` + Enter
    - Workspace Name: `Mi_Civil3D_Workspace_[TuNombre]`
    - Save

16. **Test Workspace:**
    - Close Civil 3D
    - Reopen Civil 3D
    - Verifica que tu workspace se carga automáticamente

17. **Screenshot 4:**
    - Captura pantalla completa mostrando tu workspace personalizado:
      - Toolspace docked a la izquierda
      - Ribbon en la parte superior
      - Quick Access Toolbar con comandos personalizados

### Entregables Ejercicio 1

- Screenshot 1: Home tab del Ribbon
- Screenshot 2: Prospector tab expandido
- Screenshot 3: Quick Access Toolbar personalizado
- Screenshot 4: Workspace completo personalizado

---

## Ejercicio 2: Configurar Proyecto con Drawing Settings

**Lección:** 2 - Configuración de Proyectos y Drawing Settings
**Duración:** 40 minutos
**Dificultad:** Intermedia

### Objetivos

- Crear drawing desde template métrico
- Configurar Drawing Settings (Units, Zone, Object Layers)
- Establecer sistema de coordenadas UTM para tu región
- Configurar Ambient Settings (precisión)
- Crear template personalizado (.dwt)

### Instrucciones

#### Parte 1: Crear Drawing y Configurar Units

1. **New Drawing:**
   - Application Menu (A) → New → Drawing
   - Template: `_AutoCAD Civil 3D (Metric) NCS.dwt`
   - Open

2. **Access Drawing Settings:**
   - Toolspace → **Settings Tab**
   - Click derecho en nombre del drawing (top level)
   - **Edit Drawing Settings...**

3. **Units Tab:**
   - **Drawing Units:** Meters
   - **Angular Units:** Degrees
   - **Direction:** North
   - **Rotation:** Counter-Clockwise
   - **Apply** (no cierres el dialog aún)

4. **Screenshot 1:**
   - Captura **Units Tab** con configuración métrica

#### Parte 2: Configurar Coordinate System

5. **Zone Tab:**
   - Click en tab "Zone"
   - **Categories:** Select "UTM"
   - **Available coordinate systems:**
     - **Si estás en Venezuela:** UTM Zone 19N, WGS84
     - **Si estás en México Central:** UTM Zone 13N, WGS84
     - **Si estás en Chile Central:** UTM Zone 19S, WGS84
     - **Si estás en otra región:** Busca tu zona UTM
       - Fórmula: Zona = INT((Longitud + 180) / 6) + 1
       - Ejemplo: Lima, Perú (Longitud -77°) → Zona 18S
   - **Select** el coordinate system correcto
   - **OK**

6. **Verify Zone:**
   - Command: `MAPCSASSIGN`
   - Verifica que el coordinate system esté asignado
   - **Close**

7. **Screenshot 2:**
   - Captura **Zone Tab** mostrando el UTM Zone seleccionado

#### Parte 3: Configurar Ambient Settings

8. **Access Ambient Settings:**
   - Settings Tab → Expand nombre del drawing
   - Scroll down → **Ambient Settings**
   - Click derecho → **Edit...**

9. **Distance:**
   - **Unit:** Meter
   - **Format:** Decimal
   - **Precision:** 0.001 (1mm)
   - **Rounding:** Standard

10. **Elevation:**
    - **Unit:** Meter
    - **Format:** Decimal
    - **Precision:** 0.01 (1cm)

11. **Angle:**
    - **Unit:** Degree
    - **Format:** DD.MMSS (grados, minutos, segundos)
    - **Precision:** 1" (1 segundo de arco)
    - **Direction:** North Azimuth

12. **Slope:**
    - **Format:** Percent
    - **Precision:** 0.01%

13. **OK**

14. **Screenshot 3:**
    - Captura Ambient Settings mostrando Distance settings (0.001 precision)

#### Parte 4: Save as Template

15. **Save Drawing:**
    - File → **Save**
    - Name: `Proyecto_[TuRegion]_Configurado.dwg`
    - Location: Carpeta de ejercicios
    - Save

16. **Save as Template:**
    - File → **Save As**
    - **Files of type:** AutoCAD Drawing Template (*.dwt)
    - **File name:** `Proyecto_Carretera_[TuRegion]_UTM[Zona].dwt`
      - Ejemplo: `Proyecto_Carretera_Venezuela_UTM19N.dwt`
    - **Description:** "Template métrico para proyectos de carretera - [Tu Región] - UTM Zone [X]N, WGS84 - Creado por [Tu Nombre]"
    - **Measurement:** Metric
    - **Save**

17. **Test Template:**
    - Close all drawings
    - New → Drawing
    - Browse → Select tu template `.dwt` creado
    - Open
    - Verify Settings:
      - Edit Drawing Settings → Units: Meters ✓
      - Zone: UTM correcto ✓
      - Ambient Settings → Distance: 0.001 ✓

18. **Screenshot 4:**
    - Captura del dialog "Save Drawing As Template" mostrando Description

### Entregables Ejercicio 2

- Drawing: `Proyecto_[TuRegion]_Configurado.dwg`
- Template: `Proyecto_Carretera_[TuRegion]_UTM[Zona].dwt`
- Screenshot 1: Units Tab
- Screenshot 2: Zone Tab con UTM
- Screenshot 3: Ambient Settings - Distance
- Screenshot 4: Save Template dialog con Description

---

## Ejercicio 3: Crear y Exportar Styles Personalizados

**Lección:** 3 - Styles y Templates de Civil 3D
**Duración:** 45 minutos
**Dificultad:** Intermedia-Avanzada

### Objetivos

- Crear Surface Style personalizado para curvas de nivel
- Crear Label Style para etiquetas de elevación
- Crear Table Style para tablas de curvas
- Exportar styles a Style Library (.dwg)
- Importar styles a otro drawing

### Instrucciones

#### Parte 1: Crear Surface Style

1. **Abrir Template:**
   - Open el template creado en Ejercicio 2

2. **Access Surface Styles:**
   - Toolspace → **Settings Tab**
   - Expand "Surface"
   - Expand "Surface Styles"

3. **Copy Existing Style:**
   - Click derecho en "Contours 1m and 5m" → **Copy**
   - Click derecho en "Surface Styles" → **Paste**
   - Rename: "Curvas_Corporativo_[TuNombre]"

4. **Edit Style:**
   - Click derecho en tu nuevo style → **Edit...**

5. **Information Tab:**
   - **Name:** Curvas_Corporativo_[TuNombre]
   - **Description:** "Curvas de nivel corporativas - Minor 1m (café claro), Major 5m (café oscuro) - Creado por [Tu Nombre]"
   - **Created By:** [Tu Nombre]

6. **Display Tab:**
   - **View Direction:** Plan
   - **Component Display:**
     - Border: Visible ✓, Layer: C-TOPO-BORDER, Color: Red (1), Lineweight: 0.35mm
     - **Major Contour:**
       - Visible: ✓
       - Layer: C-TOPO-MAJR
       - **Color: 30 (café oscuro)**
       - Linetype: Continuous
       - Lineweight: **0.25mm**
     - **Minor Contour:**
       - Visible: ✓
       - Layer: C-TOPO-MINR
       - **Color: 32 (café claro)**
       - Linetype: Continuous
       - Lineweight: **0.13mm**
     - Triangles: Visible ✗ (unchecked)

7. **Contours Tab:**
   - **Base Elevation:** 0.000
   - **Minor Interval:** 1.0 m
   - **Major Interval:** 5.0 m
   - **Smooth contours:** ✓
   - **Smoothing type:** Add vertices

8. **OK**

9. **Screenshot 1:**
   - Captura **Display Tab** mostrando la configuración de Major y Minor Contours

#### Parte 2: Crear Label Style para Curvas de Nivel

10. **Access Label Styles:**
    - Settings Tab → Expand "Surface"
    - Expand "Label Styles" → Expand "Contour"
    - Expand "Single Contour"

11. **Copy Style:**
    - Click derecho en "Existing Contour - Elevation Only" → Copy
    - Paste en "Single Contour"
    - Rename: "Elevation_m_[TuNombre]"

12. **Edit Label Style:**
    - Click derecho → **Edit...**

13. **General Tab:**
    - **Layer:** C-TOPO-LABL
    - **Orientation Reference:** Object
    - **Plan Readability:** ✓ (checked)

14. **Layout Tab:**
    - **Text Component:** Elevation
    - **Text Contents:** Click en **[...]** button

15. **Text Component Editor:**
    - **Format tab:**
    - Delete contenido actual
    - **Properties dropdown:** Selecciona "Surface Elevation"
    - Click en **blue arrow** (añade al format)
    - El código aparece: `<[Surface Elevation(Um|P2|RN|AP|Sn|OF)]>`
    - **Modifica precision:** Cambia `P2` a `P3` (3 decimales)
    - **Añade texto:** Al final del código, añade ` m`
    - **Resultado:**
      ```
      <[Surface Elevation(Um|P3|RN|AP|Sn|OF)]> m
      ```
    - **Preview:** Debe mostrar algo como `125.430 m`
    - **OK**

16. **OK** (cierra Label Style dialog)

17. **Screenshot 2:**
    - Captura **Text Component Editor** mostrando el format con `P3` y `m`

#### Parte 3: Crear Style Library

18. **Nuevo Drawing:**
    - New Drawing (template métrico básico)
    - Save As: `Style_Library_[TuNombre].dwg`

19. **Import Styles:**
    - Toolspace → Settings Tab
    - Click derecho en nombre del drawing (top level) → **Import**
    - **Import Styles from another drawing...**
    - Browse → Selecciona el template del Ejercicio 2
    - Open

20. **Import Dialog:**
    - Expand "Surface"
    - Expand "Surface Styles"
    - **Check:** Curvas_Corporativo_[TuNombre] ✓
    - Expand "Label Styles" → Expand "Surface" → Expand "Contour" → Expand "Single Contour"
    - **Check:** Elevation_m_[TuNombre] ✓
    - **OK**

21. **Verify:**
    - Settings Tab del Style Library drawing
    - Verifica que los 2 styles están presentes

22. **Save** el Style Library

23. **Screenshot 3:**
    - Captura **Import Styles dialog** mostrando los styles seleccionados para importar

#### Parte 4: Probar Import en Drawing Nuevo

24. **Nuevo Drawing de Prueba:**
    - New Drawing (template básico)
    - Save As: `Prueba_Import_Styles.dwg`

25. **Import desde Style Library:**
    - Import Styles from another drawing
    - Browse → Select `Style_Library_[TuNombre].dwg`
    - Import los 2 styles
    - OK

26. **Verify:**
    - Settings Tab → Surface → Surface Styles
    - Debe aparecer "Curvas_Corporativo_[TuNombre]"

27. **Screenshot 4:**
    - Captura Settings Tab del drawing de prueba mostrando los styles importados

### Entregables Ejercicio 3

- Drawing: `Style_Library_[TuNombre].dwg`
- Drawing: `Prueba_Import_Styles.dwg`
- Screenshot 1: Surface Style - Display Tab
- Screenshot 2: Label Style - Text Component Editor
- Screenshot 3: Import Styles dialog
- Screenshot 4: Styles importados en drawing de prueba

---

## Ejercicio 4: Configurar Data Shortcuts y Workflow Colaborativo

**Lección:** 4 - Project Explorer y Data Shortcuts
**Duración:** 50 minutos
**Dificultad:** Avanzada

### Objetivos

- Crear estructura de proyecto multi-usuario
- Configurar Working Folder y Data Shortcuts folder
- Crear superficie básica y publicarla como Data Shortcut
- Crear drawing que referencia el shortcut
- Simular actualización y sincronización

### Instrucciones

#### Parte 1: Setup Estructura del Proyecto

1. **Crear Carpetas:**
   ```
   C:\Proyectos\Ejercicio4_DataShortcuts\
   ├── _Shortcuts\          (Civil 3D la creará)
   ├── Topografia\
   ├── Vialidad\
   └── Redes\
   ```

2. **Verify Folders:**
   - Asegúrate de que existen las carpetas Topografia, Vialidad, Redes

#### Parte 2: Configurar Working Folder

3. **Open Civil 3D:**
   - Start Civil 3D 2026

4. **Open Project Explorer:**
   - **Home Tab** → **Project panel** → **Project Explorer**

5. **Set Working Folder:**
   - Click en botón **"Set Working Folder"** (ícono de carpeta)
   - Browse → `C:\Proyectos\Ejercicio4_DataShortcuts\`
   - **Select Folder**

6. **Data Shortcuts Folder Dialog:**
   - **Use default path** (creará `_Shortcuts\`)
   - **OK**

7. **Verify:**
   - Project Explorer debe mostrar:
     - Working Folder: `C:\Proyectos\Ejercicio4_DataShortcuts\`
     - Tree view con las carpetas Topografia, Vialidad, Redes

8. **Screenshot 1:**
   - Captura Project Explorer mostrando el Working Folder configurado

#### Parte 3: Crear Source Drawing con Superficie

9. **New Drawing:**
   - New → Template métrico
   - Save As: `Topografia\Topo_Base.dwg`
   - **Importante:** Guardar DENTRO de la carpeta Topografia del proyecto

10. **Verify Working Folder (en drawing):**
    - Toolspace → **Toolbox Tab**
    - Expand "Data Shortcuts"
    - Expand "Working Folder"
    - Debe mostrar: `C:\Proyectos\Ejercicio4_DataShortcuts\`

11. **Create Surface:**
    - Home Tab → Create Design panel → **Surfaces** dropdown → **Create Surface...**
    - **Create Surface dialog:**
      - Name: **EG** (Existing Ground)
      - Description: "Superficie existente del terreno"
      - Style: Contours 1m and 5m
      - **OK**

12. **Add Points to Surface (Manual):**
    - Toolspace → **Prospector Tab**
    - Expand "Surfaces" → Expand "EG"
    - Expand "Definition" → Expand "Drawing Objects"
    - Click derecho en "Drawing Objects" → **Add...**
    - **Add Point to Surface dialog:**
      - **Add points from:** Drawing objects
      - **Select objects:** Click en pantalla, añade 8-10 puntos en diferentes ubicaciones
      - (Alternativamente, si conoces el comando: Command `POINT`, añade puntos con elevación variando Z)
    - **OK**

13. **Add Breakline (Opcional):**
    - Create polyline 3D con algunos vértices
    - Definition → Breaklines → Add
    - Select la polyline
    - Esto mejora la superficie

14. **Verify Surface:**
    - Zoom Extents (Z, E, Enter)
    - Debes ver curvas de nivel

15. **Screenshot 2:**
    - Captura mostrando la superficie "EG" con curvas de nivel visibles

#### Parte 4: Publish Data Shortcut

16. **Create Data Shortcut:**
    - Prospector Tab → Expand "Surfaces"
    - Click derecho en "EG" → **Create Data Shortcut...**

17. **Create Data Shortcut Dialog:**
    - **Name:** EG (auto-filled)
    - **Description:** "Superficie existente del terreno - Levantamiento Ejercicio 4"
    - **Folder:** `_Shortcuts\` (auto)
    - **OK**

18. **Verify XML:**
    - En Windows Explorer, navega a `C:\Proyectos\Ejercicio4_DataShortcuts\_Shortcuts\`
    - Debe existir archivo **`Surface.xml`**
    - (Opcional) Abre con Notepad - verás metadata de la superficie

19. **Screenshot 3:**
    - Captura Windows Explorer mostrando `_Shortcuts\Surface.xml`

20. **Save** el drawing `Topo_Base.dwg`

#### Parte 5: Crear Drawing con Reference

21. **New Drawing:**
    - New → Template métrico
    - Save As: `Vialidad\Diseño_Eje.dwg`
    - **Importante:** Guardar en carpeta Vialidad

22. **Verify Working Folder:**
    - Toolbox Tab → Data Shortcuts → Working Folder
    - Debe mostrar el mismo working folder del proyecto

23. **Create Reference:**
    - Toolspace → **Prospector Tab**
    - Expand "Data Shortcuts" (nueva colección)
    - Expand "Surfaces"
    - Verás listada la superficie **"EG"**

24. **Create Surface Reference:**
    - Click derecho en "EG" → **Create Reference...**

25. **Create Surface Reference Dialog:**
    - **Name:** EG (puedes dejar igual o cambiar a "EG_Referencia")
    - **Description:** (auto - hereda del shortcut)
    - **Style:** Contours 1m and 5m
    - **OK**

26. **Verify:**
    - Zoom Extents
    - La superficie "EG" aparece en tu drawing
    - Prospector → Surfaces → "EG" tiene ícono de referencia (link/candado)

27. **Test Read-Only:**
    - Intenta editar la superficie:
    - Prospector → Surfaces → EG → Definition → Drawing Objects
    - Click derecho → **Add...**
    - **Resultado:** Civil 3D muestra mensaje de error "Cannot edit referenced object"
    - ✓ Correcto - las referencias son read-only

28. **Screenshot 4:**
    - Captura Prospector mostrando "EG" como referencia (ícono diferente) en `Diseño_Eje.dwg`

#### Parte 6: Modificar y Sincronizar

29. **Modify Source:**
    - Open `Topografia\Topo_Base.dwg`
    - Add 5 puntos adicionales a la superficie "EG" (diferentes elevaciones)
      - Definition → Drawing Objects → Add
      - Añade puntos con el mouse
    - **Save** el drawing

30. **Switch to Reference Drawing:**
    - Switch to `Vialidad\Diseño_Eje.dwg` (Window menu o Alt+Tab)

31. **Check Sync Status:**
    - Prospector → Surfaces → "EG"
    - Debe mostrar ícono de **warning** ⚠ (out of sync)

32. **Synchronize:**
    - Click derecho en "EG" → **Synchronize**

33. **Verify:**
    - La superficie se actualiza
    - Las curvas de nivel reflejan los nuevos puntos

34. **Screenshot 5:**
    - Captura mostrando la superficie sincronizada (antes/después si es posible, o solo después)

### Entregables Ejercicio 4

- Estructura de carpetas completa con _Shortcuts
- Drawing: `Topografia\Topo_Base.dwg` (source)
- Drawing: `Vialidad\Diseño_Eje.dwg` (reference)
- Archivo: `_Shortcuts\Surface.xml`
- Screenshot 1: Project Explorer con Working Folder
- Screenshot 2: Superficie "EG" con curvas en Topo_Base.dwg
- Screenshot 3: Windows Explorer mostrando Surface.xml
- Screenshot 4: Prospector mostrando "EG" referenciada
- Screenshot 5: Superficie sincronizada

---

## Ejercicio 5: Visualización 3D con 3D Model Viewer

**Lección:** 5 - 3D Model Viewer y Herramientas de Visualización
**Duración:** 45 minutos
**Dificultad:** Intermedia

### Objetivos

- Activar y configurar 3D Model Viewer
- Navegar modelo 3D (Orbit, Pan, Zoom)
- Aplicar Visual Styles (Realistic)
- Crear Section Box para cortes dinámicos
- Aplicar Elevation y Slope Analysis
- Exportar imagen de alta resolución

### Instrucciones

#### Parte 1: Preparar Drawing

1. **Open Drawing:**
   - Open `Topografia\Topo_Base.dwg` del Ejercicio 4
   - (Debe contener la superficie "EG" con curvas de nivel)

2. **Verify Surface:**
   - Prospector → Surfaces → Debe existir "EG"
   - Zoom Extents para ver toda la superficie

#### Parte 2: Activar 3D Model Viewer

3. **Open 3D Model Viewer:**
   - **View Tab** → **Views panel** → **3D Model Viewer**

4. **Display Settings:**
   - En el viewer, verifica que:
     - ✓ Surfaces → ✓ EG (checked)

5. **Visual Style:**
   - Toolbar del viewer → **Visual Style** dropdown
   - Select: **Realistic**

6. **Screenshot 1:**
   - Captura 3D Model Viewer mostrando la superficie en Realistic mode

#### Parte 3: Navegación 3D

7. **Orbit:**
   - Click y arrastra en el viewport 3D
   - Rota el modelo 360° - observa desde diferentes ángulos

8. **Zoom:**
   - Rueda del mouse adelante/atrás
   - Acerca y aleja

9. **Pan:**
   - Shift + Click y arrastra
   - Desplaza la vista lateralmente

10. **Zoom Extents:**
    - Botón "Zoom to Fit" (cuadro con flechas)
    - Ajusta vista para mostrar toda la superficie

11. **Isometric View:**
    - ViewCube (esquina del viewport) → Click en esquina "SW" (suroeste)
    - Vista isométrica estándar

12. **Screenshot 2:**
    - Captura vista isométrica SW con Realistic rendering

#### Parte 4: Section Box

13. **Activate Section Box:**
    - Toolbar del viewer → **Section Box: On** (checkbox o toggle)

14. **Observe Box:**
    - Aparece un cubo alrededor del modelo con handles (flechas) en cada cara

15. **Create Vertical Cut:**
    - Arrastra el handle del lado **Este** hacia el **Oeste**
    - Observa cómo se "corta" la superficie progresivamente
    - Detente cuando hayas cortado aproximadamente 50% del modelo

16. **Screenshot 3:**
    - Captura mostrando Section Box activo con corte vertical (50%)

17. **Create Horizontal Cut:**
    - Arrastra el handle **superior** hacia abajo
    - Corta por elevación
    - Observa la triangulación interna de la superficie

18. **Screenshot 4:**
    - Captura con corte horizontal (elevación)

19. **Reset Section Box:**
    - Botón "Fit to Objects" - El box se restaura alrededor del modelo completo

#### Parte 5: Elevation Analysis

20. **Activate Elevation Analysis:**
    - (Este paso puede variar - Civil 3D 2026 puede tener interface ligeramente diferente)
    - **Method 1:** Settings Tab → Surface → Surface Properties → "EG" → Analysis tab → Elevations
    - **Method 2:** En viewport 2D, selecciona superficie → Ribbon contextual → Analyze → Elevations

21. **Configure Analysis:**
    - **Analysis type:** Elevations
    - **Scheme:** Rainbow (o Green to Red)
    - **Number of ranges:** 10
    - **Create ranges automatically**
    - **OK**

22. **Observe en 3D Viewer:**
    - La superficie muestra bandas de color por elevación:
      - Azul = elevaciones bajas
      - Verde-Amarillo = medias
      - Rojo = elevaciones altas

23. **Screenshot 5:**
    - Captura 3D Model Viewer mostrando Elevation Analysis con bandas de color

#### Parte 6: Slope Analysis

24. **Change to Slope Analysis:**
    - Surface Properties → Analysis tab → **Slopes**

25. **Configure:**
    - **Scheme:** Green to Red
    - **Ranges:**
      - 0-5%: Verde oscuro
      - 5-10%: Verde claro
      - 10-20%: Amarillo
      - 20-30%: Naranja
      - 30%+: Rojo
    - **OK**

26. **Observe:**
    - Superficie muestra colores por pendiente
    - Verde = plano (apto para construcción)
    - Rojo = empinado (requiere taludes especiales)

27. **Screenshot 6:**
    - Captura Slope Analysis en 3D Model Viewer

#### Parte 7: Export High-Resolution Image

28. **Navigate to Best View:**
    - Rotate a vista isométrica SW
    - Zoom to Extents
    - Asegúrate de que la superficie con Slope Analysis está visible

29. **Export Image:**
    - **View Tab** → **Export panel** → **Export Image**
    - (Si no encuentras esta opción, usa el method alternativo: Command `EXPORT` → Tipo WMF/BMP)

30. **Export Image Dialog:**
    - **File Type:** PNG
    - **Resolution:**
      - **Custom:** 1920 x 1080 (Full HD)
    - **Background:** White
    - **Anti-aliasing:** ✓ (checked)
    - **Save location:** Carpeta de ejercicios
    - **File name:** `Modelo3D_Ejercicio5_[TuNombre].png`
    - **Export**

31. **Verify:**
    - Abre la imagen exportada en Windows Photo Viewer o navegador
    - Debe mostrar el modelo 3D con slope analysis en alta calidad

32. **Screenshot 7:**
    - (Este es el archivo exportado mismo: `Modelo3D_Ejercicio5_[TuNombre].png`)

### Entregables Ejercicio 5

- Screenshot 1: 3D Model Viewer - Realistic mode
- Screenshot 2: Vista isométrica SW
- Screenshot 3: Section Box con corte vertical
- Screenshot 4: Section Box con corte horizontal
- Screenshot 5: Elevation Analysis (bandas de color)
- Screenshot 6: Slope Analysis
- Imagen exportada: `Modelo3D_Ejercicio5_[TuNombre].png` (Full HD, PNG)

---

## Resumen de Entregables del Módulo 1

### Archivos a Entregar

**Ejercicio 1:**
- 4 Screenshots (Interface, Prospector, Quick Access, Workspace)

**Ejercicio 2:**
- Drawing: `Proyecto_[TuRegion]_Configurado.dwg`
- Template: `Proyecto_Carretera_[TuRegion]_UTM[Zona].dwt`
- 4 Screenshots (Units, Zone, Ambient Settings, Save Template)

**Ejercicio 3:**
- Drawing: `Style_Library_[TuNombre].dwg`
- Drawing: `Prueba_Import_Styles.dwg`
- 4 Screenshots (Surface Style, Label Style, Import dialog, Imported styles)

**Ejercicio 4:**
- Carpeta completa: `C:\Proyectos\Ejercicio4_DataShortcuts\`
  - `_Shortcuts\Surface.xml`
  - `Topografia\Topo_Base.dwg`
  - `Vialidad\Diseño_Eje.dwg`
- 5 Screenshots (Project Explorer, Superficie, XML, Reference, Sync)

**Ejercicio 5:**
- 6 Screenshots (Viewer, Isometric, Section Box x2, Elevation, Slope)
- Imagen: `Modelo3D_Ejercicio5_[TuNombre].png`

### Formato de Entrega

**Estructura recomendada:**
```
Modulo1_Ejercicios_[TuNombre]\
├── Ejercicio1\
│   ├── Screenshot1_Ribbon.png
│   ├── Screenshot2_Prospector.png
│   ├── Screenshot3_QuickAccess.png
│   └── Screenshot4_Workspace.png
├── Ejercicio2\
│   ├── Proyecto_[TuRegion]_Configurado.dwg
│   ├── Proyecto_Carretera_[TuRegion]_UTM[Zona].dwt
│   └── Screenshots\
├── Ejercicio3\
│   ├── Style_Library_[TuNombre].dwg
│   ├── Prueba_Import_Styles.dwg
│   └── Screenshots\
├── Ejercicio4\
│   ├── Ejercicio4_DataShortcuts\ (carpeta completa)
│   └── Screenshots\
└── Ejercicio5\
    ├── Modelo3D_Ejercicio5_[TuNombre].png
    └── Screenshots\
```

**Compresión:**
- ZIP file: `Modulo1_Ejercicios_[TuNombre].zip`
- Tamaño aproximado: 10-50 MB

---

## Criterios de Evaluación

**Ejercicio 1 (10 puntos):**
- Workspace correctamente configurado (5 pts)
- Quick Access Toolbar con comandos personalizados (3 pts)
- Screenshots claros y completos (2 pts)

**Ejercicio 2 (20 puntos):**
- Drawing Settings correctos (Units Metric, Zone UTM) (8 pts)
- Ambient Settings con precisión adecuada (6 pts)
- Template creado con descripción profesional (6 pts)

**Ejercicio 3 (25 puntos):**
- Surface Style con colores café corporativos (8 pts)
- Label Style con formato correcto (P3, unidad "m") (7 pts)
- Style Library funcional y styles importados exitosamente (10 pts)

**Ejercicio 4 (30 puntos):**
- Estructura de Data Shortcuts correcta (Working Folder, XML) (10 pts)
- Superficie publicada como shortcut (5 pts)
- Referencia creada y funcional (read-only verificado) (8 pts)
- Sincronización exitosa (7 pts)

**Ejercicio 5 (15 puntos):**
- 3D Model Viewer activado y configurado (3 pts)
- Section Box aplicado correctamente (4 pts)
- Elevation/Slope Analysis configurado (5 pts)
- Imagen exportada en alta resolución (3 pts)

**Total:** 100 puntos

**Aprobación:** 70 puntos mínimo

---

## Soporte y Recursos

**Documentación:**
- Autodesk Civil 3D 2026 Help (F1 dentro de Civil 3D)
- Tutoriales oficiales: https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-Tutorials/

**Instructor:**
- Consultas via LMS dashboard
- Sesiones de Q&A programadas

**Comunidad:**
- Foros del curso en plataforma LMS
- Autodesk Community Forums

---

**¡Éxito en los ejercicios!**

Estos ejercicios son fundamentales para dominar la configuración de Civil 3D 2026. Tómate el tiempo necesario y consulta las lecciones si tienes dudas.
