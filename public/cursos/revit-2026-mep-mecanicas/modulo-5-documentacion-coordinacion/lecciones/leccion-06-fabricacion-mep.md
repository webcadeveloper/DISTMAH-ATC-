# Lección 6: Fabricación MEP Fundamentals

## Introducción

La **fabricación MEP** (MEP Fabrication) representa la evolución del modelado BIM hacia la **construcción directa** mediante procesos CAM (Computer-Aided Manufacturing). En lugar de modelar ductos y tuberías genéricos, el **MEP Fabrication** permite modelar elementos con **especificaciones de fabricación reales**: materiales exactos, calibres de chapa, métodos de unión, soportes y hasta información de corte para máquinas CNC.

Revit 2026 integra **MEP Fabrication Parts** que pueden generar archivos de fabricación directamente para talleres (sheet metal shops), acelerando construcción y reduciendo errores de campo.

Esta lección cubre los fundamentos de MEP Fabrication: diferencias con elementos MEP estándar, configuración de servicios de fabricación, conversión de modelos, y preparación de entregables para fabricantes.

## MEP Design vs. MEP Fabrication

### Elementos MEP Estándar (Design Elements)

**Características:**

- **Propósito:** Diseño, análisis de ingeniería, cálculos
- **Geometría:** Simplificada, genérica
- **Detalles:** Centro-línea de ductos/tuberías, sin detalles de conexiones
- **Familias:** System Families (Ducts, Pipes, Fittings genéricos)
- **Output:** Planos de construcción, schedules

**Ejemplo - Ducto Rectangular Estándar:**
- Representación: Línea central + dimensiones (600x300)
- Material: "Galvanized Steel" (genérico)
- Conexión: NO especifica cómo se unen segmentos (TDC, flange, slip?)

### Elementos MEP Fabrication (Fabrication Parts)

**Características:**

- **Propósito:** Fabricación directa, detallado de taller, estimación precisa
- **Geometría:** LOD 400 - Detalle completo de uniones, soportes, accesorios
- **Detalles:** Calibre de chapa (22 GA, 20 GA), tipo de unión (TDC, flange), refuerzos
- **Familias:** Fabrication Parts (bibliotecas por fabricante: ej. SMACNA)
- **Output:** Archivos CAM para cortadoras CNC, estimaciones de materiales precisas

**Ejemplo - Ducto Rectangular Fabrication:**
- Representación: Geometría 3D completa con bridas, stiffeners
- Material: "22 GA Galvanized Steel ASTM A653"
- Calibre: 22 GA (0.76mm espesor)
- Conexión: TDC (Transverse Duct Connection) con flanges cada 2.4m
- Soportes: Trapeze hangers cada 3m
- **Genera:** Flat pattern para cortadora plasma CNC

![Comparación Design vs Fabrication](../imagenes/mod5-design-vs-fabrication.png)

## Componentes de MEP Fabrication

### 1. Fabrication Services

**Fabrication Services** son **bibliotecas de configuración** que definen:

- Estándares de fabricación (SMACNA, código local)
- Catálogos de partes disponibles por fabricante
- Especificaciones de materiales y calibres
- Métodos de conexión predeterminados
- Dimensiones estándar

**Servicios típicos:**

| Service Name | Región | Estándar |
|--------------|--------|----------|
| **US Imperial SMACNA** | USA | SMACNA HVAC Duct Construction Standards |
| **UK Metric DW144** | UK | DW/144 Specification for Sheet Metal Ductwork |
| **Australia AS4254** | Australia | AS4254 Ductwork for Air-Handling Systems |
| **Generic Metric** | Global | Configuración básica métrica |

