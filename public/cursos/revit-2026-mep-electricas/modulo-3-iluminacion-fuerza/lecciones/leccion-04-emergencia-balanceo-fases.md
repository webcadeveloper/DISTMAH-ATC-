# Lección 4: Iluminación de Emergencia y Balanceo de Fases

## Introducción

Los **sistemas de iluminación de emergencia** son críticos para seguridad de vida, proporcionando iluminación durante fallos eléctricos para permitir evacuación segura. El **balanceo de cargas entre fases** optimiza distribución eléctrica trifásica, reduciendo corriente en neutro, pérdidas y sobrecarga de fases individuales.

Esta lección cubre diseño de sistemas de iluminación de emergencia según NFPA 101, sistemas de respaldo (UPS, generadores), balanceo completo de cargas trifásicas, y análisis de desbalanceo en Revit.

## Sistemas de Iluminación de Emergencia

### Códigos y Estándares

**NFPA 101 (Life Safety Code):**
- **7.9.2.1:** Iluminación de emergencia requerida en **rutas de egreso**
- **Mínimo:** 1 lux (0.1 fc) promedio, 0.1 lux mínimo en cualquier punto
- **Duración:** 90 minutos mínimo de respaldo

**NEC Article 700 (Emergency Systems):**
- Transferencia automática en **10 segundos** máximo
- Circuitos separados de iluminación normal
- Identificación clara (paneles rojos típicamente)

**IBC (International Building Code):**
- Define qué ocupaciones requieren emergency lighting
- Ejemplo: Edificios > 50 ocupantes, hospitales, escuelas

### Componentes del Sistema

**1. Emergency Lighting Fixtures (Luminarias de Emergencia)**

**Self-Contained (Batería Integrada):**
- Batería interna (NiCd, NiMH o Li-ion)
- 90 minutos de autonomía
- Carga desde circuito normal (120V)
- Al fallar utility → Batería activa automáticamente

**Especificaciones típicas:**
- 2× LED heads de 5W cada uno
- 10 lux @ 3m de distancia
- Batería: 12V, 7Ah
- Test mensual automático

**Central Battery System:**
- Luminarias conectadas a **batería central** (no individual)
- Más eficiente para sistemas grandes (50+ luminarias)
- Batería central: 48V, 200-500Ah

**2. Exit Signs (Señales de Salida)**

**LED Exit Sign:**
- Consumo: 2-5W (muy bajo)
- Batería: 90 minutos respaldo
- Colores: Verde (internacional), Rojo (USA)
- Mounting: Wall, ceiling, recessed

**Edge-Lit vs Panel:**
- Edge-lit: LED en bordes, acrílico translúcido
- Panel: LEDs detrás de panel (más brillante)

**3. Emergency Ballasts (Balastros de Emergencia)**

**Para luminarias normales:**
- Se instala **dentro** de luminaria estándar (ej. troffer LED)
- Batería integrada en ballast
- Luminaria opera normal → Al fallar power → Ballast energiza 1-2 lámparas con batería

**Ventaja:** Convertir luminarias normales en emergencia (retrofit).

## Diseñar Sistema de Emergencia en Revit

### Layout de Emergency Lighting

**Spacing típico:**
- **Pasillos:** Emergency lights cada 10-15m
- **Escaleras:** Mínimo 1 luminaria por descanso
- **Exit doors:** Exit sign sobre cada puerta de salida

**Niveles de iluminancia:**
- **Paths of egress:** 1 lux mínimo
- **Exit discharge:** 10 lux (salida al exterior)

### Procedimiento en Revit

**Paso 1: Cargar Familias de Emergencia**

1. **Insert** → **Load Family**
2. `Lighting\Emergency\Emergency Light - LED - 2 Heads.rfa`
3. `Lighting\Exit Signs\LED Exit Sign - Surface Mount.rfa`
4. **Open** ambos

**Paso 2: Colocar Emergency Lights**

1. **Systems** → **Electrical** → **Lighting Fixture**
2. **Type Selector:** `Emergency Light - LED - 2 Heads - 10W`
3. En ceiling plan, colocar en pasillos cada 12m
4. **Properties:**
   - **Apparent Load:** `10 VA` (incluye cargador de batería)
   - **Voltage:** `120V`
   - **Emergency:** `Yes` (custom parameter)

**Paso 3: Colocar Exit Signs**

