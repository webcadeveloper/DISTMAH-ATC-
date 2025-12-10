# Lección 21: Quantification y Takeoff

## Introducción

La cuantificación precisa de materiales y elementos es fundamental para la estimación de costos, presupuestación y planificación de proyectos de construcción. La capacidad de extraer cantidades directamente del modelo 3D BIM elimina errores manuales, reduce tiempo de estimación y proporciona datos consistentes para toma de decisiones.

**Autodesk Navisworks** proporciona herramientas profesionales de cuantificación que permiten extraer cantidades automáticamente desde modelos federados, realizar takeoff manual de elementos específicos, generar reportes detallados y comparar cantidades entre opciones de diseño. En esta lección, aprenderá a utilizar herramientas de medición avanzadas, configurar criterios de cuantificación, generar reportes de materiales y establecer workflows de integración con sistemas de estimación de costos.

Esta lección es esencial para BIM Coordinators, Quantity Surveyors, Estimadores de Costos y VDC Managers responsables de presupuestación y control de proyectos.

---

## Objetivos de Aprendizaje

Al finalizar esta lección, usted será capaz de:

- Extraer cantidades automáticas del modelo 3D federado
- Utilizar herramientas de medición para takeoff manual de elementos
- Configurar criterios de cuantificación por categoría, material y propiedad
- Generar reportes de cantidades detallados en múltiples formatos
- Realizar comparación de cantidades entre opciones de diseño
- Calcular volúmenes, áreas y longitudes de elementos específicos
- Exportar datos de cantidades a Microsoft Excel y Autodesk Quantification
- Integrar cantidades con bases de datos de costos unitarios
- Implementar workflows de estimación basados en modelo 3D
- Validar y verificar precisión de cantidades extraídas
- Crear reportes personalizados según estándares organizacionales

---

## 1. Fundamentos de Quantification en BIM

### 1.1 ¿Qué es Model-Based Quantification?

**Model-Based Quantification (MBQ)** es el proceso de extraer cantidades de materiales y elementos directamente desde modelos 3D BIM, eliminando la necesidad de medición manual en planos 2D.

**Ventajas vs. Takeoff tradicional 2D:**

**Takeoff Tradicional (2D):**
- Manual, tedioso, propenso a errores
- Tiempo: 2-4 semanas para proyecto mediano
- Precisión: ±10-15% típico
- Actualizaciones: Requiere re-medición completa
- Visualización: Limitada a planos 2D

**Model-Based Quantification (3D):**
- Automático, preciso, consistente
- Tiempo: 2-3 días para proyecto mediano
- Precisión: ±2-5% típico
- Actualizaciones: Automáticas con modelo actualizado
- Visualización: 3D interactivo, verificación visual

**Tipos de cantidades extraíbles:**
- **Count (Unidades):** Número de elementos (puertas, ventanas, luminarias)
- **Length (Longitud):** Metros lineales (tuberías, ductos, cables, muros)
- **Area (Área):** Metros cuadrados (pisos, paredes, techos, fachadas)
- **Volume (Volumen):** Metros cúbicos (concreto, excavación, relleno)
- **Weight (Peso):** Toneladas (acero estructural, metales)
- **Custom Properties:** Propiedades específicas (potencia eléctrica, capacidad HVAC)

### 1.2 Requisitos para Quantification Efectiva

Para cuantificación precisa, el modelo BIM debe cumplir requisitos:

**Requisitos del Modelo:**

1. **Información completa de elementos:**
   - Todos elementos deben tener propiedades definidas
   - Material, dimensiones, tipo, categoría
   - Sin elementos "genéricos" sin información

2. **Modelado según realidad constructiva:**
   - Elementos modelados en tamaños y cantidades reales
   - No simplificaciones excesivas
   - Detalles constructivos incluidos

3. **Categorización consistente:**
   - Elementos correctamente categorizados (Walls, Floors, Doors, etc.)
   - Families y Types descriptivos
   - Properties consistentes entre elementos similares

4. **Level of Development (LOD) apropiado:**
   - Mínimo LOD 300 para estimación conceptual
   - LOD 350-400 para estimación detallada
   - LOD 400-500 para construcción y fabricación

**Limitaciones de Quantification:**

- **No reemplaza completamente estimación tradicional:** Partidas no modeladas (mano de obra, equipos, costos indirectos)
- **Precisión depende de modelo:** "Garbage in, garbage out"
- **Requiere validación:** Verificar cantidades críticas manualmente
- **No incluye desperdicios:** Agregar factores de desperdicio según material (5-10% concreto, 15-20% acero, etc.)

### 1.3 Workflow General de Quantification

**Proceso típico de cuantificación en Navisworks:**

1. **Preparación:**
   - Federar modelos de todas disciplinas
   - Verificar integridad de datos
   - Configurar unidades de medición

2. **Definición de criterios:**
   - Seleccionar elementos a cuantificar
   - Agrupar por categorías relevantes (material, sistema, nivel)
   - Definir propiedades a extraer

3. **Extracción de cantidades:**
   - Ejecutar quantification automática
   - Revisar resultados preliminares
   - Validar con inspección visual 3D

4. **Generación de reportes:**
   - Crear reportes organizados por partida
   - Exportar a Excel para manipulación
   - Integrar con precios unitarios

5. **Análisis y estimación:**
   - Aplicar costos unitarios
   - Calcular subtotales por sistema/disciplina
   - Generar presupuesto total

6. **Actualización continua:**
   - Regenerar cantidades con modelos actualizados
   - Comparar versiones para control de cambios
   - Mantener historial de estimaciones

---

## 2. Herramientas de Medición en Navisworks

