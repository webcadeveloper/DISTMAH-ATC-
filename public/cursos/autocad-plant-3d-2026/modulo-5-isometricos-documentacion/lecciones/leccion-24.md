# Lección 24: Planos Ortogonales y Vistas

## Información de la Lección

- **Módulo:** 5 - Isométricos y Documentación
- **Lección:** 24 de 30
- **Duración:** 60 minutos
- **Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, usted será capaz de:

✅ Extraer vistas en planta (plan views) desde modelo 3D de Plant 3D
✅ Generar dibujos de sección (sections) y elevaciones ortogonales
✅ Gestionar vistas del modelo con actualización sincronizada
✅ Aplicar anotación y dimensionamiento a vistas ortogonales
✅ Configurar layouts de presentación para plotting profesional
✅ Implementar metodologías de organización de vistas según ISO 128
✅ Crear dibujos de construcción multi-vista coordinados

## Introducción

Los planos ortogonales son la documentación primaria para construcción e instalación en campo. Mientras que los isométricos son ideales para fabricación de spools en taller, los planos ortogonales (plantas, elevaciones, secciones) son esenciales para:

- **Coordinación espacial:** Verificar interferencias entre disciplinas (tubería, estructural, eléctrico, HVAC)
- **Instalación en campo:** Contratistas necesitan vistas en planta para ubicación precisa según grid lines
- **Verificación de elevaciones:** Asegurar clearances verticales sobre equipos, pasillos, accesos
- **Comunicación con cliente:** Presentaciones de diseño en formato familiar para stakeholders no técnicos
- **As-built documentation:** Registro permanente de instalación final para operación y mantenimiento

En proyectos de plantas industriales típicos, la documentación ortogonal incluye:

- **10-50 planos de plantas generales** (General Arrangement Plans) a escala 1:50 o 1:100
- **20-100 planos de elevaciones** por área de proceso
- **50-200 planos de secciones** de áreas complejas con múltiples niveles
- **Cientos de planos de detalle** a escala 1:20 o 1:10 para áreas críticas

Históricamente, estos dibujos se creaban manualmente desde el modelo 3D, proceso que consumía 40-60% del tiempo total de ingeniería de detalle. Un dibujante experimentado podía producir 2-3 vistas ortogonales complejas por día, con alto riesgo de inconsistencia entre vistas.

AutoCAD Plant 3D 2026 revoluciona este proceso con capacidad de extracción automatizada de vistas ortogonales directamente desde el modelo 3D inteligente. Las vistas son "asociativas" - actualizaciones al modelo 3D se reflejan automáticamente en vistas 2D, eliminando trabajo manual de re-dibujo y asegurando consistencia absoluta entre modelo y documentación.

Esta lección cubre el sistema completo de gestión de vistas ortogonales en Plant 3D: desde configuración de planos de corte y definición de regiones de vista, hasta generación de vistas multi-escala, aplicación de visibilidad por layer, y configuración de layouts de presentación profesionales según estándares ISO 128 (principios generales de representación) e ISO 5455 (escalas).

## 1. Fundamentos de Proyección Ortogonal

### 1.1 Sistemas de Proyección según ISO 5456

El estándar ISO 5456-2 define dos sistemas de proyección ortogonal:

**1. Proyección de primer ángulo (First Angle Projection):**
```
Utilizado en: Europa, Asia, Australia
Principio: Objeto entre observador y plano de proyección
Símbolo: Cono truncado con círculo a la derecha

Disposición de vistas:
    ┌─────────────┐
    │   Superior  │  Vista desde arriba
    ├─────────────┤
    │  Izquierda  │  Frontal  │ Derecha  │
    ├─────────────┤
    │   Inferior  │  Vista desde abajo
    └─────────────┘
```

**2. Proyección de tercer ángulo (Third Angle Projection):**
```
Utilizado en: Estados Unidos, Canadá
Principio: Plano de proyección entre observador y objeto
Símbolo: Cono truncado con círculo a la izquierda

Disposición de vistas:
    ┌─────────────┐
    │   Superior  │  Vista desde arriba
    ├─────────────┤
    │  Izquierda  │  Frontal  │ Derecha  │
    ├─────────────┤
    │   Inferior  │  Vista desde abajo
    └─────────────┘
```

**Para proyectos internacionales:** Verificar requisitos contractuales. Proyectos en Latinoamérica típicamente siguen normas ISO (primer ángulo), mientras proyectos con empresas americanas usan tercer ángulo.

### 1.2 Tipos de Vistas Ortogonales para Plantas Industriales

**1. Planos de Planta (Plan Views):**
```
Descripción: Vista desde arriba, mirando hacia abajo (-Z)
Propósito: Mostrar layout horizontal de equipos, tuberías, estructuras
Información mostrada:
  - Grid lines y coordenadas
  - Ubicación de equipos (reactores, tanques, bombas)
  - Routing de tuberías en planta
  - Ubicación de válvulas y conexiones
  - Pasillos, escaleras, plataformas
Escalas típicas:
  - Planta general: 1:100 a 1:200
  - Planta de área: 1:50 a 1:100
  - Detalles: 1:20 a 1:50
```

**2. Elevaciones (Elevation Views):**
```
Descripción: Vista lateral horizontal (Norte, Sur, Este, Oeste)
Propósito: Mostrar alturas y clearances verticales
Información mostrada:
  - Elevaciones de tuberías (dimensiones desde datum)
  - Altura de equipos y nozzles
  - Clearances sobre pasillos (mínimo 2.1m según OSHA)
  - Niveles de piso (Floor Levels FL-0, FL-1, FL-2)
  - Soportes de tubería y racks
Escalas típicas:
  - Elevación general: 1:100
  - Elevación de detalle: 1:50
```

**3. Secciones (Section Views):**
```
Descripción: Vista de corte transversal o longitudinal
Propósito: Mostrar configuración interna en áreas complejas
Información mostrada:
  - Múltiples niveles de tubería en rack vertical
  - Interferencias potenciales entre tuberías
  - Detalles de penetraciones en paredes/pisos
  - Arreglos complejos de válvulas y fittings
Escalas típicas:
  - Sección general: 1:50
  - Sección de detalle: 1:20 a 1:10
```

