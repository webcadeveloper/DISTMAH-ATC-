# Lección 16: Perfiles Estructurales y Acero

## Información General

**Duración estimada:** 60 minutos
**Nivel:** Intermedio
**Módulo:** 4 - Acero Estructural y Equipos
**Prerequisitos:** Lecciones 1-15

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

1. Configurar y gestionar catálogos de perfiles estructurales según estándares internacionales y mexicanos
2. Colocar y orientar elementos estructurales de acero (vigas, columnas, arriostramientos)
3. Crear y gestionar retículas estructurales (structural grids) para plantas industriales
4. Aplicar métodos de conexión entre miembros estructurales
5. Configurar propiedades de materiales y especificaciones de diseño
6. Gestionar bibliotecas estructurales y personalizar catálogos
7. Diseñar sistemas completos de marcos de acero para soportar equipos industriales

## Introducción

El acero estructural constituye la columna vertebral de cualquier planta industrial moderna. En AutoCAD Plant 3D 2026, el modelado de estructuras metálicas va mucho más allá de simples líneas y bloques: se trata de un sistema paramétrico inteligente que respeta estándares internacionales, maneja especificaciones reales de perfiles, y permite la integración total con equipos, tuberías y soportes.

Las plantas industriales requieren estructuras robustas para soportar equipos pesados como recipientes a presión, intercambiadores de calor, bombas y sistemas de tuberías. El diseñador debe no solo modelar estas estructuras con precisión dimensional, sino también asegurar que cumplan con estándares como AISC (American Institute of Steel Construction), DIN (Deutsches Institut für Normung), o las normas mexicanas IMCA. Plant 3D 2026 proporciona herramientas específicas que permiten trabajar con catálogos completos de perfiles comerciales, facilitando la selección correcta y la generación automática de documentación.

En esta lección exhaustiva, exploraremos todas las capacidades del módulo estructural de Plant 3D, desde la configuración inicial de catálogos hasta el diseño de complejos sistemas de soporte. Aprenderá a crear retículas (grids) que sirven como referencia para toda la planta, a colocar miembros estructurales con métodos precisos de conexión, y a gestionar las propiedades que afectan tanto el modelado 3D como la extracción de listas de materiales. Este conocimiento es fundamental para cualquier ingeniero o diseñador que trabaje en proyectos de plantas industriales en México o Latinoamérica.

## 1. Catálogos de Perfiles Estructurales

### 1.1 Estándares Internacionales y Regionales

AutoCAD Plant 3D 2026 incluye soporte nativo para múltiples estándares de perfiles estructurales utilizados globalmente:

**AISC (American Institute of Steel Construction)**
- Estándar norteamericano más utilizado en México
- Perfiles W (Wide Flange), S (Standard I-Beam), C (Channel), L (Angle)
- Tubos estructurales HSS (Hollow Structural Sections)
- Designación por peso unitario y dimensiones nominales
- Base de datos actualizada según AISC Steel Construction Manual 15th Edition

**DIN (Alemania) y Eurocódigos**
- Perfiles IPE (European I-Beams), HEA/HEB/HEM (European Wide Flange)
- UPN (European Channels), perfiles L (Ángulos)
- Designación métrica por altura y masa
- Utilizados en plantas con equipos europeos

**IMCA (Instituto Mexicano de la Construcción en Acero)**
- Adaptación mexicana de perfiles AISC
- Especificaciones para acero estructural A36, A572 Gr.50, A992
- Consideraciones sísmicas según Manual de Diseño por Sismo CFE
- Disponibilidad de perfiles en el mercado mexicano

**JIS (Japón) y otros estándares asiáticos**
- SS (Standard Section), H-beams japoneses
- Utilizados cuando se importan equipos asiáticos

### 1.2 Configuración del Catálogo Estructural

**Acceder al Catalogo de Estructuras:**

1. Desde la cinta contextual **Plant 3D** → Panel **Structure** → **Catalog Editor**
2. O mediante comando: `PLANTSTRUCTURECATALOG`
3. Se abre el editor de catálogo estructural de Plant 3D

**Estructura del catálogo:**

```
Catalog Root
├── Beams (Vigas)
│   ├── AISC_W_Shapes
│   ├── AISC_S_Shapes
│   ├── DIN_IPE
│   └── Custom_Beams
├── Columns (Columnas)
│   ├── AISC_W_Shapes (para columnas)
│   ├── HSS_Square
│   └── HSS_Round
├── Bracing (Arriostramientos)
│   ├── AISC_L_Shapes (Ángulos)
│   ├── AISC_C_Shapes (Canales)
│   └── HSS_Rectangular
└── Connections (Conexiones)
    ├── Bolted_Connections
    ├── Welded_Connections
    └── Base_Plates
```

**Propiedades clave de cada perfil:**

- **Designation:** Designación comercial (ej: W12x26, IPE 300)
- **Material:** Tipo de acero (A36, A572 Gr.50, A992)
- **Section Properties:**
  - Área de sección transversal (A)
  - Momento de inercia (Ix, Iy)
  - Radio de giro (rx, ry)
  - Módulo de sección (Sx, Sy)
- **Dimensions:**
  - Altura (d), ancho de patín (bf)
  - Espesor de alma (tw), espesor de patín (tf)
- **Weight:** Peso lineal (kg/m o lb/ft)

![Catálogo de perfiles estructurales](../imagenes/leccion-16-catalogo-perfiles.png)

### 1.3 Personalización de Catálogos para el Mercado Mexicano

**Agregar perfiles disponibles en México:**

Muchos proyectos en México requieren verificar disponibilidad real de perfiles en distribuidores locales como Ternium, Deacero, o importadores regionales.

**Procedimiento:**

1. En el Catalog Editor, clic derecho en carpeta **Beams** → **Add Standard**
2. Seleccionar estándar base (AISC) y filtrar por perfiles disponibles
3. Crear categoría personalizada: **AISC_Mexico_Available**
4. Agregar solo perfiles verificados con proveedores:
   - W8x10, W8x13, W8x15, W8x18
   - W10x12, W10x15, W10x19, W10x22
   - W12x14, W12x16, W12x19, W12x26
   - W14x22, W14x26, W14x30
   - Canales C y ángulos L comunes

5. Asignar propiedades de material según especificación mexicana:
   - **Material:** A36 (Fy = 2,530 kg/cm²)
   - **Material:** A572 Gr.50 (Fy = 3,515 kg/cm²)
   - **Coating:** Galvanizado, pintura anticorrosiva, o "bare"

**Consideraciones sísmicas:**

Para zonas sísmicas de México (particularmente zona D en costas del Pacífico):

- Preferir secciones compactas que permiten diseño plástico
- Verificar relaciones ancho-espesor según AISC 341 (Seismic Provisions)
- Documentar factores de ductilidad requeridos (Q según NTC-Sismo)

### 1.4 Importación de Catálogos Personalizados

**Formato de archivo de catálogo:**

Plant 3D utiliza archivos XML para definir catálogos estructurales. Puede crear o modificar estos archivos para incluir perfiles específicos.

**Ubicación de catálogos:**
```
C:\ProgramData\Autodesk\PlantSDK 2026\Catalogs\Steel\
```

**Estructura XML básica:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SteelCatalog version="2026">
  <BeamSection>
    <Designation>W12x26</Designation>
    <Standard>AISC</Standard>
    <Material>A992</Material>
    <Dimensions>
      <Depth unit="mm">311</Depth>
      <FlangeWidth unit="mm">165</FlangeWidth>
      <WebThickness unit="mm">6.4</WebThickness>
      <FlangeThickness unit="mm">9.9</FlangeThickness>
    </Dimensions>
    <Properties>
      <Area unit="mm2">4968</Area>
      <Weight unit="kg/m">38.7</Weight>
      <Ix unit="mm4">1.456E8</Ix>
      <Iy unit="mm4">1.863E7</Iy>
    </Properties>
  </BeamSection>
