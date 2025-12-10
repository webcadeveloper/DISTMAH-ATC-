# Lección 2: Parcel Sizing y Layout de Subdivisión

**Duración:** 60 minutos
**Módulo:** 4 - Parcelas y Grading
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Utilizar parcel sizing tools para dimensionamiento automático de lotes
✅ Crear parcelas con área objetivo específica (ej: 300 m² exactos)
✅ Aplicar slide line y swing line para ajustar dimensiones de lotes
✅ Diseñar subdivisión residencial completa de manera automática
✅ Establecer minimum frontage y depth requirements según normativa
✅ Generar parcel reports para análisis de lotes
✅ Crear Right-of-Way (ROW) como parcel especial
✅ Optimizar layout de subdivisión para máximo aprovechamiento del terreno

---

## Introducción

El **dimensionamiento de parcelas (parcel sizing)** es una de las funcionalidades más poderosas de Civil 3D para proyectos de urbanización. Permite crear lotes automáticamente con áreas específicas, frontages mínimos, y profundidades controladas, cumpliendo con regulaciones de zonificación y maximizando el aprovechamiento del terreno.

En lugar de dibujar manualmente cada lote y ajustar hasta lograr el área deseada, Civil 3D calcula automáticamente las dimensiones necesarias basándose en:
- Área objetivo del lote (ej: 300 m²)
- Frontage mínimo (ej: 10 metros)
- Profundidad mínima/máxima (ej: 20-30 metros)
- Offset desde right-of-way (retiro frontal)

**Aplicación profesional:** En desarrollos residenciales, la zonificación local establece lotes mínimos (ej: "zona R2 requiere mínimo 250 m²"). Parcel sizing asegura cumplimiento automático de estas normativas mientras optimiza el número de lotes vendibles.

---

## 1. Parcel Sizing Tools Overview

### 1.1 Herramientas de Dimensionamiento

Civil 3D ofrece varias herramientas para crear parcelas dimensionadas automáticamente:

**Ribbon:** Home tab → Create Design panel → **Parcel** dropdown

**Herramientas principales:**

| Herramienta | Función | Uso Típico |
|-------------|---------|------------|
| **Slide Line - Create** | Divide parcela con línea deslizante | Dividir lote grande en 2 lotes específicos |
| **Swing Line - Create** | Divide parcela con línea que rota | División desde vértice con área controlada |
| **Free Form Create** | Dibuja parcela libremente | Lotes irregulares manualmente |
| **Parcel Sizing (submenu)** | **Dimensionamiento automático** | **Subdivisiones residenciales** |

**Enfoque de esta lección:** Parcel Sizing submenu.

![Parcel Sizing Tools](../imagenes/leccion-2-sizing-tools.png)

---

## 2. Crear Parcelas con Área Específica

### 2.1 Slide Line - Create con Área Objetivo

El método más directo para crear una parcela con área exacta es usar **Slide Line - Create** con parámetro de área.

**Escenario:** Tienes un lote grande de 800 m² y quieres dividirlo en dos lotes: uno de 300 m² y otro de 500 m².

**Pasos:**

1. **Ribbon:** Home → Parcel → **Slide Line - Create**

2. **Command line:** `CreateParcelBySlide`

3. **Select parcel to be subdivided:** Click en el lote grande

4. **Command line pregunta:**
   ```
   Specify start point or [Area]:
   ```
   Escribe: **A** (Area) + Enter

5. **Specify area for new parcel:**
   Escribe: **300** + Enter (para 300 m²)

6. **Select frontage:** Click en el segmento que será frontage del nuevo lote

7. **Specify offset from frontage:**
   - **0** si quieres que inicie exactamente en el frontage
   - **2** si quieres retiro frontal de 2 metros

8. Civil 3D calcula automáticamente la profundidad necesaria para lograr exactamente 300 m²

9. **Specify angle or [Reverse]:** Enter para aceptar ángulo perpendicular al frontage

**Resultado:** Lote de exactamente 300.00 m² creado automáticamente.

![Slide Line por Área](../imagenes/leccion-2-slide-area.png)

### 2.2 Parámetros del Slide Line

