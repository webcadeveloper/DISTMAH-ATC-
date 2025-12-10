# Lección 4: Feature Lines para Diseño de Grading

**Duración:** 60 minutos
**Módulo:** 4 - Parcelas y Grading
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué son las feature lines y su rol en grading
✅ Crear feature lines desde objetos 2D (polylines, lines, arcs)
✅ Asignar elevaciones a puntos individuales de feature lines
✅ Utilizar elevation editor para edición visual de elevaciones
✅ Aplicar quick elevation edit para cambios rápidos
✅ Configurar feature line curve settings (curvas vs PI)
✅ Crear feature lines extrayendo elevaciones desde superficies
✅ Aplicar weeding para simplificación de feature lines complejas

---

## Introducción

Las **feature lines** son objetos 3D fundamentales en Civil 3D que combinan geometría horizontal (X, Y) con elevaciones (Z) en cada vértice. Son la herramienta principal para diseño de **grading** (nivelación de terrenos).

**Diferencia con polylines 3D:**
- **Polyline 3D de AutoCAD:** Solo geometría 3D, sin inteligencia
- **Feature line de Civil 3D:** Objeto inteligente que:
  - Mantiene elevaciones en cada PI (Point of Intersection)
  - Puede tener pendientes asignadas entre puntos
  - Se integra con grading tools
  - Puede generar superficies automáticamente
  - Permite edición dinámica de elevaciones

**Aplicaciones profesionales:**
- Bordes de plataformas de construcción
- Bordes de estacionamientos
- Líneas de edificios (building pads)
- Canales de drenaje
- Caminos peatonales
- Cualquier elemento lineal con control de elevación

**Ejemplo:** Para diseñar una plataforma rectangular con elevación de 100 metros, creas un feature line rectangular y asignas elevación 100 a todos sus vértices. Luego usas grading tools para crear taludes desde ese feature line hasta el terreno natural.

![Feature Lines Overview](../imagenes/leccion-4-feature-lines-overview.png)

---

## 1. ¿Qué Son las Feature Lines?

### 1.1 Componentes de una Feature Line

Una feature line consta de:

**Elementos geométricos:**
- **PI (Points of Intersection)** - Vértices con coordenadas X, Y, Z
- **Segments** - Líneas o curvas entre PIs
- **Elevation points** - Cada PI tiene elevación asignada
- **Grades** - Pendientes entre puntos consecutivos

**Propiedades:**
- **Name** - Nombre descriptivo (ej: "Building-Pad-North-Edge")
- **Style** - Estilo de visualización (color, linetype, marcadores en PIs)
- **Site** - Puede pertenecer a un site (opcional)
- **Total length** - Longitud horizontal total
- **Grade information** - Pendientes entre PIs

![Feature Line Components](../imagenes/leccion-4-components.png)

### 1.2 Feature Lines vs Otros Objetos 3D

| Objeto | Elevaciones | Grading | Superficies | Uso |
|--------|-------------|---------|-------------|-----|
| **AutoCAD Line** | No (solo 2D) | No | No | Dibujo básico |
| **AutoCAD 3D Polyline** | Sí (3D) | No | Manual | Modelado simple |
| **Civil 3D Feature Line** | Sí (controlables) | **Sí** | **Automático** | **Grading profesional** |
| **Civil 3D Alignment** | No (solo horizontal) | No | Via profiles | Diseño vial |

**Ventaja clave:** Feature lines son el input principal para **grading tools** (próxima lección).

---

## 2. Crear Feature Lines desde Objetos 2D

### 2.1 Convertir Polyline a Feature Line

El método más común es convertir objetos 2D existentes (polylines, lines) a feature lines.

**Prerequisito:** Dibuja una polyline 2D que represente el borde de tu elemento (ej: borde de plataforma).

**Pasos:**

1. **Ribbon:** Home tab → Create Design panel → **Feature Line** dropdown → **Create Feature Line from Objects**

2. **Comando:** `FeatureLineFromObject`

3. **Ventana "Create Feature Lines":**

   **Options:**
   - **Name:** `Platform-Edge-North` (nombre descriptivo)
   - **Site:** Selecciona site existente o `<None>` (sin site)
   - **Style:** `Basic Feature Line` (estilo predeterminado)
   - **Layer:** `C-TOPO-FEAT` (capa de feature lines)
   - **☑ Erase existing entities** - Marca si quieres eliminar polyline original
   - **☑ Assign elevations** - **IMPORTANTE: Marca esta opción**

   **Elevation options (cuando "Assign elevations" está marcado):**
   - ○ **Elevation from surface:** Extrae elevaciones de superficie existente
   - ○ **Elevation:** Asigna elevación constante a toda la feature line
   - ○ **Grade:** Asigna pendiente constante desde punto inicial

