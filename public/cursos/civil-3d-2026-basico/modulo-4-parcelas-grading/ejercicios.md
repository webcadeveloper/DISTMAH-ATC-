# Ejercicios Prácticos - Módulo 4: Parcelas y Grading

**Módulo:** 4 - Parcelas y Grading
**Curso:** Autodesk Civil 3D 2026 - Básico
**Duración total:** Aproximadamente 6-8 horas de práctica

---

## Instrucciones Generales

**Prerequisitos:**
- Civil 3D 2026 instalado y funcionando
- Módulos 1, 2, y 3 completados
- Conocimientos de superficies y alineamientos

**Entregables para cada ejercicio:**
- Archivo DWG con nombre específico
- Screenshots de elementos clave
- Reporte breve respondiendo preguntas específicas

**Evaluación:**
- Precisión técnica (40%)
- Nomenclatura y organización (20%)
- Documentación (etiquetas, tablas) (20%)
- Cumplimiento de requisitos (20%)

**Recursos necesarios:**
- Template: `_AutoCAD Civil 3D (Metric) NCS.dwt`
- Espacio en disco: ~500 MB para archivos de ejercicios
- Tiempo: 60-90 minutos por ejercicio

---

## Ejercicio 1: Subdivisión Residencial Básica

**Objetivo:** Crear una subdivisión residencial completa con parcelas dimensionadas automáticamente.

**Duración:** 90 minutos

### Escenario

Eres el proyectista civil de una subdivisión residencial llamada **"Valle Verde Residencial"**. El cliente compró un terreno rectangular de 120 m × 200 m (24,000 m²) y quiere maximizar el número de lotes residenciales cumpliendo con la zonificación local.

**Zonificación R2 (Residencial Media Densidad):**
- Lote mínimo: 250 m²
- Frontage mínimo: 10 metros
- Profundidad mínima: 20 metros
- Retiro frontal: 3 metros

**Infraestructura:**
- Calle principal: Eje longitudinal del terreno, ROW de 14 metros
- Calle transversal (opcional): Para subdividir bloques grandes

### Tareas

#### Parte 1: Preparación del Terreno (15 minutos)

1. **Crear nuevo drawing:**
   - Template: Metric NCS
   - Save as: `Ejercicio-1-Subdivision-Valle-Verde.dwg`

2. **Dibujar límite del terreno:**
   - Command: `RECTANGLE`
   - Punto inicial: (0, 0)
   - Esquina opuesta: @120,200 (120m × 200m)

3. **Crear Parcel Site para terreno bruto:**
   - Toolspace → Prospector → Sites → New
   - Name: `Terreno-Bruto-Valle-Verde`
   - Convert rectángulo a parcel (Create From Objects)
   - Verifica área total: 24,000 m²

#### Parte 2: Right-of-Way de Calle Principal (20 minutos)

4. **Dibujar eje de calle principal:**
   - Command: `LINE`
   - Desde: (60, 0) [mitad del ancho del terreno]
   - Hasta: (60, 200) [línea vertical de 200m]

5. **Crear Alignment:**
   - Home → Alignment → Create from Objects
   - Name: `Calle-Principal-CL`
   - Type: Centerline
   - Site: Create new → `Alignments-Valle-Verde`

6. **Crear ROW de 14 metros:**
   - Home → Parcel → Create ROW
   - Alignment: Calle-Principal-CL
   - Offset Left: 7 m
   - Offset Right: 7 m
   - Site: Create new → `ROW-Calles-Valle-Verde`
   - Fillet radius: 3 m
   - Parcel style: ROW

7. **Verificar área de ROW:**
   - Toolspace → ROW-Calles-Valle-Verde → Parcels
   - Área debería ser ~2,800 m² (14m × 200m)

#### Parte 3: Subdivisión de Lotes Residenciales (30 minutos)

8. **Crear áreas a subdividir:**
   - Ahora tienes dos franjas de terreno (izquierda y derecha del ROW)
   - Cada franja: ~53 m × 200 m (el ROW "divide" el terreno original)

