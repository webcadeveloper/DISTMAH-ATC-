# Ejercicios Prácticos - Módulo 4: Acero Estructural y Equipos

## Información General

Este documento contiene cinco ejercicios prácticos integrales que refuerzan los conceptos aprendidos en el Módulo 4 de AutoCAD Plant 3D 2026. Cada ejercicio está diseñado para aplicar conocimientos de lecciones específicas en escenarios realistas de plantas industriales.

**Duración total estimada:** 210 minutos (3.5 horas)

**Prerequisitos:**
- Completar Lecciones 16-20 del Módulo 4
- Dominio de interfaz de AutoCAD Plant 3D
- Conocimiento de estándares AISC, OSHA, ASME, API

**Archivos base:**
Los archivos base para ejercicios se proporcionan en carpeta del curso: `modulo-4-structural-equipment/ejercicios/archivos-base/`

**Entregables:**
Cada ejercicio requiere entregar:
- Archivo DWG completado
- Capturas de pantalla específicas
- Reportes generados (Excel, PDF)
- Documento de verificación (checklist completado)

---

## Ejercicio 16: Diseño de Marco Estructural de Acero

**Lección aplicada:** Lección 16 - Perfiles Estructurales y Acero

**Duración estimada:** 40 minutos

**Nivel de dificultad:** Intermedio

### Objetivo

Diseñar un marco estructural completo de acero para una planta industrial siguiendo estándares AISC, incluyendo columnas, vigas principales y secundarias, arriostramientos, y retícula estructural (grid). El marco soportará equipos de proceso con cargas especificadas.

### Escenario

Usted es el ingeniero estructural en un proyecto de planta de tratamiento de gas. Debe diseñar la estructura de acero de la Unit 200 (Compressor Building) que albergará dos compresores centrífugos grandes, separadores asociados, y sistemas de tuberías. El edificio es rectangular con dimensiones en planta de 18m × 12m y altura de 9m.

### Especificaciones del Proyecto

**Dimensiones del marco:**
- Largo (dirección Norte-Sur): 18 metros (3 vanos de 6m cada uno)
- Ancho (dirección Este-Oeste): 12 metros (2 vanos de 6m cada uno)
- Altura libre: 9 metros (piso a viga inferior de techo)
- Altura de columnas: 10.5 metros (incluye espacio para viga de techo)

**Sistema de retícula (Grid):**
- Líneas Norte-Sur: A, B, C, D (spacing 6m)
- Líneas Este-Oeste: 1, 2, 3 (spacing 6m)
- Grid intersections: A-1, A-2, A-3, B-1, B-2, B-3, C-1, C-2, C-3, D-1, D-2, D-3

**Cargas de diseño:**
- Carga muerta (Dead Load): 500 kg/m² (equipos, tuberías, piso)
- Carga viva (Live Load): 250 kg/m² (mantenimiento, nieve)
- Carga de viento: 150 kg/m² (presión lateral)
- Carga sísmica: Zona C (según CFE mexicano)

**Materiales:**
- Columnas: Acero estructural A992 Gr.50
- Vigas: Acero estructural A992 Gr.50
- Arriostramientos: Acero estructural A36
- Acabado: Pintura anticorrosiva sistema epóxico

### Perfiles Estructurales Especificados

**Columnas:**
- Perfil: AISC W14×90 (columnas principales en esquinas y perímetro)
- Altura: 10.5 metros desde fundación a tope
- Base plate: 500×500×25 mm con 4 anchor bolts M24

**Vigas principales (main beams):**
- Perfil: AISC W18×50
- Dirección: Este-Oeste (perpendicular a columnas en líneas A, B, C, D)
- Span: 6 metros entre columnas
- Ubicación: elevación +9.0m (nivel de techo)

**Vigas secundarias (secondary beams):**
- Perfil: AISC W16×31
- Dirección: Norte-Sur (conectan vigas principales)
- Spacing: 2 metros on-center
- Ubicación: elevación +9.0m

**Vigas de piso intermedio:**
- Perfil: AISC W18×40
- Elevación: +4.5m (piso intermedio para mantenimiento)
- Configuración: igual que vigas de techo

