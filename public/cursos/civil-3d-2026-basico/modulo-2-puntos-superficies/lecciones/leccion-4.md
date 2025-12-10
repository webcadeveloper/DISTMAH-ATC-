# Lección 4: Creación de Superficies TIN

**Duración:** 60 minutos
**Módulo:** 2 - Puntos y Superficies Topográficas
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué es una superficie TIN y cómo funciona
✅ Crear superficies desde Point Groups
✅ Añadir Breaklines (líneas de quiebre) para modelado preciso
✅ Definir Boundaries (límites de superficie)
✅ Importar contours como data de superficie
✅ Trabajar con archivos DEM y datos GIS
✅ Analizar Surface Properties y estadísticas
✅ Aplicar workflows mejorados de superficies de Civil 3D 2026

---

## Introducción

Las **superficies TIN** (Triangulated Irregular Network) son modelos digitales tridimensionales del terreno basados en triangulación de puntos. Son la base de cualquier proyecto de infraestructura civil en Civil 3D: desde ellas se diseñan carreteras, se calculan volúmenes de movimiento de tierras, se analizan drenajes, y se generan planos topográficos.

A diferencia de las superficies grid (malla regular), las superficies TIN modelan con mayor precisión terrenos irregulares, concentrando puntos en áreas de mayor detalle (pendientes fuertes, cambios bruscos) y espaciándolos en áreas planas.

**Caso real:** Una superficie TIN de 10 hectáreas con 5,000 puntos topográficos puede calcular automáticamente volúmenes de corte y relleno, generar curvas de nivel, y servir como base para diseño de carreteras, todo dinámicamente actualizado cuando se modifiquen los datos fuente.

---

## 1. ¿Qué es una Superficie TIN?

### 1.1 Definición Técnica

**TIN = Triangulated Irregular Network**

Una superficie TIN conecta puntos topográficos mediante triángulos, creando una red irregular que modela la topografía del terreno. Cada triángulo define un plano con pendiente y orientación específicas.

**Componentes de una TIN:**
- **Vértices** - Puntos topográficos con elevación (X, Y, Z)
- **Edges** - Aristas que conectan vértices
- **Faces** - Triángulos formados por 3 vértices

![TIN Structure](../../imagenes/leccion-2-4-tin-structure.png)

### 1.2 TIN vs Grid (Raster)

| Aspecto | TIN (Irregular) | Grid (Regular) |
|---------|-----------------|----------------|
| Estructura | Triángulos irregulares | Malla regular de celdas |
| Densidad | Variable según detalle | Uniforme |
| Precisión | Alta en cambios bruscos | Promediada |
| Tamaño archivo | Eficiente | Puede ser grande |
| Uso Civil 3D | Estándar | Raro |

**Ventaja de TIN:** Modela con precisión cambios bruscos (bordes de acera, zanjas, crestas) usando breaklines.

### 1.3 Objetos que Pueden Generar Superficies

En Civil 3D, las superficies TIN se crean desde múltiples fuentes de datos:

- **Point Groups** - Grupos de puntos COGO
- **Breaklines** - Líneas 3D, polylines, feature lines
- **Boundaries** - Límites de superficie (incluir/excluir áreas)
- **Contours** - Curvas de nivel existentes
- **DEM Files** - Digital Elevation Models (GIS data)
- **Drawing Objects** - Líneas 3D, polilíneas 3D, bloques con elevación
- **LandXML** - Superficies importadas desde otros software

---

## 2. Crear Superficie TIN desde Point Group

### 2.1 Procedimiento Básico

**Paso 1: Verificar que tienes puntos**

1. Toolspace → Prospector → Point Groups
2. Verifica que tienes al menos un Point Group con puntos (ej: `_All Points`)

**Paso 2: Crear Surface**

1. Ribbon → **Home** tab → **Create Design** panel
2. Click en **Surface** dropdown → **Create Surface**

Aparece **Create Surface** dialog.

**Paso 3: Configurar Surface Properties**

**Pestaña Information:**

- **Name:** `EG-Existing-Ground` (Existing Ground - terreno existente)
  - **Nomenclatura:** EG = Existing, FG = Finished (propuesta), TEMP = Temporal
- **Description:** "Superficie de terreno existente del levantamiento topográfico"
- **Style:** `Contours 1m and 5m (Design)` (estilo de visualización)
- **Render Material:** `Sitework.Planting.Grass` (material para renderizado)

