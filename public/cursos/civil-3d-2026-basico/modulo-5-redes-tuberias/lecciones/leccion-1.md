# Lección 1: Pipe Networks - Fundamentos

**Duración:** 60 minutos
**Módulo:** 5 - Redes de Tuberías y Utilities
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender la diferencia entre Pipe Networks y líneas CAD tradicionales
✅ Navegar el Parts Catalog de Civil 3D (catálogos de tuberías y estructuras)
✅ Crear y configurar Parts Lists para proyectos específicos
✅ Crear tu primera Pipe Network desde cero
✅ Configurar propiedades hidráulicas de redes (Flow Direction, Invert Elevations)
✅ Utilizar Pipe Network Properties para control de diseño
✅ Aplicar Pipe Rules y Structure Rules para diseño automático

---

## Introducción

Las redes de tuberías son sistemas críticos de infraestructura urbana: alcantarillado sanitario, drenaje pluvial, y agua potable. Tradicionalmente, estos sistemas se dibujaban con líneas simples en AutoCAD, requiriendo cálculos manuales y sin inteligencia de diseño.

**Civil 3D revoluciona este proceso** con **Pipe Networks**: objetos BIM inteligentes que contienen datos de ingeniería hidráulica, se conectan automáticamente, calculan elevaciones, verifican pendientes, y generan documentación dinámica.

### Diferencia Fundamental: AutoCAD vs Civil 3D

**En AutoCAD tradicional:**
- Líneas y círculos representan tuberías
- Cálculos manuales de pendientes y elevaciones
- Sin verificación de conectividad
- Etiquetas estáticas que no se actualizan
- Perfil longitudinal dibujado manualmente

**En Civil 3D con Pipe Networks:**
- Objetos inteligentes con propiedades hidráulicas
- Cálculos automáticos de inverts, slopes, velocities
- Conectividad automática entre pipes y structures
- Etiquetas dinámicas (elevaciones, diámetros, pendientes)
- Perfiles generados automáticamente
- Análisis hidráulico integrado (novedad 2026)

![Comparación AutoCAD vs Civil 3D Pipe Networks](../../imagenes/modulo-5/leccion-1-comparacion-cad-vs-civil3d.png)

---

## 1. Conceptos Fundamentales de Pipe Networks

### 1.1 ¿Qué es un Pipe Network?

Un **Pipe Network** es una colección de objetos conectados que representa un sistema completo de tuberías:

**Componentes principales:**
- **Pipes** (tuberías): Conductos que transportan fluidos
- **Structures** (estructuras): Pozos de visita, catch basins, cajas de conexión
- **Appurtenances**: Accesorios (válvulas, hidrantes - principalmente en pressure networks)

**Datos que contiene cada Pipe:**
- Diámetro (diameter/size)
- Material (PVC, Concrete, HDPE, etc.)
- Invert Elevation IN (elevación interior entrada)
- Invert Elevation OUT (elevación interior salida)
- Slope (pendiente en %)
- Length (longitud real 3D)
- Manning's n (coeficiente de rugosidad)

**Datos que contiene cada Structure:**
- Type (tipo: manhole, catch basin, junction box)
- Rim Elevation (elevación de tapa)
- Sump Depth (profundidad de fondo)
- Structure Diameter (diámetro del pozo)
- Connected Pipes (tuberías conectadas)

### 1.2 Tipos de Pipe Networks

**Storm Sewer (Alcantarillado Pluvial):**
- Manejo de aguas de lluvia
- Catch basins en calles y áreas pavimentadas
- Descarga a cuerpos de agua o sistemas de retención
- Flujo por gravedad
- Diseño basado en intensidad de lluvia

**Sanitary Sewer (Alcantarillado Sanitario):**
- Manejo de aguas residuales domésticas e industriales
- Manholes (pozos de visita) en intersecciones
- Conexiones domiciliarias desde lotes
- Siempre flujo por gravedad
- Diseño basado en población y dotación

**Water (Agua Potable - Pressure Networks):**
- Distribución de agua potable
- Opera bajo presión (no por gravedad)
- Válvulas, hidrantes, medidores
- Análisis hidráulico diferente (no cubierto en este curso básico)