**Ubicación de servicios:**
- Default: `C:\ProgramData\Autodesk\RVT 2026\Libraries\US\Fabrication\`
- Custom: Empresas crean servicios propios con especificaciones internas

### 2. Fabrication Parts

**Componentes 3D parametricos** que representan elementos fabricables:

**Categorías principales:**

- **Straight Ducts** - Ductos rectos con uniones detalladas
- **Elbows** - Codos con radius plates, gores (gajos)
- **Tees / Wyes** - Bifurcaciones con transiciones
- **Reducers** - Reducciones excéntricas/concéntricas
- **Hangers** - Soportes (trapeze, clevis, rod hangers)
- **Dampers** - Dampers de volumen, fire dampers
- **Fittings** - End caps, access panels

**Cada part incluye:**
- Geometría 3D completa (no solo centro-línea)
- Parámetros de fabricación (gauge, material, connectors)
- Información de costos (material, labor)
- Peso calculado
- Flat patterns (patrones de desarrollo para corte)

### 3. Fabrication Configuration

**Archivos de configuración** (`.xml`) que controlan comportamiento de fabrication parts:

- **Connectors:** Cómo se unen partes (flange bolt spacing, gasket type)
- **Insulation:** Tipos, espesores, chaquetas
- **Ancillaries:** Accesorios estándar (turning vanes, access doors)
- **Materials:** Catálogo de materiales disponibles
- **Specifications:** Reglas de diseño (max duct length antes de support, min radius)

## Configurar Fabrication en Revit 2026

### Cargar Fabrication Service

**Paso 1: Abrir Fabrication Settings**

1. **Manage** → **MEP Settings** → **Fabrication Settings**

**Paso 2: Seleccionar Service**

**Fabrication Settings** dialog:

1. **Service Name:** Click **Browse...**
2. Navegar a carpeta de servicios:
   - `C:\ProgramData\Autodesk\RVT 2026\Libraries\US\Fabrication\US Imperial SMACNA.xml`
3. Click **Open**

**Paso 3: Configurar Opciones**

En **Fabrication Settings:**

- **Units:** Imperial o Metric (según región)
- **Database:** Path a base de datos de partes
  - Default: `C:\ProgramData\Autodesk\Fabrication 2026\`
- **Hangers/Supports:**
  - ☑ **Automatically add hangers** (agregar soportes automáticamente)
  - Support spacing: `3000 mm` (para ductos rectangulares)

**Paso 4: Aplicar y Cerrar**

Click **OK** → Fabrication service cargado en proyecto.

### Verificar Service Activo

**View** → **Properties** → **Fabrication Service:** Debe mostrar `US Imperial SMACNA` (o service seleccionado).

## Modelar con Fabrication Parts

### Insertar Fabrication Duct

**Método 1: Directamente con Fabrication Parts**

**Paso 1: Activar Herramienta**

1. **Systems** → **HVAC** → **Fabrication Duct**
   (Similar a **Duct** estándar, pero para fabrication)

**Paso 2: Configurar Propiedades**

En **Properties** palette:

- **Service:** `US Imperial SMACNA`
- **Specification:** `Rectangular Duct - TDC`
- **Size:** `24" x 12"` (600mm x 300mm)
- **Material:** `Galvanized Steel`
- **Gauge:** `22 GA` (0.0299")

**Paso 3: Dibujar Ducto**

1. Click para punto inicial
2. Click para punto final
3. Fabrication duct aparece con **geometría detallada** (bridas, refuerzos visibles en 3D)

**Diferencia visual:**
- Duct estándar: Línea simple con outline
- Fabrication duct: Geometría 3D completa con flanges, stiffeners

![Fabrication Duct 3D](../imagenes/mod5-fabrication-duct-3d.png)

### Insertar Fabrication Fitting

**Paso 1: Activar Herramienta**

1. **Systems** → **HVAC** → **Fabrication Fitting**

**Paso 2: Seleccionar Tipo**

En **Type Selector:**

- **90° Elbow - 5-Gore** (codo con 5 gajos para radius largo)
- **Tee - Straight Through** (tee simétrica)
- **Reducer - Concentric** (reducción concéntrica)

**Paso 3: Colocar en Ducto**

1. Click en **punto de inserción** sobre ducto existente
2. Fitting se auto-conecta y auto-dimensiona según ducto
3. Revit crea **connectors** automáticamente entre ducto y fitting

**Parámetros editables:**

- **Throat Radius:** Radio de garganta del codo (2x, 3x diameter)
- **Number of Gores:** Gajos del codo (5 gores = más suave, 3 gores = más económico)
- **Flange Type:** Slip-on, welding neck, blind

## Convertir Design Elements a Fabrication Parts

**Escenario común:**

Proyecto diseñado con **ductos estándar** (generic ducts). Cliente solicita modelo de fabricación para licitación.

**Solución:** Convertir elementos design → fabrication.

### Procedimiento de Conversión

**Paso 1: Seleccionar Elementos**

En vista 3D o plano:
1. **Filter** → **Ducts** → Select All Instances
2. Todos los ductos design seleccionados

**Paso 2: Convertir a Fabrication**

1. **Modify | Ducts** → **Convert to Fabrication** (ribbon)
2. **Convert to Fabrication Parts** dialog aparece

**Paso 3: Configurar Mapping**

**Mapping:** Cómo convertir sizes estándar → fabrication sizes.

**Example mapping:**

| Design Duct Size | Fabrication Part | Material | Gauge |
|------------------|------------------|----------|-------|
| 600x300 mm | Rectangular Duct 24"x12" | Galv. Steel | 22 GA |
| Ø250 mm | Round Duct 10" | Galv. Steel | 24 GA |
| Ø500 mm | Round Spiral Duct 20" | Galv. Steel | 20 GA |

**Configurar:**
1. En **Service:** `US Imperial SMACNA`
2. **Specification:** `Rectangular Duct - TDC`
3. **Default Gauge for Rectangular:** `22 GA`
4. **Default Gauge for Round:** `24 GA`

**Paso 4: Ejecutar Conversión**

1. Click **OK**
2. Revit convierte elementos (5-30 segundos según cantidad)

**Resultado:**
- Design ducts desaparecen
- Fabrication parts aparecen en misma ubicación
- Connections preservadas
- **Advertencia:** Revisar conexiones complejas manualmente (pueden requerir ajuste)

**Paso 5: Verificar Conversión**

1. **View** → **3D View** con **Detail Level: Fine**
2. Zoom in en connections
3. Verificar que flanges, TDC connectors aparecen correctamente

### Ajustes Post-Conversión

**Problemas comunes:**

**1. Gauge Incorrecto**

Ducto grande (900x600) convertido a 22 GA (debería ser 20 GA según SMACNA).

**Solución:**
1. Seleccionar ducto
2. **Properties** → **Gauge:** `20 GA`
3. Revit recalcula peso y espesor automáticamente

**2. Connector Type Inadecuado**

Tee principal usa slip connection (debería usar flange).

**Solución:**
1. Seleccionar tee fabrication part
2. **Properties** → **Connection Type:** `Flanged`
3. Flanges aparecen en tee

**3. Missing Supports**

Ductos largos sin hangers.

**Solución:**
1. **Systems** → **Generate Fabrication** → **Add Hanger**
2. Seleccionar ductos
3. Revit agrega trapeze hangers cada 3m automáticamente

## Soportes (Hangers) de Fabricación

### Tipos de Hangers

**Hangers comunes en HVAC:**

| Tipo | Uso | Carga Típica |
|------|-----|--------------|
| **Trapeze Hanger** | Ductos rectangulares grandes | 500-2000 kg |
| **Clevis Hanger** | Ductos redondos pequeños | 50-200 kg |
| **Rod Hanger** | Soporte simple vertical | 100-500 kg |
| **Riser Clamp** | Ductos verticales | 200-1000 kg |
| **Spring Isolator** | Equipos con vibración | Variable |

### Agregar Hangers Automáticamente

**Paso 1: Seleccionar Ductos**

Seleccionar ductos horizontales que requieren soporte.

**Paso 2: Generar Hangers**

1. **Systems** → **Generate Fabrication** → **Add Hanger**
2. **Add Hanger** dialog:
   - **Hanger Type:** `Trapeze Hanger`
   - **Spacing:** `3000 mm` (según SMACNA max 10 ft / 3m)
   - **Rod Size:** `3/8"` (M10)
   - **Offset from Ceiling:** `600 mm`