### 2.1 Measurement Tools - Panel Completo

Navisworks proporciona herramientas de medición manual para complementar extracción automática:

**Acceso:**
- View tab > Measure panel
- O presione **F7**
- Se activa panel "Measure" lateral

**Herramientas disponibles:**

### 2.2 Point to Point Measurement

Medición de distancia entre dos puntos:

**Proceso:**
1. **Activar herramienta:**
   - Measure panel > Point to Point
   - O toolbar Measure > Point-to-Point icon

2. **Seleccionar primer punto:**
   - Click en geometría del modelo
   - Usar snaps para precisión (endpoint, midpoint, intersection)

3. **Seleccionar segundo punto:**
   - Click en segundo punto
   - Se muestra línea de medición con valor

4. **Leer resultado:**
   - Distancia mostrada en unidades configuradas (metros, feet)
   - Valor actualizable en panel Measure

**Configuración de Snaps:**
- Options > Snapping
- Enable: Endpoint, Midpoint, Intersection, Center
- Snap Radius: 5-10 pixels (ajustable)

**Uso típico:**
- Verificar distancias entre elementos
- Confirmar espaciamientos
- Validar dimensiones críticas

### 2.3 Accumulated Measurement

Medición de suma de múltiples segmentos:

**Proceso:**
1. **Activar herramienta:**
   - Measure panel > Accumulated

2. **Click en puntos secuenciales:**
   - Click punto 1
   - Click punto 2 (muestra distancia parcial)
   - Click punto 3 (muestra distancia acumulada)
   - Continuar para todos segmentos

3. **Finalizar medición:**
   - Double-click o Enter
   - Total acumulado mostrado

**Uso típico:**
- Medir longitud total de tuberías con múltiples tramos
- Calcular perímetro de espacios
- Sumar longitudes de muros no-continuos

### 2.4 Area Measurement

Medición de área de superficies:

**Proceso:**
1. **Activar herramienta:**
   - Measure panel > Area

2. **Definir perímetro:**
   - Click en puntos definiendo boundary del área
   - Mínimo 3 puntos (polígono)
   - Puede ser irregular

3. **Cerrar polígono:**
   - Click en punto inicial o double-click
   - Área calculada automáticamente

4. **Leer resultado:**
   - Área en m² o ft² según unidades

**Uso típico:**
- Medir áreas de piso
- Calcular áreas de fachadas
- Cuantificar acabados (pintura, alfombra, azulejo)

### 2.5 Angle Measurement

Medición de ángulos:

**Proceso:**
1. **Activar herramienta:**
   - Measure panel > Angle

2. **Definir vértice y lados:**
   - Click punto 1 (primer lado)
   - Click punto 2 (vértice del ángulo)
   - Click punto 3 (segundo lado)

3. **Leer ángulo:**
   - Ángulo en grados mostrado

**Uso típico:**
- Verificar ángulos de inclinación (rampas, techos)
- Confirmar geometría de elementos angulares
- Validar orientación de elementos

### 2.6 Shortest Distance

Distancia mínima entre objetos:

**Proceso:**
1. **Activar herramienta:**
   - Measure panel > Shortest Distance

2. **Seleccionar dos objetos:**
   - Click en primer elemento
   - Click en segundo elemento

3. **Resultado:**
   - Línea mostrando distancia mínima entre objetos
   - Perpendicular entre superficies más cercanas

**Uso típico:**
- Verificar clearances entre equipos
- Validar espacios de mantenimiento
- Confirmar separaciones mínimas normativas

### 2.7 Conversion to Selection Set

Guardar elementos medidos para quantification:

**Proceso:**
1. **Realizar medición** (cualquier tipo)
2. **Guardar medición:**
   - Click derecho en medición > Save As Selection Set
   - Nombrar descriptivamente (ej: "Tuberia_HVAC_Nivel1")
3. **Usar Selection Set para quantification:**
   - Extraer propiedades de elementos en set
   - Generar reportes específicos

---

## 3. Extracción Automática de Cantidades

### 3.1 Quantification Usando Selection Sets

Método principal para cuantificación organizada:

**Proceso completo:**

**Paso 1: Crear Selection Sets por partida**

Organizar elementos según partidas de presupuesto:

1. **Identificar partidas presupuestales:**
   - Ejemplo proyecto:
     - Concreto estructural
     - Acero de refuerzo
     - Muros de mampostería
     - Pisos de cerámica
     - Puertas y ventanas
     - Sistemas HVAC
     - Sistemas eléctricos
     - Sistemas hidrosanitarios

2. **Crear Search Sets para cada partida:**
   - Home tab > Selection > Find Items
   - Configurar criterios de búsqueda

**Ejemplo - Concreto estructural:**
```
Search Set: Concreto Estructural
├── Category: Structural Columns
├── OR Category: Structural Framing
├── OR Category: Floors (Type: Structural)
├── AND Material: Concrete
└── Result: Todos elementos estructurales de concreto
```

3. **Guardar como Selection Set:**
   - Click derecho en resultados > Save Search As Selection Set
   - Nombrar: "QTO_Concreto_Estructural"

4. **Repetir para todas partidas:**
   - Crear 20-50 selection sets según complejidad del proyecto

**Paso 2: Verificar contenido de Selection Sets**

1. **Activar Selection Set:**
   - Select en panel Sets
   - Elementos se destacan en viewport 3D

2. **Inspeccionar visualmente:**
   - Verificar que incluye elementos correctos
   - Identificar elementos faltantes o incorrectos

3. **Ajustar criterios si necesario:**
   - Refinar Search Sets
   - Agregar/remover elementos manualmente

**Paso 3: Extraer propiedades y cantidades**