En este curso nos enfocamos en **gravity networks** (storm y sanitary), que son sistemas por gravedad.

![Tipos de Pipe Networks](../../imagenes/modulo-5/leccion-1-tipos-redes.png)

---

## 2. Parts Catalog - Catálogo de Partes

### 2.1 ¿Qué es el Parts Catalog?

El **Parts Catalog** es una biblioteca maestra de todas las tuberías y estructuras disponibles en Civil 3D. Contiene:

- Cientos de tipos de tuberías (circular, elíptica, box culvert, etc.)
- Múltiples materiales (PVC, Concrete, HDPE, Corrugated Metal, etc.)
- Estructuras estándar (manholes, catch basins, inlets, outlets)
- Dimensiones según estándares de la industria (ASTM, AASHTO, etc.)

**Ubicación del archivo:**
```
C:\ProgramData\Autodesk\C3D 2026\enu\Pipes Catalog\
```

**Archivos principales:**
- `US Imperial Pipe Catalog.db` - Catálogo imperial (pulgadas, pies)
- `US Metric Pipe Catalog.db` - Catálogo métrico (mm, metros)

### 2.2 Navegando el Parts Catalog

**Acceso:**
1. Toolspace → Settings Tab
2. Expande "Pipe Network"
3. Click derecho en "Parts Lists" → **Manage Parts Catalog**

**Estructura del catálogo:**

```
Parts Catalog
├── Pipes
│   ├── Circular
│   │   ├── Concrete Pipe (ASTM C76)
│   │   ├── PVC Pipe (ASTM D3034)
│   │   ├── HDPE Pipe (AASHTO M294)
│   │   └── Corrugated Metal Pipe
│   ├── Elliptical
│   ├── Egg Shaped
│   └── Rectangular (Box Culvert)
├── Structures
│   ├── Manhole - Concentric
│   ├── Manhole - Eccentric
│   ├── Catch Basin
│   ├── Inlet - Curb Opening
│   ├── Inlet - Grate
│   └── Junction Box
└── Null Structures (puntos de conexión sin geometría física)
```

### 2.3 Propiedades de Parts en el Catálogo

**Cada parte tiene:**

**Geometric Properties:**
- Shape (forma: circular, rectangular, etc.)
- Size Range (rango de diámetros disponibles)
- Wall Thickness (espesor de pared)

**Material Properties:**
- Material Type (PVC, Concrete, HDPE)
- Manning's n (rugosidad hidráulica)

**Rendering Properties:**
- 3D Representation (cómo se visualiza en 3D)
- Hatch Pattern (patrón de relleno en sección)

**Part Family:** Cada "familia" es un tipo específico. Ejemplo:
- Concrete Pipe ASTM C76 - Familia de tuberías de concreto según norma ASTM C76
- PVC Sewer Pipe SDR 35 - Familia de tuberías PVC SDR 35

![Parts Catalog Navigator](../../imagenes/modulo-5/leccion-1-parts-catalog.png)

---

## 3. Parts Lists - Listas de Partes por Proyecto

### 3.1 Concepto de Parts List

Un **Parts List** es una lista personalizada de partes específicas que usarás en TU proyecto. No usas todo el catálogo, solo las partes relevantes.

**Ejemplo:**
Para un proyecto de alcantarillado sanitario residencial, tu Parts List podría incluir solo:
- Tuberías PVC de 8", 10", 12" (las más comunes)
- Manholes de 48" de diámetro
- No necesitas tuberías de 60" ni catch basins (son para pluvial)

**Ventaja:** Simplifica la selección durante el diseño y asegura consistencia en el proyecto.

### 3.2 Crear una Parts List

**Pasos:**

1. **Acceso:**
   - Toolspace → Settings Tab
   - Expande "Pipe Network"
   - Click derecho en "Parts Lists" → **New**

2. **Configuración:**
   - Name: `Alcantarillado_Sanitario_Residencial`
   - Description: `Partes para alcantarillado sanitario en urbanización`
   - Click OK

