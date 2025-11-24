# Ejercicios Prácticos - Módulo 5: Redes de Tuberías y Utilities

**Curso:** Autodesk Civil 3D 2026 - Básico
**Módulo:** 5 - Redes de Tuberías y Utilities
**Tiempo estimado:** 4-6 horas (todos los ejercicios)

---

## Instrucciones Generales

Estos ejercicios consolidan todo lo aprendido en el Módulo 5. Cada ejercicio aumenta en complejidad, desde redes básicas hasta proyectos integrados completos con análisis hidráulico.

**Requisitos:**
- Civil 3D 2026 instalado
- Archivos base descargables de la plataforma LMS
- Conocimientos de Módulos 1-4 (superficies, alineamientos, perfiles)

**Formato de entrega:**
- Archivo DWG de cada ejercicio
- Screenshots según lo solicitado
- Documento PDF con respuestas a preguntas y tablas de resultados

---

## Ejercicio 1: Red de Alcantarillado Sanitario Residencial

**Duración estimada:** 60-90 minutos
**Nivel:** Básico
**Archivo base:** `Ejercicio_1_Urbanizacion.dwg`

### Objetivo

Diseñar una red de alcantarillado sanitario completa para una urbanización residencial de 50 lotes, aplicando criterios de diseño estándar y verificando pendientes mínimas.

### Datos del Proyecto

**Urbanización "Los Pinos":**
- 50 lotes residenciales (300-500 m² cada uno)
- 4 calles con alineamientos ya creados en el archivo base
- Superficie topográfica existente (`EG-Terreno`)
- Conexión a colector municipal existente en el punto (1000.00, 1000.00, Elev 95.00 m)

**Criterios de diseño:**
- Diámetro mínimo: 200 mm (8 in)
- Pendiente mínima: 0.40%
- Cobertura mínima: 1.20 m
- Material: PVC SDR 35
- Pozos de visita cada 100 m máximo

### Tareas

**1. Preparación (15 min)**

a) Abrir `Ejercicio_1_Urbanizacion.dwg`
b) Verificar que superficie `EG-Terreno` existe
c) Verificar que alineamientos de calles existen:
   - `Calle_Norte`
   - `Calle_Sur`
   - `Calle_Este`
   - `Calle_Oeste`

**2. Crear Parts List (10 min)**

a) Settings Tab → Pipe Network → Parts Lists → New
b) Nombre: `Sanitario_Residencial_LosPinos`
c) Añadir Pipes:
   - PVC Sewer Pipe SDR 35: 8", 10", 12", 15"
d) Añadir Structures:
   - Concentric Cylindrical Manhole: 48", 60"
   - Junction Box (para ramales domiciliarios)
e) Guardar Parts List

**3. Configurar Pipe Rules (10 min)**

a) Settings → Pipe → PVC Sewer Pipe SDR 35 → Rules
b) Configurar:
   - Minimum Cover: `1.20 m` (4.0 ft)
   - Maximum Cover: `4.00 m` (13.0 ft)
   - Minimum Slope: `0.40%`
   - Maximum Slope: `10.00%`
c) Pipe to Pipe Match: `Match Invert`
d) Apply

**4. Crear Pipe Network (5 min)**

a) Home → Create Design → Pipe Network
b) Nombre: `Red_Sanitaria_LosPinos`
c) Parts List: `Sanitario_Residencial_LosPinos`
d) Surface: `EG-Terreno`
e) OK

**5. Layout de Colector Principal (20 min)**

a) Abrir Pipe Network Layout Tools
b) Network: `Red_Sanitaria_LosPinos`
c) Surface: `EG-Terreno`
d) Alignment: `Calle_Norte` (colector principal)
e) Cover: `1.50 m`
f) Structure: `Concentric Manhole 48 in`
g) Pipe: `PVC 8 in`
h) Tool: "Pipe and Structure"
i) Layout from alignment:
   - Start station: 0+00
   - Interval: 100 m
   - End station: final de alignment
j) Añadir manhole final conectando a punto de descarga municipal

**6. Layout de Ramales (20 min)**

a) Para cada calle secundaria (Sur, Este, Oeste):
   - Usar "Pipe Run"
   - Colocar manholes cada 100 m siguiendo alineamiento
   - Conectar al colector principal
b) Total esperado: 12-15 manholes

