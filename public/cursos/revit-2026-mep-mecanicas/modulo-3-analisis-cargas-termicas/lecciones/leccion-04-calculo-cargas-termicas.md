# Lección 4: Cálculo de Cargas Térmicas

![Cálculo de Cargas Térmicas](../imagenes/leccion-04-calculo-cargas.png)

## Introducción

El **cálculo de cargas térmicas** es el proceso fundamental para dimensionar correctamente los sistemas HVAC de un edificio. Determina la cantidad de enfriamiento (cooling) y calefacción (heating) necesaria para mantener condiciones de confort en cada espacio y zona térmica.

Revit MEP 2026 incorpora herramientas de cálculo de cargas basadas en metodologías reconocidas como ASHRAE, permitiendo obtener resultados precisos integrados directamente en el modelo BIM.

**Duración estimada:** 65 minutos

---

## 1. Fundamentos de Cargas Térmicas

### ¿Qué es una Carga Térmica?

Una **carga térmica** es la cantidad de energía (calor) que debe ser agregada o removida de un espacio para mantener las condiciones de temperatura y humedad deseadas.

**Unidades:**
- **kW** (kilovatios) - Sistema internacional
- **BTU/h** (British Thermal Units per hour) - Sistema imperial
- **Tons** (Toneladas de refrigeración) - 1 ton = 12,000 BTU/h = 3.517 kW

### Tipos de Cargas Térmicas

#### 1. Carga de Enfriamiento (Cooling Load)

**Definición:** Cantidad de calor que debe ser removido del espacio.

**Fuentes principales:**
- ☀️ **Radiación solar** a través de ventanas (ganancia solar)
- 🌡️ **Conducción** a través de muros, techos, ventanas
- 👥 **Ocupantes** (calor metabólico humano)
- 💡 **Iluminación** (calor de luminarias)
- 🖥️ **Equipos eléctricos** (computadoras, impresoras, servidores)
- 🌬️ **Infiltración** de aire exterior caliente
- 🚪 **Ventilación** exterior requerida

#### 2. Carga de Calefacción (Heating Load)

**Definición:** Cantidad de calor que debe ser agregado al espacio.

**Fuentes principales:**
- 🧱 **Pérdidas por conducción** a través de envolvente (muros, techo, piso)
- 🪟 **Pérdidas por ventanas** (mayor conductividad que muros)
- 🌬️ **Infiltración** de aire exterior frío
- 🚪 **Ventilación** exterior requerida (calentamiento de aire)

### Cargas Sensibles vs Latentes

#### Carga Sensible
- **Definición:** Calor que cambia la temperatura del aire (medible con termómetro)
- **Fuentes:** Radiación solar, conducción, equipos, iluminación
- **Efecto:** Incremento/decremento de temperatura

#### Carga Latente
- **Definición:** Calor asociado con cambio de humedad (evaporación/condensación)
- **Fuentes:** Ocupantes (respiración, transpiración), infiltración, procesos húmedos
- **Efecto:** Incremento/decremento de humedad relativa

**Carga total:**
```
Carga Total (kW) = Carga Sensible (kW) + Carga Latente (kW)
```

---

## 2. Metodologías de Cálculo (ASHRAE)

### ASHRAE - Organización Referente

**ASHRAE** (American Society of Heating, Refrigerating and Air-Conditioning Engineers) publica los estándares y metodologías más reconocidos mundialmente para cálculo de cargas.

**Documentos clave:**
- **ASHRAE Handbook - Fundamentals** (Capítulo 18: Residential Cooling and Heating Load)
- **ASHRAE Handbook - HVAC Applications**
- **ASHRAE Standard 62.1** - Ventilation for Acceptable Indoor Air Quality

### Método RTS (Radiant Time Series)

**Usado en Revit MEP 2026:**

El método **RTS** es la metodología moderna recomendada por ASHRAE para cálculo de cargas de enfriamiento.

