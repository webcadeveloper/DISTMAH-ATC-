# Lección 1: Dynamo Basics for Civil 3D

**Duración:** 1 hora
**Nivel:** Avanzado
**Objetivo:** Dominar los fundamentos de Dynamo for Civil 3D y crear tu primer script de automatización

---

## Introducción a Dynamo for Civil 3D

Dynamo es una herramienta de programación visual que revoluciona la forma en que trabajamos con Civil 3D. En lugar de escribir código tradicional, conectas nodos visuales que representan operaciones, permitiendo automatizar tareas complejas sin necesidad de ser programador.

### ¿Qué es Dynamo for Civil 3D?

Dynamo for Civil 3D es una extensión especializada de Dynamo que permite:

1. **Automatizar tareas repetitivas** - Elimina trabajo manual tedioso
2. **Crear geometría paramétrica** - Diseños que se actualizan automáticamente
3. **Integrar datos externos** - Excel, bases de datos, archivos CSV
4. **Manipular objetos de Civil 3D** - Alineamientos, superficies, corredores
5. **Desarrollar herramientas personalizadas** - Adaptadas a tu flujo de trabajo

### Ventajas de Usar Dynamo

**Productividad:**
- Reduce tiempo de diseño en 80-90%
- Elimina errores humanos en tareas repetitivas
- Permite procesar múltiples archivos simultáneamente

**Flexibilidad:**
- Programación visual intuitiva
- No requiere experiencia en programación
- Scripts reutilizables entre proyectos

**Integración:**
- Conexión nativa con Civil 3D
- Importa/exporta datos desde Excel
- Compatible con múltiples formatos de archivo

**Innovación:**
- Crea soluciones personalizadas para tu equipo
- Implementa diseños generativos
- Automatiza control de calidad BIM

### Casos de Uso Reales

**Caso 1: Importación de 5000 Puntos Topográficos**
- **Manual:** 8-10 horas de trabajo tedioso
- **Con Dynamo:** 5 minutos automatizados
- **Ahorro:** 95% de tiempo

**Caso 2: Creación de 50 Alineamientos desde Datos**
- **Manual:** 3-4 días de trabajo repetitivo
- **Con Dynamo:** 1 hora de ejecución automática
- **Ahorro:** 90% de tiempo

**Caso 3: Validación BIM de 100 Archivos**
- **Manual:** 2 semanas de revisión manual
- **Con Dynamo:** 2 horas de procesamiento batch
- **Ahorro:** 98% de tiempo

---

## Interfaz de Dynamo for Civil 3D

### Accediendo a Dynamo

Para iniciar Dynamo en Civil 3D 2026:

1. **Desde el Ribbon:**
   - Tab: **Manage**
   - Panel: **Visual Programming**
   - Click: **Dynamo**

2. **Desde el Command Line:**
   - Escribe: `DYNAMO`
   - Press: Enter

3. **Con Atajo de Teclado:**
   - Presiona: `Ctrl + Alt + D` (configurable)

### Componentes Principales de la Interfaz

**1. Library (Biblioteca de Nodos)**
- Ubicación: Panel izquierdo
- Función: Contiene todos los nodos disponibles
- Organización: Por categorías jerárquicas
- Búsqueda: Campo search en la parte superior

**Categorías Principales:**
```
Library
├── Core
│   ├── Input (entradas de datos)
│   ├── Display (visualización)
│   └── View (vistas)
├── Geometry
│   ├── Point (puntos)
│   ├── Line (líneas)
│   ├── Surface (superficies)
│   └── Solid (sólidos)
├── Autodesk
│   ├── Civil 3D (objetos específicos)
│   │   ├── Alignments
│   │   ├── Profiles
│   │   ├── Surfaces
│   │   └── Corridors
│   └── AutoCAD (objetos básicos)
├── List (manipulación de listas)
├── Math (operaciones matemáticas)
├── Logic (operaciones lógicas)
└── String (manipulación de texto)
```

**2. Canvas (Lienzo de Trabajo)**
- Ubicación: Área central principal
- Función: Espacio donde construyes el script
- Interacción: Arrastra nodos desde Library

