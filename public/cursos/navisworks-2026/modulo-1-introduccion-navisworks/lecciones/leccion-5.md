# Lección 5: Visualización y Apariencia

**Duración:** 60 minutos
**Nivel:** Intermedio/Avanzado
**Módulo:** 1 - Introducción a Navisworks 2026
**Prerequisitos:** Lecciones 1-4 completadas, familiaridad con navegación y selection sets

## Objetivos de Aprendizaje

✅ Dominar los display styles de Navisworks (Shaded, Realistic, Presentation, Wireframe, Hidden Line) para diferentes propósitos de visualización desde análisis técnico hasta presentaciones a clientes

✅ Configurar sistemas de iluminación avanzados (Scene Lights, Headlamp, Sunlight con geolocalización) para renderizado realista y presentaciones profesionales de proyectos arquitectónicos e infraestructura

✅ Aplicar materiales y texturas de la biblioteca Presenter para visualizaciones fotorrealísticas, configurando propiedades de reflexión, rugosidad y bump mapping

✅ Optimizar render settings (anti-aliasing, ambient occlusion, reflections, shadows) balanceando calidad visual y performance en modelos federados complejos de 100,000+ elementos

✅ Configurar backgrounds profesionales (solid color, gradient, image, HDRI) y efectos atmosféricos para contexto visual y presentaciones de alto impacto a stakeholders

## Introducción

La capacidad de visualizar modelos BIM no es solo técnica, es estratégica. Un coordinador necesita display styles técnicos (wireframe para análisis de geometría, shaded para clash detection) y estilos de presentación (realistic con iluminación, materiales y sombras para aprobaciones de diseño). La diferencia entre un modelo "técnicamente correcto" y una presentación que gana aprobación de cliente es la visualización profesional.

Navisworks 2026 combina velocidad de navegación en tiempo real con capacidades de renderizado de alta calidad. Puede manejar modelos de 5 millones de elementos con navegación fluida en display style Shaded, y al cambiar a Realistic con materiales y sombras, transforma ese modelo técnico en visualización arquitectónica convincente sin exportar a software de rendering externo. Esta versatilidad hace que Navisworks sea único: coordinación técnica y presentación a clientes en una sola plataforma.

Los sistemas de iluminación en Navisworks incluyen headlamp (luz de cámara para análisis técnico), scene lights (luces posicionadas manualmente para highlighting), y sunlight con geolocalización real (simulate luz solar según ubicación geográfica del proyecto y hora del día). La configuración correcta de iluminación transforma modelos planos en visualizaciones tridimensionales con profundidad y realismo.

Esta lección prepara para presentaciones profesionales a clientes, design reviews con stakeholders, y marketing de proyectos. Las habilidades de visualización complementan las capacidades técnicas de coordinación BIM.

## 1. Display Styles: Estilos de Visualización

Los display styles controlan cómo se renderizan los objetos en el scene view. Cada estilo tiene propósitos específicos en el workflow BIM.

![Display Styles Overview](../imagenes/leccion-5-display-styles.png)

### 1.1 Acceder a Display Styles

**Método 1 - Viewpoint Tab:**
- Viewpoint tab > Display Style panel
- Botones para estilos comunes: Shaded, Realistic, Presentation, Wireframe, Hidden Line

**Método 2 - Quick Access Toolbar:**
- Personalizar QAT para incluir Display Style dropdown
- Acceso instantáneo sin cambiar tabs

**Método 3 - Keyboard Shortcuts:**
- **F5**: Shaded (default, más usado)
- **F6**: Shaded with Edges
- **F7**: Wireframe
- **Alt+1**: Full Render with Shadows (Realistic)

### 1.2 Display Style: Shaded (Default)

**Características:**
- Superficies sólidas con colores/materiales básicos
- Sin texturas detalladas
- Sin sombras calculadas
- Iluminación básica (headlamp)
- Rendering MÁS RÁPIDO

**Performance:**
- Excelente en modelos grandes (5M+ elementos)
- Navegación en tiempo real fluida
- Uso mínimo de GPU

**Uso recomendado:**
- **Coordinación diaria**: Navegación rápida por modelos federados
- **Clash detection**: Identificación visual de interferencias sin distracción de detalles
- **Selection de objetos**: Selección precisa sin rendering complejo
- **Análisis de geometría**: Verificación de formas y volúmenes

**Configuración:**
- Viewpoint tab > Display Style > Shaded
- Options:
  - **Smooth Shading**: Suaviza transiciones entre faces (recomendado ON)
  - **Display Edges**: Muestra aristas de objetos (OFF para shaded puro, ON para "Shaded with Edges")

**Cuándo usar:**
- 90% del tiempo de coordinación técnica
- Siempre que performance sea prioridad sobre estética

### 1.3 Display Style: Shaded with Edges

**Características:**
- Superficies sólidas + aristas visibles
- Combina claridad de formas con definición de edges
- Ligeramente más lento que Shaded puro

**Uso recomendado:**
- **Análisis de detalles constructivos**: Edges ayudan a distinguir elementos adyacentes
- **Verificación de conexiones**: Identificar dónde elementos se tocan o separan
- **Modelos con geometría compleja**: Edges definen formas complejas mejor que shading solo

**Configuración:**
- Viewpoint tab > Display Style > Shaded
- Activar "Display Edges"
- Edge Color: Negro (default) o custom según contraste deseado
- Edge Weight: 1-3 pixels (1 para sutileza, 3 para énfasis)

### 1.4 Display Style: Realistic

**Características:**
- Materiales y texturas completas aplicadas
- Iluminación avanzada (shadows, reflections)
- Ambient occlusion (sombras sutiles en esquinas/grietas)
- Rendering de calidad media-alta
- Performance: Media (depende de complejidad de materiales y luces)

