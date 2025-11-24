# Lección 17: Plataformas y Escaleras

## Información General

**Duración estimada:** 60 minutos
**Nivel:** Intermedio
**Módulo:** 4 - Acero Estructural y Equipos
**Prerequisitos:** Lección 16

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

1. Crear plataformas de acceso rectangulares y de geometría personalizada
2. Configurar y aplicar diferentes tipos y patrones de rejillas (grating)
3. Diseñar escaleras industriales (rectas, en L, espirales, marineras)
4. Crear plataformas de acceso a equipos cumpliendo normativa de seguridad
5. Aplicar estándares OSHA 1910 y NOM-001-STPS mexicana
6. Modelar soportes de plataformas y sistemas de fijación
7. Diseñar sistemas completos de acceso seguro para plantas industriales

## Introducción

Las plataformas y escaleras son elementos críticos en cualquier planta industrial. No son simplemente accesorios decorativos: son componentes esenciales de seguridad que permiten acceso a equipos para operación, mantenimiento, e inspección. Un diseño inadecuado de estos sistemas puede resultar en accidentes laborales graves, incumplimiento normativo, e inclusive paros de planta por revisiones de seguridad.

En México, las plantas industriales deben cumplir con la NOM-001-STPS-2008 (Edificios, locales e instalaciones), que establece requisitos específicos para plataformas, escaleras y accesos. Adicionalmente, muchas empresas multinacionales operando en México requieren cumplimiento con OSHA 1910.23-29 (estándares estadounidenses de seguridad en construcción). AutoCAD Plant 3D 2026 proporciona herramientas especializadas que facilitan el diseño de estos elementos conformes con ambas normativas.

Las plataformas elevadas permiten acceso a válvulas, instrumentos, bocas de inspección (manholes), y puntos de toma de muestras ubicados en equipos como recipientes a presión, tanques, intercambiadores de calor y reactores. El diseñador debe considerar no solo la ubicación correcta de estas plataformas, sino también: (1) dimensiones mínimas según normativa (ancho de paso, altura libre), (2) capacidad de carga para personal y herramientas, (3) tipo de superficie antiderrapante apropiado, (4) espaciamiento correcto de soportes, y (5) integración con sistemas de barandas (que se cubrirán en Lección 18).

Las escaleras industriales presentan diversos tipos según aplicación: escaleras rectas para alturas moderadas, escaleras en L o U con descansos para alturas mayores, escaleras tipo "ship ladder" (marinera) para espacios restringidos, y escaleras espirales para aplicaciones especiales. Cada tipo tiene especificaciones precisas de ángulo de inclinación, ancho de peldaño, contrahuella, nariz del peldaño (nosing), y altura de descansos que deben respetarse.

En esta lección exhaustiva, exploraremos todas las capacidades de Plant 3D 2026 para modelado de plataformas y escaleras. Aprenderá desde la creación básica de plataformas rectangulares hasta el diseño de sistemas complejos de acceso multinivel. Dominar estas herramientas es fundamental para cualquier diseñador de plantas industriales que busque crear instalaciones seguras, funcionales y conformes con todas las regulaciones aplicables en México.

## 1. Creación de Plataformas

### 1.1 Tipos de Plataformas Industriales

**Clasificación por función:**

**Plataformas de Operación:**
- Acceso a válvulas de operación frecuente
- Ubicadas a nivel de instrumentos de campo
- Carga viva: 350-500 kg/m² (personal + herramientas ligeras)
- Ancho mínimo: 760 mm (OSHA), 600 mm (NOM-001-STPS)

**Plataformas de Mantenimiento:**
- Acceso a equipos rotativos (bombas, compresores)
- Espacio para herramientas y partes de repuesto
- Carga viva: 500-750 kg/m²
- Área mínima de trabajo: 1200 mm x 1200 mm

**Plataformas de Inspección:**
- Acceso a manholes, bocas de limpieza
- Ubicadas en recipientes a presión y tanques
- Espacio para inspectores y equipo de prueba no destructiva
- Carga viva: 350 kg/m²

**Plataformas de Seguridad/Escape:**
- Rutas de evacuación de emergencia
- Conectan escaleras en sistemas multinivel
- Carga viva: 500 kg/m² (tráfico de personal en emergencia)
- Ancho mínimo: 910 mm (OSHA 1910.36)

**Clasificación por soporte:**

**Plataformas Auto-Soportadas:**
- Estructura independiente (columnas propias)
- No dependen de equipos o estructura principal
- Usadas cuando estructura existente no puede soportar carga adicional

**Plataformas Colgadas:**
- Suspendidas de vigas o estructura superior
- Usadas bajo pipe racks o techos de edificios
- Requieren vigas de mayor capacidad

**Plataformas Empotradas:**
- Apoyadas en estructura existente o equipo
- Más económicas, menos independientes
- Requieren verificación de capacidad de soporte

### 1.2 Creación de Plataformas Rectangulares

Las plataformas rectangulares son el tipo más común y sencillo de modelar en Plant 3D.

**Comando:**

1. Cinta **Plant 3D** → Panel **Structure** → **Platform**
2. O comando: `PLANTPLATFORM`

**Procedimiento básico:**

1. Ejecutar comando `PLANTPLATFORM`
2. **First Corner:** Especificar primera esquina de plataforma
3. **Opposite Corner:** Especificar esquina opuesta (define dimensiones)
4. **Elevation:** Especificar elevación de superficie de piso
5. **Platform Parameters:** Configurar detalles

**Parámetros de configuración:**

```
Platform Properties:
├── Dimensions
│   ├── Length: Largo de plataforma (dirección principal)
│   ├── Width: Ancho de plataforma
│   └── Elevation: Elevación de superficie superior
├── Grating (Rejilla)
│   ├── Type: Tipo de rejilla (ver sección 1.3)
│   ├── Orientation: Dirección de barras de carga
│   └── Material: Acero galvanizado, FRP, aluminio
├── Support Structure
│   ├── Perimeter Beams: Vigas perimetrales
│   ├── Support Beams: Vigas de soporte internas
│   └── Columns: Columnas de soporte (si auto-soportada)
└── Attachments
    ├── Handrails: Barandas (ver Lección 18)
    ├── Toe Plates: Rodapiés
    └── Stairs: Escaleras de acceso
```

**Ejemplo 1: Plataforma de acceso a válvulas en pipe rack**

```
Aplicación: Acceso a válvulas de bloqueo de líneas principales
Ubicación: Lateral de pipe rack
Dimensiones: 2000 mm largo x 900 mm ancho
Elevación: +4500 mm (nivel de válvulas)
Grating: Tipo rejilla electrosoldada 30x3 mm
Soporte: Empotrada en vigas del pipe rack (mensulas)
Carga de diseño: 350 kg/m²
Acceso: Escalera recta desde nivel de piso (0.00)
```

**Procedimiento en Plant 3D:**

1. Comando: `PLANTPLATFORM`
2. **First Corner:** Seleccionar punto de inicio (puede usar OSNAP a viga de rack)
3. **Opposite Corner:** @2000,900 (coordenadas relativas para dimensiones exactas)
4. **Elevation:** 4500 mm
5. En **Platform Properties** paleta:
   - **Grating Type:** Seleccionar "Welded_30x3"
   - **Grating Orientation:** Paralelo al lado largo (barras de carga en dirección de 2000 mm)
   - **Perimeter Beam:** C6x8.2 (canal estándar para perímeto)
   - **Support Beams:** C6x8.2, espaciadas cada 1000 mm
   - **Support Method:** Cantilever (voladizo desde vigas de rack)

6. Verificar: La plataforma se crea con estructura de soporte incluida

![Plataforma rectangular básica](../imagenes/leccion-17-plataforma-rectangular.png)

**Ejemplo 2: Plataforma de mantenimiento de bomba**

```
Aplicación: Área de trabajo para mantenimiento de bomba centrífuga
Ubicación: Alrededor de bomba horizontal
Dimensiones: 3000 mm largo x 2400 mm ancho
Elevación: +1200 mm (sobre nivel de piso, altura cómoda)
Grating: Rejilla dentada antiderrapante (serrated grating)
Soporte: Auto-soportada (4 columnas propias)
Carga de diseño: 500 kg/m² (herramientas pesadas)
Acceso: Escalera recta lateral
```

**Procedimiento:**

1. Comando: `PLANTPLATFORM`
2. **Type:** Rectangular
3. **Dimensions:** 3000 x 2400 mm
4. **Elevation:** 1200 mm
5. En propiedades:
   - **Grating:** Serrated_32x5 (mayor capacidad de carga)
   - **Perimeter Beam:** C8x11.5
   - **Internal Beams:** C8x11.5, 3 vigas espaciadas cada 800 mm
   - **Support:** 4 columnas HSS 3x3x1/4
   - **Column Base:** Placas base 200x200x12 mm con pernos de anclaje

### 1.3 Tipos y Patrones de Rejillas (Grating)

La selección correcta de rejilla es crítica para seguridad y funcionalidad.

**Tipos principales de grating:**

**Rejilla Electrosoldada (Welded Grating):**

Construcción:
- Barras de carga (load bars): Barras principales que soportan carga
- Barras transversales (cross bars): Barras perpendiculares soldadas
- Soldadura: Resistencia por fusión eléctrica en cada intersección

Especificaciones típicas:
```
Designación: 30x3 (más común)
- Barras de carga: 30 mm altura x 3 mm espesor
- Espaciamiento: 30 mm centro a centro (c/c)
- Barras transversales: 30 mm espaciamiento

Designación: 40x3 (mayor capacidad)
- Barras de carga: 40 mm altura x 3 mm espesor
- Espaciamiento: 30 mm c/c
- Mayor resistencia para luces largas

Designación: 25x2 (ligera)
- Barras de carga: 25 mm altura x 2 mm espesor
- Espaciamiento: 30 mm c/c
- Para plataformas ligeras, cargas bajas
```

Ventajas:
- Más económica
- Amplia disponibilidad en México
- Permite drenaje y ventilación (aberturas)
- Ligera (reducción de peso estructural)

Desventajas:
- Menor capacidad antiderrapante (requiere tratamiento adicional)
- Acumulación de suciedad en aberturas

**Rejilla Dentada (Serrated Grating):**

Construcción:
- Barras de carga con dientes en superficie superior
- Dientes cortados o prensados en barras

Especificaciones:
```
Designación: 32x5 serrated
- Barras de carga: 32 mm altura x 5 mm espesor, dentadas
- Espaciamiento: 30 o 40 mm c/c
- Altura de dientes: 3-4 mm

Designación: 40x5 serrated (heavy duty)
- Para áreas de mucho tráfico o cargas pesadas
```

Ventajas:
- Excelente propiedad antiderrapante
- Seguridad en áreas húmedas o con aceite
- Cumple OSHA 1910.22 (walking-working surfaces)

Desventaas:
- Mayor costo (20-30% más que welded lisa)
- Mayor peso

**Rejilla Prensada (Press-Locked Grating):**

Construcción:
- Barras transversales prensadas mecánicamente en muescas de barras de carga
- No requiere soldadura

Ventajas:
- Muy ligera (menor peso que welded)
- Buena resistencia a vibración

Desventajas:
- Menor resistencia que welded para mismas dimensiones
- Menos común en México (disponibilidad limitada)

**Rejilla de FRP (Fiber-Reinforced Plastic):**

Material:
- Resina de poliéster reforzada con fibra de vidrio
- Proceso de pultrusión (perfiles continuos)

Especificaciones:
```
Designación típica: 38x38x38 (1.5"x1.5"x1.5")
- Altura: 38 mm (1.5 inch)
- Aberturas cuadradas: 38 x 38 mm
```

Ventajas:
- No corrosiva (ideal para ambientes químicos agresivos)
- No conductiva (seguridad eléctrica)
- Ligera (peso específico ~1800 kg/m³ vs 7850 kg/m³ acero)
- No requiere pintura

Desventajas:
- Costo alto (2-3x más que acero galvanizado)
- Menor módulo elástico (mayor deflexión)
- Degradación UV (requiere resinas estabilizadas)

