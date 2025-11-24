# Lección 5: Image Editing Básico

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Borrar contenido raster no deseado (manchas, anotaciones, sellos)
- Realizar correcciones menores con herramienta Touchup
- Aplicar Biased Touchup para rellenar o borrar con inteligencia
- Espejar y rotar imágenes para orientación correcta
- Utilizar raster snaps para edición precisa
- Preparar imágenes para vectorización mediante limpieza profesional

## Introducción

Planos escaneados y fotografías frecuentemente contienen elementos no deseados que deben eliminarse antes de vectorización o uso como referencia:
- **Manchas y deterioro:** Papel viejo con manchas de café, humedad, rasgaduras
- **Anotaciones obsoletas:** Marcas de revisión, notas manuscritas, sellos "VOID"
- **Bordes del escaneo:** Sombras en los bordes, bordes irregulares del papel
- **Elementos irrelevantes:** Leyendas, logos que obstruyen el área de trabajo

Las herramientas de **Raster Editing** permiten limpiar estas imágenes de manera quirúrgica, preservando el contenido técnico importante mientras se eliminan interferencias.

## 1. Erase Raster Content

### 1.1 Conceptos de Borrado Raster

A diferencia de borrar geometría vectorial (que elimina el objeto completo), borrar contenido raster **reemplaza píxeles con color de fondo** (típicamente blanco).

**Importante:** El borrado es **destructivo dentro del DWG**. Si quieres preservar original:
1. Guarda copia de seguridad de la imagen fuente
2. O usa SAVEAS antes de editar

### 1.2 Comando ERASE (Raster)

**Ribbon:**
```
Raster Design > Editing > Erase
```

**Comando:**
```
Comando: ERASE (con imagen raster seleccionada)
```

**Métodos de selección para borrar:**

#### Método 1: Rectangular Erase
1. Comando: `ERASE` o Ribbon > Erase
2. Select image: [Click en imagen]
3. Specify first corner: [Click primera esquina del rectángulo]
4. Specify opposite corner: [Click esquina opuesta]
5. Área rectangular se borra (se vuelve blanco)

**Uso:** Borrar áreas grandes rectangulares (ej: sello "VOID", logo en esquina).

#### Método 2: Polygonal Erase
1. Ribbon: Raster Design > Editing > Erase > **Polygonal**
2. Select image: [Click]
3. Specify first point of polygon: [Click primer vértice]
4. Specify next point: [Continuar definiendo vértices del polígono]
5. Press Enter: Cerrar polígono y borrar contenido interior

**Uso:** Borrar áreas irregulares (ej: mancha con forma irregular).

#### Método 3: Circle Erase
1. Ribbon: Raster Design > Editing > Erase > **Circle**
2. Select image: [Click]
3. Specify center: [Centro del círculo]
4. Specify radius: [Radio]
5. Área circular se borra

**Uso:** Sellos redondos, manchas circulares.

![Erase Methods](../imagenes/leccion-5-erase-methods.png)

### 1.3 Erase Color (Background Color)

Por defecto, áreas borradas se rellenan con **blanco**. Para cambiar:

**Settings:**
```
Ribbon: Raster Design > Editing > Erase Settings
```

- **Erase color:**
  - White (255,255,255) - Por defecto
  - Black (0,0,0) - Para imágenes con fondo negro
  - Custom color - Personalizado

**Cuándo usar color diferente:**
- Imágenes con fondo negro: Erase color = Black
- Fondos de color (mapas): Erase color = color de fondo dominante

### 1.4 Workflow: Limpiar Sello "VOID"

**Escenario:** Plano obsoleto tiene sello grande "VOID" diagonal que obstruye geometría.

**Procedimiento:**

1. **Zoom al sello:**
   - Zoom in para ver claramente los límites

2. **Método polygonal (sello irregular):**
   ```
   Ribbon: Raster Design > Editing > Erase > Polygonal
   Select image: [Click]
   ```

3. **Definir polígono alrededor del sello:**
   - Click vertices precisos alrededor del texto "VOID"
   - Minimizar área borrada (solo el sello, no geometría cercana)
   - Enter para cerrar polígono

