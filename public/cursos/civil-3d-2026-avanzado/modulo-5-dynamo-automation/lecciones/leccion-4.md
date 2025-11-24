# Lección 4: Custom Tools Development

**Duración:** 1 hora
**Nivel:** Avanzado
**Objetivo:** Desarrollar herramientas personalizadas y add-ins para Civil 3D que tu equipo puede usar

---

## Introducción al Desarrollo de Herramientas Personalizadas

Crear herramientas personalizadas es el nivel máximo de automatización. Estas herramientas se integran directamente en la interfaz de Civil 3D, permitiendo que cualquier miembro de tu equipo las use sin conocimientos de programación.

### ¿Por Qué Desarrollar Custom Tools?

**Beneficios Empresariales:**
- **Estandarización:** Todos usan las mismas metodologías
- **Eficiencia del equipo:** Herramientas adaptadas a workflows específicos
- **Reducción de capacitación:** Interfaces intuitivas para nuevos usuarios
- **Ventaja competitiva:** Capacidades únicas en tu empresa
- **ROI medible:** Ahorro de tiempo cuantificable

**Casos de Uso:**
1. **Herramientas de diseño específicas** - Workflows de tu empresa
2. **Validadores automáticos** - Verificación de estándares
3. **Importadores/exportadores** - Formatos específicos de clientes
4. **Calculadoras especializadas** - Cálculos repetitivos
5. **Reportes automáticos** - Generación de documentación

### Niveles de Desarrollo

**Nivel 1: Custom Nodes en Dynamo**
- Dificultad: Baja
- Tiempo de desarrollo: 1-2 horas
- Distribución: Package Manager
- Ideal para: Funciones reutilizables

**Nivel 2: Python Scripts Standalone**
- Dificultad: Media
- Tiempo de desarrollo: 2-5 horas
- Distribución: Scripts compartidos
- Ideal para: Batch processing

**Nivel 3: .NET Add-ins**
- Dificultad: Alta
- Tiempo de desarrollo: 1-2 semanas
- Distribución: DLL instalable
- Ideal para: Herramientas profesionales

**Nivel 4: Plugins Completos**
- Dificultad: Muy alta
- Tiempo de desarrollo: 1-3 meses
- Distribución: Instalador MSI
- Ideal para: Productos comerciales

---

## Creación de Custom Nodes en Dynamo

Los custom nodes encapsulan lógica compleja en un nodo reutilizable.

### Anatomía de un Custom Node

**Componentes:**
1. **Inputs** - Parámetros de entrada
2. **Logic** - Procesamiento interno
3. **Outputs** - Resultados
4. **Documentation** - Descripción y ayuda

### Ejemplo 1: Station/Offset Calculator

Crearemos un nodo que calcula station/offset desde coordenadas XY.

**PASO 1: Crear Nuevo Custom Node**

En Dynamo:
1. File > New > Custom Node
2. Configurar propiedades:
   - Name: `StationOffsetCalculator`
   - Category: `DISTMAH.Civil3D.Geometry`
   - Description: `Calculates station and offset from XY coordinates`

**PASO 2: Definir Inputs**

```
Inputs creados:
├── alignment (Alignment) - Alineamiento de referencia
├── point_X (double) - Coordenada X del punto
└── point_Y (double) - Coordenada Y del punto
```

**PASO 3: Construir Lógica**

```
Lógica interna del custom node:

[alignment] ──→ [Civil3D.Alignment.GetStationOffset]
                        ↑
[point_X] ──────────────┤
                        │
[point_Y] ──────────────┘
                        │
                        ├──→ [station] (Output)
                        └──→ [offset] (Output)
```

Código interno (Python Script Node):
```python
# Cargar librerías
import clr
clr.AddReference('AeccDbMgd')
from Autodesk.Civil.DatabaseServices import *
from Autodesk.AutoCAD.Geometry import Point3d

# Inputs
alignment = IN[0]
point_x = IN[1]
point_y = IN[2]

# Crear punto 3D
point = Point3d(point_x, point_y, 0)

# Calcular station y offset
try:
    station = alignment.GetStationAtPoint(point)
    offset = alignment.GetOffsetAtPoint(point)

    OUT = [station, offset]

except Exception as e:
    OUT = [None, None, f"Error: {str(e)}"]
```