Aplicaciones:
- Plantas químicas (ácidos, bases)
- Áreas con riesgo eléctrico
- Ambientes marinos

**Rejilla de Aluminio:**

Material:
- Aleación 6061-T6 o 6063-T5

Ventajas:
- Ligera (densidad 2700 kg/m³)
- Resistente a corrosión
- No requiere galvanizado ni pintura

Desventajas:
- Costo alto
- Menor resistencia que acero (requiere secciones más grandes)

Aplicaciones:
- Áreas corrosivas no compatibles con FRP
- Plataformas temporales o móviles

**Configurar grating en Plant 3D:**

1. Seleccionar plataforma ya creada
2. **Properties** → **Grating**
3. **Grating Type:** Seleccionar de biblioteca:
   ```
   Biblioteca estándar incluye:
   - Welded_30x3_30mm
   - Welded_40x3_30mm
   - Serrated_32x5_30mm
   - FRP_38x38x38
   - Aluminum_30x3_30mm
   ```

4. **Grating Orientation:** Especificar dirección de barras de carga
   - Regla: Barras de carga perpendiculares a vigas de soporte
   - Span direction: Dirección de la luz (entre soportes)

5. **Surface Finish:**
   - Galvanized (Hot-Dip): Estándar, ASTM A123
   - Painted: Pintura (especificar sistema)
   - Mill Finish: Sin tratamiento (solo interior no corrosivo)

![Tipos de rejillas (grating)](../imagenes/leccion-17-tipos-grating.png)

**Cálculo de capacidad de grating:**

Fabricantes como INFRA (México), Metalex, o Fisher & Ludlow proporcionan tablas de carga:

Ejemplo - Rejilla electrosoldada 30x3, acero A36 galvanizado:

```
Luz libre (span): 1000 mm
Carga uniformemente distribuida: 488 kg/m²
Deflexión: L/240 (límite AISC)

Luz libre: 1200 mm
Carga uniformemente distribuida: 339 kg/m²
Deflexión: L/240

Luz libre: 1500 mm
Carga uniformemente distribuida: 217 kg/m²
Deflexión: L/240
```

**Regla práctica:** Espaciar vigas de soporte de plataforma cada 1000-1200 mm para grating estándar 30x3 con cargas de operación normales (350 kg/m²).

### 1.4 Plataformas de Geometría Personalizada

Para áreas con equipos cilíndricos o geometría irregular:

**Plataformas Circulares:**

Aplicación: Acceso perimetral alrededor de tanques verticales o recipientes.

**Comando:**

1. `PLANTPLATFORM`
2. **Type:** Circular
3. **Center Point:** Centro del tanque
4. **Radius:** Radio de plataforma (típico: radio de tanque + 900-1200 mm)
5. **Elevation:** Elevación según necesidad de acceso

**Ejemplo - Plataforma alrededor de tanque vertical:**

```
Tanque: Diámetro 3000 mm
Radio de plataforma interior: 1500 mm (pared de tanque)
Radio de plataforma exterior: 2600 mm (ancho de plataforma: 1100 mm)
Elevación: +6000 mm (nivel superior de tanque)
Grating: Welded 30x3 con cortes radiales
Soporte: Ménsulas desde cuerpo del tanque (cada 1000 mm perimetral)
```

**Plataformas Poligonales:**

Para formas octagonales, hexagonales, etc.

**Comando:**

1. `PLANTPLATFORM`
2. **Type:** Polygon
3. **Number of Sides:** Cantidad de lados (6, 8, 12, etc.)
4. **Inscribed/Circumscribed:** Definir si polígono inscrito o circunscrito a círculo
5. **Radius:** Radio del círculo de referencia

**Plataformas de Forma Libre (Custom Shape):**

Para geometrías completamente irregulares:

**Método 1: Por polyline existente**

1. Dibujar polilínea (polyline) en AutoCAD con forma deseada
2. Comando: `PLANTPLATFORM`
3. **Type:** From Polyline
4. **Select Polyline:** Seleccionar polilínea dibujada
5. **Elevation:** Especificar elevación
6. Plant 3D crea plataforma siguiendo exactamente la forma

**Método 2: Por puntos múltiples**

1. Comando: `PLANTPLATFORM`
2. **Type:** Custom
3. **Specify Points:** Indicar cada esquina de la plataforma
4. **Close:** Cerrar forma
5. **Elevation:** Especificar elevación

**Ejemplo - Plataforma en L para esquina de edificio:**

```
Forma: L invertida
Brazo 1: 3000 mm largo x 1200 mm ancho
Brazo 2: 2400 mm largo x 1200 mm ancho
Encuentro: Esquina a 90°
Elevación: +3000 mm
Aplicación: Acceso a válvulas en dos paredes perpendiculares
```

Procedimiento:
1. Dibujar polyline en forma de L con dimensiones exactas
2. `PLANTPLATFORM` → From Polyline
3. Seleccionar polyline
4. Especificar elevación: 3000 mm
5. Configurar grating y estructura de soporte

**Edición de plataformas personalizadas:**

1. Seleccionar plataforma
2. **Properties** → **Shape**
3. **Edit Boundary:** Modificar forma
4. Usar grips de AutoCAD para ajustar vértices
5. **Add Vertex:** Agregar esquinas adicionales
6. **Remove Vertex:** Eliminar esquinas

## 2. Configuración de Escaleras Industriales

### 2.1 Tipos de Escaleras según Normativa

**Clasificación OSHA 1910.25:**

**Escaleras Estándar (Standard Stairs):**
- Ángulo: 30° a 50° con horizontal (típico: 35-40°)
- Ancho mínimo: 560 mm (22 inches)
- Contrahuella (riser): 152-241 mm (6-9.5 inches)
- Huella (tread): Mínimo 279 mm (11 inches)
- Nariz (nosing): NO requerida si huella ≥ 279 mm
- Uso: Acceso principal frecuente

**Ship Ladders (Escaleras Marineras):**
- Ángulo: 50° a 70° con horizontal (típico: 60°)
- Ancho mínimo: 508 mm (20 inches)
- Contrahuella: 152-241 mm
- Huella: 102-216 mm (menor que standard)
- Nariz: Mínimo 19 mm (0.75 inch)
- Uso: Acceso infrecuente o espacios restringidos

**Alternating Tread Stairs:**
- Ángulo: 50° a 70°
- Huellas alternadas (left/right)
- Ancho de huella: Mínimo 216 mm (8.5 inch) por lado
- Uso: Espacios muy restringidos, acceso infrecuente

**Escaleras Espirales (Spiral Stairs):**
- Ángulo de hélice: Variable
- Diámetro mínimo: 1524 mm (60 inches)
- Huella en línea de marcha (305 mm desde centro): Mínimo 191 mm (7.5 inch)
- Altura libre vertical: Mínimo 1981 mm (78 inches)
- Uso: Espacios limitados, buen aspecto arquitectónico

**Normativa mexicana NOM-001-STPS-2008:**

Requisitos similares a OSHA con especificaciones métricas:

```
Escaleras de servicio:
- Ancho mínimo: 560 mm
- Contrahuella máxima: 230 mm
- Huella mínima: 250 mm
- Relación: 2(contrahuella) + huella = 610-640 mm (fórmula de Blondel)

Escaleras de emergencia:
- Ancho mínimo: 1000 mm (para evacuación)
- Descansos: Cada 3000 mm de altura vertical máximo
```

### 2.2 Creación de Escaleras Rectas

Las escaleras rectas son el tipo más común en plantas industriales.

**Comando:**

1. Cinta **Plant 3D** → Panel **Structure** → **Stair**
2. O comando: `PLANTSTAIR`

**Procedimiento básico:**

1. Ejecutar comando `PLANTSTAIR`
2. **Stair Type:** Straight (recta)
3. **Start Point:** Punto de inicio (nivel inferior)
4. **Direction:** Dirección de escalera (hacia donde sube)
5. **End Point o Height:** Punto final o altura total a subir
6. **Stair Parameters:** Configurar detalles

**Parámetros de configuración:**

```
Stair Properties:
├── Geometry
│   ├── Start Elevation: Elevación de arranque
│   ├── End Elevation: Elevación de llegada
│   ├── Total Height: Altura total (calculada automáticamente)
│   ├── Angle: Ángulo de inclinación (típico: 35-40°)
│   └── Width: Ancho de escalera (mínimo 560 mm)
├── Treads (Huellas)
│   ├── Tread Depth: Profundidad de huella (280-300 mm típico)
│   ├── Tread Type: Grating, Chequered Plate, Solid Plate
│   └── Nosing: Proyección de nariz (0-25 mm)
├── Risers (Contrahuellas)
│   ├── Riser Height: Altura de contrahuella (180-200 mm típico)
│   ├── Number of Risers: Cantidad (calculado por Plant 3D)
│   └── Riser Type: Open (sin contrahuella), Closed (con placa)
├── Stringers (Largueros)
│   ├── Stringer Type: Channel, Angle, Plate
│   ├── Profile: Perfil del larguero (C10, L6x4, etc.)
│   └── Number: 2 (típico) o 3 (para escaleras anchas)
└── Handrails (Barandas)
    ├── Left Side: Baranda izquierda
    ├── Right Side: Baranda derecha
    └── Style: Estilo de baranda (ver Lección 18)
```

**Ejemplo 1: Escalera de acceso a plataforma de pipe rack**

```
Aplicación: Acceso desde nivel de piso (0.00) a plataforma de válvulas (+4500 mm)
Tipo: Escalera recta estándar
Altura total: 4500 mm
Ángulo: 38° (estándar confortable)
Ancho: 900 mm (permite paso de dos personas)

Cálculo de peldaños:
Contrahuella óptima: 190 mm
Número de contrahuellas: 4500 / 190 = 23.68 → 24 contrahuellas
Contrahuella ajustada: 4500 / 24 = 187.5 mm ✓ (dentro de 152-241 mm OSHA)

Huella:
Usando fórmula de Blondel: 2(187.5) + huella = 630 mm
Huella = 630 - 375 = 255 mm
Ajustar a: 280 mm (más cómodo) ✓

Verificación ángulo:
tan(α) = 187.5 / 280 = 0.670
α = 33.8° ✓ (dentro de 30-50° OSHA)
```

**Procedimiento en Plant 3D:**

1. Comando: `PLANTSTAIR`
2. **Type:** Straight
3. **Start Point:** Seleccionar punto en nivel 0.00 (base de estructura)
4. **Direction:** Indicar dirección hacia plataforma
5. En **Stair Properties:**
   ```
   Start Elevation: 0.00
   End Elevation: 4500 mm
   Width: 900 mm
   Angle: 35° (Plant 3D calcula, o especificar)

   Treads:
   - Tread Depth: 280 mm
   - Type: Grating (mismo que plataforma)
   - Nosing: 0 mm (no necesario con huella > 279 mm)

   Risers:
   - Riser Height: 187.5 mm (Plant 3D calcula automáticamente)
   - Number: 24
   - Type: Open (sin contrahuella vertical, común en industria)

   Stringers:
   - Type: Channel
   - Profile: C10x15.3 (dos largueros laterales)
   - Material: A36
   ```

6. **Create:** Plant 3D genera escalera completa con estructura

![Escalera recta estándar](../imagenes/leccion-17-escalera-recta.png)

**Ejemplo 2: Ship Ladder (escalera marinera) para acceso limitado**

```
Aplicación: Acceso a plataforma de instrumentos en espacio reducido
Altura: 3000 mm
Tipo: Ship Ladder
Ángulo: 60° (más empinada que standard)
Ancho: 600 mm

Cálculo:
Contrahuella: 200 mm
Número de contrahuellas: 3000 / 200 = 15 ✓
Huella: 280 mm / cos(60°) = 140 mm ✓ (dentro de 102-216 mm OSHA ship ladder)

Nariz (nosing): 25 mm (requerido para ship ladder)
```

**Procedimiento:**

