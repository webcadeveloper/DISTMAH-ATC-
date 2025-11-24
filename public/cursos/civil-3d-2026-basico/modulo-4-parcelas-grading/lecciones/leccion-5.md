# Lección 5: Grading Tools (Slopes, Elevations, Surfaces)

**Duración:** 60 minutos
**Módulo:** 4 - Parcelas y Grading
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Utilizar grading tools de Civil 3D para diseño de nivelación
✅ Crear grading desde feature lines con criterios de pendiente
✅ Aplicar grading criteria (slope to distance, slope to surface, distance to elevation)
✅ Diferenciar entre slope grading y surface grading
✅ Crear grading groups y calcular volúmenes de corte y relleno
✅ Generar superficies de grading (grading surfaces) automáticamente
✅ Realizar análisis de corte y relleno (cut & fill) entre superficies
✅ Optimizar grading para balance de tierras (earthwork balance)
✅ Aplicar infill features para completar plataformas

---

## Introducción

El **grading** (nivelación de terrenos) es el proceso de modificar la topografía natural para crear plataformas horizontales, taludes, canales, y otras formas de terreno diseñadas. Es fundamental en:

- **Urbanizaciones:** Plataformas para viviendas, calles, áreas comunes
- **Edificaciones:** Building pads (plataformas de construcción)
- **Estacionamientos:** Superficies con pendiente para drenaje
- **Campos deportivos:** Canchas niveladas
- **Sitios industriales:** Plataformas para naves, patios de maniobras

**Objetivo del grading profesional:**
1. **Cumplir función:** Plataforma nivelada, drenaje adecuado
2. **Minimizar movimiento de tierra:** Reducir costos (menos corte/relleno)
3. **Balance de tierras:** Corte = Relleno (evitar importar/exportar material)
4. **Drenaje superficial:** Pendientes mínimas para flujo de agua (evitar encharcamientos)

Civil 3D automatiza el grading mediante **grading tools** que crean taludes, pendientes, y superficies basándose en **grading criteria** (criterios de diseño).

![Grading Overview](../imagenes/leccion-5-grading-overview.png)

---

## 1. Grading Tools Overview

### 1.1 Flujo de Trabajo de Grading

**Proceso típico:**

1. **Crear feature line** - Define el borde del elemento (ej: borde de plataforma)
2. **Aplicar grading** - Crea talud desde feature line hasta terreno o elevación objetivo
3. **Grading genera footprint** - El "pie" del talud (donde llega al terreno)
4. **Crear grading surface** - Superficie 3D que representa el diseño de grading
5. **Calcular volúmenes** - Compara grading surface vs terreno natural (cut & fill)

**Ejemplo práctico:**
- Feature line: Borde de plataforma rectangular a elevación 105 m
- Grading: Talud 2:1 (2 horizontal : 1 vertical) desde plataforma hasta terreno natural
- Resultado: Superficie de grading con plataforma + taludes

![Grading Workflow](../imagenes/leccion-5-workflow.png)

### 1.2 Acceso a Grading Tools

**Ribbon:** Home tab → Create Design panel → **Grading** dropdown

**Herramientas principales:**
- **Grading Creation Tools** - Toolbar para aplicar grading
- **Grading Volume Tools** - Cálculo de volúmenes
- **Edit Grading** - Modificación de grading existente

---

## 2. Crear Grading desde Feature Lines

### 2.1 Grading Creation Tools

**Activar herramientas de grading:**

1. **Ribbon:** Home → Grading → **Grading Creation Tools**

2. **Toolbar "Grading Creation Tools"** aparece (flotante o dockeable)

**Componentes del toolbar:**

| Ícono | Herramienta | Función |
|-------|-------------|---------|
| 🎯 | **Set the Grading Group** | Define grupo de grading |
| 📐 | **Set the Target Surface** | Superficie objetivo (terreno natural) |
| 📏 | **Grading Criteria** | Criterios de pendiente/distancia |
| ⚙️ | **Create Grading** | Aplicar grading a feature line |
| 🔧 | **Edit Grading** | Editar grading existente |

![Grading Creation Tools](../imagenes/leccion-5-creation-tools.png)

### 2.2 Configurar Grading Group

**¿Qué es un Grading Group?**
Un contenedor que agrupa múltiples gradings relacionados y genera una superficie combinada.

**Crear Grading Group:**

1. En toolbar "Grading Creation Tools", click en **Set the Grading Group** (primer ícono)