**PASO 4: Definir Outputs**

```
Outputs:
├── station (double) - Estación calculada
├── offset (double) - Offset calculado (+ derecha, - izquierda)
└── error (string) - Mensaje de error (si aplica)
```

**PASO 5: Documentar**

```markdown
# Station/Offset Calculator

Calcula estación y offset de un punto XY respecto a un alineamiento.

## Inputs
- **alignment**: Alineamiento de referencia (Civil 3D Alignment)
- **point_X**: Coordenada X del punto (metros)
- **point_Y**: Coordenada Y del punto (metros)

## Outputs
- **station**: Estación calculada (metros desde inicio del alineamiento)
- **offset**: Offset perpendicular (positivo = derecha, negativo = izquierda)
- **error**: Mensaje de error si falla el cálculo

## Uso
Conecta un alineamiento y coordenadas XY. El nodo retorna la estación y offset.

## Ejemplo
```
Alignment: "Highway-01"
Point X: 1050.00
Point Y: 2020.00

Output:
- Station: 0+125.45
- Offset: +5.20 (5.20m a la derecha)
```

## Notas
- El punto debe estar dentro del rango razonable del alineamiento
- Si el punto está muy lejos, el resultado puede ser impreciso
```

**PASO 6: Guardar y Publicar**

```
File > Save As...
Ubicación: C:\Dynamo\CustomNodes\DISTMAH\
Nombre: StationOffsetCalculator.dyf
```

**Uso del Custom Node:**

Ahora en cualquier script de Dynamo:
```
[Point.ByCoordinates] ──→ [Point.X] ───┐
                                       │
                          [Point.Y] ───┼──→ [StationOffsetCalculator] ──→ [station]
                                       │                │
[Alignment.Select] ────────────────────┘                └──→ [offset]
```

### Ejemplo 2: Assembly Parameter Manager

Custom node para cambiar parámetros de assembly dinámicamente.

**Definición:**
```
Name: AssemblyParameterManager
Category: DISTMAH.Civil3D.Assemblies

Inputs:
├── assembly (Assembly)
├── parameter_name (string) - ej: "Lane Width"
└── new_value (double) - nuevo valor del parámetro

Outputs:
├── updated_assembly (Assembly)
└── success (bool)
```

**Lógica (Python):**
```python
import clr
clr.AddReference('AeccDbMgd')
from Autodesk.Civil.DatabaseServices import *

assembly = IN[0]
param_name = IN[1]
new_value = IN[2]

success = False

try:
    # Iterar subassemblies
    for subassembly in assembly.SubassemblyCollection:
        # Buscar parámetro
        if param_name in subassembly.Parameters:
            param = subassembly.Parameters[param_name]
            param.Value = new_value
            success = True

    OUT = [assembly, success]

except Exception as e:
    OUT = [assembly, False]
```

### Ejemplo 3: Bulk Surface Point Sampler

Muestrea elevaciones de superficie en múltiples puntos.

**Definición:**
```
Name: BulkSurfacePointSampler
Category: DISTMAH.Civil3D.Surfaces

Inputs:
├── surface (Surface)
├── points_X (list) - Lista de coordenadas X
└── points_Y (list) - Lista de coordenadas Y

Outputs:
├── elevations (list) - Elevaciones en cada punto
└── valid_points (list bool) - True si el punto está en la superficie
```

**Lógica:**
```python
surface = IN[0]
points_x = IN[1]
points_y = IN[2]

elevations = []
valid_points = []

for x, y in zip(points_x, points_y):
    try:
        elevation = surface.FindElevationAtXY(x, y)
        elevations.append(elevation)
        valid_points.append(True)
    except:
        elevations.append(None)
        valid_points.append(False)

OUT = [elevations, valid_points]
```

---

## Desarrollo de Paquetes Dynamo

Distribuye tus custom nodes como paquetes instalables.

### Estructura de un Package

