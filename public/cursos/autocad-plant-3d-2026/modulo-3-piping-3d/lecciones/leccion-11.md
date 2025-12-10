# Lección 11: Modelado de Equipos y Colocación

**Duración:** 60 minutos
**Nivel:** Intermedio
**Módulo:** 3 - Diseño de Tuberías 3D
**Prerequisitos:** Módulos 1 y 2 completados

---

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

1. Colocar equipos de proceso desde el catálogo estándar de AutoCAD Plant 3D 2026 con precisión y eficiencia
2. Crear y configurar equipos personalizados utilizando plantillas paramétricas avanzadas
3. Configurar y orientar boquillas (nozzles) de equipos conforme a estándares de conexión de tuberías
4. Establecer propiedades de datos de equipos para integración con sistemas de gestión de activos
5. Implementar sistemas de etiquetado y numeración según convenciones de proyectos industriales
6. Optimizar la colocación estratégica de equipos considerando accesibilidad, mantenimiento y routing de tuberías
7. Gestionar bibliotecas de equipos y configurar catálogos personalizados de proyecto

---

## Introducción

El modelado y colocación de equipos de proceso constituye el punto de partida fundamental en cualquier proyecto de diseño de instalaciones industriales con AutoCAD Plant 3D. Los equipos —bombas, tanques, recipientes, intercambiadores de calor, compresores, filtros— representan el corazón funcional de toda planta de proceso, y su posicionamiento estratégico determina la eficiencia del enrutamiento de tuberías, la accesibilidad para mantenimiento, la seguridad operacional y, en última instancia, los costos de instalación y operación de la planta.

En proyectos reales de refinerías, plantas petroquímicas y de procesamiento de gas natural, la colocación de equipos no es simplemente un ejercicio de arrastrar y soltar objetos 3D. Requiere consideración cuidadosa de múltiples factores ingenieriles: espaciamiento de seguridad conforme a códigos (API, NFPA), requisitos de acceso para mantenimiento, cargas estructurales, conexiones de tuberías (nozzles), instrumentación, requisitos de ventilación, drenaje, rutas de evacuación de emergencia, y compatibilidad con el layout general de la planta.

AutoCAD Plant 3D 2026 proporciona un catálogo extenso de equipos parametrizados que cumplen con estándares industriales (API 610 para bombas centrífugas, API 650 para tanques de almacenamiento, API 661 para intercambiadores enfriados por aire, TEMA para intercambiadores tubulares, ASME Section VIII para recipientes a presión), permitiendo al diseñador seleccionar e insertar equipos con las dimensiones, ratings, materiales y configuraciones de conexión apropiados para cada aplicación específica.

Más allá de la colocación básica, esta lección aborda la configuración avanzada de boquillas (nozzles) —los puntos de conexión donde las tuberías se unen a los equipos— considerando orientación, tamaño, rating de presión, y facing de bridas. La correcta configuración de nozzles es crítica, ya que errores en esta etapa se propagan a través de todo el proceso de enrutamiento de tuberías, generando reprocesos costosos en fases avanzadas del proyecto.

La capacidad de crear equipos personalizados mediante plantillas paramétricas es igualmente crucial. Muchos proyectos incluyen equipos especializados o no estándar que deben modelarse desde cero: reactores customizados, columnas de destilación con configuraciones específicas, separadores especiales, scrubbers, equipos patentados de proveedores específicos. Plant 3D 2026 permite crear estos equipos como objetos inteligentes con propiedades de datos completas, asegurando que se integren perfectamente con el flujo de trabajo del proyecto.

Esta lección también cubre sistemas de etiquetado y numeración de equipos conforme a convenciones industriales (sistemas P&ID tag numbering), gestión de propiedades de datos para integración con sistemas CMMS (Computerized Maintenance Management Systems), y estrategias de organización de bibliotecas de equipos para proyectos multi-disciplinarios de gran escala.

Los diseñadores que dominan estos conceptos están preparados para roles de **Equipment Layout Designer**, **Piping Designer**, **Plant 3D Modeler** en empresas EPC (Engineering, Procurement, Construction) de nivel internacional, con salarios iniciales superiores a $55,000 USD anuales en mercados emergentes y $75,000-$95,000 USD en mercados desarrollados.

---

## 1. Fundamentos del Catálogo de Equipos de Plant 3D

### 1.1 Estructura del Catálogo de Equipos

AutoCAD Plant 3D 2026 organiza los equipos de proceso en un catálogo jerárquico basado en **Spec-Driven Content**, donde cada equipo está asociado a especificaciones que definen sus propiedades, dimensiones disponibles, materiales, ratings y configuraciones de conexión.

**Componentes del Catálogo:**

**A. Categorías de Equipos Principales:**

- **Vessels (Recipientes):** Recipientes verticales y horizontales, separadores, acumuladores, knockout drums, scrubbers
- **Tanks (Tanques):** Tanques atmosféricos, tanques a presión, tanques de almacenamiento API 650
- **Exchangers (Intercambiadores):** Shell & tube, plate, air-cooled (API 661), doble tubo
- **Pumps (Bombas):** Centrífugas (API 610), desplazamiento positivo, bombas verticales
- **Compressors (Compresores):** Centrífugos, reciprocantes, rotativos de tornillo
- **Filters (Filtros):** Cartridge, bag, basket, coalescers
- **Inline Devices (Dispositivos en línea):** Strainers, trampas de vapor, silenciadores, flame arrestors

**B. Equipos Parametrizados:**

Cada equipo del catálogo es un objeto paramétrico, lo que significa que sus dimensiones y configuraciones se ajustan mediante parámetros controlados:

```
Ejemplo: Recipiente Vertical (Vertical Vessel)
- Parámetros geométricos: Diámetro (D), Altura tangente a tangente (H), Tipo de cabeza (elíptica, hemisférica, plana)
- Parámetros de nozzles: Cantidad, ubicación angular, elevación, tamaño
- Parámetros de materiales: Material del shell, rating de presión, temperatura de diseño
- Parámetros de accesorios: Faldones (skirt), patas de soporte, plataformas, escaleras
```

**C. Niveles de Detalle (LOD - Level of Detail):**

Plant 3D gestiona equipos en múltiples niveles de detalle según la fase del proyecto:

- **LOD 100 (Conceptual):** Forma geométrica básica, volumen aproximado
- **LOD 200 (Schematic):** Geometría aproximada con ubicación de nozzles principales
- **LOD 300 (Design Development):** Modelo detallado con todos los nozzles, accesorios, dimensiones precisas
- **LOD 400 (Fabrication/Construction):** Modelo completo con detalles de fabricación, pernos, soportes internos

Para diseño de tuberías (fase de ingeniería de detalle), generalmente trabajamos en LOD 300.

### 1.2 Acceso al Catálogo de Equipos

**Paleta de Herramientas (Tool Palette):**

La forma más eficiente de acceder al catálogo es mediante la **Equipment Tool Palette**:

1. **Activar Paleta:** Ribbon → Plant 3D tab → Insert panel → Equipment Tool Palette
2. **Navegación:** Las paletas están organizadas por tipo de equipo
3. **Búsqueda rápida:** Campo de búsqueda permite filtrar por nombre o tipo

**Project Manager - Equipment Catalog:**

Acceso completo al catálogo con capacidades de filtrado avanzado:

1. Project Manager panel → Equipment tab
2. Catalog Browser: vista jerárquica de todas las categorías
3. Filtros: por tipo, tamaño, material, rating

**Content Manager:**

Para administración y customización del catálogo:

1. Ribbon → Plant 3D tab → Project panel → Content Manager
2. Permite agregar, modificar, eliminar contenido
3. Gestión de especificaciones y propiedades

![Interfaz del Equipment Catalog en Project Manager](../imagenes/leccion-11-equipment-catalog.png)

### 1.3 Especificaciones de Equipos (Equipment Specs)

Las **especificaciones** controlan qué equipos están disponibles en un proyecto específico. Funcionan como filtros que limitan el catálogo completo a solo los equipos apropiados para las condiciones de diseño del proyecto.

**Componentes de una Equipment Spec:**

```
Ejemplo: Spec "PROC-VESSELS-CS-150"
(Recipientes de proceso en Carbon Steel, 150 psig)

- Material: Carbon Steel ASTM A516 Grade 60
- Pressure Rating: 150 psig @ 400°F
- Temperature Range: -20°F to 500°F
- Nozzle Facings: Raised Face (RF) Class 150
- Corrosion Allowance: 1/8" (3.2 mm)
- Fabrication Standard: ASME Section VIII Div 1
```

**Creación de Specs Personalizadas:**

En proyectos reales, los ingenieros de tuberías/proceso definen especificaciones basadas en:

- Condiciones de proceso (presión, temperatura, fluido)
- Materiales de construcción aprobados
- Códigos aplicables (ASME, API, ISO)
- Estándares de la empresa/cliente

AutoCAD Plant 3D permite importar estas specs desde archivos Excel o bases de datos SQL.

---

## 2. Colocación de Equipos desde el Catálogo

### 2.1 Método de Inserción Directa

El método más simple para colocar equipos es la inserción directa desde la paleta de herramientas.

**Procedimiento Paso a Paso:**

**Paso 1: Seleccionar Equipo del Catálogo**

1. Abrir Equipment Tool Palette (Ribbon → Plant 3D → Insert → Equipment Tool Palette)
2. Navegar a la categoría deseada (ej: Vessels → Vertical Vessels)
3. Seleccionar el tipo específico (ej: "Vertical Vessel - Elliptical Heads")

**Paso 2: Especificar Parámetros de Tamaño**

Cuando se selecciona un equipo, Plant 3D muestra el cuadro de diálogo **Equipment Size Selection**:

```
Equipment Properties:
- Equipment Type: Vertical Vessel
- Head Type: 2:1 Elliptical (top and bottom)
- Diameter: [Seleccionar de lista desplegable]
  → Opciones típicas: 36", 48", 60", 72", 84", 96", 120"
- Tangent-to-Tangent Height: [Ingresar valor]
  → Ejemplo: 240" (20 ft)
- Shell Thickness: [Calculado según spec]
  → Ejemplo: 0.375" (3/8")
```

**Paso 3: Configurar Opciones de Inserción**

```
Insertion Options:
- Insertion Point: [Especificar punto base]
  → Generalmente: Centro del equipo en el nivel de plataforma
- Rotation: [Ángulo en planta]
  → Ejemplo: 0° (Norte), 90° (Este)
- Elevation: [Cota de referencia]
  → Ejemplo: Elevación de piso de planta = 100'-0"
```

**Paso 4: Colocar en el Modelo**

1. Click en el botón **Insert** del cuadro de diálogo
2. Plant 3D cambia a modo de inserción (cursor con vista previa del equipo)
3. **Especificar punto de inserción:** Click en ubicación deseada
   - Use osnaps (endpoint, midpoint, intersection) para precisión
   - O ingrese coordenadas: Ejemplo: `100,50,0` (X, Y, Z)
4. **Especificar rotación:**
   - Click para aceptar ángulo por defecto
   - O ingrese ángulo: Ejemplo: `45` (45 grados desde eje X)

**Resultado:** El equipo se inserta como un objeto inteligente Plant 3D con todas sus propiedades de datos.

![Proceso de inserción de equipo desde paleta](../imagenes/leccion-11-insercion-equipo.png)

### 2.2 Inserción con Especificación de Ubicación Precisa

Para proyectos profesionales, la colocación precisa es crítica. Existen varios métodos avanzados:

**A. Coordenadas Absolutas:**