1. **Seleccionar Selection Set:**
   - Click en set "QTO_Concreto_Estructural"

2. **Abrir Properties panel:**
   - Properties window (Alt+1)
   - Muestra propiedades de elementos seleccionados

3. **Identificar propiedades relevantes:**
   - **Para concreto:** Volume, Material, Element Type
   - **Para acero:** Weight, Length, Size
   - **Para muros:** Area, Height, Length, Width
   - **Para puertas:** Count, Width, Height, Material

4. **Exportar propiedades:**
   - Panel Properties > Export
   - Seleccionar propiedades a exportar
   - Formato: Excel (.xlsx)

### 3.2 Generación de Reportes de Cantidades

**Proceso de generación de reporte:**

**Método 1: DataTools Report**

1. **Acceder a DataTools:**
   - Tools tab > DataTools panel > DataTools
   - O presione **Ctrl+F12**

2. **Configurar reporte:**
   - **Report Type:** Quantity Takeoff
   - **Selection:** Current Selection Set o All Model
   - **Group By:** Category, Material, Type (ajustable)

3. **Seleccionar campos:**
   - **Category:** Categoría del elemento
   - **Family:** Familia Revit
   - **Type:** Tipo específico
   - **Count:** Número de elementos
   - **Length:** Longitud total (si aplica)
   - **Area:** Área total (si aplica)
   - **Volume:** Volumen total (si aplica)
   - **Material:** Material del elemento
   - **Custom Properties:** Propiedades específicas

4. **Configurar agrupación y resumen:**
   - **Group By:** Agrupar por Category, luego Material, luego Type
   - **Summary:** Sum totals por grupo
   - **Sort:** Ordenar alfabéticamente o por cantidad

5. **Generar reporte:**
   - Click "Generate Report"
   - Preview en pantalla

6. **Exportar reporte:**
   - Export > Excel
   - Guardar como: "Quantities_ProjectName_Date.xlsx"

**Método 2: Manual Export con Selection Sets**

Para control fino de formato:

1. **Seleccionar Selection Set específico:**
   - Ej: "QTO_Concreto_Estructural"

2. **Exportar propiedades:**
   - Properties panel > Export Properties
   - Seleccionar propiedades específicas a exportar

3. **Guardar como CSV:**
   - File > Save As > CSV
   - Abrir en Excel

4. **Procesar en Excel:**
   - **Eliminar duplicados** (si elementos se cuentan múltiples veces)
   - **Agrupar por Type o Material**
   - **Calcular sumas totales** (=SUM)
   - **Formato profesional** (headers, borders, totals)

5. **Repetir para cada partida:**
   - Generar sheet por Selection Set
   - Consolidar en workbook único

### 3.3 Ejemplo Completo - Reporte de Concreto

**Proyecto:** Edificio de oficinas 5 pisos

**Partida:** Concreto estructural

**Selection Set:** "QTO_Concreto_Estructural"
- Incluye: Columnas, vigas, losas, zapatas, muros estructurales

**Campos a extraer:**
- Category
- Type (C30x40, C40x40, Viga 25x60, Losa 20cm, etc.)
- Count (cantidad de elementos)
- Volume (m³ por elemento)
- Total Volume (suma de volúmenes)

**Reporte generado:**

```
REPORTE DE CANTIDADES - CONCRETO ESTRUCTURAL
Proyecto: Edificio Oficinas XYZ
Fecha: 2025-11-24

┌──────────────────────┬───────────┬───────┬────────────┬─────────────┐
│ Category             │ Type      │ Count │ Vol Unit   │ Vol Total   │
├──────────────────────┼───────────┼───────┼────────────┼─────────────┤
│ Structural Columns   │ C30x40    │   48  │  3.60 m³   │  172.80 m³  │
│ Structural Columns   │ C40x40    │   24  │  4.80 m³   │  115.20 m³  │
│ Structural Framing   │ Viga25x60 │  120  │  1.50 m³   │  180.00 m³  │
│ Structural Framing   │ Viga30x70 │   60  │  2.10 m³   │  126.00 m³  │
│ Floors (Structural)  │ Losa 20cm │    5  │ 250.00 m³  │ 1,250.00 m³ │
│ Structural Walls     │ Muro 25cm │  200m │  50.00 m³  │   50.00 m³  │
│ Structural Footings  │ Zapata A  │   48  │  2.50 m³   │  120.00 m³  │
├──────────────────────┴───────────┴───────┴────────────┼─────────────┤
│ TOTAL CONCRETO ESTRUCTURAL                            │ 2,014.00 m³ │
└───────────────────────────────────────────────────────┴─────────────┘

Notas:
- Volúmenes no incluyen desperdicio (aplicar factor 5-7%)
- Incluye concreto en elementos estructurales únicamente
- Excluye concreto arquitectónico y pisos

Generado por: Navisworks Manage 2026
```

**Procesamiento para presupuesto:**

En Excel, agregar columnas de costo:

```
│ Vol Total │ Factor Desp. │ Vol Real  │ Precio Unit │ Subtotal      │
├───────────┼──────────────┼───────────┼─────────────┼───────────────┤
│ 172.80 m³ │    1.05      │ 181.44 m³ │  $2,500/m³  │  $453,600.00  │
│ 115.20 m³ │    1.05      │ 120.96 m³ │  $2,500/m³  │  $302,400.00  │
│ ...       │    ...       │   ...     │    ...      │     ...       │
├───────────┴──────────────┴───────────┴─────────────┼───────────────┤
│ TOTAL CONCRETO ESTRUCTURAL                          │ $5,436,600.00 │
└─────────────────────────────────────────────────────┴───────────────┘
```

