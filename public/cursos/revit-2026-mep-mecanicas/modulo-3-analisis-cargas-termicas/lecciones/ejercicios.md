# Ejercicios Prácticos - Módulo 3: Análisis de Cargas Térmicas

## Introducción

Este módulo contiene **8 ejercicios prácticos** diseñados para aplicar los conocimientos adquiridos en análisis de cargas térmicas, creación de zonas HVAC, Enhanced System Zones (nuevo 2026), cálculo de cargas según ASHRAE, generación de reportes y visualización mediante color schemes.

Los ejercicios progresan desde configuración básica de espacios hasta análisis completo de edificios multi-piso con optimización de zonas.

**Tiempo total estimado:** 25-30 horas

---

## Ejercicio 1: Configuración de Espacios en Edificio de Oficinas

### Descripción

Configurar espacios MEP en un edificio de oficinas de 3 pisos, asignando propiedades térmicas correctas según tipo de espacio y uso. Este ejercicio establece la base para todo el análisis de cargas térmicas posterior.

### Datos del Proyecto

```
Edificio: Oficinas Administrativas "Plaza Central"
Ubicación: Ciudad de México (19.4°N, 99.1°W)
Pisos: 3 niveles + azotea técnica
Altura por piso: 3.50 m
Área total: 2400 m² (3 pisos × 800 m²)
Área por piso: 800 m² (40m × 20m)

Condiciones de diseño:
  - Temperatura exterior verano: 30°C (bulbo seco)
  - Temperatura exterior invierno: 3°C
  - Temperatura interior verano: 24°C
  - Temperatura interior invierno: 20°C
  - Humedad relativa interior: 50%
```

### Composición de Espacios por Piso

**Piso 1 (Planta Baja):**
```
1. Recepción: 80 m² (20 personas transitando)
2. Área de espera: 40 m² (10 personas sentadas)
3. Salas de reuniones (3 unidades): 25 m² c/u (12 personas c/u)
4. Oficinas privadas (4 unidades): 15 m² c/u (1 persona c/u)
5. Área abierta (open office): 400 m² (40 personas)
6. Cocineta/Break room: 30 m² (8 personas simultáneas)
7. Baños (2 unidades): 15 m² c/u (extracción, no climatización)
8. Servidor/IT room: 20 m² (alta carga equipos)
9. Circulaciones (pasillos): 90 m²

Total: 800 m²
```

**Pisos 2 y 3 (idénticos):**
```
1. Oficinas privadas (8 unidades): 20 m² c/u (1-2 personas c/u)
2. Área abierta (open office): 450 m² (45 personas)
3. Sala de conferencias: 60 m² (30 personas)
4. Cocineta: 20 m² (5 personas)
5. Baños (2 unidades): 12 m² c/u (extracción)
6. Circulaciones: 82 m²

Total por piso: 800 m²
```

### Tareas

#### Fase 1: Configuración del Proyecto

1. **Crear proyecto nuevo desde plantilla:**
   - Template: Mechanical-Default (Metric)
   - Save as: "Ejercicio-M3-01-Plaza-Central.rvt"

2. **Configurar ubicación geográfica:**
   - Manage tab → Location
   - City: Ciudad de México, México
   - Latitude: 19.4°N, Longitude: 99.1°W
   - Time Zone: GMT-6

3. **Configurar Building Information:**
   - Analyze tab → Building Information
   - Building Type: Office
   - Operating Schedule: Office (8AM-6PM, 5 días/semana)
   - Import Weather Data: Ciudad_de_Mexico.epw (buscar en energyplus.net)

4. **Crear niveles:**
   - Level PB: 0.00 m
   - Level P1: +3.50 m
   - Level P2: +7.00 m
   - Level P3: +10.50 m
   - Level Azotea: +14.00 m

5. **Crear grids estructurales:**
   - Grid spacing: 5m × 5m (8 grids en X, 4 grids en Y)
   - Nombrar: A, B, C... (horizontal) y 1, 2, 3... (vertical)

#### Fase 2: Modelado de Arquitectura Básica (si no existe)

6. **Crear muros perimetrales** en cada piso (40m × 20m)

7. **Crear muros interiores** según distribución de espacios

8. **Colocar ventanas:**
   - Fachada Norte: 30% acristalamiento
   - Fachada Sur: 40% acristalamiento
   - Fachada Este y Oeste: 35% acristalamiento

#### Fase 3: Creación de Espacios MEP

9. **Crear espacios en Piso 1:**
   - Analyze tab → Spaces & Zones → Space
   - Crear un espacio por cada área listada (9 espacios totales)
   - Nombrar apropiadamente (ej: "PB-Recepción", "PB-Open-Office", etc.)
   - Numerar: PB-101, PB-102, ..., PB-109

10. **Crear espacios en Pisos 2 y 3:**
    - Espacios según distribución (7 espacios por piso)
    - Nomenclatura: P2-201, P2-202... y P3-301, P3-302...

11. **Verificar espacios creados:**
    - Todos los espacios bounded (delimitados correctamente)
    - Ningún espacio unbounded o superpuesto
    - Áreas calculadas coinciden con especificación

#### Fase 4: Asignación de Propiedades Térmicas

12. **Configurar propiedades para cada tipo de espacio:**

**Recepción:**
```
Occupancy: 0.25 personas/m² (4 m² por persona transitando)
Lighting Load Density: 15 W/m² (iluminación destacada)
Power Load Density: 10 W/m² (equipos mínimos)
Cooling Design Temperature: 24°C
Heating Design Temperature: 20°C
Outdoor Air Per Person: 10 L/s/persona
```

