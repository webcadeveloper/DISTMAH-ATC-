# Ejercicios Prácticos - Módulo 6: Documentación y Plan Production

## Descripción General

Este módulo contiene **3 ejercicios prácticos progresivos** que integran las competencias de documentación técnica y generación de planos de construcción con Civil 3D 2026.

Cada ejercicio está diseñado para aplicar las herramientas aprendidas en las lecciones del módulo en proyectos realistas de infraestructura civil.

**Duración estimada total:** 6-8 horas

---

## Ejercicio 1: Secciones Transversales y Cálculo de Volúmenes de Carretera

### Objetivos

- Crear sample lines a lo largo de un alineamiento de carretera
- Generar section views en layout organizado
- Configurar estilos de section views con hatching
- Calcular volúmenes de movimiento de tierras (corte/relleno)
- Generar Total Volume Table

### Duración Estimada

2 horas

### Archivos Necesarios

- `Highway-Project.dwg` - Proyecto de autopista con superficie EG y corridor completo
- Ubicación: Carpeta de ejercicios del módulo 6

### Contexto del Proyecto

Eres proyectista en una consultora de ingeniería civil. El equipo ha diseñado una autopista de 2.5km con un corridor completo (2 carriles por sentido + hombros). Tu responsabilidad es documentar las secciones transversales y calcular los volúmenes de movimiento de tierras para el presupuesto del proyecto.

### Datos del Proyecto

- **Alignment:** "Highway Main CL"
- **Longitud:** 2,500m (estación 0+000 a 2+500)
- **Superficies disponibles:**
  - "EG" (Existing Ground - terreno natural)
  - "Corridor_Top" (superficie superior del corridor - pavimento acabado)
  - "Corridor_Datum" (superficie de subrasante)

### Instrucciones Paso a Paso

#### Parte 1: Crear Sample Line Group

1. **Abrir archivo:** `Highway-Project.dwg`

2. **Inspeccionar el modelo:**
   - Verificar que el alignment "Highway Main CL" existe
   - Confirmar superficies "EG" y "Corridor_Top" en Toolspace > Prospector

3. **Crear Sample Line Group:**
   - **Ribbon:** `Home tab > Profile & Section Views panel > Sample Lines`
   - Click en el alignment "Highway Main CL"
   - **Create Sample Line Group dialog:**
     - Name: "Final Design Sections - Highway"
     - Sample line style: "Road Section - Major"
     - Sample line label style: "Station on Section Line"
   - Click **OK**

#### Parte 2: Generar Sample Lines Automáticamente

4. **Método: By Range of Stations**
   - En Sample Lines toolbar, click **By range of stations**
   - **From Sample Line Tools dialog:**
     - **Station range:**
       - Start station: 0+000
       - End station: 2+500
     - **Left offset:** 50m (captura área amplia)
     - **Right offset:** 50m
     - **Sampling increments:**
       - Along tangents: 25m
       - Along curves: 10m (más denso en curvas)
       - Along spirals: 5m
       - At horizontal geometry points: Activado
     - **Snap to increments:** Activado
   - Click **OK**

   **Resultado esperado:** Aproximadamente 120-150 sample lines dependiendo de la geometría.

5. **Verificar sample lines:**
   - Deben aparecer líneas perpendiculares al alignment en color por estilo
   - Labels muestran estación en cada sample line

#### Parte 3: Configurar Superficies a Muestrear

6. **Sample Line Group Properties:**
   - **Toolspace > Prospector > Alignments > Centerline Alignments > Highway Main CL > Sample Line Groups**
   - Click derecho en "Final Design Sections - Highway" > **Properties**

7. **Pestaña Sections:**
   - Click **Add** (icono +)
   - Seleccionar superficie: "EG"
   - **Sample:** Activado
   - **Update mode:** Automatic
   - Repetir para "Corridor_Top"
   - Debería verse:
     ```
     Surface Name      Sample    Update Mode
     EG                ✓         Automatic
     Corridor_Top      ✓         Automatic
     ```
   - Click **OK**

#### Parte 4: Crear Section Views en Modo Production

8. **Generar Section Views:**
   - **Ribbon:** `Home tab > Profile & Section Views panel > Section Views > Create Multiple Views`
   - Seleccionar Sample Line Group: "Final Design Sections - Highway"

