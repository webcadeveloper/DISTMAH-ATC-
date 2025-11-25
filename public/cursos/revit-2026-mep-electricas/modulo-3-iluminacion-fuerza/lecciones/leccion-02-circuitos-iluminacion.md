# Lección 2: Circuitos de Iluminación

## Introducción

Los **circuitos de iluminación** conectan múltiples luminarias a un panelboard, permitiendo distribución eficiente de energía y control por zonas. El diseño correcto de circuitos de iluminación optimiza calibres de conductores, reduce costos de instalación, y facilita operación mediante switching inteligente.

Esta lección cubre diseño de circuitos multi-luminaria, cálculo de capacidad por circuito según NEC, switching por zonas, control de iluminación, y routing eficiente de circuitos.

## Diseño de Circuitos de Iluminación

### NEC Article 210 - Branch Circuits

**Reglas fundamentales:**

**210.23(A) - Permissible Loads:**
- Circuito **20A** puede alimentar **múltiples luminarias**
- Circuito **15A** puede alimentar **múltiples luminarias**
- Carga total NO debe exceder **80%** de rating para cargas continuas

**Cálculo de capacidad:**

**Circuito 20A @ 120V:**
```
Capacidad máxima = 20A × 120V × 0.8 = 1,920 VA
```

**Circuito 15A @ 120V:**
```
Capacidad máxima = 15A × 120V × 0.8 = 1,440 VA
```

### Calcular Luminarias por Circuito

**Ejemplo - Oficina con Troffers LED 40W:**

**Potencia por luminaria:** 40 VA

**Circuito 20A:**
```
Número máximo = 1,920 VA / 40 VA = 48 luminarias
```

**Consideración práctica:**
- Usar **máximo 40 luminarias** por circuito (margen de seguridad)
- Facilita troubleshooting (circuitos más pequeños)

**Circuito 15A:**
```
Número máximo = 1,440 VA / 40 VA = 36 luminarias
```

**Uso típico:** 15-25 luminarias por circuito (oficinas)

## Crear Circuito de Iluminación en Revit

### Procedimiento Completo

**Escenario:** Conectar 20 luminarias LED 40W a panel `LP-1`.

**Paso 1: Seleccionar Luminarias**

1. En vista de plano (ceiling plan)
2. **Shift+Click** para seleccionar 20 luminarias de zona específica
3. Ejemplo: Luminarias en zona "East Wing"

**Paso 2: Crear Circuito**

1. **Modify | Lighting Fixtures** → **Power**
2. **Select Panel** dialog → Seleccionar `LP-1`
3. Click **OK**

**Paso 3: Configurar Circuit Properties**

**Circuit Properties** dialog:

**Circuiting:**
- **Circuit Number:** `1` (Revit asigna automáticamente)
- **Panel:** `LP-1`
- **Circuit Type:** `Branch` (automático para lighting)

**Loads:**
- **Apparent Load (VA):** `800 VA` (20 × 40W)
- **Demand Factor:** `1.0` (100% - iluminación es carga continua)
- **Load Classification:** `Lighting`

**Wire:**
- **Wire Size:** `#12 AWG` (automático - suficiente para 800VA @ 120V = 6.67A)
- **Number of Conductors:** `3` (hot, neutral, ground)
- **Wire Type:** `THHN`

**Protection:**
- **Rating:** `20A`
- **Poles:** `1` (monofásico 120V)

4. Click **OK**

**Resultado:**
- Circuito creado
- Líneas conectando luminarias → panel
- **Panel Schedule** actualizado:
  - Circuit 1: `East Wing Lighting - 20 Fixtures - 800 VA - Phase A`

![Circuito de Iluminación](../imagenes/mod3-lighting-circuit.png)

## Estrategias de Zoning

### Zoning por Área Física

**División lógica del espacio:**

**Oficina Open-Plan 600m² con 80 luminarias:**

**Zona 1 - East Wing (20 luminarias):**
- Circuit 1: Luminarias 1-20
- Panel: LP-1, Circuit 1
- Switch: SW-1 (control de zona)

**Zona 2 - West Wing (20 luminarias):**
- Circuit 2: Luminarias 21-40
- Panel: LP-1, Circuit 3
- Switch: SW-2

**Zona 3 - North Area (20 luminarias):**
- Circuit 3: Luminarias 41-60
- Panel: LP-1, Circuit 5
- Switch: SW-3

**Zona 4 - South Area (20 luminarias):**
- Circuit 4: Luminarias 61-80
- Panel: LP-1, Circuit 7
- Switch: SW-4

**Beneficio:**
- Control independiente por zona
- Apagar zonas no ocupadas → ahorro energético
- Troubleshooting fácil

### Zoning por Tipo de Iluminación

**Ejemplo - Retail Store:**

**Circuito 1 - Iluminación General:**
- Downlights en techo
- Siempre encendido durante horario de operación

**Circuito 2 - Iluminación de Acentuación:**
- Track lights sobre displays
- Control separado para destacar productos

