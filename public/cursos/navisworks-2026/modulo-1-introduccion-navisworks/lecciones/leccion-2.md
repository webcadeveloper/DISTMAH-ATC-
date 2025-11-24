# Lección 2: Importación y Agregación de Modelos

**Duración:** 60 minutos
**Nivel:** Intermedio/Avanzado
**Módulo:** 1 - Introducción a Navisworks 2026
**Prerequisitos:** Lección 1 completada, familiaridad con formatos CAD/BIM

## Objetivos de Aprendizaje

✅ Comprender los formatos de archivo soportados por Navisworks 2026 y configurar file readers apropiadamente para cada formato

✅ Dominar las diferencias críticas entre Append y Merge para agregar modelos al proyecto federado correctamente

✅ Configurar sistemas de coordenadas, unidades y transformaciones para garantizar alineación correcta de modelos multi-disciplina

✅ Implementar workflows de actualización y refresh de modelos cuando los archivos nativos cambian durante el desarrollo del proyecto

✅ Aplicar best practices para gestión de modelos grandes y optimización de performance en proyectos federados complejos

## Introducción

La capacidad de Navisworks para importar, federar y coordinar modelos de múltiples fuentes y formatos es su valor fundamental en la industria AEC. Un proyecto típico de construcción puede involucrar 50-200 archivos individuales: modelos arquitectónicos de Revit, estructurales de Tekla o Revit Structure, sistemas MEP de Revit MEP o AutoCAD MEP, infraestructura civil de Civil 3D, diseño de plantas de AutoCAD Plant 3D, y modelos de fabricantes en IFC o STEP.

La habilidad de agregar todos estos modelos en un solo entorno federado, mantenerlos actualizados conforme evolucionan, y garantizar alineación espacial correcta es lo que hace posible la coordinación BIM efectiva. Estudios de la industria demuestran que proyectos que implementan federación de modelos disciplinada reducen RFIs en 40-60% y disminuyen órdenes de cambio en campo en 30-50%, traduciendo en ahorros de millones de dólares en proyectos grandes.

Esta lección cubre los aspectos técnicos y workflows prácticos para importar modelos correctamente. Un error común es simplemente "arrastrar y soltar" archivos en Navisworks sin configurar file readers, verificar unidades, o entender Append vs Merge, resultando en modelos desalineados, propiedades faltantes, o archivos corruptos. Dominar estos fundamentos desde el inicio previene semanas de trabajo correctivo posterior.

## 1. Formatos de Archivo Soportados por Navisworks 2026

Navisworks 2026 soporta más de 60 formatos de archivo CAD, BIM, laser scanning y diseño industrial, consolidándose como el "hub" central para coordinación multi-plataforma.

![Formatos soportados](../imagenes/leccion-2-formatos-soportados.png)

### 1.1 Formatos Nativos de Navisworks

**NWD (Navisworks Document):**
- Formato nativo publicado de Navisworks
- Archivo único auto-contenido con toda la geometría embebida
- Incluye viewpoints, clash tests, timeliner data, comments
- No requiere archivos externos para visualización
- Tamaño típico: Mayor que NWF (geometría incluida)
- Uso: Compartir con stakeholders, archivar proyectos finalizados
- Editable: No (solo lectura, no puede modificarse)

**NWF (Navisworks File Set):**
- Formato de trabajo de Navisworks
- Archivo XML ligero que contiene REFERENCIAS a archivos externos
- NO incluye geometría (solo paths a archivos RVT, DWG, etc.)
- Incluye: Viewpoints, clash tests, search/selection sets, comments
- Tamaño típico: Pequeño (1-5MB incluso para proyectos grandes)
- Uso: Trabajo diario del coordinador BIM
- Editable: Sí, archivo de trabajo activo

**NWC (Navisworks Cache):**
- Archivo de caché generado automáticamente
- Contiene geometría pre-procesada para carga rápida
- Navisworks genera NWC al importar RVT, DWG, IFC, etc.
- Se almacena en carpeta temporal del sistema
- Uso: Acelera carga en aperturas subsecuentes
- No se edita manualmente

**Workflow típico:**
1. Trabajar en NWF durante coordinación (archivo ligero, editable)
2. Exportar NWD al finalizar hitos o para distribución
3. NWC se genera automáticamente en background

### 1.2 Formatos BIM

**Autodesk Revit (RVT, RFA):**
- **RVT**: Modelo completo de proyecto Revit
- **RFA**: Familia de Revit (componente individual)
- Soporte: Excelente (integración nativa Autodesk)
- Importa: Geometría 3D, propiedades completas, vistas, levels, grids
- File Reader: Configurable (rooms/spaces, links, fases)
- Versiones soportadas: Revit 2015-2026