4. **Select objects:** Selecciona la polyline (o múltiples)

5. **Press Enter**

**Resultado:** Feature line creada con elevaciones asignadas.

![Create Feature Line](../imagenes/leccion-4-create-from-object.png)

### 2.2 Opciones de Asignación de Elevación

**Opción A: Elevación Constante**
- Selecciona: ○ **Elevation**
- **Default elevation:** 100.00 (todos los PIs tendrán elevación 100 m)
- **Uso:** Plataformas horizontales, bordes de edificios

**Opción B: Desde Superficie**
- Selecciona: ○ **Elevation from surface**
- **Surface name:** Selecciona superficie existente (ej: "EG" - existing ground)
- Civil 3D "drapes" la feature line sobre la superficie, extrayendo elevación en cada PI
- **Uso:** Crear feature line que sigue terreno natural

**Opción C: Con Pendiente**
- Selecciona: ○ **Grade**
- **Start elevation:** 100.00 (elevación del primer PI)
- **Grade:** 2% (pendiente ascendente) o -2% (descendente)
- Civil 3D calcula elevaciones de PIs subsecuentes basándose en distancias horizontales
- **Uso:** Canales de drenaje, caminos con pendiente uniforme

![Elevation Assignment](../imagenes/leccion-4-elevation-options.png)

---

## 3. Asignar Elevaciones a Feature Lines

### 3.1 Elevation Editor (Editor Visual)

Después de crear una feature line, puedes editar elevaciones de cada PI visualmente.

**Activar Elevation Editor:**

1. Selecciona la feature line

2. **Ribbon:** aparece contextual tab **Feature Line**

3. **Edit Elevations panel → Elevation Editor**

4. **Ventana "Panorama - Feature Line Elevations"** se abre (tabla)

**Tabla muestra:**
| Station | Northing | Easting | Elevation | Length | Grade In | Grade Out |
|---------|----------|---------|-----------|--------|----------|-----------|
| 0+000.00 | 1000.00 | 2000.00 | 100.000 | - | - | 2.00% |
| 0+025.00 | 1025.00 | 2000.00 | 100.500 | 25.00 | 2.00% | 0.00% |
| 0+050.00 | 1050.00 | 2000.00 | 100.500 | 25.00 | 0.00% | 0.00% |

**Editar elevaciones directamente:**
- Click en celda **Elevation**
- Escribe nueva elevación: **101.250**
- Enter
- Feature line se actualiza en el drawing

**Columnas importantes:**
- **Station:** Distancia acumulada desde inicio (0+000)
- **Elevation:** Elevación del PI
- **Grade In:** Pendiente entrante al PI
- **Grade Out:** Pendiente saliente del PI

![Elevation Editor](../imagenes/leccion-4-elevation-editor.png)

### 3.2 Editar Elevaciones Gráficamente

**Alternative method: Grips en 3D**

1. Cambia visual style a **3D** para ver elevaciones:
   - View tab → Visual Styles → **Realistic** o **Conceptual**

2. Selecciona feature line

3. **Grips triangulares** aparecen en cada PI

4. **Arrastra grip verticalmente** (eje Z) para cambiar elevación del PI

5. **Panorama** (si está abierto) se actualiza en tiempo real

**Tip:** Usa **F5 (Isoplane toggle)** o **ViewCube** para rotar vista 3D y ver elevaciones claramente.

---

## 4. Quick Elevation Edit

### 4.1 Herramientas de Edición Rápida

Civil 3D ofrece herramientas para cambios rápidos de elevaciones en feature lines.

**Ribbon:** Feature Line tab → Edit Elevations panel

**Herramientas disponibles:**

#### A) **Raise/Lower**
Sube o baja toda la feature line por un incremento.

**Uso:**
1. Selecciona feature line
2. Feature Line tab → **Raise/Lower**
3. **Enter elevation change:** 2.5 (para subir 2.5 metros)
4. Enter
5. Todas las elevaciones aumentan 2.5 m

**Ejemplo:** Feature line con elevaciones 100, 100.5, 101 se convierte en 102.5, 103, 103.5

#### B) **Elevation from Surface**
Asigna elevaciones extrayéndolas de una superficie.

**Uso:**
1. Selecciona feature line
2. Feature Line tab → **Elevation from Surface**
3. **Select surface:** Elige superficie (ej: "Proposed-Surface")
4. Enter
5. Cada PI toma elevación de la superficie en su posición X, Y