**7. Crear Profile View (10 min)**

a) Seleccionar colector principal (pipes en `Calle_Norte`)
b) Create Profile View
c) Nombre: `Perfil_Colector_Principal`
d) Station range: Automatic
e) Create

**8. Verificar Pendientes en Profile (15 min)**

a) En profile view, revisar cada pipe
b) Properties de cada pipe → Slope
c) **Verificar que TODOS los pipes tengan Slope ≥ 0.40%**
d) Si alguno < 0.40%:
   - Editar invert elevations en profile view
   - Bajar extremo downstream para aumentar slope
e) Re-verificar

**9. Renombrar Structures (10 min)**

a) Prospector → Pipe Networks → Red_Sanitaria_LosPinos → Structures
b) Renombrar de manera lógica:
   - `PV-01` a `PV-15` (pozos de visita en orden de flujo)
   - `PV-DESCARGA` (manhole final que conecta a red municipal)

### Entregables

**Archivo DWG:**
- `Ejercicio_1_[TuApellido].dwg`

**Screenshots (incluir en PDF):**
1. Plan view mostrando red completa con manholes etiquetados
2. Profile view del colector principal
3. Properties de 3 pipes mostrando slopes

**Tabla de Verificación (completar en PDF):**

```
Total de Manholes: ___
Total de Pipes: ___
Diámetro más usado: ___
Pendiente mínima encontrada: ___%
Pendiente máxima encontrada: ___%
Longitud total de red: ___ m
Profundidad promedio de manholes: ___ m
```

**Preguntas:**
1. ¿Por qué la pendiente mínima de 0.40% es importante en alcantarillado sanitario?
2. Si un pipe tiene slope de 0.25%, ¿qué problemas operacionales causaría?
3. ¿Cuál es la ventaja de usar "Layout from Alignment" vs colocar manholes manualmente?

---

## Ejercicio 2: Red de Alcantarillado Pluvial con Catch Basins

**Duración estimada:** 90-120 minutos
**Nivel:** Intermedio
**Archivo base:** `Ejercicio_2_Zona_Comercial.dwg`

### Objetivo

Diseñar una red de drenaje pluvial para una zona comercial, incluyendo catch basins, sizing hidráulico con Hydraflow Storm Sewers, y verificación de capacidad.

### Datos del Proyecto

**Centro Comercial "Plaza Central":**
- Área total: 5 hectáreas (12 acres)
- 3 avenidas principales con alineamientos creados
- Superficie existente: `EG-Comercial`
- Estacionamientos pavimentados: 60% del área
- Zonas verdes: 40% del área
- Tormenta de diseño: 10 años retorno, intensidad 100 mm/hr (4 in/hr)

**Criterios de diseño:**
- Diámetro mínimo: 450 mm (18 in)
- Pendiente mínima: 0.50%
- Velocidad mínima: 0.90 m/s (3.0 ft/s)
- Velocidad máxima: 4.50 m/s (15 ft/s)
- Catch basins cada 60-90 m
- Cobertura mínima: 1.00 m (3.3 ft)

### Tareas

**1. Crear Parts List Pluvial (15 min)**

a) Nueva Parts List: `Pluvial_Comercial_PlazaCentral`
b) Pipes:
   - Concrete Pipe (ASTM C76): 18", 24", 30", 36", 42"
c) Structures:
   - Catch Basin Type 1
   - Catch Basin Type 2 (con reja superior)
   - Manhole Concentric: 48", 60", 72"
d) Guardar

**2. Crear Network y Layout Inicial (30 min)**

a) Crear Pipe Network: `Red_Pluvial_PlazaCentral`
b) **Avenida Principal (Av. Central):**
   - Layout from Alignment
   - Structure: Catch Basin Type 2
   - Spacing: 75 m
   - Cover: 1.00 m
   - Pipe: Concrete 18 in (preliminar, se redimensionará después)
c) **Avenidas secundarias:**
   - Layout con catch basins cada 60-90 m
   - Conectar a Avenida Principal
d) **Manhole de descarga:**
   - Colocar en punto de descarga a río/canal (coordenadas en archivo base)
   - Conectar última catch basin al manhole

**3. Create Profile Views (15 min)**

a) Crear profile view de Av. Central (colector principal)
b) Nombre: `Perfil_Pluvial_Av_Central`
c) Verificar visualmente pendientes

