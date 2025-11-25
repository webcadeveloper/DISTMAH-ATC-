# Lección 3: Ventilación Mecánica

![Ventilación Mecánica](../imagenes/leccion-03-ventilacion-mecanica.png)

## Introducción

La **ventilación mecánica** utiliza equipos especializados para controlar la calidad del aire interior mediante suministro de aire fresco, extracción de aire viciado y recuperación de energía. Los sistemas modernos incluyen recuperadores de calor (HRV), intercambiadores de energía (ERV), ventilación por demanda (DCV) y controles automatizados.

En esta lección aprenderás a diseñar sistemas de ventilación centralizada, seleccionar equipos de recuperación de energía, implementar ventilación por demanda con sensores CO2 y diseñar presurización de espacios especiales.

**Duración estimada:** 60 minutos

---

## 1. Unidades de Ventilación Centralizada

### DOAS - Dedicated Outdoor Air System

**Definición:** Sistema dedicado exclusivamente a tratar aire exterior (100% OA)

**Principio:**
```
Función: Decouple outdoor air from space conditioning
  - DOAS maneja carga latente (humedad) del aire exterior
  - Sistemas locales (FCU, chilled beams) manejan carga sensible

Ventajas:
  - Control independiente de humedad
  - Menor consumo energético (vs. mezclar OA en UMA grande)
  - Mejor calidad aire (100% OA garantizado)
```

**Configuración típica:**
```
Outdoor Air → Pre-Filter (MERV 8)
           → Cooling Coil (deshumidifica verano)
           → Heating Coil (calienta invierno)
           → Final Filter (MERV 13)
           → Supply Fan
           → Ducto a espacios

Tratamiento:
  - Verano: Enfriar + deshumidificar a 13-15°C, 50% RH
  - Invierno: Calentar + humidificar a 15-18°C, 40% RH
```

**Caudal de diseño:**
```
Q_DOAS = Σ(Aire exterior requerido por espacios)

Ejemplo edificio oficinas:
  - Total aire exterior: 5000 L/s (según cálculo ASHRAE 62.1)
  - DOAS capacity: 5500 L/s (10% margen)
```

### MAU - Makeup Air Unit

**Definición:** Unidad que suministra aire de reemplazo (makeup air)

**Aplicación típica:**
```
Función: Compensar aire extraído por campanas de cocina
  - Cocina extrae: 4000 L/s (campana)
  - MAU suministra: 4000 L/s (balance presión)

Sin MAU:
  - Presión negativa excesiva
  - Dificultad abrir puertas
  - Infiltración no controlada
  - Problemas en sistemas combustión

Con MAU:
  - Presión balanceada
  - Aire ingresa filtrado y temperado
  - Control de humedad y temperatura
```

**Configuración:**
```
Outdoor Air 100% → Heating Coil (gas o eléctrico)
                 → Filter (MERV 8 mínimo)
                 → Supply Fan
                 → Ducto a espacio (cerca de campana)

Temperatura suministro:
  - Invierno: 15-18°C (templado, no frío directo)
  - Verano: Sin tratamiento o cooling ligero
```

---

## 2. Recuperadores de Calor (HRV)

### Principio de Operación

**Intercambiador de calor sensible:**

```
Flujos cruzados sin mezcla:
  - Aire exterior (frío) ↑
  - Aire extracción (caliente) ↓
  - Transferencia de calor a través de placas metálicas
  - Flujos NO se mezclan (separados físicamente)

Configuraciones:
  - Plate heat exchanger (placas paralelas)
  - Cross-flow (flujo cruzado)
  - Counter-flow (contraflujo, mayor eficiencia)
```

### Eficiencia de Recuperación

**Fórmula:**

```
η_sensible = (T_sa - T_oa) / (T_ra - T_oa) × 100%

Donde:
T_sa = Temperatura supply air (post-HRV)
T_oa = Temperatura outdoor air (pre-HRV)
T_ra = Temperatura return air (aire extracción)
```

**Ejemplo de cálculo:**

```
Invierno:
  T_oa = 0°C (aire exterior)
  T_ra = 20°C (aire extracción)
  η = 75% (eficiencia HRV)

T_sa = T_oa + η × (T_ra - T_oa)
T_sa = 0 + 0.75 × (20 - 0) = 15°C

Resultado:
  - Sin HRV: Aire entra a 0°C → carga calefacción total
  - Con HRV: Aire entra a 15°C → 75% reducción carga
```

### Bypass de Verano

