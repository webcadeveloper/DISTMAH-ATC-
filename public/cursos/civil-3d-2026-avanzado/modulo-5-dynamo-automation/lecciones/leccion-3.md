# Lección 3: Python Scripting in Civil 3D

**Duración:** 1 hora
**Nivel:** Avanzado
**Objetivo:** Dominar Python scripting para automatización avanzada de Civil 3D mediante la API .NET

---

## Introducción a Python para Civil 3D

Python es el lenguaje de scripting más popular del mundo y ahora puedes usarlo para automatizar Civil 3D completamente. Mediante Python.NET (pythonnet), accedes a toda la API de Civil 3D con sintaxis Python limpia y expresiva.

### ¿Por Qué Python para Civil 3D?

**Ventajas de Python:**
- Sintaxis clara y legible
- Ecosistema gigante de librerías
- Integración con data science (pandas, numpy)
- Scripting rápido y flexible
- Comunidad masiva de desarrolladores

**Python vs C# para Civil 3D:**

| Característica | Python | C# |
|----------------|--------|-----|
| Curva de aprendizaje | Baja | Media-Alta |
| Velocidad de desarrollo | Rápida | Media |
| Performance | Buena | Excelente |
| Integración datos | Excelente | Media |
| Debugging | Fácil | Complejo |
| Deployment | Simple | Requiere compilación |

**Casos de Uso Ideales para Python:**
1. Batch processing de múltiples archivos
2. Extracción y análisis de datos
3. Integración con Excel, CSV, bases de datos
4. Automatización de reportes
5. Scripts de validación y QC
6. Procesamiento de datos topográficos

### Instalación y Configuración

**PASO 1: Instalar Python 3.8+**

```bash
# Descargar desde python.org
# Opción recomendada: Python 3.10.x

# Durante instalación:
☑ Add Python to PATH
☑ Install pip
☑ Install for all users
```

**PASO 2: Instalar Python.NET**

```bash
# Abrir Command Prompt como Administrador
pip install pythonnet

# Verificar instalación
python -c "import clr; print('Python.NET OK')"
```

**PASO 3: Instalar Librerías Útiles**

```bash
# Data manipulation
pip install pandas openpyxl xlsxwriter

# Numerical computing
pip install numpy scipy

# Visualization
pip install matplotlib seaborn

# Database
pip install pyodbc sqlalchemy

# Utilities
pip install python-dateutil pathlib
```

**PASO 4: Configurar Editor (VS Code)**

```json
// .vscode/settings.json
{
    "python.defaultInterpreterPath": "C:/Python310/python.exe",
    "python.linting.enabled": true,
    "python.linting.pylintEnabled": true,
    "python.formatting.provider": "black",
    "python.autoComplete.extraPaths": [
        "C:/Program Files/Autodesk/AutoCAD 2026/C3D",
        "C:/Program Files/Autodesk/AutoCAD 2026"
    ]
}
```

---

## API de Civil 3D con Python

### Estructura de la API

La API de Civil 3D está organizada en namespaces .NET:

```
Autodesk.Civil.DatabaseServices
├── Alignment (Alineamientos)
├── Profile (Perfiles)
├── Surface (Superficies)
├── Corridor (Corredores)
├── Parcel (Parcelas)
├── Pipe Networks (Redes)
├── Grading (Nivelación)
└── Point Groups (Grupos de puntos)

Autodesk.Civil.Settings
├── Drawing Settings
├── Object Styles
├── Label Styles
└── Feature Settings

Autodesk.AutoCAD.DatabaseServices
├── Database (Base de datos DWG)
├── Transaction (Transacciones)
├── BlockTable (Tablas de bloques)
└── Entity (Entidades base)
```

### Acceso Básico a la API

**Script Fundamental:**

