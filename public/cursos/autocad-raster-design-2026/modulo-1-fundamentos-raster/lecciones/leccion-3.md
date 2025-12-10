# Lección 3: Image Correlation y Georeferencing

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Correlacionar planos escaneados con coordenadas CAD mediante puntos de control
- Aplicar diferentes métodos de correlación (2-point, 3-point, 4-point)
- Georreferenciar imágenes con coordenadas del mundo real usando world files
- Integrar imágenes georeferenciadas con sistemas de coordenadas de Map 3D
- Evaluar precisión de correlación y realizar ajustes correctivos

## Introducción

Cuando escaneas un plano técnico en papel o recibes una fotografía aérea, la imagen resultante no tiene información de escala ni orientación correcta respecto al sistema de coordenadas CAD. **Image correlation** es el proceso de alinear la imagen con coordenadas conocidas mediante puntos de control.

Este proceso es fundamental para:
- **Vectorización precisa:** Trazar geometría CAD sobre plano escaneado requiere alineación exacta
- **Integración con diseño existente:** Combinar planos legacy con diseños CAD actuales
- **Workflows GIS:** Georreferenciar imágenes para integración con datos espaciales
- **Mediciones precisas:** Habilitar mediciones reales sobre imágenes

## 1. Conceptos de Correlación

### 1.1 ¿Qué es Image Correlation?

**Correlación** es el proceso de establecer correspondencia entre:
- **Puntos en la imagen raster** (coordenadas píxel: X_imagen, Y_imagen)
- **Puntos en el espacio CAD** (coordenadas del mundo: X_cad, Y_cad)

![Concepto de Correlación](../imagenes/leccion-3-correlation-concept.png)

### 1.2 Transformation Types

#### Displacement (Desplazamiento)
- Solo traslación (X, Y)
- **Uso:** Imagen ya está a escala y orientación correctas, solo necesita moverse
- **Puntos necesarios:** 1 punto de control
- **NO corrige:** Rotación, escala, distorsión

#### 2-Point Correlation
- Traslación + Rotación + Escala uniforme
- **Uso:** Imagen requiere escalar y rotar, sin distorsión
- **Puntos necesarios:** 2 puntos de control
- **Corrige:** Posición, orientación, escala uniforme
- **NO corrige:** Distorsión, escala no uniforme

#### 3-Point Correlation
- Traslación + Rotación + Escala no uniforme (X, Y independientes)
- **Uso:** Imagen con escala diferente en X y Y (papel estirado, escaneo asimétrico)
- **Puntos necesarios:** 3 puntos de control
- **Corrige:** Posición, orientación, escalas X e Y diferentes
- **NO corrige:** Distorsiones complejas (warping)

#### 4-Point+ Correlation (Rubber Sheeting)
- Transformación compleja con corrección de distorsiones locales
- **Uso:** Papel deformado, fotografías con perspectiva
- **Puntos necesarios:** 4+ puntos de control
- **Corrige:** Distorsiones complejas, warping, perspectiva
- Ver Lección 6 para detalles de Rubber Sheeting

### 1.3 Selección del Método Correcto

| Condición de la Imagen | Método Recomendado |
|------------------------|-------------------|
| Escaneado limpio, papel plano, escáner calibrado | 2-Point |
| Papel ligeramente estirado o escáner descalibrado | 3-Point |
| Papel muy deformado, dobleces, roturas | Rubber Sheeting (4+ points) |
| Fotografía con perspectiva (no ortogonal) | Rubber Sheeting + Ajuste manual |

## 2. Proceso de Correlación en Raster Design

### 2.1 Preparación

**Antes de correlacionar:**

1. **Identifica puntos de control claros en la imagen:**
   - Esquinas de edificios
   - Intersecciones de grids
   - Ejes de columnas
   - Markers de topografía
   - Esquinas del título block

2. **Obtén coordenadas CAD de esos puntos:**
   - Si tienes archivo CAD base: Usa snaps para obtener coordenadas exactas
   - Si no tienes base CAD: Define coordenadas arbitrarias (ej: 0,0 en esquina inferior izquierda)

