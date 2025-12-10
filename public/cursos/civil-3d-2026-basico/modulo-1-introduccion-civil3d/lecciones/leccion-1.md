# Lección 1: Interfaz de Civil 3D 2026 y Workspace

**Duración:** 60 minutos
**Módulo:** 1 - Introducción a Civil 3D 2026
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Identificar las diferencias clave entre AutoCAD y Civil 3D
✅ Navegar la interfaz de Civil 3D 2026 con confianza
✅ Utilizar el Ribbon especializado para ingeniería civil
✅ Trabajar con Toolspace (Prospector, Settings, Survey, Toolbox)
✅ Personalizar el workspace según tus necesidades profesionales
✅ Utilizar Object Viewer para visualización 3D de objetos

---

## Introducción

Autodesk Civil 3D es la plataforma BIM (Building Information Modeling) líder mundial para diseño de infraestructura civil. A diferencia de AutoCAD, que es una herramienta de dibujo general, Civil 3D está específicamente diseñado para proyectos de ingeniería civil: carreteras, urbanizaciones, redes de tuberías, topografía, y movimiento de tierras.

La versión 2026 trae mejoras significativas en la interfaz de usuario, con nuevas herramientas de visualización 3D y un Project Explorer mejorado que facilita la gestión de proyectos grandes y colaborativos.

**Diferencia fundamental:** Civil 3D trabaja con **objetos inteligentes** que contienen datos de ingeniería, no solo geometría. Por ejemplo, una superficie no es simplemente un conjunto de líneas 3D, sino un modelo digital del terreno que "sabe" sus elevaciones, pendientes, curvas de nivel, y puede calcular volúmenes automáticamente.

---

## 1. Diferencias entre AutoCAD y Civil 3D

### AutoCAD (Dibujo General)
- Líneas, círculos, polilíneas (geometría básica)
- Sin inteligencia de ingeniería
- Cálculos manuales
- Etiquetas estáticas que no se actualizan

### Civil 3D (Diseño de Infraestructura)
- **Objetos dinámicos** (superficies, alineamientos, perfiles)
- **Datos de ingeniería integrados** (elevaciones, estaciones, pendientes)
- **Cálculos automáticos** (volúmenes, áreas, longitudinales)
- **Etiquetas dinámicas** que se actualizan automáticamente
- **Metodología BIM** para infraestructura civil

**Ejemplo práctico:**
En AutoCAD, si mueves una curva de nivel, las demás no cambian. En Civil 3D, si modificas la elevación de un punto topográfico, la superficie se recalcula automáticamente y todas las curvas de nivel, análisis de pendientes, y volúmenes se actualizan al instante.

![Comparación AutoCAD vs Civil 3D](../imagenes/leccion-1-autocad-vs-civil3d.png)

---

## 2. Interfaz de Civil 3D 2026

### 2.1 Application Menu (Botón A superior izquierdo)
Acceso a:
- New (nuevo drawing)
- Open (abrir)
- Save / Save As
- Export (PDF, DWG, LandXML)
- Print (impresión)
- Drawing Utilities (Audit, Purge, Units)
- Recent Documents

### 2.2 Quick Access Toolbar
Barra superior con comandos frecuentes:
- New, Open, Save
- Undo, Redo
- Plot
- Workspace selector
- **Customizable** - Añade tus comandos favoritos

![Quick Access Toolbar](../imagenes/leccion-1-quick-access-toolbar.png)

### 2.3 Ribbon Interface - Tabs Especializados

**Home Tab:**
- Create Design (superficies, alineamientos, profiles)
- Create Ground Data (puntos COGO)
- Profile & Section Views
- Layers panel

**Insert Tab:**
- Import (puntos desde CSV, LandXML)
- Reference (Xrefs, imágenes)
- Blocks

**Annotate Tab:**
- Labels (etiquetas automáticas)
- Tables (tablas dinámicas)
- Add Labels dropdown (por objeto: superficie, alineamiento, perfil)

**Analyze Tab:**
- Ground Data (punto, group management)
- Volumes (cálculo de volúmenes)
- Design Criteria
- Interference Check (detección de conflictos)

**View Tab:**
- Object Viewer (visualización 3D)
- **3D Model Viewer** (novedad 2026 - visor mejorado)
- Visual Styles (2D Wireframe, Conceptual, Realistic)
- Viewports

**Output Tab:**
- Plan Production (generación masiva de planos)
- Export (Civil 3D to LandXML, Civil 3D to IFC)
- Plot (impresión)

![Ribbon Tabs Civil 3D 2026](../imagenes/leccion-1-ribbon-tabs.png)

**Novedad 2026:** El ribbon ahora incluye acceso directo al nuevo 3D Model Viewer desde el View Tab, permitiendo visualización mejorada de modelos complejos.

---

## 3. Toolspace - El Panel de Control de Civil 3D

Toolspace es el panel vertical (generalmente a la izquierda) que contiene 4 pestañas críticas:

### 3.1 Prospector Tab
El "explorador de objetos" de Civil 3D:

