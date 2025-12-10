# Lección 2: Inserción y Gestión de Imágenes Raster

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

- Insertar imágenes raster en dibujos AutoCAD usando múltiples métodos
- Gestionar múltiples imágenes mediante Image Manager
- Configurar paths absolutos vs relativos para portabilidad de proyectos
- Controlar visualización mediante draw order, transparency y clipping
- Optimizar performance en proyectos con grandes volúmenes de imagery

## Introducción

La gestión eficiente de imágenes raster es fundamental para proyectos profesionales que pueden contener decenas o cientos de archivos de imagen. A diferencia de referencias externas (XREF) que traen geometría vectorial, las imágenes raster requieren consideraciones especiales de performance, almacenamiento y visualización.

En esta lección dominarás las técnicas para insertar, organizar y optimizar imágenes raster en proyectos CAD complejos, desde un único plano escaneado hasta mosaicos de ortofotografías que cubren kilómetros cuadrados.

## 1. Métodos de Inserción de Imágenes

### 1.1 Comando IMAGE vs IMAGEATTACH

Raster Design proporciona dos métodos principales para trabajar con imágenes:

#### Comando IMAGE (Paleta de Gestión)
```
Comando: IMAGE
```

Abre la paleta **External References** mostrando todas las imágenes insertadas.

**Características:**
- Vista consolidada de todas las referencias (DWG, PDF, imágenes)
- Permite attach, detach, reload, unload
- Muestra status de cada imagen (loaded, unloaded, not found)
- Control de paths (absolutos, relativos, sin path)

![Paleta Image Manager](../imagenes/leccion-2-image-palette.png)

#### Comando IMAGEATTACH (Inserción Directa)
```
Comando: IMAGEATTACH
```

Cuadro de diálogo para insertar nueva imagen.

**Parámetros clave:**
- **Image name:** Nombre de referencia en el dibujo
- **Path type:**
  - Full path (absoluto): `C:\Projects\Images\ortofoto.tif`
  - Relative path (relativo): `..\Images\ortofoto.tif`
  - No path: Solo nombre de archivo
- **Insertion point:** Coordenadas de inserción (X, Y, Z)
- **Scale:** Factor de escala (1 = tamaño real)
- **Rotation:** Ángulo de rotación

### 1.2 Ribbon Raster Design - Insert Image

**Método visual más utilizado:**

1. Ribbon: **Raster Design** tab > **Insert** panel > **Image**
2. Browse imagen deseada
3. Configura parámetros:
   - **Insertion point:** Specify on-screen (interactivo) o Enter coordinates
   - **Scale:** Uniform o Non-uniform (X, Y independientes)
   - **Rotation angle:** 0° por defecto
4. Click **OK**
5. Coloca la imagen en el dibujo

![Cuadro de diálogo Insert Image](../imagenes/leccion-2-insert-image-dialog.png)

### 1.3 Inserción por Drag & Drop

**Método rápido para imágenes individuales:**

1. Abre Windows Explorer con carpeta de imágenes
2. Arrastra archivo de imagen directamente al área de dibujo de AutoCAD
3. La imagen se inserta automáticamente con:
   - Insertion point donde se soltó el mouse
   - Scale 1:1 basado en DPI de la imagen
   - Rotation 0°

**Limitación:** No permite configurar parámetros antes de insertar.

## 2. Image Manager - Centro de Control

### 2.1 Abrir Image Manager

**Métodos:**
- Comando: `IMAGE`
- Ribbon: **Raster Design** tab > **Insert** panel > **Image Manager**
- Shortcut: Ctrl+4 (en algunos sistemas)

### 2.2 Interface de Image Manager

La paleta muestra tabla con columnas:

| Columna | Descripción |
|---------|-------------|
| **Image** | Nombre de referencia de la imagen |
| **Status** | Loaded, Unloaded, Not Found, Orphaned |
| **Size** | Dimensiones en píxeles |
| **Type** | Formato (TIFF, JPEG, PNG, etc.) |
| **Date** | Fecha de modificación del archivo |
| **Saved Path** | Path almacenado en el DWG |

### 2.3 Acciones desde Image Manager

**Click derecho en imagen:**

- **Attach:** Insertar nueva imagen
- **Detach:** Eliminar referencia (no borra archivo físico)
- **Reload:** Recargar desde archivo (útil si imagen cambió externamente)
- **Unload:** Descargar de memoria (libera RAM, mantiene referencia)
- **Details:** Ver metadatos (dimensiones, DPI, profundidad de color)
- **Path:** Cambiar path guardado

### 2.4 Gestión de Múltiples Imágenes