**Efectos visuales incluidos:**
- **Materials**: Texturas fotorrealísticas (concreto, vidrio, metal, madera)
- **Reflections**: Superficies reflectantes (vidrio, metal pulido, agua)
- **Shadows**: Sombras calculadas de Scene Lights y Sunlight
- **Ambient Occlusion**: Sombras de contacto en esquinas y grietas (profundidad)
- **Anti-aliasing**: Suavizado de aristas para imagen limpia

**Uso recomendado:**
- **Presentaciones a clientes**: Visualización convincente del proyecto
- **Design reviews**: Evaluación estética de propuestas arquitectónicas
- **Marketing**: Imágenes para brochures, sitios web, presentaciones a inversionistas
- **Aprobaciones de diseño**: Mostrar materiales y acabados reales

**Configuración:**
- Viewpoint tab > Display Style > Realistic
- Quality Settings (Viewpoint tab > Display Style panel > Display Style Options):
  - **Render Quality**: Low/Medium/High/Ultra (compromiso performance vs calidad)
  - **Texture Resolution**: Calidad de texturas (512px/1024px/2048px)
  - **Shadow Quality**: Low/Medium/High
  - **Reflection Quality**: Off/Low/Medium/High

**Performance tips:**
- Usar Realistic solo para viewpoints específicos de presentación
- Navegar en Shaded, cambiar a Realistic para captura de vistas finales
- En modelos >2M elementos, considerar Realistic solo en secciones aisladas

### 1.5 Display Style: Presentation

**Características:**
- Variante de Realistic optimizada para presentaciones
- Enfatiza materiales y texturas sobre precisión técnica
- Suavizado agresivo (menos "técnico", más "arquitectónico")
- Colores más saturados y vibrantes

**Diferencias vs Realistic:**
- Presentation: Estética optimizada, colores vivos, suavizado agresivo
- Realistic: Balance entre precisión técnica y estética

**Uso recomendado:**
- **Presentaciones a público no técnico**: Stakeholders, gobierno, comunidad
- **Renders para marketing**: Materiales promocionales donde estética > precisión
- **Fly-throughs y animaciones**: Videos de recorrido virtual

**Configuración:**
- Viewpoint tab > Display Style > Presentation
- Similar a Realistic pero con postprocessing adicional para "look" arquitectónico

### 1.6 Display Style: Wireframe

**Características:**
- Solo aristas, sin superficies
- Modelo completamente transparente
- Ver a través de objetos

**Uso recomendado:**
- **Análisis de geometría compleja**: Ver estructura interna sin oclusión
- **Verificación de superposición**: Identificar elementos superpuestos exactamente en mismo espacio
- **Análisis de nesting**: Ver objetos dentro de otros objetos (MEP dentro de muros)
- **Debug de modelos**: Identificar geometría corrupta o duplicada

**Configuración:**
- Viewpoint tab > Display Style > Wireframe
- Edge Weight: Ajustar grosor de líneas
- Edge Color: Por material/layer o color uniforme

**Limitaciones:**
- Visualmente confuso en modelos muy densos (millones de edges)
- No recomendado para presentaciones (solo análisis técnico)

### 1.7 Display Style: Hidden Line

**Características:**
- Wireframe pero con oclusión: solo aristas visibles desde viewpoint
- Aristas detrás de objetos ocultas
- Aspecto técnico "engineering drawing"

**Uso recomendado:**
- **Documentación técnica**: Capturas que parecen planos técnicos
- **Análisis dimensional**: Verificación de dimensiones sin distracción de materiales
- **Impresión**: Drawings en blanco y negro para documentación

**Configuración:**
- Viewpoint tab > Display Style > Hidden Line
- Background: Blanco para look de plano técnico
- Edge Color: Negro para máximo contraste

### 1.8 Comparación de Display Styles por Uso

| Display Style | Performance | Calidad Visual | Uso Principal |
|---------------|-------------|----------------|---------------|
| **Shaded** | Excelente (100%) | Básica | Coordinación diaria, clash detection |
| **Shaded+Edges** | Muy buena (90%) | Básica+ | Análisis detallado, conexiones |
| **Realistic** | Media (40-70%) | Alta | Presentaciones a clientes, design reviews |
| **Presentation** | Media (40-70%) | Muy alta | Marketing, presentaciones públicas |
| **Wireframe** | Excelente (100%) | N/A técnico | Análisis de geometría, debug |
| **Hidden Line** | Buena (80%) | N/A técnico | Documentación técnica, planos |

**Workflow profesional típico:**
1. **Coordinación técnica (80% del tiempo)**: Shaded o Shaded+Edges
2. **Análisis puntual (10%)**: Wireframe o Hidden Line según necesidad
3. **Presentaciones (10%)**: Realistic o Presentation con configuración full quality

## 2. Sistemas de Iluminación

La iluminación transforma modelos planos en visualizaciones tridimensionales con profundidad, sombras y realismo.

![Lighting Systems](../imagenes/leccion-5-lighting-systems.png)

### 2.1 Headlamp (Luz de Cámara)

**Función:**
Luz fija a la cámara/viewpoint, siempre ilumina lo que estás viendo.

**Características:**
- Siempre encendida por default
- Dirección: Desde el punto de vista hacia el modelo
- Intensidad: Ajustable
- Sin sombras (luz uniforme)

**Uso:**
- **Coordinación técnica**: Iluminación uniforme sin sombras para análisis claro
- **Navegación**: Asegura que todo sea visible sin importar ángulo de vista
- **Default para Shaded display**: Combinación estándar

**Configuración:**
- Viewpoint tab > Lighting panel > Headlamp
- Intensity: 0-100% (default 100%)
- Disable: Apagar para usar solo Scene Lights o Sunlight