3. **Añadir Pipes:**
   - Pestaña "Pipes"
   - Click "Add Part Family"
   - Navega: Pipes → Circular → PVC Pipe
   - Selecciona "PVC Sewer Pipe SDR 35"
   - Click OK
   - En "Part Sizes", marca los diámetros que usarás:
     - ✅ 8 in (200 mm)
     - ✅ 10 in (250 mm)
     - ✅ 12 in (300 mm)
     - ✅ 15 in (375 mm)

4. **Añadir Structures:**
   - Pestaña "Structures"
   - Click "Add Part Family"
   - Navega: Structures → Manhole Concentric
   - Selecciona "Concentric Cylindrical Structure"
   - Click OK
   - Marca los diámetros:
     - ✅ 48 in (1200 mm)
     - ✅ 60 in (1500 mm)

5. **Guardar:**
   - Click OK para cerrar el Parts List Editor

![Parts List Creation](../../imagenes/modulo-5/leccion-1-parts-list-creation.png)

### 3.3 Parts Lists Recomendadas por Tipo de Proyecto

**Storm Sewer (Pluvial):**
```
Pipes:
- Concrete Pipe (ASTM C76): 12", 15", 18", 24", 30", 36"
- HDPE Pipe: 18", 24", 30"

Structures:
- Catch Basins: Type 1, Type 2
- Manholes: 48", 60", 72"
- Inlet Grate
```

**Sanitary Sewer (Sanitario):**
```
Pipes:
- PVC Sewer SDR 35: 8", 10", 12", 15"
- Concrete Pipe (pequeño): 12", 15", 18"

Structures:
- Manholes: 48", 60"
- Junction Boxes (para ramales domiciliarios)
```

---

## 4. Creando tu Primera Pipe Network

### 4.1 Crear Network desde Home Tab

**Método 1: Create Pipe Network (vacía)**

1. **Ribbon:** Home Tab → Create Design Panel
2. Click dropdown "Pipe Network" → **Create Pipe Network**
3. **Create Pipe Network Dialog:**
   - Network Name: `Red_Pluvial_Principal`
   - Network Description: `Alcantarillado pluvial - Avenida Central`
   - Network Parts List: Selecciona tu Parts List
   - Surface Name: `EG-Superficie Existente` (para elevaciones automáticas)
   - Alignment Name: (opcional - para layout por alineamiento)
   - Click OK

**Resultado:** Se crea una Pipe Network vacía, lista para añadir pipes y structures.

![Create Pipe Network Dialog](../../imagenes/modulo-5/leccion-1-create-network-dialog.png)

### 4.2 Verificar Network en Prospector

1. **Toolspace → Prospector Tab**
2. Expande "Pipe Networks"
3. Deberías ver: `Red_Pluvial_Principal`
4. Expande la red:
   - Pipes (vacío por ahora)
   - Structures (vacío por ahora)

### 4.3 Network Properties

**Click derecho en la red → Properties**

**General Tab:**
- Name, Description
- Parts List asociada
- Reference Surface (superficie de referencia para elevaciones)
- Reference Alignment (alineamiento de referencia)

**Layout Settings Tab:**
- Default Pipe to Pipe Match (cómo conectar tuberías de distinto diámetro)
- Default Structure to Pipe Drop (caída típica en estructuras)

**Profile Tab:**
- Profile View Style (estilo de perfil longitudinal)

**Section Tab:**
- Section View Style (estilo de sección transversal)

![Network Properties](../../imagenes/modulo-5/leccion-1-network-properties.png)

---

## 5. Pipe Rules y Structure Rules

### 5.1 ¿Qué son las Rules?

Las **Rules** son parámetros automáticos que Civil 3D aplica al crear pipes y structures, asegurando diseño correcto según mejores prácticas.

### 5.2 Pipe Rules

**Acceso:**
Settings Tab → Pipe Network → Pipe → [tu Parts List] → Rules

**Reglas principales:**

**Cover and Slope:**
- **Minimum Cover** (cobertura mínima sobre tubería)
  - Típico: 3.0 ft (0.90 m) en calles
  - Previene daño por tráfico vehicular