![Create Surface Dialog](../../imagenes/leccion-2-4-create-surface-dialog.png)

4. Click **OK**

**Superficie creada** pero vacía (sin datos aún).

### 2.2 Añadir Point Group a Surface

**Paso 1: Localizar Surface en Prospector**

1. Toolspace → **Prospector** tab
2. Expande **Surfaces**
3. Expande tu superficie: `EG-Existing-Ground`
4. Expande **Definition**

**Componentes de Definition:**
- **Boundaries** - Límites
- **Breaklines** - Líneas de quiebre
- **Contours** - Curvas de nivel como data
- **DEM Files** - Archivos DEM
- **Drawing Objects** - Objetos de dibujo
- **Edits** - Ediciones manuales
- **Point Groups** - Grupos de puntos
- **Point Files** - Archivos de puntos

**Paso 2: Add Point Group**

5. Click derecho en **Point Groups** → **Add...**

Aparece **Point Groups** dialog con lista de todos los Point Groups disponibles.

6. Selecciona Point Group(s) deseados:
   - `_All Points` (todos los puntos)
   - O grupos específicos: `TN-Terreno-Natural`

7. Click **OK**

**Superficie se calcula automáticamente:**
- Civil 3D triangula todos los puntos
- Genera TIN
- Visualiza superficie en Model Space según Surface Style

![Add Point Group to Surface](../../imagenes/leccion-2-4-add-pointgroup.png)

### 2.3 Verificar Superficie Creada

**En Model Space:**
- Deberías ver triángulos conectando puntos (si Surface Style muestra triangles)
- O contours (curvas de nivel) si Surface Style está configurado para contours

**En Prospector:**
- Expande Surface → Definition → Point Groups
- Lista muestra Point Groups incluidos
- Cuenta de puntos usados

**Surface Statistics:**
1. Click derecho en superficie (en Prospector) → **Surface Properties...**
2. Pestaña **Statistics**
   - **General:**
     - Number of points: Cantidad de puntos
     - Minimum/Maximum elevation: Rango de elevaciones
     - Mean elevation: Elevación promedio
   - **Extended:**
     - Number of triangles: Cantidad de triángulos TIN
     - 2D/3D area: Área de superficie

---

## 3. Breaklines (Líneas de Quiebre)

### 3.1 ¿Qué son Breaklines?

**Breaklines** son líneas 3D que definen cambios bruscos en el terreno que los puntos solos no capturan bien:

- **Bordes de acera** (edge of curb)
- **Zanjas** (ditches)
- **Crestas de taludes** (ridge lines)
- **Bordes de pavimento** (edge of pavement)
- **Muros de contención** (retaining walls)

**Problema sin breaklines:**
Si solo usas puntos, la triangulación TIN puede crear triángulos que "cruzan" por encima de una zanja o acera, generando modelo impreciso.

**Solución con breaklines:**
Las breaklines fuerzan que la triangulación respete estos bordes, creando triángulos que siguen exactamente el cambio de terreno.

![Breaklines Comparison](../../imagenes/leccion-2-4-breaklines-comparison.png)

### 3.2 Tipos de Breaklines

| Tipo | Descripción | Uso |
|------|-------------|-----|
| **Standard** | Línea 3D simple | Bordes generales |
| **Proximity** | Controla distancia de triangulación | Evitar triángulos largos |
| **Wall** | Define muro vertical | Muros de contención |
| **Non-destructive** | No modifica triangulación existente | Breaklines temporales |

**Tipo más común:** Standard breakline.

### 3.3 Crear Breaklines desde Polilíneas 3D

**Escenario:** Tienes polilínea 3D que representa borde de acera.

**Procedimiento:**

1. Dibuja **3D Polyline** o **Feature Line** representando el borde
   - Asegúrate de que cada vértice tenga elevación correcta
   - Command: `3DPOLY` o usa **Feature Line** (Ribbon → Home → Create Design → Feature Line)

2. Toolspace → Prospector → Surfaces → (tu superficie) → Definition → **Breaklines**

3. Click derecho en **Breaklines** → **Add...**

Aparece **Add Breaklines** dialog.

4. **Description:** `Borde-Acera-Norte`
5. **Type:** `Standard`
6. Click **OK**

7. Command line: `Select objects:`
8. Selecciona tu polilínea 3D
9. Presiona **Enter**

**Breakline añadida:**
- Superficie se recalcula automáticamente
- Triángulos ahora respetan la breakline
- Modelo más preciso

