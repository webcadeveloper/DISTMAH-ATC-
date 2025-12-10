# Lección 2: Structures - Pozos de Visita y Catch Basins

**Duración:** 60 minutos
**Módulo:** 5 - Redes de Tuberías y Utilities
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Identificar los tipos de structures en Civil 3D (Manholes, Catch Basins, Inlets, Junction Boxes)
✅ Colocar structures en ubicaciones estratégicas de diseño
✅ Configurar Structure Properties (Rim, Sump, Connected Pipes)
✅ Aplicar Connection Rules para conectividad automática
✅ Editar structures: cambiar tamaño, profundidad, y elevaciones
✅ Utilizar Structure Styles para visualización profesional
✅ Personalizar structures con Part Builder (introducción)
✅ Renderizar structures en perfiles longitudinales

---

## Introducción

Las **structures** (estructuras) son puntos críticos en las redes de tuberías donde ocurren cambios de dirección, diámetro, pendiente, o donde se recolecta agua superficial. En ingeniería civil, el diseño correcto de estructuras es fundamental para el funcionamiento hidráulico del sistema y el mantenimiento futuro.

Civil 3D modela structures como objetos 3D inteligentes con geometría precisa, conectividad automática, y datos de ingeniería integrados. Estas no son simples círculos o bloques: contienen información sobre profundidad, diámetro, materiales, tuberías conectadas, y pérdidas hidráulicas.

**Importancia profesional:**
- Pozos de visita permiten inspección y limpieza de alcantarillados
- Catch basins capturan escorrentía pluvial antes de que llegue a ríos
- El espaciamiento correcto reduce costos de construcción
- La profundidad adecuada previene congelamiento en climas fríos

![Structures en Pipe Networks](../../imagenes/modulo-5/leccion-2-structures-overview.png)

---

## 1. Tipos de Structures en Civil 3D

### 1.1 Manholes (Pozos de Visita)

**Uso:** Alcantarillado sanitario y pluvial

**Características:**
- Estructuras de acceso para inspección y limpieza
- Ubicados en intersecciones de tuberías
- Requeridos cuando cambia dirección, pendiente, o diámetro
- Espaciamiento típico: cada 100-150 metros (330-500 ft)

**Tipos en Parts Catalog:**

**Concentric Manhole:**
- Cono de reducción centrado
- Más común en alcantarillado sanitario
- Entrada y salida alineadas al centro

**Eccentric Manhole:**
- Cono de reducción excéntrico
- Permite mejor flujo en tuberías grandes
- Reduce turbulencia

**Flat Top Manhole:**
- Sin cono de reducción
- Usado cuando el diámetro del pozo es pequeño
- Común en redes poco profundas

**Componentes de un Manhole:**
- **Frame & Cover** (marco y tapa) - nivel de calle
- **Cone** (cono) - transición de diámetro
- **Barrel** (barril/cilindro) - cuerpo principal
- **Base/Bench** (base) - piso con canales de flujo
- **Sump** (sumidero) - profundidad adicional para sedimentos

![Componentes de Manhole](../../imagenes/modulo-5/leccion-2-manhole-components.png)

### 1.2 Catch Basins (Bocas de Tormenta)

**Uso:** Alcantarillado pluvial (storm sewer)

**Características:**
- Capturan escorrentía superficial de calles y estacionamientos
- Ubicados en puntos bajos, esquinas, y cada 60-90 metros
- Tienen reja superior (grate) para entrada de agua
- Sump profundo atrapa sedimentos y basura

**Tipos:**

**Type 1 Catch Basin:**
- Entrada lateral (curb opening)
- Común en calles residenciales
- Más económico

**Type 2 Catch Basin:**
- Entrada superior por reja (grate)
- Mayor capacidad de captación
- Usado en áreas de alto flujo

**Combination Inlet:**
- Entrada lateral Y reja superior
- Máxima eficiencia de captación
- Común en carreteras y autopistas

**Componentes:**
- **Frame & Grate** (marco y reja) - captura agua
- **Box** (caja) - cuerpo principal
- **Outlet Pipe Connection** (conexión de salida)
- **Sump** (sumidero) - 0.6-1.2 m de profundidad