**4. Vistas de Detalle (Detail Views):**
```
Descripción: Ampliación de área específica compleja
Propósito: Clarificar conexiones, soportes, detalles especiales
Escalas típicas: 1:10 a 1:5 (o escala real 1:1)
```

### 1.3 Convenciones de Representación según ISO 128

**Representación de tubería en vistas ortogonales:**

| Elemento | Planta (Plan) | Elevación | Sección | Representación |
|----------|---------------|-----------|---------|----------------|
| Tubería horizontal | Línea simple | Rectángulo | Círculo | Línea continua gruesa |
| Tubería vertical | Círculo con cruz | Línea simple | Rectángulo | Línea continua gruesa |
| Tubería oculta | Línea punteada | Línea punteada | - | Línea discontinua fina |
| Codo 90° horizontal | Esquina | Offset | - | Línea continua |
| Codo 90° vertical | Círculo | Esquina | - | Línea continua |
| Válvula horizontal | Símbolo de válvula | Rectángulo | - | Según tipo de válvula |
| Válvula vertical | Círculo + símbolo | Símbolo de válvula | - | Según tipo de válvula |
| Brida | Doble línea | Doble línea | - | Dos líneas perpendiculares |
| Reducción | Líneas convergentes | Líneas convergentes | - | Cambio de grosor |

**Representación de equipos:**

| Equipo | Planta | Elevación | Representación |
|--------|--------|-----------|----------------|
| Tanque vertical | Círculo | Rectángulo | Línea continua gruesa |
| Tanque horizontal | Rectángulo | Rectángulo | Línea continua gruesa |
| Bomba centrífuga | Símbolo estándar | Vista lateral | Según ISO 10628 |
| Compresor | Símbolo estándar | Vista lateral | Según ISO 10628 |
| Reactor | Círculo/rectángulo | Cilindro | Línea continua gruesa |
| Intercambiador | Rectángulo | Vista lateral tubos | Según TEMA |

### 1.4 Convenciones de Anotación

**Información requerida en vistas ortogonales:**

**Vistas en planta:**
- Grid lines (A, B, C... y 1, 2, 3...)
- Coordenadas Northing/Easting
- Números de línea de tubería
- Números de equipo (P-101, T-201, R-301)
- Elevaciones de tubería (EL 3500, EL 4200)
- Direcciones de flujo (flechas)
- Norte de planta (orientación)

**Elevaciones:**
- Floor Levels (FL-0 = 0.00m, FL-1 = 4.50m, FL-2 = 9.00m)
- Elevaciones de tubería
- Dimensiones verticales (clearances)
- Números de línea de tubería
- Referencias a secciones (SEC A-A, SEC B-B)

**Secciones:**
- Identificación de sección (SECTION A-A)
- Dirección de vista (flechas en planta)
- Elevaciones
- Dimensiones críticas
- Referencias a detalles

## 2. Extracción de Vistas en Planta desde Modelo 3D

### 2.1 Configuración de Vistas con Orthographic View Manager

Plant 3D 2026 incluye herramienta integrada para gestión de vistas ortogonales.

**Acceso a Orthographic View Manager:**

```
Método 1 - Ribbon:
Home Tab → Views Panel → Orthographic View Manager

Método 2 - Command Line:
Command: P3DORTHOVIEW

Método 3 - Project Manager:
Project Manager → Drawings → Right-click → Create Orthographic View
```

**Interface de Orthographic View Manager:**

```
┌───────────────────────────────────────────────────────┐
│ Orthographic View Manager - ABC Refinery              │
├───────────────────────────────────────────────────────┤
│ View Type:                                             │
│ ⦿ Plan View (Top)    ○ Elevation (North/South/E/W)   │
│ ○ Section            ○ Custom View                    │
├───────────────────────────────────────────────────────┤
│ View Definition:                                       │
│ ├─ View Name: Area-1001-Plan-View                    │
│ ├─ Elevation: FL-1 (4500mm)                          │
│ ├─ Depth: ±2000mm (from elevation)                   │
│ └─ Boundary: [Pick Points] [Rectangle] [Polygon]     │
├───────────────────────────────────────────────────────┤
│ Display Options:                                       │
│ ☑ Show piping                                         │
│ ☑ Show equipment                                      │
│ ☑ Show structural                                     │
│ ☐ Show supports (opcional)                            │
│ ☑ Show annotations                                    │
│ ☑ Hidden line removal                                 │
├───────────────────────────────────────────────────────┤
│ Output Settings:                                       │
│ ├─ Target Drawing: NEW or EXISTING                   │
│ ├─ Scale: 1:50                                        │
│ ├─ Layer Mapping: [Configure...]                     │
│ └─ Update Mode: ⦿ Associative  ○ Static             │
├───────────────────────────────────────────────────────┤
│ [Create View] [Update Existing] [Settings] [Close]   │
└───────────────────────────────────────────────────────┘
```

### 2.2 Generación de Vista en Planta - Paso a Paso

**Escenario:** Generar planta de área de Crude Distillation Unit (CDU) a elevación FL-1 (4500mm).

**Paso 1: Definir región de vista**

```
1. Abrir modelo 3D del proyecto:
   File → Open → ABC_Refinery_Main.dwg

2. Establecer vista 3D apropiada:
   View → 3D Views → Top (vista desde arriba)

3. Iniciar Orthographic View Manager:
   Home → Views → Orthographic View Manager

4. Seleccionar tipo de vista:
   View Type: ⦿ Plan View (Top)

5. Nombrar vista:
   View Name: Area-1001-CDU-Plan-FL1
   (Nomenclatura: Area-[Number]-[Name]-Plan-FL[Level])
```

**Paso 2: Definir elevación y profundidad de corte**