**IFC (Industry Foundation Classes):**
- Formato abierto neutral (ISO 16739)
- Generado por: Revit, ArchiCAD, Tekla, Allplan, Vectorworks, etc.
- Versiones: IFC 2x3, IFC 4.0 (Navisworks 2026 mejora IFC 4.0)
- Soporte: Bueno (geometría y propiedades estándar)
- Consideraciones: Puede perder propiedades custom, depende de calidad del export

**Tekla Structures:**
- Formatos: .dgn (MicroStation), export a IFC o CIS/2
- Soporte: Mediante IFC o MicroStation file reader
- Uso común: Modelos estructurales de acero detallados

**ArchiCAD:**
- Formato nativo: .pln (no soportado directamente)
- Workflow: Export a IFC desde ArchiCAD, import IFC en Navisworks
- Calidad: Buena si IFC export está bien configurado

### 1.3 Formatos CAD de Autodesk

**AutoCAD (DWG, DXF):**
- **DWG**: Formato nativo AutoCAD (2D/3D)
- **DXF**: Drawing Exchange Format (intercambio)
- Versiones: AutoCAD 2013-2026
- Soporte: Excelente (geometría 3D, layers, blocks, xrefs)
- Uso: Detalles 2D, modelos 3D legacy, site context

**Civil 3D (DWG con objetos Civil 3D):**
- Contiene: Alignments, profiles, corridors, surfaces
- File Reader: AutoCAD Civil 3D reader
- Importa: Geometría 3D de infraestructura (carreteras, terrenos)

**AutoCAD Plant 3D (DWG con objetos Plant 3D):**
- Contiene: Piping, equipment, estructuras
- File Reader: AutoCAD Plant 3D reader
- Uso: Proyectos industriales, plantas químicas

**AutoCAD MEP (DWG con objetos MEP):**
- Contiene: Ductwork, piping, electrical, equipment
- File Reader: AutoCAD MEP reader
- Mejor integración que DWG genérico

### 1.4 Formatos de Diseño Industrial

**STEP (ISO 10303):**
- Formato neutral de CAD industrial
- Usado por: SolidWorks, CATIA, Siemens NX, Inventor
- Extensiones: .stp, .step
- Soporte: Bueno para geometría, limitado en propiedades

**CATIA:**
- Formato: .catpart, .catproduct
- Soporte: Mediante STEP o file reader específico
- Uso: Equipos industriales complejos

**Inventor:**
- Formatos: .ipt (part), .iam (assembly)
- Soporte: Bueno (familia Autodesk)
- Uso: Equipos fabricados, componentes mecánicos

**SolidWorks:**
- Formatos: .sldprt (part), .sldasm (assembly)
- Soporte: Mediante export a STEP
- Uso: Equipos, maquinaria

### 1.5 Point Clouds y Reality Capture

**Autodesk ReCap (RCS, RCP):**
- **RCS**: Scan individual
- **RCP**: Project con múltiples scans
- Soporte: Excelente (integración nativa)
- Uso: Verificación as-built, renovaciones, clash detection con condiciones existentes

**Formatos de point cloud:**
- .las, .laz (LiDAR)
- .e57 (ASTM estándar)
- .xyz (text point cloud)
- Workflow: Convertir a RCS/RCP con ReCap antes de importar

### 1.6 Otros Formatos Relevantes

**MicroStation (DGN):**
- Usado en infraestructura y transporte
- Versiones: V7, V8, Connect Edition
- Soporte: Bueno

**SketchUp (SKP):**
- Modelos conceptuales y contexto
- Soporte: Básico (geometría)
- Consideraciones: Propiedades limitadas

**FBX (Filmbox):**
- Formato de intercambio 3D (Autodesk)
- Uso: Modelos desde 3ds Max, Maya
- Soporte: Geometría y materiales

**3D PDF:**
- Formato de visualización
- Uso: Documentación técnica
- Soporte: Limitado (mejor exportar desde Navisworks a 3D PDF)

## 2. Configuración de File Readers

Los **File Readers** son plugins que controlan CÓMO Navisworks importa cada formato. Configurarlos correctamente antes de importar es crítico para obtener geometría completa y propiedades.

![File Readers Configuration](../imagenes/leccion-2-file-readers.png)

### 2.1 Acceder a File Readers

**Ubicación:**
- Application Menu (botón "N") > Options > File Readers
- O: Tools tab > Options panel > File Readers

**Estructura:**
- Lista de formatos en panel izquierdo
- Configuración específica en panel derecho al seleccionar formato

