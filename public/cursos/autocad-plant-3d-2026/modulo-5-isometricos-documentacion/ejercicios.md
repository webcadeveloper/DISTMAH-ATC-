# Ejercicios Prácticos - Módulo 5: Isométricos y Documentación

## Información General

Este archivo contiene los **5 ejercicios prácticos** del Módulo 5, diseñados para reforzar las habilidades adquiridas en cada lección mediante aplicación práctica en escenarios realistas de proyectos de plantas industriales.

**Requisitos previos:**
- Completar Lecciones 21-25 del Módulo 5
- Tener instalado AutoCAD Plant 3D 2026
- Modelo 3D de proyecto completado (de Módulos anteriores)
- Spec database configurada correctamente

**Estructura de cada ejercicio:**
1. **Escenario:** Contexto del proyecto y requisitos del cliente
2. **Objetivos:** Qué debe lograr al completar el ejercicio
3. **Archivos necesarios:** Archivos de inicio proporcionados
4. **Procedimiento paso a paso:** Guía detallada para completar el ejercicio
5. **Entregables:** Qué archivos debe producir
6. **Criterios de evaluación:** Cómo se evalúa la calidad del trabajo
7. **Solución sugerida:** Pasos clave de la solución (al final del archivo)

---

## Ejercicio 21: Generar Paquete de Isométricos para Fabricación

**Tiempo estimado:** 45 minutos
**Dificultad:** ⭐⭐⭐ (Intermedio)
**Lección asociada:** Lección 21 - Generación de Isométricos

### Escenario

Usted es el **Lead Piping Designer** para el proyecto "Atlantic Refinery Expansion". El contratista de fabricación de tubería (ABC Steel Fabricators) requiere un paquete completo de isométricos del área de Crude Distillation Unit (CDU - Area 1001) para iniciar prefabricación de spools.

El área CDU contiene:
- **25 líneas de tubería** de proceso (diámetros 2" a 12")
- **Material:** Predominantemente Carbon Steel (CS) con algunas líneas Stainless Steel 316L (SS316L)
- **Servicios:** Crude oil, naphtha, diesel, gas oil
- **Presiones:** 150 PSIG a 600 PSIG
- **Temperaturas:** Ambiente a 400°F

El contratista requiere:
1. Isométricos individuales para cada línea de tubería
2. Numeración correlativa: ISO-1001-XXX (donde XXX es secuencial)
3. Formato: DWG y PDF
4. Agrupación: Por servicio (Crude, Naphtha, Diesel, Gas Oil)
5. BOM incluida en cada isométrico

### Objetivos

Al completar este ejercicio, usted será capaz de:

✅ Configurar Production Manager para generación de isométricos
✅ Establecer esquema de numeración de isométricos
✅ Generar isométricos por lotes (batch processing)
✅ Organizar isométricos en carpetas por servicio
✅ Exportar a PDF para revisión del cliente

### Archivos Necesarios

**Archivo de inicio:**
- `CDU_Model_Complete.dwg` (modelo 3D del área CDU)
- `ISO_Template_A1.dwt` (plantilla de isométrico configurada)
- `ISO_Style_Fabrication.isoconfig` (estilo de isométrico)

**Archivos a entregar:**
- 25 archivos DWG de isométricos individuales
- 25 archivos PDF correspondientes
- Reporte de generación (log file)

### Procedimiento Paso a Paso

#### Parte 1: Configuración del Production Manager (15 min)

**1.1 Abrir Production Manager:**

```
1. Abrir modelo 3D:
   File → Open → CDU_Model_Complete.dwg

2. Iniciar Production Manager:
   Ribbon: Output Tab → Isometrics Panel → Production Manager
   (O comando: PRODUCTIONMANAGER)

3. Verificar configuración del proyecto:
   Production Manager → Project Settings
   ├─ Project Name: Atlantic Refinery CDU
   ├─ Project Number: ARCDUWP-2026
   ├─ Output Folder: C:\Projects\AtlanticRefinery\Isometrics\
   └─ Template: ISO_Template_A1.dwt
```

**1.2 Configurar esquema de numeración:**

```
Production Manager → Numbering Scheme

Isometric Numbering Format:
  ISO-{AREA}-{SERVICE_CODE}-{SIZE}-{MATERIAL}-{SEQUENCE}

Donde:
  {AREA} = 1001 (CDU)
  {SERVICE_CODE} = A (Crude), B (Naphtha), C (Diesel), D (Gas Oil)
  {SIZE} = Diámetro nominal (2", 4", 6", 8", 12")
  {MATERIAL} = CS (Carbon Steel), SS316L (Stainless)
  {SEQUENCE} = 001, 002, 003... (secuencial por combinación única)

Ejemplo resultante: ISO-1001-A-6"-CS-001

Starting Number: 001
Increment: 1
☑ Auto-assign to new isometrics
☑ Preserve numbering for existing isometrics
```

**1.3 Configurar agrupación de líneas:**

```
Production Manager → Line Grouping

Group Lines By:
☑ Service (Primary grouping)
☑ Size (Secondary grouping)
☐ Material (No - incluir en mismo iso diferentes materiales si es misma línea)

Create Separate Isometric For:
☑ Each pipeline with different Line Number
☐ Branch connections (No - incluir en mismo iso)
☑ Lines crossing area boundaries

Result:
  - Una línea = un isométrico
  - Ramales incluidos en isométrico de línea principal
  - Transiciones de material dentro de misma línea = mismo isométrico
```

#### Parte 2: Selección de Líneas y Generación (20 min)

**2.1 Filtrar líneas del área CDU:**

```
Production Manager → Select Lines

Filter Criteria:
├─ Area: 1001 (CDU only)
├─ Service: All (Crude, Naphtha, Diesel, Gas Oil)
├─ Size: All (2" through 12")
└─ Status: ⦿ All lines ○ Lines without isometrics ○ Modified lines

[Apply Filter]

Result: Lista de 25 líneas en panel de selección
  - 1001-A-6"-CS (Crude Oil Feed)
  - 1001-A-8"-CS (Crude Oil Transfer)
  - 1001-B-4"-CS (Naphtha Product)
  - 1001-C-6"-CS (Diesel Product)
  - 1001-D-12"-CS (Gas Oil Feed)
  - ... (20 líneas adicionales)
```

**2.2 Seleccionar todas las líneas:**

```
En panel de líneas:
☑ Select All (checkbox en header)

Verificar selección:
  Selected: 25 lines
  Total length: ~1,250 meters
  Estimated isos: 25 (one per line)

[Next]
```

**2.3 Configurar opciones de generación:**

```
Generation Options:

Output Format:
☑ DWG (AutoCAD Drawing)
☑ PDF (Portable Document Format)
☐ DWF (Design Web Format)

DWG Options:
  ☑ Use template: ISO_Template_A1.dwt
  ☑ Purge unused objects
  ☑ Save as AutoCAD 2018 format (for compatibility)

PDF Options:
  ☑ High quality (600 DPI)
  ☑ Include hyperlinks
  ☑ Embed fonts
  Page size: ⦿ From layout ○ Custom

BOM Options:
  ☑ Include BOM in isometric
  BOM location: ⦿ Bottom right ○ Separate sheet
  ☑ Include weights
  ☑ Include quantities

Processing:
  ⦿ Batch process all selected lines
  ○ Process individually (interactive)
  Threads: 4 (parallel processing)
```

**2.4 Generar isométricos:**

```
[Generate Isometrics]

Production Manager inicia proceso:
  1. Extrae geometría 3D de cada línea
  2. Genera archivos PCF intermedios
  3. Crea isométricos DWG desde plantilla
  4. Puebla BOM automáticamente
  5. Numera según esquema establecido
  6. Exporta a PDF

Progress:
  ╔════════════════════════════════════════╗
  ║ Generating Isometrics...               ║
  ║ Line 12 of 25: 1001-C-6"-CS            ║
  ║ ████████████████░░░░░░░░░░░░ 48%       ║
  ║                                        ║
  ║ Elapsed: 8m 32s                        ║
  ║ Estimated remaining: 9m 15s            ║
  ╚════════════════════════════════════════╝

Tiempo total: ~18 minutos para 25 isométricos
```

**2.5 Revisar resultados:**

```
Al completar, Production Manager muestra:

Generation Summary:
├─ Total lines processed: 25
├─ Isometrics created: 25
├─ DWG files: 25 (saved to Output folder)
├─ PDF files: 25 (saved to Output\PDFs\)
├─ Errors: 0
├─ Warnings: 3
│  └─ [View Warnings]
│     - Line 1001-D-12"-CS: Support spacing >10m (verificar)
│     - Line 1001-B-4"-CS: Valve tag missing (agregar)
│     - Line 1001-A-8"-CS: Insulation spec not defined (revisar)
└─ Log file: C:\Projects\AtlanticRefinery\Isometrics\Generation_Log_2025-11-24.txt

[Open Output Folder] [View Log] [Close]
```

#### Parte 3: Organización y Verificación (10 min)

**3.1 Organizar archivos por servicio:**

```
Windows Explorer:
C:\Projects\AtlanticRefinery\Isometrics\

Crear subcarpetas:
  \Crude\
  \Naphtha\
  \Diesel\
  \GasOil\

Mover archivos según servicio (basado en código en nombre):
  ISO-1001-A-* → \Crude\    (8 archivos DWG + 8 PDF)
  ISO-1001-B-* → \Naphtha\  (6 archivos DWG + 6 PDF)
  ISO-1001-C-* → \Diesel\   (7 archivos DWG + 7 PDF)
  ISO-1001-D-* → \GasOil\   (4 archivos DWG + 4 PDF)

Resultado:
C:\Projects\AtlanticRefinery\Isometrics\
├─ Crude\
│  ├─ ISO-1001-A-6"-CS-001.dwg
│  ├─ ISO-1001-A-6"-CS-001.pdf
│  ├─ ISO-1001-A-8"-CS-002.dwg
│  ├─ ISO-1001-A-8"-CS-002.pdf
│  └─ ... (14 archivos más)
├─ Naphtha\
│  └─ ... (12 archivos)
├─ Diesel\
│  └─ ... (14 archivos)
└─ GasOil\
   └─ ... (8 archivos)
```