</SteelCatalog>
```

**Importar catálogo personalizado:**

1. Colocar archivo XML en carpeta de catálogos
2. En Plant 3D: **Project Manager** → **Project Properties** → **Steel Catalog Path**
3. **Add Path** → Seleccionar carpeta con catálogo personalizado
4. **Refresh Catalog** para cargar nuevos perfiles
5. Verificar disponibilidad en **Catalog Editor**

## 2. Colocación de Elementos Estructurales

### 2.1 Creación de Retículas Estructurales (Structural Grids)

Las retículas son fundamentales para organizar la estructura de una planta industrial. Definen ejes de columnas, referencia para equipos, y coordinación entre disciplinas.

**Comando para crear grid:**

1. Cinta **Plant 3D** → Panel **Structure** → **Structural Grid**
2. O comando: `PLANTSTRUCTGRID`

**Tipos de retículas:**

**Retícula Rectangular Ortogonal:**
- Parámetros:
  - **Spacing X:** Espaciamiento entre ejes en dirección X (típico: 6000-9000 mm)
  - **Spacing Y:** Espaciamiento entre ejes en dirección Y
  - **Grid Lines:** Número de líneas en cada dirección
  - **Elevation:** Nivel de referencia (típico: 0.00)

**Ejemplo de retícula para área de proceso:**

```
Spacing X: 7500 mm (crujía típica industrial)
Spacing Y: 6000 mm
Lines X: 8 (A, B, C, D, E, F, G, H)
Lines Y: 5 (1, 2, 3, 4, 5)
Elevation: 0.00
```

**Nomenclatura de ejes:**
- Ejes longitudinales: Letras (A, B, C, D...)
- Ejes transversales: Números (1, 2, 3, 4...)
- Intersección: A1, B2, C3, etc.

**Retícula Radial:**

Para áreas con tanques cilíndricos o geometrías circulares:

- **Center Point:** Punto central del tanque
- **Radial Lines:** Número de radios (típico: 8, 12, o 16)
- **Rings:** Número de círculos concéntricos
- **Ring Spacing:** Distancia entre anillos

![Retícula estructural ortogonal](../imagenes/leccion-16-grid-ortogonal.png)

**Propiedades de líneas de grid:**

- **Label Style:** Estilo de etiquetas (A-Z, 1-100)
- **Line Type:** Tipo de línea (continua, punteada)
- **Layer:** Capa de AutoCAD (típico: A-GRID o S-GRID)
- **Color:** Color distintivo (típico: cian o verde)
- **Extension:** Extensión más allá de última columna

**Edición de grids:**

1. Seleccionar grid existente
2. Clic derecho → **Grid Properties**
3. **Add Gridline:** Agregar ejes adicionales
4. **Delete Gridline:** Eliminar ejes
5. **Modify Spacing:** Cambiar espaciamiento selectivamente

### 2.2 Colocación de Columnas

Las columnas son elementos verticales que transmiten cargas de vigas y equipos a la cimentación.

**Comando:**

1. **Plant 3D** → **Structure** → **Place Column**
2. O: `PLANTCOLUMN`

**Procedimiento detallado:**

1. **Seleccionar perfil de columna:**
   - En el catálogo: AISC W-Shapes para columnas (W10, W12, W14)
   - O HSS (Hollow Structural Sections) para columnas tubulares
   - Ejemplo: W12x72 para carga pesada, W10x49 para carga media

2. **Especificar método de colocación:**
   - **At Grid Intersection:** Colocar en intersección de grid (recomendado)
   - **Pick Point:** Punto libre
   - **Along Line:** A lo largo de línea de referencia

3. **Si usa Grid Intersection:**
   - Seleccionar intersección (ej: A1, B1, C1)
   - Plant 3D coloca columna automáticamente centrada en eje

4. **Definir elevaciones:**
   - **Base Elevation:** Elevación de base (típico: 0.00 o nivel de cimentación)
   - **Top Elevation:** Elevación superior
   - O especificar **Height:** Altura de columna

**Ejemplo - Columnas para rack de tuberías:**

```
Perfil: W10x49
Base Elevation: 0.00
Top Elevation: +6000 mm
Ubicaciones: Grid A1, A2, A3, A4
              Grid F1, F2, F3, F4
