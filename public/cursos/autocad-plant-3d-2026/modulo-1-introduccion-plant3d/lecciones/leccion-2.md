# Lección 2: Configuración de Plant Project y Plant Settings

## Información de la Lección

- **Módulo:** 1 - Introducción a AutoCAD Plant 3D 2026
- **Lección:** 2 de 5
- **Duración:** 60 minutos
- **Nivel:** Avanzado

## Objetivos de Aprendizaje

Al completar esta lección, usted será capaz de:

✅ Crear proyectos Plant 3D desde cero con configuración profesional
✅ Configurar Plant Settings para diferentes tipos de plantas industriales
✅ Gestionar rutas de proyecto y estructura de directorios
✅ Establecer unidades de medida según estándares ASME o ISO
✅ Configurar sistemas de coordenadas y puntos de referencia

## Introducción

La configuración correcta de un proyecto Plant 3D es el fundamento sobre el cual se construye todo el diseño de la planta industrial. Un proyecto mal configurado puede resultar en incompatibilidades de unidades, problemas de sincronización entre P&ID y 3D, dificultades en la generación de isométricos y errores costosos en documentación de construcción.

En la industria, los proyectos de plantas pueden extenderse durante meses o años, involucrar decenas de disciplinas (proceso, mecánico, civil, eléctrico, instrumentación) y generar miles de documentos técnicos. Una configuración de proyecto sólida asegura consistencia, trazabilidad y cumplimiento de estándares industriales como ASME B31.3, API 650 e ISO 15926.

AutoCAD Plant 3D 2026 introduce mejoras significativas en el asistente de creación de proyectos (Project Setup Wizard), validación automática de configuraciones y plantillas predefinidas para diferentes tipos de industrias (petroquímica, energía, farmacéutica, alimentos y bebidas), reduciendo el tiempo de configuración inicial hasta en un 40%.

Esta lección le guiará a través del proceso completo de creación y configuración de proyectos profesionales, estableciendo las bases para el éxito de su diseño de planta industrial.

## 1. Creación de Nuevo Proyecto Plant 3D

### 1.1 Métodos de Creación de Proyecto

AutoCAD Plant 3D 2026 ofrece tres métodos para crear proyectos:

**Método 1: Project Setup Wizard (Recomendado para nuevos proyectos)**
- Asistente paso a paso
- Configuración guiada de todas las opciones
- Validación automática de configuraciones
- Plantillas predefinidas por industria

**Método 2: Copy Existing Project (Recomendado para proyectos similares)**
- Copia estructura de proyecto existente
- Hereda configuraciones, especificaciones y estándares
- Ahorra tiempo en proyectos recurrentes

**Método 3: Manual Creation (Para usuarios avanzados)**
- Control total sobre cada aspecto
- Requiere conocimiento profundo de estructura de archivos
- Usado para configuraciones personalizadas específicas

### 1.2 Uso del Project Setup Wizard

**Paso 1: Iniciar el Wizard**

Desde la pantalla de inicio de Plant 3D:
- Click en "New Project"
- O desde ribbon: Home (Plant) > Project > New Project

![Project Setup Wizard inicio](../imagenes/leccion-2-wizard-inicio.png)

**Paso 2: Project Information**

Complete la información básica del proyecto:

- **Project Name:** Nombre único identificativo
  - Ejemplo: "PetroPlant_EthyleneUnit_2026"
  - Evite espacios, use guiones bajos
  - Máximo 64 caracteres

- **Project Number:** Código de proyecto
  - Ejemplo: "PP-2026-001"
  - Siga estándares de su organización

- **Project Description:** Descripción detallada
  - Ejemplo: "Ethylene Cracking Unit - 150,000 MTPA Capacity"
  - Incluya capacidad, ubicación, fase

- **Client:** Cliente del proyecto
  - Ejemplo: "ABC Petrochemicals Inc."

- **Location:** Ubicación física
  - Ejemplo: "Houston, TX, USA"
  - Importante para códigos de construcción locales

**Paso 3: Project Template**

Seleccione plantilla según tipo de industria:

- **Petrochemical:** Refinación, crackers, aromáticos
  - Incluye specs para hidrocarburos
  - Ratings típicos: 150#, 300#, 600#, 900#
  - Materiales: CS, SS304/316, Alloy

- **Power Generation:** Plantas térmicas, cogeneración
  - Specs para vapor HP, MP, LP
  - Ratings hasta 2500#
  - Materiales resistentes a alta temperatura

