# Lección 1: Pressure Pipe Networks - Agua Potable

## Introducción

Las **Pressure Pipe Networks** en Civil 3D 2026 representan un tipo especializado de red que opera bajo presión, fundamentalmente diferente de las **Gravity Networks** (alcantarillado sanitario y pluvial). Mientras que las gravity networks dependen exclusivamente de la gravedad para el flujo, las pressure networks requieren bombeo activo y deben mantener presiones específicas en todos los puntos de la red para funcionar correctamente.

En esta lección avanzada, aprenderás a diseñar sistemas completos de distribución de agua potable, desde la selección de componentes hasta la configuración de presiones operativas y la modelación de accesorios especializados como válvulas y hidrantes.

**Duración estimada:** 90 minutos
**Nivel:** Avanzado

---

## 1. Diferencias Fundamentales: Gravity vs Pressure Networks

### 1.1 Gravity Networks (Alcantarillado)

**Características principales:**
- Flujo por gravedad (pendiente mínima requerida)
- Flujo a superficie libre (no llena la tubería)
- Dirección única de flujo (descendente)
- Invert elevations críticas
- Manholes como puntos de acceso
- Diseño basado en Manning's equation

**Componentes típicos:**
- Pipes (PVC, concrete, HDPE)
- Manholes (inspection chambers)
- Inlets y catch basins
- Outfalls

### 1.2 Pressure Networks (Agua Potable)

**Características principales:**
- Flujo bajo presión (tubería llena)
- Requiere bombeo para movimiento del agua
- Flujo bidireccional posible
- Presión crítica en todos los puntos
- Válvulas para control de flujo
- Diseño basado en Hazen-Williams o Darcy-Weisbach

**Componentes típicos:**
- Pressure pipes (PVC, ductile iron, HDPE, copper)
- Appurtenances (válvulas, hidrantes, medidores)
- Pump stations
- Storage tanks
- Booster pumps

### 1.3 Consideraciones de Diseño Únicas

**Presión de operación:**
- Presión mínima típica: 20-30 psi (140-210 kPa)
- Presión máxima típica: 80-100 psi (550-690 kPa)
- Presión óptima residencial: 40-60 psi (280-415 kPa)

**Velocidad de flujo:**
- Velocidad mínima: 2 fps (0.6 m/s) - evita sedimentación
- Velocidad máxima: 8 fps (2.4 m/s) - evita erosión
- Velocidad recomendada: 3-5 fps (0.9-1.5 m/s)

**Pérdidas de presión:**
- Fricción en tuberías (función de longitud, diámetro, rugosidad)
- Pérdidas menores (válvulas, codos, tees)
- Elevación (0.433 psi por pie de altura)

---

## 2. Creación de Parts Lists para Agua Potable

### 2.1 Acceso a Pressure Networks

En Civil 3D 2026, las pressure networks se encuentran en:

**Home tab > Create Design panel > Pipe Network > Pressure Network Creation Tools**

A diferencia de gravity networks que se acceden desde el mismo panel pero con herramientas diferentes.

### 2.2 Configuración de Parts List

**Paso 1: Crear nueva Parts List**

1. **Toolspace > Settings tab**
2. Expandir **Pressure Network > Pressure Network Parts Lists**
3. Clic derecho > **New**
4. Nombre sugerido: "Water Distribution - Municipal"

**Paso 2: Agregar familias de tuberías**

Las partes están organizadas por estándares:

**AWWA (American Water Works Association):**
- AWWA C900 - PVC Pressure Pipe (4"-12")
- AWWA C905 - PVC Pressure Pipe (14"-48")
- AWWA C151 - Ductile Iron Pipe (4"-64")

**Imperial Pipe Sizes comunes:**
- 4 inch (100mm) - Servicios residenciales
- 6 inch (150mm) - Distribución local
- 8 inch (200mm) - Arterias secundarias
- 12 inch (300mm) - Arterias principales
- 16-24 inch (400-600mm) - Líneas de transmisión

**Paso 3: Agregar appurtenances**

En la Parts List, pestaña **Appurtenances**:

**Gate Valves (Válvulas de compuerta):**
- Usadas para aislamiento de secciones
- Tamaños: 4", 6", 8", 12", 16"
- Ubicación típica: cada 500-1000 ft (150-300m)

**Check Valves (Válvulas de retención):**
- Previenen flujo reverso
- Críticas en pump stations
- Tamaños según línea de descarga

**Pressure Reducing Valves (PRVs):**
- Reducen presión en zonas de elevación baja
- Evitan presiones excesivas (>100 psi)
- Configurables con presión de salida deseada