**Opciones durante el comando:**

- **Area:** Define área objetivo del lote a crear
- **Frontage:** Segmento frontal del lote (generalmente da a calle)
- **Offset:** Retiro desde frontage (setback frontal)
- **Angle:** Ángulo de la línea divisoria
- **Reverse:** Invierte dirección de la subdivisión

**Tip profesional:** Si el área solicitada es imposible de lograr (ej: pides 500 m² en un lote de 400 m²), Civil 3D mostrará error.

---

## 3. Swing Line para Ajustes de Lotes

### 3.1 Swing Line - Create

**Swing Line** es similar a Slide Line, pero la línea divisoria **rota alrededor de un punto fijo** (generalmente un vértice).

**Uso típico:** Crear lote de esquina con área específica.

**Pasos:**

1. **Ribbon:** Home → Parcel → **Swing Line - Create**

2. **Select parcel to be subdivided:** Click en lote

3. **Specify pivot point:** Click en vértice desde el que rotará la línea (ej: esquina frontal)

4. **Specify start point or [Area]:**
   - **A** para especificar área objetivo
   - Escribe área deseada (ej: 320)

5. Civil 3D rota la línea desde el pivot point hasta alcanzar el área objetivo

**Diferencia con Slide Line:**
- **Slide Line:** Línea permanece paralela/perpendicular al frontage
- **Swing Line:** Línea rota desde punto fijo

![Swing Line](../imagenes/leccion-2-swing-line.png)

---

## 4. Subdivisión Residencial Automática

### 4.1 Crear Subdivisión con Lotes Uniformes

Civil 3D puede crear **múltiples lotes automáticamente** a lo largo de un frontage (calle).

**Comando clave:** `Parcel Layout Tools`

**Escenario:** Tienes un terreno rectangular de 3000 m² con frente a una calle, y quieres crear lotes de 300 m² cada uno.

**Método A: Manual con múltiples Slide Lines**

1. Usa **Slide Line - Create** con área 300
2. Repite para cada lote
3. Tedioso si son 10+ lotes

**Método B: Parcel Layout Tools (Recomendado para subdivisiones grandes)**

**Pasos:**

1. **Ribbon:** Home → Create Design → Parcel → **Parcel Creation Tools**

2. **Ventana "Parcel Layout Tools"** se abre (toolbar flotante)

3. **Herramientas disponibles en toolbar:**
   - **Slide Line - Create**
   - **Slide Direction - Rotation Angle:** Controla ángulo de división
   - **Sizing Parameters:** Define área, frontage mínimo

4. **Click en "Sizing Parameters" (ícono de regla):**
   - **Minimum Frontage:** 10 (metros)
   - **Minimum Depth:** 20 (metros)
   - **Minimum Area:** 280 (m²)
   - **Use Minimum Frontage at Offset:** ☑ (si aplica setback)
   - **Frontage Offset:** 2 (metros de retiro frontal)
   - **Automatic Layout:** ☑ (para subdivisión automática)
   - OK

5. **Click en "Slide Line - Create" en toolbar**

6. **Select parcel to subdivide:** Click en lote grande

7. **Select frontage:** Click en segmento que da a la calle

8. Civil 3D crea **automáticamente** tantos lotes como quepan con:
   - Área de ~300 m² (ajustado a terreno disponible)
   - Frontage mínimo de 10 m
   - Profundidad mínima de 20 m

**Resultado:** Subdivisión completa con lotes uniformes en segundos.

![Automatic Layout](../imagenes/leccion-2-automatic-layout.png)

### 4.2 Ajustar Lotes Creados

Después de la subdivisión automática, puedes ajustar lotes individuales:

**Método 1: PI Edit (Point of Intersection)**
1. Selecciona línea divisoria entre dos lotes
2. Aparecen grips triangulares
3. Arrastra el grip para mover la línea divisoria
4. Ambos lotes se redimensionan dinámicamente

**Método 2: Slide Line Adjust**
1. Home → Parcel → **Slide Line - Edit**
2. Select parcel boundary (línea divisoria)
3. Especifica nueva área para uno de los lotes
4. Civil 3D ajusta automáticamente