**3.2 Verificación de calidad (spot check):**

```
Abrir 3 isométricos aleatoriamente para verificar:

1. ISO-1001-A-6"-CS-001.dwg (Crude Oil Feed):
   ☑ Geometría correcta comparada con modelo 3D
   ☑ BOM completa (pipe, elbows, tees, valves, flanges)
   ☑ Dimensiones centro-a-centro presentes
   ☑ Numeración de isométrico correcta
   ☑ Title block poblado correctamente
   ☑ PDF generado correctamente

2. ISO-1001-B-4"-CS-003.dwg (Naphtha Product):
   ☑ Verificación similar...

3. ISO-1001-D-12"-CS-001.dwg (Gas Oil Feed):
   ☑ Verificación similar...

Si verificación pasa → Paquete listo para entrega
Si errores encontrados → Corregir y re-generar isométricos afectados
```

### Entregables

Al finalizar, debe entregar:

1. **Carpeta "Isometrics" organizada:**
   ```
   Isometrics/
   ├─ Crude/ (16 archivos: 8 DWG + 8 PDF)
   ├─ Naphtha/ (12 archivos: 6 DWG + 6 PDF)
   ├─ Diesel/ (14 archivos: 7 DWG + 7 PDF)
   ├─ GasOil/ (8 archivos: 4 DWG + 4 PDF)
   └─ Generation_Log_2025-11-24.txt

   Total: 50 archivos (25 DWG + 25 PDF) + 1 log
   ```

2. **Reporte de entrega:**
   - Documento Word/PDF listando los 25 isométricos generados
   - Tabla con: ISO Number, Line Number, Service, Size, Material, File Size, Status
   - Resumen de warnings y acciones correctivas tomadas

3. **Checklist de calidad:**
   - Verificación de 3 isométricos aleatorios (screenshots de verificación)
   - Confirmación de cumplimiento de estándares de empresa

### Criterios de Evaluación

Su ejercicio será evaluado según los siguientes criterios:

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Configuración correcta** | 20 | Production Manager configurado apropiadamente |
| **Numeración consistente** | 15 | Esquema de numeración aplicado correctamente |
| **Generación exitosa** | 25 | 25/25 isométricos generados sin errores críticos |
| **Calidad de isométricos** | 20 | Geometría, BOM, dimensiones correctas |
| **Organización** | 10 | Archivos organizados por servicio apropiadamente |
| **Formato de salida** | 10 | DWG y PDF de calidad profesional |
| **TOTAL** | **100** | |

**Criterio de aprobación:** 80 puntos o más

### Notas Importantes

⚠️ **Errores comunes a evitar:**
1. Olvidar configurar esquema de numeración → Números genéricos inútiles
2. No filtrar por área → Generar isométricos de áreas incorrectas
3. Configuración de plantilla incorrecta → Isométricos con formato inadecuado
4. No verificar warnings → Problemas de calidad no detectados
5. No organizar archivos → Dificulta trabajo del fabricante

💡 **Consejos para éxito:**
- Hacer backup del modelo 3D antes de generación masiva
- Revisar 2-3 isométricos individuales antes de batch process
- Mantener log file para troubleshooting futuro
- Comunicar warnings al líder del proyecto para resolución
- Archivar versión Rev 0 antes de modificaciones futuras

---

## Ejercicio 22: Crear Plantillas Personalizadas de Empresa

**Tiempo estimado:** 40 minutos
**Dificultad:** ⭐⭐⭐⭐ (Avanzado)
**Lección asociada:** Lección 22 - Estilos de Isométricos y Configuración de Plantillas

### Escenario

Usted es el **CAD Manager** de "Pacific Engineering & Construction", empresa especializada en proyectos de plantas LNG (Gas Natural Licuado). La empresa acaba de ganar contrato para "Pacific LNG Terminal Phase 2" y requiere implementar plantillas corporativas de isométricos que cumplan:

**Requisitos del cliente (Pacific Energy Corp):**
- Formato de hoja: ISO A1 (594 × 841 mm)
- Unidades: Métricas (milímetros)
- Estándares: ISO 15926, ISO 5261, ASME B31.3
- Idioma: Español e inglés (dual language)
- Logo del cliente debe aparecer en todos los isométricos

**Requisitos corporativos (Pacific Engineering):**
- Logo de empresa en esquina superior izquierda
- Numeración específica: ISO-[PlantCode]-[LineNumber]-[Rev]
- BOM con columna adicional para "Trace Heating" (calefacción de trazas)
- Tabla de revisiones con capacidad para 5 revisiones
- Aprobaciones: Dibujante, Revisor Técnico, Aprobador de Proyecto

### Objetivos

Al completar este ejercicio, usted será capaz de:

✅ Diseñar cajetín (title block) personalizado con identidad corporativa
✅ Crear bloques con atributos para auto-población de datos
✅ Configurar layers según estándares ISO 128-24
✅ Establecer estilos de texto y dimensión ISO-compliant
✅ Guardar template reutilizable (.dwt) con toda la configuración

### Procedimiento Paso a Paso

#### Parte 1: Configuración de Layers (10 min)

**1.1 Crear estructura de layers:**

```
Command: LAYER (o LA)

Layer Properties Manager → New Layer

Crear los siguientes layers:

| Layer Name | Color | Linetype | Lineweight | Descripción |
|------------|-------|----------|------------|-------------|
| ISO_PIPE_MAIN | 7 (White) | Continuous | 0.50mm | Tubería principal |
| ISO_PIPE_BRANCH | 7 (White) | Continuous | 0.35mm | Ramales |
| ISO_COMPONENTS | 1 (Red) | Continuous | 0.25mm | Válvulas, fittings |
| ISO_DIMENSIONS | 2 (Yellow) | Continuous | 0.18mm | Dimensiones |
| ISO_ANNOTATIONS | 3 (Green) | Continuous | 0.18mm | Notas, callouts |
| ISO_BOM | 4 (Cyan) | Continuous | 0.25mm | Tabla de materiales |
| ISO_CENTERLINES | 5 (Blue) | CENTER | 0.13mm | Líneas de centro |
| ISO_WELD_SYMBOLS | 1 (Red) | Continuous | 0.25mm | Símbolos de soldadura |
| ISO_TITLEBLOCK | 7 (White) | Continuous | 0.35mm | Cajetín |
| ISO_TITLEBLOCK_LOGO | 7 (White) | Continuous | 0.50mm | Logos |
| ISO_GRID | 8 (Gray) | Continuous | 0.13mm | Grilla referencia |
| ISO_VIEWPORT | 6 (Magenta) | Continuous | 0.25mm | Marco viewport |
| DEFPOINTS | DEFPOINTS | Continuous | Default | Puntos definición |

[OK]
```

**1.2 Guardar configuración de layers:**

```
Command: -LAYER
Option: State
Save state name: ISO_LAYERS_STANDARD
[Enter]

(Esto guarda el estado de layers para reutilización futura)
```

#### Parte 2: Estilos de Texto (5 min)

**2.1 Crear familia de estilos de texto:**

```
Command: STYLE

Text Style Manager → New...

Crear estilos:

1. ISO_TEXT_MAIN:
   Font: Romans.shx (AutoCAD single-stroke)
   Height: 0 (variable)
   Width Factor: 1.0
   Oblique Angle: 0°
   ☑ Annotative

2. ISO_TEXT_TITLE:
   Font: Romans.shx
   Height: 0
   Width Factor: 1.0
   (Para títulos principales en cajetín)

3. ISO_TEXT_DIMENSION:
   Font: Romans.shx
   Height: 0
   Width Factor: 1.0
   (Para texto de cotas)

4. ISO_TEXT_NOTE:
   Font: Romans.shx
   Height: 0
   Width Factor: 1.0
   (Para notas técnicas)

5. ISO_TEXT_BOM:
   Font: Romans.shx
   Height: 0
   Width Factor: 0.9 (ligeramente condensado para tablas)

[Apply] [Close]
```

#### Parte 3: Estilos de Dimensión (5 min)

**3.1 Crear dimension style:**

```
Command: DIMSTYLE

New → ISO_DIM_STANDARD

Configuración según Lección 22, sección 3.5:
  - Lines: Extension offset 1mm, extend beyond 1.5mm
  - Symbols: Closed filled arrows, 2.5mm size
  - Text: ISO_TEXT_DIMENSION, 2.5mm height, Above centered
  - Primary Units: Decimal, Precision 0 (enteros mm)

[OK] [Set Current] [Close]
```

#### Parte 4: Diseño de Cajetín (15 min)

**4.1 Crear geometría del cajetín:**

```
Command: RECTANG
First corner: 0,0
Other corner: 420,297 (para hoja A1 en esquina inferior derecha)

Command: LINE
[Dibujar divisiones internas del cajetín según diseño:]

Layout del cajetín (420mm × 297mm):

┌──────────────────────────────────────────────────────────────┐
│ [LOGO Pacific Eng] │ PROJECT: Pacific LNG Terminal Phase 2   │
│ 50×50mm            │ CLIENT: Pacific Energy Corp             │
│                    │ LOCATION: Buenaventura, Colombia        │
│                    │ CONTRACT: PEC-LNG-PH2-2026              │
├────────────────────┴─────────────────────────────────────────┤
│ ISOMETRIC DRAWING                                            │
│                                                              │
│ ISO NUMBER: _______________  REV: __                        │
│ LINE NUMBER: _______________                                │
│ SERVICE: _______________________________________________    │
│ FLUID: _______________                                      │
│ OPER TEMP: __________ °C (____°F)                           │
│ OPER PRESS: __________ bar (____PSIG)                       │
│ TEST PRESS: __________ bar Hydro                            │
│ MATERIAL: _______________________________________________    │
│ PIPE SPEC: _______________                                  │
│ INSULATION: _______________                                 │
│ TRACE HEATING: ⬜ Electric  ⬜ Steam  ⬜ None               │
├──────────────────────────────────────────────────────────────┤
│ REVISION HISTORY                                             │
│ REV │ DESCRIPTION       │ DATE       │ BY  │ CHK │ APP      │
│  0  │                   │            │     │     │          │
│  1  │                   │            │     │     │          │
│  2  │                   │            │     │     │          │
├──────────────────────────────────────────────────────────────┤
│ DRAWN: ________ DATE: ________ CHK: ________ DATE: ________ │
│ APP: ________ DATE: ________                                 │
├──────────────────────────────────────────────────────────────┤
│ SHEET __ OF __  │ SCALE: ______ │ SIZE: A1  │ DWG NO: _____ │
│ Pacific Engineering & Construction - Authorized ASME        │
└──────────────────────────────────────────────────────────────┘

Layer: ISO_TITLEBLOCK
```