**Fire Hydrants (Hidrantes):**
- Espaciamiento típico: 300-500 ft (90-150m) en zonas urbanas
- Tipos: wet barrel, dry barrel (para zonas de congelamiento)
- Configuración: nozzle sizes, flow capacity

**Water Meters (Medidores):**
- Residenciales: 5/8", 3/4", 1"
- Comerciales: 1.5", 2", 3"
- Industriales: 4"+

### 2.3 Configuración de Propiedades de Materiales

**Material Properties (para análisis hidráulico):**

**PVC (Policloruro de Vinilo):**
- Hazen-Williams C-factor: 150
- Rugosidad absoluta: 0.000005 ft
- Presión de trabajo: Clase 200 (200 psi), Clase 235, Clase 305
- Ventajas: económico, fácil instalación, resistente a corrosión
- Desventajas: sensible a UV, menor resistencia a impactos

**Ductile Iron (Hierro Dúctil):**
- Hazen-Williams C-factor: 130 (nuevo), 100 (viejo con incrustaciones)
- Presión de trabajo: hasta 350 psi
- Ventajas: muy resistente, ideal para altas presiones
- Desventajas: más costoso, requiere revestimiento interno

**HDPE (Polietileno de Alta Densidad):**
- Hazen-Williams C-factor: 150
- Presión de trabajo: SDR 11 (160 psi), SDR 9 (200 psi)
- Ventajas: flexible, fusionable, sin juntas
- Desventajas: sensible a temperatura

---

## 3. Diseño de Redes de Distribución

### 3.1 Layout Types (Tipos de Configuración)

**Branched System (Sistema ramificado):**
- Estructura de árbol, sin loops
- Más económico
- Flujo unidireccional
- Problemas: dead ends, baja redundancia
- Uso típico: áreas rurales, desarrollos pequeños

**Looped/Grid System (Sistema mallado):**
- Múltiples rutas de flujo
- Mayor redundancia y confiabilidad
- Mejor distribución de presión
- Permite aislamiento sin cortar servicio total
- Uso típico: áreas urbanas, desarrollos grandes

**Hybrid System:**
- Combinación de loops principales con ramales
- Balance entre costo y confiabilidad
- Más común en la práctica

### 3.2 Proceso de Creación en Civil 3D

**Paso 1: Definir alignment de calles**

Las redes de agua potable típicamente siguen el derecho de vía:

```
1. Home tab > Create Design panel > Alignment > Create Alignment from Objects
2. Seleccionar polylines de calles
3. Nombrar: "Main St Water", "Oak Ave Water", etc.
```

**Paso 2: Iniciar Pressure Network**

```
1. Home tab > Create Design panel > Pipe Network > Pressure Network Creation Tools
2. Network name: "Residential Water Distribution"
3. Parts List: Seleccionar la creada anteriormente
4. Surface: Seleccionar existing ground surface
```

**Paso 3: Dibujar network layout**

La barra de herramientas **Pressure Network Layout Tools** incluye:

**Draw Pipes and Appurtenances:**
- Similar a gravity networks pero con lógica diferente
- No requiere dirección de flujo específica
- Conecta automáticamente junctions

**Técnica profesional - Offset desde centerline:**

```
1. Usar comando OFFSET de AutoCAD
2. Distancia típica: 10 ft (3m) desde centerline
3. Ubicar tuberías en lado específico según código local
4. Evitar conflictos con otras utilities
```

**Paso 4: Insertar appurtenances**

**Gate Valves estratégicas:**
- En intersecciones de calles (permiten aislar secciones)
- Antes y después de puentes o cruces especiales
- En límites de zonas de presión

**Fire Hydrants:**
- Lado de acera, accesible para vehículos de emergencia
- Spacing según código de bomberos local
- Típicamente en esquinas para máxima cobertura

**Comando en Civil 3D:**
```
Pressure Network Layout Tools > Appurtenance > Select Type (Gate Valve, Hydrant, etc.)
Click to place at desired junction
```

### 3.3 Configuración de Presiones de Operación

**Paso 1: Definir presión en punto de entrada**

En una red municipal, el punto de entrada típicamente es:
- Conexión a main municipal (presión conocida)
- Salida de tanque elevado (presión = elevación)
- Salida de pump station (presión calculada)

**Editar propiedades del fitting inicial:**
```
1. Seleccionar fitting de entrada
2. Properties palette
3. Section: Pressure Network Data
4. Static Pressure: 60 psi (ejemplo)
5. Elevation: [desde surface]
```