**Oficinas privadas:**
```
Occupancy: 0.067 personas/m² (15 m² por persona)
Lighting: 12 W/m²
Power: 20 W/m² (computadora, monitor, impresora)
Cooling Temp: 24°C
Heating Temp: 20°C
Outdoor Air: 10 L/s/persona
```

**Área abierta (open office):**
```
Occupancy: 0.10 personas/m² (10 m² por persona)
Lighting: 12 W/m² (LED moderno)
Power: 15 W/m² (computadoras, equipos compartidos)
Cooling Temp: 24°C
Heating Temp: 20°C
Outdoor Air: 10 L/s/persona
```

**Salas de reuniones/conferencias:**
```
Occupancy: 0.50 personas/m² (2 m² por persona)
Lighting: 15 W/m²
Power: 25 W/m² (proyector, equipos AV)
Cooling Temp: 23°C (ligeramente más frío, alta ocupación)
Heating Temp: 20°C
Outdoor Air: 7 L/s/persona (ASHRAE 62.1)
```

**Servidor/IT Room:**
```
Occupancy: 0.01 personas/m² (acceso ocasional)
Lighting: 10 W/m²
Power: 400 W/m² (servidores, equipos IT)
Cooling Temp: 20°C (temperatura baja constante)
Heating Temp: No aplica (desactivar)
Outdoor Air: 2 L/s/persona (mínimo)
```

**Cocinetas:**
```
Occupancy: 0.20 personas/m² (5 m² por persona)
Lighting: 15 W/m²
Power: 50 W/m² (microondas, refrigerador, cafetera)
Cooling Temp: 24°C
Heating Temp: 20°C
Outdoor Air: 10 L/s/persona
```

**Baños (no climatizados):**
```
Service Type: Exhaust Only
Exhaust Airflow: 50 L/s por baño (extracción continua)
Cooling/Heating: N/A
```

13. **Aplicar propiedades a cada espacio:**
    - Seleccionar espacio → Properties palette
    - Ingresar valores según tipo de espacio
    - Verificar cálculos automáticos (Calculated Cooling Load, etc.)

#### Fase 5: Validación y Documentación

14. **Crear Space Schedule:**
    - View tab → Create Schedule → Spaces
    - Campos:
      - Name, Number, Level
      - Area, Volume
      - Occupancy, Lighting Load Density, Power Load Density
      - Cooling Design Temperature, Heating Design Temperature
      - Calculated Cooling Load, Calculated Heating Load
      - Calculated Supply Airflow
    - Sort by: Level, then Name
    - Calculate totals: ✓

15. **Generar Color Fill por Department:**
    - Annotate tab → Color Fill → Space
    - Scheme: By Name (o crear scheme "By Use Type")
    - Colocar leyenda en cada planta

16. **Verificar totales:**
    - Suma total de Calculated Cooling Load (kW)
    - Suma total de Calculated Heating Load (kW)
    - Suma total de Airflow (L/s)

### Entregables

1. **Archivo Revit:** `Ejercicio-M3-01-Plaza-Central.rvt` con:
   - 23 espacios creados (9 en PB, 7 en P2, 7 en P3)
   - Propiedades térmicas asignadas correctamente

2. **Space Schedule (Excel):**
   - Exportar schedule a Excel
   - Incluir gráfico de barras: Cooling Load por espacio (top 15)

3. **Plantas con Color Fill:**
   - 3 plantas (PB, P2, P3) mostrando espacios por color
   - Leyenda visible
   - Export to PDF

4. **Reporte de validación (1-2 páginas):**
   - Tabla resumen: Total área, total cooling load, total heating load
   - Identificar espacio con mayor carga (probablemente IT Room)
   - Verificar que todos los espacios tienen propiedades asignadas

### Criterios de Aprobación

- ✅ 23 espacios creados sin errores (bounded, sin overlap)
- ✅ Propiedades térmicas correctamente asignadas según tipo de espacio
- ✅ Calculated Cooling Load > 0 para espacios climatizados
- ✅ Space Schedule completo con todos los campos requeridos
- ✅ Totales calculados coherentes (carga total ~200-300 kW esperado)
- ✅ Color Fill funcionando correctamente
- ✅ Documentación profesional

### Tiempo Estimado
**6-8 horas**

---

## Ejercicio 2: Creación de HVAC Zones para Análisis Térmico

### Descripción

Agrupar los espacios creados en el Ejercicio 1 en HVAC Zones lógicas según criterios de orientación solar, uso y sistemas mecánicos previstos. Utilizar las funcionalidades mejoradas de HVAC Zones de Revit 2026.

### Continuación del Proyecto

Usar el archivo `Ejercicio-M3-01-Plaza-Central.rvt` completado.

### Criterios de Zonificación

**Estrategia: Combinación de orientación y uso**

#### Piso 1 (Planta Baja) - 4 Zonas

```
Zona 1: "PB-Norte-Perimetral"
  - Espacios con fachada norte
  - Incluye: Parte de open office en fachada norte
  - Característica: Baja ganancia solar

Zona 2: "PB-Sur-Perimetral"
  - Espacios con fachada sur
  - Incluye: Recepción, parte de open office fachada sur
  - Característica: Alta ganancia solar

Zona 3: "PB-Interior"
  - Espacios sin fachada (zona central)
  - Incluye: Salas de reuniones, oficinas privadas interiores, cocineta
  - Característica: Carga estable (solo ocupantes + equipos)

Zona 4: "PB-Servidor"
  - IT Room (sistema dedicado)
  - Característica: Alta carga equipos, 24/7, temperatura baja
```