### 2.2 Revit File Reader Configuration

El Revit File Reader es uno de los más importantes y complejos.

**Opciones principales:**

**Convert Tab:**
- **Convert element properties**: ON (crítico - importa todas las propiedades)
- **Convert all Revit properties**: ON (incluye propiedades calculadas)
- **Convert element IDs**: ON (mantiene Revit Element IDs únicos)
- **Convert links**: ON (importa linked files automáticamente)
  - Opción: "Append" (recomendado) vs "Overlay"
- **Convert rooms**: Seleccionar según necesidad
  - Options: "Do not convert", "As spaces", "As closed volumes"
  - Recomendado: "As closed volumes" si necesita visualizar rooms
- **Convert spaces** (MEP): Similar a rooms
- **Convert room/space geometry**: ON si rooms/spaces están activados

**Parameters Tab:**
- **Shared parameters**: Convert (importa parámetros compartidos custom)
- **Project parameters**: Convert
- **Family parameters**: Convert

**View Settings Tab:**
- **Convert model view settings**: OFF (importa configuración de vistas Revit)
  - Recomendado: OFF para mantener control en Navisworks
- **Active view only**: OFF (importa todo el modelo, no solo vista activa)

**Phasing Tab:**
- **Phase**: Select phase a importar
  - Options: All phases, Specific phase (New Construction, Existing, etc.)
  - Recomendado: "New Construction" para proyectos nuevos

**Coordinates Tab:**
- **Use**: Shared Coordinates (crítico para alineación multi-modelo)
- **Transform**: Identity (sin transformación adicional)

**Recomendación profesional:**
Crear configuración estándar de File Reader para Revit y guardarla. Todos los modelos del proyecto deben usar la misma configuración para consistencia.

### 2.3 DWG/DXF File Reader Configuration

**Convert Tab:**
- **Convert to**: Geometry (3D geometry)
  - Opciones: Geometry, Lines, Both
  - Recomendado: Geometry para modelos 3D
- **Explode blocks**: OFF (mantiene jerarquía)
  - Activar si necesita elementos individuales accesibles
- **Convert paper space layouts**: OFF (solo model space)
- **Convert xrefs**: ON (importa referencias externas)

**Layers Tab:**
- **Import**: All layers
  - Opción de filtrar layers específicos si DWG tiene layers irrelevantes

**Units Tab:**
- **File units**: Auto-detect
  - Si auto-detect falla, especificar manualmente

### 2.4 IFC File Reader Configuration

**General Tab:**
- **Hierarchy**: Default
  - Opciones: Default, IfcSite, IfcBuilding, etc.
  - Default mantiene estructura IFC estándar
- **Convert properties**: All
- **Convert spaces**: As geometry (si IFC contiene spaces)

**Performance Tab:**
- **Tessellation quality**: Medium
  - Low: Más rápido, menos detalle
  - High: Más lento, más detalle
  - Medium: Balance apropiado

### 2.5 Guardar Configuraciones de File Readers

Una vez configurado correctamente:

1. En File Readers options, configurar formato (ej: Revit)
2. Clic en "Export" > Guardar archivo .xml de configuración
3. En futuros proyectos: "Import" > Cargar configuración guardada

**Best Practice:**
Crear configuraciones estándar de empresa:
- "Revit-Standard.xml"
- "DWG-Standard.xml"
- "IFC-Standard.xml"

Distribuir a todo el equipo para consistencia.

## 3. Append vs Merge: Diferencias Críticas

Navisworks ofrece dos métodos para agregar modelos: **Append** y **Merge**. Comprender la diferencia es FUNDAMENTAL.

![Append vs Merge](../imagenes/leccion-2-append-merge.png)

### 3.1 Append (Agregar)

**Definición:**
Append AGREGA un nuevo archivo al proyecto como un nodo INDEPENDIENTE en la jerarquía.

**Comportamiento:**
- Cada archivo agregado aparece como nodo separado en Project Browser
- Mantiene estructura interna del archivo original
- Si agrega 5 archivos RVT con Append, tendrá 5 nodos independientes
- Jerarquía clara: Archivo1, Archivo2, Archivo3...

**Cuándo usar Append:**
✅ **Modelos multi-disciplina** (arquitectura, estructura, MEP separados)
✅ **Múltiples buildings** en un campus
✅ **Fases de proyecto** separadas
✅ **Cuando necesita identificar origen de cada elemento**
✅ **Coordinación BIM estándar** (caso de uso principal)

