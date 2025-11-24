# Lección 3: Right-of-Way y Easements

**Duración:** 60 minutos
**Módulo:** 4 - Parcelas y Grading
**Curso:** Autodesk Civil 3D 2026 - Básico

---

## Objetivos de Aprendizaje

Al completar esta lección, serás capaz de:

✅ Comprender el concepto legal de Right-of-Way (derecho de vía)
✅ Crear ROW automáticamente desde alineamientos de calles
✅ Aplicar widening y offset para ROW variable
✅ Diseñar easements (servidumbres) de utilidades y drenaje
✅ Crear corner filets para intersecciones de calles
✅ Etiquetar ROW y easements con información legal
✅ Generar documentación legal de parcelas con ROW y servidumbres
✅ Integrar ROW en workflow de subdivisión completo

---

## Introducción

El **Right-of-Way (ROW)** o derecho de vía es la franja de terreno dedicada a uso público, principalmente para calles, pero también para utilidades (agua, alcantarillado, electricidad, telecomunicaciones). En proyectos de subdivisión, el ROW:

- **Reduce el área vendible** - No puedes construir viviendas en ROW
- **Es transferido al municipio** - Generalmente se dona a la autoridad local
- **Debe tener ancho suficiente** - Para calzada, banquetas, y utilidades subterráneas

Los **easements (servidumbres)** son derechos de paso para propósitos específicos (ej: tubería de agua que cruza un lote privado). Aunque el lote pertenece al propietario, existe una restricción para construcción en la zona de easement.

**Aplicación profesional:** Todo plano de lotificación debe indicar claramente ROW y easements con dimensiones precisas y anotaciones legales para aprobación municipal.

---

## 1. Concepto de Right-of-Way (Derecho de Vía)

### 1.1 Definición Legal

**Right-of-Way (ROW):** Franja de terreno de propiedad pública (o con derechos públicos) destinada a:
- Calles y vialidades
- Banquetas (sidewalks)
- Utilidades públicas (agua, drenaje, electricidad)
- Señalización vial
- Iluminación pública

**Elementos típicos de ROW urbano:**

```
|<------------ ROW Width (ej: 15 metros) ------------>|
|                                                      |
| 2m  |      9m Calzada      |  2m  |  2m Banqueta    |
|Banq.|  (Carriles de tráfico) |Banq.|                |
```

**Ejemplo de anchos de ROW según clasificación vial:**
- Calle local residencial: 12-15 metros
- Calle colectora: 18-20 metros
- Avenida principal: 25-30 metros
- Autopista: 40-60 metros (o más)

![Right-of-Way Diagram](../imagenes/leccion-3-row-diagram.png)

### 1.2 ROW en Subdivisiones

En un proyecto de subdivisión:

1. **Terreno bruto:** 10,000 m² (ejemplo)
2. **Menos ROW de calles:** -2,500 m² (25% del terreno)
3. **Área neta vendible:** 7,500 m² (75%)
4. **Lotes creados:** 7,500 m² / 300 m² = 25 lotes

**Impacto financiero:** El ROW es área no vendible pero necesaria. Un diseño eficiente minimiza ROW manteniendo funcionalidad.

---

## 2. Crear ROW desde Alineamientos

### 2.1 Prerequisito: Alineamiento de Calle

Para crear ROW automáticamente, primero necesitas un **alignment** que represente el eje de la calle (centerline).

**Si ya tienes alignment (del Módulo 3):**
- Procede directamente a crear ROW

**Si NO tienes alignment:**
1. Home → Create Design → **Alignment** → **Create Alignment from Objects**
2. Selecciona polyline del eje de calle
3. Crea alignment básico

**Ejemplo:** Alignment llamado "Main-Street-CL" (CL = centerline)

![Alignment for ROW](../imagenes/leccion-3-alignment-cl.png)

### 2.2 Crear ROW con Ancho Constante

**Comando:** Create ROW from Alignment

**Pasos:**

1. **Ribbon:** Home tab → Create Design panel → **Parcel** dropdown → **Create ROW**

2. **Comando:** `CreateParcelROW`

