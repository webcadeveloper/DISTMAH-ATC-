# Lección 4: Coordination Models 2026

## Introducción

**Coordination Models** (Modelos de Coordinación) en Revit 2026 representan una evolución significativa en la gestión de proyectos BIM multidisciplinarios. Esta funcionalidad permite organizar, visualizar y coordinar **múltiples modelos vinculados** (arquitectura, estructura, MEP) de manera centralizada, con controles mejorados de visibilidad, detección de cambios y preparación para clash detection.

Revit 2026 introduce **mejoras sustanciales** en Coordination Models que simplifican la coordinación en proyectos grandes con 10+ modelos vinculados.

## ¿Qué son Coordination Models?

### Definición

Un **Coordination Model** es un archivo Revit que sirve como **contenedor maestro** para múltiples modelos vinculados de diferentes disciplinas, sin geometría nativa significativa.

**Función principal:**
- Agregar todos los links disciplinarios (ARQ, STR, MEP-M, MEP-E, MEP-S)
- Configurar visibilidad y estilos gráficos
- Ejecutar clash detection centralizado
- Distribuir a equipo para revisión 3D

**Diferencia con modelo MEP estándar:**

| Modelo MEP Estándar | Coordination Model |
|---------------------|-------------------|
| Contiene geometría MEP modelada | Contiene solo links (sin geometría propia) |
| Vincula ARQ + STR como referencia | Vincula TODOS los modelos (ARQ, STR, MEP-M, MEP-E, MEP-S) |
| Para diseño y construcción | Para coordinación y clash detection |

### Estructura Típica de Proyecto

```
/Proyecto_BIM/
├── ARQ/
│   └── Proyecto_ARQ.rvt
├── STR/
│   └── Proyecto_STR.rvt
├── MEP/
│   ├── Proyecto_MEP_M.rvt (Mecánicas)
│   ├── Proyecto_MEP_E.rvt (Eléctricas)
│   └── Proyecto_MEP_S.rvt (Sanitarias)
└── COORD/
    └── Proyecto_COORDINATION.rvt ← Coordination Model
```

**Proyecto_COORDINATION.rvt** vincula todos los `.rvt` anteriores.

## Crear Coordination Model en Revit 2026

### Procedimiento Paso a Paso

**Paso 1: Nuevo Proyecto desde Template**

1. **File** → **New** → **Project**
2. Template file: **Construction Template** (o template corporativo)
3. Desmarcar: ☐ **Create new** (trabajar en template sin worksets inicialmente)
4. **OK**

**Paso 2: Configurar Niveles Básicos**

**Importante:** Aunque es coordination model, debe tener **mismos levels** que modelos disciplinarios para correcta visualización.

Opciones:
- **Opción A:** Copiar levels de modelo ARQ mediante Copy/Monitor
- **Opción B:** Crear levels manualmente coincidentes

**Paso 3: Vincular Modelos Disciplinarios**

**Orden recomendado de vinculación:**

1. **Arquitectura primero:**
   - **Insert** → **Link Revit** → `Proyecto_ARQ.rvt`
   - Positioning: **Origin to Origin**

2. **Estructura:**
   - **Insert** → **Link Revit** → `Proyecto_STR.rvt`
   - Positioning: **Origin to Origin**

3. **MEP Mecánicas:**
   - **Insert** → **Link Revit** → `Proyecto_MEP_M.rvt`
   - Positioning: **Origin to Origin**

4. **MEP Eléctricas:**
   - **Insert** → **Link Revit** → `Proyecto_MEP_E.rvt`
   - Positioning: **Origin to Origin**

5. **MEP Sanitarias:**
   - **Insert** → **Link Revit** → `Proyecto_MEP_S.rvt`
   - Positioning: **Origin to Origin**

**Resultado:** 5 modelos vinculados visibles en vista 3D.

![Coordination Model con Múltiples Links](../imagenes/mod5-coordination-model-links.png)

**Paso 4: Guardar como Coordination Model**

1. **File** → **Save As** → **Project**
2. Nombre: `Proyecto_COORDINATION.rvt`
3. Ubicación: Carpeta `/COORD/`

## Mejoras en Revit 2026

### 1. Enhanced Link Management Panel

**Nueva interfaz en Revit 2026:**

**Acceso:**
1. **Insert** → **Manage Links**
2. **Revit** tab → **Enhanced View** (botón nuevo)

**Funcionalidades mejoradas:**

**A) Grouping por Disciplina**

Links se organizan automáticamente por **discipline metadata**:

```
📁 Architecture
  └── Proyecto_ARQ.rvt
📁 Structure
  └── Proyecto_STR.rvt
📁 Mechanical
  └── Proyecto_MEP_M.rvt
📁 Electrical
  └── Proyecto_MEP_E.rvt
📁 Plumbing
  └── Proyecto_MEP_S.rvt
```