**Cuándo desactivar:**
- Al usar Scene Lights o Sunlight para rendering realista (headlamp crea iluminación "artificial" que reduce realismo)

### 2.2 Scene Lights (Luces Posicionadas)

**Función:**
Luces colocadas manualmente en el modelo para iluminación dramática, highlighting, o simulación de fixtures reales.

**Tipos de Scene Lights:**

**Point Light (Luz Puntual):**
- Emite luz en todas direcciones desde un punto (como bombilla)
- Útil para: Simular fixtures de iluminación interior, lámparas de escritorio

**Spot Light (Luz Direccional):**
- Emite luz en cono direccional (como reflector)
- Parámetros: Ángulo de cono, dirección, intensidad
- Útil para: Highlighting de elementos específicos, luces de escenario, iluminación de fachadas

**Directional Light (Luz Paralela):**
- Rayos de luz paralelos (como luz solar lejana)
- No tiene posición, solo dirección
- Útil para: Iluminación general, simular luz solar cuando sunlight no es adecuado

**Crear Scene Light:**

1. **Activar Scene Lights:**
   - Viewpoint tab > Lighting panel > Scene Lights > Enable

2. **Add Light:**
   - Lighting panel > Add Light
   - Seleccionar tipo: Point/Spot/Directional

3. **Position Light:**
   - **Point/Spot**: Click en scene para colocar posición
   - **Directional**: Click para definir dirección
   - Adjust usando gizmos de transformación

4. **Configure Properties:**
   - **Intensity**: Brillo (0-1000%)
   - **Color**: RGB color de luz (blanco cálido para interior, blanco frío para exterior)
   - **Falloff** (Point/Spot): Distancia de atenuación de luz
   - **Cone Angle** (Spot): Ancho del cono de luz
   - **Cast Shadows**: Enable para sombras (impacto en performance)

**Uso estratégico de Scene Lights:**

**Ejemplo 1 - Iluminación de Interior:**
- Colocar Point Lights en posiciones de fixtures de iluminación real
- Color: Blanco cálido (RGB 255, 244, 214)
- Intensity: 80-120% según ambiente
- Resultado: Iluminación interior realista

**Ejemplo 2 - Highlighting de Feature Arquitectónico:**
- Spot Light apuntando a fachada principal
- Intensity: 200%
- Cone Angle: 30°
- Color: Blanco puro
- Resultado: Fachada destacada dramáticamente

**Ejemplo 3 - Iluminación de Presentación (3-point lighting):**
- **Key Light** (principal): Spot luz intensa desde ángulo 45° arriba-lateral
- **Fill Light** (relleno): Directional luz suave desde lado opuesto (50% intensity)
- **Back Light** (contorno): Spot desde atrás para separar objeto del fondo
- Resultado: Iluminación profesional tipo estudio fotográfico

### 2.3 Sunlight (Luz Solar Geolocalizada)

**Función:**
Simula luz solar real basándose en ubicación geográfica del proyecto, fecha y hora del día.

**Características:**
- Luz direccional basada en posición real del sol
- Cambia según hora y fecha
- Genera sombras realistas
- Útil para: Análisis de asoleamiento, visualización exterior, presentaciones contextuales

**Configurar Sunlight:**

1. **Enable Sunlight:**
   - Viewpoint tab > Lighting panel > Sunlight > Enable

2. **Set Project Location:**
   - Lighting panel > Sunlight > Location Settings
   - **Método 1 - Importar de Revit**: Si modelo RVT tiene Project Location configurada, Navisworks la importa automáticamente
   - **Método 2 - Manual**: Ingresar:
     - **Latitude** (Latitud): -90° (Sur) a +90° (Norte)
     - **Longitude** (Longitud): -180° (Oeste) a +180° (Este)
     - **Time Zone**: Zona horaria del proyecto
   - **Método 3 - Seleccionar en Mapa**: Algunos plugins permiten selección visual

3. **Set Date and Time:**
   - Lighting panel > Sunlight > Date/Time
   - **Date**: Fecha de análisis (ej: 21 Junio = solsticio verano, máxima exposición solar)
   - **Time**: Hora del día (ej: 12:00 PM = sol en punto más alto)
   - **Preview**: Ajustar con sliders para ver cambio de sombras en tiempo real

4. **Sunlight Properties:**
   - **Intensity**: Brillo del sol (80-120% típicamente)
   - **Color**: Blanco ligeramente amarillo para realismo (RGB 255, 253, 208)
   - **Shadows**: Enable (requerido para análisis de asoleamiento)
   - **Shadow Quality**: Medium/High para análisis, Ultra para presentación final

**Aplicaciones Profesionales de Sunlight:**

**Análisis de Asoleamiento Estacional:**
```
Configuración:
- Location: Proyecto en Lima, Perú (Lat: -12.04°, Lon: -77.04°)
- Fecha: 21 Diciembre (solsticio verano)
- Hora: 12:00 PM
Resultado: Visualizar máxima exposición solar, identificar áreas que necesitan protección solar
```

**Análisis de Sombras en Espacios Exteriores:**
```
Configuración:
- Location: Proyecto específico
- Fecha: 21 Junio (solsticio invierno hemisferio sur)
- Hora: 8:00 AM, 12:00 PM, 4:00 PM (crear 3 viewpoints)
Resultado: Evaluar cómo sombras de edificio afectan plaza pública según hora del día
```

**Presentación Contextual:**
```
Configuración:
- Fecha: Fecha actual
- Hora: Golden hour (6:00 PM) para luz cálida fotográfica
- Display Style: Realistic con materiales
Resultado: Rendering fotorrealístico con iluminación natural óptima
```