4. **Resultado:**
   - Sello eliminado
   - Área es blanco puro
   - Geometría técnica debajo (si estaba cubierta) ahora requiere reconstrucción manual o interpolación

5. **Reconstrucción (si es necesario):**
   - Si el sello cubría líneas importantes, usa Touchup (sección 2) para reconstruirlas

## 2. Touchup Tool

### 2.1 ¿Qué es Touchup?

**Touchup** es una herramienta de "pincel" para edición pixel-level:
- Dibujar píxeles negros (o color seleccionado)
- Borrar píxeles (pintar blanco)
- Reparar líneas rotas
- Rellenar gaps pequeños
- Corregir imperfecciones menores

**Analogía:** Similar a Photoshop brush, pero optimizado para planos técnicos.

### 2.2 Comando TOUCHUP

**Ribbon:**
```
Raster Design > Editing > Touchup
```

**Comando:**
```
Comando: TOUCHUP
Select image: [Click en imagen]
```

**Cuadro de diálogo Touchup:**

![Touchup Dialog](../imagenes/leccion-5-touchup-dialog.png)

**Parámetros:**

- **Brush type:**
  - **Square:** Pincel cuadrado (más común para planos técnicos)
  - **Round:** Pincel redondo (para curvas suaves)
  - **Line:** Pincel lineal (para extender líneas rectas)

- **Brush size:** 1-99 pixels
  - Para líneas finas: 1-3 pixels
  - Para áreas grandes: 5-10 pixels

- **Color:**
  - **Foreground (negro):** Dibujar contenido
  - **Background (blanco):** Borrar contenido

- **Mode:**
  - **Freehand:** Dibujo a mano alzada
  - **Line:** Dibujar líneas rectas entre clicks

### 2.3 Técnicas de Touchup

#### Técnica 1: Reparar Línea Rota

**Problema:** Línea de muro tiene gap (se rompió en escaneo).

**Solución:**
1. Comando: `TOUCHUP`
2. Select image: [Click]
3. Configuración:
   - Brush type: **Line**
   - Brush size: **2** (ancho aproximado de la línea original)
   - Color: **Foreground (negro)**
   - Mode: **Line**
4. Click en inicio del gap
5. Click en fin del gap
6. Línea se dibuja automáticamente entre puntos
7. Enter para salir de Touchup

#### Técnica 2: Eliminar Mancha Pequeña

**Problema:** Mancha de 5x5 pixels en área de fondo blanco.

**Solución:**
1. `TOUCHUP`
2. Configuración:
   - Brush type: **Square**
   - Brush size: **6** (ligeramente mayor que mancha)
   - Color: **Background (blanco)**
   - Mode: **Freehand**
3. Click sobre mancha (o drag para cubrir)
4. Mancha borrada
5. Enter para salir

#### Técnica 3: Extender Línea

**Problema:** Línea de dimensión es demasiado corta, necesita extenderse 10 pixels.

**Solución:**
1. `TOUCHUP`
2. Brush type: **Line**, Size: **1**, Color: **Foreground**, Mode: **Line**
3. Click en extremo actual de la línea
4. Click 10 pixels más allá en dirección de extensión
5. Línea extendida perfectamente recta

### 2.4 Raster Snaps

Para edición precisa, usa **Raster Snaps** que detectan features en la imagen:

**Activar Raster Snaps:**
```
Comando: SNAPMODE (activar snaps)
Configurar: Raster Design > Settings > Raster Snaps
```

**Tipos de Raster Snaps:**
- **Endpoint:** Extremos de líneas raster
- **Midpoint:** Punto medio de segmentos
- **Intersection:** Intersección de líneas raster
- **Center:** Centro de círculos/arcos raster

**Uso con Touchup:**
1. Activa Raster Snaps
2. Durante Touchup mode Line:
   - Al acercar cursor a extremo de línea raster
   - Aparece marker de snap
   - Click para snap preciso
3. Resultado: Conexiones perfectas sin gaps

![Raster Snaps](../imagenes/leccion-5-raster-snaps.png)

