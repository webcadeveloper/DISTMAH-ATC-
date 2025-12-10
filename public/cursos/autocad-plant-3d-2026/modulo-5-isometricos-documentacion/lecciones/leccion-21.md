# Lección 21: Generación de Isométricos

## Información de la Lección

- **Módulo:** 5 - Isométricos y Documentación
- **Lección:** 21 de 30
- **Duración:** 60 minutos
- **Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, usted será capaz de:

✅ Comprender los fundamentos de dibujo isométrico para fabricación de tuberías
✅ Configurar y utilizar el Production Manager para generación de isométricos
✅ Establecer agrupación de líneas de tubería para isométricos organizados
✅ Generar isométricos individuales y por lotes (batch processing)
✅ Implementar esquemas de numeración de isométricos según estándares industriales

## Introducción

Los dibujos isométricos son la columna vertebral de la fabricación y construcción de plantas industriales. A diferencia de los modelos 3D que representan la geometría espacial real, los isométricos son representaciones 2D que muestran tuberías en proyección isométrica (30° de inclinación), permitiendo que fabricantes en taller puedan prefabricar spools de tubería con medidas exactas de corte, soldadura y fitting.

En la industria de procesos, petroquímica y energética, una planta típica puede requerir entre 500 y 5,000 isométricos individuales. La generación manual de estos dibujos era históricamente una tarea que consumía semanas o meses de trabajo de dibujantes especializados. AutoCAD Plant 3D 2026 automatiza este proceso, generando isométricos completos desde el modelo 3D en cuestión de minutos, siguiendo estándares ISO 15926 (integración de datos del ciclo de vida) y convenciones de dibujo ASME Y14.5.

Sin embargo, la automatización requiere configuración experta. Isométricos mal configurados pueden generar errores costosos: longitudes de corte incorrectas resultan en material desperdiciado, numeración inconsistente causa confusión en campo, y anotaciones faltantes generan demoras durante instalación. Esta lección establece las bases para generar documentación de fabricación profesional que cumple estándares internacionales.

## 1. Fundamentos de Dibujo Isométrico

### 1.1 ¿Qué es un Isométrico de Tubería?

Un isométrico (ISO drawing) es una representación bidimensional de una línea de tubería tridimensional donde:

- **Proyección isométrica:** Los ejes X, Y, Z se representan a 30° de la horizontal
- **Escala uniforme:** No hay distorsión de longitudes en ningún eje
- **Vista única:** Todo el recorrido de tubería se muestra en un solo dibujo
- **Información de fabricación:** Incluye dimensiones, materiales, componentes y soldaduras

**Diferencias clave entre modelo 3D e isométrico:**

| Aspecto | Modelo 3D | Isométrico |
|---------|-----------|------------|
| Propósito | Diseño espacial y clash detection | Fabricación en taller |
| Vistas | Múltiples vistas (planta, elevación) | Vista única isométrica |
| Escala | Escala real 1:1 | Escala de dibujo (1:20, 1:50) |
| Información | Geometría y conexiones | Dimensiones de corte, pesos, BOMs |
| Usuario final | Ingenieros de diseño | Fabricantes y montadores |

![Comparación modelo 3D vs isométrico](../imagenes/leccion-21-3d-vs-iso.png)

### 1.2 Componentes de un Isométrico Estándar

Un isométrico profesional según ISO 15926 incluye:

**1. Cajetín (Title Block):**
- Número de isométrico: ISO-1001-A-6"-CS-001
- Número de línea: 1001-A-6"-CS
- Servicio: Crude Oil, 150 PSIG, 120°F
- Material: Carbon Steel ASTM A106 Gr.B
- Especificación: Pipe Spec PS-001
- Revisión: Rev. 0, 1, 2, etc.
- Dibujante, revisor, aprobador y fechas

**2. Vista isométrica:**
- Recorrido completo de tubería desde inicio (FROM) hasta fin (TO)
- Todos los componentes: codos, tees, reductores, válvulas, bridas
- Orientación según convención: Norte arriba, Este a 30° derecha
- Símbolos simplificados para componentes estándar

**3. Dimensionamiento:**
- Dimensiones de centro a centro (C-L to C-L)
- Dimensiones de corte de tubo (cut lengths)
- Elevaciones de puntos críticos (nozzles, conexiones)
- Coordenadas de ubicación en planta (Northing/Easting)

**4. Lista de materiales (BOM):**
- Tabla con todos los componentes del spool
- Cantidad (QTY), descripción, material, peso
- Longitudes de tubería por diámetro y espesor (schedule)

**5. Notas y símbolos:**
- Símbolos de soldadura según AWS D1.1
- Notas de fabricación: "Field Weld", "Shop Weld", "Hydro Test 450 PSI"
- Instrucciones especiales de instalación

![Componentes de isométrico estándar](../imagenes/leccion-21-componentes-iso.png)