**Paso 2: Configurar reglas de diseño**

```
Toolspace > Settings tab > Pressure Network > Commands > CreatePressureNetworkByLayout
Clic derecho > Edit Command Settings
```

**Pressure Rules:**
- Minimum Pressure: 20 psi (código mínimo)
- Maximum Pressure: 80 psi (protección de instalaciones)
- Design Pressure: 40 psi (punto medio confortable)

**Pipe Sizing Rules:**
- Minimum diameter: 4 inch (servicios)
- Maximum diameter: [según sistema]
- Velocity constraints: 2-8 fps

---

## 4. Modelado de Válvulas Especializadas

### 4.1 Gate Valves (Válvulas de Compuerta)

**Función:** Aislamiento de secciones para mantenimiento

**Ubicación estratégica:**
- Antes y después de cada loop
- En intersecciones principales
- Cada 500-1000 ft en líneas rectas

**Inserción en Civil 3D:**
```
1. Pressure Network Layout Tools > Appurtenance
2. Type: Gate Valve
3. Size: Igual al diámetro de la tubería
4. Click en junction deseado
```

**Propiedades importantes:**
- **Operational State:** Open (normal), Closed (simulación de falla)
- **Minor Loss Coefficient (K):** 0.2 (válvula abierta), infinity (cerrada)

### 4.2 Check Valves (Válvulas de Retención)

**Función:** Prevenir flujo reverso

**Ubicación crítica:**
- Salida de bombas (evita golpe de ariete en parada)
- Conexiones entre zonas de presión diferente
- Protección de equipos sensibles

**Configuración:**
```
Properties:
- Flow Direction: Indicar dirección permitida
- Cracking Pressure: 1-5 psi (presión mínima para abrir)
- Minor Loss Coefficient (K): 2.5 (típico)
```

### 4.3 Pressure Reducing Valves (PRVs)

**Función:** Reducir presión excesiva en zonas de baja elevación

**Cálculo de necesidad:**

Si tienes un tanque elevado a 150 ft de elevación y casas a 50 ft:
```
Presión estática = (150 - 50) * 0.433 psi/ft = 43.3 psi (aceptable)
```

Pero si hay casas a 0 ft:
```
Presión estática = (150 - 0) * 0.433 psi/ft = 65 psi (alta pero tolerable)
```

Y si hay casas a -50 ft (valle):
```
Presión estática = (150 - (-50)) * 0.433 psi/ft = 86.6 psi (EXCESIVA - requiere PRV)
```

**Configuración en Civil 3D:**
```
Properties:
- Inlet Pressure: [calculada automáticamente]
- Outlet Pressure (setpoint): 50 psi (ejemplo)
- Valve Size: Típicamente igual a pipe diameter
```

### 4.4 Air Release Valves

**Función:** Liberar aire acumulado en puntos altos

**Ubicación:**
- Puntos altos del perfil longitudinal
- Después de cambios bruscos de dirección vertical
- Típicamente cada 500-1000 ft en terreno ondulado

**Importancia:**
- Aire acumulado reduce capacidad de flujo
- Puede causar golpe de ariete
- Afecta lecturas de medidores

---

## 5. Hydrants y Accesorios

### 5.1 Fire Hydrant Design

**Tipos principales:**

**Wet Barrel Hydrant:**
- Válvula en cada nozzle
- Agua siempre en el barrel
- Uso: climas sin congelamiento

**Dry Barrel Hydrant:**
- Válvula principal abajo (bajo línea de congelamiento)
- Barrel se drena después de uso
- Uso: climas fríos

**Configuración en Civil 3D:**

```
Properties:
- Type: Wet Barrel / Dry Barrel
- Number of Nozzles: 2 (2.5") + 1 (4.5") [typical]
- Flow Capacity: 1000-1500 GPM (diseño)
- Main Connection Size: 6" (typical)
```

**Ubicación según NFPA (National Fire Protection Association):**
- Espaciamiento máximo: 500 ft en áreas comerciales
- 300 ft en áreas de alta densidad
- Mínimo 40 ft de edificios
- Accesible desde calle (no bloqueado por estacionamiento)

### 5.2 Service Connections

**Componentes de acometida residencial:**

1. **Corporation Stop:** Conexión al main (válvula en tubería principal)
2. **Service Line:** Tubería de 3/4" o 1" desde main hasta property line
3. **Curb Stop:** Válvula en property line (acceso desde calle)
4. **Service Line a meter:** Desde curb stop hasta medidor
5. **Water Meter:** En property line o en estructura
6. **Building Supply:** Desde meter hasta edificio