2. **Ventana "Create Grading Group":**
   - **Name:** `Platform-Grading-01`
   - **☑ Automatic surface creation** - **IMPORTANTE: Marca esto**
   - **Surface style:** `Contours 1m and 5m (Design)`
   - **☑ Use group volume baseline** (para cálculos de volumen)
   - **Volume base surface:** `EG` (Existing Ground - terreno natural)
   - OK

**Resultado:** Grading group creado. Cualquier grading que apliques se añade a este grupo y actualiza la superficie automáticamente.

![Grading Group](../imagenes/leccion-5-grading-group.png)

### 2.3 Set Target Surface

**Superficie objetivo:** Superficie a la que el grading "llega" (generalmente terreno natural).

**Configurar:**

1. En toolbar, click en **Set the Target Surface** (segundo ícono)

2. **Select target surface:**
   - Elige superficie existente: `EG` (Existing Ground)
   - O selecciona `<None>` si el grading va a elevación específica (no a superficie)

**Uso:**
- **Target = EG:** Talud llega hasta terreno natural (más común)
- **Target = None:** Talud llega a elevación fija o distancia específica

---

## 3. Grading Criteria (Criterios de Pendiente)

### 3.1 Tipos de Grading Criteria

Los **grading criteria** definen cómo se proyecta el grading desde la feature line.

**Opciones principales:**

| Criterio | Descripción | Uso Típico |
|----------|-------------|------------|
| **Slope to Surface** | Talud con pendiente específica hasta superficie objetivo | **Más común - Taludes de plataformas** |
| **Slope to Distance** | Talud con pendiente hasta distancia horizontal específica | Controlar extensión exacta del talud |
| **Distance to Elevation** | Distancia horizontal hasta elevación específica | Grading a nivel fijo |
| **Surface to Surface** | Grading entre dos superficies | Avanzado - Transiciones |

**Enfoque de esta lección:** Slope to Surface (más usado).

![Grading Criteria](../imagenes/leccion-5-criteria-types.png)

### 3.2 Slope to Surface - Configuración

**Slope to Surface:** Crea talud con pendiente constante desde feature line hasta que intersecta superficie objetivo.

**Parámetros:**

- **Slope format:**
  - **Grade (%):** 25% (pendiente como porcentaje)
  - **Run/Rise (ratio):** 2:1 (2 unidades horizontales por 1 vertical)
  - **Angle (degrees):** 26.57° (ángulo en grados)

**Ejemplo: Talud 2:1**
- Por cada 2 metros horizontales, baja 1 metro vertical
- Equivalente a 50% de pendiente
- Equivalente a ~26.57° de ángulo

**Conversiones:**
| Ratio | Grade (%) | Angle (°) | Uso |
|-------|-----------|-----------|-----|
| 2:1 | 50% | 26.6° | Talud común de plataforma |
| 3:1 | 33.3% | 18.4° | Talud suave (estacionamientos) |
| 1.5:1 | 66.7% | 33.7° | Talud empinado (corte en roca) |
| 4:1 | 25% | 14.0° | Talud muy suave (áreas verdes) |

**Configurar en toolbar:**

1. Click en **Grading Criteria** (tercer ícono)

2. **Grading Criteria dropdown:**
   - Selecciona: **Slope to Surface: 2:1 (default)**
   - O personaliza: **Edit Criteria Set...**

### 3.3 Crear Grading Criteria Personalizado

**Crear criterio nuevo:**

1. Toolspace → Settings → Grading → **Grading Criteria Sets**

2. Click derecho en `Standard` → **New...**

3. **Nombre:** `Platform-Criteria-Set`

4. Click derecho en el nuevo set → **New...**

5. **Grading Criteria dialog:**
   - **Name:** `Slope to Surface 3:1 Cut`
   - **Type:** ○ **Slope to Surface**
   - **Format:** ○ **Run:Rise**
   - **Slope:** **3:1**
   - **☑ Cut** (talud de corte - terreno está arriba)
   - OK

6. Repite para crear: `Slope to Surface 2:1 Fill`
   - Slope: 2:1
   - **☑ Fill** (talud de relleno - terreno está abajo)

**Diferencia Cut vs Fill:**
- **Cut (corte):** Remueves material - talud sube desde feature line hasta terreno
- **Fill (relleno):** Añades material - talud baja desde feature line hasta terreno