**Ejemplo:**
```
Project (NWF)
├── ARQ-Edificio.rvt
│   ├── Walls
│   ├── Floors
│   └── Roofs
├── EST-Edificio.rvt
│   ├── Structural Columns
│   ├── Structural Framing
│   └── Foundations
└── MEP-Edificio.rvt
    ├── Ducts
    ├── Pipes
    └── Cable Trays
```

**Ventajas:**
- Claridad de origen de cada modelo
- Fácil hide/show de disciplinas completas
- Refresh individual de archivos modificados
- Clash tests por disciplina

**Procedimiento:**
1. File > Append (Ctrl+A)
2. Seleccionar archivo(s)
3. Open

### 3.2 Merge (Fusionar)

**Definición:**
Merge FUSIONA el contenido del nuevo archivo en la jerarquía EXISTENTE del modelo actual.

**Comportamiento:**
- NO crea nodo separado en Project Browser
- Integra elementos en la jerarquía del primer modelo
- Si abre File1 y Merge File2, File2 se integra dentro de File1
- Elementos de ambos archivos aparecen en la misma estructura

**Cuándo usar Merge:**
✅ **Multiple exports del mismo modelo** (ej: Revit por piso)
✅ **Consolidar variantes de diseño** en un solo modelo
✅ **Agregar detalles adicionales** al modelo existente sin separación
✅ **Simplificar jerarquía** cuando origen no importa

**Ejemplo:**
Si hace Merge de archivos Piso1.rvt, Piso2.rvt, Piso3.rvt:
```
Project (NWF)
└── Merged Model
    ├── Walls (de todos los pisos mezclados)
    ├── Floors (de todos los pisos mezclados)
    ├── Structural Framing (de todos los pisos mezclados)
    └── ...
```
NO hay separación por piso.

**Ventajas:**
- Jerarquía simplificada
- Selección por categoría atraviesa todos los archivos
- Útil para modelos que conceptualmente son "uno"

**Desventajas:**
- Pérdida de claridad de origen
- No puede refresh archivos individuales fácilmente
- Dificulta identificación de disciplina en clash detection

**Procedimiento:**
1. File > Merge
2. Seleccionar archivo(s)
3. Open

### 3.3 Regla de Oro: Append para Coordinación BIM

**Recomendación profesional:**
En 95% de proyectos de coordinación BIM, use **APPEND**.

**Por qué:**
- Claridad total de origen de cada modelo
- Control granular (hide/show por disciplina)
- Refresh selectivo cuando modelos cambian
- Clash detection por pares de disciplinas específicos
- Cumplimiento con BIM Execution Plans (BEP) estándar

**Excepción - Merge apropiado:**
Solo use Merge cuando específicamente DESEA fusionar contenido, ejemplo:
- Modelo Revit exportado en 10 archivos separados por performance
- Múltiples fases que deben visualizarse como continuo
- Consolidación final para presentación donde origen no importa

## 4. Sistemas de Coordenadas y Alineación de Modelos

Uno de los problemas más comunes en coordinación BIM: modelos desalineados espacialmente porque diferentes disciplinas usaron diferentes puntos de origen.

![Coordinate Systems](../imagenes/leccion-2-coordenadas.png)

### 4.1 Conceptos de Coordenadas

**Project Base Point vs Shared Coordinates:**

En Revit (y otros software BIM), existen dos sistemas:

**Project Base Point:**
- Origen interno del proyecto (0,0,0)
- Específico a cada archivo
- Puede ser diferente entre disciplinas
- NO usar para federación multi-modelo

**Shared Coordinates (Survey Point):**
- Coordenadas reales del sitio (UTM, State Plane, etc.)
- Deben ser IDÉNTICAS entre todos los modelos del proyecto
- Basadas en levantamiento topográfico
- USAR para federación multi-modelo

### 4.2 Configurar Modelos en Revit para Navisworks

**Antes de exportar/importar a Navisworks:**

**En Revit (cada disciplina):**
1. Manage tab > Coordinates panel > Specify Coordinates at Point
2. Definir Survey Point con coordenadas reales del sitio
3. Verificar: View > Graphics Display Options > Show Survey Point
4. Todos los modelos (ARQ, EST, MEP) deben tener el MISMO Survey Point

**Verificación:**
- Abrir todos los modelos en Revit
- View > Coordinates > Report Shared Coordinates
- Comparar: Deben ser idénticos entre disciplinas

### 4.3 Importar Modelos con Coordenadas Correctas

**En Navisworks:**

Configurar File Reader antes de import:

1. Options > File Readers > RVT
2. Coordinates tab
3. **Use**: Shared Coordinates (NO Internal Origin)
4. **Transform**: Identity (sin transformación)

Al importar con Append, todos los modelos se alinearán automáticamente si tienen el mismo Shared Coordinate system.

