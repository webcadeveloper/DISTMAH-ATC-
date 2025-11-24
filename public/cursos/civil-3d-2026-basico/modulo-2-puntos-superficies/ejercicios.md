# Ejercicios Prácticos - Módulo 2: Puntos y Superficies Topográficas

**Curso:** Autodesk Civil 3D 2026 - Básico
**Módulo:** 2 - Puntos y Superficies Topográficas
**Duración total:** 6 horas (1 hora por ejercicio)

---

## Introducción

Este documento contiene **6 ejercicios prácticos completos** que consolidan todos los conceptos del Módulo 2. Cada ejercicio simula tareas reales de proyectos de ingeniería civil, desde levantamientos topográficos hasta análisis de superficies y generación de planos.

**Requisitos:**
- Completar las 6 lecciones del Módulo 2
- Civil 3D 2026 instalado
- Template métrico de Civil 3D
- Espacio de trabajo: `C:\Proyectos\Civil3D\Modulo-2-Ejercicios\`

**Entregables por ejercicio:**
- Archivo DWG nombrado según convención
- Screenshots solicitados
- Reportes de datos (cuando aplique)

---

## Ejercicio 1: Levantamiento Topográfico - Puntos COGO y Point Groups

**Duración:** 60 minutos
**Lección relacionada:** Lección 1
**Complejidad:** Básica

### Escenario

Eres el topógrafo de un proyecto de plaza pública de 100m x 80m. Realizaste un levantamiento con estación total capturando 40 puntos de diferentes tipos: terreno natural (TN), bordes de acera (EP, TC), árboles existentes (ARB), y puntos de control (BM).

### Objetivos

- Crear puntos COGO manualmente desde datos de levantamiento
- Organizar puntos en Point Groups por tipo
- Aplicar Point Styles diferenciados
- Generar Point Table para documentación
- Exportar puntos a archivo CSV

### Datos de Levantamiento

Crea archivo `Levantamiento-Plaza.csv` con los siguientes 40 puntos:

```csv
1,100.00,100.00,150.00,BM
2,100.00,120.00,150.20,TN
3,100.00,140.00,150.40,TN
4,100.00,160.00,150.60,TN
5,100.00,180.00,150.80,TN
6,120.00,100.00,150.15,TN
7,120.00,120.00,150.35,TN
8,120.00,140.00,150.55,TN
9,120.00,160.00,150.75,TN
10,120.00,180.00,150.95,TN
11,140.00,100.00,150.30,TN
12,140.00,120.00,150.50,TN
13,140.00,140.00,150.70,TN
14,140.00,160.00,150.90,TN
15,140.00,180.00,151.10,TN
16,160.00,100.00,150.45,TN
17,160.00,120.00,150.65,TN
18,160.00,140.00,150.85,TN
19,160.00,160.00,151.05,TN
20,160.00,180.00,151.25,TN
21,180.00,100.00,150.60,TN
22,180.00,120.00,150.80,TN
23,180.00,140.00,151.00,TN
24,180.00,160.00,151.20,TN
25,180.00,180.00,151.40,TN
26,105.00,105.00,150.10,EP
27,175.00,105.00,150.55,EP
28,105.00,175.00,150.85,EP
29,175.00,175.00,151.35,EP
30,105.00,110.00,150.30,TC
31,175.00,110.00,150.75,TC
32,105.00,170.00,151.05,TC
33,175.00,170.00,151.55,TC
34,125.00,125.00,150.45,ARB
35,155.00,125.00,150.75,ARB
36,125.00,155.00,151.00,ARB
37,155.00,155.00,151.30,ARB
38,200.00,100.00,150.70,BM
39,100.00,200.00,151.50,BM
40,200.00,200.00,151.60,BM
```

### Tareas

**Parte 1: Importar Puntos**

1. Abre nuevo drawing desde template métrico (`_AutoCAD Civil 3D (Metric) NCS.dwt`)
2. Guarda como: `Ejercicio-1-Levantamiento-Plaza.dwg`
3. Importa puntos desde `Levantamiento-Plaza.csv`:
   - Ribbon → Insert → Points from File
   - Format: `PNEZD (comma delimited)`
   - Verifica que se importan 40 puntos
4. Command: `ZOOM` → `EXTENTS` (visualizar todos los puntos)

**Parte 2: Crear Point Groups**

5. Crea **Point Group 1 - Benchmarks:**
   - Toolspace → Prospector → Point Groups → New
   - Name: `BM-Control-Points`
   - Include tab → With raw descriptions matching: `BM*`
   - Point Style: `Benchmark` (o create custom con triángulo)
   - Point Label Style: `Point Number Elevation Description`
   - Color: Cian (para destacar)

6. Crea **Point Group 2 - Terreno Natural:**
   - Name: `TN-Terreno-Natural`
   - Include: `TN*`
   - Point Style: `Ground Elevation Point`
   - Color: Verde

7. Crea **Point Group 3 - Edge of Pavement:**
   - Name: `EP-Edge-Pavement`
   - Include: `EP*`
   - Point Style: `Basic Point`
   - Color: Rojo

8. Crea **Point Group 4 - Top of Curb:**
   - Name: `TC-Top-Curb`
   - Include: `TC*`
   - Point Style: `Basic Point`
   - Color: Amarillo

9. Crea **Point Group 5 - Árboles:**
   - Name: `ARB-Arboles`
   - Include: `ARB*`
   - Point Style: `Tree Point` (o custom)
   - Color: Verde oscuro

**Parte 3: Verificar Point Groups**

10. Toolspace → Prospector → Expande cada Point Group
11. Verifica counts:
    - BM-Control-Points: 4 puntos
    - TN-Terreno-Natural: 25 puntos
    - EP-Edge-Pavement: 4 puntos
    - TC-Top-Curb: 4 puntos
    - ARB-Arboles: 4 puntos
    - Total: 40 puntos (sin duplicados)

**Parte 4: Ajustar Prioridad de Point Groups**

12. Reordena Point Groups (drag & drop en Prospector):
    - 1. BM-Control-Points (mayor prioridad)
    - 2. EP-Edge-Pavement
    - 3. TC-Top-Curb
    - 4. ARB-Arboles
    - 5. TN-Terreno-Natural
    - 6. _All Points (menor prioridad)

**Parte 5: Crear Point Table**

13. Ribbon → Annotate → Add Tables → Add Point Table
14. Table Style: `PENZD` (Point-Easting-Northing-Elevation-Description)
15. Point Group: `_All Points`
16. Behavior: `Dynamic`
17. Inserta tabla en Model Space (abajo de los puntos)
18. Verifica que muestra 40 puntos con todas las coordenadas

**Parte 6: Editar Puntos (Correcciones)**

19. Abre Point Editor (Panorama):
    - Toolspace → Prospector → Point Groups → _All Points → Points
    - Click derecho en lista → **Edit Points...**
20. Realiza correcciones simuladas:
    - Punto 20: Cambia elevación a `151.30` (corrección de campo)
    - Punto 34: Cambia descripción a `ARB 18` (árbol de 18" diámetro)
    - Punto 38: Cambia descripción a `BM-NORTH` (identificador específico)
21. Cierra Panorama
22. Verifica que Point Table se actualizó automáticamente

**Parte 7: Exportar Puntos**

23. Toolspace → Prospector → Point Groups → `_All Points`
24. Click derecho → **Export Points...**
25. Output file: `Puntos-Plaza-Export.csv`
26. File format: `PNEZD (comma delimited)`
27. Click OK
28. Verifica que archivo CSV fue creado con 40 puntos

### Entregables

✅ Archivo `Ejercicio-1-Levantamiento-Plaza.dwg` con:
   - 40 puntos importados
   - 5 Point Groups configurados (BM, TN, EP, TC, ARB)
   - Point Table dinámica

✅ Screenshot 1: Model Space mostrando puntos en diferentes colores por grupo

✅ Screenshot 2: Toolspace Prospector con Point Groups expandidos mostrando counts

✅ Screenshot 3: Point Table completa con 40 puntos

✅ Archivo `Puntos-Plaza-Export.csv` exportado

### Criterios de Evaluación

- **Point Groups correctamente configurados:** 30%
- **Prioridad de grupos apropiada:** 15%
- **Point Table dinámica generada:** 20%
- **Ediciones de puntos aplicadas:** 15%
- **Exportación exitosa:** 20%

---

## Ejercicio 2: Importación Masiva - Description Keys y Clasificación Automática

**Duración:** 60 minutos
**Lección relacionada:** Lecciones 2 y 3
**Complejidad:** Intermedia

### Escenario

Proyecto de carretera de 500 metros. Recibiste levantamiento topográfico con 100 puntos en formato CSV con códigos de campo estándar (EP, CL, TC, TN, etc.). Debes configurar Description Keys para clasificación automática y generar superficie preliminar.

### Objetivos

- Crear Description Key Set personalizado
- Importar 100+ puntos con clasificación automática
- Verificar aplicación de Description Keys (layers, full descriptions)
- Crear Point Groups automáticamente por layer
- Generar reporte de puntos por categoría

### Datos de Levantamiento

Crea archivo `Levantamiento-Carretera-500m.csv`:

```csv
1,1000.00,2000.00,150.00,CL
2,1010.00,2000.00,150.05,CL
3,1020.00,2000.00,150.10,CL
4,1030.00,2000.00,150.15,CL
5,1040.00,2000.00,150.20,CL
6,1050.00,2000.00,150.25,CL
7,1060.00,2000.00,150.30,CL
8,1070.00,2000.00,150.35,CL
9,1080.00,2000.00,150.40,CL
10,1090.00,2000.00,150.45,CL
11,1100.00,2000.00,150.50,CL
12,1000.00,1995.00,150.10,EP-L
13,1010.00,1995.00,150.15,EP-L
14,1020.00,1995.00,150.20,EP-L
15,1030.00,1995.00,150.25,EP-L
16,1040.00,1995.00,150.30,EP-L
17,1050.00,1995.00,150.35,EP-L
18,1060.00,1995.00,150.40,EP-L
19,1070.00,1995.00,150.45,EP-L
20,1080.00,1995.00,150.50,EP-L
21,1090.00,1995.00,150.55,EP-L
22,1100.00,1995.00,150.60,EP-L
23,1000.00,2005.00,150.10,EP-R
24,1010.00,2005.00,150.15,EP-R
25,1020.00,2005.00,150.20,EP-R
26,1030.00,2005.00,150.25,EP-R
27,1040.00,2005.00,150.30,EP-R
28,1050.00,2005.00,150.35,EP-R
29,1060.00,2005.00,150.40,EP-R
30,1070.00,2005.00,150.45,EP-R
31,1080.00,2005.00,150.50,EP-R
32,1090.00,2005.00,150.55,EP-R
33,1100.00,2005.00,150.60,EP-R
34,1000.00,1993.00,150.30,TC-L
35,1020.00,1993.00,150.40,TC-L
36,1040.00,1993.00,150.50,TC-L
37,1060.00,1993.00,150.60,TC-L
38,1080.00,1993.00,150.70,TC-L
39,1100.00,1993.00,150.80,TC-L
40,1000.00,2007.00,150.30,TC-R
41,1020.00,2007.00,150.40,TC-R
42,1040.00,2007.00,150.50,TC-R
43,1060.00,2007.00,150.60,TC-R
44,1080.00,2007.00,150.70,TC-R
45,1100.00,2007.00,150.80,TC-R
46,990.00,1995.00,149.80,TN
47,990.00,2000.00,149.85,TN
48,990.00,2005.00,149.90,TN
49,1010.00,1990.00,150.00,TN
50,1030.00,1990.00,150.10,TN
51,1050.00,1990.00,150.20,TN
52,1070.00,1990.00,150.30,TN
53,1090.00,1990.00,150.40,TN
54,1110.00,1995.00,150.70,TN
55,1110.00,2000.00,150.75,TN
56,1110.00,2005.00,150.80,TN
57,1010.00,2010.00,150.20,TN
58,1030.00,2010.00,150.30,TN
59,1050.00,2010.00,150.40,TN
60,1070.00,2010.00,150.50,TN
61,1090.00,2010.00,150.60,TN
62,1000.00,1988.00,149.50,TN
63,1020.00,1988.00,149.60,TN
64,1040.00,1988.00,149.70,TN
65,1060.00,1988.00,149.80,TN
66,1080.00,1988.00,149.90,TN
67,1100.00,1988.00,150.00,TN
68,1000.00,2012.00,150.40,TN
69,1020.00,2012.00,150.50,TN
70,1040.00,2012.00,150.60,TN
71,1060.00,2012.00,150.70,TN
72,1080.00,2012.00,150.80,TN
73,1100.00,2012.00,150.90,TN
74,995.00,1998.00,149.95,ARB 24
75,995.00,2002.00,150.00,ARB 18
76,1105.00,1998.00,150.85,ARB 20
77,1105.00,2002.00,150.90,ARB 22
78,1000.00,1985.00,149.30,FENCE
79,1020.00,1985.00,149.40,FENCE
80,1040.00,1985.00,149.50,FENCE
81,1060.00,1985.00,149.60,FENCE
82,1080.00,1985.00,149.70,FENCE
83,1100.00,1985.00,149.80,FENCE
84,1000.00,2015.00,150.50,FENCE
85,1020.00,2015.00,150.60,FENCE
86,1040.00,2015.00,150.70,FENCE
87,1060.00,2015.00,150.80,FENCE
88,1080.00,2015.00,150.90,FENCE
89,1100.00,2015.00,151.00,FENCE
90,1010.00,1992.00,149.90,LP 25
91,1030.00,1992.00,150.00,LP 25
92,1050.00,1992.00,150.10,LP 25
93,1070.00,1992.00,150.20,LP 25
94,1090.00,1992.00,150.30,LP 25
95,1010.00,2008.00,150.30,LP 25
96,1030.00,2008.00,150.40,LP 25
97,1050.00,2008.00,150.50,LP 25
98,1070.00,2008.00,150.60,LP 25
99,1090.00,2008.00,150.70,LP 25
100,1050.00,2000.00,150.35,BM-CENTER
```

### Tareas

**Parte 1: Crear Description Key Set**

1. Nuevo drawing: `Ejercicio-2-Description-Keys-Carretera.dwg`
2. Toolspace → Settings → Point → Description Key Sets → New
3. Name: `Highway-DescKeys`
4. Click OK
5. Click derecho en `Highway-DescKeys` → **Edit Keys...**
6. Crea los siguientes Description Keys (New para cada uno):

**Key 1 - Centerline:**
- Code: `CL*`
- Point Style: `Basic Point`
- Point Label Style: `Point Number Elevation Description`
- Format: `Centerline $*`
- Layer: `V-NODE-CENT`
- Scale: `1.2`

**Key 2 - Edge Pavement Left:**
- Code: `EP-L*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Edge Pavement Left $*`
- Layer: `V-NODE-EPAV-L`
- Scale: `1.0`

**Key 3 - Edge Pavement Right:**
- Code: `EP-R*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Edge Pavement Right $*`
- Layer: `V-NODE-EPAV-R`
- Scale: `1.0`

**Key 4 - Top Curb Left:**
- Code: `TC-L*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Top of Curb Left $*`
- Layer: `V-NODE-CURB-L`
- Scale: `1.0`

**Key 5 - Top Curb Right:**
- Code: `TC-R*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Top of Curb Right $*`
- Layer: `V-NODE-CURB-R`
- Scale: `1.0`

**Key 6 - Terreno Natural:**
- Code: `TN*`
- Point Style: `Ground Elevation Point`
- Point Label Style: `Point Elevation Description`
- Format: `Natural Terrain $*`
- Layer: `V-NODE-TOPO`
- Scale: `0.8`

**Key 7 - Árboles:**
- Code: `ARB*`
- Point Style: `Tree Point`
- Point Label Style: `Point Elevation Description`
- Format: `Tree $1 inch diameter`
- Layer: `V-NODE-VEG`
- Scale: `1.5`

**Key 8 - Cerca:**
- Code: `FENCE*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Fence $*`
- Layer: `V-NODE-FENCE`
- Scale: `0.7`

**Key 9 - Postes de Luz:**
- Code: `LP*`
- Point Style: `Basic Point`
- Point Label Style: `Point Elevation Description`
- Format: `Light Pole $1 ft height`
- Layer: `V-NODE-UTIL`
- Scale: `1.0`

**Key 10 - Benchmarks:**
- Code: `BM*`
- Point Style: `Benchmark`
- Point Label Style: `Point Number Elevation Description`
- Format: `Benchmark $*`
- Layer: `V-NODE-CONTROL`
- Scale: `2.0`

7. Cierra Panorama

**Parte 2: Activar Description Key Set**

8. Click derecho en `Highway-DescKeys` → **Set as Active**
9. Verifica que aparece en negrita (activo)

**Parte 3: Importar Puntos con Description Keys**

10. Insert → Points from File
11. Format: `PNEZD (comma delimited)`
12. Source File: `Levantamiento-Carretera-500m.csv`
13. Click OK
14. 100 puntos importados
15. Command: `ZOOM` → `EXTENTS`

**Parte 4: Verificar Description Keys Aplicados**

16. Toolspace → Prospector → Point Groups → _All Points → Points
17. Abre Point Editor (click derecho → Edit Points)
18. Verifica columnas:
    - **Raw Description:** CL, EP-L, EP-R, TC-L, etc. (códigos originales)
    - **Full Description:** "Centerline", "Edge Pavement Left", "Top of Curb Right", "Tree 24 inch diameter", etc.
    - **Layer:** V-NODE-CENT, V-NODE-EPAV-L, V-NODE-CURB-R, V-NODE-VEG, etc.
19. Verifica que Description Keys procesaron correctamente los códigos

**Parte 5: Verificar Layers Creados**

20. Command: `LAYER` (Layer Properties Manager)
21. Verifica que se crearon automáticamente los layers:
    - V-NODE-CENT (11 puntos)
    - V-NODE-EPAV-L (11 puntos)
    - V-NODE-EPAV-R (11 puntos)
    - V-NODE-CURB-L (6 puntos)
    - V-NODE-CURB-R (6 puntos)
    - V-NODE-TOPO (41 puntos)
    - V-NODE-VEG (4 puntos)
    - V-NODE-FENCE (12 puntos)
    - V-NODE-UTIL (10 puntos)
    - V-NODE-CONTROL (1 punto)
22. Total: 100 puntos (sin duplicados)

**Parte 6: Crear Point Groups Automáticos**

23. Crea Point Groups usando layers (automático):

**Group 1:**
- Name: `CL-Centerline`
- Include: With layers matching: `V-NODE-CENT`

**Group 2:**
- Name: `EP-EdgePavement`
- Include: With layers matching: `V-NODE-EPAV-*`

**Group 3:**
- Name: `TC-TopCurb`
- Include: With layers matching: `V-NODE-CURB-*`

**Group 4:**
- Name: `TN-Terrain`
- Include: With layers matching: `V-NODE-TOPO`

**Group 5:**
- Name: `VEG-Vegetation`
- Include: With layers matching: `V-NODE-VEG`

**Group 6:**
- Name: `UTIL-Utilities`
- Include: With layers matching: `V-NODE-UTIL`

24. Verifica counts en cada grupo

**Parte 7: Generar Reporte**

25. Crea tabla resumen en Excel/Word:

| Point Group | Cantidad | Layer | Descripción |
|-------------|----------|-------|-------------|
| CL-Centerline | 11 | V-NODE-CENT | Centerline de carretera |
| EP-EdgePavement | 22 | V-NODE-EPAV-* | Bordes de pavimento |
| TC-TopCurb | 12 | V-NODE-CURB-* | Parte superior de bordillos |
| TN-Terrain | 41 | V-NODE-TOPO | Terreno natural |
| VEG-Vegetation | 4 | V-NODE-VEG | Árboles existentes |
| UTIL-Utilities | 10 | V-NODE-UTIL | Postes de luz |
| Fences | 12 | V-NODE-FENCE | Cercas límite |
| Control | 1 | V-NODE-CONTROL | Benchmark central |
| **Total** | **100** | | |

### Entregables

✅ Archivo `Ejercicio-2-Description-Keys-Carretera.dwg` con:
   - 100 puntos importados con Description Keys aplicados
   - 10 Description Keys configurados
   - 6+ Point Groups automáticos

✅ Screenshot 1: DescKey Editor mostrando 10 Description Keys

✅ Screenshot 2: Point Editor (Panorama) mostrando Full Descriptions expandidas

✅ Screenshot 3: Layer Properties Manager con layers auto-creados

✅ Reporte de puntos por categoría (tabla en Excel/PDF)

### Criterios de Evaluación

- **Description Key Set correcto:** 40%
- **Clasificación automática exitosa:** 30%
- **Point Groups automáticos:** 20%
- **Reporte completo:** 10%

---

## Ejercicio 3: Superficie TIN Completa con Breaklines y Boundaries

**Duración:** 60 minutos
**Lección relacionada:** Lección 4
**Complejidad:** Intermedia

### Escenario

Proyecto de desarrollo residencial de 2 hectáreas. Debes crear superficie TIN de terreno existente desde levantamiento topográfico, añadir breaklines para bordes de acera y zanjas, y aplicar boundary para límite del lote.

### Objetivos

- Crear superficie TIN desde Point Group
- Añadir breaklines (standard) para modelado preciso
- Crear outer boundary para recortar superficie
- Analizar surface statistics
- Crear hide boundary para excluir edificio existente

### Datos

Utiliza archivo del Ejercicio 2 (`Ejercicio-2-Description-Keys-Carretera.dwg`) como base, o importa nuevamente los 100 puntos.

### Tareas

**Parte 1: Crear Superficie Base**

1. Abre `Ejercicio-2-Description-Keys-Carretera.dwg` o crea nuevo
2. Guarda como: `Ejercicio-3-Superficie-TIN-Breaklines.dwg`
3. Ribbon → Home → Create Design → **Create Surface**
4. Create Surface dialog:
   - Name: `EG-Terreno-Existente`
   - Description: "Superficie de terreno existente del levantamiento"
   - Style: `Triangles` (para visualizar TIN inicialmente)
   - Render Material: `Sitework.Planting.Grass`
5. Click OK

**Parte 2: Añadir Point Group a Superficie**

6. Toolspace → Prospector → Surfaces → EG-Terreno-Existente → Definition → **Point Groups**
7. Click derecho → **Add...**
8. Selecciona Point Group: `TN-Terrain` (41 puntos de terreno natural)
9. Click OK
10. Superficie se triangula automáticamente
11. Command: `ZOOM` → `EXTENTS`
12. Observa triángulos conectando puntos TN

**Parte 3: Crear Breaklines - Edge of Pavement**

13. Command: `3DPOLY` (3D Polyline)
14. Dibuja polyline conectando puntos EP-L (Edge Pavement Left):
    - Usa OSNAP Node para snap a puntos EP-L en orden
    - Conecta: Punto 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20 → 21 → 22
15. Presiona Enter (finaliza polyline)

16. Command: `3DPOLY` (nueva polyline)
17. Dibuja polyline conectando puntos EP-R (Edge Pavement Right):
    - Conecta: Punto 23 → 24 → 25 → 26 → 27 → 28 → 29 → 30 → 31 → 32 → 33
18. Presiona Enter

**Añadir breaklines a superficie:**

19. Toolspace → Prospector → Surfaces → EG-Terreno-Existente → Definition → **Breaklines**
20. Click derecho → **Add...**
21. Add Breaklines dialog:
    - Description: `Edge-Pavement-Breaklines`
    - Type: `Standard`
22. Click OK
23. Command line: `Select objects:`
24. Selecciona las 2 polylines 3D (EP-L y EP-R)
25. Presiona Enter
26. Superficie se recalcula con breaklines
27. Observa que triángulos ahora respetan los bordes de pavimento

**Parte 4: Crear Breaklines - Top of Curb**

28. Dibuja 2 polylines 3D conectando puntos TC-L y TC-R:
    - TC-L: Puntos 34, 35, 36, 37, 38, 39
    - TC-R: Puntos 40, 41, 42, 43, 44, 45

29. Añade breaklines a superficie:
    - Definition → Breaklines → Add
    - Description: `Top-Curb-Breaklines`
    - Type: `Standard`
    - Selecciona las 2 polylines TC

**Parte 5: Crear Outer Boundary**

30. Command: `PLINE` (Polyline 2D cerrada)
31. Dibuja rectángulo rodeando área de proyecto:
    - Punto 1: `985,1980`
    - Punto 2: `1115,1980`
    - Punto 3: `1115,2020`
    - Punto 4: `985,2020`
    - Opción: `Close` (cerrar polyline)

32. Toolspace → Prospector → Surfaces → EG-Terreno-Existente → Definition → **Boundaries**
33. Click derecho → **Add...**
34. Add Boundaries dialog:
    - Name: `Limite-Proyecto`
    - Type: `Outer`
    - Non-destructive breakline: ✗
35. Click OK
36. Selecciona polyline rectangular
37. Presiona Enter
38. Superficie recortada al límite del proyecto

**Parte 6: Crear Hide Boundary (Edificio Existente)**

39. Command: `PLINE` (polyline cerrada)
40. Dibuja rectángulo representando edificio existente:
    - Centro aproximado del sitio
    - Tamaño: 20m x 15m
    - Ejemplo: (1035,1995) → (1055,1995) → (1055,2010) → (1035,2010) → Close

41. Boundaries → Add
42. Name: `Edificio-Existente`
43. Type: `Hide`
44. Selecciona polyline del edificio
45. Presiona Enter
46. Área del edificio se oculta (crea "agujero" en superficie)

**Parte 7: Cambiar Surface Style a Contours**

47. Selecciona superficie
48. Ribbon → Surface tab → Surface Style → `Contours 1m and 5m (Design)`
49. Contours aparecen mostrando topografía

**Parte 8: Analizar Surface Statistics**

50. Toolspace → Prospector → Surfaces → EG-Terreno-Existente
51. Click derecho → **Surface Properties...**
52. Pestaña **Statistics**:
    - Anota los siguientes valores:
      - Number of points: ___
      - Minimum elevation: ___
      - Maximum elevation: ___
      - Mean elevation: ___
      - Number of triangles: ___
      - 2D area: ___ m²
      - 3D area: ___ m²

53. Click OK

### Entregables

✅ Archivo `Ejercicio-3-Superficie-TIN-Breaklines.dwg` con:
   - Superficie EG-Terreno-Existente completa
   - Breaklines para EP y TC aplicados
   - Outer boundary (límite proyecto)
   - Hide boundary (edificio)

✅ Screenshot 1: Superficie con Surface Style "Triangles" mostrando breaklines

✅ Screenshot 2: Superficie con Surface Style "Contours" mostrando curvas de nivel

✅ Screenshot 3: Surface Properties - Statistics completas

✅ Reporte de estadísticas (texto o PDF con valores anotados)

### Criterios de Evaluación

- **Superficie creada correctamente:** 25%
- **Breaklines aplicados apropiadamente:** 30%
- **Boundaries configurados:** 25%
- **Surface Statistics documentadas:** 20%

---

## Ejercicio 4: Análisis Completo de Superficie

**Duración:** 60 minutos
**Lección relacionada:** Lección 5
**Complejidad:** Intermedia-Avanzada

### Escenario

Proyecto de explanación para estacionamiento. Tienes superficie de terreno existente y necesitas realizar análisis completo: elevaciones, pendientes, watersheds, y calcular volúmenes comparando con superficie propuesta.

### Objetivos

- Aplicar Elevation Analysis con rangos personalizados
- Realizar Slope Analysis e identificar áreas críticas
- Generar Slope Arrows para drenaje
- Calcular Watersheds (cuencas)
- Crear superficie propuesta
- Calcular volúmenes de corte y relleno

### Datos

Usa superficie del Ejercicio 3 como base.

### Tareas

**Parte 1: Preparar Drawing**

1. Abre `Ejercicio-3-Superficie-TIN-Breaklines.dwg`
2. Guarda como: `Ejercicio-4-Analisis-Superficie.dwg`

**Parte 2: Elevation Analysis**

3. Selecciona superficie `EG-Terreno-Existente`
4. Ribbon → Surface tab → Analyze → **Elevations...**
5. Surface Properties - Analysis tab:
   - Analysis type: `Elevations`
   - Number of ranges: `6`
   - Scheme: `Land` (verde bajo → marrón alto)
6. Revisa Range Details (debe dividir automáticamente min-max en 6 rangos)
7. Click OK
8. Superficie coloreada por elevaciones
9. Screenshot "Elevation Analysis"

**Parte 3: Slope Analysis**

10. Selecciona superficie
11. Ribbon → Surface → Analyze → **Slopes...**
12. Analysis type: `Slopes`
13. Number of ranges: `5`
14. Configura rangos personalizados:
    - Range 1: 0% - 2% (Rojo - problema drenaje)
    - Range 2: 2% - 5% (Verde claro - ideal estacionamiento)
    - Range 3: 5% - 10% (Verde oscuro - aceptable)
    - Range 4: 10% - 20% (Amarillo - empinado)
    - Range 5: >20% (Rojo oscuro - muy empinado)
15. Click OK
16. Identifica áreas problemáticas (rojas)
17. Screenshot "Slope Analysis"

**Parte 4: Slope Arrows**

18. Surface → Analyze → Directions → **Slope Arrows...**
19. Analysis type: `Directions`
20. Scheme: `Slope Arrows`
21. Spacing: `10.0` metros
22. Click OK
23. Flechas muestran dirección de flujo
24. Identifica puntos de concentración de agua (flechas convergentes)
25. Marca con círculo 2-3 puntos bajos donde colocar bocas de tormenta
26. Screenshot "Slope Arrows + Bocas de Tormenta marcadas"

**Parte 5: Watersheds**

27. Surface → Analyze → **Watersheds...**
28. Analysis type: `Watersheds`
29. Type: `Multi-Drain` (automático)
30. Click OK
31. Civil 3D calcula cuencas automáticamente
32. Cada cuenca en color diferente
33. Cuenta cuántas cuencas principales existen: ___
34. Screenshot "Watersheds"

**Parte 6: Crear Superficie Propuesta (Simplified)**

Para este ejercicio, crearemos superficie propuesta simple elevando terreno existente uniformemente.

35. Ribbon → Home → Create Design → **Create Surface**
36. Name: `FG-Proposed-Parking`
37. Description: "Superficie propuesta para estacionamiento"
38. Style: `Contours 1m and 5m (Design)`
39. Click OK

40. Definition → Point Groups → Add
41. Selecciona: `TN-Terrain`
42. Click OK

43. Superficie propuesta creada (inicialmente idéntica a existente)

**Editar elevaciones de superficie propuesta:**

44. Toolspace → Prospector → Surfaces → FG-Proposed-Parking
45. Click derecho → **Surface Properties**
46. Definition tab → **Edits**
47. Click derecho en "Edits" → **Raise/Lower Surface...**
48. Raise/Lower Surface dialog:
    - Elevation change: `+0.50` (elevar 50cm)
49. Click OK
50. Superficie propuesta ahora 50cm más alta que existente

**Parte 7: Calcular Volúmenes (Cut & Fill)**

51. Ribbon → **Analyze** tab → **Volumes and Materials** → **Volumes Dashboard**
52. Aparece Panorama - Volumes Dashboard
53. Click derecho en tabla → **Create New Volume Entry...**
54. Create Volume Entry:
    - Name: `Cut-Fill-Parking`
    - Base Surface: `EG-Terreno-Existente`
    - Comparison Surface: `FG-Proposed-Parking`
55. Click OK

**Volumes Dashboard muestra:**

| Surface | Cut (m³) | Fill (m³) | Net (m³) |
|---------|----------|----------|----------|
| Cut-Fill-Parking | 0.00 | XXXX.XX | -XXXX.XX |

56. Anota resultados:
    - Cut: ______ m³
    - Fill: ______ m³
    - Net: ______ m³ (negativo = falta material)

57. Screenshot "Volumes Dashboard"

**Interpretación:**
- Si Net es negativo → Necesitas importar material (relleno > corte)
- Si Net es positivo → Sobra material, necesitas exportar (corte > relleno)

**Parte 8: Quick Profile**

58. Command: `LINE`
59. Dibuja línea de norte a sur atravesando sitio (ej: de 1050,1985 a 1050,2015)

60. Analyze tab → Ground Data → **Quick Profile**
61. Select line dibujada
62. Create Quick Profile dialog:
    - Surface: `EG-Terreno-Existente`
    - Name: `Profile-Analysis-NS`
63. Click OK
64. Specify profile view origin: Click abajo del sitio
65. Profile view creado mostrando elevaciones a lo largo de la línea
66. Screenshot "Quick Profile"

### Entregables

✅ Archivo `Ejercicio-4-Analisis-Superficie.dwg` con análisis completos

✅ 6 Screenshots:
   1. Elevation Analysis (6 rangos)
   2. Slope Analysis (5 rangos personalizados)
   3. Slope Arrows con bocas de tormenta marcadas
   4. Watersheds (cuencas coloreadas)
   5. Volumes Dashboard con resultados
   6. Quick Profile NS

✅ Reporte de Análisis (documento con):
   - Cantidad de cuencas identificadas
   - Volúmenes de Cut, Fill, Net
   - Interpretación de resultados (¿sobra o falta material?)
   - Recomendaciones de ubicación de bocas de tormenta

### Criterios de Evaluación

- **Análisis completos (Elevation, Slope, Watersheds):** 40%
- **Cálculo de volúmenes correcto:** 30%
- **Interpretación de resultados:** 20%
- **Quick Profile generado:** 10%

---

## Ejercicio 5: Plano Topográfico Profesional con Contours

**Duración:** 60 minutos
**Lección relacionada:** Lección 6
**Complejidad:** Avanzada

### Escenario

Cliente solicita plano topográfico profesional a escala 1:500 para proyecto de construcción. Debes generar curvas de nivel con intervalos apropiados, etiquetado profesional, y exportar plano listo para imprimir.

### Objetivos

- Crear Surface Style con contours profesionales
- Configurar smoothing apropiado
- Añadir contour labels con spacing correcto
- Diferenciar major vs minor contours visualmente
- Configurar layers según estándares NCS
- Generar PDF a escala

### Datos

Usa superficie del Ejercicio 3 o 4 como base.

### Tareas

**Parte 1: Preparar Drawing**

1. Abre `Ejercicio-3-Superficie-TIN-Breaklines.dwg`
2. Guarda como: `Ejercicio-5-Plano-Topografico-Profesional.dwg`

**Parte 2: Crear Surface Style Personalizado**

3. Toolspace → Settings → Surface → Surface Styles
4. Click derecho → **New...**
5. Surface Style - New Surface Style dialog

**Information tab:**
- Name: `Contours-Plano-1-500`
- Description: "Contours profesionales para plano escala 1:500"

**Contours tab:**
- Base Elevation: `0`
- Minor Interval: `0.5` metros (curvas cada 0.5m)
- Major Interval: `2.5` metros (curvas cada 2.5m - cada 5ta minor)

**Contour Smoothing:**
- ✓ Smooth contours
- Smoothing type: `Cubic parabola`
- Smoothing factor: `7`

**Display tab:**

**Major Contour:**
- Visible: ✓
- Layer: `C-TOPO-MAJR`
- Color: ByLayer
- Linetype: Continuous
- Lineweight: `0.35mm`

**Minor Contour:**
- Visible: ✓
- Layer: `C-TOPO-MINR`
- Color: ByLayer
- Linetype: Continuous
- Lineweight: `0.18mm`

**Triangles:** (desactivar)
- Visible: ✗

**Border:** (opcional)
- Visible: ✗

6. Click OK

**Parte 3: Aplicar Surface Style**

7. Selecciona superficie `EG-Terreno-Existente`
8. Ribbon → Surface tab → Surface Style → `Contours-Plano-1-500`
9. Contours aparecen suavizados
10. Zoom in para verificar smoothing

**Parte 4: Configurar Layers con Colores**

11. Command: `LAYER`
12. Layer Properties Manager:
    - Layer `C-TOPO-MAJR`:
      - Color: `30` (Brown oscuro)
      - Lineweight: `0.35mm`
      - Plot: ✓
    - Layer `C-TOPO-MINR`:
      - Color: `31` (Brown claro)
      - Lineweight: `0.18mm`
      - Plot: ✓
13. Close

**Parte 5: Crear Contour Label Style**

14. Settings → Surface → Label Styles → Contour → New
15. Label Style Composer

**Information:**
- Name: `Contour-Label-Professional`

**Layout tab:**
- Component: `Elevation`
- Contents → Text Component Editor:
  - Property: `Surface Elevation`
  - Precision: `0.00` (2 decimales)
  - Unit: Suppress (sin símbolo "m")
  - Format: `150.25`
- Text Height: `2.5mm` (a escala 1:500 = 1.25m en terreno)
- Font: `Arial` o `Romans`
- Color: ByLayer
- Background Mask: ✓ (fondo blanco)
- Gap: `0.5mm`

16. Click OK

**Parte 6: Añadir Labels a Major Contours**

17. Ribbon → Annotate → Add Labels → Surface → **Contour - Multiple**
18. Select surface: `EG-Terreno-Existente`
19. Add Labels dialog:
    - Label type: `Contour - Multiple`
    - Major contour label style: `Contour-Label-Professional`
    - Minor contour label style: `<none>` (no etiquetar minors)
    - Interval: **Distance** `50.0` metros
    - Orientation: `Perpendicular`
    - Stagger Label: ✓
20. Click **Add**
21. Dibuja rectángulo rodeando toda el área del proyecto
22. Major contours etiquetados cada 50m

**Parte 7: Añadir Algunos Labels a Minor Contours (Selectivo)**

23. Annotate → Add Labels → Surface → **Contour - Single**
24. Select surface
25. Select contour: Click en 3-4 minor contours estratégicos (en áreas clave)
26. Specify label location: Coloca etiquetas
27. Etiquetas manuales en minors seleccionados

**Parte 8: Layout para Impresión**

28. Crea Layout (Paper Space):
    - Click en tab "Layout1" (abajo)
    - Delete viewport existente
    - Command: `PAGESETUP`
    - Page Setup Manager → Modify
    - Paper size: `ISO A3 (420 x 297 mm)`
    - Plot scale: `1:1`
    - Click OK

29. Crea Viewport a escala 1:500:
    - Command: `MVIEW` (Make Viewport)
    - Dibuja rectángulo para viewport (deja espacio para titleblock)
    - Double-click dentro de viewport (activar Model Space dentro)
    - Command: `ZOOM`
    - Opción: `1/500xp` (escala 1:500 en Paper Space)
    - Command: `PAN` para centrar vista
    - Double-click fuera de viewport (regresar a Paper Space)

30. Lock viewport:
    - Selecciona viewport
    - Properties (Ctrl+1)
    - Display locked: `Yes`

**Parte 9: Añadir Titleblock (Simplified)**

En Paper Space, añade texto con información del proyecto:

31. Command: `TEXT` (o MTEXT)
32. Añade en esquina inferior derecha:
```
PLANO TOPOGRÁFICO
Proyecto: Desarrollo Residencial
Escala: 1:500
Intervalo Contours: 0.5m (Minor), 2.5m (Major)
Fecha: [Tu fecha]
Dibujante: [Tu nombre]
```

**Parte 10: Plot Preview y PDF**

33. Command: `PREVIEW`
34. Verifica:
    - Major contours más gruesos que minor
    - Labels legibles
    - Escala correcta (mide alguna distancia conocida)
    - Sin clutter (no hay superposición excesiva)
35. Close preview

36. Command: `PLOT`
37. Plot dialog:
    - Printer/plotter: `DWG To PDF.pc3`
    - Paper size: `ISO A3`
    - Plot area: `Layout`
    - Plot scale: `1:1` (ya está escalado en viewport)
    - Plot style table: `monochrome.ctb` o `acad.ctb`
38. Preview → Verifica
39. Click **OK**
40. Guarda PDF como: `Plano-Topografico-Ejercicio-5.pdf`

### Entregables

✅ Archivo `Ejercicio-5-Plano-Topografico-Profesional.dwg` con:
   - Surface Style contours profesional
   - Labels en major contours espaciados 50m
   - Layout a escala 1:500 con viewport locked
   - Titleblock básico

✅ PDF `Plano-Topografico-Ejercicio-5.pdf` (A3, escala 1:500)

✅ Screenshot 1: Model Space con contours suavizados y labels

✅ Screenshot 2: Paper Space (Layout) mostrando viewport y titleblock

✅ Screenshot 3: Plot Preview verificando lineweights

### Criterios de Evaluación

- **Surface Style profesional:** 25%
- **Contour labels apropiados:** 25%
- **Layout correcto a escala 1:500:** 25%
- **PDF generado correctamente:** 25%

---

## Ejercicio 6: Proyecto Integrado - De Levantamiento a Plano Final

**Duración:** 90 minutos (ejercicio integrador final)
**Lecciones relacionadas:** Todas (Lecciones 1-6)
**Complejidad:** Avanzada

### Escenario

Proyecto completo de parque municipal de 3 hectáreas. Desde cero hasta plano final: importar levantamiento, configurar Description Keys, crear superficie con breaklines, realizar análisis, generar plano topográfico profesional con existing y proposed contours.

### Objetivos

Integrar TODOS los conceptos del Módulo 2:
- Importar 150+ puntos con Description Keys
- Crear superficie existing con breaklines y boundaries
- Realizar análisis completo (slopes, watersheds, volumes)
- Crear superficie proposed (simple grading)
- Generar plano topográfico con EG y FG contours diferenciados
- Exportar plano a PDF

### Datos de Levantamiento

Crea archivo `Levantamiento-Parque-Municipal.csv` con 150 puntos (datos proporcionados separadamente o generados con patrón similar a ejercicios anteriores):

**Puntos sugeridos:**
- 80 puntos TN (terreno natural)
- 20 puntos EP (edge of pavement - senderos)
- 15 puntos TC (top of curb - bordillos)
- 10 puntos ARB (árboles existentes)
- 10 puntos LP (light poles)
- 5 puntos BENCH (bancas)
- 5 puntos FOUNTAIN (fuentes)
- 5 puntos BM (benchmarks)

**Área:** 200m x 150m (3 hectáreas)
**Elevaciones:** Rango 100.00 - 105.00 metros (pendiente suave)

### Tareas Completas

**FASE 1: CONFIGURACIÓN INICIAL (15 min)**

1. Nuevo drawing: `Ejercicio-6-Proyecto-Parque-Completo.dwg`
2. Drawing Settings:
   - Units: Metric
   - Coordinate Zone: [Tu zona local o UTM]
   - Precision: 0.01m

**FASE 2: DESCRIPTION KEYS (15 min)**

3. Crea Description Key Set: `Park-DescKeys`
4. Configura 8 Description Keys para:
   - TN (V-NODE-TOPO)
   - EP (V-NODE-PATH)
   - TC (V-NODE-CURB)
   - ARB (V-NODE-VEG)
   - LP (V-NODE-UTIL)
   - BENCH (V-NODE-FURNITURE)
   - FOUNTAIN (V-NODE-FEATURE)
   - BM (V-NODE-CONTROL)
5. Activa Description Key Set

**FASE 3: IMPORTAR PUNTOS (10 min)**

6. Importa `Levantamiento-Parque-Municipal.csv`
7. Verifica 150 puntos importados
8. Verifica Description Keys aplicados (layers, full descriptions)
9. Crea Point Groups automáticos por layer

**FASE 4: SUPERFICIE EXISTING (20 min)**

10. Crea superficie: `EG-Parque-Existing`
11. Añade Point Group: TN-Terrain (80 puntos)
12. Dibuja breaklines para:
    - Edge of pavement (senderos) - 2 polylines
    - Top of curb (bordillos) - 2 polylines
13. Añade breaklines a superficie
14. Dibuja outer boundary rodeando área del parque
15. Añade boundary a superficie
16. Cambia Surface Style a `Triangles` → Screenshot

**FASE 5: ANÁLISIS (15 min)**

17. Elevation Analysis (5 rangos, scheme Land)
18. Slope Analysis (4 rangos: 0-2%, 2-5%, 5-10%, >10%)
19. Watersheds (Multi-Drain)
20. Screenshot de cada análisis

**FASE 6: SUPERFICIE PROPOSED (15 min)**

21. Crea superficie: `FG-Parque-Proposed`
22. Añade Point Group: TN-Terrain
23. Edita superficie:
    - Raise/Lower: `+0.30` metros (elevar 30cm para drenaje)
24. Cambia Surface Style a `Contours 1m and 5m`

**FASE 7: VOLÚMENES (10 min)**

25. Volumes Dashboard
26. Create Volume Entry:
    - Base: EG-Parque-Existing
    - Comparison: FG-Parque-Proposed
27. Anota Cut, Fill, Net
28. Screenshot Volumes Dashboard

**FASE 8: PLANO TOPOGRÁFICO FINAL (20 min)**

29. Crea 2 Surface Styles:

**Style 1: EG-Contours-Existing**
- Minor: 0.5m, Layer C-TOPO-MINR-EG, Color Brown, Continuous, 0.18mm
- Major: 2.5m, Layer C-TOPO-MAJR-EG, Color Brown, Continuous, 0.35mm
- Smoothing: Cubic parabola, factor 7

**Style 2: FG-Contours-Proposed**
- Minor: 0.5m, Layer C-TOPO-MINR-FG, Color Red, Dashed, 0.18mm
- Major: 2.5m, Layer C-TOPO-MAJR-FG, Color Red, Dashed, 0.35mm
- Smoothing: Cubic parabola, factor 7

30. Aplica styles:
    - EG-Parque-Existing → EG-Contours-Existing
    - FG-Parque-Proposed → FG-Contours-Proposed

31. Añade Contour Labels:
    - Major contours EG: Cada 50m, perpendicular
    - Major contours FG: Cada 50m, perpendicular

32. Crea Layout:
    - Paper: ISO A1 (841 x 594 mm)
    - Viewport escala 1:500
    - Titleblock con leyenda:
      ```
      LEGEND:
      _____ Existing Contours (Brown, Continuous)
      - - - Proposed Contours (Red, Dashed)
      Interval: 0.5m (Minor), 2.5m (Major)
      ```

33. Plot to PDF: `Plano-Parque-Municipal-Final.pdf`

### Entregables Finales

✅ Archivo `Ejercicio-6-Proyecto-Parque-Completo.dwg` con:
   - 150 puntos clasificados
   - Description Key Set (8 keys)
   - Point Groups (8 grupos)
   - Superficie EG con breaklines y boundary
   - Superficie FG (proposed)
   - Análisis completos (Elevation, Slope, Watersheds)
   - Volúmenes calculados
   - Layout con EG y FG contours diferenciados

✅ PDF `Plano-Parque-Municipal-Final.pdf` (A1, escala 1:500)

✅ Reporte Final (documento con):
   - Resumen de puntos por categoría
   - Surface statistics (EG y FG)
   - Resultados de análisis (pendientes críticas, cuencas)
   - Volúmenes de corte y relleno
   - Interpretación: ¿El diseño es viable? ¿Está balanceado el movimiento de tierras?

✅ 10 Screenshots:
   1. Point Groups en Prospector
   2. Description Keys Editor
   3. Superficie EG con Triangles
   4. Elevation Analysis
   5. Slope Analysis
   6. Watersheds
   7. Volumes Dashboard
   8. Model Space con EG y FG contours overlay
   9. Paper Space Layout final
   10. Plot Preview

### Criterios de Evaluación

- **Description Keys y Point Groups:** 15%
- **Superficie EG con breaklines/boundaries:** 20%
- **Análisis completos:** 15%
- **Superficie FG y volúmenes:** 15%
- **Plano final profesional:** 25%
- **Reporte e interpretación:** 10%

---

## Resumen de Ejercicios

| Ejercicio | Enfoque Principal | Duración | Complejidad |
|-----------|-------------------|----------|-------------|
| 1 | Puntos COGO y Point Groups | 60 min | Básica |
| 2 | Description Keys e Importación | 60 min | Intermedia |
| 3 | Superficies TIN con Breaklines | 60 min | Intermedia |
| 4 | Análisis de Superficies | 60 min | Intermedia-Avanzada |
| 5 | Plano Topográfico Profesional | 60 min | Avanzada |
| 6 | Proyecto Integrado Completo | 90 min | Avanzada |
| **TOTAL** | | **6.5 horas** | |

---

## Notas Finales

**Recursos necesarios:**
- Civil 3D 2026
- Espacio en disco: ~500 MB para todos los ejercicios
- Tiempo total estimado: 6.5 horas
- Recomendado: Completar ejercicios en orden secuencial

**Apoyo:**
- Consulta las lecciones del módulo para referencia
- Autodesk Help: https://help.autodesk.com/view/CIV3D/2026/ENU/
- Instructor disponible para dudas

**Certificación:**
- Completar los 6 ejercicios exitosamente
- Entregar todos los archivos DWG, PDFs, screenshots, y reportes
- Mínimo 80% de calidad en entregables

**¡ÉXITO EN TUS EJERCICIOS!**
