# Lección 1: Introducción a Raster Design y Tipos de Imágenes

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Comprender las diferencias fundamentales entre imágenes raster y datos vectoriales
- Identificar formatos de imagen soportados por Raster Design y sus características
- Entender conceptos de resolución, DPI, y profundidad de color
- Activar y configurar el toolset Raster Design en AutoCAD 2026
- Evaluar la calidad y idoneidad de imágenes raster para proyectos CAD

## Introducción

AutoCAD Raster Design es un toolset especializado que extiende las capacidades de AutoCAD para trabajar con **imágenes raster** (bitmaps, fotografías, planos escaneados) de manera profesional. Mientras AutoCAD tradicional trabaja con geometría vectorial (líneas, arcos, polilíneas definidas matemáticamente), Raster Design permite integrar, editar y convertir imágenes basadas en píxeles.

Esta capacidad es fundamental para proyectos que involucran:
- **Digitalización de planos legacy:** Convertir planos antiguos en papel a formato CAD editable
- **Facilities management:** Integrar fotografías aéreas y ortofotografías con diseños CAD
- **GIS y mapping:** Trabajar con imagery satelital y datos de elevación
- **As-built documentation:** Incorporar escaneos de condiciones existentes en proyectos de renovación

## 1. Conceptos Fundamentales: Raster vs Vector

### 1.1 ¿Qué es una Imagen Raster?

Una imagen raster es una matriz rectangular de **píxeles** (picture elements), donde cada píxel tiene un valor de color específico. La imagen se define por:

- **Dimensiones:** Ancho y alto en píxeles (ej: 3000 x 2000 pixels)
- **Resolución:** Densidad de píxeles por unidad (ej: 300 DPI)
- **Profundidad de color:** Bits por píxel que determinan cuántos colores puede representar

**Ejemplos:** Fotografías digitales, planos escaneados, capturas de pantalla, imágenes satelitales.

### 1.2 ¿Qué es Geometría Vectorial?

La geometría vectorial define objetos mediante **ecuaciones matemáticas**:
- Una línea se define por dos puntos (X1,Y1) y (X2,Y2)
- Un círculo se define por un centro (X,Y) y un radio R
- Los objetos mantienen precisión a cualquier escala

**Ejemplos en AutoCAD:** LINE, CIRCLE, POLYLINE, ARC, SPLINE.

### 1.3 Comparación Clave

| Característica | Raster | Vector |
|----------------|--------|--------|
| **Definición** | Matriz de píxeles | Ecuaciones matemáticas |
| **Escalabilidad** | Pierde calidad al ampliar | Escalable sin pérdida |
| **Tamaño archivo** | Depende de dimensiones | Depende de complejidad |
| **Edición** | Difícil modificar elementos individuales | Fácil seleccionar y editar |
| **Precisión** | Limitada por resolución | Precisión infinita |
| **Uso típico** | Fotografías, imagery, planos escaneados | Diseño CAD, planos técnicos |

### 1.4 ¿Por qué Integrar Raster y Vector?

En la práctica profesional, muchos proyectos requieren **workflows híbridos**:

**Ejemplo 1: Renovación de edificio histórico**
- Escaneo de planos originales en papel (raster)
- Vectorización de elementos clave (vector)
- Diseño de modificaciones sobre plano base (vector sobre raster)

**Ejemplo 2: Proyecto de infraestructura urbana**
- Ortofotografía aérea del sitio (raster)
- Trazado de diseño de calles y utilities (vector)
- Análisis combinado de condiciones existentes y propuestas

## 2. Formatos de Imagen Soportados

Raster Design 2026 soporta más de 20 formatos de imagen. Los más importantes son:

### 2.1 Formatos de Planos Escaneados

#### TIFF (Tagged Image File Format)
- **Extensión:** .tif, .tiff
- **Características:** Sin compresión o compresión lossless (LZW, PackBits)
- **Uso:** Estándar de la industria para planos escaneados de alta calidad
- **Ventajas:** Soporta bitonal, grayscale, RGB; metadatos geoespaciales
- **Profundidades:** 1-bit (bitonal), 8-bit (grayscale), 24-bit (RGB)

#### CALS Raster
- **Extensión:** .cal, .cals, .ct1
- **Características:** Formato militar/gubernamental US Department of Defense
- **Uso:** Planos técnicos en proyectos gubernamentales
- **Ventajas:** Compresión eficiente para bitonal

### 2.2 Formatos de Fotografía

