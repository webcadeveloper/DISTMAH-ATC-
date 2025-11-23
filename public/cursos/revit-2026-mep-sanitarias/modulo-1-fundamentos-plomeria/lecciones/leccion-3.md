# Lección 3: Familias de Fixtures Sanitarios

## Introducción

Los fixtures sanitarios (muebles de plomería) son los puntos de consumo de agua y drenaje en cualquier instalación. En Revit MEP, estos elementos son familias parametrizadas que contienen información geométrica, de conectores MEP y de cálculo de unidades de fixture. Dominar la creación y configuración de familias garantiza proyectos profesionales y documentación exacta.

## Objetivos de Aprendizaje

Al finalizar esta lección serás capaz de:

- Entender la estructura de familias de fixtures en Revit MEP
- Identificar conectores MEP y su configuración
- Crear familias de fixtures personalizadas
- Configurar parámetros de fixture units
- Trabajar con familias cargadas en proyectos
- Dimensionar fixtures según espacios
- Generar schedules de fixtures
- Coordinar fixtures con arquitectura

## 1. Estructura de Familias de Fixtures

### Componentes de una Familia

Una familia de fixture en Revit MEP contiene:

**1. Geometría 3D**
- Dimensiones físicas del mueble
- Superficies visibles
- Detalles representativos

**2. Conectores MEP**
- Conexión de agua fría
- Conexión de agua caliente
- Conexión de drenaje
- Conexión de ventilación (en algunos)

**3. Parámetros**
- Fixture units (unidades de fixture)
- Material
- Marca/fabricante
- Dimensiones customizables

**4. Annotaciones**
- Etiquetas de información
- Referencias dimensionales

### Tipos de Familias Comunes

**Inodoros (Toilets):**
- Fixture Units: 3.0-4.0
- Conexión agua fría: 1/2"
- Drenaje: 3"
- Instalación: Mural o pedestal

**Lavabos (Sinks/Lavatories):**
- Fixture Units: 1.0
- Agua fría y caliente: 1/2"
- Drenaje: 1.25"-1.5"
- Instalación: Mural o mueble

**Duchas (Showers):**
- Fixture Units: 2.0
- Agua fría y caliente: 1/2"
- Drenaje: 2"
- Instalación: Pared

**Tinas (Bathtubs):**
- Fixture Units: 2.0
- Agua fría y caliente: 1/2"
- Drenaje: 1.5"
- Instalación: Empotrada

**Urinarios (Urinals):**
- Fixture Units: 0.5-0.75
- Agua fría: 1/2"
- Drenaje: 1.5"-2"
- Instalación: Mural

## 2. Conectores MEP en Fixtures

### Qué son los Conectores

Los conectores MEP son puntos de conexión que permiten que fixtures se vinculen automáticamente a tuberías. Son esenciales para la coordinación del sistema.

### Tipos de Conectores

**1. Conectores de Entrada (Inlet)**
```
Agua Fría (Cold Water):
- Diámetro nominal: 1/2" típico
- Presión: 3-5 bar
- Rango: 0.2-0.5 l/s

Agua Caliente (Hot Water):
- Diámetro nominal: 1/2" típico
- Presión: 2-4 bar
- Rango: 0.1-0.3 l/s
```

**2. Conectores de Salida (Outlet)**
```
Drenaje Sanitario:
- Diámetro nominal: 1.25"-2"
- Flujo gravitacional
- Caudal: 0.5-2.0 l/s

Ventilación:
- Diámetro nominal: 1.25"-1.5"
- Flujo ascendente
```

### Propiedades del Conector

```
Nombre: "Cold Water In"
Tipo: Fluid
Dirección: In (entrada) o Out (salida)
Descripción: "Conexión agua fría"
Clasificación del Sistema: Water Supply - Cold
```

## 3. Edición y Creación de Familias de Fixtures

### Acceso a Familias

**En Revit MEP:**
```
Menú: Gestionar > Gestión de Familias
O directamente: Cargar familia
```

### Creando una Familia desde Cero

**Paso 1: Iniciador de familia**
```
Archivo > Nuevo > Familia
Seleccionar plantilla: "Plumbing Fixture"
Abre el editor de familias
```

**Paso 2: Crear geometría**
```
Usar herramientas de modelado:
- Extrusion (extrusión)
- Revolve (revolución)
- Sweep (barrido)
- Loft (transición)
```

**Paso 3: Insertar conectores**
```
Pestaña: Create > Connector
Seleccionar punto de inserción
Definir propiedades del conector
Asignar a sistema de agua/drenaje
```

### Parámetros Esenciales

**Parámetros dimensionales:**
```
Largo: 600 mm (ancho del mueble)
Fondo: 400 mm (profundidad)
Alto: 350 mm (altura de trabajo)
```

**Parámetros de fixture:**
```
Fixture Units: 1.0
Water Consumption: 6 l/min (lavabo típico)
Pressure Rating: 3-5 bar
```

## 4. Familias Predeterminadas en Revit 2026

### Ubicación de Familias

```
Revit 2026 Installation:
C:\Program Files\Autodesk\Revit 2026\
  RVT Content\
    Plumbing\
      Fixtures\
```

### Familias Comunes Incluidas

**Residential:**
- Standard Toilets (inodoros)
- Vanities (muebles de baño)
- Bathtubs (tinas)
- Showers (duchas)
- Sinks (fregaderos)

**Commercial:**
- Wall-mounted toilets
- Troughs (canaletas)
- Industrial sinks
- Floor drains (drenajes de piso)