#### Pisos 2 y 3 - 3 Zonas cada uno

```
Zona Norte: "P2-Norte" (o "P3-Norte")
  - Espacios con fachada norte
  - Oficinas privadas + parte open office norte

Zona Sur: "P2-Sur" (o "P3-Sur")
  - Espacios con fachada sur
  - Sala conferencias + parte open office sur

Zona Interior: "P2-Interior" (o "P3-Interior")
  - Espacios centrales sin fachada
  - Oficinas privadas interiores, cocineta
```

**Total: 10 HVAC Zones**

### Tareas

1. **Crear HVAC Zones en Piso 1:**
   - Analyze tab → Spaces & Zones → Zone
   - Crear 4 zonas con nombres descriptivos
   - Configurar propiedades:
     - Service Type: Heating and Cooling (excepto PB-Servidor: Cooling Only)
     - Zone Type: Occupied
     - Outdoor Air Method: Per Person

2. **Asignar espacios a zonas PB:**
   - Método 1: Seleccionar espacio → Properties → HVAC Zone: Seleccionar zona
   - O Método 2: Seleccionar múltiples espacios → Clic derecho → Add to Zone

3. **Crear HVAC Zones en Pisos 2 y 3:**
   - 3 zonas por piso (Norte, Sur, Interior)
   - Nomenclatura consistente

4. **Asignar todos los espacios:**
   - Verificar que cada espacio climatizado tiene zona asignada
   - Baños (extracción): No asignar a HVAC Zone (no climatizados)

5. **Verificar cálculos agregados:**
   - Seleccionar zona → Properties
   - Ver: Total Area, Calculated Cooling Load, Calculated Heating Load
   - Verificar que suma de espacios = total de zona

6. **Crear HVAC Zone Schedule:**
   - View tab → Create Schedule → HVAC Zones
   - Campos:
     - Name, Number, Service Type
     - Total Area
     - Calculated Cooling Load
     - Calculated Heating Load
     - Calculated Supply Airflow
   - Sort by: Calculated Cooling Load (descendente)

7. **Aplicar Color Scheme por HVAC Zone:**
   - Annotate → Color Fill → HVAC Zone
   - Scheme: By Zone Name
   - Asignar colores diferenciados a cada zona
   - Colocar leyenda en cada planta

8. **Analizar resultados:**
   - ¿Qué zona tiene mayor carga de enfriamiento?
   - ¿Qué zona tiene mayor carga de calefacción?
   - ¿Las cargas están balanceadas entre zonas de pisos 2 y 3?

### Entregables

1. **Archivo Revit actualizado** con 10 HVAC Zones creadas

2. **HVAC Zone Schedule (Excel):**
   - Exportar a Excel
   - Gráfico de barras: Cooling Load por zona
   - Pie chart: Distribución de carga total por piso

3. **Plantas con Color Scheme:**
   - 3 plantas (PB, P2, P3) con color fill por HVAC Zone
   - Leyenda visible
   - Export to PDF

4. **Análisis de zonificación (2 páginas):**
   - Justificación de criterios de zonificación
   - Identificación de zonas críticas (mayor carga)
   - Tabla comparativa de cargas por zona
   - Recomendaciones de equipos por zona (UMA, VAV boxes estimados)

### Criterios de Aprobación

- ✅ 10 HVAC Zones creadas con nomenclatura consistente
- ✅ Todos los espacios climatizados asignados a una zona
- ✅ Cálculos agregados correctos (suma espacios = total zona)
- ✅ Color scheme funcional mostrando zonas claramente
- ✅ Schedule completo con análisis
- ✅ Justificación técnica de zonificación

### Tiempo Estimado
**4-5 horas**

---

## Ejercicio 3: Definición de Enhanced System Zones por Sketch

### Descripción

Utilizar la funcionalidad **Enhanced System Zones** (novedad 2026) para crear zonas conceptuales basadas en orientación solar mediante sketch boundary, independientemente de muros y espacios existentes.

### Proyecto Nuevo

```
Edificio: Planta abierta de oficinas (Open Floor)
Área: 1200 m² (60m × 20m rectangular)
Altura: 4.00 m
Pisos: 1 nivel
Característica: Sin subdivisiones internas (planta libre)
Ubicación: Ciudad de México

Objetivo: Zonificar por orientación solar antes de diseño arquitectónico detallado
```

### Orientación del Edificio

```
Fachada larga (60m): Orientación Norte-Sur
Fachada corta (20m): Orientación Este-Oeste

Distribución solar:
  - Fachada Norte (60m): Baja ganancia solar
  - Fachada Sur (60m): Alta ganancia solar
  - Fachada Este (20m): Ganancia matutina
  - Fachada Oeste (20m): Ganancia vespertina
  - Zona central (sin fachada): Carga estable
```

### Tareas

1. **Crear proyecto nuevo:**
   - Template: Mechanical-Default
   - Save as: "Ejercicio-M3-03-System-Zones-Sketch.rvt"

2. **Modelar envolvente básica:**
   - Muros perimetrales: 60m × 20m
   - Ventanas: 40% acristalamiento en todas las fachadas
   - Sin subdivisiones internas (planta abierta)

