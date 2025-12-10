# Lección 1: Sistemas de Iluminación y Análisis Lumínico

## Introducción

La **iluminación** es uno de los consumos eléctricos más significativos en edificios comerciales e industriales, representando típicamente el 25-40% de la carga total. El diseño correcto de sistemas de iluminación en Revit MEP 2026 permite optimizar niveles de iluminancia (lux/footcandles), reducir consumo energético, y verificar cumplimiento de códigos mediante **análisis lumínico** integrado.

Esta lección cubre tipos de luminarias, propiedades fotométricas, colocación estratégica, análisis de iluminación en Revit, y cumplimiento de estándares IES y ASHRAE 90.1.

## Conceptos de Iluminación

### Terminología Fundamental

**1. Flujo Luminoso (Lúmenes - lm)**
- Cantidad total de luz emitida por fuente
- Ejemplo: LED 18W = 1,800 lm; Incandescente 60W = 800 lm

**2. Iluminancia (Lux o Footcandles)**
- Cantidad de luz que llega a una superficie
- **Lux (lx):** lúmenes/m²
- **Footcandle (fc):** lúmenes/ft²
- Conversión: **1 fc = 10.76 lux**

**3. Luminancia (Candelas/m² - cd/m²)**
- Brillo percibido de una superficie
- Importante para reducir deslumbramiento

**4. Eficacia Luminosa (lm/W)**
- Eficiencia de la luminaria
- LED moderno: 100-150 lm/W
- Fluorescente: 60-100 lm/W
- Incandescente: 10-20 lm/W (muy ineficiente)

**5. Índice de Reproducción Cromática (CRI)**
- Capacidad de reproducir colores fielmente
- Escala: 0-100
- CRI > 80: Recomendado para oficinas
- CRI > 90: Requerido para retail, arte

**6. Temperatura de Color (Kelvin - K)**
- 2700K: Blanco cálido (residencial)
- 3000K: Blanco neutro (hoteles, hospitality)
- 4000K: Blanco frío (oficinas)
- 5000K-6500K: Luz día (industrial, retail)

## Tipos de Luminarias

### 1. Luminarias Empotradas (Recessed)

**Troffer 2×4 (60cm × 120cm):**
- Uso: Oficinas, escuelas, hospitales
- Montaje: Empotrado en cielo raso suspendido
- Tecnología: LED, T8 fluorescente
- Potencia típica: 28W-45W LED
- Flujo: 3,000-5,500 lm

**Downlight (Can Light):**
- Uso: Pasillos, baños, retail
- Diámetros: 4", 6", 8" (100mm, 150mm, 200mm)
- LED: 10W-25W
- Ajustable o fijo

### 2. Luminarias Suspendidas (Pendant)

**High Bay (Campana Industrial):**
- Uso: Almacenes, fábricas, gimnasios
- Altura de montaje: 6m-15m
- Potencia: 100W-400W LED
- Flujo: 15,000-50,000 lm

**Linear Pendant (Lineal Suspendida):**
- Uso: Oficinas modernas, retail
- Longitudes: 1.2m, 2.4m, 3.6m
- LED: 30W-80W por metro
- Estética + funcionalidad

### 3. Luminarias de Pared (Wall-Mounted)

**Sconce (Aplique):**
- Uso: Pasillos, escaleras, decorativo
- Potencia: 8W-20W LED
- Luz directa, indirecta o ambas

**Wall Pack (Exterior):**
- Uso: Exteriores, estacionamientos
- LED: 20W-80W
- Con fotocélula (auto on/off)

### 4. Luminarias de Emergencia

**Exit Sign (Señal de Salida):**
- LED: 2W-5W
- Batería respaldo: 90 min mínimo
- Verde o rojo según país

**Emergency Light (Iluminación de Emergencia):**
- LED: 2× 5W heads
- Batería: 90 min @ 1 lux mínimo
- Auto-test mensual

## Colocar Luminarias en Revit