**Características:**
- Considera efectos radiativos y convectivos separadamente
- Calcula cargas hora por hora (24 horas)
- Determina **pico de carga** (peak load) para dimensionamiento
- Más preciso que métodos antiguos (CLTD/CLF)

**Proceso RTS:**
1. Calcular ganancias de calor instantáneas (solar, equipos, personas)
2. Aplicar factores de radiación (RTS)
3. Determinar carga convectiva inmediata + radiante con retardo
4. Sumar para obtener carga total horaria
5. Identificar hora pico

### Método para Calefacción

**Cálculo más simple:**

Las cargas de calefacción se calculan considerando:

1. **Pérdidas por conducción:**
   ```
   Q_conducción = U × A × ΔT

   Donde:
   Q = Pérdida de calor (W)
   U = Coeficiente de transmisión térmica (W/m²K)
   A = Área de superficie (m²)
   ΔT = Diferencia temperatura interior - exterior (°C)
   ```

2. **Pérdidas por infiltración:**
   ```
   Q_infiltración = ρ × Cp × ACH × V × ΔT / 3600

   Donde:
   ρ = Densidad aire (kg/m³)
   Cp = Calor específico aire (J/kgK)
   ACH = Cambios aire por hora
   V = Volumen espacio (m³)
   ```

3. **Suma total:**
   ```
   Q_heating_total = Q_conducción + Q_infiltración + Q_ventilación
   ```

---

## 3. Factores que Afectan las Cargas

### 1. Orientación Solar

**Ganancia solar varía según orientación:**

| Orientación | Ganancia Solar | Comentarios |
|-------------|---------------|-------------|
| **Sur** | Máxima (hemisferio norte) | Sol directo todo el día, mayor en invierno |
| **Oeste** | Alta | Sol intenso por la tarde (3-6 PM) |
| **Este** | Media-Alta | Sol matutino (8-11 AM) |
| **Norte** | Mínima | Sol indirecto, luz difusa |
| **Techo** | Muy Alta | Exposición horizontal, máxima radiación |

**Coeficiente de Ganancia Solar (SHGC):**
- Ventanas claras: SHGC = 0.7-0.8 (alta ganancia)
- Ventanas low-e: SHGC = 0.3-0.4 (baja ganancia)
- Ventanas tintadas: SHGC = 0.2-0.3 (muy baja ganancia)

### 2. Envolvente del Edificio

**Valores U (Transmitancia Térmica):**

```
Mejor aislamiento → Menor valor U → Menor carga

Ejemplos:
Muro de concreto sin aislamiento: U = 3.5 W/m²K (malo)
Muro con 50mm de aislamiento: U = 0.6 W/m²K (bueno)
Muro con 100mm de aislamiento: U = 0.3 W/m²K (excelente)

Ventana simple: U = 5.8 W/m²K (malo)
Ventana doble (double glazing): U = 2.8 W/m²K (bueno)
Ventana triple con low-e: U = 1.0 W/m²K (excelente)
```

### 3. Ocupación

**Calor metabólico por persona:**

| Actividad | Calor Sensible | Calor Latente | Total |
|-----------|----------------|---------------|-------|
| Sentado, oficina | 70 W | 45 W | 115 W |
| Trabajo ligero | 75 W | 55 W | 130 W |
| Caminando (3 km/h) | 100 W | 150 W | 250 W |
| Ejercicio moderado | 175 W | 255 W | 430 W |

**Densidad de ocupación típica:**
- Oficinas: 0.10 personas/m² (10 m² por persona)
- Salas de conferencias: 0.50 personas/m² (2 m² por persona)
- Auditorios: 1.50 personas/m² (0.67 m² por persona)

### 4. Iluminación

**Carga de iluminación:**

```
Q_iluminación (W) = Potencia instalada (W/m²) × Área (m²) × Factor de uso × Factor de balasto

Factor de uso: 0.7-1.0 (porcentaje de luminarias encendidas)
Factor de balasto: 1.0 (LED), 1.2 (fluorescente)
```

