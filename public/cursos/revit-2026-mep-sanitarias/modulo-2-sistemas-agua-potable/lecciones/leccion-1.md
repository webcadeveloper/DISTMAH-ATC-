# Lección 1: Distribución de Agua Fría en Revit MEP

## Introducción

El diseño de sistemas de agua fría es la base de cualquier instalación sanitaria moderna. Este módulo te enseña a modelar distribuciones completas de agua fría desde el punto de suministro hasta los fixtures, incluyendo cálculos de caudal, dimensionamiento de tuberías y análisis de presión en Revit MEP 2026. Aprenderás técnicas profesionales de diseño coordinado.

## Objetivos de Aprendizaje

Al finalizar esta lección serás capaz de:

- Entender la estructura completa de sistemas de agua fría
- Diseñar ramificaciones desde línea principal
- Calcular caudales según fixture units
- Dimensionar tuberías con precisión
- Analizar presión y pérdida de carga
- Crear dibujos isométricos de agua fría
- Documentar especificaciones técnicas
- Coordinar con otros sistemas MEP

## 1. Estructura de Sistemas de Agua Fría

### Componentes Principales

Un sistema de agua fría típico contiene:

```
Punto de Entrada (Supply Point)
        ↓
Medidor de agua
        ↓
Válvula de corte general
        ↓
Tubería principal (risers verticales)
        ↓
Ramales secundarios
        ↓
Derivaciones a fixtures
        ↓
Fixtures (Inodoros, lavabos, duchas, etc.)
```

### Clasificación de Tuberías

**1. Tubería Principal (Main Line)**
- Diámetro mayor (DN25-DN50 típico)
- Recorre edificio verticalmente (riser)
- Soporta presión total
- Caudal: suma de todos los ramales

**2. Ramales Secundarios (Branches)**
- Diámetro medio (DN16-DN25)
- Se derivan desde principal
- Sirven a grupo de fixtures
- Caudal: suma de grupo

**3. Derivaciones (Sub-branches)**
- Diámetro menor (DN12-DN20)
- Llegan a fixture individual
- Baja presión permitida
- Caudal: 0.5-2.0 l/s típico

## 2. Cálculo de Caudales - Método de Fixture Units

### Unidades de Fixture (FU)

La unidad de fixture es un método estándar para calcular caudal de agua fría.

**Definición:**
```
1 FU = 0.757 l/s en condiciones de pico
Equivalencia: 1 FU ≈ 45 l/min
```

**Unidades por tipo de fixture:**
```
Inodoro (Toilet): 3.0-4.0 FU
Lavabo (Laundry): 3.0 FU
Sink (Fregadero): 2.0 FU
Lavatorio (Lavatory/wash basin): 1.0 FU
Ducha (Shower): 2.0 FU
Bañera (Bathtub): 2.0 FU
Urinario (Urinal): 0.75 FU
Bebedero (Drinking fountain): 0.5 FU
```

### Cálculo de Caudal por Simultaneidad

No todos los fixtures funcionan al mismo tiempo. Se aplica un factor:

**Fórmula:**
```
Caudal pico = √(Total FU) × Factor de simultaneidad

Ejemplos:
10 FU → √10 × 0.5 = 1.58 l/s
50 FU → √50 × 0.4 = 1.42 l/s
100 FU → √100 × 0.3 = 3.0 l/s
```

**Factores típicos por ocupación:**
```
Residencial: 0.4-0.5
Comercial: 0.3-0.4
Industrial: 0.2-0.3
Hogar: 0.6-0.8
```

## 3. Dimensionamiento de Tuberías

### Velocidad Permitida

Para evitar ruido y erosión:

```
Agua Fría:
- Línea principal: 0.6-1.5 m/s (mejor: 1.0-1.2 m/s)
- Ramales: 0.3-1.0 m/s
- Derivaciones: 0.3-0.6 m/s

Agua Caliente (similar):
- Línea principal: 0.6-1.2 m/s
- Ramales: 0.3-0.8 m/s
```

### Tabla de Selección Rápida

Para agua a velocidad 1.0 m/s:

```
Caudal (l/s)  Diámetro (DN)   Velocidad real (m/s)
0.3           DN12            0.76
0.5           DN16            0.82
1.0           DN20            0.82
1.5           DN25            0.84
2.5           DN32            0.82
5.0           DN50            0.83
10.0          DN75            0.84
15.0          DN100           0.85
```

