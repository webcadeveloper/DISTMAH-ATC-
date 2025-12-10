# Lección 6: Color Schemes y Visualización de Zonas

![Color Schemes y Visualización](../imagenes/leccion-06-color-schemes.png)

## Introducción

Los **color schemes** (esquemas de color) son una herramienta poderosa de Revit MEP 2026 para visualizar propiedades térmicas de espacios y zonas de manera gráfica. Esta funcionalidad, mejorada en la versión 2026 específicamente para HVAC Zones y System Zones, permite crear presentaciones profesionales, identificar rápidamente áreas críticas y comunicar análisis térmico de forma efectiva a clientes y stakeholders.

En esta lección aprenderás a crear esquemas de color personalizados, visualizar cargas por gradientes de color, generar leyendas profesionales y preparar documentación visual de alta calidad para análisis térmico.

**Duración estimada:** 40 minutos

---

## 1. Introducción a Color Schemes

### ¿Qué son los Color Schemes?

Los **Color Schemes** son representaciones gráficas que colorean elementos del modelo (espacios, zonas, habitaciones) según el valor de un parámetro específico. En lugar de leer valores en una tabla, se visualiza información instantáneamente mediante colores.

**Ventajas:**
- ✅ **Identificación visual rápida** de áreas con características similares
- ✅ **Detección de anomalías** (cargas inusuales, zonas sin asignar)
- ✅ **Presentaciones efectivas** a clientes y gerencia
- ✅ **Análisis comparativo visual** entre opciones de diseño
- ✅ **Comunicación clara** de información técnica compleja

### Color Schemes en Revit 2026

**Novedades 2026:**
- Color schemes nativos para **HVAC Zones** y **System Zones**
- Mejor integración con scheduling de zonas
- Gradientes de color automáticos para parámetros numéricos
- Leyendas de color más flexibles y personalizables
- Sincronización automática entre color scheme y valores del modelo

---

## 2. Tipos de Color Schemes para Análisis Térmico

### 1. Color Scheme por Zona Térmica

**Propósito:** Mostrar diferentes zonas con colores únicos

**Parámetro:** HVAC Zone Name o System Zone Name

**Resultado:** Cada zona tiene un color diferente

**Uso típico:**
- Identificar límites de zonas
- Verificar asignación de espacios a zonas
- Presentar distribución de zonas en edificio

### 2. Color Scheme por Carga de Enfriamiento

**Propósito:** Visualizar magnitud de carga de cooling

**Parámetro:** Calculated Cooling Load

**Resultado:** Gradiente de color (azul = baja, rojo = alta)

**Uso típico:**
- Identificar espacios/zonas críticas (alta carga)
- Priorizar optimización de áreas con mayor demanda
- Análisis de impacto de orientación solar

### 3. Color Scheme por Carga de Calefacción

**Propósito:** Visualizar magnitud de carga de heating

**Parámetro:** Calculated Heating Load

**Resultado:** Gradiente de color (verde = baja, naranja = alta)

**Uso típico:**
- Identificar espacios con mayor pérdida de calor
- Evaluar efectividad de aislamiento
- Optimizar zonas perimetrales

### 4. Color Scheme por Densidad de Carga

**Propósito:** Visualizar carga por unidad de área

**Parámetro:** Cooling Load Density (kW/m²)

**Resultado:** Gradiente mostrando intensidad

**Uso típico:**
- Comparar zonas de diferentes tamaños
- Identificar espacios con alta densidad (servidores, etc.)
- Normalizar análisis por área

### 5. Color Scheme por Tipo de Servicio

**Propósito:** Mostrar diferentes sistemas HVAC

**Parámetro:** Service Type

**Resultado:** Colores por categoría:
- Heating and Cooling: Azul
- Cooling Only: Cyan
- Heating Only: Naranja
- Exhaust: Gris
- No Service: Blanco

---

## 3. Crear Color Scheme Básico

### Paso a Paso: Color Scheme para HVAC Zones

1. **Abrir vista de planta HVAC**
   - Vista "Mechanical Plan" del nivel deseado

2. **Activar Color Fill Legend:**
   - Annotate tab → Color Fill → `Space` o `HVAC Zone`
   - Hacer clic en planta para colocar leyenda

3. **Seleccionar esquema:**
   - En Properties de la leyenda
   - Color Scheme: Seleccionar de lista desplegable
   - Opciones disponibles:
     - Name (zonas por nombre)
     - Service Type
     - Calculated Cooling Load
     - Calculated Heating Load

4. **Ajustar posición de leyenda:**
   - Arrastrar leyenda a ubicación apropiada
   - Típicamente en esquina inferior derecha

5. **Resultado:**
   - Espacios/zonas se colorean automáticamente
   - Leyenda muestra correspondencia color-valor

### Paso a Paso: Color Scheme para System Zones