```
View Definition:
├─ Elevation: 4500mm (Floor Level 1)
│  (Esta es la altura del plano de corte horizontal)
│
├─ Depth Above: 2000mm
│  (Mostrar todo entre 4500mm y 6500mm)
│
└─ Depth Below: 2000mm
   (Mostrar todo entre 2500mm y 4500mm)

Resultado: Vista muestra tubería y equipos en rango 2500-6500mm
```

**Concepto de profundidad de corte:**
```
Vista lateral (elevación):
     ┌──────────────────────────┐ 6500mm (techo de vista)
     │    Visible en vista      │
     │                          │
═════╪══════════════════════════╪═════ 4500mm (plano de corte FL-1)
     │                          │
     │    Visible en vista      │
     └──────────────────────────┘ 2500mm (piso de vista)

     ├────────────────────────────── Profundidad arriba: 2000mm
     ├────────────────────────────── Profundidad abajo: 2000mm
```

**Paso 3: Definir límites de región**

```
Boundary Definition:
Opciones:
  [Pick Points] - Dibujar polígono personalizado
  [Rectangle] - Rectángulo por dos esquinas
  [Polygon] - Polígono cerrado existente
  [Model Extents] - Todo el modelo

Recomendado para planta de área:
  1. Click [Rectangle]
  2. First corner: [Seleccionar esquina SW del área CDU]
     Coordenadas: 0,0 (Grid A-1)
  3. Second corner: [Seleccionar esquina NE del área CDU]
     Coordenadas: 50000,30000 (Grid K-10)

Resultado: Vista rectangular 50m × 30m
```

**Paso 4: Configurar opciones de visualización**

```
Display Options:
☑ Show piping - Mostrar todas las tuberías
☑ Show equipment - Reactores, tanques, bombas, etc.
☑ Show structural - Estructuras metálicas, plataformas
☐ Show supports - NO (demasiado detalle para planta general)
☑ Show annotations - Grid lines, números de equipo
☑ Hidden line removal - Ocultar líneas traseras

Advanced Options:
├─ Line Weight Scaling: 1.0 (sin escala)
├─ Hatch Patterns: ☑ Show concrete, steel patterns
└─ Simplification: ☐ Simplify small fittings (NO para precisión)
```

**Paso 5: Configurar escala y target drawing**

```
Output Settings:

Target Drawing:
⦿ Create New Drawing
  Drawing Name: Area-1001-CDU-Plan-FL1.dwg
  Template: Company_Ortho_Plan_Template.dwt
  Location: C:\PlantProjects\ABC_Refinery\Drawings\Plans\

○ Add to Existing Drawing
  (Para agregar múltiples vistas a mismo drawing)

Scale: 1:50
  (Apropiado para planta de área ~50m × 30m en hoja A1)

Update Mode:
⦿ Associative - Vista se actualiza automáticamente si modelo 3D cambia
○ Static - Vista independiente, no se actualiza
```

**Paso 6: Generar vista**

```
Click [Create View]

Plant 3D procesa:
  1. Corta modelo 3D al plano especificado (4500mm)
  2. Proyecta geometría 3D a 2D (proyección ortogonal)
  3. Aplica hidden line removal
  4. Escala a 1:50
  5. Mapea objetos a layers apropiados
  6. Inserta en drawing target

Tiempo de procesamiento:
  - Área pequeña (10m × 10m): 10-30 segundos
  - Área mediana (50m × 30m): 1-3 minutos
  - Área grande (100m × 100m): 5-10 minutos

Progress bar muestra: "Generating orthographic view... 45%"
```

**Resultado:**

Nueva vista 2D en drawing `Area-1001-CDU-Plan-FL1.dwg`:

```
Vista ortogonal en planta mostrando:
- Grid lines A-K (horizontal) y 1-10 (vertical)
- Equipos principales: Columna C-1001, Hornos F-1001A/B, etc.
- Tuberías mayores (≥2") en routing horizontal
- Válvulas principales con tags
- Racks de tubería
- Escaleras y plataformas de acceso
- Anotaciones: números de línea, elevaciones

Todo correctamente escalado a 1:50 y listo para anotación adicional
```

### 2.3 Configuración de Visibilidad por Layer

Para controlar qué objetos se muestran en vista ortogonal, configure layer mapping:

**Layer Mapping Settings:**

```
Orthographic View Manager → Settings → Layer Mapping

Source Layer (Model 3D)  →  Target Layer (Vista 2D)
─────────────────────────────────────────────────────
PIPE_PROCESS             →  ORTHO_PIPE_MAIN
PIPE_UTILITY             →  ORTHO_PIPE_UTILITY
EQUIPMENT                →  ORTHO_EQUIPMENT
STRUCTURAL_STEEL         →  ORTHO_STRUCTURE
VALVE_CONTROL            →  ORTHO_VALVES
INSTRUMENT               →  ORTHO_INSTRUMENTS
SUPPORT_PIPE             →  ORTHO_SUPPORTS (OFF)
HANGER                   →  ORTHO_HANGERS (OFF)
GRID_LINES               →  ORTHO_GRID
ANNOTATION               →  ORTHO_ANNOT

Special Settings:
├─ Small Diameter Pipes (<2"):
│  ○ Show all
│  ⦿ Show only if valve/instrument attached
│  ○ Hide all
│
├─ Fittings (Elbows, Tees):
│  ⦿ Show simplified (línea continua)
│  ○ Show detailed symbols
│  ○ Hide all
│
└─ Supports and Hangers:
   ○ Show all
   ○ Show only main supports
   ⦿ Hide all (típico para plantas generales)
```

**Reglas de visibilidad según escala:**

| Escala | Mostrar | Ocultar |
|--------|---------|---------|
| 1:100 | Tubería ≥4", Equipos, Válvulas mayores | Tubería <4", Soportes, Instrumentación |
| 1:50 | Tubería ≥2", Equipos, Válvulas, Instrumentos principales | Tubería <2", Soportes, Detalles menores |
| 1:20 | Toda tubería, Equipos, Válvulas, Instrumentos, Soportes | Solo detalles muy pequeños |
| 1:10 | Todo (máximo detalle) | Nada |

