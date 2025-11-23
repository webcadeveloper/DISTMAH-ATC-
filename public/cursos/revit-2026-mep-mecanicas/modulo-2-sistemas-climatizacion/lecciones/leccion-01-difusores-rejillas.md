# Lección 1: Difusores y Rejillas - Tipos y Especificaciones

## Introducción

Los difusores y rejillas son elementos terminales fundamentales en cualquier sistema de climatización. Estos componentes son responsables de distribuir el aire acondicionado en los espacios interiores de manera uniforme y eficiente. El correcto dimensionamiento, selección y ubicación de difusores y rejillas es crítico para lograr confort térmico, acústico y evitar corrientes de aire no deseadas en las zonas ocupadas.

En esta lección aprenderás a identificar los diferentes tipos de difusores y rejillas disponibles en el mercado, sus características técnicas, cómo modelarlos en Revit MEP 2026 y cómo calcular el número y distribución adecuada según los requisitos del proyecto.

## Tipos de Difusores

### Difusores Circulares

Los difusores circulares son los más comúnmente utilizados en proyectos comerciales e industriales. Su diseño geométrico permite una distribución radial del aire en todas las direcciones, creando un patrón de flujo tridimensional que garantiza una mezcla rápida y uniforme con el aire del espacio.

**Características principales:**
- Diámetro típico: 100 mm a 300 mm
- Caudal de diseño: 20 L/s a 100 L/s
- Coeficiente de inducción: 1:3 a 1:5
- Rango de velocidad terminal: 0.3 a 0.5 m/s
- Acabados: Anodizado, pintado, cromado

**Aplicaciones:** Edificios de oficinas, hospitales, centros comerciales

**Ventajas:** Bajo costo, fácil instalación, buena mezcla de aire, distribución uniforme

**Desventajas:** Requiere cálculo preciso para evitar corrientes, ocupa espacio en techo

### Difusores Lineales

Los difusores lineales son ideales para espacios con requerimientos de distribución continua de aire. Su forma alargada permite cubrir mayores superficies con menos unidades, mejorando la estética arquitectónica al integrarse mejor con sistemas de techo suspendido.

**Características principales:**
- Longitud típica: 600 mm a 2000 mm
- Ancho: 100 mm a 300 mm
- Caudal de diseño: 50 L/s a 200 L/s
- Velocidad de salida: 2.5 a 4.0 m/s
- Índice de difusión: 1.5 a 2.0

**Aplicaciones:** Oficinas grandes, centros de datos, edificios de altura

**Ventajas:** Línea continua de aire, mejor estética, menos unidades requeridas, menor ruido

**Desventajas:** Mayor costo, requiere precisión en instalación, ducto de conexión singular

### Difusores de Piso

Los difusores de piso se utilizan para aplicaciones especiales donde el aire debe ser distribuido desde zonas bajas. Son comunes en edificios de altura donde se implementa sistemas de baja velocidad o en aplicaciones con perimetrales de ventanas.

**Características principales:**
- Tamaño típico: 200 mm x 200 mm a 400 mm x 400 mm
- Caudal: 10 L/s a 50 L/s
- Rango de velocidad: 0.2 a 0.4 m/s
- Material: Acero galvanizado, aluminio
- Filtro incorporado: Opcional

**Aplicaciones:** Espacios históricos, edificios con restricciones de techo, sistemas radiantes

**Ventajas:** Distribución desde piso, no interfiere con arquitectura, flexible

**Desventajas:** Mayor mantenimiento, riesgo de obstrucción, requiere grellas especiales

### Difusores Rectangulares

Los difusores rectangulares combinan características de lineales y circulares, ofreciendo flexibilidad en la integración arquitectónica con caudales moderados.

**Características principales:**
- Tamaño: 300 x 300 mm a 600 x 600 mm
- Caudal: 15 L/s a 80 L/s
- Patrones de difusión: 1, 2 o 4 direcciones
- Laminas ajustables: Sí
- Materiales: Aluminio, acero galvanizado

**Aplicaciones:** Oficinas modulares, retail, espacios administrativos

## Rejillas de Aire

### Rejillas de Extracción

Las rejillas de extracción son aberturas por donde el aire retorna del espacio hacia el sistema de climatización. Su diseño debe permitir un flujo de aire uniforme sin crear obstrucciones visuales o acústicas.

**Características principales:**
- Tamaño típico: 200 x 200 mm a 800 x 800 mm
- Caudal de retorno: 30 L/s a 150 L/s
- Velocidad facial recomendada: 0.5 a 1.0 m/s
- Profundidad: 50 mm a 100 mm
- Material: Aluminio anodizado, acero pintado

**Tipos especiales:**
- Rejillas de retorno lineal: Para pasillos
- Rejillas de retorno pared: En espacios cerrados
- Rejillas piso: Sistemas de plenum bajo piso

### Rejillas de Aire Fresco