![Criteria Cut Fill](../imagenes/leccion-5-cut-fill-criteria.png)

---

## 4. Aplicar Grading a Feature Line

### 4.1 Crear Grading - Paso a Paso

**Prerequisito:** Feature line creada (ej: borde de plataforma a elevación 105 m).

**Pasos:**

1. **Asegúrate que Grading Creation Tools esté abierto**
   - Home → Grading → Grading Creation Tools

2. **Configuración inicial:**
   - **Grading Group:** `Platform-Grading-01` (ya configurado)
   - **Target Surface:** `EG` (ya configurado)
   - **Grading Criteria:** `Slope to Surface: 2:1`

3. **Click en "Create Grading" icon** (ícono de talud)

4. **Command line pregunta:**
   ```
   Select the feature:
   ```
   - Click en la **feature line** (borde de plataforma)

5. **Select the grading side:**
   - Click **fuera** de la plataforma (lado donde quieres el talud)
   - O presiona **B** (Both sides) si quieres taludes en ambos lados

6. **Apply to entire length? [Yes/No]:**
   - **Y** (Yes) - Aplica grading a toda la feature line
   - Enter

7. Civil 3D crea **grading object** instantáneamente:
   - Talud 2:1 desde plataforma (105 m) hasta terreno natural (EG)
   - Footprint (línea donde el talud llega al terreno) se genera automáticamente
   - Superficie de grading se actualiza (si automatic surface creation está activado)

**Resultado visual:**
- Plataforma horizontal a 105 m
- Talud inclinado 2:1 alrededor de plataforma
- Transición suave al terreno natural

![Create Grading](../imagenes/leccion-5-create-grading.png)

### 4.2 Grading en Ambos Lados (Both Sides)

**Aplicación:** Feature line que representa eje de camino - necesitas taludes a ambos lados.

**Proceso:**
1. Create Grading → Select feature line
2. **Select grading side:** Presiona **B** (Both)
3. Civil 3D crea taludes en ambos lados simultáneamente

---

## 5. Slope Grading vs Surface Grading

### 5.1 Diferencias Conceptuales

**Slope Grading (más común):**
- Grading proyecta con **pendiente constante** desde feature line
- Llega a superficie objetivo o distancia especificada
- Ejemplos: Taludes de plataformas, bordes de estacionamiento

**Surface Grading (avanzado):**
- Grading "morphs" entre dos superficies
- No usa pendiente constante - interpola entre superficies
- Ejemplos: Transiciones complejas, restoration grading

**Esta lección enfoca en Slope Grading** (más usado en proyectos básicos).

---

## 6. Grading Groups y Volúmenes

### 6.1 ¿Por Qué Usar Grading Groups?

**Ventajas:**
1. **Organización:** Agrupa gradings relacionados (ej: todos los taludes de una plataforma)
2. **Superficie automática:** Crea una superficie combinada de todos los gradings del grupo
3. **Cálculo de volúmenes:** Compara automáticamente vs superficie base (terreno natural)

**Acceso a grading groups:**
- Toolspace → Prospector → Sites → [Site] → Grading Groups

### 6.2 Propiedades de Grading Group

**Click derecho en grading group → Properties:**

**Information tab:**
- **Name:** Nombre del grupo
- **Volume base surface:** Superficie de comparación (EG)

**Grading tab:**
- Lista todos los grading objects del grupo
- Puedes eliminar gradings individuales

**Volume Surface:**
- **Name:** Nombre de la superficie generada (ej: `Platform-Grading-01-Surface`)
- **Style:** Estilo de visualización

![Grading Group Properties](../imagenes/leccion-5-group-properties.png)

### 6.3 Calcular Volúmenes de Corte y Relleno

**Civil 3D calcula volúmenes automáticamente** comparando grading surface vs base surface.

**Ver volúmenes:**

1. **Ribbon:** Analyze tab → Volumes and Materials panel → **Volumes Dashboard**

2. **O desde Grading Group:**
   - Toolspace → Prospector → Grading Groups → [tu grupo]
   - Click derecho → **Properties**
   - **Information tab → Volume:**
     - **Cut (corte):** 450.25 m³
     - **Fill (relleno):** 125.75 m³
     - **Net (neto):** 324.50 m³ Cut (más corte que relleno)

**Interpretación:**
- **Cut > Fill:** Necesitas exportar material (o usar en otro lado del proyecto)
- **Fill > Cut:** Necesitas importar material
- **Cut ≈ Fill:** **Balance de tierras ideal** - Minimiza costos