3. **Crear 5 System Zones con Sketch Boundary:**

   **Zone 1: "Sketch-Norte"**
   - Analyze tab → System Zone
   - Boundary Type: Sketch
   - Dibujar límite: Franja de 5m desde fachada norte (60m × 5m = 300 m²)
   - Finish Sketch
   - Properties:
     - Name: "Sketch-Norte"
     - Service Type: Heating and Cooling

   **Zone 2: "Sketch-Sur"**
   - Sketch: Franja de 5m desde fachada sur (60m × 5m = 300 m²)

   **Zone 3: "Sketch-Este"**
   - Sketch: Franja de 5m desde fachada este (20m × 5m = 100 m²)
     - Nota: Excluir overlap con zonas norte/sur (ajustar geometría)

   **Zone 4: "Sketch-Oeste"**
   - Sketch: Franja de 5m desde fachada oeste (20m × 5m = 100 m²)

   **Zone 5: "Sketch-Central"**
   - Sketch: Zona interior (área restante central ~ 400 m²)

4. **Ajustar sketches para evitar overlap:**
   - Edit Boundary en cada zone
   - Asegurar que limits no se superpongan
   - Zonas deben cubrir toda el área del piso (suma = 1200 m²)

5. **Asignar propiedades térmicas estimadas:**
   - Para cada System Zone, estimar:
     - Occupancy density: 0.10 personas/m²
     - Lighting: 12 W/m²
     - Power: 15 W/m²
   - Calculated Cooling Load se calcula automáticamente

6. **Crear System Zone Schedule:**
   - View → Create Schedule → System Zones
   - Campos: Name, Boundary Type, Area, Calculated Cooling Load, Service Type
   - Verificar suma de áreas = 1200 m²

7. **Aplicar Color Scheme:**
   - Color Fill → System Zone
   - Scheme: By Zone Name
   - Colores sugeridos:
     - Norte: Azul (baja ganancia)
     - Sur: Rojo (alta ganancia)
     - Este: Amarillo (ganancia matutina)
     - Oeste: Naranja (ganancia vespertina)
     - Central: Verde (carga estable)

8. **Analizar cargas por orientación:**
   - ¿Qué zona tiene mayor Calculated Cooling Load?
   - ¿Coherente con orientación solar? (Sur debería ser más alta)

### Entregables

1. **Archivo Revit** con 5 System Zones (Sketch Boundary)

2. **Planta con Color Scheme:**
   - Vista mostrando 5 zonas por color
   - Leyenda visible
   - Export to PDF

3. **System Zone Schedule (Excel):**
   - Tabla de zonas con áreas y cargas
   - Gráfico de barras: Cooling Load por orientación

4. **Análisis comparativo (1 página):**
   - Comparar carga Norte vs Sur
   - Calcular % de diferencia
   - Justificar diferencias por orientación solar

### Criterios de Aprobación

- ✅ 5 System Zones creadas con Sketch Boundary
- ✅ Sketches sin overlap, cubren área completa
- ✅ Suma de áreas = 1200 m² (±5 m²)
- ✅ Zona Sur tiene mayor carga que zona Norte (coherencia física)
- ✅ Color scheme funcional
- ✅ Schedule completo

### Tiempo Estimado
**3-4 horas**

---

## Ejercicio 4: Cálculo de Cargas Térmicas de Enfriamiento (Verano)

### Descripción

Realizar cálculo detallado de cargas de enfriamiento para día típico de verano, utilizando metodología ASHRAE RTS. Generar reporte completo con breakdown de componentes de carga.

### Proyecto

Usar archivo `Ejercicio-M3-01-Plaza-Central.rvt` con espacios y zonas configurados.

### Condiciones de Diseño Verano

```
Ubicación: Ciudad de México
Mes de diseño: Mayo (máxima carga cooling)
Temperatura exterior: 30°C (bulbo seco)
Humedad relativa exterior: 50%
Temperatura interior deseada: 24°C
Humedad relativa interior: 50%
Radiación solar: Día despejado (clear sky)
Hora pico: 15:00 hrs (3 PM)
```

### Tareas

#### Fase 1: Configuración de Análisis de Cooling

1. **Configurar Energy Settings:**
   - Analyze tab → Energy & Analytical Model Settings
   - Energy Model: Building Elements
   - Mode: Run

2. **Verificar Building Information:**
   - Location: Ciudad de México
   - Weather Data: Verificar archivo .epw importado
   - Design Day: Summer (May, clear sky)

3. **Configurar Mechanical Settings:**
   - Analyze tab → Mechanical Settings
   - Load Calculation Method: RTS (Radiant Time Series)
   - Safety Factor: 10%

4. **Verificar propiedades de muros y ventanas:**
   - Muros exteriores:
     - U-value: 0.6 W/m²K (con aislamiento)
   - Ventanas:
     - U-value: 2.8 W/m²K (doble vidrio)
     - SHGC: 0.7 (vidrio claro)

#### Fase 2: Ejecución de Cálculo

5. **Generar Heating and Cooling Loads Report:**
   - Analyze tab → Reports & Schedules → Heating and Cooling Loads
   - Options:
     - Include: Spaces, Zones, Building
     - Detail Level: Detailed
     - Units: kW
   - Generate Report → Revit crea archivo HTML

6. **Abrir y revisar reporte HTML:**
   - Sección "Building Summary": Ver peak cooling load total
   - Sección "Zone Breakdown": Ver carga por zona
   - Sección "Load Components": Ver breakdown por componente

#### Fase 3: Análisis de Componentes