### 1.3 Estándares de Isométricos en la Industria

**ISO 15926 (Integration of lifecycle data):**
Estándar internacional para integración de datos en plantas de proceso. Define estructura de información para isométricos que permite intercambio de datos entre diferentes sistemas (CAD, ERP, CMMS).

**ASME Y14.5M (Dimensioning and Tolerancing):**
Estándar americano para dimensionamiento y tolerancias. Especifica convenciones para:
- Simbología de dimensiones
- Tolerancias geométricas
- Referencias de datum

**ISO 5261 (Technical drawings - Piping):**
Estándar específico para dibujo de tuberías, cubre:
- Representación simplificada de componentes
- Simbología de válvulas y accesorios
- Convenciones de líneas (centerline, outline)

**API 598 (Valve inspection and testing):**
Para isométricos que incluyen válvulas, referencia pruebas requeridas.

## 2. Production Manager - Herramienta Central

### 2.1 Acceso al Production Manager

El Production Manager es la herramienta central de Plant 3D 2026 para generación de isométricos y reportes.

**Métodos de acceso:**

**Opción 1: Ribbon**
- Pestaña **Isometric** > Panel **Manage** > **Production Manager**

**Opción 2: Comando**
- Escribir en línea de comandos: `PRODMGR` o `ISOMANAGER`

**Opción 3: Project Manager**
- Right-click en carpeta **Isometric Drawings** > **Manage Isometrics**

Al abrirse, Production Manager muestra una interfaz dividida en paneles:

![Production Manager interface](../imagenes/leccion-21-production-manager.png)

**Panel izquierdo: Line List (Lista de Líneas)**
- Todas las líneas de tubería del proyecto
- Columnas: Line Number, From, To, Size, Spec, Status
- Filtros: por área, diámetro, especificación

**Panel central: Isometric Settings**
- Configuración de generación
- Plantilla a utilizar
- Esquema de numeración
- Opciones de dimensionamiento

**Panel derecho: Preview**
- Vista previa del isométrico a generar
- Información de componentes
- Advertencias y errores

### 2.2 Configuración Inicial del Production Manager

Antes de generar el primer isométrico, configure los ajustes globales:

**Paso 1: Configurar Isometric Templates**

1. En Production Manager, click en **Settings** (icono engranaje)
2. Pestaña **Drawing Setup**
3. **Drawing Template:** Seleccionar plantilla DWG base
   - Ruta típica: `C:\ProgramData\Autodesk\Plant 3D 2026\Templates\Isometric\ISO_Template.dwg`
   - Puede personalizar (ver Lección 22)
4. **Drawing Scale:** Seleccionar escala apropiada
   - Para líneas pequeñas (< 50 pies): 1:20 o 1:25
   - Para líneas medianas (50-150 pies): 1:50
   - Para líneas grandes (> 150 pies): 1:100
5. **Sheet Size:** Tamaño de hoja
   - ANSI: A (8.5×11), B (11×17), C (17×22), D (22×34)
   - ISO: A4 (210×297), A3 (297×420), A2 (420×594), A1 (594×841)

**Paso 2: Configurar Dimensioning Standards**

1. En Settings > **Dimensions**
2. **Dimension Style:** Seleccionar estilo predefinido
   - ISO-25: Estilo ISO con texto 2.5mm
   - ANSI: Estilo ANSI con texto 3/32"
3. **Dimension Placement:**
   - Center-to-Center dimensions: Activar
   - Cut lengths: Activar
   - Elevations: Según requerimiento