### Procedimiento Básico

**Paso 1: Cargar Familia de Luminaria**

1. **Insert** → **Load Family**
2. Navegar a: `Lighting\Architectural\`
3. Seleccionar: `Troffer - 2x4 - 2 Lamp.rfa`
4. **Open**

**Paso 2: Colocar Luminaria**

1. **Systems** → **Electrical** → **Lighting Fixture**
2. **Type Selector:** `Troffer - 2x4 - 2 Lamp: 40W LED - 120V`
3. En vista de plano (ceiling plan), click para colocar
4. Luminaria aparece en ubicación

**Paso 3: Configurar Propiedades**

Seleccionar luminaria → **Properties:**

**Electrical - Loads:**
- **Voltage:** `120V`
- **Apparent Load (VA):** `40 VA` (40W para LED)
- **Load Classification:** `Lighting`

**Electrical - Circuiting:**
- **Panel:** (vacant - se asigna al crear circuito)
- **Circuit Number:** (vacant)

**Photometrics (Propiedades Lumínicas):**
- **Luminous Intensity:** `4,000 lumens`
- **Color Temperature:** `4000K` (blanco frío oficina)
- **CRI:** `82`

![Luminaria Colocada](../imagenes/mod3-luminaria-placement.png)

### Colocación en Grid (Array)

**Escenario:** Oficina open-plan 20m × 15m, requiere grid de luminarias.

**Paso 1: Calcular Spacing**

**Regla general:** Spacing ≤ 1.5× altura de montaje

- Altura de techo: 3.0m
- Altura de trabajo: 0.75m (escritorio)
- Altura efectiva: 3.0 - 0.75 = **2.25m**
- **Spacing máximo:** 2.25 × 1.5 = **3.38m**

**Usar spacing:** **2.4m** (spacing estándar, múltiplo conveniente)

**Paso 2: Array de Luminarias**

**Método A - Modificar → Array:**

1. Colocar una luminaria
2. Seleccionar luminaria
3. **Modify** → **Array**
4. **Array** dialog:
   - **Linear** array
   - **Number:** `9` (20m / 2.4m ≈ 8.3 → redondear a 9)
   - **Move To:** `2nd` y `Last`
   - **Distance:** `2400mm`
5. Click **OK** → Fila de 9 luminarias

6. Seleccionar las 9 luminarias
7. **Array** nuevamente (perpendicular):
   - **Number:** `7` (15m / 2.4m ≈ 6.25 → redondear a 7)
   - **Distance:** `2400mm`
   - **Perpendicular** a primera fila
8. Click **OK** → Grid 9×7 = **63 luminarias**

**Método B - Component → Repeat:**

1. **Architecture** → **Component** → **Place Component**
2. Seleccionar luminaria
3. **Options Bar:** **Multiple**
4. Click para colocar en grid manualmente (más control)

![Grid de Luminarias](../imagenes/mod3-luminarias-grid.png)

## Análisis de Iluminación

### Configurar Análisis en Revit

**Paso 1: Habilitar Análisis de Iluminación**

1. **View** → **Visibility/Graphics**
2. **Annotation Categories** tab
3. ☑ **Lighting Analysis**
4. Click **OK**

**Paso 2: Definir Workplane de Análisis**

El análisis se realiza en un **plano horizontal** (típicamente altura de escritorio).

1. **View** → **Create** → **Work Plane**
2. **Work Plane** dialog:
   - **Name:** `Illuminance @ 0.75m`
   - **Offset:** `750mm` sobre el piso (altura de escritorio)
3. **Apply** → **OK**

**Paso 3: Configurar Settings de Análisis**

1. **Analyze** → **Lighting Analysis** → **Lighting Analysis Settings**
2. **Lighting Analysis Settings** dialog:

**Analysis Type:**
- ☑ **Illuminance** (lux o footcandles en plano horizontal)

**Units:**
- **Metric:** Lux (lx)
- **Imperial:** Footcandles (fc)

**Display:**
- **Show as:** `Color Fill` (mapa de calor)
- **Color Scheme:** `Rainbow` (azul=bajo, rojo=alto)
- **Range:**
  - Min: `0 lux`
  - Max: `1000 lux`

**Calculation Settings:**
- **Grid Size:** `0.5m × 0.5m` (resolución del análisis)
- Más fino = más preciso, pero más lento

3. Click **OK**

**Paso 4: Ejecutar Análisis**

1. **Analyze** → **Lighting Analysis** → **Run Analysis**
2. Revit calcula (10-60 segundos según complejidad)
3. **Resultado:** Mapa de colores aparece en vista

![Análisis de Iluminación](../imagenes/mod3-lighting-analysis-map.png)

**Interpretación del Mapa:**
- **Azul/Verde:** < 300 lux (bajo - insuficiente para oficinas)
- **Amarillo:** 300-500 lux (adecuado para oficinas)
- **Naranja/Rojo:** > 500 lux (alto - posible sobre-iluminación)

### Verificar Cumplimiento de Códigos

**IES (Illuminating Engineering Society) Recommendations:**

| Tipo de Espacio | Iluminancia Recomendada | Uso |
|------------------|-------------------------|-----|
| **Oficinas (tareas generales)** | 300-500 lux (30-50 fc) | Lectura, escritura, computadora |
| **Oficinas (tareas detalladas)** | 500-750 lux (50-75 fc) | Dibujo técnico, diseño |
| **Pasillos/Circulación** | 100-200 lux (10-20 fc) | Tránsito seguro |
| **Baños** | 150-200 lux (15-20 fc) | Higiene personal |
| **Salones de clase** | 300-500 lux (30-50 fc) | Educación |
| **Retail (general)** | 500-1000 lux (50-100 fc) | Mostrar productos |
| **Industrial (ensamblaje)** | 500-1000 lux (50-100 fc) | Trabajo de precisión |
| **Almacenes** | 100-300 lux (10-30 fc) | Almacenamiento |

**Verificación en Revit:**

1. **Lighting Analysis** → **Legend**
2. Verificar que áreas de trabajo (escritorios) muestran **300-500 lux**
3. Si hay zonas < 300 lux → Agregar luminarias o aumentar potencia
4. Si hay zonas > 750 lux → Reducir luminarias (ahorro energético)

### Análisis de Uniformidad

**Objetivo:** Evitar variaciones bruscas de iluminación (incomodidad visual).

**Ratio de Uniformidad:**
```
U = Lux_mínimo / Lux_promedio