**Controles del Canvas:**
- **Pan:** Click central del mouse + arrastrar
- **Zoom:** Rueda del mouse
- **Fit View:** Presiona `Ctrl + H` para ver todo el script

**3. Properties Panel**
- Ubicación: Panel derecho
- Función: Muestra propiedades del nodo seleccionado
- Información: Inputs, outputs, descripción

**4. Preview Background**
- Ubicación: Detrás del canvas
- Función: Muestra vista 3D de la geometría generada
- Toggle: Click en icono de ojo para mostrar/ocultar

**5. Toolbar Superior**
```
Toolbar
├── New - Nuevo script
├── Open - Abrir script existente
├── Save - Guardar script
├── Undo/Redo - Deshacer/rehacer
├── Run Mode
│   ├── Automatic - Ejecuta automáticamente
│   └── Manual - Ejecuta manualmente
└── Settings - Configuración de Dynamo
```

---

## Nodos Fundamentales

### Input Nodes (Nodos de Entrada)

Los nodos de entrada son la base de cualquier script. Permiten definir valores que controlan tu diseño.

**1. Number Input**
- Ruta: `Core > Input > Number`
- Función: Define valores numéricos
- Uso: Distancias, ángulos, cantidades

**Ejemplo:**
```
Number Input
└── Value: 100.0
    Output: 100.0
```

**Propiedades:**
- **Value:** Valor numérico a definir
- **Type:** Integer (entero) o Double (decimal)
- **Slider:** Opcional para control visual

**2. Number Slider**
- Ruta: `Core > Input > Number Slider`
- Función: Valor numérico con control visual
- Uso: Parámetros que necesitan ajuste rápido

**Configuración:**
```
Number Slider
├── Min: 0.0 (valor mínimo)
├── Max: 200.0 (valor máximo)
├── Step: 1.0 (incremento)
└── Value: 50.0 (valor actual)
```

**3. String Input**
- Ruta: `Core > Input > String`
- Función: Define texto
- Uso: Nombres, descripciones, rutas

**Ejemplo:**
```
String Input
└── Value: "Highway Project"
    Output: "Highway Project"
```

**4. Boolean**
- Ruta: `Core > Input > Boolean`
- Función: Valores verdadero/falso
- Uso: Condiciones, opciones on/off

**Valores:**
```
Boolean
└── Value: True o False
    Output: True o False
```

**5. File Path**
- Ruta: `Core > File System > File Path`
- Función: Seleccionar archivos del sistema
- Uso: Importar Excel, CSV, otros archivos

**Uso:**
```
File Path
└── Browse... (abre diálogo de selección)
    Output: "C:\Projects\data.xlsx"
```

### Geometry Nodes (Nodos de Geometría)

Los nodos de geometría crean y manipulan objetos 3D.

**1. Point.ByCoordinates**
- Ruta: `Geometry > Point > Point.ByCoordinates`
- Función: Crea punto por coordenadas XYZ
- Inputs:
  - x: Coordenada X
  - y: Coordenada Y
  - z: Coordenada Z (opcional, default: 0)

**Ejemplo:**
```
Point.ByCoordinates
├── x: 100.0
├── y: 200.0
└── z: 50.0
    Output: Point (100, 200, 50)
```

**2. Line.ByStartPointEndPoint**
- Ruta: `Geometry > Line > Line.ByStartPointEndPoint`
- Función: Crea línea entre dos puntos
- Inputs:
  - startPoint: Punto inicial
  - endPoint: Punto final

**Ejemplo:**
```
Line.ByStartPointEndPoint
├── startPoint: Point (0, 0, 0)
└── endPoint: Point (100, 0, 0)
    Output: Line de 100 unidades en X
```

**3. Circle.ByCenterPointRadius**
- Ruta: `Geometry > Circle > Circle.ByCenterPointRadius`
- Función: Crea círculo por centro y radio
- Inputs:
  - centerPoint: Centro del círculo
  - radius: Radio del círculo

**Ejemplo:**
```
Circle.ByCenterPointRadius
├── centerPoint: Point (0, 0, 0)
└── radius: 50.0
    Output: Circle con radio 50
```

