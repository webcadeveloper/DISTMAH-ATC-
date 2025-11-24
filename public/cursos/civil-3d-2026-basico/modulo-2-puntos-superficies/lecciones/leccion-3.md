# Lección 3: Point Description Keys y Códigos de Campo

**Duración:** 60 minutos
**Módulo:** 2 - Puntos y Superficies Topográficas
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué son Point Description Keys y su función
✅ Configurar Description Key Sets para clasificación automática
✅ Utilizar códigos de campo topográficos estándar
✅ Asignar automáticamente layers, styles, y scaling a puntos
✅ Trabajar con prefijos y parámetros especiales
✅ Integrar Description Keys con Survey Database
✅ Crear Description Key Sets personalizados para proyectos específicos

---

## Introducción

En levantamientos topográficos profesionales, los puntos se capturan con **códigos de campo** (field codes) que identifican el tipo de punto: "EP" para edge of pavement, "TC" para top of curb, "TN" para terreno natural, etc.

**Point Description Keys** son reglas automáticas en Civil 3D que procesan estos códigos y aplican configuraciones específicas a cada tipo de punto: layer, color, point style, label style, y escala. Esto permite que al importar miles de puntos, Civil 3D los clasifique y visualice automáticamente sin intervención manual.

**Caso real:** En un levantamiento de carretera con 10,000 puntos y 25 códigos diferentes (EP, TC, CL, TN, ARB, etc.), configurar Description Keys una sola vez permite que Civil 3D procese y organice automáticamente todos los puntos en segundos, vs horas de clasificación manual.

---

## 1. ¿Qué son Point Description Keys?

### 1.1 Definición

**Point Description Keys** son reglas que definen cómo Civil 3D procesa los códigos de descripción de puntos topográficos.

**Función principal:**
Cuando importas o creas un punto con descripción "EP", el Description Key "EP*" le dice a Civil 3D:
- Asignar a layer: `V-NODE-EPAV` (Edge of Pavement)
- Aplicar Point Style: `Pavement Point`
- Aplicar Point Label Style: `Point Elevation Description`
- Escala del símbolo: `1.0`
- Expandir descripción: "EP" → "Edge of Pavement"

### 1.2 Componentes de un Description Key

Cada Description Key contiene:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Code** | Código de campo (con wildcards) | `EP*` |
| **Point Style** | Estilo de visualización del punto | `Pavement Point` |
| **Point Label Style** | Estilo de etiqueta | `Point Elevation Description` |
| **Format** | Formato de Full Description | `Edge of Pavement $*` |
| **Layer** | Layer de destino | `V-NODE-EPAV` |
| **Scale** | Escala del símbolo/bloque | `1.0` |
| **Apply to marker** | Rotar marcador según orientación | ✓/✗ |
| **Use Symbol** | Usar bloque/símbolo AutoCAD | `TREE-BLOCK` |

![Description Key Components](../../imagenes/leccion-2-3-desc-key-components.png)

### 1.3 Wildcards en Códigos

**Asterisco (*) = Cualquier carácter(es)**

- `EP*` - Coincide con: EP, EP1, EP-NORTH, EPAVEMENT
- `TC*` - Coincide con: TC, TC1, TC-LEFT, TCURB
- `*TREE*` - Coincide con: TREE, TREE1, OAK-TREE, TREE-MAPLE

**Uso de wildcards:**
Permite capturar variaciones de códigos de campo:
- Topógrafo escribe "EP" o "EP1" o "EP-LEFT" → Todos procesados por key "EP*"

---

## 2. Description Key Sets

### 2.1 ¿Qué es un Description Key Set?

**Description Key Set** es una colección organizada de Description Keys para un proyecto o estándar corporativo.

**Ejemplos de sets:**
- **Standard Description Key Set** - Keys genéricos de Civil 3D
- **Highway-Project-Set** - Keys para proyectos de carretera
- **Subdivision-Set** - Keys para urbanizaciones
- **Company-Standard-Set** - Estándar de oficina

### 2.2 Acceder a Description Key Sets

**Ubicación:**

