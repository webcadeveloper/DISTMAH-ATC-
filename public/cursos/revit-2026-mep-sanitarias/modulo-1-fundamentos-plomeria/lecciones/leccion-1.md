# Lección 1: Interface MEP y Configuración de Proyecto

## Introducción

La interface de Revit MEP (Mechanical, Electrical, Plumbing) es especializada y diferente a la arquitectura convencional. Esta lección te introduce al entorno completo de trabajo para instalaciones sanitarias, donde aprenderás a configurar proyectos profesionales desde cero utilizando las herramientas específicas de Revit MEP 2026.

## Objetivos de Aprendizaje

Al finalizar esta lección serás capaz de:

- Diferenciar entre la interface de Revit Architecture y Revit MEP
- Navegar en los MEP Workspaces disponibles en Revit 2026
- Configurar Plumbing Settings para instalaciones sanitarias
- Establecer unidades de trabajo correctas (métrico/imperial)
- Utilizar plantillas MEP (.rte) profesionales
- Organizar vistas y browsers para plomería
- Implementar Accelerated Graphics para mejor rendimiento
- Gestionar estructuras de proyecto complejas

## 1. Interface MEP vs Architecture

### Diferencias Clave

Revit MEP posee una interface diseñada específicamente para profesionales de instalaciones. A diferencia de la interface de Arquitectura, MEP incluye herramientas especializadas para:

**Tuberías y Ductos:**
- Sistemas de agua fría y caliente
- Sistemas de drenaje (sanitario, pluvial, ventilación)
- Herramientas de routing automático
- Gestión de conectores MEP

**Fixtures y Componentes:**
- Familias de muebles sanitarios
- Conectores MEP integrados
- Cálculo de unidades de fixture
- Análisis de flujo de agua

**Análisis y Documentación:**
- Pressurization analysis
- Analytical networks
- Load calculations
- Connection verification

### Cambios en la Interfaz

La interface MEP presenta cambios notables:

1. **Ribbon Modificado:** Acceso directo a herramientas MEP
2. **Systems Browser:** Árbol especializado de sistemas
3. **MEP Workspaces:** Espacios de trabajo optimizados
4. **Connector Management:** Gestión visual de conectores
5. **Analysis Tools:** Herramientas de análisis hidráulico

## 2. Systems Browser y MEP Workspaces

### Entendiendo el Systems Browser

El Systems Browser es tu herramienta principal en MEP. Muestra la estructura jerárquica de sistemas de plomería:

```
Systems Browser (Plumbing)
├── Sanitary System 1
│   ├── Fixtures
│   ├── Pipes
│   └── Fittings
├── Water Supply System
│   ├── Fixtures (connections)
│   ├── Main Lines
│   └── Branches
└── Vent System
    ├── Vent pipes
    └── Fixtures (vent connections)
```

### Ventajas del Systems Browser

- **Visualización jerárquica** de componentes relacionados
- **Selección rápida** de sistemas completos
- **Aislamiento visual** de sistemas específicos
- **Análisis de flujo** de agua
- **Gestión de conectores** y relaciones

### MEP Workspaces Disponibles

Revit 2026 ofrece varios workspaces optimizados:

**1. Plumbing (Recomendado para sanitarias)**
- Herramientas de tuberías sanitarias
- Fixtures de plomería
- Routing tools especializados
- Vista previa de conectores

**2. Mechanical (Para HVAC)**
- Ductos y conductos
- Unidades terminales
- Análisis térmico

**3. Electrical (Para instalaciones eléctricas)**
- Canalizaciones
- Paneles de distribución
- Circuitos

## 3. Plumbing Settings - Configuración Global

### Accediendo a Plumbing Settings

```
Menú: MEP > Plumbing Settings
O desde: Systems > Plumbing Settings (en ribbon MEP)
```

### Configuraciones Esenciales

#### 3.1 Pipe Routing Settings

**Ruta estándar:**
- Definir recorridos preferidos (horizontal/vertical)
- Ángulos de giro estándar (90°, 45°)
- Distancias mínimas a paredes
- Preferencias de altura

**Configuración recomendada:**
```
Pipe Routing Preferences:
- Preferred routing: Vertical first (agua)
- Preferred fitting: Elbow (codo)
- Offset distance: 300mm (pisos)
- Default bend angle: 90°
```

#### 3.2 Fixture Units Settings

Configurar unidades de fixture según código aplicable:

- **Lavabos (sinks):** 1.0 unidad
- **Inodoros (toilets):** 3.0 unidades
- **Duchas (showers):** 2.0 unidades
- **Tinas (tubs):** 2.0 unidades
- **Urinarios (urinals):** 0.75 unidades

#### 3.3 Pressure Calculation Settings

```
Opciones de cálculo:
- Friction loss method (Hazen-Williams, Manning)
- Pressure regulation strategy
- Minimum operating pressure
- Flow rate calculations
```

#### 3.4 Demand Load Factors

Factores de simultaneidad según norma:

- Residencial: 0.4-0.5
- Comercial: 0.3-0.4
- Industrial: 0.2-0.3

## 4. Unidades de Trabajo

### Configuración de Unidades

**Acceso:** Gestionar > Configuración de proyecto > Unidades