![Add Breaklines](../../imagenes/leccion-2-4-add-breaklines.png)

### 3.4 Breaklines desde Puntos (Sequential)

**Método:** Crear breakline conectando puntos en secuencia.

**Uso:** Cuando tienes puntos levantados a lo largo de un borde (ej: puntos "EP" de edge of pavement).

**Procedimiento:**

1. Toolspace → Prospector → Surfaces → Definition → Breaklines
2. Click derecho → **Add...**
3. **Type:** `Standard`
4. **Description:** `Edge-Pavement-Sequential`
5. Click **OK**
6. En command line, opción `[Select/Edit/Delete]`, escribe: `E` (Edit)
7. Selecciona puntos en secuencia (en orden) que forman el borde
8. Presiona **Enter**
9. Civil 3D crea breakline conectando esos puntos en orden

---

## 4. Boundaries (Límites de Superficie)

### 4.1 ¿Qué son Boundaries?

**Boundaries** definen los límites exterior e interior de una superficie:

- **Outer Boundary** - Límite exterior (área a incluir)
- **Hide Boundary** - Ocultar área dentro de superficie
- **Show Boundary** - Mostrar área específica

**Uso principal:** Recortar superficie a área de proyecto, excluir áreas sin datos válidos.

### 4.2 Tipos de Boundaries

| Tipo | Función |
|------|---------|
| **Outer** | Define límite exterior (todo fuera se elimina) |
| **Hide** | Oculta área interior (crea "agujero" en superficie) |
| **Show** | Muestra solo área específica |
| **Data Clip** | Recorta data de superficie (más agresivo que Hide) |

### 4.3 Crear Outer Boundary (Límite Exterior)

**Escenario:** Superficie tiene triangulación extendida fuera del área de proyecto. Necesitas recortarla.

**Procedimiento:**

1. Dibuja **Polyline cerrada** (closed polyline) rodeando el área de proyecto
   - Command: `PLINE`
   - Dibuja contorno del área deseada
   - Cierra polyline: Opción `Close` al final

2. Toolspace → Prospector → Surfaces → (superficie) → Definition → **Boundaries**

3. Click derecho en **Boundaries** → **Add...**

Aparece **Add Boundaries** dialog.

4. **Name:** `Limite-Proyecto`
5. **Type:** `Outer` (límite exterior)
6. **Non-destructive breakline:** ✗ (dejar desmarcado)
7. Click **OK**

8. Command line: `Select objects:`
9. Selecciona tu polyline cerrada
10. Presiona **Enter**

**Resultado:**
- Superficie recortada al área dentro de la polyline
- Triángulos fuera del límite eliminados

![Outer Boundary](../../imagenes/leccion-2-4-outer-boundary.png)

### 4.4 Crear Hide Boundary (Ocultar Área)

**Uso:** Excluir edificio, lago, o área sin datos dentro de la superficie.

**Procedimiento:**

1. Dibuja polyline cerrada alrededor del área a ocultar (ej: contorno de edificio)
2. Boundaries → Add...
3. **Type:** `Hide`
4. Selecciona polyline
5. Área dentro de polyline se oculta (crea "agujero" en superficie)

**Ejemplo:** Levantamiento incluye edificio. Creas Hide Boundary alrededor del edificio para que superficie no modele su área.

---

## 5. Contours como Data de Superficie

### 5.1 Crear Superficie desde Contours Existentes

**Escenario:** Tienes plano antiguo con curvas de nivel (contours) dibujadas como polilíneas 3D, pero no tienes puntos topográficos originales.

**Procedimiento:**

1. Verifica que contours son **3D Polylines** con elevación correcta
   - Selecciona contour → Properties (Ctrl+1)
   - Verifica **Elevation:** (debe tener valor, ej: 150.00)

2. Crea nueva superficie (Create Surface)

3. Toolspace → Prospector → Surfaces → (superficie) → Definition → **Contours**

4. Click derecho en **Contours** → **Add...**

Aparece **Add Contour Data** dialog.

5. **Description:** `Contours-From-Old-Drawing`
6. **Weeding factors:** (dejar por defecto)
7. **Supplementing factors:** (dejar por defecto)
8. Click **OK**

9. Command line: `Select objects:`
10. Selecciona todas las polilíneas 3D de contours
11. Presiona **Enter**

**Resultado:**
- Civil 3D genera puntos automáticamente a lo largo de contours
- Triangula esos puntos
- Crea superficie TIN aproximada desde contours