```
Comando: INSERT EQUIPMENT
1. Seleccionar equipo del catálogo
2. En prompt "Specify insertion point":
   Ingresar coordenadas absolutas: 1250.5,875.25,100
   (X=1250.5 ft, Y=875.25 ft, Elevación=100 ft)
```

**B. Coordenadas Relativas:**

Útil cuando se conoce la distancia desde un punto de referencia:

```
1. Seleccionar equipo
2. Click en punto de referencia (ej: esquina de estructura)
3. Ingresar coordenadas relativas: @50,25,0
   (50 ft en X, 25 ft en Y desde el punto de referencia)
```

**C. Inserción Basada en Grilla (Grid Lines):**

En plantas industriales, los equipos se posicionan en intersecciones de grillas estructurales:

```
Ejemplo: Posicionar bomba en intersección de Grid Lines A-3
1. Usar osnap "Intersection"
2. Seleccionar intersección de líneas A y 3
3. Elevar a cota de plataforma usando coordenada Z
```

**D. Alineación con Equipos Existentes:**

```
Método: Tracking y Distance Offset
1. Insertar primer equipo (Bomba P-101)
2. Para insertar segundo equipo (Bomba P-102) alineado:
   - Activar osnap "Node" y "Perpendicular"
   - Usar tracking desde centro de P-101
   - Especificar distancia: Ejemplo: 8 ft (espaciamiento típico entre bombas)
```

### 2.3 Propiedades de Equipos Insertados

Una vez insertado, cada equipo tiene propiedades detalladas accesibles mediante:

**Properties Palette (Paleta de Propiedades):**

```
Select Equipment → Properties Palette (Ctrl+1)

General Properties:
- Equipment Tag: [Auto-generado o manual] Ejemplo: "V-101"
- Service Description: Ejemplo: "Reflux Drum"
- Spec: Ejemplo: "PROC-VESSELS-CS-150"

Dimensional Properties:
- Diameter (OD): 60" (1524 mm)
- Height (T-T): 240" (6096 mm)
- Shell Thickness: 0.375" (9.5 mm)
- Head Type: 2:1 Elliptical
- Volume: 4712 gallons (17,839 liters)

Material Properties:
- Shell Material: Carbon Steel A516-60
- Head Material: Carbon Steel A516-60
- Pressure Rating: 150 psig
- Design Temperature: 450°F

Location Properties:
- Insertion Point: X=1250.5, Y=875.25, Z=100.0
- Rotation: 0.0°
- Elevation (Bottom): 100'-0"
- Elevation (Top): 120'-0"
```

**Data Manager:**

Para gestión masiva de propiedades:

1. Ribbon → Plant 3D → Reports & Data → Data Manager
2. Filtrar por tipo de equipo
3. Editar propiedades en formato tabla

![Properties Palette mostrando propiedades de equipo](../imagenes/leccion-11-properties-equipo.png)

---

## 3. Configuración de Boquillas (Nozzles)

Las **boquillas (nozzles)** son las conexiones donde las tuberías se unen a los equipos. La configuración correcta de nozzles es absolutamente crítica en el diseño de tuberías.

### 3.1 Anatomía de un Nozzle

Un nozzle de equipo en Plant 3D contiene información completa de conexión:

```
Nozzle Properties:
- Nozzle ID: N1, N2, N3... (nomenclatura del proyecto)
- Service: "Feed Inlet", "Product Outlet", "Drain", "Vent"
- Size: 6" NPS (Nominal Pipe Size)
- Rating: Class 150, 300, 600, 900, 1500, 2500
- Facing: RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint)
- Orientation: Azimuth (ángulo en planta), Inclination (ángulo vertical)
- Projection: Longitud de proyección del nozzle desde el shell
- Connection Type: Flanged, Threaded, Socket Weld, Butt Weld
```

### 3.2 Configuración de Nozzles al Insertar Equipos

**Método 1: Plantilla de Nozzles Predefinida**

Muchos equipos del catálogo vienen con configuraciones típicas de nozzles:

```
Ejemplo: Recipiente Vertical Típico
- Configuración estándar incluye:
  → Top nozzle (vent/PSV): 2" - 150# RF - Elevación: top tangent line
  → Feed inlet: 6" - 150# RF - Elevación: 80% de altura
  → Product outlet: 8" - 150# RF - Elevación: 50% de altura
  → Bottom drain: 3" - 150# RF - Elevación: bottom tangent line
  → Manway: 18" - 150# RF - Elevación: mid-level
```

**Método 2: Configuración Manual de Nozzles**

Para proyectos específicos, se configuran nozzles manualmente:

**Paso 1: Acceder al Editor de Nozzles**

1. Seleccionar equipo insertado
2. Right-click → Edit Nozzles
3. Se abre **Nozzle Manager Dialog**

**Paso 2: Agregar Nuevo Nozzle**

```
Nozzle Manager:
Click en "Add Nozzle" → Se crea nuevo nozzle con ID secuencial (N1, N2...)

Configurar propiedades:
1. Nozzle ID: [Cambiar a nomenclatura de proyecto]
   Ejemplo: "N1-FEED" (primer nozzle - alimentación)

2. Size: Seleccionar de lista desplegable
   Ejemplo: 8" NPS

3. Rating: Seleccionar pressure class
   Ejemplo: Class 150 (150 psig)

4. Facing Type: Seleccionar tipo de cara de brida
   Ejemplo: RF (Raised Face) - más común

5. Connection Type:
   Ejemplo: Flanged (brida soldada)
```

**Paso 3: Posicionar Nozzle en el Equipo**

```
Location Settings:
1. Mounting Face: [Seleccionar superficie del equipo]
   Opciones: Shell (cilindro), Top Head, Bottom Head, Side

2. Para nozzles en Shell (laterales):
   - Azimuth Angle: Ángulo horizontal desde el norte del equipo
     Ejemplo: 0° = Norte, 90° = Este, 180° = Sur, 270° = Oeste
   - Elevation: Distancia vertical desde bottom tangent line
     Ejemplo: 120" (10 ft) desde el fondo

3. Para nozzles en Heads (cabezas):
   - Radial Position: Distancia radial desde el eje central
     Ejemplo: 0 = centro, 15" = offset 15" desde centro
   - Azimuth: Orientación angular si está offset

4. Projection: Longitud que sobresale el nozzle
   Ejemplo: 12" (estándar para nozzles 6"-8")
```

**Paso 4: Configurar Orientación de Nozzle**

```
Nozzle Orientation:
- Face Direction: Dirección hacia donde apunta la conexión
  → Horizontal outward (radial desde el equipo)
  → Horizontal tangent (tangente al shell)
  → Vertical up/down
  → Angular (especificar ángulos custom)

- Rotation: Rotación del nozzle sobre su propio eje
  → Importante para orientar bolt holes en bridas
  → Ejemplo: 0° = bolt holes vertical/horizontal
```

![Nozzle Manager Dialog con configuración de nozzles](../imagenes/leccion-11-nozzle-manager.png)

### 3.3 Mejores Prácticas para Configuración de Nozzles

**A. Nomenclatura Consistente:**

```
Convención profesional de nomenclatura de nozzles:
- N1, N2, N3... (numeración secuencial genérica)
- O mejor: Nomenclatura funcional
  → FEED-IN (alimentación entrada)
  → PROD-OUT (producto salida)
  → BTM-DRAIN (drenaje inferior)
  → TOP-VENT (venteo superior)
  → PSV-01 (válvula de seguridad #1)
```

**B. Agrupación por Servicio:**

Agrupar nozzles similares en regiones del equipo facilita el routing:

```
Ejemplo: Columna de Destilación
- Zona superior (Top section): Productos livianos, reflujo, venteos
- Zona media (Middle section): Feeds, side draws
- Zona inferior (Bottom section): Productos pesados, reboiler returns, drains
```

**C. Consideraciones de Orientación:**

```
Reglas generales de orientación de nozzles:
1. Nozzles de líquido en bottom heads: Orientación vertical hacia abajo
   → Facilita drenaje completo

2. Nozzles de gas/vapor en top heads: Orientación vertical hacia arriba
   → Evita acumulación de condensados

3. Nozzles laterales grandes (>6"): Orientación horizontal radial
   → Minimiza estrés en el shell por peso de la tubería

4. Nozzles de instrumentación: Orientación que permita acceso
   → Generalmente horizontal, altura accesible desde plataforma

5. PSV (Pressure Safety Valves): Vertical hacia arriba
   → Requisito de código ASME para descarga segura
```

**D. Espaciamiento de Nozzles:**

```
Criterios de espaciamiento mínimo:
- Distancia entre bordes de nozzles adyacentes:
  → Mínimo = 2 × diámetro del nozzle mayor
  → Preferido = 3 × diámetro para permitir welding access

- Distancia de nozzles a soldaduras longitudinales:
  → Mínimo según ASME Sec VIII: 2.5 × √(Diameter × Thickness)

- Clearance para bridas:
  → Considerar diámetro de brida + espacio para bolt wrench
  → Típicamente añadir 4"-6" al OD de la brida
```

### 3.4 Nozzles Especiales

**A. Manways (Bocas de Hombre):**

```
Configuración típica de Manway:
- Size: 18" o 24" (circular), 16"x20" (elíptica)
- Rating: Mismo rating que el vessel
- Type: Hinged cover con bolt closure
- Location: Mid-height, orientación frontal para acceso desde plataforma
- Clearance: Mínimo 36" frente al manway para ingreso de personal
```

**B. Nozzles para PSV (Pressure Safety Valves):**

```
Requisitos especiales según ASME:
- Orientation: Vertical hacia arriba (siempre)
- Connection: Flanged, Raised Face
- Inlet piping: Sin pocket donde se acumulen líquidos
- Projection: Suficiente para montar PSV con acceso para mantenimiento
- Location: Fase vapor del vessel (nunca sumergido en líquido)
```

**C. Thermowell Connections:**

```
Para instrumentación de temperatura:
- Size: Típicamente 1" o 3/4" threaded
- Type: Threaded half-coupling o small flanged nozzle
- Location: En flujo, avoiding dead zones
- Projection: Penetración específica según profundidad requerida
```

---

## 4. Creación de Equipos Personalizados

Muchos proyectos requieren equipos no disponibles en el catálogo estándar. AutoCAD Plant 3D 2026 permite crear equipos personalizados mediante dos métodos principales.

### 4.1 Método 1: Parametric Equipment Creator

Esta herramienta permite crear equipos paramétricos sin programación.

**Paso 1: Modelar Geometría Base**

```
1. Usar comandos de AutoCAD 3D estándar:
   - CYLINDER, BOX, CONE para formas básicas
   - EXTRUDE para formas custom desde profiles
   - UNION, SUBTRACT para operaciones booleanas

Ejemplo: Reactor Custom con Agitador
- Crear cilindro principal (shell): CYLINDER → Radius=36", Height=120"
- Crear cabeza elíptica superior: REVOLVE de perfil elíptico
- Crear cabeza cónica inferior: CONE → Radio superior=36", inferior=12"
- Unir todas las partes: UNION
```

**Paso 2: Definir como Equipment Object**

```
1. Ribbon → Plant 3D → Equipment → Create Parametric Equipment
2. Seleccionar el 3D solid creado
3. Equipment Creation Wizard se inicia:

   Step 1: Equipment Category
   - Seleccionar categoría: "Vessels" (o crear nueva categoría)
   - Equipment Type: "Custom Reactor"

   Step 2: Insertion Point
   - Especificar punto de inserción del equipo (base point)
   - Este será el punto de referencia para colocación

   Step 3: Size Parameters
   - Definir parámetros que variarán entre instancias:
     → Diameter: Min=24", Max=120", Increment=12"
     → Height: Min=60", Max=300", Increment=12"
   - Plant 3D creará una tabla de tamaños permitidos
```