- **Pharmaceutical:** Plantas farmacéuticas, biotecnología
  - Enfoque en materiales sanitarios
  - SS316L electropolished
  - Cumplimiento FDA, cGMP

- **Food & Beverage:** Procesamiento de alimentos
  - Materiales grado alimenticio
  - Diseño higiénico
  - Cumplimiento USDA, 3A

- **Water Treatment:** Plantas de tratamiento
  - Materiales resistentes a corrosión
  - PVC, FRP, SS316
  - Cumplimiento EPA

- **Generic Industrial:** Plantilla básica personalizable

**Paso 4: Units of Measurement**

Configure sistema de unidades:

**Sistema Imperial (US):**
- Length: Inches, Feet
- Pressure: PSI, PSIG
- Temperature: °F
- Flow: GPM (líquidos), SCFM (gases)
- Weight: Pounds (lb)
- Común en: EE.UU., algunos proyectos de Medio Oriente

**Sistema Métrico (SI/ISO):**
- Length: Millimeters, Meters
- Pressure: Bar, kPa, MPa
- Temperature: °C
- Flow: m³/h, kg/h
- Weight: Kilograms (kg)
- Común en: Europa, Asia, Latinoamérica

**Sistema Mixto:**
- Pipe sizes: Nominal Pipe Size (NPS) en pulgadas (universal)
- Dimensiones: Métrico
- Presiones: Bar o kPa
- Común en proyectos internacionales

⚠️ **Advertencia Crítica:** La selección de unidades NO puede cambiarse después de crear componentes en el proyecto. Verifique requisitos del cliente y códigos locales antes de proceder.

**Paso 5: Project Location**

Defina ubicación en disco del proyecto:

- **Primary Location:** Ubicación principal
  - Ejemplo: "C:\PlantProjects\PetroPlant_Ethylene_2026\"
  - Use SSD para mejor rendimiento
  - Evite rutas de red UNC para proyecto activo

- **Backup Location:** Ubicación de backups automáticos
  - Ejemplo: "D:\Backups\PlantProjects\"
  - Puede ser disco secundario o NAS

- **Shared Resources:** Ubicación de recursos compartidos
  - Specs compartidas entre proyectos
  - Catálogos de componentes corporativos
  - Símbolos P&ID estandarizados

![Project location configuration](../imagenes/leccion-2-project-location.png)

**Paso 6: Drawing Organization**

Configure estructura de carpetas de drawings:

**Por Área de Planta (Recomendado para plantas grandes):**
```
3D\
├── Area-100-Feed-Preparation\
├── Area-200-Reactor-Section\
├── Area-300-Separation\
├── Area-400-Compression\
└── Area-500-Utilities\
```

**Por Disciplina (Recomendado para plantas pequeñas):**
```
3D\
├── Process\
├── Utilities\
├── Structural\
└── Civil\
```

**Por Elevación (Recomendado para plantas verticales):**
```
3D\
├── Level-000-Ground\
├── Level-100-First-Platform\
├── Level-200-Second-Platform\
└── Level-300-Roof\
```

**Paso 7: Review and Create**

Revise resumen de configuración:
- Verifique nombre, ubicación y unidades
- Confirme plantilla seleccionada
- Click "Create Project"

El wizard crea:
- Estructura de directorios
- Archivo de proyecto XML
- Base de datos SQLite inicial
- Configuraciones por defecto
- Specs según plantilla seleccionada

Tiempo estimado: 30-60 segundos para proyectos nuevos.

### 1.3 Verificación de Proyecto Creado

Después de la creación, verifique:

**En Project Manager:**
- Proyecto aparece en lista de proyectos
- Carpetas P&ID, 3D, Iso, Sheets creadas
- No hay errores o advertencias

**En File System:**
- Directorio principal creado
- Subcarpetas creadas correctamente
- AcadPlant.mdb existe y es accesible
- ProjectName.xml existe

**En Plant Settings:**
- Unidades configuradas correctamente
- Plantilla aplicada correctamente

![Proyecto creado exitosamente](../imagenes/leccion-2-proyecto-creado.png)

## 2. Plant Settings - Configuración Detallada

### 2.1 Acceso a Plant Settings

Acceso: Home (Plant) Tab > Settings > Plant Settings

La ventana Plant Settings contiene múltiples secciones:

```
Plant Settings
├── General
├── Units
├── Display
├── Drawing
├── P&ID
├── Piping
├── Equipment
├── Structure
├── Isometric
└── Reports
```

### 2.2 General Settings