**Nota:** Superficies desde contours son menos precisas que desde puntos topográficos directos, pero útiles cuando no tienes levantamiento original.

![Surface from Contours](../../imagenes/leccion-2-4-surface-from-contours.png)

---

## 6. DEM Files y Datos GIS

### 6.1 ¿Qué son DEM Files?

**DEM = Digital Elevation Model**

Archivos raster (grid) con elevaciones, típicamente de fuentes GIS como USGS, INEGI, o gobiernos locales.

**Formato común:** `.dem`, `.asc`, `.tif` (GeoTIFF)

**Uso:** Superficie regional grande para contexto de proyecto (mapas topográficos nacionales).

### 6.2 Importar DEM a Civil 3D

**Procedimiento:**

1. Crea nueva superficie

2. Toolspace → Prospector → Surfaces → (superficie) → Definition → **DEM Files**

3. Click derecho en **DEM Files** → **Add...**

Aparece **Add DEM File** dialog.

4. Navega a archivo DEM (ej: `Region-Topography.dem`)
5. Selecciona archivo
6. Click **Open**

**Civil 3D procesa DEM:**
- Convierte grid raster a puntos TIN
- Puede tardar varios minutos para archivos grandes
- Superficie creada desde elevaciones DEM

**IMPORTANTE:** Verifica coordinate system del DEM coincida con tu drawing.

### 6.3 Simplificar Superficies DEM

**Problema:** DEM files de regiones grandes pueden tener millones de puntos, ralentizando Civil 3D.

**Solución:** Simplify Surface (novedad mejorada en Civil 3D 2026).

**Procedimiento:**

1. Click derecho en superficie (Prospector) → **Surface Properties...**
2. Pestaña **Definition**
3. Sección **Build Options:**
   - **Use maximum triangle length:** ✓
   - **Length:** `10.0` (metros - ajusta según detalle necesario)
4. Click **OK**

**Resultado:** Civil 3D limita longitud de triángulos, reduciendo cantidad de triángulos y mejorando performance sin pérdida significativa de precisión.

![DEM Simplification](../../imagenes/leccion-2-4-dem-simplification.png)

---

## 7. Surface Properties y Estadísticas

### 7.1 Acceder a Surface Properties

**Procedimiento:**

1. Toolspace → Prospector → Surfaces → (superficie)
2. Click derecho → **Surface Properties...**

Aparece **Surface Properties** dialog con múltiples pestañas.

### 7.2 Pestaña Information

**Datos generales:**
- **Name:** Nombre de superficie
- **Description:** Descripción
- **Default Style:** Estilo de visualización
- **Render Material:** Material para rendering

### 7.3 Pestaña Definition

**Configuración de construcción de superficie:**

- **Build Options:**
  - **Use maximum triangle length:** Limitar longitud de triángulos
  - **Maximum triangle length:** Valor en unidades de drawing
  - **Convert proximity breaklines to standard:** Convertir breaklines automáticamente

- **Data Operations:**
  - Lista de todas las operaciones realizadas en la superficie (añadir puntos, breaklines, edits)
  - Cada operación puede activarse/desactivarse (✓/✗)

**Uso:** Si añadiste datos incorrectos, desactiva esa operación en vez de eliminarla.

### 7.4 Pestaña Statistics

**Estadísticas de superficie:**

**General Statistics:**
- **Number of points:** Cantidad de puntos usados en TIN
- **Minimum elevation:** Elevación mínima (punto más bajo)
- **Maximum elevation:** Elevación máxima (punto más alto)
- **Mean elevation:** Elevación promedio

**Extended Statistics:**
- **Number of triangles:** Cantidad de triángulos TIN
- **2D area:** Área proyectada en plano horizontal
- **3D area:** Área real considerando pendientes
- **Minimum grade:** Pendiente mínima (%)
- **Maximum grade:** Pendiente máxima (%)

**Uso:** Verificar rango de datos es coherente. Elevaciones fuera de rango indican errores en levantamiento.

![Surface Statistics](../../imagenes/leccion-2-4-surface-statistics.png)

---

## 8. Workflows Mejorados de Civil 3D 2026

### 8.1 Surface Workflows Panel (Nuevo 2026)

**Novedad 2026:** Panel contextual para gestión eficiente de superficies.

**Acceso:**
1. Selecciona superficie en Model Space
2. Ribbon → Surface contextual tab → **Workflows** panel