---

## 4. Comparación de Opciones de Diseño

### 4.1 Quantification para Value Engineering

Comparar cantidades entre opciones para toma de decisiones:

**Escenario:** Edificio con 3 opciones de sistema estructural
- **Opción A:** Concreto reforzado convencional
- **Opción B:** Estructura metálica con losa colaborante
- **Opción C:** Sistema prefabricado de concreto

**Proceso de comparación:**

**Paso 1: Cargar modelos de cada opción**

1. **Abrir Navisworks con Opción A:**
   - Federar modelos de Opción A

2. **Generar cantidades Opción A:**
   - Crear Selection Sets por material
   - Exportar cantidades a Excel: "Quantities_OptionA.xlsx"

3. **Repetir para Opción B y C:**
   - Reload modelo con Opción B
   - Regenerar cantidades
   - Reload modelo con Opción C
   - Regenerar cantidades

**Paso 2: Consolidar cantidades en matriz comparativa**

Crear tabla en Excel:

```
COMPARACIÓN DE OPCIONES - CANTIDADES Y COSTOS

┌────────────────────┬────────────┬────────────┬────────────┐
│ Partida            │  Opción A  │  Opción B  │  Opción C  │
├────────────────────┼────────────┼────────────┼────────────┤
│ Concreto (m³)      │   2,014    │     650    │   1,200    │
│ Acero refuerzo (t) │     180    │      45    │      80    │
│ Acero estr. (t)    │       0    │     420    │      60    │
│ Losa colab. (m²)   │       0    │   5,000    │       0    │
│ Prefab. (unid)     │       0    │       0    │     250    │
├────────────────────┼────────────┼────────────┼────────────┤
│ COSTO ESTRUCTURA   │ $8,500,000 │ $9,200,000 │ $8,100,000 │
│ TIEMPO (semanas)   │     32     │     24     │     20     │
│ MANO OBRA (hrs)    │  12,000    │   8,000    │   6,000    │
└────────────────────┴────────────┴────────────┴────────────┘

ANÁLISIS:
- Opción A: Menor costo, mayor tiempo
- Opción B: Mayor costo, tiempo medio, requiere soldadores especializados
- Opción C: Costo bajo, menor tiempo, mejor opción si hay planta prefab cercana

RECOMENDACIÓN: Opción C (prefabricado)
- Ahorro 18% vs Opción B
- Ahorro 38% en tiempo vs Opción A
- Menor impacto ambiental (menos desperdicio)
```

### 4.2 Change Order Quantification

Cuantificar impacto de cambios de diseño:

**Escenario:** Cliente solicita cambio de ventanas estándar a ventanas de alto rendimiento

**Proceso:**

1. **Cuantificar estado actual:**
   - Selection Set: "Windows_Standard"
   - Count: 240 ventanas
   - Area total: 450 m²
   - Costo: $1,200/m² = $540,000

2. **Cuantificar estado propuesto:**
   - Selection Set: "Windows_HighPerformance"
   - Count: 240 ventanas (mismo)
   - Area total: 450 m² (mismo)
   - Costo: $2,100/m² = $945,000

3. **Calcular Change Order:**
   - Delta costo: $945,000 - $540,000 = **$405,000 incremento**
   - Delta tiempo: +2 semanas (lead time mayor)
   - Beneficio: Ahorro energético $35,000/año

4. **Presentar análisis a cliente:**
   - Costo adicional: $405,000
   - ROI: 405,000 / 35,000 = 11.6 años
   - Decisión: Cliente aprueba cambio (edificio ciclo vida 30+ años)

---

## 5. Integración con Autodesk Quantification

### 5.1 ¿Qué es Autodesk Quantification?

**Autodesk Quantification** (anteriormente Autodesk QTO) es software especializado de cuantificación que complementa Navisworks:

**Capacidades:**
- Cuantificación 2D desde planos PDF
- Cuantificación 3D desde modelos BIM
- Bases de datos de costos integradas
- Templates de reportes personalizables
- Integración con Autodesk Construction Cloud
- Historial de cambios y versiones

**Cuando usar Quantification vs. Navisworks:**
- **Navisworks:** Cuantificación básica, verificación de cantidades, coordinación
- **Quantification:** Estimación detallada, presupuestación formal, licitaciones

### 5.2 Exportación de Navisworks a Quantification

**Proceso:**

1. **Preparar modelo en Navisworks:**
   - Federar todos modelos
   - Crear Selection Sets organizados
   - Verificar propiedades completas

2. **Exportar modelo:**
   - File > Export > NWD (Navisworks Document)
   - Guardar en ubicación compartida

3. **Abrir en Autodesk Quantification:**
   - Launch Quantification
   - File > Open > Seleccionar archivo NWD

4. **Vincular propiedades a partidas:**
   - Quantification detecta categorías automáticamente
   - Mapear categorías BIM a partidas presupuestales
   - Ejemplo: "Structural Columns" → "03-300 Concreto Columnas"

5. **Aplicar costos unitarios:**
   - Vincular base de datos de precios (RSMeans, local)
   - Aplicar precios por ubicación geográfica
   - Ajustar por fecha (inflación)

6. **Generar presupuesto completo:**
   - Quantification genera presupuesto formal
   - Incluye costos directos, indirectos, utilidad, impuestos
   - Export a Excel, PDF, Autodesk Construction Cloud

**Ventaja:** Workflow integrado BIM → Cuantificación → Presupuesto → Licitación.

---

## 6. Cuantificaciones Específicas por Disciplina

### 6.1 Quantification Arquitectónica

**Partidas típicas:**

