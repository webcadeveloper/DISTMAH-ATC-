# Lección 7: Conexiones de Sistemas - Integración Hidráulica y Control

## Introducción

La integración completa de un sistema HVAC no se limita a ductos de aire. Los sistemas de climatización modernos requieren conexiones hidráulicas (agua fría, agua caliente, drenaje) y sistemas de control (tuberías neumáticas, cables eléctricos) que coordinan el funcionamiento de todos los componentes. Esta lección aborda cómo diseñar, modelar y documentar estas conexiones de manera coordinada e integrada.

## Sistemas Hidráulicos en HVAC

### Circuito de Agua Fría (Chilled Water)

**Función principal:**
Transporta agua a baja temperatura (6-7°C típico) desde enfriador central a serpenties de enfriamiento en UMAs y/o fan coils en zonas.

**Componentes del circuito:**

**Enfriador (Chiller):**
- Equipo central que genera agua fría
- Ubicación: Sala de máquinas, sótano, azotea
- Capacidad: Suma de todos los serpenties enfriamiento
- Control: Válvula de expansión, compresor modulante

**Bomba de circulación:**
- Impulsa agua a través del sistema
- Ubicación: Junto al chiller
- Caudal: Típicamente 1.5 a 2.5 L/s por kW de enfriamiento
- Presión: 200-400 kPa según altura edificio

**Tuberías:**
- Diámetro determinado por velocidad deseada (0.9-1.8 m/s)
- Aislamiento obligatorio: 25-50 mm
- Material: Cobre (estándar), acero galvanizado, PPR

**Válvula de aislamiento:**
- Cierre manual antes/después chiller
- Permite mantenimiento sin vaciar sistema

**Válvula check (anti-retorno):**
- Previene flujo inverso
- Ubicación: Salida bomba

**Medidor de caudal:**
- Opcional pero recomendado
- Verifica caudal versus diseño
- Ubicación: Línea principal salida chiller

**Vaso de expansión:**
- Compensa cambios volumen agua con temperatura
- Membrana interna
- Presión inicial: típicamente 50 kPa

**Ejemplo de circuito:**

```
Chiller ─→ Bomba ─→ Válvula check ─→ Válvula aislamiento
                                           ↓
            ←─────────── Retorno agua fría ←─
                         (temperatura 12-14°C)

                         Suministro agua fría
                         (temperatura 6-7°C)
                              ↓
            ┌─────────────────┼─────────────────┐
            ↓                 ↓                 ↓
        UMA Piso 1        UMA Piso 2       Fan coil zona
        Serpenties        Serpenties         (Perimetral)
        (100 kW)          (75 kW)            (25 kW)
            ↓                 ↓                 ↓
            └─────────────────┼─────────────────┘
                              ↓
                      Retorno a chiller
                      (14°C de regreso)
```

### Circuito de Agua Caliente (Hot Water)

**Función principal:**
Suministra agua a 60-70°C para calefacción espacios (fan coils), precalentamiento aire exterior, recalentamiento en cajas VAV.

**Componentes del circuito:**

**Generador de calor:**
- Caldera (gas, diesel, biomasa)
- Bomba de calor (en climas moderados)
- Sistema solar térmico (complementario)
- Típicamente 70-85°C salida

**Bomba de circulación agua caliente:**
- Típicamente 1.2 m/s velocidad
- Presión: 150-300 kPa
- Caudal: Aproximadamente 1 L/s por 30 kW

**Tuberías:**
- Aislamiento 25-40 mm mínimo
- Material: Cobre, acero con rosca, PPR
- Drenaje: Punto bajo sistema

**Válvulas termostáticas en ramales:**
- Control temperatura cada zona
- Cartucho intercambiable
- Rango ajuste: 30-65°C típico

**Ejemplo sistema agua caliente:**

```
Caldera (80°C) ─→ Bomba ─→ Válvula aislamiento
                                   ↓
            ┌───────────────────────┼───────────────────────┐
            ↓                       ↓                       ↓
        Serpenties              Radiadores            Recalentadores
        UMA (25 kW)            (30 kW)                VAV (15 kW)
            ↓                       ↓                       ↓
            └───────────────────────┼───────────────────────┘
                                    ↓
                            Retorno a caldera
                            (40-50°C regreso)

Control: Válvulas termostáticas en cada ramal
```

