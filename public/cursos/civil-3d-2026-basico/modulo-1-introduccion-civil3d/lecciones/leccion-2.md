# Lección 2: Configuración de Proyectos y Drawing Settings

**Duración:** 60 minutos
**Módulo:** 1 - Introducción a Civil 3D 2026
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Crear nuevos drawings desde templates de Civil 3D
✅ Configurar Drawing Settings correctamente (Units, Zone, Object Layers)
✅ Establecer sistemas de coordenadas (UTM, State Plane)
✅ Configurar Ambient Settings (precisión, formatos)
✅ Utilizar Drawing Units Setup Assistant
✅ Comprender el concepto de Data Shortcuts y File References

---

## Introducción

La configuración correcta de un proyecto Civil 3D desde el inicio es **crítica** para el éxito del proyecto. Errores en unidades, coordenadas, o sistemas de referencia pueden causar problemas graves que son difíciles de corregir más adelante.

En esta lección aprenderás cómo configurar profesionalmente un drawing de Civil 3D, establecer el sistema de coordenadas adecuado, y preparar el entorno para trabajo colaborativo con Data Shortcuts.

**Regla de oro:** Configura correctamente desde el principio. Cambiar el sistema de coordenadas o unidades después de crear objetos puede causar desajustes y pérdida de precisión.

---

## 1. Templates de Civil 3D

### ¿Qué es un Template (.dwt)?

Un template es un archivo **maestro** que contiene:
- Drawing Settings preconfigurados (unidades, zona, precisión)
- Object Styles (estilos de superficies, alineamientos, perfiles)
- Label Styles (estilos de etiquetas)
- Table Styles (estilos de tablas)
- Layers predefinidos con estándares
- Blocks comunes (simbología)

**Analogía:** Un template es como una "plantilla de Word" - defines el formato una vez y todos los documentos nuevos heredan esa configuración.

### Templates Incluidos con Civil 3D 2026

**Imperial (Estados Unidos):**
- `_AutoCAD Civil 3D (Imperial) NCS.dwt` - National CAD Standard
- `_AutoCAD Civil 3D (Imperial) NCS Extended.dwt` - Versión extendida con más styles

**Métrico (Internacional):**
- `_AutoCAD Civil 3D (Metric) NCS.dwt` - Estándar métrico
- `_AutoCAD Civil 3D (Metric) NCS Extended.dwt` - Versión extendida

