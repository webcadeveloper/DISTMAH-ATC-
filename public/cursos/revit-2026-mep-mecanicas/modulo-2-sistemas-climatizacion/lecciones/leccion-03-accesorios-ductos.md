# Lección 3: Accesorios de Ductos - Especificación e Instalación

## Introducción

Los accesorios de ductos son componentes intermedios que permiten la modificación, control y distribución del aire dentro del sistema HVAC. Estos elementos son esenciales para garantizar eficiencia energética, control del ruido y funcionalidad del sistema de climatización. El correcto dimensionamiento y selección de accesorios impacta directamente en las pérdidas de presión, el consumo de energía del ventilador y la calidad del aire distribuido.

En esta lección estudiaremos los diferentes tipos de accesorios disponibles, sus características técnicas, métodos de cálculo de pérdidas de presión y su modelado en Revit MEP 2026.

## Accesorios Principales en Sistemas HVAC

### Codos y Cambios de Dirección

Los codos son accesorios que permiten cambiar la dirección del flujo de aire en los ductos. Su diseño afecta significativamente la aerodinámica del sistema y las pérdidas de presión asociadas.

**Tipos de codos:**

**Codo de 90 grados con radio grande:**
- Radio de curvatura: 1.5 a 2.0 veces la dimensión mayor del ducto
- Pérdida de presión dinámica: K = 0.15 a 0.25
- Aplicación: Sistemas de presión media a baja
- Ventajas: Pérdidas mínimas, flujo uniforme
- Desventajas: Requiere más espacio en instalación

**Codo de 90 grados con radio medio:**
- Radio de curvatura: 1.0 a 1.5 veces la dimensión
- Pérdida de presión: K = 0.40 a 0.50
- Aplicación: Uso general comercial
- Balance entre eficiencia y espacio requerido

**Codo de 90 grados agudo:**
- Radio mínimo o sin radio
- Pérdida de presión: K = 0.80 a 1.20
- Aplicación: Espacios limitados, instalaciones residenciales
- Genera turbulencia significativa

**Codo de 45 grados:**
- Pérdida de presión: K = 0.20 a 0.35
- Aplicación: Transiciones suaves entre elevaciones
- Menos disruptivo que codos de 90 grados

**Codo de 180 grados (cambio):**
- Pérdida de presión: K = 0.60 a 0.80
- Aplicación: Sistemas de retorno, espacios restrictivos
- Requiere especial atención al flujo

### Bifurcaciones y Tees

Las bifurcaciones (tees) permiten dividir el flujo de aire en dos o más ramales, siendo componentes críticos en la distribución equilibrada del sistema.

**Bifurcación simétrica:**
- Ángulo de bifurcación: 30 a 45 grados
- Pérdida de presión en línea principal: K = 0.05 a 0.15
- Pérdida en rama secundaria: K = 0.30 a 0.50
- Ideal para distribución equilibrada

**Bifurcación asimétrica:**
- Rama principal continúa, rama secundaria sale
- Pérdida en rama continuación: K = 0.10 a 0.20
- Pérdida en rama derivada: K = 0.80 a 1.20
- Común en sistemas de aire acondicionado comercial

**Consideraciones de diseño:**
- Distancia mínima desde codo a bifurcación: 3 veces la dimensión mayor
- Ratio de áreas: Rama secundaria no debe ser mayor al 80% de la principal
- Velocidad equilibrada: Mantener velocidades similares en ramas para balance

### Reducciones y Expansiones

Estos accesorios facilitan cambios en la sección transversal del ducto, manteniendo continuidad del flujo y minimizando turbulencia.

**Reducciones:**
- Ángulo recomendado: Máximo 15 grados
- Pérdida de presión: K = 0.04 × (1 - ratio de áreas)
- Aplicación: Transiciones a difusores, cambios de velocidad
- Material: Generalmente en el mismo material que el ducto principal

**Expansiones:**
- Ángulo recomendado: Máximo 7 grados
- Pérdida de presión: K = 1.0 × (1 - ratio de áreas)²
- Crítico: Las expansiones generan mayores pérdidas que reducciones
- Aplicación: Incremento de sección en retorno

**Diseño óptimo:**
- Ratio de expansión: No exceder 2:1
- Longitud mínima: Garantizar transición suave
- Verificar velocidades resultantes en cada sección

### Compuertas y Registros

Las compuertas son dispositivos de control que regulan el flujo de aire en sistemas HVAC, permitiendo balance dinámico y aislamiento.

**Compuerta de lámina única:**
- Uso: Regulación de flujo, aislamiento
- Rango de cierre: 0° a 90°
- Pérdida abierta: K = 0.10 a 0.20
- Pérdida parcial: Aumenta significativamente con cierre

**Compuerta de múltiples láminas:**
- Láminas paralelas: 2 a 6 láminas
- Mejor control gradual del flujo
- Pérdida mínima abierta: K = 0.05 a 0.15
- Aplicación: Sistemas de balance y regulación

**Registro de acceso:**
- Dimensiones: 300 x 300 mm hasta 600 x 600 mm
- Ubicación: Antes de equipos críticos, ramales principales
- Facilita limpieza, mantenimiento y medición de presión
- Material: Acero galvanizado, marco reforzado

**Compuerta anti-retorno (Check):**
- Función: Previene flujo inverso
- Apertura: A partir de 5 Pa diferencial
- Cierre automático: Sin necesidad de actuadores
- Crítico en sistemas de presión variable

### Filtros en Ducto

Los filtros incorporados en la red de ductos mejoran la calidad del aire y protegen equipos downstream.

**Tipos de filtros en ducto:**

