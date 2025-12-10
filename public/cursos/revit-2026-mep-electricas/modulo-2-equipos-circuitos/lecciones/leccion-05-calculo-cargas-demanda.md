# Lección 5: Cálculo de Cargas y Factores de Demanda

## Introducción

El **cálculo correcto de cargas eléctricas** es fundamental para dimensionar panelboards, feeders, transformadores y servicio de acometida. En instalaciones reales, **NO todas las cargas operan simultáneamente al 100%**, por lo que aplicar **factores de demanda** (demand factors) según NEC Article 220 permite diseños más económicos y seguros.

Esta lección cubre cálculo de **cargas conectadas vs demandadas**, aplicación de demand factors según NEC, balanceo de cargas entre fases, y uso de schedules de Revit para análisis completo de carga.

## Terminología de Cargas

### Carga Conectada (Connected Load)

**Definición:** Suma total de **todas** las cargas que **podrían** operar si todas se encendieran simultáneamente.

**Ejemplo - Panel LP-1:**
- 40 luminarias × 40W = 1,600 VA
- 20 contactos × 180 VA = 3,600 VA
- 1 equipo HVAC = 5,000 VA
- **Connected Load Total:** 10,200 VA

**Uso:** Punto de partida para cálculos, pero **sobredimensiona** el sistema si se usa directamente.

### Carga Demandada (Demand Load)

**Definición:** Carga **real esperada** considerando que no todo opera simultáneamente.

**Ejemplo - Mismo panel:**
- Iluminación: 1,600 VA × **1.0** = 1,600 VA (100% demand - continua)
- Contactos: 3,600 VA × **0.5** = 1,800 VA (50% demand - NEC Table 220.44)
- HVAC: 5,000 VA × **1.0** = 5,000 VA (100% demand - carga crítica)
- **Demand Load Total:** 8,400 VA

**Ahorro:** 10,200 - 8,400 = **1,800 VA** (18% reducción)

**Uso:** Base para dimensionamiento real de panelboards, feeders, transformers.

### Carga Continua vs No-Continua

**Continuous Load (Carga Continua):**
- Opera **3+ horas consecutivas**
- Ejemplos: Iluminación, HVAC, refrigeración
- **NEC 210.20(A):** Requiere **125%** factor de seguridad en protección

**Non-Continuous Load:**
- Opera < 3 horas
- Ejemplos: Secadores de pelo, herramientas eléctricas temporales
- 100% factor (no requiere upsizing)

## NEC Article 220 - Demand Factors

### Table 220.12 - Iluminación General

**Demand por tipo de ocupación:**

| Tipo de Ocupación | VA/m² (VA/ft²) |
|-------------------|----------------|
| **Oficinas** | 11 (1.0) |
| **Comercios** | 16 (1.5) |
| **Escuelas** | 11 (1.0) |
| **Hoteles (habitaciones)** | 22 (2.0) |
| **Almacenes** | 2.7 (0.25) |
| **Residencial** | 33 (3.0) |

**Cálculo:**
```
Lighting VA = Área (m²) × VA/m²
```

**Ejemplo - Oficina 500 m²:**
```
Lighting VA = 500 m² × 11 VA/m² = 5,500 VA
```

**Demand Factor:** **100%** (NEC no permite reducción para iluminación general comercial)

### Table 220.44 - Receptáculos (Contactos)

**Demand factors para receptáculos:**

| Connected Load | Demand Factor |
|----------------|---------------|
| Primeros **10 kVA** | **100%** |
| Exceso sobre 10 kVA | **50%** |

**Ejemplo:**
- 50 contactos × 180 VA = 9,000 VA = 9 kVA
- Todos bajo 10 kVA → **Demand = 9 kVA × 1.0 = 9 kVA**

**Ejemplo 2:**
- 100 contactos × 180 VA = 18,000 VA = 18 kVA
- Demand = (10 kVA × 1.0) + (8 kVA × 0.5) = 10 + 4 = **14 kVA**

### Table 220.56 - Cocinas Comerciales

**Kitchen Equipment Demand Factors:**

| Number of Equipment Pieces | Demand Factor |
|-----------------------------|---------------|
| 1 | 100% |
| 2 | 100% |
| 3 | 90% |
| 4-5 | 80% |
| 6+ | 65% |

**Ejemplo - Cocina con 6 equipos:**
- Estufa: 12 kW
- Horno: 8 kW
- Freidora: 10 kW
- Plancha: 6 kW
- Campana: 2 kW
- Lavaplatos: 4 kW
- **Connected:** 42 kW

**Demand:**
```
42 kW × 0.65 = 27.3 kW
```

**Ahorro:** 14.7 kW (35% reducción)

### Article 220.87 - Método Opcional (Opcional)