1. **Type Selector:** `LED Exit Sign - Green - 5W`
2. Colocar sobre **todas** las puertas de salida
3. Orientar flecha hacia salida
4. **Properties:**
   - **Apparent Load:** `5 VA`
   - **Voltage:** `120V`
   - **Emergency:** `Yes`

![Layout de Iluminación de Emergencia](../imagenes/mod3-emergency-lighting-layout.png)

**Paso 4: Crear Circuitos de Emergencia**

1. Seleccionar todas las emergency fixtures (lights + exit signs)
2. **Power** → Select panel: `EPP-1` (Emergency Power Panel)
3. **Circuit Properties:**
   - **Load Classification:** `Life Safety`
   - **Circuit Type:** `Emergency Branch`

**Panel EPP-1** alimentado por:
- **Opción A:** Generator (planta eléctrica)
- **Opción B:** UPS (sistema ininterrumpible)
- **Opción C:** Central battery system

### Verificar Niveles de Iluminancia

**Análisis de Iluminación - Modo Emergencia:**

1. **Lighting Analysis Settings:**
   - Desactivar luminarias normales (solo emergency ON)
   - Run analysis
2. **Resultado:** Mapa muestra mínimo 1 lux en rutas de egreso ✓

**Si zonas < 1 lux:**
- Agregar emergency lights
- Usar luminarias más potentes (20W vs 10W)

## Sistemas de Respaldo Eléctrico

### Generador (Generator)

**Funcionamiento:**
- Motor diesel/gas genera electricidad
- **ATS (Automatic Transfer Switch)** detecta fallo de utility
- Transfer en **10 segundos** (NEC 700.12)
- Generator arranca y energiza emergency panel

**Capacidad típica:**
- Edificio pequeño: 50-100 kW
- Edificio mediano: 250-500 kW
- Hospital/Data center: 1-2 MW

**Cargas típicas en generator:**
- Iluminación de emergencia
- Exit signs
- Alarmas de incendio
- Bombas de incendio
- Elevadores (1 mínimo)
- Equipos médicos críticos
- HVAC parcial (mechanical rooms)

**Modelado en Revit:**

**Paso 1: Colocar Generator**

1. **Systems** → **Electrical** → **Electrical Equipment**
2. **Type:** `Generator - Diesel - 500 kW - 480V`
3. Ubicación: Exterior (pad mounted) o mechanical room con ventilación
4. **Properties:**
   - **kW Rating:** `500 kW`
   - **Voltage:** `480V`
   - **Fuel Type:** `Diesel`
   - **Fuel Capacity:** `1000 gallons` (autonomía 24-48h)

**Paso 2: Colocar ATS (Automatic Transfer Switch)**

1. **Type:** `ATS - 600A - 480V - 3PH`
2. Ubicación: Entre utility service y emergency switchboard
3. **Properties:**
   - **Rating:** `600A`
   - **Voltage:** `480V`
   - **Transfer Time:** `10 seconds` (NEC compliant)

**Paso 3: Conectar Sistema**

**Flujo:**
```
Utility Service ──┐
                  ├──→ ATS ──→ Emergency Switchboard (SWBD-EM) ──→ EPP-1, EPP-2...
Generator ────────┘
```

**Circuito 1:** Utility → ATS (normal power)
**Circuito 2:** Generator → ATS (emergency power)
**Circuito 3:** ATS → Emergency Switchboard (output)

![Sistema de Generator y ATS](../imagenes/mod3-generator-ats-system.png)

### UPS (Uninterruptible Power Supply)

**Funcionamiento:**
- **Baterías** proveen poder instantáneo (0ms transfer)
- Mientras baterías sostienen carga, generator arranca
- Autonomía típica: 15-30 minutos

**Ventaja sobre generator solo:**
- **No hay interrupción** (0ms vs 10s)
- Crítico para: Servidores, equipos médicos, sistemas de control

**Tipos:**

**Online UPS (Double Conversion):**
- Siempre convierte AC→DC→AC (baterías siempre en línea)
- Protección total (mejor calidad de poder)
- Uso: Data centers, hospitales

**Line-Interactive UPS:**
- Normalmente bypass, activa al detectar fallo
- Transfer: 2-4ms (aceptable para la mayoría)
- Uso: Oficinas, pequeños servidores

**Capacidad:**
- Rack de servidores: 3-10 kVA
- Data center pequeño: 50-100 kVA
- Data center grande: 500-1000 kVA (modular)

**Modelado en Revit:**