Estas rejillas permiten la entrada de aire exterior hacia el sistema HVAC. Deben estar localizadas en zonas libres de contaminación y a una altura mínima para evitar succión de aire contaminado.

**Características principales:**
- Ubicación: Mínimo 2 metros sobre nivel de piso
- Distancia de chimeneas: Mínimo 3 metros
- Malla anti-pájaros: Obligatoria
- Filtro inicial: Recomendado
- Caudal típico: 50 L/s a 200 L/s

**Consideraciones especiales:**
- Prevención de succión de humo
- Protección contra lluvia y nieve
- Acceso para mantenimiento
- Tratamiento acústico si es necesario

## Parámetros de Difusores en Revit MEP 2026

En Revit, los difusores se modelan como familias especializadas con parámetros técnicos que facilitan el cálculo y la documentación automática.

### Parámetros Principales

**Parámetros geométricos:**
- Ancho de difusor (Width)
- Largo de difusor (Length)
- Diámetro (para circulares)
- Profundidad de instalación
- Altura de cuello (neck height)

**Parámetros de flujo:**
- Caudal nominal (Nominal Flow Rate) en L/s o CFM
- Velocidad terminal (Terminal Velocity)
- Velocidad facial (Face Velocity)
- Número de direcciones de flujo (1, 2, 4)

**Parámetros acústicos:**
- Nivel de ruido NC (Noise Criteria)
- Índice de refracción sónica
- Atenuación estimada

**Parámetros de especificación:**
- Código de fabricante
- Referencia de familia
- Acabado (Finish)
- Material
- Código de proyecto

## Cálculo del Número de Difusores

El número de difusores requerido depende de varios factores que deben ser considerados en el diseño del sistema HVAC.

### Método de Caudal

Formula básica: **Número de difusores = Caudal total requerido / Caudal por difusor**

**Ejemplo:**
- Espacio: Oficina de 100 m²
- Caudal requerido: 6 L/s por metro cuadrado = 600 L/s
- Difusores disponibles: Circulares con capacidad de 50 L/s
- Cálculo: 600 L/s ÷ 50 L/s = 12 difusores

### Método de Densidad

Se basa en la distribución de unidades por área de espacio (difusores por cada 100 m²).

**Rangos típicos:**
- Oficinas privadas: 3-4 difusores por 100 m²
- Espacios abiertos: 2-3 difusores por 100 m²
- Halls y espacios comerciales: 4-5 difusores por 100 m²
- Laboratorios especializados: 5-6 difusores por 100 m²

### Consideraciones de Distribución Espacial

**Criterios de ubicación:**
- Distancia mínima entre difusores: 1.5 a 2.0 veces el patrón de difusión
- Evitar ubicación sobre mesas de trabajo
- Mantener simetría en distribución visual
- Coordinar con elementos arquitectónicos (columnas, vigas)
- Verificar ausencia de obstáculos que bloqueen flujo

## Integración en Revit MEP 2026

### Inserción de Difusores

1. En la cinta de herramientas MEP, seleccionar **Mechanical > HVAC Systems > Diffuser**
2. Elegir la familia de difusor deseada
3. Especificar ubicación en planta de techo
4. Asignar parámetros técnicos
5. Conectar al sistema de ductos

### Conexión al Sistema

```
Ducto principal → Ramificación → Codo adaptador → Difusor
                                                   ↓
                                             Aire distribución
```

Los difusores se conectan automáticamente a la red de ductos en Revit, permitiendo cálculos de pérdida de carga y visualización en secciones.

### Generación de Tablas de Equipos

Una vez colocados todos los difusores, Revit permite generar tablas automáticas con:
- Ubicación (Level, espacio)
- Código de difusor
- Caudal nominal
- Velocidad terminal
- Acabado especificado
- Remarks

## Mejores Prácticas

1. **Seleccionar difusores de catálogos estándar** para facilitar especificaciones
2. **Documentar velocidades faciales** en cálculos del proyecto
3. **Verificar compatibilidad acústica** con requisitos de NC
4. **Coordinar con arquitectura** la integración visual
5. **Crear familias parametrizadas** para facilitar cambios en diseño
6. **Validar patrones de flujo** mediante modelos 3D antes de finalizar
7. **Especificar filtros** si es necesario según calidad de aire requerida

## Resumen

Los difusores y rejillas son componentes críticos en sistemas HVAC. El análisis completo requiere:
- Selección según caudal y velocidad requerida
- Cálculo del número y distribución espacial
- Modelado en Revit con parámetros técnicos
- Coordinación arquitectónica e integración visual
- Documentación precisa para especificaciones

El correcto dimensionamiento asegura confort térmico, acústico y permite eficiencia energética en sistemas de climatización modernos.

---

**Imagen de referencia:** Tipos comunes de difusores (circular, lineal, rectangular, piso) - [Placeholder]

**Tiempo estimado de lectura:** 45 minutos
**Nivel de dificultad:** Intermedio