**4. Dimensionamiento con Hydraflow (45 min)**

a) **Abrir Hydraflow Storm Sewers:**
   - Analyze Tab → Hydraflow Storm Sewers
   - New Project: `Plaza_Central_Pluvial`
   - Units: (tu preferencia)

b) **Importar de Civil 3D:**
   - File → Import → Civil 3D Drawing
   - Selecciona `Red_Pluvial_PlazaCentral`
   - Import

c) **Configurar Rainfall:**
   - Project → Project Settings → Rainfall Tab
   - Method: Custom IDF (si no en USA) o Built-in
   - Intensidad: 100 mm/hr para 10 min duration
   - Apply

d) **Asignar Áreas de Drenaje:**
   - Para cada catch basin, doble-click en fila
   - Structure Dialog:
     - **Catch basins en estacionamiento:**
       - Area: 0.15 ha (0.37 ac)
       - C: 0.85 (pavimento)
       - Tc: 8 min
     - **Catch basins en zona verde:**
       - Area: 0.20 ha (0.50 ac)
       - C: 0.30 (pasto + algo de pavimento)
       - Tc: 10 min
   - Click OK para cada uno

e) **Configurar Design Constraints:**
   - Project → Project Settings → Design Tab
   - Minimum Pipe Size: 18 in (450 mm)
   - Minimum Velocity: 3.0 ft/s (0.9 m/s)
   - Maximum Velocity: 15 ft/s (4.5 m/s)
   - Minimum Slope: 0.50%
   - OK

f) **Size Pipes:**
   - Design → Size Pipes
   - Method: HGL Below Rim
   - Apply Constraints: ✅
   - OK
   - Revisar resultados en spreadsheet

g) **Verificar:**
   - Columna "Size": Diámetros calculados
   - Columna "Velocity": Todas entre 3-15 ft/s?
   - Profile View: HGL bajo Ground?
   - Si hay warnings, ajustar (aumentar diámetro o slope)

h) **Exportar a Civil 3D:**
   - File → Export → Update Civil 3D Drawing
   - ✅ Update Pipe Sizes
   - ✅ Update Flow Data
   - OK

**5. Verificación en Civil 3D (20 min)**

a) Regresar a Civil 3D
b) Verificar que pipes cambiaron de diámetro
c) Seleccionar cada pipe → Properties → Part Data:
   - Anotar diámetro final
   - Anotar flow (caudal)
d) En profile view, verificar que slopes sean razonables

**6. Generar Reporte de Hydraflow (15 min)**

a) En Hydraflow: File → Print → Report
b) Seleccionar:
   - ✅ Summary
   - ✅ Pipe Table
   - ✅ Structure Table
   - ✅ HGL Table
c) Output: PDF
d) Filename: `Hydraflow_Report_PlazaCentral.pdf`
e) Save

### Entregables

**Archivos:**
- `Ejercicio_2_[TuApellido].dwg`
- `Hydraflow_Report_PlazaCentral.pdf`

**Screenshots (incluir en PDF):**
1. Plan view de red completa mostrando catch basins y diámetros finales
2. Profile view del colector principal
3. Hydraflow spreadsheet mostrando columnas: Structure, Area, C, Flow, Size, Velocity

**Tabla de Resultados (completar en PDF):**

```
Total Catch Basins: ___
Total Manholes: ___
Total Pipes: ___

Diámetros usados:
  18": ___ pipes
  24": ___ pipes
  30": ___ pipes
  36": ___ pipes
  42": ___ pipes

Caudales:
  Caudal máximo (en pipe más cargado): ___ cfs (m³/s)
  Caudal total en descarga: ___ cfs (m³/s)

Velocidades:
  Mínima: ___ ft/s (m/s)
  Máxima: ___ ft/s (m/s)

HGL vs Ground:
  ¿HGL siempre bajo Ground? (Sí/No)
  Si no, ¿en qué pipes hay problema?
```

**Preguntas:**
1. ¿Por qué los catch basins en estacionamiento tienen C=0.85 mientras los de zona verde tienen C=0.30?
2. Si el pipe más grande resultó ser 36", ¿por qué no usar 36" en todos los pipes?
3. ¿Qué pasaría si la intensidad de lluvia aumentara a 150 mm/hr?

---

## Ejercicio 3: Sizing Avanzado y Optimización

