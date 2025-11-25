# Ejercicios Prácticos - Módulo 4: Sistemas de Ventilación

## Introducción

Este módulo contiene **7 ejercicios prácticos** diseñados para aplicar conocimientos de sistemas de extracción, aire fresco, ventilación mecánica, dimensionamiento de ductos y selección de ventiladores.

Los ejercicios cubren desde diseño de campanas de cocina comercial hasta sistemas completos de ventilación con recuperación de energía, preparándote para proyectos profesionales reales.

**Tiempo total estimado:** 25-30 horas

---

## Ejercicio 1: Diseño de Sistema de Extracción de Cocina

### Descripción

Diseñar sistema completo de extracción para cocina comercial de restaurante, incluyendo cálculo de caudal según NFPA 96, dimensionamiento de ductos, selección de campana Type I y ventilador roof exhaust.

### Datos del Proyecto

```
Restaurante: "La Parrilla Gourmet"
Tipo: Grill & Steakhouse (heavy duty)
Ubicación: Planta baja, edificio comercial

Equipos de cocción:
  1. Parrilla de carbón (charbroiler): 1.5m ancho
  2. Parrilla plana (griddle): 1.2m ancho
  3. Freidora doble: 0.8m ancho
  4. Estufa 6 quemadores: 1.0m ancho
  ────────────────────────────
  Total longitud: 4.5m (14.76 ft)

Configuración:
  - Equipos alineados contra pared
  - Campana tipo: Wall-mounted (pared)
  - Clasificación: Heavy duty (alto uso, grasa)
  - Fire suppression: Ansul requerido
  - Altura campana: 2.1m sobre piso
  - Altura techo cocina: 3.5m
  - Descarga: Roof exhaust (azotea +12m vertical)
```

### Tareas

#### Fase 1: Cálculo de Caudal de Extracción

1. **Aplicar NFPA 96:**
   ```
   Heavy duty wall-mounted hood: 400 CFM/ft lineal
   Longitud campana: 4.5m = 14.76 ft

   Calcular:
   - CFM total requerido
   - Conversión a L/s
   - Aplicar safety factor 5-10%
   ```

2. **Documentar cálculo:**
   - Mostrar fórmula aplicada
   - Paso a paso con unidades
   - Resultado final en L/s y CFM

#### Fase 2: Dimensionamiento de Ducto

3. **Seleccionar velocidad:**
   ```
   NFPA 96 mínimo: 1500 fpm (7.6 m/s)
   Recomendado: 2500 fpm (12.7 m/s) para prevenir deposición grasa

   Usar: 13 m/s (2559 fpm)
   ```

4. **Calcular tamaño ducto:**
   ```
   Método: Velocidad constante
   A = Q / V
   Seleccionar ducto rectangular estándar
   Verificar velocidad real
   ```

5. **Material y construcción:**
   ```
   Especificar:
   - Material: Acero inoxidable 304
   - Calibre: 18-20 gauge
   - Soldadura: Continuous weld (sin filtraciones)
   - Pendiente: 1:4 hacia punto bajo (drenaje grasa)
   ```

#### Fase 3: Cálculo de Pérdidas de Presión

6. **Ducto vertical (riser):**
   ```
   Longitud: 12m (vertical hacia azotea)
   Velocidad: 13 m/s
   Material: Acero inoxidable (roughness 0.05mm)

   Calcular:
   - Pérdida por fricción (Darcy-Weisbach)
   - Pérdida por 3 codos 90° (K=0.3 cada uno)
   ```

7. **Pérdida total sistema:**
   ```
   Sumar:
   - Fricción ducto
   - Accesorios (codos)
   - Campana (K=1.5 típico Type I hood)
   - Roof cap (K=0.8)
   - Safety factor 15%
   ```

#### Fase 4: Selección de Ventilador

8. **Especificar ventilador roof exhaust:**
   ```
   Tipo: Upblast centrifugal (grease rated)
   Caudal: [resultado cálculo + safety factor] L/s
   Presión estática: [pérdida total] Pa

   Buscar en catálogo (Greenheck, Captive-Aire):
   - Modelo específico
   - RPM
   - Potencia motor (HP o kW)
   - Nivel ruido
   ```

9. **Especificar motor:**
   ```
   Voltaje: 220V 3-phase (típico México)
   Eficiencia: IE3 mínimo
   Enclosure: Weatherproof (exterior)
   VFD: No (caudal constante cocina)
   ```