9. **Subdivide lado IZQUIERDO:**
   - Dibuja rectángulo del área disponible izquierda (considerando que ROW ocupa 14m)
   - Convert a parcel (Site: `Lotes-Residenciales-Valle-Verde`)

10. **Aplicar Parcel Sizing:**
    - Home → Parcel → Parcel Creation Tools
    - Click en **Parcel Sizing** icon
    - Configure:
      - Minimum Frontage: 10 m
      - Minimum Depth: 20 m
      - Minimum Area: 250 m²
      - Frontage Offset: 3 m (retiro frontal)
    - OK

11. **Crear lotes automáticamente:**
    - En Parcel Creation Tools → **Slide Line - Create**
    - Select parcel: Area izquierda
    - Select frontage: Lado que da a la calle
    - Civil 3D crea lotes automáticamente
    - Cuenta cuántos lotes se generaron

12. **Repetir para lado DERECHO del ROW:**
    - Mismo proceso para área derecha
    - Frontage hacia la calle principal

#### Parte 4: Renombrar y Documentar (25 minutos)

13. **Renombrar lotes:**
    - Toolspace → Lotes-Residenciales-Valle-Verde → Parcels
    - Click derecho en cada parcel → Properties
    - Renombra:
      - Lado izquierdo: Lote A-1, A-2, A-3, ...
      - Lado derecho: Lote B-1, B-2, B-3, ...

14. **Añadir etiquetas de área:**
    - Annotate → Add Labels → Parcel → Add Parcel Labels
    - Label type: Area
    - Style: Name Area & Perimeter
    - Etiqueta todos los lotes

15. **Añadir segment labels (dimensiones):**
    - Annotate → Add Labels → Parcel → Single Segment
    - Style: Bearing over Distance
    - Etiqueta frontages de 3-5 lotes representativos

16. **Crear tabla de lotes:**
    - Annotate → Add Tables → Parcel → Add Area
    - Select by site: Lotes-Residenciales-Valle-Verde
    - Coloca tabla en esquina superior

17. **Crear tabla de ROW:**
    - Annotate → Add Tables → Parcel → Add Area
    - Select by site: ROW-Calles-Valle-Verde
    - Coloca tabla junto a la anterior

### Preguntas del Ejercicio 1

**Responde en un documento PDF:**

1. ¿Cuántos lotes residenciales se crearon en total?
2. ¿Cuál es el área del lote más pequeño y más grande?
3. ¿Cuál es el área promedio de los lotes?
4. ¿Cuál es la eficiencia de layout? (Área total lotes / Área bruta - ROW) × 100%
5. ¿Quedó algún remanente (remainder parcel)? Si sí, ¿de qué área?
6. ¿Cuál es la densidad residencial? (Número lotes / Área bruta en hectáreas)

### Entregables

- ✅ `Ejercicio-1-Subdivision-Valle-Verde.dwg`
- ✅ Screenshot mostrando vista general de subdivisión con etiquetas
- ✅ Screenshot de Toolspace mostrando organización en 3 sites
- ✅ Screenshot de tablas de parcels
- ✅ PDF con respuestas a las 6 preguntas

![Ejercicio 1 - Subdivisión](../imagenes/ejercicio-1-subdivision.png)

---

## Ejercicio 2: Optimización de Parcel Sizing

**Objetivo:** Experimentar con diferentes configuraciones de parcel sizing para optimizar aprovechamiento.

**Duración:** 75 minutos

### Escenario

Utilizando el **mismo terreno** del Ejercicio 1 (120m × 200m), el cliente ahora quiere explorar opciones alternativas de subdivisión para maximizar rentabilidad. Probarás 3 configuraciones diferentes y compararás resultados.

### Tareas

#### Configuración A: Lotes Estándar (300 m²)

1. **Nuevo drawing:**
   - Save as: `Ejercicio-2-Optimization-Config-A.dwg`

