# Lección 5: Selección de Ventiladores

![Selección de Ventiladores](../imagenes/leccion-05-ventiladores.png)

## Introducción

La **selección correcta del ventilador** es crítica para el rendimiento, eficiencia energética y nivel de ruido de sistemas HVAC. Un ventilador subdimensionado no proporciona el caudal requerido; uno sobredimensionado consume energía innecesaria y genera ruido excesivo.

En esta lección aprenderás tipos de ventiladores, interpretación de curvas características, selección según punto de operación, motores eléctricos, control de vibraciones y especificaciones técnicas profesionales.

**Duración estimada:** 60 minutos

---

## 1. Tipos de Ventiladores

### 1. Ventiladores Centrífugos (Centrifugal Fans)

**Principio:** Aire entra axialmente, sale radialmente (90° cambio dirección)

**Tipos según diseño de álabes:**

#### Forward Curved (FC) - Álabes Curvados Adelante
```
Características:
  - Álabes: Curvados en dirección de rotación
  - Eficiencia: 60-70% (baja-media)
  - Presión: Baja-media (hasta 1500 Pa)
  - Aplicación: HVAC residencial, pequeñas UMAs
  - Ventaja: Compacto, bajo costo
  - Desventaja: No-overloading (potencia aumenta con caudal)
```

#### Backward Inclined (BI) - Álabes Inclinados Atrás
```
Características:
  - Álabes: Inclinados contra dirección rotación
  - Eficiencia: 75-85% (alta)
  - Presión: Media-alta (hasta 3000 Pa)
  - Aplicación: HVAC comercial, UMAs grandes
  - Ventaja: Alta eficiencia, curva power auto-limiting
  - Desventaja: Mayor costo que FC
```

#### Airfoil - Perfil Aerodinámico
```
Características:
  - Álabes: Forma aerodinámica (como ala avión)
  - Eficiencia: 80-90% (muy alta)
  - Presión: Alta (hasta 5000 Pa)
  - Aplicación: Grandes sistemas HVAC, industrial
  - Ventaja: Máxima eficiencia, bajo ruido
  - Desventaja: Más costoso, sensible a erosión
```

#### Radial Blade - Álabes Radiales
```
Características:
  - Álabes: Rectos, radiales desde eje
  - Eficiencia: 50-60% (baja)
  - Presión: Muy alta (hasta 10,000 Pa)
  - Aplicación: Industrial pesado, manejo partículas
  - Ventaja: Robusto, no se obstruye
  - Desventaja: Baja eficiencia, alto ruido
```

### 2. Ventiladores Axiales (Axial Fans)

**Principio:** Aire entra y sale axialmente (mismo eje)

**Tipos:**

#### Propeller Fan - Hélice Simple
```
Características:
  - Sin envolvente o mínimo
  - Presión: Muy baja (<100 Pa)
  - Caudal: Alto (500-50,000 L/s)
  - Aplicación: Ventilación general, extractores ventana
  - Ventaja: Bajo costo, simple
  - Desventaja: No apto para sistemas con resistencia
```

#### Tube-Axial - Axial en Tubo
```
Características:
  - Montado dentro de tubo cilíndrico
  - Presión: Baja-media (100-500 Pa)
  - Eficiencia: 60-70%
  - Aplicación: Ductos cortos, ventilación directa
  - Ventaja: Compacto, instalación en-línea
```

#### Vane-Axial - Axial con Vanes (Álabes guía)
```
Características:
  - Vanes (álabes guía) post-impulsor (straighten flow)
  - Presión: Media (300-1500 Pa)
  - Eficiencia: 70-80%
  - Aplicación: Sistemas HVAC con ductos medianos
  - Ventaja: Mayor presión que tube-axial, eficiente
```

### 3. Ventiladores Mixtos (Mixed-Flow Fans)

**Principio:** Combinación flujo axial + centrífugo

```
Características:
  - Flujo diagonal (45° aprox)
  - Presión: Media (500-2000 Pa)
  - Eficiencia: 70-80%
  - Aplicación: Puente entre axial y centrífugo
  - Ventaja: Compacto con presión moderada
```

---

## 2. Curvas Características de Ventiladores

### Componentes de la Curva