**Densidades típicas:**
- Oficinas modernas (LED): 8-10 W/m²
- Oficinas tradicionales (fluorescente): 12-15 W/m²
- Retail/Comercio: 20-30 W/m²

### 5. Equipos Eléctricos

**Cargas de equipos típicos:**

```
Computadora de escritorio: 150-200 W
Laptop: 50-75 W
Monitor LED: 30-40 W
Impresora: 100-300 W
Servidor: 300-800 W
Fotocopiadora: 500-1500 W
```

**Densidad de potencia:**
- Oficinas: 10-15 W/m²
- Data centers: 200-500 W/m²
- Salas de servidores: 100-200 W/m²

### 6. Clima Exterior

**Temperatura de diseño exterior:**

Valores típicos (temperatura bulbo seco 0.4% ASHRAE):

| Ubicación | Verano (Cooling) | Invierno (Heating) |
|-----------|------------------|--------------------|
| Ciudad de México | 30°C | 3°C |
| Miami, FL | 33°C | 10°C |
| Phoenix, AZ | 43°C | 4°C |
| Nueva York, NY | 32°C | -12°C |
| Toronto, Canadá | 31°C | -18°C |

---

## 4. Cálculo de Cargas en Revit MEP

### Configurar Parámetros de Cálculo

**Paso 1: Building Information**

1. **Analyze tab → Energy & Analytical Model Settings → Building Information**

2. **Configurar ubicación:**
   - Location: Ciudad
   - Latitude/Longitude
   - Weather data file (.epw)

3. **Establecer condiciones de diseño:**
   - Summer design temperature (exterior)
   - Winter design temperature (exterior)

**Paso 2: Mechanical Settings**

1. **Analyze tab → Spaces & Zones → Mechanical Settings**

2. **Load Calculation Method:**
   - Cooling: RTS (Radiant Time Series)
   - Heating: Heat Loss

3. **Safety Factor:**
   - Típico 10-15% para incertidumbre

### Asignar Propiedades a Espacios

**Para cada espacio:**

1. **Seleccionar Space**
2. **Properties palette:**
   - **Occupancy:** personas/m² (ej: 0.10)
   - **Lighting Load Density:** W/m² (ej: 12)
   - **Power Load Density:** W/m² (ej: 15)
   - **Outdoor Air Per Person:** L/s/persona (ej: 10)

3. **Condiciones de diseño:**
   - **Cooling Design Temperature:** 24°C
   - **Heating Design Temperature:** 20°C

### Ejecutar Cálculo de Cargas

**Revit calcula automáticamente:**

Cuando asignas propiedades a espacios y zonas, Revit calcula en background:

- **Calculated Cooling Load** (por espacio, por zona)
- **Calculated Heating Load**
- **Calculated Supply Airflow** (basado en cargas)

**Ver resultados:**
- Properties de Space: Ver "Calculated Cooling Load"
- Properties de HVAC Zone: Ver carga total agregada
- Schedules: Crear tabla de espacios con cargas

### Crear Schedule de Cargas

**Paso a paso:**

1. **View tab → Create Schedule → Spaces**

2. **Seleccionar campos:**
   - Name
   - Number
   - Area
   - Volume
   - Occupancy
   - Lighting Load Density
   - Power Load Density
   - Calculated Cooling Load
   - Calculated Heating Load
   - Calculated Supply Airflow

3. **Formatting:**
   - Calculated Cooling Load: kW, 2 decimales
   - Calculated Heating Load: kW, 2 decimales
   - Airflow: L/s, 0 decimales

4. **Sorting:**
   - Sort by Calculated Cooling Load (descendente)
   - Identificar espacios con mayor demanda

5. **Totals:**
   - Calculate totals: ✓
   - Ver carga total del proyecto

---

## 5. Interpretación de Resultados

### Analizar Cargas por Espacio

**Ejemplo de resultados:**