#### Fase 5: Componentes Adicionales

10. **Fire suppression system:**
    ```
    Sistema: Ansul R-102
    Componentes:
    - Fusible link en ducto (165°F)
    - Nozzles en campana
    - Tanque agente químico
    - Pull station manual
    - Interlock con gas (cierre automático)
    ```

11. **Grease filters:**
    ```
    Tipo: Baffle filters (acero inoxidable)
    Tamaño: 500mm × 500mm típico
    Cantidad: Longitud campana / 0.5m = ___
    Limpieza: Diaria (lavaplatos comercial)
    ```

12. **Makeup Air Unit (MAU):**
    ```
    Caudal MAU = Caudal extracción (balance)
    Ubicación: Cerca de campana (no directamente sobre)
    Temperatura suministro: 18°C (templado invierno)
    Tipo: Direct-fired gas o eléctrico
    ```

#### Fase 6: Modelado en Revit MEP

13. **Crear modelo cocina:**
    - Modelar equipos de cocción (generic models)
    - Colocar campana Type I (load family)
    - Routing ducto vertical hacia azotea
    - Colocar roof exhaust fan
    - Colocar MAU

14. **Create Exhaust System:**
    - Seleccionar componentes
    - Create System → Exhaust
    - Verificar caudal total = diseño

15. **Documentación:**
    - Planta cocina con campana
    - Elevación mostrando ducto vertical
    - Detalle conexión campana-ducto
    - Schedule de equipos (campana, ventilador, MAU)

### Entregables

1. **Memoria de cálculo (4-5 páginas):**
   - Cálculo caudal NFPA 96
   - Dimensionamiento ducto
   - Pérdidas de presión
   - Selección ventilador

2. **Especificación de equipos:**
   - Campana Type I (dimensiones, material, fire suppression)
   - Ducto (tamaño, material, soldadura)
   - Roof exhaust fan (modelo, CFM, presión, motor)
   - MAU (capacidad, calentamiento)

3. **Planos Revit (3 sheets):**
   - Sheet M-401: Planta cocina
   - Sheet M-402: Elevación sistema extracción
   - Sheet M-403: Detalles (conexiones, campana)

4. **Schedule de equipos** (Excel o Revit)

### Criterios de Aprobación

- ✅ Caudal calculado según NFPA 96 correctamente
- ✅ Velocidad ducto ≥ 1500 fpm (7.6 m/s)
- ✅ Material especificado: Acero inoxidable soldado
- ✅ Ventilador seleccionado apropiado (grease-rated)
- ✅ Fire suppression incluido en diseño
- ✅ MAU especificado para balance presión
- ✅ Planos profesionales y completos

### Tiempo Estimado
**8-10 horas**

---

## Ejercicio 2: Modelado de Ventilación Natural con Revit

### Descripción

Diseñar sistema de ventilación natural para edificio educativo (aulas), aprovechando ventilación cruzada y efecto stack. Modelar en Revit y calcular caudales de ventilación natural según normativas.

### Datos del Proyecto

```
Edificio: Escuela primaria
Aulas: 6 aulas en 2 pisos (3 por piso)
Tamaño aula: 8m × 6m × 3.5m altura
Ocupación: 30 estudiantes por aula
Ubicación: Clima cálido (ventilación pasiva deseable)

Estrategia:
  - Ventilación cruzada (cross ventilation)
  - Vientos prevalentes: Este-Oeste
  - Aberturas opuestas en fachadas E-O
```

### Tareas

1. **Calcular área de aberturas (ASHRAE 62.1):**
   ```
   Área mínima = 5% área piso
   Por aula: 8×6 = 48 m² → Aberturas ≥ 2.4 m²
   Distribuir: 50% fachada Este, 50% fachada Oeste
   ```

2. **Diseñar aberturas:**
   - Ventanas operables (tipo awning o casement)
   - Tamaño: 1.2m × 1.0m (4 ventanas por aula)
   - Control: Manual (maestro opera)

3. **Calcular caudal ventilación natural:**
   ```
   Método simplificado (ASHRAE):
   Q = C_d × A × V_wind

   Donde:
   C_d = 0.6 (coeficiente descarga, ventanas opuestas)
   A = Área efectiva aberturas (m²)
   V_wind = Velocidad viento prevalente (2-3 m/s típico)
   ```

