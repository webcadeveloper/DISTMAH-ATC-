# Ejercicios del Módulo 1: Fundamentos de Raster Design

## Introducción

Este archivo contiene **6 ejercicios prácticos** correspondientes a cada lección del Módulo 1, más un **Proyecto Integrador** que combina todos los conocimientos adquiridos. Los ejercicios están diseñados para reforzar las habilidades técnicas mediante casos de uso profesionales reales.

**Materiales necesarios:** Todos los archivos de práctica están disponibles en la carpeta `Ejercicios_Modulo1/` de los materiales del curso.

---

## Ejercicio 1: Configuración de Entorno y Análisis de Imágenes

**Lección relacionada:** Lección 1 - Introducción a Raster Design y Tipos de Imágenes

### Objetivos
- Activar y configurar toolset Raster Design
- Analizar características técnicas de diferentes tipos de imagen
- Evaluar idoneidad de imágenes para vectorización

### Materiales
- `plano_arquitectonico.tif` (bitonal, 300 DPI)
- `ortofoto_urbana.tif` (RGB, 200 DPI)
- `mapa_topografico.jpg` (color, 150 DPI)

### Instrucciones

1. **Activar Raster Design:**
   - Abre AutoCAD 2026
   - Cambia a toolset "Raster Design"
   - Verifica que ribbon Raster Design está visible
   - Screenshot del entorno configurado

2. **Analizar cada imagen con visor de Windows:**
   - Click derecho > Propiedades > Detalles
   - Anota:
     - Dimensiones (pixels)
     - Tamaño de archivo (MB)
     - DPI (si disponible)
     - Profundidad de bits

3. **Completar tabla de análisis:**

| Archivo | Formato | Ancho px | Alto px | Tamaño MB | Profundidad | DPI | Apta vectorización | Uso recomendado |
|---------|---------|----------|---------|-----------|-------------|-----|-------------------|----------------|
| plano_arquitectonico.tif | | | | | | | | |
| ortofoto_urbana.tif | | | | | | | | |
| mapa_topografico.jpg | | | | | | | | |

4. **Preguntas de análisis:**
   - ¿Cuál imagen es más grande en disco? ¿Por qué?
   - ¿Cuál es más apta para vectorización automática?
   - Si necesitaras escanear un plano D (24"×36") para vectorización, ¿qué DPI y profundidad de color usarías?

### Entregables
- Tabla completada
- Screenshot de Raster Design toolset activado
- Respuestas a preguntas de análisis

### Criterios de Evaluación
- Identificación correcta de características: 40%
- Evaluación de idoneidad: 30%
- Recomendaciones justificadas: 30%

**Tiempo estimado:** 30 minutos

---

## Ejercicio 2: Gestión de Múltiples Imágenes y Paths

**Lección relacionada:** Lección 2 - Inserción y Gestión de Imágenes Raster

### Objetivos
- Insertar múltiples imágenes con paths relativos
- Gestionar imágenes mediante Image Manager
- Configurar visualización (transparency, draw order, clipping)
- Verificar portabilidad del proyecto

### Materiales
- `plano_sheet1.tif`
- `plano_sheet2.tif`
- `plano_sheet3.tif`
- `ortofoto_fondo.tif`

### Instrucciones

1. **Configurar estructura de proyecto:**
   ```
   Ejercicio2/
   ├── Drawings/
   │   └── Proyecto_MultiImagen.dwg (crear aquí)
   └── Images/
       ├── plano_sheet1.tif
       ├── plano_sheet2.tif
       ├── plano_sheet3.tif
       └── ortofoto_fondo.tif
   ```

2. **Crear layers:**
   - `RASTER-Planos` (color: Cyan)
   - `RASTER-Ortofoto` (color: Green)

3. **Insertar imágenes con relative paths:**
   - Ortofoto:
     - Path type: Relative
     - Insertion: 0,0
     - Layer: RASTER-Ortofoto
   - Planos (alinearlos horizontalmente):
     - Sheet1: Insertion: 0,500, Layer: RASTER-Planos
     - Sheet2: Insertion: 1000,500, Layer: RASTER-Planos
     - Sheet3: Insertion: 2000,500, Layer: RASTER-Planos