1. **Toolspace** → **Settings** tab
2. Expande **Point**
3. Expande **Description Key Sets**
4. Lista de Description Key Sets disponibles

**Description Key Set por defecto:**
- El set activo (en negrita) se aplica automáticamente a todos los puntos nuevos/importados

### 2.3 Ver/Editar Description Keys

**Procedimiento:**

1. Toolspace → Settings → Point → Description Key Sets
2. Click derecho en un set (ej: `Standard`) → **Edit Keys...**
3. Aparece **Panorama - DescKey Editor** (tabla editable)

**Columnas en DescKey Editor:**

- **Code** - Código de campo
- **Point Style** - Estilo de punto
- **Point Label Style** - Estilo de etiqueta
- **Format** - Formato de Full Description
- **Layer** - Layer destino
- **Scale** - Escala de símbolo
- **Use Symbol** - Bloque a insertar
- **Marker Rotate** - Rotación de marcador
- **Marker Fixed Scale** - Escala fija o relativa

![DescKey Editor](../../imagenes/leccion-2-3-desckey-editor.png)

---

## 3. Crear Description Key Set Personalizado

### 3.1 Crear Nuevo Description Key Set

**Procedimiento:**

1. Toolspace → Settings → Point → Description Key Sets
2. Click derecho en **Description Key Sets** → **New...**
3. Aparece **Description Key Set - New Description Key Set** dialog

**Configuración:**

- **Information tab:**
  - **Name:** `Highway-Project-DescKeys`
  - **Description:** "Description Keys para proyectos de carretera"
  - **Created by:** Tu nombre
  - **Date created:** Automático

4. Click **OK**
5. Nuevo set creado (vacío inicialmente)

### 3.2 Añadir Description Keys al Set

**Método 1: Añadir manualmente**

1. Click derecho en tu nuevo set → **Edit Keys...**
2. Aparece Panorama con tabla vacía
3. Click derecho en tabla → **New** (o presiona Insert key)
4. Nueva fila creada
5. Completa campos:

**Ejemplo - Key para Edge of Pavement:**

| Columna | Valor |
|---------|-------|
| Code | `EP*` |
| Point Style | `Pavement Point` |
| Point Label Style | `Point Elevation Description` |
| Format | `Edge of Pavement $*` |
| Layer | `V-NODE-EPAV` |
| Scale | `1.0` |

6. Repite para más keys (TC, CL, TN, etc.)

**Método 2: Importar desde archivo CSV**

1. Crea archivo CSV con estructura:
```csv
Code,Style,LabelStyle,Layer,Format
EP*,Pavement Point,Point Elevation Description,V-NODE-EPAV,Edge of Pavement $*
TC*,Curb Point,Point Elevation Description,V-NODE-CURB,Top of Curb $*
```

2. DescKey Editor → Click derecho → **Import...**
3. Selecciona archivo CSV
4. Keys importados automáticamente

![Create DescKey Set](../../imagenes/leccion-2-3-create-desckey-set.png)

---

## 4. Códigos de Campo Topográficos Estándar

### 4.1 Códigos Comunes en Proyectos Viales

| Código | Significado | Layer Recomendado | Uso |
|--------|-------------|-------------------|-----|
| **EP** | Edge of Pavement | V-NODE-EPAV | Borde de pavimento |
| **CL** | Centerline | V-NODE-CENT | Eje central de vía |
| **TC** | Top of Curb | V-NODE-CURB | Parte superior de bordillo |
| **BC** | Bottom of Curb | V-NODE-CURB | Parte inferior de bordillo |
| **EG** | Edge of Gravel | V-NODE-GRAV | Borde de grava |
| **ES** | Edge of Shoulder | V-NODE-SHLDR | Borde de hombro |
| **TW** | Top of Wall | V-NODE-WALL | Parte superior de muro |
| **BW** | Bottom of Wall | V-NODE-WALL | Parte inferior de muro |
| **FH** | Fire Hydrant | V-NODE-UTIL | Hidrante |
| **MH** | Manhole | V-NODE-STRM | Pozo de visita |
| **CB** | Catch Basin | V-NODE-STRM | Boca de tormenta |
| **LP** | Light Pole | V-NODE-UTIL | Poste de luz |
| **PP** | Power Pole | V-NODE-UTIL | Poste eléctrico |
| **SIGN** | Signage | V-NODE-SIGN | Señalización |
| **TN** | Terrain Natural | V-NODE-TOPO | Terreno natural |
| **ARB** | Árbol (Tree) | V-NODE-VEG | Vegetación - árboles |