9. **Create Multiple Section Views dialog:**

   **General tab:**
   - **Section view style:** "Road Section"
   - **Select stations to create section views:**
     - **Station range:** All (todas las sample lines)

   **Offset Range tab:**
   - **Automatic offset range:** Activado
   - **Add offset:** 5m (buffer a cada lado)

   **Elevation Range tab:**
   - **Automatic elevation range:** Activado
   - **Split plot height:** Activado (evita secciones muy altas)

   **Section Placement tab:**
   - **Production:** Seleccionado
   - **Template drop-down:** "5 Sections per Sheet (2 rows x 3 columns)"
   - **Alignment:** Along alignment
   - **Row spacing:** 100mm
   - **Column spacing:** 80mm

10. **Colocar Section Views:**
    - Click en área vacía del drawing para colocar el primer grid
    - Civil 3D genera múltiples grids automáticamente
    - Presiona **Enter** cuando termine de colocar

    **Resultado:** Múltiples grids de secciones transversales organizadas (aproximadamente 30 sheets si tienes 150 secciones).

#### Parte 5: Personalizar Estilo de Section Views

11. **Crear estilo personalizado con hatching:**
    - **Toolspace > Settings tab > Section View > Section View Styles**
    - Click derecho en "Road Section" > **Copy**
    - Rename: "Highway Section - Cut Fill Hatched"

12. **Editar estilo:**

    **Display tab:**
    - Localizar componente: **Cut Area**
      - **Visible:** Activado
      - **Hatch:** ANSI31
      - **Color:** Red
      - **Angle:** 45
      - **Hatch transparency:** 30%

    - Localizar componente: **Fill Area**
      - **Visible:** Activado
      - **Hatch:** EARTH
      - **Color:** Green
      - **Hatch transparency:** 30%

    - Componente: **Grid at datum**
      - **Color:** Gray (8)
      - **Linetype:** Hidden

    **Graph tab:**
    - **Vertical scale:** 5 (exageración 5:1 para resaltar topografía)

    - Click **OK**

13. **Aplicar nuevo estilo a section views:**
    - Seleccionar TODAS las section views (Ctrl+A, filtrar por Section View)
    - **Properties palette (Ctrl+1):**
      - **Object style:** "Highway Section - Cut Fill Hatched"
    - Las secciones se actualizan con hatching de corte (red) y relleno (green)

#### Parte 6: Calcular Volúmenes de Movimiento de Tierras

14. **Compute Materials:**
    - **Ribbon:** `Analyze tab > Volumes and Materials panel > Compute Materials`
    - Seleccionar Sample Line Group: "Final Design Sections - Highway"

15. **Compute Materials dialog:**
    - **Quantity Takeoff Criteria:** Seleccionar "Earthworks" (o crear nuevo)

    **Si "Earthworks" no existe, crear:**
    - Click **Settings** (botón con engrane)
    - **Quantity Takeoff Criteria:**
      - **Name:** "Highway Earthworks"
      - **Material List:**

        **Material 1: CUT**
        - Name: "Cut"
        - Quantity type: Cut
        - Condition: EG surface above Corridor_Top
        - Surfaces: EG (upper), Corridor_Top (lower)
        - Cut Factor: 1.25 (swell - material expandido al excavarse)

        **Material 2: FILL**
        - Name: "Fill"
        - Quantity type: Fill
        - Condition: EG surface below Corridor_Top
        - Surfaces: Corridor_Top (upper), EG (lower)
        - Fill Factor: 0.90 (shrinkage - material compactado al rellenarse)

    - Click **OK** en ambos diálogos

16. **Verificar cálculo:**
    - Civil 3D procesa todas las secciones
    - Message: "Materials computed successfully"

#### Parte 7: Analizar Resultados de Volúmenes

17. **Ver volúmenes totales:**
    - **Toolspace > Prospector > Alignments > Highway Main CL > Sample Line Groups > Final Design Sections - Highway**
    - Click derecho > **Properties**
    - **Pestaña Sections:**
    - Debajo de cada superficie, ver volúmenes calculados

    **Ejemplo de resultados esperados (aproximados):**
    ```
    Total Cut Volume: 45,250 m³
    Total Fill Volume: 38,900 m³
    Net Volume: -6,350 m³ (sobra material - más corte que relleno)
    ```

18. **Interpretación:**
    - **Net Volume negativo:** Proyecto con exceso de material (más corte)
    - **Acción:** Planificar depósito de material sobrante o venta
    - **Net Volume positivo:** Proyecto requiere préstamo de material (más relleno)

#### Parte 8: Generar Total Volume Table

