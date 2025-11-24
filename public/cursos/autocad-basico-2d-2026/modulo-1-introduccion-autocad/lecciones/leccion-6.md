# Lección 6: Archivos DWG y Plantillas

## Objetivos de Aprendizaje

Al finalizar esta lección, serás capaz de:

1. Crear, abrir, guardar y cerrar archivos DWG correctamente
2. Comprender el formato DWG y sus versiones
3. Crear y usar plantillas DWT personalizadas
4. Configurar Automatic Save y recuperación de archivos
5. Utilizar Drawing Utilities (Audit, Purge, Recover)
6. Gestionar archivos de respaldo (BAK) y recuperación (SV$)
7. Exportar e importar archivos en diferentes formatos
8. Establecer convenciones de nombres y organización de archivos

## Introducción

La gestión adecuada de archivos es fundamental para mantener integridad de datos, prevenir pérdida de trabajo y asegurar compatibilidad en equipos colaborativos. Un archivo DWG corrupto o mal gestionado puede significar pérdida de días o semanas de trabajo.

AutoCAD 2026 introduce mejoras en gestión de archivos:

- **Auto-recovery mejorado**: Sistema de recuperación más robusto con menos corrupción
- **Cloud integration**: Autosave automático a Autodesk Docs (con cuenta)
- **Version control hints**: Sugerencias de control de versiones integrado
- **Faster save**: Guardado 30% más rápido en archivos grandes
- **Better corruption detection**: Detección proactiva de problemas antes de guardado

Estadísticas de Autodesk: El 15% de usuarios pierde trabajo anualmente por falta de guardado regular. El 95% de archivos corruptos son recuperables con herramientas adecuadas.

## Contenido

### 1. El Formato DWG (Drawing)

**DWG** es el formato nativo de AutoCAD desde 1982. Es un formato binario propietario que contiene:

- Geometría vectorial (líneas, círculos, arcos, splines, etc.)
- Metadatos del dibujo (autor, fecha, tiempo de edición)
- Capas (layers) y propiedades de objetos
- Bloques y referencias externas (XREFs)
- Estilos de texto, dimensiones, multilíneas
- Layouts y viewports
- Configuración de plotting
- Objetos OLE y raster images
- Datos de aplicaciones terceras (ARX, .NET, LISP)

**Tamaño de archivo**:
- Archivo nuevo vacío: ~40KB
- Archivo simple (plano básico): 100KB - 500KB
- Archivo complejo (edificio completo): 5MB - 50MB
- Archivo muy complejo (con XREFs, imágenes): 100MB+

### 2. Versiones del Formato DWG

AutoCAD actualiza el formato DWG aproximadamente cada 3 años:

**Versiones históricas**:
- AutoCAD 2018/2019/2020/2021 → DWG 2018 format
- AutoCAD 2022/2023/2024/2025 → DWG 2018 format (sin cambio)
- **AutoCAD 2026** → **DWG 2024 format** (nuevo)

**Novedad DWG 2024 format**:
- Mejor compresión (archivos 15% más pequeños)
- Support para nuevos object types
- Metadata expandida para cloud collaboration
- Enhanced security signatures

**Compatibilidad hacia atrás**:

AutoCAD 2026 puede **abrir** archivos de versiones antiguas:
- ✓ DWG 2018 (AutoCAD 2018-2025)
- ✓ DWG 2013 (AutoCAD 2013-2017)
- ✓ DWG 2010 (AutoCAD 2010-2012)
- ✓ DWG 2007 (AutoCAD 2007-2009)
- ✓ Hasta DWG R14 (AutoCAD 14, 1997)

AutoCAD 2026 puede **guardar** en formatos compatibles:
- DWG 2024 (predeterminado - AutoCAD 2026)
- DWG 2018 (AutoCAD 2018-2025)
- DWG 2013 (AutoCAD 2013-2017)
- DWG 2010
- DWG 2007
- DWG 2004
- DWG 2000/LT2000

**Configuración de formato de guardado**:
```
OPTIONS > Tab "Open and Save"
File Save > Save as: [Dropdown]
Selecciona: "AutoCAD 2018/LT2018 Drawing (*.dwg)"
[Para máxima compatibilidad con versiones recientes]
```