1. `PLANTSTAIR`
2. **Type:** Ship Ladder
3. **Start/End:** Especificar inicio y elevación final 3000 mm
4. **Width:** 600 mm
5. **Angle:** 60°
6. Propiedades:
   ```
   Tread Depth: 140 mm
   Nosing: 25 mm (crítico para seguridad)
   Riser Height: 200 mm
   Number of Risers: 15

   Stringers:
   - Type: Angle
   - Profile: L4x4x3/8 (ángulos laterales)
   ```

**Nota de seguridad:** Ship ladders con ángulo > 50° requieren baranda continua en ambos lados según OSHA 1910.25(b)(5)(v).

### 2.3 Escaleras con Descansos (Landings)

Para alturas mayores a 3600 mm (12 feet según OSHA) o cuando se requiere cambio de dirección.

**Tipos de configuración:**

**Escalera en L (L-Shaped Stair):**
- Dos tramos a 90° conectados por descanso
- Descanso cuadrado o rectangular

**Escalera en U (U-Shaped Stair):**
- Dos tramos paralelos en direcciones opuestas
- Descanso rectangular entre tramos
- También llamada "switchback stair"

**Escalera Multinivel:**
- Múltiples tramos y descansos
- Para alturas muy grandes (> 9000 mm)
- Descansos cada 3000-3600 mm

**Requisitos de descansos según OSHA 1910.25(b)(4):**

```
Dimensiones de descanso:
- Profundidad (dirección de viaje): Mínimo ancho de escalera
- Ancho: Mínimo ancho de escalera
- Típico: 1000 mm x 1000 mm para escalera de 900 mm

Altura libre sobre descanso:
- Mínimo: 2032 mm (80 inches) verticales

Ubicación:
- Cambios de dirección
- Cada 3658 mm (12 feet) de altura vertical máximo (recomendación)
```

**Comando para escalera con descanso:**

**Método 1: Comando único con configuración compleja**

1. `PLANTSTAIR`
2. **Type:** L-Shaped o U-Shaped
3. **Start Point:** Inicio de primer tramo
4. **First Flight End:** Fin de primer tramo (llegada a descanso)
5. **Landing Direction:** Dirección del descanso
6. **Landing Size:** Dimensiones de descanso
7. **Second Flight Direction:** Dirección de segundo tramo
8. **End Point:** Punto final de segundo tramo

**Método 2: Escaleras y plataformas separadas**

Más control y común en práctica:

1. Crear primer tramo de escalera:
   - Inicio: 0.00
   - Fin: +3000 mm (descanso intermedio)

2. Crear descanso (plataforma):
   - Comando: `PLANTPLATFORM`
   - Elevación: +3000 mm
   - Dimensiones: 1200 mm x 1200 mm
   - Ubicar en llegada de primer tramo

3. Crear segundo tramo de escalera:
   - Inicio: Borde del descanso, elevación +3000 mm
   - Fin: +6000 mm (plataforma final)
   - Dirección: 90° respecto a primer tramo (L-shape) o 180° (U-shape)

**Ejemplo - Escalera en U para acceso a tanque elevado:**

```
Altura total: 12000 mm (requiere descansos)
Configuración: U-Shaped con 4 tramos y 3 descansos intermedios
Distribución de altura:
- Tramo 1: 0.00 → +3000 mm (descanso 1)
- Tramo 2: +3000 → +6000 mm (descanso 2)
- Tramo 3: +6000 → +9000 mm (descanso 3)
- Tramo 4: +9000 → +12000 mm (plataforma final)

Cada tramo:
- Altura: 3000 mm
- Contrahuellas: 16 (3000/187.5)
- Huella: 280 mm
- Ángulo: 34°

Descansos:
- Dimensiones: 1200 mm x 1200 mm
- Grating: Welded 30x3
- Baranda continua en 3 lados (abierto hacia llegada/salida)
```

**Procedimiento:**

1. Crear tramo 1: `PLANTSTAIR`, de 0.00 a +3000, dirección norte
2. Crear descanso 1: `PLANTPLATFORM`, 1200x1200 en +3000
3. Crear tramo 2: `PLANTSTAIR`, de +3000 a +6000, dirección sur (180° giro)
4. Crear descanso 2: `PLANTPLATFORM`, 1200x1200 en +6000
5. Crear tramo 3: `PLANTSTAIR`, de +6000 a +9000, dirección norte
6. Crear descanso 3: `PLANTPLATFORM`, 1200x1200 en +9000
7. Crear tramo 4: `PLANTSTAIR`, de +9000 a +12000, dirección sur
8. Agregar barandas continuas (ver Lección 18) en todos los tramos y descansos

![Escalera en U con descansos](../imagenes/leccion-17-escalera-u-descansos.png)

### 2.4 Escaleras Espirales (Spiral Stairs)

Las escaleras espirales son útiles cuando el espacio horizontal es muy limitado, pero se debe subir considerable altura.

**Aplicaciones típicas:**

- Acceso a plataformas superiores de tanques
- Torres de observación
- Áreas con geometría circular (alrededor de equipos cilíndricos)
- Cuando estética es importante (áreas visibles)

**Requisitos OSHA 1910.25(d):**

```
Dimensiones mínimas:
- Diámetro mínimo: 1524 mm (60 inches) entre barandas
- Huella en línea de marcha: Mínimo 191 mm (7.5 inches)
  Medido a 305 mm (12 inches) desde centro de columna
- Altura de contrahuellas: Máximo 241 mm (9.5 inches)
- Altura libre vertical: Mínimo 1981 mm (78 inches)
- Ancho mínimo: 660 mm (26 inches)
```

**Comando:**

1. `PLANTSTAIR`
2. **Type:** Spiral
3. **Center Point:** Centro de la espiral
4. **Radius:** Radio de escalera (típico: 900-1200 mm)
5. **Start Angle:** Ángulo de inicio (0° = este)
6. **Rotation:** Sentido de rotación (CW clockwise / CCW counterclockwise)
7. **Start Elevation:** Elevación de inicio
8. **End Elevation:** Elevación final

**Parámetros específicos de spiral:**

```
Spiral Stair Properties:
├── Center Location: Punto central (X, Y)
├── Radius: Radio de escalera (distancia del centro a baranda exterior)
├── Inside Radius: Radio de columna central (típico: 150-200 mm)
├── Start Angle: Ángulo de primer peldaño (0-360°)
├── Rotation: CW (derecha) o CCW (izquierda)
├── Total Angle: Ángulo total de rotación (270°, 360°, 540°, etc.)
├── Treads per Revolution: Peldaños por vuelta completa (típico: 12-16)
└── Column Type: Tipo de columna central (HSS, Pipe, etc.)
```

**Ejemplo - Escalera espiral para tanque de almacenamiento:**

```
Aplicación: Acceso desde nivel de piso a plataforma superior de tanque
Altura: 9000 mm
Configuración:
- Diámetro: 2400 mm (radio 1200 mm desde centro)
- Radio de columna central: 200 mm (HSS 8x8)
- Rotación: CW (sentido horario)
- Giro total: 720° (2 vueltas completas)
- Peldaños por vuelta: 14
- Total de peldaños: 28

Cálculo de contrahuella:
Número de contrahuellas: 28
Contrahuella: 9000 / 28 = 321 mm ✗ (excede máximo 241 mm OSHA)
Ajustar a: 30 peldaños
Contrahuella: 9000 / 30 = 300 mm ✗ (todavía excede)
Ajustar a: 40 peldaños
Contrahuella: 9000 / 40 = 225 mm ✓

Giro por peldaño: 720° / 40 = 18° por peldaño

Huella en línea de marcha (305 mm desde centro):
Radio de línea de marcha: 305 mm
Circunferencia de línea de marcha: 2π(305) = 1916 mm
Huella por peldaño: 1916 / (peldaños por vuelta)
Si 20 peldaños por vuelta: 1916/20 = 95.8 mm ✗ (menor que 191 mm mínimo)

Recalcular:
Para cumplir mínimo 191 mm:
Peldaños por vuelta máximo: 1916 / 191 = 10.03 ≈ 10 peldaños/vuelta
Total giro: 720° → 2 vueltas → 20 peldaños total
Contrahuella: 9000 / 20 = 450 mm ✗ (excede límite)

Solución: Usar mayor radio o dividir altura con descanso intermedio.

Ajuste final:
- Radio: 1500 mm (diámetro 3000 mm)
- Línea de marcha: 305 mm → circunferencia: 2π(305) = 1916 mm
- Peldaños/vuelta: 10 (huella = 191.6 mm ✓)
- Giro total: 540° (1.5 vueltas)
- Total peldaños: 15
- Contrahuella: 9000/15 = 600 mm ✗

Conclusión: Para 9000 mm de altura, escalera espiral requiere descanso intermedio o diámetro muy grande. Alternativa práctica: U-shaped stair.
```

**Nota importante:** Escaleras espirales son complejas de diseñar correctamente para cumplir OSHA. En práctica, se usan principalmente para alturas moderadas (< 6000 mm) o como acceso secundario/emergencia cuando normativa lo permite.

**Procedimiento en Plant 3D (altura moderada 4500 mm):**

```
Configuración práctica:
Altura: 4500 mm
Radio: 1200 mm
Peldaños/vuelta: 12
Giro total: 360° (1 vuelta completa)
Total peldaños: 12
Contrahuella: 4500/12 = 375 mm ✗ (excede 241 mm)

Ajuste:
Total peldaños: 20
Contrahuella: 4500/20 = 225 mm ✓
Giro total: (20/12) × 360° = 600° (1.67 vueltas)
```

1. `PLANTSTAIR`
2. **Type:** Spiral
3. **Center Point:** Ubicar centro (ej: adyacente a tanque)
4. **Radius:** 1200 mm
5. **Start Elevation:** 0.00
6. **End Elevation:** 4500 mm
7. Propiedades:
   ```
   Inside Radius: 200 mm (columna central)
   Rotation: CW
   Treads per Revolution: 12
   Total Treads: 20 (Plant 3D calcula según contrahuella)

   Column:
   - Type: HSS (Hollow Structural Section)
   - Profile: HSS 8x8x1/4

   Handrail:
   - Inner Rail: A lo largo de columna central
   - Outer Rail: Perímetro exterior
   - Height: 1067 mm (42 inches)
   ```

![Escalera espiral](../imagenes/leccion-17-escalera-espiral.png)

## 3. Plataformas de Acceso a Equipos

### 3.1 Plataformas para Recipientes a Presión

Los recipientes a presión requieren acceso a múltiples puntos:

**Puntos de acceso requeridos:**

1. **Manholes (Registros de Hombre):**
   - Apertura: Típico 500-600 mm diámetro
   - Plataforma requerida: Mínimo 900 mm frente a manhole
   - Área de trabajo: 1200 mm x 1200 mm (para permitir entrada/salida)

2. **Nozzles de Instrumentos:**
   - Transmisores de nivel, presión, temperatura
   - Plataforma a elevación de boquillas
   - Ancho: 760 mm mínimo

3. **Válvulas de Seguridad (PSV):**
   - Acceso para inspección y mantenimiento
   - Plataforma robusta (herramientas pesadas)
   - Carga: 500 kg/m²

4. **Boquillas de Proceso:**
   - Entrada/salida de fluidos
   - Acceso para cambio de juntas (gaskets)
   - Espacio para herramientas de torque

**Ejemplo - Recipiente vertical 2000 mm diámetro x 6000 mm altura:**

```
Recipiente:
- Tipo: Reactor vertical
- Diámetro: 2000 mm
- Altura tangente-tangente: 6000 mm
- Elevación fondo: +1000 mm
- Elevación tope: +7000 mm

Puntos de acceso:
1. Manhole superior: Elevación +6800 mm
2. Boquillas laterales: Elevación +4000 mm
3. Instrumentos: Elevación +3000 mm, +5000 mm

Plataformas requeridas:

Plataforma 1 - Nivel instrumentos inferiores:
- Elevación: +3000 mm
- Tipo: Semicircular alrededor de recipiente
- Radio interior: 1000 mm (pared de recipiente)
- Radio exterior: 2200 mm (ancho 1200 mm)
- Ángulo: 180° (mitad del perímetro donde están boquillas)
- Acceso: Escalera recta desde piso

Plataforma 2 - Nivel boquillas de proceso:
- Elevación: +4000 mm
- Tipo: Semicircular
- Radio interior/exterior: Igual a plataforma 1
- Ángulo: 180° (lado opuesto a plataforma 1)
- Acceso: Continuación de escalera desde plataforma 1

Plataforma 3 - Nivel manhole superior:
- Elevación: +6800 mm
- Tipo: Circular completa (360°)
- Radio interior: 1000 mm
- Radio exterior: 2400 mm (ancho 1400 mm, área de trabajo)
- Acceso: Escalera continuando desde plataforma 2
```