4. **Configurar visualización:**
   - IMAGEFRAME = 2
   - Layer RASTER-Ortofoto: Transparency = 50%
   - DRAWORDER: Enviar ortofoto al fondo

5. **Crear clipping boundary en Sheet2:**
   - Clip área rectangular (mitad izquierda de la imagen)

6. **Verificar en Image Manager:**
   - Comando: IMAGE
   - Verifica que 4 imágenes están "Loaded"
   - Verifica que Saved Path es relativo
   - Screenshot de Image Manager

7. **Prueba de portabilidad:**
   - Copia carpeta `Ejercicio2/` a otra ubicación (Desktop)
   - Abre DWG desde nueva ubicación
   - Verifica que todas las imágenes cargan correctamente

### Entregables
- Proyecto completo (carpeta Ejercicio2/)
- Screenshot de Image Manager con 4 imágenes loaded
- Screenshot del drawing mostrando todas las imágenes con configuración aplicada
- Confirmación de prueba de portabilidad

### Criterios de Evaluación
- Paths relativos configurados correctamente: 30%
- Configuración de visualización: 30%
- Organización por layers: 20%
- Portabilidad verificada: 20%

**Tiempo estimado:** 40 minutos

---

## Ejercicio 3: Correlación de Plano Escaneado

**Lección relacionada:** Lección 3 - Image Correlation y Georeferencing

### Objetivos
- Correlacionar plano escaneado con coordenadas CAD conocidas
- Verificar precisión de correlación mediante mediciones
- Exportar world file para reutilización

### Materiales
- `site_plan_scan.tif` (plano de sitio escaneado, sin correlación)
- `site_coordinates.txt` (coordenadas de puntos de control)

### Datos de Puntos de Control

Archivo `site_coordinates.txt`:
```
Punto A (Esquina SO edificio principal): 100.00, 100.00
Punto B (Esquina SE edificio principal): 250.00, 100.00
Punto C (Esquina NO edificio principal): 100.00, 180.00
Punto D (Esquina NE edificio principal): 250.00, 180.00
Centro de rotonda: 175.00, 50.00
```

### Instrucciones

1. **Preparación:**
   - Crea nuevo DWG: `Ejercicio3_Correlacion.dwg`
   - Unidades: Architectural, feet
   - Inserta imagen `site_plan_scan.tif` sin correlación (0,0, scale 1)

2. **Dibujar puntos de referencia en CAD:**
   - Comando: POINT
   - Crea puntos A, B, C, D según coordenadas
   - PDMODE = 3 (para visualizar puntos)
   - PDSIZE = 10

3. **Correlación 2-point:**
   ```
   IMAGECORRELATE
   2POINT
   Source point 1: [Click en Punto A en IMAGEN]
   Destination point 1: 100,100
   Source point 2: [Click en Punto B en IMAGEN]
   Destination point 2: 250,100
   ENTER
   ```

4. **Verificación de precisión:**
   - MEASUREGEOM > Distance
   - Mide:
     - A a C en imagen: Debe ser 80.00'
     - B a D en imagen: Debe ser 80.00'
     - A a D diagonal: Debe ser √(150² + 80²) = 170.29'
   - Anota errores:

| Medición | Valor Real | Valor Medido | Error % |
|----------|-----------|--------------|---------|
| A a C | 80.00' | | |
| B a D | 80.00' | | |
| A a D | 170.29' | | |

5. **Exportar world file:**
   ```
   Ribbon: Raster Design > Georeference > Export Correlation
   Output: site_plan_scan.tfw
   ```

6. **Prueba de world file:**
   - Detach la imagen (Image Manager > Detach)
   - Re-inserta `site_plan_scan.tif`
   - Raster Design detecta .tfw
   - Confirma que se inserta automáticamente en posición correcta

### Entregables
- DWG con imagen correlacionada y puntos de referencia visibles
- Tabla de verificación de precisión completada
- Archivo `site_plan_scan.tfw` generado
- Screenshot de inserción automática usando world file

### Criterios de Evaluación
- Correlación correcta (error <1%): 50%
- Verificación de mediciones: 25%
- World file exportado y funcional: 25%

**Tiempo estimado:** 40 minutos

---

## Ejercicio 4: Mejora de Calidad de Plano Deteriorado