```
MyPackage/
├── pkg.json (metadata del package)
├── dyf/ (custom nodes)
│   ├── StationOffsetCalculator.dyf
│   ├── AssemblyParameterManager.dyf
│   └── BulkSurfacePointSampler.dyf
├── bin/ (DLLs adicionales si se requieren)
├── extra/ (archivos auxiliares)
│   ├── templates/
│   └── data/
├── LICENSE (licencia)
└── README.md (documentación)
```

### Crear Package Metadata

**pkg.json:**
```json
{
  "name": "DISTMAH Civil 3D Toolkit",
  "version": "1.0.0",
  "description": "Professional tools for Civil 3D automation developed by DISTMAH",
  "author": "DISTMAH Advanced Technical Center",
  "keywords": ["civil3d", "automation", "highway", "design"],
  "license": "MIT",
  "contents": "Custom nodes for Civil 3D workflows including station/offset calculations, assembly management, and surface sampling.",
  "engine_version": "2.0.0",
  "engine": "dynamo",
  "engine_metadata": "",
  "site_url": "https://distmah.com",
  "repository_url": "https://github.com/distmah/civil3d-toolkit",
  "group": "DISTMAH",
  "dependencies": []
}
```

### Publicar en Package Manager

**PASO 1: Preparar Package Localmente**
```
1. Organizar archivos en estructura correcta
2. Crear pkg.json con metadata completa
3. Escribir README.md detallado
4. Probar todos los custom nodes
```

**PASO 2: Publicar**
```
En Dynamo:
1. Packages > Publish New Package
2. Seleccionar carpeta del package
3. Completar información:
   - Package Name
   - Version
   - Description
   - Author
4. Upload
```

**PASO 3: Mantenimiento**
```
- Responder issues de usuarios
- Actualizar versiones con bugfixes
- Agregar nuevos custom nodes
- Mantener documentación actualizada
```

---

## Desarrollo de .NET Add-ins

Add-ins son DLLs que se cargan en Civil 3D y agregan comandos y funcionalidades.

### Configuración del Entorno de Desarrollo

**Requisitos:**
- Visual Studio 2022 (Community, Professional o Enterprise)
- .NET Framework 4.8
- Civil 3D 2026 SDK

**PASO 1: Crear Proyecto en Visual Studio**

```csharp
// Crear nuevo proyecto:
// File > New > Project > Class Library (.NET Framework)
// Name: DISTMAH.Civil3D.Tools
// Framework: .NET Framework 4.8
```

**PASO 2: Agregar Referencias**

```
Referencias necesarias:
├── accoremgd.dll (C:\Program Files\Autodesk\AutoCAD 2026)
├── acdbmgd.dll
├── acmgd.dll
├── AeccDbMgd.dll (C:\Program Files\Autodesk\AutoCAD 2026\C3D)
└── AeccAppMgd.dll
```

**PASO 3: Configurar Properties del Proyecto**

```
Properties:
├── Assembly name: DISTMAH.Civil3D.Tools
├── Default namespace: DISTMAH.Civil3D
├── Target framework: .NET Framework 4.8
└── Platform target: x64 (importante para Civil 3D)
```

### Ejemplo: Command para Exportar Alineamientos

**AlignmentExporter.cs:**