4. **Dimension Units:**
   - Imperial: Pies y pulgadas (3'-6") o solo pulgadas (42")
   - Métrico: Milímetros (mm)

**Paso 3: Configurar BOM (Bill of Materials)**

1. En Settings > **BOM**
2. **BOM Style:** Seleccionar formato de tabla
   - Standard: Tabla simple con QTY, Description, Material
   - Detailed: Incluye peso, código de material, proveedor
3. **BOM Location:** Ubicación en el dibujo
   - Bottom: Parte inferior (más común)
   - Right: Lado derecho
4. **Weight Calculation:** Activar para incluir pesos
   - Source: Database (de catálogo de componentes)
   - Unit: Pounds (lb) o Kilograms (kg)

![Production Manager settings](../imagenes/leccion-21-pm-settings.png)

### 2.3 Configuración de PCF (Piping Component File)

El archivo PCF es un formato de datos intermedio que Plant 3D genera para comunicar información de tubería al motor de generación de isométricos.

**¿Qué contiene un PCF?**
- Coordenadas 3D de todos los componentes
- Tipo de componente (PIPE, ELBOW, FLANGE, VALVE, etc.)
- Atributos: diámetro, material, rating, espesor
- Información de conexión entre componentes

**Configuración de PCF:**

1. En Production Manager > Settings > **PCF Options**
2. **PCF Output Folder:** Carpeta donde se guardan archivos PCF
   - Recomendado: `[ProjectFolder]\ISO\PCF\`
3. **Component Mapping:** Mapeo de componentes Plant 3D a símbolos ISO
   - Elbow 90° → Símbolo de codo 90°
   - Gate Valve → Símbolo de válvula compuerta
4. **Custom Properties:** Propiedades personalizadas a incluir en PCF
   - Heat Number (para trazabilidad)
   - Vendor Code (para procurement)

**Formato PCF (extracto de ejemplo):**

```
PIPELINE-REFERENCE 1001-A-6-CS
PIPELINE-DESCRIPTION Crude Oil Feed Line
UNITS-CO-ORDS MM
UNITS-BORE INCH

PIPE
    CO-ORDS 1000 2000 3000 1000 2000 4000
    BORE 6
    WEIGHT-PER-UNIT 28.57
    MATERIAL-DESCRIPTION Carbon Steel ASTM A106 Gr.B Sch.40

ELBOW
    CO-ORDS 1000 2000 4000
    BORE 6
    ANGLE 90
    RADIUS 229
```

## 3. Agrupación de Líneas para Isométricos

### 3.1 Conceptos de Line Grouping

En un proyecto Plant 3D típico, una "línea de tubería" puede extenderse por cientos de metros, atravesar múltiples áreas y tener decenas de componentes. Generar un solo isométrico para toda la línea resultaría en un dibujo ilegible.

**Line Grouping** es el proceso de dividir líneas largas en segmentos lógicos, cada uno con su propio isométrico.

**Criterios de agrupación:**

**1. Por longitud máxima:**
- Típico: 40-60 pies (12-18 metros) por isométrico
- Permite fabricación de spools manejables en taller

**2. Por área geográfica:**
- Cada área de planta (Area 100, Area 200) tiene sus propios isos
- Facilita coordinación de construcción por área

**3. Por puntos de corte (split points):**
- Bridas: Punto natural de división (conexión atornillada)
- Válvulas: Permiten aislamiento durante mantenimiento
- Cambios de especificación: Cambio de material o rating

**4. Por límites de batería (battery limits):**
- Dentro de batería: Propiedad del cliente
- Fuera de batería: Áreas auxiliares o offsite

![Agrupación de líneas](../imagenes/leccion-21-line-grouping.png)

### 3.2 Configuración de Line Groups en Plant 3D

**Método 1: Agrupación Automática**

1. En Production Manager, seleccionar línea en Line List
2. Right-click > **Auto-Group Line**
3. Diálogo **Auto-Group Settings:**
   - **Maximum spool length:** 50 feet (configurable)
   - **Split at:** Flanges, Valves (seleccionar tipos)
   - **Group by:** Area, Elevation
4. Click **Apply** - Plant 3D divide automáticamente

**Método 2: Agrupación Manual**

1. En modelo 3D, hacer zoom a la línea de tubería
2. Seleccionar punto de división (ej: brida)
3. Right-click > **Pipeline Properties** > **Create Spool Break**
4. Aparece símbolo de división en el modelo
5. Repetir para todos los puntos de división deseados

**Método 3: Por tabla de Excel**

1. Exportar lista de líneas: Production Manager > **Export Line List**
2. En Excel, agregar columna **Split Points** con coordenadas
3. Importar: Production Manager > **Import Split Points**
4. Plant 3D aplica divisiones automáticamente

**Verificación de agrupación:**

- En Production Manager, expandir línea dividida
- Aparecen sub-líneas: `1001-A-6-CS-001`, `1001-A-6-CS-002`, etc.
- Cada sub-línea generará un isométrico individual

![Line groups en Production Manager](../imagenes/leccion-21-line-groups.png)

### 3.3 Nomenclatura de Spools

La nomenclatura correcta de spools es crítica para trazabilidad y gestión.

**Convención estándar de industria:**

**Formato:** `[LineNumber]-[SequentialNumber]`

**Ejemplo:**
- Línea: `1001-A-6"-CS` (Crude Oil, Area 1000, 6", Carbon Steel)
- Spools:
  - `1001-A-6"-CS-001` (primer spool)
  - `1001-A-6"-CS-002` (segundo spool)
  - `1001-A-6"-CS-003` (tercer spool)

**Sufijos adicionales según compañía:**

- `-FW`: Field Weld (soldadura en campo)
- `-SW`: Shop Weld (soldadura en taller)
- `-M`: Main run (recorrido principal)
- `-B`: Branch (derivación)

**Configurar nomenclatura en Plant 3D:**

1. Production Manager > Settings > **Numbering Scheme**
2. Seleccionar esquema: **Sequential**, **Area-Based**, **Custom**
3. **Format String:** `<LineNumber>-<Sequence:000>`
   - `<Sequence:000>` genera 001, 002, 003...
   - `<Sequence:00>` genera 01, 02, 03...