**Combine Sunlight + Scene Lights:**
- Sunlight: Iluminación exterior natural
- Scene Lights (Point): Iluminación interior de fixtures
- Resultado: Visualización realista con balance interior/exterior

### 2.4 Lighting Schemes (Esquemas de Iluminación)

**Guardar Lighting Scheme:**
- Después de configurar Scene Lights + Sunlight
- Lighting panel > Save Lighting Scheme
- Nombre: "Exterior-Sunlight-6PM-Summer"
- Recargar esquema en cualquier momento

**Lighting Schemes Profesionales Típicos:**

1. **Technical-Analysis**: Headlamp 100%, no Scene Lights, no Sunlight (máxima visibilidad uniforme)
2. **Interior-Presentation**: Headlamp OFF, Scene Lights (Point Lights en fixtures), no Sunlight
3. **Exterior-Daytime**: Headlamp OFF, Sunlight 12PM verano, Scene Lights OFF
4. **Exterior-GoldenHour**: Sunlight 6PM, Scene Lights sutiles para áreas sombreadas
5. **Night-Rendering**: Headlamp OFF, Scene Lights (fixtures exteriores), no Sunlight

## 3. Materiales y Texturas

Navisworks Presenter library incluye materiales fotorrealísticos que transforman geometría básica en visualizaciones realistas.

![Materials and Textures](../imagenes/leccion-5-materials-textures.png)

### 3.1 Presenter Materials Library

**Acceso:**
- Viewpoint tab > Materials panel > Presenter
- O: Materials window (dockable)

**Categorías de Materiales:**
- **Concrete**: Concreto liso, expuesto, arquitectónico
- **Metal**: Acero, aluminio, cobre, pulido, cepillado, oxidado
- **Wood**: Madera clara, oscura, vetas variadas
- **Glass**: Vidrio transparente, translúcido, reflectante, tintado
- **Stone**: Granito, mármol, piedra, ladrillo
- **Fabric**: Telas, alfombras, tapizados
- **Paint**: Pintura mate, semi-brillante, brillante
- **Ceramic**: Cerámicas, porcelanas
- **Landscape**: Pasto, tierra, grava, agua

**Características de Presenter Materials:**
- **Diffuse Texture**: Textura fotográfica base (color/pattern)
- **Bump Map**: Simula relieve sin geometría adicional
- **Specular**: Controla reflexión y brillo
- **Roughness**: Rugosidad de superficie (mate vs pulido)
- **Reflectivity**: Capacidad reflectante (vidrio, metal pulido)
- **Transparency**: Para vidrios, agua

### 3.2 Aplicar Materiales a Objetos

**Método 1 - Drag and Drop:**
1. Seleccionar objeto(s) en scene view
2. Materials window > Buscar material deseado
3. Drag material desde library > Drop sobre objeto seleccionado
4. Material se aplica instantáneamente

**Método 2 - Desde Properties:**
1. Seleccionar objeto
2. Properties palette > Materials section
3. Clic en material actual
4. Select material de Presenter library

**Método 3 - Material Override (Selection Set):**
1. Crear Selection Set de todos los objetos que deben tener mismo material (ej: "All-Concrete-Walls")
2. Seleccionar el set
3. Aplicar material a todos los objetos del set simultáneamente

### 3.3 Material Properties Avanzadas

**Editar Material:**
- Materials window > Clic derecho en material > Edit
- O: Properties palette > Materials > Edit Material

**Propiedades editables:**

**Diffuse:**
- **Color**: Tinte de color sobre textura
- **Texture**: Imagen de textura base
- **Scale**: Escala de repetición de textura (ajustar para tamaño realista)

**Bump:**
- **Bump Map**: Imagen de relieve (blanco=alto, negro=bajo)
- **Bump Strength**: Intensidad de relieve (0-100%)

**Specular:**
- **Specular Color**: Color de reflexión especular (usualmente blanco)
- **Shininess**: Tamaño de highlight especular (alto=pulido, bajo=mate)
- **Specular Strength**: Intensidad de reflexión

**Reflectivity:**
- **Reflectivity %**: 0% (no reflectante) a 100% (espejo perfecto)
- Para vidrio: 10-30%
- Para metal pulido: 60-90%
- Para agua: 40-60%

**Transparency:**
- **Transparency %**: 0% (opaco) a 100% (invisible)
- **Refraction Index**: 1.0 (aire) a 1.5 (vidrio) - controla distorsión visual

**Ejemplo - Configurar Vidrio Realista:**
```
Material: Glass - Clear
Diffuse Color: Ligero tinte azul-verde (RGB 240, 255, 255)
Transparency: 85%
Refraction Index: 1.52
Reflectivity: 25%
Specular Shininess: 90 (muy pulido)
Bump: None (vidrio liso)
```

**Ejemplo - Configurar Concreto Arquitectónico:**
```
Material: Concrete - Exposed
Diffuse Texture: Concrete-Architectural.jpg
Texture Scale: 2.0 (ajustar según tamaño real)
Bump Map: Concrete-Bump.jpg
Bump Strength: 40% (relieve sutil)
Specular Shininess: 10 (mate)
Reflectivity: 0% (no reflectante)
```

### 3.4 Material Mapping (UV Mapping)

**Problema común:**
Texturas distorsionadas o mal escaladas en objetos.

**Solución - Ajustar Material Mapping:**
1. Seleccionar objeto con textura distorsionada
2. Materials > Mapping
3. Opciones:
   - **Box Mapping**: Proyecta textura desde 6 lados (default, funciona para mayoría)
   - **Cylindrical**: Para objetos cilíndricos (columnas, pipes)
   - **Spherical**: Para objetos esféricos
   - **Planar**: Proyección plana desde una dirección
