# Lección 3: Contactos y Sistemas de Fuerza

## Introducción

Los **contactos eléctricos** (receptáculos, tomacorrientes, outlets) son componentes esenciales que permiten conectar equipos portátiles y dispositivos a la red eléctrica. El diseño correcto de circuitos de contactos según NEC Article 210.52 asegura suficientes puntos de conexión, seguridad mediante GFCI donde requerido, y distribución eficiente de cargas.

Esta lección cubre tipos de contactos, spacing requirements según NEC, circuitos de fuerza, contactos dedicados para equipos, GFCI/AFCI protection, y cálculo de cargas de receptáculos.

## Tipos de Contactos (Receptáculos)

### Contactos Estándar (Standard Receptacles)

**15A, 125V - NEMA 5-15R:**
- Más común en Norteamérica
- Configuración: 2 polos + tierra (hot, neutral, ground)
- Voltaje: 120V monofásico
- Uso: Equipos generales de oficina, residencial

**20A, 125V - NEMA 5-20R:**
- Ranura en T horizontal (acepta plug 15A y 20A)
- Circuitos de cocina, taller
- Equipos hasta 1,920 VA (20A × 120V × 0.8)

**20A, 250V - NEMA 6-20R:**
- 240V monofásico (2 hot + ground, sin neutral)
- Aires acondicionados, equipos industriales

**30A, 125/250V - NEMA 14-30R:**
- 120/240V (2 hot + neutral + ground)
- Secadoras eléctricas residenciales

### Contactos Especiales

**GFCI (Ground Fault Circuit Interrupter):**
- Detecta fuga de corriente a tierra (> 5mA)
- Disparo en 25-40ms (protección contra electrocución)
- **NEC requiere en:**
  - Baños
  - Cocinas (contactos cerca de agua)
  - Exteriores
  - Garajes
  - Áreas húmedas

**AFCI (Arc Fault Circuit Interrupter):**
- Detecta arcos eléctricos (incendios)
- **NEC 210.12 requiere** en circuitos de dormitorios (residencial)

**USB Receptacles:**
- Contacto estándar + puertos USB (5V)
- Moderno en oficinas, hoteles
- Típicamente 2× USB ports + 2× AC outlets

**Floor Receptacles (Contactos de Piso):**
- Montados en piso (oficinas open-plan)
- Cover plate resistente a pisado
- Tipo: `Floor Box - 2-Gang - 20A`

**Weatherproof Receptacles (Exteriores):**
- Cover con gasket (sellado)
- Rated WR (Weather Resistant)
- GFCI integrado típicamente

## NEC Article 210.52 - Spacing Requirements

### Oficinas y Espacios Comerciales

**NEC 210.52(A) - Regla General:**

**Spacing máximo:** Un contacto cada **1.8m** (6 ft) medido horizontalmente a lo largo de la pared.

**O bien:** Ningún punto de la pared debe estar a más de **1.8m** (6 ft) del contacto más cercano.

**Ejemplo - Oficina 5m × 4m:**

```
Perímetro = 2 × (5 + 4) = 18m
Contactos requeridos = 18m / 1.8m = 10 contactos mínimo
```

**Distribución:**
- Pared 5m: 3 contactos
- Pared 4m: 2 contactos
- Pared 5m: 3 contactos
- Pared 4m: 2 contactos
- **Total:** 10 contactos