```python
# civil3d_basic.py
# Script básico para acceder a Civil 3D desde Python

import clr
import sys

# Referencias a DLLs de Civil 3D
civil3d_path = r"C:\Program Files\Autodesk\AutoCAD 2026\C3D"
sys.path.append(civil3d_path)

# Agregar referencias
clr.AddReference("AcMgd")
clr.AddReference("AcDbMgd")
clr.AddReference("AcCoreMgd")
clr.AddReference("AeccDbMgd")

# Importar namespaces
from Autodesk.AutoCAD.Runtime import Application
from Autodesk.AutoCAD.DatabaseServices import *
from Autodesk.AutoCAD.ApplicationServices import *
from Autodesk.Civil.DatabaseServices import *
from Autodesk.Civil.ApplicationServices import *

# Obtener documento activo
doc = Application.DocumentManager.MdiActiveDocument
db = doc.Database
editor = doc.Editor

print("Conexión a Civil 3D establecida")
print(f"Documento activo: {doc.Name}")
print(f"Unidades: {db.Insunits}")
```

### Transacciones en Civil 3D

Todas las operaciones de lectura/escritura requieren transacciones:

```python
# transactions.py
# Manejo correcto de transacciones

from Autodesk.AutoCAD.DatabaseServices import *

def read_alignments(db):
    """Lee todos los alineamientos del dibujo"""

    alignments = []

    # Iniciar transacción de LECTURA
    with db.TransactionManager.StartTransaction() as trans:
        # Abrir Civil3D Object Manager
        civil_doc = CivilDocument.GetCivilDocument(db)

        # Iterar alineamientos
        for alignment_id in civil_doc.GetAlignmentIds():
            # Abrir alineamiento (modo lectura)
            alignment = trans.GetObject(
                alignment_id,
                OpenMode.ForRead
            )

            alignments.append({
                'name': alignment.Name,
                'length': alignment.Length,
                'start_station': alignment.StartingStation,
                'end_station': alignment.EndingStation
            })

        # Commit automático al salir del 'with'
        trans.Commit()

    return alignments


def create_alignment(db, name, start_point):
    """Crea nuevo alineamiento"""

    # Iniciar transacción de ESCRITURA
    with db.TransactionManager.StartTransaction() as trans:
        civil_doc = CivilDocument.GetCivilDocument(db)

        # Crear alineamiento
        alignment_id = Alignment.Create(
            db,
            name,
            civil_doc.GetSiteId("Default"),
            civil_doc.GetAlignmentStyleId("Design")
        )

        # Abrir para edición
        alignment = trans.GetObject(
            alignment_id,
            OpenMode.ForWrite
        )

        # Configurar propiedades
        alignment.Description = "Created by Python"

        # IMPORTANTE: Commit para guardar cambios
        trans.Commit()

        return alignment_id


# Uso
if __name__ == "__main__":
    # Leer alineamientos
    alignments = read_alignments(db)
    for align in alignments:
        print(f"{align['name']}: {align['length']:.2f}m")

    # Crear nuevo
    new_id = create_alignment(db, "Python-Highway-01", (0, 0, 0))
    print(f"Nuevo alineamiento creado: {new_id}")
```

---

## Manipulación de Alineamientos y Perfiles

### Análisis de Alineamientos

**Script: Analizar geometría de alineamiento**