1. **En vista de planta:**
   - Annotate tab → Color Fill → `System Zone`

2. **Colocar leyenda en planta**

3. **Seleccionar esquema:**
   - By Zone Name
   - By Calculated Cooling Load
   - By Service Type

4. **Ajustar visualización**

---

## 4. Personalizar Color Schemes

### Editar Esquema de Color Existente

**Modificar rangos y colores:**

1. **Seleccionar Color Fill Legend** en planta

2. **Edit Scheme** (botón en ribbon cuando leyenda seleccionada)

3. **Cuadro de diálogo "Edit Color Scheme":**

   **Para esquemas por valor (ej: Cooling Load):**
   - Ver tabla con rangos:
     ```
     Range         Color
     ──────────────────────
     0-10 kW      Verde (RGB 0,255,0)
     10-25 kW     Amarillo (RGB 255,255,0)
     25-50 kW     Naranja (RGB 255,128,0)
     >50 kW       Rojo (RGB 255,0,0)
     ```

   **Para esquemas por categoría (ej: Zone Name):**
   - Cada zona tiene color asignado
   - Cambiar color: Clic en cuadro de color → Seleccionar nuevo color

4. **Modificar rangos:**
   - **Add:** Agregar nuevo rango
   - **Delete:** Eliminar rango
   - **Modify:** Cambiar límites de rango

5. **Aplicar cambios:**
   - OK → Color scheme se actualiza en planta

### Crear Color Scheme Personalizado

**Esquema basado en parámetro custom:**

1. **Manage tab → Object Styles → Analytical Spaces (o Zones)**

2. **Settings → Schemes → New**

3. **Nombrar esquema:**
   - Name: "Cooling Load Intensity"
   - Based on parameter: Calculated Cooling Load

4. **Definir rangos:**
   - By range (gradiente)
   - O: By value (categorías)

5. **Asignar colores:**
   - Seleccionar paleta de colores apropiada
   - Gradiente frío-caliente (azul → rojo)
   - O: Colores corporativos del proyecto

6. **Save scheme**

7. **Aplicar en vista:**
   - Color Fill Legend → Seleccionar esquema custom creado

---

## 5. Paletas de Color Profesionales

### Gradientes Recomendados

#### Para Cargas de Enfriamiento
```
Baja carga → Alta carga
──────────────────────────
Azul intenso (RGB 0,100,255)    0-15 kW
Azul claro (RGB 100,200,255)    15-30 kW
Verde (RGB 0,255,0)              30-50 kW
Amarillo (RGB 255,255,0)         50-75 kW
Naranja (RGB 255,128,0)          75-100 kW
Rojo (RGB 255,0,0)               >100 kW
```

**Psicología del color:** Azul (frío) = baja necesidad de enfriamiento, Rojo (calor) = alta necesidad

#### Para Cargas de Calefacción
```
Baja carga → Alta carga
──────────────────────────
Verde (RGB 0,255,0)         0-10 kW
Amarillo (RGB 255,255,0)    10-25 kW
Naranja (RGB 255,150,0)     25-50 kW
Rojo (RGB 255,0,0)          >50 kW
```

#### Para Densidad de Carga (kW/m²)
```
Densidad baja → alta
──────────────────────────
Blanco (RGB 255,255,255)    0-50 W/m²
Amarillo claro (RGB 255,255,200)  50-100 W/m²
Naranja claro (RGB 255,200,100)   100-150 W/m²
Naranja (RGB 255,128,0)     150-200 W/m²
Rojo (RGB 200,0,0)          >200 W/m²
```

### Paletas Alternativas

**Paleta monocromática (escala de grises):**
- Para impresión en blanco y negro
- Blanco → Gris claro → Gris medio → Gris oscuro → Negro

**Paleta categórica (zonas por nombre):**
- Usar colores diferenciados claramente
- Evitar colores muy similares (difícil distinguir)
- Máximo 8-10 colores diferentes (legibilidad)

---

## 6. Leyendas de Color Avanzadas

### Personalizar Apariencia de Leyenda

**Editar Color Fill Legend:**

1. **Seleccionar leyenda** en planta

2. **Edit Type:**
   - **Text Font:** Arial, Helvetica (profesional)
   - **Text Size:** 2.5mm (legible en escala 1:100)
   - **Title:** Mostrar/ocultar título de leyenda

3. **Properties de instancia:**
   - **Title:** Cambiar texto (ej: "Cargas de Enfriamiento (kW)")
   - **Height:** Ajustar altura de leyenda
   - **Width:** Ajustar ancho

### Múltiples Leyendas en Misma Vista

**Para mostrar varios esquemas:**

1. **Duplicar vista:**
   - View → Duplicate View → Duplicate with Detailing

2. **Vista 1:**
   - Color scheme: Calculated Cooling Load
   - Título: "Análisis de Enfriamiento"

