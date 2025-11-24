# Lecciones 19-24: Visualización y Renderizado - Resumen Técnico Completo

## Lección 19: Visual Styles y Materiales

### Estilos Visuales

**Comando:** `VSCURRENT`

Opciones principales:
- **2D Wireframe:** Solo líneas, rápido para edición
- **Wireframe:** 3D con ejes UCS visible
- **Hidden:** Líneas ocultas removidas
- **Realistic:** Materiales y texturas visibles
- **Shaded:** Sombreado sin texturas
- **Conceptual:** Estilo ilustrativo

**Cambio rápido:**
```
Ribbon: View tab → Visual Styles panel → selecciona estilo
O clic en ViewCube → menú desplegable de estilos
```

### Materiales

**Comando:** `MATERIALS`

Abre Materials Browser con biblioteca Autodesk.

**Aplicar material:**
1. MATERIALS → busca material (ej: "Concrete", "Glass", "Metal")
2. Arrastra material sobre objeto 3D
3. O selecciona objeto → clic derecho en material → "Assign to Selection"

**Categorías de materiales:**
- Concrete (Hormigón)
- Glass (Vidrio)
- Masonry (Mampostería)
- Metal (Metales)
- Paint (Pintura)
- Plastic (Plástico)
- Stone (Piedra)
- Wood (Madera)

### Ajustar Mapeo de Textura

**Comando:** `MATERIALMAP`

```
Select faces or objects: (selecciona objeto)
Enter mapping type [Box/Planar/Spherical/Cylindrical/Copy mapping to] <Box>:
```

**Tipos de mapeo:**
- **Box:** Para objetos rectangulares
- **Planar:** Para superficies planas
- **Cylindrical:** Para cilindros
- **Spherical:** Para esferas

---

## Lección 20: Luces (Point, Spot, Distant, Sun)

### Point Light (Luz Puntual)

Luz omnidireccional (como bombilla).

```
Command: POINTLIGHT
Specify source location <0,0,0>: (ubicación de la luz)
Enter light intensity (0-max) <1500>: 2000
```

**Parámetros:**
- Intensity: Candelas (cd) o Lux
- Color: RGB o temperatura Kelvin
- Shadow: On/Off
- Attenuation: Decay con distancia

### Spotlight (Foco)

Luz direccional cónica.

```
Command: SPOTLIGHT
Specify source location <0,0,0>: (posición del foco)
Specify target location <0,0,-10>: (hacia donde apunta)
Enter light intensity <1500>: 3000
```

**Parámetros adicionales:**
- Hotspot angle: Ángulo de luz concentrada (default: 45°)
- Falloff angle: Ángulo de luz difusa (default: 50°)

### Distant Light (Luz Paralela)

Luz direccional paralela (simula sol lejano).

```
Command: DISTANTLIGHT
Specify light direction FROM <0,0,0> or [Vector]: (origen de dirección)
Specify light direction TO <1,1,1>: (hacia donde apunta)
Enter light intensity <1500>: 1000
```

### Sun Light (Luz Solar)

Luz solar con ubicación geográfica y hora del día.

**Activar sol:**
```
Command: SUNPROPERTIES
Sun status: On
Intensity factor: 1.0 (ajustar según necesidad)
```

**Configurar ubicación geográfica:**
```
Command: GEOGRAPHICLOCATION
Enter location type [From Map/From File/Angle]: From Map
(Selecciona ubicación en mapa)
```

**Configurar fecha y hora:**
```
SUNPROPERTIES → Date: (selecciona fecha)
               → Time: (selecciona hora del día)
```

**Ángulo de azimut y altitud se calculan automáticamente.**

### Administrar Luces

**Comando:** `LIGHTLIST`

Muestra todas las luces con controles:
- On/Off individual
- Intensidad
- Color
- Sombras

---

## Lección 21: Cámaras y Walkthroughs

### Crear Cámara

**Comando:** `CAMERA`

```
Specify camera location: (posición de la cámara)
Specify target location: (hacia donde mira)
```

**Propiedades de cámara:**
- **Lens length:** 35mm (gran angular), 50mm (normal), 100mm (teleobjetivo)
- **Field of view:** Calculado automáticamente desde lens length
- **Clipping planes:** Near/Far para recortar geometría

**Activar vista de cámara:**
Doble clic en icono de cámara, o:
```
Ribbon: Visualize tab → Camera → selecciona cámara creada
```

### Walkthrough (Recorrido)

**Comando:** `ANIPATH`

Crea animación siguiendo trayectoria.

```
Command: ANIPATH
Select path curve: (selecciona PLINE o SPLINE de trayectoria)
Select target curve or [Point/Path]: P (punto fijo)
Specify target point: (punto central hacia donde mira siempre)
```