## 3. Biased Touchup

### 3.1 Conceptos de Bias

**Biased Touchup** usa inteligencia contextual para:
- **Fill bias:** Rellenar gaps extendiendo contenido existente
- **Erase bias:** Borrar contenido expandiendo áreas blancas

La herramienta analiza píxeles circundantes y aplica patrón dominante.

### 3.2 Comando TOUCHUP con Bias

**Ribbon:**
```
Raster Design > Editing > Biased Touchup
```

**Parámetros adicionales:**

- **Bias type:**
  - **Fill (Rellenar):** Extiende píxeles oscuros hacia área del brush
  - **Erase (Borrar):** Extiende píxeles claros (blancos) hacia área del brush

- **Threshold:** 0-255
  - Define qué tan "oscuro" debe ser un píxel para considerarse contenido
  - Valores típicos: 128 para grayscale, 1 para bitonal

### 3.3 Caso de Uso: Rellenar Gap en Línea Gruesa

**Problema:** Línea gruesa de muro (5 pixels de ancho) tiene gap de 3 pixels.

**Touchup normal:**
- Requeriría dibujar 5 pasadas paralelas (tedioso)

**Biased Touchup con Fill:**
1. Comando: `TOUCHUP`
2. Select image: [Click]
3. Configuración:
   - Brush size: **10** (cubre gap + área circundante)
   - Bias: **Fill**
   - Threshold: **128**
4. Click sobre el gap
5. Algoritmo detecta línea negra circundante
6. Gap se rellena automáticamente con patrón de línea
7. Resultado: Línea continua sin trabajo manual pixel-by-pixel

### 3.4 Caso de Uso: Limpiar Borde de Línea

**Problema:** Línea tiene "pelusas" (pixels sueltos) en los bordes debido a escaneo de baja calidad.

**Biased Touchup con Erase:**
1. `TOUCHUP`
2. Brush size: **3**
3. Bias: **Erase**
4. Drag brush a lo largo del borde con pelusas
5. Algoritmo detecta que mayoría de área es blanca
6. Pixels sueltos se borran, dejando borde limpio
7. Línea principal permanece intacta

## 4. Mirror y Rotate

### 4.1 Mirror Image

**Cuándo espejear:**
- Imagen escaneada al revés (papel puesto incorrectamente en escáner)
- Crear imagen simétrica para diseño

**Comando MIRROR (Raster):**
```
Ribbon: Raster Design > Image Processing > Mirror
```

**Opciones:**
- **Horizontal:** Espejear izquierda-derecha
- **Vertical:** Espejear arriba-abajo

**Procedimiento:**
1. Comando: `MIRROR` (o Ribbon)
2. Select image: [Click en imagen]
3. Select mirror axis:
   - **Horizontal:** [Specify axis horizontal]
   - **Vertical:** [Specify axis vertical]
4. Imagen se espejea

**Nota:** Mirror afecta también el texto y números en la imagen (quedarán invertidos). Usar solo si es necesario.

### 4.2 Rotate Image

**Cuándo rotar:**
- Imagen escaneada en orientación incorrecta (landscape vs portrait)
- Alinear imagen con norte geográfico
- Corregir escaneo torcido

**Comando ROTATE (Raster):**
```
Ribbon: Raster Design > Image Processing > Rotate
```

**Métodos:**

#### Rotación por Ángulo
```
Comando: ROTATE (o IMAGEROTATE para raster específico)
Select image: [Click]
Specify rotation angle: 90 [Enter]
```

**Ángulos comunes:**
- **90:** Rotar 90° sentido antihorario
- **-90 o 270:** Rotar 90° sentido horario
- **180:** Rotar 180° (upside down)

#### Rotación Interactiva
```
ROTATE
Select image: [Click]
Specify base point: [Click punto de pivote]
Specify rotation angle or [Reference]: [Move mouse para rotar, click cuando está correcto]
```

**Uso:** Corrección visual cuando no conoces ángulo exacto.

### 4.3 Rotación Ortogonal vs No-Ortogonal

