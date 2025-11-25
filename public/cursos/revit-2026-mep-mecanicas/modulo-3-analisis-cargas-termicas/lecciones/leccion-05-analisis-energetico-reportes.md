# Lección 5: Análisis Energético y Reportes

![Análisis Energético y Reportes](../imagenes/leccion-05-analisis-energetico.png)

## Introducción

El **análisis energético** en Revit MEP 2026 permite evaluar el rendimiento térmico y energético del edificio de manera integrada con el modelo BIM. Esta funcionalidad genera reportes detallados de cargas, consumo energético estimado y recomendaciones para optimización, facilitando la toma de decisiones en diseño de sistemas HVAC y certificaciones de eficiencia energética.

En esta lección aprenderás a generar reportes profesionales de análisis de cargas, interpretar tablas de resumen de zonas, crear schedules avanzados y exportar datos analíticos para software especializado de simulación energética.

**Duración estimada:** 50 minutos

---

## 1. Energy Analysis en Revit MEP

### ¿Qué es el Energy Analysis?

El **Energy Analysis** de Revit es una funcionalidad que:

- Analiza el rendimiento energético del edificio
- Calcula cargas térmicas detalladas (cooling y heating)
- Estima consumo energético anual (kWh/año)
- Genera reportes visuales y tabulares
- Permite comparar opciones de diseño (design options)
- Facilita exportación a software especializado (EnergyPlus, IES VE, DesignBuilder)

### Tipos de Análisis Disponibles

#### 1. Conceptual Energy Analysis
- **Basado en:** Masas conceptuales (Conceptual Massing)
- **Fase:** Diseño conceptual temprano
- **Precisión:** Baja-Media
- **Velocidad:** Rápido

#### 2. Building Elements Analysis
- **Basado en:** Modelo arquitectónico detallado (muros, ventanas, techos)
- **Fase:** Diseño detallado
- **Precisión:** Media-Alta
- **Velocidad:** Medio

#### 3. Detailed MEP Analysis (2026)
- **Basado en:** Modelo MEP completo (espacios, zonas, sistemas)
- **Fase:** Diseño de ingeniería
- **Precisión:** Alta
- **Velocidad:** Lento
- **Novedad 2026:** Mejores algoritmos de cálculo

---

## 2. Configuración de Energy Analysis

### Activar Energy Model

**Paso 1: Energy Settings**

1. **Analyze tab → Energy & Analytical Model Settings → Energy Settings**

2. **Configurar:**
   - **Energy Model:** Building Elements (o Conceptual Mass)
   - **Mode:** Run (para ejecutar análisis)
   - **Location:** Verificar ubicación geográfica correcta
   - **Weather Data:** Importar archivo .epw si no automático

**Paso 2: Building Information**

3. **Analyze tab → Building Information**

4. **Completar datos:**
   - **Building Type:** Office, Hospital, School, etc.
   - **Operating Schedule:**
     - Office (8AM-6PM, 5 días/semana)
     - Hospital (24/7)
     - Retail (10AM-10PM)
   - **HVAC System Type:**
     - VAV with reheat
     - Packaged rooftop
     - Chilled water with fan coils
   - **Occupancy:** Densidad promedio del edificio

### Configurar Design Options

**Para comparar escenarios:**

1. **Manage tab → Design Options → New Option Set**

2. **Crear opciones:**
   - Option 1: Fachada vidrio estándar (SHGC = 0.7)
   - Option 2: Fachada vidrio low-e (SHGC = 0.3)
   - Option 3: Fachada con sombreado exterior

3. **Ejecutar Energy Analysis** para cada opción

4. **Comparar resultados:**
   - Cargas de enfriamiento
   - Consumo energético anual
   - Costos operativos estimados

---

## 3. Heating and Cooling Loads Report

### Generar Reporte de Cargas

**Paso a paso:**

1. **Analyze tab → Reports & Schedules → Heating and Cooling Loads**

2. **Opciones de reporte:**
   - **Include:** Spaces, Zones, Building
   - **Detail Level:** Summary, Detailed, Full Breakdown
   - **Units:** kW, BTU/h, Tons

3. **Generate Report**

4. **Revit produce archivo HTML** con reporte interactivo

### Contenido del Reporte

#### Sección 1: Building Summary

**Información general:**
```
Project Name: Torre de Oficinas XYZ
Location: Ciudad de México (19.4°N, 99.1°W)
Building Type: Office
Total Area: 2400 m² (3 pisos × 800 m²)
Total Volume: 9600 m³

Peak Cooling Load: 285 kW
Peak Heating Load: 180 kW
Total Supply Airflow: 28,500 L/s
```