### Math Nodes (Nodos Matemáticos)

Los nodos matemáticos realizan operaciones y cálculos.

**1. Operadores Básicos**

**Addition (+)**
```
+
├── x: 100
└── y: 50
    Output: 150
```

**Subtraction (-)**
```
-
├── x: 100
└── y: 30
    Output: 70
```

**Multiplication (×)**
```
×
├── x: 10
└── y: 5
    Output: 50
```

**Division (÷)**
```
÷
├── x: 100
└── y: 4
    Output: 25
```

**2. Math Functions**
- Ruta: `Core > Math`

**Math.Sin** (Seno)
```
Math.Sin
└── angle: 90
    Output: 1.0
```

**Math.Cos** (Coseno)
```
Math.Cos
└── angle: 0
    Output: 1.0
```

**Math.Sqrt** (Raíz Cuadrada)
```
Math.Sqrt
└── number: 144
    Output: 12.0
```

**Math.Pow** (Potencia)
```
Math.Pow
├── base: 2
└── exponent: 3
    Output: 8
```

**3. Math.Range**
- Ruta: `Core > Math > Range`
- Función: Genera secuencia numérica
- Uso: Crear múltiples valores espaciados

**Ejemplo:**
```
Math.Range
├── start: 0
├── end: 100
└── step: 10
    Output: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
```

### List Nodes (Nodos de Lista)

Las listas son fundamentales en Dynamo. Permiten trabajar con múltiples valores simultáneamente.

**1. List.Create**
- Ruta: `Core > List > Create > List.Create`
- Función: Crea lista de elementos
- Inputs: Múltiples (dinámicos)

**Ejemplo:**
```
List.Create
├── item0: 10
├── item1: 20
├── item2: 30
└── item3: 40
    Output: [10, 20, 30, 40]
```

**2. List.GetItemAtIndex**
- Ruta: `Core > List > Query > List.GetItemAtIndex`
- Función: Obtiene elemento en posición específica
- Inputs:
  - list: Lista de elementos
  - index: Posición (comienza en 0)

**Ejemplo:**
```
List.GetItemAtIndex
├── list: [10, 20, 30, 40]
└── index: 2
    Output: 30
```

**3. List.Count**
- Ruta: `Core > List > Query > List.Count`
- Función: Cuenta elementos en lista
- Input: list

**Ejemplo:**
```
List.Count
└── list: [10, 20, 30, 40]
    Output: 4
```

**4. List.FilterByBoolMask**
- Ruta: `Core > List > Filter > List.FilterByBoolMask`
- Función: Filtra lista por máscara booleana
- Inputs:
  - list: Lista a filtrar
  - mask: Lista de True/False

**Ejemplo:**
```
List.FilterByBoolMask
├── list: [10, 20, 30, 40]
└── mask: [True, False, True, False]
    Output:
    ├── in: [10, 30]
    └── out: [20, 40]
```

### Logic Nodes (Nodos Lógicos)

Los nodos lógicos toman decisiones en tu script.

**1. If**
- Ruta: `Core > Logic > If`
- Función: Condicional if-then-else
- Inputs:
  - test: Condición booleana
  - true: Valor si es verdadero
  - false: Valor si es falso

**Ejemplo:**
```
If
├── test: True
├── true: "Highway"
└── false: "Road"
    Output: "Highway"
```

**2. Comparison Operators**

**Equal To (==)**
```
==
├── x: 100
└── y: 100
    Output: True
```

**Greater Than (>)**
```
>
├── x: 150
└── y: 100
    Output: True
```

**Less Than (<)**
```
<
├── x: 50
└── y: 100
    Output: True
```

**3. Boolean Logic**

**And**
```
And
├── bool1: True
└── bool2: False
    Output: False
```

**Or**
```
Or
├── bool1: True
└── bool2: False
    Output: True
```

**Not**
```
Not
└── bool: True
    Output: False
```

---

## Conexión con Objetos de Civil 3D

Dynamo puede leer, modificar y crear objetos nativos de Civil 3D.

### Civil 3D Selection Nodes