**Configurar animación:**
- Frame rate: 30 fps (estándar)
- Number of frames: 300 (10 segundos a 30fps)
- Format: AVI, MOV, WMV

**Generar animación:**
```
Ribbon: Render tab → Animations panel → Render Animation
```

### ShowMotion

**Comando:** `NAVSMOTION`

Crea presentación con múltiples vistas guardadas.

1. Guarda vistas importantes (VIEW)
2. NAVSMOTION → New Shot para cada vista
3. Reproduce secuencia para presentación

---

## Lección 22: Render Settings y Background

### Configuración Básica de Render

**Comando:** `RPREF` (Render Preferences)

O Ribbon: Render tab → Render panel → Render Settings

**Parámetros clave:**
- **Destination:** Render Window (pantalla) o File (archivo directo)
- **Output size:** Resolución en pixels
  - Draft: 800×600
  - Medium: 1920×1080 (Full HD)
  - High: 3840×2160 (4K)
- **Exposure:** Controla brillo general
  - Type: Automatic, Logarithmic, Physical
- **Sampling:** Calidad de antialiasing
  - Min samples: 1/4 (draft) a 1 (high)
  - Max samples: 1 (draft) a 16+ (high)

### Configurar Fondo (Background)

**Comando:** `RENDERENVIRONMENT`

Opciones de fondo:
- **Solid Color:** Color sólido
- **Gradient:** Degradado (2 o 3 colores)
- **Image:** Imagen de fondo
- **Sun & Sky:** Cielo procedural con sol

**Ejemplo - Cielo degradado:**
```
RENDERENVIRONMENT
Environment type: Gradient
Top color: Azul claro (RGB: 135, 206, 250)
Middle color: Azul medio (RGB: 70, 130, 180)
Bottom color: Azul oscuro (RGB: 25, 25, 112)
```

### Render de Región

**Comando:** `RENDERCROP`

Renderiza solo área específica (más rápido para pruebas).

```
RENDERCROP
Specify first corner: (esquina 1 de área)
Specify opposite corner: (esquina 2)
RENDER (renderiza solo esa región)
```

---

## Lección 23: Rendering Avanzado

### Global Illumination

Simulación de luz rebotada (iluminación indirecta).

**Activar:**
```
RPREF → Advanced Render Settings → Global Illumination: On
```

**Parámetros:**
- Photons/sample: 500-5000 (más = mejor calidad, más lento)
- Use Radius: 10% del tamaño de escena

### Final Gather

Refinamiento de global illumination.

**Activar:**
```
RPREF → Final Gather: On
Mode: Auto
Rays: 500-5000
```

### Ambient Occlusion

Sombras de contacto sutiles en intersecciones.

**Activar:**
```
VSCURRENT → selecciona estilo
Edit → Face Settings → Ambient Occlusion: On
```

### Depth of Field

Desenfoque de áreas fuera de foco (como fotografía).

**Configurar en cámara:**
```
Selecciona cámara → Properties
Depth of field: On
F-stop: 5.6 (bajo = más desenfoque, alto = menos)
Focal distance: Distancia al plano de enfoque
```

### Optimización de Render

**Técnicas:**
1. **Render por capas:** Separa objetos en layers, renderiza selectivamente
2. **Bounding box:** Sustituye objetos lejanos con cajas simples
3. **Level of detail:** Modelos simplificados para distancia
4. **Render nocturno:** Configura renders largos para ejecutar de noche

**Batch Rendering:**
```
Crea múltiples cámaras
Comando: RENDER → selecciona todas las cámaras
AutoCAD renderiza secuencialmente y guarda
```

---

## Lección 24: Exportación y Documentación 3D

### Exportar Imagen Renderizada

**Durante render:**
Render Window → File → Save
Formatos: JPG, PNG, TIF, BMP

**Desde modelo:**
```
JPGOUT: Exporta vista actual a JPG
PNGOUT: Exporta a PNG (soporta transparencia)
TIFOUT: Exporta a TIF (calidad máxima)
```

**Recomendaciones de formato:**
- **JPG:** Presentaciones, web (comprimido)
- **PNG:** Presentaciones con transparencia
- **TIF:** Impresión de alta calidad (sin compresión)

### Exportar Modelo 3D Navegable

**Comando:** `3DDWF`

Exporta modelo 3D que clientes pueden navegar con Autodesk Design Review (gratis).

```
3DDWF
Specify filename: Proyecto_3D.dwf
```

Cliente abre .dwf con Design Review y puede:
- Rotar modelo
- Zoom in/out
- Activar/desactivar capas
- Medir distancias

