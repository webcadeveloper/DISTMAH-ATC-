# Lección 5: 3D Model Viewer y Herramientas de Visualización (Nuevo 2026)

**Duración:** 60 minutos
**Módulo:** 1 - Introducción a Civil 3D 2026
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Utilizar el nuevo 3D Model Viewer de Civil 3D 2026
✅ Diferenciar entre Object Viewer clásico y 3D Model Viewer
✅ Navegar modelos 3D (Orbit, Pan, Zoom, Fly mode)
✅ Aplicar Visual Styles (Wireframe, Conceptual, Realistic)
✅ Crear secciones y cortes dinámicos de modelos
✅ Realizar análisis visual de terreno (elevaciones, pendientes)
✅ Exportar vistas 3D de alta resolución
✅ Integrar con Autodesk Viewer para compartir modelos

---

## Introducción

La visualización 3D es crítica en proyectos de infraestructura civil. Permite a ingenieros, clientes, y stakeholders **comprender espacialmente** el diseño antes de la construcción.

**Novedad Civil 3D 2026:** El nuevo **3D Model Viewer** es una mejora significativa sobre el Object Viewer clásico. Ofrece:
- Visualización de **múltiples objetos simultáneamente** (superficies + alineamientos + pipe networks)
- **Mejor rendimiento** con modelos grandes
- **Secciones dinámicas** (cortes en tiempo real)
- **Exportación mejorada** a imágenes y formatos 3D
- **Integración con Autodesk Viewer** para compartir modelos web

Esta lección te enseñará a utilizar estas herramientas profesionales de visualización.

![3D Model Viewer 2026](../imagenes/leccion-5-3d-model-viewer.png)

---

## 1. Object Viewer Clásico vs 3D Model Viewer

### 1.1 Object Viewer (Versiones Anteriores)

**Características:**
- Visualiza **UN objeto a la vez** (una superficie, un alignment)
- Navegación básica 3D (orbit, pan, zoom)
- Visual styles limitados
- No permite cortes dinámicos
- Rendimiento limitado con objetos grandes

**Activación:**
1. Selecciona un objeto Civil 3D (ej: superficie)
2. Click derecho → **Object Viewer...**
3. Ventana flotante se abre mostrando el objeto en 3D

**Uso actual:**
Sigue disponible para visualización rápida de objetos individuales.

### 1.2 3D Model Viewer (Nuevo en 2026)

**Características:**
- Visualiza **múltiples objetos simultáneamente**
  - Superficie + alineamientos + pipe networks + corridors
- **Section Box** - Cortes dinámicos en X, Y, Z
- **Enhanced Visual Styles** - Realistic rendering mejorado
- **Measurement Tools** - Medir distancias, elevaciones
- **Annotation** - Añadir notas visuales temporales
- **High-Resolution Export** - Exportar imágenes hasta 4K
- **Autodesk Viewer Integration** - Subir modelos a la nube

**Activación:**
- **Ribbon:** View Tab → Views panel → **3D Model Viewer**

O bien:

- **Command:** `C3D3DVIEWER`

**Diferencia fundamental:** El 3D Model Viewer es una **ventana de visualización completa** integrada en Civil 3D, no solo un pop-up flotante.

![Comparación Viewers](../imagenes/leccion-5-viewers-comparison.png)

---

## 2. Activar y Configurar 3D Model Viewer

### 2.1 Abrir 3D Model Viewer

**Pasos:**

1. **Abrir Drawing con Objetos 3D:**
   - Debe contener al menos una superficie, alignment, o corridor

2. **Activar Viewer:**
   - **View Tab** → **Views panel** → **3D Model Viewer**

3. **Interface del Viewer:**
   - **Viewport 3D:** Muestra el modelo
   - **Navigation Controls:** Orbit, Pan, Zoom, Fly
   - **Visual Style Selector:** Wireframe, Conceptual, Realistic
   - **Section Box Controls:** Activar/desactivar cortes
   - **Display Settings:** Qué objetos mostrar

**Layout:**
El viewer puede ocupar:
- **Full screen:** Todo el espacio de trabajo
- **Split view:** 50% drawing view / 50% 3D viewer
- **Floating window:** Ventana flotante independiente