3. **Inserta la imagen sin correlación:**
   ```
   Comando: IMAGEATTACH
   ```
   - Insertion point: 0,0
   - Scale: 1
   - Rotation: 0

### 2.2 Ejecutar Correlación con 2 Puntos

**Comando principal:**
```
Comando: IMAGECORRELATE
```

**Procedimiento paso a paso:**

1. **Inicia correlación:**
   ```
   Comando: IMAGECORRELATE
   Select image: [Selecciona la imagen]
   ```

2. **Selecciona método:**
   ```
   Enter an option [2Point/3Point/Displacement] <2Point>: 2POINT
   ```

3. **Primer punto de control:**
   ```
   Specify source point 1 or [Undo]: [Click en punto conocido EN LA IMAGEN]
   Specify destination point 1: [Click en punto correspondiente en CAD, o escribe coordenadas]
   ```

   **Ejemplo práctico:**
   - Source point 1: Click en esquina inferior izquierda del plano escaneado
   - Destination point 1: 0,0 (si quieres que esa esquina esté en origen CAD)

4. **Segundo punto de control:**
   ```
   Specify source point 2 or [Undo]: [Click en segundo punto EN LA IMAGEN]
   Specify destination point 2: [Click o coordenadas en CAD]
   ```

   **Ejemplo:**
   - Source point 2: Click en esquina superior derecha del plano
   - Destination point 2: Si el plano mide 100' x 80', coordenadas serían 100,80

5. **Aplicar correlación:**
   ```
   Press ENTER to accept or [Undo]: [ENTER para aceptar]
   ```

**Resultado:** La imagen se escala, rota y posiciona para que los dos puntos coincidan exactamente con las coordenadas especificadas.

![Proceso de Correlación 2-Point](../imagenes/leccion-3-correlation-2point.png)

### 2.3 Correlación con 3 Puntos

**Cuándo usar:** Imagen escaneada tiene diferente escala en X y Y (papel se estiró durante escaneo).

**Procedimiento:**
```
Comando: IMAGECORRELATE
Select image: [Selecciona imagen]
Enter an option [2Point/3Point/Displacement] <2Point>: 3POINT
Specify source point 1: [Click en imagen]
Specify destination point 1: [Coordenadas CAD]
Specify source point 2: [Click en imagen]
Specify destination point 2: [Coordenadas CAD]
Specify source point 3: [Click en imagen]
Specify destination point 3: [Coordenadas CAD]
Press ENTER to accept or [Undo]: [ENTER]
```

**Selección óptima de puntos para 3-Point:**
- Punto 1: Esquina inferior izquierda
- Punto 2: Esquina inferior derecha (define eje X)
- Punto 3: Esquina superior izquierda (define eje Y)

**Esto permite corrección independiente de escala en X e Y.**

### 2.4 Verificación de Correlación

Después de correlacionar, **verifica precisión:**

1. **Medición de distancias conocidas:**
   ```
   Comando: MEASUREGEOM
   Opción: Distance
   ```
   - Mide entre puntos conocidos en la imagen correlacionada
   - Compara con distancia real
   - Diferencia <1% = Correlación excelente
   - Diferencia 1-3% = Correlación aceptable
   - Diferencia >3% = Revisar puntos de control

2. **Overlay con geometría CAD base:**
   - Si tienes archivo CAD de referencia, haz overlay
   - Verifica que elementos clave coincidan (muros, ejes, límites de propiedad)
   - Usa transparency para ver ambos simultáneamente

3. **Inspección visual:**
   - Zoom a esquinas y puntos de control
   - Verifica alineación visual
   - Busca distorsiones o desajustes

## 3. World Files - Georeferenciación Automática

### 3.1 ¿Qué es un World File?

Un **world file** es un archivo de texto que contiene 6 parámetros de transformación para georreferenciar una imagen.