### Crear Presentación con ShowMotion

**Workflow:**
1. Guarda 5-10 vistas clave con VIEW
2. Aplica materiales y luces
3. NAVSMOTION → crea shots para cada vista
4. Configura transiciones (duración, tipo)
5. Reproduce presentación
6. Exporta a video si necesario

### Layout para Documentación

**Combinar renders + planos 2D:**
1. Layout tab → Insert → Raster Image → inserta render
2. Viewport 2D con planta arquitectónica
3. Anotaciones y título
4. Plot to PDF para presentación completa

### Fotomontaje

**Técnica:**
1. Render con fondo transparente (PNG)
2. Fotografía real del sitio
3. Composición en software externo (Photoshop, GIMP)
4. Ajuste de iluminación y color para integración

---

## Ejercicios Rápidos por Lección

### Ejercicio Lección 19: Materiales en Habitación
1. Modelo simple de habitación (muros, piso, techo)
2. Aplicar materiales:
   - Muros: Concrete.Gray
   - Piso: Wood.Cherry
   - Techo: Paint.White
3. Visual Style: Realistic
4. Screenshot

**Entregable:** `Ejercicio_19_Materiales.dwg`

---

### Ejercicio Lección 20: Iluminación de Estudio
1. Modelo de producto (ej: botella)
2. Configurar 3-point lighting:
   - SPOTLIGHT como key light (intensity: 3000)
   - POINTLIGHT como fill light (intensity: 1000)
   - SPOTLIGHT como back light (intensity: 2000)
3. Ajustar posiciones hasta resultado óptimo
4. Render draft

**Entregable:** `Ejercicio_20_Luces.dwg` + render PNG

---

### Ejercicio Lección 21: Cámara Arquitectónica
1. Modelo de edificio simple
2. Crear 3 cámaras:
   - Vista fachada (lens: 35mm)
   - Vista aérea (lens: 50mm)
   - Vista detalle entrada (lens: 85mm)
3. Guardar cada vista
4. ShowMotion con transiciones

**Entregable:** `Ejercicio_21_Camaras.dwg`

---

### Ejercicio Lección 22: Render Exterior con Cielo
1. Modelo arquitectónico exterior
2. Activar SUNPROPERTIES
3. Configurar ubicación geográfica (tu ciudad)
4. Hora: 15:00 (luz de tarde)
5. Background: Sun & Sky
6. Render Medium quality

**Entregable:** `Ejercicio_22_Exterior.png` (1920×1080)

---

### Ejercicio Lección 23: Render Interior con GI
1. Modelo de interior (sala con ventanas)
2. Aplicar materiales realistas
3. Luces artificiales (Point Lights en techo)
4. Activar Global Illumination y Final Gather
5. Render High quality (esperar tiempo de proceso)

**Entregable:** `Ejercicio_23_Interior_GI.png` (alta resolución)

---

### Ejercicio Lección 24: Presentación Completa
1. Modelo arquitectónico completo
2. Generar 4 renders:
   - Fachada principal (día)
   - Vista aérea
   - Interior sala principal
   - Detalle de entrada
3. Exportar a PNG
4. Crear Layout con los 4 renders + título
5. Plot to PDF

**Entregable:** `Ejercicio_24_Presentacion.pdf`

---

## Proyecto Final: Presentación Arquitectónica Fotorrealista

**Tiempo:** 2-3 horas | **Dificultad:** Avanzada

### Objetivo

Crear presentación profesional de vivienda unifamiliar con múltiples renders de calidad fotorrealista.

### Especificaciones del Proyecto

**Modelo base:**
- Vivienda de 2 pisos (120m² por piso)
- 3 dormitorios, 2 baños, sala, comedor, cocina
- Terreno de 300m²
- Elementos: Muros, losas, techo, ventanas, puertas, escalera

### Entregables Requeridos

1. **Render Fachada Principal (Día):**
   - Resolución: 3840×2160 (4K)
   - Iluminación: Sol a las 14:00, ubicación geográfica real
   - Materiales: Concreto, vidrio, madera en puertas
   - Background: Sun & Sky
   - Vegetación básica (árboles, pasto)

2. **Render Vista Aérea:**
   - Resolución: 1920×1080
   - Ángulo: 45° desde arriba
   - Muestra contexto del terreno
   - Cámara lens: 35mm (gran angular)

3. **Render Interior Sala (Día Natural):**
   - Resolución: 1920×1080
   - Iluminación: Natural por ventanas + Global Illumination
   - Materiales: Piso madera, paredes pintadas, muebles básicos
   - Depth of field activado (foco en centro de sala)