**4.2 Insertar logos (placeholders):**

```
Para logo de Pacific Engineering:
Command: RECTANG
First corner: 10,240 (esquina superior izquierda del cajetín)
Other corner: 60,290
Text inside: "LOGO PACIFIC ENG"
Layer: ISO_TITLEBLOCK_LOGO

Para logo del cliente:
Command: RECTANG
First corner: 350,240
Other corner: 410,290
Text inside: "LOGO CLIENTE"
Layer: ISO_TITLEBLOCK_LOGO

(En implementación real, insertar archivos .PNG o .DWG de logos reales)
```

**4.3 Crear atributos para campos variables:**

```
Command: ATTDEF (Attribute Definition)

Crear atributo para cada campo variable:

1. ISO_NUMBER:
   Tag: ISO_NUMBER
   Prompt: Enter ISO Number
   Default: ISO-PH2-XXXX-X-XX-XXX
   Text Style: ISO_TEXT_TITLE
   Height: 5mm
   Justification: Left
   Position: En campo "ISO NUMBER:"
   Mode: ☐ Invisible ☑ Verify ☐ Preset

2. LINE_NUMBER:
   Tag: LINE_NUMBER
   Prompt: Enter Line Number
   Default: XXXX-X-XX-XXX
   Height: 5mm
   Position: En campo "LINE NUMBER:"

3. SERVICE:
   Tag: SERVICE
   Prompt: Enter Service Description
   Default: LNG Transfer
   Height: 3.5mm
   Position: En campo "SERVICE:"

4. FLUID:
   Tag: FLUID
   Prompt: Enter Fluid Type
   Default: Liquefied Natural Gas
   Height: 3.5mm

5. OPER_TEMP_C:
   Tag: OPER_TEMP_C
   Prompt: Operating Temperature °C
   Default: -162
   Height: 3.5mm

6. OPER_TEMP_F:
   Tag: OPER_TEMP_F
   Prompt: Operating Temperature °F
   Default: -260
   Height: 3.5mm

7. OPER_PRESS_BAR:
   Tag: OPER_PRESS_BAR
   Prompt: Operating Pressure bar
   Default: 10
   Height: 3.5mm

8. OPER_PRESS_PSIG:
   Tag: OPER_PRESS_PSIG
   Prompt: Operating Pressure PSIG
   Default: 145
   Height: 3.5mm

9. TEST_PRESS:
   Tag: TEST_PRESS
   Prompt: Test Pressure bar
   Default: 15
   Height: 3.5mm

10. MATERIAL:
    Tag: MATERIAL
    Prompt: Material Specification
    Default: SS316L ASTM A312
    Height: 3.5mm

11. PIPE_SPEC:
    Tag: PIPE_SPEC
    Prompt: Pipe Specification
    Default: LNG-PS-001 Rev.2
    Height: 3.5mm

12. INSULATION:
    Tag: INSULATION
    Prompt: Insulation Type
    Default: PUF 100mm
    Height: 3.5mm

13-15. TRACE_HEATING_ELECTRIC, TRACE_HEATING_STEAM, TRACE_HEATING_NONE:
    (Checkboxes implementados como bloques)

16. DRAWN_BY:
    Tag: DRAWN_BY
    Default: {CurrentUser}
    Height: 3mm

17. DRAWN_DATE:
    Tag: DRAWN_DATE
    Default: {CurrentDate}
    Height: 3mm

18-20. CHK_BY, CHK_DATE, APP_BY, APP_DATE:
    (Similar a DRAWN_BY/DATE)

21. SHEET_NUMBER:
    Tag: SHEET_NUMBER
    Default: 1 OF 1
    Height: 3mm

22. SCALE:
    Tag: SCALE
    Default: 1:20
    Height: 3mm

23. DWG_NUMBER:
    Tag: DWG_NUMBER
    Default: {ISO_NUMBER}
    Height: 3mm

[Repetir ATTDEF para cada atributo]
```

**4.4 Crear bloque del cajetín:**

```
Command: BLOCK

Block Definition:
├─ Name: TITLE_BLOCK_PACIFIC_LNG_A1
├─ Base point: 0,0 (esquina inferior izquierda)
├─ Objects: [Seleccionar todo el cajetín con líneas y atributos]
├─ ☑ Convert to block
├─ ☑ Delete original objects
├─ ☐ Allow exploding (NO - proteger integridad)
└─ Description: Title block for Pacific LNG project isometrics, A1 size

[OK]
```

#### Parte 5: Inserción en Layout y Guardado (5 min)

**5.1 Configurar layout:**

```
Layout Tab: Layout1 → Rename to "Isometric_A1"

Command: PAGESETUP
Page Setup: Isometric_A1
├─ Printer: DWG To PDF.pc3
├─ Paper size: ISO A1 (594 × 841mm)
├─ Plot area: Layout
├─ Plot scale: 1:1 (escala real del layout)
├─ Plot style: ISO_PlotStyle.ctb
└─ [OK]
```

**5.2 Insertar bloque de cajetín en layout:**

```
Activar Layout tab: Isometric_A1

Command: INSERT
Block: TITLE_BLOCK_PACIFIC_LNG_A1
Insertion point: 421,0 (esquina inferior derecha de hoja A1)
  (Offset de 421mm desde borde izquierdo, 0mm desde borde inferior)
Scale: 1.0
Rotation: 0

Completar atributos con valores por defecto:
[Enter para cada atributo usando defaults configurados]

Resultado: Cajetín insertado en esquina inferior derecha de layout
```

**5.3 Guardar como template:**

```
Command: SAVEAS

Files of type: AutoCAD Drawing Template (*.dwt)

File name: Pacific_LNG_Isometric_Template_A1.dwt

Location: C:\Templates\PacificEngineering\

Template Description:
  "Plantilla de isométricos para proyecto Pacific LNG Terminal Phase 2.
  Incluye cajetín corporativo con logos de Pacific Engineering y cliente,
  layers según ISO 128, estilos de texto y dimensión ISO-compliant,
  y campos de trace heating específicos de proyectos criogénicos LNG."

Measurement: Metric

[Save]
```

**5.4 Crear documentación de uso:**

```
Crear archivo README.txt en misma carpeta:

========================================
PACIFIC ENGINEERING - LNG ISOMETRIC TEMPLATE
Template: Pacific_LNG_Isometric_Template_A1.dwt
Versión: 1.0
Fecha: 24-NOV-2025
========================================

DESCRIPCIÓN:
Plantilla para isométricos de proyecto Pacific LNG Terminal Phase 2.
Formato A1 (594×841mm) métrico.

CONTENIDO:
- Layers: 13 layers según ISO 128-24
- Estilos de texto: 5 estilos (ISO_TEXT_*)
- Estilos de dimensión: ISO_DIM_STANDARD
- Cajetín: TITLE_BLOCK_PACIFIC_LNG_A1 con atributos

LAYERS PRINCIPALES:
- ISO_PIPE_MAIN (0.50mm) - Tubería principal
- ISO_COMPONENTS (0.25mm) - Válvulas, fittings
- ISO_DIMENSIONS (0.18mm) - Dimensiones
- ISO_BOM (0.25mm) - Tabla de materiales
- ISO_TITLEBLOCK (0.35mm) - Cajetín

ESTILOS DE TEXTO:
- ISO_TEXT_MAIN (3.5mm general)
- ISO_TEXT_TITLE (7mm títulos)
- ISO_TEXT_DIMENSION (2.5mm cotas)
- ISO_TEXT_NOTE (2.5mm notas)
- ISO_TEXT_BOM (2mm tablas)

INSTRUCCIONES DE USO:
1. File → New → Template: Pacific_LNG_Isometric_Template_A1.dwt
2. Model Space: Dibujar/insertar geometría de isométrico
3. Layout Space: Cajetín pre-insertado, completar atributos
4. Plot to PDF usando page setup "Isometric_A1"

ATRIBUTOS DEL CAJETÍN:
ISO_NUMBER - Número de isométrico
LINE_NUMBER - Número de línea
SERVICE - Descripción de servicio
OPER_TEMP_C/F - Temperatura (dual units)
OPER_PRESS_BAR/PSIG - Presión (dual units)
MATERIAL - Material de tubería
PIPE_SPEC - Especificación de tubería
INSULATION - Tipo de aislamiento
TRACE_HEATING - Tipo de calefacción de trazas
DRAWN_BY/DATE - Dibujante y fecha
CHK_BY/DATE - Revisor y fecha
APP_BY/DATE - Aprobador y fecha

ESTÁNDARES APLICADOS:
- ISO 15926 (Integration of lifecycle data)
- ISO 5261 (Technical drawings - Piping)
- ISO 128-24 (Line types and widths)
- ASME B31.3 (Process Piping)

CONTACTO:
CAD Manager - Pacific Engineering
Email: cadmanager@pacificeng.com
Tel: +57-1-XXX-XXXX

HISTORIAL DE VERSIONES:
v1.0 (24-NOV-2025) - Versión inicial
========================================

[Guardar README.txt]
```

### Entregables

Al finalizar, debe entregar:

1. **Archivo template:**
   - `Pacific_LNG_Isometric_Template_A1.dwt` (archivo template completo)