### 4.4 Verificar Alineación

**Después de importar múltiples modelos:**

1. Ver todos los modelos (unhide all)
2. Seleccionar elemento de referencia conocido (ej: grid line A-1)
3. Measure > Point to Point
4. Medir desde Grid A-1 en modelo ARQ a Grid A-1 en modelo EST
5. Distancia debe ser CERO (o <1mm)

**Si modelos están desalineados:**

**Opción A - Corregir en archivos nativos (recomendado):**
1. Identificar cuál modelo tiene coordenadas incorrectas
2. Corregir Shared Coordinates en Revit
3. Re-importar en Navisworks

**Opción B - Transform en Navisworks (temporal):**
1. Selection Tree > Clic derecho en archivo desalineado
2. Transform > Translate
3. Ingresar offset X, Y, Z para corregir
4. **Nota:** Esta corrección NO persiste si refresh el archivo

### 4.5 Units y File Units

**Configuración de unidades:**

**Global units (Navisworks):**
- Options > Interface > Display Units
- Configura VISUALIZACIÓN de medidas
- No afecta coordenadas internas

**File units (de archivos importados):**
- Cada archivo tiene unidades nativas (feet, meters, mm)
- Navisworks auto-detecta y convierte
- Verificar: Selection Tree > Clic derecho en archivo > Properties > Units

**Best Practice:**
- Establecer Shared Coordinates en unidades métricas (meters)
- Configurar Navisworks Display Units a Meters
- Verificar que todos los modelos usan mismas unidades

## 5. Actualización y Refresh de Modelos

Durante el desarrollo del proyecto, los modelos nativos cambian constantemente. Navisworks debe reflejar estos cambios.

![Model Refresh](../imagenes/leccion-2-refresh-models.png)

### 5.1 File-Based Linking (NWF)

**Recordatorio:**
NWF (Navisworks File Set) NO contiene geometría, solo referencias (paths) a archivos externos.

**Ventaja:**
Cuando archivos externos cambian, solo necesita "refresh" en Navisworks para ver cambios actualizados.

**Paths absolutos vs relativos:**
- **Absolute paths**: C:\Projects\Hospital\Arquitectura\ARQ-Edificio.rvt
  - Pro: Siempre encuentra el archivo
  - Con: No funciona si mueve carpeta de proyecto
- **Relative paths**: ..\Arquitectura\ARQ-Edificio.rvt
  - Pro: Portátil (funciona si mueve proyecto completo)
  - Con: Fácil romper si reestructura folders

**Recomendación:**
Use relative paths si todo el equipo trabaja con misma estructura de folders.

### 5.2 Refresh Individual Files

**Cuando un modelo cambió:**

**Método 1 - Quick Refresh:**
1. Project Browser > Clic derecho en archivo modificado
2. Refresh
3. Navisworks re-carga el archivo

**Método 2 - Refresh All:**
1. Home tab > Project panel > Refresh (ícono de refresh)
2. O presionar F5
3. Refresh todos los archivos del proyecto

**Notas:**
- Saved viewpoints: Se mantienen
- Selection sets: Se mantienen (si objetos aún existen)
- Clash tests: Se mantienen, re-correr para actualizar results
- Comments: Se mantienen

### 5.3 Automatic Refresh

**Configurar auto-refresh:**

1. Options > Interface > Refresh
2. **Enable auto-refresh**: ON
3. **Refresh interval**: 300 seconds (5 minutos) o según preferencia
4. **Files to monitor**: Seleccionar archivos

**Uso:**
Útil en sesiones de coordinación en vivo donde diseñadores están modificando modelos en tiempo real.

**Consideraciones:**
- Consume recursos (CPU/RAM)
- Solo activar durante sesiones activas de coordinación
- Desactivar para trabajo normal

### 5.4 Manejo de Archivos Faltantes

**Si Navisworks no encuentra un archivo referenciado:**

**Síntomas:**
- Warning al abrir NWF: "File not found"
- Modelo no aparece en scene view
- Nodo vacío en Project Browser con "!"

**Soluciones:**

**Opción A - Relink manual:**
1. Project Browser > Clic derecho en archivo faltante
2. Remove > Confirmar
3. File > Append > Buscar archivo en nueva ubicación
4. Nota: Pierde algunos settings del archivo original

**Opción B - Edit path:**
1. Buscar archivo manualmente en explorador de archivos
2. Copiar nueva ruta completa
3. Editar NWF en text editor (es XML)
4. Buscar path viejo, reemplazar con nuevo
5. Guardar, re-abrir en Navisworks

**Prevención:**
- Establecer estructura de folders estándar desde inicio
- Usar relative paths
- Documentar ubicaciones en BIM Execution Plan