4. **Verificar renovaciones aire:**
   ```
   ACH = Q / Volumen_aula
   Mínimo recomendado aulas: 3-4 ACH
   Verificar cumplimiento
   ```

5. **Modelar en Revit:**
   - Modelar 6 aulas con ventanas operables
   - Colocar windows en fachadas E-O (opuestas)
   - Anotar dirección vientos prevalentes (flecha)
   - Color scheme por ACH estimado

6. **Proponer ventilación mecánica suplementaria:**
   ```
   Para días sin viento o clima extremo:
   - Extractores de techo (cada aula)
   - Caudal: 500 L/s por aula
   - Control: Sensor CO2 + temperatura
   ```

### Entregables

- Cálculos de ventilación natural
- Planos con aberturas dimensionadas
- Análisis de ACH
- Propuesta sistema híbrido (natural + mecánico)

### Criterios de Aprobación

- ✅ Aberturas ≥ 5% área piso
- ✅ ACH calculado ≥ 3 renovaciones/hora
- ✅ Ventanas opuestas (cross ventilation)
- ✅ Sistema suplementario especificado

### Tiempo Estimado
**4-5 horas**

---

## Ejercicio 3: Dimensionamiento de Ductos de Ventilación

### Descripción

Dimensionar sistema completo de ductos de ventilación para edificio de oficinas usando método Equal Friction. Calcular pérdidas, seleccionar tamaños óptimos y verificar velocidades.

### Datos del Proyecto

```
Edificio oficinas: 1 piso, 800 m²
Sistema: VAV con ductos de suministro
Caudal UMA: 8000 L/s total
Distribución:
  - Ramal Norte: 3000 L/s (3 VAV boxes)
  - Ramal Sur: 3000 L/s (3 VAV boxes)
  - Ramal Central: 2000 L/s (2 VAV boxes)

Método dimensionamiento: Equal Friction
Fricción objetivo: 1.0 Pa/m
Velocidad máxima: 8 m/s
```

### Tareas

1. **Dimensionar ducto principal (UMA → bifurcación):**
   ```
   Q = 8000 L/s
   Fricción = 1.0 Pa/m
   Usar carta fricción o ecuación:
   - Calcular diámetro equivalente
   - Seleccionar ducto rectangular estándar
   - Verificar velocidad ≤ 8 m/s
   ```

2. **Dimensionar ramales principales:**
   ```
   Ramal Norte: Q = 3000 L/s, fricción 1.0 Pa/m
   Ramal Sur: Q = 3000 L/s, fricción 1.0 Pa/m
   Ramal Central: Q = 2000 L/s, fricción 1.0 Pa/m
   ```

3. **Dimensionar sub-ramales a VAV boxes:**
   ```
   Cada VAV box: 1000 L/s típico
   Mantener fricción 1.0 Pa/m
   ```

4. **Calcular pérdidas totales - Ramal más desfavorable:**
   ```
   Ramal Norte (ejemplo):
   - Ducto principal: 15m × 1.0 Pa/m = 15 Pa
   - Ramal norte: 20m × 1.0 Pa/m = 20 Pa
   - Sub-ramal a VAV: 8m × 1.0 Pa/m = 8 Pa
   - Accesorios: 4 codos (K=0.25) + 2 bifurcaciones (K=0.5)
   - VAV box: ΔP = 100 Pa (especificación)
   - Difusor: ΔP = 25 Pa
   ────────────────
   Total: _____ Pa
   ```

5. **Crear tabla dimensionamiento:**
   ```
   Tramo | Q (L/s) | Longitud (m) | Tamaño | V (m/s) | ΔP_fric (Pa) | ΔP_acc (Pa)
   ──────────────────────────────────────────────────────────────────────────────
   Principal | 8000 | 15 | 1200×800 | 8.3 | 15 | 12
   ...
   ```

6. **Modelar en Revit:**
   - Routing completo del sistema
   - Apply sizing method: Friction 1.0 Pa/m
   - Generate Duct Schedule
   - Verificar: Todos tamaños, velocidades, pérdidas

### Entregables

- Tabla de dimensionamiento completa
- Cálculo de pérdidas totales
- Plano isométrico del sistema
- Duct Schedule desde Revit