**Paso 3: Agregar Nozzles al Equipo Personalizado**

```
1. En el wizard, avanzar a "Nozzles" step
2. Click "Add Nozzle":
   - Especificar ubicación en la geometría (pick point)
   - Definir propiedades (size, rating, facing)
   - Establecer si el nozzle es paramétrico (varía con el tamaño) o fijo

Ejemplo: Reactor con 4 nozzles
- N1-FEED: 6" - 150# RF - Side @ 90", Azimuth 0°
- N2-OUTLET: 8" - 150# RF - Bottom head center
- N3-VENT: 2" - 150# RF - Top head center
- N4-AGITATOR: 12" - 150# FF - Top head, offset 15"
```

**Paso 4: Definir Propiedades de Datos**

```
Properties Definition:
1. Agregar propiedades custom necesarias para el proyecto:
   - Agitator Type: [Lista: Top-entering, Side-entering, Bottom-entering]
   - Agitator Power: [Número: HP]
   - Lining Material: [Texto: Glass-lined, Rubber-lined, None]
   - Heating Method: [Lista: Jacket, Coil, None]

2. Estas propiedades aparecerán en Properties Palette y Data Manager
```

**Paso 5: Guardar en Catálogo**

```
1. Finalizar wizard → Plant 3D crea el equipo paramétrico
2. Save to Catalog:
   - Especificar nombre: "Custom_Reactor_Type_A"
   - Seleccionar ubicación en catálogo de proyecto
   - Añadir thumbnail/preview image

3. El equipo ahora está disponible en Equipment Palette para futuros usos
```

![Parametric Equipment Creator Wizard](../imagenes/leccion-11-parametric-creator.png)

### 4.2 Método 2: Equipos desde Archivos de Proveedor

Muchos proveedores de equipos proporcionan modelos 3D detallados (STEP, IGES, SAT). Plant 3D puede convertir estos modelos en Equipment Objects inteligentes.

**Paso 1: Importar Modelo de Proveedor**

```
1. Ribbon → Insert tab → Import panel
2. Seleccionar tipo de archivo:
   - STEP Files (.stp, .step) - Más común en industria
   - IGES Files (.igs, .iges)
   - SAT Files (.sat) - Autodesk ACIS format

3. Import Options:
   - Units: Verificar unidades (mm, inches, feet)
   - Layer: Especificar layer para geometría importada
   - Position: Insertar en 0,0,0 para facilitar trabajo

Ejemplo: Importar modelo STEP de bomba centrífuga API 610
- File: "Goulds_3196_6x8-13_STEP.stp"
- Units: Inches
- Result: 3D solid geometry de la bomba
```

**Paso 2: Limpiar y Preparar Geometría**

```
Tareas comunes de limpieza:
1. Eliminar componentes innecesarios:
   - Pernos individuales (simplificar o eliminar)
   - Detalles muy finos que ralentizan el modelo
   - Componentes internos no visibles

2. Simplificar geometría si es excesivamente compleja:
   - Usar FACETRES para controlar resolución de curvas
   - Considerar crear simplified version para LOD 200

3. Verificar integridad del solid:
   - Comando SOLIDEDIT → Check → Verify solid integrity
   - Reparar si es necesario
```

**Paso 3: Convertir a Plant 3D Equipment**

```
1. Ribbon → Plant 3D → Equipment → Convert to Equipment
2. Seleccionar el imported solid
3. Equipment Conversion Dialog:

   Equipment Type:
   - Category: Pumps
   - Type: Centrifugal Pump - API 610
   - Tag: P-[Auto-number]

   Insertion Point:
   - Seleccionar punto lógico (ej: centerline de suction nozzle)
   - Este será el punto de inserción en futuros usos

   Equipment Properties:
   - Manufacturer: Goulds
   - Model: 3196
   - Size: 6x8-13
   - Impeller Diameter: 13"
   - Motor HP: 75 HP
   - Motor Speed: 3560 RPM
```

**Paso 4: Definir Connection Points (Nozzles)**

```
Para bombas, definir:
1. Suction Nozzle:
   - Pick point en la brida de succión del modelo
   - Size: 8" - 150# RF (del modelo/datasheet)
   - Orientation: Verificar que apunta correctamente

2. Discharge Nozzle:
   - Pick point en brida de descarga
   - Size: 6" - 300# RF
   - Orientation: Verificar

3. Drain/Vent Connections (si aplica):
   - Pequeños nozzles 3/4" o 1" threaded
```

**Paso 5: Agregar a Biblioteca de Proyecto**

```
1. Save Equipment to Project Catalog
2. Crear familia si hay múltiples tamaños:
   - Ejemplo: Goulds 3196 family
   - Sizes: 3x4-10, 4x6-11, 6x8-13, 8x10-14
   - Importar cada tamaño, configurar como variante
```

![Equipo importado convertido a Plant 3D Equipment Object](../imagenes/leccion-11-import-equipment.png)

### 4.3 Gestión de Bibliotecas de Equipos Personalizados

Para proyectos grandes, organizar equipos personalizados es crítico.

**Estructura de Biblioteca Recomendada:**

```
Project Equipment Library
│
├── Standard_Catalog (Catálogo estándar Plant 3D)
│
├── Project_Custom (Equipos custom del proyecto)
│   ├── Vessels
│   │   ├── Reactors_Custom
│   │   ├── Separators_Custom
│   │   └── Knockout_Drums
│   ├── Exchangers
│   │   ├── Custom_Shell_Tube
│   │   └── Proprietary_Designs
│   └── Special_Equipment
│       ├── Crystallizers
│       ├── Extractors
│       └── Proprietary_Items
│
└── Vendor_Equipment (Modelos de proveedores)
    ├── Pumps
    │   ├── Goulds
    │   ├── Flowserve
    │   └── Sulzer
    ├── Compressors
    │   ├── Atlas_Copco
    │   └── Ingersoll_Rand
    └── Packages
        └── Vendor_Skid_Packages
```

**Gestión de Revisiones:**

```
Best Practices:
1. Version Control para equipos custom:
   - Nombrar: "Custom_Reactor_TypeA_v1", "v2", "v3"
   - Mantener changelog de modificaciones

2. Metadata completa:
   - Fecha de creación
   - Creador (diseñador responsable)
   - Notas de revisión
   - Aprobaciones (si aplica proceso de QA/QC)

3. Backup de catálogos:
   - Sincronizar con Vault o control de versiones
   - Exportar catálogos periódicamente
```

---

## 5. Posicionamiento Estratégico de Equipos

La colocación de equipos no es arbitraria. Requiere consideración de múltiples factores ingenieriles.

### 5.1 Criterios de Espaciamiento y Clearance

**A. Espaciamiento entre Equipos:**

```
Criterios según tipo de equipo (valores típicos):

Bombas centrífugas:
- Espaciamiento lateral mínimo: 3 ft (0.9 m)
- Espaciamiento frontal/posterior: 5 ft (1.5 m)
- Clearance para remover motor: 1.5 × longitud del motor

Intercambiadores de calor horizontales:
- Espaciamiento lateral: 4 ft (1.2 m) mínimo
- Clearance frontal para bundle pulling: Longitud del bundle + 3 ft
- Clearance para maintenance crane: Considerar overhead space

Recipientes verticales:
- Espaciamiento lateral: Mayor de [0.5 × Diámetro] o 3 ft
- Clearance para manway: Mínimo 3 ft frente a manway
- Espacio para plataformas y escaleras: Planificar desde inicio

Tanques de almacenamiento (API 650):
- Espaciamiento entre tanques:
  → 1/6 × suma de diámetros, pero no menos de 3 ft
  → Para tanques >150 ft dia: 1/4 × suma de diámetros
- Distancia a diques (dikes): Según regulaciones de seguridad
```

**B. Consideraciones de Seguridad:**

```
Espaciamiento por clasificación de área:

Equipos con fluidos inflamables Clase I:
- Zona de explosión (Division 1): Radio según NEC/IEC
- Espaciamiento mínimo a fuentes de ignición: Según NFPA 30
- Separación de equipos de alto riesgo: 50-100 ft típico

Equipos con materiales tóxicos:
- Ubicación downwind de áreas ocupadas
- Separación de salas de control: Mínimo 100 ft
- Accesibilidad para respuesta a emergencias
```

### 5.2 Consideraciones de Proceso y Operación

**A. Secuencia de Proceso (Process Flow):**

```
Principio fundamental: Flujo por gravedad cuando sea posible

Ejemplo: Sección de destilación
1. Feed surge drum (elevación baja)
2. Feed pump (elev. 100'-0")
3. Feed/Effluent exchanger (elev. 110'-0", horizontal)
4. Column feed point (elev. 145'-0" en columna)
5. Columna de destilación (elev. bottom 100'-0", top 300'-0")
6. Overhead condenser (elev. 310'-0", horizontal)
7. Reflux drum (elev. 285'-0" - gravedad desde condenser)
8. Reflux pump (elev. 270'-0" - NPSH considerations)

Resultado: Minimiza bombeo, usa gravedad, optimiza NPSH
```

**B. NPSH (Net Positive Suction Head) para Bombas:**

```
Regla crítica: La elevación del recipiente que suministra a una bomba
debe proporcionar NPSH disponible > NPSH requerido

Cálculo simplificado de NPSH disponible:
NPSH_avail = P_atm + P_static - P_vapor - P_friction

Donde:
- P_atm = Presión atmosférica en el tanque/recipiente
- P_static = Presión estática por altura de líquido (H × SG × 0.433 psi/ft)
- P_vapor = Presión de vapor del líquido a temperatura de bombeo
- P_friction = Pérdidas de fricción en succión

Estrategias de posicionamiento:
1. Bomba de proceso crítica: Elevar tanque de suministro si NPSH insufficient
2. Bomba de servicios: Generalmente a nivel de piso (grade level)
3. Bombas de alto punto de ebullición: Pueden estar debajo del tanque (basement)
```

**C. Accesibilidad para Operación y Mantenimiento:**

```
Checklist de accesibilidad:

Para Bombas:
☑ Clearance frontal 5 ft para remover motor
☑ Clearance lateral 3 ft para acceso a sello mecánico
☑ Espacio superior 10 ft para lifting con crane/hoist
☑ Acceso a válvulas de succión y descarga
☑ Proximidad a drenajes de piso para fugas

Para Intercambiadores:
☑ Espacio frontal = longitud de bundle + 3 ft
☑ Plataforma de acceso a channel heads
☑ Lifting lugs accesibles con crane
☑ Acceso a válvulas, PSV, instrumentación

Para Recipientes:
☑ Plataforma a nivel de manway
☑ Escalera de acceso a plataformas superiores
☑ Acceso a level indicators, sight glasses
☑ Espacio para remover internals (trays, packing)
```

### 5.3 Posicionamiento en Estructuras (Rack/Pipe Rack)

**A. Equipos en Grade Level (Nivel de Piso):**

```
Ubicación típica en grade level:
- Bombas de proceso (mayoría)
- Compresores reciprocantes (por vibración)
- Recipientes pequeños (<8 ft dia)
- Filtros, strainers operados frecuentemente
- Equipos con carga excesiva para estructuras elevadas

Ventajas:
- Fácil acceso para mantenimiento
- No requiere estructura de soporte costosa
- Vibración no afecta estructura

Desventajas:
- Ocupa espacio en planta congestionada
- Puede requerir bombeo adicional (elevación)
```

**B. Equipos en Estructuras Elevadas:**