**Duración estimada:** 60 minutos
**Nivel:** Avanzado
**Archivo base:** `Ejercicio_3_Red_Existente.dwg`

### Objetivo

Analizar una red existente que presenta problemas de capacidad, identificar pipes sobrecargados, y optimizar el diseño aumentando diámetros o ajustando pendientes.

### Escenario

Te contratan para revisar una red de alcantarillado pluvial existente que ha presentado inundaciones en tormentas recientes. La red fue diseñada hace 20 años para tormenta de 5 años, pero la normativa actual requiere 10 años.

**Datos:**
- Red existente: `Red_Pluvial_Existente` (ya creada en archivo)
- Tormenta original (5 años): 80 mm/hr
- Tormenta nueva requerida (10 años): 120 mm/hr
- Diámetros actuales: Mayormente 300-450 mm (12"-18")

### Tareas

**1. Análisis Inicial con Hydraflow (20 min)**

a) Abrir Hydraflow y crear proyecto: `Ejercicio_3_Analisis`
b) Importar `Red_Pluvial_Existente`
c) Asignar caudales basados en tormenta de **10 años (120 mm/hr)**:
   - Áreas de drenaje ya están en el archivo (leer de Properties)
   - C coefficients ya están asignados
   - Solo actualizar intensidad de lluvia en settings
d) **NO ejecutar Size Pipes aún** - primero analizar con diámetros existentes
e) Design → Analyze Network (analiza sin cambiar diámetros)
f) Revisar resultados:
   - Anotar pipes con d/D > 1.0 (sobrecargados)
   - Anotar pipes con Velocity > 15 ft/s

**2. Identificar Problemáticos (15 min)**

a) En spreadsheet de Hydraflow, ordenar por columna "d/D" (descendente)
b) Crear lista de top 5 pipes más sobrecargados
c) Para cada uno, anotar:
   - Pipe Name
   - Current Diameter
   - d/D Ratio
   - Required Capacity (flow)

**3. Estrategia de Optimización (10 min)**

Para cada pipe problemático, determinar solución:
- **Opción A:** Aumentar diámetro al siguiente disponible
- **Opción B:** Aumentar slope (si terreno lo permite)
- **Opción C:** Dividir flujo (añadir pipe paralelo)

Anotar en tabla cuál opción usarás para cada pipe.

**4. Implementar Soluciones (20 min)**

a) **En Civil 3D:**
   - Para pipes que decidiste aumentar diámetro:
     - Swap Part al nuevo diámetro
   - Para pipes que ajustarás slope:
     - Editar invert elevations en profile view

b) **Re-analizar en Hydraflow:**
   - File → Import → Civil 3D Drawing (re-importar con cambios)
   - Design → Analyze Network
   - Verificar que d/D < 1.0 en todos los pipes

c) **Iterar si es necesario:**
   - Si aún hay pipes sobrecargados, aplicar soluciones adicionales
   - Objetivo: Todos d/D < 0.95

**5. Comparación Antes/Después (10 min)**

a) Generar 2 reportes de Hydraflow:
   - `Reporte_Antes_Optimizacion.pdf` (con diámetros originales)
   - `Reporte_Despues_Optimizacion.pdf` (con diámetros finales)
b) Comparar estadísticas

### Entregables

**Archivos:**
- `Ejercicio_3_[TuApellido].dwg` (red optimizada)
- `Reporte_Antes_Optimizacion.pdf`
- `Reporte_Despues_Optimizacion.pdf`

**Tabla Comparativa (en PDF):**

```
ANTES DE OPTIMIZACIÓN (Tormenta 10 años, diámetros originales):
  Pipes sobrecargados (d/D > 1.0): ___
  d/D máximo: ___
  Velocidad máxima: ___ ft/s

DESPUÉS DE OPTIMIZACIÓN:
  Pipes sobrecargados (d/D > 1.0): ___
  d/D máximo: ___
  Velocidad máxima: ___ ft/s

SOLUCIONES APLICADAS:
  Pipes con aumento de diámetro: ___
  Pipes con ajuste de slope: ___
  Pipes paralelos añadidos: ___

COSTO ESTIMADO (simplificado):
  Metros de tubería reemplazada: ___
  Incremento de diámetro promedio: ___ mm
  Estimado: $[metros × $50/m] = $ ___
```