### 4.2 Códigos para Topografía General

| Código | Significado | Uso |
|--------|-------------|-----|
| **BM** | Benchmark | Punto de control elevación |
| **CP** | Control Point | Punto de control GPS |
| **MON** | Monument | Monumento geodésico |
| **BLDG** | Building | Esquina de edificio |
| **FENCE** | Fence | Cerca |
| **CONC** | Concrete | Superficie de concreto |
| **ASPH** | Asphalt | Superficie de asfalto |
| **DIRT** | Dirt | Superficie de tierra |
| **GRAS** | Grass | Pasto |
| **ROW** | Right of Way | Derecho de vía |

### 4.3 Códigos con Parámetros (Advanced)

Algunos códigos incluyen **parámetros** para información adicional:

**Formato:** `CODE PARAM1 PARAM2`

**Ejemplos:**

- `ARB 12` - Árbol con diámetro de 12 pulgadas
- `LP 30` - Poste de luz de 30 pies de altura
- `SIGN STOP` - Señal tipo STOP
- `BLDG 2-STORY` - Edificio de 2 pisos

**Procesamiento en Description Key:**
- Code: `ARB*`
- Format: `Tree $1 inches diameter` ($1 = primer parámetro)
- Punto con descripción "ARB 12" → Full Description: "Tree 12 inches diameter"

![Field Codes Standard](../../imagenes/leccion-2-3-field-codes.png)

---

## 5. Formato de Full Description

### 5.1 ¿Qué es Full Description?

**Raw Description:** Código corto del topógrafo (ej: "EP")
**Full Description:** Descripción expandida legible (ej: "Edge of Pavement")

**Campo Format en Description Key:** Define cómo se genera Full Description.

### 5.2 Sintaxis de Format

**Variables especiales:**

- `$*` - Todo el texto después del código base
- `$1`, `$2`, `$3`... - Parámetros individuales
- `$$` - Símbolo $ literal

**Ejemplos:**

| Raw Description | Format | Full Description Resultante |
|-----------------|--------|----------------------------|
| EP | `Edge of Pavement` | Edge of Pavement |
| EP-NORTH | `Edge of Pavement $*` | Edge of Pavement -NORTH |
| TC | `Top of Curb` | Top of Curb |
| ARB 12 OAK | `Tree $1 in diam $2` | Tree 12 in diam OAK |
| LP 30 | `Light Pole $1 ft` | Light Pole 30 ft |
| SIGN STOP | `Sign: $1` | Sign: STOP |

**Uso de $* (wildcard):**
Captura todo el texto después del código.

- Raw: "EP-LEFT-SIDE"
- Format: "Edge Pavement $*"
- Full: "Edge Pavement -LEFT-SIDE"

### 5.3 Ejemplo Avanzado: Parámetros Múltiples

**Description Key:**
- Code: `TREE*`
- Format: `Tree: $1 inch diameter, Species: $2`

**Punto importado:**
- Raw Description: `TREE 18 OAK`
- Full Description: `Tree: 18 inch diameter, Species: OAK`

---

## 6. Asignación Automática de Layers, Styles, y Escala

### 6.1 Layers por Tipo de Punto

**Best practice:** Organizar puntos en layers según función.

**Estructura de layers recomendada (NCS/AIA standards):**

```
V-NODE-CENT    (Centerline points)
V-NODE-EPAV    (Edge of Pavement)
V-NODE-CURB    (Curb points)
V-NODE-TOPO    (Topography general)
V-NODE-UTIL    (Utilities: hydrants, poles)
V-NODE-STRM    (Storm drainage: manholes, catch basins)
V-NODE-VEG     (Vegetation: trees, shrubs)
V-NODE-BLDG    (Buildings)
V-NODE-SIGN    (Signage)
```