**Objetivo:** Evitar saturación visual. Plano legible muestra solo información relevante a la escala.

### 2.4 Gestión de Múltiples Vistas en Proyecto

Para proyecto con múltiples áreas, genere familia de vistas organizadas:

**Estructura de vistas para proyecto típico:**

```
ABC_Refinery_Drawings/
├─ Plans/
│  ├─ General/
│  │  ├─ Site-Plan-Overall.dwg (1:200 - toda la planta)
│  │  └─ Site-Plan-Process-Area.dwg (1:100 - área de proceso)
│  │
│  ├─ Area-1001-CDU/
│  │  ├─ Area-1001-Plan-FL0.dwg (Ground level)
│  │  ├─ Area-1001-Plan-FL1.dwg (4.5m level)
│  │  ├─ Area-1001-Plan-FL2.dwg (9.0m level)
│  │  └─ Area-1001-Plan-Roof.dwg (Top level)
│  │
│  ├─ Area-2001-Utilities/
│  │  └─ Area-2001-Plan-FL0.dwg
│  │
│  └─ Area-3001-Tank-Farm/
│     └─ Area-3001-Plan-FL0.dwg
│
├─ Elevations/
│  ├─ Area-1001-Elevation-North.dwg
│  ├─ Area-1001-Elevation-South.dwg
│  ├─ Area-1001-Elevation-East.dwg
│  └─ Area-1001-Elevation-West.dwg
│
└─ Sections/
   ├─ Area-1001-Section-A-A.dwg (Transversal)
   ├─ Area-1001-Section-B-B.dwg (Longitudinal)
   └─ Area-1001-Section-C-C.dwg (Detail section)
```

**Nomenclatura estandarizada:**

```
Formato: [Area]-[ViewType]-[Reference]

Ejemplos:
  Area-1001-Plan-FL1
    └─ Area 1001, Vista en Planta, Floor Level 1

  Area-1001-Elevation-North
    └─ Area 1001, Elevación, Vista Norte

  Area-1001-Section-A-A
    └─ Area 1001, Sección, Corte A-A
```

## 3. Generación de Elevaciones y Secciones

### 3.1 Creación de Elevaciones

Las elevaciones muestran vistas laterales para verificar alturas y clearances verticales.

**Paso a paso - Elevación Norte:**

```
1. Orthographic View Manager:
   View Type: ⦿ Elevation

2. Select Elevation Direction:
   ⦿ North (looking from South towards North)
   ○ South
   ○ East
   ○ West
   ○ Custom Angle: [___]°

3. View Definition:
   View Name: Area-1001-CDU-Elevation-North
   Horizontal Extent:
     ├─ From Grid: A
     └─ To Grid: K
   Vertical Extent:
     ├─ From Elevation: 0mm (Ground)
     └─ To Elevation: 15000mm (Roof)

4. Display Options:
   ☑ Show piping
   ☑ Show equipment
   ☑ Show structural (columnas, vigas)
   ☑ Show platforms and stairs
   ☐ Show supports (generalmente NO en elevación general)
   ☑ Hidden line removal

5. Output:
   Scale: 1:100 (típico para elevación general)
   Target: Area-1001-CDU-Elevation-North.dwg

6. [Create View]
```

**Resultado - Elevación Norte:**

```
Vista lateral mostrando:

  15.0m ─────────────────────────────────── Roof Level
        │                                │
  12.0m ├─────────[Platform]─────────────┤ FL-3
        │      [Tank T-1001]             │
   9.0m ├───────────┬────────────────────┤ FL-2
        │    [Pipe] │ [Column C-1001]    │
   6.0m ├───────────┴────────────────────┤
        │           │                    │
   4.5m ├─────[Pipe rack]────────────────┤ FL-1
        │           │                    │
   0.0m ╧═══════════╧════════════════════╧ Ground
       Grid A      Grid F             Grid K

Anotaciones:
  - Floor Levels (FL-0, FL-1, FL-2, FL-3)
  - Elevaciones de tuberías (EL 4500, EL 9000)
  - Clearances (2.1m mínimo sobre pasillos)
  - Alturas de equipos
  - Referencias a secciones (SEC A-A →)
```

### 3.2 Creación de Secciones Transversales

Las secciones son cortes verticales que muestran configuración interna.

**Paso a paso - Sección A-A:**

```
1. Primero, definir línea de corte en vista en planta:

   En Area-1001-Plan-FL1.dwg:
   Command: LINE
   First point: Grid C, between Grid 4 and 5
   Second point: Grid C, between Grid 6 and 7
   [Esta línea define el plano de corte vertical]

   Command: TEXT
   Text: "A" (a cada lado de la línea de corte)
   [Flechas indicando dirección de vista]

2. Orthographic View Manager:
   View Type: ⦿ Section

3. Define Section Plane:
   Method:
   ⦿ Pick Line - Seleccionar la línea de corte dibujada
   ○ Two Points - Especificar dos puntos
   ○ Angle - Especificar ángulo

   Select line: [Click en línea de corte "A-A"]

4. View Direction:
   ⦿ Looking North (vista hacia el norte)
   ○ Looking South

5. View Definition:
   View Name: Area-1001-Section-A-A
   Depth of Section:
     ├─ Depth in Front: 5000mm (mostrar 5m adelante de plano)
     └─ Depth Behind: 2000mm (mostrar 2m atrás de plano)
   Vertical Extent:
     ├─ From: 0mm (Ground)
     └─ To: 15000mm (Roof)

6. Section Properties:
   ☑ Show section cut (líneas cortadas más gruesas)
   ☑ Hatch cut elements
   Hatch Pattern: ANSI31 (steel) for structural
                  AR-CONC (concrete) for foundations
   ☑ Show elements behind section
   ☐ Show elements in front (generalmente NO)

7. Output:
   Scale: 1:50 (más grande que elevación para ver detalles)
   Target: Area-1001-Section-A-A.dwg

8. [Create View]
```