**Configuración recomendada:** Split view para comparar diseño 2D y visualización 3D simultáneamente.

![3D Model Viewer Interface](../imagenes/leccion-5-viewer-interface.png)

### 2.2 Seleccionar Objetos a Visualizar

**Display Settings Panel:**

**Objetos disponibles:**
- ✓ Surfaces (todas las superficies del drawing)
- ✓ Alignments (alineamientos)
- ✓ Corridors (corredores de carreteras)
- ✓ Pipe Networks (redes de tuberías)
- ✓ 3D Solids/Meshes (sólidos 3D de AutoCAD)

**Check/Uncheck:**
Controla qué objetos se muestran en el viewer.

**Ejemplo:**
```
☑ Surfaces
  ☑ EG (Existing Ground)
  ☑ FG (Finished Grade)
☑ Alignments
  ☑ Eje Principal
☐ Pipe Networks
  ☐ Red Alcantarillado
```

**Resultado:** Muestra EG, FG, y Eje Principal. Oculta la red de alcantarillado.

---

## 3. Navegación 3D

### 3.1 Controles de Navegación

**Orbit (Rotar):**
- **Icon:** Esfera con flechas circulares
- **Mouse:** Click y arrastra
- **Función:** Rota la cámara alrededor del modelo
- **Uso:** Inspeccionar el modelo desde diferentes ángulos

**Pan (Desplazar):**
- **Icon:** Mano
- **Mouse:** Shift + Click y arrastra
- **Función:** Desplaza la vista lateralmente
- **Uso:** Centrar diferentes áreas del modelo

**Zoom (Acercar/Alejar):**
- **Icon:** Lupa +/-
- **Mouse:** Rueda del mouse
- **Función:** Acerca o aleja la cámara
- **Uso:** Ver detalles o vista general

**Zoom Extents:**
- **Icon:** Todos los objetos en cuadro
- **Función:** Ajusta la vista para mostrar todos los objetos
- **Shortcut:** Z + Enter + E + Enter

**Fly Mode (Nuevo 2026):**
- **Icon:** Avión
- **Función:** Modo "first-person" para navegar como si caminaras/volaras
- **Controls:**
  - **W:** Adelante
  - **S:** Atrás
  - **A:** Izquierda
  - **D:** Derecha
  - **Q:** Arriba
  - **E:** Abajo
  - **Mouse:** Mirar alrededor
- **Uso:** Recorridos virtuales del proyecto (walkthrough de carretera)

![Navigation Controls](../imagenes/leccion-5-navigation-controls.png)

### 3.2 Vistas Predefinidas

**Standard Views:**
- **Top (Plan):** Vista 2D desde arriba (Z+)
- **Bottom:** Vista desde abajo (Z-)
- **Front:** Vista frontal (Y+)
- **Back:** Vista trasera (Y-)
- **Left:** Vista izquierda (X-)
- **Right:** Vista derecha (X+)
- **Isometric:** Vista isométrica SW (esquina suroeste)

**Activación:**
- **ViewCube** (cubo 3D en esquina del viewport)
- Click en cualquier cara para cambiar vista
- Click en esquinas para vistas isométricas

**Save Custom Views:**
1. Navega a la vista deseada
2. **View Tab** → **Views panel** → **Save Current View**
3. Name: "Vista Diseño Final"
4. OK

**Restore Custom View:**
- View Tab → Views dropdown → Select "Vista Diseño Final"

---

## 4. Visual Styles

### 4.1 Tipos de Visual Styles

**2D Wireframe:**
- Solo líneas (edges)
- Sin relleno de superficies
- **Uso:** Análisis técnico, ver "detrás" de objetos
- **Rendimiento:** Muy rápido

**3D Wireframe:**
- Líneas en 3D con profundidad
- Sin relleno
- **Uso:** Similar a 2D pero con perspectiva

**Conceptual:**
- Superficies con color sólido
- Sin texturas
- Edges visibles (líneas de contorno)
- **Uso:** Presentaciones preliminares, diseño conceptual
- **Rendimiento:** Moderado

**Realistic:**
- Rendering realista con luces y sombras
- Materiales con texturas (si aplicados)
- **Uso:** Presentaciones finales, visualización para clientes
- **Rendimiento:** Más lento (requiere GPU)