Para proyectos con decenas de imágenes:

**Organización por layers:**
1. Crea layers descriptivos: `RASTER-Ortofoto`, `RASTER-Planos`, `RASTER-Mapas`
2. Al insertar cada imagen, asígnala al layer correspondiente
3. Controla visibilidad por layer (freeze/thaw)

**Nomenclatura consistente:**
- Usa nombres descriptivos: `Ortofoto_Zona_Norte.tif` en lugar de `IMG_0001.tif`
- Numera secuencialmente si son mosaicos: `Tile_01.tif`, `Tile_02.tif`...

## 3. Path Management - Paths Absolutos vs Relativos

### 3.1 Tipos de Paths

#### Full Path (Absoluto)
```
C:\Projects\SiteA\Images\ortofoto_2024.tif
```

**Ventajas:**
- Siempre encuentra la imagen si no se mueve
- No ambiguo

**Desventajas:**
- No portable: Si proyecto se mueve a otra carpeta o computadora, pierde referencias
- Problemático en entornos colaborativos

#### Relative Path (Relativo)
```
..\Images\ortofoto_2024.tif
```

**Ventajas:**
- Portable: Funciona mientras estructura de carpetas se mantenga
- Ideal para proyectos compartidos

**Desventajas:**
- Requiere mantener estructura de carpetas
- Más complejo de gestionar

#### No Path
```
ortofoto_2024.tif
```

**Comportamiento:**
AutoCAD busca en:
1. Carpeta del DWG actual
2. Support File Search Path (definido en OPTIONS)
3. Carpeta de trabajo actual

**Uso:** Imágenes en misma carpeta que DWG.

### 3.2 Configurar Path Type

**Al insertar:**
1. Comando: `IMAGEATTACH`
2. En cuadro de diálogo, sección **Path type:**
   - ☑ **Full path**
   - ☐ **Relative path**
   - ☐ **No path**

**Cambiar path de imagen existente:**
1. Image Manager > Click derecho en imagen > **Path**
2. Selecciona nuevo tipo de path
3. Si es relativo, AutoCAD calcula automáticamente el path relativo

### 3.3 Mejores Prácticas para Proyectos