**Project Information:**
- Project Name (editable)
- Project Number
- Client
- Location
- Revision

**Database Settings:**
- Database Type: SQLite (estándar)
- Database Location: ruta a AcadPlant.mdb
- Database Backup: configuración de backups automáticos

**Multi-User Settings:**
- Enable Multi-User: ON/OFF
- File Locking: Automático
- Sync Interval: 5-15 minutos

**Logging:**
- Error Logging: ON (recomendado)
- Log Level: Warning, Error, Info
- Log File Location

![General Settings](../imagenes/leccion-2-general-settings.png)

### 2.3 Units Settings

Configuración detallada de unidades:

**Linear Units:**
- Drawing Units: Millimeters o Inches
- Precision: 0, 0.0, 0.00, 0.000
- Display Format: Decimal, Fractional

**Angular Units:**
- Degrees, Radians, Grads
- Precision: 0.01° recomendado

**Pressure Units:**
- PSI, PSIG, Bar, kPa, MPa
- Rating Display: ANSI (150#, 300#) o PN (PN16, PN40)

**Temperature Units:**
- Fahrenheit (°F)
- Celsius (°C)
- Kelvin (K)

**Flow Units:**
- Volumetric: GPM, m³/h, L/min
- Mass: lb/h, kg/h, ton/h

**Pipe Sizing:**
- Nominal Pipe Size (NPS): 1/2", 1", 2", 4", 6", 8", 12", etc.
- DN (Diameter Nominal): DN15, DN25, DN50, DN100, DN150, etc.
- Display preference

### 2.4 Display Settings

Configuración de visualización de componentes:

**Component Display:**
- **Simplified:** Geometría básica (mejor rendimiento)
- **Detailed:** Geometría completa (mejor visualización)
- **LOD (Level of Detail):** Automático según zoom

**Line Display:**
- Line Width: Por spec, por rating, uniforme
- Line Color: Por spec, por service, por material
- Center Lines: ON/OFF para tuberías

**Text Display:**
- Tag Display: Always, On hover, Never
- Tag Size: 2.5mm, 3mm, 4mm
- Font: Arial, Romans, Isocpeur

**Symbol Scale:**
- P&ID Symbol Scale: 1:50, 1:100, 1:200
- 3D Symbol Scale: 1:1 (real size)

**Performance:**
- Max Components Before Simplification: 1000, 5000, 10000
- Automatic Regeneration: ON/OFF

![Display Settings](../imagenes/leccion-2-display-settings.png)

### 2.5 Drawing Settings

**Drawing Template:**
- Default P&ID Template: ruta a .dwt
- Default 3D Template: ruta a .dwt
- Default Iso Template: ruta a .dwt

**Layer Standards:**
- Layer Naming: AIA, BS1192, ISO 13567, Custom
- Layer Creation: Automatic, Manual
- Layer Color Scheme: ByLayer, ByBlock, ByEntity

**Title Blocks:**
- Title Block Template: ruta a bloque
- Auto-populate: Project info, Date, User
- Revision Control: ON/OFF

### 2.6 P&ID Settings

**Symbol Library:**
- Default Symbol Library: ruta a biblioteca
- Custom Symbols: rutas adicionales

**Line Groups:**
- Default Line Weight: 0.5mm, 0.7mm, 1mm
- Line Type: Continuous, Dashed
- Service Colors: Steam=Red, Water=Blue, etc.

**Tagging:**
- Tag Format: P-101, V-205, E-301
- Auto-increment: ON/OFF
- Prefix Rules: Por tipo de equipo

**Validation:**
- Real-time Validation: ON/OFF
- Error Highlighting: Color, Linetype
- Validation Rules: Custom rules

### 2.7 Piping Settings

**Routing:**
- Ortho Mode: ON/OFF (recomendado ON)
- Snap Angle: 90°, 45°, Custom
- Auto-routing: AI-assisted (nuevo en 2026)

**Fittings:**
- Auto-insert Fittings: ON/OFF
- Fitting Selection: Optimal, User-defined
- Elbow Radius: 1.5D, 3D, 5D

**Spec Assignment:**
- Default Spec: Primary spec
- Spec Override: Allow, Restrict

**Slope:**
- Default Slope: 1:100, 1:200
- Slope Direction: Auto, Manual
- Drainage: High point, Low point

### 2.8 Equipment Settings

**Nozzle Defaults:**
- Nozzle Size: Match connected line
- Nozzle Rating: Match spec
- Nozzle Orientation: Horizontal, Vertical, Radial

**Equipment Modeling:**
- Parametric Mode: ON/OFF
- Detail Level: Simplified, Detailed, As-built

**Custom Equipment:**
- Template Location: ruta a templates
- Property Mapping: Custom fields

### 2.9 Isometric Settings

**Generation:**
- Auto-generate: ON/OFF
- Generation Trigger: On save, Manual
- Split Method: By spec, By size, Manual

**Style:**
- Default Iso Style: ISO-Standard, Client-Specific
- Sheet Size: A4, A3, A2, A1, A0
- Scale: 1:50, 1:100, NTS (Not To Scale)

**BOM:**
- BOM Format: Table, List
- Sort By: Line number, Tag, Material
- Include: Fittings, Valves, Flanges, Bolts

### 2.10 Reports Settings

**Default Reports:**
- Equipment List
- Valve List
- Line List
- Material Take-off (MTO)

**Report Format:**
- Excel (.xlsx)
- CSV (.csv)
- PDF (.pdf)

**Custom Reports:**
- Template Location: ruta a templates
- Query Builder: Visual query builder

## 3. Configuración de Coordenadas y Referencias

### 3.1 Coordinate System Setup

En proyectos de plantas industriales, el sistema de coordenadas es crítico para:
- Integración con topografía civil
- Compatibilidad con otros softwares (PDMS, PDS, SmartPlant)
- Alineación con grid estructural

**User Coordinate System (UCS):**

Definir origen del proyecto:
- Comando: UCS
- Origin: X=0, Y=0, Z=0
- Alignment: North, Grid North, True North

**Project Base Point:**

Establecer punto base del proyecto:
- Coordenadas del mundo real (UTM, Lat/Long)
- Elevación sobre nivel del mar
- Zona horaria (para análisis de soleamiento)

**Grid System:**

Configurar grid estructural:
- Grid Lines: A, B, C... (transversal), 1, 2, 3... (longitudinal)
- Grid Spacing: 6m, 7.5m, 10m (típico)
- Grid Origin: Coincide con UCS origin

![Coordinate system configuration](../imagenes/leccion-2-coordinate-system.png)

### 3.2 Elevation Referencias

**Ground Level (Grade):**
- Elevation 0.000 o 100.000 (relativo)
- Referencia para todas las elevaciones

**Platform Levels:**
- Level 100 = +3.500m (primera plataforma)
- Level 200 = +7.000m (segunda plataforma)
- Level 300 = +10.500m (techo)

**Below Grade:**
- Level -100 = -3.000m (sótano/subsuelo)
- Para sumps, fundaciones, piping enterrado

### 3.3 Reference Drawings

Configurar dibujos de referencia (Xrefs):

**Civil Drawings:**
- Plot Plan
- Grading Plan
- Utilities Plan

**Structural Drawings:**
- Foundation Plan
- Steel Framing
- Platform Plans

**Attachment Mode:**
- Overlay: Recomendado (evita referencias anidadas)
- Attach: Solo para references permanentes

## 4. Templates y Estándares

### 4.1 Drawing Templates (.dwt)

Crear templates personalizados:

**P&ID Template:**
- Sheet size: A1, A0
- Title block con campos automáticos
- Símbolos library preloaded
- Layers predefinidos
- Text styles (ISO, ANSI)

**3D Model Template:**
- UCS configurado
- Grid reference
- Viewports: Plan, elevations
- Layers para disciplinas

**Isometric Template:**
- Sheet size por estándar cliente
- Title block con BOM
- North arrow
- Scale indicator

### 4.2 Layer Standards

Configurar layers según estándares:

**ISO 13567 (International):**
```
P-EQP-PUMPS (Process-Equipment-Pumps)
P-PIP-MLIN (Process-Piping-Main Lines)
S-STL-FRAM (Structure-Steel-Framing)
```

**AIA CAD Layer Guidelines (US):**
```
M-PIPING (Mechanical-Piping)
M-EQUIP (Mechanical-Equipment)
S-COLS (Structural-Columns)
```

**Custom Standards:**
Según requerimientos del cliente o corporativos

### 4.3 Specification Templates

Las especificaciones de tuberías (Pipe Specs) se configuran en Spec Editor (ver Lección 3), pero deben estar alineadas con:

- ASME B31.3 (Process Piping)
- ASME B31.1 (Power Piping)
- Client Standards
- Material Selection Diagrams (MSD)

## 5. Migración y Compatibilidad

### 5.1 Upgrading from Previous Versions

Para migrar proyectos de Plant 3D 2024/2025 a 2026:

**Método automático:**
1. Open Project en Plant 3D 2026
2. Sistema detecta versión anterior
3. Wizard de upgrade automático
4. Backup automático de proyecto original
5. Conversión de database

**Verificación post-upgrade:**
- Verificar especificaciones convertidas
- Revisar custom properties
- Comprobar símbolos P&ID
- Regenerar isométricos sample

### 5.2 Interoperability

Plant 3D 2026 puede intercambiar datos con:

**Autodesk Products:**
- AutoCAD: Dibujos 2D/3D
- Revit: Vía IFC export
- Navisworks: Modelos 3D para revisión
- Vault: Gestión documental

**Third-Party:**
- AVEVA PDMS/E3D: Vía ISO 15926
- Intergraph SmartPlant: Neutral files
- Bentley OpenPlant: PCF files

**Standard Formats:**
- DWG, DXF, DGN
- IFC 2x3, IFC 4
- PCF (Piping Component File)
- ISO 15926 XML

## 6. Best Practices de Configuración

### 6.1 Naming Conventions

Establecer convenciones de nombres consistentes:

**Projects:**
- Format: ClientName_PlantType_Year
- Ejemplo: "ShellChem_EthyleneUnit_2026"

**Drawings:**
- Format: Type-Area-Number-Revision
- Ejemplo: "P&ID-Area100-Sheet01-Rev0"

**Components:**
- Tag format según ISA S5.1
- Ejemplos: P-101 (Pump), V-205 (Valve), E-301 (Exchanger)

### 6.2 Backup Strategy

Implementar estrategia robusta de backups:

**Automatic Backups:**
- Plant 3D auto-save: Cada 10 minutos
- Project backup: Diario automático
- Database backup: Cada cambio significativo

**Manual Backups:**
- Antes de cambios mayores en specs
- Antes de upgrade de versión
- Antes de purge de database

**Backup Retention:**
- Daily backups: 7 días
- Weekly backups: 4 semanas
- Monthly backups: 12 meses
- Milestone backups: Permanente

### 6.3 Performance Optimization

Para proyectos grandes (1000+ drawings):

**Hardware:**
- SSD para database y drawings activos
- 32 GB RAM mínimo
- GPU profesional (NVIDIA Quadro P2000+)

**Software:**
- Split project por áreas
- Use Xrefs en lugar de copias
- Purge database periódicamente
- Index database regularmente

**Workflow:**
- Trabajar en copia local, sincronizar a servidor
- Evitar abrir múltiples drawings simultáneamente
- Usar Display Configurations para simplificar vistas

## Ejercicio Práctico

### Ejercicio 2: Creación y Configuración de Proyecto Completo

**Objetivo:** Crear un proyecto Plant 3D profesional con todas las configuraciones necesarias para una planta petroquímica.

**Escenario:** Usted es el Lead Designer de un proyecto de planta de procesamiento de gas natural con capacidad de 50 MMSCFD (Million Standard Cubic Feet per Day). El cliente requiere diseño según estándares ASME y el proyecto se ejecutará en sistema métrico.

**Instrucciones:**

1. **Crear Nuevo Proyecto usando Wizard:**
   - Project Name: "GasPlant_Processing_2026"
   - Project Number: "GP-2026-001"
   - Description: "Natural Gas Processing Plant - 50 MMSCFD"
   - Client: "Energy Corp International"
   - Location: "Alberta, Canada"
   - Template: Petrochemical
   - Units: Métrico (SI)
   - Location: C:\PlantProjects\GasPlant_Processing_2026\

2. **Configurar Plant Settings - General:**
   - Enable Multi-User: ON
   - Error Logging: ON, Level: Warning
   - Database Backup: Automatic, Daily

3. **Configurar Plant Settings - Units:**
   - Linear: Millimeters, Precision 0.0
   - Pressure: Bar, 2 decimals
   - Temperature: °C
   - Pipe Sizing: NPS display, DN secondary

4. **Configurar Plant Settings - Display:**
   - Component Display: Detailed
   - Line Color: By Service
   - Tag Display: On hover
   - Tag Size: 3mm
   - Performance: Max 5000 components before simplification

5. **Configurar Plant Settings - Piping:**
   - Ortho Mode: ON
   - Snap Angle: 90°
   - Auto-insert Fittings: ON
   - Default Slope: 1:100

6. **Configurar Coordinate System:**
   - UCS Origin: 0,0,0
   - Project Base Point: Document in project notes
   - Grid System: 7.5m spacing, Grid A-M, 1-20

7. **Crear Structure de Áreas:**
   - En Project Manager, crear subcarpetas en 3D:
     - Area-100-Inlet-Separation
     - Area-200-Dehydration
     - Area-300-NGL-Recovery
     - Area-400-Compression
     - Area-500-Utilities

8. **Documentar Configuración:**
   - Crear documento Word con screenshots de todas las configuraciones
   - Incluir resumen de decisiones tomadas

**Tiempo estimado:** 30 minutos

**Entregables:**
- Proyecto creado y configurado completamente
- Document de configuración con screenshots
- Verificación de estructura de directorios

**Criterios de evaluación:**
- Configuración completa de Plant Settings (40%)
- Estructura de proyecto lógica y organizada (30%)
- Documentación clara de configuraciones (20%)
- Naming conventions consistentes (10%)

## Evaluación

### Preguntas de Evaluación

**Pregunta 1:** ¿Cuál es la consecuencia de seleccionar unidades incorrectas durante la creación del proyecto?

a) Se puede cambiar fácilmente después
b) Solo afecta la visualización, no los datos
c) No se puede cambiar después de insertar componentes
d) Solo afecta los reportes

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: c) No se puede cambiar después de insertar componentes