```csharp
using System;
using System.IO;
using Autodesk.AutoCAD.Runtime;
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.Civil.ApplicationServices;
using Autodesk.Civil.DatabaseServices;

namespace DISTMAH.Civil3D.Tools
{
    public class AlignmentExporter
    {
        [CommandMethod("DISTMAH_ExportAlignments")]
        public void ExportAlignments()
        {
            Document doc = Application.DocumentManager.MdiActiveDocument;
            Database db = doc.Database;
            Editor ed = doc.Editor;

            // Solicitar ubicación de guardado
            PromptSaveFileOptions psfOpts = new PromptSaveFileOptions(
                "\nEspecifica archivo de salida: "
            );
            psfOpts.Filter = "CSV files (*.csv)|*.csv|All files (*.*)|*.*";
            PromptFileNameResult psfRes = ed.GetFileNameForSave(psfOpts);

            if (psfRes.Status != PromptStatus.OK)
                return;

            string outputPath = psfRes.StringResult;

            // Exportar alineamientos
            using (Transaction trans = db.TransactionManager.StartTransaction())
            {
                CivilDocument civilDoc = CivilApplication.ActiveDocument;

                using (StreamWriter writer = new StreamWriter(outputPath))
                {
                    // Escribir encabezados
                    writer.WriteLine("Alignment,Length,StartStation,EndStation,NumTangents,NumCurves");

                    // Iterar alineamientos
                    foreach (ObjectId alignId in civilDoc.GetAlignmentIds())
                    {
                        Alignment align = trans.GetObject(
                            alignId,
                            OpenMode.ForRead
                        ) as Alignment;

                        if (align != null)
                        {
                            // Contar elementos
                            int numTangents = 0;
                            int numCurves = 0;

                            foreach (AlignmentEntity entity in align.Entities)
                            {
                                if (entity.EntityType == AlignmentEntityType.Tangent)
                                    numTangents++;
                                else if (entity.EntityType == AlignmentEntityType.Arc)
                                    numCurves++;
                            }

                            // Escribir datos
                            writer.WriteLine($"{align.Name}," +
                                           $"{align.Length:F3}," +
                                           $"{align.StartingStation:F3}," +
                                           $"{align.EndingStation:F3}," +
                                           $"{numTangents}," +
                                           $"{numCurves}");
                        }
                    }
                }

                trans.Commit();
            }

            ed.WriteMessage($"\n✓ Alineamientos exportados a: {outputPath}");
        }
    }
}
```

### Ejemplo: Paleta Modeless con WPF

Crear interfaz gráfica avanzada.

**DesignToolPalette.cs:**

```csharp
using System.Windows;
using Autodesk.AutoCAD.Windows;

namespace DISTMAH.Civil3D.Tools
{
    public class DesignToolPalette
    {
        private PaletteSet _paletteSet;
        private DesignToolControl _control;

        [CommandMethod("DISTMAH_ShowDesignTools")]
        public void ShowPalette()
        {
            if (_paletteSet == null)
            {
                _paletteSet = new PaletteSet(
                    "DISTMAH Design Tools",
                    new Guid("12345678-1234-1234-1234-123456789ABC")
                );

                _control = new DesignToolControl();
                _paletteSet.Add("Tools", _control);

                // Estilo de la paleta
                _paletteSet.Style = PaletteSetStyles.ShowCloseButton |
                                   PaletteSetStyles.ShowAutoHideButton |
                                   PaletteSetStyles.Snappable;

                _paletteSet.MinimumSize = new System.Drawing.Size(300, 400);
                _paletteSet.DockEnabled = DockSides.Left | DockSides.Right;
            }

            _paletteSet.Visible = true;
        }
    }
}
```

**DesignToolControl.xaml:**

```xml
<UserControl x:Class="DISTMAH.Civil3D.Tools.DesignToolControl"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             Background="White">
    <StackPanel Margin="10">
        <!-- Header -->
        <TextBlock Text="DISTMAH Design Tools"
                   FontSize="16"
                   FontWeight="Bold"
                   Foreground="#333333"
                   Margin="0,0,0,20"/>

        <!-- Alignment Tools -->
        <GroupBox Header="Alignment Tools" Margin="0,0,0,10">
            <StackPanel>
                <Button Content="Export Alignments to CSV"
                        Click="ExportAlignments_Click"
                        Margin="5"
                        Padding="10"
                        Background="#EEEEEE"
                        BorderBrush="#333333"/>

                <Button Content="Analyze Geometry"
                        Click="AnalyzeGeometry_Click"
                        Margin="5"
                        Padding="10"
                        Background="#EEEEEE"
                        BorderBrush="#333333"/>
            </StackPanel>
        </GroupBox>

        <!-- Surface Tools -->
        <GroupBox Header="Surface Tools" Margin="0,0,0,10">
            <StackPanel>
                <Button Content="Sample Surface Points"
                        Click="SampleSurface_Click"
                        Margin="5"
                        Padding="10"
                        Background="#EEEEEE"
                        BorderBrush="#333333"/>

                <Button Content="Create Contours"
                        Click="CreateContours_Click"
                        Margin="5"
                        Padding="10"
                        Background="#EEEEEE"
                        BorderBrush="#333333"/>
            </StackPanel>
        </GroupBox>

        <!-- Quality Control -->
        <GroupBox Header="Quality Control" Margin="0,0,0,10">
            <StackPanel>
                <Button Content="Validate Model"
                        Click="ValidateModel_Click"
                        Margin="5"
                        Padding="10"
                        Background="#003366"
                        Foreground="White"
                        FontWeight="Bold"/>

                <TextBlock Text="Status: Ready"
                           Name="StatusText"
                           Margin="5"
                           Foreground="#2C2C2C"/>
            </StackPanel>
        </GroupBox>
    </StackPanel>
</UserControl>
```