### 5.5 Version Control de Archivos Nativos

**Workflow profesional con BIM 360 o ProjectWise:**

1. Diseñadores publican modelos a plataforma cloud (BIM 360 Docs)
2. Navisworks apunta a ubicación cloud (no local)
3. Al hacer Refresh, obtiene última versión publicada
4. Versionado automático

**Alternativa sin cloud:**
- Establecer shared folder (servidor de archivos)
- Disciplinas publican modelos a folder compartido con convención de nombres
- Ej: ARQ-Edificio-2024-11-24-v03.rvt
- Coordinator hace Refresh desde folder compartido

## 6. Gestión de Modelos Grandes y Optimización

Proyectos grandes (hospitales >500 camas, aeropuertos, data centers) pueden generar modelos federados de >5GB que desafían hardware estándar.

![Large Model Management](../imagenes/leccion-2-large-models.png)

### 6.1 Identificación de Modelos Grandes

**Tamaño de archivos típicos:**
- Edificio pequeño (casa, oficina): 50-200 MB federado
- Edificio mediano (escuela, clínica): 200-800 MB federado
- Edificio grande (hospital, universidad): 800 MB - 3 GB federado
- Mega-proyecto (aeropuerto, planta industrial): 3-10+ GB federado

**Indicadores de problemas de performance:**
- Carga inicial >10 minutos
- Navegación laggy (frames <20 FPS)
- Crashes frecuentes
- Uso de RAM >90%

### 6.2 Estrategias de Optimización

**Pre-Import Optimization (en archivos nativos):**

**Revit:**
- Purge unused families/types antes de importar
- Remove unnecessary detail (detail lines en 3D views)
- Use design options solo cuando necesario
- Remove old worksets no usados

**DWG:**
- Purge layers vacíos
- Remove paper space si no necesario
- Simplify complex blocks

**IFC:**
- Export con Level of Detail (LOD) apropiado
- LOD 300 para coordinación general
- LOD 400+ solo para áreas críticas

**Navisworks Configuration:**

**Options > Model > Performance:**

1. **Graphics Hardware Acceleration**: ON (requiere GPU)
2. **Texture quality**: Medium (no High en modelos grandes)
3. **Enable triangles reduction**: ON
   - Reduce polígonos de objetos lejanos
4. **Adaptive degradation**: ON
   - Reduce detalle durante navegación rápida, restaura al detenerse

**File Readers Optimization:**

**Revit Reader:**
- **Convert rooms/spaces**: OFF si no necesita (gran consumo)
- **Active view only**: Considerar ON (importa solo vista específica)
- **Convert all phases**: OFF (solo fase necesaria)

### 6.3 Federated Model por Zonas

**Para mega-proyectos:**

En lugar de un NWF con todo el proyecto:
- **NWF-TorreA.nwf**: Solo Torre A
- **NWF-TorreB.nwf**: Solo Torre B
- **NWF-Basement.nwf**: Solo sótanos
- **NWF-Shell-Core.nwf**: Solo estructura/fachada

**Ventajas:**
- Modelos más manejables
- Clash detection más rápido (menos objetos)
- Equipos pueden trabajar en paralelo

**Desventajas:**
- Coordinación entre zonas requiere proceso adicional
- No ve proyecto completo simultáneamente

### 6.4 Hardware Recommendations

**Para modelos grandes (>2GB):**

**Mínimo:**
- CPU: Intel Core i7 o AMD Ryzen 7 (8 cores)
- RAM: 32GB (64GB ideal)
- GPU: NVIDIA RTX 3050 o superior (6GB VRAM mínimo)
- SSD: Obligatorio (no HDD)

**Óptimo:**
- CPU: Intel Core i9 o AMD Ryzen 9 (16 cores)
- RAM: 64-128GB
- GPU: NVIDIA RTX 4070 o superior (12GB VRAM)
- SSD: NVMe M.2 de alta velocidad

### 6.5 NWD Publication

**Para distribución:**

Cuando necesita compartir modelo con stakeholders:

1. File > Publish > NWD
2. NWD es auto-contenido (NO requiere archivos externos)
3. Tamaño mayor que NWF pero portátil
4. Incluye toda geometría, viewpoints, clash tests

**Settings de publish:**
- **Include hidden objects**: Decidir según necesidad
- **Compress textures**: ON (reduce tamaño)
- **Embed datasheets**: ON si distribuyendo externamente

**Resultado:**
Archivo único .nwd que puede abrir en cualquier computadora con Navisworks (incluyendo Freedom).

## Ejercicio Práctico

**Duración:** 20 minutos

