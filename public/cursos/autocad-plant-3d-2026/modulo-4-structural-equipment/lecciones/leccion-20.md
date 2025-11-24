# Lección 20: Boquillas y Conexiones de Equipos

## Información General

**Duración estimada:** 60 minutos
**Nivel:** Intermedio-Avanzado
**Módulo:** 4 - Acero Estructural y Equipos
**Prerequisitos:** Lección 19

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

1. Comprender fundamentos de boquillas (nozzles) en equipos según ASME y API
2. Crear y gestionar programas de boquillas (nozzle schedules) completos
3. Configurar orientación angular y radial de boquillas con precisión
4. Establecer projection length (longitud de proyección) de boquillas
5. Especificar ratings de bridas y tipos de conexiones
6. Añadir aberturas especiales: manholes, handholes, sight glasses
7. Validar nozzle data y detectar interferencias
8. Generar reportes de nozzles para fabricación
9. Integrar tags de equipos con P&IDs (Piping & Instrumentation Diagrams)

## Introducción

Las boquillas (nozzles) son las interfaces críticas entre equipos y sistemas de tuberías en plantas de proceso. Una boquilla no es simplemente un "agujero en el recipiente": es un componente de ingeniería complejo que debe resistir presión interna, cargas mecánicas de tuberías conectadas, esfuerzos térmicos, y posibles cargas dinámicas (vibración, golpe de ariete). El diseño, ubicación y especificación incorrectos de boquillas pueden resultar en fallas catastróficas, paros de planta, y accidentes graves.

Según ASME BPVC Section VIII Division 1, toda abertura en un recipiente a presión debe ser adecuadamente reforzada para compensar el material removido. Las boquillas pequeñas (típicamente <89 mm de diámetro) pueden no requerir refuerzo adicional si el espesor del casco es suficiente. Boquillas grandes (>89 mm) requieren análisis de refuerzo mediante área replacement method o mediante pad de refuerzo soldado. Estos cálculos son responsabilidad del ingeniero mecánico o del fabricante, pero el diseñador de Plant 3D debe comprender los conceptos para modelar correctamente.

La ubicación de boquillas no es arbitraria: está determinada por múltiples factores: (1) requisitos de proceso (nivel de líquido, punto de alimentación, salida de vapor), (2) accesibilidad para operación y mantenimiento, (3) requisitos de drenaje (boquillas inferiores con pendiente), (4) evitar interferencias con estructuras, tuberías adyacentes y soportes del equipo, (5) distribución uniforme de cargas (evitar concentración de múltiples boquillas en una sección), y (6) consideraciones de fabricación (facilitar soldadura, inspección radiográfica).

Los nozzle schedules (programas de boquillas) son documentos fundamentales en proyectos de plantas de proceso. Cada recipiente, tanque e intercambiador tiene un nozzle schedule que lista todas las boquillas con especificaciones completas: tamaño, rating de presión, tipo de conexión (flanged, threaded, welded), orientación (angular y elevación), longitud de proyección, servicio (feed, product, vent, drain), y tag de línea conectada. Este documento coordina el trabajo entre ingeniería de proceso, ingeniería mecánica, diseño de tuberías, y fabricante del equipo.

AutoCAD Plant 3D 2026 proporciona herramientas especializadas para crear, gestionar y documentar boquillas de equipos. El sistema permite colocar boquillas con orientación precisa, asignarles propiedades completas, conectarlas inteligentemente a líneas de tuberías, validar interferencias, y generar nozzle schedules automáticamente desde el modelo 3D. Esta integración entre modelo 3D y documentación es crítica: cambios en ubicación de boquillas se reflejan automáticamente en schedules, planos y listas de materiales, eliminando errores de transcripción.

En esta lección exhaustiva, completaremos el diseño del recipiente V-101 iniciado en Lección 19 añadiendo su programa completo de 8 boquillas. Aprenderá metodologías de ubicación de boquillas según mejores prácticas de la industria, configuración precisa de orientaciones y proyecciones, especificación de bridas según ASME B16.5, gestión de aberturas especiales como manholes, y generación de documentación lista para fabricación. Este conocimiento cierra el ciclo completo de diseño de equipos en Plant 3D, preparándolo para proyectos industriales reales.

## 1. Fundamentos de Boquillas en Equipos

### 1.1 Definición y Función de Nozzles

**Definición técnica:**

Una boquilla (nozzle) es una abertura reforzada en el casco (shell) o cabezal (head) de un recipiente a presión que permite conexión con tuberías, instrumentos, o aberturas de acceso. Consiste típicamente en:

1. **Neck (cuello):** sección tubular soldada al casco, longitud suficiente para soldadura de conexión
2. **Reinforcement (refuerzo):** material adicional para compensar debilitamiento del casco
3. **Connection end (extremo de conexión):** brida, rosca, o preparación para soldadura

**Funciones de nozzles:**

**Entrada de fluidos (Feed/Inlet):**
- Introducir material de alimentación al equipo
- Ubicación determinada por proceso: distribución uniforme, prevención de cortocircuitos
- Consideraciones: velocidad de entrada (erosión), direccionalidad del flujo

**Salida de fluidos (Product/Outlet):**
- Remover productos del equipo
- Ubicación según fase: vapor en tope, líquido en fondo o lateral según nivel
- Múltiples salidas posibles: overhead vapor, sidestream, bottom product

**Venteo (Vent):**
- Liberar gases acumulados durante llenado o calentamiento
- Ubicación: punto más alto del equipo
- Conexión: típicamente a sistema de venteo o antorcha

**Drenaje (Drain):**
- Remover completamente líquido del equipo (mantenimiento, limpieza)
- Ubicación: punto más bajo con pendiente hacia boquilla
- Configuración: típicamente bridado para facilitar limpieza

**Instrumentación:**
- Temperatura: termopozos (thermowells) en ubicaciones representativas
- Presión: conexiones en zona de presión estática (no en corriente de flujo directo)
- Nivel: level gauges, displacers, conexiones para transmisores
- Muestreo: sample connections en ubicaciones accesibles

**Seguridad:**
- PSV (Pressure Safety Valve): válvula de seguridad en punto más alto
- Rupture disc: disco de ruptura como protección primaria o secundaria
- Conexión a sistema de alivio (relief header)

**Acceso (Manholes/Handholes):**
- Entrada de personal para inspección/mantenimiento interno
- Manholes: diámetro mínimo 500 mm (20 inches) para acceso de persona
- Handholes: aberturas menores (100-400 mm) para acceso de manos/herramientas

### 1.2 Nomenclatura y Designación

**Sistema de numeración:**

Cada boquilla en un equipo tiene designación única, típicamente:

```
Format: [Equipment Tag]-[Nozzle Identifier]

Ejemplos:
V-101-N1: Nozzle N1 del vessel V-101
E-203-N4: Nozzle N4 del heat exchanger E-203
T-401-M1: Manhole M1 del tank T-401
```

**Convenciones de numeración:**

**Método secuencial (más común):**
- N1, N2, N3... en orden de creación o importancia
- Ventaja: simple, sin ambigüedad
- Desventaja: no descriptivo de función

**Método por función:**
- NF: Feed (alimentación)
- NP: Product (producto)
- NV: Vent (venteo)
- ND: Drain (drenaje)
- NL: Level (nivel)
- NT: Temperature (temperatura)
- Ejemplo: V-101-NF1, V-101-NP1, V-101-NV1

**Método por orientación:**
- N: Norte (0°)
- S: Sur (180°)
- E: Este (90°)
- W: Oeste (270°)
- Ejemplo: V-101-N-North, V-101-N-East

**Recomendación:** Método secuencial (N1, N2...) con descripción de servicio en propiedades.

### 1.3 Requisitos de Refuerzo según ASME

**ASME Section VIII-1, Paragraph UG-37: Reinforcement Required for Openings in Shells and Formed Heads**

**Concepto fundamental:**

Cuando se corta una abertura en un casco a presión, se remueve material que estaba resistiendo esfuerzos circunferenciales. Este material debe "reemplazarse" mediante refuerzo.

**Área de refuerzo requerida:**

```
A = d × t × F

Donde:
A = área de refuerzo requerida (mm²)
d = diámetro de abertura (mm)
t = espesor requerido del casco (sin CA) (mm)
F = factor de corrección (típicamente 1.0 para openings in shells)
```

**Área de refuerzo disponible:**

Proviene de:
1. **Material del casco** en exceso del espesor requerido (dentro de zona de límites)
2. **Material de la boquilla** (neck) en exceso del espesor requerido
3. **Reinforcing pad** (si se añade): placa adicional soldada alrededor de boquilla

**Zona de refuerzo (reinforcement zone limits):**

Límites dentro de los cuales el material cuenta como refuerzo:
- **Paralelo al casco:** distancia = max(d, Rn + tn + t)
  - d = diámetro de abertura
  - Rn = radio exterior de boquilla
  - tn = espesor de boquilla
  - t = espesor de casco
- **Perpendicular al casco:** distancia = min(2.5t, 2.5tn)

**Boquillas que NO requieren refuerzo adicional:**

Según ASME UG-36(c)(3), boquillas pequeñas en cascos gruesos pueden auto-reforzarse:
- Si A_available (del casco + neck) ≥ A_required
- Típicamente: boquillas <3 inches (DN80) en cascos >12 mm espesor

**Refuerzo con pad:**

Cuando material disponible es insuficiente:
- Añadir reinforcing pad (placa circular u ovalada)
- Espesor del pad: típicamente igual o menor que espesor del casco
- Diámetro exterior del pad: calculado para proveer área requerida
- Soldadura: filete o groove weld al casco y a boquilla

**Nota importante para Plant 3D:**

Plant 3D NO realiza cálculos de refuerzo ASME. El diseñador debe:
1. Calcular refuerzo usando software especializado (PVElite, COMPRESS) o manualmente
2. Determinar si se requiere pad de refuerzo
3. Modelar boquilla en Plant 3D incluyendo pad si es necesario
4. Documentar cálculos en notas de diseño