### Criterios de Aprobación

- ✅ Fricción constante 1.0 Pa/m en todos tramos principales
- ✅ Velocidades ≤ 8 m/s
- ✅ Pérdidas calculadas paso a paso
- ✅ Modelo Revit coherente con cálculos manuales

### Tiempo Estimado
**6-7 horas**

---

## Ejercicio 4: Cálculo de Caudales por Espacios y Normas

### Descripción

Calcular caudales de ventilación requeridos para edificio de usos mixtos aplicando ASHRAE 62.1 (método ventilation rate procedure). Documentar cálculos detallados.

### Datos del Proyecto

```
Edificio mixto: 5 pisos
Composición:
  - Piso 1: Retail (tiendas) - 600 m², 60 personas estimadas
  - Piso 2: Oficinas - 800 m², 80 personas
  - Piso 3: Oficinas - 800 m², 80 personas
  - Piso 4: Restaurante - 500 m², 100 personas (comedor)
  - Piso 5: Gimnasio - 400 m², 40 personas

Total: 3100 m², 360 personas
```

### Tareas

1. **Aplicar ASHRAE 62.1 Tabla 6-1 por espacio:**

   **Piso 1 - Retail:**
   ```
   R_p = 3.8 L/s/persona
   R_a = 0.6 L/s/m²
   P_z = 60 personas
   A_z = 600 m²

   V_oz = (R_p × P_z) + (R_a × A_z)
   V_oz = (3.8 × 60) + (0.6 × 600) = ______ L/s
   ```

   **Piso 2 - Oficinas:**
   ```
   R_p = 2.5 L/s/persona
   R_a = 0.3 L/s/m²
   ...calcular
   ```

   **Piso 3 - Oficinas:**
   (Igual que piso 2)

   **Piso 4 - Restaurante:**
   ```
   R_p = 3.8 L/s/persona
   R_a = 0.9 L/s/m² (mayor que oficinas)
   ...calcular
   ```

   **Piso 5 - Gimnasio:**
   ```
   R_p = 10 L/s/persona (alta actividad metabólica)
   R_a = 0.3 L/s/m²
   ...calcular
   ```

2. **Calcular caudal total edificio:**
   ```
   V_ot = Σ(V_oz) / E_z
   Donde E_z = 0.8 (eficiencia distribución típica multi-zona)
   ```

3. **Calcular ACH por piso:**
   ```
   ACH = (V_oz × 3600) / Volumen_piso
   Altura piso: 3.5m
   Verificar ACH cumple mínimos normativos
   ```

4. **Proponer distribución de aire exterior:**
   ```
   Opción A: DOAS centralizado (100% OA dedicated)
     - Capacidad: V_ot calculado
     - Ubicación: Azotea
     - Distribución: Ductos verticales a cada piso

   Opción B: Aire exterior a cada UMA/VAV
     - UMA por piso con mixing (OA + recirculación)
     - % OA por piso según V_oz
   ```

5. **Análisis de eficiencia energética:**
   ```
   Comparar:
   - Energía tratar V_ot con DOAS (100% OA)
   - vs. Energía tratar aire mezclado en UMAs (20-30% OA típico)

   Considerar:
   - DOAS permite ERV (recuperación energía)
   - UMAs permiten economizer (free cooling)
   ```

### Entregables

- Tabla de cálculos ASHRAE 62.1 por piso
- Caudal total edificio
- ACH por piso
- Comparación de estrategias (DOAS vs. UMAs)
- Recomendación justificada

### Criterios de Aprobación

- ✅ Cálculos ASHRAE 62.1 correctos (fórmula, valores R_p/R_a)
- ✅ ACH calculados y verificados
- ✅ Análisis comparativo de opciones
- ✅ Recomendación técnicamente fundamentada

### Tiempo Estimado
**4-5 horas**

---

## Ejercicio 5: Selección de Ventilador Centrífugo

### Descripción

Seleccionar ventilador centrífugo apropiado para sistema HVAC comercial usando catálogos de fabricantes. Verificar punto de operación, eficiencia y especificaciones técnicas.

### Datos del Proyecto