#### JPEG (Joint Photographic Experts Group)
- **Extensión:** .jpg, .jpeg
- **Características:** Compresión lossy (con pérdida)
- **Uso:** Fotografías, imágenes con muchos colores
- **Ventajas:** Archivos pequeños
- **Desventajas:** No apto para vectorización (pérdida de detalles finos)

#### PNG (Portable Network Graphics)
- **Extensión:** .png
- **Características:** Compresión lossless, soporta transparencia (alpha channel)
- **Uso:** Capturas de pantalla, gráficos con texto
- **Ventajas:** Sin pérdida de calidad, transparencia

### 2.3 Formatos Geoespaciales

#### GeoTIFF
- **Extensión:** .tif (con metadatos geográficos)
- **Características:** TIFF con información de coordenadas embebida
- **Uso:** Ortofotografías, imágenes satelitales georreferenciadas
- **Ventajas:** Integración directa con sistemas de coordenadas

#### ECW (Enhanced Compression Wavelet)
- **Extensión:** .ecw
- **Características:** Compresión wavelet de alto rendimiento
- **Uso:** Ortofotografías de grandes dimensiones (>100 MB)
- **Ventajas:** Archivos pequeños, carga rápida de áreas parciales

#### MrSID (Multi-resolution Seamless Image Database)
- **Extensión:** .sid
- **Características:** Compresión multi-resolución
- **Uso:** Imagery de gran tamaño (satelital, aérea)
- **Ventajas:** Performance excelente en archivos masivos (>1 GB)

### 2.4 Otros Formatos Relevantes

- **BMP:** Windows Bitmap (sin compresión, archivos grandes)
- **GIF:** Graphics Interchange Format (máximo 256 colores)
- **NITF:** National Imagery Transmission Format (militar/inteligencia)
- **JPEG 2000:** .jp2 (compresión wavelet superior a JPEG)

## 3. Resolución y DPI

### 3.1 Conceptos de Resolución

**Resolución de píxeles:** Dimensiones de la imagen en píxeles
- Ejemplo: 6000 x 4000 pixels = 24 megapíxeles

**DPI (Dots Per Inch):** Densidad de píxeles por pulgada al escanear o imprimir
- 300 DPI: Calidad profesional para vectorización
- 200 DPI: Calidad aceptable para referencia visual
- 150 DPI: Calidad mínima para trabajo CAD
- 72-96 DPI: Calidad pantalla (no apto para vectorización)

### 3.2 Calcular Resolución Necesaria

Para escanear un plano y poder vectorizarlo:

**Fórmula:**
```
Píxeles necesarios = Tamaño físico (pulgadas) × DPI deseado
```

**Ejemplo:**
- Plano tamaño D (24" × 36")
- DPI objetivo: 300
- Resolución necesaria: 24 × 300 = 7200 pixels de ancho, 36 × 300 = 10800 pixels de alto
- Archivo resultante: 7200 × 10800 = 77.76 megapíxeles

### 3.3 Relación DPI y Tamaño de Archivo

| DPI | Tamaño plano D (24"×36") | Tamaño archivo TIFF bitonal | Tamaño archivo TIFF RGB |
|-----|--------------------------|----------------------------|------------------------|
| 150 | 3600×5400 px | ~2.3 MB | ~55 MB |
| 200 | 4800×7200 px | ~4.1 MB | ~99 MB |
| 300 | 7200×10800 px | ~9.3 MB | ~222 MB |
| 600 | 14400×21600 px | ~37 MB | ~890 MB |

**Recomendación:** Escanear a 300 DPI en bitonal para planos técnicos, 200 DPI en RGB para planos con colores.

## 4. Profundidad de Color

### 4.1 Tipos de Profundidad

#### 1-bit (Bitonal / Black & White)
- 2 colores: Negro (1) y Blanco (0)
- **Uso:** Planos técnicos en blanco y negro
- **Ventajas:** Archivos muy pequeños, ideal para vectorización
- **Tamaño:** 1/24 del tamaño de RGB

#### 8-bit Grayscale
- 256 tonos de gris (0 = negro, 255 = blanco)
- **Uso:** Planos con sombreado, fotografías B&N
- **Ventajas:** Balance entre calidad y tamaño
- **Tamaño:** 1/3 del tamaño de RGB

#### 24-bit RGB (True Color)
- 16.7 millones de colores (8 bits × 3 canales: Red, Green, Blue)
- **Uso:** Planos a color, ortofotografías, fotografías
- **Ventajas:** Representación completa de color
- **Tamaño:** Archivos grandes

