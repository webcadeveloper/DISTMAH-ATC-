# Leccion 1: Interfaz de Usuario de AutoCAD 2026

**Duracion:** 60 minutos
**Modulo:** 1 - Introduccion a AutoCAD 2026
**Curso:** AutoCAD 2026 Basico

---

## Objetivos de Aprendizaje

Al completar esta leccion, seras capaz de:

- Identificar los componentes principales de la interfaz de AutoCAD 2026
- Navegar por el Ribbon, Panels y Tabs
- Utilizar la Command Line y Dynamic Input
- Personalizar el Workspace segun tus necesidades
- Configurar el Quick Access Toolbar

---

## Introduccion

AutoCAD 2026 presenta una interfaz de usuario moderna y optimizada que facilita el acceso a todas las herramientas de dibujo. La version 2026 incluye mejoras significativas en la organizacion visual y nuevas opciones de personalizacion que aumentan la productividad del usuario.

La interfaz esta disenada siguiendo el estandar de Autodesk, lo que significa que si aprendes a usar AutoCAD, podras adaptarte rapidamente a otros productos como Revit, Civil 3D o Inventor.

---

## 1. Componentes Principales de la Interfaz

### 1.1 Application Menu (Boton A)

El boton "A" en la esquina superior izquierda proporciona acceso a:

- **New:** Crear nuevo dibujo
- **Open:** Abrir archivo existente
- **Save:** Guardar el dibujo actual
- **Save As:** Guardar con nuevo nombre o ubicacion
- **Export:** Exportar a PDF, DWF, DXF
- **Print:** Configuracion de impresion
- **Drawing Utilities:** Audit, Purge, Recover
- **Recent Documents:** Archivos recientes

![Application Menu AutoCAD 2026](../imagenes/leccion-1-application-menu.png)

### 1.2 Quick Access Toolbar

Ubicada junto al boton A, contiene los comandos mas usados:

- New, Open, Save
- Undo, Redo
- Plot (imprimir)
- Match Properties
- Batch Plot

**Personalizacion:**
- Click derecho en cualquier comando del Ribbon
- Selecciona "Add to Quick Access Toolbar"
- Arrastra para reordenar

### 1.3 Ribbon Interface

El Ribbon es la barra principal de herramientas organizada en:

**Tabs (Pestanas):**
- **Home:** Comandos de dibujo y edicion basicos
- **Insert:** Bloques, referencias externas, imagenes
- **Annotate:** Texto, dimensiones, tablas
- **Parametric:** Restricciones geometricas
- **View:** Vistas, viewports, estilos visuales
- **Manage:** Customization, CAD Standards
- **Output:** Impresion, exportacion
- **Add-ins:** Aplicaciones externas

**Panels:**
Cada Tab contiene Panels agrupados por funcion. Por ejemplo, el Tab Home contiene:
- Draw Panel (Line, Circle, Arc, Rectangle)
- Modify Panel (Move, Copy, Rotate, Mirror)
- Annotation Panel (Text, Dimensions)
- Layers Panel (Layer Properties)
- Properties Panel (Match Properties)

![Ribbon Interface AutoCAD 2026](../imagenes/leccion-1-ribbon.png)

### 1.4 Drawing Area

El area central donde creas tus dibujos:

- Fondo negro por defecto (configurable)
- Cursor crosshair (+) para precision
- UCS Icon (icono de coordenadas)
- Grid visible (opcional)
- Model/Layout Tabs en la parte inferior

### 1.5 Command Line

La linea de comandos en la parte inferior permite:

- Escribir comandos directamente (ej: LINE, CIRCLE)
- Ver historial de comandos
- Recibir prompts del sistema
- Usar alias de comandos (L = Line, C = Circle)

**Atajos importantes:**
- **F2:** Expandir ventana de texto completa
- **Flecha arriba:** Repetir ultimo comando
- **ESC:** Cancelar comando actual

### 1.6 Status Bar

Barra de estado en la parte inferior con toggles:

| Icono | Funcion | Atajo |
|-------|---------|-------|
| SNAP | Snap to Grid | F9 |
| GRID | Mostrar cuadricula | F7 |
| ORTHO | Dibujo ortogonal | F8 |
| POLAR | Polar Tracking | F10 |
| OSNAP | Object Snap | F3 |
| OTRACK | Object Snap Tracking | F11 |
| DYN | Dynamic Input | F12 |
| LWT | Mostrar lineweight | - |
| QP | Quick Properties | - |

---

## 2. Command Line y Dynamic Input

### 2.1 Usando la Command Line

La Command Line es el metodo tradicional de interaccion:

```
Command: LINE
Specify first point: (click o coordenadas)
Specify next point or [Undo]: (click o coordenadas)
Specify next point or [Undo]: (Enter para terminar)
```

**Ventajas:**
- Control preciso
- Historial visible
- Compatible con scripts
- Funciona en todas las versiones

### 2.2 Dynamic Input (F12)

Dynamic Input muestra informacion directamente en el cursor:

- Tooltips con valores actuales
- Entrada de dimensiones junto al cursor
- Menu de opciones contextual
- Feedback visual inmediato

**Configuracion:**
1. Click derecho en DYN en Status Bar
2. "Dynamic Input Settings"
3. Habilitar/deshabilitar componentes:
   - Pointer Input
   - Dimension Input
   - Dynamic Prompts

![Dynamic Input AutoCAD 2026](../imagenes/leccion-1-dynamic-input.png)

---

## 3. Workspaces

### 3.1 Workspaces Predefinidos

AutoCAD 2026 incluye Workspaces optimizados:

- **Drafting & Annotation:** Dibujo 2D (por defecto)
- **3D Basics:** Modelado 3D basico
- **3D Modeling:** Modelado 3D avanzado

### 3.2 Cambiar Workspace

1. Click en el icono de Workspace en Status Bar
2. Selecciona el workspace deseado
3. O usa el menu: View tab > Workspace dropdown

### 3.3 Crear Workspace Personalizado

1. Organiza tus paneles como prefieras
2. Posiciona paletas de herramientas
3. Click en Workspace dropdown > "Save Current As..."
4. Nombra tu workspace
5. Opcional: "Workspace Settings" para configurar comportamiento

**Recomendacion:**
Crea un workspace para cada tipo de proyecto:
- "Arquitectura" con paletas de mobiliario
- "Mecanico" con simbolos tecnicos
- "Electrico" con componentes electricos

---

## 4. ViewCube y Navigation Bar

### 4.1 ViewCube

El ViewCube en la esquina superior derecha permite:

- Vistas predefinidas (Top, Front, Right, Isometric)
- Rotacion libre arrastrando
- Home view (click en casita)
- Brujula para orientacion Norte

### 4.2 Navigation Bar

Barra vertical con herramientas de navegacion:

- **Pan:** Desplazar vista
- **Zoom Extents:** Ver todo el dibujo
- **Zoom Window:** Zoom a area seleccionada
- **Orbit:** Rotacion 3D
- **SteeringWheels:** Navegacion avanzada
- **ShowMotion:** Animaciones guardadas

---

## 5. Paletas y Paneles Flotantes

### 5.1 Properties Palette (Ctrl+1)

Muestra y permite editar propiedades del objeto seleccionado:

- General: Color, Layer, Linetype
- Geometry: Coordenadas, dimensiones
- Specific: Propiedades unicas del tipo de objeto

### 5.2 Tool Palettes (Ctrl+3)

Colecciones de herramientas organizadas:

- Bloques predefinidos
- Hatch patterns
- Comandos personalizados
- Contenido de terceros

### 5.3 Design Center (Ctrl+2)

Explorador para reutilizar contenido:

- Bloques de otros dibujos
- Layers
- Text Styles
- Dimension Styles

---

## Ejercicio Practico 1

**Objetivo:** Familiarizarse con la interfaz de AutoCAD 2026.

**Tareas:**

1. **Explorar el Ribbon:**
   - Navega por cada Tab (Home, Insert, Annotate, View, Output)
   - Identifica donde estan los comandos: Line, Circle, Move, Copy

2. **Probar Command Line:**
   - Escribe `LINE` y presiona Enter
   - Sigue los prompts para dibujar una linea
   - Presiona ESC para cancelar

3. **Activar/Desactivar Dynamic Input:**
   - Presiona F12 para toggle
   - Dibuja una linea con DYN activado
   - Dibuja otra con DYN desactivado
   - Nota la diferencia

4. **Personalizar Quick Access Toolbar:**
   - Click derecho en el comando "Circle" del Ribbon
   - Selecciona "Add to Quick Access Toolbar"
   - Verifica que aparezca en la barra

5. **Cambiar Workspace:**
   - Cambia a "3D Basics"
   - Observa los cambios en el Ribbon
   - Regresa a "Drafting & Annotation"

**Entregable:** Screenshot mostrando tu interfaz personalizada.

---

## Evaluacion

**Pregunta 1:** Cual es el atajo de teclado para activar/desactivar Dynamic Input?

**Pregunta 2:** Donde se encuentra el boton para acceder a Recent Documents?

**Pregunta 3:** Que Tab del Ribbon contiene los comandos de dimensionado?

**Pregunta 4:** Como agregas un comando al Quick Access Toolbar?

**Pregunta 5:** Nombra 3 Workspaces predefinidos en AutoCAD 2026.

---

## Resumen

En esta leccion aprendiste:

- Los componentes principales de la interfaz de AutoCAD 2026
- Como usar el Ribbon con sus Tabs y Panels
- La diferencia entre Command Line y Dynamic Input
- Como personalizar tu Workspace
- El uso del Quick Access Toolbar y paletas flotantes

**Proxima Leccion:** Configuracion Inicial (Unidades, Limites, Coordenadas)

---

**Tiempo de estudio recomendado:** 60 minutos
**Practica adicional:** 30 minutos explorando cada Tab del Ribbon