**Problema:**
```
Verano: T_exterior (30°C) > T_interior (24°C)
  - HRV precalienta aire exterior → NO deseado
  - Incrementa carga de enfriamiento
```

**Solución: Bypass Damper**

```
Modos de operación:
  - Invierno: HRV activo (recupera calor)
  - Verano: Bypass activo (aire exterior directo, sin precalentar)
  - Entretiempo: Economizer (100% OA si T_ext favorable)

Control:
  - Sensor temperatura exterior
  - Comparador con setpoint (típico 18-20°C)
  - Actuador motoriza dampers bypass
```

---

## 3. Intercambiadores de Energía (ERV)

### Principio de Operación Entálpica

**Intercambiador de calor sensible + latente:**

```
Transferencia:
  - Calor sensible (temperatura) vía conducción
  - Calor latente (humedad) vía difusión molecular

Medios:
  - Enthalpy wheel (rueda desecante rotatoria)
  - Membrane exchanger (membrana permeable humedad)
  - Hygroscopic coating (recubrimiento higroscópico)
```

### Enthalpy Wheel (Rueda Entálpica)

**Configuración:**

```
Componente: Rueda cilíndrica 1-2m diámetro, aluminio + desecante
Rotación: 10-20 RPM (motor eléctrico)
Sector caliente: Atravesado por aire extracción (20°C, 50% RH)
Sector frío: Atravesado por aire exterior (0°C, 30% RH)

Transferencia:
  - Rueda absorbe calor + humedad del aire extracción
  - Rueda libera calor + humedad al aire exterior (precalentamiento + humidificación)
  - Proceso continuo (rotación)
```

**Eficiencias típicas:**

```
Sensible efficiency: 70-80%
Latent efficiency: 60-70%
Total efficiency: 65-75% (promedio ponderado)

Ejemplo verano (alta humedad):
  Exterior: 32°C, 70% RH (punto rocío 26°C)
  Extracción: 24°C, 50% RH (punto rocío 13°C)

  Post-ERV: ~27°C, 55% RH (reducción carga latente 60%)
  Ahorro: Deshumidificación mecánica reducida significativamente
```

### Cross-Contamination (Contaminación Cruzada)

**Problema:**
```
Enthalpy wheels: Pequeño % aire extracción puede transferirse a suministro
  - Rotación lleva trazas de aire extracción al lado suministro
  - Cross-contamination: 1-5% típico
```

**Soluciones:**

1. **Purge sector:**
   ```
   Sector adicional en rueda purgado con aire exterior
   Reduce cross-contamination a <1%
   ```

2. **Membrane ERV:**
   ```
   Sin partes móviles
   Membrana permeable solo humedad (no aire)
   Cross-contamination: ~0% (ideal hospitales)
   Eficiencia: Menor que enthalpy wheel (50-60%)
   ```

---

## 4. Ventilación por Demanda (DCV - Demand Control Ventilation)

### Principio de DCV

**Concepto:**
```
Modular aire exterior según ocupación real (vs. máxima diseño)

Ocupación variable:
  - Salas conferencias: 0-50 personas (alta variación)
  - Oficinas open: 30-50 personas (media variación)
  - Aulas: 0-30 estudiantes (alta variación)

Sin DCV:
  - Aire exterior constante para ocupación máxima (50 personas)
  - Sobreventilación cuando hay 10 personas (desperdicio energético)

Con DCV:
  - Aire exterior proporcional a ocupación actual
  - Ahorro energético: 30-50% en carga ventilación
```

### Sensores CO2

**Principio:**

```
CO2 como proxy de ocupación:
  - Exterior: ~400 ppm CO2
  - Interior sin ocupación: ~400 ppm
  - Interior con personas: 400-1200 ppm (respiración)

Relación:
  - Más personas → Mayor CO2
  - Menos personas → Menor CO2

Setpoint típico: 800-1000 ppm (confort + IAQ)
```

**Control loop:**

```
Sensor CO2 → Controlador (BMS) → Modulación damper aire exterior

Lógica:
  IF CO2 > 1000 ppm THEN
    Abrir damper OA (incrementar ventilación)
  ELSE IF CO2 < 800 ppm THEN
    Cerrar damper OA (reducir ventilación, ahorrar energía)
  ENDIF

  Límite mínimo: 25-30% OA damper (normativa)
```

**Ubicación sensores:**