#### 32-bit RGBA
- RGB + Alpha channel (transparencia)
- **Uso:** Composiciones con transparencia
- **Tamaño:** 133% del tamaño de RGB

### 4.2 Elegir Profundidad Correcta

| Tipo de imagen | Profundidad recomendada | Razón |
|----------------|------------------------|-------|
| Plano técnico B&N | 1-bit bitonal | Archivos pequeños, vectorización óptima |
| Plano con tonos grises | 8-bit grayscale | Preserva sombreado |
| Plano a color | 24-bit RGB | Necesario para colores |
| Ortofotografía | 24-bit RGB | Fotografía requiere color completo |
| Mapa topográfico | 8-bit grayscale o 24-bit RGB | Depende de colores en original |

## 5. Activación de Raster Design Toolset

### 5.1 Verificar Instalación

AutoCAD 2026 incluye Raster Design como toolset especializado. Para verificar:

1. Abre AutoCAD 2026
2. En pantalla de inicio, observa dropdown **"Toolset"** (esquina superior derecha)
3. Verifica que **"Raster Design"** aparece en la lista

![Toolset Selector](../imagenes/leccion-1-toolset-selector.png)

### 5.2 Activar Toolset Raster Design

1. Click en dropdown de **Toolset**
2. Selecciona **"Raster Design"**
3. La interfaz se reconfigurará mostrando ribbon y herramientas específicas

**Cambios visibles:**
- Nuevo ribbon tab **"Raster Design"**
- Nuevos comandos disponibles (IMAGEATTACH, IMAGECORRELATE, etc.)
- Paleta **Image Manager**

### 5.3 Ribbon Raster Design

Una vez activado, el ribbon **Raster Design** incluye paneles:

**Panel INSERT**
- Image: Insertar imágenes raster
- Georeference: Herramientas de georeferenciación

**Panel IMAGE PROCESSING**
- Enhance: Brightness, contrast, despeckle
- Transform: Rotate, mirror, rubber sheet

**Panel VECTORIZATION**
- Vectorize: Conversión automática raster a vector
- OCR: Reconocimiento óptico de caracteres
- REM: Raster Entity Manipulation

**Panel EDITING**
- Erase: Borrar contenido raster
- Touchup: Correcciones menores
- Bias: Fill o erase con bias

## 6. Casos de Uso Profesionales

### 6.1 Digitalización de Planos Legacy

**Escenario:** Empresa de facilities management tiene 5,000 planos en papel de edificios de los años 1970-1990.

**Workflow Raster Design:**
1. Escanear planos a 300 DPI bitonal TIFF
2. Insertar en AutoCAD vía Raster Design
3. Correlacionar con coordenadas conocidas del edificio
4. Aplicar despeckle para eliminar ruido del escaneo
5. Vectorizar elementos clave (muros, puertas, equipos)
6. Mantener raster como base de referencia

**Resultado:** Planos CAD editables con respaldo visual del original.

### 6.2 Integración de Ortofotografía en Proyecto Civil

**Escenario:** Diseño de carretera de 15 km requiere topografía y condiciones existentes.

**Workflow Raster Design:**
1. Obtener ortofotografía GeoTIFF del área del proyecto
2. Insertar en AutoCAD Map 3D con georeferenciación automática
3. Alinear con datos de levantamiento topográfico
4. Diseñar alineamiento horizontal sobre ortofoto
5. Identificar interferencias (edificaciones, vegetación)

**Resultado:** Diseño contextualizado con condiciones reales del terreno.

### 6.3 Conversión de Mapas Históricos

**Escenario:** Municipalidad necesita digitalizar mapas catastrales de 1950.

**Workflow Raster Design:**
1. Escanear mapas antiguos a 400 DPI color (papel deteriorado)
2. Aplicar brightness/contrast para mejorar legibilidad
3. Correlacionar esquinas del mapa con coordenadas catastrales actuales
4. Usar rubber sheeting para corregir distorsiones del papel
5. Vectorizar parcelas y nombres
6. OCR para convertir textos a anotaciones CAD

**Resultado:** Catastro digital con información histórica preservada.

## Ejercicio Práctico

### Ejercicio 1.1: Análisis de Imágenes Raster

**Objetivo:** Familiarizarse con tipos de imagen y activar Raster Design toolset.

**Instrucciones:**