**Proyecto local (1 usuario):**
- Full path: Aceptable
- Organiza en estructura clara: `C:\Projects\NombreProyecto\Drawings\`, `C:\Projects\NombreProyecto\Images\`

**Proyecto compartido (equipo):**
- Relative path: Obligatorio
- Estructura recomendada:
```
ProyectoX/
├── Drawings/
│   ├── Site_Plan.dwg
│   └── Floor_Plans.dwg
├── Images/
│   ├── Ortofoto/
│   └── Scans/
└── References/
```

**Proyecto en red:**
- Full path UNC: `\\Server\Projects\ProyectoX\Images\ortofoto.tif`
- Asegurar permisos de lectura para todos los usuarios

## 4. Image Display y Visualización

### 4.1 Image Frame

El **frame** es el contorno rectangular que define los límites de la imagen.

**Controlar visualización del frame:**
```
Comando: IMAGEFRAME
```

Opciones:
- **0:** Frame no se muestra ni se plotea
- **1:** Frame se muestra y se plotea
- **2:** Frame se muestra pero NO se plotea (más común)

**Uso típico:** IMAGEFRAME = 2 (ver frame en pantalla para seleccionar imagen, pero no imprimirlo)

### 4.2 Clipping Boundaries

Limitar área visible de la imagen:

**Crear clipping rectangular:**
1. Selecciona imagen
2. Ribbon: **Image** tab > **Clip** panel > **Create Clipping Boundary**
3. Opción: **Rectangular**
4. Especifica dos esquinas del rectángulo

**Crear clipping poligonal:**
1. Comando: `IMAGECLIP`
2. Selecciona imagen
3. Opción: **New boundary** > **Polygonal**
4. Define vértices del polígono (Enter para terminar)

**Beneficio:** Mostrar solo área de interés, ocultar partes irrelevantes.

![Clipping Boundary Example](../imagenes/leccion-2-image-clipping.png)

### 4.3 Transparency

Hacer imagen semitransparente para ver geometría CAD debajo:

**Método 1: Propiedades de imagen individual**
1. Selecciona imagen
2. Properties palette (Ctrl+1)
3. **Transparency:** On/Off
4. Si soporta, ajusta **Transparency value:** 0-100%

**Método 2: Layer transparency**
1. Coloca imagen en layer específico
2. Layer Manager > Selecciona layer
3. **Transparency:** Ajusta 0-90
   - 0 = Opaco
   - 50 = Semi-transparente
   - 90 = Muy transparente

**Uso típico:** Transparencia 30-50% para ortofotografías de fondo mientras se diseña.

### 4.4 Draw Order

Controlar qué elementos se muestran adelante/atrás:

```
Comando: DRAWORDER
```

Opciones:
- **Front:** Traer al frente
- **Back:** Enviar al fondo
- **Above objects:** Por encima de objetos seleccionados
- **Below objects:** Por debajo de objetos seleccionados

**Workflow típico:**
1. Inserta ortofotografía
2. `DRAWORDER` > Selecciona imagen > **Back** (enviar al fondo)
3. Dibuja diseño sobre la imagen
4. Diseño se ve claramente sobre fondo de imagen

## 5. Performance y Optimización

### 5.1 Factores que Afectan Performance

| Factor | Impacto | Mitigación |
|--------|---------|------------|
| **Tamaño archivo** | Imágenes >100 MB ralentizan redraw | Usar formatos comprimidos (ECW, MrSID) |
| **Número de imágenes** | >50 imágenes pueden degradar performance | Unload imágenes no visibles |
| **Resolución** | Imágenes de muy alta resolución (>10,000 px) | Usar resolución apropiada (300 DPI max) |
| **Profundidad color** | RGB es 3x más pesado que grayscale | Convertir a bitonal si es posible |

### 5.2 Técnicas de Optimización

#### Unload Imágenes No Utilizadas

Para proyectos con mosaicos de imágenes:
1. Image Manager
2. Click derecho en imágenes fuera del área de trabajo > **Unload**
3. La referencia permanece, pero libera memoria

#### Usar Formatos Optimizados

Para ortofotografías grandes:
- **Original:** GeoTIFF 500 MB
- **Convertido:** ECW 50 MB (10x más pequeño)
- Performance: ECW carga 3-5x más rápido

Herramientas de conversión:
- Global Mapper
- ERDAS ER Mapper
- GDAL (free/open source)

#### Demand Loading

AutoCAD carga solo la porción visible de la imagen:

```
Comando: INDEXCTL
```

Valor: **1** (activado) - Solo carga píxeles visibles en viewport actual.

### 5.3 Image Quality Settings

Controlar calidad de visualización:

```
Comando: IMAGEQUALITY
```

Opciones:
- **Draft:** Baja calidad, máxima velocidad
- **High:** Alta calidad, más lenta

**Recomendación:**
- Usar **Draft** durante edición/navegación
- Cambiar a **High** para presentaciones o antes de plotear

## 6. Workflows Profesionales

### 6.1 Workflow: Mosaico de Ortofotografías

**Escenario:** Proyecto de carretera 10 km, requiere 20 tiles de ortofotografía.

**Procedimiento:**
1. Organiza tiles en carpeta: `Images\Ortofoto\`
2. Crea layer: `RASTER-Ortofoto-Base`
3. Inserta primer tile:
   - Ribbon: Raster Design > Insert > Image
   - Path type: **Relative**
   - Asigna a layer `RASTER-Ortofoto-Base`
4. Para tiles restantes:
   - Usa coordinates de esquinas conocidas (si GeoTIFF, están georeferenciados)
   - O correlaciona manualmente (Lección 3)
5. Ajusta draw order: Enviar todas al fondo
6. Configura transparency 30% en layer
7. Unload tiles fuera del segmento de trabajo actual

### 6.2 Workflow: Planos Escaneados Multi-Sheet

**Escenario:** Set de 50 planos escaneados (plantas arquitectónicas).

**Procedimiento:**
1. Estructura de carpetas:
```
Proyecto_Edificio/
├── Drawings/
│   ├── Floor_Plans.dwg (archivo índice)
│   ├── Level_01.dwg
│   ├── Level_02.dwg
│   └── ...
├── Scans/
│   ├── Architectural/
│   │   ├── A-101_Level01_Plan.tif
│   │   ├── A-102_Level02_Plan.tif
│   │   └── ...
```
2. En cada DWG de piso:
   - Inserta scan correspondiente con relative path
   - Correlaciona con grid del edificio (Lección 3)
   - Vectoriza elementos clave
3. En archivo índice (Floor_Plans.dwg):
   - XREF de todos los DWG de pisos
   - Imágenes NO se insertan directamente (vienen vía XREF)

## Ejercicio Práctico

### Ejercicio 2.1: Gestión de Múltiples Imágenes

**Objetivo:** Insertar y gestionar múltiples imágenes raster con diferentes técnicas.

**Materiales proporcionados:**
- `plano_arquitectonico_sheet1.tif`
- `plano_arquitectonico_sheet2.tif`
- `ortofoto_sitio.tif`

**Instrucciones:**

1. **Configurar estructura de carpetas:**
   ```
   Ejercicio2/
   ├── Drawings/
   │   └── Proyecto_Ejercicio2.dwg (crear aquí)
   └── Images/
       ├── plano_arquitectonico_sheet1.tif
       ├── plano_arquitectonico_sheet2.tif
       └── ortofoto_sitio.tif
   ```

2. **Crear layers:**
   - `RASTER-Planos`
   - `RASTER-Ortofoto`

3. **Insertar imágenes:**
   - Inserta `ortofoto_sitio.tif`:
     - Path type: **Relative**
     - Insertion point: 0,0
     - Scale: 1
     - Layer: `RASTER-Ortofoto`
   - Inserta `plano_arquitectonico_sheet1.tif`:
     - Path type: **Relative**
     - Insertion point: 1000,0 (a la derecha de ortofoto)
     - Layer: `RASTER-Planos`
   - Inserta `plano_arquitectonico_sheet2.tif`:
     - Path type: **Relative**
     - Insertion point: 2000,0
     - Layer: `RASTER-Planos`

4. **Configurar visualización:**
   - `IMAGEFRAME` = 2
   - Layer `RASTER-Ortofoto`: Transparency = 40%
   - Envía ortofoto al fondo (DRAWORDER)

5. **Verificar en Image Manager:**
   - Abre Image Manager (comando IMAGE)
   - Verifica que las 3 imágenes muestran status: **Loaded**
   - Verifica que Saved Path es relativo (no muestra C:\ completo)

6. **Prueba de portabilidad:**
   - Copia carpeta `Ejercicio2/` a otra ubicación (Desktop, por ejemplo)
   - Abre `Proyecto_Ejercicio2.dwg` desde nueva ubicación
   - Verifica que las 3 imágenes cargan correctamente

**Entregables:**
- Screenshot de Image Manager mostrando las 3 imágenes loaded
- Screenshot del drawing con las 3 imágenes visibles

**Tiempo estimado:** 25 minutos

## Evaluación

1. **¿Cuál es la ventaja principal de usar relative paths en proyectos compartidos?**
   - a) Ocupa menos espacio en disco
   - b) El proyecto es portable entre computadoras manteniendo estructura de carpetas
   - c) Las imágenes cargan más rápido
   - d) No hay diferencia con full paths

2. **¿Qué comando abre el Image Manager?**
   - a) IMAGEMANAGER
   - b) IMAGE
   - c) IMAGELIST
   - d) RASTER

3. **¿Qué valor de IMAGEFRAME muestra el frame en pantalla pero NO lo plotea?**
   - a) 0
   - b) 1
   - c) 2
   - d) 3

4. **¿Qué acción en Image Manager libera memoria RAM pero mantiene la referencia?**
   - a) Detach
   - b) Unload
   - c) Delete
   - d) Remove

5. **¿Cuál es el formato más eficiente para ortofotografías grandes (>200 MB)?**
   - a) TIFF sin compresión
   - b) JPEG
   - c) ECW o MrSID
   - d) BMP

**Respuestas:** 1-b, 2-b, 3-c, 4-b, 5-c

## Recursos Adicionales

### Documentación
- [Image Insertion Best Practices](https://help.autodesk.com/view/ARDES/2026/ENU/) - Autodesk Help
- [Managing External References](https://knowledge.autodesk.com/support/autocad) - Knowledge Network

### Videos
- "Inserting and Managing Raster Images" - Autodesk YouTube
- "Optimizing Performance with Large Images" - LinkedIn Learning

## Resumen

En esta lección has aprendido:

- **Múltiples métodos de inserción:** IMAGEATTACH, ribbon Insert Image, drag & drop
- **Image Manager:** Centro de control para gestionar múltiples imágenes (attach, detach, reload, unload)
- **Path management:** Relative paths son esenciales para proyectos portables y compartidos
- **Visualización:** IMAGEFRAME, clipping boundaries, transparency, y draw order
- **Optimización:** Unload, formatos comprimidos (ECW/MrSID), IMAGEQUALITY, demand loading
- **Workflows:** Organización por layers, nomenclatura consistente, estructura de carpetas profesional

En la **Lección 3** aprenderás **Image Correlation y Georeferencing**, técnicas esenciales para alinear planos escaneados con coordenadas CAD y georreferenciar imágenes con coordenadas del mundo real.

---

**Siguiente:** [Lección 3 - Image Correlation y Georeferencing](leccion-3.md)
