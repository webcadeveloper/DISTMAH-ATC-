# Lección 7: Nuevas Herramientas de Automatización

## Introducción

La automatización es donde AutoCAD 2026 verdaderamente brilla para usuarios que realizan tareas repetitivas. Esta versión introduce integración nativa con Python (el lenguaje de programación más popular del mundo), Action Macros completamente renovados con IA, batch processing optimizado que puede procesar cientos de archivos desatendido, y APIs nuevas que permiten crear comandos personalizados sin necesidad de C++ compilado.

Estas herramientas no requieren ser programador experto. Los ejemplos y templates proporcionados permiten automatizar el 80% de tareas comunes con mínima o nula codificación. Para casos avanzados, la integración Python abre posibilidades ilimitadas. Esta lección te mostrará desde automatizaciones simples (grabar macro de 3 pasos) hasta avanzadas (script Python que procesa 500 archivos extrayendo datos a Excel).

## Objetivos de la Lección

- Implementar integración Python para scripting avanzado
- Crear Action Macros complejos con lógica condicional
- Configurar batch processing para múltiples archivos
- Desarrollar comandos personalizados con nuevas APIs
- Automatizar generación de templates y standards
- Medir tiempo ahorrado por automatizaciones

## Duración
1 hora

## Contenido

### 1. Integración Python Nativa

**Python en AutoCAD: Finalmente Nativo**

AutoCAD 2026 incluye intérprete Python 3.11 integrado:

**Verificar Python Disponible:**
```
Comando: PYINFO

Muestra:
- Python version: 3.11.5
- Installation path: C:\Program Files\Autodesk\AutoCAD 2026\Python311
- Modules available: autocad, sys, os, math, json, xml, etc.
- PyAutoCAD module: v2026.1.0 (API AutoCAD)
```

**Primer Script Python:**

```python
# Archivo: hello_autocad.py
from autocad import *

# Obtener documento activo
doc = acad.ActiveDocument
model = doc.ModelSpace

# Crear texto
text_point = APoint(0, 0, 0)
text_obj = model.AddText("Hola desde Python!", text_point, 5.0)

# Cambiar color a rojo
text_obj.Color = acad.acRed

print("Texto creado exitosamente")
```

**Ejecutar Script:**
```
Método 1 - Comando:
PYLOAD → Selecciona hello_autocad.py → OK

Método 2 - Drag & Drop:
Arrastra archivo .py a ventana AutoCAD → Ejecuta automáticamente

Método 3 - Command line directo:
PYEXEC "print('Hola desde command line')"
```

![Python Integration](../imagenes/leccion-7-python-integration.png)

**PyAutoCAD Module - API Completo:**

El módulo `autocad` proporciona acceso completo:

```python
from autocad import *

# Geometría básica
# Línea
start = APoint(0, 0, 0)
end = APoint(100, 100, 0)
line = model.AddLine(start, end)

# Círculo
center = APoint(50, 50, 0)
radius = 25
circle = model.AddCircle(center, radius)

# Polilínea
points = [0,0,0, 100,0,0, 100,100,0, 0,100,0, 0,0,0]
pline = model.AddPolyline(aDouble(points))

# Propiedades
line.Layer = "GEOMETRY"
circle.Color = acad.acBlue
pline.LineWeight = acLineWeight.acLnWt030

# Operaciones
circle.Move(APoint(50,50,0), APoint(75,75,0))
line.Rotate(APoint(50,50,0), 0.785)  # 45 grados en radianes

# Selección
selection = doc.SelectionSets.Add("MySelection")
selection.SelectOnScreen()  # Usuario selecciona objetos
for obj in selection:
    obj.Color = acad.acRed
```

**Ejemplo Práctico - Numerar Objetos:**

```python
# Archivo: numerar_objetos.py
from autocad import *

def numerar_circulos():
    """Numera todos los círculos en el dibujo"""
    doc = acad.ActiveDocument
    model = doc.ModelSpace

    # Encontrar todos los círculos
    circulos = []
    for obj in model:
        if obj.ObjectName == "AcDbCircle":
            circulos.append(obj)

    # Ordenar por coordenada X
    circulos.sort(key=lambda c: c.Center[0])

    # Añadir número a cada círculo
    for i, circulo in enumerate(circulos, start=1):
        # Crear texto en centro de círculo
        text_point = APoint(circulo.Center[0], circulo.Center[1], 0)
        text_height = circulo.Radius * 0.5
        text_obj = model.AddText(str(i), text_point, text_height)
        text_obj.Alignment = acad.acAlignmentMiddleCenter
        text_obj.TextAlignmentPoint = text_point
        text_obj.Color = acad.acRed

    print(f"Numerados {len(circulos)} círculos")

# Ejecutar
numerar_circulos()
```