**Filtros plisados:**
- Material: Papel sintético, fibra de vidrio
- Eficiencia: MERV 8 a MERV 13
- Caída de presión inicial: 15 a 25 Pa
- Caída final: Hasta 150 Pa (reemplazo)
- Tamaño típico: 200 x 300 mm a 600 x 600 mm

**Filtros HEPA:**
- Eficiencia: 99.97% a 0.3 micras
- Caída de presión inicial: 75 a 100 Pa
- Aplicación: Espacios críticos, hospitales, laboratorios
- Mantenimiento: Reemplazo cada 6-12 meses

**Ubicación en sistema:**
- Aguas arriba de UMA: Protección equipos
- Aguas arriba de difusores: Calidad aire distribuido
- Consideración: Incremento de caída de presión en cálculo ventilador

### Amortiguadores Acústicos

Los amortiguadores o silenciadores reducen el ruido de sistemas HVAC, mejorando confort acústico.

**Silenciadores rectos:**
- Longitud: 600 mm a 1500 mm
- Material absorbente: Fibra de vidrio, lana mineral
- Reducción ruido: 10 a 20 dB(A)
- Caída de presión: 5 a 15 Pa

**Silenciadores de codo:**
- Instalación: En codos de cambio de dirección
- Ahorro de espacio en sistemas compactos
- Reducción ruido: 8 a 15 dB(A)
- Integración: Parte del codo mismo

**Ubicación estratégica:**
- Salida ventilador: Reduces ruido en generación
- Antes de difusores: Reduces turbulencia
- Antes de UMA: Protege planta de tratamiento

### Medidores de Presión y Toma Estática

Estos accesorios permiten monitoreo y balance del sistema HVAC.

**Toma estática (Static tap):**
- Ubicación: En ducto recto, 6 diámetros aguas abajo de perturbación
- Conexión: A manómetro diferencial
- Medición: Presión estática del flujo
- Crítico para: Balance y diagnóstico del sistema

**Manómetro diferencial:**
- Rango típico: 0 a 250 Pa
- Conexión: Presión estática, presión dinámica, o atmosférica
- Lecturas: Presión del sistema, velocidad del ducto

**Puntos de muestreo de aire:**
- Para análisis de calidad
- Ubicación: Ducto de retorno, salida ventilador
- Normativa: ISO 12103-1, isokinetic sampling

## Cálculo de Pérdidas de Presión en Accesorios

### Método de Coeficiente K

Todas las pérdidas en accesorios se expresan mediante coeficientes K adimensionales:

```
ΔP_accesorio = K × (ρ × V²) / 2

Donde:
- ΔP = Pérdida de presión (Pa)
- K = Coeficiente de resistencia
- ρ = Densidad del aire (1.2 kg/m³)
- V = Velocidad en el ducto (m/s)
```

**Ejemplo práctico:**
- Ducto: 400 x 300 mm
- Velocidad: 5 m/s
- Codo 90° (K = 0.40)
- Presión dinámica: (1.2 × 5²) / 2 = 15 Pa
- Pérdida en codo: 0.40 × 15 = 6 Pa

### Longitud Equivalente (LE)

Método alternativo que expresa pérdidas como longitud equivalente de ducto recto:

```
LE = K × (D_eq / f)

Donde:
- LE = Longitud equivalente (m)
- K = Coeficiente del accesorio
- D_eq = Diámetro equivalente (m)
- f = Factor de fricción
```

Este método simplifica cálculos manuales integrando pérdidas en longitud total de ducto.

## Modelado de Accesorios en Revit MEP 2026

### Inserción Automática

Revit MEP 2026 inserta automáticamente accesorios al dibujar ductos:
- Codos: Detecta cambios de dirección
- Reducciones: Detecta cambios de sección
- Bifurcaciones: Detecta ramificaciones

### Parámetros de Accesorio

**Parámetros geométricos:**
```
Tipo de accesorio: Codo 90° / Bifurcación / Reducción
Radio de curvatura: 1.5 × ancho (para codos)
Ángulo: 90°, 45°, 30° (según tipo)
Material: Galvanizado, aluminio, acero
```

**Parámetros de flujo:**
```
Coeficiente K: Valor según tipo y ángulo
Caída de presión: Cálculo automático
Velocidad: Heredado del ducto conexo
```

**Generación de tablas:**
Revit puede crear tablas con:
- Lista de accesorios por tipo
- Caída de presión individual
- Coeficiente K aplicado
- Material y acabado
- Ubicación en plano

## Mejores Prácticas en Especificación

1. **Minimizar número de accesorios** - Reduce pérdidas totales
2. **Usar codos de radio grande** - Cuando espacio lo permite
3. **Especificar compuertas en ramales** - Facilita balance futuro
4. **Instalar registros de acceso** - Permite mantenimiento
5. **Documentar todos los accesorios** - En tablas y especificaciones
6. **Considerar ruido** - Especificar silenciadores si aplica
7. **Verificar pérdida total** - Asegurar potencia ventilador adecuada

## Resumen

Los accesorios de ductos son componentes críticos que:
- Modifican dirección y sección del flujo
- Generan pérdidas de presión cuantificables
- Requieren especificación precisa en diseño
- Impactan consumo energético del sistema
- Deben ser modelados en Revit para documentación completa

El correcto dimensionamiento y selección de accesorios optimiza eficiencia energética y garantiza funcionamiento adecuado de sistemas HVAC modernos.

---

**Imagen de referencia:** Tipos de codos, bifurcaciones y reducciones - [Placeholder]

**Imagen de referencia:** Curvas de coeficiente K para diferentes accesorios - [Placeholder]

**Tiempo estimado de lectura:** 45 minutos
**Nivel de dificultad:** Intermedio