**Recomendación profesional**:
- Proyectos internos: DWG 2024 (máximo features)
- Proyectos colaborativos: DWG 2018 (compatibilidad 2018-2025)
- Envío a clientes: Preguntar versión, generalmente DWG 2018

### 3. Comandos Básicos de Gestión de Archivos

#### NEW (Nuevo Archivo)

Crea un nuevo dibujo.

**Métodos de activación**:
- Command: `NEW` o `QNEW`
- Atajo: `Ctrl+N`
- Application Menu: New > Drawing
- Quick Access Toolbar: Icono New

**Procedimiento con NEW**:
```
Command: NEW
[Abre diálogo "Select template"]
[Navega a Templates folder]
[Selecciona plantilla: acad.dwt, acadiso.dwt, o personalizada]
[Open]
```

**Procedimiento con QNEW** (Quick New):
```
Command: QNEW
[Crea nuevo dibujo usando plantilla predeterminada]
[Sin diálogo - más rápido]
```

**Configurar plantilla predeterminada**:
```
OPTIONS > Tab "Files"
Expand "Template Settings"
Expand "Default Template File Name for QNEW"
[Especifica ruta: C:\Templates\MiPlantilla.dwt]
```

**Plantillas incluidas**:
- **acad.dwt**: Imperial (inches), usado en EE.UU.
- **acadiso.dwt**: Métrico (mm), estándar ISO
- **acad -Named Plot Styles.dwt**: Con named plot styles
- **acadiso -Named Plot Styles.dwt**: ISO con named plot styles

#### OPEN (Abrir Archivo)

Abre un archivo DWG existente.

**Métodos**:
- Command: `OPEN`
- Atajo: `Ctrl+O`
- Application Menu: Open
- Drag & drop archivo DWG sobre AutoCAD

**Procedimiento**:
```
Command: OPEN
[Diálogo "Select File"]
[Navega a carpeta]
[Selecciona archivo .dwg]
[Open]
```

**Opciones de Open**:

**Open Read-Only**: Abre sin permitir guardado (protege original)
```
[Selecciona archivo]
[Dropdown junto a "Open" button]
[Select "Open Read-Only"]
```

**Partial Open**: Abre solo geometría visible o capas específicas (para archivos muy grandes)
```
[Selecciona archivo]
[Dropdown > "Partial Open"]
[Selecciona layers a cargar]
[Open]
```

![Partial Open Dialog](../imagenes/leccion-6-partial-open.png)

**Recent Files** (Archivos recientes):
```
Application Menu > Recent Documents
[Lista de últimos 9 archivos abiertos]
[Clic para abrir directamente]
```

**Configurar cantidad de recent files**:
```
OPTIONS > Open and Save
Application Menu > Number of recently-used files: 1-50
```

#### SAVE (Guardar)

Guarda el archivo actual.

**Métodos**:
- Command: `SAVE` o `QSAVE`
- Atajo: `Ctrl+S`
- Quick Access Toolbar: Icono Save

**QSAVE vs SAVE**:

**QSAVE** (Quick Save - recomendado):
```
Command: QSAVE
[Si archivo nunca guardado: abre diálogo Save Drawing As]
[Si archivo ya guardado: guarda silenciosamente sin diálogo]
```

**SAVE**:
```
Command: SAVE
[Siempre abre diálogo Save Drawing As]
[Permite cambiar nombre, ubicación, formato]
```

**Buena práctica**: Usa `Ctrl+S` (QSAVE) cada 5-10 minutos durante trabajo activo.

#### SAVEAS (Guardar Como)

Guarda archivo con nuevo nombre, ubicación o formato.

**Métodos**:
- Command: `SAVEAS`
- Atajo: `Ctrl+Shift+S`
- Application Menu: Save As

**Procedimiento**:
```
Command: SAVEAS
[Diálogo "Save Drawing As"]
File name: [Nuevo nombre]
Save as type: [Formato - DWG, DWT, DXF]
Save in: [Ubicación]
[Save]
```

**Usos comunes**:
- Crear versión alternativa (Plano_v1, Plano_v2)
- Cambiar formato (DWG 2024 → DWG 2018)
- Exportar a DXF para compatibilidad
- Guardar en ubicación diferente