**Integración con Librerías Externas:**

Puedes usar cualquier librería Python:

```python
# Archivo: exportar_a_excel.py
import openpyxl  # Requiere: pip install openpyxl
from autocad import *

def exportar_datos_bloques():
    """Exporta información de bloques a Excel"""
    doc = acad.ActiveDocument
    model = doc.ModelSpace

    # Crear workbook Excel
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Bloques AutoCAD"

    # Headers
    ws['A1'] = "Nombre Bloque"
    ws['B1'] = "Posición X"
    ws['C1'] = "Posición Y"
    ws['D1'] = "Rotación"
    ws['E1'] = "Escala"

    # Recopilar datos
    row = 2
    for obj in model:
        if obj.ObjectName == "AcDbBlockReference":
            ws[f'A{row}'] = obj.Name
            ws[f'B{row}'] = obj.InsertionPoint[0]
            ws[f'C{row}'] = obj.InsertionPoint[1]
            ws[f'D{row}'] = obj.Rotation * 180 / 3.14159  # Radianes a grados
            ws[f'E{row}'] = obj.XScaleFactor
            row += 1

    # Guardar
    wb.save("bloques_autocad.xlsx")
    print(f"Exportados {row-2} bloques a bloques_autocad.xlsx")

exportar_datos_bloques()
```

**Instalar Librerías Python:**
```
En command prompt (Administrador):
cd "C:\Program Files\Autodesk\AutoCAD 2026\Python311"
python.exe -m pip install openpyxl pandas numpy

Librerías útiles:
- openpyxl: Excel
- pandas: Análisis de datos
- numpy: Cálculos matemáticos
- requests: APIs web
- Pillow: Procesamiento de imágenes
```

### 2. Action Macros Avanzados

**Action Recorder Mejorado con IA**

El Action Recorder tradicional ha sido completamente renovado:

**Crear Macro Básico:**
```
1. Ribbon → Manage → Action Recorder → Record
2. Ejecuta acciones (ej: CIRCLE → OFFSET → HATCH)
3. Stop recording
4. Save macro: "Circulo_Offset_Hatch"

Nuevo en 2026:
- AI detecta loops automáticamente
- Sugiere pausas para user input
- Optimiza acciones redundantes
```

**Macro con Lógica Condicional:**

AutoCAD 2026 permite macros con decisiones:

```
Ejemplo: Macro que cambia color según layer

Grabación:
1. Record
2. SELECT objeto
3. Pause for user input (nuevo botón)
4. CHANGE → Color
5. If layer = "WALL" then color = RED
6. If layer = "DOOR" then color = GREEN
7. Else color = BYLAYER
8. Stop

Syntax (se genera automáticamente):
<macro>
  <action cmd="SELECT" pause="true"/>
  <condition property="Layer">
    <case value="WALL">
      <action cmd="COLOR" value="1"/>
    </case>
    <case value="DOOR">
      <action cmd="COLOR" value="3"/>
    </case>
    <default>
      <action cmd="COLOR" value="BYLAYER"/>
    </default>
  </condition>
</macro>
```

**Variables en Macros:**

```
Macro: Crear grid de círculos

ACTIONMACRO → Variables tab

Define:
- $ROWS = 5 (user input al ejecutar)
- $COLS = 5 (user input)
- $SPACING = 10 (user input)
- $RADIUS = 5 (user input)

Macro logic:
For i = 0 to $ROWS-1:
  For j = 0 to $COLS-1:
    CIRCLE center=($SPACING*i, $SPACING*j) radius=$RADIUS

Al ejecutar:
- Prompt: "Rows?" → Usuario: 5
- Prompt: "Columns?" → Usuario: 5
- Prompt: "Spacing?" → Usuario: 10
- Prompt: "Radius?" → Usuario: 5
- Ejecuta loop creando 25 círculos
```

**Macro Library y Sharing:**

```
Exportar macro:
ACTIONMACRO → Manage → Export
Formato: .ACTM file

Importar:
ACTIONMACRO → Manage → Import → Select .ACTM

Cloud sharing (nuevo 2026):
ACTIONMACRO → Share to team
- Upload a Autodesk Docs → Team folder
- Team members pueden download e import
- Version control automático
```