```
Sistema: UMA roof-mounted
Caudal diseño: 12,000 L/s
Pérdidas presión calculadas:
  - Filtros MERV 13: 200 Pa
  - Cooling coil: 150 Pa
  - Heating coil: 100 Pa
  - Ductos supply: 400 Pa
  - Ductos return: 250 Pa
  - Difusores: 50 Pa
  ────────────────────
  Total: 1150 Pa

Requisitos:
  - Nivel ruido ≤ 85 dBA @ 3m
  - Eficiencia mínima: 80%
  - Motor IE3 o superior
  - VFD incluido (sistema VAV)
```

### Tareas

1. **Aplicar safety factors:**
   ```
   Caudal selección: 12,000 × 1.10 = 13,200 L/s
   Presión selección: 1150 × 1.15 = 1323 Pa
   ```

2. **Investigar catálogos fabricantes:**
   ```
   Opciones (elegir 1):
   - Greenheck: www.greenheck.com (USA)
   - Systemair: www.systemair.com (Europa)
   - Soler & Palau: www.solerpalau.com (España)
   - TLT-Turbo: www.tlt-turbo.com (Alemania)

   Tipo recomendado: Centrifugal backward inclined o airfoil
   ```

3. **Usar software selección (online):**
   ```
   Input:
   - Airflow: 13,200 L/s
   - Static pressure: 1323 Pa
   - Application: HVAC supply fan
   - Drive: Belt drive (típico)

   Output esperado:
   - Fan size: 1200-1400mm wheel
   - RPM: 1450 o 1750 típico
   - Motor power: 18-22 kW estimado
   ```

4. **Analizar curva característica:**
   ```
   Del catálogo seleccionado:
   - Verificar punto (13,200 L/s, 1323 Pa) está en curva
   - Leer eficiencia en ese punto: ____%
   - Verificar no está cerca de surge o stall zone
   - Ruido en punto operación: ____ dBA
   ```

5. **Seleccionar motor eléctrico:**
   ```
   Potencia ventilador: (Q × ΔP) / (1000 × η)
   Calcular potencia requerida

   Seleccionar motor:
   - Potencia: Próximo estándar arriba (kW)
   - Voltaje: 460V 3-phase 60Hz (USA) o 220V (México)
   - Eficiencia: IE3 (89-93%)
   - Enclosure: TEFC (outdoor) o ODP (indoor)
   - Service factor: 1.15
   ```

6. **Especificar VFD:**
   ```
   VFD capacity: 125% motor power (typical)
   Type: PWM (Pulse Width Modulation)
   Control input: 0-10VDC o 4-20mA
   Display: LCD con parámetros (Hz, kW, etc.)
   Protections: Overcurrent, overvoltage, overtemperature
   ```

7. **Calcular ahorro energético con VFD:**
   ```
   Escenario: Sistema VAV opera 60% caudal (promedio)

   Sin VFD (dampers throttling):
   Power @ 60% Q ≈ 85% full power

   Con VFD (Fan Law 3):
   Power @ 60% Q = (0.6)³ = 21.6% full power

   Ahorro: 85% - 21.6% = 63.4% energía
   Horas operación: 4000 h/año
   Costo energía: $0.12/kWh
   Calcular ahorro anual USD
   Payback period VFD: _____ años
   ```

### Entregables

- Hoja de selección de catálogo (screenshot o PDF)
- Curva característica con punto operación marcado
- Especificación motor + VFD
- Cálculo de ahorro energético
- Datasheet técnico completo (usar template Lección 5)

### Criterios de Aprobación

- ✅ Ventilador seleccionado cumple Q y ΔP requeridos
- ✅ Eficiencia ≥ 80% en punto operación
- ✅ Ruido ≤ 85 dBA
- ✅ Motor IE3 o superior
- ✅ VFD especificado correctamente
- ✅ Ahorro energético calculado y justificado

### Tiempo Estimado
**5-6 horas**

---

## Ejercicio 6: Sistema Completo de Aire Fresco y Extracción

### Descripción

Diseñar sistema integrado de ventilación con aire fresco (DOAS), extracción general y recuperación de energía (ERV) para edificio de oficinas. Balancear caudales y modelar sistema completo en Revit.

### Datos del Proyecto

```
Edificio: Oficinas 4 pisos
Área total: 3200 m² (800 m² por piso)
Ocupación: 320 personas (80 por piso)
Aire exterior requerido (ASHRAE 62.1): 4000 L/s

Sistema propuesto:
  - DOAS centralizado con ERV (azotea)
  - Extracción baños: 400 L/s total (8 baños × 50 L/s)
  - Extracción general oficinas: 3600 L/s (balance con OA)
```