**Gráfico típico:**
```
Eje Y: Presión estática (Pa)
Eje X: Caudal volumétrico (L/s o m³/h)

Curvas:
  1. Curva Presión-Caudal (P-Q)
  2. Curva Potencia-Caudal (Power-Q)
  3. Curva Eficiencia-Caudal (η-Q)
  4. Líneas de RPM constante (si multi-speed)
```

### Punto de Operación

**Definición:** Intersección de curva ventilador con curva sistema

```
Curva sistema:
  - Resistencia total del sistema (ductos + accesorios)
  - Forma: Parabólica (ΔP ∝ Q²)
  - Única para cada configuración de sistema

Punto de operación:
  - Donde curva ventilador = curva sistema
  - Determina caudal real y presión entregados
```

**Ejemplo:**
```
Ventilador seleccionado: Centrífugo BI, 1450 RPM
Curva fabricante: @ 5000 L/s → 800 Pa

Sistema requerido:
  - Caudal diseño: 5000 L/s
  - Presión estática total: 750 Pa (cálculo ductos)

Verificación:
  ✓ Punto operación (5000 L/s, 750 Pa) está sobre curva ventilador
  ✓ Eficiencia en ese punto: 82% (buena)
  ✓ Potencia requerida: ~5 kW
```

### Leyes de Similitud (Fan Laws)

**Para variación de RPM:**

```
Ley 1 (Caudal): Q₂/Q₁ = (RPM₂/RPM₁)
Ley 2 (Presión): P₂/P₁ = (RPM₂/RPM₁)²
Ley 3 (Potencia): Power₂/Power₁ = (RPM₂/RPM₁)³

Ejemplo:
Ventilador @ 1450 RPM: 5000 L/s, 800 Pa, 5 kW

Si reducir a 1200 RPM (VFD):
  Q₂ = 5000 × (1200/1450) = 4138 L/s
  P₂ = 800 × (1200/1450)² = 549 Pa
  Power₂ = 5 × (1200/1450)³ = 2.8 kW (ahorro 44%!)
```

---

## 3. Selección de Ventilador

### Procedimiento de Selección

**Paso 1: Determinar requisitos del sistema**

```
Datos necesarios:
  1. Caudal (Q): [valor] L/s o m³/h
  2. Presión estática total (ΔP_total): [valor] Pa
  3. Condiciones ambientales:
     - Temperatura aire (afecta densidad)
     - Altitud (afecta presión barométrica)
  4. Requisitos especiales:
     - Nivel ruido máximo (dBA)
     - Eficiencia mínima (%)
     - Espacio disponible
```

**Paso 2: Aplicar factores de seguridad**

```
Caudal: +10-15% (incertidumbres, futuras expansiones)
Presión: +10-15% (envejecimiento filtros, inexactitudes cálculo)

Ejemplo:
  Q_diseño = 5000 L/s → Q_selección = 5500 L/s
  ΔP_diseño = 750 Pa → ΔP_selección = 850 Pa
```

**Paso 3: Consultar catálogos de fabricantes**

```
Fabricantes típicos:
  - Tradewinds (México, Latinoamérica)
  - Greenheck (USA, global)
  - Systemair (Europa, global)
  - Soler & Palau (España, global)
  - TLT (industrial pesado)

Catálogo contiene:
  - Curvas P-Q para diferentes modelos
  - Tablas de selección
  - Software de selección (web o descargable)
```

**Paso 4: Seleccionar modelo específico**

```
Criterios:
  1. Punto operación (Q, ΔP) dentro curva ventilador
  2. Eficiencia en punto operación >75% (preferible >80%)
  3. Nivel ruido ≤ límite especificado
  4. Tamaño físico cabe en espacio disponible
  5. Costo dentro presupuesto

Ejemplo selección:
  Modelo: Greenheck BIDW-1080
  Tamaño: 1080mm diámetro rueda (42")
  RPM: 1450 (motor 4 polos)
  @ 5500 L/s → 850 Pa, η=83%, Ruido=78 dBA
  Potencia: 5.5 kW
  ✓ Cumple todos criterios
```

**Paso 5: Verificar motor eléctrico**