**Resultado - Sección A-A:**

```
Vista de corte transversal mostrando:

  15.0m ────────────────────────────────────────
        │                                      │
  12.0m ├──────[Pipe]──────────────────────────┤
        │  ║   ║   ║  [Vertical pipe rack]   │
   9.0m ├──╬═══╬═══╬──────────────────────────┤ FL-2
        │  ║   ║   ║                          │
   6.0m ├──╬═══╬═══╬──────────────────────────┤
        │  ║   ║   ║  [Platform steel]        │
   4.5m ├──╬═══╬═══╬──────────────────────────┤ FL-1
        │  ║   ║   ║                          │
   0.0m ╧══╩═══╩═══╩══════════════════════════╧

        ║ = Tubería vertical (cortada - hatched)
        ─ = Structural steel (cortado - hatched)
        │ = Elementos detrás del plano de corte

Anotaciones:
  - "SECTION A-A" (título)
  - Floor levels
  - Dimensiones entre niveles
  - Números de líneas de tubería vertical
  - Dimensiones de clearances críticos
```

### 3.3 Secciones de Detalle

Para áreas complejas con múltiples tuberías en espacio reducido:

**Sección de detalle de rack de tubería:**

```
Scale: 1:20 (mucho más grande para claridad)
Area: 5m × 5m section of dense piping

Mostrar:
  ☑ Todas las tuberías (incluso 1/2" instrumentación)
  ☑ Todos los soportes y hangers
  ☑ Todas las válvulas con tags
  ☑ Dimensiones de clearance entre tuberías
  ☑ Notas de instalación
  ☑ Detalles de conexiones

Output: Area-1001-Detail-Rack-Section.dwg
```

## 4. Anotación y Dimensionamiento de Vistas Ortogonales

### 4.1 Anotaciones Requeridas en Vistas en Planta

**Grid Lines y Coordenadas:**

```
Command: GRID (Plant 3D grid object)

Grid Configuration:
├─ Horizontal Grid Lines: A, B, C, D, E, F, G, H, J, K
│  (Omitir "I" para evitar confusión con "1")
│  Spacing: 6000mm (típico para plantas industriales)
│
└─ Vertical Grid Lines: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
   Spacing: 5000mm

Grid Annotation:
  - Círculos con letra/número en intersecciones principales
  - Tamaño de texto: 7mm (para escala 1:50)
  - Layer: ORTHO_GRID
  - Color: Grid lines = Gray, Labels = Black
```

**Números de Equipo:**

```
Equipment Tags:
Formato: [Type]-[Area][Seq]

Ejemplos:
  P-1001 = Pump, Area 1001, Sequence 1
  T-1002 = Tank, Area 1001, Sequence 2
  C-1001 = Column, Area 1001, Sequence 1
  E-1003 = Heat Exchanger, Area 1001, Sequence 3
  R-1001 = Reactor, Area 1001, Sequence 1

Placement:
  - Centrado en equipo
  - Leader line si espacio limitado
  - Tamaño de texto: 5mm @ 1:50
  - Layer: ORTHO_EQUIP_TAGS
```

**Números de Línea de Tubería:**

```
Pipeline Tags:
Formato: [Area]-[Service]-[Size]-[Material]

Ejemplo: 1001-A-6"-CS

Placement:
  - A lo largo de línea de tubería cada 20-30m
  - En cambios de dirección principales
  - Cerca de conexiones a equipos
  - Leader line apuntando a tubería
  - Tamaño de texto: 3.5mm @ 1:50
  - Layer: ORTHO_PIPE_TAGS
```

**Elevaciones de Tubería:**

```
Elevation Tags:
Formato: EL [value]mm o EL [value]'

Ejemplo: EL 4500 (4.5m sobre datum)

Placement:
  - En cambios de elevación
  - En conexiones a nozzles de equipo
  - Puntos altos y bajos de línea
  - Prefix "EL" es obligatorio
  - Layer: ORTHO_ELEVATIONS
```

**Direcciones de Flujo:**

```
Flow Arrows:
  → para flujo en dirección positiva
  ← para flujo en dirección negativa

Placement:
  - Cada 30-50m en tuberías largas
  - En puntos de conexión
  - Block con atributo de presión/temperatura si aplica
```

**Norte de Planta:**

```
North Arrow:
  - Ubicación: Esquina superior derecha o cerca de título
  - Tamaño: 30-50mm de altura
  - Estilo: Flecha simple con "N" o "PLANT NORTH"
  - Indicar si es True North o Project North
  - Layer: ORTHO_SYMBOLS
```

### 4.2 Dimensionamiento en Elevaciones

**Dimensiones de Floor Levels:**

```
Dimension Style: ISO_DIM_ORTHO (ver Lección 22)

Floor Level Dimensions:
  ├─ Datum: Ground Level = 0.00m
  ├─ FL-1: 4.50m
  ├─ FL-2: 9.00m
  └─ FL-3: 13.50m

Representation:
  Continuous dimension chain desde ground hasta roof:

  ├──── 4.50 ────┤
  ├──────── 9.00 ────────┤
  ├────────── 13.50 ──────────┤

  Alternativamente, dimensiones individuales:

  ├──── 4.50 ────┤
              ├──── 4.50 ────┤ (dimension desde FL-1 a FL-2)
                          ├──── 4.50 ────┤
```

**Clearances Verticales:**

```
Minimum Clearances según OSHA 1910.37:
  - Pasillos: 2.1m (7 ft) mínimo
  - Escaleras: 2.0m headroom
  - Áreas de trabajo: 2.3m

Annotation:
  Dimension line con nota:
  "2.10m MIN CLEARANCE"

  Color: Red si clearance es crítico
  Layer: ORTHO_CLEARANCES
```

**Elevaciones de Conexiones (Nozzles):**