**DesignToolControl.xaml.cs:**

```csharp
using System.Windows;
using System.Windows.Controls;
using Autodesk.AutoCAD.ApplicationServices;

namespace DISTMAH.Civil3D.Tools
{
    public partial class DesignToolControl : UserControl
    {
        public DesignToolControl()
        {
            InitializeComponent();
        }

        private void ExportAlignments_Click(object sender, RoutedEventArgs e)
        {
            Document doc = Application.DocumentManager.MdiActiveDocument;
            doc.SendStringToExecute("DISTMAH_ExportAlignments\n", true, false, false);
            StatusText.Text = "Status: Exporting alignments...";
        }

        private void AnalyzeGeometry_Click(object sender, RoutedEventArgs e)
        {
            // Lógica de análisis
            StatusText.Text = "Status: Analyzing geometry...";
        }

        private void SampleSurface_Click(object sender, RoutedEventArgs e)
        {
            // Lógica de muestreo
            StatusText.Text = "Status: Sampling surface...";
        }

        private void CreateContours_Click(object sender, RoutedEventArgs e)
        {
            // Lógica de contornos
            StatusText.Text = "Status: Creating contours...";
        }

        private void ValidateModel_Click(object sender, RoutedEventArgs e)
        {
            // Lógica de validación
            MessageBox.Show(
                "Model validation complete!\n\n✓ All checks passed.",
                "DISTMAH Validator",
                MessageBoxButton.OK,
                MessageBoxImage.Information
            );
            StatusText.Text = "Status: Validation complete";
        }
    }
}
```

---

## Distribución de Herramientas Personalizadas

### Método 1: Autoloader para Add-ins

Civil 3D carga automáticamente plugins desde carpetas específicas.

**Estructura:**
```
C:\ProgramData\Autodesk\ApplicationPlugins\DISTMAH.Civil3D.Tools.bundle\
├── PackageContents.xml
└── Contents\
    └── Windows\
        └── 2026\
            └── DISTMAH.Civil3D.Tools.dll
```

**PackageContents.xml:**
```xml
<?xml version="1.0" encoding="utf-8"?>
<ApplicationPackage
    SchemaVersion="1.0"
    AutodeskProduct="Civil 3D"
    ProductType="Application"
    Name="DISTMAH Civil 3D Tools"
    Description="Professional automation tools for Civil 3D"
    Author="DISTMAH ATC"
    AppVersion="1.0.0"
    ProductCode="{12345678-1234-1234-1234-123456789ABC}">

    <CompanyDetails
        Name="DISTMAH Advanced Technical Center"
        Url="https://distmah.com"
        Email="support@distmah.com"/>

    <RuntimeRequirements
        OS="Win64"
        Platform="AutoCAD"
        SeriesMin="R24.1"
        SeriesMax="R24.1"/>

    <Components>
        <RuntimeRequirements
            OS="Win64"
            Platform="AutoCAD"
            SeriesMin="R24.1"
            SeriesMax="R24.1"/>
        <ComponentEntry
            AppName="DISTMAHTools"
            ModuleName="./Contents/Windows/2026/DISTMAH.Civil3D.Tools.dll"
            AppDescription="DISTMAH automation tools"
            LoadOnAutoCADStartup="True"/>
    </Components>
</ApplicationPackage>
```