```
Ubicación en estructuras (mezzanines, racks):
- Recipientes de reflujo (reflux drums) - necesitan elevación para gravedad
- Knockout drums que alimentan compresores - NPSH requirements
- Surge drums que alimentan pumps - NPSH optimization
- Intercambiadores air-cooled (en top de rack para ventilación)

Consideraciones estructurales:
1. Cargas operativas:
   - Peso del equipo lleno (operating weight)
   - Peso de mantenimiento (bundle out, etc.)
   - Cargas de viento en equipos elevados

2. Cargas sísmicas:
   - Equipos pesados en altura = momento sísmico mayor
   - Anclajes diseñados según zona sísmica

3. Distribución de carga en estructura:
   - Posicionar equipos pesados sobre columnas principales
   - Evitar cantilevers excesivos
```

**C. Alineación con Pipe Racks:**

```
Estrategia: Alinear equipos con racks de tuberías principales

Ventajas:
- Minimiza longitud de pipe runs
- Simplifica routing desde headers de rack
- Facilita expansiones futuras
- Estética y organización de planta

Ejemplo: Área de bombas
- Rack principal: Grid line A, runs Este-Oeste
- Pumps layout: Alineadas en Grid line B (paralela a A)
  → P-101, P-102, P-103... espaciadas 8 ft on-center
  → Suction headers en rack, drops de 10 ft a succión de bombas
  → Discharge headers en rack, returns de 10 ft desde descarga
```

![Layout de equipos con alineación a pipe rack](../imagenes/leccion-11-equipment-layout-rack.png)

### 5.4 Herramientas de Plant 3D para Optimización de Layout

**A. Equipment Array (Arreglo de Equipos):**

Para múltiples equipos idénticos (ej: batería de bombas):

```
Comando: EQUIPMENT ARRAY (Ribbon → Plant 3D → Equipment → Array)

1. Seleccionar equipo base (ej: Bomba P-101)
2. Array Type: Rectangular o Polar
3. Para Rectangular Array:
   - Rows: 1 (fila única de bombas)
   - Columns: 5 (cinco bombas en total)
   - Column spacing: 8 ft (distancia entre centerlines)
   - Incrementar Equipment Tag: P-101, P-102, P-103, P-104, P-105

Resultado: 5 bombas alineadas perfectamente espaciadas
```

**B. Grips de Equipos para Ajustes:**

```
Plant 3D equipment objects tienen grips inteligentes:

1. Base grip (punto de inserción): Mover todo el equipo
2. Rotation grip: Rotar equipo en planta
3. Elevation grip: Ajustar elevación (Z coordinate)
4. Nozzle grips: Ajustar posición de nozzles individuales

Uso: Seleccionar equipo → Grips aparecen → Click y drag
```

**C. Clash Detection Preliminar:**

```
Verificar interferencias entre equipos:

1. Ribbon → Plant 3D → Tools → Clash Detection
2. Settings:
   - Objects to check: Equipos (Equipment class)
   - Clearance tolerance: 3 ft (espaciamiento mínimo deseado)
3. Run Analysis
4. Report muestra equipos que violan espaciamiento mínimo

Action: Reposicionar equipos con clashes antes de iniciar piping design
```

---

## 6. Propiedades de Datos y Etiquetado de Equipos

### 6.1 Sistema de Etiquetado (Equipment Tagging)

El sistema de etiquetado de equipos es crítico para integración con P&ID y documentación de proyecto.

**A. Convenciones de Nomenclatura Estándar:**

```
Formato típico de Equipment Tag:
[Prefix]-[Number][Suffix]

Ejemplos:
- V-101: Vessel (recipiente) número 101
- P-201A: Pump número 201, unidad A (de múltiples unidades idénticas)
- E-301: Exchanger (intercambiador) número 301
- C-401: Compressor número 401
- T-501: Tank (tanque) número 501
- R-601: Reactor número 601

Prefijos estándar de la industria:
A = Air Filter / Air Separator
C = Compressor / Crystallizer
D = Dryer / Decanter
E = Exchanger (Heat Exchanger)
F = Filter / Furnace
H = Heater
K = Kettle / Reactor Vessel
M = Mixer / Motor
P = Pump
R = Reactor
S = Separator / Scrubber
T = Tank / Tower (Distillation Column)
V = Vessel / Vacuum Equipment
```

**B. Numeración Lógica por Área:**

```
Sistema de numeración por área de proceso:

Área 100: Recepción y almacenamiento de materia prima
- V-101: Raw material day tank
- P-101A/B: Raw material transfer pumps
- E-101: Raw material preheater

Área 200: Reacción
- R-201: Main reactor
- E-201: Reactor feed/effluent exchanger
- V-201: Reactor feed drum
- P-201: Reactor feed pump

Área 300: Separación
- T-301: Distillation column
- E-301: Column reboiler
- E-302: Column condenser
- V-301: Reflux drum
- P-301A/B: Reflux pumps

Beneficios:
- Fácil identificar ubicación/función del equipo por tag
- Consistencia con P&ID numbering
- Facilita troubleshooting en planta
```

**C. Configuración de Auto-Tagging en Plant 3D:**

```
Setup de numeración automática:

1. Project Setup → Drawing Settings → Equipment Settings
2. Tag Format Settings:
   - Prefix: [Dropdown basado en tipo de equipo]
     → Vessels = "V-"
     → Pumps = "P-"
     → Exchangers = "E-"

   - Numbering Sequence:
     → Starting Number: 101 (o número según área)
     → Increment: 1
     → Digits: 3 (resultados: 101, 102, 103... 999)

   - Suffix (optional):
     → Para equipos duplicados: A, B, C (P-101A, P-101B)
     → Para spares: "S" (P-101S = spare pump)

3. Apply → Equipos insertados reciben tags automáticamente
```

### 6.2 Propiedades de Datos de Equipos

**A. Propiedades Estándar de Plant 3D:**

```
Propiedades básicas (automáticas):
- Equipment Tag: V-101
- Equipment Type: Vertical Vessel
- Spec: PROC-VESSELS-CS-150
- Size: 60" × 240" T-T
- Material: Carbon Steel A516-60
- Weight (Empty): 12,500 lb
- Weight (Operating): 87,300 lb

Propiedades geométricas (automáticas):
- Volume: 4,712 gallons
- Surface Area: 1,258 sq ft
- Center of Gravity: X=1250.5, Y=875.2, Z=110.0
```

**B. Propiedades Custom para Gestión de Activos:**

```
Extensiones para CMMS (Computerized Maintenance Management System):

Process Data:
- Service Description: "HP Separator - Gas/Liquid"
- Operating Pressure: 250 psig
- Operating Temperature: 350°F
- Design Pressure: 300 psig
- Design Temperature: 400°F
- Corrosion Allowance: 0.125"

Mechanical Data:
- Vendor: "ABC Fabricators Inc."
- Vendor Model: "VS-60-240-E"
- Serial Number: "12345-2024"
- Fabrication Standard: "ASME Sec VIII Div 1"
- Year Built: 2024

Maintenance Data:
- Inspection Frequency: "5 years"
- Last Inspection Date: "2024-01-15"
- Next Inspection Due: "2029-01-15"
- Maintenance Criticality: "High"
- Spare Parts Reference: "SPL-V101-2024"
```

**C. Configuración de Custom Properties:**

```
Procedimiento:

1. Project Setup → Data Manager Settings → Custom Properties
2. Click "Add New Property"
3. Definir propiedad:
   - Property Name: "Operating_Pressure"
   - Data Type: Number (with units)
   - Units: psig
   - Required: Yes (obligatorio completar)
   - Default Value: [blank o valor típico]

4. Asociar a Equipment Class:
   - Apply to: Vessels, Tanks, Exchangers (seleccionar)

5. Save → La propiedad aparece en Properties Palette para equipos

Repetir para todas las propiedades custom del proyecto
```

**D. Import/Export de Datos de Equipos:**

```
Para proyectos grandes: Gestionar datos en Excel/Database

Export Data:
1. Data Manager → Select Equipment Objects
2. Export to Excel:
   - Genera spreadsheet con todas las propiedades
   - Columnas: Tag, Type, Size, Material, Custom Properties...

3. Editar en Excel:
   - Ingenieros de proceso completan Operating Conditions
   - Mechanical engineers completan Vendor Data
   - Inspectores completan Inspection Data

Import Data:
1. Data Manager → Import from Excel
2. Map columns to Plant 3D properties
3. Import → Propiedades se actualizan en modelo

Beneficio: Gestión eficiente de cientos de equipos
```

![Data Manager mostrando propiedades de múltiples equipos](../imagenes/leccion-11-data-manager.png)

---

## 7. Gestión de Bibliotecas de Equipos

### 7.1 Organización de Content Libraries

**A. Estructura de Catálogo de Proyecto:**

```
Project Content Structure:
C:\PlantProjects\RefineriaXYZ\Content\
│
├── Specs\ (Especificaciones de línea y equipos)
│   ├── Equipment_Specs\
│   │   ├── Vessels_CS_150.spec
│   │   ├── Vessels_SS_300.spec
│   │   ├── Pumps_API610.spec
│   │   └── Exchangers_TEMA.spec
│   └── Piping_Specs\
│
├── Catalogs\ (Catálogos de componentes)
│   ├── Equipment_Catalog\
│   │   ├── Standard\ (Plant 3D default)
│   │   ├── Custom\ (Equipos custom proyecto)
│   │   └── Vendor\ (Modelos de proveedores)
│   └── Piping_Catalog\
│
└── Symbols\ (Símbolos 2D para P&ID)
```

**B. Compartir Contenido entre Proyectos:**

```
Para reutilizar equipos custom en múltiples proyectos:

Método 1: Content Library Share
1. Proyecto A crea equipo custom "Reactor_TypeX"
2. Export to Company Library:
   - Content Manager → Export Item
   - Destination: Company_Standard_Library
   - Category: Custom_Reactors
3. Proyecto B accede: Content Manager → Browse Company Library
4. Import "Reactor_TypeX" → Disponible en catálogo

Método 2: Vault Integration
1. Configurar Autodesk Vault para gestión de contenido
2. Check-in equipos custom a Vault
3. Múltiples proyectos acceden a Vault Library
4. Control de versiones automático
```

### 7.2 Actualizaciones de Contenido

**A. Actualizar Equipos Existentes en Modelo:**

```
Escenario: Vendor proporciona modelo actualizado de bomba

Procedimiento:
1. Importar nuevo modelo de bomba (versión revisada)
2. Convertir a Equipment Object con mismo Tag naming
3. Content Manager → Replace Equipment Definition
4. Seleccionar:
   - Old Definition: "Pump_Goulds_3196_v1"
   - New Definition: "Pump_Goulds_3196_v2"
5. Replace → Todas las instancias en modelo se actualizan

Atención: Verificar que nozzle positions no cambiaron
- Si cambiaron: Piping conectado puede requerir re-routing
- Plant 3D genera warning report de conexiones afectadas
```

**B. Sincronización con P&ID:**

```
Equipos deben sincronizarse entre P&ID y modelo 3D:

P&ID → 3D Model:
1. Equipment colocado en P&ID primero (proceso de diseño típico)
2. En Plant 3D: Project Manager → Equipment from P&ID
3. Seleccionar equipos del P&ID para "traer" al 3D
4. Plant 3D crea placeholders 3D con:
   - Equipment Tag (del P&ID)
   - Nozzle connections (del P&ID)
   - Service description
5. Designer coloca equipos 3D en ubicaciones precisas
6. Sync mantiene link: Cambios en P&ID se reflejan en 3D

3D Model → P&ID:
- Menos común, pero posible
- Equipos agregados en 3D se pueden "push" al P&ID
- Útil para equipment modeling que precede P&ID detail
```

---

## Ejercicio Práctico: Configuración de Área de Proceso con Equipos