**Shaded:**
- Superficies sombreadas sin materiales
- Intermedio entre Conceptual y Realistic
- **Uso:** Balance entre calidad y rendimiento

![Visual Styles Comparison](../imagenes/leccion-5-visual-styles.png)

### 4.2 Aplicar Visual Styles

**Pasos:**

1. **Visual Style Selector:**
   - En 3D Model Viewer, toolbar superior
   - Dropdown "Visual Styles"

2. **Select Style:**
   - Click en "Realistic"

3. **Observe:**
   - El modelo se renderiza con luces y sombras

**Configuración de Iluminación:**
- **View Tab** → **Lights panel**
- **Default Lighting:** ✓ (usa iluminación genérica)
- **Sun & Sky:** Simula luz solar según ubicación geográfica y hora

**Ejemplo con Sun & Sky:**
1. **View Tab** → **Sun & Sky** → **Sun Status: On**
2. **Set Location:**
   - Command: `GEOGRAPHICLOCATION`
   - Selecciona tu ubicación (Ciudad, País)
   - Define latitud/longitud
3. **Set Time:**
   - View Tab → Sun Properties
   - Date: 21 Junio 2026 (solsticio de verano - máxima elevación solar)
   - Time: 12:00 PM
4. **Resultado:** El modelo se ilumina con luz solar realista para esa fecha/hora

---

## 5. Section Box - Cortes Dinámicos

### 5.1 ¿Qué es Section Box?

**Section Box** permite crear **cortes dinámicos** del modelo en cualquier dirección (X, Y, Z), revelando el interior de superficies, corridors, y pipe networks.

**Uso práctico:**
- Ver el interior de un corredor de carretera (capas de pavimento, base, sub-base)
- Inspeccionar redes de tuberías subterráneas
- Analizar cortes transversales de terreno

### 5.2 Activar Section Box

**Pasos:**

1. **3D Model Viewer activo**

2. **Section Box Control:**
   - Toolbar del viewer → **Section Box: On** (checkbox o toggle)

3. **Visualización:**
   Aparece un "box" 3D (cubo) alrededor del modelo con **handles** (controladores) en cada cara.

**Handles:**
- **Flechas en caras:** Arrastrar para mover el corte
- **Esquinas:** Redimensionar el box

![Section Box](../imagenes/leccion-5-section-box.png)

### 5.3 Crear Cortes

**Corte Vertical (Este-Oeste):**
1. Section Box activo
2. Arrastra el handle del lado **Este** hacia el **Oeste**
3. El modelo se "corta" progresivamente
4. **Uso:** Ver perfil longitudinal de carretera

**Corte Horizontal (Elevación):**
1. Arrastra el handle **superior** hacia abajo
2. El modelo se corta por elevación
3. **Uso:** Ver "plantas" a diferentes elevaciones (ej: elevación 100m)

**Corte Norte-Sur:**
1. Arrastra handle Norte hacia Sur
2. **Uso:** Secciones transversales de proyecto

**Reset Section Box:**
- Click en "Fit to Objects" - El box se ajusta nuevamente a todo el modelo

### 5.4 Casos de Uso

**Inspeccionar Corridor Layers:**
- Corridor de carretera con 5 capas (asfalto, base, sub-base, terraplén)
- Corte vertical revela cada capa con su espesor
- Útil para verificar diseño de pavimento

**Analizar Pipe Networks:**
- Red de alcantarillado subterránea
- Corte horizontal a elevación de invert muestra toda la red
- Corte vertical muestra pendientes de tuberías

**Estudiar Topografía:**
- Corte transversal de valle
- Muestra elevaciones, pendientes naturales, quebradas

---

## 6. Análisis Visual de Terreno

### 6.1 Elevation Analysis

Visualiza rangos de elevación con bandas de color.

**Activación:**

1. **3D Model Viewer activo**

2. **Select Surface:**
   - En el viewer, selecciona la superficie a analizar

3. **Analysis Display:**
   - **View Tab** → **Surface panel** → **Surface Analysis** → **Elevations**

4. **Configurar Rangos:**
   - Elevation Analysis Settings dialog:
   - **Scheme:** Selecciona esquema de color (Rainbow, Green to Red, Custom)
   - **Number of Ranges:** 10 (divide las elevaciones en 10 rangos)
   - **Min/Max Elevation:** Automático (basado en superficie)
   - **OK**