**1. Civil 3D.Surface.Select**
- Ruta: `Autodesk > Civil 3D > Surfaces > Surface.Select`
- Función: Selecciona superficie existente en el dibujo
- Output: Objeto Surface

**Uso:**
```
Surface.Select
└── (Selecciona superficie en dibujo)
    Output: Surface "EG Surface"
```

**2. Civil 3D.Alignment.Select**
- Ruta: `Autodesk > Civil 3D > Alignments > Alignment.Select`
- Función: Selecciona alineamiento existente
- Output: Objeto Alignment

**Uso:**
```
Alignment.Select
└── (Selecciona alineamiento en dibujo)
    Output: Alignment "Highway-01"
```

**3. Civil 3D.Profile.Select**
- Ruta: `Autodesk > Civil 3D > Profiles > Profile.Select`
- Función: Selecciona perfil existente
- Output: Objeto Profile

### Civil 3D Query Nodes

**1. Surface.PointAtXY**
- Función: Obtiene elevación de superficie en coordenadas XY
- Inputs:
  - surface: Superficie a consultar
  - x: Coordenada X
  - y: Coordenada Y
- Output: Point con elevación Z

**Ejemplo:**
```
Surface.PointAtXY
├── surface: Surface "EG Surface"
├── x: 1000.0
└── y: 2000.0
    Output: Point (1000, 2000, 125.45)
```

**2. Alignment.Length**
- Función: Obtiene longitud total del alineamiento
- Input: alignment
- Output: Número (longitud en unidades del dibujo)

**Ejemplo:**
```
Alignment.Length
└── alignment: Alignment "Highway-01"
    Output: 2547.82
```

**3. Alignment.PointAtStation**
- Función: Obtiene punto en estación específica del alineamiento
- Inputs:
  - alignment: Alineamiento
  - station: Estación (cadenamiento)
- Output: Point

**Ejemplo:**
```
Alignment.PointAtStation
├── alignment: Alignment "Highway-01"
└── station: 100.0
    Output: Point (1045.23, 2012.67, 0)
```

---

## Primer Script: Crear Puntos COGO desde Excel

Ahora crearemos nuestro primer script funcional que importa puntos topográficos desde Excel y los crea como puntos COGO en Civil 3D.

### Preparación de Datos en Excel

**Estructura del archivo Excel:**

```
Archivo: points.xlsx
Hoja: Sheet1

| Point_Number | Northing  | Easting   | Elevation | Description |
|--------------|-----------|-----------|-----------|-------------|
| 1            | 1000.00   | 2000.00   | 100.50    | Ground      |
| 2            | 1050.00   | 2100.00   | 102.30    | Ground      |
| 3            | 1100.00   | 2050.00   | 98.75     | Ground      |
| 4            | 1150.00   | 2150.00   | 105.20    | Building    |
| 5            | 1200.00   | 2200.00   | 110.40    | Tree        |
```

**Ubicación del archivo:**
```
C:\Projects\Civil3D\data\points.xlsx
```

### Construcción del Script Paso a Paso

**PASO 1: Importar Datos desde Excel**

1. **File Path Node**
   - Arrastra `File Path` desde `Core > File System`
   - Click en "Browse..."
   - Selecciona `points.xlsx`
   - Output: Ruta del archivo

2. **Excel.ReadFromFile**
   - Arrastra desde `Office > Excel > Excel.ReadFromFile`
   - Inputs:
     - file: Conecta desde File Path
     - sheetName: String "Sheet1"
     - readAsStrings: Boolean False
   - Output: Lista de listas con todos los datos

3. **List.Transpose**
   - Arrastra desde `Core > List > Modify > List.Transpose`
   - Input: list desde Excel.ReadFromFile
   - Función: Convierte filas en columnas
   - Output: Columnas como listas separadas

**PASO 2: Extraer Columnas Específicas**

4. **List.GetItemAtIndex** (para Northing)
   - Input list: desde List.Transpose
   - Input index: Number 1
   - Output: Lista de valores Northing

5. **List.GetItemAtIndex** (para Easting)
   - Input list: desde List.Transpose
   - Input index: Number 2
   - Output: Lista de valores Easting