### Tuberías de Condensado

**Función:**
Evacua agua de condensación desde serpenties de enfriamiento.

**Generación de condensado:**
- Al aire pasa sobre serpentín frío, pierde humedad
- Típico: 0.5-2 L/hora por m² de serpentín
- En zona 1000 m² con carga 100 kW: ~5-10 L/hora

**Componentes:**

**Bandeja de drenaje:**
- Bajo cada serpentín enfriamiento
- Profundidad mínima 50 mm
- Drenaje hacia punto bajo

**Tuberías de cobre o PVC:**
- Diámetro mínimo 10-12 mm
- Pendiente mínima 1:50 (2%)
- Nunca horizontal

**Sifón (trap) hidráulico:**
- Crea sello de agua
- Impide entrada aire, olores desde drenaje
- Altura agua: 50 mm mínimo

**Drenaje final:**
- Hacia sistema de drenaje sanitario del edificio
- O hacia sumidero si no hay drenaje
- Nunca directamente a exterior sin protección

**Ejemplo de drenaje:**

```
Serpenties UMA
    ↓
Bandeja drenaje (cobre 0.5 mm)
    ↓
Tuberías cobre 12 mm (con pendiente 2%)
    ↓
Sifón (sello agua 50 mm)
    ↓
Sistema drenaje edificio (sanitarias) o sumidero
```

## Sistemas de Control y Automatización

### Tuberías de Aire de Control (Neumático)

En sistemas neumáticos (cada vez menos común):

**Compresora de aire:**
- Genera aire a 600-700 kPa
- Regulada a 400 kPa para controles

**Tuberías neumáticas:**
- Material: Cobre, acero inoxidable, tubería de poliuretano
- Diámetro: Típicamente 6-10 mm
- Instalación: Oculta en paredes, ductos, cielorraso

**Actuadores neumáticos:**
- Dampers: Aire presionizado abre/cierra
- Válvulas: Aire modula posición

**Limitación:**
- Cada línea requiere tubería dedicada
- Alto costo instalación
- Reemplazado por sistemas eléctricos/IP modernos

### Sistemas Eléctricos de Control (Modernos)

**Componentes de control:**

**Controlador central (BMS):**
- Computadora que procesa lógica
- Típicamente en cuarto de control
- Comunica con todos los equipos HVAC

**Sensores (inputs):**
- Temperatura (aire, agua)
- Humedad relativa
- Presión diferencial
- Flujo de agua/aire
- Detección ocupación

**Actuadores (outputs):**
- Motores eléctricos para dampers
- Válvulas proporcionales
- Variadores de velocidad (VFD) ventiladores
- Contactores relés

**Cableado de control:**
- Típicamente 18-14 AWG
- Instalación: Canales, bandejas, tubería conduit
- Separación de cableado de fuerza (seguridad)
- Blindado si cruza grandes distancias

**Protocolo de comunicación:**
- Modbus, BACnet estándar en comercial
- TCP/IP para integración edificio
- Redundancia: Cableado dual en sistemas críticos

### Integración BMS (Building Management System)

**Función general:**
Sistema centralizado que monitorea y controla todos sistemas edificio (HVAC, iluminación, seguridad, etc.).

**Interfase típica:**
```
┌─────────────────────────────────┐
│     Control Central (BMS)       │
│  (Computadora, software control)│
└────────────────────┬────────────┘
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
    Sensores     Actuadores   Displays
    (inputs)     (outputs)    (HMI)
        │            │
    ┌───┴────┬───────┴────┐
    ↓        ↓            ↓
  Temp     Damper      Monitor
  Humedad  Bomba       Alertas
  Presión  Ventilador  Reportes
```

**Lógica de control HVAC:**
```
IF Temperatura_zona > Setpoint THEN
  → Abrir damper VAV (aumentar caudal)
  → Aumentar ventilador
  → Abrir válvula agua fría si necesario

IF Temperatura exterior > 26°C AND Ocupación = BAJA THEN
  → Parar ventilador recirculación (economizador)
  → Incrementar aire exterior
  → Reducir carga enfriador

IF Presión diferencial ducto > 150 Pa THEN
  → ALERTA: Filtro saturado
  → Enviar notificación mantenimiento
```

## Modelado de Conexiones en Revit MEP 2026

### Tuberías de Agua en Revit

