# Lección 2: Tipos de Tuberías y Materiales

## Introducción

Los tipos de tuberías son la columna vertebral de cualquier sistema sanitario. En Revit MEP, comprender las propiedades de diferentes materiales, diámetros nominales, configuraciones de routing y características técnicas es fundamental para diseñar sistemas hidráulicos correctos y profesionales. Esta lección profundiza en cada aspecto de las tuberías de plomería.

## Objetivos de Aprendizaje

Al finalizar esta lección serás capaz de:

- Entender la diferencia entre diámetro nominal y diámetro real de tuberías
- Crear tipos personalizados de tuberías para cada material
- Configurar propiedades de routing preferences
- Aplicar parámetros de fricción y flujo correctamente
- Trabajar con diferentes normativas internacionales
- Optimizar schedules de tuberías
- Calcular diámetros según caudales
- Documentar especificaciones de materiales

## 1. Propiedades Fundamentales de Tuberías

### Diámetro Nominal vs Diámetro Real

Una confusión común en plomería es la diferencia entre estos dos conceptos:

**Diámetro Nominal (DN):**
- Designación de tamaño estándar
- No corresponde a medida real precisa
- Ejemplos: DN20, DN25, DN32, DN40, DN50
- Usado en especificaciones internacionales

**Diámetro Exterior (DE) y Diámetro Interior (DI):**
- Medidas reales físicas
- Varían según material y espesor de pared
- Necesarios para cálculos hidráulicos

**Ejemplo de DN20 en diferentes materiales:**
```
PVC Schedule 40:
- Diámetro Exterior: 26.7 mm
- Diámetro Interior: 20.88 mm
- Espesor de pared: 2.87 mm

Cobre K:
- Diámetro Exterior: 25.4 mm
- Diámetro Interior: 22.0 mm
- Espesor de pared: 1.63 mm

Acero Galvanizado:
- Diámetro Exterior: 26.7 mm
- Diámetro Interior: 20.96 mm
- Espesor de pared: 2.87 mm
```

### Parámetro "Pipe Size" en Revit

En Revit MEP, el parámetro "Pipe Size" se refiere al diámetro nominal. Revit utiliza este valor para buscar las propiedades asociadas del tipo de tubería.

### Configuración en Tipo de Tubería

Para cada tipo de tubería debes especificar:

- **Outer Diameter (OD):** Diámetro exterior
- **Wall Thickness:** Espesor de pared
- **Material:** PVC, Cobre, Acero, CPVC, etc.
- **Roughness (C):** Coeficiente de Hazen-Williams
- **Inside Surface Area:** Área interna (para fricción)

## 2. Materiales de Tuberías Comunes

### 2.1 PVC (Polyvinyl Chloride)

**Características:**
- Material plástico rígido
- Resistente a corrosión y químicos
- Bajo costo
- Fácil de instalar
- Vida útil: 50-70 años

**Aplicaciones:**
- Drenaje sanitario (DWV - Drain, Waste, Vent)
- Agua fría en climas templados
- No recomendado para agua caliente

**Diámetros estándar:**
```
DN20 (3/4"), DN25 (1"), DN32 (1.25"),
DN40 (1.5"), DN50 (2"), DN65 (2.5"),
DN75 (3"), DN100 (4"), DN125 (5"), DN150 (6")
```

**Coeficiente de Roughness (C):**
- C = 150 (nuevo)
- C = 120-140 (después de años)

**Presión de trabajo:**
- Schedule 40: 10 bar máximo
- Schedule 80: 15 bar máximo

### 2.2 Cobre

**Características:**
- Metal no ferroso
- Excelente resistencia a corrosión
- Mejor para agua potable (bioestático)
- Mayor costo que PVC
- Vida útil: 50+ años

**Tipos de cobre:**
```
Tipo K: Mayor espesor de pared
- Presión: 200 PSI (13.8 bar)
- Uso: Líneas principales, enterrado

Tipo L: Espesor intermedio
- Presión: 200 PSI
- Uso: Residencial, comercial

Tipo M: Espesor menor
- Presión: 100 PSI (6.9 bar)
- Uso: Interiores, baja presión
```

**Coeficiente de Roughness (C):**
- C = 130-140

**Diámetros disponibles:**
```
1/4", 3/8", 1/2", 5/8", 3/4",
1", 1.1/4", 1.1/2", 2", 2.1/2", 3"
```