![Volume Calculation](../imagenes/leccion-5-volumes.png)

---

## 7. Crear Superficie de Grading

### 7.1 Grading Surface Automática

Si configuraste **"Automatic surface creation"** al crear grading group, la superficie se genera automáticamente.

**Verificar:**
1. Toolspace → Prospector → Surfaces
2. Deberías ver: `Platform-Grading-01` (superficie del grading group)

**Propiedades:**
- Click derecho en superficie → **Properties**
- **Definition tab:**
  - **Type:** Grading
  - **Grading group:** Platform-Grading-01

**Visualización:**
- La superficie incluye:
  - Feature line original (plataforma)
  - Taludes generados (grading)
  - Footprints (donde taludes llegan al terreno)

### 7.2 Añadir Grading Surface Manualmente

Si NO usaste automatic creation:

1. Home → Create Design → **Surface** → **Create Surface**

2. **Create Surface dialog:**
   - **Type:** ○ **Grading**
   - **Name:** `Platform-Surface-Manual`
   - **Style:** Contours 1m and 5m
   - OK

3. **Toolspace → Prospector → Surfaces → [Surface] → Definition → Grading Groups**

4. Click derecho → **Add...**

5. **Add Grading Group dialog:**
   - Selecciona: `Platform-Grading-01`
   - OK

6. Superficie se genera con datos del grading group

![Grading Surface](../imagenes/leccion-5-grading-surface.png)

---

## 8. Análisis de Corte y Relleno

### 8.1 Volume Surface (Superficie de Volumen)

Para **visualizar** áreas de corte vs relleno:

**Crear Volume Surface:**

1. **Ribbon:** Analyze tab → Volumes and Materials panel → **Volumes Dashboard**

2. **Volumes Dashboard:**
   - **Base Surface:** `EG` (terreno natural)
   - **Comparison Surface:** `Platform-Grading-01` (diseño de grading)
   - Click **Create Volume Surface**

3. **Create Surface dialog:**
   - **Name:** `Volume-Cut-Fill`
   - **Style:** Selecciona **Cut and Fill** (estilo con colores: rojo=corte, azul=relleno)
   - OK

4. **Resultado:** Superficie que muestra:
   - **Rojo:** Áreas de corte (remueves material)
   - **Azul:** Áreas de relleno (añades material)
   - **Amarillo/Verde:** Balance (poco cambio)

![Volume Surface](../imagenes/leccion-5-volume-surface.png)

### 8.2 Interpretación de Resultados

**Ejemplo de reporte de volúmenes:**
```
Base Surface: EG
Comparison Surface: Platform-Grading-01

Cut Volume:    1,250.50 m³
Fill Volume:     875.25 m³
Net Volume:      375.25 m³ (Cut)

Cut Area:      1,850 m²
Fill Area:     1,320 m²
```

**Análisis:**
- Proyecto tiene exceso de 375 m³ de material de corte
- Opciones:
  1. Usar material para rellenos en otra parte del sitio
  2. Exportar (costo de transporte)
  3. Rediseñar grading para balance

### 8.3 Tablas de Volúmenes

**Añadir tabla al drawing:**

1. **Annotate tab → Labels & Tables → Add Tables dropdown → Total Volume Table**

2. **Table Creation dialog:**
   - **Select volume surface:** `Volume-Cut-Fill`
   - OK

3. Click para colocar tabla en drawing

**Tabla generada:**
| Surface Comparison | Cut (m³) | Fill (m³) | Net (m³) |
|--------------------|----------|----------|----------|
| EG vs Platform-Grading-01 | 1,250.50 | 875.25 | 375.25 Cut |

![Volume Table](../imagenes/leccion-5-volume-table.png)

---

## 9. Grading Optimization para Balance

### 9.1 Estrategias de Optimización

**Objetivo:** Minimizar movimiento de tierra y lograr balance (Cut ≈ Fill).

**Técnicas:**

#### A) Ajustar Elevación de Plataforma
- Si tienes exceso de corte: **Sube** elevación de plataforma
- Si tienes exceso de relleno: **Baja** elevación de plataforma

**Proceso iterativo:**
1. Diseño inicial: Plataforma a 105 m → Net = 375 m³ Cut
2. Ajuste: Sube feature line a 106 m (Raise/Lower +1 m)
3. Grading se actualiza automáticamente
4. Recalcula volúmenes → Net = 125 m³ Cut (mejor)
5. Ajuste fino: 106.2 m → Net = 15 m³ Cut (casi balanceado)