2. **Archivo de documentación:**
   - `README.txt` (instrucciones de uso detalladas)

3. **Screenshot de verificación:**
   - Captura de pantalla mostrando:
     - Layer Properties Manager con todos los layers creados
     - Text Style Manager con estilos configurados
     - Dimension Style Manager con ISO_DIM_STANDARD
     - Layout con cajetín insertado y poblado con datos de ejemplo

4. **Checklist de validación:**
   - Documento verificando cumplimiento de todos los requisitos

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Layers correctos** | 15 | 13 layers según ISO 128-24, nombres y propiedades correctas |
| **Estilos de texto** | 10 | 5 estilos configurados apropiadamente |
| **Estilo de dimensión** | 10 | ISO_DIM_STANDARD cumple ISO 129 |
| **Diseño de cajetín** | 25 | Layout profesional, todos los campos requeridos |
| **Atributos funcionales** | 20 | 23+ atributos con tags, prompts y defaults apropiados |
| **Template guardado** | 10 | .dwt guardado correctamente con descripción |
| **Documentación** | 10 | README completo y claro |
| **TOTAL** | **100** | |

**Criterio de aprobación:** 80 puntos o más

---

## Ejercicio 23: Extraer BOM Detallado para Procurement

**Tiempo estimado:** 35 minutos
**Dificultad:** ⭐⭐⭐ (Intermedio)
**Lección asociada:** Lección 23 - Lista de Materiales (BOM) y Cantidades

### Escenario

Usted es el **Materials Coordinator** para el proyecto "Atlantic Refinery CDU Expansion". El departamento de Procurement (Compras) requiere un BOM detallado para emitir órdenes de compra a proveedores de materiales de tubería.

**Requisitos de Procurement:**
- BOM completo del área CDU (Area 1001)
- Agrupación por tipo de componente (Pipe, Elbows, Tees, Valves, Flanges)
- Sub-agrupación por tamaño y material
- Columnas: Item, Qty, Unit, Part Number, Description, Size, Material, Rating, Unit Weight, Total Weight, Preferred Vendor, Lead Time
- Formato Excel profesional con totales y subtotales
- Identificación de "long-lead items" (componentes con tiempo de entrega >12 semanas)
- Budget estimate preliminar (si precios unitarios disponibles)

**Datos del proyecto:**
- Área: 1001 (CDU)
- Líneas: 25 líneas de tubería
- Materiales: CS (Carbon Steel), SS316L (Stainless Steel)
- Tamaños: 2" a 12" NPS
- Total estimado: ~350 componentes únicos

### Objetivos

Al completar este ejercicio, usted será capaz de:

✅ Generar BOM desde modelo 3D con Reports Manager
✅ Configurar filtros para área específica
✅ Personalizar columnas según requisitos de procurement
✅ Exportar a Excel con formato profesional
✅ Identificar long-lead items con formato condicional
✅ Crear resumen ejecutivo con análisis de datos

### Procedimiento Paso a Paso

#### Parte 1: Generación de BOM Base (10 min)

**1.1 Abrir Reports Manager:**

```
Abrir modelo: CDU_Model_Complete.dwg

Command: REPORTSMANAGER

Reports Manager dialog → Standard Reports → Bill of Materials (BOM)
[Double-click para abrir]
```

**1.2 Configurar alcance y filtros:**

```
BOM Report Settings:

Scope:
⦿ Selected Area
  Area Code: 1001 (CDU only)
  ☑ Include all pipelines in area
  ☐ Include other areas

Filters:
├─ Component Types:
│  ☑ Pipe
│  ☑ Elbows (all types)
│  ☑ Tees (all types)
│  ☑ Reducers
│  ☑ Flanges (all types)
│  ☑ Valves (all types)
│  ☑ Gaskets
│  ☑ Bolts & Nuts
│  ☐ Supports (excluir - no es material de procurement)
│  ☐ Hangers (excluir)
│
├─ Size Range:
│  From: 2" (50mm)
│  To: 12" (300mm)
│  ☑ Include all sizes in range
│
└─ Material:
   ☑ All materials (CS, SS316L, etc.)
```

**1.3 Configurar columnas:**

```
Columns Selection:

☑ Item Number (auto-generated sequence)
☑ Part Number (from spec database)
☑ Description (full technical description)
☑ Size (nominal diameter)
☑ Material (material code and spec)
☑ Quantity
☑ Unit (EA for each, M for meters)
☑ Unit Weight (kg per unit)
☑ Total Weight (Qty × Unit Weight)

Custom Columns (from custom properties):
☑ Preferred Vendor (supplier name)
☑ Lead Time (weeks)
☑ Commodity Code (for import/export)
☐ Unit Cost (si disponible)
☐ Total Cost (si disponible)

[Move Up/Down para ordenar columnas según lista requerida]
```

**1.4 Configurar agrupación y ordenamiento:**

```
Grouping:

Primary Grouping:
  ☑ Group by Component Type
  Order: Alphabetical (Bolts, Elbows, Flanges, Gaskets, Pipe, Reducers, Tees, Valves)

Secondary Grouping:
  ☑ Group by Size
  Order: Descending (12" primero, 2" último)

Tertiary Grouping:
  ☑ Group by Material
  Order: Alphabetical (CS, SS316L)

Sorting Within Groups:
  Sort by: Part Number
  Order: Ascending

☑ Show subtotals for each group (Total Weight por grupo)
☑ Show grand total at end (Total Weight de todo el proyecto)
```

**1.5 Generar reporte:**

```
Output Format: ⦿ Microsoft Excel (.xlsx)

Excel Options:
☑ Include project header
☑ Include generation date/time
☑ Auto-fit columns
☑ Apply cell formatting (bold headers, borders)
☑ Freeze top row (for scrolling)
☑ Apply filters to headers

[Generate Report]

Save As:
  Location: C:\Projects\AtlanticRefinery\Reports\
  Filename: BOM_Procurement_CDU_Area1001_Rev0_2025-11-24.xlsx

Progress:
  Extracting components from model... 100%
  Calculating quantities and weights... 100%
  Formatting Excel output... 100%

[Report generated successfully]
[Open in Excel]
```

#### Parte 2: Enriquecimiento de BOM en Excel (15 min)

**2.1 Revisar y verificar datos:**

```
En Excel: BOM_Procurement_CDU_Area1001_Rev0_2025-11-24.xlsx

Estructura generada:

┌────────────────────────────────────────────────────────────────────────────┐
│ ATLANTIC REFINERY CDU EXPANSION - BILL OF MATERIALS                       │
│ Area: 1001 (Crude Distillation Unit)                                     │
│ Generated: 24-NOV-2025 10:30:15                                          │
│ Total Items: 348 | Total Weight: 45,850 kg                               │
└────────────────────────────────────────────────────────────────────────────┘

Row 5: Headers (frozen)
┌──────┬──────────────┬──────────────────────┬──────┬─────────┬─────┬──────┬────────┬───────────┬──────────┬──────────┐
│ ITEM │ PART NUMBER  │ DESCRIPTION          │ SIZE │ MATERIAL│ QTY │ UNIT │ WT/UNIT│ TOTAL WT  │ VENDOR   │ LEAD TIME│
├──────┼──────────────┼──────────────────────┼──────┼─────────┼─────┼──────┼────────┼───────────┼──────────┼──────────┤

PIPE - CARBON STEEL ASTM A106 GR.B
│ 1    │ A106-PIPE-12 │ Pipe Seamless 12"    │ 12"  │ CS A106B│ 125 │ M    │ 260.00 │ 32,500.00 │ Tenaris  │ 8 weeks  │
│      │ -SCH40       │ Sch 40               │      │         │     │      │        │           │          │          │
│ 2    │ A106-PIPE-8  │ Pipe Seamless 8"     │ 8"   │ CS A106B│ 285 │ M    │ 160.00 │ 45,600.00 │ Tenaris  │ 6 weeks  │
│      │ -SCH40       │ Sch 40               │      │         │     │      │        │           │          │          │
...
SUBTOTAL PIPE CS: 135,575 kg

ELBOWS 90° LONG RADIUS - CARBON STEEL ASTM A234 WPB
│ 28   │ A234-EL90LR  │ Elbow 90° LR 12"     │ 12"  │ CS      │ 45  │ EA   │ 45.00  │ 2,025.00  │ Bonney   │ 6 weeks  │
│      │ -12-SCH40    │ Sch 40               │      │ A234WPB │     │      │        │           │ Forge    │          │
...

[Continúa para todos los tipos de componentes]
```

**2.2 Agregar columna calculada "Long Lead Item":**

```
En Excel:

1. Insertar nueva columna después de "LEAD TIME":
   Column L: "LONG LEAD ITEM"

2. En celda L6 (primera fila de datos):
   Formula: =IF(K6>12,"YES","NO")
   (Si Lead Time > 12 semanas, marcar "YES")

3. Copiar fórmula hacia abajo para todas las filas

4. Aplicar formato condicional:
   Select column L (datos únicamente, no header)
   Home → Conditional Formatting → Highlight Cell Rules → Equal To
   Value: "YES"
   Format: Light Red Fill with Dark Red Text
   [OK]

Resultado: Items con lead time >12 semanas destacados en rojo
```

**2.3 Crear pivot table de análisis:**

```
Insert → PivotTable

Source: Seleccionar todo el rango de datos (A5:L400 aprox.)
Destination: ⦿ New Worksheet
Sheet name: "Analysis"

PivotTable Fields:
├─ Rows:
│  └─ Drag "DESCRIPTION" (agrupado)
├─ Columns:
│  └─ Drag "MATERIAL"
├─ Values:
│  ├─ Drag "TOTAL WT" → Sum
│  └─ Drag "QTY" → Count
└─ Filters:
   └─ Drag "LONG LEAD ITEM"

Result: Tabla dinámica mostrando peso total y cantidad por tipo de componente y material

Ordenar por peso total (descendente) para identificar componentes principales
```