#### Sección 2: Breakdown by Zone

**Tabla de zonas:**

| Zone Name | Area (m²) | Cooling (kW) | Heating (kW) | Airflow (L/s) |
|-----------|-----------|--------------|--------------|---------------|
| VAV-P1-Norte | 300 | 35 | 25 | 3500 |
| VAV-P1-Sur | 300 | 48 | 20 | 4800 |
| VAV-P1-Interior | 200 | 22 | 18 | 2200 |
| **Total Piso 1** | **800** | **105** | **63** | **10,500** |
| ... | ... | ... | ... | ... |
| **TOTAL EDIFICIO** | **2400** | **285** | **180** | **28,500** |

#### Sección 3: Load Components

**Breakdown de componentes de carga:**

```
Cooling Load Breakdown (Peak):
  - Solar Gain through Windows: 95 kW (33%)
  - Transmission through Walls: 40 kW (14%)
  - Transmission through Roof: 25 kW (9%)
  - People (Occupants): 45 kW (16%)
  - Lighting: 35 kW (12%)
  - Equipment: 30 kW (11%)
  - Infiltration: 10 kW (4%)
  - Ventilation (Outdoor Air): 5 kW (2%)
  ──────────────────────────────
  TOTAL: 285 kW (100%)

Heating Load Breakdown (Peak):
  - Transmission through Walls: 80 kW (44%)
  - Transmission through Windows: 45 kW (25%)
  - Transmission through Roof: 30 kW (17%)
  - Infiltration: 15 kW (8%)
  - Ventilation (Outdoor Air): 10 kW (6%)
  ──────────────────────────────
  TOTAL: 180 kW (100%)
```

**Interpretación:**
- **Mayor componente cooling:** Solar gain (33%) → Mejorar SHGC de ventanas
- **Mayor componente heating:** Transmisión muros (44%) → Incrementar aislamiento

#### Sección 4: Hourly Profiles

**Gráficos de carga hora por hora:**
- Perfil de carga de cooling (24 horas, día típico verano)
- Perfil de carga de heating (24 horas, día típico invierno)
- Identificar hora pico

---

## 4. Schedules Avanzados de Espacios y Zonas

### Space Schedule con Cargas

**Crear schedule detallado:**

1. **View tab → Create Schedule → Spaces**

2. **Campos recomendados:**
   - **Identity:** Name, Number, Department
   - **Dimensions:** Area, Volume, Perimeter
   - **Loads:**
     - Occupancy (personas/m²)
     - Lighting Load Density (W/m²)
     - Power Load Density (W/m²)
     - Calculated Cooling Load (kW)
     - Calculated Heating Load (kW)
     - Calculated Supply Airflow (L/s)
   - **Design Conditions:**
     - Cooling Design Temperature (°C)
     - Heating Design Temperature (°C)

3. **Formatting:**
   - Sort by: Calculated Cooling Load (descendente)
   - Conditional formatting: Resaltar cargas > 5 kW (background amarillo)
   - Calculate totals: ✓ (sumar cargas totales)

4. **Filtros:**
   - Filter: Calculated Cooling Load > 0 (excluir espacios sin carga)
   - Filter: Department equals "Office" (ver solo oficinas)

### HVAC Zone Schedule con Agregados

**Crear schedule de zonas:**

1. **View tab → Create Schedule → HVAC Zones**

2. **Campos:**
   - Name, Number, Service Type
   - Space Count (número de espacios en zona)
   - Total Area (suma áreas espacios)
   - Calculated Cooling Load (suma)
   - Calculated Heating Load (suma)
   - Calculated Supply Airflow (suma)
   - Actual Supply Airflow (caudal real sistema diseñado)

3. **Calculated Fields (avanzado):**
   - **Cooling Load Density:**
     ```
     Field: Cooling Load Density
     Formula: Calculated Cooling Load / Total Area
     Units: kW/m²
     ```
   - **Sizing Margin:**
     ```
     Field: Sizing Margin
     Formula: (Actual Supply Airflow - Calculated Supply Airflow) / Calculated Supply Airflow × 100
     Units: %
     ```

### Multi-Category Schedule

**Espacios y Zonas en mismo schedule:**

1. **Create Schedule → Multi-Category**

2. **Categories:** Select "Spaces" and "HVAC Zones"

3. **Group by:** HVAC Zone Name