3. Click **OK**

**Resultado:**
Trapeze hangers aparecen cada 3m a lo largo de ductos.

![Fabrication Hangers](../imagenes/mod5-fabrication-hangers.png)

### Editar Hanger Location

**Mover hanger manualmente:**

1. Seleccionar hanger
2. **Modify | Fabrication Parts** → **Move**
3. Mover a ubicación deseada (ej. alinear con viga estructural)

**Cambiar tipo de hanger:**

1. Seleccionar hanger
2. **Type Selector:** Cambiar a `Clevis Hanger` (si ducto es redondo pequeño)

## Estimación de Materiales

### Schedule de Fabrication Parts

**Crear schedule para estimación:**

**Paso 1: Crear Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. Category: **Fabrication Ductwork**
3. Name: `Fabrication Duct Takeoff`

**Paso 2: Agregar Campos**

**Fields relevantes:**

- **Item Number** - Identificador de part
- **Service** - Service de fabricación
- **Size** - Dimensiones
- **Length** (para ductos rectos)
- **Material** - Material base
- **Gauge** - Calibre de chapa
- **Weight** - Peso calculado (kg o lb)
- **Area** - Área de chapa (m² o ft²)
- **Unit Price** - Costo unitario
- **Total Cost** - Costo total calculado

**Paso 3: Configurar Totales**