**2.4 Crear gráfico de distribución de peso:**

```
Basado en pivot table:

Insert → Chart → Pie Chart → 3D Pie

Chart Title: "Weight Distribution by Component Type"
Data Labels: ☑ Percentage
Legend: ☑ Show

Resultado:
  - Pipe: 47% (135,575 kg)
  - Valves: 28% (65,432 kg)
  - Flanges: 12% (28,950 kg)
  - Elbows: 8% (18,234 kg)
  - Otros: 5%

Move chart to: Sheet "Analysis"
```

#### Parte 3: Creación de Resumen Ejecutivo (10 min)

**3.1 Crear hoja "Executive Summary":**

```
Insert new sheet: "Executive Summary"

Contenido:

═══════════════════════════════════════════════════════════
ATLANTIC REFINERY CDU EXPANSION
BILL OF MATERIALS - PROCUREMENT SUMMARY
Area 1001 - Crude Distillation Unit
Date: 24-NOV-2025
═══════════════════════════════════════════════════════════

PROJECT OVERVIEW:
  - Area: 1001 (CDU)
  - Total Pipeline Length: 1,250 meters
  - Number of Lines: 25
  - Size Range: 2" - 12" NPS

MATERIAL SUMMARY:
  Total Unique Items: 348
  Total Weight: 45,850 kg (101,090 lb)

  Breakdown by Material:
    • Carbon Steel (CS): 38,920 kg (85%)
    • Stainless Steel 316L (SS316L): 6,930 kg (15%)

  Breakdown by Component Type:
    • Pipe: 21,575 kg (47%)
    • Valves: 12,838 kg (28%)
    • Flanges: 5,502 kg (12%)
    • Elbows: 3,566 kg (8%)
    • Tees: 1,284 kg (3%)
    • Reducers: 542 kg (1%)
    • Gaskets & Bolts: 543 kg (1%)

LONG-LEAD ITEMS (>12 weeks):
  Total Long-Lead Items: 23
  Critical Items:
    1. Valves 12" 600# CS (Lead Time: 16 weeks) - Qty: 4
    2. Valves 8" 600# SS316L (Lead Time: 18 weeks) - Qty: 2
    3. Flanges 12" 600# RTJ (Lead Time: 14 weeks) - Qty: 8
    4. Expansion Joints 12" (Lead Time: 20 weeks) - Qty: 2

  RECOMMENDATION: Issue purchase orders for long-lead items by DEC-01-2025
  to avoid delays in construction schedule (planned start: APR-01-2026)

PROCUREMENT SCHEDULE:
  Week 1-2: RFQ (Request for Quotation) to vendors
  Week 3-4: Vendor proposals and technical bid evaluation
  Week 5: Purchase order award
  Week 6-22: Material fabrication and delivery
  Week 23: Material inspection and receipt at site

VENDORS:
  Primary Vendors:
    • Pipe: Tenaris, Vallourec
    • Fittings: Bonney Forge, Taylor Forge
    • Valves: Cameron, Crane, Velan
    • Flanges: Texas Flange, Weldbend

NOTES:
  1. All materials per ASME B31.3 Process Piping Code
  2. Carbon Steel per ASTM A106 Gr.B (pipe), A234 WPB (fittings)
  3. Stainless Steel per ASTM A312 TP316L (pipe), A403 WP316L (fittings)
  4. Hydrostatic test pressure: 1.5 × Design Pressure
  5. Material certificates (MTRs) required for all pressure-retaining components

PREPARED BY: [Your Name], Materials Coordinator
REVIEWED BY: ________________, Procurement Manager
APPROVED BY: ________________, Project Manager

═══════════════════════════════════════════════════════════

[Formatear con estilos corporativos, insertar gráfico de pie chart]
```

**3.2 Crear filtro de long-lead items:**

```
Volver a sheet principal "BOM"

1. Aplicar AutoFilter:
   Select header row (Row 5)
   Data → Filter

2. Filtrar por Long Lead Items:
   Click dropdown en columna "LONG LEAD ITEM"
   ☐ NO
   ☑ YES
   [OK]

Resultado: Vista filtrada mostrando solo 23 items con lead time >12 semanas

3. Copiar datos filtrados:
   Select all visible rows
   Ctrl+C (copy)

4. Crear nueva sheet: "Long-Lead Items"
   Paste data
   Highlight entire sheet con formato amarillo (atención requerida)

5. Sort by Lead Time (descending) para priorizar items más críticos
```

### Entregables

Al finalizar, debe entregar:

1. **Archivo Excel completo:**
   ```
   BOM_Procurement_CDU_Area1001_Rev0_2025-11-24.xlsx

   Contenido:
   ├─ Sheet "BOM" - BOM completo con 348 items
   ├─ Sheet "Executive Summary" - Resumen ejecutivo
   ├─ Sheet "Analysis" - Pivot table y gráficos
   └─ Sheet "Long-Lead Items" - Filtro de items críticos (23 items)
   ```

2. **Checklist de verificación:**
   - Documento Word confirmando:
     - Total de items: 348
     - Total weight: 45,850 kg
     - Long-lead items: 23
     - Vendors identificados: Sí
     - Formato profesional: Sí

3. **Email de transmittal simulado:**
   ```
   TO: procurement@atlanticrefinery.com
   CC: projectmanager@atlanticrefinery.com
   SUBJECT: BOM for CDU Area 1001 - Ready for Procurement

   Attached: BOM_Procurement_CDU_Area1001_Rev0_2025-11-24.xlsx

   Dear Procurement Team,

   Please find attached the complete Bill of Materials for Area 1001
   (Crude Distillation Unit) of the Atlantic Refinery Expansion project.

   Key Points:
   - Total items: 348
   - Total weight: 45,850 kg
   - 23 long-lead items identified (see "Long-Lead Items" sheet)
   - Recommend PO issuance by DEC-01-2025 for long-lead items

   The BOM includes preferred vendors and lead times for procurement planning.

   Please review and advise if any clarifications are needed.

   Best regards,
   [Your Name]
   Materials Coordinator
   ```

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **BOM completo** | 25 | 348 items extraídos correctamente del modelo |
| **Columnas correctas** | 15 | Todas las columnas requeridas presentes |
| **Agrupación** | 10 | Agrupación por tipo, tamaño, material funciona |
| **Long-lead items** | 15 | 23 items identificados y destacados |
| **Executive Summary** | 15 | Resumen profesional y completo |
| **Formato Excel** | 10 | Formato profesional, legible, con gráficos |
| **Análisis (pivot)** | 10 | Pivot table y análisis presentes |
| **TOTAL** | **100** | |

**Criterio de aprobación:** 80 puntos o más

---

## Ejercicio 24: Producir Planos Ortogonales de Área

**Tiempo estimado:** 50 minutos
**Dificultad:** ⭐⭐⭐⭐ (Avanzado)
**Lección asociada:** Lección 24 - Planos Ortogonales y Vistas

### Escenario

Usted es el **Lead Piping Designer** para el proyecto "Pacific LNG Terminal Phase 2". El cliente (Pacific Energy Corp) requiere un set completo de planos ortogonales del área de Liquefaction (Area 3001) para Design Review Meeting programada para la próxima semana.

**Requisitos del cliente:**
1. Vista en planta general del área (escala 1:100)
2. Dos elevaciones: Norte y Este (escala 1:100)
3. Una sección transversal en área de máxima densidad de tubería (escala 1:50)
4. Todas las vistas en hojas tamaño ISO A1 (594×841mm)
5. Anotación completa: grid lines, equipment tags, pipe numbers, elevations
6. PDF de alta calidad para revisión electrónica en meeting
7. Formato de presentación profesional con múltiples vistas coordinadas

**Datos del área:**
```
Area 3001 - Liquefaction:
  Grid extent: A-H (horizontal) × 1-8 (vertical)
  Dimensions: 42m (E-W) × 40m (N-S)

  Floor Levels:
    FL-0 (Ground): 0.00m
    FL-1 (Mezzanine): 5.00m
    FL-2 (Operating): 10.00m
    FL-3 (Top): 15.00m

  Main Equipment:
    Compressor C-3001 (reciprocating, 2-stage)
    Heat Exchangers E-3001, E-3002 (shell & tube)
    Separator V-3001 (vertical pressure vessel)
    Storage Tanks T-3001, T-3002 (cryogenic)

  Piping:
    LNG lines: 8"-24" SS316L cryogenic
    Refrigerant lines: 4"-12" CS
    Instrument lines: 1/2"-1" SS316L
    Total: ~35 lines
```

### Objetivos

Al completar este ejercicio, usted será capaz de:

✅ Generar vistas en planta desde modelo 3D con Orthographic View Manager
✅ Extraer elevaciones ortogonales Norte y Este
✅ Crear sección transversal de área compleja
✅ Aplicar anotación completa a vistas ortogonales
✅ Configurar layouts multi-vista en hojas A1
✅ Producir PDFs de calidad profesional para cliente

### Procedimiento Paso a Paso

#### Parte 1: Vista en Planta de FL-1 (15 min)

**1.1 Generar vista en planta:**