**Special:**
- Drinking fountains (bebederos)
- Eyewash stations
- Safety showers
- Emergency fixtures

## 5. Carga y Colocación de Fixtures

### Cargando Familias en Proyecto

**Método 1: Desde biblioteca**
```
MEP > Plumbing > Fixtures
Buscar familia
Click para cargar en proyecto
```

**Método 2: Cargar familia manualmente**
```
Menú: Gestionar > Cargar familia
Navegar a carpeta de contenido
Seleccionar .rfa deseado
```

### Colocando Fixtures

**Pasos:**
```
1. Pestaña: MEP > Plumbing > Place Fixtures
2. Seleccionar tipo de fixture
3. Click en planta (ubicación)
4. Ajustar rotación (R + numeral)
5. Confirmar colocación (Enter o ESC)
```

### Alineación y Espaciado

**Espaciado recomendado en baños:**
```
Lavabo - Pared: 200-300 mm
Inodoro - Pared: 150-200 mm
Inodoro - Lavabo: 600-800 mm
Ancho de zona de sanitarios: 1.5-2.0 m
```

## 6. Configuración de Fixtures en Proyecto

### Fixture Properties Dialog

**Acceso:**
```
Click derecho en fixture > Editar tipo
O Seleccionar > Pestaña: Properties
```

**Parámetros editables:**
```
- Marca/Fabricante
- Material
- Color
- Fixture Units
- Presión de operación
- Caudal de agua
- Consumo de agua
```

### Fixture Units Personalizadas

**Configuración por código aplicable:**

```
Estándares IAPMO (USA/Canadá):
- Inodoro: 4.0
- Lavabo: 1.0
- Ducha: 2.0
- Bañera: 2.0
- Fregadero: 2.0
- Bidet: 1.0

Normas Europeas (EN):
- Inodoro: 3.0-4.0
- Lavabo: 0.5-1.0
- Ducha: 1.0-2.0
```

## 7. Conectando Fixtures a Tuberías

### Conectores Automáticos

Cuando colocas un fixture, sus conectores son accesibles para:
- Conexión manual a tuberías
- Routing automático
- Análisis de sistema

### Proceso de Conexión

**Opción 1: Conexión manual**
```
1. Seleccionar tubería
2. Click en punto final (endpoint)
3. Arrastrar al conector del fixture
4. Sistema se enlaza automáticamente
```

**Opción 2: Creación desde fixture**
```
1. Click en fixture
2. MEP > Create > Pipe from Fixture
3. Especificar tipo de tubería
4. Revit genera tubería automáticamente
```

### Verificación de Conexiones

```
Systems Browser:
- Expandir sistema
- Verificar conexión de fixtures
- Revisar cálculos de caudal
- Chequear pérdida de presión
```

## 8. Schedules de Fixtures

### Información Capturada

**Schedule típico de fixtures:**
```
Columnas incluidas:
- Fixture Type
- Mark (referencia)
- Room
- Count (cantidad)
- Fixture Units
- Water Supply (l/s)
- Drain Size (DN)
```

### Creando Schedule de Fixtures

**Pasos:**
```
1. Vista > New > Schedule
2. Seleccionar familia: Fixtures (Plumbing)
3. Agregar campos deseados
4. Establecer filtros (por piso, zona)
5. Ordenar por Room o Type
```

### Análisis de Datos

El schedule permite:
- Verificar cantidad de fixtures
- Totalizar fixture units por piso/zona
- Calcular caudal total requerido
- Estimar diámetros de tuberías
- Documentar especificaciones

## 9. Fixtures Especiales

### Sanitarios Universales (ADA/Accesibilidad)

**Características requeridas:**
```
- Alto adaptable: 400-450 mm
- Espacio frontal: 760 mm mínimo
- Circulación lateral: 600 mm
- Conector lateral o frontal
```

### Consumos de Agua según Estándares

**Edificios LEED:**
```
Inodoro: 4.8 l/descarga máximo (6.0 l anterior)
Lavabo: 6.0 l/min máximo (8.0 l anterior)
Ducha: 7.5 l/min máximo (9.5 l anterior)
Urinario: 0.75 l/descarga
```

### Filtros y Especializados

```
Fontaneros (Drinking fountains):
- Agua fría únicamente
- Fixture Units: 0.5
- Presión: 2-3 bar

Staciones de emergencia:
- Ducha de emergencia: 15 l/s
- Lavaojo: 1-2 l/s
- Sistemas especiales de presión
```

## Resumen

Los fixtures son la base de cualquier sistema sanitario en Revit MEP. Su correcta selección, colocación y configuración garantiza que los cálculos de caudal, presión y drenaje sean precisos. Las familias parametrizadas permiten adaptaridad a diferentes proyectos manteniendo precisión técnica.

## Ejercicio Práctico

**Crea un escenario de fixtures:**

1. Abre tu proyecto MEP de plantilla
2. Carga al menos 5 tipos diferentes de fixtures
3. Crea un baño tipo con:
   - 1 inodoro (4.0 FU)
   - 2 lavabos (1.0 FU cada)
   - 1 ducha (2.0 FU)
4. Verifica conexiones MEP de cada uno
5. Genera schedule de fixtures
6. Calcula unidades totales
7. Exporta schedule a PDF

## Palabras Clave

Fixtures, Familias, Conectores MEP, Inodoro, Lavabo, Ducha, Bañera, Fixture Units, Caudal, Drenaje, Presión, ADA, LEED, Schedule, Parámetros

---

**Tiempo de lectura:** 50-55 minutos
**Siguiente lección:** Colocación Inteligente y Conectores
