# Lección 2: Ductos - Modelado y Conexiones

## Introducción

Los ductos son conductos por los cuales circula el aire en los sistemas HVAC. Constituyen la columna vertebral de cualquier sistema de climatización, siendo responsables de transportar el aire desde la unidad generadora (UMA) hasta los difusores de distribución y la recolección de aire de retorno hacia la planta de tratamiento.

En esta lección aprenderás a crear y modelar redes complejas de ductos en Revit MEP 2026, incluyendo la selección correcta de tipos de ductos, el cálculo de dimensiones, la implementación de accesorios y la coordinación en tres dimensiones.

## Conceptos Fundamentales de Ductos

### Función Principal

Los ductos tienen múltiples funciones críticas en un sistema HVAC:

**Transporte de fluido:** Transportan aire acondicionado desde la UMA hacia los espacios ocupados a velocidades controladas (típicamente 3-6 m/s en ductos principales)

**Control de calidad:** Mantienen la temperatura y humedad del aire durante el transporte, minimizando pérdidas térmicas mediante aislamiento

**Distribución uniforme:** Garantizan que la cantidad de aire llegue proporcionalmente a cada zona según sus necesidades

**Retorno de aire:** Permiten que el aire usado retorne a la planta de tratamiento para ser recirculado o extraído

### Clasificación por Función

**Ductos de impulsión (Supply):**
- Transportan aire acondicionado desde UMA a difusores
- Requieren aislamiento térmico
- Velocidades: 4-6 m/s en conductos principales

**Ductos de retorno (Return):**
- Transportan aire usado desde espacios hacia UMA
- Generalmente sin aislamiento (aire más tibio)
- Velocidades: 2-4 m/s en conductos principales

**Ductos de aire exterior (Fresh Air):**
- Transportan aire fresco desde toma exterior
- Pueden requerir aislamiento según condiciones climáticas
- Velocidades: 3-5 m/s

**Ductos de extracción (Exhaust):**
- Transportan aire viciado fuera del edificio
- Sin aislamiento típicamente
- Velocidades: 4-6 m/s

## Tipos de Ductos

### Ductos Rectangulares

Los ductos rectangulares son los más utilizados en instalaciones comerciales e industriales. Su forma permite mejor integración con espacios técnicos y estructuras edilicias.

**Ventajas:**
- Máximo aprovechamiento de espacios técnicos
- Buena integración con sistemas estructurales
- Facilita diseño de ramificaciones
- Menores pérdidas de carga que circulares con similar velocidad
- Estética mejorada en instalaciones visibles

**Desventajas:**
- Mayor costo de fabricación
- Require mayor precisión en instalación
- Más juntas que ductos circulares
- Riesgo de vibraciones si no está bien soportado

**Proporciones recomendadas:**
- Relación ancho/alto: Máximo 4:1
- Ejemplo: 800 mm x 200 mm (relación 4:1)
- Rangos típicos: 200 x 200 mm a 1000 x 500 mm

**Materiales:**
- Chapa galvanizada (uso estándar)
- Aluminio (edificios de altura, menos peso)
- Acero al carbono (usos especiales)
- Fibra de vidrio (aislamiento integrado)

### Ductos Circulares

Los ductos circulares ofrecen eficiencia aerodinámica superior y son preferibles para sistemas de alta velocidad o cuando se requiere minimizar pérdidas de carga.

**Ventajas:**
- Mayor eficiencia aerodinámica
- Menores pérdidas de presión (menor potencia ventilador)
- Menos juntas (mayor hermeticidad)
- Instalación más rápida
- Menos peso en soportes

**Desventajas:**
- Menor aprovechamiento de espacios
- Diámetros grandes pueden ser intrusivos
- Mayor costo de algunos accesorios
- Integración arquitectónica más compleja

**Diámetros típicos:** 100 mm a 800 mm en pasos de 50 mm

**Especificaciones:**
- Presión de operación: Hasta 250 Pa
- Velocidades: 4-12 m/s según aplicación

### Ductos Flexibles

Los ductos flexibles son conductos de aluminio o acero recubierto con material flexible, utilizados para conexiones cortas.

**Aplicaciones:**
- Conexión difusores a ductos rígidos
- Conexiones a unidades terminales (VAV boxes)
- Instalaciones de difícil acceso
- Reducción de vibración y ruido

**Características:**
- Longitud típica: 0.5 m a 3.0 m
- Permite cambios de dirección
- Requiere menos soportes
- Mayor fricción que ductos rígidos

**Restricciones:**
- No para aplicaciones permanentes en grandes distancias
- Máximo recomendado: 3 metros
- Debe estar estirado (evitar pliegues)

### Conductos de Baja Velocidad

Utilizados en sistemas de mayor confort, operan a velocidades reducidas (0.5-2 m/s), típicamente en sistemas radiantes o de desplazamiento de aire.

## Modelado de Ductos en Revit MEP 2026

### Proceso de Creación

**Paso 1: Iniciar sistema**
- En ribbon MEP Systems, seleccionar **Ductwork > Draw Duct**
- Seleccionar tipo de ducto (rectangular, circular, flexible)
- Elegir nivel o plano de referencia

**Paso 2: Dimensionamiento**
Revit permite definir:
- Ancho y alto (rectangulares)
- Diámetro (circulares)
- Aislamiento (espesor y material)
- Revestimiento interior (si aplica)

**Paso 3: Trazo**
- Dibuja el recorrido del ducto en planta o en 3D
- Establece conexiones con equipos y terminales
- Define cambios de elevación mediante niveles

**Paso 4: Accesorios automáticos**
Revit inserta automáticamente:
- Codos para cambios de dirección
- Reducciones para cambios de tamaño
- Bifurcaciones para ramificaciones