**Aplicación:** Actualizar feature line para que siga una superficie propuesta modificada.

#### C) **Insert Elevation Point**
Añade PI adicional con elevación específica.

**Uso:**
1. Selecciona feature line
2. Feature Line tab → **Insert Elevation Point**
3. **Specify point:** Click en ubicación del nuevo PI (sobre la feature line)
4. **Specify elevation:** 102.75
5. Enter
6. Nuevo PI insertado con elevación 102.75

![Quick Edit Tools](../imagenes/leccion-4-quick-edit.png)

### 4.2 Set Grade/Slope Between Points

**Establecer pendiente específica entre dos PIs:**

1. Abre **Elevation Editor** (Panorama)

2. Identifica los dos PIs entre los que quieres definir pendiente

3. Click derecho en el **segundo PI** → **Grade/Slope Between Points**

4. **Ventana "Grade/Slope Between Points":**
   - **Grade:** 3.5% (pendiente deseada)
   - **Slope:** (o especifica slope como relación: 3:1)
   - Apply

5. Civil 3D ajusta la elevación del segundo PI para lograr exactamente 3.5% de pendiente

**Uso profesional:** Canales de drenaje requieren pendientes mínimas (ej: 0.5%) para flujo adecuado.

![Set Grade](../imagenes/leccion-4-set-grade.png)

---

## 5. Feature Line Curve Settings

### 5.1 Curves vs PIs en Feature Lines

Cuando conviertes una polyline con **arcos** a feature line, Civil 3D puede:
- **Mantener curvas** - Curva como arco verdadero
- **Convertir a PIs** - Aproximar curva con múltiples segmentos rectos (densificación)

**Configuración:**

1. **Durante creación:**
   - Ventana "Create Feature Lines" → **Curve and Spiral Settings...**

2. **Después de creación:**
   - Properties de feature line → **Curve and Spiral Settings**

**Opciones:**

**Curve Tessellation:**
- **Mid-ordinate distance:** 0.10 m
  - Distancia máxima entre el arco verdadero y la aproximación con segmentos rectos
  - Valor menor = más PIs = más precisión = más pesado

**Recomendación:**
- Para grading general: 0.50 m (balance entre precisión y performance)
- Para curvas críticas: 0.10 m (máxima precisión)

![Curve Settings](../imagenes/leccion-4-curve-settings.png)

### 5.2 Impacto en Grading

**Feature line con curvas:**
- Cuando apliques grading, los taludes siguen las curvas suavemente

**Feature line con PIs (curva aproximada):**
- Grading puede verse "facetado" si hay pocos PIs
- Solución: Reduce mid-ordinate distance para más PIs

---

## 6. Crear Feature Lines desde Superficies

### 6.1 Extract Feature Lines from Surface

Puedes extraer feature lines directamente desde elementos de una superficie.

**Aplicación:** Extraer curva de nivel específica como feature line.

**Pasos:**

1. **Ribbon:** Home → Create Design → Feature Line → **Create Feature Line from Stepped Offset** (u otra herramienta de extracción)

**Método alternativo (más común): Sketch Feature Line ON Surface**

1. **Home → Feature Line → Create Feature Line**

2. **Ventana "Create Feature Lines":** Configura nombre, site, style

3. **Specify start point:** Click en superficie

4. **Ribbon contextual:** Feature Line Creation toolbar aparece

5. **Click en "Elevation from Surface" icon**

6. **Select surface:** Elige superficie

7. **Dibuja** la feature line con clicks sucesivos

8. **Elevación automática:** Cada PI toma elevación de la superficie

9. **Enter** para finalizar

**Resultado:** Feature line que sigue exactamente el terreno en cada PI.

![From Surface](../imagenes/leccion-4-from-surface.png)

### 6.2 Proyectar Objetos a Superficie

**Comando:** `ProjectObjectsToSurface` (disponible vía Express Tools)

**Uso:** Proyectar líneas 2D sobre superficie para obtener feature lines 3D.

---

## 7. Weeding y Simplificación

### 7.1 ¿Qué es Weeding?

**Weeding** es el proceso de **eliminar PIs redundantes** en una feature line, simplificándola sin perder precisión significativa.

**Problema:** Al extraer feature line desde superficie, puedes obtener cientos de PIs (uno por cada cambio mínimo de elevación).

**Solución:** Weeding reduce PIs manteniendo solo los necesarios.

### 7.2 Aplicar Weeding