**Preguntas:**
1. ¿Por qué una red diseñada para 5 años no puede manejar tormenta de 10 años?
2. ¿Cuál es más económico: aumentar diámetro o aumentar slope? ¿Por qué?
3. Si el cliente rechaza el presupuesto de optimización, ¿qué soluciones alternativas podrías proponer?

---

## Ejercicio 4: Drainage Analysis Tools 2026 (Integrado)

**Duración estimada:** 75 minutos
**Nivel:** Avanzado (requiere Civil 3D 2026)
**Archivo base:** `Ejercicio_4_Urbanizacion_Nueva.dwg`

### Objetivo

Utilizar las nuevas Autodesk Drainage Analysis Tools para diseñar y analizar una red de alcantarillado pluvial completamente en Civil 3D, sin Hydraflow externo.

### Datos del Proyecto

**Urbanización "Valle Verde":**
- 80 lotes residenciales
- 6 calles con alineamientos
- Superficie existente: `EG-Valle`
- Descarga a estanque de retención (coordenadas en archivo)

**Tormenta de diseño:**
- 25 años retorno (zona crítica)
- Duración: 15 minutos
- Intensidad: 110 mm/hr (usar curva IDF personalizada)

### Tareas

**1. Habilitar Drainage Analysis (5 min)**

a) Analyze Tab → Drainage Analysis → Analysis Settings
b) Enable Drainage Analysis: ✅
c) OK

**2. Configurar Rainfall Data Personalizada (15 min)**

a) Drainage Analysis → Rainfall Data
b) Source: Custom IDF Curve
c) Crear tabla:

```
Duration (min) | Intensity (mm/hr)
5              | 150
10             | 125
15             | 110
30             | 85
60             | 60
```

d) Import o introduce manualmente
e) Return Period: 25 years
f) OK

**3. Crear Pipe Network (10 min)**

a) Create Pipe Network: `Red_Pluvial_Valle_Verde`
b) Parts List: Crear nueva con Concrete Pipes 18"-48" y Catch Basins
c) Surface: `EG-Valle`
d) Enable Drainage Analysis en Network Properties

**4. Layout de Red (20 min)**

a) Layout automático por alineamientos
b) Catch basins cada 75 m
c) Total esperado: ~30 catch basins
d) 1 manhole final en descarga a estanque

**5. Asignar Catchments (Polígonos Visuales) (15 min)**

a) Para cada catch basin:
   - Drainage Analysis → Create Catchment
   - Dibujar polígono alrededor del área que drena hacia ese CB
   - Associate to Structure: Click en CB
   - Catchment Properties:
     - Land Use: Residential Low Density
     - C automático: ~0.40
     - Tc: Calcular con Kirpich (introduce flow length y slope)
   - OK
b) Repite para todos los CBs

**6. Run Analysis (10 min)**

a) Drainage Analysis → Run Analysis
b) Analysis Type: Steady Flow
c) Run
d) Espera completar
e) Close

**7. Revisar Resultados Visuales (10 min)**

a) Observar colores de pipes en plan view:
   - Verde, Amarillo, Rojo
b) Contar cuántos de cada color
c) Crear Profile View del colector principal
d) Drainage Analysis → Add HGL Labels
e) Click en varios pipes para añadir etiquetas numéricas

**8. Results Table y Optimización (15 min)**

a) Drainage Analysis → Results Table
b) Identificar pipes con d/D > 0.9
c) Para cada uno:
   - Swap Part al siguiente diámetro
d) Re-run Analysis
e) Verificar mejora

**9. Generar Reporte (10 min)**

a) Drainage Analysis → Generate Report
b) Report Type: Full Analysis Report
c) Include:
   - ✅ Network Summary
   - ✅ Pipe Results
   - ✅ Structure Results
   - ✅ HGL Table
   - ✅ Charts
d) Format: HTML
e) Output: `Drainage_Analysis_Valle_Verde.html`
f) Generate

### Entregables

**Archivos:**
- `Ejercicio_4_[TuApellido].dwg`
- `Drainage_Analysis_Valle_Verde.html`

**Screenshots (en PDF):**
1. Plan view mostrando pipes coloreados (verde/amarillo/rojo)
2. Catchment polygons visualizados
3. Profile view con HGL labels
4. Screenshot del HTML report (página de resumen)