**Herramientas rápidas:**
- **Add Data** - Añadir puntos, breaklines, boundaries con un click
- **Edit Surface** - Ediciones rápidas (paste, simplify)
- **Analyze** - Análisis inmediato (elevations, slopes)
- **Extract Objects** - Extraer contours, watersheds

### 8.2 Improved Data Operations Management

**Mejora 2026:** Gestión visual de data operations.

**Características:**
- Timeline visual de operaciones
- Drag & drop para reordenar operaciones
- Preview de impacto antes de aplicar cambios
- Undo/Redo mejorado a nivel de operación

### 8.3 Performance Optimization

**Optimizaciones 2026:**
- **Faster triangulation** - 30% más rápido con 50,000+ puntos
- **Better memory management** - Superficies grandes usan menos RAM
- **Background processing** - Recalcular superficie en background sin bloquear UI

**Activar background processing:**
1. Options (command: `OPTIONS`)
2. Pestaña **AEC Editor**
3. ✓ **Enable background processing for surfaces**

---

## 9. Best Practices para Superficies

### 9.1 Nomenclatura de Superficies

**Estándar recomendado:**

- **EG-*** - Existing Ground (terreno existente)
  - `EG-Site-Survey` - Levantamiento del sitio
  - `EG-Regional-Context` - Contexto regional
- **FG-*** - Finished Grade (terreno propuesto)
  - `FG-Proposed-Design` - Diseño propuesto
  - `FG-Phase-1` - Fase 1 de construcción
- **TEMP-*** - Superficies temporales
  - `TEMP-Analysis` - Análisis temporal

### 9.2 Organización de Data

**Orden recomendado para añadir data:**

1. **Point Groups** - Base de datos topográficos
2. **Breaklines** - Definir cambios bruscos
3. **Boundaries** - Limitar área de superficie
4. **Edits** - Correcciones manuales (solo si necesario)

**Evitar:** Ediciones manuales excesivas (complican mantenimiento).

### 9.3 Verificación de Calidad

**Checklist antes de usar superficie:**

✅ **Rango de elevaciones coherente** (Statistics)
✅ **Sin triángulos anormalmente largos** (visualizar triangles en Surface Style)
✅ **Breaklines aplicados en cambios bruscos** (bordes, zanjas)
✅ **Boundaries definidos** correctamente
✅ **Sin puntos erróneos** (elevaciones absurdas)

---

## Ejercicio Práctico 4

**Objetivo:** Crear superficie TIN completa con puntos, breaklines, y boundaries.

### Escenario

Proyecto de estacionamiento. Debes crear superficie de terreno existente desde levantamiento topográfico con 30 puntos, añadir breaklines para bordes de acera, y boundary para límite del sitio.

### Parte 1: Preparar Datos

1. Crea archivo `Levantamiento-Estacionamiento.csv`:

```csv
1,100.00,100.00,150.00,TN
2,120.00,100.00,150.20,TN
3,140.00,100.00,150.40,TN
4,160.00,100.00,150.60,TN
5,180.00,100.00,150.80,TN
6,100.00,120.00,150.50,TN
7,120.00,120.00,150.70,TN
8,140.00,120.00,150.90,TN
9,160.00,120.00,151.10,TN
10,180.00,120.00,151.30,TN
11,100.00,140.00,151.00,TN
12,120.00,140.00,151.20,TN
13,140.00,140.00,151.40,TN
14,160.00,140.00,151.60,TN
15,180.00,140.00,151.80,TN
16,100.00,160.00,151.50,TN
17,120.00,160.00,151.70,TN
18,140.00,160.00,151.90,TN
19,160.00,160.00,152.10,TN
20,180.00,160.00,152.30,TN
21,100.00,180.00,152.00,TN
22,120.00,180.00,152.20,TN
23,140.00,180.00,152.40,TN
24,160.00,180.00,152.60,TN
25,180.00,180.00,152.80,TN
26,100.00,110.00,150.25,EP
27,180.00,110.00,150.95,EP
28,100.00,170.00,151.75,EP
29,180.00,170.00,152.55,EP
30,140.00,190.00,152.90,TN
```

2. Importa puntos (Insert → Points from File)

### Parte 2: Crear Superficie

3. Ribbon → Home → Create Design → **Create Surface**
4. **Name:** `EG-Estacionamiento`
5. **Description:** "Terreno existente del estacionamiento"
6. **Style:** `Contours 1m and 5m (Design)`
7. Click OK

### Parte 3: Añadir Point Group