**Nomenclatura:**
- `V-` = Vial (Civil)
- `NODE` = Puntos/nodos
- Sufijo = Tipo específico

### 6.2 Point Styles por Categoría

**Asignación lógica de estilos:**

| Categoría | Point Style | Visualización |
|-----------|-------------|---------------|
| Pavement/Curb | `Pavement Point` | Cruz roja |
| Centerline | `Centerline Point` | Cruz magenta |
| Terrain | `Ground Elevation Point` | Punto verde con elevación |
| Utilities | `Utility Point` | Cruz amarilla |
| Vegetation | `Tree Symbol` | Símbolo de árbol |
| Control Points | `Benchmark` | Triángulo con BM |
| Structures | `Structure Point` | Cuadrado |

### 6.3 Scaling de Símbolos y Bloques

**Campo Scale en Description Key:**

- **Valor 1.0** - Tamaño estándar
- **Valor 2.0** - Doble de tamaño
- **Valor 0.5** - Mitad del tamaño

**Uso:** Ajustar tamaño de símbolos según importancia visual.

**Ejemplo:**
- Puntos de control (BM): Scale = **2.0** (más visibles)
- Terreno natural (TN): Scale = **0.75** (menos prominentes)
- Árboles (ARB): Scale = **1.5** (símbolo más grande)

---

## 7. Usar Bloques como Símbolos de Punto

### 7.1 Campo "Use Symbol"

**Description Keys** pueden insertar bloques de AutoCAD en lugar de Point Styles simples.

**Ventaja:** Símbolos detallados (árboles, postes de luz, hidrantes) con geometría específica.

### 7.2 Configurar Bloque en Description Key

**Procedimiento:**

1. Asegúrate de tener bloque definido en drawing (ej: `TREE-BLOCK`, `HYDRANT-BLOCK`)
2. DescKey Editor → Columna **Use Symbol**
3. Escribe nombre del bloque: `TREE-BLOCK`
4. Columna **Marker Rotate:** ✓ (si bloque debe rotar con orientación)
5. Columna **Marker Fixed Scale:** ✓ (escala fija) o ✗ (escala relativa)

**Ejemplo - Árbol con Bloque:**

| Campo | Valor |
|-------|-------|
| Code | `ARB*` |
| Layer | `V-NODE-VEG` |
| Use Symbol | `TREE-BLOCK` |
| Scale | `1.5` |
| Format | `Tree $1 in diameter` |

**Resultado:** Puntos con código "ARB" insertan bloque TREE-BLOCK en su ubicación, escala 1.5.

![Symbol Blocks](../../imagenes/leccion-2-3-symbol-blocks.png)

---

## 8. Orden de Prioridad de Description Keys

### 8.1 ¿Por qué importa el orden?

Description Keys se procesan **de arriba hacia abajo** en el DescKey Editor. El **primer** key que coincide con el código se aplica.

**Problema:**
Si tienes:
1. Key: `EP*`
2. Key: `EP-NORTH*`

Y importas punto con código "EP-NORTH", el key #1 (`EP*`) coincide primero y se aplica, ignorando key #2.

**Solución:** Ordena keys de más específico a más genérico.

### 8.2 Ordenar Description Keys

**Best practice - Orden correcto:**

```
1. EP-NORTH*     (específico)
2. EP-SOUTH*     (específico)
3. EP-LEFT*      (específico)
4. EP*           (genérico - catch-all)
```

**Reordenar en DescKey Editor:**

1. Selecciona fila (key)
2. Click derecho → **Move Up** / **Move Down**
3. O arrastra fila a nueva posición

![Key Priority Order](../../imagenes/leccion-2-3-key-priority.png)

---

## 9. Aplicar Description Key Set

### 9.1 Establecer Description Key Set Activo

**Solo un Description Key Set puede estar activo a la vez.**

**Procedimiento:**

1. Toolspace → Settings → Point → Description Key Sets
2. Click derecho en el set deseado → **Set as Active**
3. El set activo aparece en **negrita**

**Todos los puntos nuevos/importados** usarán este set automáticamente.

### 9.2 Cambiar Description Key Set de Puntos Existentes

