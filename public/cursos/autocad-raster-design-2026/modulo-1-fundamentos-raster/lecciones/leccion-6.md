# Lección 6: Rubber Sheeting y Image Transformation

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Comprender conceptos de rubber sheeting y transformaciones no lineales
- Corregir distorsiones en papel deformado mediante displacement vectors
- Aplicar rubber sheeting con múltiples puntos de control (4+)
- Alinear mosaicos de imágenes con distorsiones diferentes
- Utilizar triangulation methods para transformaciones precisas
- Evaluar calidad de rubber sheeting y realizar ajustes iterativos

## Introducción

Planos en papel, especialmente documentos antiguos, frecuentemente sufren **distorsiones no uniformes**:
- Papel estirado o encogido asimétricamente
- Dobleces y arrugas
- Deformación por humedad
- Montaje incorrecto en bastidores

Una correlación simple de 2 o 3 puntos (Lección 3) NO puede corregir estas distorsiones complejas. **Rubber sheeting** es una técnica de transformación no lineal que permite "estirar" diferentes partes de la imagen independientemente, como si la imagen fuera una hoja de goma elástica.

Esta técnica es esencial para:
- Digitalización de planos históricos deteriorados
- Alineación de fotografías aéreas no ortorectificadas
- Integración de mapas antiguos con coordenadas modernas
- Corrección de escaneos de documentos arrugados

## 1. Conceptos de Rubber Sheeting

### 1.1 Transformación Lineal vs No Lineal

**Transformación lineal (2-point correlation):**
- Toda la imagen se transforma uniformemente
- Ecuación: `X' = aX + bY + c`, `Y' = dX + eY + f`
- **Limitación:** NO puede corregir distorsiones locales

**Transformación no lineal (rubber sheeting):**
- Diferentes partes de la imagen se transforman diferentemente
- Basado en múltiples puntos de control (≥4)
- Cada región se ajusta según puntos cercanos
- **Ventaja:** Corrige distorsiones complejas, no uniformes

### 1.2 Displacement Vectors

**Vector de desplazamiento:** Diferencia entre posición actual de un punto en la imagen y su posición correcta.

**Ejemplo:**
- Punto de control en imagen: (100, 200) pixels
- Coordenada correcta en CAD: (50.5, 75.3) feet
- Después de correlación 2-point global, punto está en: (50.2, 75.8)
- **Displacement vector:** (0.3, -0.5) - cuánto se debe mover localmente

Con 4+ puntos de control, Raster Design calcula displacement vectors y aplica interpolación para transformar píxeles intermedios.

![Displacement Vectors](../imagenes/leccion-6-displacement-vectors.png)

### 1.3 Triangulation Methods

**Delaunay Triangulation:**
Raster Design divide la imagen en triángulos usando puntos de control como vértices.

**Proceso:**
1. Puntos de control definen vértices de triángulos
2. Cada triángulo se transforma independientemente
3. Transformación dentro del triángulo es lineal (afín)
4. Bordes entre triángulos se mantienen continuos (sin gaps)

**Resultado:** Transformación suave y continua que corrige distorsiones locales.

![Triangulation](../imagenes/leccion-6-triangulation.png)

## 2. Rubber Sheeting en Raster Design

### 2.1 Comando RUBBERSHEET

**Ribbon:**
```
Raster Design > Image Processing > Rubber Sheet
```

**Comando:**
```
Comando: RUBBERSHEET
Select image: [Click en imagen]
```

**Prerequisito:** Imagen debe estar previamente correlacionada (al menos 2-point correlation).

### 2.2 Proceso de Rubber Sheeting

**Procedimiento paso a paso:**

1. **Correlación inicial (2 o 3 puntos):**
   ```
   IMAGECORRELATE
   2POINT (o 3POINT)
   ```
   - Establece transformación base aproximada
   - Alinea imagen globalmente

2. **Identificar puntos de control adicionales:**
   - Busca features conocidos distribuidos por toda la imagen
   - Mínimo 4 puntos total (incluidos los de correlación inicial)
   - **Recomendado:** 6-10 puntos para documentos muy deformados

3. **Aplicar rubber sheeting:**
   ```
   RUBBERSHEET
   Select image: [Click]
   ```

4. **Agregar puntos de control:**
   ```
   Specify source point or [Undo/eXit]: [Click en punto conocido EN IMAGEN]
   Specify destination point: [Click en coordenada correcta en CAD, o escribe coordenadas]
   ```
   - Repite para cada punto adicional
   - Mínimo 2 puntos adicionales después de correlación 2-point (4 total)

5. **Ver preview (opcional):**
   - Algunos sistemas muestran preview de transformación
   - Verifica visualmente que distorsiones se corrigen