```
Nozzle Elevations:
  - Desde centerline de nozzle hasta datum
  - Formato: EL 3250 C-L
  - Leader apuntando a nozzle
  - Include nozzle number: N1, N2, N3...

Example annotation:
  N1: 6" 150# RF
  EL 3250 C-L
  (Nozzle 1, 6 inches, 150 lb, Raised Face, Centerline elevation 3250mm)
```

### 4.3 Anotación de Secciones

**Identificación de Sección:**

```
Section Title Block:
┌─────────────────────────────────────┐
│ SECTION A-A                         │
│ Scale: 1:50                         │
│ Looking North                       │
└─────────────────────────────────────┘

Ubicación: Parte superior o inferior de vista de sección
Font: Arial Bold 10mm @ 1:50
Layer: ORTHO_TITLES
```

**Indicadores de Material Cortado:**

```
Hatch Patterns para elementos cortados:

Steel Structure:
  Pattern: ANSI31
  Scale: 50 (@ 1:50 scale)
  Angle: 45°
  Layer: ORTHO_HATCH_STEEL

Concrete:
  Pattern: AR-CONC
  Scale: 50
  Layer: ORTHO_HATCH_CONC

Pipe (cortada):
  Pattern: Solid fill
  Layer: ORTHO_PIPE_CUT
  Color: Light gray

Equipment (cortado):
  Pattern: ANSI37 (brick pattern)
  Scale: 30
  Layer: ORTHO_EQUIP_CUT
```

**Referencias Cruzadas:**

```
Cross-References entre vistas:

En Planta, indicar sección:
  ──A──────A── (línea de corte con letras en extremos)
     ↑    ↑ (flechas indicando dirección de vista)

En Sección, indicar ubicación:
  "For plan view, see Drawing: Area-1001-Plan-FL1"

En Elevación, indicar sección relacionada:
  "See Section A-A for details"
```

## 5. Configuración de Layouts de Presentación

### 5.1 Diseño de Layout Multi-Vista

Para presentación profesional, crear layout con múltiples vistas coordinadas:

**Layout: Area-1001-CDU-Composite**

```
Sheet Size: A1 (594mm × 841mm) landscape
Scale: Variable por viewport

Layout Organization:
┌─────────────────────────────────────────────────────────┐
│ ABC REFINERY - AREA 1001 CDU                           │
│                                                         │
│ ┌────────────────────────────┐  ┌──────────────────┐  │
│ │                            │  │                  │  │
│ │  Plan View                 │  │  Elevation North │  │
│ │  Scale: 1:100              │  │  Scale: 1:100    │  │
│ │                            │  │                  │  │
│ └────────────────────────────┘  └──────────────────┘  │
│                                                         │
│ ┌───────────────┐  ┌───────────────┐  ┌────────────┐ │
│ │               │  │               │  │            │ │
│ │ Section A-A   │  │ Section B-B   │  │ Key Plan   │ │
│ │ Scale: 1:50   │  │ Scale: 1:50   │  │ NTS        │ │
│ │               │  │               │  │            │ │
│ └───────────────┘  └───────────────┘  └────────────┘ │
│                                                         │
│ [Title Block with project info, revision table]        │
└─────────────────────────────────────────────────────────┘
```

### 5.2 Configuración de Viewports

**Crear viewport para Plan View:**

```
1. En Layout tab:
   Layout → Area-1001-Composite

2. Crear viewport rectangular:
   Command: MVIEW
   First corner: 50,400 (esquina superior izquierda)
   Second corner: 450,700 (esquina inferior derecha)

3. Activar viewport y configurar:
   Double-click dentro de viewport (activa Model Space en Layout)

   Command: ZOOM
   Select: All

   Command: VIEW
   Restore view: Area-1001-Plan-FL1 (vista guardada previamente)

4. Configurar escala de viewport:
   Click en borde de viewport (seleccionar viewport object)
   Properties Panel:
   └─ Standard Scale: 1:100

5. Lock viewport scale:
   Properties Panel:
   └─ Display locked: Yes
   (Previene cambios accidentales de zoom)

6. Configurar visibilidad de layers en viewport:
   Properties Panel → Layer Properties Override
   ├─ Freeze in current viewport:
   │  └─ ORTHO_CONSTRUCTION (layer temporal)
   └─ VP Color override:
      └─ ORTHO_GRID: Light gray (en lugar de negro)
```

**Repetir proceso para cada viewport** (Elevation, Sections, Key Plan).

### 5.3 Configuración de Plotting

**Page Setup para Layout:**

```
Command: PAGESETUP

Page Setup Name: Area-1001-Composite-A1

Printer/Plotter:
  Name: Adobe PDF (o DWG To PDF.pc3)
  Paper size: ISO A1 (594 × 841 mm)

Plot Area:
  What to plot: Layout

Plot Offset:
  X: 0.00mm
  Y: 0.00mm
  ☑ Center the plot

Plot Scale:
  ⦿ 1:1 (escala real del layout)
  ☐ Scale lineweights

Plot Style Table:
  ISO_PlotStyle.ctb (configurado en Lección 22)
  ☑ Display plot styles

Shaded Viewport Options:
  Quality: Maximum
  ☐ Plot with plot styles (for realistic rendering)

Plot Options:
  ☐ Plot in background
  ☑ Plot object lineweights
  ☑ Plot with plot styles
  ☑ Plot paperspace last
  ☐ Hide paperspace objects

Drawing Orientation:
  ⦿ Landscape
  ○ Portrait

[OK]
```

### 5.4 Batch Plotting de Múltiples Layouts

Para plotear conjunto completo de planos:

```
Command: PUBLISH

Publish dialog:
├─ Sheets to Publish:
│  ☑ Area-1001-Plan-FL1.dwg - Layout: Plan
│  ☑ Area-1001-Elevation-North.dwg - Layout: Elevation
│  ☑ Area-1001-Section-A-A.dwg - Layout: Section
│  ☑ Area-1001-Section-B-B.dwg - Layout: Section
│  └─ [Add sheets...] [Remove sheets]
│
├─ Publish to:
│  ⦿ PDF
│  ○ DWF
│  ○ Plotter named in page setup
│
├─ Publish Options:
│  Output location: C:\PlantProjects\ABC_Refinery\PDFs\
│  Naming: ⦿ Prompt for name ○ Auto-generate
│  ☑ Include plot stamp (date, time, plot scale)
│  Multi-sheet file: ⦿ Single multi-sheet PDF ○ Separate PDFs
│
└─ [Publish] [Preview] [Save sheet list...]

Result:
  Area-1001-CDU-Drawings.pdf (single PDF with 4 sheets)
```