Material: A992 (Fy = 345 MPa)
```

**Orientación de columnas:**

- **Rotation:** Ángulo de rotación en planta
- **Web Direction:** Dirección del alma (crítico para conexiones)
- Típicamente se orienta alma paralela al eje fuerte del edificio

**Bases de columnas:**

Plant 3D permite agregar placas base y anclajes:

1. Seleccionar columna → Clic derecho → **Add Base Plate**
2. Especificar:
   - **Plate Size:** Dimensiones de placa (típico: 400x400 mm)
   - **Thickness:** Espesor (típico: 20-30 mm)
   - **Anchor Bolts:** Pernos de anclaje (tipo, diámetro, arreglo)
   - **Grout:** Lechada de nivelación

![Colocación de columnas en grid](../imagenes/leccion-16-colocacion-columnas.png)

### 2.3 Colocación de Vigas

Las vigas son elementos horizontales que conectan columnas y soportan cargas de equipos, plataformas, y tuberías.

**Comando:**

1. **Plant 3D** → **Structure** → **Place Beam**
2. O: `PLANTBEAM`

**Métodos de colocación:**

**Método 1: Entre columnas existentes**

1. Ejecutar comando `PLANTBEAM`
2. **Select First Column:** Seleccionar primera columna
3. **Select Second Column:** Seleccionar segunda columna
4. **Beam Profile:** Seleccionar perfil (ej: W12x26)
5. **Elevation:** Especificar elevación de viga
6. **Connection Type:** Tipo de conexión (soldada, atornillada)

La viga se crea automáticamente entre columnas, ajustando longitud.

**Método 2: Por puntos de inicio y fin**

1. Ejecutar comando `PLANTBEAM`
2. **Start Point:** Especificar punto inicial (puede usar OSNAP)
3. **End Point:** Especificar punto final
4. **Beam Profile:** Seleccionar perfil
5. **Orientation:** Definir orientación (patín arriba/abajo)

**Método 3: A lo largo de línea grid**

1. Ejecutar comando `PLANTBEAM`
2. **Select Grid Line:** Seleccionar línea de grid
3. **Beam Profile:** Seleccionar perfil
4. Plant 3D crea vigas entre todas las intersecciones de ese eje

**Orientación de vigas:**

- **Top Flange Elevation:** Elevación de patín superior (referencia común)
- **Bottom Flange Elevation:** Elevación de patín inferior
- **Web Vertical:** Mantener alma vertical (recomendado)
- **Rotation:** Rotación sobre eje longitudinal (0°, 90°, etc.)

**Ejemplo - Vigas principales de rack de tuberías:**

```
Perfil: W12x26
Ubicación: Entre columnas A1-F1, A2-F2, A3-F3, A4-F4
Elevación: +6000 mm (top of steel)
Orientación: Alma vertical, patín superior como referencia
Luz libre: 37,500 mm (5 crujías x 7500 mm)
Conexión: Atornillada a alma de columna
```

**Vigas secundarias:**

Para soportar tuberías o equipos entre vigas principales:

```
Perfil: W10x15 o C8x11.5 (más ligero)
Ubicación: Perpendicular a vigas principales
Espaciamiento: 2000-3000 mm típico
Conexión: Clips o ángulos de conexión
```

### 2.4 Colocación de Arriostramientos

Los arriostramientos (bracing) proporcionan estabilidad lateral y resistencia a cargas sísmicas o de viento.

**Tipos de arriostramientos:**

**Arriostramiento en X:**
- Dos diagonales cruzadas en panel
- Más efectivo para rigidez
- Típico en marcos perimetrales

**Arriostramiento en K:**
- Dos diagonales que se encuentran en punto medio de columna
- Reduce longitud libre de compresión
- Usado cuando hay puertas o aberturas

**Arriostramiento Concéntrico:**
- Diagonales que concurren en un punto
- Diseño sísmico según AISC 341

**Arriostramiento Excéntrico:**
- Diagonales que NO concurren en un punto
- Crea "link" para disipación de energía sísmica
- Diseño avanzado para alta sismicidad

**Comando:**

1. **Plant 3D** → **Structure** → **Place Bracing**
2. O: `PLANTBRACING`

**Procedimiento:**

1. **Bracing Type:** Seleccionar tipo (X, K, Single Diagonal)
2. **Profile:** Seleccionar perfil (típico: L ángulos o HSS)
3. **Select First Point:** Punto inicial (ej: base de columna)
4. **Select Second Point:** Punto final (ej: tope de columna adyacente)
5. **Connection Type:** Tipo de conexión en extremos

**Ejemplo - Arriostramiento sísmico:**

```
Tipo: X-Bracing
Perfil: L4x4x3/8 (Ángulo 102x102x9.5 mm)
Ubicación: Paneles A1-A2 y F1-F2 (extremos de edificio)
Elevación: De 0.00 a +6000 mm
Material: A36
Conexión: Soldada a placas de conexión (gusset plates)
```

**Conexiones de arriostramientos:**

Plant 3D puede generar automáticamente:

- **Gusset Plates:** Placas triangulares de conexión
- **Bolt Patterns:** Patrones de pernos según AISC Manual
- **Weld Symbols:** Símbolos de soldadura en planos

![Arriostramientos en marcos estructurales](../imagenes/leccion-16-arriostramientos.png)

## 3. Métodos de Conexión

### 3.1 Conexiones Viga-Columna

**Tipos principales:**

**Conexión de Cortante Simple (Simple Shear Connection):**
- También llamada "conexión flexible" o "pin connection"
- Transmite solo cortante, permite rotación
- Métodos:
  - **Single Plate (Shear Tab):** Placa única soldada a columna, atornillada a viga
  - **Double Angles:** Dos ángulos conectando alma de viga a columna
  - **End Plate:** Placa en extremo de viga

**Conexión de Momento (Moment Connection):**
- Transmite momento flector y cortante
- NO permite rotación (conexión rígida)
- Métodos:
  - **Welded Flange Plate:** Placas soldadas a patines
  - **Bolted Extended End Plate:** Placa extendida atornillada
  - **Fully Welded:** Completamente soldada (campo o taller)

**Configuración en Plant 3D:**

1. Seleccionar viga ya colocada
2. Clic derecho → **Beam Properties** → pestaña **Connections**
3. **Start Connection:** Configurar conexión en inicio
4. **End Connection:** Configurar conexión en fin

**Parámetros de conexión:**

- **Connection Type:** Simple Shear, Moment, Fixed, etc.
- **Fastener Type:** Soldadura (weld) o pernos (bolts)
- **Plate Thickness:** Espesor de placas de conexión
- **Bolt Grade:** Grado de pernos (A325, A490)
- **Bolt Size:** Diámetro (3/4", 7/8", 1")
- **Bolt Pattern:** Patrón (según tablas AISC)

**Ejemplo - Conexión típica de rack de tuberías:**

```
Tipo: Simple Shear (Single Plate)
Placa: 9.5 mm x 200 mm x 300 mm, A36
Soldadura: Placa a columna - E70XX, 6 mm filete
Pernos: (4) A325-N 3/4" diámetro
Patrón: 2 filas x 2 columnas, espaciamiento 75 mm
```

### 3.2 Conexiones de Arriostramiento

**Gusset Plates (Placas de Conexión):**

Para conectar arriostramientos diagonales a vigas y columnas:

1. Seleccionar arriostramiento
2. Clic derecho → **Bracing Properties** → **Connections**
3. **Add Gusset Plate**

**Parámetros:**

- **Plate Size:** Dimensiones (determinar por análisis)
- **Thickness:** Espesor (típico: 12-20 mm)
- **Edge Distance:** Distancia de pernos a borde
- **Whitmore Section:** Ancho efectivo para verificación

**Diseño de gusset plates:**

Según AISC Design Guide 29, verificar:

- Resistencia al bloque de cortante (block shear)
- Pandeo de placa en compresión
- Fluencia en sección de Whitmore

### 3.3 Bases de Columnas

**Tipos de bases:**

**Base Plate con Pernos de Anclaje:**
- Placa de acero soldada a base de columna
- Pernos embebidos en concreto
- Grout entre placa y concreto

**Procedimiento en Plant 3D:**

1. Seleccionar columna
2. Clic derecho → **Add Base Plate**
3. Especificar:

```
Plate Dimensions: 400 mm x 400 mm
Plate Thickness: 25 mm (A36)
Anchor Bolts: (4) 25 mm diámetro A36
Bolt Pattern: Cuadrado 300 mm x 300 mm
Bolt Projection: 400 mm (longitud embebida)
Grout Thickness: 50 mm (típico)
```

**Conexiones especiales:**

- **Column Splices:** Empalmes de columnas en altura
- **Beam Splices:** Empalmes de vigas por longitud de transporte
- **Hinge Connections:** Articulaciones para expansión térmica

![Detalles de conexiones](../imagenes/leccion-16-conexiones-detalle.png)

## 4. Propiedades de Materiales y Especificaciones

### 4.1 Materiales de Acero Estructural

**Aceros comunes según ASTM:**

**A36:**
- Acero al carbono de uso general
- Fy = 250 MPa (36 ksi)
- Más económico, amplia disponibilidad en México
- Aplicaciones: Estructuras ligeras, arriostramientos, placas

**A572 Grado 50:**
- Acero de alta resistencia y baja aleación (HSLA)
- Fy = 345 MPa (50 ksi)
- Mayor resistencia que A36 con mismo peso
- Aplicaciones: Columnas, vigas principales con cargas altas

**A992:**
- Estándar moderno para vigas W
- Fy = 345 MPa (50 ksi), Fu = 450 MPa
- Relación Fy/Fu controlada (mejor para diseño sísmico)
- Aplicaciones: Vigas y columnas en marcos resistentes a momento

**Configurar material en Plant 3D:**

1. Seleccionar elemento estructural (columna, viga, etc.)
2. **Properties** paleta → **Material**
3. Seleccionar de lista o **Define New Material**

**Propiedades de material personalizadas:**

```
Material Name: A36_Mexico
Yield Strength (Fy): 250 MPa
Ultimate Strength (Fu): 400 MPa
Elastic Modulus (E): 200,000 MPa
Poisson Ratio: 0.3
Density: 7850 kg/m³
Thermal Expansion: 11.7 µm/m·°C
```

### 4.2 Acabados y Protección

**Acabados típicos:**

**Pintura Anticorrosiva:**
- Para ambientes industriales normales
- Sistema: Primario + Intermedio + Acabado
- Espesor: 125-250 µm DFT (Dry Film Thickness)

**Galvanizado por Inmersión en Caliente:**
- Para ambientes corrosivos (marinos, químicos)
- Norma: ASTM A123 o ASTM A153
- Espesor: 85 µm mínimo

**Pintura Intumescente:**
- Protección contra fuego (fire rating)
- Especificar resistencia: 1 hora, 2 horas, 3 horas
- Según norma UL 263 o ASTM E119

**Configurar en Plant 3D:**

1. **Properties** → **Coating/Finish**
2. Opciones:
   - **None (Bare Steel):** Acero sin protección
   - **Painted:** Pintura (especificar sistema)
   - **Galvanized:** Galvanizado
   - **Fire-Proofing:** Protección contra fuego

**Impacto en listas de materiales:**

El acabado especificado aparece en:
- Bill of Materials (BOM)
- Especificaciones de compra
- Cálculo de costos (área de superficie para pintura/galvanizado)

### 4.3 Códigos y Estándares de Diseño

**Especificar norma de diseño:**

En **Project Properties** → **Structural Standards**:

- **Design Code:** AISC 360 (LRFD o ASD)
- **Seismic Provisions:** AISC 341 (si aplica)
- **Connection Standard:** AISC Manual of Steel Construction
- **Load Combinations:** ASCE 7 o CFE México

**Factores de seguridad:**

Para diseño LRFD (Load and Resistance Factor Design):

```
Phi (φ) factors:
- Tensión: 0.90
- Compresión: 0.90
- Flexión: 0.90
- Cortante: 1.00
- Aplastamiento: 0.75
```

**Normativa mexicana:**

- **NTC-Diseño por Sismo:** Normas Técnicas Complementarias del DF (ahora CDMX)
- **CFE Manual de Diseño de Obras Civiles:** Para estructuras de CFE
- **MOC-2008:** Manual de Obras Civiles de CFE
- Referencia a AISC para diseño de miembros

## 5. Creación de Retículas Estructurales Avanzadas

### 5.1 Grids para Plantas Industriales Complejas

**Grid para área de tanques:**

```
Tipo: Radial + Ortogonal combinado
Centro: Tanque de almacenamiento principal
Radios: 8 líneas (cada 45°)
Anillos: 3 círculos concéntricos
Radio interior: 5000 mm (área de boquillas)
Radio medio: 10000 mm (área de plataforma)
Radio exterior: 15000 mm (área de escaleras y accesos)
```

**Grid multinivel:**

Para plantas con múltiples elevaciones:

1. Crear grid base en elevación 0.00
2. **Copy Grid to Elevation:**
   - Comando: `PLANTGRIDCOPY`
   - Elevación: +4500 mm (nivel de piso operativo)
   - Elevación: +9000 mm (nivel de plataforma superior)

3. Cada grid puede tener ejes adicionales o removidos según necesidad

**Grids desplazados (Offset Grids):**

Para áreas donde equipos requieren retícula diferente:

1. **Offset Distance:** Desplazar grid 3750 mm (mitad de crujía)
2. Crear ejes intermedios: A', B', C' entre A-B-C
3. Útil para equipos que no caen en intersección regular

### 5.2 Etiquetado y Referencia de Grids

**Estilos de etiquetas:**

1. **Grid Label Style Manager:**
   - Acceso: **Manage** → **Styles** → **Grid Label Styles**

2. Componentes de estilo:
   - **Label Text:** Contenido (letra, número, personalizado)
   - **Text Height:** Altura de texto (típico: 200-300 mm escala 1:1)
   - **Circle Diameter:** Diámetro de círculo de etiqueta
   - **Leader:** Línea guía (si/no)
   - **Position:** Arriba/abajo/izquierda/derecha de línea

**Ejemplo de estilo para planos ejecutivos:**

```
Nombre: Grid_Label_Structural
Text Height: 250 mm
Font: Arial (sans-serif, legible)
Circle: 500 mm diámetro, línea continua
Position: Ambos extremos de línea grid
Color: Por capa (Layer: S-GRID-TEXT)
```

**Etiquetas en planos:**

- Las etiquetas de grid aparecen automáticamente en vistas de planta
- En vistas de elevación, mostrar solo grids relevantes
- En isométricos, grids no se muestran (usar dimensiones)

### 5.3 Gestión de Grids en Proyectos Grandes

**Organización por áreas:**

Para plantas con múltiples unidades de proceso:

```
Unidad 100 - Recepción:
  Grid: 100-A, 100-B, 100-C / 100-1, 100-2, 100-3

