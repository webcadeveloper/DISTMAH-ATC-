# Lección 1: Creación de Parcelas (Parcels)

**Duración:** 60 minutos
**Módulo:** 4 - Parcelas y Grading
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender qué son las parcelas en Civil 3D y su topología
✅ Crear parcel sites para organizar subdivisiones
✅ Crear parcelas desde objetos existentes (polylines, lines)
✅ Utilizar herramientas de parcel layout para diseñar lotes
✅ Entender parcel segments, frontages, y propiedades
✅ Aplicar etiquetado automático de áreas y dimensiones
✅ Generar tablas dinámicas de parcelas
✅ Aplicar best practices para gestión de parcelas en proyectos

---

## Introducción

Las **parcelas (parcels)** en Civil 3D son objetos inteligentes que representan lotes de terreno en subdivisiones, desarrollos comerciales, o cualquier división de propiedad. A diferencia de simples polígonos de AutoCAD, las parcelas de Civil 3D:

- **Mantienen topología** - Los lotes adyacentes comparten segmentos comunes
- **Se actualizan dinámicamente** - Si modificas un límite, los lotes vecinos se ajustan automáticamente
- **Calculan áreas automáticamente** - Sin necesidad de comandos AREA manuales
- **Generan etiquetas inteligentes** - Dimensiones, áreas, identificadores
- **Permiten tablas dinámicas** - Listados de lotes que se actualizan solos

**Aplicación profesional:** Las parcelas son esenciales para proyectos de urbanización residencial, comercial, fraccionamientos, parques industriales, y cualquier desarrollo que requiera división de terrenos con documentación legal precisa.

---

## 1. ¿Qué Son las Parcelas en Civil 3D?

### 1.1 Concepto de Parcel

Una **parcel** (parcela) es un área cerrada delimitada por segmentos que representa una propiedad individual dentro de una subdivisión o desarrollo.

**Componentes de una parcela:**
- **Parcel segments** - Líneas o curvas que forman el perímetro
- **Frontage** - Segmento frontal del lote (generalmente el que da a la calle)
- **Area** - Área calculada automáticamente en unidades del proyecto
- **Perimeter** - Perímetro total del lote

**Ejemplo real:**
En una subdivisión residencial de 50 lotes, cada lote es una parcela con:
- Área objetivo: 300 m² (por ejemplo)
- Frontage: 12 metros (frente a calle)
- Profundidad: 25 metros
- Colindancias laterales y posterior

![Componentes de una parcela](../imagenes/leccion-1-parcel-components.png)

### 1.2 Parcel Sites (Sitios de Parcelas)

Un **parcel site** es un contenedor que agrupa parcelas relacionadas. Todas las parcelas dentro de un site comparten topología.

**¿Por qué usar sites?**
- **Organización** - Agrupa lotes de una subdivisión específica
- **Topología compartida** - Parcelas adyacentes comparten bordes automáticamente
- **Aislamiento** - Parcelas de diferentes sites no interactúan entre sí
- **Gestión eficiente** - Puedes tener múltiples subdivisiones en un mismo drawing

**Ejemplo de organización:**
```
Drawing: Master-Plan.dwg
├── Site 1: "Residencial Las Palmas"
│   ├── Parcel 1 (Lote A-1): 300 m²
│   ├── Parcel 2 (Lote A-2): 315 m²
│   └── Parcel 3 (Lote A-3): 295 m²
├── Site 2: "Comercial Centro"
│   ├── Parcel 1 (Local 1): 150 m²
│   └── Parcel 2 (Local 2): 175 m²
└── Site 3: "Right-of-Way Calles"
    └── Parcel 1 (Calle Principal): 1200 m²
```

![Parcel Sites Organization](../imagenes/leccion-1-parcel-sites.png)

---

## 2. Crear Parcel Sites

### 2.1 Crear Nuevo Site

**Método 1: Desde Toolspace**
1. Abre Toolspace → **Prospector** tab
2. Expande colección **Sites**
3. Click derecho en **Sites** → **New...**
4. Nombre: `Subdivision-Residencial-Norte`
5. OK

**Método 2: Automáticamente al crear primera parcela**
- Civil 3D crea un site automáticamente si no existe ninguno

![Crear Parcel Site](../imagenes/leccion-1-crear-site.png)

### 2.2 Propiedades del Site

Click derecho en el site → **Properties**