**Tabla de Análisis:**

```
CONFIGURACIÓN:
  Tormenta: 25 años, 15 min, 110 mm/hr
  Total Catch Basins: ___
  Total Pipes: ___

RESULTADOS INICIALES:
  Pipes Verdes (OK): ___
  Pipes Amarillos (Warning): ___
  Pipes Rojos (Exceeded): ___

DESPUÉS DE OPTIMIZACIÓN:
  Pipes Verdes: ___
  Pipes Amarillos: ___
  Pipes Rojos: ___

DATOS HIDRÁULICOS:
  d/D máximo: ___
  Velocidad máxima: ___ m/s
  HGL máximo vs Ground: ___ m (diferencia)
  Caudal total en descarga: ___ m³/s
```

**Preguntas:**
1. ¿Qué ventaja tiene usar Drainage Analysis Tools vs Hydraflow en términos de workflow?
2. ¿Cómo se vinculan dinámicamente los resultados de análisis a los objetos de Civil 3D?
3. Si modificas un catchment polygon (área), ¿qué debe hacer para actualizar resultados?

---

## Ejercicio 5: Proyecto Integrado Completo

**Duración estimada:** 120-180 minutos
**Nivel:** Experto (integra todos los módulos 1-5)
**Archivo base:** `Ejercicio_5_Proyecto_Completo.dwg`

### Objetivo

Diseñar infraestructura completa para un desarrollo mixto: topografía, calles, parcelas, grading, y redes de alcantarillado sanitario + pluvial. Proyecto final del Módulo 5.

### Descripción del Proyecto

**Desarrollo "Parque Industrial Norte":**
- Área: 20 hectáreas (50 acres)
- Uso mixto: 60% industrial ligero, 40% comercial
- 3 calles principales (diseñar alineamientos)
- 25 parcelas industriales
- Zona de estacionamientos y áreas verdes

**Entregables esperados:**
- Superficie topográfica procesada
- Alineamientos de calles con perfiles
- Layout de parcelas
- Red de alcantarillado sanitario completa
- Red de alcantarillado pluvial completa
- Análisis hidráulico de ambas redes
- Planos de construcción preliminares

### Fases del Proyecto

**Fase 1: Topografía y Superficie (Módulo 2) - 30 min**

a) Importar puntos topográficos desde archivo `Levantamiento_Parque.csv` (incluido)
b) Crear Point Groups por descripción
c) Crear superficie TIN: `EG-Parque_Industrial`
d) Análisis de superficie: Slope analysis, Watersheds
e) Curvas de nivel cada 1.0 m

**Fase 2: Vialidad (Módulo 3) - 30 min**

a) Diseñar 3 alineamientos para calles principales:
   - `Calle_Principal` (eje longitudinal)
   - `Calle_Transversal_A`
   - `Calle_Transversal_B`
b) Crear perfiles de superficie existente
c) Diseñar rasantes (finished grade profiles) con pendientes 0.5%-3%
d) Verificar que rasantes cumplan criterios geométricos

**Fase 3: Parcelas (Módulo 4) - 20 min**

a) Crear parcels a lo largo de las calles
b) Tamaño objetivo: 2000-3000 m² (parcelas industriales)
c) Total: ~25 parcelas
d) ROW (right-of-way): 15 m de ancho en cada calle

**Fase 4: Red Sanitaria - 40 min**

a) Crear Parts List: `Sanitario_Industrial`
b) Pipes: PVC 200-400 mm
c) Structures: Manholes 1200-1500 mm
d) Layout siguiendo alineamientos de calles
e) Spacing: 100-120 m
f) Cover: 1.50 m
g) Verificar slopes ≥ 0.40%
h) Crear profile view del colector principal
i) Calcular caudales (método simplificado: 0.005 L/s por m² de parcela industrial)
j) Asignar flows en Properties

**Fase 5: Red Pluvial - 50 min**

a) Crear Parts List: `Pluvial_Industrial`
b) Pipes: Concrete 450-900 mm
c) Structures: Catch Basins + Manholes 1200-1800 mm
d) Layout con catch basins cada 60-80 m
e) Cover: 1.20 m
f) **Usar Drainage Analysis Tools 2026:**
   - Configurar rainfall: Tormenta 10 años, intensidad 95 mm/hr
   - Crear catchment polygons para cada catch basin
   - C coefficients: Industrial pavimentado = 0.80
   - Run Analysis
   - Optimizar hasta que todos pipes estén verdes o amarillos
