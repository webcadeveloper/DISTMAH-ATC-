# Lección 4: Image Enhancement - Mejora de Calidad

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Ajustar brillo (brightness) y contraste (contrast) para mejorar legibilidad
- Eliminar ruido (despeckle) de imágenes escaneadas
- Convertir imágenes a bitonal mediante thresholding optimizado
- Invertir colores para negativos o fondos oscuros
- Analizar histogramas para diagnóstico de calidad de imagen
- Aplicar filtros de mejora de manera no destructiva

## Introducción

Planos escaneados, especialmente documentos antiguos o deteriorados, frecuentemente presentan problemas de calidad que dificultan su uso para vectorización o referencia visual. Papel amarillento, manchas, ruido del escáner, contraste bajo, y fondos sucios son problemas comunes.

**Image Enhancement** en Raster Design proporciona herramientas para:
- Mejorar legibilidad de planos deteriorados
- Optimizar imágenes para vectorización automática
- Reducir tamaño de archivo mediante conversión bitonal
- Preparar imágenes para OCR (reconocimiento de texto)

Estas técnicas son **no destructivas** cuando se aplican dentro de AutoCAD: la imagen original no se modifica en disco, solo su visualización en el DWG.

## 1. Brightness y Contrast

### 1.1 Conceptos

**Brightness (Brillo):**
- Aumenta o disminuye luminosidad general de la imagen
- Valores: -100 (muy oscuro) a +100 (muy claro)
- **Uso:** Planos muy oscuros (papel deteriorado) o muy claros (overexposed)

**Contrast (Contraste):**
- Amplifica diferencia entre tonos claros y oscuros
- Valores: -100 (bajo contraste, imagen "plana") a +100 (alto contraste)
- **Uso:** Planos con líneas tenues, bajo contraste original

### 1.2 Comando IMAGE ADJUST

**Método 1: Ribbon**
```
Ribbon: Raster Design > Image Processing > Adjust
```

**Método 2: Comando**
```
Comando: IMAGEADJUST
Select image(s): [Selecciona una o más imágenes]
```

**Cuadro de diálogo Image Adjust:**

![Image Adjust Dialog](../imagenes/leccion-4-image-adjust.png)

- **Brightness slider:** -100 a +100
- **Contrast slider:** -100 a +100
- **Preview checkbox:** Ver cambios en tiempo real
- **Reset:** Restaurar valores originales (0, 0)

### 1.3 Workflow de Ajuste

**Procedimiento recomendado:**

1. **Análisis inicial:**
   - Observa la imagen: ¿Está muy oscura? ¿Líneas tenues?
   - Identifica problema principal (brightness o contrast)

2. **Ajuste incremental:**
   - ☑ Activa **Preview**
   - Mueve **Brightness** en incrementos de ±10
   - Observa resultado en tiempo real
   - Si líneas siguen tenues, aumenta **Contrast** en +10 a +30

3. **Valores típicos:**
   - Plano oscuro (papel viejo): Brightness +20 a +40, Contrast +10 a +20
   - Plano claro (overexposed): Brightness -10 a -20, Contrast +20 a +30
   - Plano con bajo contraste: Brightness 0, Contrast +30 a +50

4. **Aplicar:**
   - Click **OK** para aplicar ajustes
   - Ajustes se guardan en el DWG (no modifican imagen original en disco)

### 1.4 Casos de Uso

**Ejemplo 1: Plano arquitectónico de 1965**
- **Problema:** Papel amarillento, líneas azules (blueprints) muy tenues
- **Solución:**
  - Brightness: +25 (aclarar fondo amarillo)
  - Contrast: +35 (resaltar líneas azules)
- **Resultado:** Líneas visibles claramente, fondo más limpio

**Ejemplo 2: Escaneo de plano con sombras**
- **Problema:** Sombras en esquinas debido a iluminación irregular del escáner
- **Solución:**
  - Brightness: +15 (aclarar sombras)
  - Contrast: +10 (mantener definición de líneas)