![Tipos de Catch Basins](../../imagenes/modulo-5/leccion-2-catch-basin-types.png)

### 1.3 Inlets y Outlets

**Inlet (Entrada):**
- Punto de entrada de agua al sistema
- Puede ser desde canal, cuneta, o área de drenaje
- Sin tuberías que llegan (upstream), solo tuberías que salen

**Outlet (Salida):**
- Punto de descarga final del sistema
- Descarga a río, lago, estanque de retención, o sistema mayor
- Sin tuberías que salen (downstream), solo tuberías que llegan

**Headwall:**
- Estructura de concreto al final de alcantarillas
- Protege el terreno de erosión
- Mejora la estética

### 1.4 Junction Boxes (Cajas de Conexión)

**Uso:** Conexiones domiciliarias y cambios menores

**Características:**
- Estructuras pequeñas (generalmente rectangular)
- Conectan ramales domiciliarios a red principal
- No son accesibles para persona (solo inspección con cámara)
- Más económicas que manholes completos

**Aplicación típica:**
```
Lote residencial → Junction Box → Ramal → Manhole → Colector principal
```

### 1.5 Null Structures (Estructuras Nulas)

**Uso:** Puntos de conexión sin geometría física

**Características:**
- No tienen geometría real (no se construyen)
- Usadas para modelado de conexiones lógicas
- Útiles en análisis hidráulico para puntos de cálculo
- No aparecen en planos de construcción

---

## 2. Colocación de Structures

### 2.1 Método 1: Estructura Individual

**Pasos:**

1. **Activar Pipe Network Layout Tools:**
   - Home Tab → Create Design → Pipe Network dropdown
   - Click **"Pipe Network Creation Tools"**
   - Se abre la barra de herramientas flotante "Pipe Network Layout Tools"

2. **Seleccionar tipo de Structure:**
   - En "Structure" dropdown, selecciona: `Concentric Cylindrical Structure 48 in`

3. **Colocar en el drawing:**
   - Comando en línea de comandos: `Specify structure insertion point:`
   - Click en la ubicación deseada (o introduce coordenadas)
   - Civil 3D calcula automáticamente la Rim Elevation desde la superficie de referencia

4. **Verificar en Prospector:**
   - Toolspace → Prospector
   - Expande tu Pipe Network → Structures
   - Verás la estructura añadida con un nombre automático: `STR-001`

![Pipe Network Layout Tools](../../imagenes/modulo-5/leccion-2-layout-tools-toolbar.png)

### 2.2 Método 2: Network Layout Toolbar Completa

**Toolbar buttons principales:**

| Icono | Herramienta | Función |
|-------|-------------|---------|
| Structure Only | Coloca solo estructura (sin tubería) |
| Pipe and Structure | Dibuja tubería y coloca estructura al final |
| Pipe Run | Dibuja múltiples tuberías conectadas |
| Delete Pipe Network Object | Elimina pipe o structure |

**Workflow eficiente:**
1. Coloca TODAS las structures primero (manholes/catch basins en ubicaciones estratégicas)
2. Luego conecta con pipes (siguiente sección)

### 2.3 Criterios de Ubicación de Structures

**Manholes - Requeridos cuando:**
- Cambio de dirección horizontal > 10°
- Cambio de pendiente de tubería
- Cambio de diámetro de tubería
- Intersección de tuberías (confluencia)
- Distancia máxima alcanzada (100-150 m)
- Cambio de material de tubería

**Catch Basins - Ubicación estratégica:**
- Puntos bajos de calles (antes de subir pendiente)
- Esquinas de calles (ambos lados del cruce)
- Antes de puentes o pasos a desnivel
- Cada 60-90 m en calles largas
- Entrada de estacionamientos grandes

**Regla de oro:**
```
Espaciamiento Catch Basins = función de:
- Pendiente de calle (más plana = más catch basins)
- Intensidad de lluvia de diseño
- Ancho de calle (más ancha = más captación)
- Capacidad de reja
```

![Ubicación Estratégica de Structures](../../imagenes/modulo-5/leccion-2-structure-placement.png)

---