### Cálculo Manual

**Fórmula fundamental:**
```
Q = V × A

Donde:
Q = Caudal (m³/s o l/s)
V = Velocidad (m/s)
A = Área transversal (m²)

A = π × (D/2)²
D = diámetro interior (m)
```

**Ejemplo: DN20 (DI = 20.88 mm)**
```
A = π × (0.01044)² = 3.42 × 10⁻⁴ m²
A = 0.342 dm² = 342 mm²

Q = 1.0 m/s × 0.342 dm² = 0.342 l/s ✓
```

## 4. Presión en Sistemas de Agua Fría

### Fuentes de Presión

**1. Presión estática (Presión de altura)**
```
P = ρ × g × h

Donde:
ρ = 1000 kg/m³ (agua)
g = 9.81 m/s²
h = altura (m)

Resultado: 10 m de altura = 1 bar de presión
```

**Ejemplo:**
```
Edificio de 30 m de altura:
Presión estática = 30 m / 10 = 3 bar
```

**2. Presión de fricción (pérdida de carga)**
```
Ecuación de Hazen-Williams:
hf = 10.67 × L × Q^1.852 / (C^1.852 × D^4.87)

hf = Pérdida de carga (m)
L = Longitud de tubería (m)
Q = Caudal (l/s)
C = Coeficiente de roughness
D = Diámetro interior (mm)
```

### Presión de Operación

**Rangos típicos:**
```
Residencial: 2.0-3.5 bar (recomendado: 3.0 bar)
Comercial: 2.5-4.5 bar (recomendado: 3.5 bar)
Industrial: 3.0-5.0 bar

Mínimo en punto más alto: 1.0-1.5 bar (20-30 metros)
Máximo permitido: 5.5 bar (evita daño de tuberías)
```

## 5. Modelado de Sistema de Agua Fría en Revit

### Creación de Tubería Principal

**Paso a paso:**
```
1. Crear planta de riser (esquema vertical)
2. Insertar línea vertical (medida: altura del edificio)
3. MEP > Create > Pipe
4. Seleccionar tipo: "DN50 PVC Schedule 40"
5. Dibujar desde entrada a techo (o cisterna)
```

### Ramificaciones Secundarias

**Método 1: Ramificación por T**
```
1. En planta de piso
2. Usar herramienta Pipe Fitting
3. Seleccionar Tee (T de 90°)
4. Colocar en tubería principal
5. Crear derivación horizontal
6. Especificar diámetro: DN25
```

**Método 2: Crear desde punto de intersección**
```
1. Punto de inicio en pared
2. MEP > Create Pipe
3. Especificar tipo de tubería
4. Conectar automáticamente
```

### Conexión a Fixtures

**Opción A: Tubería a fixture**
```
1. Dibujar tubería hasta ubicación
2. Seleccionar tubería
3. Click en extremo
4. Arrastrar a conector del fixture
```

**Opción B: Desde fixture**
```
1. Seleccionar fixture
2. MEP > Pipe from Fixture
3. Revit crea tubería automáticamente
4. Especificar tipo de tubería
```

## 6. Sistemas de Presión Constante

### Bombas y Tanques

**Cisterna (almacenamiento):**
```
Ubicación: Techo del edificio
Función: Almacenar 1 día de consumo
Tamaño: 200-500 litros (residencial típico)
Material: Polietileno, fibra de vidrio, hormigón
```

**Bomba (presurización):**
```
Función: Mantener presión constante
Tipo: Bomba centrífuga
Capacidad: 5-15 l/s (residencial)
Presión: 3.0-4.0 bar
Control: Presostato (automático)
```

**Tanque de presión (hidroneumático):**
```
Función: Mantener presión entre ciclos
Volumen: 50-100 litros
Aire: 80% del volumen útil
Agua: 20% del volumen útil
Presión de carga: 0.9 bar menos que presión mínima
```

## 7. Análisis de Presión en Revit 2026

### Configuración de Análisis

**Acceso:**
```
MEP > Analysis > Pressure Loss
O Systems Browser > Seleccionar sistema > Analyze
```

**Parámetros de entrada:**
```
- Punto de suministro (presión base)
- Caudal total del sistema
- Factor de simultaneidad
- Elevación de piso
- Tipo de tubería (para fricción)
```