```
Abrir modelo: LNG_Area3001_Model.dwg

Command: P3DORTHOVIEW (Orthographic View Manager)

View Type: ⦿ Plan View (Top)

View Definition:
├─ View Name: Area-3001-Liquefaction-Plan-FL1
├─ Elevation (Cut Plane): 5000mm (FL-1 - Mezzanine Level)
├─ Depth Above: 3000mm (mostrar hasta 8000mm - por encima de FL-2)
├─ Depth Below: 3000mm (mostrar desde 2000mm - por debajo de FL-0)
└─ Total range: 2000mm to 8000mm

Boundary Definition:
  Method: [Rectangle]
  First corner: Grid A-1 intersection (0, 0)
  Second corner: Grid H-8 intersection (42000, 40000)
  Result: 42m × 40m rectangular boundary

Display Options:
☑ Show piping (all sizes ≥2")
☑ Show equipment (compressors, exchangers, vessels, tanks)
☑ Show structural (steel platforms, stairs)
☐ Show supports (NO - demasiado detalle para planta 1:100)
☑ Show annotations (grid lines, tags)
☑ Hidden line removal (ocultar líneas traseras)

Advanced Display:
├─ Small Pipes (<2"):
│  ⦿ Show only if valve/instrument attached
│  ○ Show all
│  ○ Hide all
│
├─ Fittings Representation:
│  ⦿ Simplified (línea continua en cambios de dirección)
│  ○ Detailed symbols
│
└─ Visibility by Layer:
   ISO_PIPE_PROCESS → Show
   ISO_PIPE_UTILITY → Show
   ISO_EQUIPMENT → Show
   ISO_STRUCTURAL → Show
   ISO_SUPPORTS → Hide
   ISO_HANGERS → Hide

Output Settings:
├─ Target Drawing: ⦿ Create New Drawing
│  Drawing Name: Area-3001-Plan-FL1.dwg
│  Template: Company_Ortho_Plan_Template.dwt
│  Location: C:\Projects\PacificLNG\Drawings\Plans\
│
├─ Scale: 1:100
│  (Apropiado para área 42×40m en hoja A1)
│
└─ Update Mode: ⦿ Associative
   (Vista se actualiza si modelo 3D cambia)

[Create View]

Processing time: ~2-3 minutos
Result: Nueva vista Area-3001-Plan-FL1.dwg creada
```

**1.2 Anotar vista en planta:**

```
Abrir: Area-3001-Plan-FL1.dwg

Anotaciones requeridas:

1. Grid Lines (ya incluidos automáticamente):
   ☑ Horizontal: A, B, C, D, E, F, G, H
   ☑ Vertical: 1, 2, 3, 4, 5, 6, 7, 8
   ☑ Labels en círculos en cada intersección

2. Equipment Tags:
   Command: TEXT (o usar bloques de tags si disponibles)

   Insertar tags:
   - C-3001 (Compressor, ubicación Grid D-4)
   - E-3001 (Heat Exchanger, Grid C-3)
   - E-3002 (Heat Exchanger, Grid C-5)
   - V-3001 (Separator, Grid E-4)
   - T-3001 (Tank, Grid B-7)
   - T-3002 (Tank, Grid B-8)

   Font: ISO_TEXT_MAIN, Height: 5mm @ 1:100 = 500mm model space
   Layer: ORTHO_EQUIP_TAGS

3. Pipeline Numbers (principales):
   Command: LEADER (or MLEADER)

   Anotar líneas principales (≥6"):
   - 3001-A-24"-SS316L (LNG Main Feed)
   - 3001-B-12"-SS316L (LNG Product)
   - 3001-C-8"-CS (Refrigerant Supply)
   - ... (5-8 líneas principales)

   Placement: A lo largo de cada línea, con leader apuntando a tubería
   Layer: ORTHO_PIPE_TAGS

4. Elevaciones de Tubería:
   Format: EL #### (elevation in mm)

   Anotar en puntos clave:
   - Conexiones a nozzles de equipos
   - Cambios significativos de elevación
   - Inicio/fin de líneas

   Example: "EL 5000 C-L" en conexión a nozzle N1 de V-3001
   Layer: ORTHO_ELEVATIONS

5. Norte de Planta:
   Command: INSERT
   Block: NORTH_ARROW (si disponible) o dibujar:

   ↑ N
   PLANT NORTH

   Ubicación: Esquina superior derecha
   Height: 30mm @ 1:100 = 3000mm model space

6. Notas generales:
   "PLAN VIEW AT EL 5000 (FL-1 MEZZANINE LEVEL)"
   "SCALE 1:100"
   "FOR DESIGN REVIEW - NOT FOR CONSTRUCTION"

   Ubicación: Parte superior de vista
```

#### Parte 2: Elevaciones Norte y Este (15 min)

**2.1 Generar Elevación Norte:**

```
Regresar a modelo: LNG_Area3001_Model.dwg

Command: P3DORTHOVIEW

View Type: ⦿ Elevation

Elevation Direction: ⦿ North (looking from South towards North)

View Definition:
├─ View Name: Area-3001-Liquefaction-Elevation-North
├─ Horizontal Extent:
│  From Grid: A
│  To Grid: H
│  Length: 42,000mm
│
└─ Vertical Extent:
   From Elevation: 0mm (Ground)
   To Elevation: 18,000mm (Above roof, include clearance)
   Height: 18,000mm

Display Options:
☑ Show piping
☑ Show equipment
☑ Show structural (columns, beams, platforms)
☑ Show platforms and stairs
☐ Show supports (generalmente NO en elevación general)
☑ Hidden line removal

Output:
├─ Target: Create New Drawing
│  Name: Area-3001-Elevation-North.dwg
├─ Scale: 1:100
└─ Update Mode: Associative

[Create View]
```

**2.2 Anotar Elevación Norte:**

```
Abrir: Area-3001-Elevation-North.dwg

Anotaciones:

1. Floor Levels (dimensiones verticales):
   Command: DIMLINEAR (vertical)

   Dimension chain desde ground:
   ├─ FL-0: 0.00m (GROUND LEVEL)
   ├─ FL-1: 5.00m (MEZZANINE)
   ├─ FL-2: 10.00m (OPERATING FLOOR)
   ├─ FL-3: 15.00m (TOP LEVEL)
   └─ Roof: 18.00m

   Layer: ORTHO_DIMENSIONS
   Dim Style: ISO_DIM_ORTHO

2. Equipment Tags:
   (Visible en elevación)
   - C-3001
   - E-3001, E-3002
   - V-3001
   - T-3001, T-3002

   Include elevation info:
   "C-3001"
   "CENTERLINE EL 5500"

3. Pipeline Numbers (principales visibles):
   Anotar líneas principales con leaders

4. Elevaciones de Conexiones:
   EL #### en nozzles visibles en esta vista

5. Referencias a Sección:
   Text: "SEE SECTION A-A →"
   (Con flecha indicando ubicación de sección)

6. Título:
   "ELEVATION - NORTH"
   "LOOKING NORTH FROM SOUTH"
   "SCALE 1:100"
```

**2.3 Generar Elevación Este (similar):**

```
Repetir proceso para Elevación Este:
- View Name: Area-3001-Liquefaction-Elevation-East
- Direction: East (looking from West towards East)
- Horizontal Extent: Grid 1 to Grid 8 (40m)
- Vertical Extent: 0 to 18m
- Scale: 1:100

Anotar similarmente con floor levels, tags, elevations
```

#### Parte 3: Sección Transversal A-A (10 min)

**3.1 Definir línea de corte en planta:**

```
En: Area-3001-Plan-FL1.dwg

1. Identificar área de máxima densidad de tubería:
   Inspection visual: Grid D-4 (área alrededor de Compressor C-3001)

2. Dibujar línea de corte:
   Command: LINE
   First point: Grid D, between Grid 3 and Grid 4
   Second point: Grid D, between Grid 5 and Grid 6
   Layer: ORTHO_SECTION_LINES
   Color: Red (para visibilidad)

3. Agregar símbolos de sección:
   Arrows apuntando en dirección de vista (hacia Norte)

   Text: "A" a cada lado de la línea
   ──A─────────────────A──
      ↑               ↑
   (Flechas indicando "Looking North")
```

**3.2 Generar sección:**

```
Regresar a modelo: LNG_Area3001_Model.dwg

Command: P3DORTHOVIEW

View Type: ⦿ Section

Define Section Plane:
  Method: ⦿ Pick Line
  [Select line de corte dibujada en planta - Grid D]

View Direction: ⦿ Looking North

View Definition:
├─ View Name: Area-3001-Section-A-A
├─ Depth of Section:
│  Depth in Front: 5000mm (5m adelante del plano)
│  Depth Behind: 2000mm (2m atrás del plano)
│
└─ Vertical Extent:
   From: 0mm (Ground)
   To: 18000mm (Roof)

Section Properties:
☑ Show section cut (elementos cortados más gruesos)
☑ Hatch cut elements
  Hatch Pattern:
  - Steel structure: ANSI31
  - Concrete: AR-CONC
  - Pipe (cortada): Solid fill
☑ Show elements behind section plane
☐ Show elements in front (NO - solo atrás y cortados)

Output:
├─ Target: Create New Drawing
│  Name: Area-3001-Section-A-A.dwg
├─ Scale: 1:50 (más grande para ver detalles)
└─ Update Mode: Associative

[Create View]
```

**3.3 Anotar sección:**

```
Abrir: Area-3001-Section-A-A.dwg

Anotaciones:

1. Título de Sección:
   "SECTION A-A"
   "SCALE 1:50"
   "LOOKING NORTH"
   Ubicación: Parte superior de vista
   Font: ISO_TEXT_TITLE, Height: 10mm @ 1:50

2. Floor Levels (dimensiones):
   Dimensionar verticalmente (similar a elevación)

3. Equipos cortados/visibles:
   Tags: C-3001, V-3001, etc.

4. Tuberías cortadas:
   Mostrar como círculos (sección transversal)
   Anotar tamaño y número de línea

5. Dimensiones de clearance:
   Clearance mínimo sobre pasillo: 2.10m MIN
   (Dimension con nota)

6. Hatching:
   Aplicar patrones a elementos cortados:
   - Structural steel: ANSI31, 45°
   - Pipe cut: Solid gray fill
```

#### Parte 4: Layouts y PDF (10 min)

**4.1 Crear layout compuesto:**