Explicación: La selección de unidades es una decisión crítica e irreversible una vez que se comienzan a insertar componentes. Cambiar unidades requeriría recrear todo el proyecto desde cero.
</details>

**Pregunta 2:** ¿Qué plantilla de proyecto debería seleccionar para una planta de procesamiento de alimentos que requiere materiales grado sanitario?

a) Petrochemical
b) Power Generation
c) Food & Beverage
d) Generic Industrial

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: c) Food & Beverage

Explicación: La plantilla Food & Beverage está preconfigurada con materiales grado alimenticio (SS316L electropolished), diseño higiénico y especificaciones que cumplen con USDA y normas 3A.
</details>

**Pregunta 3:** ¿Cuál es el intervalo recomendado para auto-save en proyectos Plant 3D?

a) 5 minutos
b) 10-15 minutos
c) 30 minutos
d) 60 minutos

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) 10-15 minutos

Explicación: Un intervalo de 10-15 minutos balancea protección contra pérdida de datos con rendimiento del sistema. Intervalos muy cortos pueden impactar performance en proyectos grandes.
</details>

**Pregunta 4:** En un proyecto multidisciplinario grande, ¿cuál es la mejor estrategia de organización de drawings?

a) Todos los drawings en una sola carpeta
b) Organización por área de planta
c) Organización alfabética
d) Organización por fecha de creación

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) Organización por área de planta