6. **List.GetItemAtIndex** (para Elevation)
   - Input list: desde List.Transpose
   - Input index: Number 3
   - Output: Lista de valores Elevation

7. **List.GetItemAtIndex** (para Description)
   - Input list: desde List.Transpose
   - Input index: Number 4
   - Output: Lista de descripciones

**PASO 3: Crear Puntos en Civil 3D**

8. **Civil3DToolkit.CogoPoint.ByCoordinates**
   - Ruta: `Civil3D Toolkit > CogoPoint > ByCoordinates`
   - Inputs:
     - northing: desde paso 4
     - easting: desde paso 5
     - elevation: desde paso 6
     - description: desde paso 7
   - Output: Lista de puntos COGO creados

**PASO 4: Verificación Visual**

9. **Watch Node**
   - Arrastra `Core > View > Watch`
   - Input: desde Civil3DToolkit.CogoPoint
   - Función: Muestra resultado en el canvas

### Diagrama del Script Completo

```
[File Path] ──→ [Excel.ReadFromFile] ──→ [List.Transpose]
                      ↑                          │
                [String "Sheet1"]                 │
                                                  ├──→ [List.GetItemAtIndex (1)] ──→ Northing
                                                  ├──→ [List.GetItemAtIndex (2)] ──→ Easting
                                                  ├──→ [List.GetItemAtIndex (3)] ──→ Elevation
                                                  └──→ [List.GetItemAtIndex (4)] ──→ Description
                                                                                          │
                                                                                          ↓
[CogoPoint.ByCoordinates] ←──────────────────────────────────────────────────────────────┘
         │
         └──→ [Watch]
```

### Ejecución del Script

**Modo Automático:**
1. En la toolbar, asegúrate que Run Mode = "Automatic"
2. El script se ejecuta automáticamente al hacer cambios
3. Los puntos se crean instantáneamente en Civil 3D

**Modo Manual:**
1. Cambia Run Mode = "Manual"
2. Click en botón "Run" en la toolbar
3. El script se ejecuta una vez

### Resultado Esperado

Después de ejecutar el script:
- Se crean 5 puntos COGO en Civil 3D
- Cada punto tiene su número, coordenadas y descripción
- Los puntos son visibles en el dibujo
- Se pueden editar como puntos COGO normales

### Troubleshooting Común

**Error: "File not found"**
- Solución: Verifica la ruta del archivo Excel
- Asegúrate que el archivo existe en la ubicación especificada

**Error: "Index out of range"**
- Solución: Verifica que los índices de columna sean correctos
- Recuerda que los índices comienzan en 0

**Error: "Cannot create CogoPoint"**
- Solución: Asegúrate que Civil 3D esté en modo modelo
- Verifica que el punto no exista ya con el mismo número

**Puntos creados en ubicación incorrecta:**
- Solución: Verifica el orden de columnas (Northing, Easting)
- Algunos usan X, Y en lugar de Northing, Easting

---

## Best Practices para Dynamo

### Organización del Script

**1. Usa Grupos (Groups)**
- Selecciona varios nodos relacionados
- Click derecho > "Create Group"
- Nombra el grupo descriptivamente
- Ejemplo: "Excel Import", "Point Creation"

**2. Agrega Comentarios**
- Click derecho en canvas > "Add Note"
- Documenta la lógica compleja
- Explica parámetros importantes

**3. Código Limpio**
- Organiza nodos de izquierda a derecha
- Evita cruzar cables innecesariamente
- Alinea nodos verticalmente cuando sea posible

### Performance y Optimización

**1. Usa Lacing Correctamente**
- Shortest: Útil para listas de diferente longitud
- Longest: Repite último valor
- Cross Product: Crea todas las combinaciones

**2. Freeze Nodes**
- Click derecho > "Freeze"
- Congela nodos que no necesitan recalcularse
- Mejora performance en scripts grandes

**3. Limita Preview**
- Desactiva preview en nodos intermedios
- Solo muestra preview en nodos importantes
- Reduce carga gráfica

### Control de Versiones