### 2.3 Acero Galvanizado

**Características:**
- Hierro recubierto de zinc
- Resistencia moderada a corrosión
- Costo bajo-medio
- Instalación más compleja (roscar)
- Vida útil: 40-50 años

**Aplicaciones:**
- Líneas principales de agua
- Sistemas de presión
- Menos común en nuevos proyectos

**Coeficiente de Roughness (C):**
- Nuevo: C = 130
- Envejecido: C = 100-110

### 2.4 CPVC (Chlorinated PVC)

**Características:**
- Variante mejorada del PVC
- Resistente a agua caliente
- Costo intermedio
- Instalación similar a PVC
- Vida útil: 50+ años

**Aplicaciones:**
- Agua caliente doméstica (hasta 82°C)
- Sistemas de recirculación
- Edificios residenciales y comerciales

**Temperatura máxima:** 82°C continuo

**Coeficiente de Roughness (C):**
- C = 150

## 3. Cálculo de Diámetros Según Caudal

### Velocidad Recomendada de Flujo

Para evitar ruido y erosión, mantener velocidades dentro de rangos:

**Agua Fría:**
- Línea principal: 0.6-1.5 m/s (preferido: 1.0-1.2 m/s)
- Ramales: 0.3-1.0 m/s

**Agua Caliente:**
- Línea principal: 0.6-1.2 m/s
- Ramales: 0.3-1.0 m/s

**Drenaje (flujo gravitacional):**
- Pendiente: 2-4% (20-40 mm/m)
- Velocidad: 0.6-1.5 m/s
- Llena máximo 75% de tubería

### Fórmula de Velocidad

```
V = Q / A

Donde:
V = Velocidad (m/s)
Q = Caudal (m³/s o l/s)
A = Área de sección transversal (m²)

A = π * (D/2)²
```

### Tabla de Selección Rápida

```
Caudal    Agua Fría      Agua Caliente    Drenaje
l/s       (DN)           (DN)             (DN)

0.5       DN12           DN12             DN32
1.0       DN16           DN16             DN40
2.0       DN20           DN20             DN50
3.0       DN25           DN25             DN65
5.0       DN32           DN32             DN75
10.0      DN50           DN50             DN100
15.0      DN65           DN65             DN125
```

## 4. Configuración de Routing Preferences

### Importancia del Routing

Routing preferences definen cómo Revit genera automáticamente el recorrido de las tuberías al conectarlas.

### Acceso a Configuración

```
Menú: MEP > Plumbing Settings > Routing Settings
```

### Preferencias de Recorrido

**1. Preferencia de dirección:**
```
- Vertical First: Sube/baja primero
- Horizontal First: Recorre horizontalmente primero
- Do Not Prefer: Rutas equilibradas
```

**2. Tipo de accesorio preferido:**
```
- Elbow (Codo 90°): Estándar
- Transition (Transición): Cambios de diámetro
- Fitting: Accesorios especiales
```

**3. Distancias de offset:**
```
Offset Horizontal: 300-500 mm
Offset Vertical: 200-300 mm
Espesor de piso considerado: 300 mm
```

### Ángulos de Giro Estándar

```
Preferidos:
- 90° (codos estándar)
- 45° (cambios suaves)
- 180° (retornos)

Evitar ángulos irregulares que dificulten fabricación
```

## 5. Parámetros de Fricción y Manning

### Coeficiente de Hazen-Williams

Usado para tuberías de presión (agua fría/caliente):

```
hf = 10.67 × L × Q^1.852 / (C^1.852 × D^4.87)

Donde:
hf = Pérdida de carga (m)
L = Longitud (m)
Q = Caudal (l/s)
C = Coeficiente de rugosidad (Hazen-Williams)
D = Diámetro interior (mm)
```

**Valores C por material:**
```
PVC (nuevo): 150
Cobre: 130-140
Acero galvanizado (nuevo): 130
Acero galvanizado (viejo): 100-110
CPVC: 150
Hierro fundido: 100
```

### Coeficiente de Manning

Usado para tuberías de drenaje (flujo gravitacional):

```
V = 1/n × R^(2/3) × S^(1/2)

Donde:
V = Velocidad (m/s)
n = Coeficiente de Manning
R = Radio hidráulico (m)
S = Pendiente (m/m)
```