Explicación: Para plantas grandes, organizar por áreas (Area 100, Area 200, etc.) facilita la gestión, mejora el rendimiento y permite trabajo paralelo de múltiples equipos sin conflictos.
</details>

**Pregunta 5:** ¿Qué formato de capa (layer) sigue el estándar ISO 13567 internacional?

a) M-PIPING
b) P-EQP-PUMPS
c) MECHANICAL_PIPING
d) LAYER_PIPING_01

<details>
<summary>Ver respuesta correcta</summary>
Respuesta: b) P-EQP-PUMPS

Explicación: ISO 13567 usa formato: Disciplina-Tipo-Subtipo (Process-Equipment-Pumps). Este estándar internacional es ampliamente usado en Europa y proyectos internacionales.
</details>

## Resumen

En esta lección ha aprendido:

- ✅ Crear proyectos Plant 3D profesionales usando el Project Setup Wizard
- ✅ Configurar Plant Settings detalladamente para diferentes industrias
- ✅ Establecer sistemas de unidades según estándares ASME o ISO
- ✅ Configurar coordenadas, referencias y grids estructurales
- ✅ Implementar best practices de naming, backups y performance

La configuración correcta del proyecto es la base del éxito en diseño de plantas industriales. Un proyecto bien configurado asegura consistencia, eficiencia y cumplimiento de estándares a lo largo de todo el ciclo de vida del proyecto.

## Próxima Lección

En la **Lección 3: Spec Editor y Pipeline Specifications**, aprenderá a crear y gestionar especificaciones de tuberías (Pipe Specs), configurar materiales, ratings de presión y componentes según normas ASME B31.3, estableciendo la base técnica para el diseño de piping.

---

**Lección 2 de 30 - Módulo 1 de 6**
AutoCAD Plant 3D 2026 - Curso Avanzado
DISTMAH ATC - Authorized Training Center