**Configuración disponible:**
- **Name** - Nombre descriptivo del sitio
- **Description** - Descripción del desarrollo
- **Number of parcels** - Cantidad actual (read-only)
- **Total area** - Área total de todas las parcelas

---

## 3. Crear Parcelas Desde Objetos Existentes

### 3.1 Convertir Polylines a Parcelas

El método más común es convertir polilíneas cerradas existentes en parcelas.

**Prerequisito:** Debes tener polylines cerradas que representen tus lotes.

**Pasos:**
1. **Ribbon:** Home tab → Create Design panel → **Parcel** dropdown → **Create From Objects**

2. **Comando:** `CreateParcelFromObjects`

3. **Ventana "Create Parcels - From objects":**
   - **Site:** Selecciona el site existente o crea uno nuevo
   - **Parcel style:** `Property` (estilo predeterminado)
   - **Area label style:** `Name Area & Perimeter`
   - **☑ Erase existing entities** - Marca si quieres eliminar las polylines originales
   - **☑ Automatically add segment labels** - Etiquetas en cada lado

4. **Select lines, arcs, or polylines to convert:**
   - Selecciona las polylines cerradas que representan tus lotes
   - Enter

5. Civil 3D convierte cada polyline cerrada en una parcela inteligente

![Create Parcels From Objects](../imagenes/leccion-1-from-objects.png)

**Resultado:**
- Las polylines se convierten en parcels
- Aparecen en Toolspace → Sites → [tu site] → Parcels
- Etiquetas de área aparecen automáticamente
- Dimensiones en cada segmento (opcional)

### 3.2 Verificar Parcelas Creadas

**Toolspace → Prospector:**
```
Sites
└── Subdivision-Residencial-Norte
    └── Parcels
        ├── Parcel 1: 305.42 m²
        ├── Parcel 2: 298.67 m²
        └── Parcel 3: 312.05 m²
```

**Propiedades de parcela:**
- Click derecho en parcel → **Properties**
- Pestaña **Information:** Nombre, área, perímetro
- Pestaña **Composition:** Segmentos que forman la parcela

---

## 4. Crear Parcelas con Parcel Layout Tools

Además de convertir objetos existentes, puedes **dibujar parcelas directamente** con herramientas de layout.

### 4.1 Parcel Creation Tools

**Ribbon:** Home tab → Create Design panel → **Parcel** dropdown

**Herramientas disponibles:**

#### A) **Slide Line - Create**
Crea parcelas dividiendo un área con una línea deslizante.

**Uso:** Subdividir un lote grande en varios lotes más pequeños.

**Pasos:**
1. Home → Parcel → **Slide Line - Create**
2. Especifica punto inicial de la línea divisoria
3. Especifica punto final
4. Civil 3D crea dos parcelas separadas

![Slide Line Create](../imagenes/leccion-1-slide-line.png)

#### B) **Swing Line - Create**
Similar a Slide Line, pero rota alrededor de un punto.

**Uso:** Dividir lote con línea que gira desde un vértice.

#### C) **Free Form Create**
Dibujar parcela libremente con clicks sucesivos.

**Pasos:**
1. Home → Parcel → **Free Form Create**
2. Click en cada vértice de la parcela
3. Cierra con **C** (Close) o click en punto inicial
4. Enter

**Tip:** Usa Object Snaps (Endpoint, Intersection) para precisión.

#### D) **From Corridor**
Crea parcelas automáticamente desde un corridor de carretera.

**Uso avanzado:** Módulos posteriores.

![Parcel Creation Tools](../imagenes/leccion-1-creation-tools.png)

---

## 5. Parcel Segments y Frontages

### 5.1 Parcel Segments

Cada **parcel segment** es un lado del lote (línea o curva).

**Tipos de segments:**
- **Frontage** - Lado frontal (generalmente el que da a la calle)
- **Side** - Lados laterales (colindancias)
- **Rear** - Lado posterior

**Editar segments:**
1. Click en el borde de la parcela (aparece un grip)
2. Arrastra para modificar
3. Parcelas adyacentes se ajustan automáticamente (topología)

![Parcel Segments](../imagenes/leccion-1-segments.png)

### 5.2 Definir Frontage

El **frontage** es crítico para:
- Cálculos de dimensionamiento (frontage mínimo requerido)
- Orientación del lote
- Acceso vehicular

**Cambiar frontage:**
1. Click derecho en parcela → **Properties**
2. Pestaña **Composition**
3. Columna **Frontage:** Marca el segmento deseado como **☑ True**
4. OK