**Circuito 3 - Iluminación Decorativa:**
- Pendant lights, chandeliers
- Dimming para ambiente

**Circuito 4 - Iluminación de Seguridad:**
- Luminarias en áreas de circulación
- Alimentado por circuito de emergencia

### Perimeter vs Core Zoning

**Estrategia para ahorro energético:**

**Zona Perimetral (5m desde ventanas):**
- Circuitos separados
- Conectar a **daylight sensors**
- Dimming automático cuando hay luz natural
- Ahorro: 30-50% durante día

**Zona Interior (Core):**
- Circuitos independientes
- Iluminación artificial siempre requerida
- Control por **occupancy sensors**

**Implementación en Revit:**

1. Crear circuito `C1-PERIM-EAST` para luminarias perimetrales
2. Crear circuito `C2-CORE-CENTRAL` para luminarias interiores
3. **Load Name** descriptivo identifica zoning

## Switching y Control

### Interruptores Manuales (Manual Switches)

**NEC 210.70:** Toda habitación habitable requiere al menos un control de iluminación.

**Placement Rules:**
- Switch cerca de entrada de espacio
- Altura: 1.2m del piso (accesible)
- Evitar detrás de puertas

**Modelado en Revit:**

**Paso 1: Colocar Switch**

1. **Systems** → **Electrical** → **Device**
2. **Type Selector:** `Switch - Single Pole - 120V - 20A`
3. En vista de plano, colocar switch en muro cerca de puerta
4. **Properties:**
   - **Voltage:** `120V`
   - **Rating:** `20A`
   - **Mount:** `Wall` (por defecto)

**Paso 2: Asociar Switch con Circuito (Visual)**

**Nota:** Revit **NO modela el wiring real** entre switch y luminarias (solo conexión panel→luminarias).

**Para documentación:**
1. Usar **Detail Lines** (líneas punteadas) para indicar control
2. Switch conectado visualmente a zona de luminarias
3. Agregar **Text Note:** `SW-1 controls Zone 1 (20 fixtures)`

![Switch y Zona de Control](../imagenes/mod3-switch-control-zone.png)

### Multi-Location Switching (3-Way, 4-Way)

**3-Way Switch:**
- Control de iluminación desde **2 ubicaciones**
- Ejemplo: Pasillo largo con switch en ambos extremos

**4-Way Switch:**
- Control desde **3+ ubicaciones**
- Ejemplo: Escalera de 3 pisos (switch en cada piso)

**Modelado:**
1. Colocar switches tipo `3-Way Switch`
2. Ubicaciones: Ambos extremos del pasillo
3. Anotar control con detail lines

### Dimming Controls

**Dimmer Switch:**
- Reduce intensidad lumínica (0-100%)
- Ahorro energético proporcional
- Ejemplo: Dim a 70% → ahorro ~30% energía (LED)

**Requisitos:**
- Luminarias deben ser **dimmable**
- Verificar compatibilidad dimmer-luminaria (especialmente LED)

**Modelado en Revit:**
1. Type: `Dimmer Switch - Single Pole - 120V - 600W`
2. **Properties:**
   - **Rating:** `600W` (carga máxima controlada)
   - **Dimming Range:** `0-100%`

### Occupancy Sensors

**Funcionamiento:**
- Detecta movimiento/presencia
- Auto-on al detectar ocupación
- Auto-off después de tiempo configurable (típicamente 15-20 min)

**Ahorro típico:** 20-30% en espacios con ocupación intermitente.

**ASHRAE 90.1 Requirements:**
- **Obligatorio** en espacios ≤ 100 m² (oficinas privadas, salas de conferencia, baños)

**Modelado:**
1. **Device** → `Occupancy Sensor - Ceiling Mount - PIR`
2. Colocar en techo (centro del espacio)
3. **Coverage:** Típicamente 7m × 7m (49 m²)
4. Para espacios grandes: Múltiples sensores

**Properties:**
- **Detection Type:** `PIR` (Passive Infrared) o `Ultrasonic`
- **Coverage Area:** `49 m²`
- **Time Delay:** `20 minutes` (configurable)

![Occupancy Sensor Coverage](../imagenes/mod3-occupancy-sensor.png)

### Daylight Sensors (Photocells)

**Funcionamiento:**
- Mide nivel de luz natural
- Dimming automático de luminarias cuando luz natural es suficiente
- Mantiene iluminancia constante (ej. 500 lux)

**Placement:**
- Cerca de ventanas (zona perimetral)
- Evitar luz directa del sol (falsos positivos)
- 1 sensor por 10-15 luminarias

**Modelado:**
1. **Device** → `Daylight Sensor - Ceiling Mount`
2. Colocar en zona perimetral
3. **Coverage:** Típicamente 15m lineales de perimetral

**Schedule annotation:**
- En Load Name: `Perimeter East - Daylight Control`

## Balanceo de Circuitos de Iluminación

