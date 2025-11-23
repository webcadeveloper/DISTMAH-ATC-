# Lección 1.1: Principios Básicos de Electricidad

## Objetivo de Aprendizaje
Comprender los conceptos fundamentales de la electricidad, incluyendo voltaje, corriente, resistencia y potencia, aplicados al contexto de instalaciones eléctricas en edificios.

---

## 1. Introducción a la Electricidad

La electricidad es el flujo de electrones a través de un conductor. En las instalaciones eléctricas de edificios, entendemos la electricidad a través de tres conceptos fundamentales que se relacionan entre sí:

- **Voltaje (V):** La presión que impulsa los electrones
- **Corriente (I):** El flujo de electrones
- **Resistencia (R):** La oposición al flujo de electrones

Estos tres conceptos forman la base de la Ley de Ohm, una relación matemática fundamental que describe cómo se comportan los circuitos eléctricos en cualquier instalación.

### 1.1 Voltaje (Tensión Eléctrica)

El voltaje, expresado en voltios (V), representa la diferencia de potencial eléctrico entre dos puntos de un circuito. Piensa en el voltaje como la presión que impulsa el agua a través de una tubería: cuanto mayor es la diferencia de presión, más agua fluye.

En edificios residenciales y comerciales, los voltajes típicos son:
- **120 V:** Circuitos de iluminación y tomas de corriente en USA
- **240 V:** Electrodomésticos grandes en USA
- **208 V:** Sistemas trifásicos comerciales
- **277 V:** Iluminación trifásica comercial
- **480 V:** Sistemas principales en grandes edificios

En otras regiones del mundo:
- **230 V:** Estándar europeo para residencias
- **400 V:** Trifásico europeo
- **380 V:** Trifásico en muchos países latinoamericanos

### 1.2 Corriente Eléctrica

La corriente, expresada en amperios (A), es la cantidad de carga eléctrica que fluye a través de un punto del circuito por unidad de tiempo. La corriente está limitada por la resistencia del circuito y impulsada por el voltaje.

En un edificio, los circuitos típicos tienen corrientes de:
- **15 A:** Circuitos de iluminación (USA)
- **20 A:** Circuitos de enchufes (USA)
- **30 A:** Electrodomésticos medios
- **50-200 A:** Circuitos de distribución principal

### 1.3 Resistencia Eléctrica

La resistencia, expresada en ohmios (Ω), es la oposición al flujo de corriente. Todo material tiene una resistencia que depende de:

- **Tipo de material:** El cobre tiene menor resistencia que el aluminio
- **Sección transversal del conductor:** Conductores más gruesos tienen menor resistencia
- **Longitud del conductor:** Conductores más largos tienen mayor resistencia
- **Temperatura:** La resistencia aumenta con la temperatura

En instalaciones eléctricas, la resistencia de los conductores es un factor crucial porque genera pérdidas de energía en forma de calor.

---

## 2. La Ley de Ohm

La Ley de Ohm establece la relación fundamental entre voltaje, corriente y resistencia:

**V = I × R**

Donde:
- **V** = Voltaje en voltios
- **I** = Corriente en amperios
- **R** = Resistencia en ohmios

### Aplicación Práctica de la Ley de Ohm

Ejemplo 1: Determinar la corriente en un circuito
- Un circuito de 120 V alimenta una lámpara de 1200 W
- Primero calculamos la resistencia de la lámpara: R = V² / P = 120² / 1200 = 12 Ω
- Luego la corriente: I = V / R = 120 / 12 = 10 A
- El protector debe ser de 15 A mínimo

Ejemplo 2: Caída de voltaje en un conductor
- Un conductor de cobre de 50 metros alimenta una carga de 20 A
- Con calibre #10 AWG, la resistencia es aproximadamente 1.02 Ω/1000 pies (3.35 mΩ/m)
- Caída de voltaje = I × R = 20 × (0.05 × 3.35 / 1000) = 0.003 V (3 mV)
- Aunque pequeña, se acumula en circuitos largos

---

## 3. Potencia Eléctrica

La potencia es la cantidad de energía transferida por unidad de tiempo, expresada en vatios (W). Existen dos tipos principales:

### 3.1 Potencia en Circuitos Monofásicos

En sistemas monofásicos (un solo fase como 120V o 240V):

**P = V × I × cos(φ)**

Donde:
- **P** = Potencia en vatios (W)
- **V** = Voltaje en voltios
- **I** = Corriente en amperios
- **cos(φ)** = Factor de potencia (1.0 para cargas resistivas puras)

Ejemplo: Una lámpara incandescente de 120 V que consume 10 A
- P = 120 × 10 × 1.0 = 1200 W

### 3.2 Potencia en Circuitos Trifásicos

En sistemas trifásicos (tres fases como 208V, 277V o 480V):