## 3. Structure Properties (Propiedades)

### 3.1 Acceso a Properties

**Método 1:**
- Selecciona structure en el drawing
- Ctrl+1 (Properties Palette)

**Método 2:**
- Prospector → Pipe Networks → [Red] → Structures
- Click derecho en estructura → **Properties**

### 3.2 General Properties

**Information Tab:**
- **Name:** `STR-001`, `MH-Central-01`, etc. (renombrable)
- **Description:** "Pozo de visita en intersección Av. Principal y Calle 5"
- **Object Style:** Estilo de visualización (lo veremos más adelante)
- **Part Family:** Tipo de estructura (Concentric Manhole, Catch Basin, etc.)
- **Part Size:** Diámetro (48 in, 60 in, etc.)

### 3.3 Elevations (Elevaciones)

**Critical elevations:**

**Rim Elevation:**
- Elevación de la tapa (nivel de superficie)
- Puede ser:
  - **Automatic** - Civil 3D toma elevación de superficie
  - **Manual Override** - tú especificas (ej: ajustar a nivel de pavimento final)
- Típico: Rim = Ground Elevation + 0.1 ft (para drenaje hacia el pozo)

**Sump Elevation:**
- Elevación del fondo del sumidero
- Calculada automáticamente: Sump Elev = Invert más bajo - Sump Depth
- Sump Depth típico: 0.5 ft (0.15 m) para capturar sedimentos

**Invert Elevations (múltiples - uno por cada pipe conectado):**
- **Invert IN** - elevación donde entra tubería
- **Invert OUT** - elevación donde sale tubería
- Debe haber caída (drop) entre IN y OUT
- Típico drop: 0.1 ft (0.03 m)

**Ejemplo numérico:**
```
Rim Elevation:         100.00 m
Invert IN (Norte):      95.50 m
Invert OUT (Sur):       95.40 m  (0.10 m drop)
Sump Depth:              0.50 m
Sump Elevation:         94.90 m
```

![Structure Elevations Diagram](../../imagenes/modulo-5/leccion-2-structure-elevations-diagram.png)

### 3.4 Part Properties

**Part Dimensions:**
- **Inner Diameter:** Diámetro interior del cilindro
- **Wall Thickness:** Espesor de pared (para cálculo de excavación)
- **Barrel Height:** Altura del cilindro
- **Cone Height:** Altura del cono de reducción

**Material:**
- Concrete (más común en manholes)
- Precast Concrete
- Brick
- Plastic (HDPE - manholes prefabricados)

### 3.5 Connected Pipes

**Lista de tuberías conectadas:**
- Muestra todas las tuberías que llegan o salen de esta estructura
- Cada entrada muestra:
  - Pipe Name
  - Direction (IN o OUT)
  - Invert Elevation
  - Diameter

**Útil para verificar:**
- Que todas las conexiones sean correctas
- Que haya al menos una salida (OUT) y una entrada (IN)
- Que no haya tuberías "huérfanas"

---

## 4. Connection Rules (Reglas de Conexión)

### 4.1 ¿Qué son las Connection Rules?

Son parámetros que controlan cómo se conectan automáticamente pipes y structures cuando usas Layout Tools.

**Acceso:**
Settings Tab → Pipe Network → Structure → [Part Family] → Rules Tab

### 4.2 Pipe Drop Across Structure

**Definición:** Caída vertical entre pipe entrante y pipe saliente.

**Por qué es necesario:**
- Compensa pérdidas de fricción en la estructura
- Evita que el agua "suba" (imposible por gravedad)
- Estándar de diseño en muchas normas

**Valores típicos:**
- Sanitario: 0.1 ft (0.03 m) - mínimo
- Pluvial: 0.05-0.15 ft (0.015-0.045 m)
- Si hay cambio de diámetro: 0.2 ft (0.06 m)

**Configuración en Rules:**
```
Drop across structure = 0.10 ft
```

Civil 3D aplicará esto automáticamente al conectar pipes.

### 4.3 Pipe to Structure Matching

**Problema:** ¿Cómo conectar una tubería de 12" a una estructura de 48"?

**Opciones de matching:**