```python
# alignment_analysis.py
# Análisis detallado de geometría de alineamiento

import clr
clr.AddReference("AeccDbMgd")
from Autodesk.Civil.DatabaseServices import *
from Autodesk.AutoCAD.Geometry import Point3d
import math

def analyze_alignment(alignment):
    """Analiza geometría completa del alineamiento"""

    analysis = {
        'name': alignment.Name,
        'total_length': alignment.Length,
        'tangents': [],
        'curves': [],
        'spirals': [],
        'statistics': {}
    }

    # Iterar sobre entidades del alineamiento
    for entity in alignment.Entities:

        if entity.EntityType == AlignmentEntityType.Tangent:
            tangent_data = {
                'type': 'Tangent',
                'length': entity.Length,
                'start_station': entity.StartStation,
                'end_station': entity.EndStation,
                'direction': math.degrees(entity.Direction)
            }
            analysis['tangents'].append(tangent_data)

        elif entity.EntityType == AlignmentEntityType.Arc:
            curve_data = {
                'type': 'Curve',
                'radius': entity.Radius,
                'length': entity.Length,
                'delta_angle': math.degrees(entity.Delta),
                'start_station': entity.StartStation,
                'end_station': entity.EndStation,
                'direction': 'Right' if entity.Clockwise else 'Left'
            }
            analysis['curves'].append(curve_data)

        elif entity.EntityType == AlignmentEntityType.Spiral:
            spiral_data = {
                'type': 'Spiral',
                'length': entity.Length,
                'start_radius': entity.RadiusIn,
                'end_radius': entity.RadiusOut,
                'start_station': entity.StartStation,
                'end_station': entity.EndStation
            }
            analysis['spirals'].append(spiral_data)

    # Calcular estadísticas
    analysis['statistics'] = {
        'total_tangents': len(analysis['tangents']),
        'total_curves': len(analysis['curves']),
        'total_spirals': len(analysis['spirals']),
        'total_tangent_length': sum(t['length'] for t in analysis['tangents']),
        'total_curve_length': sum(c['length'] for c in analysis['curves']),
        'min_curve_radius': min([c['radius'] for c in analysis['curves']]) if analysis['curves'] else None,
        'max_curve_radius': max([c['radius'] for c in analysis['curves']]) if analysis['curves'] else None
    }

    return analysis


def export_alignment_to_csv(alignment, output_file):
    """Exporta geometría del alineamiento a CSV"""

    import csv

    with open(output_file, 'w', newline='') as csvfile:
        fieldnames = ['Station', 'Easting', 'Northing', 'Direction', 'Curvature']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()

        # Muestrear cada 10m
        station = alignment.StartingStation
        interval = 10.0

        while station <= alignment.EndingStation:
            # Obtener punto en estación
            point = alignment.GetPointAtStation(station)

            # Obtener dirección
            direction = alignment.GetDirectionAtStation(station)

            # Calcular curvatura (1/radio)
            try:
                # Intentar obtener radio de curva en esta estación
                radius = alignment.GetRadiusAtStation(station)
                curvature = 1/radius if radius > 0 else 0
            except:
                curvature = 0

            writer.writerow({
                'Station': f"{station:.3f}",
                'Easting': f"{point.X:.3f}",
                'Northing': f"{point.Y:.3f}",
                'Direction': f"{math.degrees(direction):.3f}",
                'Curvature': f"{curvature:.6f}"
            })

            station += interval

    print(f"Alineamiento exportado a: {output_file}")


# Ejemplo de uso
def main():
    # Obtener primer alineamiento del dibujo
    civil_doc = CivilDocument.GetCivilDocument(db)
    alignment_ids = civil_doc.GetAlignmentIds()

    if len(alignment_ids) > 0:
        with db.TransactionManager.StartTransaction() as trans:
            alignment = trans.GetObject(alignment_ids[0], OpenMode.ForRead)

            # Analizar
            analysis = analyze_alignment(alignment)

            # Imprimir resultados
            print(f"\n=== Análisis: {analysis['name']} ===")
            print(f"Longitud total: {analysis['total_length']:.2f}m")
            print(f"\nEstadísticas:")
            for key, value in analysis['statistics'].items():
                print(f"  {key}: {value}")

            # Exportar a CSV
            export_alignment_to_csv(alignment, f"{analysis['name']}_geometry.csv")

            trans.Commit()

if __name__ == "__main__":
    main()
```

### Creación de Perfiles Programáticamente

**Script: Crear perfil de diseño desde datos**