**Inserción de tuberías:**
1. En ribbon Piping, seleccionar **Hydronic Systems > Pipe**
2. Elegir tipo (cobre 12 mm, acero 25 mm, etc.)
3. Conectar chiller → bomba → UMA → retorno
4. Sistema calcula automáticamente presión/caudal

**Parámetros de tubería:**
```
Material: Cobre
Diámetro: 25 mm
Espesor aislamiento: 40 mm
Material aislante: Espuma poliuretano
Longitud: Calculada automáticamente
Caudal: 2.0 L/s
Presión: 200 kPa
Pérdida carga: 2.5 Pa/m
```

**Conexiones a equipos:**
- Chiller: Entrada y salida agua fría
- UMA serpenties: Entrada/salida agua fría y caliente
- Fan coils: Entrada/salida agua caliente
- Válvulas: Modeladas en puntos críticos

**Tramos especiales:**
- Bypass: Mantiene caudal mínimo
- Balanceo: Válvulas manual en ramales
- Seguridad: Válvula alivio presión

### Tuberías de Drenaje en Revit

**Drenaje de condensados:**
1. En Piping, seleccionar **Sanitary Systems > Drain Pipe**
2. Conectar desde bandeja drenaje UMA
3. Hacia sumidero o drenaje edificio

**Parámetros:**
```
Material: PVC
Diámetro: 40 mm
Pendiente: 2% hacia punto bajo
Sifón: Incorporado en modelo
```

### Cableado de Control en Revit

**Representación:**
- En plano: Líneas simbolizando cableado
- En 3D: Tubería conduit donde necesario
- Puntos de conexión: A paneles de control, sensores, actuadores

**Parámetros:**
```
Tipo: Cable de control 3×18 AWG
Longitud: Calculada
Voltaje: 24V DC (bajo voltaje)
Ubicación: Conduit de 16 mm
```

## Coordinación Integrada

### Coordinación Aire-Agua-Control

Todos los sistemas deben funcionar coordiados:

**Ejemplo operación en carga:**

```
CONDICIÓN: Zona requiere enfriamiento
Temperatura interior = 26°C, Setpoint = 22°C

Paso 1 - CONTROL:
- Termostato detecta diferencia
- Envía señal a BMS (aumento caudal aire)

Paso 2 - AIRE:
- Motor VAV abre damper
- Caudal aire sube de 150 L/s a 250 L/s
- Presión ducttos baja

Paso 3 - AIRE (ventilador):
- Sensor presión detecta caída
- VFD aumenta velocidad ventilador
- Presión ducttos se restaura

Paso 4 - AGUA FRÍA:
- Termostato serpentín UMA detecta T > 15°C
- Abre válvula agua fría más
- Caudal agua aumenta de 1.0 L/s a 1.5 L/s
- Enfriadore (chiller) aumenta carga

Paso 5 - CONDENSADO:
- Serpentín enfría aire húmedo
- Condensación aumenta (~10 L/hora)
- Bandeja drenaje evacúa a través sifón

RESULTADO: Zona se enfría a 22°C, sistema equilibrado
```

## Mejores Prácticas en Conexiones

1. **Modelar 100% de conexiones** - No asumir conexiones obvias
2. **Documentar parámetros** - Caudales, presiones, diámetros
3. **Coordinar espacios técnicos** - Evitar conflictos de tuberías
4. **Aislamiento térmico especificado** - En todas tuberías agua fría/caliente
5. **Drenajes con pendiente** - Nunca horizontales
6. **Control centralizado** - BMS integrado con todos sistemas
7. **Verificación final** - Validar caudales, presiones, temperaturas en comisionamiento

## Resumen

Las conexiones de sistemas HVAC incluyen:
- Circuitos agua fría, agua caliente, drenaje
- Sistemas de control neumático/eléctrico
- Integración BMS centralizada
- Modelado completo en Revit
- Coordinación aire-agua-control

El correcto diseño de conexiones garantiza:
- Funcionamiento eficiente del sistema
- Control preciso de temperatura
- Operación segura y confiable
- Documentación profesional completa

---

**Imagen de referencia:** Diagrama esquemático sistema agua fría y caliente - [Placeholder]

**Imagen de referencia:** Sistema de control BMS integrado HVAC - [Placeholder]

**Tiempo estimado de lectura:** 45 minutos
**Nivel de dificultad:** Avanzado
