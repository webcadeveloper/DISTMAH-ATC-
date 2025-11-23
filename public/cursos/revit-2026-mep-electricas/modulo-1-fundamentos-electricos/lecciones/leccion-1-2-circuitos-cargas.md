# Lección 1.2: Circuitos Eléctricos y Cargas

## Objetivo de Aprendizaje
Comprender la clasificación de circuitos eléctricos, tipos de cargas, cálculo de demanda y principios de protección en instalaciones de edificios.

---

## 1. Tipos de Circuitos Eléctricos

En una instalación eléctrica de edificio, existen diferentes niveles de circuitos, cada uno con características específicas:

### 1.1 Circuito de Alimentación Principal

El circuito de alimentación principal es la entrada al edificio desde la compañía de servicios eléctricos. Características:

- **Voltaje:** Generalmente de 120/240V (monofásico) a 208V/277V (trifásico)
- **Capacidad:** Limitada por el contrato con la compañía eléctrica (50 A a 400+ A)
- **Protección:** Medidor de energía y desconectador principal
- **Función:** Distribuir toda la energía al edificio
- **Ubicación:** Típicamente en entrada principal o cuarto de máquinas

El medidor registra todo el consumo de energía del edificio. El desconectador principal puede cortar toda la electricidad en caso de emergencia.

### 1.2 Alimentadores (Feeders)

Los alimentadores distribuyen la energía desde el tablero principal a tableros secundarios o cargas grandes:

- **Voltaje:** Mismo del sistema principal (120/240V, 208V, 277V, 480V)
- **Corriente:** Rango medio (30 A a 200+ A típicamente)
- **Longitud:** Pueden ser de decenas de metros en grandes edificios
- **Protección:** Interruptores de tamaño mediano o fusibles
- **Función:** Alimentar áreas del edificio o equipos principales

Ejemplo: Un alimentador puede partir desde el tablero principal en la planta baja y llegar a un tablero de piso en el nivel 5.

### 1.3 Circuitos Distribuidores (Branch Circuits)

Los circuitos distribuidores son los circuitos finales que alimentan cargas específicas:

- **Voltaje:** 120V, 240V (monofásico) o 120V/208V (de trifásico)
- **Corriente:** Pequeña (15 A a 50 A típicamente)
- **Longitud:** Limitada (máximo 50-80 metros según código)
- **Protección:** Interruptores pequeños o fusibles (15 A, 20 A, 30 A)
- **Función:** Alimentar directamente enchufes, lámparas, equipos

Un edificio residencial puede tener circuitos de:
- 15 A para iluminación
- 20 A para enchufes
- 20 A para baños
- 30 A para cocina

---

## 2. Clasificación de Cargas Eléctricas

Las cargas se clasifican de varias formas según el código eléctrico:

### 2.1 Cargas Resistivas

Las cargas resistivas convierten energía eléctrica directamente en calor:

- **Ejemplos:** Calefactores eléctricos, agua caliente, secadores de pelo, incandescentes
- **Factor de potencia:** cos(φ) = 1.0 (teórico)
- **Corriente:** Estable y predecible
- **Comportamiento:** Corriente proporcional a voltaje (Ley de Ohm)

Una resistencia de 1200W a 120V consume exactamente 10 A todo el tiempo que está encendida.

### 2.2 Cargas Inductivas (Motores)

Las cargas inductivas incluyen motores y transformadores:

- **Ejemplos:** Motores eléctricos, bombas, compresores, ventiladores
- **Factor de potencia:** cos(φ) = 0.75 a 0.95 típicamente
- **Corriente inicial:** Elevada al arranque (inrush current)
- **Comportamiento:** Desfase entre voltaje y corriente

Un motor de 5 HP requiere una corriente inicial 2-3 veces mayor a la corriente nominal durante el arranque. Por eso necesitan protecciones especiales.

### 2.3 Cargas Capacitivas

Las cargas capacitivas incluyen electrónica moderna:

- **Ejemplos:** Computadoras, televisores LED, balastos electrónicos
- **Factor de potencia:** cos(φ) < 1.0 (adelanta la corriente)
- **Consumo:** Puede incluir armónicos de alta frecuencia
- **Comportamiento:** Afecta la calidad de energía

Los balastos electrónicos modernos son eficientes pero generan armónicos que pueden interferir con otras cargas.

### 2.4 Cargas Especiales

Algunas cargas requieren consideraciones especiales:

**Motores de arranque duro:** Compresores, ascensores
- Requieren protección contra inrush current
- Necesitan conductores más grandes
- Demandan mayor voltaje de línea

**Cargas de computadoras:** Data centers, servidores
- Requieren energía limpia y continua
- Susceptibles a variaciones de voltaje
- Necesitan sistemas UPS y reguladores

**Equipos médicos:** Hospitales, clínicas
- Requieren fuentes de emergencia
- Necesitan circuitos dedicados
- Demandan inspecciones frecuentes

---

## 3. Demanda de Energía y Factor de Simultaneidad

### 3.1 Carga Total vs. Demanda Real

Un error común es asumir que la carga total se activa simultáneamente. La realidad:

- **Carga instalada:** Suma de toda potencia de equipos en el edificio
- **Demanda real:** Potencia que se consume efectivamente en un momento
- **Factor de demanda:** Porcentaje de carga instalada que se consume simultáneamente

Ejemplo edificio residencial de 10 apartamentos:
- Carga instalada por apartamento: 5000 W
- Total de carga instalada: 50,000 W
- Factor de demanda típico: 40-60% (según código)
- Demanda real: 50,000 × 50% = 25,000 W

El edificio no necesita cables para 50,000 W, sino para 25,000 W.

### 3.2 Curvas de Demanda Típicas

Las curvas varían según el tipo de edificio:

**Oficinas:**
- Pico diurno (8 AM - 6 PM): 80% de capacidad
- Bajo nocturno: 5-10% de capacidad
- Demanda promedio: 40-50%

**Residencial:**
- Pico mañana (6-8 AM): cocina, duchas
- Pico noche (6-10 PM): iluminación, cocina
- Bajo mediodía: 10-20% de capacidad

**Industrial:**
- Puede alcanzar 90-100% durante operación
- Arranques de motores crean picos de demanda
- Variabilidad depende del proceso

### 3.3 Factor de Potencia

El factor de potencia es la relación entre potencia real (W) y potencia aparente (VA):

**cos(φ) = Potencia Real / Potencia Aparente = W / VA**

- **cos(φ) = 1.0:** Carga puramente resistiva (ideal)
- **cos(φ) = 0.8:** Carga con componente inductiva (típico en instalaciones)
- **cos(φ) < 0.7:** Indica mala calidad de energía

Un factor de potencia bajo significa que se requieren conductores más grandes para la misma potencia útil. Por eso muchas normas requieren mantener cos(φ) > 0.9.

---

## 4. Capacidad de Conducción de Conductores

### 4.1 Tablas de Ampacidad

La capacidad de conducción (ampacidad) es la máxima corriente que puede soportar un conductor sin sobrecalentarse. Depende de:

- **Material:** Cobre > Aluminio
- **Calibre (sección):** Mayor sección = mayor capacidad
- **Temperatura ambiente:** Climas cálidos reducen ampacidad
- **Agrupación:** Múltiples circuitos juntos reducen ampacidad
- **Tipo de aislamiento:** PVC vs XLPE vs otros

Ejemplo de ampacidad (cobre, 60°C, aire libre):
- #14 AWG: 15 A
- #12 AWG: 20 A
- #10 AWG: 30 A
- #8 AWG: 40 A
- #6 AWG: 55 A
- #4 AWG: 70 A
- #2 AWG: 95 A

### 4.2 Corrección por Temperatura

La ampacidad debe corregirse según:

**Temperatura ambiente > 30°C:** Multiplica ampacidad por factor de corrección

| Temp. Ambiente | Factor |
|---|---|
| 26-30°C | 1.0 |
| 31-35°C | 0.94 |
| 36-40°C | 0.88 |
| 41-45°C | 0.82 |
| > 45°C | 0.75 |