```
Espacio: Oficina 101
Área: 15 m²
Ocupación: 0.10 personas/m² → 1.5 personas
Iluminación: 12 W/m² → 180 W
Equipos: 15 W/m² → 225 W

Calculated Cooling Load: 1.8 kW
Calculated Heating Load: 0.9 kW
Calculated Supply Airflow: 120 L/s
```

**Interpretación:**
- Carga enfriamiento mayor que calefacción (típico en climas cálidos)
- Caudal de 120 L/s necesario para remover 1.8 kW de calor
- Dimensionar difusor para ~120 L/s

### Analizar Cargas por Zona

**Ejemplo:**

```
HVAC Zone: Zona Norte - Piso 2
Número de espacios: 10
Área total: 250 m²

Calculated Cooling Load: 28 kW
Calculated Heating Load: 18 kW
Calculated Supply Airflow: 2800 L/s
```

**Decisiones de diseño:**
- Seleccionar VAV box de 3000 L/s (próximo tamaño estándar)
- Capacidad de enfriamiento: 30 kW (con margen)
- Reheat capacity (si necesario): 20 kW

### Identificar Espacios Críticos

**Buscar:**

1. **Espacios con carga extrema:**
   - Muy alta (data center, servidores): Requieren sistemas dedicados
   - Muy baja (bodegas): Posible no climatizar

2. **Desbalance cooling/heating:**
   - Alta cooling, baja heating: Zona con alta ganancia solar (fachada sur/oeste)
   - Alta heating, baja cooling: Zona norte, bien aislada

3. **Caudales inusuales:**
   - Caudal excesivo para área: Verificar densidades de carga
   - Caudal muy bajo: Verificar aire exterior mínimo (ventilación)

---

## 6. Ajuste y Optimización de Cargas

### Reducir Cargas de Enfriamiento

**Estrategias:**

1. **Mejorar envolvente:**
   - Incrementar aislamiento (reducir valor U)
   - Ventanas de alto rendimiento (bajo SHGC)
   - Sombreado exterior (overhangs, louvers)

2. **Reducir ganancias internas:**
   - Iluminación LED eficiente (reducir W/m²)
   - Equipos Energy Star
   - Controles de iluminación (sensores ocupación, daylight harvesting)

3. **Orientación y diseño arquitectónico:**
   - Minimizar área de ventanas en fachadas sur/oeste
   - Maximizar ventanas norte (luz natural sin ganancia solar)

### Reducir Cargas de Calefacción

**Estrategias:**

1. **Mejorar aislamiento:**
   - Incrementar espesor de aislamiento en muros, techo
   - Ventanas de triple vidrio con low-e

2. **Reducir infiltración:**
   - Mejor sellado de ventanas y puertas
   - Vestíbulos en entradas (air locks)

3. **Recuperación de calor:**
   - Heat recovery ventilators (HRV)
   - Recuperar calor de equipos/iluminación

### Balancear Cargas entre Zonas

**Objetivo:** Uniformidad de cargas

**Estrategias:**
- Redistribuir espacios de alta carga
- Ajustar orientación de zonas
- Igualar densidades de ocupación entre zonas

---

## 7. Reportes de Cálculo

### Generar Reporte de Cargas

**Opciones en Revit:**

1. **Heating and Cooling Loads Report:**
   - Analyze tab → Reports & Schedules → `Heating and Cooling Loads`
   - Genera reporte HTML con breakdown completo

2. **Space Report:**
   - Análisis detallado por espacio
   - Include: Ganancia solar, ocupantes, iluminación, equipos

3. **Export to Excel:**
   - Desde Schedule → Export → Excel
   - Permite análisis adicional, gráficos

### Contenido del Reporte Profesional

**Debe incluir:**

1. **Resumen ejecutivo:**
   - Carga total de enfriamiento (kW)
   - Carga total de calefacción (kW)
   - Caudal total de aire (L/s)

2. **Breakdown por zona:**
   - Tabla de zonas con cargas individuales