4. Ajustar **Scale** hasta que textura tenga tamaño realista
   - Ejemplo: Ladrillos deben verse de tamaño real (20-30cm), no 1 metro

**Verificación de escala:**
- Navegar cerca del objeto
- Comparar tamaño de textura con objetos de referencia conocida
- Ajustar scale iterativamente

### 3.5 Material Libraries Customizadas

**Crear Custom Material:**
1. Materials window > New Material
2. Configurar propiedades (diffuse, bump, specular, etc.)
3. Asignar texturas propias (archivos JPG/PNG)
4. Save Material
5. Material disponible en proyecto

**Exportar/Importar Material Library:**
- Materials window > Export Library > Save .xml
- En otro proyecto: Import Library > Load .xml
- Útil para: Estándares de empresa, consistencia entre proyectos

## 4. Render Settings y Optimización

Balancear calidad visual y performance es clave en modelos grandes.

![Render Settings](../imagenes/leccion-5-render-settings.png)

### 4.1 Render Quality Settings

**Acceso:**
- Viewpoint tab > Display Style panel > Display Style Options
- O: Options > Interface > Display tab

**Render Quality Levels:**

**Low Quality:**
- Texturas: 512px
- Anti-aliasing: OFF
- Shadows: OFF
- Reflections: OFF
- Ambient Occlusion: OFF
- **Performance**: Excelente (modelos 5M+ elementos)
- **Uso**: Navegación rápida con Realistic display

**Medium Quality (Default):**
- Texturas: 1024px
- Anti-aliasing: 2x MSAA
- Shadows: Medium quality
- Reflections: Simple
- Ambient Occlusion: Low
- **Performance**: Buena (modelos 1-3M elementos)
- **Uso**: Balance para trabajo diario con visualización decente

**High Quality:**
- Texturas: 2048px
- Anti-aliasing: 4x MSAA
- Shadows: High quality
- Reflections: Medium
- Ambient Occlusion: Medium
- **Performance**: Media (modelos <1M elementos, o hardware potente)
- **Uso**: Presentaciones profesionales, capturas para documentación

**Ultra Quality:**
- Texturas: 4096px
- Anti-aliasing: 8x MSAA
- Shadows: Ultra quality (soft shadows)
- Reflections: High (ray-traced)
- Ambient Occlusion: High (SSAO)
- **Performance**: Baja (requiere GPU dedicada de gama alta)
- **Uso**: Renders finales para marketing, presentaciones a clientes VIP

### 4.2 Specific Render Settings

**Anti-aliasing (Suavizado de Aristas):**
- **Off**: Aristas dentadas (jagged), rendering más rápido
- **2x MSAA**: Suavizado básico
- **4x MSAA**: Suavizado bueno (recomendado)
- **8x MSAA**: Suavizado excelente (impacto performance)
- **Uso**: Siempre activar para capturas finales (4x mínimo)

**Ambient Occlusion (Sombras de Contacto):**
- **Off**: Sin sombras en esquinas/grietas, modelo se ve "plano"
- **Low**: Sombras sutiles (impacto performance mínimo)
- **Medium**: Sombras notables (recomendado)
- **High**: Sombras intensas (mayor profundidad visual)
- **Uso**: Activar Medium/High para presentaciones (agrega dramáticamente profundidad)

**Shadows:**
- **Off**: Sin sombras
- **Medium**: Sombras con bordes algo definidos
- **High**: Sombras con soft edges (penumbra realista)
- **Ultra**: Sombras ultra-suaves (área de penumbra amplia)
- **Uso**: High/Ultra para renders exteriores con sunlight

**Reflections:**
- **Off**: Sin reflejos en vidrio/metal
- **Simple**: Reflejos básicos (cubemap estático)
- **Medium**: Reflejos de entorno (screen-space)
- **High**: Reflejos ray-traced (realistas)
- **Uso**: Medium para interiores con vidrio, High para renders de fachadas vidriadas

### 4.3 Performance Optimization Strategies

**Estrategia 1 - Display Style por Tarea:**
- **Navegación/coordinación (90%)**: Shaded (performance máxima)
- **Capturas de presentación (10%)**: Realistic/Presentation (calidad máxima)

**Estrategia 2 - Level of Detail (LOD):**
- Options > Display > Level of Detail
- Ajustar slider: Low (menos detalle, más rápido) vs High (más detalle, más lento)
- Para modelos grandes: LOD Medium durante navegación, High solo para viewpoints finales

**Estrategia 3 - Hide Non-Essential:**
- Ocultar disciplinas no relevantes (ej: mobiliario durante análisis MEP)
- Required para grids/reference, Hide para elementos densos (barandas, fixtures pequeños)
- Reduction de objetos renderizados = aumento drástico de performance

**Estrategia 4 - Section/Boxing:**
- Usar Section Planes para ocultar grandes porciones del modelo
- Render solo la sección de interés (ej: un piso, no todo el edificio)

**Estrategia 5 - Background Off:**
- Backgrounds complejos (image, HDRI) impactan performance
- Durante navegación: Background solid color (negro/blanco)
- Para presentación: Activar background image/HDRI

**Hardware Considerations:**
- **GPU**: NVIDIA RTX series recomendada (ray-tracing, CUDA cores)
- **VRAM**: 4GB mínimo, 8GB+ recomendado para Ultra quality
- **RAM**: 32GB para modelos grandes con High/Ultra settings

## 5. Backgrounds y Entorno

Backgrounds contextualizan el modelo y mejoran presentaciones.

![Backgrounds](../imagenes/leccion-5-backgrounds.png)

### 5.1 Background Types

**Solid Color:**
- Color uniforme
- **Negro**: Para análisis técnico (objetos claros destacan)
- **Blanco**: Para documentación tipo plano
- **Azul cielo**: Para contexto exterior
- **Performance**: Excelente (sin impacto)