**Ubicación:**
`C:\ProgramData\Autodesk\C3D 2026\enu\Template\`

![Templates de Civil 3D](../imagenes/leccion-2-templates.png)

### Crear Drawing desde Template

**Método 1: Application Menu**
1. Click en Application Menu (A superior izquierdo)
2. New → Drawing
3. Select template: `_AutoCAD Civil 3D (Metric) NCS.dwt`
4. Open

**Método 2: Quick Access Toolbar**
1. Click en icono "New" (hoja en blanco)
2. Select template
3. Open

**Método 3: Command Line**
1. Type: `QNEW` (Quick New)
2. Select template

**Recomendación profesional:**
Si tu región usa el sistema métrico (mayoría de países de habla hispana), usa el template Métrico. Si trabajas en Estados Unidos, usa Imperial.

---

## 2. Drawing Settings - Units and Zone

### 2.1 Acceder a Drawing Settings

**Ruta:**
1. Toolspace → Settings Tab
2. Click derecho en nombre del drawing (top level)
3. **Edit Drawing Settings...**

O bien:

**Command Line:**
`SETTINGS` → Enter

![Drawing Settings Dialog](../imagenes/leccion-2-drawing-settings.png)

### 2.2 Units Tab - Configuración de Unidades

**Drawing Units:**
- **Imperial:** Feet (pies) - Usado en EE.UU.
- **Metric:** Meters (metros) - Usado internacionalmente

**Angular Units:**
- Degrees (grados sexagesimales) - Más común
- Radians (radianes)
- Grads (grados centesimales)

**Direction:**
- **North:** 0° apunta al Norte (estándar de topografía)
- **East:** 0° apunta al Este
- **West:** 0° apunta al Oeste
- **South:** 0° apunta al Sur

**Rotation:**
- **Counter-Clockwise** (sentido antihorario) - Estándar topográfico
- Clockwise (sentido horario)

**Ejemplo configuración métrica:**
```
Drawing Units: Meters
Angular Units: Degrees
Direction: North
Rotation: Counter-Clockwise
```

**Ejemplo configuración imperial:**
```
Drawing Units: Feet
Angular Units: Degrees
Direction: North
Rotation: Counter-Clockwise
```

### 2.3 Zone Tab - Sistema de Coordenadas

El **sistema de coordenadas** es fundamental para:
- Georreferenciación del proyecto
- Integración con datos GPS/estaciones totales
- Exportación a GIS
- Coordinación con otros proyectos en la región

**Coordinate System Categories:**

#### UTM (Universal Transverse Mercator)
Sistema de coordenadas proyectadas más utilizado mundialmente.

**Estructura:**
- Divide el mundo en **60 zonas** (cada una de 6° de longitud)
- Cada zona tiene su propia proyección
- Coordenadas en metros

**Ejemplos:**
- **UTM Zone 19N, WGS84** - Venezuela, Colombia (Norte)
- **UTM Zone 13N, NAD83** - México Central
- **UTM Zone 18S, WGS84** - Chile, Argentina (Centro)

**¿Cómo saber mi zona UTM?**
1. Busca las coordenadas de tu proyecto (latitud/longitud)
2. Usa la fórmula: Zona = INT((Longitud + 180) / 6) + 1
3. O consulta un mapa de zonas UTM en línea

![Zonas UTM Mundial](../imagenes/leccion-2-utm-zones.png)

#### State Plane (Estados Unidos)
Sistema de coordenadas específico de EE.UU.

**Características:**
- Cada estado tiene 1-10 zonas State Plane
- Mayor precisión local que UTM
- Coordenadas en pies o metros

**Ejemplos:**
- California Zone 1-7 (California tiene 7 zonas)
- Texas Zone 1-5
- Florida East/West

#### Projected Coordinate Systems (Otros)
- Lambert Conformal Conic
- Transverse Mercator
- Albers Equal Area

**Configuración paso a paso:**

1. **Select coordinate system**
2. Categories: **UTM**
3. Available coordinate systems:
   - Filtra por zona: Ejemplo "UTM Zone 19N"
   - Datum: Selecciona **WGS84** (World Geodetic System 1984 - estándar GPS moderno)
4. **Select** → OK

**Importante:** El datum define el elipsoide de referencia. WGS84 es el estándar internacional actual. NAD83 se usa principalmente en Norteamérica.

![Zone Configuration](../imagenes/leccion-2-zone-config.png)

### 2.4 Object Layers Tab

Civil 3D asigna automáticamente objetos a **layers** según estándares.

**Layer Standard:**
- **Civil 3D** - Estándar de Civil 3D
- **Custom** - Personalizado

**Layer Naming:**
Define prefijos/sufijos para layers automáticos

**Ejemplo:**
- Surfaces → Layer: `C-TOPO-*`
- Alignments → Layer: `C-ROAD-ALGN`
- Pipe Networks → Layer: `C-SSWR-PIPE` (sanitary sewer)

**Modificador de layers:**
Puedes personalizar completamente los layers por tipo de objeto.

### 2.5 Abbreviations Tab

Abreviaturas utilizadas en etiquetas y tablas.

**Ejemplos:**
- STA = Station (estación)
- ELEV = Elevation (elevación)
- HORIZ = Horizontal
- VERT = Vertical

Puedes añadir tus propias abreviaturas personalizadas.

---

## 3. Ambient Settings - Precisión y Formatos

**Ruta:**
1. Toolspace → Settings Tab
2. Expand Drawing (nombre del dibujo)
3. **Ambient Settings** (al fondo de la lista)

### 3.1 Categories de Ambient Settings

#### Distance
- **Unit:** Meter / Foot
- **Format:** Decimal (0.000) vs Fraction (3 1/2')
- **Precision:** 0.001 m (1mm) recomendado para topografía
- **Rounding:** Standard / Up / Down / Truncate

**Configuración recomendada métrica:**
```
Unit: Meter
Format: Decimal
Precision: 0.001
Rounding: Standard
```

#### Angle
- **Unit:** Degree / Radian / Grad
- **Format:** DD.MMSS (90°30'15") vs Decimal (90.5042°)
- **Precision:** 0.0001° (común en topografía)

**Configuración recomendada:**
```
Unit: Degree
Format: DD.MMSS
Precision: 1" (1 segundo de arco)
Direction: North Azimuth
```

#### Coordinate
- **Format:** X Y Z separados
- **Precision:** Match Distance settings

#### Elevation
- **Unit:** Meter / Foot
- **Precision:** 0.01 m (1cm) para elevaciones

#### Slope
- **Format:**
  - **Percent** (5% = 5m de elevación por 100m horizontales)
  - **Ratio** (5:1 = 5 horizontal : 1 vertical)
  - **Degree** (5.71°)
- **Precision:** 0.01%

**Uso común:**
- Carreteras: Percent (%)
- Taludes: Ratio (H:V)

#### Grade
Similar a Slope, pero específicamente para perfiles longitudinales.

![Ambient Settings](../imagenes/leccion-2-ambient-settings.png)

---

## 4. Drawing Units Setup Assistant

Herramienta **automatizada** para configurar unidades correctamente.

**Activación:**
1. Ribbon: **Home tab** → **Create Ground Data panel** → dropdown "Points" → **Drawing Units Setup**

O bien:

Command: `SETUPUNITS`

### Wizard paso a paso:

**Página 1: Welcome**
- Explica el propósito del asistente
- Next

**Página 2: Drawing Units**
- **Imperial** (Feet/Inches) o **Metric** (Meters)
- Select: Metric
- Next

**Página 3: Scale Factor**
- Si importaste un drawing de AutoCAD en escala incorrecta, puede re-escalar
- Generalmente: **No scaling required**
- Next

**Página 4: Zone**
- Select coordinate system (UTM Zone 19N, WGS84, etc.)
- Next

**Página 5: Summary**
- Revisa todos los settings
- **Finish**

**Resultado:**
El wizard configura automáticamente:
- Drawing units
- Coordinate system
- Ambient settings con valores predeterminados apropiados

**Ventaja:** Configuración rápida y sin errores para usuarios nuevos.

**Limitación:** Menos control fino que configurar manualmente via Drawing Settings.

![Drawing Units Setup Wizard](../imagenes/leccion-2-units-wizard.png)

---

## 5. Data Shortcuts y File References (Conceptos)

### ¿Qué son Data Shortcuts?

**Data Shortcuts** permiten **compartir objetos** de Civil 3D entre múltiples drawings sin duplicar la geometría.

**Concepto:**
- Drawing "Master" contiene la superficie topográfica
- Drawing "Vialidad" crea un **shortcut** (referencia) a esa superficie
- Drawing "Redes" también referencia la misma superficie
- Si el topógrafo actualiza la superficie en "Master", todos los drawings se sincronizan

**Objetos que soportan Data Shortcuts:**
- Surfaces (superficies)
- Alignments (alineamientos)
- Profiles (perfiles)
- View Frame Groups (grupos de viewports)
- Pipe Networks (redes de tuberías - limitado)
- Corridors (corredores - limitado)

**Workflow colaborativo:**
1. **Setup:** Define un "Data Shortcuts folder" (carpeta compartida en red)
2. **Create shortcut:** En drawing maestro, publicas objetos al folder
3. **Reference:** Otros drawings importan shortcuts (referencias)
4. **Synchronize:** Cuando hay cambios, sincronizas

**Profundización:** Lección 4 de este módulo cubre Data Shortcuts en detalle con ejercicios prácticos.

### Xrefs vs Data Shortcuts

**Xrefs (External References):**
- Referencia a **geometry** (líneas, bloques, texto)
- No contiene datos de ingeniería
- Se actualiza automáticamente al abrir drawing

**Data Shortcuts:**
- Referencia a **objetos inteligentes de Civil 3D** (superficies, alineamientos)
- Contiene datos de ingeniería (elevaciones, estaciones)
- Requiere **sincronización manual** para actualizar

**Uso combinado:**
Proyectos grandes usan ambos - Xrefs para base CAD, Data Shortcuts para objetos Civil 3D.

![Data Shortcuts Workflow](../imagenes/leccion-2-data-shortcuts.png)

---

## 6. Best Practices - Configuración de Proyectos

### ✅ DO (Hacer):

1. **Usa templates corporativos** - Define un template de oficina con tus estándares
2. **Configura unidades ANTES de crear objetos** - Evita problemas de escala
3. **Define el coordinate system correcto desde el inicio** - Cambiarlo después causa desajustes
4. **Documenta el zone/datum utilizado** - Añade nota en layout indicando "UTM Zone 19N, WGS84"
5. **Establece precisión adecuada** - 1mm para topografía, 1cm para elevaciones
6. **Crea template personalizado** - Con los styles de tu empresa
7. **Usa Data Shortcuts** - Para proyectos colaborativos

### ❌ DON'T (No hacer):

1. **NO cambies unidades después de crear superficies/alineamientos** - Causa errores de escala
2. **NO mezcles metric e imperial** en un mismo proyecto - Confusion garantizada
3. **NO uses "None" como coordinate system** - Pierdes georreferenciación
4. **NO asumas el template por defecto es apropiado** - Puede estar en unidades incorrectas
5. **NO ignores los Ambient Settings** - Afectan cómo se muestran todas las etiquetas
6. **NO uses precisión excesiva** (0.000001m) - Innecesario y genera etiquetas largas

![Best Practices Checklist](../imagenes/leccion-2-best-practices.png)

---

## Ejercicio Práctico 2

**Objetivo:** Configurar un drawing de Civil 3D para un proyecto de carretera en tu región.

### Parte A: Crear Drawing desde Template

**Tareas:**

1. **Nuevo Drawing:**
   - Application Menu → New → Drawing
   - Template: `_AutoCAD Civil 3D (Metric) NCS.dwt`
   - Open

2. **Verificar Template:**
   - Toolspace → Settings Tab
   - Expand nombre del drawing
   - Expand "Surface" → Expand "Surface Styles"
   - Observa los styles disponibles (Border & Contours, Contours 1m and 5m, etc.)

3. **Save Drawing:**
   - Save As: `Proyecto_Carretera_[TuNombre].dwg`
   - Location: Carpeta de ejercicios

### Parte B: Configurar Drawing Settings

**Tareas:**

4. **Drawing Settings:**
   - Settings Tab → Click derecho en nombre del drawing → Edit Drawing Settings
   - **Units Tab:**
     - Drawing Units: **Meters**
     - Angular Units: **Degrees**
     - Direction: **North**
     - Rotation: **Counter-Clockwise**
   - Apply

5. **Zone Tab:**
   - Categories: **UTM**
   - Available coordinate systems: Buscar **tu zona UTM local**
     - **Ejemplo Venezuela:** UTM Zone 19N, WGS84
     - **Ejemplo México Central:** UTM Zone 13N, WGS84
     - **Ejemplo Chile Central:** UTM Zone 19S, WGS84
   - Select → OK

6. **Verificar Zone:**
   - Command: `MAPCSASSIGN`
   - Verifica que el coordinate system esté asignado correctamente
   - Close dialog

### Parte C: Ambient Settings

**Tareas:**

7. **Distance Settings:**
   - Settings Tab → Expand drawing name
   - Scroll down → **Ambient Settings** → Click derecho → **Edit**
   - **Distance:**
     - Unit: Meter
     - Format: Decimal
     - Precision: **0.001** (1mm)
     - Rounding: Standard
   - Apply

8. **Elevation Settings:**
   - **Elevation:**
     - Unit: Meter
     - Precision: **0.01** (1cm)
   - Apply

9. **Angle Settings:**
   - **Angle:**
     - Unit: Degree
     - Format: **DD.MMSS**
     - Precision: **1"** (1 segundo)
   - OK

### Parte D: Crear Template Personalizado

**Tareas:**

10. **Save as Template:**
    - File → Save As → **AutoCAD Drawing Template (.dwt)**
    - Name: `Proyecto_Carretera_[TuRegion].dwt`
    - Description: "Template para proyectos de carretera - UTM Zone [XX]N - Métrico"
    - Save location: Carpeta de templates personales
    - Save

11. **Probar Template:**
    - Close el drawing actual
    - New → Drawing
    - Browse → Select tu template personalizado
    - Verify que los settings estén configurados correctamente

**Entregable:**
- Screenshot de Drawing Settings mostrando Units y Zone configurados
- Template .dwt creado
- Drawing .dwg de prueba usando ese template

![Ejercicio 2 - Settings Configurados](../imagenes/leccion-2-ejercicio-settings.png)

---

## Evaluación

**Pregunta 1:** ¿Por qué es importante configurar las unidades y el sistema de coordenadas ANTES de crear objetos en Civil 3D?

**Pregunta 2:** ¿Cuál es la diferencia entre un Xref y un Data Shortcut?

**Pregunta 3:** Si tu proyecto está en Lima, Perú (longitud aproximada -77°), ¿qué zona UTM deberías usar?
Pista: Zona = INT((Longitud + 180) / 6) + 1

**Pregunta 4:** ¿Qué herramienta de Civil 3D te permite configurar unidades automáticamente mediante un wizard?

**Pregunta 5:** En Ambient Settings, ¿cuál es la precisión recomendada para elevaciones en proyectos de topografía métrica?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "Drawing Settings"
- Civil 3D 2026 - Coordinate Systems Guide

**Herramientas externas:**
- [UTM Zone Map](https://www.dmap.co.uk/utmworld.htm) - Mapa interactivo de zonas UTM
- [Coordinate System Picker](https://epsg.io/) - Búsqueda de sistemas de coordenadas

**Templates corporativos:**
- Consulta con tu empresa si tienen templates estandarizados

---

## Resumen

En esta lección aprendiste:

✅ Cómo crear drawings desde templates de Civil 3D (.dwt)
✅ Configurar Drawing Settings: Units (Meters/Feet), Zone (UTM, State Plane), Object Layers
✅ Establecer sistemas de coordenadas georreferenciados (UTM con WGS84)
✅ Configurar Ambient Settings (precisión de distancias, elevaciones, ángulos)
✅ Utilizar Drawing Units Setup Assistant para configuración automatizada
✅ Conceptos fundamentales de Data Shortcuts para trabajo colaborativo

**Próxima Lección:** Styles y Templates de Civil 3D (Object Styles, Label Styles, Table Styles)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 30 minutos configurando un proyecto real de tu región