## Ejercicio Práctico: Producir Planos Ortogonales Completos

### Escenario

Usted es el Lead Piping Designer para "Pacific LNG Terminal Phase 2". El cliente requiere set completo de planos ortogonales del área de Liquefaction (Area 3001) para revisión de diseño.

**Requisitos del cliente:**
- 1 plano de planta general (escala 1:100)
- 2 elevaciones (Norte y Este) (escala 1:100)
- 1 sección transversal (escala 1:50)
- Formato: Hojas A1, múltiples vistas por hoja cuando sea posible
- Anotación completa: grid lines, equipment tags, pipe numbers, elevations
- PDF de alta calidad para revisión electrónica

### Área a Documentar

```
Area 3001 - Liquefaction:
  Extent: Grid A-H (horizontal) × Grid 1-8 (vertical)
  Dimensions: 42m × 40m
  Floor Levels:
    - FL-0 (Ground): 0.00m
    - FL-1 (Mezzanine): 5.00m
    - FL-2 (Operating): 10.00m
    - FL-3 (Top): 15.00m

  Main Equipment:
    - Compressor C-3001 (large reciprocating)
    - Heat Exchanger E-3001, E-3002
    - Separator V-3001
    - Storage tanks T-3001, T-3002

  Piping:
    - LNG lines: 8"-24" SS316L cryogenic
    - Refrigerant lines: 4"-12" CS
    - Instrument lines: 1/2"-1" SS316L
```

### Tareas

**Tarea 1: Generar vista en planta de FL-1 (15 min)**
- Elevación: 5000mm (FL-1)
- Profundidad: ±3000mm
- Escala: 1:100
- Incluir: Tubería ≥2", equipos, válvulas mayores
- Excluir: Soportes, tubería <2"

**Tarea 2: Generar elevaciones Norte y Este (15 min)**
- Extent vertical: 0m a 18m (incluir techo)
- Escala: 1:100
- Mostrar: Floor levels, clearances, equipos, tuberías principales

**Tarea 3: Generar sección transversal A-A (10 min)**
- Ubicación de corte: Grid D (centro del área)
- Dirección: Looking North
- Escala: 1:50 (más detallada)
- Incluir: Toda tubería, soportes, hatching de elementos cortados

**Tarea 4: Anotar todas las vistas (15 min)**
- Grid lines en planta
- Equipment tags
- Pipeline numbers
- Elevaciones de tubería
- Floor level dimensions
- Títulos de sección
- Norte de planta

**Tarea 5: Crear layout compuesto y plotear a PDF (10 min)**
- Layout A1 con las 4 vistas
- Configurar viewports con escalas correctas
- Agregar title block con información del proyecto
- Publish a PDF de alta calidad

### Criterios de Evaluación

- ✅ Vistas generadas correctamente desde modelo 3D
- ✅ Escalas apropiadas para cada tipo de vista
- ✅ Visibilidad correcta (objetos relevantes visibles, irrelevantes ocultos)
- ✅ Anotaciones completas y legibles
- ✅ Layout profesional con múltiples vistas coordinadas
- ✅ PDF de calidad para revisión de cliente

### Tiempo Estimado

⏱️ **50 minutos**

## Preguntas de Evaluación

### Pregunta 1
Según ISO 5456, ¿cuál es la diferencia principal entre proyección de primer ángulo y proyección de tercer ángulo?

A) La escala utilizada en las vistas
B) La ubicación relativa del objeto, observador y plano de proyección
C) El tipo de líneas utilizadas para representar bordes ocultos
D) El tamaño de papel requerido para los dibujos

**Respuesta correcta: B**

**Explicación:** En proyección de primer ángulo (usada en Europa/Asia), el objeto se ubica entre el observador y el plano de proyección. En proyección de tercer ángulo (usada en USA), el plano de proyección se ubica entre el observador y el objeto. Esto resulta en disposición diferente de vistas ortogonales: en primer ángulo, la vista derecha aparece a la izquierda de la vista frontal; en tercer ángulo, la vista derecha aparece a la derecha. Es crítico indicar qué sistema se usa en el cajetín mediante el símbolo estándar (cono truncado) para evitar confusión durante construcción.

---

### Pregunta 2
Al generar una vista en planta desde modelo 3D con Orthographic View Manager, ¿qué parámetro controla qué objetos por encima y por debajo del plano de corte se muestran en la vista?

A) Escala de la vista
B) Layer mapping configuration
C) Profundidad de corte (Depth Above/Below)
D) Tipo de proyección (primer vs tercer ángulo)

**Respuesta correcta: C**

**Explicación:** El parámetro "Depth" (profundidad de corte) define el rango vertical de objetos que se incluyen en la vista en planta. Por ejemplo, para planta en FL-1 (4500mm) con Depth Above = 2000mm y Depth Below = 2000mm, se mostrarán todos los objetos entre 2500mm y 6500mm de elevación. Objetos fuera de este rango son excluidos de la vista. Este parámetro es crítico para evitar saturación visual: en planta de área con múltiples niveles, configurar profundidad incorrecta puede resultar en superposición confusa de tuberías de diferentes niveles.

---

### Pregunta 3
¿Por qué es importante usar vistas "asociativas" en lugar de "estáticas" al generar documentación ortogonal desde modelo 3D?

A) Las vistas asociativas ocupan menos espacio en disco
B) Las vistas asociativas se actualizan automáticamente cuando el modelo 3D cambia
C) Las vistas asociativas se pueden plotear más rápido
D) Las vistas asociativas tienen mejor resolución