### 1.4 Tipos de Conexiones de Nozzles

**Flanged (Bridado):**

Configuración más común en plantas de proceso.

Componentes:
- Neck de boquilla con extremo preparado para brida
- Weld neck flange (brida con cuello para soldar) soldada al neck
- Rating según ASME B16.5: 150#, 300#, 600#, 900#, 1500#, 2500#
- Facing: raised face (RF), flat face (FF), ring-type joint (RTJ)

Ventajas:
- Fácil desconexión para mantenimiento
- Inspección visual de junta
- Reemplazo de gasket sin corte/soldadura
- Estandarizado (intercambiabilidad)

Desventajas:
- Mayor costo que conexiones soldadas
- Mayor volumen (espacio requerido)
- Puntos potenciales de fuga (gasket)

Aplicación:
- 90% de conexiones en plantas de proceso
- Obligatorio donde desconexión frecuente o inspección requerida

**Threaded (Roscado):**

Configuración para conexiones pequeñas de baja presión.

Características:
- Neck de boquilla con rosca NPT (National Pipe Thread) interna
- Nipple roscado de tubería conecta directamente
- Tamaños típicos: 1/2" a 2" NPS
- Material de sello: cinta teflón, compound, o anaerobic sealant

Ventajas:
- Bajo costo
- Instalación rápida sin soldadura
- Compacto

Desventajas:
- Limitado a bajas presiones (<600 psig típicamente)
- No adecuado para servicio cíclico (aflojamiento)
- Dificulta inspección de integridad
- Puntos potenciales de fuga

Aplicación:
- Instrumentación: pressure gauges, temperature wells
- Pequeñas conexiones de venteo y drenaje
- Conexiones auxiliares (sample, purge)

**Socket Weld (Soldadura de enchufe):**

Configuración intermedia para conexiones pequeñas.