7. **Documentar componentes de carga:**

   Crear tabla en Excel:
   ```
   Componente                    | Carga (kW) | Porcentaje (%)
   ────────────────────────────────────────────────────────
   Solar Gain (ventanas)         |            |
   Transmission (muros)          |            |
   Transmission (techo)          |            |
   Transmission (ventanas)       |            |
   Occupants (personas)          |            |
   Lighting (iluminación)        |            |
   Equipment (equipos)           |            |
   Infiltration (infiltración)   |            |
   Ventilation (aire exterior)   |            |
   ────────────────────────────────────────────────────────
   TOTAL                         |            | 100%
   ```

   Llenar valores desde reporte HTML.

8. **Identificar mayor componente:**
   - ¿Cuál componente contribuye más a carga total?
   - Típicamente: Solar gain o equipos

9. **Analizar variación por zona:**
   - Comparar zonas Norte vs Sur
   - ¿Diferencia en solar gain entre ambas?

#### Fase 4: Optimización

10. **Proponer 3 estrategias de reducción:**

    **Estrategia 1: Mejorar ventanas**
    ```
    Cambio: Ventanas low-e con SHGC = 0.3
    Impacto esperado: Reducción ~30% en solar gain
    Cálculo manual estimado:
      - Solar gain actual: [valor] kW
      - Solar gain con low-e: [valor] × 0.3/0.7 = [resultado] kW
      - Reducción: [resultado] kW
    ```

    **Estrategia 2: Sombreado exterior**
    ```
    Cambio: Overhangs en fachada sur
    Impacto: Bloqueo ~50% de radiación solar directa
    ```

    **Estrategia 3: Reducir carga de iluminación**
    ```
    Cambio: Iluminación LED + controles daylight harvesting
    Reducción: 12 W/m² → 8 W/m² (33% menos)
    Impacto: [calcular] kW
    ```

11. **Crear Design Option (opcional, avanzado):**
    - Option 1: Baseline (ventanas SHGC = 0.7)
    - Option 2: Low-e windows (SHGC = 0.3)
    - Ejecutar Energy Analysis para ambas
    - Comparar peak cooling load

### Entregables

1. **Heating and Cooling Loads Report (HTML):**
   - Generado desde Revit
   - Incluir en carpeta de entregables

2. **Tabla de componentes de carga (Excel):**
   - Breakdown completo con porcentajes
   - Gráfico pie chart mostrando distribución

3. **Análisis de zonas críticas (Excel):**
   - Tabla de zonas ordenada por cooling load
   - Gráfico de barras comparativo

4. **Reporte de optimización (2-3 páginas):**
   - Página 1: Resumen de cargas calculadas
   - Página 2: Breakdown de componentes (tabla + pie chart)
   - Página 3: Propuestas de optimización con estimaciones de impacto

### Criterios de Aprobación

- ✅ Heating and Cooling Loads Report generado correctamente
- ✅ Tabla de componentes completa con todos los valores
- ✅ Mayor componente identificado correctamente (con justificación)
- ✅ 3 estrategias de optimización propuestas con cálculos
- ✅ Análisis coherente con física (zona sur > zona norte en solar gain)
- ✅ Documentación profesional

### Tiempo Estimado
**5-6 horas**

---

## Ejercicio 5: Cálculo de Cargas Térmicas de Calefacción (Invierno)

### Descripción

Calcular cargas de calefacción para condiciones de invierno, identificar zonas con mayores pérdidas de calor y proponer estrategias de optimización de envolvente.

### Proyecto

Continuar con `Ejercicio-M3-01-Plaza-Central.rvt`.

### Condiciones de Diseño Invierno

```
Mes de diseño: Enero (máxima carga heating)
Temperatura exterior: 3°C (0.4% ASHRAE para Ciudad de México)
Humedad relativa exterior: 60%
Temperatura interior deseada: 20°C
Velocidad del viento: 4 m/s (típico)
Infiltración: 0.5 ACH (Air Changes per Hour)
```

### Tareas

1. **Configurar Design Day de invierno:**
   - Energy Settings → Design Day: Winter (January)

2. **Generar Heating and Cooling Loads Report:**
   - Enfocado en sección "Heating Load"

3. **Analizar componentes de pérdida de calor:**

   Crear tabla:
   ```
   Componente                      | Pérdida (kW) | Porcentaje (%)
   ──────────────────────────────────────────────────────────
   Transmission - Muros exteriores |              |
   Transmission - Ventanas         |              |
   Transmission - Techo            |              |
   Transmission - Piso             |              |
   Infiltration                    |              |
   Ventilation (aire exterior)     |              |
   ──────────────────────────────────────────────────────────
   TOTAL                           |              | 100%
   ```

4. **Identificar mayor fuente de pérdida:**
   - Típicamente: Transmisión por ventanas o muros

5. **Analizar variación por orientación:**
   - ¿Zona Norte tiene mayor carga que zona Sur?
   - Coherencia: Norte recibe menos sol (menor ganancia pasiva)

6. **Proponer 3 mejoras de envolvente:**

   **Mejora 1: Incrementar aislamiento de muros**
   ```
   Actual: U = 0.6 W/m²K
   Propuesta: U = 0.3 W/m²K (doble aislamiento)
   Impacto: Reducción ~50% en transmission - muros
   ```

   **Mejora 2: Ventanas de mayor rendimiento**
   ```
   Actual: U = 2.8 W/m²K (doble vidrio)
   Propuesta: U = 1.4 W/m²K (triple vidrio + low-e + argón)
   Impacto: Reducción ~50% en transmission - ventanas
   ```

   **Mejora 3: Reducir infiltración**
   ```
   Actual: 0.5 ACH
   Propuesta: 0.25 ACH (mejor sellado, vestíbulos en entradas)
   Impacto: Reducción ~50% en infiltración
   ```