Recomendado: U ≥ 0.7 (oficinas)
```

**Ejemplo:**
- Lux mínimo en área: 320 lux
- Lux promedio: 450 lux
- U = 320 / 450 = **0.71** ✓ (aceptable)

**Si U < 0.7:**
- Reducir spacing entre luminarias
- Usar luminarias con mejor distribución lumínica

## Eficiencia Energética - ASHRAE 90.1

### Lighting Power Density (LPD)

**Definición:** Potencia de iluminación por unidad de área.

**Fórmula:**
```
LPD = Total Wattage / Floor Area (W/m² o W/ft²)
```

**ASHRAE 90.1 Limits (W/m²):**

| Tipo de Espacio | LPD Máximo (W/m²) | LPD Máximo (W/ft²) |
|------------------|-------------------|-------------------|
| **Oficinas** | 9.7 | 0.9 |
| **Salones de clase** | 12.9 | 1.2 |
| **Retail** | 14.1 | 1.3 |
| **Almacenes** | 7.5 | 0.7 |
| **Pasillos** | 5.4 | 0.5 |

### Calcular LPD en Revit

**Paso 1: Lighting Schedule**

1. **View** → **Schedules** → **Schedule/Quantities**
2. Category: **Lighting Fixtures**
3. Name: `Lighting Power Density Analysis`

**Paso 2: Agregar Campos**

- **Level**
- **Room** (si aplicable)
- **Family and Type**
- **Apparent Load (VA)** (= Wattage para lighting)
- **Count** (número de luminarias de ese tipo)

**Paso 3: Calculated Field - Total Wattage**

1. **Calculated Value** button
2. Name: `Total Wattage`
3. Formula: `Apparent Load × Count`
4. Type: **Number**

**Paso 4: Calcular LPD**

**Schedule output:**

| Level | Room | Type | VA | Count | Total Wattage |
|-------|------|------|-----|-------|---------------|
| Level 1 | Open Office | Troffer 2x4 LED 40W | 40 | 63 | 2,520 W |
| Level 1 | Conference | Downlight 15W | 15 | 12 | 180 W |
| Level 1 | Corridor | Linear LED 25W | 25 | 8 | 200 W |
| **Total Level 1** | | | | **83** | **2,900 W** |

**Área del Level 1:** 300 m²

**LPD:**
```
LPD = 2,900 W / 300 m² = 9.67 W/m²
```

**ASHRAE 90.1 Limit (Oficinas):** 9.7 W/m²

**Verificación:** 9.67 < 9.7 ✓ **CUMPLE**

**Si NO cumple:**
- Reemplazar luminarias por más eficientes (mayor lm/W)
- Reducir número de luminarias (si iluminancia lo permite)
- Usar controles (dimming, sensores de ocupación)

## Controles de Iluminación

### Tipos de Controles

**1. Manual Switches (Interruptores)**
- Switch por zona
- Típicamente 1 switch por 100-200 m²

**2. Occupancy Sensors (Sensores de Ocupación)**
- PIR (Passive Infrared) - Detecta movimiento
- Ultrasonic - Detecta presencia (más sensible)
- Auto-off después de X minutos sin ocupación
- **ASHRAE 90.1 requiere** en espacios < 100 m²

**3. Daylight Sensors (Sensores de Luz Natural)**
- Dimming automático cuando hay luz natural
- Ahorro 20-40% en perimetral con ventanas

**4. Time Schedules (Programación Horaria)**
- Apagado automático fuera de horario laboral
- Override manual temporal

**Modelado en Revit:**

1. **Device** → **Switch**
2. Colocar switch en muro
3. Asociar con circuito de iluminación (visual, no funcional en Revit)

## Mejores Prácticas

### 1. Zoning de Iluminación

**No crear circuito único para toda la oficina.**

**Mejor práctica:**
- Zona perimetral (cerca de ventanas) - 1 circuito
- Zona interior - circuito separado
- Permite dimming diferencial con daylight harvesting

### 2. Selecting LED Over Fluorescent

**Ventajas LED:**
- Mayor eficacia (100-150 lm/W vs 60-100 lm/W)
- Vida útil: 50,000 horas vs 15,000 horas
- Sin mercurio (eco-friendly)
- Dimming superior

**ROI típico:** 2-4 años (ahorro en energía + mantenimiento)

### 3. Emergency Lighting Placement

**NEC 700.16 + NFPA 101:**
- Iluminación de emergencia en **rutas de egreso**
- Mínimo **1 lux** (0.1 fc) durante 90 minutos
- Spacing típico: Emergency lights cada 10-15m en pasillos

### 4. Verificar Glare (Deslumbramiento)

**UGR (Unified Glare Rating):**
- UGR < 19: Oficinas (recomendado)
- UGR < 22: Aceptable para tareas generales

**Revit NO calcula UGR directamente**, usar software especializado (DIALux, AGi32) para análisis detallado.

## Ejercicio Aplicado

**Ver:** Ejercicio 1 en `ejercicios.md` - Diseñar layout de iluminación para oficina 400m² con análisis lumínico y verificación ASHRAE 90.1.

---

**Próxima Lección:** Circuitos de Iluminación - Switching, control por zonas y routing.