Características:
- Neck de boquilla con socket (receso) para tubería
- Tubería se inserta en socket, soldadura de filete externa
- Tamaños típicos: 1/2" a 2" NPS
- Gap de expansión: 1.6 mm (1/16") en fondo de socket

Ventajas:
- Mayor resistencia que roscado
- Adecuado para presiones altas
- Alineación automática de tubería

Desventajas:
- Requiere soldadura calificada
- Dificulta radiografía (solo filete visible)
- Crevice en socket (corrosión potencial en servicios severos)

Aplicación:
- Instrumentación donde threaded no es aceptable
- Conexiones pequeñas en alta presión
- Código de diseño no permite threaded

**Butt Weld (Soldadura a tope):**

Configuración para conexiones soldadas permanentemente.

Características:
- Neck de boquilla con extremo biselado (beveled)
- Tubería con extremo biselado, soldadura de ranura (groove weld)
- Inspección: radiografía completa posible
- Preparación típica: 37.5° bevel, 2 mm root face

Ventajas:
- Máxima integridad estructural
- Sin piezas adicionales (sin brida, sin gasket)
- Menor costo de materiales
- Menor perfil (espacio reducido)

Desventajas:
- Desconexión requiere corte y re-soldadura
- Inspección más compleja (requiere radiografía)
- Requiere soldadura calificada (WPS, welder qualification)

Aplicación:
- Conexiones permanentes (no requieren desconexión)
- Presiones extremas donde bridas son muy costosas
- Espacio muy limitado
- Códigos nucleares o especiales

**Pad Connection (Conexión con pad):**

Para aberturas pequeñas sin neck completo.

Características:
- Plate (placa) soldada al casco con orificio central
- Coupling o half-coupling roscado o soldado a placa
- Tamaños muy pequeños: 1/2" a 1" típicamente

Aplicación:
- Conexiones de instrumentación de muy bajo costo
- Cuando espacio no permite neck proyectado
- Tanques atmosféricos (API 650)

## 2. Nozzle Schedules (Programas de Boquillas)

### 2.1 Contenido de un Nozzle Schedule

Un nozzle schedule es una tabla que documenta todas las boquillas de un equipo.

**Formato estándar de nozzle schedule:**

```
NOZZLE SCHEDULE - VESSEL V-101
Propane Flash Separator
=============================================================================
Nozzle | Size  | Rating | Type  | Service         | Orientation | Elevation | Projection
Mark   | (NPS) | (#)    |       |                 | (degrees)   | (mm)      | (mm)
-------|-------|--------|-------|-----------------|-------------|-----------|------------
N1     | 8"    | 150    | RFWN  | Vapor Outlet    | 0° (N)      | TOS       | 250
N2     | 6"    | 300    | RFWN  | Feed Inlet      | 90° (E)     | +4500     | 300
N3     | 4"    | 150    | RFWN  | Liquid Outlet   | 180° (S)    | +500      | 250
N4     | 2"    | 150    | RFWN  | Drain           | 270° (W)    | BOS       | 200
N5     | 2"    | 150    | RFWN  | Level Gauge     | 0° (N)      | +2000     | 250
N6     | 4"    | 150    | RFWN  | PSV             | 180° (S)    | TOS       | 300
N7     | 1"    | 150    | NPT   | Pressure Gauge  | 90° (E)     | +5000     | 150
N8     | 1"    | 150    | NPT   | Temperature     | 270° (W)    | +4000     | 150
=============================================================================

NOTES:
1. All flanged nozzles are Raised Face Weld Neck (RFWN) per ASME B16.5
2. Threaded nozzles are NPT (National Pipe Thread) per ASME B1.20.1
3. TOS = Top of Shell, BOS = Bottom of Shell
4. Orientation: 0° = North, 90° = East, 180° = South, 270° = West
5. Elevation measured from bottom tangent line of vessel
6. Projection measured from outside surface of shell/head to face of flange
7. All nozzles in SA-105 (carbon steel forging) unless noted
8. Reinforcement per ASME Section VIII-1 UG-37 (calculations by fabricator)
```

**Columnas estándar:**

1. **Nozzle Mark:** N1, N2, N3... (identificación única)
2. **Size (NPS):** Nominal Pipe Size en pulgadas (1", 2", 4", 6", 8"...)
3. **Rating:** Pressure rating de brida (150#, 300#, 600#...)
4. **Type:** RFWN (raised face weld neck), NPT (threaded), SW (socket weld), BW (butt weld)
5. **Service:** Descripción funcional (Feed, Product, Vent, Drain, Level...)
6. **Orientation:** Ángulo en grados (0°, 90°, 180°, 270°) o cardinal (N, E, S, W)
7. **Elevation:** Altura desde referencia (bottom tangent, grade) en mm o pies
8. **Projection:** Longitud desde casco a face de brida en mm

**Columnas adicionales (opcional):**

- **Line Number:** Tag de línea que conecta (ej: 6"-P-301-A36)
- **Flange Facing:** RF, FF, RTJ (si varía)
- **Nozzle Material:** SA-105, SA-182 F316, etc. (si difiere del estándar)
- **Reinforcement:** "Self-reinforced" o "Pad required, 400mm OD × 10mm thk"
- **Remarks:** Notas especiales (insulation box, davit support, etc.)

### 2.2 Orientación y Sistema de Coordenadas

**Sistemas de coordenadas para boquillas:**

**Sistema angular (más común):**

Vista en planta (looking down):
```
         0° / 360° (North)
              ↑
              |
  270° ←------+------→ 90°
   (West)     |     (East)
              |
              ↓
          180° (South)
```

Convención:
- 0° apunta a norte de proyecto (grid north o true north según establecido)
- Incremento en sentido horario (clockwise)
- Rango: 0° a 360° (o 0° a 359°)

**Sistema cardinal:**
- N (North): 0°
- NE (Northeast): 45°
- E (East): 90°
- SE (Southeast): 135°
- S (South): 180°
- SW (Southwest): 225°
- W (West): 270°
- NW (Northwest): 315°

**Elevación de boquillas:**

**Sistemas de referencia vertical:**

**Bottom Tangent Line (BTL):**
- Línea tangente inferior del casco cilíndrico
- Referencia más común para recipientes verticales
- Elevación BTL = 0, todas las boquillas medidas desde BTL
- Ejemplo: Nozzle N2 @ elevation +4500 mm from BTL

**Grade / Ground Level:**
- Nivel de piso terminado donde se ubica el equipo
- Usado cuando múltiples equipos en misma área
- Ejemplo: Vessel V-101, BTL @ elevation +2500 mm from grade

**Top of Shell (TOS):**
- Para boquillas en tope del casco
- Especialmente en boquillas de vapor, venteo, PSV
- No es elevación numérica, es ubicación relativa

**Bottom of Shell (BOS):**
- Para boquillas en fondo del casco
- Típicamente drenajes en punto más bajo

**Boquillas en cabezales:**

Ubicación en heads (elipsoidal, hemisférico):
- Si en cabezal superior: especificar "Top Head" + orientación angular
- Si en cabezal inferior: especificar "Bottom Head" + orientación angular
- Elevación: centro de boquilla desde BTL
- Orientación: ángulo en vista de planta

### 2.3 Projection Length (Longitud de Proyección)

**Definición:**

Projection length es la distancia desde la superficie exterior del casco/cabezal hasta la face (cara) de la brida de la boquilla.

**Importancia:**

Determina:
1. Cuánto espacio ocupa la boquilla proyectada
2. Ubicación de tubería que conecta
3. Accesibilidad para instalación y mantenimiento
4. Clearance con aislamiento del equipo

**Factores que determinan projection length:**

**Espesor de aislamiento:**
- Boquillas deben proyectarse más allá del aislamiento
- Típicamente: projection ≥ insulation thickness + 50 mm clearance
- Ejemplo: aislamiento 100 mm → projection mínima 150 mm

**Accesibilidad para brida:**
- Espacio suficiente para colocar/remover pernos de brida
- Wrench clearance: típicamente 150-200 mm mínimo
- Boquillas grandes (>12") pueden requerir más espacio

**Refuerzo de boquilla:**
- Si reinforcing pad presente, projection medida desde OD del pad
- Pad típicamente 10-20 mm espesor, incrementa projection efectiva

**Tipo de conexión de tubería:**
- Flanged connection: projection a face de brida
- Threaded: projection a inicio de rosca
- Butt weld: projection a extremo biselado

**Valores típicos de projection:**

| Tamaño Nozzle | Projection Típica | Comentario |
|---------------|-------------------|------------|
| ≤2" threaded  | 100-150 mm        | Mínima, solo para clearance de instrumentos |
| 2"-4" flanged | 200-250 mm        | Estándar para boquillas pequeñas |
| 6"-8" flanged | 250-300 mm        | Estándar para boquillas medianas |
| 10"-16" flanged | 300-400 mm      | Mayor por tamaño de brida y clearance de pernos |
| >16" flanged  | 400-600 mm        | Grandes, requieren espacio para maniobras |

**Consideraciones especiales:**

**Boquillas con válvula montada directa:**
- Incrementar projection para acomodar válvula + actuador
- Coordinar con layout de tuberías

**Boquillas para PSV (válvula de seguridad):**
- Projection adecuada para válvula + tail pipe de descarga
- Considerar espacio para remoción/instalación

**Boquillas con instrumentación integral:**
- Level gauges: projection para vidrio o displacer
- Thermowells: projection para longitud de inserción especificada

### 2.4 Ratings de Bridas según ASME B16.5

**ASME B16.5: Pipe Flanges and Flanged Fittings NPS 1/2 through NPS 24**

Define dimensiones y ratings de presión-temperatura para bridas estándar.

**Pressure Ratings (Class):**

| Class | Presión @ Temperatura Ambiente (psig) | Aplicación Típica |
|-------|--------------------------------------|-------------------|
| 150#  | 285 psig @ -20°F to 100°F           | Baja presión, servicios generales |
| 300#  | 740 psig @ -20°F to 100°F           | Presión media, mayoría de procesos |
| 400#  | 990 psig @ -20°F to 100°F           | Media-alta presión (menos común) |
| 600#  | 1480 psig @ -20°F to 100°F          | Alta presión |
| 900#  | 2220 psig @ -20°F to 100°F          | Muy alta presión |
| 1500# | 3705 psig @ -20°F to 100°F          | Presión extrema |
| 2500# | 6170 psig @ -20°F to 100°F          | Aplicaciones especiales |

**Importante:** Estos ratings se REDUCEN a temperaturas elevadas. Consultar tablas de pressure-temperature rating en ASME B16.5 Appendix.

**Selección de rating:**

Procedimiento:
1. Determinar presión de diseño del sistema
2. Determinar temperatura de diseño
3. Consultar tabla P-T de ASME B16.5 para material de brida
4. Seleccionar class que cumple presión a temperatura especificada
5. Verificar que material de brida es compatible (SA-105 para carbon steel típico)

**Ejemplo:**
- Design pressure: 200 psig
- Design temperature: 200°F
- Material: SA-105 carbon steel
- De tabla ASME B16.5: Class 150# @ 200°F permite 180 psig (NO cumple)
- Class 300# @ 200°F permite 635 psig (OK)
- **Selección: Class 300#**

**Tipos de caras de brida (Flange Facing):**

**Raised Face (RF):**
- Cara elevada 1.6 mm (1/16") sobre superficie de brida
- Más común (95% de aplicaciones)
- Gasket: spiral wound, compressed fiber, PTFE

**Flat Face (FF):**
- Cara completamente plana
- Usado con bridas de hierro fundido (cast iron) para prevenir rotura
- Aplicación: baja presión, servicios no críticos

**Ring Type Joint (RTJ):**
- Ranura maquinada en cara de brida para anillo metálico
- Sello metal-to-metal (sin gasket elastomérico)
- Aplicación: altas presiones (>600#), altas temperaturas, servicios severos

**Especificación completa de brida:**

Formato estándar:
```
[Size] [Rating] [Facing] [Type]

Ejemplos:
6" 150# RF WN - 6 inches, Class 150, Raised Face, Weld Neck
4" 300# RTJ WN - 4 inches, Class 300, Ring Type Joint, Weld Neck
2" 150# RF SO - 2 inches, Class 150, Raised Face, Slip-On
```

## 3. Colocación de Nozzles en Plant 3D

### 3.1 Añadir Nozzles a Equipos Existentes

**Procedimiento básico:**

1. Seleccionar equipo (vessel, tank, heat exchanger) en modelo
2. Click derecho → **Add Nozzle** o comando `PLANTADDNOZZLE`
3. Cuadro de diálogo **Nozzle Properties** se abre
4. Configurar propiedades del nozzle
5. Especificar ubicación en geometría del equipo
6. Confirmar: nozzle se añade al equipo

**Método alternativo (desde paleta Properties):**

1. Seleccionar equipo
2. Paleta **Properties** → expandir sección **Nozzles**
3. Click en botón **[...]** junto a "Nozzles" (abre Nozzle Manager)
4. Click **Add Nozzle** en Nozzle Manager
5. Configurar propiedades y ubicación

### 3.2 Configuración de Nozzle Properties

**Cuadro de diálogo Nozzle Properties:**

```
Nozzle Properties - V-101-N1
==========================================
[Identification Tab]
├── Nozzle Mark: N1
├── Service: Vapor Outlet
├── Description: 8-inch outlet for overhead vapor to condenser
└── Line Number: 8"-V-301-A36 (connected line tag)

[Size and Rating Tab]
├── Nominal Size: 8 inches (NPS 8)
├── Actual ID: 202.7 mm (8.071 inches for Sch 40)
├── Nozzle Schedule: Schedule 40 (wall thickness)
├── Pressure Rating: 150# (Class 150)
├── Connection Type: Flanged
├── Flange Type: Weld Neck (RFWN)
└── Flange Facing: Raised Face (RF)

[Location Tab]
├── Location Type: [Shell | Top Head | Bottom Head]
│   └── Selected: Shell
├── Orientation (Angular):
│   ├── Method: [Degrees | Cardinal Direction]
│   ├── Angle: 0° (or Cardinal: North)
│   └── Reference: Project North
├── Elevation:
│   ├── Reference: Bottom Tangent Line
│   ├── Elevation: TOS (Top of Shell)
│   └── Numeric: +6550 mm (calculated)
└── Radial Position:
    ├── Distance from Centerline: 1014 mm (shell OD radius)
    └── Automatic: Yes (snap to shell surface)

[Projection Tab]
├── Projection Length: 250 mm
├── Measured From: Outside surface of shell
├── Measured To: Face of flange
├── Include Insulation: Yes
│   └── Insulation Thickness: 100 mm
└── Effective Projection: 250 mm (beyond insulation)

[Materials Tab]
├── Nozzle Material: SA-105 (carbon steel forging)
├── Flange Material: SA-105 (same as nozzle)
├── Gasket Type: Spiral Wound 304SS/Graphite
└── Bolt Material: SA-193 B7 (high-strength bolt)

[Reinforcement Tab] (Optional, for documentation)
├── Reinforcement Required: Yes
├── Reinforcement Method: [Self-Reinforced | Pad | Integral]
│   └── Selected: Pad
├── Pad Outside Diameter: 450 mm
├── Pad Thickness: 12 mm
├── Pad Material: SA-516 Gr.70 (same as shell)
└── Calculations Reference: See PVElite calc sheet V-101-N1

[Additional Data Tab]
├── Fabricator Note: Per ASME B16.5, full radiography required
├── Insulation Box: Not required (projection clears insulation)
├── Special Requirements: None
└── Drawing Reference: Detail drawing V-101-N1-DT
```

### 3.3 Orientación Angular y Radial

**Orientación Angular (Azimuthal):**

**Método de grados:**

Especificar ángulo exacto en grados (0-360):
- 0° = Norte (North)
- 90° = Este (East)
- 180° = Sur (South)
- 270° = Oeste (West)
- Valores intermedios: cualquier ángulo (ej: 45°, 123°, 247°)

Ventaja: Precisión exacta, útil para distribución uniforme

**Método cardinal:**

Seleccionar dirección cardinal desde lista:
- N, NE, E, SE, S, SW, W, NW
- Plant 3D convierte automáticamente a grados

Ventaja: Rapidez para orientaciones estándar

**Consideraciones para orientación angular:**

**Distribución uniforme:**
- Evitar concentración de múltiples nozzles en mismo cuadrante
- Ejemplo: 8 nozzles en recipiente vertical
  - Ideal: distribuir cada 45° (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°)
  - Evita: todas las boquillas entre 0° y 90°

**Accesibilidad:**
- Nozzles hacia áreas accesibles (no hacia paredes, estructuras)
- Espacio suficiente para válvulas, actuadores, mantenimiento

**Agrupación por función:**
- Nozzles de instrumentación: agrupar en un lado para rack de instrumentos
- Nozzles de proceso principal: lado accesible desde pipe rack
- Nozzles de servicio (vent, drain): según disponibilidad

**Orientación Radial (Elevación):**

**Para recipientes verticales:**

Elevación medida desde Bottom Tangent Line (BTL):
- BTL = 0 mm (referencia)
- Nozzle en shell a 2000 mm altura: elevation = +2000 mm from BTL
- Nozzle en Top of Shell: elevation = TOS (o valor numérico de shell height)
- Nozzle en Bottom of Shell: elevation = BOS (o valor numérico negativo si en head)

**Para recipientes horizontales:**

Posición circunferencial (clock position):
- 12 o'clock: tope del casco (TOS)
- 3 o'clock: lado derecho (mirando desde frente)
- 6 o'clock: fondo del casco (BOS)
- 9 o'clock: lado izquierdo

O especificar ángulo desde vertical:
- 0° = tope
- 90° = lado horizontal
- 180° = fondo

**Ubicación en cabezales (heads):**

Para boquillas en cabezales elipsoidal o hemisférico:
- Especificar: "Top Head" o "Bottom Head"
- Orientación angular: misma lógica que shell
- Posición radial: distancia desde apex del head
- Plant 3D calcula automáticamente curvatura del head

### 3.4 Ubicación Precisa con Snaps y Referencias

**Métodos de ubicación:**

**Snap to Surface (más común):**

Procedimiento:
1. Durante colocación de nozzle, activar snap
2. Hover sobre superficie de shell o head
3. Cursor snap a superficie automáticamente
4. Click para colocar: nozzle perpendicular a superficie en punto seleccionado

Ventaja: Garantiza orientación perpendicular, ubicación precisa

**Specify Coordinates:**

Procedimiento:
1. Método de ubicación: "By Coordinates"
2. Introducir:
   - X, Y, Z: coordenadas absolutas en modelo
   - Plant 3D proyecta punto a superficie más cercana del equipo
3. Nozzle se coloca en proyección

Ventaja: Control absoluto, útil para coordinar con otros equipos

**Specify Angular and Elevation:**

Procedimiento (preferido para consistencia):
1. Método: "By Angular Position and Elevation"
2. Introducir:
   - Angular Position: 0° (North)
   - Elevation: +4500 mm from BTL
3. Plant 3D calcula ubicación exacta en superficie de shell
4. Nozzle se orienta radialmente (perpendicular a shell)

Ventaja: Coincide con nozzle schedule, fácil verificación

**Copy and Rotate:**

Para múltiples nozzles a misma elevación distribuidos uniformemente:

Procedimiento:
1. Crear primer nozzle (ej: N1 @ 0°, elevation +2000mm)
2. Comando: `PLANTCOPYNOZZLE`
3. Seleccionar nozzle a copiar
4. Especificar:
   - Number of Copies: 3 (para total 4 nozzles)
   - Angular Spacing: 90° (distribución uniforme 360°/4)
5. Plant 3D crea 3 copias a 90°, 180°, 270°

Ventaja: Velocidad, precisión en distribución uniforme

## 4. Tipos Especiales de Aberturas

### 4.1 Manholes (Bocas de Hombre)

**Definición y propósito:**

Manholes son aberturas grandes que permiten entrada de personal al interior del equipo para:
- Inspección interna de integridad estructural
- Limpieza de incrustaciones, sedimentos
- Mantenimiento de internals (bandejas, empaques)
- Reparaciones de revestimientos (linings)

**Requisitos de tamaño:**

Según OSHA y mejores prácticas:
- Diámetro mínimo: 20 inches (500 mm) circular
- Alternativa: oval 15"×20" (380×500 mm)
- Permite paso de persona con equipo de seguridad (SCBA)

**Tipos de manholes:**

**Circular (más común):**
- Tamaños estándar: 20", 24", 30" (500, 600, 750 mm)
- Brida: flat face (FF) con full-face gasket
- Cover (tapa): placa plana con refuerzo (stiffening rib) si diámetro >24"
- Pernos: numerosos (típicamente 16-24) para sello uniforme

**Oval (menos común):**
- Dimensiones típicas: 16"×20", 18"×24"
- Ventaja: menor dimensión permite ubicación donde espacio limitado
- Desventaja: más costoso de fabricar

**Ubicación típica de manholes:**

**Recipientes verticales:**
- Shell: típicamente a elevation +1500 a +2000 mm from BTL
  - Altura cómoda para acceso desde plataforma adyacente
- Top Head: en apex o lateral de head (acceso desde tope)
- Bottom Head: en lateral de head (acceso desde ground level)

**Recipientes horizontales:**
- En heads (cabezales): ubicación más común
  - Facilita acceso a toda longitud del vessel
- En shell: lado superior (12 o'clock position) si heads no permiten

**Tanques API 650:**
- Shell: uno o más manholes a nivel de ground
- Roof: manhole en tope de techo para acceso interno

**Configuración en Plant 3D:**

```
Manhole Properties - V-101-M1
==========================================
[Identification]
├── Mark: M1
├── Service: Manhole (Inspection Access)
└── Description: 24-inch circular manhole for internal access

[Size]
├── Type: Circular Manhole
├── Size: 24 inches (600 mm)
├── Flange: 24" Class 150 FF (Flat Face)
├── Cover: Carbon steel plate 16 mm thick with stiffening ribs
└── Gasket: Full-face compressed asbestos-free

[Location]
├── Position: Shell
├── Orientation: 0° (North) - facing accessible platform
├── Elevation: +1800 mm from BTL
└── Accessible From: Platform at elevation +1500 mm

[Special Features]
├── Davit: Yes (for cover lifting, 500 kg capacity)
├── Davit Location: Adjacent to manhole, 90° offset
├── Safety Chain: Yes (for securing cover when open)
└── Insulation Box: Yes (to clear insulation around manhole)
```

### 4.2 Handholes (Aberturas de Mano)

**Definición:**

Handholes son aberturas menores que manholes, permiten acceso de manos/brazos o herramientas pero no de persona completa.

**Tamaños típicos:**
- 4" a 12" (100-300 mm) diámetro
- Más comunes: 6" y 8"

**Aplicaciones:**

**Inspección visual:**
- Permite boroscopio, videocámara
- Inspección de soldaduras internas
- Verificación de cleanliness después de limpieza

**Limpieza limitada:**
- Acceso de mangueras, lanzas de agua
- Remoción manual de depósitos cerca de abertura

**Instalación/remoción de instrumentos:**
- Inserción de thermowells, level probes
- Instalación de anodos de protección catódica

**Ventajas sobre manholes:**
- Menor costo (brida más pequeña, menos pernos)
- Menor debilitamiento del casco (menor área de refuerzo)
- Menor espacio requerido para apertura/cierre

**Desventajas:**
- Acceso muy limitado
- No permite entrada de personal (restricción regulatoria)

**Configuración típica:**

- Flange: weld neck RF, Class 150 típico
- Blind flange (brida ciega) como cover
- Gasket: spiral wound o compressed fiber
- Ubicación: según necesidad de acceso

### 4.3 Sight Glasses (Visores)

**Definición y función:**

Sight glasses (level glasses) son ventanas transparentes que permiten observación visual del interior del equipo, típicamente para indicación de nivel de líquido.

**Tipos:**

**Reflex Glass:**
- Vidrio con superficie prismática interna
- Principio: refracción diferente en zona de líquido vs vapor
- Zona de líquido: oscura (negro)
- Zona de vapor: brillante (plateado)
- Ventaja: contraste claro sin iluminación
- Limitación: presión <400 psig, temperatura <400°F

**Transparent Glass:**
- Vidrio plano transparente con iluminación posterior
- Requiere: luz de fondo para visualización
- Permite ver color y turbidez de líquido
- Aplicación: cuando características de líquido son importantes

**Magnetic Level Gauge (no es sight glass, pero relacionado):**
- Indicador de nivel con flotador magnético interno
- Display externo (banderolas, dial) sin vidrio
- Ventaja: alta presión/temperatura sin límite de vidrio
- Más costoso que sight glass convencional

**Configuración de sight glass:**

```
Sight Glass Configuration - V-101-LG1
==========================================
[Type]
└── Type: Reflex Glass Level Gauge

[Connections]
├── Top Connection: 2" 150# RF WN
│   ├── Elevation: +3500 mm from BTL
│   └── Orientation: 0° (North)
└── Bottom Connection: 2" 150# RF WN
    ├── Elevation: +500 mm from BTL
    └── Orientation: 0° (North, same as top)

[Glass Section]
├── Viewing Length: 3000 mm (distance between connections)
├── Glass Width: 30 mm (1.25 inches)
├── Number of Sections: 3 (each 1000 mm, with intermediate flanges)
├── Glass Type: Borosilicate (Pyrex)
├── Pressure Rating: 200 psig
└── Temperature Rating: 300°F

[Accessories]
├── Isolation Valves: 2" ball valves at top and bottom connections
├── Drain Valve: 1/2" drain at bottom connection
├── Vent Valve: 1/2" vent at top connection
├── Protective Cover: Wire mesh guards for glass sections
└── Illumination: LED backlight (for night operations)

[Installation]
├── Mounting: Direct to vessel nozzles
├── Alignment: Vertical (plumb)
├── Clearance: 300 mm from insulation for access
└── Platform Access: Viewing height at platform level
```

**Ubicación de sight glasses:**

- Orientación: típicamente en lado accesible (facing control room o operador)
- Elevación: span completo de rango de nivel crítico
- Ejemplo: level normal 30-70%, sight glass desde 10% a 90%
- Múltiples sight glasses: si rango de nivel muy amplio

### 4.4 Level Gauges y Instrument Connections

**Level Gauge Connections:**

Para transmisores de nivel, conexiones superior e inferior requeridas.

**Displacer Type:**
- Dos nozzles: top y bottom del span de medición
- Típicamente: 2" 150# RF WN
- Spacing vertical: según span de transmisor (típicamente 1-3 metros)

**Differential Pressure (DP) Type:**
- Dos nozzles: high-pressure tap (top) y low-pressure tap (bottom)
- Pequeñas: 1" o 3/4" threaded o flanged
- Instrument tubing: 1/2" desde nozzle a transmisor

**Radar Type:**
- Single nozzle en tope del vessel
- Tamaño: 3", 4" o 6" según fabricante de radar
- Ubicación: área sin obstrucción (no sobre internos como agitador)

**Configuración en Plant 3D:**

Para displacer type:
1. Añadir Nozzle Top: N5-Top
   - Size: 2" 150# RF WN
   - Service: Level Gauge Top Connection
   - Elevation: +3000 mm from BTL (top of span)
   - Orientation: 0° (North, accessible side)
2. Añadir Nozzle Bottom: N5-Bottom
   - Size: 2" 150# RF WN
   - Service: Level Gauge Bottom Connection
   - Elevation: +500 mm from BTL (bottom of span)
   - Orientation: 0° (same as top for alignment)
3. Documentar: nozzles N5-Top y N5-Bottom son pair para LT-101

**Instrument Connections (General):**

**Temperature:**
- Thermowell nozzle: 1" o 3/4" threaded típico
- Ubicación: en zona representativa de temperatura (no near feed inlet)
- Insertion length: especificada por fabricante de thermowell

**Pressure:**
- Pressure tap: 1" o 1/2" threaded
- Ubicación: zona de presión estática (no en corriente de flujo directo)
- Altura: accesible para maintenance (típicamente mid-height de vessel)

**Sample Connection:**
- Sample nozzle: 3/4" o 1" threaded/flanged
- Ubicación: según fase a muestrear (líquido: en zona de líquido)
- Consideración: flush connection o with dip tube según requisitos

## 5. Validación de Nozzle Data

### 5.1 Verificación de Interferencias

**Tipos de interferencias a verificar:**

**Nozzle-to-Nozzle:**

Interferencia entre boquillas adyacentes:
- Distancia mínima entre centros de nozzles
- Regla general: spacing ≥ (D1 + D2)/2 + clearance
  - D1, D2 = diámetros exteriores de nozzles
  - Clearance = mínimo 50 mm (2 inches)

Ejemplo:
- Nozzle N1: 8" (OD ~220 mm)
- Nozzle N2: 6" (OD ~170 mm)
- Spacing mínimo: (220+170)/2 + 50 = 245 mm center-to-center

**Nozzle-to-Weld Seam:**

Boquillas no deben ubicarse sobre soldaduras longitudinales o circunferenciales del casco:
- Distancia mínima: 50 mm (2") desde edge de nozzle a centerline de weld
- Razón: facilitar inspección radiográfica, evitar concentración de esfuerzos

**Nozzle-to-Support:**

Boquillas deben evitar interferir con soportes:
- Skirt: nozzles en shell típicamente >300 mm arriba de shell-to-skirt weld
- Saddles (horizontal vessels): verificar clearance entre nozzles y saddles
- Legs: clearance entre nozzles y attachment plates de legs

**Nozzle-to-Piping:**

Validación crítica:
- Tubería conectada a nozzle no debe interferir con:
  - Otras tuberías del equipo
  - Estructura adyacente
  - Aislamiento del equipo
  - Acceso para mantenimiento

**Nozzle-to-Insulation:**

- Projection de nozzle debe extenderse más allá de aislamiento
- Insulation boxes: en nozzles grandes, box metálico alrededor de projection
- Verificar: projection ≥ insulation thickness + 50 mm mínimo

**Procedimiento de verificación en Plant 3D:**

1. **Visual Inspection 3D:**
   - Vista isométrica del vessel con todos los nozzles colocados
   - Rotate model, verificar visualmente spacing
   - Identificar posibles interferencias

2. **Interference Check Tool:**
   - Comando: `PLANTINTERFERENCECHECK`
   - Seleccionar: All nozzles de vessel
   - Incluir: vessel shell, supports, adjacent equipment
   - Ejecutar: análisis de interferencias
   - Resultado: reporte de clashes con distancias

3. **Nozzle Spacing Report:**
   - Plant 3D → Reports → Nozzle Spacing Report
   - Genera tabla con distancias entre todos los pares de nozzles
   - Verificar: todos los spacings cumplen mínimos

4. **Sección Transversal:**
   - Crear planos de sección verticales y horizontales
   - Verificar clearances en 2D (más preciso que 3D visual)
   - Especialmente útil para nozzles en elevaciones similares

### 5.2 Validación de Orientaciones

**Checklist de orientación:**

**Accesibilidad:**
□ Nozzles de operación frecuente accesibles desde plataformas
□ Nozzles de mantenimiento (drain, vent) accesibles desde grade o plataforma baja
□ Manholes orientados hacia área de acceso (no hacia pared o estructura)

**Funcionalidad de proceso:**
□ Vapor outlets en tope del vessel (TOS) o top head
□ Liquid outlets a elevación apropiada según nivel de líquido
□ Feed inlets a elevación y orientación que facilitan distribución uniforme
□ Drains en punto más bajo (BOS o bottom head)

**Routing de tuberías:**
□ Orientación facilita ruteo hacia pipe rack principal
□ Nozzles de mismo servicio (feed lines múltiples) en mismo cuadrante
□ Evitar orientaciones que fuerzan tuberías a cruzar sobre otras

**Coordinación con P&ID:**
□ Nozzles asignados coinciden con P&ID (número y tamaño)
□ Tags de líneas en P&ID coinciden con line numbers en nozzle schedule
□ Flow direction en P&ID consistente con inlet/outlet de nozzles

**Instrumentación:**
□ Instrument nozzles agrupados en rack side (típicamente Norte o Este)
□ Level gauge visible desde control room o área de operación
□ Pressure gauge accesible para lectura visual
□ Sample connections con espacio para toma de muestra segura

### 5.3 Validación de Propiedades

**Checklist de propiedades completas:**

Para cada nozzle, verificar:

**Dimensiones:**
□ Size (NPS) especificado
□ Schedule (wall thickness) especificado
□ Projection length especificada y ≥ mínimo requerido

**Rating y Tipo:**
□ Pressure rating (150#, 300#, etc.) cumple design pressure del sistema
□ Connection type (flanged, threaded, etc.) apropiado para tamaño y servicio
□ Flange type (RFWN, SO, etc.) según estándar de proyecto
□ Flange facing (RF, FF, RTJ) especificado

**Ubicación:**
□ Orientation (degrees o cardinal) especificada
□ Elevation (from BTL o grade) especificada
□ Location (shell, top head, bottom head) especificada

**Servicio:**
□ Service description completa y clara
□ Line number asignado (si conecta a tubería)
□ P&ID reference documentado

**Materiales:**
□ Nozzle material especificado (SA-105 típico)
□ Flange material especificado (típicamente igual a nozzle)
□ Gasket type especificado
□ Bolt material especificado (SA-193 B7 típico)

**Refuerzo (si aplicable):**
□ Reinforcement method documentado (self-reinforced o pad)
□ Pad dimensions especificadas (si pad requerido)
□ Calculations reference documentado

### 5.4 Nozzle Load Analysis

**Cargas en nozzles:**

Nozzles están sujetos a cargas mecánicas de tuberías conectadas:

**Tipos de cargas:**

1. **Weight (Peso):**
   - Peso de tubería llena de líquido
   - Peso de válvulas, instrumentos
   - Peso de aislamiento

2. **Thermal Expansion:**
   - Tubería se expande/contrae con temperatura
   - Genera fuerzas y momentos en nozzle

3. **Pressure Thrust:**
   - Cambio de dirección de tubería (codos) genera thrust
   - Transmitido parcialmente a nozzle

4. **Vibration:**
   - Bombas, compresores generan vibración
   - Transmitida por tubería a nozzle

5. **Wind and Seismic:**
   - Cargas de viento en tubería elevada
   - Cargas sísmicas en tubería soportada

**Límites de cargas en nozzles:**

Códigos (ASME, API) establecen cargas máximas admisibles:

**WRC 107/537:**
- Methodology para calcular esfuerzos en casco debido a cargas en nozzles
- Usado por software de stress analysis (CAESAR II, AutoPIPE)

**API 610 (para bombas):**
- Límites de cargas en nozzles de bombas centrífugas
- Fuerzas: típicamente <500 lbf (2200 N) por nozzle
- Momentos: típicamente <1000 ft-lbf (1350 N-m) por nozzle

**Procedimiento de validación:**

1. **Piping Stress Analysis:**
   - Ingeniero de stress analiza sistema de tuberías
   - Software calcula cargas en cada nozzle
   - Reporta: forces (Fx, Fy, Fz) y moments (Mx, My, Mz)

2. **Nozzle Load Check:**
   - Comparar cargas calculadas con allowables
   - Si exceden: re-rutear tubería, añadir soportes, usar expansion joint

3. **Documentation:**
   - Cargas admisibles documentadas en nozzle schedule o separate table
   - Cargas calculadas documentadas en piping stress report
   - Verificación de cumplimiento en design review

**Nota:** Plant 3D no realiza stress analysis. Integración con software especializado (CAESAR II, AutoPIPE) permite importar cargas calculadas para documentación.

## 6. Reportes de Nozzles para Fabricación

### 6.1 Nozzle Schedule Report

**Generación de reporte en Plant 3D:**

Procedimiento:
1. **Plant 3D** → **Reports** → **Equipment Nozzle Schedule**
2. **Select Equipment:** V-101 (o múltiples equipos)
3. **Configure Columns:**
   - Seleccionar columnas a incluir en reporte
   - Standard columns: Mark, Size, Rating, Type, Service, Orientation, Elevation, Projection
   - Optional columns: Line Number, Materials, Reinforcement, Remarks
4. **Sorting:**
   - Sort by: Nozzle Mark (N1, N2, N3...) o por Elevation
5. **Format:**
   - Excel: para edición y distribución
   - PDF: para revisión y aprobación
6. **Generate Report**

**Reporte generado automáticamente incluye:**

- Header: Equipment Tag, Service, Drawing Reference
- Tabla con todas las boquillas y propiedades
- Footer: Notes, Legend, Revision History
- Firma: Prepared by, Checked by, Approved by (to be filled manually)

**Ventajas de reporte automático:**

- **Consistencia:** formato uniforme en todos los equipos
- **Precisión:** datos directamente del modelo 3D (no transcripción manual)
- **Actualización:** regenerar reporte instantáneamente después de cambios
- **Integración:** hyperlinks a modelo 3D (en versión digital)

### 6.2 Nozzle Detail Drawings

**Dibujos de detalle requeridos:**

Para fabricación, cada tipo de nozzle requiere dibujo de detalle:

**Nozzle Details Típicos:**

**Standard Nozzle (con pad de refuerzo):**
```
Drawing Content:
├── Section View (corte)
│   ├── Shell thickness
│   ├── Nozzle neck thickness y longitud
│   ├── Reinforcing pad dimensions (OD, thickness)
│   ├── Weld details (shell-to-pad, pad-to-nozzle, nozzle-to-flange)
│   ├── Flange dimensions
│   └── Overall projection
├── Front View
│   ├── Pad outline
│   ├── Flange bolt circle
│   └── Orientation reference
├── Dimensions
│   ├── Nozzle ID y OD
│   ├── Projection length
│   ├── Pad OD
│   ├── Flange OD y BC
│   └── All critical dimensions
├── Welding Details
│   ├── Weld symbols per AWS D1.1
│   ├── Weld sizes
│   ├── NDT requirements (RT, UT, PT, MT)
│   └── Post-weld heat treatment (if required)
├── Materials List
│   ├── Nozzle: SA-105
│   ├── Pad: SA-516 Gr.70
│   ├── Flange: SA-105
│   ├── Gasket: Spiral wound 304SS/Graphite
│   └── Bolts: SA-193 B7
└── Notes
    ├── Orientation reference
    ├── Fabrication sequence
    ├── Inspection requirements
    └── Code references
```

**Manhole Detail:**
- Incluye detalles de davit (si aplicable)
- Cover design con stiffening ribs
- Bolt arrangement y torque requirements
- Insulation box details

**Instrument Nozzle (threaded):**
- Coupling detail
- Inspection port cap detail
- Blow-down valve configuration (if required)

**Generación de detalles en Plant 3D:**

1. Crear layout drawing del vessel
2. Comando: `PLANTCREATEDETAILVIEW`
3. Seleccionar nozzle
4. Especificar:
   - Section cut plane
   - Scale (típicamente 1:5 o 1:10 para detalles)
5. Plant 3D genera vista de sección del nozzle con dimensiones

**Personalización de detalles:**

- Añadir anotaciones de soldadura (weld symbols)
- Incluir tabla de materiales
- Añadir notas de fabricación
- Referenciar estándares aplicables

### 6.3 Nozzle Orientation Drawing

**Plano de orientación de boquillas:**

Documenta ubicación angular y elevación de todas las boquillas para fabricante.

**Vistas requeridas:**

**Elevation Views (4 direcciones):**
- North Elevation (0°)
- East Elevation (90°)
- South Elevation (180°)
- West Elevation (270°)

Cada elevación muestra:
- Perfil del vessel (shell, heads, support)
- Boquillas visibles desde esa dirección
- Nozzle marks (N1, N2, N3...)
- Elevaciones desde BTL
- Projection lengths

**Plan View (Top):**
- Vista desde arriba del vessel
- Todas las boquillas en shell mostradas con orientación angular
- Dimensiones angulares (0°, 45°, 90°, etc.)
- Reference North (flecha indicando 0°)

**Developed View (Opcional):**
- Shell "unwrapped" (desarrollado) en plano
- Muestra todas las boquillas en shell como si cilindro fuese cortado y aplanado
- Dimensiones horizontales (circunferencia desarrollada)
- Dimensiones verticales (elevaciones)

**Generación en Plant 3D:**

1. Crear plano: New Drawing → Equipment General Arrangement
2. Insertar vistas:
   - Front View (North elevation)
   - Right View (East elevation)
   - Back View (South elevation)
   - Left View (West elevation)
   - Top View (Plan)
3. Añadir dimensiones:
   - Elevaciones de nozzles
   - Angular dimensions en plan view
4. Crear tabla de nozzles:
   - Nozzle schedule simplificado en mismo plano
5. Título y notas:
   - "NOZZLE ORIENTATION - VESSEL V-101"
   - Reference North definition
   - Measurement references (BTL, Grade)

### 6.4 Material Take-Off (MTO)

**Bill of Materials de nozzles:**

Lista de todos los materiales requeridos para fabricar nozzles.

**Contenido típico:**

```
NOZZLE MATERIALS - VESSEL V-101
================================================================================
Item | Nozzle | Description                          | Qty | Unit | Material
-----|--------|--------------------------------------|-----|------|-------------
1    | N1     | Pipe Neck 8" Sch 40 × 300 mm long   | 1   | ea   | SA-106 Gr.B
2    | N1     | Flange 8" 150# RFWN                 | 1   | ea   | SA-105
3    | N1     | Reinforcing Pad 450 OD × 12 thk     | 1   | ea   | SA-516 Gr.70
4    | N1     | Gasket 8" 150# Spiral Wound         | 1   | ea   | SS304/Graph
5    | N1     | Bolts 3/4" × 3.5" long SA-193 B7    | 16  | ea   | SA-193 B7
6    | N1     | Nuts 3/4" Heavy Hex SA-194 2H       | 16  | ea   | SA-194 2H
-----|--------|--------------------------------------|-----|------|-------------
7    | N2     | Pipe Neck 6" Sch 40 × 350 mm long   | 1   | ea   | SA-106 Gr.B
8    | N2     | Flange 6" 300# RFWN                 | 1   | ea   | SA-105
9    | N2     | Reinforcing Pad 400 OD × 12 thk     | 1   | ea   | SA-516 Gr.70
10   | N2     | Gasket 6" 300# Spiral Wound         | 1   | ea   | SS304/Graph
11   | N2     | Bolts 3/4" × 4" long SA-193 B7      | 16  | ea   | SA-193 B7
12   | N2     | Nuts 3/4" Heavy Hex SA-194 2H       | 16  | ea   | SA-194 2H
-----|--------|--------------------------------------|-----|------|-------------
[... continuar para todos los nozzles...]
================================================================================

SUMMARY:
- Total Flanges: 8 ea (various sizes and ratings)
- Total Reinforcing Pads: 6 ea
- Total Bolts: 128 ea (various sizes)
- Total Weight of Nozzle Materials: 485 kg
```

**Generación de MTO en Plant 3D:**

1. **Reports** → **Nozzle Bill of Materials**
2. Seleccionar equipment: V-101
3. Configurar nivel de detalle:
   - Basic: solo nozzles y flanges
   - Detailed: incluir pads, gaskets, bolts
4. Agrupar por:
   - Nozzle (cada nozzle separado): para tracking de fabricación
   - Material (agrupar items similares): para procurement
5. Exportar a Excel
6. Añadir columnas personalizadas:
   - Vendor, Lead Time, Unit Cost
7. Usar para:
   - Purchasing de materiales
   - Scheduling de fabricación
   - Weight estimation

## 7. Integración con P&IDs

### 7.1 Tags de Equipos y Líneas

**Sistema de tagging:**

**Equipment Tags:**
Formato estándar ISA:
```
[Type]-[Area][Number][Suffix]

Ejemplos:
V-101: Vessel, Area 100, número 01
E-203B: Heat Exchanger, Area 200, número 03, spare B
P-304A/B: Pump, Area 300, número 04, units A y B
T-401: Tank, Area 400, número 01
```

**Line Numbers:**

Formato estándar:
```
[Size]-[Fluid Code]-[From Equipment]-[To Equipment]-[Spec][Insulation]

Ejemplos:
8"-V-301-A36-H1
├── 8": Nominal pipe size
├── V: Fluid code (Vapor)
├── 301: From equipment area/number
├── A36: Piping spec (material class)
└── H1: Insulation code (100mm insulation)

6"-P-201-202-C12
├── 6": NPS
├── P: Fluid code (Process liquid)
├── 201: From equipment (P-201 pump discharge)
├── 202: To equipment (V-202 vessel inlet)
└── C12: Spec (Carbon steel, 300#)
```

### 7.2 Asociación de Nozzles con P&ID

**Procedimiento de integración:**

**Paso 1: Obtener P&ID**

- P&ID del proceso muestra:
  - Equipment symbols (vessels, pumps, tanks, exchangers)
  - Equipment tags (V-101, E-203, etc.)
  - Líneas de proceso con line numbers
  - Nozzles de equipos (indicados como connection points)
  - Flow direction (flechas)

**Paso 2: Identificar Nozzles en P&ID**

En P&ID, vessel V-101 muestra:
- Símbolo de vessel vertical
- Tag: V-101
- Líneas conectadas:
  - Top: 8"-V-301-A36 (Vapor Outlet) → To E-301 condenser
  - Mid-upper: 6"-P-201-301-C12 (Feed Inlet) ← From P-201 pump
  - Mid-lower: 4"-L-301-401-C12 (Liquid Outlet) → To T-401 storage
  - Bottom: 2"-D-301-DRAIN-C06 (Drain) → To drain header
  - Instruments: PSV-301, LT-301, PT-301, TT-301

**Paso 3: Mapear Nozzles de P&ID a Modelo 3D**

Crear tabla de correlación:

| P&ID Line/Instrument | P&ID Connection | Model 3D Nozzle | Size | Service |
|---------------------|----------------|----------------|------|---------|
| 8"-V-301-A36        | Top outlet     | N1             | 8"   | Vapor Outlet |
| 6"-P-201-301-C12    | Feed inlet     | N2             | 6"   | Feed Inlet |
| 4"-L-301-401-C12    | Liquid outlet  | N3             | 4"   | Liquid Outlet |
| 2"-D-301-DRAIN      | Drain          | N4             | 2"   | Drain |
| LT-301 (Level TX)   | Level gauge    | N5             | 2"   | Level Gauge |
| PSV-301 (PSV)       | Safety valve   | N6             | 4"   | PSV |
| PT-301 (Pressure)   | Pressure tap   | N7             | 1"   | Pressure Gauge |
| TT-301 (Temperature)| Temp well      | N8             | 1"   | Temperature |

**Paso 4: Actualizar Propiedades en Plant 3D**

Para cada nozzle:
1. Seleccionar nozzle en modelo
2. Properties → P&ID Data:
   - **P&ID Drawing:** 1001-P-001 (drawing number)
   - **P&ID Tag:** N1 o connection identifier
   - **Line Number:** 8"-V-301-A36 (if connected to line)
   - **Instrument Tag:** PSV-301 (if connected to instrument)
3. Guardar

**Paso 5: Validación de Consistencia**

Verificar:
□ Todos los nozzles en P&ID tienen correspondencia en modelo 3D
□ Todos los nozzles en modelo 3D tienen correspondencia en P&ID
□ Sizes coinciden (8" en P&ID = 8" NPS en modelo)
□ Service descriptions coinciden
□ Flow directions son consistentes

**Discrepancias comunes:**

| Discrepancia | Causa | Resolución |
|-------------|-------|------------|
| Nozzle en P&ID no en modelo | P&ID actualizado después de modelo | Añadir nozzle a modelo |
| Nozzle en modelo no en P&ID | Nozzle añadido durante diseño detallado | Actualizar P&ID (ECN) |
| Size diferente | Error de transcripción o cambio de spec | Investigar, corregir documento incorrecto |
| Service diferente | Nomenclatura inconsistente | Estandarizar terminología |

### 7.3 Change Management

**Gestión de cambios entre P&ID y modelo 3D:**

**Engineering Change Notice (ECN):**

Cuando se requiere cambio en nozzles:

**Proceso:**
1. **Identify Change:**
   - Ejemplo: Process engineer requiere añadir nozzle para sample connection
   - Nuevo nozzle: 1" threaded sample en elevation +3000 mm

2. **Issue ECN:**
   - Document número: ECN-2024-156
   - Description: "Add 1-inch sample nozzle to V-101"
   - Justification: "Required for quality control sampling per process requirements"
   - Affected Documents:
     - P&ID 1001-P-001 (add sample line)
     - Nozzle Schedule V-101 (add nozzle N9)
     - Vessel GA Drawing V-101-GA-001 (add nozzle to orientation drawing)

3. **Update P&ID:**
   - P&ID engineer añade sample line y nozzle
   - Revision: from Rev B to Rev C
   - Triangle note: "REV C: Added sample nozzle per ECN-2024-156"

4. **Update 3D Model:**
   - Equipment engineer añade nozzle N9 en Plant 3D model
   - Properties: reference ECN-2024-156
   - Verificar interferencias

5. **Update Documentation:**
   - Regenerar nozzle schedule (now includes N9)
   - Actualizar orientation drawing
   - Actualizar MTO

6. **Review and Approval:**
   - Design review meeting
   - Approval signatures: Process Lead, Equipment Lead, Project Manager
   - Release nueva revisión de documentos

**Tracking de revisiones:**

Mantener tabla de revisiones en nozzle schedule:

```
REVISION HISTORY - VESSEL V-101 NOZZLE SCHEDULE
=======================================================================
Rev | Date       | ECN No.      | Description               | By
----|------------|--------------|---------------------------|----------
A   | 2024-01-15 | -            | Initial issue             | JDoe
B   | 2024-03-20 | ECN-2024-089 | Changed N2 from 4" to 6"  | JDoe
C   | 2024-05-10 | ECN-2024-156 | Added N9 sample nozzle    | JDoe
=======================================================================
```

### 7.4 Data Exchange con Software de P&ID

**Integración bidireccional:**

Modern workflow usa integración entre Plant 3D y software de P&ID (AutoCAD P&ID, SmartPlant P&ID).

**Export from Plant 3D to P&ID:**

Procedimiento:
1. Plant 3D → Data Manager → **Export to P&ID**
2. Seleccionar equipment: V-101
3. Export incluye:
   - Equipment tag
   - Equipment type
   - Nozzles: marks, sizes, services, line numbers
4. Formato: XML o database link
5. Import en P&ID software:
   - Equipment symbol actualizado con nozzles reales
   - Line numbers asignados automáticamente

**Import from P&ID to Plant 3D:**

Procedimiento:
1. P&ID software → Export equipment data
2. Formato: XML, Excel, database
3. Plant 3D → Data Manager → **Import from P&ID**
4. Map columns:
   - P&ID "Equipment Tag" → Plant 3D "Tag"
   - P&ID "Line Number" → Plant 3D "Nozzle Line Number"
5. Import: propiedades actualizadas automáticamente

**Benefits de integración:**

- **Single Source of Truth:** database compartida, un solo lugar para cada dato
- **Automatic Sync:** cambios en un sistema reflejados en otro
- **Error Reduction:** no transcripción manual (elimina typos)
- **Version Control:** cambios trackeados automáticamente

## Evaluación de Conocimientos

Responda las siguientes preguntas:

**Pregunta 1:**
¿Cuál es el propósito principal del área de refuerzo (reinforcement) alrededor de una boquilla en un recipiente a presión?

A) Proporcionar superficie adicional para soldadura de la boquilla
B) Compensar el material removido del casco y mantener resistencia estructural
C) Mejorar la apariencia estética del recipiente
D) Facilitar la instalación de aislamiento alrededor de la boquilla

**Pregunta 2:**
En un nozzle schedule, ¿qué significa "projection length"?

A) La longitud interna de la boquilla dentro del recipiente
B) La distancia desde la superficie exterior del casco hasta la face de la brida
C) El diámetro exterior de la boquilla proyectada
D) La elevación de la boquilla desde el nivel del piso

**Pregunta 3:**
Según el sistema de coordenadas angular estándar para orientación de boquillas, ¿qué dirección representa 90 grados?

A) Norte (North)
B) Sur (South)
C) Este (East)
D) Oeste (West)