**Duración:** 20 minutos
**Objetivo:** Aplicar conocimientos de colocación y configuración de equipos en un escenario real de área de separación en refinería.

### Escenario

Usted es el diseñador 3D asignado al proyecto de modernización de una refinería. Su tarea es modelar el área de separación primaria (Area 300), que incluye:

- **V-301:** HP Gas/Liquid Separator (recipiente vertical 60" × 20 ft)
- **P-301A/B:** Product transfer pumps (bombas centrífugas idénticas, API 610, 6"×8")
- **E-301:** Product cooler (intercambiador shell & tube horizontal, 24" dia × 15 ft)

Los equipos deben colocarse siguiendo layout preliminar:
- Grid Line C-5 (X=1250 ft, Y=875 ft)
- Elevación de plataforma: 100'-0"

### Pasos del Ejercicio

**Parte 1: Colocar Recipiente V-301 (6 minutos)**

1. Abrir Equipment Palette → Vessels → Vertical Vessels
2. Seleccionar "Vertical Vessel - Elliptical Heads"
3. Equipment Properties:
   - Diameter: 60" (1524 mm)
   - T-T Height: 240" (20 ft / 6096 mm)
   - Spec: PROC-VESSELS-CS-150
   - Tag: V-301
   - Service: "HP Gas/Liquid Separator"
4. Insertar en coordenadas: 1250,875,100
5. Rotation: 0° (norte)

**Parte 2: Configurar Nozzles de V-301 (8 minutos)**

1. Seleccionar V-301 → Right-click → Edit Nozzles
2. Agregar nozzles según tabla:

| Nozzle ID | Service | Size | Rating | Location | Azimuth | Elevation |
|-----------|---------|------|--------|----------|---------|-----------|
| N1-GAS-OUT | Gas Outlet | 12" | 150# RF | Shell | 0° | 180" |
| N2-LIQ-IN | Liquid Inlet | 8" | 150# RF | Shell | 90° | 120" |
| N3-LIQ-OUT | Liquid Outlet | 10" | 150# RF | Bottom Head | - | - |
| N4-DRAIN | Drain | 3" | 150# RF | Bottom Head | - | Offset 12" |
| N5-PSV | Relief Valve | 4" | 150# RF | Top Head | - | Center |

3. Verificar orientaciones correctas (radial para laterales, vertical para heads)

**Parte 3: Colocar Bombas P-301A/B (6 minutos)**

1. Equipment Palette → Pumps → Centrifugal Pumps
2. Seleccionar "API 610 Centrifugal Pump - Horizontal"
3. Equipment Properties:
   - Size: 6×8 (suction 8", discharge 6")
   - Motor: 50 HP, 3560 RPM
   - Spec: PUMPS-API610-CS-150
   - Tag: P-301A
4. Insertar: Coordenadas 1260,870,100 (10 ft Este, 5 ft Sur de V-301)
5. Rotation: 90° (descarga hacia Este)

6. Duplicar para P-301B:
   - Comando: COPY
   - From: Punto de inserción de P-301A
   - To: @8,0,0 (8 ft en X, alineada en Y y Z)
   - Cambiar Tag a: P-301B

**Entregables:**

1. Modelo 3D con los 3 equipos colocados correctamente
2. Screenshot de planta (vista top) mostrando layout
3. Screenshot de elevación mostrando V-301 y bombas
4. Equipment List (Data Manager export) con propiedades completas

**Criterios de Evaluación:**

- Precisión de coordenadas de inserción (20 pts)
- Correcta configuración de nozzles en V-301 (30 pts)
- Espaciamiento adecuado de bombas (15 pts)
- Rotación/orientación correcta de equipos (15 pts)
- Completitud de propiedades de datos (20 pts)

**Total:** 100 puntos

---

## Preguntas de Evaluación

**Pregunta 1 (Conceptual - 20 puntos):**
Explique las tres diferencias principales entre un equipo del catálogo estándar de Plant 3D y un equipo personalizado creado mediante Parametric Equipment Creator. Incluya consideraciones de flexibilidad, propiedades de datos y reutilización en futuros proyectos.

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

Las tres diferencias principales son:

1. **Flexibilidad Paramétrica:**
   - **Equipos del catálogo estándar** vienen con parámetros predefinidos limitados a tamaños estándar de la industria (ej: recipientes en diámetros estándar 36", 48", 60", etc. según ASME).
   - **Equipos personalizados** permiten definir parámetros completamente customizados según necesidades específicas del proyecto (dimensiones no estándar, geometrías únicas, configuraciones especiales).

2. **Propiedades de Datos:**
   - **Equipos estándar** incluyen conjunto predeterminado de propiedades basadas en códigos industriales (ASME, API), suficientes para aplicaciones típicas.
   - **Equipos custom** permiten agregar propiedades de datos específicas del proyecto/cliente (ej: propiedades para CMMS específico, datos de vendor particulares, información de proceso única) que no están contempladas en catálogo estándar.

3. **Reutilización y Mantenimiento:**
   - **Equipos estándar** reciben actualizaciones automáticas de Autodesk con nuevas versiones de Plant 3D, incluyen mejoras de performance y correcciones.
   - **Equipos custom** requieren mantenimiento manual por parte del equipo de proyecto; deben ser documentados, versionados y gestionados internamente; ventaja es que se adaptan exactamente a necesidades específicas sin limitaciones de catálogo genérico.

Adicionalmente, equipos custom pueden incluir geometrías complejas o propietarias que no existen en el catálogo estándar (reactores especiales, equipos patentados, diseños únicos de proveedores), mientras que catálogo estándar cubre equipos convencionales de industria.

</details>

---

**Pregunta 2 (Aplicación - 20 puntos):**
En el diseño de un área de bombeo que contiene 6 bombas centrífugas idénticas (API 610, 4×6-10, 75 HP), describa el procedimiento completo en Plant 3D para:
a) Colocar la primera bomba con sus nozzles de succión y descarga correctamente configurados
b) Crear las 5 bombas restantes con espaciamiento de 8 ft entre centerlines
c) Configurar el sistema de etiquetado para que las bombas se numeren automáticamente P-401A, P-401B, P-401C, P-401D, P-401E, P-401F

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

**Procedimiento completo:**

**a) Colocación de primera bomba con nozzles:**

1. Equipment Palette → Pumps → Centrifugal Pumps API 610
2. Seleccionar modelo apropiado (horizontal, frame-mounted)
3. Equipment Properties Dialog:
   - Size: 4×6-10 (4" suction, 6" discharge, 10" impeller)
   - Motor: 75 HP, 1780 RPM (o 3560 RPM según aplicación)
   - Spec: PUMPS-API610-CS-150 (o spec del proyecto)
   - Tag: P-401A
   - Service: Especificar según aplicación (ej: "Product Transfer")

4. Configurar Nozzles:
   - Suction Nozzle:
     - Size: 6" NPS
     - Rating: Class 150 RF
     - Orientation: Horizontal, dirección según layout (típicamente hacia rack de succión)
   - Discharge Nozzle:
     - Size: 4" NPS
     - Rating: Class 300 RF (mayor rating por presión de descarga)
     - Orientation: Perpendicular a succión (configuración típica)
   - Nozzles adicionales (si modelo los incluye):
     - Drain: 3/4" threaded en casing low point
     - Vent: 3/4" threaded en casing high point

5. Insertar bomba en coordenadas específicas o punto de layout definido
6. Rotation: Orientar según dirección de flujo del proceso

**b) Crear 5 bombas restantes con espaciamiento correcto:**

Método 1 - Equipment Array (más eficiente):
1. Seleccionar P-401A (bomba base)
2. Ribbon → Plant 3D → Equipment → Array
3. Array Settings:
   - Array Type: Rectangular
   - Rows: 1 (single row)
   - Columns: 6 (total bombas incluyendo original)
   - Column Spacing: 8'-0" (8 ft entre centerlines)
   - Row Spacing: N/A
4. Tag Increment: Configurar para generar sufijos secuenciales (A, B, C, D, E, F)
5. Apply → Plant 3D crea las 5 bombas adicionales espaciadas precisamente

Método 2 - Copy Manual (alternativa):
1. Command: COPY
2. Select: P-401A
3. Base point: Insertion point de P-401A
4. Destination: @8,0,0 (8 ft en X, 0 en Y y Z - asumiendo bombas alineadas en X)
5. Repeat para crear P-401B
6. Continue pattern para C, D, E, F
7. Modificar Tags manualmente a B, C, D, E, F

**c) Sistema de etiquetado automático:**

1. **Configurar Auto-Tagging Template:**
   - Project Setup → Drawing Settings → Equipment Tag Format
   - Prefix: "P-" (para Pumps)
   - Base Number: 401
   - Suffix Format: Alphabetic (A, B, C, D, E, F)
   - Apply to: Pump class objects

2. **Aplicar al Array:**
   - En Array command (Método 1 arriba), opción "Increment Tag"
   - Plant 3D automáticamente genera: P-401A, P-401B, P-401C, P-401D, P-401E, P-401F

3. **Verificación:**
   - Data Manager → Filter by Pumps
   - Verificar que Tags se generaron correctamente en secuencia
   - Verificar que cada bomba heredó todas las propiedades de P-401A (tamaño, motor, spec)

**Resultado final:**
- 6 bombas idénticas perfectamente alineadas con 8 ft spacing
- Numeración secuencial automática P-401A through P-401F
- Todos los nozzles configurados idénticamente
- Todas las propiedades de datos consistentes

**Nota adicional:** Si se usa modelo 3D detallado de vendor (importado STEP), aplicar el mismo procedimiento pero asegurando que los nozzles del modelo importado coincidan con los tamaños de conexión especificados (6" suction, 4" discharge).

</details>

---