```
Potencia motor ≥ Potencia ventilador / Eficiencia motor

Potencia ventilador = (Q × ΔP) / (1000 × η_ventilador)
  = (5.5 m³/s × 850 Pa) / (1000 × 0.83)
  = 5.63 kW

Motor seleccionado: 7.5 kW (próximo estándar arriba)
Eficiencia motor IE3: 91%
Service factor: 1.15 (puede operar 15% sobre nominal)
```

---

## 4. Motores Eléctricos para Ventiladores

### Tipos de Motores

#### Motores AC Estándar (Induction Motors)

```
Clases eficiencia (IEC 60034-30):
  - IE1: Eficiencia estándar (85-88%) [obsoleto]
  - IE2: Alta eficiencia (87-90%) [mínimo aceptable]
  - IE3: Premium efficiency (89-93%) [recomendado]
  - IE4: Super premium (91-95%) [óptimo]

Polos y RPM (60 Hz):
  - 2 polos: 3600 RPM (alta velocidad, ventiladores pequeños)
  - 4 polos: 1800 RPM (media velocidad, más común)
  - 6 polos: 1200 RPM (baja velocidad, grandes ventiladores)
  - 8 polos: 900 RPM (muy baja velocidad)
```

#### Motores ECM (Electronically Commutated Motor)

```
Características:
  - Tecnología: DC brushless con control electrónico
  - Eficiencia: 85-95% en todo rango velocidad (vs. 70-90% AC)
  - Control: Velocidad variable integrado (no requiere VFD externo)
  - Costo: Mayor inicial (+30-50%), ahorro operativo
  - Aplicación: HVAC residencial, pequeños comerciales

Ventajas:
  - Alta eficiencia parcial load (crucial en VAV)
  - Compacto (control integrado)
  - Bajo ruido
```

### VFD - Variable Frequency Drive

**Función:** Variar velocidad motor AC mediante frecuencia variable

**Beneficios:**

```
Control velocidad:
  - Ajustar caudal sin dampers (eliminando throttling losses)
  - Ahorro energético significativo (Ley 3: Power ∝ RPM³)

Ejemplo:
  Reducir caudal a 80% (0.8Q):
    - Con damper: Potencia ≈ 90% (pérdida en damper)
    - Con VFD: Potencia ≈ 51% (0.8³ = 0.512)
    - Ahorro: 39% energía

Soft start:
  - Arranque suave (reduce corriente pico)
  - Menor desgaste mecánico
  - Protección eléctrica
```

**Consideraciones:**

```
Armónicos:
  - VFD genera armónicos eléctricos
  - Requiere: Line reactors o armonic filters

Cableado:
  - Cable VFD → Motor: Especial (shielded)
  - Longitud máxima: 100m (sin reactores)

Costo:
  - VFD: ~20-30% costo motor+instalación
  - Payback: 1-3 años (según horas operación)
```

---

## 5. Vibraciones y Aislamiento Acústico

### Control de Vibraciones

**Causas:**

```
Fuentes vibración:
  - Desbalance rotor (manufactura, desgaste)
  - Misalignment (motor-ventilador)
  - Bearing wear (rodamientos gastados)
  - Resonancia con estructura
```

**Soluciones:**

#### 1. Vibration Isolators (Spring/Rubber Mounts)

```
Tipos:
  - Spring isolators: Resortes acero (baja frecuencia, >90% aislamiento)
  - Rubber pads: Neopreno/caucho (media frecuencia, 70-80% aislamiento)
  - Air springs: Neumáticos (ultra-baja frecuencia, máximo aislamiento)

Selección:
  - Deflection: 25mm típico (1") para fans comerciales
  - Load capacity: Peso ventilador + motor / número mounts

Instalación:
  - Base inertia (concrete pad): 2-3× peso ventilador
  - Housekeeping pad: Elevar del piso, acceso mantenimiento
```

#### 2. Flexible Connections

```
Canvas connectors (ducto-ventilador):
  - Material: Lona reforzada, neopreno
  - Longitud: 150-300mm (6-12")
  - Función: Desacoplar vibraciones ventilador de ductos

Spring hangers (ductos suspendidos):
  - Soporte ductos con resortes (no rígido)
  - Evitar transmisión vibración a estructura
```

### Atenuación Acústica

**Fuentes de ruido:**

