# Lección 2: Importar Puntos desde Archivos Externos

**Duración:** 60 minutos
**Módulo:** 2 - Puntos y Superficies Topográficas
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Importar puntos desde archivos CSV y TXT con diferentes formatos
✅ Utilizar Import Points Wizard paso a paso
✅ Trabajar con formato LandXML para levantamientos profesionales
✅ Crear formatos de importación personalizados
✅ Transformar coordenadas durante la importación
✅ Resolver errores comunes en datos de campo
✅ Importar masivamente miles de puntos eficientemente

---

## Introducción

En la práctica profesional, los levantamientos topográficos se capturan con estaciones totales, GPS RTK, o escáneres láser. Estos equipos generan archivos de datos con miles o millones de puntos en formatos como CSV, TXT, o LandXML.

Crear puntos manualmente uno por uno (lección 1) es impráctico para proyectos reales. Civil 3D ofrece herramientas robustas de importación que procesan automáticamente archivos de datos topográficos, aplicando Description Keys, asignando puntos a grupos, y creando superficies en minutos.

**Caso real:** Un levantamiento topográfico de 5 hectáreas para una urbanización puede contener 15,000 puntos. Con Import Points de Civil 3D, puedes importar y clasificar todos estos puntos en menos de 2 minutos, vs días de trabajo manual.

---

## 1. Formatos de Archivo de Puntos Topográficos

### 1.1 Formatos Comunes

**PNEZD (Point Number, Easting, Northing, Elevation, Description)**
```
1,1000.00,2000.00,150.00,EP
2,1025.50,2000.00,150.25,EP
3,1050.00,2000.00,150.50,TC
```

**PENZD (Point, Easting, Northing, Elevation, Description)**
```
1,1000.00,2000.00,150.00,EP
2,1025.50,2000.00,150.25,EP
```

**NEZ (Northing, Easting, Elevation) - Sin número ni descripción**
```
2000.00,1000.00,150.00
2000.00,1025.50,150.25
```

**PNEZ (Point Number, Easting, Northing, Elevation) - Sin descripción**
```
1,1000.00,2000.00,150.00
2,1025.50,2000.00,150.25
```

**Delimitadores comunes:**
- **Coma** (CSV): `1,1000.00,2000.00,150.00,EP`
- **Espacio** (Space delimited): `1 1000.00 2000.00 150.00 EP`
- **Tab** (Tab delimited): `1    1000.00    2000.00    150.00    EP`

### 1.2 Formato LandXML

**LandXML** es un estándar internacional de intercambio de datos de ingeniería civil basado en XML.

**Ejemplo de LandXML con puntos:**
```xml
<?xml version="1.0"?>
<LandXML xmlns="http://www.landxml.org/schema/LandXML-1.2">
  <Units>
    <Metric linearUnit="meter" areaUnit="squareMeter"/>
  </Units>
  <CgPoints>
    <CgPoint name="1">1000.00 2000.00 150.00 EP</CgPoint>
    <CgPoint name="2">1025.50 2000.00 150.25 EP</CgPoint>
    <CgPoint name="3">1050.00 2000.00 150.50 TC</CgPoint>
  </CgPoints>
</LandXML>
```

**Ventajas de LandXML:**
- Formato estándar de industria
- Incluye metadatos (unidades, coordinate systems, datum)
- Soporta múltiples objetos (puntos, superficies, alineamientos)
- Intercambio entre diferentes software (Civil 3D, Trimble Business Center, 12d Model)

![Formatos de Punto](../../imagenes/leccion-2-2-point-formats.png)

---

## 2. Import Points Wizard - Paso a Paso

### 2.1 Acceso a Import Points

**Método 1: Ribbon**
1. Ribbon → **Insert** tab → **Import** panel
2. Click en **Points from File**

**Método 2: Toolspace**
1. Toolspace → **Prospector** tab
2. Expande **Point Groups**
3. Click derecho en **Point Groups** → **Import Points...**

**Método 3: Command Line**
- Command: `POINTIMPORT`

### 2.2 Import Points Wizard - Interfaz

Aparece el diálogo **Import Points**.