#### B) Cambiar Pendientes de Taludes
- **Taludes más suaves** (3:1 vs 2:1) → Más área de grading → Más volumen
- **Taludes más empinados** (1.5:1 vs 2:1) → Menos área → Menos volumen

**Trade-off:** Taludes muy empinados pueden ser inestables o requerir muros de contención.

#### C) Reorientar o Redimensionar Plataforma
- Rotar plataforma para aprovechar zonas con menos pendiente natural
- Reducir tamaño de plataforma si es posible

![Optimization](../imagenes/leccion-5-optimization.png)

### 9.2 Workflow de Optimización

**Pasos profesionales:**

1. **Diseño inicial** con parámetros base
2. **Calcular volúmenes** iniciales
3. **Identificar desbalance** (Cut vs Fill)
4. **Ajustar parámetros:**
   - Elevación de plataforma
   - Pendientes de taludes
   - Dimensiones de plataforma
5. **Recalcular volúmenes** (automático en Civil 3D)
6. **Iterar** hasta lograr balance aceptable (típicamente ±10% es bueno)

**Métrica objetivo:**
```
Balance Ratio = |Cut - Fill| / (Cut + Fill)

Excelente: < 5%
Bueno: < 10%
Aceptable: < 20%
```

---

## 10. Infill Features para Plataformas

### 10.1 ¿Qué Son Infill Features?

**Infill:** Rellena el interior de una plataforma con superficie plana.

**Problema:** Si solo tienes feature line del borde, el interior de la plataforma puede no tener superficie definida.

**Solución:** Añadir **infill** al grading group.

### 10.2 Crear Infill

**Pasos:**

1. **Grading Creation Tools toolbar**

2. Click en **Create Infill** icon (último ícono del toolbar)

3. **Select grading or feature line:**
   - Click en el borde de la plataforma (feature line o grading)
   - Civil 3D detecta área cerrada

4. **Specify a point inside the area:** Click dentro de la plataforma

5. Enter

**Resultado:** Interior de plataforma se rellena con superficie plana a elevación de la feature line.

**Verificación:** Grading surface ahora incluye la plataforma completa (borde + interior).

![Infill](../imagenes/leccion-5-infill.png)

**Uso profesional:** Esencial para plataformas de edificios, estacionamientos, canchas deportivas (cualquier área plana que necesita superficie definida).

---

## Ejercicio Práctico 5

**Objetivo:** Diseñar grading completo para plataforma de edificio con análisis de volúmenes.

**Escenario:** Creas una plataforma rectangular para edificio con taludes alrededor, optimizas para balance de tierras.

**Datos:**
- Plataforma: 50 m × 40 m
- Elevación inicial: 110.00 m
- Terreno natural: Superficie EG (pendiente general de SW a NE, elevaciones 106-114 m)
- Taludes: 2:1 (pendiente estándar)

**Tareas:**

1. **Preparar terreno (superficie EG):**
   - Crea superficie simple con 4 puntos:
     - (0, 0, 106)
     - (150, 0, 108)
     - (150, 150, 114)
     - (0, 150, 112)
   - Home → Surfaces → Create Surface
   - Name: `EG`
   - Añade puntos y crea TIN

2. **Crear feature line de plataforma:**
   - Command: `RECTANGLE`
   - Esquina 1: (50, 55)
   - Esquina 2: @50,40 (rectángulo 50×40)
   - Home → Feature Line → Create from Objects
   - Name: `Building-Pad-Edge`
   - Elevation: **110.00**

3. **Crear Grading Group:**
   - Home → Grading → Grading Creation Tools
   - Set Grading Group → **Create Grading Group**
   - Name: `Building-Pad-Grading`
   - ☑ Automatic surface creation
   - Volume base surface: `EG`
   - OK

4. **Configurar y aplicar grading:**
   - Set Target Surface: `EG`
   - Grading Criteria: `Slope to Surface: 2:1`
   - **Create Grading**
   - Select feature: Click en Building-Pad-Edge
   - Select side: Presiona **B** (Both - taludes en todos lados)
   - Apply to entire length: **Y**

5. **Observar resultado en 3D:**
   - View → Visual Styles → Realistic
   - ViewCube → Vista isométrica
   - Observa plataforma + taludes