**Escenario:** Ya importaste puntos, pero quieres aplicar un Description Key Set diferente.

**Procedimiento:**

1. Selecciona puntos en Model Space
2. Click derecho → **Properties** (Ctrl+1)
3. **Description Key Set:** Desplegable
4. Selecciona nuevo set
5. Puntos se recalculan con nuevo set (layer, style, full description cambian)

### 9.3 Update Points con Description Keys

**Forzar recalcular puntos:**

1. Toolspace → Prospector → Point Groups → (grupo)
2. Click derecho en grupo → **Update...**
3. Civil 3D reavalúa todos los puntos con Description Key Set activo
4. Layers, styles, y full descriptions se actualizan

---

## 10. Integración con Survey Database (Avanzado)

### 10.1 Survey Database y Description Keys

**Survey Database** es una herramienta avanzada de Civil 3D para procesar datos de estación total con poligonales cerradas, ajuste de errores, y códigos de campo complejos.

**Integración:**
- Survey Database usa **Figure Prefix Database** (similar a Description Keys)
- Figure Prefix Database define códigos con instrucciones de dibujo automático (líneas, arcos, polilíneas)

**Ejemplo:**
- Código "EP" con figure prefix → Civil 3D dibuja automáticamente polilínea conectando todos los puntos "EP" en orden

### 10.2 Figure Prefix Database vs Description Keys

| Aspecto | Description Keys | Figure Prefix Database |
|---------|------------------|------------------------|
| Uso | Clasificar puntos individuales | Conectar puntos en figuras (líneas) |
| Función | Layer, style, format | Dibujo automático de features |
| Contexto | General Civil 3D | Survey Database específicamente |
| Complejidad | Simple | Avanzado |

**Recomendación:**
- Proyectos simples: Solo Description Keys
- Levantamientos complejos con Survey: Figure Prefix Database

---

## Ejercicio Práctico 3

**Objetivo:** Crear Description Key Set personalizado, importar puntos con códigos de campo, y verificar clasificación automática.

### Escenario

Proyecto de carretera con levantamiento topográfico. Debes crear Description Keys para procesar automáticamente los siguientes códigos: EP, TC, CL, TN, ARB.

### Parte 1: Crear Description Key Set

1. Toolspace → Settings → Point → Description Key Sets
2. Click derecho → **New...**
3. Name: `Highway-Project-Keys`
4. Click OK

### Parte 2: Añadir Description Keys

5. Click derecho en `Highway-Project-Keys` → **Edit Keys...**
6. Crea los siguientes keys (New para cada uno):

**Key 1: Edge of Pavement**
- Code: `EP*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Edge of Pavement $*`
- Layer: `V-NODE-EPAV`
- Scale: `1.0`

**Key 2: Top of Curb**
- Code: `TC*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Top of Curb $*`
- Layer: `V-NODE-CURB`
- Scale: `1.0`

**Key 3: Centerline**
- Code: `CL*`
- Point Style: `Basic Point`
- Point Label Style: `Point Number Elevation Description`
- Format: `Centerline $*`
- Layer: `V-NODE-CENT`
- Scale: `1.2`

**Key 4: Terreno Natural**
- Code: `TN*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Natural Terrain $*`
- Layer: `V-NODE-TOPO`
- Scale: `0.8`

**Key 5: Árboles**
- Code: `ARB*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Tree $1 in diameter`
- Layer: `V-NODE-VEG`
- Scale: `1.5`

7. Cierra Panorama

### Parte 3: Activar Description Key Set

8. Click derecho en `Highway-Project-Keys` → **Set as Active**
9. Verifica que aparece en negrita

### Parte 4: Crear Archivo de Puntos

10. Crea archivo `Puntos-Carretera-Codigos.csv` en Notepad:

```csv
1,1000.00,2000.00,150.00,EP
2,1020.00,2000.00,150.20,EP
3,1040.00,2000.00,150.40,EP-NORTH
4,1000.00,2010.00,151.00,TC
5,1020.00,2010.00,151.20,TC
6,1040.00,2010.00,151.40,TC-LEFT
7,1000.00,2020.00,152.00,CL
8,1020.00,2020.00,152.20,CL
9,1040.00,2020.00,152.40,CL
10,980.00,2000.00,149.50,TN
11,980.00,2010.00,149.70,TN
12,980.00,2020.00,149.90,TN
13,1060.00,2000.00,150.80,ARB 18
14,1060.00,2020.00,151.00,ARB 24
```