**Rotación ortogonal (90°, 180°, 270°):**
- **No hay interpolación de píxeles**
- Calidad 100% preservada
- **Recomendado** para planos técnicos

**Rotación no-ortogonal (ej: 15°, 45°):**
- **Requiere interpolación de píxeles**
- Puede introducir aliasing (bordes serrados)
- Aumenta tamaño de archivo
- **Evitar si es posible** en planos técnicos

**Mejor práctica:** Si imagen está ligeramente torcida (2-3°), usar **IMAGECORRELATE** con rotación en lugar de ROTATE directo.

## 5. Workflows de Limpieza Profesional

### 5.1 Workflow: Preparar Plano para Vectorización

**Objetivo:** Limpiar plano escaneado para vectorización automática óptima.

**Checklist de limpieza:**

1. **Eliminar bordes de escaneo:**
   - Usar Erase > Rectangular en las 4 esquinas
   - Borrar sombras de bordes del papel

2. **Eliminar title block (si no se necesita):**
   - Erase > Polygonal alrededor del title block
   - Preservar solo geometría técnica

3. **Limpiar manchas:**
   - Despeckle (Lección 4) para ruido general
   - Touchup > Erase para manchas grandes específicas

4. **Reparar líneas rotas:**
   - Touchup > Line mode para conectar gaps
   - Usar Raster Snaps para precisión

5. **Verificar con Zoom:**
   - Zoom in a todas las áreas editadas
   - Confirmar que no se introdujeron nuevos problemas

6. **Convertir a bitonal (si es grayscale):**
   - Threshold (Lección 4)
   - Verificar que ediciones anteriores se preservaron correctamente

**Resultado:** Imagen limpia lista para vectorización automática (Módulo 2).

### 5.2 Workflow: Limpiar Ortofoto para Presentación

**Objetivo:** Eliminar elementos no deseados de ortofotografía para presentación a cliente.

**Escenario:** Ortofoto tiene vehículos temporales, conos de tráfico, que no reflejan diseño final.

**Limitación:** Raster Design NO tiene herramientas de "content-aware fill" como Photoshop. Eliminación de elementos complejos en fotografías es limitada.

**Procedimiento básico:**

1. **Elementos pequeños:**
   - Touchup con color de fondo aproximado
   - Rellenar manualmente (tedioso para fotos)

2. **Elementos grandes:**
   - Mejor solución: Usar software de edición de fotos (Photoshop, GIMP)
   - Luego importar imagen editada a Raster Design

**Recomendación:** Raster Design es óptimo para planos técnicos. Para edición de fotografías complejas, usar herramientas especializadas.

## 6. Mejores Prácticas

### 6.1 Preservar Originales

**Siempre:**
1. Mantén copia de seguridad de imágenes originales
2. Ediciones en Raster Design son destructivas dentro del DWG
3. Si necesitas volver atrás, Reload imagen original desde Image Manager

### 6.2 Edición No Destructiva (Alternativa)

**Método:**
1. Guarda imagen editada con nombre diferente:
   ```
   Ribbon: Raster Design > Export Image
   Nombre: plano_limpio.tif (vs plano_original.tif)
   ```
2. Trabaja sobre `plano_limpio.tif`
3. Preserva `plano_original.tif` sin cambios

### 6.3 Documentar Ediciones

Para proyectos profesionales:
1. Mantén log de ediciones realizadas
2. Ejemplo:
   ```
   plano_A-101.tif:
   - Brightness +20, Contrast +15
   - Despeckle 3×3, Strength 3
   - Erase: Sello "VOID" en esquina superior derecha
   - Touchup: Reparar línea de muro en Grid C/3
   ```
3. Beneficio: Reproducibilidad, auditoría, control de calidad

## Ejercicio Práctico

### Ejercicio 5.1: Limpieza de Plano con Defectos

**Objetivo:** Aplicar técnicas de edición para limpiar plano con múltiples problemas.

**Material:**
- `plano_con_defectos.tif`

Defectos incluidos:
- Sello "OBSOLETO" en esquina superior derecha
- Mancha de café en área central
- Línea de muro rota (gap de 5 pixels)
- Bordes de escaneo con sombras