**Nomenclatura:**
- Para `ortofoto.tif` → World file: `ortofoto.tfw`
- Para `imagen.jpg` → World file: `imagen.jgw`
- Para `mapa.png` → World file: `mapa.pgw`

**Regla general:** Reemplazar extensión con primera + última + "w"
- TIF → TFW
- JPG → JGW
- PNG → PGW

### 3.2 Estructura de World File

Archivo de texto plano con 6 líneas:

```
0.5000000000        (Línea 1: Tamaño de píxel en X)
0.0000000000        (Línea 2: Rotación sobre Y)
0.0000000000        (Línea 3: Rotación sobre X)
-0.5000000000       (Línea 4: Tamaño de píxel en Y, negativo)
440720.0000000000   (Línea 5: Coordenada X del centro del píxel superior izquierdo)
3751320.0000000000  (Línea 6: Coordenada Y del centro del píxel superior izquierdo)
```

**Parámetros:**
1. **Dimensión X del píxel:** Metros por píxel en dirección X
2. **Término de rotación sobre Y:** Generalmente 0
3. **Término de rotación sobre X:** Generalmente 0
4. **Dimensión Y del píxel:** Metros por píxel en dirección Y (negativo porque Y decrece hacia abajo en imagen)
5. **Coordenada X:** X del mundo real del centro del píxel (0,0) de la imagen
6. **Coordenada Y:** Y del mundo real del centro del píxel (0,0)

### 3.3 Insertar Imagen con World File

**Procedimiento automático:**

1. Asegúrate de que world file (.tfw, .jgw, etc.) está en misma carpeta que imagen y con nombre coincidente
2. Inserta imagen normalmente:
   ```
   Comando: IMAGEATTACH
   Select image: ortofoto.tif
   ```
3. **Raster Design detecta automáticamente el world file**
4. Cuadro de diálogo pregunta:
   ```
   "World file detected. Use correlation from world file?"
   [Yes] [No]
   ```
5. Click **Yes**
6. La imagen se inserta automáticamente georeferenciada

**Si world file existe, NO necesitas correlación manual.**

### 3.4 Crear World File desde Correlación Manual

Puedes crear world file para imagen que ya correlacionaste manualmente:

**Procedimiento:**
1. Correlaciona imagen manualmente (sección 2.2 o 2.3)
2. Ribbon: **Raster Design** tab > **Georeference** panel > **Export Correlation**
3. Selecciona imagen correlacionada
4. Specify output file: Guarda como `nombre_imagen.tfw` (o .jgw según formato)
5. World file se crea con parámetros de la correlación actual

**Beneficio:** Compartir correlación con otros usuarios, o reusar en futuros proyectos.

## 4. Integración con Map 3D Coordinate Systems

### 4.1 Workflow: Imagen Georeferenciada + Map 3D

**Escenario:** Tienes ortofotografía GeoTIFF en WGS84 UTM Zone 15N, proyecto Map 3D en mismo coordinate system.

**Procedimiento:**

1. **Asigna coordinate system al dibujo:**
   ```
   Ribbon: MAP 3D tab > Geolocation > Assign Coordinate System
   Search: EPSG:32615 (WGS84 UTM Zone 15N)
   Assign
   ```

2. **Inserta imagen GeoTIFF:**
   ```
   Comando: IMAGEATTACH
   Select: ortofoto_utm15n.tif
   ```

3. **Raster Design lee metadatos geoespaciales:**
   - Coordinate system embebido en GeoTIFF
   - World file si existe
   - Tags de georeferenciación

4. **Si coordinate systems coinciden:**
   - Imagen se inserta automáticamente en posición correcta
   - NO requiere correlación manual

5. **Si coordinate systems difieren:**
   - Map 3D ofrece transformar on-the-fly
   - Acepta transformación para insertar en coordenadas correctas

**Ventaja:** Cero trabajo manual de correlación si metadatos geoespaciales están correctos.

### 4.2 ESRI World Files con Map 3D

Map 3D también soporta formato ESRI para world files, que incluye coordinate system:

**Archivo .tfw extendido (formato ESRI):**
```
0.5000000000
0.0000000000
0.0000000000
-0.5000000000
440720.0000000000
3751320.0000000000
"PROJCS["WGS_1984_UTM_Zone_15N",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137,298.257223563]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",500000],PARAMETER["False_Northing",0],PARAMETER["Central_Meridian",-93],PARAMETER["Scale_Factor",0.9996],PARAMETER["Latitude_Of_Origin",0],UNIT["Meter",1]]"
```

Línea 7 contiene definición WKT (Well-Known Text) del coordinate system.

## 5. Casos Prácticos

### 5.1 Caso: Plano Arquitectónico Escaneado

**Situación:**
- Plano arquitectónico en papel tamaño D (24" × 36")
- Escaneado a 300 DPI, TIFF bitonal
- Necesitas vectorizar para renovación de edificio
- Tienes medidas conocidas del edificio

**Workflow:**

1. **Identifica puntos de control:**
   - Esquina inferior izquierda del edificio: Coordenadas reales conocidas (100', 100')
   - Esquina inferior derecha del edificio: (250', 100') - Edificio mide 150' de ancho

2. **Correlación 2-Point:**
   ```
   IMAGECORRELATE
   2POINT
   Source point 1: [Click esquina izq en imagen]
   Destination point 1: 100,100
   Source point 2: [Click esquina der en imagen]
   Destination point 2: 250,100
   ENTER
   ```

3. **Verificación:**
   - Mide ancho del edificio en imagen correlacionada
   - Debe ser exactamente 150' (250 - 100)

4. **Vectorización:**
   - Ahora puedes trazar muros, puertas, ventanas con snaps a imagen
   - Geometría CAD estará en coordenadas correctas del mundo real

### 5.2 Caso: Ortofotografía para Proyecto Civil

**Situación:**
- Ortofotografía aérea de sitio para proyecto de carretera
- Formato: GeoTIFF en WGS84 UTM Zone 16N
- Proyecto Map 3D en State Plane Coordinate System

**Workflow:**

1. **Preparación:**
   - Drawing ya tiene coordinate system: Texas State Plane North (EPSG:32139)

2. **Inserción con transformación:**
   ```
   IMAGEATTACH
   Select: ortofoto_utm16n.tif
   ```
   - Raster Design detecta que coordinate systems difieren
   - Prompt: "Transform from UTM 16N to State Plane?"
   - Respuesta: **Yes**

3. **Resultado:**
   - Imagen se transforma automáticamente a State Plane
   - Alineación perfecta con datos de topografía del proyecto
   - No requiere correlación manual

4. **Integración:**
   - Diseñar alineamiento sobre ortofoto
   - Todo en coordinate system unificado del proyecto

## Ejercicio Práctico

### Ejercicio 3.1: Correlación de Plano Escaneado

**Objetivo:** Correlacionar plano escaneado con coordenadas CAD conocidas.

**Materiales:**
- `site_plan_scanned.tif` (plano de sitio escaneado)
- `site_plan_reference.dwg` (archivo CAD con puntos de control)