**Paso 1: Colocar UPS**

1. **Electrical Equipment** → `UPS - Online - 10 kVA - 120V`
2. Ubicación: Server room
3. **Properties:**
   - **kVA Rating:** `10 kVA`
   - **Voltage Input:** `120V`
   - **Voltage Output:** `120V`
   - **Battery Runtime:** `30 minutes @ full load`

**Paso 2: Crear Circuit**

**Input:** Panel normal (PP-1) → UPS (carga + cargador de baterías)

**Output:** UPS → PDU (Power Distribution Unit) → Servidor racks

**Paso 3: Calcular Autonomía**

**Carga conectada a UPS:** 6 kVA (servidores)

**UPS capacity:** 10 kVA

**Load factor:** 6 / 10 = 0.6 (60%)

**Runtime @ 60% load:** ~45 minutos (consultar curva del fabricante)

**Verificación:** Suficiente para que generator arranque (10 segundos) + margen.

## Balanceo de Fases - Análisis Completo

### Objetivo del Balanceo

**Sistema trifásico ideal:**
- Cargas distribuidas equitativamente entre A, B, C
- Corriente en neutro ≈ 0 (cancelación vectorial)
- Eficiencia máxima, sin sobrecalentamiento

**Desbalanceo causa:**
- Corriente excesiva en neutro (riesgo de sobrecalentamiento)
- Pérdidas aumentadas
- Voltaje desbalanceado (reduce vida útil de equipos)

### Métrica de Balanceo

**Fórmula:**
```
%Desbalanceo = [(I_max - I_min) / I_avg] × 100

Donde:
I_max = Corriente fase máxima (A)
I_min = Corriente fase mínima (A)
I_avg = Promedio de tres fases (A)
```

**Estándares:**
- **< 5%:** Excelente (ideal)
- **5-10%:** Bueno (aceptable)
- **10-15%:** Aceptable (mejorar si posible)
- **> 15%:** Pobre (requiere re-balanceo)

### Ejemplo Completo de Balanceo

**Panel LP-1 con múltiples circuitos:**

#### Estado Inicial (Desbalanceado)

| Circuit | Load | VA | Phase |
|---------|------|-----|-------|
| 1 | Lighting Zone 1 | 1,600 | **A** |
| 2 | Receptacles Zone 1 | 2,160 | **A** |
| 3 | Lighting Zone 2 | 1,800 | **B** |
| 4 | HVAC Controls | 500 | **A** |
| 5 | Lighting Zone 3 | 1,400 | **C** |
| 6 | Receptacles Zone 2 | 1,800 | **B** |
| 7-8 | Kitchen Equipment (2P) | 5,000 | **A-B** |

**Totales por fase:**
- **Fase A:** 1,600 + 2,160 + 500 + 2,500 (half of kitchen) = **6,760 VA**
- **Fase B:** 1,800 + 1,800 + 2,500 (half of kitchen) = **6,100 VA**
- **Fase C:** 1,400 = **1,400 VA**

**Corrientes (@ 120V):**
```
I_A = 6,760 / 120 = 56.3 A
I_B = 6,100 / 120 = 50.8 A
I_C = 1,400 / 120 = 11.7 A

I_avg = (56.3 + 50.8 + 11.7) / 3 = 39.6 A
```

**Desbalanceo:**
```
%Desbalanceo = [(56.3 - 11.7) / 39.6] × 100 = 112.6%
```

**112% = EXTREMADAMENTE DESBALANCEADO** ❌

#### Re-Balanceo

**Estrategia:** Mover circuitos de A y B hacia C.

**Nuevo Assignment:**

| Circuit | Load | VA | Phase (New) |
|---------|------|-----|-------------|
| 1 | Lighting Zone 1 | 1,600 | **A** |
| 2 | Receptacles Zone 1 | 2,160 | **C** ← moved |
| 3 | Lighting Zone 2 | 1,800 | **B** |
| 4 | HVAC Controls | 500 | **C** ← moved |
| 5 | Lighting Zone 3 | 1,400 | **C** |
| 6 | Receptacles Zone 2 | 1,800 | **A** ← moved |
| 7-8 | Kitchen Equipment (2P) | 5,000 | **B-C** ← changed |

**Nuevos Totales:**
- **Fase A:** 1,600 + 1,800 = **3,400 VA**
- **Fase B:** 1,800 + 2,500 = **4,300 VA**
- **Fase C:** 2,160 + 500 + 1,400 + 2,500 = **6,560 VA**