**Lección relacionada:** Lección 4 - Image Enhancement

### Objetivos
- Aplicar ajustes de brightness/contrast para mejorar legibilidad
- Eliminar ruido mediante despeckle
- Convertir a bitonal con threshold óptimo
- Analizar histogramas para diagnóstico

### Materiales
- `plano_deteriorado.tif` (plano de 1975, papel amarillento, ruido alto)

### Problemas de la Imagen
- Fondo amarillento (brightness bajo)
- Líneas tenues (contrast bajo)
- Alto nivel de speckle (ruido del escaneo)
- Profundidad: 8-bit grayscale

### Instrucciones

1. **Análisis inicial:**
   - Inserta imagen en nuevo DWG
   - Comando: HISTOGRAM
   - Screenshot del histograma inicial
   - Describe la distribución: ¿Concentrado a izquierda/derecha? ¿Bimodal?

2. **Ajustar Brightness y Contrast:**
   ```
   IMAGEADJUST
   ☑ Preview
   ```
   - Experimenta con valores hasta obtener resultado óptimo
   - Objetivo: Líneas claramente visibles, fondo más claro
   - Anota valores finales: Brightness = ____, Contrast = ____

3. **Eliminar ruido:**
   ```
   DESPECKLE
   Method: Median
   Tile size: 3×3
   Strength: 3
   ```
   - Verifica resultado con zoom en áreas con texto pequeño
   - Si ruido persiste, aplica segunda pasada: Tile 5×5, Strength 4

4. **Analizar histograma después de ajustes:**
   - HISTOGRAM (de imagen ajustada)
   - Screenshot del histograma mejorado
   - ¿Cómo cambió la distribución?

5. **Convertir a bitonal:**
   ```
   THRESHOLD
   ```
   - Observa histograma en cuadro de diálogo
   - Identifica valle entre picos (valor óptimo de threshold)
   - Threshold value: ____ (anota valor usado)
   - ☑ Preview para verificar
   - Objetivo: Líneas sólidas, fondo limpio

6. **Comparación antes/después:**
   - Guarda versión mejorada: `plano_mejorado.tif`
   - Crea layout con viewports lado a lado:
     - Viewport 1: Imagen original
     - Viewport 2: Imagen mejorada
   - Screenshot de comparación

7. **Exportar resultado:**
   ```
   Ribbon: Raster Design > Export Image
   Nombre: plano_mejorado.tif
   Format: TIFF, Compression: CCITT Group 4
   ```

### Entregables
- Screenshot de histograma inicial vs final
- Valores de ajustes utilizados (Brightness, Contrast, Despeckle, Threshold)
- Comparación antes/después (split screen)
- Archivo `plano_mejorado.tif` exportado
- Análisis de mejora en calidad (párrafo descriptivo)

### Criterios de Evaluación
- Análisis de histogramas: 20%
- Ajustes aplicados correctamente: 30%
- Calidad del resultado final: 30%
- Exportación con parámetros correctos: 20%

**Tiempo estimado:** 45 minutos

---

## Ejercicio 5: Limpieza de Plano con Edición Raster

**Lección relacionada:** Lección 5 - Image Editing Básico

### Objetivos
- Eliminar contenido no deseado (sellos, manchas)
- Reparar líneas rotas con Touchup
- Limpiar bordes de escaneo
- Preparar imagen para vectorización

### Materiales
- `plano_con_defectos.tif`

### Defectos de la Imagen
1. Sello "OBSOLETO" en esquina superior derecha
2. Mancha de café circular en área central (diámetro ~50 pixels)
3. Línea de muro rota (gap de 8 pixels en grid B-3)
4. Bordes de escaneo con sombras negras

### Instrucciones

1. **Inventario de defectos:**
   - Inserta imagen
   - Zoom y documenta ubicación exacta de cada defecto
   - Screenshot de cada defecto (4 screenshots)

2. **Eliminar sello "OBSOLETO":**
   ```
   Ribbon: Raster Design > Editing > Erase > Polygonal
   ```
   - Define polígono ajustado alrededor del sello (mínimo 6 vértices)
   - Minimiza área borrada
   - Verifica que área queda en blanco limpio