**Datos conocidos:**
El plano escaneado muestra un terreno rectangular con:
- Esquina SO (suroeste): Coordenadas 0,0
- Esquina SE (sureste): Coordenadas 200,0 (terreno de 200' de ancho)
- Esquina NO (noroeste): Coordenadas 0,150 (terreno de 150' de profundidad)

**Instrucciones:**

1. **Crear nuevo DWG:**
   - Unidades: Architectural, pies y pulgadas
   - Guarda como: `Ejercicio3_Correlacion.dwg`

2. **Insertar imagen sin correlación:**
   ```
   IMAGEATTACH
   Select: site_plan_scanned.tif
   Insertion point: 0,0
   Scale: 1
   Rotation: 0
   ```

3. **Dibujar puntos de referencia CAD:**
   ```
   POINT
   Point 1: 0,0 (esquina SO)
   Point 2: 200,0 (esquina SE)
   Point 3: 0,150 (esquina NO)
   ```
   - Cambia PDMODE a 3 para ver puntos claramente

4. **Correlacionar imagen (método 2-Point):**
   ```
   IMAGECORRELATE
   Select image: [Click en imagen]
   2POINT
   Source point 1: [Click en esquina SO del plano en IMAGEN]
   Destination point 1: 0,0
   Source point 2: [Click en esquina SE del plano en IMAGEN]
   Destination point 2: 200,0
   ENTER
   ```

5. **Verificar correlación:**
   - Usa MEASUREGEOM > Distance
   - Mide desde esquina SO a esquina NO en imagen correlacionada
   - Debe medir 150'
   - Mide ancho (SO a SE): Debe ser 200'

6. **Exportar world file:**
   ```
   Ribbon: Raster Design > Georeference > Export Correlation
   Select image: [Click en imagen correlacionada]
   Output file: site_plan_scanned.tfw
   ```

7. **Prueba:**
   - Detach la imagen (IMAGE > Detach)
   - Vuelve a insertar `site_plan_scanned.tif`
   - Raster Design detecta .tfw y pregunta "Use correlation from world file?"
   - Click **Yes**
   - Imagen debe insertarse automáticamente en posición correcta

**Entregables:**
- Screenshot mostrando imagen correlacionada con puntos de referencia visibles
- Archivo `site_plan_scanned.tfw` generado

**Tiempo estimado:** 30 minutos

## Evaluación

1. **¿Cuántos puntos de control necesitas para correlación que corrija posición, rotación y escala uniforme?**
   - a) 1 punto
   - b) 2 puntos
   - c) 3 puntos
   - d) 4 puntos

2. **¿Qué extensión tiene el world file para una imagen TIFF?**
   - a) .wld
   - b) .tfw
   - c) .wft
   - d) .tif.world

3. **¿Qué método de correlación corrige escala diferente en X y Y?**
   - a) Displacement
   - b) 2-Point
   - c) 3-Point
   - d) Ninguno

4. **Cuando insertas una imagen con world file, ¿qué sucede?**
   - a) Raster Design lo ignora
   - b) Se georreferencia automáticamente según parámetros del world file
   - c) Debes ingresar las coordenadas manualmente
   - d) Solo funciona con GeoTIFF

5. **¿En qué línea del world file está la coordenada X del píxel superior izquierdo?**
   - a) Línea 1
   - b) Línea 3
   - c) Línea 5
   - d) Línea 6

**Respuestas:** 1-b, 2-b, 3-c, 4-b, 5-c

## Recursos Adicionales

### Documentación
- [Image Correlation Guide](https://help.autodesk.com/view/ARDES/2026/ENU/) - Autodesk Help
- [World File Specification](https://en.wikipedia.org/wiki/World_file) - Wikipedia
- [ESRI World File Format](https://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/world-files-for-raster-datasets.htm)

### Herramientas
- [GDAL](https://gdal.org/) - Crear world files para imágenes
- [Global Mapper](https://www.bluemarblegeo.com/global-mapper/) - Georeferenciación avanzada

## Resumen

En esta lección has aprendido:

- **Correlación:** Alinear imágenes raster con coordenadas CAD mediante puntos de control
- **Métodos:** Displacement (1pt), 2-Point (traslación+rotación+escala), 3-Point (escala X/Y independiente), Rubber Sheeting (4+pts)
- **Comando IMAGECORRELATE:** Proceso interactivo para correlacionar imágenes
- **World files:** Archivos .tfw/.jgw/.pgw con parámetros de georeferenciación automática
- **Map 3D integration:** Imágenes GeoTIFF se insertan automáticamente con coordinate systems
- **Verificación:** Medir distancias conocidas y comparar con valores reales

En la **Lección 4** aprenderás **Image Enhancement**, técnicas para mejorar calidad de imágenes escaneadas mediante ajuste de brillo, contraste, eliminación de ruido y conversión bitonal.

---

**Siguiente:** [Lección 4 - Image Enhancement - Mejora de Calidad](leccion-4.md)