![Action Macro Editor](../imagenes/leccion-7-action-macro.png)

### 3. Batch Processing Optimizado

**Script Batch Mejorado**

AutoCAD 2026 puede procesar cientos de archivos desatendidos:

**Script Básico (SCR file):**

```
; Archivo: batch_purge.scr
; Purge múltiples archivos

-PURGE A * N
-PURGE R * N
-PURGE L * N
QSAVE
CLOSE
```

**Ejecutar en Múltiples Archivos:**

Método 1 - Command Line Batch:
```
En Windows Command Prompt:

"C:\Program Files\Autodesk\AutoCAD 2026\acad.exe" /b batch_purge.scr /s "C:\Sheets\Support" "C:\Projects\Building_A\*.dwg"

Parámetros:
/b = Batch mode (no UI)
/s = Support path (para xrefs, fonts, etc)
*.dwg = Wildcard (todos los DWG en carpeta)
```

Método 2 - Batch Publish (GUI):
```
Comando: PUBLISH

Options:
- Add drawings: Select múltiples archivos
- Publish to: DWF / PDF / Plot
- Check "Run script": batch_purge.scr
- Publish

AutoCAD procesa todos automáticamente
```

**Script Complejo - Extract Data:**

```
; Archivo: extract_data.scr
; Extrae datos de bloques a TXT

ATTEXT
C
extract_template.txt
extract_output.txt

QSAVE
CLOSE
```

**Python para Batch Processing Avanzado:**

```python
# Archivo: batch_process.py
import os
import glob
from autocad import *

def procesar_directorio(carpeta, script_funcion):
    """Procesa todos los DWG en carpeta"""
    archivos = glob.glob(os.path.join(carpeta, "*.dwg"))

    for archivo in archivos:
        print(f"Procesando: {archivo}")
        try:
            # Abrir archivo
            doc = acad.Documents.Open(archivo)

            # Ejecutar función personalizada
            script_funcion(doc)

            # Guardar y cerrar
            doc.Save()
            doc.Close()

            print(f"  ✓ Completado")
        except Exception as e:
            print(f"  ✗ Error: {e}")

def mi_procesamiento(doc):
    """Define qué hacer con cada archivo"""
    # Ejemplo: Purge all
    doc.PurgeAll()

    # Ejemplo: Cambiar todas las líneas a capa "0"
    for obj in doc.ModelSpace:
        if obj.ObjectName == "AcDbLine":
            obj.Layer = "0"

    # Ejemplo: Añadir timestamp
    model = doc.ModelSpace
    text = f"Procesado: {os.path.basename(doc.Name)}"
    model.AddText(text, APoint(0,0,0), 2.5)

# Ejecutar
procesar_directorio("C:\\Projects\\BatchTest", mi_procesamiento)
```

### 4. Custom Commands con APIs Nuevas

**Crear Comandos Personalizados**

AutoCAD 2026 permite crear comandos custom sin C++:

**Comando Python:**

```python
# Archivo: custom_commands.py
from autocad import *

def cmd_circulo_rapido():
    """Comando personalizado: CR (Círculo Rápido)"""
    try:
        # Prompt usuario
        center = acad.Utility.GetPoint("\nCentro del círculo: ")
        radius = acad.Utility.GetDistance(center, "\nRadio: ")

        # Crear círculo
        doc = acad.ActiveDocument
        circle = doc.ModelSpace.AddCircle(center, radius)
        circle.Color = acad.acRed

        print("Círculo creado")
    except:
        print("Comando cancelado")

def cmd_numerar():
    """Comando personalizado: NUM (Numerar objetos)"""
    doc = acad.ActiveDocument
    selection = doc.Utility.GetSelection("\nSelecciona objetos a numerar: ")

    for i, obj in enumerate(selection, start=1):
        # Crear texto en centro aproximado
        if hasattr(obj, 'Center'):
            pos = obj.Center
        elif hasattr(obj, 'StartPoint'):
            pos = obj.StartPoint
        else:
            continue

        text_obj = doc.ModelSpace.AddText(str(i), pos, 5.0)
        text_obj.Color = acad.acRed

# Registrar comandos
acad.RegisterCommand("CR", cmd_circulo_rapido, "Círculo rápido rojo")
acad.RegisterCommand("NUM", cmd_numerar, "Numerar objetos seleccionados")

print("Comandos personalizados cargados: CR, NUM")
```

**Autoload en Startup:**