**Beneficio:** Fácil identificación y gestión por disciplina.

**B) Batch Operations**

Seleccionar múltiples links y ejecutar operaciones simultaneas:
- **Reload All** - Recargar todos los links seleccionados
- **Unload All** - Descargar temporalmente
- **Save Positions** - Guardar posiciones de múltiples links

**Ejemplo práctico:**
Seleccionar los 3 modelos MEP → **Reload All** → actualización simultánea.

**C) Link Status Indicators**

Iconos visuales indican estado de cada link:

| Icono | Estado | Significado |
|-------|--------|-------------|
| ✅ | Loaded, Up to Date | Link cargado y sincronizado |
| ⚠️ | Loaded, Out of Date | Archivo source modificado, necesita Reload |
| ❌ | Unloaded | Link descargado temporalmente |
| 🔗 | From Cloud | Link desde BIM 360 / ACC |

### 2. Coordination Views - Vistas Preconfiguradas

**Nueva funcionalidad 2026:** **Coordination View Templates**

**Crear View Template para Coordinación:**

**Paso 1: Crear Vista 3D de Coordinación**

1. **View** → **3D View** → **Default 3D View**
2. **View Properties:**
   - View Name: `3D - Full Coordination`
   - Detail Level: **Medium**
   - Visual Style: **Shaded**

**Paso 2: Configurar Visibilidad por Disciplina**

**Visibility/Graphics** → **Revit Links** tab:

**Proyecto_ARQ.rvt:**
- Display Settings: **By host view**
- Basics tab → Categories:
  - ☑ Walls, Floors, Roofs, Doors, Windows
  - ☐ Furniture, Casework (ocultar para claridad)
- Override: **Halftone** (50% transparency)

**Proyecto_STR.rvt:**
- Display Settings: **By host view**
- Categories:
  - ☑ Structural Framing, Structural Columns
  - ☐ Foundations (ocultar si no relevante para MEP)
- Override: Color **cyan** (0,255,255), Line Weight **2**

**Proyecto_MEP_M.rvt:**
- Display Settings: **By host view**
- Categories: ☑ Todas MEP
- Override: Color **rojo** (255,0,0)

**Proyecto_MEP_E.rvt:**
- Override: Color **amarillo** (255,255,0)

**Proyecto_MEP_S.rvt:**
- Override: Color **azul** (0,0,255)

**Paso 3: Crear View Template**

1. **View** → **Create Template from Current View**
2. Name: `COORD - Full Model by Discipline`
3. **Include:**
   - ☑ View Scale
   - ☑ Detail Level
   - ☑ Visibility/Graphics Overrides
   - ☑ Graphic Display Options

**Paso 4: Aplicar a Otras Vistas**

Crear vistas adicionales:
- `3D - MEP Only` (solo links MEP visibles)
- `3D - ARQ + MEP M` (arquitectura + mecánicas)
- `3D - Clash Detection Zone` (área específica para clashes)

Aplicar templates correspondientes.

### 3. Coordination Worksets (2026 Enhancement)

**Nueva capacidad:** Asignar cada **link** a **workset** dedicado para control granular.

**Configuración:**

**Paso 1: Enable Worksharing**

1. **Collaborate** → **Worksets**
2. **Worksharing** dialog → **OK**

**Paso 2: Crear Worksets por Disciplina**

1. **Collaborate** → **Worksets**
2. **New** → Name: `Links - Architecture`
3. Repetir para:
   - `Links - Structure`
   - `Links - MEP Mechanical`
   - `Links - MEP Electrical`
   - `Links - MEP Plumbing`

**Paso 3: Asignar Links a Worksets**

1. En vista, seleccionar link ARQ
2. **Properties** → **Workset:** `Links - Architecture`
3. Repetir para cada link

**Beneficio:**

**Cerrar worksets no necesarios:**
- Usuario A revisa clash MEP-M vs. STR → cerrar worksets de MEP-E y MEP-S
- **Performance mejorado** (menos links cargados en sesión)

## Configurar Coordination Model para Clash Detection

### Crear Clash Detection Sets

**Paso 1: Abrir Interference Check**

1. **Collaborate** → **Interference Check** → **Run Interference Check**

**Paso 2: Configurar Categories**

**Interference Check** dialog:

**Categories from:** `Current Project and all linked models`

**Ejemplo de configuración:**

**Set 1: MEP-M vs. Structure**

- **Selection A:**
  - Categories: Ducts, Duct Fittings, Mechanical Equipment
  - Links: `Proyecto_MEP_M.rvt`

- **Selection B:**
  - Categories: Structural Framing, Structural Columns
  - Links: `Proyecto_STR.rvt`