3. **Eliminar mancha de café:**
   - Si mancha es <30 pixels: TOUCHUP con Background color
   - Si mancha es >30 pixels:
     ```
     Erase > Circle
     Center: [Centro de mancha]
     Radius: 30 pixels
     ```

4. **Reparar línea de muro rota:**
   ```
   TOUCHUP
   Brush type: Line
   Brush size: 2 (ancho de línea original)
   Color: Foreground (negro)
   Mode: Line
   ```
   - Activar Raster Snaps para precisión
   - Click en extremo izquierdo del gap
   - Click en extremo derecho del gap
   - Línea se dibuja automáticamente
   - Verifica continuidad con zoom

5. **Limpiar bordes de escaneo:**
   ```
   Erase > Rectangular
   ```
   - Borra rectángulo de 50×50 pixels en cada esquina
   - Eliminar sombras negras de bordes

6. **Verificación final:**
   - Zoom recorrido completo de la imagen
   - Checklist:
     - ☐ Sello eliminado
     - ☐ Mancha eliminada
     - ☐ Línea reparada y continua
     - ☐ Bordes limpios
     - ☐ No se introdujeron nuevos problemas

7. **Exportar resultado limpio:**
   ```
   Export Image: plano_limpio.tif
   Format: TIFF, Compression: LZW
   ```

### Entregables
- 4 screenshots de defectos originales (documentación)
- Screenshot de imagen final limpia
- Archivo `plano_limpio.tif`
- Lista de técnicas utilizadas para cada defecto
- Comparación antes/después (lado a lado)

### Criterios de Evaluación
- Eliminación completa de defectos: 40%
- Reparación de línea precisa: 30%
- Limpieza sin introducir nuevos problemas: 20%
- Documentación del proceso: 10%

**Tiempo estimado:** 45 minutos

---

## Ejercicio 6: Rubber Sheeting de Plano Deformado

**Lección relacionada:** Lección 6 - Rubber Sheeting y Image Transformation

### Objetivos
- Aplicar rubber sheeting para corregir distorsiones no uniformes
- Utilizar múltiples puntos de control (9 puntos)
- Verificar precisión mediante mediciones
- Calcular RMS error

### Materiales
- `plano_deformado.tif` (plano con doblez diagonal simulado)
- `grid_referencia.dwg` (grid de 9 puntos de control)

### Grid de Referencia

```
P1 (0,0) ------- P2 (100,0) ------- P3 (200,0)
   |                 |                   |
   |                 |                   |
P4 (0,100) ----- P5 (100,100) ----- P6 (200,100)
   |                 |                   |
   |                 |                   |
P7 (0,200) ----- P8 (100,200) ----- P9 (200,200)
```

### Instrucciones

1. **Preparación:**
   - Abre `grid_referencia.dwg`
   - Verifica que 9 puntos están marcados (P1-P9)
   - Inserta `plano_deformado.tif` (insertion 0,0, scale 1)

2. **Mediciones antes de correlación:**
   - Mide distancia P1 a P9 (diagonal) en imagen sin correlacionar
   - Valor real: √(200² + 200²) = 282.84 unidades
   - Valor medido: ____
   - Error inicial: _____%

3. **Correlación inicial (2-point):**
   ```
   IMAGECORRELATE > 2POINT
   Source P1 → Destination: 0,0
   Source P3 → Destination: 200,0
   ```

4. **Mediciones después de correlación 2-point:**
   - Mide distancia P7 a P9 (borde superior)
   - Valor real: 200 unidades
   - Valor medido: ____
   - Error: _____%
   - (Deformación persiste en mitad superior)

5. **Rubber sheeting con 7 puntos adicionales:**
   ```
   RUBBERSHEET
   Select image: [Click]
   Source P2 → Destination: 100,0
   Source P4 → Destination: 0,100
   Source P5 (centro) → Destination: 100,100
   Source P6 → Destination: 200,100
   Source P7 → Destination: 0,200
   Source P8 → Destination: 100,200
   Source P9 → Destination: 200,200
   eXit
   ```

6. **Mediciones finales (verificación completa):**

| Par de Puntos | Distancia Real | Distancia Medida | Error % |
|---------------|----------------|------------------|---------|
| P1-P2 | 100 | | |
| P2-P3 | 100 | | |
| P1-P4 | 100 | | |
| P4-P7 | 100 | | |
| P5-P6 | 100 | | |
| P1-P9 (diagonal) | 282.84 | | |
| P3-P7 (diagonal) | 282.84 | | |