```
Nuevo archivo: Area-3001-Composite-Views.dwg

Layout: Rename to "Area-3001-Design-Review"
Page Setup: ISO A1 Landscape (841 × 594mm)

Organización de viewports:

┌─────────────────────────────────────────────────────────────┐
│ PACIFIC LNG TERMINAL PHASE 2 - AREA 3001 LIQUEFACTION      │
│ DESIGN REVIEW DRAWINGS                    Date: 24-NOV-2025│
│                                                             │
│ ┌──────────────────────────────┐  ┌────────────────────┐  │
│ │                              │  │                    │  │
│ │  Plan View FL-1              │  │ Elevation North    │  │
│ │  Scale: 1:100                │  │ Scale: 1:100       │  │
│ │                              │  │                    │  │
│ │                              │  │                    │  │
│ └──────────────────────────────┘  └────────────────────┘  │
│                                                             │
│ ┌─────────────────┐  ┌─────────────────┐  ┌────────────┐ │
│ │                 │  │                 │  │            │ │
│ │ Elevation East  │  │ Section A-A     │  │ Key Plan   │ │
│ │ Scale: 1:100    │  │ Scale: 1:50     │  │ NTS        │ │
│ │                 │  │                 │  │            │ │
│ └─────────────────┘  └─────────────────┘  └────────────┘ │
│                                                             │
│ [Pacific Engineering Logo]    [Pacific Energy Corp Logo]   │
│ Drawing No: 3001-GA-001  Rev: 0  Sheet: 1 of 1            │
└─────────────────────────────────────────────────────────────┘
```

**4.2 Insertar vistas como XREFs:**

```
Para cada viewport:

1. Plan View Viewport:
   Command: MVIEW
   Rectangle: 50,400 to 450,550 (coordenadas de layout)

   Double-click viewport (activate)
   Command: XREF
   Attach: Area-3001-Plan-FL1.dwg

   Command: ZOOM
   Extents

   Deactivate viewport (double-click fuera)
   Select viewport border
   Properties: Standard Scale = 1:100
   Display Locked: Yes

2. Elevation North Viewport:
   Rectangle: 480,400 to 780,550
   XREF: Area-3001-Elevation-North.dwg
   Scale: 1:100
   Locked: Yes

3. Elevation East Viewport:
   Rectangle: 50,100 to 280,350
   XREF: Area-3001-Elevation-East.dwg
   Scale: 1:100

4. Section A-A Viewport:
   Rectangle: 310,100 to 580,350
   XREF: Area-3001-Section-A-A.dwg
   Scale: 1:50 (mayor detalle)

5. Key Plan Viewport:
   Rectangle: 610,100 to 780,350
   Content: Ubicación del área en planta general
   Scale: NTS (Not To Scale)
```

**4.3 Generar PDF:**

```
Command: PLOT (o PUBLISH para múltiples layouts)

Plot Settings:
├─ Printer/Plotter: DWG To PDF.pc3
├─ Paper size: ISO A1 (594 × 841mm)
├─ Plot area: Layout
├─ Plot scale: 1:1 (escala real del layout)
├─ Plot style table: ISO_PlotStyle.ctb
├─ Plot options:
│  ☑ Plot object lineweights
│  ☑ Plot with plot styles
│  ☑ Plot paperspace last
└─ Quality: Maximum

Save PDF:
  Location: C:\Projects\PacificLNG\Deliverables\PDFs\
  Filename: Area-3001-Design-Review-Rev0-2025-11-24.pdf

[Plot]

Verificar PDF:
  - Abrir en Adobe Reader
  - Verificar legibilidad de texto
  - Verificar lineweights correctos
  - Verificar que todas las vistas están presentes
  - Verificar escala (medir distancia conocida con herramienta de medición)
```

### Entregables

1. **Archivos DWG de vistas individuales:**
   ```
   - Area-3001-Plan-FL1.dwg
   - Area-3001-Elevation-North.dwg
   - Area-3001-Elevation-East.dwg
   - Area-3001-Section-A-A.dwg
   ```

2. **Layout compuesto:**
   ```
   - Area-3001-Composite-Views.dwg (layout con 4 vistas + key plan)
   ```

3. **PDF de alta calidad:**
   ```
   - Area-3001-Design-Review-Rev0-2025-11-24.pdf
   ```

4. **Checklist de verificación:**
   - Documento confirmando:
     - 4 vistas generadas correctamente
     - Anotación completa en cada vista
     - Escalas correctas
     - Layout profesional
     - PDF legible y de calidad

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Vistas generadas** | 25 | 4 vistas (plan, 2 elevaciones, sección) correctas |
| **Anotación completa** | 25 | Grid, tags, pipe numbers, elevations presentes |
| **Escalas apropiadas** | 10 | 1:100 para plantas/elevaciones, 1:50 para sección |
| **Layout profesional** | 20 | Organización clara, múltiples vistas coordinadas |
| **Calidad de PDF** | 10 | Legibilidad, lineweights, sin distorsión |
| **Presentación** | 10 | Title block, logos, información del proyecto |
| **TOTAL** | **100** | |

**Criterio de aprobación:** 80 puntos o más

---

## Ejercicio 25: Anotaciones Completas de Isométrico

**Tiempo estimado:** 40 minutos
**Dificultad:** ⭐⭐⭐⭐ (Avanzado)
**Lección asociada:** Lección 25 - Anotación y Dimensionamiento

### Escenario

Usted es el **Senior Drafter** para proyecto "Pacific LNG Terminal Phase 2". El isométrico ISO-3001-A-8"-SS316-001 ha sido generado automáticamente desde el modelo 3D, pero requiere anotación técnica completa antes de enviar a ABC Steel Fabricators para prefabricación del spool.

**Información de la línea:**
```
Line Number: 3001-A-8"-SS316
Service: LNG Transfer (Cryogenic)
Fluid: Liquefied Natural Gas
Operating Temp: -162°C (-260°F)
Operating Press: 10 bar (145 PSIG)
Test Press: 15 bar Hydrostatic
Material: Stainless Steel 316L ASTM A312
Pipe Spec: LNG-PS-001 Rev.2
Insulation: Polyurethane Foam (PUF) 100mm
Trace Heating: Electric heat tracing, 15W/m

Longitud total: ~42m
Componentes:
  - 12 elbows 90° LR
  - 4 tees (1 reducing)
  - 2 gate valves 8" 150# SS316L
  - 1 check valve 8" 150# SS316L
  - 24 flanges WN 8" 150# RF SS316L
  - Múltiples tramos de tubería
```

**Requisitos de anotación:**
1. Pipeline tag inteligente con información completa
2. Dimensiones centro-a-centro entre todos los fittings (12+ dimensiones)
3. Longitudes de corte de todos los tramos de tubería con allowances
4. Símbolos de soldadura AWS D1.1 en todas las juntas
5. Field welds identificados (3 ubicaciones de tie-in)
6. Valve schedule en tabla (3 válvulas)
7. Elevaciones de puntos clave
8. Norte de planta y orientación
9. Notas de fabricación

### Objetivos

Al completar este ejercicio, usted será capaz de:

✅ Aplicar pipeline tags inteligentes desde modelo 3D
✅ Dimensionar isométricos completamente según ISO 129
✅ Calcular y anotar cut lengths con weld allowances
✅ Insertar símbolos de soldadura AWS D1.1
✅ Crear valve schedules en tabla
✅ Aplicar anotaciones técnicas completas para fabricación

### Procedimiento Paso a Paso

#### Parte 1: Pipeline Tag y Información General (5 min)

**1.1 Insertar pipeline tag inteligente:**

```
Abrir: ISO-3001-A-8"-SS316-001.dwg (isométrico ya generado)

Command: P3DPIPELINETAG

Select pipeline: [Click en tubería principal del isométrico]

Plant 3D extrae automáticamente:
  Line Number: 3001-A-8"-SS316
  Service: LNG Transfer
  Fluid: LNG
  Oper Temp: -162°C (-260°F)
  Oper Press: 10 bar (145 PSIG)
  Test Press: 15 bar Hydro
  Material: SS316L A312
  Spec: LNG-PS-001 Rev.2
  Insulation: PUF 100mm
  Trace Heating: Electric 15W/m

Tag Style: Pipeline_Tag_Detailed (pre-configurado)

Content:
  ┌────────────────────────────────┐
  │ 3001-A-8"-SS316                │
  │ LNG TRANSFER (CRYOGENIC)       │
  │ -162°C (-260°F) / 10 bar       │
  │ Spec: LNG-PS-001 Rev.2         │
  │ Mat: SS316L ASTM A312          │
  │ Insul: PUF 100mm               │
  │ Heat Trace: Electric 15W/m     │
  └────────────────────────────────┘

Specify leader start point: [Cerca de tubería, parte superior izquierda]
Specify text location: [Esquina superior izquierda del isométrico]

Layer: ISO_ANNOTATIONS
```

#### Parte 2: Dimensionamiento Centro-a-Centro (15 min)

**2.1 Configurar dimension style:**

```
Command: DIMSTYLE

Set Current: ISO_DIM_ISOMETRIC (pre-configurado en Ejercicio 22)

Verify settings:
  - Arrowheads: Closed filled, 2.5mm
  - Text: ISO_TEXT_DIMENSION, 2.5mm height
  - Text placement: Above, centered
  - Units: Decimal, Precision 0 (enteros mm)
  - Layer: ISO_DIMENSIONS
```

**2.2 Dimensionar entre fittings:**

```
El isométrico tiene 12 elbows y 4 tees = 16 puntos de cambio
Requiere ~15 dimensiones centro-a-centro

Command: DIMLINEAR (o DIMALIGNED para líneas diagonales)

Ejemplo de secuencia:

1. Desde inicio de línea (nozzle N1 de equipo) a primer elbow:
   First extension line origin: [Endpoint at nozzle]
   Second extension line origin: [Center of first elbow]
   Dimension line location: [Above/below pipe]
   Result: 1850 mm

2. Entre primer elbow y segundo elbow:
   Origin 1: [Center of elbow 1]
   Origin 2: [Center of elbow 2]
   Result: 2500 mm

3. Entre elbow y tee:
   Origin 1: [Center of elbow]
   Origin 2: [Center of tee]
   Result: 3200 mm

4. Entre tee y válvula:
   Origin 1: [Center of tee]
   Origin 2: [Center of valve]
   Result: 1200 mm

[Continuar para todas las combinaciones fitting-to-fitting]

Tips:
  - Mantener dimensiones ordenadas (no cruzadas)
  - Agrupar dimensiones en líneas paralelas
  - Usar dimension chains donde sea apropiado:

    ├──── 1850 ────┤
                   ├──── 2500 ────┤
                                  ├──── 3200 ────┤

Total: 15 dimensiones C-L insertadas
```

