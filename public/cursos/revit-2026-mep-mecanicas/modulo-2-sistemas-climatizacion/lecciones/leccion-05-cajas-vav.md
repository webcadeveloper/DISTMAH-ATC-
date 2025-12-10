# Lección 5: Cajas VAV - Regulación Zonal y Control

## Introducción

Las cajas VAV (Variable Air Volume) son dispositivos terminales que regulan el caudal de aire suministrado a cada zona según la demanda térmica, permitiendo control independiente de temperatura por espacio. Este componente es fundamental en sistemas HVAC modernos, proporcionando eficiencia energética, confort personalizado y máxima flexibilidad operativa.

En esta lección estudiaremos la funcionalidad de cajas VAV, tipos disponibles, criterios de dimensionamiento, integración con sistemas de control y modelado en Revit MEP 2026.

## Funcionalidad Fundamental de Cajas VAV

### Propósito Principal

Las cajas VAV cumplen varias funciones críticas:

**Regulación de caudal:**
- Ajusta flujo de aire a cada zona según temperatura interior
- Rango típico: 30% a 100% del caudal nominal
- Control: Automático mediante termostato zona

**Independencia térmica:**
- Cada espacio controla su temperatura sin afectar otros
- Múltiples zonas pueden funcionar simultáneamente a diferentes temperaturas
- Ejemplo: Oficina con ganancia solar a 21°C, interior sin sol a 23°C

**Ahorro energético:**
- Reduce caudal cuando zona está satisfecha
- Menor consumo ventilador (ventilador proporcional caudal)
- Menores pérdidas energía por sobrecondicionamiento
- Ahorros típicos: 20-40% consumo comparado sistemas CAV

**Reducción de ruido:**
- Caudal reducido = velocidad ducto reducida
- Menor velocidad = menos ruido en difusores
- Mejor ambiente acústico cuando carga es baja

## Tipos de Cajas VAV

### VAV Simple (Single Duct)

**Configuración básica:**
- Entrada única de aire fresco de UMA
- Compuerta motorizada regula caudal
- Salida a difusores de la zona
- Control por termostato zona

**Componentes internos:**
- Amortiguador acústico (silenciador)
- Compuerta de regulación (damper)
- Sensor de presión estática
- Actuador motorizado
- Caja metálica aislada

**Rango de operación:**
- Caudal mínimo (min stop): 30% del nominal
- Caudal máximo (full): 100% del nominal
- Rango de modulación: 70 puntos

**Aplicaciones:**
- Oficinas privadas
- Salas de reuniones
- Despachos
- Espacios administrativos

**Ventajas:**
- Bajo costo inicial
- Control efectivo temperatura
- Instalación sencilla
- Bajo mantenimiento

**Desventajas:**
- No controla temperatura cuando caudal mínimo insuficiente
- Sin calefacción zona si aire viene muy frío
- Limitación en invierno con aire exterior frío

### VAV con Recalentamiento (Reheat)

**Configuración mejorada:**
- Caja VAV básica + serpentín de recalentamiento
- Agua caliente desde circuito central
- Controla temperatura incluso con caudal bajo
- Funcionalidad completa invierno

**Componentes adicionales:**
- Serpentín de agua caliente 2-3 filas
- Válvula proporcional modulante
- Sensor temperatura salida
- Control independiente calefacción

**Estrategia de control:**
```
Fase 1 - Enfriamiento: Compuerta abierta, válvula calor cerrada
Fase 2 - Standby: Compuerta en mínimo, válvula cerrada
Fase 3 - Calefacción: Caudal mínimo, válvula abierta aumenta temperatura

Ejemplo operación invierno:
- Zona demanda calor
- Caudal reduce a mínimo (30%)
- Válvula recalentamiento se abre
- Serpentín calienta aire mínimo a temperatura requerida
- Termostatato cierra válvula cuando temperatura alcanzada
```

**Capacidad de recalentamiento:**
Típicamente: 2-10 kW según tamaño caja

Cálculo:
```
Q_reheat = ṁ × cp × ΔT
Donde ṁ es masa aire en caudal mínimo

Ejemplo:
- Caudal mínimo: 165 L/s = 0.165 m³/s = 0.198 kg/s
- ΔT requerido: 15°C (aire UMA a 13°C, demanda zona 28°C)
- Q = 0.198 × 1.005 × 15 = 2.98 kW
```

**Aplicaciones:**
- Oficinas (invierno completo)
- Perimétricos con ganancia solar
- Edificios en climas fríos
- Máxima flexibilidad operativa