**Para edificios completos**, demand factors adicionales:

| Carga Total Conectada | Demand Factor |
|-----------------------|---------------|
| Primeros 10 kVA | 100% |
| Siguientes 125 kVA | 50% |
| Exceso sobre 135 kVA | 25% |

**Uso:** Cálculo de servicio de acometida principal (utility service).

## Cálculo de Cargas en Revit

### Panel Schedule Loads

**Revit calcula automáticamente:**

1. **Connected Load:** Suma de todas las cargas en circuitos
2. **Demand Load:** Connected Load × Demand Factor (manual)
3. **Total Load per Phase:** Distribución A, B, C

### Configurar Demand Factors Manualmente

**Paso 1: Abrir Panel Schedule**

1. **Project Browser** → **Panel Schedules** → `LP-1`

**Paso 2: Agregar Columna Demand Factor**

1. **Modify Panel Schedule** → **Template Properties**
2. **Columns** tab → ☑ **Demand Factor**
3. Click **OK**

**Panel Schedule ahora muestra:**

| Circuit | Load Name | Phase | Connected (VA) | Demand Factor | Calculated (VA) |
|---------|-----------|-------|----------------|---------------|-----------------|
| 1 | Office Lighting | A | 1,600 | 1.0 | 1,600 |
| 3 | Receptacles - East | B | 3,600 | 0.5 | 1,800 |
| 5 | HVAC Control | C | 500 | 1.0 | 500 |

**Paso 3: Ingresar Demand Factors**

Para cada circuito, click en celda **Demand Factor** e ingresar:
- Iluminación: `1.0`
- Receptáculos: `0.5` (si > 10kVA total) o `1.0` (si < 10kVA)
- HVAC: `1.0`
- Equipos: Según NEC table correspondiente

**Calculated Load actualiza automáticamente:**
```
Calculated (VA) = Connected (VA) × Demand Factor
```

### Panel Schedule Totals

**Al final del Panel Schedule, Revit muestra:**

**Total Connected Load:**
- Phase A: 8,500 VA
- Phase B: 9,200 VA
- Phase C: 7,800 VA
- **Grand Total:** 25,500 VA

**Total Demand Load:**
- Phase A: 6,800 VA
- Phase B: 7,400 VA
- Phase C: 6,200 VA
- **Grand Total:** 20,400 VA

**Panel Rating Required:**
```
I_max = Demand Load / Voltage
I_max = 7,400 VA / 120V = 61.7 A (fase crítica B)

With 125% safety factor:
61.7 × 1.25 = 77.1 A
```

**Panel Selection:** **100A panel** (siguiente estándar)

## Balanceo de Cargas entre Fases

### Objetivo del Balanceo

**Sistema trifásico ideal:** Cargas distribuidas equitativamente entre fases A, B, C.

**Beneficios:**
- Minimiza corriente en neutro
- Reduce pérdidas
- Evita sobrecarga de una fase

**Desbalanceo aceptable:** Típicamente **< 10%** entre fase máxima y mínima.

### Calcular Desbalanceo

**Fórmula:**
```
%Desbalanceo = [(I_max - I_min) / I_avg] × 100

Donde:
I_max = Corriente de fase máxima
I_min = Corriente de fase mínima
I_avg = Promedio de las tres fases
```

**Ejemplo:**
- Fase A: 50 A
- Fase B: 65 A (máxima)
- Fase C: 45 A (mínima)

```
I_avg = (50 + 65 + 45) / 3 = 53.3 A
%Desbalanceo = [(65 - 45) / 53.3] × 100 = 37.5%
```

**37.5% = ALTO desbalanceo** → Requiere re-balanceo.

### Re-Balancear Circuitos

**Paso 1: Identificar Fase Sobrecargada**

En Panel Schedule, fase B tiene mayor carga.

**Paso 2: Mover Circuitos**

**Opción A - En Panel Schedule:**
1. Click en celda **Phase** del circuito sobrecar gado en fase B
2. Cambiar de `B` a `C` (fase con menor carga)
3. Revit recalcula totales automáticamente

**Opción B - En Model:**
1. Seleccionar circuito en vista
2. **Properties** → **Phase:** Cambiar de `B` a `C`

**Paso 3: Verificar Nuevo Balance**

**Después de reasignar circuitos:**
- Fase A: 52 A
- Fase B: 54 A
- Fase C: 54 A

```
I_avg = (52 + 54 + 54) / 3 = 53.3 A
%Desbalanceo = [(54 - 52) / 53.3] × 100 = 3.75% ✓
```

**3.75% = Aceptable** (< 10%).

## Schedules de Análisis de Carga

### Equipment Schedule con Totals

