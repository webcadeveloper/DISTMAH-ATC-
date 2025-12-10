# Lección 4: Unidades Manejadoras de Aire (UMA) - Selección y Modelado

## Introducción

La Unidad Manejadora de Aire (UMA) es el corazón de cualquier sistema centralizado de climatización. Conocida en inglés como Air Handling Unit (AHU), es el equipo que genera, filtra, acondiciona y distribuye el aire a los espacios ocupados. Su correcta selección y modelado en Revit MEP es fundamental para garantizar eficiencia energética, confort térmico y cumplimiento de códigos de ventilación.

En esta lección estudiaremos los componentes de una UMA, criterios de selección, cálculos de capacidad y su integración en Revit MEP 2026.

## Estructura y Componentes de una UMA

### Componentes Principales

Una UMA típica contiene los siguientes elementos funcionales:

**Caja de aire exterior (Fresh air intake):**
- Captación de aire ambiental
- Prevención de lluvia y escombros
- Filtro inicial anti-insectos
- Conexión a ducto de aire fresco
- Importante: Ubicación alejada de fuentes contaminantes (chimeneas, escape vehículos)

**Damper de aire exterior y de retorno:**
- Control de mezcla de aire fresco y recirculado
- Operación: Manual o automática con actuadores
- Propósito: Regulación de temperatura y caudal
- Integración: Sistemas de control del edificio (BMS)

**Ventilador de impulsión (Supply fan):**
- Genera presión para distribución de aire
- Tipos: Centrifugo (backward curved), axial
- Potencia típica: 5 kW a 100+ kW según caudal
- Velocidad: 500 a 3000 RPM según diseño

**Ventilador de retorno (Return fan):**
- Algunos sistemas incluyen ventilador de retorno separado
- Mantiene balance de presión en espacios
- Mejora: Control de infiltración, presión del edificio

**Serpentín de enfriamiento (Cooling coil):**
- Intercambia calor entre aire y agua fría
- Tipos: Tubos de cobre, aletas de aluminio
- Capacidad: 10 kW a 500+ kW según dimensión
- Refrigerante: Agua helada típicamente 6-7°C

**Serpentín de calefacción (Heating coil):**
- Incrementa temperatura del aire en invierno
- Fuente calor: Agua caliente, vapor, resistencia eléctrica
- Temperatura entrada: 65-80°C típico
- Control: Modulante con válvula proporcional

**Humidificador:**
- Aumenta humedad relativa en invierno
- Tipos: Vaporización, humidificador ultrasónico
- Capacidad: 0.5 a 10+ kg/h
- Control: Humostato integral o remoto

**Filtro de aire:**
- Retiene partículas y contaminantes
- Eficiencia: MERV 8 a MERV 13 estándar
- Caída de presión: 20-40 Pa nuevo, 100-150 Pa saturado
- Reemplazo: Cada 3-6 meses típico

**Amortiguador acústico:**
- Reduce ruido del ventilador
- Material: Fibra de vidrio, lana mineral
- Espesor: 50-100 mm
- Efectividad: 10-20 dB(A) de reducción

## Clasificación de UMAs

### Por Configuración de Flujo

**Sistema de flujo simple (Single duct):**
- Aire fresco y recirculado se mezclan en caja única
- Luego se enfría o calienta
- Finalmente se distribuye a todas las zonas
- Simplicidad, bajo costo inicial
- Limitación: Poca flexibilidad zonal

**Sistema de flujo dual (Dual duct):**
- Caja con dos salidas independientes
- Ramales separados: Uno frío, otro caliente
- Caudal regulado por cajas VAV en cada zona
- Ventaja: Control zonal independiente
- Desventaja: Mayor costo, complejidad instalación

**Sistema de flujo mixto (Mixed plenum):**
- Cámara de mezcla entre ventilador y serpenties
- Asegura distribución uniforme
- Mejora: Balance de presión, reducción ruido
- Recomendado para: Sistemas de gran caudal

### Por Tamaño

**UMA compacta:**
- Caudal: 500 a 2000 L/s
- Aplicación: Edificios pequeños, áreas específicas
- Instalación: Sobre piso, en cuarto técnico compacto
- Ejemplo: Oficina pequeña, comercio local