Para cargar automáticamente al iniciar AutoCAD:
```
1. Guarda custom_commands.py en:
   C:\Users\[Usuario]\AppData\Roaming\Autodesk\AutoCAD 2026\Startup

2. O añade a acad2026doc.lsp:
   (command "PYLOAD" "C:\\Scripts\\custom_commands.py")

3. Reinicia AutoCAD

4. Verifica: Comando CR debe funcionar
```

### 5. Template Automation

**Generar Templates Automáticamente**

Scripts para crear/actualizar templates consistentes:

**Python - Template Generator:**

```python
# Archivo: generate_template.py
from autocad import *

def crear_template_arquitectura():
    """Crea template de arquitectura con capas standard"""
    doc = acad.Documents.Add()

    # Configuración de unidades
    doc.SetVariable("INSUNITS", 4)  # Centímetros
    doc.SetVariable("MEASUREMENT", 0)  # Sistema métrico

    # Crear capas standard
    capas_arquitectura = [
        ("A-WALL", 1, "Continuous", 0.30),  # (nombre, color, linetype, lineweight)
        ("A-DOOR", 2, "Continuous", 0.18),
        ("A-WIND", 4, "Continuous", 0.18),
        ("A-FURN", 7, "Continuous", 0.13),
        ("A-DIMS", 6, "Continuous", 0.09),
        ("A-TEXT", 7, "Continuous", 0.09),
        ("A-GRID", 8, "HIDDEN", 0.13),
    ]

    layers = doc.Layers
    for nombre, color, linetype, lw in capas_arquitectura:
        layer = layers.Add(nombre)
        layer.Color = color
        layer.Linetype = linetype
        layer.Lineweight = lw

    # Text styles
    styles = doc.TextStyles
    arial = styles.Add("ARIAL")
    arial.fontFile = "arial.ttf"
    arial.Height = 2.5

    # Dimension styles
    dimstyles = doc.DimStyles
    arq_dim = dimstyles.Add("ARQUITECTURA")
    arq_dim.DIMSCALE = 100
    arq_dim.DIMTXT = 2.5
    arq_dim.DIMASZ = 2.5

    # Layouts
    # (Código para crear layouts standard)

    # Guardar template
    template_path = "C:\\Templates\\Arquitectura_2026.dwt"
    doc.SaveAs(template_path, acad.ac2018_dwt)

    print(f"Template creado: {template_path}")

crear_template_arquitectura()
```

**Batch Update Templates:**

Script para actualizar bloques en todos los templates:

```python
# Archivo: update_templates.py
import os
from autocad import *

def actualizar_bloque_titulo(doc, nuevo_bloque_path):
    """Actualiza bloque de título en template"""
    # Purge bloque viejo
    doc.SendCommand("-PURGE B TITULO * N ")

    # Insert nuevo bloque
    doc.SendCommand(f"-INSERT {nuevo_bloque_path} 0,0 1 1 0 ")

    # Nombrar como TITULO
    doc.SendCommand("-RENAME B LAST TITULO ")

# Procesar todos los templates
templates_folder = "C:\\Templates"
nuevo_titulo = "C:\\Blocks\\TituloBlock_2026.dwg"

for template_file in os.listdir(templates_folder):
    if template_file.endswith(".dwt"):
        print(f"Actualizando: {template_file}")
        doc = acad.Documents.Open(os.path.join(templates_folder, template_file))
        actualizar_bloque_titulo(doc, nuevo_titulo)
        doc.Save()
        doc.Close()

print("Todos los templates actualizados")
```

### 6. Medición de Tiempo Ahorrado

**Calcular ROI de Automatizaciones**