4. **Starting Number:** Típicamente 001
5. Click **Apply to All Lines**

## 4. Generación de Isométricos Individual

### 4.1 Generar un Isométrico Individual (Single ISO)

Para generar un isométrico de una sola línea o spool:

**Paso 1: Seleccionar línea**

1. Abrir Production Manager
2. En **Line List**, ubicar la línea deseada
   - Usar filtros si hay muchas líneas
   - Example: `1001-A-6"-CS-001`
3. Single-click para seleccionar

**Paso 2: Configurar opciones de generación**

1. En panel central, verificar configuración:
   - **Template:** ISO_Template.dwg
   - **Drawing Scale:** 1:50
   - **Sheet Size:** C (ANSI) o A2 (ISO)
2. Panel **Options:**
   - ✅ **Generate BOM:** Activar
   - ✅ **Show dimensions:** Activar
   - ✅ **Show weld symbols:** Activar (si aplica)
   - ⬜ **Show support locations:** Según requerimiento

**Paso 3: Vista previa (opcional)**

1. Click en **Preview** en panel derecho
2. Revisar:
   - Recorrido de tubería completo
   - Componentes identificados correctamente
   - No hay errores de conexión (líneas rojas)
3. Si hay errores, corregir en modelo 3D antes de generar

**Paso 4: Generar isométrico**

1. Click en **Create Isometric** (o botón verde de generación)
2. Diálogo de progreso muestra pasos:
   - Extracting model data... (5-10 seg)
   - Generating PCF file... (2-5 seg)
   - Creating isometric drawing... (10-20 seg)
   - Adding dimensions... (5 seg)
   - Creating BOM table... (3 seg)
3. Al completar: **Isometric created successfully**

**Paso 5: Revisar isométrico generado**

1. El isométrico se abre automáticamente en nueva pestaña
2. Verificar:
   - ✅ Todos los componentes presentes
   - ✅ Dimensiones correctas y legibles
   - ✅ BOM completa con cantidades correctas
   - ✅ Cajetín con información de línea
   - ✅ Símbolos de soldadura (si aplican)
3. Guardar isométrico: Se guarda automáticamente en carpeta ISO del proyecto

![Isométrico generado](../imagenes/leccion-21-iso-generado.png)

### 4.2 Regeneración de Isométricos

Cuando se modifica el modelo 3D (agregar válvula, cambiar routing), los isométricos existentes quedan desactualizados.

**Indicador de desactualización:**
- En Production Manager, líneas desactualizadas muestran ⚠️ amarillo
- Columna **Status:** "Out of Date"

**Regenerar isométrico:**

1. Seleccionar línea desactualizada en Line List
2. Right-click > **Regenerate Isometric**
3. Diálogo de confirmación: **"This will overwrite existing isometric. Continue?"**
   - Click **Yes** - Sobrescribe isométrico existente
   - Click **No** - Cancela
4. Proceso de regeneración (igual que generación inicial)
5. Al completar, revisar cambios en isométrico actualizado

**Comparación de revisiones:**

Para proyectos que requieren tracking de cambios:

1. Antes de regenerar, hacer copia del isométrico existente
2. Renombrar con sufijo de revisión: `ISO-1001-A-6-CS-001_Rev0.dwg`
3. Regenerar isométrico (se crea como Rev1)
4. Usar herramienta **Compare** de AutoCAD para ver diferencias

### 4.3 Exportación de Isométricos

**Formatos de exportación:**

**PDF:**
1. Abrir isométrico en Plant 3D
2. Comando: `EXPORTPDF` o Ribbon > Output > Export > PDF
3. Configurar:
   - Layer visibility: All layers
   - Color: Monochrome (blanco y negro) o Color
   - Quality: High