2. **Replica infraestructura del Ejercicio 1:**
   - Terreno, ROW, alignments

3. **Parcel Sizing Config A:**
   - Minimum Area: **300 m²** (lotes más grandes)
   - Minimum Frontage: 12 m
   - Minimum Depth: 22 m
   - Frontage Offset: 3 m

4. **Subdivide y documenta:**
   - Crea lotes con esta configuración
   - Renombra (Serie A: A-1, A-2, ...)
   - Etiquetas y tabla
   - Anota: **Número de lotes Config A = _____**

#### Configuración B: Lotes Compactos (240 m²)

5. **Save as:** `Ejercicio-2-Optimization-Config-B.dwg`

6. **Parcel Sizing Config B:**
   - Minimum Area: **240 m²** (lotes más pequeños - límite inferior)
   - Minimum Frontage: 9.5 m
   - Minimum Depth: 20 m
   - Frontage Offset: 3 m

7. **Subdivide y documenta:**
   - Crea lotes
   - Renombra (Serie B)
   - Anota: **Número de lotes Config B = _____**

#### Configuración C: Lotes Mixtos (con calle transversal)

8. **Save as:** `Ejercicio-2-Optimization-Config-C.dwg`

9. **Añade calle transversal:**
   - Dibuja eje perpendicular a calle principal en estación 0+100 (mitad)
   - Crea alignment: `Calle-Transversal-CL`
   - Crea ROW de 12 m (6m cada lado)
   - Ahora tienes 4 cuadrantes

10. **Parcel Sizing Config C:**
    - Minimum Area: 270 m² (intermedio)
    - Minimum Frontage: 10.5 m
    - Minimum Depth: 22 m

11. **Subdivide los 4 cuadrantes:**
    - Crea lotes en cada cuadrante
    - Renombra por cuadrante (A-1, A-2..., B-1, B-2..., C-1..., D-1...)
    - Anota: **Número de lotes Config C = _____**

### Análisis Comparativo

12. **Crea tabla comparativa en Excel o documento:**

| Configuración | Área Lote Min (m²) | Frontage Min (m) | Número de Lotes | Área Total Lotes (m²) | Eficiencia (%) | Lote Promedio (m²) |
|---------------|-------------------|------------------|-----------------|----------------------|----------------|--------------------|
| A (Estándar)  | 300 | 12 | ____ | ____ | ____ | ____ |
| B (Compacto)  | 240 | 9.5 | ____ | ____ | ____ | ____ |
| C (Mixto)     | 270 | 10.5 | ____ | ____ | ____ | ____ |

13. **Cálculos:**
    - Eficiencia = (Área total lotes / Área disponible neta) × 100%
    - Área disponible neta = Área bruta - ROW

### Preguntas del Ejercicio 2

1. ¿Qué configuración maximiza el número de lotes?
2. ¿Qué configuración tiene mejor eficiencia de layout?
3. ¿Cuál es el trade-off entre tamaño de lote y número de lotes?
4. ¿La configuración C (con calle transversal) mejora o empeora el aprovechamiento? ¿Por qué?
5. Si el precio de venta por lote es $25,000 USD (independiente del tamaño), ¿cuál configuración es más rentable?
6. Considerando calidad de vida (tamaño de lote), ¿cuál configuración recomendarías y por qué?

### Entregables

- ✅ 3 archivos DWG (Config A, B, C)
- ✅ Tabla comparativa completa (Excel o PDF)
- ✅ Documento PDF con respuestas a las 6 preguntas y recomendación final

---

## Ejercicio 3: Right-of-Way y Easements Complejos

**Objetivo:** Diseñar ROW con intersección y easements de utilidades.

**Duración:** 90 minutos

### Escenario

Diseñas la infraestructura vial y de utilidades para una subdivisión con **intersección en T** de dos calles, más easements para línea de agua y drenaje.