### Parámetros Técnicos

**Parámetros geométricos:**
```
Ancho: 600 mm
Alto: 300 mm
Espesor de aislamiento: 50 mm
Forma del aislamiento: Dentro/Fuera
```

**Parámetros de flujo:**
```
Caudal de diseño: 450 L/s
Velocidad de diseño: 5.0 m/s
Fricción específica: 0.8 Pa/m
Pérdida de presión total: 125 Pa
```

**Parámetros de especificación:**
```
Material: Chapa galvanizada
Calibre: 0.9 mm
Revestimiento interior: Fibra de vidrio 25 mm
Sello: Sellado con masilla
```

## Accesorios de Ductos

### Codos

Los codos permiten cambios de dirección en la red de ductos. Su diseño y fabricación afectan las pérdidas de presión.

**Tipos de codos:**
- **Codo de 90 grados con radio:** Pérdida típica 0.4 Pa
- **Codo de 90 grados agudo:** Pérdida típica 0.8 Pa
- **Codo de 45 grados:** Pérdida típica 0.2 Pa
- **Codo de 180 grados (cambio):** Pérdida típica 0.8 Pa

**Radio de curvatura recomendado:** Mínimo 1.5 veces la dimensión mayor del ducto

### Bifurcaciones y Tees

Permiten dividir el flujo de aire en múltiples direcciones.

**Características:**
- Las bifurcaciones simétricas tienen menores pérdidas
- Ángulos de bifurcación: 30-45 grados recomendado
- Pérdida de presión en tee: 0.3 a 0.6 Pa

### Reducciones y Expansiones

Facilitan cambios de dimensión del ducto manteniendo continuidad del flujo.

**Criterios de diseño:**
- Ángulo de reducción: Máximo 15 grados
- Ángulo de expansión: Máximo 7 grados
- Reducciones excesivamente bruscas aumentan pérdidas

### Compuertas y Registros

Permiten regulación y aislamiento de secciones de ducto.

**Tipos:**
- Compuertas de lámina única
- Compuertas de varias láminas
- Registros de acceso
- Compuertas de aislamiento

## Cálculo de Pérdidas de Presión

El cálculo de pérdidas de presión es crítico para determinar el tamaño del ventilador requerido.

### Pérdida por Fricción en Ducto

**Fórmula de Darcy-Weisbach:**
```
ΔP = f × (L/D) × (ρ × V²) / 2
```

Donde:
- ΔP = Pérdida de presión (Pa)
- f = Factor de fricción
- L = Longitud del ducto (m)
- D = Diámetro equivalente (m)
- ρ = Densidad del aire (1.2 kg/m³)
- V = Velocidad del aire (m/s)

### Diámetro Equivalente

Para ductos rectangulares:
```
D_eq = (4 × Área) / Perímetro
D_eq = (4 × A × B) / (2 × (A + B))
```

### Pérdida Dinámina en Accesorios

Expresada como múltiplo de la presión dinámica:
```
ΔP_accesorio = K × (ρ × V²) / 2
```

Ejemplo para un codo 90°: K = 0.4 a 0.6

## Aislamiento Térmico de Ductos

El aislamiento es crítico para mantener la temperatura del aire durante el transporte.

**Materiales comunes:**
- Fibra de vidrio: 25-50 mm, λ = 0.045 W/m·K
- Espuma de poliuretano: 25-50 mm, λ = 0.025 W/m·K
- Lana mineral: 25-50 mm, λ = 0.038 W/m·K

**Selección según aplicación:**
- Ductos de impulsión: Mínimo 50 mm
- Ductos de retorno: 25 mm (opcional)
- Ductos de aire exterior: 50 mm (climático)

**Ubicación de aislamiento:**
- Interior: Mejor atenuación acústica
- Exterior: Mejor protección térmica, menos fricción interna

## Integración 3D en Revit

### Visualización

Revit MEP 2026 permite visualizar:
- Ductos en 3D con espesor de aislamiento
- Accesorios automáticos
- Intersecciones con otros sistemas
- Conflictos con estructura

### Detección de Interferencias

El modelo integrado permite:
- Identificar cruces con elementos estructurales
- Detectar colisiones con sistemas eléctricos o de tuberías
- Optimizar recorridos antes de la construcción
- Documentar soluciones de coordinación

## Mejores Prácticas

1. **Diseñar sistemas balanceados** - Velocidades similares en todas las ramas
2. **Minimizar cambios de dirección** - Reducir pérdidas de presión
3. **Usar codos de radio adecuado** - Mejorar eficiencia
4. **Documentar aislamiento** - Especificar espesor y material
5. **Coordinar en 3D** - Evitar conflictos con otros sistemas
6. **Verificar accesibilidad** - Permitir mantenimiento futuro
7. **Crear tablas de ductos** - Documentación automática en Revit

## Resumen

El modelado de ductos en Revit MEP 2026 requiere:
- Selección correcta del tipo de ducto según aplicación
- Cálculo preciso de dimensiones y velocidades
- Especificación de accesorios y conexiones
- Consideración de aislamiento térmico y acústico
- Integración 3D para coordinación con otros sistemas
- Documentación técnica clara para construcción

El diseño de ductos eficiente minimiza consumo energético y garantiza confort en sistemas HVAC modernos.

---

**Imagen de referencia:** Tipos de ductos y accesorios comunes - [Placeholder]

**Imagen de referencia:** Pérdidas de presión en codos según ángulo - [Placeholder]

**Tiempo estimado de lectura:** 50 minutos
**Nivel de dificultad:** Intermedio a Avanzado