**Gradient (Degradado):**
- Dos colores con transición (ej: azul claro arriba, azul oscuro abajo)
- Simula cielo de forma simple
- **Performance**: Excelente

**Image (Imagen):**
- Imagen estática de fondo (ej: foto de cielo, paisaje)
- Útil para contexto sin 3D real del entorno
- **Performance**: Buena (ligero impacto)

**HDRI (High Dynamic Range Image):**
- Imagen 360° que provee iluminación y reflexiones basadas en entorno real
- Reflections en vidrio/metal muestran entorno HDRI
- Iluminación global del HDRI (image-based lighting)
- **Performance**: Media (impacto según resolución HDRI)
- **Uso**: Renders fotorrealísticos de máxima calidad

### 5.2 Configurar Background

**Acceso:**
- Viewpoint tab > Background panel
- O: Options > Interface > Background

**Solid Color:**
1. Background panel > Type: Solid
2. Color: Select color
3. Apply

**Gradient:**
1. Type: Gradient
2. Top Color: Azul claro (RGB 135, 206, 250)
3. Bottom Color: Azul más oscuro (RGB 70, 130, 180)
4. Orientation: Vertical (default)
5. Apply
6. Resultado: Degradado que simula cielo

**Image:**
1. Type: Image
2. Browse: Seleccionar archivo JPG/PNG (ej: foto de cielo, paisaje)
3. Mapping:
   - **Stretch**: Estira imagen para llenar pantalla (puede distorsionar)
   - **Tile**: Repite imagen (para patterns)
   - **Fit**: Ajusta imagen manteniendo proporción
4. Apply

**HDRI:**
1. Type: HDRI
2. Browse: Seleccionar archivo HDR o EXR
3. Exposure: Ajustar brillo de HDRI (0-10, default 1.0)
4. Rotation: Rotar HDRI para alinear con orientación del modelo
5. Enable "Use HDRI for Lighting" (iluminación global basada en HDRI)
6. Apply

**HDRI Sources:**
- HDRIHaven.com (gratis, alta calidad)
- Polyhaven.com (gratis, variedad enorme)
- Descarga HDRIs de exteriores (outdoor), interiores (indoor), estudios (studio)

**Ejemplo HDRI Workflow:**
```
Proyecto: Edificio corporativo con fachada vidriada
1. Descargar HDRI: "outdoor_cloudy_day_4k.hdr"
2. Background > Type: HDRI > Load HDRI
3. Exposure: 1.2 (cielo ligeramente más brillante)
4. Rotation: 90° (alinear sol de HDRI con orientación del edificio)
5. Enable HDRI Lighting
6. Display Style: Realistic
7. Materials: Vidrio con 25% reflectivity
8. Resultado: Fachada vidriada refleja entorno HDRI (cielo, nubes), iluminación natural del HDRI
```

### 5.3 Entorno 3D (Environment Models)

**Agregar Entorno Real:**
Algunos proyectos incluyen modelos 3D del contexto (edificios adyacentes, terreno, vegetación).

**Configurar Entorno:**
1. Append modelos de contexto (Lección 2):
   - Terreno: DWG con topografía
   - Edificios adyacentes: Modelos simplificados
   - Vegetación: Familias de árboles, arbustos
2. Appearance Profiler:
   - Entorno: 50-70% transparencia (contexto, no foco principal)
   - Proyecto principal: 0% transparencia (foco)
3. Sunlight: Activar para sombras del entorno sobre proyecto

**Resultado:**
Proyecto visualizado en su contexto urbano real.

## Ejercicio Práctico

**Duración:** 15 minutos

**Escenario:**
Usted preparará un viewpoint de presentación de alta calidad para revisión de diseño con el cliente arquitectónico.

**Pasos:**

1. **Cambiar a Display Style Realistic:**
   - Viewpoint tab > Display Style > Realistic
   - Display Style Options > Render Quality: High

2. **Configurar Iluminación:**
   - Lighting panel > Headlamp: Disable
   - Sunlight: Enable
   - Location: Configurar ubicación de su proyecto (o usar coordenadas de ejemplo: Lima, Perú)
   - Date: 21 Diciembre
   - Time: 4:00 PM (golden hour)
   - Sunlight Intensity: 100%

3. **Aplicar Materiales (3-5 objetos):**
   - Seleccionar muro exterior: Aplicar material "Concrete - Architectural"
   - Seleccionar ventanas: Aplicar material "Glass - Clear", ajustar transparency 85%, reflectivity 25%
   - Seleccionar piso: Aplicar material "Wood - Hardwood Light"
   - Verificar escala de texturas (ajustar si necesario)

4. **Configurar Background:**
   - Background panel > Type: Gradient
   - Top Color: Azul cielo claro (RGB 135, 206, 250)
   - Bottom Color: Naranja suave (RGB 255, 200, 150) - simula golden hour
   - Apply

5. **Render Settings:**
   - Display Style Options:
     - Anti-aliasing: 4x MSAA
     - Ambient Occlusion: Medium
     - Shadows: High
     - Reflections: Medium

6. **Navegar a Vista Óptima:**
   - Navegar a vista exterior que muestre fachada principal
   - Ajustar ángulo para capturar luz solar dorada

7. **Save Viewpoint:**
   - Save Viewpoint: "Presentation-Facade-GoldenHour"
   - Comentarios: "Vista de presentación con iluminación natural golden hour - Revisión de diseño cliente"

8. **Capturar Imagen:**
   - Output tab > Visuals panel > Screenshot
   - Resolution: 1920x1080 o superior
   - Guardar: "Project-Facade-Presentation.png"