8. Toolspace → Prospector → Surfaces → EG-Estacionamiento → Definition → Point Groups
9. Click derecho → **Add...**
10. Selecciona `_All Points`
11. Click OK
12. Superficie se triangula automáticamente

### Parte 4: Crear Breakline (Borde de Acera)

13. Command: `3DPOLY` (3D Polyline)
14. Dibuja línea conectando puntos EP (Edge Pavement):
    - Punto 1: `100,110,150.25`
    - Punto 2: `180,110,150.95`
15. Presiona Enter

16. Dibuja segunda línea EP:
    - Punto 1: `100,170,151.75`
    - Punto 2: `180,170,152.55`
17. Presiona Enter

18. Toolspace → Prospector → Surfaces → EG-Estacionamiento → Definition → Breaklines
19. Click derecho → **Add...**
20. **Description:** `Borde-Acera`
21. **Type:** `Standard`
22. Click OK
23. Selecciona las 2 polylines 3D
24. Presiona Enter

### Parte 5: Crear Boundary

25. Command: `PLINE` (Polyline 2D)
26. Dibuja rectángulo cerrado rodeando área del proyecto:
    - Punto 1: `95,95`
    - Punto 2: `185,95`
    - Punto 3: `185,195`
    - Punto 4: `95,195`
    - Opción: `Close`

27. Toolspace → Prospector → Surfaces → EG-Estacionamiento → Definition → Boundaries
28. Click derecho → **Add...**
29. **Name:** `Limite-Sitio`
30. **Type:** `Outer`
31. Click OK
32. Selecciona polyline rectangular
33. Presiona Enter

### Parte 6: Verificar Superficie

34. Click derecho en superficie (Prospector) → **Surface Properties...**
35. Pestaña **Statistics**:
    - Verifica **Number of points:** 30
    - Verifica **Minimum elevation:** ~150.00
    - Verifica **Maximum elevation:** ~152.90
    - Verifica **Number of triangles:** (cantidad razonable)

36. Click **OK**

### Parte 7: Visualizar Superficie

37. Selecciona superficie en Model Space
38. Ribbon → Surface tab → **Surface Style** dropdown
39. Prueba diferentes estilos:
    - `Triangles` - Ver triangulación
    - `Elevation Banding` - Bandas de color por elevación
    - `Contours 1m and 5m` - Curvas de nivel

**Entregables:**
- Archivo DWG con superficie EG-Estacionamiento completa
- Screenshot mostrando triangulación con breaklines
- Screenshot de Surface Properties - Statistics
- Screenshot con Surface Style "Elevation Banding"

![Ejercicio 4 - Superficie TIN](../../imagenes/leccion-2-4-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Qué significa TIN y cuál es su ventaja sobre superficies grid regulares?

**Pregunta 2:** ¿Para qué se usan breaklines en una superficie TIN?

**Pregunta 3:** ¿Cuál es la diferencia entre Outer Boundary y Hide Boundary?

**Pregunta 4:** Menciona 3 fuentes de datos que pueden generar una superficie TIN en Civil 3D.

**Pregunta 5:** ¿Qué estadística revisarías para verificar que una superficie no tiene errores de elevación?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 - Surfaces User Guide
- TIN Surface Creation Tutorial
- Breaklines and Boundaries Best Practices

**Videos recomendados:**
- Civil 3D Surfaces Deep Dive (Autodesk YouTube)
- Creating Accurate Surfaces with Breaklines

**Archivos de práctica:**
- Sample survey points for surface creation
- Breakline templates for highway projects

---

## Resumen

En esta lección aprendiste:

✅ Superficies TIN son modelos digitales triangulados del terreno (vértices, edges, faces)
✅ Crear superficies desde Point Groups con triangulación automática
✅ Breaklines definen cambios bruscos (bordes, zanjas) mejorando precisión del modelo
✅ Boundaries (Outer, Hide, Show) limitan y recortan superficies al área de proyecto
✅ Importar contours y DEM files como fuentes de data de superficie
✅ Surface Properties y Statistics verifican calidad del modelo (elevaciones, área, triángulos)
✅ Civil 3D 2026 mejora workflows, performance, y gestión de data operations
✅ Best practices: nomenclatura clara, orden de data (puntos → breaklines → boundaries)

**Próxima Lección:** Análisis de Superficies - Elevations, slopes, watersheds, volúmenes entre superficies.

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 60 minutos creando superficies con diferentes combinaciones de data sources