```python
# create_profile.py
# Crear perfil vertical desde datos tabulares

import clr
clr.AddReference("AeccDbMgd")
from Autodesk.Civil.DatabaseServices import *
from Autodesk.AutoCAD.Geometry import Point2d
import pandas as pd

def create_profile_from_excel(alignment, excel_file):
    """Crea perfil de diseño desde Excel"""

    # Leer datos de Excel
    df = pd.read_excel(excel_file)
    # Esperamos columnas: Station, Elevation

    with db.TransactionManager.StartTransaction() as trans:
        # Abrir alineamiento
        align = trans.GetObject(alignment.Id, OpenMode.ForRead)

        # Crear profile
        civil_doc = CivilDocument.GetCivilDocument(db)

        profile_id = Profile.CreateByLayout(
            f"{align.Name}-Design",
            align.Id,
            civil_doc.GetProfileStyleId("Design"),
            civil_doc.GetProfileLabelSetStyleId("Complete Label Set")
        )

        profile = trans.GetObject(profile_id, OpenMode.ForWrite)

        # Obtener PVI collection (Points of Vertical Intersection)
        pvis = profile.PVIs

        # Agregar PVIs desde datos
        for index, row in df.iterrows():
            station = float(row['Station'])
            elevation = float(row['Elevation'])

            # Agregar PVI
            pvis.AddPVI(station, elevation)

        # Configurar curvas verticales automáticas
        # Radio mínimo = 2500m
        min_k_value = 2500  # K value para curvas

        for i in range(1, pvis.Count - 1):  # Excluir primer y último
            pvi = pvis[i]

            # Calcular longitud de curva basada en cambio de pendiente
            grade_in = pvis.GradeIn(i)
            grade_out = pvis.GradeOut(i)
            grade_change = abs(grade_out - grade_in)

            # L = K * A (donde A es cambio de pendiente en %)
            curve_length = min_k_value * (grade_change * 100)

            # Aplicar curva parabólica
            pvis.AddVerticalCurve(
                i,
                curve_length,
                VerticalCurveType.Parabolic
            )

        trans.Commit()

        print(f"Perfil creado: {profile.Name}")
        print(f"PVIs agregados: {pvis.Count}")

        return profile_id


def optimize_profile_earthwork(alignment, surface, target_balance=0.0):
    """Optimiza perfil para balance de corte/relleno"""

    import numpy as np
    from scipy.optimize import minimize

    # Obtener perfil de superficie
    with db.TransactionManager.StartTransaction() as trans:
        align = trans.GetObject(alignment.Id, OpenMode.ForRead)
        surf = trans.GetObject(surface.Id, OpenMode.ForRead)

        # Muestrear superficie a lo largo del alineamiento
        stations = np.arange(
            align.StartingStation,
            align.EndingStation,
            20.0  # Cada 20m
        )

        elevations = []
        for station in stations:
            point = align.GetPointAtStation(station)
            try:
                elevation = surf.FindElevationAtXY(point.X, point.Y)
                elevations.append(elevation)
            except:
                elevations.append(0.0)

        trans.Commit()

    elevations = np.array(elevations)

    # Función objetivo: minimizar |corte - relleno - target_balance|
    def objective(design_elevations):
        cut_fill = design_elevations - elevations
        cut = np.sum(cut_fill[cut_fill > 0])
        fill = np.abs(np.sum(cut_fill[cut_fill < 0]))
        balance = cut - fill
        return abs(balance - target_balance)

    # Restricciones: pendientes máximas
    max_grade = 0.08  # 8%

    def gradient_constraint(design_elevations):
        gradients = np.diff(design_elevations) / 20.0  # 20m spacing
        return max_grade - np.max(np.abs(gradients))

    constraints = [
        {'type': 'ineq', 'fun': gradient_constraint}
    ]

    # Optimización
    initial_guess = elevations.copy()  # Comenzar con perfil de terreno

    result = minimize(
        objective,
        initial_guess,
        method='SLSQP',
        constraints=constraints
    )

    optimized_elevations = result.x

    # Retornar datos optimizados
    return stations, optimized_elevations


# Uso
if __name__ == "__main__":
    # Crear perfil desde Excel
    alignment_id = civil_doc.GetAlignmentIds()[0]
    profile_id = create_profile_from_excel(alignment_id, "profile_data.xlsx")
```