7. **Calcular impacto total:**
   - Estimar reducción de carga total de heating (%)
   - Estimar ahorro energético anual (kWh/año)

8. **Comparar Cooling vs Heating:**
   - Tabla comparativa:
     ```
     Zona         | Cooling (kW) | Heating (kW) | Ratio (C/H)
     ─────────────────────────────────────────────────────────
     PB-Norte     |              |              |
     PB-Sur       |              |              |
     ...
     ```
   - ¿Edificio cooling-dominated o heating-dominated?
   - Ciudad de México: Típicamente cooling-dominated

### Entregables

1. **Reporte HTML** con heating loads

2. **Tabla de componentes de pérdida de calor (Excel)** con pie chart

3. **Análisis comparativo Cooling vs Heating (Excel):**
   - Tabla de zonas con ambas cargas
   - Gráfico de barras agrupadas (cooling y heating lado a lado por zona)

4. **Reporte de mejoras de envolvente (2 páginas):**
   - Breakdown de pérdidas actuales
   - 3 propuestas de mejora con cálculos de impacto
   - Conclusión sobre dominio de carga (cooling vs heating)

### Criterios de Aprobación

- ✅ Heating loads calculadas correctamente
- ✅ Mayor componente de pérdida identificado
- ✅ 3 mejoras propuestas con estimaciones realistas
- ✅ Comparación cooling vs heating coherente
- ✅ Conclusión sobre tipo de edificio (cooling/heating-dominated)

### Tiempo Estimado
**4-5 horas**

---

## Ejercicio 6: Generación de Reportes de Análisis Energético

### Descripción

Generar reportes profesionales completos de análisis energético, schedules avanzados y exportar datos para simulación en software externo (gbXML).

### Proyecto

Usar `Ejercicio-M3-01-Plaza-Central.rvt` completado.

### Tareas

1. **Crear Space Schedule avanzado:**
   - Incluir todos los campos de cargas
   - Agregar campo calculado: "Cooling Load Density (kW/m²)"
     - Formula: Calculated Cooling Load / Area
   - Conditional formatting: Resaltar densidad > 100 W/m² (rojo)

2. **Crear HVAC Zone Schedule:**
   - Agregar campo calculado: "Sizing Margin (%)"
     - Formula: (Actual Airflow - Calculated Airflow) / Calculated Airflow × 100

3. **Crear Multi-Category Schedule:**
   - Categories: Spaces y HVAC Zones
   - Group by: HVAC Zone Name
   - Mostrar espacios indentados bajo cada zona
   - Subtotales por zona

4. **Exportar todos los schedules a Excel**

5. **Crear gráficos en Excel:**
   - Gráfico 1: Top 10 espacios por cooling load (barras)
   - Gráfico 2: Distribución de carga por piso (pie chart)
   - Gráfico 3: Cooling vs Heating por zona (barras agrupadas)

6. **Exportar modelo a gbXML:**
   - Analyze tab → Export gbXML
   - Include: Analytical Surfaces, Spaces, System Zones
   - Save file: "Plaza-Central-Analytical.xml"

7. **Verificar archivo gbXML:**
   - Abrir en editor de texto (Notepad++)
   - Verificar que contiene espacios, zonas, superficies analíticas
   - (Opcional) Importar en DesignBuilder o IES VE si tienes acceso

8. **Crear reporte profesional PDF (mínimo 10 páginas):**

   **Contenido requerido:**
   ```
   Página 1: Portada
     - Título: "Análisis de Cargas Térmicas"
     - Proyecto: Plaza Central
     - Cliente, Ingeniero, Fecha

   Página 2: Resumen Ejecutivo
     - Carga total cooling: [valor] kW
     - Carga total heating: [valor] kW
     - Caudal total aire: [valor] L/s
     - Recomendaciones principales (3 bullets)

   Página 3: Metodología
     - Software: Revit MEP 2026
     - Método: ASHRAE RTS
     - Normas: ASHRAE 62.1, 90.1
     - Parámetros de diseño

   Páginas 4-5: Resultados por Zona
     - Tabla de HVAC Zones (Schedule exportado)
     - Gráfico de barras: Cooling load por zona

   Página 6: Breakdown de Componentes
     - Pie chart: Componentes de cooling load
     - Pie chart: Componentes de heating load

   Páginas 7-8: Análisis por Piso
     - Planta PB con color scheme (cooling load)
     - Planta P2 con color scheme
     - Planta P3 con color scheme

   Página 9: Dimensionamiento de Equipos
     - UMA central: Capacidad requerida
     - VAV boxes por zona: Tabla de especificaciones
     - Chillers/Calderas: Capacidades

   Página 10: Conclusiones y Recomendaciones
     - Zonas críticas identificadas
     - Propuestas de optimización
     - Próximos pasos

   Anexos:
     - Schedule completo de espacios
     - Heating and Cooling Loads Report (HTML)
   ```

### Entregables

1. **3 Schedules (Excel):** Space, HVAC Zone, Multi-Category

2. **Archivo gbXML** exportado

3. **Gráficos de Excel** (mínimo 3)

4. **Reporte profesional PDF (10+ páginas)**