**Corrientes:**
```
I_A = 3,400 / 120 = 28.3 A
I_B = 4,300 / 120 = 35.8 A
I_C = 6,560 / 120 = 54.7 A

I_avg = (28.3 + 35.8 + 54.7) / 3 = 39.6 A
```

**Nuevo Desbalanceo:**
```
%Desbalanceo = [(54.7 - 28.3) / 39.6] × 100 = 66.7%
```

**Aún alto**, pero **mejor** (de 112% → 66%).

**Optimización adicional:** Dividir Receptacles Zone 1 en dos circuitos (1,080 VA cada) y distribuir.

#### Balanceo Final Óptimo

Después de optimizar:
- **Fase A:** 4,500 VA → 37.5 A
- **Fase B:** 4,200 VA → 35.0 A
- **Fase C:** 4,800 VA → 40.0 A

```
I_avg = 37.5 A
%Desbalanceo = [(40 - 35) / 37.5] × 100 = 13.3%
```

**13.3% = ACEPTABLE** ✓

### Balanceo en Revit - Panel Schedule

**Paso 1: Abrir Panel Schedule**

1. **Project Browser** → **Panel Schedules** → `LP-1`

**Panel Schedule muestra totals:**
- **Phase A Load:** 6,760 VA (inicial)
- **Phase B Load:** 6,100 VA
- **Phase C Load:** 1,400 VA

**Paso 2: Reasignar Phases**

1. Para Circuit 2, click en celda **Phase**
2. Cambiar de `A` a `C`
3. Totals actualizan automáticamente

Repetir para circuits a reasignar.

**Paso 3: Verificar Balance**

**Totals actualizados:**
- Phase A: 3,400 VA
- Phase B: 4,300 VA
- Phase C: 6,560 VA

**Calcular desbalanceo manualmente** (Revit NO lo calcula automáticamente).

**Paso 4: Schedule de Análisis**

**Crear schedule personalizado:**

1. **View** → **Schedules** → **Schedule/Quantities**
2. Category: **Electrical Equipment** (panels)
3. Name: `Panel Load Balance Analysis`

**Agregar Calculated Fields:**
- `Phase A Current (A)` = Phase A Load (VA) / 120
- `Phase B Current (A)` = Phase B Load / 120
- `Phase C Current (A)` = Phase C Load / 120

**Exportar a Excel** para calcular %Desbalanceo con fórmulas.

## Mejores Prácticas

### 1. Emergency Circuit Identification

**Marcar claramente:**
- Paneles de emergencia: Cover rojo
- Circuitos: Conductor rojo (optional, pero recomendado)
- Etiquetas: "EMERGENCY CIRCUIT - DO NOT DISCONNECT"

### 2. Generator Sizing

**Rule of thumb:**
- Generator capacity = **125-150%** de carga de emergencia total
- Permite arranque de motores (inrush current)
- Margen para crecimiento

### 3. Monthly Testing

**NEC 700.3(D):** Sistemas de emergencia requieren **test mensual**.

**Implementación:**
- Exit signs: Auto-test integrado
- Emergency lights: Push-button test (30 segundos)
- Generator: Arranque mensual bajo carga (30 minutos)

### 4. Balanceo Proactivo

**Desde diseño inicial:**
- Asignar circuitos alternando fases (A, B, C, A, B, C...)
- Revisar balance antes de finalizar CD
- Más fácil balancear en Revit que en campo

## Ejercicio Aplicado

**Ver:** Ejercicio 4 en `ejercicios.md` - Diseñar sistema completo de iluminación de emergencia con generator, balancear panel con 42 circuitos y verificar desbalanceo < 10%.

---

## Conclusión del Módulo 3

Este módulo completó el diseño de **sistemas de iluminación y fuerza**:

1. ✅ Layout de iluminación con análisis lumínico y ASHRAE 90.1
2. ✅ Circuitos de iluminación con zoning y control por sensores
3. ✅ Contactos y receptáculos según NEC spacing requirements
4. ✅ Sistemas de iluminación de emergencia y respaldo (UPS/Generator)
5. ✅ Balanceo completo de cargas trifásicas

**Próximo Módulo:** Documentación Eléctrica - Panel schedules, diagramas unifilares, clash detection eléctrico.

---

**DISTMAH Universidad Autodesk - Revit MEP 2026 Eléctricas**