**Pregunta 3 (Análisis - 20 puntos):**
Un recipiente vertical V-205 (72" dia × 30 ft T-T, 150 psig, Carbon Steel) debe colocarse en una estructura elevada (mezzanine) a elevación 125'-0" para proporcionar gravedad feed a una bomba P-205 ubicada a elevación 100'-0". El recipiente tiene un nozzle de salida de líquido (bottom outlet) de 10" que debe conectarse a la succión de 10" de la bomba ubicada 15 ft horizontalmente al sur del recipiente. Calcule la elevación óptima del nozzle de salida del recipiente considerando que la bomba requiere mínimo 15 ft de NPSH disponible, y explique las consideraciones de diseño.

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

**Cálculo y análisis:**

**Datos del problema:**
- Recipiente V-205: 72" dia, 30 ft T-T, bottom outlet 10" NPS
- Elevación del recipiente (bottom): 125'-0"
- Bomba P-205: Succión 10" NPS, elevación 100'-0"
- Distancia horizontal: 15 ft
- NPSH requerido: 15 ft mínimo

**Paso 1: Determinar elevación del bottom tangent line del recipiente**
- Recipiente instalado en estructura a elevación 125'-0" (typical: bottom tangent line)
- Top tangent line = 125' + 30' = 155'-0"

**Paso 2: Configuración del bottom outlet nozzle**

Opciones de configuración:
1. **Nozzle flush con bottom head** (más común):
   - Elevación del nozzle = Elevación bottom head - projection
   - Para bottom elliptical head de 72" dia: Head depth ≈ 18" (2:1 elliptical)
   - Bottom head low point = 125' - 1.5' = 123.5'
   - Si nozzle es flush: Nozzle elevation ≈ 123.5' - 0.5' (projection) = **123'-0"**

2. **Nozzle en tangent line** (menos deseable para drenaje):
   - Nozzle elevation = 125'-0"

**Selección:** Opción 1 (flush con bottom head) para garantizar drenaje completo.

**Paso 3: Verificar NPSH disponible**

NPSH disponible simplificado:
```
NPSH_avail = (Elevación líquido en V-205) - (Elevación succión P-205) - (Pérdidas fricción) - (Head equivalente de presión vapor)

Asumiendo:
- Nivel normal de líquido en V-205: 50% del T-T height = 125' + 15' = 140'-0"
- Elevación centerline succión bomba: 100'-0" + 0.5' (típico) = 100.5'
- Pérdidas de fricción en 15 ft de pipe: ≈ 1 ft (estimación conservadora para 10" pipe)
- Presión vapor: Despreciable si es líquido frío (asumiendo), o 2-3 ft para líquidos calientes

NPSH_avail = 140' - 100.5' - 1' - 0' = 38.5 ft (líquido frío)
NPSH_avail = 140' - 100.5' - 1' - 3' = 35.5 ft (líquido caliente)

Resultado: NPSH disponible (35.5-38.5 ft) > NPSH requerido (15 ft) ✓
```

**Paso 4: Configuración óptima del nozzle en Plant 3D**

```
Nozzle Properties (Bottom Outlet):
- Nozzle ID: N3-LIQ-OUT
- Size: 10" NPS
- Rating: Class 150 RF (matching vessel rating)
- Mounting Face: Bottom Head
- Radial Position: 0" (center of head - en el low point para drenaje completo)
- Azimuth: 180° (apuntando hacia sur, hacia bomba)
- Projection: 12" (típico para 10" nozzle)
- Face Direction: Vertical downward

Elevation final del nozzle flange face:
123'-0" - 1'-0" (projection) = 122'-0"
```

**Consideraciones de diseño adicionales:**

1. **Drenaje completo del recipiente:**
   - Nozzle en low point del bottom head asegura que el recipiente drene completamente durante shutdown/mantenimiento
   - Crítico para limpieza y cumplimiento de safety standards

2. **Routing de tubería:**
   - Tubería desde V-205 (elev. 122'-0") hasta P-205 (elev. 100.5') tendrá pendiente descendente natural
   - Pendiente = (122 - 100.5) / 15 ft horizontal = 1.43 ft/ft = 143% ¡Muy pronunciada!
   - **Acción:** Considerar "gooseneck" o routing con elbows para reducir pendiente
   - Pendiente óptima para líquidos: 1-2% (1/8" a 1/4" por pie)

3. **Vaporización en línea de succión:**
   - Si líquido está cerca de su punto de ebullición, la caída de elevación rápida podría causar flashing
   - Verificar que presión en nozzle > presión de vapor del líquido
   - Si es riesgo: Considerar elevar bomba o bajar recipiente (si estructura permite)

4. **Soporte de tubería:**
   - Tubería de 10" requiere soportes según ASME B31.3 Appendix F
   - Para acero: Spacing máximo ≈ 16 ft para 10" pipe
   - Dado que hay solo 15 ft de run, probablemente 1-2 soportes intermedios

5. **Accesibilidad:**
   - Recipiente a elevación 125': Requiere plataforma de acceso a nivel de manway (típicamente mid-height = 140')
   - Bomba a elevación 100': Accesible desde grade o plataforma baja
   - Asegurar acceso a válvula de succión de la bomba para mantenimiento

**Conclusión:**
La configuración óptima del nozzle es en el centro del bottom elliptical head, elevación final de flange face = 122'-0", orientación vertical downward. Esta configuración cumple ampliamente con NPSH requirements (38.5 ft disponible vs 15 ft requerido) y asegura drenaje completo del recipiente. El diseñador de tuberías deberá considerar routing con cambios de dirección para evitar pendiente excesivamente pronunciada en línea de succión.

</details>

---

**Pregunta 4 (Procedimiento - 20 puntos):**
Describa el procedimiento paso a paso para importar un modelo 3D STEP de un intercambiador de calor shell & tube proporcionado por un fabricante, convertirlo en un Equipment Object de Plant 3D, configurar sus nozzles de conexión, y agregarlo al catálogo del proyecto para reutilización futura. Incluya consideraciones de limpieza del modelo y verificación de propiedades.

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

**Procedimiento completo de importación y conversión:**

**FASE 1: IMPORTACIÓN DEL MODELO STEP**

**Paso 1: Preparar archivo del fabricante**
1. Obtener archivo STEP del vendor (ejemplo: "Alfa_Laval_M15-BFG_Exchanger.stp")
2. Verificar información del vendor:
   - Datasheet con dimensiones principales
   - Nozzle schedule (ubicación, tamaño, rating de conexiones)
   - Peso operating y shipping
   - Material de construcción

**Paso 2: Importar a AutoCAD Plant 3D**
1. Abrir nuevo drawing en proyecto Plant 3D
2. Ribbon → Insert tab → Import panel → Import
3. Files of Type: Seleccionar "STEP Files (*.stp, *.step)"
4. Seleccionar archivo del vendor
5. Import Options Dialog:
   ```
   Units: Verificar unidades (típicamente milímetros para vendors europeos, inches para USA)
   ☑ Import solids and surfaces
   ☐ Import wireframe geometry (generalmente no necesario)
   Layer: Especificar layer "IMPORTED-GEOMETRY" (para tracking)
   Position: 0,0,0 (insertar en origen para facilitar trabajo)
   ```
6. Click OK → Modelo se importa como 3D solid(s)

**Paso 3: Inspección inicial del modelo importado**
1. Command: ZOOM EXTENTS para ver modelo completo
2. Activar visual styles: Conceptual o Realistic (Ribbon → View → Visual Styles)
3. Verificar:
   - Modelo está completo (shell, heads, nozzles, saddles visible)
   - Escala correcta (medir dimensión conocida vs datasheet)
   - Orientación apropiada (típicamente horizontal con eje X)

**FASE 2: LIMPIEZA Y PREPARACIÓN**

**Paso 4: Limpiar geometría innecesaria**

Modelos de vendor frecuentemente incluyen detalles excesivos:
1. Identificar componentes a simplificar/eliminar:
   - Pernos individuales de bridas (simplificar o eliminar)
   - Detalles internos (baffles, tube bundle detail) si no son visibles externamente
   - Componentes de fabricación (lifting lugs, nameplate, small vents)

2. Decidir nivel de detalle necesario:
   - **LOD 200** (Schematic): Shell envelope + nozzles principales únicamente
   - **LOD 300** (Design): Shell + heads + todos los nozzles + saddles
   - **LOD 400** (Fabrication): Modelo completo con todos los detalles

   Para piping design, generalmente LOD 300 es suficiente.

3. Eliminar componentes innecesarios:
   - Seleccionar objetos individuales a eliminar
   - Command: ERASE o Delete key

4. Simplificar pernos si se desea mantener:
   - Crear cilindro simple en lugar de bolt detallado con threads
   - Reduce significativamente file size y performance

**Paso 5: Verificar y reparar integridad del solid**

1. Command: SOLIDEDIT
2. Seleccionar opción: Body → Check
3. Seleccionar el imported solid
4. Plant 3D verifica integridad: Debe retornar "This object is a valid ShapeManager solid"
5. Si hay errores:
   - Intentar: AUDIT command
   - O: Re-importar con diferentes settings
   - O: Contactar vendor para archivo corregido

**Paso 6: Orientar modelo correctamente**

Para intercambiadores horizontales:
1. Eje longitudinal del exchanger debe alinearse con eje X (estándar de industria)
2. Si es necesario rotar:
   - Command: 3DROTATE
   - Especificar eje de rotación (Z-axis para rotación en planta)
   - Rotar al ángulo correcto

3. Mover a posición origen conveniente:
   - Command: 3DMOVE
   - Mover para que un punto lógico (ej: centerline en inlet nozzle) esté en 0,0,0

**FASE 3: CONVERSIÓN A EQUIPMENT OBJECT**

**Paso 7: Convertir a Plant 3D Equipment**

1. Ribbon → Plant 3D tab → Equipment panel → Convert to Equipment
2. Seleccionar el 3D solid preparado
3. Equipment Conversion Dialog se abre:

```
Equipment Type Configuration:
- Category: Heat Exchangers
- Type: Shell and Tube Exchanger
- Sub-Type: Fixed Tubesheet (o según diseño: Floating Head, U-Tube)
- Equipment Tag Format: E-[Auto-number]
  → Cambiar a específico si se conoce: E-301

Equipment Properties:
- Spec: EXCHANGERS-TEMA-CS-150 (o spec del proyecto)
- Service Description: "Product Cooler" (según aplicación)
```

4. Click Next

**Paso 8: Definir Insertion Point**

```
Insertion Point Selection:
- Método 1: Centerline en inlet nozzle (típico para exchangers)
- Método 2: Centerline del shell en mid-length
- Método 3: Saddle centerline (útil para structural coordination)

Selección recomendada: Centerline del shell en channel end inlet nozzle
- Este punto se usa para inserción del equipo en layouts
- Use OSNAP Center en el circle del inlet nozzle
```

5. Specify insertion point → Click en punto seleccionado

**Paso 9: Configurar Connection Points (Nozzles)**

Fase crítica: Definir cada nozzle del exchanger

1. Add Connection Point dialog:
   - Click "Add Connection" para cada nozzle

**Ejemplo: Intercambiador típico con 4 nozzles (2 shell side, 2 tube side)**

**Nozzle 1: Shell Side Inlet**
```
Connection ID: N1-SHELL-IN
Size: 8" NPS (verificar en datasheet)
Rating: Class 150 RF
Type: Flanged
Location: Pick point en flange face del nozzle en modelo 3D
Orientation: Verificar dirección correcta (perpendicular al shell, radial)
```

**Nozzle 2: Shell Side Outlet**
```
Connection ID: N2-SHELL-OUT
Size: 8" NPS
Rating: Class 150 RF
Type: Flanged
Location: Pick point en opposite end del shell
Orientation: Opuesta a N1 (typical U-flow arrangement)
```

**Nozzle 3: Tube Side Inlet**
```
Connection ID: N3-TUBE-IN
Size: 6" NPS
Rating: Class 300 RF (tube side typically higher pressure)
Location: Pick point en channel head inlet
Orientation: Paralela al eje del exchanger
```

**Nozzle 4: Tube Side Outlet**
```
Connection ID: N4-TUBE-OUT
Size: 6" NPS
Rating: Class 300 RF
Location: Pick point en channel head outlet (opposite end o mismo end según TEMA type)
Orientation: Verificar según configuración
```