**Pregunta 4:**
¿Cuál es el tamaño mínimo típico para un manhole que permite entrada de personal según estándares OSHA?

A) 12 pulgadas (300 mm)
B) 16 pulgadas (400 mm)
C) 20 pulgadas (500 mm)
D) 24 pulgadas (600 mm)

**Pregunta 5:**
Al seleccionar el pressure rating de una brida de boquilla (Class 150#, 300#, etc.), ¿qué dos factores principales deben considerarse?

A) El color de la brida y el fabricante
B) La presión de diseño del sistema y la temperatura de operación
C) El diámetro de la tubería y la longitud del proyecto
D) El tipo de gasket y el número de pernos

## Ejercicio Práctico

**Título:** Configuración Completa de Nozzles para Vessel V-101

**Tiempo estimado:** 40 minutos

**Objetivo:**
Completar el recipiente V-101 creado en Lección 19 añadiendo su programa completo de 8 boquillas con especificaciones precisas, orientaciones correctas, y generando documentación completa de nozzles lista para fabricación.

**Prerequisito:**
Archivo completado de Lección 19: `Modulo4_Leccion19_V101_[SuNombre].dwg` con vessel V-101 modelado (shell, heads, skirt).

**Especificaciones de nozzles** (del data sheet de Lección 19):