**Especificaciones:**
- Calle Principal (norte-sur): 300 m longitud, ROW 16 m
- Calle Secundaria (este-oeste): 150 m longitud, ROW 14 m, intersecta calle principal en estación 0+150
- Utility Easement (agua): 6 m ancho, paralelo a calle principal, 3 m fuera del ROW
- Drainage Easement: 10 m ancho, diagonal atravesando subdivisión

### Tareas

#### Parte 1: Calles e Intersección (35 minutos)

1. **Nuevo drawing:**
   - Save as: `Ejercicio-3-ROW-Easements.dwg`

2. **Dibujar ejes de calles:**
   - Calle Principal: Línea vertical de (100, 0) a (100, 300)
   - Calle Secundaria: Línea horizontal de (0, 150) a (200, 150)
   - Ejes se intersectan en (100, 150)

3. **Crear Alignments:**
   - `Calle-Principal-CL` (norte-sur)
   - `Calle-Secundaria-CL` (este-oeste)
   - Site: `Alignments-Network`

4. **Crear ROW de Calle Principal:**
   - Home → Parcel → Create ROW
   - Alignment: Calle-Principal-CL
   - Offset L/R: 8 m (total 16 m)
   - Fillet radius: 5 m (esquinas redondeadas en intersección)
   - Site: `ROW-Street-Network`

5. **Crear ROW de Calle Secundaria:**
   - Same process
   - Offset L/R: 7 m (total 14 m)
   - Fillet radius: 5 m
   - Site: `ROW-Street-Network` (mismo site para topología compartida)

6. **Verificar intersección:**
   - Vista en planta: Deberías ver esquinas redondeadas (fillets) en la intersección en T
   - Toolspace → ROW-Street-Network → Parcels
   - Deberías tener 2 parcels de ROW que se intersectan

#### Parte 2: Utility Easement (25 minutos)

7. **Easement para línea de agua:**
   - Ubicación: Paralelo a Calle Principal, en lado ESTE, 3 metros fuera del límite del ROW
   - Ancho: 6 metros (±3 m desde eje del easement)

8. **Calcular offset del eje del easement:**
   - Límite ROW Calle Principal (lado este) = 100 + 8 = 108 m (X-coordinate)
   - Separación = 3 m
   - Eje de tubería = 108 + 3 + 3 = 114 m
   - (Nota: 3m separación + 3m mitad del easement)

9. **Crear eje del easement:**
   - Command: `LINE`
   - Desde: (114, 0) hasta (114, 300)
   - Convert a alignment: `Water-Line-CL`

10. **Crear Utility Easement parcel:**
    - Home → Parcel → Create ROW (mismo comando, diferente uso)
    - Alignment: Water-Line-CL
    - Offset L/R: 3 m (total 6 m)
    - Site: Create new → `Easements-Utilities`
    - Parcel style: Easement (o crea estilo con hatch punteado)

11. **Renombrar y etiquetar:**
    - Toolspace → Easements-Utilities → Parcel → Properties
    - Name: `6m UTILITY EASEMENT - WATER LINE`
    - Annotate → Add Labels → Parcel Area
    - Customiza label para mostrar "6m UTILITY EASEMENT"

#### Parte 3: Drainage Easement Diagonal (20 minutos)

12. **Easement de drenaje diagonal:**
    - Dibuja polyline diagonal:
      - Desde: (50, 250) (noroeste)
      - Hasta: (175, 50) (sureste)
      - (~224 m longitud)

13. **Offset para crear easement de 10 m:**
    - Command: `OFFSET`
    - Distance: 5 m
    - Offset polyline a ambos lados (±5 m)
    - Conecta extremos para formar polyline cerrada (área de easement)

14. **Convert a parcel:**
    - Home → Parcel → Create From Objects
    - Site: `Easements-Utilities`
    - Parcel style: Drainage-Easement
    - Name: `10m DRAINAGE EASEMENT`

#### Parte 4: Lotes Residenciales (10 minutos)