3. **Breakdown por espacio:**
   - Espacios críticos destacados

4. **Parámetros de diseño:**
   - Temperaturas exteriores
   - Condiciones interiores
   - Occupancy, lighting, equipment densities

5. **Metodología:**
   - ASHRAE RTS method
   - Safety factors aplicados

---

## 8. Ejercicio Práctico

### Calcular Cargas de Edificio de Oficinas (3 Pisos)

**Proyecto:**
```
Edificio: Torre de oficinas
Pisos: 3 niveles + azotea
Área por piso: 800 m² (40m × 20m)
Ubicación: Ciudad de México
Clima: Templado

Condiciones de diseño:
  - Exterior verano: 30°C (bulbo seco)
  - Exterior invierno: 3°C
  - Interior: 24°C (verano), 20°C (invierno)

Composición por piso:
  - Zona Norte (fachada vidrio 40%): 300 m², 30 personas
  - Zona Sur (fachada vidrio 40%): 300 m², 30 personas
  - Zona Interior (sin fachada): 200 m², 20 personas
```

**Tareas:**

1. **Configurar Building Information:**
   - Location: Ciudad de México
   - Importar weather file (.epw)
   - Design temperatures

2. **Configurar Mechanical Settings:**
   - Method: RTS (cooling), Heat Loss (heating)
   - Safety factor: 15%

3. **Asignar propiedades a espacios:**
   - **Zonas perimetrales (Norte/Sur):**
     - Occupancy: 0.10 personas/m²
     - Lighting: 12 W/m² (LED)
     - Power: 15 W/m² (equipos oficina)
     - Outdoor Air: 10 L/s/persona
   - **Zona Interior:**
     - Occupancy: 0.10 personas/m²
     - Lighting: 12 W/m²
     - Power: 15 W/m²

4. **Crear HVAC Zones (9 totales):**
   - P1-Norte, P1-Sur, P1-Interior
   - P2-Norte, P2-Sur, P2-Interior
   - P3-Norte, P3-Sur, P3-Interior

5. **Generar Schedule de Espacios mostrando:**
   - Name, Area, Occupancy, Lighting, Power
   - Calculated Cooling Load
   - Calculated Heating Load
   - Calculated Supply Airflow

6. **Analizar resultados:**
   - ¿Cuál zona tiene mayor carga de enfriamiento? (Probablemente Sur)
   - ¿Cuál tiene mayor carga de calefacción? (Probablemente Norte)
   - Carga total del edificio

7. **Dimensionar equipos:**
   - Calcular UMA central necesaria (suma de cargas)
   - Dimensionar VAV boxes por zona

8. **Generar reporte profesional:**
   - Heating and Cooling Loads Report
   - Export to Excel
   - Documentar metodología y resultados

**Entregables:**
- Schedule de espacios con cargas calculadas
- Schedule de HVAC Zones con totales por zona
- Reporte HTML de Heating and Cooling Loads
- Documento PDF analizando resultados y dimensionamiento de equipos
- Gráfico comparativo de cargas por zona

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Fundamentos** de cargas térmicas (cooling y heating, sensible y latente)
✅ **Metodologías ASHRAE** (RTS para cooling, heat loss para heating)
✅ **Factores clave** que afectan cargas (solar, envolvente, ocupación, equipos)
✅ **Cálculo en Revit MEP** mediante propiedades de espacios y zonas
✅ **Generación de schedules** de cargas para análisis
✅ **Interpretación de resultados** y identificación de espacios críticos
✅ **Optimización de cargas** mediante estrategias de diseño
✅ **Reportes profesionales** de cálculos de cargas

---

## Próxima Lección

**Lección 5: Análisis Energético y Reportes**

Aprenderás a realizar análisis energético completo en Revit MEP, interpretar reportes detallados de cargas, crear schedules avanzados y exportar datos analíticos para simulación energética en software especializado.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 3:** Análisis de Cargas Térmicas
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