4. **Render Interior Sala (Noche):**
   - Misma composición que render día
   - Iluminación: Point Lights en techo (warm white)
   - Exterior oscuro
   - Contraste dramático

5. **Walkthrough Exterior:**
   - Duración: 15 segundos (450 frames a 30fps)
   - Trayectoria: Desde entrada del terreno hasta puerta principal
   - Exportar a video AVI o WMV

6. **Presentación Final (PDF):**
   - Layout A3 horizontal
   - 4 renders principales (fachada, aérea, interior día, interior noche)
   - Título del proyecto
   - Especificaciones técnicas básicas
   - Logo (opcional)

### Procedimiento Recomendado

**Fase 1: Preparación del Modelo (30 min)**
1. Verificar geometría completa y sin errores
2. Organizar por layers (muros, pisos, techos, ventanas, puertas)
3. Limpiar objetos innecesarios

**Fase 2: Materiales (30 min)**
4. Muros exteriores: Concrete.Precast.Smooth
5. Muros interiores: Paint.White
6. Pisos: Wood.Cherry o Ceramic.Tile
7. Ventanas: Glass.Clear
8. Techo: Clay.Roof.Tiles
9. Ajustar mapeo de texturas (MATERIALMAP)

**Fase 3: Iluminación (30 min)**
10. Configurar SUNPROPERTIES (ubicación + hora)
11. Interior: 6-8 POINTLIGHT en techo (intensity: 800-1200)
12. Ajustar intensidades hasta balance correcto

**Fase 4: Cámaras (20 min)**
13. Cámara fachada: Lens 50mm, altura ojos humano
14. Cámara aérea: Lens 35mm, 45° elevación
15. Cámara interior sala: Lens 35mm, altura 1.5m
16. Guardar cada vista con VIEW

**Fase 5: Renders (60-90 min)**
17. Render fachada: High quality, esperar ~30-40min
18. Render aérea: Medium quality, ~10min
19. Render interior día: High + GI + FG, ~30-40min
20. Render interior noche: High + GI + FG, ~30-40min
21. Guardar cada render como PNG

**Fase 6: Walkthrough (opcional, 15 min)**
22. Dibujar trayectoria con 3DPOLY
23. ANIPATH → configurar 450 frames
24. Render animation (puede tardar horas - ejecutar de noche)

**Fase 7: Documentación (20 min)**
25. Layout A3
26. Insert raster images (renders)
27. Títulos y anotaciones
28. Plot to PDF

### Criterios de Evaluación

| Criterio | Puntos |
|---|---|
| Calidad de modelado (geometría limpia) | 15 |
| Materiales realistas y bien aplicados | 20 |
| Iluminación correcta (día y noche) | 25 |
| Composición de cámaras | 15 |
| Calidad técnica de renders (resolución, AA) | 15 |
| Presentación final (layout, documentación) | 10 |
| **Total** | **100** |

### Bonus (hasta +20 puntos)
- Vegetación y entorno detallado (+5)
- Muebles interiores modelados (+5)
- Walkthrough de alta calidad (+5)
- Fotomontaje con fotografía real (+5)

---

## Conclusión del Módulo 4 y del Curso Completo

¡Felicitaciones! Has completado el **Curso Completo de AutoCAD Tridimensional 3D 2026**.

### Habilidades Adquiridas

**Módulo 1:** Fundamentos de modelado 3D, navegación, primitivas
**Módulo 2:** Operaciones avanzadas de sólidos, modelado constructivo
**Módulo 3:** Superficies NURBS y formas orgánicas complejas
**Módulo 4:** Visualización fotorrealista y presentación profesional

### Aplicaciones Profesionales

Estás ahora capacitado para:
- Modelar proyectos arquitectónicos completos en 3D
- Diseñar piezas mecánicas complejas
- Crear superficies orgánicas para diseño industrial
- Generar renders fotorrealistas para presentación a clientes
- Producir documentación técnica desde modelos 3D

### Próximos Pasos

1. **Practica regularmente:** Modela proyectos personales
2. **Explora BIM:** Considera migrar a Revit para arquitectura BIM
3. **Especialízate:** Civil 3D para ingeniería civil, Inventor para mecánica
4. **Certificación:** Prepara examen Autodesk Certified Professional AutoCAD
5. **Portfolio:** Construye portafolio de renders para oportunidades profesionales

---

**Curso diseñado por:** DISTMAH ATC (Authorized Training Center Autodesk)
**Versión:** AutoCAD 2026
**Duración total:** 24 horas (4 módulos × 6 horas)
**Nivel:** Intermedio a Avanzado
**Certificación:** Disponible al completar curso + examen

**¡Éxito en tu carrera profesional con AutoCAD 3D!**