2. Repetir para nozzles adicionales:
   - Vents (típicamente 3/4" threaded en top)
   - Drains (3/4" threaded en bottom)
   - Pressure gauge connections
   - Temperature well connections

3. Verificación de orientación:
   - En vista 3D, verificar que flecha de direction apunta correctamente
   - Nozzles radiales: Deben apuntar perpendicularmente desde shell
   - Nozzles axiales: Deben apuntar paralelos al eje

**Paso 10: Asignar propiedades de datos**

```
Equipment Data Properties:

Dimensional Data:
- Shell Diameter: 24" OD (del datasheet)
- Tube Length: 15'-0" (180")
- Overall Length: 18'-6" (con heads y nozzles)
- Heat Transfer Area: 1,250 sq ft (del datasheet)
- Number of Tubes: 248 (del datasheet)

Performance Data:
- Duty: 15.5 MMBtu/hr (del datasheet)
- Shell Side Design Pressure: 150 psig
- Tube Side Design Pressure: 300 psig
- Design Temperature: 400°F

Mechanical Data:
- TEMA Type: AES (front head, shell, rear head types)
- Shell Material: Carbon Steel A516-60
- Tube Material: Stainless Steel 316L
- Tube OD: 0.75"
- Tube Thickness: 0.065" (16 BWG)

Vendor Data:
- Manufacturer: Alfa Laval
- Model Number: M15-BFG
- Serial Number: [To be assigned during fabrication]
- Drawing Number: AL-12345-REV-B
```

**Paso 11: Finalizar conversión**

1. Review all settings en summary screen
2. Click "Finish" → Plant 3D convierte el imported solid en Equipment Object inteligente
3. Verification:
   - Seleccionar objeto → Properties Palette debe mostrar "Plant Equipment" como object type
   - Nozzles deben aparecer como connection points
   - Equipment Tag debe estar asignado

**FASE 4: AGREGAR AL CATÁLOGO DEL PROYECTO**

**Paso 12: Guardar en catálogo para reutilización**

1. Con el equipment object seleccionado:
   - Ribbon → Plant 3D → Equipment → Add to Catalog

2. Catalog Entry Dialog:
   ```
   Catalog Location:
   - Catalog: Project Custom Catalog (no Standard Catalog)
   - Category: Heat Exchangers → Vendor Models → Alfa Laval

   Equipment Definition:
   - Name: "Alfa_Laval_M15-BFG_ShellTube"
   - Description: "Alfa Laval M15-BFG Shell & Tube Exchanger, 24" shell × 15 ft, 1250 sf, TEMA AES"

   Size Table:
   - Create parametric family: Si hay múltiples tamaños (M10, M15, M20...)
   - Single size: Para modelo único

   Thumbnail:
   - Capture view: Plant 3D genera thumbnail automático
   - O: Import custom image (PNG, JPG)
   ```

3. Click OK → Equipment se agrega al catálogo

**Paso 13: Verificar disponibilidad en catálogo**

1. Abrir Equipment Tool Palette
2. Navegar a: Heat Exchangers → Vendor Models → Alfa Laval
3. Verificar que "Alfa_Laval_M15-BFG_ShellTube" aparece
4. Test: Drag and drop en nuevo drawing para verificar funcionalidad

**Paso 14: Documentación**

Crear documentation entry en project database:
```
Equipment Custom Catalog Entry

Item: Alfa_Laval_M15-BFG_ShellTube
Date Added: 2024-11-24
Added By: [Diseñador nombre]
Source: Vendor model from Alfa Laval (email 2024-11-15)
Source File: "Alfa_Laval_M15-BFG_Exchanger.stp" (stored in \\Project\Vendor_Models\)
Revisions:
  - v1 (2024-11-24): Initial import
Notes:
  - Model simplified: Removed bolt details, kept LOD 300
  - Nozzle orientation verified against datasheet AL-12345-REV-B
  - Tube bundle internals not modeled (external envelope only)
```

**FASE 5: VALIDACIÓN Y CONTROL DE CALIDAD**

**Paso 15: Validación completa**

1. **Test de inserción:**
   - Insertar equipment en test drawing
   - Verificar insertion point lógico
   - Verificar rotación funciona correctamente

2. **Test de conexión de piping:**
   - Intentar conectar pipe a cada nozzle
   - Verificar que Plant 3D reconoce connection points
   - Verificar que pipe spec matching funciona (sizes, ratings)

3. **Verificar propiedades:**
   - Properties Palette: Revisar que todas las propiedades custom aparecen
   - Data Manager: Verificar que equipment exporta correctamente a Excel

4. **Performance check:**
   - Verificar que modelo no es excesivamente pesado (file size <5 MB preferible)
   - Si es muy pesado: Considerar simplificación adicional

5. **Documentation check:**
   - Verificar que thumbnail es representativo
   - Verificar que description es clara
   - Verificar que nozzle labels son intuitivos (N1-SHELL-IN es mejor que N1)

**Paso 16: Comunicación al equipo**

1. Notificar al equipo de diseño que nuevo equipment está disponible
2. Proveer quick reference:
   ```
   New Equipment Available: Alfa Laval M15-BFG Shell & Tube Exchanger
   Location: Equipment Palette → Heat Exchangers → Vendor Models → Alfa Laval
   Nozzles:
     - Shell Side: 8" NPS - 150# RF (inlet/outlet)
     - Tube Side: 6" NPS - 300# RF (inlet/outlet)
     - Vents/Drains: 3/4" threaded
   Notes: Model provided by vendor, verified against datasheet AL-12345-REV-B
   ```

**CONSIDERACIONES ADICIONALES:**

**Limpieza del modelo - Best Practices:**
- Mantener balance entre detalle y performance
- LOD 300 (nozzles + envelope) es sweet spot para piping design
- Si modelo vendor tiene >1000 faces, considerar simplificación
- Use FACETRES command para controlar curvature resolution (valor 1-10, default 0.5)

**Verificación de propiedades - Checklist:**
- ☑ Dimensiones match datasheet (±2% tolerance acceptable)
- ☑ Nozzle sizes y ratings correctos
- ☑ Weight (operating y empty) ingresados para structural coordination
- ☑ Material specifications completas
- ☑ Vendor y model number documentados
- ☑ Connection points tested con pipe routing

**Conclusión:**
Este procedimiento asegura que modelos de vendor se integran completamente en Plant 3D como equipment objects inteligentes, manteniendo toda la funcionalidad de nozzle connections, properties management, y catalog reusability. El proceso típicamente toma 30-45 minutos por equipo, pero resulta en modelo de alta calidad reutilizable en todo el proyecto.

</details>

---

**Pregunta 5 (Diseño - 20 puntos):**
Usted está diseñando el layout de un área de compresión que incluye un compresor centrífugo C-501 (paquete skid-mounted de 15 ft × 25 ft × 12 ft alto) con cuatro intercambiadores enfriados por aire E-501A/B/C/D (cada uno 8 ft × 20 ft × 10 ft alto) que deben ubicarse en la parte superior de un pipe rack adyacente. Explique las consideraciones críticas de posicionamiento para: (a) el compresor respecto a vibración y accesibilidad, (b) los air coolers respecto a ventilación y mantenimiento, y (c) la coordinación entre ambos considerando routing de tuberías de interconexión. Incluya criterios de espaciamiento y elevaciones recomendadas.

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

**Análisis completo de posicionamiento:**

**(a) COMPRESOR C-501: Consideraciones de vibración y accesibilidad**

**Vibración y Fundación:**

1. **Ubicación a Grade Level (Piso de Planta):**
   - **Requisito crítico:** Compresores centrífugos generan vibración significativa (especialmente durante startup/shutdown)
   - **NO ubicar en estructuras elevadas** a menos que sea absolutamente necesario y con análisis estructural dinámico completo
   - **Fundación especializada requerida:**
     - Concrete pad aislado del piso general (isolation pad)
     - Espesor típico: 24"-36" (600-900 mm)
     - Refuerzo adicional según análisis dinámico
     - Spring isolators o vibration dampeners según vendor recommendations

2. **Espaciamiento de Seguridad:**
   ```
   Clearances mínimos alrededor de compresor skid (15' × 25'):

   Frontal (lado de motor/driver): 15 ft
   - Acceso para remover motor
   - Espacio para alignment tooling
   - Escape route para operadores

   Lateral (ambos lados): 10 ft mínimo
   - Acceso a paneles de instrumentación
   - Acceso a válvulas de servicio (lube oil, cooling water)
   - Mantenimiento de intercoolers si están en skid

   Posterior: 8 ft
   - Acceso a auxiliares (lube oil system, cooling system)
   - Cable/pipe routing access

   Superior: 20 ft clearance
   - Para overhead crane coverage
   - Lifting lugs del compresor requieren vertical clearance
   - Compresor típicamente se instala/remueve verticalmente
   ```

3. **Orientación del Skid:**
   ```
   Consideraciones de orientación:
   - Eje del compresor (suction-discharge) debe alinearse con pipe rack principal
     → Minimiza longitudes de piping runs
     → Simplifica routing de succión y descarga

   - Lado de instrumentación/control panel debe orientarse hacia:
     → Control room (si hay visual contact requirement)
     → Área de mayor tráfico de operadores
     → Evitar orientación hacia áreas de bajo tráfico (security concern)

   Ejemplo: Si pipe rack corre Norte-Sur:
   - Compresor orientado con suction hacia Norte (desde rack)
   - Discharge hacia Sur (hacia air coolers en rack)
   - Control panel en lado Este u Oeste (accesible desde walkway)
   ```

**Accesibilidad Operacional:**

1. **Proximidad a Control Room:**
   - Distancia recomendada: 100-300 ft
   - Dentro de visual range si es posible (safety monitoring)
   - Considerar ruido: Compresores son fuentes de ruido significativo (90-110 dBA)
     - Ubicar downwind de control room si es posible
     - Acoustic barriers si distancia es insuficiente

2. **Acceso para Maintenance:**
   ```
   Checklist de mantenimiento:
   ☑ Paved access road al skid (mínimo 12 ft ancho para maintenance vehicles)
   ☑ Overhead crane coverage (10-20 ton capacity típico)
   ☑ Laydown area adyacente (mínimo 20' × 30') para equipos removidos
   ☑ Proximidad a maintenance workshop (< 500 ft preferible)
   ☑ Drenajes adecuados para lube oil spills
   ```

3. **Servicios Auxiliares:**
   ```
   Ubicación considerando servicios:
   - Lube Oil System: Típicamente integrado en skid, pero verificar
   - Cooling Water: Requiere headers cercanos (< 50 ft ideal)
   - Instrument Air: Header debe estar cerca para instrumentación
   - Electrical: MCC (Motor Control Center) a distancia < 200 ft
   - Seal Gas System: Si es compresor de gas, seal gas skid debe estar adyacente (< 20 ft)
   ```

**(b) AIR COOLERS E-501A/B/C/D: Ventilación y mantenimiento**

**Ubicación en Top of Pipe Rack:**

1. **Ventajas de ubicación elevada:**
   - Ventilación natural optimizada (sin obstrucción de flujo de aire)
   - No ocupa espacio en congestionado grade level
   - Drenaje por gravedad de condensados
   - Alejado de fuentes de calor radiante de piso

2. **Elevación Recomendada:**
   ```
   Configuración típica:
   - Pipe rack main deck: Elevación 30'-0" (soporte de tuberías principales)
   - Air cooler support structure: 35'-0" (5 ft sobre deck para permitir pipe routing debajo)
   - Air cooler platform: 45'-0" (10 ft sobre support para fan/motor access)
   - Air cooler top: 55'-0" (45' + 10' altura del exchanger)

   Resultado: Clearance de 25 ft sobre grade level para paso de equipos/vehículos
   ```

**Ventilación y Performance:**

1. **Espaciamiento entre Exchangers:**
   ```
   Air coolers E-501A/B/C/D (cada uno 8' × 20'):

   Configuración recomendada: Arreglo en línea (in-line arrangement)

   Layout en pipe rack (vista en planta):

   ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐
   │E-501A│  │E-501B│  │E-501C│  │E-501D│
   │8'×20'│  │8'×20'│  │8'×20'│  │8'×20'│
   └─────┘  └─────┘  └─────┘  └─────┘
      ↑  6'  ↑  6'  ↑  6'  ↑
      Air flow  (spacing between units)

   Spacing entre unidades: 6 ft mínimo
   - Previene re-circulation de aire caliente de descarga
   - Permite acceso para mantenimiento entre unidades
   - Espacio para structural supports

   Longitud total del arreglo: (4 × 20') + (3 × 6') = 80' + 18' = 98 ft
   ```

2. **Orientación respecto a vientos dominantes:**
   ```
   Criterio: Air coolers deben orientarse considerando:

   A. Vientos dominantes (prevailing winds):
      - Eje longitudinal perpendicular a vientos dominantes
      - Maximiza flujo natural de aire a través de units
      - Si vientos dominantes son Este-Oeste:
        → Exchangers orientados Norte-Sur (8 ft en E-W, 20 ft en N-S)

   B. Evitar recirculación:
      - No ubicar downstream de otras fuentes de calor
      - Mantener clearance de estructuras: ≥ 15 ft
      - Evitar ubicación en "pockets" rodeados de estructuras altas

   C. Drenaje de condensados:
      - Si proceso genera condensado, slope los headers ligeramente
      - Drenajes deben conectar a sistema de drenaje cerrado
   ```

**Mantenimiento de Air Coolers:**

1. **Acceso para Tube Bundle Pulling:**
   ```
   Requisito crítico: Tube bundles se remueven para limpieza (típicamente cada 2-3 años)

   Clearance vertical:
   - Sobre el air cooler: Mínimo 12 ft (para lifting con crane)
   - Considerar overhead obstructions (pipe racks superiores, estructuras)

   Clearance horizontal:
   - Lado de bundle extraction: Longitud del bundle + 5 ft
     → Para exchanger de 20 ft: Clearance de 25 ft mínimo
   - Típicamente bundles se extraen desde el lado opuesto a headers

   Configuración:
   E-501A│ │E-501B│ │E-501C│ │E-501D│
        ←─────────────────→ (Bundle extraction direction)
               50 ft clearance (ejemplo)

   Asegurar que no hay obstrucción en dirección de extraction
   ```

2. **Plataformas de Acceso:**
   ```
   API 661 requirements para air cooler access:

   - Platform a nivel de top of tube bundle (para acceso a headers, vents, drains)
     → Elevación: 55'-0" (top of exchanger)
     → Ancho: 4 ft mínimo (OSHA requirement)
     → Debe rodear al menos 2 lados del exchanger

   - Platform intermedia a nivel de fans/motors (si es forced draft):
     → Elevación: 45'-0" (bottom of exchanger)
     → Para acceso a motors, drives, fan blades

   - Ladder de acceso desde grade:
     → Ladder con cage (OSHA req. para altura > 20 ft)
     → O: Stairs si acceso es frecuente (mejor para safety)

   - Handrails: Todos los lados de platforms (42" altura, top/mid/toe rails)
   ```

**(c) COORDINACIÓN COMPRESOR-AIR COOLERS: Routing de interconexión**

**Configuración del Sistema:**

Típicamente en compresión:
```
Process Flow:
C-501 (Compresor) → Discharge Header → E-501A/B/C/D (Air Coolers) → Cooled Gas Return

Configuration:
- Compresor discharge: Alta temperatura (250-400°F típico), Alta presión (150-600 psig)
- Air coolers: Enfriamiento a temperatura requerida (100-150°F)
- Retorno: A proceso o siguiente etapa de compresión
```

**Posicionamiento Relativo:**

1. **Distancia Horizontal:**
   ```
   Optimización de distancia:

   Muy cerca (< 30 ft):
   Ventajas:
   - Minimiza longitud de piping (reduce costo)
   - Minimiza presión drop en discharge
   - Simplifica routing
   Desventajas:
   - Vibración del compresor puede afectar estructura del rack
   - Ruido del compresor cerca de air cooler platform (acceso de personal)

   Distancia media (50-100 ft) - RECOMENDADO:
   Ventajas:
   - Aislamiento de vibración
   - Flexibilidad en routing
   - Permite expansiones futuras
   - Reducción de ruido en area de air coolers
   Desventajas:
   - Mayor longitud de piping
   - Mayor presión drop (pero generalmente aceptable)

   Muy lejos (> 150 ft):
   Generalmente innecesario y costoso (pipe, soportes, presión drop)
   ```

2. **Configuración Recomendada:**
   ```
   Layout sugerido (vista en planta):

                    PIPE RACK (running Este-Oeste)
   ════════════════════════════════════════════════════════
   ║                                                      ║
   ║  ┌───┐  ┌───┐  ┌───┐  ┌───┐                       ║ Elev 45'
   ║  │E501A │E501B │E501C │E501D│   (Air Coolers)      ║
   ║  └───┘  └───┘  └───┘  └───┘                       ║
   ║      ↑    ↑    ↑    ↑                              ║
   ║      └────┴────┴────┴─── Supply Header (20" pipe) ║
   ║           ↑                                         ║
   ║           │ (Vertical riser from compresor)        ║
   ════════════════════════════════════════════════════════
                   │
                   │ 60 ft (horizontal distance)
                   │
              ┌────┴────┐
              │ C-501   │  (Compresor)               Elev 0' (Grade)
              │ Skid    │
              │15'×25'  │
              └─────────┘

   Ventajas de esta configuración:
   - Compresor a grade level (fundación adecuada, acceso fácil)
   - Air coolers elevados (ventilación óptima)
   - Distancia 60 ft: Balance entre proximidad y aislamiento
   - Riser vertical desde discharge del compresor a header en rack
   - Header horizontal en rack distribuye a 4 air coolers en paralelo
   ```

**Routing de Tuberías de Interconexión:**

1. **Discharge Header (Compresor a Air Coolers):**
   ```
   Típicamente: 16" a 24" NPS (alta velocidad, gas comprimido)

   Routing:
   1. Desde discharge nozzle de C-501 (elev ~6' sobre grade)
   2. Vertical riser hasta nivel de pipe rack (elev 35'-40')
      - Usar elbows de radio largo (reduce presión drop)
      - Considerar expansion loop si temperatura es alta (thermal expansion)
   3. Horizontal run en pipe rack hacia air coolers
      - Slope mínima 1/4" por ft hacia low point drain
   4. Branching a cada air cooler (E-501A/B/C/D)
      - Igual longitud preferible para balanceo de flujo
      - Cada branch con válvula de aislamiento

   Consideraciones:
   - Material: Carbon Steel o Stainless según temperatura/presión
   - Schedule: 40 o mayor según ASME B31.3 analysis
   - Soportes: Cada 20-30 ft según Appendix F (gas pipe, lighter than liquid)
   - Expansión térmica: Critical si ΔT es grande (25°F ambiente a 350°F discharge)
   ```

2. **Return Header (Air Coolers a Proceso):**
   ```
   Gas enfriado retorna a proceso:

   Routing:
   1. Colector desde outlets de E-501A/B/C/D
      - Típicamente en mismo rack, paralelo a supply header
   2. Descenso desde rack a nivel de proceso
   3. Conexión a siguiente etapa (storage, siguiente compresión stage, etc.)

   Tamaño típico: Similar a supply (16"-24") o ligeramente mayor (gas más frío = mayor densidad)
   ```

3. **Drenajes y Venteos:**
   ```
   Críticos en sistemas de compresión:

   Low point drains:
   - Cada 150-200 ft en headers horizontales
   - Bottom of risers
   - Conectar a closed drain system (no discharge a atmosfera si gas es tóxico/inflamable)

   High point vents:
   - Top of air coolers (purga de aire durante startup)
   - Top of risers
   - Conectar a vent header o flare system
   ```

**Elevaciones Coordinadas:**

```
Resumen de elevaciones recomendadas:

Grade Level (0'-0"):
├─ Compresor C-501 (top of skid: 12'-0")
├─ Compresor discharge nozzle: 6'-0"
└─ Maintenance laydown area

Pipe Rack Structure:
├─ Main pipe deck: 30'-0"
│  └─ Mayoría de pipe runs de proceso
├─ Air cooler support beams: 35'-0"
├─ Air cooler platform (access): 45'-0"
│  └─ Access a fans, motors, bottom of bundles
├─ Top of air cooler bundles: 55'-0"
│  └─ Access platform para headers, vents, drains
└─ Overhead clearance: 67'-0" (12 ft sobre top of coolers)

Vertical Riser (Discharge):
- Bottom: 6'-0" (compresor nozzle)
- Top: 35'-0" (connection a horizontal header en rack)
- Length: 29 ft (considerar expansion loop si necesario)
```

**Criterios de Espaciamiento Consolidados:**

```
COMPRESOR C-501:
- Frontal: 15 ft mínimo
- Lateral: 10 ft mínimo (ambos lados)
- Posterior: 8 ft
- Superior: 20 ft clearance para crane
- Fundación: Aislada, 24"-36" espesor, con vibration isolation

AIR COOLERS E-501A/B/C/D:
- Entre unidades: 6 ft mínimo (8 ft preferible)
- Bundle extraction clearance: Longitud + 5 ft (25 ft para units de 20 ft)
- Overhead clearance: 12 ft sobre top of bundles
- Lateral desde edge de rack: 3 ft mínimo (acceso a platforms)

COMPRESOR-AIR COOLERS:
- Distancia horizontal: 50-100 ft (óptimo: 60-75 ft)
- Air coolers elevados: 45 ft sobre grade
- Compresor a grade level (elev 0')
- Riser vertical de interconexión: ~35 ft
```

**Conclusión:**
Esta configuración optimiza performance operacional (ventilación de air coolers, fundación adecuada para compresor), mantenibilidad (acceso a todos los componentes, clearance para bundle pulling), seguridad (aislamiento de vibración, distancias de seguridad), y eficiencia de piping routing (distancias razonables, mínimos cambios de dirección, consideración de expansión térmica). El diseño cumple con API 661 para air-cooled exchangers y best practices de la industria para compressor installations.

</details>

---

## Resumen de la Lección

En esta lección hemos cubierto los fundamentos completos del modelado y colocación de equipos de proceso en AutoCAD Plant 3D 2026:

1. **Catálogo de Equipos:** Estructura jerárquica del catálogo, categorías principales (vessels, pumps, exchangers, etc.), equipos parametrizados con múltiples LOD, y sistema de especificaciones (specs) que controlan disponibilidad de equipos según condiciones de diseño.

2. **Colocación de Equipos:** Métodos de inserción desde catálogo, técnicas de posicionamiento preciso (coordenadas absolutas, relativas, grid-based), configuración de propiedades dimensionales y de materiales, y gestión de múltiples instancias mediante arrays.

3. **Configuración de Nozzles:** Anatomía completa de nozzles (ID, size, rating, facing, orientation), procedimientos de configuración manual y desde plantillas, mejores prácticas de nomenclatura y orientación, y consideraciones especiales para PSVs, manways y thermowells.

4. **Equipos Personalizados:** Creación mediante Parametric Equipment Creator (sin programación), importación y conversión de modelos de vendor (STEP, IGES), definición de connection points, configuración de propiedades de datos custom, y gestión de bibliotecas de equipos del proyecto.

5. **Posicionamiento Estratégico:** Criterios de espaciamiento según tipo de equipo y códigos de seguridad, consideraciones de proceso (NPSH, flujo por gravedad, secuencia), accesibilidad para operación y mantenimiento, y coordinación con estructuras (grade level vs elevado).

6. **Propiedades y Etiquetado:** Sistemas de nomenclatura estándar de la industria, configuración de auto-tagging, propiedades estándar vs custom, integración con CMMS, y gestión de datos mediante Data Manager con import/export Excel.

7. **Gestión de Bibliotecas:** Organización de content libraries de proyecto, compartir contenido entre proyectos, actualización de equipos en modelos existentes, y sincronización con P&ID.

Estos conocimientos constituyen la base fundamental para el diseño de tuberías 3D, ya que los equipos son los puntos de origen y destino de todas las líneas de proceso. La correcta configuración de equipos y nozzles en esta etapa previene reprocesos costosos en fases posteriores del proyecto.

En la **Lección 12**, aplicaremos estos conocimientos para iniciar el enrutamiento de tuberías, conectando los equipos mediante líneas de proceso diseñadas conforme a especificaciones y códigos de la industria.

---

**Tiempo estimado de estudio:** 60 minutos
**Palabras:** 7,485