### Método 2: Instalador MSI

Para distribución profesional, crea instalador Windows.

**Usar WiX Toolset:**
```xml
<!-- Product.wxs -->
<?xml version="1.0" encoding="UTF-8"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
    <Product Id="*"
             Name="DISTMAH Civil 3D Tools"
             Language="1033"
             Version="1.0.0.0"
             Manufacturer="DISTMAH ATC"
             UpgradeCode="12345678-1234-1234-1234-123456789ABC">

        <Package InstallerVersion="200"
                 Compressed="yes"
                 InstallScope="perMachine"/>

        <Directory Id="TARGETDIR" Name="SourceDir">
            <Directory Id="ProgramDataFolder">
                <Directory Id="Autodesk" Name="Autodesk">
                    <Directory Id="ApplicationPlugins" Name="ApplicationPlugins">
                        <Directory Id="INSTALLDIR" Name="DISTMAH.Civil3D.Tools.bundle">
                            <!-- Files here -->
                        </Directory>
                    </Directory>
                </Directory>
            </Directory>
        </Directory>

        <Feature Id="ProductFeature" Title="DISTMAH Civil 3D Tools" Level="1">
            <ComponentGroupRef Id="ProductComponents"/>
        </Feature>
    </Product>
</Wix>
```

### Método 3: Dynamo Package Manager

Para custom nodes y scripts Dynamo.

Ya visto anteriormente en la sección de packages.

---

## Best Practices para Desarrollo

### 1. Arquitectura Limpia

```
Organización del código:
├── Commands/ (comandos de AutoCAD)
├── Core/ (lógica de negocio)
├── UI/ (interfaces de usuario)
├── Utils/ (utilidades)
└── Tests/ (pruebas unitarias)
```

### 2. Error Handling Robusto

```csharp
try
{
    // Operación
}
catch (Autodesk.Civil.CivilException ex)
{
    ed.WriteMessage($"\n✗ Civil 3D Error: {ex.Message}");
}
catch (System.Exception ex)
{
    ed.WriteMessage($"\n✗ Error: {ex.Message}");
    // Log detallado
}
finally
{
    // Limpieza
}
```

### 3. Logging y Diagnóstico

```csharp
using System.Diagnostics;

public static class Logger
{
    private static TraceSource _trace = new TraceSource("DISTMAHTools");

    public static void Info(string message)
    {
        _trace.TraceInformation($"[INFO] {message}");
    }

    public static void Error(string message, Exception ex)
    {
        _trace.TraceError($"[ERROR] {message}: {ex.Message}");
    }
}
```

### 4. Documentación Inline

```csharp
/// <summary>
/// Exporta todos los alineamientos del dibujo a formato CSV
/// </summary>
/// <param name="outputPath">Ruta del archivo CSV de salida</param>
/// <returns>True si la exportación fue exitosa</returns>
/// <exception cref="System.IO.IOException">Si no se puede escribir el archivo</exception>
public bool ExportAlignmentsToCsv(string outputPath)
{
    // Implementation
}
```

---

## Resumen de la Lección

Has aprendido:

✅ **Custom Nodes en Dynamo**
- Creación de nodos reutilizables
- Encapsulación de lógica compleja
- Documentación efectiva

✅ **Packages de Dynamo**
- Estructura de packages
- Metadata y distribución
- Publicación en Package Manager

✅ **Add-ins .NET**
- Configuración de Visual Studio
- Comandos personalizados
- Interfaces WPF

✅ **Distribución Profesional**
- Autoloader bundles
- Instaladores MSI
- Mantenimiento y actualizaciones

---

## Siguiente Paso

En la **Lección 5: BIM Automation Avanzada**, aprenderás a:
- Validación automatizada de modelos BIM
- Sistemas de nomenclatura inteligente
- Control de calidad automatizado
- Generación de documentación BIM

[Continuar a Lección 5 →](./leccion-5.md)

---

**DISTMAH Advanced Technical Center (ATC)**
*Desarrollo de herramientas profesionales desde 2024*