**Procedimiento en Plant 3D:**

1. **Modelar recipiente** (ver Lección 19 para detalle de equipos)

2. **Crear plataforma nivel 1 (+3000 mm):**
   ```
   Comando: PLANTPLATFORM
   Type: Circular Segment
   Center: Centro del recipiente
   Inner Radius: 1000 mm
   Outer Radius: 2200 mm
   Start Angle: 0°
   End Angle: 180°
   Elevation: 3000 mm
   Grating: Welded 30x3
   Support: Ménsulas desde recipiente, cada 1000 mm
   ```

3. **Crear escalera nivel piso → plataforma 1:**
   ```
   Comando: PLANTSTAIR
   Type: Straight
   Start: 0.00
   End: 3000 mm
   Width: 900 mm
   Angle: 35°
   ```

4. **Crear plataforma nivel 2 (+4000 mm):**
   ```
   Similar a plataforma 1
   Start Angle: 180°
   End Angle: 360° (o 0°)
   Elevation: 4000 mm
   ```

5. **Crear escalera plataforma 1 → plataforma 2:**
   ```
   Start: 3000 mm
   End: 4000 mm
   Puede ser continuación o arrancar desde plataforma 1
   ```

6. **Crear plataforma nivel 3 (+6800 mm) - manhole superior:**
   ```
   Type: Circular (360°)
   Inner Radius: 1000 mm
   Outer Radius: 2400 mm
   Elevation: 6800 mm

   Importante: Abertura en plataforma para manhole
   - Usar "Opening" para crear hueco circular
   - Diámetro abertura: 800 mm (manhole 600 mm + margen)
   - Centro: Coincidente con manhole del recipiente
   ```

7. **Crear escalera plataforma 2 → plataforma 3:**
   ```
   Altura: 4000 → 6800 = 2800 mm
   ```

8. **Agregar barandas** (Lección 18) en todas las plataformas

![Sistema de plataformas en recipiente vertical](../imagenes/leccion-17-plataformas-recipiente-vertical.png)

### 3.2 Plataformas para Intercambiadores de Calor

Los intercambiadores de calor horizontales requieren acceso específico:

**Puntos de acceso:**

1. **Channel Heads (Cabezales):**
   - Extremos del intercambiador donde se retiran tapas para limpieza
   - Plataforma debe permitir remoción de tapa + longitud de tubos
   - Espacio libre: Largo total de haz de tubos (tube bundle)

2. **Boquillas Laterales:**
   - Entrada/salida de fluidos
   - Acceso a bridas y válvulas

**Ejemplo - Intercambiador horizontal:**

```
Especificaciones:
- Tipo: Shell & Tube horizontal
- Diámetro: 1200 mm
- Largo: 6000 mm (tangente-tangente)
- Elevación: Centro a +3000 mm
- Soportes: Saddles en +2400 mm

Requerimientos de acceso:
- Lado channel fijo (stationary head): No requiere espacio extra
- Lado channel removible (floating head): Requiere espacio = largo de tube bundle
  Espacio requerido: 6000 mm frente al extremo

Plataforma de mantenimiento:
- Ubicación: Lado del floating head
- Dimensiones: 8000 mm largo x 2000 mm ancho
  (6000 mm para tubos + 2000 mm área de trabajo)
- Elevación: +2400 mm (nivel de saddles/acceso cómodo)
- Tipo: Rectangular
- Soporte: Auto-soportada (columnas propias) o empotrada en estructura
```

### 3.3 Plataformas para Bombas y Equipos Rotativos

**Requisitos típicos:**

- Área de trabajo: Mínimo 1500 mm x 1500 mm
- Altura: 900-1200 mm sobre nivel de piso (acceso cómodo)
- Carga: 500 kg/m² (herramientas de mantenimiento)
- Acceso: Escalera con ancho mínimo 760 mm

**Configuración estándar:**

```
Plataforma para grupo de bombas (3 bombas en paralelo):
- Dimensiones: 4000 mm largo x 2400 mm ancho
- Elevación: +1200 mm
- Grating: Serrated 32x5 (antiderrapante, área con aceite)
- Soporte: Columnas HSS 3x3 en 4 esquinas
- Acceso: Escalera recta 900 mm ancho en extremo
- Drenaje: Pendiente 1% hacia dren (evitar acumulación de líquidos)
```

## 4. Cumplimiento OSHA y NOM México

### 4.1 OSHA 1910.23 - Requisitos Generales

**Capacidades de carga requeridas:**

```
OSHA 1910.22(b) - Load Limits:

Walking-Working Surfaces:
- Carga mínima uniformemente distribuida: 5 psf (244 Pa o ~25 kg/m²) SI
- Esto es mínimo extremo; práctica industrial usa 50 psf (2.4 kPa o 250 kg/m²)

Plataformas de trabajo:
- Carga mínima: 50 psf (244 kg/m²) más concentrada
- Diseño típico industrial: 350 kg/m² mínimo

Escaleras:
- Carga: 5 times la carga normal prevista
- Diseño típico: 500 kg/m² (carga concentrada en un peldaño)
```

**Dimensiones críticas OSHA 1910.25:**

```
Escaleras:
- Altura libre (headroom): Mínimo 2032 mm vertical
- Ancho útil: Mínimo 560 mm entre barandas
- Contrahuella: 152-241 mm (uniforme, variación máxima 6 mm)
- Huella: Mínimo 279 mm (si menor, requiere nosing mínimo 19 mm)

Descansos:
- Profundidad: Mínimo igual al ancho de escalera
- Ancho: Mínimo igual al ancho de escalera
- Frecuencia: Cada 3658 mm de altura (12 feet) recomendado

Barandas (ver Lección 18 para detalle):
- Altura: 1067 mm ± 76 mm (42 ± 3 inches)
- Resistencia: 890 N (200 lbf) en cualquier dirección
```

### 4.2 NOM-001-STPS-2008 (México)

**Requisitos específicos para México:**

**Escaleras fijas (Capítulo 9):**

```
Artículo 9.3 - Escaleras de servicio:
- Ancho mínimo libre: 560 mm
- Huella: Mínimo 250 mm (más generoso que OSHA 279 mm)
- Contrahuella: Máximo 230 mm
- Relación 2C + H: Entre 610-640 mm (fórmula de Blondel)
- Variación máxima de contrahuella: 5 mm

Artículo 9.4 - Escaleras de emergencia:
- Ancho mínimo: 1000 mm (para evacuación)
- Descansos: Cada 3000 mm de altura vertical
- Barandas: Obligatorias en ambos lados
```

**Plataformas (Capítulo 11):**

```
Artículo 11.2 - Plataformas elevadas:
- Ancho mínimo: 600 mm
- Si altura > 2000 mm: Requiere baranda y rodapié
- Carga de diseño: Según análisis de cargas reales + factor de seguridad 1.5

Artículo 11.3 - Barandas (ver Lección 18):
- Altura: 900 mm ± 50 mm
- Resistencia: Mínimo 100 kg (980 N) horizontal en punto más desfavorable
```

**Comparación OSHA vs NOM-001-STPS:**