**Center to Center:**
- Centro de pipe alineado con centro de structure
- Más simple, usado en structures pequeñas

**Wall to Wall:**
- Pared de pipe conecta a pared interior de structure
- Más preciso, usado en diseño detallado

**Invert to Invert:**
- Fondo de pipe alineado con fondo de structure
- Común en diseño sanitario

### 4.4 Structure Sizing Rule

**Automatic Structure Sizing:**
Civil 3D puede cambiar automáticamente el tamaño de structure según las tuberías conectadas.

**Regla típica:**
```
Structure Diameter = Largest Pipe Diameter + 36 in (mínimo)
```

**Ejemplo:**
- Si conectas pipes de 12", 15", y 18"
- Civil 3D seleccionará automáticamente un manhole de 48" o 60" (según disponibilidad en Parts List)

**Configuración:**
Settings → Structure Rules → Enable "Automatic Size Based on Pipes"

![Connection Rules](../../imagenes/modulo-5/leccion-2-connection-rules.png)

---

## 5. Edición de Structures

### 5.1 Cambiar Tamaño de Structure (Swap Part)

**Escenario:** Colocaste un manhole de 48" pero necesitas uno de 60".

**Pasos:**
1. Selecciona la structure en el drawing
2. **Grip menu (punto azul):** Click en el grip central
3. Aparece menú contextual: **"Swap Part"**
4. Selecciona nuevo tamaño: `60 in`
5. Enter

**Resultado:** La estructura cambia de tamaño, pero mantiene todas las conexiones y elevaciones.

### 5.2 Editar Elevaciones Manualmente

**Override Rim Elevation:**

1. Selecciona structure → Properties (Ctrl+1)
2. **Part Data → Rim Elevation:**
   - Cambia de "Surface" a valor manual: `100.50`
3. Enter

**Útil cuando:**
- La superficie no representa el nivel final de pavimento
- Necesitas ajustar a cotas de diseño específicas
- El pozo está en zona sin superficie modelada

**Override Invert Elevations:**

1. Properties → Part Data
2. Busca sección "Connected Pipes"
3. Edita manualmente "Invert Elevation" de cada pipe
4. **Cuidado:** Asegúrate de mantener flujo descendente (IN > OUT)

### 5.3 Editar Sump Depth

**Modificar profundidad de sumidero:**

1. Properties → Part Data → **Sump Depth**
2. Cambia valor: `0.50 ft` → `1.00 ft`
3. Apply

**Efecto:** El fondo del pozo baja 0.50 ft adicionales.

**Cuándo aumentar sump:**
- Zonas con alta carga de sedimentos
- Áreas con mucha basura (zonas urbanas densas)
- Reducir frecuencia de limpieza

### 5.4 Desconectar y Reconectar Pipes

**Disconnect Pipe:**
1. Selecciona pipe
2. Click grip en extremo conectado a structure
3. Menú contextual → **"Disconnect from Structure"**
4. El pipe queda "suelto"

**Reconnect Pipe:**
1. Click grip en extremo suelto del pipe
2. Arrastra hacia structure deseada
3. Cuando cerca de structure, aparece **snap marker**
4. Click para conectar

![Edit Structure Operations](../../imagenes/modulo-5/leccion-2-edit-structures.png)

---

## 6. Structure Styles (Estilos de Visualización)

### 6.1 ¿Qué es un Structure Style?

Define cómo se visualiza la structure en:
- Plan View (vista en planta)
- Profile View (vista en perfil)
- Section View (vista en sección)
- 3D Model View

**Componentes del Style:**
- Display (capas, colores, lineweights)
- 3D Geometry (cilindro, cono, frame)
- Hatch Patterns (rellenos en secciones)

### 6.2 Estilos Comunes

**Plan View:**

**Basic:**
- Círculo simple con nombre
- Sin detalles internos
- Rápido para diseño preliminar

**Standard:**
- Círculo con símbolo de estructura
- Flechas indicando flujo
- Diámetro anotado

**Detailed:**
- Geometría completa (frame, cono visible)
- Tuberías conectadas renderizadas
- Para planos de construcción

**Profile View:**

**Schematic:**
- Rectángulo simple
- Solo muestra altura y ancho básicos