6. **Aplicar transformación:**
   ```
   Specify source point or [Undo/eXit]: X [Enter para eXit y aplicar]
   ```

7. **Verificación:**
   - Mide distancias conocidas
   - Compara con valores reales
   - Si es insuficiente, repite con más puntos

### 2.3 Selección Óptima de Puntos de Control

**Distribución espacial:**
- Puntos distribuidos uniformemente por toda la imagen
- Evitar agrupar puntos en una zona
- Incluir puntos en todas las esquinas y centro

**Calidad de puntos:**
- Features claramente identificables (esquinas, intersecciones)
- Evitar puntos ambiguos o difusos
- Preferir puntos con coordenadas conocidas con certeza

**Cantidad de puntos:**
- **4-6 puntos:** Distorsiones leves
- **8-12 puntos:** Distorsiones moderadas
- **15+ puntos:** Distorsiones severas, múltiples dobleces

**Ejemplo de distribución:**
```
Imagen rectangular con 9 puntos:

P1 -------- P2 -------- P3
|           |           |
|           |           |
P4 -------- P5 -------- P6  (P5 es centro)
|           |           |
|           |           |
P7 -------- P8 -------- P9
```

## 3. Casos Prácticos

### 3.1 Caso: Plano Arquitectónico con Doblez

**Situación:**
- Plano de 1955, tamaño D (24" × 36")
- Doblez diagonal en centro (papel fue doblado para archivo)
- Mitad superior estirada, mitad inferior comprimida

**Análisis:**
- Correlación 2-point alinea solo una mitad correctamente
- Otra mitad queda desalineada ~5-10%

**Solución con Rubber Sheeting:**

1. **Correlación inicial:**
   ```
   IMAGECORRELATE > 2POINT
   Point 1: Esquina inferior izquierda
   Point 2: Esquina inferior derecha
   ```
   - Mitad inferior ahora está correcta

2. **Rubber sheeting para mitad superior:**
   ```
   RUBBERSHEET
   ```
   - Point 3: Esquina superior izquierda (destino correcto)
   - Point 4: Esquina superior derecha (destino correcto)
   - Point 5: Centro del doblez (interpolar posición correcta)

3. **Puntos adicionales para suavidad:**
   - Point 6: Mitad de borde izquierdo
   - Point 7: Mitad de borde derecho
   - Total: 7 puntos de control

4. **Resultado:**
   - Mitad inferior: Sin cambios (ya estaba correcta)
   - Mitad superior: Ajustada según puntos 3, 4, 5
   - Transición suave en línea del doblez

**Precisión final:** <1% de error en mediciones en toda la imagen.

### 3.2 Caso: Mapa Topográfico de 1920

**Situación:**
- Mapa topográfico histórico en lino (material que encoge irregularmente)
- Esquinas tienen diferentes factores de escala
- Grid del mapa no es rectangular perfecto

**Mediciones:**
- Esquina SW a SE: Debería ser 100 km, mide 98.5 km (error -1.5%)
- Esquina SW a NW: Debería ser 80 km, mide 81.2 km (error +1.5%)
- Esquina NE a SE: Debería ser 80 km, mide 79.1 km (error -1.1%)

**Solución:**

1. **Correlación 3-point inicial:**
   - Punto 1: SW (0, 0)
   - Punto 2: SE (100000, 0) meters
   - Punto 3: NW (0, 80000)
   - Resultado: Error promedio ~1%

2. **Rubber sheeting con 12 puntos:**
   - 4 esquinas (ya usadas en correlación)
   - 4 puntos intermedios en bordes
   - 4 puntos en intersecciones de grid interior
   - Total: 12 puntos bien distribuidos

3. **Aplicar transformación:**
   ```
   RUBBERSHEET
   [Ingresar 8 puntos adicionales con coordenadas correctas]
   ```

4. **Verificación:**
   - Medir todas las líneas del grid
   - Error máximo: 0.3% (aceptable para mapa histórico)
   - Grid ahora es rectangular ortogonal

### 3.3 Caso: Fotografía Aérea No Ortorectificada

**Situación:**
- Fotografía aérea oblicua (no cenital perfecta)
- Distorsión por perspectiva (edificios se ven inclinados)
- Necesita alinearse con ortofotografía actual

**Limitación:** Rubber sheeting tiene límites para perspectiva extrema. Para casos severos, usar software especializado (Photogrammetry: Pix4D, Agisoft Metashape).

**Solución parcial con Rubber Sheeting:**

1. **Identificar features en ambas imágenes:**
   - Ortofoto correcta (referencia)
   - Foto aérea oblicua (a corregir)
   - Features: Esquinas de edificios, intersecciones de calles

2. **Correlación inicial:**
   - 3-point en área central (menos distorsión)