En **Sorting/Grouping:**

- **Sort by:** `Material`
- **Then by:** `Size`
- ☑ **Itemize every instance**
- ☑ **Grand totals** (totales generales)

En **Formatting:**

- Field: **Weight** → ☑ **Calculate totals**
- Field: **Total Cost** → ☑ **Calculate totals**

**Resultado:**

Schedule muestra:
- Cada ducto fabrication con peso individual
- **Total weight:** 2,450 kg (para estimación de transporte)
- **Total material cost:** $12,350 USD (para presupuesto)

### Exportar a Estimación

**Paso 1: Exportar Schedule**

1. **File** → **Export** → **Reports** → **Schedule**
2. Format: **Tab delimited**
3. Save as: `Fabrication_Takeoff_2024-11-23.txt`

**Paso 2: Abrir en Excel**

1. Excel → **Data** → **From Text/CSV**
2. Seleccionar archivo `.txt`
3. Crear tabla pivot:
   - Rows: **Material**, **Gauge**
   - Values: **Sum of Weight**, **Sum of Total Cost**

**Resultado:**

| Material | Gauge | Total Weight (kg) | Total Cost (USD) |
|----------|-------|-------------------|------------------|
| Galvanized Steel | 22 GA | 1,850 | $8,200 |
| Galvanized Steel | 20 GA | 600 | $4,150 |
| **Grand Total** | | **2,450** | **$12,350** |

## Archivos de Fabricación (CAM Output)

### Generar Flat Patterns

**Flat patterns** (patrones de desarrollo) son **plantillas 2D** para corte en cortadora CNC.

**Paso 1: Seleccionar Fabrication Part**

Seleccionar ducto rectangular fabrication.

**Paso 2: Exportar Flat Pattern**

1. **Modify | Fabrication Parts** → **Export Flat Pattern**
2. **Export Flat Pattern** dialog:
   - Format: **DXF** (AutoCAD compatible)
   - Scale: **1:1** (escala real)
   - ☑ **Include bend lines** (líneas de doblez)
   - ☑ **Include labels** (etiquetas de part number)
3. Save as: `Duct_24x12_Section_A.dxf`

**Resultado:**

Archivo DXF con:
- Outline de chapa a cortar
- Líneas de doblez (bend lines)
- Perforaciones para tornillos (si aplica)
- Part number para identificación

**Taller de fabricación:**
1. Importa DXF a cortadora plasma/láser CNC
2. Máquina corta chapa según patrón
3. Operario dobla en líneas de bend
4. Ensambla parte final

![Flat Pattern DXF](../imagenes/mod5-flat-pattern-dxf.png)

### Exportar Batch de Patterns

**Para proyecto completo:**