### Unidades Recomendadas para Plomería

**Sistema Métrico (Preferido):**
```
- Longitud: Milímetros (para precisión)
- Volumen: Litros (para caudales)
- Presión: bar o kPa
- Temperatura: °C
```

**Sistema Imperial:**
```
- Longitud: Pulgadas
- Volumen: Galones (GPM)
- Presión: PSI
- Temperatura: °F
```

### Rounding Options

Establecer precisión adecuada:

- Diámetros de tubería: 0.5mm
- Longitudes: 1mm
- Presiones: 0.1 bar
- Caudales: 0.1 l/s

## 5. Plantillas MEP (.rte)

### Qué es una Plantilla MEP

Una plantilla (.rte) es un archivo preconfigurado con:

- **Vistas estándar** (planta, sección, isométrica)
- **Tipos de tuberías** configurados
- **Familias de fixtures** cargadas
- **Schedules** preparados
- **Plumbing Settings** óptimos
- **Estilos de línea y materiales**

### Creando tu Plantilla Personal

**Paso 1: Preparar archivo base**
```
1. Crear nuevo proyecto MEP
2. Configurar todas las unidades
3. Establecer Plumbing Settings
4. Cargar familias esenciales
5. Crear vistas estándar
```

**Paso 2: Guardar como plantilla**
```
Archivo > Guardar como plantilla
Nombre: "Plomeria_LATAM_2026.rte"
```

**Paso 3: Reutilizar para nuevos proyectos**
```
Archivo > Nuevo > Seleccionar plantilla
```

## 6. Organización de Vistas

### Vistas Esenciales para Plomería

**1. Vistas de Planta**
- Planta general (todos los pisos)
- Planta agua fría
- Planta agua caliente
- Planta drenaje sanitario
- Planta drenaje pluvial

**2. Vistas de Sección**
- Sección general (riser diagram)
- Secciones por zonas
- Secciones constructivas

**3. Vistas Isométricas**
- Isométrica de agua fría
- Isométrica de drenaje
- Isométrica de ventilación

### Configurando Vistas

**Crear vista isométrica:**
```
Mediante View > Isometric
O desde Systems Browser > Create Isometric
```

**Configurar visibilidad gráfica:**
```
Pestaña Visibility/Graphics (VG)
- Mostrar solo tuberías de agua fría
- Ocultar fixtures de otros sistemas
- Mostrar etiquetas de diámetro
```

## 7. Accelerated Graphics Setup

### Ventajas de Acceleración Gráfica

- **Rendimiento mejorado** en modelos complejos
- **Rotación fluida** del modelo 3D
- **Zoom sin lag** (retardo)
- **Mejor experiencia** con múltiples sistemas

### Configuración Recomendada

**Acceso:** Vista > Gráficos > Opciones de Gráficos

```
GPU Settings:
- Enable Accelerated Graphics: ON
- Shader Level: High (si tarjeta permite)
- Anti-aliasing: 4x MSAA
- V-Sync: ON (evita parpadeo)
```

### Requisitos de Hardware

Para Accelerated Graphics óptimo:

- **GPU dedicada** (RTX 3050+ o equivalente)
- **Memoria VRAM:** 2GB mínimo, 4GB recomendado
- **Drivers actualizados** (NVIDIA/AMD)
- **RAM del sistema:** 16GB mínimo

## 8. Organización de Proyectos Complejos

### Estructura de Carpetas Recomendada

```
Proyecto_Sanitarias_2026/
├── Modelos/
│   ├── 01_Base_Architecture.rvt
│   ├── 02_Plumbing_Design.rvt
│   ├── 03_Plumbing_Coordination.rvt
│   └── 04_Plumbing_Sheets.rvt
├── Plantillas/
│   ├── Plomeria_LATAM.rte
│   └── Familias_Estandar/
├── Documentos/
│   ├── Especificaciones/
│   ├── Normas/
│   └── Calculos/
└── Entregas/
    ├── Planos/
    └── Schedules/
```

### Linked Models

Para modelos coordinados:

```
Coordinación:
- Archivo arquitectónico linkado
- Estructura y sistemas coordinados
- Vistas de coordinación (3D)
- Planos de coordinación
```

## Resumen

La interface MEP de Revit 2026 proporciona herramientas especializadas para el diseño de instalaciones sanitarias. Una configuración inicial correcta, con Plumbing Settings apropiados, unidades bien definidas y plantillas personalizadas, garantiza proyectos eficientes y profesionales.

## Ejercicio Práctico

**Crea tu primer proyecto MEP:**

1. Abre Revit 2026
2. Selecciona plantilla MEP (Plumbing)
3. Configura unidades a milímetros
4. Accede a Plumbing Settings
5. Establece fixture units según estándares IAPMO
6. Crea una vista isométrica
7. Guarda como plantilla personalizada

## Palabras Clave

MEP, Plumbing, Systems Browser, Conectores, Fixture Units, Routing, Pressure, Caudal, Tuberías, Fixtures, Configuration, Plantilla, Workspace, Accelerated Graphics

---

**Tiempo de lectura:** 45-50 minutos
**Siguiente lección:** Interface MEP y Configuración de Proyecto