19. **Crear tabla de volúmenes:**
    - **Ribbon:** `Annotate tab > Labels & Tables panel > Add Tables > Add Total Volume Table`
    - Seleccionar Sample Line Group: "Final Design Sections - Highway"
    - **Table Style:** "Total Volume Table"
    - Click en drawing (espacio vacío) para colocar tabla

    **Tabla generada muestra:**
    ```
    EARTHWORK VOLUMES - HIGHWAY MAIN CL

    Material    Cut Volume (m³)    Fill Volume (m³)    Net Volume (m³)
    Earthwork   45,250.00          38,900.00           -6,350.00

    Note: Cut factor = 1.25 (swell), Fill factor = 0.90 (shrinkage)
    ```

20. **Opcional: Tabla de volúmenes por estación:**
    - **Add Tables > Add Material Volume Table**
    - Muestra volúmenes en cada estación con acumulados
    - Útil para diagrama de masas

#### Parte 9: Verificación y Entrega

21. **Checklist de verificación:**
    - [ ] Sample lines creadas a lo largo de todo el alignment (0+000 a 2+500)
    - [ ] Section views organizadas en grids (5 por sheet)
    - [ ] Hatching de cut (red) y fill (green) visible
    - [ ] Volúmenes calculados con Compute Materials
    - [ ] Total Volume Table colocada y legible
    - [ ] Exageración vertical 5:1 aplicada

22. **Guardar archivo:**
    - File > Save As: `Highway-Project-Sections-[TuNombre].dwg`

### Entregables

1. **Archivo DWG:** Con sample lines, section views, y volume table
2. **Screenshot:** De section views mostrando hatching de cut/fill
3. **Reporte de volúmenes:** Copiar tabla de volúmenes a documento Word/Excel:
   - Total Cut (m³)
   - Total Fill (m³)
   - Net Volume (m³)
   - Interpretación (¿sobra o falta material?)

### Evaluación

**Criterios (100 puntos):**

- **Sample Lines correctamente configuradas (20 pts):**
  - Intervalos apropiados (25m tangentes, 10m curvas)
  - Offsets adecuados (50m cada lado)

- **Section Views organizadas profesionalmente (25 pts):**
  - Modo Production (grid layout)
  - 5 secciones por sheet
  - Numeración consecutiva

- **Estilos aplicados correctamente (20 pts):**
  - Hatching de cut (red) y fill (green)
  - Exageración vertical 5:1
  - Labels de estación visibles

- **Cálculo de volúmenes correcto (25 pts):**
  - Compute Materials ejecutado
  - Factores de cut/fill configurados
  - Volúmenes coherentes con el diseño

- **Total Volume Table (10 pts):**
  - Tabla colocada y legible
  - Datos correctos

---

## Ejercicio 2: Section Views Avanzadas con Bands y Pipe Network

### Objetivos

- Configurar sample lines con offsets variables
- Agregar Section View Bands (elevation, grade)
- Proyectar pipe network en section views
- Aplicar labels a pipes en secciones
- Configurar datum consistente y vertical exaggeration

### Duración Estimada

2 horas

### Archivos Necesarios

- `Urban-Street-Complete.dwg` - Calle urbana con storm drainage network
- Ubicación: Carpeta de ejercicios del módulo 6

### Contexto del Proyecto

Trabajas en el departamento de obras públicas municipales. Has diseñado una calle urbana con sistema de drenaje pluvial (storm network). Necesitas documentar las secciones transversales mostrando la posición de las tuberías de drenaje para verificar clearances y detectar posibles interferencias.

### Datos del Proyecto

- **Alignment:** "Main Street CL"
- **Longitud:** 800m
- **Surfaces:**
  - "EG" (terreno natural)
  - "Street_FG" (finished grade - pavimento terminado)
- **Pipe Network:** "Storm Drainage Network"
  - 15 pozos de visita (manholes)
  - Tuberías de concreto Ø600mm y Ø450mm

### Instrucciones Paso a Paso

#### Parte 1: Setup Inicial

1. **Abrir archivo:** `Urban-Street-Complete.dwg`

2. **Inspeccionar modelo:**
   - **Alignment:** "Main Street CL"
   - **Surfaces:** EG, Street_FG
   - **Pipe Network:** En Prospector > Pipe Networks > Storm Drainage Network

3. **Crear Sample Line Group:**
   - Home tab > Sample Lines
   - Alignment: "Main Street CL"
   - Name: "Street Sections with Utilities"
   - Style: "Road Section - Major"

#### Parte 2: Sample Lines con Configuración Especial

4. **Generar sample lines en estructuras críticas:**

   **Método: At a Station (manual en pozos de visita)**

   - Sample Lines toolbar > **At a station**
   - Consultar ubicación de manholes (Prospector > Pipe Networks > Structures)
   - Crear sample line en cada manhole:
     - Station del manhole (ejemplo: 0+045, 0+120, etc.)
     - Left offset: 30m
     - Right offset: 30m

   **Método: By Range (automático en tramos)**

   - Sample Lines toolbar > **By range of stations**
   - Entre manholes: cada 20m
   - Left/Right offset: 30m

   **Resultado:** Sample lines densas en estructuras, espaciadas en tramos rectos.