#### Parte 3: Longitudes de Corte (10 min)

**3.1 Calcular cut lengths:**

```
Para cada tramo de pipe entre fittings:

Formula: Cut Length = C-L Length + (2 × Weld Allowance)

Weld Allowance para SS316L 8" butt welds: 5mm por extremo (según ASME B16.25)

Ejemplos:

Pipe Segment 1:
  C-L Length: 1850mm (de dimensión anterior)
  Allowances: 2 × 5mm = 10mm
  Cut Length: 1850 + 10 = 1860mm

Pipe Segment 2:
  C-L Length: 2500mm
  Allowances: 10mm
  Cut Length: 2510mm

Pipe Segment 3:
  C-L Length: 3200mm
  Allowances: 10mm
  Cut Length: 3210mm

[Calcular para todos los ~18 tramos de pipe]
```

**3.2 Anotar cut lengths:**

```
Command: LEADER (o MLEADER para multileader moderno)

Para cada tramo de pipe:

Specify leader start point: [On pipe segment, cerca del centro]
Specify next point: [Diagonal hacia área clara]
Specify text: CL=1860
[Enter]

Format: "CL=####" (Cut Length en mm)

Layer: ISO_DIMENSIONS

Repetir para cada uno de los 18 tramos

Resultado: Cada pipe segment tiene anotación CL=####

Ejemplo visual en isométrico:
      ═════════════════════════
              ↘
               CL=1860

      ═════════════════════════════════
                  ↘
                   CL=2510
```

#### Parte 4: Símbolos de Soldadura (15 min)

**4.1 Identificar tipos de juntas:**

```
En este isométrico SS316L cryogenic:

Juntas de soldadura:
1. Butt Welds (soldadura a tope): Pipe-to-fitting, fitting-to-fitting
   Cantidad: ~30 juntas
   Símbolo: V-groove, all-around

2. Field Welds: 3 ubicaciones de tie-in en campo
   Juntas: Conexión a equipo, tie-in a línea existente, final connection
   Símbolo: V-groove, all-around, field weld flag

3. Socket Welds: Ninguno (todo butt weld para 8")

4. Flange Connections: 24 flanges (no soldadura, bolted)
```

**4.2 Crear/usar bloques de símbolos de soldadura:**

```
Si bloques no existen, crear biblioteca:

Block: WELD_BUTT_GROOVE_V
Geometry:
  - Reference line horizontal (20mm)
  - V symbol below reference line (triángulo invertido)
  - Circle at junction (weld all around)
  - Arrow apuntando a junta

Attributes:
  - SIZE (típicamente blank para full penetration)
  - NOTES (e.g., "Per ASME B31.3")

Block: WELD_FIELD_FLAG
Geometry:
  - Small flag (triangle) en extremo de reference line
  - Indica "field weld"

[Guardar bloques en biblioteca WELD_SYMBOLS.dwg]
```

**4.3 Insertar símbolos en juntas:**

```
Command: INSERT

Block: WELD_BUTT_GROOVE_V

Para cada junta butt weld:

1. Junta entre pipe y elbow:
   Insertion point: [Near joint]
   Scale: 1.0
   Rotation: [Angle of reference line, typically horizontal]

   Atributos:
   SIZE: <blank> (full penetration)
   NOTES: <blank>

   Resultado:
        ═════╬═════
             ↓
        ────▼○──── (V-groove, all-around circle)

2. Repetir para las ~30 juntas butt weld

Para field welds (3 ubicaciones):

Block: WELD_BUTT_GROOVE_V + WELD_FIELD_FLAG

Insertion: Similar, pero agregar flag symbol:
        ────▼○────► (flag indica field weld)

Ubicaciones de field welds en este isométrico:
  - Conexión a nozzle N1 de equipo E-3001
  - Tie-in a línea existente 3001-A-8"-SS316 (spool anterior)
  - Final connection a nozzle N2 de equipo V-3001

Total símbolos insertados:
  - 27 butt welds shop (taller)
  - 3 butt welds field (campo)
  = 30 símbolos de soldadura
```

#### Parte 5: Valve Schedule y Anotaciones Finales (10 min)

**5.1 Crear valve schedule table:**

```
Command: TABLE

Table Style: ISO_TABLE_STANDARD

Rows: 4 (header + 3 válvulas)
Columns: 7

Column Headers:
  | TAG    | TYPE  | SIZE | RATING | MATERIAL  | OPERATOR | REMARKS |

Data (de las 3 válvulas en isométrico):

Row 2:
  | GV-3001| Gate  | 8"   | 150#   | SS316L    | Hand     | N.O.    |
  |        |Flanged|      | RF     | A182 F316L| Wheel    |         |

Row 3:
  | GV-3002| Gate  | 8"   | 150#   | SS316L    | Hand     | N.C.    |
  |        |Flanged|      | RF     | A182 F316L| Wheel    | ESD     |

Row 4:
  | CV-3001| Check | 8"   | 150#   | SS316L    | N/A      | Swing   |
  |        | Swing |      | RF     | A182 F316L|          | Type    |

Ubicación: Esquina inferior derecha, arriba de cajetín
Layer: ISO_BOM

Notes:
  N.O. = Normally Open
  N.C. = Normally Closed
  ESD = Emergency Shutdown
  RF = Raised Face
```

**5.2 Anotaciones de elevación:**

```
Command: TEXT

Format: EL #### (elevation en mm sobre datum)

Anotar en:

1. Inicio de línea (nozzle N1):
   Text: "EL 5500 C-L"
   Location: Cerca de nozzle
   Layer: ISO_ELEVATIONS

2. Primer cambio significativo de elevación:
   Text: "EL 7200 C-L"

3. Branch connection (tee principal):
   Text: "EL 6800 C-L"

4. Final de línea (nozzle N2):
   Text: "EL 5200 C-L"

Total: 4-6 anotaciones de elevación en puntos clave
```

**5.3 Norte de planta y orientación:**

```
Command: INSERT

Block: NORTH_ARROW (o dibujar si no existe)

   ↑
   N
 PLANT
 NORTH

Ubicación: Esquina superior derecha
Height: 20mm @ escala 1:20 del isométrico

Layer: ISO_SYMBOLS
```

**5.4 Notas de fabricación:**

```
Command: MTEXT

Text content:

FABRICATION NOTES:

1. All welds per ASME B31.3 Process Piping Code
2. Weld procedure: GTAW root, SMAW fill and cap
3. Material: SS316L per ASTM A312 (pipe), A403 (fittings), A182 (flanges)
4. Hydrostatic test: 15 bar (217 PSIG) for 30 minutes minimum
5. Radiographic inspection: 100% RT per ASME Section V
6. PMI (Positive Material Identification) required all pressure components
7. Heat tracing: Install electric trace before insulation
8. Insulation: 100mm polyurethane foam (PUF), aluminum jacket
9. Argon purge required during welding (cryogenic service)
10. Fit-up tolerance: ±1.5mm maximum misalignment

FIELD INSTALLATION:
- Field welds marked with ► symbol
- Coordinate field welds with construction schedule
- Final fit-up dimensions to be verified in field

Ubicación: Lado derecho del isométrico, en área clara
Width: 150mm
Text Style: ISO_TEXT_NOTE, 2.5mm height
Layer: ISO_ANNOTATIONS
```

### Entregables

1. **Isométrico completamente anotado:**
   ```
   ISO-3001-A-8"-SS316-001_ANNOTATED.dwg

   Contenido:
   ✓ Pipeline tag inteligente
   ✓ 15 dimensiones C-L
   ✓ 18 anotaciones de cut length
   ✓ 30 símbolos de soldadura (27 shop + 3 field)
   ✓ Valve schedule (3 válvulas)
   ✓ 4-6 anotaciones de elevación
   ✓ Norte de planta
   ✓ Notas de fabricación completas
   ```

2. **PDF para fabricante:**
   ```
   ISO-3001-A-8"-SS316-001_FOR_FABRICATION.pdf
   Alta calidad, legible, listo para taller
   ```

3. **Checklist de verificación:**
   ```
   Documento confirmando:
   ☑ Toda la información técnica presente
   ☑ Dimensiones verificadas vs modelo 3D
   ☑ Cut lengths incluyen allowances
   ☑ Símbolos de soldadura completos
   ☑ Notas de fabricación claras
   ☑ PDF legible y profesional
   ```

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Pipeline tag** | 10 | Tag inteligente con info completa del modelo |
| **Dimensiones C-L** | 20 | 15 dimensiones entre fittings, correctas |
| **Cut lengths** | 15 | 18 cut lengths con allowances calculados |
| **Símbolos soldadura** | 25 | 30 símbolos AWS D1.1, field welds marcados |
| **Valve schedule** | 10 | Tabla con 3 válvulas, info completa |
| **Elevaciones** | 5 | 4-6 elevaciones en puntos clave |
| **Notas fabricación** | 10 | Notas técnicas completas y claras |
| **Presentación** | 5 | Organización, legibilidad, profesionalismo |
| **TOTAL** | **100** | |

**Criterio de aprobación:** 80 puntos o más

---

## Soluciones Sugeridas

(Las soluciones detalladas paso-a-paso están incluidas en cada ejercicio en la sección "Procedimiento Paso a Paso")

**Notas finales:**

- Todos los ejercicios están diseñados para reforzar habilidades prácticas en escenarios realistas
- Los criterios de evaluación son estrictos pero alcanzables con práctica
- Se recomienda completar ejercicios en orden (21 → 22 → 23 → 24 → 25)
- Tiempo total estimado del módulo: ~3.5 horas de ejercicios prácticos
- Archivos de inicio están disponibles en plataforma del curso

---

**DISTMAH ATC - Authorized Training Center**
AutoCAD Plant 3D 2026 - Ejercicios Prácticos Módulo 5
Isométricos y Documentación