3. **Ventana "Create Right Of Way":**

   **General tab:**
   - **Alignment:** Selecciona tu alignment (ej: Main-Street-CL)
   - **Site:** Selecciona site para ROW (ej: "ROW-Street-Network")
   - **Parcel style:** ROW (estilo con hatch gris típicamente)

   **Offset Parameters:**
   - **Offset from alignment:**
     - **Left:** 7.5 m (mitad del ancho de ROW)
     - **Right:** 7.5 m
     - **Total ROW width:** 15 m (7.5 + 7.5)

   - **Fillet radius at parcel intersections:** 3 m (redondeo en esquinas)

   **Cleanup options:**
   - **☑ Automatically resolve crossing breaklines** (recomendado)

4. **OK**

5. Civil 3D crea automáticamente:
   - Parcel que representa el ROW
   - Ancho constante de 15 m a lo largo del alignment
   - Fillets (redondeos) en intersecciones

**Resultado:** ROW como parcel inteligente.

![Create ROW](../imagenes/leccion-3-create-row.png)

### 2.3 Verificar ROW Creado

**Toolspace → Prospector:**
```
Sites
└── ROW-Street-Network
    └── Parcels
        └── ROW - Main-Street-CL: 1,875.00 m²
```

**Propiedades del ROW:**
- Click derecho en ROW parcel → **Properties**
- **Area:** Muestra área total dedicada a ROW
- **Name:** Cambiar a nombre descriptivo (ej: "ROW Main Street")

---

## 3. ROW Variable con Widening

### 3.1 Widening para ROW de Ancho Variable

En algunos casos, el ROW necesita **ancho variable**:
- Ensanchamiento en curvas (para visibilidad)
- Carriles de vuelta en intersecciones
- Zonas de estacionamiento en calle

**Concepto:** Widening añade ancho adicional en secciones específicas del alignment.

### 3.2 Crear Widening

**Pasos:**

1. **Antes de crear ROW:** Define widening en el alignment

2. **Ribbon:** Modify tab → Design panel → **Alignment Properties**

3. **Alignment Properties dialog → Station Design tab**

4. **Widening section:**
   - **Add Widening...**
   - **Start Station:** 0+050 (donde inicia ensanchamiento)
   - **End Station:** 0+150 (donde termina ensanchamiento)
   - **Left Offset:** +2 m (adicional a offset base)
   - **Right Offset:** +2 m
   - OK

5. **Ahora crea ROW con el comando anterior**

**Resultado:** ROW con 15 m de ancho general, pero 19 m entre estaciones 0+050 y 0+150.

![ROW Widening](../imagenes/leccion-3-row-widening.png)

**Uso profesional:** Intersecciones típicamente requieren ROW más ancho para carriles de vuelta.

---

## 4. Corner Filets para Intersecciones

### 4.1 ¿Qué Son los Corner Filets?

Los **corner filets** son redondeos en las esquinas donde dos calles se intersectan. Sirven para:
- **Radio de giro de vehículos** - Especialmente camiones y buses
- **Visibilidad** - Elimina esquinas ciegas
- **Estética urbana** - Apariencia profesional

**Radios típicos:**
- Calle residencial local: 3-5 metros
- Calle colectora: 6-9 metros
- Intersección con avenida: 10-15 metros

![Corner Filets](../imagenes/leccion-3-corner-filets.png)

### 4.2 Especificar Fillet Radius al Crear ROW

En el comando **Create ROW** (visto anteriormente):

**Ventana "Create Right Of Way":**
- **Fillet radius at parcel intersections:** 5 m

Civil 3D automáticamente crea fillets de 5 metros donde dos ROW se intersectan.

**Editar fillet después de creación:**
1. Selecciona el segment de esquina del ROW
2. **Properties palette (Ctrl+1)**
3. **Geometry → Radius:** Cambia valor
4. Enter (parcela se actualiza dinámicamente)

---

## 5. Easements (Servidumbres)

### 5.1 Concepto de Easement

Un **easement (servidumbre)** es un derecho legal para usar parte de una propiedad privada para un propósito específico:

**Tipos comunes:**
- **Utility easement** - Para líneas de agua, drenaje, electricidad
- **Drainage easement** - Para flujo de agua superficial o canal
- **Access easement** - Derecho de paso para acceso a lote trasero
- **Conservation easement** - Protección ambiental

**Características:**
- El propietario del lote mantiene la propiedad
- Pero NO puede construir estructuras permanentes en el easement
- La entidad con derechos (ej: compañía de agua) puede entrar para mantenimiento

**Representación en plano:**
- Líneas punteadas
- Hatch especial (diferente a ROW)
- Etiqueta: "10m UTILITY EASEMENT"

![Easements](../imagenes/leccion-3-easements.png)

### 5.2 Crear Utility Easement

**Escenario:** Necesitas una servidumbre de 5 metros de ancho para tubería de agua que cruza varios lotes.

**Método 1: Crear como Parcel**

1. Dibuja polyline del eje de la tubería de agua

2. Crea offset de ±2.5 m (total 5 m):
   - Command: `OFFSET`
   - Offset distance: 2.5
   - Offset la polyline a ambos lados
   - Conecta extremos para formar polyline cerrada

3. **Home → Parcel → Create From Objects**
   - Site: Crea nuevo site "Easements-Utilities"
   - Parcel style: "Easement" (con hatch punteado)
   - Convert polyline cerrada a parcel

**Método 2: Desde Alignment (si existe)**

1. Crea alignment del eje de tubería

2. **Home → Parcel → Create ROW** (mismo comando)
   - Offset Left: 2.5 m
   - Offset Right: 2.5 m
   - Parcel style: "Easement"
   - Site: "Easements-Utilities"

**Resultado:** Easement como parcel que puede intersectar múltiples lotes residenciales.

![Utility Easement](../imagenes/leccion-3-utility-easement.png)

### 5.3 Drainage Easement

**Aplicación:** Canales de drenaje pluvial que cruzan lotes privados.

**Proceso similar:**
1. Define alignment del canal de drenaje
2. Crea easement parcel con ancho apropiado (ej: 8 metros para canal de 4 m + márgenes de 2 m)
3. Estilo: "Drainage-Easement" (color azul claro con hatch)

**Normativa:** Muchas regulaciones requieren easement de drenaje de mínimo 3 metros a cada lado del eje del canal.

---

## 6. Etiquetado de ROW y Easements

### 6.1 Labels para ROW

**Información legal requerida en planos:**
- Ancho del ROW
- Área del ROW
- Descripción (ej: "15m RIGHT-OF-WAY")
- Stations si aplica

**Añadir label a ROW parcel:**

1. **Ribbon:** Annotate tab → Labels & Tables → **Add Labels** dropdown → **Parcel** → **Add Parcel Labels**

2. **Add Labels dialog:**
   - **Label type:** Area
   - **Area label style:** Selecciona o crea "ROW Area & Width"
   - Add

3. Click en ROW parcel

**Customizar label style para mostrar "ROW" prefix:**
1. Toolspace → Settings → Parcel → Label Styles → Area
2. Click derecho en estilo → **Edit...**
3. **Layout tab:**
   - Text: `ROW - <[Area(m²|P2)]> SQ.M`
4. OK

![ROW Label](../imagenes/leccion-3-row-label.png)

### 6.2 Labels para Easements

**Similar a ROW, pero incluir tipo de easement:**

**Ejemplo de label:**
```
10.00 m UTILITY EASEMENT
Area: 125.50 SQ.M
```

**Crear label style específico:**
1. Settings → Parcel → Label Styles → Area
2. New → "Easement Label"
3. Layout tab:
   - Line 1: `<[Width(m|P2)]> m UTILITY EASEMENT`
   - Line 2: `Area: <[Area(m²|P2)]> SQ.M`
4. OK

**Aplicar a easement parcel:**
- Annotate → Add Labels → Parcel → Area
- Style: "Easement Label"
- Click en easement parcel

---

## 7. Documentación Legal de Parcelas

### 7.1 Plano de Lotificación Completo

Un plano de lotificación profesional incluye:

**Elementos obligatorios:**
- ☑ Lotes numerados con áreas
- ☑ ROW de calles con anchos y áreas
- ☑ Easements con propósitos y dimensiones
- ☑ Tabla de lotes
- ☑ Tabla de ROW
- ☑ Bearings y distances de cada segment
- ☑ Coordenadas de control
- ☑ Norte de proyecto

**Generar tabla completa:**

1. **Annotate → Add Tables → Parcel → Add Segments**

2. **Table Creation dialog:**
   - Incluye: Bearing, Distance, Radius (para curvas)
   - Select parcels: All in site
   - OK

3. Coloca tabla en layout

**Resultado:** Tabla legal con bearings/distances de todos los segmentos de parcelas.

![Legal Table](../imagenes/leccion-3-legal-table.png)

### 7.2 Metes and Bounds Description

**Descripción legal tipo "metes and bounds":** Descripción textual de límites de propiedad.

**Ejemplo:**
```
Lot 1:
Beginning at Point A (coordinates),
thence N 15°30'45" E, 25.00 meters to Point B,
thence S 74°29'15" E, 30.50 meters to Point C,
thence S 15°30'45" W, 25.00 meters to Point D,
thence N 74°29'15" W, 30.50 meters to Point A (POB).
Area: 762.50 square meters.
```

**Civil 3D puede generar esto automáticamente:**

1. Toolspace → Toolbox → Reports Manager → Parcel → **Metes and Bounds**

2. Execute report

3. Select parcel

4. Genera texto legal completo

**Uso:** Anexar a escrituras de propiedad.

---

## 8. Workflow Completo: ROW + Lotes + Easements

### 8.1 Proceso Integrado

**Orden recomendado para subdivisión completa:**

**PASO 1: Crear Alignments de Calles**
- Define centerlines de todas las calles
- Módulo 3: Alineamientos

**PASO 2: Crear ROW**
- Genera parcels de ROW desde alignments
- Site: "ROW-Street-Network"
- Ancho según clasificación vial

**PASO 3: Crear Parcel de Terreno Bruto**
- Convierte límite del terreno a parcel
- Site: "Gross-Area"

**PASO 4: Subdividir Terreno (Menos ROW)**
- Usa Parcel Sizing tools
- Site: "Residential-Lots"
- Los lotes automáticamente respetan el ROW existente (topología)

**PASO 5: Crear Easements**
- Utility easements desde alignments de tuberías
- Drainage easements desde canales
- Site: "Easements"

**PASO 6: Documentación**
- Tables de parcels
- Labels de áreas y dimensiones
- Reports legales

![Workflow Completo](../imagenes/leccion-3-workflow-completo.png)

### 8.2 Topología entre Sites

**Importante:** Parcels de diferentes sites **NO mantienen topología** entre sí.

**Ejemplo:**
- ROW en Site A
- Lotes en Site B
- Si mueves límite de ROW, lotes en Site B **NO se ajustan automáticamente**

**Solución:** Usa **parcel topology** avanzado o mantén todo en un site (menos recomendado para organización).

**Best practice:** Finaliza diseño de ROW antes de subdividir lotes residenciales.

---

## Ejercicio Práctico 3

**Objetivo:** Crear ROW y easements en una subdivisión residencial.

**Escenario:** Diseña ROW de calle principal y utility easement para línea de agua.

**Datos del proyecto:**
- Calle principal: 200 metros de longitud
- ROW requerido: 15 metros (7.5 m a cada lado del eje)
- Utility easement: 6 metros de ancho (para línea de agua paralela a la calle)
- Easement ubicado: 2 metros fuera del ROW (en zona de lotes)

**Tareas:**

1. **Crear Alignment de Calle:**
   - Dibuja polyline recta de 200 m
   - Home → Alignment → Create from Objects
   - Nombre: "Main-Street-CL"

2. **Crear ROW:**
   - Home → Parcel → Create ROW
   - Alignment: Main-Street-CL
   - Offset Left/Right: 7.5 m (total 15 m)
   - Site: Crea "ROW-Streets"
   - Parcel style: ROW

3. **Verificar área de ROW:**
   - Toolspace → Prospector → Sites → ROW-Streets → Parcels
   - ¿Cuál es el área del ROW? (debería ser ~3,000 m²: 200 m × 15 m)