6. **Añadir infill a plataforma:**
   - Grading Creation Tools → **Create Infill**
   - Select grading: Click en borde
   - Point inside: Click dentro de la plataforma
   - Enter

7. **Calcular volúmenes iniciales:**
   - Toolspace → Prospector → Grading Groups → Building-Pad-Grading
   - Click derecho → **Properties**
   - Information tab → **Volumes:**
     - Anota: Cut = _____ m³, Fill = _____ m³, Net = _____ m³

8. **Optimizar para balance:**
   - ¿Hay exceso de Cut o Fill?
   - Si Cut > Fill: Selecciona feature line → Raise/Lower → **+0.5** (sube plataforma)
   - Si Fill > Cut: Raise/Lower → **-0.5** (baja plataforma)
   - Grading se actualiza automáticamente
   - Recalcula volúmenes (Properties del grading group)
   - Repite hasta lograr balance < 10%

9. **Crear Volume Surface:**
   - Analyze → Volumes Dashboard
   - Base: EG, Comparison: Building-Pad-Grading
   - Create Volume Surface
   - Style: Cut and Fill
   - Observa áreas rojas (cut) vs azules (fill)

10. **Añadir tabla de volúmenes:**
    - Annotate → Add Tables → Total Volume Table
    - Select: Volume-Cut-Fill surface
    - Coloca tabla en drawing

**Entregable:**
- Drawing con:
  - Superficie EG
  - Plataforma con grading completo (taludes + infill)
  - Volume surface mostrando cut/fill
  - Tabla de volúmenes
- Reporte indicando:
  - Elevación final de plataforma
  - Volumen Cut, Fill, Net
  - Balance ratio alcanzado

![Ejercicio 5 - Grading](../imagenes/leccion-5-ejercicio-platform-grading.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es el propósito principal de un grading group en Civil 3D?

**Pregunta 2:** ¿Qué significa un talud con pendiente "2:1" en términos de relación horizontal:vertical?

**Pregunta 3:** ¿Cuál es la diferencia entre "Cut" y "Fill" en el contexto de movimiento de tierras?

**Pregunta 4:** Si un proyecto tiene Cut = 1,500 m³ y Fill = 500 m³, ¿cuál es el volumen neto y qué implica?

**Pregunta 5:** ¿Para qué se utiliza el "infill" en un grading group?

**Respuestas:**
1. Agrupar gradings relacionados, generar superficie automática combinada, y calcular volúmenes de corte y relleno vs superficie base.
2. Por cada 2 unidades de distancia horizontal, hay 1 unidad de cambio vertical. Equivale a 50% de pendiente.
3. Cut (corte) es remoción de material del terreno natural. Fill (relleno) es adición de material para elevar el terreno.
4. Net = 1,000 m³ Cut. Implica exceso de material que debe ser exportado del sitio o redistribuido en otras áreas del proyecto.
5. Para rellenar el interior de áreas cerradas (como plataformas) con superficie plana, completando la definición de la superficie de grading.

---

## Recursos Adicionales

**Documentación oficial:**
- Civil 3D 2026 - Grading User Guide
- Earthwork Analysis and Optimization Guide

**Videos recomendados:**
- Grading Tools Complete Tutorial (YouTube Autodesk)
- Cut and Fill Analysis in Civil 3D
- Optimizing Earthwork Balance

**Normativas:**
- Pendientes máximas de taludes según tipo de suelo (consulta geotecnia local)
- Estándares de drenaje superficial (pendientes mínimas)

---

## Resumen

En esta lección aprendiste:

✅ El flujo de trabajo completo de grading en Civil 3D
✅ Crear y configurar grading groups con superficie automática
✅ Aplicar grading criteria (Slope to Surface) con pendientes específicas
✅ Diferenciar entre taludes de corte (cut) y relleno (fill)
✅ Generar superficies de grading automáticamente desde grading groups
✅ Calcular volúmenes de corte y relleno comparando superficies
✅ Crear volume surfaces para visualización de áreas de cut/fill
✅ Optimizar grading para balance de tierras mediante ajustes iterativos
✅ Aplicar infill para completar plataformas con superficies planas

**Próximo Módulo:** Módulo 5 - Redes de Tuberías y Utilities (diseño de alcantarillado y agua potable)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 90 minutos diseñando grading para diferentes escenarios (estacionamientos, canales, múltiples plataformas)