**Secciones principales:**

1. **Format options:**
   - Seleccionar formato predefinido o custom

2. **Source file:**
   - Especificar archivo a importar

3. **Advanced options:**
   - Transformación de coordenadas
   - Point file settings

4. **Preview:**
   - Vista previa de puntos antes de importar

![Import Points Dialog](../../imagenes/leccion-2-2-import-points-dialog.png)

### 2.3 Procedimiento Completo de Importación

**Paso 1: Especificar Formato**

En la sección **Format:**
- **Format:** Desplegable con formatos predefinidos
  - `PNEZD (comma delimited)`
  - `PENZD (space delimited)`
  - `PNEZD (space delimited)`
  - `NEZ (comma delimited)`
  - `PNEZ (space delimited)`
  - `Custom Format` - Para formatos no estándar

**Paso 2: Seleccionar Archivo**

En la sección **Source File:**
- Click en botón **"..."** (Browse)
- Navega a la ubicación del archivo
- Ejemplo: `C:\Proyectos\Levantamiento-Terreno.csv`
- Click **Abrir**

**Paso 3: Advanced Options (Opcional)**

Click en botón **Advanced Options** para:

- **Coordinate Zone Transform:**
  - Transformar coordenadas desde un sistema a otro
  - Ejemplo: De UTM Zone 19N a State Plane
  - Selecciona **Source coordinate zone** y **Destination coordinate zone**

- **Override Point Number:**
  - Sobrescribir números de punto si ya existen
  - O incrementar automáticamente números duplicados

- **Override Description:**
  - Sobrescribir descripciones existentes

**Paso 4: Preview (Verificación)**

- Civil 3D muestra preview de primeros puntos
- Verifica que columnas estén correctamente interpretadas
- Si columnas están desordenadas, revisa formato seleccionado

**Paso 5: Import**

- Click en **OK**
- Civil 3D procesa archivo
- Aparece reporte: `X points imported successfully`
- Puntos aparecen en Model Space

![Import Points Process](../../imagenes/leccion-2-2-import-process.png)

---

## 3. Importar con Formatos Personalizados

### 3.1 ¿Cuándo necesitas Custom Format?

**Escenarios:**
- Tu estación total genera formato no estándar
- Tienes columnas adicionales (code, note, time)
- Orden de columnas diferente (ej: NPEZD en vez de PNEZD)
- Delimitadores múltiples (coma y espacio)
- Headers o comentarios en el archivo

**Ejemplo de formato custom:**
```
# Levantamiento Topográfico - Proyecto XYZ
# Fecha: 2025-11-20
ID,X,Y,Z,Code,Note
100,1000.00,2000.00,150.00,EP,Edge Pavement South
101,1025.50,2000.00,150.25,EP,Edge Pavement South
102,1050.00,2000.00,150.50,TC,Top Curb
```

### 3.2 Crear Custom Point File Format

**Procedimiento:**

1. Toolspace → **Settings** tab
2. Expande **Point**
3. Expande **Point File Formats**
4. Click derecho en espacio vacío → **New...**

Aparece **Point File Format** dialog.

**Sección Format Options:**