- **Resultado:** Sombras atenuadas, legibilidad mejorada

## 2. Despeckle - Eliminación de Ruido

### 2.1 ¿Qué es Speckle?

**Speckle** (ruido, granulado) son píxeles aleatorios oscuros/claros causados por:
- Polvo en el escáner
- Imperfecciones en papel (manchas, textura)
- Ruido electrónico del sensor del escáner
- Papel de baja calidad (newsprint, papel reciclado)

**Problema:** Speckle dificulta vectorización automática (algoritmo detecta ruido como geometría).

### 2.2 Comando DESPECKLE

**Ribbon:**
```
Raster Design > Image Processing > Despeckle
```

**Comando:**
```
Comando: DESPECKLE
Select image(s): [Selecciona imagen(s)]
```

**Cuadro de diálogo Despeckle:**

- **Method:**
  - **Median:** Filtro de mediana (más suave, preserva bordes)
  - **Smooth:** Suavizado general (puede difuminar detalles)
- **Tile size:** Tamaño de área analizada (3×3, 5×5, 7×7, 9×9 pixels)
  - Mayor tamaño = más agresivo
  - 3×3 o 5×5 típico para planos técnicos
  - 7×7 o 9×9 para imágenes muy ruidosas

**Parámetros:**
- **Strength:** 1 (bajo) a 10 (alto)
  - Fuerza de eliminación de ruido
  - Valores altos pueden eliminar detalles finos (líneas delgadas)

![Despeckle Effect](../imagenes/leccion-4-despeckle-before-after.png)

### 2.3 Mejores Prácticas para Despeckle

**Reglas de oro:**

1. **Empezar conservador:**
   - Median filter, 3×3 tile, Strength 2-3
   - Incrementar gradualmente si es insuficiente

2. **Preservar detalles:**
   - Para planos con líneas delgadas (0.5 mm): NO usar >5×5 tile
   - Para text pequeño: Strength ≤4

3. **Imágenes muy ruidosas:**
   - Aplicar despeckle múltiples veces con configuración moderada
   - Mejor que un solo pase muy agresivo

4. **Verificar zoom:**
   - Zoom in después de despeckle
   - Verifica que líneas finas no se perdieron

### 2.4 Workflow: Plano Escaneado Sucio

**Escenario:** Plano de 1980, escaneado con polvo en vidrio del escáner.

**Procedimiento:**

1. **Análisis:**
   - Zoom in: Observa puntos negros aleatorios (speckles)
   - Identifica áreas críticas con text pequeño

2. **Primera pasada:**
   ```
   DESPECKLE
   Method: Median
   Tile size: 3×3
   Strength: 3
   ```

3. **Evaluación:**
   - Zoom a áreas con text
   - ¿Text sigue legible? ✓
   - ¿Speckles reducidos? Si no es suficiente:

4. **Segunda pasada:**
   ```
   DESPECKLE
   Tile size: 5×5
   Strength: 4
   ```

5. **Resultado final:**
   - Imagen limpia, lista para vectorización
   - Text y líneas finas preservadas

## 3. Bitonal Conversion - Conversión a Blanco y Negro

### 3.1 ¿Por qué Convertir a Bitonal?

**Ventajas:**

- **Tamaño de archivo:** 1-bit es 1/24 del tamaño de RGB (ej: 90 MB → 4 MB)
- **Vectorización:** Algoritmos automáticos funcionan mejor con bitonal
- **Claridad:** Elimina tonos intermedios, solo blanco y negro puro
- **OCR:** Reconocimiento de texto requiere bitonal o grayscale

**Cuándo convertir:**
- Planos técnicos en blanco y negro (blueprints, dibujos a tinta)
- Mapas topográficos monocromáticos
- Diagramas, schematic drawings

**Cuándo NO convertir:**
- Ortofotografías (necesitan color/grayscale)
- Planos con codificación por color (planos MEP con utilities por color)
- Renderizaciones, presentaciones arquitectónicas

### 3.2 Comando THRESHOLD