**Top-level collections:**
- **Master View** - Vista de todos los objetos del drawing activo
- **Open Drawings** - Drawings abiertos
- **Active Drawing View** - Vista del drawing actual

**Object collections:**
- Points Groups (grupos de puntos COGO)
- Point Clouds (nubes de puntos)
- Surfaces (superficies topográficas)
- Alignments (alineamientos horizontales)
- Profiles (perfiles longitudinales)
- Assemblies (ensamblajes para corridors)
- Corridors (corredores de carreteras)
- Pipe Networks (redes de tuberías)
- Catchments (cuencas hidrográficas)
- View Frame Groups (grupos de viewports para plan production)

**Funcionalidad clave:**
- Click derecho en cualquier objeto → Propiedades, Edit, Delete
- Drag & drop para crear data shortcuts
- Preview tooltip al pasar el mouse

![Toolspace Prospector](../imagenes/leccion-1-toolspace-prospector.png)

### 3.2 Settings Tab
Gestión de **estilos** (styles) y **configuraciones** del drawing:

**Drawing Settings:**
- Units (imperial vs métrico)
- Zone (coordinate systems: UTM, State Plane)
- Object Layers (capas automáticas)
- Abbreviations (abreviaturas)
- Ambient Settings (formatos de precisión)

**Object Styles:**
- Surface Styles (estilo de visualización de superficies)
- Alignment Styles
- Profile Styles
- Label Styles (estilos de etiquetas)
- Table Styles (estilos de tablas)

**Feature Settings:**
- Default styles por tipo de objeto
- Command settings (configuración de comandos)

**Flujo profesional:**
Configuras tus styles una vez en un template (.dwt), y todos tus proyectos heredan esa configuración corporativa.

![Settings Tab](../imagenes/leccion-1-settings-tab.png)

### 3.3 Survey Tab
Herramientas de topografía:

- Survey Databases (bases de datos de levantamiento)
- Import Survey Data (importar datos de estación total)
- Figure Prefix Database (códigos de campo)
- Traverse Analysis (cálculo de poligonales)
- Least Squares Analysis (ajuste por mínimos cuadrados)

**Uso:** Principalmente para topógrafos que procesan datos crudos de campo (estaciones totales, GPS RTK).

### 3.4 Toolbox Tab
Colección de herramientas especializadas:

- Reports Manager (reportes de cantidades, áreas)
- Data Shortcuts (referencias a superficies/alineamientos)
- External Database Tools
- GIS Tools (integración con sistemas GIS)
- LandXML Tools (importación/exportación)

![Toolspace - 4 Tabs](../imagenes/leccion-1-toolspace-tabs.png)

---

## 4. Command Line y Dynamic Input

### Command Line (Línea de Comandos)
- Ubicada en la parte inferior de la pantalla
- Todos los comandos de AutoCAD funcionan aquí
- Comandos específicos de Civil 3D (ej: `CreateSurface`, `CreateAlignment`)
- Presiona **F2** para expandir el historial completo

### Dynamic Input
- Tooltips interactivos en el cursor
- Entrada de valores directamente en pantalla
- **Toggle:** Presiona **F12** para activar/desactivar
- Muestra datos contextuales (distancias, ángulos, elevaciones)

---

## 5. Object Viewer y Visualización 3D

### Object Viewer Clásico
Herramienta para visualizar objetos Civil 3D en 3D:

**Activación:**
1. Selecciona un objeto (superficie, alineamiento, pipe network)
2. Click derecho → **Object Viewer**
3. O desde Ribbon: View tab → Object Viewer

**Controles:**
- **Orbit:** Click y arrastra para rotar
- **Pan:** Shift + Click y arrastra
- **Zoom:** Rueda del mouse
- **Visual Styles:** Wireframe, Hidden, Realistic

**Limitación:** Solo muestra UN objeto a la vez.

### Novedad 2026: 3D Model Viewer
**Mejora significativa** en la visualización:
- Visualiza **múltiples objetos simultáneamente**
- Mejor rendimiento con modelos grandes
- Secciones dinámicas (cortes en tiempo real)
- Exportación de vistas a imágenes de alta resolución
- Integración con Autodesk Viewer para compartir modelos web

![Object Viewer vs 3D Model Viewer](../imagenes/leccion-1-3d-viewers.png)

**Detalle en Lección 5** de este módulo.

---

## 6. Customización del Workspace

Civil 3D permite personalizar completamente tu entorno de trabajo:

### 6.1 Crear Workspace Personalizado

**Pasos:**
1. Organiza tus paneles (Toolspace, Properties, Tool Palettes)
2. Posiciona el Ribbon según prefieras
3. Command line: `WSSAVE` (Workspace Save)
4. Nombre: "Mi Workspace Civil 3D"

**Guardar ubicación:**
- Quick Access Toolbar → Workspace dropdown → Save Current As...

### 6.2 Elementos Customizables

**Ribbon:**
- Click derecho en Ribbon → Customize
- Añade/remueve tabs
- Crea paneles personalizados con tus comandos frecuentes