4. Guardar en carpeta: `[Project]\ISO\PDF\`

**DWF (Design Web Format):**
1. Output > Publish > DWF
2. Usar para revisión en Autodesk Design Review (gratis)
3. Permite markup y comentarios por revisores

**IFC (Industry Foundation Classes):**
1. Para interoperabilidad con otros software BIM
2. Output > Export > IFC
3. Configurar: **Piping Only** o **Full Model**

## 5. Generación de Isométricos por Lotes (Batch)

### 5.1 ¿Cuándo usar Batch Generation?

Batch generation es eficiente cuando:

- Generar isométricos de todo el proyecto (500+ líneas)
- Generar por área completa (Area 100: 50 líneas)
- Re-generar todos los isos después de cambios globales
- Procesamiento nocturno (overnight processing)

**Ventajas del batch:**
- Procesamiento desatendido (sin intervención)
- Generación paralela en equipos con múltiples cores
- Logging automático de errores y warnings
- Consistencia garantizada (mismos settings para todos)

### 5.2 Configuración de Batch Generation

**Paso 1: Seleccionar líneas para batch**

1. En Production Manager, Line List
2. **Método 1 - Selección múltiple:**
   - Hold Ctrl + Click en cada línea
   - O Hold Shift + Click para rango
3. **Método 2 - Filtros:**
   - Click en **Filter** (icono embudo)
   - Filtrar por: Area = "100", Size = "6", Spec = "PS-001"
   - Click **Apply Filter**
   - Todas las líneas filtradas quedan seleccionadas
4. **Método 3 - Seleccionar todas:**
   - Ctrl+A selecciona todas las líneas del proyecto

**Paso 2: Configurar opciones de batch**

1. Con líneas seleccionadas, click **Batch Options**
2. Diálogo **Batch Isometric Generation:**
   - **Processing Mode:**
     - Sequential: Una por una (más lento, menos RAM)
     - Parallel: Múltiples simultáneas (más rápido, más RAM)
   - **Number of threads:** Auto-detect (usa cores disponibles)
   - **Continue on error:** Activar (no detener batch si una falla)
   - **Generate log file:** Activar (crea log de proceso)

**Paso 3: Configuración de nomenclatura de archivos**

1. En Batch Options > **File Naming**
2. **Output Folder:** `[Project]\ISO\Drawings\`
3. **File Name Format:** `ISO-<LineNumber>.dwg`
   - Genera: `ISO-1001-A-6-CS-001.dwg`
4. **Overwrite existing:** Activar si es regeneración

**Paso 4: Configuración de revisiones**

1. En Batch Options > **Revision Control**
2. **Revision scheme:**
   - Numeric: 0, 1, 2, 3...
   - Alphabetic: A, B, C, D...
   - Date-based: 2026-01-15
3. **Increment revision:** Activar para auto-incrementar
4. **Revision attribute:** Campo en cajetín donde se muestra revisión

![Batch generation settings](../imagenes/leccion-21-batch-settings.png)

### 5.3 Ejecución de Batch Generation

**Iniciar batch:**

1. Con configuración completa, click **Start Batch Generation**
2. Diálogo de confirmación muestra:
   - Number of isometrics to generate: 127
   - Estimated time: 45 minutes (varía según complejidad)
3. Click **Start**

**Monitoreo de progreso:**

1. Ventana **Batch Progress** muestra:
   - Progress bar: 35/127 (27%)
   - Current isometric: ISO-1015-B-4-CS-002
   - Status: Generating dimensions...
   - Time elapsed: 12:34
   - Time remaining: ~32:15
2. **Log window** (panel inferior):
   - Mensajes de proceso
   - Warnings (advertencias, no críticos)
   - Errors (errores que impiden generación)

**Mensajes típicos en log:**

```
[12:34:15] Starting batch generation - 127 isometrics
[12:34:16] Processing ISO-1001-A-6-CS-001... OK (23 sec)
[12:34:39] Processing ISO-1001-A-6-CS-002... OK (18 sec)
[12:34:57] Processing ISO-1002-B-4-SS-001... WARNING: Missing insulation data
[12:35:10] Processing ISO-1003-A-8-CS-001... ERROR: Open connection at nozzle N1
[12:35:11] Skipping ISO-1003-A-8-CS-001 - See log for details
[12:35:12] Processing ISO-1004-B-3-CS-001... OK (15 sec)
...
[13:19:45] Batch complete: 125 successful, 2 failed
```

**Pausa y reanudación:**

- Click **Pause** para pausar batch (ej: liberar recursos)
- Click **Resume** para continuar desde donde se pausó
- Click **Cancel** para detener completamente (no recomendado)

### 5.4 Revisión de Resultados de Batch

Después de completar batch generation:

**Paso 1: Revisar Summary Report**

1. Production Manager > **Batch Results**
2. Pestaña **Summary:**
   - Total processed: 127
   - Successful: 125 (98.4%)
   - Failed: 2 (1.6%)
   - Warnings: 15 (11.8%)
   - Total time: 47:23

**Paso 2: Revisar isométricos con errores**

1. Pestaña **Failed Isometrics:**
   - ISO-1003-A-8-CS-001: Error - Open connection at nozzle N1
   - ISO-1025-B-6-CS-003: Error - Invalid component reference
2. Para cada error:
   - Click **View Details** para descripción completa
   - Click **Open Model** para ir a ubicación en 3D
   - Corregir error en modelo
   - Re-generar isométrico individual

**Paso 3: Revisar warnings (advertencias)**

1. Pestaña **Warnings:**
   - ISO-1002-B-4-SS-001: Missing insulation data
   - ISO-1007-A-10-CS-002: Cut length exceeds maximum spool length
   - ISO-1012-B-2-CS-001: Non-standard component detected
2. Warnings no impiden generación, pero requieren revisión:
   - Decidir si corregir modelo
   - O agregar nota manual en isométrico

**Paso 4: Exportar log completo**

1. Click **Export Log**
2. Formato: TXT o CSV
3. Guardar para documentación de proyecto: `[Project]\ISO\Logs\Batch_2026-01-15.log`

![Batch results report](../imagenes/leccion-21-batch-results.png)

## 6. Esquemas de Numeración de Isométricos

### 6.1 Importancia de la Numeración Consistente

Un proyecto de planta puede generar miles de isométricos. Sin un esquema de numeración lógico y consistente:

- Fabricantes no pueden identificar spools rápidamente
- Errores de instalación por confusión de números
- Dificultad en tracking de materiales y procurement
- Problemas durante commissioning y start-up

**Estándar ISO 15926** recomienda numeración que incluya:
- Identificación de proyecto
- Área de planta
- Número de línea
- Secuencia de spool

### 6.2 Esquemas Comunes de Numeración

**Esquema 1: Secuencial Simple**

Formato: `ISO-[LineNumber]-[Seq]`

Ejemplo:
- ISO-1001-A-6-CS-001
- ISO-1001-A-6-CS-002
- ISO-1002-B-4-SS-001

**Ventajas:** Simple, fácil de implementar
**Desventajas:** No refleja ubicación geográfica

**Esquema 2: Por Área**

Formato: `ISO-[Area]-[LineNumber]-[Seq]`

Ejemplo:
- ISO-100-1001-A-6-CS-001 (Area 100)
- ISO-200-2001-B-4-SS-001 (Area 200)
- ISO-300-3001-A-8-CS-001 (Area 300)

**Ventajas:** Agrupa isométricos por área de construcción
**Desventajas:** Números más largos

**Esquema 3: Con Código de Proyecto**

Formato: `[ProjectCode]-ISO-[LineNumber]-[Seq]`

Ejemplo:
- REFINERY-ISO-1001-A-6-CS-001
- POWERPLANT-ISO-2001-B-4-SS-001

**Ventajas:** Identifica proyecto en archivos compartidos
**Desventajas:** Nombres muy largos

**Esquema 4: Con Disciplina**

Formato: `ISO-[Discipline]-[LineNumber]-[Seq]`

Ejemplo:
- ISO-PIP-1001-A-6-CS-001 (Piping)
- ISO-STR-S1001-W12x26-001 (Structural)

**Ventajas:** Separa isométricos de diferentes disciplinas
**Desventajas:** Requiere codificación de disciplina

### 6.3 Configuración de Esquema Personalizado

**Paso 1: Acceder a Numbering Scheme Editor**

1. Production Manager > Settings > **Numbering Scheme**
2. Click **Edit Scheme** o **Create New Scheme**

**Paso 2: Definir formato de número**

1. **Scheme Name:** "Company Standard Scheme"
2. **Format String:** Usar variables predefinidas
   - `<ProjectName>`: Nombre de proyecto
   - `<Area>`: Área de planta
   - `<LineNumber>`: Número de línea completo
   - `<Sequence>`: Número secuencial
   - `<Date>`: Fecha actual
3. **Example Format:** `ISO-<Area>-<LineNumber>-<Sequence:000>`
   - Genera: `ISO-100-1001-A-6-CS-001`

**Paso 3: Configurar opciones de secuencia**

1. **Starting Number:** 001 (típico)
2. **Increment:** 1 (cada spool incrementa en 1)
3. **Reset sequence:** Opciones:
   - Never (secuencia continua: 001, 002, 003... 999)
   - By Line (reinicia en cada línea: cada línea empieza en 001)
   - By Area (reinicia en cada área)

**Paso 4: Prefijos y sufijos opcionales**

1. **Prefix:** Texto fijo al inicio
   - Example: "ISO-" (todos los isométricos empiezan con ISO-)
2. **Suffix:** Texto fijo al final
   - Example: "-REV0" (indica revisión inicial)
3. **Separator:** Carácter separador
   - Dash (-): ISO-100-1001-001
   - Underscore (_): ISO_100_1001_001
   - None: ISO1001001001

**Paso 5: Aplicar esquema**

1. Click **Apply Scheme**
2. Opciones de aplicación:
   - **New isometrics only:** Solo isométricos nuevos
   - **All isometrics:** Renumera todos (¡cuidado!)
   - **Selected lines:** Solo líneas seleccionadas
3. Click **OK**
4. Production Manager renumera según esquema

![Numbering scheme editor](../imagenes/leccion-21-numbering-scheme.png)

### 6.4 Validación y Verificación de Numeración

**Detectar duplicados:**

1. Production Manager > **Tools** > **Validate Numbering**
2. Plant 3D verifica:
   - No hay números duplicados
   - Secuencia sin gaps (001, 002, 003... sin saltos)
   - Formato consistente en todo el proyecto
3. Reporte de validación:
   - ✅ No duplicates found
   - ⚠️ Gap detected: ISO-100-1001-001, ISO-100-1001-003 (falta 002)
   - ❌ Duplicate: ISO-200-2001-001 (aparece 2 veces)

**Corrección de numeración:**

Si se detectan problemas:

1. **Renumber All:** Production Manager > Tools > Renumber All Isometrics
2. Configurar:
   - Starting from: 001
   - Apply scheme: Company Standard Scheme
3. Click **Execute** - Renumera automáticamente sin duplicados

## 7. Consejos Profesionales para Generación de Isométricos

💡 **Tip 1: Validar modelo antes de generar isos**
Siempre ejecute validación del modelo (Data Manager > Validate) antes de batch generation. Corregir errores antes evita regeneraciones costosas.

💡 **Tip 2: Generar isos en off-peak hours**
Para proyectos grandes (500+ isos), configure batch generation para ejecutarse durante la noche. Libera estaciones de trabajo durante el día.

💡 **Tip 3: Mantener biblioteca de plantillas**
Cree plantillas de isométricos para diferentes tipos de proyectos: refinerías, plantas de gas, plantas químicas. Cada industria tiene preferencias de presentación.

💡 **Tip 4: Configurar spools para fabricación real**
Consulte con fabricantes sobre longitudes máximas de spool que pueden manejar en taller (típicamente 40-50 pies). Configure auto-grouping según estos límites.

💡 **Tip 5: Usar nomenclatura significativa**
Incluya información crítica en número de isométrico: área, servicio, material. Facilita identificación rápida en campo.

⚠️ **Advertencia: Regeneración masiva**
Regenerar todos los isométricos de un proyecto grande puede tomar horas. Siempre haga backup de carpeta ISO antes de regeneración masiva.

⚠️ **Advertencia: Revisiones de isométricos**
En proyectos con control de revisiones estricto, NUNCA sobrescriba isométricos aprobados. Incremente número de revisión y mantenga versiones anteriores archivadas.

⚠️ **Advertencia: PCF file location**
Asegúrese que carpeta de PCF tenga suficiente espacio en disco. Proyecto grande puede generar varios GB de archivos PCF temporales.

## Ejercicio Práctico

### Ejercicio 21: Generación de Paquete Completo de Isométricos

**Objetivo:** Generar un conjunto completo de isométricos para un área de planta, aplicando agrupación lógica y esquema de numeración profesional.

**Escenario:**
Usted es el ingeniero de documentación de un proyecto de ampliación de refinería. Debe generar todos los isométricos del Area 100 (Reactor Section) que contiene 25 líneas de tubería de diversos diámetros (2" a 12") y materiales (CS, SS316, Alloy 625).

**Instrucciones:**

**Parte 1: Preparación y agrupación (15 minutos)**

1. Abrir proyecto de práctica: `RefineriaAmplaciacion.xml`
2. Verificar que modelo 3D del Area 100 está completo
3. Ejecutar validación: Data Manager > Validate Model
4. Corregir cualquier error reportado
5. En Production Manager, filtrar líneas del Area 100 (25 líneas)
6. Configurar auto-grouping:
   - Maximum spool length: 45 feet
   - Split at: Flanges and Gate Valves
   - Result esperado: ~75 spools total
7. Verificar agrupación: expandir cada línea y revisar splits

**Parte 2: Configuración de generación (10 minutos)**

8. Configurar Production Manager Settings:
   - Template: `Refinery_ISO_Template_A2.dwg`
   - Scale: 1:50
   - Sheet Size: A2 (ISO 420×594)
   - Dimension Style: ISO-25
   - BOM Style: Detailed with weights
9. Configurar esquema de numeración:
   - Format: `ISO-100-<LineNumber>-<Sequence:000>`
   - Starting number: 001
   - Reset by line: Yes
10. Aplicar esquema a líneas del Area 100

**Parte 3: Generación de isométricos (15 minutos)**

11. Generar un isométrico de prueba:
    - Seleccionar línea: `1001-A-6-CS-001`
    - Generate single isometric
    - Revisar resultado: dimensiones, BOM, cajetín
12. Si isométrico de prueba es satisfactorio, proceder con batch:
    - Seleccionar todas las líneas/spools del Area 100 (~75)
    - Configure batch options:
      - Parallel processing: 4 threads
      - Continue on error: Yes
      - Generate log: Yes
    - Start batch generation
13. Monitorear progreso (tiempo estimado: 25-30 minutos)

**Parte 4: Revisión de resultados (5 minutos)**

14. Revisar batch results:
    - Verificar: X successful, Y failed
    - Revisar log de errores y warnings
15. Para isométricos fallidos:
    - Identificar causa de error en log
    - Documentar en tabla de errores
16. Seleccionar 5 isométricos al azar y verificar:
    - Numeración correcta
    - BOM completa
    - Dimensiones legibles
    - No hay componentes faltantes

**Tiempo estimado total:** 45 minutos

**Entregables:**

1. Carpeta ISO con ~75 isométricos generados (DWG)
2. Batch generation log (TXT)
3. Reporte de errores (si aplica)
4. Capturas de pantalla de:
   - Production Manager con líneas agrupadas
   - Un isométrico completo generado
   - Batch results summary

**Criterios de evaluación:**

- Agrupación lógica de spools (25%)
- Configuración correcta de Production Manager (20%)
- Esquema de numeración implementado correctamente (15%)
- Batch generation ejecutado exitosamente (25%)
- Calidad de isométricos generados (15%)

**Puntuación:** 100 puntos total

Consulte el archivo [ejercicios.md](../ejercicios.md) para archivos de práctica y soluciones detalladas.

## Evaluación

### Preguntas de Evaluación

**Pregunta 1:** ¿Cuál es el propósito principal de un isométrico de tubería comparado con un modelo 3D?

a) Reemplazar completamente el modelo 3D
b) Proporcionar documentación de fabricación con dimensiones de corte exactas
c) Mostrar la tubería en colores para mejor visualización
d) Crear animaciones del proceso de instalación

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Proporcionar documentación de fabricación con dimensiones de corte exactas

Explicación: Los isométricos son dibujos 2D en proyección isométrica diseñados específicamente para fabricación en taller. Contienen dimensiones precisas de corte, lista de materiales y especificaciones que permiten a fabricantes prefabricar spools de tubería sin necesidad de acceder al modelo 3D completo.
</details>

**Pregunta 2:** ¿Qué archivo intermedio genera Plant 3D para comunicar información al motor de generación de isométricos?

a) DWG file
b) XML file
c) PCF (Piping Component File)
d) IFC file

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: c) PCF (Piping Component File)

Explicación: El PCF es un formato de datos de texto que contiene coordenadas 3D, tipos de componentes, atributos y conexiones. Plant 3D extrae datos del modelo 3D y los convierte a PCF, que luego es procesado por el motor de isométricos para generar el dibujo final.
</details>

**Pregunta 3:** ¿Cuál es el criterio más común para dividir líneas largas en spools individuales para isométricos?

a) Color de la tubería
b) Ubicación de bridas y longitud máxima de spool
c) Material de la tubería exclusivamente
d) Orden alfabético de líneas

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Ubicación de bridas y longitud máxima de spool

Explicación: Las bridas son puntos naturales de división porque representan conexiones atornilladas que se ensamblan en campo. Adicionalmente, la longitud máxima de spool está limitada por capacidades de fabricación en taller y transporte (típicamente 40-50 pies).
</details>

**Pregunta 4:** En batch generation, ¿qué modo de procesamiento es más rápido para proyectos grandes en equipos con múltiples cores de CPU?

a) Sequential mode
b) Parallel mode
c) Single-threaded mode
d) No hay diferencia

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Parallel mode

Explicación: Parallel mode utiliza múltiples threads de CPU para generar varios isométricos simultáneamente, aprovechando procesadores multi-core modernos. Esto puede reducir el tiempo de generación en 50-70% comparado con sequential mode, especialmente en proyectos con cientos de isométricos.
</details>

**Pregunta 5:** ¿Qué estándar internacional cubre la integración de datos del ciclo de vida en plantas de proceso, incluyendo isométricos?

a) ASME B31.3
b) ISO 15926
c) API 610
d) AWS D1.1

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) ISO 15926

Explicación: ISO 15926 es el estándar internacional para integración de datos del ciclo de vida de plantas de proceso. Define estructura de información para isométricos que permite intercambio de datos entre diferentes sistemas (CAD, ERP, CMMS) manteniendo integridad y trazabilidad.
</details>

## Resumen

En esta lección ha aprendido:

- ✅ Los fundamentos de dibujos isométricos y su propósito en fabricación de tuberías
- ✅ Configuración y uso del Production Manager para generación de isométricos
- ✅ Agrupación lógica de líneas en spools manejables para fabricación
- ✅ Generación de isométricos individuales y por lotes (batch processing)
- ✅ Implementación de esquemas de numeración profesionales según estándares industriales

La generación eficiente de isométricos es una habilidad crítica que diferencia proyectos exitosos de proyectos con retrasos costosos. La automatización de Plant 3D, combinada con configuración experta, permite producir documentación de fabricación precisa en fracción del tiempo que requeriría dibujo manual.

## Próxima Lección

En la **Lección 22: Estilos de isométricos y configuración de plantillas**, aprenderá a personalizar completamente la apariencia y contenido de sus isométricos, crear plantillas DWG reutilizables, configurar cajetines personalizados, estilos de anotación y dimensionamiento para cumplir con los estándares específicos de su compañía u organización.

---

**Lección 21 de 30 - Módulo 5 de 6**
AutoCAD Plant 3D 2026 - Curso Avanzado
DISTMAH ATC - Authorized Training Center