5. **Ajustar offset en sección especial:**

   **Escenario:** En estación 0+450 hay un edificio cercano, necesitas capturar más ancho del lado derecho.

   - Seleccionar sample line en 0+450
   - **Edit Sample Line** (grips)
   - Arrastrar grip derecho para extender a 45m (en lugar de 30m)
   - Left offset permanece en 30m

#### Parte 3: Configurar Superficies y Pipe Network

6. **Sample Line Group Properties:**
   - Prospector > Sample Line Groups > "Street Sections with Utilities" > Properties

7. **Pestaña Section Sources:**

   **Agregar superficies:**
   - Click **Add** > Surface
   - Superficie: "EG" - Sample: ✓, Update: Automatic
   - Repetir para "Street_FG"

   **Agregar Pipe Network:**
   - Click **Add** > Pipe Network
   - Network: "Storm Drainage Network"
   - **Project to section view:** Activado
   - **Display style:** "Pipe Network Section - Standard"
   - **Update mode:** Automatic

   - Click **OK**

#### Parte 4: Generar Section Views con Bands

8. **Create Multiple Section Views:**
   - Home tab > Section Views > Create Multiple Views
   - Sample Line Group: "Street Sections with Utilities"

9. **Configuración detallada:**

   **General tab:**
   - **Section view style:** "Road Section"
   - **Station range:** All

   **Offset Range tab:**
   - **User specified:** Activado
   - **Left offset:** -35m
   - **Right offset:** 35m (captura todo incluyendo sección ancha)

   **Elevation Range tab:**
   - **User specified:** Activado
   - **Datum elevation:** 95.00m (fijo para consistencia)
   - **Maximum elevation:** 115.00m
   - **Minimum elevation:** 93.00m (debajo del datum para ver pipes profundos)

   **Section Display Options tab:**
   - **Band set:** Crear/seleccionar "Street Section Bands"

   **Section Placement tab:**
   - **Production mode**
   - Template: "4 Sections per Sheet (2×2)"
   - Row/Column spacing: 120mm × 100mm

10. **Click Create Section Views**
    - Colocar grids en drawing

#### Parte 5: Configurar Section View Bands

11. **Crear Band Set personalizado:**

    **Si "Street Section Bands" no existe:**

    - Settings tab > Section View > Band Sets
    - New > "Street Section Bands"

    **Top Bands (arriba de la sección):**

    **Band 1: Elevation Data (EG Surface)**
    - Band type: Offset Elevation
    - Surface: EG
    - Band style: "Elevation Data - Standard"
    - Band height: 15mm
    - Location: Top

    **Band 2: Grade Data (Street FG)**
    - Band type: Grade
    - Surface: Street_FG
    - Band style: "Grade Data - Enhanced"
    - Band height: 12mm
    - Location: Top (debajo de Band 1)

    **Bottom Bands:**

    **Band 3: Offset Elevation (Design Surface)**
    - Surface: Street_FG
    - Band height: 15mm
    - Location: Bottom

12. **Aplicar Band Set a section views:**
    - Seleccionar todas las section views
    - Click derecho > **Edit Band Set**
    - Seleccionar "Street Section Bands"
    - **OK**

    **Resultado:** Section views ahora tienen franjas arriba/abajo mostrando elevaciones y pendientes.

#### Parte 6: Personalizar Visualización de Pipes

13. **Verificar pipes en section views:**
    - Los pipes deben aparecer como círculos donde intersectan las sample lines
    - Manholes aparecen como rectángulos o símbolos

14. **Agregar labels a pipes:**

    **Ribbon:** `Annotate tab > Labels & Tables panel > Add Labels`

    - **Feature:** Pipe Network
    - **Label type:** Pipe (in section view)
    - **Pipe label style:** "Diameter and Invert Elevation"
    - Click **Add**
    - Seleccionar cada pipe visible en section views

    **Formato del label:**
    ```
    Ø600mm CONC
    INV: 92.35m
    ```

15. **Crear estilo de label personalizado:**

    **Settings > Pipe Network > Label Styles > Pipe (section view)**

    - Duplicar estilo existente: "Enhanced Pipe Section Label"
    - **Layout tab > Text Contents:**
      ```
      Ø<[Pipe Diameter]> <[Pipe Material]>
      INV: <[Pipe Invert Elevation(P2|RN)]>
      CLR: <[Clearance to Street_FG(P2|RN)]>m
      ```

    **Donde:**
    - Diameter: Diámetro de la tubería
    - Material: Material (CONC, PVC)
    - Invert Elevation: Elevación invert (plantilla)
    - Clearance: Distancia vertical a superficie de calle (expresión calculada)