**Paso 1: Crear Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. Category: **Electrical Equipment**
3. Name: `Electrical Load Analysis`

**Paso 2: Agregar Campos**

- Panel Name
- Load Classification
- Distribution System
- **Calculated Load (VA)**
- **Connected Load (VA)**
- **Demand Factor** (si disponible)

**Paso 3: Habilitar Totales**

En **Formatting** tab, para campos de carga:
- ☑ **Calculate totals**

**Paso 4: Agrupar por Nivel**

**Sorting/Grouping:**
- Group by: `Level`
- ☑ **Itemize every instance**
- ☑ **Grand totals**

**Schedule Output:**

```
LEVEL 1
  LP-1 | Lighting | 208Y/120V | Connected: 12,500 VA | Demand: 10,000 VA
  PP-1 | Power | 208Y/120V | Connected: 18,000 VA | Demand: 12,000 VA
  Subtotal Level 1: Connected: 30,500 VA | Demand: 22,000 VA

LEVEL 2
  LP-2 | Lighting | 208Y/120V | Connected: 13,200 VA | Demand: 10,560 VA
  PP-2 | Power | 208Y/120V | Connected: 16,500 VA | Demand: 11,250 VA
  Subtotal Level 2: Connected: 29,700 VA | Demand: 21,810 VA

GRAND TOTAL:
  Connected: 60,200 VA
  Demand: 43,810 VA
```

**Uso:** Dimensionar transformer o servicio de acometida principal.

## Diversity Factor vs Demand Factor

### Demand Factor

**Ya cubierto:** Porcentaje de connected load que se usa (0.5 = 50%).

### Diversity Factor

**Definición:** Relación entre **suma de demandas individuales** y **demanda simultánea máxima**.

**Fórmula:**
```
Diversity Factor = Σ(Individual Max Demands) / Coincident Max Demand
```

**Ejemplo - 10 apartamentos:**
- Cada apartamento: 8 kW demand individual (pico)
- Total si todos usan 8 kW simultáneamente: 80 kW
- **Pero:** Realidad = Solo 55 kW máximo simultáneo (no todos usan pico al mismo tiempo)

```
Diversity Factor = 80 kW / 55 kW = 1.45
```

**Interpretación:** Feeder puede dimensionarse para 55 kW (no 80 kW) → Ahorro.

**Uso en Revit:**
Aplicar diversity factor **manualmente** al calcular feeders que alimentan múltiples panelboards.

**Ejemplo:**
- 5 panelboards, cada uno con 20 kVA demand
- Suma: 100 kVA
- Diversity factor: 1.3
- **Feeder demand:** 100 kVA / 1.3 = **76.9 kVA**

## Mejores Prácticas

### 1. Documentar Demand Factors Aplicados

**En Panel Schedule, agregar notas:**

**Load Name:**
- `Receptacles - East (50% DF per NEC 220.44)`

**Comments column:**
- `Continuous load - 125% factor applied`

**Beneficio:** Trazabilidad para inspectores/revisores.

### 2. Reservar Capacidad Futura

**No dimensionar al 100% de demand load.**

**Regla general:** Panelboards/feeders al **80% de capacidad** en operación normal.

**Ejemplo:**
- Demand load actual: 60 kVA
- Transformer size: 60 / 0.8 = **75 kVA** (permite 15 kVA growth)

### 3. Separate Panels por Load Type

**En lugar de panel "general":**

**Mejor práctica:**
- `LP-1`: Solo iluminación
- `PP-1`: Solo receptáculos
- `HP-1`: Solo HVAC

**Beneficios:**
- Demand factors más claros
- Balanceo más fácil
- Troubleshooting simplificado

### 4. Verificar con Utility Requirements

**Cada utility company tiene requisitos propios:**
- Demand factors aceptados
- Load calculations method
- Service entrance sizing

**Consultar antes de finalizar diseño.**

## Ejercicio Aplicado

**Ver:** Ejercicio 5 en `ejercicios.md` - Calcular cargas completas de edificio de 3 pisos aplicando NEC demand factors y dimensionar transformer principal.

---

## Conclusión del Módulo 2

Este módulo completó el diseño de **sistemas de distribución eléctrica**:

1. ✅ Tableros de distribución (panelboards) configurados profesionalmente
2. ✅ Switchboards y equipos principales modelados
3. ✅ Transformadores y subestaciones con cálculos completos
4. ✅ Circuitos eléctricos con routing mejorado 2026
5. ✅ Cálculo profesional de cargas y demand factors (NEC Article 220)

**Próximo Módulo:** Iluminación y Sistemas de Fuerza - Diseño de circuitos de iluminación, análisis lumínico y balanceo de fases.

---

**DISTMAH Universidad Autodesk - Revit MEP 2026 Eléctricas**