5. **Presentación PowerPoint (opcional, 8-10 slides)** resumiendo análisis

### Criterios de Aprobación

- ✅ Schedules avanzados con campos calculados funcionando
- ✅ Gráficos profesionales y legibles
- ✅ Archivo gbXML válido (verific en editor de texto)
- ✅ Reporte PDF completo, estructurado profesionalmente
- ✅ Documentación de calidad profesional (apta para presentar a cliente)

### Tiempo Estimado
**6-8 horas**

---

## Ejercicio 7: Aplicación de Color Schemes a Zonas Térmicas

### Descripción

Crear múltiples color schemes personalizados para visualizar diferentes propiedades térmicas y generar presentaciones visuales de alta calidad.

### Proyecto

Usar `Ejercicio-M3-01-Plaza-Central.rvt`.

### Tareas

#### Fase 1: Color Schemes Básicos

1. **Color Scheme 1: Por HVAC Zone Name**
   - Annotate → Color Fill → HVAC Zone
   - Scheme: By Name
   - Asignar colores únicos a cada zona (10 colores diferentes)
   - Colocar leyenda en cada planta (PB, P2, P3)

2. **Color Scheme 2: Por Calculated Cooling Load**
   - Color Fill → Space
   - Parameter: Calculated Cooling Load
   - Editar rangos:
     ```
     0-1 kW: Verde (RGB 0,255,0)
     1-2 kW: Amarillo claro (RGB 255,255,100)
     2-3 kW: Amarillo (RGB 255,255,0)
     3-5 kW: Naranja (RGB 255,128,0)
     >5 kW: Rojo (RGB 255,0,0)
     ```

3. **Color Scheme 3: Por Calculated Heating Load**
   - Similar al anterior, ajustar rangos para heating

#### Fase 2: Color Schemes Avanzados

4. **Color Scheme 4: Por Densidad de Carga (kW/m²)**
   - Crear parámetro calculado compartido: "Cooling Load Density"
   - Formula: Calculated Cooling Load / Area
   - Crear color scheme basado en este parámetro
   - Rangos:
     ```
     0-50 W/m²: Blanco
     50-100 W/m²: Amarillo claro
     100-150 W/m²: Naranja claro
     >150 W/m²: Rojo
     ```

5. **Color Scheme 5: Por Tipo de Uso**
   - Create parameter "Space Use Type" (texto)
   - Asignar valores: Office, Conference, Server, Kitchen, Circulation
   - Color scheme By Space Use Type
   - Colores categóricos profesionales

#### Fase 3: Vistas y Sheets

6. **Crear vistas duplicadas:**
   - Vista 1-PB: Color scheme HVAC Zones
   - Vista 2-PB: Color scheme Cooling Load
   - Vista 3-PB: Color scheme Heating Load
   - Vista 4-PB: Color scheme Density
   - Repetir para P2 y P3 (12 vistas totales)

7. **Crear sheets de presentación:**

   **Sheet M-401: Distribución de Zonas HVAC**
   ```
   ┌─────────────────────────────────────────┐
   │  DISTRIBUCIÓN DE ZONAS HVAC             │
   ├─────────────────────────────────────────┤
   │  [Planta PB]                            │
   │  [Planta P2]                            │
   │  [Planta P3]                            │
   │                                         │
   │  Leyenda: HVAC Zones (colores únicos)  │
   └─────────────────────────────────────────┘
   ```

   **Sheet M-402: Análisis de Enfriamiento**
   ```
   ┌─────────────────────────────────────────┐
   │  ANÁLISIS DE CARGAS DE ENFRIAMIENTO     │
   ├─────────────────────────────────────────┤
   │  [3 plantas con cooling load scheme]    │
   │  Leyenda: Gradiente Verde → Rojo       │
   │                                         │
   │  Notas: Zonas en rojo requieren         │
   │         atención especial               │
   └─────────────────────────────────────────┘
   ```

   **Sheet M-403: Comparación Cooling vs Heating**
   ```
   ┌──────────────────┬──────────────────────┐
   │  ENFRIAMIENTO    │  CALEFACCIÓN         │
   ├──────────────────┼──────────────────────┤
   │  [Planta P2      │  [Planta P2          │
   │   cooling]       │   heating]           │
   └──────────────────┴──────────────────────┘
   ```

8. **Añadir anotaciones:**
   - Text con flechas señalando zonas críticas
   - Callouts con notas (ej: "Mayor carga solar", "Data center 24/7")

9. **Export sheets to PDF:**
   - Alta resolución (300 DPI)
   - Color (no blanco y negro)

### Entregables

1. **5 color schemes** personalizados creados

2. **12 vistas** con diferentes color schemes

3. **3 sheets** profesionales (M-401, M-402, M-403)

4. **PDF de sheets** de alta resolución

5. **Presentación PowerPoint (8 slides):**
   - Slide 1: Portada
   - Slides 2-4: Capturas de sheets (una por slide)
   - Slide 5: Análisis de zonas críticas
   - Slide 6: Recomendaciones de optimización
   - Slide 7: Próximos pasos
   - Slide 8: Contacto/Preguntas

### Criterios de Aprobación

- ✅ 5 color schemes funcionando correctamente
- ✅ Rangos de color apropiados (gradientes lógicos)
- ✅ Sheets profesionales con layout limpio
- ✅ Anotaciones claras y relevantes
- ✅ PDF de alta calidad (legible, colores correctos)
- ✅ Presentación PowerPoint lista para presentar a cliente

### Tiempo Estimado
**5-6 horas**