**Desventajas:**
- Costo adicional serpentín + válvula
- Mayor consumo energía (recalentamiento "contradice" enfriamiento anterior)
- Requiere circuito agua caliente
- Más complejo control y mantenimiento

### VAV Dual (Dual Duct)

**Configuración especial:**
- UMA suministra dos ramales: Aire frío y aire caliente
- Caja VAV regulando entrada ambos ductos
- Temperatura final resultado de mezcla
- Control: Doble compuerta, una por cada ducto

**Componentes:**
- Dos compuertas motorizada (frío y caliente)
- Dos inlets de ducto
- Salida única a difusores
- Control temperatura por proporción mezcla

**Ventajas:**
- Respuesta rápida cambios temperatura
- No requiere recalentamiento (menos energía)
- Control preciso modulando ambos flujos
- Ideal edificios climas extremos

**Desventajas:**
- Costo UMA dual muy elevado
- Requiere dos redes completas de ductos
- Ocupación espacio técnico importante
- Poco común en nuevos proyectos

**Aplicaciones:**
- Laboratorios críticos (temperatura constante)
- Quirófanos hospitalarios
- Salas de servidores (data centers)
- Espacios donde precisión térmica es crítica

### VAV Inductiva (Induction Unit)

**Configuración avanzada:**
- Caja VAV pero con inductor primario
- Aire de UMA de alta velocidad induce aire secundario
- Aire secundario desde plenum retorno o exterior controlado
- Mezcla proporcional determina temperatura

**Funcionamiento:**
- UMA suministra caudal principal a 3-4 m/s alta presión
- Ducto primario lleva aire a caja induction
- En caja, aire primario induce aire secundario a través de ducto
- Mezcla regulada por compuerta en conducto secundario

**Ventajas:**
- Amplificación de caudal (menor ducto primario)
- Temperatura modulable sin recalentamiento
- Menos energía (no contradictoria)
- Potencial enfriamiento radiante integrado

**Desventajas:**
- Muy costoso
- Tecnología no estándar
- Mantenimiento especializado
- Poco disponible en mercado

## Dimensionamiento de Cajas VAV

### Cálculo del Caudal Nominal

El caudal nominal de una VAV se determina por la zona mayor demanda.

**Factores considerados:**

**Caudal para renovación aire:**
```
Q_ventilación = Ocupación × Estándar per cápita
Ejemplo: Oficina 50 m² típica con 2 personas
Q_vent = 2 personas × 7 L/s/persona = 14 L/s
```

**Caudal para enfriamiento:**
```
Q_enfriamiento = Carga térmica zona / (cp × ΔT)
Donde ΔT = Temperatura zona - Temperatura aire UMA

Ejemplo:
- Carga enfriamiento zona: 3 kW
- ΔT: 24°C - 12°C = 12°C
- Q_enf = 3000 / (1005 × 12) = 0.249 m³/s = 249 L/s
```

**Caudal nominal:**
```
Q_nominal = Máximo(Q_ventilación, Q_enfriamiento)

En ejemplo: Q_nom = 249 L/s (normalmente enfriamiento es mayor)
```

### Caudal Mínimo

Establece el piso de operación VAV cuando zona está satisfecha.

**Criterios para mínimo:**
- Mínimo 30% caudal nominal para mantenimiento ventilación
- Mínimo 20% si hay retorno plenum
- Algunos códigos requieren 15-25% mínimo estatutario

**Cálculo:**
```
Q_mínimo = Q_nominal × Factor mínimo (típicamente 0.30 a 0.40)

Ejemplo: Q_nom = 250 L/s → Q_min = 250 × 0.35 = 87.5 L/s
```

**Importancia del mínimo:**
- Garantiza ventilación incluso cuando zona fría
- Evita acumulación contaminantes
- Cumple códigos (ASHRAE 62.1)
- Sin mínimo adecuado, VAV puede fallar en primavera/otoño

### Selección de Caja VAV Estándar

Fabricantes ofertan cajas en tamaños discretos:
- 75 L/s, 125 L/s, 175 L/s, 250 L/s, 375 L/s, 500 L/s, etc.
- Criterio: Seleccionar caja inmediatamente mayor al caudal requerido
- Ejemplo: Q_nom = 245 L/s → Seleccionar caja 250 L/s

## Caída de Presión en Cajas VAV

### Presión Estática Requerida

La VAV debe mantener presión diferencial para regular caudal.