**Arriostramientos (Bracing):**
- Perfil: AISC L5×5×1/2 (ángulo 5"×5"×1/2" espesor)
- Configuración: X-bracing en planos verticales
- Ubicación: planos exteriores en lados Norte y Sur del edificio

### Instrucciones Paso a Paso

**Parte 1: Configuración Inicial y Grid (10 minutos)**

1. Abrir nuevo proyecto de Plant 3D
   - Template: Metric (mm)
   - Project name: "Modulo4_Ejercicio16_[SuNombre]"

2. Configurar layers:
   - GRID: color cyan, linetype continuous
   - COLUMNS: color red, linetype continuous
   - BEAMS: color green, linetype continuous
   - BRACING: color yellow, linetype continuous

3. Crear sistema de retícula (Structural Grid):
   - Comando: `PLANTSTRUCTURALGRID`
   - Grid type: Rectangular
   - Direction 1 (North-South):
     - Labels: A, B, C, D
     - Spacing: 6000, 6000, 6000 mm
   - Direction 2 (East-Oeste):
     - Labels: 1, 2, 3
     - Spacing: 6000, 6000 mm
   - Base point: 0,0,0 (origen)
   - Grid elevation: 0.0 (nivel de fundación)

4. Verificar grid en plan view:
   - 12 intersecciones (4×3 grid)
   - Grid lines etiquetadas correctamente
   - Dimensiones: 18m × 12m

**Parte 2: Colocación de Columnas (10 minutos)**

5. Configurar catálogo de columnas:
   - Plant 3D → Structure → Steel Catalog
   - Seleccionar: AISC W-Shapes
   - Perfil: W14×90

6. Colocar columnas en todas las intersecciones de grid:
   - Comando: `PLANTCOLUMN`
   - Profile: AISC W14×90
   - Material: A992 Gr.50
   - Orientation: Web perpendicular a dirección Norte-Sur

7. Ubicación de 12 columnas:
   - Grid A-1: columna 1
   - Grid A-2: columna 2
   - Grid A-3: columna 3
   - Grid B-1: columna 4
   - Grid B-2: columna 5
   - Grid B-3: columna 6
   - Grid C-1: columna 7
   - Grid C-2: columna 8
   - Grid C-3: columna 9
   - Grid D-1: columna 10
   - Grid D-2: columna 11
   - Grid D-3: columna 12

8. Configuración de cada columna:
   - Base elevation: 0.0 (fundación)
   - Top elevation: +10,500 mm
   - Base plate: 500×500×25 mm
   - Anchor bolts: 4× M24, spacing 400 mm BC

**Parte 3: Vigas Principales de Techo (8 minutos)**

9. Añadir vigas principales Este-Oeste en elevación +9.0m:
   - Comando: `PLANTBEAM`
   - Profile: AISC W18×50
   - Material: A992 Gr.50
   - Elevation: +9000 mm

10. Colocar vigas en líneas de grid A, B, C, D:
    - **Line A:** viga de A-1 a A-3 (12m continua, o dos vanos de 6m)
      - Opción: beam continua o beam por vano con connections
    - **Line B:** viga de B-1 a B-3
    - **Line C:** viga de C-1 a C-3
    - **Line D:** viga de D-1 a D-3

11. Conexiones de vigas a columnas:
    - Connection type: Bolted clip angle connection
    - Clips: L4×4×3/8, dos ángulos por conexión
    - Bolts: A325, 3/4" diámetro

**Parte 4: Vigas Secundarias de Techo (7 minutos)**

12. Añadir vigas secundarias Norte-Sur:
    - Profile: AISC W16×31
    - Spacing: 2 metros on-center
    - Span: entre vigas principales (6m)

13. Ubicación de vigas secundarias:
    - Entre líneas A-B: 2 vigas intermedias (+2m, +4m desde A)
    - Entre líneas B-C: 2 vigas intermedias
    - Entre líneas C-D: 2 vigas intermedias
    - Total: 6 vigas secundarias

14. Conexiones:
    - Simple shear connection a vigas principales
    - Seat angle: L3×3×5/16

**Parte 5: Piso Intermedio (Opcional, 5 minutos)**

15. Añadir vigas de piso intermedio a elevación +4.5m:
    - Configuración similar a techo
    - Profile: AISC W18×40
    - Misma distribución: principal E-W, secundarias N-S

**Parte 6: Arriostramientos (8 minutos)**

16. Añadir X-bracing en plano Norte (línea 1):
    - Comando: `PLANTBRACING`
    - Profile: AISC L5×5×1/2
    - Configuration: X-bracing (dos diagonales formando X)
    - Ubicación: entre columnas A-1 y B-1, elevación 0 a +9m
    - Repetir: B-1 a C-1, C-1 a D-1

17. Añadir X-bracing en plano Sur (línea 3):
    - Misma configuración que plano Norte
    - Entre A-3 y B-3, B-3 y C-3, C-3 y D-3

18. Conexiones de bracing:
    - Gusset plates: 12mm espesor, dimensiones según cálculo
    - Bolts: A325, 5/8" diámetro

**Parte 7: Verificación y Documentación (7 minutos)**

19. Verificación visual 3D:
    - Vista isométrica: verificar estructura completa
    - Todas las columnas verticales y a plomo
    - Vigas horizontales a elevaciones correctas
    - Arriostramientos en planos verticales

20. Generar lista de materiales:
    - Plant 3D → Reports → Structural Steel BOM
    - Agrupar por: Profile type
    - Columnas del reporte: Description, Profile, Length, Quantity, Weight
    - Exportar a Excel: `Ejercicio16_BOM.xlsx`

21. Crear planos:
    - **Plan View - Roof Level (+9.0m):**
      - Mostrar grid, vigas principales, vigas secundarias
      - Dimensionar vanos (6000 mm)
    - **Elevation View - North (Line 1):**
      - Mostrar columnas, vigas, arriostramientos
      - Dimensionar altura (10,500 mm)
    - **Elevation View - East (Line A):**
      - Similar a North elevation
    - **3D Isometric View:**
      - Vista general de estructura completa

22. Guardar archivo:
    - Nombre: `Modulo4_Ejercicio16_[SuNombre].dwg`

### Entregables

1. **Archivo DWG:** Modelo 3D completo de estructura de acero
2. **BOM Excel:** Lista de materiales con cantidades y pesos
3. **Screenshots:**
   - Plan view de techo con grid y vigas
   - North elevation con columnas y bracing
   - Vista isométrica 3D de estructura completa
4. **Documento de verificación:** Checklist con ítems verificados

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Grid correctamente configurado | 10 | 4×3 grid, spacing 6m, labels correctos |
| 12 columnas en ubicaciones correctas | 20 | Todas las intersecciones, perfil W14×90, altura 10.5m |
| Vigas principales de techo | 20 | 4 líneas E-W, perfil W18×50, elevación +9.0m |
| Vigas secundarias | 15 | Spacing 2m, perfil W16×31, conexiones correctas |
| Arriostramientos | 15 | X-bracing en planos Norte y Sur, perfil L5×5×1/2 |
| BOM generado | 10 | Lista completa, cantidades correctas |
| Documentación (planos) | 10 | Plan, elevations, isométrico claros |
| **Total** | **100** | |

### Notas Adicionales

**Verificación estructural:**
Este ejercicio es de modelado en Plant 3D. Cálculos estructurales (análisis de cargas, dimensionamiento de miembros) están fuera del alcance. Los perfiles especificados son ejemplos; en proyectos reales, ingeniero estructural debe verificar capacidad.

**Conexiones:**
Plant 3D puede representar conexiones conceptualmente. Detalles de conexión precisos (número de pernos, dimensiones de placas) requieren software especializado (Tekla Structures, RISA Connection) o cálculo manual.

---

## Ejercicio 17: Plataformas y Escaleras de Acceso

**Lección aplicada:** Lección 17 - Plataformas y Escaleras

**Duración estimada:** 45 minutos

**Nivel de dificultad:** Intermedio

### Objetivo

Diseñar un sistema completo de plataformas de trabajo a múltiples elevaciones con escaleras de acceso, cumpliendo con requisitos OSHA 1910 y NOM-001-STPS. El sistema proporcionará acceso seguro a equipos de proceso para operación, mantenimiento e inspección.

### Escenario

En la planta de compresión del Ejercicio 16, se han instalado dos recipientes verticales (separadores) que requieren acceso para operación de válvulas e inspección. Usted debe diseñar plataformas de trabajo a diferentes elevaciones y escaleras que conecten los niveles, incluyendo sistema de grating (rejilla) apropiado.

### Especificaciones del Proyecto

**Equipos a acceder:**
- Separator V-201: 2m diámetro × 6m altura, centerline @ X=6m, Y=3m, elevación base +0.5m
- Separator V-202: 1.5m diámetro × 4.5m altura, centerline @ X=12m, Y=3m, elevación base +0.5m

**Plataformas requeridas:**

**Platform 1 - Ground Level Maintenance:**
- Elevación: +0.5m (500 mm sobre grade)
- Dimensiones: 8m × 3m (rectangular)
- Ubicación: entre V-201 y V-202, desde X=4m a X=12m, Y=1m a Y=4m
- Propósito: Acceso a válvulas inferiores, base de equipos

**Platform 2 - Mid-Level Operations:**
- Elevación: +3.0m
- Dimensiones: 6m × 2m
- Ubicación: lado Este de V-201 (X=7m a X=13m, Y=2m a Y=4m)
- Propósito: Acceso a válvulas de control de nivel, instrumentos

**Platform 3 - Upper Level Inspection:**
- Elevación: +6.0m
- Dimensiones: 4m × 2m
- Ubicación: lado Este de V-201 (X=7m a X=11m, Y=2m a Y=4m)
- Propósito: Acceso a manhole de inspección en cabezal superior

**Escaleras:**

**Stair 1 - Grade to Platform 2:**
- Tipo: Escalera recta (straight stair)
- Elevación: +0.0m (grade) a +3.0m (Platform 2)
- Rise: 3.0 metros
- Ancho: 900 mm (mínimo OSHA)
- Ángulo: 45° (estándar industrial)
- Número de escalones: 15 (rise por escalón = 200 mm)

**Stair 2 - Platform 2 to Platform 3:**
- Tipo: Escalera recta
- Elevación: +3.0m a +6.0m
- Rise: 3.0 metros
- Configuración: similar a Stair 1

**Grating specifications:**

**Tipo:** Bar grating (rejilla de barras de acero)
- Material: Acero galvanizado A36
- Configuración: Welded bar grating
- Bearing bars: 25×3 mm @ 30 mm spacing
- Cross bars: 25×3 mm @ 100 mm spacing
- Panel size standard: 1000×1000 mm
- Surface: Serrated (dentado) para anti-deslizamiento
- Carga de diseño: 500 kg/m² (heavy duty)

**Soporte de plataformas:**
- Estructura: vigas perimetrales AISC W8×18
- Vigas internas: AISC W6×15 @ 1.5m spacing
- Columnas de soporte: HSS 4×4×1/4 (tubular square)
- Conexiones: soldadas o atornilladas según ubicación

### Instrucciones Paso a Paso

**Parte 1: Preparación del Modelo (5 minutos)**

1. Abrir archivo de Ejercicio 16 O crear nuevo proyecto
   - Si nuevo: crear grid básico y ubicar equipos conceptuales (cilindros representando V-201 y V-202)

2. Establecer elevaciones de referencia:
   - Grade: 0.0
   - Platform 1: +500 mm
   - Platform 2: +3000 mm
   - Platform 3: +6000 mm

3. Configurar layers:
   - PLATFORMS: color magenta
   - STAIRS: color blue
   - GRATING: color 8 (gris)
   - SUPPORTS: color green

**Parte 2: Platform 1 - Ground Level (8 minutos)**

4. Crear Platform 1:
   - Comando: `PLANTPLATFORM`
   - Type: Rectangular
   - First corner: X=4000, Y=1000, Z=500
   - Opposite corner: X=12000, Y=4000, Z=500
   - Dimensions: 8000 × 3000 mm
   - Elevation: +500 mm

5. Configurar propiedades de Platform 1:
   - **Grating:**
     - Type: Bar Grating
     - Pattern: Welded, 30×100 mm spacing
     - Material: Galvanized steel A36
     - Thickness: 32 mm (including bars)
   - **Perimeter beams:**
     - Profile: AISC W8×18
     - Material: A36
   - **Internal beams:**
     - Profile: AISC W6×15
     - Spacing: 1500 mm on-center
     - Direction: perpendicular a lado largo (E-W)
   - **Support columns:**
     - Profile: HSS 4×4×1/4
     - Locations: corners + intermediate @ 2m spacing
     - Base: welded base plate a fundación

6. Verificar:
   - Grating pattern visible en modelo 3D
   - Vigas perimetrales modeladas
   - Columnas de soporte en ubicaciones correctas

**Parte 3: Platform 2 - Mid-Level (8 minutos)**

7. Crear Platform 2:
   - Comando: `PLANTPLATFORM`
   - First corner: X=7000, Y=2000, Z=3000
   - Opposite corner: X=13000, Y=4000, Z=3000
   - Dimensions: 6000 × 2000 mm
   - Elevation: +3000 mm

8. Configuración similar a Platform 1:
   - Grating: mismo tipo
   - Beams: W8×18 perimeter, W6×15 internal
   - Supports: HSS columns desde grade o desde Platform 1 (dependiendo de diseño)

9. Consideración especial:
   - Plataforma rodea parcialmente V-201 (lado Este)
   - Clearance entre edge de plataforma y shell de vessel: 500 mm mínimo

**Parte 4: Platform 3 - Upper Level (8 minutos)**

10. Crear Platform 3:
    - First corner: X=7000, Y=2000, Z=6000
    - Opposite corner: X=11000, Y=4000, Z=6000
    - Dimensions: 4000 × 2000 mm
    - Elevation: +6000 mm

11. Configuración:
    - Mismas especificaciones de grating y estructura
    - Clearance a vessel V-201

12. Aberturas (openings) en plataformas:
    - Si escalera atraviesa plataforma: crear opening
    - Comando: Edit Platform → Add Opening
    - Tamaño: ancho de escalera + 100 mm clearance cada lado
    - Ejemplo: escalera 900 mm → opening 1100 × variable

**Parte 5: Stair 1 - Grade to Platform 2 (10 minutos)**

13. Crear Stair 1:
    - Comando: `PLANTSTAIR`
    - Type: Straight stair
    - Start point: X=14000, Y=2500, Z=0 (en grade)
    - End point: X=14000, Y=2500, Z=3000 (Platform 2 level)
    - Direction: hacia Norte (dirección Y+)

14. Configuración de Stair 1:
    - **Geometry:**
      - Total rise: 3000 mm
      - Tread width: 900 mm (ancho de escalera)
      - Number of treads: 15
      - Tread depth: 250 mm (run)
      - Riser height: 200 mm (3000/15)
      - Angle: arctan(200/250) ≈ 38.7° (aceptable, <45°)
    - **Treads:**
      - Type: Bar grating (mismo que plataformas)
      - Nosing: 25 mm projecting nosing
    - **Stringers:**
      - Profile: AISC C9×13.4 (channel)
      - Quantity: 2 (uno cada lado)
      - Material: A36 steel
    - **Landings:**
      - Landing superior: en Platform 2 (integrado)
      - Landing inferior: en grade (100×900 mm landing pad)

15. Verificar:
    - Escalera conecta correctamente grade con Platform 2
    - Ángulo de inclinación <45° (OSHA requirement)
    - Tread depth ≥250 mm (OSHA requirement)
    - Riser height uniforme

**Parte 6: Stair 2 - Platform 2 to Platform 3 (10 minutos)**

16. Crear Stair 2:
    - Start point: En Platform 2, X=12000, Y=2500, Z=3000
    - End point: En Platform 3, Z=6000
    - Rise: 3000 mm

17. Configuración:
    - Similar a Stair 1
    - 15 treads, rise 200 mm cada uno
    - Ancho: 900 mm
    - Stringers: C9×13.4

18. Conexión con plataformas:
    - Landing superior integrado en Platform 3
    - Landing inferior: descansa sobre Platform 2 (verificar soporte)

**Parte 7: Verificaciones de Cumplimiento OSHA (6 minutos)**

19. Checklist de cumplimiento:

**Plataformas:**
□ Ancho mínimo: ≥600 mm (NOM) o ≥760 mm (OSHA) - Verificar: todas ≥2000 mm ✓
□ Capacidad de carga: 500 kg/m² - Verificar: especificado en grating ✓
□ Superficie anti-deslizante: serrated grating ✓
□ Sin aberturas >19 mm: grating spacing ≤30 mm ✓

**Escaleras:**
□ Ancho mínimo: 560 mm (NOM) o 22" (OSHA) - Verificar: 900 mm ✓
□ Ángulo: 30° a 50° - Verificar: ~39° ✓
□ Riser: 150-230 mm - Verificar: 200 mm ✓
□ Tread depth: ≥250 mm - Verificar: 250 mm ✓
□ Uniformidad de risers: variación <6 mm ✓

20. Documentar cumplimiento:
    - Crear tabla con verificaciones
    - Anotar en planos: "Diseño conforme OSHA 1910.24 y 1910.25"

### Entregables

1. **Archivo DWG:** Modelo 3D con 3 plataformas y 2 escaleras
2. **Reportes:**
   - Platform BOM: lista de grating panels, vigas, columnas
   - Stair specifications: geometría, materiales
3. **Screenshots:**
   - Vista isométrica del sistema completo de acceso
   - Elevation view mostrando las 3 plataformas y escaleras
   - Plan view de cada plataforma mostrando grating pattern
   - Detalle de conexión de escalera a plataforma
4. **Documento de cumplimiento:** Checklist OSHA/NOM verificado

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Platform 1 correctamente modelada | 15 | Dimensiones, elevación, grating, estructura |
| Platform 2 correctamente modelada | 15 | Idem |
| Platform 3 correctamente modelada | 15 | Idem |
| Stair 1 conforme OSHA | 20 | Geometría, ángulo, treads, stringers |
| Stair 2 conforme OSHA | 20 | Idem |
| Grating specifications correctas | 10 | Tipo, spacing, material, anti-slip |
| Verificación de cumplimiento | 5 | Checklist completo |
| **Total** | **100** | |

---

## Ejercicio 18: Sistema Completo de Barandas

**Lección aplicada:** Lección 18 - Barandas y Sistemas de Seguridad

**Duración estimada:** 35 minutos

**Nivel de dificultad:** Intermedio

### Objetivo

Implementar un sistema completo de barandas (handrails) en las plataformas y escaleras creadas en Ejercicio 17, cumpliendo con todos los requisitos de OSHA 1910.29 y NOM-001-STPS. El sistema incluirá barandas perimetrales, tratamiento de esquinas, toe boards, y barandas en escaleras con extensiones apropiadas.

### Escenario

Las tres plataformas y dos escaleras del sistema de acceso de la Unit 200 requieren protección contra caídas. Usted debe implementar barandas conformes con normativa en todos los bordes expuestos, gestionar aberturas de acceso, y asegurar que operadores y personal de mantenimiento estén protegidos.

### Especificaciones del Proyecto

**Estándar de barandas:**
- Normativa: OSHA 1910.29 (más estricta que NOM, por lo tanto cumple ambas)
- Tipo: Pipe rail (baranda tubular)

**Componentes del sistema de barandas:**

**Posts (Postes):**
- Profile: Tubería 2" NPS Schedule 40
- Material: A53 Grade B carbon steel pipe
- Spacing máximo: 1800 mm (6 ft) between centers
- Height: 1067 mm (42 inches) sobre superficie de plataforma
- Mounting: welded to platform perimeter beams

**Top Rail (Riel superior):**
- Profile: Tubería 2" NPS Schedule 40
- Material: A53 Grade B
- Elevation: 1067 mm (42") desde superficie de grating
- Configuration: continua, soldada a postes
- End treatment: return to post (doblar 90° hacia abajo en extremos)

**Midrail (Riel intermedio):**
- Profile: Tubería 1.5" NPS Schedule 40
- Material: A53 Grade B
- Elevation: 533 mm (21") desde superficie (punto medio entre piso y top rail)
- Configuration: continua, soldada a postes

**Toe Board (Zócalo protector):**
- Profile: Ángulo estructural L4×4×1/4 (AISC)
- Material: A36 structural steel
- Height: 102 mm (4 inches)
- Gap from floor: 6 mm (1/4") máximo
- Mounting: soldado a borde de plataforma, ala horizontal sobre grating

**Acabado:**
- Galvanizado por inmersión en caliente (hot-dip galvanized)
- Pintura adicional: amarillo seguridad (safety yellow RAL 1003)

### Requisitos Específicos por Ubicación

**Platform 1 (+0.5m):**
- Barandas en 3 lados: Norte, Este, Oeste (lado Sur sin baranda, contra estructura)
- Longitudes:
  - Lado Norte: 8m (lado largo)
  - Lado Este: 3m
  - Lado Oeste: 3m
- Esquinas: postes en ambas esquinas NE y NW
- Toe board: en los 3 lados con baranda

**Platform 2 (+3.0m):**
- Barandas en 4 lados completos (plataforma elevada, todos los lados expuestos)
- Longitudes:
  - Lados largos (N y S): 6m cada uno
  - Lados cortos (E y W): 2m cada uno
- Esquinas: postes en las 4 esquinas con tratamiento de miter
- Abertura: lado Oeste tiene abertura de 1.0m ancho para acceso de Stair 1
  - Baranda removible con cadena de seguridad
- Toe board perimetral completo

**Platform 3 (+6.0m):**
- Barandas en 4 lados
- Longitudes:
  - Lados largos: 4m cada uno
  - Lados cortos: 2m cada uno
- Abertura: lado Sur tiene abertura de 1.0m para acceso de Stair 2
  - Baranda removible con cadena
- Toe board completo

**Stair 1 (grade a +3.0m):**
- Barandas en ambos lados (izquierdo y derecho subiendo)
- Altura de baranda: 1067 mm vertical desde nosing line de escalones
- Top rail: paralelo a inclinación de escalera
- Midrail: paralelo a top rail, a punto medio vertical
- Extensión superior: 305 mm (12") horizontal desde último escalón
- Extensión inferior: 305 mm (12") horizontal antes de primer escalón
- Toe board: NO requerido en escaleras (escalones previenen caída de objetos)

**Stair 2 (Platform 2 a Platform 3):**
- Configuración idéntica a Stair 1

### Instrucciones Paso a Paso

**Parte 1: Crear Estilo de Baranda Personalizado (8 minutos)**

1. Abrir archivo de Ejercicio 17 con plataformas y escaleras

2. Acceder a Handrail Style Manager:
   - Comando: `PLANTHANDRAILSTYLES`
   - Click **New Style**

3. Configurar nuevo estilo "OSHA_2in_Pipe_Galvanized":

   **Posts:**
   - Profile: Pipe_2_Sch40
   - Spacing: Automatic, maximum 1800 mm
   - Height: 1067 mm above platform
   - Rotation: 0° (alineado con baranda)
   - Material: A53 Gr.B

   **Top Rail:**
   - Profile: Pipe_2_Sch40
   - Elevation: 1067 mm
   - Connection: Welded to posts
   - Corner treatment: Miter (inglete soldado)
   - End treatment: Return to post (doblar 90° hacia abajo)

   **Midrail:**
   - Profile: Pipe_1.5_Sch40
   - Elevation: 533 mm (point medio)
   - Connection: Welded to posts
   - Quantity: 1 (single midrail)

   **Toe Board:**
   - Include: Yes
   - Profile: AISC_L_4x4x0.25
   - Height: 102 mm (4 inches)
   - Gap from surface: 6 mm
   - Mounting: Top of platform (sobre grating)

   **Materials:**
   - All components: A36/A53 carbon steel
   - Finish: Hot-dip galvanized + safety yellow paint

4. Guardar estilo

**Parte 2: Aplicar Barandas a Platform 1 (5 minutos)**

5. Seleccionar Platform 1
   - Properties → Handrail section
   - Has Handrails: **Yes**
   - Handrail Style: "OSHA_2in_Pipe_Galvanized"
   - Handrail Sides: **Select Sides**

6. En selector de lados:
   - Seleccionar: Norte, Este, Oeste (NO seleccionar Sur)
   - Confirmar

7. Verificar en modelo 3D:
   - Barandas generadas automáticamente en 3 lados
   - Posts espaciados correctamente (<1800 mm)
   - Top rail a 1067 mm, midrail a 533 mm
   - Toe boards presentes
   - Esquinas NE y NW con postes y miters correctos

**Parte 3: Aplicar Barandas a Platform 2 con Abertura (8 minutos)**

8. Seleccionar Platform 2
   - Aplicar barandas: "OSHA_2in_Pipe_Galvanized"
   - Handrail Sides: **All Sides** (inicialmente)

9. Crear abertura en lado Oeste para Stair 1:
   - Identificar ubicación de abertura: centro del lado Oeste, 1.0m ancho
   - Comando: `PLANTHANDRAIL` → Edit Handrail Path
   - Seleccionar baranda del lado Oeste
   - Crear gap de 1.0m en ubicación de acceso de escalera
   - Método: editar path, remover segmento de 1.0m

10. Configurar protección de abertura:
    - Añadir baranda removible:
      - Segmento de baranda desmontable (posts con receptáculos)
      - Cuando removido: instalar safety chain (cadena de seguridad)
    - Cadena:
      - Material: galvanized steel chain, 6mm links
      - Conectores: carabiner hooks en ambos extremos
      - Señalización: "PELIGRO - MANTENER CADENA EN POSICIÓN"

11. Verificar Platform 2:
    - Barandas en 4 lados
    - Abertura de 1.0m con protección (removible + chain)
    - Toe boards perimetrales completos

**Parte 4: Aplicar Barandas a Platform 3 (5 minutos)**

12. Seleccionar Platform 3
    - Aplicar barandas en 4 lados (All Sides)
    - Estilo: "OSHA_2in_Pipe_Galvanized"

13. Crear abertura en lado Sur para Stair 2:
    - Similar a Platform 2
    - Gap de 1.0m
    - Baranda removible + safety chain

14. Verificar Platform 3

**Parte 5: Barandas en Stair 1 (5 minutos)**

15. Seleccionar Stair 1
    - Properties → Handrail section
    - Add Handrails: **Yes**
    - Handrail Style: "OSHA_2in_Pipe_Galvanized"
    - Handrail Location: **Both Sides** (ambos lados de escalera)

16. Configurar extensiones:
    - **Top Extension:** 305 mm (12 inches) horizontal
      - Extensión más allá del último escalón superior
      - Dirección: horizontal (paralela a plataforma superior)
    - **Bottom Extension:** 305 mm horizontal
      - Extensión antes del primer escalón inferior
      - Dirección: horizontal (paralela a superficie inferior)

17. Verificar Stair 1:
    - Barandas en ambos lados
    - Altura: 1067 mm vertical desde nosing line (no paralelo)
    - Top rail sigue inclinación de escalera
    - Extensiones de 305 mm en tope e inicio
    - Midrail presente a punto medio vertical

18. Nota sobre toe board:
    - Toe boards NO se incluyen en escaleras (escalones ya previenen caída de objetos)
    - Si estilo incluye toe board automático, deshabilitar para escaleras

**Parte 6: Barandas en Stair 2 (4 minutos)**

19. Aplicar barandas a Stair 2:
    - Configuración idéntica a Stair 1
    - Both sides
    - Extensiones 305 mm

20. Verificar Stair 2

**Parte 7: Verificación Final de Cumplimiento (5 minutos)**

21. Checklist de cumplimiento OSHA 1910.29:

**Altura de Top Rail:**
□ Todas las barandas: top rail a 42" ± 3" (1067 mm ± 76 mm) - Verificar cada plataforma
□ Medición desde superficie de grating/piso ✓
□ Escaleras: 42" vertical desde nosing line ✓

**Resistencia (documentar, no se calcula en Plant 3D):**
□ Top rail diseñado para 200 lbf (890 N) carga puntual
□ Sistema resiste sin deflexión >3 inches (76 mm)

**Espaciamiento de Posts:**
□ Spacing máximo: 8 ft (2438 mm) - Verificar: configurado 1800 mm (6 ft) ✓
□ Posts en todas las esquinas ✓

**Midrail:**
□ Presente a ~21" (533 mm) - punto medio ✓
□ Continuo sin gaps >19" (483 mm) ✓

**Toe Board:**
□ Altura mínima 3.5" (89 mm) - Verificar: 4" (102 mm) especificado ✓
□ Gap con piso ≤0.25" (6 mm) ✓
□ Presente en plataformas (NO en escaleras) ✓

**Extensiones de Escalera:**
□ Extensión superior: mínimo 12" (305 mm) ✓
□ Extensión inferior: mínimo 12" (305 mm) ✓

**Aberturas:**
□ Aberturas protegidas con baranda removible + cadena ✓
□ Señalización presente ✓

22. Generar reporte de cumplimiento:
    - Plant 3D → Reports → Handrail Compliance Report
    - Standard: OSHA 1910.29
    - Equipment: Platforms 1, 2, 3 y Stairs 1, 2
    - Verificar: 100% compliance

23. Documentar en planos:
    - Anotar en cada plataforma: "Handrails per OSHA 1910.29"
    - Detail callouts: "See Detail HR-1 for typical handrail section"

### Entregables

1. **Archivo DWG:** Modelo completo con barandas en todas las plataformas y escaleras
2. **Handrail BOM:** Lista de materiales
   - Tubería 2" Sch 40: longitud total para posts y top rails
   - Tubería 1.5" Sch 40: longitud total para midrails
   - Ángulo L4×4×1/4: longitud total para toe boards
   - Safety chains: 2 unidades (Platform 2 y 3)
3. **Compliance Report:** Reporte de cumplimiento OSHA generado por Plant 3D
4. **Screenshots:**
   - Vista isométrica del sistema completo (plataformas + escaleras + barandas)
   - Detail view de esquina de plataforma mostrando construcción de baranda
   - Detail view de conexión de baranda de escalera con extensión superior
   - Plan view de Platform 2 mostrando abertura con chain
5. **Checklist de cumplimiento:** Documento con verificaciones OSHA marcadas

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Estilo de baranda correctamente configurado | 15 | Posts, top rail, midrail, toe board según specs |
| Barandas en Platform 1 | 10 | 3 lados, toe boards, esquinas correctas |
| Barandas en Platform 2 con abertura | 15 | 4 lados, abertura protegida, chain |
| Barandas en Platform 3 con abertura | 15 | Similar a Platform 2 |
| Barandas en Stair 1 | 15 | Ambos lados, altura correcta, extensiones 305mm |
| Barandas en Stair 2 | 10 | Similar a Stair 1 |
| Cumplimiento normativo verificado | 10 | Checklist OSHA completado, reporte generado |
| BOM de barandas | 10 | Lista completa y precisa de materiales |
| **Total** | **100** | |

---

## Ejercicio 19: Modelar Recipiente a Presión

**Lección aplicada:** Lección 19 - Equipos Personalizados y Modelado Paramétrico

**Duración estimada:** 50 minutos

**Nivel de dificultad:** Intermedio-Avanzado

### Objetivo

Crear un recipiente vertical de separación gas-líquido completamente especificado usando el Equipment Designer paramétrico de Plant 3D. El recipiente cumplirá con ASME Section VIII Division 1, incluyendo geometría precisa, materiales, condiciones de diseño, soporte tipo skirt, y preparación para adición de boquillas en Ejercicio 20.

### Escenario

La planta de gas natural requiere un nuevo separador de alta presión para eliminar condensados del gas antes de compresión. Usted, como ingeniero de equipos, debe modelar el recipiente V-301 según especificaciones del proceso y diseño mecánico proporcionadas. El modelo 3D servirá para layout de planta, diseño de soportes estructurales, y coordinación con tuberías.

### Especificaciones del Recipiente

**Data Sheet: VESSEL V-301**

```
=============================================================================
VESSEL DATA SHEET - V-301
Natural Gas Inlet Separator
=============================================================================

IDENTIFICATION:
- Tag Number: V-301
- Service: Natural Gas/Condensate Separator (Two-Phase)
- Description: Vertical separator for gas/liquid separation at compressor inlet
- P&ID Reference: Drawing 3001-P-002
- Equipment Drawing: V-301-GA-001

DESIGN CONDITIONS:
- Design Pressure: 1200 psig (82.7 bar)
- Design Temperature: 180°F (82°C)
- Operating Pressure: 1000 psig (68.9 bar)
- Operating Temperature: 120°F (49°C)
- MAWP (Calculated): 1250 psig (86.2 bar)
- Corrosion Allowance: 3 mm (0.118 inches)
- Joint Efficiency: 0.85 (spot radiography per ASME VIII-1 UW-12)

SHELL DIMENSIONS:
- Inside Diameter (ID): 1200 mm (47.24 inches)
- Tangent-to-Tangent Height: 3600 mm (141.7 inches)
- Shell Thickness (Nominal): 32 mm (includes CA)
  - Required thickness (calculated): 29 mm
  - Nominal thickness (standard plate): 32 mm
- Number of Shell Courses: 1 (monolithic shell, no circumferential seam)
- Shell Material: SA-516 Grade 70 (normalized carbon steel plate)

TOP HEAD:
- Head Type: ASME F&D (2:1 Elliptical)
- Inside Crown Radius: 1200 mm (equal to ID)
- Inside Knuckle Radius: 120 mm (10% of ID, standard 2:1 ellipse)
- Head Thickness (Nominal): 32 mm (same as shell)
- Straight Flange Height: 50 mm (2 inches standard)
- Head Material: SA-516 Grade 70

BOTTOM HEAD:
- Head Type: ASME F&D (2:1 Elliptical)
- Inside Crown Radius: 1200 mm
- Inside Knuckle Radius: 120 mm
- Head Thickness (Nominal): 32 mm
- Straight Flange Height: 50 mm
- Head Material: SA-516 Grade 70

SUPPORT:
- Support Type: Cylindrical Skirt (carbon steel)
- Skirt Inside Diameter: 1000 mm (smaller than vessel ID for stability)
- Skirt Height: 1800 mm (provides clearance for bottom nozzles and drainage)
- Skirt Thickness: 16 mm (nominal)
- Skirt Material: SA-516 Grade 70 (same as vessel)
- Base Ring: Yes, continuous around skirt perimeter
  - Base Ring Width: 200 mm (extends outward from skirt OD)
  - Base Ring Thickness: 20 mm
- Anchor Bolts: 20 bolts, M30 diameter
  - Bolt Circle Diameter: 1400 mm
  - Material: ASTM A-193 Grade B7 (high-strength alloy steel)
  - Embedded Length: 600 mm into concrete foundation

INTERNAL COMPONENTS (for reference, not modeled in Plant 3D):
- Inlet Diverter: deflects gas/liquid inlet stream
- Wire Mesh Demister Pad: removes liquid droplets from gas (located at elevation +3000mm)
- Vortex Breaker: at liquid outlet to prevent gas entrainment

NOZZLES (To be added in Exercise 20):
- Total of 10 nozzles ranging from 1" to 12" NPS
- Details in Exercise 20 nozzle schedule

WEIGHTS (Estimated):
- Empty Weight: 6,800 kg
- Operating Weight: 9,200 kg (with normal liquid level)
- Hydrostatic Test Weight: 18,500 kg (filled with water for pressure test)
- Shipping Weight: 7,200 kg (with temporary internals)

CODE OF CONSTRUCTION:
- ASME Boiler and Pressure Vessel Code, Section VIII, Division 1
- Latest Edition: 2021 with 2022 Addenda
- Stamp Required: ASME "U" Stamp
- Jurisdiction: State of Texas (example)
- Manufacturer: [To Be Determined - TBD]

INSPECTION AND TESTING:
- Radiography: Spot RT per ASME VIII-1 UW-11(a) Type 1
  - Full RT of all Category A butt welds (longitudinal seams) at fabricator's option
- Hydrostatic Test: 1.3 × MAWP = 1.3 × 1250 = 1625 psig
  - Test Medium: Demineralized water
  - Test Duration: Minimum 30 minutes at test pressure
- Pneumatic Test: Not permitted (too hazardous for this pressure)

SPECIAL REQUIREMENTS:
- Impact Testing: Charpy V-notch impact tests required for shell and heads
  - Test Temperature: -20°F (-29°C) per ASME VIII-1 UG-84
  - Acceptance Criteria: 15 ft-lbf (20 J) average, 10 ft-lbf (13.5 J) minimum
- PWHT (Post-Weld Heat Treatment): Required per ASME VIII-1 UCS-56
  - Temperature: 1100-1150°F (593-621°C)
  - Holding Time: 1 hour per inch of thickness, minimum 15 minutes
- External Coating: Two-part epoxy system, 250 microns DFT
  - Color: Light gray RAL 7035
- Insulation: 100 mm mineral wool insulation with aluminum cladding
  - Purpose: Personnel protection (surface temperature <60°C)

LOCATION IN PLANT:
- Plant Area: Unit 300 - Gas Compression
- Coordinates: X=25.0m, Y=15.0m (plant grid)
- Elevation: Bottom Tangent Line @ +2.0m from plant grade
- Orientation: Vertical, centerline plumb

=============================================================================
```

### Instrucciones Paso a Paso

**Parte 1: Creación del Recipiente Base (12 minutos)**

1. Abrir proyecto de Plant 3D (continuar de ejercicios anteriores o nuevo proyecto)

2. Establecer ubicación del recipiente:
   - Coordenadas: X=25000, Y=15000, Z=2000 (BTL @ +2.0m from grade)

3. Crear recipiente vertical:
   - Comando: `PLANTVESSEL`
   - Orientation: **Vertical**
   - Insertion Point: X=25000, Y=15000, Z=2000 (este es BTL, no base de skirt)

4. Cuadro de diálogo **Vertical Vessel Properties**:

**Tab: Identification**
- Tag: `V-301`
- Service: `Natural Gas/Condensate Separator`
- Description: `Vertical two-phase separator, high pressure, ASME VIII-1`
- Drawing Reference: `V-301-GA-001`
- P&ID Reference: `3001-P-002`

**Tab: Shell**
- Inside Diameter: `1200` mm
- Tangent-to-Tangent Height: `3600` mm
- Shell Thickness: `32` mm (nominal, includes CA)
- Number of Courses: `1` (single course, no circ seam)
- Shell Material: `SA-516 Grade 70`
- Material Type: `Normalized Carbon Steel Plate`

5. Confirmar y observar generación de shell cilíndrico

**Parte 2: Configuración de Cabezales (8 minutos)**

6. Editar vessel (si no en diálogo todavía) → **Tab: Top Head**

**Top Head Configuration:**
- Head Type: `Elliptical 2:1` (ASME F&D)
- Inside Crown Radius: `1200` mm (automático, igual a ID)
- Inside Knuckle Radius: `120` mm (automático, 10% de ID para 2:1)
- Head Thickness: `32` mm (nominal, same as shell)
- Straight Flange Height: `50` mm (2" standard)
- Head Material: `SA-516 Grade 70`

Geometría de cabezal elipsoidal 2:1:
- Altura de cabezal (inside depth): h = ID/4 = 1200/4 = 300 mm
- Con straight flange: altura total = 300 + 50 = 350 mm
- Plant 3D calcula automáticamente forma elipsoidal

7. **Tab: Bottom Head**

**Bottom Head Configuration:**
- Head Type: `Elliptical 2:1`
- Inside Crown Radius: `1200` mm
- Inside Knuckle Radius: `120` mm
- Head Thickness: `32` mm
- Straight Flange Height: `50` mm
- Head Material: `SA-516 Grade 70`

8. Aplicar y verificar en modelo 3D:
   - Vista de elevación (Front view)
   - Altura total desde apex de bottom head a apex de top head:
     - Bottom head: 350 mm
     - Shell T-T: 3600 mm
     - Top head: 350 mm
     - **Total: 4300 mm** (verificar visualmente)

**Parte 3: Configuración de Soporte Skirt (10 minutos)**

9. Continuar en diálogo de vessel (o editar) → **Tab: Support**

**Support Type Selection:**
- Support Type: `Skirt` (cylindrical skirt)

**Skirt Dimensions:**
- Skirt Inside Diameter: `1000` mm
  - Nota: menor que vessel ID (1200 mm) para estabilidad
  - Verificar: OD de skirt < ID de vessel para appearance
- Skirt Height: `1800` mm
  - Proporciona clearance para:
    - Bottom nozzles (drains, liquid outlet)
    - Acceso para inspección
    - Espacio para fundación y grout
- Skirt Thickness: `16` mm (nominal)
- Skirt Material: `SA-516 Grade 70` (mismo que vessel por compatibilidad térmica)

**Base Ring Configuration:**
- Include Base Ring: **Yes**
- Base Ring Width: `200` mm
  - Extends outward from skirt OD
  - Proporciona bearing area en fundación
  - Ancho típico: 150-250 mm
- Base Ring Thickness: `20` mm
  - Mayor que skirt para transmitir cargas
  - Típicamente: 1.5× skirt thickness

**Anchor Bolts:**
- Include Anchor Bolts: **Yes**
- Number of Anchor Bolts: `20`
  - Distribución uniforme: 360°/20 = 18° spacing
  - Número típico: 16-24 bolts para vessels medianos
- Bolt Size: `M30` (30 mm diameter)
  - Designación ISO: M30 × 3.5 (pitch)
  - Equivalente: 1-1/8" bolts
- Bolt Circle Diameter: `1400` mm
  - Mayor que OD de skirt para clearance
  - Típicamente: skirt OD + 200-300 mm
- Bolt Material: `ASTM A-193 Grade B7`
  - High-strength alloy steel (Cr-Mo)
  - Yield strength: 105 ksi (724 MPa)
- Embedded Length: `600` mm (documentar en properties, no modelado)
  - Longitud embebida en concrete foundation
  - Típicamente: 20-25× bolt diameter

10. Aplicar configuración de soporte

11. Verificar en modelo 3D:
    - Vista isométrica: skirt cilíndrico debajo de bottom head
    - Skirt OD menor que vessel OD (correcto)
    - Base ring extendiéndose desde skirt
    - 20 anchor bolts distribuidos uniformemente en bolt circle
    - Altura desde base de base ring a BTL: 1800 mm

12. Verificar elevaciones:
    - Grade (plant datum): 0.0
    - Base of base ring: depends on skirt attachment
      - Si BTL @ +2000 mm y skirt height = 1800 mm
      - Base de skirt @ +2000 - 1800 = +200 mm (skirt eleva vessel sobre grade)
    - Ajustar elevación de insertion point si necesario para cumplir BTL @ +2.0m

**Parte 4: Condiciones de Diseño y Materiales (8 minutos)**

13. **Tab: Design Conditions**

**Pressure:**
- Design Pressure: `1200` psig
  - Convertir: 1200 psig = 82.7 bar = 8.27 MPa
- Operating Pressure (Normal): `1000` psig (68.9 bar)
- MAWP (Maximum Allowable Working Pressure): `1250` psig
  - Calculado por fabricante según ASME formulas
  - Documentar: típicamente ligeramente > design pressure
- External Pressure: `15` psia (atmospheric, for vacuum consideration)

**Temperature:**
- Design Temperature: `180` °F
  - Convertir: 180°F = 82°C
- Operating Temperature (Normal): `120` °F (49°C)
- Minimum Design Metal Temperature (MDMT): `-20` °F (-29°C)
  - Determina requisitos de impact testing
  - SA-516 Gr.70 requiere Charpy testing @ -20°F

**Allowances and Factors:**
- Corrosion Allowance: `3` mm (0.118")
  - Aplicado a shell interior y heads
  - Agregado al espesor calculado para obtener nominal
- Weld Joint Efficiency: `0.85`
  - Factor E en ASME formulas
  - 0.85 = spot radiography (Type 1 per UW-11)
  - Si full RT: E = 1.0 (mayor eficiencia, menor espesor)

**Code:**
- Design Code: `ASME Section VIII Division 1`
- Code Edition: `2021`
- Code Addenda: `2022`
- Code Case: `None`
- Stamp: `U-Stamp` (ASME)
- Manufacturer Code: [TBD, asignado cuando se seleccione fabricante]

14. **Tab: Materials - Detalle**

**Shell Material:**
- Material Specification: `ASME SA-516`
- Grade: `70`
- Type: `Normalized Carbon Steel Plate`
- Form: `Plate` (rolled and welded into cylinder)
- Allowable Stress: `138 MPa` (20,000 psi) @ 100°F
  - De ASME Section II Part D, Table 1A
  - Decreases with temperature: @ 180°F ≈ 137 MPa
- Yield Strength: `260 MPa` (38,000 psi) minimum
- Tensile Strength: `485 MPa` (70,000 psi) minimum
- Impact Testing: Required @ -20°F (Charpy V-notch)

**Heads Material:**
- Same as Shell: `SA-516 Grade 70`
- Form: `Plate` (formed by hot or cold pressing)
- Impact Testing: Required (same as shell)

**Skirt Material:**
- Material: `SA-516 Grade 70`
- Rationale: mismo material que vessel para compatibilidad térmica
  - Previene esfuerzos térmicos diferenciales en shell-to-skirt weld
- Allowable Stress: mismo que shell

**Parte 5: Propiedades de Proceso (6 minutos)**

15. **Tab: Process Data**

**Fluid Service:**
- Fluid: `Natural Gas + Condensate (Hydrocarbon Liquid)`
- Phase: `Two-Phase (Gas-Liquid Separation)`
- Gas Composition (typical natural gas):
  - Methane (C1): 85%
  - Ethane (C2): 8%
  - Propane (C3): 4%
  - Heavier: 3%
- Liquid: Condensate (C5+ hydrocarbons)
- Gas Molecular Weight: `18.5` kg/kmol (lighter than pure methane due to composition)
- Liquid Specific Gravity: `0.75` (condensate, light oil)

**Operating Levels:**
- Normal Liquid Level (NLL): `30%` of T-T height
  - Elevation: +2000 + (0.30 × 3600) = +3080 mm from BTL
  - Proporciona residence time para separación
- High-High Level Alarm (HHLA): `70%` of T-T height
  - Elevation: +2000 + (0.70 × 3600) = +4520 mm
  - Provoca shutdown de inlet si se alcanza
- Low-Low Level Alarm (LLLA): `10%` of T-T height
  - Elevation: +2000 + (0.10 × 3600) = +2360 mm
  - Protege bomba de liquid outlet contra cavitación

**Flow Rates (Operating):**
- Gas Flow (Inlet): `5,000` kg/hr (11,000 lb/hr)
- Gas Flow (Outlet): `4,950` kg/hr (separated gas)
- Liquid Flow (Condensate): `50` kg/hr (100 lb/hr) - small amount

**Residence Time:**
- Liquid Residence Time: `5` minutes @ normal level
  - Permite settling de droplets
  - Calculado: Volume at NLL / Liquid flow rate

16. **Tab: Insulation**

**Insulation Specification:**
- Insulation Required: **Yes**
- Insulation Type: `Mineral Wool (Rock Wool)`
  - Material: Basalt fiber insulation
  - Density: 128 kg/m³ (8 lb/ft³)
  - Max Service Temperature: 650°C
- Insulation Thickness: `100` mm (4 inches)
  - Purpose: personnel protection (surface temp < 60°C)
  - Thermal conductivity: 0.04 W/m·K
- Cladding: `Aluminum Sheet`
  - Thickness: 0.8 mm (0.032")
  - Finish: Mill finish (natural aluminum)
- Weather Barrier: `Yes` (outdoor installation)
- Insulation Extension: To first flange face of nozzles
  - Nozzles must project beyond insulation

**Parte 6: Custom Properties y Metadatos (6 minutos)**

17. **Tab: Custom Properties** (o Properties palette → Custom Properties section)

Añadir custom properties (si no existen, crearlas primero en Project Setup):

**Project Data:**
- Project Number: `PRJ-2024-NG-300`
- Plant Area: `Unit 300 - Gas Compression`
- Client: `Natural Gas Processing Company`
- EPC Contractor: `[Your Company Name]`

**Procurement Data:**
- Requisition Number: `REQ-2024-V-301`
- Equipment Category: `Pressure Vessel - Vertical Separator`
- Criticality: `Critical` (compressor protection)
- Spare Available: `No`
- Lead Time: `28 weeks` (fabrication + delivery)
- Budget Code: `300-V-CAPEX-2024`

**Vendor Data:**
- Preferred Vendor: `[TBD - Pressure Vessel Fabricator]`
- Alternate Vendor 1: `[TBD]`
- Alternate Vendor 2: `[TBD]`
- Estimated Cost: `USD $85,000` (FOB fabricator's shop)

**Construction Data:**
- Fabrication Location: `[TBD]`
- Shipping Method: `Truck transport (within dimensional limits)`
- Installation Contractor: `[TBD - Field Construction]`
- Estimated Erection Time: `3 days` (offload, set, level, grout)

**Operations Data:**
- Start-Up Date: `Q4 2025`
- Design Life: `20 years`
- Inspection Interval: `5 years` (per API 510)
- Maintenance Responsibility: `Pressure Equipment Group`

**Parte 7: Cálculo de Volumen y Pesos (5 minutos)**

18. Verificar cálculos automáticos de Plant 3D:

**Volume Calculation:**

Plant 3D debe calcular volumen interno del vessel:
- Volumen de cilindro (shell): V_shell = π × r² × h = π × (0.6)² × 3.6 = 4.07 m³
- Volumen de heads (2 elípticos): V_head = (π/12) × D³ per head
  - V_head = (π/12) × (1.2)³ = 0.452 m³ per head
  - Total heads: 2 × 0.452 = 0.904 m³
- **Volumen total interno: 4.07 + 0.904 = 4.97 m³ ≈ 5.0 m³**

Verificar en Properties → Calculated Properties → Volume

**Weight Calculation:**

Si Plant 3D no calcula pesos automáticamente, introducir manualmente:

**Empty Weight (vessel sin líquido):**
- Shell weight: π × D_avg × h × thickness × density
  - D_avg = (1200 + 1232)/2 = 1216 mm (average of ID and OD)
  - h = 3600 mm
  - thickness = 32 mm
  - density of steel = 7850 kg/m³
  - Shell: π × 1.216 × 3.6 × 0.032 × 7850 ≈ 3,450 kg
- Heads: ~800 kg each (elliptical heads, 32mm thick, D=1200mm)
  - Total heads: 1,600 kg
- Skirt: ~950 kg (cylinder 1000mm dia, 1800mm height, 16mm thick)
- **Empty Weight: 3450 + 1600 + 950 = 6,000 kg ≈ 6,800 kg** (includes nozzles, pads, misc)

**Operating Weight:**
- Empty weight: 6,800 kg
- Liquid at normal level (30% of volume):
  - Liquid volume: 0.30 × 5.0 = 1.5 m³
  - Liquid density: 750 kg/m³ (condensate SG=0.75)
  - Liquid weight: 1.5 × 750 = 1,125 kg
- Gas weight (negligible): ~10 kg @ 1000 psig
- Insulation weight: ~1,000 kg (mineral wool + cladding)
- **Operating Weight: 6,800 + 1,125 + 10 + 1,000 = 8,935 kg ≈ 9,200 kg**

**Hydrostatic Test Weight:**
- Empty weight: 6,800 kg
- Water fill (100% of volume):
  - Water volume: 5.0 m³
  - Water density: 1000 kg/m³
  - Water weight: 5.0 × 1000 = 5,000 kg
- **Test Weight: 6,800 + 5,000 = 11,800 kg**
- Nota: dato de data sheet indica 18,500 kg (incluye nozzles con bridas, pads, y factor conservador)

Introducir estos pesos en Properties:
- Empty Weight: `6800` kg
- Operating Weight: `9200` kg
- Hydro Test Weight: `18500` kg (usar valor del data sheet)

**Parte 8: Visualización y Verificación (5 minutos)**

19. Generar vistas de documentación:

**Vista Isométrica (3D):**
- Comando: `3DORBIT`
- Orientación: SW Isometric
- Zoom: extents
- Verificar visualmente:
  - Shell cilíndrico vertical
  - Top y bottom heads elípticos (forma suave, no hemisféricos)
  - Skirt cilíndrico debajo de bottom head
  - Base ring en base de skirt
  - Anchor bolts distribuidos uniformemente
- Screenshot: "V-301_Isometric.png"

**Vista de Elevación (Front):**
- Comando: `VIEW` → `Front`
- Verificar dimensiones críticas (usar DIMALIGNED si necesario):
  - Altura desde base de skirt a apex de top head
  - BTL (Bottom Tangent Line) ubicado correctamente
  - Diámetros proporcionales (vessel mayor que skirt)
- Screenshot: "V-301_Elevation.png"

**Vista en Planta (Top):**
- Comando: `VIEW` → `Top`
- Verificar:
  - Diámetro exterior de shell: 1200 + 2×32 = 1264 mm
  - Diámetro de skirt: 1000 + 2×16 = 1032 mm (menor que shell, correcto)
  - Bolt circle: 1400 mm con 20 bolts uniformes
- Screenshot: "V-301_Plan.png"

**Sección Vertical:**
- Crear plano de sección cortando vessel por centerline
- Verificar:
  - Espesores de pared: shell 32mm, heads 32mm, skirt 16mm
  - Geometría interior de heads (forma elíptica 2:1)
  - Straight flanges de 50mm en heads
- Screenshot: "V-301_Section.png"

20. Verificar propiedades completas:

Usar Properties palette, verificar todas las secciones completadas:
- □ Identification: Tag, Service, Description ✓
- □ Geometry: ID, T-T height, thicknesses ✓
- □ Heads: Type, thicknesses, materials ✓
- □ Support: Skirt dimensions, base ring, anchor bolts ✓
- □ Design Conditions: Pressures, temperatures, CA, joint efficiency ✓
- □ Materials: Shell, heads, skirt materials ✓
- □ Process Data: Fluid, levels, flow rates ✓
- □ Insulation: Type, thickness, cladding ✓
- □ Custom Properties: Project, procurement, ops data ✓
- □ Weights: Empty, operating, test weights ✓

### Entregables

1. **Archivo DWG:** `Modulo4_Ejercicio19_V301_[SuNombre].dwg`
   - Vessel V-301 completamente modelado
   - Ubicado en coordenadas especificadas

2. **Equipment Data Sheet:** Generado desde Plant 3D
   - Plant 3D → Reports → Equipment Data Sheet
   - Seleccionar: V-301
   - Formato: Excel
   - Nombre: `V-301_DataSheet.xlsx`
   - Verificar: contiene todas las propiedades introducidas

3. **Screenshots (4 imágenes):**
   - `V-301_Isometric.png`: Vista 3D isométrica
   - `V-301_Elevation.png`: Elevación frontal con dimensiones anotadas
   - `V-301_Plan.png`: Vista en planta mostrando diámetros y bolt circle
   - `V-301_Section.png`: Sección vertical mostrando espesores y geometría interna

4. **Verification Document:** Checklist de propiedades completadas
   - Tabla con cada propiedad y checkmark de verificación
   - Firma: "Verificado por [Su Nombre], [Fecha]"

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Geometría del shell | 10 | ID 1200mm, T-T 3600mm, thickness 32mm |
| Top head configurado | 10 | Elliptical 2:1, 32mm thickness, 50mm flange |
| Bottom head configurado | 10 | Elliptical 2:1, 32mm thickness, 50mm flange |
| Skirt support | 15 | ID 1000mm, height 1800mm, thickness 16mm, base ring, 20 anchor bolts |
| Design conditions | 15 | Presión 1200 psig, temp 180°F, CA 3mm, E=0.85 |
| Materials | 10 | SA-516 Gr.70 shell/heads/skirt, correctamente especificado |
| Process data | 10 | Fluid, levels, flow rates completos |
| Custom properties | 10 | Project, procurement, ops data introducidos |
| Pesos calculados | 5 | Empty, operating, test weights documentados |
| Documentación (screenshots) | 5 | Vistas isométrica, elevación, planta, sección |
| **Total** | **100** | |

### Notas Importantes

**Este ejercicio es preparación para Ejercicio 20:**

El vessel V-301 creado aquí será la base para Ejercicio 20, donde se añadirán 10 boquillas (nozzles) con especificaciones completas. NO añadir nozzles en este ejercicio.

**Cálculos estructurales:**

Los espesores de shell y heads especificados (32 mm) son valores de ejemplo. En proyectos reales, estos espesores son calculados por ingeniero mecánico usando fórmulas ASME:

Shell thickness (longitudinal stress):
```
t = (P × R) / (S × E - 0.6 × P) + CA

Donde:
P = design pressure (psig)
R = inside radius (inches)
S = allowable stress (psi)
E = joint efficiency
CA = corrosion allowance (inches)
```

Head thickness (elliptical 2:1):
```
t = (P × D × K) / (2 × S × E - 0.2 × P) + CA

Donde:
K = factor for elliptical head (typically 1.0 for 2:1)
D = inside diameter (inches)
```

Plant 3D NO realiza estos cálculos. Use software especializado (PVElite, COMPRESS) o calcule manualmente.

---

## Ejercicio 20: Configurar Nozzles de Equipos

**Lección aplicada:** Lección 20 - Boquillas y Conexiones de Equipos

**Duración estimada:** 40 minutos

**Nivel de dificultad:** Avanzado

### Objetivo

Completar el recipiente V-301 del Ejercicio 19 añadiendo su programa completo de 10 nozzles (boquillas) con especificaciones precisas de tamaño, rating, orientación, elevación y proyección. Generar nozzle schedule completo, dibujos de orientación, y documentación lista para fabricación.

### Escenario

El recipiente V-301 (Natural Gas Separator) modelado en Ejercicio 19 requiere ahora la configuración completa de sus boquillas para permitir conexión con sistemas de tuberías, instrumentación y dispositivos de seguridad. Como ingeniero de equipos, usted debe añadir todas las boquillas según el nozzle schedule aprobado por ingeniería de proceso y mecánica.

### Nozzle Schedule - Vessel V-301

```
=============================================================================
NOZZLE SCHEDULE - VESSEL V-301
Natural Gas/Condensate Separator
=============================================================================
Nozzle | Size  | Rating | Type  | Service           | Orient  | Elevation | Proj
Mark   | (NPS) | (#)    |       |                   | (deg)   | (mm BTL)  | (mm)
-------|-------|--------|-------|-------------------|---------|-----------|------
N1     | 12"   | 600    | RFWN  | Gas Inlet         | 90° (E) | +2700     | 350
N2     | 10"   | 600    | RFWN  | Gas Outlet        | 0° (N)  | TOS       | 400
N3     | 4"    | 600    | RFWN  | Liquid Outlet     | 180°(S) | +400      | 300
N4     | 2"    | 600    | RFWN  | Drain             | 270°(W) | BOS       | 250
N5-T   | 2"    | 600    | RFWN  | Level Gauge Top   | 0° (N)  | +3200     | 300
N5-B   | 2"    | 600    | RFWN  | Level Gauge Bot   | 0° (N)  | +600      | 300
N6     | 6"    | 600    | RFWN  | PSV               | 180°(S) | TOS       | 400
N7     | 1"    | 600    | NPT   | Pressure Gauge    | 90° (E) | +3400     | 200
N8     | 1"    | 600    | NPT   | Temperature       | 270°(W) | +2700     | 200
M1     | 20"   | 150    | FF    | Manhole           | 0° (N)  | +1800     | 350
=============================================================================

NOTES:
1. All flanged nozzles are Class 600 Raised Face Weld Neck (RFWN) per ASME B16.5
2. Threaded nozzles (N7, N8) are NPT (National Pipe Thread) per ASME B1.20.1
3. Manhole M1 is Flat Face (FF) per ASME B16.5
4. TOS = Top of Shell (elevation +3600mm BTL)
5. BOS = Bottom of Shell (located in bottom head)
6. Orientation: 0° = North, 90° = East, 180° = South, 270° = West
7. Projection measured from outside surface of shell/head to face of flange
8. All nozzles project beyond 100mm insulation (minimum 200mm projection)
9. Level gauge nozzles N5-T and N5-B form a pair for displacer-type level transmitter
10. All nozzles in SA-105 carbon steel forging, Grade 70 minimum

CONNECTED LINES (P&ID Reference 3001-P-002):
- N1: From upstream pipeline via control valve
- N2: To compressor suction via 10"-G-301-A72
- N3: To condensate pump via 4"-L-301-401-C24
- N4: To drain header via 2"-D-301-DRAIN-C06
- N5-T/B: Level transmitter LT-301
- N6: To relief header via PSV-301
- N7: Pressure transmitter PT-301
- N8: Temperature transmitter TT-301
- M1: Inspection access (no line connection)
=============================================================================
```

### Instrucciones Paso a Paso

**Parte 1: Añadir Nozzle N1 (Gas Inlet, 12") - 5 minutos**

1. Abrir archivo de Ejercicio 19: `Modulo4_Ejercicio19_V301_[SuNombre].dwg`

2. Añadir Nozzle N1:
   - Seleccionar vessel V-301
   - Click derecho → **Add Nozzle**

3. Configurar Nozzle N1 en cuadro de diálogo:

**Identification:**
- Nozzle Mark: `N1`
- Service: `Gas Inlet`
- Description: `12-inch high-pressure gas inlet from upstream pipeline`
- Line Number: `12"-G-INLET-A72` (connected line tag)

**Size and Rating:**
- Nominal Size: `12 inches` (NPS 12)
- Pipe Schedule: `Schedule 80` (high pressure requires thicker wall)
- Pressure Rating: `600#` (Class 600)
- Connection Type: `Flanged`
- Flange Type: `Weld Neck (RFWN)`
- Flange Facing: `Raised Face (RF)`

**Location:**
- Location: `Shell` (en casco cilíndrico)
- Orientation Method: `By Angle`
- Angle: `90°` (East)
- Reference: `Project North`
- Elevation: `+2700 mm` from BTL
  - Numeric input: 2700 (medido desde Bottom Tangent Line)

**Projection:**
- Projection Length: `350 mm`
- Measured from: `Outside surface of shell`
- Measured to: `Face of flange`
- Insulation Clearance: 100mm insulation + 50mm clearance → 350mm OK

**Materials:**
- Nozzle Material: `SA-105` (carbon steel forging)
- Flange Material: `SA-105`
- Gasket Type: `Spiral Wound 304SS/Graphite + Inner Ring`
- Bolt Material: `SA-193 B7` (high-strength alloy bolt)

**Reinforcement (for information):**
- Reinforcement Required: `Yes` (large nozzle in pressure vessel)
- Reinforcement Method: `Pad`
- Pad OD: `650 mm` (estimated, to be calculated by fabricator)
- Pad Thickness: `32 mm` (same as shell)
- Calculations: Reference PVElite calc V-301-N1

4. Confirmar: Nozzle N1 se añade al modelo
5. Verificar visualmente: nozzle proyecta hacia Este (90°), elevación mid-height

**Parte 2: Añadir Nozzle N2 (Gas Outlet, 10") - 4 minutos**

6. Añadir Nozzle N2:
   - V-301 → **Add Nozzle**

**Configuration N2:**
- Mark: `N2`
- Service: `Gas Outlet`
- Description: `10-inch outlet to compressor suction`
- Line Number: `10"-G-301-A72`
- Size: `10 inches NPS`
- Schedule: `Schedule 80`
- Rating: `600#` Class
- Type: `Flanged RFWN`
- Location: `Shell`
- Orientation: `0°` (North)
- Elevation: `TOS` (Top of Shell)
  - Numeric: `+3600 mm` (shell T-T height)
  - Nota: boquilla en tope del casco, antes de top head
- Projection: `400 mm`
- Materials: Same as N1 (SA-105)

7. Confirmar y verificar ubicación

**Parte 3: Añadir Nozzles N3 y N4 (Liquid Outlet y Drain) - 6 minutos**

8. Añadir Nozzle N3 (Liquid Outlet):

**Configuration N3:**
- Mark: `N3`
- Service: `Liquid Outlet (Condensate)`
- Line: `4"-L-301-401-C24`
- Size: `4 inches`, Schedule: `Schedule 80`, Rating: `600#`
- Type: `Flanged RFWN`
- Orientation: `180°` (South)
- Elevation: `+400 mm` from BTL
  - Ubicación baja para drenar líquido, pero sobre NLL para prevenir gas carry-under
- Projection: `300 mm`

9. Añadir Nozzle N4 (Drain):

**Configuration N4:**
- Mark: `N4`
- Service: `Drain`
- Line: `2"-D-301-DRAIN-C06`
- Size: `2 inches`, Schedule: `Schedule 80`, Rating: `600#`
- Type: `Flanged RFWN`
- Orientation: `270°` (West)
- Elevation: `BOS` (Bottom of Shell)
  - Ubicación: en bottom head, punto más bajo
  - Para ubicar en head: Location → `Bottom Head`
  - Orientation: 270° (medido en plan view, proyecta hacia Oeste)
- Projection: `250 mm`
- **Consideración especial:**
  - Nozzle en bottom head (elíptico) tiene orientación más compleja
  - Plant 3D automáticamente orienta nozzle perpendicular a superficie curvada

**Parte 4: Añadir Level Gauge Nozzles N5-T y N5-B (Pair) - 6 minutos**

10. Añadir Nozzle N5-T (Level Gauge Top):

**Configuration N5-T:**
- Mark: `N5-T` (Top connection)
- Service: `Level Gauge Top Connection`
- Instrument: `LT-301 (Displacer Type Level Transmitter)`
- Size: `2 inches`, Schedule: `Schedule 80`, Rating: `600#`
- Type: `Flanged RFWN`
- Orientation: `0°` (North)
- Elevation: `+3200 mm` from BTL
  - Top of level measurement span
- Projection: `300 mm`

11. Añadir Nozzle N5-B (Level Gauge Bottom):

**Configuration N5-B:**
- Mark: `N5-B` (Bottom connection)
- Service: `Level Gauge Bottom Connection`
- Instrument: `LT-301 (paired with N5-T)`
- Size: `2 inches`, Schedule: `Schedule 80`, Rating: `600#`
- Type: `Flanged RFWN`
- Orientation: `0°` (North) - **Same as N5-T for alignment**
- Elevation: `+600 mm` from BTL
  - Bottom of level measurement span
- Projection: `300 mm`

**Verificación de level gauge pair:**
- Span: 3200 - 600 = 2600 mm
- Covers liquid range from LLLA (10% = +2360) to above NLL (30% = +3080)
- Adequate span for displacer-type transmitter (typical span 1-3 meters)

**Parte 5: Añadir Nozzles de Seguridad e Instrumentación N6-N8 - 7 minutos**

12. Añadir Nozzle N6 (PSV - Pressure Safety Valve):

**Configuration N6:**
- Mark: `N6`
- Service: `PSV Connection (Pressure Relief)`
- Instrument: `PSV-301`
- Size: `6 inches`, Schedule: `Schedule 80`, Rating: `600#`
- Type: `Flanged RFWN`
- Orientation: `180°` (South)
- Elevation: `TOS` (+3600 mm)
  - PSV must be at highest point of vessel for gas/vapor service
- Projection: `400 mm` (larger for PSV + tail pipe clearance)
- **Special Note:**
  - PSV connection typically requires larger projection for:
    - PSV body height
    - Tail pipe to relief header
    - Access for removal/installation

13. Añadir Nozzle N7 (Pressure Gauge):

**Configuration N7:**
- Mark: `N7`
- Service: `Pressure Gauge (Transmitter)`
- Instrument: `PT-301`
- Size: `1 inch`
- Type: **`NPT`** (Threaded - cambio de flanged)
  - National Pipe Thread (tapered thread)
- Rating: `600#` (rating of coupling, not flange)
- Orientation: `90°` (East)
- Elevation: `+3400 mm` from BTL
  - Upper region for gas pressure measurement (static, not in liquid)
- Projection: `200 mm`
  - Shorter projection OK for threaded (no flange)
- Materials:
  - Coupling: `SA-105`
  - Cap: `SA-105` (when transmitter removed)

14. Añadir Nozzle N8 (Temperature):

**Configuration N8:**
- Mark: `N8`
- Service: `Temperature Well (Thermowell)`
- Instrument: `TT-301`
- Size: `1 inch`
- Type: `NPT` (Threaded)
- Rating: `600#`
- Orientation: `270°` (West)
- Elevation: `+2700 mm` from BTL
  - Mid-height for representative gas temperature
- Projection: `200 mm`
- **Thermowell Consideration:**
  - Nozzle is coupling for thermowell insertion
  - Thermowell insertion length: typically 150-200mm into vessel
  - Thermowell tip location: center of vessel for good thermal response

**Parte 6: Añadir Manhole M1 - 6 minutos**

15. Añadir Manhole M1:

**Configuration M1:**
- Mark: `M1`
- Service: `Manhole (Personnel Access for Inspection)`
- Description: `20-inch manhole for internal inspection and maintenance`
- Size: `20 inches` (NPS 20)
  - ASME B16.5 Class 150 minimum for manholes
  - 20" = 508 mm diameter opening (adequate for personnel)
- Type: `Flanged`
- Flange Type: `Weld Neck`
- Flange Facing: **`Flat Face (FF)`** - diferente de otras boquillas
  - Manholes típicamente FF para full-face gasket
- Rating: `150#` Class (lower than process nozzles)
  - Manhole no está en operación continua, solo durante shutdowns
  - 150# adecuado para presión de test
- Orientation: `0°` (North)
  - Facing accessible side (hacia plataforma de acceso o área abierta)
- Elevation: `+1800 mm` from BTL
  - Mid-height for ergonomic access from platform
  - Platform at +1500mm provides good access
- Projection: `350 mm`
  - Includes cover thickness + clearance for davit

**Manhole Accessories:**
- Cover: 20" blind flange, 40mm thick with stiffening rib
  - Weight: ~120 kg (heavy, requires lifting device)
- Davit: Portable davit for cover lifting
  - Capacity: 250 kg
  - Mounting: Welded lug adjacent to manhole
- Gasket: Full-face gasket, compressed asbestos-free material
- Bolts: 20× M20 bolts, SA-193 B7

16. Verificar manhole M1 en modelo:
    - Tamaño notablemente más grande que otras boquillas
    - Ubicación a altura accesible desde plataforma

**Parte 7: Validación de Nozzles - 6 minutos**

17. Verificación de interferencias:

**Nozzle-to-Nozzle:**
- Comando: `PLANTINTERFERENCECHECK`
- Seleccionar: All nozzles (N1-N8, M1)
- Include: Vessel shell and heads
- Run analysis
- Verificar: no clashes between nozzles
- Si clash detectado: ajustar orientación o elevación de uno de los nozzles

**Nozzle-to-Skirt:**
- Verificar nozzles inferiores (N3, N4) tienen clearance con skirt
- N4 (drain) en bottom head debe estar suficientemente alto sobre skirt attachment

**Nozzle-to-Insulation:**
- Todas las proyecciones ≥ 200 mm (insulation 100mm + 50mm clearance mínimo)
- Verificado: proyecciones van de 200mm a 400mm ✓

18. Verificación de orientaciones:

**Accesibilidad:**
□ N1 (gas inlet) hacia Este - accesible desde pipe rack ✓
□ N2 (gas outlet) hacia Norte - dirección a compresor ✓
□ M1 (manhole) hacia Norte - accesible desde plataforma ✓

**Funcionalidad:**
□ N2 (gas outlet) en TOS (punto más alto) ✓
□ N4 (drain) en BOS (punto más bajo) ✓
□ N6 (PSV) en TOS (requisito de seguridad) ✓
□ N5-T y N5-B alineados verticalmente (0° ambos) ✓

19. Verificación de propiedades completas:

Para cada nozzle, usar Nozzle Manager (V-301 → Properties → Nozzles):
- Tabla muestra 10 filas (N1, N2, N3, N4, N5-T, N5-B, N6, N7, N8, M1)
- Verificar cada columna completa:
  - Mark, Size, Rating, Type, Service ✓
  - Orientation, Elevation, Projection ✓
  - Materials ✓

**Parte 8: Generar Documentación - 10 minutos (opcional pero recomendado)**

20. Generar Nozzle Schedule Report:

- Plant 3D → Reports → Equipment Nozzle Schedule
- Select Equipment: V-301
- Configure columns:
  - Mark, Size, Rating, Type, Service, Orientation, Elevation, Projection, Line Number
- Sorting: by Mark
- Format: Excel
- Generate

21. Abrir Excel generado: `V-301_Nozzle_Schedule.xlsx`

Personalizar:
- Header: Equipment Tag: V-301, Service: Natural Gas Separator
- Drawing: V-301-GA-001
- Date, Prepared by: [Su Nombre]
- Add Notes section (copiar notas del nozzle schedule proporcionado)
- Formatting: borders, bold headers, professional appearance

22. Crear Nozzle Orientation Drawing:

- New Layout: "V-301 Nozzle Orientation"
- Insert viewports:

**North Elevation:**
- View: Front (vessel facing North)
- Nozzles visible: N2 (TOS), N5-T (+3200), N5-B (+600), M1 (+1800)
- Dimension elevations from BTL

**East Elevation:**
- View: Right
- Nozzles visible: N1 (+2700), N7 (+3400)

**South Elevation:**
- View: Back
- Nozzles visible: N6 (TOS), N3 (+400)

**West Elevation:**
- View: Left
- Nozzles visible: N8 (+2700), N4 (BOS in bottom head)

**Plan View:**
- View: Top
- Show all nozzles with angular positions
- Draw North arrow (0°)
- Dimension angles: 0°, 90°, 180°, 270°

23. Add simplified nozzle table on drawing
24. Title block: "NOZZLE ORIENTATION - VESSEL V-301"
25. Plot to PDF: `V-301_Nozzle_Orientation.pdf`

### Entregables

1. **Archivo DWG:** `Modulo4_Ejercicio20_V301_Complete_[SuNombre].dwg`
   - Vessel V-301 con 10 nozzles completamente configurados

2. **Nozzle Schedule:** `V-301_Nozzle_Schedule.xlsx`
   - Excel report generado y personalizado

3. **Nozzle Orientation Drawing:** `V-301_Nozzle_Orientation.pdf`
   - 4 elevations + plan view mostrando ubicación de nozzles

4. **Screenshots (mínimo 4):**
   - Vista isométrica 3D mostrando todos los nozzles
   - Nozzle Manager table (Properties palette) con 10 nozzles listados
   - Plan view con orientación angular de nozzles
   - Detail de manhole M1

5. **Verification Checklist:** Documento con verificaciones:
   - Interferencias verificadas ✓
   - Orientaciones funcionales verificadas ✓
   - Propiedades completas verificadas ✓

### Criterios de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Nozzles N1-N2 (gas inlet/outlet) | 15 | Sizes, ratings, ubicaciones correctas |
| Nozzles N3-N4 (liquid/drain) | 10 | Ubicaciones bajas apropiadas |
| Nozzles N5-T/B (level gauge pair) | 15 | Alineados, span adecuado |
| Nozzle N6 (PSV) | 10 | En TOS, projection adecuada |
| Nozzles N7-N8 (instrumentos) | 10 | Threaded type, ubicaciones apropiadas |
| Manhole M1 | 15 | 20" FF, elevación accesible |
| Interferencias verificadas | 5 | No clashes entre nozzles |
| Nozzle schedule generado | 10 | Excel completo y profesional |
| Orientation drawing | 10 | Plano con elevations y plan view |
| **Total** | **100** | |

### Notas Finales

**Proyecto Completo Módulo 4:**

Con este ejercicio, ha completado un proyecto integral que cubre todo el Módulo 4:
- **Ejercicio 16:** Estructura de acero (columnas, vigas, bracing)
- **Ejercicio 17:** Plataformas y escaleras de acceso
- **Ejercicio 18:** Barandas de seguridad conformes OSHA
- **Ejercicio 19:** Recipiente a presión modelado paramétricamente
- **Ejercicio 20:** Nozzles completos del recipiente

**Integración:**

En proyecto real, todos estos componentes están integrados:
- Vessel V-301 ubicado en estructura de acero del Ejercicio 16
- Plataformas del Ejercicio 17 proporcionan acceso a manhole M1 y nozzles superiores
- Barandas del Ejercicio 18 protegen personal en plataformas alrededor de vessel
- Nozzles del Ejercicio 20 conectan con sistemas de tuberías (cubierto en Módulo 3)

**Próximos pasos:**

Módulo 5 cubrirá:
- Conexión de tuberías a nozzles
- Generación de isométricos de fabricación
- Documentación completa de proyecto
- Listas de materiales integradas
- Control de revisiones y entrega final

---

## Evaluación General del Módulo 4

**Calificación total del módulo:**

La calificación del Módulo 4 se compone de:
- 20%: Evaluaciones de cada lección (preguntas de conocimiento)
- 80%: Ejercicios prácticos (5 ejercicios × 16% cada uno)

**Distribución de puntos:**

| Componente | Peso | Puntos |
|-----------|------|--------|
| Evaluaciones Lecciones 16-20 (5 × 5 preguntas) | 20% | 20 |
| Ejercicio 16: Estructura de acero | 16% | 16 |
| Ejercicio 17: Plataformas y escaleras | 16% | 16 |
| Ejercicio 18: Barandas | 16% | 16 |
| Ejercicio 19: Recipiente a presión | 16% | 16 |
| Ejercicio 20: Nozzles | 16% | 16 |
| **Total Módulo 4** | **100%** | **100** |

**Calificación mínima aprobatoria:** 70/100 puntos

**Criterios de excelencia:**
- 90-100 puntos: Excelente - Dominio completo de diseño estructural y equipos
- 80-89 puntos: Muy Bueno - Competencia sólida con áreas menores de mejora
- 70-79 puntos: Satisfactorio - Cumple requisitos mínimos, requiere práctica adicional
- <70 puntos: No aprobado - Requiere revisión de lecciones y repetir ejercicios

---

## Recursos de Soporte

**Archivos base:**
Todos los archivos base para ejercicios están disponibles en:
`C:\PlantData\Modulo4\Ejercicios\ArchivosBase\`

**Soluciones completas:**
Soluciones de referencia (para verificación después de completar ejercicio):
`C:\PlantData\Modulo4\Ejercicios\Soluciones\`

**Videos tutoriales:**
Videos paso a paso de cada ejercicio:
- Portal del curso → Módulo 4 → Videos de Ejercicios

**Soporte técnico:**
- Foro del curso: https://universidad-autodesk.com/foro/modulo-4
- Email: soporte-plant3d@universidad-autodesk.com
- Horario de oficina virtual: Jueves 16:00-18:00 GMT-5

---

**Fecha de publicación:** Noviembre 2025
**Versión del documento:** 1.0
**Software:** AutoCAD Plant 3D 2026
**Idioma:** Español (México)