**Muros:**
- **Propiedad a extraer:** Area (m²)
- **Selection Criteria:** Category = Walls
- **Consideraciones:**
  - Descontar área de puertas/ventanas si modelo lo refleja
  - Separar por tipo de acabado (pintura, azulejo, piedra)
  - Agrupar por ubicación (interior/exterior)

**Pisos:**
- **Propiedad:** Area (m²)
- **Criteria:** Category = Floors
- **Separar por:**
  - Material de acabado (cerámica, porcelanato, alfombra, concreto pulido)
  - Nivel/planta
  - Uso (público, privado, servicio)

**Techos/Plafones:**
- **Propiedad:** Area (m²)
- **Criteria:** Category = Ceilings
- **Tipos:**
  - Plafón de tabla yeso
  - Plafón acústico
  - Losa expuesta (no plafón)

**Puertas y Ventanas:**
- **Propiedad:** Count, Width, Height, Area
- **Criteria:** Category = Doors / Windows
- **Agrupar por:**
  - Material (madera, aluminio, PVC)
  - Tipo (abatible, corredera, fija)
  - Acabado (natural, pintada, anodizada)

**Ejemplo - Reporte pisos:**

```
PISOS - QUANTIFICATION REPORT

┌──────────────────────┬─────────┬──────────┬─────────────┬──────────────┐
│ Tipo de Piso         │  Nivel  │ Area m²  │ Precio /m²  │   Subtotal   │
├──────────────────────┼─────────┼──────────┼─────────────┼──────────────┤
│ Porcelanato 60x60    │   PB    │   850.5  │   $850      │  $722,925    │
│ Porcelanato 60x60    │   N1-5  │ 4,120.0  │   $850      │ $3,502,000   │
│ Alfombra modular     │   N1-5  │ 1,250.0  │   $420      │  $525,000    │
│ Cerámica antiderrp.  │  Baños  │   180.5  │   $650      │  $117,325    │
│ Concreto pulido      │Estacion.│   320.0  │   $380      │  $121,600    │
├──────────────────────┴─────────┼──────────┴─────────────┼──────────────┤
│ TOTAL PISOS                     │ 6,721.0 m²             │ $4,988,850   │
└─────────────────────────────────┴────────────────────────┴──────────────┘
```

### 6.2 Quantification Estructural

**Partidas típicas:**