```
Altura: 1.2-1.5m (zona respiración)
Posición: Representativa del espacio (centro, lejos ventanas)
Cantidad: 1 sensor por zona térmica o cada 100-150 m²
Calibración: Anual (drift típico sensores CO2)
```

### DCV en Revit MEP

**Implementación:**

1. **Modelar HVAC Zone con DCV:**
   - Properties → Ventilation: Demand Control Ventilation = YES
   - Design Occupancy: Máxima (50 personas)
   - Actual Occupancy: Variable (parámetro conectado a sensor)

2. **Schedule mostrando:**
   - Zone, Max Occupancy, Design OA, Actual OA (calculado dinámico)

3. **Nota:** Revit no simula control dinámico (solo cálculo estático)
   - Para simulación dinámica: Exportar a EnergyPlus, TRNSYS

---

## 5. Control de Ventilación con Sensores

### Sensores de Calidad de Aire

#### 1. Sensor CO (Monóxido de Carbono)

**Aplicación:** Estacionamientos

```
Rangos típicos:
  - 0-50 ppm: Control normal
  - 50-100 ppm: Incrementar ventilación
  - >100 ppm: Máxima ventilación + alarma

Control:
  - Múltiples sensores (cada 200 m² estacionamiento)
  - Promedio o max (usar peor caso)
  - Ventiladores con VFD modulan según nivel CO
```

#### 2. Sensor VOC (Volatile Organic Compounds)

**Aplicación:** Espacios con emisiones variables (oficinas nuevas, renovaciones)

```
Fuentes VOC:
  - Pinturas, barnices
  - Alfombras, muebles nuevos
  - Productos de limpieza
  - Fotocopiadoras, impresoras

Control:
  - Sensor VOC detecta incremento
  - Aumentar ventilación temporalmente
  - Flush out período post-construcción
```

#### 3. Sensor Partículas (PM2.5, PM10)

**Aplicación:** Áreas urbanas con contaminación exterior alta

```
Medición:
  - PM10: Partículas <10 μm
  - PM2.5: Partículas <2.5 μm (más peligrosas, penetran pulmones)

Control lógico:
  IF PM2.5_exterior > 100 μg/m³ (Alta contaminación) THEN
    Reducir aire exterior a mínimo (25%)
    Incrementar recirculación con filtro MERV 13+
  ELSE
    Aire exterior normal (economizer si aplica)
  ENDIF
```

---

## 6. Presurización y Despresurización de Espacios

### Presurización Positiva

**Objetivo:** Prevenir entrada de aire no deseado

**Aplicaciones:**

#### Quirófanos (Operating Rooms)

```
Presión: +2.5 Pa vs. corredores
Renovaciones: 20 ACH mínimo (15 ACH aire exterior)
Filtración: MERV 14 + HEPA final (99.97% eficiencia)
Flujo: Laminar (techo → piso)

Control:
  - Differential pressure sensor (sala vs. corredor)
  - Modular extracción para mantener +2.5 Pa
  - Alarma si presión <1 Pa
```

#### Salas Blancas (Clean Rooms)

```
ISO Class 5 (Clase 100):
  - Presión: +10-15 Pa vs. áreas adyacentes
  - Renovaciones: 400-600 ACH (alta dilución)
  - Filtros HEPA: 100% cobertura techo
  - Partículas: <100 partículas/ft³ (≥0.5 μm)
```

### Despresurización Negativa

**Objetivo:** Contener contaminantes

**Aplicaciones:**

#### Laboratorios BSL-3 (Biohazard)

```
Presión: -12.5 Pa vs. corredores
Extracción: 100% aire exterior (0% recirculación)
Renovaciones: 12 ACH mínimo
Secuencia salida: Inactivación (autoclave) → Filtro HEPA → Descarga

Control:
  - Dual differential pressure sensors (redundancia)
  - Alarma si presión > -5 Pa
  - Interlocks: Bloqueo puertas si presión no alcanzada
```

#### Cuartos de Aislamiento (Hospitales)

```
Airborne infection isolation room (AIIR):
  - Presión: -2.5 Pa vs. corredor
  - Renovaciones: 12 ACH (2 ACH aire exterior mínimo)
  - Antesala: Presión intermedia (-1.25 Pa)
  - Extracción: Filtro HEPA antes de descarga
```

### Airlock (Esclusa de Aire)

**Configuración:**