En un edificio en clima tropical a 38°C, un #12 AWG que nominalmente carga 20 A solo puede llevar: 20 × 0.88 = 17.6 A

### 4.3 Corrección por Agrupación

Cuando múltiples circuitos corren en el mismo ducto, el calor se acumula:

| Número Circuitos | Factor |
|---|---|
| 1-3 | 1.0 |
| 4-6 | 0.8 |
| 7-9 | 0.7 |
| 10-12 | 0.6 |
| 13+ | 0.5 |

En un ducto con 8 circuitos, cada uno debe reducirse al 70% de su ampacidad nominal.

---

## 5. Protecciones contra Sobrecorriente

### 5.1 Interruptores Automáticos (Circuit Breakers)

Los interruptores automáticos protegen contra:

- **Sobrecarga:** Corriente excesiva pero menor al doble nominal
- **Cortocircuito:** Corriente muy elevada (miles de amperios)

Tipos principales:

**Interruptores Estándar:** Para cargas comunes (luces, enchufes)
- Disparo rápido con corrientes altas
- Protección contra cortocircuito excelente

**Interruptores Térmicos (Thermal):** Para motores
- Permiten inrush current durante arranque
- Protegen contra sobrecarga sostenida

**Interruptores de Fuga a Tierra (GFCI):** Para baños y áreas húmedas
- Detectan corriente de fuga a tierra
- Disparan en miliamperios (10-30 mA)
- Previenen electrocuciones

### 5.2 Fusibles

Los fusibles son más antiguos pero aún se usan:

- Se funden cuando la corriente excede su capacidad
- Debe reemplazarse después de disparo
- Menos flexible que interruptores
- Menor costo inicial

---

## 6. Ejemplo Integrado: Cálculo de Circuito

Diseñar un circuito para una cocina en 120V con:
- 1 microondas 1200 W
- 4 enchufes tipo A 300 W cada uno (potencial)
- 1 refrigerador 700 W

**Paso 1: Carga total**
1200 + 1200 + 700 = 3100 W

**Paso 2: Corriente calculada**
I = P / (V × cos φ) = 3100 / (120 × 1.0) = 25.8 A

**Paso 3: Aplicar factor de demanda**
Cocina típicamente tiene factor 0.75: 25.8 × 0.75 = 19.4 A

**Paso 4: Sobredimensionar 25% según código**
19.4 × 1.25 = 24.2 A

**Paso 5: Seleccionar protección**
Interruptor de 30 A (próximo estándar)

**Paso 6: Seleccionar conductor**
#10 AWG tiene ampacidad 30 A (cubre el 30 A de protección)

**Resultado:** Un circuito de 30 A con #10 AWG es adecuado

---

## 7. Aplicación en Revit MEP

En Revit MEP, estos conceptos se implementan:

- **Electrical Circuits:** Define circuitos y sus parámetros
- **Load Classes:** Asigna factores de demanda
- **Panel Schedule:** Calcula automáticamente demanda
- **Wire Properties:** Controla ampacidad según calibre
- **Protective Devices:** Define interruptores y fusibles

---

## Resumen de Conceptos Clave

- Circuitos de alimentación, alimentadores y ramales tienen diferentes capacidades
- Las cargas se clasifican como resistivas, inductivas o capacitivas
- La demanda real es menor que la carga instalada por factor de simultaneidad
- La ampacidad depende de calibre, material, temperatura y agrupación
- Las protecciones previenen sobrecarga y cortocircuito

---

## Preguntas de Autoevaluación

1. ¿Cuál es la diferencia entre carga instalada y demanda real?
2. ¿Cómo afecta el factor de potencia a la selección de conductores?
3. ¿Qué es la ampacidad y de qué factores depende?
4. ¿Por qué los motores requieren protecciones especiales?
5. ¿Cuál es la diferencia entre un interruptor y un fusible?

---

**Duración:** 3 horas
**Siguiente:** Lección 1.3 - Símbolos y Planos Eléctricos