**Save as type options**:
- AutoCAD 2026 Drawing (*.dwg) - Formato nativo 2026
- AutoCAD 2018 Drawing (*.dwg) - Compatibilidad
- AutoCAD Drawing Template (*.dwt) - Plantilla
- AutoCAD 2026 DXF (*.dxf) - Intercambio
- AutoCAD Drawing Standards (*.dws) - Estándares

#### CLOSE (Cerrar)

Cierra el dibujo actual.

**Métodos**:
- Command: `CLOSE`
- Atajo: `Ctrl+F4`
- Botón X en tab del dibujo

**Procedimiento**:
```
Command: CLOSE
[Si hay cambios sin guardar:]
  "Save changes to Drawing1.dwg?"
  [Yes / No / Cancel]
```

**CLOSEALL**: Cierra todos los dibujos abiertos
```
Command: CLOSEALL
[Pregunta por cada dibujo con cambios sin guardar]
```

### 4. Plantillas DWT (Drawing Template)

Las plantillas son archivos maestros con configuraciones predefinidas que sirven de base para nuevos dibujos.

**Contenido típico de una plantilla**:
- ✓ Unidades (Units)
- ✓ Límites del dibujo (Limits)
- ✓ Capas predefinidas (Layers)
- ✓ Estilos de texto (Text Styles)
- ✓ Estilos de dimensión (Dimension Styles)
- ✓ Estilos de multilínea (Multileader Styles)
- ✓ Configuración de grid y snap
- ✓ Layouts predefinidos
- ✓ Bloques comunes
- ✓ Title blocks

#### Crear Plantilla Personalizada

**Procedimiento completo**:

```
Paso 1: Crear archivo base
Command: NEW > [Usa acad.dwt o acadiso.dwt]

Paso 2: Configurar unidades
Command: UNITS
  Type: [Decimal / Architectural / Engineering]
  Precision: [Según necesidad]
  Angle: Decimal Degrees
  OK

Paso 3: Establecer límites
Command: LIMITS
  Lower left: 0,0
  Upper right: [Tamaño de hoja deseado]
  Ejemplo métrico A3: 420,297
  Ejemplo imperial D-size: 36,24

Command: ZOOM > ALL

Paso 4: Configurar Grid y Snap
Command: DSETTINGS > Tab "Snap and Grid"
  Snap spacing: [Según escala de trabajo]
  Grid spacing: [Múltiplo de snap]
  Snap ON, Grid ON

Paso 5: Crear capas estándar
Command: LAYER
  New layer: MUROS
    Color: White (7)
    Linetype: Continuous
    Lineweight: 0.50mm
  New layer: PUERTAS
    Color: Red (1)
    Linetype: Continuous
    Lineweight: 0.25mm
  New layer: VENTANAS
    Color: Blue (5)
    Linetype: Continuous
    Lineweight: 0.25mm
  New layer: ANOTACIONES
    Color: Green (3)
    Linetype: Continuous
    Lineweight: 0.13mm
  New layer: EJES
    Color: Magenta (6)
    Linetype: CENTER
    Lineweight: 0.18mm
  [Agregar capas según necesidad del proyecto tipo]
  OK

Paso 6: Crear estilos de texto
Command: STYLE
  New: ARIAL_3mm
    Font: Arial
    Height: 3mm (o 0.0000 para variable)
  New: ROMANS_2.5mm
    Font: Romans.shx
    Height: 2.5mm
  Apply > Close

Paso 7: Configurar dimension style básico
Command: DIMSTYLE
  [Configurar estilo según normas - veremos en Módulo 5]

Paso 8: Guardar como plantilla
Command: SAVEAS
  Save as type: AutoCAD Drawing Template (*.dwt)
  File name: Plantilla_Arquitectonica_Metrica.dwt
  Description: "Plantilla para proyectos arquitectónicos, unidades métricas, sistema ISO, capas estándar AIA"
  Measurement: Metric / English
  Save
```

![Save Template Dialog](../imagenes/leccion-6-save-template.png)

**Ubicación de plantillas**:

Carpeta predeterminada:
```
C:\Users\[Usuario]\AppData\Local\Autodesk\AutoCAD 2026\R24.2\enu\Template\
```

Agregar carpeta personalizada:
```
OPTIONS > Files
Expand "Template Settings"
Expand "Drawing Template File Location"
Add... > [Navega a tu carpeta]
```

#### Usar Plantilla

**Método 1: Al crear nuevo dibujo**:
```
Command: NEW
[Selecciona tu plantilla de la lista]
Open
```