16. **Aplicar labels mejorados:**
    - Repetir Add Labels con nuevo estilo
    - Ahora muestra clearance (importante para verificar cobertura mínima)

#### Parte 7: Configurar Vertical Exaggeration Consistente

17. **Editar Section View Style:**

    - Settings > Section View > Section View Styles > "Road Section"
    - **Graph tab:**
      - **Vertical scale:** 5 (exageración 5:1)

    - **Display tab:**
      - Agregar nota de exageración
      - (Opcional: Crear text annotation "VERTICAL EXAGGERATION 5:1" en title)

18. **Agregar hatch patterns:**
    - **Display tab > Cut Area:**
      - Hatch: ANSI31, Red, 45°, transparency 30%
    - **Display tab > Fill Area:**
      - Hatch: EARTH, Green, transparency 30%

#### Parte 8: Verificación de Clearances

19. **Analizar clearances de pipes:**

    - Revisar labels de clearance en cada pipe
    - **Código de construcción típico:** Mínimo 1.00m de cobertura sobre tubería

    **Ejemplo de análisis:**
    - Pipe en estación 0+120: CLR: 1.45m ✓ (OK)
    - Pipe en estación 0+450: CLR: 0.85m ✗ (Insuficiente)

20. **Acciones correctivas (si hay pipes con clearance insuficiente):**
    - Documentar en reporte
    - Sugerir rediseño: profundizar pipe o elevar rasante

#### Parte 9: Actualización Dinámica (Demostración)

21. **Modificar diseño para demostrar update dinámico:**

    - Modificar levemente la rasante del alignment (profile)
    - Ejemplo: Elevar PVI en estación 0+400 por 0.50m
    - Regenerar corridor (Corridor > Rebuild)

22. **Observar actualizaciones:**
    - Section views se actualizan automáticamente
    - Clearances de pipes cambian
    - Hatching de cut/fill se ajusta
    - Bands muestran nuevas elevaciones

23. **Rebuild manual si es necesario:**
    - Prospector > Section Views > Click derecho > **Rebuild All**

### Entregables

1. **Archivo DWG:** `Urban-Street-Sections-[TuNombre].dwg`
2. **Section views** con:
   - Bands de elevación y pendiente
   - Pipes proyectados con labels
   - Hatching de cut/fill
   - Datum consistente (95.00m)
3. **Reporte de clearances:**
   - Tabla Excel listando cada pipe y su clearance
   - Identificar pipes con clearance < 1.00m

### Evaluación

**Criterios (100 puntos):**

- **Sample Lines con configuración apropiada (15 pts)**
- **Pipe Network proyectado correctamente (20 pts)**
- **Section View Bands configuradas (20 pts)**
- **Labels de pipes con información completa (15 pts)**
- **Datum y vertical exaggeration consistentes (15 pts)**
- **Hatch patterns aplicados (10 pts)**
- **Reporte de clearances (15 pts)**

---

## Ejercicio 3: Plan Production Tools - Set Completo de Planos de Construcción

### Objetivos

- Usar Plan Production Tools para generar sheets masivamente
- Configurar View Frames a lo largo de alignment
- Crear Sheet Template con title block
- Generar múltiples layouts automáticamente
- Configurar Page Setup Manager
- Batch plot a PDF (set completo de planos)
- Exportar a AutoCAD DWG

### Duración Estimada

3 horas

### Archivos Necesarios

- `Subdivision-Complete.dwg` - Proyecto completo de subdivisión con calle y parcelas
- `Company-Title-Block.dwg` - Title block corporativo
- Ubicación: Carpeta de ejercicios del módulo 6

### Contexto del Proyecto

Tu consultora ha completado el diseño de una subdivisión residencial de 1.2km con:
- Calle principal con drainage
- 45 lotes residenciales
- Grading de cada lote
- Utilities (agua, alcantarillado)

El cliente requiere un set completo de planos de construcción para licitar la obra. Debes generar 30+ sheets organizados profesionalmente y entregarlos en PDF.

### Datos del Proyecto

- **Alignment:** "Subdivision Main Street"
- **Longitud:** 1,200m
- **Surfaces:** EG, Street_FG, Lots_FG
- **Parcels:** 45 lotes
- **Pipe Networks:** Storm, Sanitary, Water

### Instrucciones Paso a Paso