**Pasos:**

1. Selecciona feature line con muchos PIs

2. **Ribbon:** Feature Line tab → Modify panel → **Weed Feature Line**

3. **Ventana "Weed Feature Line":**

   **Weeding options:**
   - **Weed distance:** 5.00 m
     - Elimina PIs que estén más cerca que esta distancia
   - **Weed grade change:** 2.0%
     - Elimina PIs donde el cambio de pendiente es menor a este valor

   **Ejemplo:**
   - Feature line original: 500 PIs
   - Después de weeding (5 m, 2%): 75 PIs
   - Reducción del 85% manteniendo forma general

4. **OK**

**Resultado:** Feature line simplificada, más ligera, más fácil de editar.

![Weeding](../imagenes/leccion-4-weeding.png)

### 7.3 Cuándo Usar Weeding

**Recomendado:**
- Feature lines extraídas de superficies complejas
- Feature lines con cientos de PIs innecesarios
- Antes de aplicar grading (performance)

**No recomendado:**
- Feature lines diseñadas manualmente con pocos PIs críticos
- Cuando necesitas precisión exacta en cada PI

---

## 8. Best Practices para Feature Lines

### 8.1 Naming Standards

**Convención recomendada:**
```
[Proyecto]-[Elemento]-[Ubicación]-[Número]

Ejemplos:
- Platform-Building-A-North-Edge
- Parking-Curb-West-01
- Drainage-Canal-Main-CL (CL = centerline)
- Road-Edge-Pavement-South
```

**Beneficio:** Fácil identificación en Prospector y durante selección.

### 8.2 Organización con Sites

**Opcional:** Asignar feature lines a sites para organización.

**Ejemplo:**
```
Site: "Grading-Features"
├── Building-Pad-East
├── Building-Pad-West
├── Parking-Edge-North
└── Drainage-Swale-CL
```

**Acceso:** Toolspace → Prospector → Sites → [Site] → Feature Lines

### 8.3 Estilos de Feature Lines

Crea **styles** diferentes para distinguir tipos de feature lines visualmente:

**Estilos sugeridos:**
- **Building Edges:** Rojo, línea gruesa
- **Parking Curbs:** Blanco, línea media
- **Drainage Features:** Azul, línea punteada
- **Temporary Grading:** Gris, línea delgada

**Configurar style:**
1. Toolspace → Settings → Feature Line → **Feature Line Styles**
2. Click derecho → **New...**
3. **Display tab:** Configura color, linetype, marcadores en PIs
4. OK

### 8.4 Verificación de Elevaciones

**Antes de usar feature line para grading:**

1. **Abre Elevation Editor** (Panorama)
2. **Revisa elevaciones** - ¿Son lógicas?
3. **Verifica pendientes** - ¿Cumplen requisitos? (ej: drenaje mínimo 0.5%)
4. **Vista 3D** - Activa visual style Realistic y observa feature line desde ángulo

**Errores comunes:**
- PIs con elevación 0.00 (no asignada)
- Pendientes invertidas (drenaje en dirección equivocada)
- Elevaciones inconsistentes

---

## Ejercicio Práctico 4

**Objetivo:** Crear y editar feature lines para diseño de plataforma de edificio.

**Escenario:** Diseñas una plataforma rectangular para un edificio en terreno con pendiente.

**Especificaciones:**
- Plataforma: 40 m × 30 m (rectangular)
- Elevación de plataforma: 105.00 m (horizontal, sin pendiente)
- Terreno natural: Superficie con elevaciones entre 100 m y 108 m

**Tareas:**

1. **Crear superficie de terreno natural (simplificada):**
   - Crea 4 puntos COGO:
     - Punto 1: (0, 0, 100)
     - Punto 2: (100, 0, 102)
     - Punto 3: (100, 100, 108)
     - Punto 4: (0, 100, 106)
   - Home → Surfaces → Create Surface
   - Nombre: "EG-Existing-Ground"
   - Añade los 4 puntos a la superficie (boundaries)

2. **Dibujar borde de plataforma:**
   - Command: `RECTANGLE`
   - Punto inicial: (30, 35)
   - Esquina opuesta: @40,30 (crea rectángulo de 40×30)
   - Resultado: Polyline rectangular centrada en terreno

3. **Convertir a Feature Line:**
   - Home → Feature Line → Create from Objects
   - Name: `Building-Pad-Edge`
   - ☑ Assign elevations
   - ○ Elevation: **105.00**
   - Selecciona el rectángulo
   - Enter