**Altura de montaje:**
- Estándar: **0.3m - 0.45m** sobre piso (12"-18")
- ADA (accesibilidad): Máximo 1.2m (48")

![Spacing de Contactos](../imagenes/mod3-receptacle-spacing.png)

### Cocinas Comerciales

**NEC 210.52(B)(3) - Countertops:**

**Spacing:** Contacto cada **0.6m** (24") en mesones/countertops.

**GFCI:** **Obligatorio** para contactos a menos de 1.8m de lavaplatos.

**Ejemplo - Cocina con mesón 4m:**
```
Contactos = 4m / 0.6m = 6.7 → 7 contactos
```

**Todos con GFCI protection.**

### Baños

**NEC 210.52(D):**

**Mínimo 1 contacto** dentro de 0.9m (3 ft) del borde exterior del lavamanos.

**GFCI:** **Obligatorio** todos los contactos en baños.

### Áreas Especiales

**Salas de Conferencia:**
- Floor boxes cada 3-4m (acceso central de mesa)
- 2-4 contactos por floor box

**Cubículos de Oficina:**
- 2 contactos por cubículo (mínimo)
- Mounted en panel de cubículo o floor box

**Data Centers / Server Rooms:**
- Contactos cada 1.2m (más denso que oficinas)
- Circuitos dedicados
- Típicamente 208V (no 120V) para PDUs

## Modelar Contactos en Revit

### Procedimiento Básico

**Paso 1: Colocar Receptacle**

1. **Systems** → **Electrical** → **Device**
2. **Type Selector:** `Duplex Receptacle - 20A - 120V`
3. En vista de plano, click en **muro**
4. Receptacle aparece en ubicación

**Paso 2: Configurar Properties**

**Electrical - Loads:**
- **Voltage:** `120V`
- **Apparent Load (VA):** `180 VA` (NEC estándar por receptacle)
- **Load Classification:** `Power`

**Electrical - Circuiting:**
- **Panel:** (vacant - asignar al crear circuito)
- **Circuit Number:** (vacant)

**Mechanical:**
- **Mounting:** `Wall`
- **Offset from Wall:** `0mm` (flush mount)
- **Elevation:** `450mm` (18" sobre piso)

![Contacto Modelado](../imagenes/mod3-receptacle-model.png)

### Array de Contactos (Spacing Automático)

**Escenario:** Distribuir contactos cada 1.8m en pared de 10m.

**Método 1 - Array Manual:**

1. Colocar primer contacto
2. **Modify** → **Array**
3. **Linear array:**
   - Number: `6` (10m / 1.8m ≈ 5.5 → 6)
   - Distance: `1800mm`
4. Click **OK**

**Método 2 - Dynamo Script (Avanzado):**
- Script personalizado lee longitud de muro
- Coloca contactos automáticamente cada 1.8m
- Ajusta altura según tipo de espacio

### Contactos Especiales - GFCI

**Paso 1: Crear Type GFCI**

1. Seleccionar receptacle estándar
2. **Edit Type** → **Duplicate**
3. Name: `GFCI Duplex Receptacle - 20A - 120V`
4. **Type Parameters:**
   - **Description:** `Ground Fault Circuit Interrupter`
   - **GFCI Protection:** `Yes` (custom parameter si disponible)

**Paso 2: Colocar en Baños/Cocinas**

1. **Type Selector:** `GFCI Duplex Receptacle`
2. Colocar en baños (cerca de lavamanos)
3. Colocar en cocinas (countertops)

**Identificación visual:**
- Agregar sufijo en Family Name: `- GFCI`
- Aparece en schedules diferenciado

## Circuitos de Contactos

### NEC 210.11(C)(3) - Receptacle Circuits

**Requisito:** Mínimo **2 circuitos de 20A** para receptáculos en cada cocina.

**Oficinas:** Típicamente 1 circuito por 10-15 contactos.

### Crear Circuito de Receptáculos

**Paso 1: Seleccionar Receptacles**

1. En vista de plano, seleccionar 12 contactos de zona
2. **Shift+Click** para multi-select

**Paso 2: Create Power**

1. **Modify | Electrical Devices** → **Power**
2. Select panel: `PP-1` (Power Panel)
3. Click **OK**

**Paso 3: Circuit Properties**

**Loads:**
- **Calculated Load:** `2,160 VA` (12 contactos × 180 VA)
- **Demand Factor:** `0.5` (NEC Table 220.44 - aplicar si > 10kVA total)

**Ejemplo con Demand Factor:**
```
Connected Load = 2,160 VA
Demand Factor = 0.5 (50% para receptacles > primeros 10kVA)
Demand Load = 2,160 × 0.5 = 1,080 VA
```

**Wire:**
- **Wire Size:** `#12 AWG` (suficiente)
- **Number of Conductors:** `3` (hot, neutral, ground)

**Protection:**
- **Rating:** `20A` (típico para receptacles)
- **Poles:** `1`

### Circuitos Dedicados

**Equipos que requieren circuito dedicado:**

**1. Refrigeración Comercial:**
- Refrigeradores walk-in
- Freezers
- **Circuit:** 20A dedicado (no compartir)

**2. Microondas (> 1,000W):**
- Típicamente 1,200-1,500W
- **Circuit:** 20A dedicado

**3. Equipos Médicos:**
- Monitores críticos
- Equipos de diagnóstico
- **Circuit:** Isolado, con ground dedicado

**4. Servidores / IT Equipment:**
- Racks de servidores
- Networking equipment
- **Circuit:** 20A dedicado por rack

**Modelado:**

**Load Name específico:**
- `Refrigerator - Walk-In - Dedicated 20A`
- `Server Rack A - Dedicated 20A`

**No conectar otras cargas** al mismo circuito.

## GFCI y AFCI Protection

### Ground Fault Protection

**Cómo funciona GFCI:**
- Mide corriente en hot y neutral
- Si difieren > 5mA (fuga a tierra) → Disparo instantáneo
- Protege contra **electrocución**

**Ubicaciones requeridas (NEC 210.8):**

**Comercial:**
- Baños
- Cocinas (contactos cerca de agua)
- Rooftops (equipos HVAC)
- Exteriores
- Sótanos
- Garajes

**Modelado en Revit:**

**Opción 1 - GFCI Receptacle:**
- Contacto con GFCI integrado
- Protege solo ese contacto

**Opción 2 - GFCI Breaker:**
- Breaker GFCI en panel
- Protege **todo el circuito** downstream
- Más económico para múltiples contactos

**En Circuit Properties:**
- **Ground Fault:** `Yes`
- Aparece en Panel Schedule: `Circuit 5 - GFCI`

### Arc Fault Protection

**AFCI (NEC 210.12):**
- Detecta arcos eléctricos peligrosos
- **Requerido:** Dormitorios residenciales (principalmente)
- Comercial: Menos común, pero recomendado en oficinas con equipos sensibles

**Modelado:**
- Similar a GFCI
- **Arc Fault:** `Yes` en circuit properties

## Cálculo de Cargas de Receptáculos

### Método NEC - 180 VA por Receptacle

**NEC 220.14(I):**

**General Use Receptacles:** Calcular **180 VA** por contacto.

**Ejemplo - Oficina con 40 contactos:**
```
Connected Load = 40 × 180 VA = 7,200 VA = 7.2 kVA
```

**Aplicar Demand Factor (NEC 220.44):**

**Primeros 10 kVA:** 100%
```
Demand = 7.2 kVA × 1.0 = 7.2 kVA (todos bajo 10kVA, no reduction)
```

**Si fueran 80 contactos:**
```
Connected = 80 × 180 = 14,400 VA = 14.4 kVA

Demand = (10 kVA × 1.0) + (4.4 kVA × 0.5)
Demand = 10 + 2.2 = 12.2 kVA
```

**Ahorro:** 14.4 - 12.2 = **2.2 kVA** (15% reducción)

### Equipos con Carga Conocida

**Si equipo tiene carga específica, usar valor real:**

**Ejemplo - Cafetera Comercial:**
- Rating: 1,800W (nameplate)
- **NO usar 180 VA** (muy bajo)
- Usar: **1,800 VA** en cálculo

**Servidor en Rack:**
- Rating: 450W por servidor
- 10 servidores = 4,500 VA
- **Demand Factor:** 1.0 (100% - equipos críticos siempre ON)

## Floor Boxes y Contactos de Piso

### Cuándo Usar Floor Boxes

**Indicado para:**
- Oficinas open-plan (sin muros)
- Salas de conferencia (centro de mesa)
- Espacios flexibles (reconfiguración frecuente)

**Ventajas:**
- Acceso desde cualquier punto
- No limita layout de mobiliario

**Desventajas:**
- Más costoso ($150-300 por box vs $15-30 por wall receptacle)
- Instalación requiere acceso bajo piso (raised floor o concrete embed)

### Modelar Floor Box

**Paso 1: Cargar Familia**

1. **Insert** → **Load Family**
2. Navegar: `Electrical\Devices\Floor Boxes\`
3. Seleccionar: `Floor Box - 2-Gang - 20A.rfa`
4. **Open**

**Paso 2: Colocar Floor Box**

1. **Systems** → **Electrical** → **Device**
2. **Type Selector:** `Floor Box - 2-Gang - 20A`
3. En vista de plano, click en ubicación deseada (ej. centro de sala de conferencia)
4. Floor box aparece

**Paso 3: Configurar**

**Properties:**
- **Voltage:** `120V`
- **Number of Receptacles:** `4` (2 dúplex)
- **Apparent Load:** `720 VA` (4 × 180 VA)
- **Mounting:** `Floor`

**Routing:** Desde floor box hacia panel (típicamente por piso falso o conduit embebido).

![Floor Box](../imagenes/mod3-floor-box.png)

## Balanceo de Cargas de Receptáculos

### Distribución entre Fases

**Ejemplo - Power Panel PP-1 con 36 contactos:**

**Connected Load:** 36 × 180 = 6,480 VA

**Distribución ideal:**
- Fase A: 12 contactos = 2,160 VA
- Fase B: 12 contactos = 2,160 VA
- Fase C: 12 contactos = 2,160 VA

**Asignar circuitos:**

| Circuit | Zone | Receptacles | VA | Phase |
|---------|------|-------------|-----|-------|
| 2 | East Wing | 12 | 2,160 | A |
| 4 | West Wing | 12 | 2,160 | B |
| 6 | North Area | 12 | 2,160 | C |

**Balance perfecto.**

### Verificar en Panel Schedule

**Panel Schedule muestra totals:**
- Phase A Power Loads: 2,160 VA
- Phase B Power Loads: 2,160 VA
- Phase C Power Loads: 2,160 VA

**Desbalanceo:** 0% (ideal)

## Mejores Prácticas

### 1. Separar Lighting y Power Panels

**No mezclar iluminación y contactos en mismo panel** (proyectos medianos/grandes).

**Ventajas:**
- Load classification clara
- Demand factors diferentes
- Troubleshooting más fácil

### 2. Contactos de Respaldo (Spare)

**Instalar 10-15% más contactos** que el mínimo NEC.

**Razón:** Futuras necesidades (equipos adicionales, reconfiguración).

**Costo adicional mínimo** (contactos baratos), gran flexibilidad.

### 3. Identificación de Circuitos

**En campo, etiquetar cover plates:**
- Sticker: `Panel PP-1, Circuit 4`
- Facilita troubleshooting sin tracer

**En Revit:**
- Load Name descriptivo en Panel Schedule

### 4. Dedicated Circuits para IT

**Equipos críticos (servidores, networking):**
- Circuito dedicado por rack
- **NO compartir** con iluminación u otros contactos
- Considerar **UPS** (ver Lección 4)

## Ejercicio Aplicado

**Ver:** Ejercicio 3 en `ejercicios.md` - Distribuir contactos en oficina open-plan 600m² según NEC, crear circuitos y balancear cargas.

---

**Próxima Lección:** Iluminación de Emergencia y Balanceo de Fases - Sistemas de respaldo, UPS, balanceo trifásico completo.