**Full Section:**
- Sección completa mostrando:
  - Frame & cover
  - Cone
  - Barrel
  - Pipe connections (entradas y salidas)
  - Sump

![Structure Styles Comparison](../../imagenes/modulo-5/leccion-2-structure-styles.png)

### 6.3 Cambiar Structure Style

**Para una structure individual:**
1. Selecciona structure
2. Properties → General → **Object Style**
3. Selecciona: `Manhole - Plan Detailed`
4. Apply

**Para todas las structures de un tipo:**
1. Settings Tab → Pipe Network → Structure → [Part Family]
2. Click derecho → **Edit Feature Settings**
3. Default Styles → **Object Style:** `[tu estilo]`
4. OK

**Ahora todas las nuevas structures de ese tipo usarán el estilo seleccionado.**

---

## 7. Part Builder (Introducción)

### 7.1 ¿Qué es Part Builder?

**Autodesk Part Builder** es una aplicación standalone que permite crear partes personalizadas (pipes y structures) para el Parts Catalog.

**Ubicación:**
```
C:\Program Files\Autodesk\AutoCAD 2026\C3D\Part Builder\PartBuilder.exe
```

### 7.2 Casos de Uso

**Crear structures personalizadas cuando:**
- Normas locales requieren geometría específica no estándar
- Estructuras prefabricadas de fabricante específico
- Diseños especiales (ej: cámaras de inspección rectangulares con dimensiones únicas)

**Ejemplo:**
- Pozo de visita con geometría según norma mexicana
- Catch basin prefabricado de proveedor local
- Cámara de bombeo con geometría especial

### 7.3 Workflow Básico

1. **Abrir Part Builder**
2. **Seleccionar tipo base:** Structure o Pipe
3. **Definir parámetros:**
   - Shape (circular, rectangular, custom)
   - Size ranges (diámetros disponibles)
   - Materials
   - Connection points (dónde pueden conectarse pipes)
4. **Modelar geometría 3D** (si es complejo)
5. **Exportar a Parts Catalog**
6. **Importar en Civil 3D** y añadir a Parts List

**Nota:** Part Builder es un tema avanzado. En este curso básico solo necesitas saber que existe para personalización futura.

---

## 8. Rendering en Perfiles

### 8.1 Structures en Profile View

Cuando creas un perfil longitudinal de tu pipe network, las structures se muestran en sección transversal, revelando:

- Rim elevation (nivel de tapa)
- Barrel (cuerpo del pozo)
- Invert elevations de pipes entrantes y salientes
- Sump depth
- Cone (si aplica)

**Esto es crítico para:**
- Verificar que hay suficiente profundidad (cover)
- Confirmar que inverts tienen caída correcta
- Revisar interferencias con otras utilities
- Planos de construcción

### 8.2 Structure Profile Style

**Tipos de visualización en perfil:**

**Schematic:**
```
┌─────┐
│     │  <- Solo rectángulo simple
└─────┘
```

**Standard:**
```
┌─────┐
│ ╱╲  │  <- Muestra cone
│ ││  │  <- Muestra barrel
└─────┘  <- Muestra sump
```

**Full Detail:**
```
┬─────┬  <- Frame
│ ╱╲  │  <- Cone con detalle
│ ││  │  <- Barrel con espesor de pared
│ ══  │  <- Invert pipes con elevaciones
└─────┘  <- Sump detallado
```

### 8.3 Configurar Profile Rendering

1. **Selecciona structure**
2. **Properties → Profile**
3. **Profile Style:** Selecciona `Structure Full Detail`
4. **Show Rim:** ✅ Enabled
5. **Show Sump:** ✅ Enabled
6. Apply

**Resultado:** En el profile view, verás la estructura con todos sus componentes.

![Structure Profile Rendering](../../imagenes/modulo-5/leccion-2-structure-profile-view.png)

---

## Ejercicio Práctico 2

**Objetivo:** Colocar structures en una red de alcantarillado pluvial y configurar sus propiedades.

**Preparación:**
- Abre un drawing con una superficie existente
- Asegúrate de tener una Pipe Network creada (de Lección 1)