---

## Batch Processing de Múltiples Archivos

Una de las mayores ventajas de Python es procesar múltiples archivos automáticamente.

### Script: Procesar 100 Archivos DWG

```python
# batch_processor.py
# Procesa múltiples archivos Civil 3D automáticamente

import clr
clr.AddReference("AcMgd")
clr.AddReference("AcDbMgd")
clr.AddReference("AeccDbMgd")

from Autodesk.AutoCAD.DatabaseServices import Database
from Autodesk.Civil.DatabaseServices import *
from pathlib import Path
import os
import pandas as pd
import json

class Civil3DBatchProcessor:
    """Procesador batch de archivos Civil 3D"""

    def __init__(self, input_folder, output_folder):
        self.input_folder = Path(input_folder)
        self.output_folder = Path(output_folder)
        self.output_folder.mkdir(exist_ok=True)

        self.results = []
        self.errors = []

    def process_all_files(self):
        """Procesa todos los DWG en la carpeta"""

        dwg_files = list(self.input_folder.glob("*.dwg"))
        total = len(dwg_files)

        print(f"Archivos encontrados: {total}")

        for i, dwg_file in enumerate(dwg_files, 1):
            print(f"\n[{i}/{total}] Procesando: {dwg_file.name}")

            try:
                result = self.process_single_file(dwg_file)
                self.results.append(result)
                print(f"  ✓ Completado")
            except Exception as e:
                error = {
                    'file': dwg_file.name,
                    'error': str(e)
                }
                self.errors.append(error)
                print(f"  ✗ Error: {e}")

        # Generar reporte
        self.generate_report()

    def process_single_file(self, dwg_path):
        """Procesa un archivo individual"""

        # Abrir base de datos
        db = Database(False, True)
        db.ReadDwgFile(str(dwg_path), FileOpenMode.OpenForReadAndAllShare, False, "")
        db.CloseInput(True)

        result = {
            'filename': dwg_path.name,
            'alignments': [],
            'surfaces': [],
            'corridors': [],
            'profiles': []
        }

        with db.TransactionManager.StartTransaction() as trans:
            civil_doc = CivilDocument.GetCivilDocument(db)

            # Extraer alineamientos
            for align_id in civil_doc.GetAlignmentIds():
                alignment = trans.GetObject(align_id, OpenMode.ForRead)
                result['alignments'].append({
                    'name': alignment.Name,
                    'length': alignment.Length,
                    'start_station': alignment.StartingStation,
                    'end_station': alignment.EndingStation
                })

            # Extraer superficies
            for surf_id in civil_doc.GetSurfaceIds():
                surface = trans.GetObject(surf_id, OpenMode.ForRead)
                result['surfaces'].append({
                    'name': surface.Name,
                    'area': surface.GetGeneralProperties().Area,
                    'min_elevation': surface.GetGeneralProperties().MinimumElevation,
                    'max_elevation': surface.GetGeneralProperties().MaximumElevation
                })

            # Extraer corredores
            for corr_id in civil_doc.GetCorridorIds():
                corridor = trans.GetObject(corr_id, OpenMode.ForRead)
                result['corridors'].append({
                    'name': corridor.Name,
                    'baselines': corridor.Baselines.Count
                })

            trans.Commit()

        db.Dispose()

        return result

    def extract_alignment_data(self, dwg_path):
        """Extrae datos de alineamientos a CSV"""

        db = Database(False, True)
        db.ReadDwgFile(str(dwg_path), FileOpenMode.OpenForReadAndAllShare, False, "")

        output_data = []

        with db.TransactionManager.StartTransaction() as trans:
            civil_doc = CivilDocument.GetCivilDocument(db)

            for align_id in civil_doc.GetAlignmentIds():
                alignment = trans.GetObject(align_id, OpenMode.ForRead)

                # Muestrear cada 10m
                station = alignment.StartingStation
                while station <= alignment.EndingStation:
                    point = alignment.GetPointAtStation(station)

                    output_data.append({
                        'File': dwg_path.name,
                        'Alignment': alignment.Name,
                        'Station': station,
                        'Easting': point.X,
                        'Northing': point.Y
                    })

                    station += 10.0

            trans.Commit()

        db.Dispose()

        # Guardar a CSV
        output_file = self.output_folder / f"{dwg_path.stem}_alignments.csv"
        df = pd.DataFrame(output_data)
        df.to_csv(output_file, index=False)

        print(f"  Datos exportados: {output_file}")

    def generate_report(self):
        """Genera reporte de procesamiento"""

        # Reporte JSON
        report = {
            'total_files': len(self.results) + len(self.errors),
            'successful': len(self.results),
            'errors': len(self.errors),
            'results': self.results,
            'error_details': self.errors
        }

        json_file = self.output_folder / "batch_report.json"
        with open(json_file, 'w') as f:
            json.dump(report, f, indent=2)

        # Reporte Excel
        summary_data = []
        for result in self.results:
            summary_data.append({
                'Filename': result['filename'],
                'Alignments': len(result['alignments']),
                'Surfaces': len(result['surfaces']),
                'Corridors': len(result['corridors'])
            })

        df = pd.DataFrame(summary_data)
        excel_file = self.output_folder / "batch_summary.xlsx"
        df.to_excel(excel_file, index=False)

        print(f"\n=== REPORTE FINAL ===")
        print(f"Total archivos: {report['total_files']}")
        print(f"Exitosos: {report['successful']}")
        print(f"Errores: {report['errors']}")
        print(f"\nReportes generados:")
        print(f"  - {json_file}")
        print(f"  - {excel_file}")


# Uso
if __name__ == "__main__":
    processor = Civil3DBatchProcessor(
        input_folder=r"C:\Projects\Civil3D\Input",
        output_folder=r"C:\Projects\Civil3D\Output"
    )

    processor.process_all_files()
```