**Resultado:**
La superficie muestra bandas de color por elevación:
- **Azul oscuro:** Elevaciones bajas (0-50m)
- **Verde:** Elevaciones medias (50-100m)
- **Amarillo-Naranja:** Elevaciones altas (100-150m)
- **Rojo:** Elevaciones muy altas (150m+)

**Interpretación:**
- Identifica visualmente áreas planas vs montañosas
- Útil para seleccionar rutas de carreteras (preferencia por áreas verdes - moderadas)

![Elevation Analysis](../imagenes/leccion-5-elevation-analysis.png)

### 6.2 Slope Analysis

Visualiza rangos de pendiente con bandas de color.

**Activación:**

1. **Surface Analysis** → **Slopes**

2. **Slope Analysis Settings:**
   - **Scheme:** Green to Red
   - **Ranges:**
     - 0-5%: Verde oscuro (plano - apto para urbanización)
     - 5-10%: Verde claro (suave)
     - 10-20%: Amarillo (moderado)
     - 20-30%: Naranja (empinado)
     - 30%+: Rojo (muy empinado - requiere taludes especiales)
   - **OK**

**Resultado:**
Superficie muestra colores según pendiente.

**Aplicaciones:**
- **Planificación de subdivisiones:** Buscar áreas verdes (planas)
- **Diseño de drenaje:** Áreas rojas drenan rápidamente
- **Estabilidad de taludes:** Áreas rojas requieren análisis geotécnico

### 6.3 Watershed Analysis

Identifica cuencas hidrográficas (watersheds) y dirección de flujo.

**Activación:**
1. **Surface Analysis** → **Watersheds**
2. Especifica un "point of interest" (punto de descarga)
3. Civil 3D colorea la cuenca que drena hacia ese punto

**Uso:**
- Diseño de alcantarillado pluvial
- Análisis de escorrentía
- Planificación de sistemas de drenaje

![Slope and Watershed Analysis](../imagenes/leccion-5-slope-watershed.png)

---

## 7. Measurement Tools

### 7.1 Measure Distance

**Pasos:**

1. **3D Model Viewer → Toolbar → Measure Distance** (ícono de regla)
2. Click en **primer punto** del modelo
3. Click en **segundo punto**
4. **Tooltip dinámico** muestra:
   - Distancia 3D (slope distance)
   - Distancia horizontal (plan distance)
   - Diferencia de elevación (delta Z)

**Ejemplo:**
```
3D Distance: 125.45 m
Horizontal: 120.30 m
Vertical: 28.50 m
```

**Uso:**
- Verificar distancias entre puntos
- Calcular longitudes de tuberías
- Medir alturas de estructuras

### 7.2 Measure Elevation

**Pasos:**

1. **Measure Elevation tool**
2. Click en cualquier punto del modelo
3. Tooltip muestra elevación exacta

**Ejemplo:**
```
Elevation: 145.67 m
```

**Uso:**
- Verificar elevaciones de diseño
- Confirmar cotas de terreno

---

## 8. Exportación de Vistas 3D

### 8.1 Export Image (High Resolution)

**Pasos:**

1. **Navega a la vista deseada** en 3D Model Viewer

2. **View Tab → Export panel → Export Image**

3. **Export Image Dialog:**
   - **File Type:** PNG, JPEG, TIFF
   - **Resolution:**
     - **Screen Resolution:** Resolución actual del viewport
     - **Custom:** Define ancho x alto
     - **Recomendación:** 3840 x 2160 (4K) para presentaciones profesionales
   - **Background:** Transparent (fondo transparente) o Color (selecciona color de fondo)
   - **Anti-aliasing:** ✓ (suaviza bordes - mejor calidad)
   - **Save Location:** Browse
   - **File Name:** `Proyecto_Vista3D_Final.png`
   - **Export**

4. **Resultado:**
   Imagen de alta resolución exportada, lista para:
   - Presentaciones PowerPoint
   - Reportes PDF
   - Visualización en web

![Export Image Settings](../imagenes/leccion-5-export-image.png)

### 8.2 Export to Autodesk Viewer (Cloud)