```
NOZZLE SCHEDULE - VESSEL V-101
=============================================================================
Mark | Size | Rating | Type | Service          | Orient | Elevation  | Proj
-----|------|--------|------|------------------|--------|-----------|------
N1   | 8"   | 150#   | RFWN | Vapor Outlet     | 0°     | TOS       | 250mm
N2   | 6"   | 300#   | RFWN | Feed Inlet       | 90°    | +4500mm   | 300mm
N3   | 4"   | 150#   | RFWN | Liquid Outlet    | 180°   | +500mm    | 250mm
N4   | 2"   | 150#   | RFWN | Drain            | 270°   | BOS       | 200mm
N5   | 2"   | 150#   | RFWN | Level Gauge      | 0°     | +2000mm   | 250mm
N6   | 4"   | 150#   | RFWN | PSV              | 180°   | TOS       | 300mm
N7   | 1"   | 150#   | NPT  | Pressure Gauge   | 90°    | +5000mm   | 150mm
N8   | 1"   | 150#   | NPT  | Temperature      | 270°   | +4000mm   | 150mm
=============================================================================
```

**Instrucciones:**

**Parte 1: Añadir Nozzle N1 (Vapor Outlet) - 5 minutos**

1. Abrir archivo de Lección 19 con vessel V-101
2. Seleccionar vessel V-101
3. Click derecho → **Add Nozzle**
4. Configurar Nozzle N1:

**Identification:**
- Nozzle Mark: `N1`
- Service: `Vapor Outlet`
- Description: `8-inch outlet for overhead vapor to condenser E-301`
- Line Number: `8"-V-301-A36` (connected line)

**Size and Rating:**
- Nominal Size: `8 inches` (NPS 8)
- Pipe Schedule: `Schedule 40`
- Pressure Rating: `150#` (Class 150)
- Connection Type: `Flanged`
- Flange Type: `Weld Neck (WN)`
- Flange Facing: `Raised Face (RF)`

**Location:**
- Location: `Shell` (top of shell)
- Orientation Method: `By Angle`
- Angle: `0°` (North)
- Elevation: `TOS` (Top of Shell)
  - Numeric: `+6550 mm` (top tangent line of shell)

**Projection:**
- Projection Length: `250 mm`
- Measured from: `Outside surface of shell`
- Measured to: `Face of flange`

**Materials:**
- Nozzle Material: `SA-105` (carbon steel forging)
- Flange Material: `SA-105`
- Gasket Type: `Spiral Wound 304SS/Graphite`
- Bolt Material: `SA-193 B7`

5. Click **OK**: nozzle se añade al vessel
6. Verificar en vista 3D: nozzle en tope, orientado hacia North (0°)

**Parte 2: Añadir Nozzle N2 (Feed Inlet) - 5 minutos**