**Método 2: Template predeterminado para QNEW**:
```
OPTIONS > Files > Default Template File Name for QNEW
[Especifica tu plantilla]
Ahora Ctrl+N usa automáticamente tu plantilla
```

**Método 3: Wizard** (asistente - menos usado):
```
NEW > [Botón "Use a Wizard"]
Advanced Setup / Quick Setup
[Sigue pasos del asistente]
```

### 5. Automatic Save y Recuperación

AutoCAD incluye sistema robusto de recuperación ante crashes.

#### Configurar Automatic Save

**Opciones**:
```
Command: OPTIONS > Tab "Open and Save"

File Safety Precautions:
✓ Automatic save
Minutes between saves: 10 [recomendado: 5-15 minutos]

Auto-save file location:
C:\Users\[Usuario]\AppData\Local\Temp\
[Puedes cambiar a carpeta específica]
```

**Funcionamiento**:
- AutoCAD guarda archivo temporal cada X minutos
- Archivo temporal: Drawing1_1_1_1234.sv$
- Solo si hubo cambios desde último save
- NO reemplaza archivo DWG original
- Se elimina automáticamente al cerrar AutoCAD normalmente

**Recuperar archivo tras crash**:
```
1. Reinicia AutoCAD tras crash
2. Drawing Recovery Manager se abre automáticamente
3. Lista archivos recuperables:
   - Backup Files (.bak)
   - Autosave Files (.sv$)
   - Drawing File (original .dwg)
4. Preview de cada archivo
5. Selecciona versión más reciente
6. Clic derecho > Open
7. SAVEAS con nuevo nombre inmediatamente
```

![Drawing Recovery Manager](../imagenes/leccion-6-recovery-manager.png)

**Comando DRAWINGRECOVERY** (manual):
```
Command: DRAWINGRECOVERY
[Abre Drawing Recovery Manager manualmente]
```

#### Archivos de Respaldo (.BAK)

**Configuración**:
```
OPTIONS > Open and Save
File Safety Precautions:
✓ Create backup copy with each save
```

**Funcionamiento**:
- Cada vez que guardas (SAVE/QSAVE)
- AutoCAD renombra .dwg actual a .bak
- Guarda nueva versión como .dwg
- Resultado: Siempre tienes versión anterior como .bak

**Recuperar desde .BAK**:
```
1. Navega a carpeta del dibujo
2. Encuentra archivo_nombre.bak
3. Renombra a archivo_nombre_recuperado.dwg
4. OPEN en AutoCAD
```

**Ejemplo**:
```
Tienes: Plano_Arquitectonico.dwg (versión actual con error)
Existe: Plano_Arquitectonico.bak (versión anterior correcta)

Recuperación:
1. Renombra Plano_Arquitectonico.bak → Plano_Arquitectonico_v_anterior.dwg
2. Abre Plano_Arquitectonico_v_anterior.dwg
3. Verifica integridad
4. SAVEAS como Plano_Arquitectonico.dwg (sobrescribe versión con error)
```

### 6. Drawing Utilities (Utilidades de Dibujo)

Herramientas para mantener integridad y optimizar archivos.

#### AUDIT (Auditar)

Detecta y corrige errores en la base de datos del dibujo.

**Comando**:
```
Command: AUDIT
Fix any errors detected? [Yes/No] <Y>: Y

[AutoCAD escanea archivo]
[Reporte en command line:]
  Total errors found: 2 fixed 2
  Total errors found: 0 fixed 0 [si está limpio]
```

**Cuándo usar AUDIT**:
- Mensaje "Drawing file is not valid"
- Comportamiento extraño del dibujo
- Antes de entregar archivo importante
- Rutinariamente en archivos grandes (mensual)

**AUDIT con reporte detallado**:
```
Command: -AUDIT (con guión)
Y [Enter]
[Genera reporte .txt en carpeta del dibujo]
```

#### PURGE (Purgar)

Elimina elementos no utilizados para reducir tamaño de archivo.

**Comando**:
```
Command: PURGE
[Diálogo "Purge"]
```

**Elementos que PURGE elimina**:
- Layers sin objetos
- Linetypes no usados
- Text styles no usados
- Dimension styles no usados
- Blocks no insertados
- Shapes no usados
- Multiline styles no usados
- Table styles no usados