15. **Crear 2-3 lotes de ejemplo:**
    - Dibuja rectángulos de ~300 m² en áreas entre ROW y easements
    - Convert a parcels
    - Site: `Residential-Lots`
    - Observa cómo los easements "cruzan" los lotes (servidumbre)

### Preguntas del Ejercicio 3

1. ¿Cuál es el área total de ROW (calles principal + secundaria)? (Hint: suma áreas de los 2 parcels de ROW)
2. ¿Cuál es el área del utility easement de agua?
3. ¿Cuál es el área del drainage easement?
4. Si un lote residencial tiene área de 320 m², pero 25 m² están ocupados por easement, ¿cuál es el área neta construible? (Nota: en easement no se puede construir)
5. ¿Los fillet radius de 5 m en la intersección son suficientes para radio de giro de un camión de basura (típicamente requiere 9-12 m)? ¿Deberían aumentarse?

### Entregables

- ✅ `Ejercicio-3-ROW-Easements.dwg`
- ✅ Screenshot mostrando intersección con fillets
- ✅ Screenshot mostrando easements cruzando lotes
- ✅ PDF con respuestas a las 5 preguntas

![Ejercicio 3 - ROW Easements](../imagenes/ejercicio-3-row-easements.png)

---

## Ejercicio 4: Feature Lines y Grading de Plataforma

**Objetivo:** Diseñar plataforma para edificio con feature lines y grading tools.

**Duración:** 90 minutos

### Escenario

Diseñas la plataforma de nivelación para un edificio comercial en terreno con pendiente. El edificio requiere plataforma horizontal de 60 m × 45 m a elevación específica, con taludes alrededor para transición al terreno natural.

**Datos del terreno:**
- Superficie existente (EG): Pendiente general de suroeste a noreste
- Elevación esquina SW: 98.00 m
- Elevación esquina SE: 100.50 m
- Elevación esquina NE: 105.00 m
- Elevación esquina NW: 102.50 m

**Requisitos de diseño:**
- Plataforma: 60 m (E-W) × 45 m (N-S)
- Elevación de plataforma: 102.00 m (horizontal, sin pendiente)
- Taludes: 2:1 (corte) y 2.5:1 (relleno)

### Tareas

#### Parte 1: Superficie de Terreno Natural (20 minutos)

1. **Nuevo drawing:**
   - Save as: `Ejercicio-4-Platform-Grading.dwg`

2. **Crear puntos COGO de terreno:**
   - Home → Points → Create Points - Manual
   - Crea 4 puntos en las esquinas de un área de 150m × 150m:
     - Punto 1: (0, 0, 98.00) - SW
     - Punto 2: (150, 0, 100.50) - SE
     - Punto 3: (150, 150, 105.00) - NE
     - Punto 4: (0, 150, 102.50) - NW

3. **Añadir puntos intermedios** (para superficie más realista):
   - Punto 5: (75, 75, 101.50) - Centro
   - Punto 6: (50, 50, 99.80)
   - Punto 7: (100, 100, 103.25)
   - Punto 8: (25, 125, 101.10)

4. **Crear superficie EG:**
   - Home → Surfaces → Create Surface
   - Name: `EG-Existing-Ground`
   - Style: Contours 1m and 5m
   - Toolspace → Surfaces → EG → Definition → Point Groups
   - Add point group: `_All Points`
   - Superficie se genera automáticamente

5. **Verificar superficie:**
   - View → Visual Styles → Realistic
   - Observa pendiente general SW a NE

#### Parte 2: Feature Line de Plataforma (15 minutos)

6. **Dibujar borde de plataforma:**
   - Command: `RECTANGLE`
   - Punto inicial: (45, 52.5) [centrado aproximadamente]
   - Esquina opuesta: @60,45 (60m × 45m)

7. **Convertir a Feature Line:**
   - Home → Feature Line → Create Feature Line from Objects
   - Name: `Building-Platform-Edge`
   - Site: `<None>` (sin site)
   - Style: Basic Feature Line
   - ☑ Assign elevations
   - ○ Elevation: **102.00** (toda la feature line horizontal a 102m)
   - ☑ Erase existing entities
   - Select: Rectángulo
   - Enter