**1. Nombra Archivos Claramente**
```
✅ CORRECTO:
- PointsImport_v1.0.dyn
- AlignmentCreator_v2.3.dyn
- CorridorBuilder_FINAL.dyn

❌ INCORRECTO:
- Script1.dyn
- test.dyn
- new.dyn
```

**2. Guarda Versiones Incrementales**
- v1.0: Primera versión funcional
- v1.1: Mejoras menores
- v2.0: Cambios mayores

**3. Documenta Cambios**
- Usa comentarios en el script
- Mantén changelog en archivo aparte

---

## Ejercicio Práctico

### Ejercicio 1: Crear Líneas desde Excel

**Objetivo:** Importar coordenadas de líneas desde Excel y crearlas en Civil 3D

**Datos Excel (lines.xlsx):**
```
| Line_Number | Start_X | Start_Y | End_X | End_Y | Layer |
|-------------|---------|---------|-------|-------|-------|
| 1           | 0       | 0       | 100   | 0     | Road  |
| 2           | 100     | 0       | 100   | 100   | Road  |
| 3           | 100     | 100     | 0     | 100   | Road  |
| 4           | 0       | 100     | 0     | 0     | Road  |
```

**Tareas:**
1. Importar datos desde Excel
2. Crear puntos de inicio y fin
3. Crear líneas entre los puntos
4. Asignar a layer correcto

**Tiempo estimado:** 30 minutos

### Ejercicio 2: Calculadora de Distancias

**Objetivo:** Crear script que calcula distancias entre puntos

**Inputs:**
- Point 1: (X1, Y1, Z1)
- Point 2: (X2, Y2, Z2)

**Output:**
- Distancia horizontal
- Distancia 3D
- Diferencia de elevación

**Fórmulas:**
```
Horizontal = √((X2-X1)² + (Y2-Y1)²)
3D = √((X2-X1)² + (Y2-Y1)² + (Z2-Z1)²)
Delta Z = Z2 - Z1
```

**Tiempo estimado:** 20 minutos

---

## Recursos Adicionales

### Documentación Oficial
- [Dynamo Primer](https://primer.dynamobim.org/) - Guía completa
- [Civil 3D API Docs](https://help.autodesk.com/view/CIV3D/2026/ENU/) - Referencia API
- [Dynamo Forum](https://forum.dynamobim.com/) - Comunidad

### Paquetes Útiles de Dynamo
- **Civil3D Toolkit** - Nodos adicionales para Civil 3D
- **Data-Shapes** - Interfaces de usuario mejoradas
- **Clockwork** - Utilidades generales
- **Springs** - Funciones avanzadas

### Videos Recomendados
- "Dynamo for Civil 3D - Getting Started" - Autodesk
- "Advanced Dynamo Workflows" - AU Classes
- "Python Scripting in Dynamo" - DynamoBIM

---

## Resumen de la Lección

En esta lección has aprendido:

✅ **Fundamentos de Dynamo for Civil 3D**
- Qué es Dynamo y sus ventajas
- Casos de uso reales
- Incremento de productividad 10x

✅ **Interfaz y Navegación**
- Componentes principales
- Library, Canvas, Properties
- Controles y shortcuts

✅ **Nodos Fundamentales**
- Input nodes (Number, String, Boolean)
- Geometry nodes (Point, Line, Circle)
- Math nodes (operadores, funciones)
- List nodes (Create, Get, Filter)
- Logic nodes (If, comparadores)

✅ **Integración con Civil 3D**
- Selection nodes
- Query nodes
- Manipulación de objetos Civil 3D

✅ **Primer Script Funcional**
- Importación desde Excel
- Creación de puntos COGO
- Workflow completo end-to-end

✅ **Best Practices**
- Organización del script
- Performance y optimización
- Control de versiones

---

## Siguiente Paso

En la **Lección 2: Automated Design Workflows**, aprenderás a:
- Automatizar creación de alineamientos
- Generar perfiles automáticamente
- Construir corredores completos parametricos
- Producir planos automáticamente

[Continuar a Lección 2 →](./leccion-2.md)

---

**DISTMAH Advanced Technical Center (ATC)**
*Dominando Dynamo for Civil 3D desde 2024*