---

## Extracción de Datos a Excel/CSV

### Script: Exportar Cantidad de Obra

```python
# quantity_export.py
# Exportar cantidades de obra a Excel

import clr
clr.AddReference("AeccDbMgd")
from Autodesk.Civil.DatabaseServices import *
import pandas as pd
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment

def export_corridor_quantities(corridor, output_file):
    """Exporta cantidades de un corredor a Excel"""

    quantities = []

    with db.TransactionManager.StartTransaction() as trans:
        corr = trans.GetObject(corridor.Id, OpenMode.ForRead)

        # Iterar baselines
        for baseline in corr.Baselines:
            # Iterar regiones
            for region in baseline.BaselineRegions:

                # Obtener datos de la región
                region_data = {
                    'Baseline': baseline.Name,
                    'Region': region.Name,
                    'Start_Station': region.StartStation,
                    'End_Station': region.EndStation,
                    'Length': region.EndStation - region.StartStation
                }

                # Obtener quantities
                try:
                    # Volúmenes de material
                    region_data['Cut_Volume'] = region.GetMaterialVolume(
                        "Cut",
                        MaterialVolumeType.Net
                    )
                    region_data['Fill_Volume'] = region.GetMaterialVolume(
                        "Fill",
                        MaterialVolumeType.Net
                    )

                    # Áreas
                    region_data['Pavement_Area'] = region.GetArea("Pavement")
                    region_data['Earthwork_Area'] = region.GetArea("Earthwork")

                except:
                    region_data['Cut_Volume'] = 0
                    region_data['Fill_Volume'] = 0
                    region_data['Pavement_Area'] = 0
                    region_data['Earthwork_Area'] = 0

                quantities.append(region_data)

        trans.Commit()

    # Crear DataFrame
    df = pd.DataFrame(quantities)

    # Calcular totales
    total_row = {
        'Baseline': 'TOTAL',
        'Region': '',
        'Start_Station': '',
        'End_Station': '',
        'Length': df['Length'].sum(),
        'Cut_Volume': df['Cut_Volume'].sum(),
        'Fill_Volume': df['Fill_Volume'].sum(),
        'Pavement_Area': df['Pavement_Area'].sum(),
        'Earthwork_Area': df['Earthwork_Area'].sum()
    }

    df = pd.concat([df, pd.DataFrame([total_row])], ignore_index=True)

    # Exportar a Excel con formato
    with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
        df.to_excel(writer, sheet_name='Quantities', index=False)

        # Obtener workbook y worksheet
        workbook = writer.book
        worksheet = writer.sheets['Quantities']

        # Formatear encabezados
        header_fill = PatternFill(start_color="333333", end_color="333333", fill_type="solid")
        header_font = Font(color="FFFFFF", bold=True)

        for cell in worksheet[1]:
            cell.fill = header_fill
            cell.font = header_font
            cell.alignment = Alignment(horizontal='center')

        # Formatear fila de totales
        total_fill = PatternFill(start_color="EEEEEE", end_color="EEEEEE", fill_type="solid")
        total_font = Font(bold=True)

        last_row = worksheet.max_row
        for cell in worksheet[last_row]:
            cell.fill = total_fill
            cell.font = total_font

        # Ajustar anchos de columna
        for column in worksheet.columns:
            max_length = 0
            column_letter = column[0].column_letter
            for cell in column:
                if cell.value:
                    max_length = max(max_length, len(str(cell.value)))
            worksheet.column_dimensions[column_letter].width = max_length + 2

    print(f"Cantidades exportadas a: {output_file}")
```