#### Parte 1: Preparar Sheet Template

1. **Crear template personalizado:**

   - Abrir archivo nuevo: `Company-Title-Block.dwg`
   - Verificar que contiene:
     - Title block (block con attributes)
     - Layout predefinido "ANSI A1 Landscape"
     - Viewport rectangular nombrado "Data"

2. **Configurar attributes del title block:**

   **Attributes requeridos:**
   ```
   SHEET_NUMBER
   SHEET_TITLE
   PROJECT_NAME
   CLIENT
   DRAWN_BY
   CHECKED_BY
   DATE
   SCALE
   ```

3. **Verificar viewport "Data":**
   - Seleccionar viewport rectangular en layout
   - Properties palette: **Name** debe ser "Data"
   - Si no tiene nombre: Asignar "Data"

4. **Save As Template:**
   - File > Save As
   - **File type:** AutoCAD Drawing Template (*.dwt)
   - **Name:** `Company-Sheet-Template-A1.dwt`
   - **Location:** Carpeta de templates del proyecto

#### Parte 2: Abrir Proyecto y Crear View Frames

5. **Abrir proyecto completo:**
   - `Subdivision-Complete.dwg`

6. **Verificar contenido:**
   - Alignment: "Subdivision Main Street"
   - Surfaces, parcels, pipe networks visibles

7. **Crear View Frame Group:**

   **Ribbon:** `Output tab > Plan Production panel > Create View Frames`

   - Seleccionar alignment: "Subdivision Main Street"

   **Create View Frame Group dialog:**

   **Name and Location:**
   - **View frame group name:** "Subdivision Plan Sheets"
   - **Alignment:** Subdivision Main Street

   **View Frame Placement:**
   - **Placement:**
     - **Automatic:** Activado
     - **Sheets along alignment:** Activado

   - **View Frame Properties:**
     - **Station range:** 0+000 to 1+200 (full alignment)
     - **Sheet size:** ARCH D (864×559mm) o A1 (841×594mm) según estándar
     - **Scale:** 1:500 (típico para plan sheets de subdivisión)
     - **Overlap:** 10m (traslape entre sheets para continuidad)
     - **Sheet orientation:** Landscape

   - Click **Next**

   **Sheet Set Properties:**
   - **Create sheet set:** Activado
   - **Sheet set name:** "Subdivision Construction Set"
   - **Location:** Carpeta del proyecto

   - Click **Create View Frames**

8. **Resultado:**
   - Civil 3D dibuja rectángulos (view frames) a lo largo del alignment
   - Cada rectángulo representa el área que cubrirá un sheet

   **Ejemplo:** Con sheets de 300m cada uno (a escala 1:500 en papel A1), deberían generarse aproximadamente 4-5 view frames para 1200m.

#### Parte 3: Configurar View Frame Properties

9. **Editar View Frame Group:**

   **Prospector > Alignments > Subdivision Main Street > View Frame Groups > Subdivision Plan Sheets**

   - Click derecho > **Properties**

10. **View Frame Group Properties:**

    **Sheets tab:**

    - **Layout creation:** "Create new layouts using template"
    - **Template:** Browse > Seleccionar `Company-Sheet-Template-A1.dwt`
    - **Layout name:** "Sheet Template" (nombre del layout en el .dwt)
    - **Viewport:** "Data" (nombre del viewport en el template)

    **Sheet Set:**
    - **Create sheet set data file:** Activado
    - **File location:** Carpeta del proyecto
    - **Filename:** "Subdivision-Construction-Set.dst"

    **Match Lines (líneas de empalme):**
    - **Create match lines:** Activado
    - **Add match line to left/right:** Activado
    - **Match line style:** "Match Line - Standard"

    **Profile Views (si aplica):**
    - Si tienes profile views creados, puedes agregarlos automáticamente
    - **Add profile views:** Activado
    - Seleccionar profile view group correspondiente

11. **Click OK**

#### Parte 4: Generar Sheets Automáticamente

12. **Create Sheets:**

    **Ribbon:** `Output tab > Plan Production panel > Create Sheets`

    - Seleccionar View Frame Group: "Subdivision Plan Sheets"

    **Create Sheets dialog:**

    **Sheet Set:**
    - **Sheet set name:** "Subdivision Construction Set"
    - **Location:** (ya configurado)

    **Layouts:**
    - **All layouts:** Activado (genera sheet para cada view frame)
    - **Number of layouts:** 5 (o el número de view frames creados)

    **Sheet File Format:**
    - **All layouts in one file:** Activado
      - **File name:** `Subdivision-Sheets.dwg`
    - Alternativa: **Multiple files** (un DWG por sheet)

    **View Settings:**
    - **View style:** Plan view
    - **Layer snapshot:** (opcional) seleccionar layer state para los sheets