- **Maximum Cover** (cobertura máxima)
  - Típico: 15.0 ft (4.5 m)
  - Evita excavaciones excesivamente profundas
- **Minimum Slope** (pendiente mínima)
  - Sanitario: 0.40% (para auto-limpieza)
  - Pluvial: 0.50%
- **Maximum Slope** (pendiente máxima)
  - Típico: 10% (para evitar erosión)

**Pipe to Pipe Match:**
Cuando conectas tuberías de diferente diámetro:
- **Match Crown** (igualar corona superior) - común en sanitario
- **Match Invert** (igualar fondo) - común en pluvial
- **Match Center** (igualar centro)

![Pipe Rules](../../imagenes/modulo-5/leccion-1-pipe-rules.png)

### 5.3 Structure Rules

**Acceso:**
Settings Tab → Pipe Network → Structure → [tu Parts List] → Rules

**Reglas principales:**

**Rim Elevation:**
- **Automatic** - Civil 3D coloca el rim al nivel de superficie
- **Manual** - tú especificas la elevación

**Sump Depth:**
- Profundidad adicional en el fondo del pozo (para sedimentos)
- Típico: 0.5 ft (0.15 m)

**Pipe Drop Across Structure:**
- Caída entre tubería entrante y saliente
- Típico: 0.1 ft (0.03 m) para compensar pérdidas de fricción

**Structure Size:**
- Diámetro mínimo basado en tuberías conectadas
- Típico: Diámetro de pozo = Diámetro de tubería mayor + 24 in

---

## 6. Flow Direction y Propiedades Hidráulicas

### 6.1 Flow Direction (Dirección de Flujo)

**Gravity networks fluyen de:**
- **Upstream** (aguas arriba - elevación mayor)
- **Downstream** (aguas abajo - elevación menor)

**Cada pipe tiene:**
- **Start Point** (punto inicial)
- **End Point** (punto final)

**Flow Direction se define automáticamente** por elevaciones de invert:
- Si Invert Start > Invert End → Flow va de Start a End
- Si Invert End > Invert Start → **WARNING** - flujo inverso (error de diseño)

### 6.2 Inverts vs Rim vs Crown

**Terminología crítica:**

**Rim Elevation:**
- Elevación de la tapa de la estructura (nivel de superficie)
- También llamada "Top of Structure"

**Invert Elevation:**
- Elevación interior del fondo de la tubería
- **Invert IN** - donde entra fluido a una estructura
- **Invert OUT** - donde sale fluido de una estructura

**Crown Elevation:**
- Elevación de la parte superior interior de la tubería
- Crown = Invert + Diámetro Interior

**Cover (Cobertura):**
- Distancia vertical desde superficie hasta crown de tubería
- Cover = Ground Elevation - Crown Elevation

![Elevaciones de Tuberías](../../imagenes/modulo-5/leccion-1-elevaciones-invert-rim-crown.png)

### 6.3 Propiedades Hidráulicas de Pipes

**Cada pipe almacena:**

**Geometric:**
- Length (3D sloped length)
- Slope (%)
- Diameter/Size

**Hydraulic:**
- Manning's n (roughness coefficient)
  - PVC: 0.010
  - Concrete: 0.013
  - HDPE: 0.012
- Flow (caudal de diseño - asignado manualmente o por análisis)
- Velocity (velocidad de flujo - calculada)

**Acceso:**
- Selecciona un pipe
- Ctrl+1 (Properties Palette)
- Sección "Hydraulic Data"

---

## 7. Workflow Básico de Creación de Pipe Network

**Proceso típico:**

1. **Preparación:**
   - Superficie existente creada ✅
   - Alineamientos de calles creados ✅
   - Parts List configurada ✅

2. **Crear Network:**
   - Create Pipe Network (vacía)
   - Asignar Parts List y Reference Surface

3. **Layout de Structures:**
   - Colocar manholes/catch basins en ubicaciones estratégicas
   - Civil 3D calcula Rim elevations automáticamente