### Parte 5: Importar Puntos

11. Ribbon → Insert → Points from File
12. Format: `PNEZD (comma delimited)`
13. Source File: Tu archivo CSV
14. Click OK
15. 14 puntos importados

### Parte 6: Verificar Classification

16. Toolspace → Prospector → Point Groups → _All Points → Points
17. Abre Point Editor (Panorama)
18. Verifica columnas:
    - **Raw Description:** EP, TC, CL, TN, ARB 18, ARB 24
    - **Full Description:** "Edge of Pavement", "Top of Curb", "Centerline", "Natural Terrain", "Tree 18 in diameter", "Tree 24 in diameter"
    - **Layer:** V-NODE-EPAV, V-NODE-CURB, V-NODE-CENT, V-NODE-TOPO, V-NODE-VEG

19. Command: `LAYER` (Layer Properties Manager)
20. Verifica que se crearon layers automáticamente: V-NODE-EPAV, V-NODE-CURB, etc.

### Parte 7: Crear Point Groups Automáticos

21. Crea Point Groups por layer:
    - **EP-Group:** With layers matching: `V-NODE-EPAV`
    - **TC-Group:** With layers matching: `V-NODE-CURB`
    - **CL-Group:** With layers matching: `V-NODE-CENT`
    - **TN-Group:** With layers matching: `V-NODE-TOPO`
    - **ARB-Group:** With layers matching: `V-NODE-VEG`

**Entregables:**
- Archivo DWG con 14 puntos clasificados automáticamente en diferentes layers
- Screenshot de DescKey Editor mostrando tus 5 Description Keys
- Screenshot de Point Editor mostrando Full Descriptions expandidas
- Lista de Point Groups creados

![Ejercicio 3 - Description Keys](../../imagenes/leccion-2-3-ejercicio-resultado.png)

---

## Evaluación

**Pregunta 1:** ¿Qué información puede asignar automáticamente un Description Key a un punto?

**Pregunta 2:** ¿Cuál es la diferencia entre "Raw Description" y "Full Description"?

**Pregunta 3:** ¿Por qué importa el orden de los Description Keys en el DescKey Editor?

**Pregunta 4:** En el campo Format, ¿qué significa el símbolo `$1`?

**Pregunta 5:** ¿Cuál es la ventaja de usar bloques (Use Symbol) en Description Keys vs Point Styles simples?

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 - Description Keys User Guide
- Point File Formats and Description Keys Tutorial
- Survey Database and Figure Prefix Database Guide

**Archivos descargables:**
- Standard Description Key Sets (CSV para importar)
- Highway Project Description Keys Template
- Survey Field Codes Reference Sheet

**Best practices:**
- Mantén Description Key Sets organizados por tipo de proyecto
- Usa nomenclatura consistente de layers (NCS/AIA standards)
- Documenta códigos de campo personalizados para tu equipo

---

## Resumen

En esta lección aprendiste:

✅ Point Description Keys procesan códigos de campo y asignan automáticamente layer, style, format, y escala
✅ Description Key Sets son colecciones organizadas de keys para proyectos específicos
✅ Códigos de campo estándar (EP, TC, CL, TN, ARB, etc.) clasifican puntos topográficos
✅ Campo Format expande códigos cortos a Full Descriptions legibles usando $*, $1, $2
✅ Asignación automática de layers, styles, y scaling optimiza workflow con miles de puntos
✅ Bloques AutoCAD pueden usarse como símbolos de puntos para visualización detallada
✅ Orden de Description Keys importa (específico antes de genérico)
✅ Integration con Survey Database para workflows topográficos avanzados

**Próxima Lección:** Creación de Superficies TIN - Usar puntos para generar modelos digitales de terreno triangulados.

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos creando Description Key Sets para diferentes tipos de proyectos (urbanización, parque, estacionamiento)