**P = √3 × V × I × cos(φ)**

El factor √3 (aproximadamente 1.732) representa la relación entre la tensión de línea y la tensión de fase.

Ejemplo: Un motor en 480V trifásico que consume 50 A
- P = 1.732 × 480 × 50 × 0.85 = 35,500 W ≈ 35.5 kW

---

## 4. Sistemas de Distribución Eléctrica

### 4.1 Sistemas Monofásicos

Los sistemas monofásicos son los más comunes en viviendas. Comprenden:
- Un conductor de fase (vivo)
- Un conductor neutro
- Un conductor de tierra (protección)

En USA: 120/240 V monofásicos (dos fases desfasadas 180°)
En Europa/Latinoamérica: 230 V monofásicos

### 4.2 Sistemas Trifásicos

Los sistemas trifásicos se utilizan en edificios comerciales grandes y usos industriales. Comprenden:
- Tres conductores de fase (desfasados 120° entre sí)
- Un conductor neutro (en algunas configuraciones)
- Un conductor de tierra (protección)

Ventajas del sistema trifásico:
- Mayor eficiencia energética
- Permite voltajes más altos
- Mejor para motores y cargas grandes
- Distribución más uniforme de potencia

### 4.3 Configuraciones de Sistemas Trifásicos

**Configuración Estrella (Y):**
- Las tres fases convergen en un punto neutral
- Voltaje de línea = √3 × voltaje de fase
- Ejemplos: 208V, 277V, 380V, 400V

**Configuración Delta (Δ):**
- Las tres fases forman un triángulo cerrado
- No hay punto neutral
- Ejemplos: 240V, 480V sin neutro
- Más común en sistemas de distribución principal

---

## 5. Normas Internacionales de Electricidad

### 5.1 Estándares Principales

**IEC (International Electrotechnical Commission):**
- Norma europea y mundial
- Especifica calibres métricos y sistemas de 230V/400V
- Utilizada en la mayoría del mundo excepto USA y Canadá

**NEC (National Electrical Code) - USA y Canadá:**
- Código eléctrico nacional estadounidense
- Utiliza calibres AWG (American Wire Gauge)
- Especifica sistemas de 120/240V monofásicos y trifásicos
- Se actualiza cada 3 años

**RETIE (Reglamento Técnico de Instalaciones Eléctricas) - Colombia:**
- Regulación obligatoria en Colombia
- Basada en IEC con adaptaciones locales
- Especifica requisitos de seguridad y eficiencia

### 5.2 Códigos de Colores de Conductores

**Sistema IEC (Europa y Latinoamérica):**
- Marrón: Fase 1
- Negro: Fase 2
- Gris: Fase 3
- Azul claro: Neutro
- Verde/Amarillo rayado: Tierra

**Sistema NEC (USA/Canadá):**
- Negro: Fase 1
- Rojo: Fase 2
- Azul: Fase 3
- Blanco: Neutro
- Verde o desnudo: Tierra

---

## 6. Eficiencia Energética

La eficiencia en sistemas eléctricos es crucial para reducir costos y impacto ambiental:

- **Pérdidas en conductores:** Minimizar calibre incorrecto previene pérdidas por calor
- **Factor de potencia:** Mantener cos(φ) cercano a 1.0 reduce consumo innecesario
- **Demanda de pico:** Gestionar la coincidencia de cargas evita penalizaciones
- **Voltaje de distribución:** Usar voltajes más altos reduce pérdidas de transmisión

---

## 7. Aplicación en Revit MEP

En Revit MEP, estos principios se implementan a través de:

- **Electrical Settings:** Donde se definen voltajes y sistemas del proyecto
- **Panel Schedules:** Para calcular demandas y flujos de potencia
- **Wire Properties:** Para configurar resistencia y capacidad de conductores
- **Load Calculations:** Para determinar calibres de circuitos correctos

---

## Resumen de Conceptos Clave

| Concepto | Unidad | Símbolo | Relación |
|----------|--------|---------|----------|
| Voltaje | Voltios | V | Presión eléctrica |
| Corriente | Amperios | A | Flujo de electrones |
| Resistencia | Ohmios | Ω | V = I × R |
| Potencia | Vatios | W | P = V × I × cos(φ) |
| Energía | Vatios-hora | Wh | W × horas |

---

## Preguntas de Autoevaluación

1. ¿Cuál es la diferencia entre voltaje monofásico y trifásico?
2. ¿Cómo se calcula la corriente usando la Ley de Ohm?
3. ¿Qué factores afectan la resistencia de un conductor?
4. ¿Cuál es el factor √3 en sistemas trifásicos?
5. ¿Cuáles son los estándares principales de electricidad?

---

**Duración:** 3 horas
**Siguiente:** Lección 1.2 - Circuitos Eléctricos y Cargas