g) Generar reporte HTML

**Fase 6: Documentación - 30 min**

a) Profile views de ambas redes (sanitario y pluvial)
b) Plan view en layout 1:1000
c) Añadir labels:
   - Pipe diameters
   - Structure names
   - Inverts y Rims
d) Crear tablas:
   - Tabla de tuberías (diámetro, longitud, material)
   - Tabla de estructuras (tipo, elevación rim, profundidad)

### Entregables Finales

**Archivos:**
- `Ejercicio_5_Proyecto_Completo_[TuApellido].dwg`
- `Drainage_Analysis_Pluvial_Report.html`
- `Proyecto_Completo_Memoria_Calculo.pdf`

**Planos (PDFs):**
1. Planta General mostrando superficie, calles, parcelas, y AMBAS redes
2. Perfil Longitudinal - Colector Sanitario Principal
3. Perfil Longitudinal - Colector Pluvial Principal
4. Detalles de Estructuras (plan view ampliado de intersecciones)

**Memoria de Cálculo (PDF, 5-10 páginas):**

1. **Introducción:**
   - Descripción del proyecto
   - Ubicación, área, uso de suelo

2. **Topografía:**
   - Puntos levantados: cantidad, rango de elevaciones
   - Superficie: área, elevación min/max

3. **Vialidad:**
   - Alineamientos: longitud, radio mínimo de curvas
   - Rasantes: pendiente min/max

4. **Parcelas:**
   - Cantidad de parcelas: ___
   - Área total parcelada: ___ ha
   - Área promedio por parcela: ___ m²

5. **Red Sanitaria:**
   - Criterios de diseño aplicados
   - Total manholes: ___
   - Total pipes: ___
   - Longitud total: ___ m
   - Diámetros usados: ___
   - Slope mínimo/máximo: ___
   - Caudal total estimado: ___ L/s
   - Punto de descarga: Coordenadas y elevación

6. **Red Pluvial:**
   - Criterios de diseño
   - Tormenta de diseño: ___ años, ___ mm/hr
   - Total catch basins: ___
   - Total manholes: ___
   - Total pipes: ___
   - Longitud total: ___ m
   - Diámetros usados: ___
   - Caudal total de diseño: ___ m³/s
   - Resultados de Drainage Analysis:
     - d/D máximo: ___
     - Velocidad máxima: ___
     - HGL vs Ground: OK / Problemas
   - Punto de descarga: Coordenadas y elevación

7. **Cantidades de Obra (estimadas):**

```
EXCAVACIÓN:
  Longitud total de zanjas: ___ m
  Profundidad promedio: ___ m
  Ancho de zanja: 1.5 m (estimado)
  Volumen de excavación: ___ m³

TUBERÍAS:
  Sanitario:
    PVC 200 mm: ___ m
    PVC 250 mm: ___ m
    PVC 300 mm: ___ m
    Total: ___ m

  Pluvial:
    Concrete 450 mm: ___ m
    Concrete 600 mm: ___ m
    Concrete 750 mm: ___ m
    Total: ___ m

ESTRUCTURAS:
  Manholes sanitarios: ___ unidades
  Catch basins: ___ unidades
  Manholes pluviales: ___ unidades

COSTO ESTIMADO (valores referenciales):
  Excavación: ___ m³ × $15/m³ = $ ___
  Tuberías sanitarias: ___ m × $50/m = $ ___
  Tuberías pluviales: ___ m × $80/m = $ ___
  Estructuras: ___ und × $800/und = $ ___
  TOTAL: $ ___
```

8. **Conclusiones:**
   - Proyecto técnicamente viable: Sí/No
   - Desafíos principales encontrados
   - Recomendaciones para fase de construcción

### Preguntas Finales (responder en Memoria)

1. **Integración de disciplinas:** ¿Cómo interactúan las superficies, alineamientos, parcelas, y redes en un proyecto BIM de Civil 3D?

2. **Diseño sanitario vs pluvial:** ¿Cuáles son las 3 diferencias principales entre diseñar alcantarillado sanitario y pluvial?

3. **Análisis hidráulico:** ¿Por qué es crítico ejecutar análisis de capacidad antes de construcción?