**Visual:** El frontage se muestra con estilo diferente (generalmente línea más gruesa o color distinto según el parcel style).

---

## 6. Etiquetado Automático de Parcelas

### 6.1 Area Labels

Civil 3D crea etiquetas de área automáticamente.

**Componentes típicos de label:**
- **Parcel Name:** "Parcel : 1" o "Lote A-1"
- **Area:** "305.42 SQ.M" o "300 m²"
- **Perimeter:** "72.5 m"

**Estilo de etiqueta:**
- Define en: Toolspace → Settings → Parcel → Label Styles → Area

**Editar etiqueta:**
1. Click derecho en etiqueta → **Edit Label Style...**
2. Modifica texto, tamaño de fuente, formato de área
3. OK

![Area Labels](../imagenes/leccion-1-area-labels.png)

### 6.2 Segment Labels (Dimensiones)

Etiquetas en cada lado del lote mostrando longitud y rumbo.

**Añadir segment labels:**
1. **Ribbon:** Annotate tab → Labels & Tables panel → **Add Labels** dropdown → **Parcel** → **Add Parcel Labels**

2. **Ventana "Add Labels":**
   - **Label type:** Single Segment
   - **Line label style:** Bearing over Distance
   - **Curve label style:** Delta over Length & Radius
   - Add

3. Click en cada segment que quieres etiquetar

**Etiqueta típica:**
```
N 15°30'45" E
25.00 m
```

![Segment Labels](../imagenes/leccion-1-segment-labels.png)

---

## 7. Tablas Dinámicas de Parcelas

Las **parcel tables** son tablas que listan todas las parcelas con áreas, dimensiones, y otros datos. Son **dinámicas**: si modificas una parcela, la tabla se actualiza automáticamente.

### 7.1 Crear Parcel Table

**Pasos:**
1. **Ribbon:** Annotate tab → Labels & Tables panel → **Add Tables** dropdown → **Add Parcel** → **Add Area**

2. **Ventana "Parcel Area Table Creation":**
   - **Table style:** `Standard`
   - **Select by label or style:** All parcels in site
   - **Site:** Selecciona tu site
   - OK

3. **Click para colocar la tabla** en el drawing (esquina superior)

**Resultado:** Tabla con columnas:
| Parcel Number | Area (m²) | Perimeter (m) |
|---------------|-----------|---------------|
| 1 | 305.42 | 72.50 |
| 2 | 298.67 | 70.25 |
| 3 | 312.05 | 73.80 |

![Parcel Table](../imagenes/leccion-1-parcel-table.png)

### 7.2 Actualización Dinámica

**Prueba:**
1. Edita una parcela (arrastra un segment)
2. El área cambia
3. **La tabla se actualiza automáticamente** - Sin necesidad de regenerar

**Uso profesional:** En planos de lotificación para autoridades municipales, estas tablas son documentación oficial.

---

## 8. Best Practices para Gestión de Parcelas

### 8.1 Naming Standards (Estándares de Nomenclatura)

**Renombrar parcelas con nombres descriptivos:**
1. Toolspace → Prospector → Sites → [Site] → Parcels
2. Click derecho en parcela → **Properties**
3. **Name:** Cambia de "Parcel : 1" a "Lote A-1"
4. OK

**Convención recomendada:**
- Residencial: `Lote A-1`, `Lote A-2`, `Lote B-1`
- Comercial: `Local 1`, `Local 2`
- Industrial: `Nave I-1`, `Nave I-2`

### 8.2 Parcel Styles por Uso

Crea diferentes **parcel styles** para diferenciar visualmente:

- **Residencial:** Color verde claro
- **Comercial:** Color azul claro
- **ROW (Right-of-Way):** Color gris con hatch
- **Áreas verdes:** Color verde oscuro

**Crear style:**
1. Toolspace → Settings → Parcel → **Parcel Styles**
2. Click derecho → **New...**
3. Configura Display tab (colores, linetypes, hatches)
4. OK

### 8.3 Organización con Sites

**Recomendación:**
- Un site por subdivisión completa
- Site separado para ROW (derechos de vía)
- Site separado para áreas comunes

**Evita:**
- Mezclar parcelas residenciales y comerciales en mismo site (a menos que compartan topología)

### 8.4 Precisión de Áreas

**Verificación:**
- Compara área de parcela con `AREA` command de AutoCAD
- Deberían coincidir exactamente
- Si difieren, revisa que la parcela esté cerrada correctamente