7. Añadir segundo nozzle: V-101 → **Add Nozzle**

**Configuration N2:**
- Mark: `N2`
- Service: `Feed Inlet`
- Description: `6-inch feed from pump P-201`
- Line Number: `6"-P-201-301-C12`
- Size: `6 inches NPS`
- Schedule: `Schedule 40`
- Rating: `300#` (Class 300 - higher pressure)
- Type: `Flanged RFWN`
- Location: `Shell`
- Orientation: `90°` (East)
- Elevation: `+4500 mm` from BTL
- Projection: `300 mm`
- Materials: Same as N1

8. Confirmar y verificar ubicación

**Parte 3: Añadir Nozzles N3 y N4 (Outlets y Drain) - 8 minutos**

9. Añadir Nozzle N3 (Liquid Outlet):
- Mark: `N3`
- Service: `Liquid Outlet`
- Line: `4"-L-301-401-C12`
- Size: `4 inches`, Rating: `150#`, Type: `RFWN`
- Orientation: `180°` (South)
- Elevation: `+500 mm` from BTL
- Projection: `250 mm`

10. Añadir Nozzle N4 (Drain):
- Mark: `N4`
- Service: `Drain`
- Line: `2"-D-301-DRAIN-C06`
- Size: `2 inches`, Rating: `150#`, Type: `RFWN`
- Orientation: `270°` (West)
- Elevation: `BOS` (Bottom of Shell, en bottom head)
- Projection: `200 mm`
- Nota especial: ubicar en punto más bajo del bottom head