**UMA mediana:**
- Caudal: 2000 a 10000 L/s
- Aplicación: Edificios comerciales medianos, hoteles
- Instalación: Sobre piso en cuartos técnicos
- Dimensión típica: 2.5 m × 1.5 m × 1.5 m

**UMA grande:**
- Caudal: 10000 a 50000+ L/s
- Aplicación: Hospitales, centros comerciales, edificios de gran altura
- Instalación: Cuartos técnicos dedicados con acceso mecánico
- Considera: Espacio de mantenimiento, extracción de componentes

## Selección de UMA

### Parámetros de Diseño

**Caudal requerido:**

El caudal total es la suma de:
- Aire exterior requerido por código: 3-10 L/s por persona
- Aire para compensar extracciones: Áreas con extractores (baños, cocinas)
- Presurización: Si aplica para control de infiltración

Ejemplo:
```
Edificio administrativo, 500 personas ocupación
Aire exterior: 500 personas × 6 L/s/persona = 3000 L/s
Aire extracción baños: 20 baños × 100 L/s = 2000 L/s
Aire presurización (10%): 500 L/s
Caudal total UMA: 5500 L/s
```

**Condiciones de diseño:**

**Invierno:**
- Temperatura exterior: Mínima según localización geográfica
- Temperatura interior: Típicamente 21°C
- Humedad relativa: 30-40%
- Carga calefacción: Desde exterior + infiltración

**Verano:**
- Temperatura exterior: Máxima sombra
- Humedad relativa: 60-70%
- Temperatura interior: 24°C
- Carga enfriamiento: Ganancia solar + carga interna

**Capacidad térmica:**

Cálculo de potencia requerida:

```
Q = ṁ × cp × ΔT

Donde:
- Q = Potencia térmica (kW)
- ṁ = Flujo másico de aire (kg/s)
- cp = Capacidad calorífica aire (1.005 kJ/kg·K)
- ΔT = Diferencia de temperatura (K)

Ejemplo:
- Caudal: 5500 L/s = 1.53 m³/s = 1.84 kg/s
- ΔT enfriamiento verano: 14°C (35°C entrada, 21°C salida)
- Q = 1.84 × 1.005 × 14 = 25.9 kW (≈ 30 kW comercial)
```

### Selección de Serpenties

**Serpentín de enfriamiento:**

Especificaciones típicas:
- Tamaño: 300 × 300 mm a 2000 × 1000 mm
- Número de filas: 1 a 6 filas profundidad
- Material tubos: Cobre 9.5 mm a 12.7 mm diámetro
- Aletas: Aluminio 1.0 mm espesor
- Espaciamiento aletas: 4 a 6 mm (típico 4.5 mm)

Capacidad influida por:
- Caudal de aire que circula
- Temperatura del agua helada entrada
- Flujo de agua (velocidad en tubos)
- Limpieza de serpentín (ensuciamiento)

**Serpentín de calefacción:**

Especificaciones típicas:
- Tamaño: Similar a enfriamiento
- Filas: Típicamente 2-3 (menos que enfriamiento)
- Temperatura agua entrada: 70-80°C
- Presión operacional: Hasta 700 kPa típico

Capacidad mayor por:
- Mayor diferencial de temperatura
- Flujos de agua más altos permitidos
- Menor susceptibilidad ensuciamiento

### Selección de Ventilador

**Ventilador centrífugo backward curved:**
- Características: Eficiente, bajo ruido
- Rango: 500 a 50000 L/s
- Presión: Hasta 2500 Pa
- Aplicación: Sistemas HVAC estándar

**Potencia del ventilador:**

```
Potencia = (Caudal [m³/s] × Presión total [Pa]) / (Eficiencia × 1000)

Ejemplo:
- Caudal: 5500 L/s = 5.5 m³/s
- Presión total: 500 Pa (ductos, accesorios, serpenties)
- Eficiencia ventilador: 85% = 0.85
- Potencia = (5.5 × 500) / (0.85 × 1000) = 3.24 kW
```