**Ribbon:**
```
Raster Design > Image Processing > Threshold
```

**Comando:**
```
Comando: THRESHOLD
Select image(s): [Selecciona imagen(s) en grayscale o color]
```

**Cuadro de diálogo Threshold:**

- **Threshold value:** 0 (todo negro) a 255 (todo blanco)
  - Píxeles con valor < threshold → Negro (1)
  - Píxeles con valor ≥ threshold → Blanco (0)
- **Preview:** Ver resultado antes de aplicar
- **Histogram:** Visualizar distribución de tonos

![Threshold Dialog](../imagenes/leccion-4-threshold-dialog.png)

### 3.3 Selección del Valor de Threshold Óptimo

**Método del Histograma:**

1. **Analiza histograma:**
   - Eje X: Valores de píxel (0=negro, 255=blanco)
   - Eje Y: Cantidad de píxeles con ese valor
   - **Bimodal:** Dos picos (fondo y líneas) - ideal para bitonal

2. **Identifica valle entre picos:**
   - Primer pico (izquierda): Líneas oscuras
   - Segundo pico (derecha): Fondo claro
   - Valle entre picos: Valor de threshold óptimo

3. **Ejemplo:**
   - Histograma muestra:
     - Pico en 30 (líneas negras)
     - Valle en 120
     - Pico en 210 (fondo blanco)
   - **Threshold óptimo:** 120 (valle)

**Ajuste manual con Preview:**
```
1. Activa Preview
2. Empieza con 128 (valor medio)
3. Ajusta incrementalmente:
   - Líneas se ven cortadas → Disminuye threshold
   - Demasiado fondo sucio → Aumenta threshold
4. Objetivo: Líneas sólidas, fondo limpio
```

### 3.4 Workflow: Conversión de Grayscale a Bitonal

**Escenario:** Plano escaneado en grayscale (8-bit, 256 tonos de gris), necesitas bitonal para vectorización.

**Procedimiento:**

1. **Pre-procesamiento:**
   - Aplica **Brightness/Contrast** si es necesario (sección 1)
   - Aplica **Despeckle** para limpiar ruido (sección 2)

2. **Conversión bitonal:**
   ```
   Comando: THRESHOLD
   Select image: [Click en imagen]
   ```

3. **Ajusta threshold:**
   - Observa histograma
   - Identifica valle entre picos
   - Ejemplo: Valle en 135
   - Threshold value: **135**
   - ☑ Preview

4. **Verifica resultado:**
   - Zoom a áreas con líneas finas
   - Zoom a text pequeño
   - ¿Líneas completas y sólidas? ✓
   - ¿Fondo limpio sin manchas? ✓

5. **Aplicar:**
   - Click **OK**
   - Imagen ahora es 1-bit bitonal

6. **Guardar (opcional):**
   - Si quieres guardar versión bitonal como archivo separado:
   ```
   Ribbon: Raster Design > Image Processing > Export Image
   Format: TIFF
   Compression: LZW (o CCITT Group 4 para bitonal)
   ```

## 4. Invert Colors

### 4.1 Cuándo Invertir Colores

**Uso típico:**
- **Negativos:** Películas fotográficas negativas escaneadas
- **Fondos oscuros:** Planos con fondo negro y líneas blancas
- **Microfilm:** Escaneos de microfilm frecuentemente son negativos

### 4.2 Comando INVERT

**Ribbon:**
```
Raster Design > Image Processing > Invert
```

**Comando:**
```
Comando: INVERT
Select image(s): [Selecciona imagen(s)]
```

**Efecto:**
- Negro → Blanco
- Blanco → Negro
- Tonos grises se invierten (gris claro → gris oscuro)

**Aplicación instantánea:** No requiere parámetros, se aplica inmediatamente.

### 4.3 Caso de Uso: Microfilm

**Escenario:** Planos de 1950 preservados en microfilm, escaneados como negativos (líneas blancas, fondo negro).

**Problema:** Vectorización automática espera líneas negras sobre fondo blanco.