7. **Calcular RMS Error:**
   ```
   RMS = √[Σ(errores²) / n]
   ```
   - Suma de errores al cuadrado: ____
   - Número de mediciones: 7
   - RMS error: _____%

8. **Análisis de resultados:**
   - ¿RMS error <1%? (Excelente)
   - ¿Mejora significativa vs correlación 2-point?
   - Zonas con mayor error residual: ____

### Entregables
- Tabla de mediciones completada
- RMS error calculado
- Screenshot de imagen después de rubber sheeting con grid de referencia visible
- Análisis de resultados (párrafo)
- Comparación error inicial vs error final

### Criterios de Evaluación
- Rubber sheeting aplicado correctamente: 40%
- Mediciones precisas y tabla completa: 30%
- Cálculo de RMS error: 20%
- Análisis de resultados: 10%

**Tiempo estimado:** 60 minutos

---

## Proyecto Integrador: Digitalización Completa de Plano As-Built

### Descripción

Proyecto final que integra todas las técnicas del Módulo 1: análisis, inserción, correlación, mejora de calidad, edición, y preparación para vectorización.

### Escenario Profesional

Eres contratado por una empresa de facilities management para digitalizar planos as-built de un edificio de oficinas de 1985. Los planos originales están en papel, deteriorados, con anotaciones manuales obsoletas.

### Objetivos del Proyecto

Preparar 2 planos escaneados para vectorización:
1. Plano de planta arquitectónica (Level 2)
2. Plano de sistema MEP (HVAC)

### Materiales
- `asbuilt_level2_scan.tif`
- `asbuilt_hvac_scan.tif`
- `building_coordinates.txt` (coordenadas de puntos de control)
- `project_requirements.pdf` (especificaciones de calidad)

### Requisitos de Calidad

Según `project_requirements.pdf`:
- Error de correlación: <0.5%
- Limpieza: Sin manchas, sellos, o anotaciones manuales
- Calidad de imagen: Bitonal, líneas sólidas, fondo blanco puro
- Organización: Paths relativos, layers apropiados

### Instrucciones Generales

El proyecto se divide en fases. Completa cada fase secuencialmente.

### Fase 1: Análisis y Planificación (15 min)

1. **Análisis de imágenes:**
   - Inspecciona ambos planos escaneados
   - Identifica problemas de cada uno:
     - Distorsiones (dobleces, papel estirado)
     - Defectos (manchas, sellos, anotaciones)
     - Calidad (brightness, contrast, ruido)
   - Documenta en checklist

2. **Plan de trabajo:**
   - Para cada plano, define:
     - Técnicas de mejora a aplicar
     - Ediciones necesarias
     - Método de correlación (2-point, 3-point, rubber sheeting)
   - Estima tiempo para cada tarea

### Fase 2: Configuración de Proyecto (15 min)

1. **Estructura de carpetas:**
   ```
   Proyecto_AsBuilt/
   ├── Drawings/
   │   ├── Master_Level2.dwg
   │   └── Master_HVAC.dwg
   ├── Images_Original/
   │   ├── asbuilt_level2_scan.tif
   │   └── asbuilt_hvac_scan.tif
   ├── Images_Processed/
   │   └── (aquí se guardarán versiones procesadas)
   └── Documentation/
       ├── building_coordinates.txt
       ├── project_requirements.pdf
       └── work_log.txt (crear y mantener)
   ```

2. **Crear templates de DWG:**
   - Layers:
     - `RASTER-AsBuilt` (color: 253, lineweight: 0.25mm)
     - `REFERENCE-Grid` (color: 8, lineweight: 0.13mm)
   - Unidades: Architectural, feet
   - IMAGEFRAME = 2

### Fase 3: Procesamiento de Plano Level 2 (60 min)

1. **Mejora de calidad:**
   - Brightness/Contrast (si necesario)
   - Despeckle (ruido)
   - Threshold a bitonal

2. **Limpieza:**
   - Eliminar sello "VOID" en esquina
   - Eliminar anotaciones manuales obsoletas
   - Limpiar bordes de escaneo
   - Reparar líneas rotas (si existen)