**Parte 4: Añadir Nozzles de Instrumentación N5-N8 - 10 minutos**

11. Nozzle N5 (Level Gauge):
- Mark: `N5`
- Service: `Level Gauge Connection`
- Instrument: `LT-301`
- Size: `2 inches`, Rating: `150#`, Type: `RFWN`
- Orientation: `0°` (North - same as N1 for instrument rack)
- Elevation: `+2000 mm` from BTL
- Projection: `250 mm`

12. Nozzle N6 (PSV - Pressure Safety Valve):
- Mark: `N6`
- Service: `PSV Connection`
- Instrument: `PSV-301`
- Size: `4 inches`, Rating: `150#`, Type: `RFWN`
- Orientation: `180°` (South - opposite side from N1)
- Elevation: `TOS` (+6550 mm)
- Projection: `300 mm` (larger for PSV + tail pipe)

13. Nozzle N7 (Pressure Gauge):
- Mark: `N7`
- Service: `Pressure Gauge`
- Instrument: `PT-301`
- Size: `1 inch`, Rating: `150#`
- Type: `NPT` (Threaded - cambio de flanged)
- Orientation: `90°` (East - with N2)
- Elevation: `+5000 mm` from BTL
- Projection: `150 mm`

14. Nozzle N8 (Temperature):
- Mark: `N8`
- Service: `Temperature Well`
- Instrument: `TT-301`
- Size: `1 inch`, Rating: `150#`, Type: `NPT`
- Orientation: `270°` (West)
- Elevation: `+4000 mm` from BTL
- Projection: `150 mm`

**Parte 5: Validación de Nozzles - 7 minutos**

15. Verificación visual 3D:
- Vista isométrica: observar todos los 8 nozzles
- Verificar orientaciones:
  - N1, N5 en North (0°)
  - N2, N7 en East (90°)
  - N3, N6 en South (180°)
  - N4, N8 en West (270°)
- Verificar elevaciones correctas

16. Verificación de interferencias:
- Comando: `PLANTINTERFERENCECHECK`
- Seleccionar: All nozzles + vessel shell + skirt
- Run check
- Verificar: no clashes reported
- Si hay interferencias: ajustar orientación o elevación

17. Verificación de propiedades:
- Usar Nozzle Manager: seleccionar V-101 → Properties → Nozzles → [...]
- Tabla muestra todos los 8 nozzles
- Verificar cada fila:
  - Mark, Size, Rating, Service completos
  - Orientation, Elevation correctos
  - Projection especificado

**Parte 6: Generar Nozzle Schedule Report - 5 minutos**

18. Crear reporte automático:
- Plant 3D → Reports → Equipment Nozzle Schedule
- Select Equipment: V-101
- Configure columns:
  - Mark, Size, Rating, Type, Service, Orientation, Elevation, Projection, Line Number
- Sorting: by Mark (N1, N2, N3...)
- Format: Excel
- Generate

19. Abrir Excel generado:
- Verificar tabla completa con 8 filas (nozzles N1-N8)
- Añadir header personalizado:
  - Equipment: V-101 - Propane Flash Separator
  - Drawing: V-101-GA-001
  - Date, Prepared by
- Añadir Notes section:
  - "All flanged nozzles RFWN per ASME B16.5"
  - "Threaded nozzles NPT per ASME B1.20.1"
  - "TOS = Top of Shell, BOS = Bottom of Shell"
  - "Elevations from Bottom Tangent Line"
- Save as: `V-101_Nozzle_Schedule.xlsx`

**Parte 7: Crear Nozzle Orientation Drawing - 10 minutos (opcional pero recomendado)**

20. Crear plano de orientación:
- New Layout: "V-101 Nozzle Orientation"
- Insertar vistas:

**North Elevation (Front View):**
- Viewport: Front view de vessel
- Mostrar: N1 (TOS), N5 (+2000), N4 (BOS, si visible)
- Dimensionar elevaciones desde BTL

**East Elevation (Right View):**
- Viewport: Right view
- Mostrar: N2 (+4500), N7 (+5000)
- Dimensionar elevaciones

**South Elevation (Back View):**
- Mostrar: N3 (+500), N6 (TOS)

**West Elevation (Left View):**
- Mostrar: N8 (+4000), N4 (BOS)

**Plan View (Top):**
- Viewport: Top view de vessel
- Mostrar todos los nozzles con orientación angular
- Dibujar flecha de North (0°)
- Dimensionar ángulos: 0°, 90°, 180°, 270°

21. Añadir tabla de nozzles simplificada en plano
22. Título: "NOZZLE ORIENTATION - VESSEL V-101"
23. Plot to PDF: `V-101_Nozzle_Orientation.pdf`

**Criterios de Evaluación:**

- **Completitud (30%)**: 8 nozzles añadidos con propiedades completas
- **Precisión de ubicación (25%)**: Orientaciones y elevaciones según especificación
- **Configuración correcta (20%)**: Sizes, ratings, types apropiados
- **Validación (15%)**: No interferencias, propiedades verificadas
- **Documentación (10%)**: Nozzle schedule y orientation drawing generados

**Entregables:**

1. Archivo DWG: `Modulo4_Leccion20_V101_Complete_[SuNombre].dwg`
2. Nozzle Schedule Excel: `V-101_Nozzle_Schedule.xlsx`
3. Nozzle Orientation Drawing PDF: `V-101_Nozzle_Orientation.pdf`
4. Screenshots:
   - Vista isométrica mostrando todos los nozzles
   - Nozzle Manager table con 8 nozzles listados
   - Plan view mostrando orientación angular

## Resumen de la Lección

En esta lección final del Módulo 4, ha completado el dominio de diseño de equipos en AutoCAD Plant 3D:

**Conceptos clave aprendidos:**

1. **Fundamentos de Nozzles**: Comprensión de función, tipos de conexiones, requisitos de refuerzo ASME, y cargas mecánicas en boquillas.

2. **Nozzle Schedules**: Dominio de documentación estándar de boquillas con todas las especificaciones requeridas para fabricación.

3. **Orientación y Ubicación**: Metodologías precisas para especificar orientación angular, elevación radial, y projection length de nozzles.

4. **Tipos Especiales**: Configuración de manholes, handholes, sight glasses, y conexiones de instrumentación según aplicaciones específicas.

5. **Validación**: Procedimientos para verificar interferencias, orientaciones, propiedades completas, y cargas admisibles en nozzles.

6. **Documentación para Fabricación**: Generación de nozzle schedules, detail drawings, orientation drawings, y material take-offs.

7. **Integración P&ID**: Asociación de nozzles del modelo 3D con P&IDs, change management, y data exchange bidireccional.

**Habilidades prácticas:**

- Añadir nozzles a equipos con propiedades completas (tamaño, rating, ubicación, proyección)
- Especificar orientación angular precisa usando sistema de coordenadas estándar
- Configurar projection lengths considerando aislamiento y accesibilidad
- Ubicar aberturas especiales: manholes, sight glasses, instrument connections
- Validar interferencias nozzle-to-nozzle y con otros componentes
- Generar nozzle schedules automáticamente desde modelo 3D
- Crear drawings de orientación con elevaciones y plan views
- Asociar nozzles con line numbers de P&IDs para integración completa

**Integración Módulo 4 completo:**

Con esta lección, ha completado el Módulo 4 - Acero Estructural y Equipos:
- **Lección 16**: Perfiles estructurales de acero (vigas, columnas)
- **Lección 17**: Plataformas y escaleras de acceso
- **Lección 18**: Barandas y sistemas de seguridad
- **Lección 19**: Equipos personalizados (vessels, tanks, exchangers)
- **Lección 20**: Nozzles y conexiones de equipos

Estos conocimientos integrados le permiten diseñar instalaciones industriales completas:
- Estructuras de soporte de acero
- Plataformas de acceso a equipos con barandas OSHA-compliant
- Equipos de proceso modelados según estándares ASME/API
- Nozzles completamente especificados para conexión de tuberías

**Preparación para Módulo 5:**

El siguiente módulo cubrirá documentación, isométricos y gestión de proyectos:
- Generación de planos de construcción
- Isométricos de tuberías para fabricación
- Listas de materiales y reportes
- Control de revisiones y change management
- Entrega final de documentación de proyecto

Con equipos completamente modelados con nozzles especificados, estará listo para conectar sistemas de tuberías y generar documentación completa de proyecto.

## Recursos Adicionales

**Estándares de nozzles:**
- ASME BPVC Section VIII Division 1: UG-37 to UG-46 (Reinforcement of Openings)
- ASME B16.5: Pipe Flanges and Flanged Fittings
- ASME B16.47: Large Diameter Steel Flanges
- ASME B1.20.1: Pipe Threads, General Purpose (NPT)

**Metodologías de análisis:**
- WRC Bulletin 107: Local Stresses in Spherical and Cylindrical Shells due to External Loadings
- WRC Bulletin 537: Updated version of WRC 107
- ASME Section VIII Div 2: Design-by-Analysis (FEA methods)

**Software complementario:**
- PVElite (Intergraph): cálculo de refuerzo de nozzles
- COMPRESS (Codeware): análisis de recipientes y nozzles
- FEPipe (StructurePoint): nozzle flexibility analysis
- CAESAR II (Hexagon): piping stress analysis con nozzle loads

**Referencias técnicas:**
- "Pressure Vessel Design Manual" - Dennis R. Moss, Chapter 5: Design of Vessel Supports
- "Process Equipment Design" - Lloyd E. Brownell, Chapter 8: Pressure Vessel Openings
- API 579-1/ASME FFS-1: Fitness-For-Service (evaluation of nozzles in service)

Felicitaciones por completar el Módulo 4. Ahora posee conocimientos completos de diseño estructural y de equipos en AutoCAD Plant 3D 2026.