**Set 2: MEP-M vs. MEP-E**

- **Selection A:** Ducts (from MEP-M)
- **Selection B:** Cable Trays, Conduits (from MEP-E)

**Set 3: MEP-S vs. Structure**

- **Selection A:** Pipes (from MEP-S)
- **Selection B:** Structural elements (from STR)

**Paso 3: Guardar Configuración**

1. En **Interference Check** → **Save Settings...**
2. Nombre: `MEP Coordination Sets - Full Building`
3. **OK**

**Reutilización:** Cargar settings en futuras sesiones de clash detection.

## Mejores Prácticas

### 1. Ubicación Centralizada de Links

**Estructura de carpetas recomendada:**

```
/Servidor_BIM/Proyecto/
├── 01_ARQ/Proyecto_ARQ.rvt
├── 02_STR/Proyecto_STR.rvt
├── 03_MEP_M/Proyecto_MEP_M.rvt
├── 04_MEP_E/Proyecto_MEP_E.rvt
├── 05_MEP_S/Proyecto_MEP_S.rvt
└── 06_COORD/Proyecto_COORDINATION.rvt
```

**Beneficio:** Todos acceden desde **misma ruta UNC** o **BIM 360**.

### 2. Reload Schedule (Calendario de Recarga)

**Establecer frecuencia de reload:**

- **Diario:** Si proyecto en diseño activo (cambios frecuentes)
- **Semanal:** Proyecto en CD (construction documents)
- **Antes de reuniones de coordinación:** Siempre reload fresh links

**Automatización (BIM 360):**
- Configurar **automatic sync** en BIM 360 Docs
- Links se recargan automáticamente al abrir coordination model

### 3. Nomenclatura de Vistas

**Prefijo consistente para vistas de coordinación:**

```
COORD - 3D Full Model
COORD - 3D MEP Only
COORD - Level 1 Clash Zone
COORD - Mechanical Room Detail
```

**Beneficio:** Fácil filtrado en **Project Browser**.

### 4. Coordination Review Meetings

**Flujo de reunión semanal:**

1. **Pre-meeting:** Coordinador reload all links
2. **Durante reunión:**
   - Revisar vistas 3D coordinadas
   - Ejecutar clash detection
   - Marcar clashes críticos
3. **Post-meeting:**
   - Exportar reporte de clashes
   - Asignar responsables por disciplina
   - Deadline para resolver clashes (siguiente reunión)

### 5. Performance Optimization

**Para coordination models grandes (5+ GB):**

- **Usar Detail Level Medium** en vistas 3D (no Fine)
- **Ocultar categorías irrelevantes** (furniture, planting en links ARQ)
- **Section Boxes** para aislar zonas de revisión
- **Unload links** temporalmente no necesarios
- **Lightweight models:** Pedir a disciplinas purgar familias no usadas antes de publicar

## Revit 2026: Link Dependency Tracking

**Nueva funcionalidad:**

**Dependency Graph** muestra relaciones entre links.

**Acceso:**
1. **Manage Links** → **Enhanced View** → **Show Dependencies**

**Ejemplo de visualización:**

```
Proyecto_ARQ.rvt
  └── Linked by: Proyecto_MEP_M.rvt
  └── Linked by: Proyecto_MEP_E.rvt
  └── Linked by: Proyecto_MEP_S.rvt
  └── Linked by: Proyecto_COORDINATION.rvt
```

**Uso:** Identificar modelos que dependen de ARQ para planificar actualizaciones (si ARQ cambia, todos los MEP necesitan reload).

## Exportación para Revisión Externa

### Navisworks Export desde Coordination Model

**Uso:** Compartir modelo coordinado con contratistas que no tienen Revit.

**Procedimiento:**

1. En coordination model, **File** → **Export** → **NWC (Navisworks)**
2. **Export Navisworks** settings:
   - ☑ **Convert element properties**
   - ☑ **Convert links**
   - ☑ **Convert room geometry**
3. **Export**

**Resultado:** Archivo `.nwc` con todos los links integrados para Navisworks Manage (clash detection externo).

### IFC Export

Para coordinación con software no-Autodesk (Tekla, ArchiCAD):

1. **File** → **Export** → **IFC**
2. **IFC Export** settings:
   - IFC Version: **IFC4** (más reciente)
   - File Type: **IFC4 Coordination View**
   - ☑ **Export links as separate files**
3. **Export**

## Ejercicio Aplicado

**Ver:** Ejercicio 4 en `ejercicios.md` - Crear coordination model completo con 5 disciplinas, configurar view templates y ejecutar clash detection.

---

**Próxima Lección:** Clash Detection Avanzado - Reglas personalizadas, reportes e integración BIM 360.