### Resultados del Análisis

**Información generada:**
```
Para cada tubería:
- Presión entrada
- Presión salida
- Pérdida de carga (bar/m)
- Velocidad (m/s)
- Caudal (l/s)

Para cada fixture:
- Presión disponible
- Estado (OK / Insuficiente)
- Flujo esperado (l/s)
```

### Interpretación de Resultados

**Presión insuficiente:**
```
Síntoma: Presión < 1.5 bar en fixture
Causas posibles:
1. Diámetro de tubería muy pequeño
2. Demasiada longitud
3. Caudal simultáneo calculado erróneamente
4. Presión de entrada baja

Soluciones:
- Aumentar diámetro de tuberías
- Agregar bomba o tanque presión
- Reducir número de fixtures simultáneos
- Cambiar ruta (menor longitud)
```

## 8. Válvulas y Accesorios

### Válvulas Esenciales

**Válvula de corte general:**
```
Ubicación: Entrada del edificio
Función: Cortar toda el agua
Tipo: Ball valve o gate valve
Acceso: Fácilmente accesible
```

**Válvula reductora de presión (PRV):**
```
Función: Reducir presión excesiva
Ubicación: Después medidor
Presión salida: 3.0-4.0 bar típico
Necesaria si: Presión entrada > 5.5 bar
```

**Válvula de retención (Check valve):**
```
Función: Prevenir flujo inverso
Ubicación: Después bomba, tanques
Apertura: Automática con flujo
```

**Válvulas de drenaje/purga:**
```
Ubicación: Puntos bajos del sistema
Función: Drenar sistema para mantenimiento
Acceso: Fácil, elevación > 1 cm suelo
```

### Accesorios Especiales

**Filtro de agua:**
```
Ubicación: Entrada o punto de distribución
Tipo: 20-100 micrón según uso
Mantenimiento: Cambio periódico
Presión: Pérdida típica 0.5 bar limpio
```

**Aireador (aerator):**
```
Ubicación: En fixture (grifo)
Función: Mezclar aire, reducir splash
Caudal: Reduce flujo a 6 l/min
Presente en: Lavabos, fregaderos
```

## 9. Especificaciones Técnicas y Documentación

### Schedule de Agua Fría

**Columnas típicas:**
```
Pipe Type | DN | Material | Length | Flow | Velocity |
Pressure Drop | Count | Location | Notes
```

### Especificación de Proyecto

**Documento típico:**
```
ESPECIFICACIÓN - SISTEMA DE AGUA FRÍA

1. FUENTE DE SUMINISTRO
   - Conexión a red pública: 3.0 bar
   - O cisterna + bomba: 3.5 bar

2. MATERIALES
   - Tubería principal: PVC Schedule 40 o Cobre Tipo L
   - Ramales: PVC Schedule 40
   - Diámetros: DN20-DN50 según caudal

3. PRESIÓN OPERATIVA
   - Mínimo: 2.0 bar
   - Normal: 3.0 bar
   - Máximo: 4.5 bar

4. PRUEBAS
   - Presión de prueba: 1.5 × presión trabajo
   - Duración: 24 horas mínimo
   - Aceptación: Sin fugas visibles
```

## Resumen

El dimensionamiento correcto de sistemas de agua fría requiere comprensión de caudales, presiones y velocidades. El modelado en Revit permite análisis precisos y documentación profesional, asegurando sistemas eficientes y confiables que cumplan con normas internacionales.

## Ejercicio Práctico

**Diseña un sistema de agua fría:**

1. Abre planta arquitectónica con baños definidos
2. Calcula total de fixture units (suma todos fixtures)
3. Determina caudal de pico con simultaneidad
4. Selecciona diámetros para cada segmento
5. Modela tubería principal (riser)
6. Crea ramales secundarios
7. Conecta a todos los fixtures
8. Ejecuta análisis de presión
9. Verifica presión en cada fixture (> 2.0 bar)
10. Genera schedule de agua fría
11. Documenta especificaciones

## Palabras Clave

Agua Fría, Caudal, Fixture Units, Presión, Diámetro, Velocidad, Bomba, Cisterna, Hazen-Williams, Pérdida de Carga, Válvulas, Schedule, Análisis, Sistema

---

**Tiempo de lectura:** 55-60 minutos
**Siguiente lección:** Sistemas de Agua Caliente y Recirculación