Unidad 200 - Proceso:
  Grid: 200-A, 200-B, 200-C / 200-1, 200-2, 200-3

Unidad 300 - Almacenamiento:
  Grid: 300-A, 300-B, 300-C / 300-1, 300-2, 300-3
```

**Referencias cruzadas:**

- Columnas referenciadas por grid: **Column A1-100** (eje A1, unidad 100)
- Vigas: **Beam A1-B1@EL+6000** (entre A1 y B1, elevación +6000)
- Facilita coordinación entre disciplinas (civil, mecánico, eléctrico)

![Grid multinivel para planta industrial](../imagenes/leccion-16-grid-multinivel.png)

## 6. Sistemas de Marcos de Acero

### 6.1 Diseño de Racks de Tuberías (Pipe Racks)

Los pipe racks son estructuras de acero que soportan múltiples líneas de tuberías elevadas, comunes en plantas petroquímicas, refinería, y procesos.

**Componentes típicos:**

**Columnas:**
- Perfiles: W10x49 a W14x90 (según carga)
- Altura típica: 6000-9000 mm sobre nivel de piso
- Basas: Placas base con 4 pernos de anclaje

**Vigas principales (longitudinales):**
- Perfiles: W12x26 a W18x50
- Luz: 6000-9000 mm (entre columnas)
- Orientación: Patín superior nivelado

**Vigas secundarias (transversales):**
- Perfiles: W10x15, C8x11.5, o ángulos
- Espaciamiento: 2000-3000 mm
- Soportan directamente las tuberías

**Arriostramientos:**
- Diagonales: L4x4x3/8 o HSS 4x4x1/4
- En ambas direcciones (longitudinal y transversal)
- Cada 2-3 crujías

**Procedimiento de modelado:**

1. **Crear grid base:**
   ```
   Dirección longitudinal: Ejes 1, 2, 3, 4, 5 (cada 7500 mm)
   Dirección transversal: Ejes A, B (separados por ancho de rack, típico 6000 mm)
   ```

2. **Colocar columnas:**
   ```
   Perfil: W10x49
   Ubicaciones: A1, A2, A3, A4, A5, B1, B2, B3, B4, B5
   Base: 0.00
   Top: +6000 mm
   ```

3. **Colocar vigas longitudinales:**
   ```
   Perfil: W12x26
   Entre: A1-A2-A3-A4-A5 (línea A)
          B1-B2-B3-B4-B5 (línea B)
   Elevación: +6000 mm (top of steel)
   ```

4. **Colocar vigas transversales:**
   ```
   Perfil: C8x11.5
   Entre: A1-B1, A2-B2, A3-B3, A4-B4, A5-B5
   Elevación: +6000 mm
   Adicionales cada 2500 mm a lo largo del rack
   ```

5. **Arriostramientos:**
   ```
   En elevación (plano vertical longitudinal):
   - X-bracing entre A1-A2 y A4-A5
   - Perfil: L4x4x3/8

   En planta (bajo vigas principales):
   - Horizontal bracing en panel central
   - Perfil: L3x3x5/16
   ```

**Consideraciones de diseño:**

- **Cargas:** Peso de tuberías + contenido + nieve/viento
- **Deflexión:** Límite L/240 para vigas (evitar estrés en tuberías)
- **Expansión térmica:** Juntas de expansión cada 60-90 m
- **Acceso:** Espacio para mantenimiento (mínimo 600 mm entre tuberías)

### 6.2 Marcos para Soporte de Equipos

**Marcos para intercambiadores de calor:**

Intercambiadores horizontales requieren marcos específicos:

**Elementos:**

1. **Columnas de soporte:**
   ```
   Perfil: W12x65 (carga alta de equipo lleno)
   Altura: Variable según elevación requerida de equipo
   Ubicación: Bajo cada saddle (montura) del intercambiador
   ```

2. **Vigas de carga (Saddle Beams):**
   ```
   Perfil: W16x40
   Función: Transmitir carga puntual de saddle a columnas
   Longitud: Ancho de intercambiador + margen
   ```

3. **Vigas de arriostramiento:**
   ```
   Perfil: C10x15.3
   Función: Estabilidad lateral
   Ubicación: Entre columnas, bajo vigas de carga
   ```

**Ejemplo - Intercambiador 1200 mm diámetro x 6000 mm largo:**

```
Peso operativo: 15,000 kg
Saddles: 2 monturas, separadas 0.25L = 1500 mm de extremos
Reacción por saddle: 7,500 kg