4. **Crear Utility Easement:**
   - El easement va paralelo al ROW, 2 m fuera del límite derecho del ROW
   - Offset desde eje: 7.5 m (límite ROW) + 2 m (separación) + 3 m (mitad del easement) = 12.5 m
   - Crea polyline paralela al eje a 12.5 m
   - Offset ±3 m para formar easement de 6 m de ancho
   - Home → Parcel → Create From Objects
   - Site: Crea "Easements-Utilities"
   - Parcel style: Easement

5. **Etiquetar:**
   - Añade area label al ROW: "15m RIGHT-OF-WAY - [área]"
   - Añade area label al easement: "6m UTILITY EASEMENT - [área]"

6. **Crear lotes residenciales:**
   - Dibuja 2 lotes rectangulares de 300 m² cada uno adyacentes al ROW
   - Site: "Residential-Lots"
   - Observa cómo el easement cruza los lotes (servidumbre)

7. **Generar tabla de ROW:**
   - Annotate → Add Tables → Parcel → Add Area
   - Select by site: ROW-Streets
   - Coloca tabla

**Entregable:**
- Drawing con ROW, easement, y 2 lotes
- Labels visibles en todos los parcels
- Tabla de ROW
- Screenshot mostrando organización en Prospector (3 sites)

![Ejercicio 3 - ROW y Easements](../imagenes/leccion-3-ejercicio-row-easement.png)

---

## Evaluación

**Pregunta 1:** ¿Qué es el Right-of-Way (ROW) y por qué reduce el área vendible de una subdivisión?

**Pregunta 2:** ¿Cuál es el prerequisito principal para crear ROW automáticamente en Civil 3D?

**Pregunta 3:** ¿Qué son los corner filets y cuál es su propósito en intersecciones de calles?

**Pregunta 4:** ¿En qué se diferencia un easement de un ROW en términos de propiedad del terreno?

**Pregunta 5:** ¿Por qué se recomienda usar sites separados para ROW, lotes residenciales, y easements?

**Respuestas:**
1. El ROW es la franja de terreno dedicada a uso público (calles, utilidades). Reduce el área vendible porque no se pueden construir viviendas en ROW, pero es necesario para infraestructura vial.
2. Un alignment (alineamiento) que represente el eje (centerline) de la calle.
3. Los corner filets son redondeos en esquinas de intersecciones. Permiten radio de giro adecuado para vehículos, mejoran visibilidad, y dan apariencia profesional.
4. En ROW el terreno es propiedad pública (o transferido al municipio). En easement el terreno sigue siendo propiedad privada, pero existe un derecho limitado de uso para propósito específico (ej: tubería).
5. Para mejor organización del proyecto, facilita cálculos separados, claridad en documentación, y permite aplicar estilos diferentes a cada tipo de parcel.

---

## Recursos Adicionales

**Documentación oficial:**
- Civil 3D 2026 - Creating Right-of-Way Parcels
- Easement Design Guide

**Normativas de referencia:**
- Anchos de ROW según clasificación vial (DOT local)
- Requerimientos de easements de utilidades (compañías de servicios)
- Códigos de desarrollo urbano (municipio)

**Templates:**
- `ROW-Styles-Library.dwg` (estilos predefinidos para ROW y easements)

---

## Resumen

En esta lección aprendiste:

✅ El concepto legal de Right-of-Way y su impacto en área vendible
✅ Crear ROW automáticamente desde alignments de calles con ancho constante
✅ Aplicar widening para ROW variable en intersecciones
✅ Especificar corner filets para redondeo de esquinas en intersecciones
✅ Crear utility easements y drainage easements como parcels especiales
✅ Etiquetar ROW y easements con información legal apropiada
✅ Generar documentación legal (tablas, metes and bounds)
✅ Workflow completo integrando ROW, lotes, y easements en subdivisión

**Próxima Lección:** Feature Lines para Diseño de Grading (líneas con elevaciones para nivelación de terrenos)

---

**Tiempo de estudio recomendado:** 60 minutos
**Práctica adicional:** 45 minutos diseñando ROW para intersecciones complejas