**Tolerancia:**
- Configura en: Drawing Settings → Object Layers → Parcel → Minimum parcel area

---

## Ejercicio Práctico 1

**Objetivo:** Crear parcelas para una subdivisión residencial básica.

**Escenario:** Tienes 5 polylines cerradas que representan lotes de una subdivisión llamada "Residencial Valle Verde".

**Tareas:**

1. **Crear Parcel Site:**
   - Nombre: `Residencial-Valle-Verde`
   - Description: "Subdivisión residencial de 5 lotes"

2. **Crear archivo de prueba:**
   - Dibuja 5 rectangulos (polylines cerradas) de aproximadamente 300 m² cada uno
   - Dimensiones sugeridas: 12m x 25m = 300 m²
   - Alinéalos lado a lado simulando una calle

3. **Convertir a Parcelas:**
   - Usa **Create From Objects**
   - Convierte las 5 polylines a parcels
   - Marca **☑ Erase existing entities**
   - Marca **☑ Add segment labels**

4. **Renombrar Parcelas:**
   - Toolspace → Parcels
   - Renombra a: `Lote 1`, `Lote 2`, `Lote 3`, `Lote 4`, `Lote 5`

5. **Añadir Area Labels:**
   - Verifica que cada lote tenga etiqueta de área visible
   - Estilo: `Name Area & Perimeter`

6. **Crear Parcel Table:**
   - Annotate → Add Tables → Parcel Area Table
   - Coloca la tabla en esquina superior del drawing

7. **Modificar un Lote:**
   - Edita el Lote 3 (arrastra un vértice)
   - Observa cómo la tabla se actualiza automáticamente

**Entregable:**
- Drawing (.dwg) con 5 parcelas creadas
- Tabla de áreas visible
- Screenshot mostrando Toolspace con las 5 parcels listadas

![Ejercicio 1 - Subdivisión](../imagenes/leccion-1-ejercicio-subdivision.png)

---

## Evaluación

**Pregunta 1:** ¿Cuál es la principal diferencia entre una polyline cerrada de AutoCAD y una parcel de Civil 3D?

**Pregunta 2:** ¿Qué es un parcel site y por qué es útil en proyectos con múltiples subdivisiones?

**Pregunta 3:** ¿Qué comando se utiliza para convertir polylines existentes en parcelas?

**Pregunta 4:** ¿Qué es el "frontage" de una parcela y por qué es importante?

**Pregunta 5:** Si modificas el área de una parcela editando sus segmentos, ¿qué sucede con la parcel table que la lista?

**Respuestas:**
1. Una parcel mantiene topología con parcelas adyacentes, calcula área automáticamente, y se actualiza dinámicamente. Una polyline es solo geometría sin inteligencia.
2. Un parcel site es un contenedor que agrupa parcelas relacionadas y mantiene topología compartida entre ellas. Permite organizar múltiples subdivisiones en un mismo drawing.
3. `CreateParcelFromObjects` (o desde Ribbon: Home → Parcel → Create From Objects)
4. El frontage es el segmento frontal del lote, generalmente el que da a la calle. Es importante para cálculos de dimensionamiento mínimo y orientación.
5. La tabla se actualiza automáticamente porque es dinámica y está vinculada a las parcelas del site.

---

## Recursos Adicionales

**Documentación oficial:**
- Autodesk Civil 3D 2026 - Parcels User Guide
- Civil 3D Help - "Working with Parcels"

**Videos recomendados:**
- Civil 3D Parcels Overview (YouTube Autodesk oficial)
- Creating Parcels from Polylines Tutorial

**Archivos de práctica:**
- `Parcel-Subdivision-Template.dwg` (incluye parcel styles predefinidos)

---

## Resumen

En esta lección aprendiste:

✅ El concepto de parcelas como objetos inteligentes con topología
✅ Crear y gestionar parcel sites para organizar subdivisiones
✅ Convertir objetos existentes (polylines) en parcelas
✅ Utilizar herramientas de parcel layout (Slide Line, Free Form)
✅ Definir y gestionar parcel segments y frontages
✅ Aplicar etiquetado automático de áreas y dimensiones
✅ Generar tablas dinámicas de parcelas para documentación
✅ Best practices para nomenclatura y organización de parcelas

**Próxima Lección:** Parcel Sizing y Layout de Subdivisión (dimensionamiento automático de lotes)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos creando subdivisiones de diferentes tamaños