---

## Ejercicio 8: Optimización de Zonas según Resultados de Cargas

### Descripción

Analizar resultados de cálculos de cargas, identificar problemas en zonificación actual y proponer rezonificación optimizada para balancear cargas y mejorar eficiencia energética.

### Proyecto

Usar `Ejercicio-M3-01-Plaza-Central.rvt` completado.

### Tareas

1. **Analizar resultados actuales:**
   - Generar HVAC Zone Schedule
   - Identificar:
     - Zona con carga máxima (kW)
     - Zona con carga mínima
     - Zonas con desbalance cooling/heating > 2:1

2. **Calcular estadísticas:**
   ```
   Carga promedio por zona: [Total / 10 zonas] = [valor] kW
   Desviación estándar: [calcular]
   Coeficiente de variación: Desv. Std / Promedio

   Objetivo: CV < 0.5 (zonas balanceadas)
   ```

3. **Identificar problemas de zonificación:**

   Problemas típicos:
   - Zona muy grande (>500 m²) con carga excesiva
   - Zona combinando espacios con cargas muy diferentes (oficina + servidor)
   - Zonas por orientación mal definidas (incluyen espacios de fachadas opuestas)

4. **Proponer rezonificación:**

   **Cambio 1: Subdividir zona de alta carga**
   ```
   Actual: PB-Sur (600 m², 80 kW)
   Propuesto: Dividir en:
     - PB-Sur-1 (300 m², 40 kW)
     - PB-Sur-2 (300 m², 40 kW)
   Ventaja: VAV boxes más pequeños, mejor control
   ```

   **Cambio 2: Separar IT Room**
   ```
   Actual: IT Room en zona PB-Interior (20 m², 12 kW alta densidad)
   Propuesto: Zona dedicada PB-Servidor
     - Sistema 24/7 independiente
     - Temperatura más baja (20°C)
     - Redundancia
   ```

   **Cambio 3: Fusionar zonas pequeñas**
   ```
   Actual: P2-Interior y P3-Interior (zonas separadas, 200 m² c/u)
   Propuesto: Fusionar si están servidas por mismo riser vertical
   Ventaja: Simplificar sistema, menos VAV boxes
   ```

5. **Implementar rezonificación en Revit:**
   - Crear nuevas HVAC Zones según propuesta
   - Reasignar espacios
   - Eliminar zonas antiguas (si aplica)

6. **Comparar resultados:**

   Crear tabla comparativa:
   ```
   Métrica                    | Antes | Después | Mejora (%)
   ─────────────────────────────────────────────────────────
   Número de zonas            | 10    |         |
   Carga máxima por zona (kW) |       |         |
   Carga mínima por zona (kW) |       |         |
   Desviación estándar        |       |         |
   Coeficiente de variación   |       |         |
   ```

7. **Dimensionar equipos para nueva zonificación:**
   - Tabla de VAV boxes requeridos (uno por zona)
   - Capacidad de cada VAV
   - UMA central (suma total de cargas)

8. **Análisis de costo-beneficio:**
   ```
   Opción 1 (zonificación original):
     - 10 VAV boxes
     - Tamaños: [lista]
     - Costo estimado: $X

   Opción 2 (zonificación optimizada):
     - [nuevo número] VAV boxes
     - Tamaños: [lista]
     - Costo estimado: $Y

   Ahorro/Incremento: $Y - $X
   Beneficios adicionales: Mejor control, eficiencia energética
   ```

### Entregables

1. **Análisis de zonificación actual:**
   - HVAC Zone Schedule con estadísticas
   - Identificación de 3+ problemas

2. **Propuesta de rezonificación:**
   - Documento (2-3 páginas) justificando cambios
   - Planos antes/después mostrando zonas

3. **Archivo Revit actualizado** con nueva zonificación

4. **Tabla comparativa** Antes vs Después

5. **Análisis de costo-beneficio**

6. **Recomendación final** (1 página):
   - ¿Implementar rezonificación?
   - Justificación técnica y económica

### Criterios de Aprobación

- ✅ Análisis estadístico completo de zonificación actual
- ✅ 3+ problemas identificados correctamente
- ✅ Propuesta de rezonificación técnicamente válida
- ✅ Implementación en Revit funcional
- ✅ Comparación Antes/Después con métricas cuantitativas
- ✅ Recomendación final bien fundamentada

### Tiempo Estimado
**6-7 horas**

---

## Resumen de Ejercicios del Módulo

### Progresión de Aprendizaje

1. **Ejercicio 1:** Fundamentos - Configuración de espacios
2. **Ejercicio 2:** Agrupación - Creación de HVAC Zones
3. **Ejercicio 3:** Novedad 2026 - Enhanced System Zones con sketch
4. **Ejercicio 4:** Análisis - Cálculo de cargas de cooling
5. **Ejercicio 5:** Análisis - Cálculo de cargas de heating
6. **Ejercicio 6:** Documentación - Reportes y exportación
7. **Ejercicio 7:** Visualización - Color schemes profesionales
8. **Ejercicio 8:** Optimización - Mejorar zonificación

### Tiempo Total

**Total: 40-50 horas** de trabajo profesional

### Evaluación Final

Para aprobar el Módulo 3, debes:
- ✅ Completar los 8 ejercicios
- ✅ Obtener mínimo 80/100 en cada ejercicio
- ✅ Presentar proyecto final integrador (Ejercicio 8 completo)

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 3:** Análisis de Cargas Térmicas
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