**Novedad 2026:** Integración directa con Autodesk Viewer web.

**Pasos:**

1. **View Tab → Export panel → Publish to Autodesk Viewer**

2. **Sign In:**
   - Autodesk Account requerido (Autodesk ID)
   - Sign in

3. **Publish Settings:**
   - **Project Name:** Carretera Principal - Diseño Preliminar
   - **Description:** Vista 3D del corredor completo
   - **Visibility:** Private / Public
   - **Upload**

4. **Resultado:**
   - Modelo se sube a Autodesk Cloud
   - Recibes **URL pública** (si Public) o privada
   - Ejemplo: `https://viewer.autodesk.com/model/abc123xyz`

**Compartir:**
- Envía el URL a clientes, stakeholders
- Pueden ver el modelo 3D **sin tener Civil 3D instalado**
- **Navegación interactiva** en el browser (orbit, pan, zoom)
- Compatible con desktop, tablets, smartphones

**Limitaciones:**
- Requiere conexión a internet
- Tamaño máximo del modelo (depende de plan Autodesk)

![Autodesk Viewer Web](../imagenes/leccion-5-autodesk-viewer-web.png)

---

## 9. Integration con Rendering Externo

### 9.1 Export to Autodesk 3ds Max

Para renders fotorrealistas profesionales:

**Workflow:**

1. **Export Drawing:**
   - File → Export → FBX (Filmbox)
   - O DWG to 3ds Max

2. **Import in 3ds Max:**
   - Open 3ds Max
   - Import FBX
   - Modelo Civil 3D aparece con geometría completa

3. **Apply Materials & Lighting:**
   - Añade texturas realistas (asfalto, concreto, vegetación)
   - Configura luces (HDRI, sun system)

4. **Render:**
   - V-Ray o Arnold rendering
   - Calidad fotorrealista para marketing de proyectos

### 9.2 Export to Lumion

**Lumion** es software de visualización arquitectónica popular.

**Workflow:**

1. **Export Collada (.dae):**
   - Civil 3D → Export → Collada

2. **Import in Lumion:**
   - Lumion → Import Model → Select .dae

3. **Add Environment:**
   - Trees, cars, people, sky
   - Render in real-time

**Uso:** Presentaciones impactantes para clientes no técnicos.

---

## Ejercicio Práctico 5

**Objetivo:** Explorar un modelo 3D con el nuevo 3D Model Viewer, crear cortes dinámicos, y exportar vistas.

### Parte A: Preparar Modelo

**Tareas:**

1. **Usar Drawing con Superficie:**
   - Open el drawing `Topografia/Topo_Base.dwg` del Ejercicio 4
   - O cualquier drawing con al menos una superficie

2. **Verify Objects:**
   - Prospector → Surfaces → Debe tener al menos una superficie

### Parte B: Activar 3D Model Viewer

**Tareas:**

3. **Open Viewer:**
   - **View Tab** → **3D Model Viewer**

4. **Display Settings:**
   - Verify que la superficie está ✓ checked (visible)

5. **Visual Style:**
   - Select **Realistic**

6. **Navigate:**
   - **Orbit:** Rota el modelo 360°
   - **Zoom:** Acerca y aleja
   - **Pan:** Centra diferentes áreas

### Parte C: Section Box

**Tareas:**

7. **Activate Section Box:**
   - Toolbar del viewer → **Section Box: On**

8. **Create Vertical Cut:**
   - Arrastra handle Este hacia Oeste
   - Observa cómo se revela el interior de la superficie (triangulación)

9. **Create Horizontal Cut:**
   - Arrastra handle superior hacia abajo
   - Corta por elevación
   - Encuentra una elevación específica (ej: 100m)

10. **Screenshot:**
    - Toma screenshot del corte (Print Screen o Snipping Tool)

### Parte D: Analysis

**Tareas:**

11. **Elevation Analysis:**
    - View Tab → Surface Analysis → Elevations
    - Scheme: Rainbow
    - Ranges: 10
    - OK

12. **Observe:**
    - Superficie muestra bandas de color por elevación

13. **Slope Analysis:**
    - Surface Analysis → Slopes
    - Scheme: Green to Red
    - Ranges: 0-5%, 5-10%, 10-20%, 20-30%, 30%+
    - OK