**Tareas:**

**Parte A: Colocar Structures**

1. **Home → Pipe Network → Pipe Network Creation Tools**
2. **Selecciona tu red** en el dropdown
3. **Structure dropdown:** Selecciona `Catch Basin Type 1`
4. **Coloca 5 catch basins** en diferentes ubicaciones (simula una calle)
   - Espaciamiento sugerido: 200-250 ft (60-75 m) entre cada uno
5. **Cambia a:** `Concentric Cylindrical Structure 48 in`
6. **Coloca 1 manhole** al final de la serie (será el outlet)

**Parte B: Verificar y Renombrar**

1. **Prospector → Pipe Networks → [Tu Red] → Structures**
2. Verás las 6 structures con nombres automáticos
3. **Click derecho en cada una → Properties**
4. Renombra:
   - `CB-01` a `CB-05` (catch basins)
   - `MH-OUTLET` (manhole final)

**Parte C: Editar Propiedades**

1. **Selecciona CB-01**
2. **Properties (Ctrl+1)**
3. **Part Data:**
   - Rim Elevation: Verifica que sea automático desde superficie
   - Sump Depth: Cambia a `1.0 ft` (para mayor capacidad de sedimentos)
4. Repite para todos los catch basins

**Parte D: Cambiar Tamaño de Structure**

1. **Selecciona MH-OUTLET**
2. **Click en grip central** (punto azul en medio)
3. **Swap Part** → Selecciona `60 in`
4. Enter

**Parte E: Revisión Final**

1. **Vista 3D:**
   - Command: `3DORBIT`
   - Observa las structures en 3D
   - Verifica que se vean correctamente
2. **Properties de MH-OUTLET:**
   - Anota: Rim Elevation, Sump Elevation
   - Calcula profundidad total: Rim - Sump = ?

**Entregable:**
- Screenshot en planta mostrando las 6 structures
- Screenshot de Properties de MH-OUTLET mostrando elevaciones
- Cálculo de profundidad total del manhole

![Ejercicio 2 Layout](../../imagenes/modulo-5/leccion-2-ejercicio-layout.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia principal entre un Manhole y un Catch Basin en términos de función?

**Pregunta 2:** Define "Rim Elevation" y "Sump Elevation". ¿Cuál es mayor?

**Pregunta 3:** ¿Por qué es necesario tener un "drop" (caída) entre la elevación de invert de entrada y salida en un manhole?

**Pregunta 4:** Menciona 3 criterios para decidir dónde colocar un manhole en una red de alcantarillado.

**Pregunta 5:** ¿Qué herramienta usarías para crear una estructura personalizada que no existe en el Parts Catalog estándar?

---

## Recursos Adicionales

**Documentación oficial:**
- Civil 3D 2026 Help - "About Structures"
- Ten States Standards - Design Standards for Wastewater Facilities
- AASHTO - Model Drainage Manual

**Videos recomendados:**
- Civil 3D Structures Fundamentals (YouTube Autodesk)
- Manhole Design Best Practices
- Creating Custom Structures with Part Builder

**Estándares descargables:**
- `Manhole_Spacing_Guidelines.pdf`
- `Catch_Basin_Design_Standards.pdf`

---

## Resumen

En esta lección aprendiste:

✅ **Tipos de structures:** Manholes, Catch Basins, Inlets, Outlets, Junction Boxes
✅ **Colocación estratégica:** Criterios de espaciamiento y ubicación según tipo de red
✅ **Structure Properties:** Rim, Invert, Sump elevations y su importancia hidráulica
✅ **Connection Rules:** Pipe drops, matching rules, automatic sizing
✅ **Edición:** Swap parts, editar elevaciones, desconectar/reconectar pipes
✅ **Styles:** Visualización en plan, profile, y 3D según necesidades del proyecto
✅ **Part Builder:** Herramienta para crear structures personalizadas (introducción)
✅ **Profile rendering:** Structures en perfiles longitudinales para documentación

**Próxima Lección:** Layout de Redes por Alineamiento (herramientas automáticas para crear redes completas siguiendo calles)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos colocando structures en diferentes escenarios (sanitario vs pluvial)