4. **Optimización de costos:** Si el cliente pide reducir costos en 20%, ¿qué ajustes harías al diseño? (menciona 3 estrategias específicas)

5. **Normativas:** Menciona 3 normas o estándares que debes consultar para proyectos reales de tuberías en tu país/región.

---

## Criterios de Evaluación

**Para cada ejercicio, se evaluará:**

| Criterio | Peso | Descripción |
|----------|------|-------------|
| **Completitud** | 25% | ¿Se completaron todas las tareas solicitadas? |
| **Corrección Técnica** | 35% | ¿Los diseños cumplen criterios y normas? (slopes, cover, velocidades) |
| **Calidad de Documentación** | 20% | Screenshots claros, tablas completas, reportes bien formateados |
| **Análisis Crítico** | 15% | Respuestas a preguntas demuestran comprensión, no solo ejecución mecánica |
| **Presentación** | 5% | PDF organizado, archivos nombrados correctamente, sin errores de ortografía |

**Calificación mínima para aprobar el módulo:** 80%

---

## Recursos de Apoyo

**Durante los ejercicios puedes consultar:**
- Lecciones 1-5 del Módulo 5 (material de referencia)
- Civil 3D Help (F1)
- Autodesk Knowledge Network
- Hydraflow Storm Sewers Help
- Drainage Analysis Tools documentation

**NO permitido:**
- Copiar archivos de otros estudiantes
- Usar soluciones de ejercicios de años anteriores

---

## Tiempo Total Estimado

```
Ejercicio 1: 60-90 min
Ejercicio 2: 90-120 min
Ejercicio 3: 60 min
Ejercicio 4: 75 min
Ejercicio 5: 120-180 min
─────────────────────
TOTAL: 6-9 horas
```

**Recomendación:** Distribuir en 3-4 sesiones de trabajo para evitar fatiga.

---

## Entrega Final

**Formato de entrega:**
1. Carpeta ZIP: `Modulo5_Ejercicios_[TuApellido].zip`
2. Contenido:
   ```
   Modulo5_Ejercicios_[TuApellido]/
   ├── Ejercicio_1/
   │   ├── Ejercicio_1_[TuApellido].dwg
   │   └── Ejercicio_1_Documentacion.pdf
   ├── Ejercicio_2/
   │   ├── Ejercicio_2_[TuApellido].dwg
   │   ├── Hydraflow_Report_PlazaCentral.pdf
   │   └── Ejercicio_2_Documentacion.pdf
   ├── Ejercicio_3/
   │   ├── Ejercicio_3_[TuApellido].dwg
   │   ├── Reporte_Antes_Optimizacion.pdf
   │   ├── Reporte_Despues_Optimizacion.pdf
   │   └── Ejercicio_3_Documentacion.pdf
   ├── Ejercicio_4/
   │   ├── Ejercicio_4_[TuApellido].dwg
   │   ├── Drainage_Analysis_Valle_Verde.html
   │   └── Ejercicio_4_Documentacion.pdf
   └── Ejercicio_5/
       ├── Ejercicio_5_Proyecto_Completo_[TuApellido].dwg
       ├── Drainage_Analysis_Pluvial_Report.html
       ├── Proyecto_Completo_Memoria_Calculo.pdf
       ├── Plano_1_Planta_General.pdf
       ├── Plano_2_Perfil_Sanitario.pdf
       ├── Plano_3_Perfil_Pluvial.pdf
       └── Plano_4_Detalles_Estructuras.pdf
   ```

**Fecha límite:** [Definida por instructor]

**Método de entrega:** Subir a plataforma LMS o enviar por email según instrucciones

---

## ¡Éxito en tus ejercicios!

Estos ejercicios representan proyectos reales de ingeniería civil. Completarlos exitosamente demuestra competencia profesional en diseño de redes de tuberías con Civil 3D 2026.

**Recuerda:**
- Trabaja metódicamente, siguiendo cada paso
- Verifica tus resultados (slopes, velocidades, HGL)
- Documenta bien tu trabajo (en proyectos reales, la documentación es TAN importante como el diseño)
- Pregunta al instructor si tienes dudas

**¡Adelante ingeniero/a!**

---

*DISTMAH Universidad Autodesk - Authorized Training Center*
*Civil 3D 2026 - Módulo 5: Redes de Tuberías y Utilities*