3. **Vista 2:**
   - Color scheme: Calculated Heating Load
   - Título: "Análisis de Calefacción"

4. **Colocar ambas vistas en sheet:**
   - Sheet 1: Lado a lado para comparación

**Alternativamente (en misma vista):**
- Colocar 2 Color Fill Legends con diferentes esquemas
- Una para Cooling, otra para Heating
- Requiere espacio suficiente en planta

---

## 7. Visualización 3D con Color Schemes

### Aplicar Color Scheme en Vista 3D

**Limitación:** Color Schemes tradicionales solo funcionan en vistas de planta.

**Solución alternativa:**

1. **Usar Filters para coloring 3D:**

   **Crear filtro por carga de cooling:**
   - View tab → Filters → New
   - Name: "High Cooling Load"
   - Category: Spaces
   - Filter Rules:
     - Calculated Cooling Load > 50 kW
   - Override Graphics:
     - Surface: Rojo transparente (50% transparencia)

2. **Aplicar filtro en 3D:**
   - Vista 3D → Visibility/Graphics → Filters tab
   - Add filter "High Cooling Load"
   - Espacios con carga >50kW se muestran en rojo

3. **Crear múltiples filtros:**
   - Low Cooling (0-25 kW): Verde
   - Medium Cooling (25-50 kW): Amarillo
   - High Cooling (>50 kW): Rojo

### Render con Color Zones

**Para presentaciones de alta calidad:**

1. **Vista 3D con filtros** de color aplicados

2. **Render:**
   - View tab → Render → Render in Cloud (o local)
   - Settings: Medium o High quality

3. **Export image:**
   - PNG o JPG de alta resolución
   - Usar en presentaciones PowerPoint o PDF

---

## 8. Presentación de Análisis Térmico

### Layout de Sheet Profesional

**Sheet 1: Análisis de Cargas de Enfriamiento**

```
┌────────────────────────────────────────────┐
│  ANÁLISIS DE CARGAS DE ENFRIAMIENTO        │
│  Torre de Oficinas XYZ                     │
├────────────────────────────────────────────┤
│                                            │
│  [Planta Piso 1 con color scheme]         │
│  Leyenda: Cooling Load (kW)               │
│                                            │
│  [Planta Piso 2 con color scheme]         │
│                                            │
│  [Planta Piso 3 con color scheme]         │
│                                            │
├────────────────────────────────────────────┤
│  NOTAS:                                    │
│  - Método: ASHRAE RTS                      │
│  - Temp exterior diseño: 30°C              │
│  - Zonas en ROJO requieren atención        │
└────────────────────────────────────────────┘
```

**Sheet 2: Comparación Cooling vs Heating**

```
┌──────────────────┬──────────────────────────┐
│  ENFRIAMIENTO    │    CALEFACCIÓN          │
├──────────────────┼──────────────────────────┤
│  [Planta con     │   [Planta con            │
│   cooling scheme]│    heating scheme]       │
│                  │                          │
│  Leyenda (kW)    │   Leyenda (kW)          │
│  0-25  Verde     │   0-10  Verde           │
│  25-50 Amarillo  │   10-25 Amarillo        │
│  >50   Rojo      │   >25   Rojo            │
└──────────────────┴──────────────────────────┘
```

### Añadir Anotaciones

**Anotar zonas críticas:**

1. **Text tool** → Agregar notas:
   - "Zona crítica - Considerar sombreado exterior"
   - "Mayor carga solar - Optimizar SHGC de ventanas"
   - "Data center - Sistema dedicado requerido"

2. **Leaders (flechas)** señalando áreas específicas

3. **Callouts** con detalles:
   - Detalle de zona con breakdown de carga
   - Recomendación de equipo específico

---

## 9. Ejercicio Práctico

### Crear Presentación Visual de Análisis Térmico

**Proyecto: Torre de Oficinas 3 Pisos**

Continuación del edificio usado en lecciones anteriores.

**Tareas:**

#### Parte A: Color Schemes en Planta

1. **Crear 3 color schemes diferentes:**

   **Scheme 1: Por HVAC Zone Name**
   - Annotate → Color Fill → HVAC Zone
   - Edit Scheme → Asignar color único a cada zona (9 colores)
   - Colores sugeridos: Paleta categórica profesional

   **Scheme 2: Por Calculated Cooling Load**
   - Color Fill → Space
   - Parameter: Calculated Cooling Load
   - Definir rangos:
     - 0-2 kW: Verde
     - 2-4 kW: Amarillo
     - 4-6 kW: Naranja
     - >6 kW: Rojo

   **Scheme 3: Por Calculated Heating Load**
   - Similar al anterior, ajustar rangos para heating