4. **Layout de Pipes:**
   - Conectar structures con pipes
   - Civil 3D calcula slopes e inverts automáticamente según rules

5. **Edición:**
   - Ajustar inverts manualmente si es necesario
   - Swap parts (cambiar diámetros)
   - Verificar flow direction

6. **Análisis:**
   - Sizing de pipes según caudal (Lección 4)
   - Drainage Analysis (Lección 5)

**Detalles de Layout en Lección 3.**

---

## Ejercicio Práctico 1

**Objetivo:** Crear una Parts List personalizada y una Pipe Network básica.

**Tareas:**

**Parte A: Crear Parts List**

1. **Settings Tab → Pipe Network → Parts Lists → New**
2. Nombre: `Pluvial_Urbano_[TuNombre]`
3. **Añadir Pipes:**
   - Concrete Pipe (ASTM C76) - Circular
   - Tamaños: 18", 24", 30", 36"
4. **Añadir Structures:**
   - Catch Basin - Type 1
   - Manhole Concentric - 48" y 60"
5. Guardar Parts List

**Parte B: Crear Pipe Network Vacía**

1. **Ribbon: Home → Create Design → Pipe Network**
2. Nombre: `Red_Pluvial_Ejercicio_1`
3. Parts List: Selecciona tu Parts List recién creada
4. Surface: Si tienes una superficie existente, selecciónala. Si no, déjala en blanco.
5. Click OK

**Parte C: Verificación**

1. **Toolspace → Prospector**
2. Expande "Pipe Networks"
3. Verifica que aparece `Red_Pluvial_Ejercicio_1`
4. Expande la red - verás "Pipes" y "Structures" vacíos (es correcto)

**Parte D: Explorar Network Properties**

1. Click derecho en `Red_Pluvial_Ejercicio_1` → **Properties**
2. Revisa cada tab:
   - General
   - Layout Settings
   - Profile
   - Section
3. **No modifiques nada** - solo observa las opciones

**Entregable:**
- Screenshot del Parts List mostrando las partes añadidas
- Screenshot del Prospector mostrando tu Pipe Network creada

![Ejercicio 1 Resultado](../../imagenes/modulo-5/leccion-1-ejercicio-parts-list.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la diferencia principal entre dibujar tuberías con líneas CAD y usar Pipe Networks en Civil 3D?

**Pregunta 2:** ¿Qué es un Parts Catalog y dónde se ubica en tu sistema?

**Pregunta 3:** ¿Por qué usamos Parts Lists en lugar de trabajar directamente con el Parts Catalog completo?

**Pregunta 4:** Define "Invert Elevation" y explica su diferencia con "Rim Elevation".

**Pregunta 5:** Menciona 3 reglas (rules) que puedes configurar para pipes en Civil 3D.

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 - Pipe Networks User Guide
- Civil 3D Help - "About Pipe Networks"
- Parts Catalog Reference Guide

**Videos recomendados:**
- Civil 3D Pipe Networks Fundamentals (YouTube Autodesk)
- Creating Custom Parts Lists

**Archivos descargables:**
- `Sample_Parts_Lists.zip` (Parts Lists preconfigurradas)
- `Pipe_Rules_Template.dwt` (Template con reglas estándar)

---

## Resumen

En esta lección aprendiste:

✅ **Pipe Networks** son objetos BIM inteligentes, no simples líneas CAD
✅ **Parts Catalog** contiene cientos de tuberías y estructuras estándar de la industria
✅ **Parts Lists** son listas personalizadas de partes para cada proyecto específico
✅ **Crear Pipe Networks** desde Home Tab con configuración de Parts List y superficie
✅ **Pipe Rules y Structure Rules** automatizan el diseño según mejores prácticas
✅ **Terminología crítica:** Invert, Rim, Crown, Cover, Flow Direction
✅ **Workflow básico:** Preparación → Network → Structures → Pipes → Análisis

**Próxima Lección:** Structures - Pozos de Visita y Catch Basins (diseño detallado de estructuras)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 30 minutos explorando Parts Catalog y creando diferentes Parts Lists