1. **Activar Raster Design:**
   - Abre AutoCAD 2026
   - Cambia a toolset **"Raster Design"**
   - Verifica que ribbon Raster Design está visible

2. **Analizar imágenes proporcionadas:**
   En la carpeta de ejercicios encontrarás:
   - `plano_arquitectonico.tif` (bitonal)
   - `ortofoto_urbana.tif` (RGB)
   - `mapa_topografico.jpg` (color)

3. **Para cada imagen, identifica:**
   - Formato de archivo
   - Dimensiones en píxeles (usa visor de imágenes de Windows > Propiedades > Detalles)
   - Tamaño de archivo en MB
   - Profundidad de color aproximada (bitonal/grayscale/RGB)
   - DPI (si está disponible en metadatos)

4. **Determina idoneidad:**
   - ¿Es apta para vectorización? (requiere 200+ DPI)
   - ¿Qué tipo de proyecto usaría cada imagen?

5. **Completa tabla:**

| Archivo | Formato | Píxeles | Tamaño MB | Profundidad | DPI | Apta vectorización |
|---------|---------|---------|-----------|-------------|-----|-------------------|
| plano_arquitectonico.tif | | | | | | |
| ortofoto_urbana.tif | | | | | | |
| mapa_topografico.jpg | | | | | | |

**Entregable:** Tabla completada con análisis.

**Tiempo estimado:** 20 minutos

## Evaluación

Responde las siguientes preguntas:

1. **¿Cuál es la diferencia fundamental entre raster y vector?**
   - a) Raster es más preciso que vector
   - b) Raster se define por píxeles, vector por ecuaciones matemáticas
   - c) Raster solo funciona en AutoCAD, vector en cualquier programa
   - d) No hay diferencia significativa

2. **¿Qué formato es más adecuado para escanear planos técnicos en blanco y negro?**
   - a) JPEG a color
   - b) TIFF bitonal
   - c) PNG con transparencia
   - d) BMP sin compresión

3. **¿Qué DPI es mínimo recomendado para vectorización de calidad profesional?**
   - a) 72 DPI
   - b) 150 DPI
   - c) 300 DPI
   - d) 600 DPI

4. **¿Cuál es la ventaja de usar 1-bit bitonal en lugar de RGB para planos B&N?**
   - a) Mejor calidad visual
   - b) Archivos mucho más pequeños
   - c) Más colores disponibles
   - d) Más fácil de editar

5. **¿Qué formato es ideal para ortofotografías de gran tamaño (>500 MB)?**
   - a) TIFF sin compresión
   - b) JPEG estándar
   - c) ECW o MrSID
   - d) BMP

**Respuestas:** 1-b, 2-b, 3-c, 4-b, 5-c

## Recursos Adicionales

### Documentación Oficial
- [AutoCAD Raster Design Overview](https://www.autodesk.com/products/autocad/included-toolsets/autocad-raster-design) - Autodesk
- [Raster Design User Guide 2026](https://help.autodesk.com/view/ARDES/2026/ENU/) - Autodesk Help
- [Image Formats Supported](https://knowledge.autodesk.com/support/autocad-raster-design) - Knowledge Network

### Artículos Técnicos
- "Understanding DPI and Resolution for CAD Scanning" - SPAR 3D Magazine
- "Best Practices for Scanning Legacy Drawings" - Autodesk University

### Comunidad
- [Raster Design Forum](https://forums.autodesk.com/t5/raster-design/bd-p/302) - Autodesk Community

## Resumen

En esta lección has aprendido:

- **Raster vs Vector:** Raster se define por píxeles, vector por ecuaciones; cada uno tiene usos específicos
- **Formatos clave:** TIFF (planos escaneados), GeoTIFF/ECW/MrSID (ortofotografías), JPEG/PNG (fotografías)
- **Resolución:** 300 DPI es estándar profesional para vectorización
- **Profundidad de color:** 1-bit bitonal para planos B&N, 24-bit RGB para color
- **Raster Design toolset:** Incluido en AutoCAD 2026, se activa desde selector de toolset
- **Aplicaciones:** Digitalización de planos legacy, integración de ortofotografías, conversión de mapas históricos

En la **Lección 2** aprenderás a **insertar y gestionar múltiples imágenes raster** en proyectos AutoCAD utilizando Image Manager y técnicas de optimización de performance.

---

**Siguiente:** [Lección 2 - Inserción y Gestión de Imágenes Raster](leccion-2.md)