![PI Edit Parcels](../imagenes/leccion-2-pi-edit.png)

---

## 5. Minimum Frontage y Depth Requirements

### 5.1 Configurar Requisitos de Zonificación

La mayoría de zonificaciones municipales establecen:
- **Frontage mínimo:** Ej: "lotes residenciales R1 requieren mínimo 12 metros de frente"
- **Profundidad mínima:** Ej: "mínimo 25 metros de profundidad"
- **Área mínima:** Ej: "mínimo 300 m²"

**Configurar en Parcel Layout Tools:**

1. Abre **Parcel Layout Tools** toolbar

2. Click en **Parcel Sizing** icon (regla)

3. **Parcel Sizing dialog:**
   ```
   Minimum Frontage:    12.00 m
   Minimum Depth:       25.00 m
   Minimum Area:        300.00 m²

   Maximum Depth:       40.00 m (opcional)

   Use Minimum Frontage at Offset: ☑
   Frontage Offset:     3.00 m (retiro frontal)
   ```

4. OK

**Comportamiento:**
- Civil 3D **no creará lotes** que violen estos mínimos
- Si el terreno restante no alcanza para un lote completo, queda como "remainder" (remanente)

![Sizing Requirements](../imagenes/leccion-2-sizing-requirements.png)

### 5.2 Manejo de Remanentes

**Remainder parcel:** Lote restante que no cumple requisitos mínimos.

**Opciones:**
1. **Ajustar lotes adyacentes** - Distribuye el remanente entre lotes vecinos
2. **Crear lote irregular** - Para uso especial (área verde, equipamiento)
3. **Rediseñar subdivisión** - Cambia orientación o ajusta parámetros

**Comando para distribuir remanente:**
1. Select remainder parcel
2. Home → Parcel → **Delete** (elimina parcel)
3. Ajusta lotes vecinos manualmente con PI edit

---

## 6. Parcel Reports y Análisis

### 6.1 Generar Reporte de Lotes

Civil 3D puede exportar listados detallados de parcelas para:
- Presentación a autoridades municipales
- Análisis de rentabilidad del proyecto
- Documentación legal

**Pasos:**

1. **Toolspace → Toolbox tab**

2. Expande **Reports Manager**

3. Expande **Parcel**

4. Click derecho en **Parcel Report** → **Execute...**

5. **Ventana "Export to XML Report":**
   - **Select Parcels:** All parcels in drawing (o selecciona site específico)
   - **Report Format:** HTML o Excel
   - **Output path:** Elige ubicación (ej: C:\Reports\Parcel-Report.html)
   - OK

6. Civil 3D genera reporte con:
   - Número de parcel
   - Nombre
   - Área (m² o acres)
   - Perímetro
   - Frontage length
   - Coordenadas de vértices

**Reporte ejemplo:**
```html
Parcel Report - Subdivisión Residencial Norte

Parcel 1 (Lote A-1): 305.42 m²
  Frontage: 12.50 m
  Perimeter: 72.80 m
  Vertices: 4

Parcel 2 (Lote A-2): 298.67 m²
  Frontage: 12.00 m
  Perimeter: 70.45 m
  Vertices: 4

Total Parcels: 15
Total Area: 4,521.33 m²
```

![Parcel Report](../imagenes/leccion-2-parcel-report.png)

### 6.2 Análisis de Densidad

**Cálculo de densidad residencial:**

**Fórmula:**
```
Densidad = Número de lotes / Área bruta (hectáreas)
```

**Ejemplo:**
- Terreno: 2.5 hectáreas (25,000 m²)
- Lotes creados: 75
- Densidad: 75 / 2.5 = **30 viviendas/hectárea**

**Comparar con normativa:**
- Zonificación R1 (baja densidad): máx 20 viv/ha
- Zonificación R2 (media densidad): máx 40 viv/ha
- Zonificación R3 (alta densidad): máx 80 viv/ha

**Uso:** Verifica que tu diseño cumple con densidad permitida.

---

## 7. Right-of-Way como Parcel

### 7.1 Crear ROW (Derecho de Vía)