**Resultado esperado:**
Imagen de alta calidad con iluminación natural realista, materiales fotorrealísticos, sombras suaves, y background contextual que puede usarse en presentaciones profesionales a clientes.

## Evaluación

1. **Pregunta 1:** Compare los display styles Shaded y Realistic explicando cuándo usar cada uno en un workflow profesional de coordinación BIM, considerando performance y propósito visual.

   **Respuesta:** Shaded display renderiza superficies sólidas con colores/materiales básicos, sin texturas detalladas ni sombras calculadas, usando iluminación básica headlamp, ofreciendo performance EXCELENTE (navegación fluida en modelos 5M+ elementos). Realistic display aplica materiales/texturas completas, iluminación avanzada (shadows, reflections, ambient occlusion), con performance MEDIA dependiente de configuración y hardware. Workflow profesional: usar Shaded para 90% del tiempo de coordinación técnica diaria (navegación, clash detection, selection, análisis geométrico) donde performance es crítica y detalles visuales no son prioridad; cambiar a Realistic solo para los viewpoints específicos de presentación (10% del tiempo) cuando se necesita calidad visual para clientes, design reviews, o capturas para documentación. Estrategia: navegar en Shaded, identificar vista deseada, cambiar a Realistic + High quality settings, capturar imagen, volver a Shaded para continuar trabajo técnico. Esto maximiza productividad manteniendo capacidad de generar visualizaciones de alta calidad cuando es necesario.

2. **Pregunta 2:** Describa cómo configurar Sunlight para análisis de asoleamiento de una plaza pública en Lima, Perú, evaluando exposición solar en solsticio de verano a diferentes horas del día.

   **Respuesta:** Procedimiento completo: (1) Enable Sunlight: Viewpoint tab > Lighting > Sunlight > Enable; (2) Disable Headlamp para iluminación puramente natural; (3) Set Project Location: Lighting panel > Location Settings: Latitude -12.04° (sur), Longitude -77.04° (oeste), Time Zone UTC-5; (4) Configurar para solsticio de verano (máxima exposición): Date: 21 Diciembre; (5) Crear múltiples viewpoints para análisis horario: Viewpoint A: Time 8:00 AM (mañana temprano, sol bajo desde este, sombras largas), Save Viewpoint "Plaza-Sunlight-8AM-Summer"; Viewpoint B: Time 12:00 PM (mediodía, sol cenital máxima exposición, sombras mínimas), Save "Plaza-Sunlight-12PM-Summer"; Viewpoint C: Time 4:00 PM (tarde, sol descendente desde oeste), Save "Plaza-Sunlight-4PM-Summer"; (6) Sunlight Properties: Intensity 100%, Color blanco-amarillo (RGB 255, 253, 208), Shadows: High quality para análisis preciso de sombras; (7) Display Style: Realistic para visualizar materiales y sombras claramente; (8) Análisis: Comparar los 3 viewpoints, identificar áreas con excesiva exposición solar (requieren protección solar: pérgolas, árboles), áreas con sombra permanente (pueden requerir iluminación artificial o relocación de actividades). Este análisis informa decisiones de diseño urbano y landscape.

3. **Pregunta 3:** Explique cómo configurar un material de vidrio fotorrealista en Navisworks, detallando cada propiedad (transparency, reflectivity, refraction) y su efecto visual.

   **Respuesta:** Configuración completa material vidrio realista: (1) Base material: Seleccionar "Glass - Clear" de Presenter library; (2) Edit Material > Properties: **Diffuse**: Color con ligero tinte azul-verde (RGB 240, 255, 255) simula color inherente del vidrio; **Transparency**: 85% (vidrio permite paso de luz pero no es totalmente invisible, 85% es realista para vidrio arquitectónico estándar - vidrio bajo-e puede ser 75%, vidrio ultra-claro 92%); **Refraction Index**: 1.52 (índice de refracción del vidrio - controla distorsión visual de objetos vistos a través del vidrio, valores: aire=1.0, agua=1.33, vidrio=1.52, diamante=2.42); **Reflectivity**: 25% (vidrio refleja ~25% de luz incidente, crea reflejos visibles de entorno sin convertirse en espejo - metal pulido sería 60-90%); **Specular**: Shininess 90 (muy pulido), Specular Strength 100% (highlights brillantes simulan superficie lisa); **Bump**: None (vidrio es perfectamente liso, sin relieve); (3) Mapping: Box mapping, Scale 1.0 (vidrio no tiene textura repetida); (4) Para visualización óptima: Display Style Realistic, Reflections Medium/High (reflejos de entorno), Background HDRI o Image (vidrio refleja entorno visible). Efecto visual resultante: Vidrio se ve transparente permitiendo ver interior/exterior, refleja entorno (cielo, edificios) de forma realista, tiene ligero tinte azul-verde característico, y genera highlights especulares en bordes/intersecciones.