### Tareas

1. **Diseñar sistema DOAS:**
   ```
   Caudal OA: 4000 L/s
   Tratamiento (verano):
   - Outdoor air: 32°C, 70% RH
   - Post-ERV: ~28°C, 60% RH (precondicionado)
   - Post-cooling coil: 13°C, 50% RH (deshumidificado)
   - Supply temp final: 15°C (neutral)
   ```

2. **Seleccionar ERV:**
   ```
   Tipo: Enthalpy wheel
   Caudal: 4400 L/s (10% margen)
   Eficiencia sensible: 75%
   Eficiencia latente: 65%

   Calcular ahorro energético:
   - kW sin ERV (tratar 32°C→13°C directamente)
   - kW con ERV (tratar 28°C→13°C post-ERV)
   - % ahorro
   ```

3. **Diseñar sistema de extracción:**
   ```
   Extracción baños:
   - 8 baños × 50 L/s = 400 L/s
   - Ducto vertical exclusivo (no mezclar con OA)
   - Descarga: Separada de toma OA (3m mínimo)

   Extracción general oficinas:
   - 3600 L/s (para balancear presión)
   - Routing a ERV (retorno energía)
   - Post-ERV → descarga exterior
   ```

4. **Balanceo de caudales:**
   ```
   Suministro (DOAS): 4000 L/s
   Extracción baños: 400 L/s
   Extracción oficinas: 3600 L/s
   ────────────────────────
   Total extracción: 4000 L/s ✓ (balanceado)

   Presión resultante: Neutra (±0 Pa)
   ```

5. **Routing de 4 ductos ERV:**
   ```
   1. Outdoor Air → ERV: 4000 L/s
   2. ERV → DOAS unit: 4000 L/s
   3. Exhaust (oficinas) → ERV: 3600 L/s
   4. ERV → Discharge exterior: 3600 L/s

   (Baños: Ducto independiente, no pasa por ERV)
   ```

6. **Dimensionar ductos:**
   ```
   Usar método equal friction 1.0 Pa/m
   Velocidad máxima: 8 m/s

   Calcular tamaño cada uno de 4 ductos ERV
   ```

7. **Modelar en Revit:**
   - Colocar ERV unit en azotea
   - Colocar DOAS unit
   - Routing de 4 ductos ERV
   - Ducto extracción baños (independiente)
   - Toma outdoor air (louver)
   - Descarga exhaust (roof cap)
   - Create Systems: OA System, Exhaust System

### Entregables

- Diagrama de flujo del sistema (4 ductos ERV + extracción baños)
- Cálculos de balance de caudales
- Cálculo de ahorro energético ERV
- Tabla dimensionamiento ductos
- Modelo Revit completo
- Isométrica del sistema
- Schedule de equipos (ERV, DOAS, ventiladores)

### Criterios de Aprobación

- ✅ Caudales balanceados (supply = exhaust)
- ✅ ERV correctamente conectado (4 ductos)
- ✅ Extracción baños separada de sistema ERV
- ✅ Ahorro energético ERV calculado (≥50% típico)
- ✅ Modelo Revit funcional y completo
- ✅ Distancia toma OA vs. descarga exhaust ≥3m

### Tiempo Estimado
**8-10 horas**

---

## Ejercicio 7: Presurización de Escaleras de Emergencia

### Descripción

Diseñar sistema de presurización positiva para escaleras de emergencia según códigos de seguridad contra incendios. Calcular caudales, dimensionar ventilador y especificar controles.

### Datos del Proyecto

```
Edificio: Torre de oficinas 15 pisos
Escaleras emergencia: 2 escaleras (Norte y Sur)
Configuración:
  - Cada escalera: 2.5m × 3.0m en planta
  - Altura por piso: 3.5m
  - Total altura: 15 pisos × 3.5m = 52.5m
  - Puertas: 15 puertas por escalera (1 por piso)

Requisitos código (IBC, NFPA 92):
  - Presión mínima: 12.5 Pa vs. áreas adyacentes
  - Presión máxima: 60 Pa (opening force puerta ≤133 N)
  - Mantener presión con 1 puerta abierta
```

### Tareas