14. **Observe:**
    - Identifica áreas planas (verde) vs empinadas (rojo)

### Parte E: Export

**Tareas:**

15. **Navigate to Best View:**
    - Isometric SW view
    - Zoom to Extents

16. **Export Image:**
    - View Tab → Export Image
    - Resolution: 1920 x 1080 (Full HD)
    - File Type: PNG
    - Background: White
    - Anti-aliasing: ✓
    - Save As: `Modelo3D_Ejercicio5.png`
    - Export

17. **Verify:**
    - Abre la imagen exportada
    - Debe mostrar el modelo con buena calidad

**Entregable:**
- Screenshot del Section Box activo con corte vertical
- Screenshot del Slope Analysis (colores por pendiente)
- Imagen exportada `Modelo3D_Ejercicio5.png`

![Ejercicio 5 - 3D Viewer](../imagenes/leccion-5-ejercicio-viewer.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la principal ventaja del nuevo 3D Model Viewer (2026) sobre el Object Viewer clásico?

**Pregunta 2:** ¿Qué herramienta usas para crear cortes dinámicos del modelo y ver su interior?

**Pregunta 3:** Menciona 3 tipos de análisis visual que puedes aplicar a superficies en el 3D Model Viewer.

**Pregunta 4:** Si quieres compartir un modelo 3D interactivo con un cliente que NO tiene Civil 3D, ¿qué método de exportación usarías?

**Pregunta 5:** En Slope Analysis, ¿qué color representa áreas con pendiente mayor a 30% (muy empinadas)?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 Help - "3D Model Viewer"
- Civil 3D 2026 - Visualization Tools Guide

**Videos:**
- Autodesk Civil 3D 2026 - 3D Model Viewer Walkthrough (YouTube)
- Creating Stunning Visualizations in Civil 3D (Webinar)

**Software complementario:**
- Autodesk 3ds Max (rendering fotorrealista)
- Lumion (visualización arquitectónica)
- Enscape (rendering en tiempo real)

---

## Resumen

En esta lección aprendiste:

✅ Diferencias entre Object Viewer clásico (un objeto) y 3D Model Viewer 2026 (múltiples objetos)
✅ Activar y configurar 3D Model Viewer
✅ Controles de navegación 3D (Orbit, Pan, Zoom, Fly mode)
✅ Visual Styles (2D Wireframe, Conceptual, Realistic) y configuración de iluminación
✅ Section Box para crear cortes dinámicos y revelar interiores de modelos
✅ Análisis visual de terreno (Elevation, Slope, Watershed analysis)
✅ Measurement tools (distancia, elevación)
✅ Exportar imágenes de alta resolución (hasta 4K)
✅ Integración con Autodesk Viewer para compartir modelos web interactivos

---

## Conclusión del Módulo 1

**¡Felicitaciones!** Has completado el **Módulo 1: Introducción a Civil 3D 2026**.

**Resumen del módulo:**

En las 5 lecciones de este módulo aprendiste:

1. **Lección 1:** Interfaz de Civil 3D, Ribbon especializado, Toolspace, diferencias con AutoCAD
2. **Lección 2:** Configuración de proyectos, Drawing Settings, unidades, sistemas de coordenadas (UTM)
3. **Lección 3:** Styles (Object, Label, Table), templates corporativos, importar/exportar styles
4. **Lección 4:** Data Shortcuts para colaboración multi-usuario, Project Explorer mejorado (2026)
5. **Lección 5:** 3D Model Viewer (2026), Section Box, análisis visual, exportación

**Estás preparado para:**
- Configurar proyectos Civil 3D profesionalmente
- Gestionar styles y templates corporativos
- Trabajar colaborativamente con Data Shortcuts
- Visualizar modelos 3D con herramientas avanzadas

**Próximo Módulo:**

**Módulo 2: Puntos y Superficies Topográficas**
- Puntos COGO y Point Groups
- Importar levantamientos topográficos (CSV, LandXML)
- Crear superficies TIN
- Análisis de terreno
- Curvas de nivel y etiquetado
- Surface workflows mejorados (2026)

---

**Tiempo total Módulo 1:** 5 horas
**Práctica recomendada:** 3 horas adicionales de ejercicios