**Instrucciones:**

1. **Insertar y analizar:**
   - Inserta imagen en nuevo DWG
   - Zoom para identificar todos los defectos

2. **Eliminar sello "OBSOLETO":**
   ```
   Ribbon: Raster Design > Editing > Erase > Polygonal
   ```
   - Define polígono alrededor del sello
   - Enter para borrar

3. **Eliminar mancha de café:**
   - Si es pequeña (<20 pixels): Touchup con Background color
   - Si es grande: Erase > Circle

4. **Reparar línea de muro rota:**
   ```
   TOUCHUP
   Brush type: Line
   Brush size: 2 (ancho de la línea)
   Color: Foreground
   Mode: Line
   ```
   - Click en extremo izquierdo del gap
   - Click en extremo derecho del gap
   - Línea reparada

5. **Limpiar bordes de escaneo:**
   ```
   Erase > Rectangular
   ```
   - Borra rectángulo en cada esquina con sombras

6. **Verificación final:**
   - Zoom in a cada área editada
   - Confirma que defectos eliminados
   - Confirma que no se introdujeron nuevos problemas

7. **Exportar resultado:**
   ```
   Ribbon: Raster Design > Export Image
   Nombre: plano_limpio.tif
   Format: TIFF, Compression: LZW
   ```

**Entregables:**
- Screenshot antes/después (split screen)
- Archivo `plano_limpio.tif`
- Lista de ediciones realizadas

**Tiempo estimado:** 30 minutos

## Evaluación

1. **¿Qué comando usas para borrar un área rectangular en una imagen raster?**
   - a) DELETE
   - b) ERASE
   - c) REMOVE
   - d) CUT

2. **¿Qué herramienta es mejor para reparar un gap pequeño en una línea?**
   - a) Erase
   - b) Despeckle
   - c) Touchup
   - d) Mirror

3. **¿Qué significa "Biased Touchup con Fill"?**
   - a) Rellenar área con color sólido
   - b) Extender píxeles oscuros circundantes hacia el área del brush
   - c) Borrar todo el contenido
   - d) Crear patrón repetitivo

4. **¿Qué tipo de rotación preserva 100% la calidad de una imagen bitonal?**
   - a) Rotación de 45°
   - b) Rotación de 15°
   - c) Rotación de 90° (ortogonal)
   - d) Cualquier rotación

5. **¿Qué debes hacer antes de editar una imagen raster importante?**
   - a) Nada especial
   - b) Guardar copia de seguridad de la imagen original
   - c) Convertir a vector primero
   - d) Aumentar resolución

**Respuestas:** 1-b, 2-c, 3-b, 4-c, 5-b

## Recursos Adicionales

### Documentación
- [Raster Editing Tools Guide](https://help.autodesk.com/view/ARDES/2026/ENU/) - Autodesk Help
- [Best Practices for Raster Cleanup](https://knowledge.autodesk.com) - Knowledge Network

### Videos
- "Touchup and Erase Techniques" - Autodesk YouTube
- "Preparing Scanned Drawings for Vectorization" - LinkedIn Learning

## Resumen

En esta lección has aprendido:

- **Erase:** Eliminar contenido no deseado con selección rectangular, poligonal o circular
- **Touchup:** Herramienta de pincel para reparación pixel-level (líneas rotas, manchas pequeñas)
- **Biased Touchup:** Fill para rellenar gaps inteligentemente, Erase para limpiar bordes
- **Mirror y Rotate:** Corregir orientación (rotación ortogonal 90°/180°/270° preserva calidad)
- **Raster Snaps:** Snap a endpoints, intersections en imágenes para edición precisa
- **Workflow de limpieza:** Erase bordes → Limpiar manchas → Reparar líneas → Verificar

En la **Lección 6** aprenderás **Rubber Sheeting y Image Transformation**, técnicas avanzadas para corregir distorsiones complejas en imágenes mediante transformaciones geométricas no lineales.

---

**Siguiente:** [Lección 6 - Rubber Sheeting y Image Transformation](leccion-6.md)