**Respuesta correcta: B**

**Explicación:** Vistas asociativas mantienen enlace dinámico con el modelo 3D fuente. Cuando el modelo 3D se modifica (cambio de routing de tubería, reubicación de equipo, adición de válvulas), las vistas asociativas se pueden actualizar automáticamente con un comando de "update", reflejando instantáneamente los cambios. Esto elimina trabajo manual de re-dibujo y asegura consistencia absoluta entre modelo 3D y documentación 2D. En proyecto típico con 50-200 planos ortogonales, la capacidad de actualización automática puede ahorrar cientos de horas de trabajo cuando ocurren cambios de diseño (lo cual es inevitable en ingeniería de detalle).

---

### Pregunta 4
En una sección transversal, ¿qué convención de representación se debe aplicar a elementos estructurales que son cortados por el plano de sección según ISO 128?

A) Representarlos con línea punteada fina
B) Ocultarlos completamente de la vista
C) Representarlos con línea continua y aplicar patrón de hatching (ANSI31 para acero)
D) Representarlos en color rojo para distinguirlos

**Respuesta correcta: C**

**Explicación:** Según ISO 128 (principios de representación técnica), elementos cortados por plano de sección deben representarse con: (1) Línea de contorno continua más gruesa que elementos no cortados, y (2) Patrón de hatching apropiado al material (ANSI31 a 45° para acero estructural, AR-CONC para concreto, solid fill para tuberías). El hatching permite al lector distinguir instantáneamente qué elementos son cortados (en el plano de sección) versus elementos detrás del plano. Sin hatching, secciones son confusas y difíciles de interpretar durante construcción.

---

### Pregunta 5
Al configurar un layout de presentación con múltiples viewports para plotting, ¿por qué es crítico "bloquear" (lock) la escala de cada viewport después de configurarla?

A) Para mejorar el rendimiento de plotting
B) Para prevenir cambios accidentales de zoom que alterarían la escala de impresión
C) Para cumplir con requisitos de ISO 5455
D) Para permitir edición del contenido del viewport

**Respuesta correcta: B**

**Explicación:** Bloquear la escala de viewport (Display Locked = Yes) previene que comandos de zoom accidentales dentro del viewport cambien la escala de presentación. Sin bloqueo, es fácil hacer zoom inadvertidamente mientras se trabaja en layout, resultando en viewport que ya no está a escala correcta (e.g., cambia de 1:50 a 1:48.3, escala no estándar). En layout multi-viewport con diferentes escalas (planta a 1:100, sección a 1:50, detalle a 1:20), es esencial que cada viewport mantenga su escala exacta para cumplir con estándares de dibujo técnico y para que dimensiones y escalímetros funcionen correctamente.

## Resumen de la Lección

En esta lección completa sobre generación de planos ortogonales desde modelos 3D, ha desarrollado capacidades esenciales para producción de documentación de construcción profesional:

### Conceptos Clave Cubiertos

1. **Fundamentos de Proyección Ortogonal**
   - Comprendió sistemas de proyección de primer y tercer ángulo según ISO 5456
   - Aprendió tipos de vistas ortogonales: plantas, elevaciones, secciones, detalles
   - Dominó convenciones de representación según ISO 128 para tubería y equipos

2. **Extracción de Vistas en Planta**
   - Utilizó Orthographic View Manager para generar vistas desde modelo 3D
   - Configuró profundidad de corte para controlar qué objetos se muestran
   - Implementó layer mapping para visibilidad apropiada según escala
   - Estableció nomenclatura estandarizada para organización de vistas

3. **Generación de Elevaciones y Secciones**
   - Creó elevaciones Norte/Sur/Este/Oeste para verificación de alturas
   - Generó secciones transversales y longitudinales de áreas complejas
   - Aplicó hatching a elementos cortados según convenciones ISO
   - Produjó secciones de detalle a escala grande para claridad

4. **Anotación de Vistas Ortogonales**
   - Agregó grid lines, equipment tags, pipeline numbers, elevations
   - Dimensionó floor levels y clearances verticales
   - Implementó referencias cruzadas entre vistas relacionadas
   - Aplicó convenciones de anotación según estándares de industria

5. **Configuración de Layouts de Presentación**
   - Diseñó layouts multi-vista profesionales en hojas A1
   - Configuró viewports con escalas independientes
   - Bloqueó escalas para prevenir cambios accidentales
   - Configuró page setups para plotting a PDF de alta calidad

### Impacto en Proyecto Real

Los planos ortogonales son documentación primaria para construcción:

**Beneficios de vistas asociativas desde modelo 3D:**
- **Consistencia garantizada:** Vistas siempre coinciden con modelo actual
- **Actualización rápida:** Cambios de diseño se reflejan en minutos, no días
- **Reducción de errores:** Eliminación de transcripción manual
- **Ahorro de tiempo:** 70-90% menos tiempo que dibujo manual

**Consecuencias de planos incorrectos:**
- **Interferencias en campo:** Descubrimiento tardío de clashes cuesta $5K-50K por interferencia
- **Demoras de construcción:** Esperar planos corregidos = $50K-500K/día en penalidades
- **Retrabajo:** Tubería instalada en ubicación incorrecta = desperdicio de material y mano de obra

### Conexión con Próxima Lección

En la **Lección 25: Anotación y Dimensionamiento**, aprenderá técnicas avanzadas para:
- Anotación inteligente que se actualiza automáticamente
- Estilos de dimensiones según ISO 129 y ASME Y14.5
- Símbolos de soldadura según AWS D1.1
- Sincronización de anotaciones entre modelo 3D y vistas 2D

Las vistas ortogonales generadas en esta lección serán la base para aplicar anotación técnica profesional en la próxima.

---

**Próxima Lección:** [Lección 25 - Anotación y Dimensionamiento](./leccion-25.md)

---

**DISTMAH ATC - Authorized Training Center**
AutoCAD Plant 3D 2026 - Curso Avanzado
Módulo 5, Lección 24 de 30