El **Right-of-Way (ROW)** es la franja de terreno destinada a calles públicas.

**Método:** Crear parcel que representa el ROW.

**Pasos básicos:**

1. Si tienes polyline del ROW existente:
   - Home → Parcel → **Create From Objects**
   - Site: Crea site separado llamado "ROW-Calles"
   - Convert polyline a parcel

2. Si tienes alineamiento de calle (Módulo 3):
   - Home → Parcel → **Create ROW** (herramienta automática)
   - Select alignment
   - Specify width (ej: 15 metros)
   - Civil 3D crea parcel de ROW automáticamente

**Ventaja de parcel ROW:**
- Calcula área total de ROW automáticamente
- Resta del área vendible del proyecto
- Se integra en parcel tables

![ROW Parcel](../imagenes/leccion-2-row-parcel.png)

### 7.2 Best Practice: Sites Separados para ROW

**Organización recomendada:**

```
Drawing: Master-Plan-Subdivision.dwg
├── Site: "ROW-Street-Network"
│   └── Parcel: "Main Street ROW" (1,200 m²)
├── Site: "Residential-Lots"
│   ├── Parcel 1-75 (lotes individuales)
└── Site: "Common-Areas"
    ├── Parcel: "Green Space" (800 m²)
    └── Parcel: "Playground" (300 m²)
```

**Beneficio:** Claridad en documentación y cálculos de áreas.

---

## 8. Optimización de Layout para Máximo Aprovechamiento

### 8.1 Estrategias de Optimización

**Objetivo:** Maximizar número de lotes vendibles cumpliendo normativa.

**Técnicas:**

#### A) Ajustar Orientación de Lotes
- Prueba subdividir paralelo vs perpendicular a la calle principal
- Lotes perpendiculares: Mayor frontage, menos profundidad
- Lotes paralelos: Menor frontage, mayor profundidad

#### B) Lotes de Esquina
- Lotes de esquina pueden tener mayor área (premium lots)
- Usa Swing Line para aprovechar geometría irregular

#### C) Cul-de-sac (Retorno)
- Para calles sin salida, crea lotes radiales alrededor del retorno
- Usa Swing Line desde centro del círculo

#### D) Lotes Irregulares
- En terrenos con geometría irregular, acepta lotes de áreas variables
- Ajusta mínimos para aprovechar zonas difíciles

![Layout Optimization](../imagenes/leccion-2-optimization.png)

### 8.2 Iteración de Diseño

**Workflow profesional:**

1. **Primera iteración:** Subdivisión automática con parámetros base
2. **Análisis:** Cuenta lotes, revisa remanentes
3. **Ajuste:** Modifica frontage/depth mínimos
4. **Segunda iteración:** Re-subdivide con nuevos parámetros
5. **Comparación:** ¿Más lotes? ¿Mejor aprovechamiento?
6. **Selección:** Elige la mejor opción

**Métrica clave:** **Eficiencia de layout**
```
Eficiencia = (Área total de lotes vendibles) / (Área bruta - ROW - áreas comunes) × 100%
```

**Meta profesional:** 75-85% de eficiencia (el resto es ROW, áreas verdes, equipamiento).

---

## Ejercicio Práctico 2

**Objetivo:** Crear subdivisión residencial con dimensionamiento automático de lotes.

**Escenario:** Diseña una subdivisión residencial con los siguientes requisitos:

**Datos del proyecto:**
- Terreno rectangular: 100 m (frontage) × 150 m (profundidad) = 15,000 m²
- Calle principal: 12 m de ancho (ROW)
- Zonificación: Residencial R2

**Requisitos de zonificación R2:**
- Lote mínimo: 250 m²
- Frontage mínimo: 10 m
- Profundidad mínima: 20 m
- Retiro frontal: 3 m

**Tareas:**

1. **Preparar terreno:**
   - Dibuja rectángulo de 100 m × 150 m (usa RECTANGLE command)
   - Conviértelo a parcel (Site: "Terreno-Bruto")

2. **Crear ROW de calle:**
   - Dibuja polyline de calle (12 m de ancho) que atraviesa el terreno
   - Conviértelo a parcel (Site: "ROW-Calles")
   - Esto "resta" el área de la calle del terreno disponible