| Aspecto | OSHA 1910 | NOM-001-STPS | Diseño Recomendado |
|---------|-----------|--------------|-------------------|
| Ancho escalera | 560 mm | 560 mm | 900 mm (estándar) |
| Huella mínima | 279 mm | 250 mm | 280 mm |
| Contrahuella máx | 241 mm | 230 mm | 190 mm (confort) |
| Altura baranda | 1067 mm (42") | 900 mm | 1067 mm (más seguro) |
| Descansos | Cada 3658 mm (rec) | Cada 3000 mm (req) | Cada 3000 mm |
| Ancho emergencia | - | 1000 mm | 1000 mm |

**Recomendación:** Diseñar cumpliendo el **más restrictivo** entre OSHA y NOM cuando apliquen ambos (empresas multinacionales en México).

### 4.3 Verificación de Cumplimiento en Plant 3D

**Herramientas de validación:**

1. **Stair Checker:**
   - Comando: `PLANTSTAIRCHECK`
   - Seleccionar escalera creada
   - Plant 3D verifica automáticamente:
     - Variación de contrahuellas (debe ser < 6 mm)
     - Dimensiones de huella/contrahuella vs OSHA 1910.25
     - Ángulo de inclinación en rango permitido
     - Ancho mínimo
   - Reporte: Lista de no conformidades

2. **Platform Checker:**
   - Comando: `PLANTPLATFORMCHECK`
   - Verifica:
     - Capacidad de carga del grating vs espaciamiento de vigas
     - Ancho mínimo de plataforma
     - Requerimiento de barandas (si altura > 1200 mm)

3. **Code Compliance Report:**
   - **Reports** → **Code Compliance**
   - Genera reporte completo de proyecto:
     - Todas las escaleras y plataformas
     - Cumplimiento con código seleccionado (OSHA, NOM, IBC, etc.)
     - Lista de elementos no conformes
     - Sugerencias de corrección

**Ejemplo de uso:**

```
Proyecto con 15 escaleras y 25 plataformas.

1. Configurar código:
   Project Properties → Safety Standards → Select: "OSHA 1910 + NOM-001-STPS"

2. Ejecutar verificación:
   PLANTSTAIRCHECK → "Check All Stairs"

3. Revisar reporte:
   Non-Compliance Items Found: 3

   - Stair-05: Tread depth 265 mm < 279 mm OSHA minimum
     Location: Grid C-3, Elevation +3000
     Recommendation: Reduce angle or increase tread depth

   - Stair-08: Riser variation 8 mm > 6 mm OSHA maximum
     Location: Grid F-2, Elevation +6000
     Recommendation: Adjust riser heights uniformly

   - Stair-12: Width 540 mm < 560 mm OSHA minimum
     Location: Grid A-5, Elevation +1500
     Recommendation: Increase stair width to 560 mm minimum

4. Corregir no conformidades:
   Seleccionar Stair-05 → Properties → Tread Depth: 280 mm (ajustar)
   Seleccionar Stair-08 → Properties → Equalize Risers (comando automático)
   Seleccionar Stair-12 → Properties → Width: 600 mm

5. Re-verificar:
   PLANTSTAIRCHECK → "Check All Stairs"
   Non-Compliance Items: 0 ✓
```

## 5. Soportes de Plataformas

### 5.1 Tipos de Soportes Estructurales

**Soportes por Ménsulas (Cantilever):**

Aplicación: Plataformas adosadas a estructura existente o equipos.

Componentes:
- **Viga en voladizo (cantilever beam):** Perfil C o W empotrado en estructura principal
- **Conexión:** Ángulos o placas atornilladas/soldadas
- **Limitación:** Voladizo máximo típico L/4 de capacidad de viga

**Ejemplo:**

```
Plataforma 2000 mm x 900 mm empotrada en pipe rack
Viga principal del rack: W12x26

Ménsulas:
- Perfil: C10x15.3
- Longitud: 1100 mm (900 mm de plataforma + 200 mm empotramiento en viga principal)
- Cantidad: 3 ménsulas espaciadas cada 1000 mm
- Conexión: (2) Ángulos L4x4x3/8 por ménsula, atornillados a alma de W12x26
- Pernos: (4) A325 3/4" por conexión
```

**Procedimiento en Plant 3D:**

1. Crear plataforma en ubicación deseada
2. Seleccionar plataforma → **Properties** → **Support**
3. **Support Type:** Cantilever
4. **Support Beam Profile:** C10x15.3
5. **Cantilever Length:** 1100 mm
6. **Number of Supports:** 3
7. **Attach To:** Seleccionar viga principal del rack (W12x26)
8. Plant 3D crea automáticamente ménsulas y conexiones básicas

![Plataforma con soporte en ménsulas](../imagenes/leccion-17-soporte-mensulas.png)

**Soportes por Columnas (Column-Supported):**

Aplicación: Plataformas auto-soportadas, no dependen de estructura existente.

Componentes:
- **Columnas:** HSS (tubos cuadrados) o W-shapes
- **Vigas perimetrales:** Canales o W pequeños
- **Vigas internas:** Según espaciamiento requerido para grating
- **Arriostramientos:** Diagonales entre columnas

**Ejemplo:**

```
Plataforma de mantenimiento 3000 mm x 2400 mm, elevación +1200 mm
Auto-soportada

Estructura:
Columnas: (4) HSS 4x4x1/4
- Ubicación: En 4 esquinas de plataforma
- Altura: 1200 mm (desde base en 0.00 a plataforma)
- Base: Placas 200x200x12 mm con (4) pernos de anclaje

Vigas perimetrales: C8x11.5
- Conectan columnas en perímetro
- Elevación: +1200 mm (tope de columnas)

Vigas internas: C6x8.2
- Dirección: Paralelo al lado corto (2400 mm)
- Cantidad: 3 (espaciadas cada 1000 mm)
- Soportan grating

Grating: Welded 30x3
- Luz: 1000 mm (entre vigas internas)
- Orientación: Barras de carga perpendiculares a vigas internas

Arriostramientos: L3x3x5/16
- Ubicación: Diagonal en cada panel vertical entre columnas
- Patrón: X-bracing o single diagonal
```

**Procedimiento en Plant 3D:**

1. Comando: `PLANTPLATFORM`
2. Especificar dimensiones y elevación
3. **Properties** → **Support Type:** Column-Supported
4. **Column Profile:** HSS 4x4x1/4
5. **Column Locations:** Automatic (4 corners) o Custom
6. **Perimeter Beam:** C8x11.5
7. **Internal Beams:** C6x8.2, spacing 1000 mm
8. **Bracing:** Enable, Profile L3x3x5/16

Plant 3D genera estructura completa.

**Soportes Colgados (Suspended/Hung):**

Aplicación: Plataformas bajo vigas superiores, techos, o pipe racks.

Componentes:
- **Varillas de suspensión:** Barras roscadas (threaded rods) o cables
- **Vigas de plataforma:** Soportan grating y cuelgan de varillas
- **Conexiones superiores:** Clips o placas en vigas superiores

**Ejemplo:**

```
Plataforma bajo pipe rack, para acceso a válvulas en lado inferior de tuberías

Plataforma: 2400 mm x 900 mm
Elevación: +4000 mm (pipe rack a +6000 mm, plataforma 2000 mm abajo)

Suspensión:
- Varillas: (4) 19 mm diámetro, rosca continua
- Material: A36
- Longitud: 2200 mm (2000 mm altura + conexiones)
- Ubicación: En 4 esquinas de plataforma

Estructura de plataforma:
- Vigas longitudinales: C8x11.5 (2400 mm largo)
- Vigas transversales: C6x8.2 (900 mm)
- Grating: Welded 30x3

Conexiones superiores:
- Clips soldados a vigas del pipe rack (W12x26)
- Tuercas y arandelas en varillas
```

**Configuración en Plant 3D:**

1. Crear plataforma
2. **Support Type:** Suspended
3. **Rod Diameter:** 19 mm
4. **Rod Material:** A36 threaded rod
5. **Number of Rods:** 4
6. **Attach To:** Seleccionar vigas superiores del rack
7. **Suspension Length:** 2000 mm (Plant 3D calcula desde vigas seleccionadas)

### 5.2 Conexiones de Soportes a Estructura Existente

**Conexiones Atornilladas:**

Preferidas cuando:
- Posibilidad de desmontaje futuro
- Montaje en campo
- Estructura existente que no puede soldarse

**Detalles típicos:**

```
Conexión de ménsula a viga principal:

Ménsula: C10x15.3
Viga principal: W12x26

Elementos de conexión:
- (2) Ángulos de conexión: L4x4x3/8, longitud 250 mm
- Pernos a viga principal: (4) A325-N 3/4" por ángulo
  Total: 8 pernos conectando ménsula a viga
- Disposición: 2 filas x 2 columnas por ángulo
- Espaciamiento: 75 mm entre centros
- Edge distance: 40 mm (estándar)

Conexión de grating a viga perimetral:
- Clips de grating: Acero A36, espesor 6 mm
- Pernos: M10 (3/8") cada 600 mm
```

**Conexiones Soldadas:**

Preferidas cuando:
- Conexión permanente
- Fabricación en taller
- Mayor rigidez requerida

**Detalles típicos:**

```
Soldadura de ménsula a columna:

Ménsula: C10x15.3
Columna: W10x49

Soldadura:
- Tipo: Filete (fillet weld)
- Tamaño: 6 mm (1/4")
- Electrodo: E70XX
- Longitud: Perímetro completo de contacto entre ménsula y columna
- Patrón: Continuo en alma y patines de canal

Preparación:
- Corte de ménsula: Coping (recorte) para ajustar a perfiles de columna
- Ajuste: Placas de relleno si necesario para alineación
```

**Configurar en Plant 3D:**

1. Seleccionar soporte (ménsula, columna, etc.)
2. **Properties** → **Connection**
3. **Connection Type:** Bolted o Welded
4. Si Bolted:
   - **Bolt Grade:** A325-N o A490
   - **Bolt Size:** 3/4", 7/8", 1"
   - **Pattern:** Especificar filas y columnas
5. Si Welded:
   - **Weld Type:** Fillet, Groove, Plug
   - **Weld Size:** 6 mm, 8 mm, etc.
   - **Electrode:** E70XX (estándar)

### 5.3 Cálculo de Capacidad de Soportes

Plant 3D no realiza cálculo estructural completo, pero permite verificar básicamente:

**Cargas en plataforma:**

```
Plataforma ejemplo: 3000 mm x 2400 mm = 7.2 m²

Cargas:
1. Peso propio de estructura:
   - Grating 30x3 galvanizado: 22 kg/m²
   - Vigas (estimado): 15 kg/m²
   - Total peso propio: 37 kg/m² × 7.2 m² = 266 kg

2. Carga viva (operación):
   - Especificación: 350 kg/m²
   - Total: 350 × 7.2 = 2,520 kg

3. Carga total (factorizada LRFD):
   - Carga muerta (D): 266 kg × 1.2 = 319 kg
   - Carga viva (L): 2,520 kg × 1.6 = 4,032 kg
   - Total factorizada: 4,351 kg ≈ 43 kN

4. Distribución a soportes:
   Si 4 columnas en esquinas:
   Carga por columna: 43 kN / 4 = 10.75 kN

Verificar capacidad de columna HSS 4x4x1/4:
- Altura: 1200 mm
- Capacidad a compresión (según AISC): ~180 kN (depende de longitud efectiva)
- Verificación: 10.75 kN << 180 kN ✓ OK

Si ménsulas:
3 ménsulas C10x15.3, voladizo 1000 mm:
Carga por ménsula: 43 kN / 3 = 14.3 kN
Momento: 14.3 kN × 0.5 m (centro de carga) = 7.15 kN·m
Capacidad de C10x15.3 en flexión: ~20 kN·m (depende de soporte)
Verificación: 7.15 < 20 ✓ OK (aproximado)
```

**Nota:** Estos cálculos son verificaciones básicas. Para diseño final, se requiere análisis estructural completo por ingeniero estructural certificado, especialmente para:
- Cargas de viento y sismo
- Combinaciones de carga según ASCE 7
- Deflexiones y vibraciones
- Conexiones (capacidad de pernos/soldaduras)

## Ejercicio Práctico: Diseño de Sistema de Plataformas y Escaleras

**Objetivo:** Diseñar sistema completo de acceso seguro a recipiente a presión vertical, incluyendo plataformas multinivel y escaleras con descansos.

**Especificaciones del proyecto:**

```
Equipo: Recipiente a presión vertical (Torre de destilación)
Diámetro: 2400 mm
Altura tangente-tangente: 12,000 mm
Elevación fondo: +2000 mm
Elevación tope: +14,000 mm

Puntos de acceso requeridos:
1. Boquillas laterales zona inferior: Elevación +4000 mm
2. Boquillas laterales zona media: Elevación +8000 mm
3. Manhole superior: Elevación +13,500 mm

Normativa: OSHA 1910 + NOM-001-STPS (México)
Ubicación: Salamanca, Guanajuato (zona sísmica B)
```

**Requerimientos:**

1. Plataformas de acceso en 3 niveles
2. Sistema de escaleras desde piso (0.00) hasta plataforma superior
3. Descansos según normativa (cada 3000 mm)
4. Cumplimiento total OSHA y NOM

**Procedimiento paso a paso:**

**Paso 1: Planificación del sistema (5 min)**

Determinar elevaciones:
```
Nivel de piso: 0.00
Descanso 1: +3000 mm (primer descanso según NOM)
Plataforma 1 (boquillas inferiores): +4000 mm
Descanso 2: +6000 mm
Plataforma 2 (boquillas medias): +8000 mm
Descanso 3: +9000 mm
Descanso 4: +12000 mm
Plataforma 3 (manhole superior): +13500 mm
```

Configuración de escaleras:
```
Todas las escaleras:
- Tipo: Rectas con descansos (U-shaped overall)
- Ancho: 900 mm (estándar confortable)
- Ángulo: 35° (estándar)
- Contrahuella: 190 mm (confortable, dentro de norma)
- Huella: 280 mm (cómoda)
```

**Paso 2: Modelar recipiente (5 min)**

(Modelo simplificado; detalle completo en Lección 19)

1. Comando: `CYLINDER` (AutoCAD básico)
2. Centro: 0,0
3. Diámetro: 2400 mm
4. Altura: Base +2000 a Tope +14000 = 12000 mm
5. O usar `PLANTVESSEL` si disponible (Lección 19)

**Paso 3: Crear plataforma nivel 1 (+4000 mm) - 7 min**

1. Comando: `PLANTPLATFORM`
2. **Type:** Circular Segment
3. **Center:** Centro del recipiente (0,0)
4. **Inner Radius:** 1200 mm (radio del recipiente)
5. **Outer Radius:** 2500 mm (ancho de plataforma 1300 mm)
6. **Start Angle:** 90°
7. **End Angle:** 270° (180° de arco, mitad del recipiente)
8. **Elevation:** 4000 mm

9. **Properties:**
   ```
   Grating: Welded_30x3
   Orientation: Radial (barras hacia centro)
   Perimeter Beam: C8x11.5
   Support Beams: C6x8.2, radial pattern, every 45°
   Support Type: Brackets from vessel
   Bracket Profile: C8x11.5
   Bracket Spacing: 1200 mm along arc
   ```

**Paso 4: Crear escalera tramo 1 (0.00 → +3000 mm) - 5 min**

1. Comando: `PLANTSTAIR`
2. **Type:** Straight
3. **Start Point:** Punto alejado del recipiente (ej: -4000, 0, 0)
4. **Direction:** Hacia recipiente (+X)
5. **Start Elevation:** 0.00
6. **End Elevation:** 3000 mm
7. **Width:** 900 mm

8. **Properties:**
   ```
   Angle: 35°
   Tread Depth: 280 mm
   Riser Height: 190 mm (Plant 3D calcula cantidad: 3000/190 ≈ 16 risers)
   Tread Type: Grating (Welded 30x3)
   Riser Type: Open (sin contrahuella vertical)
   Stringers: C10x15.3, 2 laterales
   ```

**Paso 5: Crear descanso 1 (+3000 mm) - 4 min**

1. Comando: `PLANTPLATFORM`
2. **Type:** Rectangular
3. **First Corner:** En llegada de escalera tramo 1
4. **Dimensions:** 1200 mm x 1200 mm
5. **Elevation:** 3000 mm
6. **Grating:** Welded 30x3
7. **Support:** Column-Supported
8. **Columns:** HSS 3x3x1/4 en 4 esquinas

**Paso 6: Crear escalera tramo 2 (descanso 1 → plataforma 1) - 4 min**

1. `PLANTSTAIR`
2. **Start:** Borde del descanso 1, opuesto a llegada
3. **Direction:** Perpendicular a tramo 1 (giro 90° o 180°, según layout)
4. **Start Elevation:** 3000 mm
5. **End Elevation:** 4000 mm
6. Propiedades iguales a tramo 1
7. **End Point:** Debe llegar a plataforma 1 del recipiente

**Paso 7: Crear plataforma nivel 2 (+8000 mm) - 5 min**

1. `PLANTPLATFORM`
2. **Type:** Circular Segment
3. Centro/Radios: Iguales a plataforma 1
4. **Start Angle:** 270° (lado opuesto a plataforma 1)
5. **End Angle:** 90° (o 450° en notación continua)
6. **Elevation:** 8000 mm
7. Propiedades similares a plataforma 1

**Paso 8: Crear escaleras y descansos intermedios (tramos 3-6) - 10 min**

Repetir proceso:

```
Tramo 3: Plataforma 1 (+4000) → Descanso 2 (+6000)
  - Altura: 2000 mm
  - Risers: ~11

Descanso 2: +6000 mm, 1200x1200

Tramo 4: Descanso 2 (+6000) → Plataforma 2 (+8000)
  - Altura: 2000 mm

Tramo 5: Plataforma 2 (+8000) → Descanso 3 (+9000)
  - Altura: 1000 mm
  - Risers: ~5

Descanso 3: +9000 mm, 1200x1200

Tramo 6: Descanso 3 (+9000) → Descanso 4 (+12000)
  - Altura: 3000 mm
  - Risers: ~16

Descanso 4: +12000 mm, 1200x1200

Tramo 7: Descanso 4 (+12000) → Plataforma 3 (+13500)
  - Altura: 1500 mm
  - Risers: ~8
```

**Paso 9: Crear plataforma nivel 3 (+13500 mm) - manhole superior - 6 min**

1. `PLANTPLATFORM`
2. **Type:** Circular (360°, completa)
3. **Inner Radius:** 1200 mm
4. **Outer Radius:** 2600 mm (ancho 1400 mm, área de trabajo amplia)
5. **Elevation:** 13500 mm

6. **Crear abertura para manhole:**
   - Seleccionar plataforma → **Edit** → **Add Opening**
   - **Shape:** Circle
   - **Center:** Coincidente con ubicación de manhole en recipiente
   - **Diameter:** 800 mm (manhole 600 mm + margen 200 mm)
   - Esto crea hueco en grating y estructura de soporte alrededor

7. **Support:** Brackets from vessel (ménsulas desde recipiente)

**Paso 10: Verificación de cumplimiento normativo (4 min)**

1. **Configurar estándares:**
   - **Project Properties** → **Safety Standards**
   - Seleccionar: **OSHA 1910** + **NOM-001-STPS**

2. **Verificar escaleras:**
   - Comando: `PLANTSTAIRCHECK`
   - **Check All Stairs**
   - Revisar reporte:
     - [ ] Ancho ≥ 560 mm ✓
     - [ ] Contrahuella 152-241 mm (OSHA) y ≤ 230 mm (NOM) ✓
     - [ ] Huella ≥ 279 mm (OSHA) y ≥ 250 mm (NOM) ✓
     - [ ] Variación de contrahuella ≤ 6 mm (OSHA) y ≤ 5 mm (NOM) ✓
     - [ ] Descansos cada ≤ 3000 mm vertical ✓

3. **Verificar plataformas:**
   - Comando: `PLANTPLATFORMCHECK`
   - Verificar:
     - [ ] Ancho ≥ 600 mm (NOM) ✓
     - [ ] Grating apropiado para luz entre soportes ✓
     - [ ] Capacidad de carga: 350 kg/m² mínimo ✓

4. **Generar reporte:**
   - **Reports** → **Code Compliance Report**
   - Exportar a PDF para documentación

**Paso 11: Agregar barandas (preview, detalle en Lección 18) - 5 min**

1. Seleccionar cada plataforma
2. **Properties** → **Handrails**
3. **Add Handrail:** En todos los bordes expuestos (no en lado del recipiente)
4. **Height:** 1067 mm (OSHA, más seguro que 900 mm NOM)
5. **Style:** Standard_Industrial

6. Seleccionar cada escalera
7. **Properties** → **Handrails**
8. **Both Sides:** Activar barandas en ambos lados
9. **Height:** 1067 mm

**Paso 12: Revisión visual y ajustes finales (5 min)**

1. **View** → **3D Isometric** para ver sistema completo
2. Verificar:
   - [ ] Todas las escaleras conectan correctamente con plataformas/descansos
   - [ ] No hay interferencias entre escaleras y recipiente
   - [ ] Sistema permite acceso a todos los puntos requeridos (boquillas, manhole)
   - [ ] Descansos en ubicaciones apropiadas
   - [ ] Barandas en todos los bordes expuestos

3. Ajustar si necesario:
   - Rotar escaleras para mejor acceso
   - Mover descansos si interfieren con boquillas
   - Ajustar ángulos de plataformas circulares

**Entregables esperados:**

1. Modelo 3D completo del sistema de acceso:
   - Recipiente vertical (simplificado)
   - 3 plataformas circulares en elevaciones correctas
   - 7 tramos de escaleras rectas
   - 4 descansos intermedios
   - Barandas en todos los elementos

2. Vistas de plano:
   - Vista en planta mostrando distribución de plataformas
   - Elevación lateral mostrando escaleras y alturas
   - Vista 3D isométrica

3. Reporte de cumplimiento normativo:
   - Verificación OSHA 1910.25
   - Verificación NOM-001-STPS
   - Lista de dimensiones críticas

4. Lista de materiales:
   - Grating: Tipo y área total (m²)
   - Perfiles estructurales: Tipo y longitud total
   - Pernos y conexiones
   - Pintura/acabado

**Criterios de evaluación:**

- **Correctitud dimensional (25%):** Elevaciones y dimensiones según especificaciones
- **Cumplimiento normativo (30%):** OSHA y NOM satisfechos completamente
- **Funcionalidad (20%):** Sistema permite acceso seguro a todos los puntos
- **Completitud (15%):** Todos los elementos requeridos presentes
- **Calidad de modelo (10%):** Sin interferencias, conexiones correctas

**Tiempo total estimado: 60 minutos**

## Preguntas de Evaluación

**Pregunta 1:** Explique las diferencias clave entre una escalera estándar (standard stair) y una escalera marinera (ship ladder) según OSHA 1910.25. ¿En qué situaciones de una planta industrial usaría cada tipo, y cuáles son las implicaciones de seguridad?

**Respuesta esperada:** **Standard Stair:** Ángulo 30-50° (típico 35-40°), ancho mínimo 560 mm, contrahuella 152-241 mm, huella mínima 279 mm (sin nosing requerido si huella ≥279 mm). Uso para acceso principal frecuente (diario, múltiples veces por turno). Más cómoda, permite cargar herramientas, menor riesgo de caída. **Ship Ladder:** Ángulo 50-70° (típico 60°), ancho mínimo 508 mm, huella menor (102-216 mm), nosing mínimo 19 mm obligatorio, requiere baranda continua en ambos lados. Uso para acceso infrecuente o espacios muy restringidos (inspección mensual, emergencias). Más empinada, requiere uso de ambas manos en barandas, NO apropiada para cargar herramientas. **Implicaciones de seguridad:** Ship ladder tiene mayor riesgo de caída (ángulo pronunciado), por ello OSHA requiere barandas más robustas y nosing para mayor agarre con pie. En plantas industriales mexicanas, usar standard stair siempre que espacio lo permita. Ship ladder solo cuando espacio horizontal es absolutamente limitado y frecuencia de uso es baja. NOM-001-STPS no tiene categoría específica de ship ladder, por lo que en proyectos en México, documentar justificación de uso y obtener aprobación de seguridad industrial.

---

**Pregunta 2:** Un recipiente a presión de 2000 mm de diámetro y 6000 mm de altura requiere plataforma de acceso a manhole ubicado en elevación +5800 mm. Diseñe la plataforma especificando: (a) tipo y dimensiones, (b) tipo de grating apropiado, (c) método de soporte, (d) carga de diseño. Justifique cada decisión.

**Respuesta esperada:**

**(a) Tipo y dimensiones:** Plataforma circular o semicircular. **Radio interior:** 1000 mm (radio del recipiente), **Radio exterior:** 2400 mm (ancho de plataforma 1400 mm). Justificación del ancho: Manhole típico 600 mm diámetro requiere espacio para inspector entrar/salir más ayudante con equipo. OSHA no especifica ancho para manholes, pero práctica industrial: 1200-1500 mm para área de trabajo cómoda. **Ángulo:** Si manhole único, usar semicircular 180° centrada en manhole. Si múltiples boquillas, considerar circular completa 360°. **Elevación:** +5800 mm (nivel de manhole).

**(b) Grating:** Tipo recomendado: **Rejilla electrosoldada dentada (serrated) 32x5 mm**. Justificación: (1) Área de manhole tiene riesgo de derrames durante apertura (condensados, residuos), superficie dentada proporciona mejor agarre antiderrapante. (2) Espesor 5 mm (vs 3 mm estándar) proporciona mayor robustez para herramientas de mantenimiento. (3) Cumple OSHA 1910.22 (walking-working surfaces). Material: Acero A36 galvanizado (resistencia a corrosión). Espaciamiento de barras: 30 mm c/c permite drenaje de líquidos.

**(c) Método de soporte:** **Ménsulas (brackets) desde cuerpo del recipiente**. Justificación: (1) No requiere columnas adicionales que interfieren con acceso. (2) Carga se transmite directamente al recipiente (debe verificarse con ingeniero mecánico que recipiente soporta carga adicional sin afectar diseño ASME). (3) Más económico que estructura auto-soportada. **Perfil de ménsulas:** C8x11.5 o C10x15.3, espaciadas cada 1000-1200 mm alrededor del perímetro. **Voladizo:** 1400 mm (ancho de plataforma). **Conexión a recipiente:** Placas soldadas a cuerpo del recipiente (coordinación con fabricante) o abrazaderas (clamps) para recipientes existentes que no pueden soldarse.

**(d) Carga de diseño:** **500 kg/m²**. Justificación: (1) Mayor que operación estándar (350 kg/m²) porque trabajo en manhole involucra: inspectores, herramientas pesadas (martillos de prueba no destructiva), equipos de rescate si entrada a espacio confinado. (2) NOM-001-STPS requiere factor de seguridad 1.5 sobre cargas reales. Si carga operativa estimada es 350 kg/m² (2-3 personas + herramientas), diseño: 350 × 1.5 = 525 kg/m², redondeado a 500 kg/m². (3) Verificación adicional: Carga concentrada de 1000 kg en cualquier punto (persona con equipo muy pesado). **Área de plataforma:** π(2.4² - 1.0²)/2 = 7.5 m² (semicircular). **Carga total:** 500 × 7.5 = 3,750 kg. **Carga por ménsula (si 6 ménsulas):** 3,750/6 = 625 kg cada una. Verificar capacidad de C10x15.3 en voladizo 1400 mm soporta 625 kg (requerirá cálculo estructural detallado).

---

**Pregunta 3:** Compare los requisitos de OSHA 1910.25 y NOM-001-STPS-2008 para escaleras industriales en los siguientes aspectos: (a) contrahuella máxima, (b) huella mínima, (c) frecuencia de descansos, (d) altura de baranda. Para un proyecto en México de empresa multinacional, ¿qué estándar aplicaría y por qué?

**Respuesta esperada:**

| Aspecto | OSHA 1910.25 | NOM-001-STPS-2008 | Más Restrictivo |
|---------|--------------|-------------------|----------------|
| **(a) Contrahuella máxima** | 241 mm (9.5") | 230 mm | **NOM: 230 mm** |
| **(b) Huella mínima** | 279 mm (11") | 250 mm | **OSHA: 279 mm** |
| **(c) Descansos** | Cada 3658 mm (12') recomendado | Cada 3000 mm obligatorio | **NOM: 3000 mm** |
| **(d) Altura baranda** | 1067 mm ± 76 mm (42" ± 3") | 900 mm ± 50 mm | **OSHA: 1067 mm** (más seguro) |

**Análisis:**
- NOM es más restrictiva en contrahuella (230 vs 241 mm) y descansos (3000 vs 3658 mm).
- OSHA es más restrictiva en huella (279 vs 250 mm) y baranda (1067 vs 900 mm).
- NOM incluye fórmula de Blondel: 2C + H = 610-640 mm (relación ergonómica contrahuella-huella).
- OSHA tiene requisito específico de variación máxima de contrahuella: 6 mm (NOM: 5 mm, más estricto).

**Para proyecto en México de empresa multinacional:**
**Aplicar el más restrictivo de ambos en cada aspecto** (diseño conservador):
- Contrahuella máxima: **230 mm** (NOM)
- Huella mínima: **279 mm** (OSHA)
- Descansos: Cada **3000 mm** máximo (NOM)
- Altura baranda: **1067 mm** (OSHA)
- Variación contrahuella: **5 mm** máximo (NOM)

**Justificación:**
1. Cumplimiento legal: NOM-001-STPS es obligatoria en México (requisito legal de STPS). Incumplimiento resulta en multas y cierre de instalaciones.
2. Estándares corporativos: Empresas multinacionales (especialmente estadounidenses) requieren cumplir OSHA como política corporativa global.
3. Seguridad: Aplicar el más restrictivo garantiza máxima seguridad para trabajadores.
4. Auditorías: Inspecciones pueden ser por STPS (México) o auditorías corporativas (OSHA). Cumplir ambas evita observaciones.
5. Responsabilidad legal: En caso de accidente, demostrar cumplimiento del estándar más estricto reduce responsabilidad.

**Diseño recomendado (cumple ambos):**
```
Contrahuella: 190 mm (< 230 mm NOM, < 241 mm OSHA) ✓
Huella: 280 mm (> 279 mm OSHA, > 250 mm NOM) ✓
Verificación Blondel: 2(190) + 280 = 660 mm (fuera de rango NOM 610-640)
Ajustar: Contrahuella 180 mm → 2(180) + 280 = 640 mm ✓ Límite superior NOM
Descansos: Cada 3000 mm ✓
Baranda: 1067 mm (42") ✓
Ancho: 900 mm (> 560 mm ambos) ✓
```

---

**Pregunta 4:** Describa tres métodos de soporte para plataformas industriales (ménsulas, columnas, colgada), explicando ventajas, desventajas, y aplicaciones típicas de cada uno. Incluya consideraciones de costo, mantenimiento, e impacto en flexibilidad de la planta.

**Respuesta esperada:**

**1. Soporte por Ménsulas (Cantilever):**

**Descripción:** Vigas en voladizo (típicamente canales C o I-beams) empotradas en estructura existente (pipe rack, columnas, equipos), que se extienden horizontalmente para soportar plataforma.

**Ventajas:**
- Económico: Menor cantidad de acero (no requiere columnas completas).
- No ocupa espacio a nivel de piso: Área bajo plataforma queda libre para equipos, tuberías, o tránsito.
- Instalación rápida: Conexión directa a estructura existente.
- Apropiado para plataformas angostas (< 1500 mm ancho).

**Desventajas:**
- Limitación de voladizo: Típicamente máximo L/4 de capacidad de viga (voladizo de 1200-1500 mm es límite práctico con perfiles estándar).
- Requiere estructura existente robusta: Vigas principales deben tener capacidad adicional para soportar ménsulas.
- Deflexión mayor que otros métodos: Voladizos deflectan más que vigas simplemente apoyadas.
- Vibración: Puede transmitirse desde estructura principal a plataforma.

**Aplicaciones típicas:**
- Plataformas de acceso lateral a pipe racks (ancho 900-1200 mm).
- Acceso a válvulas en líneas elevadas.
- Plataformas de instrumentos (angostas).
- Proyectos de expansión/retrofitting donde se agrega plataforma a estructura existente.

**Costo:** $$ (medio) - Menos acero pero requiere ingeniería de conexiones.
**Mantenimiento:** Bajo - Inspeccionar conexiones a estructura principal periódicamente.
**Flexibilidad:** Alta - Fácil de agregar o reubicar en proyectos de expansión.

---

**2. Soporte por Columnas (Column-Supported, Auto-Soportada):**

**Descripción:** Estructura independiente con columnas propias (HSS, W-shapes, o tubos) que se extienden desde cimentación hasta nivel de plataforma, con vigas perimetrales e internas que soportan grating.

**Ventajas:**
- Independiente: No depende de capacidad de estructura existente.
- Sin límite de tamaño: Puede soportar plataformas de cualquier dimensión (áreas grandes 5x5 m+).
- Rigidez: Menor deflexión y vibración que ménsulas.
- Cargas altas: Apropiado para plataformas de mantenimiento con equipo pesado (500-750 kg/m²).
- Claridad estructural: Path de cargas directo (carga → vigas → columnas → cimentación).

**Desventajas:**
- Costo alto: Mayor cantidad de acero (columnas, arriostramientos, bases).
- Ocupa espacio: Columnas a nivel de piso pueden interferir con equipos, tuberías, tránsito de vehículos.
- Requiere cimentación: Cada columna necesita base de concreto con pernos de anclaje (trabajo civil adicional).
- Instalación más compleja: Más componentes, más conexiones, más tiempo de montaje.
- Menos flexible: Difícil de reubicar en futuras expansiones.

**Aplicaciones típicas:**
- Plataformas grandes de mantenimiento (alrededor de grupos de bombas, compresores).
- Áreas de operación con múltiples equipos.
- Plataformas de trabajo donde se realizan tareas que generan cargas altas (ensamblaje, reparación).
- Cuando estructura existente no puede soportar carga adicional.

**Costo:** $$$$ (alto) - Más acero, cimentación, mano de obra.
**Mantenimiento:** Medio - Inspeccionar bases de columnas (corrosión cerca de cimentación), conexiones.
**Flexibilidad:** Baja - Estructura permanente, difícil de modificar.

---

**3. Soporte Colgado (Suspended/Hung):**

**Descripción:** Plataforma cuelga de vigas o estructura superior mediante varillas roscadas, cables, o colgantes. La estructura de la plataforma se suspende en vez de apoyarse desde abajo.

**Ventajas:**
- Espacio libre total abajo: Área bajo plataforma completamente despejada (crítico para equipos grandes o tuberías que cruzan).
- No requiere cimentación: No hay columnas a nivel de piso.
- Flexible en altura: Fácil ajustar elevación de plataforma (ajustar longitud de varillas).
- Apropiado para retrofitting: Agregar plataforma bajo estructura existente (pipe rack, edificio).

**Desventajas:**
- Requiere estructura superior robusta: Vigas superiores deben tener capacidad para carga adicional (verificar capacidad existente).
- Vibración y balanceo: Plataforma puede oscilar si no está arriostrada adecuadamente (incómodo, peligroso).
- Limitación de carga: Generalmente para cargas ligeras-medias (350 kg/m² típico; difícil para cargas muy altas).
- Instalación compleja: Trabajos en altura para instalar conexiones superiores.
- Mantenimiento de conexiones: Varillas roscadas pueden corroerse (especialmente en ambientes químicos).

**Aplicaciones típicas:**
- Plataformas bajo pipe racks para acceso a válvulas en lado inferior de tuberías.
- Acceso a equipos colgados (separadores, filtros suspendidos).
- Áreas donde nivel de piso tiene congestión extrema (refinería, petroquímica).
- Edificios industriales: Plataformas de mantenimiento suspendidas del techo.

**Costo:** $$$ (medio-alto) - Menos acero que auto-soportada, pero instalación en altura es costosa.
**Mantenimiento:** Alto - Inspeccionar varillas/cables periódicamente (corrosión, tensión). Reemplazar varillas cada X años según ambiente.
**Flexibilidad:** Media - Puede reubicarse, pero requiere estructura superior apropiada en nueva ubicación.

---

**Tabla comparativa:**

| Criterio | Ménsulas | Columnas | Colgada |
|----------|----------|----------|---------|
| **Costo inicial** | $$ (bajo) | $$$$ (alto) | $$$ (medio) |
| **Tamaño máximo** | 1.5 m ancho | Ilimitado | Medio (3x3 m) |
| **Carga máxima** | 350 kg/m² | 750+ kg/m² | 350 kg/m² |
| **Espacio piso** | Libre | Ocupado | Libre |
| **Cimentación** | No requerida | Requerida | No requerida |
| **Flexibilidad** | Alta | Baja | Media |
| **Mantenimiento** | Bajo | Medio | Alto |
| **Vibración** | Media | Baja | Alta (si no arriostrada) |

**Selección según aplicación:**
- **Acceso a válvulas lateral de rack:** Ménsulas ✓
- **Área de mantenimiento de bombas (4x3 m, 500 kg/m²):** Columnas ✓
- **Acceso bajo tuberías de rack existente:** Colgada ✓
- **Plataforma grande alrededor de tanque:** Columnas o ménsulas desde tanque (si tanque soporta) ✓

---

**Pregunta 5:** Un diseño de planta industrial incluye una escalera recta de 5000 mm de altura vertical con contrahuella de 210 mm. Al ejecutar el comando `PLANTSTAIRCHECK` en Plant 3D, se detecta no conformidad con OSHA 1910.25 por exceso de altura sin descanso. Explique: (a) cuál es el requisito OSHA incumplido, (b) dos soluciones posibles, (c) para cada solución, calcule número de peldaños, ubicación de descansos, y longitud horizontal total de escalera. Asuma ángulo de 35°.

**Respuesta esperada:**

**(a) Requisito OSHA incumplido:**

OSHA 1910.25(b)(4) recomienda descansos (landings) cada **3658 mm (12 feet)** de altura vertical máximo. Aunque es recomendación (no requisito absoluto obligatorio), es considerado best practice de seguridad industrial y muchas empresas lo adoptan como estándar corporativo obligatorio.

Adicionalmente, NOM-001-STPS-2008 (México) Artículo 9.4 **requiere obligatoriamente** descansos cada **3000 mm** de altura vertical en escaleras de servicio.

**Análisis:**
- Altura de escalera: 5000 mm
- Excede 3658 mm (OSHA recomendación)
- Excede 3000 mm (NOM-001-STPS obligatorio)

**Conclusión:** En proyecto en México, esta escalera incumple NOM-001-STPS obligatorio. Requiere al menos 1 descanso intermedio.

---

**(b) Dos soluciones posibles:**

**Solución 1:** Escalera recta con 1 descanso intermedio a 2500 mm (configuración más simple, mismo eje).

**Solución 2:** Escalera en U con descanso a 2500 mm (cambio de dirección 180°, ahorra espacio horizontal).

---

**(c) Cálculos para cada solución:**

**Solución 1: Escalera recta con descanso intermedio**

**Configuración:**
```
Tramo 1: Elevación 0.00 → +2500 mm (descanso)
Descanso: Elevación +2500 mm
Tramo 2: Elevación +2500 mm → +5000 mm
```

**Tramo 1 (0.00 → +2500 mm):**
- Altura vertical: 2500 mm ✓ (< 3000 mm NOM)
- Contrahuella: 210 mm
- Número de contrahuellas: 2500 / 210 = 11.90 → 12 contrahuellas
- Contrahuella ajustada: 2500 / 12 = 208.33 mm ✓ (dentro de 152-241 mm OSHA, dentro de ≤230 mm NOM)
- Número de huellas: 11 (siempre 1 menos que contrahuellas)

**Cálculo de huella (usando ángulo 35°):**
```
tan(35°) = contrahuella / huella
huella = contrahuella / tan(35°)
huella = 208.33 / 0.7002 = 297.5 mm ✓ (> 279 mm OSHA, > 250 mm NOM)
```

**Verificación fórmula de Blondel (NOM):**
```
2C + H = 2(208.33) + 297.5 = 714.16 mm
Rango NOM: 610-640 mm
714 mm ✗ Excede rango
```

**Problema:** Con ángulo 35°, la huella resultante (297.5 mm) es muy grande y excede fórmula de Blondel de NOM.

**Ajuste:** Reducir huella a cumplir Blondel:
```
Objetivo: 2C + H = 630 mm (centro del rango 610-640)
H = 630 - 2(208.33) = 630 - 416.66 = 213.34 mm ✗ (< 279 mm OSHA mínimo)
```

**Problema 2:** Para cumplir Blondel de NOM con C=208 mm, se requiere H=213 mm, pero esto incumple OSHA mínimo 279 mm.

**Solución:** Ajustar contrahuella a valor menor:
```
Nuevo intento con contrahuella 190 mm:
Número de contrahuellas tramo 1: 2500 / 190 = 13.16 → 13 contrahuellas
Contrahuella ajustada: 2500 / 13 = 192.3 mm ✓

Fórmula Blondel: 2C + H = 630
H = 630 - 2(192.3) = 630 - 384.6 = 245.4 mm ✗ (< 279 mm OSHA)

Nuevo intento con contrahuella 175 mm:
Número: 2500 / 175 = 14.29 → 14 contrahuellas
Contrahuella ajustada: 2500 / 14 = 178.6 mm ✓

Fórmula Blondel: 2C + H = 630
H = 630 - 2(178.6) = 630 - 357.2 = 272.8 mm ✗ (< 279 mm OSHA)

Conclusión: Es IMPOSIBLE cumplir simultáneamente:
- OSHA huella mínima 279 mm
- NOM fórmula Blondel 2C+H = 610-640 mm
con valores razonables de contrahuella (150-230 mm).
```

**Análisis del conflicto:**

El problema es que OSHA y NOM tienen requisitos que pueden ser incompatibles:
- OSHA prioriza huella amplia (≥ 279 mm) para seguridad (pie completo en peldaño).
- NOM usa fórmula de Blondel (ergonomía europea) que favorece contrahuellas más altas con huellas menores.

**Solución práctica (común en México):**

**Opción A:** Cumplir OSHA (si empresa multinacional con política corporativa OSHA):
```
Contrahuella: 190 mm
Huella: 280 mm (mínimo OSHA 279 mm)
Verificación Blondel: 2(190) + 280 = 660 mm (excede rango NOM 610-640 por 20 mm)
```
Documentar desviación menor de NOM (660 vs 640, exceso de 3%), justificar con estándar corporativo OSHA. En práctica, inspectores de STPS raramente rechazan por exceso leve de Blondel si escalera es claramente segura y cómoda.

**Opción B:** Cumplir NOM estricto (si proyecto puramente mexicano):
```
Contrahuella: 190 mm
Huella: 250 mm (mínimo NOM)
Verificación Blondel: 2(190) + 250 = 630 mm ✓ (centro del rango NOM)
Incumple OSHA: Huella 250 mm < 279 mm mínimo OSHA
```
Si empresa no está sujeta a OSHA, esto es aceptable. Huella de 250 mm es usable (común en edificios residenciales en México).

**Para este ejercicio, usar Opción A (cumplir OSHA, desviación leve NOM):**

**Tramo 1 final:**
- Altura: 2500 mm
- Contrahuella: 190 mm
- Número de contrahuellas: 2500 / 190 = 13.16 → **13 contrahuellas**
- Contrahuella ajustada: 2500 / 13 = **192.3 mm** ✓
- Huella: **280 mm** (OSHA mínimo) ✓
- Número de huellas: 12
- **Longitud horizontal tramo 1:** 12 huellas × 280 mm = **3,360 mm**

**Descanso:**
- Elevación: +2500 mm
- Dimensiones: 1000 mm x 1000 mm (mínimo ancho de escalera según OSHA; usar 1000 mm para comodidad)
- **Longitud horizontal descanso:** **1,000 mm** (en dirección de viaje)

**Tramo 2 (+ 2500 mm → +5000 mm):**
- Altura: 2500 mm (igual que tramo 1)
- Parámetros idénticos a tramo 1:
  - 13 contrahuellas de 192.3 mm
  - 12 huellas de 280 mm
- **Longitud horizontal tramo 2:** **3,360 mm**

**Longitud horizontal TOTAL (Solución 1):**
```
Tramo 1: 3,360 mm
Descanso: 1,000 mm
Tramo 2: 3,360 mm
TOTAL: 7,720 mm (7.72 m)
```

**Resumen Solución 1:**
| Parámetro | Valor |
|-----------|-------|
| Configuración | Recta con 1 descanso |
| Descanso en elevación | +2500 mm |
| Contrahuella | 192.3 mm |
| Huella | 280 mm |
| Total contrahuellas | 26 (13 + 13) |
| Total huellas | 24 (12 + 12) |
| Longitud horizontal total | 7,720 mm (7.72 m) |
| Cumplimiento | OSHA ✓, NOM ✓ (descanso cada <3000 mm) |

---

**Solución 2: Escalera en U con descanso**

**Configuración:**
```
Tramo 1: Elevación 0.00 → +2500 mm, dirección NORTE
Descanso: Elevación +2500 mm, giro 180°
Tramo 2: Elevación +2500 mm → +5000 mm, dirección SUR (opuesto a tramo 1)
```

**Cálculos:** Idénticos a Solución 1 para cada tramo (altura, contrahuella, huella).

**Diferencia clave:** Proyección horizontal.

**Tramo 1:**
- Longitud horizontal: 3,360 mm en dirección NORTE

**Descanso:**
- Dimensiones: 1,200 mm (dirección de viaje) x 1,000 mm (ancho escalera)
- Nota: En configuración U, descanso debe ser más profundo para permitir giro de 180°. Usar 1,200 mm mínimo.

**Tramo 2:**
- Longitud horizontal: 3,360 mm en dirección SUR (regresa hacia punto de inicio)

**Proyección horizontal total:**
```
Ancho total = max(longitud de tramo 1, longitud de tramo 2) + ancho de descanso
            = 3,360 mm + 1,200 mm (descanso) + margen entre tramos

Si tramos están directamente opuestos:
Ancho total ≈ 3,360 mm (un tramo) + 1,200 mm (descanso) = 4,560 mm

Pero típicamente se deja espacio entre tramos (gap):
Ancho total ≈ 3,360 mm (tramo 1) + 300 mm (gap) + 900 mm (ancho tramo 2) = 4,560 mm

Profundidad total = ancho de escalera + descanso ≈ 900 mm + 1,200 mm = 2,100 mm
```

**Huella horizontal (footprint) de configuración en U:**
- **Longitud:** Aproximadamente **4,500-5,000 mm** (varía según layout exacto)
- **Ancho:** Aproximadamente **2,000-2,500 mm**

**Comparación con Solución 1 (recta):**
- Solución 1 requiere: 7,720 mm × 900 mm (lineal)
- Solución 2 requiere: ~4,500 mm × ~2,100 mm (área)

**Ventaja de Solución 2:** Ahorra espacio en una dirección (útil si espacio lineal es limitado pero área en planta está disponible).

**Resumen Solución 2:**
| Parámetro | Valor |
|-----------|-------|
| Configuración | U-shape con 1 descanso |
| Descanso en elevación | +2500 mm |
| Contrahuella | 192.3 mm |
| Huella | 280 mm |
| Total contrahuellas | 26 (13 + 13) |
| Total huellas | 24 (12 + 12) |
| Footprint horizontal | ~4,500 mm × ~2,100 mm |
| Cumplimiento | OSHA ✓, NOM ✓ |
| Ventaja | Ahorra espacio lineal |

---

**Recomendación final:**

- **Usar Solución 1 (recta)** si espacio lineal está disponible: Más simple de construir, más fácil de usar (no requiere giro 180°), menos costosa.
- **Usar Solución 2 (U-shape)** si espacio lineal es limitado pero área en planta está disponible: Común en plantas industriales con congestión en una dirección.

En ambos casos, cumplimiento normativo se logra mediante descanso intermedio a elevación que divide la altura total en segmentos < 3000 mm.

## Resumen de la Lección

En esta lección completa sobre **Plataformas y Escaleras** en AutoCAD Plant 3D 2026, hemos cubierto todos los aspectos esenciales para diseñar sistemas de acceso seguro en plantas industriales:

**Plataformas Industriales:**
- Clasificación por función (operación, mantenimiento, inspección, emergencia) y por soporte (auto-soportada, empotrada, colgada)
- Creación de plataformas rectangulares, circulares, y de geometría personalizada
- Configuración de plataformas para acceso a recipientes, intercambiadores, y equipos rotativos
- Dimensiones mínimas según OSHA y NOM-001-STPS

**Rejillas (Grating):**
- Tipos: Electrosoldada (welded), dentada (serrated), prensada (press-locked)
- Materiales: Acero galvanizado, FRP, aluminio
- Especificaciones técnicas (designación 30x3, 40x3, 32x5)
- Selección apropiada según carga, luz libre, y aplicación
- Capacidad de carga y espaciamiento de vigas de soporte

**Escaleras Industriales:**
- Tipos según OSHA 1910.25: Standard stairs, ship ladders, alternating tread stairs, spiral stairs
- Escaleras rectas con cálculo de contrahuella/huella según normativa
- Escaleras con descansos (en L, en U, multinivel)
- Escaleras espirales para espacios restringidos
- Diseño ergonómico: Fórmula de Blondel, ángulos de inclinación, dimensiones de nosing

**Cumplimiento Normativo:**
- Requisitos OSHA 1910.23-29: Dimensiones, capacidades de carga, frecuencia de descansos
- Requisitos NOM-001-STPS-2008 (México): Especificaciones para escaleras de servicio y emergencia
- Comparación y reconciliación entre OSHA y NOM (aplicar el más restrictivo)
- Herramientas de verificación en Plant 3D: `PLANTSTAIRCHECK`, `PLANTPLATFORMCHECK`, Code Compliance Report

**Soportes de Plataformas:**
- Ménsulas (cantilever): Económicas, para plataformas angostas, voladizo limitado
- Columnas (auto-soportadas): Para áreas grandes, cargas altas, independientes
- Colgadas (suspended): Máximo espacio libre abajo, para retrofitting
- Conexiones atornilladas vs soldadas: Diseño, especificación de pernos/soldaduras
- Cálculo básico de capacidad: Distribución de cargas, verificación de perfiles

**Sistemas Completos de Acceso:**
- Integración de plataformas y escaleras en sistemas multinivel
- Diseño para recipientes a presión verticales (acceso a manholes, boquillas, instrumentos)
- Consideraciones de espaciamiento, interferencias, y flujo de personal
- Documentación: Vistas de plano, listas de materiales, reportes de cumplimiento

Esta base completa en diseño de plataformas y escaleras es esencial para crear plantas industriales seguras y funcionales. Los conceptos cubiertos se integrarán en la siguiente lección con **Barandas y Sistemas de Seguridad** (Lección 18), completando los elementos de protección personal. Posteriormente, en Lecciones 19-20, estos sistemas de acceso se integrarán con equipos personalizados y conexiones, formando el modelo completo de la planta.

**Puntos clave para recordar:**
- Siempre diseñar cumpliendo normativa aplicable (OSHA, NOM, o ambos)
- Usar tipo de grating apropiado para aplicación (antiderrapante en áreas húmedas)
- Calcular dimensiones de escaleras cuidadosamente (fórmula de Blondel, límites OSHA/NOM)
- Incluir descansos cada 3000 mm máximo de altura vertical (NOM obligatorio)
- Seleccionar método de soporte según espacio disponible, carga, y economía
- Verificar cumplimiento con herramientas de Plant 3D antes de finalizar diseño
- Documentar cualquier desviación de normativa con justificación técnica

En la próxima lección, completaremos estos sistemas de acceso agregando **Barandas y Sistemas de Seguridad**, elementos críticos para protección contra caídas que son obligatorios en todas las plataformas y escaleras industriales.