Estructura:
- (4) Columnas W12x65, altura 3000 mm
- (2) Vigas saddle W16x40, luz 2500 mm
- (4) Vigas arriostramiento C10x15.3
- Placas de montaje saddles: 25 mm espesor, 500x500 mm
```

**Marcos para recipientes verticales:**

Recipientes verticales requieren:

**Estructura tipo "skirt" (falda):**
- Cilindro de acero soldado directamente al recipiente
- No modelado en Plant 3D (parte del recipiente)

**Estructura tipo "Leg Support" (patas):**

```
Número de patas: 4 (mínimo), 6 u 8 para recipientes grandes
Perfil de patas: HSS 6x6x3/8 (tubo cuadrado)
Altura: Según elevación de fondo de recipiente
Arriostramientos: Entre patas, perfiles L o HSS menores
Base: Placa base individual por pata
```

**Procedimiento de modelado en Plant 3D:**

1. Modelar recipiente vertical (ver Lección 19)
2. Determinar ubicación de patas (típico: círculo concéntrico)
3. Colocar columnas (patas) en ubicaciones calculadas
4. Agregar vigas de arriostramiento entre patas (horizontal y diagonal)
5. Agregar placas de montaje en tope de patas

### 6.3 Estructuras para Plataformas Elevadas

Plataformas elevadas son esenciales para acceso a equipos, válvulas, e instrumentos. Se cubrirán en detalle en Lección 17, pero aquí su integración estructural:

**Componentes estructurales de plataformas:**

**Vigas perimetrales:**
- Definen borde de plataforma
- Perfil: C10x15.3 o W10x15
- Soportan rejilla (grating) y barandas

**Vigas de piso:**
- Soportan carga de plataforma
- Espaciamiento: según especificación de grating (típico 1000 mm)
- Perfil: C8x11.5

**Conexiones a estructura principal:**
- Plataformas se apoyan en vigas del rack o marcos de equipos
- Conexiones: Atornilladas (permiten desmontaje)
- Considerar tolerancias de construcción (+/- 10 mm)

![Sistema de rack de tuberías completo](../imagenes/leccion-16-pipe-rack-completo.png)

## 7. Gestión de Biblioteca Estructural

### 7.1 Biblioteca de Conexiones Estándar

Plant 3D permite crear biblioteca de conexiones reutilizables:

**Crear conexión estándar:**

1. Diseñar conexión completa (placas, pernos, soldaduras)
2. Seleccionar todos los componentes
3. **Create Block** (comando AutoCAD: `BLOCK`)
4. **Name:** Nombre descriptivo (ej: "Conn_Beam_W12_to_Col_W10_SimpleShear")
5. **Base Point:** Punto de inserción (típico: centro de conexión)
6. **Save to:** Carpeta de biblioteca del proyecto

**Organizar biblioteca:**

```
C:\PlantProjects\[Proyecto]\Structural Library\
├── Connections\
│   ├── Beam_to_Column\
│   │   ├── Simple_Shear\
│   │   ├── Moment\
│   │   └── Hinge\
│   ├── Beam_to_Beam\
│   ├── Bracing\
│   └── Base_Plates\
├── Custom_Members\
│   ├── Built_Up_Sections\
│   └── Specialty_Shapes\
└── Details\
    ├── Stiffeners\
    ├── Gusset_Plates\
    └── Splice_Plates\
```

**Reutilizar conexión:**

1. Comando: `INSERT`
2. **Browse** → Seleccionar bloque de conexión
3. **Insert Point:** Punto donde aplicar conexión
4. **Scale:** Verificar escala 1:1
5. **Rotate:** Ajustar rotación según orientación de miembros

### 7.2 Familias Paramétricas de Miembros

Para perfiles especiales o built-up sections (secciones armadas):

**Crear sección armada:**

Ejemplo: Viga cajón (box beam) para cargas muy altas

```
Componente 1: Placa superior 400 mm x 20 mm
Componente 2: Placa inferior 400 mm x 20 mm
Componente 3: Placa alma izquierda 600 mm x 12 mm
Componente 4: Placa alma derecha 600 mm x 12 mm
Soldaduras: Filete continuo 8 mm

Propiedades calculadas:
- Área: 34,400 mm²
- Ix: 1.156 x 10⁹ mm⁴
- Iy: 4.64 x 10⁸ mm⁴
- Peso: 270 kg/m
```

**Definir en catálogo:**

1. **Catalog Editor** → **Add Custom Section**
2. **Section Type:** Built-Up
3. **Components:** Definir cada placa (dimensiones, posición)
4. **Calculate Properties:** Plant 3D calcula propiedades automáticamente
5. **Add to Catalog:** Guardar como perfil reutilizable

**Familia paramétrica:**

Para secciones con dimensiones variables (ej: vigas cajón de diferentes alturas):

```
Parámetro: Height (H)
Rango: 400-1200 mm (incrementos de 100 mm)

Placa superior: 400 x 20 mm (constante)
Placa inferior: 400 x 20 mm (constante)
Placas alma: H x 12 mm (variable según parámetro)