**Concreto:**
- **Propiedad:** Volume (m³)
- **Separar por:**
  - Elemento (columnas, vigas, losas, muros, zapatas)
  - Resistencia (f'c 250, 300, 350 kg/cm²)
  - Nivel
- **Agregar desperdicio:** 5-7%

**Acero de Refuerzo:**
- **Propiedad:** Weight (ton) o Length (m)
- **Separar por:**
  - Diámetro (varilla #3, #4, #5, #6, #8)
  - Elemento
- **Agregar desperdicio:** 15-20% (traslapes, cortes)

**Acero Estructural:**
- **Propiedad:** Weight (ton)
- **Separar por:**
  - Perfil (IPR, HSS, canal, ángulo)
  - Dimensión
  - Grado de acero (A36, A572 Gr50)

**Ejemplo - Reporte acero refuerzo:**

```
ACERO DE REFUERZO - QUANTITIES

┌───────────┬──────────────────┬────────────┬────────────┬─────────────┐
│ Diámetro  │   Elemento       │  Long. (m) │  Peso (kg) │ Peso (ton)  │
├───────────┼──────────────────┼────────────┼────────────┼─────────────┤
│ #3 (3/8") │ Estribos col/vig │  12,580    │   7,028    │   7.03      │
│ #4 (1/2") │ Losas, sec.      │  28,450    │  22,506    │  22.51      │
│ #5 (5/8") │ Vigas, refuerzo  │  18,200    │  22,295    │  22.30      │
│ #6 (3/4") │ Columnas, long.  │  15,800    │  27,943    │  27.94      │
│ #8 (1")   │ Vigas principales│   8,450    │  26,611    │  26.61      │
├───────────┴──────────────────┴────────────┼────────────┼─────────────┤
│ SUBTOTAL ACERO REFUERZO                   │ 106,383 kg │  106.38 ton │
│ Factor desperdicio (18%)                  │  19,149 kg │   19.15 ton │
├───────────────────────────────────────────┼────────────┼─────────────┤
│ TOTAL ACERO REFUERZO (incl. desperdicio)  │ 125,532 kg │  125.53 ton │
└───────────────────────────────────────────┴────────────┴─────────────┘

Precio: $18,500 / ton (incluye suministro, habilitado, colocación)
TOTAL: 125.53 ton × $18,500 = $2,322,305
```

### 6.3 Quantification MEP

**Sistemas HVAC:**

**Ductos:**
- **Propiedad:** Length (m), Area (m²)
- **Separar por:**
  - Dimensión (rectangular WxH, circular Ø)
  - Sistema (suministro, retorno, extracción)
  - Material (lámina galvanizada, fibra de vidrio)

**Equipos:**
- **Propiedad:** Count, Capacity (CFM, tons)
- **Tipos:** Manejadoras, fan coils, extractores, difusores, rejillas

**Sistemas Eléctricos:**

**Cableado:**
- **Propiedad:** Length (m)
- **Separar por:**
  - Calibre (10 AWG, 8 AWG, 6 AWG, etc.)
  - Sistema (fuerza, alumbrado, datos)
  - Número de conductores

**Canalizaciones:**
- **Propiedad:** Length (m)
- **Tipos:** Conduit metálico, PVC, charola portacables

**Equipos:**
- **Propiedad:** Count, Power (kW)
- **Tipos:** Tableros, CCMs, transformadores, luminarias

**Sistemas Hidrosanitarios:**

**Tuberías:**
- **Propiedad:** Length (m)
- **Separar por:**
  - Diámetro (1/2", 3/4", 1", 2", 4", 6")
  - Sistema (agua fría, agua caliente, drenaje, ventilación)
  - Material (cobre, PVC, PEX, hierro galvanizado)

**Equipos:**
- **Propiedad:** Count
- **Tipos:** Muebles sanitarios, válvulas, bombas, calentadores

**Ejemplo - Reporte ductos HVAC:**

```
DUCTOS HVAC - QUANTIFICATION

┌──────────────────┬──────────┬────────────┬────────────┬──────────────┐
│ Tipo Ducto       │ Sistema  │  Long. (m) │ Area (m²)  │   Costo      │
├──────────────────┼──────────┼────────────┼────────────┼──────────────┤
│ Rectangular      │          │            │            │              │
│  600x400mm       │ Sumin.   │    450.5   │   450.0    │  $157,500    │
│  500x300mm       │ Sumin.   │    680.2   │   544.2    │  $163,260    │
│  400x200mm       │ Retorno  │    520.8   │   312.5    │   $78,125    │
│                  │          │            │            │              │
│ Circular         │          │            │            │              │
│  Ø 300mm         │ Extrac.  │    280.5   │   263.7    │   $92,295    │
│  Ø 200mm         │ Extrac.  │    420.0   │   263.9    │   $79,170    │
├──────────────────┴──────────┼────────────┼────────────┼──────────────┤
│ TOTAL DUCTOS HVAC           │ 2,352.0 m  │ 1,834.3 m² │  $570,350    │
└─────────────────────────────┴────────────┴────────────┴──────────────┘

Notas:
- Incluye lámina galvanizada cal. 24
- No incluye accesorios (codos, tees, dampers)
- Precio: $300/m² fabricación + instalación
```

---

## 7. Validación y Verificación de Cantidades

### 7.1 Métodos de Validación

**Validación visual 3D:**

1. **Activar Selection Set:**
   - Select set a validar
   - Elementos se destacan en 3D

2. **Inspeccionar visualmente:**
   - Verificar que incluye todos elementos esperados
   - Identificar elementos faltantes
   - Detectar elementos incorrectamente incluidos

3. **Navegar por niveles:**
   - Seccionar por nivel
   - Verificar completitud por planta

**Validación por cálculo manual:**

Para partidas críticas, verificar con cálculo tradicional:

1. **Seleccionar muestra representativa:**
   - Ejemplo: Piso tipo (uno de 5 iguales)

2. **Calcular manualmente:**
   - Medir área de piso en plano: 850 m²
   - Multiplicar por 5 pisos: 4,250 m²

3. **Comparar con extracto BIM:**
   - Quantity del modelo: 4,180 m²
   - Delta: 4,250 - 4,180 = 70 m² (1.6% diferencia)
   - Investigar delta (probablemente áreas de shaft excluidas)

4. **Aceptar o corregir:**
   - <5% diferencia: Generalmente aceptable
   - >5% diferencia: Investigar y corregir

**Validación cruzada con otras fuentes:**

1. **Comparar con estimación preliminar:**
   - Estimación conceptual: 2,000 m³ concreto
   - Quantification BIM: 2,014 m³ concreto
   - Consistencia: Confirmada

2. **Comparar con proyecto similar:**
   - Proyecto anterior similar: 180 kg acero/m² construido
   - Proyecto actual: 125 ton / 700 m² = 178.6 kg/m²
   - Consistencia: Confirmada

3. **Comparar con ratios de industria:**
   - Industria: Edificio oficinas 120-150 kg acero refuerzo/m³ concreto
   - Proyecto: 125.5 ton / 2,014 m³ = 62.3 kg/m³
   - **ALERTA:** Ratio bajo, investigar (posible error o diseño optimizado)

### 7.2 Resolución de Discrepancias

**Discrepancia común 1: Elementos duplicados**

**Síntoma:** Cantidades el doble de lo esperado

**Causa:** Modelo arquitectónico Y modelo estructural incluyen mismos elementos

**Solución:**
1. Identificar disciplina principal por elemento
2. Crear Search Sets excluyendo disciplinas duplicadas
3. Ejemplo: Para concreto, usar SOLO modelo estructural

**Discrepancia común 2: Elementos con propiedades faltantes**

**Síntoma:** Volumen = 0 o N/A

**Causa:** Elementos sin material o dimensión definida

**Solución:**
1. Identificar elementos con property = null
2. Solicitar corrección en modelo fuente (Revit)
3. O asignar propiedades manualmente en Navisworks (Override Properties)

**Discrepancia común 3: Level of Detail insuficiente**

**Síntoma:** Cantidades muy aproximadas

**Causa:** Modelo LOD 200 usado para estimación detallada

**Solución:**
1. Comunicar a equipo de diseño: Requerir LOD 300+
2. Documentar limitación en reporte
3. Aplicar factores de contingencia mayores (15-20%)

---

## 8. Workflows Profesionales de Estimación

### 8.1 Workflow Completo - Estimación de Proyecto

**Proyecto:** Edificio comercial, 8,500 m², 5 niveles

**Objetivo:** Generar presupuesto completo para licitación

**Proceso (5-7 días):**

**Día 1: Preparación y validación de modelos**
- Federar modelos Arq, Est, MEP
- Verificar completitud de propiedades
- Validar LOD adecuado (mínimo 300)
- Documentar limitaciones/exclusiones

**Día 2: Creación de estructura de partidas**
- Definir 40-60 partidas presupuestales según estándar CSI MasterFormat
- Crear Selection/Search Sets por partida
- Validar visualmente cada set
- Documentar criterios de inclusión/exclusión

**Día 3-4: Extracción de cantidades**
- Ejecutar quantification por partida
- Exportar a Excel
- Aplicar factores de desperdicio
- Validar cantidades críticas (concreto, acero, pisos)
- Resolver discrepancias

**Día 5: Aplicación de costos unitarios**
- Obtener precios de bases de datos (RSMeans, local)
- Ajustar por ubicación geográfica (factor ciudad)
- Ajustar por fecha (inflación)
- Aplicar precios a cantidades
- Calcular subtotales por partida

**Día 6: Integración de partidas no-modeladas**
- Agregar mano de obra (% de materiales)
- Agregar equipos y herramientas (% del proyecto)
- Preliminares (oficinas temporales, servicios)
- Costos indirectos (administración, supervisión)
- Utilidad (10-15%)
- Impuestos (IVA 16%)

**Día 7: Generación de presupuesto final**
- Compilar presupuesto completo
- Análisis de precios unitarios (APU) por partida
- Explosión de insumos (materiales, mano obra, equipo)
- Resumen ejecutivo
- Documentación de supuestos y exclusiones
- Revisión QA/QC
- Entrega a cliente/licitación

**Resultado:** Presupuesto detallado profesional con precisión ±5%.

### 8.2 Workflow de Actualización Continua

Para proyectos en curso, actualizar cantidades periódicamente:

**Frecuencia:** Semanal/quincenal

**Proceso rápido (2-3 horas):**

1. **Recibir modelo actualizado:**
   - Equipo de diseño publica modelo revisado

2. **Reload en Navisworks:**
   - File > Append/Merge > Replace existing

3. **Re-ejecutar quantification:**
   - Selection Sets ya configurados (reusables)
   - Generate reports actualizados

4. **Comparar con versión anterior:**
   - Delta quantities por partida
   - Identificar cambios significativos (±5%)

5. **Actualizar presupuesto:**
   - Aplicar deltas a presupuesto actual
   - Recalcular totales

6. **Generar reporte de cambios:**
   - Log de cantidades modificadas
   - Impacto en costo y tiempo
   - Comunicar a stakeholders

**Beneficio:** Control continuo de costos, detección temprana de cost overruns.

---

## 9. Integración con Cost Databases

### 9.1 RSMeans Integration

**RSMeans** es la base de datos de costos de construcción más usada en Norteamérica:

**Integración con Navisworks:**

1. **Exportar cantidades de Navisworks:**
   - Generar reporte Excel con cantidades

2. **Abrir en RSMeans Online:**
   - Importar cantidades desde Excel

3. **Mapear partidas:**
   - Vincular cada partida a código RSMeans
   - Ejemplo: "Concreto columnas" → RSMeans 03 30 53.40 3100

4. **Aplicar precios:**
   - RSMeans aplica precios actualizados
   - Ajuste automático por City Cost Index
   - Incluye materiales + mano obra + equipo

5. **Generar presupuesto:**
   - RSMeans genera presupuesto completo
   - Formato estándar de industria

**Ventaja:** Precios actualizados trimestralmente, confiables para licitaciones.

### 9.2 Bases de Datos Locales (México)

Para proyectos en México, usar bases de datos regionales:

**BIMSA (Banco de Información de la Construcción):**
- Precios de insumos y mano de obra para México
- Actualización mensual
- Disponible por suscripción

**CMIC (Cámara Mexicana de la Industria de la Construcción):**
- Precios de mano de obra por región
- Rendimientos típicos

**Proceso de integración:**

1. **Exportar cantidades de Navisworks a Excel**
2. **En Excel, vincular con base de datos local:**
   - VLOOKUP de precios desde tabla BIMSA
   - Fórmulas: =Cantidad × PrecioUnitario
3. **Ajustar por ubicación del proyecto:**
   - Factor regional (CDMX = 1.00, Monterrey = 0.95, etc.)
4. **Generar presupuesto final**

---

## 10. Reportes y Presentación de Cantidades

### 10.1 Formatos de Reportes Profesionales

**Reporte de Cantidades Detallado:**

Estructura recomendada:

```
REPORTE DE CUANTIFICACIÓN
Proyecto: [Nombre del Proyecto]
Ubicación: [Ciudad, Estado]
Cliente: [Nombre del Cliente]
Fecha: [YYYY-MM-DD]
Preparado por: [Nombre, Empresa]

1. RESUMEN EJECUTIVO
   - Área construida total: 8,500 m²
   - Volumen de excavación: 3,200 m³
   - Concreto estructural: 2,014 m³
   - Acero de refuerzo: 125.5 ton
   - [Otras partidas principales]

2. METODOLOGÍA
   - Modelos BIM utilizados: Arquitectura, Estructura, MEP
   - Software: Autodesk Navisworks Manage 2026
   - Level of Detail: LOD 300
   - Fecha de modelos: [YYYY-MM-DD]

3. CANTIDADES POR DISCIPLINA
   3.1 ARQUITECTURA
       - Muros
       - Pisos
       - Techos
       - Puertas y ventanas
       - [etc.]

   3.2 ESTRUCTURA
       - Cimentación
       - Concreto estructural
       - Acero de refuerzo
       - Acero estructural

   3.3 MEP
       - HVAC
       - Eléctrico
       - Hidrosanitario
       - [etc.]

4. SUPUESTOS Y EXCLUSIONES
   - Factores de desperdicio aplicados
   - Partidas no incluidas en modelo
   - Limitaciones de precisión

5. ANEXOS
   - Reportes detallados por partida
   - Planos de referencia
   - Screenshots 3D de verificación
```

**Reporte de Comparación de Opciones:**

```
ANÁLISIS COMPARATIVO DE OPCIONES DE DISEÑO

PROYECTO: [Nombre]
OPCIONES EVALUADAS: A, B, C

┌─────────────────────────┬───────────┬───────────┬───────────┐
│ CONCEPTO                │ OPCIÓN A  │ OPCIÓN B  │ OPCIÓN C  │
├─────────────────────────┼───────────┼───────────┼───────────┤
│ CANTIDADES              │           │           │           │
│ - Concreto (m³)         │   2,014   │     650   │   1,200   │
│ - Acero ref. (ton)      │     125   │      45   │      80   │
│ - Acero estr. (ton)     │       0   │     420   │      60   │
│                         │           │           │           │
│ COSTOS                  │           │           │           │
│ - Estructura            │ $8.5 M    │  $9.2 M   │  $8.1 M   │
│ - MEP                   │ $3.2 M    │  $3.0 M   │  $3.1 M   │
│ - Arquitectura          │ $4.8 M    │  $4.5 M   │  $4.7 M   │
│ - TOTAL                 │ $16.5 M   │ $16.7 M   │ $15.9 M   │
│                         │           │           │           │
│ TIEMPO (semanas)        │    32     │    24     │    20     │
│                         │           │           │           │
│ IMPACTO AMBIENTAL       │           │           │           │
│ - CO2 embodied (ton)    │    850    │    920    │    680    │
│ - Waste (ton)           │    120    │     85    │     45    │
└─────────────────────────┴───────────┴───────────┴───────────┘

RECOMENDACIÓN: OPCIÓN C
- Menor costo total (-3.6% vs A, -4.8% vs B)
- Menor tiempo de construcción (-37.5% vs A)
- Menor impacto ambiental (-20% CO2 vs A)
```

### 10.2 Visualización de Cantidades en 3D

Para presentaciones ejecutivas, visualizar cantidades directamente en modelo:

**Técnica: Color-coding por costo**

1. **Calcular costo por elemento:**
   - En Excel: Costo = Cantidad × PrecioUnitario

2. **Importar costos a Navisworks:**
   - DataTools > Import Data from Excel
   - Vincular por Revit Element ID

3. **Crear Appearance Profile por rango de costo:**
   - Low cost: Verde ($0-$5,000)
   - Medium cost: Amarillo ($5,000-$15,000)
   - High cost: Naranja ($15,000-$30,000)
   - Very high cost: Rojo (>$30,000)

4. **Aplicar color-coding:**
   - View > Appearance Profiler
   - Apply scheme basado en propiedad "Costo"

5. **Resultado visual:**
   - Modelo 3D con elementos coloreados por costo
   - Inmediatamente identifica elementos más costosos
   - Útil para value engineering targeting

**Presentación:**
- Screenshot 3D con leyenda de costos
- Permite a stakeholders no-técnicos entender distribución de costos visualmente

---

## Resumen de la Lección

En esta lección ha dominado **Quantification y Takeoff** en Navisworks 2026:

### Competencias Adquiridas

**Técnicas:**
- Extracción automática de cantidades desde modelos 3D federados
- Uso de herramientas de medición manual (punto a punto, área, volumen)
- Creación de Selection Sets organizados por partida presupuestal
- Generación de reportes de cantidades en Excel y DataTools
- Comparación de cantidades entre opciones de diseño
- Aplicación de factores de desperdicio según material
- Validación y verificación de cantidades extraídas
- Exportación a Autodesk Quantification y cost databases
- Integración con bases de datos de precios unitarios

**Profesionales:**
- Estimación de costos basada en modelo 3D BIM
- Presupuestación detallada para licitaciones
- Control de costos durante desarrollo de proyecto
- Value engineering informado por cantidades reales
- Comunicación de impacto de cambios de diseño (change orders)
- Reportes profesionales de cuantificación
- Workflows de actualización continua de presupuestos

### Puntos Clave

1. **Model-based quantification es más precisa que takeoff 2D tradicional** - ±2-5% vs ±10-15%
2. **Organización con Selection Sets es fundamental** - Estructura por partidas presupuestales
3. **Validación es crítica** - Verificar cantidades críticas visualmente y manualmente
4. **Factores de desperdicio son esenciales** - 5-7% concreto, 15-20% acero refuerzo
5. **Level of Detail del modelo afecta precisión** - LOD 300+ requerido para estimación detallada
6. **Exportación a Excel permite manipulación flexible** - Integración con cost databases
7. **Actualización continua controla costos** - Regenerar cantidades con cada revisión de modelo

### Preparación para Lección 22

En la próxima lección aprenderá **BIM 360 Glue Integration**, donde publicará modelos a la nube, establecerá flujos de trabajo colaborativos, realizará clash detection en línea y gestionará proyectos desde dispositivos móviles para coordinación distribuida.

**Adelanto Lección 22:**
- Publicación de modelos a BIM 360 Glue
- Configuración de workspaces colaborativos cloud
- Clash detection en línea
- Gestión de issues en tiempo real
- Acceso móvil desde tablets y smartphones
- Dashboards de proyecto para stakeholders
- Control de versiones y permisos cloud

---

## Ejercicio Práctico

Ver **Ejercicio 21** en el archivo `ejercicios.md` del módulo para realizar una cuantificación completa de proyecto con generación de reporte de cantidades y presupuesto básico.

**¡Felicitaciones por completar la Lección 21!** Ha adquirido las habilidades de cuantificación y estimación de costos basadas en BIM, fundamentales para control de proyectos de construcción.