4. **Mostrar:**
   - HVAC Zone (header row)
     - Space 1 (indented)
     - Space 2 (indented)
     - Space N (indented)
   - Subtotales por zona
   - Total general

---

## 5. Exportación de Datos Analíticos

### Exportar a Excel

**Desde Schedule:**

1. **Abrir Schedule de Spaces o Zones**

2. **Export → Excel:**
   - File tab → Export → Reports → Schedule

3. **Configurar export:**
   - Format: Excel (.xlsx)
   - Include formatting: ✓

4. **En Excel:**
   - Crear pivot tables para análisis
   - Generar gráficos (barras, pie charts)
   - Calcular estadísticas adicionales

**Ejemplo de análisis en Excel:**
- Gráfico de barras: Cargas de cooling por zona (identificar zonas críticas)
- Pie chart: Distribución de carga por tipo de espacio (oficinas, salas conferencias, etc.)
- Comparación: Cooling vs Heating por zona

### Exportar a gbXML (Green Building XML)

**Para simulación energética externa:**

**¿Qué es gbXML?**
- Formato estándar para intercambio de datos de edificios
- Contiene geometría 3D, propiedades térmicas, zonas, sistemas
- Compatible con: EnergyPlus, IES VE, DesignBuilder, Trace 3D, eQuest

**Exportar desde Revit:**

1. **Analyze tab → Energy & Analytical Model Settings → Export gbXML**

2. **Opciones:**
   - **Include:** Analytical Surfaces, Spaces, System Zones
   - **Detail Level:** Full (todas propiedades)
   - **Coordinate System:** Project Base Point

3. **Save gbXML file**

4. **Importar en software de simulación:**
   - EnergyPlus → Análisis horario completo (8760 horas/año)
   - DesignBuilder → Interfaz visual para EnergyPlus
   - IES VE → Análisis de iluminación natural + térmica
   - Trace 3D → Análisis HVAC y dimensionamiento

**Ventajas:**
- Análisis energético anual completo (no solo peak loads)
- Simulación dinámica hora por hora
- Comparación de sistemas HVAC diferentes
- Certificaciones energéticas (LEED, ASHRAE 90.1)

### Exportar a CSV

**Para análisis personalizado:**

1. **Schedule → Export → Excel → Save as CSV**

2. **Importar en:**
   - Python (pandas, matplotlib) → Análisis de datos
   - R → Análisis estadístico
   - Power BI → Dashboards interactivos
   - Tableau → Visualización de datos

---

## 6. Análisis Comparativo de Opciones

### Comparar Design Options

**Escenario: Evaluar impacto de ventanas de alto rendimiento**

**Option 1: Baseline (ventanas estándar)**
```
Window Type: Clear double glazing
U-value: 2.8 W/m²K
SHGC: 0.7

Results:
  Peak Cooling Load: 285 kW
  Peak Heating Load: 180 kW
  Annual Energy Use: 320,000 kWh
```

**Option 2: High-Performance (ventanas low-e)**
```
Window Type: Low-e double glazing with argon fill
U-value: 1.4 W/m²K
SHGC: 0.3

Results:
  Peak Cooling Load: 215 kW (↓ 25%)
  Peak Heating Load: 140 kW (↓ 22%)
  Annual Energy Use: 240,000 kWh (↓ 25%)
```

**Análisis económico:**
```
Costo adicional ventanas: $50,000 USD
Ahorro energético anual: 80,000 kWh × $0.12/kWh = $9,600 USD/año
Payback period: $50,000 / $9,600 = 5.2 años

Reducción de capacidad UMA:
  - Cooling: 285 kW → 215 kW (equipo más pequeño)
  - Ahorro inicial en UMA: ~$25,000 USD
  - Payback ajustado: 2.6 años ✓ Económicamente viable
```

### Crear Comparison Schedule

**Schedule que muestra ambas opciones:**

1. **Create Schedule → Spaces**
2. **Enable: Include elements in design option**
3. **Add column: Design Option**
4. **Group by: Design Option**
5. **Ver cargas de Option 1 vs Option 2 lado a lado**

---

## 7. Documentación Profesional de Análisis

### Estructura de Reporte de Cargas Térmicas

**1. Portada**
```
Título: Análisis de Cargas Térmicas
Proyecto: Torre de Oficinas XYZ
Ubicación: Ciudad de México
Cliente: ABC Desarrollos
Ingeniero: Juan Pérez, P.E.
Fecha: [Fecha]
```