---

## Integración con Bases de Datos

### Script: Guardar Datos en SQL Server

```python
# database_integration.py
# Integración con SQL Server

import pyodbc
import pandas as pd
from datetime import datetime

class Civil3DDatabase:
    """Integración con base de datos SQL"""

    def __init__(self, server, database):
        self.connection_string = (
            f"DRIVER={{SQL Server}};"
            f"SERVER={server};"
            f"DATABASE={database};"
            f"Trusted_Connection=yes;"
        )
        self.conn = None

    def connect(self):
        """Conectar a base de datos"""
        self.conn = pyodbc.connect(self.connection_string)
        print("Conexión establecida")

    def create_tables(self):
        """Crear tablas si no existen"""

        cursor = self.conn.cursor()

        # Tabla de proyectos
        cursor.execute("""
            IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Projects')
            CREATE TABLE Projects (
                ProjectID INT PRIMARY KEY IDENTITY,
                ProjectName NVARCHAR(255),
                Location NVARCHAR(255),
                CreatedDate DATETIME,
                Status NVARCHAR(50)
            )
        """)

        # Tabla de alineamientos
        cursor.execute("""
            IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Alignments')
            CREATE TABLE Alignments (
                AlignmentID INT PRIMARY KEY IDENTITY,
                ProjectID INT FOREIGN KEY REFERENCES Projects(ProjectID),
                AlignmentName NVARCHAR(255),
                Length FLOAT,
                StartStation FLOAT,
                EndStation FLOAT,
                ImportDate DATETIME
            )
        """)

        # Tabla de cantidades
        cursor.execute("""
            IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Quantities')
            CREATE TABLE Quantities (
                QuantityID INT PRIMARY KEY IDENTITY,
                ProjectID INT FOREIGN KEY REFERENCES Projects(ProjectID),
                CorridorName NVARCHAR(255),
                CutVolume FLOAT,
                FillVolume FLOAT,
                PavementArea FLOAT,
                CalculationDate DATETIME
            )
        """)

        self.conn.commit()
        print("Tablas creadas/verificadas")

    def insert_project(self, name, location, status='Active'):
        """Insertar nuevo proyecto"""

        cursor = self.conn.cursor()

        cursor.execute("""
            INSERT INTO Projects (ProjectName, Location, CreatedDate, Status)
            VALUES (?, ?, ?, ?)
        """, (name, location, datetime.now(), status))

        self.conn.commit()

        # Obtener ID del proyecto creado
        cursor.execute("SELECT @@IDENTITY")
        project_id = cursor.fetchone()[0]

        print(f"Proyecto creado: ID = {project_id}")
        return project_id

    def insert_alignment_data(self, project_id, alignment):
        """Insertar datos de alineamiento"""

        cursor = self.conn.cursor()

        cursor.execute("""
            INSERT INTO Alignments (ProjectID, AlignmentName, Length, StartStation, EndStation, ImportDate)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (
            project_id,
            alignment.Name,
            alignment.Length,
            alignment.StartingStation,
            alignment.EndingStation,
            datetime.now()
        ))

        self.conn.commit()

    def insert_quantities(self, project_id, corridor_name, cut, fill, pavement):
        """Insertar cantidades de obra"""

        cursor = self.conn.cursor()

        cursor.execute("""
            INSERT INTO Quantities (ProjectID, CorridorName, CutVolume, FillVolume, PavementArea, CalculationDate)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (project_id, corridor_name, cut, fill, pavement, datetime.now()))

        self.conn.commit()

    def get_project_summary(self, project_id):
        """Obtener resumen del proyecto"""

        query = """
            SELECT
                p.ProjectName,
                p.Location,
                COUNT(DISTINCT a.AlignmentID) AS TotalAlignments,
                SUM(q.CutVolume) AS TotalCut,
                SUM(q.FillVolume) AS TotalFill,
                SUM(q.PavementArea) AS TotalPavement
            FROM Projects p
            LEFT JOIN Alignments a ON p.ProjectID = a.ProjectID
            LEFT JOIN Quantities q ON p.ProjectID = q.ProjectID
            WHERE p.ProjectID = ?
            GROUP BY p.ProjectName, p.Location
        """

        df = pd.read_sql(query, self.conn, params=[project_id])
        return df

    def close(self):
        """Cerrar conexión"""
        if self.conn:
            self.conn.close()
            print("Conexión cerrada")


# Uso
if __name__ == "__main__":
    # Conectar
    db = Civil3DDatabase(server="localhost", database="Civil3DProjects")
    db.connect()
    db.create_tables()

    # Crear proyecto
    project_id = db.insert_project(
        name="Highway Project 2024",
        location="Texas, USA"
    )

    # Insertar datos (asumiendo que tenemos objetos Civil 3D)
    # db.insert_alignment_data(project_id, alignment_object)
    # db.insert_quantities(project_id, "Main Corridor", 15000, 12000, 5000)

    # Obtener resumen
    summary = db.get_project_summary(project_id)
    print(summary)

    db.close()
```

---

## Resumen de la Lección

Has aprendido:

✅ **Configuración de Python para Civil 3D**
- Instalación de Python.NET
- Referencias a DLLs de Autodesk
- Configuración de VS Code

✅ **API de Civil 3D**
- Estructura de namespaces
- Manejo de transacciones
- Lectura y escritura de objetos

✅ **Manipulación Avanzada**
- Análisis de alineamientos
- Creación de perfiles programática
- Optimización de diseño

✅ **Batch Processing**
- Procesar múltiples archivos
- Extracción automatizada de datos
- Generación de reportes

✅ **Integración de Datos**
- Export a Excel/CSV
- Conexión con SQL Server
- Análisis con pandas

---

## Siguiente Paso

En la **Lección 4: Custom Tools Development**, aprenderás a:
- Crear custom nodes en Dynamo
- Desarrollar add-ins para Civil 3D
- Construir interfaces de usuario
- Distribuir herramientas al equipo

[Continuar a Lección 4 →](./leccion-4.md)

---

**DISTMAH Advanced Technical Center (ATC)**
*Python scripting avanzado para Civil 3D desde 2024*