8. **Verificar en Elevation Editor:**
   - Select feature line
   - Feature Line tab → **Elevation Editor**
   - Panorama muestra 4 PIs (esquinas) todos a elevación 102.00
   - Close Panorama

#### Parte 3: Aplicar Grading (30 minutos)

9. **Crear Grading Group:**
   - Home → Grading → Grading Creation Tools
   - Set Grading Group → **Create Grading Group**
   - Name: `Building-Platform-Grading-Group`
   - ☑ Automatic surface creation
   - Surface style: Contours 1m and 5m (Design)
   - ☑ Use group volume baseline
   - Volume base surface: `EG-Existing-Ground`
   - OK

10. **Set Target Surface:**
    - En toolbar Grading Creation Tools
    - Click **Set Target Surface** (segundo ícono)
    - Select: `EG-Existing-Ground`

11. **Grading Criteria - Cut (zonas donde plataforma está ABAJO del terreno):**
    - Click **Grading Criteria** (tercer ícono)
    - Selecciona o crea: `Slope to Surface: 2:1 Cut`
    - (Si no existe, créalo en Settings → Grading → Grading Criteria Sets)

12. **Aplicar grading:**
    - Click **Create Grading** (cuarto ícono)
    - Select feature: Click en `Building-Platform-Edge`
    - Select side: Presiona **B** (Both - taludes en todos lados)
    - Apply to entire length: **Y**
    - Enter

13. **Observar resultado:**
    - Civil 3D crea taludes automáticamente
    - En áreas donde terreno está arriba de 102m: talud de CORTE (sube)
    - En áreas donde terreno está abajo de 102m: talud de RELLENO (baja)

14. **Añadir infill a plataforma:**
    - Grading Creation Tools → **Create Infill**
    - Select grading: Click en borde
    - Point inside platform: Click dentro del rectángulo
    - Enter
    - Interior de plataforma se rellena

#### Parte 4: Análisis de Volúmenes (25 minutos)

15. **Calcular volúmenes:**
    - Toolspace → Prospector → Grading Groups → Building-Platform-Grading-Group
    - Click derecho → **Properties**
    - Information tab → **Volumes:**
      - Anota: Cut = _____ m³, Fill = _____ m³, Net = _____ m³

16. **¿Necesita optimización?**
    - Si Net > 500 m³ (desbalance significativo), optimiza:
      - Select feature line
      - Feature Line tab → **Raise/Lower**
      - Si exceso de Cut: +0.5 m (sube plataforma)
      - Si exceso de Fill: -0.5 m (baja plataforma)
    - Grading se actualiza automáticamente
    - Re-calcula volúmenes
    - Repite hasta balance aceptable (|Net| < 200 m³)

17. **Crear Volume Surface:**
    - Analyze → Volumes Dashboard
    - Base Surface: EG-Existing-Ground
    - Comparison Surface: Building-Platform-Grading-Group
    - **Create Volume Surface**
    - Name: `Volume-Cut-Fill-Platform`
    - Style: Cut and Fill
    - OK

18. **Observar volume surface:**
    - Áreas rojas = Corte (remueves tierra)
    - Áreas azules = Relleno (añades tierra)

19. **Añadir tabla de volúmenes:**
    - Annotate → Add Tables → Total Volume Table
    - Select volume surface: Volume-Cut-Fill-Platform
    - Coloca tabla en esquina

### Preguntas del Ejercicio 4

1. ¿Cuál es la elevación final de la plataforma (después de optimización)?
2. ¿Cuál es el volumen de corte (Cut) final?
3. ¿Cuál es el volumen de relleno (Fill) final?
4. ¿Cuál es el volumen neto (Net)?
5. ¿El proyecto está balanceado (Cut ≈ Fill)? Calcula balance ratio: |Cut-Fill|/(Cut+Fill) × 100%
6. Si el costo de movimiento de tierra es $8 USD/m³, ¿cuál es el costo estimado de grading?