**En Civil 3D:**

Las service connections individuales típicamente no se modelan en la pressure network principal, sino que se representan con:
- Symbology (bloques en planta)
- Annotation (etiquetas de servicio)
- Separate drawings para detalle de acometidas

**Cálculo de demanda:**

```
Residencias: 1-3 fixture units = 5-10 GPM
Comercios: Según tipo (restaurante: 50+ GPM)
Industriales: Análisis específico
```

---

## 6. Best Practices para Sistemas Presurizados

### 6.1 Diseño y Layout

1. **Mantener loops cerrados** en áreas urbanas para redundancia
2. **Evitar dead ends largos** (problemas de calidad de agua)
3. **Ubicar válvulas estratégicamente** para minimizar área afectada en reparaciones
4. **Considerar crecimiento futuro** (capacidad extra en mains)
5. **Separación de otras utilities:**
   - Mínimo 10 ft horizontal de sewer lines
   - Mínimo 18 inch vertical (agua sobre alcantarillado)
   - 12 inch de gas lines

### 6.2 Materiales y Especificaciones

1. **Seleccionar material apropiado:**
   - PVC: económico, zonas de baja presión
   - Ductile Iron: alta presión, cruces vehiculares pesados
   - HDPE: áreas de movimiento de suelo

2. **Profundidad mínima de instalación:**
   - 3 ft en climas templados (protección vehicular)
   - 4-6 ft en climas fríos (bajo frost line)

3. **Bedding y backfill apropiado:**
   - Cama de arena o grava fina
   - Compactación especificada

### 6.3 Análisis y Validación

1. **Verificar presiones en todos los nodos:**
   - Scenario de máxima demanda (día pico)
   - Scenario de combate de incendios
   - Scenario de falla de bomba

2. **Validar velocidades:**
   - No menores a 2 fps (sedimentación)
   - No mayores a 8 fps (erosión, ruido)

3. **Analizar water age** (estancamiento):
   - En dead ends: <3 días
   - En loops activos: <1 día

### 6.4 Organización en Civil 3D

1. **Nombrar networks descriptivamente:**
   - "Water Main - Phase 1"
   - "Water Services - Residential Zone A"

2. **Usar layers apropiados:**
   - C-WATR-PIPE (tuberías de agua)
   - C-WATR-APPR (appurtenances)
   - C-WATR-HYDT (hidrantes)
   - C-WATR-ANNO (anotaciones)

3. **Data Shortcuts para colaboración:**
   - Compartir network con equipo
   - Actualización sincronizada

4. **Styles consistentes:**
   - Colores por diámetro o material
   - Line types apropiados (continua para presión)

---

## 7. Integración con Surfaces y Profiles

### 7.1 Asociación con Surface

Al crear la pressure network, se asocia con:
- **Existing Ground Surface:** Para determinar profundidades
- **Proposed Surface:** Si hay regrading

**Comando:**
```
Pressure Network Properties > Information tab > Object surface: [Select surface]
```

### 7.2 Generación de Profile Views

Aunque menos crítico que en gravity networks (no depende de pendiente), los profiles son útiles para:
- Identificar puntos altos (air release valves)
- Verificar profundidades mínimas
- Coordinar con otras utilities

**Proceso:**
```
1. Crear alignment siguiendo tubería principal
2. Home tab > Profile & Section Views > Create Profile View
3. Seleccionar network pipes a mostrar
4. Anotar válvulas, cambios de diámetro, servicios
```

---

## Resumen

Las **Pressure Pipe Networks** en Civil 3D 2026 requieren un enfoque diferente al de gravity networks. Los puntos clave son:

1. **Presión constante** es el objetivo principal (no pendiente)
2. **Parts Lists especializadas** con valves, hydrants, meters
3. **Layout estratégico** con loops para redundancia
4. **Appurtenances críticos** (PRVs, check valves, air release)
5. **Separación de otras utilities** según códigos
6. **Validación de presiones** en todos los puntos

En la siguiente lección, aprenderás a realizar **análisis hidráulicos completos**, calculando Hydraulic Grade Line, pérdidas de presión y validando el diseño contra normas profesionales.

---

**Recursos:**
- Autodesk Help: [Pressure Networks in Civil 3D](https://help.autodesk.com/view/CIV3D/2026/ENU/?guid=GUID-1B7E3F7D-1234)
- AWWA Standards: [www.awwa.org](https://www.awwa.org)
- Hazen-Williams Calculator: [Built into Civil 3D Analysis tools]

**Siguiente:** Lección 2 - Pressure Analysis y Hydraulic Grade