3. **Rubber sheeting intensivo:**
   - 20+ puntos de control
   - Distribuidos especialmente en bordes (mayor distorsión)

4. **Resultado:**
   - Corrección parcial (80-90% de precisión)
   - Suficiente para referencia visual
   - NO apto para mediciones precisas en bordes

**Recomendación:** Para fotografías aéreas críticas, usar ortorectificación profesional antes de importar a Raster Design.

## 4. Scale y Skew Correction

### 4.1 Non-Uniform Scale Correction

Caso especial: Papel estirado más en una dirección que en otra.

**Ejemplo:**
- Papel encogió 2% en X, estiró 1% en Y
- Correlación 3-point puede corregir esto directamente:

```
IMAGECORRELATE > 3POINT
Point 1: (0, 0) → (0, 0)
Point 2: (100, 0) → (102, 0)  (compensar 2% en X)
Point 3: (0, 100) → (0, 99)   (compensar 1% en Y)
```

**Sin rubber sheeting adicional si distorsión es uniforme.**

### 4.2 Skew (Shear) Correction

Imagen escaneada con papel no alineado ortogonalmente al escáner.

**Manifestación:** Rectángulo se convierte en paralelogramo.

**Solución con correlación 4-point:**
```
IMAGECORRELATE
Point 1: Esquina inferior izquierda → (0, 0)
Point 2: Esquina inferior derecha → (100, 0)
Point 3: Esquina superior izquierda → (0, 80)
Point 4: Esquina superior derecha → (100, 80)
```

Raster Design calcula transformación affine que corrige skew.

## 5. Mosaic Alignment

### 5.1 Alinear Múltiples Tiles con Distorsiones

**Escenario:** Set de 4 planos contiguos, cada uno con distorsión diferente.

**Desafío:** Alinearlos para formar mosaico continuo.

**Workflow:**

1. **Tile de referencia (Tile 1):**
   - Correlaciona normalmente (2 o 3 puntos)
   - Este tile define coordinate system base

2. **Tiles adyacentes (Tile 2, 3, 4):**
   - Para cada tile:
     - Correlación inicial (2-point)
     - Rubber sheeting con puntos en borde común con tile anterior
     - Ejemplo para Tile 2:
       - Puntos de control en borde derecho de Tile 1 = Borde izquierdo de Tile 2
       - Coordenadas deben coincidir exactamente

3. **Verificación de continuidad:**
   - Líneas que cruzan bordes deben ser continuas
   - Gap máximo aceptable: 1-2 pixels (a escala de ploteo)

4. **Ajuste iterativo:**
   - Si hay gaps, agregar puntos de control en áreas problemáticas
   - Re-aplicar rubber sheeting

## 6. Evaluación y Control de Calidad

### 6.1 Métricas de Calidad

**RMS Error (Root Mean Square Error):**
Raster Design puede calcular RMS error después de rubber sheeting.

**Fórmula:**
```
RMS = √[(Σ(Xerror²) + Σ(Yerror²)) / n]
```

Donde:
- Xerror, Yerror: Diferencias entre coordenadas calculadas y reales
- n: Número de puntos de control

**Interpretación:**
- RMS < 0.5% de dimensión de imagen: Excelente
- RMS 0.5-1%: Bueno
- RMS 1-2%: Aceptable para documentos históricos
- RMS >2%: Revisar puntos de control, posible error

### 6.2 Verificación Visual

**Checklist:**
1. Overlay con geometría CAD de referencia (si existe)
2. Verificar alineación en todas las esquinas
3. Medir distancias conocidas en diferentes zonas
4. Inspeccionar áreas cerca de dobleces/deformaciones
5. Buscar discontinuidades en líneas continuas

### 6.3 Ajuste Iterativo

Si calidad es insuficiente:

1. **Identificar zona problemática:**
   - ¿Esquina específica?
   - ¿Área central?

2. **Agregar puntos de control en esa zona:**
   - Repite RUBBERSHEET
   - Agrega 2-3 puntos adicionales en área problemática

3. **Re-evaluar:**
   - Mide nuevamente
   - Calcula RMS error

4. **Iterar hasta cumplir criterio de calidad**

## Ejercicio Práctico

### Ejercicio 6.1: Rubber Sheeting de Plano Deformado

**Objetivo:** Corregir distorsiones no uniformes mediante rubber sheeting.

**Material:**
- `plano_deformado.tif` (plano con doblez simulado)
- `puntos_control.dwg` (archivo CAD con puntos de referencia correctos)

**Escenario:** Plano tiene doblez diagonal, esquinas tienen diferentes escalas.

**Instrucciones:**