**Motor eléctrico:**
- Sobredimensionamiento: 10-15% sobre cálculo
- Ejemplo: 3.24 kW → Motor de 3.7 o 4.0 kW
- Voltaje: 380V trifásico estándar industrial
- Control: Variador de velocidad (VFD) para modulación

## Modelado de UMA en Revit MEP 2026

### Componentes en Revit

Cada UMA se modela mediante:

**Elemento principal (Equipment):**
- Representa la unidad completa
- Parámetros: Tipo, modelo, fabricante
- Conexiones: Ducto suministro, retorno, aire exterior

**Serpenties (Coils):**
- Modelados como componentes dentro de UMA
- Parámetros: Capacidad, flujo agua, salto temperatura
- Conexiones: Sistema de agua/vapor

**Ventilador:**
- Parámetro crítico: Caudal nominal
- Potencia: Calculada o ingresada
- Ruido: Nivel dB(A) para análisis acústico

**Filtro:**
- Caída de presión: Inicial y saturado
- Eficiencia: MERV clasificación
- Tamaño: Para especificación reemplazo

### Parámetros de Proyecto

```
PARÁMETRO                  VALOR
Caudal diseño              5500 L/s
Presión estática total     500 Pa
Temperatura salida verano  21°C
Temperatura salida invierno 22°C
Capacidad enfriamiento     30 kW
Capacidad calefacción      25 kW
Potencia ventilador        4.0 kW
Ruido nivel NC             35 dB(A)
Filtro eficiencia          MERV 8
```

### Generación de Especificaciones

Revit MEP 2026 permite:
- Tablas de equipos (Equipment schedules)
- Especificaciones automáticas
- Conectividad a sistemas de agua
- Cálculos de pérdida de carga
- Documentación integrada

## Ubicación e Instalación

### Selección de Ubicación

**Cuarto técnico requerido:**
- Acceso fácil para mantenimiento
- Espacio para extracción de serpenties
- Aislamiento acústico de ocupados
- Drenaje para bandeja de condensado

**Distancia recomendada:**
- De áreas ocupadas: Mínimo 5 metros
- De oficinas ejecutivas: Preferentemente separado
- De dormitorios: Nunca contiguo si posible

**Servicios requeridos:**
- Suministro eléctrico: 20A mínimo, 380V trifásico
- Agua helada: Tubería doble aislada, drenaje
- Agua caliente o vapor: Según sistema calefacción
- Aire exterior: Ducto toma exterior
- Retorno: Ducto de retorno o plenum

### Conexiones Típicas

```
Aire exterior → [Damper] → [Filtro] → [Serpenties]
                                        ↓
                              [Ventilador impulsión]
                                        ↓
                         [Amortiguador acústico]
                                        ↓
                     Ducto distribución → Zonas ocupadas
                                        ↑
                              [Damper retorno]
                                        ↑
                     Ducto retorno ← Zonas ocupadas
```

## Mejores Prácticas

1. **Sobredimensionar UMA 10-15%** - Permite futura ampliación
2. **Especificar VFD en ventilador** - Reduce consumo energético
3. **Incluir humidificador** - Mejora confort invierno
4. **Acceso de mantenimiento** - Planificar desde diseño
5. **Aislamiento acústico** - Cumplir NC requerido
6. **Documentación completa** - En tablas y planos
7. **Seleccionar marca reconocida** - Disponibilidad repuestos

## Resumen

Las UMAs son equipos complejos que requieren:
- Cálculo preciso de caudal y capacidad térmica
- Selección adecuada de componentes (serpenties, ventilador)
- Modelado completo en Revit para documentación
- Especificación clara para contratistas
- Ubicación estratégica para operación y mantenimiento

El correcto diseño de UMA garantiza confort, eficiencia energética y funcionamiento confiable del sistema HVAC.

---

**Imagen de referencia:** Componentes internos de una UMA - [Placeholder]

**Imagen de referencia:** Tipos de configuración UMA (simple, dual, mixto) - [Placeholder]

**Tiempo estimado de lectura:** 50 minutos
**Nivel de dificultad:** Avanzado