```
Ruido ventilador:
  1. Mecánico (motor, bearings): Transmitido por estructura
  2. Aerodinámico (aire en álabes): Transmitido por aire (ducto)

Frecuencias:
  - BPF (Blade Pass Frequency): RPM × número álabes / 60
    Ejemplo: 1450 RPM, 10 álabes → 242 Hz (tono puro)
  - Broadband noise: Rango amplio frecuencias (turbulencia)
```

**Soluciones:**

#### 1. Silenciadores de Ducto (Duct Silencers)

```
Tipos:
  - Dissipative: Absorción acústica (fiberglass, foam)
  - Reactive: Reflexión (cámaras resonantes)
  - Hybrid: Combinación ambos

Selección:
  - Atenuación requerida: [valor] dB
  - Octave bands críticas: Típico 125-2000 Hz
  - Caída presión adicional: 50-150 Pa (considerar en sizing)
  - Longitud: 1-3m (mayor longitud = mayor atenuación)

Ubicación:
  - Cerca de ventilador (fuente)
  - Antes de espacios ocupados
  - Supply y return air (ambos)
```

#### 2. Acoustic Enclosure (Cerramiento Acústico)

```
Para ventiladores en cuartos mecánicos:
  - Paneles: Acero con aislamiento acústico interno
  - Atenuación: 20-40 dB (según espesor)
  - Ventilación: Louvers acústicos (entrada/salida aire cooling)
  - Acceso: Puertas acústicas para mantenimiento

Consideración: Requiere espacio adicional (~1m alrededor ventilador)
```

---

## 6. Especificaciones Técnicas

### Datasheet Técnico del Ventilador

**Contenido mínimo:**

```
1. IDENTIFICACIÓN
   - Fabricante: Greenheck
   - Modelo: BIDW-1080-4-DI
   - Tipo: Centrifugal, backward inclined, double inlet
   - Tamaño: 1080mm (42") wheel diameter

2. PERFORMANCE
   - Caudal (Q): 5500 L/s @ 850 Pa
   - Eficiencia (η): 83% @ punto diseño
   - Potencia ventilador: 5.6 kW
   - RPM: 1450

3. MOTOR ELÉCTRICO
   - Potencia: 7.5 kW (10 HP)
   - Voltaje: 460V 3-phase 60Hz
   - Eficiencia: IE3 (91%)
   - Service factor: 1.15
   - Mounting: Foot-mounted, TEFC enclosure

4. CONSTRUCCIÓN
   - Material wheel: Galvanized steel
   - Material housing: Galvanized steel calibre 16
   - Bearings: Heavy-duty ball bearings
   - Drive: Belt drive (V-belts)

5. ACÚSTICA
   - Sound power level (Lw): 95 dBA @ punto diseño
   - Sound pressure (Lp) @ 3m: 78 dBA

6. CONEXIONES
   - Inlet size: 800mm × 600mm rectangular
   - Outlet size: 900mm diameter round
   - Flanges: SMACNA standard

7. PESO
   - Shipping weight: 250 kg
   - Operating weight: 280 kg (con motor)
```

### Marcado CE y Certificaciones

```
Marcas requeridas (mercado europeo/internacional):
  - CE: Cumple directivas UE
  - AMCA (Air Movement and Control Association): Tested performance
  - UL: Safety listing (mercado USA)
  - ATEX: Para atmospheres explosivas (industrial)

Normas aplicables:
  - ISO 5801: Industrial fans - Performance testing
  - ISO 13349: Fan sound power determination
  - EN 12101-3: Smoke and heat extraction fans
```

---

## 7. Modelado en Revit MEP

### Colocar Mechanical Equipment (Fan)

1. **Load Family:**
   ```
   Insert tab → Load Family → Mechanical Equipment
   Buscar: "Centrifugal Fan" o catálogo fabricante (.rfa)
   ```

2. **Colocar en cuarto mecánico:**
   - Place → Orient correctamente (inlet, outlet)
   - Height: Sobre housekeeping pad (0.5m típico)

3. **Configurar propiedades:**
   ```
   Airflow: 5500 L/s
   Static Pressure: 850 Pa
   Motor Power: 7.5 kW
   Model: BIDW-1080 (texto)
   Manufacturer: Greenheck
   ```