13. **Click OK**

    **Proceso:**
    - Civil 3D crea automáticamente:
      - 5 layouts (Model + Sheet-01, Sheet-02, Sheet-03, Sheet-04, Sheet-05)
      - Viewports con escala 1:500
      - Title blocks populados con datos:
        - SHEET_NUMBER: 1, 2, 3, 4, 5
        - SHEET_TITLE: "PLAN - STA 0+000 TO 0+300", etc.
        - PROJECT_NAME: "Subdivision Main Street"
        - SCALE: 1:500

    **Tiempo estimado:** 1-2 minutos para 5 sheets (vs horas manualmente).

#### Parte 5: Revisar y Personalizar Sheets

14. **Inspeccionar cada layout:**

    - Click en tabs: Sheet-01, Sheet-02, etc.
    - Verificar:
      - Viewport muestra área correcta del alignment
      - Escala 1:500 aplicada (verificar en Properties del viewport)
      - Title block completo
      - Match lines visibles (flechas indicando continuidad al siguiente sheet)

15. **Editar title block attributes:**

    - Double-click en title block de Sheet-01
    - **Enhanced Attribute Editor:**
      - PROJECT_NAME: "Residential Subdivision - Phase 1"
      - CLIENT: "ABC Development Corp"
      - DRAWN_BY: [Tu nombre], EIT
      - CHECKED_BY: J. Smith, PE
      - DATE: 2025-11-23
    - **OK**
    - Repetir para otros sheets (puede usar Data Extraction para batch editing)

16. **Agregar elementos adicionales:**

    **En cada sheet layout, agregar:**
    - **North arrow** (insert block "North-Arrow.dwg")
    - **Vicinity map** (viewport pequeño mostrando ubicación general)
    - **Legend** (simbología de utilities, parcels, etc.)
    - **General notes** (notas constructivas estándar)

#### Parte 6: Generar Section Sheets

17. **Complementar con Cross Section Sheets:**

    **Proceso (ya conocido de ejercicios anteriores):**

    - Crear Sample Line Group
    - Generate Section Views (Production mode)
    - Layout: "5 Sections per Sheet (2×3)"

    **Resultado:** Sheets adicionales (Sheet-C-4.1, C-4.2, etc.) con secciones transversales.

18. **Combinar en Sheet Set:**

    **Sheet Set Manager:**
    - Organizar sheets en subsets:
      ```
      Subdivision Construction Set
      ├── Cover Sheet (C-0.0)
      ├── Plan Sheets (C-1.x)
      │   ├── C-1.1 - Plan Sta 0+000 to 0+300
      │   ├── C-1.2 - Plan Sta 0+300 to 0+600
      │   ├── ...
      ├── Cross Section Sheets (C-4.x)
      │   ├── C-4.1 - Sections 1-5
      │   ├── C-4.2 - Sections 6-10
      │   ├── ...
      ├── Detail Sheets (C-5.x)
      ```

#### Parte 7: Configurar Page Setup para Impresión

19. **Page Setup Manager:**

    - Activar cualquier layout (e.g., Sheet-01)
    - Layout tab > Page Setup Manager

20. **Modificar Page Setup:**

    - **New** > Name: "A1 PDF Landscape"

    **Configuración:**

    **Printer/Plotter:**
    - Name: DWG To PDF.pc3
    - Paper size: ARCH D (864×559mm) o ISO A1 (841×594mm)

    **Plot Area:**
    - What to plot: Layout

    **Plot Scale:**
    - Scale: 1:1 (layout ya tiene escala en viewport)
    - **Fit to paper:** No

    **Plot Style Table:**
    - monochrome.ctb (convierte todo a blanco/negro)
    - Alternativa: Company-Standard.ctb

    **Plot Options:**
    - ✓ Plot with plot styles
    - ✓ Plot paperspace last
    - ✓ Plot object lineweights

    **Drawing Orientation:**
    - Landscape

21. **Set Current y Close**

22. **Aplicar Page Setup a todos los layouts:**

    - Método 1 (manual): Repetir para cada layout
    - Método 2 (batch): Usar CAD script o Publish

#### Parte 8: Batch Plotting a PDF