**Valores de n por material:**
```
PVC: 0.011-0.013
Cobre: 0.012-0.013
Acero galvanizado: 0.013-0.015
Hierro fundido: 0.015
Hormigón: 0.013-0.015
```

## 6. Creación de Tipos de Tuberías Personalizados

### Paso a Paso

**1. Acceder a Pipe Types:**
```
Pestaña: MEP > Systems > Pipe Types
O Gestionar > Tipos de familia
Buscar: Pipes (PVC, Copper, Steel, etc.)
```

**2. Duplicar tipo existente:**
```
Click derecho en tipo
Duplicar → Renombrar
Nombre recomendado: "DN25 PVC Schedule 40"
```

**3. Configurar propiedades:**
```
Material: Seleccionar material
Outer Diameter: 26.7 mm
Wall Thickness: 2.87 mm
Roughness (C): 150
Pressure Rating: 10 bar
```

**4. Configurar Mechanical Properties:**
```
Inside Surface Area: π × (DI)
Weight per Unit Length: Cálculo de peso
Thermal Properties: Si aplica
```

### Ejemplo Práctico: DN20 PVC Schedule 40

```
Nombre: "PVC DN20 (3/4) Schedule 40"
Material: PVC
Outer Diameter: 26.7 mm
Wall Thickness: 2.87 mm
Inside Diameter: 20.96 mm
Hazen-Williams C: 150
Pressure Rating: 10 bar (100 kPa)
Weight: 0.34 kg/m
Inside Surface Area: 0.694 m²/m
```

## 7. Pipe Segments y Fittings

### Pipe Segments

Son las secciones rectas de tubería entre conexiones.

**Propiedades en schedule:**
- Diámetro
- Material
- Longitud
- Caudal
- Velocidad
- Pérdida de carga

### Fittings (Accesorios)

Elementos de conexión entre tuberías:

**Tipos comunes:**
```
Elbows (Codos):
- 90° (codo estándar)
- 45° (codo suave)
- Long radius (radio largo)

Tees (Derivaciones):
- 90° recto
- 90° lateral
- Reductoras

Unions (Uniones):
- Unión roscada
- Unión desmontable

Valves (Válvulas):
- Check valves
- Ball valves
- Gate valves
- Pressure reducing valves
```

### Pérdida de Carga en Accesorios

Cada accesorio causa pérdida de presión:

```
Codo 90°: K = 1.0
Codo 45°: K = 0.4
Tee: K = 0.6
Válvula de retención: K = 2.0
Válvula de bola: K = 0.2

hf = K × V² / (2g)
```

## 8. Schedules de Tuberías

### Información Esencial en Schedules

```
Pipe Schedule Typical Columns:
- Pipe Type
- Diameter (nominal)
- Material
- Length (l/s)
- Flow (l/s)
- Velocity (m/s)
- Pressure Drop (bar/m)
- Pipe Count
- Total Length (m)
```

### Filtering en Schedules

Filtrar por sistema:
```
Filter: System Type = "Water Supply - Cold"
Mostrar solo tuberías de agua fría
```

### Export para Fabricación

```
Exportar a Excel:
- Archivo > Exportar > Reports
- Seleccionar Pipe Schedule
- Generar lista de materiales
```

## Resumen

Dominar los tipos de tuberías, materiales y sus propiedades hidráulicas es esencial para diseñar sistemas sanitarios seguros, eficientes y económicos. Cada material tiene aplicaciones específicas, y comprender sus características técnicas permite tomar decisiones informadas durante el diseño.

## Ejercicio Práctico

**Crea tu biblioteca de tuberías:**

1. Abre el archivo de ejercicio
2. Accede a Pipe Types
3. Crea 5 tipos personalizados:
   - DN20 PVC DWV
   - DN25 PVC Schedule 40 (agua)
   - DN20 Copper Type L
   - DN32 PVC DWV
   - DN50 PVC DWV
4. Configura todas las propiedades técnicas
5. Genera schedule de tipos
6. Exporta a PDF

## Palabras Clave

Pipe Types, Diámetro Nominal, PVC, Cobre, Acero, CPVC, Roughness, Hazen-Williams, Manning, Routing, Fittings, Schedule, Caudal, Fricción, Pérdida de Carga

---

**Tiempo de lectura:** 50-55 minutos
**Siguiente lección:** Familias de Fixtures Sanitarios