- **Name:** `Custom-NPEZD-Comma`
- **Format type:** `Delimited by characters`
- **Delimiter:** `,` (coma)
- **Comment tag:** `#` (líneas que empiezan con # se ignoran)

**Sección Column Definition:**

Define el orden de columnas en tu archivo:

1. Click **Insert Column**
2. Selecciona **Column Name:**
   - `Point Number` (número de punto)
   - `Easting` (X)
   - `Northing` (Y)
   - `Point Elevation` (Z)
   - `Raw Description` (código/descripción)
   - `Full Description` (descripción expandida)
   - `Name` (nombre opcional)
   - `(unused)` (columna ignorada)

3. Repite para cada columna en tu archivo
4. Ordena columnas según archivo (arrastra para reordenar)

**Ejemplo de configuración:**

Para archivo: `ID,X,Y,Z,Code,Note`

| Column # | Column Name | Comment |
|----------|-------------|---------|
| 1 | Point Number | ID del punto |
| 2 | Easting | Coordenada X |
| 3 | Northing | Coordenada Y |
| 4 | Point Elevation | Elevación Z |
| 5 | Raw Description | Code (EP, TC, etc.) |
| 6 | (unused) | Note - ignorar |

5. Click **OK**

![Custom Point File Format](../../imagenes/leccion-2-2-custom-format.png)

### 3.3 Usar Custom Format en Importación

**Procedimiento:**

1. Import Points dialog
2. **Format:** Selecciona tu formato custom: `Custom-NPEZD-Comma`
3. **Source File:** Selecciona archivo
4. Preview verifica correcta interpretación
5. Click **OK** para importar

---

## 4. Importar Puntos desde LandXML

### 4.1 Ventajas de LandXML

LandXML es preferido en proyectos grandes porque:
- Incluye metadata completo (coordinate system, datum, units)
- Formato estandarizado internacionalmente
- Soporta múltiples objetos (puntos, superficies, alineamientos)
- Validación de esquema XML (menos errores)

### 4.2 Procedimiento de Importación LandXML

**Método 1: Import LandXML Points**

1. Ribbon → **Insert** tab → **Import** panel
2. Click en **LandXML**
3. Aparece **Import LandXML** dialog
4. Navega y selecciona archivo `.xml`
5. Aparece **Import LandXML** dialog con opciones:

**Sección Data to Import:**
- ✓ **Points** - Importar puntos
- ✓ **Surfaces** - Importar superficies (si el XML las contiene)
- ✓ **Alignments** - Importar alineamientos
- ✓ **Pipe Networks** - Importar redes de tuberías

6. Selecciona solo **Points** si solo quieres puntos
7. Click **OK**
8. Puntos importados en Model Space

**Método 2: Drag & Drop (Civil 3D 2026)**

**Novedad 2026:** Soporte mejorado de drag & drop para LandXML.

1. Abre Windows Explorer
2. Localiza archivo `.xml`
3. Arrastra archivo directamente al Model Space de Civil 3D
4. Civil 3D automáticamente detecta contenido y pregunta qué importar
5. Selecciona **Points**
6. Importación automática

![Import LandXML](../../imagenes/leccion-2-2-import-landxml.png)

### 4.3 Revisar Puntos Importados desde LandXML

Después de importar:

1. Toolspace → **Prospector** tab
2. Expande **Point Groups** → **_All Points**
3. Expande **_All Points** → **Points**
4. Lista completa de puntos importados con metadata

Verifica:
- Coordinate system correcto
- Unidades correctas (metric vs imperial)
- Elevaciones coherentes
- Descripciones asignadas

---

## 5. Transformación de Coordenadas en Importación

### 5.1 ¿Cuándo transformar coordenadas?

**Escenarios comunes:**

- Levantamiento en **coordenadas locales** (X, Y arbitrario) → Necesitas transformar a coordenadas reales (UTM, State Plane)
- Levantamiento en **UTM Zone 19N** → Proyecto en **State Plane California**
- Cambio de **datum** (NAD83 → WGS84)
- Ajuste por **calibración de GPS**

### 5.2 Configurar Transformación

**En Import Points dialog:**

1. Click en **Advanced Options**
2. Sección **Coordinate Zone Transform**

**Opciones:**

- **No Transform** - Sin transformación (default)
- **Source Zone to Destination Zone** - Transformar entre coordinate systems

**Si seleccionas transformación:**

3. **Source Coordinate Zone:**
   - Selecciona coordinate system del archivo de origen
   - Ejemplo: `UTM-19N, WGS84`

4. **Destination Coordinate Zone:**
   - Selecciona coordinate system del drawing destino
   - Ejemplo: `State Plane California III, NAD83`

5. Click **OK**

**IMPORTANTE:** El drawing destino debe tener un coordinate system asignado (Drawing Settings → Units and Zone).

![Coordinate Transform](../../imagenes/leccion-2-2-coordinate-transform.png)

### 5.3 Ejemplo: Transformar de Local a UTM

**Escenario:** Levantamiento con coordenadas locales (X: 0-500, Y: 0-300) debe transformarse a UTM Zone 19N con base en punto de control conocido.

**Procedimiento:**

1. Establece **Drawing Coordinate System:** UTM-19N
   - Toolspace → Settings → Drawing → Units and Zone
   - Coordinate System: `UTM-19N`

2. En archivo de puntos, identifica punto de control
   - Punto local: `X=100, Y=200, Z=150`
   - Punto real UTM: `X=500000, Y=1000000, Z=150`

3. Calcula offset:
   - Delta X = 500000 - 100 = 499900
   - Delta Y = 1000000 - 200 = 999800

4. En Import Points → Advanced Options
   - Source Zone: `Local`
   - Destination Zone: `UTM-19N`
   - Apply transformation usando punto de control

**Alternativa:** Usa **Survey Database** para transformación precisa con poligonales (tema avanzado).

---

## 6. Resolución de Errores Comunes

### 6.1 Error: "Duplicate Point Numbers"

**Problema:** El archivo contiene números de punto que ya existen en el drawing.

**Solución 1:** Override automático
- Import Points → Advanced Options
- ✓ **Override existing points**
- Puntos se sobrescriben

**Solución 2:** Incrementar números
- Import Points → Advanced Options
- **Start point numbering at:** `1000` (número inicial libre)
- Puntos importados con nueva numeración

### 6.2 Error: "Invalid Coordinates"

**Problema:** Coordenadas fuera de rango válido o formato incorrecto.

**Causas comunes:**
- Delimitador incorrecto (usaste formato comma pero archivo es space)
- Orden de columnas incorrecto
- Caracteres no numéricos en coordenadas

**Solución:**
1. Abre archivo en Notepad/Excel y verifica formato
2. Elimina headers si existen
3. Verifica que no haya líneas vacías
4. Usa formato custom si es necesario

### 6.3 Error: "Points Not Displaying"

**Problema:** Importación exitosa pero puntos no visibles en Model Space.

**Causas:**
- Puntos en layer desactivado (OFF)
- Point Style con tamaño 0 o invisible
- Puntos muy lejos del origen (coordenadas enormes)
- Elevaciones extremas (Z muy alto/bajo)

**Solución:**
1. Command: `ZOOM` → `EXTENTS` (zoom a todos los objetos)
2. Toolspace → Prospector → Point Groups → _All Points → Properties
   - Verifica Point Style y Layer
3. Verifica que layer de puntos esté ON
4. Cambia Point Style a uno visible

### 6.4 Error: "Incorrect Elevation Units"

**Problema:** Elevaciones importadas en metros pero drawing en pies (o viceversa).

**Síntoma:** Puntos con elevaciones absurdas (ej: 500 pies cuando debería ser 150 metros).

**Solución:**
1. Verifica units del archivo fuente (métrico o imperial)
2. Verifica Drawing Units (Toolspace → Settings → Drawing → Units and Zone)
3. Si no coinciden:
   - Option 1: Convierte archivo antes de importar
   - Option 2: Edita elevaciones después con formula (Point Editor → Multiply Z by 3.28084 para metros a pies)

![Error Resolution](../../imagenes/leccion-2-2-error-resolution.png)

---

## 7. Importación Masiva de Puntos (Best Practices)

### 7.1 Optimización para Miles de Puntos

**Para levantamientos con 10,000+ puntos:**

**Antes de importar:**

1. **Desactiva regeneración automática:**
   - Command: `REGENAUTO`
   - Enter `OFF`
   - Esto acelera importación

2. **Cierra Point Tables dinámicas:**
   - Point Tables se actualizan con cada punto importado
   - Cierra temporalmente para performance

3. **Desactiva Point Groups complejos:**
   - Point Groups con queries complejas ralentizan importación
   - Actívalos después de importar

**Durante importación:**

4. **Usa archivos optimizados:**
   - Formato PNEZD simple (sin columnas extras)
   - Sin headers ni comentarios
   - Delimitador único (preferible coma)

**Después de importar:**

5. **Reactiva regeneración:**
   - Command: `REGENAUTO` → `ON`

6. **Regenera display:**
   - Command: `REGEN`

7. **Verifica importación:**
   - Toolspace → Prospector → _All Points → Points (lista)
   - Cuenta de puntos debe coincidir con archivo fuente

### 7.2 Dividir Archivos Grandes

**Para archivos con 50,000+ puntos:**

**Opción:** Divide archivo en múltiples archivos más pequeños.

**Procedimiento:**

1. Divide archivo CSV en bloques de 10,000 puntos:
   - `Levantamiento-Parte-1.csv` (puntos 1-10000)
   - `Levantamiento-Parte-2.csv` (puntos 10001-20000)
   - `Levantamiento-Parte-3.csv` (puntos 20001-30000)

2. Importa cada archivo secuencialmente
3. Civil 3D gestiona mejor bloques pequeños

**Herramienta:** Usa Python script o Excel para dividir archivos.

### 7.3 Verificación de Importación

**Checklist post-importación:**

✅ **Cantidad de puntos correcta**
- Toolspace → Prospector → _All Points → Count
- Debe coincidir con líneas del archivo fuente

✅ **Rango de coordenadas coherente**
- Point Editor (Panorama) → Verifica min/max de X, Y, Z
- No debe haber valores absurdos

✅ **Descripciones asignadas**
- Verifica que Raw Description no esté vacío
- Description Keys aplicados (lección 3)

✅ **Point Groups creados automáticamente**
- Si tienes Description Keys configurados, Point Groups se crean automáticamente

✅ **Visualización correcta**
- Todos los puntos visibles en Model Space
- Colores/estilos apropiados por tipo

![Verification Checklist](../../imagenes/leccion-2-2-verification.png)

---

## 8. Exportar Puntos (Workflow Inverso)

### 8.1 Export Points to File

**Uso:** Enviar puntos a otro software (Trimble, Leica, 12d Model).

**Procedimiento:**

1. Toolspace → **Prospector** → **Point Groups**
2. Click derecho en Point Group deseado → **Export Points...**
3. Aparece **Export Points** dialog

**Configuración:**

- **Output file:** `C:\Export\Puntos-Terreno.csv`
- **File format:** Selecciona formato de salida
  - `PNEZD (comma delimited)`
  - `PNEZD (space delimited)`
  - `LandXML`
  - Custom formats
- **Point Group:** Grupo a exportar (o _All Points)
- **Coordinate zone transform:** Si necesitas cambiar coordinate system

4. Click **OK**
5. Archivo generado en ubicación especificada

### 8.2 Exportar a LandXML

**Para máxima compatibilidad:**

1. Ribbon → **Output** tab → **Export** panel
2. Click en **LandXML**
3. Selecciona objetos a exportar:
   - ✓ Points
   - ✓ Surfaces (si quieres incluir superficie)
4. **Export to LandXML** dialog
   - Output file: `Proyecto-Completo.xml`
   - Version: `LandXML 1.2` (estándar actual)
5. Click **OK**

**Archivo LandXML generado** puede abrirse en cualquier software compatible (Bentley, Trimble, 12d Model).

---

## Ejercicio Práctico 2

**Objetivo:** Importar puntos desde archivo CSV con diferentes formatos, crear Point Groups, y exportar a LandXML.

### Escenario

Recibiste un levantamiento topográfico de un proyecto de carretera con 250 puntos en formato CSV. Debes importarlos, organizarlos, y exportarlos para compartir con otro ingeniero.

### Parte 1: Preparar Archivo CSV

1. Crea archivo `Levantamiento-Carretera.csv` en Notepad con el siguiente contenido:

```csv
1,1000.00,2000.00,150.00,EP
2,1025.00,2000.00,150.20,EP
3,1050.00,2000.00,150.40,EP
4,1075.00,2000.00,150.60,EP
5,1100.00,2000.00,150.80,EP
6,1000.00,2010.00,151.00,TC
7,1025.00,2010.00,151.20,TC
8,1050.00,2010.00,151.40,TC
9,1075.00,2010.00,151.60,TC
10,1100.00,2010.00,151.80,TC
11,1000.00,1990.00,149.50,TN
12,1025.00,1990.00,149.70,TN
13,1050.00,1990.00,149.90,TN
14,1075.00,1990.00,150.10,TN
15,1100.00,1990.00,150.30,TN
16,1000.00,2020.00,152.00,CL
17,1025.00,2020.00,152.20,CL
18,1050.00,2020.00,152.40,CL
19,1075.00,2020.00,152.60,CL
20,1100.00,2020.00,152.80,CL
```

2. Guarda archivo como `Levantamiento-Carretera.csv` en `C:\Proyectos\Civil3D\`

### Parte 2: Importar Puntos

3. Abre nuevo drawing en Civil 3D desde template métrico
4. Ribbon → Insert → Points from File
5. Import Points dialog:
   - **Format:** `PNEZD (comma delimited)`
   - **Source File:** `C:\Proyectos\Civil3D\Levantamiento-Carretera.csv`
6. Click **OK**
7. Verifica que aparecen 20 puntos en Model Space

### Parte 3: Verificar Importación

8. Toolspace → Prospector → Point Groups → _All Points → Points
9. Verifica count: **20 points**
10. Command: `ZOOM` → `EXTENTS` (ver todos los puntos)
11. Abre Point Editor (Panorama)
12. Verifica que coordenadas y descripciones sean correctas

### Parte 4: Crear Point Groups

13. Crea Point Groups por descripción:
    - **EP-Edge-Pavement:** Raw description = `EP*`
    - **TC-Top-Curb:** Raw description = `TC*`
    - **TN-Terreno-Natural:** Raw description = `TN*`
    - **CL-Centerline:** Raw description = `CL*`

14. Asigna colores diferentes a cada grupo:
    - EP: Rojo
    - TC: Amarillo
    - TN: Verde
    - CL: Magenta

### Parte 5: Exportar a LandXML

15. Toolspace → Prospector → Point Groups → _All Points
16. Click derecho → **Export Points...**
17. Export Points dialog:
    - Output file: `C:\Proyectos\Civil3D\Puntos-Export.xml`
    - File format: `LandXML`
    - Point Group: `_All Points`
18. Click **OK**

### Parte 6: Verificar Exportación

19. Abre `Puntos-Export.xml` en Notepad
20. Verifica estructura XML con 20 puntos
21. Verifica que incluye coordenadas y descripciones

**Entregables:**
- Archivo DWG con 20 puntos importados organizados en 4 Point Groups
- Archivo LandXML exportado (`Puntos-Export.xml`)
- Screenshot mostrando puntos en diferentes colores por grupo

![Ejercicio 2 - Importación](../../imagenes/leccion-2-2-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia entre formato PNEZD y PENZD?

**Pregunta 2:** ¿Qué ventaja tiene importar puntos desde LandXML vs CSV?

**Pregunta 3:** ¿Cuándo necesitas crear un Custom Point File Format?

**Pregunta 4:** ¿Qué sucede si importas puntos con números que ya existen en el drawing?

**Pregunta 5:** Menciona 3 causas comunes de errores en importación de puntos.

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 - Import Points Reference
- Point File Formats User Guide
- LandXML Schema Documentation

**Archivos de ejemplo:**
- Point file formats samples (PNEZD, PENZD, etc.)
- LandXML sample files

**Scripts útiles:**
- Python script para convertir formatos de puntos
- Excel macro para limpiar archivos de puntos

---

## Resumen

En esta lección aprendiste:

✅ Formatos estándar de archivos de puntos (PNEZD, PENZD, NEZ, LandXML)
✅ Import Points Wizard para importar miles de puntos automáticamente
✅ Crear formatos personalizados para archivos no estándar
✅ Importar desde LandXML con metadata completo
✅ Transformar coordenadas durante importación
✅ Resolver errores comunes (duplicados, formato incorrecto, unidades)
✅ Best practices para importación masiva (10,000+ puntos)
✅ Exportar puntos a CSV y LandXML para compartir con otros

**Próxima Lección:** Point Description Keys - Clasificación automática de puntos usando códigos de campo estándar.

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos importando diferentes formatos de archivos y resolviendo errores