**Escenario:**
Usted es coordinador BIM de un proyecto de edificio de oficinas. Ha recibido modelos actualizados de tres disciplinas:
- ARQ-Oficinas.rvt (Arquitectura)
- EST-Oficinas.rvt (Estructura)
- MEP-Oficinas-Mecanicas.rvt (Sistemas mecánicos)

Debe crear el modelo federado en Navisworks para iniciar coordinación.

**Pasos:**

1. **Configurar File Readers para Revit**
   - Options > File Readers > RVT
   - Convert tab: Activar "Convert element properties", "Convert links", "Convert element IDs"
   - Coordinates tab: Use "Shared Coordinates"
   - Parameters tab: Convert shared/project parameters
   - Phasing tab: Select "New Construction"
   - Export settings a archivo "Revit-Standard.xml" para reutilizar

2. **Crear nuevo proyecto Navisworks**
   - File > New
   - Guardar como: "PROYECTO-Oficinas-Federado.nwf"
   - Verificar unidades: Options > Interface > Display Units = Meters, precision 0.000

3. **Importar modelos con Append**
   - File > Append (NO Merge)
   - Seleccionar: ARQ-Oficinas.rvt
   - Open (esperar carga completa)
   - File > Append
   - Seleccionar: EST-Oficinas.rvt
   - Open
   - File > Append
   - Seleccionar: MEP-Oficinas-Mecanicas.rvt
   - Open

4. **Verificar jerarquía en Project Browser**
   - Project Browser debe mostrar tres nodos independientes:
     - ARQ-Oficinas.rvt
     - EST-Oficinas.rvt
     - MEP-Oficinas-Mecanicas.rvt
   - Expandir cada nodo para ver estructura interna

5. **Verificar alineación espacial**
   - Zoom Extents (Shift+Z) para ver modelo completo
   - Identificar elemento de referencia (ej: Grid Line 1-A)
   - Measure > Point to Point
   - Medir desde Grid 1-A en ARQ a Grid 1-A en EST
   - Verificar distancia ≈0 (máximo 1-2mm de tolerancia)
   - Si desalineado >10mm, investigar problema de Shared Coordinates

6. **Guardar proyecto**
   - File > Save
   - Confirmar que NWF está guardado con tres referencias activas

7. **Simular actualización de modelo**
   - (Simulación): Imagine que arquitectura modificó el modelo
   - Project Browser > Clic derecho en ARQ-Oficinas.rvt > Refresh
   - Observar que modelo se re-carga

8. **Publicar NWD para distribución**
   - File > Publish > NWD
   - Nombre: "PROYECTO-Oficinas-Federado-2024-11-24.nwd"
   - Configurar: Compress textures ON
   - Save

**Resultado esperado:**
- Archivo NWF con tres modelos correctamente federados
- Modelos alineados espacialmente (coordenadas compartidas)
- Jerarquía clara por disciplina
- Capacidad de refresh individual
- NWD publicado listo para distribución

## Evaluación

1. **Pregunta 1:** Explique las diferencias entre los formatos NWD, NWF y NWC de Navisworks.

   **Respuesta:** NWF (Navisworks File Set) es un archivo XML ligero de trabajo que contiene solo referencias a archivos externos (RVT, DWG, IFC), más viewpoints, clash tests y settings - no incluye geometría embebida. NWD (Navisworks Document) es un archivo auto-contenido publicado que incluye toda la geometría embebida y puede abrirse sin archivos externos, ideal para distribución. NWC (Navisworks Cache) es un archivo de caché generado automáticamente que contiene geometría pre-procesada para acelerar cargas subsecuentes. En workflow típico: trabaje en NWF diariamente, publique NWD para distribución, NWC se genera automáticamente en background.

2. **Pregunta 2:** ¿Cuál es la diferencia crítica entre Append y Merge, y cuál debe usar para coordinación BIM multi-disciplina?

   **Respuesta:** Append AGREGA el archivo como nodo independiente en la jerarquía del Project Browser, manteniendo clara separación entre modelos y permitiendo identificación de origen, refresh individual, y control granular por disciplina. Merge FUSIONA el contenido en la jerarquía existente, integrando elementos sin separación. Para coordinación BIM multi-disciplina, siempre use APPEND porque permite claridad de origen (arquitectura vs estructura vs MEP), refresh selectivo cuando modelos cambian, control de visibilidad por disciplina, y clash detection por pares específicos. Merge solo es apropiado cuando específicamente desea consolidar contenido como un solo modelo (ej: múltiples exports del mismo archivo Revit).