### Distribución entre Fases

**Objetivo:** Balancear carga de iluminación uniformemente entre fases A, B, C.

**Ejemplo - Panel LP-1 con 60 luminarias (40W cada):**

**División ideal:**
- Fase A: 20 luminarias = 800 VA
- Fase B: 20 luminarias = 800 VA
- Fase C: 20 luminarias = 800 VA

**Asignación de circuitos:**

| Circuit | Zone | Fixtures | VA | Phase |
|---------|------|----------|-----|-------|
| 1 | East Wing | 20 | 800 | **A** |
| 3 | West Wing | 20 | 800 | **B** |
| 5 | North Area | 20 | 800 | **C** |

**Balance perfecto:** 800 VA en cada fase.

### Panel Schedule - Verificar Balance

**En Panel Schedule:**

**Totals por fase:**
- Phase A: `4,500 VA` (multiple circuits)
- Phase B: `4,800 VA`
- Phase C: `4,200 VA`

**Cálculo de desbalanceo:**
```
Average = (4,500 + 4,800 + 4,200) / 3 = 4,500 VA
Max deviation = 4,800 - 4,200 = 600 VA
%Desbalanceo = (600 / 4,500) × 100 = 13.3%
```

**13.3% desbalanceo = Aceptable** (< 15% típicamente OK).

**Si desbalanceo > 15%:**
1. Identificar circuitos en fase sobrecargada (B)
2. Reasignar circuitos pequeños a fase menos cargada (C)
3. Objetivo: < 10% desbalanceo

## Routing de Circuitos de Iluminación

### Path of Travel

**Opción 1 - Routing Directo (Default):**
- Revit dibuja línea directa desde cada luminaria → panel
- Representación esquemática (no realista)

**Opción 2 - Routing por Cable Tray:**
- Luminarias → Cable tray en ceiling → Panel
- Más realista para coordinación 3D

**Procedimiento:**

1. Modelar **Cable Tray** en ceiling
2. Routing: Desde área de luminarias hacia electrical closet
3. **Electrical Settings** → **Circuit Routing:**
   - ☑ **Follow cable trays automatically**
4. Crear circuitos → Revit sigue tray path

**Opción 3 - Routing Manual (Edit Circuit):**

1. Seleccionar circuito
2. **Edit Circuit** (ribbon)
3. Agregar waypoints manualmente:
   - Luminarias → Sube a ceiling
   - Horizontal en ceiling hacia panel
   - Baja por electrical closet
   - Entra a panel
4. **Finish**

## Mejores Prácticas

### 1. Nomenclatura de Circuitos

**Load Name descriptivo:**

**Malo:**
- `Circuit 1`
- `Lights`

**Bueno:**
- `East Wing Lighting - Zone 1 - 20 Fixtures`
- `Perimeter South - Daylight Control - 15 Fixtures`

**Beneficio:**
- Panel Schedule legible
- Troubleshooting rápido en campo

### 2. Circuitos Dedicados para Áreas Críticas

**Espacios que requieren circuito dedicado:**
- Salas de servidores (iluminación siempre ON)
- Salidas de emergencia (exit signs)
- Escaleras (seguridad)

**NO compartir** con iluminación general de oficinas.

### 3. Future Flexibility

**Dejar espacios en panel:**
- Si proyecto tiene 40 circuitos, usar panel de **60 polos**
- 20 polos spare (33% reserva)
- Futuras expansiones sin cambiar panel

### 4. Emergency Lighting Integration

**Luminarias con batería integrada:**
- Family tipo `Emergency Light - LED - Battery Backup`
- Aparece en schedule de lighting
- Pero circuito es **normal** (no emergency circuit)
- Batería interna provee respaldo

## Análisis de Consumo Energético

### Calcular Costo Operativo Anual

**Schedule de Lighting Fixtures:**

**Total wattage:** 3,200 W (80 luminarias × 40W)

**Horas de operación:** 12 horas/día × 250 días/año = 3,000 horas/año

**Consumo anual:**
```
kWh/año = (3,200 W / 1000) × 3,000 h = 9,600 kWh/año
```

**Costo energía:** $0.12/kWh (típico comercial)

**Costo anual:**
```
9,600 kWh × $0.12 = $1,152/año
```

**Con controles (occupancy + daylight sensors):**
- Ahorro estimado: 35%
- Nuevo consumo: 9,600 × 0.65 = 6,240 kWh/año
- **Costo:** $749/año
- **Ahorro:** $403/año

**ROI de controles:**
- Costo de sensores: $1,500 (instalación incluida)
- Payback: 1,500 / 403 = **3.7 años**

## Ejercicio Aplicado

**Ver:** Ejercicio 2 en `ejercicios.md` - Diseñar circuitos de iluminación con zoning, switching y balanceo de fases para edificio de oficinas.

---

**Próxima Lección:** Contactos y Sistemas de Fuerza - Receptáculos, NEC spacing, circuitos dedicados.