**Solución:**
```
1. INVERT (invertir colores)
2. Ahora: Líneas negras, fondo blanco
3. Proceder con vectorización normal
```

## 5. Histogram Analysis

### 5.1 Leer un Histograma

**Comando:**
```
Comando: HISTOGRAM
Select image: [Click en imagen]
```

**Componentes del histograma:**

- **Eje X:** Valores de intensidad (0=negro, 255=blanco para 8-bit)
- **Eje Y:** Frecuencia (número de píxeles)
- **Forma de la curva:** Indica distribución tonal

![Histogram Examples](../imagenes/leccion-4-histogram-types.png)

**Interpretación:**

| Forma del Histograma | Significado | Acción |
|----------------------|-------------|--------|
| Concentrado a la izquierda | Imagen muy oscura | Aumentar brightness |
| Concentrado a la derecha | Imagen muy clara (overexposed) | Disminuir brightness |
| Muy estrecho (pico único) | Bajo contraste | Aumentar contrast |
| Bimodal (2 picos) | Imagen con fondo y foreground claros | Ideal para threshold |
| Uniforme (plano) | Alto ruido o imagen sintética | Revisar calidad de escaneo |

### 5.2 Optimización Basada en Histograma

**Workflow:**

1. **Analiza histograma inicial:**
   ```
   HISTOGRAM
   ```

2. **Identifica problema:**
   - Ejemplo: Histograma concentrado en 180-220 (imagen muy clara)

3. **Aplica corrección:**
   ```
   IMAGEADJUST
   Brightness: -25 (centra histograma)
   Contrast: +20 (expande rango tonal)
   ```

4. **Verifica con histograma:**
   ```
   HISTOGRAM (de imagen ajustada)
   ```
   - Ahora debe estar más centrado y con rango más amplio

5. **Resultado:** Mejor uso del rango dinámico, mayor legibilidad.

## 6. Flujos de Trabajo Integrados

### 6.1 Workflow Completo: Plano Antiguo Deteriorado

**Escenario:** Plano arquitectónico de 1970, papel amarillento, manchas, bajo contraste.

**Objetivo:** Preparar para vectorización automática.

**Procedimiento paso a paso:**

1. **Insertar y correlacionar:**
   - IMAGEATTACH
   - IMAGECORRELATE (Lección 3)

2. **Mejora de brillo/contraste:**
   ```
   IMAGEADJUST
   Brightness: +20 (aclarar amarillento)
   Contrast: +30 (resaltar líneas)
   ```

3. **Eliminar ruido:**
   ```
   DESPECKLE
   Method: Median, 3×3, Strength: 3
   ```

4. **Convertir a bitonal:**
   ```
   THRESHOLD
   Analiza histograma
   Threshold: 125 (ajustar según histograma)
   ```

5. **Verificación final:**
   - Zoom in a detalles críticos
   - Verifica que líneas finas están preservadas
   - Verifica que text es legible

6. **Resultado:**
   - Imagen bitonal limpia
   - Lista para vectorización (Módulo 2)

### 6.2 Workflow: Ortofotografía Subexpuesta

**Escenario:** Ortofotografía aérea capturada con poca luz, muy oscura.

**Objetivo:** Mejorar para uso como base de diseño.

**Procedimiento:**

1. **Ajuste de exposición:**
   ```
   IMAGEADJUST
   Brightness: +35 (compensar subexposición)
   Contrast: +15 (recuperar detalle)
   ```

2. **NO convertir a bitonal:**
   - Ortofotografía debe mantenerse en color/grayscale
   - Bitonal perdería información valiosa de terreno

3. **Ajustar transparencia:**
   - Layer transparency: 30%
   - Permite ver diseño CAD sobre ortofoto

4. **Resultado:**
   - Ortofoto visible y útil como contexto
   - Diseño CAD claramente visible encima

## Ejercicio Práctico

### Ejercicio 4.1: Mejora de Plano Deteriorado