![Purge Dialog](../imagenes/leccion-6-purge-dialog.png)

**Procedimiento**:
```
PURGE dialog:
  View items you can purge:
    [Expandir categorías]
    [Selecciona elementos a purgar]
  O: Purge All
  [Clic "Purge" button]

  Confirm each item to be purged:
    ✓ [Marca si quieres confirmación individual]
    O desmarca para purgar todo sin confirmar
```

**Cuándo usar PURGE**:
- Antes de enviar archivo a cliente (reduce tamaño)
- Tras importar muchos bloques (limpia no usados)
- Archivo crece inexplicablemente
- Como mantenimiento rutinario

**Tip profesional**: Ejecuta PURGE varias veces consecutivas (a veces elimina dependencias en capas).

```
PURGE > Purge All
PURGE > Purge All [segunda vez puede encontrar más]
PURGE > Purge All [tercera vez generalmente ya no encuentra nada]
```

#### RECOVER (Recuperar)

Recupera archivo DWG dañado.

**Comando**:
```
Command: RECOVER
[Diálogo "Select File"]
[Selecciona archivo .dwg dañado]
[Open]

[AutoCAD ejecuta recovery process:]
  - AUDIT automático
  - Intenta reparar errores
  - Abre archivo si es posible
  - Genera reporte de recuperación
```

**Proceso**:
1. RECOVER detecta errores
2. Intenta corregir automáticamente
3. Marca objetos no recuperables
4. Abre archivo con objetos salvables
5. Guarda inmediatamente como nuevo archivo

**RECOVERALL** (versión extendida):
```
Command: RECOVERALL
[Recupera archivo + todas sus XREFs automáticamente]
```

**Cuándo usar RECOVER**:
- Archivo no abre ("Drawing file is not valid")
- Crash durante guardado
- Corrupción de datos
- Transferencia de archivo interrumpida

**Importante**: RECOVER solo funciona si hay algo recuperable. Archivos completamente corruptos (0 bytes, truncados) son irrecuperables.

#### OVERKILL (Eliminar Duplicados)

Elimina geometría duplicada o superpuesta.

**Comando**:
```
Command: OVERKILL
Select objects: ALL [Enter]
Select objects: [Enter]
[Diálogo "Delete Duplicate Objects"]
  Tolerance: 0.0000 [precisión de duplicación]
  ✓ Ignore object properties [ignora color, layer en comparación]
  ✓ Optimize segments within polylines
  ✓ Delete duplicate objects
  OK

[Reporte:]
  X duplicate object(s) deleted
```

**Cuándo usar**:
- Archivo importado de otros CAD (a menudo con duplicados)
- Tras múltiples copy-paste
- Archivo heredado mal dibujado
- Reducir tamaño y mejorar performance

### 7. Exportación e Importación

#### Exportar a otros formatos

**DXF (Drawing Exchange Format)**:
```
SAVEAS > Save as type: AutoCAD 2026 DXF (*.dxf)
```
- Formato de intercambio universal
- ASCII o Binary
- Compatible con casi todo software CAD/CAM

**PDF**:
```
Command: EXPORTPDF
O: PLOT > Plot to: DWG to PDF.pc3
```
- Formato universal para visualización
- No editable (protege diseño)
- Ideal para envío a clientes

**DWF/DWFx**:
```
Command: EXPORT > DWF/DWFx
```
- Autodesk Design Web Format
- Visualizable con Autodesk Viewer gratuito
- Incluye metadata y markup

**Formatos de imagen**:
```
Command: EXPORT > Bitmap (*.bmp)
O: PNGOUT, JPEGOUT, TIFOUT
```

#### Importar de otros formatos

**DXF**:
```
OPEN > Files of type: DXF (*.dxf)
O: Command: DXFIN
```

**PDF** (AutoCAD 2026 feature):
```
INSERT > PDF
[Importa geometría de PDF como AutoCAD objects]
```

**Imágenes (Raster)**:
```
INSERT > Raster Image Reference
Formatos: PNG, JPG, TIF, BMP
```

### 8. Convenciones de Nombres de Archivos

**Mejores prácticas**:

**Estructura de nombres**:
```
[Proyecto]_[Tipo]_[Disciplina]_[Número]_[Versión].dwg

Ejemplos:
HOTEL_RIVIERA_ARQ_PLANTA_01_v3.dwg
PUENTE_XYZ_EST_VIGAS_05_REV_A.dwg
CASA_LOPEZ_ARQ_FACHADA_SUR_v1.dwg
```

**Reglas**:
- ❌ Espacios: "Mi Plano.dwg"
- ✓ Guiones bajos: "Mi_Plano.dwg"
- ❌ Caracteres especiales: "Plano#2@final.dwg"
- ✓ Alfanuméricos: "Plano_2_Final.dwg"
- ✓ Fechas formato ISO: "Plano_2026-01-15.dwg"
- ✓ Versiones claras: v1, v2, REV_A, REV_B

**Estructura de carpetas**:
```
Proyecto_Casa_Rodriguez/
  ├── 01_Arquitectura/
  │   ├── Plantas/
  │   ├── Elevaciones/
  │   ├── Cortes/
  │   └── Detalles/
  ├── 02_Estructura/
  ├── 03_Instalaciones/
  │   ├── Electricas/
  │   ├── Sanitarias/
  │   └── HVAC/
  ├── 04_Referencias/
  │   ├── PDFs/
  │   └── Imagenes/
  ├── 05_Plantillas/
  └── 06_Archivados/
      └── Versiones_Anteriores/
```

## Ejercicio Práctico

**Ejercicio 6.1: Crear Plantilla Personalizada**

Tiempo: 45 minutos

[Sigue procedimiento completo de Paso 1-8 descrito arriba]
Crea plantilla para tu disciplina (arquitectura/mecánica/civil)

**Ejercicio 6.2: Recuperación de Archivos**

Tiempo: 20 minutos

1. Crea dibujo con varios objetos
2. Guarda como "Test_Recovery.dwg"
3. Agrega más objetos (no guardes)
4. Simula crash: Mata proceso de AutoCAD (Task Manager)
5. Reinicia AutoCAD
6. Usa Drawing Recovery Manager para recuperar
7. Verifica objetos recuperados

**Ejercicio 6.3: Drawing Utilities**

Tiempo: 25 minutos

1. Abre archivo existente complejo
2. Ejecuta AUDIT > Observa reporte
3. Ejecuta PURGE > Purge All
4. Nota tamaño de archivo antes y después
5. Si tienes archivo corrupto, practica RECOVER

## Resumen

Dominaste gestión de archivos DWG:

✓ **NEW/OPEN/SAVE/SAVEAS/CLOSE**: Comandos básicos
✓ **Formato DWG**: Versiones y compatibilidad
✓ **Plantillas DWT**: Creación y uso
✓ **Automatic Save**: Configuración y recuperación
✓ **Archivos .BAK**: Respaldos automáticos
✓ **AUDIT**: Verificar integridad
✓ **PURGE**: Optimizar tamaño
✓ **RECOVER**: Recuperar archivos dañados
✓ **Exportar/Importar**: DXF, PDF, imágenes

**Comandos esenciales**:
- `Ctrl+N`: New
- `Ctrl+O`: Open
- `Ctrl+S`: Save
- `Ctrl+Shift+S`: SaveAs
- `Ctrl+F4`: Close
- `AUDIT`: Verificar
- `PURGE`: Limpiar
- `RECOVER`: Recuperar

**Regla de oro**:
> "Guardar cada 5 minutos, AUDIT semanalmente, PURGE antes de entregar"

## Preguntas de Autoevaluación

1. ¿Cuál es la diferencia entre SAVE y QSAVE?
2. ¿Qué formato DWG debes usar para compatibilidad máxima?
3. ¿Cómo recuperas un archivo tras un crash?
4. ¿Qué hace el comando PURGE?
5. ¿Cuándo usas AUDIT?
6. ¿Qué extensión tienen los archivos de plantilla?
7. ¿Cómo recuperas un archivo .BAK?
8. ¿Con qué frecuencia debe configurarse Automatic Save?

---

**¡Felicitaciones!** Has completado el Módulo 1: Introducción a AutoCAD 2026. Ahora dominas los fundamentos de la interfaz, coordenadas, navegación, selección, entrada dinámica y gestión de archivos.

**Próximo módulo**: Módulo 2: Comandos de Dibujo Básico - comenzarás a crear geometría 2D usando los comandos fundamentales de AutoCAD.