3. **Subdivide el terreno restante:**
   - Usa **Parcel Layout Tools**
   - Configura sizing parameters:
     - Minimum Frontage: 10 m
     - Minimum Depth: 20 m
     - Minimum Area: 250 m²
     - Frontage Offset: 3 m
   - Aplica **Slide Line - Create** con automatic layout
   - Crea lotes en ambos lados de la calle

4. **Contar lotes:**
   - ¿Cuántos lotes se crearon?
   - ¿Quedó remanente?

5. **Optimizar:**
   - Ajusta parámetros (ej: frontage mínimo 9.5 m)
   - Re-subdivide
   - ¿Lograste más lotes?

6. **Generar documentación:**
   - Crea parcel table con áreas
   - Renombra lotes: Lote 1, Lote 2, etc.
   - Añade segment labels

7. **Calcular eficiencia:**
   - Área total de lotes: _________ m²
   - Área bruta - ROW: _________ m²
   - Eficiencia: _________ %

**Entregable:**
- Drawing (.dwg) con subdivisión completa
- Parcel table mostrando todos los lotes
- Reporte indicando:
  - Número de lotes
  - Área mínima, máxima, y promedio
  - Eficiencia de layout

![Ejercicio 2 - Subdivisión](../imagenes/leccion-2-ejercicio-subdivision.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la ventaja de usar Slide Line con parámetro "Area" en lugar de dibujar lotes manualmente?

**Pregunta 2:** ¿En qué se diferencia Swing Line de Slide Line en términos de geometría de subdivisión?

**Pregunta 3:** Si la zonificación local requiere lotes mínimos de 300 m² con frontage mínimo de 12 m, ¿dónde configuras estos parámetros en Civil 3D?

**Pregunta 4:** ¿Qué es un "remainder parcel" y cuándo aparece en subdivisiones automáticas?

**Pregunta 5:** ¿Por qué es recomendable crear el Right-of-Way (ROW) en un site separado de los lotes residenciales?

**Respuestas:**
1. Slide Line con "Area" calcula automáticamente las dimensiones necesarias para lograr el área exacta, eliminando cálculos manuales y errores.
2. Swing Line rota la línea divisoria alrededor de un punto fijo (pivot), mientras que Slide Line mantiene la línea paralela/perpendicular al frontage.
3. En el Parcel Layout Tools → Parcel Sizing dialog (ícono de regla), configuras Minimum Frontage, Minimum Depth, y Minimum Area.
4. Un remainder parcel es el lote restante que no cumple con los requisitos mínimos después de una subdivisión automática. Aparece cuando el terreno sobrante es insuficiente para un lote completo.
5. Porque permite mejor organización del proyecto, facilita cálculos separados de áreas vendibles vs no vendibles, y mejora claridad en documentación.

---

## Recursos Adicionales

**Documentación oficial:**
- Civil 3D 2026 - Parcel Sizing Guide
- Best Practices for Subdivision Layout

**Videos recomendados:**
- Parcel Sizing Tools Tutorial (YouTube Autodesk)
- Optimizing Residential Subdivisions in Civil 3D

**Normativas de referencia:**
- Reglamentos de zonificación local (consulta municipio)
- Estándares de diseño urbano

---

## Resumen

En esta lección aprendiste:

✅ Utilizar Slide Line y Swing Line con parámetro de área para dimensionamiento preciso
✅ Configurar minimum frontage, depth, y area requirements según zonificación
✅ Crear subdivisiones residenciales automáticas con Parcel Layout Tools
✅ Ajustar lotes con PI Edit y Slide Line Edit después de subdivisión
✅ Generar parcel reports para análisis y documentación
✅ Crear Right-of-Way (ROW) como parcel especial en site separado
✅ Optimizar layout de subdivisión para máximo aprovechamiento del terreno
✅ Calcular eficiencia de layout y densidad residencial

**Próxima Lección:** Right-of-Way y Easements (derechos de vía y servidumbres desde alineamientos)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 90 minutos experimentando con diferentes configuraciones de sizing parameters