```
Secuencia presión:
  Área limpia (+5 Pa) → Airlock (0 Pa) → Área sucia (-5 Pa)

Puertas:
  - Interlock: Solo una puerta abierta a la vez (control eléctrico)
  - Self-closing: Cierre automático

Ventilación:
  - Suministro + extracción balanceados (presión neutra)
  - Renovaciones: 15-20 ACH (rápida limpieza al cerrar puertas)
```

---

## 7. Integración con BMS (Building Management System)

### Puntos de Monitoreo

**Para sistema HRV/ERV:**

```
Sensores (inputs):
  - Temperature outdoor air (T_oa)
  - Temperature supply air pre/post HRV (T_sa)
  - Temperature exhaust air (T_ea)
  - Differential pressure filters (ΔP)
  - Status fans (on/off, fault)
  - VFD speed (Hz o %)

Comandos (outputs):
  - Start/stop fans
  - VFD speed setpoint
  - Bypass damper position
  - Heating/cooling valve position (si integral)
```

### Secuencias de Control

**Modo heating (invierno):**

```
1. IF T_oa < 18°C THEN
     HRV core active (bypass closed)
     Heating coil modulates to maintain T_sa = 18°C
   ENDIF

2. IF ΔP_filter > 250 Pa THEN
     Alarm "Replace filters"
   ENDIF

3. Morning warmup (6 AM):
     Close OA damper 100%
     Recirculate + heat to 20°C
     Open OA damper gradually (7 AM)
```

**Modo cooling (verano):**

```
1. IF T_oa > 24°C THEN
     ERV core active (transferir humedad)
   ELSE IF T_oa < 20°C THEN
     Bypass open (free cooling)
   ENDIF

2. Economizer logic:
   IF (T_oa < T_setpoint - 2°C) AND (RH_oa < 60%) THEN
     Open OA damper 100% (free cooling)
     Reduce/stop mechanical cooling
   ENDIF
```

---

## 8. Ejercicio Práctico

### Diseñar Sistema DOAS con ERV

**Proyecto:**
```
Edificio oficinas: 3 pisos, 2400 m² total
Ocupación diseño: 240 personas (0.10 personas/m²)
Aire exterior requerido: 3000 L/s (cálculo ASHRAE 62.1)
Ubicación: Clima húmedo (verano 32°C, 70% RH)
```

**Tareas:**

1. **Seleccionar equipo ERV:**
   - Caudal: 3300 L/s (10% margen)
   - Sensible efficiency: Mínimo 70%
   - Latent efficiency: Mínimo 60%
   - Tipo: Enthalpy wheel o membrana

2. **Calcular ahorro energético (verano):**
   - Sin ERV: Tratar 32°C, 70% RH → 13°C, 50% RH
   - Con ERV (70% eff): Precondicionamiento reduce carga
   - Calcular kW ahorrados (sensible + latente)

3. **Diseñar ductos (4 ramales):**
   - Outdoor air intake → ERV (ducto 1)
   - ERV → Supply (to DOAS unit) (ducto 2)
   - Exhaust (from spaces) → ERV (ducto 3)
   - ERV → Discharge exterior (ducto 4)
   - Dimensionar cada ramal (velocidad 6-8 m/s)

4. **Control sequences:**
   - Documentar lógica bypass verano/invierno
   - Puntos de monitoreo BMS
   - Alarmas y safeties

5. **Modelar en Revit:**
   - Colocar ERV unit en cuarto mecánico
   - Routing de 4 ductos
   - Air terminals intake/discharge
   - Create systems (OA system, Exhaust system)

**Entregables:**
- Cálculos de caudal y eficiencia energética
- Especificación de ERV seleccionado
- Planos: Planta cuarto mecánico + isométrica ductos
- Secuencias de control documentadas

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **DOAS y MAU** - sistemas dedicados aire exterior y makeup air
✅ **HRV** - recuperación calor sensible, eficiencias, bypass
✅ **ERV** - recuperación calor sensible + latente, enthalpy wheels
✅ **DCV** - ventilación por demanda con sensores CO2
✅ **Sensores IAQ** - CO, VOC, PM2.5 para control avanzado
✅ **Presurización** - espacios positivos (quirófanos) y negativos (laboratorios)
✅ **Integración BMS** - puntos monitoreo, secuencias control

---

## Próxima Lección

**Lección 4: Dimensionamiento de Ductos**

Aprenderás métodos de cálculo de caudales de ventilación, normas de renovación de aire por uso, velocidades recomendadas en conductos, pérdidas de carga por fricción, métodos de equilibrado y dimensionamiento de accesorios.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 4:** Sistemas de Ventilación
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