1. **Análisis inicial:**
   - Abre `puntos_control.dwg`
   - Observa distribución de 9 puntos de control (P1-P9 en grid 3×3)
   - Anota coordenadas de cada punto

2. **Insertar imagen:**
   ```
   IMAGEATTACH: plano_deformado.tif
   Insertion: 0,0, Scale: 1
   ```

3. **Correlación inicial (2-point):**
   ```
   IMAGECORRELATE
   2POINT
   Source P1 (esquina inf izq en imagen) → Destination: [coordenadas de P1 en CAD]
   Source P3 (esquina inf der en imagen) → Destination: [coordenadas de P3 en CAD]
   ```

4. **Medir error inicial:**
   - Comando: MEASUREGEOM > Distance
   - Mide desde P7 (esq sup izq) en imagen a P9 (esq sup der)
   - Compara con distancia real entre P7 y P9 en CAD
   - Anota error: _____%

5. **Rubber sheeting (7 puntos adicionales):**
   ```
   RUBBERSHEET
   Select image: [Click]

   Source P2 → Destination: [coord P2]
   Source P4 → Destination: [coord P4]
   Source P5 (centro) → Destination: [coord P5]
   Source P6 → Destination: [coord P6]
   Source P7 → Destination: [coord P7]
   Source P8 → Destination: [coord P8]
   Source P9 → Destination: [coord P9]

   eXit
   ```

6. **Medir error final:**
   - Repite medición del paso 4
   - Anota error después de rubber sheeting: _____%
   - Calcula mejora: _____%

7. **Verificación completa:**
   - Mide distancias entre todos los pares de puntos adyacentes
   - Compara con distancias reales
   - Completa tabla:

| Par de Puntos | Distancia Real | Distancia Medida | Error % |
|---------------|----------------|------------------|---------|
| P1-P2 | | | |
| P2-P3 | | | |
| P4-P5 | | | |
| ... | | | |

**Entregables:**
- Screenshot de imagen después de rubber sheeting con puntos visibles
- Tabla de errores completada
- RMS error calculado: _____

**Tiempo estimado:** 45 minutos

## Evaluación

1. **¿Cuántos puntos de control mínimos necesitas para rubber sheeting?**
   - a) 2 puntos
   - b) 3 puntos
   - c) 4 puntos
   - d) 10 puntos

2. **¿Qué tipo de transformación es rubber sheeting?**
   - a) Lineal uniforme
   - b) No lineal con ajustes locales
   - c) Solo rotación
   - d) Solo escala

3. **¿Qué método usa Raster Design para interpolar transformación entre puntos de control?**
   - a) Interpolación lineal simple
   - b) Triangulation (Delaunay)
   - c) Splines
   - d) Polynomial fitting

4. **¿Cuál es un buen valor de RMS error para rubber sheeting de plano histórico?**
   - a) 10%
   - b) 5%
   - c) <1%
   - d) 0% (perfecto)

5. **¿Dónde deben ubicarse los puntos de control para rubber sheeting óptimo?**
   - a) Todos en el centro
   - b) Solo en esquinas
   - c) Distribuidos uniformemente por toda la imagen
   - d) No importa la distribución

**Respuestas:** 1-c, 2-b, 3-b, 4-c, 5-c

## Recursos Adicionales

### Documentación
- [Rubber Sheeting Guide](https://help.autodesk.com/view/ARDES/2026/ENU/) - Autodesk Help
- [Geometric Correction of Raster Data](https://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/fundamentals-of-georeferencing-a-raster-dataset.htm) - ESRI

### Artículos Académicos
- "Rubber Sheeting for Historical Map Registration" - Cartography and Geographic Information Science
- "Non-linear Transformation Methods for Distorted Documents" - IEEE

## Resumen

En esta lección has aprendido:

- **Rubber sheeting:** Transformación no lineal para corregir distorsiones complejas no uniformes
- **Displacement vectors:** Cada punto de control define cuánto se debe ajustar esa zona
- **Triangulation:** Imagen se divide en triángulos, cada uno transformado independientemente
- **Mínimo 4 puntos:** Necesario para rubber sheeting; 8-12 puntos para distorsiones moderadas
- **Distribución uniforme:** Puntos de control deben cubrir toda la imagen, especialmente esquinas
- **RMS error:** Métrica de calidad; <1% es excelente para documentos históricos
- **Aplicaciones:** Planos doblados, mapas en lino encogido, fotografías aéreas oblicuas

Has completado el **Módulo 1: Fundamentos de Raster Design**. En el **Módulo 2: Vectorización y Conversión** aplicarás estos conocimientos para convertir imágenes raster limpias y correlacionadas en geometría vectorial CAD editable.

---

**Siguiente:** [Módulo 2 - Vectorización y Conversión](../../modulo-2-vectorizacion-conversion/README.md)