**Objetivo:** Aplicar técnicas de enhancement para restaurar plano antiguo.

**Material:**
- `plano_antiguo_deteriorado.tif` (imagen con problemas múltiples)

**Instrucciones:**

1. **Análisis inicial:**
   - Inserta imagen en nuevo DWG
   - Comando HISTOGRAM
   - Identifica problemas:
     - ¿Imagen oscura/clara?
     - ¿Alto nivel de ruido (speckle)?
     - ¿Bajo contraste?

2. **Aplicar Brightness/Contrast:**
   ```
   IMAGEADJUST
   ```
   - Experimenta con valores
   - Objetivo: Líneas visibles, fondo más claro
   - Anota valores usados: B=____, C=____

3. **Eliminar ruido:**
   ```
   DESPECKLE
   Method: Median
   Tile: 3×3
   Strength: 3
   ```
   - Verifica resultado con zoom

4. **Convertir a bitonal:**
   ```
   THRESHOLD
   ```
   - Analiza histograma
   - Identifica valle entre picos
   - Aplica threshold: ____
   - Preview para verificar

5. **Comparación antes/después:**
   - Guarda versión mejorada
   - Coloca versión original y mejorada lado a lado
   - Screenshot de comparación

6. **Exportar resultado:**
   ```
   Ribbon: Raster Design > Export Image
   Nombre: plano_antiguo_mejorado.tif
   Format: TIFF
   Compression: CCITT Group 4
   ```

**Entregables:**
- Screenshot antes/después
- Valores usados (Brightness, Contrast, Threshold)
- Archivo `plano_antiguo_mejorado.tif`

**Tiempo estimado:** 30 minutos

## Evaluación

1. **¿Qué herramienta usarías para aclarar un plano muy oscuro?**
   - a) Contrast
   - b) Brightness
   - c) Threshold
   - d) Invert

2. **¿Qué filtro es mejor para eliminar ruido preservando bordes?**
   - a) Smooth
   - b) Median
   - c) Blur
   - d) Sharpen

3. **En un histograma, ¿dónde está el valor óptimo de threshold?**
   - a) En el pico más alto
   - b) En el valle entre picos
   - c) Siempre en 128
   - d) En el extremo derecho

4. **¿Cuánto reduce el tamaño de archivo la conversión de RGB a bitonal?**
   - a) 50%
   - b) 75%
   - c) ~96% (1/24 del tamaño)
   - d) No reduce

5. **¿Cuándo NO deberías convertir una imagen a bitonal?**
   - a) Plano técnico B&N
   - b) Ortofotografía aérea
   - c) Diagrama de flujo
   - d) Blueprint

**Respuestas:** 1-b, 2-b, 3-b, 4-c, 5-b

## Recursos Adicionales

### Documentación
- [Image Enhancement Techniques](https://help.autodesk.com/view/ARDES/2026/ENU/) - Autodesk Help
- [Histogram Analysis for CAD](https://knowledge.autodesk.com) - Knowledge Network

### Artículos
- "Optimal Scanning Settings for Legacy Drawings" - SPAR 3D
- "Preparing Raster Images for Vectorization" - Autodesk University

## Resumen

En esta lección has aprendido:

- **Brightness/Contrast:** Ajustar luminosidad y diferencia tonal para mejorar legibilidad
- **Despeckle:** Eliminar ruido con filtro Median preservando detalles (3×3, Strength 2-4)
- **Threshold:** Convertir grayscale a bitonal usando histograma para identificar valor óptimo
- **Invert:** Invertir colores para negativos y microfilm
- **Histogram:** Analizar distribución tonal para diagnóstico y optimización
- **Workflow integrado:** Brightness/Contrast → Despeckle → Threshold para preparar vectorización

En la **Lección 5** aprenderás **Image Editing Básico**, técnicas para borrar contenido no deseado, realizar correcciones menores con touchup, y limpiar planos antes de vectorización.

---

**Siguiente:** [Lección 5 - Image Editing Básico](leccion-5.md)