2. **Crear 3 vistas duplicadas:**
   - Vista 1: P1-P2-P3 con Scheme 1 (HVAC Zones)
   - Vista 2: P1-P2-P3 con Scheme 2 (Cooling Load)
   - Vista 3: P1-P2-P3 con Scheme 3 (Heating Load)

#### Parte B: Personalización de Leyendas

3. **Personalizar cada Color Fill Legend:**
   - Title apropiado (ej: "Distribución de Zonas HVAC")
   - Text size: 2.5mm
   - Position: Esquina inferior derecha

4. **Añadir anotaciones:**
   - Identificar zona con mayor carga cooling (etiquetar)
   - Identificar zona con mayor carga heating (etiquetar)
   - Añadir nota sobre metodología (ASHRAE RTS)

#### Parte C: Visualización 3D

5. **Crear filtros para vista 3D:**
   - Filter "High Cooling": Calculated Cooling Load > 4 kW (Rojo)
   - Filter "Medium Cooling": 2-4 kW (Amarillo)
   - Filter "Low Cooling": 0-2 kW (Verde)

6. **Aplicar filtros en vista 3D isométrica**

7. **Render de vista 3D:**
   - Quality: Medium
   - Export imagen PNG

#### Parte D: Sheets de Presentación

8. **Crear 2 sheets:**

   **Sheet M-301: Análisis de Cargas por Zona**
   - 3 plantas (P1, P2, P3) con Scheme 1 (HVAC Zones)
   - Titleblock con información del proyecto
   - Notas generales

   **Sheet M-302: Análisis Térmico Comparativo**
   - Layout lado a lado:
     - Izquierda: Planta con Cooling Load scheme
     - Derecha: Planta con Heating Load scheme
   - Leyendas visibles
   - Anotaciones de zonas críticas

9. **Export sheets to PDF:**
   - Alta resolución (300 DPI)
   - Para presentación a cliente

#### Parte E: Análisis y Documentación

10. **Crear documento de análisis (2-3 páginas):**
    - Página 1: Introducción y metodología
    - Página 2: Análisis de resultados
      - Captura de Sheet M-301
      - Interpretación de distribución de zonas
      - Identificación de zonas críticas (colores rojo/naranja)
    - Página 3: Recomendaciones
      - Zonas que requieren optimización
      - Propuestas de mejora (sombreado, ventanas, aislamiento)
      - Render 3D con filtros de color

**Entregables:**
- 3 vistas de planta con color schemes diferentes
- Vista 3D con filtros de color + render
- 2 sheets profesionales (M-301, M-302)
- PDF de sheets de alta resolución
- Documento de análisis (2-3 páginas) con capturas y recomendaciones

---

## Resumen de la Lección

En esta lección aprendiste:

✅ **Color Schemes** - Visualización gráfica de propiedades térmicas
✅ **Tipos de esquemas** - Por zona, por carga, por densidad, por tipo de servicio
✅ **Crear y personalizar** color schemes básicos y avanzados
✅ **Paletas de color profesionales** - Gradientes y categorías apropiadas
✅ **Leyendas personalizadas** - Títulos, rangos, formato
✅ **Visualización 3D** - Filtros para coloring en vistas 3D
✅ **Presentación profesional** - Layouts de sheets, anotaciones, PDF
✅ **Comunicación visual** - Transmitir análisis complejo de forma clara

---

## Conclusión del Módulo 3

### Resumen del Módulo Completo

Has completado el **Módulo 3: Análisis de Cargas Térmicas**, donde aprendiste:

**Lección 1:** Espacios y configuración térmica
**Lección 2:** HVAC Zones mejoradas (Revit 2026)
**Lección 3:** Enhanced System Zones (novedad 2026)
**Lección 4:** Cálculo de cargas térmicas (ASHRAE RTS)
**Lección 5:** Análisis energético y reportes
**Lección 6:** Color schemes y visualización

### Siguientes Pasos

Con los conocimientos adquiridos, estás preparado para:

1. **Realizar análisis de cargas** profesionales en proyectos reales
2. **Dimensionar sistemas HVAC** correctamente basado en cargas calculadas
3. **Optimizar diseño** mediante análisis comparativo de opciones
4. **Presentar resultados** de forma visual y efectiva
5. **Continuar al Módulo 4:** Sistemas de Ventilación

---

## Próximo Módulo

**Módulo 4: Sistemas de Ventilación**

Aplicarás el conocimiento de cargas térmicas para diseñar sistemas de ventilación mecánica, dimensionar ductos de extracción y suministro de aire fresco, calcular caudales de ventilación según normas ASHRAE 62.1 y seleccionar ventiladores apropiados.

---

**Curso:** Revit MEP 2026 - Instalaciones Mecánicas (HVAC)
**Módulo 3:** Análisis de Cargas Térmicas
**Instructor:** Ing. MEP - Especialista en Sistemas Mecánicos