### Entregables

- ✅ `Ejercicio-4-Platform-Grading.dwg`
- ✅ Screenshot en vista 3D mostrando plataforma + taludes
- ✅ Screenshot de volume surface (cut & fill colors)
- ✅ Screenshot de tabla de volúmenes
- ✅ PDF con respuestas a las 6 preguntas

![Ejercicio 4 - Platform Grading](../imagenes/ejercicio-4-platform-grading.png)

---

## Ejercicio 5: Proyecto Integrado - Subdivisión Completa con Grading

**Objetivo:** Integrar todos los conocimientos del módulo en un proyecto completo de subdivisión con parcelas, ROW, easements, y grading de plataformas.

**Duración:** 120-150 minutos

### Escenario

Diseñas el proyecto completo **"Residencial Montaña Vista"**, una subdivisión residencial en terreno con topografía irregular. El proyecto incluye:

- Terreno: 180 m × 250 m con pendiente
- Calle principal con ROW
- 20-25 lotes residenciales dimensionados automáticamente
- Área común: Parque con plataforma nivelada para juegos infantiles
- Utility easement para línea de agua
- Grading de la plataforma del parque

**Especificaciones técnicas:**
- Lotes: Mínimo 280 m², frontage mínimo 10.5 m
- Calle: ROW de 15 m
- Parque: Plataforma de 30m × 25m a elevación óptima
- Utility easement: 6 m ancho

### Tareas

#### Fase 1: Topografía Base (20 minutos)

1. **Crear terreno con pendiente:**
   - Nuevo drawing: `Ejercicio-5-Proyecto-Integrado-Montana-Vista.dwg`
   - Crea superficie EG con 8-10 puntos COGO
   - Rango de elevaciones: 112 m (SW) a 122 m (NE)
   - Superficie con pendiente moderada (~4-5%)

#### Fase 2: Infraestructura Vial (25 minutos)

2. **Diseñar calle principal:**
   - Alignment longitudinal atravesando terreno
   - ROW de 15 m
   - Site: `ROW-Montana-Vista`

#### Fase 3: Subdivisión de Lotes (35 minutos)

3. **Crear lotes residenciales:**
   - Parcel sizing: 280 m² mínimo
   - Frontage mínimo: 10.5 m
   - Frontage offset: 3 m
   - Site: `Lotes-Residenciales-Montana-Vista`
   - Meta: 20-25 lotes

4. **Documentar lotes:**
   - Renombrar: Lote 1, Lote 2, ..., Lote N
   - Etiquetas de área
   - Tabla de lotes

#### Fase 4: Easement de Utilidades (15 minutos)

5. **Crear utility easement:**
   - 6 m ancho paralelo a calle principal
   - Site: `Easements-Montana-Vista`
   - Etiquetar apropiadamente

#### Fase 5: Área Común - Parque (45 minutos)

6. **Reservar área para parque:**
   - Identifica zona apropiada (~750-1000 m²)
   - Crea parcel para área común
   - Site: `Areas-Comunes-Montana-Vista`
   - Name: `Parque Recreativo`

7. **Diseñar plataforma de juegos infantiles:**
   - Feature line rectangular: 30m × 25m
   - Elevación: Calcula elevación promedio del terreno en esa zona
   - Aplicar grading con taludes 3:1 (más suaves para parque)
   - Grading Group: `Parque-Grading-Group`
   - Añadir infill

8. **Optimizar grading del parque:**
   - Ajusta elevación para balance de tierras
   - Calcula volúmenes

#### Fase 6: Documentación Final (10 minutos)

9. **Generar documentación completa:**
   - Tabla de lotes residenciales
   - Tabla de ROW
   - Tabla de áreas comunes
   - Tabla de volúmenes (grading del parque)
   - Leyenda indicando sites