23. **Publish to PDF:**

    **Application Menu > Publish**

    **Publish dialog:**

    **Sheet List:**
    - Click **Add Sheets**
    - Shift+Click para seleccionar todos los layouts (Sheet-01 a Sheet-05)
    - **Add**

    **Publish To:**
    - **PDF** (seleccionar en dropdown)

    **Publish Options:**
    - **Multi-sheet file:** Activado
      - **Filename:** `Subdivision-Construction-Set.pdf`
    - **Number of copies:** 1
    - **Include:** Plot stamp (opcional - fecha/hora de impresión)

    **PDF Preset:**
    - **Standard quality:** High Quality Print
    - **Layers:** Include AutoCAD layers in PDF

24. **Publish Settings (botón Settings):**

    - **Location:** Carpeta de salida (e.g., "Deliverables")
    - **Type:** PDF
    - **Naming:** Automatic naming

    **General DWF/PDF Options:**
    - **Vector quality:** 600 DPI
    - **Raster quality:** 400 DPI
    - ✓ **Include layer information**
    - ✓ **Create bookmarks from layout names**

25. **Click Publish**

    **Proceso:**
    - Civil 3D genera PDF multi-hoja
    - Progress bar muestra avance
    - Al completar: "Publish job complete"

26. **Verificar PDF generado:**

    - Navegar a carpeta de salida
    - Abrir `Subdivision-Construction-Set.pdf`
    - Verificar:
      - 5+ páginas (plan sheets + section sheets si se incluyeron)
      - Bookmarks navegables (sidebar izquierdo)
      - Texto legible y seleccionable
      - Líneas con grosores apropiados
      - Title blocks completos

#### Parte 9: Exportar a AutoCAD para Clientes

27. **Export to AutoCAD:**

    **Application Menu > Export > Export to AutoCAD**

    **Export to AutoCAD dialog:**

    - **Select objects:** All (todo el drawing)
    - **Export to format:** AutoCAD 2018 DWG
    - **Destination folder:** "Deliverables\AutoCAD-Export"
    - **Options:**
      - ✓ **Explode AEC Objects** (convierte objetos Civil 3D a AutoCAD)
      - ✓ **Bind xrefs**
      - ✓ **Maintain visual fidelity**

28. **Export**

    **Resultado:**
    - DWG compatible con AutoCAD puro (sin Civil 3D)
    - Objetos dinámicos convertidos a geometría estática
    - Clientes pueden visualizar sin Civil 3D

29. **eTransmit Package:**

    **Application Menu > Publish > eTransmit**

    **Create Transmittal:**

    - **Files Tree:** Muestra DWG + dependencias
    - **Transmittal Setup:**
      - **Folder structure:** Preserve
      - ✓ **Include fonts**
      - ✓ **Include plot styles (CTB/STB)**
      - **Path type:** Relative
    - **Notes:** "Subdivision Construction Set - Final for Permit"
    - **ZIP file name:** `Subdivision-Transmittal.zip`

30. **OK**

    **Resultado:** Archivo ZIP con todo lo necesario para abrir el proyecto.

### Entregables

1. **DWG con sheets:** `Subdivision-Sheets.dwg` (contiene todos los layouts)
2. **PDF set completo:** `Subdivision-Construction-Set.pdf` (multi-hoja con bookmarks)
3. **AutoCAD export:** DWG compatible con AutoCAD puro
4. **eTransmit package:** `Subdivision-Transmittal.zip`
5. **Sheet Set file:** `Subdivision-Construction-Set.dst`

### Evaluación

**Criterios (100 puntos):**

- **View Frames correctamente configurados (15 pts)**
- **Sheet Template con title block funcional (15 pts)**
- **Sheets generados automáticamente con Create Sheets (20 pts)**
- **Title blocks populados con datos del proyecto (10 pts)**
- **Page Setup Manager configurado apropiadamente (10 pts)**
- **PDF multi-hoja de alta calidad (15 pts)**
- **Exportación a AutoCAD exitosa (10 pts)**
- **eTransmit package completo (5 pts)**

---

## Resumen de Ejercicios

**Ejercicio 1:** Fundamentos de secciones transversales y cálculo de volúmenes
- Sample lines, section views, hatching, compute materials, volume tables

**Ejercicio 2:** Técnicas avanzadas de section views
- Bands, pipe networks, labels, datum, vertical exaggeration

**Ejercicio 3:** Producción masiva de planos profesionales
- Plan Production Tools, view frames, sheet sets, batch plotting, export

**Competencias desarrolladas:**
✅ Documentación técnica completa de proyectos de infraestructura
✅ Cálculos precisos de volúmenes de movimiento de tierras
✅ Generación automatizada de planos de construcción
✅ Workflows de impresión y exportación profesionales

**¡Has completado el Módulo 6 y el curso Civil 3D 2026 Básico!**

Estos ejercicios constituyen ejemplos de portafolio demostrable a empleadores.