4. **Pregunta 4:** Describa una estrategia de optimización de performance para trabajar con modelo federado de 3 millones de elementos, balanceando productividad de coordinación diaria con capacidad de generar renders de alta calidad cuando sea necesario.

   **Respuesta:** Estrategia multi-nivel de optimización: **NIVEL 1 - Coordinación Diaria (90% tiempo)**: Display Style: Shaded (performance excelente); Render Quality: Low (texturas 512px, sin anti-aliasing/shadows); Lighting: Headlamp 100% solo; LOD: Medium (Options > Display > Level of Detail); Visibility: Hide disciplinas no relevantes para tarea actual (ej: ocultar mobiliario/landscape durante análisis MEP), marcar grids/levels como Required para mantener referencia; Background: Solid color negro (cero impacto performance); Resultado: Navegación fluida 60fps incluso en modelo 3M elementos. **NIVEL 2 - Revisión Técnica Detallada (5% tiempo)**: Display Style: Shaded with Edges (claridad de conexiones); Section Planes: Aislar solo sección de análisis (render 100K elementos en vez de 3M); Resultado: Performance muy buena con claridad visual aumentada. **NIVEL 3 - Presentaciones (5% tiempo)**: Workflow específico: (a) Navegar en Shaded (rápido) hasta encontrar vista deseada; (b) Hide disciplinas secundarias (arquitectura/estructura 70% transparente via Appearance Profiler); (c) Cambiar a Display Style: Realistic; (d) Render Quality: High (texturas 2048px, anti-aliasing 4x, ambient occlusion Medium, shadows High); (e) Lighting: Sunlight + Scene Lights según necesidad; (f) Aplicar materiales Presenter a elementos visibles; (g) Background: Gradient o Image (no HDRI, mucho impacto); (h) Capturar imagen/guardar viewpoint; (i) Inmediatamente volver a Shaded para continuar trabajo; Resultado: Imágenes alta calidad sin sacrificar productividad. **Hardware**: GPU NVIDIA RTX series (CUDA/ray-tracing), 32GB RAM, monitor 1920x1080+ (detalles visibles).

5. **Pregunta 5:** Explique cómo usar Scene Lights con técnica de 3-point lighting profesional para crear presentación dramática de elemento arquitectónico específico (ej: fachada principal, lobby interior).

   **Respuesta:** Técnica 3-point lighting adaptada a Navisworks para elemento arquitectónico (ejemplo: lobby interior con escalera escultórica): **Setup inicial**: Display Style Realistic, Headlamp OFF (iluminación solo de Scene Lights), modelo en vista que muestre escalera. **Light 1 - Key Light (Luz Principal)**: Type: Spot Light; Position: 45° arriba y 30° lateral derecha respecto a escalera; Direction: Apuntando directamente a escalera; Intensity: 200% (luz fuerte, principal fuente); Color: Blanco ligeramente cálido (RGB 255, 244, 214) simula luz artificial interior; Cone Angle: 60° (cubre escalera completamente); Cast Shadows: Enable (sombras definen forma tridimensional); Resultado: Escalera iluminada fuertemente, sombras dramáticas definen geometría. **Light 2 - Fill Light (Luz de Relleno)**: Type: Directional Light (iluminación suave general); Direction: Desde lado opuesto a Key Light (izquierda); Intensity: 50% (mitad de Key Light, rellena sombras sin eliminarlas); Color: Blanco neutro (RGB 255, 255, 255); Cast Shadows: OFF (relleno no debe crear sombras adicionales); Resultado: Sombras oscuras del Key Light se suavizan, detalles en áreas sombreadas se vuelven visibles sin perder contraste. **Light 3 - Back Light (Luz de Contorno)**: Type: Spot Light; Position: Detrás y arriba de escalera; Direction: Hacia cámara (contraluz); Intensity: 100%; Color: Blanco frío (RGB 240, 248, 255) diferencia del Key Light cálido; Cone Angle: 45°; Cast Shadows: OFF; Resultado: Contorno brillante separa escalera del fondo, crea "halo" que define silueta, agrega profundidad espacial. **Efectos adicionales**: Ambient Occlusion: High (sombras sutiles en esquinas/grietas); Materials: Aplicar materiales reflectantes a barandas metálicas (capturan highlights), materiales mate a escalones; Background: Degradado oscuro (no compite con escalera iluminada). **Resultado final**: Escalera dramáticamente iluminada con profundidad tridimensional, contrastes de luz/sombra que enfatizan forma escultórica, separación clara del fondo, visualización profesional tipo fotografía arquitectónica. Esta técnica es estándar en fotografía/cinematografía y se adapta perfectamente a rendering arquitectónico.

## Resumen

En esta lección dominamos visualización profesional en Navisworks 2026:

- Exploramos todos los display styles (Shaded para coordinación técnica rápida, Realistic/Presentation para visualizaciones de alta calidad, Wireframe/Hidden Line para análisis geométrico) comprendiendo cuándo usar cada uno según balance performance vs calidad visual requerida.

- Configuramos sistemas de iluminación completos: Headlamp para iluminación uniforme en análisis técnico, Scene Lights (Point/Spot/Directional) para iluminación dramática y técnicas de 3-point lighting profesional, y Sunlight con geolocalización real para análisis de asoleamiento y visualizaciones exteriores contextuales.

- Aplicamos materiales fotorrealísticos de Presenter library, configurando propiedades avanzadas (diffuse textures, bump mapping, specular highlights, reflectivity, transparency, refraction) para transformar geometría básica en visualizaciones realistas de concreto, vidrio, metal, madera y otros materiales.

- Optimizamos render settings (anti-aliasing, ambient occlusion, shadows, reflections) balanceando calidad visual y performance, estableciendo estrategias de workflow donde coordinación diaria usa configuraciones rápidas y presentaciones usan configuraciones de máxima calidad.

- Configuramos backgrounds (solid, gradient, image, HDRI) y comprendimos su impacto en presentaciones, desde simples degradados hasta HDRI con image-based lighting para fotorrealismo máximo.

Estas habilidades transforman Navisworks de herramienta de coordinación técnica a plataforma completa de presentación, eliminando necesidad de exportar a software de rendering externo para visualizaciones profesionales.

## Próxima Lección

En la **Lección 6: Measure y Redline Tools** dominaremos herramientas de medición precisa (point-to-point, shortest distance, accumulated measurements, áreas, ángulos, conversion de unidades) y markup con Redline tools (tags, comments, annotations, callouts) para documentación, RFIs, y comunicación de hallazgos de coordinación, además de exportación de mediciones a reportes Excel para cuantificación y análisis.