10. **Layout de presentación:**
    - Crea layout
    - Viewports mostrando:
      - Vista general de subdivisión
      - Detalle de intersección/ROW
      - Vista 3D del parque con grading
      - Tablas

### Análisis Integrado

Completa el siguiente reporte:

**PROYECTO: Residencial Montaña Vista**

**Resumen Ejecutivo:**
- Terreno bruto: _____ m²
- ROW (calles): _____ m² (____ %)
- Easements: _____ m² (____ %)
- Lotes residenciales: _____ lotes, _____ m² total (____ %)
- Áreas comunes: _____ m² (____ %)
- Eficiencia de layout: _____ %

**Lotes Residenciales:**
- Número de lotes: _____
- Lote mínimo: _____ m²
- Lote máximo: _____ m²
- Lote promedio: _____ m²
- Densidad: _____ viviendas/hectárea

**Movimiento de Tierras (Parque):**
- Plataforma elevación: _____ m
- Corte: _____ m³
- Relleno: _____ m³
- Neto: _____ m³
- Balance ratio: _____ %
- Costo estimado (@$8/m³): $_____ USD

**Análisis Financiero:**
- Precio de venta por lote: $30,000 USD (estimado)
- Ingreso total lotes: $_____ USD
- Costo de grading: $_____ USD
- Costo de infraestructura vial (estimado @$150/m²): $_____ USD
- Margen bruto estimado: $_____ USD

### Preguntas del Ejercicio 5

1. ¿El proyecto cumple con la eficiencia de layout objetivo (>70%)?
2. ¿La densidad residencial es apropiada para zona R2 (20-40 viv/ha)?
3. ¿El grading del parque está balanceado? ¿Requiere importar/exportar material significativo?
4. ¿Qué porcentaje del terreno bruto se dedica a áreas comunes? ¿Es suficiente?
5. ¿El proyecto es financieramente viable según el análisis simplificado?
6. ¿Qué mejoras propondrías al diseño?

### Entregables

- ✅ `Ejercicio-5-Proyecto-Integrado-Montana-Vista.dwg`
- ✅ Layout PDF con vistas principales y tablas
- ✅ Reporte completo (plantilla proporcionada arriba)
- ✅ Documento PDF con respuestas a las 6 preguntas finales
- ✅ Video de 2-3 minutos (opcional) presentando el proyecto en vista 3D

![Ejercicio 5 - Proyecto Integrado](../imagenes/ejercicio-5-proyecto-integrado.png)

---

## Criterios de Evaluación General

**Excelente (90-100%):**
- Cumplimiento completo de requisitos técnicos
- Nomenclatura consistente y profesional
- Documentación completa y precisa
- Optimización evidente (balance de tierras, eficiencia de layout)
- Presentación profesional

**Bueno (80-89%):**
- Cumplimiento de requisitos principales
- Nomenclatura mayormente correcta
- Documentación completa con errores menores
- Optimización básica aplicada

**Aceptable (70-79%):**
- Cumplimiento parcial de requisitos
- Nomenclatura inconsistente
- Documentación incompleta
- Sin optimización evidente

**Insuficiente (<70%):**
- No cumple requisitos mínimos
- Documentación ausente o incorrecta
- Errores técnicos significativos

---

## Recursos de Soporte

**Archivos de referencia:**
- Templates de styles (parcel, grading, labels)
- Ejemplos completos de cada ejercicio (solo para verificación)

**Ayuda durante ejercicios:**
- Autodesk Civil 3D Help: F1
- Foros del curso
- Sesiones de Q&A con instructor

**Tiempo recomendado:**
- Ejercicio 1: 90 minutos
- Ejercicio 2: 75 minutos
- Ejercicio 3: 90 minutos
- Ejercicio 4: 90 minutos
- Ejercicio 5: 120-150 minutos
- **Total: ~7-8 horas**

**¡Éxito en tus ejercicios! Estos proyectos prácticos te preparan para proyectos profesionales reales de subdivisión y grading.**