4. **Verificar en 3D:**
   - View → Visual Styles → **Realistic**
   - ViewCube → Arrasta para vista isométrica
   - Observa: Feature line horizontal a 105 m sobre superficie inclinada

5. **Editar elevación de una esquina:**
   - Selecciona feature line
   - Feature Line tab → **Elevation Editor**
   - En Panorama, identifica primer PI (esquina suroeste)
   - Cambia elevación de 105.00 a **104.50**
   - Observa cambio en drawing (plataforma ya no es perfectamente horizontal)

6. **Insertar PI adicional:**
   - Feature Line tab → **Insert Elevation Point**
   - Click en mitad del lado norte de la plataforma
   - Elevation: **105.50**
   - Enter
   - Observa nuevo PI con elevación más alta (crea "joroba")

7. **Restablecer plataforma horizontal:**
   - Elevation Editor → Cambia todas las elevaciones de vuelta a **105.00**
   - Plataforma completamente horizontal nuevamente

8. **Crear segunda feature line desde superficie:**
   - Home → Feature Line → Create Feature Line
   - Name: `Terrain-Reference-Line`
   - Dibuja línea desde (10, 50) hasta (90, 50) (atraviesa el terreno)
   - Feature Line toolbar → Click **Elevation from Surface**
   - Select surface: EG-Existing-Ground
   - Enter
   - Feature line toma elevaciones del terreno (varia de ~100 a ~107)

9. **Aplicar Weeding (si necesario):**
   - Selecciona Terrain-Reference-Line
   - Feature Line tab → **Weed**
   - Weed distance: 10 m
   - OK

**Entregable:**
- Drawing con:
  - Superficie EG
  - Feature line de plataforma (horizontal a 105 m)
  - Feature line de referencia (siguiendo terreno)
- Screenshot en vista 3D mostrando ambas feature lines
- Panorama abierto mostrando elevaciones de Building-Pad-Edge

![Ejercicio 4 - Feature Lines](../imagenes/leccion-4-ejercicio-platform.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la principal diferencia entre una polyline 3D de AutoCAD y una feature line de Civil 3D?

**Pregunta 2:** ¿Cuáles son las tres opciones principales para asignar elevaciones al crear una feature line desde un objeto 2D?

**Pregunta 3:** ¿Qué herramienta usas para editar elevaciones de PIs individuales en una tabla interactiva?

**Pregunta 4:** ¿Qué hace el comando "Raise/Lower" en feature lines?

**Pregunta 5:** ¿Qué es "weeding" y cuándo se recomienda aplicarlo a feature lines?

**Respuestas:**
1. Una feature line es un objeto inteligente de Civil 3D con elevaciones controlables en cada PI, integración con grading tools, y capacidad de generar superficies. Una polyline 3D es solo geometría 3D sin inteligencia adicional.
2. (1) Elevación constante para toda la feature line, (2) Elevación desde superficie existente, (3) Pendiente/grade desde punto inicial.
3. Elevation Editor (abre ventana Panorama con tabla editable de stations, elevations, grades).
4. Sube o baja toda la feature line uniformemente por un incremento especificado (ej: +2.5 metros).
5. Weeding elimina PIs redundantes para simplificar la feature line sin perder precisión significativa. Se recomienda en feature lines extraídas de superficies con cientos de PIs innecesarios.

---

## Recursos Adicionales

**Documentación oficial:**
- Civil 3D 2026 - Feature Lines User Guide
- Grading with Feature Lines Tutorial

**Videos recomendados:**
- Creating and Editing Feature Lines (YouTube Autodesk)
- Feature Line Elevation Editor Deep Dive

**Atajos útiles:**
- **Ctrl+1:** Properties (para editar feature line properties)
- **F5:** Cambiar vista isométrica (para ver elevaciones)

---

## Resumen

En esta lección aprendiste:

✅ El concepto de feature lines como objetos 3D con elevaciones controlables
✅ Crear feature lines desde objetos 2D (polylines) con asignación de elevaciones
✅ Editar elevaciones usando Elevation Editor (Panorama) y grips 3D
✅ Aplicar quick elevation edit (Raise/Lower, Elevation from Surface)
✅ Configurar feature line curve settings para control de densificación
✅ Extraer feature lines desde superficies existentes
✅ Simplificar feature lines complejas usando weeding
✅ Best practices para nomenclatura, organización, y verificación

**Próxima Lección:** Grading Tools (aplicar taludes, pendientes, y crear superficies de grading desde feature lines)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 60 minutos creando feature lines para diferentes elementos (canales, caminos, bordes de estacionamiento)