**Quick Access Toolbar:**
- Click derecho en cualquier comando del Ribbon → "Add to Quick Access Toolbar"
- Comandos recomendados: CreateSurface, CreateAlignment, Add Labels

**Toolspace:**
- Dock/Undock (flotar o anclar)
- Auto-hide (ocultar automáticamente)
- Resize (cambiar tamaño)

**Paletas de Herramientas:**
- Ctrl+3 para mostrar/ocultar Tool Palettes
- Crea paletas con tus bloques frecuentes (señalización, mobiliario urbano)

![Workspace Customization](../imagenes/leccion-1-workspace-custom.png)

### 6.3 Workspace por Disciplina

**Recomendación profesional:**
Crea workspaces especializados:

- **"Topografía"** - Toolspace expandido, Survey tab visible
- **"Vialidad"** - Alignment y Profile tools destacados
- **"Redes"** - Pipe Network tools en Quick Access
- **"Documentación"** - Annotate tab priorizado, Output tools visibles

**Cambio rápido:** Quick Access Toolbar → Workspace dropdown

---

## 7. Atajos de Teclado Esenciales

| Atajo | Función |
|-------|---------|
| **Ctrl+1** | Properties palette (propiedades del objeto seleccionado) |
| **Ctrl+3** | Tool Palettes |
| **Ctrl+4** | Sheet Set Manager |
| **F1** | Help (ayuda de Civil 3D) |
| **F2** | Text Window (historial de comandos expandido) |
| **F11** | Object Snap Tracking |
| **F12** | Dynamic Input on/off |
| **Ctrl+9** | Command Line hide/show |
| **Ctrl+0** | Full Screen (ocultar Ribbon temporalmente) |

---

## Ejercicio Práctico 1

**Objetivo:** Familiarizarse con la interfaz de Civil 3D 2026.

**Tareas:**

1. **Explorar el Ribbon:**
   - Navega por cada tab (Home, Insert, Annotate, Analyze, View, Output)
   - Identifica dónde están los comandos: Create Surface, Create Alignment, Add Labels

2. **Toolspace Prospector:**
   - Abre Toolspace (si está cerrado: command `TOOLSPACE`)
   - Expande "Master View"
   - Revisa las colecciones vacías (aún no hay objetos)

3. **Settings Tab:**
   - Click en Settings tab en Toolspace
   - Expande "Drawing Settings"
   - Click derecho en "Units and Zone" → Edit
   - Observa las opciones de unidades (Imperial/Métrico)
   - **NO modifiques nada aún** (solo observa)

4. **Customizar Quick Access Toolbar:**
   - En Ribbon, tab "Home", panel "Create Ground Data"
   - Click derecho en "Points" → Add to Quick Access Toolbar
   - Verifica que aparezca en la barra superior

5. **Crear Workspace:**
   - Posiciona Toolspace en el lado izquierdo (dock)
   - Command line: `WSSAVE`
   - Nombre: "Mi Civil 3D Workspace"
   - Save

6. **Probar F-Keys:**
   - Presiona F2 (expande command window)
   - Presiona F12 (toggle Dynamic Input - observa el cambio)
   - Presiona Ctrl+0 (full screen)
   - Presiona Ctrl+0 nuevamente (restaura)

**Entregable:** Screenshot de tu workspace personalizado mostrando Toolspace, Ribbon, y Quick Access Toolbar con al menos 2 comandos añadidos.

![Ejercicio 1 - Workspace](../imagenes/leccion-1-ejercicio-workspace.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia principal entre un objeto de AutoCAD y un objeto de Civil 3D?

**Pregunta 2:** ¿Qué pestaña del Toolspace utilizas para gestionar los estilos de visualización de superficies?

**Pregunta 3:** ¿Qué novedad de Civil 3D 2026 mejora significativamente la visualización de múltiples objetos 3D?

**Pregunta 4:** Menciona 3 tipos de objetos que puedes encontrar en el Prospector Tab del Toolspace.

**Pregunta 5:** ¿Qué comando usas para guardar tu configuración de workspace personalizado?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 User Interface Guide
- Civil 3D 2026 Help - "Getting Started"

**Atajos descargables:**
- Civil 3D 2026 Keyboard Shortcuts (PDF)

**Videos recomendados:**
- Autodesk Civil 3D 2026 - Interface Overview (YouTube oficial)

---

## Resumen

En esta lección aprendiste:

✅ Las diferencias fundamentales entre AutoCAD (dibujo) y Civil 3D (BIM de infraestructura)
✅ La estructura del Ribbon con tabs especializados (Home, Insert, Annotate, Analyze, View, Output)
✅ Las 4 pestañas del Toolspace: Prospector (objetos), Settings (estilos), Survey (topografía), Toolbox (herramientas)
✅ Cómo personalizar tu workspace para aumentar productividad
✅ Nuevas herramientas de visualización 3D en Civil 3D 2026

**Próxima Lección:** Configuración de Proyectos y Drawing Settings (unidades, coordenadas, sistemas de referencia)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 30 minutos explorando cada tab del Ribbon y Toolspace