```python
# Archivo: automation_roi.py
import time
from datetime import datetime

class AutomationTimer:
    def __init__(self, nombre_tarea):
        self.nombre = nombre_tarea
        self.inicio = None
        self.manual_time = None
        self.auto_time = None

    def medir_manual(self, func):
        """Mide tiempo de ejecución manual"""
        print(f"\n=== Midiendo: {self.nombre} (MANUAL) ===")
        input("Presiona Enter para iniciar...")
        self.inicio = time.time()
        func()
        self.manual_time = time.time() - self.inicio
        print(f"Tiempo manual: {self.manual_time:.2f} segundos")

    def medir_automatizado(self, func):
        """Mide tiempo de ejecución automatizada"""
        print(f"\n=== Midiendo: {self.nombre} (AUTOMATIZADO) ===")
        self.inicio = time.time()
        func()
        self.auto_time = time.time() - self.inicio
        print(f"Tiempo automatizado: {self.auto_time:.2f} segundos")

    def reporte(self, veces_por_semana):
        """Genera reporte de ahorro"""
        if not (self.manual_time and self.auto_time):
            print("Faltan mediciones")
            return

        ahorro_por_vez = self.manual_time - self.auto_time
        ahorro_semanal = ahorro_por_vez * veces_por_semana
        ahorro_anual = ahorro_semanal * 52

        print(f"\n{'='*50}")
        print(f"REPORTE: {self.nombre}")
        print(f"{'='*50}")
        print(f"Tiempo manual:        {self.manual_time:.2f}s")
        print(f"Tiempo automatizado:  {self.auto_time:.2f}s")
        print(f"Ahorro por vez:       {ahorro_por_vez:.2f}s ({ahorro_por_vez/60:.2f} min)")
        print(f"Frecuencia:           {veces_por_semana}x/semana")
        print(f"Ahorro semanal:       {ahorro_semanal/60:.2f} minutos")
        print(f"Ahorro anual:         {ahorro_anual/3600:.2f} horas")
        print(f"{'='*50}")

# Ejemplo de uso
timer = AutomationTimer("Numerar 50 círculos")

# Medir manual (usuario hace manualmente)
def tarea_manual():
    input("Numera 50 círculos manualmente, presiona Enter al terminar...")

# Medir automatizado
def tarea_auto():
    # Aquí va tu script de numeración automática
    numerar_circulos()  # Función del ejemplo anterior

timer.medir_manual(tarea_manual)
timer.medir_automatizado(tarea_auto)
timer.reporte(veces_por_semana=5)
```

## Ejercicio Práctico

**Ejercicio 1: Primer Script Python**

1. Crea archivo `mi_primer_script.py`
2. Escribe script que:
   - Cree 5 círculos en línea (spacing 20 unidades)
   - Radios: 5, 10, 15, 20, 25
   - Colores diferentes cada uno
3. Ejecuta con PYLOAD
4. Verifica resultado

**Ejercicio 2: Action Macro con Variables**

1. Crea macro que dibuje grid de rectángulos
2. Variables: rows, cols, width, height, spacing
3. Graba macro con pauses para user input
4. Exporta como .ACTM
5. Prueba ejecutar con diferentes valores

**Ejercicio 3: Batch Processing**

1. Crea 5 archivos DWG de prueba con contenido variado
2. Escribe script Python que:
   - Abra cada archivo
   - Ejecute PURGEALL
   - Cambie todas las líneas a layer "0"
   - Guarde y cierre
3. Ejecuta batch process
4. Verifica resultados

**Ejercicio 4: Custom Command**

1. Crea comando personalizado "RL" (Rectangle con Layer)
2. Prompt: Punto 1, Punto 2, Layer name
3. Crea rectángulo en layer especificado
4. Color automático según layer
5. Registra comando
6. Prueba: RL [Enter] → sigue prompts

**Ejercicio 5: Medición ROI**

1. Identifica tarea repetitiva real en tu trabajo
2. Mide tiempo manual (cronómetro)
3. Crea automatización (script o macro)
4. Mide tiempo automatizado
5. Calcula ahorro anual
6. Documenta en reporte

## Consejos Profesionales

- **Start simple:** Empieza con macros simples antes de scripts Python complejos
- **Test extensively:** Prueba scripts en archivos de prueba antes de producción
- **Error handling:** Siempre incluye try/except en scripts Python
- **Document:** Comenta tus scripts, olvidarás qué hacen en 6 meses
- **Version control:** Usa Git para scripts importantes

## Recursos Adicionales

- PyAutoCAD API Reference (completo)
- Biblioteca de scripts Python compartidos
- Action Macro templates library
- Video: "Python Scripting for AutoCAD - Fundamentals" (45 min)

## Resumen

Las herramientas de automatización de AutoCAD 2026 eliminan completamente tareas repetitivas. Python nativo abre posibilidades ilimitadas, Action Macros con IA simplifican automatizaciones simples, batch processing maneja cientos de archivos, y custom commands personalizan AutoCAD a tus necesidades exactas. Inversión inicial en automatización paga dividendos enormes a largo plazo.

## Próxima Lección

En la Lección 8, cerraremos el curso con mejores prácticas de migración desde versiones anteriores, estrategias de training para equipos, y cómo medir y documentar ROI completo de actualización a AutoCAD 2026.