3. **Correlación:**
   - Usar puntos de control de `building_coordinates.txt`
   - Aplicar método apropiado según distorsión
   - Verificar precisión (<0.5% error)
   - Exportar world file

4. **Exportar versión procesada:**
   - `Images_Processed/level2_processed.tif`
   - TIFF, CCITT Group 4 compression

### Fase 4: Procesamiento de Plano HVAC (60 min)

1. Repite proceso de Fase 3 para plano HVAC

2. **Verificación adicional para HVAC:**
   - Asegurar que ductos y equipos son claramente visibles
   - Verificar legibilidad de etiquetas de equipos
   - Confirmar que líneas de ductos no tienen gaps

### Fase 5: Integración y Control de Calidad (30 min)

1. **Crear master drawing:**
   - DWG que combina ambos planos como referencias
   - Layout para presentación

2. **Verificación de calidad:**
   - Checklist de requisitos:
     - ☐ Error de correlación <0.5%
     - ☐ Imágenes limpias (sin defectos)
     - ☐ Bitonal, alta calidad
     - ☐ Paths relativos configurados
     - ☐ Layers organizados
     - ☐ World files generados

3. **Documentación:**
   - Actualiza `work_log.txt` con:
     - Problemas encontrados en cada plano
     - Técnicas aplicadas
     - Valores de parámetros usados
     - Resultados de mediciones de precisión
     - Tiempo total invertido

### Fase 6: Presentación y Entrega (30 min)

1. **Crear presentación PDF:**
   - Página 1: Portada del proyecto
   - Página 2-3: Comparación antes/después de cada plano
   - Página 4: Resumen de técnicas aplicadas
   - Página 5: Métricas de calidad (errores, precisión)

2. **Package de entrega:**
   - Carpeta completa `Proyecto_AsBuilt/`
   - PDF de presentación
   - README.txt con instrucciones para abrir proyecto

### Entregables Finales

1. **Proyecto completo:** Carpeta `Proyecto_AsBuilt/` con toda la estructura
2. **Imágenes procesadas:** `level2_processed.tif`, `hvac_processed.tif`
3. **Drawings:** `Master_Level2.dwg`, `Master_HVAC.dwg`
4. **Documentación:** `work_log.txt` completo
5. **Presentación:** PDF de resultados
6. **World files:** `.tfw` para ambas imágenes

### Criterios de Evaluación

| Criterio | Peso | Descripción |
|----------|------|-------------|
| Calidad técnica | 40% | Precisión de correlación, limpieza, calidad bitonal |
| Proceso completo | 30% | Aplicación correcta de todas las técnicas |
| Organización | 15% | Estructura de carpetas, layers, nomenclatura |
| Documentación | 15% | Work log detallado, presentación profesional |

**Puntaje mínimo para aprobación:** 80%

### Tiempo Total Estimado

**3-4 horas** (distribuidas en 2 sesiones de trabajo)

### Notas

- Trabaja de manera organizada, completando una fase antes de continuar
- Documenta cada paso en `work_log.txt`
- Si encuentras problemas no previstos, documéntalos y propón solución
- Objetivo: Resultado profesional listo para presentar a cliente

---

## Resumen de Ejercicios

| Ejercicio | Tiempo | Dificultad | Técnicas Clave |
|-----------|--------|------------|----------------|
| 1. Análisis de imágenes | 30 min | Básica | Identificación de formatos, DPI, profundidad |
| 2. Gestión múltiple | 40 min | Básica | Paths relativos, Image Manager, layers |
| 3. Correlación | 40 min | Media | 2-point correlation, world files |
| 4. Mejora de calidad | 45 min | Media | Brightness/contrast, despeckle, threshold |
| 5. Edición raster | 45 min | Media | Erase, Touchup, limpieza |
| 6. Rubber sheeting | 60 min | Avanzada | Transformación no lineal, múltiples puntos |
| **Proyecto Integrador** | **180-240 min** | **Avanzada** | **Todas las técnicas integradas** |

**Total del módulo:** ~7-8 horas de práctica

---

**DISTMAH ATC - Authorized Training Center**
*Ejercicios desarrollados según estándares profesionales de la industria*