4. **Conectar a ductos:**
   - Inlet connector → Return duct
   - Outlet connector → Supply duct
   - Revit crea automáticamente System

### Create Equipment Schedule

```
View → Create Schedule → Mechanical Equipment
Campos:
  - Mark (número único)
  - Family and Type
  - Airflow (L/s)
  - Static Pressure (Pa)
  - Motor Power (kW)
  - Efficiency (%)
  - Sound Level (dBA)
  - Manufacturer
  - Model

Sort: Por Mark (alfanumérico)
```

---

## 8. Ejercicio Práctico

### Seleccionar Ventilador para UMA

**Datos sistema:**
```
Aplicación: UMA roof-mounted
Caudal diseño: 8000 L/s
Pérdidas presión calculadas:
  - Filtros (MERV 13): 200 Pa
  - Cooling/Heating coils: 150 Pa
  - Ductos supply: 350 Pa
  - Ductos return: 200 Pa
  - Total: 900 Pa

Requisitos adicionales:
  - Nivel ruido máximo: 85 dBA @ 3m
  - Eficiencia mínima: 78%
  - Motor: IE3 mínimo
  - Budget: <$15,000 USD
```

**Tareas:**

1. **Aplicar safety factors:**
   - Caudal selección: 8000 × 1.10 = 8800 L/s
   - Presión selección: 900 × 1.15 = 1035 Pa

2. **Investigar catálogos (simulado):**
   - Fabricante: Greenheck, Systemair, o similar
   - Tipo recomendado: Centrifugal backward inclined (eficiencia)
   - Tamaño estimado: 1200-1400mm wheel

3. **Seleccionar modelo específico:**
   - Verificar punto (8800 L/s, 1035 Pa) en curva
   - Eficiencia en punto operación: ___ %
   - Ruido: ___ dBA
   - Potencia ventilador: ___ kW

4. **Dimensionar motor:**
   - Potencia requerida: (Q × ΔP) / (1000 × η)
   - Motor seleccionado: ___ kW (próximo estándar)
   - Clase eficiencia: IE3 o IE4

5. **Considerar VFD:**
   - ¿Sistema VAV? → VFD recomendado
   - Ahorro estimado: 30-40% energía anual
   - Costo VFD: +25% costo motor
   - Payback period: ___ años

6. **Especificar:**
   - Crear datasheet técnico (usando template lección)
   - Listar: Model, Q, ΔP, η, Power, Motor, Ruido
   - Dibujo esquemático mostrando inlet/outlet

**Entregables:**
- Hoja cálculo selección (Excel)
- Datasheet técnico del ventilador
- Justificación de selección (1 página)
- Especificación de motor + VFD (si aplica)

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Tipos de ventiladores** - centrífugos (FC, BI, airfoil, radial), axiales, mixtos
✅ **Curvas características** - P-Q, Power-Q, eficiencia, punto de operación
✅ **Fan Laws** - variación RPM, ahorro energético con VFD
✅ **Selección profesional** - procedimiento, safety factors, catálogos
✅ **Motores** - AC estándar (IE2-IE4), ECM, VFD
✅ **Vibraciones y ruido** - isolators, flexible connections, silenciadores
✅ **Especificaciones técnicas** - datasheet completo, certificaciones
✅ **Modelado en Revit** - colocación, propiedades, schedules

---

## Conclusión del Módulo 4

### Módulo Completado

Has finalizado el **Módulo 4: Sistemas de Ventilación**, cubriendo:

- **Lección 1:** Sistemas de extracción (campanas, rejillas, ductos)
- **Lección 2:** Aire fresco y ventilación (tomas OA, HRV/ERV, filtración)
- **Lección 3:** Ventilación mecánica (DOAS, DCV, presurización)
- **Lección 4:** Dimensionamiento de ductos (métodos, pérdidas, equilibrado)
- **Lección 5:** Selección de ventiladores (tipos, curvas, motores)

### Próximo Módulo

**Módulo 5: Documentación y Coordinación MEP**

Aprenderás a generar documentación técnica completa, crear tablas de equipos, etiquetado profesional, coordinación con arquitectura y estructura, clash detection y preparación de modelos para fabricación MEP.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 4:** Sistemas de Ventilación
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