3. **Pregunta 3:** ¿Por qué es crítico usar Shared Coordinates (Survey Point) en lugar de Project Base Point para federación de modelos en Navisworks?

   **Respuesta:** El Project Base Point es el origen interno (0,0,0) específico de cada archivo Revit y puede ser diferente entre disciplinas, resultando en modelos completamente desalineados en Navisworks. Shared Coordinates (Survey Point) representa coordenadas reales del sitio basadas en levantamiento topográfico y debe ser IDÉNTICO entre todos los modelos del proyecto. Al configurar File Reader > Coordinates > Use Shared Coordinates, Navisworks importa cada modelo en su posición geográfica real, garantizando alineación espacial correcta. Antes de importar, verificar en Revit que todos los modelos (ARQ, EST, MEP) tienen el mismo Survey Point. Sin esto, se desperdician días corrigiendo alineación manualmente.

4. **Pregunta 4:** Describa el workflow para actualizar modelos en Navisworks cuando los archivos nativos de Revit cambian durante el proyecto.

   **Respuesta:** Como NWF contiene solo referencias (no geometría embebida), el workflow es: (1) Diseñadores modifican y guardan archivos nativos Revit en ubicación compartida; (2) Coordinador abre NWF en Navisworks; (3) Project Browser > clic derecho en archivo modificado > Refresh (o F5 para refresh all); (4) Navisworks re-carga geometría actualizada desde archivo nativo; (5) Viewpoints, selection sets, y clash tests guardados se mantienen; (6) Re-ejecutar clash tests para actualizar resultados; (7) Guardar NWF. Para proyectos con actualizaciones frecuentes, configurar Options > Refresh > Enable auto-refresh con intervalo apropiado. Best practice: usar relative paths y estructura de folders estándar para evitar broken links.

5. **Pregunta 5:** ¿Qué estrategias de optimización debe implementar para manejar modelos federados muy grandes (>3GB) en Navisworks?

   **Respuesta:** Estrategias multi-nivel: (1) Pre-import: en Revit hacer Purge de families no usadas, remover detail lines innecesarias, exportar IFC con LOD apropiado (300 vs 400+); (2) File Readers: desactivar "Convert rooms/spaces" si no necesita, importar solo fase necesaria, usar "Active view only" si apropiado; (3) Navisworks Performance settings: activar Graphics Hardware Acceleration, texture quality Medium (no High), enable triangles reduction, adaptive degradation ON; (4) Hardware: mínimo 32GB RAM (64GB ideal), GPU NVIDIA RTX 3050+ con 6GB VRAM, SSD obligatorio; (5) Federated models por zonas: crear NWFs separados por torre/piso para mega-proyectos; (6) Publish NWD con compress textures para distribución. Combinando estas estrategias, modelos de 5-8GB son manejables.

## Resumen

En esta lección hemos dominado los aspectos fundamentales de importación y federación de modelos en Navisworks 2026:

- Comprendimos los 60+ formatos soportados por Navisworks, con énfasis en formatos BIM críticos (RVT, IFC, DWG), y aprendimos cuándo usar cada formato según el origen de datos.

- Configuramos File Readers apropiadamente para cada formato, especialmente Revit File Reader con todas sus opciones de conversión de propiedades, links, rooms/spaces, phasing, y coordenadas. Una configuración correcta desde el inicio previene pérdida de datos.

- Dominamos la diferencia crítica entre Append y Merge, estableciendo que Append es el método estándar para coordinación BIM multi-disciplina porque mantiene jerarquía clara, permite refresh individual, y facilita clash detection por pares.

- Aprendimos sobre sistemas de coordenadas: la importancia de usar Shared Coordinates (Survey Point) idénticas entre todos los modelos para garantizar alineación espacial correcta en el modelo federado.

- Implementamos workflows de actualización y refresh de modelos cuando archivos nativos cambian, comprendiendo la relación entre NWF (referencias) y archivos externos, y cómo mantener proyectos sincronizados.

- Aplicamos estrategias de optimización para manejar modelos grandes mediante configuración de performance, file readers optimization, federated models por zonas, y requerimientos de hardware.

Con estos conocimientos, podemos crear modelos federados estables, bien organizados y actualizables que forman la base para clash detection, simulación 4D, y todos los workflows avanzados de Navisworks.

## Próxima Lección

En la **Lección 3: Navegación y Viewpoints** profundizaremos en técnicas avanzadas de navegación 3D, creación y gestión de saved viewpoints para revisiones y presentaciones, uso de section planes y boxing para visualización de áreas específicas, animaciones entre viewpoints, y mediciones básicas. Estas habilidades son esenciales para comunicar hallazgos de coordinación efectivamente con el equipo de proyecto.