Designación: Box_400xH_20-12
```

### 7.3 Plantillas de Proyectos

Crear plantillas para tipos recurrentes de proyectos:

**Plantilla "Pipe Rack Estándar":**

Incluye:
- Grid predefinido (7500 mm spacing)
- Columnas tipo (W10x49)
- Vigas principales tipo (W12x26)
- Biblioteca de conexiones aprobadas
- Capas y estilos de anotación estándar
- Especificaciones de materiales (A36, A992)

**Crear plantilla:**

1. Configurar proyecto modelo con todos los estándares
2. **Save As Template:**
   - Archivo → **Save As** → **AutoCAD Drawing Template (*.dwt)**
   - Ubicación: `C:\PlantProjects\Templates\`
   - Nombre: `Pipe_Rack_Standard_Template.dwt`

3. Al iniciar nuevo proyecto:
   - **New Project** → **From Template**
   - Seleccionar `Pipe_Rack_Standard_Template.dwt`
   - Toda configuración se carga automáticamente

**Plantillas por industria:**

- **Petroquímica:** Especificaciones API, materiales para alta temperatura
- **Alimentos/Farmacéutica:** Acero inoxidable, acabados sanitarios
- **Minería:** Cargas pesadas, estructuras robustas
- **Energía:** Códigos sísmicos estrictos, redundancia estructural

![Biblioteca de conexiones estándar](../imagenes/leccion-16-biblioteca-conexiones.png)

## 8. Integración con Equipos y Tuberías

### 8.1 Coordinación con Equipos Mecánicos

La estructura debe diseñarse considerando:

**Ubicación de equipos:**
- Intercambiadores de calor sobre vigas saddle
- Bombas sobre bases de concreto (modelar estructura de soporte si elevadas)
- Recipientes verticales con leg supports o skirt
- Tanques atmosféricos sobre estructura de soporte (si elevados)

**Procedimiento de coordinación:**

1. **Importar modelo de equipos** (desde Lección 19):
   - Equipos ya modelados con ubicación y elevación

2. **Analizar puntos de soporte:**
   - Para intercambiador: ubicación de saddles
   - Para recipiente: ubicación de patas o proyección de skirt

3. **Diseñar estructura de soporte:**
   - Colocar columnas alineadas con puntos de carga
   - Vigas dimensionadas para carga del equipo + márgenes

4. **Verificar interferencias:**
   - Uso de **Interference Check** de Plant 3D
   - Detectar colisiones entre estructura y boquillas de equipos
   - Ajustar ubicación de miembros estructurales si necesario

### 8.2 Soporte de Tuberías

La estructura metálica también soporta sistemas de tuberías:

**Tipos de soporte desde estructura:**

**Soportes colgantes (Hangers):**
- Tuberías cuelgan de vigas superiores
- Elementos: Varilla roscada, abrazadera de tubería
- Modelado: Ver Lección 15 (Soportes de Tubería)

**Soportes en ménsulas (Cantilever):**
- Vigas secundarias en voladizo desde estructura principal
- Soportan tuberías paralelas a estructura
- Perfiles típicos: C8, C10 en voladizo

**Diseño de ménsula para tuberías:**

```
Viga principal: W12x26 (del rack)
Ménsula: C10x15.3
Largo de voladizo: 1200 mm (máximo L/4 de capacidad)
Conexión: Ángulos atornillados a alma de viga principal
Soporte de tubería: A 900 mm del empotramiento
Carga: 500 kg (tubería Ø200 + contenido + aislamiento)
```

**Consideración de expansión térmica:**

- Tuberías de alta temperatura se expanden
- Estructura debe permitir movimiento en soportes (usar guías, no anclajes)
- Coordinar con diseño de flexibilidad de tuberías (Lección 11)

### 8.3 Cargas y Análisis Estructural

**Cargas típicas en plantas industriales:**

**Carga muerta (Dead Load - DL):**
- Peso propio de estructura de acero
- Peso de equipos (vacíos)
- Peso de tuberías (vacías)
- Peso de plataformas, escaleras, barandas
- Aislamiento térmico

**Carga viva (Live Load - LL):**
- Personal de operación y mantenimiento (típico: 350 kg/m² en plataformas)
- Equipos portátiles
- Nieve (si aplica, según zona geográfica)

**Carga operativa:**
- Contenido de tuberías (líquidos, gases)
- Contenido de equipos (recipientes llenos)
- Pruebas hidrostáticas (peor caso: agua en vez de fluido de proceso)

**Cargas ambientales:**
- **Viento:** Según ASCE 7 o CFE Manual de Diseño de Obras Civiles
  - Velocidad básica: Varía por región de México (150-200 km/h en costas)
  - Presión dinámica: 1.0-2.0 kPa típico

- **Sismo:** Según NTC-Sismo o ASCE 7
  - Zona sísmica de México: A (baja), B, C, D (muy alta)
  - Coeficiente sísmico: 0.10 (zona A) a 0.40+ (zona D)
  - Sistemas de resistencia sísmica: Marcos arriostrados concéntricamente

**Análisis en Plant 3D:**

Plant 3D no realiza análisis estructural completo (no es software FEA), pero:

1. **Extrae información para análisis externo:**
   - Geometría de miembros (longitudes, perfiles)
   - Conexiones (articulaciones vs rígidas)
   - Cargas (peso de equipos/tuberías desde modelo)

2. **Exportar a software de análisis:**
   - **STAAD.Pro** (Bentley)
   - **SAP2000** (CSI)
   - **ETABS** (CSI)
   - **Robot Structural Analysis** (Autodesk)

**Flujo de trabajo:**

```
Plant 3D (Modelo 3D)
    ↓ Export (Structural Analysis Format)
SAP2000 / STAAD.Pro (Análisis)
    ↓ Verificación de capacidad
Revisión de diseño
    ↓ Ajustes necesarios