1. **Calcular caudal de presurización:**
   ```
   Método simplificado (NFPA 92):

   Q = A_door × V_door × C

   Donde:
   A_door = Área puerta (típico 0.9m × 2.1m = 1.89 m²)
   V_door = Velocidad aire por puerta abierta (1.0-1.5 m/s)
   C = Factor (1.0 para 1 puerta, 0.85 para 2 puertas simultáneas)

   Calcular Q para:
   - Escenario 1: 1 puerta abierta
   - Escenario 2: 2 puertas abiertas (piso evacuación + piso refugio)
   Usar mayor valor
   ```

2. **Calcular pérdidas de presión:**
   ```
   Ducto vertical (shaft):
   - Tamaño estimado: 600mm × 400mm
   - Longitud: 52.5m + tramos horizontales
   - Friction loss
   - Accesorios (codos, dampers)
   ```

3. **Seleccionar ventilador de presurización:**
   ```
   Tipo: Inline centrifugal o vane-axial
   Caudal: [calculado] L/s
   Presión: [pérdidas ductos] + 25 Pa (presión entrega)
   Ubicación: Azotea (fan room) o base edificio
   Redundancia: 2 ventiladores (1 standby) recomendado
   ```

4. **Diseñar sistema de control:**
   ```
   Componentes:
   - Differential pressure sensor (escalera vs. corredor)
   - Controlador (mantener 12.5-60 Pa)
   - VFD ventilador (modular velocidad según presión)
   - Door position switches (detectar puertas abiertas)

   Lógica control:
   - Normal: Ventilador OFF
   - Alarma incendio: Ventilador ON (auto-start)
   - Modular VFD para mantener presión setpoint
   - Alarma si presión <10 Pa o >65 Pa
   ```

5. **Overrelief dampers:**
   ```
   Problema: Si todas puertas cerradas, presión puede exceder 60 Pa
   Solución: Barometric relief dampers

   Ubicación: Tope escalera (azotea)
   Setpoint: Abre cuando presión >55 Pa
   Tamaño: Calcular para limitar presión máxima
   ```

6. **Cálculo de air leakage:**
   ```
   Pérdidas por infiltración:
   - Por gaps puertas cerradas
   - Por construcción (no perfectamente hermética)

   Estimación: 10-20% caudal total
   Agregar a caudal requerido
   ```

7. **Modelar en Revit:**
   - Modelar 2 escaleras (15 pisos cada una)
   - Ducto vertical de presurización
   - Ventilador en azotea
   - Overrelief dampers
   - Anotar differential pressure sensor locations

### Entregables

- Memoria de cálculo (caudal, presión, ventilador)
- Diagrama de control (lógica, sensores, VFD)
- Especificación de ventilador de presurización
- Planos: Elevación escaleras + sistema presurización
- Schedule de equipos

### Criterios de Aprobación

- ✅ Caudal calculado según NFPA 92
- ✅ Presión diseño 12.5-60 Pa (cumple código)
- ✅ Ventilador seleccionado con redundancia
- ✅ Sistema de control completo (VFD, sensores)
- ✅ Overrelief dampers especificados
- ✅ Documentación profesional

### Tiempo Estimado
**6-8 horas**

---

## Resumen de Ejercicios del Módulo

### Progresión de Aprendizaje

1. **Ejercicio 1:** Extracción cocina comercial (campana Type I, NFPA 96)
2. **Ejercicio 2:** Ventilación natural (cross ventilation, aberturas)
3. **Ejercicio 3:** Dimensionamiento ductos (equal friction, pérdidas)
4. **Ejercicio 4:** Cálculo caudales (ASHRAE 62.1, multi-uso)
5. **Ejercicio 5:** Selección ventilador (curvas, eficiencia, VFD)
6. **Ejercicio 6:** Sistema integrado (DOAS, ERV, balance)
7. **Ejercicio 7:** Presurización emergencia (NFPA 92, control)

### Tiempo Total

**Total: 47-56 horas** de trabajo profesional

### Evaluación Final

Para aprobar el Módulo 4, debes:
- ✅ Completar los 7 ejercicios
- ✅ Obtener mínimo 80/100 en cada ejercicio
- ✅ Presentar proyecto final integrador (Ejercicio 6 o 7)
- ✅ Demostrar competencia en Revit MEP para sistemas de ventilación

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 4:** Sistemas de Ventilación
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