**2. Resumen Ejecutivo (1 página)**
- Carga total de enfriamiento: 285 kW
- Carga total de calefacción: 180 kW
- Caudal total de aire: 28,500 L/s
- Recomendación de equipos principales

**3. Metodología (1-2 páginas)**
- Software utilizado: Autodesk Revit MEP 2026
- Método de cálculo: ASHRAE RTS (Radiant Time Series)
- Normas aplicadas: ASHRAE 62.1, 90.1
- Parámetros de diseño (temperaturas, ocupación, etc.)

**4. Resultados por Zona (3-5 páginas)**
- Tabla de zonas con cargas
- Gráfico de barras comparativo
- Identificación de zonas críticas

**5. Breakdown de Componentes (2 páginas)**
- Pie chart de componentes de carga
- Análisis de mayor contribuyente
- Recomendaciones de optimización

**6. Dimensionamiento de Equipos (2-3 páginas)**
- UMA central: Capacidad, caudal, presión
- VAV boxes por zona: Tabla de especificaciones
- Chillers y calderas: Capacidad requerida

**7. Anexos**
- Schedule completo de espacios
- Heating and Cooling Loads Report (HTML)
- Archivo gbXML (en CD o link)

---

## 8. Ejercicio Práctico

### Análisis Energético Completo de Edificio

**Proyecto: Torre de Oficinas 3 Pisos**

Usar el mismo edificio del ejercicio anterior (Lección 4):
- 3 pisos × 800 m² = 2400 m²
- 9 HVAC Zones
- Espacios con propiedades térmicas asignadas

**Tareas:**

1. **Configurar Energy Settings:**
   - Energy Model: Building Elements
   - Mode: Run analysis
   - Verificar Weather Data importado

2. **Generar Heating and Cooling Loads Report:**
   - Detail Level: Detailed
   - Include: Spaces, Zones, Building
   - Export to HTML

3. **Analizar reporte HTML:**
   - Identificar zona con mayor carga de cooling
   - Identificar mayor componente de carga (solar, ocupantes, etc.)
   - Documentar hora pico de carga

4. **Crear Space Schedule avanzado:**
   - Incluir todos los campos de cargas
   - Sort by Calculated Cooling Load (descendente)
   - Calculate totals
   - Conditional formatting para cargas > 3 kW

5. **Crear HVAC Zone Schedule:**
   - Incluir: Name, Area, Cooling Load, Heating Load, Airflow
   - Agregar campo calculado: Cooling Load Density (kW/m²)
   - Identificar zona más densa

6. **Export to Excel:**
   - Exportar Space Schedule
   - Crear gráfico de barras: Cooling Load por espacio (top 10)
   - Crear pie chart: Distribución de carga por piso

7. **Comparar Design Options (opcional):**
   - Option 1: Ventanas estándar (SHGC = 0.7)
   - Option 2: Ventanas low-e (SHGC = 0.3)
   - Ejecutar Energy Analysis para ambas
   - Comparar cargas resultantes

8. **Exportar a gbXML:**
   - Export gbXML file
   - Verificar que contiene espacios, zonas, superficies analíticas

9. **Crear reporte profesional PDF (mínimo 8 páginas):**
   - Portada
   - Resumen ejecutivo
   - Metodología
   - Resultados por zona (tabla + gráfico)
   - Breakdown de componentes (pie chart)
   - Dimensionamiento de equipos recomendado
   - Conclusiones y recomendaciones
   - Anexos (schedules)

**Entregables:**
- Heating and Cooling Loads Report (HTML)
- Space Schedule (Excel) con gráficos
- HVAC Zone Schedule (Excel)
- Archivo gbXML exportado
- Reporte profesional PDF completo (8+ páginas)

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Energy Analysis en Revit MEP** - Tipos de análisis y configuración
✅ **Heating and Cooling Loads Report** - Generación e interpretación
✅ **Schedules avanzados** de espacios y zonas con campos calculados
✅ **Multi-category schedules** para vistas integradas
✅ **Exportación de datos** a Excel, gbXML, CSV
✅ **Software de simulación** energética (EnergyPlus, IES VE, DesignBuilder)
✅ **Análisis comparativo** de design options
✅ **Documentación profesional** de análisis de cargas

---

## Próxima Lección

**Lección 6: Color Schemes y Visualización de Zonas**

Aprenderás a crear esquemas de color personalizados para zonas térmicas, visualizar cargas por color, crear leyendas profesionales y presentar análisis térmico de forma visual y efectiva para clientes y stakeholders.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 3:** Análisis de Cargas Térmicas
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