Plant 3D (Actualizar modelo)
```

**Verificaciones básicas en Plant 3D:**

Aunque no hace análisis completo, puede verificar:

- **Member Capacity:** Comparar perfil usado vs requerido (basado en cargas ingresadas manualmente)
- **Deflection Check:** Alerta si deflexiones exceden límites (L/240, L/360)
- **Connection Check:** Validar que conexiones tienen capacidad adecuada

![Integración estructura-equipos-tuberías](../imagenes/leccion-16-integracion-completa.png)

## Ejercicio Práctico: Diseño de Marco Estructural para Rack de Tuberías

**Objetivo:** Diseñar estructura completa de acero para un rack de tuberías de una planta industrial.

**Especificaciones del proyecto:**

```
Longitud total: 30,000 mm (4 crujías de 7,500 mm)
Ancho: 6,000 mm (ancho de rack)
Altura: 6,000 mm (nivel de piso a tope de vigas)
Carga de tuberías: 1,500 kg/m (promedio, distribuida)
Material: A992 para columnas y vigas principales, A36 para secundarias
Ubicación: Monterrey, NL (zona sísmica B)
```

**Procedimiento paso a paso:**

**Paso 1: Crear proyecto y configurar catálogo (5 min)**

1. Nuevo proyecto Plant 3D: **File** → **New** → **Plant 3D Project**
2. Nombre: `Ejercicio_16_Pipe_Rack`
3. Configurar catálogo estructural:
   - **Manage** → **Steel Catalog**
   - Verificar disponibilidad de perfiles AISC W, C, L
   - Confirmar materiales A36 y A992

**Paso 2: Crear grid estructural (5 min)**

1. Comando: `PLANTSTRUCTGRID`
2. Configuración:
   ```
   Type: Rectangular
   Direction X (longitudinal):
     Spacing: 7500 mm
     Number of lines: 5 (ejes 1, 2, 3, 4, 5)
     Labels: 1, 2, 3, 4, 5

   Direction Y (transversal):
     Spacing: 6000 mm
     Number of lines: 2 (ejes A, B)
     Labels: A, B

   Base Elevation: 0.00
   ```

3. Verificar que grid cubre área 30 m x 6 m

**Paso 3: Colocar columnas (8 min)**

1. Comando: `PLANTCOLUMN`
2. Seleccionar perfil: **W10x49** (A992)
3. Método: **At Grid Intersection**
4. Colocar en todas las intersecciones:
   - A1, A2, A3, A4, A5 (5 columnas)
   - B1, B2, B3, B4, B5 (5 columnas)
   - Total: 10 columnas

5. Especificar elevaciones:
   - **Base Elevation:** 0.00
   - **Top Elevation:** +6000 mm

6. Orientación:
   - **Web Direction:** Paralelo a eje transversal (eje A-B)
   - Esto orienta eje fuerte de columna en dirección longitudinal

**Paso 4: Colocar vigas principales longitudinales (7 min)**

1. Comando: `PLANTBEAM`
2. Seleccionar perfil: **W12x26** (A992)
3. Colocar vigas en eje A:
   - **Start:** Columna A1
   - **End:** Columna A5 (viga continua)
   - Alternativamente: Vigas simples A1-A2, A2-A3, A3-A4, A4-A5

4. Repetir para eje B: B1 a B5

5. Especificar:
   - **Elevation:** +6000 mm (top of steel)
   - **Orientation:** Patín superior horizontal
   - **Connection Type:** Simple Shear en extremos (a columnas)

**Paso 5: Colocar vigas transversales (7 min)**

1. Comando: `PLANTBEAM`
2. Seleccionar perfil: **C8x11.5** (A36)
3. Colocar vigas entre ejes A y B:
   - Principales: A1-B1, A2-B2, A3-B3, A4-B4, A5-B5 (5 vigas en columnas)
   - Intermedias: Cada 2500 mm a lo largo
     - Entre 1-2: 2 vigas intermedias
     - Entre 2-3: 2 vigas intermedias
     - Entre 3-4: 2 vigas intermedias
     - Entre 4-5: 2 vigas intermedias
   - Total intermedias: 8 vigas

4. Elevación: +6000 mm (todas al mismo nivel)

**Paso 6: Agregar arriostramientos (8 min)**

1. **Arriostramientos verticales (en elevación):**

   a. Comando: `PLANTBRACING`
   b. Tipo: **X-Bracing**
   c. Perfil: **L4x4x3/8** (A36)
   d. Ubicación: Paneles extremos
      - Panel A1-A2 (lado oeste)
      - Panel A4-A5 (lado este)
      - Desde elevación 0.00 a +6000 mm

2. **Arriostramientos horizontales (en planta):**

   a. Crear arriostramientos bajo vigas principales
   b. Perfil: **L3x3x5/16** (A36)
   c. Ubicación: Panel central 3-4, entre vigas A y B
   d. Patrón en X

**Paso 7: Configurar conexiones (6 min)**

1. Seleccionar vigas principales (W12x26)
2. **Properties** → **Connections**
3. Configurar conexión en extremos:
   ```
   Type: Simple Shear (Single Plate)
   Plate: 250 mm height, 9.5 mm thick
   Bolts: (4) A325 3/4" diameter
   Pattern: 2 rows x 2 columns
   ```

4. Seleccionar arriostramientos
5. **Add Gusset Plate:**
   ```
   Dimensions: Determinar por geometría (típico: triángulo 300x300x420 mm)
   Thickness: 12 mm
   ```

**Paso 8: Agregar bases de columnas (4 min)**

1. Seleccionar todas las columnas (usar ventana de selección)
2. Clic derecho → **Add Base Plate**
3. Configurar:
   ```
   Plate Size: 400 mm x 400 mm
   Thickness: 25 mm
   Anchor Bolts: (4) 25 mm diameter, A36
   Bolt Pattern: 300 mm x 300 mm square
   Projection: 400 mm below base plate
   Grout Thickness: 50 mm
   ```

**Paso 9: Verificar modelo (5 min)**

1. **View** → **Isometric View** para visualizar estructura completa
2. **Interference Check:**
   - Comando: `INTERFERENCECHECK`
   - Seleccionar todos los miembros estructurales
   - Verificar que NO hay interferencias

3. Verificar alineaciones:
   - Todas las vigas principales deben estar al mismo nivel (+6000 mm)
   - Columnas verticales perfectas
   - Arriostramientos correctamente conectados

**Paso 10: Generar documentación (5 min)**

1. **Bill of Materials:**
   - Comando: `PLANTBOM`
   - Tipo: **Structural Steel**
   - Generar lista con:
     - Designación de perfil
     - Longitud total por tipo
     - Peso total por tipo
     - Cantidad de piezas

2. Ejemplo de salida esperada:
   ```
   BILL OF MATERIALS - STRUCTURAL STEEL

   COLUMNS:
   W10x49 (A992):
     Quantity: 10 pieces
     Length per piece: 6000 mm
     Total length: 60,000 mm (60 m)
     Unit weight: 72.9 kg/m
     Total weight: 4,374 kg

   BEAMS - MAIN:
   W12x26 (A992):
     Quantity: 10 pieces (2 long + 8 between columns)
     Total length: 90,000 mm (90 m)
     Unit weight: 38.7 kg/m
     Total weight: 3,483 kg

   BEAMS - SECONDARY:
   C8x11.5 (A36):
     Quantity: 13 pieces
     Length per piece: 6000 mm
     Total length: 78,000 mm (78 m)
     Unit weight: 17.1 kg/m
     Total weight: 1,334 kg

   BRACING:
   L4x4x3/8 (A36):
     Quantity: 8 pieces (diagonal bracing)
     Average length: 8,485 mm (varies)
     Total weight: ~600 kg (estimate)

   TOTAL STRUCTURAL STEEL: ~9,800 kg
   ```

3. **Crear vistas de plano:**
   - Vista en planta (Plan View) mostrando grid y ubicación de columnas
   - Elevación lateral mostrando arriostramientos
   - Detalles de conexiones típicas

**Entregables esperados:**

1. Modelo 3D completo del rack en Plant 3D
2. Bill of Materials (BOM) con peso total de acero
3. Vistas de plano (planta y elevación) en layout
4. Lista de verificación completada:
   - [ ] Grid correctamente espaciado (7500 mm x 6000 mm)
   - [ ] 10 columnas en ubicaciones correctas
   - [ ] Vigas principales continuas en ejes A y B
   - [ ] Vigas secundarias cada 2500 mm (aproximadamente)
   - [ ] Arriostramientos en paneles extremos y centro
   - [ ] Conexiones configuradas (tipo y especificación)
   - [ ] Bases de columnas con placas y anclajes
   - [ ] Sin interferencias detectadas
   - [ ] BOM generado con pesos totales

**Criterios de evaluación:**

- **Precisión dimensional (30%):** Grid y ubicaciones según especificaciones
- **Selección de perfiles (25%):** Perfiles apropiados para cargas y luces
- **Conexiones y detalles (20%):** Conexiones correctamente especificadas
- **Completitud (15%):** Todos los elementos requeridos presentes
- **Documentación (10%):** BOM y vistas de plano correctas

**Tiempo total estimado: 60 minutos**

## Preguntas de Evaluación

**Pregunta 1:** ¿Cuál es la diferencia fundamental entre un perfil AISC W12x26 y un perfil DIN IPE 300, y en qué situaciones de proyecto en México utilizaría cada uno?

**Respuesta esperada:** El perfil AISC W12x26 es un Wide Flange americano con designación basada en peso (26 lb/ft) y altura nominal (12 pulgadas). El IPE 300 es un perfil europeo con designación métrica (300 mm de altura). En México, usaría AISC W para proyectos con equipos norteamericanos y especificaciones en unidades inglesas (mayoría de plantas petroquímicas), mientras que IPE se usaría en proyectos con equipos europeos o cuando el cliente especifica estándares europeos. La disponibilidad en México favorece perfiles AISC en distribuidores como Ternium o Deacero.

---

**Pregunta 2:** Explique la importancia de crear retículas estructurales (grids) al inicio del modelado de una planta industrial, y describa cómo organizaría un grid para una planta con tres áreas de proceso distintas.

**Respuesta esperada:** Los grids son fundamentales porque: (1) establecen sistema de referencia común para todas las disciplinas (civil, mecánico, eléctrico), (2) facilitan ubicación de equipos y estructura, (3) permiten comunicación clara entre equipos de diseño ("columna en A-3"), (4) aseguran alineaciones y modulación correctas. Para tres áreas distintas, usaría prefijos numéricos: Área 100 (Recepción) con grid 100-A, 100-B, 100-1, 100-2; Área 200 (Proceso) con grid 200-A, 200-B, 200-1, 200-2; Área 300 (Almacenamiento) con grid 300-A, 300-B, 300-1, 300-2. Esto evita duplicaciones y facilita identificación de ubicación por área.

---

**Pregunta 3:** Un intercambiador de calor horizontal de 15,000 kg requiere soporte estructural. Describa los elementos estructurales necesarios, especificando tipos de perfiles y método de conexión entre estructura y equipo.

**Respuesta esperada:** Elementos necesarios: (1) **Columnas:** 4 unidades, perfil W12x65 o superior según altura requerida, ubicadas bajo cada punto de apoyo de las 2 saddles (monturas). (2) **Vigas saddle:** 2 unidades, perfil W16x40, una bajo cada saddle, transmiten carga concentrada a columnas. Longitud según ancho del intercambiador + margen para conexiones. (3) **Vigas de arriostramiento:** Perfiles C10 o C12, conectan columnas para estabilidad lateral. (4) **Placas de montaje:** Placas de acero 25 mm espesor, soldadas a vigas saddle, con pernos para fijar saddles del intercambiador. (5) **Arriostramientos:** Diagonales L4x4 entre columnas. Conexión equipo-estructura: Pernos de anclaje desde saddle del intercambiador hacia placas de montaje, permitiendo desmontaje para mantenimiento.

---

**Pregunta 4:** Compare las conexiones tipo "Simple Shear" vs "Moment Connection" para unión viga-columna en un rack de tuberías. ¿Cuál sería apropiada y por qué? Incluya consideraciones de costo y comportamiento estructural.

**Respuesta esperada:** **Simple Shear Connection:** Transmite solo cortante, permite rotación (articulada). Componentes: Single plate (shear tab) o ángulos dobles. **Ventajas:** Menor costo (menos material, fabricación más simple), más rápida instalación, permite tolerancias constructivas. **Comportamiento:** Estructura se clasifica como "braced frame" que requiere arriostramientos para resistir cargas laterales. **Moment Connection:** Transmite momento y cortante, NO permite rotación (rígida). Componentes: Placas soldadas a patines o extended end plate. **Ventajas:** Crea "moment frame" que resiste cargas laterales sin arriostramientos adicionales. **Desventajas:** Mayor costo (60-100% más que simple shear), fabricación compleja, instalación más lenta.

**Para rack de tuberías típico:** Usar **Simple Shear** porque: (1) Cargas son principalmente verticales (peso de tuberías), (2) Se agregan arriostramientos de bajo costo para cargas laterales, (3) Economía significativa en fabricación e instalación, (4) Es práctica estándar en industria para racks. Usar Moment solo si: altura del rack excede 12 m, cargas laterales muy altas, o arriostramientos interfieren con tuberías.

---

**Pregunta 5:** En un proyecto de planta industrial en zona sísmica D de México (costa del Pacífico), ¿qué consideraciones especiales debe tener al seleccionar perfiles estructurales y diseñar conexiones? Mencione normativa aplicable.

**Respuesta esperada:** **Consideraciones para zona sísmica D (alta sismicidad):**

**Selección de perfiles:**
- Preferir secciones compactas que permiten comportamiento dúctil (diseño plástico).
- Verificar relaciones ancho-espesor según AISC 341 (Seismic Provisions) para clasificación "highly ductile members".
- Para columnas: W-shapes con bf/2tf ≤ 0.30√(E/Fy) para patines compactos.
- Para vigas: h/tw ≤ 2.45√(E/Fy) para alma compacta.
- Material: Preferir A992 sobre A36 por relación Fy/Fu controlada (mejor para diseño sísmico).

**Diseño de conexiones:**
- Conexiones deben desarrollar capacidad plástica del miembro (no falla en conexión).
- Para moment frames: Usar conexiones precalificadas según AISC 358.
- Evitar conexiones frágiles (soldaduras de penetración completa en campo requieren inspección).
- Pernos de alta resistencia: A490 en zonas críticas.

**Normativa aplicable:**
- **NTC-Diseño por Sismo (CDMX)** o normas estatales equivalentes.
- **CFE Manual de Diseño de Obras Civiles:** Capítulo de Diseño por Sismo.
- **AISC 341:** Seismic Provisions for Structural Steel Buildings.
- **AISC 360:** Specification for Structural Steel Buildings (diseño básico).

**Sistemas resistentes a sismo:**
- Marcos arriostrados concéntricamente (SCBF - Special Concentrically Braced Frame) para ductilidad alta.
- Factor de reducción sísmica Q: 3 a 4 según sistema y regularidad.
- Detallado especial en conexiones de arriostramientos (gusset plates con resistencia adecuada).

## Resumen de la Lección

En esta lección exhaustiva sobre **Perfiles Estructurales y Acero** en AutoCAD Plant 3D 2026, hemos cubierto todos los aspectos fundamentales del modelado de estructuras metálicas para plantas industriales:

**Catálogos y Estándares:**
- Configuración de catálogos de perfiles según estándares AISC, DIN, e IMCA México
- Personalización de catálogos para disponibilidad local en mercado mexicano
- Especificación de materiales (A36, A572 Gr.50, A992) y acabados (pintura, galvanizado)

**Retículas Estructurales:**
- Creación de grids ortogonales y radiales como base del diseño
- Nomenclatura y etiquetado de ejes (letras y números)
- Organización de grids multinivel y por áreas de proceso

**Elementos Estructurales:**
- Colocación precisa de columnas en intersecciones de grid o puntos libres
- Modelado de vigas principales y secundarias con métodos de conexión
- Diseño de arriostramientos (X-bracing, K-bracing) para estabilidad y resistencia sísmica

**Conexiones:**
- Diferenciación entre conexiones de cortante simple (articuladas) y de momento (rígidas)
- Configuración de placas, pernos y soldaduras según AISC
- Diseño de gusset plates para arriostramientos y bases de columnas

**Sistemas Completos:**
- Racks de tuberías: diseño integral de columnas, vigas y arriostramientos
- Marcos para soporte de equipos: intercambiadores, recipientes, tanques
- Integración con plataformas, escaleras y sistemas de acceso (ver Lección 17)

**Biblioteca y Gestión:**
- Creación de biblioteca de conexiones estándar reutilizables
- Definición de secciones armadas (built-up sections) para aplicaciones especiales
- Plantillas de proyecto para tipos recurrentes de plantas industriales

**Coordinación e Integración:**
- Coordinación con modelos de equipos mecánicos (sin interferencias)
- Soporte de sistemas de tuberías con consideración de cargas y expansión térmica
- Extracción de información para análisis estructural en software especializado (SAP2000, STAAD.Pro)

**Normativa y Especificaciones:**
- Aplicación de códigos AISC 360 (diseño) y AISC 341 (sísmico)
- Consideraciones para zonas sísmicas de México según NTC-Sismo y CFE
- Especificaciones de materiales y fabricación según ASTM

Esta base sólida en modelado de acero estructural es esencial para las siguientes lecciones del módulo, donde agregaremos plataformas (Lección 17), barandas (Lección 18), y la integración completa con equipos personalizados (Lecciones 19-20). El dominio de estos conceptos permite diseñar plantas industriales completas con estructuras robustas, seguras y conformes con todos los estándares aplicables en México y Latinoamérica.

**Puntos clave para recordar:**
- Siempre iniciar con grid bien planificado
- Seleccionar perfiles apropiados según cargas y disponibilidad local
- Usar conexiones simples cuando sea posible (economía)
- Verificar normativa sísmica para zona del proyecto
- Coordinar estructura con equipos y tuberías desde etapa temprana de diseño
- Documentar selecciones de materiales y especificaciones para fabricación

En la próxima lección, construiremos sobre esta estructura de acero agregando **Plataformas y Escaleras**, elementos críticos para acceso seguro y operación de la planta industrial.