1. **Modify | Fabrication Parts** → **Export All Flat Patterns**
2. Seleccionar carpeta destino
3. Revit genera archivos DXF para **todos** los fabrication parts del proyecto
4. Nomenclatura automática: `Part_001.dxf`, `Part_002.dxf`, etc.

**Entregar a fabricante:**
Carpeta completa con DXFs + schedule de partes.

## Mejores Prácticas de Fabricación

### 1. LOD (Level of Development)

**Definir LOD por fase:**

| Fase | LOD | Elementos |
|------|-----|-----------|
| Schematic Design | 200 | Design elements (generic ducts) |
| Design Development | 300 | Design elements con sizing correcto |
| Construction Documents | 350 | Design elements detallados |
| **Fabrication** | **400** | **Fabrication parts completos** |

**Convertir a fabrication solo cuando:**
- Diseño 100% aprobado
- Sizes finalizados
- Routing confirmado

**Razón:** Cambios en fabrication parts son más laboriosos que en design elements.

### 2. Coordinación con Fabricante

**Flujo de trabajo recomendado:**

1. **Diseño:** MEP diseña con design elements
2. **Coordinación:** Ejecuta clash detection, resuelve interferencias
3. **Pre-Fabrication Meeting:**
   - Compartir modelo design con fabricante
   - Fabricante revisa constructibilidad
   - Feedback sobre sizes estándar disponibles
4. **Conversión:** MEP convierte a fabrication parts según feedback
5. **Revisión final:** Fabricante aprueba modelo fabrication
6. **Entrega:** MEP entrega:
   - Modelo Revit con fabrication parts
   - Flat patterns (DXF)
   - Schedules de materiales
   - Coordination drawings

### 3. Naming y Numbering

**Asignar Item Numbers únicos:**

1. Seleccionar fabrication part
2. **Properties** → **Item Number:** `DUCT-001`
3. Continuar secuencia: `DUCT-002`, `DUCT-003`...

**Usar prefijos por sistema:**
- `SA-` = Supply Air
- `RA-` = Return Air
- `EA-` = Exhaust Air

**Ejemplo:** `SA-DUCT-045` = Supply Air Duct #45

**Beneficio:**
- Trazabilidad en taller (cada parte identificada)
- Coordinación con installation drawings
- Facilita troubleshooting en obra

### 4. Verificación Final

**Checklist antes de entregar modelo fabrication:**

- ☐ Todos los ductos convertidos a fabrication parts
- ☐ Gauges correctos según SMACNA (verificar ductos grandes)
- ☐ Connections especificados (TDC, flange, slip)
- ☐ Hangers agregados con spacing correcto
- ☐ Item numbers asignados a todos los parts
- ☐ Schedule de materiales generado y revisado
- ☐ Flat patterns exportados y verificados
- ☐ Clash detection ejecutado (sin clashes críticos)

## Revit 2026: Mejoras en Fabrication

**Nuevas funcionalidades:**

1. **Automated Gauge Assignment** - Revit asigna gauge automáticamente según size y SMACNA tables
2. **Enhanced Flat Pattern Export** - Soporte para formatos adicionales (STEP, IGES)
3. **Fabrication Cost Estimating** - Integración con bases de datos de costos (RSMeans)
4. **Cloud Collaboration for Fabrication** - Sincronización de fabrication models en BIM 360 con taller

## Ejercicio Aplicado

**Ver:** Ejercicio 6 en `ejercicios.md` - Convertir sistema HVAC completo a fabrication parts, configurar gauges, agregar hangers y generar flat patterns.

---

## Conclusión del Módulo 5

Este módulo completó las habilidades de **documentación y coordinación MEP profesional**:

1. ✅ Tablas de equipos personalizadas con parámetros compartidos
2. ✅ Etiquetado masivo eficiente de sistemas MEP
3. ✅ Coordinación multidisciplinaria con Copy/Monitor
4. ✅ Coordination Models 2026 para gestión de proyectos complejos
5. ✅ Clash Detection sistemático con resolución documentada
6. ✅ Preparación de modelos para fabricación directa

**¡Curso MEP Mecánicas completado al 100%!**

---

**DISTMAH Universidad Autodesk - Revit MEP 2026 Mecánicas**