**Presión diferencial típica:**
- Compuerta abierta: 20-30 Pa (pérdida inherente)
- Compuerta parcial: 50-150 Pa (control activo)
- Presión sensor: ≥ 10 Pa mínimo para control estable

**Cálculo presión total UMA:**
```
P_total = P_ductos + P_accesorios + P_cajas_vav + P_difusores

Ejemplo sistema pequeño:
- Ductos: 100 Pa
- Accesorios (codos, tees): 80 Pa
- VAVs (3 unidades): 60 Pa promedio
- Difusores: 40 Pa
- P_total = 280 Pa
```

### Presión Constante vs Variable

**Sistema presión constante (COP):**
- Conducto principal mantiene presión constante ~200 Pa
- VAVs regulan caudal dentro presión constante
- Método: Damper by-pass o ventilador variable
- Estándar en mayoría instalaciones comerciales

**Sistema presión variable (VOP):**
- Presión varía según demanda total cajas VAV
- Ventilador reduce velocidad cuando cajas reducen caudal
- Ahorro energético máximo
- Requiere control sofisticado

## Control de Cajas VAV

### Sensores y Control

**Termostato de zona:**
- Sensor temperatura bulbo seco interior
- Setpoint temperatura (ejemplo 22°C)
- Rango de banda muerta (ejemplo ±0.5°C)

**Sensor presión estática:**
- Ubicado en ducto principal downstream VAVs
- Mantiene presión de control
- Señal enviada a VFD ventilador

**Lógica de control:**
```
IF Temperatura_zona > Setpoint THEN
  → Abrir compuerta VAV (aumentar caudal)
  → Esto reduce presión ducto
  → Ventilador aumenta velocidad para mantener P_estática

IF Temperatura_zona < Setpoint THEN
  → Cerrar compuerta VAV (reducir caudal)
  → Esto aumenta presión ducto
  → Ventilador reduce velocidad (ahorro energético)

IF Temperatura_zona + Offset < Setpoint AND Válvula existe THEN
  → Abrir válvula recalentamiento
  → Caudal mínimo más aire caliente = temperatura adecuada
```

## Modelado en Revit MEP 2026

### Inserción de Cajas VAV

**Ubicación en modelo:**
- Cajas VAV se colocan en techo suspendido
- Aguas abajo ramales ductos
- Aguas arriba difusores

**Parámetros requeridos:**
```
Tipo: VAV Simple / VAV Reheat
Caudal nominal: 250 L/s (ejemplo)
Caudal mínimo: 87 L/s (35% nominal)
Presión operacional: 200 Pa
Capacidad reheat (si aplica): 3 kW
Control: Termostato zona
Sensor presión: Sí/No
```

**Conexiones:**
- Entrada: Ducto ramal de UMA
- Salida: A difusores o plenum zona
- Sistema control: Actuador eléctrico
- Sistema agua (reheat): Válvula y tuberías agua caliente

### Tablas de Cajas VAV

Revit MEP permite generar:
- Ubicación (Level, espacio/zona)
- Tipo y tamaño
- Caudal nominal y mínimo
- Capacidad recalentamiento
- Sensor presión: Sí/No
- Remarks (observaciones)

## Mejores Prácticas en Diseño VAV

1. **Cajas VAV por zona** - Una por cada espacio o grupo homogéneo
2. **Caudal mínimo adecuado** - Mínimo 30% garantiza ventilación
3. **Recalentamiento en climas fríos** - Imprescindible zonas perimetrales
4. **Control presión estática** - Mantiene rendimiento VAVs
5. **Sensores en ubicación estratégica** - Evitar radiación solar directa
6. **Balance manual de VAVs** - Indispensable en comisionamiento
7. **Documentación completa** - Tablas de caudales y capacidades

## Resumen

Las cajas VAV son componentes esenciales que:
- Regulan flujo aire según demanda térmica
- Permiten control zonal independiente
- Optimizan consumo energético
- Requieren dimensionamiento preciso
- Demandan controladores sofisticados
- Se integran completamente en Revit para documentación

El correcto diseño VAV permite máxima eficiencia, confort personalizado y operación flexible de sistemas HVAC modernos.

---

**Imagen de referencia:** Sección caja VAV simple y VAV con reheat - [Placeholder]

**Imagen de referencia:** Esquema control presión estática y ramificación VAVs - [Placeholder]

**Tiempo estimado de lectura:** 50 minutos
**Nivel de dificultad:** Avanzado
